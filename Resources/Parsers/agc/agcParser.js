"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/agc/agc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var agcParser = /** @class */ (function (_super) {
    __extends(agcParser, _super);
    function agcParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(agcParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(agcParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return agcParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(agcParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "agc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(agcParser.prototype, "ruleNames", {
        // @Override
        get: function () { return agcParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(agcParser.prototype, "serializedATN", {
        // @Override
        get: function () { return agcParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    agcParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, agcParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 48;
                            this.line();
                        }
                    }
                    this.state = 51;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (agcParser.LABEL - 184)) | (1 << (agcParser.COMMENT - 184)) | (1 << (agcParser.LPAREN - 184)) | (1 << (agcParser.EOL - 184)) | (1 << (agcParser.WS - 184)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, agcParser.RULE_line);
        try {
            this.state = 58;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 53;
                        this.comment_line();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 54;
                        this.blank_line();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 55;
                        this.instruction_line();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 56;
                        this.erase_line();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 57;
                        this.assignment_line();
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
    agcParser.prototype.blank_line = function () {
        var _localctx = new Blank_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, agcParser.RULE_blank_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === agcParser.LABEL) {
                    {
                        this.state = 60;
                        this.label();
                    }
                }
                this.state = 63;
                this.eol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.comment_line = function () {
        var _localctx = new Comment_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, agcParser.RULE_comment_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === agcParser.WS) {
                    {
                        this.state = 65;
                        this.ws();
                    }
                }
                this.state = 68;
                this.comment();
                this.state = 69;
                this.eol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.instruction_line = function () {
        var _localctx = new Instruction_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, agcParser.RULE_instruction_line);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === agcParser.LABEL) {
                    {
                        this.state = 71;
                        this.label();
                    }
                }
                this.state = 74;
                this.ws();
                this.state = 75;
                this.opcodes();
                this.state = 79;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 76;
                            this.eol();
                            this.state = 77;
                            this.comment_line();
                        }
                        break;
                }
                this.state = 81;
                this.argument();
                this.state = 87;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 82;
                                this.eol();
                                this.state = 83;
                                this.argument();
                            }
                        }
                    }
                    this.state = 89;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                }
                this.state = 90;
                this.eol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.erase_line = function () {
        var _localctx = new Erase_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, agcParser.RULE_erase_line);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === agcParser.LABEL || _la === agcParser.LPAREN) {
                    {
                        this.state = 92;
                        this.variable();
                    }
                }
                this.state = 95;
                this.ws();
                this.state = 96;
                this.match(agcParser.T__0);
                this.state = 103;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 98;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === agcParser.WS) {
                                    {
                                        this.state = 97;
                                        this.ws();
                                    }
                                }
                                this.state = 100;
                                this.expression();
                            }
                        }
                    }
                    this.state = 105;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                }
                this.state = 109;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 106;
                            this.ws();
                            this.state = 107;
                            this.comment();
                        }
                        break;
                }
                this.state = 111;
                this.eol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.assignment_line = function () {
        var _localctx = new Assignment_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, agcParser.RULE_assignment_line);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.variable();
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === agcParser.WS) {
                    {
                        this.state = 114;
                        this.ws();
                    }
                }
                this.state = 117;
                _la = this._input.LA(1);
                if (!(_la === agcParser.T__1 || _la === agcParser.T__2)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 124;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 119;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === agcParser.WS) {
                                    {
                                        this.state = 118;
                                        this.ws();
                                    }
                                }
                                this.state = 121;
                                this.expression();
                            }
                        }
                    }
                    this.state = 126;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                }
                this.state = 130;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 127;
                            this.ws();
                            this.state = 128;
                            this.comment();
                        }
                        break;
                }
                this.state = 132;
                this.eol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.opcodes = function () {
        var _localctx = new OpcodesContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, agcParser.RULE_opcodes);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this.opcode();
                this.state = 138;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 135;
                            this.ws();
                            this.state = 136;
                            this.opcode();
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
    agcParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, agcParser.RULE_argument);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 140;
                                this.ws();
                                this.state = 141;
                                this.expression();
                            }
                        }
                    }
                    this.state = 147;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                }
                this.state = 151;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 148;
                            this.ws();
                            this.state = 149;
                            this.comment();
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
    agcParser.prototype.ws = function () {
        var _localctx = new WsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, agcParser.RULE_ws);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.match(agcParser.WS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.eol = function () {
        var _localctx = new EolContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, agcParser.RULE_eol);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === agcParser.WS) {
                    {
                        this.state = 155;
                        this.match(agcParser.WS);
                    }
                }
                this.state = 158;
                this.match(agcParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, agcParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(agcParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, agcParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.match(agcParser.LABEL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, agcParser.RULE_variable);
        try {
            this.state = 168;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case agcParser.LABEL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 164;
                        this.match(agcParser.LABEL);
                    }
                    break;
                case agcParser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 165;
                            this.match(agcParser.LPAREN);
                            this.state = 166;
                            this.match(agcParser.LABEL);
                            this.state = 167;
                            this.match(agcParser.RPAREN);
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
    agcParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, agcParser.RULE_expression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 170;
                this.multiplyingExpression();
                this.state = 175;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 171;
                                _la = this._input.LA(1);
                                if (!(_la === agcParser.PLUS || _la === agcParser.MINUS)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 172;
                                this.multiplyingExpression();
                            }
                        }
                    }
                    this.state = 177;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, agcParser.RULE_multiplyingExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.atom();
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === agcParser.TIMES || _la === agcParser.DIV) {
                    {
                        {
                            this.state = 179;
                            _la = this._input.LA(1);
                            if (!(_la === agcParser.TIMES || _la === agcParser.DIV)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 180;
                            this.atom();
                        }
                    }
                    this.state = 185;
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
    agcParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, agcParser.RULE_atom);
        try {
            this.state = 191;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 186;
                        this.inte();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 187;
                        this.decimal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 188;
                        this.variable();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 189;
                        this.label();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 190;
                        this.register();
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
    agcParser.prototype.inte = function () {
        var _localctx = new InteContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, agcParser.RULE_inte);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(agcParser.INTE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.decimal = function () {
        var _localctx = new DecimalContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, agcParser.RULE_decimal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === agcParser.PLUS || _la === agcParser.MINUS) {
                    {
                        this.state = 195;
                        _la = this._input.LA(1);
                        if (!(_la === agcParser.PLUS || _la === agcParser.MINUS)) {
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
                this.state = 198;
                this.match(agcParser.DECIMAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    agcParser.prototype.register = function () {
        var _localctx = new RegisterContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, agcParser.RULE_register);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << agcParser.T__3) | (1 << agcParser.T__4) | (1 << agcParser.T__5) | (1 << agcParser.T__6) | (1 << agcParser.T__7) | (1 << agcParser.T__8) | (1 << agcParser.T__9) | (1 << agcParser.T__10) | (1 << agcParser.T__11) | (1 << agcParser.T__12) | (1 << agcParser.T__13) | (1 << agcParser.T__14) | (1 << agcParser.T__15) | (1 << agcParser.T__16) | (1 << agcParser.T__17) | (1 << agcParser.T__18) | (1 << agcParser.T__19) | (1 << agcParser.T__20) | (1 << agcParser.T__21) | (1 << agcParser.T__22) | (1 << agcParser.T__23) | (1 << agcParser.T__24) | (1 << agcParser.T__25) | (1 << agcParser.T__26) | (1 << agcParser.T__27) | (1 << agcParser.T__28) | (1 << agcParser.T__29) | (1 << agcParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (agcParser.T__31 - 32)) | (1 << (agcParser.T__32 - 32)) | (1 << (agcParser.T__33 - 32)) | (1 << (agcParser.T__34 - 32)) | (1 << (agcParser.T__35 - 32)) | (1 << (agcParser.T__36 - 32)) | (1 << (agcParser.T__37 - 32)) | (1 << (agcParser.T__38 - 32)) | (1 << (agcParser.T__39 - 32)) | (1 << (agcParser.T__40 - 32)) | (1 << (agcParser.T__41 - 32)) | (1 << (agcParser.T__42 - 32)) | (1 << (agcParser.T__43 - 32)) | (1 << (agcParser.T__44 - 32)) | (1 << (agcParser.T__45 - 32)) | (1 << (agcParser.T__46 - 32)) | (1 << (agcParser.T__47 - 32)) | (1 << (agcParser.T__48 - 32)) | (1 << (agcParser.T__49 - 32)) | (1 << (agcParser.T__50 - 32)) | (1 << (agcParser.T__51 - 32)))) !== 0))) {
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
    agcParser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, agcParser.RULE_opcode);
        try {
            this.state = 205;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case agcParser.T__82:
                case agcParser.T__83:
                case agcParser.T__84:
                case agcParser.T__85:
                case agcParser.T__86:
                case agcParser.T__87:
                case agcParser.T__88:
                case agcParser.T__89:
                case agcParser.T__90:
                case agcParser.T__91:
                case agcParser.T__92:
                case agcParser.T__93:
                case agcParser.T__94:
                case agcParser.T__95:
                case agcParser.T__96:
                case agcParser.T__97:
                case agcParser.T__98:
                case agcParser.T__99:
                case agcParser.T__100:
                case agcParser.T__101:
                case agcParser.T__102:
                case agcParser.T__103:
                case agcParser.T__104:
                case agcParser.T__105:
                case agcParser.T__106:
                case agcParser.T__107:
                case agcParser.T__108:
                case agcParser.T__109:
                case agcParser.T__110:
                case agcParser.T__111:
                case agcParser.T__112:
                case agcParser.T__113:
                case agcParser.T__114:
                case agcParser.T__115:
                case agcParser.T__116:
                case agcParser.T__117:
                case agcParser.T__118:
                case agcParser.T__119:
                case agcParser.T__120:
                case agcParser.T__121:
                case agcParser.T__122:
                case agcParser.T__123:
                case agcParser.T__124:
                case agcParser.T__125:
                case agcParser.T__126:
                case agcParser.T__127:
                case agcParser.T__128:
                case agcParser.T__129:
                case agcParser.T__130:
                case agcParser.T__131:
                case agcParser.T__132:
                case agcParser.T__133:
                case agcParser.T__134:
                case agcParser.T__135:
                case agcParser.T__136:
                case agcParser.T__137:
                case agcParser.T__138:
                case agcParser.T__139:
                case agcParser.T__140:
                case agcParser.T__141:
                case agcParser.T__142:
                case agcParser.T__143:
                case agcParser.T__144:
                case agcParser.T__145:
                case agcParser.T__146:
                case agcParser.T__147:
                case agcParser.T__148:
                case agcParser.T__149:
                case agcParser.T__150:
                case agcParser.T__151:
                case agcParser.T__152:
                case agcParser.T__153:
                case agcParser.T__154:
                case agcParser.T__155:
                case agcParser.T__156:
                case agcParser.T__157:
                case agcParser.T__158:
                case agcParser.T__159:
                case agcParser.T__160:
                case agcParser.T__161:
                case agcParser.T__162:
                case agcParser.T__163:
                case agcParser.T__164:
                case agcParser.T__165:
                case agcParser.T__166:
                case agcParser.T__167:
                case agcParser.T__168:
                case agcParser.T__169:
                case agcParser.T__170:
                case agcParser.T__171:
                case agcParser.T__172:
                case agcParser.T__173:
                case agcParser.T__174:
                case agcParser.T__175:
                case agcParser.T__176:
                case agcParser.T__177:
                case agcParser.T__178:
                case agcParser.T__179:
                case agcParser.T__180:
                case agcParser.T__181:
                case agcParser.T__182:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 202;
                        this.standard_opcode();
                    }
                    break;
                case agcParser.T__54:
                case agcParser.T__55:
                case agcParser.T__56:
                case agcParser.T__57:
                case agcParser.T__58:
                case agcParser.T__59:
                case agcParser.T__60:
                case agcParser.T__61:
                case agcParser.T__62:
                case agcParser.T__63:
                case agcParser.T__64:
                case agcParser.T__65:
                case agcParser.T__66:
                case agcParser.T__67:
                case agcParser.T__68:
                case agcParser.T__69:
                case agcParser.T__70:
                case agcParser.T__71:
                case agcParser.T__72:
                case agcParser.T__73:
                case agcParser.T__74:
                case agcParser.T__75:
                case agcParser.T__76:
                case agcParser.T__77:
                case agcParser.T__78:
                case agcParser.T__79:
                case agcParser.T__80:
                case agcParser.T__81:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 203;
                        this.pseudo_opcode();
                    }
                    break;
                case agcParser.T__52:
                case agcParser.T__53:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 204;
                        this.axt_opcode();
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
    agcParser.prototype.axt_opcode = function () {
        var _localctx = new Axt_opcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, agcParser.RULE_axt_opcode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                _la = this._input.LA(1);
                if (!(_la === agcParser.T__52 || _la === agcParser.T__53)) {
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
    agcParser.prototype.pseudo_opcode = function () {
        var _localctx = new Pseudo_opcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, agcParser.RULE_pseudo_opcode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                _la = this._input.LA(1);
                if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (agcParser.T__54 - 55)) | (1 << (agcParser.T__55 - 55)) | (1 << (agcParser.T__56 - 55)) | (1 << (agcParser.T__57 - 55)) | (1 << (agcParser.T__58 - 55)) | (1 << (agcParser.T__59 - 55)) | (1 << (agcParser.T__60 - 55)) | (1 << (agcParser.T__61 - 55)) | (1 << (agcParser.T__62 - 55)) | (1 << (agcParser.T__63 - 55)) | (1 << (agcParser.T__64 - 55)) | (1 << (agcParser.T__65 - 55)) | (1 << (agcParser.T__66 - 55)) | (1 << (agcParser.T__67 - 55)) | (1 << (agcParser.T__68 - 55)) | (1 << (agcParser.T__69 - 55)) | (1 << (agcParser.T__70 - 55)) | (1 << (agcParser.T__71 - 55)) | (1 << (agcParser.T__72 - 55)) | (1 << (agcParser.T__73 - 55)) | (1 << (agcParser.T__74 - 55)) | (1 << (agcParser.T__75 - 55)) | (1 << (agcParser.T__76 - 55)) | (1 << (agcParser.T__77 - 55)) | (1 << (agcParser.T__78 - 55)) | (1 << (agcParser.T__79 - 55)) | (1 << (agcParser.T__80 - 55)) | (1 << (agcParser.T__81 - 55)))) !== 0))) {
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
    agcParser.prototype.standard_opcode = function () {
        var _localctx = new Standard_opcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, agcParser.RULE_standard_opcode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                _la = this._input.LA(1);
                if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (agcParser.T__82 - 83)) | (1 << (agcParser.T__83 - 83)) | (1 << (agcParser.T__84 - 83)) | (1 << (agcParser.T__85 - 83)) | (1 << (agcParser.T__86 - 83)) | (1 << (agcParser.T__87 - 83)) | (1 << (agcParser.T__88 - 83)) | (1 << (agcParser.T__89 - 83)) | (1 << (agcParser.T__90 - 83)) | (1 << (agcParser.T__91 - 83)) | (1 << (agcParser.T__92 - 83)) | (1 << (agcParser.T__93 - 83)) | (1 << (agcParser.T__94 - 83)) | (1 << (agcParser.T__95 - 83)) | (1 << (agcParser.T__96 - 83)) | (1 << (agcParser.T__97 - 83)) | (1 << (agcParser.T__98 - 83)) | (1 << (agcParser.T__99 - 83)) | (1 << (agcParser.T__100 - 83)) | (1 << (agcParser.T__101 - 83)) | (1 << (agcParser.T__102 - 83)) | (1 << (agcParser.T__103 - 83)) | (1 << (agcParser.T__104 - 83)) | (1 << (agcParser.T__105 - 83)) | (1 << (agcParser.T__106 - 83)) | (1 << (agcParser.T__107 - 83)) | (1 << (agcParser.T__108 - 83)) | (1 << (agcParser.T__109 - 83)) | (1 << (agcParser.T__110 - 83)) | (1 << (agcParser.T__111 - 83)) | (1 << (agcParser.T__112 - 83)) | (1 << (agcParser.T__113 - 83)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (agcParser.T__114 - 115)) | (1 << (agcParser.T__115 - 115)) | (1 << (agcParser.T__116 - 115)) | (1 << (agcParser.T__117 - 115)) | (1 << (agcParser.T__118 - 115)) | (1 << (agcParser.T__119 - 115)) | (1 << (agcParser.T__120 - 115)) | (1 << (agcParser.T__121 - 115)) | (1 << (agcParser.T__122 - 115)) | (1 << (agcParser.T__123 - 115)) | (1 << (agcParser.T__124 - 115)) | (1 << (agcParser.T__125 - 115)) | (1 << (agcParser.T__126 - 115)) | (1 << (agcParser.T__127 - 115)) | (1 << (agcParser.T__128 - 115)) | (1 << (agcParser.T__129 - 115)) | (1 << (agcParser.T__130 - 115)) | (1 << (agcParser.T__131 - 115)) | (1 << (agcParser.T__132 - 115)) | (1 << (agcParser.T__133 - 115)) | (1 << (agcParser.T__134 - 115)) | (1 << (agcParser.T__135 - 115)) | (1 << (agcParser.T__136 - 115)) | (1 << (agcParser.T__137 - 115)) | (1 << (agcParser.T__138 - 115)) | (1 << (agcParser.T__139 - 115)) | (1 << (agcParser.T__140 - 115)) | (1 << (agcParser.T__141 - 115)) | (1 << (agcParser.T__142 - 115)) | (1 << (agcParser.T__143 - 115)) | (1 << (agcParser.T__144 - 115)) | (1 << (agcParser.T__145 - 115)))) !== 0) || ((((_la - 147)) & ~0x1F) === 0 && ((1 << (_la - 147)) & ((1 << (agcParser.T__146 - 147)) | (1 << (agcParser.T__147 - 147)) | (1 << (agcParser.T__148 - 147)) | (1 << (agcParser.T__149 - 147)) | (1 << (agcParser.T__150 - 147)) | (1 << (agcParser.T__151 - 147)) | (1 << (agcParser.T__152 - 147)) | (1 << (agcParser.T__153 - 147)) | (1 << (agcParser.T__154 - 147)) | (1 << (agcParser.T__155 - 147)) | (1 << (agcParser.T__156 - 147)) | (1 << (agcParser.T__157 - 147)) | (1 << (agcParser.T__158 - 147)) | (1 << (agcParser.T__159 - 147)) | (1 << (agcParser.T__160 - 147)) | (1 << (agcParser.T__161 - 147)) | (1 << (agcParser.T__162 - 147)) | (1 << (agcParser.T__163 - 147)) | (1 << (agcParser.T__164 - 147)) | (1 << (agcParser.T__165 - 147)) | (1 << (agcParser.T__166 - 147)) | (1 << (agcParser.T__167 - 147)) | (1 << (agcParser.T__168 - 147)) | (1 << (agcParser.T__169 - 147)) | (1 << (agcParser.T__170 - 147)) | (1 << (agcParser.T__171 - 147)) | (1 << (agcParser.T__172 - 147)) | (1 << (agcParser.T__173 - 147)) | (1 << (agcParser.T__174 - 147)) | (1 << (agcParser.T__175 - 147)) | (1 << (agcParser.T__176 - 147)) | (1 << (agcParser.T__177 - 147)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (agcParser.T__178 - 179)) | (1 << (agcParser.T__179 - 179)) | (1 << (agcParser.T__180 - 179)) | (1 << (agcParser.T__181 - 179)) | (1 << (agcParser.T__182 - 179)))) !== 0))) {
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
    Object.defineProperty(agcParser, "_ATN", {
        get: function () {
            if (!agcParser.__ATN) {
                agcParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(agcParser._serializedATN));
            }
            return agcParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    agcParser.T__0 = 1;
    agcParser.T__1 = 2;
    agcParser.T__2 = 3;
    agcParser.T__3 = 4;
    agcParser.T__4 = 5;
    agcParser.T__5 = 6;
    agcParser.T__6 = 7;
    agcParser.T__7 = 8;
    agcParser.T__8 = 9;
    agcParser.T__9 = 10;
    agcParser.T__10 = 11;
    agcParser.T__11 = 12;
    agcParser.T__12 = 13;
    agcParser.T__13 = 14;
    agcParser.T__14 = 15;
    agcParser.T__15 = 16;
    agcParser.T__16 = 17;
    agcParser.T__17 = 18;
    agcParser.T__18 = 19;
    agcParser.T__19 = 20;
    agcParser.T__20 = 21;
    agcParser.T__21 = 22;
    agcParser.T__22 = 23;
    agcParser.T__23 = 24;
    agcParser.T__24 = 25;
    agcParser.T__25 = 26;
    agcParser.T__26 = 27;
    agcParser.T__27 = 28;
    agcParser.T__28 = 29;
    agcParser.T__29 = 30;
    agcParser.T__30 = 31;
    agcParser.T__31 = 32;
    agcParser.T__32 = 33;
    agcParser.T__33 = 34;
    agcParser.T__34 = 35;
    agcParser.T__35 = 36;
    agcParser.T__36 = 37;
    agcParser.T__37 = 38;
    agcParser.T__38 = 39;
    agcParser.T__39 = 40;
    agcParser.T__40 = 41;
    agcParser.T__41 = 42;
    agcParser.T__42 = 43;
    agcParser.T__43 = 44;
    agcParser.T__44 = 45;
    agcParser.T__45 = 46;
    agcParser.T__46 = 47;
    agcParser.T__47 = 48;
    agcParser.T__48 = 49;
    agcParser.T__49 = 50;
    agcParser.T__50 = 51;
    agcParser.T__51 = 52;
    agcParser.T__52 = 53;
    agcParser.T__53 = 54;
    agcParser.T__54 = 55;
    agcParser.T__55 = 56;
    agcParser.T__56 = 57;
    agcParser.T__57 = 58;
    agcParser.T__58 = 59;
    agcParser.T__59 = 60;
    agcParser.T__60 = 61;
    agcParser.T__61 = 62;
    agcParser.T__62 = 63;
    agcParser.T__63 = 64;
    agcParser.T__64 = 65;
    agcParser.T__65 = 66;
    agcParser.T__66 = 67;
    agcParser.T__67 = 68;
    agcParser.T__68 = 69;
    agcParser.T__69 = 70;
    agcParser.T__70 = 71;
    agcParser.T__71 = 72;
    agcParser.T__72 = 73;
    agcParser.T__73 = 74;
    agcParser.T__74 = 75;
    agcParser.T__75 = 76;
    agcParser.T__76 = 77;
    agcParser.T__77 = 78;
    agcParser.T__78 = 79;
    agcParser.T__79 = 80;
    agcParser.T__80 = 81;
    agcParser.T__81 = 82;
    agcParser.T__82 = 83;
    agcParser.T__83 = 84;
    agcParser.T__84 = 85;
    agcParser.T__85 = 86;
    agcParser.T__86 = 87;
    agcParser.T__87 = 88;
    agcParser.T__88 = 89;
    agcParser.T__89 = 90;
    agcParser.T__90 = 91;
    agcParser.T__91 = 92;
    agcParser.T__92 = 93;
    agcParser.T__93 = 94;
    agcParser.T__94 = 95;
    agcParser.T__95 = 96;
    agcParser.T__96 = 97;
    agcParser.T__97 = 98;
    agcParser.T__98 = 99;
    agcParser.T__99 = 100;
    agcParser.T__100 = 101;
    agcParser.T__101 = 102;
    agcParser.T__102 = 103;
    agcParser.T__103 = 104;
    agcParser.T__104 = 105;
    agcParser.T__105 = 106;
    agcParser.T__106 = 107;
    agcParser.T__107 = 108;
    agcParser.T__108 = 109;
    agcParser.T__109 = 110;
    agcParser.T__110 = 111;
    agcParser.T__111 = 112;
    agcParser.T__112 = 113;
    agcParser.T__113 = 114;
    agcParser.T__114 = 115;
    agcParser.T__115 = 116;
    agcParser.T__116 = 117;
    agcParser.T__117 = 118;
    agcParser.T__118 = 119;
    agcParser.T__119 = 120;
    agcParser.T__120 = 121;
    agcParser.T__121 = 122;
    agcParser.T__122 = 123;
    agcParser.T__123 = 124;
    agcParser.T__124 = 125;
    agcParser.T__125 = 126;
    agcParser.T__126 = 127;
    agcParser.T__127 = 128;
    agcParser.T__128 = 129;
    agcParser.T__129 = 130;
    agcParser.T__130 = 131;
    agcParser.T__131 = 132;
    agcParser.T__132 = 133;
    agcParser.T__133 = 134;
    agcParser.T__134 = 135;
    agcParser.T__135 = 136;
    agcParser.T__136 = 137;
    agcParser.T__137 = 138;
    agcParser.T__138 = 139;
    agcParser.T__139 = 140;
    agcParser.T__140 = 141;
    agcParser.T__141 = 142;
    agcParser.T__142 = 143;
    agcParser.T__143 = 144;
    agcParser.T__144 = 145;
    agcParser.T__145 = 146;
    agcParser.T__146 = 147;
    agcParser.T__147 = 148;
    agcParser.T__148 = 149;
    agcParser.T__149 = 150;
    agcParser.T__150 = 151;
    agcParser.T__151 = 152;
    agcParser.T__152 = 153;
    agcParser.T__153 = 154;
    agcParser.T__154 = 155;
    agcParser.T__155 = 156;
    agcParser.T__156 = 157;
    agcParser.T__157 = 158;
    agcParser.T__158 = 159;
    agcParser.T__159 = 160;
    agcParser.T__160 = 161;
    agcParser.T__161 = 162;
    agcParser.T__162 = 163;
    agcParser.T__163 = 164;
    agcParser.T__164 = 165;
    agcParser.T__165 = 166;
    agcParser.T__166 = 167;
    agcParser.T__167 = 168;
    agcParser.T__168 = 169;
    agcParser.T__169 = 170;
    agcParser.T__170 = 171;
    agcParser.T__171 = 172;
    agcParser.T__172 = 173;
    agcParser.T__173 = 174;
    agcParser.T__174 = 175;
    agcParser.T__175 = 176;
    agcParser.T__176 = 177;
    agcParser.T__177 = 178;
    agcParser.T__178 = 179;
    agcParser.T__179 = 180;
    agcParser.T__180 = 181;
    agcParser.T__181 = 182;
    agcParser.T__182 = 183;
    agcParser.LABEL = 184;
    agcParser.INTE = 185;
    agcParser.DECIMAL = 186;
    agcParser.COMMENT = 187;
    agcParser.PLUS = 188;
    agcParser.MINUS = 189;
    agcParser.TIMES = 190;
    agcParser.DIV = 191;
    agcParser.COMMA = 192;
    agcParser.LPAREN = 193;
    agcParser.RPAREN = 194;
    agcParser.EOL = 195;
    agcParser.WS = 196;
    agcParser.RULE_prog = 0;
    agcParser.RULE_line = 1;
    agcParser.RULE_blank_line = 2;
    agcParser.RULE_comment_line = 3;
    agcParser.RULE_instruction_line = 4;
    agcParser.RULE_erase_line = 5;
    agcParser.RULE_assignment_line = 6;
    agcParser.RULE_opcodes = 7;
    agcParser.RULE_argument = 8;
    agcParser.RULE_ws = 9;
    agcParser.RULE_eol = 10;
    agcParser.RULE_comment = 11;
    agcParser.RULE_label = 12;
    agcParser.RULE_variable = 13;
    agcParser.RULE_expression = 14;
    agcParser.RULE_multiplyingExpression = 15;
    agcParser.RULE_atom = 16;
    agcParser.RULE_inte = 17;
    agcParser.RULE_decimal = 18;
    agcParser.RULE_register = 19;
    agcParser.RULE_opcode = 20;
    agcParser.RULE_axt_opcode = 21;
    agcParser.RULE_pseudo_opcode = 22;
    agcParser.RULE_standard_opcode = 23;
    // tslint:disable:no-trailing-whitespace
    agcParser.ruleNames = [
        "prog", "line", "blank_line", "comment_line", "instruction_line", "erase_line",
        "assignment_line", "opcodes", "argument", "ws", "eol", "comment", "label",
        "variable", "expression", "multiplyingExpression", "atom", "inte", "decimal",
        "register", "opcode", "axt_opcode", "pseudo_opcode", "standard_opcode",
    ];
    agcParser._LITERAL_NAMES = [
        undefined, "'ERASE'", "'='", "'EQUALS'", "'A'", "'L'", "'Q'", "'EB'",
        "'FB'", "'Z'", "'BB'", "'ARUPT'", "'LRUPT'", "'QRUPT'", "'BBRUPT'", "'BRUPT'",
        "'CYR'", "'SR'", "'CYL'", "'EDOP'", "'TIME2'", "'TIME1'", "'TIME3'", "'TIME4'",
        "'TIME5'", "'TIME6'", "'CDUX'", "'CDUY'", "'CDUZ'", "'OPTY'", "'OPTX'",
        "'PIPAX'", "'PIPAY'", "'PIPAZ'", "'Q-RHCCTR'", "'RHCP'", "'P-RHCCTR'",
        "'RHCY'", "'R-RHCCTR'", "'RHCR'", "'INLINK'", "'RNRAD'", "'GYROCTR'",
        "'GYROCMD'", "'CDUXCMD'", "'CDUYCMD'", "'CDUZCMD'", "'OPTYCMD'", "'OPTXCMD'",
        "'THRUST'", "'LEMONM'", "'OUTLINK'", "'ALTM'", "'AXT,1'", "'AXT,2'", "'1DNADR'",
        "'2DNADR'", "'3DNADR'", "'4DNADR'", "'5DNADR'", "'6DNADR'", "'DNCHAN'",
        "'DNPTR'", "'-1DNADR'", "'-2DNADR'", "'-3DNADR'", "'-4DNADR'", "'-5DNADR'",
        "'-6DNADR'", "'-DNCHAN'", "'-DNPTR'", "'2DEC'", "'2DEC*'", "'2FCADR'",
        "'BANK'", "'BLOCK'", "'BNKSUM'", "'COUNT'", "'COUNT*'", "'DEC'", "'OCT'",
        "'SETLOC'", "'SUBRO'", "'TC'", "'TCR'", "'CCS'", "'TCF'", "'DAS'", "'LXCH'",
        "'INCR'", "'AD'", "'ADS'", "'CA'", "'CS'", "'INDEX'", "'DXCH'", "'TS'",
        "'XCH'", "'MASK'", "'MSK'", "'READ'", "'WRITE'", "'RAND'", "'WAND'", "'ROR'",
        "'WOR'", "'RXOR'", "'EDRUPT'", "'BZF'", "'MSU'", "'QXCH'", "'AUG'", "'DIM'",
        "'DCA'", "'DCS'", "'SU'", "'BZMF'", "'MP'", "'XXALQ'", "'XLQ'", "'RETURN'",
        "'RELINT'", "'INHINT'", "'EXTEND'", "'NOOP'", "'DDOUBL'", "'DTCF'", "'COM'",
        "'ZL'", "'RESUME'", "'DTCB'", "'OVSK'", "'TCAA'", "'DOUBLE'", "'ZQ'",
        "'DCOM'", "'SQUARE'", "'PINC'", "'PCDU'", "'MINC'", "'MCDU'", "'DINC'",
        "'SHINC'", "'SHANC'", "'INOTRD'", "'INOTLD'", "'FETCH'", "'STORE'", "'GOJ'",
        "'TCSAJ'", "'CAF'", "'CAE'", "'CADR'", "'DMOVE'", "'VMOVE'", "'SMOVE'",
        "'DSU'", "'RTB'", "'ITC'", "'NOLOD'", "'EXIT'", "'BPL'", "'SIN'", "'COS'",
        "'CAD'", "'TEST'", "'VXSC'", "'DAD'", "'VXV'", "'VAD'", "'DMP'", "'BOV'",
        "'UNIT'", "'OCTAL'", "'ADRES'", "'ABVAL'", "'COMP'", "'DV'", "'NDX'",
        "'POUT'", "'MOUT'", "'ZOUT'", "'LODON'", "'TSLT'", undefined, undefined,
        undefined, undefined, "'+'", "'-'", "'*'", "'/'", "','", "'('", "')'",
    ];
    agcParser._SYMBOLIC_NAMES = [
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
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "LABEL", "INTE", "DECIMAL", "COMMENT", "PLUS", "MINUS",
        "TIMES", "DIV", "COMMA", "LPAREN", "RPAREN", "EOL", "WS",
    ];
    agcParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(agcParser._LITERAL_NAMES, agcParser._SYMBOLIC_NAMES, []);
    agcParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC6\xD8\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x03\x02\x06\x024\n\x02\r\x02\x0E\x025\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03=\n\x03\x03\x04\x05\x04@\n\x04" +
        "\x03\x04\x03\x04\x03\x05\x05\x05E\n\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
        "\x05\x06K\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06R\n\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06X\n\x06\f\x06\x0E\x06[\v\x06\x03" +
        "\x06\x03\x06\x03\x07\x05\x07`\n\x07\x03\x07\x03\x07\x03\x07\x05\x07e\n" +
        "\x07\x03\x07\x07\x07h\n\x07\f\x07\x0E\x07k\v\x07\x03\x07\x03\x07\x03\x07" +
        "\x05\x07p\n\x07\x03\x07\x03\x07\x03\b\x03\b\x05\bv\n\b\x03\b\x03\b\x05" +
        "\bz\n\b\x03\b\x07\b}\n\b\f\b\x0E\b\x80\v\b\x03\b\x03\b\x03\b\x05\b\x85" +
        "\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t\x8D\n\t\x03\n\x03\n\x03" +
        "\n\x07\n\x92\n\n\f\n\x0E\n\x95\v\n\x03\n\x03\n\x03\n\x05\n\x9A\n\n\x03" +
        "\v\x03\v\x03\f\x05\f\x9F\n\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAB\n\x0F\x03\x10\x03\x10\x03\x10" +
        "\x07\x10\xB0\n\x10\f\x10\x0E\x10\xB3\v\x10\x03\x11\x03\x11\x03\x11\x07" +
        "\x11\xB8\n\x11\f\x11\x0E\x11\xBB\v\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x05\x12\xC2\n\x12\x03\x13\x03\x13\x03\x14\x05\x14\xC7\n\x14\x03" +
        "\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\xD0\n\x16" +
        "\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x02\x02\x02\x1A" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x02\x02\t\x03\x02\x04\x05\x03\x02\xBE\xBF\x03\x02\xC0" +
        "\xC1\x03\x02\x066\x03\x0278\x03\x029T\x03\x02U\xB9\x02\xDF\x023\x03\x02" +
        "\x02\x02\x04<\x03\x02\x02\x02\x06?\x03\x02\x02\x02\bD\x03\x02\x02\x02" +
        "\nJ\x03\x02\x02\x02\f_\x03\x02\x02\x02\x0Es\x03\x02\x02\x02\x10\x88\x03" +
        "\x02\x02\x02\x12\x93\x03\x02\x02\x02\x14\x9B\x03\x02\x02\x02\x16\x9E\x03" +
        "\x02\x02\x02\x18\xA2\x03\x02\x02\x02\x1A\xA4\x03\x02\x02\x02\x1C\xAA\x03" +
        "\x02\x02\x02\x1E\xAC\x03\x02\x02\x02 \xB4\x03\x02\x02\x02\"\xC1\x03\x02" +
        "\x02\x02$\xC3\x03\x02\x02\x02&\xC6\x03\x02\x02\x02(\xCA\x03\x02\x02\x02" +
        "*\xCF\x03\x02\x02\x02,\xD1\x03\x02\x02\x02.\xD3\x03\x02\x02\x020\xD5\x03" +
        "\x02\x02\x0224\x05\x04\x03\x0232\x03\x02\x02\x0245\x03\x02\x02\x0253\x03" +
        "\x02\x02\x0256\x03\x02\x02\x026\x03\x03\x02\x02\x027=\x05\b\x05\x028=" +
        "\x05\x06\x04\x029=\x05\n\x06\x02:=\x05\f\x07\x02;=\x05\x0E\b\x02<7\x03" +
        "\x02\x02\x02<8\x03\x02\x02\x02<9\x03\x02\x02\x02<:\x03\x02\x02\x02<;\x03" +
        "\x02\x02\x02=\x05\x03\x02\x02\x02>@\x05\x1A\x0E\x02?>\x03\x02\x02\x02" +
        "?@\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x05\x16\f\x02B\x07\x03\x02\x02" +
        "\x02CE\x05\x14\v\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x03\x02\x02" +
        "\x02FG\x05\x18\r\x02GH\x05\x16\f\x02H\t\x03\x02\x02\x02IK\x05\x1A\x0E" +
        "\x02JI\x03\x02\x02\x02JK\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x05\x14\v" +
        "\x02MQ\x05\x10\t\x02NO\x05\x16\f\x02OP\x05\b\x05\x02PR\x03\x02\x02\x02" +
        "QN\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02SY\x05\x12\n\x02" +
        "TU\x05\x16\f\x02UV\x05\x12\n\x02VX\x03\x02\x02\x02WT\x03\x02\x02\x02X" +
        "[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02" +
        "[Y\x03\x02\x02\x02\\]\x05\x16\f\x02]\v\x03\x02\x02\x02^`\x05\x1C\x0F\x02" +
        "_^\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x05\x14\v\x02" +
        "bi\x07\x03\x02\x02ce\x05\x14\v\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02" +
        "ef\x03\x02\x02\x02fh\x05\x1E\x10\x02gd\x03\x02\x02\x02hk\x03\x02\x02\x02" +
        "ig\x03\x02\x02\x02ij\x03\x02\x02\x02jo\x03\x02\x02\x02ki\x03\x02\x02\x02" +
        "lm\x05\x14\v\x02mn\x05\x18\r\x02np\x03\x02\x02\x02ol\x03\x02\x02\x02o" +
        "p\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x05\x16\f\x02r\r\x03\x02\x02\x02" +
        "su\x05\x1C\x0F\x02tv\x05\x14\v\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02" +
        "vw\x03\x02\x02\x02w~\t\x02\x02\x02xz\x05\x14\v\x02yx\x03\x02\x02\x02y" +
        "z\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x05\x1E\x10\x02|y\x03\x02\x02\x02" +
        "}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x84\x03" +
        "\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x82\x05\x14\v\x02\x82\x83\x05\x18" +
        "\r\x02\x83\x85\x03\x02\x02\x02\x84\x81\x03\x02\x02\x02\x84\x85\x03\x02" +
        "\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x05\x16\f\x02\x87\x0F\x03\x02" +
        "\x02\x02\x88\x8C\x05*\x16\x02\x89\x8A\x05\x14\v\x02\x8A\x8B\x05*\x16\x02" +
        "\x8B\x8D\x03\x02\x02\x02\x8C\x89\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02" +
        "\x8D\x11\x03\x02\x02\x02\x8E\x8F\x05\x14\v\x02\x8F\x90\x05\x1E\x10\x02" +
        "\x90\x92\x03\x02\x02\x02\x91\x8E\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02" +
        "\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x99\x03\x02\x02\x02" +
        "\x95\x93\x03\x02\x02\x02\x96\x97\x05\x14\v\x02\x97\x98\x05\x18\r\x02\x98" +
        "\x9A\x03\x02\x02\x02\x99\x96\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A" +
        "\x13\x03\x02\x02\x02\x9B\x9C\x07\xC6\x02\x02\x9C\x15\x03\x02\x02\x02\x9D" +
        "\x9F\x07\xC6\x02\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F" +
        "\xA0\x03\x02\x02\x02\xA0\xA1\x07\xC5\x02\x02\xA1\x17\x03\x02\x02\x02\xA2" +
        "\xA3\x07\xBD\x02\x02\xA3\x19\x03\x02\x02\x02\xA4\xA5\x07\xBA\x02\x02\xA5" +
        "\x1B\x03\x02\x02\x02\xA6\xAB\x07\xBA\x02\x02\xA7\xA8\x07\xC3\x02\x02\xA8" +
        "\xA9\x07\xBA\x02\x02\xA9\xAB\x07\xC4\x02\x02\xAA\xA6\x03\x02\x02\x02\xAA" +
        "\xA7\x03\x02\x02\x02\xAB\x1D\x03\x02\x02\x02\xAC\xB1\x05 \x11\x02\xAD" +
        "\xAE\t\x03\x02\x02\xAE\xB0\x05 \x11\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB3" +
        "\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\x1F" +
        "\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB9\x05\"\x12\x02\xB5\xB6" +
        "\t\x04\x02\x02\xB6\xB8\x05\"\x12\x02\xB7\xB5\x03\x02\x02\x02\xB8\xBB\x03" +
        "\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA!\x03" +
        "\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xC2\x05$\x13\x02\xBD\xC2\x05" +
        "&\x14\x02\xBE\xC2\x05\x1C\x0F\x02\xBF\xC2\x05\x1A\x0E\x02\xC0\xC2\x05" +
        "(\x15\x02\xC1\xBC\x03\x02\x02\x02\xC1\xBD\x03\x02\x02\x02\xC1\xBE\x03" +
        "\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2#\x03" +
        "\x02\x02\x02\xC3\xC4\x07\xBB\x02\x02\xC4%\x03\x02\x02\x02\xC5\xC7\t\x03" +
        "\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02" +
        "\x02\x02\xC8\xC9\x07\xBC\x02\x02\xC9\'\x03\x02\x02\x02\xCA\xCB\t\x05\x02" +
        "\x02\xCB)\x03\x02\x02\x02\xCC\xD0\x050\x19\x02\xCD\xD0\x05.\x18\x02\xCE" +
        "\xD0\x05,\x17\x02\xCF\xCC\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF" +
        "\xCE\x03\x02\x02\x02\xD0+\x03\x02\x02\x02\xD1\xD2\t\x06\x02\x02\xD2-\x03" +
        "\x02\x02\x02\xD3\xD4\t\x07\x02\x02\xD4/\x03\x02\x02\x02\xD5\xD6\t\b\x02" +
        "\x02\xD61\x03\x02\x02\x02\x1B5<?DJQY_diouy~\x84\x8C\x93\x99\x9E\xAA\xB1" +
        "\xB9\xC1\xC6\xCF";
    return agcParser;
}(Parser_1.Parser));
exports.agcParser = agcParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_prog; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgContext.prototype.enterRule = function (listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    };
    // @Override
    ProgContext.prototype.exitRule = function (listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    };
    // @Override
    ProgContext.prototype.accept = function (visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgContext = ProgContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.comment_line = function () {
        return this.tryGetRuleContext(0, Comment_lineContext);
    };
    LineContext.prototype.blank_line = function () {
        return this.tryGetRuleContext(0, Blank_lineContext);
    };
    LineContext.prototype.instruction_line = function () {
        return this.tryGetRuleContext(0, Instruction_lineContext);
    };
    LineContext.prototype.erase_line = function () {
        return this.tryGetRuleContext(0, Erase_lineContext);
    };
    LineContext.prototype.assignment_line = function () {
        return this.tryGetRuleContext(0, Assignment_lineContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var Blank_lineContext = /** @class */ (function (_super) {
    __extends(Blank_lineContext, _super);
    function Blank_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Blank_lineContext.prototype.eol = function () {
        return this.getRuleContext(0, EolContext);
    };
    Blank_lineContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    Object.defineProperty(Blank_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_blank_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Blank_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterBlank_line) {
            listener.enterBlank_line(this);
        }
    };
    // @Override
    Blank_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitBlank_line) {
            listener.exitBlank_line(this);
        }
    };
    // @Override
    Blank_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitBlank_line) {
            return visitor.visitBlank_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Blank_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Blank_lineContext = Blank_lineContext;
var Comment_lineContext = /** @class */ (function (_super) {
    __extends(Comment_lineContext, _super);
    function Comment_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comment_lineContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    Comment_lineContext.prototype.eol = function () {
        return this.getRuleContext(0, EolContext);
    };
    Comment_lineContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    Object.defineProperty(Comment_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_comment_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comment_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterComment_line) {
            listener.enterComment_line(this);
        }
    };
    // @Override
    Comment_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitComment_line) {
            listener.exitComment_line(this);
        }
    };
    // @Override
    Comment_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitComment_line) {
            return visitor.visitComment_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comment_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comment_lineContext = Comment_lineContext;
var Instruction_lineContext = /** @class */ (function (_super) {
    __extends(Instruction_lineContext, _super);
    function Instruction_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Instruction_lineContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    Instruction_lineContext.prototype.opcodes = function () {
        return this.getRuleContext(0, OpcodesContext);
    };
    Instruction_lineContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Instruction_lineContext.prototype.eol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }
        else {
            return this.getRuleContext(i, EolContext);
        }
    };
    Instruction_lineContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    Instruction_lineContext.prototype.comment_line = function () {
        return this.tryGetRuleContext(0, Comment_lineContext);
    };
    Object.defineProperty(Instruction_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_instruction_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Instruction_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterInstruction_line) {
            listener.enterInstruction_line(this);
        }
    };
    // @Override
    Instruction_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitInstruction_line) {
            listener.exitInstruction_line(this);
        }
    };
    // @Override
    Instruction_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitInstruction_line) {
            return visitor.visitInstruction_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Instruction_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Instruction_lineContext = Instruction_lineContext;
var Erase_lineContext = /** @class */ (function (_super) {
    __extends(Erase_lineContext, _super);
    function Erase_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Erase_lineContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Erase_lineContext.prototype.eol = function () {
        return this.getRuleContext(0, EolContext);
    };
    Erase_lineContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    Erase_lineContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Erase_lineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(Erase_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_erase_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Erase_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterErase_line) {
            listener.enterErase_line(this);
        }
    };
    // @Override
    Erase_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitErase_line) {
            listener.exitErase_line(this);
        }
    };
    // @Override
    Erase_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitErase_line) {
            return visitor.visitErase_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Erase_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Erase_lineContext = Erase_lineContext;
var Assignment_lineContext = /** @class */ (function (_super) {
    __extends(Assignment_lineContext, _super);
    function Assignment_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assignment_lineContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    Assignment_lineContext.prototype.eol = function () {
        return this.getRuleContext(0, EolContext);
    };
    Assignment_lineContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Assignment_lineContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Assignment_lineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(Assignment_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_assignment_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assignment_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment_line) {
            listener.enterAssignment_line(this);
        }
    };
    // @Override
    Assignment_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment_line) {
            listener.exitAssignment_line(this);
        }
    };
    // @Override
    Assignment_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment_line) {
            return visitor.visitAssignment_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assignment_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assignment_lineContext = Assignment_lineContext;
var OpcodesContext = /** @class */ (function (_super) {
    __extends(OpcodesContext, _super);
    function OpcodesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodesContext.prototype.opcode = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OpcodeContext);
        }
        else {
            return this.getRuleContext(i, OpcodeContext);
        }
    };
    OpcodesContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    Object.defineProperty(OpcodesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_opcodes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpcodesContext.prototype.enterRule = function (listener) {
        if (listener.enterOpcodes) {
            listener.enterOpcodes(this);
        }
    };
    // @Override
    OpcodesContext.prototype.exitRule = function (listener) {
        if (listener.exitOpcodes) {
            listener.exitOpcodes(this);
        }
    };
    // @Override
    OpcodesContext.prototype.accept = function (visitor) {
        if (visitor.visitOpcodes) {
            return visitor.visitOpcodes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpcodesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpcodesContext = OpcodesContext;
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    ArgumentContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ArgumentContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentContext = ArgumentContext;
var WsContext = /** @class */ (function (_super) {
    __extends(WsContext, _super);
    function WsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WsContext.prototype.WS = function () { return this.getToken(agcParser.WS, 0); };
    Object.defineProperty(WsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_ws; },
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
var EolContext = /** @class */ (function (_super) {
    __extends(EolContext, _super);
    function EolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EolContext.prototype.EOL = function () { return this.getToken(agcParser.EOL, 0); };
    EolContext.prototype.WS = function () { return this.tryGetToken(agcParser.WS, 0); };
    Object.defineProperty(EolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_eol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EolContext.prototype.enterRule = function (listener) {
        if (listener.enterEol) {
            listener.enterEol(this);
        }
    };
    // @Override
    EolContext.prototype.exitRule = function (listener) {
        if (listener.exitEol) {
            listener.exitEol(this);
        }
    };
    // @Override
    EolContext.prototype.accept = function (visitor) {
        if (visitor.visitEol) {
            return visitor.visitEol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EolContext = EolContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(agcParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentContext.prototype.enterRule = function (listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    };
    // @Override
    CommentContext.prototype.exitRule = function (listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    };
    // @Override
    CommentContext.prototype.accept = function (visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentContext = CommentContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.LABEL = function () { return this.getToken(agcParser.LABEL, 0); };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_label; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelContext.prototype.enterRule = function (listener) {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.exitRule = function (listener) {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.accept = function (visitor) {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelContext = LabelContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.LABEL = function () { return this.tryGetToken(agcParser.LABEL, 0); };
    VariableContext.prototype.LPAREN = function () { return this.tryGetToken(agcParser.LPAREN, 0); };
    VariableContext.prototype.RPAREN = function () { return this.tryGetToken(agcParser.RPAREN, 0); };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_variable; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.multiplyingExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplyingExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplyingExpressionContext);
        }
    };
    ExpressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(agcParser.PLUS);
        }
        else {
            return this.getToken(agcParser.PLUS, i);
        }
    };
    ExpressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(agcParser.MINUS);
        }
        else {
            return this.getToken(agcParser.MINUS, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_expression; },
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
var MultiplyingExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyingExpressionContext, _super);
    function MultiplyingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingExpressionContext.prototype.atom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    };
    MultiplyingExpressionContext.prototype.TIMES = function (i) {
        if (i === undefined) {
            return this.getTokens(agcParser.TIMES);
        }
        else {
            return this.getToken(agcParser.TIMES, i);
        }
    };
    MultiplyingExpressionContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(agcParser.DIV);
        }
        else {
            return this.getToken(agcParser.DIV, i);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_multiplyingExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplyingExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplyingExpression) {
            listener.enterMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplyingExpression) {
            listener.exitMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplyingExpression) {
            return visitor.visitMultiplyingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyingExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplyingExpressionContext = MultiplyingExpressionContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.inte = function () {
        return this.tryGetRuleContext(0, InteContext);
    };
    AtomContext.prototype.decimal = function () {
        return this.tryGetRuleContext(0, DecimalContext);
    };
    AtomContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    AtomContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    AtomContext.prototype.register = function () {
        return this.tryGetRuleContext(0, RegisterContext);
    };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var InteContext = /** @class */ (function (_super) {
    __extends(InteContext, _super);
    function InteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InteContext.prototype.INTE = function () { return this.getToken(agcParser.INTE, 0); };
    Object.defineProperty(InteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_inte; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InteContext.prototype.enterRule = function (listener) {
        if (listener.enterInte) {
            listener.enterInte(this);
        }
    };
    // @Override
    InteContext.prototype.exitRule = function (listener) {
        if (listener.exitInte) {
            listener.exitInte(this);
        }
    };
    // @Override
    InteContext.prototype.accept = function (visitor) {
        if (visitor.visitInte) {
            return visitor.visitInte(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InteContext = InteContext;
var DecimalContext = /** @class */ (function (_super) {
    __extends(DecimalContext, _super);
    function DecimalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecimalContext.prototype.DECIMAL = function () { return this.getToken(agcParser.DECIMAL, 0); };
    DecimalContext.prototype.PLUS = function () { return this.tryGetToken(agcParser.PLUS, 0); };
    DecimalContext.prototype.MINUS = function () { return this.tryGetToken(agcParser.MINUS, 0); };
    Object.defineProperty(DecimalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_decimal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecimalContext.prototype.enterRule = function (listener) {
        if (listener.enterDecimal) {
            listener.enterDecimal(this);
        }
    };
    // @Override
    DecimalContext.prototype.exitRule = function (listener) {
        if (listener.exitDecimal) {
            listener.exitDecimal(this);
        }
    };
    // @Override
    DecimalContext.prototype.accept = function (visitor) {
        if (visitor.visitDecimal) {
            return visitor.visitDecimal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecimalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecimalContext = DecimalContext;
var RegisterContext = /** @class */ (function (_super) {
    __extends(RegisterContext, _super);
    function RegisterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RegisterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_register; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegisterContext.prototype.enterRule = function (listener) {
        if (listener.enterRegister) {
            listener.enterRegister(this);
        }
    };
    // @Override
    RegisterContext.prototype.exitRule = function (listener) {
        if (listener.exitRegister) {
            listener.exitRegister(this);
        }
    };
    // @Override
    RegisterContext.prototype.accept = function (visitor) {
        if (visitor.visitRegister) {
            return visitor.visitRegister(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegisterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegisterContext = RegisterContext;
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodeContext.prototype.standard_opcode = function () {
        return this.tryGetRuleContext(0, Standard_opcodeContext);
    };
    OpcodeContext.prototype.pseudo_opcode = function () {
        return this.tryGetRuleContext(0, Pseudo_opcodeContext);
    };
    OpcodeContext.prototype.axt_opcode = function () {
        return this.tryGetRuleContext(0, Axt_opcodeContext);
    };
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_opcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterOpcode) {
            listener.enterOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitOpcode) {
            listener.exitOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitOpcode) {
            return visitor.visitOpcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpcodeContext = OpcodeContext;
var Axt_opcodeContext = /** @class */ (function (_super) {
    __extends(Axt_opcodeContext, _super);
    function Axt_opcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Axt_opcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_axt_opcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Axt_opcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterAxt_opcode) {
            listener.enterAxt_opcode(this);
        }
    };
    // @Override
    Axt_opcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitAxt_opcode) {
            listener.exitAxt_opcode(this);
        }
    };
    // @Override
    Axt_opcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitAxt_opcode) {
            return visitor.visitAxt_opcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Axt_opcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Axt_opcodeContext = Axt_opcodeContext;
var Pseudo_opcodeContext = /** @class */ (function (_super) {
    __extends(Pseudo_opcodeContext, _super);
    function Pseudo_opcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Pseudo_opcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_pseudo_opcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pseudo_opcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterPseudo_opcode) {
            listener.enterPseudo_opcode(this);
        }
    };
    // @Override
    Pseudo_opcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitPseudo_opcode) {
            listener.exitPseudo_opcode(this);
        }
    };
    // @Override
    Pseudo_opcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitPseudo_opcode) {
            return visitor.visitPseudo_opcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pseudo_opcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pseudo_opcodeContext = Pseudo_opcodeContext;
var Standard_opcodeContext = /** @class */ (function (_super) {
    __extends(Standard_opcodeContext, _super);
    function Standard_opcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Standard_opcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return agcParser.RULE_standard_opcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Standard_opcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterStandard_opcode) {
            listener.enterStandard_opcode(this);
        }
    };
    // @Override
    Standard_opcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitStandard_opcode) {
            listener.exitStandard_opcode(this);
        }
    };
    // @Override
    Standard_opcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitStandard_opcode) {
            return visitor.visitStandard_opcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Standard_opcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Standard_opcodeContext = Standard_opcodeContext;
