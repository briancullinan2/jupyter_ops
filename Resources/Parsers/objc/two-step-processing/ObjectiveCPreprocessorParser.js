"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/objc/two-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ObjectiveCPreprocessorParser = /** @class */ (function (_super) {
    __extends(ObjectiveCPreprocessorParser, _super);
    function ObjectiveCPreprocessorParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ObjectiveCPreprocessorParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ObjectiveCPreprocessorParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ObjectiveCPreprocessorParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectiveCPreprocessorParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ObjectiveCPreprocessorParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectiveCPreprocessorParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectiveCPreprocessorParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ObjectiveCPreprocessorParser.prototype.objectiveCDocument = function () {
        var _localctx = new ObjectiveCDocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ObjectiveCPreprocessorParser.RULE_objectiveCDocument);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 15;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ObjectiveCPreprocessorParser.SHARP || _la === ObjectiveCPreprocessorParser.CODE) {
                    {
                        {
                            this.state = 12;
                            this.text();
                        }
                    }
                    this.state = 17;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 18;
                this.match(ObjectiveCPreprocessorParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ObjectiveCPreprocessorParser.prototype.text = function () {
        var _localctx = new TextContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ObjectiveCPreprocessorParser.RULE_text);
        var _la;
        try {
            this.state = 25;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ObjectiveCPreprocessorParser.CODE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 20;
                        this.code();
                    }
                    break;
                case ObjectiveCPreprocessorParser.SHARP:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 21;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 22;
                        this.directive();
                        this.state = 23;
                        _la = this._input.LA(1);
                        if (!(_la === ObjectiveCPreprocessorParser.EOF || _la === ObjectiveCPreprocessorParser.NEW_LINE)) {
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
    ObjectiveCPreprocessorParser.prototype.code = function () {
        var _localctx = new CodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ObjectiveCPreprocessorParser.RULE_code);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 27;
                                    this.match(ObjectiveCPreprocessorParser.CODE);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 30;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
    ObjectiveCPreprocessorParser.prototype.directive = function () {
        var _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ObjectiveCPreprocessorParser.RULE_directive);
        var _la;
        try {
            this.state = 55;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ObjectiveCPreprocessorParser.IMPORT:
                case ObjectiveCPreprocessorParser.INCLUDE:
                    _localctx = new PreprocessorImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 32;
                        _la = this._input.LA(1);
                        if (!(_la === ObjectiveCPreprocessorParser.IMPORT || _la === ObjectiveCPreprocessorParser.INCLUDE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 33;
                        this.directive_text();
                    }
                    break;
                case ObjectiveCPreprocessorParser.IF:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 34;
                        this.match(ObjectiveCPreprocessorParser.IF);
                        this.state = 35;
                        this.preprocessor_expression(0);
                    }
                    break;
                case ObjectiveCPreprocessorParser.ELIF:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 36;
                        this.match(ObjectiveCPreprocessorParser.ELIF);
                        this.state = 37;
                        this.preprocessor_expression(0);
                    }
                    break;
                case ObjectiveCPreprocessorParser.ELSE:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 38;
                        this.match(ObjectiveCPreprocessorParser.ELSE);
                    }
                    break;
                case ObjectiveCPreprocessorParser.ENDIF:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 39;
                        this.match(ObjectiveCPreprocessorParser.ENDIF);
                    }
                    break;
                case ObjectiveCPreprocessorParser.IFDEF:
                    _localctx = new PreprocessorDefContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 40;
                        this.match(ObjectiveCPreprocessorParser.IFDEF);
                        this.state = 41;
                        this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
                    }
                    break;
                case ObjectiveCPreprocessorParser.IFNDEF:
                    _localctx = new PreprocessorDefContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 42;
                        this.match(ObjectiveCPreprocessorParser.IFNDEF);
                        this.state = 43;
                        this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
                    }
                    break;
                case ObjectiveCPreprocessorParser.UNDEF:
                    _localctx = new PreprocessorDefContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 44;
                        this.match(ObjectiveCPreprocessorParser.UNDEF);
                        this.state = 45;
                        this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
                    }
                    break;
                case ObjectiveCPreprocessorParser.PRAGMA:
                    _localctx = new PreprocessorPragmaContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 46;
                        this.match(ObjectiveCPreprocessorParser.PRAGMA);
                        this.state = 47;
                        this.directive_text();
                    }
                    break;
                case ObjectiveCPreprocessorParser.ERROR:
                    _localctx = new PreprocessorErrorContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 48;
                        this.match(ObjectiveCPreprocessorParser.ERROR);
                        this.state = 49;
                        this.directive_text();
                    }
                    break;
                case ObjectiveCPreprocessorParser.DEFINE:
                    _localctx = new PreprocessorDefineContext(_localctx);
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 50;
                        this.match(ObjectiveCPreprocessorParser.DEFINE);
                        this.state = 51;
                        this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
                        this.state = 53;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ObjectiveCPreprocessorParser.TEXT) {
                            {
                                this.state = 52;
                                this.directive_text();
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
    ObjectiveCPreprocessorParser.prototype.directive_text = function () {
        var _localctx = new Directive_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ObjectiveCPreprocessorParser.RULE_directive_text);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 57;
                            this.match(ObjectiveCPreprocessorParser.TEXT);
                        }
                    }
                    this.state = 60;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ObjectiveCPreprocessorParser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ObjectiveCPreprocessorParser.prototype.preprocessor_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Preprocessor_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 10;
        this.enterRecursionRule(_localctx, 10, ObjectiveCPreprocessorParser.RULE_preprocessor_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ObjectiveCPreprocessorParser.TRUE:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 63;
                            this.match(ObjectiveCPreprocessorParser.TRUE);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.FALSE:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 64;
                            this.match(ObjectiveCPreprocessorParser.FALSE);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DECIMAL_LITERAL:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 65;
                            this.match(ObjectiveCPreprocessorParser.DECIMAL_LITERAL);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_STRING:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 66;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_STRING);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL:
                        {
                            _localctx = new PreprocessorConditionalSymbolContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 67;
                            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
                            this.state = 72;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 68;
                                        this.match(ObjectiveCPreprocessorParser.LPAREN);
                                        this.state = 69;
                                        this.preprocessor_expression(0);
                                        this.state = 70;
                                        this.match(ObjectiveCPreprocessorParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                        break;
                    case ObjectiveCPreprocessorParser.LPAREN:
                        {
                            _localctx = new PreprocessorParenthesisContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 74;
                            this.match(ObjectiveCPreprocessorParser.LPAREN);
                            this.state = 75;
                            this.preprocessor_expression(0);
                            this.state = 76;
                            this.match(ObjectiveCPreprocessorParser.RPAREN);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.BANG:
                        {
                            _localctx = new PreprocessorNotContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 78;
                            this.match(ObjectiveCPreprocessorParser.BANG);
                            this.state = 79;
                            this.preprocessor_expression(6);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DEFINED:
                        {
                            _localctx = new PreprocessorDefinedContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 80;
                            this.match(ObjectiveCPreprocessorParser.DEFINED);
                            this.state = 85;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL:
                                    {
                                        this.state = 81;
                                        this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
                                    }
                                    break;
                                case ObjectiveCPreprocessorParser.LPAREN:
                                    {
                                        this.state = 82;
                                        this.match(ObjectiveCPreprocessorParser.LPAREN);
                                        this.state = 83;
                                        this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
                                        this.state = 84;
                                        this.match(ObjectiveCPreprocessorParser.RPAREN);
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
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 103;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 101;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                                        this.state = 89;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 90;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === ObjectiveCPreprocessorParser.EQUAL || _la === ObjectiveCPreprocessorParser.NOTEQUAL)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 91;
                                        this.preprocessor_expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                                        this.state = 92;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 93;
                                        _localctx._op = this.match(ObjectiveCPreprocessorParser.AND);
                                        this.state = 94;
                                        this.preprocessor_expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                                        this.state = 95;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 96;
                                        _localctx._op = this.match(ObjectiveCPreprocessorParser.OR);
                                        this.state = 97;
                                        this.preprocessor_expression(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                                        this.state = 98;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 99;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ObjectiveCPreprocessorParser.LT) | (1 << ObjectiveCPreprocessorParser.GT) | (1 << ObjectiveCPreprocessorParser.LE) | (1 << ObjectiveCPreprocessorParser.GE))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 100;
                                        this.preprocessor_expression(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 105;
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
    ObjectiveCPreprocessorParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 5:
                return this.preprocessor_expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    ObjectiveCPreprocessorParser.prototype.preprocessor_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
            case 2:
                return this.precpred(this._ctx, 3);
            case 3:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    Object.defineProperty(ObjectiveCPreprocessorParser, "_ATN", {
        get: function () {
            if (!ObjectiveCPreprocessorParser.__ATN) {
                ObjectiveCPreprocessorParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ObjectiveCPreprocessorParser._serializedATN));
            }
            return ObjectiveCPreprocessorParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ObjectiveCPreprocessorParser.SHARP = 1;
    ObjectiveCPreprocessorParser.CODE = 2;
    ObjectiveCPreprocessorParser.IMPORT = 3;
    ObjectiveCPreprocessorParser.INCLUDE = 4;
    ObjectiveCPreprocessorParser.PRAGMA = 5;
    ObjectiveCPreprocessorParser.DEFINE = 6;
    ObjectiveCPreprocessorParser.DEFINED = 7;
    ObjectiveCPreprocessorParser.IF = 8;
    ObjectiveCPreprocessorParser.ELIF = 9;
    ObjectiveCPreprocessorParser.ELSE = 10;
    ObjectiveCPreprocessorParser.UNDEF = 11;
    ObjectiveCPreprocessorParser.IFDEF = 12;
    ObjectiveCPreprocessorParser.IFNDEF = 13;
    ObjectiveCPreprocessorParser.ENDIF = 14;
    ObjectiveCPreprocessorParser.TRUE = 15;
    ObjectiveCPreprocessorParser.FALSE = 16;
    ObjectiveCPreprocessorParser.ERROR = 17;
    ObjectiveCPreprocessorParser.BANG = 18;
    ObjectiveCPreprocessorParser.LPAREN = 19;
    ObjectiveCPreprocessorParser.RPAREN = 20;
    ObjectiveCPreprocessorParser.EQUAL = 21;
    ObjectiveCPreprocessorParser.NOTEQUAL = 22;
    ObjectiveCPreprocessorParser.AND = 23;
    ObjectiveCPreprocessorParser.OR = 24;
    ObjectiveCPreprocessorParser.LT = 25;
    ObjectiveCPreprocessorParser.GT = 26;
    ObjectiveCPreprocessorParser.LE = 27;
    ObjectiveCPreprocessorParser.GE = 28;
    ObjectiveCPreprocessorParser.DIRECTIVE_WHITESPACES = 29;
    ObjectiveCPreprocessorParser.DIRECTIVE_STRING = 30;
    ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL = 31;
    ObjectiveCPreprocessorParser.DECIMAL_LITERAL = 32;
    ObjectiveCPreprocessorParser.FLOAT = 33;
    ObjectiveCPreprocessorParser.NEW_LINE = 34;
    ObjectiveCPreprocessorParser.DIRECITVE_COMMENT = 35;
    ObjectiveCPreprocessorParser.DIRECITVE_LINE_COMMENT = 36;
    ObjectiveCPreprocessorParser.DIRECITVE_NEW_LINE = 37;
    ObjectiveCPreprocessorParser.DIRECITVE_TEXT_NEW_LINE = 38;
    ObjectiveCPreprocessorParser.TEXT = 39;
    ObjectiveCPreprocessorParser.SLASH = 40;
    ObjectiveCPreprocessorParser.RULE_objectiveCDocument = 0;
    ObjectiveCPreprocessorParser.RULE_text = 1;
    ObjectiveCPreprocessorParser.RULE_code = 2;
    ObjectiveCPreprocessorParser.RULE_directive = 3;
    ObjectiveCPreprocessorParser.RULE_directive_text = 4;
    ObjectiveCPreprocessorParser.RULE_preprocessor_expression = 5;
    // tslint:disable:no-trailing-whitespace
    ObjectiveCPreprocessorParser.ruleNames = [
        "objectiveCDocument", "text", "code", "directive", "directive_text", "preprocessor_expression",
    ];
    ObjectiveCPreprocessorParser._LITERAL_NAMES = [
        undefined, "'#'", undefined, undefined, undefined, "'pragma'", undefined,
        "'defined'", "'if'", "'elif'", "'else'", "'undef'", "'ifdef'", "'ifndef'",
        "'endif'", undefined, undefined, "'error'", "'!'", "'('", "')'", "'=='",
        "'!='", "'&&'", "'||'", "'<'", "'>'", "'<='", "'>='",
    ];
    ObjectiveCPreprocessorParser._SYMBOLIC_NAMES = [
        undefined, "SHARP", "CODE", "IMPORT", "INCLUDE", "PRAGMA", "DEFINE", "DEFINED",
        "IF", "ELIF", "ELSE", "UNDEF", "IFDEF", "IFNDEF", "ENDIF", "TRUE", "FALSE",
        "ERROR", "BANG", "LPAREN", "RPAREN", "EQUAL", "NOTEQUAL", "AND", "OR",
        "LT", "GT", "LE", "GE", "DIRECTIVE_WHITESPACES", "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL",
        "DECIMAL_LITERAL", "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT",
        "DIRECITVE_NEW_LINE", "DIRECITVE_TEXT_NEW_LINE", "TEXT", "SLASH",
    ];
    ObjectiveCPreprocessorParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ObjectiveCPreprocessorParser._LITERAL_NAMES, ObjectiveCPreprocessorParser._SYMBOLIC_NAMES, []);
    ObjectiveCPreprocessorParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*m\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
        "\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x06\x04" +
        "\x1F\n\x04\r\x04\x0E\x04 \x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x058\n\x05\x05" +
        "\x05:\n\x05\x03\x06\x06\x06=\n\x06\r\x06\x0E\x06>\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07K" +
        "\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x05\x07X\n\x07\x05\x07Z\n\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x07\x07h\n\x07\f\x07\x0E\x07k\v\x07\x03\x07\x02\x02\x03\f\b\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x06\x03\x03$$\x03\x02\x05\x06" +
        "\x03\x02\x17\x18\x03\x02\x1B\x1E\x02\x82\x02\x11\x03\x02\x02\x02\x04\x1B" +
        "\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b9\x03\x02\x02\x02\n<\x03\x02" +
        "\x02\x02\fY\x03\x02\x02\x02\x0E\x10\x05\x04\x03\x02\x0F\x0E\x03\x02\x02" +
        "\x02\x10\x13\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02" +
        "\x02\x12\x14\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x14\x15\x07\x02\x02" +
        "\x03\x15\x03\x03\x02\x02\x02\x16\x1C\x05\x06\x04\x02\x17\x18\x07\x03\x02" +
        "\x02\x18\x19\x05\b\x05\x02\x19\x1A\t\x02\x02\x02\x1A\x1C\x03\x02\x02\x02" +
        "\x1B\x16\x03\x02\x02\x02\x1B\x17\x03\x02\x02\x02\x1C\x05\x03\x02\x02\x02" +
        "\x1D\x1F\x07\x04\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02" +
        " \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x07\x03\x02\x02\x02\"#\t\x03" +
        "\x02\x02#:\x05\n\x06\x02$%\x07\n\x02\x02%:\x05\f\x07\x02&\'\x07\v\x02" +
        "\x02\':\x05\f\x07\x02(:\x07\f\x02\x02):\x07\x10\x02\x02*+\x07\x0E\x02" +
        "\x02+:\x07!\x02\x02,-\x07\x0F\x02\x02-:\x07!\x02\x02./\x07\r\x02\x02/" +
        ":\x07!\x02\x0201\x07\x07\x02\x021:\x05\n\x06\x0223\x07\x13\x02\x023:\x05" +
        "\n\x06\x0245\x07\b\x02\x0257\x07!\x02\x0268\x05\n\x06\x0276\x03\x02\x02" +
        "\x0278\x03\x02\x02\x028:\x03\x02\x02\x029\"\x03\x02\x02\x029$\x03\x02" +
        "\x02\x029&\x03\x02\x02\x029(\x03\x02\x02\x029)\x03\x02\x02\x029*\x03\x02" +
        "\x02\x029,\x03\x02\x02\x029.\x03\x02\x02\x0290\x03\x02\x02\x0292\x03\x02" +
        "\x02\x0294\x03\x02\x02\x02:\t\x03\x02\x02\x02;=\x07)\x02\x02<;\x03\x02" +
        "\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?\v\x03" +
        "\x02\x02\x02@A\b\x07\x01\x02AZ\x07\x11\x02\x02BZ\x07\x12\x02\x02CZ\x07" +
        "\"\x02\x02DZ\x07 \x02\x02EJ\x07!\x02\x02FG\x07\x15\x02\x02GH\x05\f\x07" +
        "\x02HI\x07\x16\x02\x02IK\x03\x02\x02\x02JF\x03\x02\x02\x02JK\x03\x02\x02" +
        "\x02KZ\x03\x02\x02\x02LM\x07\x15\x02\x02MN\x05\f\x07\x02NO\x07\x16\x02" +
        "\x02OZ\x03\x02\x02\x02PQ\x07\x14\x02\x02QZ\x05\f\x07\bRW\x07\t\x02\x02" +
        "SX\x07!\x02\x02TU\x07\x15\x02\x02UV\x07!\x02\x02VX\x07\x16\x02\x02WS\x03" +
        "\x02\x02\x02WT\x03\x02\x02\x02XZ\x03\x02\x02\x02Y@\x03\x02\x02\x02YB\x03" +
        "\x02\x02\x02YC\x03\x02\x02\x02YD\x03\x02\x02\x02YE\x03\x02\x02\x02YL\x03" +
        "\x02\x02\x02YP\x03\x02\x02\x02YR\x03\x02\x02\x02Zi\x03\x02\x02\x02[\\" +
        "\f\x07\x02\x02\\]\t\x04\x02\x02]h\x05\f\x07\b^_\f\x06\x02\x02_`\x07\x19" +
        "\x02\x02`h\x05\f\x07\x07ab\f\x05\x02\x02bc\x07\x1A\x02\x02ch\x05\f\x07" +
        "\x06de\f\x04\x02\x02ef\t\x05\x02\x02fh\x05\f\x07\x05g[\x03\x02\x02\x02" +
        "g^\x03\x02\x02\x02ga\x03\x02\x02\x02gd\x03\x02\x02\x02hk\x03\x02\x02\x02" +
        "ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\r\x03\x02\x02\x02ki\x03\x02\x02" +
        "\x02\r\x11\x1B 79>JWYgi";
    return ObjectiveCPreprocessorParser;
}(Parser_1.Parser));
exports.ObjectiveCPreprocessorParser = ObjectiveCPreprocessorParser;
var ObjectiveCDocumentContext = /** @class */ (function (_super) {
    __extends(ObjectiveCDocumentContext, _super);
    function ObjectiveCDocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectiveCDocumentContext.prototype.EOF = function () { return this.getToken(ObjectiveCPreprocessorParser.EOF, 0); };
    ObjectiveCDocumentContext.prototype.text = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TextContext);
        }
        else {
            return this.getRuleContext(i, TextContext);
        }
    };
    Object.defineProperty(ObjectiveCDocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_objectiveCDocument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectiveCDocumentContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectiveCDocument) {
            listener.enterObjectiveCDocument(this);
        }
    };
    // @Override
    ObjectiveCDocumentContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectiveCDocument) {
            listener.exitObjectiveCDocument(this);
        }
    };
    // @Override
    ObjectiveCDocumentContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectiveCDocument) {
            return visitor.visitObjectiveCDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectiveCDocumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectiveCDocumentContext = ObjectiveCDocumentContext;
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextContext.prototype.code = function () {
        return this.tryGetRuleContext(0, CodeContext);
    };
    TextContext.prototype.SHARP = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    TextContext.prototype.directive = function () {
        return this.tryGetRuleContext(0, DirectiveContext);
    };
    TextContext.prototype.NEW_LINE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.NEW_LINE, 0); };
    TextContext.prototype.EOF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.EOF, 0); };
    Object.defineProperty(TextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_text; },
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
var CodeContext = /** @class */ (function (_super) {
    __extends(CodeContext, _super);
    function CodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CodeContext.prototype.CODE = function (i) {
        if (i === undefined) {
            return this.getTokens(ObjectiveCPreprocessorParser.CODE);
        }
        else {
            return this.getToken(ObjectiveCPreprocessorParser.CODE, i);
        }
    };
    Object.defineProperty(CodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_code; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CodeContext.prototype.enterRule = function (listener) {
        if (listener.enterCode) {
            listener.enterCode(this);
        }
    };
    // @Override
    CodeContext.prototype.exitRule = function (listener) {
        if (listener.exitCode) {
            listener.exitCode(this);
        }
    };
    // @Override
    CodeContext.prototype.accept = function (visitor) {
        if (visitor.visitCode) {
            return visitor.visitCode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CodeContext = CodeContext;
var DirectiveContext = /** @class */ (function (_super) {
    __extends(DirectiveContext, _super);
    function DirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_directive; },
        enumerable: true,
        configurable: true
    });
    DirectiveContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return DirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveContext = DirectiveContext;
var PreprocessorImportContext = /** @class */ (function (_super) {
    __extends(PreprocessorImportContext, _super);
    function PreprocessorImportContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorImportContext.prototype.directive_text = function () {
        return this.getRuleContext(0, Directive_textContext);
    };
    PreprocessorImportContext.prototype.IMPORT = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.IMPORT, 0); };
    PreprocessorImportContext.prototype.INCLUDE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.INCLUDE, 0); };
    // @Override
    PreprocessorImportContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorImport) {
            listener.enterPreprocessorImport(this);
        }
    };
    // @Override
    PreprocessorImportContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorImport) {
            listener.exitPreprocessorImport(this);
        }
    };
    // @Override
    PreprocessorImportContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorImport) {
            return visitor.visitPreprocessorImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorImportContext;
}(DirectiveContext));
exports.PreprocessorImportContext = PreprocessorImportContext;
var PreprocessorConditionalContext = /** @class */ (function (_super) {
    __extends(PreprocessorConditionalContext, _super);
    function PreprocessorConditionalContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorConditionalContext.prototype.IF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.IF, 0); };
    PreprocessorConditionalContext.prototype.preprocessor_expression = function () {
        return this.tryGetRuleContext(0, Preprocessor_expressionContext);
    };
    PreprocessorConditionalContext.prototype.ELIF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.ELIF, 0); };
    PreprocessorConditionalContext.prototype.ELSE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.ELSE, 0); };
    PreprocessorConditionalContext.prototype.ENDIF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.ENDIF, 0); };
    // @Override
    PreprocessorConditionalContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorConditional) {
            listener.enterPreprocessorConditional(this);
        }
    };
    // @Override
    PreprocessorConditionalContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorConditional) {
            listener.exitPreprocessorConditional(this);
        }
    };
    // @Override
    PreprocessorConditionalContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorConditional) {
            return visitor.visitPreprocessorConditional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorConditionalContext;
}(DirectiveContext));
exports.PreprocessorConditionalContext = PreprocessorConditionalContext;
var PreprocessorDefContext = /** @class */ (function (_super) {
    __extends(PreprocessorDefContext, _super);
    function PreprocessorDefContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorDefContext.prototype.IFDEF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.IFDEF, 0); };
    PreprocessorDefContext.prototype.CONDITIONAL_SYMBOL = function () { return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); };
    PreprocessorDefContext.prototype.IFNDEF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.IFNDEF, 0); };
    PreprocessorDefContext.prototype.UNDEF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.UNDEF, 0); };
    // @Override
    PreprocessorDefContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorDef) {
            listener.enterPreprocessorDef(this);
        }
    };
    // @Override
    PreprocessorDefContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorDef) {
            listener.exitPreprocessorDef(this);
        }
    };
    // @Override
    PreprocessorDefContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorDef) {
            return visitor.visitPreprocessorDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorDefContext;
}(DirectiveContext));
exports.PreprocessorDefContext = PreprocessorDefContext;
var PreprocessorPragmaContext = /** @class */ (function (_super) {
    __extends(PreprocessorPragmaContext, _super);
    function PreprocessorPragmaContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorPragmaContext.prototype.PRAGMA = function () { return this.getToken(ObjectiveCPreprocessorParser.PRAGMA, 0); };
    PreprocessorPragmaContext.prototype.directive_text = function () {
        return this.getRuleContext(0, Directive_textContext);
    };
    // @Override
    PreprocessorPragmaContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorPragma) {
            listener.enterPreprocessorPragma(this);
        }
    };
    // @Override
    PreprocessorPragmaContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorPragma) {
            listener.exitPreprocessorPragma(this);
        }
    };
    // @Override
    PreprocessorPragmaContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorPragma) {
            return visitor.visitPreprocessorPragma(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorPragmaContext;
}(DirectiveContext));
exports.PreprocessorPragmaContext = PreprocessorPragmaContext;
var PreprocessorErrorContext = /** @class */ (function (_super) {
    __extends(PreprocessorErrorContext, _super);
    function PreprocessorErrorContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorErrorContext.prototype.ERROR = function () { return this.getToken(ObjectiveCPreprocessorParser.ERROR, 0); };
    PreprocessorErrorContext.prototype.directive_text = function () {
        return this.getRuleContext(0, Directive_textContext);
    };
    // @Override
    PreprocessorErrorContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorError) {
            listener.enterPreprocessorError(this);
        }
    };
    // @Override
    PreprocessorErrorContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorError) {
            listener.exitPreprocessorError(this);
        }
    };
    // @Override
    PreprocessorErrorContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorError) {
            return visitor.visitPreprocessorError(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorErrorContext;
}(DirectiveContext));
exports.PreprocessorErrorContext = PreprocessorErrorContext;
var PreprocessorDefineContext = /** @class */ (function (_super) {
    __extends(PreprocessorDefineContext, _super);
    function PreprocessorDefineContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorDefineContext.prototype.DEFINE = function () { return this.getToken(ObjectiveCPreprocessorParser.DEFINE, 0); };
    PreprocessorDefineContext.prototype.CONDITIONAL_SYMBOL = function () { return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); };
    PreprocessorDefineContext.prototype.directive_text = function () {
        return this.tryGetRuleContext(0, Directive_textContext);
    };
    // @Override
    PreprocessorDefineContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorDefine) {
            listener.enterPreprocessorDefine(this);
        }
    };
    // @Override
    PreprocessorDefineContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorDefine) {
            listener.exitPreprocessorDefine(this);
        }
    };
    // @Override
    PreprocessorDefineContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorDefine) {
            return visitor.visitPreprocessorDefine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorDefineContext;
}(DirectiveContext));
exports.PreprocessorDefineContext = PreprocessorDefineContext;
var Directive_textContext = /** @class */ (function (_super) {
    __extends(Directive_textContext, _super);
    function Directive_textContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Directive_textContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(ObjectiveCPreprocessorParser.TEXT);
        }
        else {
            return this.getToken(ObjectiveCPreprocessorParser.TEXT, i);
        }
    };
    Object.defineProperty(Directive_textContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_directive_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Directive_textContext.prototype.enterRule = function (listener) {
        if (listener.enterDirective_text) {
            listener.enterDirective_text(this);
        }
    };
    // @Override
    Directive_textContext.prototype.exitRule = function (listener) {
        if (listener.exitDirective_text) {
            listener.exitDirective_text(this);
        }
    };
    // @Override
    Directive_textContext.prototype.accept = function (visitor) {
        if (visitor.visitDirective_text) {
            return visitor.visitDirective_text(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Directive_textContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Directive_textContext = Directive_textContext;
var Preprocessor_expressionContext = /** @class */ (function (_super) {
    __extends(Preprocessor_expressionContext, _super);
    function Preprocessor_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Preprocessor_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_preprocessor_expression; },
        enumerable: true,
        configurable: true
    });
    Preprocessor_expressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return Preprocessor_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Preprocessor_expressionContext = Preprocessor_expressionContext;
var PreprocessorConstantContext = /** @class */ (function (_super) {
    __extends(PreprocessorConstantContext, _super);
    function PreprocessorConstantContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorConstantContext.prototype.TRUE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.TRUE, 0); };
    PreprocessorConstantContext.prototype.FALSE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.FALSE, 0); };
    PreprocessorConstantContext.prototype.DECIMAL_LITERAL = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DECIMAL_LITERAL, 0); };
    PreprocessorConstantContext.prototype.DIRECTIVE_STRING = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_STRING, 0); };
    // @Override
    PreprocessorConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorConstant) {
            listener.enterPreprocessorConstant(this);
        }
    };
    // @Override
    PreprocessorConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorConstant) {
            listener.exitPreprocessorConstant(this);
        }
    };
    // @Override
    PreprocessorConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorConstant) {
            return visitor.visitPreprocessorConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorConstantContext;
}(Preprocessor_expressionContext));
exports.PreprocessorConstantContext = PreprocessorConstantContext;
var PreprocessorConditionalSymbolContext = /** @class */ (function (_super) {
    __extends(PreprocessorConditionalSymbolContext, _super);
    function PreprocessorConditionalSymbolContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorConditionalSymbolContext.prototype.CONDITIONAL_SYMBOL = function () { return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); };
    PreprocessorConditionalSymbolContext.prototype.LPAREN = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.LPAREN, 0); };
    PreprocessorConditionalSymbolContext.prototype.preprocessor_expression = function () {
        return this.tryGetRuleContext(0, Preprocessor_expressionContext);
    };
    PreprocessorConditionalSymbolContext.prototype.RPAREN = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.RPAREN, 0); };
    // @Override
    PreprocessorConditionalSymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorConditionalSymbol) {
            listener.enterPreprocessorConditionalSymbol(this);
        }
    };
    // @Override
    PreprocessorConditionalSymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorConditionalSymbol) {
            listener.exitPreprocessorConditionalSymbol(this);
        }
    };
    // @Override
    PreprocessorConditionalSymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorConditionalSymbol) {
            return visitor.visitPreprocessorConditionalSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorConditionalSymbolContext;
}(Preprocessor_expressionContext));
exports.PreprocessorConditionalSymbolContext = PreprocessorConditionalSymbolContext;
var PreprocessorParenthesisContext = /** @class */ (function (_super) {
    __extends(PreprocessorParenthesisContext, _super);
    function PreprocessorParenthesisContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorParenthesisContext.prototype.LPAREN = function () { return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0); };
    PreprocessorParenthesisContext.prototype.preprocessor_expression = function () {
        return this.getRuleContext(0, Preprocessor_expressionContext);
    };
    PreprocessorParenthesisContext.prototype.RPAREN = function () { return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0); };
    // @Override
    PreprocessorParenthesisContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorParenthesis) {
            listener.enterPreprocessorParenthesis(this);
        }
    };
    // @Override
    PreprocessorParenthesisContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorParenthesis) {
            listener.exitPreprocessorParenthesis(this);
        }
    };
    // @Override
    PreprocessorParenthesisContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorParenthesis) {
            return visitor.visitPreprocessorParenthesis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorParenthesisContext;
}(Preprocessor_expressionContext));
exports.PreprocessorParenthesisContext = PreprocessorParenthesisContext;
var PreprocessorNotContext = /** @class */ (function (_super) {
    __extends(PreprocessorNotContext, _super);
    function PreprocessorNotContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorNotContext.prototype.BANG = function () { return this.getToken(ObjectiveCPreprocessorParser.BANG, 0); };
    PreprocessorNotContext.prototype.preprocessor_expression = function () {
        return this.getRuleContext(0, Preprocessor_expressionContext);
    };
    // @Override
    PreprocessorNotContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorNot) {
            listener.enterPreprocessorNot(this);
        }
    };
    // @Override
    PreprocessorNotContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorNot) {
            listener.exitPreprocessorNot(this);
        }
    };
    // @Override
    PreprocessorNotContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorNot) {
            return visitor.visitPreprocessorNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorNotContext;
}(Preprocessor_expressionContext));
exports.PreprocessorNotContext = PreprocessorNotContext;
var PreprocessorBinaryContext = /** @class */ (function (_super) {
    __extends(PreprocessorBinaryContext, _super);
    function PreprocessorBinaryContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorBinaryContext.prototype.preprocessor_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Preprocessor_expressionContext);
        }
        else {
            return this.getRuleContext(i, Preprocessor_expressionContext);
        }
    };
    PreprocessorBinaryContext.prototype.EQUAL = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.EQUAL, 0); };
    PreprocessorBinaryContext.prototype.NOTEQUAL = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.NOTEQUAL, 0); };
    PreprocessorBinaryContext.prototype.AND = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.AND, 0); };
    PreprocessorBinaryContext.prototype.OR = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.OR, 0); };
    PreprocessorBinaryContext.prototype.LT = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.LT, 0); };
    PreprocessorBinaryContext.prototype.GT = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.GT, 0); };
    PreprocessorBinaryContext.prototype.LE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.LE, 0); };
    PreprocessorBinaryContext.prototype.GE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.GE, 0); };
    // @Override
    PreprocessorBinaryContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorBinary) {
            listener.enterPreprocessorBinary(this);
        }
    };
    // @Override
    PreprocessorBinaryContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorBinary) {
            listener.exitPreprocessorBinary(this);
        }
    };
    // @Override
    PreprocessorBinaryContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorBinary) {
            return visitor.visitPreprocessorBinary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorBinaryContext;
}(Preprocessor_expressionContext));
exports.PreprocessorBinaryContext = PreprocessorBinaryContext;
var PreprocessorDefinedContext = /** @class */ (function (_super) {
    __extends(PreprocessorDefinedContext, _super);
    function PreprocessorDefinedContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorDefinedContext.prototype.DEFINED = function () { return this.getToken(ObjectiveCPreprocessorParser.DEFINED, 0); };
    PreprocessorDefinedContext.prototype.CONDITIONAL_SYMBOL = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); };
    PreprocessorDefinedContext.prototype.LPAREN = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.LPAREN, 0); };
    PreprocessorDefinedContext.prototype.RPAREN = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.RPAREN, 0); };
    // @Override
    PreprocessorDefinedContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorDefined) {
            listener.enterPreprocessorDefined(this);
        }
    };
    // @Override
    PreprocessorDefinedContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorDefined) {
            listener.exitPreprocessorDefined(this);
        }
    };
    // @Override
    PreprocessorDefinedContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorDefined) {
            return visitor.visitPreprocessorDefined(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorDefinedContext;
}(Preprocessor_expressionContext));
exports.PreprocessorDefinedContext = PreprocessorDefinedContext;
