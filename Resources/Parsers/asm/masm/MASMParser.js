"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/masm/MASM.g4 by ANTLR 4.7.3-SNAPSHOT
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
package;
com.Ostermiller.Syntax;
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
var MASMParser = /** @class */ (function (_super) {
    __extends(MASMParser, _super);
    function MASMParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(MASMParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(MASMParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return MASMParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MASMParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "MASM.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MASMParser.prototype, "ruleNames", {
        // @Override
        get: function () { return MASMParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MASMParser.prototype, "serializedATN", {
        // @Override
        get: function () { return MASMParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    MASMParser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, MASMParser.RULE_compilationUnit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === MASMParser.Identifier || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & ((1 << (MASMParser.ALPHA - 217)) | (1 << (MASMParser.CONST - 217)) | (1 << (MASMParser.CREF - 217)) | (1 << (MASMParser.XCREF - 217)) | (1 << (MASMParser.DATA - 217)) | (1 << (MASMParser.DATA2 - 217)) | (1 << (MASMParser.DOSSEG - 217)) | (1 << (MASMParser.ERR - 217)) | (1 << (MASMParser.ERR1 - 217)) | (1 << (MASMParser.ERR2 - 217)) | (1 << (MASMParser.ERRE - 217)) | (1 << (MASMParser.ERRNZ - 217)) | (1 << (MASMParser.ERRDEF - 217)) | (1 << (MASMParser.ERRNDEF - 217)) | (1 << (MASMParser.ERRB - 217)) | (1 << (MASMParser.ERRNB - 217)) | (1 << (MASMParser.ERRIDN - 217)) | (1 << (MASMParser.ERRDIF - 217)) | (1 << (MASMParser.EVEN - 217)) | (1 << (MASMParser.LIST - 217)) | (1 << (MASMParser.WIDTH - 217)) | (1 << (MASMParser.MASK - 217)) | (1 << (MASMParser.SEQ - 217)) | (1 << (MASMParser.XLIST - 217)) | (1 << (MASMParser.EXIT - 217)) | (1 << (MASMParser.MODEL - 217)))) !== 0)) {
                    {
                        this.state = 100;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case MASMParser.Identifier:
                                {
                                    this.state = 98;
                                    this.segments();
                                }
                                break;
                            case MASMParser.ALPHA:
                            case MASMParser.CONST:
                            case MASMParser.CREF:
                            case MASMParser.XCREF:
                            case MASMParser.DATA:
                            case MASMParser.DATA2:
                            case MASMParser.DOSSEG:
                            case MASMParser.ERR:
                            case MASMParser.ERR1:
                            case MASMParser.ERR2:
                            case MASMParser.ERRE:
                            case MASMParser.ERRNZ:
                            case MASMParser.ERRDEF:
                            case MASMParser.ERRNDEF:
                            case MASMParser.ERRB:
                            case MASMParser.ERRNB:
                            case MASMParser.ERRIDN:
                            case MASMParser.ERRDIF:
                            case MASMParser.EVEN:
                            case MASMParser.LIST:
                            case MASMParser.WIDTH:
                            case MASMParser.MASK:
                            case MASMParser.SEQ:
                            case MASMParser.XLIST:
                            case MASMParser.EXIT:
                            case MASMParser.MODEL:
                                {
                                    this.state = 99;
                                    this.directive_exp1();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 104;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 105;
                this.match(MASMParser.T__0);
                this.state = 106;
                this.match(MASMParser.Identifier);
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
    MASMParser.prototype.segments = function () {
        var _localctx = new SegmentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, MASMParser.RULE_segments);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this.match(MASMParser.Identifier);
                this.state = 109;
                this.match(MASMParser.T__1);
                this.state = 110;
                this.match(MASMParser.T__2);
                this.state = 111;
                this.match(MASMParser.T__3);
                this.state = 116;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 114;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 112;
                                        this.code();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 113;
                                        this.proc();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 118;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
                this.state = 119;
                this.match(MASMParser.Identifier);
                this.state = 120;
                this.match(MASMParser.T__4);
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
    MASMParser.prototype.proc = function () {
        var _localctx = new ProcContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, MASMParser.RULE_proc);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this.match(MASMParser.Identifier);
                this.state = 123;
                this.match(MASMParser.PROC);
                this.state = 127;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 124;
                                this.code();
                            }
                        }
                    }
                    this.state = 129;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
                this.state = 130;
                this.match(MASMParser.RET);
                this.state = 131;
                this.match(MASMParser.Identifier);
                this.state = 132;
                this.match(MASMParser.T__5);
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
    MASMParser.prototype.code = function () {
        var _localctx = new CodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, MASMParser.RULE_code);
        try {
            this.state = 154;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case MASMParser.MOV:
                case MASMParser.CMP:
                case MASMParser.TEST:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 134;
                        this.binary_exp1();
                    }
                    break;
                case MASMParser.IN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 135;
                        this.binary_exp10();
                    }
                    break;
                case MASMParser.OUT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 136;
                        this.binary_exp11();
                    }
                    break;
                case MASMParser.REP:
                case MASMParser.REPE:
                case MASMParser.REPZ:
                case MASMParser.REPNE:
                case MASMParser.REPNZ:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 137;
                        this.binary_exp12();
                    }
                    break;
                case MASMParser.XCHG:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 138;
                        this.binary_exp2();
                    }
                    break;
                case MASMParser.ADC:
                case MASMParser.ADD:
                case MASMParser.SUB:
                case MASMParser.CBB:
                case MASMParser.XOR:
                case MASMParser.OR:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 139;
                        this.binary_exp3();
                    }
                    break;
                case MASMParser.MOVZX:
                case MASMParser.BSF:
                case MASMParser.BSR:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 140;
                        this.binary_exp4();
                    }
                    break;
                case MASMParser.LES:
                case MASMParser.LEA:
                case MASMParser.LDS:
                case MASMParser.INS:
                case MASMParser.OUTS:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 141;
                        this.binary_exp5();
                    }
                    break;
                case MASMParser.XADD:
                case MASMParser.CMPXCHG:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 142;
                        this.binary_exp6();
                    }
                    break;
                case MASMParser.SHL:
                case MASMParser.SHR:
                case MASMParser.ROR:
                case MASMParser.ROL:
                case MASMParser.RCL:
                case MASMParser.SAL:
                case MASMParser.RCR:
                case MASMParser.SAR:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 143;
                        this.binary_exp7();
                    }
                    break;
                case MASMParser.SHRD:
                case MASMParser.SHLD:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 144;
                        this.binary_exp8();
                    }
                    break;
                case MASMParser.BTR:
                case MASMParser.BT:
                case MASMParser.BTC:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 145;
                        this.binary_exp9();
                    }
                    break;
                case MASMParser.PUSH:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 146;
                        this.unuary_exp1();
                    }
                    break;
                case MASMParser.POP:
                case MASMParser.IDIV:
                case MASMParser.INC:
                case MASMParser.DEC:
                case MASMParser.NEG:
                case MASMParser.MUL:
                case MASMParser.DIV:
                case MASMParser.IMUL:
                case MASMParser.NOT:
                case MASMParser.SETPO:
                case MASMParser.SETAE:
                case MASMParser.SETNLE:
                case MASMParser.SETC:
                case MASMParser.SETNO:
                case MASMParser.SETNB:
                case MASMParser.SETP:
                case MASMParser.SETNGE:
                case MASMParser.SETL:
                case MASMParser.SETGE:
                case MASMParser.SETPE:
                case MASMParser.SETNL:
                case MASMParser.SETNZ:
                case MASMParser.SETNE:
                case MASMParser.SETNC:
                case MASMParser.SETBE:
                case MASMParser.SETNP:
                case MASMParser.SETNS:
                case MASMParser.SETO:
                case MASMParser.SETNA:
                case MASMParser.SETNAE:
                case MASMParser.SETZ:
                case MASMParser.SETLE:
                case MASMParser.SETNBE:
                case MASMParser.SETS:
                case MASMParser.SETE:
                case MASMParser.SETB:
                case MASMParser.SETA:
                case MASMParser.SETG:
                case MASMParser.SETNG:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 147;
                        this.unuary_exp2();
                    }
                    break;
                case MASMParser.JNBE:
                case MASMParser.JNZ:
                case MASMParser.JPO:
                case MASMParser.JZ:
                case MASMParser.JS:
                case MASMParser.LOOPNZ:
                case MASMParser.JGE:
                case MASMParser.JB:
                case MASMParser.JNB:
                case MASMParser.JO:
                case MASMParser.JP:
                case MASMParser.JNO:
                case MASMParser.JNL:
                case MASMParser.JNAE:
                case MASMParser.LOOPZ:
                case MASMParser.JMP:
                case MASMParser.JNP:
                case MASMParser.LOOP:
                case MASMParser.JL:
                case MASMParser.JCXZ:
                case MASMParser.JAE:
                case MASMParser.JNGE:
                case MASMParser.JA:
                case MASMParser.LOOPNE:
                case MASMParser.LOOPE:
                case MASMParser.JG:
                case MASMParser.JNLE:
                case MASMParser.JE:
                case MASMParser.JNC:
                case MASMParser.JC:
                case MASMParser.JNA:
                case MASMParser.JBE:
                case MASMParser.JLE:
                case MASMParser.JPE:
                case MASMParser.JNS:
                case MASMParser.JECXZ:
                case MASMParser.JNG:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 148;
                        this.unuary_exp3();
                    }
                    break;
                case MASMParser.CALL:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 149;
                        this.unuary_exp4();
                    }
                    break;
                case MASMParser.INT:
                case MASMParser.RETN:
                case MASMParser.RET:
                case MASMParser.RETF:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 150;
                        this.unuary_exp5();
                    }
                    break;
                case MASMParser.POPAD:
                case MASMParser.AAA:
                case MASMParser.POPA:
                case MASMParser.POPFD:
                case MASMParser.CWD:
                case MASMParser.LAHF:
                case MASMParser.PUSHAD:
                case MASMParser.PUSHF:
                case MASMParser.AAS:
                case MASMParser.BSWAP:
                case MASMParser.PUSHFD:
                case MASMParser.CBW:
                case MASMParser.CWDE:
                case MASMParser.XLAT:
                case MASMParser.AAM:
                case MASMParser.AAD:
                case MASMParser.CDQ:
                case MASMParser.DAA:
                case MASMParser.SAHF:
                case MASMParser.DAS:
                case MASMParser.INTO:
                case MASMParser.IRET:
                case MASMParser.CLC:
                case MASMParser.STC:
                case MASMParser.CMC:
                case MASMParser.CLD:
                case MASMParser.STD:
                case MASMParser.CLI:
                case MASMParser.STI:
                case MASMParser.MOVSB:
                case MASMParser.MOVSW:
                case MASMParser.MOVSD:
                case MASMParser.LODS:
                case MASMParser.LODSB:
                case MASMParser.LODSW:
                case MASMParser.LODSD:
                case MASMParser.STOS:
                case MASMParser.STOSB:
                case MASMParser.STOSW:
                case MASMParser.SOTSD:
                case MASMParser.SCAS:
                case MASMParser.SCASB:
                case MASMParser.SCASW:
                case MASMParser.SCASD:
                case MASMParser.CMPS:
                case MASMParser.CMPSB:
                case MASMParser.CMPSW:
                case MASMParser.CMPSD:
                case MASMParser.INSB:
                case MASMParser.INSW:
                case MASMParser.INSD:
                case MASMParser.OUTSB:
                case MASMParser.OUTSW:
                case MASMParser.OUTSD:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 151;
                        this.notarguments();
                    }
                    break;
                case MASMParser.Identifier:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 152;
                        this.variabledeclaration();
                    }
                    break;
                case MASMParser.ALPHA:
                case MASMParser.CONST:
                case MASMParser.CREF:
                case MASMParser.XCREF:
                case MASMParser.DATA:
                case MASMParser.DATA2:
                case MASMParser.DOSSEG:
                case MASMParser.ERR:
                case MASMParser.ERR1:
                case MASMParser.ERR2:
                case MASMParser.ERRE:
                case MASMParser.ERRNZ:
                case MASMParser.ERRDEF:
                case MASMParser.ERRNDEF:
                case MASMParser.ERRB:
                case MASMParser.ERRNB:
                case MASMParser.ERRIDN:
                case MASMParser.ERRDIF:
                case MASMParser.EVEN:
                case MASMParser.LIST:
                case MASMParser.WIDTH:
                case MASMParser.MASK:
                case MASMParser.SEQ:
                case MASMParser.XLIST:
                case MASMParser.EXIT:
                case MASMParser.MODEL:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 153;
                        this.directive_exp1();
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
    MASMParser.prototype.binary_exp1 = function () {
        var _localctx = new Binary_exp1Context(this._ctx, this.state);
        this.enterRule(_localctx, 8, MASMParser.RULE_binary_exp1);
        try {
            this.state = 171;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 156;
                        this.o();
                        this.state = 157;
                        this.register();
                        this.state = 158;
                        this.match(MASMParser.Separator);
                        this.state = 162;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case MASMParser.AH:
                            case MASMParser.AL:
                            case MASMParser.AX:
                            case MASMParser.BH:
                            case MASMParser.BL:
                            case MASMParser.BX:
                            case MASMParser.CH:
                            case MASMParser.CL:
                            case MASMParser.CX:
                            case MASMParser.DH:
                            case MASMParser.DL:
                            case MASMParser.DX:
                            case MASMParser.SI:
                            case MASMParser.DI:
                            case MASMParser.SP:
                            case MASMParser.BP:
                            case MASMParser.EAX:
                            case MASMParser.EBX:
                            case MASMParser.ECX:
                            case MASMParser.EDX:
                            case MASMParser.ESI:
                            case MASMParser.EDI:
                            case MASMParser.ESP:
                            case MASMParser.EBP:
                                {
                                    this.state = 159;
                                    this.register();
                                }
                                break;
                            case MASMParser.Integer:
                                {
                                    this.state = 160;
                                    this.match(MASMParser.Integer);
                                }
                                break;
                            case MASMParser.T__6:
                                {
                                    this.state = 161;
                                    this.memory();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 164;
                        this.o();
                        this.state = 165;
                        this.memory();
                        this.state = 166;
                        this.match(MASMParser.Separator);
                        this.state = 169;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case MASMParser.AH:
                            case MASMParser.AL:
                            case MASMParser.AX:
                            case MASMParser.BH:
                            case MASMParser.BL:
                            case MASMParser.BX:
                            case MASMParser.CH:
                            case MASMParser.CL:
                            case MASMParser.CX:
                            case MASMParser.DH:
                            case MASMParser.DL:
                            case MASMParser.DX:
                            case MASMParser.SI:
                            case MASMParser.DI:
                            case MASMParser.SP:
                            case MASMParser.BP:
                            case MASMParser.EAX:
                            case MASMParser.EBX:
                            case MASMParser.ECX:
                            case MASMParser.EDX:
                            case MASMParser.ESI:
                            case MASMParser.EDI:
                            case MASMParser.ESP:
                            case MASMParser.EBP:
                                {
                                    this.state = 167;
                                    this.register();
                                }
                                break;
                            case MASMParser.Integer:
                                {
                                    this.state = 168;
                                    this.match(MASMParser.Integer);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
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
    MASMParser.prototype.unuary_exp1 = function () {
        var _localctx = new Unuary_exp1Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, MASMParser.RULE_unuary_exp1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                this.op();
                this.state = 177;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.Integer:
                        {
                            this.state = 174;
                            this.match(MASMParser.Integer);
                        }
                        break;
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 175;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 176;
                            this.memory();
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
    MASMParser.prototype.unuary_exp2 = function () {
        var _localctx = new Unuary_exp2Context(this._ctx, this.state);
        this.enterRule(_localctx, 12, MASMParser.RULE_unuary_exp2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.ope();
                this.state = 182;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 180;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 181;
                            this.memory();
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
    MASMParser.prototype.binary_exp2 = function () {
        var _localctx = new Binary_exp2Context(this._ctx, this.state);
        this.enterRule(_localctx, 14, MASMParser.RULE_binary_exp2);
        try {
            this.state = 196;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 184;
                        this.oper();
                        this.state = 185;
                        this.register();
                        this.state = 186;
                        this.match(MASMParser.Separator);
                        this.state = 189;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case MASMParser.AH:
                            case MASMParser.AL:
                            case MASMParser.AX:
                            case MASMParser.BH:
                            case MASMParser.BL:
                            case MASMParser.BX:
                            case MASMParser.CH:
                            case MASMParser.CL:
                            case MASMParser.CX:
                            case MASMParser.DH:
                            case MASMParser.DL:
                            case MASMParser.DX:
                            case MASMParser.SI:
                            case MASMParser.DI:
                            case MASMParser.SP:
                            case MASMParser.BP:
                            case MASMParser.EAX:
                            case MASMParser.EBX:
                            case MASMParser.ECX:
                            case MASMParser.EDX:
                            case MASMParser.ESI:
                            case MASMParser.EDI:
                            case MASMParser.ESP:
                            case MASMParser.EBP:
                                {
                                    this.state = 187;
                                    this.register();
                                }
                                break;
                            case MASMParser.T__6:
                                {
                                    this.state = 188;
                                    this.memory();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 191;
                        this.oper();
                        this.state = 192;
                        this.memory();
                        this.state = 193;
                        this.match(MASMParser.Separator);
                        this.state = 194;
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
    MASMParser.prototype.notarguments = function () {
        var _localctx = new NotargumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, MASMParser.RULE_notarguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.opera();
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
    MASMParser.prototype.binary_exp3 = function () {
        var _localctx = new Binary_exp3Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, MASMParser.RULE_binary_exp3);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.operat();
                this.state = 203;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 201;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 202;
                            this.memory();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 205;
                this.match(MASMParser.Separator);
                this.state = 209;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 206;
                            this.register();
                        }
                        break;
                    case MASMParser.Integer:
                        {
                            this.state = 207;
                            this.match(MASMParser.Integer);
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 208;
                            this.memory();
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
    MASMParser.prototype.unuary_exp3 = function () {
        var _localctx = new Unuary_exp3Context(this._ctx, this.state);
        this.enterRule(_localctx, 20, MASMParser.RULE_unuary_exp3);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.operato();
                this.state = 212;
                this.match(MASMParser.Identifier);
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
    MASMParser.prototype.binary_exp4 = function () {
        var _localctx = new Binary_exp4Context(this._ctx, this.state);
        this.enterRule(_localctx, 22, MASMParser.RULE_binary_exp4);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.operator();
                this.state = 215;
                this.register();
                this.state = 216;
                this.match(MASMParser.Separator);
                this.state = 219;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 217;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 218;
                            this.memory();
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
    MASMParser.prototype.binary_exp5 = function () {
        var _localctx = new Binary_exp5Context(this._ctx, this.state);
        this.enterRule(_localctx, 24, MASMParser.RULE_binary_exp5);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.l();
                this.state = 222;
                this.register();
                this.state = 223;
                this.match(MASMParser.Separator);
                this.state = 224;
                this.memory();
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
    MASMParser.prototype.binary_exp6 = function () {
        var _localctx = new Binary_exp6Context(this._ctx, this.state);
        this.enterRule(_localctx, 26, MASMParser.RULE_binary_exp6);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.x();
                this.state = 229;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 227;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 228;
                            this.memory();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 231;
                this.match(MASMParser.Separator);
                this.state = 232;
                this.register();
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
    MASMParser.prototype.binary_exp7 = function () {
        var _localctx = new Binary_exp7Context(this._ctx, this.state);
        this.enterRule(_localctx, 28, MASMParser.RULE_binary_exp7);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.s();
                this.state = 237;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 235;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 236;
                            this.memory();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 239;
                this.match(MASMParser.Separator);
                this.state = 242;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.Integer:
                        {
                            this.state = 240;
                            this.match(MASMParser.Integer);
                        }
                        break;
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 241;
                            this.register();
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
    MASMParser.prototype.binary_exp8 = function () {
        var _localctx = new Binary_exp8Context(this._ctx, this.state);
        this.enterRule(_localctx, 30, MASMParser.RULE_binary_exp8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.sh();
                this.state = 247;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 245;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 246;
                            this.memory();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 249;
                this.match(MASMParser.Separator);
                this.state = 250;
                this.register();
                this.state = 251;
                this.match(MASMParser.Separator);
                this.state = 254;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 252;
                            this.register();
                        }
                        break;
                    case MASMParser.Integer:
                        {
                            this.state = 253;
                            this.match(MASMParser.Integer);
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
    MASMParser.prototype.binary_exp9 = function () {
        var _localctx = new Binary_exp9Context(this._ctx, this.state);
        this.enterRule(_localctx, 32, MASMParser.RULE_binary_exp9);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                this.b();
                this.state = 259;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 257;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 258;
                            this.memory();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 261;
                this.match(MASMParser.Separator);
                this.state = 264;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 262;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 263;
                            this.memory();
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
    MASMParser.prototype.unuary_exp4 = function () {
        var _localctx = new Unuary_exp4Context(this._ctx, this.state);
        this.enterRule(_localctx, 34, MASMParser.RULE_unuary_exp4);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.call();
                this.state = 270;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 267;
                            this.register();
                        }
                        break;
                    case MASMParser.T__6:
                        {
                            this.state = 268;
                            this.memory();
                        }
                        break;
                    case MASMParser.Integer:
                        {
                            this.state = 269;
                            this.match(MASMParser.Integer);
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
    MASMParser.prototype.unuary_exp5 = function () {
        var _localctx = new Unuary_exp5Context(this._ctx, this.state);
        this.enterRule(_localctx, 36, MASMParser.RULE_unuary_exp5);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.interruption();
                this.state = 273;
                this.match(MASMParser.Integer);
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
    MASMParser.prototype.binary_exp10 = function () {
        var _localctx = new Binary_exp10Context(this._ctx, this.state);
        this.enterRule(_localctx, 38, MASMParser.RULE_binary_exp10);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.in();
                this.state = 276;
                this.register();
                this.state = 277;
                this.match(MASMParser.Separator);
                this.state = 280;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 278;
                            this.register();
                        }
                        break;
                    case MASMParser.Integer:
                        {
                            this.state = 279;
                            this.match(MASMParser.Integer);
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
    MASMParser.prototype.binary_exp11 = function () {
        var _localctx = new Binary_exp11Context(this._ctx, this.state);
        this.enterRule(_localctx, 40, MASMParser.RULE_binary_exp11);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.out();
                this.state = 285;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 283;
                            this.register();
                        }
                        break;
                    case MASMParser.Integer:
                        {
                            this.state = 284;
                            this.match(MASMParser.Integer);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 287;
                this.match(MASMParser.Separator);
                this.state = 288;
                this.register();
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
    MASMParser.prototype.binary_exp12 = function () {
        var _localctx = new Binary_exp12Context(this._ctx, this.state);
        this.enterRule(_localctx, 42, MASMParser.RULE_binary_exp12);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.re();
                this.state = 291;
                this.opera();
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
    MASMParser.prototype.directive_exp1 = function () {
        var _localctx = new Directive_exp1Context(this._ctx, this.state);
        this.enterRule(_localctx, 44, MASMParser.RULE_directive_exp1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 293;
                            this.directives();
                            this.state = 294;
                            this.match(MASMParser.Identifier);
                        }
                        break;
                    case 2:
                        {
                            this.state = 296;
                            this.directives();
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
    MASMParser.prototype.variabledeclaration = function () {
        var _localctx = new VariabledeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, MASMParser.RULE_variabledeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.match(MASMParser.Identifier);
                this.state = 300;
                this.ty();
                this.state = 304;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.QUESTION:
                        {
                            this.state = 301;
                            this.question();
                        }
                        break;
                    case MASMParser.String:
                        {
                            this.state = 302;
                            this.match(MASMParser.String);
                        }
                        break;
                    case MASMParser.Integer:
                        {
                            this.state = 303;
                            this.match(MASMParser.Integer);
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
    MASMParser.prototype.memory = function () {
        var _localctx = new MemoryContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, MASMParser.RULE_memory);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.match(MASMParser.T__6);
                this.state = 309;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case MASMParser.AH:
                    case MASMParser.AL:
                    case MASMParser.AX:
                    case MASMParser.BH:
                    case MASMParser.BL:
                    case MASMParser.BX:
                    case MASMParser.CH:
                    case MASMParser.CL:
                    case MASMParser.CX:
                    case MASMParser.DH:
                    case MASMParser.DL:
                    case MASMParser.DX:
                    case MASMParser.SI:
                    case MASMParser.DI:
                    case MASMParser.SP:
                    case MASMParser.BP:
                    case MASMParser.EAX:
                    case MASMParser.EBX:
                    case MASMParser.ECX:
                    case MASMParser.EDX:
                    case MASMParser.ESI:
                    case MASMParser.EDI:
                    case MASMParser.ESP:
                    case MASMParser.EBP:
                        {
                            this.state = 307;
                            this.register();
                        }
                        break;
                    case MASMParser.Identifier:
                        {
                            this.state = 308;
                            this.match(MASMParser.Identifier);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 322;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === MASMParser.T__7) {
                    {
                        this.state = 311;
                        this.match(MASMParser.T__7);
                        this.state = 320;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case MASMParser.AH:
                            case MASMParser.AL:
                            case MASMParser.AX:
                            case MASMParser.BH:
                            case MASMParser.BL:
                            case MASMParser.BX:
                            case MASMParser.CH:
                            case MASMParser.CL:
                            case MASMParser.CX:
                            case MASMParser.DH:
                            case MASMParser.DL:
                            case MASMParser.DX:
                            case MASMParser.SI:
                            case MASMParser.DI:
                            case MASMParser.SP:
                            case MASMParser.BP:
                            case MASMParser.EAX:
                            case MASMParser.EBX:
                            case MASMParser.ECX:
                            case MASMParser.EDX:
                            case MASMParser.ESI:
                            case MASMParser.EDI:
                            case MASMParser.ESP:
                            case MASMParser.EBP:
                                {
                                    {
                                        this.state = 312;
                                        this.register();
                                        this.state = 315;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === MASMParser.T__7) {
                                            {
                                                this.state = 313;
                                                this.match(MASMParser.T__7);
                                                this.state = 314;
                                                _la = this._input.LA(1);
                                                if (!(((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & ((1 << (MASMParser.Hexnum - 266)) | (1 << (MASMParser.Integer - 266)) | (1 << (MASMParser.Octalnum - 266)))) !== 0))) {
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
                                    }
                                }
                                break;
                            case MASMParser.Integer:
                                {
                                    this.state = 317;
                                    this.match(MASMParser.Integer);
                                }
                                break;
                            case MASMParser.Hexnum:
                                {
                                    this.state = 318;
                                    this.match(MASMParser.Hexnum);
                                }
                                break;
                            case MASMParser.Octalnum:
                                {
                                    this.state = 319;
                                    this.match(MASMParser.Octalnum);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                }
                this.state = 324;
                this.match(MASMParser.T__8);
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
    MASMParser.prototype.segmentos = function () {
        var _localctx = new SegmentosContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, MASMParser.RULE_segmentos);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MASMParser.DS) | (1 << MASMParser.ES) | (1 << MASMParser.CS) | (1 << MASMParser.SS) | (1 << MASMParser.GS) | (1 << MASMParser.FS))) !== 0))) {
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
    MASMParser.prototype.register = function () {
        var _localctx = new RegisterContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, MASMParser.RULE_register);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                _la = this._input.LA(1);
                if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (MASMParser.AH - 17)) | (1 << (MASMParser.AL - 17)) | (1 << (MASMParser.AX - 17)) | (1 << (MASMParser.BH - 17)) | (1 << (MASMParser.BL - 17)) | (1 << (MASMParser.BX - 17)) | (1 << (MASMParser.CH - 17)) | (1 << (MASMParser.CL - 17)) | (1 << (MASMParser.CX - 17)) | (1 << (MASMParser.DH - 17)) | (1 << (MASMParser.DL - 17)) | (1 << (MASMParser.DX - 17)) | (1 << (MASMParser.SI - 17)) | (1 << (MASMParser.DI - 17)) | (1 << (MASMParser.SP - 17)) | (1 << (MASMParser.BP - 17)) | (1 << (MASMParser.EAX - 17)) | (1 << (MASMParser.EBX - 17)) | (1 << (MASMParser.ECX - 17)) | (1 << (MASMParser.EDX - 17)) | (1 << (MASMParser.ESI - 17)) | (1 << (MASMParser.EDI - 17)) | (1 << (MASMParser.ESP - 17)) | (1 << (MASMParser.EBP - 17)))) !== 0))) {
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
    MASMParser.prototype.o = function () {
        var _localctx = new OContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, MASMParser.RULE_o);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                _la = this._input.LA(1);
                if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MASMParser.MOV - 41)) | (1 << (MASMParser.CMP - 41)) | (1 << (MASMParser.TEST - 41)))) !== 0))) {
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
    MASMParser.prototype.op = function () {
        var _localctx = new OpContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, MASMParser.RULE_op);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 332;
                this.match(MASMParser.PUSH);
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
    MASMParser.prototype.ope = function () {
        var _localctx = new OpeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, MASMParser.RULE_ope);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                _la = this._input.LA(1);
                if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (MASMParser.POP - 45)) | (1 << (MASMParser.IDIV - 45)) | (1 << (MASMParser.INC - 45)) | (1 << (MASMParser.DEC - 45)) | (1 << (MASMParser.NEG - 45)) | (1 << (MASMParser.MUL - 45)) | (1 << (MASMParser.DIV - 45)) | (1 << (MASMParser.IMUL - 45)) | (1 << (MASMParser.NOT - 45)) | (1 << (MASMParser.SETPO - 45)) | (1 << (MASMParser.SETAE - 45)) | (1 << (MASMParser.SETNLE - 45)) | (1 << (MASMParser.SETC - 45)) | (1 << (MASMParser.SETNO - 45)) | (1 << (MASMParser.SETNB - 45)) | (1 << (MASMParser.SETP - 45)) | (1 << (MASMParser.SETNGE - 45)) | (1 << (MASMParser.SETL - 45)) | (1 << (MASMParser.SETGE - 45)) | (1 << (MASMParser.SETPE - 45)) | (1 << (MASMParser.SETNL - 45)) | (1 << (MASMParser.SETNZ - 45)) | (1 << (MASMParser.SETNE - 45)) | (1 << (MASMParser.SETNC - 45)) | (1 << (MASMParser.SETBE - 45)) | (1 << (MASMParser.SETNP - 45)) | (1 << (MASMParser.SETNS - 45)) | (1 << (MASMParser.SETO - 45)) | (1 << (MASMParser.SETNA - 45)) | (1 << (MASMParser.SETNAE - 45)) | (1 << (MASMParser.SETZ - 45)) | (1 << (MASMParser.SETLE - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (MASMParser.SETNBE - 77)) | (1 << (MASMParser.SETS - 77)) | (1 << (MASMParser.SETE - 77)) | (1 << (MASMParser.SETB - 77)) | (1 << (MASMParser.SETA - 77)) | (1 << (MASMParser.SETG - 77)) | (1 << (MASMParser.SETNG - 77)))) !== 0))) {
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
    MASMParser.prototype.oper = function () {
        var _localctx = new OperContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, MASMParser.RULE_oper);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.match(MASMParser.XCHG);
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
    MASMParser.prototype.opera = function () {
        var _localctx = new OperaContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, MASMParser.RULE_opera);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 338;
                _la = this._input.LA(1);
                if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (MASMParser.POPAD - 85)) | (1 << (MASMParser.AAA - 85)) | (1 << (MASMParser.POPA - 85)) | (1 << (MASMParser.POPFD - 85)) | (1 << (MASMParser.CWD - 85)) | (1 << (MASMParser.LAHF - 85)) | (1 << (MASMParser.PUSHAD - 85)) | (1 << (MASMParser.PUSHF - 85)) | (1 << (MASMParser.AAS - 85)) | (1 << (MASMParser.BSWAP - 85)) | (1 << (MASMParser.PUSHFD - 85)) | (1 << (MASMParser.CBW - 85)) | (1 << (MASMParser.CWDE - 85)) | (1 << (MASMParser.XLAT - 85)) | (1 << (MASMParser.AAM - 85)) | (1 << (MASMParser.AAD - 85)) | (1 << (MASMParser.CDQ - 85)) | (1 << (MASMParser.DAA - 85)) | (1 << (MASMParser.SAHF - 85)) | (1 << (MASMParser.DAS - 85)) | (1 << (MASMParser.INTO - 85)) | (1 << (MASMParser.IRET - 85)) | (1 << (MASMParser.CLC - 85)) | (1 << (MASMParser.STC - 85)) | (1 << (MASMParser.CMC - 85)) | (1 << (MASMParser.CLD - 85)) | (1 << (MASMParser.STD - 85)) | (1 << (MASMParser.CLI - 85)) | (1 << (MASMParser.STI - 85)) | (1 << (MASMParser.MOVSB - 85)) | (1 << (MASMParser.MOVSW - 85)) | (1 << (MASMParser.MOVSD - 85)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (MASMParser.LODS - 117)) | (1 << (MASMParser.LODSB - 117)) | (1 << (MASMParser.LODSW - 117)) | (1 << (MASMParser.LODSD - 117)) | (1 << (MASMParser.STOS - 117)) | (1 << (MASMParser.STOSB - 117)) | (1 << (MASMParser.STOSW - 117)) | (1 << (MASMParser.SOTSD - 117)) | (1 << (MASMParser.SCAS - 117)) | (1 << (MASMParser.SCASB - 117)) | (1 << (MASMParser.SCASW - 117)) | (1 << (MASMParser.SCASD - 117)) | (1 << (MASMParser.CMPS - 117)) | (1 << (MASMParser.CMPSB - 117)) | (1 << (MASMParser.CMPSW - 117)) | (1 << (MASMParser.CMPSD - 117)) | (1 << (MASMParser.INSB - 117)) | (1 << (MASMParser.INSW - 117)) | (1 << (MASMParser.INSD - 117)) | (1 << (MASMParser.OUTSB - 117)) | (1 << (MASMParser.OUTSW - 117)) | (1 << (MASMParser.OUTSD - 117)))) !== 0))) {
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
    MASMParser.prototype.operat = function () {
        var _localctx = new OperatContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, MASMParser.RULE_operat);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                _la = this._input.LA(1);
                if (!(((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (MASMParser.ADC - 139)) | (1 << (MASMParser.ADD - 139)) | (1 << (MASMParser.SUB - 139)) | (1 << (MASMParser.CBB - 139)) | (1 << (MASMParser.XOR - 139)) | (1 << (MASMParser.OR - 139)))) !== 0))) {
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
    MASMParser.prototype.operato = function () {
        var _localctx = new OperatoContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, MASMParser.RULE_operato);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                _la = this._input.LA(1);
                if (!(((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (MASMParser.JNBE - 145)) | (1 << (MASMParser.JNZ - 145)) | (1 << (MASMParser.JPO - 145)) | (1 << (MASMParser.JZ - 145)) | (1 << (MASMParser.JS - 145)) | (1 << (MASMParser.LOOPNZ - 145)) | (1 << (MASMParser.JGE - 145)) | (1 << (MASMParser.JB - 145)) | (1 << (MASMParser.JNB - 145)) | (1 << (MASMParser.JO - 145)) | (1 << (MASMParser.JP - 145)) | (1 << (MASMParser.JNO - 145)) | (1 << (MASMParser.JNL - 145)) | (1 << (MASMParser.JNAE - 145)) | (1 << (MASMParser.LOOPZ - 145)) | (1 << (MASMParser.JMP - 145)) | (1 << (MASMParser.JNP - 145)) | (1 << (MASMParser.LOOP - 145)) | (1 << (MASMParser.JL - 145)) | (1 << (MASMParser.JCXZ - 145)) | (1 << (MASMParser.JAE - 145)) | (1 << (MASMParser.JNGE - 145)) | (1 << (MASMParser.JA - 145)) | (1 << (MASMParser.LOOPNE - 145)) | (1 << (MASMParser.LOOPE - 145)) | (1 << (MASMParser.JG - 145)) | (1 << (MASMParser.JNLE - 145)) | (1 << (MASMParser.JE - 145)) | (1 << (MASMParser.JNC - 145)) | (1 << (MASMParser.JC - 145)) | (1 << (MASMParser.JNA - 145)) | (1 << (MASMParser.JBE - 145)))) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (MASMParser.JLE - 177)) | (1 << (MASMParser.JPE - 177)) | (1 << (MASMParser.JNS - 177)) | (1 << (MASMParser.JECXZ - 177)) | (1 << (MASMParser.JNG - 177)))) !== 0))) {
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
    MASMParser.prototype.operator = function () {
        var _localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, MASMParser.RULE_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                _la = this._input.LA(1);
                if (!(((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & ((1 << (MASMParser.MOVZX - 182)) | (1 << (MASMParser.BSF - 182)) | (1 << (MASMParser.BSR - 182)))) !== 0))) {
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
    MASMParser.prototype.l = function () {
        var _localctx = new LContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, MASMParser.RULE_l);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                _la = this._input.LA(1);
                if (!(((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & ((1 << (MASMParser.LES - 185)) | (1 << (MASMParser.LEA - 185)) | (1 << (MASMParser.LDS - 185)) | (1 << (MASMParser.INS - 185)) | (1 << (MASMParser.OUTS - 185)))) !== 0))) {
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
    MASMParser.prototype.x = function () {
        var _localctx = new XContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, MASMParser.RULE_x);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                _la = this._input.LA(1);
                if (!(_la === MASMParser.XADD || _la === MASMParser.CMPXCHG)) {
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
    MASMParser.prototype.s = function () {
        var _localctx = new SContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, MASMParser.RULE_s);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                _la = this._input.LA(1);
                if (!(((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (MASMParser.SHL - 192)) | (1 << (MASMParser.SHR - 192)) | (1 << (MASMParser.ROR - 192)) | (1 << (MASMParser.ROL - 192)) | (1 << (MASMParser.RCL - 192)) | (1 << (MASMParser.SAL - 192)) | (1 << (MASMParser.RCR - 192)) | (1 << (MASMParser.SAR - 192)))) !== 0))) {
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
    MASMParser.prototype.sh = function () {
        var _localctx = new ShContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, MASMParser.RULE_sh);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                _la = this._input.LA(1);
                if (!(_la === MASMParser.SHRD || _la === MASMParser.SHLD)) {
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
    MASMParser.prototype.b = function () {
        var _localctx = new BContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, MASMParser.RULE_b);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                _la = this._input.LA(1);
                if (!(((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & ((1 << (MASMParser.BTR - 202)) | (1 << (MASMParser.BT - 202)) | (1 << (MASMParser.BTC - 202)))) !== 0))) {
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
    MASMParser.prototype.call = function () {
        var _localctx = new CallContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, MASMParser.RULE_call);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this.match(MASMParser.CALL);
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
    MASMParser.prototype.interruption = function () {
        var _localctx = new InterruptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, MASMParser.RULE_interruption);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                _la = this._input.LA(1);
                if (!(((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (MASMParser.INT - 206)) | (1 << (MASMParser.RETN - 206)) | (1 << (MASMParser.RET - 206)) | (1 << (MASMParser.RETF - 206)))) !== 0))) {
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
    MASMParser.prototype.in = function () {
        var _localctx = new InContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, MASMParser.RULE_in);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this.match(MASMParser.IN);
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
    MASMParser.prototype.out = function () {
        var _localctx = new OutContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, MASMParser.RULE_out);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.match(MASMParser.OUT);
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
    MASMParser.prototype.re = function () {
        var _localctx = new ReContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, MASMParser.RULE_re);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                _la = this._input.LA(1);
                if (!(((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & ((1 << (MASMParser.REP - 212)) | (1 << (MASMParser.REPE - 212)) | (1 << (MASMParser.REPZ - 212)) | (1 << (MASMParser.REPNE - 212)) | (1 << (MASMParser.REPNZ - 212)))) !== 0))) {
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
    MASMParser.prototype.directives = function () {
        var _localctx = new DirectivesContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, MASMParser.RULE_directives);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                _la = this._input.LA(1);
                if (!(((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & ((1 << (MASMParser.ALPHA - 217)) | (1 << (MASMParser.CONST - 217)) | (1 << (MASMParser.CREF - 217)) | (1 << (MASMParser.XCREF - 217)) | (1 << (MASMParser.DATA - 217)) | (1 << (MASMParser.DATA2 - 217)) | (1 << (MASMParser.DOSSEG - 217)) | (1 << (MASMParser.ERR - 217)) | (1 << (MASMParser.ERR1 - 217)) | (1 << (MASMParser.ERR2 - 217)) | (1 << (MASMParser.ERRE - 217)) | (1 << (MASMParser.ERRNZ - 217)) | (1 << (MASMParser.ERRDEF - 217)) | (1 << (MASMParser.ERRNDEF - 217)) | (1 << (MASMParser.ERRB - 217)) | (1 << (MASMParser.ERRNB - 217)) | (1 << (MASMParser.ERRIDN - 217)) | (1 << (MASMParser.ERRDIF - 217)) | (1 << (MASMParser.EVEN - 217)) | (1 << (MASMParser.LIST - 217)) | (1 << (MASMParser.WIDTH - 217)) | (1 << (MASMParser.MASK - 217)) | (1 << (MASMParser.SEQ - 217)) | (1 << (MASMParser.XLIST - 217)) | (1 << (MASMParser.EXIT - 217)) | (1 << (MASMParser.MODEL - 217)))) !== 0))) {
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
    MASMParser.prototype.ty = function () {
        var _localctx = new TyContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, MASMParser.RULE_ty);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                _la = this._input.LA(1);
                if (!(((((_la - 243)) & ~0x1F) === 0 && ((1 << (_la - 243)) & ((1 << (MASMParser.BYTE - 243)) | (1 << (MASMParser.SBYTE - 243)) | (1 << (MASMParser.DB - 243)) | (1 << (MASMParser.WORD - 243)) | (1 << (MASMParser.SWORD - 243)) | (1 << (MASMParser.DW - 243)) | (1 << (MASMParser.DWORD - 243)) | (1 << (MASMParser.SDWORD - 243)) | (1 << (MASMParser.DD - 243)) | (1 << (MASMParser.FWORD - 243)) | (1 << (MASMParser.DF - 243)) | (1 << (MASMParser.QWORD - 243)) | (1 << (MASMParser.DQ - 243)) | (1 << (MASMParser.TBYTE - 243)) | (1 << (MASMParser.DT - 243)) | (1 << (MASMParser.REAL4 - 243)) | (1 << (MASMParser.REAL8 - 243)) | (1 << (MASMParser.REAL - 243)) | (1 << (MASMParser.FAR - 243)) | (1 << (MASMParser.NEAR - 243)) | (1 << (MASMParser.PROC - 243)))) !== 0))) {
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
    MASMParser.prototype.question = function () {
        var _localctx = new QuestionContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, MASMParser.RULE_question);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 370;
                this.match(MASMParser.QUESTION);
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
    MASMParser.prototype.time = function () {
        var _localctx = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, MASMParser.RULE_time);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                this.match(MASMParser.TIMES);
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
    Object.defineProperty(MASMParser, "_ATN", {
        get: function () {
            if (!MASMParser.__ATN) {
                MASMParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(MASMParser._serializedATN));
            }
            return MASMParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    MASMParser.T__0 = 1;
    MASMParser.T__1 = 2;
    MASMParser.T__2 = 3;
    MASMParser.T__3 = 4;
    MASMParser.T__4 = 5;
    MASMParser.T__5 = 6;
    MASMParser.T__6 = 7;
    MASMParser.T__7 = 8;
    MASMParser.T__8 = 9;
    MASMParser.Identifier = 10;
    MASMParser.DS = 11;
    MASMParser.ES = 12;
    MASMParser.CS = 13;
    MASMParser.SS = 14;
    MASMParser.GS = 15;
    MASMParser.FS = 16;
    MASMParser.AH = 17;
    MASMParser.AL = 18;
    MASMParser.AX = 19;
    MASMParser.BH = 20;
    MASMParser.BL = 21;
    MASMParser.BX = 22;
    MASMParser.CH = 23;
    MASMParser.CL = 24;
    MASMParser.CX = 25;
    MASMParser.DH = 26;
    MASMParser.DL = 27;
    MASMParser.DX = 28;
    MASMParser.SI = 29;
    MASMParser.DI = 30;
    MASMParser.SP = 31;
    MASMParser.BP = 32;
    MASMParser.EAX = 33;
    MASMParser.EBX = 34;
    MASMParser.ECX = 35;
    MASMParser.EDX = 36;
    MASMParser.ESI = 37;
    MASMParser.EDI = 38;
    MASMParser.ESP = 39;
    MASMParser.EBP = 40;
    MASMParser.MOV = 41;
    MASMParser.CMP = 42;
    MASMParser.TEST = 43;
    MASMParser.PUSH = 44;
    MASMParser.POP = 45;
    MASMParser.IDIV = 46;
    MASMParser.INC = 47;
    MASMParser.DEC = 48;
    MASMParser.NEG = 49;
    MASMParser.MUL = 50;
    MASMParser.DIV = 51;
    MASMParser.IMUL = 52;
    MASMParser.NOT = 53;
    MASMParser.SETPO = 54;
    MASMParser.SETAE = 55;
    MASMParser.SETNLE = 56;
    MASMParser.SETC = 57;
    MASMParser.SETNO = 58;
    MASMParser.SETNB = 59;
    MASMParser.SETP = 60;
    MASMParser.SETNGE = 61;
    MASMParser.SETL = 62;
    MASMParser.SETGE = 63;
    MASMParser.SETPE = 64;
    MASMParser.SETNL = 65;
    MASMParser.SETNZ = 66;
    MASMParser.SETNE = 67;
    MASMParser.SETNC = 68;
    MASMParser.SETBE = 69;
    MASMParser.SETNP = 70;
    MASMParser.SETNS = 71;
    MASMParser.SETO = 72;
    MASMParser.SETNA = 73;
    MASMParser.SETNAE = 74;
    MASMParser.SETZ = 75;
    MASMParser.SETLE = 76;
    MASMParser.SETNBE = 77;
    MASMParser.SETS = 78;
    MASMParser.SETE = 79;
    MASMParser.SETB = 80;
    MASMParser.SETA = 81;
    MASMParser.SETG = 82;
    MASMParser.SETNG = 83;
    MASMParser.XCHG = 84;
    MASMParser.POPAD = 85;
    MASMParser.AAA = 86;
    MASMParser.POPA = 87;
    MASMParser.POPFD = 88;
    MASMParser.CWD = 89;
    MASMParser.LAHF = 90;
    MASMParser.PUSHAD = 91;
    MASMParser.PUSHF = 92;
    MASMParser.AAS = 93;
    MASMParser.BSWAP = 94;
    MASMParser.PUSHFD = 95;
    MASMParser.CBW = 96;
    MASMParser.CWDE = 97;
    MASMParser.XLAT = 98;
    MASMParser.AAM = 99;
    MASMParser.AAD = 100;
    MASMParser.CDQ = 101;
    MASMParser.DAA = 102;
    MASMParser.SAHF = 103;
    MASMParser.DAS = 104;
    MASMParser.INTO = 105;
    MASMParser.IRET = 106;
    MASMParser.CLC = 107;
    MASMParser.STC = 108;
    MASMParser.CMC = 109;
    MASMParser.CLD = 110;
    MASMParser.STD = 111;
    MASMParser.CLI = 112;
    MASMParser.STI = 113;
    MASMParser.MOVSB = 114;
    MASMParser.MOVSW = 115;
    MASMParser.MOVSD = 116;
    MASMParser.LODS = 117;
    MASMParser.LODSB = 118;
    MASMParser.LODSW = 119;
    MASMParser.LODSD = 120;
    MASMParser.STOS = 121;
    MASMParser.STOSB = 122;
    MASMParser.STOSW = 123;
    MASMParser.SOTSD = 124;
    MASMParser.SCAS = 125;
    MASMParser.SCASB = 126;
    MASMParser.SCASW = 127;
    MASMParser.SCASD = 128;
    MASMParser.CMPS = 129;
    MASMParser.CMPSB = 130;
    MASMParser.CMPSW = 131;
    MASMParser.CMPSD = 132;
    MASMParser.INSB = 133;
    MASMParser.INSW = 134;
    MASMParser.INSD = 135;
    MASMParser.OUTSB = 136;
    MASMParser.OUTSW = 137;
    MASMParser.OUTSD = 138;
    MASMParser.ADC = 139;
    MASMParser.ADD = 140;
    MASMParser.SUB = 141;
    MASMParser.CBB = 142;
    MASMParser.XOR = 143;
    MASMParser.OR = 144;
    MASMParser.JNBE = 145;
    MASMParser.JNZ = 146;
    MASMParser.JPO = 147;
    MASMParser.JZ = 148;
    MASMParser.JS = 149;
    MASMParser.LOOPNZ = 150;
    MASMParser.JGE = 151;
    MASMParser.JB = 152;
    MASMParser.JNB = 153;
    MASMParser.JO = 154;
    MASMParser.JP = 155;
    MASMParser.JNO = 156;
    MASMParser.JNL = 157;
    MASMParser.JNAE = 158;
    MASMParser.LOOPZ = 159;
    MASMParser.JMP = 160;
    MASMParser.JNP = 161;
    MASMParser.LOOP = 162;
    MASMParser.JL = 163;
    MASMParser.JCXZ = 164;
    MASMParser.JAE = 165;
    MASMParser.JNGE = 166;
    MASMParser.JA = 167;
    MASMParser.LOOPNE = 168;
    MASMParser.LOOPE = 169;
    MASMParser.JG = 170;
    MASMParser.JNLE = 171;
    MASMParser.JE = 172;
    MASMParser.JNC = 173;
    MASMParser.JC = 174;
    MASMParser.JNA = 175;
    MASMParser.JBE = 176;
    MASMParser.JLE = 177;
    MASMParser.JPE = 178;
    MASMParser.JNS = 179;
    MASMParser.JECXZ = 180;
    MASMParser.JNG = 181;
    MASMParser.MOVZX = 182;
    MASMParser.BSF = 183;
    MASMParser.BSR = 184;
    MASMParser.LES = 185;
    MASMParser.LEA = 186;
    MASMParser.LDS = 187;
    MASMParser.INS = 188;
    MASMParser.OUTS = 189;
    MASMParser.XADD = 190;
    MASMParser.CMPXCHG = 191;
    MASMParser.SHL = 192;
    MASMParser.SHR = 193;
    MASMParser.ROR = 194;
    MASMParser.ROL = 195;
    MASMParser.RCL = 196;
    MASMParser.SAL = 197;
    MASMParser.RCR = 198;
    MASMParser.SAR = 199;
    MASMParser.SHRD = 200;
    MASMParser.SHLD = 201;
    MASMParser.BTR = 202;
    MASMParser.BT = 203;
    MASMParser.BTC = 204;
    MASMParser.CALL = 205;
    MASMParser.INT = 206;
    MASMParser.RETN = 207;
    MASMParser.RET = 208;
    MASMParser.RETF = 209;
    MASMParser.IN = 210;
    MASMParser.OUT = 211;
    MASMParser.REP = 212;
    MASMParser.REPE = 213;
    MASMParser.REPZ = 214;
    MASMParser.REPNE = 215;
    MASMParser.REPNZ = 216;
    MASMParser.ALPHA = 217;
    MASMParser.CONST = 218;
    MASMParser.CREF = 219;
    MASMParser.XCREF = 220;
    MASMParser.DATA = 221;
    MASMParser.DATA2 = 222;
    MASMParser.DOSSEG = 223;
    MASMParser.ERR = 224;
    MASMParser.ERR1 = 225;
    MASMParser.ERR2 = 226;
    MASMParser.ERRE = 227;
    MASMParser.ERRNZ = 228;
    MASMParser.ERRDEF = 229;
    MASMParser.ERRNDEF = 230;
    MASMParser.ERRB = 231;
    MASMParser.ERRNB = 232;
    MASMParser.ERRIDN = 233;
    MASMParser.ERRDIF = 234;
    MASMParser.EVEN = 235;
    MASMParser.LIST = 236;
    MASMParser.WIDTH = 237;
    MASMParser.MASK = 238;
    MASMParser.SEQ = 239;
    MASMParser.XLIST = 240;
    MASMParser.EXIT = 241;
    MASMParser.MODEL = 242;
    MASMParser.BYTE = 243;
    MASMParser.SBYTE = 244;
    MASMParser.DB = 245;
    MASMParser.WORD = 246;
    MASMParser.SWORD = 247;
    MASMParser.DW = 248;
    MASMParser.DWORD = 249;
    MASMParser.SDWORD = 250;
    MASMParser.DD = 251;
    MASMParser.FWORD = 252;
    MASMParser.DF = 253;
    MASMParser.QWORD = 254;
    MASMParser.DQ = 255;
    MASMParser.TBYTE = 256;
    MASMParser.DT = 257;
    MASMParser.REAL4 = 258;
    MASMParser.REAL8 = 259;
    MASMParser.REAL = 260;
    MASMParser.FAR = 261;
    MASMParser.NEAR = 262;
    MASMParser.PROC = 263;
    MASMParser.QUESTION = 264;
    MASMParser.TIMES = 265;
    MASMParser.Hexnum = 266;
    MASMParser.Integer = 267;
    MASMParser.Octalnum = 268;
    MASMParser.FloatingPointLiteral = 269;
    MASMParser.String = 270;
    MASMParser.Etiqueta = 271;
    MASMParser.Separator = 272;
    MASMParser.WS = 273;
    MASMParser.LINE_COMMENT = 274;
    MASMParser.RULE_compilationUnit = 0;
    MASMParser.RULE_segments = 1;
    MASMParser.RULE_proc = 2;
    MASMParser.RULE_code = 3;
    MASMParser.RULE_binary_exp1 = 4;
    MASMParser.RULE_unuary_exp1 = 5;
    MASMParser.RULE_unuary_exp2 = 6;
    MASMParser.RULE_binary_exp2 = 7;
    MASMParser.RULE_notarguments = 8;
    MASMParser.RULE_binary_exp3 = 9;
    MASMParser.RULE_unuary_exp3 = 10;
    MASMParser.RULE_binary_exp4 = 11;
    MASMParser.RULE_binary_exp5 = 12;
    MASMParser.RULE_binary_exp6 = 13;
    MASMParser.RULE_binary_exp7 = 14;
    MASMParser.RULE_binary_exp8 = 15;
    MASMParser.RULE_binary_exp9 = 16;
    MASMParser.RULE_unuary_exp4 = 17;
    MASMParser.RULE_unuary_exp5 = 18;
    MASMParser.RULE_binary_exp10 = 19;
    MASMParser.RULE_binary_exp11 = 20;
    MASMParser.RULE_binary_exp12 = 21;
    MASMParser.RULE_directive_exp1 = 22;
    MASMParser.RULE_variabledeclaration = 23;
    MASMParser.RULE_memory = 24;
    MASMParser.RULE_segmentos = 25;
    MASMParser.RULE_register = 26;
    MASMParser.RULE_o = 27;
    MASMParser.RULE_op = 28;
    MASMParser.RULE_ope = 29;
    MASMParser.RULE_oper = 30;
    MASMParser.RULE_opera = 31;
    MASMParser.RULE_operat = 32;
    MASMParser.RULE_operato = 33;
    MASMParser.RULE_operator = 34;
    MASMParser.RULE_l = 35;
    MASMParser.RULE_x = 36;
    MASMParser.RULE_s = 37;
    MASMParser.RULE_sh = 38;
    MASMParser.RULE_b = 39;
    MASMParser.RULE_call = 40;
    MASMParser.RULE_interruption = 41;
    MASMParser.RULE_in = 42;
    MASMParser.RULE_out = 43;
    MASMParser.RULE_re = 44;
    MASMParser.RULE_directives = 45;
    MASMParser.RULE_ty = 46;
    MASMParser.RULE_question = 47;
    MASMParser.RULE_time = 48;
    // tslint:disable:no-trailing-whitespace
    MASMParser.ruleNames = [
        "compilationUnit", "segments", "proc", "code", "binary_exp1", "unuary_exp1",
        "unuary_exp2", "binary_exp2", "notarguments", "binary_exp3", "unuary_exp3",
        "binary_exp4", "binary_exp5", "binary_exp6", "binary_exp7", "binary_exp8",
        "binary_exp9", "unuary_exp4", "unuary_exp5", "binary_exp10", "binary_exp11",
        "binary_exp12", "directive_exp1", "variabledeclaration", "memory", "segmentos",
        "register", "o", "op", "ope", "oper", "opera", "operat", "operato", "operator",
        "l", "x", "s", "sh", "b", "call", "interruption", "in", "out", "re", "directives",
        "ty", "question", "time",
    ];
    MASMParser._LITERAL_NAMES = [
        undefined, "'end'", "'segments'", "'para'", "'public'", "'ends'", "'endp'",
        "'['", "'+'", "']'", undefined, "'ds'", "'es'", "'cs'", "'ss'", "'gs'",
        "'fs'", "'ah'", "'al'", "'ax'", "'bh'", "'bl'", "'bx'", "'ch'", "'cl'",
        "'cx'", "'dh'", "'dl'", "'dx'", "'si'", "'di'", "'sp'", "'bp'", "'eax'",
        "'ebx'", "'ecx'", "'edx'", "'esi'", "'edi'", "'esp'", "'ebp'", "'mov'",
        "'cmp'", "'test'", "'push'", "'pop'", "'idiv'", "'inc'", "'dec'", "'neg'",
        "'mul'", "'div'", "'imul'", "'not'", "'setpo'", "'setae'", "'setnle'",
        "'setc'", "'setno'", "'setnb'", "'setp'", "'setnge'", "'setl'", "'setge'",
        "'setpe'", "'setnl'", "'setnz'", "'setne'", "'setnc'", "'setbe'", "'setnp'",
        "'setns'", "'seto'", "'setna'", "'setnae'", "'setz'", "'setle'", "'setnbe'",
        "'sets'", "'sete'", "'setb'", "'seta'", "'setg'", "'setng'", "'xchg'",
        "'popad'", "'aaa'", "'popa'", "'popfd'", "'cwd'", "'lahf'", "'pushad'",
        "'pushf'", "'aas'", "'bswap'", "'pushfd'", "'cbw'", "'cwde'", "'xlat'",
        "'aam'", "'aad'", "'cdq'", "'daa'", "'sahf'", "'das'", "'into'", "'iret'",
        "'clc'", "'stc'", "'cmc'", "'cld'", "'std'", "'cli'", "'sti'", "'movsb'",
        "'movsw'", "'movsd'", "'lods'", "'lodsb'", "'lodsw'", "'lodsd'", "'stos'",
        "'stosb'", "'stosw'", "'sotsd'", "'scas'", "'scasb'", "'scasw'", "'scasd'",
        "'cmps'", "'cmpsb'", "'cmpsw'", "'cmpsd'", "'insb'", "'insw'", "'insd'",
        "'outsb'", "'outsw'", "'outsd'", "'adc'", "'add'", "'sub'", "'cbb'", "'xor'",
        "'or'", "'jnbe'", "'jnz'", "'jpo'", "'jz'", "'js'", "'loopnz'", "'jge'",
        "'jb'", "'jnb'", "'jo'", "'jp'", "'jno'", "'jnl'", "'jnae'", "'loopz'",
        "'jmp'", "'jnp'", "'loop'", "'jl'", "'jcxz'", "'jae'", "'jnge'", "'ja'",
        "'loopne'", "'loope'", "'jg'", "'jnle'", "'je'", "'jnc'", "'jc'", "'jna'",
        "'jbe'", "'jle'", "'jpe'", "'jns'", "'jecxz'", "'jng'", "'movzx'", "'bsf'",
        "'bsr'", "'les'", "'lea'", "'lds'", "'ins'", "'outs'", "'xadd'", "'cmpxchg'",
        "'shl'", "'shr'", "'ror'", "'rol'", "'rcl'", "'sal'", "'rcr'", "'sar'",
        "'shrd'", "'shld'", "'btr'", "'bt'", "'btc'", "'call'", "'int'", "'retn'",
        "'ret'", "'retf'", "'in'", "'out'", "'rep'", "'repe'", "'repz'", "'repne'",
        "'repnz'", "'.alpha'", "'.const'", "'.cref'", "'.xcref'", "'data'", "'data?'",
        "'dosseg'", "'.err'", "'.err1'", "'.err2'", "'.erre'", "'.errnz'", "'.errdef'",
        "'.errndef'", "'.errb'", "'.errnb'", "'.erridn[i]'", "'.errdif[i]'", "'even'",
        "'.list'", "'width'", "'mask'", "'.seq'", "'.xlist'", "'.exit'", "'.model'",
        "'byte'", "'sbyte'", "'db'", "'word'", "'sword'", "'dw'", "'dword'", "'sdword'",
        "'dd'", "'fword'", "'df'", "'qword'", "'dq'", "'tbyte'", "'dt'", "'real4'",
        "'real8'", "'real'", "'far'", "'near'", "'proc'", "'?'", "'times'", undefined,
        undefined, undefined, undefined, undefined, undefined, "','",
    ];
    MASMParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "Identifier", "DS", "ES", "CS", "SS",
        "GS", "FS", "AH", "AL", "AX", "BH", "BL", "BX", "CH", "CL", "CX", "DH",
        "DL", "DX", "SI", "DI", "SP", "BP", "EAX", "EBX", "ECX", "EDX", "ESI",
        "EDI", "ESP", "EBP", "MOV", "CMP", "TEST", "PUSH", "POP", "IDIV", "INC",
        "DEC", "NEG", "MUL", "DIV", "IMUL", "NOT", "SETPO", "SETAE", "SETNLE",
        "SETC", "SETNO", "SETNB", "SETP", "SETNGE", "SETL", "SETGE", "SETPE",
        "SETNL", "SETNZ", "SETNE", "SETNC", "SETBE", "SETNP", "SETNS", "SETO",
        "SETNA", "SETNAE", "SETZ", "SETLE", "SETNBE", "SETS", "SETE", "SETB",
        "SETA", "SETG", "SETNG", "XCHG", "POPAD", "AAA", "POPA", "POPFD", "CWD",
        "LAHF", "PUSHAD", "PUSHF", "AAS", "BSWAP", "PUSHFD", "CBW", "CWDE", "XLAT",
        "AAM", "AAD", "CDQ", "DAA", "SAHF", "DAS", "INTO", "IRET", "CLC", "STC",
        "CMC", "CLD", "STD", "CLI", "STI", "MOVSB", "MOVSW", "MOVSD", "LODS",
        "LODSB", "LODSW", "LODSD", "STOS", "STOSB", "STOSW", "SOTSD", "SCAS",
        "SCASB", "SCASW", "SCASD", "CMPS", "CMPSB", "CMPSW", "CMPSD", "INSB",
        "INSW", "INSD", "OUTSB", "OUTSW", "OUTSD", "ADC", "ADD", "SUB", "CBB",
        "XOR", "OR", "JNBE", "JNZ", "JPO", "JZ", "JS", "LOOPNZ", "JGE", "JB",
        "JNB", "JO", "JP", "JNO", "JNL", "JNAE", "LOOPZ", "JMP", "JNP", "LOOP",
        "JL", "JCXZ", "JAE", "JNGE", "JA", "LOOPNE", "LOOPE", "JG", "JNLE", "JE",
        "JNC", "JC", "JNA", "JBE", "JLE", "JPE", "JNS", "JECXZ", "JNG", "MOVZX",
        "BSF", "BSR", "LES", "LEA", "LDS", "INS", "OUTS", "XADD", "CMPXCHG", "SHL",
        "SHR", "ROR", "ROL", "RCL", "SAL", "RCR", "SAR", "SHRD", "SHLD", "BTR",
        "BT", "BTC", "CALL", "INT", "RETN", "RET", "RETF", "IN", "OUT", "REP",
        "REPE", "REPZ", "REPNE", "REPNZ", "ALPHA", "CONST", "CREF", "XCREF", "DATA",
        "DATA2", "DOSSEG", "ERR", "ERR1", "ERR2", "ERRE", "ERRNZ", "ERRDEF", "ERRNDEF",
        "ERRB", "ERRNB", "ERRIDN", "ERRDIF", "EVEN", "LIST", "WIDTH", "MASK",
        "SEQ", "XLIST", "EXIT", "MODEL", "BYTE", "SBYTE", "DB", "WORD", "SWORD",
        "DW", "DWORD", "SDWORD", "DD", "FWORD", "DF", "QWORD", "DQ", "TBYTE",
        "DT", "REAL4", "REAL8", "REAL", "FAR", "NEAR", "PROC", "QUESTION", "TIMES",
        "Hexnum", "Integer", "Octalnum", "FloatingPointLiteral", "String", "Etiqueta",
        "Separator", "WS", "LINE_COMMENT",
    ];
    MASMParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(MASMParser._LITERAL_NAMES, MASMParser._SYMBOLIC_NAMES, []);
    MASMParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0114\u0179\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x03" +
        "\x02\x07\x02g\n\x02\f\x02\x0E\x02j\v\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03u\n\x03\f\x03\x0E\x03" +
        "x\v\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04\x80\n" +
        "\x04\f\x04\x0E\x04\x83\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x05\x05\x9D\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x05\x06\xA5\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xAC" +
        "\n\x06\x05\x06\xAE\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xB4\n" +
        "\x07\x03\b\x03\b\x03\b\x05\b\xB9\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
        "\t\xC0\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xC7\n\t\x03\n\x03\n\x03" +
        "\v\x03\v\x03\v\x05\v\xCE\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\xD4\n\v\x03" +
        "\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xDE\n\r\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE8\n\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xF0\n\x10\x03" +
        "\x10\x03\x10\x03\x10\x05\x10\xF5\n\x10\x03\x11\x03\x11\x03\x11\x05\x11" +
        "\xFA\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0101\n\x11" +
        "\x03\x12\x03\x12\x03\x12\x05\x12\u0106\n\x12\x03\x12\x03\x12\x03\x12\x05" +
        "\x12\u010B\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0111\n\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u011B" +
        "\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0120\n\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u012C" +
        "\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0133\n\x19\x03" +
        "\x1A\x03\x1A\x03\x1A\x05\x1A\u0138\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
        "\x05\x1A\u013E\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0143\n\x1A\x05\x1A" +
        "\u0145\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
        "\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
        "#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03" +
        "*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x03" +
        "1\x031\x032\x032\x032\x02\x02\x023\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
        "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
        "8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
        "T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02\x02\x14\x03\x02\u010C\u010E" +
        "\x03\x02\r\x12\x03\x02\x13*\x03\x02+-\x03\x02/U\x03\x02W\x8C\x03\x02\x8D" +
        "\x92\x03\x02\x93\xB7\x03\x02\xB8\xBA\x03\x02\xBB\xBF\x03\x02\xC0\xC1\x03" +
        "\x02\xC2\xC9\x03\x02\xCA\xCB\x03\x02\xCC\xCE\x03\x02\xD0\xD3\x03\x02\xD6" +
        "\xDA\x03\x02\xDB\xF4\x03\x02\xF5\u0109\x02\u0180\x02h\x03\x02\x02\x02" +
        "\x04n\x03\x02\x02\x02\x06|\x03\x02\x02\x02\b\x9C\x03\x02\x02\x02\n\xAD" +
        "\x03\x02\x02\x02\f\xAF\x03\x02\x02\x02\x0E\xB5\x03\x02\x02\x02\x10\xC6" +
        "\x03\x02\x02\x02\x12\xC8\x03\x02\x02\x02\x14\xCA\x03\x02\x02\x02\x16\xD5" +
        "\x03\x02\x02\x02\x18\xD8\x03\x02\x02\x02\x1A\xDF\x03\x02\x02\x02\x1C\xE4" +
        "\x03\x02\x02\x02\x1E\xEC\x03\x02\x02\x02 \xF6\x03\x02\x02\x02\"\u0102" +
        "\x03\x02\x02\x02$\u010C\x03\x02\x02\x02&\u0112\x03\x02\x02\x02(\u0115" +
        "\x03\x02\x02\x02*\u011C\x03\x02\x02\x02,\u0124\x03\x02\x02\x02.\u012B" +
        "\x03\x02\x02\x020\u012D\x03\x02\x02\x022\u0134\x03\x02\x02\x024\u0148" +
        "\x03\x02\x02\x026\u014A\x03\x02\x02\x028\u014C\x03\x02\x02\x02:\u014E" +
        "\x03\x02\x02\x02<\u0150\x03\x02\x02\x02>\u0152\x03\x02\x02\x02@\u0154" +
        "\x03\x02\x02\x02B\u0156\x03\x02\x02\x02D\u0158\x03\x02\x02\x02F\u015A" +
        "\x03\x02\x02\x02H\u015C\x03\x02\x02\x02J\u015E\x03\x02\x02\x02L\u0160" +
        "\x03\x02\x02\x02N\u0162\x03\x02\x02\x02P\u0164\x03\x02\x02\x02R\u0166" +
        "\x03\x02\x02\x02T\u0168\x03\x02\x02\x02V\u016A\x03\x02\x02\x02X\u016C" +
        "\x03\x02\x02\x02Z\u016E\x03\x02\x02\x02\\\u0170\x03\x02\x02\x02^\u0172" +
        "\x03\x02\x02\x02`\u0174\x03\x02\x02\x02b\u0176\x03\x02\x02\x02dg\x05\x04" +
        "\x03\x02eg\x05.\x18\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02gj\x03\x02" +
        "\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x03\x02\x02\x02jh\x03\x02" +
        "\x02\x02kl\x07\x03\x02\x02lm\x07\f\x02\x02m\x03\x03\x02\x02\x02no\x07" +
        "\f\x02\x02op\x07\x04\x02\x02pq\x07\x05\x02\x02qv\x07\x06\x02\x02ru\x05" +
        "\b\x05\x02su\x05\x06\x04\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02ux\x03" +
        "\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02\x02\x02xv\x03" +
        "\x02\x02\x02yz\x07\f\x02\x02z{\x07\x07\x02\x02{\x05\x03\x02\x02\x02|}" +
        "\x07\f\x02\x02}\x81\x07\u0109\x02\x02~\x80\x05\b\x05\x02\x7F~\x03\x02" +
        "\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02" +
        "\x02\x02\x82\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\xD2" +
        "\x02\x02\x85\x86\x07\f\x02\x02\x86\x87\x07\b\x02\x02\x87\x07\x03\x02\x02" +
        "\x02\x88\x9D\x05\n\x06\x02\x89\x9D\x05(\x15\x02\x8A\x9D\x05*\x16\x02\x8B" +
        "\x9D\x05,\x17\x02\x8C\x9D\x05\x10\t\x02\x8D\x9D\x05\x14\v\x02\x8E\x9D" +
        "\x05\x18\r\x02\x8F\x9D\x05\x1A\x0E\x02\x90\x9D\x05\x1C\x0F\x02\x91\x9D" +
        "\x05\x1E\x10\x02\x92\x9D\x05 \x11\x02\x93\x9D\x05\"\x12\x02\x94\x9D\x05" +
        "\f\x07\x02\x95\x9D\x05\x0E\b\x02\x96\x9D\x05\x16\f\x02\x97\x9D\x05$\x13" +
        "\x02\x98\x9D\x05&\x14\x02\x99\x9D\x05\x12\n\x02\x9A\x9D\x050\x19\x02\x9B" +
        "\x9D\x05.\x18\x02\x9C\x88\x03\x02\x02\x02\x9C\x89\x03\x02\x02\x02\x9C" +
        "\x8A\x03\x02\x02\x02\x9C\x8B\x03\x02\x02\x02\x9C\x8C\x03\x02\x02\x02\x9C" +
        "\x8D\x03\x02\x02\x02\x9C\x8E\x03\x02\x02\x02\x9C\x8F\x03\x02\x02\x02\x9C" +
        "\x90\x03\x02\x02\x02\x9C\x91\x03\x02\x02\x02\x9C\x92\x03\x02\x02\x02\x9C" +
        "\x93\x03\x02\x02\x02\x9C\x94\x03\x02\x02\x02\x9C\x95\x03\x02\x02\x02\x9C" +
        "\x96\x03\x02\x02\x02\x9C\x97\x03\x02\x02\x02\x9C\x98\x03\x02\x02\x02\x9C" +
        "\x99\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D" +
        "\t\x03\x02\x02\x02\x9E\x9F\x058\x1D\x02\x9F\xA0\x056\x1C\x02\xA0\xA4\x07" +
        "\u0112\x02\x02\xA1\xA5\x056\x1C\x02\xA2\xA5\x07\u010D\x02\x02\xA3\xA5" +
        "\x052\x1A\x02\xA4\xA1\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA3" +
        "\x03\x02\x02\x02\xA5\xAE\x03\x02\x02\x02\xA6\xA7\x058\x1D\x02\xA7\xA8" +
        "\x052\x1A\x02\xA8\xAB\x07\u0112\x02\x02\xA9\xAC\x056\x1C\x02\xAA\xAC\x07" +
        "\u010D\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAE" +
        "\x03\x02\x02\x02\xAD\x9E\x03\x02\x02\x02\xAD\xA6\x03\x02\x02\x02\xAE\v" +
        "\x03\x02\x02\x02\xAF\xB3\x05:\x1E\x02\xB0\xB4\x07\u010D\x02\x02\xB1\xB4" +
        "\x056\x1C\x02\xB2\xB4\x052\x1A\x02\xB3\xB0\x03\x02\x02\x02\xB3\xB1\x03" +
        "\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\r\x03\x02\x02\x02\xB5\xB8\x05" +
        "<\x1F\x02\xB6\xB9\x056\x1C\x02\xB7\xB9\x052\x1A\x02\xB8\xB6\x03\x02\x02" +
        "\x02\xB8\xB7\x03\x02\x02\x02\xB9\x0F\x03\x02\x02\x02\xBA\xBB\x05> \x02" +
        "\xBB\xBC\x056\x1C\x02\xBC\xBF\x07\u0112\x02\x02\xBD\xC0\x056\x1C\x02\xBE" +
        "\xC0\x052\x1A\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0" +
        "\xC7\x03\x02\x02\x02\xC1\xC2\x05> \x02\xC2\xC3\x052\x1A\x02\xC3\xC4\x07" +
        "\u0112\x02\x02\xC4\xC5\x056\x1C\x02\xC5\xC7\x03\x02\x02\x02\xC6\xBA\x03" +
        "\x02\x02\x02\xC6\xC1\x03\x02\x02\x02\xC7\x11\x03\x02\x02\x02\xC8\xC9\x05" +
        "@!\x02\xC9\x13\x03\x02\x02\x02\xCA\xCD\x05B\"\x02\xCB\xCE\x056\x1C\x02" +
        "\xCC\xCE\x052\x1A\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02" +
        "\xCE\xCF\x03\x02\x02\x02\xCF\xD3\x07\u0112\x02\x02\xD0\xD4\x056\x1C\x02" +
        "\xD1\xD4\x07\u010D\x02\x02\xD2\xD4\x052\x1A\x02\xD3\xD0\x03\x02\x02\x02" +
        "\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x15\x03\x02\x02\x02" +
        "\xD5\xD6\x05D#\x02\xD6\xD7\x07\f\x02\x02\xD7\x17\x03\x02\x02\x02\xD8\xD9" +
        "\x05F$\x02\xD9\xDA\x056\x1C\x02\xDA\xDD\x07\u0112\x02\x02\xDB\xDE\x05" +
        "6\x1C\x02\xDC\xDE\x052\x1A\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02" +
        "\x02\x02\xDE\x19\x03\x02\x02\x02\xDF\xE0\x05H%\x02\xE0\xE1\x056\x1C\x02" +
        "\xE1\xE2\x07\u0112\x02\x02\xE2\xE3\x052\x1A\x02\xE3\x1B\x03\x02\x02\x02" +
        "\xE4\xE7\x05J&\x02\xE5\xE8\x056\x1C\x02\xE6\xE8\x052\x1A\x02\xE7\xE5\x03" +
        "\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07" +
        "\u0112\x02\x02\xEA\xEB\x056\x1C\x02\xEB\x1D\x03\x02\x02\x02\xEC\xEF\x05" +
        "L\'\x02\xED\xF0\x056\x1C\x02\xEE\xF0\x052\x1A\x02\xEF\xED\x03\x02\x02" +
        "\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x07\u0112" +
        "\x02\x02\xF2\xF5\x07\u010D\x02\x02\xF3\xF5\x056\x1C\x02\xF4\xF2\x03\x02" +
        "\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\x1F\x03\x02\x02\x02\xF6\xF9\x05N" +
        "(\x02\xF7\xFA\x056\x1C\x02\xF8\xFA\x052\x1A\x02\xF9\xF7\x03\x02\x02\x02" +
        "\xF9\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x07\u0112\x02" +
        "\x02\xFC\xFD\x056\x1C\x02\xFD\u0100\x07\u0112\x02\x02\xFE\u0101\x056\x1C" +
        "\x02\xFF\u0101\x07\u010D\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\xFF\x03" +
        "\x02\x02\x02\u0101!\x03\x02\x02\x02\u0102\u0105\x05P)\x02\u0103\u0106" +
        "\x056\x1C\x02\u0104\u0106\x052\x1A\x02\u0105\u0103\x03\x02\x02\x02\u0105" +
        "\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010A\x07\u0112" +
        "\x02\x02\u0108\u010B\x056\x1C\x02\u0109\u010B\x052\x1A\x02\u010A\u0108" +
        "\x03\x02\x02\x02\u010A\u0109\x03\x02\x02\x02\u010B#\x03\x02\x02\x02\u010C" +
        "\u0110\x05R*\x02\u010D\u0111\x056\x1C\x02\u010E\u0111\x052\x1A\x02\u010F" +
        "\u0111\x07\u010D\x02\x02\u0110\u010D\x03\x02\x02\x02\u0110\u010E\x03\x02" +
        "\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111%\x03\x02\x02\x02\u0112\u0113" +
        "\x05T+\x02\u0113\u0114\x07\u010D\x02\x02\u0114\'\x03\x02\x02\x02\u0115" +
        "\u0116\x05V,\x02\u0116\u0117\x056\x1C\x02\u0117\u011A\x07\u0112\x02\x02" +
        "\u0118\u011B\x056\x1C\x02\u0119\u011B\x07\u010D\x02\x02\u011A\u0118\x03" +
        "\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B)\x03\x02\x02\x02\u011C" +
        "\u011F\x05X-\x02\u011D\u0120\x056\x1C\x02\u011E\u0120\x07\u010D\x02\x02" +
        "\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0121\x03" +
        "\x02\x02\x02\u0121\u0122\x07\u0112\x02\x02\u0122\u0123\x056\x1C\x02\u0123" +
        "+\x03\x02\x02\x02\u0124\u0125\x05Z.\x02\u0125\u0126\x05@!\x02\u0126-\x03" +
        "\x02\x02\x02\u0127\u0128\x05\\/\x02\u0128\u0129\x07\f\x02\x02\u0129\u012C" +
        "\x03\x02\x02\x02\u012A\u012C\x05\\/\x02\u012B\u0127\x03\x02\x02\x02\u012B" +
        "\u012A\x03\x02\x02\x02\u012C/\x03\x02\x02\x02\u012D\u012E\x07\f\x02\x02" +
        "\u012E\u0132\x05^0\x02\u012F\u0133\x05`1\x02\u0130\u0133\x07\u0110\x02" +
        "\x02\u0131\u0133\x07\u010D\x02\x02\u0132\u012F\x03\x02\x02\x02\u0132\u0130" +
        "\x03\x02\x02\x02\u0132\u0131\x03\x02\x02\x02\u01331\x03\x02\x02\x02\u0134" +
        "\u0137\x07\t\x02\x02\u0135\u0138\x056\x1C\x02\u0136\u0138\x07\f\x02\x02" +
        "\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138\u0144\x03" +
        "\x02\x02\x02\u0139\u0142\x07\n\x02\x02\u013A\u013D\x056\x1C\x02\u013B" +
        "\u013C\x07\n\x02\x02\u013C\u013E\t\x02\x02\x02\u013D\u013B\x03\x02\x02" +
        "\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0143\x03\x02\x02\x02\u013F\u0143" +
        "\x07\u010D\x02\x02\u0140\u0143\x07\u010C\x02\x02\u0141\u0143\x07\u010E" +
        "\x02\x02\u0142\u013A\x03\x02\x02\x02\u0142\u013F\x03\x02\x02\x02\u0142" +
        "\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0145\x03\x02" +
        "\x02\x02\u0144\u0139\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
        "\u0146\x03\x02\x02\x02\u0146\u0147\x07\v\x02\x02\u01473\x03\x02\x02\x02" +
        "\u0148\u0149\t\x03\x02\x02\u01495\x03\x02\x02\x02\u014A\u014B\t\x04\x02" +
        "\x02\u014B7\x03\x02\x02\x02\u014C\u014D\t\x05\x02\x02\u014D9\x03\x02\x02" +
        "\x02\u014E\u014F\x07.\x02\x02\u014F;\x03\x02\x02\x02\u0150\u0151\t\x06" +
        "\x02\x02\u0151=\x03\x02\x02\x02\u0152\u0153\x07V\x02\x02\u0153?\x03\x02" +
        "\x02\x02\u0154\u0155\t\x07\x02\x02\u0155A\x03\x02\x02\x02\u0156\u0157" +
        "\t\b\x02\x02\u0157C\x03\x02\x02\x02\u0158\u0159\t\t\x02\x02\u0159E\x03" +
        "\x02\x02\x02\u015A\u015B\t\n\x02\x02\u015BG\x03\x02\x02\x02\u015C\u015D" +
        "\t\v\x02\x02\u015DI\x03\x02\x02\x02\u015E\u015F\t\f\x02\x02\u015FK\x03" +
        "\x02\x02\x02\u0160\u0161\t\r\x02\x02\u0161M\x03\x02\x02\x02\u0162\u0163" +
        "\t\x0E\x02\x02\u0163O\x03\x02\x02\x02\u0164\u0165\t\x0F\x02\x02\u0165" +
        "Q\x03\x02\x02\x02\u0166\u0167\x07\xCF\x02\x02\u0167S\x03\x02\x02\x02\u0168" +
        "\u0169\t\x10\x02\x02\u0169U\x03\x02\x02\x02\u016A\u016B\x07\xD4\x02\x02" +
        "\u016BW\x03\x02\x02\x02\u016C\u016D\x07\xD5\x02\x02\u016DY\x03\x02\x02" +
        "\x02\u016E\u016F\t\x11\x02\x02\u016F[\x03\x02\x02\x02\u0170\u0171\t\x12" +
        "\x02\x02\u0171]\x03\x02\x02\x02\u0172\u0173\t\x13\x02\x02\u0173_\x03\x02" +
        "\x02\x02\u0174\u0175\x07\u010A\x02\x02\u0175a\x03\x02\x02\x02\u0176\u0177" +
        "\x07\u010B\x02\x02\u0177c\x03\x02\x02\x02\"fhtv\x81\x9C\xA4\xAB\xAD\xB3" +
        "\xB8\xBF\xC6\xCD\xD3\xDD\xE7\xEF\xF4\xF9\u0100\u0105\u010A\u0110\u011A" +
        "\u011F\u012B\u0132\u0137\u013D\u0142\u0144";
    return MASMParser;
}(Parser_1.Parser));
exports.MASMParser = MASMParser;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.Identifier = function () { return this.getToken(MASMParser.Identifier, 0); };
    CompilationUnitContext.prototype.segments = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SegmentsContext);
        }
        else {
            return this.getRuleContext(i, SegmentsContext);
        }
    };
    CompilationUnitContext.prototype.directive_exp1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Directive_exp1Context);
        }
        else {
            return this.getRuleContext(i, Directive_exp1Context);
        }
    };
    Object.defineProperty(CompilationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_compilationUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompilationUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompilationUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilationUnitContext = CompilationUnitContext;
var SegmentsContext = /** @class */ (function (_super) {
    __extends(SegmentsContext, _super);
    function SegmentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SegmentsContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(MASMParser.Identifier);
        }
        else {
            return this.getToken(MASMParser.Identifier, i);
        }
    };
    SegmentsContext.prototype.code = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CodeContext);
        }
        else {
            return this.getRuleContext(i, CodeContext);
        }
    };
    SegmentsContext.prototype.proc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ProcContext);
        }
        else {
            return this.getRuleContext(i, ProcContext);
        }
    };
    Object.defineProperty(SegmentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_segments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SegmentsContext.prototype.enterRule = function (listener) {
        if (listener.enterSegments) {
            listener.enterSegments(this);
        }
    };
    // @Override
    SegmentsContext.prototype.exitRule = function (listener) {
        if (listener.exitSegments) {
            listener.exitSegments(this);
        }
    };
    // @Override
    SegmentsContext.prototype.accept = function (visitor) {
        if (visitor.visitSegments) {
            return visitor.visitSegments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SegmentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SegmentsContext = SegmentsContext;
var ProcContext = /** @class */ (function (_super) {
    __extends(ProcContext, _super);
    function ProcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(MASMParser.Identifier);
        }
        else {
            return this.getToken(MASMParser.Identifier, i);
        }
    };
    ProcContext.prototype.PROC = function () { return this.getToken(MASMParser.PROC, 0); };
    ProcContext.prototype.RET = function () { return this.getToken(MASMParser.RET, 0); };
    ProcContext.prototype.code = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CodeContext);
        }
        else {
            return this.getRuleContext(i, CodeContext);
        }
    };
    Object.defineProperty(ProcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_proc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcContext.prototype.enterRule = function (listener) {
        if (listener.enterProc) {
            listener.enterProc(this);
        }
    };
    // @Override
    ProcContext.prototype.exitRule = function (listener) {
        if (listener.exitProc) {
            listener.exitProc(this);
        }
    };
    // @Override
    ProcContext.prototype.accept = function (visitor) {
        if (visitor.visitProc) {
            return visitor.visitProc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcContext = ProcContext;
var CodeContext = /** @class */ (function (_super) {
    __extends(CodeContext, _super);
    function CodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CodeContext.prototype.binary_exp1 = function () {
        return this.tryGetRuleContext(0, Binary_exp1Context);
    };
    CodeContext.prototype.binary_exp10 = function () {
        return this.tryGetRuleContext(0, Binary_exp10Context);
    };
    CodeContext.prototype.binary_exp11 = function () {
        return this.tryGetRuleContext(0, Binary_exp11Context);
    };
    CodeContext.prototype.binary_exp12 = function () {
        return this.tryGetRuleContext(0, Binary_exp12Context);
    };
    CodeContext.prototype.binary_exp2 = function () {
        return this.tryGetRuleContext(0, Binary_exp2Context);
    };
    CodeContext.prototype.binary_exp3 = function () {
        return this.tryGetRuleContext(0, Binary_exp3Context);
    };
    CodeContext.prototype.binary_exp4 = function () {
        return this.tryGetRuleContext(0, Binary_exp4Context);
    };
    CodeContext.prototype.binary_exp5 = function () {
        return this.tryGetRuleContext(0, Binary_exp5Context);
    };
    CodeContext.prototype.binary_exp6 = function () {
        return this.tryGetRuleContext(0, Binary_exp6Context);
    };
    CodeContext.prototype.binary_exp7 = function () {
        return this.tryGetRuleContext(0, Binary_exp7Context);
    };
    CodeContext.prototype.binary_exp8 = function () {
        return this.tryGetRuleContext(0, Binary_exp8Context);
    };
    CodeContext.prototype.binary_exp9 = function () {
        return this.tryGetRuleContext(0, Binary_exp9Context);
    };
    CodeContext.prototype.unuary_exp1 = function () {
        return this.tryGetRuleContext(0, Unuary_exp1Context);
    };
    CodeContext.prototype.unuary_exp2 = function () {
        return this.tryGetRuleContext(0, Unuary_exp2Context);
    };
    CodeContext.prototype.unuary_exp3 = function () {
        return this.tryGetRuleContext(0, Unuary_exp3Context);
    };
    CodeContext.prototype.unuary_exp4 = function () {
        return this.tryGetRuleContext(0, Unuary_exp4Context);
    };
    CodeContext.prototype.unuary_exp5 = function () {
        return this.tryGetRuleContext(0, Unuary_exp5Context);
    };
    CodeContext.prototype.notarguments = function () {
        return this.tryGetRuleContext(0, NotargumentsContext);
    };
    CodeContext.prototype.variabledeclaration = function () {
        return this.tryGetRuleContext(0, VariabledeclarationContext);
    };
    CodeContext.prototype.directive_exp1 = function () {
        return this.tryGetRuleContext(0, Directive_exp1Context);
    };
    Object.defineProperty(CodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_code; },
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
var Binary_exp1Context = /** @class */ (function (_super) {
    __extends(Binary_exp1Context, _super);
    function Binary_exp1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp1Context.prototype.o = function () {
        return this.getRuleContext(0, OContext);
    };
    Binary_exp1Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp1Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp1Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Binary_exp1Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Object.defineProperty(Binary_exp1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp1Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp1) {
            listener.enterBinary_exp1(this);
        }
    };
    // @Override
    Binary_exp1Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp1) {
            listener.exitBinary_exp1(this);
        }
    };
    // @Override
    Binary_exp1Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp1) {
            return visitor.visitBinary_exp1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp1Context = Binary_exp1Context;
var Unuary_exp1Context = /** @class */ (function (_super) {
    __extends(Unuary_exp1Context, _super);
    function Unuary_exp1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unuary_exp1Context.prototype.op = function () {
        return this.getRuleContext(0, OpContext);
    };
    Unuary_exp1Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Unuary_exp1Context.prototype.register = function () {
        return this.tryGetRuleContext(0, RegisterContext);
    };
    Unuary_exp1Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Object.defineProperty(Unuary_exp1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_unuary_exp1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unuary_exp1Context.prototype.enterRule = function (listener) {
        if (listener.enterUnuary_exp1) {
            listener.enterUnuary_exp1(this);
        }
    };
    // @Override
    Unuary_exp1Context.prototype.exitRule = function (listener) {
        if (listener.exitUnuary_exp1) {
            listener.exitUnuary_exp1(this);
        }
    };
    // @Override
    Unuary_exp1Context.prototype.accept = function (visitor) {
        if (visitor.visitUnuary_exp1) {
            return visitor.visitUnuary_exp1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unuary_exp1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unuary_exp1Context = Unuary_exp1Context;
var Unuary_exp2Context = /** @class */ (function (_super) {
    __extends(Unuary_exp2Context, _super);
    function Unuary_exp2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unuary_exp2Context.prototype.ope = function () {
        return this.getRuleContext(0, OpeContext);
    };
    Unuary_exp2Context.prototype.register = function () {
        return this.tryGetRuleContext(0, RegisterContext);
    };
    Unuary_exp2Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Object.defineProperty(Unuary_exp2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_unuary_exp2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unuary_exp2Context.prototype.enterRule = function (listener) {
        if (listener.enterUnuary_exp2) {
            listener.enterUnuary_exp2(this);
        }
    };
    // @Override
    Unuary_exp2Context.prototype.exitRule = function (listener) {
        if (listener.exitUnuary_exp2) {
            listener.exitUnuary_exp2(this);
        }
    };
    // @Override
    Unuary_exp2Context.prototype.accept = function (visitor) {
        if (visitor.visitUnuary_exp2) {
            return visitor.visitUnuary_exp2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unuary_exp2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unuary_exp2Context = Unuary_exp2Context;
var Binary_exp2Context = /** @class */ (function (_super) {
    __extends(Binary_exp2Context, _super);
    function Binary_exp2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp2Context.prototype.oper = function () {
        return this.getRuleContext(0, OperContext);
    };
    Binary_exp2Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp2Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp2Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Object.defineProperty(Binary_exp2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp2Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp2) {
            listener.enterBinary_exp2(this);
        }
    };
    // @Override
    Binary_exp2Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp2) {
            listener.exitBinary_exp2(this);
        }
    };
    // @Override
    Binary_exp2Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp2) {
            return visitor.visitBinary_exp2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp2Context = Binary_exp2Context;
var NotargumentsContext = /** @class */ (function (_super) {
    __extends(NotargumentsContext, _super);
    function NotargumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NotargumentsContext.prototype.opera = function () {
        return this.getRuleContext(0, OperaContext);
    };
    Object.defineProperty(NotargumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_notarguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NotargumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterNotarguments) {
            listener.enterNotarguments(this);
        }
    };
    // @Override
    NotargumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitNotarguments) {
            listener.exitNotarguments(this);
        }
    };
    // @Override
    NotargumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitNotarguments) {
            return visitor.visitNotarguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotargumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NotargumentsContext = NotargumentsContext;
var Binary_exp3Context = /** @class */ (function (_super) {
    __extends(Binary_exp3Context, _super);
    function Binary_exp3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp3Context.prototype.operat = function () {
        return this.getRuleContext(0, OperatContext);
    };
    Binary_exp3Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp3Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp3Context.prototype.memory = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MemoryContext);
        }
        else {
            return this.getRuleContext(i, MemoryContext);
        }
    };
    Binary_exp3Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Object.defineProperty(Binary_exp3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp3Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp3) {
            listener.enterBinary_exp3(this);
        }
    };
    // @Override
    Binary_exp3Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp3) {
            listener.exitBinary_exp3(this);
        }
    };
    // @Override
    Binary_exp3Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp3) {
            return visitor.visitBinary_exp3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp3Context = Binary_exp3Context;
var Unuary_exp3Context = /** @class */ (function (_super) {
    __extends(Unuary_exp3Context, _super);
    function Unuary_exp3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unuary_exp3Context.prototype.operato = function () {
        return this.getRuleContext(0, OperatoContext);
    };
    Unuary_exp3Context.prototype.Identifier = function () { return this.getToken(MASMParser.Identifier, 0); };
    Object.defineProperty(Unuary_exp3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_unuary_exp3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unuary_exp3Context.prototype.enterRule = function (listener) {
        if (listener.enterUnuary_exp3) {
            listener.enterUnuary_exp3(this);
        }
    };
    // @Override
    Unuary_exp3Context.prototype.exitRule = function (listener) {
        if (listener.exitUnuary_exp3) {
            listener.exitUnuary_exp3(this);
        }
    };
    // @Override
    Unuary_exp3Context.prototype.accept = function (visitor) {
        if (visitor.visitUnuary_exp3) {
            return visitor.visitUnuary_exp3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unuary_exp3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unuary_exp3Context = Unuary_exp3Context;
var Binary_exp4Context = /** @class */ (function (_super) {
    __extends(Binary_exp4Context, _super);
    function Binary_exp4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp4Context.prototype.operator = function () {
        return this.getRuleContext(0, OperatorContext);
    };
    Binary_exp4Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp4Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp4Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Object.defineProperty(Binary_exp4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp4Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp4) {
            listener.enterBinary_exp4(this);
        }
    };
    // @Override
    Binary_exp4Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp4) {
            listener.exitBinary_exp4(this);
        }
    };
    // @Override
    Binary_exp4Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp4) {
            return visitor.visitBinary_exp4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp4Context = Binary_exp4Context;
var Binary_exp5Context = /** @class */ (function (_super) {
    __extends(Binary_exp5Context, _super);
    function Binary_exp5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp5Context.prototype.l = function () {
        return this.getRuleContext(0, LContext);
    };
    Binary_exp5Context.prototype.register = function () {
        return this.getRuleContext(0, RegisterContext);
    };
    Binary_exp5Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp5Context.prototype.memory = function () {
        return this.getRuleContext(0, MemoryContext);
    };
    Object.defineProperty(Binary_exp5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp5Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp5) {
            listener.enterBinary_exp5(this);
        }
    };
    // @Override
    Binary_exp5Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp5) {
            listener.exitBinary_exp5(this);
        }
    };
    // @Override
    Binary_exp5Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp5) {
            return visitor.visitBinary_exp5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp5Context = Binary_exp5Context;
var Binary_exp6Context = /** @class */ (function (_super) {
    __extends(Binary_exp6Context, _super);
    function Binary_exp6Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp6Context.prototype.x = function () {
        return this.getRuleContext(0, XContext);
    };
    Binary_exp6Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp6Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp6Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Object.defineProperty(Binary_exp6Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp6; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp6Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp6) {
            listener.enterBinary_exp6(this);
        }
    };
    // @Override
    Binary_exp6Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp6) {
            listener.exitBinary_exp6(this);
        }
    };
    // @Override
    Binary_exp6Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp6) {
            return visitor.visitBinary_exp6(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp6Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp6Context = Binary_exp6Context;
var Binary_exp7Context = /** @class */ (function (_super) {
    __extends(Binary_exp7Context, _super);
    function Binary_exp7Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp7Context.prototype.s = function () {
        return this.getRuleContext(0, SContext);
    };
    Binary_exp7Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp7Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp7Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Binary_exp7Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Object.defineProperty(Binary_exp7Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp7; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp7Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp7) {
            listener.enterBinary_exp7(this);
        }
    };
    // @Override
    Binary_exp7Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp7) {
            listener.exitBinary_exp7(this);
        }
    };
    // @Override
    Binary_exp7Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp7) {
            return visitor.visitBinary_exp7(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp7Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp7Context = Binary_exp7Context;
var Binary_exp8Context = /** @class */ (function (_super) {
    __extends(Binary_exp8Context, _super);
    function Binary_exp8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp8Context.prototype.sh = function () {
        return this.getRuleContext(0, ShContext);
    };
    Binary_exp8Context.prototype.Separator = function (i) {
        if (i === undefined) {
            return this.getTokens(MASMParser.Separator);
        }
        else {
            return this.getToken(MASMParser.Separator, i);
        }
    };
    Binary_exp8Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp8Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Binary_exp8Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Object.defineProperty(Binary_exp8Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp8; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp8Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp8) {
            listener.enterBinary_exp8(this);
        }
    };
    // @Override
    Binary_exp8Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp8) {
            listener.exitBinary_exp8(this);
        }
    };
    // @Override
    Binary_exp8Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp8) {
            return visitor.visitBinary_exp8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp8Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp8Context = Binary_exp8Context;
var Binary_exp9Context = /** @class */ (function (_super) {
    __extends(Binary_exp9Context, _super);
    function Binary_exp9Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp9Context.prototype.b = function () {
        return this.getRuleContext(0, BContext);
    };
    Binary_exp9Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp9Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp9Context.prototype.memory = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MemoryContext);
        }
        else {
            return this.getRuleContext(i, MemoryContext);
        }
    };
    Object.defineProperty(Binary_exp9Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp9; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp9Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp9) {
            listener.enterBinary_exp9(this);
        }
    };
    // @Override
    Binary_exp9Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp9) {
            listener.exitBinary_exp9(this);
        }
    };
    // @Override
    Binary_exp9Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp9) {
            return visitor.visitBinary_exp9(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp9Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp9Context = Binary_exp9Context;
var Unuary_exp4Context = /** @class */ (function (_super) {
    __extends(Unuary_exp4Context, _super);
    function Unuary_exp4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unuary_exp4Context.prototype.call = function () {
        return this.getRuleContext(0, CallContext);
    };
    Unuary_exp4Context.prototype.register = function () {
        return this.tryGetRuleContext(0, RegisterContext);
    };
    Unuary_exp4Context.prototype.memory = function () {
        return this.tryGetRuleContext(0, MemoryContext);
    };
    Unuary_exp4Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Object.defineProperty(Unuary_exp4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_unuary_exp4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unuary_exp4Context.prototype.enterRule = function (listener) {
        if (listener.enterUnuary_exp4) {
            listener.enterUnuary_exp4(this);
        }
    };
    // @Override
    Unuary_exp4Context.prototype.exitRule = function (listener) {
        if (listener.exitUnuary_exp4) {
            listener.exitUnuary_exp4(this);
        }
    };
    // @Override
    Unuary_exp4Context.prototype.accept = function (visitor) {
        if (visitor.visitUnuary_exp4) {
            return visitor.visitUnuary_exp4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unuary_exp4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unuary_exp4Context = Unuary_exp4Context;
var Unuary_exp5Context = /** @class */ (function (_super) {
    __extends(Unuary_exp5Context, _super);
    function Unuary_exp5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unuary_exp5Context.prototype.interruption = function () {
        return this.getRuleContext(0, InterruptionContext);
    };
    Unuary_exp5Context.prototype.Integer = function () { return this.getToken(MASMParser.Integer, 0); };
    Object.defineProperty(Unuary_exp5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_unuary_exp5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unuary_exp5Context.prototype.enterRule = function (listener) {
        if (listener.enterUnuary_exp5) {
            listener.enterUnuary_exp5(this);
        }
    };
    // @Override
    Unuary_exp5Context.prototype.exitRule = function (listener) {
        if (listener.exitUnuary_exp5) {
            listener.exitUnuary_exp5(this);
        }
    };
    // @Override
    Unuary_exp5Context.prototype.accept = function (visitor) {
        if (visitor.visitUnuary_exp5) {
            return visitor.visitUnuary_exp5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unuary_exp5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unuary_exp5Context = Unuary_exp5Context;
var Binary_exp10Context = /** @class */ (function (_super) {
    __extends(Binary_exp10Context, _super);
    function Binary_exp10Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp10Context.prototype.in = function () {
        return this.getRuleContext(0, InContext);
    };
    Binary_exp10Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp10Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp10Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Object.defineProperty(Binary_exp10Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp10; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp10Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp10) {
            listener.enterBinary_exp10(this);
        }
    };
    // @Override
    Binary_exp10Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp10) {
            listener.exitBinary_exp10(this);
        }
    };
    // @Override
    Binary_exp10Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp10) {
            return visitor.visitBinary_exp10(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp10Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp10Context = Binary_exp10Context;
var Binary_exp11Context = /** @class */ (function (_super) {
    __extends(Binary_exp11Context, _super);
    function Binary_exp11Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp11Context.prototype.out = function () {
        return this.getRuleContext(0, OutContext);
    };
    Binary_exp11Context.prototype.Separator = function () { return this.getToken(MASMParser.Separator, 0); };
    Binary_exp11Context.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Binary_exp11Context.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Object.defineProperty(Binary_exp11Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp11; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp11Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp11) {
            listener.enterBinary_exp11(this);
        }
    };
    // @Override
    Binary_exp11Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp11) {
            listener.exitBinary_exp11(this);
        }
    };
    // @Override
    Binary_exp11Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp11) {
            return visitor.visitBinary_exp11(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp11Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp11Context = Binary_exp11Context;
var Binary_exp12Context = /** @class */ (function (_super) {
    __extends(Binary_exp12Context, _super);
    function Binary_exp12Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Binary_exp12Context.prototype.re = function () {
        return this.getRuleContext(0, ReContext);
    };
    Binary_exp12Context.prototype.opera = function () {
        return this.getRuleContext(0, OperaContext);
    };
    Object.defineProperty(Binary_exp12Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_binary_exp12; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Binary_exp12Context.prototype.enterRule = function (listener) {
        if (listener.enterBinary_exp12) {
            listener.enterBinary_exp12(this);
        }
    };
    // @Override
    Binary_exp12Context.prototype.exitRule = function (listener) {
        if (listener.exitBinary_exp12) {
            listener.exitBinary_exp12(this);
        }
    };
    // @Override
    Binary_exp12Context.prototype.accept = function (visitor) {
        if (visitor.visitBinary_exp12) {
            return visitor.visitBinary_exp12(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_exp12Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Binary_exp12Context = Binary_exp12Context;
var Directive_exp1Context = /** @class */ (function (_super) {
    __extends(Directive_exp1Context, _super);
    function Directive_exp1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Directive_exp1Context.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Directive_exp1Context.prototype.Identifier = function () { return this.tryGetToken(MASMParser.Identifier, 0); };
    Object.defineProperty(Directive_exp1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_directive_exp1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Directive_exp1Context.prototype.enterRule = function (listener) {
        if (listener.enterDirective_exp1) {
            listener.enterDirective_exp1(this);
        }
    };
    // @Override
    Directive_exp1Context.prototype.exitRule = function (listener) {
        if (listener.exitDirective_exp1) {
            listener.exitDirective_exp1(this);
        }
    };
    // @Override
    Directive_exp1Context.prototype.accept = function (visitor) {
        if (visitor.visitDirective_exp1) {
            return visitor.visitDirective_exp1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Directive_exp1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Directive_exp1Context = Directive_exp1Context;
var VariabledeclarationContext = /** @class */ (function (_super) {
    __extends(VariabledeclarationContext, _super);
    function VariabledeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariabledeclarationContext.prototype.Identifier = function () { return this.getToken(MASMParser.Identifier, 0); };
    VariabledeclarationContext.prototype.ty = function () {
        return this.getRuleContext(0, TyContext);
    };
    VariabledeclarationContext.prototype.question = function () {
        return this.tryGetRuleContext(0, QuestionContext);
    };
    VariabledeclarationContext.prototype.String = function () { return this.tryGetToken(MASMParser.String, 0); };
    VariabledeclarationContext.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    Object.defineProperty(VariabledeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_variabledeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariabledeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariabledeclaration) {
            listener.enterVariabledeclaration(this);
        }
    };
    // @Override
    VariabledeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariabledeclaration) {
            listener.exitVariabledeclaration(this);
        }
    };
    // @Override
    VariabledeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariabledeclaration) {
            return visitor.visitVariabledeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariabledeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariabledeclarationContext = VariabledeclarationContext;
var MemoryContext = /** @class */ (function (_super) {
    __extends(MemoryContext, _super);
    function MemoryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemoryContext.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    MemoryContext.prototype.Identifier = function () { return this.tryGetToken(MASMParser.Identifier, 0); };
    MemoryContext.prototype.Integer = function () { return this.tryGetToken(MASMParser.Integer, 0); };
    MemoryContext.prototype.Hexnum = function () { return this.tryGetToken(MASMParser.Hexnum, 0); };
    MemoryContext.prototype.Octalnum = function () { return this.tryGetToken(MASMParser.Octalnum, 0); };
    Object.defineProperty(MemoryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_memory; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MemoryContext.prototype.enterRule = function (listener) {
        if (listener.enterMemory) {
            listener.enterMemory(this);
        }
    };
    // @Override
    MemoryContext.prototype.exitRule = function (listener) {
        if (listener.exitMemory) {
            listener.exitMemory(this);
        }
    };
    // @Override
    MemoryContext.prototype.accept = function (visitor) {
        if (visitor.visitMemory) {
            return visitor.visitMemory(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemoryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MemoryContext = MemoryContext;
var SegmentosContext = /** @class */ (function (_super) {
    __extends(SegmentosContext, _super);
    function SegmentosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SegmentosContext.prototype.DS = function () { return this.tryGetToken(MASMParser.DS, 0); };
    SegmentosContext.prototype.ES = function () { return this.tryGetToken(MASMParser.ES, 0); };
    SegmentosContext.prototype.CS = function () { return this.tryGetToken(MASMParser.CS, 0); };
    SegmentosContext.prototype.SS = function () { return this.tryGetToken(MASMParser.SS, 0); };
    SegmentosContext.prototype.GS = function () { return this.tryGetToken(MASMParser.GS, 0); };
    SegmentosContext.prototype.FS = function () { return this.tryGetToken(MASMParser.FS, 0); };
    Object.defineProperty(SegmentosContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_segmentos; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SegmentosContext.prototype.enterRule = function (listener) {
        if (listener.enterSegmentos) {
            listener.enterSegmentos(this);
        }
    };
    // @Override
    SegmentosContext.prototype.exitRule = function (listener) {
        if (listener.exitSegmentos) {
            listener.exitSegmentos(this);
        }
    };
    // @Override
    SegmentosContext.prototype.accept = function (visitor) {
        if (visitor.visitSegmentos) {
            return visitor.visitSegmentos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SegmentosContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SegmentosContext = SegmentosContext;
var RegisterContext = /** @class */ (function (_super) {
    __extends(RegisterContext, _super);
    function RegisterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegisterContext.prototype.AH = function () { return this.tryGetToken(MASMParser.AH, 0); };
    RegisterContext.prototype.AL = function () { return this.tryGetToken(MASMParser.AL, 0); };
    RegisterContext.prototype.AX = function () { return this.tryGetToken(MASMParser.AX, 0); };
    RegisterContext.prototype.BH = function () { return this.tryGetToken(MASMParser.BH, 0); };
    RegisterContext.prototype.BL = function () { return this.tryGetToken(MASMParser.BL, 0); };
    RegisterContext.prototype.BX = function () { return this.tryGetToken(MASMParser.BX, 0); };
    RegisterContext.prototype.CH = function () { return this.tryGetToken(MASMParser.CH, 0); };
    RegisterContext.prototype.CL = function () { return this.tryGetToken(MASMParser.CL, 0); };
    RegisterContext.prototype.CX = function () { return this.tryGetToken(MASMParser.CX, 0); };
    RegisterContext.prototype.DH = function () { return this.tryGetToken(MASMParser.DH, 0); };
    RegisterContext.prototype.DL = function () { return this.tryGetToken(MASMParser.DL, 0); };
    RegisterContext.prototype.DX = function () { return this.tryGetToken(MASMParser.DX, 0); };
    RegisterContext.prototype.SI = function () { return this.tryGetToken(MASMParser.SI, 0); };
    RegisterContext.prototype.DI = function () { return this.tryGetToken(MASMParser.DI, 0); };
    RegisterContext.prototype.SP = function () { return this.tryGetToken(MASMParser.SP, 0); };
    RegisterContext.prototype.BP = function () { return this.tryGetToken(MASMParser.BP, 0); };
    RegisterContext.prototype.EAX = function () { return this.tryGetToken(MASMParser.EAX, 0); };
    RegisterContext.prototype.EBX = function () { return this.tryGetToken(MASMParser.EBX, 0); };
    RegisterContext.prototype.ECX = function () { return this.tryGetToken(MASMParser.ECX, 0); };
    RegisterContext.prototype.EDX = function () { return this.tryGetToken(MASMParser.EDX, 0); };
    RegisterContext.prototype.ESI = function () { return this.tryGetToken(MASMParser.ESI, 0); };
    RegisterContext.prototype.EDI = function () { return this.tryGetToken(MASMParser.EDI, 0); };
    RegisterContext.prototype.ESP = function () { return this.tryGetToken(MASMParser.ESP, 0); };
    RegisterContext.prototype.EBP = function () { return this.tryGetToken(MASMParser.EBP, 0); };
    Object.defineProperty(RegisterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_register; },
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
var OContext = /** @class */ (function (_super) {
    __extends(OContext, _super);
    function OContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OContext.prototype.MOV = function () { return this.tryGetToken(MASMParser.MOV, 0); };
    OContext.prototype.CMP = function () { return this.tryGetToken(MASMParser.CMP, 0); };
    OContext.prototype.TEST = function () { return this.tryGetToken(MASMParser.TEST, 0); };
    Object.defineProperty(OContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_o; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OContext.prototype.enterRule = function (listener) {
        if (listener.enterO) {
            listener.enterO(this);
        }
    };
    // @Override
    OContext.prototype.exitRule = function (listener) {
        if (listener.exitO) {
            listener.exitO(this);
        }
    };
    // @Override
    OContext.prototype.accept = function (visitor) {
        if (visitor.visitO) {
            return visitor.visitO(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OContext = OContext;
var OpContext = /** @class */ (function (_super) {
    __extends(OpContext, _super);
    function OpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpContext.prototype.PUSH = function () { return this.getToken(MASMParser.PUSH, 0); };
    Object.defineProperty(OpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpContext.prototype.enterRule = function (listener) {
        if (listener.enterOp) {
            listener.enterOp(this);
        }
    };
    // @Override
    OpContext.prototype.exitRule = function (listener) {
        if (listener.exitOp) {
            listener.exitOp(this);
        }
    };
    // @Override
    OpContext.prototype.accept = function (visitor) {
        if (visitor.visitOp) {
            return visitor.visitOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpContext = OpContext;
var OpeContext = /** @class */ (function (_super) {
    __extends(OpeContext, _super);
    function OpeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpeContext.prototype.POP = function () { return this.tryGetToken(MASMParser.POP, 0); };
    OpeContext.prototype.IDIV = function () { return this.tryGetToken(MASMParser.IDIV, 0); };
    OpeContext.prototype.INC = function () { return this.tryGetToken(MASMParser.INC, 0); };
    OpeContext.prototype.DEC = function () { return this.tryGetToken(MASMParser.DEC, 0); };
    OpeContext.prototype.NEG = function () { return this.tryGetToken(MASMParser.NEG, 0); };
    OpeContext.prototype.MUL = function () { return this.tryGetToken(MASMParser.MUL, 0); };
    OpeContext.prototype.DIV = function () { return this.tryGetToken(MASMParser.DIV, 0); };
    OpeContext.prototype.IMUL = function () { return this.tryGetToken(MASMParser.IMUL, 0); };
    OpeContext.prototype.NOT = function () { return this.tryGetToken(MASMParser.NOT, 0); };
    OpeContext.prototype.SETPO = function () { return this.tryGetToken(MASMParser.SETPO, 0); };
    OpeContext.prototype.SETAE = function () { return this.tryGetToken(MASMParser.SETAE, 0); };
    OpeContext.prototype.SETNLE = function () { return this.tryGetToken(MASMParser.SETNLE, 0); };
    OpeContext.prototype.SETC = function () { return this.tryGetToken(MASMParser.SETC, 0); };
    OpeContext.prototype.SETNO = function () { return this.tryGetToken(MASMParser.SETNO, 0); };
    OpeContext.prototype.SETNB = function () { return this.tryGetToken(MASMParser.SETNB, 0); };
    OpeContext.prototype.SETP = function () { return this.tryGetToken(MASMParser.SETP, 0); };
    OpeContext.prototype.SETNGE = function () { return this.tryGetToken(MASMParser.SETNGE, 0); };
    OpeContext.prototype.SETL = function () { return this.tryGetToken(MASMParser.SETL, 0); };
    OpeContext.prototype.SETGE = function () { return this.tryGetToken(MASMParser.SETGE, 0); };
    OpeContext.prototype.SETPE = function () { return this.tryGetToken(MASMParser.SETPE, 0); };
    OpeContext.prototype.SETNL = function () { return this.tryGetToken(MASMParser.SETNL, 0); };
    OpeContext.prototype.SETNZ = function () { return this.tryGetToken(MASMParser.SETNZ, 0); };
    OpeContext.prototype.SETNE = function () { return this.tryGetToken(MASMParser.SETNE, 0); };
    OpeContext.prototype.SETNC = function () { return this.tryGetToken(MASMParser.SETNC, 0); };
    OpeContext.prototype.SETBE = function () { return this.tryGetToken(MASMParser.SETBE, 0); };
    OpeContext.prototype.SETNP = function () { return this.tryGetToken(MASMParser.SETNP, 0); };
    OpeContext.prototype.SETNS = function () { return this.tryGetToken(MASMParser.SETNS, 0); };
    OpeContext.prototype.SETO = function () { return this.tryGetToken(MASMParser.SETO, 0); };
    OpeContext.prototype.SETNA = function () { return this.tryGetToken(MASMParser.SETNA, 0); };
    OpeContext.prototype.SETNAE = function () { return this.tryGetToken(MASMParser.SETNAE, 0); };
    OpeContext.prototype.SETZ = function () { return this.tryGetToken(MASMParser.SETZ, 0); };
    OpeContext.prototype.SETLE = function () { return this.tryGetToken(MASMParser.SETLE, 0); };
    OpeContext.prototype.SETNBE = function () { return this.tryGetToken(MASMParser.SETNBE, 0); };
    OpeContext.prototype.SETS = function () { return this.tryGetToken(MASMParser.SETS, 0); };
    OpeContext.prototype.SETE = function () { return this.tryGetToken(MASMParser.SETE, 0); };
    OpeContext.prototype.SETB = function () { return this.tryGetToken(MASMParser.SETB, 0); };
    OpeContext.prototype.SETA = function () { return this.tryGetToken(MASMParser.SETA, 0); };
    OpeContext.prototype.SETG = function () { return this.tryGetToken(MASMParser.SETG, 0); };
    OpeContext.prototype.SETNG = function () { return this.tryGetToken(MASMParser.SETNG, 0); };
    Object.defineProperty(OpeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_ope; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpeContext.prototype.enterRule = function (listener) {
        if (listener.enterOpe) {
            listener.enterOpe(this);
        }
    };
    // @Override
    OpeContext.prototype.exitRule = function (listener) {
        if (listener.exitOpe) {
            listener.exitOpe(this);
        }
    };
    // @Override
    OpeContext.prototype.accept = function (visitor) {
        if (visitor.visitOpe) {
            return visitor.visitOpe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpeContext = OpeContext;
var OperContext = /** @class */ (function (_super) {
    __extends(OperContext, _super);
    function OperContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperContext.prototype.XCHG = function () { return this.getToken(MASMParser.XCHG, 0); };
    Object.defineProperty(OperContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_oper; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperContext.prototype.enterRule = function (listener) {
        if (listener.enterOper) {
            listener.enterOper(this);
        }
    };
    // @Override
    OperContext.prototype.exitRule = function (listener) {
        if (listener.exitOper) {
            listener.exitOper(this);
        }
    };
    // @Override
    OperContext.prototype.accept = function (visitor) {
        if (visitor.visitOper) {
            return visitor.visitOper(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperContext = OperContext;
var OperaContext = /** @class */ (function (_super) {
    __extends(OperaContext, _super);
    function OperaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperaContext.prototype.POPAD = function () { return this.tryGetToken(MASMParser.POPAD, 0); };
    OperaContext.prototype.AAA = function () { return this.tryGetToken(MASMParser.AAA, 0); };
    OperaContext.prototype.POPA = function () { return this.tryGetToken(MASMParser.POPA, 0); };
    OperaContext.prototype.POPFD = function () { return this.tryGetToken(MASMParser.POPFD, 0); };
    OperaContext.prototype.CWD = function () { return this.tryGetToken(MASMParser.CWD, 0); };
    OperaContext.prototype.LAHF = function () { return this.tryGetToken(MASMParser.LAHF, 0); };
    OperaContext.prototype.PUSHAD = function () { return this.tryGetToken(MASMParser.PUSHAD, 0); };
    OperaContext.prototype.PUSHF = function () { return this.tryGetToken(MASMParser.PUSHF, 0); };
    OperaContext.prototype.AAS = function () { return this.tryGetToken(MASMParser.AAS, 0); };
    OperaContext.prototype.BSWAP = function () { return this.tryGetToken(MASMParser.BSWAP, 0); };
    OperaContext.prototype.PUSHFD = function () { return this.tryGetToken(MASMParser.PUSHFD, 0); };
    OperaContext.prototype.CBW = function () { return this.tryGetToken(MASMParser.CBW, 0); };
    OperaContext.prototype.CWDE = function () { return this.tryGetToken(MASMParser.CWDE, 0); };
    OperaContext.prototype.XLAT = function () { return this.tryGetToken(MASMParser.XLAT, 0); };
    OperaContext.prototype.AAM = function () { return this.tryGetToken(MASMParser.AAM, 0); };
    OperaContext.prototype.AAD = function () { return this.tryGetToken(MASMParser.AAD, 0); };
    OperaContext.prototype.CDQ = function () { return this.tryGetToken(MASMParser.CDQ, 0); };
    OperaContext.prototype.DAA = function () { return this.tryGetToken(MASMParser.DAA, 0); };
    OperaContext.prototype.SAHF = function () { return this.tryGetToken(MASMParser.SAHF, 0); };
    OperaContext.prototype.DAS = function () { return this.tryGetToken(MASMParser.DAS, 0); };
    OperaContext.prototype.INTO = function () { return this.tryGetToken(MASMParser.INTO, 0); };
    OperaContext.prototype.IRET = function () { return this.tryGetToken(MASMParser.IRET, 0); };
    OperaContext.prototype.CLC = function () { return this.tryGetToken(MASMParser.CLC, 0); };
    OperaContext.prototype.STC = function () { return this.tryGetToken(MASMParser.STC, 0); };
    OperaContext.prototype.CMC = function () { return this.tryGetToken(MASMParser.CMC, 0); };
    OperaContext.prototype.CLD = function () { return this.tryGetToken(MASMParser.CLD, 0); };
    OperaContext.prototype.STD = function () { return this.tryGetToken(MASMParser.STD, 0); };
    OperaContext.prototype.CLI = function () { return this.tryGetToken(MASMParser.CLI, 0); };
    OperaContext.prototype.STI = function () { return this.tryGetToken(MASMParser.STI, 0); };
    OperaContext.prototype.MOVSB = function () { return this.tryGetToken(MASMParser.MOVSB, 0); };
    OperaContext.prototype.MOVSW = function () { return this.tryGetToken(MASMParser.MOVSW, 0); };
    OperaContext.prototype.MOVSD = function () { return this.tryGetToken(MASMParser.MOVSD, 0); };
    OperaContext.prototype.LODS = function () { return this.tryGetToken(MASMParser.LODS, 0); };
    OperaContext.prototype.LODSB = function () { return this.tryGetToken(MASMParser.LODSB, 0); };
    OperaContext.prototype.LODSW = function () { return this.tryGetToken(MASMParser.LODSW, 0); };
    OperaContext.prototype.LODSD = function () { return this.tryGetToken(MASMParser.LODSD, 0); };
    OperaContext.prototype.STOS = function () { return this.tryGetToken(MASMParser.STOS, 0); };
    OperaContext.prototype.STOSB = function () { return this.tryGetToken(MASMParser.STOSB, 0); };
    OperaContext.prototype.STOSW = function () { return this.tryGetToken(MASMParser.STOSW, 0); };
    OperaContext.prototype.SOTSD = function () { return this.tryGetToken(MASMParser.SOTSD, 0); };
    OperaContext.prototype.SCAS = function () { return this.tryGetToken(MASMParser.SCAS, 0); };
    OperaContext.prototype.SCASB = function () { return this.tryGetToken(MASMParser.SCASB, 0); };
    OperaContext.prototype.SCASW = function () { return this.tryGetToken(MASMParser.SCASW, 0); };
    OperaContext.prototype.SCASD = function () { return this.tryGetToken(MASMParser.SCASD, 0); };
    OperaContext.prototype.CMPS = function () { return this.tryGetToken(MASMParser.CMPS, 0); };
    OperaContext.prototype.CMPSB = function () { return this.tryGetToken(MASMParser.CMPSB, 0); };
    OperaContext.prototype.CMPSW = function () { return this.tryGetToken(MASMParser.CMPSW, 0); };
    OperaContext.prototype.CMPSD = function () { return this.tryGetToken(MASMParser.CMPSD, 0); };
    OperaContext.prototype.INSB = function () { return this.tryGetToken(MASMParser.INSB, 0); };
    OperaContext.prototype.INSW = function () { return this.tryGetToken(MASMParser.INSW, 0); };
    OperaContext.prototype.INSD = function () { return this.tryGetToken(MASMParser.INSD, 0); };
    OperaContext.prototype.OUTSB = function () { return this.tryGetToken(MASMParser.OUTSB, 0); };
    OperaContext.prototype.OUTSW = function () { return this.tryGetToken(MASMParser.OUTSW, 0); };
    OperaContext.prototype.OUTSD = function () { return this.tryGetToken(MASMParser.OUTSD, 0); };
    Object.defineProperty(OperaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_opera; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperaContext.prototype.enterRule = function (listener) {
        if (listener.enterOpera) {
            listener.enterOpera(this);
        }
    };
    // @Override
    OperaContext.prototype.exitRule = function (listener) {
        if (listener.exitOpera) {
            listener.exitOpera(this);
        }
    };
    // @Override
    OperaContext.prototype.accept = function (visitor) {
        if (visitor.visitOpera) {
            return visitor.visitOpera(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperaContext = OperaContext;
var OperatContext = /** @class */ (function (_super) {
    __extends(OperatContext, _super);
    function OperatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatContext.prototype.ADC = function () { return this.tryGetToken(MASMParser.ADC, 0); };
    OperatContext.prototype.ADD = function () { return this.tryGetToken(MASMParser.ADD, 0); };
    OperatContext.prototype.SUB = function () { return this.tryGetToken(MASMParser.SUB, 0); };
    OperatContext.prototype.CBB = function () { return this.tryGetToken(MASMParser.CBB, 0); };
    OperatContext.prototype.XOR = function () { return this.tryGetToken(MASMParser.XOR, 0); };
    OperatContext.prototype.OR = function () { return this.tryGetToken(MASMParser.OR, 0); };
    Object.defineProperty(OperatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_operat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatContext.prototype.enterRule = function (listener) {
        if (listener.enterOperat) {
            listener.enterOperat(this);
        }
    };
    // @Override
    OperatContext.prototype.exitRule = function (listener) {
        if (listener.exitOperat) {
            listener.exitOperat(this);
        }
    };
    // @Override
    OperatContext.prototype.accept = function (visitor) {
        if (visitor.visitOperat) {
            return visitor.visitOperat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatContext = OperatContext;
var OperatoContext = /** @class */ (function (_super) {
    __extends(OperatoContext, _super);
    function OperatoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatoContext.prototype.JNBE = function () { return this.tryGetToken(MASMParser.JNBE, 0); };
    OperatoContext.prototype.JNZ = function () { return this.tryGetToken(MASMParser.JNZ, 0); };
    OperatoContext.prototype.JPO = function () { return this.tryGetToken(MASMParser.JPO, 0); };
    OperatoContext.prototype.JZ = function () { return this.tryGetToken(MASMParser.JZ, 0); };
    OperatoContext.prototype.JS = function () { return this.tryGetToken(MASMParser.JS, 0); };
    OperatoContext.prototype.LOOPNZ = function () { return this.tryGetToken(MASMParser.LOOPNZ, 0); };
    OperatoContext.prototype.JGE = function () { return this.tryGetToken(MASMParser.JGE, 0); };
    OperatoContext.prototype.JB = function () { return this.tryGetToken(MASMParser.JB, 0); };
    OperatoContext.prototype.JNB = function () { return this.tryGetToken(MASMParser.JNB, 0); };
    OperatoContext.prototype.JO = function () { return this.tryGetToken(MASMParser.JO, 0); };
    OperatoContext.prototype.JP = function () { return this.tryGetToken(MASMParser.JP, 0); };
    OperatoContext.prototype.JNO = function () { return this.tryGetToken(MASMParser.JNO, 0); };
    OperatoContext.prototype.JNL = function () { return this.tryGetToken(MASMParser.JNL, 0); };
    OperatoContext.prototype.JNAE = function () { return this.tryGetToken(MASMParser.JNAE, 0); };
    OperatoContext.prototype.LOOPZ = function () { return this.tryGetToken(MASMParser.LOOPZ, 0); };
    OperatoContext.prototype.JMP = function () { return this.tryGetToken(MASMParser.JMP, 0); };
    OperatoContext.prototype.JNP = function () { return this.tryGetToken(MASMParser.JNP, 0); };
    OperatoContext.prototype.LOOP = function () { return this.tryGetToken(MASMParser.LOOP, 0); };
    OperatoContext.prototype.JL = function () { return this.tryGetToken(MASMParser.JL, 0); };
    OperatoContext.prototype.JCXZ = function () { return this.tryGetToken(MASMParser.JCXZ, 0); };
    OperatoContext.prototype.JAE = function () { return this.tryGetToken(MASMParser.JAE, 0); };
    OperatoContext.prototype.JNGE = function () { return this.tryGetToken(MASMParser.JNGE, 0); };
    OperatoContext.prototype.JA = function () { return this.tryGetToken(MASMParser.JA, 0); };
    OperatoContext.prototype.LOOPNE = function () { return this.tryGetToken(MASMParser.LOOPNE, 0); };
    OperatoContext.prototype.LOOPE = function () { return this.tryGetToken(MASMParser.LOOPE, 0); };
    OperatoContext.prototype.JG = function () { return this.tryGetToken(MASMParser.JG, 0); };
    OperatoContext.prototype.JNLE = function () { return this.tryGetToken(MASMParser.JNLE, 0); };
    OperatoContext.prototype.JE = function () { return this.tryGetToken(MASMParser.JE, 0); };
    OperatoContext.prototype.JNC = function () { return this.tryGetToken(MASMParser.JNC, 0); };
    OperatoContext.prototype.JC = function () { return this.tryGetToken(MASMParser.JC, 0); };
    OperatoContext.prototype.JNA = function () { return this.tryGetToken(MASMParser.JNA, 0); };
    OperatoContext.prototype.JBE = function () { return this.tryGetToken(MASMParser.JBE, 0); };
    OperatoContext.prototype.JLE = function () { return this.tryGetToken(MASMParser.JLE, 0); };
    OperatoContext.prototype.JPE = function () { return this.tryGetToken(MASMParser.JPE, 0); };
    OperatoContext.prototype.JNS = function () { return this.tryGetToken(MASMParser.JNS, 0); };
    OperatoContext.prototype.JECXZ = function () { return this.tryGetToken(MASMParser.JECXZ, 0); };
    OperatoContext.prototype.JNG = function () { return this.tryGetToken(MASMParser.JNG, 0); };
    Object.defineProperty(OperatoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_operato; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatoContext.prototype.enterRule = function (listener) {
        if (listener.enterOperato) {
            listener.enterOperato(this);
        }
    };
    // @Override
    OperatoContext.prototype.exitRule = function (listener) {
        if (listener.exitOperato) {
            listener.exitOperato(this);
        }
    };
    // @Override
    OperatoContext.prototype.accept = function (visitor) {
        if (visitor.visitOperato) {
            return visitor.visitOperato(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatoContext = OperatoContext;
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorContext.prototype.MOVZX = function () { return this.tryGetToken(MASMParser.MOVZX, 0); };
    OperatorContext.prototype.BSF = function () { return this.tryGetToken(MASMParser.BSF, 0); };
    OperatorContext.prototype.BSR = function () { return this.tryGetToken(MASMParser.BSR, 0); };
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterOperator) {
            listener.enterOperator(this);
        }
    };
    // @Override
    OperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitOperator) {
            listener.exitOperator(this);
        }
    };
    // @Override
    OperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitOperator) {
            return visitor.visitOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorContext = OperatorContext;
var LContext = /** @class */ (function (_super) {
    __extends(LContext, _super);
    function LContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LContext.prototype.LES = function () { return this.tryGetToken(MASMParser.LES, 0); };
    LContext.prototype.LEA = function () { return this.tryGetToken(MASMParser.LEA, 0); };
    LContext.prototype.LDS = function () { return this.tryGetToken(MASMParser.LDS, 0); };
    LContext.prototype.INS = function () { return this.tryGetToken(MASMParser.INS, 0); };
    LContext.prototype.OUTS = function () { return this.tryGetToken(MASMParser.OUTS, 0); };
    Object.defineProperty(LContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_l; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LContext.prototype.enterRule = function (listener) {
        if (listener.enterL) {
            listener.enterL(this);
        }
    };
    // @Override
    LContext.prototype.exitRule = function (listener) {
        if (listener.exitL) {
            listener.exitL(this);
        }
    };
    // @Override
    LContext.prototype.accept = function (visitor) {
        if (visitor.visitL) {
            return visitor.visitL(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LContext = LContext;
var XContext = /** @class */ (function (_super) {
    __extends(XContext, _super);
    function XContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    XContext.prototype.XADD = function () { return this.tryGetToken(MASMParser.XADD, 0); };
    XContext.prototype.CMPXCHG = function () { return this.tryGetToken(MASMParser.CMPXCHG, 0); };
    Object.defineProperty(XContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_x; },
        enumerable: true,
        configurable: true
    });
    // @Override
    XContext.prototype.enterRule = function (listener) {
        if (listener.enterX) {
            listener.enterX(this);
        }
    };
    // @Override
    XContext.prototype.exitRule = function (listener) {
        if (listener.exitX) {
            listener.exitX(this);
        }
    };
    // @Override
    XContext.prototype.accept = function (visitor) {
        if (visitor.visitX) {
            return visitor.visitX(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return XContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.XContext = XContext;
var SContext = /** @class */ (function (_super) {
    __extends(SContext, _super);
    function SContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SContext.prototype.SHL = function () { return this.tryGetToken(MASMParser.SHL, 0); };
    SContext.prototype.SHR = function () { return this.tryGetToken(MASMParser.SHR, 0); };
    SContext.prototype.ROR = function () { return this.tryGetToken(MASMParser.ROR, 0); };
    SContext.prototype.ROL = function () { return this.tryGetToken(MASMParser.ROL, 0); };
    SContext.prototype.RCL = function () { return this.tryGetToken(MASMParser.RCL, 0); };
    SContext.prototype.SAL = function () { return this.tryGetToken(MASMParser.SAL, 0); };
    SContext.prototype.RCR = function () { return this.tryGetToken(MASMParser.RCR, 0); };
    SContext.prototype.SAR = function () { return this.tryGetToken(MASMParser.SAR, 0); };
    Object.defineProperty(SContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_s; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SContext.prototype.enterRule = function (listener) {
        if (listener.enterS) {
            listener.enterS(this);
        }
    };
    // @Override
    SContext.prototype.exitRule = function (listener) {
        if (listener.exitS) {
            listener.exitS(this);
        }
    };
    // @Override
    SContext.prototype.accept = function (visitor) {
        if (visitor.visitS) {
            return visitor.visitS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SContext = SContext;
var ShContext = /** @class */ (function (_super) {
    __extends(ShContext, _super);
    function ShContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ShContext.prototype.SHRD = function () { return this.tryGetToken(MASMParser.SHRD, 0); };
    ShContext.prototype.SHLD = function () { return this.tryGetToken(MASMParser.SHLD, 0); };
    Object.defineProperty(ShContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_sh; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ShContext.prototype.enterRule = function (listener) {
        if (listener.enterSh) {
            listener.enterSh(this);
        }
    };
    // @Override
    ShContext.prototype.exitRule = function (listener) {
        if (listener.exitSh) {
            listener.exitSh(this);
        }
    };
    // @Override
    ShContext.prototype.accept = function (visitor) {
        if (visitor.visitSh) {
            return visitor.visitSh(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ShContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ShContext = ShContext;
var BContext = /** @class */ (function (_super) {
    __extends(BContext, _super);
    function BContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BContext.prototype.BTR = function () { return this.tryGetToken(MASMParser.BTR, 0); };
    BContext.prototype.BT = function () { return this.tryGetToken(MASMParser.BT, 0); };
    BContext.prototype.BTC = function () { return this.tryGetToken(MASMParser.BTC, 0); };
    Object.defineProperty(BContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BContext.prototype.enterRule = function (listener) {
        if (listener.enterB) {
            listener.enterB(this);
        }
    };
    // @Override
    BContext.prototype.exitRule = function (listener) {
        if (listener.exitB) {
            listener.exitB(this);
        }
    };
    // @Override
    BContext.prototype.accept = function (visitor) {
        if (visitor.visitB) {
            return visitor.visitB(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BContext = BContext;
var CallContext = /** @class */ (function (_super) {
    __extends(CallContext, _super);
    function CallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallContext.prototype.CALL = function () { return this.getToken(MASMParser.CALL, 0); };
    Object.defineProperty(CallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_call; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallContext.prototype.enterRule = function (listener) {
        if (listener.enterCall) {
            listener.enterCall(this);
        }
    };
    // @Override
    CallContext.prototype.exitRule = function (listener) {
        if (listener.exitCall) {
            listener.exitCall(this);
        }
    };
    // @Override
    CallContext.prototype.accept = function (visitor) {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallContext = CallContext;
var InterruptionContext = /** @class */ (function (_super) {
    __extends(InterruptionContext, _super);
    function InterruptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterruptionContext.prototype.INT = function () { return this.tryGetToken(MASMParser.INT, 0); };
    InterruptionContext.prototype.RETN = function () { return this.tryGetToken(MASMParser.RETN, 0); };
    InterruptionContext.prototype.RET = function () { return this.tryGetToken(MASMParser.RET, 0); };
    InterruptionContext.prototype.RETF = function () { return this.tryGetToken(MASMParser.RETF, 0); };
    Object.defineProperty(InterruptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_interruption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterruptionContext.prototype.enterRule = function (listener) {
        if (listener.enterInterruption) {
            listener.enterInterruption(this);
        }
    };
    // @Override
    InterruptionContext.prototype.exitRule = function (listener) {
        if (listener.exitInterruption) {
            listener.exitInterruption(this);
        }
    };
    // @Override
    InterruptionContext.prototype.accept = function (visitor) {
        if (visitor.visitInterruption) {
            return visitor.visitInterruption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterruptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterruptionContext = InterruptionContext;
var InContext = /** @class */ (function (_super) {
    __extends(InContext, _super);
    function InContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InContext.prototype.IN = function () { return this.getToken(MASMParser.IN, 0); };
    Object.defineProperty(InContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_in; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InContext.prototype.enterRule = function (listener) {
        if (listener.enterIn) {
            listener.enterIn(this);
        }
    };
    // @Override
    InContext.prototype.exitRule = function (listener) {
        if (listener.exitIn) {
            listener.exitIn(this);
        }
    };
    // @Override
    InContext.prototype.accept = function (visitor) {
        if (visitor.visitIn) {
            return visitor.visitIn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InContext = InContext;
var OutContext = /** @class */ (function (_super) {
    __extends(OutContext, _super);
    function OutContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OutContext.prototype.OUT = function () { return this.getToken(MASMParser.OUT, 0); };
    Object.defineProperty(OutContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_out; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OutContext.prototype.enterRule = function (listener) {
        if (listener.enterOut) {
            listener.enterOut(this);
        }
    };
    // @Override
    OutContext.prototype.exitRule = function (listener) {
        if (listener.exitOut) {
            listener.exitOut(this);
        }
    };
    // @Override
    OutContext.prototype.accept = function (visitor) {
        if (visitor.visitOut) {
            return visitor.visitOut(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OutContext = OutContext;
var ReContext = /** @class */ (function (_super) {
    __extends(ReContext, _super);
    function ReContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReContext.prototype.REP = function () { return this.tryGetToken(MASMParser.REP, 0); };
    ReContext.prototype.REPE = function () { return this.tryGetToken(MASMParser.REPE, 0); };
    ReContext.prototype.REPZ = function () { return this.tryGetToken(MASMParser.REPZ, 0); };
    ReContext.prototype.REPNE = function () { return this.tryGetToken(MASMParser.REPNE, 0); };
    ReContext.prototype.REPNZ = function () { return this.tryGetToken(MASMParser.REPNZ, 0); };
    Object.defineProperty(ReContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_re; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReContext.prototype.enterRule = function (listener) {
        if (listener.enterRe) {
            listener.enterRe(this);
        }
    };
    // @Override
    ReContext.prototype.exitRule = function (listener) {
        if (listener.exitRe) {
            listener.exitRe(this);
        }
    };
    // @Override
    ReContext.prototype.accept = function (visitor) {
        if (visitor.visitRe) {
            return visitor.visitRe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReContext = ReContext;
var DirectivesContext = /** @class */ (function (_super) {
    __extends(DirectivesContext, _super);
    function DirectivesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectivesContext.prototype.ALPHA = function () { return this.tryGetToken(MASMParser.ALPHA, 0); };
    DirectivesContext.prototype.CONST = function () { return this.tryGetToken(MASMParser.CONST, 0); };
    DirectivesContext.prototype.CREF = function () { return this.tryGetToken(MASMParser.CREF, 0); };
    DirectivesContext.prototype.XCREF = function () { return this.tryGetToken(MASMParser.XCREF, 0); };
    DirectivesContext.prototype.DATA = function () { return this.tryGetToken(MASMParser.DATA, 0); };
    DirectivesContext.prototype.DATA2 = function () { return this.tryGetToken(MASMParser.DATA2, 0); };
    DirectivesContext.prototype.DOSSEG = function () { return this.tryGetToken(MASMParser.DOSSEG, 0); };
    DirectivesContext.prototype.ERR = function () { return this.tryGetToken(MASMParser.ERR, 0); };
    DirectivesContext.prototype.ERR1 = function () { return this.tryGetToken(MASMParser.ERR1, 0); };
    DirectivesContext.prototype.ERR2 = function () { return this.tryGetToken(MASMParser.ERR2, 0); };
    DirectivesContext.prototype.ERRE = function () { return this.tryGetToken(MASMParser.ERRE, 0); };
    DirectivesContext.prototype.ERRNZ = function () { return this.tryGetToken(MASMParser.ERRNZ, 0); };
    DirectivesContext.prototype.ERRDEF = function () { return this.tryGetToken(MASMParser.ERRDEF, 0); };
    DirectivesContext.prototype.ERRNDEF = function () { return this.tryGetToken(MASMParser.ERRNDEF, 0); };
    DirectivesContext.prototype.ERRB = function () { return this.tryGetToken(MASMParser.ERRB, 0); };
    DirectivesContext.prototype.ERRNB = function () { return this.tryGetToken(MASMParser.ERRNB, 0); };
    DirectivesContext.prototype.ERRIDN = function () { return this.tryGetToken(MASMParser.ERRIDN, 0); };
    DirectivesContext.prototype.ERRDIF = function () { return this.tryGetToken(MASMParser.ERRDIF, 0); };
    DirectivesContext.prototype.EVEN = function () { return this.tryGetToken(MASMParser.EVEN, 0); };
    DirectivesContext.prototype.LIST = function () { return this.tryGetToken(MASMParser.LIST, 0); };
    DirectivesContext.prototype.WIDTH = function () { return this.tryGetToken(MASMParser.WIDTH, 0); };
    DirectivesContext.prototype.MASK = function () { return this.tryGetToken(MASMParser.MASK, 0); };
    DirectivesContext.prototype.SEQ = function () { return this.tryGetToken(MASMParser.SEQ, 0); };
    DirectivesContext.prototype.XLIST = function () { return this.tryGetToken(MASMParser.XLIST, 0); };
    DirectivesContext.prototype.EXIT = function () { return this.tryGetToken(MASMParser.EXIT, 0); };
    DirectivesContext.prototype.MODEL = function () { return this.tryGetToken(MASMParser.MODEL, 0); };
    Object.defineProperty(DirectivesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_directives; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectivesContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectives) {
            listener.enterDirectives(this);
        }
    };
    // @Override
    DirectivesContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectives) {
            listener.exitDirectives(this);
        }
    };
    // @Override
    DirectivesContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectives) {
            return visitor.visitDirectives(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectivesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectivesContext = DirectivesContext;
var TyContext = /** @class */ (function (_super) {
    __extends(TyContext, _super);
    function TyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TyContext.prototype.BYTE = function () { return this.tryGetToken(MASMParser.BYTE, 0); };
    TyContext.prototype.SBYTE = function () { return this.tryGetToken(MASMParser.SBYTE, 0); };
    TyContext.prototype.DB = function () { return this.tryGetToken(MASMParser.DB, 0); };
    TyContext.prototype.WORD = function () { return this.tryGetToken(MASMParser.WORD, 0); };
    TyContext.prototype.SWORD = function () { return this.tryGetToken(MASMParser.SWORD, 0); };
    TyContext.prototype.DW = function () { return this.tryGetToken(MASMParser.DW, 0); };
    TyContext.prototype.DWORD = function () { return this.tryGetToken(MASMParser.DWORD, 0); };
    TyContext.prototype.SDWORD = function () { return this.tryGetToken(MASMParser.SDWORD, 0); };
    TyContext.prototype.DD = function () { return this.tryGetToken(MASMParser.DD, 0); };
    TyContext.prototype.FWORD = function () { return this.tryGetToken(MASMParser.FWORD, 0); };
    TyContext.prototype.DF = function () { return this.tryGetToken(MASMParser.DF, 0); };
    TyContext.prototype.QWORD = function () { return this.tryGetToken(MASMParser.QWORD, 0); };
    TyContext.prototype.DQ = function () { return this.tryGetToken(MASMParser.DQ, 0); };
    TyContext.prototype.TBYTE = function () { return this.tryGetToken(MASMParser.TBYTE, 0); };
    TyContext.prototype.DT = function () { return this.tryGetToken(MASMParser.DT, 0); };
    TyContext.prototype.REAL4 = function () { return this.tryGetToken(MASMParser.REAL4, 0); };
    TyContext.prototype.REAL8 = function () { return this.tryGetToken(MASMParser.REAL8, 0); };
    TyContext.prototype.REAL = function () { return this.tryGetToken(MASMParser.REAL, 0); };
    TyContext.prototype.FAR = function () { return this.tryGetToken(MASMParser.FAR, 0); };
    TyContext.prototype.NEAR = function () { return this.tryGetToken(MASMParser.NEAR, 0); };
    TyContext.prototype.PROC = function () { return this.tryGetToken(MASMParser.PROC, 0); };
    Object.defineProperty(TyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_ty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TyContext.prototype.enterRule = function (listener) {
        if (listener.enterTy) {
            listener.enterTy(this);
        }
    };
    // @Override
    TyContext.prototype.exitRule = function (listener) {
        if (listener.exitTy) {
            listener.exitTy(this);
        }
    };
    // @Override
    TyContext.prototype.accept = function (visitor) {
        if (visitor.visitTy) {
            return visitor.visitTy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TyContext = TyContext;
var QuestionContext = /** @class */ (function (_super) {
    __extends(QuestionContext, _super);
    function QuestionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuestionContext.prototype.QUESTION = function () { return this.getToken(MASMParser.QUESTION, 0); };
    Object.defineProperty(QuestionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_question; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuestionContext.prototype.enterRule = function (listener) {
        if (listener.enterQuestion) {
            listener.enterQuestion(this);
        }
    };
    // @Override
    QuestionContext.prototype.exitRule = function (listener) {
        if (listener.exitQuestion) {
            listener.exitQuestion(this);
        }
    };
    // @Override
    QuestionContext.prototype.accept = function (visitor) {
        if (visitor.visitQuestion) {
            return visitor.visitQuestion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuestionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuestionContext = QuestionContext;
var TimeContext = /** @class */ (function (_super) {
    __extends(TimeContext, _super);
    function TimeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimeContext.prototype.TIMES = function () { return this.getToken(MASMParser.TIMES, 0); };
    Object.defineProperty(TimeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MASMParser.RULE_time; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimeContext.prototype.enterRule = function (listener) {
        if (listener.enterTime) {
            listener.enterTime(this);
        }
    };
    // @Override
    TimeContext.prototype.exitRule = function (listener) {
        if (listener.exitTime) {
            listener.exitTime(this);
        }
    };
    // @Override
    TimeContext.prototype.accept = function (visitor) {
        if (visitor.visitTime) {
            return visitor.visitTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimeContext = TimeContext;
