"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/typescript/TypeScriptParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var TypeScriptParser = /** @class */ (function (_super) {
    __extends(TypeScriptParser, _super);
    function TypeScriptParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(TypeScriptParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(TypeScriptParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return TypeScriptParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "TypeScriptParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptParser.prototype, "ruleNames", {
        // @Override
        get: function () { return TypeScriptParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptParser.prototype, "serializedATN", {
        // @Override
        get: function () { return TypeScriptParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    TypeScriptParser.prototype.initializer = function () {
        var _localctx = new InitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TypeScriptParser.RULE_initializer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 276;
                this.match(TypeScriptParser.Assign);
                this.state = 277;
                this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.bindingPattern = function () {
        var _localctx = new BindingPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TypeScriptParser.RULE_bindingPattern);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.OpenBracket:
                        {
                            this.state = 279;
                            this.arrayLiteral();
                        }
                        break;
                    case TypeScriptParser.OpenBrace:
                        {
                            this.state = 280;
                            this.objectLiteral();
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
    TypeScriptParser.prototype.typeParameters = function () {
        var _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TypeScriptParser.RULE_typeParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.match(TypeScriptParser.LessThan);
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan || _la === TypeScriptParser.Identifier) {
                    {
                        this.state = 284;
                        this.typeParameterList();
                    }
                }
                this.state = 287;
                this.match(TypeScriptParser.MoreThan);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeParameterList = function () {
        var _localctx = new TypeParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TypeScriptParser.RULE_typeParameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 289;
                this.typeParameter();
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeScriptParser.Comma) {
                    {
                        {
                            this.state = 290;
                            this.match(TypeScriptParser.Comma);
                            this.state = 291;
                            this.typeParameter();
                        }
                    }
                    this.state = 296;
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
    TypeScriptParser.prototype.typeParameter = function () {
        var _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TypeScriptParser.RULE_typeParameter);
        var _la;
        try {
            this.state = 302;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 297;
                        this.match(TypeScriptParser.Identifier);
                        this.state = 299;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Extends) {
                            {
                                this.state = 298;
                                this.constraint();
                            }
                        }
                    }
                    break;
                case TypeScriptParser.LessThan:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 301;
                        this.typeParameters();
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
    TypeScriptParser.prototype.constraint = function () {
        var _localctx = new ConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TypeScriptParser.RULE_constraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this.match(TypeScriptParser.Extends);
                this.state = 305;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeArguments = function () {
        var _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TypeScriptParser.RULE_typeArguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(TypeScriptParser.LessThan);
                this.state = 309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (TypeScriptParser.Typeof - 64)) | (1 << (TypeScriptParser.New - 64)) | (1 << (TypeScriptParser.Void - 64)) | (1 << (TypeScriptParser.This - 64)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (TypeScriptParser.Any - 107)) | (1 << (TypeScriptParser.Number - 107)) | (1 << (TypeScriptParser.Boolean - 107)) | (1 << (TypeScriptParser.String - 107)) | (1 << (TypeScriptParser.Symbol - 107)) | (1 << (TypeScriptParser.Identifier - 107)) | (1 << (TypeScriptParser.StringLiteral - 107)))) !== 0)) {
                    {
                        this.state = 308;
                        this.typeArgumentList();
                    }
                }
                this.state = 311;
                this.match(TypeScriptParser.MoreThan);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeArgumentList = function () {
        var _localctx = new TypeArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TypeScriptParser.RULE_typeArgumentList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.typeArgument();
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeScriptParser.Comma) {
                    {
                        {
                            this.state = 314;
                            this.match(TypeScriptParser.Comma);
                            this.state = 315;
                            this.typeArgument();
                        }
                    }
                    this.state = 320;
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
    TypeScriptParser.prototype.typeArgument = function () {
        var _localctx = new TypeArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TypeScriptParser.RULE_typeArgument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 321;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.type_ = function () {
        var _localctx = new Type_Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, TypeScriptParser.RULE_type_);
        try {
            this.state = 328;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 323;
                        this.unionOrIntersectionOrPrimaryType(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 324;
                        this.functionType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 325;
                        this.constructorType();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 326;
                        this.typeGeneric();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 327;
                        this.match(TypeScriptParser.StringLiteral);
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
    TypeScriptParser.prototype.unionOrIntersectionOrPrimaryType = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new UnionOrIntersectionOrPrimaryTypeContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 20;
        this.enterRecursionRule(_localctx, 20, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    _localctx = new PrimaryContext(_localctx);
                    this._ctx = _localctx;
                    _prevctx = _localctx;
                    this.state = 331;
                    this.primaryType(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 341;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 339;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new UnionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType);
                                        this.state = 333;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 334;
                                        this.match(TypeScriptParser.BitOr);
                                        this.state = 335;
                                        this.unionOrIntersectionOrPrimaryType(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new IntersectionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType);
                                        this.state = 336;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 337;
                                        this.match(TypeScriptParser.BitAnd);
                                        this.state = 338;
                                        this.unionOrIntersectionOrPrimaryType(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 343;
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
    TypeScriptParser.prototype.primaryType = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new PrimaryTypeContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 22;
        this.enterRecursionRule(_localctx, 22, TypeScriptParser.RULE_primaryType, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            _localctx = new ParenthesizedPrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 345;
                            this.match(TypeScriptParser.OpenParen);
                            this.state = 346;
                            this.type_();
                            this.state = 347;
                            this.match(TypeScriptParser.CloseParen);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new PredefinedPrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 349;
                            this.predefinedType();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new ReferencePrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 350;
                            this.typeReference();
                        }
                        break;
                    case 4:
                        {
                            _localctx = new ObjectPrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 351;
                            this.objectType();
                        }
                        break;
                    case 5:
                        {
                            _localctx = new TuplePrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 352;
                            this.match(TypeScriptParser.OpenBracket);
                            this.state = 353;
                            this.tupleElementTypes();
                            this.state = 354;
                            this.match(TypeScriptParser.CloseBracket);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new QueryPrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 356;
                            this.typeQuery();
                        }
                        break;
                    case 7:
                        {
                            _localctx = new ThisPrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 357;
                            this.match(TypeScriptParser.This);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new RedefinitionOfTypeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 358;
                            this.typeReference();
                            this.state = 359;
                            this.match(TypeScriptParser.Is);
                            this.state = 360;
                            this.primaryType(1);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 370;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ArrayPrimTypeContext(new PrimaryTypeContext(_parentctx, _parentState));
                                this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_primaryType);
                                this.state = 364;
                                if (!(this.precpred(this._ctx, 5))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                }
                                this.state = 365;
                                if (!(notLineTerminator())) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "notLineTerminator()");
                                }
                                this.state = 366;
                                this.match(TypeScriptParser.OpenBracket);
                                this.state = 367;
                                this.match(TypeScriptParser.CloseBracket);
                            }
                        }
                    }
                    this.state = 372;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
    TypeScriptParser.prototype.predefinedType = function () {
        var _localctx = new PredefinedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TypeScriptParser.RULE_predefinedType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                _la = this._input.LA(1);
                if (!(_la === TypeScriptParser.Void || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (TypeScriptParser.Any - 107)) | (1 << (TypeScriptParser.Number - 107)) | (1 << (TypeScriptParser.Boolean - 107)) | (1 << (TypeScriptParser.String - 107)) | (1 << (TypeScriptParser.Symbol - 107)))) !== 0))) {
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
    TypeScriptParser.prototype.typeReference = function () {
        var _localctx = new TypeReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TypeScriptParser.RULE_typeReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 375;
                this.typeName();
                this.state = 378;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 376;
                            this.typeIncludeGeneric();
                        }
                        break;
                    case 2:
                        {
                            this.state = 377;
                            this.typeGeneric();
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
    TypeScriptParser.prototype.typeGeneric = function () {
        var _localctx = new TypeGenericContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TypeScriptParser.RULE_typeGeneric);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(TypeScriptParser.LessThan);
                this.state = 381;
                this.typeArgumentList();
                this.state = 382;
                this.match(TypeScriptParser.MoreThan);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeIncludeGeneric = function () {
        var _localctx = new TypeIncludeGenericContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TypeScriptParser.RULE_typeIncludeGeneric);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(TypeScriptParser.LessThan);
                this.state = 385;
                this.typeArgumentList();
                this.state = 386;
                this.match(TypeScriptParser.LessThan);
                this.state = 387;
                this.typeArgumentList();
                this.state = 393;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.MoreThan:
                        {
                            this.state = 388;
                            this.match(TypeScriptParser.MoreThan);
                            this.state = 389;
                            this.bindingPattern();
                            this.state = 390;
                            this.match(TypeScriptParser.MoreThan);
                        }
                        break;
                    case TypeScriptParser.RightShiftArithmetic:
                        {
                            this.state = 392;
                            this.match(TypeScriptParser.RightShiftArithmetic);
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
    TypeScriptParser.prototype.typeName = function () {
        var _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, TypeScriptParser.RULE_typeName);
        try {
            this.state = 397;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 395;
                        this.match(TypeScriptParser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 396;
                        this.namespaceName();
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
    TypeScriptParser.prototype.objectType = function () {
        var _localctx = new ObjectTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, TypeScriptParser.RULE_objectType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 399;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || _la === TypeScriptParser.Identifier || _la === TypeScriptParser.StringLiteral) {
                    {
                        this.state = 400;
                        this.typeBody();
                    }
                }
                this.state = 403;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeBody = function () {
        var _localctx = new TypeBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, TypeScriptParser.RULE_typeBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 405;
                this.typeMemberList();
                this.state = 407;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.SemiColon || _la === TypeScriptParser.Comma) {
                    {
                        this.state = 406;
                        _la = this._input.LA(1);
                        if (!(_la === TypeScriptParser.SemiColon || _la === TypeScriptParser.Comma)) {
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
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeMemberList = function () {
        var _localctx = new TypeMemberListContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, TypeScriptParser.RULE_typeMemberList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 409;
                this.typeMember();
                this.state = 414;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 410;
                                _la = this._input.LA(1);
                                if (!(_la === TypeScriptParser.SemiColon || _la === TypeScriptParser.Comma)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 411;
                                this.typeMember();
                            }
                        }
                    }
                    this.state = 416;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeMember = function () {
        var _localctx = new TypeMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, TypeScriptParser.RULE_typeMember);
        var _la;
        try {
            this.state = 426;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 417;
                        this.propertySignatur();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 418;
                        this.callSignature();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 419;
                        this.constructSignature();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 420;
                        this.indexSignature();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 421;
                        this.methodSignature();
                        this.state = 424;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.ARROW) {
                            {
                                this.state = 422;
                                this.match(TypeScriptParser.ARROW);
                                this.state = 423;
                                this.type_();
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
    TypeScriptParser.prototype.arrayType = function () {
        var _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, TypeScriptParser.RULE_arrayType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.primaryType(0);
                this.state = 429;
                if (!(notLineTerminator())) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "notLineTerminator()");
                }
                this.state = 430;
                this.match(TypeScriptParser.OpenBracket);
                this.state = 431;
                this.match(TypeScriptParser.CloseBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.tupleType = function () {
        var _localctx = new TupleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, TypeScriptParser.RULE_tupleType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 433;
                this.match(TypeScriptParser.OpenBracket);
                this.state = 434;
                this.tupleElementTypes();
                this.state = 435;
                this.match(TypeScriptParser.CloseBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.tupleElementTypes = function () {
        var _localctx = new TupleElementTypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, TypeScriptParser.RULE_tupleElementTypes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 437;
                this.type_();
                this.state = 442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeScriptParser.Comma) {
                    {
                        {
                            this.state = 438;
                            this.match(TypeScriptParser.Comma);
                            this.state = 439;
                            this.type_();
                        }
                    }
                    this.state = 444;
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
    TypeScriptParser.prototype.functionType = function () {
        var _localctx = new FunctionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, TypeScriptParser.RULE_functionType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan) {
                    {
                        this.state = 445;
                        this.typeParameters();
                    }
                }
                this.state = 448;
                this.match(TypeScriptParser.OpenParen);
                this.state = 450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)) | (1 << (TypeScriptParser.Any - 86)) | (1 << (TypeScriptParser.Number - 86)) | (1 << (TypeScriptParser.Boolean - 86)) | (1 << (TypeScriptParser.String - 86)) | (1 << (TypeScriptParser.Symbol - 86)))) !== 0) || _la === TypeScriptParser.At || _la === TypeScriptParser.Identifier) {
                    {
                        this.state = 449;
                        this.parameterList();
                    }
                }
                this.state = 452;
                this.match(TypeScriptParser.CloseParen);
                this.state = 453;
                this.match(TypeScriptParser.ARROW);
                this.state = 454;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.constructorType = function () {
        var _localctx = new ConstructorTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, TypeScriptParser.RULE_constructorType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 456;
                this.match(TypeScriptParser.New);
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan) {
                    {
                        this.state = 457;
                        this.typeParameters();
                    }
                }
                this.state = 460;
                this.match(TypeScriptParser.OpenParen);
                this.state = 462;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)) | (1 << (TypeScriptParser.Any - 86)) | (1 << (TypeScriptParser.Number - 86)) | (1 << (TypeScriptParser.Boolean - 86)) | (1 << (TypeScriptParser.String - 86)) | (1 << (TypeScriptParser.Symbol - 86)))) !== 0) || _la === TypeScriptParser.At || _la === TypeScriptParser.Identifier) {
                    {
                        this.state = 461;
                        this.parameterList();
                    }
                }
                this.state = 464;
                this.match(TypeScriptParser.CloseParen);
                this.state = 465;
                this.match(TypeScriptParser.ARROW);
                this.state = 466;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeQuery = function () {
        var _localctx = new TypeQueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, TypeScriptParser.RULE_typeQuery);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 468;
                this.match(TypeScriptParser.Typeof);
                this.state = 469;
                this.typeQueryExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeQueryExpression = function () {
        var _localctx = new TypeQueryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, TypeScriptParser.RULE_typeQueryExpression);
        try {
            var _alt = void 0;
            this.state = 481;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 471;
                        this.match(TypeScriptParser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 475;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 472;
                                            this.identifierName();
                                            this.state = 473;
                                            this.match(TypeScriptParser.Dot);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 477;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 479;
                        this.identifierName();
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
    TypeScriptParser.prototype.propertySignatur = function () {
        var _localctx = new PropertySignaturContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, TypeScriptParser.RULE_propertySignatur);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 484;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 483;
                            this.match(TypeScriptParser.ReadOnly);
                        }
                        break;
                }
                this.state = 486;
                this.propertyName();
                this.state = 488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.QuestionMark) {
                    {
                        this.state = 487;
                        this.match(TypeScriptParser.QuestionMark);
                    }
                }
                this.state = 491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 490;
                        this.typeAnnotation();
                    }
                }
                this.state = 495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.ARROW) {
                    {
                        this.state = 493;
                        this.match(TypeScriptParser.ARROW);
                        this.state = 494;
                        this.type_();
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
    TypeScriptParser.prototype.typeAnnotation = function () {
        var _localctx = new TypeAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, TypeScriptParser.RULE_typeAnnotation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 497;
                this.match(TypeScriptParser.Colon);
                this.state = 498;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.callSignature = function () {
        var _localctx = new CallSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, TypeScriptParser.RULE_callSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan) {
                    {
                        this.state = 500;
                        this.typeParameters();
                    }
                }
                this.state = 503;
                this.match(TypeScriptParser.OpenParen);
                this.state = 505;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)) | (1 << (TypeScriptParser.Any - 86)) | (1 << (TypeScriptParser.Number - 86)) | (1 << (TypeScriptParser.Boolean - 86)) | (1 << (TypeScriptParser.String - 86)) | (1 << (TypeScriptParser.Symbol - 86)))) !== 0) || _la === TypeScriptParser.At || _la === TypeScriptParser.Identifier) {
                    {
                        this.state = 504;
                        this.parameterList();
                    }
                }
                this.state = 507;
                this.match(TypeScriptParser.CloseParen);
                this.state = 509;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                    case 1:
                        {
                            this.state = 508;
                            this.typeAnnotation();
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
    TypeScriptParser.prototype.parameterList = function () {
        var _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, TypeScriptParser.RULE_parameterList);
        var _la;
        try {
            this.state = 537;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 511;
                        this.restParameter();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 512;
                        this.predefinedType();
                        this.state = 517;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TypeScriptParser.Comma) {
                            {
                                {
                                    this.state = 513;
                                    this.match(TypeScriptParser.Comma);
                                    this.state = 514;
                                    this.predefinedType();
                                }
                            }
                            this.state = 519;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 520;
                        this.optionalParameterList();
                        this.state = 523;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Comma) {
                            {
                                this.state = 521;
                                this.match(TypeScriptParser.Comma);
                                this.state = 522;
                                this.restParameter();
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 525;
                        this.requiredParameterList();
                        this.state = 535;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Comma) {
                            {
                                this.state = 526;
                                this.match(TypeScriptParser.Comma);
                                this.state = 533;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case TypeScriptParser.OpenBracket:
                                    case TypeScriptParser.OpenBrace:
                                    case TypeScriptParser.NullLiteral:
                                    case TypeScriptParser.BooleanLiteral:
                                    case TypeScriptParser.Break:
                                    case TypeScriptParser.Do:
                                    case TypeScriptParser.Instanceof:
                                    case TypeScriptParser.Typeof:
                                    case TypeScriptParser.Case:
                                    case TypeScriptParser.Else:
                                    case TypeScriptParser.New:
                                    case TypeScriptParser.Var:
                                    case TypeScriptParser.Catch:
                                    case TypeScriptParser.Finally:
                                    case TypeScriptParser.Return:
                                    case TypeScriptParser.Void:
                                    case TypeScriptParser.Continue:
                                    case TypeScriptParser.For:
                                    case TypeScriptParser.Switch:
                                    case TypeScriptParser.While:
                                    case TypeScriptParser.Debugger:
                                    case TypeScriptParser.Function:
                                    case TypeScriptParser.This:
                                    case TypeScriptParser.With:
                                    case TypeScriptParser.Default:
                                    case TypeScriptParser.If:
                                    case TypeScriptParser.Throw:
                                    case TypeScriptParser.Delete:
                                    case TypeScriptParser.In:
                                    case TypeScriptParser.Try:
                                    case TypeScriptParser.From:
                                    case TypeScriptParser.ReadOnly:
                                    case TypeScriptParser.Async:
                                    case TypeScriptParser.Class:
                                    case TypeScriptParser.Enum:
                                    case TypeScriptParser.Extends:
                                    case TypeScriptParser.Super:
                                    case TypeScriptParser.Const:
                                    case TypeScriptParser.Export:
                                    case TypeScriptParser.Import:
                                    case TypeScriptParser.Implements:
                                    case TypeScriptParser.Let:
                                    case TypeScriptParser.Private:
                                    case TypeScriptParser.Public:
                                    case TypeScriptParser.Interface:
                                    case TypeScriptParser.Package:
                                    case TypeScriptParser.Protected:
                                    case TypeScriptParser.Static:
                                    case TypeScriptParser.Yield:
                                    case TypeScriptParser.At:
                                    case TypeScriptParser.Identifier:
                                        {
                                            this.state = 527;
                                            this.optionalParameterList();
                                            this.state = 530;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === TypeScriptParser.Comma) {
                                                {
                                                    this.state = 528;
                                                    this.match(TypeScriptParser.Comma);
                                                    this.state = 529;
                                                    this.restParameter();
                                                }
                                            }
                                        }
                                        break;
                                    case TypeScriptParser.Ellipsis:
                                        {
                                            this.state = 532;
                                            this.restParameter();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
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
    TypeScriptParser.prototype.requiredParameterList = function () {
        var _localctx = new RequiredParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, TypeScriptParser.RULE_requiredParameterList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 539;
                this.requiredParameter();
                this.state = 544;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 540;
                                this.match(TypeScriptParser.Comma);
                                this.state = 541;
                                this.requiredParameter();
                            }
                        }
                    }
                    this.state = 546;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.requiredParameter = function () {
        var _localctx = new RequiredParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, TypeScriptParser.RULE_requiredParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.At) {
                    {
                        this.state = 547;
                        this.decoratorList();
                    }
                }
                this.state = 551;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 550;
                            this.accessibilityModifier();
                        }
                        break;
                }
                this.state = 553;
                this.identifierOrPattern();
                this.state = 555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 554;
                        this.typeAnnotation();
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
    TypeScriptParser.prototype.accessibilityModifier = function () {
        var _localctx = new AccessibilityModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, TypeScriptParser.RULE_accessibilityModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 557;
                _la = this._input.LA(1);
                if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)))) !== 0))) {
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
    TypeScriptParser.prototype.identifierOrPattern = function () {
        var _localctx = new IdentifierOrPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, TypeScriptParser.RULE_identifierOrPattern);
        try {
            this.state = 561;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.NullLiteral:
                case TypeScriptParser.BooleanLiteral:
                case TypeScriptParser.Break:
                case TypeScriptParser.Do:
                case TypeScriptParser.Instanceof:
                case TypeScriptParser.Typeof:
                case TypeScriptParser.Case:
                case TypeScriptParser.Else:
                case TypeScriptParser.New:
                case TypeScriptParser.Var:
                case TypeScriptParser.Catch:
                case TypeScriptParser.Finally:
                case TypeScriptParser.Return:
                case TypeScriptParser.Void:
                case TypeScriptParser.Continue:
                case TypeScriptParser.For:
                case TypeScriptParser.Switch:
                case TypeScriptParser.While:
                case TypeScriptParser.Debugger:
                case TypeScriptParser.Function:
                case TypeScriptParser.This:
                case TypeScriptParser.With:
                case TypeScriptParser.Default:
                case TypeScriptParser.If:
                case TypeScriptParser.Throw:
                case TypeScriptParser.Delete:
                case TypeScriptParser.In:
                case TypeScriptParser.Try:
                case TypeScriptParser.From:
                case TypeScriptParser.ReadOnly:
                case TypeScriptParser.Async:
                case TypeScriptParser.Class:
                case TypeScriptParser.Enum:
                case TypeScriptParser.Extends:
                case TypeScriptParser.Super:
                case TypeScriptParser.Const:
                case TypeScriptParser.Export:
                case TypeScriptParser.Import:
                case TypeScriptParser.Implements:
                case TypeScriptParser.Let:
                case TypeScriptParser.Private:
                case TypeScriptParser.Public:
                case TypeScriptParser.Interface:
                case TypeScriptParser.Package:
                case TypeScriptParser.Protected:
                case TypeScriptParser.Static:
                case TypeScriptParser.Yield:
                case TypeScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 559;
                        this.identifierName();
                    }
                    break;
                case TypeScriptParser.OpenBracket:
                case TypeScriptParser.OpenBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 560;
                        this.bindingPattern();
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
    TypeScriptParser.prototype.optionalParameterList = function () {
        var _localctx = new OptionalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, TypeScriptParser.RULE_optionalParameterList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 563;
                this.optionalParameter();
                this.state = 568;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 564;
                                this.match(TypeScriptParser.Comma);
                                this.state = 565;
                                this.optionalParameter();
                            }
                        }
                    }
                    this.state = 570;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
    TypeScriptParser.prototype.optionalParameter = function () {
        var _localctx = new OptionalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, TypeScriptParser.RULE_optionalParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.At) {
                    {
                        this.state = 571;
                        this.decoratorList();
                    }
                }
                {
                    this.state = 575;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                        case 1:
                            {
                                this.state = 574;
                                this.accessibilityModifier();
                            }
                            break;
                    }
                    this.state = 577;
                    this.identifierOrPattern();
                    this.state = 586;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case TypeScriptParser.QuestionMark:
                            {
                                this.state = 578;
                                this.match(TypeScriptParser.QuestionMark);
                                this.state = 580;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TypeScriptParser.Colon) {
                                    {
                                        this.state = 579;
                                        this.typeAnnotation();
                                    }
                                }
                            }
                            break;
                        case TypeScriptParser.Assign:
                        case TypeScriptParser.Colon:
                            {
                                this.state = 583;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TypeScriptParser.Colon) {
                                    {
                                        this.state = 582;
                                        this.typeAnnotation();
                                    }
                                }
                                this.state = 585;
                                this.initializer();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
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
    TypeScriptParser.prototype.restParameter = function () {
        var _localctx = new RestParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, TypeScriptParser.RULE_restParameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.match(TypeScriptParser.Ellipsis);
                this.state = 589;
                this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.constructSignature = function () {
        var _localctx = new ConstructSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, TypeScriptParser.RULE_constructSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.match(TypeScriptParser.New);
                this.state = 593;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan) {
                    {
                        this.state = 592;
                        this.typeParameters();
                    }
                }
                this.state = 595;
                this.match(TypeScriptParser.OpenParen);
                this.state = 597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)) | (1 << (TypeScriptParser.Any - 86)) | (1 << (TypeScriptParser.Number - 86)) | (1 << (TypeScriptParser.Boolean - 86)) | (1 << (TypeScriptParser.String - 86)) | (1 << (TypeScriptParser.Symbol - 86)))) !== 0) || _la === TypeScriptParser.At || _la === TypeScriptParser.Identifier) {
                    {
                        this.state = 596;
                        this.parameterList();
                    }
                }
                this.state = 599;
                this.match(TypeScriptParser.CloseParen);
                this.state = 601;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 600;
                        this.typeAnnotation();
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
    TypeScriptParser.prototype.indexSignature = function () {
        var _localctx = new IndexSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, TypeScriptParser.RULE_indexSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 603;
                this.match(TypeScriptParser.OpenBracket);
                this.state = 604;
                this.match(TypeScriptParser.Identifier);
                this.state = 605;
                this.match(TypeScriptParser.Colon);
                this.state = 606;
                _la = this._input.LA(1);
                if (!(_la === TypeScriptParser.Number || _la === TypeScriptParser.String)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 607;
                this.match(TypeScriptParser.CloseBracket);
                this.state = 608;
                this.typeAnnotation();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.methodSignature = function () {
        var _localctx = new MethodSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, TypeScriptParser.RULE_methodSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
                this.propertyName();
                this.state = 612;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.QuestionMark) {
                    {
                        this.state = 611;
                        this.match(TypeScriptParser.QuestionMark);
                    }
                }
                this.state = 614;
                this.callSignature();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.typeAliasDeclaration = function () {
        var _localctx = new TypeAliasDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, TypeScriptParser.RULE_typeAliasDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 616;
                this.match(TypeScriptParser.Type);
                this.state = 617;
                this.match(TypeScriptParser.Identifier);
                this.state = 619;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan) {
                    {
                        this.state = 618;
                        this.typeParameters();
                    }
                }
                this.state = 621;
                this.match(TypeScriptParser.Assign);
                this.state = 622;
                this.type_();
                this.state = 623;
                this.match(TypeScriptParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.constructorDeclaration = function () {
        var _localctx = new ConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, TypeScriptParser.RULE_constructorDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)))) !== 0)) {
                    {
                        this.state = 625;
                        this.accessibilityModifier();
                    }
                }
                this.state = 628;
                this.match(TypeScriptParser.Constructor);
                this.state = 629;
                this.match(TypeScriptParser.OpenParen);
                this.state = 631;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)) | (1 << (TypeScriptParser.Identifier - 100)))) !== 0)) {
                    {
                        this.state = 630;
                        this.formalParameterList();
                    }
                }
                this.state = 633;
                this.match(TypeScriptParser.CloseParen);
                this.state = 639;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 634;
                                this.match(TypeScriptParser.OpenBrace);
                                this.state = 635;
                                this.functionBody();
                                this.state = 636;
                                this.match(TypeScriptParser.CloseBrace);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 638;
                            this.match(TypeScriptParser.SemiColon);
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
    TypeScriptParser.prototype.interfaceDeclaration = function () {
        var _localctx = new InterfaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, TypeScriptParser.RULE_interfaceDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Export) {
                    {
                        this.state = 641;
                        this.match(TypeScriptParser.Export);
                    }
                }
                this.state = 644;
                this.match(TypeScriptParser.Interface);
                this.state = 645;
                this.match(TypeScriptParser.Identifier);
                this.state = 647;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan) {
                    {
                        this.state = 646;
                        this.typeParameters();
                    }
                }
                this.state = 650;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Extends) {
                    {
                        this.state = 649;
                        this.interfaceExtendsClause();
                    }
                }
                this.state = 652;
                this.objectType();
                this.state = 654;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                    case 1:
                        {
                            this.state = 653;
                            this.match(TypeScriptParser.SemiColon);
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
    TypeScriptParser.prototype.interfaceExtendsClause = function () {
        var _localctx = new InterfaceExtendsClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, TypeScriptParser.RULE_interfaceExtendsClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 656;
                this.match(TypeScriptParser.Extends);
                this.state = 657;
                this.classOrInterfaceTypeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.classOrInterfaceTypeList = function () {
        var _localctx = new ClassOrInterfaceTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, TypeScriptParser.RULE_classOrInterfaceTypeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 659;
                this.typeReference();
                this.state = 664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeScriptParser.Comma) {
                    {
                        {
                            this.state = 660;
                            this.match(TypeScriptParser.Comma);
                            this.state = 661;
                            this.typeReference();
                        }
                    }
                    this.state = 666;
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
    TypeScriptParser.prototype.enumDeclaration = function () {
        var _localctx = new EnumDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, TypeScriptParser.RULE_enumDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Const) {
                    {
                        this.state = 667;
                        this.match(TypeScriptParser.Const);
                    }
                }
                this.state = 670;
                this.match(TypeScriptParser.Enum);
                this.state = 671;
                this.match(TypeScriptParser.Identifier);
                this.state = 672;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 674;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || _la === TypeScriptParser.Identifier || _la === TypeScriptParser.StringLiteral) {
                    {
                        this.state = 673;
                        this.enumBody();
                    }
                }
                this.state = 676;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.enumBody = function () {
        var _localctx = new EnumBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, TypeScriptParser.RULE_enumBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 678;
                this.enumMemberList();
                this.state = 680;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Comma) {
                    {
                        this.state = 679;
                        this.match(TypeScriptParser.Comma);
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
    TypeScriptParser.prototype.enumMemberList = function () {
        var _localctx = new EnumMemberListContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, TypeScriptParser.RULE_enumMemberList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 682;
                this.enumMember();
                this.state = 687;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 683;
                                this.match(TypeScriptParser.Comma);
                                this.state = 684;
                                this.enumMember();
                            }
                        }
                    }
                    this.state = 689;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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
    TypeScriptParser.prototype.enumMember = function () {
        var _localctx = new EnumMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, TypeScriptParser.RULE_enumMember);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 690;
                this.propertyName();
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Assign) {
                    {
                        this.state = 691;
                        this.match(TypeScriptParser.Assign);
                        this.state = 692;
                        this.singleExpression(0);
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
    TypeScriptParser.prototype.namespaceDeclaration = function () {
        var _localctx = new NamespaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, TypeScriptParser.RULE_namespaceDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 695;
                this.match(TypeScriptParser.Namespace);
                this.state = 696;
                this.namespaceName();
                this.state = 697;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 699;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                    case 1:
                        {
                            this.state = 698;
                            this.statementList();
                        }
                        break;
                }
                this.state = 701;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.namespaceName = function () {
        var _localctx = new NamespaceNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, TypeScriptParser.RULE_namespaceName);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 703;
                this.match(TypeScriptParser.Identifier);
                this.state = 712;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 705;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 704;
                                            this.match(TypeScriptParser.Dot);
                                        }
                                    }
                                    this.state = 707;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === TypeScriptParser.Dot);
                                this.state = 709;
                                this.match(TypeScriptParser.Identifier);
                            }
                        }
                    }
                    this.state = 714;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
    TypeScriptParser.prototype.importAliasDeclaration = function () {
        var _localctx = new ImportAliasDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, TypeScriptParser.RULE_importAliasDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 715;
                this.match(TypeScriptParser.Identifier);
                this.state = 716;
                this.match(TypeScriptParser.Assign);
                this.state = 717;
                this.namespaceName();
                this.state = 718;
                this.match(TypeScriptParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.decoratorList = function () {
        var _localctx = new DecoratorListContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, TypeScriptParser.RULE_decoratorList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 720;
                            this.decorator();
                        }
                    }
                    this.state = 723;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === TypeScriptParser.At);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.decorator = function () {
        var _localctx = new DecoratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, TypeScriptParser.RULE_decorator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 725;
                this.match(TypeScriptParser.At);
                this.state = 728;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                    case 1:
                        {
                            this.state = 726;
                            this.decoratorMemberExpression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 727;
                            this.decoratorCallExpression();
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
    TypeScriptParser.prototype.decoratorMemberExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new DecoratorMemberExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 112;
        this.enterRecursionRule(_localctx, 112, TypeScriptParser.RULE_decoratorMemberExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 736;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.Identifier:
                        {
                            this.state = 731;
                            this.match(TypeScriptParser.Identifier);
                        }
                        break;
                    case TypeScriptParser.OpenParen:
                        {
                            this.state = 732;
                            this.match(TypeScriptParser.OpenParen);
                            this.state = 733;
                            this.singleExpression(0);
                            this.state = 734;
                            this.match(TypeScriptParser.CloseParen);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 743;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new DecoratorMemberExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_decoratorMemberExpression);
                                this.state = 738;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 739;
                                this.match(TypeScriptParser.Dot);
                                this.state = 740;
                                this.identifierName();
                            }
                        }
                    }
                    this.state = 745;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
    TypeScriptParser.prototype.decoratorCallExpression = function () {
        var _localctx = new DecoratorCallExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, TypeScriptParser.RULE_decoratorCallExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 746;
                this.decoratorMemberExpression(0);
                this.state = 747;
                this.arguments();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, TypeScriptParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 750;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                    case 1:
                        {
                            this.state = 749;
                            this.sourceElements();
                        }
                        break;
                }
                this.state = 752;
                this.match(TypeScriptParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.sourceElement = function () {
        var _localctx = new SourceElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, TypeScriptParser.RULE_sourceElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 755;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 754;
                            this.match(TypeScriptParser.Export);
                        }
                        break;
                }
                this.state = 757;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, TypeScriptParser.RULE_statement);
        try {
            this.state = 788;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 759;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 760;
                        this.variableStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 761;
                        this.importStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 762;
                        this.exportStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 763;
                        this.emptyStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 764;
                        this.abstractDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 765;
                        this.classDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 766;
                        this.interfaceDeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 767;
                        this.namespaceDeclaration();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 768;
                        this.ifStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 769;
                        this.iterationStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 770;
                        this.continueStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 771;
                        this.breakStatement();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 772;
                        this.returnStatement();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 773;
                        this.yieldStatement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 774;
                        this.withStatement();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 775;
                        this.labelledStatement();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 776;
                        this.switchStatement();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 777;
                        this.throwStatement();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 778;
                        this.tryStatement();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 779;
                        this.debuggerStatement();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 780;
                        this.functionDeclaration();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 781;
                        this.arrowFunctionDeclaration();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 782;
                        this.generatorFunctionDeclaration();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 783;
                        this.typeAliasDeclaration();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 784;
                        this.enumDeclaration();
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 785;
                        this.expressionStatement();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 786;
                        this.match(TypeScriptParser.Export);
                        this.state = 787;
                        this.statement();
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
    TypeScriptParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, TypeScriptParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 790;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 792;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                    case 1:
                        {
                            this.state = 791;
                            this.statementList();
                        }
                        break;
                }
                this.state = 794;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.statementList = function () {
        var _localctx = new StatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, TypeScriptParser.RULE_statementList);
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
                                    this.statement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 799;
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
    TypeScriptParser.prototype.abstractDeclaration = function () {
        var _localctx = new AbstractDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, TypeScriptParser.RULE_abstractDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 801;
                this.match(TypeScriptParser.Abstract);
                this.state = 805;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                    case 1:
                        {
                            this.state = 802;
                            this.match(TypeScriptParser.Identifier);
                            this.state = 803;
                            this.callSignature();
                        }
                        break;
                    case 2:
                        {
                            this.state = 804;
                            this.variableStatement();
                        }
                        break;
                }
                this.state = 807;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.importStatement = function () {
        var _localctx = new ImportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, TypeScriptParser.RULE_importStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 809;
                this.match(TypeScriptParser.Import);
                this.state = 812;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                    case 1:
                        {
                            this.state = 810;
                            this.fromBlock();
                        }
                        break;
                    case 2:
                        {
                            this.state = 811;
                            this.importAliasDeclaration();
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
    TypeScriptParser.prototype.fromBlock = function () {
        var _localctx = new FromBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, TypeScriptParser.RULE_fromBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.Multiply:
                        {
                            this.state = 814;
                            this.match(TypeScriptParser.Multiply);
                        }
                        break;
                    case TypeScriptParser.OpenBrace:
                    case TypeScriptParser.NullLiteral:
                    case TypeScriptParser.BooleanLiteral:
                    case TypeScriptParser.Break:
                    case TypeScriptParser.Do:
                    case TypeScriptParser.Instanceof:
                    case TypeScriptParser.Typeof:
                    case TypeScriptParser.Case:
                    case TypeScriptParser.Else:
                    case TypeScriptParser.New:
                    case TypeScriptParser.Var:
                    case TypeScriptParser.Catch:
                    case TypeScriptParser.Finally:
                    case TypeScriptParser.Return:
                    case TypeScriptParser.Void:
                    case TypeScriptParser.Continue:
                    case TypeScriptParser.For:
                    case TypeScriptParser.Switch:
                    case TypeScriptParser.While:
                    case TypeScriptParser.Debugger:
                    case TypeScriptParser.Function:
                    case TypeScriptParser.This:
                    case TypeScriptParser.With:
                    case TypeScriptParser.Default:
                    case TypeScriptParser.If:
                    case TypeScriptParser.Throw:
                    case TypeScriptParser.Delete:
                    case TypeScriptParser.In:
                    case TypeScriptParser.Try:
                    case TypeScriptParser.From:
                    case TypeScriptParser.ReadOnly:
                    case TypeScriptParser.Async:
                    case TypeScriptParser.Class:
                    case TypeScriptParser.Enum:
                    case TypeScriptParser.Extends:
                    case TypeScriptParser.Super:
                    case TypeScriptParser.Const:
                    case TypeScriptParser.Export:
                    case TypeScriptParser.Import:
                    case TypeScriptParser.Implements:
                    case TypeScriptParser.Let:
                    case TypeScriptParser.Private:
                    case TypeScriptParser.Public:
                    case TypeScriptParser.Interface:
                    case TypeScriptParser.Package:
                    case TypeScriptParser.Protected:
                    case TypeScriptParser.Static:
                    case TypeScriptParser.Yield:
                    case TypeScriptParser.Identifier:
                        {
                            this.state = 815;
                            this.multipleImportStatement();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.As) {
                    {
                        this.state = 818;
                        this.match(TypeScriptParser.As);
                        this.state = 819;
                        this.identifierName();
                    }
                }
                this.state = 822;
                this.match(TypeScriptParser.From);
                this.state = 823;
                this.match(TypeScriptParser.StringLiteral);
                this.state = 824;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.multipleImportStatement = function () {
        var _localctx = new MultipleImportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, TypeScriptParser.RULE_multipleImportStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || _la === TypeScriptParser.Identifier) {
                    {
                        this.state = 826;
                        this.identifierName();
                        this.state = 827;
                        this.match(TypeScriptParser.Comma);
                    }
                }
                this.state = 831;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 832;
                this.identifierName();
                this.state = 837;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeScriptParser.Comma) {
                    {
                        {
                            this.state = 833;
                            this.match(TypeScriptParser.Comma);
                            this.state = 834;
                            this.identifierName();
                        }
                    }
                    this.state = 839;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 840;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.exportStatement = function () {
        var _localctx = new ExportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, TypeScriptParser.RULE_exportStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this.match(TypeScriptParser.Export);
                this.state = 844;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                    case 1:
                        {
                            this.state = 843;
                            this.match(TypeScriptParser.Default);
                        }
                        break;
                }
                this.state = 848;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                    case 1:
                        {
                            this.state = 846;
                            this.fromBlock();
                        }
                        break;
                    case 2:
                        {
                            this.state = 847;
                            this.statement();
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
    TypeScriptParser.prototype.variableStatement = function () {
        var _localctx = new VariableStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, TypeScriptParser.RULE_variableStatement);
        var _la;
        try {
            this.state = 871;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 850;
                        this.bindingPattern();
                        this.state = 852;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Colon) {
                            {
                                this.state = 851;
                                this.typeAnnotation();
                            }
                        }
                        this.state = 854;
                        this.initializer();
                        this.state = 856;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                            case 1:
                                {
                                    this.state = 855;
                                    this.match(TypeScriptParser.SemiColon);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 859;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)))) !== 0)) {
                            {
                                this.state = 858;
                                this.accessibilityModifier();
                            }
                        }
                        this.state = 862;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (TypeScriptParser.Var - 68)) | (1 << (TypeScriptParser.Const - 68)) | (1 << (TypeScriptParser.Let - 68)))) !== 0)) {
                            {
                                this.state = 861;
                                this.varModifier();
                            }
                        }
                        this.state = 865;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.ReadOnly) {
                            {
                                this.state = 864;
                                this.match(TypeScriptParser.ReadOnly);
                            }
                        }
                        this.state = 867;
                        this.variableDeclarationList();
                        this.state = 869;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                            case 1:
                                {
                                    this.state = 868;
                                    this.match(TypeScriptParser.SemiColon);
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
    TypeScriptParser.prototype.variableDeclarationList = function () {
        var _localctx = new VariableDeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, TypeScriptParser.RULE_variableDeclarationList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                this.variableDeclaration();
                this.state = 878;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 874;
                                this.match(TypeScriptParser.Comma);
                                this.state = 875;
                                this.variableDeclaration();
                            }
                        }
                    }
                    this.state = 880;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
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
    TypeScriptParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, TypeScriptParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 884;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.Identifier:
                        {
                            this.state = 881;
                            this.match(TypeScriptParser.Identifier);
                        }
                        break;
                    case TypeScriptParser.OpenBracket:
                        {
                            this.state = 882;
                            this.arrayLiteral();
                        }
                        break;
                    case TypeScriptParser.OpenBrace:
                        {
                            this.state = 883;
                            this.objectLiteral();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 887;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        {
                            this.state = 886;
                            this.typeAnnotation();
                        }
                        break;
                }
                this.state = 890;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                    case 1:
                        {
                            this.state = 889;
                            this.singleExpression(0);
                        }
                        break;
                }
                this.state = 897;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 892;
                            this.match(TypeScriptParser.Assign);
                            this.state = 894;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 893;
                                        this.typeParameters();
                                    }
                                    break;
                            }
                            this.state = 896;
                            this.singleExpression(0);
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
    TypeScriptParser.prototype.emptyStatement = function () {
        var _localctx = new EmptyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, TypeScriptParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 899;
                this.match(TypeScriptParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.expressionStatement = function () {
        var _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, TypeScriptParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 901;
                if (!(this.notOpenBraceAndNotFunction())) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
                }
                this.state = 902;
                this.expressionSequence();
                this.state = 904;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                    case 1:
                        {
                            this.state = 903;
                            this.match(TypeScriptParser.SemiColon);
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
    TypeScriptParser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, TypeScriptParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 906;
                this.match(TypeScriptParser.If);
                this.state = 907;
                this.match(TypeScriptParser.OpenParen);
                this.state = 908;
                this.expressionSequence();
                this.state = 909;
                this.match(TypeScriptParser.CloseParen);
                this.state = 910;
                this.statement();
                this.state = 913;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                    case 1:
                        {
                            this.state = 911;
                            this.match(TypeScriptParser.Else);
                            this.state = 912;
                            this.statement();
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
    TypeScriptParser.prototype.iterationStatement = function () {
        var _localctx = new IterationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, TypeScriptParser.RULE_iterationStatement);
        var _la;
        try {
            this.state = 984;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                case 1:
                    _localctx = new DoStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 915;
                        this.match(TypeScriptParser.Do);
                        this.state = 916;
                        this.statement();
                        this.state = 917;
                        this.match(TypeScriptParser.While);
                        this.state = 918;
                        this.match(TypeScriptParser.OpenParen);
                        this.state = 919;
                        this.expressionSequence();
                        this.state = 920;
                        this.match(TypeScriptParser.CloseParen);
                        this.state = 921;
                        this.eos();
                    }
                    break;
                case 2:
                    _localctx = new WhileStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 923;
                        this.match(TypeScriptParser.While);
                        this.state = 924;
                        this.match(TypeScriptParser.OpenParen);
                        this.state = 925;
                        this.expressionSequence();
                        this.state = 926;
                        this.match(TypeScriptParser.CloseParen);
                        this.state = 927;
                        this.statement();
                    }
                    break;
                case 3:
                    _localctx = new ForStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 929;
                        this.match(TypeScriptParser.For);
                        this.state = 930;
                        this.match(TypeScriptParser.OpenParen);
                        this.state = 932;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.RegularExpressionLiteral) | (1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.PlusPlus) | (1 << TypeScriptParser.MinusMinus) | (1 << TypeScriptParser.Plus) | (1 << TypeScriptParser.Minus) | (1 << TypeScriptParser.BitNot) | (1 << TypeScriptParser.Not) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.TemplateStringLiteral - 123)))) !== 0)) {
                            {
                                this.state = 931;
                                this.expressionSequence();
                            }
                        }
                        this.state = 934;
                        this.match(TypeScriptParser.SemiColon);
                        this.state = 936;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.RegularExpressionLiteral) | (1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.PlusPlus) | (1 << TypeScriptParser.MinusMinus) | (1 << TypeScriptParser.Plus) | (1 << TypeScriptParser.Minus) | (1 << TypeScriptParser.BitNot) | (1 << TypeScriptParser.Not) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.TemplateStringLiteral - 123)))) !== 0)) {
                            {
                                this.state = 935;
                                this.expressionSequence();
                            }
                        }
                        this.state = 938;
                        this.match(TypeScriptParser.SemiColon);
                        this.state = 940;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.RegularExpressionLiteral) | (1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.PlusPlus) | (1 << TypeScriptParser.MinusMinus) | (1 << TypeScriptParser.Plus) | (1 << TypeScriptParser.Minus) | (1 << TypeScriptParser.BitNot) | (1 << TypeScriptParser.Not) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.TemplateStringLiteral - 123)))) !== 0)) {
                            {
                                this.state = 939;
                                this.expressionSequence();
                            }
                        }
                        this.state = 942;
                        this.match(TypeScriptParser.CloseParen);
                        this.state = 943;
                        this.statement();
                    }
                    break;
                case 4:
                    _localctx = new ForVarStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 944;
                        this.match(TypeScriptParser.For);
                        this.state = 945;
                        this.match(TypeScriptParser.OpenParen);
                        this.state = 946;
                        this.varModifier();
                        this.state = 947;
                        this.variableDeclarationList();
                        this.state = 948;
                        this.match(TypeScriptParser.SemiColon);
                        this.state = 950;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.RegularExpressionLiteral) | (1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.PlusPlus) | (1 << TypeScriptParser.MinusMinus) | (1 << TypeScriptParser.Plus) | (1 << TypeScriptParser.Minus) | (1 << TypeScriptParser.BitNot) | (1 << TypeScriptParser.Not) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.TemplateStringLiteral - 123)))) !== 0)) {
                            {
                                this.state = 949;
                                this.expressionSequence();
                            }
                        }
                        this.state = 952;
                        this.match(TypeScriptParser.SemiColon);
                        this.state = 954;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.RegularExpressionLiteral) | (1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.PlusPlus) | (1 << TypeScriptParser.MinusMinus) | (1 << TypeScriptParser.Plus) | (1 << TypeScriptParser.Minus) | (1 << TypeScriptParser.BitNot) | (1 << TypeScriptParser.Not) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.TemplateStringLiteral - 123)))) !== 0)) {
                            {
                                this.state = 953;
                                this.expressionSequence();
                            }
                        }
                        this.state = 956;
                        this.match(TypeScriptParser.CloseParen);
                        this.state = 957;
                        this.statement();
                    }
                    break;
                case 5:
                    _localctx = new ForInStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 959;
                        this.match(TypeScriptParser.For);
                        this.state = 960;
                        this.match(TypeScriptParser.OpenParen);
                        this.state = 961;
                        this.singleExpression(0);
                        this.state = 965;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case TypeScriptParser.In:
                                {
                                    this.state = 962;
                                    this.match(TypeScriptParser.In);
                                }
                                break;
                            case TypeScriptParser.Identifier:
                                {
                                    this.state = 963;
                                    this.match(TypeScriptParser.Identifier);
                                    this.state = 964;
                                    if (!(this.p("of"))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.p(\"of\")");
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 967;
                        this.expressionSequence();
                        this.state = 968;
                        this.match(TypeScriptParser.CloseParen);
                        this.state = 969;
                        this.statement();
                    }
                    break;
                case 6:
                    _localctx = new ForVarInStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 971;
                        this.match(TypeScriptParser.For);
                        this.state = 972;
                        this.match(TypeScriptParser.OpenParen);
                        this.state = 973;
                        this.varModifier();
                        this.state = 974;
                        this.variableDeclaration();
                        this.state = 978;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case TypeScriptParser.In:
                                {
                                    this.state = 975;
                                    this.match(TypeScriptParser.In);
                                }
                                break;
                            case TypeScriptParser.Identifier:
                                {
                                    this.state = 976;
                                    this.match(TypeScriptParser.Identifier);
                                    this.state = 977;
                                    if (!(this.p("of"))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.p(\"of\")");
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 980;
                        this.expressionSequence();
                        this.state = 981;
                        this.match(TypeScriptParser.CloseParen);
                        this.state = 982;
                        this.statement();
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
    TypeScriptParser.prototype.varModifier = function () {
        var _localctx = new VarModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, TypeScriptParser.RULE_varModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 986;
                _la = this._input.LA(1);
                if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (TypeScriptParser.Var - 68)) | (1 << (TypeScriptParser.Const - 68)) | (1 << (TypeScriptParser.Let - 68)))) !== 0))) {
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
    TypeScriptParser.prototype.continueStatement = function () {
        var _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, TypeScriptParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 988;
                this.match(TypeScriptParser.Continue);
                this.state = 991;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                    case 1:
                        {
                            this.state = 989;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 990;
                            this.match(TypeScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 993;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.breakStatement = function () {
        var _localctx = new BreakStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, TypeScriptParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                this.match(TypeScriptParser.Break);
                this.state = 998;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                    case 1:
                        {
                            this.state = 996;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 997;
                            this.match(TypeScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 1000;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.returnStatement = function () {
        var _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, TypeScriptParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1002;
                this.match(TypeScriptParser.Return);
                this.state = 1005;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                    case 1:
                        {
                            this.state = 1003;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 1004;
                            this.expressionSequence();
                        }
                        break;
                }
                this.state = 1007;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.yieldStatement = function () {
        var _localctx = new YieldStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, TypeScriptParser.RULE_yieldStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1009;
                this.match(TypeScriptParser.Yield);
                this.state = 1012;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                    case 1:
                        {
                            this.state = 1010;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 1011;
                            this.expressionSequence();
                        }
                        break;
                }
                this.state = 1014;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.withStatement = function () {
        var _localctx = new WithStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, TypeScriptParser.RULE_withStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1016;
                this.match(TypeScriptParser.With);
                this.state = 1017;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1018;
                this.expressionSequence();
                this.state = 1019;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1020;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.switchStatement = function () {
        var _localctx = new SwitchStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, TypeScriptParser.RULE_switchStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1022;
                this.match(TypeScriptParser.Switch);
                this.state = 1023;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1024;
                this.expressionSequence();
                this.state = 1025;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1026;
                this.caseBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.caseBlock = function () {
        var _localctx = new CaseBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, TypeScriptParser.RULE_caseBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1028;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1030;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Case) {
                    {
                        this.state = 1029;
                        this.caseClauses();
                    }
                }
                this.state = 1036;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Default) {
                    {
                        this.state = 1032;
                        this.defaultClause();
                        this.state = 1034;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Case) {
                            {
                                this.state = 1033;
                                this.caseClauses();
                            }
                        }
                    }
                }
                this.state = 1038;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.caseClauses = function () {
        var _localctx = new CaseClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, TypeScriptParser.RULE_caseClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1041;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1040;
                            this.caseClause();
                        }
                    }
                    this.state = 1043;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === TypeScriptParser.Case);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.caseClause = function () {
        var _localctx = new CaseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, TypeScriptParser.RULE_caseClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1045;
                this.match(TypeScriptParser.Case);
                this.state = 1046;
                this.expressionSequence();
                this.state = 1047;
                this.match(TypeScriptParser.Colon);
                this.state = 1049;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                    case 1:
                        {
                            this.state = 1048;
                            this.statementList();
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
    TypeScriptParser.prototype.defaultClause = function () {
        var _localctx = new DefaultClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, TypeScriptParser.RULE_defaultClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1051;
                this.match(TypeScriptParser.Default);
                this.state = 1052;
                this.match(TypeScriptParser.Colon);
                this.state = 1054;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                    case 1:
                        {
                            this.state = 1053;
                            this.statementList();
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
    TypeScriptParser.prototype.labelledStatement = function () {
        var _localctx = new LabelledStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, TypeScriptParser.RULE_labelledStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1056;
                this.match(TypeScriptParser.Identifier);
                this.state = 1057;
                this.match(TypeScriptParser.Colon);
                this.state = 1058;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.throwStatement = function () {
        var _localctx = new ThrowStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, TypeScriptParser.RULE_throwStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1060;
                this.match(TypeScriptParser.Throw);
                this.state = 1061;
                if (!(this.notLineTerminator())) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                }
                this.state = 1062;
                this.expressionSequence();
                this.state = 1063;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.tryStatement = function () {
        var _localctx = new TryStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, TypeScriptParser.RULE_tryStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1065;
                this.match(TypeScriptParser.Try);
                this.state = 1066;
                this.block();
                this.state = 1072;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.Catch:
                        {
                            this.state = 1067;
                            this.catchProduction();
                            this.state = 1069;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1068;
                                        this.finallyProduction();
                                    }
                                    break;
                            }
                        }
                        break;
                    case TypeScriptParser.Finally:
                        {
                            this.state = 1071;
                            this.finallyProduction();
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
    TypeScriptParser.prototype.catchProduction = function () {
        var _localctx = new CatchProductionContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, TypeScriptParser.RULE_catchProduction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1074;
                this.match(TypeScriptParser.Catch);
                this.state = 1075;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1076;
                this.match(TypeScriptParser.Identifier);
                this.state = 1077;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1078;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.finallyProduction = function () {
        var _localctx = new FinallyProductionContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, TypeScriptParser.RULE_finallyProduction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1080;
                this.match(TypeScriptParser.Finally);
                this.state = 1081;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.debuggerStatement = function () {
        var _localctx = new DebuggerStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, TypeScriptParser.RULE_debuggerStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1083;
                this.match(TypeScriptParser.Debugger);
                this.state = 1084;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.functionDeclaration = function () {
        var _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, TypeScriptParser.RULE_functionDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1086;
                this.match(TypeScriptParser.Function);
                this.state = 1087;
                this.match(TypeScriptParser.Identifier);
                this.state = 1088;
                this.callSignature();
                this.state = 1094;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.OpenBrace:
                        {
                            {
                                this.state = 1089;
                                this.match(TypeScriptParser.OpenBrace);
                                this.state = 1090;
                                this.functionBody();
                                this.state = 1091;
                                this.match(TypeScriptParser.CloseBrace);
                            }
                        }
                        break;
                    case TypeScriptParser.SemiColon:
                        {
                            this.state = 1093;
                            this.match(TypeScriptParser.SemiColon);
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
    TypeScriptParser.prototype.classDeclaration = function () {
        var _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, TypeScriptParser.RULE_classDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1097;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Abstract) {
                    {
                        this.state = 1096;
                        this.match(TypeScriptParser.Abstract);
                    }
                }
                this.state = 1099;
                this.match(TypeScriptParser.Class);
                this.state = 1100;
                this.match(TypeScriptParser.Identifier);
                this.state = 1102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.LessThan) {
                    {
                        this.state = 1101;
                        this.typeParameters();
                    }
                }
                this.state = 1104;
                this.classHeritage();
                this.state = 1105;
                this.classTail();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.classHeritage = function () {
        var _localctx = new ClassHeritageContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, TypeScriptParser.RULE_classHeritage);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Extends) {
                    {
                        this.state = 1107;
                        this.classExtendsClause();
                    }
                }
                this.state = 1111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Implements) {
                    {
                        this.state = 1110;
                        this.implementsClause();
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
    TypeScriptParser.prototype.classTail = function () {
        var _localctx = new ClassTailContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, TypeScriptParser.RULE_classTail);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1113;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1117;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1114;
                                this.classElement();
                            }
                        }
                    }
                    this.state = 1119;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                }
                this.state = 1120;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.classExtendsClause = function () {
        var _localctx = new ClassExtendsClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, TypeScriptParser.RULE_classExtendsClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1122;
                this.match(TypeScriptParser.Extends);
                this.state = 1123;
                this.typeReference();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.implementsClause = function () {
        var _localctx = new ImplementsClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, TypeScriptParser.RULE_implementsClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1125;
                this.match(TypeScriptParser.Implements);
                this.state = 1126;
                this.classOrInterfaceTypeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.classElement = function () {
        var _localctx = new ClassElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, TypeScriptParser.RULE_classElement);
        try {
            this.state = 1132;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1128;
                        this.constructorDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1129;
                        this.propertyMemberDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1130;
                        this.indexMemberDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1131;
                        this.statement();
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
    TypeScriptParser.prototype.propertyMemberDeclaration = function () {
        var _localctx = new PropertyMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, TypeScriptParser.RULE_propertyMemberDeclaration);
        var _la;
        try {
            this.state = 1160;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1134;
                        this.propertyMemberBase();
                        this.state = 1135;
                        this.propertyName();
                        this.state = 1137;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Colon) {
                            {
                                this.state = 1136;
                                this.typeAnnotation();
                            }
                        }
                        this.state = 1140;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Assign) {
                            {
                                this.state = 1139;
                                this.initializer();
                            }
                        }
                        this.state = 1142;
                        this.match(TypeScriptParser.SemiColon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1144;
                        this.propertyMemberBase();
                        this.state = 1145;
                        this.propertyName();
                        this.state = 1146;
                        this.callSignature();
                        this.state = 1152;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case TypeScriptParser.OpenBrace:
                                {
                                    {
                                        this.state = 1147;
                                        this.match(TypeScriptParser.OpenBrace);
                                        this.state = 1148;
                                        this.functionBody();
                                        this.state = 1149;
                                        this.match(TypeScriptParser.CloseBrace);
                                    }
                                }
                                break;
                            case TypeScriptParser.SemiColon:
                                {
                                    this.state = 1151;
                                    this.match(TypeScriptParser.SemiColon);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1154;
                        this.propertyMemberBase();
                        this.state = 1157;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1155;
                                    this.getAccessor();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1156;
                                    this.setAccessor();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1159;
                        this.abstractDeclaration();
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
    TypeScriptParser.prototype.propertyMemberBase = function () {
        var _localctx = new PropertyMemberBaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, TypeScriptParser.RULE_propertyMemberBase);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1163;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                    case 1:
                        {
                            this.state = 1162;
                            this.match(TypeScriptParser.Async);
                        }
                        break;
                }
                this.state = 1166;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                    case 1:
                        {
                            this.state = 1165;
                            this.accessibilityModifier();
                        }
                        break;
                }
                this.state = 1169;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                    case 1:
                        {
                            this.state = 1168;
                            this.match(TypeScriptParser.Static);
                        }
                        break;
                }
                this.state = 1172;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                    case 1:
                        {
                            this.state = 1171;
                            this.match(TypeScriptParser.ReadOnly);
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
    TypeScriptParser.prototype.indexMemberDeclaration = function () {
        var _localctx = new IndexMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, TypeScriptParser.RULE_indexMemberDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1174;
                this.indexSignature();
                this.state = 1175;
                this.match(TypeScriptParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.generatorMethod = function () {
        var _localctx = new GeneratorMethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, TypeScriptParser.RULE_generatorMethod);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Multiply) {
                    {
                        this.state = 1177;
                        this.match(TypeScriptParser.Multiply);
                    }
                }
                this.state = 1180;
                this.match(TypeScriptParser.Identifier);
                this.state = 1181;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)) | (1 << (TypeScriptParser.Identifier - 100)))) !== 0)) {
                    {
                        this.state = 1182;
                        this.formalParameterList();
                    }
                }
                this.state = 1185;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1186;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1187;
                this.functionBody();
                this.state = 1188;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.generatorFunctionDeclaration = function () {
        var _localctx = new GeneratorFunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, TypeScriptParser.RULE_generatorFunctionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1190;
                this.match(TypeScriptParser.Function);
                this.state = 1191;
                this.match(TypeScriptParser.Multiply);
                this.state = 1193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Identifier) {
                    {
                        this.state = 1192;
                        this.match(TypeScriptParser.Identifier);
                    }
                }
                this.state = 1195;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)) | (1 << (TypeScriptParser.Identifier - 100)))) !== 0)) {
                    {
                        this.state = 1196;
                        this.formalParameterList();
                    }
                }
                this.state = 1199;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1200;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1201;
                this.functionBody();
                this.state = 1202;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.generatorBlock = function () {
        var _localctx = new GeneratorBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, TypeScriptParser.RULE_generatorBlock);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1204;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1205;
                this.generatorDefinition();
                this.state = 1210;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1206;
                                this.match(TypeScriptParser.Comma);
                                this.state = 1207;
                                this.generatorDefinition();
                            }
                        }
                    }
                    this.state = 1212;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                }
                this.state = 1214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Comma) {
                    {
                        this.state = 1213;
                        this.match(TypeScriptParser.Comma);
                    }
                }
                this.state = 1216;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.generatorDefinition = function () {
        var _localctx = new GeneratorDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, TypeScriptParser.RULE_generatorDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1218;
                this.match(TypeScriptParser.Multiply);
                this.state = 1219;
                this.iteratorDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.iteratorBlock = function () {
        var _localctx = new IteratorBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, TypeScriptParser.RULE_iteratorBlock);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1221;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1222;
                this.iteratorDefinition();
                this.state = 1227;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1223;
                                this.match(TypeScriptParser.Comma);
                                this.state = 1224;
                                this.iteratorDefinition();
                            }
                        }
                    }
                    this.state = 1229;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                }
                this.state = 1231;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Comma) {
                    {
                        this.state = 1230;
                        this.match(TypeScriptParser.Comma);
                    }
                }
                this.state = 1233;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.iteratorDefinition = function () {
        var _localctx = new IteratorDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, TypeScriptParser.RULE_iteratorDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1235;
                this.match(TypeScriptParser.OpenBracket);
                this.state = 1236;
                this.singleExpression(0);
                this.state = 1237;
                this.match(TypeScriptParser.CloseBracket);
                this.state = 1238;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1240;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)) | (1 << (TypeScriptParser.Identifier - 100)))) !== 0)) {
                    {
                        this.state = 1239;
                        this.formalParameterList();
                    }
                }
                this.state = 1242;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1243;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1244;
                this.functionBody();
                this.state = 1245;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.formalParameterList = function () {
        var _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, TypeScriptParser.RULE_formalParameterList);
        var _la;
        try {
            var _alt = void 0;
            this.state = 1266;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.Private:
                case TypeScriptParser.Public:
                case TypeScriptParser.Protected:
                case TypeScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1247;
                        this.formalParameterArg();
                        this.state = 1252;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1248;
                                        this.match(TypeScriptParser.Comma);
                                        this.state = 1249;
                                        this.formalParameterArg();
                                    }
                                }
                            }
                            this.state = 1254;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                        }
                        this.state = 1257;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Comma) {
                            {
                                this.state = 1255;
                                this.match(TypeScriptParser.Comma);
                                this.state = 1256;
                                this.lastFormalParameterArg();
                            }
                        }
                    }
                    break;
                case TypeScriptParser.Ellipsis:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1259;
                        this.lastFormalParameterArg();
                    }
                    break;
                case TypeScriptParser.OpenBracket:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1260;
                        this.arrayLiteral();
                    }
                    break;
                case TypeScriptParser.OpenBrace:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1261;
                        this.objectLiteral();
                        this.state = 1264;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Colon) {
                            {
                                this.state = 1262;
                                this.match(TypeScriptParser.Colon);
                                this.state = 1263;
                                this.formalParameterList();
                            }
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
    TypeScriptParser.prototype.formalParameterArg = function () {
        var _localctx = new FormalParameterArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, TypeScriptParser.RULE_formalParameterArg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)))) !== 0)) {
                    {
                        this.state = 1268;
                        this.accessibilityModifier();
                    }
                }
                this.state = 1271;
                this.match(TypeScriptParser.Identifier);
                this.state = 1273;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 1272;
                        this.typeAnnotation();
                    }
                }
                this.state = 1277;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Assign) {
                    {
                        this.state = 1275;
                        this.match(TypeScriptParser.Assign);
                        this.state = 1276;
                        this.singleExpression(0);
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
    TypeScriptParser.prototype.lastFormalParameterArg = function () {
        var _localctx = new LastFormalParameterArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, TypeScriptParser.RULE_lastFormalParameterArg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1279;
                this.match(TypeScriptParser.Ellipsis);
                this.state = 1280;
                this.match(TypeScriptParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.functionBody = function () {
        var _localctx = new FunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, TypeScriptParser.RULE_functionBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1283;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                    case 1:
                        {
                            this.state = 1282;
                            this.sourceElements();
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
    TypeScriptParser.prototype.sourceElements = function () {
        var _localctx = new SourceElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, TypeScriptParser.RULE_sourceElements);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1286;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1285;
                                    this.sourceElement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1288;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
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
    TypeScriptParser.prototype.arrayLiteral = function () {
        var _localctx = new ArrayLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, TypeScriptParser.RULE_arrayLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1290;
                    this.match(TypeScriptParser.OpenBracket);
                    this.state = 1292;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.RegularExpressionLiteral) | (1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis) | (1 << TypeScriptParser.PlusPlus) | (1 << TypeScriptParser.MinusMinus) | (1 << TypeScriptParser.Plus) | (1 << TypeScriptParser.Minus) | (1 << TypeScriptParser.BitNot) | (1 << TypeScriptParser.Not) | (1 << TypeScriptParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.TemplateStringLiteral - 123)))) !== 0)) {
                        {
                            this.state = 1291;
                            this.elementList();
                        }
                    }
                    this.state = 1294;
                    this.match(TypeScriptParser.CloseBracket);
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
    TypeScriptParser.prototype.elementList = function () {
        var _localctx = new ElementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, TypeScriptParser.RULE_elementList);
        var _la;
        try {
            var _alt = void 0;
            this.state = 1317;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.RegularExpressionLiteral:
                case TypeScriptParser.OpenBracket:
                case TypeScriptParser.OpenParen:
                case TypeScriptParser.OpenBrace:
                case TypeScriptParser.PlusPlus:
                case TypeScriptParser.MinusMinus:
                case TypeScriptParser.Plus:
                case TypeScriptParser.Minus:
                case TypeScriptParser.BitNot:
                case TypeScriptParser.Not:
                case TypeScriptParser.LessThan:
                case TypeScriptParser.NullLiteral:
                case TypeScriptParser.BooleanLiteral:
                case TypeScriptParser.DecimalLiteral:
                case TypeScriptParser.HexIntegerLiteral:
                case TypeScriptParser.OctalIntegerLiteral:
                case TypeScriptParser.OctalIntegerLiteral2:
                case TypeScriptParser.BinaryIntegerLiteral:
                case TypeScriptParser.Break:
                case TypeScriptParser.Do:
                case TypeScriptParser.Instanceof:
                case TypeScriptParser.Typeof:
                case TypeScriptParser.Case:
                case TypeScriptParser.Else:
                case TypeScriptParser.New:
                case TypeScriptParser.Var:
                case TypeScriptParser.Catch:
                case TypeScriptParser.Finally:
                case TypeScriptParser.Return:
                case TypeScriptParser.Void:
                case TypeScriptParser.Continue:
                case TypeScriptParser.For:
                case TypeScriptParser.Switch:
                case TypeScriptParser.While:
                case TypeScriptParser.Debugger:
                case TypeScriptParser.Function:
                case TypeScriptParser.This:
                case TypeScriptParser.With:
                case TypeScriptParser.Default:
                case TypeScriptParser.If:
                case TypeScriptParser.Throw:
                case TypeScriptParser.Delete:
                case TypeScriptParser.In:
                case TypeScriptParser.Try:
                case TypeScriptParser.From:
                case TypeScriptParser.ReadOnly:
                case TypeScriptParser.Async:
                case TypeScriptParser.Class:
                case TypeScriptParser.Enum:
                case TypeScriptParser.Extends:
                case TypeScriptParser.Super:
                case TypeScriptParser.Const:
                case TypeScriptParser.Export:
                case TypeScriptParser.Import:
                case TypeScriptParser.Implements:
                case TypeScriptParser.Let:
                case TypeScriptParser.Private:
                case TypeScriptParser.Public:
                case TypeScriptParser.Interface:
                case TypeScriptParser.Package:
                case TypeScriptParser.Protected:
                case TypeScriptParser.Static:
                case TypeScriptParser.Yield:
                case TypeScriptParser.Identifier:
                case TypeScriptParser.StringLiteral:
                case TypeScriptParser.TemplateStringLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1296;
                        this.singleExpression(0);
                        this.state = 1305;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1298;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1297;
                                                    this.match(TypeScriptParser.Comma);
                                                }
                                            }
                                            this.state = 1300;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === TypeScriptParser.Comma);
                                        this.state = 1302;
                                        this.singleExpression(0);
                                    }
                                }
                            }
                            this.state = 1307;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                        }
                        this.state = 1314;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeScriptParser.Comma) {
                            {
                                this.state = 1309;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 1308;
                                            this.match(TypeScriptParser.Comma);
                                        }
                                    }
                                    this.state = 1311;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === TypeScriptParser.Comma);
                                this.state = 1313;
                                this.lastElement();
                            }
                        }
                    }
                    break;
                case TypeScriptParser.Ellipsis:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1316;
                        this.lastElement();
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
    TypeScriptParser.prototype.lastElement = function () {
        var _localctx = new LastElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, TypeScriptParser.RULE_lastElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1319;
                this.match(TypeScriptParser.Ellipsis);
                this.state = 1322;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                    case 1:
                        {
                            this.state = 1320;
                            this.match(TypeScriptParser.Identifier);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1321;
                            this.singleExpression(0);
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
    TypeScriptParser.prototype.objectLiteral = function () {
        var _localctx = new ObjectLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, TypeScriptParser.RULE_objectLiteral);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1324;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.Ellipsis) | (1 << TypeScriptParser.Multiply))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TypeScriptParser.NullLiteral - 54)) | (1 << (TypeScriptParser.BooleanLiteral - 54)) | (1 << (TypeScriptParser.DecimalLiteral - 54)) | (1 << (TypeScriptParser.HexIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 54)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 54)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 54)) | (1 << (TypeScriptParser.Break - 54)) | (1 << (TypeScriptParser.Do - 54)) | (1 << (TypeScriptParser.Instanceof - 54)) | (1 << (TypeScriptParser.Typeof - 54)) | (1 << (TypeScriptParser.Case - 54)) | (1 << (TypeScriptParser.Else - 54)) | (1 << (TypeScriptParser.New - 54)) | (1 << (TypeScriptParser.Var - 54)) | (1 << (TypeScriptParser.Catch - 54)) | (1 << (TypeScriptParser.Finally - 54)) | (1 << (TypeScriptParser.Return - 54)) | (1 << (TypeScriptParser.Void - 54)) | (1 << (TypeScriptParser.Continue - 54)) | (1 << (TypeScriptParser.For - 54)) | (1 << (TypeScriptParser.Switch - 54)) | (1 << (TypeScriptParser.While - 54)) | (1 << (TypeScriptParser.Debugger - 54)) | (1 << (TypeScriptParser.Function - 54)) | (1 << (TypeScriptParser.This - 54)) | (1 << (TypeScriptParser.With - 54)) | (1 << (TypeScriptParser.Default - 54)) | (1 << (TypeScriptParser.If - 54)) | (1 << (TypeScriptParser.Throw - 54)) | (1 << (TypeScriptParser.Delete - 54)) | (1 << (TypeScriptParser.In - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TypeScriptParser.Try - 86)) | (1 << (TypeScriptParser.From - 86)) | (1 << (TypeScriptParser.ReadOnly - 86)) | (1 << (TypeScriptParser.Async - 86)) | (1 << (TypeScriptParser.Class - 86)) | (1 << (TypeScriptParser.Enum - 86)) | (1 << (TypeScriptParser.Extends - 86)) | (1 << (TypeScriptParser.Super - 86)) | (1 << (TypeScriptParser.Const - 86)) | (1 << (TypeScriptParser.Export - 86)) | (1 << (TypeScriptParser.Import - 86)) | (1 << (TypeScriptParser.Implements - 86)) | (1 << (TypeScriptParser.Let - 86)) | (1 << (TypeScriptParser.Private - 86)) | (1 << (TypeScriptParser.Public - 86)) | (1 << (TypeScriptParser.Interface - 86)) | (1 << (TypeScriptParser.Package - 86)) | (1 << (TypeScriptParser.Protected - 86)) | (1 << (TypeScriptParser.Static - 86)) | (1 << (TypeScriptParser.Yield - 86)))) !== 0) || _la === TypeScriptParser.Identifier || _la === TypeScriptParser.StringLiteral) {
                    {
                        this.state = 1325;
                        this.propertyAssignment();
                        this.state = 1330;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1326;
                                        this.match(TypeScriptParser.Comma);
                                        this.state = 1327;
                                        this.propertyAssignment();
                                    }
                                }
                            }
                            this.state = 1332;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                        }
                    }
                }
                this.state = 1336;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Comma) {
                    {
                        this.state = 1335;
                        this.match(TypeScriptParser.Comma);
                    }
                }
                this.state = 1338;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.propertyAssignment = function () {
        var _localctx = new PropertyAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, TypeScriptParser.RULE_propertyAssignment);
        var _la;
        try {
            this.state = 1355;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                case 1:
                    _localctx = new PropertyExpressionAssignmentContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1340;
                        this.propertyName();
                        this.state = 1341;
                        _la = this._input.LA(1);
                        if (!(_la === TypeScriptParser.Assign || _la === TypeScriptParser.Colon)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1342;
                        this.singleExpression(0);
                    }
                    break;
                case 2:
                    _localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1344;
                        this.match(TypeScriptParser.OpenBracket);
                        this.state = 1345;
                        this.singleExpression(0);
                        this.state = 1346;
                        this.match(TypeScriptParser.CloseBracket);
                        this.state = 1347;
                        this.match(TypeScriptParser.Colon);
                        this.state = 1348;
                        this.singleExpression(0);
                    }
                    break;
                case 3:
                    _localctx = new PropertyGetterContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1350;
                        this.getAccessor();
                    }
                    break;
                case 4:
                    _localctx = new PropertySetterContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1351;
                        this.setAccessor();
                    }
                    break;
                case 5:
                    _localctx = new MethodPropertyContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1352;
                        this.generatorMethod();
                    }
                    break;
                case 6:
                    _localctx = new PropertyShorthandContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1353;
                        this.match(TypeScriptParser.Identifier);
                    }
                    break;
                case 7:
                    _localctx = new RestParameterInObjectContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1354;
                        this.restParameter();
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
    TypeScriptParser.prototype.getAccessor = function () {
        var _localctx = new GetAccessorContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, TypeScriptParser.RULE_getAccessor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1357;
                this.getter();
                this.state = 1358;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1359;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 1360;
                        this.typeAnnotation();
                    }
                }
                this.state = 1363;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1364;
                this.functionBody();
                this.state = 1365;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.setAccessor = function () {
        var _localctx = new SetAccessorContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, TypeScriptParser.RULE_setAccessor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1367;
                this.setter();
                this.state = 1368;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1371;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.Identifier:
                        {
                            this.state = 1369;
                            this.match(TypeScriptParser.Identifier);
                        }
                        break;
                    case TypeScriptParser.OpenBracket:
                    case TypeScriptParser.OpenBrace:
                        {
                            this.state = 1370;
                            this.bindingPattern();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 1373;
                        this.typeAnnotation();
                    }
                }
                this.state = 1376;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1377;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1378;
                this.functionBody();
                this.state = 1379;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.propertyName = function () {
        var _localctx = new PropertyNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, TypeScriptParser.RULE_propertyName);
        try {
            this.state = 1384;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.NullLiteral:
                case TypeScriptParser.BooleanLiteral:
                case TypeScriptParser.Break:
                case TypeScriptParser.Do:
                case TypeScriptParser.Instanceof:
                case TypeScriptParser.Typeof:
                case TypeScriptParser.Case:
                case TypeScriptParser.Else:
                case TypeScriptParser.New:
                case TypeScriptParser.Var:
                case TypeScriptParser.Catch:
                case TypeScriptParser.Finally:
                case TypeScriptParser.Return:
                case TypeScriptParser.Void:
                case TypeScriptParser.Continue:
                case TypeScriptParser.For:
                case TypeScriptParser.Switch:
                case TypeScriptParser.While:
                case TypeScriptParser.Debugger:
                case TypeScriptParser.Function:
                case TypeScriptParser.This:
                case TypeScriptParser.With:
                case TypeScriptParser.Default:
                case TypeScriptParser.If:
                case TypeScriptParser.Throw:
                case TypeScriptParser.Delete:
                case TypeScriptParser.In:
                case TypeScriptParser.Try:
                case TypeScriptParser.From:
                case TypeScriptParser.ReadOnly:
                case TypeScriptParser.Async:
                case TypeScriptParser.Class:
                case TypeScriptParser.Enum:
                case TypeScriptParser.Extends:
                case TypeScriptParser.Super:
                case TypeScriptParser.Const:
                case TypeScriptParser.Export:
                case TypeScriptParser.Import:
                case TypeScriptParser.Implements:
                case TypeScriptParser.Let:
                case TypeScriptParser.Private:
                case TypeScriptParser.Public:
                case TypeScriptParser.Interface:
                case TypeScriptParser.Package:
                case TypeScriptParser.Protected:
                case TypeScriptParser.Static:
                case TypeScriptParser.Yield:
                case TypeScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1381;
                        this.identifierName();
                    }
                    break;
                case TypeScriptParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1382;
                        this.match(TypeScriptParser.StringLiteral);
                    }
                    break;
                case TypeScriptParser.DecimalLiteral:
                case TypeScriptParser.HexIntegerLiteral:
                case TypeScriptParser.OctalIntegerLiteral:
                case TypeScriptParser.OctalIntegerLiteral2:
                case TypeScriptParser.BinaryIntegerLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1383;
                        this.numericLiteral();
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
    TypeScriptParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, TypeScriptParser.RULE_arguments);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1386;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1400;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypeScriptParser.RegularExpressionLiteral:
                    case TypeScriptParser.OpenBracket:
                    case TypeScriptParser.OpenParen:
                    case TypeScriptParser.OpenBrace:
                    case TypeScriptParser.PlusPlus:
                    case TypeScriptParser.MinusMinus:
                    case TypeScriptParser.Plus:
                    case TypeScriptParser.Minus:
                    case TypeScriptParser.BitNot:
                    case TypeScriptParser.Not:
                    case TypeScriptParser.LessThan:
                    case TypeScriptParser.NullLiteral:
                    case TypeScriptParser.BooleanLiteral:
                    case TypeScriptParser.DecimalLiteral:
                    case TypeScriptParser.HexIntegerLiteral:
                    case TypeScriptParser.OctalIntegerLiteral:
                    case TypeScriptParser.OctalIntegerLiteral2:
                    case TypeScriptParser.BinaryIntegerLiteral:
                    case TypeScriptParser.Break:
                    case TypeScriptParser.Do:
                    case TypeScriptParser.Instanceof:
                    case TypeScriptParser.Typeof:
                    case TypeScriptParser.Case:
                    case TypeScriptParser.Else:
                    case TypeScriptParser.New:
                    case TypeScriptParser.Var:
                    case TypeScriptParser.Catch:
                    case TypeScriptParser.Finally:
                    case TypeScriptParser.Return:
                    case TypeScriptParser.Void:
                    case TypeScriptParser.Continue:
                    case TypeScriptParser.For:
                    case TypeScriptParser.Switch:
                    case TypeScriptParser.While:
                    case TypeScriptParser.Debugger:
                    case TypeScriptParser.Function:
                    case TypeScriptParser.This:
                    case TypeScriptParser.With:
                    case TypeScriptParser.Default:
                    case TypeScriptParser.If:
                    case TypeScriptParser.Throw:
                    case TypeScriptParser.Delete:
                    case TypeScriptParser.In:
                    case TypeScriptParser.Try:
                    case TypeScriptParser.From:
                    case TypeScriptParser.ReadOnly:
                    case TypeScriptParser.Async:
                    case TypeScriptParser.Class:
                    case TypeScriptParser.Enum:
                    case TypeScriptParser.Extends:
                    case TypeScriptParser.Super:
                    case TypeScriptParser.Const:
                    case TypeScriptParser.Export:
                    case TypeScriptParser.Import:
                    case TypeScriptParser.Implements:
                    case TypeScriptParser.Let:
                    case TypeScriptParser.Private:
                    case TypeScriptParser.Public:
                    case TypeScriptParser.Interface:
                    case TypeScriptParser.Package:
                    case TypeScriptParser.Protected:
                    case TypeScriptParser.Static:
                    case TypeScriptParser.Yield:
                    case TypeScriptParser.Identifier:
                    case TypeScriptParser.StringLiteral:
                    case TypeScriptParser.TemplateStringLiteral:
                        {
                            this.state = 1387;
                            this.singleExpression(0);
                            this.state = 1392;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1388;
                                            this.match(TypeScriptParser.Comma);
                                            this.state = 1389;
                                            this.singleExpression(0);
                                        }
                                    }
                                }
                                this.state = 1394;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                            }
                            this.state = 1397;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TypeScriptParser.Comma) {
                                {
                                    this.state = 1395;
                                    this.match(TypeScriptParser.Comma);
                                    this.state = 1396;
                                    this.lastArgument();
                                }
                            }
                        }
                        break;
                    case TypeScriptParser.Ellipsis:
                        {
                            this.state = 1399;
                            this.lastArgument();
                        }
                        break;
                    case TypeScriptParser.CloseParen:
                        break;
                    default:
                        break;
                }
                this.state = 1402;
                this.match(TypeScriptParser.CloseParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.lastArgument = function () {
        var _localctx = new LastArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, TypeScriptParser.RULE_lastArgument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1404;
                this.match(TypeScriptParser.Ellipsis);
                this.state = 1405;
                this.match(TypeScriptParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.expressionSequence = function () {
        var _localctx = new ExpressionSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, TypeScriptParser.RULE_expressionSequence);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1407;
                this.singleExpression(0);
                this.state = 1412;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1408;
                                this.match(TypeScriptParser.Comma);
                                this.state = 1409;
                                this.singleExpression(0);
                            }
                        }
                    }
                    this.state = 1414;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
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
    TypeScriptParser.prototype.functionExpressionDeclaration = function () {
        var _localctx = new FunctionExpressionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, TypeScriptParser.RULE_functionExpressionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1415;
                this.match(TypeScriptParser.Function);
                this.state = 1417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Identifier) {
                    {
                        this.state = 1416;
                        this.match(TypeScriptParser.Identifier);
                    }
                }
                this.state = 1419;
                this.match(TypeScriptParser.OpenParen);
                this.state = 1421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)) | (1 << (TypeScriptParser.Identifier - 100)))) !== 0)) {
                    {
                        this.state = 1420;
                        this.formalParameterList();
                    }
                }
                this.state = 1423;
                this.match(TypeScriptParser.CloseParen);
                this.state = 1425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 1424;
                        this.typeAnnotation();
                    }
                }
                this.state = 1427;
                this.match(TypeScriptParser.OpenBrace);
                this.state = 1428;
                this.functionBody();
                this.state = 1429;
                this.match(TypeScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.singleExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new SingleExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 250;
        this.enterRecursionRule(_localctx, 250, TypeScriptParser.RULE_singleExpression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1486;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
                    case 1:
                        {
                            _localctx = new FunctionExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1432;
                            this.functionExpressionDeclaration();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new ArrowFunctionExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1433;
                            this.arrowFunctionDeclaration();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new ClassExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1434;
                            this.match(TypeScriptParser.Class);
                            this.state = 1436;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TypeScriptParser.Identifier) {
                                {
                                    this.state = 1435;
                                    this.match(TypeScriptParser.Identifier);
                                }
                            }
                            this.state = 1438;
                            this.classTail();
                        }
                        break;
                    case 4:
                        {
                            _localctx = new NewExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1439;
                            this.match(TypeScriptParser.New);
                            this.state = 1440;
                            this.singleExpression(0);
                            this.state = 1442;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1441;
                                        this.typeArguments();
                                    }
                                    break;
                            }
                            this.state = 1445;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1444;
                                        this.arguments();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 5:
                        {
                            _localctx = new DeleteExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1447;
                            this.match(TypeScriptParser.Delete);
                            this.state = 1448;
                            this.singleExpression(37);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new VoidExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1449;
                            this.match(TypeScriptParser.Void);
                            this.state = 1450;
                            this.singleExpression(36);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new TypeofExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1451;
                            this.match(TypeScriptParser.Typeof);
                            this.state = 1452;
                            this.singleExpression(35);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new PreIncrementExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1453;
                            this.match(TypeScriptParser.PlusPlus);
                            this.state = 1454;
                            this.singleExpression(34);
                        }
                        break;
                    case 9:
                        {
                            _localctx = new PreDecreaseExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1455;
                            this.match(TypeScriptParser.MinusMinus);
                            this.state = 1456;
                            this.singleExpression(33);
                        }
                        break;
                    case 10:
                        {
                            _localctx = new UnaryPlusExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1457;
                            this.match(TypeScriptParser.Plus);
                            this.state = 1458;
                            this.singleExpression(32);
                        }
                        break;
                    case 11:
                        {
                            _localctx = new UnaryMinusExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1459;
                            this.match(TypeScriptParser.Minus);
                            this.state = 1460;
                            this.singleExpression(31);
                        }
                        break;
                    case 12:
                        {
                            _localctx = new BitNotExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1461;
                            this.match(TypeScriptParser.BitNot);
                            this.state = 1462;
                            this.singleExpression(30);
                        }
                        break;
                    case 13:
                        {
                            _localctx = new NotExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1463;
                            this.match(TypeScriptParser.Not);
                            this.state = 1464;
                            this.singleExpression(29);
                        }
                        break;
                    case 14:
                        {
                            _localctx = new IteratorsExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1465;
                            this.iteratorBlock();
                        }
                        break;
                    case 15:
                        {
                            _localctx = new GeneratorsExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1466;
                            this.generatorBlock();
                        }
                        break;
                    case 16:
                        {
                            _localctx = new GeneratorsFunctionExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1467;
                            this.generatorFunctionDeclaration();
                        }
                        break;
                    case 17:
                        {
                            _localctx = new YieldExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1468;
                            this.yieldStatement();
                        }
                        break;
                    case 18:
                        {
                            _localctx = new ThisExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1469;
                            this.match(TypeScriptParser.This);
                        }
                        break;
                    case 19:
                        {
                            _localctx = new IdentifierExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1470;
                            this.identifierName();
                            this.state = 1472;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1471;
                                        this.singleExpression(0);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 20:
                        {
                            _localctx = new SuperExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1474;
                            this.match(TypeScriptParser.Super);
                        }
                        break;
                    case 21:
                        {
                            _localctx = new LiteralExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1475;
                            this.literal();
                        }
                        break;
                    case 22:
                        {
                            _localctx = new ArrayLiteralExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1476;
                            this.arrayLiteral();
                        }
                        break;
                    case 23:
                        {
                            _localctx = new ObjectLiteralExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1477;
                            this.objectLiteral();
                        }
                        break;
                    case 24:
                        {
                            _localctx = new ParenthesizedExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1478;
                            this.match(TypeScriptParser.OpenParen);
                            this.state = 1479;
                            this.expressionSequence();
                            this.state = 1480;
                            this.match(TypeScriptParser.CloseParen);
                        }
                        break;
                    case 25:
                        {
                            _localctx = new GenericTypesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1482;
                            this.typeArguments();
                            this.state = 1484;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1483;
                                        this.expressionSequence();
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1557;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1555;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1488;
                                        if (!(this.precpred(this._ctx, 28))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                                        }
                                        this.state = 1489;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.Multiply) | (1 << TypeScriptParser.Divide) | (1 << TypeScriptParser.Modulus))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1490;
                                        this.singleExpression(29);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1491;
                                        if (!(this.precpred(this._ctx, 27))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                                        }
                                        this.state = 1492;
                                        _la = this._input.LA(1);
                                        if (!(_la === TypeScriptParser.Plus || _la === TypeScriptParser.Minus)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1493;
                                        this.singleExpression(28);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1494;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 1495;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.RightShiftArithmetic) | (1 << TypeScriptParser.LeftShiftArithmetic) | (1 << TypeScriptParser.RightShiftLogical))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1496;
                                        this.singleExpression(27);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1497;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 1498;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (TypeScriptParser.LessThan - 29)) | (1 << (TypeScriptParser.MoreThan - 29)) | (1 << (TypeScriptParser.LessThanEquals - 29)) | (1 << (TypeScriptParser.GreaterThanEquals - 29)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1499;
                                        this.singleExpression(26);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1500;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 1501;
                                        this.match(TypeScriptParser.Instanceof);
                                        this.state = 1502;
                                        this.singleExpression(25);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1503;
                                        if (!(this.precpred(this._ctx, 23))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                                        }
                                        this.state = 1504;
                                        this.match(TypeScriptParser.In);
                                        this.state = 1505;
                                        this.singleExpression(24);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1506;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                                        }
                                        this.state = 1507;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TypeScriptParser.Equals_ - 33)) | (1 << (TypeScriptParser.NotEquals - 33)) | (1 << (TypeScriptParser.IdentityEquals - 33)) | (1 << (TypeScriptParser.IdentityNotEquals - 33)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1508;
                                        this.singleExpression(23);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1509;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 1510;
                                        this.match(TypeScriptParser.BitAnd);
                                        this.state = 1511;
                                        this.singleExpression(22);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1512;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 1513;
                                        this.match(TypeScriptParser.BitXOr);
                                        this.state = 1514;
                                        this.singleExpression(21);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1515;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 1516;
                                        this.match(TypeScriptParser.BitOr);
                                        this.state = 1517;
                                        this.singleExpression(20);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1518;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 1519;
                                        this.match(TypeScriptParser.And);
                                        this.state = 1520;
                                        this.singleExpression(19);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1521;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1522;
                                        this.match(TypeScriptParser.Or);
                                        this.state = 1523;
                                        this.singleExpression(18);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1524;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1525;
                                        this.match(TypeScriptParser.QuestionMark);
                                        this.state = 1526;
                                        this.singleExpression(0);
                                        this.state = 1527;
                                        this.match(TypeScriptParser.Colon);
                                        this.state = 1528;
                                        this.singleExpression(17);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1530;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1531;
                                        this.match(TypeScriptParser.Assign);
                                        this.state = 1532;
                                        this.singleExpression(16);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1533;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1534;
                                        this.assignmentOperator();
                                        this.state = 1535;
                                        this.singleExpression(15);
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1537;
                                        if (!(this.precpred(this._ctx, 43))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 43)");
                                        }
                                        this.state = 1538;
                                        this.match(TypeScriptParser.OpenBracket);
                                        this.state = 1539;
                                        this.expressionSequence();
                                        this.state = 1540;
                                        this.match(TypeScriptParser.CloseBracket);
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1542;
                                        if (!(this.precpred(this._ctx, 42))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
                                        }
                                        this.state = 1543;
                                        this.match(TypeScriptParser.Dot);
                                        this.state = 1544;
                                        this.identifierName();
                                    }
                                    break;
                                case 18:
                                    {
                                        _localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1545;
                                        if (!(this.precpred(this._ctx, 41))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
                                        }
                                        this.state = 1546;
                                        this.arguments();
                                    }
                                    break;
                                case 19:
                                    {
                                        _localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1547;
                                        if (!(this.precpred(this._ctx, 39))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
                                        }
                                        this.state = 1548;
                                        if (!(this.notLineTerminator())) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                                        }
                                        this.state = 1549;
                                        this.match(TypeScriptParser.PlusPlus);
                                    }
                                    break;
                                case 20:
                                    {
                                        _localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1550;
                                        if (!(this.precpred(this._ctx, 38))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
                                        }
                                        this.state = 1551;
                                        if (!(this.notLineTerminator())) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                                        }
                                        this.state = 1552;
                                        this.match(TypeScriptParser.MinusMinus);
                                    }
                                    break;
                                case 21:
                                    {
                                        _localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
                                        this.state = 1553;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1554;
                                        this.match(TypeScriptParser.TemplateStringLiteral);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1559;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
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
    TypeScriptParser.prototype.arrowFunctionDeclaration = function () {
        var _localctx = new ArrowFunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, TypeScriptParser.RULE_arrowFunctionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1561;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Async) {
                    {
                        this.state = 1560;
                        this.match(TypeScriptParser.Async);
                    }
                }
                this.state = 1563;
                this.arrowFunctionParameters();
                this.state = 1565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeScriptParser.Colon) {
                    {
                        this.state = 1564;
                        this.typeAnnotation();
                    }
                }
                this.state = 1567;
                this.match(TypeScriptParser.ARROW);
                this.state = 1568;
                this.arrowFunctionBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.arrowFunctionParameters = function () {
        var _localctx = new ArrowFunctionParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, TypeScriptParser.RULE_arrowFunctionParameters);
        var _la;
        try {
            this.state = 1576;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1570;
                        this.match(TypeScriptParser.Identifier);
                    }
                    break;
                case TypeScriptParser.OpenParen:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1571;
                        this.match(TypeScriptParser.OpenParen);
                        this.state = 1573;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (TypeScriptParser.Private - 100)) | (1 << (TypeScriptParser.Public - 100)) | (1 << (TypeScriptParser.Protected - 100)) | (1 << (TypeScriptParser.Identifier - 100)))) !== 0)) {
                            {
                                this.state = 1572;
                                this.formalParameterList();
                            }
                        }
                        this.state = 1575;
                        this.match(TypeScriptParser.CloseParen);
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
    TypeScriptParser.prototype.arrowFunctionBody = function () {
        var _localctx = new ArrowFunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, TypeScriptParser.RULE_arrowFunctionBody);
        try {
            this.state = 1583;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1578;
                        this.singleExpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1579;
                        this.match(TypeScriptParser.OpenBrace);
                        this.state = 1580;
                        this.functionBody();
                        this.state = 1581;
                        this.match(TypeScriptParser.CloseBrace);
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
    TypeScriptParser.prototype.assignmentOperator = function () {
        var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, TypeScriptParser.RULE_assignmentOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1585;
                _la = this._input.LA(1);
                if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (TypeScriptParser.MultiplyAssign - 42)) | (1 << (TypeScriptParser.DivideAssign - 42)) | (1 << (TypeScriptParser.ModulusAssign - 42)) | (1 << (TypeScriptParser.PlusAssign - 42)) | (1 << (TypeScriptParser.MinusAssign - 42)) | (1 << (TypeScriptParser.LeftShiftArithmeticAssign - 42)) | (1 << (TypeScriptParser.RightShiftArithmeticAssign - 42)) | (1 << (TypeScriptParser.RightShiftLogicalAssign - 42)) | (1 << (TypeScriptParser.BitAndAssign - 42)) | (1 << (TypeScriptParser.BitXorAssign - 42)) | (1 << (TypeScriptParser.BitOrAssign - 42)))) !== 0))) {
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
    TypeScriptParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, TypeScriptParser.RULE_literal);
        try {
            this.state = 1593;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1587;
                        this.match(TypeScriptParser.NullLiteral);
                    }
                    break;
                case TypeScriptParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1588;
                        this.match(TypeScriptParser.BooleanLiteral);
                    }
                    break;
                case TypeScriptParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1589;
                        this.match(TypeScriptParser.StringLiteral);
                    }
                    break;
                case TypeScriptParser.TemplateStringLiteral:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1590;
                        this.match(TypeScriptParser.TemplateStringLiteral);
                    }
                    break;
                case TypeScriptParser.RegularExpressionLiteral:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1591;
                        this.match(TypeScriptParser.RegularExpressionLiteral);
                    }
                    break;
                case TypeScriptParser.DecimalLiteral:
                case TypeScriptParser.HexIntegerLiteral:
                case TypeScriptParser.OctalIntegerLiteral:
                case TypeScriptParser.OctalIntegerLiteral2:
                case TypeScriptParser.BinaryIntegerLiteral:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1592;
                        this.numericLiteral();
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
    TypeScriptParser.prototype.numericLiteral = function () {
        var _localctx = new NumericLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, TypeScriptParser.RULE_numericLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1595;
                _la = this._input.LA(1);
                if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TypeScriptParser.DecimalLiteral - 56)) | (1 << (TypeScriptParser.HexIntegerLiteral - 56)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 56)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 56)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 56)))) !== 0))) {
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
    TypeScriptParser.prototype.identifierName = function () {
        var _localctx = new IdentifierNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, TypeScriptParser.RULE_identifierName);
        try {
            this.state = 1599;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1597;
                        this.match(TypeScriptParser.Identifier);
                    }
                    break;
                case TypeScriptParser.NullLiteral:
                case TypeScriptParser.BooleanLiteral:
                case TypeScriptParser.Break:
                case TypeScriptParser.Do:
                case TypeScriptParser.Instanceof:
                case TypeScriptParser.Typeof:
                case TypeScriptParser.Case:
                case TypeScriptParser.Else:
                case TypeScriptParser.New:
                case TypeScriptParser.Var:
                case TypeScriptParser.Catch:
                case TypeScriptParser.Finally:
                case TypeScriptParser.Return:
                case TypeScriptParser.Void:
                case TypeScriptParser.Continue:
                case TypeScriptParser.For:
                case TypeScriptParser.Switch:
                case TypeScriptParser.While:
                case TypeScriptParser.Debugger:
                case TypeScriptParser.Function:
                case TypeScriptParser.This:
                case TypeScriptParser.With:
                case TypeScriptParser.Default:
                case TypeScriptParser.If:
                case TypeScriptParser.Throw:
                case TypeScriptParser.Delete:
                case TypeScriptParser.In:
                case TypeScriptParser.Try:
                case TypeScriptParser.From:
                case TypeScriptParser.ReadOnly:
                case TypeScriptParser.Async:
                case TypeScriptParser.Class:
                case TypeScriptParser.Enum:
                case TypeScriptParser.Extends:
                case TypeScriptParser.Super:
                case TypeScriptParser.Const:
                case TypeScriptParser.Export:
                case TypeScriptParser.Import:
                case TypeScriptParser.Implements:
                case TypeScriptParser.Let:
                case TypeScriptParser.Private:
                case TypeScriptParser.Public:
                case TypeScriptParser.Interface:
                case TypeScriptParser.Package:
                case TypeScriptParser.Protected:
                case TypeScriptParser.Static:
                case TypeScriptParser.Yield:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1598;
                        this.reservedWord();
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
    TypeScriptParser.prototype.reservedWord = function () {
        var _localctx = new ReservedWordContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, TypeScriptParser.RULE_reservedWord);
        try {
            this.state = 1604;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeScriptParser.Break:
                case TypeScriptParser.Do:
                case TypeScriptParser.Instanceof:
                case TypeScriptParser.Typeof:
                case TypeScriptParser.Case:
                case TypeScriptParser.Else:
                case TypeScriptParser.New:
                case TypeScriptParser.Var:
                case TypeScriptParser.Catch:
                case TypeScriptParser.Finally:
                case TypeScriptParser.Return:
                case TypeScriptParser.Void:
                case TypeScriptParser.Continue:
                case TypeScriptParser.For:
                case TypeScriptParser.Switch:
                case TypeScriptParser.While:
                case TypeScriptParser.Debugger:
                case TypeScriptParser.Function:
                case TypeScriptParser.This:
                case TypeScriptParser.With:
                case TypeScriptParser.Default:
                case TypeScriptParser.If:
                case TypeScriptParser.Throw:
                case TypeScriptParser.Delete:
                case TypeScriptParser.In:
                case TypeScriptParser.Try:
                case TypeScriptParser.From:
                case TypeScriptParser.ReadOnly:
                case TypeScriptParser.Async:
                case TypeScriptParser.Class:
                case TypeScriptParser.Enum:
                case TypeScriptParser.Extends:
                case TypeScriptParser.Super:
                case TypeScriptParser.Const:
                case TypeScriptParser.Export:
                case TypeScriptParser.Import:
                case TypeScriptParser.Implements:
                case TypeScriptParser.Let:
                case TypeScriptParser.Private:
                case TypeScriptParser.Public:
                case TypeScriptParser.Interface:
                case TypeScriptParser.Package:
                case TypeScriptParser.Protected:
                case TypeScriptParser.Static:
                case TypeScriptParser.Yield:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1601;
                        this.keyword();
                    }
                    break;
                case TypeScriptParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1602;
                        this.match(TypeScriptParser.NullLiteral);
                    }
                    break;
                case TypeScriptParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1603;
                        this.match(TypeScriptParser.BooleanLiteral);
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
    TypeScriptParser.prototype.keyword = function () {
        var _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, TypeScriptParser.RULE_keyword);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1606;
                _la = this._input.LA(1);
                if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (TypeScriptParser.Break - 61)) | (1 << (TypeScriptParser.Do - 61)) | (1 << (TypeScriptParser.Instanceof - 61)) | (1 << (TypeScriptParser.Typeof - 61)) | (1 << (TypeScriptParser.Case - 61)) | (1 << (TypeScriptParser.Else - 61)) | (1 << (TypeScriptParser.New - 61)) | (1 << (TypeScriptParser.Var - 61)) | (1 << (TypeScriptParser.Catch - 61)) | (1 << (TypeScriptParser.Finally - 61)) | (1 << (TypeScriptParser.Return - 61)) | (1 << (TypeScriptParser.Void - 61)) | (1 << (TypeScriptParser.Continue - 61)) | (1 << (TypeScriptParser.For - 61)) | (1 << (TypeScriptParser.Switch - 61)) | (1 << (TypeScriptParser.While - 61)) | (1 << (TypeScriptParser.Debugger - 61)) | (1 << (TypeScriptParser.Function - 61)) | (1 << (TypeScriptParser.This - 61)) | (1 << (TypeScriptParser.With - 61)) | (1 << (TypeScriptParser.Default - 61)) | (1 << (TypeScriptParser.If - 61)) | (1 << (TypeScriptParser.Throw - 61)) | (1 << (TypeScriptParser.Delete - 61)) | (1 << (TypeScriptParser.In - 61)) | (1 << (TypeScriptParser.Try - 61)) | (1 << (TypeScriptParser.From - 61)) | (1 << (TypeScriptParser.ReadOnly - 61)) | (1 << (TypeScriptParser.Async - 61)) | (1 << (TypeScriptParser.Class - 61)) | (1 << (TypeScriptParser.Enum - 61)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (TypeScriptParser.Extends - 93)) | (1 << (TypeScriptParser.Super - 93)) | (1 << (TypeScriptParser.Const - 93)) | (1 << (TypeScriptParser.Export - 93)) | (1 << (TypeScriptParser.Import - 93)) | (1 << (TypeScriptParser.Implements - 93)) | (1 << (TypeScriptParser.Let - 93)) | (1 << (TypeScriptParser.Private - 93)) | (1 << (TypeScriptParser.Public - 93)) | (1 << (TypeScriptParser.Interface - 93)) | (1 << (TypeScriptParser.Package - 93)) | (1 << (TypeScriptParser.Protected - 93)) | (1 << (TypeScriptParser.Static - 93)) | (1 << (TypeScriptParser.Yield - 93)))) !== 0))) {
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
    TypeScriptParser.prototype.getter = function () {
        var _localctx = new GetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, TypeScriptParser.RULE_getter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1608;
                this.match(TypeScriptParser.Identifier);
                this.state = 1609;
                if (!(this.p("get"))) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.p(\"get\")");
                }
                this.state = 1610;
                this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.setter = function () {
        var _localctx = new SetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, TypeScriptParser.RULE_setter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1612;
                this.match(TypeScriptParser.Identifier);
                this.state = 1613;
                if (!(this.p("set"))) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.p(\"set\")");
                }
                this.state = 1614;
                this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TypeScriptParser.prototype.eos = function () {
        var _localctx = new EosContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, TypeScriptParser.RULE_eos);
        try {
            this.state = 1620;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 196, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1616;
                        this.match(TypeScriptParser.SemiColon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1617;
                        this.match(TypeScriptParser.EOF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1618;
                        if (!(this.lineTerminatorAhead())) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.lineTerminatorAhead()");
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1619;
                        if (!(this.closeBrace())) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.closeBrace()");
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
    TypeScriptParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 10:
                return this.unionOrIntersectionOrPrimaryType_sempred(_localctx, predIndex);
            case 11:
                return this.primaryType_sempred(_localctx, predIndex);
            case 21:
                return this.arrayType_sempred(_localctx, predIndex);
            case 56:
                return this.decoratorMemberExpression_sempred(_localctx, predIndex);
            case 72:
                return this.expressionStatement_sempred(_localctx, predIndex);
            case 74:
                return this.iterationStatement_sempred(_localctx, predIndex);
            case 76:
                return this.continueStatement_sempred(_localctx, predIndex);
            case 77:
                return this.breakStatement_sempred(_localctx, predIndex);
            case 78:
                return this.returnStatement_sempred(_localctx, predIndex);
            case 79:
                return this.yieldStatement_sempred(_localctx, predIndex);
            case 87:
                return this.throwStatement_sempred(_localctx, predIndex);
            case 125:
                return this.singleExpression_sempred(_localctx, predIndex);
            case 135:
                return this.getter_sempred(_localctx, predIndex);
            case 136:
                return this.setter_sempred(_localctx, predIndex);
            case 137:
                return this.eos_sempred(_localctx, predIndex);
        }
        return true;
    };
    TypeScriptParser.prototype.unionOrIntersectionOrPrimaryType_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 3);
            case 1:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    TypeScriptParser.prototype.primaryType_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 5);
            case 3:
                return notLineTerminator();
        }
        return true;
    };
    TypeScriptParser.prototype.arrayType_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return notLineTerminator();
        }
        return true;
    };
    TypeScriptParser.prototype.decoratorMemberExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 5:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    TypeScriptParser.prototype.expressionStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.notOpenBraceAndNotFunction();
        }
        return true;
    };
    TypeScriptParser.prototype.iterationStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return this.p("of");
            case 8:
                return this.p("of");
        }
        return true;
    };
    TypeScriptParser.prototype.continueStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 9:
                return this.notLineTerminator();
        }
        return true;
    };
    TypeScriptParser.prototype.breakStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 10:
                return this.notLineTerminator();
        }
        return true;
    };
    TypeScriptParser.prototype.returnStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.notLineTerminator();
        }
        return true;
    };
    TypeScriptParser.prototype.yieldStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 12:
                return this.notLineTerminator();
        }
        return true;
    };
    TypeScriptParser.prototype.throwStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 13:
                return this.notLineTerminator();
        }
        return true;
    };
    TypeScriptParser.prototype.singleExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 14:
                return this.precpred(this._ctx, 28);
            case 15:
                return this.precpred(this._ctx, 27);
            case 16:
                return this.precpred(this._ctx, 26);
            case 17:
                return this.precpred(this._ctx, 25);
            case 18:
                return this.precpred(this._ctx, 24);
            case 19:
                return this.precpred(this._ctx, 23);
            case 20:
                return this.precpred(this._ctx, 22);
            case 21:
                return this.precpred(this._ctx, 21);
            case 22:
                return this.precpred(this._ctx, 20);
            case 23:
                return this.precpred(this._ctx, 19);
            case 24:
                return this.precpred(this._ctx, 18);
            case 25:
                return this.precpred(this._ctx, 17);
            case 26:
                return this.precpred(this._ctx, 16);
            case 27:
                return this.precpred(this._ctx, 15);
            case 28:
                return this.precpred(this._ctx, 14);
            case 29:
                return this.precpred(this._ctx, 43);
            case 30:
                return this.precpred(this._ctx, 42);
            case 31:
                return this.precpred(this._ctx, 41);
            case 32:
                return this.precpred(this._ctx, 39);
            case 33:
                return this.notLineTerminator();
            case 34:
                return this.precpred(this._ctx, 38);
            case 35:
                return this.notLineTerminator();
            case 36:
                return this.precpred(this._ctx, 13);
        }
        return true;
    };
    TypeScriptParser.prototype.getter_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 37:
                return this.p("get");
        }
        return true;
    };
    TypeScriptParser.prototype.setter_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 38:
                return this.p("set");
        }
        return true;
    };
    TypeScriptParser.prototype.eos_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 39:
                return this.lineTerminatorAhead();
            case 40:
                return this.closeBrace();
        }
        return true;
    };
    Object.defineProperty(TypeScriptParser, "_ATN", {
        get: function () {
            if (!TypeScriptParser.__ATN) {
                TypeScriptParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TypeScriptParser._serializedATN));
            }
            return TypeScriptParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptParser.MultiLineComment = 1;
    TypeScriptParser.SingleLineComment = 2;
    TypeScriptParser.RegularExpressionLiteral = 3;
    TypeScriptParser.OpenBracket = 4;
    TypeScriptParser.CloseBracket = 5;
    TypeScriptParser.OpenParen = 6;
    TypeScriptParser.CloseParen = 7;
    TypeScriptParser.OpenBrace = 8;
    TypeScriptParser.CloseBrace = 9;
    TypeScriptParser.SemiColon = 10;
    TypeScriptParser.Comma = 11;
    TypeScriptParser.Assign = 12;
    TypeScriptParser.QuestionMark = 13;
    TypeScriptParser.Colon = 14;
    TypeScriptParser.Ellipsis = 15;
    TypeScriptParser.Dot = 16;
    TypeScriptParser.PlusPlus = 17;
    TypeScriptParser.MinusMinus = 18;
    TypeScriptParser.Plus = 19;
    TypeScriptParser.Minus = 20;
    TypeScriptParser.BitNot = 21;
    TypeScriptParser.Not = 22;
    TypeScriptParser.Multiply = 23;
    TypeScriptParser.Divide = 24;
    TypeScriptParser.Modulus = 25;
    TypeScriptParser.RightShiftArithmetic = 26;
    TypeScriptParser.LeftShiftArithmetic = 27;
    TypeScriptParser.RightShiftLogical = 28;
    TypeScriptParser.LessThan = 29;
    TypeScriptParser.MoreThan = 30;
    TypeScriptParser.LessThanEquals = 31;
    TypeScriptParser.GreaterThanEquals = 32;
    TypeScriptParser.Equals_ = 33;
    TypeScriptParser.NotEquals = 34;
    TypeScriptParser.IdentityEquals = 35;
    TypeScriptParser.IdentityNotEquals = 36;
    TypeScriptParser.BitAnd = 37;
    TypeScriptParser.BitXOr = 38;
    TypeScriptParser.BitOr = 39;
    TypeScriptParser.And = 40;
    TypeScriptParser.Or = 41;
    TypeScriptParser.MultiplyAssign = 42;
    TypeScriptParser.DivideAssign = 43;
    TypeScriptParser.ModulusAssign = 44;
    TypeScriptParser.PlusAssign = 45;
    TypeScriptParser.MinusAssign = 46;
    TypeScriptParser.LeftShiftArithmeticAssign = 47;
    TypeScriptParser.RightShiftArithmeticAssign = 48;
    TypeScriptParser.RightShiftLogicalAssign = 49;
    TypeScriptParser.BitAndAssign = 50;
    TypeScriptParser.BitXorAssign = 51;
    TypeScriptParser.BitOrAssign = 52;
    TypeScriptParser.ARROW = 53;
    TypeScriptParser.NullLiteral = 54;
    TypeScriptParser.BooleanLiteral = 55;
    TypeScriptParser.DecimalLiteral = 56;
    TypeScriptParser.HexIntegerLiteral = 57;
    TypeScriptParser.OctalIntegerLiteral = 58;
    TypeScriptParser.OctalIntegerLiteral2 = 59;
    TypeScriptParser.BinaryIntegerLiteral = 60;
    TypeScriptParser.Break = 61;
    TypeScriptParser.Do = 62;
    TypeScriptParser.Instanceof = 63;
    TypeScriptParser.Typeof = 64;
    TypeScriptParser.Case = 65;
    TypeScriptParser.Else = 66;
    TypeScriptParser.New = 67;
    TypeScriptParser.Var = 68;
    TypeScriptParser.Catch = 69;
    TypeScriptParser.Finally = 70;
    TypeScriptParser.Return = 71;
    TypeScriptParser.Void = 72;
    TypeScriptParser.Continue = 73;
    TypeScriptParser.For = 74;
    TypeScriptParser.Switch = 75;
    TypeScriptParser.While = 76;
    TypeScriptParser.Debugger = 77;
    TypeScriptParser.Function = 78;
    TypeScriptParser.This = 79;
    TypeScriptParser.With = 80;
    TypeScriptParser.Default = 81;
    TypeScriptParser.If = 82;
    TypeScriptParser.Throw = 83;
    TypeScriptParser.Delete = 84;
    TypeScriptParser.In = 85;
    TypeScriptParser.Try = 86;
    TypeScriptParser.As = 87;
    TypeScriptParser.From = 88;
    TypeScriptParser.ReadOnly = 89;
    TypeScriptParser.Async = 90;
    TypeScriptParser.Class = 91;
    TypeScriptParser.Enum = 92;
    TypeScriptParser.Extends = 93;
    TypeScriptParser.Super = 94;
    TypeScriptParser.Const = 95;
    TypeScriptParser.Export = 96;
    TypeScriptParser.Import = 97;
    TypeScriptParser.Implements = 98;
    TypeScriptParser.Let = 99;
    TypeScriptParser.Private = 100;
    TypeScriptParser.Public = 101;
    TypeScriptParser.Interface = 102;
    TypeScriptParser.Package = 103;
    TypeScriptParser.Protected = 104;
    TypeScriptParser.Static = 105;
    TypeScriptParser.Yield = 106;
    TypeScriptParser.Any = 107;
    TypeScriptParser.Number = 108;
    TypeScriptParser.Boolean = 109;
    TypeScriptParser.String = 110;
    TypeScriptParser.Symbol = 111;
    TypeScriptParser.Type = 112;
    TypeScriptParser.Get = 113;
    TypeScriptParser.Set = 114;
    TypeScriptParser.Constructor = 115;
    TypeScriptParser.Namespace = 116;
    TypeScriptParser.Require = 117;
    TypeScriptParser.Module = 118;
    TypeScriptParser.Declare = 119;
    TypeScriptParser.Abstract = 120;
    TypeScriptParser.Is = 121;
    TypeScriptParser.At = 122;
    TypeScriptParser.Identifier = 123;
    TypeScriptParser.StringLiteral = 124;
    TypeScriptParser.TemplateStringLiteral = 125;
    TypeScriptParser.WhiteSpaces = 126;
    TypeScriptParser.LineTerminator = 127;
    TypeScriptParser.HtmlComment = 128;
    TypeScriptParser.CDataComment = 129;
    TypeScriptParser.UnexpectedCharacter = 130;
    TypeScriptParser.RULE_initializer = 0;
    TypeScriptParser.RULE_bindingPattern = 1;
    TypeScriptParser.RULE_typeParameters = 2;
    TypeScriptParser.RULE_typeParameterList = 3;
    TypeScriptParser.RULE_typeParameter = 4;
    TypeScriptParser.RULE_constraint = 5;
    TypeScriptParser.RULE_typeArguments = 6;
    TypeScriptParser.RULE_typeArgumentList = 7;
    TypeScriptParser.RULE_typeArgument = 8;
    TypeScriptParser.RULE_type_ = 9;
    TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType = 10;
    TypeScriptParser.RULE_primaryType = 11;
    TypeScriptParser.RULE_predefinedType = 12;
    TypeScriptParser.RULE_typeReference = 13;
    TypeScriptParser.RULE_typeGeneric = 14;
    TypeScriptParser.RULE_typeIncludeGeneric = 15;
    TypeScriptParser.RULE_typeName = 16;
    TypeScriptParser.RULE_objectType = 17;
    TypeScriptParser.RULE_typeBody = 18;
    TypeScriptParser.RULE_typeMemberList = 19;
    TypeScriptParser.RULE_typeMember = 20;
    TypeScriptParser.RULE_arrayType = 21;
    TypeScriptParser.RULE_tupleType = 22;
    TypeScriptParser.RULE_tupleElementTypes = 23;
    TypeScriptParser.RULE_functionType = 24;
    TypeScriptParser.RULE_constructorType = 25;
    TypeScriptParser.RULE_typeQuery = 26;
    TypeScriptParser.RULE_typeQueryExpression = 27;
    TypeScriptParser.RULE_propertySignatur = 28;
    TypeScriptParser.RULE_typeAnnotation = 29;
    TypeScriptParser.RULE_callSignature = 30;
    TypeScriptParser.RULE_parameterList = 31;
    TypeScriptParser.RULE_requiredParameterList = 32;
    TypeScriptParser.RULE_requiredParameter = 33;
    TypeScriptParser.RULE_accessibilityModifier = 34;
    TypeScriptParser.RULE_identifierOrPattern = 35;
    TypeScriptParser.RULE_optionalParameterList = 36;
    TypeScriptParser.RULE_optionalParameter = 37;
    TypeScriptParser.RULE_restParameter = 38;
    TypeScriptParser.RULE_constructSignature = 39;
    TypeScriptParser.RULE_indexSignature = 40;
    TypeScriptParser.RULE_methodSignature = 41;
    TypeScriptParser.RULE_typeAliasDeclaration = 42;
    TypeScriptParser.RULE_constructorDeclaration = 43;
    TypeScriptParser.RULE_interfaceDeclaration = 44;
    TypeScriptParser.RULE_interfaceExtendsClause = 45;
    TypeScriptParser.RULE_classOrInterfaceTypeList = 46;
    TypeScriptParser.RULE_enumDeclaration = 47;
    TypeScriptParser.RULE_enumBody = 48;
    TypeScriptParser.RULE_enumMemberList = 49;
    TypeScriptParser.RULE_enumMember = 50;
    TypeScriptParser.RULE_namespaceDeclaration = 51;
    TypeScriptParser.RULE_namespaceName = 52;
    TypeScriptParser.RULE_importAliasDeclaration = 53;
    TypeScriptParser.RULE_decoratorList = 54;
    TypeScriptParser.RULE_decorator = 55;
    TypeScriptParser.RULE_decoratorMemberExpression = 56;
    TypeScriptParser.RULE_decoratorCallExpression = 57;
    TypeScriptParser.RULE_program = 58;
    TypeScriptParser.RULE_sourceElement = 59;
    TypeScriptParser.RULE_statement = 60;
    TypeScriptParser.RULE_block = 61;
    TypeScriptParser.RULE_statementList = 62;
    TypeScriptParser.RULE_abstractDeclaration = 63;
    TypeScriptParser.RULE_importStatement = 64;
    TypeScriptParser.RULE_fromBlock = 65;
    TypeScriptParser.RULE_multipleImportStatement = 66;
    TypeScriptParser.RULE_exportStatement = 67;
    TypeScriptParser.RULE_variableStatement = 68;
    TypeScriptParser.RULE_variableDeclarationList = 69;
    TypeScriptParser.RULE_variableDeclaration = 70;
    TypeScriptParser.RULE_emptyStatement = 71;
    TypeScriptParser.RULE_expressionStatement = 72;
    TypeScriptParser.RULE_ifStatement = 73;
    TypeScriptParser.RULE_iterationStatement = 74;
    TypeScriptParser.RULE_varModifier = 75;
    TypeScriptParser.RULE_continueStatement = 76;
    TypeScriptParser.RULE_breakStatement = 77;
    TypeScriptParser.RULE_returnStatement = 78;
    TypeScriptParser.RULE_yieldStatement = 79;
    TypeScriptParser.RULE_withStatement = 80;
    TypeScriptParser.RULE_switchStatement = 81;
    TypeScriptParser.RULE_caseBlock = 82;
    TypeScriptParser.RULE_caseClauses = 83;
    TypeScriptParser.RULE_caseClause = 84;
    TypeScriptParser.RULE_defaultClause = 85;
    TypeScriptParser.RULE_labelledStatement = 86;
    TypeScriptParser.RULE_throwStatement = 87;
    TypeScriptParser.RULE_tryStatement = 88;
    TypeScriptParser.RULE_catchProduction = 89;
    TypeScriptParser.RULE_finallyProduction = 90;
    TypeScriptParser.RULE_debuggerStatement = 91;
    TypeScriptParser.RULE_functionDeclaration = 92;
    TypeScriptParser.RULE_classDeclaration = 93;
    TypeScriptParser.RULE_classHeritage = 94;
    TypeScriptParser.RULE_classTail = 95;
    TypeScriptParser.RULE_classExtendsClause = 96;
    TypeScriptParser.RULE_implementsClause = 97;
    TypeScriptParser.RULE_classElement = 98;
    TypeScriptParser.RULE_propertyMemberDeclaration = 99;
    TypeScriptParser.RULE_propertyMemberBase = 100;
    TypeScriptParser.RULE_indexMemberDeclaration = 101;
    TypeScriptParser.RULE_generatorMethod = 102;
    TypeScriptParser.RULE_generatorFunctionDeclaration = 103;
    TypeScriptParser.RULE_generatorBlock = 104;
    TypeScriptParser.RULE_generatorDefinition = 105;
    TypeScriptParser.RULE_iteratorBlock = 106;
    TypeScriptParser.RULE_iteratorDefinition = 107;
    TypeScriptParser.RULE_formalParameterList = 108;
    TypeScriptParser.RULE_formalParameterArg = 109;
    TypeScriptParser.RULE_lastFormalParameterArg = 110;
    TypeScriptParser.RULE_functionBody = 111;
    TypeScriptParser.RULE_sourceElements = 112;
    TypeScriptParser.RULE_arrayLiteral = 113;
    TypeScriptParser.RULE_elementList = 114;
    TypeScriptParser.RULE_lastElement = 115;
    TypeScriptParser.RULE_objectLiteral = 116;
    TypeScriptParser.RULE_propertyAssignment = 117;
    TypeScriptParser.RULE_getAccessor = 118;
    TypeScriptParser.RULE_setAccessor = 119;
    TypeScriptParser.RULE_propertyName = 120;
    TypeScriptParser.RULE_arguments = 121;
    TypeScriptParser.RULE_lastArgument = 122;
    TypeScriptParser.RULE_expressionSequence = 123;
    TypeScriptParser.RULE_functionExpressionDeclaration = 124;
    TypeScriptParser.RULE_singleExpression = 125;
    TypeScriptParser.RULE_arrowFunctionDeclaration = 126;
    TypeScriptParser.RULE_arrowFunctionParameters = 127;
    TypeScriptParser.RULE_arrowFunctionBody = 128;
    TypeScriptParser.RULE_assignmentOperator = 129;
    TypeScriptParser.RULE_literal = 130;
    TypeScriptParser.RULE_numericLiteral = 131;
    TypeScriptParser.RULE_identifierName = 132;
    TypeScriptParser.RULE_reservedWord = 133;
    TypeScriptParser.RULE_keyword = 134;
    TypeScriptParser.RULE_getter = 135;
    TypeScriptParser.RULE_setter = 136;
    TypeScriptParser.RULE_eos = 137;
    // tslint:disable:no-trailing-whitespace
    TypeScriptParser.ruleNames = [
        "initializer", "bindingPattern", "typeParameters", "typeParameterList",
        "typeParameter", "constraint", "typeArguments", "typeArgumentList", "typeArgument",
        "type_", "unionOrIntersectionOrPrimaryType", "primaryType", "predefinedType",
        "typeReference", "typeGeneric", "typeIncludeGeneric", "typeName", "objectType",
        "typeBody", "typeMemberList", "typeMember", "arrayType", "tupleType",
        "tupleElementTypes", "functionType", "constructorType", "typeQuery", "typeQueryExpression",
        "propertySignatur", "typeAnnotation", "callSignature", "parameterList",
        "requiredParameterList", "requiredParameter", "accessibilityModifier",
        "identifierOrPattern", "optionalParameterList", "optionalParameter", "restParameter",
        "constructSignature", "indexSignature", "methodSignature", "typeAliasDeclaration",
        "constructorDeclaration", "interfaceDeclaration", "interfaceExtendsClause",
        "classOrInterfaceTypeList", "enumDeclaration", "enumBody", "enumMemberList",
        "enumMember", "namespaceDeclaration", "namespaceName", "importAliasDeclaration",
        "decoratorList", "decorator", "decoratorMemberExpression", "decoratorCallExpression",
        "program", "sourceElement", "statement", "block", "statementList", "abstractDeclaration",
        "importStatement", "fromBlock", "multipleImportStatement", "exportStatement",
        "variableStatement", "variableDeclarationList", "variableDeclaration",
        "emptyStatement", "expressionStatement", "ifStatement", "iterationStatement",
        "varModifier", "continueStatement", "breakStatement", "returnStatement",
        "yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses",
        "caseClause", "defaultClause", "labelledStatement", "throwStatement",
        "tryStatement", "catchProduction", "finallyProduction", "debuggerStatement",
        "functionDeclaration", "classDeclaration", "classHeritage", "classTail",
        "classExtendsClause", "implementsClause", "classElement", "propertyMemberDeclaration",
        "propertyMemberBase", "indexMemberDeclaration", "generatorMethod", "generatorFunctionDeclaration",
        "generatorBlock", "generatorDefinition", "iteratorBlock", "iteratorDefinition",
        "formalParameterList", "formalParameterArg", "lastFormalParameterArg",
        "functionBody", "sourceElements", "arrayLiteral", "elementList", "lastElement",
        "objectLiteral", "propertyAssignment", "getAccessor", "setAccessor", "propertyName",
        "arguments", "lastArgument", "expressionSequence", "functionExpressionDeclaration",
        "singleExpression", "arrowFunctionDeclaration", "arrowFunctionParameters",
        "arrowFunctionBody", "assignmentOperator", "literal", "numericLiteral",
        "identifierName", "reservedWord", "keyword", "getter", "setter", "eos",
    ];
    TypeScriptParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, "'['", "']'", "'('", "')'",
        "'{'", "'}'", "';'", "','", "'='", "'?'", "':'", "'...'", "'.'", "'++'",
        "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'>>'", "'<<'",
        "'>>>'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='",
        "'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='",
        "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'=>'", "'null'",
        undefined, undefined, undefined, undefined, undefined, undefined, "'break'",
        "'do'", "'instanceof'", "'typeof'", "'case'", "'else'", "'new'", "'var'",
        "'catch'", "'finally'", "'return'", "'void'", "'continue'", "'for'", "'switch'",
        "'while'", "'debugger'", "'function'", "'this'", "'with'", "'default'",
        "'if'", "'throw'", "'delete'", "'in'", "'try'", "'as'", "'from'", "'readonly'",
        "'async'", "'class'", "'enum'", "'extends'", "'super'", "'const'", "'export'",
        "'import'", "'implements'", "'let'", "'private'", "'public'", "'interface'",
        "'package'", "'protected'", "'static'", "'yield'", "'any'", "'number'",
        "'boolean'", "'string'", "'symbol'", "'type'", "'get '", "'set '", "'constructor'",
        "'namespace'", "'require'", "'module'", "'declare'", "'abstract'", "'is'",
        "'@'",
    ];
    TypeScriptParser._SYMBOLIC_NAMES = [
        undefined, "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral",
        "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace",
        "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", "Colon",
        "Ellipsis", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot",
        "Not", "Multiply", "Divide", "Modulus", "RightShiftArithmetic", "LeftShiftArithmetic",
        "RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals",
        "Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd",
        "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign",
        "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign",
        "RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign",
        "ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral",
        "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral",
        "Break", "Do", "Instanceof", "Typeof", "Case", "Else", "New", "Var", "Catch",
        "Finally", "Return", "Void", "Continue", "For", "Switch", "While", "Debugger",
        "Function", "This", "With", "Default", "If", "Throw", "Delete", "In",
        "Try", "As", "From", "ReadOnly", "Async", "Class", "Enum", "Extends",
        "Super", "Const", "Export", "Import", "Implements", "Let", "Private",
        "Public", "Interface", "Package", "Protected", "Static", "Yield", "Any",
        "Number", "Boolean", "String", "Symbol", "Type", "Get", "Set", "Constructor",
        "Namespace", "Require", "Module", "Declare", "Abstract", "Is", "At", "Identifier",
        "StringLiteral", "TemplateStringLiteral", "WhiteSpaces", "LineTerminator",
        "HtmlComment", "CDataComment", "UnexpectedCharacter",
    ];
    TypeScriptParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TypeScriptParser._LITERAL_NAMES, TypeScriptParser._SYMBOLIC_NAMES, []);
    TypeScriptParser._serializedATNSegments = 3;
    TypeScriptParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x84\u0659\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
        "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
        "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
        "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
        "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
        "\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u011C\n\x03\x03\x04\x03" +
        "\x04\x05\x04\u0120\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05" +
        "\u0127\n\x05\f\x05\x0E\x05\u012A\v\x05\x03\x06\x03\x06\x05\x06\u012E\n" +
        "\x06\x03\x06\x05\x06\u0131\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05" +
        "\b\u0138\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\u013F\n\t\f\t\x0E\t\u0142" +
        "\v\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u014B\n\v\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0156\n\f\f\f\x0E\f" +
        "\u0159\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
        "\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u016D\n\r\x03\r" +
        "\x03\r\x03\r\x03\r\x07\r\u0173\n\r\f\r\x0E\r\u0176\v\r\x03\x0E\x03\x0E" +
        "\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u017D\n\x0F\x03\x10\x03\x10\x03\x10\x03" +
        "\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x05\x11\u018C\n\x11\x03\x12\x03\x12\x05\x12\u0190\n\x12\x03\x13\x03" +
        "\x13\x05\x13\u0194\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u019A" +
        "\n\x14\x03\x15\x03\x15\x03\x15\x07\x15\u019F\n\x15\f\x15\x0E\x15\u01A2" +
        "\v\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
        "\u01AB\n\x16\x05\x16\u01AD\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19\u01BB" +
        "\n\x19\f\x19\x0E\x19\u01BE\v\x19\x03\x1A\x05\x1A\u01C1\n\x1A\x03\x1A\x03" +
        "\x1A\x05\x1A\u01C5\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
        "\x05\x1B\u01CD\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01D1\n\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x06\x1D\u01DE\n\x1D\r\x1D\x0E\x1D\u01DF\x03\x1D\x03\x1D\x05\x1D\u01E4" +
        "\n\x1D\x03\x1E\x05\x1E\u01E7\n\x1E\x03\x1E\x03\x1E\x05\x1E\u01EB\n\x1E" +
        "\x03\x1E\x05\x1E\u01EE\n\x1E\x03\x1E\x03\x1E\x05\x1E\u01F2\n\x1E\x03\x1F" +
        "\x03\x1F\x03\x1F\x03 \x05 \u01F8\n \x03 \x03 \x05 \u01FC\n \x03 \x03 " +
        "\x05 \u0200\n \x03!\x03!\x03!\x03!\x07!\u0206\n!\f!\x0E!\u0209\v!\x03" +
        "!\x03!\x03!\x05!\u020E\n!\x03!\x03!\x03!\x03!\x03!\x05!\u0215\n!\x03!" +
        "\x05!\u0218\n!\x05!\u021A\n!\x05!\u021C\n!\x03\"\x03\"\x03\"\x07\"\u0221" +
        "\n\"\f\"\x0E\"\u0224\v\"\x03#\x05#\u0227\n#\x03#\x05#\u022A\n#\x03#\x03" +
        "#\x05#\u022E\n#\x03$\x03$\x03%\x03%\x05%\u0234\n%\x03&\x03&\x03&\x07&" +
        "\u0239\n&\f&\x0E&\u023C\v&\x03\'\x05\'\u023F\n\'\x03\'\x05\'\u0242\n\'" +
        "\x03\'\x03\'\x03\'\x05\'\u0247\n\'\x03\'\x05\'\u024A\n\'\x03\'\x05\'\u024D" +
        "\n\'\x03(\x03(\x03(\x03)\x03)\x05)\u0254\n)\x03)\x03)\x05)\u0258\n)\x03" +
        ")\x03)\x05)\u025C\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x05" +
        "+\u0267\n+\x03+\x03+\x03,\x03,\x03,\x05,\u026E\n,\x03,\x03,\x03,\x03," +
        "\x03-\x05-\u0275\n-\x03-\x03-\x03-\x05-\u027A\n-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x05-\u0282\n-\x03.\x05.\u0285\n.\x03.\x03.\x03.\x05.\u028A\n.\x03" +
        ".\x05.\u028D\n.\x03.\x03.\x05.\u0291\n.\x03/\x03/\x03/\x030\x030\x030" +
        "\x070\u0299\n0\f0\x0E0\u029C\v0\x031\x051\u029F\n1\x031\x031\x031\x03" +
        "1\x051\u02A5\n1\x031\x031\x032\x032\x052\u02AB\n2\x033\x033\x033\x073" +
        "\u02B0\n3\f3\x0E3\u02B3\v3\x034\x034\x034\x054\u02B8\n4\x035\x035\x03" +
        "5\x035\x055\u02BE\n5\x035\x035\x036\x036\x066\u02C4\n6\r6\x0E6\u02C5\x03" +
        "6\x076\u02C9\n6\f6\x0E6\u02CC\v6\x037\x037\x037\x037\x037\x038\x068\u02D4" +
        "\n8\r8\x0E8\u02D5\x039\x039\x039\x059\u02DB\n9\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x05:\u02E3\n:\x03:\x03:\x03:\x07:\u02E8\n:\f:\x0E:\u02EB\v:\x03" +
        ";\x03;\x03;\x03<\x05<\u02F1\n<\x03<\x03<\x03=\x05=\u02F6\n=\x03=\x03=" +
        "\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
        ">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
        ">\x03>\x05>\u0317\n>\x03?\x03?\x05?\u031B\n?\x03?\x03?\x03@\x06@\u0320" +
        "\n@\r@\x0E@\u0321\x03A\x03A\x03A\x03A\x05A\u0328\nA\x03A\x03A\x03B\x03" +
        "B\x03B\x05B\u032F\nB\x03C\x03C\x05C\u0333\nC\x03C\x03C\x05C\u0337\nC\x03" +
        "C\x03C\x03C\x03C\x03D\x03D\x03D\x05D\u0340\nD\x03D\x03D\x03D\x03D\x07" +
        "D\u0346\nD\fD\x0ED\u0349\vD\x03D\x03D\x03E\x03E\x05E\u034F\nE\x03E\x03" +
        "E\x05E\u0353\nE\x03F\x03F\x05F\u0357\nF\x03F\x03F\x05F\u035B\nF\x03F\x05" +
        "F\u035E\nF\x03F\x05F\u0361\nF\x03F\x05F\u0364\nF\x03F\x03F\x05F\u0368" +
        "\nF\x05F\u036A\nF\x03G\x03G\x03G\x07G\u036F\nG\fG\x0EG\u0372\vG\x03H\x03" +
        "H\x03H\x05H\u0377\nH\x03H\x05H\u037A\nH\x03H\x05H\u037D\nH\x03H\x03H\x05" +
        "H\u0381\nH\x03H\x05H\u0384\nH\x03I\x03I\x03J\x03J\x03J\x05J\u038B\nJ\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0394\nK\x03L\x03L\x03L\x03L\x03" +
        "L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u03A7" +
        "\nL\x03L\x03L\x05L\u03AB\nL\x03L\x03L\x05L\u03AF\nL\x03L\x03L\x03L\x03" +
        "L\x03L\x03L\x03L\x03L\x05L\u03B9\nL\x03L\x03L\x05L\u03BD\nL\x03L\x03L" +
        "\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u03C8\nL\x03L\x03L\x03L\x03L" +
        "\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u03D5\nL\x03L\x03L\x03L\x03L" +
        "\x05L\u03DB\nL\x03M\x03M\x03N\x03N\x03N\x05N\u03E2\nN\x03N\x03N\x03O\x03" +
        "O\x03O\x05O\u03E9\nO\x03O\x03O\x03P\x03P\x03P\x05P\u03F0\nP\x03P\x03P" +
        "\x03Q\x03Q\x03Q\x05Q\u03F7\nQ\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R" +
        "\x03S\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x05T\u0409\nT\x03T\x03T\x05T" +
        "\u040D\nT\x05T\u040F\nT\x03T\x03T\x03U\x06U\u0414\nU\rU\x0EU\u0415\x03" +
        "V\x03V\x03V\x03V\x05V\u041C\nV\x03W\x03W\x03W\x05W\u0421\nW\x03X\x03X" +
        "\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x05Z\u0430\nZ" +
        "\x03Z\x05Z\u0433\nZ\x03[\x03[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03" +
        "]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0449\n^\x03" +
        "_\x05_\u044C\n_\x03_\x03_\x03_\x05_\u0451\n_\x03_\x03_\x03_\x03`\x05`" +
        "\u0457\n`\x03`\x05`\u045A\n`\x03a\x03a\x07a\u045E\na\fa\x0Ea\u0461\va" +
        "\x03a\x03a\x03b\x03b\x03b\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x05d\u046F" +
        "\nd\x03e\x03e\x03e\x05e\u0474\ne\x03e\x05e\u0477\ne\x03e\x03e\x03e\x03" +
        "e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0483\ne\x03e\x03e\x03e\x05e\u0488" +
        "\ne\x03e\x05e\u048B\ne\x03f\x05f\u048E\nf\x03f\x05f\u0491\nf\x03f\x05" +
        "f\u0494\nf\x03f\x05f\u0497\nf\x03g\x03g\x03g\x03h\x05h\u049D\nh\x03h\x03" +
        "h\x03h\x05h\u04A2\nh\x03h\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x05i\u04AC" +
        "\ni\x03i\x03i\x05i\u04B0\ni\x03i\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x03" +
        "j\x07j\u04BB\nj\fj\x0Ej\u04BE\vj\x03j\x05j\u04C1\nj\x03j\x03j\x03k\x03" +
        "k\x03k\x03l\x03l\x03l\x03l\x07l\u04CC\nl\fl\x0El\u04CF\vl\x03l\x05l\u04D2" +
        "\nl\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x05m\u04DB\nm\x03m\x03m\x03m\x03" +
        "m\x03m\x03n\x03n\x03n\x07n\u04E5\nn\fn\x0En\u04E8\vn\x03n\x03n\x05n\u04EC" +
        "\nn\x03n\x03n\x03n\x03n\x03n\x05n\u04F3\nn\x05n\u04F5\nn\x03o\x05o\u04F8" +
        "\no\x03o\x03o\x05o\u04FC\no\x03o\x03o\x05o\u0500\no\x03p\x03p\x03p\x03" +
        "q\x05q\u0506\nq\x03r\x06r\u0509\nr\rr\x0Er\u050A\x03s\x03s\x05s\u050F" +
        "\ns\x03s\x03s\x03t\x03t\x06t\u0515\nt\rt\x0Et\u0516\x03t\x07t\u051A\n" +
        "t\ft\x0Et\u051D\vt\x03t\x06t\u0520\nt\rt\x0Et\u0521\x03t\x05t\u0525\n" +
        "t\x03t\x05t\u0528\nt\x03u\x03u\x03u\x05u\u052D\nu\x03v\x03v\x03v\x03v" +
        "\x07v\u0533\nv\fv\x0Ev\u0536\vv\x05v\u0538\nv\x03v\x05v\u053B\nv\x03v" +
        "\x03v\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03" +
        "w\x03w\x03w\x05w\u054E\nw\x03x\x03x\x03x\x03x\x05x\u0554\nx\x03x\x03x" +
        "\x03x\x03x\x03y\x03y\x03y\x03y\x05y\u055E\ny\x03y\x05y\u0561\ny\x03y\x03" +
        "y\x03y\x03y\x03y\x03z\x03z\x03z\x05z\u056B\nz\x03{\x03{\x03{\x03{\x07" +
        "{\u0571\n{\f{\x0E{\u0574\v{\x03{\x03{\x05{\u0578\n{\x03{\x05{\u057B\n" +
        "{\x03{\x03{\x03|\x03|\x03|\x03}\x03}\x03}\x07}\u0585\n}\f}\x0E}\u0588" +
        "\v}\x03~\x03~\x05~\u058C\n~\x03~\x03~\x05~\u0590\n~\x03~\x03~\x05~\u0594" +
        "\n~\x03~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F" +
        "\u059F\n\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u05A5\n\x7F\x03\x7F" +
        "\x05\x7F\u05A8\n\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
        "\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
        "\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
        "\x7F\x05\x7F\u05C3\n\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u05CF\n\x7F\x05\x7F\u05D1\n\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u0616\n\x7F\f\x7F\x0E\x7F\u0619" +
        "\v\x7F\x03\x80\x05\x80\u061C\n\x80\x03\x80\x03\x80\x05\x80\u0620\n\x80" +
        "\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x05\x81\u0628\n\x81\x03" +
        "\x81\x05\x81\u062B\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82" +
        "\u0632\n\x82\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
        "\x84\x05\x84\u063C\n\x84\x03\x85\x03\x85\x03\x86\x03\x86\x05\x86\u0642" +
        "\n\x86\x03\x87\x03\x87\x03\x87\x05\x87\u0647\n\x87\x03\x88\x03\x88\x03" +
        "\x89\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03" +
        "\x8B\x03\x8B\x03\x8B\x05\x8B\u0657\n\x8B\x03\x8B\x02\x02\x06\x16\x18r" +
        "\xFC\x8C\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
        "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
        "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
        "\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
        "\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
        "\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
        "\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
        "\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\x02\x10" +
        "\x04\x02JJmq\x03\x02\f\r\x04\x02fgjj\x04\x02nnpp\x05\x02FFaaee\x04\x02" +
        "\x0E\x0E\x10\x10\x03\x02\x19\x1B\x03\x02\x15\x16\x03\x02\x1C\x1E\x03\x02" +
        "\x1F\"\x03\x02#&\x03\x02,6\x03\x02:>\x04\x02?XZl\x02\u0700\x02\u0116\x03" +
        "\x02\x02\x02\x04\u011B\x03\x02\x02\x02\x06\u011D\x03\x02\x02\x02\b\u0123" +
        "\x03\x02\x02\x02\n\u0130\x03\x02\x02\x02\f\u0132\x03\x02\x02\x02\x0E\u0135" +
        "\x03\x02\x02\x02\x10\u013B\x03\x02\x02\x02\x12\u0143\x03\x02\x02\x02\x14" +
        "\u014A\x03\x02\x02\x02\x16\u014C\x03\x02\x02\x02\x18\u016C\x03\x02\x02" +
        "\x02\x1A\u0177\x03\x02\x02\x02\x1C\u0179\x03\x02\x02\x02\x1E\u017E\x03" +
        "\x02\x02\x02 \u0182\x03\x02\x02\x02\"\u018F\x03\x02\x02\x02$\u0191\x03" +
        "\x02\x02\x02&\u0197\x03\x02\x02\x02(\u019B\x03\x02\x02\x02*\u01AC\x03" +
        "\x02\x02\x02,\u01AE\x03\x02\x02\x02.\u01B3\x03\x02\x02\x020\u01B7\x03" +
        "\x02\x02\x022\u01C0\x03\x02\x02\x024\u01CA\x03\x02\x02\x026\u01D6\x03" +
        "\x02\x02\x028\u01E3\x03\x02\x02\x02:\u01E6\x03\x02\x02\x02<\u01F3\x03" +
        "\x02\x02\x02>\u01F7\x03\x02\x02\x02@\u021B\x03\x02\x02\x02B\u021D\x03" +
        "\x02\x02\x02D\u0226\x03\x02\x02\x02F\u022F\x03\x02\x02\x02H\u0233\x03" +
        "\x02\x02\x02J\u0235\x03\x02\x02\x02L\u023E\x03\x02\x02\x02N\u024E\x03" +
        "\x02\x02\x02P\u0251\x03\x02\x02\x02R\u025D\x03\x02\x02\x02T\u0264\x03" +
        "\x02\x02\x02V\u026A\x03\x02\x02\x02X\u0274\x03\x02\x02\x02Z\u0284\x03" +
        "\x02\x02\x02\\\u0292\x03\x02\x02\x02^\u0295\x03\x02\x02\x02`\u029E\x03" +
        "\x02\x02\x02b\u02A8\x03\x02\x02\x02d\u02AC\x03\x02\x02\x02f\u02B4\x03" +
        "\x02\x02\x02h\u02B9\x03\x02\x02\x02j\u02C1\x03\x02\x02\x02l\u02CD\x03" +
        "\x02\x02\x02n\u02D3\x03\x02\x02\x02p\u02D7\x03\x02\x02\x02r\u02E2\x03" +
        "\x02\x02\x02t\u02EC\x03\x02\x02\x02v\u02F0\x03\x02\x02\x02x\u02F5\x03" +
        "\x02\x02\x02z\u0316\x03\x02\x02\x02|\u0318\x03\x02\x02\x02~\u031F\x03" +
        "\x02\x02\x02\x80\u0323\x03\x02\x02\x02\x82\u032B\x03\x02\x02\x02\x84\u0332" +
        "\x03\x02\x02\x02\x86\u033F\x03\x02\x02\x02\x88\u034C\x03\x02\x02\x02\x8A" +
        "\u0369\x03\x02\x02\x02\x8C\u036B\x03\x02\x02\x02\x8E\u0376\x03\x02\x02" +
        "\x02\x90\u0385\x03\x02\x02\x02\x92\u0387\x03\x02\x02\x02\x94\u038C\x03" +
        "\x02\x02\x02\x96\u03DA\x03\x02\x02\x02\x98\u03DC\x03\x02\x02\x02\x9A\u03DE" +
        "\x03\x02\x02\x02\x9C\u03E5\x03\x02\x02\x02\x9E\u03EC\x03\x02\x02\x02\xA0" +
        "\u03F3\x03\x02\x02\x02\xA2\u03FA\x03\x02\x02\x02\xA4\u0400\x03\x02\x02" +
        "\x02\xA6\u0406\x03\x02\x02\x02\xA8\u0413\x03\x02\x02\x02\xAA\u0417\x03" +
        "\x02\x02\x02\xAC\u041D\x03\x02\x02\x02\xAE\u0422\x03\x02\x02\x02\xB0\u0426" +
        "\x03\x02\x02\x02\xB2\u042B\x03\x02\x02\x02\xB4\u0434\x03\x02\x02\x02\xB6" +
        "\u043A\x03\x02\x02\x02\xB8\u043D\x03\x02\x02\x02\xBA\u0440\x03\x02\x02" +
        "\x02\xBC\u044B\x03\x02\x02\x02\xBE\u0456\x03\x02\x02\x02\xC0\u045B\x03" +
        "\x02\x02\x02\xC2\u0464\x03\x02\x02\x02\xC4\u0467\x03\x02\x02\x02\xC6\u046E" +
        "\x03\x02\x02\x02\xC8\u048A\x03\x02\x02\x02\xCA\u048D\x03\x02\x02\x02\xCC" +
        "\u0498\x03\x02\x02\x02\xCE\u049C\x03\x02\x02\x02\xD0\u04A8\x03\x02\x02" +
        "\x02\xD2\u04B6\x03\x02\x02\x02\xD4\u04C4\x03\x02\x02\x02\xD6\u04C7\x03" +
        "\x02\x02\x02\xD8\u04D5\x03\x02\x02\x02\xDA\u04F4\x03\x02\x02\x02\xDC\u04F7" +
        "\x03\x02\x02\x02\xDE\u0501\x03\x02\x02\x02\xE0\u0505\x03\x02\x02\x02\xE2" +
        "\u0508\x03\x02\x02\x02\xE4\u050C\x03\x02\x02\x02\xE6\u0527\x03\x02\x02" +
        "\x02\xE8\u0529\x03\x02\x02\x02\xEA\u052E\x03\x02\x02\x02\xEC\u054D\x03" +
        "\x02\x02\x02\xEE\u054F\x03\x02\x02\x02\xF0\u0559\x03\x02\x02\x02\xF2\u056A" +
        "\x03\x02\x02\x02\xF4\u056C\x03\x02\x02\x02\xF6\u057E\x03\x02\x02\x02\xF8" +
        "\u0581\x03\x02\x02\x02\xFA\u0589\x03\x02\x02\x02\xFC\u05D0\x03\x02\x02" +
        "\x02\xFE\u061B\x03\x02\x02\x02\u0100\u062A\x03\x02\x02\x02\u0102\u0631" +
        "\x03\x02\x02\x02\u0104\u0633\x03\x02\x02\x02\u0106\u063B\x03\x02\x02\x02" +
        "\u0108\u063D\x03\x02\x02\x02\u010A\u0641\x03\x02\x02\x02\u010C\u0646\x03" +
        "\x02\x02\x02\u010E\u0648\x03\x02\x02\x02\u0110\u064A\x03\x02\x02\x02\u0112" +
        "\u064E\x03\x02\x02\x02\u0114\u0656\x03\x02\x02\x02\u0116\u0117\x07\x0E" +
        "\x02\x02\u0117\u0118\x05\xFC\x7F\x02\u0118\x03\x03\x02\x02\x02\u0119\u011C" +
        "\x05\xE4s\x02\u011A\u011C\x05\xEAv\x02\u011B\u0119\x03\x02\x02\x02\u011B" +
        "\u011A\x03\x02\x02\x02\u011C\x05\x03\x02\x02\x02\u011D\u011F\x07\x1F\x02" +
        "\x02\u011E\u0120\x05\b\x05\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120" +
        "\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x07 \x02\x02" +
        "\u0122\x07\x03\x02\x02\x02\u0123\u0128\x05\n\x06\x02\u0124\u0125\x07\r" +
        "\x02\x02\u0125\u0127\x05\n\x06\x02\u0126\u0124\x03\x02\x02\x02\u0127\u012A" +
        "\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02" +
        "\u0129\t\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012D\x07}" +
        "\x02\x02\u012C\u012E\x05\f\x07\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E" +
        "\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u0131\x05\x06\x04\x02" +
        "\u0130\u012B\x03\x02\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131\v\x03\x02" +
        "\x02\x02\u0132\u0133\x07_\x02\x02\u0133\u0134\x05\x14\v\x02\u0134\r\x03" +
        "\x02\x02\x02\u0135\u0137\x07\x1F\x02\x02\u0136\u0138\x05\x10\t\x02\u0137" +
        "\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02" +
        "\x02\x02\u0139\u013A\x07 \x02\x02\u013A\x0F\x03\x02\x02\x02\u013B\u0140" +
        "\x05\x12\n\x02\u013C\u013D\x07\r\x02\x02\u013D\u013F\x05\x12\n\x02\u013E" +
        "\u013C\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02" +
        "\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\x11\x03\x02\x02\x02\u0142\u0140" +
        "\x03\x02\x02\x02\u0143\u0144\x05\x14\v\x02\u0144\x13\x03\x02\x02\x02\u0145" +
        "\u014B\x05\x16\f";
    TypeScriptParser._serializedATNSegment1 = "\x02\u0146\u014B\x052\x1A\x02\u0147\u014B\x054\x1B\x02\u0148\u014B\x05" +
        "\x1E\x10\x02\u0149\u014B\x07~\x02\x02\u014A\u0145\x03\x02\x02\x02\u014A" +
        "\u0146\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u0148\x03\x02" +
        "\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B\x15\x03\x02\x02\x02\u014C\u014D" +
        "\b\f\x01\x02\u014D\u014E\x05\x18\r\x02\u014E\u0157\x03\x02\x02\x02\u014F" +
        "\u0150\f\x05\x02\x02\u0150\u0151\x07)\x02\x02\u0151\u0156\x05\x16\f\x06" +
        "\u0152\u0153\f\x04\x02\x02\u0153\u0154\x07\'\x02\x02\u0154\u0156\x05\x16" +
        "\f\x05\u0155\u014F\x03\x02\x02\x02\u0155\u0152\x03\x02\x02\x02\u0156\u0159" +
        "\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02" +
        "\u0158\x17\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015B\b\r" +
        "\x01\x02\u015B\u015C\x07\b\x02\x02\u015C\u015D\x05\x14\v\x02\u015D\u015E" +
        "\x07\t\x02\x02\u015E\u016D\x03\x02\x02\x02\u015F\u016D\x05\x1A\x0E\x02" +
        "\u0160\u016D\x05\x1C\x0F\x02\u0161\u016D\x05$\x13\x02\u0162\u0163\x07" +
        "\x06\x02\x02\u0163\u0164\x050\x19\x02\u0164\u0165\x07\x07\x02\x02\u0165" +
        "\u016D\x03\x02\x02\x02\u0166\u016D\x056\x1C\x02\u0167\u016D\x07Q\x02\x02" +
        "\u0168\u0169\x05\x1C\x0F\x02\u0169\u016A\x07{\x02\x02\u016A\u016B\x05" +
        "\x18\r\x03\u016B\u016D\x03\x02\x02\x02\u016C\u015A\x03\x02\x02\x02\u016C" +
        "\u015F\x03\x02\x02\x02\u016C\u0160\x03\x02\x02\x02\u016C\u0161\x03\x02" +
        "\x02\x02\u016C\u0162\x03\x02\x02\x02\u016C\u0166\x03\x02\x02\x02\u016C" +
        "\u0167\x03\x02\x02\x02\u016C\u0168\x03\x02\x02\x02\u016D\u0174\x03\x02" +
        "\x02\x02\u016E\u016F\f\x07\x02\x02\u016F\u0170\x06\r\x05\x02\u0170\u0171" +
        "\x07\x06\x02\x02\u0171\u0173\x07\x07\x02\x02\u0172\u016E\x03\x02\x02\x02" +
        "\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03" +
        "\x02\x02\x02\u0175\x19\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177" +
        "\u0178\t\x02\x02\x02\u0178\x1B\x03\x02\x02\x02\u0179\u017C\x05\"\x12\x02" +
        "\u017A\u017D\x05 \x11\x02\u017B\u017D\x05\x1E\x10\x02\u017C\u017A\x03" +
        "\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
        "\x1D\x03\x02\x02\x02\u017E\u017F\x07\x1F\x02\x02\u017F\u0180\x05\x10\t" +
        "\x02\u0180\u0181\x07 \x02\x02\u0181\x1F\x03\x02\x02\x02\u0182\u0183\x07" +
        "\x1F\x02\x02\u0183\u0184\x05\x10\t\x02\u0184\u0185\x07\x1F\x02\x02\u0185" +
        "\u018B\x05\x10\t\x02\u0186\u0187\x07 \x02\x02\u0187\u0188\x05\x04\x03" +
        "\x02\u0188\u0189\x07 \x02\x02\u0189\u018C\x03\x02\x02\x02\u018A\u018C" +
        "\x07\x1C\x02\x02\u018B\u0186\x03\x02\x02\x02\u018B\u018A\x03\x02\x02\x02" +
        "\u018C!\x03\x02\x02\x02\u018D\u0190\x07}\x02\x02\u018E\u0190\x05j6\x02" +
        "\u018F\u018D\x03\x02\x02\x02\u018F\u018E\x03\x02\x02\x02\u0190#\x03\x02" +
        "\x02\x02\u0191\u0193\x07\n\x02\x02\u0192\u0194\x05&\x14\x02\u0193\u0192" +
        "\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02" +
        "\u0195\u0196\x07\v\x02\x02\u0196%\x03\x02\x02\x02\u0197\u0199\x05(\x15" +
        "\x02\u0198\u019A\t\x03\x02\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A" +
        "\x03\x02\x02\x02\u019A\'\x03\x02\x02\x02\u019B\u01A0\x05*\x16\x02\u019C" +
        "\u019D\t\x03\x02\x02\u019D\u019F\x05*\x16\x02\u019E\u019C\x03\x02\x02" +
        "\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1" +
        "\x03\x02\x02\x02\u01A1)\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3" +
        "\u01AD\x05:\x1E\x02\u01A4\u01AD\x05> \x02\u01A5\u01AD\x05P)\x02\u01A6" +
        "\u01AD\x05R*\x02\u01A7\u01AA\x05T+\x02\u01A8\u01A9\x077\x02\x02\u01A9" +
        "\u01AB\x05\x14\v\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02" +
        "\x02\u01AB\u01AD\x03\x02\x02\x02\u01AC\u01A3\x03\x02\x02\x02\u01AC\u01A4" +
        "\x03\x02\x02\x02\u01AC\u01A5\x03\x02\x02\x02\u01AC\u01A6\x03\x02\x02\x02" +
        "\u01AC\u01A7\x03\x02\x02\x02\u01AD+\x03\x02\x02\x02\u01AE\u01AF\x05\x18" +
        "\r\x02\u01AF\u01B0\x06\x17\x06\x02\u01B0\u01B1\x07\x06\x02\x02\u01B1\u01B2" +
        "\x07\x07\x02\x02\u01B2-\x03\x02\x02\x02\u01B3\u01B4\x07\x06\x02\x02\u01B4" +
        "\u01B5\x050\x19\x02\u01B5\u01B6\x07\x07\x02\x02\u01B6/\x03\x02\x02\x02" +
        "\u01B7\u01BC\x05\x14\v\x02\u01B8\u01B9\x07\r\x02\x02\u01B9\u01BB\x05\x14" +
        "\v\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BA" +
        "\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD1\x03\x02\x02\x02\u01BE" +
        "\u01BC\x03\x02\x02\x02\u01BF\u01C1\x05\x06\x04\x02\u01C0\u01BF\x03\x02" +
        "\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
        "\u01C4\x07\b\x02\x02\u01C3\u01C5\x05@!\x02\u01C4\u01C3\x03\x02\x02\x02" +
        "\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x07" +
        "\t\x02\x02\u01C7\u01C8\x077\x02\x02\u01C8\u01C9\x05\x14\v\x02\u01C93\x03" +
        "\x02\x02\x02\u01CA\u01CC\x07E\x02\x02\u01CB\u01CD\x05\x06\x04\x02\u01CC" +
        "\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
        "\x02\x02\u01CE\u01D0\x07\b\x02\x02\u01CF\u01D1\x05@!\x02\u01D0\u01CF\x03" +
        "\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2" +
        "\u01D3\x07\t\x02\x02\u01D3\u01D4\x077\x02\x02\u01D4\u01D5\x05\x14\v\x02" +
        "\u01D55\x03\x02\x02\x02\u01D6\u01D7\x07B\x02\x02\u01D7\u01D8\x058\x1D" +
        "\x02\u01D87\x03\x02\x02\x02\u01D9\u01E4\x07}\x02\x02\u01DA\u01DB\x05\u010A" +
        "\x86\x02\u01DB\u01DC\x07\x12\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD" +
        "\u01DA\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
        "\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
        "\u01E2\x05\u010A\x86\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01D9\x03\x02" +
        "\x02\x02\u01E3\u01DD\x03\x02\x02\x02\u01E49\x03\x02\x02\x02\u01E5\u01E7" +
        "\x07[\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02" +
        "\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x05\xF2z\x02\u01E9\u01EB\x07" +
        "\x0F\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
        "\u01ED\x03\x02\x02\x02\u01EC\u01EE\x05<\x1F\x02\u01ED\u01EC\x03\x02\x02" +
        "\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01F0" +
        "\x077\x02\x02\u01F0\u01F2\x05\x14\v\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1" +
        "\u01F2\x03\x02\x02\x02\u01F2;\x03\x02\x02\x02\u01F3\u01F4\x07\x10\x02" +
        "\x02\u01F4\u01F5\x05\x14\v\x02\u01F5=\x03\x02\x02\x02\u01F6\u01F8\x05" +
        "\x06\x04\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
        "\u01F9\x03\x02\x02\x02\u01F9\u01FB\x07\b\x02\x02\u01FA\u01FC\x05@!\x02" +
        "\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x03" +
        "\x02\x02\x02\u01FD\u01FF\x07\t\x02\x02\u01FE\u0200\x05<\x1F\x02\u01FF" +
        "\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200?\x03\x02\x02" +
        "\x02\u0201\u021C\x05N(\x02\u0202\u0207\x05\x1A\x0E\x02\u0203\u0204\x07" +
        "\r\x02\x02\u0204\u0206\x05\x1A\x0E\x02\u0205\u0203\x03\x02\x02\x02\u0206" +
        "\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02" +
        "\x02\x02\u0208\u021C\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u020A" +
        "\u020D\x05J&\x02\u020B\u020C\x07\r\x02\x02\u020C\u020E\x05N(\x02\u020D" +
        "\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u021C\x03\x02" +
        "\x02\x02\u020F\u0219\x05B\"\x02\u0210\u0217\x07\r\x02\x02\u0211\u0214" +
        "\x05J&\x02\u0212\u0213\x07\r\x02\x02\u0213\u0215\x05N(\x02\u0214\u0212" +
        "\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02" +
        "\u0216\u0218\x05N(\x02\u0217\u0211\x03\x02\x02\x02\u0217\u0216\x03\x02" +
        "\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0210\x03\x02\x02\x02\u0219" +
        "\u021A\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02\u021B\u0201\x03\x02" +
        "\x02\x02\u021B\u0202\x03\x02\x02\x02\u021B\u020A\x03\x02\x02\x02\u021B" +
        "\u020F\x03\x02\x02\x02\u021CA\x03\x02\x02\x02\u021D\u0222\x05D#\x02\u021E" +
        "\u021F\x07\r\x02\x02\u021F\u0221\x05D#\x02\u0220\u021E\x03\x02\x02\x02" +
        "\u0221\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03" +
        "\x02\x02\x02\u0223C\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0225" +
        "\u0227\x05n8\x02\u0226\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02" +
        "\u0227\u0229\x03\x02\x02\x02\u0228\u022A\x05F$\x02\u0229\u0228\x03\x02" +
        "\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B" +
        "\u022D\x05H%\x02\u022C\u022E\x05<\x1F\x02\u022D\u022C\x03\x02\x02\x02" +
        "\u022D\u022E\x03\x02\x02\x02\u022EE\x03\x02\x02\x02\u022F\u0230\t\x04" +
        "\x02\x02\u0230G\x03\x02\x02\x02\u0231\u0234\x05\u010A\x86\x02\u0232\u0234" +
        "\x05\x04\x03\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0232\x03\x02\x02\x02" +
        "\u0234I\x03\x02\x02\x02\u0235\u023A\x05L\'\x02\u0236\u0237\x07\r\x02\x02" +
        "\u0237\u0239\x05L\'\x02\u0238\u0236\x03\x02\x02\x02\u0239\u023C\x03\x02" +
        "\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
        "K\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u023F\x05n8\x02\u023E" +
        "\u023D\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0241\x03\x02" +
        "\x02\x02\u0240\u0242\x05F$\x02\u0241\u0240\x03\x02\x02\x02\u0241\u0242" +
        "\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u024C\x05H%\x02\u0244" +
        "\u0246\x07\x0F\x02\x02\u0245\u0247\x05<\x1F\x02\u0246\u0245\x03\x02\x02" +
        "\x02\u0246\u0247\x03\x02\x02\x02\u0247\u024D\x03\x02\x02\x02\u0248\u024A" +
        "\x05<\x1F\x02\u0249\u0248\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02" +
        "\u024A\u024B\x03\x02\x02\x02\u024B\u024D\x05\x02\x02\x02\u024C\u0244\x03" +
        "\x02\x02\x02\u024C\u0249\x03\x02\x02\x02\u024DM\x03\x02\x02\x02\u024E" +
        "\u024F\x07\x11\x02\x02\u024F\u0250\x05\xFC\x7F\x02\u0250O\x03\x02\x02" +
        "\x02\u0251\u0253\x07E\x02\x02\u0252\u0254\x05\x06\x04\x02\u0253\u0252" +
        "\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02" +
        "\u0255\u0257\x07\b\x02\x02\u0256\u0258\x05@!\x02\u0257\u0256\x03\x02\x02" +
        "\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025B" +
        "\x07\t\x02\x02\u025A\u025C\x05<\x1F\x02\u025B\u025A\x03\x02\x02\x02\u025B" +
        "\u025C\x03\x02\x02\x02\u025CQ\x03\x02\x02\x02\u025D\u025E\x07\x06\x02" +
        "\x02\u025E\u025F\x07}\x02\x02\u025F\u0260\x07\x10\x02\x02\u0260\u0261" +
        "\t\x05\x02\x02\u0261\u0262\x07\x07\x02\x02\u0262\u0263\x05<\x1F\x02\u0263" +
        "S\x03\x02\x02\x02\u0264\u0266\x05\xF2z\x02\u0265\u0267\x07\x0F\x02\x02" +
        "\u0266\u0265\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x03" +
        "\x02\x02\x02\u0268\u0269\x05> \x02\u0269U\x03\x02\x02\x02\u026A\u026B" +
        "\x07r\x02\x02\u026B\u026D\x07}\x02\x02\u026C\u026E\x05\x06\x04\x02\u026D" +
        "\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x03\x02" +
        "\x02\x02\u026F\u0270\x07\x0E\x02\x02\u0270\u0271\x05\x14\v\x02\u0271\u0272" +
        "\x07\f\x02\x02\u0272W\x03\x02\x02\x02\u0273\u0275\x05F$\x02\u0274\u0273" +
        "\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02" +
        "\u0276\u0277\x07u\x02\x02\u0277\u0279\x07\b\x02\x02\u0278\u027A\x05\xDA" +
        "n\x02\u0279\u0278\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B" +
        "\x03\x02\x02\x02\u027B\u0281\x07\t\x02\x02\u027C\u027D\x07\n\x02\x02\u027D" +
        "\u027E\x05\xE0q\x02\u027E\u027F\x07\v\x02\x02\u027F\u0282\x03\x02\x02" +
        "\x02\u0280\u0282\x07\f\x02\x02\u0281\u027C\x03\x02\x02\x02\u0281\u0280" +
        "\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282Y\x03\x02\x02\x02\u0283" +
        "\u0285\x07b\x02\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02\x02" +
        "\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x07h\x02\x02\u0287\u0289" +
        "\x07}\x02\x02\u0288\u028A\x05\x06\x04\x02\u0289\u0288\x03\x02\x02\x02" +
        "\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x03\x02\x02\x02\u028B\u028D\x05" +
        "\\/\x02\u028C\u028B\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
        "\u028E\x03\x02\x02\x02\u028E\u0290\x05$\x13\x02\u028F\u0291\x07\f\x02" +
        "\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291[\x03" +
        "\x02\x02\x02\u0292\u0293\x07_\x02\x02\u0293\u0294\x05^0\x02\u0294]\x03" +
        "\x02\x02\x02\u0295\u029A\x05\x1C\x0F\x02\u0296\u0297\x07\r\x02\x02\u0297" +
        "\u0299\x05\x1C\x0F\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029C\x03\x02" +
        "\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
        "_\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u029F\x07a\x02\x02" +
        "\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x03" +
        "\x02\x02\x02\u02A0\u02A1\x07^\x02\x02\u02A1\u02A2\x07}\x02\x02\u02A2\u02A4" +
        "\x07\n\x02\x02\u02A3\u02A5\x05b2\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4" +
        "\u02A5\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x07\v\x02" +
        "\x02\u02A7a\x03\x02\x02\x02\u02A8\u02AA\x05d3\x02\u02A9\u02AB\x07\r\x02" +
        "\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02ABc\x03" +
        "\x02\x02\x02\u02AC\u02B1\x05f4\x02\u02AD\u02AE\x07\r\x02\x02\u02AE\u02B0" +
        "\x05f4\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1" +
        "\u02AF\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2e\x03\x02\x02" +
        "\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B7\x05\xF2z\x02\u02B5\u02B6" +
        "\x07\x0E\x02\x02\u02B6\u02B8\x05\xFC\x7F\x02\u02B7\u02B5\x03\x02\x02\x02" +
        "\u02B7\u02B8\x03\x02\x02\x02\u02B8g\x03\x02\x02\x02\u02B9\u02BA\x07v\x02" +
        "\x02\u02BA\u02BB\x05j6\x02\u02BB\u02BD\x07\n\x02\x02\u02BC\u02BE\x05~" +
        "@\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF" +
        "\x03\x02\x02\x02\u02BF\u02C0\x07\v\x02\x02\u02C0i\x03\x02\x02\x02\u02C1" +
        "\u02CA\x07}\x02\x02\u02C2\u02C4\x07\x12\x02\x02\u02C3\u02C2\x03\x02\x02" +
        "\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6" +
        "\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C9\x07}\x02\x02" +
        "\u02C8\u02C3\x03\x02\x02\x02\u02C9\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03" +
        "\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CBk\x03\x02\x02\x02\u02CC" +
        "\u02CA\x03\x02\x02\x02\u02CD\u02CE\x07}\x02\x02\u02CE\u02CF\x07\x0E\x02" +
        "\x02\u02CF\u02D0\x05j6\x02\u02D0\u02D1\x07\f\x02\x02\u02D1m\x03\x02\x02" +
        "\x02\u02D2\u02D4\x05p9\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03" +
        "\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6" +
        "o\x03\x02\x02\x02\u02D7\u02DA\x07|\x02\x02\u02D8\u02DB\x05r:\x02\u02D9" +
        "\u02DB\x05t;\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02D9\x03\x02\x02\x02" +
        "\u02DBq\x03\x02\x02\x02\u02DC\u02DD\b:\x01\x02\u02DD\u02E3\x07}\x02\x02" +
        "\u02DE\u02DF\x07\b\x02\x02\u02DF\u02E0\x05\xFC\x7F\x02\u02E0\u02E1\x07" +
        "\t\x02\x02\u02E1\u02E3\x03\x02\x02\x02\u02E2\u02DC\x03\x02\x02\x02\u02E2" +
        "\u02DE\x03\x02\x02\x02\u02E3\u02E9\x03\x02\x02\x02\u02E4\u02E5\f\x04\x02" +
        "\x02\u02E5\u02E6\x07\x12\x02\x02\u02E6\u02E8\x05\u010A\x86\x02\u02E7\u02E4" +
        "\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02" +
        "\u02E9\u02EA\x03\x02\x02\x02\u02EAs\x03\x02\x02\x02\u02EB\u02E9\x03\x02" +
        "\x02\x02\u02EC\u02ED\x05r:\x02\u02ED\u02EE\x05\xF4{\x02\u02EEu\x03\x02" +
        "\x02\x02\u02EF\u02F1\x05\xE2r\x02\u02F0\u02EF\x03\x02\x02\x02\u02F0\u02F1" +
        "\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x07\x02\x02\x03" +
        "\u02F3w\x03\x02\x02\x02\u02F4\u02F6\x07b\x02\x02\u02F5\u02F4\x03\x02\x02" +
        "\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F8" +
        "\x05z>\x02\u02F8y\x03\x02\x02\x02\u02F9\u0317\x05|?\x02\u02FA\u0317\x05" +
        "\x8AF\x02\u02FB\u0317\x05\x82B\x02\u02FC\u0317\x05\x88E\x02\u02FD\u0317" +
        "\x05\x90I\x02\u02FE\u0317\x05\x80A\x02\u02FF\u0317\x05\xBC_\x02\u0300" +
        "\u0317\x05Z.\x02\u0301\u0317\x05h5\x02\u0302\u0317\x05\x94K\x02\u0303" +
        "\u0317\x05\x96L\x02\u0304\u0317\x05\x9AN\x02\u0305\u0317\x05\x9CO\x02" +
        "\u0306\u0317\x05\x9EP\x02\u0307\u0317\x05\xA0Q\x02\u0308\u0317\x05\xA2" +
        "R\x02\u0309\u0317\x05\xAEX\x02\u030A\u0317\x05\xA4S\x02\u030B\u0317\x05" +
        "\xB0Y\x02\u030C\u0317\x05\xB2Z\x02\u030D\u0317\x05\xB8]\x02\u030E\u0317" +
        "\x05\xBA^\x02\u030F\u0317\x05\xFE\x80\x02\u0310\u0317\x05\xD0i\x02\u0311" +
        "\u0317\x05V,\x02\u0312\u0317\x05`1\x02\u0313\u0317\x05\x92J\x02\u0314" +
        "\u0315\x07b\x02\x02\u0315\u0317\x05z>\x02\u0316\u02F9\x03\x02\x02\x02" +
        "\u0316\u02FA\x03\x02\x02\x02\u0316\u02FB\x03\x02\x02\x02\u0316\u02FC\x03" +
        "\x02\x02\x02\u0316\u02FD\x03\x02\x02\x02\u0316\u02FE\x03\x02\x02\x02\u0316" +
        "\u02FF\x03\x02\x02\x02\u0316\u0300\x03\x02\x02\x02\u0316\u0301\x03\x02" +
        "\x02\x02\u0316\u0302\x03\x02\x02\x02\u0316\u0303\x03\x02\x02\x02\u0316" +
        "\u0304\x03\x02\x02\x02\u0316\u0305\x03\x02\x02\x02\u0316\u0306\x03\x02" +
        "\x02\x02\u0316\u0307\x03\x02\x02\x02\u0316\u0308\x03\x02\x02\x02\u0316" +
        "\u0309\x03\x02\x02\x02\u0316\u030A\x03\x02\x02\x02\u0316\u030B\x03\x02" +
        "\x02\x02\u0316\u030C\x03\x02\x02\x02\u0316\u030D\x03\x02\x02\x02\u0316" +
        "\u030E\x03\x02\x02\x02\u0316\u030F\x03\x02\x02\x02\u0316\u0310\x03\x02" +
        "\x02\x02\u0316\u0311\x03\x02\x02\x02\u0316\u0312\x03\x02\x02\x02\u0316" +
        "\u0313\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317{\x03\x02\x02" +
        "\x02\u0318\u031A\x07\n\x02\x02\u0319\u031B\x05~@\x02\u031A\u0319\x03\x02" +
        "\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C" +
        "\u031D\x07\v\x02\x02\u031D}\x03\x02\x02\x02\u031E\u0320\x05z>\x02\u031F" +
        "\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u031F\x03\x02" +
        "\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\x7F\x03\x02\x02\x02\u0323\u0327" +
        "\x07z\x02\x02\u0324\u0325\x07}\x02\x02\u0325\u0328\x05> \x02\u0326\u0328" +
        "\x05\x8AF\x02\u0327\u0324\x03\x02\x02\x02\u0327\u0326\x03\x02\x02\x02" +
        "\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x05\u0114\x8B\x02\u032A\x81\x03" +
        "\x02\x02\x02\u032B\u032E\x07c\x02\x02\u032C\u032F\x05\x84C\x02\u032D\u032F" +
        "\x05l7\x02\u032E\u032C\x03\x02\x02\x02\u032E\u032D\x03\x02\x02\x02\u032F" +
        "\x83\x03\x02\x02\x02\u0330\u0333\x07\x19\x02\x02\u0331\u0333\x05\x86D" +
        "\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0331\x03\x02\x02\x02\u0333\u0336" +
        "\x03\x02\x02\x02\u0334\u0335\x07Y\x02\x02\u0335\u0337\x05\u010A\x86\x02" +
        "\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0338\x03" +
        "\x02\x02\x02\u0338\u0339\x07Z\x02\x02\u0339\u033A\x07~\x02\x02\u033A\u033B" +
        "\x05\u0114\x8B\x02\u033B\x85\x03\x02\x02\x02\u033C\u033D\x05\u010A\x86" +
        "\x02\u033D\u033E\x07\r\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u033C" +
        "\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02" +
        "\u0341\u0342\x07\n\x02\x02\u0342\u0347\x05\u010A\x86\x02\u0343\u0344\x07" +
        "\r\x02\x02\u0344\u0346\x05\u010A\x86\x02\u0345\u0343\x03\x02\x02\x02\u0346" +
        "\u0349\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02" +
        "\x02\x02\u0348\u034A\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A" +
        "\u034B\x07\v\x02\x02\u034B\x87\x03\x02\x02\x02\u034C\u034E\x07b\x02\x02" +
        "\u034D\u034F\x07S\x02\x02\u034E\u034D\x03\x02\x02\x02\u034E\u034F\x03" +
        "\x02\x02\x02\u034F\u0352\x03\x02\x02\x02\u0350\u0353\x05\x84C\x02\u0351" +
        "\u0353\x05z>\x02\u0352\u0350\x03\x02\x02\x02\u0352\u0351\x03\x02\x02\x02" +
        "\u0353\x89\x03\x02\x02\x02\u0354\u0356\x05\x04\x03\x02\u0355\u0357\x05" +
        "<\x1F\x02\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357" +
        "\u0358\x03\x02\x02\x02\u0358\u035A\x05\x02\x02\x02\u0359\u035B\x07\f\x02" +
        "\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u036A" +
        "\x03\x02\x02\x02\u035C\u035E\x05F$\x02\u035D\u035C\x03\x02\x02\x02\u035D" +
        "\u035E\x03\x02\x02\x02\u035E\u0360\x03\x02\x02\x02\u035F\u0361\x05\x98" +
        "M\x02\u0360\u035F\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0363" +
        "\x03\x02\x02\x02\u0362\u0364\x07[\x02\x02\u0363\u0362\x03\x02\x02\x02" +
        "\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0367\x05" +
        "\x8CG\x02\u0366\u0368\x07\f\x02\x02\u0367\u0366\x03\x02\x02\x02\u0367" +
        "\u0368\x03\x02\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369\u0354\x03\x02" +
        "\x02\x02\u0369\u035D\x03\x02\x02\x02\u036A\x8B\x03\x02\x02\x02\u036B\u0370" +
        "\x05\x8EH\x02\u036C\u036D\x07\r\x02\x02\u036D\u036F\x05\x8EH\x02\u036E" +
        "\u036C\x03\x02\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02" +
        "\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\x8D\x03\x02\x02\x02\u0372\u0370" +
        "\x03\x02\x02\x02\u0373\u0377\x07}\x02\x02\u0374\u0377\x05\xE4s\x02\u0375" +
        "\u0377\x05\xEAv\x02\u0376\u0373\x03\x02\x02\x02\u0376\u0374\x03\x02\x02" +
        "\x02\u0376\u0375\x03\x02\x02\x02\u0377\u0379\x03\x02\x02\x02\u0378\u037A" +
        "\x05<\x1F\x02\u0379\u0378\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02" +
        "\u037A\u037C\x03\x02\x02\x02\u037B\u037D\x05\xFC\x7F\x02\u037C\u037B\x03" +
        "\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u0383\x03\x02\x02\x02\u037E" +
        "\u0380\x07\x0E\x02\x02\u037F\u0381\x05\x06\x04\x02\u0380\u037F\x03\x02" +
        "\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382" +
        "\u0384\x05\xFC\x7F\x02\u0383\u037E\x03\x02\x02\x02\u0383\u0384\x03\x02" +
        "\x02\x02\u0384\x8F\x03\x02\x02\x02\u0385\u0386\x07\f\x02\x02\u0386\x91" +
        "\x03\x02\x02\x02\u0387\u0388\x06J\b\x02\u0388\u038A\x05\xF8}\x02\u0389" +
        "\u038B\x07\f\x02\x02\u038A\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02" +
        "\x02\u038B\x93\x03\x02\x02\x02\u038C\u038D\x07T\x02\x02\u038D\u038E\x07" +
        "\b\x02\x02\u038E\u038F\x05\xF8}\x02\u038F\u0390\x07\t\x02\x02\u0390\u0393" +
        "\x05z>\x02\u0391\u0392\x07D\x02\x02\u0392\u0394\x05z>\x02\u0393\u0391" +
        "\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\x95\x03\x02\x02\x02" +
        "\u0395\u0396\x07@\x02\x02\u0396\u0397\x05z>\x02\u0397\u0398\x07N\x02\x02" +
        "\u0398\u0399\x07\b\x02\x02\u0399\u039A\x05\xF8}\x02\u039A\u039B\x07\t" +
        "\x02\x02\u039B\u039C\x05\u0114\x8B\x02\u039C\u03DB\x03\x02\x02\x02\u039D" +
        "\u039E\x07N\x02\x02\u039E\u039F\x07\b\x02\x02\u039F\u03A0\x05\xF8}\x02" +
        "\u03A0\u03A1\x07\t\x02\x02\u03A1\u03A2\x05z>\x02\u03A2\u03DB\x03\x02\x02" +
        "\x02\u03A3\u03A4\x07L\x02\x02\u03A4\u03A6\x07\b\x02\x02\u03A5\u03A7\x05" +
        "\xF8}\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7" +
        "\u03A8\x03\x02\x02\x02\u03A8\u03AA\x07\f\x02\x02\u03A9\u03AB\x05\xF8}" +
        "\x02\u03AA\u03A9\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AC" +
        "\x03\x02\x02\x02\u03AC\u03AE\x07\f\x02\x02\u03AD\u03AF\x05\xF8}\x02\u03AE" +
        "\u03AD\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B0\x03\x02" +
        "\x02\x02\u03B0\u03B1\x07\t\x02\x02\u03B1\u03DB\x05z>\x02\u03B2\u03B3\x07" +
        "L\x02\x02\u03B3\u03B4\x07\b\x02\x02\u03B4\u03B5\x05\x98M\x02\u03B5\u03B6" +
        "\x05\x8CG\x02\u03B6\u03B8\x07\f\x02\x02\u03B7\u03B9\x05\xF8}\x02\u03B8" +
        "\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA\x03\x02" +
        "\x02\x02\u03BA\u03BC\x07\f\x02\x02\u03BB\u03BD\x05\xF8}\x02\u03BC\u03BB" +
        "\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02" +
        "\u03BE\u03BF\x07\t\x02\x02\u03BF\u03C0\x05z>\x02\u03C0\u03DB\x03\x02\x02" +
        "\x02\u03C1\u03C2\x07L\x02\x02\u03C2\u03C3\x07\b\x02\x02\u03C3\u03C7\x05" +
        "\xFC\x7F\x02\u03C4\u03C8\x07W\x02\x02\u03C5\u03C6\x07}\x02\x02\u03C6\u03C8" +
        "\x06L\t\x02\u03C7\u03C4\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C8" +
        "\u03C9\x03\x02\x02\x02\u03C9\u03CA\x05\xF8}\x02\u03CA\u03CB\x07\t\x02" +
        "\x02\u03CB\u03CC\x05z>\x02\u03CC\u03DB\x03\x02\x02\x02\u03CD\u03CE\x07" +
        "L\x02\x02\u03CE\u03CF\x07\b\x02\x02\u03CF\u03D0\x05\x98M\x02\u03D0\u03D4" +
        "\x05\x8EH\x02\u03D1\u03D5\x07W\x02\x02\u03D2\u03D3\x07}\x02\x02\u03D3" +
        "\u03D5\x06L\n\x02\u03D4\u03D1\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02" +
        "\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03D7\x05\xF8}\x02\u03D7\u03D8" +
        "\x07\t\x02\x02\u03D8\u03D9\x05z>\x02\u03D9\u03DB\x03\x02\x02\x02\u03DA" +
        "\u0395\x03\x02\x02\x02\u03DA\u039D\x03\x02\x02\x02\u03DA\u03A3\x03\x02" +
        "\x02\x02\u03DA\u03B2\x03\x02\x02\x02\u03DA\u03C1\x03\x02\x02\x02\u03DA" +
        "\u03CD\x03\x02\x02\x02\u03DB\x97\x03\x02\x02\x02\u03DC\u03DD\t\x06\x02" +
        "\x02\u03DD\x99\x03\x02\x02\x02\u03DE\u03E1\x07K\x02\x02\u03DF\u03E0\x06" +
        "N\v\x02\u03E0\u03E2\x07}\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E1\u03E2" +
        "\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E4\x05\u0114\x8B" +
        "\x02\u03E4\x9B\x03\x02\x02\x02\u03E5\u03E8\x07?\x02\x02\u03E6\u03E7\x06" +
        "O\f\x02\u03E7\u03E9\x07}\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E8\u03E9" +
        "\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EB\x05\u0114\x8B" +
        "\x02\u03EB\x9D\x03\x02\x02\x02\u03EC\u03EF\x07I\x02\x02\u03ED";
    TypeScriptParser._serializedATNSegment2 = "\u03EE\x06P\r\x02\u03EE\u03F0\x05\xF8}\x02\u03EF\u03ED\x03\x02\x02\x02" +
        "\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F2\x05" +
        "\u0114\x8B\x02\u03F2\x9F\x03\x02\x02\x02\u03F3\u03F6\x07l\x02\x02\u03F4" +
        "\u03F5\x06Q\x0E\x02\u03F5\u03F7\x05\xF8}\x02\u03F6\u03F4\x03\x02\x02\x02" +
        "\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03F9\x05" +
        "\u0114\x8B\x02\u03F9\xA1\x03\x02\x02\x02\u03FA\u03FB\x07R\x02\x02\u03FB" +
        "\u03FC\x07\b\x02\x02\u03FC\u03FD\x05\xF8}\x02\u03FD\u03FE\x07\t\x02\x02" +
        "\u03FE\u03FF\x05z>\x02\u03FF\xA3\x03\x02\x02\x02\u0400\u0401\x07M\x02" +
        "\x02\u0401\u0402\x07\b\x02\x02\u0402\u0403\x05\xF8}\x02\u0403\u0404\x07" +
        "\t\x02\x02\u0404\u0405\x05\xA6T\x02\u0405\xA5\x03\x02\x02\x02\u0406\u0408" +
        "\x07\n\x02\x02\u0407\u0409\x05\xA8U\x02\u0408\u0407\x03\x02\x02\x02\u0408" +
        "\u0409\x03\x02\x02\x02\u0409\u040E\x03\x02\x02\x02\u040A\u040C\x05\xAC" +
        "W\x02\u040B\u040D\x05\xA8U\x02\u040C\u040B\x03\x02\x02\x02\u040C\u040D" +
        "\x03\x02\x02\x02\u040D\u040F\x03\x02\x02\x02\u040E\u040A\x03\x02\x02\x02" +
        "\u040E\u040F\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0411\x07" +
        "\v\x02\x02\u0411\xA7\x03\x02\x02\x02\u0412\u0414\x05\xAAV\x02\u0413\u0412" +
        "\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02" +
        "\u0415\u0416\x03\x02\x02\x02\u0416\xA9\x03\x02\x02\x02\u0417\u0418\x07" +
        "C\x02\x02\u0418\u0419\x05\xF8}\x02\u0419\u041B\x07\x10\x02\x02\u041A\u041C" +
        "\x05~@\x02\u041B\u041A\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02\u041C" +
        "\xAB\x03\x02\x02\x02\u041D\u041E\x07S\x02\x02\u041E\u0420\x07\x10\x02" +
        "\x02\u041F\u0421\x05~@\x02\u0420\u041F\x03\x02\x02\x02\u0420\u0421\x03" +
        "\x02\x02\x02\u0421\xAD\x03\x02\x02\x02\u0422\u0423\x07}\x02\x02\u0423" +
        "\u0424\x07\x10\x02\x02\u0424\u0425\x05z>\x02\u0425\xAF\x03\x02\x02\x02" +
        "\u0426\u0427\x07U\x02\x02\u0427\u0428\x06Y\x0F\x02\u0428\u0429\x05\xF8" +
        "}\x02\u0429\u042A\x05\u0114\x8B\x02\u042A\xB1\x03\x02\x02\x02\u042B\u042C" +
        "\x07X\x02\x02\u042C\u0432\x05|?\x02\u042D\u042F\x05\xB4[\x02\u042E\u0430" +
        "\x05\xB6\\\x02\u042F\u042E\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02" +
        "\u0430\u0433\x03\x02\x02\x02\u0431\u0433\x05\xB6\\\x02\u0432\u042D\x03" +
        "\x02\x02\x02\u0432\u0431\x03\x02\x02\x02\u0433\xB3\x03\x02\x02\x02\u0434" +
        "\u0435\x07G\x02\x02\u0435\u0436\x07\b\x02\x02\u0436\u0437\x07}\x02\x02" +
        "\u0437\u0438\x07\t\x02\x02\u0438\u0439\x05|?\x02\u0439\xB5\x03\x02\x02" +
        "\x02\u043A\u043B\x07H\x02\x02\u043B\u043C\x05|?\x02\u043C\xB7\x03\x02" +
        "\x02\x02\u043D\u043E\x07O\x02\x02\u043E\u043F\x05\u0114\x8B\x02\u043F" +
        "\xB9\x03\x02\x02\x02\u0440\u0441\x07P\x02\x02\u0441\u0442\x07}\x02\x02" +
        "\u0442\u0448\x05> \x02\u0443\u0444\x07\n\x02\x02\u0444\u0445\x05\xE0q" +
        "\x02\u0445\u0446\x07\v\x02\x02\u0446\u0449\x03\x02\x02\x02\u0447\u0449" +
        "\x07\f\x02\x02\u0448\u0443\x03\x02\x02\x02\u0448\u0447\x03\x02\x02\x02" +
        "\u0449\xBB\x03\x02\x02\x02\u044A\u044C\x07z\x02\x02\u044B\u044A\x03\x02" +
        "\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D" +
        "\u044E\x07]\x02\x02\u044E\u0450\x07}\x02\x02\u044F\u0451\x05\x06\x04\x02" +
        "\u0450\u044F\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0452\x03" +
        "\x02\x02\x02\u0452\u0453\x05\xBE`\x02\u0453\u0454\x05\xC0a\x02\u0454\xBD" +
        "\x03\x02\x02\x02\u0455\u0457\x05\xC2b\x02\u0456\u0455\x03\x02\x02\x02" +
        "\u0456\u0457\x03\x02\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458\u045A\x05" +
        "\xC4c\x02\u0459\u0458\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A" +
        "\xBF\x03\x02\x02\x02\u045B\u045F\x07\n\x02\x02\u045C\u045E\x05\xC6d\x02" +
        "\u045D\u045C\x03\x02\x02\x02\u045E\u0461\x03\x02\x02\x02\u045F\u045D\x03" +
        "\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u0462\x03\x02\x02\x02\u0461" +
        "\u045F\x03\x02\x02\x02\u0462\u0463\x07\v\x02\x02\u0463\xC1\x03\x02\x02" +
        "\x02\u0464\u0465\x07_\x02\x02\u0465\u0466\x05\x1C\x0F\x02\u0466\xC3\x03" +
        "\x02\x02\x02\u0467\u0468\x07d\x02\x02\u0468\u0469\x05^0\x02\u0469\xC5" +
        "\x03\x02\x02\x02\u046A\u046F\x05X-\x02\u046B\u046F\x05\xC8e\x02\u046C" +
        "\u046F\x05\xCCg\x02\u046D\u046F\x05z>\x02\u046E\u046A\x03\x02\x02\x02" +
        "\u046E\u046B\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046D\x03" +
        "\x02\x02\x02\u046F\xC7\x03\x02\x02\x02\u0470\u0471\x05\xCAf\x02\u0471" +
        "\u0473\x05\xF2z\x02\u0472\u0474\x05<\x1F\x02\u0473\u0472\x03\x02\x02\x02" +
        "\u0473\u0474\x03\x02\x02\x02\u0474\u0476\x03\x02\x02\x02\u0475\u0477\x05" +
        "\x02\x02\x02\u0476\u0475\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477" +
        "\u0478\x03\x02\x02\x02\u0478\u0479\x07\f\x02\x02\u0479\u048B\x03\x02\x02" +
        "\x02\u047A\u047B\x05\xCAf\x02\u047B\u047C\x05\xF2z\x02\u047C\u0482\x05" +
        "> \x02\u047D\u047E\x07\n\x02\x02\u047E\u047F\x05\xE0q\x02\u047F\u0480" +
        "\x07\v\x02\x02\u0480\u0483\x03\x02\x02\x02\u0481\u0483\x07\f\x02\x02\u0482" +
        "\u047D\x03\x02\x02\x02\u0482\u0481\x03\x02\x02\x02\u0483\u048B\x03\x02" +
        "\x02\x02\u0484\u0487\x05\xCAf\x02\u0485\u0488\x05\xEEx\x02\u0486\u0488" +
        "\x05\xF0y\x02\u0487\u0485\x03\x02\x02\x02\u0487\u0486\x03\x02\x02\x02" +
        "\u0488\u048B\x03\x02\x02\x02\u0489\u048B\x05\x80A\x02\u048A\u0470\x03" +
        "\x02\x02\x02\u048A\u047A\x03\x02\x02\x02\u048A\u0484\x03\x02\x02\x02\u048A" +
        "\u0489\x03\x02\x02\x02\u048B\xC9\x03\x02\x02\x02\u048C\u048E\x07\\\x02" +
        "\x02\u048D\u048C\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u0490" +
        "\x03\x02\x02\x02\u048F\u0491\x05F$\x02\u0490\u048F\x03\x02\x02\x02\u0490" +
        "\u0491\x03\x02\x02\x02\u0491\u0493\x03\x02\x02\x02\u0492\u0494\x07k\x02" +
        "\x02\u0493\u0492\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u0496" +
        "\x03\x02\x02\x02\u0495\u0497\x07[\x02\x02\u0496\u0495\x03\x02\x02\x02" +
        "\u0496\u0497\x03\x02\x02\x02\u0497\xCB\x03\x02\x02\x02\u0498\u0499\x05" +
        "R*\x02\u0499\u049A\x07\f\x02\x02\u049A\xCD\x03\x02\x02\x02\u049B\u049D" +
        "\x07\x19\x02\x02\u049C\u049B\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02" +
        "\u049D\u049E\x03\x02\x02\x02\u049E\u049F\x07}\x02\x02\u049F\u04A1\x07" +
        "\b\x02\x02\u04A0\u04A2\x05\xDAn\x02\u04A1\u04A0\x03\x02\x02\x02\u04A1" +
        "\u04A2\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A4\x07\t\x02" +
        "\x02\u04A4\u04A5\x07\n\x02\x02\u04A5\u04A6\x05\xE0q\x02\u04A6\u04A7\x07" +
        "\v\x02\x02\u04A7\xCF\x03\x02\x02\x02\u04A8\u04A9\x07P\x02\x02\u04A9\u04AB" +
        "\x07\x19\x02\x02\u04AA\u04AC\x07}\x02\x02\u04AB\u04AA\x03\x02\x02\x02" +
        "\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD\u04AF\x07" +
        "\b\x02\x02\u04AE\u04B0\x05\xDAn\x02\u04AF\u04AE\x03\x02\x02\x02\u04AF" +
        "\u04B0\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x07\t\x02" +
        "\x02\u04B2\u04B3\x07\n\x02\x02\u04B3\u04B4\x05\xE0q\x02\u04B4\u04B5\x07" +
        "\v\x02\x02\u04B5\xD1\x03\x02\x02\x02\u04B6\u04B7\x07\n\x02\x02\u04B7\u04BC" +
        "\x05\xD4k\x02\u04B8\u04B9\x07\r\x02\x02\u04B9\u04BB\x05\xD4k\x02\u04BA" +
        "\u04B8\x03\x02\x02\x02\u04BB\u04BE\x03\x02\x02\x02\u04BC\u04BA\x03\x02" +
        "\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE" +
        "\u04BC\x03\x02\x02\x02\u04BF\u04C1\x07\r\x02\x02\u04C0\u04BF\x03\x02\x02" +
        "\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C3" +
        "\x07\v\x02\x02\u04C3\xD3\x03\x02\x02\x02\u04C4\u04C5\x07\x19\x02\x02\u04C5" +
        "\u04C6\x05\xD8m\x02\u04C6\xD5\x03\x02\x02\x02\u04C7\u04C8\x07\n\x02\x02" +
        "\u04C8\u04CD\x05\xD8m\x02\u04C9\u04CA\x07\r\x02\x02\u04CA\u04CC\x05\xD8" +
        "m\x02\u04CB\u04C9\x03\x02\x02\x02\u04CC\u04CF\x03\x02\x02\x02\u04CD\u04CB" +
        "\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04D1\x03\x02\x02\x02" +
        "\u04CF\u04CD\x03\x02\x02\x02\u04D0\u04D2\x07\r\x02\x02\u04D1\u04D0\x03" +
        "\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3" +
        "\u04D4\x07\v\x02\x02\u04D4\xD7\x03\x02\x02\x02\u04D5\u04D6\x07\x06\x02" +
        "\x02\u04D6\u04D7\x05\xFC\x7F\x02\u04D7\u04D8\x07\x07\x02\x02\u04D8\u04DA" +
        "\x07\b\x02\x02\u04D9\u04DB\x05\xDAn\x02\u04DA\u04D9\x03\x02\x02\x02\u04DA" +
        "\u04DB\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DD\x07\t\x02" +
        "\x02\u04DD\u04DE\x07\n\x02\x02\u04DE\u04DF\x05\xE0q\x02\u04DF\u04E0\x07" +
        "\v\x02\x02\u04E0\xD9\x03\x02\x02\x02\u04E1\u04E6\x05\xDCo\x02\u04E2\u04E3" +
        "\x07\r\x02\x02\u04E3\u04E5\x05\xDCo\x02\u04E4\u04E2\x03\x02\x02\x02\u04E5" +
        "\u04E8\x03\x02\x02\x02\u04E6\u04E4\x03\x02\x02\x02\u04E6\u04E7\x03\x02" +
        "\x02\x02\u04E7\u04EB\x03\x02\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E9" +
        "\u04EA\x07\r\x02\x02\u04EA\u04EC\x05\xDEp\x02\u04EB\u04E9\x03\x02\x02" +
        "\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04F5\x03\x02\x02\x02\u04ED\u04F5" +
        "\x05\xDEp\x02\u04EE\u04F5\x05\xE4s\x02\u04EF\u04F2\x05\xEAv\x02\u04F0" +
        "\u04F1\x07\x10\x02\x02\u04F1\u04F3\x05\xDAn\x02\u04F2\u04F0\x03\x02\x02" +
        "\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x03\x02\x02\x02\u04F4\u04E1" +
        "\x03\x02\x02\x02\u04F4\u04ED\x03\x02\x02\x02\u04F4\u04EE\x03\x02\x02\x02" +
        "\u04F4\u04EF\x03\x02\x02\x02\u04F5\xDB\x03\x02\x02\x02\u04F6\u04F8\x05" +
        "F$\x02\u04F7\u04F6\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04F9" +
        "\x03\x02\x02\x02\u04F9\u04FB\x07}\x02\x02\u04FA\u04FC\x05<\x1F\x02\u04FB" +
        "\u04FA\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u04FF\x03\x02" +
        "\x02\x02\u04FD\u04FE\x07\x0E\x02\x02\u04FE\u0500\x05\xFC\x7F\x02\u04FF" +
        "\u04FD\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\xDD\x03\x02\x02" +
        "\x02\u0501\u0502\x07\x11\x02\x02\u0502\u0503\x07}\x02\x02\u0503\xDF\x03" +
        "\x02\x02\x02\u0504\u0506\x05\xE2r\x02\u0505\u0504\x03\x02\x02\x02\u0505" +
        "\u0506\x03\x02\x02\x02\u0506\xE1\x03\x02\x02\x02\u0507\u0509\x05x=\x02" +
        "\u0508\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u0508\x03" +
        "\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B\xE3\x03\x02\x02\x02\u050C" +
        "\u050E\x07\x06\x02\x02\u050D\u050F\x05\xE6t\x02\u050E\u050D\x03\x02\x02" +
        "\x02\u050E\u050F\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0511" +
        "\x07\x07\x02\x02\u0511\xE5\x03\x02\x02\x02\u0512\u051B\x05\xFC\x7F\x02" +
        "\u0513\u0515\x07\r\x02\x02\u0514\u0513\x03\x02\x02\x02\u0515\u0516\x03" +
        "\x02\x02\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517" +
        "\u0518\x03\x02\x02\x02\u0518\u051A\x05\xFC\x7F\x02\u0519\u0514\x03\x02" +
        "\x02\x02\u051A\u051D\x03\x02\x02\x02\u051B\u0519\x03\x02\x02\x02\u051B" +
        "\u051C\x03\x02\x02\x02\u051C\u0524\x03\x02\x02\x02\u051D\u051B\x03\x02" +
        "\x02\x02\u051E\u0520\x07\r\x02\x02\u051F\u051E\x03\x02\x02\x02\u0520\u0521" +
        "\x03\x02\x02\x02\u0521\u051F\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02" +
        "\u0522\u0523\x03\x02\x02\x02\u0523\u0525\x05\xE8u\x02\u0524\u051F\x03" +
        "\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0528\x03\x02\x02\x02\u0526" +
        "\u0528\x05\xE8u\x02\u0527\u0512\x03\x02\x02\x02\u0527\u0526\x03\x02\x02" +
        "\x02\u0528\xE7\x03\x02\x02\x02\u0529\u052C\x07\x11\x02\x02\u052A\u052D" +
        "\x07}\x02\x02\u052B\u052D\x05\xFC\x7F\x02\u052C\u052A\x03\x02\x02\x02" +
        "\u052C\u052B\x03\x02\x02\x02\u052D\xE9\x03\x02\x02\x02\u052E\u0537\x07" +
        "\n\x02\x02\u052F\u0534\x05\xECw\x02\u0530\u0531\x07\r\x02\x02\u0531\u0533" +
        "\x05\xECw\x02\u0532\u0530\x03\x02\x02\x02\u0533\u0536\x03\x02\x02\x02" +
        "\u0534\u0532\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0538\x03" +
        "\x02\x02\x02\u0536\u0534\x03\x02\x02\x02\u0537\u052F\x03\x02\x02\x02\u0537" +
        "\u0538\x03\x02\x02\x02\u0538\u053A\x03\x02\x02\x02\u0539\u053B\x07\r\x02" +
        "\x02\u053A\u0539\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053C" +
        "\x03\x02\x02\x02\u053C\u053D\x07\v\x02\x02\u053D\xEB\x03\x02\x02\x02\u053E" +
        "\u053F\x05\xF2z\x02\u053F\u0540\t\x07\x02\x02\u0540\u0541\x05\xFC\x7F" +
        "\x02\u0541\u054E\x03\x02\x02\x02\u0542\u0543\x07\x06\x02\x02\u0543\u0544" +
        "\x05\xFC\x7F\x02\u0544\u0545\x07\x07\x02\x02\u0545\u0546\x07\x10\x02\x02" +
        "\u0546\u0547\x05\xFC\x7F\x02\u0547\u054E\x03\x02\x02\x02\u0548\u054E\x05" +
        "\xEEx\x02\u0549\u054E\x05\xF0y\x02\u054A\u054E\x05\xCEh\x02\u054B\u054E" +
        "\x07}\x02\x02\u054C\u054E\x05N(\x02\u054D\u053E\x03\x02\x02\x02\u054D" +
        "\u0542\x03\x02\x02\x02\u054D\u0548\x03\x02\x02\x02\u054D\u0549\x03\x02" +
        "\x02\x02\u054D\u054A\x03\x02\x02\x02\u054D\u054B\x03\x02\x02\x02\u054D" +
        "\u054C\x03\x02\x02\x02\u054E\xED\x03\x02\x02\x02\u054F\u0550\x05\u0110" +
        "\x89\x02\u0550\u0551\x07\b\x02\x02\u0551\u0553\x07\t\x02\x02\u0552\u0554" +
        "\x05<\x1F\x02\u0553\u0552\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02" +
        "\u0554\u0555\x03\x02\x02\x02\u0555\u0556\x07\n\x02\x02\u0556\u0557\x05" +
        "\xE0q\x02\u0557\u0558\x07\v\x02\x02\u0558\xEF\x03\x02\x02\x02\u0559\u055A" +
        "\x05\u0112\x8A\x02\u055A\u055D\x07\b\x02\x02\u055B\u055E\x07}\x02\x02" +
        "\u055C\u055E\x05\x04\x03\x02\u055D\u055B\x03\x02\x02\x02\u055D\u055C\x03" +
        "\x02\x02\x02\u055E\u0560\x03\x02\x02\x02\u055F\u0561\x05<\x1F\x02\u0560" +
        "\u055F\x03\x02\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u0562\x03\x02" +
        "\x02\x02\u0562\u0563\x07\t\x02\x02\u0563\u0564\x07\n\x02\x02\u0564\u0565" +
        "\x05\xE0q\x02\u0565\u0566\x07\v\x02\x02\u0566\xF1\x03\x02\x02\x02\u0567" +
        "\u056B\x05\u010A\x86\x02\u0568\u056B\x07~\x02\x02\u0569\u056B\x05\u0108" +
        "\x85\x02\u056A\u0567\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056A" +
        "\u0569\x03\x02\x02\x02\u056B\xF3\x03\x02\x02\x02\u056C\u057A\x07\b\x02" +
        "\x02\u056D\u0572\x05\xFC\x7F\x02\u056E\u056F\x07\r\x02\x02\u056F\u0571" +
        "\x05\xFC\x7F\x02\u0570\u056E\x03\x02\x02\x02\u0571\u0574\x03\x02\x02\x02" +
        "\u0572\u0570\x03\x02\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573\u0577\x03" +
        "\x02\x02\x02\u0574\u0572\x03\x02\x02\x02\u0575\u0576\x07\r\x02\x02\u0576" +
        "\u0578\x05\xF6|\x02\u0577\u0575\x03\x02\x02\x02\u0577\u0578\x03\x02\x02" +
        "\x02\u0578\u057B\x03\x02\x02\x02\u0579\u057B\x05\xF6|\x02\u057A\u056D" +
        "\x03\x02\x02\x02\u057A\u0579\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02" +
        "\u057B\u057C\x03\x02\x02\x02\u057C\u057D\x07\t\x02\x02\u057D\xF5\x03\x02" +
        "\x02\x02\u057E\u057F\x07\x11\x02\x02\u057F\u0580\x07}\x02\x02\u0580\xF7" +
        "\x03\x02\x02\x02\u0581\u0586\x05\xFC\x7F\x02\u0582\u0583\x07\r\x02\x02" +
        "\u0583\u0585\x05\xFC\x7F\x02\u0584\u0582\x03\x02\x02\x02\u0585\u0588\x03" +
        "\x02\x02\x02\u0586\u0584\x03\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587" +
        "\xF9\x03\x02\x02\x02\u0588\u0586\x03\x02\x02\x02\u0589\u058B\x07P\x02" +
        "\x02\u058A\u058C\x07}\x02\x02\u058B\u058A\x03\x02\x02\x02\u058B\u058C" +
        "\x03\x02\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u058F\x07\b\x02\x02" +
        "\u058E\u0590\x05\xDAn\x02\u058F\u058E\x03\x02\x02\x02\u058F\u0590\x03" +
        "\x02\x02\x02\u0590\u0591\x03\x02\x02\x02\u0591\u0593\x07\t\x02\x02\u0592" +
        "\u0594\x05<\x1F\x02\u0593\u0592\x03\x02\x02\x02\u0593\u0594\x03\x02\x02" +
        "\x02\u0594\u0595\x03\x02\x02\x02\u0595\u0596\x07\n\x02\x02\u0596\u0597" +
        "\x05\xE0q\x02\u0597\u0598\x07\v\x02\x02\u0598\xFB\x03\x02\x02\x02\u0599" +
        "\u059A\b\x7F\x01\x02\u059A\u05D1\x05\xFA~\x02\u059B\u05D1\x05\xFE\x80" +
        "\x02\u059C\u059E\x07]\x02\x02\u059D\u059F\x07}\x02\x02\u059E\u059D\x03" +
        "\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0" +
        "\u05D1\x05\xC0a\x02\u05A1\u05A2\x07E\x02\x02\u05A2\u05A4\x05\xFC\x7F\x02" +
        "\u05A3\u05A5\x05\x0E\b\x02\u05A4\u05A3\x03\x02\x02\x02\u05A4\u05A5\x03" +
        "\x02\x02\x02\u05A5\u05A7\x03\x02\x02\x02\u05A6\u05A8\x05\xF4{\x02\u05A7" +
        "\u05A6\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05D1\x03\x02" +
        "\x02\x02\u05A9\u05AA\x07V\x02\x02\u05AA\u05D1\x05\xFC\x7F\'\u05AB\u05AC" +
        "\x07J\x02\x02\u05AC\u05D1\x05\xFC\x7F&\u05AD\u05AE\x07B\x02\x02\u05AE" +
        "\u05D1\x05\xFC\x7F%\u05AF\u05B0\x07\x13\x02\x02\u05B0\u05D1\x05\xFC\x7F" +
        "$\u05B1\u05B2\x07\x14\x02\x02\u05B2\u05D1\x05\xFC\x7F#\u05B3\u05B4\x07" +
        "\x15\x02\x02\u05B4\u05D1\x05\xFC\x7F\"\u05B5\u05B6\x07\x16\x02\x02\u05B6" +
        "\u05D1\x05\xFC\x7F!\u05B7\u05B8\x07\x17\x02\x02\u05B8\u05D1\x05\xFC\x7F" +
        " \u05B9\u05BA\x07\x18\x02\x02\u05BA\u05D1\x05\xFC\x7F\x1F\u05BB\u05D1" +
        "\x05\xD6l\x02\u05BC\u05D1\x05\xD2j\x02\u05BD\u05D1\x05\xD0i\x02\u05BE" +
        "\u05D1\x05\xA0Q\x02\u05BF\u05D1\x07Q\x02\x02\u05C0\u05C2\x05\u010A\x86" +
        "\x02\u05C1\u05C3\x05\xFC\x7F\x02\u05C2\u05C1\x03\x02\x02\x02\u05C2\u05C3" +
        "\x03\x02\x02\x02\u05C3\u05D1\x03\x02\x02\x02\u05C4\u05D1\x07`\x02\x02" +
        "\u05C5\u05D1\x05\u0106\x84\x02\u05C6\u05D1\x05\xE4s\x02\u05C7\u05D1\x05" +
        "\xEAv\x02\u05C8\u05C9\x07\b\x02\x02\u05C9\u05CA\x05\xF8}\x02\u05CA\u05CB" +
        "\x07\t\x02\x02\u05CB\u05D1\x03\x02\x02\x02\u05CC\u05CE\x05\x0E\b\x02\u05CD" +
        "\u05CF\x05\xF8}\x02\u05CE\u05CD\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02" +
        "\x02\u05CF\u05D1\x03\x02\x02\x02\u05D0\u0599\x03\x02\x02\x02\u05D0\u059B" +
        "\x03\x02\x02\x02\u05D0\u059C\x03\x02\x02\x02\u05D0\u05A1\x03\x02\x02\x02" +
        "\u05D0\u05A9\x03\x02\x02\x02\u05D0\u05AB\x03\x02\x02\x02\u05D0\u05AD\x03" +
        "\x02\x02\x02\u05D0\u05AF\x03\x02\x02\x02\u05D0\u05B1\x03\x02\x02\x02\u05D0" +
        "\u05B3\x03\x02\x02\x02\u05D0\u05B5\x03\x02\x02\x02\u05D0\u05B7\x03\x02" +
        "\x02\x02\u05D0\u05B9\x03\x02\x02\x02\u05D0\u05BB\x03\x02\x02\x02\u05D0" +
        "\u05BC\x03\x02\x02\x02\u05D0\u05BD\x03\x02\x02\x02\u05D0\u05BE\x03\x02" +
        "\x02\x02\u05D0\u05BF\x03\x02\x02\x02\u05D0\u05C0\x03\x02\x02\x02\u05D0" +
        "\u05C4\x03\x02\x02\x02\u05D0\u05C5\x03\x02\x02\x02\u05D0\u05C6\x03\x02" +
        "\x02\x02\u05D0\u05C7\x03\x02\x02\x02\u05D0\u05C8\x03\x02\x02\x02\u05D0" +
        "\u05CC\x03\x02\x02\x02\u05D1\u0617\x03\x02\x02\x02\u05D2\u05D3\f\x1E\x02" +
        "\x02\u05D3\u05D4\t\b\x02\x02\u05D4\u0616\x05\xFC\x7F\x1F\u05D5\u05D6\f" +
        "\x1D\x02\x02\u05D6\u05D7\t\t\x02\x02\u05D7\u0616\x05\xFC\x7F\x1E\u05D8" +
        "\u05D9\f\x1C\x02\x02\u05D9\u05DA\t\n\x02\x02\u05DA\u0616\x05\xFC\x7F\x1D" +
        "\u05DB\u05DC\f\x1B\x02\x02\u05DC\u05DD\t\v\x02\x02\u05DD\u0616\x05\xFC" +
        "\x7F\x1C\u05DE\u05DF\f\x1A\x02\x02\u05DF\u05E0\x07A\x02\x02\u05E0\u0616" +
        "\x05\xFC\x7F\x1B\u05E1\u05E2\f\x19\x02\x02\u05E2\u05E3\x07W\x02\x02\u05E3" +
        "\u0616\x05\xFC\x7F\x1A\u05E4\u05E5\f\x18\x02\x02\u05E5\u05E6\t\f\x02\x02" +
        "\u05E6\u0616\x05\xFC\x7F\x19\u05E7\u05E8\f\x17\x02\x02\u05E8\u05E9\x07" +
        "\'\x02\x02\u05E9\u0616\x05\xFC\x7F\x18\u05EA\u05EB\f\x16\x02\x02\u05EB" +
        "\u05EC\x07(\x02\x02\u05EC\u0616\x05\xFC\x7F\x17\u05ED\u05EE\f\x15\x02" +
        "\x02\u05EE\u05EF\x07)\x02\x02\u05EF\u0616\x05\xFC\x7F\x16\u05F0\u05F1" +
        "\f\x14\x02\x02\u05F1\u05F2\x07*\x02\x02\u05F2\u0616\x05\xFC\x7F\x15\u05F3" +
        "\u05F4\f\x13\x02\x02\u05F4\u05F5\x07+\x02\x02\u05F5\u0616\x05\xFC\x7F" +
        "\x14\u05F6\u05F7\f\x12\x02\x02\u05F7\u05F8\x07\x0F\x02\x02\u05F8\u05F9" +
        "\x05\xFC\x7F\x02\u05F9\u05FA\x07\x10\x02\x02\u05FA\u05FB\x05\xFC\x7F\x13" +
        "\u05FB\u0616\x03\x02\x02\x02\u05FC\u05FD\f\x11\x02\x02\u05FD\u05FE\x07" +
        "\x0E\x02\x02\u05FE\u0616\x05\xFC\x7F\x12\u05FF\u0600\f\x10\x02\x02\u0600" +
        "\u0601\x05\u0104\x83\x02\u0601\u0602\x05\xFC\x7F\x11\u0602\u0616\x03\x02" +
        "\x02\x02\u0603\u0604\f-\x02\x02\u0604\u0605\x07\x06\x02\x02\u0605\u0606" +
        "\x05\xF8}\x02\u0606\u0607\x07\x07\x02\x02\u0607\u0616\x03\x02\x02\x02" +
        "\u0608\u0609\f,\x02\x02\u0609\u060A\x07\x12\x02\x02\u060A\u0616\x05\u010A" +
        "\x86\x02\u060B\u060C\f+\x02\x02\u060C\u0616\x05\xF4{\x02\u060D\u060E\f" +
        ")\x02\x02\u060E\u060F\x06\x7F#\x02\u060F\u0616\x07\x13\x02\x02\u0610\u0611" +
        "\f(\x02\x02\u0611\u0612\x06\x7F%\x02\u0612\u0616\x07\x14\x02\x02\u0613" +
        "\u0614\f\x0F\x02\x02\u0614\u0616\x07\x7F\x02\x02\u0615\u05D2\x03\x02\x02" +
        "\x02\u0615\u05D5\x03\x02\x02\x02\u0615\u05D8\x03\x02\x02\x02\u0615\u05DB" +
        "\x03\x02\x02\x02\u0615\u05DE\x03\x02\x02\x02\u0615\u05E1\x03\x02\x02\x02" +
        "\u0615\u05E4\x03\x02\x02\x02\u0615\u05E7\x03\x02\x02\x02\u0615\u05EA\x03" +
        "\x02\x02\x02\u0615\u05ED\x03\x02\x02\x02\u0615\u05F0\x03\x02\x02\x02\u0615" +
        "\u05F3\x03\x02\x02\x02\u0615\u05F6\x03\x02\x02\x02\u0615\u05FC\x03\x02" +
        "\x02\x02\u0615\u05FF\x03\x02\x02\x02\u0615\u0603\x03\x02\x02\x02\u0615" +
        "\u0608\x03\x02\x02\x02\u0615\u060B\x03\x02\x02\x02\u0615\u060D\x03\x02" +
        "\x02\x02\u0615\u0610\x03\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0616" +
        "\u0619\x03\x02\x02\x02\u0617\u0615\x03\x02\x02\x02\u0617\u0618\x03\x02" +
        "\x02\x02\u0618\xFD\x03\x02\x02\x02\u0619\u0617\x03\x02\x02\x02\u061A\u061C" +
        "\x07\\\x02\x02\u061B\u061A\x03\x02\x02\x02\u061B\u061C\x03\x02\x02\x02" +
        "\u061C\u061D\x03\x02\x02\x02\u061D\u061F\x05\u0100\x81\x02\u061E\u0620" +
        "\x05<\x1F\x02\u061F\u061E\x03\x02\x02\x02\u061F\u0620\x03\x02\x02\x02" +
        "\u0620\u0621\x03\x02\x02\x02\u0621\u0622\x077\x02\x02\u0622\u0623\x05" +
        "\u0102\x82\x02\u0623\xFF\x03\x02\x02\x02\u0624\u062B\x07}\x02\x02\u0625" +
        "\u0627\x07\b\x02\x02\u0626\u0628\x05\xDAn\x02\u0627\u0626\x03\x02\x02" +
        "\x02\u0627\u0628\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629\u062B" +
        "\x07\t\x02\x02\u062A\u0624\x03\x02\x02\x02\u062A\u0625\x03\x02\x02\x02" +
        "\u062B\u0101\x03\x02\x02\x02\u062C\u0632\x05\xFC\x7F\x02\u062D\u062E\x07" +
        "\n\x02\x02\u062E\u062F\x05\xE0q\x02\u062F\u0630\x07\v\x02\x02\u0630\u0632" +
        "\x03\x02\x02\x02\u0631\u062C\x03\x02\x02\x02\u0631\u062D\x03\x02\x02\x02" +
        "\u0632\u0103\x03\x02\x02\x02\u0633\u0634\t\r\x02\x02\u0634\u0105\x03\x02" +
        "\x02\x02\u0635\u063C\x078\x02\x02\u0636\u063C\x079\x02\x02\u0637\u063C" +
        "\x07~\x02\x02\u0638\u063C\x07\x7F\x02\x02\u0639\u063C\x07\x05\x02\x02" +
        "\u063A\u063C\x05\u0108\x85\x02\u063B\u0635\x03\x02\x02\x02\u063B\u0636" +
        "\x03\x02\x02\x02\u063B\u0637\x03\x02\x02\x02\u063B\u0638\x03\x02\x02\x02" +
        "\u063B\u0639\x03\x02\x02\x02\u063B\u063A\x03\x02\x02\x02\u063C\u0107\x03" +
        "\x02\x02\x02\u063D\u063E\t\x0E\x02\x02\u063E\u0109\x03\x02\x02\x02\u063F" +
        "\u0642\x07}\x02\x02\u0640\u0642\x05\u010C\x87\x02\u0641\u063F\x03\x02" +
        "\x02\x02\u0641\u0640\x03\x02\x02\x02\u0642\u010B\x03\x02\x02\x02\u0643" +
        "\u0647\x05\u010E\x88\x02\u0644\u0647\x078\x02\x02\u0645\u0647\x079\x02" +
        "\x02\u0646\u0643\x03\x02\x02\x02\u0646\u0644\x03\x02\x02\x02\u0646\u0645" +
        "\x03\x02\x02\x02\u0647\u010D\x03\x02\x02\x02\u0648\u0649\t\x0F\x02\x02" +
        "\u0649\u010F\x03\x02\x02\x02\u064A\u064B\x07}\x02\x02\u064B\u064C\x06" +
        "\x89\'\x02\u064C\u064D\x05\xF2z\x02\u064D\u0111\x03\x02\x02\x02\u064E" +
        "\u064F\x07}\x02\x02\u064F\u0650\x06\x8A(\x02\u0650\u0651\x05\xF2z\x02" +
        "\u0651\u0113\x03\x02\x02\x02\u0652\u0657\x07\f\x02\x02\u0653\u0657\x07" +
        "\x02\x02\x03\u0654\u0657\x06\x8B)\x02\u0655\u0657\x06\x8B*\x02\u0656\u0652" +
        "\x03\x02\x02\x02\u0656\u0653\x03\x02\x02\x02\u0656\u0654\x03\x02\x02\x02" +
        "\u0656\u0655\x03\x02\x02\x02\u0657\u0115\x03\x02\x02\x02\xC7\u011B\u011F" +
        "\u0128\u012D\u0130\u0137\u0140\u014A\u0155\u0157\u016C\u0174\u017C\u018B" +
        "\u018F\u0193\u0199\u01A0\u01AA\u01AC\u01BC\u01C0\u01C4\u01CC\u01D0\u01DF" +
        "\u01E3\u01E6\u01EA\u01ED\u01F1\u01F7\u01FB\u01FF\u0207\u020D\u0214\u0217" +
        "\u0219\u021B\u0222\u0226\u0229\u022D\u0233\u023A\u023E\u0241\u0246\u0249" +
        "\u024C\u0253\u0257\u025B\u0266\u026D\u0274\u0279\u0281\u0284\u0289\u028C" +
        "\u0290\u029A\u029E\u02A4\u02AA\u02B1\u02B7\u02BD\u02C5\u02CA\u02D5\u02DA" +
        "\u02E2\u02E9\u02F0\u02F5\u0316\u031A\u0321\u0327\u032E\u0332\u0336\u033F" +
        "\u0347\u034E\u0352\u0356\u035A\u035D\u0360\u0363\u0367\u0369\u0370\u0376" +
        "\u0379\u037C\u0380\u0383\u038A\u0393\u03A6\u03AA\u03AE\u03B8\u03BC\u03C7" +
        "\u03D4\u03DA\u03E1\u03E8\u03EF\u03F6\u0408\u040C\u040E\u0415\u041B\u0420" +
        "\u042F\u0432\u0448\u044B\u0450\u0456\u0459\u045F\u046E\u0473\u0476\u0482" +
        "\u0487\u048A\u048D\u0490\u0493\u0496\u049C\u04A1\u04AB\u04AF\u04BC\u04C0" +
        "\u04CD\u04D1\u04DA\u04E6\u04EB\u04F2\u04F4\u04F7\u04FB\u04FF\u0505\u050A" +
        "\u050E\u0516\u051B\u0521\u0524\u0527\u052C\u0534\u0537\u053A\u054D\u0553" +
        "\u055D\u0560\u056A\u0572\u0577\u057A\u0586\u058B\u058F\u0593\u059E\u05A4" +
        "\u05A7\u05C2\u05CE\u05D0\u0615\u0617\u061B\u061F\u0627\u062A\u0631\u063B" +
        "\u0641\u0646\u0656";
    TypeScriptParser._serializedATN = Utils.join([
        TypeScriptParser._serializedATNSegment0,
        TypeScriptParser._serializedATNSegment1,
        TypeScriptParser._serializedATNSegment2,
    ], "");
    return TypeScriptParser;
}(TypeScriptBaseParser));
exports.TypeScriptParser = TypeScriptParser;
var InitializerContext = /** @class */ (function (_super) {
    __extends(InitializerContext, _super);
    function InitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerContext.prototype.Assign = function () { return this.getToken(TypeScriptParser.Assign, 0); };
    InitializerContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(InitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_initializer; },
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
var BindingPatternContext = /** @class */ (function (_super) {
    __extends(BindingPatternContext, _super);
    function BindingPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BindingPatternContext.prototype.arrayLiteral = function () {
        return this.tryGetRuleContext(0, ArrayLiteralContext);
    };
    BindingPatternContext.prototype.objectLiteral = function () {
        return this.tryGetRuleContext(0, ObjectLiteralContext);
    };
    Object.defineProperty(BindingPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_bindingPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BindingPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterBindingPattern) {
            listener.enterBindingPattern(this);
        }
    };
    // @Override
    BindingPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitBindingPattern) {
            listener.exitBindingPattern(this);
        }
    };
    // @Override
    BindingPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitBindingPattern) {
            return visitor.visitBindingPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BindingPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BindingPatternContext = BindingPatternContext;
var TypeParametersContext = /** @class */ (function (_super) {
    __extends(TypeParametersContext, _super);
    function TypeParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParametersContext.prototype.LessThan = function () { return this.getToken(TypeScriptParser.LessThan, 0); };
    TypeParametersContext.prototype.MoreThan = function () { return this.getToken(TypeScriptParser.MoreThan, 0); };
    TypeParametersContext.prototype.typeParameterList = function () {
        return this.tryGetRuleContext(0, TypeParameterListContext);
    };
    Object.defineProperty(TypeParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameters) {
            listener.enterTypeParameters(this);
        }
    };
    // @Override
    TypeParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameters) {
            listener.exitTypeParameters(this);
        }
    };
    // @Override
    TypeParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParametersContext = TypeParametersContext;
var TypeParameterListContext = /** @class */ (function (_super) {
    __extends(TypeParameterListContext, _super);
    function TypeParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterListContext.prototype.typeParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    };
    TypeParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(TypeParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameterList) {
            listener.enterTypeParameterList(this);
        }
    };
    // @Override
    TypeParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameterList) {
            listener.exitTypeParameterList(this);
        }
    };
    // @Override
    TypeParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameterList) {
            return visitor.visitTypeParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterListContext = TypeParameterListContext;
var TypeParameterContext = /** @class */ (function (_super) {
    __extends(TypeParameterContext, _super);
    function TypeParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    TypeParameterContext.prototype.constraint = function () {
        return this.tryGetRuleContext(0, ConstraintContext);
    };
    TypeParameterContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(TypeParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameter) {
            listener.enterTypeParameter(this);
        }
    };
    // @Override
    TypeParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameter) {
            listener.exitTypeParameter(this);
        }
    };
    // @Override
    TypeParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterContext = TypeParameterContext;
var ConstraintContext = /** @class */ (function (_super) {
    __extends(ConstraintContext, _super);
    function ConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstraintContext.prototype.Extends = function () { return this.getToken(TypeScriptParser.Extends, 0); };
    ConstraintContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(ConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_constraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterConstraint) {
            listener.enterConstraint(this);
        }
    };
    // @Override
    ConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitConstraint) {
            listener.exitConstraint(this);
        }
    };
    // @Override
    ConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitConstraint) {
            return visitor.visitConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstraintContext = ConstraintContext;
var TypeArgumentsContext = /** @class */ (function (_super) {
    __extends(TypeArgumentsContext, _super);
    function TypeArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentsContext.prototype.LessThan = function () { return this.getToken(TypeScriptParser.LessThan, 0); };
    TypeArgumentsContext.prototype.MoreThan = function () { return this.getToken(TypeScriptParser.MoreThan, 0); };
    TypeArgumentsContext.prototype.typeArgumentList = function () {
        return this.tryGetRuleContext(0, TypeArgumentListContext);
    };
    Object.defineProperty(TypeArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeArguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArguments) {
            listener.enterTypeArguments(this);
        }
    };
    // @Override
    TypeArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArguments) {
            listener.exitTypeArguments(this);
        }
    };
    // @Override
    TypeArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgumentsContext = TypeArgumentsContext;
var TypeArgumentListContext = /** @class */ (function (_super) {
    __extends(TypeArgumentListContext, _super);
    function TypeArgumentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentListContext.prototype.typeArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentContext);
        }
    };
    TypeArgumentListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(TypeArgumentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeArgumentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgumentListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArgumentList) {
            listener.enterTypeArgumentList(this);
        }
    };
    // @Override
    TypeArgumentListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArgumentList) {
            listener.exitTypeArgumentList(this);
        }
    };
    // @Override
    TypeArgumentListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArgumentList) {
            return visitor.visitTypeArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgumentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgumentListContext = TypeArgumentListContext;
var TypeArgumentContext = /** @class */ (function (_super) {
    __extends(TypeArgumentContext, _super);
    function TypeArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(TypeArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArgument) {
            listener.enterTypeArgument(this);
        }
    };
    // @Override
    TypeArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArgument) {
            listener.exitTypeArgument(this);
        }
    };
    // @Override
    TypeArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArgument) {
            return visitor.visitTypeArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgumentContext = TypeArgumentContext;
var Type_Context = /** @class */ (function (_super) {
    __extends(Type_Context, _super);
    function Type_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_Context.prototype.unionOrIntersectionOrPrimaryType = function () {
        return this.tryGetRuleContext(0, UnionOrIntersectionOrPrimaryTypeContext);
    };
    Type_Context.prototype.functionType = function () {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    };
    Type_Context.prototype.constructorType = function () {
        return this.tryGetRuleContext(0, ConstructorTypeContext);
    };
    Type_Context.prototype.typeGeneric = function () {
        return this.tryGetRuleContext(0, TypeGenericContext);
    };
    Type_Context.prototype.StringLiteral = function () { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); };
    Object.defineProperty(Type_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_type_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_Context.prototype.enterRule = function (listener) {
        if (listener.enterType_) {
            listener.enterType_(this);
        }
    };
    // @Override
    Type_Context.prototype.exitRule = function (listener) {
        if (listener.exitType_) {
            listener.exitType_(this);
        }
    };
    // @Override
    Type_Context.prototype.accept = function (visitor) {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_Context = Type_Context;
var UnionOrIntersectionOrPrimaryTypeContext = /** @class */ (function (_super) {
    __extends(UnionOrIntersectionOrPrimaryTypeContext, _super);
    function UnionOrIntersectionOrPrimaryTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(UnionOrIntersectionOrPrimaryTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType; },
        enumerable: true,
        configurable: true
    });
    UnionOrIntersectionOrPrimaryTypeContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return UnionOrIntersectionOrPrimaryTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionOrIntersectionOrPrimaryTypeContext = UnionOrIntersectionOrPrimaryTypeContext;
var UnionContext = /** @class */ (function (_super) {
    __extends(UnionContext, _super);
    function UnionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnionContext.prototype.unionOrIntersectionOrPrimaryType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext);
        }
        else {
            return this.getRuleContext(i, UnionOrIntersectionOrPrimaryTypeContext);
        }
    };
    UnionContext.prototype.BitOr = function () { return this.getToken(TypeScriptParser.BitOr, 0); };
    // @Override
    UnionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnion) {
            listener.enterUnion(this);
        }
    };
    // @Override
    UnionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnion) {
            listener.exitUnion(this);
        }
    };
    // @Override
    UnionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnion) {
            return visitor.visitUnion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionContext;
}(UnionOrIntersectionOrPrimaryTypeContext));
exports.UnionContext = UnionContext;
var IntersectionContext = /** @class */ (function (_super) {
    __extends(IntersectionContext, _super);
    function IntersectionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IntersectionContext.prototype.unionOrIntersectionOrPrimaryType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext);
        }
        else {
            return this.getRuleContext(i, UnionOrIntersectionOrPrimaryTypeContext);
        }
    };
    IntersectionContext.prototype.BitAnd = function () { return this.getToken(TypeScriptParser.BitAnd, 0); };
    // @Override
    IntersectionContext.prototype.enterRule = function (listener) {
        if (listener.enterIntersection) {
            listener.enterIntersection(this);
        }
    };
    // @Override
    IntersectionContext.prototype.exitRule = function (listener) {
        if (listener.exitIntersection) {
            listener.exitIntersection(this);
        }
    };
    // @Override
    IntersectionContext.prototype.accept = function (visitor) {
        if (visitor.visitIntersection) {
            return visitor.visitIntersection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntersectionContext;
}(UnionOrIntersectionOrPrimaryTypeContext));
exports.IntersectionContext = IntersectionContext;
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PrimaryContext.prototype.primaryType = function () {
        return this.getRuleContext(0, PrimaryTypeContext);
    };
    // @Override
    PrimaryContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryContext;
}(UnionOrIntersectionOrPrimaryTypeContext));
exports.PrimaryContext = PrimaryContext;
var PrimaryTypeContext = /** @class */ (function (_super) {
    __extends(PrimaryTypeContext, _super);
    function PrimaryTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PrimaryTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_primaryType; },
        enumerable: true,
        configurable: true
    });
    PrimaryTypeContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return PrimaryTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryTypeContext = PrimaryTypeContext;
var ParenthesizedPrimTypeContext = /** @class */ (function (_super) {
    __extends(ParenthesizedPrimTypeContext, _super);
    function ParenthesizedPrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesizedPrimTypeContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ParenthesizedPrimTypeContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    ParenthesizedPrimTypeContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    // @Override
    ParenthesizedPrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesizedPrimType) {
            listener.enterParenthesizedPrimType(this);
        }
    };
    // @Override
    ParenthesizedPrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesizedPrimType) {
            listener.exitParenthesizedPrimType(this);
        }
    };
    // @Override
    ParenthesizedPrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesizedPrimType) {
            return visitor.visitParenthesizedPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesizedPrimTypeContext;
}(PrimaryTypeContext));
exports.ParenthesizedPrimTypeContext = ParenthesizedPrimTypeContext;
var PredefinedPrimTypeContext = /** @class */ (function (_super) {
    __extends(PredefinedPrimTypeContext, _super);
    function PredefinedPrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PredefinedPrimTypeContext.prototype.predefinedType = function () {
        return this.getRuleContext(0, PredefinedTypeContext);
    };
    // @Override
    PredefinedPrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPredefinedPrimType) {
            listener.enterPredefinedPrimType(this);
        }
    };
    // @Override
    PredefinedPrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPredefinedPrimType) {
            listener.exitPredefinedPrimType(this);
        }
    };
    // @Override
    PredefinedPrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPredefinedPrimType) {
            return visitor.visitPredefinedPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredefinedPrimTypeContext;
}(PrimaryTypeContext));
exports.PredefinedPrimTypeContext = PredefinedPrimTypeContext;
var ReferencePrimTypeContext = /** @class */ (function (_super) {
    __extends(ReferencePrimTypeContext, _super);
    function ReferencePrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ReferencePrimTypeContext.prototype.typeReference = function () {
        return this.getRuleContext(0, TypeReferenceContext);
    };
    // @Override
    ReferencePrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterReferencePrimType) {
            listener.enterReferencePrimType(this);
        }
    };
    // @Override
    ReferencePrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitReferencePrimType) {
            listener.exitReferencePrimType(this);
        }
    };
    // @Override
    ReferencePrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitReferencePrimType) {
            return visitor.visitReferencePrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferencePrimTypeContext;
}(PrimaryTypeContext));
exports.ReferencePrimTypeContext = ReferencePrimTypeContext;
var ObjectPrimTypeContext = /** @class */ (function (_super) {
    __extends(ObjectPrimTypeContext, _super);
    function ObjectPrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ObjectPrimTypeContext.prototype.objectType = function () {
        return this.getRuleContext(0, ObjectTypeContext);
    };
    // @Override
    ObjectPrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectPrimType) {
            listener.enterObjectPrimType(this);
        }
    };
    // @Override
    ObjectPrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectPrimType) {
            listener.exitObjectPrimType(this);
        }
    };
    // @Override
    ObjectPrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectPrimType) {
            return visitor.visitObjectPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectPrimTypeContext;
}(PrimaryTypeContext));
exports.ObjectPrimTypeContext = ObjectPrimTypeContext;
var ArrayPrimTypeContext = /** @class */ (function (_super) {
    __extends(ArrayPrimTypeContext, _super);
    function ArrayPrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrayPrimTypeContext.prototype.primaryType = function () {
        return this.getRuleContext(0, PrimaryTypeContext);
    };
    ArrayPrimTypeContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    ArrayPrimTypeContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    // @Override
    ArrayPrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayPrimType) {
            listener.enterArrayPrimType(this);
        }
    };
    // @Override
    ArrayPrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayPrimType) {
            listener.exitArrayPrimType(this);
        }
    };
    // @Override
    ArrayPrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayPrimType) {
            return visitor.visitArrayPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayPrimTypeContext;
}(PrimaryTypeContext));
exports.ArrayPrimTypeContext = ArrayPrimTypeContext;
var TuplePrimTypeContext = /** @class */ (function (_super) {
    __extends(TuplePrimTypeContext, _super);
    function TuplePrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TuplePrimTypeContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    TuplePrimTypeContext.prototype.tupleElementTypes = function () {
        return this.getRuleContext(0, TupleElementTypesContext);
    };
    TuplePrimTypeContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    // @Override
    TuplePrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterTuplePrimType) {
            listener.enterTuplePrimType(this);
        }
    };
    // @Override
    TuplePrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitTuplePrimType) {
            listener.exitTuplePrimType(this);
        }
    };
    // @Override
    TuplePrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitTuplePrimType) {
            return visitor.visitTuplePrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TuplePrimTypeContext;
}(PrimaryTypeContext));
exports.TuplePrimTypeContext = TuplePrimTypeContext;
var QueryPrimTypeContext = /** @class */ (function (_super) {
    __extends(QueryPrimTypeContext, _super);
    function QueryPrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    QueryPrimTypeContext.prototype.typeQuery = function () {
        return this.getRuleContext(0, TypeQueryContext);
    };
    // @Override
    QueryPrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterQueryPrimType) {
            listener.enterQueryPrimType(this);
        }
    };
    // @Override
    QueryPrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitQueryPrimType) {
            listener.exitQueryPrimType(this);
        }
    };
    // @Override
    QueryPrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitQueryPrimType) {
            return visitor.visitQueryPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QueryPrimTypeContext;
}(PrimaryTypeContext));
exports.QueryPrimTypeContext = QueryPrimTypeContext;
var ThisPrimTypeContext = /** @class */ (function (_super) {
    __extends(ThisPrimTypeContext, _super);
    function ThisPrimTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ThisPrimTypeContext.prototype.This = function () { return this.getToken(TypeScriptParser.This, 0); };
    // @Override
    ThisPrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterThisPrimType) {
            listener.enterThisPrimType(this);
        }
    };
    // @Override
    ThisPrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitThisPrimType) {
            listener.exitThisPrimType(this);
        }
    };
    // @Override
    ThisPrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitThisPrimType) {
            return visitor.visitThisPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThisPrimTypeContext;
}(PrimaryTypeContext));
exports.ThisPrimTypeContext = ThisPrimTypeContext;
var RedefinitionOfTypeContext = /** @class */ (function (_super) {
    __extends(RedefinitionOfTypeContext, _super);
    function RedefinitionOfTypeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    RedefinitionOfTypeContext.prototype.typeReference = function () {
        return this.getRuleContext(0, TypeReferenceContext);
    };
    RedefinitionOfTypeContext.prototype.Is = function () { return this.getToken(TypeScriptParser.Is, 0); };
    RedefinitionOfTypeContext.prototype.primaryType = function () {
        return this.getRuleContext(0, PrimaryTypeContext);
    };
    // @Override
    RedefinitionOfTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterRedefinitionOfType) {
            listener.enterRedefinitionOfType(this);
        }
    };
    // @Override
    RedefinitionOfTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitRedefinitionOfType) {
            listener.exitRedefinitionOfType(this);
        }
    };
    // @Override
    RedefinitionOfTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitRedefinitionOfType) {
            return visitor.visitRedefinitionOfType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RedefinitionOfTypeContext;
}(PrimaryTypeContext));
exports.RedefinitionOfTypeContext = RedefinitionOfTypeContext;
var PredefinedTypeContext = /** @class */ (function (_super) {
    __extends(PredefinedTypeContext, _super);
    function PredefinedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredefinedTypeContext.prototype.Any = function () { return this.tryGetToken(TypeScriptParser.Any, 0); };
    PredefinedTypeContext.prototype.Number = function () { return this.tryGetToken(TypeScriptParser.Number, 0); };
    PredefinedTypeContext.prototype.Boolean = function () { return this.tryGetToken(TypeScriptParser.Boolean, 0); };
    PredefinedTypeContext.prototype.String = function () { return this.tryGetToken(TypeScriptParser.String, 0); };
    PredefinedTypeContext.prototype.Symbol = function () { return this.tryGetToken(TypeScriptParser.Symbol, 0); };
    PredefinedTypeContext.prototype.Void = function () { return this.tryGetToken(TypeScriptParser.Void, 0); };
    Object.defineProperty(PredefinedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_predefinedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredefinedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPredefinedType) {
            listener.enterPredefinedType(this);
        }
    };
    // @Override
    PredefinedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPredefinedType) {
            listener.exitPredefinedType(this);
        }
    };
    // @Override
    PredefinedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPredefinedType) {
            return visitor.visitPredefinedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredefinedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredefinedTypeContext = PredefinedTypeContext;
var TypeReferenceContext = /** @class */ (function (_super) {
    __extends(TypeReferenceContext, _super);
    function TypeReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeReferenceContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    TypeReferenceContext.prototype.typeIncludeGeneric = function () {
        return this.tryGetRuleContext(0, TypeIncludeGenericContext);
    };
    TypeReferenceContext.prototype.typeGeneric = function () {
        return this.tryGetRuleContext(0, TypeGenericContext);
    };
    Object.defineProperty(TypeReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeReference) {
            listener.enterTypeReference(this);
        }
    };
    // @Override
    TypeReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeReference) {
            listener.exitTypeReference(this);
        }
    };
    // @Override
    TypeReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeReference) {
            return visitor.visitTypeReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeReferenceContext = TypeReferenceContext;
var TypeGenericContext = /** @class */ (function (_super) {
    __extends(TypeGenericContext, _super);
    function TypeGenericContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeGenericContext.prototype.LessThan = function () { return this.getToken(TypeScriptParser.LessThan, 0); };
    TypeGenericContext.prototype.typeArgumentList = function () {
        return this.getRuleContext(0, TypeArgumentListContext);
    };
    TypeGenericContext.prototype.MoreThan = function () { return this.getToken(TypeScriptParser.MoreThan, 0); };
    Object.defineProperty(TypeGenericContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeGeneric; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeGenericContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeGeneric) {
            listener.enterTypeGeneric(this);
        }
    };
    // @Override
    TypeGenericContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeGeneric) {
            listener.exitTypeGeneric(this);
        }
    };
    // @Override
    TypeGenericContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeGeneric) {
            return visitor.visitTypeGeneric(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeGenericContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeGenericContext = TypeGenericContext;
var TypeIncludeGenericContext = /** @class */ (function (_super) {
    __extends(TypeIncludeGenericContext, _super);
    function TypeIncludeGenericContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeIncludeGenericContext.prototype.LessThan = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.LessThan);
        }
        else {
            return this.getToken(TypeScriptParser.LessThan, i);
        }
    };
    TypeIncludeGenericContext.prototype.typeArgumentList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentListContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentListContext);
        }
    };
    TypeIncludeGenericContext.prototype.MoreThan = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.MoreThan);
        }
        else {
            return this.getToken(TypeScriptParser.MoreThan, i);
        }
    };
    TypeIncludeGenericContext.prototype.bindingPattern = function () {
        return this.tryGetRuleContext(0, BindingPatternContext);
    };
    TypeIncludeGenericContext.prototype.RightShiftArithmetic = function () { return this.tryGetToken(TypeScriptParser.RightShiftArithmetic, 0); };
    Object.defineProperty(TypeIncludeGenericContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeIncludeGeneric; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeIncludeGenericContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeIncludeGeneric) {
            listener.enterTypeIncludeGeneric(this);
        }
    };
    // @Override
    TypeIncludeGenericContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeIncludeGeneric) {
            listener.exitTypeIncludeGeneric(this);
        }
    };
    // @Override
    TypeIncludeGenericContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeIncludeGeneric) {
            return visitor.visitTypeIncludeGeneric(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeIncludeGenericContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeIncludeGenericContext = TypeIncludeGenericContext;
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    TypeNameContext.prototype.namespaceName = function () {
        return this.tryGetRuleContext(0, NamespaceNameContext);
    };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeName; },
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
var ObjectTypeContext = /** @class */ (function (_super) {
    __extends(ObjectTypeContext, _super);
    function ObjectTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectTypeContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    ObjectTypeContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    ObjectTypeContext.prototype.typeBody = function () {
        return this.tryGetRuleContext(0, TypeBodyContext);
    };
    Object.defineProperty(ObjectTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_objectType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectType) {
            listener.enterObjectType(this);
        }
    };
    // @Override
    ObjectTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectType) {
            listener.exitObjectType(this);
        }
    };
    // @Override
    ObjectTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectType) {
            return visitor.visitObjectType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectTypeContext = ObjectTypeContext;
var TypeBodyContext = /** @class */ (function (_super) {
    __extends(TypeBodyContext, _super);
    function TypeBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeBodyContext.prototype.typeMemberList = function () {
        return this.getRuleContext(0, TypeMemberListContext);
    };
    TypeBodyContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    TypeBodyContext.prototype.Comma = function () { return this.tryGetToken(TypeScriptParser.Comma, 0); };
    Object.defineProperty(TypeBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeBody) {
            listener.enterTypeBody(this);
        }
    };
    // @Override
    TypeBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeBody) {
            listener.exitTypeBody(this);
        }
    };
    // @Override
    TypeBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeBody) {
            return visitor.visitTypeBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeBodyContext = TypeBodyContext;
var TypeMemberListContext = /** @class */ (function (_super) {
    __extends(TypeMemberListContext, _super);
    function TypeMemberListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeMemberListContext.prototype.typeMember = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeMemberContext);
        }
        else {
            return this.getRuleContext(i, TypeMemberContext);
        }
    };
    TypeMemberListContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.SemiColon);
        }
        else {
            return this.getToken(TypeScriptParser.SemiColon, i);
        }
    };
    TypeMemberListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(TypeMemberListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeMemberList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeMemberListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeMemberList) {
            listener.enterTypeMemberList(this);
        }
    };
    // @Override
    TypeMemberListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeMemberList) {
            listener.exitTypeMemberList(this);
        }
    };
    // @Override
    TypeMemberListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeMemberList) {
            return visitor.visitTypeMemberList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeMemberListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeMemberListContext = TypeMemberListContext;
var TypeMemberContext = /** @class */ (function (_super) {
    __extends(TypeMemberContext, _super);
    function TypeMemberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeMemberContext.prototype.propertySignatur = function () {
        return this.tryGetRuleContext(0, PropertySignaturContext);
    };
    TypeMemberContext.prototype.callSignature = function () {
        return this.tryGetRuleContext(0, CallSignatureContext);
    };
    TypeMemberContext.prototype.constructSignature = function () {
        return this.tryGetRuleContext(0, ConstructSignatureContext);
    };
    TypeMemberContext.prototype.indexSignature = function () {
        return this.tryGetRuleContext(0, IndexSignatureContext);
    };
    TypeMemberContext.prototype.methodSignature = function () {
        return this.tryGetRuleContext(0, MethodSignatureContext);
    };
    TypeMemberContext.prototype.ARROW = function () { return this.tryGetToken(TypeScriptParser.ARROW, 0); };
    TypeMemberContext.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    Object.defineProperty(TypeMemberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeMember; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeMemberContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeMember) {
            listener.enterTypeMember(this);
        }
    };
    // @Override
    TypeMemberContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeMember) {
            listener.exitTypeMember(this);
        }
    };
    // @Override
    TypeMemberContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeMember) {
            return visitor.visitTypeMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeMemberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeMemberContext = TypeMemberContext;
var ArrayTypeContext = /** @class */ (function (_super) {
    __extends(ArrayTypeContext, _super);
    function ArrayTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayTypeContext.prototype.primaryType = function () {
        return this.getRuleContext(0, PrimaryTypeContext);
    };
    ArrayTypeContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    ArrayTypeContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    Object.defineProperty(ArrayTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_arrayType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayType) {
            listener.enterArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayType) {
            listener.exitArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayTypeContext = ArrayTypeContext;
var TupleTypeContext = /** @class */ (function (_super) {
    __extends(TupleTypeContext, _super);
    function TupleTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TupleTypeContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    TupleTypeContext.prototype.tupleElementTypes = function () {
        return this.getRuleContext(0, TupleElementTypesContext);
    };
    TupleTypeContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    Object.defineProperty(TupleTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_tupleType; },
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
var TupleElementTypesContext = /** @class */ (function (_super) {
    __extends(TupleElementTypesContext, _super);
    function TupleElementTypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TupleElementTypesContext.prototype.type_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    };
    TupleElementTypesContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(TupleElementTypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_tupleElementTypes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TupleElementTypesContext.prototype.enterRule = function (listener) {
        if (listener.enterTupleElementTypes) {
            listener.enterTupleElementTypes(this);
        }
    };
    // @Override
    TupleElementTypesContext.prototype.exitRule = function (listener) {
        if (listener.exitTupleElementTypes) {
            listener.exitTupleElementTypes(this);
        }
    };
    // @Override
    TupleElementTypesContext.prototype.accept = function (visitor) {
        if (visitor.visitTupleElementTypes) {
            return visitor.visitTupleElementTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TupleElementTypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TupleElementTypesContext = TupleElementTypesContext;
var FunctionTypeContext = /** @class */ (function (_super) {
    __extends(FunctionTypeContext, _super);
    function FunctionTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    FunctionTypeContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    FunctionTypeContext.prototype.ARROW = function () { return this.getToken(TypeScriptParser.ARROW, 0); };
    FunctionTypeContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    FunctionTypeContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    FunctionTypeContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(FunctionTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_functionType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionType) {
            listener.enterFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionType) {
            listener.exitFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeContext = FunctionTypeContext;
var ConstructorTypeContext = /** @class */ (function (_super) {
    __extends(ConstructorTypeContext, _super);
    function ConstructorTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorTypeContext.prototype.New = function () { return this.getToken(TypeScriptParser.New, 0); };
    ConstructorTypeContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ConstructorTypeContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ConstructorTypeContext.prototype.ARROW = function () { return this.getToken(TypeScriptParser.ARROW, 0); };
    ConstructorTypeContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    ConstructorTypeContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    ConstructorTypeContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(ConstructorTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_constructorType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorType) {
            listener.enterConstructorType(this);
        }
    };
    // @Override
    ConstructorTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorType) {
            listener.exitConstructorType(this);
        }
    };
    // @Override
    ConstructorTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorType) {
            return visitor.visitConstructorType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorTypeContext = ConstructorTypeContext;
var TypeQueryContext = /** @class */ (function (_super) {
    __extends(TypeQueryContext, _super);
    function TypeQueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeQueryContext.prototype.Typeof = function () { return this.getToken(TypeScriptParser.Typeof, 0); };
    TypeQueryContext.prototype.typeQueryExpression = function () {
        return this.getRuleContext(0, TypeQueryExpressionContext);
    };
    Object.defineProperty(TypeQueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeQuery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeQueryContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeQuery) {
            listener.enterTypeQuery(this);
        }
    };
    // @Override
    TypeQueryContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeQuery) {
            listener.exitTypeQuery(this);
        }
    };
    // @Override
    TypeQueryContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeQuery) {
            return visitor.visitTypeQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeQueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeQueryContext = TypeQueryContext;
var TypeQueryExpressionContext = /** @class */ (function (_super) {
    __extends(TypeQueryExpressionContext, _super);
    function TypeQueryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeQueryExpressionContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    TypeQueryExpressionContext.prototype.identifierName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierNameContext);
        }
        else {
            return this.getRuleContext(i, IdentifierNameContext);
        }
    };
    TypeQueryExpressionContext.prototype.Dot = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Dot);
        }
        else {
            return this.getToken(TypeScriptParser.Dot, i);
        }
    };
    Object.defineProperty(TypeQueryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeQueryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeQueryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeQueryExpression) {
            listener.enterTypeQueryExpression(this);
        }
    };
    // @Override
    TypeQueryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeQueryExpression) {
            listener.exitTypeQueryExpression(this);
        }
    };
    // @Override
    TypeQueryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeQueryExpression) {
            return visitor.visitTypeQueryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeQueryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeQueryExpressionContext = TypeQueryExpressionContext;
var PropertySignaturContext = /** @class */ (function (_super) {
    __extends(PropertySignaturContext, _super);
    function PropertySignaturContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertySignaturContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    PropertySignaturContext.prototype.ReadOnly = function () { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); };
    PropertySignaturContext.prototype.QuestionMark = function () { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); };
    PropertySignaturContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    PropertySignaturContext.prototype.ARROW = function () { return this.tryGetToken(TypeScriptParser.ARROW, 0); };
    PropertySignaturContext.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    Object.defineProperty(PropertySignaturContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_propertySignatur; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertySignaturContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertySignatur) {
            listener.enterPropertySignatur(this);
        }
    };
    // @Override
    PropertySignaturContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertySignatur) {
            listener.exitPropertySignatur(this);
        }
    };
    // @Override
    PropertySignaturContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertySignatur) {
            return visitor.visitPropertySignatur(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertySignaturContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertySignaturContext = PropertySignaturContext;
var TypeAnnotationContext = /** @class */ (function (_super) {
    __extends(TypeAnnotationContext, _super);
    function TypeAnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeAnnotationContext.prototype.Colon = function () { return this.getToken(TypeScriptParser.Colon, 0); };
    TypeAnnotationContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(TypeAnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeAnnotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeAnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeAnnotation) {
            listener.enterTypeAnnotation(this);
        }
    };
    // @Override
    TypeAnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeAnnotation) {
            listener.exitTypeAnnotation(this);
        }
    };
    // @Override
    TypeAnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeAnnotation) {
            return visitor.visitTypeAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeAnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeAnnotationContext = TypeAnnotationContext;
var CallSignatureContext = /** @class */ (function (_super) {
    __extends(CallSignatureContext, _super);
    function CallSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallSignatureContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    CallSignatureContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    CallSignatureContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    CallSignatureContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    CallSignatureContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(CallSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_callSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterCallSignature) {
            listener.enterCallSignature(this);
        }
    };
    // @Override
    CallSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitCallSignature) {
            listener.exitCallSignature(this);
        }
    };
    // @Override
    CallSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitCallSignature) {
            return visitor.visitCallSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallSignatureContext = CallSignatureContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.restParameter = function () {
        return this.tryGetRuleContext(0, RestParameterContext);
    };
    ParameterListContext.prototype.predefinedType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PredefinedTypeContext);
        }
        else {
            return this.getRuleContext(i, PredefinedTypeContext);
        }
    };
    ParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    ParameterListContext.prototype.optionalParameterList = function () {
        return this.tryGetRuleContext(0, OptionalParameterListContext);
    };
    ParameterListContext.prototype.requiredParameterList = function () {
        return this.tryGetRuleContext(0, RequiredParameterListContext);
    };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_parameterList; },
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
var RequiredParameterListContext = /** @class */ (function (_super) {
    __extends(RequiredParameterListContext, _super);
    function RequiredParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RequiredParameterListContext.prototype.requiredParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RequiredParameterContext);
        }
        else {
            return this.getRuleContext(i, RequiredParameterContext);
        }
    };
    RequiredParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(RequiredParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_requiredParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RequiredParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterRequiredParameterList) {
            listener.enterRequiredParameterList(this);
        }
    };
    // @Override
    RequiredParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitRequiredParameterList) {
            listener.exitRequiredParameterList(this);
        }
    };
    // @Override
    RequiredParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitRequiredParameterList) {
            return visitor.visitRequiredParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RequiredParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RequiredParameterListContext = RequiredParameterListContext;
var RequiredParameterContext = /** @class */ (function (_super) {
    __extends(RequiredParameterContext, _super);
    function RequiredParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RequiredParameterContext.prototype.identifierOrPattern = function () {
        return this.getRuleContext(0, IdentifierOrPatternContext);
    };
    RequiredParameterContext.prototype.decoratorList = function () {
        return this.tryGetRuleContext(0, DecoratorListContext);
    };
    RequiredParameterContext.prototype.accessibilityModifier = function () {
        return this.tryGetRuleContext(0, AccessibilityModifierContext);
    };
    RequiredParameterContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(RequiredParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_requiredParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RequiredParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterRequiredParameter) {
            listener.enterRequiredParameter(this);
        }
    };
    // @Override
    RequiredParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitRequiredParameter) {
            listener.exitRequiredParameter(this);
        }
    };
    // @Override
    RequiredParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitRequiredParameter) {
            return visitor.visitRequiredParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RequiredParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RequiredParameterContext = RequiredParameterContext;
var AccessibilityModifierContext = /** @class */ (function (_super) {
    __extends(AccessibilityModifierContext, _super);
    function AccessibilityModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AccessibilityModifierContext.prototype.Public = function () { return this.tryGetToken(TypeScriptParser.Public, 0); };
    AccessibilityModifierContext.prototype.Private = function () { return this.tryGetToken(TypeScriptParser.Private, 0); };
    AccessibilityModifierContext.prototype.Protected = function () { return this.tryGetToken(TypeScriptParser.Protected, 0); };
    Object.defineProperty(AccessibilityModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_accessibilityModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccessibilityModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAccessibilityModifier) {
            listener.enterAccessibilityModifier(this);
        }
    };
    // @Override
    AccessibilityModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAccessibilityModifier) {
            listener.exitAccessibilityModifier(this);
        }
    };
    // @Override
    AccessibilityModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAccessibilityModifier) {
            return visitor.visitAccessibilityModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccessibilityModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccessibilityModifierContext = AccessibilityModifierContext;
var IdentifierOrPatternContext = /** @class */ (function (_super) {
    __extends(IdentifierOrPatternContext, _super);
    function IdentifierOrPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierOrPatternContext.prototype.identifierName = function () {
        return this.tryGetRuleContext(0, IdentifierNameContext);
    };
    IdentifierOrPatternContext.prototype.bindingPattern = function () {
        return this.tryGetRuleContext(0, BindingPatternContext);
    };
    Object.defineProperty(IdentifierOrPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_identifierOrPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierOrPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierOrPattern) {
            listener.enterIdentifierOrPattern(this);
        }
    };
    // @Override
    IdentifierOrPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierOrPattern) {
            listener.exitIdentifierOrPattern(this);
        }
    };
    // @Override
    IdentifierOrPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierOrPattern) {
            return visitor.visitIdentifierOrPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierOrPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierOrPatternContext = IdentifierOrPatternContext;
var OptionalParameterListContext = /** @class */ (function (_super) {
    __extends(OptionalParameterListContext, _super);
    function OptionalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalParameterListContext.prototype.optionalParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalParameterContext);
        }
        else {
            return this.getRuleContext(i, OptionalParameterContext);
        }
    };
    OptionalParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(OptionalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_optionalParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalParameterList) {
            listener.enterOptionalParameterList(this);
        }
    };
    // @Override
    OptionalParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalParameterList) {
            listener.exitOptionalParameterList(this);
        }
    };
    // @Override
    OptionalParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalParameterList) {
            return visitor.visitOptionalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalParameterListContext = OptionalParameterListContext;
var OptionalParameterContext = /** @class */ (function (_super) {
    __extends(OptionalParameterContext, _super);
    function OptionalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalParameterContext.prototype.identifierOrPattern = function () {
        return this.tryGetRuleContext(0, IdentifierOrPatternContext);
    };
    OptionalParameterContext.prototype.decoratorList = function () {
        return this.tryGetRuleContext(0, DecoratorListContext);
    };
    OptionalParameterContext.prototype.QuestionMark = function () { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); };
    OptionalParameterContext.prototype.initializer = function () {
        return this.tryGetRuleContext(0, InitializerContext);
    };
    OptionalParameterContext.prototype.accessibilityModifier = function () {
        return this.tryGetRuleContext(0, AccessibilityModifierContext);
    };
    OptionalParameterContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(OptionalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_optionalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalParameter) {
            listener.enterOptionalParameter(this);
        }
    };
    // @Override
    OptionalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalParameter) {
            listener.exitOptionalParameter(this);
        }
    };
    // @Override
    OptionalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalParameter) {
            return visitor.visitOptionalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalParameterContext = OptionalParameterContext;
var RestParameterContext = /** @class */ (function (_super) {
    __extends(RestParameterContext, _super);
    function RestParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RestParameterContext.prototype.Ellipsis = function () { return this.getToken(TypeScriptParser.Ellipsis, 0); };
    RestParameterContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(RestParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_restParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RestParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterRestParameter) {
            listener.enterRestParameter(this);
        }
    };
    // @Override
    RestParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitRestParameter) {
            listener.exitRestParameter(this);
        }
    };
    // @Override
    RestParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitRestParameter) {
            return visitor.visitRestParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RestParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RestParameterContext = RestParameterContext;
var ConstructSignatureContext = /** @class */ (function (_super) {
    __extends(ConstructSignatureContext, _super);
    function ConstructSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructSignatureContext.prototype.New = function () { return this.getToken(TypeScriptParser.New, 0); };
    ConstructSignatureContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ConstructSignatureContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ConstructSignatureContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    ConstructSignatureContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    ConstructSignatureContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(ConstructSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_constructSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructSignature) {
            listener.enterConstructSignature(this);
        }
    };
    // @Override
    ConstructSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructSignature) {
            listener.exitConstructSignature(this);
        }
    };
    // @Override
    ConstructSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructSignature) {
            return visitor.visitConstructSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructSignatureContext = ConstructSignatureContext;
var IndexSignatureContext = /** @class */ (function (_super) {
    __extends(IndexSignatureContext, _super);
    function IndexSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexSignatureContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    IndexSignatureContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    IndexSignatureContext.prototype.Colon = function () { return this.getToken(TypeScriptParser.Colon, 0); };
    IndexSignatureContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    IndexSignatureContext.prototype.typeAnnotation = function () {
        return this.getRuleContext(0, TypeAnnotationContext);
    };
    IndexSignatureContext.prototype.Number = function () { return this.tryGetToken(TypeScriptParser.Number, 0); };
    IndexSignatureContext.prototype.String = function () { return this.tryGetToken(TypeScriptParser.String, 0); };
    Object.defineProperty(IndexSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_indexSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexSignature) {
            listener.enterIndexSignature(this);
        }
    };
    // @Override
    IndexSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexSignature) {
            listener.exitIndexSignature(this);
        }
    };
    // @Override
    IndexSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexSignature) {
            return visitor.visitIndexSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexSignatureContext = IndexSignatureContext;
var MethodSignatureContext = /** @class */ (function (_super) {
    __extends(MethodSignatureContext, _super);
    function MethodSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodSignatureContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    MethodSignatureContext.prototype.callSignature = function () {
        return this.getRuleContext(0, CallSignatureContext);
    };
    MethodSignatureContext.prototype.QuestionMark = function () { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); };
    Object.defineProperty(MethodSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_methodSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodSignature) {
            listener.enterMethodSignature(this);
        }
    };
    // @Override
    MethodSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodSignature) {
            listener.exitMethodSignature(this);
        }
    };
    // @Override
    MethodSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodSignature) {
            return visitor.visitMethodSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodSignatureContext = MethodSignatureContext;
var TypeAliasDeclarationContext = /** @class */ (function (_super) {
    __extends(TypeAliasDeclarationContext, _super);
    function TypeAliasDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeAliasDeclarationContext.prototype.Type = function () { return this.getToken(TypeScriptParser.Type, 0); };
    TypeAliasDeclarationContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    TypeAliasDeclarationContext.prototype.Assign = function () { return this.getToken(TypeScriptParser.Assign, 0); };
    TypeAliasDeclarationContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    TypeAliasDeclarationContext.prototype.SemiColon = function () { return this.getToken(TypeScriptParser.SemiColon, 0); };
    TypeAliasDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(TypeAliasDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_typeAliasDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeAliasDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeAliasDeclaration) {
            listener.enterTypeAliasDeclaration(this);
        }
    };
    // @Override
    TypeAliasDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeAliasDeclaration) {
            listener.exitTypeAliasDeclaration(this);
        }
    };
    // @Override
    TypeAliasDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeAliasDeclaration) {
            return visitor.visitTypeAliasDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeAliasDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeAliasDeclarationContext = TypeAliasDeclarationContext;
var ConstructorDeclarationContext = /** @class */ (function (_super) {
    __extends(ConstructorDeclarationContext, _super);
    function ConstructorDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorDeclarationContext.prototype.Constructor = function () { return this.getToken(TypeScriptParser.Constructor, 0); };
    ConstructorDeclarationContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ConstructorDeclarationContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ConstructorDeclarationContext.prototype.accessibilityModifier = function () {
        return this.tryGetRuleContext(0, AccessibilityModifierContext);
    };
    ConstructorDeclarationContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    ConstructorDeclarationContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    ConstructorDeclarationContext.prototype.OpenBrace = function () { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); };
    ConstructorDeclarationContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    ConstructorDeclarationContext.prototype.CloseBrace = function () { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); };
    Object.defineProperty(ConstructorDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_constructorDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorDeclaration) {
            listener.enterConstructorDeclaration(this);
        }
    };
    // @Override
    ConstructorDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorDeclaration) {
            listener.exitConstructorDeclaration(this);
        }
    };
    // @Override
    ConstructorDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorDeclaration) {
            return visitor.visitConstructorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorDeclarationContext = ConstructorDeclarationContext;
var InterfaceDeclarationContext = /** @class */ (function (_super) {
    __extends(InterfaceDeclarationContext, _super);
    function InterfaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceDeclarationContext.prototype.Interface = function () { return this.getToken(TypeScriptParser.Interface, 0); };
    InterfaceDeclarationContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    InterfaceDeclarationContext.prototype.objectType = function () {
        return this.getRuleContext(0, ObjectTypeContext);
    };
    InterfaceDeclarationContext.prototype.Export = function () { return this.tryGetToken(TypeScriptParser.Export, 0); };
    InterfaceDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    InterfaceDeclarationContext.prototype.interfaceExtendsClause = function () {
        return this.tryGetRuleContext(0, InterfaceExtendsClauseContext);
    };
    InterfaceDeclarationContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    Object.defineProperty(InterfaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_interfaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceDeclaration) {
            listener.enterInterfaceDeclaration(this);
        }
    };
    // @Override
    InterfaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceDeclaration) {
            listener.exitInterfaceDeclaration(this);
        }
    };
    // @Override
    InterfaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceDeclaration) {
            return visitor.visitInterfaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceDeclarationContext = InterfaceDeclarationContext;
var InterfaceExtendsClauseContext = /** @class */ (function (_super) {
    __extends(InterfaceExtendsClauseContext, _super);
    function InterfaceExtendsClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceExtendsClauseContext.prototype.Extends = function () { return this.getToken(TypeScriptParser.Extends, 0); };
    InterfaceExtendsClauseContext.prototype.classOrInterfaceTypeList = function () {
        return this.getRuleContext(0, ClassOrInterfaceTypeListContext);
    };
    Object.defineProperty(InterfaceExtendsClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_interfaceExtendsClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceExtendsClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceExtendsClause) {
            listener.enterInterfaceExtendsClause(this);
        }
    };
    // @Override
    InterfaceExtendsClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceExtendsClause) {
            listener.exitInterfaceExtendsClause(this);
        }
    };
    // @Override
    InterfaceExtendsClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceExtendsClause) {
            return visitor.visitInterfaceExtendsClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceExtendsClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceExtendsClauseContext = InterfaceExtendsClauseContext;
var ClassOrInterfaceTypeListContext = /** @class */ (function (_super) {
    __extends(ClassOrInterfaceTypeListContext, _super);
    function ClassOrInterfaceTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassOrInterfaceTypeListContext.prototype.typeReference = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeReferenceContext);
        }
        else {
            return this.getRuleContext(i, TypeReferenceContext);
        }
    };
    ClassOrInterfaceTypeListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ClassOrInterfaceTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_classOrInterfaceTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassOrInterfaceTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterClassOrInterfaceTypeList) {
            listener.enterClassOrInterfaceTypeList(this);
        }
    };
    // @Override
    ClassOrInterfaceTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitClassOrInterfaceTypeList) {
            listener.exitClassOrInterfaceTypeList(this);
        }
    };
    // @Override
    ClassOrInterfaceTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitClassOrInterfaceTypeList) {
            return visitor.visitClassOrInterfaceTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassOrInterfaceTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassOrInterfaceTypeListContext = ClassOrInterfaceTypeListContext;
var EnumDeclarationContext = /** @class */ (function (_super) {
    __extends(EnumDeclarationContext, _super);
    function EnumDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumDeclarationContext.prototype.Enum = function () { return this.getToken(TypeScriptParser.Enum, 0); };
    EnumDeclarationContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    EnumDeclarationContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    EnumDeclarationContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    EnumDeclarationContext.prototype.Const = function () { return this.tryGetToken(TypeScriptParser.Const, 0); };
    EnumDeclarationContext.prototype.enumBody = function () {
        return this.tryGetRuleContext(0, EnumBodyContext);
    };
    Object.defineProperty(EnumDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_enumDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumDeclaration) {
            listener.enterEnumDeclaration(this);
        }
    };
    // @Override
    EnumDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumDeclaration) {
            listener.exitEnumDeclaration(this);
        }
    };
    // @Override
    EnumDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumDeclaration) {
            return visitor.visitEnumDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumDeclarationContext = EnumDeclarationContext;
var EnumBodyContext = /** @class */ (function (_super) {
    __extends(EnumBodyContext, _super);
    function EnumBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumBodyContext.prototype.enumMemberList = function () {
        return this.getRuleContext(0, EnumMemberListContext);
    };
    EnumBodyContext.prototype.Comma = function () { return this.tryGetToken(TypeScriptParser.Comma, 0); };
    Object.defineProperty(EnumBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_enumBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumBody) {
            listener.enterEnumBody(this);
        }
    };
    // @Override
    EnumBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumBody) {
            listener.exitEnumBody(this);
        }
    };
    // @Override
    EnumBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumBody) {
            return visitor.visitEnumBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumBodyContext = EnumBodyContext;
var EnumMemberListContext = /** @class */ (function (_super) {
    __extends(EnumMemberListContext, _super);
    function EnumMemberListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumMemberListContext.prototype.enumMember = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumMemberContext);
        }
        else {
            return this.getRuleContext(i, EnumMemberContext);
        }
    };
    EnumMemberListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(EnumMemberListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_enumMemberList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumMemberListContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumMemberList) {
            listener.enterEnumMemberList(this);
        }
    };
    // @Override
    EnumMemberListContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumMemberList) {
            listener.exitEnumMemberList(this);
        }
    };
    // @Override
    EnumMemberListContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumMemberList) {
            return visitor.visitEnumMemberList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumMemberListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumMemberListContext = EnumMemberListContext;
var EnumMemberContext = /** @class */ (function (_super) {
    __extends(EnumMemberContext, _super);
    function EnumMemberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumMemberContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    EnumMemberContext.prototype.Assign = function () { return this.tryGetToken(TypeScriptParser.Assign, 0); };
    EnumMemberContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(EnumMemberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_enumMember; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumMemberContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumMember) {
            listener.enterEnumMember(this);
        }
    };
    // @Override
    EnumMemberContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumMember) {
            listener.exitEnumMember(this);
        }
    };
    // @Override
    EnumMemberContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumMember) {
            return visitor.visitEnumMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumMemberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumMemberContext = EnumMemberContext;
var NamespaceDeclarationContext = /** @class */ (function (_super) {
    __extends(NamespaceDeclarationContext, _super);
    function NamespaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceDeclarationContext.prototype.Namespace = function () { return this.getToken(TypeScriptParser.Namespace, 0); };
    NamespaceDeclarationContext.prototype.namespaceName = function () {
        return this.getRuleContext(0, NamespaceNameContext);
    };
    NamespaceDeclarationContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    NamespaceDeclarationContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    NamespaceDeclarationContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(NamespaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_namespaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceDeclaration) {
            listener.enterNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceDeclaration) {
            listener.exitNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceDeclaration) {
            return visitor.visitNamespaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceDeclarationContext = NamespaceDeclarationContext;
var NamespaceNameContext = /** @class */ (function (_super) {
    __extends(NamespaceNameContext, _super);
    function NamespaceNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceNameContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Identifier);
        }
        else {
            return this.getToken(TypeScriptParser.Identifier, i);
        }
    };
    NamespaceNameContext.prototype.Dot = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Dot);
        }
        else {
            return this.getToken(TypeScriptParser.Dot, i);
        }
    };
    Object.defineProperty(NamespaceNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_namespaceName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceNameContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceName) {
            listener.enterNamespaceName(this);
        }
    };
    // @Override
    NamespaceNameContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceName) {
            listener.exitNamespaceName(this);
        }
    };
    // @Override
    NamespaceNameContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceName) {
            return visitor.visitNamespaceName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceNameContext = NamespaceNameContext;
var ImportAliasDeclarationContext = /** @class */ (function (_super) {
    __extends(ImportAliasDeclarationContext, _super);
    function ImportAliasDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportAliasDeclarationContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    ImportAliasDeclarationContext.prototype.Assign = function () { return this.getToken(TypeScriptParser.Assign, 0); };
    ImportAliasDeclarationContext.prototype.namespaceName = function () {
        return this.getRuleContext(0, NamespaceNameContext);
    };
    ImportAliasDeclarationContext.prototype.SemiColon = function () { return this.getToken(TypeScriptParser.SemiColon, 0); };
    Object.defineProperty(ImportAliasDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_importAliasDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportAliasDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterImportAliasDeclaration) {
            listener.enterImportAliasDeclaration(this);
        }
    };
    // @Override
    ImportAliasDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitImportAliasDeclaration) {
            listener.exitImportAliasDeclaration(this);
        }
    };
    // @Override
    ImportAliasDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitImportAliasDeclaration) {
            return visitor.visitImportAliasDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportAliasDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportAliasDeclarationContext = ImportAliasDeclarationContext;
var DecoratorListContext = /** @class */ (function (_super) {
    __extends(DecoratorListContext, _super);
    function DecoratorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratorListContext.prototype.decorator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DecoratorContext);
        }
        else {
            return this.getRuleContext(i, DecoratorContext);
        }
    };
    Object.defineProperty(DecoratorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_decoratorList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratorListContext.prototype.enterRule = function (listener) {
        if (listener.enterDecoratorList) {
            listener.enterDecoratorList(this);
        }
    };
    // @Override
    DecoratorListContext.prototype.exitRule = function (listener) {
        if (listener.exitDecoratorList) {
            listener.exitDecoratorList(this);
        }
    };
    // @Override
    DecoratorListContext.prototype.accept = function (visitor) {
        if (visitor.visitDecoratorList) {
            return visitor.visitDecoratorList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratorListContext = DecoratorListContext;
var DecoratorContext = /** @class */ (function (_super) {
    __extends(DecoratorContext, _super);
    function DecoratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratorContext.prototype.At = function () { return this.getToken(TypeScriptParser.At, 0); };
    DecoratorContext.prototype.decoratorMemberExpression = function () {
        return this.tryGetRuleContext(0, DecoratorMemberExpressionContext);
    };
    DecoratorContext.prototype.decoratorCallExpression = function () {
        return this.tryGetRuleContext(0, DecoratorCallExpressionContext);
    };
    Object.defineProperty(DecoratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_decorator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratorContext.prototype.enterRule = function (listener) {
        if (listener.enterDecorator) {
            listener.enterDecorator(this);
        }
    };
    // @Override
    DecoratorContext.prototype.exitRule = function (listener) {
        if (listener.exitDecorator) {
            listener.exitDecorator(this);
        }
    };
    // @Override
    DecoratorContext.prototype.accept = function (visitor) {
        if (visitor.visitDecorator) {
            return visitor.visitDecorator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratorContext = DecoratorContext;
var DecoratorMemberExpressionContext = /** @class */ (function (_super) {
    __extends(DecoratorMemberExpressionContext, _super);
    function DecoratorMemberExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratorMemberExpressionContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    DecoratorMemberExpressionContext.prototype.decoratorMemberExpression = function () {
        return this.tryGetRuleContext(0, DecoratorMemberExpressionContext);
    };
    DecoratorMemberExpressionContext.prototype.Dot = function () { return this.tryGetToken(TypeScriptParser.Dot, 0); };
    DecoratorMemberExpressionContext.prototype.identifierName = function () {
        return this.tryGetRuleContext(0, IdentifierNameContext);
    };
    DecoratorMemberExpressionContext.prototype.OpenParen = function () { return this.tryGetToken(TypeScriptParser.OpenParen, 0); };
    DecoratorMemberExpressionContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    DecoratorMemberExpressionContext.prototype.CloseParen = function () { return this.tryGetToken(TypeScriptParser.CloseParen, 0); };
    Object.defineProperty(DecoratorMemberExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_decoratorMemberExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratorMemberExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDecoratorMemberExpression) {
            listener.enterDecoratorMemberExpression(this);
        }
    };
    // @Override
    DecoratorMemberExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDecoratorMemberExpression) {
            listener.exitDecoratorMemberExpression(this);
        }
    };
    // @Override
    DecoratorMemberExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDecoratorMemberExpression) {
            return visitor.visitDecoratorMemberExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratorMemberExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratorMemberExpressionContext = DecoratorMemberExpressionContext;
var DecoratorCallExpressionContext = /** @class */ (function (_super) {
    __extends(DecoratorCallExpressionContext, _super);
    function DecoratorCallExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratorCallExpressionContext.prototype.decoratorMemberExpression = function () {
        return this.getRuleContext(0, DecoratorMemberExpressionContext);
    };
    DecoratorCallExpressionContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(DecoratorCallExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_decoratorCallExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratorCallExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDecoratorCallExpression) {
            listener.enterDecoratorCallExpression(this);
        }
    };
    // @Override
    DecoratorCallExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDecoratorCallExpression) {
            listener.exitDecoratorCallExpression(this);
        }
    };
    // @Override
    DecoratorCallExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDecoratorCallExpression) {
            return visitor.visitDecoratorCallExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratorCallExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratorCallExpressionContext = DecoratorCallExpressionContext;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.EOF = function () { return this.getToken(TypeScriptParser.EOF, 0); };
    ProgramContext.prototype.sourceElements = function () {
        return this.tryGetRuleContext(0, SourceElementsContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramContext = ProgramContext;
var SourceElementContext = /** @class */ (function (_super) {
    __extends(SourceElementContext, _super);
    function SourceElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceElementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    SourceElementContext.prototype.Export = function () { return this.tryGetToken(TypeScriptParser.Export, 0); };
    Object.defineProperty(SourceElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_sourceElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceElement) {
            listener.enterSourceElement(this);
        }
    };
    // @Override
    SourceElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceElement) {
            listener.exitSourceElement(this);
        }
    };
    // @Override
    SourceElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceElement) {
            return visitor.visitSourceElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceElementContext = SourceElementContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    StatementContext.prototype.importStatement = function () {
        return this.tryGetRuleContext(0, ImportStatementContext);
    };
    StatementContext.prototype.exportStatement = function () {
        return this.tryGetRuleContext(0, ExportStatementContext);
    };
    StatementContext.prototype.emptyStatement = function () {
        return this.tryGetRuleContext(0, EmptyStatementContext);
    };
    StatementContext.prototype.abstractDeclaration = function () {
        return this.tryGetRuleContext(0, AbstractDeclarationContext);
    };
    StatementContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    StatementContext.prototype.interfaceDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    };
    StatementContext.prototype.namespaceDeclaration = function () {
        return this.tryGetRuleContext(0, NamespaceDeclarationContext);
    };
    StatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    StatementContext.prototype.iterationStatement = function () {
        return this.tryGetRuleContext(0, IterationStatementContext);
    };
    StatementContext.prototype.continueStatement = function () {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    };
    StatementContext.prototype.breakStatement = function () {
        return this.tryGetRuleContext(0, BreakStatementContext);
    };
    StatementContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    StatementContext.prototype.yieldStatement = function () {
        return this.tryGetRuleContext(0, YieldStatementContext);
    };
    StatementContext.prototype.withStatement = function () {
        return this.tryGetRuleContext(0, WithStatementContext);
    };
    StatementContext.prototype.labelledStatement = function () {
        return this.tryGetRuleContext(0, LabelledStatementContext);
    };
    StatementContext.prototype.switchStatement = function () {
        return this.tryGetRuleContext(0, SwitchStatementContext);
    };
    StatementContext.prototype.throwStatement = function () {
        return this.tryGetRuleContext(0, ThrowStatementContext);
    };
    StatementContext.prototype.tryStatement = function () {
        return this.tryGetRuleContext(0, TryStatementContext);
    };
    StatementContext.prototype.debuggerStatement = function () {
        return this.tryGetRuleContext(0, DebuggerStatementContext);
    };
    StatementContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    StatementContext.prototype.arrowFunctionDeclaration = function () {
        return this.tryGetRuleContext(0, ArrowFunctionDeclarationContext);
    };
    StatementContext.prototype.generatorFunctionDeclaration = function () {
        return this.tryGetRuleContext(0, GeneratorFunctionDeclarationContext);
    };
    StatementContext.prototype.typeAliasDeclaration = function () {
        return this.tryGetRuleContext(0, TypeAliasDeclarationContext);
    };
    StatementContext.prototype.enumDeclaration = function () {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    };
    StatementContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    StatementContext.prototype.Export = function () { return this.tryGetToken(TypeScriptParser.Export, 0); };
    StatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_statement; },
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
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    BlockContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    BlockContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_block; },
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
var StatementListContext = /** @class */ (function (_super) {
    __extends(StatementListContext, _super);
    function StatementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementListContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StatementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_statementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementListContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementListContext = StatementListContext;
var AbstractDeclarationContext = /** @class */ (function (_super) {
    __extends(AbstractDeclarationContext, _super);
    function AbstractDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AbstractDeclarationContext.prototype.Abstract = function () { return this.getToken(TypeScriptParser.Abstract, 0); };
    AbstractDeclarationContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    AbstractDeclarationContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    AbstractDeclarationContext.prototype.callSignature = function () {
        return this.tryGetRuleContext(0, CallSignatureContext);
    };
    AbstractDeclarationContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    Object.defineProperty(AbstractDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_abstractDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AbstractDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterAbstractDeclaration) {
            listener.enterAbstractDeclaration(this);
        }
    };
    // @Override
    AbstractDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitAbstractDeclaration) {
            listener.exitAbstractDeclaration(this);
        }
    };
    // @Override
    AbstractDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitAbstractDeclaration) {
            return visitor.visitAbstractDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AbstractDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AbstractDeclarationContext = AbstractDeclarationContext;
var ImportStatementContext = /** @class */ (function (_super) {
    __extends(ImportStatementContext, _super);
    function ImportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportStatementContext.prototype.Import = function () { return this.getToken(TypeScriptParser.Import, 0); };
    ImportStatementContext.prototype.fromBlock = function () {
        return this.tryGetRuleContext(0, FromBlockContext);
    };
    ImportStatementContext.prototype.importAliasDeclaration = function () {
        return this.tryGetRuleContext(0, ImportAliasDeclarationContext);
    };
    Object.defineProperty(ImportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_importStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterImportStatement) {
            listener.enterImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitImportStatement) {
            listener.exitImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitImportStatement) {
            return visitor.visitImportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportStatementContext = ImportStatementContext;
var FromBlockContext = /** @class */ (function (_super) {
    __extends(FromBlockContext, _super);
    function FromBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FromBlockContext.prototype.From = function () { return this.getToken(TypeScriptParser.From, 0); };
    FromBlockContext.prototype.StringLiteral = function () { return this.getToken(TypeScriptParser.StringLiteral, 0); };
    FromBlockContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    FromBlockContext.prototype.Multiply = function () { return this.tryGetToken(TypeScriptParser.Multiply, 0); };
    FromBlockContext.prototype.multipleImportStatement = function () {
        return this.tryGetRuleContext(0, MultipleImportStatementContext);
    };
    FromBlockContext.prototype.As = function () { return this.tryGetToken(TypeScriptParser.As, 0); };
    FromBlockContext.prototype.identifierName = function () {
        return this.tryGetRuleContext(0, IdentifierNameContext);
    };
    Object.defineProperty(FromBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_fromBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FromBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterFromBlock) {
            listener.enterFromBlock(this);
        }
    };
    // @Override
    FromBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitFromBlock) {
            listener.exitFromBlock(this);
        }
    };
    // @Override
    FromBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitFromBlock) {
            return visitor.visitFromBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FromBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FromBlockContext = FromBlockContext;
var MultipleImportStatementContext = /** @class */ (function (_super) {
    __extends(MultipleImportStatementContext, _super);
    function MultipleImportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultipleImportStatementContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    MultipleImportStatementContext.prototype.identifierName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierNameContext);
        }
        else {
            return this.getRuleContext(i, IdentifierNameContext);
        }
    };
    MultipleImportStatementContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    MultipleImportStatementContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(MultipleImportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_multipleImportStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultipleImportStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterMultipleImportStatement) {
            listener.enterMultipleImportStatement(this);
        }
    };
    // @Override
    MultipleImportStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitMultipleImportStatement) {
            listener.exitMultipleImportStatement(this);
        }
    };
    // @Override
    MultipleImportStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitMultipleImportStatement) {
            return visitor.visitMultipleImportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultipleImportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultipleImportStatementContext = MultipleImportStatementContext;
var ExportStatementContext = /** @class */ (function (_super) {
    __extends(ExportStatementContext, _super);
    function ExportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExportStatementContext.prototype.Export = function () { return this.getToken(TypeScriptParser.Export, 0); };
    ExportStatementContext.prototype.fromBlock = function () {
        return this.tryGetRuleContext(0, FromBlockContext);
    };
    ExportStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    ExportStatementContext.prototype.Default = function () { return this.tryGetToken(TypeScriptParser.Default, 0); };
    Object.defineProperty(ExportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_exportStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExportStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExportStatement) {
            listener.enterExportStatement(this);
        }
    };
    // @Override
    ExportStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExportStatement) {
            listener.exitExportStatement(this);
        }
    };
    // @Override
    ExportStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExportStatement) {
            return visitor.visitExportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExportStatementContext = ExportStatementContext;
var VariableStatementContext = /** @class */ (function (_super) {
    __extends(VariableStatementContext, _super);
    function VariableStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableStatementContext.prototype.bindingPattern = function () {
        return this.tryGetRuleContext(0, BindingPatternContext);
    };
    VariableStatementContext.prototype.initializer = function () {
        return this.tryGetRuleContext(0, InitializerContext);
    };
    VariableStatementContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    VariableStatementContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    VariableStatementContext.prototype.variableDeclarationList = function () {
        return this.tryGetRuleContext(0, VariableDeclarationListContext);
    };
    VariableStatementContext.prototype.accessibilityModifier = function () {
        return this.tryGetRuleContext(0, AccessibilityModifierContext);
    };
    VariableStatementContext.prototype.varModifier = function () {
        return this.tryGetRuleContext(0, VarModifierContext);
    };
    VariableStatementContext.prototype.ReadOnly = function () { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); };
    Object.defineProperty(VariableStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_variableStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableStatement) {
            listener.enterVariableStatement(this);
        }
    };
    // @Override
    VariableStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableStatement) {
            listener.exitVariableStatement(this);
        }
    };
    // @Override
    VariableStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableStatement) {
            return visitor.visitVariableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableStatementContext = VariableStatementContext;
var VariableDeclarationListContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationListContext, _super);
    function VariableDeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationListContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    VariableDeclarationListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(VariableDeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_variableDeclarationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationListContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarationList) {
            listener.enterVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarationList) {
            listener.exitVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarationList) {
            return visitor.visitVariableDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationListContext = VariableDeclarationListContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    VariableDeclarationContext.prototype.arrayLiteral = function () {
        return this.tryGetRuleContext(0, ArrayLiteralContext);
    };
    VariableDeclarationContext.prototype.objectLiteral = function () {
        return this.tryGetRuleContext(0, ObjectLiteralContext);
    };
    VariableDeclarationContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    VariableDeclarationContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    VariableDeclarationContext.prototype.Assign = function () { return this.tryGetToken(TypeScriptParser.Assign, 0); };
    VariableDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_variableDeclaration; },
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
var EmptyStatementContext = /** @class */ (function (_super) {
    __extends(EmptyStatementContext, _super);
    function EmptyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptyStatementContext.prototype.SemiColon = function () { return this.getToken(TypeScriptParser.SemiColon, 0); };
    Object.defineProperty(EmptyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_emptyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyStatementContext = EmptyStatementContext;
var ExpressionStatementContext = /** @class */ (function (_super) {
    __extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ExpressionStatementContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_expressionStatement; },
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
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.If = function () { return this.getToken(TypeScriptParser.If, 0); };
    IfStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    IfStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    IfStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    IfStatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    IfStatementContext.prototype.Else = function () { return this.tryGetToken(TypeScriptParser.Else, 0); };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_ifStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatementContext = IfStatementContext;
var IterationStatementContext = /** @class */ (function (_super) {
    __extends(IterationStatementContext, _super);
    function IterationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IterationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_iterationStatement; },
        enumerable: true,
        configurable: true
    });
    IterationStatementContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return IterationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterationStatementContext = IterationStatementContext;
var DoStatementContext = /** @class */ (function (_super) {
    __extends(DoStatementContext, _super);
    function DoStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DoStatementContext.prototype.Do = function () { return this.getToken(TypeScriptParser.Do, 0); };
    DoStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    DoStatementContext.prototype.While = function () { return this.getToken(TypeScriptParser.While, 0); };
    DoStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    DoStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    DoStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    DoStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    // @Override
    DoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDoStatement) {
            return visitor.visitDoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoStatementContext;
}(IterationStatementContext));
exports.DoStatementContext = DoStatementContext;
var WhileStatementContext = /** @class */ (function (_super) {
    __extends(WhileStatementContext, _super);
    function WhileStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    WhileStatementContext.prototype.While = function () { return this.getToken(TypeScriptParser.While, 0); };
    WhileStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    WhileStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    WhileStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    WhileStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    // @Override
    WhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStatementContext;
}(IterationStatementContext));
exports.WhileStatementContext = WhileStatementContext;
var ForStatementContext = /** @class */ (function (_super) {
    __extends(ForStatementContext, _super);
    function ForStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForStatementContext.prototype.For = function () { return this.getToken(TypeScriptParser.For, 0); };
    ForStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ForStatementContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.SemiColon);
        }
        else {
            return this.getToken(TypeScriptParser.SemiColon, i);
        }
    };
    ForStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ForStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForStatementContext.prototype.expressionSequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionSequenceContext);
        }
        else {
            return this.getRuleContext(i, ExpressionSequenceContext);
        }
    };
    // @Override
    ForStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatementContext;
}(IterationStatementContext));
exports.ForStatementContext = ForStatementContext;
var ForVarStatementContext = /** @class */ (function (_super) {
    __extends(ForVarStatementContext, _super);
    function ForVarStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForVarStatementContext.prototype.For = function () { return this.getToken(TypeScriptParser.For, 0); };
    ForVarStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ForVarStatementContext.prototype.varModifier = function () {
        return this.getRuleContext(0, VarModifierContext);
    };
    ForVarStatementContext.prototype.variableDeclarationList = function () {
        return this.getRuleContext(0, VariableDeclarationListContext);
    };
    ForVarStatementContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.SemiColon);
        }
        else {
            return this.getToken(TypeScriptParser.SemiColon, i);
        }
    };
    ForVarStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ForVarStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForVarStatementContext.prototype.expressionSequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionSequenceContext);
        }
        else {
            return this.getRuleContext(i, ExpressionSequenceContext);
        }
    };
    // @Override
    ForVarStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForVarStatement) {
            listener.enterForVarStatement(this);
        }
    };
    // @Override
    ForVarStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForVarStatement) {
            listener.exitForVarStatement(this);
        }
    };
    // @Override
    ForVarStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForVarStatement) {
            return visitor.visitForVarStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForVarStatementContext;
}(IterationStatementContext));
exports.ForVarStatementContext = ForVarStatementContext;
var ForInStatementContext = /** @class */ (function (_super) {
    __extends(ForInStatementContext, _super);
    function ForInStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForInStatementContext.prototype.For = function () { return this.getToken(TypeScriptParser.For, 0); };
    ForInStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ForInStatementContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ForInStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ForInStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ForInStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForInStatementContext.prototype.In = function () { return this.tryGetToken(TypeScriptParser.In, 0); };
    ForInStatementContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    // @Override
    ForInStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForInStatement) {
            listener.enterForInStatement(this);
        }
    };
    // @Override
    ForInStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForInStatement) {
            listener.exitForInStatement(this);
        }
    };
    // @Override
    ForInStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForInStatement) {
            return visitor.visitForInStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForInStatementContext;
}(IterationStatementContext));
exports.ForInStatementContext = ForInStatementContext;
var ForVarInStatementContext = /** @class */ (function (_super) {
    __extends(ForVarInStatementContext, _super);
    function ForVarInStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForVarInStatementContext.prototype.For = function () { return this.getToken(TypeScriptParser.For, 0); };
    ForVarInStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ForVarInStatementContext.prototype.varModifier = function () {
        return this.getRuleContext(0, VarModifierContext);
    };
    ForVarInStatementContext.prototype.variableDeclaration = function () {
        return this.getRuleContext(0, VariableDeclarationContext);
    };
    ForVarInStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ForVarInStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ForVarInStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForVarInStatementContext.prototype.In = function () { return this.tryGetToken(TypeScriptParser.In, 0); };
    ForVarInStatementContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    // @Override
    ForVarInStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForVarInStatement) {
            listener.enterForVarInStatement(this);
        }
    };
    // @Override
    ForVarInStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForVarInStatement) {
            listener.exitForVarInStatement(this);
        }
    };
    // @Override
    ForVarInStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForVarInStatement) {
            return visitor.visitForVarInStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForVarInStatementContext;
}(IterationStatementContext));
exports.ForVarInStatementContext = ForVarInStatementContext;
var VarModifierContext = /** @class */ (function (_super) {
    __extends(VarModifierContext, _super);
    function VarModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarModifierContext.prototype.Var = function () { return this.tryGetToken(TypeScriptParser.Var, 0); };
    VarModifierContext.prototype.Let = function () { return this.tryGetToken(TypeScriptParser.Let, 0); };
    VarModifierContext.prototype.Const = function () { return this.tryGetToken(TypeScriptParser.Const, 0); };
    Object.defineProperty(VarModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_varModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterVarModifier) {
            listener.enterVarModifier(this);
        }
    };
    // @Override
    VarModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitVarModifier) {
            listener.exitVarModifier(this);
        }
    };
    // @Override
    VarModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitVarModifier) {
            return visitor.visitVarModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarModifierContext = VarModifierContext;
var ContinueStatementContext = /** @class */ (function (_super) {
    __extends(ContinueStatementContext, _super);
    function ContinueStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContinueStatementContext.prototype.Continue = function () { return this.getToken(TypeScriptParser.Continue, 0); };
    ContinueStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ContinueStatementContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    Object.defineProperty(ContinueStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_continueStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContinueStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContinueStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContinueStatementContext = ContinueStatementContext;
var BreakStatementContext = /** @class */ (function (_super) {
    __extends(BreakStatementContext, _super);
    function BreakStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BreakStatementContext.prototype.Break = function () { return this.getToken(TypeScriptParser.Break, 0); };
    BreakStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    BreakStatementContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    Object.defineProperty(BreakStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_breakStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BreakStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BreakStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BreakStatementContext = BreakStatementContext;
var ReturnStatementContext = /** @class */ (function (_super) {
    __extends(ReturnStatementContext, _super);
    function ReturnStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStatementContext.prototype.Return = function () { return this.getToken(TypeScriptParser.Return, 0); };
    ReturnStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ReturnStatementContext.prototype.expressionSequence = function () {
        return this.tryGetRuleContext(0, ExpressionSequenceContext);
    };
    Object.defineProperty(ReturnStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_returnStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStatementContext = ReturnStatementContext;
var YieldStatementContext = /** @class */ (function (_super) {
    __extends(YieldStatementContext, _super);
    function YieldStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YieldStatementContext.prototype.Yield = function () { return this.getToken(TypeScriptParser.Yield, 0); };
    YieldStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    YieldStatementContext.prototype.expressionSequence = function () {
        return this.tryGetRuleContext(0, ExpressionSequenceContext);
    };
    Object.defineProperty(YieldStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_yieldStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YieldStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterYieldStatement) {
            listener.enterYieldStatement(this);
        }
    };
    // @Override
    YieldStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitYieldStatement) {
            listener.exitYieldStatement(this);
        }
    };
    // @Override
    YieldStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitYieldStatement) {
            return visitor.visitYieldStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YieldStatementContext = YieldStatementContext;
var WithStatementContext = /** @class */ (function (_super) {
    __extends(WithStatementContext, _super);
    function WithStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithStatementContext.prototype.With = function () { return this.getToken(TypeScriptParser.With, 0); };
    WithStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    WithStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    WithStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    WithStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WithStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_withStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWithStatement) {
            listener.enterWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWithStatement) {
            listener.exitWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWithStatement) {
            return visitor.visitWithStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithStatementContext = WithStatementContext;
var SwitchStatementContext = /** @class */ (function (_super) {
    __extends(SwitchStatementContext, _super);
    function SwitchStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchStatementContext.prototype.Switch = function () { return this.getToken(TypeScriptParser.Switch, 0); };
    SwitchStatementContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    SwitchStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    SwitchStatementContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    SwitchStatementContext.prototype.caseBlock = function () {
        return this.getRuleContext(0, CaseBlockContext);
    };
    Object.defineProperty(SwitchStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_switchStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchStatementContext = SwitchStatementContext;
var CaseBlockContext = /** @class */ (function (_super) {
    __extends(CaseBlockContext, _super);
    function CaseBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseBlockContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    CaseBlockContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    CaseBlockContext.prototype.caseClauses = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClausesContext);
        }
        else {
            return this.getRuleContext(i, CaseClausesContext);
        }
    };
    CaseBlockContext.prototype.defaultClause = function () {
        return this.tryGetRuleContext(0, DefaultClauseContext);
    };
    Object.defineProperty(CaseBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_caseBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseBlock) {
            listener.enterCaseBlock(this);
        }
    };
    // @Override
    CaseBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseBlock) {
            listener.exitCaseBlock(this);
        }
    };
    // @Override
    CaseBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseBlock) {
            return visitor.visitCaseBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseBlockContext = CaseBlockContext;
var CaseClausesContext = /** @class */ (function (_super) {
    __extends(CaseClausesContext, _super);
    function CaseClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClausesContext.prototype.caseClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClauseContext);
        }
        else {
            return this.getRuleContext(i, CaseClauseContext);
        }
    };
    Object.defineProperty(CaseClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_caseClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClauses) {
            listener.enterCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClauses) {
            listener.exitCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClauses) {
            return visitor.visitCaseClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClausesContext = CaseClausesContext;
var CaseClauseContext = /** @class */ (function (_super) {
    __extends(CaseClauseContext, _super);
    function CaseClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClauseContext.prototype.Case = function () { return this.getToken(TypeScriptParser.Case, 0); };
    CaseClauseContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    CaseClauseContext.prototype.Colon = function () { return this.getToken(TypeScriptParser.Colon, 0); };
    CaseClauseContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(CaseClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_caseClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClause) {
            listener.enterCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClause) {
            listener.exitCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClauseContext = CaseClauseContext;
var DefaultClauseContext = /** @class */ (function (_super) {
    __extends(DefaultClauseContext, _super);
    function DefaultClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultClauseContext.prototype.Default = function () { return this.getToken(TypeScriptParser.Default, 0); };
    DefaultClauseContext.prototype.Colon = function () { return this.getToken(TypeScriptParser.Colon, 0); };
    DefaultClauseContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(DefaultClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_defaultClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultClause) {
            listener.enterDefaultClause(this);
        }
    };
    // @Override
    DefaultClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultClause) {
            listener.exitDefaultClause(this);
        }
    };
    // @Override
    DefaultClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultClause) {
            return visitor.visitDefaultClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultClauseContext = DefaultClauseContext;
var LabelledStatementContext = /** @class */ (function (_super) {
    __extends(LabelledStatementContext, _super);
    function LabelledStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelledStatementContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    LabelledStatementContext.prototype.Colon = function () { return this.getToken(TypeScriptParser.Colon, 0); };
    LabelledStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(LabelledStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_labelledStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelledStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterLabelledStatement) {
            listener.enterLabelledStatement(this);
        }
    };
    // @Override
    LabelledStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitLabelledStatement) {
            listener.exitLabelledStatement(this);
        }
    };
    // @Override
    LabelledStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitLabelledStatement) {
            return visitor.visitLabelledStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelledStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelledStatementContext = LabelledStatementContext;
var ThrowStatementContext = /** @class */ (function (_super) {
    __extends(ThrowStatementContext, _super);
    function ThrowStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowStatementContext.prototype.Throw = function () { return this.getToken(TypeScriptParser.Throw, 0); };
    ThrowStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ThrowStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(ThrowStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_throwStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowStatement) {
            return visitor.visitThrowStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowStatementContext = ThrowStatementContext;
var TryStatementContext = /** @class */ (function (_super) {
    __extends(TryStatementContext, _super);
    function TryStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryStatementContext.prototype.Try = function () { return this.getToken(TypeScriptParser.Try, 0); };
    TryStatementContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    TryStatementContext.prototype.catchProduction = function () {
        return this.tryGetRuleContext(0, CatchProductionContext);
    };
    TryStatementContext.prototype.finallyProduction = function () {
        return this.tryGetRuleContext(0, FinallyProductionContext);
    };
    Object.defineProperty(TryStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_tryStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryStatementContext = TryStatementContext;
var CatchProductionContext = /** @class */ (function (_super) {
    __extends(CatchProductionContext, _super);
    function CatchProductionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchProductionContext.prototype.Catch = function () { return this.getToken(TypeScriptParser.Catch, 0); };
    CatchProductionContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    CatchProductionContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    CatchProductionContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    CatchProductionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(CatchProductionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_catchProduction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchProductionContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchProduction) {
            listener.enterCatchProduction(this);
        }
    };
    // @Override
    CatchProductionContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchProduction) {
            listener.exitCatchProduction(this);
        }
    };
    // @Override
    CatchProductionContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchProduction) {
            return visitor.visitCatchProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchProductionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchProductionContext = CatchProductionContext;
var FinallyProductionContext = /** @class */ (function (_super) {
    __extends(FinallyProductionContext, _super);
    function FinallyProductionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyProductionContext.prototype.Finally = function () { return this.getToken(TypeScriptParser.Finally, 0); };
    FinallyProductionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(FinallyProductionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_finallyProduction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyProductionContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyProduction) {
            listener.enterFinallyProduction(this);
        }
    };
    // @Override
    FinallyProductionContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyProduction) {
            listener.exitFinallyProduction(this);
        }
    };
    // @Override
    FinallyProductionContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyProduction) {
            return visitor.visitFinallyProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyProductionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyProductionContext = FinallyProductionContext;
var DebuggerStatementContext = /** @class */ (function (_super) {
    __extends(DebuggerStatementContext, _super);
    function DebuggerStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DebuggerStatementContext.prototype.Debugger = function () { return this.getToken(TypeScriptParser.Debugger, 0); };
    DebuggerStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(DebuggerStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_debuggerStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DebuggerStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDebuggerStatement) {
            listener.enterDebuggerStatement(this);
        }
    };
    // @Override
    DebuggerStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDebuggerStatement) {
            listener.exitDebuggerStatement(this);
        }
    };
    // @Override
    DebuggerStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDebuggerStatement) {
            return visitor.visitDebuggerStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DebuggerStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DebuggerStatementContext = DebuggerStatementContext;
var FunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(FunctionDeclarationContext, _super);
    function FunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDeclarationContext.prototype.Function = function () { return this.getToken(TypeScriptParser.Function, 0); };
    FunctionDeclarationContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    FunctionDeclarationContext.prototype.callSignature = function () {
        return this.getRuleContext(0, CallSignatureContext);
    };
    FunctionDeclarationContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    FunctionDeclarationContext.prototype.OpenBrace = function () { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); };
    FunctionDeclarationContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    FunctionDeclarationContext.prototype.CloseBrace = function () { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); };
    Object.defineProperty(FunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_functionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDeclarationContext = FunctionDeclarationContext;
var ClassDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassDeclarationContext, _super);
    function ClassDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDeclarationContext.prototype.Class = function () { return this.getToken(TypeScriptParser.Class, 0); };
    ClassDeclarationContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    ClassDeclarationContext.prototype.classHeritage = function () {
        return this.getRuleContext(0, ClassHeritageContext);
    };
    ClassDeclarationContext.prototype.classTail = function () {
        return this.getRuleContext(0, ClassTailContext);
    };
    ClassDeclarationContext.prototype.Abstract = function () { return this.tryGetToken(TypeScriptParser.Abstract, 0); };
    ClassDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(ClassDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_classDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDeclarationContext = ClassDeclarationContext;
var ClassHeritageContext = /** @class */ (function (_super) {
    __extends(ClassHeritageContext, _super);
    function ClassHeritageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassHeritageContext.prototype.classExtendsClause = function () {
        return this.tryGetRuleContext(0, ClassExtendsClauseContext);
    };
    ClassHeritageContext.prototype.implementsClause = function () {
        return this.tryGetRuleContext(0, ImplementsClauseContext);
    };
    Object.defineProperty(ClassHeritageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_classHeritage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassHeritageContext.prototype.enterRule = function (listener) {
        if (listener.enterClassHeritage) {
            listener.enterClassHeritage(this);
        }
    };
    // @Override
    ClassHeritageContext.prototype.exitRule = function (listener) {
        if (listener.exitClassHeritage) {
            listener.exitClassHeritage(this);
        }
    };
    // @Override
    ClassHeritageContext.prototype.accept = function (visitor) {
        if (visitor.visitClassHeritage) {
            return visitor.visitClassHeritage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassHeritageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassHeritageContext = ClassHeritageContext;
var ClassTailContext = /** @class */ (function (_super) {
    __extends(ClassTailContext, _super);
    function ClassTailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassTailContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    ClassTailContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    ClassTailContext.prototype.classElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassElementContext);
        }
        else {
            return this.getRuleContext(i, ClassElementContext);
        }
    };
    Object.defineProperty(ClassTailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_classTail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassTailContext.prototype.enterRule = function (listener) {
        if (listener.enterClassTail) {
            listener.enterClassTail(this);
        }
    };
    // @Override
    ClassTailContext.prototype.exitRule = function (listener) {
        if (listener.exitClassTail) {
            listener.exitClassTail(this);
        }
    };
    // @Override
    ClassTailContext.prototype.accept = function (visitor) {
        if (visitor.visitClassTail) {
            return visitor.visitClassTail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassTailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassTailContext = ClassTailContext;
var ClassExtendsClauseContext = /** @class */ (function (_super) {
    __extends(ClassExtendsClauseContext, _super);
    function ClassExtendsClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassExtendsClauseContext.prototype.Extends = function () { return this.getToken(TypeScriptParser.Extends, 0); };
    ClassExtendsClauseContext.prototype.typeReference = function () {
        return this.getRuleContext(0, TypeReferenceContext);
    };
    Object.defineProperty(ClassExtendsClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_classExtendsClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassExtendsClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterClassExtendsClause) {
            listener.enterClassExtendsClause(this);
        }
    };
    // @Override
    ClassExtendsClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitClassExtendsClause) {
            listener.exitClassExtendsClause(this);
        }
    };
    // @Override
    ClassExtendsClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitClassExtendsClause) {
            return visitor.visitClassExtendsClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassExtendsClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassExtendsClauseContext = ClassExtendsClauseContext;
var ImplementsClauseContext = /** @class */ (function (_super) {
    __extends(ImplementsClauseContext, _super);
    function ImplementsClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplementsClauseContext.prototype.Implements = function () { return this.getToken(TypeScriptParser.Implements, 0); };
    ImplementsClauseContext.prototype.classOrInterfaceTypeList = function () {
        return this.getRuleContext(0, ClassOrInterfaceTypeListContext);
    };
    Object.defineProperty(ImplementsClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_implementsClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplementsClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterImplementsClause) {
            listener.enterImplementsClause(this);
        }
    };
    // @Override
    ImplementsClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitImplementsClause) {
            listener.exitImplementsClause(this);
        }
    };
    // @Override
    ImplementsClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitImplementsClause) {
            return visitor.visitImplementsClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplementsClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplementsClauseContext = ImplementsClauseContext;
var ClassElementContext = /** @class */ (function (_super) {
    __extends(ClassElementContext, _super);
    function ClassElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassElementContext.prototype.constructorDeclaration = function () {
        return this.tryGetRuleContext(0, ConstructorDeclarationContext);
    };
    ClassElementContext.prototype.propertyMemberDeclaration = function () {
        return this.tryGetRuleContext(0, PropertyMemberDeclarationContext);
    };
    ClassElementContext.prototype.indexMemberDeclaration = function () {
        return this.tryGetRuleContext(0, IndexMemberDeclarationContext);
    };
    ClassElementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Object.defineProperty(ClassElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_classElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassElementContext.prototype.enterRule = function (listener) {
        if (listener.enterClassElement) {
            listener.enterClassElement(this);
        }
    };
    // @Override
    ClassElementContext.prototype.exitRule = function (listener) {
        if (listener.exitClassElement) {
            listener.exitClassElement(this);
        }
    };
    // @Override
    ClassElementContext.prototype.accept = function (visitor) {
        if (visitor.visitClassElement) {
            return visitor.visitClassElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassElementContext = ClassElementContext;
var PropertyMemberDeclarationContext = /** @class */ (function (_super) {
    __extends(PropertyMemberDeclarationContext, _super);
    function PropertyMemberDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyMemberDeclarationContext.prototype.propertyMemberBase = function () {
        return this.tryGetRuleContext(0, PropertyMemberBaseContext);
    };
    PropertyMemberDeclarationContext.prototype.propertyName = function () {
        return this.tryGetRuleContext(0, PropertyNameContext);
    };
    PropertyMemberDeclarationContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    PropertyMemberDeclarationContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    PropertyMemberDeclarationContext.prototype.initializer = function () {
        return this.tryGetRuleContext(0, InitializerContext);
    };
    PropertyMemberDeclarationContext.prototype.callSignature = function () {
        return this.tryGetRuleContext(0, CallSignatureContext);
    };
    PropertyMemberDeclarationContext.prototype.OpenBrace = function () { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); };
    PropertyMemberDeclarationContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    PropertyMemberDeclarationContext.prototype.CloseBrace = function () { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); };
    PropertyMemberDeclarationContext.prototype.getAccessor = function () {
        return this.tryGetRuleContext(0, GetAccessorContext);
    };
    PropertyMemberDeclarationContext.prototype.setAccessor = function () {
        return this.tryGetRuleContext(0, SetAccessorContext);
    };
    PropertyMemberDeclarationContext.prototype.abstractDeclaration = function () {
        return this.tryGetRuleContext(0, AbstractDeclarationContext);
    };
    Object.defineProperty(PropertyMemberDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_propertyMemberDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyMemberDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyMemberDeclaration) {
            listener.enterPropertyMemberDeclaration(this);
        }
    };
    // @Override
    PropertyMemberDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyMemberDeclaration) {
            listener.exitPropertyMemberDeclaration(this);
        }
    };
    // @Override
    PropertyMemberDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyMemberDeclaration) {
            return visitor.visitPropertyMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyMemberDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyMemberDeclarationContext = PropertyMemberDeclarationContext;
var PropertyMemberBaseContext = /** @class */ (function (_super) {
    __extends(PropertyMemberBaseContext, _super);
    function PropertyMemberBaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyMemberBaseContext.prototype.Async = function () { return this.tryGetToken(TypeScriptParser.Async, 0); };
    PropertyMemberBaseContext.prototype.accessibilityModifier = function () {
        return this.tryGetRuleContext(0, AccessibilityModifierContext);
    };
    PropertyMemberBaseContext.prototype.Static = function () { return this.tryGetToken(TypeScriptParser.Static, 0); };
    PropertyMemberBaseContext.prototype.ReadOnly = function () { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); };
    Object.defineProperty(PropertyMemberBaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_propertyMemberBase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyMemberBaseContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyMemberBase) {
            listener.enterPropertyMemberBase(this);
        }
    };
    // @Override
    PropertyMemberBaseContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyMemberBase) {
            listener.exitPropertyMemberBase(this);
        }
    };
    // @Override
    PropertyMemberBaseContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyMemberBase) {
            return visitor.visitPropertyMemberBase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyMemberBaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyMemberBaseContext = PropertyMemberBaseContext;
var IndexMemberDeclarationContext = /** @class */ (function (_super) {
    __extends(IndexMemberDeclarationContext, _super);
    function IndexMemberDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexMemberDeclarationContext.prototype.indexSignature = function () {
        return this.getRuleContext(0, IndexSignatureContext);
    };
    IndexMemberDeclarationContext.prototype.SemiColon = function () { return this.getToken(TypeScriptParser.SemiColon, 0); };
    Object.defineProperty(IndexMemberDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_indexMemberDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexMemberDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexMemberDeclaration) {
            listener.enterIndexMemberDeclaration(this);
        }
    };
    // @Override
    IndexMemberDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexMemberDeclaration) {
            listener.exitIndexMemberDeclaration(this);
        }
    };
    // @Override
    IndexMemberDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexMemberDeclaration) {
            return visitor.visitIndexMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexMemberDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexMemberDeclarationContext = IndexMemberDeclarationContext;
var GeneratorMethodContext = /** @class */ (function (_super) {
    __extends(GeneratorMethodContext, _super);
    function GeneratorMethodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneratorMethodContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    GeneratorMethodContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    GeneratorMethodContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    GeneratorMethodContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    GeneratorMethodContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    GeneratorMethodContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    GeneratorMethodContext.prototype.Multiply = function () { return this.tryGetToken(TypeScriptParser.Multiply, 0); };
    GeneratorMethodContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(GeneratorMethodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_generatorMethod; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneratorMethodContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneratorMethod) {
            listener.enterGeneratorMethod(this);
        }
    };
    // @Override
    GeneratorMethodContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneratorMethod) {
            listener.exitGeneratorMethod(this);
        }
    };
    // @Override
    GeneratorMethodContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneratorMethod) {
            return visitor.visitGeneratorMethod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneratorMethodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneratorMethodContext = GeneratorMethodContext;
var GeneratorFunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(GeneratorFunctionDeclarationContext, _super);
    function GeneratorFunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneratorFunctionDeclarationContext.prototype.Function = function () { return this.getToken(TypeScriptParser.Function, 0); };
    GeneratorFunctionDeclarationContext.prototype.Multiply = function () { return this.getToken(TypeScriptParser.Multiply, 0); };
    GeneratorFunctionDeclarationContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    GeneratorFunctionDeclarationContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    GeneratorFunctionDeclarationContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    GeneratorFunctionDeclarationContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    GeneratorFunctionDeclarationContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    GeneratorFunctionDeclarationContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    GeneratorFunctionDeclarationContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(GeneratorFunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_generatorFunctionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneratorFunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneratorFunctionDeclaration) {
            listener.enterGeneratorFunctionDeclaration(this);
        }
    };
    // @Override
    GeneratorFunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneratorFunctionDeclaration) {
            listener.exitGeneratorFunctionDeclaration(this);
        }
    };
    // @Override
    GeneratorFunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneratorFunctionDeclaration) {
            return visitor.visitGeneratorFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneratorFunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneratorFunctionDeclarationContext = GeneratorFunctionDeclarationContext;
var GeneratorBlockContext = /** @class */ (function (_super) {
    __extends(GeneratorBlockContext, _super);
    function GeneratorBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneratorBlockContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    GeneratorBlockContext.prototype.generatorDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GeneratorDefinitionContext);
        }
        else {
            return this.getRuleContext(i, GeneratorDefinitionContext);
        }
    };
    GeneratorBlockContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    GeneratorBlockContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(GeneratorBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_generatorBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneratorBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneratorBlock) {
            listener.enterGeneratorBlock(this);
        }
    };
    // @Override
    GeneratorBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneratorBlock) {
            listener.exitGeneratorBlock(this);
        }
    };
    // @Override
    GeneratorBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneratorBlock) {
            return visitor.visitGeneratorBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneratorBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneratorBlockContext = GeneratorBlockContext;
var GeneratorDefinitionContext = /** @class */ (function (_super) {
    __extends(GeneratorDefinitionContext, _super);
    function GeneratorDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneratorDefinitionContext.prototype.Multiply = function () { return this.getToken(TypeScriptParser.Multiply, 0); };
    GeneratorDefinitionContext.prototype.iteratorDefinition = function () {
        return this.getRuleContext(0, IteratorDefinitionContext);
    };
    Object.defineProperty(GeneratorDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_generatorDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneratorDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneratorDefinition) {
            listener.enterGeneratorDefinition(this);
        }
    };
    // @Override
    GeneratorDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneratorDefinition) {
            listener.exitGeneratorDefinition(this);
        }
    };
    // @Override
    GeneratorDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneratorDefinition) {
            return visitor.visitGeneratorDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneratorDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneratorDefinitionContext = GeneratorDefinitionContext;
var IteratorBlockContext = /** @class */ (function (_super) {
    __extends(IteratorBlockContext, _super);
    function IteratorBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IteratorBlockContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    IteratorBlockContext.prototype.iteratorDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IteratorDefinitionContext);
        }
        else {
            return this.getRuleContext(i, IteratorDefinitionContext);
        }
    };
    IteratorBlockContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    IteratorBlockContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(IteratorBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_iteratorBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IteratorBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterIteratorBlock) {
            listener.enterIteratorBlock(this);
        }
    };
    // @Override
    IteratorBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitIteratorBlock) {
            listener.exitIteratorBlock(this);
        }
    };
    // @Override
    IteratorBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitIteratorBlock) {
            return visitor.visitIteratorBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IteratorBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IteratorBlockContext = IteratorBlockContext;
var IteratorDefinitionContext = /** @class */ (function (_super) {
    __extends(IteratorDefinitionContext, _super);
    function IteratorDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IteratorDefinitionContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    IteratorDefinitionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    IteratorDefinitionContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    IteratorDefinitionContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    IteratorDefinitionContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    IteratorDefinitionContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    IteratorDefinitionContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    IteratorDefinitionContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    IteratorDefinitionContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(IteratorDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_iteratorDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IteratorDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterIteratorDefinition) {
            listener.enterIteratorDefinition(this);
        }
    };
    // @Override
    IteratorDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitIteratorDefinition) {
            listener.exitIteratorDefinition(this);
        }
    };
    // @Override
    IteratorDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitIteratorDefinition) {
            return visitor.visitIteratorDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IteratorDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IteratorDefinitionContext = IteratorDefinitionContext;
var FormalParameterListContext = /** @class */ (function (_super) {
    __extends(FormalParameterListContext, _super);
    function FormalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterListContext.prototype.formalParameterArg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterArgContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterArgContext);
        }
    };
    FormalParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    FormalParameterListContext.prototype.lastFormalParameterArg = function () {
        return this.tryGetRuleContext(0, LastFormalParameterArgContext);
    };
    FormalParameterListContext.prototype.arrayLiteral = function () {
        return this.tryGetRuleContext(0, ArrayLiteralContext);
    };
    FormalParameterListContext.prototype.objectLiteral = function () {
        return this.tryGetRuleContext(0, ObjectLiteralContext);
    };
    FormalParameterListContext.prototype.Colon = function () { return this.tryGetToken(TypeScriptParser.Colon, 0); };
    FormalParameterListContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_formalParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterListContext = FormalParameterListContext;
var FormalParameterArgContext = /** @class */ (function (_super) {
    __extends(FormalParameterArgContext, _super);
    function FormalParameterArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterArgContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    FormalParameterArgContext.prototype.accessibilityModifier = function () {
        return this.tryGetRuleContext(0, AccessibilityModifierContext);
    };
    FormalParameterArgContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    FormalParameterArgContext.prototype.Assign = function () { return this.tryGetToken(TypeScriptParser.Assign, 0); };
    FormalParameterArgContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(FormalParameterArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_formalParameterArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterArgContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterArg) {
            listener.enterFormalParameterArg(this);
        }
    };
    // @Override
    FormalParameterArgContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterArg) {
            listener.exitFormalParameterArg(this);
        }
    };
    // @Override
    FormalParameterArgContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterArg) {
            return visitor.visitFormalParameterArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterArgContext = FormalParameterArgContext;
var LastFormalParameterArgContext = /** @class */ (function (_super) {
    __extends(LastFormalParameterArgContext, _super);
    function LastFormalParameterArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LastFormalParameterArgContext.prototype.Ellipsis = function () { return this.getToken(TypeScriptParser.Ellipsis, 0); };
    LastFormalParameterArgContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    Object.defineProperty(LastFormalParameterArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_lastFormalParameterArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LastFormalParameterArgContext.prototype.enterRule = function (listener) {
        if (listener.enterLastFormalParameterArg) {
            listener.enterLastFormalParameterArg(this);
        }
    };
    // @Override
    LastFormalParameterArgContext.prototype.exitRule = function (listener) {
        if (listener.exitLastFormalParameterArg) {
            listener.exitLastFormalParameterArg(this);
        }
    };
    // @Override
    LastFormalParameterArgContext.prototype.accept = function (visitor) {
        if (visitor.visitLastFormalParameterArg) {
            return visitor.visitLastFormalParameterArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LastFormalParameterArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LastFormalParameterArgContext = LastFormalParameterArgContext;
var FunctionBodyContext = /** @class */ (function (_super) {
    __extends(FunctionBodyContext, _super);
    function FunctionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionBodyContext.prototype.sourceElements = function () {
        return this.tryGetRuleContext(0, SourceElementsContext);
    };
    Object.defineProperty(FunctionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_functionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionBodyContext = FunctionBodyContext;
var SourceElementsContext = /** @class */ (function (_super) {
    __extends(SourceElementsContext, _super);
    function SourceElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceElementsContext.prototype.sourceElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SourceElementContext);
        }
        else {
            return this.getRuleContext(i, SourceElementContext);
        }
    };
    Object.defineProperty(SourceElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_sourceElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceElements) {
            listener.enterSourceElements(this);
        }
    };
    // @Override
    SourceElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceElements) {
            listener.exitSourceElements(this);
        }
    };
    // @Override
    SourceElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceElements) {
            return visitor.visitSourceElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceElementsContext = SourceElementsContext;
var ArrayLiteralContext = /** @class */ (function (_super) {
    __extends(ArrayLiteralContext, _super);
    function ArrayLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayLiteralContext.prototype.OpenBracket = function () { return this.tryGetToken(TypeScriptParser.OpenBracket, 0); };
    ArrayLiteralContext.prototype.CloseBracket = function () { return this.tryGetToken(TypeScriptParser.CloseBracket, 0); };
    ArrayLiteralContext.prototype.elementList = function () {
        return this.tryGetRuleContext(0, ElementListContext);
    };
    Object.defineProperty(ArrayLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_arrayLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLiteral) {
            listener.enterArrayLiteral(this);
        }
    };
    // @Override
    ArrayLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLiteral) {
            listener.exitArrayLiteral(this);
        }
    };
    // @Override
    ArrayLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLiteral) {
            return visitor.visitArrayLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayLiteralContext = ArrayLiteralContext;
var ElementListContext = /** @class */ (function (_super) {
    __extends(ElementListContext, _super);
    function ElementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementListContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ElementListContext.prototype.lastElement = function () {
        return this.tryGetRuleContext(0, LastElementContext);
    };
    ElementListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ElementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_elementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementListContext.prototype.enterRule = function (listener) {
        if (listener.enterElementList) {
            listener.enterElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.exitRule = function (listener) {
        if (listener.exitElementList) {
            listener.exitElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.accept = function (visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementListContext = ElementListContext;
var LastElementContext = /** @class */ (function (_super) {
    __extends(LastElementContext, _super);
    function LastElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LastElementContext.prototype.Ellipsis = function () { return this.getToken(TypeScriptParser.Ellipsis, 0); };
    LastElementContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    LastElementContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(LastElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_lastElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LastElementContext.prototype.enterRule = function (listener) {
        if (listener.enterLastElement) {
            listener.enterLastElement(this);
        }
    };
    // @Override
    LastElementContext.prototype.exitRule = function (listener) {
        if (listener.exitLastElement) {
            listener.exitLastElement(this);
        }
    };
    // @Override
    LastElementContext.prototype.accept = function (visitor) {
        if (visitor.visitLastElement) {
            return visitor.visitLastElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LastElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LastElementContext = LastElementContext;
var ObjectLiteralContext = /** @class */ (function (_super) {
    __extends(ObjectLiteralContext, _super);
    function ObjectLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectLiteralContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    ObjectLiteralContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    ObjectLiteralContext.prototype.propertyAssignment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyAssignmentContext);
        }
        else {
            return this.getRuleContext(i, PropertyAssignmentContext);
        }
    };
    ObjectLiteralContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ObjectLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_objectLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectLiteral) {
            listener.enterObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectLiteral) {
            listener.exitObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectLiteralContext = ObjectLiteralContext;
var PropertyAssignmentContext = /** @class */ (function (_super) {
    __extends(PropertyAssignmentContext, _super);
    function PropertyAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PropertyAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_propertyAssignment; },
        enumerable: true,
        configurable: true
    });
    PropertyAssignmentContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return PropertyAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyAssignmentContext = PropertyAssignmentContext;
var PropertyExpressionAssignmentContext = /** @class */ (function (_super) {
    __extends(PropertyExpressionAssignmentContext, _super);
    function PropertyExpressionAssignmentContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyExpressionAssignmentContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    PropertyExpressionAssignmentContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PropertyExpressionAssignmentContext.prototype.Colon = function () { return this.tryGetToken(TypeScriptParser.Colon, 0); };
    PropertyExpressionAssignmentContext.prototype.Assign = function () { return this.tryGetToken(TypeScriptParser.Assign, 0); };
    // @Override
    PropertyExpressionAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyExpressionAssignment) {
            listener.enterPropertyExpressionAssignment(this);
        }
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyExpressionAssignment) {
            listener.exitPropertyExpressionAssignment(this);
        }
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyExpressionAssignment) {
            return visitor.visitPropertyExpressionAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyExpressionAssignmentContext;
}(PropertyAssignmentContext));
exports.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;
var ComputedPropertyExpressionAssignmentContext = /** @class */ (function (_super) {
    __extends(ComputedPropertyExpressionAssignmentContext, _super);
    function ComputedPropertyExpressionAssignmentContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ComputedPropertyExpressionAssignmentContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    ComputedPropertyExpressionAssignmentContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ComputedPropertyExpressionAssignmentContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    ComputedPropertyExpressionAssignmentContext.prototype.Colon = function () { return this.getToken(TypeScriptParser.Colon, 0); };
    // @Override
    ComputedPropertyExpressionAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterComputedPropertyExpressionAssignment) {
            listener.enterComputedPropertyExpressionAssignment(this);
        }
    };
    // @Override
    ComputedPropertyExpressionAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitComputedPropertyExpressionAssignment) {
            listener.exitComputedPropertyExpressionAssignment(this);
        }
    };
    // @Override
    ComputedPropertyExpressionAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitComputedPropertyExpressionAssignment) {
            return visitor.visitComputedPropertyExpressionAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComputedPropertyExpressionAssignmentContext;
}(PropertyAssignmentContext));
exports.ComputedPropertyExpressionAssignmentContext = ComputedPropertyExpressionAssignmentContext;
var PropertyGetterContext = /** @class */ (function (_super) {
    __extends(PropertyGetterContext, _super);
    function PropertyGetterContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyGetterContext.prototype.getAccessor = function () {
        return this.getRuleContext(0, GetAccessorContext);
    };
    // @Override
    PropertyGetterContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyGetter) {
            listener.enterPropertyGetter(this);
        }
    };
    // @Override
    PropertyGetterContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyGetter) {
            listener.exitPropertyGetter(this);
        }
    };
    // @Override
    PropertyGetterContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyGetter) {
            return visitor.visitPropertyGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyGetterContext;
}(PropertyAssignmentContext));
exports.PropertyGetterContext = PropertyGetterContext;
var PropertySetterContext = /** @class */ (function (_super) {
    __extends(PropertySetterContext, _super);
    function PropertySetterContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertySetterContext.prototype.setAccessor = function () {
        return this.getRuleContext(0, SetAccessorContext);
    };
    // @Override
    PropertySetterContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertySetter) {
            listener.enterPropertySetter(this);
        }
    };
    // @Override
    PropertySetterContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertySetter) {
            listener.exitPropertySetter(this);
        }
    };
    // @Override
    PropertySetterContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertySetter) {
            return visitor.visitPropertySetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertySetterContext;
}(PropertyAssignmentContext));
exports.PropertySetterContext = PropertySetterContext;
var MethodPropertyContext = /** @class */ (function (_super) {
    __extends(MethodPropertyContext, _super);
    function MethodPropertyContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MethodPropertyContext.prototype.generatorMethod = function () {
        return this.getRuleContext(0, GeneratorMethodContext);
    };
    // @Override
    MethodPropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodProperty) {
            listener.enterMethodProperty(this);
        }
    };
    // @Override
    MethodPropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodProperty) {
            listener.exitMethodProperty(this);
        }
    };
    // @Override
    MethodPropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodProperty) {
            return visitor.visitMethodProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodPropertyContext;
}(PropertyAssignmentContext));
exports.MethodPropertyContext = MethodPropertyContext;
var PropertyShorthandContext = /** @class */ (function (_super) {
    __extends(PropertyShorthandContext, _super);
    function PropertyShorthandContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyShorthandContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    // @Override
    PropertyShorthandContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyShorthand) {
            listener.enterPropertyShorthand(this);
        }
    };
    // @Override
    PropertyShorthandContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyShorthand) {
            listener.exitPropertyShorthand(this);
        }
    };
    // @Override
    PropertyShorthandContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyShorthand) {
            return visitor.visitPropertyShorthand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyShorthandContext;
}(PropertyAssignmentContext));
exports.PropertyShorthandContext = PropertyShorthandContext;
var RestParameterInObjectContext = /** @class */ (function (_super) {
    __extends(RestParameterInObjectContext, _super);
    function RestParameterInObjectContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    RestParameterInObjectContext.prototype.restParameter = function () {
        return this.getRuleContext(0, RestParameterContext);
    };
    // @Override
    RestParameterInObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterRestParameterInObject) {
            listener.enterRestParameterInObject(this);
        }
    };
    // @Override
    RestParameterInObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitRestParameterInObject) {
            listener.exitRestParameterInObject(this);
        }
    };
    // @Override
    RestParameterInObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitRestParameterInObject) {
            return visitor.visitRestParameterInObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RestParameterInObjectContext;
}(PropertyAssignmentContext));
exports.RestParameterInObjectContext = RestParameterInObjectContext;
var GetAccessorContext = /** @class */ (function (_super) {
    __extends(GetAccessorContext, _super);
    function GetAccessorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetAccessorContext.prototype.getter = function () {
        return this.getRuleContext(0, GetterContext);
    };
    GetAccessorContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    GetAccessorContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    GetAccessorContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    GetAccessorContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    GetAccessorContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    GetAccessorContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(GetAccessorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_getAccessor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetAccessorContext.prototype.enterRule = function (listener) {
        if (listener.enterGetAccessor) {
            listener.enterGetAccessor(this);
        }
    };
    // @Override
    GetAccessorContext.prototype.exitRule = function (listener) {
        if (listener.exitGetAccessor) {
            listener.exitGetAccessor(this);
        }
    };
    // @Override
    GetAccessorContext.prototype.accept = function (visitor) {
        if (visitor.visitGetAccessor) {
            return visitor.visitGetAccessor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetAccessorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetAccessorContext = GetAccessorContext;
var SetAccessorContext = /** @class */ (function (_super) {
    __extends(SetAccessorContext, _super);
    function SetAccessorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetAccessorContext.prototype.setter = function () {
        return this.getRuleContext(0, SetterContext);
    };
    SetAccessorContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    SetAccessorContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    SetAccessorContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    SetAccessorContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    SetAccessorContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    SetAccessorContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    SetAccessorContext.prototype.bindingPattern = function () {
        return this.tryGetRuleContext(0, BindingPatternContext);
    };
    SetAccessorContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(SetAccessorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_setAccessor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetAccessorContext.prototype.enterRule = function (listener) {
        if (listener.enterSetAccessor) {
            listener.enterSetAccessor(this);
        }
    };
    // @Override
    SetAccessorContext.prototype.exitRule = function (listener) {
        if (listener.exitSetAccessor) {
            listener.exitSetAccessor(this);
        }
    };
    // @Override
    SetAccessorContext.prototype.accept = function (visitor) {
        if (visitor.visitSetAccessor) {
            return visitor.visitSetAccessor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetAccessorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetAccessorContext = SetAccessorContext;
var PropertyNameContext = /** @class */ (function (_super) {
    __extends(PropertyNameContext, _super);
    function PropertyNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyNameContext.prototype.identifierName = function () {
        return this.tryGetRuleContext(0, IdentifierNameContext);
    };
    PropertyNameContext.prototype.StringLiteral = function () { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); };
    PropertyNameContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    Object.defineProperty(PropertyNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_propertyName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyNameContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyName) {
            listener.enterPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyName) {
            listener.exitPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyName) {
            return visitor.visitPropertyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyNameContext = PropertyNameContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ArgumentsContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    ArgumentsContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ArgumentsContext.prototype.lastArgument = function () {
        return this.tryGetRuleContext(0, LastArgumentContext);
    };
    ArgumentsContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsContext = ArgumentsContext;
var LastArgumentContext = /** @class */ (function (_super) {
    __extends(LastArgumentContext, _super);
    function LastArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LastArgumentContext.prototype.Ellipsis = function () { return this.getToken(TypeScriptParser.Ellipsis, 0); };
    LastArgumentContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    Object.defineProperty(LastArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_lastArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LastArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterLastArgument) {
            listener.enterLastArgument(this);
        }
    };
    // @Override
    LastArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitLastArgument) {
            listener.exitLastArgument(this);
        }
    };
    // @Override
    LastArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitLastArgument) {
            return visitor.visitLastArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LastArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LastArgumentContext = LastArgumentContext;
var ExpressionSequenceContext = /** @class */ (function (_super) {
    __extends(ExpressionSequenceContext, _super);
    function ExpressionSequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionSequenceContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ExpressionSequenceContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(TypeScriptParser.Comma);
        }
        else {
            return this.getToken(TypeScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ExpressionSequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_expressionSequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionSequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionSequence) {
            listener.enterExpressionSequence(this);
        }
    };
    // @Override
    ExpressionSequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionSequence) {
            listener.exitExpressionSequence(this);
        }
    };
    // @Override
    ExpressionSequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionSequence) {
            return visitor.visitExpressionSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionSequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionSequenceContext = ExpressionSequenceContext;
var FunctionExpressionDeclarationContext = /** @class */ (function (_super) {
    __extends(FunctionExpressionDeclarationContext, _super);
    function FunctionExpressionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionExpressionDeclarationContext.prototype.Function = function () { return this.getToken(TypeScriptParser.Function, 0); };
    FunctionExpressionDeclarationContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    FunctionExpressionDeclarationContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    FunctionExpressionDeclarationContext.prototype.OpenBrace = function () { return this.getToken(TypeScriptParser.OpenBrace, 0); };
    FunctionExpressionDeclarationContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    FunctionExpressionDeclarationContext.prototype.CloseBrace = function () { return this.getToken(TypeScriptParser.CloseBrace, 0); };
    FunctionExpressionDeclarationContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    FunctionExpressionDeclarationContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    FunctionExpressionDeclarationContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(FunctionExpressionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_functionExpressionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionExpressionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionExpressionDeclaration) {
            listener.enterFunctionExpressionDeclaration(this);
        }
    };
    // @Override
    FunctionExpressionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionExpressionDeclaration) {
            listener.exitFunctionExpressionDeclaration(this);
        }
    };
    // @Override
    FunctionExpressionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionExpressionDeclaration) {
            return visitor.visitFunctionExpressionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionExpressionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionExpressionDeclarationContext = FunctionExpressionDeclarationContext;
var SingleExpressionContext = /** @class */ (function (_super) {
    __extends(SingleExpressionContext, _super);
    function SingleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SingleExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_singleExpression; },
        enumerable: true,
        configurable: true
    });
    SingleExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return SingleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SingleExpressionContext = SingleExpressionContext;
var FunctionExpressionContext = /** @class */ (function (_super) {
    __extends(FunctionExpressionContext, _super);
    function FunctionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionExpressionContext.prototype.functionExpressionDeclaration = function () {
        return this.getRuleContext(0, FunctionExpressionDeclarationContext);
    };
    // @Override
    FunctionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionExpression) {
            listener.enterFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionExpression) {
            listener.exitFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionExpression) {
            return visitor.visitFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionExpressionContext;
}(SingleExpressionContext));
exports.FunctionExpressionContext = FunctionExpressionContext;
var ArrowFunctionExpressionContext = /** @class */ (function (_super) {
    __extends(ArrowFunctionExpressionContext, _super);
    function ArrowFunctionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrowFunctionExpressionContext.prototype.arrowFunctionDeclaration = function () {
        return this.getRuleContext(0, ArrowFunctionDeclarationContext);
    };
    // @Override
    ArrowFunctionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowFunctionExpression) {
            listener.enterArrowFunctionExpression(this);
        }
    };
    // @Override
    ArrowFunctionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowFunctionExpression) {
            listener.exitArrowFunctionExpression(this);
        }
    };
    // @Override
    ArrowFunctionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowFunctionExpression) {
            return visitor.visitArrowFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowFunctionExpressionContext;
}(SingleExpressionContext));
exports.ArrowFunctionExpressionContext = ArrowFunctionExpressionContext;
var ClassExpressionContext = /** @class */ (function (_super) {
    __extends(ClassExpressionContext, _super);
    function ClassExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ClassExpressionContext.prototype.Class = function () { return this.getToken(TypeScriptParser.Class, 0); };
    ClassExpressionContext.prototype.classTail = function () {
        return this.getRuleContext(0, ClassTailContext);
    };
    ClassExpressionContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    // @Override
    ClassExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterClassExpression) {
            listener.enterClassExpression(this);
        }
    };
    // @Override
    ClassExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitClassExpression) {
            listener.exitClassExpression(this);
        }
    };
    // @Override
    ClassExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitClassExpression) {
            return visitor.visitClassExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassExpressionContext;
}(SingleExpressionContext));
exports.ClassExpressionContext = ClassExpressionContext;
var MemberIndexExpressionContext = /** @class */ (function (_super) {
    __extends(MemberIndexExpressionContext, _super);
    function MemberIndexExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MemberIndexExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    MemberIndexExpressionContext.prototype.OpenBracket = function () { return this.getToken(TypeScriptParser.OpenBracket, 0); };
    MemberIndexExpressionContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    MemberIndexExpressionContext.prototype.CloseBracket = function () { return this.getToken(TypeScriptParser.CloseBracket, 0); };
    // @Override
    MemberIndexExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberIndexExpression) {
            listener.enterMemberIndexExpression(this);
        }
    };
    // @Override
    MemberIndexExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberIndexExpression) {
            listener.exitMemberIndexExpression(this);
        }
    };
    // @Override
    MemberIndexExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberIndexExpression) {
            return visitor.visitMemberIndexExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberIndexExpressionContext;
}(SingleExpressionContext));
exports.MemberIndexExpressionContext = MemberIndexExpressionContext;
var MemberDotExpressionContext = /** @class */ (function (_super) {
    __extends(MemberDotExpressionContext, _super);
    function MemberDotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MemberDotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    MemberDotExpressionContext.prototype.Dot = function () { return this.getToken(TypeScriptParser.Dot, 0); };
    MemberDotExpressionContext.prototype.identifierName = function () {
        return this.getRuleContext(0, IdentifierNameContext);
    };
    // @Override
    MemberDotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberDotExpression) {
            listener.enterMemberDotExpression(this);
        }
    };
    // @Override
    MemberDotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberDotExpression) {
            listener.exitMemberDotExpression(this);
        }
    };
    // @Override
    MemberDotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberDotExpression) {
            return visitor.visitMemberDotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberDotExpressionContext;
}(SingleExpressionContext));
exports.MemberDotExpressionContext = MemberDotExpressionContext;
var ArgumentsExpressionContext = /** @class */ (function (_super) {
    __extends(ArgumentsExpressionContext, _super);
    function ArgumentsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArgumentsExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ArgumentsExpressionContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    // @Override
    ArgumentsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentsExpression) {
            listener.enterArgumentsExpression(this);
        }
    };
    // @Override
    ArgumentsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentsExpression) {
            listener.exitArgumentsExpression(this);
        }
    };
    // @Override
    ArgumentsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentsExpression) {
            return visitor.visitArgumentsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsExpressionContext;
}(SingleExpressionContext));
exports.ArgumentsExpressionContext = ArgumentsExpressionContext;
var NewExpressionContext = /** @class */ (function (_super) {
    __extends(NewExpressionContext, _super);
    function NewExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NewExpressionContext.prototype.New = function () { return this.getToken(TypeScriptParser.New, 0); };
    NewExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    NewExpressionContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    NewExpressionContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    // @Override
    NewExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNewExpression) {
            listener.enterNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNewExpression) {
            listener.exitNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNewExpression) {
            return visitor.visitNewExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewExpressionContext;
}(SingleExpressionContext));
exports.NewExpressionContext = NewExpressionContext;
var PostIncrementExpressionContext = /** @class */ (function (_super) {
    __extends(PostIncrementExpressionContext, _super);
    function PostIncrementExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PostIncrementExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PostIncrementExpressionContext.prototype.PlusPlus = function () { return this.getToken(TypeScriptParser.PlusPlus, 0); };
    // @Override
    PostIncrementExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostIncrementExpression) {
            listener.enterPostIncrementExpression(this);
        }
    };
    // @Override
    PostIncrementExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostIncrementExpression) {
            listener.exitPostIncrementExpression(this);
        }
    };
    // @Override
    PostIncrementExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostIncrementExpression) {
            return visitor.visitPostIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostIncrementExpressionContext;
}(SingleExpressionContext));
exports.PostIncrementExpressionContext = PostIncrementExpressionContext;
var PostDecreaseExpressionContext = /** @class */ (function (_super) {
    __extends(PostDecreaseExpressionContext, _super);
    function PostDecreaseExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PostDecreaseExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PostDecreaseExpressionContext.prototype.MinusMinus = function () { return this.getToken(TypeScriptParser.MinusMinus, 0); };
    // @Override
    PostDecreaseExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostDecreaseExpression) {
            listener.enterPostDecreaseExpression(this);
        }
    };
    // @Override
    PostDecreaseExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostDecreaseExpression) {
            listener.exitPostDecreaseExpression(this);
        }
    };
    // @Override
    PostDecreaseExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostDecreaseExpression) {
            return visitor.visitPostDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostDecreaseExpressionContext;
}(SingleExpressionContext));
exports.PostDecreaseExpressionContext = PostDecreaseExpressionContext;
var DeleteExpressionContext = /** @class */ (function (_super) {
    __extends(DeleteExpressionContext, _super);
    function DeleteExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DeleteExpressionContext.prototype.Delete = function () { return this.getToken(TypeScriptParser.Delete, 0); };
    DeleteExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    DeleteExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDeleteExpression) {
            listener.enterDeleteExpression(this);
        }
    };
    // @Override
    DeleteExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDeleteExpression) {
            listener.exitDeleteExpression(this);
        }
    };
    // @Override
    DeleteExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDeleteExpression) {
            return visitor.visitDeleteExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeleteExpressionContext;
}(SingleExpressionContext));
exports.DeleteExpressionContext = DeleteExpressionContext;
var VoidExpressionContext = /** @class */ (function (_super) {
    __extends(VoidExpressionContext, _super);
    function VoidExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    VoidExpressionContext.prototype.Void = function () { return this.getToken(TypeScriptParser.Void, 0); };
    VoidExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    VoidExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterVoidExpression) {
            listener.enterVoidExpression(this);
        }
    };
    // @Override
    VoidExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitVoidExpression) {
            listener.exitVoidExpression(this);
        }
    };
    // @Override
    VoidExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitVoidExpression) {
            return visitor.visitVoidExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VoidExpressionContext;
}(SingleExpressionContext));
exports.VoidExpressionContext = VoidExpressionContext;
var TypeofExpressionContext = /** @class */ (function (_super) {
    __extends(TypeofExpressionContext, _super);
    function TypeofExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TypeofExpressionContext.prototype.Typeof = function () { return this.getToken(TypeScriptParser.Typeof, 0); };
    TypeofExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    TypeofExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeofExpression) {
            listener.enterTypeofExpression(this);
        }
    };
    // @Override
    TypeofExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeofExpression) {
            listener.exitTypeofExpression(this);
        }
    };
    // @Override
    TypeofExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeofExpression) {
            return visitor.visitTypeofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeofExpressionContext;
}(SingleExpressionContext));
exports.TypeofExpressionContext = TypeofExpressionContext;
var PreIncrementExpressionContext = /** @class */ (function (_super) {
    __extends(PreIncrementExpressionContext, _super);
    function PreIncrementExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreIncrementExpressionContext.prototype.PlusPlus = function () { return this.getToken(TypeScriptParser.PlusPlus, 0); };
    PreIncrementExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PreIncrementExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreIncrementExpression) {
            listener.enterPreIncrementExpression(this);
        }
    };
    // @Override
    PreIncrementExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreIncrementExpression) {
            listener.exitPreIncrementExpression(this);
        }
    };
    // @Override
    PreIncrementExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreIncrementExpression) {
            return visitor.visitPreIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreIncrementExpressionContext;
}(SingleExpressionContext));
exports.PreIncrementExpressionContext = PreIncrementExpressionContext;
var PreDecreaseExpressionContext = /** @class */ (function (_super) {
    __extends(PreDecreaseExpressionContext, _super);
    function PreDecreaseExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreDecreaseExpressionContext.prototype.MinusMinus = function () { return this.getToken(TypeScriptParser.MinusMinus, 0); };
    PreDecreaseExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PreDecreaseExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreDecreaseExpression) {
            listener.enterPreDecreaseExpression(this);
        }
    };
    // @Override
    PreDecreaseExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreDecreaseExpression) {
            listener.exitPreDecreaseExpression(this);
        }
    };
    // @Override
    PreDecreaseExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreDecreaseExpression) {
            return visitor.visitPreDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreDecreaseExpressionContext;
}(SingleExpressionContext));
exports.PreDecreaseExpressionContext = PreDecreaseExpressionContext;
var UnaryPlusExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryPlusExpressionContext, _super);
    function UnaryPlusExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryPlusExpressionContext.prototype.Plus = function () { return this.getToken(TypeScriptParser.Plus, 0); };
    UnaryPlusExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    UnaryPlusExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryPlusExpression) {
            listener.enterUnaryPlusExpression(this);
        }
    };
    // @Override
    UnaryPlusExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryPlusExpression) {
            listener.exitUnaryPlusExpression(this);
        }
    };
    // @Override
    UnaryPlusExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryPlusExpression) {
            return visitor.visitUnaryPlusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryPlusExpressionContext;
}(SingleExpressionContext));
exports.UnaryPlusExpressionContext = UnaryPlusExpressionContext;
var UnaryMinusExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryMinusExpressionContext, _super);
    function UnaryMinusExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryMinusExpressionContext.prototype.Minus = function () { return this.getToken(TypeScriptParser.Minus, 0); };
    UnaryMinusExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    UnaryMinusExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryMinusExpression) {
            listener.enterUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryMinusExpression) {
            listener.exitUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryMinusExpression) {
            return visitor.visitUnaryMinusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryMinusExpressionContext;
}(SingleExpressionContext));
exports.UnaryMinusExpressionContext = UnaryMinusExpressionContext;
var BitNotExpressionContext = /** @class */ (function (_super) {
    __extends(BitNotExpressionContext, _super);
    function BitNotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitNotExpressionContext.prototype.BitNot = function () { return this.getToken(TypeScriptParser.BitNot, 0); };
    BitNotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    BitNotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitNotExpression) {
            listener.enterBitNotExpression(this);
        }
    };
    // @Override
    BitNotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitNotExpression) {
            listener.exitBitNotExpression(this);
        }
    };
    // @Override
    BitNotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitNotExpression) {
            return visitor.visitBitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitNotExpressionContext;
}(SingleExpressionContext));
exports.BitNotExpressionContext = BitNotExpressionContext;
var NotExpressionContext = /** @class */ (function (_super) {
    __extends(NotExpressionContext, _super);
    function NotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NotExpressionContext.prototype.Not = function () { return this.getToken(TypeScriptParser.Not, 0); };
    NotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    NotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNotExpression) {
            listener.enterNotExpression(this);
        }
    };
    // @Override
    NotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNotExpression) {
            listener.exitNotExpression(this);
        }
    };
    // @Override
    NotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotExpressionContext;
}(SingleExpressionContext));
exports.NotExpressionContext = NotExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MultiplicativeExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    MultiplicativeExpressionContext.prototype.Multiply = function () { return this.tryGetToken(TypeScriptParser.Multiply, 0); };
    MultiplicativeExpressionContext.prototype.Divide = function () { return this.tryGetToken(TypeScriptParser.Divide, 0); };
    MultiplicativeExpressionContext.prototype.Modulus = function () { return this.tryGetToken(TypeScriptParser.Modulus, 0); };
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
}(SingleExpressionContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AdditiveExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AdditiveExpressionContext.prototype.Plus = function () { return this.tryGetToken(TypeScriptParser.Plus, 0); };
    AdditiveExpressionContext.prototype.Minus = function () { return this.tryGetToken(TypeScriptParser.Minus, 0); };
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
}(SingleExpressionContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var BitShiftExpressionContext = /** @class */ (function (_super) {
    __extends(BitShiftExpressionContext, _super);
    function BitShiftExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitShiftExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitShiftExpressionContext.prototype.LeftShiftArithmetic = function () { return this.tryGetToken(TypeScriptParser.LeftShiftArithmetic, 0); };
    BitShiftExpressionContext.prototype.RightShiftArithmetic = function () { return this.tryGetToken(TypeScriptParser.RightShiftArithmetic, 0); };
    BitShiftExpressionContext.prototype.RightShiftLogical = function () { return this.tryGetToken(TypeScriptParser.RightShiftLogical, 0); };
    // @Override
    BitShiftExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitShiftExpression) {
            listener.enterBitShiftExpression(this);
        }
    };
    // @Override
    BitShiftExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitShiftExpression) {
            listener.exitBitShiftExpression(this);
        }
    };
    // @Override
    BitShiftExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitShiftExpression) {
            return visitor.visitBitShiftExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitShiftExpressionContext;
}(SingleExpressionContext));
exports.BitShiftExpressionContext = BitShiftExpressionContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    RelationalExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    RelationalExpressionContext.prototype.LessThan = function () { return this.tryGetToken(TypeScriptParser.LessThan, 0); };
    RelationalExpressionContext.prototype.MoreThan = function () { return this.tryGetToken(TypeScriptParser.MoreThan, 0); };
    RelationalExpressionContext.prototype.LessThanEquals = function () { return this.tryGetToken(TypeScriptParser.LessThanEquals, 0); };
    RelationalExpressionContext.prototype.GreaterThanEquals = function () { return this.tryGetToken(TypeScriptParser.GreaterThanEquals, 0); };
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
}(SingleExpressionContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var InstanceofExpressionContext = /** @class */ (function (_super) {
    __extends(InstanceofExpressionContext, _super);
    function InstanceofExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InstanceofExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    InstanceofExpressionContext.prototype.Instanceof = function () { return this.getToken(TypeScriptParser.Instanceof, 0); };
    // @Override
    InstanceofExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstanceofExpression) {
            listener.enterInstanceofExpression(this);
        }
    };
    // @Override
    InstanceofExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstanceofExpression) {
            listener.exitInstanceofExpression(this);
        }
    };
    // @Override
    InstanceofExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstanceofExpression) {
            return visitor.visitInstanceofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstanceofExpressionContext;
}(SingleExpressionContext));
exports.InstanceofExpressionContext = InstanceofExpressionContext;
var InExpressionContext = /** @class */ (function (_super) {
    __extends(InExpressionContext, _super);
    function InExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    InExpressionContext.prototype.In = function () { return this.getToken(TypeScriptParser.In, 0); };
    // @Override
    InExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInExpression) {
            listener.enterInExpression(this);
        }
    };
    // @Override
    InExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInExpression) {
            listener.exitInExpression(this);
        }
    };
    // @Override
    InExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInExpression) {
            return visitor.visitInExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InExpressionContext;
}(SingleExpressionContext));
exports.InExpressionContext = InExpressionContext;
var EqualityExpressionContext = /** @class */ (function (_super) {
    __extends(EqualityExpressionContext, _super);
    function EqualityExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EqualityExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    EqualityExpressionContext.prototype.Equals_ = function () { return this.tryGetToken(TypeScriptParser.Equals_, 0); };
    EqualityExpressionContext.prototype.NotEquals = function () { return this.tryGetToken(TypeScriptParser.NotEquals, 0); };
    EqualityExpressionContext.prototype.IdentityEquals = function () { return this.tryGetToken(TypeScriptParser.IdentityEquals, 0); };
    EqualityExpressionContext.prototype.IdentityNotEquals = function () { return this.tryGetToken(TypeScriptParser.IdentityNotEquals, 0); };
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
}(SingleExpressionContext));
exports.EqualityExpressionContext = EqualityExpressionContext;
var BitAndExpressionContext = /** @class */ (function (_super) {
    __extends(BitAndExpressionContext, _super);
    function BitAndExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitAndExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitAndExpressionContext.prototype.BitAnd = function () { return this.getToken(TypeScriptParser.BitAnd, 0); };
    // @Override
    BitAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitAndExpression) {
            listener.enterBitAndExpression(this);
        }
    };
    // @Override
    BitAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitAndExpression) {
            listener.exitBitAndExpression(this);
        }
    };
    // @Override
    BitAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitAndExpression) {
            return visitor.visitBitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitAndExpressionContext;
}(SingleExpressionContext));
exports.BitAndExpressionContext = BitAndExpressionContext;
var BitXOrExpressionContext = /** @class */ (function (_super) {
    __extends(BitXOrExpressionContext, _super);
    function BitXOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitXOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitXOrExpressionContext.prototype.BitXOr = function () { return this.getToken(TypeScriptParser.BitXOr, 0); };
    // @Override
    BitXOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitXOrExpression) {
            listener.enterBitXOrExpression(this);
        }
    };
    // @Override
    BitXOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitXOrExpression) {
            listener.exitBitXOrExpression(this);
        }
    };
    // @Override
    BitXOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitXOrExpression) {
            return visitor.visitBitXOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitXOrExpressionContext;
}(SingleExpressionContext));
exports.BitXOrExpressionContext = BitXOrExpressionContext;
var BitOrExpressionContext = /** @class */ (function (_super) {
    __extends(BitOrExpressionContext, _super);
    function BitOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitOrExpressionContext.prototype.BitOr = function () { return this.getToken(TypeScriptParser.BitOr, 0); };
    // @Override
    BitOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitOrExpression) {
            listener.enterBitOrExpression(this);
        }
    };
    // @Override
    BitOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitOrExpression) {
            listener.exitBitOrExpression(this);
        }
    };
    // @Override
    BitOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitOrExpression) {
            return visitor.visitBitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitOrExpressionContext;
}(SingleExpressionContext));
exports.BitOrExpressionContext = BitOrExpressionContext;
var LogicalAndExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalAndExpressionContext, _super);
    function LogicalAndExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalAndExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    LogicalAndExpressionContext.prototype.And = function () { return this.getToken(TypeScriptParser.And, 0); };
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
}(SingleExpressionContext));
exports.LogicalAndExpressionContext = LogicalAndExpressionContext;
var LogicalOrExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalOrExpressionContext, _super);
    function LogicalOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    LogicalOrExpressionContext.prototype.Or = function () { return this.getToken(TypeScriptParser.Or, 0); };
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
}(SingleExpressionContext));
exports.LogicalOrExpressionContext = LogicalOrExpressionContext;
var TernaryExpressionContext = /** @class */ (function (_super) {
    __extends(TernaryExpressionContext, _super);
    function TernaryExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TernaryExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    TernaryExpressionContext.prototype.QuestionMark = function () { return this.getToken(TypeScriptParser.QuestionMark, 0); };
    TernaryExpressionContext.prototype.Colon = function () { return this.getToken(TypeScriptParser.Colon, 0); };
    // @Override
    TernaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTernaryExpression) {
            listener.enterTernaryExpression(this);
        }
    };
    // @Override
    TernaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTernaryExpression) {
            listener.exitTernaryExpression(this);
        }
    };
    // @Override
    TernaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTernaryExpression) {
            return visitor.visitTernaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TernaryExpressionContext;
}(SingleExpressionContext));
exports.TernaryExpressionContext = TernaryExpressionContext;
var AssignmentExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentExpressionContext, _super);
    function AssignmentExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AssignmentExpressionContext.prototype.Assign = function () { return this.getToken(TypeScriptParser.Assign, 0); };
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
}(SingleExpressionContext));
exports.AssignmentExpressionContext = AssignmentExpressionContext;
var AssignmentOperatorExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorExpressionContext, _super);
    function AssignmentOperatorExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentOperatorExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AssignmentOperatorExpressionContext.prototype.assignmentOperator = function () {
        return this.getRuleContext(0, AssignmentOperatorContext);
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperatorExpression) {
            listener.enterAssignmentOperatorExpression(this);
        }
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperatorExpression) {
            listener.exitAssignmentOperatorExpression(this);
        }
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperatorExpression) {
            return visitor.visitAssignmentOperatorExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorExpressionContext;
}(SingleExpressionContext));
exports.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;
var TemplateStringExpressionContext = /** @class */ (function (_super) {
    __extends(TemplateStringExpressionContext, _super);
    function TemplateStringExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TemplateStringExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    TemplateStringExpressionContext.prototype.TemplateStringLiteral = function () { return this.getToken(TypeScriptParser.TemplateStringLiteral, 0); };
    // @Override
    TemplateStringExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTemplateStringExpression) {
            listener.enterTemplateStringExpression(this);
        }
    };
    // @Override
    TemplateStringExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTemplateStringExpression) {
            listener.exitTemplateStringExpression(this);
        }
    };
    // @Override
    TemplateStringExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTemplateStringExpression) {
            return visitor.visitTemplateStringExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TemplateStringExpressionContext;
}(SingleExpressionContext));
exports.TemplateStringExpressionContext = TemplateStringExpressionContext;
var IteratorsExpressionContext = /** @class */ (function (_super) {
    __extends(IteratorsExpressionContext, _super);
    function IteratorsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IteratorsExpressionContext.prototype.iteratorBlock = function () {
        return this.getRuleContext(0, IteratorBlockContext);
    };
    // @Override
    IteratorsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIteratorsExpression) {
            listener.enterIteratorsExpression(this);
        }
    };
    // @Override
    IteratorsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIteratorsExpression) {
            listener.exitIteratorsExpression(this);
        }
    };
    // @Override
    IteratorsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIteratorsExpression) {
            return visitor.visitIteratorsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IteratorsExpressionContext;
}(SingleExpressionContext));
exports.IteratorsExpressionContext = IteratorsExpressionContext;
var GeneratorsExpressionContext = /** @class */ (function (_super) {
    __extends(GeneratorsExpressionContext, _super);
    function GeneratorsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GeneratorsExpressionContext.prototype.generatorBlock = function () {
        return this.getRuleContext(0, GeneratorBlockContext);
    };
    // @Override
    GeneratorsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneratorsExpression) {
            listener.enterGeneratorsExpression(this);
        }
    };
    // @Override
    GeneratorsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneratorsExpression) {
            listener.exitGeneratorsExpression(this);
        }
    };
    // @Override
    GeneratorsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneratorsExpression) {
            return visitor.visitGeneratorsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneratorsExpressionContext;
}(SingleExpressionContext));
exports.GeneratorsExpressionContext = GeneratorsExpressionContext;
var GeneratorsFunctionExpressionContext = /** @class */ (function (_super) {
    __extends(GeneratorsFunctionExpressionContext, _super);
    function GeneratorsFunctionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GeneratorsFunctionExpressionContext.prototype.generatorFunctionDeclaration = function () {
        return this.getRuleContext(0, GeneratorFunctionDeclarationContext);
    };
    // @Override
    GeneratorsFunctionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneratorsFunctionExpression) {
            listener.enterGeneratorsFunctionExpression(this);
        }
    };
    // @Override
    GeneratorsFunctionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneratorsFunctionExpression) {
            listener.exitGeneratorsFunctionExpression(this);
        }
    };
    // @Override
    GeneratorsFunctionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneratorsFunctionExpression) {
            return visitor.visitGeneratorsFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneratorsFunctionExpressionContext;
}(SingleExpressionContext));
exports.GeneratorsFunctionExpressionContext = GeneratorsFunctionExpressionContext;
var YieldExpressionContext = /** @class */ (function (_super) {
    __extends(YieldExpressionContext, _super);
    function YieldExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    YieldExpressionContext.prototype.yieldStatement = function () {
        return this.getRuleContext(0, YieldStatementContext);
    };
    // @Override
    YieldExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterYieldExpression) {
            listener.enterYieldExpression(this);
        }
    };
    // @Override
    YieldExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitYieldExpression) {
            listener.exitYieldExpression(this);
        }
    };
    // @Override
    YieldExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitYieldExpression) {
            return visitor.visitYieldExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldExpressionContext;
}(SingleExpressionContext));
exports.YieldExpressionContext = YieldExpressionContext;
var ThisExpressionContext = /** @class */ (function (_super) {
    __extends(ThisExpressionContext, _super);
    function ThisExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ThisExpressionContext.prototype.This = function () { return this.getToken(TypeScriptParser.This, 0); };
    // @Override
    ThisExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterThisExpression) {
            listener.enterThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitThisExpression) {
            listener.exitThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitThisExpression) {
            return visitor.visitThisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThisExpressionContext;
}(SingleExpressionContext));
exports.ThisExpressionContext = ThisExpressionContext;
var IdentifierExpressionContext = /** @class */ (function (_super) {
    __extends(IdentifierExpressionContext, _super);
    function IdentifierExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IdentifierExpressionContext.prototype.identifierName = function () {
        return this.getRuleContext(0, IdentifierNameContext);
    };
    IdentifierExpressionContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    // @Override
    IdentifierExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierExpression) {
            listener.enterIdentifierExpression(this);
        }
    };
    // @Override
    IdentifierExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierExpression) {
            listener.exitIdentifierExpression(this);
        }
    };
    // @Override
    IdentifierExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierExpressionContext;
}(SingleExpressionContext));
exports.IdentifierExpressionContext = IdentifierExpressionContext;
var SuperExpressionContext = /** @class */ (function (_super) {
    __extends(SuperExpressionContext, _super);
    function SuperExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    SuperExpressionContext.prototype.Super = function () { return this.getToken(TypeScriptParser.Super, 0); };
    // @Override
    SuperExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSuperExpression) {
            listener.enterSuperExpression(this);
        }
    };
    // @Override
    SuperExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSuperExpression) {
            listener.exitSuperExpression(this);
        }
    };
    // @Override
    SuperExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSuperExpression) {
            return visitor.visitSuperExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuperExpressionContext;
}(SingleExpressionContext));
exports.SuperExpressionContext = SuperExpressionContext;
var LiteralExpressionContext = /** @class */ (function (_super) {
    __extends(LiteralExpressionContext, _super);
    function LiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LiteralExpressionContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    // @Override
    LiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralExpression) {
            listener.enterLiteralExpression(this);
        }
    };
    // @Override
    LiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralExpression) {
            listener.exitLiteralExpression(this);
        }
    };
    // @Override
    LiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralExpressionContext;
}(SingleExpressionContext));
exports.LiteralExpressionContext = LiteralExpressionContext;
var ArrayLiteralExpressionContext = /** @class */ (function (_super) {
    __extends(ArrayLiteralExpressionContext, _super);
    function ArrayLiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrayLiteralExpressionContext.prototype.arrayLiteral = function () {
        return this.getRuleContext(0, ArrayLiteralContext);
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLiteralExpression) {
            listener.enterArrayLiteralExpression(this);
        }
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLiteralExpression) {
            listener.exitArrayLiteralExpression(this);
        }
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLiteralExpression) {
            return visitor.visitArrayLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLiteralExpressionContext;
}(SingleExpressionContext));
exports.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;
var ObjectLiteralExpressionContext = /** @class */ (function (_super) {
    __extends(ObjectLiteralExpressionContext, _super);
    function ObjectLiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ObjectLiteralExpressionContext.prototype.objectLiteral = function () {
        return this.getRuleContext(0, ObjectLiteralContext);
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectLiteralExpression) {
            listener.enterObjectLiteralExpression(this);
        }
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectLiteralExpression) {
            listener.exitObjectLiteralExpression(this);
        }
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectLiteralExpression) {
            return visitor.visitObjectLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectLiteralExpressionContext;
}(SingleExpressionContext));
exports.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;
var ParenthesizedExpressionContext = /** @class */ (function (_super) {
    __extends(ParenthesizedExpressionContext, _super);
    function ParenthesizedExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesizedExpressionContext.prototype.OpenParen = function () { return this.getToken(TypeScriptParser.OpenParen, 0); };
    ParenthesizedExpressionContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ParenthesizedExpressionContext.prototype.CloseParen = function () { return this.getToken(TypeScriptParser.CloseParen, 0); };
    // @Override
    ParenthesizedExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesizedExpressionContext;
}(SingleExpressionContext));
exports.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
var GenericTypesContext = /** @class */ (function (_super) {
    __extends(GenericTypesContext, _super);
    function GenericTypesContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GenericTypesContext.prototype.typeArguments = function () {
        return this.getRuleContext(0, TypeArgumentsContext);
    };
    GenericTypesContext.prototype.expressionSequence = function () {
        return this.tryGetRuleContext(0, ExpressionSequenceContext);
    };
    // @Override
    GenericTypesContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericTypes) {
            listener.enterGenericTypes(this);
        }
    };
    // @Override
    GenericTypesContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericTypes) {
            listener.exitGenericTypes(this);
        }
    };
    // @Override
    GenericTypesContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericTypes) {
            return visitor.visitGenericTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericTypesContext;
}(SingleExpressionContext));
exports.GenericTypesContext = GenericTypesContext;
var ArrowFunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(ArrowFunctionDeclarationContext, _super);
    function ArrowFunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrowFunctionDeclarationContext.prototype.arrowFunctionParameters = function () {
        return this.getRuleContext(0, ArrowFunctionParametersContext);
    };
    ArrowFunctionDeclarationContext.prototype.ARROW = function () { return this.getToken(TypeScriptParser.ARROW, 0); };
    ArrowFunctionDeclarationContext.prototype.arrowFunctionBody = function () {
        return this.getRuleContext(0, ArrowFunctionBodyContext);
    };
    ArrowFunctionDeclarationContext.prototype.Async = function () { return this.tryGetToken(TypeScriptParser.Async, 0); };
    ArrowFunctionDeclarationContext.prototype.typeAnnotation = function () {
        return this.tryGetRuleContext(0, TypeAnnotationContext);
    };
    Object.defineProperty(ArrowFunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_arrowFunctionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrowFunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowFunctionDeclaration) {
            listener.enterArrowFunctionDeclaration(this);
        }
    };
    // @Override
    ArrowFunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowFunctionDeclaration) {
            listener.exitArrowFunctionDeclaration(this);
        }
    };
    // @Override
    ArrowFunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowFunctionDeclaration) {
            return visitor.visitArrowFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowFunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrowFunctionDeclarationContext = ArrowFunctionDeclarationContext;
var ArrowFunctionParametersContext = /** @class */ (function (_super) {
    __extends(ArrowFunctionParametersContext, _super);
    function ArrowFunctionParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrowFunctionParametersContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    ArrowFunctionParametersContext.prototype.OpenParen = function () { return this.tryGetToken(TypeScriptParser.OpenParen, 0); };
    ArrowFunctionParametersContext.prototype.CloseParen = function () { return this.tryGetToken(TypeScriptParser.CloseParen, 0); };
    ArrowFunctionParametersContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(ArrowFunctionParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_arrowFunctionParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrowFunctionParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowFunctionParameters) {
            listener.enterArrowFunctionParameters(this);
        }
    };
    // @Override
    ArrowFunctionParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowFunctionParameters) {
            listener.exitArrowFunctionParameters(this);
        }
    };
    // @Override
    ArrowFunctionParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowFunctionParameters) {
            return visitor.visitArrowFunctionParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowFunctionParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrowFunctionParametersContext = ArrowFunctionParametersContext;
var ArrowFunctionBodyContext = /** @class */ (function (_super) {
    __extends(ArrowFunctionBodyContext, _super);
    function ArrowFunctionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrowFunctionBodyContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    ArrowFunctionBodyContext.prototype.OpenBrace = function () { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); };
    ArrowFunctionBodyContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    ArrowFunctionBodyContext.prototype.CloseBrace = function () { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); };
    Object.defineProperty(ArrowFunctionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_arrowFunctionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrowFunctionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowFunctionBody) {
            listener.enterArrowFunctionBody(this);
        }
    };
    // @Override
    ArrowFunctionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowFunctionBody) {
            listener.exitArrowFunctionBody(this);
        }
    };
    // @Override
    ArrowFunctionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowFunctionBody) {
            return visitor.visitArrowFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowFunctionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrowFunctionBodyContext = ArrowFunctionBodyContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.MultiplyAssign = function () { return this.tryGetToken(TypeScriptParser.MultiplyAssign, 0); };
    AssignmentOperatorContext.prototype.DivideAssign = function () { return this.tryGetToken(TypeScriptParser.DivideAssign, 0); };
    AssignmentOperatorContext.prototype.ModulusAssign = function () { return this.tryGetToken(TypeScriptParser.ModulusAssign, 0); };
    AssignmentOperatorContext.prototype.PlusAssign = function () { return this.tryGetToken(TypeScriptParser.PlusAssign, 0); };
    AssignmentOperatorContext.prototype.MinusAssign = function () { return this.tryGetToken(TypeScriptParser.MinusAssign, 0); };
    AssignmentOperatorContext.prototype.LeftShiftArithmeticAssign = function () { return this.tryGetToken(TypeScriptParser.LeftShiftArithmeticAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftArithmeticAssign = function () { return this.tryGetToken(TypeScriptParser.RightShiftArithmeticAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftLogicalAssign = function () { return this.tryGetToken(TypeScriptParser.RightShiftLogicalAssign, 0); };
    AssignmentOperatorContext.prototype.BitAndAssign = function () { return this.tryGetToken(TypeScriptParser.BitAndAssign, 0); };
    AssignmentOperatorContext.prototype.BitXorAssign = function () { return this.tryGetToken(TypeScriptParser.BitXorAssign, 0); };
    AssignmentOperatorContext.prototype.BitOrAssign = function () { return this.tryGetToken(TypeScriptParser.BitOrAssign, 0); };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_assignmentOperator; },
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
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.NullLiteral = function () { return this.tryGetToken(TypeScriptParser.NullLiteral, 0); };
    LiteralContext.prototype.BooleanLiteral = function () { return this.tryGetToken(TypeScriptParser.BooleanLiteral, 0); };
    LiteralContext.prototype.StringLiteral = function () { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); };
    LiteralContext.prototype.TemplateStringLiteral = function () { return this.tryGetToken(TypeScriptParser.TemplateStringLiteral, 0); };
    LiteralContext.prototype.RegularExpressionLiteral = function () { return this.tryGetToken(TypeScriptParser.RegularExpressionLiteral, 0); };
    LiteralContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralContext = LiteralContext;
var NumericLiteralContext = /** @class */ (function (_super) {
    __extends(NumericLiteralContext, _super);
    function NumericLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralContext.prototype.DecimalLiteral = function () { return this.tryGetToken(TypeScriptParser.DecimalLiteral, 0); };
    NumericLiteralContext.prototype.HexIntegerLiteral = function () { return this.tryGetToken(TypeScriptParser.HexIntegerLiteral, 0); };
    NumericLiteralContext.prototype.OctalIntegerLiteral = function () { return this.tryGetToken(TypeScriptParser.OctalIntegerLiteral, 0); };
    NumericLiteralContext.prototype.OctalIntegerLiteral2 = function () { return this.tryGetToken(TypeScriptParser.OctalIntegerLiteral2, 0); };
    NumericLiteralContext.prototype.BinaryIntegerLiteral = function () { return this.tryGetToken(TypeScriptParser.BinaryIntegerLiteral, 0); };
    Object.defineProperty(NumericLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_numericLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericLiteral) {
            listener.enterNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericLiteral) {
            listener.exitNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericLiteralContext = NumericLiteralContext;
var IdentifierNameContext = /** @class */ (function (_super) {
    __extends(IdentifierNameContext, _super);
    function IdentifierNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierNameContext.prototype.Identifier = function () { return this.tryGetToken(TypeScriptParser.Identifier, 0); };
    IdentifierNameContext.prototype.reservedWord = function () {
        return this.tryGetRuleContext(0, ReservedWordContext);
    };
    Object.defineProperty(IdentifierNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_identifierName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierNameContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierName) {
            listener.enterIdentifierName(this);
        }
    };
    // @Override
    IdentifierNameContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierName) {
            listener.exitIdentifierName(this);
        }
    };
    // @Override
    IdentifierNameContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierName) {
            return visitor.visitIdentifierName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierNameContext = IdentifierNameContext;
var ReservedWordContext = /** @class */ (function (_super) {
    __extends(ReservedWordContext, _super);
    function ReservedWordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReservedWordContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    ReservedWordContext.prototype.NullLiteral = function () { return this.tryGetToken(TypeScriptParser.NullLiteral, 0); };
    ReservedWordContext.prototype.BooleanLiteral = function () { return this.tryGetToken(TypeScriptParser.BooleanLiteral, 0); };
    Object.defineProperty(ReservedWordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_reservedWord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReservedWordContext.prototype.enterRule = function (listener) {
        if (listener.enterReservedWord) {
            listener.enterReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.exitRule = function (listener) {
        if (listener.exitReservedWord) {
            listener.exitReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.accept = function (visitor) {
        if (visitor.visitReservedWord) {
            return visitor.visitReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReservedWordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReservedWordContext = ReservedWordContext;
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.Break = function () { return this.tryGetToken(TypeScriptParser.Break, 0); };
    KeywordContext.prototype.Do = function () { return this.tryGetToken(TypeScriptParser.Do, 0); };
    KeywordContext.prototype.Instanceof = function () { return this.tryGetToken(TypeScriptParser.Instanceof, 0); };
    KeywordContext.prototype.Typeof = function () { return this.tryGetToken(TypeScriptParser.Typeof, 0); };
    KeywordContext.prototype.Case = function () { return this.tryGetToken(TypeScriptParser.Case, 0); };
    KeywordContext.prototype.Else = function () { return this.tryGetToken(TypeScriptParser.Else, 0); };
    KeywordContext.prototype.New = function () { return this.tryGetToken(TypeScriptParser.New, 0); };
    KeywordContext.prototype.Var = function () { return this.tryGetToken(TypeScriptParser.Var, 0); };
    KeywordContext.prototype.Catch = function () { return this.tryGetToken(TypeScriptParser.Catch, 0); };
    KeywordContext.prototype.Finally = function () { return this.tryGetToken(TypeScriptParser.Finally, 0); };
    KeywordContext.prototype.Return = function () { return this.tryGetToken(TypeScriptParser.Return, 0); };
    KeywordContext.prototype.Void = function () { return this.tryGetToken(TypeScriptParser.Void, 0); };
    KeywordContext.prototype.Continue = function () { return this.tryGetToken(TypeScriptParser.Continue, 0); };
    KeywordContext.prototype.For = function () { return this.tryGetToken(TypeScriptParser.For, 0); };
    KeywordContext.prototype.Switch = function () { return this.tryGetToken(TypeScriptParser.Switch, 0); };
    KeywordContext.prototype.While = function () { return this.tryGetToken(TypeScriptParser.While, 0); };
    KeywordContext.prototype.Debugger = function () { return this.tryGetToken(TypeScriptParser.Debugger, 0); };
    KeywordContext.prototype.Function = function () { return this.tryGetToken(TypeScriptParser.Function, 0); };
    KeywordContext.prototype.This = function () { return this.tryGetToken(TypeScriptParser.This, 0); };
    KeywordContext.prototype.With = function () { return this.tryGetToken(TypeScriptParser.With, 0); };
    KeywordContext.prototype.Default = function () { return this.tryGetToken(TypeScriptParser.Default, 0); };
    KeywordContext.prototype.If = function () { return this.tryGetToken(TypeScriptParser.If, 0); };
    KeywordContext.prototype.Throw = function () { return this.tryGetToken(TypeScriptParser.Throw, 0); };
    KeywordContext.prototype.Delete = function () { return this.tryGetToken(TypeScriptParser.Delete, 0); };
    KeywordContext.prototype.In = function () { return this.tryGetToken(TypeScriptParser.In, 0); };
    KeywordContext.prototype.Try = function () { return this.tryGetToken(TypeScriptParser.Try, 0); };
    KeywordContext.prototype.ReadOnly = function () { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); };
    KeywordContext.prototype.Async = function () { return this.tryGetToken(TypeScriptParser.Async, 0); };
    KeywordContext.prototype.From = function () { return this.tryGetToken(TypeScriptParser.From, 0); };
    KeywordContext.prototype.Class = function () { return this.tryGetToken(TypeScriptParser.Class, 0); };
    KeywordContext.prototype.Enum = function () { return this.tryGetToken(TypeScriptParser.Enum, 0); };
    KeywordContext.prototype.Extends = function () { return this.tryGetToken(TypeScriptParser.Extends, 0); };
    KeywordContext.prototype.Super = function () { return this.tryGetToken(TypeScriptParser.Super, 0); };
    KeywordContext.prototype.Const = function () { return this.tryGetToken(TypeScriptParser.Const, 0); };
    KeywordContext.prototype.Export = function () { return this.tryGetToken(TypeScriptParser.Export, 0); };
    KeywordContext.prototype.Import = function () { return this.tryGetToken(TypeScriptParser.Import, 0); };
    KeywordContext.prototype.Implements = function () { return this.tryGetToken(TypeScriptParser.Implements, 0); };
    KeywordContext.prototype.Let = function () { return this.tryGetToken(TypeScriptParser.Let, 0); };
    KeywordContext.prototype.Private = function () { return this.tryGetToken(TypeScriptParser.Private, 0); };
    KeywordContext.prototype.Public = function () { return this.tryGetToken(TypeScriptParser.Public, 0); };
    KeywordContext.prototype.Interface = function () { return this.tryGetToken(TypeScriptParser.Interface, 0); };
    KeywordContext.prototype.Package = function () { return this.tryGetToken(TypeScriptParser.Package, 0); };
    KeywordContext.prototype.Protected = function () { return this.tryGetToken(TypeScriptParser.Protected, 0); };
    KeywordContext.prototype.Static = function () { return this.tryGetToken(TypeScriptParser.Static, 0); };
    KeywordContext.prototype.Yield = function () { return this.tryGetToken(TypeScriptParser.Yield, 0); };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordContext = KeywordContext;
var GetterContext = /** @class */ (function (_super) {
    __extends(GetterContext, _super);
    function GetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetterContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    GetterContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    Object.defineProperty(GetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_getter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetterContext.prototype.enterRule = function (listener) {
        if (listener.enterGetter) {
            listener.enterGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.exitRule = function (listener) {
        if (listener.exitGetter) {
            listener.exitGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.accept = function (visitor) {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetterContext = GetterContext;
var SetterContext = /** @class */ (function (_super) {
    __extends(SetterContext, _super);
    function SetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetterContext.prototype.Identifier = function () { return this.getToken(TypeScriptParser.Identifier, 0); };
    SetterContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    Object.defineProperty(SetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_setter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetterContext.prototype.enterRule = function (listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.exitRule = function (listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.accept = function (visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetterContext = SetterContext;
var EosContext = /** @class */ (function (_super) {
    __extends(EosContext, _super);
    function EosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EosContext.prototype.SemiColon = function () { return this.tryGetToken(TypeScriptParser.SemiColon, 0); };
    EosContext.prototype.EOF = function () { return this.tryGetToken(TypeScriptParser.EOF, 0); };
    Object.defineProperty(EosContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TypeScriptParser.RULE_eos; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EosContext.prototype.enterRule = function (listener) {
        if (listener.enterEos) {
            listener.enterEos(this);
        }
    };
    // @Override
    EosContext.prototype.exitRule = function (listener) {
        if (listener.exitEos) {
            listener.exitEos(this);
        }
    };
    // @Override
    EosContext.prototype.accept = function (visitor) {
        if (visitor.visitEos) {
            return visitor.visitEos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EosContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EosContext = EosContext;
