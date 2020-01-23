"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lolcode/lolcode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var lolcodeParser = /** @class */ (function (_super) {
    __extends(lolcodeParser, _super);
    function lolcodeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(lolcodeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(lolcodeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return lolcodeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lolcodeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "lolcode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lolcodeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return lolcodeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lolcodeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return lolcodeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    lolcodeParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, lolcodeParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.match(lolcodeParser.T__0);
                this.state = 59;
                this.code_block();
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === lolcodeParser.T__1) {
                    {
                        this.state = 60;
                        this.match(lolcodeParser.T__1);
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
    lolcodeParser.prototype.code_block = function () {
        var _localctx = new Code_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, lolcodeParser.RULE_code_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 63;
                            this.statement();
                        }
                    }
                    this.state = 66;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lolcodeParser.T__2) | (1 << lolcodeParser.T__5) | (1 << lolcodeParser.T__7) | (1 << lolcodeParser.T__8) | (1 << lolcodeParser.T__10) | (1 << lolcodeParser.T__12) | (1 << lolcodeParser.T__17) | (1 << lolcodeParser.T__18) | (1 << lolcodeParser.T__23) | (1 << lolcodeParser.T__25) | (1 << lolcodeParser.T__26) | (1 << lolcodeParser.T__27) | (1 << lolcodeParser.T__28) | (1 << lolcodeParser.T__29) | (1 << lolcodeParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (lolcodeParser.T__31 - 32)) | (1 << (lolcodeParser.T__32 - 32)) | (1 << (lolcodeParser.T__33 - 32)) | (1 << (lolcodeParser.T__34 - 32)) | (1 << (lolcodeParser.T__35 - 32)) | (1 << (lolcodeParser.T__37 - 32)) | (1 << (lolcodeParser.T__38 - 32)) | (1 << (lolcodeParser.T__39 - 32)) | (1 << (lolcodeParser.LABEL - 32)) | (1 << (lolcodeParser.ATOM - 32)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lolcodeParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, lolcodeParser.RULE_statement);
        try {
            this.state = 77;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 68;
                        this.loop();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 69;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 70;
                        this.comment();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 71;
                        this.print_block();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 72;
                        this.if_block();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 73;
                        this.input_block();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 74;
                        this.func_decl();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 75;
                        this.assignment();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 76;
                        this.expression();
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
    lolcodeParser.prototype.loop = function () {
        var _localctx = new LoopContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, lolcodeParser.RULE_loop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this.match(lolcodeParser.T__2);
                this.state = 80;
                this.match(lolcodeParser.LABEL);
                this.state = 81;
                this.match(lolcodeParser.T__3);
                this.state = 82;
                this.expression();
                this.state = 83;
                this.code_block();
                this.state = 84;
                this.match(lolcodeParser.T__4);
                this.state = 85;
                this.match(lolcodeParser.LABEL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lolcodeParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, lolcodeParser.RULE_declaration);
        try {
            this.state = 92;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 87;
                        this.match(lolcodeParser.T__5);
                        this.state = 88;
                        this.match(lolcodeParser.LABEL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 89;
                        this.match(lolcodeParser.T__5);
                        this.state = 90;
                        this.match(lolcodeParser.LABEL);
                        this.state = 91;
                        this.match(lolcodeParser.T__6);
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
    lolcodeParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, lolcodeParser.RULE_comment);
        try {
            this.state = 99;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case lolcodeParser.T__7:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 94;
                        this.match(lolcodeParser.T__7);
                        this.state = 95;
                        this.match(lolcodeParser.STRING);
                    }
                    break;
                case lolcodeParser.T__8:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 96;
                        this.match(lolcodeParser.T__8);
                        this.state = 97;
                        this.match(lolcodeParser.STRING);
                        this.state = 98;
                        this.match(lolcodeParser.T__9);
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
    lolcodeParser.prototype.print_block = function () {
        var _localctx = new Print_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, lolcodeParser.RULE_print_block);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(lolcodeParser.T__10);
                this.state = 105;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 102;
                                this.expression();
                            }
                        }
                    }
                    this.state = 107;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                }
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === lolcodeParser.T__11) {
                    {
                        this.state = 108;
                        this.match(lolcodeParser.T__11);
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
    lolcodeParser.prototype.if_block = function () {
        var _localctx = new If_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, lolcodeParser.RULE_if_block);
        try {
            this.state = 122;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 111;
                        this.match(lolcodeParser.T__12);
                        this.state = 112;
                        this.match(lolcodeParser.T__13);
                        this.state = 113;
                        this.code_block();
                        this.state = 114;
                        this.match(lolcodeParser.T__14);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 116;
                        this.match(lolcodeParser.T__12);
                        this.state = 117;
                        this.match(lolcodeParser.T__13);
                        this.state = 118;
                        this.code_block();
                        this.state = 119;
                        this.else_if_block();
                        this.state = 120;
                        this.match(lolcodeParser.T__14);
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
    lolcodeParser.prototype.else_if_block = function () {
        var _localctx = new Else_if_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, lolcodeParser.RULE_else_if_block);
        try {
            this.state = 135;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 124;
                        this.match(lolcodeParser.T__15);
                        this.state = 125;
                        this.expression();
                        this.state = 126;
                        this.code_block();
                        this.state = 127;
                        this.else_if_block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 129;
                        this.match(lolcodeParser.T__16);
                        this.state = 130;
                        this.code_block();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 131;
                        this.match(lolcodeParser.T__15);
                        this.state = 132;
                        this.expression();
                        this.state = 133;
                        this.code_block();
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
    lolcodeParser.prototype.input_block = function () {
        var _localctx = new Input_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, lolcodeParser.RULE_input_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 137;
                this.match(lolcodeParser.T__17);
                this.state = 138;
                this.match(lolcodeParser.LABEL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lolcodeParser.prototype.func_decl = function () {
        var _localctx = new Func_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, lolcodeParser.RULE_func_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(lolcodeParser.T__18);
                this.state = 141;
                this.match(lolcodeParser.LABEL);
                this.state = 152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === lolcodeParser.T__19) {
                    {
                        {
                            this.state = 142;
                            this.match(lolcodeParser.T__19);
                            this.state = 143;
                            this.match(lolcodeParser.LABEL);
                        }
                        this.state = 149;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === lolcodeParser.T__20) {
                            {
                                {
                                    this.state = 145;
                                    this.match(lolcodeParser.T__20);
                                    this.state = 146;
                                    this.match(lolcodeParser.LABEL);
                                }
                            }
                            this.state = 151;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 154;
                this.code_block();
                this.state = 155;
                this.match(lolcodeParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lolcodeParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, lolcodeParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(lolcodeParser.LABEL);
                this.state = 158;
                this.match(lolcodeParser.T__22);
                this.state = 159;
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
    lolcodeParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, lolcodeParser.RULE_expression);
        try {
            this.state = 179;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 161;
                        this.equals();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 162;
                        this.both();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 163;
                        this.not_equals();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 164;
                        this.greater();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 165;
                        this.less();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 166;
                        this.add();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 167;
                        this.sub();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 168;
                        this.mul();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 169;
                        this.div();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 170;
                        this.mod();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 171;
                        this.cast();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 172;
                        this.either();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 173;
                        this.all();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 174;
                        this.any();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 175;
                        this.not();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 176;
                        this.func();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 177;
                        this.match(lolcodeParser.LABEL);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 178;
                        this.match(lolcodeParser.ATOM);
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
    lolcodeParser.prototype.equals = function () {
        var _localctx = new EqualsContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, lolcodeParser.RULE_equals);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this.match(lolcodeParser.T__23);
                this.state = 182;
                this.expression();
                this.state = 183;
                this.match(lolcodeParser.T__24);
                this.state = 184;
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
    lolcodeParser.prototype.not_equals = function () {
        var _localctx = new Not_equalsContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, lolcodeParser.RULE_not_equals);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.match(lolcodeParser.T__25);
                this.state = 187;
                this.expression();
                this.state = 188;
                this.match(lolcodeParser.T__24);
                this.state = 189;
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
    lolcodeParser.prototype.both = function () {
        var _localctx = new BothContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, lolcodeParser.RULE_both);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 191;
                this.match(lolcodeParser.T__26);
                this.state = 192;
                this.expression();
                this.state = 193;
                this.match(lolcodeParser.T__24);
                this.state = 194;
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
    lolcodeParser.prototype.either = function () {
        var _localctx = new EitherContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, lolcodeParser.RULE_either);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.match(lolcodeParser.T__27);
                this.state = 197;
                this.expression();
                this.state = 198;
                this.match(lolcodeParser.T__24);
                this.state = 199;
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
    lolcodeParser.prototype.greater = function () {
        var _localctx = new GreaterContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, lolcodeParser.RULE_greater);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.match(lolcodeParser.T__28);
                this.state = 202;
                this.expression();
                this.state = 203;
                this.match(lolcodeParser.T__24);
                this.state = 204;
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
    lolcodeParser.prototype.less = function () {
        var _localctx = new LessContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, lolcodeParser.RULE_less);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(lolcodeParser.T__29);
                this.state = 207;
                this.expression();
                this.state = 208;
                this.match(lolcodeParser.T__24);
                this.state = 209;
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
    lolcodeParser.prototype.add = function () {
        var _localctx = new AddContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, lolcodeParser.RULE_add);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.match(lolcodeParser.T__30);
                this.state = 212;
                this.expression();
                this.state = 213;
                this.match(lolcodeParser.T__24);
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
    lolcodeParser.prototype.sub = function () {
        var _localctx = new SubContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, lolcodeParser.RULE_sub);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(lolcodeParser.T__31);
                this.state = 217;
                this.expression();
                this.state = 218;
                this.match(lolcodeParser.T__24);
                this.state = 219;
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
    lolcodeParser.prototype.mul = function () {
        var _localctx = new MulContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, lolcodeParser.RULE_mul);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.match(lolcodeParser.T__32);
                this.state = 222;
                this.expression();
                this.state = 223;
                this.match(lolcodeParser.T__24);
                this.state = 224;
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
    lolcodeParser.prototype.div = function () {
        var _localctx = new DivContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, lolcodeParser.RULE_div);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(lolcodeParser.T__33);
                this.state = 227;
                this.expression();
                this.state = 228;
                this.match(lolcodeParser.T__24);
                this.state = 229;
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
    lolcodeParser.prototype.mod = function () {
        var _localctx = new ModContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, lolcodeParser.RULE_mod);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.match(lolcodeParser.T__34);
                this.state = 232;
                this.expression();
                this.state = 233;
                this.match(lolcodeParser.T__24);
                this.state = 234;
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
    lolcodeParser.prototype.cast = function () {
        var _localctx = new CastContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, lolcodeParser.RULE_cast);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.match(lolcodeParser.T__35);
                this.state = 237;
                this.expression();
                this.state = 238;
                this.match(lolcodeParser.T__36);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lolcodeParser.prototype.all = function () {
        var _localctx = new AllContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, lolcodeParser.RULE_all);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(lolcodeParser.T__37);
                this.state = 241;
                this.expression();
                this.state = 246;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === lolcodeParser.T__24) {
                    {
                        {
                            this.state = 242;
                            this.match(lolcodeParser.T__24);
                            this.state = 243;
                            this.expression();
                        }
                    }
                    this.state = 248;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 249;
                this.match(lolcodeParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lolcodeParser.prototype.any = function () {
        var _localctx = new AnyContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, lolcodeParser.RULE_any);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.match(lolcodeParser.T__38);
                this.state = 252;
                this.expression();
                this.state = 257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === lolcodeParser.T__24) {
                    {
                        {
                            this.state = 253;
                            this.match(lolcodeParser.T__24);
                            this.state = 254;
                            this.expression();
                        }
                    }
                    this.state = 259;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 260;
                this.match(lolcodeParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lolcodeParser.prototype.not = function () {
        var _localctx = new NotContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, lolcodeParser.RULE_not);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.match(lolcodeParser.T__39);
                this.state = 263;
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
    lolcodeParser.prototype.func = function () {
        var _localctx = new FuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, lolcodeParser.RULE_func);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                this.match(lolcodeParser.LABEL);
                this.state = 267;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 266;
                            this.expression();
                        }
                    }
                    this.state = 269;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (lolcodeParser.T__23 - 24)) | (1 << (lolcodeParser.T__25 - 24)) | (1 << (lolcodeParser.T__26 - 24)) | (1 << (lolcodeParser.T__27 - 24)) | (1 << (lolcodeParser.T__28 - 24)) | (1 << (lolcodeParser.T__29 - 24)) | (1 << (lolcodeParser.T__30 - 24)) | (1 << (lolcodeParser.T__31 - 24)) | (1 << (lolcodeParser.T__32 - 24)) | (1 << (lolcodeParser.T__33 - 24)) | (1 << (lolcodeParser.T__34 - 24)) | (1 << (lolcodeParser.T__35 - 24)) | (1 << (lolcodeParser.T__37 - 24)) | (1 << (lolcodeParser.T__38 - 24)) | (1 << (lolcodeParser.T__39 - 24)) | (1 << (lolcodeParser.LABEL - 24)) | (1 << (lolcodeParser.ATOM - 24)))) !== 0));
                this.state = 271;
                this.match(lolcodeParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(lolcodeParser, "_ATN", {
        get: function () {
            if (!lolcodeParser.__ATN) {
                lolcodeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(lolcodeParser._serializedATN));
            }
            return lolcodeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    lolcodeParser.T__0 = 1;
    lolcodeParser.T__1 = 2;
    lolcodeParser.T__2 = 3;
    lolcodeParser.T__3 = 4;
    lolcodeParser.T__4 = 5;
    lolcodeParser.T__5 = 6;
    lolcodeParser.T__6 = 7;
    lolcodeParser.T__7 = 8;
    lolcodeParser.T__8 = 9;
    lolcodeParser.T__9 = 10;
    lolcodeParser.T__10 = 11;
    lolcodeParser.T__11 = 12;
    lolcodeParser.T__12 = 13;
    lolcodeParser.T__13 = 14;
    lolcodeParser.T__14 = 15;
    lolcodeParser.T__15 = 16;
    lolcodeParser.T__16 = 17;
    lolcodeParser.T__17 = 18;
    lolcodeParser.T__18 = 19;
    lolcodeParser.T__19 = 20;
    lolcodeParser.T__20 = 21;
    lolcodeParser.T__21 = 22;
    lolcodeParser.T__22 = 23;
    lolcodeParser.T__23 = 24;
    lolcodeParser.T__24 = 25;
    lolcodeParser.T__25 = 26;
    lolcodeParser.T__26 = 27;
    lolcodeParser.T__27 = 28;
    lolcodeParser.T__28 = 29;
    lolcodeParser.T__29 = 30;
    lolcodeParser.T__30 = 31;
    lolcodeParser.T__31 = 32;
    lolcodeParser.T__32 = 33;
    lolcodeParser.T__33 = 34;
    lolcodeParser.T__34 = 35;
    lolcodeParser.T__35 = 36;
    lolcodeParser.T__36 = 37;
    lolcodeParser.T__37 = 38;
    lolcodeParser.T__38 = 39;
    lolcodeParser.T__39 = 40;
    lolcodeParser.LABEL = 41;
    lolcodeParser.ATOM = 42;
    lolcodeParser.STRING = 43;
    lolcodeParser.WS = 44;
    lolcodeParser.RULE_program = 0;
    lolcodeParser.RULE_code_block = 1;
    lolcodeParser.RULE_statement = 2;
    lolcodeParser.RULE_loop = 3;
    lolcodeParser.RULE_declaration = 4;
    lolcodeParser.RULE_comment = 5;
    lolcodeParser.RULE_print_block = 6;
    lolcodeParser.RULE_if_block = 7;
    lolcodeParser.RULE_else_if_block = 8;
    lolcodeParser.RULE_input_block = 9;
    lolcodeParser.RULE_func_decl = 10;
    lolcodeParser.RULE_assignment = 11;
    lolcodeParser.RULE_expression = 12;
    lolcodeParser.RULE_equals = 13;
    lolcodeParser.RULE_not_equals = 14;
    lolcodeParser.RULE_both = 15;
    lolcodeParser.RULE_either = 16;
    lolcodeParser.RULE_greater = 17;
    lolcodeParser.RULE_less = 18;
    lolcodeParser.RULE_add = 19;
    lolcodeParser.RULE_sub = 20;
    lolcodeParser.RULE_mul = 21;
    lolcodeParser.RULE_div = 22;
    lolcodeParser.RULE_mod = 23;
    lolcodeParser.RULE_cast = 24;
    lolcodeParser.RULE_all = 25;
    lolcodeParser.RULE_any = 26;
    lolcodeParser.RULE_not = 27;
    lolcodeParser.RULE_func = 28;
    // tslint:disable:no-trailing-whitespace
    lolcodeParser.ruleNames = [
        "program", "code_block", "statement", "loop", "declaration", "comment",
        "print_block", "if_block", "else_if_block", "input_block", "func_decl",
        "assignment", "expression", "equals", "not_equals", "both", "either",
        "greater", "less", "add", "sub", "mul", "div", "mod", "cast", "all", "any",
        "not", "func",
    ];
    lolcodeParser._LITERAL_NAMES = [
        undefined, "'HAI'", "'KTHXBYE'", "'IM IN YR'", "'WILE'", "'IM OUTTA YR'",
        "'I HAS A'", "'ITZ'", "'BTW'", "'OBTW'", "'TLDR'", "'VISIBLE'", "'MKAY?'",
        "'O RLY?'", "'YA RLY'", "'OIC'", "'MEBBE'", "'NO WAI'", "'GIMMEH'", "'HOW DUZ I'",
        "'YR'", "'AN YR'", "'IF U SAY SO'", "'R'", "'BOTH SAEM'", "'AN'", "'DIFFRINT'",
        "'BOTH OF'", "'EITHER OF'", "'BIGGR OF'", "'SMALLR OF'", "'SUM OF'", "'DIFF OF'",
        "'PRODUKT OF'", "'QUOSHUNT OF'", "'MOD OF'", "'MAEK'", "'A'", "'ALL OF'",
        "'ANY OF'", "'NOT'",
    ];
    lolcodeParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "LABEL",
        "ATOM", "STRING", "WS",
    ];
    lolcodeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(lolcodeParser._LITERAL_NAMES, lolcodeParser._SYMBOLIC_NAMES, []);
    lolcodeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\u0114\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x03\x02\x05\x02@\n\x02\x03\x03" +
        "\x06\x03C\n\x03\r\x03\x0E\x03D\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04P\n\x04\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x05\x06_\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
        "f\n\x07\x03\b\x03\b\x07\bj\n\b\f\b\x0E\bm\v\b\x03\b\x05\bp\n\b\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t}\n\t\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x8A" +
        "\n\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f" +
        "\x96\n\f\f\f\x0E\f\x99\v\f\x05\f\x9B\n\f\x03\f\x03\f\x03\f\x03\r\x03\r" +
        "\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x05\x0E\xB6\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
        "\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
        "\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xF7\n\x1B\f\x1B\x0E\x1B\xFA\v" +
        "\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0102\n\x1C" +
        "\f\x1C\x0E\x1C\u0105\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1E\x03\x1E\x06\x1E\u010E\n\x1E\r\x1E\x0E\x1E\u010F\x03\x1E\x03\x1E\x03" +
        "\x1E\x02\x02\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02" +
        "\x02\x02\u011D\x02<\x03\x02\x02\x02\x04B\x03\x02\x02\x02\x06O\x03\x02" +
        "\x02\x02\bQ\x03\x02\x02\x02\n^\x03\x02\x02\x02\fe\x03\x02\x02\x02\x0E" +
        "g\x03\x02\x02\x02\x10|\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\x8B" +
        "\x03\x02\x02\x02\x16\x8E\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xB5" +
        "\x03\x02\x02\x02\x1C\xB7\x03\x02\x02\x02\x1E\xBC\x03\x02\x02\x02 \xC1" +
        "\x03\x02\x02\x02\"\xC6\x03\x02\x02\x02$\xCB\x03\x02\x02\x02&\xD0\x03\x02" +
        "\x02\x02(\xD5\x03\x02\x02\x02*\xDA\x03\x02\x02\x02,\xDF\x03\x02\x02\x02" +
        ".\xE4\x03\x02\x02\x020\xE9\x03\x02\x02\x022\xEE\x03\x02\x02\x024\xF2\x03" +
        "\x02\x02\x026\xFD\x03\x02\x02\x028\u0108\x03\x02\x02\x02:\u010B\x03\x02" +
        "\x02\x02<=\x07\x03\x02\x02=?\x05\x04\x03\x02>@\x07\x04\x02\x02?>\x03\x02" +
        "\x02\x02?@\x03\x02\x02\x02@\x03\x03\x02\x02\x02AC\x05\x06\x04\x02BA\x03" +
        "\x02\x02\x02CD\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02E\x05" +
        "\x03\x02\x02\x02FP\x05\b\x05\x02GP\x05\n\x06\x02HP\x05\f\x07\x02IP\x05" +
        "\x0E\b\x02JP\x05\x10\t\x02KP\x05\x14\v\x02LP\x05\x16\f\x02MP\x05\x18\r" +
        "\x02NP\x05\x1A\x0E\x02OF\x03\x02\x02\x02OG\x03\x02\x02\x02OH\x03\x02\x02" +
        "\x02OI\x03\x02\x02\x02OJ\x03\x02\x02\x02OK\x03\x02\x02\x02OL\x03\x02\x02" +
        "\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02P\x07\x03\x02\x02\x02QR\x07\x05" +
        "\x02\x02RS\x07+\x02\x02ST\x07\x06\x02\x02TU\x05\x1A\x0E\x02UV\x05\x04" +
        "\x03\x02VW\x07\x07\x02\x02WX\x07+\x02\x02X\t\x03\x02\x02\x02YZ\x07\b\x02" +
        "\x02Z_\x07+\x02\x02[\\\x07\b\x02\x02\\]\x07+\x02\x02]_\x07\t\x02\x02^" +
        "Y\x03\x02\x02\x02^[\x03\x02\x02\x02_\v\x03\x02\x02\x02`a\x07\n\x02\x02" +
        "af\x07-\x02\x02bc\x07\v\x02\x02cd\x07-\x02\x02df\x07\f\x02\x02e`\x03\x02" +
        "\x02\x02eb\x03\x02\x02\x02f\r\x03\x02\x02\x02gk\x07\r\x02\x02hj\x05\x1A" +
        "\x0E\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02" +
        "\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02np\x07\x0E\x02\x02on\x03\x02" +
        "\x02\x02op\x03\x02\x02\x02p\x0F\x03\x02\x02\x02qr\x07\x0F\x02\x02rs\x07" +
        "\x10\x02\x02st\x05\x04\x03\x02tu\x07\x11\x02\x02u}\x03\x02\x02\x02vw\x07" +
        "\x0F\x02\x02wx\x07\x10\x02\x02xy\x05\x04\x03\x02yz\x05\x12\n\x02z{\x07" +
        "\x11\x02\x02{}\x03\x02\x02\x02|q\x03\x02\x02\x02|v\x03\x02\x02\x02}\x11" +
        "\x03\x02\x02\x02~\x7F\x07\x12\x02\x02\x7F\x80\x05\x1A\x0E\x02\x80\x81" +
        "\x05\x04\x03\x02\x81\x82\x05\x12\n\x02\x82\x8A\x03\x02\x02\x02\x83\x84" +
        "\x07\x13\x02\x02\x84\x8A\x05\x04\x03\x02\x85\x86\x07\x12\x02\x02\x86\x87" +
        "\x05\x1A\x0E\x02\x87\x88\x05\x04\x03\x02\x88\x8A\x03\x02\x02\x02\x89~" +
        "\x03\x02\x02\x02\x89\x83\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x8A\x13" +
        "\x03\x02\x02\x02\x8B\x8C\x07\x14\x02\x02\x8C\x8D\x07+\x02\x02\x8D\x15" +
        "\x03\x02\x02\x02\x8E\x8F\x07\x15\x02\x02\x8F\x9A\x07+\x02\x02\x90\x91" +
        "\x07\x16\x02\x02\x91\x92\x07+\x02\x02\x92\x97\x03\x02\x02\x02\x93\x94" +
        "\x07\x17\x02\x02\x94\x96\x07+\x02\x02\x95\x93\x03\x02\x02\x02\x96\x99" +
        "\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9B" +
        "\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x90\x03\x02\x02\x02\x9A\x9B" +
        "\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x05\x04\x03\x02\x9D\x9E" +
        "\x07\x18\x02\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07+\x02\x02\xA0\xA1" +
        "\x07\x19\x02\x02\xA1\xA2\x05\x1A\x0E\x02\xA2\x19\x03\x02\x02\x02\xA3\xB6" +
        "\x05\x1C\x0F\x02\xA4\xB6\x05 \x11\x02\xA5\xB6\x05\x1E\x10\x02\xA6\xB6" +
        "\x05$\x13\x02\xA7\xB6\x05&\x14\x02\xA8\xB6\x05(\x15\x02\xA9\xB6\x05*\x16" +
        "\x02\xAA\xB6\x05,\x17\x02\xAB\xB6\x05.\x18\x02\xAC\xB6\x050\x19\x02\xAD" +
        "\xB6\x052\x1A\x02\xAE\xB6\x05\"\x12\x02\xAF\xB6\x054\x1B\x02\xB0\xB6\x05" +
        "6\x1C\x02\xB1\xB6\x058\x1D\x02\xB2\xB6\x05:\x1E\x02\xB3\xB6\x07+\x02\x02" +
        "\xB4\xB6\x07,\x02\x02\xB5\xA3\x03\x02\x02\x02\xB5\xA4\x03\x02\x02\x02" +
        "\xB5\xA5\x03\x02\x02\x02\xB5\xA6\x03\x02\x02\x02\xB5\xA7\x03\x02\x02\x02" +
        "\xB5\xA8\x03\x02\x02\x02\xB5\xA9\x03\x02\x02\x02\xB5\xAA\x03\x02\x02\x02" +
        "\xB5\xAB\x03\x02\x02\x02\xB5\xAC\x03\x02\x02\x02\xB5\xAD\x03\x02\x02\x02" +
        "\xB5\xAE\x03\x02\x02\x02\xB5\xAF\x03\x02\x02\x02\xB5\xB0\x03\x02\x02\x02" +
        "\xB5\xB1\x03\x02\x02\x02\xB5\xB2\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02" +
        "\xB5\xB4\x03\x02\x02\x02\xB6\x1B\x03\x02\x02\x02\xB7\xB8\x07\x1A\x02\x02" +
        "\xB8\xB9\x05\x1A\x0E\x02\xB9\xBA\x07\x1B\x02\x02\xBA\xBB\x05\x1A\x0E\x02" +
        "\xBB\x1D\x03\x02\x02\x02\xBC\xBD\x07\x1C\x02\x02\xBD\xBE\x05\x1A\x0E\x02" +
        "\xBE\xBF\x07\x1B\x02\x02\xBF\xC0\x05\x1A\x0E\x02\xC0\x1F\x03\x02\x02\x02" +
        "\xC1\xC2\x07\x1D\x02\x02\xC2\xC3\x05\x1A\x0E\x02\xC3\xC4\x07\x1B\x02\x02" +
        "\xC4\xC5\x05\x1A\x0E\x02\xC5!\x03\x02\x02\x02\xC6\xC7\x07\x1E\x02\x02" +
        "\xC7\xC8\x05\x1A\x0E\x02\xC8\xC9\x07\x1B\x02\x02\xC9\xCA\x05\x1A\x0E\x02" +
        "\xCA#\x03\x02\x02\x02\xCB\xCC\x07\x1F\x02\x02\xCC\xCD\x05\x1A\x0E\x02" +
        "\xCD\xCE\x07\x1B\x02\x02\xCE\xCF\x05\x1A\x0E\x02\xCF%\x03\x02\x02\x02" +
        "\xD0\xD1\x07 \x02\x02\xD1\xD2\x05\x1A\x0E\x02\xD2\xD3\x07\x1B\x02\x02" +
        "\xD3\xD4\x05\x1A\x0E\x02\xD4\'\x03\x02\x02\x02\xD5\xD6\x07!\x02\x02\xD6" +
        "\xD7\x05\x1A\x0E\x02\xD7\xD8\x07\x1B\x02\x02\xD8\xD9\x05\x1A\x0E\x02\xD9" +
        ")\x03\x02\x02\x02\xDA\xDB\x07\"\x02\x02\xDB\xDC\x05\x1A\x0E\x02\xDC\xDD" +
        "\x07\x1B\x02\x02\xDD\xDE\x05\x1A\x0E\x02\xDE+\x03\x02\x02\x02\xDF\xE0" +
        "\x07#\x02\x02\xE0\xE1\x05\x1A\x0E\x02\xE1\xE2\x07\x1B\x02\x02\xE2\xE3" +
        "\x05\x1A\x0E\x02\xE3-\x03\x02\x02\x02\xE4\xE5\x07$\x02\x02\xE5\xE6\x05" +
        "\x1A\x0E\x02\xE6\xE7\x07\x1B\x02\x02\xE7\xE8\x05\x1A\x0E\x02\xE8/\x03" +
        "\x02\x02\x02\xE9\xEA\x07%\x02\x02\xEA\xEB\x05\x1A\x0E\x02\xEB\xEC\x07" +
        "\x1B\x02\x02\xEC\xED\x05\x1A\x0E\x02\xED1\x03\x02\x02\x02\xEE\xEF\x07" +
        "&\x02\x02\xEF\xF0\x05\x1A\x0E\x02\xF0\xF1\x07\'\x02\x02\xF13\x03\x02\x02" +
        "\x02\xF2\xF3\x07(\x02\x02\xF3\xF8\x05\x1A\x0E\x02\xF4\xF5\x07\x1B\x02" +
        "\x02\xF5\xF7\x05\x1A\x0E\x02\xF6\xF4\x03\x02\x02\x02\xF7\xFA\x03\x02\x02" +
        "\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x03\x02\x02" +
        "\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x07\x0E\x02\x02\xFC5\x03\x02\x02" +
        "\x02\xFD\xFE\x07)\x02\x02\xFE\u0103\x05\x1A\x0E\x02\xFF\u0100\x07\x1B" +
        "\x02\x02\u0100\u0102\x05\x1A\x0E\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0105" +
        "\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
        "\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0107\x07" +
        "\x0E\x02\x02\u01077\x03\x02\x02\x02\u0108\u0109\x07*\x02\x02\u0109\u010A" +
        "\x05\x1A\x0E\x02\u010A9\x03\x02\x02\x02\u010B\u010D\x07+\x02\x02\u010C" +
        "\u010E\x05\x1A\x0E\x02\u010D\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02" +
        "\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
        "\u0111\x03\x02\x02\x02\u0111\u0112\x07\x0E\x02\x02\u0112;\x03\x02\x02" +
        "\x02\x11?DO^eko|\x89\x97\x9A\xB5\xF8\u0103\u010F";
    return lolcodeParser;
}(Parser_1.Parser));
exports.lolcodeParser = lolcodeParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.code_block = function () {
        return this.getRuleContext(0, Code_blockContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_program; },
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
var Code_blockContext = /** @class */ (function (_super) {
    __extends(Code_blockContext, _super);
    function Code_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Code_blockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Code_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_code_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Code_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterCode_block) {
            listener.enterCode_block(this);
        }
    };
    // @Override
    Code_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitCode_block) {
            listener.exitCode_block(this);
        }
    };
    // @Override
    Code_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitCode_block) {
            return visitor.visitCode_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Code_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Code_blockContext = Code_blockContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.loop = function () {
        return this.tryGetRuleContext(0, LoopContext);
    };
    StatementContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    StatementContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    StatementContext.prototype.print_block = function () {
        return this.tryGetRuleContext(0, Print_blockContext);
    };
    StatementContext.prototype.if_block = function () {
        return this.tryGetRuleContext(0, If_blockContext);
    };
    StatementContext.prototype.input_block = function () {
        return this.tryGetRuleContext(0, Input_blockContext);
    };
    StatementContext.prototype.func_decl = function () {
        return this.tryGetRuleContext(0, Func_declContext);
    };
    StatementContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    StatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_statement; },
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
var LoopContext = /** @class */ (function (_super) {
    __extends(LoopContext, _super);
    function LoopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LoopContext.prototype.LABEL = function (i) {
        if (i === undefined) {
            return this.getTokens(lolcodeParser.LABEL);
        }
        else {
            return this.getToken(lolcodeParser.LABEL, i);
        }
    };
    LoopContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LoopContext.prototype.code_block = function () {
        return this.getRuleContext(0, Code_blockContext);
    };
    Object.defineProperty(LoopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_loop; },
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
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.LABEL = function () { return this.getToken(lolcodeParser.LABEL, 0); };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_declaration; },
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
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.STRING = function () { return this.getToken(lolcodeParser.STRING, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_comment; },
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
var Print_blockContext = /** @class */ (function (_super) {
    __extends(Print_blockContext, _super);
    function Print_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Print_blockContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(Print_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_print_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Print_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterPrint_block) {
            listener.enterPrint_block(this);
        }
    };
    // @Override
    Print_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitPrint_block) {
            listener.exitPrint_block(this);
        }
    };
    // @Override
    Print_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitPrint_block) {
            return visitor.visitPrint_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Print_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Print_blockContext = Print_blockContext;
var If_blockContext = /** @class */ (function (_super) {
    __extends(If_blockContext, _super);
    function If_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_blockContext.prototype.code_block = function () {
        return this.getRuleContext(0, Code_blockContext);
    };
    If_blockContext.prototype.else_if_block = function () {
        return this.tryGetRuleContext(0, Else_if_blockContext);
    };
    Object.defineProperty(If_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_if_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_block) {
            listener.enterIf_block(this);
        }
    };
    // @Override
    If_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_block) {
            listener.exitIf_block(this);
        }
    };
    // @Override
    If_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_block) {
            return visitor.visitIf_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_blockContext = If_blockContext;
var Else_if_blockContext = /** @class */ (function (_super) {
    __extends(Else_if_blockContext, _super);
    function Else_if_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Else_if_blockContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Else_if_blockContext.prototype.code_block = function () {
        return this.getRuleContext(0, Code_blockContext);
    };
    Else_if_blockContext.prototype.else_if_block = function () {
        return this.tryGetRuleContext(0, Else_if_blockContext);
    };
    Object.defineProperty(Else_if_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_else_if_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Else_if_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterElse_if_block) {
            listener.enterElse_if_block(this);
        }
    };
    // @Override
    Else_if_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitElse_if_block) {
            listener.exitElse_if_block(this);
        }
    };
    // @Override
    Else_if_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitElse_if_block) {
            return visitor.visitElse_if_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Else_if_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Else_if_blockContext = Else_if_blockContext;
var Input_blockContext = /** @class */ (function (_super) {
    __extends(Input_blockContext, _super);
    function Input_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Input_blockContext.prototype.LABEL = function () { return this.getToken(lolcodeParser.LABEL, 0); };
    Object.defineProperty(Input_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_input_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Input_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterInput_block) {
            listener.enterInput_block(this);
        }
    };
    // @Override
    Input_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitInput_block) {
            listener.exitInput_block(this);
        }
    };
    // @Override
    Input_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitInput_block) {
            return visitor.visitInput_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Input_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Input_blockContext = Input_blockContext;
var Func_declContext = /** @class */ (function (_super) {
    __extends(Func_declContext, _super);
    function Func_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Func_declContext.prototype.LABEL = function (i) {
        if (i === undefined) {
            return this.getTokens(lolcodeParser.LABEL);
        }
        else {
            return this.getToken(lolcodeParser.LABEL, i);
        }
    };
    Func_declContext.prototype.code_block = function () {
        return this.getRuleContext(0, Code_blockContext);
    };
    Object.defineProperty(Func_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_func_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Func_declContext.prototype.enterRule = function (listener) {
        if (listener.enterFunc_decl) {
            listener.enterFunc_decl(this);
        }
    };
    // @Override
    Func_declContext.prototype.exitRule = function (listener) {
        if (listener.exitFunc_decl) {
            listener.exitFunc_decl(this);
        }
    };
    // @Override
    Func_declContext.prototype.accept = function (visitor) {
        if (visitor.visitFunc_decl) {
            return visitor.visitFunc_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Func_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Func_declContext = Func_declContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.LABEL = function () { return this.getToken(lolcodeParser.LABEL, 0); };
    AssignmentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_assignment; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.equals = function () {
        return this.tryGetRuleContext(0, EqualsContext);
    };
    ExpressionContext.prototype.both = function () {
        return this.tryGetRuleContext(0, BothContext);
    };
    ExpressionContext.prototype.not_equals = function () {
        return this.tryGetRuleContext(0, Not_equalsContext);
    };
    ExpressionContext.prototype.greater = function () {
        return this.tryGetRuleContext(0, GreaterContext);
    };
    ExpressionContext.prototype.less = function () {
        return this.tryGetRuleContext(0, LessContext);
    };
    ExpressionContext.prototype.add = function () {
        return this.tryGetRuleContext(0, AddContext);
    };
    ExpressionContext.prototype.sub = function () {
        return this.tryGetRuleContext(0, SubContext);
    };
    ExpressionContext.prototype.mul = function () {
        return this.tryGetRuleContext(0, MulContext);
    };
    ExpressionContext.prototype.div = function () {
        return this.tryGetRuleContext(0, DivContext);
    };
    ExpressionContext.prototype.mod = function () {
        return this.tryGetRuleContext(0, ModContext);
    };
    ExpressionContext.prototype.cast = function () {
        return this.tryGetRuleContext(0, CastContext);
    };
    ExpressionContext.prototype.either = function () {
        return this.tryGetRuleContext(0, EitherContext);
    };
    ExpressionContext.prototype.all = function () {
        return this.tryGetRuleContext(0, AllContext);
    };
    ExpressionContext.prototype.any = function () {
        return this.tryGetRuleContext(0, AnyContext);
    };
    ExpressionContext.prototype.not = function () {
        return this.tryGetRuleContext(0, NotContext);
    };
    ExpressionContext.prototype.func = function () {
        return this.tryGetRuleContext(0, FuncContext);
    };
    ExpressionContext.prototype.LABEL = function () { return this.tryGetToken(lolcodeParser.LABEL, 0); };
    ExpressionContext.prototype.ATOM = function () { return this.tryGetToken(lolcodeParser.ATOM, 0); };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_expression; },
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
var EqualsContext = /** @class */ (function (_super) {
    __extends(EqualsContext, _super);
    function EqualsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualsContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(EqualsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_equals; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualsContext.prototype.enterRule = function (listener) {
        if (listener.enterEquals) {
            listener.enterEquals(this);
        }
    };
    // @Override
    EqualsContext.prototype.exitRule = function (listener) {
        if (listener.exitEquals) {
            listener.exitEquals(this);
        }
    };
    // @Override
    EqualsContext.prototype.accept = function (visitor) {
        if (visitor.visitEquals) {
            return visitor.visitEquals(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualsContext = EqualsContext;
var Not_equalsContext = /** @class */ (function (_super) {
    __extends(Not_equalsContext, _super);
    function Not_equalsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Not_equalsContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(Not_equalsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_not_equals; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Not_equalsContext.prototype.enterRule = function (listener) {
        if (listener.enterNot_equals) {
            listener.enterNot_equals(this);
        }
    };
    // @Override
    Not_equalsContext.prototype.exitRule = function (listener) {
        if (listener.exitNot_equals) {
            listener.exitNot_equals(this);
        }
    };
    // @Override
    Not_equalsContext.prototype.accept = function (visitor) {
        if (visitor.visitNot_equals) {
            return visitor.visitNot_equals(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Not_equalsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Not_equalsContext = Not_equalsContext;
var BothContext = /** @class */ (function (_super) {
    __extends(BothContext, _super);
    function BothContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BothContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(BothContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_both; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BothContext.prototype.enterRule = function (listener) {
        if (listener.enterBoth) {
            listener.enterBoth(this);
        }
    };
    // @Override
    BothContext.prototype.exitRule = function (listener) {
        if (listener.exitBoth) {
            listener.exitBoth(this);
        }
    };
    // @Override
    BothContext.prototype.accept = function (visitor) {
        if (visitor.visitBoth) {
            return visitor.visitBoth(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BothContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BothContext = BothContext;
var EitherContext = /** @class */ (function (_super) {
    __extends(EitherContext, _super);
    function EitherContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EitherContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(EitherContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_either; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EitherContext.prototype.enterRule = function (listener) {
        if (listener.enterEither) {
            listener.enterEither(this);
        }
    };
    // @Override
    EitherContext.prototype.exitRule = function (listener) {
        if (listener.exitEither) {
            listener.exitEither(this);
        }
    };
    // @Override
    EitherContext.prototype.accept = function (visitor) {
        if (visitor.visitEither) {
            return visitor.visitEither(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EitherContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EitherContext = EitherContext;
var GreaterContext = /** @class */ (function (_super) {
    __extends(GreaterContext, _super);
    function GreaterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GreaterContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(GreaterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_greater; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GreaterContext.prototype.enterRule = function (listener) {
        if (listener.enterGreater) {
            listener.enterGreater(this);
        }
    };
    // @Override
    GreaterContext.prototype.exitRule = function (listener) {
        if (listener.exitGreater) {
            listener.exitGreater(this);
        }
    };
    // @Override
    GreaterContext.prototype.accept = function (visitor) {
        if (visitor.visitGreater) {
            return visitor.visitGreater(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GreaterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GreaterContext = GreaterContext;
var LessContext = /** @class */ (function (_super) {
    __extends(LessContext, _super);
    function LessContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LessContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(LessContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_less; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LessContext.prototype.enterRule = function (listener) {
        if (listener.enterLess) {
            listener.enterLess(this);
        }
    };
    // @Override
    LessContext.prototype.exitRule = function (listener) {
        if (listener.exitLess) {
            listener.exitLess(this);
        }
    };
    // @Override
    LessContext.prototype.accept = function (visitor) {
        if (visitor.visitLess) {
            return visitor.visitLess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LessContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LessContext = LessContext;
var AddContext = /** @class */ (function (_super) {
    __extends(AddContext, _super);
    function AddContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(AddContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_add; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddContext.prototype.enterRule = function (listener) {
        if (listener.enterAdd) {
            listener.enterAdd(this);
        }
    };
    // @Override
    AddContext.prototype.exitRule = function (listener) {
        if (listener.exitAdd) {
            listener.exitAdd(this);
        }
    };
    // @Override
    AddContext.prototype.accept = function (visitor) {
        if (visitor.visitAdd) {
            return visitor.visitAdd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddContext = AddContext;
var SubContext = /** @class */ (function (_super) {
    __extends(SubContext, _super);
    function SubContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(SubContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubContext.prototype.enterRule = function (listener) {
        if (listener.enterSub) {
            listener.enterSub(this);
        }
    };
    // @Override
    SubContext.prototype.exitRule = function (listener) {
        if (listener.exitSub) {
            listener.exitSub(this);
        }
    };
    // @Override
    SubContext.prototype.accept = function (visitor) {
        if (visitor.visitSub) {
            return visitor.visitSub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubContext = SubContext;
var MulContext = /** @class */ (function (_super) {
    __extends(MulContext, _super);
    function MulContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MulContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(MulContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_mul; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MulContext.prototype.enterRule = function (listener) {
        if (listener.enterMul) {
            listener.enterMul(this);
        }
    };
    // @Override
    MulContext.prototype.exitRule = function (listener) {
        if (listener.exitMul) {
            listener.exitMul(this);
        }
    };
    // @Override
    MulContext.prototype.accept = function (visitor) {
        if (visitor.visitMul) {
            return visitor.visitMul(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MulContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MulContext = MulContext;
var DivContext = /** @class */ (function (_super) {
    __extends(DivContext, _super);
    function DivContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DivContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(DivContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_div; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DivContext.prototype.enterRule = function (listener) {
        if (listener.enterDiv) {
            listener.enterDiv(this);
        }
    };
    // @Override
    DivContext.prototype.exitRule = function (listener) {
        if (listener.exitDiv) {
            listener.exitDiv(this);
        }
    };
    // @Override
    DivContext.prototype.accept = function (visitor) {
        if (visitor.visitDiv) {
            return visitor.visitDiv(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DivContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DivContext = DivContext;
var ModContext = /** @class */ (function (_super) {
    __extends(ModContext, _super);
    function ModContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ModContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_mod; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModContext.prototype.enterRule = function (listener) {
        if (listener.enterMod) {
            listener.enterMod(this);
        }
    };
    // @Override
    ModContext.prototype.exitRule = function (listener) {
        if (listener.exitMod) {
            listener.exitMod(this);
        }
    };
    // @Override
    ModContext.prototype.accept = function (visitor) {
        if (visitor.visitMod) {
            return visitor.visitMod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModContext = ModContext;
var CastContext = /** @class */ (function (_super) {
    __extends(CastContext, _super);
    function CastContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CastContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(CastContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_cast; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CastContext.prototype.enterRule = function (listener) {
        if (listener.enterCast) {
            listener.enterCast(this);
        }
    };
    // @Override
    CastContext.prototype.exitRule = function (listener) {
        if (listener.exitCast) {
            listener.exitCast(this);
        }
    };
    // @Override
    CastContext.prototype.accept = function (visitor) {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CastContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CastContext = CastContext;
var AllContext = /** @class */ (function (_super) {
    __extends(AllContext, _super);
    function AllContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AllContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(AllContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_all; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AllContext.prototype.enterRule = function (listener) {
        if (listener.enterAll) {
            listener.enterAll(this);
        }
    };
    // @Override
    AllContext.prototype.exitRule = function (listener) {
        if (listener.exitAll) {
            listener.exitAll(this);
        }
    };
    // @Override
    AllContext.prototype.accept = function (visitor) {
        if (visitor.visitAll) {
            return visitor.visitAll(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AllContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AllContext = AllContext;
var AnyContext = /** @class */ (function (_super) {
    __extends(AnyContext, _super);
    function AnyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnyContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(AnyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_any; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnyContext.prototype.enterRule = function (listener) {
        if (listener.enterAny) {
            listener.enterAny(this);
        }
    };
    // @Override
    AnyContext.prototype.exitRule = function (listener) {
        if (listener.exitAny) {
            listener.exitAny(this);
        }
    };
    // @Override
    AnyContext.prototype.accept = function (visitor) {
        if (visitor.visitAny) {
            return visitor.visitAny(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnyContext = AnyContext;
var NotContext = /** @class */ (function (_super) {
    __extends(NotContext, _super);
    function NotContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NotContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(NotContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_not; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NotContext.prototype.enterRule = function (listener) {
        if (listener.enterNot) {
            listener.enterNot(this);
        }
    };
    // @Override
    NotContext.prototype.exitRule = function (listener) {
        if (listener.exitNot) {
            listener.exitNot(this);
        }
    };
    // @Override
    NotContext.prototype.accept = function (visitor) {
        if (visitor.visitNot) {
            return visitor.visitNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NotContext = NotContext;
var FuncContext = /** @class */ (function (_super) {
    __extends(FuncContext, _super);
    function FuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncContext.prototype.LABEL = function () { return this.getToken(lolcodeParser.LABEL, 0); };
    FuncContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(FuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lolcodeParser.RULE_func; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncContext.prototype.enterRule = function (listener) {
        if (listener.enterFunc) {
            listener.enterFunc(this);
        }
    };
    // @Override
    FuncContext.prototype.exitRule = function (listener) {
        if (listener.exitFunc) {
            listener.exitFunc(this);
        }
    };
    // @Override
    FuncContext.prototype.accept = function (visitor) {
        if (visitor.visitFunc) {
            return visitor.visitFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncContext = FuncContext;
