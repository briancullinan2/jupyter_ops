"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mumath/mumath.g4 by ANTLR 4.7.3-SNAPSHOT
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
var mumathParser = /** @class */ (function (_super) {
    __extends(mumathParser, _super);
    function mumathParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(mumathParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(mumathParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return mumathParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mumathParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "mumath.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mumathParser.prototype, "ruleNames", {
        // @Override
        get: function () { return mumathParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mumathParser.prototype, "serializedATN", {
        // @Override
        get: function () { return mumathParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    mumathParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, mumathParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mumathParser.FUNCTION || _la === mumathParser.ID) {
                    {
                        {
                            this.state = 41;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 38;
                                        this.functionDefinition();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 39;
                                        this.assignment();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 40;
                                        this.functionDesignator();
                                    }
                                    break;
                            }
                            this.state = 43;
                            _la = this._input.LA(1);
                            if (!(_la === mumathParser.SEMI || _la === mumathParser.DOLLAR)) {
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
                    this.state = 49;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 50;
                this.match(mumathParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mumathParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, mumathParser.RULE_assignment);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 52;
                                    this.match(mumathParser.ID);
                                    this.state = 53;
                                    this.match(mumathParser.COLON);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 56;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 58;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mumathParser.prototype.list = function () {
        var _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, mumathParser.RULE_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.match(mumathParser.LPAREN);
                this.state = 71;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case mumathParser.RPAREN:
                        {
                            this.state = 61;
                            this.match(mumathParser.RPAREN);
                        }
                        break;
                    case mumathParser.ID:
                        {
                            this.state = 62;
                            this.match(mumathParser.ID);
                            this.state = 67;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === mumathParser.COMMA) {
                                {
                                    {
                                        this.state = 63;
                                        this.match(mumathParser.COMMA);
                                        this.state = 64;
                                        this.match(mumathParser.ID);
                                    }
                                }
                                this.state = 69;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 70;
                            this.match(mumathParser.RPAREN);
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
    mumathParser.prototype.functionDefinition = function () {
        var _localctx = new FunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, mumathParser.RULE_functionDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(mumathParser.FUNCTION);
                this.state = 74;
                this.match(mumathParser.ID);
                this.state = 75;
                this.list();
                this.state = 76;
                this.match(mumathParser.COMMA);
                this.state = 77;
                this.statments();
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mumathParser.COMMA) {
                    {
                        this.state = 78;
                        this.match(mumathParser.COMMA);
                    }
                }
                this.state = 81;
                this.match(mumathParser.ENDFUN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mumathParser.prototype.actualParameter = function () {
        var _localctx = new ActualParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, mumathParser.RULE_actualParameter);
        try {
            this.state = 85;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 83;
                        this.expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 84;
                        this.assignment();
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
    mumathParser.prototype.statments = function () {
        var _localctx = new StatmentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, mumathParser.RULE_statments);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 87;
                            this.loop();
                        }
                        break;
                    case 2:
                        {
                            this.state = 88;
                            this.when();
                        }
                        break;
                    case 3:
                        {
                            this.state = 89;
                            this.block();
                        }
                        break;
                    case 4:
                        {
                            this.state = 90;
                            this.assignment();
                        }
                        break;
                    case 5:
                        {
                            this.state = 91;
                            this.expression();
                        }
                        break;
                    case 6:
                        {
                            this.state = 92;
                            this.functionDesignator();
                        }
                        break;
                }
                this.state = 99;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 95;
                                this.match(mumathParser.COMMA);
                                this.state = 96;
                                this.statments();
                            }
                        }
                    }
                    this.state = 101;
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
    mumathParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, mumathParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this.match(mumathParser.BLOCK);
                this.state = 103;
                this.statments();
                this.state = 104;
                this.match(mumathParser.COMMA);
                this.state = 105;
                this.match(mumathParser.ENDBLOCK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mumathParser.prototype.loop = function () {
        var _localctx = new LoopContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, mumathParser.RULE_loop);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 107;
                this.match(mumathParser.LOOP);
                this.state = 108;
                this.statments();
                this.state = 110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mumathParser.COMMA) {
                    {
                        this.state = 109;
                        this.match(mumathParser.COMMA);
                    }
                }
                this.state = 112;
                this.match(mumathParser.ENDLOOP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mumathParser.prototype.when = function () {
        var _localctx = new WhenContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, mumathParser.RULE_when);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this.match(mumathParser.WHEN);
                this.state = 115;
                this.expression();
                {
                    this.state = 117;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === mumathParser.COMMA) {
                        {
                            this.state = 116;
                            this.match(mumathParser.COMMA);
                        }
                    }
                    this.state = 119;
                    this.match(mumathParser.EXIT);
                    this.state = 120;
                    this.match(mumathParser.COMMA);
                    this.state = 121;
                    this.statments();
                    this.state = 123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === mumathParser.COMMA) {
                        {
                            this.state = 122;
                            this.match(mumathParser.COMMA);
                        }
                    }
                    this.state = 125;
                    this.match(mumathParser.EXIT);
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
    mumathParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, mumathParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.simpleExpression();
                this.state = 133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.EQF) | (1 << mumathParser.EQUATION) | (1 << mumathParser.EQC) | (1 << mumathParser.NOT_EQUAL) | (1 << mumathParser.LT) | (1 << mumathParser.LE) | (1 << mumathParser.GE) | (1 << mumathParser.GT))) !== 0)) {
                    {
                        {
                            this.state = 128;
                            this.relationalOperator();
                            this.state = 129;
                            this.simpleExpression();
                        }
                    }
                    this.state = 135;
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
    mumathParser.prototype.relationalOperator = function () {
        var _localctx = new RelationalOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, mumathParser.RULE_relationalOperator);
        var _la;
        try {
            this.state = 138;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mumathParser.EQF:
                case mumathParser.EQC:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 136;
                        this.equal();
                    }
                    break;
                case mumathParser.EQUATION:
                case mumathParser.NOT_EQUAL:
                case mumathParser.LT:
                case mumathParser.LE:
                case mumathParser.GE:
                case mumathParser.GT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 137;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.EQUATION) | (1 << mumathParser.NOT_EQUAL) | (1 << mumathParser.LT) | (1 << mumathParser.LE) | (1 << mumathParser.GE) | (1 << mumathParser.GT))) !== 0))) {
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
    mumathParser.prototype.simpleExpression = function () {
        var _localctx = new SimpleExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, mumathParser.RULE_simpleExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mumathParser.MINUS) {
                    {
                        this.state = 140;
                        this.match(mumathParser.MINUS);
                    }
                }
                this.state = 143;
                this.term();
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.OR) | (1 << mumathParser.PLUS) | (1 << mumathParser.MINUS))) !== 0)) {
                    {
                        {
                            this.state = 144;
                            this.addingOperator();
                            this.state = 145;
                            this.term();
                        }
                    }
                    this.state = 151;
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
    mumathParser.prototype.addingOperator = function () {
        var _localctx = new AddingOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, mumathParser.RULE_addingOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.OR) | (1 << mumathParser.PLUS) | (1 << mumathParser.MINUS))) !== 0))) {
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
    mumathParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, mumathParser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.factor();
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (mumathParser.AND - 11)) | (1 << (mumathParser.MOD - 11)) | (1 << (mumathParser.STAR - 11)) | (1 << (mumathParser.SLASH - 11)) | (1 << (mumathParser.POWER - 11)))) !== 0)) {
                    {
                        {
                            this.state = 155;
                            this.multiplyingOperator();
                            this.state = 156;
                            this.factor();
                        }
                    }
                    this.state = 162;
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
    mumathParser.prototype.multiplyingOperator = function () {
        var _localctx = new MultiplyingOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, mumathParser.RULE_multiplyingOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                _la = this._input.LA(1);
                if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (mumathParser.AND - 11)) | (1 << (mumathParser.MOD - 11)) | (1 << (mumathParser.STAR - 11)) | (1 << (mumathParser.SLASH - 11)) | (1 << (mumathParser.POWER - 11)))) !== 0))) {
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
    mumathParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, mumathParser.RULE_factor);
        try {
            this.state = 174;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 165;
                        this.match(mumathParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 166;
                        this.constant();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 167;
                        this.match(mumathParser.LPAREN);
                        this.state = 168;
                        this.expression();
                        this.state = 169;
                        this.match(mumathParser.RPAREN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 171;
                        this.functionDesignator();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 172;
                        this.match(mumathParser.NOT);
                        this.state = 173;
                        this.factor();
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
    mumathParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, mumathParser.RULE_constant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 176;
                            this.match(mumathParser.NUMBER);
                        }
                        break;
                    case 2:
                        {
                            this.state = 177;
                            this.match(mumathParser.STRING);
                        }
                        break;
                    case 3:
                        {
                            this.state = 178;
                            this.match(mumathParser.QUOTE);
                            this.state = 179;
                            this.match(mumathParser.ID);
                        }
                        break;
                    case 4:
                        {
                            this.state = 180;
                            this.match(mumathParser.QUOTE);
                            this.state = 181;
                            this.match(mumathParser.STRING);
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
    mumathParser.prototype.functionDesignator = function () {
        var _localctx = new FunctionDesignatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, mumathParser.RULE_functionDesignator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.match(mumathParser.ID);
                this.state = 185;
                this.match(mumathParser.LPAREN);
                this.state = 195;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case mumathParser.NOT:
                    case mumathParser.QUOTE:
                    case mumathParser.MINUS:
                    case mumathParser.LPAREN:
                    case mumathParser.ID:
                    case mumathParser.STRING:
                    case mumathParser.NUMBER:
                        {
                            {
                                this.state = 186;
                                this.actualParameter();
                                this.state = 191;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === mumathParser.COMMA) {
                                    {
                                        {
                                            this.state = 187;
                                            this.match(mumathParser.COMMA);
                                            this.state = 188;
                                            this.actualParameter();
                                        }
                                    }
                                    this.state = 193;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        break;
                    case mumathParser.RPAREN:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 197;
                this.match(mumathParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mumathParser.prototype.equal = function () {
        var _localctx = new EqualContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, mumathParser.RULE_equal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                _la = this._input.LA(1);
                if (!(_la === mumathParser.EQF || _la === mumathParser.EQC)) {
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
    Object.defineProperty(mumathParser, "_ATN", {
        get: function () {
            if (!mumathParser.__ATN) {
                mumathParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(mumathParser._serializedATN));
            }
            return mumathParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    mumathParser.BLOCK = 1;
    mumathParser.ENDBLOCK = 2;
    mumathParser.FUNCTION = 3;
    mumathParser.ENDFUN = 4;
    mumathParser.EQF = 5;
    mumathParser.LOOP = 6;
    mumathParser.ENDLOOP = 7;
    mumathParser.WHEN = 8;
    mumathParser.EXIT = 9;
    mumathParser.OR = 10;
    mumathParser.AND = 11;
    mumathParser.NOT = 12;
    mumathParser.MOD = 13;
    mumathParser.WS = 14;
    mumathParser.COMMENT = 15;
    mumathParser.EQUATION = 16;
    mumathParser.QUOTE = 17;
    mumathParser.PLUS = 18;
    mumathParser.MINUS = 19;
    mumathParser.STAR = 20;
    mumathParser.SLASH = 21;
    mumathParser.COMMA = 22;
    mumathParser.SEMI = 23;
    mumathParser.DOLLAR = 24;
    mumathParser.COLON = 25;
    mumathParser.EQC = 26;
    mumathParser.NOT_EQUAL = 27;
    mumathParser.LT = 28;
    mumathParser.LE = 29;
    mumathParser.GE = 30;
    mumathParser.GT = 31;
    mumathParser.LPAREN = 32;
    mumathParser.RPAREN = 33;
    mumathParser.POWER = 34;
    mumathParser.ID = 35;
    mumathParser.ARR = 36;
    mumathParser.STRING = 37;
    mumathParser.NUMBER = 38;
    mumathParser.RULE_program = 0;
    mumathParser.RULE_assignment = 1;
    mumathParser.RULE_list = 2;
    mumathParser.RULE_functionDefinition = 3;
    mumathParser.RULE_actualParameter = 4;
    mumathParser.RULE_statments = 5;
    mumathParser.RULE_block = 6;
    mumathParser.RULE_loop = 7;
    mumathParser.RULE_when = 8;
    mumathParser.RULE_expression = 9;
    mumathParser.RULE_relationalOperator = 10;
    mumathParser.RULE_simpleExpression = 11;
    mumathParser.RULE_addingOperator = 12;
    mumathParser.RULE_term = 13;
    mumathParser.RULE_multiplyingOperator = 14;
    mumathParser.RULE_factor = 15;
    mumathParser.RULE_constant = 16;
    mumathParser.RULE_functionDesignator = 17;
    mumathParser.RULE_equal = 18;
    // tslint:disable:no-trailing-whitespace
    mumathParser.ruleNames = [
        "program", "assignment", "list", "functionDefinition", "actualParameter",
        "statments", "block", "loop", "when", "expression", "relationalOperator",
        "simpleExpression", "addingOperator", "term", "multiplyingOperator", "factor",
        "constant", "functionDesignator", "equal",
    ];
    mumathParser._LITERAL_NAMES = [
        undefined, "'BLOCK'", "'ENDBLOCK'", "'FUNCTION'", "'ENDFUN'", "'EQ'",
        "'LOOP'", "'ENDLOOP'", "'WHEN'", "'EXIT'", "'OR'", "'AND'", "'NOT'", "'mod'",
        undefined, undefined, "'=='", "'''", "'+'", "'-'", "'*'", "'/'", "','",
        "';'", "'$'", "':'", "'='", "'<>'", "'<'", "'<='", "'>='", "'>'", "'('",
        "')'", "'^'",
    ];
    mumathParser._SYMBOLIC_NAMES = [
        undefined, "BLOCK", "ENDBLOCK", "FUNCTION", "ENDFUN", "EQF", "LOOP", "ENDLOOP",
        "WHEN", "EXIT", "OR", "AND", "NOT", "MOD", "WS", "COMMENT", "EQUATION",
        "QUOTE", "PLUS", "MINUS", "STAR", "SLASH", "COMMA", "SEMI", "DOLLAR",
        "COLON", "EQC", "NOT_EQUAL", "LT", "LE", "GE", "GT", "LPAREN", "RPAREN",
        "POWER", "ID", "ARR", "STRING", "NUMBER",
    ];
    mumathParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(mumathParser._LITERAL_NAMES, mumathParser._SYMBOLIC_NAMES, []);
    mumathParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xCC\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x05\x02,\n\x02\x03\x02" +
        "\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x06\x039\n\x03\r\x03\x0E\x03:\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x07\x04D\n\x04\f\x04\x0E\x04G\v\x04\x03\x04\x05\x04" +
        "J\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05R\n\x05" +
        "\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06X\n\x06\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x05\x07`\n\x07\x03\x07\x03\x07\x07\x07d\n\x07" +
        "\f\x07\x0E\x07g\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
        "\x05\tq\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\nx\n\n\x03\n\x03\n\x03\n" +
        "\x03\n\x05\n~\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\x86\n\v\f" +
        "\v\x0E\v\x89\v\v\x03\f\x03\f\x05\f\x8D\n\f\x03\r\x05\r\x90\n\r\x03\r\x03" +
        "\r\x03\r\x03\r\x07\r\x96\n\r\f\r\x0E\r\x99\v\r\x03\x0E\x03\x0E\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xA1\n\x0F\f\x0F\x0E\x0F\xA4\v\x0F\x03" +
        "\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x03\x11\x05\x11\xB1\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x05\x12\xB9\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
        "\x13\xC0\n\x13\f\x13\x0E\x13\xC3\v\x13\x03\x13\x05\x13\xC6\n\x13\x03\x13" +
        "\x03\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
        "\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x07\x03\x02\x19\x1A\x04" +
        "\x02\x12\x12\x1D!\x04\x02\f\f\x14\x15\x06\x02\r\r\x0F\x0F\x16\x17$$\x04" +
        "\x02\x07\x07\x1C\x1C\x02\xD7\x021\x03\x02\x02\x02\x048\x03\x02\x02\x02" +
        "\x06>\x03\x02\x02\x02\bK\x03\x02\x02\x02\nW\x03\x02\x02\x02\f_\x03\x02" +
        "\x02\x02\x0Eh\x03\x02\x02\x02\x10m\x03\x02\x02\x02\x12t\x03\x02\x02\x02" +
        "\x14\x81\x03\x02\x02\x02\x16\x8C\x03\x02\x02\x02\x18\x8F\x03\x02\x02\x02" +
        "\x1A\x9A\x03\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E\xA5\x03\x02\x02\x02" +
        " \xB0\x03\x02\x02\x02\"\xB8\x03\x02\x02\x02$\xBA\x03\x02\x02\x02&\xC9" +
        "\x03\x02\x02\x02(,\x05\b\x05\x02),\x05\x04\x03\x02*,\x05$\x13\x02+(\x03" +
        "\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02-.\t" +
        "\x02\x02\x02.0\x03\x02\x02\x02/+\x03\x02\x02\x0203\x03\x02\x02\x021/\x03" +
        "\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x0245\x07" +
        "\x02\x02\x035\x03\x03\x02\x02\x0267\x07%\x02\x0279\x07\x1B\x02\x0286\x03" +
        "\x02\x02\x029:\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03" +
        "\x02\x02\x02<=\x05\x14\v\x02=\x05\x03\x02\x02\x02>I\x07\"\x02\x02?J\x07" +
        "#\x02\x02@E\x07%\x02\x02AB\x07\x18\x02\x02BD\x07%\x02\x02CA\x03\x02\x02" +
        "\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02" +
        "\x02GE\x03\x02\x02\x02HJ\x07#\x02\x02I?\x03\x02\x02\x02I@\x03\x02\x02" +
        "\x02J\x07\x03\x02\x02\x02KL\x07\x05\x02\x02LM\x07%\x02\x02MN\x05\x06\x04" +
        "\x02NO\x07\x18\x02\x02OQ\x05\f\x07\x02PR\x07\x18\x02\x02QP\x03\x02\x02" +
        "\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x06\x02\x02T\t\x03\x02" +
        "\x02\x02UX\x05\x14\v\x02VX\x05\x04\x03\x02WU\x03\x02\x02\x02WV\x03\x02" +
        "\x02\x02X\v\x03\x02\x02\x02Y`\x05\x10\t\x02Z`\x05\x12\n\x02[`\x05\x0E" +
        "\b\x02\\`\x05\x04\x03\x02]`\x05\x14\v\x02^`\x05$\x13\x02_Y\x03\x02\x02" +
        "\x02_Z\x03\x02\x02\x02_[\x03\x02\x02\x02_\\\x03\x02\x02\x02_]\x03\x02" +
        "\x02\x02_^\x03\x02\x02\x02`e\x03\x02\x02\x02ab\x07\x18\x02\x02bd\x05\f" +
        "\x07\x02ca\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02" +
        "\x02\x02f\r\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07\x03\x02\x02ij\x05" +
        "\f\x07\x02jk\x07\x18\x02\x02kl\x07\x04\x02\x02l\x0F\x03\x02\x02\x02mn" +
        "\x07\b\x02\x02np\x05\f\x07\x02oq\x07\x18\x02\x02po\x03\x02\x02\x02pq\x03" +
        "\x02\x02\x02qr\x03\x02\x02\x02rs\x07\t\x02\x02s\x11\x03\x02\x02\x02tu" +
        "\x07\n\x02\x02uw\x05\x14\v\x02vx\x07\x18\x02\x02wv\x03\x02\x02\x02wx\x03" +
        "\x02\x02\x02xy\x03\x02\x02\x02yz\x07\v\x02\x02z{\x07\x18\x02\x02{}\x05" +
        "\f\x07\x02|~\x07\x18\x02\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F" +
        "\x03\x02\x02\x02\x7F\x80\x07\v\x02\x02\x80\x13\x03\x02\x02\x02\x81\x87" +
        "\x05\x18\r\x02\x82\x83\x05\x16\f\x02\x83\x84\x05\x18\r\x02\x84\x86\x03" +
        "\x02\x02\x02\x85\x82\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03" +
        "\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x15\x03\x02\x02\x02\x89\x87\x03" +
        "\x02\x02\x02\x8A\x8D\x05&\x14\x02\x8B\x8D\t\x03\x02\x02\x8C\x8A\x03\x02" +
        "\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x17\x03\x02\x02\x02\x8E\x90\x07\x15" +
        "\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02" +
        "\x02\x02\x91\x97\x05\x1C\x0F\x02\x92\x93\x05\x1A\x0E\x02\x93\x94\x05\x1C" +
        "\x0F\x02\x94\x96\x03\x02\x02\x02\x95\x92\x03\x02\x02\x02\x96\x99\x03\x02" +
        "\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x19\x03\x02" +
        "\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9B\t\x04\x02\x02\x9B\x1B\x03\x02" +
        "\x02\x02\x9C\xA2\x05 \x11\x02\x9D\x9E\x05\x1E\x10\x02\x9E\x9F\x05 \x11" +
        "\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9D\x03\x02\x02\x02\xA1\xA4\x03\x02\x02" +
        "\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\x1D\x03\x02\x02" +
        "\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6\t\x05\x02\x02\xA6\x1F\x03\x02\x02" +
        "\x02\xA7\xB1\x07%\x02\x02\xA8\xB1\x05\"\x12\x02\xA9\xAA\x07\"\x02\x02" +
        "\xAA\xAB\x05\x14\v\x02\xAB\xAC\x07#\x02\x02\xAC\xB1\x03\x02\x02\x02\xAD" +
        "\xB1\x05$\x13\x02\xAE\xAF\x07\x0E\x02\x02\xAF\xB1\x05 \x11\x02\xB0\xA7" +
        "\x03\x02\x02\x02\xB0\xA8\x03\x02\x02\x02\xB0\xA9\x03\x02\x02\x02\xB0\xAD" +
        "\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1!\x03\x02\x02\x02\xB2\xB9" +
        "\x07(\x02\x02\xB3\xB9\x07\'\x02\x02\xB4\xB5\x07\x13\x02\x02\xB5\xB9\x07" +
        "%\x02\x02\xB6\xB7\x07\x13\x02\x02\xB7\xB9\x07\'\x02\x02\xB8\xB2\x03\x02" +
        "\x02\x02\xB8\xB3\x03\x02\x02\x02\xB8\xB4\x03\x02\x02\x02\xB8\xB6\x03\x02" +
        "\x02\x02\xB9#\x03\x02\x02\x02\xBA\xBB\x07%\x02\x02\xBB\xC5\x07\"\x02\x02" +
        "\xBC\xC1\x05\n\x06\x02\xBD\xBE\x07\x18\x02\x02\xBE\xC0\x05\n\x06\x02\xBF" +
        "\xBD\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1" +
        "\xC2\x03\x02\x02\x02\xC2\xC6\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4" +
        "\xC6\x03\x02\x02\x02\xC5\xBC\x03\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6" +
        "\xC7\x03\x02\x02\x02\xC7\xC8\x07#\x02\x02\xC8%\x03\x02\x02\x02\xC9\xCA" +
        "\t\x06\x02\x02\xCA\'\x03\x02\x02\x02\x17+1:EIQW_epw}\x87\x8C\x8F\x97\xA2" +
        "\xB0\xB8\xC1\xC5";
    return mumathParser;
}(Parser_1.Parser));
exports.mumathParser = mumathParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.EOF = function () { return this.getToken(mumathParser.EOF, 0); };
    ProgramContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.SEMI);
        }
        else {
            return this.getToken(mumathParser.SEMI, i);
        }
    };
    ProgramContext.prototype.DOLLAR = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.DOLLAR);
        }
        else {
            return this.getToken(mumathParser.DOLLAR, i);
        }
    };
    ProgramContext.prototype.functionDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDefinitionContext);
        }
        else {
            return this.getRuleContext(i, FunctionDefinitionContext);
        }
    };
    ProgramContext.prototype.assignment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentContext);
        }
        else {
            return this.getRuleContext(i, AssignmentContext);
        }
    };
    ProgramContext.prototype.functionDesignator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDesignatorContext);
        }
        else {
            return this.getRuleContext(i, FunctionDesignatorContext);
        }
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_program; },
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
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AssignmentContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.ID);
        }
        else {
            return this.getToken(mumathParser.ID, i);
        }
    };
    AssignmentContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.COLON);
        }
        else {
            return this.getToken(mumathParser.COLON, i);
        }
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_assignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentContext = AssignmentContext;
var ListContext = /** @class */ (function (_super) {
    __extends(ListContext, _super);
    function ListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListContext.prototype.LPAREN = function () { return this.getToken(mumathParser.LPAREN, 0); };
    ListContext.prototype.RPAREN = function () { return this.tryGetToken(mumathParser.RPAREN, 0); };
    ListContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.ID);
        }
        else {
            return this.getToken(mumathParser.ID, i);
        }
    };
    ListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.COMMA);
        }
        else {
            return this.getToken(mumathParser.COMMA, i);
        }
    };
    Object.defineProperty(ListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListContext.prototype.enterRule = function (listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    };
    // @Override
    ListContext.prototype.exitRule = function (listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    };
    // @Override
    ListContext.prototype.accept = function (visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListContext = ListContext;
var FunctionDefinitionContext = /** @class */ (function (_super) {
    __extends(FunctionDefinitionContext, _super);
    function FunctionDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDefinitionContext.prototype.FUNCTION = function () { return this.getToken(mumathParser.FUNCTION, 0); };
    FunctionDefinitionContext.prototype.ID = function () { return this.getToken(mumathParser.ID, 0); };
    FunctionDefinitionContext.prototype.list = function () {
        return this.getRuleContext(0, ListContext);
    };
    FunctionDefinitionContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.COMMA);
        }
        else {
            return this.getToken(mumathParser.COMMA, i);
        }
    };
    FunctionDefinitionContext.prototype.statments = function () {
        return this.getRuleContext(0, StatmentsContext);
    };
    FunctionDefinitionContext.prototype.ENDFUN = function () { return this.getToken(mumathParser.ENDFUN, 0); };
    Object.defineProperty(FunctionDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_functionDefinition; },
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
var ActualParameterContext = /** @class */ (function (_super) {
    __extends(ActualParameterContext, _super);
    function ActualParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActualParameterContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ActualParameterContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    Object.defineProperty(ActualParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_actualParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActualParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterActualParameter) {
            listener.enterActualParameter(this);
        }
    };
    // @Override
    ActualParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitActualParameter) {
            listener.exitActualParameter(this);
        }
    };
    // @Override
    ActualParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitActualParameter) {
            return visitor.visitActualParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActualParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActualParameterContext = ActualParameterContext;
var StatmentsContext = /** @class */ (function (_super) {
    __extends(StatmentsContext, _super);
    function StatmentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatmentsContext.prototype.loop = function () {
        return this.tryGetRuleContext(0, LoopContext);
    };
    StatmentsContext.prototype.when = function () {
        return this.tryGetRuleContext(0, WhenContext);
    };
    StatmentsContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatmentsContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    StatmentsContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    StatmentsContext.prototype.functionDesignator = function () {
        return this.tryGetRuleContext(0, FunctionDesignatorContext);
    };
    StatmentsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.COMMA);
        }
        else {
            return this.getToken(mumathParser.COMMA, i);
        }
    };
    StatmentsContext.prototype.statments = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatmentsContext);
        }
        else {
            return this.getRuleContext(i, StatmentsContext);
        }
    };
    Object.defineProperty(StatmentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_statments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatmentsContext.prototype.enterRule = function (listener) {
        if (listener.enterStatments) {
            listener.enterStatments(this);
        }
    };
    // @Override
    StatmentsContext.prototype.exitRule = function (listener) {
        if (listener.exitStatments) {
            listener.exitStatments(this);
        }
    };
    // @Override
    StatmentsContext.prototype.accept = function (visitor) {
        if (visitor.visitStatments) {
            return visitor.visitStatments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatmentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatmentsContext = StatmentsContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.BLOCK = function () { return this.getToken(mumathParser.BLOCK, 0); };
    BlockContext.prototype.statments = function () {
        return this.getRuleContext(0, StatmentsContext);
    };
    BlockContext.prototype.COMMA = function () { return this.getToken(mumathParser.COMMA, 0); };
    BlockContext.prototype.ENDBLOCK = function () { return this.getToken(mumathParser.ENDBLOCK, 0); };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_block; },
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
var LoopContext = /** @class */ (function (_super) {
    __extends(LoopContext, _super);
    function LoopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LoopContext.prototype.LOOP = function () { return this.getToken(mumathParser.LOOP, 0); };
    LoopContext.prototype.statments = function () {
        return this.getRuleContext(0, StatmentsContext);
    };
    LoopContext.prototype.ENDLOOP = function () { return this.getToken(mumathParser.ENDLOOP, 0); };
    LoopContext.prototype.COMMA = function () { return this.tryGetToken(mumathParser.COMMA, 0); };
    Object.defineProperty(LoopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_loop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LoopContext.prototype.enterRule = function (listener) {
        if (listener.enterLoop) {
            listener.enterLoop(this);
        }
    };
    // @Override
    LoopContext.prototype.exitRule = function (listener) {
        if (listener.exitLoop) {
            listener.exitLoop(this);
        }
    };
    // @Override
    LoopContext.prototype.accept = function (visitor) {
        if (visitor.visitLoop) {
            return visitor.visitLoop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LoopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LoopContext = LoopContext;
var WhenContext = /** @class */ (function (_super) {
    __extends(WhenContext, _super);
    function WhenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhenContext.prototype.WHEN = function () { return this.getToken(mumathParser.WHEN, 0); };
    WhenContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    WhenContext.prototype.EXIT = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.EXIT);
        }
        else {
            return this.getToken(mumathParser.EXIT, i);
        }
    };
    WhenContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.COMMA);
        }
        else {
            return this.getToken(mumathParser.COMMA, i);
        }
    };
    WhenContext.prototype.statments = function () {
        return this.tryGetRuleContext(0, StatmentsContext);
    };
    Object.defineProperty(WhenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_when; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhenContext.prototype.enterRule = function (listener) {
        if (listener.enterWhen) {
            listener.enterWhen(this);
        }
    };
    // @Override
    WhenContext.prototype.exitRule = function (listener) {
        if (listener.exitWhen) {
            listener.exitWhen(this);
        }
    };
    // @Override
    WhenContext.prototype.accept = function (visitor) {
        if (visitor.visitWhen) {
            return visitor.visitWhen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhenContext = WhenContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.simpleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SimpleExpressionContext);
        }
    };
    ExpressionContext.prototype.relationalOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationalOperatorContext);
        }
        else {
            return this.getRuleContext(i, RelationalOperatorContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_expression; },
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
var RelationalOperatorContext = /** @class */ (function (_super) {
    __extends(RelationalOperatorContext, _super);
    function RelationalOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalOperatorContext.prototype.equal = function () {
        return this.tryGetRuleContext(0, EqualContext);
    };
    RelationalOperatorContext.prototype.NOT_EQUAL = function () { return this.tryGetToken(mumathParser.NOT_EQUAL, 0); };
    RelationalOperatorContext.prototype.LT = function () { return this.tryGetToken(mumathParser.LT, 0); };
    RelationalOperatorContext.prototype.LE = function () { return this.tryGetToken(mumathParser.LE, 0); };
    RelationalOperatorContext.prototype.GE = function () { return this.tryGetToken(mumathParser.GE, 0); };
    RelationalOperatorContext.prototype.GT = function () { return this.tryGetToken(mumathParser.GT, 0); };
    RelationalOperatorContext.prototype.EQUATION = function () { return this.tryGetToken(mumathParser.EQUATION, 0); };
    Object.defineProperty(RelationalOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_relationalOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalOperator) {
            listener.enterRelationalOperator(this);
        }
    };
    // @Override
    RelationalOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalOperator) {
            listener.exitRelationalOperator(this);
        }
    };
    // @Override
    RelationalOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalOperator) {
            return visitor.visitRelationalOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalOperatorContext = RelationalOperatorContext;
var SimpleExpressionContext = /** @class */ (function (_super) {
    __extends(SimpleExpressionContext, _super);
    function SimpleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleExpressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    SimpleExpressionContext.prototype.MINUS = function () { return this.tryGetToken(mumathParser.MINUS, 0); };
    SimpleExpressionContext.prototype.addingOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddingOperatorContext);
        }
        else {
            return this.getRuleContext(i, AddingOperatorContext);
        }
    };
    Object.defineProperty(SimpleExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_simpleExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleExpression) {
            listener.enterSimpleExpression(this);
        }
    };
    // @Override
    SimpleExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleExpression) {
            listener.exitSimpleExpression(this);
        }
    };
    // @Override
    SimpleExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleExpression) {
            return visitor.visitSimpleExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleExpressionContext = SimpleExpressionContext;
var AddingOperatorContext = /** @class */ (function (_super) {
    __extends(AddingOperatorContext, _super);
    function AddingOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddingOperatorContext.prototype.PLUS = function () { return this.tryGetToken(mumathParser.PLUS, 0); };
    AddingOperatorContext.prototype.MINUS = function () { return this.tryGetToken(mumathParser.MINUS, 0); };
    AddingOperatorContext.prototype.OR = function () { return this.tryGetToken(mumathParser.OR, 0); };
    Object.defineProperty(AddingOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_addingOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddingOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAddingOperator) {
            listener.enterAddingOperator(this);
        }
    };
    // @Override
    AddingOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAddingOperator) {
            listener.exitAddingOperator(this);
        }
    };
    // @Override
    AddingOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAddingOperator) {
            return visitor.visitAddingOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddingOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddingOperatorContext = AddingOperatorContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    };
    TermContext.prototype.multiplyingOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplyingOperatorContext);
        }
        else {
            return this.getRuleContext(i, MultiplyingOperatorContext);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TermContext.prototype.enterRule = function (listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    };
    // @Override
    TermContext.prototype.exitRule = function (listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    };
    // @Override
    TermContext.prototype.accept = function (visitor) {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermContext = TermContext;
var MultiplyingOperatorContext = /** @class */ (function (_super) {
    __extends(MultiplyingOperatorContext, _super);
    function MultiplyingOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingOperatorContext.prototype.STAR = function () { return this.tryGetToken(mumathParser.STAR, 0); };
    MultiplyingOperatorContext.prototype.SLASH = function () { return this.tryGetToken(mumathParser.SLASH, 0); };
    MultiplyingOperatorContext.prototype.MOD = function () { return this.tryGetToken(mumathParser.MOD, 0); };
    MultiplyingOperatorContext.prototype.AND = function () { return this.tryGetToken(mumathParser.AND, 0); };
    MultiplyingOperatorContext.prototype.POWER = function () { return this.tryGetToken(mumathParser.POWER, 0); };
    Object.defineProperty(MultiplyingOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_multiplyingOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplyingOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplyingOperator) {
            listener.enterMultiplyingOperator(this);
        }
    };
    // @Override
    MultiplyingOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplyingOperator) {
            listener.exitMultiplyingOperator(this);
        }
    };
    // @Override
    MultiplyingOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplyingOperator) {
            return visitor.visitMultiplyingOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyingOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplyingOperatorContext = MultiplyingOperatorContext;
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.ID = function () { return this.tryGetToken(mumathParser.ID, 0); };
    FactorContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    FactorContext.prototype.LPAREN = function () { return this.tryGetToken(mumathParser.LPAREN, 0); };
    FactorContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    FactorContext.prototype.RPAREN = function () { return this.tryGetToken(mumathParser.RPAREN, 0); };
    FactorContext.prototype.functionDesignator = function () {
        return this.tryGetRuleContext(0, FunctionDesignatorContext);
    };
    FactorContext.prototype.NOT = function () { return this.tryGetToken(mumathParser.NOT, 0); };
    FactorContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FactorContext.prototype.enterRule = function (listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.exitRule = function (listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.accept = function (visitor) {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FactorContext = FactorContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.NUMBER = function () { return this.tryGetToken(mumathParser.NUMBER, 0); };
    ConstantContext.prototype.STRING = function () { return this.tryGetToken(mumathParser.STRING, 0); };
    ConstantContext.prototype.QUOTE = function () { return this.tryGetToken(mumathParser.QUOTE, 0); };
    ConstantContext.prototype.ID = function () { return this.tryGetToken(mumathParser.ID, 0); };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantContext = ConstantContext;
var FunctionDesignatorContext = /** @class */ (function (_super) {
    __extends(FunctionDesignatorContext, _super);
    function FunctionDesignatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDesignatorContext.prototype.ID = function () { return this.getToken(mumathParser.ID, 0); };
    FunctionDesignatorContext.prototype.LPAREN = function () { return this.getToken(mumathParser.LPAREN, 0); };
    FunctionDesignatorContext.prototype.RPAREN = function () { return this.getToken(mumathParser.RPAREN, 0); };
    FunctionDesignatorContext.prototype.actualParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ActualParameterContext);
        }
        else {
            return this.getRuleContext(i, ActualParameterContext);
        }
    };
    FunctionDesignatorContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mumathParser.COMMA);
        }
        else {
            return this.getToken(mumathParser.COMMA, i);
        }
    };
    Object.defineProperty(FunctionDesignatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_functionDesignator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDesignatorContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDesignator) {
            listener.enterFunctionDesignator(this);
        }
    };
    // @Override
    FunctionDesignatorContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDesignator) {
            listener.exitFunctionDesignator(this);
        }
    };
    // @Override
    FunctionDesignatorContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDesignator) {
            return visitor.visitFunctionDesignator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDesignatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDesignatorContext = FunctionDesignatorContext;
var EqualContext = /** @class */ (function (_super) {
    __extends(EqualContext, _super);
    function EqualContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualContext.prototype.EQF = function () { return this.tryGetToken(mumathParser.EQF, 0); };
    EqualContext.prototype.EQC = function () { return this.tryGetToken(mumathParser.EQC, 0); };
    Object.defineProperty(EqualContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mumathParser.RULE_equal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualContext.prototype.enterRule = function (listener) {
        if (listener.enterEqual) {
            listener.enterEqual(this);
        }
    };
    // @Override
    EqualContext.prototype.exitRule = function (listener) {
        if (listener.exitEqual) {
            listener.exitEqual(this);
        }
    };
    // @Override
    EqualContext.prototype.accept = function (visitor) {
        if (visitor.visitEqual) {
            return visitor.visitEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualContext = EqualContext;
