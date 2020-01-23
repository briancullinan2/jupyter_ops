"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smalltalk/Smalltalk.g4 by ANTLR 4.7.3-SNAPSHOT
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
var SmalltalkParser = /** @class */ (function (_super) {
    __extends(SmalltalkParser, _super);
    function SmalltalkParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SmalltalkParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SmalltalkParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SmalltalkParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmalltalkParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Smalltalk.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmalltalkParser.prototype, "ruleNames", {
        // @Override
        get: function () { return SmalltalkParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmalltalkParser.prototype, "serializedATN", {
        // @Override
        get: function () { return SmalltalkParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SmalltalkParser.prototype.script = function () {
        var _localctx = new ScriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SmalltalkParser.RULE_script);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.sequence();
                this.state = 97;
                this.match(SmalltalkParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.sequence = function () {
        var _localctx = new SequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SmalltalkParser.RULE_sequence);
        var _la;
        try {
            this.state = 110;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmalltalkParser.PIPE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 99;
                        this.temps();
                        this.state = 101;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                            {
                                this.state = 100;
                                this.ws();
                            }
                        }
                        this.state = 104;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.CARROT - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
                            {
                                this.state = 103;
                                this.statements();
                            }
                        }
                    }
                    break;
                case SmalltalkParser.SEPARATOR:
                case SmalltalkParser.STRING:
                case SmalltalkParser.COMMENT:
                case SmalltalkParser.BLOCK_START:
                case SmalltalkParser.OPEN_PAREN:
                case SmalltalkParser.LT:
                case SmalltalkParser.MINUS:
                case SmalltalkParser.RESERVED_WORD:
                case SmalltalkParser.IDENTIFIER:
                case SmalltalkParser.CARROT:
                case SmalltalkParser.HASH:
                case SmalltalkParser.HEX:
                case SmalltalkParser.LITARR_START:
                case SmalltalkParser.DYNDICT_START:
                case SmalltalkParser.DYNARR_START:
                case SmalltalkParser.DIGIT:
                case SmalltalkParser.CHARACTER_CONSTANT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 107;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                            {
                                this.state = 106;
                                this.ws();
                            }
                        }
                        this.state = 109;
                        this.statements();
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
    SmalltalkParser.prototype.ws = function () {
        var _localctx = new WsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SmalltalkParser.RULE_ws);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 112;
                                    _la = this._input.LA(1);
                                    if (!(_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT)) {
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
                    this.state = 115;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
    SmalltalkParser.prototype.temps = function () {
        var _localctx = new TempsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SmalltalkParser.RULE_temps);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(SmalltalkParser.PIPE);
                this.state = 122;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 119;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                                        {
                                            this.state = 118;
                                            this.ws();
                                        }
                                    }
                                    this.state = 121;
                                    this.match(SmalltalkParser.IDENTIFIER);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 124;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 126;
                        this.ws();
                    }
                }
                this.state = 129;
                this.match(SmalltalkParser.PIPE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.statements = function () {
        var _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SmalltalkParser.RULE_statements);
        var _la;
        try {
            this.state = 152;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    _localctx = new StatementAnswerContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 131;
                        this.answer();
                        this.state = 133;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                            {
                                this.state = 132;
                                this.ws();
                            }
                        }
                    }
                    break;
                case 2:
                    _localctx = new StatementExpressionsAnswerContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 135;
                        this.expressions();
                        this.state = 137;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                            {
                                this.state = 136;
                                this.ws();
                            }
                        }
                        this.state = 139;
                        this.match(SmalltalkParser.PERIOD);
                        this.state = 141;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                            {
                                this.state = 140;
                                this.ws();
                            }
                        }
                        this.state = 143;
                        this.answer();
                    }
                    break;
                case 3:
                    _localctx = new StatementExpressionsContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 145;
                        this.expressions();
                        this.state = 147;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SmalltalkParser.PERIOD) {
                            {
                                this.state = 146;
                                this.match(SmalltalkParser.PERIOD);
                            }
                        }
                        this.state = 150;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                            {
                                this.state = 149;
                                this.ws();
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
    SmalltalkParser.prototype.answer = function () {
        var _localctx = new AnswerContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SmalltalkParser.RULE_answer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(SmalltalkParser.CARROT);
                this.state = 156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 155;
                        this.ws();
                    }
                }
                this.state = 158;
                this.expression();
                this.state = 160;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 159;
                            this.ws();
                        }
                        break;
                }
                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.PERIOD) {
                    {
                        this.state = 162;
                        this.match(SmalltalkParser.PERIOD);
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
    SmalltalkParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SmalltalkParser.RULE_expression);
        try {
            this.state = 170;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 165;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 166;
                        this.cascade();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 167;
                        this.keywordSend();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 168;
                        this.binarySend();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 169;
                        this.primitive();
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
    SmalltalkParser.prototype.expressions = function () {
        var _localctx = new ExpressionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SmalltalkParser.RULE_expressions);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.expression();
                this.state = 176;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 173;
                                this.expressionList();
                            }
                        }
                    }
                    this.state = 178;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
    SmalltalkParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SmalltalkParser.RULE_expressionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.match(SmalltalkParser.PERIOD);
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 180;
                        this.ws();
                    }
                }
                this.state = 183;
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
    SmalltalkParser.prototype.cascade = function () {
        var _localctx = new CascadeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SmalltalkParser.RULE_cascade);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 185;
                            this.keywordSend();
                        }
                        break;
                    case 2:
                        {
                            this.state = 186;
                            this.binarySend();
                        }
                        break;
                }
                this.state = 197;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 190;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                                        {
                                            this.state = 189;
                                            this.ws();
                                        }
                                    }
                                    this.state = 192;
                                    this.match(SmalltalkParser.SEMI_COLON);
                                    this.state = 194;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 193;
                                                this.ws();
                                            }
                                            break;
                                    }
                                    this.state = 196;
                                    this.message();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 199;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
    SmalltalkParser.prototype.message = function () {
        var _localctx = new MessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SmalltalkParser.RULE_message);
        try {
            this.state = 204;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 201;
                        this.binaryMessage();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 202;
                        this.unaryMessage();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 203;
                        this.keywordMessage();
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
    SmalltalkParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SmalltalkParser.RULE_assignment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.variable();
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 207;
                        this.ws();
                    }
                }
                this.state = 210;
                this.match(SmalltalkParser.ASSIGNMENT);
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 211;
                        this.ws();
                    }
                }
                this.state = 214;
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
    SmalltalkParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SmalltalkParser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(SmalltalkParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.binarySend = function () {
        var _localctx = new BinarySendContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SmalltalkParser.RULE_binarySend);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.unarySend();
                this.state = 220;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 219;
                            this.binaryTail();
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
    SmalltalkParser.prototype.unarySend = function () {
        var _localctx = new UnarySendContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SmalltalkParser.RULE_unarySend);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.operand();
                this.state = 224;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 223;
                            this.ws();
                        }
                        break;
                }
                this.state = 227;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 226;
                            this.unaryTail();
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
    SmalltalkParser.prototype.keywordSend = function () {
        var _localctx = new KeywordSendContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SmalltalkParser.RULE_keywordSend);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.binarySend();
                this.state = 230;
                this.keywordMessage();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.keywordMessage = function () {
        var _localctx = new KeywordMessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SmalltalkParser.RULE_keywordMessage);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 233;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 232;
                        this.ws();
                    }
                }
                this.state = 239;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 235;
                            this.keywordPair();
                            this.state = 237;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 236;
                                        this.ws();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 241;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SmalltalkParser.KEYWORD);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.keywordPair = function () {
        var _localctx = new KeywordPairContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, SmalltalkParser.RULE_keywordPair);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                this.match(SmalltalkParser.KEYWORD);
                this.state = 245;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 244;
                        this.ws();
                    }
                }
                this.state = 247;
                this.binarySend();
                this.state = 249;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                    case 1:
                        {
                            this.state = 248;
                            this.ws();
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
    SmalltalkParser.prototype.operand = function () {
        var _localctx = new OperandContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, SmalltalkParser.RULE_operand);
        try {
            this.state = 254;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmalltalkParser.STRING:
                case SmalltalkParser.BLOCK_START:
                case SmalltalkParser.MINUS:
                case SmalltalkParser.RESERVED_WORD:
                case SmalltalkParser.HASH:
                case SmalltalkParser.HEX:
                case SmalltalkParser.LITARR_START:
                case SmalltalkParser.DYNDICT_START:
                case SmalltalkParser.DYNARR_START:
                case SmalltalkParser.DIGIT:
                case SmalltalkParser.CHARACTER_CONSTANT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 251;
                        this.literal();
                    }
                    break;
                case SmalltalkParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 252;
                        this.reference();
                    }
                    break;
                case SmalltalkParser.OPEN_PAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 253;
                        this.subexpression();
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
    SmalltalkParser.prototype.subexpression = function () {
        var _localctx = new SubexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, SmalltalkParser.RULE_subexpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                this.match(SmalltalkParser.OPEN_PAREN);
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 257;
                        this.ws();
                    }
                }
                this.state = 260;
                this.expression();
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 261;
                        this.ws();
                    }
                }
                this.state = 264;
                this.match(SmalltalkParser.CLOSE_PAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, SmalltalkParser.RULE_literal);
        try {
            this.state = 268;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmalltalkParser.BLOCK_START:
                case SmalltalkParser.DYNDICT_START:
                case SmalltalkParser.DYNARR_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 266;
                        this.runtimeLiteral();
                    }
                    break;
                case SmalltalkParser.STRING:
                case SmalltalkParser.MINUS:
                case SmalltalkParser.RESERVED_WORD:
                case SmalltalkParser.HASH:
                case SmalltalkParser.HEX:
                case SmalltalkParser.LITARR_START:
                case SmalltalkParser.DIGIT:
                case SmalltalkParser.CHARACTER_CONSTANT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 267;
                        this.parsetimeLiteral();
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
    SmalltalkParser.prototype.runtimeLiteral = function () {
        var _localctx = new RuntimeLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, SmalltalkParser.RULE_runtimeLiteral);
        try {
            this.state = 273;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmalltalkParser.DYNDICT_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 270;
                        this.dynamicDictionary();
                    }
                    break;
                case SmalltalkParser.DYNARR_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 271;
                        this.dynamicArray();
                    }
                    break;
                case SmalltalkParser.BLOCK_START:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 272;
                        this.block();
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
    SmalltalkParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SmalltalkParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.match(SmalltalkParser.BLOCK_START);
                this.state = 277;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            this.state = 276;
                            this.blockParamList();
                        }
                        break;
                }
                this.state = 280;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 279;
                            this.ws();
                        }
                        break;
                }
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (SmalltalkParser.SEPARATOR - 1)) | (1 << (SmalltalkParser.STRING - 1)) | (1 << (SmalltalkParser.COMMENT - 1)) | (1 << (SmalltalkParser.BLOCK_START - 1)) | (1 << (SmalltalkParser.OPEN_PAREN - 1)) | (1 << (SmalltalkParser.PIPE - 1)) | (1 << (SmalltalkParser.LT - 1)) | (1 << (SmalltalkParser.MINUS - 1)) | (1 << (SmalltalkParser.RESERVED_WORD - 1)) | (1 << (SmalltalkParser.IDENTIFIER - 1)) | (1 << (SmalltalkParser.CARROT - 1)) | (1 << (SmalltalkParser.HASH - 1)) | (1 << (SmalltalkParser.HEX - 1)) | (1 << (SmalltalkParser.LITARR_START - 1)) | (1 << (SmalltalkParser.DYNDICT_START - 1)) | (1 << (SmalltalkParser.DYNARR_START - 1)) | (1 << (SmalltalkParser.DIGIT - 1)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 1)))) !== 0)) {
                    {
                        this.state = 282;
                        this.sequence();
                    }
                }
                this.state = 285;
                this.match(SmalltalkParser.BLOCK_END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.blockParamList = function () {
        var _localctx = new BlockParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SmalltalkParser.RULE_blockParamList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 288;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                                        {
                                            this.state = 287;
                                            this.ws();
                                        }
                                    }
                                    this.state = 290;
                                    this.match(SmalltalkParser.BLOCK_PARAM);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 293;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
    SmalltalkParser.prototype.dynamicDictionary = function () {
        var _localctx = new DynamicDictionaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SmalltalkParser.RULE_dynamicDictionary);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 295;
                this.match(SmalltalkParser.DYNDICT_START);
                this.state = 297;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                    case 1:
                        {
                            this.state = 296;
                            this.ws();
                        }
                        break;
                }
                this.state = 300;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
                    {
                        this.state = 299;
                        this.expressions();
                    }
                }
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 302;
                        this.ws();
                    }
                }
                this.state = 305;
                this.match(SmalltalkParser.DYNARR_END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.dynamicArray = function () {
        var _localctx = new DynamicArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, SmalltalkParser.RULE_dynamicArray);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(SmalltalkParser.DYNARR_START);
                this.state = 309;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 308;
                            this.ws();
                        }
                        break;
                }
                this.state = 312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
                    {
                        this.state = 311;
                        this.expressions();
                    }
                }
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 314;
                        this.ws();
                    }
                }
                this.state = 317;
                this.match(SmalltalkParser.DYNARR_END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.parsetimeLiteral = function () {
        var _localctx = new ParsetimeLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SmalltalkParser.RULE_parsetimeLiteral);
        try {
            this.state = 325;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmalltalkParser.RESERVED_WORD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 319;
                        this.pseudoVariable();
                    }
                    break;
                case SmalltalkParser.MINUS:
                case SmalltalkParser.HEX:
                case SmalltalkParser.DIGIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 320;
                        this.number();
                    }
                    break;
                case SmalltalkParser.CHARACTER_CONSTANT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 321;
                        this.charConstant();
                    }
                    break;
                case SmalltalkParser.LITARR_START:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 322;
                        this.literalArray();
                    }
                    break;
                case SmalltalkParser.STRING:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 323;
                        this.string();
                    }
                    break;
                case SmalltalkParser.HASH:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 324;
                        this.symbol();
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
    SmalltalkParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SmalltalkParser.RULE_number);
        try {
            this.state = 331;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 327;
                        this.numberExp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 328;
                        this.hex();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 329;
                        this.stFloat();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 330;
                        this.stInteger();
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
    SmalltalkParser.prototype.numberExp = function () {
        var _localctx = new NumberExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SmalltalkParser.RULE_numberExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                    case 1:
                        {
                            this.state = 333;
                            this.stFloat();
                        }
                        break;
                    case 2:
                        {
                            this.state = 334;
                            this.stInteger();
                        }
                        break;
                }
                this.state = 337;
                this.match(SmalltalkParser.EXP);
                this.state = 338;
                this.stInteger();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.charConstant = function () {
        var _localctx = new CharConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SmalltalkParser.RULE_charConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this.match(SmalltalkParser.CHARACTER_CONSTANT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.hex = function () {
        var _localctx = new HexContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SmalltalkParser.RULE_hex);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.MINUS) {
                    {
                        this.state = 342;
                        this.match(SmalltalkParser.MINUS);
                    }
                }
                this.state = 345;
                this.match(SmalltalkParser.HEX);
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 346;
                            this.match(SmalltalkParser.HEXDIGIT);
                        }
                    }
                    this.state = 349;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SmalltalkParser.HEXDIGIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.stInteger = function () {
        var _localctx = new StIntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, SmalltalkParser.RULE_stInteger);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.MINUS) {
                    {
                        this.state = 351;
                        this.match(SmalltalkParser.MINUS);
                    }
                }
                this.state = 355;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 354;
                                    this.match(SmalltalkParser.DIGIT);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 357;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
    SmalltalkParser.prototype.stFloat = function () {
        var _localctx = new StFloatContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, SmalltalkParser.RULE_stFloat);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.MINUS) {
                    {
                        this.state = 359;
                        this.match(SmalltalkParser.MINUS);
                    }
                }
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 362;
                            this.match(SmalltalkParser.DIGIT);
                        }
                    }
                    this.state = 365;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SmalltalkParser.DIGIT);
                this.state = 367;
                this.match(SmalltalkParser.PERIOD);
                this.state = 369;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 368;
                                    this.match(SmalltalkParser.DIGIT);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 371;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
    SmalltalkParser.prototype.pseudoVariable = function () {
        var _localctx = new PseudoVariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, SmalltalkParser.RULE_pseudoVariable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this.match(SmalltalkParser.RESERVED_WORD);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, SmalltalkParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 375;
                this.match(SmalltalkParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, SmalltalkParser.RULE_symbol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.match(SmalltalkParser.HASH);
                this.state = 378;
                this.bareSymbol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.primitive = function () {
        var _localctx = new PrimitiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SmalltalkParser.RULE_primitive);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(SmalltalkParser.LT);
                this.state = 382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 381;
                        this.ws();
                    }
                }
                this.state = 384;
                this.match(SmalltalkParser.KEYWORD);
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 385;
                        this.ws();
                    }
                }
                this.state = 389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 388;
                            this.match(SmalltalkParser.DIGIT);
                        }
                    }
                    this.state = 391;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SmalltalkParser.DIGIT);
                this.state = 394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 393;
                        this.ws();
                    }
                }
                this.state = 396;
                this.match(SmalltalkParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.bareSymbol = function () {
        var _localctx = new BareSymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SmalltalkParser.RULE_bareSymbol);
        var _la;
        try {
            var _alt = void 0;
            this.state = 405;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmalltalkParser.BINARY_SELECTOR:
                case SmalltalkParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 398;
                        _la = this._input.LA(1);
                        if (!(_la === SmalltalkParser.BINARY_SELECTOR || _la === SmalltalkParser.IDENTIFIER)) {
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
                case SmalltalkParser.KEYWORD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 400;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 399;
                                            this.match(SmalltalkParser.KEYWORD);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 402;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case SmalltalkParser.STRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 404;
                        this.string();
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
    SmalltalkParser.prototype.literalArray = function () {
        var _localctx = new LiteralArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SmalltalkParser.RULE_literalArray);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 407;
                this.match(SmalltalkParser.LITARR_START);
                this.state = 408;
                this.literalArrayRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.literalArrayRest = function () {
        var _localctx = new LiteralArrayRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, SmalltalkParser.RULE_literalArrayRest);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 410;
                        this.ws();
                    }
                }
                this.state = 423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.BINARY_SELECTOR - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.KEYWORD - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
                    {
                        {
                            this.state = 416;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 413;
                                        this.parsetimeLiteral();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 414;
                                        this.bareLiteralArray();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 415;
                                        this.bareSymbol();
                                    }
                                    break;
                            }
                            this.state = 419;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                                {
                                    this.state = 418;
                                    this.ws();
                                }
                            }
                        }
                    }
                    this.state = 425;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 426;
                this.match(SmalltalkParser.CLOSE_PAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.bareLiteralArray = function () {
        var _localctx = new BareLiteralArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SmalltalkParser.RULE_bareLiteralArray);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.match(SmalltalkParser.OPEN_PAREN);
                this.state = 429;
                this.literalArrayRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.unaryTail = function () {
        var _localctx = new UnaryTailContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SmalltalkParser.RULE_unaryTail);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.unaryMessage();
                this.state = 433;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                    case 1:
                        {
                            this.state = 432;
                            this.ws();
                        }
                        break;
                }
                this.state = 436;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 435;
                            this.unaryTail();
                        }
                        break;
                }
                this.state = 439;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                    case 1:
                        {
                            this.state = 438;
                            this.ws();
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
    SmalltalkParser.prototype.unaryMessage = function () {
        var _localctx = new UnaryMessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SmalltalkParser.RULE_unaryMessage);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 441;
                        this.ws();
                    }
                }
                this.state = 444;
                this.unarySelector();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.unarySelector = function () {
        var _localctx = new UnarySelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SmalltalkParser.RULE_unarySelector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this.match(SmalltalkParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.keywords = function () {
        var _localctx = new KeywordsContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, SmalltalkParser.RULE_keywords);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 448;
                            this.match(SmalltalkParser.KEYWORD);
                        }
                    }
                    this.state = 451;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SmalltalkParser.KEYWORD);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.reference = function () {
        var _localctx = new ReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SmalltalkParser.RULE_reference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
                this.variable();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SmalltalkParser.prototype.binaryTail = function () {
        var _localctx = new BinaryTailContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SmalltalkParser.RULE_binaryTail);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.binaryMessage();
                this.state = 457;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                    case 1:
                        {
                            this.state = 456;
                            this.binaryTail();
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
    SmalltalkParser.prototype.binaryMessage = function () {
        var _localctx = new BinaryMessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, SmalltalkParser.RULE_binaryMessage);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 459;
                        this.ws();
                    }
                }
                this.state = 462;
                this.match(SmalltalkParser.BINARY_SELECTOR);
                this.state = 464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
                    {
                        this.state = 463;
                        this.ws();
                    }
                }
                this.state = 468;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                    case 1:
                        {
                            this.state = 466;
                            this.unarySend();
                        }
                        break;
                    case 2:
                        {
                            this.state = 467;
                            this.operand();
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
    Object.defineProperty(SmalltalkParser, "_ATN", {
        get: function () {
            if (!SmalltalkParser.__ATN) {
                SmalltalkParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SmalltalkParser._serializedATN));
            }
            return SmalltalkParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SmalltalkParser.SEPARATOR = 1;
    SmalltalkParser.STRING = 2;
    SmalltalkParser.COMMENT = 3;
    SmalltalkParser.BLOCK_START = 4;
    SmalltalkParser.BLOCK_END = 5;
    SmalltalkParser.CLOSE_PAREN = 6;
    SmalltalkParser.OPEN_PAREN = 7;
    SmalltalkParser.PIPE = 8;
    SmalltalkParser.PERIOD = 9;
    SmalltalkParser.SEMI_COLON = 10;
    SmalltalkParser.BINARY_SELECTOR = 11;
    SmalltalkParser.LT = 12;
    SmalltalkParser.GT = 13;
    SmalltalkParser.MINUS = 14;
    SmalltalkParser.RESERVED_WORD = 15;
    SmalltalkParser.IDENTIFIER = 16;
    SmalltalkParser.CARROT = 17;
    SmalltalkParser.COLON = 18;
    SmalltalkParser.ASSIGNMENT = 19;
    SmalltalkParser.HASH = 20;
    SmalltalkParser.DOLLAR = 21;
    SmalltalkParser.EXP = 22;
    SmalltalkParser.HEX = 23;
    SmalltalkParser.LITARR_START = 24;
    SmalltalkParser.DYNDICT_START = 25;
    SmalltalkParser.DYNARR_END = 26;
    SmalltalkParser.DYNARR_START = 27;
    SmalltalkParser.DIGIT = 28;
    SmalltalkParser.HEXDIGIT = 29;
    SmalltalkParser.KEYWORD = 30;
    SmalltalkParser.BLOCK_PARAM = 31;
    SmalltalkParser.CHARACTER_CONSTANT = 32;
    SmalltalkParser.RULE_script = 0;
    SmalltalkParser.RULE_sequence = 1;
    SmalltalkParser.RULE_ws = 2;
    SmalltalkParser.RULE_temps = 3;
    SmalltalkParser.RULE_statements = 4;
    SmalltalkParser.RULE_answer = 5;
    SmalltalkParser.RULE_expression = 6;
    SmalltalkParser.RULE_expressions = 7;
    SmalltalkParser.RULE_expressionList = 8;
    SmalltalkParser.RULE_cascade = 9;
    SmalltalkParser.RULE_message = 10;
    SmalltalkParser.RULE_assignment = 11;
    SmalltalkParser.RULE_variable = 12;
    SmalltalkParser.RULE_binarySend = 13;
    SmalltalkParser.RULE_unarySend = 14;
    SmalltalkParser.RULE_keywordSend = 15;
    SmalltalkParser.RULE_keywordMessage = 16;
    SmalltalkParser.RULE_keywordPair = 17;
    SmalltalkParser.RULE_operand = 18;
    SmalltalkParser.RULE_subexpression = 19;
    SmalltalkParser.RULE_literal = 20;
    SmalltalkParser.RULE_runtimeLiteral = 21;
    SmalltalkParser.RULE_block = 22;
    SmalltalkParser.RULE_blockParamList = 23;
    SmalltalkParser.RULE_dynamicDictionary = 24;
    SmalltalkParser.RULE_dynamicArray = 25;
    SmalltalkParser.RULE_parsetimeLiteral = 26;
    SmalltalkParser.RULE_number = 27;
    SmalltalkParser.RULE_numberExp = 28;
    SmalltalkParser.RULE_charConstant = 29;
    SmalltalkParser.RULE_hex = 30;
    SmalltalkParser.RULE_stInteger = 31;
    SmalltalkParser.RULE_stFloat = 32;
    SmalltalkParser.RULE_pseudoVariable = 33;
    SmalltalkParser.RULE_string = 34;
    SmalltalkParser.RULE_symbol = 35;
    SmalltalkParser.RULE_primitive = 36;
    SmalltalkParser.RULE_bareSymbol = 37;
    SmalltalkParser.RULE_literalArray = 38;
    SmalltalkParser.RULE_literalArrayRest = 39;
    SmalltalkParser.RULE_bareLiteralArray = 40;
    SmalltalkParser.RULE_unaryTail = 41;
    SmalltalkParser.RULE_unaryMessage = 42;
    SmalltalkParser.RULE_unarySelector = 43;
    SmalltalkParser.RULE_keywords = 44;
    SmalltalkParser.RULE_reference = 45;
    SmalltalkParser.RULE_binaryTail = 46;
    SmalltalkParser.RULE_binaryMessage = 47;
    // tslint:disable:no-trailing-whitespace
    SmalltalkParser.ruleNames = [
        "script", "sequence", "ws", "temps", "statements", "answer", "expression",
        "expressions", "expressionList", "cascade", "message", "assignment", "variable",
        "binarySend", "unarySend", "keywordSend", "keywordMessage", "keywordPair",
        "operand", "subexpression", "literal", "runtimeLiteral", "block", "blockParamList",
        "dynamicDictionary", "dynamicArray", "parsetimeLiteral", "number", "numberExp",
        "charConstant", "hex", "stInteger", "stFloat", "pseudoVariable", "string",
        "symbol", "primitive", "bareSymbol", "literalArray", "literalArrayRest",
        "bareLiteralArray", "unaryTail", "unaryMessage", "unarySelector", "keywords",
        "reference", "binaryTail", "binaryMessage",
    ];
    SmalltalkParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, "'['", "']'", "')'", "'('",
        "'|'", "'.'", "';'", undefined, "'<'", "'>'", "'-'", undefined, undefined,
        "'^'", "':'", "':='", "'#'", "'$'", "'e'", "'16r'", "'#('", "'#{'", "'}'",
        "'{'",
    ];
    SmalltalkParser._SYMBOLIC_NAMES = [
        undefined, "SEPARATOR", "STRING", "COMMENT", "BLOCK_START", "BLOCK_END",
        "CLOSE_PAREN", "OPEN_PAREN", "PIPE", "PERIOD", "SEMI_COLON", "BINARY_SELECTOR",
        "LT", "GT", "MINUS", "RESERVED_WORD", "IDENTIFIER", "CARROT", "COLON",
        "ASSIGNMENT", "HASH", "DOLLAR", "EXP", "HEX", "LITARR_START", "DYNDICT_START",
        "DYNARR_END", "DYNARR_START", "DIGIT", "HEXDIGIT", "KEYWORD", "BLOCK_PARAM",
        "CHARACTER_CONSTANT",
    ];
    SmalltalkParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmalltalkParser._LITERAL_NAMES, SmalltalkParser._SYMBOLIC_NAMES, []);
    SmalltalkParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u01D9\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x05\x03h\n\x03\x03\x03\x05\x03k\n\x03\x03\x03\x05\x03" +
        "n\n\x03\x03\x03\x05\x03q\n\x03\x03\x04\x06\x04t\n\x04\r\x04\x0E\x04u\x03" +
        "\x05\x03\x05\x05\x05z\n\x05\x03\x05\x06\x05}\n\x05\r\x05\x0E\x05~\x03" +
        "\x05\x05\x05\x82\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\x88\n\x06" +
        "\x03\x06\x03\x06\x05\x06\x8C\n\x06\x03\x06\x03\x06\x05\x06\x90\n\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x05\x06\x96\n\x06\x03\x06\x05\x06\x99\n\x06" +
        "\x05\x06\x9B\n\x06\x03\x07\x03\x07\x05\x07\x9F\n\x07\x03\x07\x03\x07\x05" +
        "\x07\xA3\n\x07\x03\x07\x05\x07\xA6\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
        "\x05\b\xAD\n\b\x03\t\x03\t\x07\t\xB1\n\t\f\t\x0E\t\xB4\v\t\x03\n\x03\n" +
        "\x05\n\xB8\n\n\x03\n\x03\n\x03\v\x03\v\x05\v\xBE\n\v\x03\v\x05\v\xC1\n" +
        "\v\x03\v\x03\v\x05\v\xC5\n\v\x03\v\x06\v\xC8\n\v\r\v\x0E\v\xC9\x03\f\x03" +
        "\f\x03\f\x05\f\xCF\n\f\x03\r\x03\r\x05\r\xD3\n\r\x03\r\x03\r\x05\r\xD7" +
        "\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xDF\n\x0F\x03" +
        "\x10\x03\x10\x05\x10\xE3\n\x10\x03\x10\x05\x10\xE6\n\x10\x03\x11\x03\x11" +
        "\x03\x11\x03\x12\x05\x12\xEC\n\x12\x03\x12\x03\x12\x05\x12\xF0\n\x12\x06" +
        "\x12\xF2\n\x12\r\x12\x0E\x12\xF3\x03\x13\x03\x13\x05\x13\xF8\n\x13\x03" +
        "\x13\x03\x13\x05\x13\xFC\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\u0101\n" +
        "\x14\x03\x15\x03\x15\x05\x15\u0105\n\x15\x03\x15\x03\x15\x05\x15\u0109" +
        "\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u010F\n\x16\x03\x17\x03" +
        "\x17\x03\x17\x05\x17\u0114\n\x17\x03\x18\x03\x18\x05\x18\u0118\n\x18\x03" +
        "\x18\x05\x18\u011B\n\x18\x03\x18\x05\x18\u011E\n\x18\x03\x18\x03\x18\x03" +
        "\x19\x05\x19\u0123\n\x19\x03\x19\x06\x19\u0126\n\x19\r\x19\x0E\x19\u0127" +
        "\x03\x1A\x03\x1A\x05\x1A\u012C\n\x1A\x03\x1A\x05\x1A\u012F\n\x1A\x03\x1A" +
        "\x05\x1A\u0132\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0138\n\x1B" +
        "\x03\x1B\x05\x1B\u013B\n\x1B\x03\x1B\x05\x1B\u013E\n\x1B\x03\x1B\x03\x1B" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0148\n\x1C\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u014E\n\x1D\x03\x1E\x03\x1E\x05\x1E" +
        "\u0152\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x05 \u015A\n" +
        " \x03 \x03 \x06 \u015E\n \r \x0E \u015F\x03!\x05!\u0163\n!\x03!\x06!\u0166" +
        "\n!\r!\x0E!\u0167\x03\"\x05\"\u016B\n\"\x03\"\x06\"\u016E\n\"\r\"\x0E" +
        "\"\u016F\x03\"\x03\"\x06\"\u0174\n\"\r\"\x0E\"\u0175\x03#\x03#\x03$\x03" +
        "$\x03%\x03%\x03%\x03&\x03&\x05&\u0181\n&\x03&\x03&\x05&\u0185\n&\x03&" +
        "\x06&\u0188\n&\r&\x0E&\u0189\x03&\x05&\u018D\n&\x03&\x03&\x03\'\x03\'" +
        "\x06\'\u0193\n\'\r\'\x0E\'\u0194\x03\'\x05\'\u0198\n\'\x03(\x03(\x03(" +
        "\x03)\x05)\u019E\n)\x03)\x03)\x03)\x05)\u01A3\n)\x03)\x05)\u01A6\n)\x07" +
        ")\u01A8\n)\f)\x0E)\u01AB\v)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x05+\u01B4" +
        "\n+\x03+\x05+\u01B7\n+\x03+\x05+\u01BA\n+\x03,\x05,\u01BD\n,\x03,\x03" +
        ",\x03-\x03-\x03.\x06.\u01C4\n.\r.\x0E.\u01C5\x03/\x03/\x030\x030\x050" +
        "\u01CC\n0\x031\x051\u01CF\n1\x031\x031\x051\u01D3\n1\x031\x031\x051\u01D7" +
        "\n1\x031\x02\x02\x022\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
        ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
        "Z\x02\\\x02^\x02`\x02\x02\x04\x04\x02\x03\x03\x05\x05\x04\x02\r\r\x12" +
        "\x12\x02\u0207\x02b\x03\x02\x02\x02\x04p\x03\x02\x02\x02\x06s\x03\x02" +
        "\x02\x02\bw\x03\x02\x02\x02\n\x9A\x03\x02\x02\x02\f\x9C\x03\x02\x02\x02" +
        "\x0E\xAC\x03\x02\x02\x02\x10\xAE\x03\x02\x02\x02\x12\xB5\x03\x02\x02\x02" +
        "\x14\xBD\x03\x02\x02\x02\x16\xCE\x03\x02\x02\x02\x18\xD0\x03\x02\x02\x02" +
        "\x1A\xDA\x03\x02\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xE0\x03\x02\x02\x02" +
        " \xE7\x03\x02\x02\x02\"\xEB\x03\x02\x02\x02$\xF5\x03\x02\x02\x02&\u0100" +
        "\x03\x02\x02\x02(\u0102\x03\x02\x02\x02*\u010E\x03\x02\x02\x02,\u0113" +
        "\x03\x02\x02\x02.\u0115\x03\x02\x02\x020\u0125\x03\x02\x02\x022\u0129" +
        "\x03\x02\x02\x024\u0135\x03\x02\x02\x026\u0147\x03\x02\x02\x028\u014D" +
        "\x03\x02\x02\x02:\u0151\x03\x02\x02\x02<\u0156\x03\x02\x02\x02>\u0159" +
        "\x03\x02\x02\x02@\u0162\x03\x02\x02\x02B\u016A\x03\x02\x02\x02D\u0177" +
        "\x03\x02\x02\x02F\u0179\x03\x02\x02\x02H\u017B\x03\x02\x02\x02J\u017E" +
        "\x03\x02\x02\x02L\u0197\x03\x02\x02\x02N\u0199\x03\x02\x02\x02P\u019D" +
        "\x03\x02\x02\x02R\u01AE\x03\x02\x02\x02T\u01B1\x03\x02\x02\x02V\u01BC" +
        "\x03\x02\x02\x02X\u01C0\x03\x02\x02\x02Z\u01C3\x03\x02\x02\x02\\\u01C7" +
        "\x03\x02\x02\x02^\u01C9\x03\x02\x02\x02`\u01CE\x03\x02\x02\x02bc\x05\x04" +
        "\x03\x02cd\x07\x02\x02\x03d\x03\x03\x02\x02\x02eg\x05\b\x05\x02fh\x05" +
        "\x06\x04\x02gf\x03\x02\x02\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ik\x05" +
        "\n\x06\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02kq\x03\x02\x02\x02ln\x05" +
        "\x06\x04\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02\x02oq\x05" +
        "\n\x06\x02pe\x03\x02\x02\x02pm\x03\x02\x02\x02q\x05\x03\x02\x02\x02rt" +
        "\t\x02\x02\x02sr\x03\x02\x02\x02tu\x03\x02\x02\x02us\x03\x02\x02\x02u" +
        "v\x03\x02\x02\x02v\x07\x03\x02\x02\x02w|\x07\n\x02\x02xz\x05\x06\x04\x02" +
        "yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x07\x12\x02\x02" +
        "|y\x03\x02\x02\x02}~\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02" +
        "\x02\x7F\x81\x03\x02\x02\x02\x80\x82\x05\x06\x04\x02\x81\x80\x03\x02\x02" +
        "\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x07\n\x02" +
        "\x02\x84\t\x03\x02\x02\x02\x85\x87\x05\f\x07\x02\x86\x88\x05\x06\x04\x02" +
        "\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x9B\x03\x02\x02\x02" +
        "\x89\x8B\x05\x10\t\x02\x8A\x8C\x05\x06\x04\x02\x8B\x8A\x03\x02\x02\x02" +
        "\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x07\v\x02\x02" +
        "\x8E\x90\x05\x06\x04\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02" +
        "\x90\x91\x03\x02\x02\x02\x91\x92\x05\f\x07\x02\x92\x9B\x03\x02\x02\x02" +
        "\x93\x95\x05\x10\t\x02\x94\x96\x07\v\x02\x02\x95\x94\x03\x02\x02\x02\x95" +
        "\x96\x03\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x99\x05\x06\x04\x02\x98" +
        "\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A" +
        "\x85\x03\x02\x02\x02\x9A\x89\x03\x02\x02\x02\x9A\x93\x03\x02\x02\x02\x9B" +
        "\v\x03\x02\x02\x02\x9C\x9E\x07\x13\x02\x02\x9D\x9F\x05\x06\x04\x02\x9E" +
        "\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0" +
        "\xA2\x05\x0E\b\x02\xA1\xA3\x05\x06\x04\x02\xA2\xA1\x03\x02\x02\x02\xA2" +
        "\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA6\x07\v\x02\x02\xA5" +
        "\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\r\x03\x02\x02\x02\xA7" +
        "\xAD\x05\x18\r\x02\xA8\xAD\x05\x14\v\x02\xA9\xAD\x05 \x11\x02\xAA\xAD" +
        "\x05\x1C\x0F\x02\xAB\xAD\x05J&\x02\xAC\xA7\x03\x02\x02\x02\xAC\xA8\x03" +
        "\x02\x02\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAB\x03" +
        "\x02\x02\x02\xAD\x0F\x03\x02\x02\x02\xAE\xB2\x05\x0E\b\x02\xAF\xB1\x05" +
        "\x12\n\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03" +
        "\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\x11\x03\x02\x02\x02\xB4\xB2\x03" +
        "\x02\x02\x02\xB5\xB7\x07\v\x02\x02\xB6\xB8\x05\x06\x04\x02\xB7\xB6\x03" +
        "\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x05" +
        "\x0E\b\x02\xBA\x13\x03\x02\x02\x02\xBB\xBE\x05 \x11\x02\xBC\xBE\x05\x1C" +
        "\x0F\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC7\x03\x02" +
        "\x02\x02\xBF\xC1\x05\x06\x04\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02" +
        "\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x07\f\x02\x02\xC3\xC5\x05\x06" +
        "\x04\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02" +
        "\x02\x02\xC6\xC8\x05\x16\f\x02\xC7\xC0\x03\x02\x02\x02\xC8\xC9\x03\x02" +
        "\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\x15\x03\x02" +
        "\x02\x02\xCB\xCF\x05`1\x02\xCC\xCF\x05V,\x02\xCD\xCF\x05\"\x12\x02\xCE" +
        "\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF" +
        "\x17\x03\x02\x02\x02\xD0\xD2\x05\x1A\x0E\x02\xD1\xD3\x05\x06\x04\x02\xD2" +
        "\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4" +
        "\xD6\x07\x15\x02\x02\xD5\xD7\x05\x06\x04\x02\xD6\xD5\x03\x02\x02\x02\xD6" +
        "\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x05\x0E\b\x02\xD9" +
        "\x19\x03\x02\x02\x02\xDA\xDB\x07\x12\x02\x02\xDB\x1B\x03\x02\x02\x02\xDC" +
        "\xDE\x05\x1E\x10\x02\xDD\xDF\x05^0\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF" +
        "\x03\x02\x02\x02\xDF\x1D\x03\x02\x02\x02\xE0\xE2\x05&\x14\x02\xE1\xE3" +
        "\x05\x06\x04\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5" +
        "\x03\x02\x02\x02\xE4\xE6\x05T+\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03" +
        "\x02\x02\x02\xE6\x1F\x03\x02\x02\x02\xE7\xE8\x05\x1C\x0F\x02\xE8\xE9\x05" +
        "\"\x12\x02\xE9!\x03\x02\x02\x02\xEA\xEC\x05\x06\x04\x02\xEB\xEA\x03\x02" +
        "\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xF1\x03\x02\x02\x02\xED\xEF\x05$" +
        "\x13\x02\xEE\xF0\x05\x06\x04\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02" +
        "\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xED\x03\x02\x02\x02\xF2\xF3\x03\x02" +
        "\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4#\x03\x02" +
        "\x02\x02\xF5\xF7\x07 \x02\x02\xF6\xF8\x05\x06\x04\x02\xF7\xF6\x03\x02" +
        "\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x05\x1C" +
        "\x0F\x02\xFA\xFC\x05\x06\x04\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02" +
        "\x02\x02\xFC%\x03\x02\x02\x02\xFD\u0101\x05*\x16\x02\xFE\u0101\x05\\/" +
        "\x02\xFF\u0101\x05(\x15\x02\u0100\xFD\x03\x02\x02\x02\u0100\xFE\x03\x02" +
        "\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\'\x03\x02\x02\x02\u0102\u0104" +
        "\x07\t\x02\x02\u0103\u0105\x05\x06\x04\x02\u0104\u0103\x03\x02\x02\x02" +
        "\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x05" +
        "\x0E\b\x02\u0107\u0109\x05\x06\x04\x02\u0108\u0107\x03\x02\x02\x02\u0108" +
        "\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x07\b\x02" +
        "\x02\u010B)\x03\x02\x02\x02\u010C\u010F\x05,\x17\x02\u010D\u010F\x056" +
        "\x1C\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F" +
        "+\x03\x02\x02\x02\u0110\u0114\x052\x1A\x02\u0111\u0114\x054\x1B\x02\u0112" +
        "\u0114\x05.\x18\x02\u0113\u0110\x03\x02\x02\x02\u0113\u0111\x03\x02\x02" +
        "\x02\u0113\u0112\x03\x02\x02\x02\u0114-\x03\x02\x02\x02\u0115\u0117\x07" +
        "\x06\x02\x02\u0116\u0118\x050\x19\x02\u0117\u0116\x03\x02\x02\x02\u0117" +
        "\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\u011B\x05\x06" +
        "\x04\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
        "\u011D\x03\x02\x02\x02\u011C\u011E\x05\x04\x03\x02\u011D\u011C\x03\x02" +
        "\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
        "\u0120\x07\x07\x02\x02\u0120/\x03\x02\x02\x02\u0121\u0123\x05\x06\x04" +
        "\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124" +
        "\x03\x02\x02\x02\u0124\u0126\x07!\x02\x02\u0125\u0122\x03\x02\x02\x02" +
        "\u0126\u0127\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
        "\x02\x02\x02\u01281\x03\x02\x02\x02\u0129\u012B\x07\x1B\x02\x02\u012A" +
        "\u012C\x05\x06\x04\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02" +
        "\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u012F\x05\x10\t\x02\u012E\u012D" +
        "\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02" +
        "\u0130\u0132\x05\x06\x04\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03" +
        "\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x07\x1C\x02\x02\u0134" +
        "3\x03\x02\x02\x02\u0135\u0137\x07\x1D\x02\x02\u0136\u0138\x05\x06\x04" +
        "\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A" +
        "\x03\x02\x02\x02\u0139\u013B\x05\x10\t\x02\u013A\u0139\x03\x02\x02\x02" +
        "\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013E\x05" +
        "\x06\x04\x02\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
        "\u013F\x03\x02\x02\x02\u013F\u0140\x07\x1C\x02\x02\u01405\x03\x02\x02" +
        "\x02\u0141\u0148\x05D#\x02\u0142\u0148\x058\x1D\x02\u0143\u0148\x05<\x1F" +
        "\x02\u0144\u0148\x05N(\x02\u0145\u0148\x05F$\x02\u0146\u0148\x05H%\x02" +
        "\u0147\u0141\x03\x02\x02\x02\u0147\u0142\x03\x02\x02\x02\u0147\u0143\x03" +
        "\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147" +
        "\u0146\x03\x02\x02\x02\u01487\x03\x02\x02\x02\u0149\u014E\x05:\x1E\x02" +
        "\u014A\u014E\x05> \x02\u014B\u014E\x05B\"\x02\u014C\u014E\x05@!\x02\u014D" +
        "\u0149\x03\x02\x02\x02\u014D\u014A\x03\x02\x02\x02\u014D\u014B\x03\x02" +
        "\x02\x02\u014D\u014C\x03\x02\x02\x02\u014E9\x03\x02\x02\x02\u014F\u0152" +
        "\x05B\"\x02\u0150\u0152\x05@!\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0150" +
        "\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x07\x18\x02\x02" +
        "\u0154\u0155\x05@!\x02\u0155;\x03\x02\x02\x02\u0156\u0157\x07\"\x02\x02" +
        "\u0157=\x03\x02\x02\x02\u0158\u015A\x07\x10\x02\x02\u0159\u0158\x03\x02" +
        "\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B" +
        "\u015D\x07\x19\x02\x02\u015C\u015E\x07\x1F\x02\x02\u015D\u015C\x03\x02" +
        "\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F" +
        "\u0160\x03\x02\x02\x02\u0160?\x03\x02\x02\x02\u0161\u0163\x07\x10\x02" +
        "\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165" +
        "\x03\x02\x02\x02\u0164\u0166\x07\x1E\x02\x02\u0165\u0164\x03\x02\x02\x02" +
        "\u0166\u0167\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03" +
        "\x02\x02\x02\u0168A\x03\x02\x02\x02\u0169\u016B\x07\x10\x02\x02\u016A" +
        "\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016D\x03\x02" +
        "\x02\x02\u016C\u016E\x07\x1E\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E" +
        "\u016F\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02" +
        "\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x07\v\x02\x02\u0172\u0174" +
        "\x07\x1E\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
        "\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176C\x03\x02" +
        "\x02\x02\u0177\u0178\x07\x11\x02\x02\u0178E\x03\x02\x02\x02\u0179\u017A" +
        "\x07\x04\x02\x02\u017AG\x03\x02\x02\x02\u017B\u017C\x07\x16\x02\x02\u017C" +
        "\u017D\x05L\'\x02\u017DI\x03\x02\x02\x02\u017E\u0180\x07\x0E\x02\x02\u017F" +
        "\u0181\x05\x06\x04\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02" +
        "\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0184\x07 \x02\x02\u0183\u0185" +
        "\x05\x06\x04\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02" +
        "\u0185\u0187\x03\x02\x02\x02\u0186\u0188\x07\x1E\x02\x02\u0187\u0186\x03" +
        "\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189" +
        "\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B\u018D\x05\x06" +
        "\x04\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D" +
        "\u018E\x03\x02\x02\x02\u018E\u018F\x07\x0F\x02\x02\u018FK\x03\x02\x02" +
        "\x02\u0190\u0198\t\x03\x02\x02\u0191\u0193\x07 \x02\x02\u0192\u0191\x03" +
        "\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194" +
        "\u0195\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0198\x05F$\x02" +
        "\u0197\u0190\x03\x02\x02\x02\u0197\u0192\x03\x02\x02\x02\u0197\u0196\x03" +
        "\x02\x02\x02\u0198M\x03\x02\x02\x02\u0199\u019A\x07\x1A\x02\x02\u019A" +
        "\u019B\x05P)\x02\u019BO\x03\x02\x02\x02\u019C\u019E\x05\x06\x04\x02\u019D" +
        "\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A9\x03\x02" +
        "\x02\x02\u019F\u01A3\x056\x1C\x02\u01A0\u01A3\x05R*\x02\u01A1\u01A3\x05" +
        "L\'\x02\u01A2\u019F\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2" +
        "\u01A1\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A6\x05\x06" +
        "\x04\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6" +
        "\u01A8\x03\x02\x02\x02\u01A7\u01A2\x03\x02\x02\x02\u01A8\u01AB\x03\x02" +
        "\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
        "\u01AC\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AD\x07\b\x02" +
        "\x02\u01ADQ\x03\x02\x02\x02\u01AE\u01AF\x07\t\x02\x02\u01AF\u01B0\x05" +
        "P)\x02\u01B0S\x03\x02\x02\x02\u01B1\u01B3\x05V,\x02\u01B2\u01B4\x05\x06" +
        "\x04\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4" +
        "\u01B6\x03\x02\x02\x02\u01B5\u01B7\x05T+\x02\u01B6\u01B5\x03\x02\x02\x02" +
        "\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01BA\x05" +
        "\x06\x04\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
        "U\x03\x02\x02\x02\u01BB\u01BD\x05\x06\x04\x02\u01BC\u01BB\x03\x02\x02" +
        "\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF" +
        "\x05X-\x02\u01BFW\x03\x02\x02\x02\u01C0\u01C1\x07\x12\x02\x02\u01C1Y\x03" +
        "\x02\x02\x02\u01C2\u01C4\x07 \x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
        "\u01C5\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02" +
        "\x02\x02\u01C6[\x03\x02\x02\x02\u01C7\u01C8\x05\x1A\x0E\x02\u01C8]\x03" +
        "\x02\x02\x02\u01C9\u01CB\x05`1\x02\u01CA\u01CC\x05^0\x02\u01CB\u01CA\x03" +
        "\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC_\x03\x02\x02\x02\u01CD" +
        "\u01CF\x05\x06\x04\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
        "\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x07\r\x02\x02\u01D1\u01D3" +
        "\x05\x06\x04\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
        "\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D7\x05\x1E\x10\x02\u01D5\u01D7\x05" +
        "&\x14\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7" +
        "a\x03\x02\x02\x02Rgjmpuy~\x81\x87\x8B\x8F\x95\x98\x9A\x9E\xA2\xA5\xAC" +
        "\xB2\xB7\xBD\xC0\xC4\xC9\xCE\xD2\xD6\xDE\xE2\xE5\xEB\xEF\xF3\xF7\xFB\u0100" +
        "\u0104\u0108\u010E\u0113\u0117\u011A\u011D\u0122\u0127\u012B\u012E\u0131" +
        "\u0137\u013A\u013D\u0147\u014D\u0151\u0159\u015F\u0162\u0167\u016A\u016F" +
        "\u0175\u0180\u0184\u0189\u018C\u0194\u0197\u019D\u01A2\u01A5\u01A9\u01B3" +
        "\u01B6\u01B9\u01BC\u01C5\u01CB\u01CE\u01D2\u01D6";
    return SmalltalkParser;
}(Parser_1.Parser));
exports.SmalltalkParser = SmalltalkParser;
var ScriptContext = /** @class */ (function (_super) {
    __extends(ScriptContext, _super);
    function ScriptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptContext.prototype.sequence = function () {
        return this.getRuleContext(0, SequenceContext);
    };
    ScriptContext.prototype.EOF = function () { return this.getToken(SmalltalkParser.EOF, 0); };
    Object.defineProperty(ScriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_script; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptContext.prototype.enterRule = function (listener) {
        if (listener.enterScript) {
            listener.enterScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.exitRule = function (listener) {
        if (listener.exitScript) {
            listener.exitScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.accept = function (visitor) {
        if (visitor.visitScript) {
            return visitor.visitScript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptContext = ScriptContext;
var SequenceContext = /** @class */ (function (_super) {
    __extends(SequenceContext, _super);
    function SequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceContext.prototype.temps = function () {
        return this.tryGetRuleContext(0, TempsContext);
    };
    SequenceContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    SequenceContext.prototype.statements = function () {
        return this.tryGetRuleContext(0, StatementsContext);
    };
    Object.defineProperty(SequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_sequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterSequence) {
            listener.enterSequence(this);
        }
    };
    // @Override
    SequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitSequence) {
            listener.exitSequence(this);
        }
    };
    // @Override
    SequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitSequence) {
            return visitor.visitSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequenceContext = SequenceContext;
var WsContext = /** @class */ (function (_super) {
    __extends(WsContext, _super);
    function WsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WsContext.prototype.SEPARATOR = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.SEPARATOR);
        }
        else {
            return this.getToken(SmalltalkParser.SEPARATOR, i);
        }
    };
    WsContext.prototype.COMMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.COMMENT);
        }
        else {
            return this.getToken(SmalltalkParser.COMMENT, i);
        }
    };
    Object.defineProperty(WsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_ws; },
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
var TempsContext = /** @class */ (function (_super) {
    __extends(TempsContext, _super);
    function TempsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TempsContext.prototype.PIPE = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.PIPE);
        }
        else {
            return this.getToken(SmalltalkParser.PIPE, i);
        }
    };
    TempsContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.IDENTIFIER);
        }
        else {
            return this.getToken(SmalltalkParser.IDENTIFIER, i);
        }
    };
    TempsContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(TempsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_temps; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TempsContext.prototype.enterRule = function (listener) {
        if (listener.enterTemps) {
            listener.enterTemps(this);
        }
    };
    // @Override
    TempsContext.prototype.exitRule = function (listener) {
        if (listener.exitTemps) {
            listener.exitTemps(this);
        }
    };
    // @Override
    TempsContext.prototype.accept = function (visitor) {
        if (visitor.visitTemps) {
            return visitor.visitTemps(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TempsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TempsContext = TempsContext;
var StatementsContext = /** @class */ (function (_super) {
    __extends(StatementsContext, _super);
    function StatementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StatementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_statements; },
        enumerable: true,
        configurable: true
    });
    StatementsContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return StatementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementsContext = StatementsContext;
var StatementAnswerContext = /** @class */ (function (_super) {
    __extends(StatementAnswerContext, _super);
    function StatementAnswerContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StatementAnswerContext.prototype.answer = function () {
        return this.getRuleContext(0, AnswerContext);
    };
    StatementAnswerContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    // @Override
    StatementAnswerContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementAnswer) {
            listener.enterStatementAnswer(this);
        }
    };
    // @Override
    StatementAnswerContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementAnswer) {
            listener.exitStatementAnswer(this);
        }
    };
    // @Override
    StatementAnswerContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementAnswer) {
            return visitor.visitStatementAnswer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementAnswerContext;
}(StatementsContext));
exports.StatementAnswerContext = StatementAnswerContext;
var StatementExpressionsAnswerContext = /** @class */ (function (_super) {
    __extends(StatementExpressionsAnswerContext, _super);
    function StatementExpressionsAnswerContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StatementExpressionsAnswerContext.prototype.expressions = function () {
        return this.getRuleContext(0, ExpressionsContext);
    };
    StatementExpressionsAnswerContext.prototype.PERIOD = function () { return this.getToken(SmalltalkParser.PERIOD, 0); };
    StatementExpressionsAnswerContext.prototype.answer = function () {
        return this.getRuleContext(0, AnswerContext);
    };
    StatementExpressionsAnswerContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    // @Override
    StatementExpressionsAnswerContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementExpressionsAnswer) {
            listener.enterStatementExpressionsAnswer(this);
        }
    };
    // @Override
    StatementExpressionsAnswerContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementExpressionsAnswer) {
            listener.exitStatementExpressionsAnswer(this);
        }
    };
    // @Override
    StatementExpressionsAnswerContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementExpressionsAnswer) {
            return visitor.visitStatementExpressionsAnswer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementExpressionsAnswerContext;
}(StatementsContext));
exports.StatementExpressionsAnswerContext = StatementExpressionsAnswerContext;
var StatementExpressionsContext = /** @class */ (function (_super) {
    __extends(StatementExpressionsContext, _super);
    function StatementExpressionsContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StatementExpressionsContext.prototype.expressions = function () {
        return this.getRuleContext(0, ExpressionsContext);
    };
    StatementExpressionsContext.prototype.PERIOD = function () { return this.tryGetToken(SmalltalkParser.PERIOD, 0); };
    StatementExpressionsContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    // @Override
    StatementExpressionsContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementExpressions) {
            listener.enterStatementExpressions(this);
        }
    };
    // @Override
    StatementExpressionsContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementExpressions) {
            listener.exitStatementExpressions(this);
        }
    };
    // @Override
    StatementExpressionsContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementExpressions) {
            return visitor.visitStatementExpressions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementExpressionsContext;
}(StatementsContext));
exports.StatementExpressionsContext = StatementExpressionsContext;
var AnswerContext = /** @class */ (function (_super) {
    __extends(AnswerContext, _super);
    function AnswerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnswerContext.prototype.CARROT = function () { return this.getToken(SmalltalkParser.CARROT, 0); };
    AnswerContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AnswerContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    AnswerContext.prototype.PERIOD = function () { return this.tryGetToken(SmalltalkParser.PERIOD, 0); };
    Object.defineProperty(AnswerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_answer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnswerContext.prototype.enterRule = function (listener) {
        if (listener.enterAnswer) {
            listener.enterAnswer(this);
        }
    };
    // @Override
    AnswerContext.prototype.exitRule = function (listener) {
        if (listener.exitAnswer) {
            listener.exitAnswer(this);
        }
    };
    // @Override
    AnswerContext.prototype.accept = function (visitor) {
        if (visitor.visitAnswer) {
            return visitor.visitAnswer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnswerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnswerContext = AnswerContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    ExpressionContext.prototype.cascade = function () {
        return this.tryGetRuleContext(0, CascadeContext);
    };
    ExpressionContext.prototype.keywordSend = function () {
        return this.tryGetRuleContext(0, KeywordSendContext);
    };
    ExpressionContext.prototype.binarySend = function () {
        return this.tryGetRuleContext(0, BinarySendContext);
    };
    ExpressionContext.prototype.primitive = function () {
        return this.tryGetRuleContext(0, PrimitiveContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_expression; },
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
var ExpressionsContext = /** @class */ (function (_super) {
    __extends(ExpressionsContext, _super);
    function ExpressionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionsContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ExpressionsContext.prototype.expressionList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionListContext);
        }
        else {
            return this.getRuleContext(i, ExpressionListContext);
        }
    };
    Object.defineProperty(ExpressionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_expressions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionsContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressions) {
            listener.enterExpressions(this);
        }
    };
    // @Override
    ExpressionsContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressions) {
            listener.exitExpressions(this);
        }
    };
    // @Override
    ExpressionsContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressions) {
            return visitor.visitExpressions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionsContext = ExpressionsContext;
var ExpressionListContext = /** @class */ (function (_super) {
    __extends(ExpressionListContext, _super);
    function ExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionListContext.prototype.PERIOD = function () { return this.getToken(SmalltalkParser.PERIOD, 0); };
    ExpressionListContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ExpressionListContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_expressionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionListContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionListContext = ExpressionListContext;
var CascadeContext = /** @class */ (function (_super) {
    __extends(CascadeContext, _super);
    function CascadeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CascadeContext.prototype.keywordSend = function () {
        return this.tryGetRuleContext(0, KeywordSendContext);
    };
    CascadeContext.prototype.binarySend = function () {
        return this.tryGetRuleContext(0, BinarySendContext);
    };
    CascadeContext.prototype.SEMI_COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.SEMI_COLON);
        }
        else {
            return this.getToken(SmalltalkParser.SEMI_COLON, i);
        }
    };
    CascadeContext.prototype.message = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MessageContext);
        }
        else {
            return this.getRuleContext(i, MessageContext);
        }
    };
    CascadeContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(CascadeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_cascade; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CascadeContext.prototype.enterRule = function (listener) {
        if (listener.enterCascade) {
            listener.enterCascade(this);
        }
    };
    // @Override
    CascadeContext.prototype.exitRule = function (listener) {
        if (listener.exitCascade) {
            listener.exitCascade(this);
        }
    };
    // @Override
    CascadeContext.prototype.accept = function (visitor) {
        if (visitor.visitCascade) {
            return visitor.visitCascade(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CascadeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CascadeContext = CascadeContext;
var MessageContext = /** @class */ (function (_super) {
    __extends(MessageContext, _super);
    function MessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageContext.prototype.binaryMessage = function () {
        return this.tryGetRuleContext(0, BinaryMessageContext);
    };
    MessageContext.prototype.unaryMessage = function () {
        return this.tryGetRuleContext(0, UnaryMessageContext);
    };
    MessageContext.prototype.keywordMessage = function () {
        return this.tryGetRuleContext(0, KeywordMessageContext);
    };
    Object.defineProperty(MessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageContext.prototype.enterRule = function (listener) {
        if (listener.enterMessage) {
            listener.enterMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.exitRule = function (listener) {
        if (listener.exitMessage) {
            listener.exitMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.accept = function (visitor) {
        if (visitor.visitMessage) {
            return visitor.visitMessage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageContext = MessageContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    AssignmentContext.prototype.ASSIGNMENT = function () { return this.getToken(SmalltalkParser.ASSIGNMENT, 0); };
    AssignmentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AssignmentContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_assignment; },
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
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.IDENTIFIER = function () { return this.getToken(SmalltalkParser.IDENTIFIER, 0); };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_variable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableContext = VariableContext;
var BinarySendContext = /** @class */ (function (_super) {
    __extends(BinarySendContext, _super);
    function BinarySendContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinarySendContext.prototype.unarySend = function () {
        return this.getRuleContext(0, UnarySendContext);
    };
    BinarySendContext.prototype.binaryTail = function () {
        return this.tryGetRuleContext(0, BinaryTailContext);
    };
    Object.defineProperty(BinarySendContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_binarySend; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinarySendContext.prototype.enterRule = function (listener) {
        if (listener.enterBinarySend) {
            listener.enterBinarySend(this);
        }
    };
    // @Override
    BinarySendContext.prototype.exitRule = function (listener) {
        if (listener.exitBinarySend) {
            listener.exitBinarySend(this);
        }
    };
    // @Override
    BinarySendContext.prototype.accept = function (visitor) {
        if (visitor.visitBinarySend) {
            return visitor.visitBinarySend(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinarySendContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinarySendContext = BinarySendContext;
var UnarySendContext = /** @class */ (function (_super) {
    __extends(UnarySendContext, _super);
    function UnarySendContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnarySendContext.prototype.operand = function () {
        return this.getRuleContext(0, OperandContext);
    };
    UnarySendContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    UnarySendContext.prototype.unaryTail = function () {
        return this.tryGetRuleContext(0, UnaryTailContext);
    };
    Object.defineProperty(UnarySendContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_unarySend; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnarySendContext.prototype.enterRule = function (listener) {
        if (listener.enterUnarySend) {
            listener.enterUnarySend(this);
        }
    };
    // @Override
    UnarySendContext.prototype.exitRule = function (listener) {
        if (listener.exitUnarySend) {
            listener.exitUnarySend(this);
        }
    };
    // @Override
    UnarySendContext.prototype.accept = function (visitor) {
        if (visitor.visitUnarySend) {
            return visitor.visitUnarySend(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnarySendContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnarySendContext = UnarySendContext;
var KeywordSendContext = /** @class */ (function (_super) {
    __extends(KeywordSendContext, _super);
    function KeywordSendContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordSendContext.prototype.binarySend = function () {
        return this.getRuleContext(0, BinarySendContext);
    };
    KeywordSendContext.prototype.keywordMessage = function () {
        return this.getRuleContext(0, KeywordMessageContext);
    };
    Object.defineProperty(KeywordSendContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_keywordSend; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordSendContext.prototype.enterRule = function (listener) {
        if (listener.enterKeywordSend) {
            listener.enterKeywordSend(this);
        }
    };
    // @Override
    KeywordSendContext.prototype.exitRule = function (listener) {
        if (listener.exitKeywordSend) {
            listener.exitKeywordSend(this);
        }
    };
    // @Override
    KeywordSendContext.prototype.accept = function (visitor) {
        if (visitor.visitKeywordSend) {
            return visitor.visitKeywordSend(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordSendContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordSendContext = KeywordSendContext;
var KeywordMessageContext = /** @class */ (function (_super) {
    __extends(KeywordMessageContext, _super);
    function KeywordMessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordMessageContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    KeywordMessageContext.prototype.keywordPair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeywordPairContext);
        }
        else {
            return this.getRuleContext(i, KeywordPairContext);
        }
    };
    Object.defineProperty(KeywordMessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_keywordMessage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordMessageContext.prototype.enterRule = function (listener) {
        if (listener.enterKeywordMessage) {
            listener.enterKeywordMessage(this);
        }
    };
    // @Override
    KeywordMessageContext.prototype.exitRule = function (listener) {
        if (listener.exitKeywordMessage) {
            listener.exitKeywordMessage(this);
        }
    };
    // @Override
    KeywordMessageContext.prototype.accept = function (visitor) {
        if (visitor.visitKeywordMessage) {
            return visitor.visitKeywordMessage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordMessageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordMessageContext = KeywordMessageContext;
var KeywordPairContext = /** @class */ (function (_super) {
    __extends(KeywordPairContext, _super);
    function KeywordPairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordPairContext.prototype.KEYWORD = function () { return this.getToken(SmalltalkParser.KEYWORD, 0); };
    KeywordPairContext.prototype.binarySend = function () {
        return this.getRuleContext(0, BinarySendContext);
    };
    KeywordPairContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(KeywordPairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_keywordPair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordPairContext.prototype.enterRule = function (listener) {
        if (listener.enterKeywordPair) {
            listener.enterKeywordPair(this);
        }
    };
    // @Override
    KeywordPairContext.prototype.exitRule = function (listener) {
        if (listener.exitKeywordPair) {
            listener.exitKeywordPair(this);
        }
    };
    // @Override
    KeywordPairContext.prototype.accept = function (visitor) {
        if (visitor.visitKeywordPair) {
            return visitor.visitKeywordPair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordPairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordPairContext = KeywordPairContext;
var OperandContext = /** @class */ (function (_super) {
    __extends(OperandContext, _super);
    function OperandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperandContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    OperandContext.prototype.reference = function () {
        return this.tryGetRuleContext(0, ReferenceContext);
    };
    OperandContext.prototype.subexpression = function () {
        return this.tryGetRuleContext(0, SubexpressionContext);
    };
    Object.defineProperty(OperandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_operand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperandContext.prototype.enterRule = function (listener) {
        if (listener.enterOperand) {
            listener.enterOperand(this);
        }
    };
    // @Override
    OperandContext.prototype.exitRule = function (listener) {
        if (listener.exitOperand) {
            listener.exitOperand(this);
        }
    };
    // @Override
    OperandContext.prototype.accept = function (visitor) {
        if (visitor.visitOperand) {
            return visitor.visitOperand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperandContext = OperandContext;
var SubexpressionContext = /** @class */ (function (_super) {
    __extends(SubexpressionContext, _super);
    function SubexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubexpressionContext.prototype.OPEN_PAREN = function () { return this.getToken(SmalltalkParser.OPEN_PAREN, 0); };
    SubexpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SubexpressionContext.prototype.CLOSE_PAREN = function () { return this.getToken(SmalltalkParser.CLOSE_PAREN, 0); };
    SubexpressionContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(SubexpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_subexpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubexpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSubexpression) {
            listener.enterSubexpression(this);
        }
    };
    // @Override
    SubexpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSubexpression) {
            listener.exitSubexpression(this);
        }
    };
    // @Override
    SubexpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSubexpression) {
            return visitor.visitSubexpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubexpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubexpressionContext = SubexpressionContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.runtimeLiteral = function () {
        return this.tryGetRuleContext(0, RuntimeLiteralContext);
    };
    LiteralContext.prototype.parsetimeLiteral = function () {
        return this.tryGetRuleContext(0, ParsetimeLiteralContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_literal; },
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
var RuntimeLiteralContext = /** @class */ (function (_super) {
    __extends(RuntimeLiteralContext, _super);
    function RuntimeLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuntimeLiteralContext.prototype.dynamicDictionary = function () {
        return this.tryGetRuleContext(0, DynamicDictionaryContext);
    };
    RuntimeLiteralContext.prototype.dynamicArray = function () {
        return this.tryGetRuleContext(0, DynamicArrayContext);
    };
    RuntimeLiteralContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(RuntimeLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_runtimeLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuntimeLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterRuntimeLiteral) {
            listener.enterRuntimeLiteral(this);
        }
    };
    // @Override
    RuntimeLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitRuntimeLiteral) {
            listener.exitRuntimeLiteral(this);
        }
    };
    // @Override
    RuntimeLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitRuntimeLiteral) {
            return visitor.visitRuntimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuntimeLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuntimeLiteralContext = RuntimeLiteralContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.BLOCK_START = function () { return this.getToken(SmalltalkParser.BLOCK_START, 0); };
    BlockContext.prototype.BLOCK_END = function () { return this.getToken(SmalltalkParser.BLOCK_END, 0); };
    BlockContext.prototype.blockParamList = function () {
        return this.tryGetRuleContext(0, BlockParamListContext);
    };
    BlockContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    BlockContext.prototype.sequence = function () {
        return this.tryGetRuleContext(0, SequenceContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_block; },
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
var BlockParamListContext = /** @class */ (function (_super) {
    __extends(BlockParamListContext, _super);
    function BlockParamListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockParamListContext.prototype.BLOCK_PARAM = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.BLOCK_PARAM);
        }
        else {
            return this.getToken(SmalltalkParser.BLOCK_PARAM, i);
        }
    };
    BlockParamListContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(BlockParamListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_blockParamList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockParamListContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockParamList) {
            listener.enterBlockParamList(this);
        }
    };
    // @Override
    BlockParamListContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockParamList) {
            listener.exitBlockParamList(this);
        }
    };
    // @Override
    BlockParamListContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockParamList) {
            return visitor.visitBlockParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockParamListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockParamListContext = BlockParamListContext;
var DynamicDictionaryContext = /** @class */ (function (_super) {
    __extends(DynamicDictionaryContext, _super);
    function DynamicDictionaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DynamicDictionaryContext.prototype.DYNDICT_START = function () { return this.getToken(SmalltalkParser.DYNDICT_START, 0); };
    DynamicDictionaryContext.prototype.DYNARR_END = function () { return this.getToken(SmalltalkParser.DYNARR_END, 0); };
    DynamicDictionaryContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    DynamicDictionaryContext.prototype.expressions = function () {
        return this.tryGetRuleContext(0, ExpressionsContext);
    };
    Object.defineProperty(DynamicDictionaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_dynamicDictionary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DynamicDictionaryContext.prototype.enterRule = function (listener) {
        if (listener.enterDynamicDictionary) {
            listener.enterDynamicDictionary(this);
        }
    };
    // @Override
    DynamicDictionaryContext.prototype.exitRule = function (listener) {
        if (listener.exitDynamicDictionary) {
            listener.exitDynamicDictionary(this);
        }
    };
    // @Override
    DynamicDictionaryContext.prototype.accept = function (visitor) {
        if (visitor.visitDynamicDictionary) {
            return visitor.visitDynamicDictionary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DynamicDictionaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DynamicDictionaryContext = DynamicDictionaryContext;
var DynamicArrayContext = /** @class */ (function (_super) {
    __extends(DynamicArrayContext, _super);
    function DynamicArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DynamicArrayContext.prototype.DYNARR_START = function () { return this.getToken(SmalltalkParser.DYNARR_START, 0); };
    DynamicArrayContext.prototype.DYNARR_END = function () { return this.getToken(SmalltalkParser.DYNARR_END, 0); };
    DynamicArrayContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    DynamicArrayContext.prototype.expressions = function () {
        return this.tryGetRuleContext(0, ExpressionsContext);
    };
    Object.defineProperty(DynamicArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_dynamicArray; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DynamicArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterDynamicArray) {
            listener.enterDynamicArray(this);
        }
    };
    // @Override
    DynamicArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitDynamicArray) {
            listener.exitDynamicArray(this);
        }
    };
    // @Override
    DynamicArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitDynamicArray) {
            return visitor.visitDynamicArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DynamicArrayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DynamicArrayContext = DynamicArrayContext;
var ParsetimeLiteralContext = /** @class */ (function (_super) {
    __extends(ParsetimeLiteralContext, _super);
    function ParsetimeLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParsetimeLiteralContext.prototype.pseudoVariable = function () {
        return this.tryGetRuleContext(0, PseudoVariableContext);
    };
    ParsetimeLiteralContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    ParsetimeLiteralContext.prototype.charConstant = function () {
        return this.tryGetRuleContext(0, CharConstantContext);
    };
    ParsetimeLiteralContext.prototype.literalArray = function () {
        return this.tryGetRuleContext(0, LiteralArrayContext);
    };
    ParsetimeLiteralContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ParsetimeLiteralContext.prototype.symbol = function () {
        return this.tryGetRuleContext(0, SymbolContext);
    };
    Object.defineProperty(ParsetimeLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_parsetimeLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParsetimeLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterParsetimeLiteral) {
            listener.enterParsetimeLiteral(this);
        }
    };
    // @Override
    ParsetimeLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitParsetimeLiteral) {
            listener.exitParsetimeLiteral(this);
        }
    };
    // @Override
    ParsetimeLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitParsetimeLiteral) {
            return visitor.visitParsetimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParsetimeLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParsetimeLiteralContext = ParsetimeLiteralContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.numberExp = function () {
        return this.tryGetRuleContext(0, NumberExpContext);
    };
    NumberContext.prototype.hex = function () {
        return this.tryGetRuleContext(0, HexContext);
    };
    NumberContext.prototype.stFloat = function () {
        return this.tryGetRuleContext(0, StFloatContext);
    };
    NumberContext.prototype.stInteger = function () {
        return this.tryGetRuleContext(0, StIntegerContext);
    };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_number; },
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
var NumberExpContext = /** @class */ (function (_super) {
    __extends(NumberExpContext, _super);
    function NumberExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberExpContext.prototype.EXP = function () { return this.getToken(SmalltalkParser.EXP, 0); };
    NumberExpContext.prototype.stInteger = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StIntegerContext);
        }
        else {
            return this.getRuleContext(i, StIntegerContext);
        }
    };
    NumberExpContext.prototype.stFloat = function () {
        return this.tryGetRuleContext(0, StFloatContext);
    };
    Object.defineProperty(NumberExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_numberExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberExpContext.prototype.enterRule = function (listener) {
        if (listener.enterNumberExp) {
            listener.enterNumberExp(this);
        }
    };
    // @Override
    NumberExpContext.prototype.exitRule = function (listener) {
        if (listener.exitNumberExp) {
            listener.exitNumberExp(this);
        }
    };
    // @Override
    NumberExpContext.prototype.accept = function (visitor) {
        if (visitor.visitNumberExp) {
            return visitor.visitNumberExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberExpContext = NumberExpContext;
var CharConstantContext = /** @class */ (function (_super) {
    __extends(CharConstantContext, _super);
    function CharConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharConstantContext.prototype.CHARACTER_CONSTANT = function () { return this.getToken(SmalltalkParser.CHARACTER_CONSTANT, 0); };
    Object.defineProperty(CharConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_charConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterCharConstant) {
            listener.enterCharConstant(this);
        }
    };
    // @Override
    CharConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitCharConstant) {
            listener.exitCharConstant(this);
        }
    };
    // @Override
    CharConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitCharConstant) {
            return visitor.visitCharConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharConstantContext = CharConstantContext;
var HexContext = /** @class */ (function (_super) {
    __extends(HexContext, _super);
    function HexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HexContext.prototype.HEX = function () { return this.getToken(SmalltalkParser.HEX, 0); };
    HexContext.prototype.MINUS = function () { return this.tryGetToken(SmalltalkParser.MINUS, 0); };
    HexContext.prototype.HEXDIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.HEXDIGIT);
        }
        else {
            return this.getToken(SmalltalkParser.HEXDIGIT, i);
        }
    };
    Object.defineProperty(HexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_hex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HexContext.prototype.enterRule = function (listener) {
        if (listener.enterHex) {
            listener.enterHex(this);
        }
    };
    // @Override
    HexContext.prototype.exitRule = function (listener) {
        if (listener.exitHex) {
            listener.exitHex(this);
        }
    };
    // @Override
    HexContext.prototype.accept = function (visitor) {
        if (visitor.visitHex) {
            return visitor.visitHex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HexContext = HexContext;
var StIntegerContext = /** @class */ (function (_super) {
    __extends(StIntegerContext, _super);
    function StIntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StIntegerContext.prototype.MINUS = function () { return this.tryGetToken(SmalltalkParser.MINUS, 0); };
    StIntegerContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.DIGIT);
        }
        else {
            return this.getToken(SmalltalkParser.DIGIT, i);
        }
    };
    Object.defineProperty(StIntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_stInteger; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StIntegerContext.prototype.enterRule = function (listener) {
        if (listener.enterStInteger) {
            listener.enterStInteger(this);
        }
    };
    // @Override
    StIntegerContext.prototype.exitRule = function (listener) {
        if (listener.exitStInteger) {
            listener.exitStInteger(this);
        }
    };
    // @Override
    StIntegerContext.prototype.accept = function (visitor) {
        if (visitor.visitStInteger) {
            return visitor.visitStInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StIntegerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StIntegerContext = StIntegerContext;
var StFloatContext = /** @class */ (function (_super) {
    __extends(StFloatContext, _super);
    function StFloatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StFloatContext.prototype.PERIOD = function () { return this.getToken(SmalltalkParser.PERIOD, 0); };
    StFloatContext.prototype.MINUS = function () { return this.tryGetToken(SmalltalkParser.MINUS, 0); };
    StFloatContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.DIGIT);
        }
        else {
            return this.getToken(SmalltalkParser.DIGIT, i);
        }
    };
    Object.defineProperty(StFloatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_stFloat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StFloatContext.prototype.enterRule = function (listener) {
        if (listener.enterStFloat) {
            listener.enterStFloat(this);
        }
    };
    // @Override
    StFloatContext.prototype.exitRule = function (listener) {
        if (listener.exitStFloat) {
            listener.exitStFloat(this);
        }
    };
    // @Override
    StFloatContext.prototype.accept = function (visitor) {
        if (visitor.visitStFloat) {
            return visitor.visitStFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StFloatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StFloatContext = StFloatContext;
var PseudoVariableContext = /** @class */ (function (_super) {
    __extends(PseudoVariableContext, _super);
    function PseudoVariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PseudoVariableContext.prototype.RESERVED_WORD = function () { return this.getToken(SmalltalkParser.RESERVED_WORD, 0); };
    Object.defineProperty(PseudoVariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_pseudoVariable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PseudoVariableContext.prototype.enterRule = function (listener) {
        if (listener.enterPseudoVariable) {
            listener.enterPseudoVariable(this);
        }
    };
    // @Override
    PseudoVariableContext.prototype.exitRule = function (listener) {
        if (listener.exitPseudoVariable) {
            listener.exitPseudoVariable(this);
        }
    };
    // @Override
    PseudoVariableContext.prototype.accept = function (visitor) {
        if (visitor.visitPseudoVariable) {
            return visitor.visitPseudoVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PseudoVariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PseudoVariableContext = PseudoVariableContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(SmalltalkParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.HASH = function () { return this.getToken(SmalltalkParser.HASH, 0); };
    SymbolContext.prototype.bareSymbol = function () {
        return this.getRuleContext(0, BareSymbolContext);
    };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_symbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbol) {
            listener.enterSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbol) {
            listener.exitSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbol) {
            return visitor.visitSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolContext = SymbolContext;
var PrimitiveContext = /** @class */ (function (_super) {
    __extends(PrimitiveContext, _super);
    function PrimitiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveContext.prototype.LT = function () { return this.getToken(SmalltalkParser.LT, 0); };
    PrimitiveContext.prototype.KEYWORD = function () { return this.getToken(SmalltalkParser.KEYWORD, 0); };
    PrimitiveContext.prototype.GT = function () { return this.getToken(SmalltalkParser.GT, 0); };
    PrimitiveContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    PrimitiveContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.DIGIT);
        }
        else {
            return this.getToken(SmalltalkParser.DIGIT, i);
        }
    };
    Object.defineProperty(PrimitiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_primitive; },
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
var BareSymbolContext = /** @class */ (function (_super) {
    __extends(BareSymbolContext, _super);
    function BareSymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BareSymbolContext.prototype.IDENTIFIER = function () { return this.tryGetToken(SmalltalkParser.IDENTIFIER, 0); };
    BareSymbolContext.prototype.BINARY_SELECTOR = function () { return this.tryGetToken(SmalltalkParser.BINARY_SELECTOR, 0); };
    BareSymbolContext.prototype.KEYWORD = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.KEYWORD);
        }
        else {
            return this.getToken(SmalltalkParser.KEYWORD, i);
        }
    };
    BareSymbolContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Object.defineProperty(BareSymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_bareSymbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BareSymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterBareSymbol) {
            listener.enterBareSymbol(this);
        }
    };
    // @Override
    BareSymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitBareSymbol) {
            listener.exitBareSymbol(this);
        }
    };
    // @Override
    BareSymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitBareSymbol) {
            return visitor.visitBareSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BareSymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BareSymbolContext = BareSymbolContext;
var LiteralArrayContext = /** @class */ (function (_super) {
    __extends(LiteralArrayContext, _super);
    function LiteralArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralArrayContext.prototype.LITARR_START = function () { return this.getToken(SmalltalkParser.LITARR_START, 0); };
    LiteralArrayContext.prototype.literalArrayRest = function () {
        return this.getRuleContext(0, LiteralArrayRestContext);
    };
    Object.defineProperty(LiteralArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_literalArray; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralArray) {
            listener.enterLiteralArray(this);
        }
    };
    // @Override
    LiteralArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralArray) {
            listener.exitLiteralArray(this);
        }
    };
    // @Override
    LiteralArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralArray) {
            return visitor.visitLiteralArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralArrayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralArrayContext = LiteralArrayContext;
var LiteralArrayRestContext = /** @class */ (function (_super) {
    __extends(LiteralArrayRestContext, _super);
    function LiteralArrayRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralArrayRestContext.prototype.CLOSE_PAREN = function () { return this.getToken(SmalltalkParser.CLOSE_PAREN, 0); };
    LiteralArrayRestContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    LiteralArrayRestContext.prototype.parsetimeLiteral = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParsetimeLiteralContext);
        }
        else {
            return this.getRuleContext(i, ParsetimeLiteralContext);
        }
    };
    LiteralArrayRestContext.prototype.bareLiteralArray = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BareLiteralArrayContext);
        }
        else {
            return this.getRuleContext(i, BareLiteralArrayContext);
        }
    };
    LiteralArrayRestContext.prototype.bareSymbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BareSymbolContext);
        }
        else {
            return this.getRuleContext(i, BareSymbolContext);
        }
    };
    Object.defineProperty(LiteralArrayRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_literalArrayRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralArrayRestContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralArrayRest) {
            listener.enterLiteralArrayRest(this);
        }
    };
    // @Override
    LiteralArrayRestContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralArrayRest) {
            listener.exitLiteralArrayRest(this);
        }
    };
    // @Override
    LiteralArrayRestContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralArrayRest) {
            return visitor.visitLiteralArrayRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralArrayRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralArrayRestContext = LiteralArrayRestContext;
var BareLiteralArrayContext = /** @class */ (function (_super) {
    __extends(BareLiteralArrayContext, _super);
    function BareLiteralArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BareLiteralArrayContext.prototype.OPEN_PAREN = function () { return this.getToken(SmalltalkParser.OPEN_PAREN, 0); };
    BareLiteralArrayContext.prototype.literalArrayRest = function () {
        return this.getRuleContext(0, LiteralArrayRestContext);
    };
    Object.defineProperty(BareLiteralArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_bareLiteralArray; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BareLiteralArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterBareLiteralArray) {
            listener.enterBareLiteralArray(this);
        }
    };
    // @Override
    BareLiteralArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitBareLiteralArray) {
            listener.exitBareLiteralArray(this);
        }
    };
    // @Override
    BareLiteralArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitBareLiteralArray) {
            return visitor.visitBareLiteralArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BareLiteralArrayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BareLiteralArrayContext = BareLiteralArrayContext;
var UnaryTailContext = /** @class */ (function (_super) {
    __extends(UnaryTailContext, _super);
    function UnaryTailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryTailContext.prototype.unaryMessage = function () {
        return this.getRuleContext(0, UnaryMessageContext);
    };
    UnaryTailContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    UnaryTailContext.prototype.unaryTail = function () {
        return this.tryGetRuleContext(0, UnaryTailContext);
    };
    Object.defineProperty(UnaryTailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_unaryTail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryTailContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryTail) {
            listener.enterUnaryTail(this);
        }
    };
    // @Override
    UnaryTailContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryTail) {
            listener.exitUnaryTail(this);
        }
    };
    // @Override
    UnaryTailContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryTail) {
            return visitor.visitUnaryTail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryTailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryTailContext = UnaryTailContext;
var UnaryMessageContext = /** @class */ (function (_super) {
    __extends(UnaryMessageContext, _super);
    function UnaryMessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryMessageContext.prototype.unarySelector = function () {
        return this.getRuleContext(0, UnarySelectorContext);
    };
    UnaryMessageContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    Object.defineProperty(UnaryMessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_unaryMessage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryMessageContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryMessage) {
            listener.enterUnaryMessage(this);
        }
    };
    // @Override
    UnaryMessageContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryMessage) {
            listener.exitUnaryMessage(this);
        }
    };
    // @Override
    UnaryMessageContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryMessage) {
            return visitor.visitUnaryMessage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryMessageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryMessageContext = UnaryMessageContext;
var UnarySelectorContext = /** @class */ (function (_super) {
    __extends(UnarySelectorContext, _super);
    function UnarySelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnarySelectorContext.prototype.IDENTIFIER = function () { return this.getToken(SmalltalkParser.IDENTIFIER, 0); };
    Object.defineProperty(UnarySelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_unarySelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnarySelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterUnarySelector) {
            listener.enterUnarySelector(this);
        }
    };
    // @Override
    UnarySelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitUnarySelector) {
            listener.exitUnarySelector(this);
        }
    };
    // @Override
    UnarySelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitUnarySelector) {
            return visitor.visitUnarySelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnarySelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnarySelectorContext = UnarySelectorContext;
var KeywordsContext = /** @class */ (function (_super) {
    __extends(KeywordsContext, _super);
    function KeywordsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordsContext.prototype.KEYWORD = function (i) {
        if (i === undefined) {
            return this.getTokens(SmalltalkParser.KEYWORD);
        }
        else {
            return this.getToken(SmalltalkParser.KEYWORD, i);
        }
    };
    Object.defineProperty(KeywordsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_keywords; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordsContext.prototype.enterRule = function (listener) {
        if (listener.enterKeywords) {
            listener.enterKeywords(this);
        }
    };
    // @Override
    KeywordsContext.prototype.exitRule = function (listener) {
        if (listener.exitKeywords) {
            listener.exitKeywords(this);
        }
    };
    // @Override
    KeywordsContext.prototype.accept = function (visitor) {
        if (visitor.visitKeywords) {
            return visitor.visitKeywords(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordsContext = KeywordsContext;
var ReferenceContext = /** @class */ (function (_super) {
    __extends(ReferenceContext, _super);
    function ReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReferenceContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    Object.defineProperty(ReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_reference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterReference) {
            listener.enterReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitReference) {
            listener.exitReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitReference) {
            return visitor.visitReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReferenceContext = ReferenceContext;
var BinaryTailContext = /** @class */ (function (_super) {
    __extends(BinaryTailContext, _super);
    function BinaryTailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryTailContext.prototype.binaryMessage = function () {
        return this.getRuleContext(0, BinaryMessageContext);
    };
    BinaryTailContext.prototype.binaryTail = function () {
        return this.tryGetRuleContext(0, BinaryTailContext);
    };
    Object.defineProperty(BinaryTailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_binaryTail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryTailContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryTail) {
            listener.enterBinaryTail(this);
        }
    };
    // @Override
    BinaryTailContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryTail) {
            listener.exitBinaryTail(this);
        }
    };
    // @Override
    BinaryTailContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryTail) {
            return visitor.visitBinaryTail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryTailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryTailContext = BinaryTailContext;
var BinaryMessageContext = /** @class */ (function (_super) {
    __extends(BinaryMessageContext, _super);
    function BinaryMessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryMessageContext.prototype.BINARY_SELECTOR = function () { return this.getToken(SmalltalkParser.BINARY_SELECTOR, 0); };
    BinaryMessageContext.prototype.unarySend = function () {
        return this.tryGetRuleContext(0, UnarySendContext);
    };
    BinaryMessageContext.prototype.operand = function () {
        return this.tryGetRuleContext(0, OperandContext);
    };
    BinaryMessageContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(BinaryMessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SmalltalkParser.RULE_binaryMessage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryMessageContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryMessage) {
            listener.enterBinaryMessage(this);
        }
    };
    // @Override
    BinaryMessageContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryMessage) {
            listener.exitBinaryMessage(this);
        }
    };
    // @Override
    BinaryMessageContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryMessage) {
            return visitor.visitBinaryMessage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryMessageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryMessageContext = BinaryMessageContext;
