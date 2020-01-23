"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/matlab/matlab.g4 by ANTLR 4.7.3-SNAPSHOT
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
var matlabParser = /** @class */ (function (_super) {
    __extends(matlabParser, _super);
    function matlabParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(matlabParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(matlabParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return matlabParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "matlab.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabParser.prototype, "ruleNames", {
        // @Override
        get: function () { return matlabParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabParser.prototype, "serializedATN", {
        // @Override
        get: function () { return matlabParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    matlabParser.prototype.primary_expression = function () {
        var _localctx = new Primary_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, matlabParser.RULE_primary_expression);
        try {
            this.state = 81;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 68;
                        this.match(matlabParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 69;
                        this.match(matlabParser.CONSTANT);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 70;
                        this.match(matlabParser.STRING_LITERAL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 71;
                        this.match(matlabParser.T__0);
                        this.state = 72;
                        this.expression(0);
                        this.state = 73;
                        this.match(matlabParser.T__1);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 75;
                        this.match(matlabParser.T__2);
                        this.state = 76;
                        this.match(matlabParser.T__3);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 77;
                        this.match(matlabParser.T__2);
                        this.state = 78;
                        this.array_list(0);
                        this.state = 79;
                        this.match(matlabParser.T__3);
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
    matlabParser.prototype.postfix_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Postfix_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, matlabParser.RULE_postfix_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 86;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 84;
                            this.primary_expression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 85;
                            this.array_expression();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 94;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 92;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Postfix_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_postfix_expression);
                                        this.state = 88;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 89;
                                        this.match(matlabParser.TRANSPOSE);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Postfix_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_postfix_expression);
                                        this.state = 90;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 91;
                                        this.match(matlabParser.NCTRANSPOSE);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 96;
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
    matlabParser.prototype.index_expression = function () {
        var _localctx = new Index_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, matlabParser.RULE_index_expression);
        try {
            this.state = 99;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case matlabParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 97;
                        this.match(matlabParser.T__4);
                    }
                    break;
                case matlabParser.T__0:
                case matlabParser.T__2:
                case matlabParser.T__6:
                case matlabParser.T__7:
                case matlabParser.T__8:
                case matlabParser.STRING_LITERAL:
                case matlabParser.IDENTIFIER:
                case matlabParser.CONSTANT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 98;
                        this.expression(0);
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
    matlabParser.prototype.index_expression_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Index_expression_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 6;
        this.enterRecursionRule(_localctx, 6, matlabParser.RULE_index_expression_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 102;
                    this.index_expression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 109;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Index_expression_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_index_expression_list);
                                this.state = 104;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 105;
                                this.match(matlabParser.T__5);
                                this.state = 106;
                                this.index_expression();
                            }
                        }
                    }
                    this.state = 111;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.array_expression = function () {
        var _localctx = new Array_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, matlabParser.RULE_array_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this.match(matlabParser.IDENTIFIER);
                this.state = 113;
                this.match(matlabParser.T__0);
                this.state = 114;
                this.index_expression_list(0);
                this.state = 115;
                this.match(matlabParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.unary_expression = function () {
        var _localctx = new Unary_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, matlabParser.RULE_unary_expression);
        try {
            this.state = 121;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case matlabParser.T__0:
                case matlabParser.T__2:
                case matlabParser.STRING_LITERAL:
                case matlabParser.IDENTIFIER:
                case matlabParser.CONSTANT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 117;
                        this.postfix_expression(0);
                    }
                    break;
                case matlabParser.T__6:
                case matlabParser.T__7:
                case matlabParser.T__8:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 118;
                        this.unary_operator();
                        this.state = 119;
                        this.postfix_expression(0);
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
    matlabParser.prototype.unary_operator = function () {
        var _localctx = new Unary_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, matlabParser.RULE_unary_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matlabParser.T__6) | (1 << matlabParser.T__7) | (1 << matlabParser.T__8))) !== 0))) {
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
    matlabParser.prototype.multiplicative_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Multiplicative_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 14;
        this.enterRecursionRule(_localctx, 14, matlabParser.RULE_multiplicative_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 126;
                    this.unary_expression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 154;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 152;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 128;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 129;
                                        this.match(matlabParser.T__9);
                                        this.state = 130;
                                        this.unary_expression();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 131;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 132;
                                        this.match(matlabParser.T__10);
                                        this.state = 133;
                                        this.unary_expression();
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 134;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 135;
                                        this.match(matlabParser.T__11);
                                        this.state = 136;
                                        this.unary_expression();
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 137;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 138;
                                        this.match(matlabParser.T__12);
                                        this.state = 139;
                                        this.unary_expression();
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 140;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 141;
                                        this.match(matlabParser.ARRAYMUL);
                                        this.state = 142;
                                        this.unary_expression();
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 143;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 144;
                                        this.match(matlabParser.ARRAYDIV);
                                        this.state = 145;
                                        this.unary_expression();
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 146;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 147;
                                        this.match(matlabParser.ARRAYRDIV);
                                        this.state = 148;
                                        this.unary_expression();
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
                                        this.state = 149;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 150;
                                        this.match(matlabParser.ARRAYPOW);
                                        this.state = 151;
                                        this.unary_expression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 156;
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
    matlabParser.prototype.additive_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Additive_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 16;
        this.enterRecursionRule(_localctx, 16, matlabParser.RULE_additive_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 158;
                    this.multiplicative_expression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 168;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 166;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Additive_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_additive_expression);
                                        this.state = 160;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 161;
                                        this.match(matlabParser.T__6);
                                        this.state = 162;
                                        this.multiplicative_expression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Additive_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_additive_expression);
                                        this.state = 163;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 164;
                                        this.match(matlabParser.T__7);
                                        this.state = 165;
                                        this.multiplicative_expression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 170;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.relational_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Relational_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 18;
        this.enterRecursionRule(_localctx, 18, matlabParser.RULE_relational_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 172;
                    this.additive_expression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 188;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 186;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Relational_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
                                        this.state = 174;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 175;
                                        this.match(matlabParser.T__13);
                                        this.state = 176;
                                        this.additive_expression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Relational_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
                                        this.state = 177;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 178;
                                        this.match(matlabParser.T__14);
                                        this.state = 179;
                                        this.additive_expression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Relational_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
                                        this.state = 180;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 181;
                                        this.match(matlabParser.LE_OP);
                                        this.state = 182;
                                        this.additive_expression(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Relational_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
                                        this.state = 183;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 184;
                                        this.match(matlabParser.GE_OP);
                                        this.state = 185;
                                        this.additive_expression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 190;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
    matlabParser.prototype.equality_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Equality_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 20;
        this.enterRecursionRule(_localctx, 20, matlabParser.RULE_equality_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 192;
                    this.relational_expression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 202;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 200;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Equality_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_equality_expression);
                                        this.state = 194;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 195;
                                        this.match(matlabParser.EQ_OP);
                                        this.state = 196;
                                        this.relational_expression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Equality_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_equality_expression);
                                        this.state = 197;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 198;
                                        this.match(matlabParser.NE_OP);
                                        this.state = 199;
                                        this.relational_expression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 204;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.and_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new And_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 22;
        this.enterRecursionRule(_localctx, 22, matlabParser.RULE_and_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 206;
                    this.equality_expression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 213;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new And_expressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_and_expression);
                                this.state = 208;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 209;
                                this.match(matlabParser.T__15);
                                this.state = 210;
                                this.equality_expression(0);
                            }
                        }
                    }
                    this.state = 215;
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
    matlabParser.prototype.or_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Or_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 24;
        this.enterRecursionRule(_localctx, 24, matlabParser.RULE_or_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 217;
                    this.and_expression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 224;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Or_expressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_or_expression);
                                this.state = 219;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 220;
                                this.match(matlabParser.T__16);
                                this.state = 221;
                                this.and_expression(0);
                            }
                        }
                    }
                    this.state = 226;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 26;
        this.enterRecursionRule(_localctx, 26, matlabParser.RULE_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 228;
                    this.or_expression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 235;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_expression);
                                this.state = 230;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 231;
                                this.match(matlabParser.T__4);
                                this.state = 232;
                                this.or_expression(0);
                            }
                        }
                    }
                    this.state = 237;
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
    matlabParser.prototype.assignment_expression = function () {
        var _localctx = new Assignment_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, matlabParser.RULE_assignment_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.postfix_expression(0);
                this.state = 239;
                this.match(matlabParser.T__17);
                this.state = 240;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.eostmt = function () {
        var _localctx = new EostmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, matlabParser.RULE_eostmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                _la = this._input.LA(1);
                if (!(_la === matlabParser.T__5 || _la === matlabParser.T__18 || _la === matlabParser.CR)) {
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
    matlabParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, matlabParser.RULE_statement);
        try {
            this.state = 251;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 244;
                        this.global_statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 245;
                        this.clear_statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 246;
                        this.assignment_statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 247;
                        this.expression_statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 248;
                        this.selection_statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 249;
                        this.iteration_statement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 250;
                        this.jump_statement();
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
    matlabParser.prototype.statement_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Statement_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 34;
        this.enterRecursionRule(_localctx, 34, matlabParser.RULE_statement_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 254;
                    this.statement();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 260;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Statement_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_statement_list);
                                this.state = 256;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 257;
                                this.statement();
                            }
                        }
                    }
                    this.state = 262;
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
    matlabParser.prototype.identifier_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Identifier_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 36;
        this.enterRecursionRule(_localctx, 36, matlabParser.RULE_identifier_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 264;
                    this.match(matlabParser.IDENTIFIER);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 270;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Identifier_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_identifier_list);
                                this.state = 266;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 267;
                                this.match(matlabParser.IDENTIFIER);
                            }
                        }
                    }
                    this.state = 272;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
    matlabParser.prototype.global_statement = function () {
        var _localctx = new Global_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, matlabParser.RULE_global_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
                this.match(matlabParser.GLOBAL);
                this.state = 274;
                this.identifier_list(0);
                this.state = 275;
                this.eostmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.clear_statement = function () {
        var _localctx = new Clear_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, matlabParser.RULE_clear_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
                this.match(matlabParser.CLEAR);
                this.state = 278;
                this.identifier_list(0);
                this.state = 279;
                this.eostmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.expression_statement = function () {
        var _localctx = new Expression_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, matlabParser.RULE_expression_statement);
        try {
            this.state = 285;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case matlabParser.T__5:
                case matlabParser.T__18:
                case matlabParser.CR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 281;
                        this.eostmt();
                    }
                    break;
                case matlabParser.T__0:
                case matlabParser.T__2:
                case matlabParser.T__6:
                case matlabParser.T__7:
                case matlabParser.T__8:
                case matlabParser.STRING_LITERAL:
                case matlabParser.IDENTIFIER:
                case matlabParser.CONSTANT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 282;
                        this.expression(0);
                        this.state = 283;
                        this.eostmt();
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
    matlabParser.prototype.assignment_statement = function () {
        var _localctx = new Assignment_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, matlabParser.RULE_assignment_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.assignment_expression();
                this.state = 288;
                this.eostmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    matlabParser.prototype.array_element = function () {
        var _localctx = new Array_elementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, matlabParser.RULE_array_element);
        try {
            this.state = 292;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 290;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 291;
                        this.expression_statement();
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
    matlabParser.prototype.array_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Array_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 48;
        this.enterRecursionRule(_localctx, 48, matlabParser.RULE_array_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 295;
                    this.array_element();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 301;
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
                                _localctx = new Array_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_array_list);
                                this.state = 297;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 298;
                                this.array_element();
                            }
                        }
                    }
                    this.state = 303;
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
    matlabParser.prototype.selection_statement = function () {
        var _localctx = new Selection_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, matlabParser.RULE_selection_statement);
        try {
            this.state = 334;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 304;
                        this.match(matlabParser.IF);
                        this.state = 305;
                        this.expression(0);
                        this.state = 306;
                        this.statement_list(0);
                        this.state = 307;
                        this.match(matlabParser.END);
                        this.state = 308;
                        this.eostmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 310;
                        this.match(matlabParser.IF);
                        this.state = 311;
                        this.expression(0);
                        this.state = 312;
                        this.statement_list(0);
                        this.state = 313;
                        this.match(matlabParser.ELSE);
                        this.state = 314;
                        this.statement_list(0);
                        this.state = 315;
                        this.match(matlabParser.END);
                        this.state = 316;
                        this.eostmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 318;
                        this.match(matlabParser.IF);
                        this.state = 319;
                        this.expression(0);
                        this.state = 320;
                        this.statement_list(0);
                        this.state = 321;
                        this.elseif_clause(0);
                        this.state = 322;
                        this.match(matlabParser.END);
                        this.state = 323;
                        this.eostmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 325;
                        this.match(matlabParser.IF);
                        this.state = 326;
                        this.expression(0);
                        this.state = 327;
                        this.statement_list(0);
                        this.state = 328;
                        this.elseif_clause(0);
                        this.state = 329;
                        this.match(matlabParser.ELSE);
                        this.state = 330;
                        this.statement_list(0);
                        this.state = 331;
                        this.match(matlabParser.END);
                        this.state = 332;
                        this.eostmt();
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
    matlabParser.prototype.elseif_clause = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Elseif_clauseContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 52;
        this.enterRecursionRule(_localctx, 52, matlabParser.RULE_elseif_clause, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 337;
                    this.match(matlabParser.ELSEIF);
                    this.state = 338;
                    this.expression(0);
                    this.state = 339;
                    this.statement_list(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 348;
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
                                _localctx = new Elseif_clauseContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_elseif_clause);
                                this.state = 341;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 342;
                                this.match(matlabParser.ELSEIF);
                                this.state = 343;
                                this.expression(0);
                                this.state = 344;
                                this.statement_list(0);
                            }
                        }
                    }
                    this.state = 350;
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
    matlabParser.prototype.iteration_statement = function () {
        var _localctx = new Iteration_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, matlabParser.RULE_iteration_statement);
        try {
            this.state = 375;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 351;
                        this.match(matlabParser.WHILE);
                        this.state = 352;
                        this.expression(0);
                        this.state = 353;
                        this.statement_list(0);
                        this.state = 354;
                        this.match(matlabParser.END);
                        this.state = 355;
                        this.eostmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 357;
                        this.match(matlabParser.FOR);
                        this.state = 358;
                        this.match(matlabParser.IDENTIFIER);
                        this.state = 359;
                        this.match(matlabParser.T__17);
                        this.state = 360;
                        this.expression(0);
                        this.state = 361;
                        this.statement_list(0);
                        this.state = 362;
                        this.match(matlabParser.END);
                        this.state = 363;
                        this.eostmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 365;
                        this.match(matlabParser.FOR);
                        this.state = 366;
                        this.match(matlabParser.T__0);
                        this.state = 367;
                        this.match(matlabParser.IDENTIFIER);
                        this.state = 368;
                        this.match(matlabParser.T__17);
                        this.state = 369;
                        this.expression(0);
                        this.state = 370;
                        this.match(matlabParser.T__1);
                        this.state = 371;
                        this.statement_list(0);
                        this.state = 372;
                        this.match(matlabParser.END);
                        this.state = 373;
                        this.eostmt();
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
    matlabParser.prototype.jump_statement = function () {
        var _localctx = new Jump_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, matlabParser.RULE_jump_statement);
        try {
            this.state = 381;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case matlabParser.BREAK:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 377;
                        this.match(matlabParser.BREAK);
                        this.state = 378;
                        this.eostmt();
                    }
                    break;
                case matlabParser.RETURN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 379;
                        this.match(matlabParser.RETURN);
                        this.state = 380;
                        this.eostmt();
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
    matlabParser.prototype.translation_unit = function () {
        var _localctx = new Translation_unitContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, matlabParser.RULE_translation_unit);
        try {
            this.state = 389;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case matlabParser.T__0:
                case matlabParser.T__2:
                case matlabParser.T__5:
                case matlabParser.T__6:
                case matlabParser.T__7:
                case matlabParser.T__8:
                case matlabParser.T__18:
                case matlabParser.BREAK:
                case matlabParser.RETURN:
                case matlabParser.FOR:
                case matlabParser.WHILE:
                case matlabParser.GLOBAL:
                case matlabParser.IF:
                case matlabParser.CLEAR:
                case matlabParser.STRING_LITERAL:
                case matlabParser.IDENTIFIER:
                case matlabParser.CONSTANT:
                case matlabParser.CR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 383;
                        this.statement_list(0);
                    }
                    break;
                case matlabParser.FUNCTION:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 384;
                        this.match(matlabParser.FUNCTION);
                        this.state = 385;
                        this.function_declare();
                        this.state = 386;
                        this.eostmt();
                        this.state = 387;
                        this.statement_list(0);
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
    matlabParser.prototype.func_ident_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Func_ident_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 60;
        this.enterRecursionRule(_localctx, 60, matlabParser.RULE_func_ident_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 392;
                    this.match(matlabParser.IDENTIFIER);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 399;
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
                                _localctx = new Func_ident_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_func_ident_list);
                                this.state = 394;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 395;
                                this.match(matlabParser.T__5);
                                this.state = 396;
                                this.match(matlabParser.IDENTIFIER);
                            }
                        }
                    }
                    this.state = 401;
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
    matlabParser.prototype.func_return_list = function () {
        var _localctx = new Func_return_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, matlabParser.RULE_func_return_list);
        try {
            this.state = 407;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case matlabParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 402;
                        this.match(matlabParser.IDENTIFIER);
                    }
                    break;
                case matlabParser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 403;
                        this.match(matlabParser.T__2);
                        this.state = 404;
                        this.func_ident_list(0);
                        this.state = 405;
                        this.match(matlabParser.T__3);
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
    matlabParser.prototype.function_declare_lhs = function () {
        var _localctx = new Function_declare_lhsContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, matlabParser.RULE_function_declare_lhs);
        try {
            this.state = 418;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 409;
                        this.match(matlabParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 410;
                        this.match(matlabParser.IDENTIFIER);
                        this.state = 411;
                        this.match(matlabParser.T__0);
                        this.state = 412;
                        this.match(matlabParser.T__1);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 413;
                        this.match(matlabParser.IDENTIFIER);
                        this.state = 414;
                        this.match(matlabParser.T__0);
                        this.state = 415;
                        this.func_ident_list(0);
                        this.state = 416;
                        this.match(matlabParser.T__1);
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
    matlabParser.prototype.function_declare = function () {
        var _localctx = new Function_declareContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, matlabParser.RULE_function_declare);
        try {
            this.state = 425;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 420;
                        this.function_declare_lhs();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 421;
                        this.func_return_list();
                        this.state = 422;
                        this.match(matlabParser.T__17);
                        this.state = 423;
                        this.function_declare_lhs();
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
    matlabParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.postfix_expression_sempred(_localctx, predIndex);
            case 3:
                return this.index_expression_list_sempred(_localctx, predIndex);
            case 7:
                return this.multiplicative_expression_sempred(_localctx, predIndex);
            case 8:
                return this.additive_expression_sempred(_localctx, predIndex);
            case 9:
                return this.relational_expression_sempred(_localctx, predIndex);
            case 10:
                return this.equality_expression_sempred(_localctx, predIndex);
            case 11:
                return this.and_expression_sempred(_localctx, predIndex);
            case 12:
                return this.or_expression_sempred(_localctx, predIndex);
            case 13:
                return this.expression_sempred(_localctx, predIndex);
            case 17:
                return this.statement_list_sempred(_localctx, predIndex);
            case 18:
                return this.identifier_list_sempred(_localctx, predIndex);
            case 24:
                return this.array_list_sempred(_localctx, predIndex);
            case 26:
                return this.elseif_clause_sempred(_localctx, predIndex);
            case 30:
                return this.func_ident_list_sempred(_localctx, predIndex);
        }
        return true;
    };
    matlabParser.prototype.postfix_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.index_expression_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.multiplicative_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 8);
            case 4:
                return this.precpred(this._ctx, 7);
            case 5:
                return this.precpred(this._ctx, 6);
            case 6:
                return this.precpred(this._ctx, 5);
            case 7:
                return this.precpred(this._ctx, 4);
            case 8:
                return this.precpred(this._ctx, 3);
            case 9:
                return this.precpred(this._ctx, 2);
            case 10:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.additive_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this._ctx, 2);
            case 12:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.relational_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 13:
                return this.precpred(this._ctx, 4);
            case 14:
                return this.precpred(this._ctx, 3);
            case 15:
                return this.precpred(this._ctx, 2);
            case 16:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.equality_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 17:
                return this.precpred(this._ctx, 2);
            case 18:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.and_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 19:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.or_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 20:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 21:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.statement_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 22:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.identifier_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 23:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.array_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 24:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.elseif_clause_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 25:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    matlabParser.prototype.func_ident_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 26:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(matlabParser, "_ATN", {
        get: function () {
            if (!matlabParser.__ATN) {
                matlabParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(matlabParser._serializedATN));
            }
            return matlabParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    matlabParser.T__0 = 1;
    matlabParser.T__1 = 2;
    matlabParser.T__2 = 3;
    matlabParser.T__3 = 4;
    matlabParser.T__4 = 5;
    matlabParser.T__5 = 6;
    matlabParser.T__6 = 7;
    matlabParser.T__7 = 8;
    matlabParser.T__8 = 9;
    matlabParser.T__9 = 10;
    matlabParser.T__10 = 11;
    matlabParser.T__11 = 12;
    matlabParser.T__12 = 13;
    matlabParser.T__13 = 14;
    matlabParser.T__14 = 15;
    matlabParser.T__15 = 16;
    matlabParser.T__16 = 17;
    matlabParser.T__17 = 18;
    matlabParser.T__18 = 19;
    matlabParser.ARRAYMUL = 20;
    matlabParser.ARRAYDIV = 21;
    matlabParser.ARRAYRDIV = 22;
    matlabParser.ARRAYPOW = 23;
    matlabParser.BREAK = 24;
    matlabParser.RETURN = 25;
    matlabParser.FUNCTION = 26;
    matlabParser.FOR = 27;
    matlabParser.WHILE = 28;
    matlabParser.END = 29;
    matlabParser.GLOBAL = 30;
    matlabParser.IF = 31;
    matlabParser.CLEAR = 32;
    matlabParser.ELSE = 33;
    matlabParser.ELSEIF = 34;
    matlabParser.LE_OP = 35;
    matlabParser.GE_OP = 36;
    matlabParser.EQ_OP = 37;
    matlabParser.NE_OP = 38;
    matlabParser.TRANSPOSE = 39;
    matlabParser.NCTRANSPOSE = 40;
    matlabParser.STRING_LITERAL = 41;
    matlabParser.IDENTIFIER = 42;
    matlabParser.CONSTANT = 43;
    matlabParser.CR = 44;
    matlabParser.WS = 45;
    matlabParser.RULE_primary_expression = 0;
    matlabParser.RULE_postfix_expression = 1;
    matlabParser.RULE_index_expression = 2;
    matlabParser.RULE_index_expression_list = 3;
    matlabParser.RULE_array_expression = 4;
    matlabParser.RULE_unary_expression = 5;
    matlabParser.RULE_unary_operator = 6;
    matlabParser.RULE_multiplicative_expression = 7;
    matlabParser.RULE_additive_expression = 8;
    matlabParser.RULE_relational_expression = 9;
    matlabParser.RULE_equality_expression = 10;
    matlabParser.RULE_and_expression = 11;
    matlabParser.RULE_or_expression = 12;
    matlabParser.RULE_expression = 13;
    matlabParser.RULE_assignment_expression = 14;
    matlabParser.RULE_eostmt = 15;
    matlabParser.RULE_statement = 16;
    matlabParser.RULE_statement_list = 17;
    matlabParser.RULE_identifier_list = 18;
    matlabParser.RULE_global_statement = 19;
    matlabParser.RULE_clear_statement = 20;
    matlabParser.RULE_expression_statement = 21;
    matlabParser.RULE_assignment_statement = 22;
    matlabParser.RULE_array_element = 23;
    matlabParser.RULE_array_list = 24;
    matlabParser.RULE_selection_statement = 25;
    matlabParser.RULE_elseif_clause = 26;
    matlabParser.RULE_iteration_statement = 27;
    matlabParser.RULE_jump_statement = 28;
    matlabParser.RULE_translation_unit = 29;
    matlabParser.RULE_func_ident_list = 30;
    matlabParser.RULE_func_return_list = 31;
    matlabParser.RULE_function_declare_lhs = 32;
    matlabParser.RULE_function_declare = 33;
    // tslint:disable:no-trailing-whitespace
    matlabParser.ruleNames = [
        "primary_expression", "postfix_expression", "index_expression", "index_expression_list",
        "array_expression", "unary_expression", "unary_operator", "multiplicative_expression",
        "additive_expression", "relational_expression", "equality_expression",
        "and_expression", "or_expression", "expression", "assignment_expression",
        "eostmt", "statement", "statement_list", "identifier_list", "global_statement",
        "clear_statement", "expression_statement", "assignment_statement", "array_element",
        "array_list", "selection_statement", "elseif_clause", "iteration_statement",
        "jump_statement", "translation_unit", "func_ident_list", "func_return_list",
        "function_declare_lhs", "function_declare",
    ];
    matlabParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'['", "']'", "':'", "','", "'+'", "'-'", "'~'",
        "'*'", "'/'", "'\\'", "'^'", "'<'", "'>'", "'&'", "'|'", "'='", "';'",
        "'.*'", "'.\\'", "'./'", "'.^'", "'break'", "'return'", "'function'",
        "'for'", "'while'", "'end'", "'global'", "'if'", "'clear'", "'else'",
        "'elseif'", "'<='", "'>='", "'=='", "'~='", "'transpose'", "'.''",
    ];
    matlabParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "ARRAYMUL",
        "ARRAYDIV", "ARRAYRDIV", "ARRAYPOW", "BREAK", "RETURN", "FUNCTION", "FOR",
        "WHILE", "END", "GLOBAL", "IF", "CLEAR", "ELSE", "ELSEIF", "LE_OP", "GE_OP",
        "EQ_OP", "NE_OP", "TRANSPOSE", "NCTRANSPOSE", "STRING_LITERAL", "IDENTIFIER",
        "CONSTANT", "CR", "WS",
    ];
    matlabParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(matlabParser._LITERAL_NAMES, matlabParser._SYMBOLIC_NAMES, []);
    matlabParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u01AE\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02T\n\x02\x03\x03\x03\x03\x03" +
        "\x03\x05\x03Y\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03_\n\x03\f\x03" +
        "\x0E\x03b\v\x03\x03\x04\x03\x04\x05\x04f\n\x04\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x07\x05n\n\x05\f\x05\x0E\x05q\v\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07|" +
        "\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x9B\n\t\f\t\x0E\t\x9E\v\t" +
        "\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xA9\n\n\f" +
        "\n\x0E\n\xAC\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
        "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xBD\n\v\f\v\x0E\v\xC0\v\v\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xCB\n\f\f\f\x0E" +
        "\f\xCE\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xD6\n\r\f\r\x0E\r" +
        "\xD9\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xE1\n" +
        "\x0E\f\x0E\x0E\x0E\xE4\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x07\x0F\xEC\n\x0F\f\x0F\x0E\x0F\xEF\v\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x05\x12\xFE\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
        "\x13\u0105\n\x13\f\x13\x0E\x13\u0108\v\x13\x03\x14\x03\x14\x03\x14\x03" +
        "\x14\x03\x14\x07\x14\u010F\n\x14\f\x14\x0E\x14\u0112\v\x14\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
        "\x17\x03\x17\x05\x17\u0120\n\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
        "\x05\x19\u0127\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u012E" +
        "\n\x1A\f\x1A\x0E\x1A\u0131\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0151" +
        "\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x07\x1C\u015D\n\x1C\f\x1C\x0E\x1C\u0160\v\x1C\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u017A\n\x1D\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x05\x1E\u0180\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
        "\x03\x1F\x03\x1F\x05\x1F\u0188\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x07" +
        " \u0190\n \f \x0E \u0193\v \x03!\x03!\x03!\x03!\x03!\x05!\u019A\n!\x03" +
        "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01A5\n\"\x03" +
        "#\x03#\x03#\x03#\x03#\x05#\u01AC\n#\x03#\x02\x02\x10\x04\b\x10\x12\x14" +
        "\x16\x18\x1A\x1C$&26>$\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
        ">\x02@\x02B\x02D\x02\x02\x04\x03\x02\t\v\x05\x02\b\b\x15\x15..\x02\u01C1" +
        "\x02S\x03\x02\x02\x02\x04X\x03\x02\x02\x02\x06e\x03\x02\x02\x02\bg\x03" +
        "\x02\x02\x02\nr\x03\x02\x02\x02\f{\x03\x02\x02\x02\x0E}\x03\x02\x02\x02" +
        "\x10\x7F\x03\x02\x02\x02\x12\x9F\x03\x02\x02\x02\x14\xAD\x03\x02\x02\x02" +
        "\x16\xC1\x03\x02\x02\x02\x18\xCF\x03\x02\x02\x02\x1A\xDA\x03\x02\x02\x02" +
        "\x1C\xE5\x03\x02\x02\x02\x1E\xF0\x03\x02\x02\x02 \xF4\x03\x02\x02\x02" +
        "\"\xFD\x03\x02\x02\x02$\xFF\x03\x02\x02\x02&\u0109\x03\x02\x02\x02(\u0113" +
        "\x03\x02\x02\x02*\u0117\x03\x02\x02\x02,\u011F\x03\x02\x02\x02.\u0121" +
        "\x03\x02\x02\x020\u0126\x03\x02\x02\x022\u0128\x03\x02\x02\x024\u0150" +
        "\x03\x02\x02\x026\u0152\x03\x02\x02\x028\u0179\x03\x02\x02\x02:\u017F" +
        "\x03\x02\x02\x02<\u0187\x03\x02\x02\x02>\u0189\x03\x02\x02\x02@\u0199" +
        "\x03\x02\x02\x02B\u01A4\x03\x02\x02\x02D\u01AB\x03\x02\x02\x02FT\x07," +
        "\x02\x02GT\x07-\x02\x02HT\x07+\x02\x02IJ\x07\x03\x02\x02JK\x05\x1C\x0F" +
        "\x02KL\x07\x04\x02\x02LT\x03\x02\x02\x02MN\x07\x05\x02\x02NT\x07\x06\x02" +
        "\x02OP\x07\x05\x02\x02PQ\x052\x1A\x02QR\x07\x06\x02\x02RT\x03\x02\x02" +
        "\x02SF\x03\x02\x02\x02SG\x03\x02\x02\x02SH\x03\x02\x02\x02SI\x03\x02\x02" +
        "\x02SM\x03\x02\x02\x02SO\x03\x02\x02\x02T\x03\x03\x02\x02\x02UV\b\x03" +
        "\x01\x02VY\x05\x02\x02\x02WY\x05\n\x06\x02XU\x03\x02\x02\x02XW\x03\x02" +
        "\x02\x02Y`\x03\x02\x02\x02Z[\f\x04\x02\x02[_\x07)\x02\x02\\]\f\x03\x02" +
        "\x02]_\x07*\x02\x02^Z\x03\x02\x02\x02^\\\x03\x02\x02\x02_b\x03\x02\x02" +
        "\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02a\x05\x03\x02\x02\x02b`\x03\x02" +
        "\x02\x02cf\x07\x07\x02\x02df\x05\x1C\x0F\x02ec\x03\x02\x02\x02ed\x03\x02" +
        "\x02\x02f\x07\x03\x02\x02\x02gh\b\x05\x01\x02hi\x05\x06\x04\x02io\x03" +
        "\x02\x02\x02jk\f\x03\x02\x02kl\x07\b\x02\x02ln\x05\x06\x04\x02mj\x03\x02" +
        "\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\t\x03" +
        "\x02\x02\x02qo\x03\x02\x02\x02rs\x07,\x02\x02st\x07\x03\x02\x02tu\x05" +
        "\b\x05\x02uv\x07\x04\x02\x02v\v\x03\x02\x02\x02w|\x05\x04\x03\x02xy\x05" +
        "\x0E\b\x02yz\x05\x04\x03\x02z|\x03\x02\x02\x02{w\x03\x02\x02\x02{x\x03" +
        "\x02\x02\x02|\r\x03\x02\x02\x02}~\t\x02\x02\x02~\x0F\x03\x02\x02\x02\x7F" +
        "\x80\b\t\x01\x02\x80\x81\x05\f\x07\x02\x81\x9C\x03\x02\x02\x02\x82\x83" +
        "\f\n\x02\x02\x83\x84\x07\f\x02\x02\x84\x9B\x05\f\x07\x02\x85\x86\f\t\x02" +
        "\x02\x86\x87\x07\r\x02\x02\x87\x9B\x05\f\x07\x02\x88\x89\f\b\x02\x02\x89" +
        "\x8A\x07\x0E\x02\x02\x8A\x9B\x05\f\x07\x02\x8B\x8C\f\x07\x02\x02\x8C\x8D" +
        "\x07\x0F\x02\x02\x8D\x9B\x05\f\x07\x02\x8E\x8F\f\x06\x02\x02\x8F\x90\x07" +
        "\x16\x02\x02\x90\x9B\x05\f\x07\x02\x91\x92\f\x05\x02\x02\x92\x93\x07\x17" +
        "\x02\x02\x93\x9B\x05\f\x07\x02\x94\x95\f\x04\x02\x02\x95\x96\x07\x18\x02" +
        "\x02\x96\x9B\x05\f\x07\x02\x97\x98\f\x03\x02\x02\x98\x99\x07\x19\x02\x02" +
        "\x99\x9B\x05\f\x07\x02\x9A\x82\x03\x02\x02\x02\x9A\x85\x03\x02\x02\x02" +
        "\x9A\x88\x03\x02\x02\x02\x9A\x8B\x03\x02\x02\x02\x9A\x8E\x03\x02\x02\x02" +
        "\x9A\x91\x03\x02\x02\x02\x9A\x94\x03\x02\x02\x02\x9A\x97\x03\x02\x02\x02" +
        "\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
        "\x9D\x11\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA0\b\n\x01\x02\xA0" +
        "\xA1\x05\x10\t\x02\xA1\xAA\x03\x02\x02\x02\xA2\xA3\f\x04\x02\x02\xA3\xA4" +
        "\x07\t\x02\x02\xA4\xA9\x05\x10\t\x02\xA5\xA6\f\x03\x02\x02\xA6\xA7\x07" +
        "\n\x02\x02\xA7\xA9\x05\x10\t\x02\xA8\xA2\x03\x02\x02\x02\xA8\xA5\x03\x02" +
        "\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02" +
        "\x02\x02\xAB\x13\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE\b\v\x01" +
        "\x02\xAE\xAF\x05\x12\n\x02\xAF\xBE\x03\x02\x02\x02\xB0\xB1\f\x06\x02\x02" +
        "\xB1\xB2\x07\x10\x02\x02\xB2\xBD\x05\x12\n\x02\xB3\xB4\f\x05\x02\x02\xB4" +
        "\xB5\x07\x11\x02\x02\xB5\xBD\x05\x12\n\x02\xB6\xB7\f\x04\x02\x02\xB7\xB8" +
        "\x07%\x02\x02\xB8\xBD\x05\x12\n\x02\xB9\xBA\f\x03\x02\x02\xBA\xBB\x07" +
        "&\x02\x02\xBB\xBD\x05\x12\n\x02\xBC\xB0\x03\x02\x02\x02\xBC\xB3\x03\x02" +
        "\x02\x02\xBC\xB6\x03\x02\x02\x02\xBC\xB9\x03\x02\x02\x02\xBD\xC0\x03\x02" +
        "\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\x15\x03\x02" +
        "\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\b\f\x01\x02\xC2\xC3\x05\x14\v" +
        "\x02\xC3\xCC\x03\x02\x02\x02\xC4\xC5\f\x04\x02\x02\xC5\xC6\x07\'\x02\x02" +
        "\xC6\xCB\x05\x14\v\x02\xC7\xC8\f\x03\x02\x02\xC8\xC9\x07(\x02\x02\xC9" +
        "\xCB\x05\x14\v\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC7\x03\x02\x02\x02\xCB" +
        "\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD" +
        "\x17\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD0\b\r\x01\x02\xD0\xD1" +
        "\x05\x16\f\x02\xD1\xD7\x03\x02\x02\x02\xD2\xD3\f\x03\x02\x02\xD3\xD4\x07" +
        "\x12\x02\x02\xD4\xD6\x05\x16\f\x02\xD5\xD2\x03\x02\x02\x02\xD6\xD9\x03" +
        "\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x19\x03" +
        "\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\b\x0E\x01\x02\xDB\xDC\x05" +
        "\x18\r\x02\xDC\xE2\x03\x02\x02\x02\xDD\xDE\f\x03\x02\x02\xDE\xDF\x07\x13" +
        "\x02\x02\xDF\xE1\x05\x18\r\x02\xE0\xDD\x03\x02\x02\x02\xE1\xE4\x03\x02" +
        "\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\x1B\x03\x02" +
        "\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\b\x0F\x01\x02\xE6\xE7\x05\x1A" +
        "\x0E\x02\xE7\xED\x03\x02\x02\x02\xE8\xE9\f\x03\x02\x02\xE9\xEA\x07\x07" +
        "\x02\x02\xEA\xEC\x05\x1A\x0E\x02\xEB\xE8\x03\x02\x02\x02\xEC\xEF\x03\x02" +
        "\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x1D\x03\x02" +
        "\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF1\x05\x04\x03\x02\xF1\xF2\x07\x14" +
        "\x02\x02\xF2\xF3\x05\x1C\x0F\x02\xF3\x1F\x03\x02\x02\x02\xF4\xF5\t\x03" +
        "\x02\x02\xF5!\x03\x02\x02\x02\xF6\xFE\x05(\x15\x02\xF7\xFE\x05*\x16\x02" +
        "\xF8\xFE\x05.\x18\x02\xF9\xFE\x05,\x17\x02\xFA\xFE\x054\x1B\x02\xFB\xFE" +
        "\x058\x1D\x02\xFC\xFE\x05:\x1E\x02\xFD\xF6\x03\x02\x02\x02\xFD\xF7\x03" +
        "\x02\x02\x02\xFD\xF8\x03\x02\x02\x02\xFD\xF9\x03\x02\x02\x02\xFD\xFA\x03" +
        "\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE#\x03" +
        "\x02\x02\x02\xFF\u0100\b\x13\x01\x02\u0100\u0101\x05\"\x12\x02\u0101\u0106" +
        "\x03\x02\x02\x02\u0102\u0103\f\x03\x02\x02\u0103\u0105\x05\"\x12\x02\u0104" +
        "\u0102\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02" +
        "\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107%\x03\x02\x02\x02\u0108\u0106" +
        "\x03\x02\x02\x02\u0109\u010A\b\x14\x01\x02\u010A\u010B\x07,\x02\x02\u010B" +
        "\u0110\x03\x02\x02\x02\u010C\u010D\f\x03\x02\x02\u010D\u010F\x07,\x02" +
        "\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E" +
        "\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\'\x03\x02\x02\x02\u0112" +
        "\u0110\x03\x02\x02\x02\u0113\u0114\x07 \x02\x02\u0114\u0115\x05&\x14\x02" +
        "\u0115\u0116\x05 \x11\x02\u0116)\x03\x02\x02\x02\u0117\u0118\x07\"\x02" +
        "\x02\u0118\u0119\x05&\x14\x02\u0119\u011A\x05 \x11\x02\u011A+\x03\x02" +
        "\x02\x02\u011B\u0120\x05 \x11\x02\u011C\u011D\x05\x1C\x0F\x02\u011D\u011E" +
        "\x05 \x11\x02\u011E\u0120\x03\x02\x02\x02\u011F\u011B\x03\x02\x02\x02" +
        "\u011F\u011C\x03\x02\x02\x02\u0120-\x03\x02\x02\x02\u0121\u0122\x05\x1E" +
        "\x10\x02\u0122\u0123\x05 \x11\x02\u0123/\x03\x02\x02\x02\u0124\u0127\x05" +
        "\x1C\x0F\x02\u0125\u0127\x05,\x17\x02\u0126\u0124\x03\x02\x02\x02\u0126" +
        "\u0125\x03\x02\x02\x02\u01271\x03\x02\x02\x02\u0128\u0129\b\x1A\x01\x02" +
        "\u0129\u012A\x050\x19\x02\u012A\u012F\x03\x02\x02\x02\u012B\u012C\f\x03" +
        "\x02\x02\u012C\u012E\x050\x19\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0131" +
        "\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02" +
        "\u01303\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0133\x07!\x02" +
        "\x02\u0133\u0134\x05\x1C\x0F\x02\u0134\u0135\x05$\x13\x02\u0135\u0136" +
        "\x07\x1F\x02\x02\u0136\u0137\x05 \x11\x02\u0137\u0151\x03\x02\x02\x02" +
        "\u0138\u0139\x07!\x02\x02\u0139\u013A\x05\x1C\x0F\x02\u013A\u013B\x05" +
        "$\x13\x02\u013B\u013C\x07#\x02\x02\u013C\u013D\x05$\x13\x02\u013D\u013E" +
        "\x07\x1F\x02\x02\u013E\u013F\x05 \x11\x02\u013F\u0151\x03\x02\x02\x02" +
        "\u0140\u0141\x07!\x02\x02\u0141\u0142\x05\x1C\x0F\x02\u0142\u0143\x05" +
        "$\x13\x02\u0143\u0144\x056\x1C\x02\u0144\u0145\x07\x1F\x02\x02\u0145\u0146" +
        "\x05 \x11\x02\u0146\u0151\x03\x02\x02\x02\u0147\u0148\x07!\x02\x02\u0148" +
        "\u0149\x05\x1C\x0F\x02\u0149\u014A\x05$\x13\x02\u014A\u014B\x056\x1C\x02" +
        "\u014B\u014C\x07#\x02\x02\u014C\u014D\x05$\x13\x02\u014D\u014E\x07\x1F" +
        "\x02\x02\u014E\u014F\x05 \x11\x02\u014F\u0151\x03\x02\x02\x02\u0150\u0132" +
        "\x03\x02\x02\x02\u0150\u0138\x03\x02\x02\x02\u0150\u0140\x03\x02\x02\x02" +
        "\u0150\u0147\x03\x02\x02\x02\u01515\x03\x02\x02\x02\u0152\u0153\b\x1C" +
        "\x01\x02\u0153\u0154\x07$\x02\x02\u0154\u0155\x05\x1C\x0F\x02\u0155\u0156" +
        "\x05$\x13\x02\u0156\u015E\x03\x02\x02\x02\u0157\u0158\f\x03\x02\x02\u0158" +
        "\u0159\x07$\x02\x02\u0159\u015A\x05\x1C\x0F\x02\u015A\u015B\x05$\x13\x02" +
        "\u015B\u015D\x03\x02\x02\x02\u015C\u0157\x03\x02\x02\x02\u015D\u0160\x03" +
        "\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F" +
        "7\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0162\x07\x1E\x02" +
        "\x02\u0162\u0163\x05\x1C\x0F\x02\u0163\u0164\x05$\x13\x02\u0164\u0165" +
        "\x07\x1F\x02\x02\u0165\u0166\x05 \x11\x02\u0166\u017A\x03\x02\x02\x02" +
        "\u0167\u0168\x07\x1D\x02\x02\u0168\u0169\x07,\x02\x02\u0169\u016A\x07" +
        "\x14\x02\x02\u016A\u016B\x05\x1C\x0F\x02\u016B\u016C\x05$\x13\x02\u016C" +
        "\u016D\x07\x1F\x02\x02\u016D\u016E\x05 \x11\x02\u016E\u017A\x03\x02\x02" +
        "\x02\u016F\u0170\x07\x1D\x02\x02\u0170\u0171\x07\x03\x02\x02\u0171\u0172" +
        "\x07,\x02\x02\u0172\u0173\x07\x14\x02\x02\u0173\u0174\x05\x1C\x0F\x02" +
        "\u0174\u0175\x07\x04\x02\x02\u0175\u0176\x05$\x13\x02\u0176\u0177\x07" +
        "\x1F\x02\x02\u0177\u0178\x05 \x11\x02\u0178\u017A\x03\x02\x02\x02\u0179" +
        "\u0161\x03\x02\x02\x02\u0179\u0167\x03\x02\x02\x02\u0179\u016F\x03\x02" +
        "\x02\x02\u017A9\x03\x02\x02\x02\u017B\u017C\x07\x1A\x02\x02\u017C\u0180" +
        "\x05 \x11\x02\u017D\u017E\x07\x1B\x02\x02\u017E\u0180\x05 \x11\x02\u017F" +
        "\u017B\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180;\x03\x02\x02" +
        "\x02\u0181\u0188\x05$\x13\x02\u0182\u0183\x07\x1C\x02\x02\u0183\u0184" +
        "\x05D#\x02\u0184\u0185\x05 \x11\x02\u0185\u0186\x05$\x13\x02\u0186\u0188" +
        "\x03\x02\x02\x02\u0187\u0181\x03\x02\x02\x02\u0187\u0182\x03\x02\x02\x02" +
        "\u0188=\x03\x02\x02\x02\u0189\u018A\b \x01\x02\u018A\u018B\x07,\x02\x02" +
        "\u018B\u0191\x03\x02\x02\x02\u018C\u018D\f\x03\x02\x02\u018D\u018E\x07" +
        "\b\x02\x02\u018E\u0190\x07,\x02\x02\u018F\u018C\x03\x02\x02\x02\u0190" +
        "\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02" +
        "\x02\x02\u0192?\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u019A" +
        "\x07,\x02\x02\u0195\u0196\x07\x05\x02\x02\u0196\u0197\x05> \x02\u0197" +
        "\u0198\x07\x06\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0194\x03\x02" +
        "\x02\x02\u0199\u0195\x03\x02\x02\x02\u019AA\x03\x02\x02\x02\u019B\u01A5" +
        "\x07,\x02\x02\u019C\u019D\x07,\x02\x02\u019D\u019E\x07\x03\x02\x02\u019E" +
        "\u01A5\x07\x04\x02\x02\u019F\u01A0\x07,\x02\x02\u01A0\u01A1\x07\x03\x02" +
        "\x02\u01A1\u01A2\x05> \x02\u01A2\u01A3\x07\x04\x02\x02\u01A3\u01A5\x03" +
        "\x02\x02\x02\u01A4\u019B\x03\x02\x02\x02\u01A4\u019C\x03\x02\x02\x02\u01A4" +
        "\u019F\x03\x02\x02\x02\u01A5C\x03\x02\x02\x02\u01A6\u01AC\x05B\"\x02\u01A7" +
        "\u01A8\x05@!\x02\u01A8\u01A9\x07\x14\x02\x02\u01A9\u01AA\x05B\"\x02\u01AA" +
        "\u01AC\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02" +
        "\x02\x02\u01ACE\x03\x02\x02\x02#SX^`eo{\x9A\x9C\xA8\xAA\xBC\xBE\xCA\xCC" +
        "\xD7\xE2\xED\xFD\u0106\u0110\u011F\u0126\u012F\u0150\u015E\u0179\u017F" +
        "\u0187\u0191\u0199\u01A4\u01AB";
    return matlabParser;
}(Parser_1.Parser));
exports.matlabParser = matlabParser;
var Primary_expressionContext = /** @class */ (function (_super) {
    __extends(Primary_expressionContext, _super);
    function Primary_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Primary_expressionContext.prototype.IDENTIFIER = function () { return this.tryGetToken(matlabParser.IDENTIFIER, 0); };
    Primary_expressionContext.prototype.CONSTANT = function () { return this.tryGetToken(matlabParser.CONSTANT, 0); };
    Primary_expressionContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(matlabParser.STRING_LITERAL, 0); };
    Primary_expressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Primary_expressionContext.prototype.array_list = function () {
        return this.tryGetRuleContext(0, Array_listContext);
    };
    Object.defineProperty(Primary_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_primary_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Primary_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimary_expression) {
            listener.enterPrimary_expression(this);
        }
    };
    // @Override
    Primary_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimary_expression) {
            listener.exitPrimary_expression(this);
        }
    };
    // @Override
    Primary_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimary_expression) {
            return visitor.visitPrimary_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Primary_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Primary_expressionContext = Primary_expressionContext;
var Postfix_expressionContext = /** @class */ (function (_super) {
    __extends(Postfix_expressionContext, _super);
    function Postfix_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Postfix_expressionContext.prototype.primary_expression = function () {
        return this.tryGetRuleContext(0, Primary_expressionContext);
    };
    Postfix_expressionContext.prototype.array_expression = function () {
        return this.tryGetRuleContext(0, Array_expressionContext);
    };
    Postfix_expressionContext.prototype.postfix_expression = function () {
        return this.tryGetRuleContext(0, Postfix_expressionContext);
    };
    Postfix_expressionContext.prototype.TRANSPOSE = function () { return this.tryGetToken(matlabParser.TRANSPOSE, 0); };
    Postfix_expressionContext.prototype.NCTRANSPOSE = function () { return this.tryGetToken(matlabParser.NCTRANSPOSE, 0); };
    Object.defineProperty(Postfix_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_postfix_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Postfix_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfix_expression) {
            listener.enterPostfix_expression(this);
        }
    };
    // @Override
    Postfix_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfix_expression) {
            listener.exitPostfix_expression(this);
        }
    };
    // @Override
    Postfix_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfix_expression) {
            return visitor.visitPostfix_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Postfix_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Postfix_expressionContext = Postfix_expressionContext;
var Index_expressionContext = /** @class */ (function (_super) {
    __extends(Index_expressionContext, _super);
    function Index_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Index_expressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Index_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_index_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Index_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIndex_expression) {
            listener.enterIndex_expression(this);
        }
    };
    // @Override
    Index_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIndex_expression) {
            listener.exitIndex_expression(this);
        }
    };
    // @Override
    Index_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIndex_expression) {
            return visitor.visitIndex_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Index_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Index_expressionContext = Index_expressionContext;
var Index_expression_listContext = /** @class */ (function (_super) {
    __extends(Index_expression_listContext, _super);
    function Index_expression_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Index_expression_listContext.prototype.index_expression = function () {
        return this.getRuleContext(0, Index_expressionContext);
    };
    Index_expression_listContext.prototype.index_expression_list = function () {
        return this.tryGetRuleContext(0, Index_expression_listContext);
    };
    Object.defineProperty(Index_expression_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_index_expression_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Index_expression_listContext.prototype.enterRule = function (listener) {
        if (listener.enterIndex_expression_list) {
            listener.enterIndex_expression_list(this);
        }
    };
    // @Override
    Index_expression_listContext.prototype.exitRule = function (listener) {
        if (listener.exitIndex_expression_list) {
            listener.exitIndex_expression_list(this);
        }
    };
    // @Override
    Index_expression_listContext.prototype.accept = function (visitor) {
        if (visitor.visitIndex_expression_list) {
            return visitor.visitIndex_expression_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Index_expression_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Index_expression_listContext = Index_expression_listContext;
var Array_expressionContext = /** @class */ (function (_super) {
    __extends(Array_expressionContext, _super);
    function Array_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_expressionContext.prototype.IDENTIFIER = function () { return this.getToken(matlabParser.IDENTIFIER, 0); };
    Array_expressionContext.prototype.index_expression_list = function () {
        return this.getRuleContext(0, Index_expression_listContext);
    };
    Object.defineProperty(Array_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_array_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_expression) {
            listener.enterArray_expression(this);
        }
    };
    // @Override
    Array_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_expression) {
            listener.exitArray_expression(this);
        }
    };
    // @Override
    Array_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_expression) {
            return visitor.visitArray_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_expressionContext = Array_expressionContext;
var Unary_expressionContext = /** @class */ (function (_super) {
    __extends(Unary_expressionContext, _super);
    function Unary_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unary_expressionContext.prototype.postfix_expression = function () {
        return this.getRuleContext(0, Postfix_expressionContext);
    };
    Unary_expressionContext.prototype.unary_operator = function () {
        return this.tryGetRuleContext(0, Unary_operatorContext);
    };
    Object.defineProperty(Unary_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_unary_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unary_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnary_expression) {
            listener.enterUnary_expression(this);
        }
    };
    // @Override
    Unary_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnary_expression) {
            listener.exitUnary_expression(this);
        }
    };
    // @Override
    Unary_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnary_expression) {
            return visitor.visitUnary_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unary_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unary_expressionContext = Unary_expressionContext;
var Unary_operatorContext = /** @class */ (function (_super) {
    __extends(Unary_operatorContext, _super);
    function Unary_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Unary_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_unary_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unary_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterUnary_operator) {
            listener.enterUnary_operator(this);
        }
    };
    // @Override
    Unary_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitUnary_operator) {
            listener.exitUnary_operator(this);
        }
    };
    // @Override
    Unary_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitUnary_operator) {
            return visitor.visitUnary_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unary_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unary_operatorContext = Unary_operatorContext;
var Multiplicative_expressionContext = /** @class */ (function (_super) {
    __extends(Multiplicative_expressionContext, _super);
    function Multiplicative_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multiplicative_expressionContext.prototype.unary_expression = function () {
        return this.getRuleContext(0, Unary_expressionContext);
    };
    Multiplicative_expressionContext.prototype.multiplicative_expression = function () {
        return this.tryGetRuleContext(0, Multiplicative_expressionContext);
    };
    Multiplicative_expressionContext.prototype.ARRAYMUL = function () { return this.tryGetToken(matlabParser.ARRAYMUL, 0); };
    Multiplicative_expressionContext.prototype.ARRAYDIV = function () { return this.tryGetToken(matlabParser.ARRAYDIV, 0); };
    Multiplicative_expressionContext.prototype.ARRAYRDIV = function () { return this.tryGetToken(matlabParser.ARRAYRDIV, 0); };
    Multiplicative_expressionContext.prototype.ARRAYPOW = function () { return this.tryGetToken(matlabParser.ARRAYPOW, 0); };
    Object.defineProperty(Multiplicative_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_multiplicative_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multiplicative_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicative_expression) {
            listener.enterMultiplicative_expression(this);
        }
    };
    // @Override
    Multiplicative_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicative_expression) {
            listener.exitMultiplicative_expression(this);
        }
    };
    // @Override
    Multiplicative_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicative_expression) {
            return visitor.visitMultiplicative_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multiplicative_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multiplicative_expressionContext = Multiplicative_expressionContext;
var Additive_expressionContext = /** @class */ (function (_super) {
    __extends(Additive_expressionContext, _super);
    function Additive_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Additive_expressionContext.prototype.multiplicative_expression = function () {
        return this.getRuleContext(0, Multiplicative_expressionContext);
    };
    Additive_expressionContext.prototype.additive_expression = function () {
        return this.tryGetRuleContext(0, Additive_expressionContext);
    };
    Object.defineProperty(Additive_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_additive_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Additive_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditive_expression) {
            listener.enterAdditive_expression(this);
        }
    };
    // @Override
    Additive_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditive_expression) {
            listener.exitAdditive_expression(this);
        }
    };
    // @Override
    Additive_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditive_expression) {
            return visitor.visitAdditive_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Additive_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Additive_expressionContext = Additive_expressionContext;
var Relational_expressionContext = /** @class */ (function (_super) {
    __extends(Relational_expressionContext, _super);
    function Relational_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Relational_expressionContext.prototype.additive_expression = function () {
        return this.getRuleContext(0, Additive_expressionContext);
    };
    Relational_expressionContext.prototype.relational_expression = function () {
        return this.tryGetRuleContext(0, Relational_expressionContext);
    };
    Relational_expressionContext.prototype.LE_OP = function () { return this.tryGetToken(matlabParser.LE_OP, 0); };
    Relational_expressionContext.prototype.GE_OP = function () { return this.tryGetToken(matlabParser.GE_OP, 0); };
    Object.defineProperty(Relational_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_relational_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Relational_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRelational_expression) {
            listener.enterRelational_expression(this);
        }
    };
    // @Override
    Relational_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRelational_expression) {
            listener.exitRelational_expression(this);
        }
    };
    // @Override
    Relational_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRelational_expression) {
            return visitor.visitRelational_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Relational_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Relational_expressionContext = Relational_expressionContext;
var Equality_expressionContext = /** @class */ (function (_super) {
    __extends(Equality_expressionContext, _super);
    function Equality_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Equality_expressionContext.prototype.relational_expression = function () {
        return this.getRuleContext(0, Relational_expressionContext);
    };
    Equality_expressionContext.prototype.equality_expression = function () {
        return this.tryGetRuleContext(0, Equality_expressionContext);
    };
    Equality_expressionContext.prototype.EQ_OP = function () { return this.tryGetToken(matlabParser.EQ_OP, 0); };
    Equality_expressionContext.prototype.NE_OP = function () { return this.tryGetToken(matlabParser.NE_OP, 0); };
    Object.defineProperty(Equality_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_equality_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Equality_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEquality_expression) {
            listener.enterEquality_expression(this);
        }
    };
    // @Override
    Equality_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEquality_expression) {
            listener.exitEquality_expression(this);
        }
    };
    // @Override
    Equality_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEquality_expression) {
            return visitor.visitEquality_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Equality_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Equality_expressionContext = Equality_expressionContext;
var And_expressionContext = /** @class */ (function (_super) {
    __extends(And_expressionContext, _super);
    function And_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    And_expressionContext.prototype.equality_expression = function () {
        return this.getRuleContext(0, Equality_expressionContext);
    };
    And_expressionContext.prototype.and_expression = function () {
        return this.tryGetRuleContext(0, And_expressionContext);
    };
    Object.defineProperty(And_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_and_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    And_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAnd_expression) {
            listener.enterAnd_expression(this);
        }
    };
    // @Override
    And_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAnd_expression) {
            listener.exitAnd_expression(this);
        }
    };
    // @Override
    And_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAnd_expression) {
            return visitor.visitAnd_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return And_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.And_expressionContext = And_expressionContext;
var Or_expressionContext = /** @class */ (function (_super) {
    __extends(Or_expressionContext, _super);
    function Or_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Or_expressionContext.prototype.and_expression = function () {
        return this.getRuleContext(0, And_expressionContext);
    };
    Or_expressionContext.prototype.or_expression = function () {
        return this.tryGetRuleContext(0, Or_expressionContext);
    };
    Object.defineProperty(Or_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_or_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Or_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterOr_expression) {
            listener.enterOr_expression(this);
        }
    };
    // @Override
    Or_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitOr_expression) {
            listener.exitOr_expression(this);
        }
    };
    // @Override
    Or_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitOr_expression) {
            return visitor.visitOr_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Or_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Or_expressionContext = Or_expressionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.or_expression = function () {
        return this.getRuleContext(0, Or_expressionContext);
    };
    ExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_expression; },
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
var Assignment_expressionContext = /** @class */ (function (_super) {
    __extends(Assignment_expressionContext, _super);
    function Assignment_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assignment_expressionContext.prototype.postfix_expression = function () {
        return this.getRuleContext(0, Postfix_expressionContext);
    };
    Assignment_expressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Assignment_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_assignment_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assignment_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment_expression) {
            listener.enterAssignment_expression(this);
        }
    };
    // @Override
    Assignment_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment_expression) {
            listener.exitAssignment_expression(this);
        }
    };
    // @Override
    Assignment_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment_expression) {
            return visitor.visitAssignment_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assignment_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assignment_expressionContext = Assignment_expressionContext;
var EostmtContext = /** @class */ (function (_super) {
    __extends(EostmtContext, _super);
    function EostmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EostmtContext.prototype.CR = function () { return this.getToken(matlabParser.CR, 0); };
    Object.defineProperty(EostmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_eostmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EostmtContext.prototype.enterRule = function (listener) {
        if (listener.enterEostmt) {
            listener.enterEostmt(this);
        }
    };
    // @Override
    EostmtContext.prototype.exitRule = function (listener) {
        if (listener.exitEostmt) {
            listener.exitEostmt(this);
        }
    };
    // @Override
    EostmtContext.prototype.accept = function (visitor) {
        if (visitor.visitEostmt) {
            return visitor.visitEostmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EostmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EostmtContext = EostmtContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.global_statement = function () {
        return this.tryGetRuleContext(0, Global_statementContext);
    };
    StatementContext.prototype.clear_statement = function () {
        return this.tryGetRuleContext(0, Clear_statementContext);
    };
    StatementContext.prototype.assignment_statement = function () {
        return this.tryGetRuleContext(0, Assignment_statementContext);
    };
    StatementContext.prototype.expression_statement = function () {
        return this.tryGetRuleContext(0, Expression_statementContext);
    };
    StatementContext.prototype.selection_statement = function () {
        return this.tryGetRuleContext(0, Selection_statementContext);
    };
    StatementContext.prototype.iteration_statement = function () {
        return this.tryGetRuleContext(0, Iteration_statementContext);
    };
    StatementContext.prototype.jump_statement = function () {
        return this.tryGetRuleContext(0, Jump_statementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_statement; },
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
var Statement_listContext = /** @class */ (function (_super) {
    __extends(Statement_listContext, _super);
    function Statement_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Statement_listContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Statement_listContext.prototype.statement_list = function () {
        return this.tryGetRuleContext(0, Statement_listContext);
    };
    Object.defineProperty(Statement_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_statement_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Statement_listContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement_list) {
            listener.enterStatement_list(this);
        }
    };
    // @Override
    Statement_listContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement_list) {
            listener.exitStatement_list(this);
        }
    };
    // @Override
    Statement_listContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement_list) {
            return visitor.visitStatement_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Statement_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Statement_listContext = Statement_listContext;
var Identifier_listContext = /** @class */ (function (_super) {
    __extends(Identifier_listContext, _super);
    function Identifier_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Identifier_listContext.prototype.IDENTIFIER = function () { return this.getToken(matlabParser.IDENTIFIER, 0); };
    Identifier_listContext.prototype.identifier_list = function () {
        return this.tryGetRuleContext(0, Identifier_listContext);
    };
    Object.defineProperty(Identifier_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_identifier_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Identifier_listContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier_list) {
            listener.enterIdentifier_list(this);
        }
    };
    // @Override
    Identifier_listContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier_list) {
            listener.exitIdentifier_list(this);
        }
    };
    // @Override
    Identifier_listContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier_list) {
            return visitor.visitIdentifier_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Identifier_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Identifier_listContext = Identifier_listContext;
var Global_statementContext = /** @class */ (function (_super) {
    __extends(Global_statementContext, _super);
    function Global_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Global_statementContext.prototype.GLOBAL = function () { return this.getToken(matlabParser.GLOBAL, 0); };
    Global_statementContext.prototype.identifier_list = function () {
        return this.getRuleContext(0, Identifier_listContext);
    };
    Global_statementContext.prototype.eostmt = function () {
        return this.getRuleContext(0, EostmtContext);
    };
    Object.defineProperty(Global_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_global_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Global_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobal_statement) {
            listener.enterGlobal_statement(this);
        }
    };
    // @Override
    Global_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobal_statement) {
            listener.exitGlobal_statement(this);
        }
    };
    // @Override
    Global_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobal_statement) {
            return visitor.visitGlobal_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Global_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Global_statementContext = Global_statementContext;
var Clear_statementContext = /** @class */ (function (_super) {
    __extends(Clear_statementContext, _super);
    function Clear_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Clear_statementContext.prototype.CLEAR = function () { return this.getToken(matlabParser.CLEAR, 0); };
    Clear_statementContext.prototype.identifier_list = function () {
        return this.getRuleContext(0, Identifier_listContext);
    };
    Clear_statementContext.prototype.eostmt = function () {
        return this.getRuleContext(0, EostmtContext);
    };
    Object.defineProperty(Clear_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_clear_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Clear_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterClear_statement) {
            listener.enterClear_statement(this);
        }
    };
    // @Override
    Clear_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitClear_statement) {
            listener.exitClear_statement(this);
        }
    };
    // @Override
    Clear_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitClear_statement) {
            return visitor.visitClear_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Clear_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Clear_statementContext = Clear_statementContext;
var Expression_statementContext = /** @class */ (function (_super) {
    __extends(Expression_statementContext, _super);
    function Expression_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expression_statementContext.prototype.eostmt = function () {
        return this.getRuleContext(0, EostmtContext);
    };
    Expression_statementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Expression_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_expression_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expression_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression_statement) {
            listener.enterExpression_statement(this);
        }
    };
    // @Override
    Expression_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression_statement) {
            listener.exitExpression_statement(this);
        }
    };
    // @Override
    Expression_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression_statement) {
            return visitor.visitExpression_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expression_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expression_statementContext = Expression_statementContext;
var Assignment_statementContext = /** @class */ (function (_super) {
    __extends(Assignment_statementContext, _super);
    function Assignment_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assignment_statementContext.prototype.assignment_expression = function () {
        return this.getRuleContext(0, Assignment_expressionContext);
    };
    Assignment_statementContext.prototype.eostmt = function () {
        return this.getRuleContext(0, EostmtContext);
    };
    Object.defineProperty(Assignment_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_assignment_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assignment_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment_statement) {
            listener.enterAssignment_statement(this);
        }
    };
    // @Override
    Assignment_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment_statement) {
            listener.exitAssignment_statement(this);
        }
    };
    // @Override
    Assignment_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment_statement) {
            return visitor.visitAssignment_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assignment_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assignment_statementContext = Assignment_statementContext;
var Array_elementContext = /** @class */ (function (_super) {
    __extends(Array_elementContext, _super);
    function Array_elementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_elementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Array_elementContext.prototype.expression_statement = function () {
        return this.tryGetRuleContext(0, Expression_statementContext);
    };
    Object.defineProperty(Array_elementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_array_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_elementContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_element) {
            listener.enterArray_element(this);
        }
    };
    // @Override
    Array_elementContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_element) {
            listener.exitArray_element(this);
        }
    };
    // @Override
    Array_elementContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_element) {
            return visitor.visitArray_element(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_elementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_elementContext = Array_elementContext;
var Array_listContext = /** @class */ (function (_super) {
    __extends(Array_listContext, _super);
    function Array_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_listContext.prototype.array_element = function () {
        return this.getRuleContext(0, Array_elementContext);
    };
    Array_listContext.prototype.array_list = function () {
        return this.tryGetRuleContext(0, Array_listContext);
    };
    Object.defineProperty(Array_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_array_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_listContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_list) {
            listener.enterArray_list(this);
        }
    };
    // @Override
    Array_listContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_list) {
            listener.exitArray_list(this);
        }
    };
    // @Override
    Array_listContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_list) {
            return visitor.visitArray_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_listContext = Array_listContext;
var Selection_statementContext = /** @class */ (function (_super) {
    __extends(Selection_statementContext, _super);
    function Selection_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Selection_statementContext.prototype.IF = function () { return this.getToken(matlabParser.IF, 0); };
    Selection_statementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Selection_statementContext.prototype.statement_list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Statement_listContext);
        }
        else {
            return this.getRuleContext(i, Statement_listContext);
        }
    };
    Selection_statementContext.prototype.END = function () { return this.getToken(matlabParser.END, 0); };
    Selection_statementContext.prototype.eostmt = function () {
        return this.getRuleContext(0, EostmtContext);
    };
    Selection_statementContext.prototype.ELSE = function () { return this.tryGetToken(matlabParser.ELSE, 0); };
    Selection_statementContext.prototype.elseif_clause = function () {
        return this.tryGetRuleContext(0, Elseif_clauseContext);
    };
    Object.defineProperty(Selection_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_selection_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Selection_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterSelection_statement) {
            listener.enterSelection_statement(this);
        }
    };
    // @Override
    Selection_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitSelection_statement) {
            listener.exitSelection_statement(this);
        }
    };
    // @Override
    Selection_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitSelection_statement) {
            return visitor.visitSelection_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Selection_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Selection_statementContext = Selection_statementContext;
var Elseif_clauseContext = /** @class */ (function (_super) {
    __extends(Elseif_clauseContext, _super);
    function Elseif_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Elseif_clauseContext.prototype.ELSEIF = function () { return this.getToken(matlabParser.ELSEIF, 0); };
    Elseif_clauseContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Elseif_clauseContext.prototype.statement_list = function () {
        return this.getRuleContext(0, Statement_listContext);
    };
    Elseif_clauseContext.prototype.elseif_clause = function () {
        return this.tryGetRuleContext(0, Elseif_clauseContext);
    };
    Object.defineProperty(Elseif_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_elseif_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Elseif_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterElseif_clause) {
            listener.enterElseif_clause(this);
        }
    };
    // @Override
    Elseif_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitElseif_clause) {
            listener.exitElseif_clause(this);
        }
    };
    // @Override
    Elseif_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitElseif_clause) {
            return visitor.visitElseif_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Elseif_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Elseif_clauseContext = Elseif_clauseContext;
var Iteration_statementContext = /** @class */ (function (_super) {
    __extends(Iteration_statementContext, _super);
    function Iteration_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Iteration_statementContext.prototype.WHILE = function () { return this.tryGetToken(matlabParser.WHILE, 0); };
    Iteration_statementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Iteration_statementContext.prototype.statement_list = function () {
        return this.getRuleContext(0, Statement_listContext);
    };
    Iteration_statementContext.prototype.END = function () { return this.getToken(matlabParser.END, 0); };
    Iteration_statementContext.prototype.eostmt = function () {
        return this.getRuleContext(0, EostmtContext);
    };
    Iteration_statementContext.prototype.FOR = function () { return this.tryGetToken(matlabParser.FOR, 0); };
    Iteration_statementContext.prototype.IDENTIFIER = function () { return this.tryGetToken(matlabParser.IDENTIFIER, 0); };
    Object.defineProperty(Iteration_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_iteration_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Iteration_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterIteration_statement) {
            listener.enterIteration_statement(this);
        }
    };
    // @Override
    Iteration_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitIteration_statement) {
            listener.exitIteration_statement(this);
        }
    };
    // @Override
    Iteration_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitIteration_statement) {
            return visitor.visitIteration_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Iteration_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Iteration_statementContext = Iteration_statementContext;
var Jump_statementContext = /** @class */ (function (_super) {
    __extends(Jump_statementContext, _super);
    function Jump_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_statementContext.prototype.BREAK = function () { return this.tryGetToken(matlabParser.BREAK, 0); };
    Jump_statementContext.prototype.eostmt = function () {
        return this.getRuleContext(0, EostmtContext);
    };
    Jump_statementContext.prototype.RETURN = function () { return this.tryGetToken(matlabParser.RETURN, 0); };
    Object.defineProperty(Jump_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_jump_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterJump_statement) {
            listener.enterJump_statement(this);
        }
    };
    // @Override
    Jump_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitJump_statement) {
            listener.exitJump_statement(this);
        }
    };
    // @Override
    Jump_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitJump_statement) {
            return visitor.visitJump_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_statementContext = Jump_statementContext;
var Translation_unitContext = /** @class */ (function (_super) {
    __extends(Translation_unitContext, _super);
    function Translation_unitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Translation_unitContext.prototype.statement_list = function () {
        return this.getRuleContext(0, Statement_listContext);
    };
    Translation_unitContext.prototype.FUNCTION = function () { return this.tryGetToken(matlabParser.FUNCTION, 0); };
    Translation_unitContext.prototype.function_declare = function () {
        return this.tryGetRuleContext(0, Function_declareContext);
    };
    Translation_unitContext.prototype.eostmt = function () {
        return this.tryGetRuleContext(0, EostmtContext);
    };
    Object.defineProperty(Translation_unitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_translation_unit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Translation_unitContext.prototype.enterRule = function (listener) {
        if (listener.enterTranslation_unit) {
            listener.enterTranslation_unit(this);
        }
    };
    // @Override
    Translation_unitContext.prototype.exitRule = function (listener) {
        if (listener.exitTranslation_unit) {
            listener.exitTranslation_unit(this);
        }
    };
    // @Override
    Translation_unitContext.prototype.accept = function (visitor) {
        if (visitor.visitTranslation_unit) {
            return visitor.visitTranslation_unit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Translation_unitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Translation_unitContext = Translation_unitContext;
var Func_ident_listContext = /** @class */ (function (_super) {
    __extends(Func_ident_listContext, _super);
    function Func_ident_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Func_ident_listContext.prototype.IDENTIFIER = function () { return this.getToken(matlabParser.IDENTIFIER, 0); };
    Func_ident_listContext.prototype.func_ident_list = function () {
        return this.tryGetRuleContext(0, Func_ident_listContext);
    };
    Object.defineProperty(Func_ident_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_func_ident_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Func_ident_listContext.prototype.enterRule = function (listener) {
        if (listener.enterFunc_ident_list) {
            listener.enterFunc_ident_list(this);
        }
    };
    // @Override
    Func_ident_listContext.prototype.exitRule = function (listener) {
        if (listener.exitFunc_ident_list) {
            listener.exitFunc_ident_list(this);
        }
    };
    // @Override
    Func_ident_listContext.prototype.accept = function (visitor) {
        if (visitor.visitFunc_ident_list) {
            return visitor.visitFunc_ident_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Func_ident_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Func_ident_listContext = Func_ident_listContext;
var Func_return_listContext = /** @class */ (function (_super) {
    __extends(Func_return_listContext, _super);
    function Func_return_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Func_return_listContext.prototype.IDENTIFIER = function () { return this.tryGetToken(matlabParser.IDENTIFIER, 0); };
    Func_return_listContext.prototype.func_ident_list = function () {
        return this.tryGetRuleContext(0, Func_ident_listContext);
    };
    Object.defineProperty(Func_return_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_func_return_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Func_return_listContext.prototype.enterRule = function (listener) {
        if (listener.enterFunc_return_list) {
            listener.enterFunc_return_list(this);
        }
    };
    // @Override
    Func_return_listContext.prototype.exitRule = function (listener) {
        if (listener.exitFunc_return_list) {
            listener.exitFunc_return_list(this);
        }
    };
    // @Override
    Func_return_listContext.prototype.accept = function (visitor) {
        if (visitor.visitFunc_return_list) {
            return visitor.visitFunc_return_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Func_return_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Func_return_listContext = Func_return_listContext;
var Function_declare_lhsContext = /** @class */ (function (_super) {
    __extends(Function_declare_lhsContext, _super);
    function Function_declare_lhsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_declare_lhsContext.prototype.IDENTIFIER = function () { return this.getToken(matlabParser.IDENTIFIER, 0); };
    Function_declare_lhsContext.prototype.func_ident_list = function () {
        return this.tryGetRuleContext(0, Func_ident_listContext);
    };
    Object.defineProperty(Function_declare_lhsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_function_declare_lhs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_declare_lhsContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_declare_lhs) {
            listener.enterFunction_declare_lhs(this);
        }
    };
    // @Override
    Function_declare_lhsContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_declare_lhs) {
            listener.exitFunction_declare_lhs(this);
        }
    };
    // @Override
    Function_declare_lhsContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_declare_lhs) {
            return visitor.visitFunction_declare_lhs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_declare_lhsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_declare_lhsContext = Function_declare_lhsContext;
var Function_declareContext = /** @class */ (function (_super) {
    __extends(Function_declareContext, _super);
    function Function_declareContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_declareContext.prototype.function_declare_lhs = function () {
        return this.getRuleContext(0, Function_declare_lhsContext);
    };
    Function_declareContext.prototype.func_return_list = function () {
        return this.tryGetRuleContext(0, Func_return_listContext);
    };
    Object.defineProperty(Function_declareContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return matlabParser.RULE_function_declare; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_declareContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_declare) {
            listener.enterFunction_declare(this);
        }
    };
    // @Override
    Function_declareContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_declare) {
            listener.exitFunction_declare(this);
        }
    };
    // @Override
    Function_declareContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_declare) {
            return visitor.visitFunction_declare(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_declareContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_declareContext = Function_declareContext;
