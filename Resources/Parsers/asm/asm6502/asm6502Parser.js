"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm6502/asm6502.g4 by ANTLR 4.7.3-SNAPSHOT
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
var asm6502Parser = /** @class */ (function (_super) {
    __extends(asm6502Parser, _super);
    function asm6502Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(asm6502Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(asm6502Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return asm6502Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asm6502Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "asm6502.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asm6502Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return asm6502Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asm6502Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return asm6502Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    asm6502Parser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, asm6502Parser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 31;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7) | (1 << asm6502Parser.ASSEMBLER_INSTRUCTION) | (1 << asm6502Parser.ADC) | (1 << asm6502Parser.AND) | (1 << asm6502Parser.ASL) | (1 << asm6502Parser.BCC) | (1 << asm6502Parser.BCS) | (1 << asm6502Parser.BEQ) | (1 << asm6502Parser.BIT) | (1 << asm6502Parser.BMI) | (1 << asm6502Parser.BNE) | (1 << asm6502Parser.BPL) | (1 << asm6502Parser.BRA) | (1 << asm6502Parser.BRK) | (1 << asm6502Parser.BVC) | (1 << asm6502Parser.BVS) | (1 << asm6502Parser.CLC) | (1 << asm6502Parser.CLD) | (1 << asm6502Parser.CLI) | (1 << asm6502Parser.CLV) | (1 << asm6502Parser.CMP) | (1 << asm6502Parser.CPX) | (1 << asm6502Parser.CPY) | (1 << asm6502Parser.DEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm6502Parser.DEX - 32)) | (1 << (asm6502Parser.DEY - 32)) | (1 << (asm6502Parser.EOR - 32)) | (1 << (asm6502Parser.INC - 32)) | (1 << (asm6502Parser.INX - 32)) | (1 << (asm6502Parser.INY - 32)) | (1 << (asm6502Parser.JMP - 32)) | (1 << (asm6502Parser.JSR - 32)) | (1 << (asm6502Parser.LDA - 32)) | (1 << (asm6502Parser.LDY - 32)) | (1 << (asm6502Parser.LDX - 32)) | (1 << (asm6502Parser.LSR - 32)) | (1 << (asm6502Parser.NOP - 32)) | (1 << (asm6502Parser.ORA - 32)) | (1 << (asm6502Parser.PHA - 32)) | (1 << (asm6502Parser.PHX - 32)) | (1 << (asm6502Parser.PHY - 32)) | (1 << (asm6502Parser.PHP - 32)) | (1 << (asm6502Parser.PLA - 32)) | (1 << (asm6502Parser.PLP - 32)) | (1 << (asm6502Parser.PLY - 32)) | (1 << (asm6502Parser.ROL - 32)) | (1 << (asm6502Parser.ROR - 32)) | (1 << (asm6502Parser.RTI - 32)) | (1 << (asm6502Parser.RTS - 32)) | (1 << (asm6502Parser.SBC - 32)) | (1 << (asm6502Parser.SEC - 32)) | (1 << (asm6502Parser.SED - 32)) | (1 << (asm6502Parser.SEI - 32)) | (1 << (asm6502Parser.STA - 32)) | (1 << (asm6502Parser.STX - 32)) | (1 << (asm6502Parser.STY - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (asm6502Parser.STZ - 64)) | (1 << (asm6502Parser.TAX - 64)) | (1 << (asm6502Parser.TAY - 64)) | (1 << (asm6502Parser.TSX - 64)) | (1 << (asm6502Parser.TXA - 64)) | (1 << (asm6502Parser.TXS - 64)) | (1 << (asm6502Parser.TYA - 64)) | (1 << (asm6502Parser.NAME - 64)) | (1 << (asm6502Parser.NUMBER - 64)) | (1 << (asm6502Parser.COMMENT - 64)) | (1 << (asm6502Parser.STRING - 64)))) !== 0)) {
                                {
                                    this.state = 30;
                                    this.line();
                                }
                            }
                            this.state = 33;
                            this.match(asm6502Parser.EOL);
                        }
                    }
                    this.state = 36;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7) | (1 << asm6502Parser.ASSEMBLER_INSTRUCTION) | (1 << asm6502Parser.ADC) | (1 << asm6502Parser.AND) | (1 << asm6502Parser.ASL) | (1 << asm6502Parser.BCC) | (1 << asm6502Parser.BCS) | (1 << asm6502Parser.BEQ) | (1 << asm6502Parser.BIT) | (1 << asm6502Parser.BMI) | (1 << asm6502Parser.BNE) | (1 << asm6502Parser.BPL) | (1 << asm6502Parser.BRA) | (1 << asm6502Parser.BRK) | (1 << asm6502Parser.BVC) | (1 << asm6502Parser.BVS) | (1 << asm6502Parser.CLC) | (1 << asm6502Parser.CLD) | (1 << asm6502Parser.CLI) | (1 << asm6502Parser.CLV) | (1 << asm6502Parser.CMP) | (1 << asm6502Parser.CPX) | (1 << asm6502Parser.CPY) | (1 << asm6502Parser.DEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm6502Parser.DEX - 32)) | (1 << (asm6502Parser.DEY - 32)) | (1 << (asm6502Parser.EOR - 32)) | (1 << (asm6502Parser.INC - 32)) | (1 << (asm6502Parser.INX - 32)) | (1 << (asm6502Parser.INY - 32)) | (1 << (asm6502Parser.JMP - 32)) | (1 << (asm6502Parser.JSR - 32)) | (1 << (asm6502Parser.LDA - 32)) | (1 << (asm6502Parser.LDY - 32)) | (1 << (asm6502Parser.LDX - 32)) | (1 << (asm6502Parser.LSR - 32)) | (1 << (asm6502Parser.NOP - 32)) | (1 << (asm6502Parser.ORA - 32)) | (1 << (asm6502Parser.PHA - 32)) | (1 << (asm6502Parser.PHX - 32)) | (1 << (asm6502Parser.PHY - 32)) | (1 << (asm6502Parser.PHP - 32)) | (1 << (asm6502Parser.PLA - 32)) | (1 << (asm6502Parser.PLP - 32)) | (1 << (asm6502Parser.PLY - 32)) | (1 << (asm6502Parser.ROL - 32)) | (1 << (asm6502Parser.ROR - 32)) | (1 << (asm6502Parser.RTI - 32)) | (1 << (asm6502Parser.RTS - 32)) | (1 << (asm6502Parser.SBC - 32)) | (1 << (asm6502Parser.SEC - 32)) | (1 << (asm6502Parser.SED - 32)) | (1 << (asm6502Parser.SEI - 32)) | (1 << (asm6502Parser.STA - 32)) | (1 << (asm6502Parser.STX - 32)) | (1 << (asm6502Parser.STY - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (asm6502Parser.STZ - 64)) | (1 << (asm6502Parser.TAX - 64)) | (1 << (asm6502Parser.TAY - 64)) | (1 << (asm6502Parser.TSX - 64)) | (1 << (asm6502Parser.TXA - 64)) | (1 << (asm6502Parser.TXS - 64)) | (1 << (asm6502Parser.TYA - 64)) | (1 << (asm6502Parser.NAME - 64)) | (1 << (asm6502Parser.NUMBER - 64)) | (1 << (asm6502Parser.COMMENT - 64)) | (1 << (asm6502Parser.STRING - 64)) | (1 << (asm6502Parser.EOL - 64)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, asm6502Parser.RULE_line);
        try {
            this.state = 42;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 38;
                        this.comment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 39;
                        this.instruction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 40;
                        this.assemblerinstruction();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 41;
                        this.lbl();
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
    asm6502Parser.prototype.instruction = function () {
        var _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, asm6502Parser.RULE_instruction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm6502Parser.NAME) {
                    {
                        this.state = 44;
                        this.label();
                    }
                }
                this.state = 47;
                this.opcode();
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (asm6502Parser.NAME - 71)) | (1 << (asm6502Parser.NUMBER - 71)) | (1 << (asm6502Parser.STRING - 71)))) !== 0)) {
                    {
                        this.state = 48;
                        this.argumentlist();
                    }
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm6502Parser.COMMENT) {
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
    asm6502Parser.prototype.assemblerinstruction = function () {
        var _localctx = new AssemblerinstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, asm6502Parser.RULE_assemblerinstruction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (asm6502Parser.NAME - 71)) | (1 << (asm6502Parser.NUMBER - 71)) | (1 << (asm6502Parser.STRING - 71)))) !== 0)) {
                    {
                        this.state = 54;
                        this.argument();
                    }
                }
                this.state = 57;
                this.assembleropcode();
                this.state = 59;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (asm6502Parser.NAME - 71)) | (1 << (asm6502Parser.NUMBER - 71)) | (1 << (asm6502Parser.STRING - 71)))) !== 0)) {
                    {
                        this.state = 58;
                        this.argumentlist();
                    }
                }
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm6502Parser.COMMENT) {
                    {
                        this.state = 61;
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
    asm6502Parser.prototype.assembleropcode = function () {
        var _localctx = new AssembleropcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, asm6502Parser.RULE_assembleropcode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this.match(asm6502Parser.ASSEMBLER_INSTRUCTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.lbl = function () {
        var _localctx = new LblContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, asm6502Parser.RULE_lbl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.label();
                this.state = 67;
                this.match(asm6502Parser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.argumentlist = function () {
        var _localctx = new ArgumentlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, asm6502Parser.RULE_argumentlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 69;
                this.argument();
                this.state = 72;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asm6502Parser.T__1) {
                    {
                        this.state = 70;
                        this.match(asm6502Parser.T__1);
                        this.state = 71;
                        this.argumentlist();
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
    asm6502Parser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, asm6502Parser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
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
    asm6502Parser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, asm6502Parser.RULE_argument);
        var _la;
        try {
            this.state = 93;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case asm6502Parser.T__2:
                case asm6502Parser.T__7:
                case asm6502Parser.NAME:
                case asm6502Parser.NUMBER:
                case asm6502Parser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 77;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === asm6502Parser.T__7) {
                            {
                                this.state = 76;
                                this.prefix();
                            }
                        }
                        this.state = 83;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case asm6502Parser.NUMBER:
                                {
                                    this.state = 79;
                                    this.number();
                                }
                                break;
                            case asm6502Parser.NAME:
                                {
                                    this.state = 80;
                                    this.name();
                                }
                                break;
                            case asm6502Parser.STRING:
                                {
                                    this.state = 81;
                                    this.string();
                                }
                                break;
                            case asm6502Parser.T__2:
                                {
                                    this.state = 82;
                                    this.match(asm6502Parser.T__2);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 87;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === asm6502Parser.T__3 || _la === asm6502Parser.T__4) {
                            {
                                this.state = 85;
                                _la = this._input.LA(1);
                                if (!(_la === asm6502Parser.T__3 || _la === asm6502Parser.T__4)) {
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
                                this.number();
                            }
                        }
                    }
                    break;
                case asm6502Parser.T__5:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 89;
                        this.match(asm6502Parser.T__5);
                        this.state = 90;
                        this.argument();
                        this.state = 91;
                        this.match(asm6502Parser.T__6);
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
    asm6502Parser.prototype.prefix = function () {
        var _localctx = new PrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, asm6502Parser.RULE_prefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                this.match(asm6502Parser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, asm6502Parser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.match(asm6502Parser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, asm6502Parser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.match(asm6502Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, asm6502Parser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(asm6502Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, asm6502Parser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 103;
                this.match(asm6502Parser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asm6502Parser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, asm6502Parser.RULE_opcode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 105;
                _la = this._input.LA(1);
                if (!(((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (asm6502Parser.ADC - 10)) | (1 << (asm6502Parser.AND - 10)) | (1 << (asm6502Parser.ASL - 10)) | (1 << (asm6502Parser.BCC - 10)) | (1 << (asm6502Parser.BCS - 10)) | (1 << (asm6502Parser.BEQ - 10)) | (1 << (asm6502Parser.BIT - 10)) | (1 << (asm6502Parser.BMI - 10)) | (1 << (asm6502Parser.BNE - 10)) | (1 << (asm6502Parser.BPL - 10)) | (1 << (asm6502Parser.BRA - 10)) | (1 << (asm6502Parser.BRK - 10)) | (1 << (asm6502Parser.BVC - 10)) | (1 << (asm6502Parser.BVS - 10)) | (1 << (asm6502Parser.CLC - 10)) | (1 << (asm6502Parser.CLD - 10)) | (1 << (asm6502Parser.CLI - 10)) | (1 << (asm6502Parser.CLV - 10)) | (1 << (asm6502Parser.CMP - 10)) | (1 << (asm6502Parser.CPX - 10)) | (1 << (asm6502Parser.CPY - 10)) | (1 << (asm6502Parser.DEC - 10)) | (1 << (asm6502Parser.DEX - 10)) | (1 << (asm6502Parser.DEY - 10)) | (1 << (asm6502Parser.EOR - 10)) | (1 << (asm6502Parser.INC - 10)) | (1 << (asm6502Parser.INX - 10)) | (1 << (asm6502Parser.INY - 10)) | (1 << (asm6502Parser.JMP - 10)) | (1 << (asm6502Parser.JSR - 10)) | (1 << (asm6502Parser.LDA - 10)) | (1 << (asm6502Parser.LDY - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (asm6502Parser.LDX - 42)) | (1 << (asm6502Parser.LSR - 42)) | (1 << (asm6502Parser.NOP - 42)) | (1 << (asm6502Parser.ORA - 42)) | (1 << (asm6502Parser.PHA - 42)) | (1 << (asm6502Parser.PHX - 42)) | (1 << (asm6502Parser.PHY - 42)) | (1 << (asm6502Parser.PHP - 42)) | (1 << (asm6502Parser.PLA - 42)) | (1 << (asm6502Parser.PLP - 42)) | (1 << (asm6502Parser.PLY - 42)) | (1 << (asm6502Parser.ROL - 42)) | (1 << (asm6502Parser.ROR - 42)) | (1 << (asm6502Parser.RTI - 42)) | (1 << (asm6502Parser.RTS - 42)) | (1 << (asm6502Parser.SBC - 42)) | (1 << (asm6502Parser.SEC - 42)) | (1 << (asm6502Parser.SED - 42)) | (1 << (asm6502Parser.SEI - 42)) | (1 << (asm6502Parser.STA - 42)) | (1 << (asm6502Parser.STX - 42)) | (1 << (asm6502Parser.STY - 42)) | (1 << (asm6502Parser.STZ - 42)) | (1 << (asm6502Parser.TAX - 42)) | (1 << (asm6502Parser.TAY - 42)) | (1 << (asm6502Parser.TSX - 42)) | (1 << (asm6502Parser.TXA - 42)) | (1 << (asm6502Parser.TXS - 42)) | (1 << (asm6502Parser.TYA - 42)))) !== 0))) {
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
    Object.defineProperty(asm6502Parser, "_ATN", {
        get: function () {
            if (!asm6502Parser.__ATN) {
                asm6502Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(asm6502Parser._serializedATN));
            }
            return asm6502Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    asm6502Parser.T__0 = 1;
    asm6502Parser.T__1 = 2;
    asm6502Parser.T__2 = 3;
    asm6502Parser.T__3 = 4;
    asm6502Parser.T__4 = 5;
    asm6502Parser.T__5 = 6;
    asm6502Parser.T__6 = 7;
    asm6502Parser.T__7 = 8;
    asm6502Parser.ASSEMBLER_INSTRUCTION = 9;
    asm6502Parser.ADC = 10;
    asm6502Parser.AND = 11;
    asm6502Parser.ASL = 12;
    asm6502Parser.BCC = 13;
    asm6502Parser.BCS = 14;
    asm6502Parser.BEQ = 15;
    asm6502Parser.BIT = 16;
    asm6502Parser.BMI = 17;
    asm6502Parser.BNE = 18;
    asm6502Parser.BPL = 19;
    asm6502Parser.BRA = 20;
    asm6502Parser.BRK = 21;
    asm6502Parser.BVC = 22;
    asm6502Parser.BVS = 23;
    asm6502Parser.CLC = 24;
    asm6502Parser.CLD = 25;
    asm6502Parser.CLI = 26;
    asm6502Parser.CLV = 27;
    asm6502Parser.CMP = 28;
    asm6502Parser.CPX = 29;
    asm6502Parser.CPY = 30;
    asm6502Parser.DEC = 31;
    asm6502Parser.DEX = 32;
    asm6502Parser.DEY = 33;
    asm6502Parser.EOR = 34;
    asm6502Parser.INC = 35;
    asm6502Parser.INX = 36;
    asm6502Parser.INY = 37;
    asm6502Parser.JMP = 38;
    asm6502Parser.JSR = 39;
    asm6502Parser.LDA = 40;
    asm6502Parser.LDY = 41;
    asm6502Parser.LDX = 42;
    asm6502Parser.LSR = 43;
    asm6502Parser.NOP = 44;
    asm6502Parser.ORA = 45;
    asm6502Parser.PHA = 46;
    asm6502Parser.PHX = 47;
    asm6502Parser.PHY = 48;
    asm6502Parser.PHP = 49;
    asm6502Parser.PLA = 50;
    asm6502Parser.PLP = 51;
    asm6502Parser.PLY = 52;
    asm6502Parser.ROL = 53;
    asm6502Parser.ROR = 54;
    asm6502Parser.RTI = 55;
    asm6502Parser.RTS = 56;
    asm6502Parser.SBC = 57;
    asm6502Parser.SEC = 58;
    asm6502Parser.SED = 59;
    asm6502Parser.SEI = 60;
    asm6502Parser.STA = 61;
    asm6502Parser.STX = 62;
    asm6502Parser.STY = 63;
    asm6502Parser.STZ = 64;
    asm6502Parser.TAX = 65;
    asm6502Parser.TAY = 66;
    asm6502Parser.TSX = 67;
    asm6502Parser.TXA = 68;
    asm6502Parser.TXS = 69;
    asm6502Parser.TYA = 70;
    asm6502Parser.NAME = 71;
    asm6502Parser.NUMBER = 72;
    asm6502Parser.COMMENT = 73;
    asm6502Parser.STRING = 74;
    asm6502Parser.EOL = 75;
    asm6502Parser.WS = 76;
    asm6502Parser.RULE_prog = 0;
    asm6502Parser.RULE_line = 1;
    asm6502Parser.RULE_instruction = 2;
    asm6502Parser.RULE_assemblerinstruction = 3;
    asm6502Parser.RULE_assembleropcode = 4;
    asm6502Parser.RULE_lbl = 5;
    asm6502Parser.RULE_argumentlist = 6;
    asm6502Parser.RULE_label = 7;
    asm6502Parser.RULE_argument = 8;
    asm6502Parser.RULE_prefix = 9;
    asm6502Parser.RULE_string = 10;
    asm6502Parser.RULE_name = 11;
    asm6502Parser.RULE_number = 12;
    asm6502Parser.RULE_comment = 13;
    asm6502Parser.RULE_opcode = 14;
    // tslint:disable:no-trailing-whitespace
    asm6502Parser.ruleNames = [
        "prog", "line", "instruction", "assemblerinstruction", "assembleropcode",
        "lbl", "argumentlist", "label", "argument", "prefix", "string", "name",
        "number", "comment", "opcode",
    ];
    asm6502Parser._LITERAL_NAMES = [
        undefined, "':'", "','", "'*'", "'+'", "'-'", "'('", "')'", "'#'",
    ];
    asm6502Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "ASSEMBLER_INSTRUCTION", "ADC", "AND", "ASL", "BCC",
        "BCS", "BEQ", "BIT", "BMI", "BNE", "BPL", "BRA", "BRK", "BVC", "BVS",
        "CLC", "CLD", "CLI", "CLV", "CMP", "CPX", "CPY", "DEC", "DEX", "DEY",
        "EOR", "INC", "INX", "INY", "JMP", "JSR", "LDA", "LDY", "LDX", "LSR",
        "NOP", "ORA", "PHA", "PHX", "PHY", "PHP", "PLA", "PLP", "PLY", "ROL",
        "ROR", "RTI", "RTS", "SBC", "SEC", "SED", "SEI", "STA", "STX", "STY",
        "STZ", "TAX", "TAY", "TSX", "TXA", "TXS", "TYA", "NAME", "NUMBER", "COMMENT",
        "STRING", "EOL", "WS",
    ];
    asm6502Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(asm6502Parser._LITERAL_NAMES, asm6502Parser._SYMBOLIC_NAMES, []);
    asm6502Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Nn\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
        "\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t" +
        "\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x05\x02\"\n\x02\x03\x02\x06\x02" +
        "%\n\x02\r\x02\x0E\x02&\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03-\n\x03" +
        "\x03\x04\x05\x040\n\x04\x03\x04\x03\x04\x05\x044\n\x04\x03\x04\x05\x04" +
        "7\n\x04\x03\x05\x05\x05:\n\x05\x03\x05\x03\x05\x05\x05>\n\x05\x03\x05" +
        "\x05\x05A\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
        "\b\x05\bK\n\b\x03\t\x03\t\x03\n\x05\nP\n\n\x03\n\x03\n\x03\n\x03\n\x05" +
        "\nV\n\n\x03\n\x03\n\x05\nZ\n\n\x03\n\x03\n\x03\n\x03\n\x05\n`\n\n\x03" +
        "\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
        "\x03\x10\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
        "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
        "\x02\x02\x04\x03\x02\x06\x07\x03\x02\fH\x02p\x02$\x03\x02\x02\x02\x04" +
        ",\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b9\x03\x02\x02\x02\nB\x03\x02\x02" +
        "\x02\fD\x03\x02\x02\x02\x0EG\x03\x02\x02\x02\x10L\x03\x02\x02\x02\x12" +
        "_\x03\x02\x02\x02\x14a\x03\x02\x02\x02\x16c\x03\x02\x02\x02\x18e\x03\x02" +
        "\x02\x02\x1Ag\x03\x02\x02\x02\x1Ci\x03\x02\x02\x02\x1Ek\x03\x02\x02\x02" +
        " \"\x05\x04\x03\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02\x02" +
        "\x02#%\x07M\x02\x02$!\x03\x02\x02\x02%&\x03\x02\x02\x02&$\x03\x02\x02" +
        "\x02&\'\x03\x02\x02\x02\'\x03\x03\x02\x02\x02(-\x05\x1C\x0F\x02)-\x05" +
        "\x06\x04\x02*-\x05\b\x05\x02+-\x05\f\x07\x02,(\x03\x02\x02\x02,)\x03\x02" +
        "\x02\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-\x05\x03\x02\x02\x02.0\x05" +
        "\x10\t\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0213\x05" +
        "\x1E\x10\x0224\x05\x0E\b\x0232\x03\x02\x02\x0234\x03\x02\x02\x0246\x03" +
        "\x02\x02\x0257\x05\x1C\x0F\x0265\x03\x02\x02\x0267\x03\x02\x02\x027\x07" +
        "\x03\x02\x02\x028:\x05\x12\n\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:" +
        ";\x03\x02\x02\x02;=\x05\n\x06\x02<>\x05\x0E\b\x02=<\x03\x02\x02\x02=>" +
        "\x03\x02\x02\x02>@\x03\x02\x02\x02?A\x05\x1C\x0F\x02@?\x03\x02\x02\x02" +
        "@A\x03\x02\x02\x02A\t\x03\x02\x02\x02BC\x07\v\x02\x02C\v\x03\x02\x02\x02" +
        "DE\x05\x10\t\x02EF\x07\x03\x02\x02F\r\x03\x02\x02\x02GJ\x05\x12\n\x02" +
        "HI\x07\x04\x02\x02IK\x05\x0E\b\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
        "K\x0F\x03\x02\x02\x02LM\x05\x18\r\x02M\x11\x03\x02\x02\x02NP\x05\x14\v" +
        "\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02PU\x03\x02\x02\x02QV\x05\x1A\x0E" +
        "\x02RV\x05\x18\r\x02SV\x05\x16\f\x02TV\x07\x05\x02\x02UQ\x03\x02\x02\x02" +
        "UR\x03\x02\x02\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02" +
        "WX\t\x02\x02\x02XZ\x05\x1A\x0E\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
        "Z`\x03\x02\x02\x02[\\\x07\b\x02\x02\\]\x05\x12\n\x02]^\x07\t\x02\x02^" +
        "`\x03\x02\x02\x02_O\x03\x02\x02\x02_[\x03\x02\x02\x02`\x13\x03\x02\x02" +
        "\x02ab\x07\n\x02\x02b\x15\x03\x02\x02\x02cd\x07L\x02\x02d\x17\x03\x02" +
        "\x02\x02ef\x07I\x02\x02f\x19\x03\x02\x02\x02gh\x07J\x02\x02h\x1B\x03\x02" +
        "\x02\x02ij\x07K\x02\x02j\x1D\x03\x02\x02\x02kl\t\x03\x02\x02l\x1F\x03" +
        "\x02\x02\x02\x10!&,/369=@JOUY_";
    return asm6502Parser;
}(Parser_1.Parser));
exports.asm6502Parser = asm6502Parser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(asm6502Parser.EOL);
        }
        else {
            return this.getToken(asm6502Parser.EOL, i);
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
        get: function () { return asm6502Parser.RULE_prog; },
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
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    LineContext.prototype.instruction = function () {
        return this.tryGetRuleContext(0, InstructionContext);
    };
    LineContext.prototype.assemblerinstruction = function () {
        return this.tryGetRuleContext(0, AssemblerinstructionContext);
    };
    LineContext.prototype.lbl = function () {
        return this.tryGetRuleContext(0, LblContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_line; },
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
    InstructionContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    InstructionContext.prototype.argumentlist = function () {
        return this.tryGetRuleContext(0, ArgumentlistContext);
    };
    InstructionContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_instruction; },
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
var AssemblerinstructionContext = /** @class */ (function (_super) {
    __extends(AssemblerinstructionContext, _super);
    function AssemblerinstructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblerinstructionContext.prototype.assembleropcode = function () {
        return this.getRuleContext(0, AssembleropcodeContext);
    };
    AssemblerinstructionContext.prototype.argument = function () {
        return this.tryGetRuleContext(0, ArgumentContext);
    };
    AssemblerinstructionContext.prototype.argumentlist = function () {
        return this.tryGetRuleContext(0, ArgumentlistContext);
    };
    AssemblerinstructionContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(AssemblerinstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_assemblerinstruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblerinstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblerinstruction) {
            listener.enterAssemblerinstruction(this);
        }
    };
    // @Override
    AssemblerinstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblerinstruction) {
            listener.exitAssemblerinstruction(this);
        }
    };
    // @Override
    AssemblerinstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblerinstruction) {
            return visitor.visitAssemblerinstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblerinstructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblerinstructionContext = AssemblerinstructionContext;
var AssembleropcodeContext = /** @class */ (function (_super) {
    __extends(AssembleropcodeContext, _super);
    function AssembleropcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssembleropcodeContext.prototype.ASSEMBLER_INSTRUCTION = function () { return this.getToken(asm6502Parser.ASSEMBLER_INSTRUCTION, 0); };
    Object.defineProperty(AssembleropcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_assembleropcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssembleropcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterAssembleropcode) {
            listener.enterAssembleropcode(this);
        }
    };
    // @Override
    AssembleropcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitAssembleropcode) {
            listener.exitAssembleropcode(this);
        }
    };
    // @Override
    AssembleropcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitAssembleropcode) {
            return visitor.visitAssembleropcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssembleropcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssembleropcodeContext = AssembleropcodeContext;
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
        get: function () { return asm6502Parser.RULE_lbl; },
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
var ArgumentlistContext = /** @class */ (function (_super) {
    __extends(ArgumentlistContext, _super);
    function ArgumentlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentlistContext.prototype.argument = function () {
        return this.getRuleContext(0, ArgumentContext);
    };
    ArgumentlistContext.prototype.argumentlist = function () {
        return this.tryGetRuleContext(0, ArgumentlistContext);
    };
    Object.defineProperty(ArgumentlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_argumentlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentlistContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentlist) {
            listener.enterArgumentlist(this);
        }
    };
    // @Override
    ArgumentlistContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentlist) {
            listener.exitArgumentlist(this);
        }
    };
    // @Override
    ArgumentlistContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentlist) {
            return visitor.visitArgumentlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentlistContext = ArgumentlistContext;
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
        get: function () { return asm6502Parser.RULE_label; },
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
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    ArgumentContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    ArgumentContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ArgumentContext.prototype.prefix = function () {
        return this.tryGetRuleContext(0, PrefixContext);
    };
    ArgumentContext.prototype.argument = function () {
        return this.tryGetRuleContext(0, ArgumentContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_argument; },
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
var PrefixContext = /** @class */ (function (_super) {
    __extends(PrefixContext, _super);
    function PrefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_prefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefix) {
            listener.enterPrefix(this);
        }
    };
    // @Override
    PrefixContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefix) {
            listener.exitPrefix(this);
        }
    };
    // @Override
    PrefixContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefix) {
            return visitor.visitPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixContext = PrefixContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(asm6502Parser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_string; },
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
    NameContext.prototype.NAME = function () { return this.getToken(asm6502Parser.NAME, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_name; },
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
    NumberContext.prototype.NUMBER = function () { return this.getToken(asm6502Parser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_number; },
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
    CommentContext.prototype.COMMENT = function () { return this.getToken(asm6502Parser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_comment; },
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
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodeContext.prototype.ADC = function () { return this.tryGetToken(asm6502Parser.ADC, 0); };
    OpcodeContext.prototype.AND = function () { return this.tryGetToken(asm6502Parser.AND, 0); };
    OpcodeContext.prototype.ASL = function () { return this.tryGetToken(asm6502Parser.ASL, 0); };
    OpcodeContext.prototype.BCC = function () { return this.tryGetToken(asm6502Parser.BCC, 0); };
    OpcodeContext.prototype.BCS = function () { return this.tryGetToken(asm6502Parser.BCS, 0); };
    OpcodeContext.prototype.BEQ = function () { return this.tryGetToken(asm6502Parser.BEQ, 0); };
    OpcodeContext.prototype.BIT = function () { return this.tryGetToken(asm6502Parser.BIT, 0); };
    OpcodeContext.prototype.BMI = function () { return this.tryGetToken(asm6502Parser.BMI, 0); };
    OpcodeContext.prototype.BNE = function () { return this.tryGetToken(asm6502Parser.BNE, 0); };
    OpcodeContext.prototype.BPL = function () { return this.tryGetToken(asm6502Parser.BPL, 0); };
    OpcodeContext.prototype.BRA = function () { return this.tryGetToken(asm6502Parser.BRA, 0); };
    OpcodeContext.prototype.BRK = function () { return this.tryGetToken(asm6502Parser.BRK, 0); };
    OpcodeContext.prototype.BVC = function () { return this.tryGetToken(asm6502Parser.BVC, 0); };
    OpcodeContext.prototype.BVS = function () { return this.tryGetToken(asm6502Parser.BVS, 0); };
    OpcodeContext.prototype.CLC = function () { return this.tryGetToken(asm6502Parser.CLC, 0); };
    OpcodeContext.prototype.CLD = function () { return this.tryGetToken(asm6502Parser.CLD, 0); };
    OpcodeContext.prototype.CLI = function () { return this.tryGetToken(asm6502Parser.CLI, 0); };
    OpcodeContext.prototype.CLV = function () { return this.tryGetToken(asm6502Parser.CLV, 0); };
    OpcodeContext.prototype.CMP = function () { return this.tryGetToken(asm6502Parser.CMP, 0); };
    OpcodeContext.prototype.CPX = function () { return this.tryGetToken(asm6502Parser.CPX, 0); };
    OpcodeContext.prototype.CPY = function () { return this.tryGetToken(asm6502Parser.CPY, 0); };
    OpcodeContext.prototype.DEC = function () { return this.tryGetToken(asm6502Parser.DEC, 0); };
    OpcodeContext.prototype.DEX = function () { return this.tryGetToken(asm6502Parser.DEX, 0); };
    OpcodeContext.prototype.DEY = function () { return this.tryGetToken(asm6502Parser.DEY, 0); };
    OpcodeContext.prototype.EOR = function () { return this.tryGetToken(asm6502Parser.EOR, 0); };
    OpcodeContext.prototype.INC = function () { return this.tryGetToken(asm6502Parser.INC, 0); };
    OpcodeContext.prototype.INX = function () { return this.tryGetToken(asm6502Parser.INX, 0); };
    OpcodeContext.prototype.INY = function () { return this.tryGetToken(asm6502Parser.INY, 0); };
    OpcodeContext.prototype.JMP = function () { return this.tryGetToken(asm6502Parser.JMP, 0); };
    OpcodeContext.prototype.JSR = function () { return this.tryGetToken(asm6502Parser.JSR, 0); };
    OpcodeContext.prototype.LDA = function () { return this.tryGetToken(asm6502Parser.LDA, 0); };
    OpcodeContext.prototype.LDY = function () { return this.tryGetToken(asm6502Parser.LDY, 0); };
    OpcodeContext.prototype.LDX = function () { return this.tryGetToken(asm6502Parser.LDX, 0); };
    OpcodeContext.prototype.LSR = function () { return this.tryGetToken(asm6502Parser.LSR, 0); };
    OpcodeContext.prototype.NOP = function () { return this.tryGetToken(asm6502Parser.NOP, 0); };
    OpcodeContext.prototype.ORA = function () { return this.tryGetToken(asm6502Parser.ORA, 0); };
    OpcodeContext.prototype.PHA = function () { return this.tryGetToken(asm6502Parser.PHA, 0); };
    OpcodeContext.prototype.PHX = function () { return this.tryGetToken(asm6502Parser.PHX, 0); };
    OpcodeContext.prototype.PHY = function () { return this.tryGetToken(asm6502Parser.PHY, 0); };
    OpcodeContext.prototype.PHP = function () { return this.tryGetToken(asm6502Parser.PHP, 0); };
    OpcodeContext.prototype.PLA = function () { return this.tryGetToken(asm6502Parser.PLA, 0); };
    OpcodeContext.prototype.PLP = function () { return this.tryGetToken(asm6502Parser.PLP, 0); };
    OpcodeContext.prototype.PLY = function () { return this.tryGetToken(asm6502Parser.PLY, 0); };
    OpcodeContext.prototype.ROL = function () { return this.tryGetToken(asm6502Parser.ROL, 0); };
    OpcodeContext.prototype.ROR = function () { return this.tryGetToken(asm6502Parser.ROR, 0); };
    OpcodeContext.prototype.RTI = function () { return this.tryGetToken(asm6502Parser.RTI, 0); };
    OpcodeContext.prototype.RTS = function () { return this.tryGetToken(asm6502Parser.RTS, 0); };
    OpcodeContext.prototype.SBC = function () { return this.tryGetToken(asm6502Parser.SBC, 0); };
    OpcodeContext.prototype.SEC = function () { return this.tryGetToken(asm6502Parser.SEC, 0); };
    OpcodeContext.prototype.SED = function () { return this.tryGetToken(asm6502Parser.SED, 0); };
    OpcodeContext.prototype.SEI = function () { return this.tryGetToken(asm6502Parser.SEI, 0); };
    OpcodeContext.prototype.STA = function () { return this.tryGetToken(asm6502Parser.STA, 0); };
    OpcodeContext.prototype.STX = function () { return this.tryGetToken(asm6502Parser.STX, 0); };
    OpcodeContext.prototype.STY = function () { return this.tryGetToken(asm6502Parser.STY, 0); };
    OpcodeContext.prototype.STZ = function () { return this.tryGetToken(asm6502Parser.STZ, 0); };
    OpcodeContext.prototype.TAX = function () { return this.tryGetToken(asm6502Parser.TAX, 0); };
    OpcodeContext.prototype.TAY = function () { return this.tryGetToken(asm6502Parser.TAY, 0); };
    OpcodeContext.prototype.TSX = function () { return this.tryGetToken(asm6502Parser.TSX, 0); };
    OpcodeContext.prototype.TXA = function () { return this.tryGetToken(asm6502Parser.TXA, 0); };
    OpcodeContext.prototype.TXS = function () { return this.tryGetToken(asm6502Parser.TXS, 0); };
    OpcodeContext.prototype.TYA = function () { return this.tryGetToken(asm6502Parser.TYA, 0); };
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asm6502Parser.RULE_opcode; },
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
