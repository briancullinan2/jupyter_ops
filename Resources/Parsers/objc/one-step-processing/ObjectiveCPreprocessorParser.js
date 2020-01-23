"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/objc/one-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
    ObjectiveCPreprocessorParser.prototype.directive = function () {
        var _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ObjectiveCPreprocessorParser.RULE_directive);
        var _la;
        try {
            this.state = 43;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    _localctx = new PreprocessorImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 6;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 7;
                        _la = this._input.LA(1);
                        if (!(_la === ObjectiveCPreprocessorParser.DIRECTIVE_IMPORT || _la === ObjectiveCPreprocessorParser.DIRECTIVE_INCLUDE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 8;
                        this.directiveText();
                    }
                    break;
                case 2:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 9;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 10;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IF);
                        this.state = 11;
                        this.preprocessorExpression(0);
                    }
                    break;
                case 3:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 12;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 13;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ELIF);
                        this.state = 14;
                        this.preprocessorExpression(0);
                    }
                    break;
                case 4:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 15;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 16;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ELSE);
                    }
                    break;
                case 5:
                    _localctx = new PreprocessorConditionalContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 17;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 18;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF);
                    }
                    break;
                case 6:
                    _localctx = new PreprocessorDefContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 19;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 20;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF);
                        this.state = 21;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
                    }
                    break;
                case 7:
                    _localctx = new PreprocessorDefContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 22;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 23;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF);
                        this.state = 24;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
                    }
                    break;
                case 8:
                    _localctx = new PreprocessorDefContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 25;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 26;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF);
                        this.state = 27;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
                    }
                    break;
                case 9:
                    _localctx = new PreprocessorPragmaContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 28;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 29;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA);
                        this.state = 30;
                        this.directiveText();
                    }
                    break;
                case 10:
                    _localctx = new PreprocessorErrorContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 31;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 32;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ERROR);
                        this.state = 33;
                        this.directiveText();
                    }
                    break;
                case 11:
                    _localctx = new PreprocessorWarningContext(_localctx);
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 34;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 35;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_WARNING);
                        this.state = 36;
                        this.directiveText();
                    }
                    break;
                case 12:
                    _localctx = new PreprocessorDefineContext(_localctx);
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 37;
                        this.match(ObjectiveCPreprocessorParser.SHARP);
                        this.state = 38;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE);
                        this.state = 39;
                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
                        this.state = 41;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE || _la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT) {
                            {
                                this.state = 40;
                                this.directiveText();
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
    ObjectiveCPreprocessorParser.prototype.directiveText = function () {
        var _localctx = new DirectiveTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ObjectiveCPreprocessorParser.RULE_directiveText);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 45;
                            _la = this._input.LA(1);
                            if (!(_la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE || _la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT)) {
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
                    this.state = 48;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE || _la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ObjectiveCPreprocessorParser.prototype.preprocessorExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new PreprocessorExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 4;
        this.enterRecursionRule(_localctx, 4, ObjectiveCPreprocessorParser.RULE_preprocessorExpression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ObjectiveCPreprocessorParser.DIRECTIVE_TRUE:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 51;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_TRUE);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_FALSE:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 52;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_FALSE);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 53;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_STRING:
                        {
                            _localctx = new PreprocessorConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 54;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_STRING);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_ID:
                        {
                            _localctx = new PreprocessorConditionalSymbolContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 55;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
                            this.state = 60;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 56;
                                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
                                        this.state = 57;
                                        this.preprocessorExpression(0);
                                        this.state = 58;
                                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
                                    }
                                    break;
                            }
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_LP:
                        {
                            _localctx = new PreprocessorParenthesisContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 62;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
                            this.state = 63;
                            this.preprocessorExpression(0);
                            this.state = 64;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_BANG:
                        {
                            _localctx = new PreprocessorNotContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 66;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_BANG);
                            this.state = 67;
                            this.preprocessorExpression(6);
                        }
                        break;
                    case ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED:
                        {
                            _localctx = new PreprocessorDefinedContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 68;
                            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED);
                            this.state = 73;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ObjectiveCPreprocessorParser.DIRECTIVE_ID:
                                    {
                                        this.state = 69;
                                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
                                    }
                                    break;
                                case ObjectiveCPreprocessorParser.DIRECTIVE_LP:
                                    {
                                        this.state = 70;
                                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
                                        this.state = 71;
                                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
                                        this.state = 72;
                                        this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
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
                this.state = 91;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 89;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
                                        this.state = 77;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 78;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === ObjectiveCPreprocessorParser.DIRECTIVE_EQUAL || _la === ObjectiveCPreprocessorParser.DIRECTIVE_NOTEQUAL)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 79;
                                        this.preprocessorExpression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
                                        this.state = 80;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 81;
                                        _localctx._op = this.match(ObjectiveCPreprocessorParser.DIRECTIVE_AND);
                                        this.state = 82;
                                        this.preprocessorExpression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
                                        this.state = 83;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 84;
                                        _localctx._op = this.match(ObjectiveCPreprocessorParser.DIRECTIVE_OR);
                                        this.state = 85;
                                        this.preprocessorExpression(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
                                        this.state = 86;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 87;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & ((1 << (ObjectiveCPreprocessorParser.DIRECTIVE_LT - 209)) | (1 << (ObjectiveCPreprocessorParser.DIRECTIVE_GT - 209)) | (1 << (ObjectiveCPreprocessorParser.DIRECTIVE_LE - 209)) | (1 << (ObjectiveCPreprocessorParser.DIRECTIVE_GE - 209)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 88;
                                        this.preprocessorExpression(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 93;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
            case 2:
                return this.preprocessorExpression_sempred(_localctx, predIndex);
        }
        return true;
    };
    ObjectiveCPreprocessorParser.prototype.preprocessorExpression_sempred = function (_localctx, predIndex) {
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
    ObjectiveCPreprocessorParser.AUTO = 1;
    ObjectiveCPreprocessorParser.BREAK = 2;
    ObjectiveCPreprocessorParser.CASE = 3;
    ObjectiveCPreprocessorParser.CHAR = 4;
    ObjectiveCPreprocessorParser.CONST = 5;
    ObjectiveCPreprocessorParser.CONTINUE = 6;
    ObjectiveCPreprocessorParser.DEFAULT = 7;
    ObjectiveCPreprocessorParser.DO = 8;
    ObjectiveCPreprocessorParser.DOUBLE = 9;
    ObjectiveCPreprocessorParser.ELSE = 10;
    ObjectiveCPreprocessorParser.ENUM = 11;
    ObjectiveCPreprocessorParser.EXTERN = 12;
    ObjectiveCPreprocessorParser.FLOAT = 13;
    ObjectiveCPreprocessorParser.FOR = 14;
    ObjectiveCPreprocessorParser.GOTO = 15;
    ObjectiveCPreprocessorParser.IF = 16;
    ObjectiveCPreprocessorParser.INLINE = 17;
    ObjectiveCPreprocessorParser.INT = 18;
    ObjectiveCPreprocessorParser.LONG = 19;
    ObjectiveCPreprocessorParser.REGISTER = 20;
    ObjectiveCPreprocessorParser.RESTRICT = 21;
    ObjectiveCPreprocessorParser.RETURN = 22;
    ObjectiveCPreprocessorParser.SHORT = 23;
    ObjectiveCPreprocessorParser.SIGNED = 24;
    ObjectiveCPreprocessorParser.SIZEOF = 25;
    ObjectiveCPreprocessorParser.STATIC = 26;
    ObjectiveCPreprocessorParser.STRUCT = 27;
    ObjectiveCPreprocessorParser.SWITCH = 28;
    ObjectiveCPreprocessorParser.TYPEDEF = 29;
    ObjectiveCPreprocessorParser.UNION = 30;
    ObjectiveCPreprocessorParser.UNSIGNED = 31;
    ObjectiveCPreprocessorParser.VOID = 32;
    ObjectiveCPreprocessorParser.VOLATILE = 33;
    ObjectiveCPreprocessorParser.WHILE = 34;
    ObjectiveCPreprocessorParser.BOOL_ = 35;
    ObjectiveCPreprocessorParser.COMPLEX = 36;
    ObjectiveCPreprocessorParser.IMAGINERY = 37;
    ObjectiveCPreprocessorParser.TRUE = 38;
    ObjectiveCPreprocessorParser.FALSE = 39;
    ObjectiveCPreprocessorParser.BOOL = 40;
    ObjectiveCPreprocessorParser.Class = 41;
    ObjectiveCPreprocessorParser.BYCOPY = 42;
    ObjectiveCPreprocessorParser.BYREF = 43;
    ObjectiveCPreprocessorParser.ID = 44;
    ObjectiveCPreprocessorParser.IMP = 45;
    ObjectiveCPreprocessorParser.IN = 46;
    ObjectiveCPreprocessorParser.INOUT = 47;
    ObjectiveCPreprocessorParser.NIL = 48;
    ObjectiveCPreprocessorParser.NO = 49;
    ObjectiveCPreprocessorParser.NULL = 50;
    ObjectiveCPreprocessorParser.ONEWAY = 51;
    ObjectiveCPreprocessorParser.OUT = 52;
    ObjectiveCPreprocessorParser.PROTOCOL_ = 53;
    ObjectiveCPreprocessorParser.SEL = 54;
    ObjectiveCPreprocessorParser.SELF = 55;
    ObjectiveCPreprocessorParser.SUPER = 56;
    ObjectiveCPreprocessorParser.YES = 57;
    ObjectiveCPreprocessorParser.AUTORELEASEPOOL = 58;
    ObjectiveCPreprocessorParser.CATCH = 59;
    ObjectiveCPreprocessorParser.CLASS = 60;
    ObjectiveCPreprocessorParser.DYNAMIC = 61;
    ObjectiveCPreprocessorParser.ENCODE = 62;
    ObjectiveCPreprocessorParser.END = 63;
    ObjectiveCPreprocessorParser.FINALLY = 64;
    ObjectiveCPreprocessorParser.IMPLEMENTATION = 65;
    ObjectiveCPreprocessorParser.INTERFACE = 66;
    ObjectiveCPreprocessorParser.IMPORT = 67;
    ObjectiveCPreprocessorParser.PACKAGE = 68;
    ObjectiveCPreprocessorParser.PROTOCOL = 69;
    ObjectiveCPreprocessorParser.OPTIONAL = 70;
    ObjectiveCPreprocessorParser.PRIVATE = 71;
    ObjectiveCPreprocessorParser.PROPERTY = 72;
    ObjectiveCPreprocessorParser.PROTECTED = 73;
    ObjectiveCPreprocessorParser.PUBLIC = 74;
    ObjectiveCPreprocessorParser.REQUIRED = 75;
    ObjectiveCPreprocessorParser.SELECTOR = 76;
    ObjectiveCPreprocessorParser.SYNCHRONIZED = 77;
    ObjectiveCPreprocessorParser.SYNTHESIZE = 78;
    ObjectiveCPreprocessorParser.THROW = 79;
    ObjectiveCPreprocessorParser.TRY = 80;
    ObjectiveCPreprocessorParser.ATOMIC = 81;
    ObjectiveCPreprocessorParser.NONATOMIC = 82;
    ObjectiveCPreprocessorParser.RETAIN = 83;
    ObjectiveCPreprocessorParser.ATTRIBUTE = 84;
    ObjectiveCPreprocessorParser.AUTORELEASING_QUALIFIER = 85;
    ObjectiveCPreprocessorParser.BLOCK = 86;
    ObjectiveCPreprocessorParser.BRIDGE = 87;
    ObjectiveCPreprocessorParser.BRIDGE_RETAINED = 88;
    ObjectiveCPreprocessorParser.BRIDGE_TRANSFER = 89;
    ObjectiveCPreprocessorParser.COVARIANT = 90;
    ObjectiveCPreprocessorParser.CONTRAVARIANT = 91;
    ObjectiveCPreprocessorParser.DEPRECATED = 92;
    ObjectiveCPreprocessorParser.KINDOF = 93;
    ObjectiveCPreprocessorParser.STRONG_QUALIFIER = 94;
    ObjectiveCPreprocessorParser.TYPEOF = 95;
    ObjectiveCPreprocessorParser.UNSAFE_UNRETAINED_QUALIFIER = 96;
    ObjectiveCPreprocessorParser.UNUSED = 97;
    ObjectiveCPreprocessorParser.WEAK_QUALIFIER = 98;
    ObjectiveCPreprocessorParser.NULL_UNSPECIFIED = 99;
    ObjectiveCPreprocessorParser.NULLABLE = 100;
    ObjectiveCPreprocessorParser.NONNULL = 101;
    ObjectiveCPreprocessorParser.NULL_RESETTABLE = 102;
    ObjectiveCPreprocessorParser.NS_INLINE = 103;
    ObjectiveCPreprocessorParser.NS_ENUM = 104;
    ObjectiveCPreprocessorParser.NS_OPTIONS = 105;
    ObjectiveCPreprocessorParser.ASSIGN = 106;
    ObjectiveCPreprocessorParser.COPY = 107;
    ObjectiveCPreprocessorParser.GETTER = 108;
    ObjectiveCPreprocessorParser.SETTER = 109;
    ObjectiveCPreprocessorParser.STRONG = 110;
    ObjectiveCPreprocessorParser.READONLY = 111;
    ObjectiveCPreprocessorParser.READWRITE = 112;
    ObjectiveCPreprocessorParser.WEAK = 113;
    ObjectiveCPreprocessorParser.UNSAFE_UNRETAINED = 114;
    ObjectiveCPreprocessorParser.IB_OUTLET = 115;
    ObjectiveCPreprocessorParser.IB_OUTLET_COLLECTION = 116;
    ObjectiveCPreprocessorParser.IB_INSPECTABLE = 117;
    ObjectiveCPreprocessorParser.IB_DESIGNABLE = 118;
    ObjectiveCPreprocessorParser.NS_ASSUME_NONNULL_BEGIN = 119;
    ObjectiveCPreprocessorParser.NS_ASSUME_NONNULL_END = 120;
    ObjectiveCPreprocessorParser.EXTERN_SUFFIX = 121;
    ObjectiveCPreprocessorParser.IOS_SUFFIX = 122;
    ObjectiveCPreprocessorParser.MAC_SUFFIX = 123;
    ObjectiveCPreprocessorParser.TVOS_PROHIBITED = 124;
    ObjectiveCPreprocessorParser.IDENTIFIER = 125;
    ObjectiveCPreprocessorParser.LP = 126;
    ObjectiveCPreprocessorParser.RP = 127;
    ObjectiveCPreprocessorParser.LBRACE = 128;
    ObjectiveCPreprocessorParser.RBRACE = 129;
    ObjectiveCPreprocessorParser.LBRACK = 130;
    ObjectiveCPreprocessorParser.RBRACK = 131;
    ObjectiveCPreprocessorParser.SEMI = 132;
    ObjectiveCPreprocessorParser.COMMA = 133;
    ObjectiveCPreprocessorParser.DOT = 134;
    ObjectiveCPreprocessorParser.STRUCTACCESS = 135;
    ObjectiveCPreprocessorParser.AT = 136;
    ObjectiveCPreprocessorParser.ASSIGNMENT = 137;
    ObjectiveCPreprocessorParser.GT = 138;
    ObjectiveCPreprocessorParser.LT = 139;
    ObjectiveCPreprocessorParser.BANG = 140;
    ObjectiveCPreprocessorParser.TILDE = 141;
    ObjectiveCPreprocessorParser.QUESTION = 142;
    ObjectiveCPreprocessorParser.COLON = 143;
    ObjectiveCPreprocessorParser.EQUAL = 144;
    ObjectiveCPreprocessorParser.LE = 145;
    ObjectiveCPreprocessorParser.GE = 146;
    ObjectiveCPreprocessorParser.NOTEQUAL = 147;
    ObjectiveCPreprocessorParser.AND = 148;
    ObjectiveCPreprocessorParser.OR = 149;
    ObjectiveCPreprocessorParser.INC = 150;
    ObjectiveCPreprocessorParser.DEC = 151;
    ObjectiveCPreprocessorParser.ADD = 152;
    ObjectiveCPreprocessorParser.SUB = 153;
    ObjectiveCPreprocessorParser.MUL = 154;
    ObjectiveCPreprocessorParser.DIV = 155;
    ObjectiveCPreprocessorParser.BITAND = 156;
    ObjectiveCPreprocessorParser.BITOR = 157;
    ObjectiveCPreprocessorParser.BITXOR = 158;
    ObjectiveCPreprocessorParser.MOD = 159;
    ObjectiveCPreprocessorParser.ADD_ASSIGN = 160;
    ObjectiveCPreprocessorParser.SUB_ASSIGN = 161;
    ObjectiveCPreprocessorParser.MUL_ASSIGN = 162;
    ObjectiveCPreprocessorParser.DIV_ASSIGN = 163;
    ObjectiveCPreprocessorParser.AND_ASSIGN = 164;
    ObjectiveCPreprocessorParser.OR_ASSIGN = 165;
    ObjectiveCPreprocessorParser.XOR_ASSIGN = 166;
    ObjectiveCPreprocessorParser.MOD_ASSIGN = 167;
    ObjectiveCPreprocessorParser.LSHIFT_ASSIGN = 168;
    ObjectiveCPreprocessorParser.RSHIFT_ASSIGN = 169;
    ObjectiveCPreprocessorParser.ELIPSIS = 170;
    ObjectiveCPreprocessorParser.CHARACTER_LITERAL = 171;
    ObjectiveCPreprocessorParser.STRING_START = 172;
    ObjectiveCPreprocessorParser.HEX_LITERAL = 173;
    ObjectiveCPreprocessorParser.OCTAL_LITERAL = 174;
    ObjectiveCPreprocessorParser.BINARY_LITERAL = 175;
    ObjectiveCPreprocessorParser.DECIMAL_LITERAL = 176;
    ObjectiveCPreprocessorParser.FLOATING_POINT_LITERAL = 177;
    ObjectiveCPreprocessorParser.WS = 178;
    ObjectiveCPreprocessorParser.MULTI_COMMENT = 179;
    ObjectiveCPreprocessorParser.SINGLE_COMMENT = 180;
    ObjectiveCPreprocessorParser.BACKSLASH = 181;
    ObjectiveCPreprocessorParser.SHARP = 182;
    ObjectiveCPreprocessorParser.STRING_NEWLINE = 183;
    ObjectiveCPreprocessorParser.STRING_END = 184;
    ObjectiveCPreprocessorParser.STRING_VALUE = 185;
    ObjectiveCPreprocessorParser.DIRECTIVE_IMPORT = 186;
    ObjectiveCPreprocessorParser.DIRECTIVE_INCLUDE = 187;
    ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA = 188;
    ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE = 189;
    ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED = 190;
    ObjectiveCPreprocessorParser.DIRECTIVE_IF = 191;
    ObjectiveCPreprocessorParser.DIRECTIVE_ELIF = 192;
    ObjectiveCPreprocessorParser.DIRECTIVE_ELSE = 193;
    ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF = 194;
    ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF = 195;
    ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF = 196;
    ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF = 197;
    ObjectiveCPreprocessorParser.DIRECTIVE_TRUE = 198;
    ObjectiveCPreprocessorParser.DIRECTIVE_FALSE = 199;
    ObjectiveCPreprocessorParser.DIRECTIVE_ERROR = 200;
    ObjectiveCPreprocessorParser.DIRECTIVE_WARNING = 201;
    ObjectiveCPreprocessorParser.DIRECTIVE_BANG = 202;
    ObjectiveCPreprocessorParser.DIRECTIVE_LP = 203;
    ObjectiveCPreprocessorParser.DIRECTIVE_RP = 204;
    ObjectiveCPreprocessorParser.DIRECTIVE_EQUAL = 205;
    ObjectiveCPreprocessorParser.DIRECTIVE_NOTEQUAL = 206;
    ObjectiveCPreprocessorParser.DIRECTIVE_AND = 207;
    ObjectiveCPreprocessorParser.DIRECTIVE_OR = 208;
    ObjectiveCPreprocessorParser.DIRECTIVE_LT = 209;
    ObjectiveCPreprocessorParser.DIRECTIVE_GT = 210;
    ObjectiveCPreprocessorParser.DIRECTIVE_LE = 211;
    ObjectiveCPreprocessorParser.DIRECTIVE_GE = 212;
    ObjectiveCPreprocessorParser.DIRECTIVE_STRING = 213;
    ObjectiveCPreprocessorParser.DIRECTIVE_ID = 214;
    ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL = 215;
    ObjectiveCPreprocessorParser.DIRECTIVE_FLOAT = 216;
    ObjectiveCPreprocessorParser.DIRECTIVE_NEWLINE = 217;
    ObjectiveCPreprocessorParser.DIRECTIVE_MULTI_COMMENT = 218;
    ObjectiveCPreprocessorParser.DIRECTIVE_SINGLE_COMMENT = 219;
    ObjectiveCPreprocessorParser.DIRECTIVE_BACKSLASH_NEWLINE = 220;
    ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE = 221;
    ObjectiveCPreprocessorParser.DIRECTIVE_TEXT = 222;
    ObjectiveCPreprocessorParser.RULE_directive = 0;
    ObjectiveCPreprocessorParser.RULE_directiveText = 1;
    ObjectiveCPreprocessorParser.RULE_preprocessorExpression = 2;
    // tslint:disable:no-trailing-whitespace
    ObjectiveCPreprocessorParser.ruleNames = [
        "directive", "directiveText", "preprocessorExpression",
    ];
    ObjectiveCPreprocessorParser._LITERAL_NAMES = [
        undefined, "'auto'", "'break'", "'case'", "'char'", "'const'", "'continue'",
        "'default'", "'do'", "'double'", undefined, "'enum'", "'extern'", "'float'",
        "'for'", "'goto'", undefined, "'inline'", "'int'", "'long'", "'register'",
        "'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'",
        "'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'",
        "'volatile'", "'while'", "'_Bool'", "'_Complex'", "'_Imaginery'", "'true'",
        "'false'", "'BOOL'", "'Class'", "'bycopy'", "'byref'", "'id'", "'IMP'",
        "'in'", "'inout'", "'nil'", "'NO'", "'NULL'", "'oneway'", "'out'", "'Protocol'",
        "'SEL'", "'self'", "'super'", "'YES'", "'@autoreleasepool'", "'@catch'",
        "'@class'", "'@dynamic'", "'@encode'", "'@end'", "'@finally'", "'@implementation'",
        "'@interface'", "'@import'", "'@package'", "'@protocol'", "'@optional'",
        "'@private'", "'@property'", "'@protected'", "'@public'", "'@required'",
        "'@selector'", "'@synchronized'", "'@synthesize'", "'@throw'", "'@try'",
        "'atomic'", "'nonatomic'", "'retain'", "'__attribute__'", "'__autoreleasing'",
        "'__block'", "'__bridge'", "'__bridge_retained'", "'__bridge_transfer'",
        "'__covariant'", "'__contravariant'", "'__deprecated'", "'__kindof'",
        "'__strong'", undefined, "'__unsafe_unretained'", "'__unused'", "'__weak'",
        undefined, undefined, undefined, "'null_resettable'", "'NS_INLINE'", "'NS_ENUM'",
        "'NS_OPTIONS'", "'assign'", "'copy'", "'getter'", "'setter'", "'strong'",
        "'readonly'", "'readwrite'", "'weak'", "'unsafe_unretained'", "'IBOutlet'",
        "'IBOutletCollection'", "'IBInspectable'", "'IB_DESIGNABLE'", undefined,
        undefined, undefined, undefined, undefined, "'__TVOS_PROHIBITED'", undefined,
        undefined, undefined, "'{'", "'}'", "'['", "']'", "';'", "','", "'.'",
        "'->'", "'@'", "'='", undefined, undefined, undefined, "'~'", "'?'", "':'",
        undefined, undefined, undefined, undefined, undefined, undefined, "'++'",
        "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='",
        "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='",
        "'...'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'\\'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "'defined'",
        undefined, "'elif'", undefined, "'undef'", "'ifdef'", "'ifndef'", "'endif'",
    ];
    ObjectiveCPreprocessorParser._SYMBOLIC_NAMES = [
        undefined, "AUTO", "BREAK", "CASE", "CHAR", "CONST", "CONTINUE", "DEFAULT",
        "DO", "DOUBLE", "ELSE", "ENUM", "EXTERN", "FLOAT", "FOR", "GOTO", "IF",
        "INLINE", "INT", "LONG", "REGISTER", "RESTRICT", "RETURN", "SHORT", "SIGNED",
        "SIZEOF", "STATIC", "STRUCT", "SWITCH", "TYPEDEF", "UNION", "UNSIGNED",
        "VOID", "VOLATILE", "WHILE", "BOOL_", "COMPLEX", "IMAGINERY", "TRUE",
        "FALSE", "BOOL", "Class", "BYCOPY", "BYREF", "ID", "IMP", "IN", "INOUT",
        "NIL", "NO", "NULL", "ONEWAY", "OUT", "PROTOCOL_", "SEL", "SELF", "SUPER",
        "YES", "AUTORELEASEPOOL", "CATCH", "CLASS", "DYNAMIC", "ENCODE", "END",
        "FINALLY", "IMPLEMENTATION", "INTERFACE", "IMPORT", "PACKAGE", "PROTOCOL",
        "OPTIONAL", "PRIVATE", "PROPERTY", "PROTECTED", "PUBLIC", "REQUIRED",
        "SELECTOR", "SYNCHRONIZED", "SYNTHESIZE", "THROW", "TRY", "ATOMIC", "NONATOMIC",
        "RETAIN", "ATTRIBUTE", "AUTORELEASING_QUALIFIER", "BLOCK", "BRIDGE", "BRIDGE_RETAINED",
        "BRIDGE_TRANSFER", "COVARIANT", "CONTRAVARIANT", "DEPRECATED", "KINDOF",
        "STRONG_QUALIFIER", "TYPEOF", "UNSAFE_UNRETAINED_QUALIFIER", "UNUSED",
        "WEAK_QUALIFIER", "NULL_UNSPECIFIED", "NULLABLE", "NONNULL", "NULL_RESETTABLE",
        "NS_INLINE", "NS_ENUM", "NS_OPTIONS", "ASSIGN", "COPY", "GETTER", "SETTER",
        "STRONG", "READONLY", "READWRITE", "WEAK", "UNSAFE_UNRETAINED", "IB_OUTLET",
        "IB_OUTLET_COLLECTION", "IB_INSPECTABLE", "IB_DESIGNABLE", "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END", "EXTERN_SUFFIX", "IOS_SUFFIX", "MAC_SUFFIX",
        "TVOS_PROHIBITED", "IDENTIFIER", "LP", "RP", "LBRACE", "RBRACE", "LBRACK",
        "RBRACK", "SEMI", "COMMA", "DOT", "STRUCTACCESS", "AT", "ASSIGNMENT",
        "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", "GE",
        "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND",
        "BITOR", "BITXOR", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN",
        "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN",
        "RSHIFT_ASSIGN", "ELIPSIS", "CHARACTER_LITERAL", "STRING_START", "HEX_LITERAL",
        "OCTAL_LITERAL", "BINARY_LITERAL", "DECIMAL_LITERAL", "FLOATING_POINT_LITERAL",
        "WS", "MULTI_COMMENT", "SINGLE_COMMENT", "BACKSLASH", "SHARP", "STRING_NEWLINE",
        "STRING_END", "STRING_VALUE", "DIRECTIVE_IMPORT", "DIRECTIVE_INCLUDE",
        "DIRECTIVE_PRAGMA", "DIRECTIVE_DEFINE", "DIRECTIVE_DEFINED", "DIRECTIVE_IF",
        "DIRECTIVE_ELIF", "DIRECTIVE_ELSE", "DIRECTIVE_UNDEF", "DIRECTIVE_IFDEF",
        "DIRECTIVE_IFNDEF", "DIRECTIVE_ENDIF", "DIRECTIVE_TRUE", "DIRECTIVE_FALSE",
        "DIRECTIVE_ERROR", "DIRECTIVE_WARNING", "DIRECTIVE_BANG", "DIRECTIVE_LP",
        "DIRECTIVE_RP", "DIRECTIVE_EQUAL", "DIRECTIVE_NOTEQUAL", "DIRECTIVE_AND",
        "DIRECTIVE_OR", "DIRECTIVE_LT", "DIRECTIVE_GT", "DIRECTIVE_LE", "DIRECTIVE_GE",
        "DIRECTIVE_STRING", "DIRECTIVE_ID", "DIRECTIVE_DECIMAL_LITERAL", "DIRECTIVE_FLOAT",
        "DIRECTIVE_NEWLINE", "DIRECTIVE_MULTI_COMMENT", "DIRECTIVE_SINGLE_COMMENT",
        "DIRECTIVE_BACKSLASH_NEWLINE", "DIRECTIVE_TEXT_NEWLINE", "DIRECTIVE_TEXT",
    ];
    ObjectiveCPreprocessorParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ObjectiveCPreprocessorParser._LITERAL_NAMES, ObjectiveCPreprocessorParser._SYMBOLIC_NAMES, []);
    ObjectiveCPreprocessorParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xE0a\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x05\x02,\n\x02\x05\x02.\n\x02\x03\x03\x06" +
        "\x031\n\x03\r\x03\x0E\x032\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04?\n\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
        "\x04L\n\x04\x05\x04N\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\\\n\x04\f" +
        "\x04\x0E\x04_\v\x04\x03\x04\x02\x02\x03\x06\x05\x02\x02\x04\x02\x06\x02" +
        "\x02\x06\x03\x02\xBC\xBD\x03\x02\xDF\xE0\x03\x02\xCF\xD0\x03\x02\xD3\xD6" +
        "\x02w\x02-\x03\x02\x02\x02\x040\x03\x02\x02\x02\x06M\x03\x02\x02\x02\b" +
        "\t\x07\xB8\x02\x02\t\n\t\x02\x02\x02\n.\x05\x04\x03\x02\v\f\x07\xB8\x02" +
        "\x02\f\r\x07\xC1\x02\x02\r.\x05\x06\x04\x02\x0E\x0F\x07\xB8\x02\x02\x0F" +
        "\x10\x07\xC2\x02\x02\x10.\x05\x06\x04\x02\x11\x12\x07\xB8\x02\x02\x12" +
        ".\x07\xC3\x02\x02\x13\x14\x07\xB8\x02\x02\x14.\x07\xC7\x02\x02\x15\x16" +
        "\x07\xB8\x02\x02\x16\x17\x07\xC5\x02\x02\x17.\x07\xD8\x02\x02\x18\x19" +
        "\x07\xB8\x02\x02\x19\x1A\x07\xC6\x02\x02\x1A.\x07\xD8\x02\x02\x1B\x1C" +
        "\x07\xB8\x02\x02\x1C\x1D\x07\xC4\x02\x02\x1D.\x07\xD8\x02\x02\x1E\x1F" +
        "\x07\xB8\x02\x02\x1F \x07\xBE\x02\x02 .\x05\x04\x03\x02!\"\x07\xB8\x02" +
        "\x02\"#\x07\xCA\x02\x02#.\x05\x04\x03\x02$%\x07\xB8\x02\x02%&\x07\xCB" +
        "\x02\x02&.\x05\x04\x03\x02\'(\x07\xB8\x02\x02()\x07\xBF\x02\x02)+\x07" +
        "\xD8\x02\x02*,\x05\x04\x03\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03" +
        "\x02\x02\x02-\b\x03\x02\x02\x02-\v\x03\x02\x02\x02-\x0E\x03\x02\x02\x02" +
        "-\x11\x03\x02\x02\x02-\x13\x03\x02\x02\x02-\x15\x03\x02\x02\x02-\x18\x03" +
        "\x02\x02\x02-\x1B\x03\x02\x02\x02-\x1E\x03\x02\x02\x02-!\x03\x02\x02\x02" +
        "-$\x03\x02\x02\x02-\'\x03\x02\x02\x02.\x03\x03\x02\x02\x02/1\t\x03\x02" +
        "\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02" +
        "\x023\x05\x03\x02\x02\x0245\b\x04\x01\x025N\x07\xC8\x02\x026N\x07\xC9" +
        "\x02\x027N\x07\xD9\x02\x028N\x07\xD7\x02\x029>\x07\xD8\x02\x02:;\x07\xCD" +
        "\x02\x02;<\x05\x06\x04\x02<=\x07\xCE\x02\x02=?\x03\x02\x02\x02>:\x03\x02" +
        "\x02\x02>?\x03\x02\x02\x02?N\x03\x02\x02\x02@A\x07\xCD\x02\x02AB\x05\x06" +
        "\x04\x02BC\x07\xCE\x02\x02CN\x03\x02\x02\x02DE\x07\xCC\x02\x02EN\x05\x06" +
        "\x04\bFK\x07\xC0\x02\x02GL\x07\xD8\x02\x02HI\x07\xCD\x02\x02IJ\x07\xD8" +
        "\x02\x02JL\x07\xCE\x02\x02KG\x03\x02\x02\x02KH\x03\x02\x02\x02LN\x03\x02" +
        "\x02\x02M4\x03\x02\x02\x02M6\x03\x02\x02\x02M7\x03\x02\x02\x02M8\x03\x02" +
        "\x02\x02M9\x03\x02\x02\x02M@\x03\x02\x02\x02MD\x03\x02\x02\x02MF\x03\x02" +
        "\x02\x02N]\x03\x02\x02\x02OP\f\x07\x02\x02PQ\t\x04\x02\x02Q\\\x05\x06" +
        "\x04\bRS\f\x06\x02\x02ST\x07\xD1\x02\x02T\\\x05\x06\x04\x07UV\f\x05\x02" +
        "\x02VW\x07\xD2\x02\x02W\\\x05\x06\x04\x06XY\f\x04\x02\x02YZ\t\x05\x02" +
        "\x02Z\\\x05\x06\x04\x05[O\x03\x02\x02\x02[R\x03\x02\x02\x02[U\x03\x02" +
        "\x02\x02[X\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03" +
        "\x02\x02\x02^\x07\x03\x02\x02\x02_]\x03\x02\x02\x02\n+-2>KM[]";
    return ObjectiveCPreprocessorParser;
}(Parser_1.Parser));
exports.ObjectiveCPreprocessorParser = ObjectiveCPreprocessorParser;
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
    PreprocessorImportContext.prototype.SHARP = function () { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    PreprocessorImportContext.prototype.directiveText = function () {
        return this.getRuleContext(0, DirectiveTextContext);
    };
    PreprocessorImportContext.prototype.DIRECTIVE_IMPORT = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IMPORT, 0); };
    PreprocessorImportContext.prototype.DIRECTIVE_INCLUDE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_INCLUDE, 0); };
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
    PreprocessorConditionalContext.prototype.SHARP = function () { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    PreprocessorConditionalContext.prototype.DIRECTIVE_IF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IF, 0); };
    PreprocessorConditionalContext.prototype.preprocessorExpression = function () {
        return this.tryGetRuleContext(0, PreprocessorExpressionContext);
    };
    PreprocessorConditionalContext.prototype.DIRECTIVE_ELIF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ELIF, 0); };
    PreprocessorConditionalContext.prototype.DIRECTIVE_ELSE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ELSE, 0); };
    PreprocessorConditionalContext.prototype.DIRECTIVE_ENDIF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF, 0); };
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
    PreprocessorDefContext.prototype.SHARP = function () { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    PreprocessorDefContext.prototype.DIRECTIVE_IFDEF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF, 0); };
    PreprocessorDefContext.prototype.DIRECTIVE_ID = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); };
    PreprocessorDefContext.prototype.DIRECTIVE_IFNDEF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF, 0); };
    PreprocessorDefContext.prototype.DIRECTIVE_UNDEF = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF, 0); };
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
    PreprocessorPragmaContext.prototype.SHARP = function () { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    PreprocessorPragmaContext.prototype.DIRECTIVE_PRAGMA = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA, 0); };
    PreprocessorPragmaContext.prototype.directiveText = function () {
        return this.getRuleContext(0, DirectiveTextContext);
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
    PreprocessorErrorContext.prototype.SHARP = function () { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    PreprocessorErrorContext.prototype.DIRECTIVE_ERROR = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ERROR, 0); };
    PreprocessorErrorContext.prototype.directiveText = function () {
        return this.getRuleContext(0, DirectiveTextContext);
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
var PreprocessorWarningContext = /** @class */ (function (_super) {
    __extends(PreprocessorWarningContext, _super);
    function PreprocessorWarningContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorWarningContext.prototype.SHARP = function () { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    PreprocessorWarningContext.prototype.DIRECTIVE_WARNING = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_WARNING, 0); };
    PreprocessorWarningContext.prototype.directiveText = function () {
        return this.getRuleContext(0, DirectiveTextContext);
    };
    // @Override
    PreprocessorWarningContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorWarning) {
            listener.enterPreprocessorWarning(this);
        }
    };
    // @Override
    PreprocessorWarningContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorWarning) {
            listener.exitPreprocessorWarning(this);
        }
    };
    // @Override
    PreprocessorWarningContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorWarning) {
            return visitor.visitPreprocessorWarning(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorWarningContext;
}(DirectiveContext));
exports.PreprocessorWarningContext = PreprocessorWarningContext;
var PreprocessorDefineContext = /** @class */ (function (_super) {
    __extends(PreprocessorDefineContext, _super);
    function PreprocessorDefineContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorDefineContext.prototype.SHARP = function () { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); };
    PreprocessorDefineContext.prototype.DIRECTIVE_DEFINE = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE, 0); };
    PreprocessorDefineContext.prototype.DIRECTIVE_ID = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); };
    PreprocessorDefineContext.prototype.directiveText = function () {
        return this.tryGetRuleContext(0, DirectiveTextContext);
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
var DirectiveTextContext = /** @class */ (function (_super) {
    __extends(DirectiveTextContext, _super);
    function DirectiveTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveTextContext.prototype.DIRECTIVE_TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT);
        }
        else {
            return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT, i);
        }
    };
    DirectiveTextContext.prototype.DIRECTIVE_TEXT_NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE);
        }
        else {
            return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE, i);
        }
    };
    Object.defineProperty(DirectiveTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_directiveText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectiveTextContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectiveText) {
            listener.enterDirectiveText(this);
        }
    };
    // @Override
    DirectiveTextContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectiveText) {
            listener.exitDirectiveText(this);
        }
    };
    // @Override
    DirectiveTextContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectiveText) {
            return visitor.visitDirectiveText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectiveTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveTextContext = DirectiveTextContext;
var PreprocessorExpressionContext = /** @class */ (function (_super) {
    __extends(PreprocessorExpressionContext, _super);
    function PreprocessorExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PreprocessorExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ObjectiveCPreprocessorParser.RULE_preprocessorExpression; },
        enumerable: true,
        configurable: true
    });
    PreprocessorExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return PreprocessorExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PreprocessorExpressionContext = PreprocessorExpressionContext;
var PreprocessorConstantContext = /** @class */ (function (_super) {
    __extends(PreprocessorConstantContext, _super);
    function PreprocessorConstantContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorConstantContext.prototype.DIRECTIVE_TRUE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_TRUE, 0); };
    PreprocessorConstantContext.prototype.DIRECTIVE_FALSE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_FALSE, 0); };
    PreprocessorConstantContext.prototype.DIRECTIVE_DECIMAL_LITERAL = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL, 0); };
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
}(PreprocessorExpressionContext));
exports.PreprocessorConstantContext = PreprocessorConstantContext;
var PreprocessorConditionalSymbolContext = /** @class */ (function (_super) {
    __extends(PreprocessorConditionalSymbolContext, _super);
    function PreprocessorConditionalSymbolContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorConditionalSymbolContext.prototype.DIRECTIVE_ID = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); };
    PreprocessorConditionalSymbolContext.prototype.DIRECTIVE_LP = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0); };
    PreprocessorConditionalSymbolContext.prototype.preprocessorExpression = function () {
        return this.tryGetRuleContext(0, PreprocessorExpressionContext);
    };
    PreprocessorConditionalSymbolContext.prototype.DIRECTIVE_RP = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0); };
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
}(PreprocessorExpressionContext));
exports.PreprocessorConditionalSymbolContext = PreprocessorConditionalSymbolContext;
var PreprocessorParenthesisContext = /** @class */ (function (_super) {
    __extends(PreprocessorParenthesisContext, _super);
    function PreprocessorParenthesisContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorParenthesisContext.prototype.DIRECTIVE_LP = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0); };
    PreprocessorParenthesisContext.prototype.preprocessorExpression = function () {
        return this.getRuleContext(0, PreprocessorExpressionContext);
    };
    PreprocessorParenthesisContext.prototype.DIRECTIVE_RP = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0); };
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
}(PreprocessorExpressionContext));
exports.PreprocessorParenthesisContext = PreprocessorParenthesisContext;
var PreprocessorNotContext = /** @class */ (function (_super) {
    __extends(PreprocessorNotContext, _super);
    function PreprocessorNotContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorNotContext.prototype.DIRECTIVE_BANG = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_BANG, 0); };
    PreprocessorNotContext.prototype.preprocessorExpression = function () {
        return this.getRuleContext(0, PreprocessorExpressionContext);
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
}(PreprocessorExpressionContext));
exports.PreprocessorNotContext = PreprocessorNotContext;
var PreprocessorBinaryContext = /** @class */ (function (_super) {
    __extends(PreprocessorBinaryContext, _super);
    function PreprocessorBinaryContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorBinaryContext.prototype.preprocessorExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PreprocessorExpressionContext);
        }
        else {
            return this.getRuleContext(i, PreprocessorExpressionContext);
        }
    };
    PreprocessorBinaryContext.prototype.DIRECTIVE_EQUAL = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_EQUAL, 0); };
    PreprocessorBinaryContext.prototype.DIRECTIVE_NOTEQUAL = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_NOTEQUAL, 0); };
    PreprocessorBinaryContext.prototype.DIRECTIVE_AND = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_AND, 0); };
    PreprocessorBinaryContext.prototype.DIRECTIVE_OR = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_OR, 0); };
    PreprocessorBinaryContext.prototype.DIRECTIVE_LT = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LT, 0); };
    PreprocessorBinaryContext.prototype.DIRECTIVE_GT = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_GT, 0); };
    PreprocessorBinaryContext.prototype.DIRECTIVE_LE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LE, 0); };
    PreprocessorBinaryContext.prototype.DIRECTIVE_GE = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_GE, 0); };
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
}(PreprocessorExpressionContext));
exports.PreprocessorBinaryContext = PreprocessorBinaryContext;
var PreprocessorDefinedContext = /** @class */ (function (_super) {
    __extends(PreprocessorDefinedContext, _super);
    function PreprocessorDefinedContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorDefinedContext.prototype.DIRECTIVE_DEFINED = function () { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED, 0); };
    PreprocessorDefinedContext.prototype.DIRECTIVE_ID = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); };
    PreprocessorDefinedContext.prototype.DIRECTIVE_LP = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0); };
    PreprocessorDefinedContext.prototype.DIRECTIVE_RP = function () { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0); };
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
}(PreprocessorExpressionContext));
exports.PreprocessorDefinedContext = PreprocessorDefinedContext;
