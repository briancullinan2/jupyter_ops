"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm8086/asm8086.g4 by ANTLR 4.7.3-SNAPSHOT
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
var asm8086Parser = /** @class */ (function (_super) {
    __extends(asm8086Parser, _super);
    function asm8086Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(asm8086Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(asm8086Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return asm8086Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asm8086Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "asm8086.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asm8086Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return asm8086Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asm8086Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return asm8086Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    asm8086Parser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, asm8086Parser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 86;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__0) | (1 << asm8086Parser.T__2) | (1 << asm8086Parser.DSEG) | (1 << asm8086Parser.CSEG) | (1 << asm8086Parser.INCLUDE) | (1 << asm8086Parser.TITLE) | (1 << asm8086Parser.END) | (1 << asm8086Parser.ORG) | (1 << asm8086Parser.ENDIF) | (1 << asm8086Parser.IF) | (1 << asm8086Parser.DW) | (1 << asm8086Parser.DB) | (1 << asm8086Parser.DD))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (asm8086Parser.RW - 33)) | (1 << (asm8086Parser.RB - 33)) | (1 << (asm8086Parser.RS - 33)) | (1 << (asm8086Parser.COMMENT - 33)) | (1 << (asm8086Parser.OPCODE - 33)) | (1 << (asm8086Parser.REP - 33)) | (1 << (asm8086Parser.NAME - 33)) | (1 << (asm8086Parser.EOL - 33)))) !== 0)) {
                    {
                        {
                            this.state = 74;
                            this.line();
                            this.state = 79;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === asm8086Parser.T__0) {
                                {
                                    {
                                        this.state = 75;
                                        this.match(asm8086Parser.T__0);
                                        this.state = 76;
                                        this.line();
                                    }
                                }
                                this.state = 81;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 82;
                            this.match(asm8086Parser.EOL);
                        }
                    }
                    this.state = 88;
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
    asm8086Parser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, asm8086Parser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            this.state = 89;
                            this.lbl();
                        }
                        break;
                }
                this.state = 94;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case asm8086Parser.T__2:
                    case asm8086Parser.DSEG:
                    case asm8086Parser.CSEG:
                    case asm8086Parser.INCLUDE:
                    case asm8086Parser.TITLE:
                    case asm8086Parser.END:
                    case asm8086Parser.ORG:
                    case asm8086Parser.ENDIF:
                    case asm8086Parser.IF:
                    case asm8086Parser.DW:
                    case asm8086Parser.DB:
                    case asm8086Parser.DD:
                    case asm8086Parser.RW:
                    case asm8086Parser.RB:
                    case asm8086Parser.RS:
                    case asm8086Parser.NAME:
                        {
                            this.state = 92;
                            this.assemblerdirective();
                        }
                        break;
                    case asm8086Parser.OPCODE:
                    case asm8086Parser.REP:
                        {
                            this.state = 93;
                            this.instruction();
                        }
                        break;
                    case asm8086Parser.T__0:
                    case asm8086Parser.COMMENT:
                    case asm8086Parser.EOL:
                        break;
                    default:
                        break;
                }
                this.state = 97;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm8086Parser.COMMENT) {
                    {
                        this.state = 96;
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
    asm8086Parser.prototype.instruction = function () {
        var _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, asm8086Parser.RULE_instruction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm8086Parser.REP) {
                    {
                        this.state = 99;
                        this.rep();
                    }
                }
                this.state = 102;
                this.opcode();
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
                    {
                        this.state = 103;
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
    asm8086Parser.prototype.lbl = function () {
        var _localctx = new LblContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, asm8086Parser.RULE_lbl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                this.label();
                this.state = 108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm8086Parser.T__1) {
                    {
                        this.state = 107;
                        this.match(asm8086Parser.T__1);
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
    asm8086Parser.prototype.assemblerdirective = function () {
        var _localctx = new AssemblerdirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, asm8086Parser.RULE_assemblerdirective);
        try {
            this.state = 126;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 110;
                        this.org();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 111;
                        this.end();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 112;
                        this.if_();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 113;
                        this.endif();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 114;
                        this.equ();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 115;
                        this.db();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 116;
                        this.dw();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 117;
                        this.cseg();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 118;
                        this.dd();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 119;
                        this.dseg();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 120;
                        this.title();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 121;
                        this.include();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 122;
                        this.rw();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 123;
                        this.rb();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 124;
                        this.rs();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 125;
                        this.match(asm8086Parser.T__2);
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
    asm8086Parser.prototype.rw = function () {
        var _localctx = new RwContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, asm8086Parser.RULE_rw);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm8086Parser.NAME) {
                    {
                        this.state = 128;
                        this.name();
                    }
                }
                this.state = 131;
                this.match(asm8086Parser.RW);
                this.state = 132;
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
    asm8086Parser.prototype.rb = function () {
        var _localctx = new RbContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, asm8086Parser.RULE_rb);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm8086Parser.NAME) {
                    {
                        this.state = 134;
                        this.name();
                    }
                }
                this.state = 137;
                this.match(asm8086Parser.RB);
                this.state = 138;
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
    asm8086Parser.prototype.rs = function () {
        var _localctx = new RsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, asm8086Parser.RULE_rs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm8086Parser.NAME) {
                    {
                        this.state = 140;
                        this.name();
                    }
                }
                this.state = 143;
                this.match(asm8086Parser.RS);
                this.state = 144;
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
    asm8086Parser.prototype.cseg = function () {
        var _localctx = new CsegContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, asm8086Parser.RULE_cseg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 146;
                this.match(asm8086Parser.CSEG);
                this.state = 148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
                    {
                        this.state = 147;
                        this.expression();
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
    asm8086Parser.prototype.dseg = function () {
        var _localctx = new DsegContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, asm8086Parser.RULE_dseg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 150;
                this.match(asm8086Parser.DSEG);
                this.state = 152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
                    {
                        this.state = 151;
                        this.expression();
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
    asm8086Parser.prototype.dw = function () {
        var _localctx = new DwContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, asm8086Parser.RULE_dw);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(asm8086Parser.DW);
                this.state = 155;
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
    asm8086Parser.prototype.db = function () {
        var _localctx = new DbContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, asm8086Parser.RULE_db);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(asm8086Parser.DB);
                this.state = 158;
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
    asm8086Parser.prototype.dd = function () {
        var _localctx = new DdContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, asm8086Parser.RULE_dd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(asm8086Parser.DD);
                this.state = 161;
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
    asm8086Parser.prototype.equ = function () {
        var _localctx = new EquContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, asm8086Parser.RULE_equ);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.name();
                this.state = 164;
                this.match(asm8086Parser.EQU);
                this.state = 165;
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
    asm8086Parser.prototype.if_ = function () {
        var _localctx = new If_Context(this._ctx, this.state);
        this.enterRule(_localctx, 28, asm8086Parser.RULE_if_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(asm8086Parser.IF);
                this.state = 168;
                this.assemblerexpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.assemblerexpression = function () {
        var _localctx = new AssemblerexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, asm8086Parser.RULE_assemblerexpression);
        var _la;
        try {
            this.state = 183;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case asm8086Parser.NOT:
                case asm8086Parser.SIGN:
                case asm8086Parser.NAME:
                case asm8086Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 170;
                        this.assemblerterm();
                        this.state = 176;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === asm8086Parser.T__5 || _la === asm8086Parser.T__6) {
                            {
                                {
                                    this.state = 171;
                                    this.assemblerlogical();
                                    this.state = 172;
                                    this.assemblerterm();
                                }
                            }
                            this.state = 178;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case asm8086Parser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 179;
                        this.match(asm8086Parser.T__3);
                        this.state = 180;
                        this.assemblerexpression();
                        this.state = 181;
                        this.match(asm8086Parser.T__4);
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
    asm8086Parser.prototype.assemblerlogical = function () {
        var _localctx = new AssemblerlogicalContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, asm8086Parser.RULE_assemblerlogical);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                _la = this._input.LA(1);
                if (!(_la === asm8086Parser.T__5 || _la === asm8086Parser.T__6)) {
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
    asm8086Parser.prototype.assemblerterm = function () {
        var _localctx = new AssemblertermContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, asm8086Parser.RULE_assemblerterm);
        try {
            this.state = 191;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case asm8086Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 187;
                        this.name();
                    }
                    break;
                case asm8086Parser.SIGN:
                case asm8086Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 188;
                        this.number();
                    }
                    break;
                case asm8086Parser.NOT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 189;
                            this.match(asm8086Parser.NOT);
                            this.state = 190;
                            this.assemblerterm();
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
    asm8086Parser.prototype.endif = function () {
        var _localctx = new EndifContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, asm8086Parser.RULE_endif);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(asm8086Parser.ENDIF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.end = function () {
        var _localctx = new EndContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, asm8086Parser.RULE_end);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(asm8086Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.org = function () {
        var _localctx = new OrgContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, asm8086Parser.RULE_org);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                this.match(asm8086Parser.ORG);
                this.state = 198;
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
    asm8086Parser.prototype.title = function () {
        var _localctx = new TitleContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, asm8086Parser.RULE_title);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.match(asm8086Parser.TITLE);
                this.state = 201;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.include = function () {
        var _localctx = new IncludeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, asm8086Parser.RULE_include);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this.match(asm8086Parser.INCLUDE);
                this.state = 204;
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
    asm8086Parser.prototype.expressionlist = function () {
        var _localctx = new ExpressionlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, asm8086Parser.RULE_expressionlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.expression();
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === asm8086Parser.T__7) {
                    {
                        {
                            this.state = 207;
                            this.match(asm8086Parser.T__7);
                            this.state = 208;
                            this.expression();
                        }
                    }
                    this.state = 213;
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
    asm8086Parser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, asm8086Parser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
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
    asm8086Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, asm8086Parser.RULE_expression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.multiplyingExpression();
                this.state = 221;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 217;
                                this.match(asm8086Parser.SIGN);
                                this.state = 218;
                                this.multiplyingExpression();
                            }
                        }
                    }
                    this.state = 223;
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
    asm8086Parser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, asm8086Parser.RULE_multiplyingExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.argument();
                this.state = 229;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 225;
                                _la = this._input.LA(1);
                                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__8) | (1 << asm8086Parser.T__9) | (1 << asm8086Parser.T__10) | (1 << asm8086Parser.T__11))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 226;
                                this.argument();
                            }
                        }
                    }
                    this.state = 231;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, asm8086Parser.RULE_argument);
        try {
            this.state = 263;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 232;
                        this.number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 233;
                        this.dollar();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 234;
                        this.register_();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 235;
                        this.name();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 236;
                        this.string();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        {
                            this.state = 237;
                            this.match(asm8086Parser.T__3);
                            this.state = 238;
                            this.expression();
                            this.state = 239;
                            this.match(asm8086Parser.T__4);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        {
                            this.state = 243;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case asm8086Parser.SIGN:
                                case asm8086Parser.NUMBER:
                                    {
                                        this.state = 241;
                                        this.number();
                                    }
                                    break;
                                case asm8086Parser.NAME:
                                    {
                                        this.state = 242;
                                        this.name();
                                    }
                                    break;
                                case asm8086Parser.T__12:
                                    break;
                                default:
                                    break;
                            }
                            this.state = 245;
                            this.match(asm8086Parser.T__12);
                            this.state = 246;
                            this.expression();
                            this.state = 247;
                            this.match(asm8086Parser.T__13);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 249;
                        this.ptr();
                        this.state = 250;
                        this.expression();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 252;
                        this.match(asm8086Parser.NOT);
                        this.state = 253;
                        this.expression();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 254;
                        this.match(asm8086Parser.OFFSET);
                        this.state = 255;
                        this.expression();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 256;
                        this.match(asm8086Parser.LENGTH);
                        this.state = 257;
                        this.expression();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        {
                            this.state = 258;
                            this.register_();
                            this.state = 259;
                            this.match(asm8086Parser.T__1);
                        }
                        this.state = 261;
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
    asm8086Parser.prototype.ptr = function () {
        var _localctx = new PtrContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, asm8086Parser.RULE_ptr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0)) {
                    {
                        this.state = 265;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0))) {
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
                this.state = 268;
                this.match(asm8086Parser.PTR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.dollar = function () {
        var _localctx = new DollarContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, asm8086Parser.RULE_dollar);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this.match(asm8086Parser.DOLLAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.register_ = function () {
        var _localctx = new Register_Context(this._ctx, this.state);
        this.enterRule(_localctx, 60, asm8086Parser.RULE_register_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.match(asm8086Parser.REGISTER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, asm8086Parser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.match(asm8086Parser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, asm8086Parser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 276;
                this.match(asm8086Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, asm8086Parser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm8086Parser.SIGN) {
                    {
                        this.state = 278;
                        this.match(asm8086Parser.SIGN);
                    }
                }
                this.state = 281;
                this.match(asm8086Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, asm8086Parser.RULE_opcode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.match(asm8086Parser.OPCODE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.rep = function () {
        var _localctx = new RepContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, asm8086Parser.RULE_rep);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                this.match(asm8086Parser.REP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm8086Parser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, asm8086Parser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.match(asm8086Parser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(asm8086Parser, "_ATN", {
        get: function () {
            if (!asm8086Parser.__ATN) {
                asm8086Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(asm8086Parser._serializedATN));
            }
            return asm8086Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    asm8086Parser.T__0 = 1;
    asm8086Parser.T__1 = 2;
    asm8086Parser.T__2 = 3;
    asm8086Parser.T__3 = 4;
    asm8086Parser.T__4 = 5;
    asm8086Parser.T__5 = 6;
    asm8086Parser.T__6 = 7;
    asm8086Parser.T__7 = 8;
    asm8086Parser.T__8 = 9;
    asm8086Parser.T__9 = 10;
    asm8086Parser.T__10 = 11;
    asm8086Parser.T__11 = 12;
    asm8086Parser.T__12 = 13;
    asm8086Parser.T__13 = 14;
    asm8086Parser.BYTE = 15;
    asm8086Parser.WORD = 16;
    asm8086Parser.DWORD = 17;
    asm8086Parser.DSEG = 18;
    asm8086Parser.CSEG = 19;
    asm8086Parser.INCLUDE = 20;
    asm8086Parser.TITLE = 21;
    asm8086Parser.END = 22;
    asm8086Parser.ORG = 23;
    asm8086Parser.ENDIF = 24;
    asm8086Parser.IF = 25;
    asm8086Parser.EQU = 26;
    asm8086Parser.DW = 27;
    asm8086Parser.DB = 28;
    asm8086Parser.DD = 29;
    asm8086Parser.PTR = 30;
    asm8086Parser.NOT = 31;
    asm8086Parser.OFFSET = 32;
    asm8086Parser.RW = 33;
    asm8086Parser.RB = 34;
    asm8086Parser.RS = 35;
    asm8086Parser.LENGTH = 36;
    asm8086Parser.COMMENT = 37;
    asm8086Parser.REGISTER = 38;
    asm8086Parser.OPCODE = 39;
    asm8086Parser.REP = 40;
    asm8086Parser.DOLLAR = 41;
    asm8086Parser.SIGN = 42;
    asm8086Parser.NAME = 43;
    asm8086Parser.NUMBER = 44;
    asm8086Parser.STRING = 45;
    asm8086Parser.EOL = 46;
    asm8086Parser.WS = 47;
    asm8086Parser.RULE_prog = 0;
    asm8086Parser.RULE_line = 1;
    asm8086Parser.RULE_instruction = 2;
    asm8086Parser.RULE_lbl = 3;
    asm8086Parser.RULE_assemblerdirective = 4;
    asm8086Parser.RULE_rw = 5;
    asm8086Parser.RULE_rb = 6;
    asm8086Parser.RULE_rs = 7;
    asm8086Parser.RULE_cseg = 8;
    asm8086Parser.RULE_dseg = 9;
    asm8086Parser.RULE_dw = 10;
    asm8086Parser.RULE_db = 11;
    asm8086Parser.RULE_dd = 12;
    asm8086Parser.RULE_equ = 13;
    asm8086Parser.RULE_if_ = 14;
    asm8086Parser.RULE_assemblerexpression = 15;
    asm8086Parser.RULE_assemblerlogical = 16;
    asm8086Parser.RULE_assemblerterm = 17;
    asm8086Parser.RULE_endif = 18;
    asm8086Parser.RULE_end = 19;
    asm8086Parser.RULE_org = 20;
    asm8086Parser.RULE_title = 21;
    asm8086Parser.RULE_include = 22;
    asm8086Parser.RULE_expressionlist = 23;
    asm8086Parser.RULE_label = 24;
    asm8086Parser.RULE_expression = 25;
    asm8086Parser.RULE_multiplyingExpression = 26;
    asm8086Parser.RULE_argument = 27;
    asm8086Parser.RULE_ptr = 28;
    asm8086Parser.RULE_dollar = 29;
    asm8086Parser.RULE_register_ = 30;
    asm8086Parser.RULE_string = 31;
    asm8086Parser.RULE_name = 32;
    asm8086Parser.RULE_number = 33;
    asm8086Parser.RULE_opcode = 34;
    asm8086Parser.RULE_rep = 35;
    asm8086Parser.RULE_comment = 36;
    // tslint:disable:no-trailing-whitespace
    asm8086Parser.ruleNames = [
        "prog", "line", "instruction", "lbl", "assemblerdirective", "rw", "rb",
        "rs", "cseg", "dseg", "dw", "db", "dd", "equ", "if_", "assemblerexpression",
        "assemblerlogical", "assemblerterm", "endif", "end", "org", "title", "include",
        "expressionlist", "label", "expression", "multiplyingExpression", "argument",
        "ptr", "dollar", "register_", "string", "name", "number", "opcode", "rep",
        "comment",
    ];
    asm8086Parser._LITERAL_NAMES = [
        undefined, "'!'", "':'", "'.'", "'('", "')'", "'eq'", "'ne'", "','", "'*'",
        "'/'", "'mod'", "'and'", "'['", "']'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'$'",
    ];
    asm8086Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "BYTE", "WORD", "DWORD", "DSEG", "CSEG", "INCLUDE", "TITLE",
        "END", "ORG", "ENDIF", "IF", "EQU", "DW", "DB", "DD", "PTR", "NOT", "OFFSET",
        "RW", "RB", "RS", "LENGTH", "COMMENT", "REGISTER", "OPCODE", "REP", "DOLLAR",
        "SIGN", "NAME", "NUMBER", "STRING", "EOL", "WS",
    ];
    asm8086Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(asm8086Parser._LITERAL_NAMES, asm8086Parser._SYMBOLIC_NAMES, []);
    asm8086Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0124\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x07\x02P\n\x02\f\x02" +
        "\x0E\x02S\v\x02\x03\x02\x03\x02\x07\x02W\n\x02\f\x02\x0E\x02Z\v\x02\x03" +
        "\x03\x05\x03]\n\x03\x03\x03\x03\x03\x05\x03a\n\x03\x03\x03\x05\x03d\n" +
        "\x03\x03\x04\x05\x04g\n\x04\x03\x04\x03\x04\x05\x04k\n\x04\x03\x05\x03" +
        "\x05\x05\x05o\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x05\x06\x81\n\x06\x03\x07\x05\x07\x84\n\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\b\x05\b\x8A\n\b\x03\b\x03\b\x03\b\x03\t\x05\t\x90\n\t\x03\t\x03\t" +
        "\x03\t\x03\n\x03\n\x05\n\x97\n\n\x03\v\x03\v\x05\v\x9B\n\v\x03\f\x03\f" +
        "\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
        "\xB1\n\x11\f\x11\x0E\x11\xB4\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
        "\x11\xBA\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
        "\xC2\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
        "\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07" +
        "\x19\xD4\n\x19\f\x19\x0E\x19\xD7\v\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
        "\x03\x1B\x07\x1B\xDE\n\x1B\f\x1B\x0E\x1B\xE1\v\x1B\x03\x1C\x03\x1C\x03" +
        "\x1C\x07\x1C\xE6\n\x1C\f\x1C\x0E\x1C\xE9\v\x1C\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
        "\xF6\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x05\x1D\u010A\n\x1D\x03\x1E\x05\x1E\u010D\n\x1E\x03\x1E\x03" +
        "\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x05#\u011A\n" +
        "#\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x02\x02\x02\'\x02\x02\x04" +
        "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
        "\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
        "\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
        "J\x02\x02\x05\x03\x02\b\t\x03\x02\v\x0E\x03\x02\x11\x13\x02\u0131\x02" +
        "X\x03\x02\x02\x02\x04\\\x03\x02\x02\x02\x06f\x03\x02\x02\x02\bl\x03\x02" +
        "\x02\x02\n\x80\x03\x02\x02\x02\f\x83\x03\x02\x02\x02\x0E\x89\x03\x02\x02" +
        "\x02\x10\x8F\x03\x02\x02\x02\x12\x94\x03\x02\x02\x02\x14\x98\x03\x02\x02" +
        "\x02\x16\x9C\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA2\x03\x02\x02" +
        "\x02\x1C\xA5\x03\x02\x02\x02\x1E\xA9\x03\x02\x02\x02 \xB9\x03\x02\x02" +
        "\x02\"\xBB\x03\x02\x02\x02$\xC1\x03\x02\x02\x02&\xC3\x03\x02\x02\x02(" +
        "\xC5\x03\x02\x02\x02*\xC7\x03\x02\x02\x02,\xCA\x03\x02\x02\x02.\xCD\x03" +
        "\x02\x02\x020\xD0\x03\x02\x02\x022\xD8\x03\x02\x02\x024\xDA\x03\x02\x02" +
        "\x026\xE2\x03\x02\x02\x028\u0109\x03\x02\x02\x02:\u010C\x03\x02\x02\x02" +
        "<\u0110\x03\x02\x02\x02>\u0112\x03\x02\x02\x02@\u0114\x03\x02\x02\x02" +
        "B\u0116\x03\x02\x02\x02D\u0119\x03\x02\x02\x02F\u011D\x03\x02\x02\x02" +
        "H\u011F\x03\x02\x02\x02J\u0121\x03\x02\x02\x02LQ\x05\x04\x03\x02MN\x07" +
        "\x03\x02\x02NP\x05\x04\x03\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03" +
        "\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\x07" +
        "0\x02\x02UW\x03\x02\x02\x02VL\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03" +
        "\x02\x02\x02XY\x03\x02\x02\x02Y\x03\x03\x02\x02\x02ZX\x03\x02\x02\x02" +
        "[]\x05\b\x05\x02\\[\x03\x02\x02\x02\\]\x03\x02\x02\x02]`\x03\x02\x02\x02" +
        "^a\x05\n\x06\x02_a\x05\x06\x04\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02" +
        "`a\x03\x02\x02\x02ac\x03\x02\x02\x02bd\x05J&\x02cb\x03\x02\x02\x02cd\x03" +
        "\x02\x02\x02d\x05\x03\x02\x02\x02eg\x05H%\x02fe\x03\x02\x02\x02fg\x03" +
        "\x02\x02\x02gh\x03\x02\x02\x02hj\x05F$\x02ik\x050\x19\x02ji\x03\x02\x02" +
        "\x02jk\x03\x02\x02\x02k\x07\x03\x02\x02\x02ln\x052\x1A\x02mo\x07\x04\x02" +
        "\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02o\t\x03\x02\x02\x02p\x81\x05*" +
        "\x16\x02q\x81\x05(\x15\x02r\x81\x05\x1E\x10\x02s\x81\x05&\x14\x02t\x81" +
        "\x05\x1C\x0F\x02u\x81\x05\x18\r\x02v\x81\x05\x16\f\x02w\x81\x05\x12\n" +
        "\x02x\x81\x05\x1A\x0E\x02y\x81\x05\x14\v\x02z\x81\x05,\x17\x02{\x81\x05" +
        ".\x18\x02|\x81\x05\f\x07\x02}\x81\x05\x0E\b\x02~\x81\x05\x10\t\x02\x7F" +
        "\x81\x07\x05\x02\x02\x80p\x03\x02\x02\x02\x80q\x03\x02\x02\x02\x80r\x03" +
        "\x02\x02\x02\x80s\x03\x02\x02\x02\x80t\x03\x02\x02\x02\x80u\x03\x02\x02" +
        "\x02\x80v\x03\x02\x02\x02\x80w\x03\x02\x02\x02\x80x\x03\x02\x02\x02\x80" +
        "y\x03\x02\x02\x02\x80z\x03\x02\x02\x02\x80{\x03\x02\x02\x02\x80|\x03\x02" +
        "\x02\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x7F\x03\x02\x02" +
        "\x02\x81\v\x03\x02\x02\x02\x82\x84\x05B\"\x02\x83\x82\x03\x02\x02\x02" +
        "\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x07#\x02\x02" +
        "\x86\x87\x054\x1B\x02\x87\r\x03\x02\x02\x02\x88\x8A\x05B\"\x02\x89\x88" +
        "\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C" +
        "\x07$\x02\x02\x8C\x8D\x054\x1B\x02\x8D\x0F\x03\x02\x02\x02\x8E\x90\x05" +
        "B\"\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02" +
        "\x02\x02\x91\x92\x07%\x02\x02\x92\x93\x054\x1B\x02\x93\x11\x03\x02\x02" +
        "\x02\x94\x96\x07\x15\x02\x02\x95\x97\x054\x1B\x02\x96\x95\x03\x02\x02" +
        "\x02\x96\x97\x03\x02\x02\x02\x97\x13\x03\x02\x02\x02\x98\x9A\x07\x14\x02" +
        "\x02\x99\x9B\x054\x1B\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
        "\x02\x9B\x15\x03\x02\x02\x02\x9C\x9D\x07\x1D\x02\x02\x9D\x9E\x050\x19" +
        "\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07\x1E\x02\x02\xA0\xA1\x050\x19" +
        "\x02\xA1\x19\x03\x02\x02\x02\xA2\xA3\x07\x1F\x02\x02\xA3\xA4\x050\x19" +
        "\x02\xA4\x1B\x03\x02\x02\x02\xA5\xA6\x05B\"\x02\xA6\xA7\x07\x1C\x02\x02" +
        "\xA7\xA8\x054\x1B\x02\xA8\x1D\x03\x02\x02\x02\xA9\xAA\x07\x1B\x02\x02" +
        "\xAA\xAB\x05 \x11\x02\xAB\x1F\x03\x02\x02\x02\xAC\xB2\x05$\x13\x02\xAD" +
        "\xAE\x05\"\x12\x02\xAE\xAF\x05$\x13\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAD" +
        "\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3" +
        "\x03\x02\x02\x02\xB3\xBA\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB6" +
        "\x07\x06\x02\x02\xB6\xB7\x05 \x11\x02\xB7\xB8\x07\x07\x02\x02\xB8\xBA" +
        "\x03\x02\x02\x02\xB9\xAC\x03\x02\x02\x02\xB9\xB5\x03\x02\x02\x02\xBA!" +
        "\x03\x02\x02\x02\xBB\xBC\t\x02\x02\x02\xBC#\x03\x02\x02\x02\xBD\xC2\x05" +
        "B\"\x02\xBE\xC2\x05D#\x02\xBF\xC0\x07!\x02\x02\xC0\xC2\x05$\x13\x02\xC1" +
        "\xBD\x03\x02\x02\x02\xC1\xBE\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2" +
        "%\x03\x02\x02\x02\xC3\xC4\x07\x1A\x02\x02\xC4\'\x03\x02\x02\x02\xC5\xC6" +
        "\x07\x18\x02\x02\xC6)\x03\x02\x02\x02\xC7\xC8\x07\x19\x02\x02\xC8\xC9" +
        "\x054\x1B\x02\xC9+\x03\x02\x02\x02\xCA\xCB\x07\x17\x02\x02\xCB\xCC\x05" +
        "@!\x02\xCC-\x03\x02\x02\x02\xCD\xCE\x07\x16\x02\x02\xCE\xCF\x05B\"\x02" +
        "\xCF/\x03\x02\x02\x02\xD0\xD5\x054\x1B\x02\xD1\xD2\x07\n\x02\x02\xD2\xD4" +
        "\x054\x1B\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3" +
        "\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD61\x03\x02\x02\x02\xD7\xD5" +
        "\x03\x02\x02\x02\xD8\xD9\x05B\"\x02\xD93\x03\x02\x02\x02\xDA\xDF\x056" +
        "\x1C\x02\xDB\xDC\x07,\x02\x02\xDC\xDE\x056\x1C\x02\xDD\xDB\x03\x02\x02" +
        "\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02" +
        "\x02\xE05\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE7\x058\x1D\x02" +
        "\xE3\xE4\t\x03\x02\x02\xE4\xE6\x058\x1D\x02\xE5\xE3\x03\x02\x02\x02\xE6" +
        "\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8" +
        "7\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\u010A\x05D#\x02\xEB\u010A" +
        "\x05<\x1F\x02\xEC\u010A\x05> \x02\xED\u010A\x05B\"\x02\xEE\u010A\x05@" +
        "!\x02\xEF\xF0\x07\x06\x02\x02\xF0\xF1\x054\x1B\x02\xF1\xF2\x07\x07\x02" +
        "\x02\xF2\u010A\x03\x02\x02\x02\xF3\xF6\x05D#\x02\xF4\xF6\x05B\"\x02\xF5" +
        "\xF3\x03\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
        "\xF7\x03\x02\x02\x02\xF7\xF8\x07\x0F\x02\x02\xF8\xF9\x054\x1B\x02\xF9" +
        "\xFA\x07\x10\x02\x02\xFA\u010A\x03\x02\x02\x02\xFB\xFC\x05:\x1E\x02\xFC" +
        "\xFD\x054\x1B\x02\xFD\u010A\x03\x02\x02\x02\xFE\xFF\x07!\x02\x02\xFF\u010A" +
        "\x054\x1B\x02\u0100\u0101\x07\"\x02\x02\u0101\u010A\x054\x1B\x02\u0102" +
        "\u0103\x07&\x02\x02\u0103\u010A\x054\x1B\x02\u0104\u0105\x05> \x02\u0105" +
        "\u0106\x07\x04\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x054\x1B" +
        "\x02\u0108\u010A\x03\x02\x02\x02\u0109\xEA\x03\x02\x02\x02\u0109\xEB\x03" +
        "\x02\x02\x02\u0109\xEC\x03\x02\x02\x02\u0109\xED\x03\x02\x02\x02\u0109" +
        "\xEE\x03\x02\x02\x02\u0109\xEF\x03\x02\x02\x02\u0109\xF5\x03\x02\x02\x02" +
        "\u0109\xFB\x03\x02\x02\x02\u0109\xFE\x03\x02\x02\x02\u0109\u0100\x03\x02" +
        "\x02\x02\u0109\u0102\x03\x02\x02\x02\u0109\u0104\x03\x02\x02\x02\u010A" +
        "9\x03\x02\x02\x02\u010B\u010D\t\x04\x02\x02\u010C\u010B\x03\x02\x02\x02" +
        "\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x07" +
        " \x02\x02\u010F;\x03\x02\x02\x02\u0110\u0111\x07+\x02\x02\u0111=\x03\x02" +
        "\x02\x02\u0112\u0113\x07(\x02\x02\u0113?\x03\x02\x02\x02\u0114\u0115\x07" +
        "/\x02\x02\u0115A\x03\x02\x02\x02\u0116\u0117\x07-\x02\x02\u0117C\x03\x02" +
        "\x02\x02\u0118\u011A\x07,\x02\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A" +
        "\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x07.\x02\x02" +
        "\u011CE\x03\x02\x02\x02\u011D\u011E\x07)\x02\x02\u011EG\x03\x02\x02\x02" +
        "\u011F\u0120\x07*\x02\x02\u0120I\x03\x02\x02\x02\u0121\u0122\x07\'\x02" +
        "\x02\u0122K\x03\x02\x02\x02\x1AQX\\`cfjn\x80\x83\x89\x8F\x96\x9A\xB2\xB9" +
        "\xC1\xD5\xDF\xE7\xF5\u0109\u010C\u0119";
    return asm8086Parser;
}(Parser_1.Parser));
exports.asm8086Parser = asm8086Parser;
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
    ProgContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(asm8086Parser.EOL);
        }
        else {
            return this.getToken(asm8086Parser.EOL, i);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_prog; },
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
    LineContext.prototype.assemblerdirective = function () {
        return this.tryGetRuleContext(0, AssemblerdirectiveContext);
    };
    LineContext.prototype.instruction = function () {
        return this.tryGetRuleContext(0, InstructionContext);
    };
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_line; },
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
    InstructionContext.prototype.rep = function () {
        return this.tryGetRuleContext(0, RepContext);
    };
    InstructionContext.prototype.expressionlist = function () {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_instruction; },
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
        get: function () { return asm8086Parser.RULE_lbl; },
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
var AssemblerdirectiveContext = /** @class */ (function (_super) {
    __extends(AssemblerdirectiveContext, _super);
    function AssemblerdirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblerdirectiveContext.prototype.org = function () {
        return this.tryGetRuleContext(0, OrgContext);
    };
    AssemblerdirectiveContext.prototype.end = function () {
        return this.tryGetRuleContext(0, EndContext);
    };
    AssemblerdirectiveContext.prototype.if_ = function () {
        return this.tryGetRuleContext(0, If_Context);
    };
    AssemblerdirectiveContext.prototype.endif = function () {
        return this.tryGetRuleContext(0, EndifContext);
    };
    AssemblerdirectiveContext.prototype.equ = function () {
        return this.tryGetRuleContext(0, EquContext);
    };
    AssemblerdirectiveContext.prototype.db = function () {
        return this.tryGetRuleContext(0, DbContext);
    };
    AssemblerdirectiveContext.prototype.dw = function () {
        return this.tryGetRuleContext(0, DwContext);
    };
    AssemblerdirectiveContext.prototype.cseg = function () {
        return this.tryGetRuleContext(0, CsegContext);
    };
    AssemblerdirectiveContext.prototype.dd = function () {
        return this.tryGetRuleContext(0, DdContext);
    };
    AssemblerdirectiveContext.prototype.dseg = function () {
        return this.tryGetRuleContext(0, DsegContext);
    };
    AssemblerdirectiveContext.prototype.title = function () {
        return this.tryGetRuleContext(0, TitleContext);
    };
    AssemblerdirectiveContext.prototype.include = function () {
        return this.tryGetRuleContext(0, IncludeContext);
    };
    AssemblerdirectiveContext.prototype.rw = function () {
        return this.tryGetRuleContext(0, RwContext);
    };
    AssemblerdirectiveContext.prototype.rb = function () {
        return this.tryGetRuleContext(0, RbContext);
    };
    AssemblerdirectiveContext.prototype.rs = function () {
        return this.tryGetRuleContext(0, RsContext);
    };
    Object.defineProperty(AssemblerdirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_assemblerdirective; },
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
var RwContext = /** @class */ (function (_super) {
    __extends(RwContext, _super);
    function RwContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RwContext.prototype.RW = function () { return this.getToken(asm8086Parser.RW, 0); };
    RwContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    RwContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Object.defineProperty(RwContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_rw; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RwContext.prototype.enterRule = function (listener) {
        if (listener.enterRw) {
            listener.enterRw(this);
        }
    };
    // @Override
    RwContext.prototype.exitRule = function (listener) {
        if (listener.exitRw) {
            listener.exitRw(this);
        }
    };
    // @Override
    RwContext.prototype.accept = function (visitor) {
        if (visitor.visitRw) {
            return visitor.visitRw(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RwContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RwContext = RwContext;
var RbContext = /** @class */ (function (_super) {
    __extends(RbContext, _super);
    function RbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RbContext.prototype.RB = function () { return this.getToken(asm8086Parser.RB, 0); };
    RbContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    RbContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Object.defineProperty(RbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_rb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RbContext.prototype.enterRule = function (listener) {
        if (listener.enterRb) {
            listener.enterRb(this);
        }
    };
    // @Override
    RbContext.prototype.exitRule = function (listener) {
        if (listener.exitRb) {
            listener.exitRb(this);
        }
    };
    // @Override
    RbContext.prototype.accept = function (visitor) {
        if (visitor.visitRb) {
            return visitor.visitRb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RbContext = RbContext;
var RsContext = /** @class */ (function (_super) {
    __extends(RsContext, _super);
    function RsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RsContext.prototype.RS = function () { return this.getToken(asm8086Parser.RS, 0); };
    RsContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    RsContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Object.defineProperty(RsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_rs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RsContext.prototype.enterRule = function (listener) {
        if (listener.enterRs) {
            listener.enterRs(this);
        }
    };
    // @Override
    RsContext.prototype.exitRule = function (listener) {
        if (listener.exitRs) {
            listener.exitRs(this);
        }
    };
    // @Override
    RsContext.prototype.accept = function (visitor) {
        if (visitor.visitRs) {
            return visitor.visitRs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RsContext = RsContext;
var CsegContext = /** @class */ (function (_super) {
    __extends(CsegContext, _super);
    function CsegContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CsegContext.prototype.CSEG = function () { return this.getToken(asm8086Parser.CSEG, 0); };
    CsegContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(CsegContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_cseg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CsegContext.prototype.enterRule = function (listener) {
        if (listener.enterCseg) {
            listener.enterCseg(this);
        }
    };
    // @Override
    CsegContext.prototype.exitRule = function (listener) {
        if (listener.exitCseg) {
            listener.exitCseg(this);
        }
    };
    // @Override
    CsegContext.prototype.accept = function (visitor) {
        if (visitor.visitCseg) {
            return visitor.visitCseg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CsegContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CsegContext = CsegContext;
var DsegContext = /** @class */ (function (_super) {
    __extends(DsegContext, _super);
    function DsegContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DsegContext.prototype.DSEG = function () { return this.getToken(asm8086Parser.DSEG, 0); };
    DsegContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DsegContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_dseg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DsegContext.prototype.enterRule = function (listener) {
        if (listener.enterDseg) {
            listener.enterDseg(this);
        }
    };
    // @Override
    DsegContext.prototype.exitRule = function (listener) {
        if (listener.exitDseg) {
            listener.exitDseg(this);
        }
    };
    // @Override
    DsegContext.prototype.accept = function (visitor) {
        if (visitor.visitDseg) {
            return visitor.visitDseg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DsegContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DsegContext = DsegContext;
var DwContext = /** @class */ (function (_super) {
    __extends(DwContext, _super);
    function DwContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DwContext.prototype.DW = function () { return this.getToken(asm8086Parser.DW, 0); };
    DwContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(DwContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_dw; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DwContext.prototype.enterRule = function (listener) {
        if (listener.enterDw) {
            listener.enterDw(this);
        }
    };
    // @Override
    DwContext.prototype.exitRule = function (listener) {
        if (listener.exitDw) {
            listener.exitDw(this);
        }
    };
    // @Override
    DwContext.prototype.accept = function (visitor) {
        if (visitor.visitDw) {
            return visitor.visitDw(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DwContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DwContext = DwContext;
var DbContext = /** @class */ (function (_super) {
    __extends(DbContext, _super);
    function DbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DbContext.prototype.DB = function () { return this.getToken(asm8086Parser.DB, 0); };
    DbContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(DbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_db; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DbContext.prototype.enterRule = function (listener) {
        if (listener.enterDb) {
            listener.enterDb(this);
        }
    };
    // @Override
    DbContext.prototype.exitRule = function (listener) {
        if (listener.exitDb) {
            listener.exitDb(this);
        }
    };
    // @Override
    DbContext.prototype.accept = function (visitor) {
        if (visitor.visitDb) {
            return visitor.visitDb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DbContext = DbContext;
var DdContext = /** @class */ (function (_super) {
    __extends(DdContext, _super);
    function DdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DdContext.prototype.DD = function () { return this.getToken(asm8086Parser.DD, 0); };
    DdContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(DdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_dd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DdContext.prototype.enterRule = function (listener) {
        if (listener.enterDd) {
            listener.enterDd(this);
        }
    };
    // @Override
    DdContext.prototype.exitRule = function (listener) {
        if (listener.exitDd) {
            listener.exitDd(this);
        }
    };
    // @Override
    DdContext.prototype.accept = function (visitor) {
        if (visitor.visitDd) {
            return visitor.visitDd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DdContext = DdContext;
var EquContext = /** @class */ (function (_super) {
    __extends(EquContext, _super);
    function EquContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    EquContext.prototype.EQU = function () { return this.getToken(asm8086Parser.EQU, 0); };
    EquContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(EquContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_equ; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquContext.prototype.enterRule = function (listener) {
        if (listener.enterEqu) {
            listener.enterEqu(this);
        }
    };
    // @Override
    EquContext.prototype.exitRule = function (listener) {
        if (listener.exitEqu) {
            listener.exitEqu(this);
        }
    };
    // @Override
    EquContext.prototype.accept = function (visitor) {
        if (visitor.visitEqu) {
            return visitor.visitEqu(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquContext = EquContext;
var If_Context = /** @class */ (function (_super) {
    __extends(If_Context, _super);
    function If_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_Context.prototype.IF = function () { return this.getToken(asm8086Parser.IF, 0); };
    If_Context.prototype.assemblerexpression = function () {
        return this.getRuleContext(0, AssemblerexpressionContext);
    };
    Object.defineProperty(If_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_if_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_Context.prototype.enterRule = function (listener) {
        if (listener.enterIf_) {
            listener.enterIf_(this);
        }
    };
    // @Override
    If_Context.prototype.exitRule = function (listener) {
        if (listener.exitIf_) {
            listener.exitIf_(this);
        }
    };
    // @Override
    If_Context.prototype.accept = function (visitor) {
        if (visitor.visitIf_) {
            return visitor.visitIf_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_Context = If_Context;
var AssemblerexpressionContext = /** @class */ (function (_super) {
    __extends(AssemblerexpressionContext, _super);
    function AssemblerexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblerexpressionContext.prototype.assemblerterm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssemblertermContext);
        }
        else {
            return this.getRuleContext(i, AssemblertermContext);
        }
    };
    AssemblerexpressionContext.prototype.assemblerlogical = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssemblerlogicalContext);
        }
        else {
            return this.getRuleContext(i, AssemblerlogicalContext);
        }
    };
    AssemblerexpressionContext.prototype.assemblerexpression = function () {
        return this.tryGetRuleContext(0, AssemblerexpressionContext);
    };
    Object.defineProperty(AssemblerexpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_assemblerexpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblerexpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblerexpression) {
            listener.enterAssemblerexpression(this);
        }
    };
    // @Override
    AssemblerexpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblerexpression) {
            listener.exitAssemblerexpression(this);
        }
    };
    // @Override
    AssemblerexpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblerexpression) {
            return visitor.visitAssemblerexpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblerexpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblerexpressionContext = AssemblerexpressionContext;
var AssemblerlogicalContext = /** @class */ (function (_super) {
    __extends(AssemblerlogicalContext, _super);
    function AssemblerlogicalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AssemblerlogicalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_assemblerlogical; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblerlogicalContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblerlogical) {
            listener.enterAssemblerlogical(this);
        }
    };
    // @Override
    AssemblerlogicalContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblerlogical) {
            listener.exitAssemblerlogical(this);
        }
    };
    // @Override
    AssemblerlogicalContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblerlogical) {
            return visitor.visitAssemblerlogical(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblerlogicalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblerlogicalContext = AssemblerlogicalContext;
var AssemblertermContext = /** @class */ (function (_super) {
    __extends(AssemblertermContext, _super);
    function AssemblertermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblertermContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    AssemblertermContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    AssemblertermContext.prototype.NOT = function () { return this.tryGetToken(asm8086Parser.NOT, 0); };
    AssemblertermContext.prototype.assemblerterm = function () {
        return this.tryGetRuleContext(0, AssemblertermContext);
    };
    Object.defineProperty(AssemblertermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_assemblerterm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblertermContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblerterm) {
            listener.enterAssemblerterm(this);
        }
    };
    // @Override
    AssemblertermContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblerterm) {
            listener.exitAssemblerterm(this);
        }
    };
    // @Override
    AssemblertermContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblerterm) {
            return visitor.visitAssemblerterm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblertermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblertermContext = AssemblertermContext;
var EndifContext = /** @class */ (function (_super) {
    __extends(EndifContext, _super);
    function EndifContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndifContext.prototype.ENDIF = function () { return this.getToken(asm8086Parser.ENDIF, 0); };
    Object.defineProperty(EndifContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_endif; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndifContext.prototype.enterRule = function (listener) {
        if (listener.enterEndif) {
            listener.enterEndif(this);
        }
    };
    // @Override
    EndifContext.prototype.exitRule = function (listener) {
        if (listener.exitEndif) {
            listener.exitEndif(this);
        }
    };
    // @Override
    EndifContext.prototype.accept = function (visitor) {
        if (visitor.visitEndif) {
            return visitor.visitEndif(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndifContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndifContext = EndifContext;
var EndContext = /** @class */ (function (_super) {
    __extends(EndContext, _super);
    function EndContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndContext.prototype.END = function () { return this.getToken(asm8086Parser.END, 0); };
    Object.defineProperty(EndContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_end; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndContext.prototype.enterRule = function (listener) {
        if (listener.enterEnd) {
            listener.enterEnd(this);
        }
    };
    // @Override
    EndContext.prototype.exitRule = function (listener) {
        if (listener.exitEnd) {
            listener.exitEnd(this);
        }
    };
    // @Override
    EndContext.prototype.accept = function (visitor) {
        if (visitor.visitEnd) {
            return visitor.visitEnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndContext = EndContext;
var OrgContext = /** @class */ (function (_super) {
    __extends(OrgContext, _super);
    function OrgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrgContext.prototype.ORG = function () { return this.getToken(asm8086Parser.ORG, 0); };
    OrgContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(OrgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_org; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrgContext.prototype.enterRule = function (listener) {
        if (listener.enterOrg) {
            listener.enterOrg(this);
        }
    };
    // @Override
    OrgContext.prototype.exitRule = function (listener) {
        if (listener.exitOrg) {
            listener.exitOrg(this);
        }
    };
    // @Override
    OrgContext.prototype.accept = function (visitor) {
        if (visitor.visitOrg) {
            return visitor.visitOrg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrgContext = OrgContext;
var TitleContext = /** @class */ (function (_super) {
    __extends(TitleContext, _super);
    function TitleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TitleContext.prototype.TITLE = function () { return this.getToken(asm8086Parser.TITLE, 0); };
    TitleContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(TitleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_title; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TitleContext.prototype.enterRule = function (listener) {
        if (listener.enterTitle) {
            listener.enterTitle(this);
        }
    };
    // @Override
    TitleContext.prototype.exitRule = function (listener) {
        if (listener.exitTitle) {
            listener.exitTitle(this);
        }
    };
    // @Override
    TitleContext.prototype.accept = function (visitor) {
        if (visitor.visitTitle) {
            return visitor.visitTitle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TitleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TitleContext = TitleContext;
var IncludeContext = /** @class */ (function (_super) {
    __extends(IncludeContext, _super);
    function IncludeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IncludeContext.prototype.INCLUDE = function () { return this.getToken(asm8086Parser.INCLUDE, 0); };
    IncludeContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(IncludeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_include; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IncludeContext.prototype.enterRule = function (listener) {
        if (listener.enterInclude) {
            listener.enterInclude(this);
        }
    };
    // @Override
    IncludeContext.prototype.exitRule = function (listener) {
        if (listener.exitInclude) {
            listener.exitInclude(this);
        }
    };
    // @Override
    IncludeContext.prototype.accept = function (visitor) {
        if (visitor.visitInclude) {
            return visitor.visitInclude(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncludeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IncludeContext = IncludeContext;
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
        get: function () { return asm8086Parser.RULE_expressionlist; },
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
        get: function () { return asm8086Parser.RULE_label; },
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
    ExpressionContext.prototype.SIGN = function (i) {
        if (i === undefined) {
            return this.getTokens(asm8086Parser.SIGN);
        }
        else {
            return this.getToken(asm8086Parser.SIGN, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_expression; },
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
        get: function () { return asm8086Parser.RULE_multiplyingExpression; },
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
    ArgumentContext.prototype.dollar = function () {
        return this.tryGetRuleContext(0, DollarContext);
    };
    ArgumentContext.prototype.register_ = function () {
        return this.tryGetRuleContext(0, Register_Context);
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
    ArgumentContext.prototype.ptr = function () {
        return this.tryGetRuleContext(0, PtrContext);
    };
    ArgumentContext.prototype.NOT = function () { return this.tryGetToken(asm8086Parser.NOT, 0); };
    ArgumentContext.prototype.OFFSET = function () { return this.tryGetToken(asm8086Parser.OFFSET, 0); };
    ArgumentContext.prototype.LENGTH = function () { return this.tryGetToken(asm8086Parser.LENGTH, 0); };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_argument; },
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
var PtrContext = /** @class */ (function (_super) {
    __extends(PtrContext, _super);
    function PtrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PtrContext.prototype.PTR = function () { return this.getToken(asm8086Parser.PTR, 0); };
    PtrContext.prototype.BYTE = function () { return this.tryGetToken(asm8086Parser.BYTE, 0); };
    PtrContext.prototype.WORD = function () { return this.tryGetToken(asm8086Parser.WORD, 0); };
    PtrContext.prototype.DWORD = function () { return this.tryGetToken(asm8086Parser.DWORD, 0); };
    Object.defineProperty(PtrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_ptr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PtrContext.prototype.enterRule = function (listener) {
        if (listener.enterPtr) {
            listener.enterPtr(this);
        }
    };
    // @Override
    PtrContext.prototype.exitRule = function (listener) {
        if (listener.exitPtr) {
            listener.exitPtr(this);
        }
    };
    // @Override
    PtrContext.prototype.accept = function (visitor) {
        if (visitor.visitPtr) {
            return visitor.visitPtr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PtrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PtrContext = PtrContext;
var DollarContext = /** @class */ (function (_super) {
    __extends(DollarContext, _super);
    function DollarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DollarContext.prototype.DOLLAR = function () { return this.getToken(asm8086Parser.DOLLAR, 0); };
    Object.defineProperty(DollarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_dollar; },
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
var Register_Context = /** @class */ (function (_super) {
    __extends(Register_Context, _super);
    function Register_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Register_Context.prototype.REGISTER = function () { return this.getToken(asm8086Parser.REGISTER, 0); };
    Object.defineProperty(Register_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_register_; },
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
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(asm8086Parser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_string; },
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
    NameContext.prototype.NAME = function () { return this.getToken(asm8086Parser.NAME, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_name; },
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
    NumberContext.prototype.NUMBER = function () { return this.getToken(asm8086Parser.NUMBER, 0); };
    NumberContext.prototype.SIGN = function () { return this.tryGetToken(asm8086Parser.SIGN, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_number; },
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
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodeContext.prototype.OPCODE = function () { return this.getToken(asm8086Parser.OPCODE, 0); };
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_opcode; },
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
var RepContext = /** @class */ (function (_super) {
    __extends(RepContext, _super);
    function RepContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepContext.prototype.REP = function () { return this.getToken(asm8086Parser.REP, 0); };
    Object.defineProperty(RepContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_rep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepContext.prototype.enterRule = function (listener) {
        if (listener.enterRep) {
            listener.enterRep(this);
        }
    };
    // @Override
    RepContext.prototype.exitRule = function (listener) {
        if (listener.exitRep) {
            listener.exitRep(this);
        }
    };
    // @Override
    RepContext.prototype.accept = function (visitor) {
        if (visitor.visitRep) {
            return visitor.visitRep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepContext = RepContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(asm8086Parser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm8086Parser.RULE_comment; },
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
