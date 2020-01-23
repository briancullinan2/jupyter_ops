"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asmZ80/asmZ80.g4 by ANTLR 4.7.3-SNAPSHOT
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
var asmZ80Parser = /** @class */ (function (_super) {
    __extends(asmZ80Parser, _super);
    function asmZ80Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(asmZ80Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(asmZ80Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return asmZ80Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asmZ80Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "asmZ80.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asmZ80Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return asmZ80Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asmZ80Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return asmZ80Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    asmZ80Parser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, asmZ80Parser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 37;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 36;
                                        this.line();
                                    }
                                    break;
                            }
                            this.state = 39;
                            this.match(asmZ80Parser.EOL);
                        }
                    }
                    this.state = 42;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmZ80Parser.T__6) | (1 << asmZ80Parser.T__8) | (1 << asmZ80Parser.REGISTER) | (1 << asmZ80Parser.ASSEMBLER_DIRECTIVE) | (1 << asmZ80Parser.OPCODE) | (1 << asmZ80Parser.NAME) | (1 << asmZ80Parser.NUMBER) | (1 << asmZ80Parser.COMMENT) | (1 << asmZ80Parser.STRING) | (1 << asmZ80Parser.EOL))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, asmZ80Parser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            this.state = 44;
                            this.lbl();
                        }
                        break;
                }
                this.state = 49;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case asmZ80Parser.OPCODE:
                        {
                            this.state = 47;
                            this.instruction();
                        }
                        break;
                    case asmZ80Parser.T__6:
                    case asmZ80Parser.T__8:
                    case asmZ80Parser.REGISTER:
                    case asmZ80Parser.ASSEMBLER_DIRECTIVE:
                    case asmZ80Parser.NAME:
                    case asmZ80Parser.NUMBER:
                    case asmZ80Parser.STRING:
                        {
                            this.state = 48;
                            this.directive();
                        }
                        break;
                    case asmZ80Parser.COMMENT:
                    case asmZ80Parser.EOL:
                        break;
                    default:
                        break;
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asmZ80Parser.COMMENT) {
                    {
                        this.state = 51;
                        this.comment();
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
    asmZ80Parser.prototype.instruction = function () {
        var _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, asmZ80Parser.RULE_instruction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this.opcode();
                this.state = 56;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmZ80Parser.T__6) | (1 << asmZ80Parser.T__8) | (1 << asmZ80Parser.REGISTER) | (1 << asmZ80Parser.NAME) | (1 << asmZ80Parser.NUMBER) | (1 << asmZ80Parser.STRING))) !== 0)) {
                    {
                        this.state = 55;
                        this.expressionlist();
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
    asmZ80Parser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, asmZ80Parser.RULE_opcode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.match(asmZ80Parser.OPCODE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.register_ = function () {
        var _localctx = new Register_Context(this._ctx, this.state);
        this.enterRule(_localctx, 8, asmZ80Parser.RULE_register_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.match(asmZ80Parser.REGISTER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.directive = function () {
        var _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, asmZ80Parser.RULE_directive);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmZ80Parser.T__6) | (1 << asmZ80Parser.T__8) | (1 << asmZ80Parser.REGISTER) | (1 << asmZ80Parser.NAME) | (1 << asmZ80Parser.NUMBER) | (1 << asmZ80Parser.STRING))) !== 0)) {
                    {
                        this.state = 62;
                        this.argument();
                    }
                }
                this.state = 65;
                this.assemblerdirective();
                this.state = 66;
                this.expressionlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.assemblerdirective = function () {
        var _localctx = new AssemblerdirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, asmZ80Parser.RULE_assemblerdirective);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.match(asmZ80Parser.ASSEMBLER_DIRECTIVE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.lbl = function () {
        var _localctx = new LblContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, asmZ80Parser.RULE_lbl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.label();
                this.state = 72;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asmZ80Parser.T__0) {
                    {
                        this.state = 71;
                        this.match(asmZ80Parser.T__0);
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
    asmZ80Parser.prototype.expressionlist = function () {
        var _localctx = new ExpressionlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, asmZ80Parser.RULE_expressionlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.expression();
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === asmZ80Parser.T__1) {
                    {
                        {
                            this.state = 75;
                            this.match(asmZ80Parser.T__1);
                            this.state = 76;
                            this.expression();
                        }
                    }
                    this.state = 81;
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
    asmZ80Parser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, asmZ80Parser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, asmZ80Parser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this.multiplyingExpression();
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === asmZ80Parser.T__2 || _la === asmZ80Parser.T__3) {
                    {
                        {
                            this.state = 85;
                            _la = this._input.LA(1);
                            if (!(_la === asmZ80Parser.T__2 || _la === asmZ80Parser.T__3)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 86;
                            this.multiplyingExpression();
                        }
                    }
                    this.state = 91;
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
    asmZ80Parser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, asmZ80Parser.RULE_multiplyingExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 92;
                this.argument();
                this.state = 97;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === asmZ80Parser.T__4 || _la === asmZ80Parser.T__5) {
                    {
                        {
                            this.state = 93;
                            _la = this._input.LA(1);
                            if (!(_la === asmZ80Parser.T__4 || _la === asmZ80Parser.T__5)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 94;
                            this.argument();
                        }
                    }
                    this.state = 99;
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
    asmZ80Parser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, asmZ80Parser.RULE_argument);
        try {
            this.state = 109;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case asmZ80Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 100;
                        this.number();
                    }
                    break;
                case asmZ80Parser.REGISTER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 101;
                        this.register_();
                    }
                    break;
                case asmZ80Parser.T__8:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 102;
                        this.dollar();
                    }
                    break;
                case asmZ80Parser.NAME:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 103;
                        this.name();
                    }
                    break;
                case asmZ80Parser.STRING:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 104;
                        this.string();
                    }
                    break;
                case asmZ80Parser.T__6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        {
                            this.state = 105;
                            this.match(asmZ80Parser.T__6);
                            this.state = 106;
                            this.expression();
                            this.state = 107;
                            this.match(asmZ80Parser.T__7);
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
    asmZ80Parser.prototype.dollar = function () {
        var _localctx = new DollarContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, asmZ80Parser.RULE_dollar);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                this.match(asmZ80Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, asmZ80Parser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.match(asmZ80Parser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, asmZ80Parser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.match(asmZ80Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, asmZ80Parser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(asmZ80Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmZ80Parser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, asmZ80Parser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this.match(asmZ80Parser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(asmZ80Parser, "_ATN", {
        get: function () {
            if (!asmZ80Parser.__ATN) {
                asmZ80Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(asmZ80Parser._serializedATN));
            }
            return asmZ80Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    asmZ80Parser.T__0 = 1;
    asmZ80Parser.T__1 = 2;
    asmZ80Parser.T__2 = 3;
    asmZ80Parser.T__3 = 4;
    asmZ80Parser.T__4 = 5;
    asmZ80Parser.T__5 = 6;
    asmZ80Parser.T__6 = 7;
    asmZ80Parser.T__7 = 8;
    asmZ80Parser.T__8 = 9;
    asmZ80Parser.REGISTER = 10;
    asmZ80Parser.ASSEMBLER_DIRECTIVE = 11;
    asmZ80Parser.OPCODE = 12;
    asmZ80Parser.NAME = 13;
    asmZ80Parser.NUMBER = 14;
    asmZ80Parser.COMMENT = 15;
    asmZ80Parser.STRING = 16;
    asmZ80Parser.EOL = 17;
    asmZ80Parser.WS = 18;
    asmZ80Parser.RULE_prog = 0;
    asmZ80Parser.RULE_line = 1;
    asmZ80Parser.RULE_instruction = 2;
    asmZ80Parser.RULE_opcode = 3;
    asmZ80Parser.RULE_register_ = 4;
    asmZ80Parser.RULE_directive = 5;
    asmZ80Parser.RULE_assemblerdirective = 6;
    asmZ80Parser.RULE_lbl = 7;
    asmZ80Parser.RULE_expressionlist = 8;
    asmZ80Parser.RULE_label = 9;
    asmZ80Parser.RULE_expression = 10;
    asmZ80Parser.RULE_multiplyingExpression = 11;
    asmZ80Parser.RULE_argument = 12;
    asmZ80Parser.RULE_dollar = 13;
    asmZ80Parser.RULE_string = 14;
    asmZ80Parser.RULE_name = 15;
    asmZ80Parser.RULE_number = 16;
    asmZ80Parser.RULE_comment = 17;
    // tslint:disable:no-trailing-whitespace
    asmZ80Parser.ruleNames = [
        "prog", "line", "instruction", "opcode", "register_", "directive", "assemblerdirective",
        "lbl", "expressionlist", "label", "expression", "multiplyingExpression",
        "argument", "dollar", "string", "name", "number", "comment",
    ];
    asmZ80Parser._LITERAL_NAMES = [
        undefined, "':'", "','", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'$'",
    ];
    asmZ80Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "REGISTER", "ASSEMBLER_DIRECTIVE", "OPCODE",
        "NAME", "NUMBER", "COMMENT", "STRING", "EOL", "WS",
    ];
    asmZ80Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(asmZ80Parser._LITERAL_NAMES, asmZ80Parser._SYMBOLIC_NAMES, []);
    asmZ80Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14|\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x03\x02\x05\x02(\n\x02\x03\x02\x06\x02+\n\x02\r\x02\x0E\x02" +
        ",\x03\x03\x05\x030\n\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x03\x05\x03" +
        "7\n\x03\x03\x04\x03\x04\x05\x04;\n\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x07\x05\x07B\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
        "\t\x05\tK\n\t\x03\n\x03\n\x03\n\x07\nP\n\n\f\n\x0E\nS\v\n\x03\v\x03\v" +
        "\x03\f\x03\f\x03\f\x07\fZ\n\f\f\f\x0E\f]\v\f\x03\r\x03\r\x03\r\x07\rb" +
        "\n\r\f\r\x0E\re\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x05\x0Ep\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
        "\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x02\x02\x02\x14\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x04\x03\x02" +
        "\x05\x06\x03\x02\x07\b\x02z\x02*\x03\x02\x02\x02\x04/\x03\x02\x02\x02" +
        "\x068\x03\x02\x02\x02\b<\x03\x02\x02\x02\n>\x03\x02\x02\x02\fA\x03\x02" +
        "\x02\x02\x0EF\x03\x02\x02\x02\x10H\x03\x02\x02\x02\x12L\x03\x02\x02\x02" +
        "\x14T\x03\x02\x02\x02\x16V\x03\x02\x02\x02\x18^\x03\x02\x02\x02\x1Ao\x03" +
        "\x02\x02\x02\x1Cq\x03\x02\x02\x02\x1Es\x03\x02\x02\x02 u\x03\x02\x02\x02" +
        "\"w\x03\x02\x02\x02$y\x03\x02\x02\x02&(\x05\x04\x03\x02\'&\x03\x02\x02" +
        "\x02\'(\x03\x02\x02\x02()\x03\x02\x02\x02)+\x07\x13\x02\x02*\'\x03\x02" +
        "\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x03\x03" +
        "\x02\x02\x02.0\x05\x10\t\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0203\x03" +
        "\x02\x02\x0214\x05\x06\x04\x0224\x05\f\x07\x0231\x03\x02\x02\x0232\x03" +
        "\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x0257\x05$\x13\x0265\x03" +
        "\x02\x02\x0267\x03\x02\x02\x027\x05\x03\x02\x02\x028:\x05\b\x05\x029;" +
        "\x05\x12\n\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;\x07\x03\x02\x02\x02" +
        "<=\x07\x0E\x02\x02=\t\x03\x02\x02\x02>?\x07\f\x02\x02?\v\x03\x02\x02\x02" +
        "@B\x05\x1A\x0E\x02A@\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02" +
        "CD\x05\x0E\b\x02DE\x05\x12\n\x02E\r\x03\x02\x02\x02FG\x07\r\x02\x02G\x0F" +
        "\x03\x02\x02\x02HJ\x05\x14\v\x02IK\x07\x03\x02\x02JI\x03\x02\x02\x02J" +
        "K\x03\x02\x02\x02K\x11\x03\x02\x02\x02LQ\x05\x16\f\x02MN\x07\x04\x02\x02" +
        "NP\x05\x16\f\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02" +
        "QR\x03\x02\x02\x02R\x13\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\x05 \x11\x02" +
        "U\x15\x03\x02\x02\x02V[\x05\x18\r\x02WX\t\x02\x02\x02XZ\x05\x18\r\x02" +
        "YW\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02" +
        "\x02\\\x17\x03\x02\x02\x02][\x03\x02\x02\x02^c\x05\x1A\x0E\x02_`\t\x03" +
        "\x02\x02`b\x05\x1A\x0E\x02a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02" +
        "\x02\x02cd\x03\x02\x02\x02d\x19\x03\x02\x02\x02ec\x03\x02\x02\x02fp\x05" +
        "\"\x12\x02gp\x05\n\x06\x02hp\x05\x1C\x0F\x02ip\x05 \x11\x02jp\x05\x1E" +
        "\x10\x02kl\x07\t\x02\x02lm\x05\x16\f\x02mn\x07\n\x02\x02np\x03\x02\x02" +
        "\x02of\x03\x02\x02\x02og\x03\x02\x02\x02oh\x03\x02\x02\x02oi\x03\x02\x02" +
        "\x02oj\x03\x02\x02\x02ok\x03\x02\x02\x02p\x1B\x03\x02\x02\x02qr\x07\v" +
        "\x02\x02r\x1D\x03\x02\x02\x02st\x07\x12\x02\x02t\x1F\x03\x02\x02\x02u" +
        "v\x07\x0F\x02\x02v!\x03\x02\x02\x02wx\x07\x10\x02\x02x#\x03\x02\x02\x02" +
        "yz\x07\x11\x02\x02z%\x03\x02\x02\x02\x0E\',/36:AJQ[co";
    return asmZ80Parser;
}(Parser_1.Parser));
exports.asmZ80Parser = asmZ80Parser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(asmZ80Parser.EOL);
        }
        else {
            return this.getToken(asmZ80Parser.EOL, i);
        }
    };
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
        get: function () { return asmZ80Parser.RULE_prog; },
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
    LineContext.prototype.lbl = function () {
        return this.tryGetRuleContext(0, LblContext);
    };
    LineContext.prototype.instruction = function () {
        return this.tryGetRuleContext(0, InstructionContext);
    };
    LineContext.prototype.directive = function () {
        return this.tryGetRuleContext(0, DirectiveContext);
    };
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_line; },
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
var InstructionContext = /** @class */ (function (_super) {
    __extends(InstructionContext, _super);
    function InstructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InstructionContext.prototype.opcode = function () {
        return this.getRuleContext(0, OpcodeContext);
    };
    InstructionContext.prototype.expressionlist = function () {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_instruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstruction) {
            listener.enterInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstruction) {
            listener.exitInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstruction) {
            return visitor.visitInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InstructionContext = InstructionContext;
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodeContext.prototype.OPCODE = function () { return this.getToken(asmZ80Parser.OPCODE, 0); };
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_opcode; },
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
var Register_Context = /** @class */ (function (_super) {
    __extends(Register_Context, _super);
    function Register_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Register_Context.prototype.REGISTER = function () { return this.getToken(asmZ80Parser.REGISTER, 0); };
    Object.defineProperty(Register_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_register_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Register_Context.prototype.enterRule = function (listener) {
        if (listener.enterRegister_) {
            listener.enterRegister_(this);
        }
    };
    // @Override
    Register_Context.prototype.exitRule = function (listener) {
        if (listener.exitRegister_) {
            listener.exitRegister_(this);
        }
    };
    // @Override
    Register_Context.prototype.accept = function (visitor) {
        if (visitor.visitRegister_) {
            return visitor.visitRegister_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Register_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Register_Context = Register_Context;
var DirectiveContext = /** @class */ (function (_super) {
    __extends(DirectiveContext, _super);
    function DirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveContext.prototype.assemblerdirective = function () {
        return this.getRuleContext(0, AssemblerdirectiveContext);
    };
    DirectiveContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    DirectiveContext.prototype.argument = function () {
        return this.tryGetRuleContext(0, ArgumentContext);
    };
    Object.defineProperty(DirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_directive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterDirective) {
            listener.enterDirective(this);
        }
    };
    // @Override
    DirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitDirective) {
            listener.exitDirective(this);
        }
    };
    // @Override
    DirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitDirective) {
            return visitor.visitDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveContext = DirectiveContext;
var AssemblerdirectiveContext = /** @class */ (function (_super) {
    __extends(AssemblerdirectiveContext, _super);
    function AssemblerdirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblerdirectiveContext.prototype.ASSEMBLER_DIRECTIVE = function () { return this.getToken(asmZ80Parser.ASSEMBLER_DIRECTIVE, 0); };
    Object.defineProperty(AssemblerdirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_assemblerdirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblerdirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblerdirective) {
            listener.enterAssemblerdirective(this);
        }
    };
    // @Override
    AssemblerdirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblerdirective) {
            listener.exitAssemblerdirective(this);
        }
    };
    // @Override
    AssemblerdirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblerdirective) {
            return visitor.visitAssemblerdirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblerdirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblerdirectiveContext = AssemblerdirectiveContext;
var LblContext = /** @class */ (function (_super) {
    __extends(LblContext, _super);
    function LblContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LblContext.prototype.label = function () {
        return this.getRuleContext(0, LabelContext);
    };
    Object.defineProperty(LblContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_lbl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LblContext.prototype.enterRule = function (listener) {
        if (listener.enterLbl) {
            listener.enterLbl(this);
        }
    };
    // @Override
    LblContext.prototype.exitRule = function (listener) {
        if (listener.exitLbl) {
            listener.exitLbl(this);
        }
    };
    // @Override
    LblContext.prototype.accept = function (visitor) {
        if (visitor.visitLbl) {
            return visitor.visitLbl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LblContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LblContext = LblContext;
var ExpressionlistContext = /** @class */ (function (_super) {
    __extends(ExpressionlistContext, _super);
    function ExpressionlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionlistContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpressionlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_expressionlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionlistContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionlist) {
            listener.enterExpressionlist(this);
        }
    };
    // @Override
    ExpressionlistContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionlist) {
            listener.exitExpressionlist(this);
        }
    };
    // @Override
    ExpressionlistContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionlist) {
            return visitor.visitExpressionlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionlistContext = ExpressionlistContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_label; },
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
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_expression; },
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
    MultiplyingExpressionContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_multiplyingExpression; },
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
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    ArgumentContext.prototype.register_ = function () {
        return this.tryGetRuleContext(0, Register_Context);
    };
    ArgumentContext.prototype.dollar = function () {
        return this.tryGetRuleContext(0, DollarContext);
    };
    ArgumentContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    ArgumentContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ArgumentContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_argument; },
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
var DollarContext = /** @class */ (function (_super) {
    __extends(DollarContext, _super);
    function DollarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DollarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_dollar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DollarContext.prototype.enterRule = function (listener) {
        if (listener.enterDollar) {
            listener.enterDollar(this);
        }
    };
    // @Override
    DollarContext.prototype.exitRule = function (listener) {
        if (listener.exitDollar) {
            listener.exitDollar(this);
        }
    };
    // @Override
    DollarContext.prototype.accept = function (visitor) {
        if (visitor.visitDollar) {
            return visitor.visitDollar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DollarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DollarContext = DollarContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(asmZ80Parser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_string; },
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
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.NAME = function () { return this.getToken(asmZ80Parser.NAME, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameContext.prototype.enterRule = function (listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    };
    // @Override
    NameContext.prototype.exitRule = function (listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    };
    // @Override
    NameContext.prototype.accept = function (visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(asmZ80Parser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_number; },
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
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(asmZ80Parser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmZ80Parser.RULE_comment; },
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
