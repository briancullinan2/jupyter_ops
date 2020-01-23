"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sharc/SHARCParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var SHARCParser = /** @class */ (function (_super) {
    __extends(SHARCParser, _super);
    function SHARCParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SHARCParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SHARCParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SHARCParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SHARCParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "SHARCParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SHARCParser.prototype, "ruleNames", {
        // @Override
        get: function () { return SHARCParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SHARCParser.prototype, "serializedATN", {
        // @Override
        get: function () { return SHARCParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SHARCParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SHARCParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 312;
                            this.statement();
                            this.state = 313;
                            this.match(SHARCParser.SEMICOLON);
                        }
                    }
                    this.state = 317;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (SHARCParser.DOT_ALGIGN - 8)) | (1 << (SHARCParser.DOT_COMPRESS - 8)) | (1 << (SHARCParser.DOT_EXTERN - 8)) | (1 << (SHARCParser.DOT_FILE - 8)) | (1 << (SHARCParser.DOT_FILE_ATTR - 8)) | (1 << (SHARCParser.DOT_FORCECOMPRESS - 8)) | (1 << (SHARCParser.DOT_GLOBAL - 8)) | (1 << (SHARCParser.DOT_IMPORT - 8)) | (1 << (SHARCParser.DOT_LEFTMARGIN - 8)) | (1 << (SHARCParser.DOT_LIST - 8)) | (1 << (SHARCParser.DOT_LIST_DATA - 8)) | (1 << (SHARCParser.DOT_LIST_DATFILE - 8)) | (1 << (SHARCParser.DOT_LIST_DEFTAB - 8)) | (1 << (SHARCParser.DOT_LIST_LOCTAB - 8)) | (1 << (SHARCParser.DOT_LIST_WRAPDATA - 8)) | (1 << (SHARCParser.DOT_NEWPAGE - 8)) | (1 << (SHARCParser.DOT_NOCOMPRESS - 8)) | (1 << (SHARCParser.DOT_NOLIST_DATA - 8)) | (1 << (SHARCParser.DOT_NOLIST_DATFILE - 8)) | (1 << (SHARCParser.DOT_NOLIST_WRAPDATA - 8)) | (1 << (SHARCParser.DOT_PAGELENGTH - 8)) | (1 << (SHARCParser.DOT_PAGEWIDTH - 8)) | (1 << (SHARCParser.DOT_PRECISION - 8)) | (1 << (SHARCParser.DOT_ROUND_MINUS - 8)) | (1 << (SHARCParser.DOT_ROUND_NEAREST - 8)) | (1 << (SHARCParser.DOT_ROUND_PLUS - 8)) | (1 << (SHARCParser.DOT_ROUND_ZERO - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SHARCParser.DOT_PREVIOUS - 40)) | (1 << (SHARCParser.DOT_SECTION - 40)) | (1 << (SHARCParser.DOT_SEGMENT - 40)) | (1 << (SHARCParser.DOT_ENDSEG - 40)) | (1 << (SHARCParser.DOT_VAR - 40)) | (1 << (SHARCParser.DOT_WEAK - 40)) | (1 << (SHARCParser.ASTAT - 40)) | (1 << (SHARCParser.B0 - 40)) | (1 << (SHARCParser.B1 - 40)) | (1 << (SHARCParser.B2 - 40)) | (1 << (SHARCParser.B3 - 40)) | (1 << (SHARCParser.B4 - 40)) | (1 << (SHARCParser.B5 - 40)) | (1 << (SHARCParser.B6 - 40)) | (1 << (SHARCParser.B7 - 40)) | (1 << (SHARCParser.B8 - 40)) | (1 << (SHARCParser.B9 - 40)) | (1 << (SHARCParser.B10 - 40)) | (1 << (SHARCParser.B11 - 40)) | (1 << (SHARCParser.B12 - 40)) | (1 << (SHARCParser.B13 - 40)) | (1 << (SHARCParser.B14 - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SHARCParser.B15 - 72)) | (1 << (SHARCParser.BIT - 72)) | (1 << (SHARCParser.BITREV - 72)) | (1 << (SHARCParser.BTST - 72)) | (1 << (SHARCParser.CALL - 72)) | (1 << (SHARCParser.CJUMP - 72)) | (1 << (SHARCParser.COMP - 72)) | (1 << (SHARCParser.CURLCNTR - 72)) | (1 << (SHARCParser.DADDR - 72)) | (1 << (SHARCParser.DM - 72)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (SHARCParser.DO - 111)) | (1 << (SHARCParser.F0 - 111)) | (1 << (SHARCParser.F1 - 111)) | (1 << (SHARCParser.F2 - 111)) | (1 << (SHARCParser.F3 - 111)) | (1 << (SHARCParser.F4 - 111)) | (1 << (SHARCParser.F5 - 111)) | (1 << (SHARCParser.F6 - 111)) | (1 << (SHARCParser.F7 - 111)) | (1 << (SHARCParser.F8 - 111)) | (1 << (SHARCParser.F9 - 111)) | (1 << (SHARCParser.F10 - 111)) | (1 << (SHARCParser.F11 - 111)) | (1 << (SHARCParser.F12 - 111)) | (1 << (SHARCParser.F13 - 111)) | (1 << (SHARCParser.F14 - 111)) | (1 << (SHARCParser.F15 - 111)) | (1 << (SHARCParser.FADDR - 111)))) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & ((1 << (SHARCParser.FLUSH - 152)) | (1 << (SHARCParser.I0 - 152)) | (1 << (SHARCParser.I1 - 152)) | (1 << (SHARCParser.I2 - 152)) | (1 << (SHARCParser.I3 - 152)) | (1 << (SHARCParser.I4 - 152)) | (1 << (SHARCParser.I5 - 152)) | (1 << (SHARCParser.I6 - 152)) | (1 << (SHARCParser.I7 - 152)) | (1 << (SHARCParser.I8 - 152)) | (1 << (SHARCParser.I9 - 152)) | (1 << (SHARCParser.I10 - 152)) | (1 << (SHARCParser.I11 - 152)) | (1 << (SHARCParser.I12 - 152)) | (1 << (SHARCParser.I13 - 152)) | (1 << (SHARCParser.I14 - 152)) | (1 << (SHARCParser.I15 - 152)) | (1 << (SHARCParser.IDLE - 152)) | (1 << (SHARCParser.IDLE16 - 152)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (SHARCParser.IF - 184)) | (1 << (SHARCParser.IMASK - 184)) | (1 << (SHARCParser.IMASKP - 184)) | (1 << (SHARCParser.IRPTL - 184)) | (1 << (SHARCParser.JUMP - 184)) | (1 << (SHARCParser.L0 - 184)) | (1 << (SHARCParser.L1 - 184)) | (1 << (SHARCParser.L2 - 184)) | (1 << (SHARCParser.L3 - 184)) | (1 << (SHARCParser.L4 - 184)) | (1 << (SHARCParser.L5 - 184)) | (1 << (SHARCParser.L6 - 184)) | (1 << (SHARCParser.L7 - 184)) | (1 << (SHARCParser.L8 - 184)) | (1 << (SHARCParser.L9 - 184)) | (1 << (SHARCParser.L10 - 184)) | (1 << (SHARCParser.L11 - 184)) | (1 << (SHARCParser.L12 - 184)) | (1 << (SHARCParser.L13 - 184)) | (1 << (SHARCParser.L14 - 184)) | (1 << (SHARCParser.L15 - 184)) | (1 << (SHARCParser.LADDR - 184)) | (1 << (SHARCParser.LCNTR - 184)))) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & ((1 << (SHARCParser.M0 - 223)) | (1 << (SHARCParser.M1 - 223)) | (1 << (SHARCParser.M2 - 223)) | (1 << (SHARCParser.M3 - 223)) | (1 << (SHARCParser.M4 - 223)) | (1 << (SHARCParser.M5 - 223)) | (1 << (SHARCParser.M6 - 223)) | (1 << (SHARCParser.M7 - 223)) | (1 << (SHARCParser.M8 - 223)) | (1 << (SHARCParser.M9 - 223)) | (1 << (SHARCParser.M10 - 223)) | (1 << (SHARCParser.M11 - 223)) | (1 << (SHARCParser.M12 - 223)) | (1 << (SHARCParser.M13 - 223)) | (1 << (SHARCParser.M14 - 223)) | (1 << (SHARCParser.M15 - 223)) | (1 << (SHARCParser.MODE1 - 223)) | (1 << (SHARCParser.MODE2 - 223)) | (1 << (SHARCParser.MODIFY - 223)) | (1 << (SHARCParser.MR0B - 223)) | (1 << (SHARCParser.MR0F - 223)) | (1 << (SHARCParser.MR1B - 223)) | (1 << (SHARCParser.MR1F - 223)) | (1 << (SHARCParser.MR2B - 223)) | (1 << (SHARCParser.MR2F - 223)) | (1 << (SHARCParser.MRB - 223)) | (1 << (SHARCParser.MRF - 223)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (SHARCParser.NOP - 261)) | (1 << (SHARCParser.PC - 261)) | (1 << (SHARCParser.PCSTK - 261)) | (1 << (SHARCParser.PCSTKP - 261)) | (1 << (SHARCParser.PM - 261)) | (1 << (SHARCParser.POP - 261)) | (1 << (SHARCParser.PUSH - 261)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (SHARCParser.PX - 293)) | (1 << (SHARCParser.PX1 - 293)) | (1 << (SHARCParser.PX2 - 293)) | (1 << (SHARCParser.R0 - 293)) | (1 << (SHARCParser.R1 - 293)) | (1 << (SHARCParser.R2 - 293)) | (1 << (SHARCParser.R3 - 293)) | (1 << (SHARCParser.R4 - 293)) | (1 << (SHARCParser.R5 - 293)) | (1 << (SHARCParser.R6 - 293)) | (1 << (SHARCParser.R7 - 293)) | (1 << (SHARCParser.R8 - 293)) | (1 << (SHARCParser.R9 - 293)) | (1 << (SHARCParser.R10 - 293)) | (1 << (SHARCParser.R11 - 293)) | (1 << (SHARCParser.R12 - 293)) | (1 << (SHARCParser.R13 - 293)) | (1 << (SHARCParser.R14 - 293)) | (1 << (SHARCParser.R15 - 293)) | (1 << (SHARCParser.RFRAME - 293)) | (1 << (SHARCParser.RTI - 293)) | (1 << (SHARCParser.RTS - 293)))) !== 0) || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & ((1 << (SHARCParser.STKY - 340)) | (1 << (SHARCParser.TCOUNT - 340)) | (1 << (SHARCParser.TPERIOD - 340)) | (1 << (SHARCParser.USTAT1 - 340)) | (1 << (SHARCParser.USTAT2 - 340)))) !== 0) || _la === SHARCParser.ID);
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
    SHARCParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SHARCParser.RULE_statement);
        var _la;
        try {
            this.state = 327;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.DOT_ALGIGN:
                case SHARCParser.DOT_COMPRESS:
                case SHARCParser.DOT_EXTERN:
                case SHARCParser.DOT_FILE:
                case SHARCParser.DOT_FILE_ATTR:
                case SHARCParser.DOT_FORCECOMPRESS:
                case SHARCParser.DOT_GLOBAL:
                case SHARCParser.DOT_IMPORT:
                case SHARCParser.DOT_LEFTMARGIN:
                case SHARCParser.DOT_LIST:
                case SHARCParser.DOT_LIST_DATA:
                case SHARCParser.DOT_LIST_DATFILE:
                case SHARCParser.DOT_LIST_DEFTAB:
                case SHARCParser.DOT_LIST_LOCTAB:
                case SHARCParser.DOT_LIST_WRAPDATA:
                case SHARCParser.DOT_NEWPAGE:
                case SHARCParser.DOT_NOCOMPRESS:
                case SHARCParser.DOT_NOLIST_DATA:
                case SHARCParser.DOT_NOLIST_DATFILE:
                case SHARCParser.DOT_NOLIST_WRAPDATA:
                case SHARCParser.DOT_PAGELENGTH:
                case SHARCParser.DOT_PAGEWIDTH:
                case SHARCParser.DOT_PRECISION:
                case SHARCParser.DOT_ROUND_MINUS:
                case SHARCParser.DOT_ROUND_NEAREST:
                case SHARCParser.DOT_ROUND_PLUS:
                case SHARCParser.DOT_ROUND_ZERO:
                case SHARCParser.DOT_PREVIOUS:
                case SHARCParser.DOT_SECTION:
                case SHARCParser.DOT_SEGMENT:
                case SHARCParser.DOT_ENDSEG:
                case SHARCParser.DOT_VAR:
                case SHARCParser.DOT_WEAK:
                case SHARCParser.ASTAT:
                case SHARCParser.B0:
                case SHARCParser.B1:
                case SHARCParser.B2:
                case SHARCParser.B3:
                case SHARCParser.B4:
                case SHARCParser.B5:
                case SHARCParser.B6:
                case SHARCParser.B7:
                case SHARCParser.B8:
                case SHARCParser.B9:
                case SHARCParser.B10:
                case SHARCParser.B11:
                case SHARCParser.B12:
                case SHARCParser.B13:
                case SHARCParser.B14:
                case SHARCParser.B15:
                case SHARCParser.BIT:
                case SHARCParser.BITREV:
                case SHARCParser.BTST:
                case SHARCParser.CALL:
                case SHARCParser.CJUMP:
                case SHARCParser.COMP:
                case SHARCParser.CURLCNTR:
                case SHARCParser.DADDR:
                case SHARCParser.DM:
                case SHARCParser.DO:
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                case SHARCParser.FADDR:
                case SHARCParser.FLUSH:
                case SHARCParser.I0:
                case SHARCParser.I1:
                case SHARCParser.I2:
                case SHARCParser.I3:
                case SHARCParser.I4:
                case SHARCParser.I5:
                case SHARCParser.I6:
                case SHARCParser.I7:
                case SHARCParser.I8:
                case SHARCParser.I9:
                case SHARCParser.I10:
                case SHARCParser.I11:
                case SHARCParser.I12:
                case SHARCParser.I13:
                case SHARCParser.I14:
                case SHARCParser.I15:
                case SHARCParser.IDLE:
                case SHARCParser.IDLE16:
                case SHARCParser.IF:
                case SHARCParser.IMASK:
                case SHARCParser.IMASKP:
                case SHARCParser.IRPTL:
                case SHARCParser.JUMP:
                case SHARCParser.L0:
                case SHARCParser.L1:
                case SHARCParser.L2:
                case SHARCParser.L3:
                case SHARCParser.L4:
                case SHARCParser.L5:
                case SHARCParser.L6:
                case SHARCParser.L7:
                case SHARCParser.L8:
                case SHARCParser.L9:
                case SHARCParser.L10:
                case SHARCParser.L11:
                case SHARCParser.L12:
                case SHARCParser.L13:
                case SHARCParser.L14:
                case SHARCParser.L15:
                case SHARCParser.LADDR:
                case SHARCParser.LCNTR:
                case SHARCParser.M0:
                case SHARCParser.M1:
                case SHARCParser.M2:
                case SHARCParser.M3:
                case SHARCParser.M4:
                case SHARCParser.M5:
                case SHARCParser.M6:
                case SHARCParser.M7:
                case SHARCParser.M8:
                case SHARCParser.M9:
                case SHARCParser.M10:
                case SHARCParser.M11:
                case SHARCParser.M12:
                case SHARCParser.M13:
                case SHARCParser.M14:
                case SHARCParser.M15:
                case SHARCParser.MODE1:
                case SHARCParser.MODE2:
                case SHARCParser.MODIFY:
                case SHARCParser.MR0B:
                case SHARCParser.MR0F:
                case SHARCParser.MR1B:
                case SHARCParser.MR1F:
                case SHARCParser.MR2B:
                case SHARCParser.MR2F:
                case SHARCParser.MRB:
                case SHARCParser.MRF:
                case SHARCParser.NOP:
                case SHARCParser.PC:
                case SHARCParser.PCSTK:
                case SHARCParser.PCSTKP:
                case SHARCParser.PM:
                case SHARCParser.POP:
                case SHARCParser.PUSH:
                case SHARCParser.PX:
                case SHARCParser.PX1:
                case SHARCParser.PX2:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                case SHARCParser.RFRAME:
                case SHARCParser.RTI:
                case SHARCParser.RTS:
                case SHARCParser.STKY:
                case SHARCParser.TCOUNT:
                case SHARCParser.TPERIOD:
                case SHARCParser.USTAT1:
                case SHARCParser.USTAT2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 319;
                        this.stmt_atom();
                    }
                    break;
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 322;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 320;
                                    this.match(SHARCParser.ID);
                                    this.state = 321;
                                    this.match(SHARCParser.COLON);
                                }
                            }
                            this.state = 324;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SHARCParser.ID);
                        this.state = 326;
                        this.stmt_atom();
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
    SHARCParser.prototype.stmt_atom = function () {
        var _localctx = new Stmt_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SHARCParser.RULE_stmt_atom);
        try {
            this.state = 334;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.DOT_VAR:
                case SHARCParser.ASTAT:
                case SHARCParser.B0:
                case SHARCParser.B1:
                case SHARCParser.B2:
                case SHARCParser.B3:
                case SHARCParser.B4:
                case SHARCParser.B5:
                case SHARCParser.B6:
                case SHARCParser.B7:
                case SHARCParser.B8:
                case SHARCParser.B9:
                case SHARCParser.B10:
                case SHARCParser.B11:
                case SHARCParser.B12:
                case SHARCParser.B13:
                case SHARCParser.B14:
                case SHARCParser.B15:
                case SHARCParser.BIT:
                case SHARCParser.BITREV:
                case SHARCParser.BTST:
                case SHARCParser.CALL:
                case SHARCParser.CJUMP:
                case SHARCParser.COMP:
                case SHARCParser.CURLCNTR:
                case SHARCParser.DADDR:
                case SHARCParser.DM:
                case SHARCParser.DO:
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                case SHARCParser.FADDR:
                case SHARCParser.FLUSH:
                case SHARCParser.I0:
                case SHARCParser.I1:
                case SHARCParser.I2:
                case SHARCParser.I3:
                case SHARCParser.I4:
                case SHARCParser.I5:
                case SHARCParser.I6:
                case SHARCParser.I7:
                case SHARCParser.I8:
                case SHARCParser.I9:
                case SHARCParser.I10:
                case SHARCParser.I11:
                case SHARCParser.I12:
                case SHARCParser.I13:
                case SHARCParser.I14:
                case SHARCParser.I15:
                case SHARCParser.IDLE:
                case SHARCParser.IDLE16:
                case SHARCParser.IF:
                case SHARCParser.IMASK:
                case SHARCParser.IMASKP:
                case SHARCParser.IRPTL:
                case SHARCParser.JUMP:
                case SHARCParser.L0:
                case SHARCParser.L1:
                case SHARCParser.L2:
                case SHARCParser.L3:
                case SHARCParser.L4:
                case SHARCParser.L5:
                case SHARCParser.L6:
                case SHARCParser.L7:
                case SHARCParser.L8:
                case SHARCParser.L9:
                case SHARCParser.L10:
                case SHARCParser.L11:
                case SHARCParser.L12:
                case SHARCParser.L13:
                case SHARCParser.L14:
                case SHARCParser.L15:
                case SHARCParser.LADDR:
                case SHARCParser.LCNTR:
                case SHARCParser.M0:
                case SHARCParser.M1:
                case SHARCParser.M2:
                case SHARCParser.M3:
                case SHARCParser.M4:
                case SHARCParser.M5:
                case SHARCParser.M6:
                case SHARCParser.M7:
                case SHARCParser.M8:
                case SHARCParser.M9:
                case SHARCParser.M10:
                case SHARCParser.M11:
                case SHARCParser.M12:
                case SHARCParser.M13:
                case SHARCParser.M14:
                case SHARCParser.M15:
                case SHARCParser.MODE1:
                case SHARCParser.MODE2:
                case SHARCParser.MODIFY:
                case SHARCParser.MR0B:
                case SHARCParser.MR0F:
                case SHARCParser.MR1B:
                case SHARCParser.MR1F:
                case SHARCParser.MR2B:
                case SHARCParser.MR2F:
                case SHARCParser.MRB:
                case SHARCParser.MRF:
                case SHARCParser.NOP:
                case SHARCParser.PC:
                case SHARCParser.PCSTK:
                case SHARCParser.PCSTKP:
                case SHARCParser.PM:
                case SHARCParser.POP:
                case SHARCParser.PUSH:
                case SHARCParser.PX:
                case SHARCParser.PX1:
                case SHARCParser.PX2:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                case SHARCParser.RFRAME:
                case SHARCParser.RTI:
                case SHARCParser.RTS:
                case SHARCParser.STKY:
                case SHARCParser.TCOUNT:
                case SHARCParser.TPERIOD:
                case SHARCParser.USTAT1:
                case SHARCParser.USTAT2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 329;
                        this.stmt();
                    }
                    break;
                case SHARCParser.DOT_SECTION:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 330;
                        this.sec();
                    }
                    break;
                case SHARCParser.DOT_SEGMENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 331;
                        this.seg();
                    }
                    break;
                case SHARCParser.DOT_ENDSEG:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 332;
                        this.end_seg();
                    }
                    break;
                case SHARCParser.DOT_ALGIGN:
                case SHARCParser.DOT_COMPRESS:
                case SHARCParser.DOT_EXTERN:
                case SHARCParser.DOT_FILE:
                case SHARCParser.DOT_FILE_ATTR:
                case SHARCParser.DOT_FORCECOMPRESS:
                case SHARCParser.DOT_GLOBAL:
                case SHARCParser.DOT_IMPORT:
                case SHARCParser.DOT_LEFTMARGIN:
                case SHARCParser.DOT_LIST:
                case SHARCParser.DOT_LIST_DATA:
                case SHARCParser.DOT_LIST_DATFILE:
                case SHARCParser.DOT_LIST_DEFTAB:
                case SHARCParser.DOT_LIST_LOCTAB:
                case SHARCParser.DOT_LIST_WRAPDATA:
                case SHARCParser.DOT_NEWPAGE:
                case SHARCParser.DOT_NOCOMPRESS:
                case SHARCParser.DOT_NOLIST_DATA:
                case SHARCParser.DOT_NOLIST_DATFILE:
                case SHARCParser.DOT_NOLIST_WRAPDATA:
                case SHARCParser.DOT_PAGELENGTH:
                case SHARCParser.DOT_PAGEWIDTH:
                case SHARCParser.DOT_PRECISION:
                case SHARCParser.DOT_ROUND_MINUS:
                case SHARCParser.DOT_ROUND_NEAREST:
                case SHARCParser.DOT_ROUND_PLUS:
                case SHARCParser.DOT_ROUND_ZERO:
                case SHARCParser.DOT_PREVIOUS:
                case SHARCParser.DOT_WEAK:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 333;
                        this.directive_exp();
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
    SHARCParser.prototype.sec = function () {
        var _localctx = new SecContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SHARCParser.RULE_sec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.match(SHARCParser.DOT_SECTION);
                this.state = 337;
                this.seg_qualifier();
                this.state = 338;
                this.match(SHARCParser.ID);
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
    SHARCParser.prototype.seg = function () {
        var _localctx = new SegContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SHARCParser.RULE_seg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this.match(SHARCParser.DOT_SEGMENT);
                this.state = 341;
                this.seg_qualifier();
                this.state = 342;
                this.match(SHARCParser.ID);
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
    SHARCParser.prototype.end_seg = function () {
        var _localctx = new End_segContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SHARCParser.RULE_end_seg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                this.match(SHARCParser.DOT_ENDSEG);
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
    SHARCParser.prototype.seg_qualifier = function () {
        var _localctx = new Seg_qualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SHARCParser.RULE_seg_qualifier);
        try {
            this.state = 361;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 346;
                        this.seg_qualifier1();
                        this.state = 349;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                            case 1:
                                {
                                    this.state = 347;
                                    this.seg_qualifier2();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 348;
                                    this.seg_qualifier3();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 351;
                        this.seg_qualifier2();
                        this.state = 354;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                            case 1:
                                {
                                    this.state = 352;
                                    this.seg_qualifier1();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 353;
                                    this.seg_qualifier3();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 356;
                        this.seg_qualifier3();
                        this.state = 359;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                            case 1:
                                {
                                    this.state = 357;
                                    this.seg_qualifier1();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 358;
                                    this.seg_qualifier2();
                                }
                                break;
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
    SHARCParser.prototype.seg_qualifier1 = function () {
        var _localctx = new Seg_qualifier1Context(this._ctx, this.state);
        this.enterRule(_localctx, 14, SHARCParser.RULE_seg_qualifier1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 363;
                    this.match(SHARCParser.DIV);
                    this.state = 366;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case SHARCParser.PM:
                        case SHARCParser.CODE:
                            {
                                this.state = 364;
                                this.seg_qualifier_1();
                            }
                            break;
                        case SHARCParser.DM:
                        case SHARCParser.DATA:
                        case SHARCParser.DATA64:
                            {
                                this.state = 365;
                                this.seg_qualifier_2();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
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
    SHARCParser.prototype.seg_qualifier2 = function () {
        var _localctx = new Seg_qualifier2Context(this._ctx, this.state);
        this.enterRule(_localctx, 16, SHARCParser.RULE_seg_qualifier2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 368;
                    this.match(SHARCParser.DIV);
                    this.state = 369;
                    this.seg_qualifier_3();
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
    SHARCParser.prototype.seg_qualifier3 = function () {
        var _localctx = new Seg_qualifier3Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, SHARCParser.RULE_seg_qualifier3);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 371;
                    this.match(SHARCParser.DIV);
                    this.state = 372;
                    this.match(SHARCParser.DMAONLY);
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
    SHARCParser.prototype.seg_qualifier_1 = function () {
        var _localctx = new Seg_qualifier_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 20, SHARCParser.RULE_seg_qualifier_1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.PM || _la === SHARCParser.CODE)) {
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
    SHARCParser.prototype.seg_qualifier_2 = function () {
        var _localctx = new Seg_qualifier_2Context(this._ctx, this.state);
        this.enterRule(_localctx, 22, SHARCParser.RULE_seg_qualifier_2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.DM || _la === SHARCParser.DATA || _la === SHARCParser.DATA64)) {
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
    SHARCParser.prototype.seg_qualifier_3 = function () {
        var _localctx = new Seg_qualifier_3Context(this._ctx, this.state);
        this.enterRule(_localctx, 24, SHARCParser.RULE_seg_qualifier_3);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 378;
                _la = this._input.LA(1);
                if (!(((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & ((1 << (SHARCParser.NO_INIT - 395)) | (1 << (SHARCParser.ZERO_INIT - 395)) | (1 << (SHARCParser.RUNTIME_INIT - 395)))) !== 0))) {
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
    SHARCParser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SHARCParser.RULE_stmt);
        try {
            this.state = 387;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 380;
                        this.compute();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 381;
                        this.flow_control_exp();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 382;
                        this.imm_mov_exp();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 383;
                        this.misc_exp();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 384;
                        this.declaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 385;
                        this.if_compute_mov();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 386;
                        this.compute_mov_exp();
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
    SHARCParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SHARCParser.RULE_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 389;
                this.match(SHARCParser.DOT_VAR);
                this.state = 395;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 390;
                            this.declaration_exp1();
                        }
                        break;
                    case 2:
                        {
                            this.state = 391;
                            this.declaration_exp2();
                        }
                        break;
                    case 3:
                        {
                            this.state = 392;
                            this.declaration_exp3();
                        }
                        break;
                    case 4:
                        {
                            this.state = 393;
                            this.declaration_exp4();
                        }
                        break;
                    case 5:
                        {
                            this.state = 394;
                            this.declaration_exp5();
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
    SHARCParser.prototype.declaration_exp1 = function () {
        var _localctx = new Declaration_exp1Context(this._ctx, this.state);
        this.enterRule(_localctx, 30, SHARCParser.RULE_declaration_exp1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.match(SHARCParser.ID);
                this.state = 402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SHARCParser.COMMA) {
                    {
                        {
                            this.state = 398;
                            this.match(SHARCParser.COMMA);
                            this.state = 399;
                            this.match(SHARCParser.ID);
                        }
                    }
                    this.state = 404;
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
    SHARCParser.prototype.declaration_exp2 = function () {
        var _localctx = new Declaration_exp2Context(this._ctx, this.state);
        this.enterRule(_localctx, 32, SHARCParser.RULE_declaration_exp2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 405;
                this.match(SHARCParser.EQU);
                this.state = 406;
                this.initExpression();
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SHARCParser.COMMA) {
                    {
                        {
                            this.state = 407;
                            this.match(SHARCParser.COMMA);
                            this.state = 408;
                            this.initExpression();
                        }
                    }
                    this.state = 413;
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
    SHARCParser.prototype.declaration_exp3 = function () {
        var _localctx = new Declaration_exp3Context(this._ctx, this.state);
        this.enterRule(_localctx, 34, SHARCParser.RULE_declaration_exp3);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this.match(SHARCParser.ID);
                this.state = 415;
                this.match(SHARCParser.LBRACKET);
                this.state = 416;
                this.match(SHARCParser.RBRACKET);
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.EQU) {
                    {
                        this.state = 417;
                        this.match(SHARCParser.EQU);
                        this.state = 418;
                        this.declaration_exp_f2();
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
    SHARCParser.prototype.declaration_exp4 = function () {
        var _localctx = new Declaration_exp4Context(this._ctx, this.state);
        this.enterRule(_localctx, 36, SHARCParser.RULE_declaration_exp4);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 421;
                this.match(SHARCParser.ID);
                this.state = 422;
                this.match(SHARCParser.LBRACKET);
                this.state = 423;
                this.value_exp();
                this.state = 424;
                this.match(SHARCParser.RBRACKET);
                this.state = 427;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.EQU) {
                    {
                        this.state = 425;
                        this.match(SHARCParser.EQU);
                        this.state = 426;
                        this.declaration_exp_f2();
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
    SHARCParser.prototype.declaration_exp5 = function () {
        var _localctx = new Declaration_exp5Context(this._ctx, this.state);
        this.enterRule(_localctx, 38, SHARCParser.RULE_declaration_exp5);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 429;
                this.match(SHARCParser.ID);
                this.state = 430;
                this.match(SHARCParser.EQU);
                this.state = 431;
                this.value_exp();
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
    SHARCParser.prototype.declaration_exp_f1 = function () {
        var _localctx = new Declaration_exp_f1Context(this._ctx, this.state);
        this.enterRule(_localctx, 40, SHARCParser.RULE_declaration_exp_f1);
        var _la;
        try {
            this.state = 442;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.CharLiteral:
                case SHARCParser.INT:
                case SHARCParser.LENGTH:
                case SHARCParser.MINUS:
                case SHARCParser.LPARENTHESE:
                case SHARCParser.AT:
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 433;
                        this.initExpression();
                        this.state = 438;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SHARCParser.COMMA) {
                            {
                                {
                                    this.state = 434;
                                    this.match(SHARCParser.COMMA);
                                    this.state = 435;
                                    this.initExpression();
                                }
                            }
                            this.state = 440;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SHARCParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 441;
                        this.match(SHARCParser.StringLiteral);
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
    SHARCParser.prototype.declaration_exp_f2 = function () {
        var _localctx = new Declaration_exp_f2Context(this._ctx, this.state);
        this.enterRule(_localctx, 42, SHARCParser.RULE_declaration_exp_f2);
        try {
            this.state = 449;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 444;
                        this.match(SHARCParser.LBRACE);
                        this.state = 445;
                        this.declaration_exp_f1();
                        this.state = 446;
                        this.match(SHARCParser.RBRACE);
                    }
                    break;
                case SHARCParser.StringLiteral:
                case SHARCParser.CharLiteral:
                case SHARCParser.INT:
                case SHARCParser.LENGTH:
                case SHARCParser.MINUS:
                case SHARCParser.LPARENTHESE:
                case SHARCParser.AT:
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 448;
                        this.declaration_exp_f1();
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
    SHARCParser.prototype.initExpression = function () {
        var _localctx = new InitExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SHARCParser.RULE_initExpression);
        try {
            this.state = 453;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.INT:
                case SHARCParser.LENGTH:
                case SHARCParser.MINUS:
                case SHARCParser.LPARENTHESE:
                case SHARCParser.AT:
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 451;
                        this.value_exp();
                    }
                    break;
                case SHARCParser.CharLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 452;
                        this.match(SHARCParser.CharLiteral);
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
    SHARCParser.prototype.var_addr = function () {
        var _localctx = new Var_addrContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SHARCParser.RULE_var_addr);
        try {
            this.state = 461;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 455;
                        this.match(SHARCParser.AT);
                        this.state = 456;
                        this.match(SHARCParser.ID);
                    }
                    break;
                case SHARCParser.LENGTH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 457;
                        this.match(SHARCParser.LENGTH);
                        this.state = 458;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 459;
                        this.match(SHARCParser.ID);
                        this.state = 460;
                        this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.value_exp = function () {
        var _localctx = new Value_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SHARCParser.RULE_value_exp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 463;
                this.value_exp2();
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
    SHARCParser.prototype.value_exp2 = function () {
        var _localctx = new Value_exp2Context(this._ctx, this.state);
        this.enterRule(_localctx, 50, SHARCParser.RULE_value_exp2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this.term();
                this.state = 470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & ((1 << (SHARCParser.PLUS - 377)) | (1 << (SHARCParser.MINUS - 377)) | (1 << (SHARCParser.MULT - 377)) | (1 << (SHARCParser.DIV - 377)) | (1 << (SHARCParser.DIV_MOD - 377)) | (1 << (SHARCParser.I_OR - 377)) | (1 << (SHARCParser.I_XOR - 377)))) !== 0)) {
                    {
                        {
                            this.state = 466;
                            _la = this._input.LA(1);
                            if (!(((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & ((1 << (SHARCParser.PLUS - 377)) | (1 << (SHARCParser.MINUS - 377)) | (1 << (SHARCParser.MULT - 377)) | (1 << (SHARCParser.DIV - 377)) | (1 << (SHARCParser.DIV_MOD - 377)) | (1 << (SHARCParser.I_OR - 377)) | (1 << (SHARCParser.I_XOR - 377)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 467;
                            this.term();
                        }
                    }
                    this.state = 472;
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
    SHARCParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SHARCParser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.MINUS) {
                    {
                        this.state = 473;
                        _localctx._op = this.match(SHARCParser.MINUS);
                    }
                }
                this.state = 476;
                this.factor();
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
    SHARCParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SHARCParser.RULE_factor);
        try {
            this.state = 483;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.INT:
                case SHARCParser.LENGTH:
                case SHARCParser.AT:
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 478;
                        this.atom();
                    }
                    break;
                case SHARCParser.LPARENTHESE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 479;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 480;
                        this.value_exp2();
                        this.state = 481;
                        this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SHARCParser.RULE_atom);
        try {
            this.state = 488;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.INT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 485;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case SHARCParser.LENGTH:
                case SHARCParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 486;
                        this.var_addr();
                    }
                    break;
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 487;
                        this.match(SHARCParser.ID);
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
    SHARCParser.prototype.compute = function () {
        var _localctx = new ComputeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SHARCParser.RULE_compute);
        try {
            this.state = 495;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 490;
                        this.dual_op();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 491;
                        this.fixpoint_alu_op();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 492;
                        this.floating_point_alu_op();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 493;
                        this.multi_op();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 494;
                        this.shifter_op();
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
    SHARCParser.prototype.if_compute_mov = function () {
        var _localctx = new If_compute_movContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SHARCParser.RULE_if_compute_mov);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 497;
                this.match(SHARCParser.IF);
                this.state = 498;
                this.condition();
                this.state = 499;
                this.if_compute_mov_exp();
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
    SHARCParser.prototype.if_compute_mov_exp = function () {
        var _localctx = new If_compute_mov_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, SHARCParser.RULE_if_compute_mov_exp);
        try {
            this.state = 503;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 501;
                        this.compute_mov_exp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 502;
                        this.compute();
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
    SHARCParser.prototype.compute_mov_exp = function () {
        var _localctx = new Compute_mov_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, SHARCParser.RULE_compute_mov_exp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 505;
                            this.compute();
                            this.state = 506;
                            this.match(SHARCParser.COMMA);
                        }
                        break;
                }
                this.state = 521;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 510;
                            this.mov_exp_1();
                        }
                        break;
                    case 2:
                        {
                            this.state = 511;
                            this.mov_exp_3a();
                        }
                        break;
                    case 3:
                        {
                            this.state = 512;
                            this.mov_exp_3b();
                        }
                        break;
                    case 4:
                        {
                            this.state = 513;
                            this.mov_exp_3c();
                        }
                        break;
                    case 5:
                        {
                            this.state = 514;
                            this.mov_exp_3d();
                        }
                        break;
                    case 6:
                        {
                            this.state = 515;
                            this.mov_exp_4a();
                        }
                        break;
                    case 7:
                        {
                            this.state = 516;
                            this.mov_exp_4b();
                        }
                        break;
                    case 8:
                        {
                            this.state = 517;
                            this.mov_exp_4c();
                        }
                        break;
                    case 9:
                        {
                            this.state = 518;
                            this.mov_exp_4d();
                        }
                        break;
                    case 10:
                        {
                            this.state = 519;
                            this.mov_exp_5();
                        }
                        break;
                    case 11:
                        {
                            this.state = 520;
                            this.mov_exp_7();
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
    SHARCParser.prototype.mov_exp_1 = function () {
        var _localctx = new Mov_exp_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 66, SHARCParser.RULE_mov_exp_1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 523;
                this.mov_exp_1_1();
                this.state = 524;
                this.match(SHARCParser.COMMA);
                this.state = 525;
                this.mov_exp_1_2();
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
    SHARCParser.prototype.mov_exp_1_1 = function () {
        var _localctx = new Mov_exp_1_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 68, SHARCParser.RULE_mov_exp_1_1);
        try {
            this.state = 535;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.DM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 527;
                        this.mem_addr_dm_ia_mb();
                        this.state = 528;
                        this.match(SHARCParser.EQU);
                        this.state = 529;
                        this.d_reg();
                    }
                    break;
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 531;
                        this.d_reg();
                        this.state = 532;
                        this.match(SHARCParser.EQU);
                        this.state = 533;
                        this.mem_addr_dm_ia_mb();
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
    SHARCParser.prototype.mov_exp_1_2 = function () {
        var _localctx = new Mov_exp_1_2Context(this._ctx, this.state);
        this.enterRule(_localctx, 70, SHARCParser.RULE_mov_exp_1_2);
        try {
            this.state = 545;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.PM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 537;
                        this.mem_addr_pm_ic_md();
                        this.state = 538;
                        this.match(SHARCParser.EQU);
                        this.state = 539;
                        this.d_reg();
                    }
                    break;
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 541;
                        this.d_reg();
                        this.state = 542;
                        this.match(SHARCParser.EQU);
                        this.state = 543;
                        this.mem_addr_pm_ic_md();
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
    SHARCParser.prototype.mov_exp_3a = function () {
        var _localctx = new Mov_exp_3aContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SHARCParser.RULE_mov_exp_3a);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 549;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 547;
                            this.mem_addr_dm_ia_mb();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 548;
                            this.mem_addr_pm_ic_md();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 551;
                this.match(SHARCParser.EQU);
                this.state = 552;
                this.u_reg();
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
    SHARCParser.prototype.mov_exp_3b = function () {
        var _localctx = new Mov_exp_3bContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SHARCParser.RULE_mov_exp_3b);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 556;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 554;
                            this.mem_addr_dm_mb_ia();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 555;
                            this.mem_addr_pm_md_ic();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 558;
                this.match(SHARCParser.EQU);
                this.state = 559;
                this.u_reg();
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
    SHARCParser.prototype.mov_exp_3c = function () {
        var _localctx = new Mov_exp_3cContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SHARCParser.RULE_mov_exp_3c);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this.u_reg();
                this.state = 562;
                this.match(SHARCParser.EQU);
                this.state = 565;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 563;
                            this.mem_addr_dm_ia_mb();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 564;
                            this.mem_addr_pm_ic_md();
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
    SHARCParser.prototype.mov_exp_3d = function () {
        var _localctx = new Mov_exp_3dContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, SHARCParser.RULE_mov_exp_3d);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 567;
                this.u_reg();
                this.state = 568;
                this.match(SHARCParser.EQU);
                this.state = 571;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 569;
                            this.mem_addr_dm_mb_ia();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 570;
                            this.mem_addr_pm_md_ic();
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
    SHARCParser.prototype.mov_exp_4a = function () {
        var _localctx = new Mov_exp_4aContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SHARCParser.RULE_mov_exp_4a);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 573;
                            this.mem_addr_dm_ia_int();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 574;
                            this.mem_addr_pm_ic_int();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 577;
                this.match(SHARCParser.EQU);
                this.state = 578;
                this.d_reg();
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
    SHARCParser.prototype.mov_exp_4b = function () {
        var _localctx = new Mov_exp_4bContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SHARCParser.RULE_mov_exp_4b);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                this.imm_mov_15a();
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
    SHARCParser.prototype.mov_exp_4c = function () {
        var _localctx = new Mov_exp_4cContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SHARCParser.RULE_mov_exp_4c);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 582;
                this.d_reg();
                this.state = 583;
                this.match(SHARCParser.EQU);
                this.state = 586;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 584;
                            this.mem_addr_dm_ia_int();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 585;
                            this.mem_addr_pm_ic_int();
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
    SHARCParser.prototype.mov_exp_4d = function () {
        var _localctx = new Mov_exp_4dContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SHARCParser.RULE_mov_exp_4d);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.imm_mov_15b();
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
    SHARCParser.prototype.mov_exp_5 = function () {
        var _localctx = new Mov_exp_5Context(this._ctx, this.state);
        this.enterRule(_localctx, 88, SHARCParser.RULE_mov_exp_5);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 590;
                this.u_reg2();
                this.state = 591;
                this.match(SHARCParser.EQU);
                this.state = 592;
                this.u_reg();
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
    SHARCParser.prototype.mov_exp_6a = function () {
        var _localctx = new Mov_exp_6aContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SHARCParser.RULE_mov_exp_6a);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 596;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 594;
                            this.mem_addr_dm_ia_mb();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 595;
                            this.mem_addr_pm_ic_md();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 598;
                this.match(SHARCParser.EQU);
                this.state = 599;
                this.d_reg();
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
    SHARCParser.prototype.mov_exp_6b = function () {
        var _localctx = new Mov_exp_6bContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SHARCParser.RULE_mov_exp_6b);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                this.d_reg();
                this.state = 602;
                this.match(SHARCParser.EQU);
                this.state = 605;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 603;
                            this.mem_addr_dm_ia_mb();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 604;
                            this.mem_addr_pm_ic_md();
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
    SHARCParser.prototype.mov_exp_7 = function () {
        var _localctx = new Mov_exp_7Context(this._ctx, this.state);
        this.enterRule(_localctx, 94, SHARCParser.RULE_mov_exp_7);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.match(SHARCParser.MODIFY);
                this.state = 620;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                    case 1:
                        {
                            this.state = 608;
                            this.match(SHARCParser.LPARENTHESE);
                            this.state = 609;
                            this.ia();
                            this.state = 610;
                            this.match(SHARCParser.COMMA);
                            this.state = 611;
                            this.mb();
                            this.state = 612;
                            this.match(SHARCParser.RPARENTHESE);
                        }
                        break;
                    case 2:
                        {
                            this.state = 614;
                            this.match(SHARCParser.LPARENTHESE);
                            this.state = 615;
                            this.ic();
                            this.state = 616;
                            this.match(SHARCParser.COMMA);
                            this.state = 617;
                            this.md();
                            this.state = 618;
                            this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_ia_mb = function () {
        var _localctx = new Mem_addr_ia_mbContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, SHARCParser.RULE_mem_addr_ia_mb);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 622;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 623;
                this.ia();
                this.state = 624;
                this.match(SHARCParser.COMMA);
                this.state = 625;
                this.mb();
                this.state = 626;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_ic_md = function () {
        var _localctx = new Mem_addr_ic_mdContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, SHARCParser.RULE_mem_addr_ic_md);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 628;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 629;
                this.ic();
                this.state = 630;
                this.match(SHARCParser.COMMA);
                this.state = 631;
                this.md();
                this.state = 632;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_md_ic = function () {
        var _localctx = new Mem_addr_md_icContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, SHARCParser.RULE_mem_addr_md_ic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 634;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 635;
                this.md();
                this.state = 636;
                this.match(SHARCParser.COMMA);
                this.state = 637;
                this.ic();
                this.state = 638;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_mb_ia = function () {
        var _localctx = new Mem_addr_mb_iaContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, SHARCParser.RULE_mem_addr_mb_ia);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 640;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 641;
                this.mb();
                this.state = 642;
                this.match(SHARCParser.COMMA);
                this.state = 643;
                this.ia();
                this.state = 644;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_ia_int = function () {
        var _localctx = new Mem_addr_ia_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, SHARCParser.RULE_mem_addr_ia_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 646;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 647;
                this.ia();
                this.state = 648;
                this.match(SHARCParser.COMMA);
                this.state = 649;
                this.value_exp();
                this.state = 650;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_ic_int = function () {
        var _localctx = new Mem_addr_ic_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, SHARCParser.RULE_mem_addr_ic_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 652;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 653;
                this.ic();
                this.state = 654;
                this.match(SHARCParser.COMMA);
                this.state = 655;
                this.value_exp();
                this.state = 656;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_int_ia = function () {
        var _localctx = new Mem_addr_int_iaContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, SHARCParser.RULE_mem_addr_int_ia);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 658;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 659;
                this.value_exp();
                this.state = 660;
                this.match(SHARCParser.COMMA);
                this.state = 661;
                this.ia();
                this.state = 662;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_int_ic = function () {
        var _localctx = new Mem_addr_int_icContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, SHARCParser.RULE_mem_addr_int_ic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 664;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 665;
                this.value_exp();
                this.state = 666;
                this.match(SHARCParser.COMMA);
                this.state = 667;
                this.ic();
                this.state = 668;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.mem_addr_int = function () {
        var _localctx = new Mem_addr_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, SHARCParser.RULE_mem_addr_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
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
    SHARCParser.prototype.mem_addr_int_ = function () {
        var _localctx = new Mem_addr_int_Context(this._ctx, this.state);
        this.enterRule(_localctx, 114, SHARCParser.RULE_mem_addr_int_);
        var _la;
        try {
            this.state = 677;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 672;
                        this.atom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 673;
                        this.atom();
                        this.state = 674;
                        _la = this._input.LA(1);
                        if (!(_la === SHARCParser.PLUS || _la === SHARCParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 675;
                        this.atom();
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
    SHARCParser.prototype.mem_addr_dm_ia_mb = function () {
        var _localctx = new Mem_addr_dm_ia_mbContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, SHARCParser.RULE_mem_addr_dm_ia_mb);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 679;
                this.match(SHARCParser.DM);
                this.state = 680;
                this.mem_addr_ia_mb();
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
    SHARCParser.prototype.mem_addr_pm_ic_md = function () {
        var _localctx = new Mem_addr_pm_ic_mdContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, SHARCParser.RULE_mem_addr_pm_ic_md);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 682;
                this.match(SHARCParser.PM);
                this.state = 683;
                this.mem_addr_ic_md();
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
    SHARCParser.prototype.mem_addr_dm_mb_ia = function () {
        var _localctx = new Mem_addr_dm_mb_iaContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, SHARCParser.RULE_mem_addr_dm_mb_ia);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 685;
                this.match(SHARCParser.DM);
                this.state = 686;
                this.mem_addr_mb_ia();
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
    SHARCParser.prototype.mem_addr_pm_md_ic = function () {
        var _localctx = new Mem_addr_pm_md_icContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, SHARCParser.RULE_mem_addr_pm_md_ic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                this.match(SHARCParser.PM);
                this.state = 689;
                this.mem_addr_md_ic();
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
    SHARCParser.prototype.mem_addr_dm_ia_int = function () {
        var _localctx = new Mem_addr_dm_ia_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, SHARCParser.RULE_mem_addr_dm_ia_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 691;
                this.match(SHARCParser.DM);
                this.state = 692;
                this.mem_addr_ia_int();
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
    SHARCParser.prototype.mem_addr_pm_ic_int = function () {
        var _localctx = new Mem_addr_pm_ic_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, SHARCParser.RULE_mem_addr_pm_ic_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                this.match(SHARCParser.PM);
                this.state = 695;
                this.mem_addr_ic_int();
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
    SHARCParser.prototype.mem_addr_dm_int_ia = function () {
        var _localctx = new Mem_addr_dm_int_iaContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, SHARCParser.RULE_mem_addr_dm_int_ia);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 697;
                this.match(SHARCParser.DM);
                this.state = 698;
                this.mem_addr_int_ia();
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
    SHARCParser.prototype.mem_addr_pm_int_ic = function () {
        var _localctx = new Mem_addr_pm_int_icContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, SHARCParser.RULE_mem_addr_pm_int_ic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 700;
                this.match(SHARCParser.PM);
                this.state = 701;
                this.mem_addr_int_ic();
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
    SHARCParser.prototype.mem_addr_dm_int = function () {
        var _localctx = new Mem_addr_dm_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, SHARCParser.RULE_mem_addr_dm_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 703;
                this.match(SHARCParser.DM);
                this.state = 704;
                this.mem_addr_int();
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
    SHARCParser.prototype.mem_addr_pm_int = function () {
        var _localctx = new Mem_addr_pm_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, SHARCParser.RULE_mem_addr_pm_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 706;
                this.match(SHARCParser.PM);
                this.state = 707;
                this.mem_addr_int();
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
    SHARCParser.prototype.fixpoint_alu_op = function () {
        var _localctx = new Fixpoint_alu_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, SHARCParser.RULE_fixpoint_alu_op);
        try {
            this.state = 720;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 709;
                        this.r_reg();
                        this.state = 710;
                        this.match(SHARCParser.EQU);
                        this.state = 711;
                        this.r_exp();
                    }
                    break;
                case SHARCParser.COMP:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 713;
                        this.match(SHARCParser.COMP);
                        this.state = 714;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 715;
                        this.r_reg();
                        this.state = 716;
                        this.match(SHARCParser.COMMA);
                        this.state = 717;
                        this.r_reg();
                        this.state = 718;
                        this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.r_exp = function () {
        var _localctx = new R_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, SHARCParser.RULE_r_exp);
        var _la;
        try {
            this.state = 821;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 722;
                        this.r_reg();
                        this.state = 723;
                        this.add_or_sub();
                        this.state = 724;
                        this.r_reg();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 726;
                        this.r_reg();
                        this.state = 727;
                        this.match(SHARCParser.PLUS);
                        this.state = 728;
                        this.r_reg();
                        this.state = 729;
                        this.match(SHARCParser.PLUS);
                        this.state = 730;
                        this.match(SHARCParser.CI);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 732;
                        this.r_reg();
                        this.state = 733;
                        this.match(SHARCParser.PLUS);
                        this.state = 734;
                        this.r_reg();
                        this.state = 735;
                        this.match(SHARCParser.PLUS);
                        this.state = 736;
                        this.match(SHARCParser.CI);
                        this.state = 737;
                        this.match(SHARCParser.MINUS);
                        this.state = 738;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 740;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 741;
                        this.r_reg();
                        this.state = 742;
                        this.match(SHARCParser.PLUS);
                        this.state = 743;
                        this.r_reg();
                        this.state = 744;
                        this.match(SHARCParser.RPARENTHESE);
                        this.state = 745;
                        this.match(SHARCParser.DIV);
                        this.state = 746;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 748;
                        this.r_reg();
                        this.state = 749;
                        this.match(SHARCParser.PLUS);
                        this.state = 750;
                        this.match(SHARCParser.CI);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 752;
                        this.r_reg();
                        this.state = 753;
                        this.match(SHARCParser.PLUS);
                        this.state = 754;
                        this.match(SHARCParser.CI);
                        this.state = 755;
                        this.match(SHARCParser.MINUS);
                        this.state = 756;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 758;
                        this.r_reg();
                        this.state = 759;
                        this.match(SHARCParser.PLUS);
                        this.state = 760;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 762;
                        this.r_reg();
                        this.state = 763;
                        this.match(SHARCParser.MINUS);
                        this.state = 764;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 766;
                        this.match(SHARCParser.MINUS);
                        this.state = 767;
                        this.r_reg();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 768;
                        this.match(SHARCParser.ABS);
                        this.state = 769;
                        this.r_reg();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 770;
                        this.match(SHARCParser.PASS);
                        this.state = 771;
                        this.r_reg();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 772;
                        this.r_reg();
                        this.state = 773;
                        this.match(SHARCParser.AND);
                        this.state = 774;
                        this.r_reg();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 776;
                        this.r_reg();
                        this.state = 777;
                        this.match(SHARCParser.OR);
                        this.state = 778;
                        this.r_reg();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 780;
                        this.r_reg();
                        this.state = 781;
                        this.match(SHARCParser.XOR);
                        this.state = 782;
                        this.r_reg();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 784;
                        this.match(SHARCParser.NOT);
                        this.state = 785;
                        this.r_reg();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 786;
                        this.match(SHARCParser.MIN);
                        this.state = 787;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 788;
                        this.r_reg();
                        this.state = 789;
                        this.match(SHARCParser.COMMA);
                        this.state = 790;
                        this.r_reg();
                        this.state = 791;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 793;
                        this.match(SHARCParser.MAX);
                        this.state = 794;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 795;
                        this.r_reg();
                        this.state = 796;
                        this.match(SHARCParser.COMMA);
                        this.state = 797;
                        this.r_reg();
                        this.state = 798;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 800;
                        this.match(SHARCParser.CLIP);
                        this.state = 801;
                        this.r_reg();
                        this.state = 802;
                        this.match(SHARCParser.BY);
                        this.state = 803;
                        this.r_reg();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 805;
                        this.match(SHARCParser.MANT);
                        this.state = 806;
                        this.f_reg();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 807;
                        this.match(SHARCParser.LOGB);
                        this.state = 808;
                        this.f_reg();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 809;
                        this.match(SHARCParser.FIX);
                        this.state = 810;
                        this.f_reg();
                        this.state = 813;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.BY) {
                            {
                                this.state = 811;
                                this.match(SHARCParser.BY);
                                this.state = 812;
                                this.r_reg();
                            }
                        }
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 815;
                        this.match(SHARCParser.TRUNC);
                        this.state = 816;
                        this.f_reg();
                        this.state = 819;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.BY) {
                            {
                                this.state = 817;
                                this.match(SHARCParser.BY);
                                this.state = 818;
                                this.r_reg();
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
    SHARCParser.prototype.floating_point_alu_op = function () {
        var _localctx = new Floating_point_alu_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, SHARCParser.RULE_floating_point_alu_op);
        try {
            this.state = 834;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 823;
                        this.f_reg();
                        this.state = 824;
                        this.match(SHARCParser.EQU);
                        this.state = 825;
                        this.f_exp();
                    }
                    break;
                case SHARCParser.COMP:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 827;
                        this.match(SHARCParser.COMP);
                        this.state = 828;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 829;
                        this.f_reg();
                        this.state = 830;
                        this.match(SHARCParser.COMMA);
                        this.state = 831;
                        this.f_reg();
                        this.state = 832;
                        this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.f_exp = function () {
        var _localctx = new F_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, SHARCParser.RULE_f_exp);
        var _la;
        try {
            this.state = 916;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 836;
                        this.f_reg();
                        this.state = 837;
                        this.match(SHARCParser.PLUS);
                        this.state = 838;
                        this.f_reg();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 840;
                        this.f_reg();
                        this.state = 841;
                        this.match(SHARCParser.MINUS);
                        this.state = 842;
                        this.f_reg();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 844;
                        this.match(SHARCParser.ABS);
                        this.state = 845;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 846;
                        this.f_reg();
                        this.state = 847;
                        this.match(SHARCParser.PLUS);
                        this.state = 848;
                        this.f_reg();
                        this.state = 849;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 851;
                        this.match(SHARCParser.ABS);
                        this.state = 852;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 853;
                        this.f_reg();
                        this.state = 854;
                        this.match(SHARCParser.MINUS);
                        this.state = 855;
                        this.f_reg();
                        this.state = 856;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 858;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 859;
                        this.f_reg();
                        this.state = 860;
                        this.match(SHARCParser.PLUS);
                        this.state = 861;
                        this.f_reg();
                        this.state = 862;
                        this.match(SHARCParser.RPARENTHESE);
                        this.state = 863;
                        this.match(SHARCParser.DIV);
                        this.state = 864;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 866;
                        this.match(SHARCParser.MINUS);
                        this.state = 867;
                        this.f_reg();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 868;
                        this.match(SHARCParser.ABS);
                        this.state = 869;
                        this.f_reg();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 870;
                        this.match(SHARCParser.PASS);
                        this.state = 871;
                        this.f_reg();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 872;
                        this.match(SHARCParser.RND);
                        this.state = 873;
                        this.f_reg();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 874;
                        this.match(SHARCParser.SCALB);
                        this.state = 875;
                        this.f_reg();
                        this.state = 876;
                        this.match(SHARCParser.BY);
                        this.state = 877;
                        this.r_reg();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 879;
                        this.match(SHARCParser.FLOAT);
                        this.state = 880;
                        this.r_reg();
                        this.state = 883;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.BY) {
                            {
                                this.state = 881;
                                this.match(SHARCParser.BY);
                                this.state = 882;
                                this.r_reg();
                            }
                        }
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 885;
                        this.match(SHARCParser.RECIPS);
                        this.state = 886;
                        this.f_reg();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 887;
                        this.match(SHARCParser.RSQRTS);
                        this.state = 888;
                        this.f_reg();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 889;
                        this.f_reg();
                        this.state = 890;
                        this.match(SHARCParser.COPYSIGN);
                        this.state = 891;
                        this.f_reg();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 893;
                        this.match(SHARCParser.MIN);
                        this.state = 894;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 895;
                        this.f_reg();
                        this.state = 896;
                        this.match(SHARCParser.COMMA);
                        this.state = 897;
                        this.f_reg();
                        this.state = 898;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 900;
                        this.match(SHARCParser.MAX);
                        this.state = 901;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 902;
                        this.f_reg();
                        this.state = 903;
                        this.match(SHARCParser.COMMA);
                        this.state = 904;
                        this.f_reg();
                        this.state = 905;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 907;
                        this.match(SHARCParser.CLIP);
                        this.state = 908;
                        this.f_reg();
                        this.state = 909;
                        this.match(SHARCParser.BY);
                        this.state = 910;
                        this.f_reg();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 912;
                        this.f_reg();
                        this.state = 913;
                        this.match(SHARCParser.MULT);
                        this.state = 914;
                        this.f_reg();
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
    SHARCParser.prototype.multi_op = function () {
        var _localctx = new Multi_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, SHARCParser.RULE_multi_op);
        try {
            this.state = 945;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 918;
                        this.r_reg();
                        this.state = 919;
                        this.match(SHARCParser.EQU);
                        this.state = 920;
                        this.multi_exp_r();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 922;
                        this.match(SHARCParser.MRF);
                        this.state = 923;
                        this.match(SHARCParser.EQU);
                        this.state = 924;
                        this.multi_exp_mrf();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 925;
                        this.match(SHARCParser.MRB);
                        this.state = 926;
                        this.match(SHARCParser.EQU);
                        this.state = 927;
                        this.multi_exp_mrb();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 928;
                        this.mr();
                        this.state = 929;
                        this.match(SHARCParser.EQU);
                        this.state = 930;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 934;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SHARCParser.MR0F:
                            case SHARCParser.MR1F:
                            case SHARCParser.MR2F:
                                {
                                    this.state = 932;
                                    this.mrf();
                                }
                                break;
                            case SHARCParser.MR0B:
                            case SHARCParser.MR1B:
                            case SHARCParser.MR2B:
                                {
                                    this.state = 933;
                                    this.mrb();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 936;
                        this.match(SHARCParser.EQU);
                        this.state = 937;
                        this.r_reg();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 939;
                        this.r_reg();
                        this.state = 940;
                        this.match(SHARCParser.EQU);
                        this.state = 943;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SHARCParser.MR0F:
                            case SHARCParser.MR1F:
                            case SHARCParser.MR2F:
                                {
                                    this.state = 941;
                                    this.mrf();
                                }
                                break;
                            case SHARCParser.MR0B:
                            case SHARCParser.MR1B:
                            case SHARCParser.MR2B:
                                {
                                    this.state = 942;
                                    this.mrb();
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
    SHARCParser.prototype.multi_r = function () {
        var _localctx = new Multi_rContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, SHARCParser.RULE_multi_r);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 947;
                this.r_reg();
                this.state = 948;
                this.match(SHARCParser.MULT);
                this.state = 949;
                this.r_reg();
                this.state = 951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.LPARENTHESE) {
                    {
                        this.state = 950;
                        this.multi_mod2();
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
    SHARCParser.prototype.multi_exp_r = function () {
        var _localctx = new Multi_exp_rContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, SHARCParser.RULE_multi_exp_r);
        var _la;
        try {
            this.state = 969;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 953;
                        this.multi_r();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 954;
                        this.mr();
                        this.state = 955;
                        this.add_or_sub();
                        this.state = 956;
                        this.multi_r();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 958;
                        this.match(SHARCParser.SAT);
                        this.state = 959;
                        this.mr();
                        this.state = 961;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 960;
                                this.multi_mod1();
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 963;
                        this.match(SHARCParser.RND);
                        this.state = 964;
                        this.mr();
                        this.state = 966;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 965;
                                this.multi_mod1();
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 968;
                        this.mr();
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
    SHARCParser.prototype.multi_exp_mrf = function () {
        var _localctx = new Multi_exp_mrfContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, SHARCParser.RULE_multi_exp_mrf);
        var _la;
        try {
            this.state = 986;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 971;
                        this.multi_r();
                    }
                    break;
                case SHARCParser.MRF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 972;
                        this.match(SHARCParser.MRF);
                        this.state = 973;
                        this.add_or_sub();
                        this.state = 974;
                        this.multi_r();
                    }
                    break;
                case SHARCParser.SAT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 976;
                        this.match(SHARCParser.SAT);
                        this.state = 977;
                        this.match(SHARCParser.MRF);
                        this.state = 979;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 978;
                                this.multi_mod1();
                            }
                        }
                    }
                    break;
                case SHARCParser.RND:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 981;
                        this.match(SHARCParser.RND);
                        this.state = 982;
                        this.match(SHARCParser.MRF);
                        this.state = 984;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 983;
                                this.multi_mod1();
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
    SHARCParser.prototype.multi_exp_mrb = function () {
        var _localctx = new Multi_exp_mrbContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, SHARCParser.RULE_multi_exp_mrb);
        var _la;
        try {
            this.state = 1003;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 988;
                        this.multi_r();
                    }
                    break;
                case SHARCParser.MRB:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 989;
                        this.match(SHARCParser.MRB);
                        this.state = 990;
                        this.add_or_sub();
                        this.state = 991;
                        this.multi_r();
                    }
                    break;
                case SHARCParser.SAT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 993;
                        this.match(SHARCParser.SAT);
                        this.state = 994;
                        this.match(SHARCParser.MRB);
                        this.state = 996;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 995;
                                this.multi_mod1();
                            }
                        }
                    }
                    break;
                case SHARCParser.RND:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 998;
                        this.match(SHARCParser.RND);
                        this.state = 999;
                        this.match(SHARCParser.MRB);
                        this.state = 1001;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 1000;
                                this.multi_mod1();
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
    SHARCParser.prototype.mr = function () {
        var _localctx = new MrContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, SHARCParser.RULE_mr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1005;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.MRB || _la === SHARCParser.MRF)) {
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
    SHARCParser.prototype.shifter_op = function () {
        var _localctx = new Shifter_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, SHARCParser.RULE_shifter_op);
        try {
            this.state = 1021;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1007;
                        this.r_reg();
                        this.state = 1008;
                        this.match(SHARCParser.EQU);
                        this.state = 1009;
                        this.shifter_exp();
                    }
                    break;
                case SHARCParser.BTST:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1011;
                        this.match(SHARCParser.BTST);
                        this.state = 1012;
                        this.r_reg();
                        this.state = 1013;
                        this.match(SHARCParser.BY);
                        this.state = 1014;
                        this.sec_op();
                    }
                    break;
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1016;
                        this.f_reg();
                        this.state = 1017;
                        this.match(SHARCParser.EQU);
                        this.state = 1018;
                        this.match(SHARCParser.FUNPACK);
                        this.state = 1019;
                        this.r_reg();
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
    SHARCParser.prototype.shifter_exp = function () {
        var _localctx = new Shifter_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, SHARCParser.RULE_shifter_exp);
        var _la;
        try {
            this.state = 1105;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1023;
                        this.match(SHARCParser.LSHIFT);
                        this.state = 1024;
                        this.r_reg();
                        this.state = 1025;
                        this.match(SHARCParser.BY);
                        this.state = 1026;
                        this.sec_op();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1028;
                        this.r_reg();
                        this.state = 1029;
                        this.match(SHARCParser.OR);
                        this.state = 1030;
                        this.match(SHARCParser.LSHIFT);
                        this.state = 1031;
                        this.r_reg();
                        this.state = 1032;
                        this.match(SHARCParser.BY);
                        this.state = 1033;
                        this.sec_op();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1035;
                        this.match(SHARCParser.ASHIFT);
                        this.state = 1036;
                        this.r_reg();
                        this.state = 1037;
                        this.match(SHARCParser.BY);
                        this.state = 1038;
                        this.sec_op();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1040;
                        this.r_reg();
                        this.state = 1041;
                        this.match(SHARCParser.OR);
                        this.state = 1042;
                        this.match(SHARCParser.ASHIFT);
                        this.state = 1043;
                        this.r_reg();
                        this.state = 1044;
                        this.match(SHARCParser.BY);
                        this.state = 1045;
                        this.sec_op();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1047;
                        this.match(SHARCParser.ROT);
                        this.state = 1048;
                        this.r_reg();
                        this.state = 1049;
                        this.match(SHARCParser.BY);
                        this.state = 1050;
                        this.sec_op();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1052;
                        this.match(SHARCParser.BCLR);
                        this.state = 1053;
                        this.r_reg();
                        this.state = 1054;
                        this.match(SHARCParser.BY);
                        this.state = 1055;
                        this.sec_op();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1057;
                        this.match(SHARCParser.BSET);
                        this.state = 1058;
                        this.r_reg();
                        this.state = 1059;
                        this.match(SHARCParser.BY);
                        this.state = 1060;
                        this.sec_op();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1062;
                        this.match(SHARCParser.BTGL);
                        this.state = 1063;
                        this.r_reg();
                        this.state = 1064;
                        this.match(SHARCParser.BY);
                        this.state = 1065;
                        this.sec_op();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1067;
                        this.match(SHARCParser.FDEP);
                        this.state = 1068;
                        this.r_reg();
                        this.state = 1069;
                        this.match(SHARCParser.BY);
                        this.state = 1070;
                        this.sec_op2();
                        this.state = 1074;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 1071;
                                this.match(SHARCParser.LPARENTHESE);
                                this.state = 1072;
                                this.match(SHARCParser.SE);
                                this.state = 1073;
                                this.match(SHARCParser.RPARENTHESE);
                            }
                        }
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1076;
                        this.match(SHARCParser.FEXT);
                        this.state = 1077;
                        this.r_reg();
                        this.state = 1078;
                        this.match(SHARCParser.BY);
                        this.state = 1079;
                        this.sec_op2();
                        this.state = 1083;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 1080;
                                this.match(SHARCParser.LPARENTHESE);
                                this.state = 1081;
                                this.match(SHARCParser.SE);
                                this.state = 1082;
                                this.match(SHARCParser.RPARENTHESE);
                            }
                        }
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1085;
                        this.r_reg();
                        this.state = 1086;
                        this.match(SHARCParser.OR);
                        this.state = 1087;
                        this.match(SHARCParser.FDEP);
                        this.state = 1088;
                        this.r_reg();
                        this.state = 1089;
                        this.match(SHARCParser.BY);
                        this.state = 1090;
                        this.sec_op2();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1092;
                        this.match(SHARCParser.EXP);
                        this.state = 1093;
                        this.r_reg();
                        this.state = 1097;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 1094;
                                this.match(SHARCParser.LPARENTHESE);
                                this.state = 1095;
                                this.match(SHARCParser.EX);
                                this.state = 1096;
                                this.match(SHARCParser.RPARENTHESE);
                            }
                        }
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1099;
                        this.match(SHARCParser.LEFTZ);
                        this.state = 1100;
                        this.r_reg();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1101;
                        this.match(SHARCParser.LEFTO);
                        this.state = 1102;
                        this.r_reg();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1103;
                        this.match(SHARCParser.FPACK);
                        this.state = 1104;
                        this.f_reg();
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
    SHARCParser.prototype.sec_op = function () {
        var _localctx = new Sec_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, SHARCParser.RULE_sec_op);
        try {
            this.state = 1111;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1107;
                        this.r_reg();
                    }
                    break;
                case SHARCParser.INT:
                case SHARCParser.LENGTH:
                case SHARCParser.AT:
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1108;
                        this.atom();
                    }
                    break;
                case SHARCParser.MINUS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1109;
                        this.match(SHARCParser.MINUS);
                        this.state = 1110;
                        this.atom();
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
    SHARCParser.prototype.sec_op2 = function () {
        var _localctx = new Sec_op2Context(this._ctx, this.state);
        this.enterRule(_localctx, 162, SHARCParser.RULE_sec_op2);
        try {
            this.state = 1115;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1113;
                        this.r_reg();
                    }
                    break;
                case SHARCParser.INT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1114;
                        this.bit_data();
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
    SHARCParser.prototype.bit_data = function () {
        var _localctx = new Bit_dataContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, SHARCParser.RULE_bit_data);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1117;
                this.match(SHARCParser.INT);
                this.state = 1118;
                this.match(SHARCParser.COLON);
                this.state = 1119;
                this.match(SHARCParser.INT);
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
    SHARCParser.prototype.add_or_sub = function () {
        var _localctx = new Add_or_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, SHARCParser.RULE_add_or_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1121;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.PLUS || _la === SHARCParser.MINUS)) {
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
    SHARCParser.prototype.dual_op = function () {
        var _localctx = new Dual_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, SHARCParser.RULE_dual_op);
        try {
            this.state = 1125;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1123;
                        this.dual_add_r();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1124;
                        this.parallel_multi();
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
    SHARCParser.prototype.dual_add_r = function () {
        var _localctx = new Dual_add_rContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, SHARCParser.RULE_dual_add_r);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1127;
                this.r_reg();
                this.state = 1128;
                this.match(SHARCParser.EQU);
                this.state = 1129;
                this.r_reg();
                this.state = 1130;
                this.match(SHARCParser.PLUS);
                this.state = 1131;
                this.r_reg();
                this.state = 1132;
                this.match(SHARCParser.COMMA);
                this.state = 1133;
                this.r_reg();
                this.state = 1134;
                this.match(SHARCParser.EQU);
                this.state = 1135;
                this.r_reg();
                this.state = 1136;
                this.match(SHARCParser.MINUS);
                this.state = 1137;
                this.r_reg();
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
    SHARCParser.prototype.parallel_multi = function () {
        var _localctx = new Parallel_multiContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, SHARCParser.RULE_parallel_multi);
        try {
            var _alt = void 0;
            this.state = 1153;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.MR0B:
                case SHARCParser.MR0F:
                case SHARCParser.MR1B:
                case SHARCParser.MR1F:
                case SHARCParser.MR2B:
                case SHARCParser.MR2F:
                case SHARCParser.MRB:
                case SHARCParser.MRF:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1139;
                        this.multi_op();
                        this.state = 1142;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 1140;
                                            this.match(SHARCParser.COMMA);
                                            this.state = 1141;
                                            this.fixpoint_alu_op();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1144;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case SHARCParser.COMP:
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1146;
                        this.floating_point_alu_op();
                        this.state = 1149;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 1147;
                                            this.match(SHARCParser.COMMA);
                                            this.state = 1148;
                                            this.floating_point_alu_op();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1151;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    SHARCParser.prototype.flow_control_exp = function () {
        var _localctx = new Flow_control_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, SHARCParser.RULE_flow_control_exp);
        try {
            this.state = 1166;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1155;
                        this.flow_contorl_8();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1156;
                        this.flow_control_9_and_11();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1157;
                        this.flow_control_10();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1158;
                        this.flow_control_8a();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1159;
                        this.flow_control_8b();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1160;
                        this.flow_control_9a();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1161;
                        this.flow_control_9b();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1162;
                        this.flow_control_11a();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1163;
                        this.flow_control_11b();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1164;
                        this.flow_control_12();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1165;
                        this.flow_control_13();
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
    SHARCParser.prototype.flow_contorl_8 = function () {
        var _localctx = new Flow_contorl_8Context(this._ctx, this.state);
        this.enterRule(_localctx, 176, SHARCParser.RULE_flow_contorl_8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1168;
                this.match(SHARCParser.IF);
                this.state = 1169;
                this.condition();
                this.state = 1170;
                this.flow_contorl_8_exp();
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
    SHARCParser.prototype.flow_contorl_8_exp = function () {
        var _localctx = new Flow_contorl_8_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, SHARCParser.RULE_flow_contorl_8_exp);
        try {
            this.state = 1174;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.JUMP:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1172;
                        this.flow_control_8a();
                    }
                    break;
                case SHARCParser.CALL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1173;
                        this.flow_control_8b();
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
    SHARCParser.prototype.flow_control_9_and_11 = function () {
        var _localctx = new Flow_control_9_and_11Context(this._ctx, this.state);
        this.enterRule(_localctx, 180, SHARCParser.RULE_flow_control_9_and_11);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1176;
                this.match(SHARCParser.IF);
                this.state = 1177;
                this.condition();
                this.state = 1178;
                this.flow_control_9_and_11_exp();
                this.state = 1179;
                this.match(SHARCParser.COMMA);
                this.state = 1180;
                this.match(SHARCParser.ELSE);
                this.state = 1181;
                this.compute();
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
    SHARCParser.prototype.flow_control_9_and_11_exp = function () {
        var _localctx = new Flow_control_9_and_11_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, SHARCParser.RULE_flow_control_9_and_11_exp);
        try {
            this.state = 1187;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.JUMP:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1183;
                        this.flow_control_9a();
                    }
                    break;
                case SHARCParser.CALL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1184;
                        this.flow_control_9b();
                    }
                    break;
                case SHARCParser.RTS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1185;
                        this.flow_control_11a();
                    }
                    break;
                case SHARCParser.RTI:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1186;
                        this.flow_control_11b();
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
    SHARCParser.prototype.flow_control_10 = function () {
        var _localctx = new Flow_control_10Context(this._ctx, this.state);
        this.enterRule(_localctx, 184, SHARCParser.RULE_flow_control_10);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1189;
                this.match(SHARCParser.IF);
                this.state = 1190;
                this.condition();
                this.state = 1191;
                this.match(SHARCParser.JUMP);
                this.state = 1192;
                this.flow_control_10_frag();
                this.state = 1193;
                this.match(SHARCParser.COMMA);
                this.state = 1194;
                this.match(SHARCParser.ELSE);
                this.state = 1198;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 1195;
                            this.compute();
                            this.state = 1196;
                            this.match(SHARCParser.COMMA);
                        }
                        break;
                }
                this.state = 1200;
                this.mov_exp_1_1();
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
    SHARCParser.prototype.flow_control_10_frag = function () {
        var _localctx = new Flow_control_10_fragContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, SHARCParser.RULE_flow_control_10_frag);
        try {
            this.state = 1204;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1202;
                        this.mem_addr_md_ic();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1203;
                        this.jump_addr_pc();
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
    SHARCParser.prototype.flow_control_12 = function () {
        var _localctx = new Flow_control_12Context(this._ctx, this.state);
        this.enterRule(_localctx, 188, SHARCParser.RULE_flow_control_12);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1206;
                this.match(SHARCParser.LCNTR);
                this.state = 1207;
                this.match(SHARCParser.EQU);
                this.state = 1208;
                this.lcntr_v();
                {
                    this.state = 1209;
                    this.match(SHARCParser.COMMA);
                    this.state = 1210;
                    this.match(SHARCParser.DO);
                    this.state = 1211;
                    this.jump_addr_int_or_pc();
                    this.state = 1212;
                    this.match(SHARCParser.UNTIL);
                    this.state = 1213;
                    this.match(SHARCParser.LCE);
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
    SHARCParser.prototype.lcntr_v = function () {
        var _localctx = new Lcntr_vContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, SHARCParser.RULE_lcntr_v);
        try {
            this.state = 1217;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.INT:
                case SHARCParser.LENGTH:
                case SHARCParser.MINUS:
                case SHARCParser.LPARENTHESE:
                case SHARCParser.AT:
                case SHARCParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1215;
                        this.value_exp();
                    }
                    break;
                case SHARCParser.ASTAT:
                case SHARCParser.B0:
                case SHARCParser.B1:
                case SHARCParser.B2:
                case SHARCParser.B3:
                case SHARCParser.B4:
                case SHARCParser.B5:
                case SHARCParser.B6:
                case SHARCParser.B7:
                case SHARCParser.B8:
                case SHARCParser.B9:
                case SHARCParser.B10:
                case SHARCParser.B11:
                case SHARCParser.B12:
                case SHARCParser.B13:
                case SHARCParser.B14:
                case SHARCParser.B15:
                case SHARCParser.CURLCNTR:
                case SHARCParser.DADDR:
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                case SHARCParser.FADDR:
                case SHARCParser.I0:
                case SHARCParser.I1:
                case SHARCParser.I2:
                case SHARCParser.I3:
                case SHARCParser.I4:
                case SHARCParser.I5:
                case SHARCParser.I6:
                case SHARCParser.I7:
                case SHARCParser.I8:
                case SHARCParser.I9:
                case SHARCParser.I10:
                case SHARCParser.I11:
                case SHARCParser.I12:
                case SHARCParser.I13:
                case SHARCParser.I14:
                case SHARCParser.I15:
                case SHARCParser.IMASK:
                case SHARCParser.IMASKP:
                case SHARCParser.IRPTL:
                case SHARCParser.L0:
                case SHARCParser.L1:
                case SHARCParser.L2:
                case SHARCParser.L3:
                case SHARCParser.L4:
                case SHARCParser.L5:
                case SHARCParser.L6:
                case SHARCParser.L7:
                case SHARCParser.L8:
                case SHARCParser.L9:
                case SHARCParser.L10:
                case SHARCParser.L11:
                case SHARCParser.L12:
                case SHARCParser.L13:
                case SHARCParser.L14:
                case SHARCParser.L15:
                case SHARCParser.LADDR:
                case SHARCParser.LCNTR:
                case SHARCParser.M0:
                case SHARCParser.M1:
                case SHARCParser.M2:
                case SHARCParser.M3:
                case SHARCParser.M4:
                case SHARCParser.M5:
                case SHARCParser.M6:
                case SHARCParser.M7:
                case SHARCParser.M8:
                case SHARCParser.M9:
                case SHARCParser.M10:
                case SHARCParser.M11:
                case SHARCParser.M12:
                case SHARCParser.M13:
                case SHARCParser.M14:
                case SHARCParser.M15:
                case SHARCParser.MODE1:
                case SHARCParser.MODE2:
                case SHARCParser.PC:
                case SHARCParser.PCSTK:
                case SHARCParser.PCSTKP:
                case SHARCParser.PX:
                case SHARCParser.PX1:
                case SHARCParser.PX2:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                case SHARCParser.STKY:
                case SHARCParser.TCOUNT:
                case SHARCParser.TPERIOD:
                case SHARCParser.USTAT1:
                case SHARCParser.USTAT2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1216;
                        this.u_reg();
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
    SHARCParser.prototype.flow_control_13 = function () {
        var _localctx = new Flow_control_13Context(this._ctx, this.state);
        this.enterRule(_localctx, 192, SHARCParser.RULE_flow_control_13);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1219;
                this.match(SHARCParser.DO);
                this.state = 1220;
                this.jump_addr_int_or_pc();
                this.state = 1221;
                this.match(SHARCParser.UNTIL);
                this.state = 1222;
                this.condition();
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
    SHARCParser.prototype.flow_control_8a = function () {
        var _localctx = new Flow_control_8aContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, SHARCParser.RULE_flow_control_8a);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1224;
                this.match(SHARCParser.JUMP);
                this.state = 1225;
                this.jump_addr_int();
                this.state = 1227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.LPARENTHESE) {
                    {
                        this.state = 1226;
                        this.jump_modifier();
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
    SHARCParser.prototype.flow_control_8b = function () {
        var _localctx = new Flow_control_8bContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, SHARCParser.RULE_flow_control_8b);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1229;
                this.match(SHARCParser.CALL);
                this.state = 1230;
                this.jump_addr_int();
                this.state = 1232;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.LPARENTHESE) {
                    {
                        this.state = 1231;
                        this.jump_modifier2();
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
    SHARCParser.prototype.flow_control_9a = function () {
        var _localctx = new Flow_control_9aContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, SHARCParser.RULE_flow_control_9a);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1234;
                this.match(SHARCParser.JUMP);
                this.state = 1235;
                this.flow_control_10_frag();
                this.state = 1237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.LPARENTHESE) {
                    {
                        this.state = 1236;
                        this.jump_modifier();
                    }
                }
                this.state = 1241;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                    case 1:
                        {
                            this.state = 1239;
                            this.match(SHARCParser.COMMA);
                            this.state = 1240;
                            this.compute();
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
    SHARCParser.prototype.flow_control_9b = function () {
        var _localctx = new Flow_control_9bContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, SHARCParser.RULE_flow_control_9b);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1243;
                this.match(SHARCParser.CALL);
                this.state = 1244;
                this.flow_control_10_frag();
                this.state = 1246;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.LPARENTHESE) {
                    {
                        this.state = 1245;
                        this.jump_modifier2();
                    }
                }
                this.state = 1250;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                    case 1:
                        {
                            this.state = 1248;
                            this.match(SHARCParser.COMMA);
                            this.state = 1249;
                            this.compute();
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
    SHARCParser.prototype.flow_control_11a = function () {
        var _localctx = new Flow_control_11aContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, SHARCParser.RULE_flow_control_11a);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1252;
                this.match(SHARCParser.RTS);
                this.state = 1254;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.LPARENTHESE) {
                    {
                        this.state = 1253;
                        this.jump_modifier3();
                    }
                }
                this.state = 1258;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                    case 1:
                        {
                            this.state = 1256;
                            this.match(SHARCParser.COMMA);
                            this.state = 1257;
                            this.compute();
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
    SHARCParser.prototype.flow_control_11b = function () {
        var _localctx = new Flow_control_11bContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, SHARCParser.RULE_flow_control_11b);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1260;
                this.match(SHARCParser.RTI);
                this.state = 1262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.LPARENTHESE) {
                    {
                        this.state = 1261;
                        this.jump_modifier2();
                    }
                }
                this.state = 1266;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                    case 1:
                        {
                            this.state = 1264;
                            this.match(SHARCParser.COMMA);
                            this.state = 1265;
                            this.compute();
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
    SHARCParser.prototype.jump_addr_int_or_pc = function () {
        var _localctx = new Jump_addr_int_or_pcContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, SHARCParser.RULE_jump_addr_int_or_pc);
        try {
            this.state = 1270;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1268;
                        this.jump_addr_int();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1269;
                        this.jump_addr_pc();
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
    SHARCParser.prototype.jump_addr_md_or_pc = function () {
        var _localctx = new Jump_addr_md_or_pcContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, SHARCParser.RULE_jump_addr_md_or_pc);
        try {
            this.state = 1274;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1272;
                        this.mem_addr_md_ic();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1273;
                        this.jump_addr_pc();
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
    SHARCParser.prototype.jump_addr_pc = function () {
        var _localctx = new Jump_addr_pcContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, SHARCParser.RULE_jump_addr_pc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1276;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 1277;
                this.match(SHARCParser.PC);
                this.state = 1278;
                this.match(SHARCParser.COMMA);
                this.state = 1279;
                this.value_exp();
                this.state = 1280;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.jump_addr_int = function () {
        var _localctx = new Jump_addr_intContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, SHARCParser.RULE_jump_addr_int);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1282;
                this.value_exp();
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
    SHARCParser.prototype.jump_modifier = function () {
        var _localctx = new Jump_modifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, SHARCParser.RULE_jump_modifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1284;
                this.jump_modifier_();
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
    SHARCParser.prototype.jump_modifier_ = function () {
        var _localctx = new Jump_modifier_Context(this._ctx, this.state);
        this.enterRule(_localctx, 216, SHARCParser.RULE_jump_modifier_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1286;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 1290;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DB:
                        {
                            this.state = 1287;
                            this.jump_modifier_1();
                        }
                        break;
                    case SHARCParser.LA:
                        {
                            this.state = 1288;
                            this.match(SHARCParser.LA);
                        }
                        break;
                    case SHARCParser.CI:
                        {
                            this.state = 1289;
                            this.match(SHARCParser.CI);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1292;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.jump_modifier_1 = function () {
        var _localctx = new Jump_modifier_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 218, SHARCParser.RULE_jump_modifier_1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1294;
                this.match(SHARCParser.DB);
                this.state = 1297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.COMMA) {
                    {
                        this.state = 1295;
                        this.match(SHARCParser.COMMA);
                        this.state = 1296;
                        _la = this._input.LA(1);
                        if (!(_la === SHARCParser.CI || _la === SHARCParser.LA)) {
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
    SHARCParser.prototype.jump_modifier2 = function () {
        var _localctx = new Jump_modifier2Context(this._ctx, this.state);
        this.enterRule(_localctx, 220, SHARCParser.RULE_jump_modifier2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1299;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 1300;
                this.match(SHARCParser.DB);
                this.state = 1301;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.jump_modifier3 = function () {
        var _localctx = new Jump_modifier3Context(this._ctx, this.state);
        this.enterRule(_localctx, 222, SHARCParser.RULE_jump_modifier3);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1303;
                this.jump_modifier3_();
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
    SHARCParser.prototype.jump_modifier3_ = function () {
        var _localctx = new Jump_modifier3_Context(this._ctx, this.state);
        this.enterRule(_localctx, 224, SHARCParser.RULE_jump_modifier3_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1305;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 1308;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DB:
                        {
                            this.state = 1306;
                            this.jump_modifier3_1();
                        }
                        break;
                    case SHARCParser.LR:
                        {
                            this.state = 1307;
                            this.match(SHARCParser.LR);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1310;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.jump_modifier3_1 = function () {
        var _localctx = new Jump_modifier3_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 226, SHARCParser.RULE_jump_modifier3_1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1312;
                this.match(SHARCParser.DB);
                this.state = 1315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SHARCParser.COMMA) {
                    {
                        this.state = 1313;
                        this.match(SHARCParser.COMMA);
                        this.state = 1314;
                        this.match(SHARCParser.LR);
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
    SHARCParser.prototype.imm_mov_exp = function () {
        var _localctx = new Imm_mov_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, SHARCParser.RULE_imm_mov_exp);
        try {
            this.state = 1321;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1317;
                        this.imm_mov_14a();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1318;
                        this.imm_mov_14b();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1319;
                        this.imm_mov_16();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1320;
                        this.imm_mov_17();
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
    SHARCParser.prototype.imm_mov_14a = function () {
        var _localctx = new Imm_mov_14aContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, SHARCParser.RULE_imm_mov_14a);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1325;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 1323;
                            this.mem_addr_dm_int();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 1324;
                            this.mem_addr_pm_int();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1327;
                this.match(SHARCParser.EQU);
                this.state = 1328;
                this.u_reg();
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
    SHARCParser.prototype.imm_mov_15a = function () {
        var _localctx = new Imm_mov_15aContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, SHARCParser.RULE_imm_mov_15a);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1332;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 1330;
                            this.mem_addr_dm_int_ia();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 1331;
                            this.mem_addr_pm_int_ic();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1334;
                this.match(SHARCParser.EQU);
                this.state = 1335;
                this.u_reg();
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
    SHARCParser.prototype.imm_mov_14b = function () {
        var _localctx = new Imm_mov_14bContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, SHARCParser.RULE_imm_mov_14b);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1337;
                this.u_reg();
                this.state = 1338;
                this.match(SHARCParser.EQU);
                this.state = 1341;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 1339;
                            this.mem_addr_dm_int();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 1340;
                            this.mem_addr_pm_int();
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
    SHARCParser.prototype.imm_mov_15b = function () {
        var _localctx = new Imm_mov_15bContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, SHARCParser.RULE_imm_mov_15b);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1343;
                this.u_reg();
                this.state = 1344;
                this.match(SHARCParser.EQU);
                this.state = 1347;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 1345;
                            this.mem_addr_dm_int_ia();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 1346;
                            this.mem_addr_pm_int_ic();
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
    SHARCParser.prototype.imm_mov_16 = function () {
        var _localctx = new Imm_mov_16Context(this._ctx, this.state);
        this.enterRule(_localctx, 238, SHARCParser.RULE_imm_mov_16);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1351;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SHARCParser.DM:
                        {
                            this.state = 1349;
                            this.mem_addr_dm_ia_mb();
                        }
                        break;
                    case SHARCParser.PM:
                        {
                            this.state = 1350;
                            this.mem_addr_pm_ic_md();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1353;
                this.match(SHARCParser.EQU);
                this.state = 1354;
                this.value_exp();
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
    SHARCParser.prototype.imm_mov_17 = function () {
        var _localctx = new Imm_mov_17Context(this._ctx, this.state);
        this.enterRule(_localctx, 240, SHARCParser.RULE_imm_mov_17);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1356;
                this.u_reg2();
                this.state = 1357;
                this.match(SHARCParser.EQU);
                this.state = 1358;
                this.value_exp();
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
    SHARCParser.prototype.u_reg2 = function () {
        var _localctx = new U_reg2Context(this._ctx, this.state);
        this.enterRule(_localctx, 242, SHARCParser.RULE_u_reg2);
        try {
            this.state = 1375;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1360;
                        this.d_reg();
                    }
                    break;
                case SHARCParser.PC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1361;
                        this.match(SHARCParser.PC);
                    }
                    break;
                case SHARCParser.PCSTK:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1362;
                        this.match(SHARCParser.PCSTK);
                    }
                    break;
                case SHARCParser.PCSTKP:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1363;
                        this.match(SHARCParser.PCSTKP);
                    }
                    break;
                case SHARCParser.FADDR:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1364;
                        this.match(SHARCParser.FADDR);
                    }
                    break;
                case SHARCParser.DADDR:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1365;
                        this.match(SHARCParser.DADDR);
                    }
                    break;
                case SHARCParser.LADDR:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1366;
                        this.match(SHARCParser.LADDR);
                    }
                    break;
                case SHARCParser.CURLCNTR:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1367;
                        this.match(SHARCParser.CURLCNTR);
                    }
                    break;
                case SHARCParser.B0:
                case SHARCParser.B1:
                case SHARCParser.B2:
                case SHARCParser.B3:
                case SHARCParser.B4:
                case SHARCParser.B5:
                case SHARCParser.B6:
                case SHARCParser.B7:
                case SHARCParser.B8:
                case SHARCParser.B9:
                case SHARCParser.B10:
                case SHARCParser.B11:
                case SHARCParser.B12:
                case SHARCParser.B13:
                case SHARCParser.B14:
                case SHARCParser.B15:
                case SHARCParser.I0:
                case SHARCParser.I1:
                case SHARCParser.I2:
                case SHARCParser.I3:
                case SHARCParser.I4:
                case SHARCParser.I5:
                case SHARCParser.I6:
                case SHARCParser.I7:
                case SHARCParser.I8:
                case SHARCParser.I9:
                case SHARCParser.I10:
                case SHARCParser.I11:
                case SHARCParser.I12:
                case SHARCParser.I13:
                case SHARCParser.I14:
                case SHARCParser.I15:
                case SHARCParser.L0:
                case SHARCParser.L1:
                case SHARCParser.L2:
                case SHARCParser.L3:
                case SHARCParser.L4:
                case SHARCParser.L5:
                case SHARCParser.L6:
                case SHARCParser.L7:
                case SHARCParser.L8:
                case SHARCParser.L9:
                case SHARCParser.L10:
                case SHARCParser.L11:
                case SHARCParser.L12:
                case SHARCParser.L13:
                case SHARCParser.L14:
                case SHARCParser.L15:
                case SHARCParser.M0:
                case SHARCParser.M1:
                case SHARCParser.M2:
                case SHARCParser.M3:
                case SHARCParser.M4:
                case SHARCParser.M5:
                case SHARCParser.M6:
                case SHARCParser.M7:
                case SHARCParser.M8:
                case SHARCParser.M9:
                case SHARCParser.M10:
                case SHARCParser.M11:
                case SHARCParser.M12:
                case SHARCParser.M13:
                case SHARCParser.M14:
                case SHARCParser.M15:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1368;
                        this.dag_reg();
                    }
                    break;
                case SHARCParser.PX1:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1369;
                        this.match(SHARCParser.PX1);
                    }
                    break;
                case SHARCParser.PX2:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1370;
                        this.match(SHARCParser.PX2);
                    }
                    break;
                case SHARCParser.PX:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1371;
                        this.match(SHARCParser.PX);
                    }
                    break;
                case SHARCParser.TPERIOD:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1372;
                        this.match(SHARCParser.TPERIOD);
                    }
                    break;
                case SHARCParser.TCOUNT:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1373;
                        this.match(SHARCParser.TCOUNT);
                    }
                    break;
                case SHARCParser.ASTAT:
                case SHARCParser.IMASK:
                case SHARCParser.IMASKP:
                case SHARCParser.IRPTL:
                case SHARCParser.MODE1:
                case SHARCParser.MODE2:
                case SHARCParser.STKY:
                case SHARCParser.USTAT1:
                case SHARCParser.USTAT2:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1374;
                        this.s_reg();
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
    SHARCParser.prototype.misc_exp = function () {
        var _localctx = new Misc_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, SHARCParser.RULE_misc_exp);
        var _la;
        try {
            this.state = 1420;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1377;
                        this.match(SHARCParser.BIT);
                        this.state = 1378;
                        _la = this._input.LA(1);
                        if (!(_la === SHARCParser.CLR || ((((_la - 326)) & ~0x1F) === 0 && ((1 << (_la - 326)) & ((1 << (SHARCParser.SET - 326)) | (1 << (SHARCParser.TGL - 326)) | (1 << (SHARCParser.TST - 326)))) !== 0) || _la === SHARCParser.XOR)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1379;
                        this.s_reg();
                        this.state = 1380;
                        this.value_exp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1382;
                        this.match(SHARCParser.BITREV);
                        this.state = 1385;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1383;
                                    this.mem_addr_ia_int();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1384;
                                    this.mem_addr_ic_int();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1387;
                        this.match(SHARCParser.MODIFY);
                        this.state = 1388;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 1389;
                        this.ia();
                        this.state = 1390;
                        this.match(SHARCParser.COMMA);
                        this.state = 1391;
                        this.value_exp();
                        this.state = 1392;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1394;
                        this.match(SHARCParser.MODIFY);
                        this.state = 1395;
                        this.match(SHARCParser.LPARENTHESE);
                        this.state = 1396;
                        this.ic();
                        this.state = 1397;
                        this.match(SHARCParser.COMMA);
                        this.state = 1398;
                        this.value_exp();
                        this.state = 1399;
                        this.match(SHARCParser.RPARENTHESE);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1401;
                        this.misc_20();
                        this.state = 1406;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SHARCParser.COMMA) {
                            {
                                {
                                    this.state = 1402;
                                    this.match(SHARCParser.COMMA);
                                    this.state = 1403;
                                    this.misc_20();
                                }
                            }
                            this.state = 1408;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1409;
                        this.match(SHARCParser.FLUSH);
                        this.state = 1410;
                        this.match(SHARCParser.CACHE);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1411;
                        this.match(SHARCParser.NOP);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1412;
                        this.match(SHARCParser.IDLE);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1413;
                        this.match(SHARCParser.IDLE16);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1414;
                        this.match(SHARCParser.CJUMP);
                        this.state = 1415;
                        this.jump_addr_int_or_pc();
                        this.state = 1417;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SHARCParser.LPARENTHESE) {
                            {
                                this.state = 1416;
                                this.jump_modifier2();
                            }
                        }
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1419;
                        this.match(SHARCParser.RFRAME);
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
    SHARCParser.prototype.misc_20 = function () {
        var _localctx = new Misc_20Context(this._ctx, this.state);
        this.enterRule(_localctx, 246, SHARCParser.RULE_misc_20);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1422;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.POP || _la === SHARCParser.PUSH)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1423;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.LOOP || _la === SHARCParser.PCSTK || _la === SHARCParser.STS)) {
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
    SHARCParser.prototype.directive_exp = function () {
        var _localctx = new Directive_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, SHARCParser.RULE_directive_exp);
        var _la;
        try {
            this.state = 1491;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.DOT_ALGIGN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1425;
                        this.match(SHARCParser.DOT_ALGIGN);
                        this.state = 1426;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case SHARCParser.DOT_COMPRESS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1427;
                        this.match(SHARCParser.DOT_COMPRESS);
                    }
                    break;
                case SHARCParser.DOT_EXTERN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1428;
                        this.match(SHARCParser.DOT_EXTERN);
                        this.state = 1429;
                        this.match(SHARCParser.ID);
                        this.state = 1434;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SHARCParser.COMMA) {
                            {
                                {
                                    this.state = 1430;
                                    this.match(SHARCParser.COMMA);
                                    this.state = 1431;
                                    this.match(SHARCParser.ID);
                                }
                            }
                            this.state = 1436;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SHARCParser.DOT_FILE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1437;
                        this.match(SHARCParser.DOT_FILE);
                        this.state = 1438;
                        this.match(SHARCParser.StringLiteral);
                    }
                    break;
                case SHARCParser.DOT_FILE_ATTR:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1439;
                        this.match(SHARCParser.DOT_FILE_ATTR);
                        this.state = 1440;
                        this.matchWildcard();
                    }
                    break;
                case SHARCParser.DOT_FORCECOMPRESS:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1441;
                        this.match(SHARCParser.DOT_FORCECOMPRESS);
                    }
                    break;
                case SHARCParser.DOT_GLOBAL:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1442;
                        this.match(SHARCParser.DOT_GLOBAL);
                        this.state = 1443;
                        this.match(SHARCParser.ID);
                        this.state = 1448;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SHARCParser.COMMA) {
                            {
                                {
                                    this.state = 1444;
                                    this.match(SHARCParser.COMMA);
                                    this.state = 1445;
                                    this.match(SHARCParser.ID);
                                }
                            }
                            this.state = 1450;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SHARCParser.DOT_IMPORT:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1451;
                        this.match(SHARCParser.DOT_IMPORT);
                        this.state = 1452;
                        this.match(SHARCParser.StringLiteral);
                        this.state = 1457;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SHARCParser.COMMA) {
                            {
                                {
                                    this.state = 1453;
                                    this.match(SHARCParser.COMMA);
                                    this.state = 1454;
                                    this.match(SHARCParser.StringLiteral);
                                }
                            }
                            this.state = 1459;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SHARCParser.DOT_LEFTMARGIN:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1460;
                        this.match(SHARCParser.DOT_LEFTMARGIN);
                        this.state = 1461;
                        this.value_exp();
                    }
                    break;
                case SHARCParser.DOT_LIST:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1462;
                        this.match(SHARCParser.DOT_LIST);
                    }
                    break;
                case SHARCParser.DOT_LIST_DATA:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1463;
                        this.match(SHARCParser.DOT_LIST_DATA);
                    }
                    break;
                case SHARCParser.DOT_LIST_DATFILE:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1464;
                        this.match(SHARCParser.DOT_LIST_DATFILE);
                    }
                    break;
                case SHARCParser.DOT_LIST_DEFTAB:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1465;
                        this.match(SHARCParser.DOT_LIST_DEFTAB);
                        this.state = 1466;
                        this.value_exp();
                    }
                    break;
                case SHARCParser.DOT_LIST_LOCTAB:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1467;
                        this.match(SHARCParser.DOT_LIST_LOCTAB);
                        this.state = 1468;
                        this.value_exp();
                    }
                    break;
                case SHARCParser.DOT_LIST_WRAPDATA:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1469;
                        this.match(SHARCParser.DOT_LIST_WRAPDATA);
                    }
                    break;
                case SHARCParser.DOT_NEWPAGE:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1470;
                        this.match(SHARCParser.DOT_NEWPAGE);
                    }
                    break;
                case SHARCParser.DOT_NOCOMPRESS:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1471;
                        this.match(SHARCParser.DOT_NOCOMPRESS);
                    }
                    break;
                case SHARCParser.DOT_NOLIST_DATA:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1472;
                        this.match(SHARCParser.DOT_NOLIST_DATA);
                    }
                    break;
                case SHARCParser.DOT_NOLIST_DATFILE:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1473;
                        this.match(SHARCParser.DOT_NOLIST_DATFILE);
                    }
                    break;
                case SHARCParser.DOT_NOLIST_WRAPDATA:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 1474;
                        this.match(SHARCParser.DOT_NOLIST_WRAPDATA);
                    }
                    break;
                case SHARCParser.DOT_PAGELENGTH:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 1475;
                        this.match(SHARCParser.DOT_PAGELENGTH);
                        this.state = 1476;
                        this.value_exp();
                    }
                    break;
                case SHARCParser.DOT_PAGEWIDTH:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 1477;
                        this.match(SHARCParser.DOT_PAGEWIDTH);
                        this.state = 1478;
                        this.value_exp();
                    }
                    break;
                case SHARCParser.DOT_PRECISION:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 1479;
                        this.match(SHARCParser.DOT_PRECISION);
                        {
                            this.state = 1481;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SHARCParser.EQU) {
                                {
                                    this.state = 1480;
                                    this.match(SHARCParser.EQU);
                                }
                            }
                        }
                        this.state = 1483;
                        this.match(SHARCParser.INT);
                    }
                    break;
                case SHARCParser.DOT_ROUND_MINUS:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 1484;
                        this.match(SHARCParser.DOT_ROUND_MINUS);
                    }
                    break;
                case SHARCParser.DOT_ROUND_NEAREST:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 1485;
                        this.match(SHARCParser.DOT_ROUND_NEAREST);
                    }
                    break;
                case SHARCParser.DOT_ROUND_PLUS:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 1486;
                        this.match(SHARCParser.DOT_ROUND_PLUS);
                    }
                    break;
                case SHARCParser.DOT_ROUND_ZERO:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 1487;
                        this.match(SHARCParser.DOT_ROUND_ZERO);
                    }
                    break;
                case SHARCParser.DOT_PREVIOUS:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 1488;
                        this.match(SHARCParser.DOT_PREVIOUS);
                    }
                    break;
                case SHARCParser.DOT_WEAK:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 1489;
                        this.match(SHARCParser.DOT_WEAK);
                        this.state = 1490;
                        this.match(SHARCParser.ID);
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
    SHARCParser.prototype.b_reg = function () {
        var _localctx = new B_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, SHARCParser.RULE_b_reg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1493;
                _la = this._input.LA(1);
                if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SHARCParser.B0 - 57)) | (1 << (SHARCParser.B1 - 57)) | (1 << (SHARCParser.B2 - 57)) | (1 << (SHARCParser.B3 - 57)) | (1 << (SHARCParser.B4 - 57)) | (1 << (SHARCParser.B5 - 57)) | (1 << (SHARCParser.B6 - 57)) | (1 << (SHARCParser.B7 - 57)) | (1 << (SHARCParser.B8 - 57)) | (1 << (SHARCParser.B9 - 57)) | (1 << (SHARCParser.B10 - 57)) | (1 << (SHARCParser.B11 - 57)) | (1 << (SHARCParser.B12 - 57)) | (1 << (SHARCParser.B13 - 57)) | (1 << (SHARCParser.B14 - 57)) | (1 << (SHARCParser.B15 - 57)))) !== 0))) {
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
    SHARCParser.prototype.l_reg = function () {
        var _localctx = new L_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, SHARCParser.RULE_l_reg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1495;
                _la = this._input.LA(1);
                if (!(((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & ((1 << (SHARCParser.L0 - 190)) | (1 << (SHARCParser.L1 - 190)) | (1 << (SHARCParser.L2 - 190)) | (1 << (SHARCParser.L3 - 190)) | (1 << (SHARCParser.L4 - 190)) | (1 << (SHARCParser.L5 - 190)) | (1 << (SHARCParser.L6 - 190)) | (1 << (SHARCParser.L7 - 190)) | (1 << (SHARCParser.L8 - 190)) | (1 << (SHARCParser.L9 - 190)) | (1 << (SHARCParser.L10 - 190)) | (1 << (SHARCParser.L11 - 190)) | (1 << (SHARCParser.L12 - 190)) | (1 << (SHARCParser.L13 - 190)) | (1 << (SHARCParser.L14 - 190)) | (1 << (SHARCParser.L15 - 190)))) !== 0))) {
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
    SHARCParser.prototype.r_reg = function () {
        var _localctx = new R_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, SHARCParser.RULE_r_reg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1497;
                _la = this._input.LA(1);
                if (!(((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & ((1 << (SHARCParser.R0 - 297)) | (1 << (SHARCParser.R1 - 297)) | (1 << (SHARCParser.R2 - 297)) | (1 << (SHARCParser.R3 - 297)) | (1 << (SHARCParser.R4 - 297)) | (1 << (SHARCParser.R5 - 297)) | (1 << (SHARCParser.R6 - 297)) | (1 << (SHARCParser.R7 - 297)) | (1 << (SHARCParser.R8 - 297)) | (1 << (SHARCParser.R9 - 297)) | (1 << (SHARCParser.R10 - 297)) | (1 << (SHARCParser.R11 - 297)) | (1 << (SHARCParser.R12 - 297)) | (1 << (SHARCParser.R13 - 297)) | (1 << (SHARCParser.R14 - 297)) | (1 << (SHARCParser.R15 - 297)))) !== 0))) {
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
    SHARCParser.prototype.f_reg = function () {
        var _localctx = new F_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, SHARCParser.RULE_f_reg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1499;
                _la = this._input.LA(1);
                if (!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (SHARCParser.F0 - 126)) | (1 << (SHARCParser.F1 - 126)) | (1 << (SHARCParser.F2 - 126)) | (1 << (SHARCParser.F3 - 126)) | (1 << (SHARCParser.F4 - 126)) | (1 << (SHARCParser.F5 - 126)) | (1 << (SHARCParser.F6 - 126)) | (1 << (SHARCParser.F7 - 126)) | (1 << (SHARCParser.F8 - 126)) | (1 << (SHARCParser.F9 - 126)) | (1 << (SHARCParser.F10 - 126)) | (1 << (SHARCParser.F11 - 126)) | (1 << (SHARCParser.F12 - 126)) | (1 << (SHARCParser.F13 - 126)) | (1 << (SHARCParser.F14 - 126)) | (1 << (SHARCParser.F15 - 126)))) !== 0))) {
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
    SHARCParser.prototype.s_reg = function () {
        var _localctx = new S_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, SHARCParser.RULE_s_reg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1501;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.ASTAT || ((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & ((1 << (SHARCParser.IMASK - 185)) | (1 << (SHARCParser.IMASKP - 185)) | (1 << (SHARCParser.IRPTL - 185)))) !== 0) || _la === SHARCParser.MODE1 || _la === SHARCParser.MODE2 || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & ((1 << (SHARCParser.STKY - 340)) | (1 << (SHARCParser.USTAT1 - 340)) | (1 << (SHARCParser.USTAT2 - 340)))) !== 0))) {
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
    SHARCParser.prototype.ia = function () {
        var _localctx = new IaContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, SHARCParser.RULE_ia);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1503;
                _la = this._input.LA(1);
                if (!(((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SHARCParser.I0 - 164)) | (1 << (SHARCParser.I1 - 164)) | (1 << (SHARCParser.I2 - 164)) | (1 << (SHARCParser.I3 - 164)) | (1 << (SHARCParser.I4 - 164)) | (1 << (SHARCParser.I5 - 164)) | (1 << (SHARCParser.I6 - 164)) | (1 << (SHARCParser.I7 - 164)))) !== 0))) {
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
    SHARCParser.prototype.mb = function () {
        var _localctx = new MbContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, SHARCParser.RULE_mb);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1505;
                _la = this._input.LA(1);
                if (!(((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & ((1 << (SHARCParser.M0 - 223)) | (1 << (SHARCParser.M1 - 223)) | (1 << (SHARCParser.M2 - 223)) | (1 << (SHARCParser.M3 - 223)) | (1 << (SHARCParser.M4 - 223)) | (1 << (SHARCParser.M5 - 223)) | (1 << (SHARCParser.M6 - 223)) | (1 << (SHARCParser.M7 - 223)))) !== 0))) {
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
    SHARCParser.prototype.ic = function () {
        var _localctx = new IcContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, SHARCParser.RULE_ic);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1507;
                _la = this._input.LA(1);
                if (!(((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & ((1 << (SHARCParser.I8 - 172)) | (1 << (SHARCParser.I9 - 172)) | (1 << (SHARCParser.I10 - 172)) | (1 << (SHARCParser.I11 - 172)) | (1 << (SHARCParser.I12 - 172)) | (1 << (SHARCParser.I13 - 172)) | (1 << (SHARCParser.I14 - 172)) | (1 << (SHARCParser.I15 - 172)))) !== 0))) {
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
    SHARCParser.prototype.md = function () {
        var _localctx = new MdContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, SHARCParser.RULE_md);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1509;
                _la = this._input.LA(1);
                if (!(((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SHARCParser.M8 - 231)) | (1 << (SHARCParser.M9 - 231)) | (1 << (SHARCParser.M10 - 231)) | (1 << (SHARCParser.M11 - 231)) | (1 << (SHARCParser.M12 - 231)) | (1 << (SHARCParser.M13 - 231)) | (1 << (SHARCParser.M14 - 231)) | (1 << (SHARCParser.M15 - 231)))) !== 0))) {
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
    SHARCParser.prototype.i_reg = function () {
        var _localctx = new I_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, SHARCParser.RULE_i_reg);
        try {
            this.state = 1513;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.I0:
                case SHARCParser.I1:
                case SHARCParser.I2:
                case SHARCParser.I3:
                case SHARCParser.I4:
                case SHARCParser.I5:
                case SHARCParser.I6:
                case SHARCParser.I7:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1511;
                        this.ia();
                    }
                    break;
                case SHARCParser.I8:
                case SHARCParser.I9:
                case SHARCParser.I10:
                case SHARCParser.I11:
                case SHARCParser.I12:
                case SHARCParser.I13:
                case SHARCParser.I14:
                case SHARCParser.I15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1512;
                        this.ic();
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
    SHARCParser.prototype.m_reg = function () {
        var _localctx = new M_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, SHARCParser.RULE_m_reg);
        try {
            this.state = 1517;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.M0:
                case SHARCParser.M1:
                case SHARCParser.M2:
                case SHARCParser.M3:
                case SHARCParser.M4:
                case SHARCParser.M5:
                case SHARCParser.M6:
                case SHARCParser.M7:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1515;
                        this.mb();
                    }
                    break;
                case SHARCParser.M8:
                case SHARCParser.M9:
                case SHARCParser.M10:
                case SHARCParser.M11:
                case SHARCParser.M12:
                case SHARCParser.M13:
                case SHARCParser.M14:
                case SHARCParser.M15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1516;
                        this.md();
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
    SHARCParser.prototype.dag_reg = function () {
        var _localctx = new Dag_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, SHARCParser.RULE_dag_reg);
        try {
            this.state = 1523;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.I0:
                case SHARCParser.I1:
                case SHARCParser.I2:
                case SHARCParser.I3:
                case SHARCParser.I4:
                case SHARCParser.I5:
                case SHARCParser.I6:
                case SHARCParser.I7:
                case SHARCParser.I8:
                case SHARCParser.I9:
                case SHARCParser.I10:
                case SHARCParser.I11:
                case SHARCParser.I12:
                case SHARCParser.I13:
                case SHARCParser.I14:
                case SHARCParser.I15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1519;
                        this.i_reg();
                    }
                    break;
                case SHARCParser.M0:
                case SHARCParser.M1:
                case SHARCParser.M2:
                case SHARCParser.M3:
                case SHARCParser.M4:
                case SHARCParser.M5:
                case SHARCParser.M6:
                case SHARCParser.M7:
                case SHARCParser.M8:
                case SHARCParser.M9:
                case SHARCParser.M10:
                case SHARCParser.M11:
                case SHARCParser.M12:
                case SHARCParser.M13:
                case SHARCParser.M14:
                case SHARCParser.M15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1520;
                        this.m_reg();
                    }
                    break;
                case SHARCParser.B0:
                case SHARCParser.B1:
                case SHARCParser.B2:
                case SHARCParser.B3:
                case SHARCParser.B4:
                case SHARCParser.B5:
                case SHARCParser.B6:
                case SHARCParser.B7:
                case SHARCParser.B8:
                case SHARCParser.B9:
                case SHARCParser.B10:
                case SHARCParser.B11:
                case SHARCParser.B12:
                case SHARCParser.B13:
                case SHARCParser.B14:
                case SHARCParser.B15:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1521;
                        this.b_reg();
                    }
                    break;
                case SHARCParser.L0:
                case SHARCParser.L1:
                case SHARCParser.L2:
                case SHARCParser.L3:
                case SHARCParser.L4:
                case SHARCParser.L5:
                case SHARCParser.L6:
                case SHARCParser.L7:
                case SHARCParser.L8:
                case SHARCParser.L9:
                case SHARCParser.L10:
                case SHARCParser.L11:
                case SHARCParser.L12:
                case SHARCParser.L13:
                case SHARCParser.L14:
                case SHARCParser.L15:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1522;
                        this.l_reg();
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
    SHARCParser.prototype.d_reg = function () {
        var _localctx = new D_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, SHARCParser.RULE_d_reg);
        try {
            this.state = 1527;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1525;
                        this.r_reg();
                    }
                    break;
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1526;
                        this.f_reg();
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
    SHARCParser.prototype.u_reg = function () {
        var _localctx = new U_regContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, SHARCParser.RULE_u_reg);
        try {
            this.state = 1545;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SHARCParser.F0:
                case SHARCParser.F1:
                case SHARCParser.F2:
                case SHARCParser.F3:
                case SHARCParser.F4:
                case SHARCParser.F5:
                case SHARCParser.F6:
                case SHARCParser.F7:
                case SHARCParser.F8:
                case SHARCParser.F9:
                case SHARCParser.F10:
                case SHARCParser.F11:
                case SHARCParser.F12:
                case SHARCParser.F13:
                case SHARCParser.F14:
                case SHARCParser.F15:
                case SHARCParser.R0:
                case SHARCParser.R1:
                case SHARCParser.R2:
                case SHARCParser.R3:
                case SHARCParser.R4:
                case SHARCParser.R5:
                case SHARCParser.R6:
                case SHARCParser.R7:
                case SHARCParser.R8:
                case SHARCParser.R9:
                case SHARCParser.R10:
                case SHARCParser.R11:
                case SHARCParser.R12:
                case SHARCParser.R13:
                case SHARCParser.R14:
                case SHARCParser.R15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1529;
                        this.d_reg();
                    }
                    break;
                case SHARCParser.PC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1530;
                        this.match(SHARCParser.PC);
                    }
                    break;
                case SHARCParser.PCSTK:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1531;
                        this.match(SHARCParser.PCSTK);
                    }
                    break;
                case SHARCParser.PCSTKP:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1532;
                        this.match(SHARCParser.PCSTKP);
                    }
                    break;
                case SHARCParser.FADDR:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1533;
                        this.match(SHARCParser.FADDR);
                    }
                    break;
                case SHARCParser.DADDR:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1534;
                        this.match(SHARCParser.DADDR);
                    }
                    break;
                case SHARCParser.LADDR:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1535;
                        this.match(SHARCParser.LADDR);
                    }
                    break;
                case SHARCParser.CURLCNTR:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1536;
                        this.match(SHARCParser.CURLCNTR);
                    }
                    break;
                case SHARCParser.LCNTR:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1537;
                        this.match(SHARCParser.LCNTR);
                    }
                    break;
                case SHARCParser.B0:
                case SHARCParser.B1:
                case SHARCParser.B2:
                case SHARCParser.B3:
                case SHARCParser.B4:
                case SHARCParser.B5:
                case SHARCParser.B6:
                case SHARCParser.B7:
                case SHARCParser.B8:
                case SHARCParser.B9:
                case SHARCParser.B10:
                case SHARCParser.B11:
                case SHARCParser.B12:
                case SHARCParser.B13:
                case SHARCParser.B14:
                case SHARCParser.B15:
                case SHARCParser.I0:
                case SHARCParser.I1:
                case SHARCParser.I2:
                case SHARCParser.I3:
                case SHARCParser.I4:
                case SHARCParser.I5:
                case SHARCParser.I6:
                case SHARCParser.I7:
                case SHARCParser.I8:
                case SHARCParser.I9:
                case SHARCParser.I10:
                case SHARCParser.I11:
                case SHARCParser.I12:
                case SHARCParser.I13:
                case SHARCParser.I14:
                case SHARCParser.I15:
                case SHARCParser.L0:
                case SHARCParser.L1:
                case SHARCParser.L2:
                case SHARCParser.L3:
                case SHARCParser.L4:
                case SHARCParser.L5:
                case SHARCParser.L6:
                case SHARCParser.L7:
                case SHARCParser.L8:
                case SHARCParser.L9:
                case SHARCParser.L10:
                case SHARCParser.L11:
                case SHARCParser.L12:
                case SHARCParser.L13:
                case SHARCParser.L14:
                case SHARCParser.L15:
                case SHARCParser.M0:
                case SHARCParser.M1:
                case SHARCParser.M2:
                case SHARCParser.M3:
                case SHARCParser.M4:
                case SHARCParser.M5:
                case SHARCParser.M6:
                case SHARCParser.M7:
                case SHARCParser.M8:
                case SHARCParser.M9:
                case SHARCParser.M10:
                case SHARCParser.M11:
                case SHARCParser.M12:
                case SHARCParser.M13:
                case SHARCParser.M14:
                case SHARCParser.M15:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1538;
                        this.dag_reg();
                    }
                    break;
                case SHARCParser.PX1:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1539;
                        this.match(SHARCParser.PX1);
                    }
                    break;
                case SHARCParser.PX2:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1540;
                        this.match(SHARCParser.PX2);
                    }
                    break;
                case SHARCParser.PX:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1541;
                        this.match(SHARCParser.PX);
                    }
                    break;
                case SHARCParser.TPERIOD:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1542;
                        this.match(SHARCParser.TPERIOD);
                    }
                    break;
                case SHARCParser.TCOUNT:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1543;
                        this.match(SHARCParser.TCOUNT);
                    }
                    break;
                case SHARCParser.ASTAT:
                case SHARCParser.IMASK:
                case SHARCParser.IMASKP:
                case SHARCParser.IRPTL:
                case SHARCParser.MODE1:
                case SHARCParser.MODE2:
                case SHARCParser.STKY:
                case SHARCParser.USTAT1:
                case SHARCParser.USTAT2:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1544;
                        this.s_reg();
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
    SHARCParser.prototype.condition = function () {
        var _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, SHARCParser.RULE_condition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1547;
                this.ccondition();
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
    SHARCParser.prototype.ccondition = function () {
        var _localctx = new CconditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, SHARCParser.RULE_ccondition);
        try {
            this.state = 1595;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1549;
                        this.match(SHARCParser.EQ);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1550;
                        this.match(SHARCParser.LT);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1551;
                        this.match(SHARCParser.LE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1552;
                        this.match(SHARCParser.AC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1553;
                        this.match(SHARCParser.AV);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1554;
                        this.match(SHARCParser.MV);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1555;
                        this.match(SHARCParser.MS);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1556;
                        this.match(SHARCParser.SV);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1557;
                        this.match(SHARCParser.SZ);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1558;
                        this.match(SHARCParser.FLAG0_IN);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1559;
                        this.match(SHARCParser.FLAG1_IN);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1560;
                        this.match(SHARCParser.FLAG2_IN);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1561;
                        this.match(SHARCParser.FLAG3_IN);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1562;
                        this.match(SHARCParser.TF);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1563;
                        this.match(SHARCParser.BM);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1564;
                        this.match(SHARCParser.LCE);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1565;
                        this.match(SHARCParser.NOT);
                        this.state = 1566;
                        this.match(SHARCParser.LCE);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1567;
                        this.match(SHARCParser.NE);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1568;
                        this.match(SHARCParser.GE);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 1569;
                        this.match(SHARCParser.GT);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 1570;
                        this.match(SHARCParser.NOT);
                        this.state = 1571;
                        this.match(SHARCParser.AC);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 1572;
                        this.match(SHARCParser.NOT);
                        this.state = 1573;
                        this.match(SHARCParser.AV);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 1574;
                        this.match(SHARCParser.NOT);
                        this.state = 1575;
                        this.match(SHARCParser.MV);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 1576;
                        this.match(SHARCParser.NOT);
                        this.state = 1577;
                        this.match(SHARCParser.MS);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 1578;
                        this.match(SHARCParser.NOT);
                        this.state = 1579;
                        this.match(SHARCParser.SV);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 1580;
                        this.match(SHARCParser.NOT);
                        this.state = 1581;
                        this.match(SHARCParser.SZ);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 1582;
                        this.match(SHARCParser.NOT);
                        this.state = 1583;
                        this.match(SHARCParser.FLAG0_IN);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 1584;
                        this.match(SHARCParser.NOT);
                        this.state = 1585;
                        this.match(SHARCParser.FLAG1_IN);
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 1586;
                        this.match(SHARCParser.NOT);
                        this.state = 1587;
                        this.match(SHARCParser.FLAG2_IN);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 1588;
                        this.match(SHARCParser.NOT);
                        this.state = 1589;
                        this.match(SHARCParser.FLAG3_IN);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 1590;
                        this.match(SHARCParser.NOT);
                        this.state = 1591;
                        this.match(SHARCParser.TF);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 1592;
                        this.match(SHARCParser.NBM);
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 1593;
                        this.match(SHARCParser.FOREVER);
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 1594;
                        this.match(SHARCParser.TRUE);
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
    SHARCParser.prototype.multi_mod1 = function () {
        var _localctx = new Multi_mod1Context(this._ctx, this.state);
        this.enterRule(_localctx, 282, SHARCParser.RULE_multi_mod1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1597;
                this.multi_mod1_();
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
    SHARCParser.prototype.multi_mod1_ = function () {
        var _localctx = new Multi_mod1_Context(this._ctx, this.state);
        this.enterRule(_localctx, 284, SHARCParser.RULE_multi_mod1_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1599;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 1600;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.SF || _la === SHARCParser.SI || _la === SHARCParser.UF || _la === SHARCParser.UI)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1601;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.multi_mod2 = function () {
        var _localctx = new Multi_mod2Context(this._ctx, this.state);
        this.enterRule(_localctx, 286, SHARCParser.RULE_multi_mod2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1603;
                this.multi_mod2_();
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
    SHARCParser.prototype.multi_mod2_ = function () {
        var _localctx = new Multi_mod2_Context(this._ctx, this.state);
        this.enterRule(_localctx, 288, SHARCParser.RULE_multi_mod2_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1605;
                this.match(SHARCParser.LPARENTHESE);
                this.state = 1606;
                _la = this._input.LA(1);
                if (!(((((_la - 334)) & ~0x1F) === 0 && ((1 << (_la - 334)) & ((1 << (SHARCParser.SSF - 334)) | (1 << (SHARCParser.SSFR - 334)) | (1 << (SHARCParser.SSI - 334)) | (1 << (SHARCParser.SUF - 334)) | (1 << (SHARCParser.SUFR - 334)) | (1 << (SHARCParser.SUI - 334)) | (1 << (SHARCParser.USF - 334)) | (1 << (SHARCParser.USFR - 334)))) !== 0) || ((((_la - 366)) & ~0x1F) === 0 && ((1 << (_la - 366)) & ((1 << (SHARCParser.USI - 366)) | (1 << (SHARCParser.UUF - 366)) | (1 << (SHARCParser.UUFR - 366)) | (1 << (SHARCParser.UUI - 366)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1607;
                this.match(SHARCParser.RPARENTHESE);
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
    SHARCParser.prototype.r3_0 = function () {
        var _localctx = new R3_0Context(this._ctx, this.state);
        this.enterRule(_localctx, 290, SHARCParser.RULE_r3_0);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1609;
                _la = this._input.LA(1);
                if (!(((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & ((1 << (SHARCParser.R0 - 297)) | (1 << (SHARCParser.R2 - 297)) | (1 << (SHARCParser.R3 - 297)))) !== 0))) {
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
    SHARCParser.prototype.r7_4 = function () {
        var _localctx = new R7_4Context(this._ctx, this.state);
        this.enterRule(_localctx, 292, SHARCParser.RULE_r7_4);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1611;
                _la = this._input.LA(1);
                if (!(((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (SHARCParser.R4 - 301)) | (1 << (SHARCParser.R5 - 301)) | (1 << (SHARCParser.R6 - 301)) | (1 << (SHARCParser.R7 - 301)))) !== 0))) {
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
    SHARCParser.prototype.r11_8 = function () {
        var _localctx = new R11_8Context(this._ctx, this.state);
        this.enterRule(_localctx, 294, SHARCParser.RULE_r11_8);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1613;
                _la = this._input.LA(1);
                if (!(((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & ((1 << (SHARCParser.R8 - 305)) | (1 << (SHARCParser.R9 - 305)) | (1 << (SHARCParser.R10 - 305)) | (1 << (SHARCParser.R11 - 305)))) !== 0))) {
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
    SHARCParser.prototype.r15_12 = function () {
        var _localctx = new R15_12Context(this._ctx, this.state);
        this.enterRule(_localctx, 296, SHARCParser.RULE_r15_12);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1615;
                _la = this._input.LA(1);
                if (!(((((_la - 309)) & ~0x1F) === 0 && ((1 << (_la - 309)) & ((1 << (SHARCParser.R12 - 309)) | (1 << (SHARCParser.R13 - 309)) | (1 << (SHARCParser.R14 - 309)) | (1 << (SHARCParser.R15 - 309)))) !== 0))) {
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
    SHARCParser.prototype.f3_0 = function () {
        var _localctx = new F3_0Context(this._ctx, this.state);
        this.enterRule(_localctx, 298, SHARCParser.RULE_f3_0);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1617;
                _la = this._input.LA(1);
                if (!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (SHARCParser.F0 - 126)) | (1 << (SHARCParser.F2 - 126)) | (1 << (SHARCParser.F3 - 126)))) !== 0))) {
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
    SHARCParser.prototype.f7_4 = function () {
        var _localctx = new F7_4Context(this._ctx, this.state);
        this.enterRule(_localctx, 300, SHARCParser.RULE_f7_4);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1619;
                _la = this._input.LA(1);
                if (!(((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SHARCParser.F4 - 130)) | (1 << (SHARCParser.F5 - 130)) | (1 << (SHARCParser.F6 - 130)) | (1 << (SHARCParser.F7 - 130)))) !== 0))) {
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
    SHARCParser.prototype.f11_8 = function () {
        var _localctx = new F11_8Context(this._ctx, this.state);
        this.enterRule(_localctx, 302, SHARCParser.RULE_f11_8);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1621;
                _la = this._input.LA(1);
                if (!(((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (SHARCParser.F8 - 134)) | (1 << (SHARCParser.F9 - 134)) | (1 << (SHARCParser.F10 - 134)) | (1 << (SHARCParser.F11 - 134)))) !== 0))) {
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
    SHARCParser.prototype.f15_12 = function () {
        var _localctx = new F15_12Context(this._ctx, this.state);
        this.enterRule(_localctx, 304, SHARCParser.RULE_f15_12);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1623;
                _la = this._input.LA(1);
                if (!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SHARCParser.F12 - 138)) | (1 << (SHARCParser.F13 - 138)) | (1 << (SHARCParser.F14 - 138)) | (1 << (SHARCParser.F15 - 138)))) !== 0))) {
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
    SHARCParser.prototype.addr = function () {
        var _localctx = new AddrContext(this._ctx, this.state);
        this.enterRule(_localctx, 306, SHARCParser.RULE_addr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1625;
                _la = this._input.LA(1);
                if (!(_la === SHARCParser.INT || _la === SHARCParser.ID)) {
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
    SHARCParser.prototype.mrf = function () {
        var _localctx = new MrfContext(this._ctx, this.state);
        this.enterRule(_localctx, 308, SHARCParser.RULE_mrf);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1627;
                _la = this._input.LA(1);
                if (!(((((_la - 248)) & ~0x1F) === 0 && ((1 << (_la - 248)) & ((1 << (SHARCParser.MR0F - 248)) | (1 << (SHARCParser.MR1F - 248)) | (1 << (SHARCParser.MR2F - 248)))) !== 0))) {
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
    SHARCParser.prototype.mrb = function () {
        var _localctx = new MrbContext(this._ctx, this.state);
        this.enterRule(_localctx, 310, SHARCParser.RULE_mrb);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1629;
                _la = this._input.LA(1);
                if (!(((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & ((1 << (SHARCParser.MR0B - 247)) | (1 << (SHARCParser.MR1B - 247)) | (1 << (SHARCParser.MR2B - 247)))) !== 0))) {
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
    Object.defineProperty(SHARCParser, "_ATN", {
        get: function () {
            if (!SHARCParser.__ATN) {
                SHARCParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SHARCParser._serializedATN));
            }
            return SHARCParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SHARCParser.StringLiteral = 1;
    SHARCParser.CharLiteral = 2;
    SHARCParser.INT = 3;
    SHARCParser.WS = 4;
    SHARCParser.DOT_ADI_ = 5;
    SHARCParser.DOT_DATE_ = 6;
    SHARCParser.DOT_FILE_ = 7;
    SHARCParser.DOT_ALGIGN = 8;
    SHARCParser.DOT_COMPRESS = 9;
    SHARCParser.DOT_ELIF = 10;
    SHARCParser.DOT_ELSE = 11;
    SHARCParser.DOT_ENDIF = 12;
    SHARCParser.DOT_EXTERN = 13;
    SHARCParser.DOT_FILE = 14;
    SHARCParser.DOT_FILE_ATTR = 15;
    SHARCParser.DOT_FORCECOMPRESS = 16;
    SHARCParser.DOT_GLOBAL = 17;
    SHARCParser.DOT_IF = 18;
    SHARCParser.DOT_IMPORT = 19;
    SHARCParser.DOT_INCBINARY = 20;
    SHARCParser.DOT_LEFTMARGIN = 21;
    SHARCParser.DOT_LIST = 22;
    SHARCParser.DOT_LIST_DATA = 23;
    SHARCParser.DOT_LIST_DATFILE = 24;
    SHARCParser.DOT_LIST_DEFTAB = 25;
    SHARCParser.DOT_LIST_LOCTAB = 26;
    SHARCParser.DOT_LIST_WRAPDATA = 27;
    SHARCParser.DOT_NEWPAGE = 28;
    SHARCParser.DOT_NOCOMPRESS = 29;
    SHARCParser.DOT_NOLIST_DATA = 30;
    SHARCParser.DOT_NOLIST_DATFILE = 31;
    SHARCParser.DOT_NOLIST_WRAPDATA = 32;
    SHARCParser.DOT_PAGELENGTH = 33;
    SHARCParser.DOT_PAGEWIDTH = 34;
    SHARCParser.DOT_PRECISION = 35;
    SHARCParser.DOT_ROUND_MINUS = 36;
    SHARCParser.DOT_ROUND_NEAREST = 37;
    SHARCParser.DOT_ROUND_PLUS = 38;
    SHARCParser.DOT_ROUND_ZERO = 39;
    SHARCParser.DOT_PREVIOUS = 40;
    SHARCParser.DOT_SECTION = 41;
    SHARCParser.DOT_SEGMENT = 42;
    SHARCParser.DOT_ENDSEG = 43;
    SHARCParser.DOT_STRUCT = 44;
    SHARCParser.DOT_TYPE = 45;
    SHARCParser.DOT_VAR = 46;
    SHARCParser.DOT_WEAK = 47;
    SHARCParser.ABS = 48;
    SHARCParser.AC = 49;
    SHARCParser.ACS = 50;
    SHARCParser.ACT = 51;
    SHARCParser.ADDRESS = 52;
    SHARCParser.AND = 53;
    SHARCParser.ASHIFT = 54;
    SHARCParser.ASTAT = 55;
    SHARCParser.AV = 56;
    SHARCParser.B0 = 57;
    SHARCParser.B1 = 58;
    SHARCParser.B2 = 59;
    SHARCParser.B3 = 60;
    SHARCParser.B4 = 61;
    SHARCParser.B5 = 62;
    SHARCParser.B6 = 63;
    SHARCParser.B7 = 64;
    SHARCParser.B8 = 65;
    SHARCParser.B9 = 66;
    SHARCParser.B10 = 67;
    SHARCParser.B11 = 68;
    SHARCParser.B12 = 69;
    SHARCParser.B13 = 70;
    SHARCParser.B14 = 71;
    SHARCParser.B15 = 72;
    SHARCParser.BB = 73;
    SHARCParser.BCLR = 74;
    SHARCParser.BF = 75;
    SHARCParser.BIT = 76;
    SHARCParser.BITREV = 77;
    SHARCParser.BM = 78;
    SHARCParser.BSET = 79;
    SHARCParser.BTGL = 80;
    SHARCParser.BTST = 81;
    SHARCParser.BY = 82;
    SHARCParser.CA = 83;
    SHARCParser.CACHE = 84;
    SHARCParser.CALL = 85;
    SHARCParser.CH = 86;
    SHARCParser.CI = 87;
    SHARCParser.CJUMP = 88;
    SHARCParser.CL = 89;
    SHARCParser.CLR = 90;
    SHARCParser.CLIP = 91;
    SHARCParser.COMP = 92;
    SHARCParser.COPYSIGN = 93;
    SHARCParser.COS = 94;
    SHARCParser.CURLCNTR = 95;
    SHARCParser.DADDR = 96;
    SHARCParser.DB = 97;
    SHARCParser.DEC = 98;
    SHARCParser.DEF = 99;
    SHARCParser.DIM = 100;
    SHARCParser.DM = 101;
    SHARCParser.DMA1E = 102;
    SHARCParser.DMA1s = 103;
    SHARCParser.DMA2E = 104;
    SHARCParser.DMA2s = 105;
    SHARCParser.DMADR = 106;
    SHARCParser.DMABANK1 = 107;
    SHARCParser.DMABANK2 = 108;
    SHARCParser.DMABANK3 = 109;
    SHARCParser.DMAWAIT = 110;
    SHARCParser.DO = 111;
    SHARCParser.DOVL = 112;
    SHARCParser.EB = 113;
    SHARCParser.ECE = 114;
    SHARCParser.EF = 115;
    SHARCParser.ELSE = 116;
    SHARCParser.EMUCLK = 117;
    SHARCParser.EMUCLK2 = 118;
    SHARCParser.EMUIDLE = 119;
    SHARCParser.EMUN = 120;
    SHARCParser.EOS = 121;
    SHARCParser.EQ = 122;
    SHARCParser.EX = 123;
    SHARCParser.EXP = 124;
    SHARCParser.EXP2 = 125;
    SHARCParser.F0 = 126;
    SHARCParser.F1 = 127;
    SHARCParser.F2 = 128;
    SHARCParser.F3 = 129;
    SHARCParser.F4 = 130;
    SHARCParser.F5 = 131;
    SHARCParser.F6 = 132;
    SHARCParser.F7 = 133;
    SHARCParser.F8 = 134;
    SHARCParser.F9 = 135;
    SHARCParser.F10 = 136;
    SHARCParser.F11 = 137;
    SHARCParser.F12 = 138;
    SHARCParser.F13 = 139;
    SHARCParser.F14 = 140;
    SHARCParser.F15 = 141;
    SHARCParser.FADDR = 142;
    SHARCParser.FDEP = 143;
    SHARCParser.FEXT = 144;
    SHARCParser.FILE = 145;
    SHARCParser.FIX = 146;
    SHARCParser.FLAG0_IN = 147;
    SHARCParser.FLAG1_IN = 148;
    SHARCParser.FLAG2_IN = 149;
    SHARCParser.FLAG3_IN = 150;
    SHARCParser.FLOAT = 151;
    SHARCParser.FLUSH = 152;
    SHARCParser.FMERG = 153;
    SHARCParser.FOREVER = 154;
    SHARCParser.FPACK = 155;
    SHARCParser.FRACTIONAL = 156;
    SHARCParser.FTA = 157;
    SHARCParser.FTB = 158;
    SHARCParser.FTC = 159;
    SHARCParser.FUNPACK = 160;
    SHARCParser.GCC_COMPILED = 161;
    SHARCParser.GE = 162;
    SHARCParser.GT = 163;
    SHARCParser.I0 = 164;
    SHARCParser.I1 = 165;
    SHARCParser.I2 = 166;
    SHARCParser.I3 = 167;
    SHARCParser.I4 = 168;
    SHARCParser.I5 = 169;
    SHARCParser.I6 = 170;
    SHARCParser.I7 = 171;
    SHARCParser.I8 = 172;
    SHARCParser.I9 = 173;
    SHARCParser.I10 = 174;
    SHARCParser.I11 = 175;
    SHARCParser.I12 = 176;
    SHARCParser.I13 = 177;
    SHARCParser.I14 = 178;
    SHARCParser.I15 = 179;
    SHARCParser.IDLE = 180;
    SHARCParser.IDLE16 = 181;
    SHARCParser.IDLEI15 = 182;
    SHARCParser.IDLEI16 = 183;
    SHARCParser.IF = 184;
    SHARCParser.IMASK = 185;
    SHARCParser.IMASKP = 186;
    SHARCParser.INC = 187;
    SHARCParser.IRPTL = 188;
    SHARCParser.JUMP = 189;
    SHARCParser.L0 = 190;
    SHARCParser.L1 = 191;
    SHARCParser.L2 = 192;
    SHARCParser.L3 = 193;
    SHARCParser.L4 = 194;
    SHARCParser.L5 = 195;
    SHARCParser.L6 = 196;
    SHARCParser.L7 = 197;
    SHARCParser.L8 = 198;
    SHARCParser.L9 = 199;
    SHARCParser.L10 = 200;
    SHARCParser.L11 = 201;
    SHARCParser.L12 = 202;
    SHARCParser.L13 = 203;
    SHARCParser.L14 = 204;
    SHARCParser.L15 = 205;
    SHARCParser.LA = 206;
    SHARCParser.LADDR = 207;
    SHARCParser.LCE = 208;
    SHARCParser.LCNTR = 209;
    SHARCParser.LE = 210;
    SHARCParser.LEFTO = 211;
    SHARCParser.LEFTZ = 212;
    SHARCParser.LENGTH = 213;
    SHARCParser.LINE = 214;
    SHARCParser.LN = 215;
    SHARCParser.LOAD = 216;
    SHARCParser.LOG2 = 217;
    SHARCParser.LOGB = 218;
    SHARCParser.LOOP = 219;
    SHARCParser.LR = 220;
    SHARCParser.LSHIFT = 221;
    SHARCParser.LT = 222;
    SHARCParser.M0 = 223;
    SHARCParser.M1 = 224;
    SHARCParser.M2 = 225;
    SHARCParser.M3 = 226;
    SHARCParser.M4 = 227;
    SHARCParser.M5 = 228;
    SHARCParser.M6 = 229;
    SHARCParser.M7 = 230;
    SHARCParser.M8 = 231;
    SHARCParser.M9 = 232;
    SHARCParser.M10 = 233;
    SHARCParser.M11 = 234;
    SHARCParser.M12 = 235;
    SHARCParser.M13 = 236;
    SHARCParser.M14 = 237;
    SHARCParser.M15 = 238;
    SHARCParser.MANT = 239;
    SHARCParser.MAX = 240;
    SHARCParser.MBM = 241;
    SHARCParser.MIN = 242;
    SHARCParser.MOD = 243;
    SHARCParser.MODE1 = 244;
    SHARCParser.MODE2 = 245;
    SHARCParser.MODIFY = 246;
    SHARCParser.MR0B = 247;
    SHARCParser.MR0F = 248;
    SHARCParser.MR1B = 249;
    SHARCParser.MR1F = 250;
    SHARCParser.MR2B = 251;
    SHARCParser.MR2F = 252;
    SHARCParser.MRB = 253;
    SHARCParser.MRF = 254;
    SHARCParser.MS = 255;
    SHARCParser.MV = 256;
    SHARCParser.NBM = 257;
    SHARCParser.NE = 258;
    SHARCParser.NOFO = 259;
    SHARCParser.NOFZ = 260;
    SHARCParser.NOP = 261;
    SHARCParser.NOPSPECIAL = 262;
    SHARCParser.NOT = 263;
    SHARCParser.NU = 264;
    SHARCParser.NW = 265;
    SHARCParser.OFFSETOF = 266;
    SHARCParser.OR = 267;
    SHARCParser.P20 = 268;
    SHARCParser.P32 = 269;
    SHARCParser.P40 = 270;
    SHARCParser.PACK = 271;
    SHARCParser.PAGE = 272;
    SHARCParser.PASS = 273;
    SHARCParser.PC = 274;
    SHARCParser.PCSTK = 275;
    SHARCParser.PCSTKP = 276;
    SHARCParser.PM = 277;
    SHARCParser.PMADR = 278;
    SHARCParser.PMBANK1 = 279;
    SHARCParser.PMDAE = 280;
    SHARCParser.PMDAS = 281;
    SHARCParser.POP = 282;
    SHARCParser.POVL0 = 283;
    SHARCParser.POVL1 = 284;
    SHARCParser.PSA1E = 285;
    SHARCParser.PSA1S = 286;
    SHARCParser.PSA2E = 287;
    SHARCParser.PSA3E = 288;
    SHARCParser.PSA3S = 289;
    SHARCParser.PSA4E = 290;
    SHARCParser.PSA4S = 291;
    SHARCParser.PUSH = 292;
    SHARCParser.PX = 293;
    SHARCParser.PX1 = 294;
    SHARCParser.PX2 = 295;
    SHARCParser.RETAIN_NAME = 296;
    SHARCParser.R0 = 297;
    SHARCParser.R1 = 298;
    SHARCParser.R2 = 299;
    SHARCParser.R3 = 300;
    SHARCParser.R4 = 301;
    SHARCParser.R5 = 302;
    SHARCParser.R6 = 303;
    SHARCParser.R7 = 304;
    SHARCParser.R8 = 305;
    SHARCParser.R9 = 306;
    SHARCParser.R10 = 307;
    SHARCParser.R11 = 308;
    SHARCParser.R12 = 309;
    SHARCParser.R13 = 310;
    SHARCParser.R14 = 311;
    SHARCParser.R15 = 312;
    SHARCParser.READ = 313;
    SHARCParser.RECIPS = 314;
    SHARCParser.RFRAME = 315;
    SHARCParser.RND = 316;
    SHARCParser.ROT = 317;
    SHARCParser.RS = 318;
    SHARCParser.RSQRTS = 319;
    SHARCParser.RTI = 320;
    SHARCParser.RTS = 321;
    SHARCParser.SAT = 322;
    SHARCParser.SCALB = 323;
    SHARCParser.SCL = 324;
    SHARCParser.SE = 325;
    SHARCParser.SET = 326;
    SHARCParser.SF = 327;
    SHARCParser.SI = 328;
    SHARCParser.SIN = 329;
    SHARCParser.SIZE = 330;
    SHARCParser.SIZEOF = 331;
    SHARCParser.SQR = 332;
    SHARCParser.SR = 333;
    SHARCParser.SSF = 334;
    SHARCParser.SSFR = 335;
    SHARCParser.SSI = 336;
    SHARCParser.SSIR = 337;
    SHARCParser.ST = 338;
    SHARCParser.STEP = 339;
    SHARCParser.STKY = 340;
    SHARCParser.STRUCT = 341;
    SHARCParser.STS = 342;
    SHARCParser.SUF = 343;
    SHARCParser.SUFR = 344;
    SHARCParser.SUI = 345;
    SHARCParser.SV = 346;
    SHARCParser.SW = 347;
    SHARCParser.SZ = 348;
    SHARCParser.TAG = 349;
    SHARCParser.TCOUNT = 350;
    SHARCParser.TF = 351;
    SHARCParser.TGL = 352;
    SHARCParser.TPERIOD = 353;
    SHARCParser.TRUE = 354;
    SHARCParser.TRUNC = 355;
    SHARCParser.TST = 356;
    SHARCParser.TYPE = 357;
    SHARCParser.TRAP = 358;
    SHARCParser.UF = 359;
    SHARCParser.UI = 360;
    SHARCParser.UNPACK = 361;
    SHARCParser.UNTIL = 362;
    SHARCParser.UR = 363;
    SHARCParser.USF = 364;
    SHARCParser.USFR = 365;
    SHARCParser.USI = 366;
    SHARCParser.USIR = 367;
    SHARCParser.USTAT1 = 368;
    SHARCParser.USTAT2 = 369;
    SHARCParser.UUF = 370;
    SHARCParser.UUFR = 371;
    SHARCParser.UUI = 372;
    SHARCParser.UUIR = 373;
    SHARCParser.VAL = 374;
    SHARCParser.WITH = 375;
    SHARCParser.XOR = 376;
    SHARCParser.PLUS = 377;
    SHARCParser.MINUS = 378;
    SHARCParser.MULT = 379;
    SHARCParser.DIV = 380;
    SHARCParser.DIV_MOD = 381;
    SHARCParser.EQU = 382;
    SHARCParser.I_OR = 383;
    SHARCParser.I_XOR = 384;
    SHARCParser.COMMA = 385;
    SHARCParser.COLON = 386;
    SHARCParser.SEMICOLON = 387;
    SHARCParser.LPARENTHESE = 388;
    SHARCParser.RPARENTHESE = 389;
    SHARCParser.LBRACKET = 390;
    SHARCParser.RBRACKET = 391;
    SHARCParser.LBRACE = 392;
    SHARCParser.RBRACE = 393;
    SHARCParser.AT = 394;
    SHARCParser.NO_INIT = 395;
    SHARCParser.ZERO_INIT = 396;
    SHARCParser.RUNTIME_INIT = 397;
    SHARCParser.CODE = 398;
    SHARCParser.DATA = 399;
    SHARCParser.DATA64 = 400;
    SHARCParser.DMAONLY = 401;
    SHARCParser.SECTION = 402;
    SHARCParser.SECTION_INFO = 403;
    SHARCParser.STMT = 404;
    SHARCParser.ADDR = 405;
    SHARCParser.BIT_DATA = 406;
    SHARCParser.JUMP_INT = 407;
    SHARCParser.JUMP_PC = 408;
    SHARCParser.JUMP_MD = 409;
    SHARCParser.MODIFIER = 410;
    SHARCParser.MULTI_MOD = 411;
    SHARCParser.LABLE = 412;
    SHARCParser.VARDEF = 413;
    SHARCParser.ARRDEF = 414;
    SHARCParser.DM_ACCESS = 415;
    SHARCParser.PM_ACCESS = 416;
    SHARCParser.CONDITION = 417;
    SHARCParser.IF_STMT = 418;
    SHARCParser.VALUE_EXP = 419;
    SHARCParser.NULL = 420;
    SHARCParser.CHAR_LITERAL = 421;
    SHARCParser.STR_LITERAL = 422;
    SHARCParser.DIRECTIVE = 423;
    SHARCParser.NEGATE = 424;
    SHARCParser.ID = 425;
    SHARCParser.COMMENT = 426;
    SHARCParser.RULE_prog = 0;
    SHARCParser.RULE_statement = 1;
    SHARCParser.RULE_stmt_atom = 2;
    SHARCParser.RULE_sec = 3;
    SHARCParser.RULE_seg = 4;
    SHARCParser.RULE_end_seg = 5;
    SHARCParser.RULE_seg_qualifier = 6;
    SHARCParser.RULE_seg_qualifier1 = 7;
    SHARCParser.RULE_seg_qualifier2 = 8;
    SHARCParser.RULE_seg_qualifier3 = 9;
    SHARCParser.RULE_seg_qualifier_1 = 10;
    SHARCParser.RULE_seg_qualifier_2 = 11;
    SHARCParser.RULE_seg_qualifier_3 = 12;
    SHARCParser.RULE_stmt = 13;
    SHARCParser.RULE_declaration = 14;
    SHARCParser.RULE_declaration_exp1 = 15;
    SHARCParser.RULE_declaration_exp2 = 16;
    SHARCParser.RULE_declaration_exp3 = 17;
    SHARCParser.RULE_declaration_exp4 = 18;
    SHARCParser.RULE_declaration_exp5 = 19;
    SHARCParser.RULE_declaration_exp_f1 = 20;
    SHARCParser.RULE_declaration_exp_f2 = 21;
    SHARCParser.RULE_initExpression = 22;
    SHARCParser.RULE_var_addr = 23;
    SHARCParser.RULE_value_exp = 24;
    SHARCParser.RULE_value_exp2 = 25;
    SHARCParser.RULE_term = 26;
    SHARCParser.RULE_factor = 27;
    SHARCParser.RULE_atom = 28;
    SHARCParser.RULE_compute = 29;
    SHARCParser.RULE_if_compute_mov = 30;
    SHARCParser.RULE_if_compute_mov_exp = 31;
    SHARCParser.RULE_compute_mov_exp = 32;
    SHARCParser.RULE_mov_exp_1 = 33;
    SHARCParser.RULE_mov_exp_1_1 = 34;
    SHARCParser.RULE_mov_exp_1_2 = 35;
    SHARCParser.RULE_mov_exp_3a = 36;
    SHARCParser.RULE_mov_exp_3b = 37;
    SHARCParser.RULE_mov_exp_3c = 38;
    SHARCParser.RULE_mov_exp_3d = 39;
    SHARCParser.RULE_mov_exp_4a = 40;
    SHARCParser.RULE_mov_exp_4b = 41;
    SHARCParser.RULE_mov_exp_4c = 42;
    SHARCParser.RULE_mov_exp_4d = 43;
    SHARCParser.RULE_mov_exp_5 = 44;
    SHARCParser.RULE_mov_exp_6a = 45;
    SHARCParser.RULE_mov_exp_6b = 46;
    SHARCParser.RULE_mov_exp_7 = 47;
    SHARCParser.RULE_mem_addr_ia_mb = 48;
    SHARCParser.RULE_mem_addr_ic_md = 49;
    SHARCParser.RULE_mem_addr_md_ic = 50;
    SHARCParser.RULE_mem_addr_mb_ia = 51;
    SHARCParser.RULE_mem_addr_ia_int = 52;
    SHARCParser.RULE_mem_addr_ic_int = 53;
    SHARCParser.RULE_mem_addr_int_ia = 54;
    SHARCParser.RULE_mem_addr_int_ic = 55;
    SHARCParser.RULE_mem_addr_int = 56;
    SHARCParser.RULE_mem_addr_int_ = 57;
    SHARCParser.RULE_mem_addr_dm_ia_mb = 58;
    SHARCParser.RULE_mem_addr_pm_ic_md = 59;
    SHARCParser.RULE_mem_addr_dm_mb_ia = 60;
    SHARCParser.RULE_mem_addr_pm_md_ic = 61;
    SHARCParser.RULE_mem_addr_dm_ia_int = 62;
    SHARCParser.RULE_mem_addr_pm_ic_int = 63;
    SHARCParser.RULE_mem_addr_dm_int_ia = 64;
    SHARCParser.RULE_mem_addr_pm_int_ic = 65;
    SHARCParser.RULE_mem_addr_dm_int = 66;
    SHARCParser.RULE_mem_addr_pm_int = 67;
    SHARCParser.RULE_fixpoint_alu_op = 68;
    SHARCParser.RULE_r_exp = 69;
    SHARCParser.RULE_floating_point_alu_op = 70;
    SHARCParser.RULE_f_exp = 71;
    SHARCParser.RULE_multi_op = 72;
    SHARCParser.RULE_multi_r = 73;
    SHARCParser.RULE_multi_exp_r = 74;
    SHARCParser.RULE_multi_exp_mrf = 75;
    SHARCParser.RULE_multi_exp_mrb = 76;
    SHARCParser.RULE_mr = 77;
    SHARCParser.RULE_shifter_op = 78;
    SHARCParser.RULE_shifter_exp = 79;
    SHARCParser.RULE_sec_op = 80;
    SHARCParser.RULE_sec_op2 = 81;
    SHARCParser.RULE_bit_data = 82;
    SHARCParser.RULE_add_or_sub = 83;
    SHARCParser.RULE_dual_op = 84;
    SHARCParser.RULE_dual_add_r = 85;
    SHARCParser.RULE_parallel_multi = 86;
    SHARCParser.RULE_flow_control_exp = 87;
    SHARCParser.RULE_flow_contorl_8 = 88;
    SHARCParser.RULE_flow_contorl_8_exp = 89;
    SHARCParser.RULE_flow_control_9_and_11 = 90;
    SHARCParser.RULE_flow_control_9_and_11_exp = 91;
    SHARCParser.RULE_flow_control_10 = 92;
    SHARCParser.RULE_flow_control_10_frag = 93;
    SHARCParser.RULE_flow_control_12 = 94;
    SHARCParser.RULE_lcntr_v = 95;
    SHARCParser.RULE_flow_control_13 = 96;
    SHARCParser.RULE_flow_control_8a = 97;
    SHARCParser.RULE_flow_control_8b = 98;
    SHARCParser.RULE_flow_control_9a = 99;
    SHARCParser.RULE_flow_control_9b = 100;
    SHARCParser.RULE_flow_control_11a = 101;
    SHARCParser.RULE_flow_control_11b = 102;
    SHARCParser.RULE_jump_addr_int_or_pc = 103;
    SHARCParser.RULE_jump_addr_md_or_pc = 104;
    SHARCParser.RULE_jump_addr_pc = 105;
    SHARCParser.RULE_jump_addr_int = 106;
    SHARCParser.RULE_jump_modifier = 107;
    SHARCParser.RULE_jump_modifier_ = 108;
    SHARCParser.RULE_jump_modifier_1 = 109;
    SHARCParser.RULE_jump_modifier2 = 110;
    SHARCParser.RULE_jump_modifier3 = 111;
    SHARCParser.RULE_jump_modifier3_ = 112;
    SHARCParser.RULE_jump_modifier3_1 = 113;
    SHARCParser.RULE_imm_mov_exp = 114;
    SHARCParser.RULE_imm_mov_14a = 115;
    SHARCParser.RULE_imm_mov_15a = 116;
    SHARCParser.RULE_imm_mov_14b = 117;
    SHARCParser.RULE_imm_mov_15b = 118;
    SHARCParser.RULE_imm_mov_16 = 119;
    SHARCParser.RULE_imm_mov_17 = 120;
    SHARCParser.RULE_u_reg2 = 121;
    SHARCParser.RULE_misc_exp = 122;
    SHARCParser.RULE_misc_20 = 123;
    SHARCParser.RULE_directive_exp = 124;
    SHARCParser.RULE_b_reg = 125;
    SHARCParser.RULE_l_reg = 126;
    SHARCParser.RULE_r_reg = 127;
    SHARCParser.RULE_f_reg = 128;
    SHARCParser.RULE_s_reg = 129;
    SHARCParser.RULE_ia = 130;
    SHARCParser.RULE_mb = 131;
    SHARCParser.RULE_ic = 132;
    SHARCParser.RULE_md = 133;
    SHARCParser.RULE_i_reg = 134;
    SHARCParser.RULE_m_reg = 135;
    SHARCParser.RULE_dag_reg = 136;
    SHARCParser.RULE_d_reg = 137;
    SHARCParser.RULE_u_reg = 138;
    SHARCParser.RULE_condition = 139;
    SHARCParser.RULE_ccondition = 140;
    SHARCParser.RULE_multi_mod1 = 141;
    SHARCParser.RULE_multi_mod1_ = 142;
    SHARCParser.RULE_multi_mod2 = 143;
    SHARCParser.RULE_multi_mod2_ = 144;
    SHARCParser.RULE_r3_0 = 145;
    SHARCParser.RULE_r7_4 = 146;
    SHARCParser.RULE_r11_8 = 147;
    SHARCParser.RULE_r15_12 = 148;
    SHARCParser.RULE_f3_0 = 149;
    SHARCParser.RULE_f7_4 = 150;
    SHARCParser.RULE_f11_8 = 151;
    SHARCParser.RULE_f15_12 = 152;
    SHARCParser.RULE_addr = 153;
    SHARCParser.RULE_mrf = 154;
    SHARCParser.RULE_mrb = 155;
    // tslint:disable:no-trailing-whitespace
    SHARCParser.ruleNames = [
        "prog", "statement", "stmt_atom", "sec", "seg", "end_seg", "seg_qualifier",
        "seg_qualifier1", "seg_qualifier2", "seg_qualifier3", "seg_qualifier_1",
        "seg_qualifier_2", "seg_qualifier_3", "stmt", "declaration", "declaration_exp1",
        "declaration_exp2", "declaration_exp3", "declaration_exp4", "declaration_exp5",
        "declaration_exp_f1", "declaration_exp_f2", "initExpression", "var_addr",
        "value_exp", "value_exp2", "term", "factor", "atom", "compute", "if_compute_mov",
        "if_compute_mov_exp", "compute_mov_exp", "mov_exp_1", "mov_exp_1_1", "mov_exp_1_2",
        "mov_exp_3a", "mov_exp_3b", "mov_exp_3c", "mov_exp_3d", "mov_exp_4a",
        "mov_exp_4b", "mov_exp_4c", "mov_exp_4d", "mov_exp_5", "mov_exp_6a", "mov_exp_6b",
        "mov_exp_7", "mem_addr_ia_mb", "mem_addr_ic_md", "mem_addr_md_ic", "mem_addr_mb_ia",
        "mem_addr_ia_int", "mem_addr_ic_int", "mem_addr_int_ia", "mem_addr_int_ic",
        "mem_addr_int", "mem_addr_int_", "mem_addr_dm_ia_mb", "mem_addr_pm_ic_md",
        "mem_addr_dm_mb_ia", "mem_addr_pm_md_ic", "mem_addr_dm_ia_int", "mem_addr_pm_ic_int",
        "mem_addr_dm_int_ia", "mem_addr_pm_int_ic", "mem_addr_dm_int", "mem_addr_pm_int",
        "fixpoint_alu_op", "r_exp", "floating_point_alu_op", "f_exp", "multi_op",
        "multi_r", "multi_exp_r", "multi_exp_mrf", "multi_exp_mrb", "mr", "shifter_op",
        "shifter_exp", "sec_op", "sec_op2", "bit_data", "add_or_sub", "dual_op",
        "dual_add_r", "parallel_multi", "flow_control_exp", "flow_contorl_8",
        "flow_contorl_8_exp", "flow_control_9_and_11", "flow_control_9_and_11_exp",
        "flow_control_10", "flow_control_10_frag", "flow_control_12", "lcntr_v",
        "flow_control_13", "flow_control_8a", "flow_control_8b", "flow_control_9a",
        "flow_control_9b", "flow_control_11a", "flow_control_11b", "jump_addr_int_or_pc",
        "jump_addr_md_or_pc", "jump_addr_pc", "jump_addr_int", "jump_modifier",
        "jump_modifier_", "jump_modifier_1", "jump_modifier2", "jump_modifier3",
        "jump_modifier3_", "jump_modifier3_1", "imm_mov_exp", "imm_mov_14a", "imm_mov_15a",
        "imm_mov_14b", "imm_mov_15b", "imm_mov_16", "imm_mov_17", "u_reg2", "misc_exp",
        "misc_20", "directive_exp", "b_reg", "l_reg", "r_reg", "f_reg", "s_reg",
        "ia", "mb", "ic", "md", "i_reg", "m_reg", "dag_reg", "d_reg", "u_reg",
        "condition", "ccondition", "multi_mod1", "multi_mod1_", "multi_mod2",
        "multi_mod2_", "r3_0", "r7_4", "r11_8", "r15_12", "f3_0", "f7_4", "f11_8",
        "f15_12", "addr", "mrf", "mrb",
    ];
    SHARCParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'_ADI_'", "'_DATE_'",
        "'_FILE'", "'.align'", "'.compress'", "'.elif'", "'.else'", "'.endif'",
        "'.extern'", "'.file'", "'.file_attr'", "'.forcecompress'", "'.global'",
        "'.if'", "'.import'", "'.inc/binary'", "'.leftmargin'", "'.list'", "'.list_data'",
        "'.list_datfile'", "'.list_deftab'", "'.list_loctab'", "'.list_wrapdata'",
        "'.newpage'", "'.nocompress'", "'.nolist_data'", "'.nolist_datfile'",
        "'.nolist_wrapdata'", "'.pagelength'", "'.pagewidth'", "'.precision'",
        "'.round_minus'", "'.round_nearest'", "'.round_plus'", "'.round_zero'",
        "'.previous'", "'.section'", "'.segment'", "'.endseg'", "'.struct'", "'.type'",
        "'.var'", "'.weak'", "'abs'", "'ac'", "'acs'", "'act'", "'address'", "'and'",
        "'ashift'", "'astat'", "'av'", "'b0'", "'b1'", "'b2'", "'b3'", "'b4'",
        "'b5'", "'b6'", "'b7'", "'b8'", "'b9'", "'b10'", "'b11'", "'b12'", "'b13'",
        "'b14'", "'b15'", "'bb'", "'bclr'", "'bf'", "'bit'", "'bitrev'", "'bm'",
        "'bset'", "'btgl'", "'btst'", "'by'", "'ca'", "'cache'", "'call'", "'ch'",
        "'ci'", "'cjump'", "'cl'", "'clr'", "'clip'", "'comp'", "'copysign'",
        "'cos'", "'curlcntr'", "'daddr'", "'db'", "'dec'", "'def'", "'dim'", "'dm'",
        "'dm1e'", "'dm1s'", "'dm2e'", "'dm2s'", "'dmadr'", "'dmabank1'", "'dmabank2'",
        "'dmabank3'", "'dmawait'", "'do'", "'dovl'", "'eb'", "'ece'", "'ef'",
        "'else'", "'emuclk'", "'emuclk2'", "'emuidle'", "'emun'", "'eos'", "'eq'",
        "'ex'", "'exp'", "'exp2'", "'f0'", "'f1'", "'f2'", "'f3'", "'f4'", "'f5'",
        "'f6'", "'f7'", "'f8'", "'f9'", "'f10'", "'f11'", "'f12'", "'f13'", "'f14'",
        "'f15'", "'faddr'", "'fdep'", "'fext'", "'file'", "'fix'", "'flag0_in'",
        "'flag1_in'", "'flag2_in'", "'flag3_in'", "'float'", "'flush'", "'fmerg'",
        "'forever'", "'fpack'", "'fractional'", "'fta'", "'ftb'", "'ftc'", "'funpack'",
        "'gcc_compiled'", "'ge'", "'gt'", "'i0'", "'i1'", "'i2'", "'i3'", "'i4'",
        "'i5'", "'i6'", "'i7'", "'i8'", "'i9'", "'i10'", "'i11'", "'i12'", "'i13'",
        "'i14'", "'i15'", "'idle'", "'idle16'", "'idlei15'", "'idlei16'", "'if'",
        "'imask'", "'imaskp'", "'inc'", "'irptl'", "'jump'", "'l0'", "'l1'", "'l2'",
        "'l3'", "'l4'", "'l5'", "'l6'", "'l7'", "'l8'", "'l9'", "'l10'", "'l11'",
        "'l12'", "'l13'", "'l14'", "'l15'", "'la'", "'laddr'", "'lce'", "'lcntr'",
        "'le'", "'lefto'", "'leftz'", "'length'", "'line'", "'ln'", "'load'",
        "'log2'", "'logb'", "'loop'", "'lr'", "'lshift'", "'lt'", "'m0'", "'m1'",
        "'m2'", "'m3'", "'m4'", "'m5'", "'m6'", "'m7'", "'m8'", "'m9'", "'m10'",
        "'m11'", "'m12'", "'m13'", "'m14'", "'m15'", "'mant'", "'max'", "'mbm'",
        "'min'", "'mod'", "'mode1'", "'mode2'", "'modify'", "'mr0b'", "'mr0f'",
        "'mr1b'", "'mr1f'", "'mr2b'", "'mr2f'", "'mrb'", "'mrf'", "'ms'", "'mv'",
        "'nbm'", "'ne'", "'nofo'", "'nofz'", "'nop'", "'nopspecial'", "'not'",
        "'nu'", "'nw'", "'offsetof'", "'or'", "'p20'", "'p32'", "'p40'", "'pack'",
        "'page'", "'pass'", "'pc'", "'pcstk'", "'pcstkp'", "'pm'", "'pmadr'",
        "'pmbank1'", "'pmdae'", "'pmdas'", "'pop'", "'povl0'", "'povl1'", "'psa1e'",
        "'psa1s'", "'psa2e'", "'psa3e'", "'psa3s'", "'psa4e'", "'psa4s'", "'push'",
        "'px'", "'px1'", "'px2'", "'retain_name'", "'r0'", "'r1'", "'r2'", "'r3'",
        "'r4'", "'r5'", "'r6'", "'r7'", "'r8'", "'r9'", "'r10'", "'r11'", "'r12'",
        "'r13'", "'r14'", "'r15'", "'read'", "'recips'", "'rframe'", "'rnd'",
        "'rot'", "'rs'", "'rsqrts'", "'rti'", "'rts'", "'sat'", "'scalb'", "'scl'",
        "'se'", "'set'", "'sf'", "'si'", "'sin'", "'size'", "'sizeof'", "'sqr'",
        "'sr'", "'ssf'", "'ssfr'", "'ssi'", "'ssir'", "'st'", "'step'", "'stky'",
        "'struct'", "'sts'", "'suf'", "'sufr'", "'sui'", "'sv'", "'sw'", "'sz'",
        "'tag'", "'tcount'", "'tf'", "'tgl'", "'tperiod'", "'true'", "'trunc'",
        "'tst'", "'type'", "'trap'", "'uf'", "'ui'", "'unpack'", "'until'", "'ur'",
        "'usf'", "'usfr'", "'usi'", "'usir'", "'ustat1'", "'ustat2'", "'uuf'",
        "'uufr'", "'uui'", "'uuir'", "'val'", "'with'", "'xor'", "'+'", "'-'",
        "'*'", "'/'", "'%'", "'='", "'|'", "'^'", "','", "':'", "';'", "'('",
        "')'", "'['", "']'", "'{'", "'}'", "'@'", "'no_init'", "'zero_init'",
        "'runtime_init'", "'code'", "'data'", "'data64'", "'dmaonly'", "'SECTION'",
        "'SECTION_INFO'", "'STMT'", "'ADDR'", "'BIT_DATA'", "'JUMP_INT'", "'JUMP_PC'",
        "'JUMP_MD'", "'MODIFIER'", "'MULTI_MOD'", "'LABLE'", "'VARDEF'", "'ARRDEF'",
        "'DM_ACCESS'", "'PM_ACCESS'", "'CONDITION'", "'IF_STMT'", "'VALUE_EXP'",
        "'NULL'", "'CHAR_LITERAL'", "'STR_LITERAL'", "'DIRECTIVE'", "'NEGATE'",
    ];
    SHARCParser._SYMBOLIC_NAMES = [
        undefined, "StringLiteral", "CharLiteral", "INT", "WS", "DOT_ADI_", "DOT_DATE_",
        "DOT_FILE_", "DOT_ALGIGN", "DOT_COMPRESS", "DOT_ELIF", "DOT_ELSE", "DOT_ENDIF",
        "DOT_EXTERN", "DOT_FILE", "DOT_FILE_ATTR", "DOT_FORCECOMPRESS", "DOT_GLOBAL",
        "DOT_IF", "DOT_IMPORT", "DOT_INCBINARY", "DOT_LEFTMARGIN", "DOT_LIST",
        "DOT_LIST_DATA", "DOT_LIST_DATFILE", "DOT_LIST_DEFTAB", "DOT_LIST_LOCTAB",
        "DOT_LIST_WRAPDATA", "DOT_NEWPAGE", "DOT_NOCOMPRESS", "DOT_NOLIST_DATA",
        "DOT_NOLIST_DATFILE", "DOT_NOLIST_WRAPDATA", "DOT_PAGELENGTH", "DOT_PAGEWIDTH",
        "DOT_PRECISION", "DOT_ROUND_MINUS", "DOT_ROUND_NEAREST", "DOT_ROUND_PLUS",
        "DOT_ROUND_ZERO", "DOT_PREVIOUS", "DOT_SECTION", "DOT_SEGMENT", "DOT_ENDSEG",
        "DOT_STRUCT", "DOT_TYPE", "DOT_VAR", "DOT_WEAK", "ABS", "AC", "ACS", "ACT",
        "ADDRESS", "AND", "ASHIFT", "ASTAT", "AV", "B0", "B1", "B2", "B3", "B4",
        "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14", "B15",
        "BB", "BCLR", "BF", "BIT", "BITREV", "BM", "BSET", "BTGL", "BTST", "BY",
        "CA", "CACHE", "CALL", "CH", "CI", "CJUMP", "CL", "CLR", "CLIP", "COMP",
        "COPYSIGN", "COS", "CURLCNTR", "DADDR", "DB", "DEC", "DEF", "DIM", "DM",
        "DMA1E", "DMA1s", "DMA2E", "DMA2s", "DMADR", "DMABANK1", "DMABANK2", "DMABANK3",
        "DMAWAIT", "DO", "DOVL", "EB", "ECE", "EF", "ELSE", "EMUCLK", "EMUCLK2",
        "EMUIDLE", "EMUN", "EOS", "EQ", "EX", "EXP", "EXP2", "F0", "F1", "F2",
        "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13",
        "F14", "F15", "FADDR", "FDEP", "FEXT", "FILE", "FIX", "FLAG0_IN", "FLAG1_IN",
        "FLAG2_IN", "FLAG3_IN", "FLOAT", "FLUSH", "FMERG", "FOREVER", "FPACK",
        "FRACTIONAL", "FTA", "FTB", "FTC", "FUNPACK", "GCC_COMPILED", "GE", "GT",
        "I0", "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10", "I11",
        "I12", "I13", "I14", "I15", "IDLE", "IDLE16", "IDLEI15", "IDLEI16", "IF",
        "IMASK", "IMASKP", "INC", "IRPTL", "JUMP", "L0", "L1", "L2", "L3", "L4",
        "L5", "L6", "L7", "L8", "L9", "L10", "L11", "L12", "L13", "L14", "L15",
        "LA", "LADDR", "LCE", "LCNTR", "LE", "LEFTO", "LEFTZ", "LENGTH", "LINE",
        "LN", "LOAD", "LOG2", "LOGB", "LOOP", "LR", "LSHIFT", "LT", "M0", "M1",
        "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13",
        "M14", "M15", "MANT", "MAX", "MBM", "MIN", "MOD", "MODE1", "MODE2", "MODIFY",
        "MR0B", "MR0F", "MR1B", "MR1F", "MR2B", "MR2F", "MRB", "MRF", "MS", "MV",
        "NBM", "NE", "NOFO", "NOFZ", "NOP", "NOPSPECIAL", "NOT", "NU", "NW", "OFFSETOF",
        "OR", "P20", "P32", "P40", "PACK", "PAGE", "PASS", "PC", "PCSTK", "PCSTKP",
        "PM", "PMADR", "PMBANK1", "PMDAE", "PMDAS", "POP", "POVL0", "POVL1", "PSA1E",
        "PSA1S", "PSA2E", "PSA3E", "PSA3S", "PSA4E", "PSA4S", "PUSH", "PX", "PX1",
        "PX2", "RETAIN_NAME", "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7",
        "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "READ", "RECIPS",
        "RFRAME", "RND", "ROT", "RS", "RSQRTS", "RTI", "RTS", "SAT", "SCALB",
        "SCL", "SE", "SET", "SF", "SI", "SIN", "SIZE", "SIZEOF", "SQR", "SR",
        "SSF", "SSFR", "SSI", "SSIR", "ST", "STEP", "STKY", "STRUCT", "STS", "SUF",
        "SUFR", "SUI", "SV", "SW", "SZ", "TAG", "TCOUNT", "TF", "TGL", "TPERIOD",
        "TRUE", "TRUNC", "TST", "TYPE", "TRAP", "UF", "UI", "UNPACK", "UNTIL",
        "UR", "USF", "USFR", "USI", "USIR", "USTAT1", "USTAT2", "UUF", "UUFR",
        "UUI", "UUIR", "VAL", "WITH", "XOR", "PLUS", "MINUS", "MULT", "DIV", "DIV_MOD",
        "EQU", "I_OR", "I_XOR", "COMMA", "COLON", "SEMICOLON", "LPARENTHESE",
        "RPARENTHESE", "LBRACKET", "RBRACKET", "LBRACE", "RBRACE", "AT", "NO_INIT",
        "ZERO_INIT", "RUNTIME_INIT", "CODE", "DATA", "DATA64", "DMAONLY", "SECTION",
        "SECTION_INFO", "STMT", "ADDR", "BIT_DATA", "JUMP_INT", "JUMP_PC", "JUMP_MD",
        "MODIFIER", "MULTI_MOD", "LABLE", "VARDEF", "ARRDEF", "DM_ACCESS", "PM_ACCESS",
        "CONDITION", "IF_STMT", "VALUE_EXP", "NULL", "CHAR_LITERAL", "STR_LITERAL",
        "DIRECTIVE", "NEGATE", "ID", "COMMENT",
    ];
    SHARCParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SHARCParser._LITERAL_NAMES, SHARCParser._SYMBOLIC_NAMES, []);
    SHARCParser._serializedATNSegments = 3;
    SHARCParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u01AC\u0662\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
        "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
        "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
        "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
        "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
        "\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
        "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
        "\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
        "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x03\x02\x03\x02\x03\x02\x06" +
        "\x02\u013E\n\x02\r\x02\x0E\x02\u013F\x03\x03\x03\x03\x03\x03\x06\x03\u0145" +
        "\n\x03\r\x03\x0E\x03\u0146\x03\x03\x05\x03\u014A\n\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x05\x04\u0151\n\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
        "\x05\b\u0160\n\b\x03\b\x03\b\x03\b\x05\b\u0165\n\b\x03\b\x03\b\x03\b\x05" +
        "\b\u016A\n\b\x05\b\u016C\n\b\x03\t\x03\t\x03\t\x05\t\u0171\n\t\x03\n\x03" +
        "\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0186\n\x0F" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u018E\n\x10\x03" +
        "\x11\x03\x11\x03\x11\x07\x11\u0193\n\x11\f\x11\x0E\x11\u0196\v\x11\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x07\x12\u019C\n\x12\f\x12\x0E\x12\u019F\v" +
        "\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01A6\n\x13\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u01AE\n\x14\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x07\x16\u01B7\n\x16\f\x16" +
        "\x0E\x16\u01BA\v\x16\x03\x16\x05\x16\u01BD\n\x16\x03\x17\x03\x17\x03\x17" +
        "\x03\x17\x03\x17\x05\x17\u01C4\n\x17\x03\x18\x03\x18\x05\x18\u01C8\n\x18" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01D0\n\x19\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01D7\n\x1B\f\x1B\x0E\x1B" +
        "\u01DA\v\x1B\x03\x1C\x05\x1C\u01DD\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01E6\n\x1D\x03\x1E\x03\x1E\x03\x1E\x05" +
        "\x1E\u01EB\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01F2" +
        "\n\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x05!\u01FA\n!\x03\"\x03\"\x03\"\x05" +
        "\"\u01FF\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x05\"\u020C\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$" +
        "\x03$\x03$\x03$\x05$\u021A\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%" +
        "\x05%\u0224\n%\x03&\x03&\x05&\u0228\n&\x03&\x03&\x03&\x03\'\x03\'\x05" +
        "\'\u022F\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u0238\n(\x03)" +
        "\x03)\x03)\x03)\x05)\u023E\n)\x03*\x03*\x05*\u0242\n*\x03*\x03*\x03*\x03" +
        "+\x03+\x03,\x03,\x03,\x03,\x05,\u024D\n,\x03-\x03-\x03.\x03.\x03.\x03" +
        ".\x03/\x03/\x05/\u0257\n/\x03/\x03/\x03/\x030\x030\x030\x030\x050\u0260" +
        "\n0\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x05" +
        "1\u026F\n1\x032\x032\x032\x032\x032\x032\x033\x033\x033\x033\x033\x03" +
        "3\x034\x034\x034\x034\x034\x034\x035\x035\x035\x035\x035\x035\x036\x03" +
        "6\x036\x036\x036\x036\x037\x037\x037\x037\x037\x037\x038\x038\x038\x03" +
        "8\x038\x038\x039\x039\x039\x039\x039\x039\x03:\x03:\x03;\x03;\x03;\x03" +
        ";\x03;\x05;\u02A8\n;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03" +
        "?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03" +
        "C\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
        "F\x03F\x03F\x03F\x05F\u02D3\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05" +
        "G\u0330\nG\x03G\x03G\x03G\x03G\x05G\u0336\nG\x05G\u0338\nG\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0345\nH\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x05I\u0376\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0397\nI\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05" +
        "J\u03A9\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u03B2\nJ\x05J\u03B4" +
        "\nJ\x03K\x03K\x03K\x03K\x05K\u03BA\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
        "L\x03L\x05L\u03C4\nL\x03L\x03L\x03L\x05L\u03C9\nL\x03L\x05L\u03CC\nL\x03" +
        "M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u03D6\nM\x03M\x03M\x03M\x05" +
        "M\u03DB\nM\x05M\u03DD\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N" +
        "\u03E7\nN\x03N\x03N\x03N\x05N\u03EC\nN\x05N\u03EE\nN\x03O\x03O\x03P\x03" +
        "P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0400" +
        "\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0435\nQ\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u043E\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u044C\nQ\x03Q\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x05Q\u0454\nQ\x03R\x03R\x03R\x03R\x05R\u045A\nR\x03S\x03S\x05S" +
        "\u045E\nS\x03T\x03T\x03T\x03T\x03U\x03U\x03V\x03V\x05V\u0468\nV\x03W\x03" +
        "W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x06" +
        "X\u0479\nX\rX\x0EX\u047A\x03X\x03X\x03X\x06X\u0480\nX\rX\x0EX\u0481\x05" +
        "X\u0484\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05" +
        "Y\u0491\nY\x03Z\x03Z\x03Z\x03Z\x03[\x03[\x05[\u0499\n[\x03\\\x03\\\x03" +
        "\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x05]\u04A6\n]\x03^\x03" +
        "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u04B1\n^\x03^\x03^\x03_\x03" +
        "_\x05_\u04B7\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03a\x03" +
        "a\x05a\u04C4\na\x03b\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x05c\u04CE\nc" +
        "\x03d\x03d\x03d\x05d\u04D3\nd\x03e\x03e\x03e\x05e\u04D8\ne\x03e\x03e\x05" +
        "e\u04DC\ne\x03f\x03f\x03f\x05f\u04E1\nf\x03f\x03f\x05f\u04E5\nf\x03g\x03" +
        "g\x05g\u04E9\ng\x03g\x03g\x05g\u04ED\ng\x03h\x03h\x05h\u04F1\nh\x03h\x03" +
        "h\x05h\u04F5\nh\x03i\x03i\x05i\u04F9\ni\x03j\x03j\x05j\u04FD\nj\x03k\x03" +
        "k\x03k\x03k\x03k\x03k\x03l\x03l\x03m\x03m\x03n\x03n\x03n\x03n\x05n\u050D" +
        "\nn\x03n\x03n\x03o\x03o\x03o\x05o\u0514\no\x03p\x03p\x03p\x03p\x03q\x03" +
        "q\x03r\x03r\x03r\x05r\u051F\nr\x03r\x03r\x03s\x03s\x03s\x05s\u0526\ns" +
        "\x03t\x03t\x03t\x03t\x05t\u052C\nt\x03u\x03u\x05u\u0530\nu\x03u\x03u\x03" +
        "u\x03v\x03v\x05v\u0537\nv\x03v\x03v\x03v\x03w\x03w\x03w\x03w\x05w\u0540" +
        "\nw\x03x\x03x\x03x\x03x\x05x\u0546\nx\x03y\x03y\x05y\u054A\ny\x03y\x03" +
        "y\x03y\x03z\x03z\x03z\x03z\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03" +
        "{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u0562\n{\x03|\x03|\x03|\x03|\x03" +
        "|\x03|\x03|\x03|\x05|\u056C\n|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03" +
        "|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x07|\u057F\n|\f|\x0E|\u0582" +
        "\v|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x05|\u058C\n|\x03|\x05|\u058F" +
        "\n|\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x07~\u059B\n~\f" +
        "~\x0E~\u059E\v~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x07~\u05A9" +
        "\n~\f~\x0E~\u05AC\v~\x03~\x03~\x03~\x03~\x07~\u05B2\n~\f~\x0E~\u05B5\v" +
        "~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
        "~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u05CC\n~\x03~\x03~\x03~\x03" +
        "~\x03~\x03~\x03~\x03~\x05~\u05D6\n~\x03\x7F\x03\x7F\x03\x80\x03\x80\x03" +
        "\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03\x84\x03\x84\x03\x85\x03" +
        "\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03\x88\x05\x88\u05EC\n\x88" +
        "\x03\x89\x03\x89\x05\x89\u05F0\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05" +
        "\x8A\u05F6\n\x8A\x03\x8B\x03\x8B\x05\x8B\u05FA\n\x8B\x03\x8C\x03\x8C\x03" +
        "\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03" +
        "\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u060C\n\x8C\x03\x8D\x03\x8D" +
        "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
        "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
        "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
        "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
        "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
        "\x03\x8E\x05\x8E\u063E\n\x8E\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90\x03" +
        "\x90\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03" +
        "\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98\x03" +
        "\x98\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03" +
        "\x9D\x03\x9D\x03\x9D\x02\x02\x02\x9E\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
        "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
        "8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
        "T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
        "p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
        "\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
        "\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
        "\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
        "\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
        "\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
        "\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
        "\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
        "\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
        "\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
        "\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
        "\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\x02\"\x04\x02\u0117" +
        "\u0117\u0190\u0190\x04\x02gg\u0191\u0192\x03\x02\u018D\u018F\x04\x02\u017B" +
        "\u017F\u0181\u0182\x03\x02\u017B\u017C\x03\x02\xFF\u0100\x04\x02YY\xD0" +
        "\xD0\x07\x02\\\\\u0148\u0148\u0162\u0162\u0166\u0166\u017A\u017A\x04\x02" +
        "\u011C\u011C\u0126\u0126\x05\x02\xDD\xDD\u0115\u0115\u0158\u0158\x03\x02" +
        ";J\x03\x02\xC0\xCF\x03\x02\u012B\u013A\x03\x02\x80\x8F\b\x0299\xBB\xBC" +
        "\xBE\xBE\xF6\xF7\u0156\u0156\u0172\u0173\x03\x02\xA6\xAD\x03\x02\xE1\xE8" +
        "\x03\x02\xAE\xB5\x03\x02\xE9\xF0\x04\x02\u0149\u014A\u0169\u016A\x06\x02" +
        "\u0150\u0152\u0159\u015B\u016E\u0170\u0174\u0176\x04\x02\u012B\u012B\u012D" +
        "\u012E\x03\x02\u012F\u0132\x03\x02\u0133\u0136\x03\x02\u0137\u013A\x04" +
        "\x02\x80\x80\x82\x83\x03\x02\x84\x87\x03\x02\x88\x8B\x03\x02\x8C\x8F\x04" +
        "\x02\x05\x05\u01AB\u01AB\x05\x02\xFA\xFA\xFC\xFC\xFE\xFE\x05\x02\xF9\xF9" +
        "\xFB\xFB\xFD\xFD\x02\u0701\x02\u013D\x03\x02\x02\x02\x04\u0149\x03\x02" +
        "\x02\x02\x06\u0150\x03\x02\x02\x02\b\u0152\x03\x02\x02\x02\n\u0156\x03" +
        "\x02\x02\x02\f\u015A\x03\x02\x02\x02\x0E\u016B\x03\x02\x02\x02\x10\u016D" +
        "\x03\x02\x02\x02\x12\u0172\x03\x02\x02\x02\x14\u0175\x03\x02\x02\x02\x16" +
        "\u0178\x03\x02\x02\x02\x18\u017A\x03\x02\x02\x02\x1A\u017C\x03\x02\x02" +
        "\x02\x1C\u0185\x03\x02\x02\x02\x1E\u0187\x03\x02\x02\x02 \u018F\x03\x02" +
        "\x02\x02\"\u0197\x03\x02\x02\x02$\u01A0\x03\x02\x02\x02&\u01A7\x03\x02" +
        "\x02\x02(\u01AF\x03\x02\x02\x02*\u01BC\x03\x02\x02\x02,\u01C3\x03\x02" +
        "\x02\x02.\u01C7\x03\x02\x02\x020\u01CF\x03\x02\x02\x022\u01D1\x03\x02" +
        "\x02\x024\u01D3\x03\x02\x02\x026\u01DC\x03\x02\x02\x028\u01E5\x03\x02" +
        "\x02\x02:\u01EA\x03\x02\x02\x02<\u01F1\x03\x02\x02\x02>\u01F3\x03\x02" +
        "\x02\x02@\u01F9\x03\x02\x02\x02B\u01FE\x03\x02\x02\x02D\u020D\x03\x02" +
        "\x02\x02F\u0219\x03\x02\x02\x02H\u0223\x03\x02\x02\x02J\u0227\x03\x02" +
        "\x02\x02L\u022E\x03\x02\x02\x02N\u0233\x03\x02\x02\x02P\u0239\x03\x02" +
        "\x02\x02R\u0241\x03\x02\x02\x02T\u0246\x03\x02\x02\x02V\u0248\x03\x02" +
        "\x02\x02X\u024E\x03\x02\x02\x02Z\u0250\x03\x02\x02\x02\\\u0256\x03\x02" +
        "\x02\x02^\u025B\x03\x02\x02\x02`\u0261\x03\x02\x02\x02b\u0270\x03\x02" +
        "\x02\x02d\u0276\x03\x02\x02\x02f\u027C\x03\x02\x02\x02h\u0282\x03\x02" +
        "\x02\x02j\u0288\x03\x02\x02\x02l\u028E\x03\x02\x02\x02n\u0294\x03\x02" +
        "\x02\x02p\u029A\x03\x02\x02\x02r\u02A0\x03\x02\x02\x02t\u02A7\x03\x02" +
        "\x02\x02v\u02A9\x03\x02\x02\x02x\u02AC\x03\x02\x02\x02z\u02AF\x03\x02" +
        "\x02\x02|\u02B2\x03\x02\x02\x02~\u02B5\x03\x02\x02\x02\x80\u02B8\x03\x02" +
        "\x02\x02\x82\u02BB\x03\x02\x02\x02\x84\u02BE\x03\x02\x02\x02\x86\u02C1" +
        "\x03\x02\x02\x02\x88\u02C4\x03\x02\x02\x02\x8A\u02D2\x03\x02\x02\x02\x8C" +
        "\u0337\x03\x02\x02\x02\x8E\u0344\x03\x02\x02\x02\x90\u0396\x03\x02\x02" +
        "\x02\x92\u03B3\x03\x02\x02\x02\x94\u03B5\x03\x02\x02\x02\x96\u03CB\x03" +
        "\x02\x02\x02\x98\u03DC\x03\x02\x02\x02\x9A\u03ED\x03\x02\x02\x02\x9C\u03EF" +
        "\x03\x02\x02\x02\x9E\u03FF\x03\x02\x02\x02\xA0\u0453\x03\x02\x02\x02\xA2" +
        "\u0459\x03\x02\x02\x02\xA4\u045D\x03\x02\x02\x02\xA6\u045F\x03\x02\x02" +
        "\x02\xA8\u0463\x03\x02\x02\x02\xAA\u0467\x03\x02\x02\x02\xAC\u0469\x03" +
        "\x02\x02\x02\xAE\u0483\x03\x02\x02\x02\xB0\u0490\x03\x02\x02\x02\xB2\u0492" +
        "\x03\x02\x02\x02\xB4\u0498\x03\x02\x02\x02\xB6\u049A\x03\x02\x02\x02\xB8" +
        "\u04A5\x03\x02\x02\x02\xBA\u04A7\x03\x02\x02\x02\xBC\u04B6\x03\x02\x02" +
        "\x02\xBE\u04B8\x03\x02\x02\x02\xC0\u04C3\x03\x02\x02\x02\xC2\u04C5\x03" +
        "\x02\x02\x02\xC4\u04CA\x03\x02\x02\x02\xC6\u04CF\x03\x02\x02\x02\xC8\u04D4" +
        "\x03\x02\x02\x02\xCA\u04DD\x03\x02\x02\x02\xCC\u04E6\x03\x02\x02\x02\xCE" +
        "\u04EE\x03\x02\x02\x02\xD0\u04F8\x03\x02\x02\x02\xD2\u04FC\x03\x02\x02" +
        "\x02\xD4\u04FE\x03\x02\x02\x02\xD6\u0504\x03\x02\x02\x02\xD8\u0506\x03" +
        "\x02\x02\x02\xDA\u0508\x03\x02\x02\x02\xDC\u0510\x03\x02\x02\x02\xDE\u0515" +
        "\x03\x02\x02\x02\xE0\u0519\x03\x02\x02\x02\xE2\u051B\x03\x02\x02\x02\xE4" +
        "\u0522\x03\x02\x02\x02\xE6\u052B\x03\x02\x02\x02\xE8\u052F\x03\x02\x02" +
        "\x02\xEA\u0536\x03\x02\x02\x02\xEC\u053B\x03\x02\x02\x02\xEE\u0541\x03" +
        "\x02\x02\x02\xF0\u0549\x03\x02\x02\x02\xF2\u054E\x03\x02\x02\x02\xF4\u0561" +
        "\x03\x02\x02\x02\xF6\u058E\x03\x02\x02\x02\xF8\u0590\x03\x02\x02\x02\xFA" +
        "\u05D5\x03\x02\x02\x02\xFC\u05D7\x03\x02\x02\x02\xFE\u05D9\x03\x02\x02" +
        "\x02\u0100\u05DB\x03\x02\x02\x02\u0102\u05DD\x03\x02\x02\x02\u0104\u05DF" +
        "\x03\x02\x02\x02\u0106\u05E1\x03\x02\x02\x02\u0108\u05E3\x03\x02\x02\x02" +
        "\u010A\u05E5\x03\x02\x02\x02\u010C\u05E7\x03\x02\x02\x02\u010E\u05EB\x03" +
        "\x02\x02\x02\u0110\u05EF\x03\x02\x02\x02\u0112\u05F5\x03\x02\x02\x02\u0114" +
        "\u05F9\x03\x02\x02\x02\u0116\u060B\x03\x02\x02\x02\u0118\u060D\x03\x02" +
        "\x02\x02\u011A\u063D\x03\x02\x02\x02\u011C\u063F\x03\x02\x02\x02\u011E" +
        "\u0641\x03\x02\x02\x02\u0120\u0645\x03\x02\x02\x02\u0122\u0647\x03\x02" +
        "\x02\x02\u0124\u064B\x03\x02\x02\x02\u0126\u064D\x03\x02\x02\x02\u0128" +
        "\u064F\x03\x02\x02\x02\u012A\u0651\x03\x02\x02\x02\u012C\u0653\x03\x02" +
        "\x02\x02\u012E\u0655\x03\x02\x02\x02\u0130\u0657\x03\x02\x02\x02\u0132" +
        "\u0659\x03\x02\x02\x02\u0134\u065B\x03\x02\x02\x02\u0136\u065D\x03\x02" +
        "\x02\x02\u0138\u065F\x03\x02\x02\x02\u013A\u013B\x05\x04\x03\x02\u013B" +
        "\u013C\x07\u0185\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013A\x03\x02" +
        "\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
        "\u0140\x03\x02\x02\x02\u0140\x03\x03\x02\x02\x02\u0141\u014A\x05\x06\x04" +
        "\x02\u0142\u0143\x07\u01AB\x02\x02\u0143\u0145\x07\u0184\x02\x02\u0144" +
        "\u0142\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0144\x03\x02" +
        "\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
        "\u014A\x05\x06\x04\x02\u0149\u0141\x03\x02\x02\x02\u0149\u0144\x03\x02" +
        "\x02\x02\u014A\x05\x03\x02\x02\x02\u014B\u0151\x05\x1C\x0F\x02\u014C\u0151" +
        "\x05\b\x05\x02\u014D\u0151\x05\n\x06\x02\u014E\u0151\x05\f\x07\x02\u014F" +
        "\u0151\x05\xFA~\x02\u0150\u014B\x03\x02\x02\x02\u0150\u014C\x03";
    SHARCParser._serializedATNSegment1 = "\x02\x02\x02\u0150\u014D\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150" +
        "\u014F\x03\x02\x02\x02\u0151\x07\x03\x02\x02\x02\u0152\u0153\x07+\x02" +
        "\x02\u0153\u0154\x05\x0E\b\x02\u0154\u0155\x07\u01AB\x02\x02\u0155\t\x03" +
        "\x02\x02\x02\u0156\u0157\x07,\x02\x02\u0157\u0158\x05\x0E\b\x02\u0158" +
        "\u0159\x07\u01AB\x02\x02\u0159\v\x03\x02\x02\x02\u015A\u015B\x07-\x02" +
        "\x02\u015B\r\x03\x02\x02\x02\u015C\u015F\x05\x10\t\x02\u015D\u0160\x05" +
        "\x12\n\x02\u015E\u0160\x05\x14\v\x02\u015F\u015D\x03\x02\x02\x02\u015F" +
        "\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u016C\x03\x02" +
        "\x02\x02\u0161\u0164\x05\x12\n\x02\u0162\u0165\x05\x10\t\x02\u0163\u0165" +
        "\x05\x14\v\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0163\x03\x02\x02\x02" +
        "\u0164\u0165\x03\x02\x02\x02\u0165\u016C\x03\x02\x02\x02\u0166\u0169\x05" +
        "\x14\v\x02\u0167\u016A\x05\x10\t\x02\u0168\u016A\x05\x12\n\x02\u0169\u0167" +
        "\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02" +
        "\u016A\u016C\x03\x02\x02\x02\u016B\u015C\x03\x02\x02\x02\u016B\u0161\x03" +
        "\x02\x02\x02\u016B\u0166\x03\x02\x02\x02\u016C\x0F\x03\x02\x02\x02\u016D" +
        "\u0170\x07\u017E\x02\x02\u016E\u0171\x05\x16\f\x02\u016F\u0171\x05\x18" +
        "\r\x02\u0170\u016E\x03\x02\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171\x11" +
        "\x03\x02\x02\x02\u0172\u0173\x07\u017E\x02\x02\u0173\u0174\x05\x1A\x0E" +
        "\x02\u0174\x13\x03\x02\x02\x02\u0175\u0176\x07\u017E\x02\x02\u0176\u0177" +
        "\x07\u0193\x02\x02\u0177\x15\x03\x02\x02\x02\u0178\u0179\t\x02\x02\x02" +
        "\u0179\x17\x03\x02\x02\x02\u017A\u017B\t\x03\x02\x02\u017B\x19\x03\x02" +
        "\x02\x02\u017C\u017D\t\x04\x02\x02\u017D\x1B\x03\x02\x02\x02\u017E\u0186" +
        "\x05<\x1F\x02\u017F\u0186\x05\xB0Y\x02\u0180\u0186\x05\xE6t\x02\u0181" +
        "\u0186\x05\xF6|\x02\u0182\u0186\x05\x1E\x10\x02\u0183\u0186\x05> \x02" +
        "\u0184\u0186\x05B\"\x02\u0185\u017E\x03\x02\x02\x02\u0185\u017F\x03\x02" +
        "\x02\x02\u0185\u0180\x03\x02\x02\x02\u0185\u0181\x03\x02\x02\x02\u0185" +
        "\u0182\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0184\x03\x02" +
        "\x02\x02\u0186\x1D\x03\x02\x02\x02\u0187\u018D\x070\x02\x02\u0188\u018E" +
        "\x05 \x11\x02\u0189\u018E\x05\"\x12\x02\u018A\u018E\x05$\x13\x02\u018B" +
        "\u018E\x05&\x14\x02\u018C\u018E\x05(\x15\x02\u018D\u0188\x03\x02\x02\x02" +
        "\u018D\u0189\x03\x02\x02\x02\u018D\u018A\x03\x02\x02\x02\u018D\u018B\x03" +
        "\x02\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\x1F\x03\x02\x02\x02\u018F" +
        "\u0194\x07\u01AB\x02\x02\u0190\u0191\x07\u0183\x02\x02\u0191\u0193\x07" +
        "\u01AB\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02" +
        "\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195!\x03\x02" +
        "\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u0198\x07\u0180\x02\x02\u0198" +
        "\u019D\x05.\x18\x02\u0199\u019A\x07\u0183\x02\x02\u019A\u019C\x05.\x18" +
        "\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B" +
        "\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E#\x03\x02\x02\x02\u019F" +
        "\u019D\x03\x02\x02\x02\u01A0\u01A1\x07\u01AB\x02\x02\u01A1\u01A2\x07\u0188" +
        "\x02\x02\u01A2\u01A5\x07\u0189\x02\x02\u01A3\u01A4\x07\u0180\x02\x02\u01A4" +
        "\u01A6\x05,\x17\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02" +
        "\x02\u01A6%\x03\x02\x02\x02\u01A7\u01A8\x07\u01AB\x02\x02\u01A8\u01A9" +
        "\x07\u0188\x02\x02\u01A9\u01AA\x052\x1A\x02\u01AA\u01AD\x07\u0189\x02" +
        "\x02\u01AB\u01AC\x07\u0180\x02\x02\u01AC\u01AE\x05,\x17\x02\u01AD\u01AB" +
        "\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\'\x03\x02\x02\x02\u01AF" +
        "\u01B0\x07\u01AB\x02\x02\u01B0\u01B1\x07\u0180\x02\x02\u01B1\u01B2\x05" +
        "2\x1A\x02\u01B2)\x03\x02\x02\x02\u01B3\u01B8\x05.\x18\x02\u01B4\u01B5" +
        "\x07\u0183\x02\x02\u01B5\u01B7\x05.\x18\x02\u01B6\u01B4\x03\x02\x02\x02" +
        "\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03" +
        "\x02\x02\x02\u01B9\u01BD\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB" +
        "\u01BD\x07\x03\x02\x02\u01BC\u01B3\x03\x02\x02\x02\u01BC\u01BB\x03\x02" +
        "\x02\x02\u01BD+\x03\x02\x02\x02\u01BE\u01BF\x07\u018A\x02\x02\u01BF\u01C0" +
        "\x05*\x16\x02\u01C0\u01C1\x07\u018B\x02\x02\u01C1\u01C4\x03\x02\x02\x02" +
        "\u01C2\u01C4\x05*\x16\x02\u01C3\u01BE\x03\x02\x02\x02\u01C3\u01C2\x03" +
        "\x02\x02\x02\u01C4-\x03\x02\x02\x02\u01C5\u01C8\x052\x1A\x02\u01C6\u01C8" +
        "\x07\x04\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C6\x03\x02\x02\x02" +
        "\u01C8/\x03\x02\x02\x02\u01C9\u01CA\x07\u018C\x02\x02\u01CA\u01D0\x07" +
        "\u01AB\x02\x02\u01CB\u01CC\x07\xD7\x02\x02\u01CC\u01CD\x07\u0186\x02\x02" +
        "\u01CD\u01CE\x07\u01AB\x02\x02\u01CE\u01D0\x07\u0187\x02\x02\u01CF\u01C9" +
        "\x03\x02\x02\x02\u01CF\u01CB\x03\x02\x02\x02\u01D01\x03\x02\x02\x02\u01D1" +
        "\u01D2\x054\x1B\x02\u01D23\x03\x02\x02\x02\u01D3\u01D8\x056\x1C\x02\u01D4" +
        "\u01D5\t\x05\x02\x02\u01D5\u01D7\x056\x1C\x02\u01D6\u01D4\x03\x02\x02" +
        "\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9" +
        "\x03\x02\x02\x02\u01D95\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB" +
        "\u01DD\x07\u017C\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
        "\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x058\x1D\x02\u01DF7\x03" +
        "\x02\x02\x02\u01E0\u01E6\x05:\x1E\x02\u01E1\u01E2\x07\u0186\x02\x02\u01E2" +
        "\u01E3\x054\x1B\x02\u01E3\u01E4\x07\u0187\x02\x02\u01E4\u01E6\x03\x02" +
        "\x02\x02\u01E5\u01E0\x03\x02\x02\x02\u01E5\u01E1\x03\x02\x02\x02\u01E6" +
        "9\x03\x02\x02\x02\u01E7\u01EB\x07\x05\x02\x02\u01E8\u01EB\x050\x19\x02" +
        "\u01E9\u01EB\x07\u01AB\x02\x02\u01EA\u01E7\x03\x02\x02\x02\u01EA\u01E8" +
        "\x03\x02\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB;\x03\x02\x02\x02\u01EC" +
        "\u01F2\x05\xAAV\x02\u01ED\u01F2\x05\x8AF\x02\u01EE\u01F2\x05\x8EH\x02" +
        "\u01EF\u01F2\x05\x92J\x02\u01F0\u01F2\x05\x9EP\x02\u01F1\u01EC\x03\x02" +
        "\x02\x02\u01F1\u01ED\x03\x02\x02\x02\u01F1\u01EE\x03\x02\x02\x02\u01F1" +
        "\u01EF\x03\x02\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F2=\x03\x02\x02" +
        "\x02\u01F3\u01F4\x07\xBA\x02\x02\u01F4\u01F5\x05\u0118\x8D\x02\u01F5\u01F6" +
        "\x05@!\x02\u01F6?\x03\x02\x02\x02\u01F7\u01FA\x05B\"\x02\u01F8\u01FA\x05" +
        "<\x1F\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA" +
        "A\x03\x02\x02\x02\u01FB\u01FC\x05<\x1F\x02\u01FC\u01FD\x07\u0183\x02\x02" +
        "\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01FB\x03\x02\x02\x02\u01FE\u01FF\x03" +
        "\x02\x02\x02\u01FF\u020B\x03\x02\x02\x02\u0200\u020C\x05D#\x02\u0201\u020C" +
        "\x05J&\x02\u0202\u020C\x05L\'\x02\u0203\u020C\x05N(\x02\u0204\u020C\x05" +
        "P)\x02\u0205\u020C\x05R*\x02\u0206\u020C\x05T+\x02\u0207\u020C\x05V,\x02" +
        "\u0208\u020C\x05X-\x02\u0209\u020C\x05Z.\x02\u020A\u020C\x05`1\x02\u020B" +
        "\u0200\x03\x02\x02\x02\u020B\u0201\x03\x02\x02\x02\u020B\u0202\x03\x02" +
        "\x02\x02\u020B\u0203\x03\x02\x02\x02\u020B\u0204\x03\x02\x02\x02\u020B" +
        "\u0205\x03\x02\x02\x02\u020B\u0206\x03\x02\x02\x02\u020B\u0207\x03\x02" +
        "\x02\x02\u020B\u0208\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B" +
        "\u020A\x03\x02\x02\x02\u020CC\x03\x02\x02\x02\u020D\u020E\x05F$\x02\u020E" +
        "\u020F\x07\u0183\x02\x02\u020F\u0210\x05H%\x02\u0210E\x03\x02\x02\x02" +
        "\u0211\u0212\x05v<\x02\u0212\u0213\x07\u0180\x02\x02\u0213\u0214\x05\u0114" +
        "\x8B\x02\u0214\u021A\x03\x02\x02\x02\u0215\u0216\x05\u0114\x8B\x02\u0216" +
        "\u0217\x07\u0180\x02\x02\u0217\u0218\x05v<\x02\u0218\u021A\x03\x02\x02" +
        "\x02\u0219\u0211\x03\x02\x02\x02\u0219\u0215\x03\x02\x02\x02\u021AG\x03" +
        "\x02\x02\x02\u021B\u021C\x05x=\x02\u021C\u021D\x07\u0180\x02\x02\u021D" +
        "\u021E\x05\u0114\x8B\x02\u021E\u0224\x03\x02\x02\x02\u021F\u0220\x05\u0114" +
        "\x8B\x02\u0220\u0221\x07\u0180\x02\x02\u0221\u0222\x05x=\x02\u0222\u0224" +
        "\x03\x02\x02\x02\u0223\u021B\x03\x02\x02\x02\u0223\u021F\x03\x02\x02\x02" +
        "\u0224I\x03\x02\x02\x02\u0225\u0228\x05v<\x02\u0226\u0228\x05x=\x02\u0227" +
        "\u0225\x03\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02" +
        "\x02\x02\u0229\u022A\x07\u0180\x02\x02\u022A\u022B\x05\u0116\x8C\x02\u022B" +
        "K\x03\x02\x02\x02\u022C\u022F\x05z>\x02\u022D\u022F\x05|?\x02\u022E\u022C" +
        "\x03\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02" +
        "\u0230\u0231\x07\u0180\x02\x02\u0231\u0232\x05\u0116\x8C\x02\u0232M\x03" +
        "\x02\x02\x02\u0233\u0234\x05\u0116\x8C\x02\u0234\u0237\x07\u0180\x02\x02" +
        "\u0235\u0238\x05v<\x02\u0236\u0238\x05x=\x02\u0237\u0235\x03\x02\x02\x02" +
        "\u0237\u0236\x03\x02\x02\x02\u0238O\x03\x02\x02\x02\u0239\u023A\x05\u0116" +
        "\x8C\x02\u023A\u023D\x07\u0180\x02\x02\u023B\u023E\x05z>\x02\u023C\u023E" +
        "\x05|?\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023C\x03\x02\x02\x02\u023E" +
        "Q\x03\x02\x02\x02\u023F\u0242\x05~@\x02\u0240\u0242\x05\x80A\x02\u0241" +
        "\u023F\x03\x02\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02" +
        "\x02\x02\u0243\u0244\x07\u0180\x02\x02\u0244\u0245\x05\u0114\x8B\x02\u0245" +
        "S\x03\x02\x02\x02\u0246\u0247\x05\xEAv\x02\u0247U\x03\x02\x02\x02\u0248" +
        "\u0249\x05\u0114\x8B\x02\u0249\u024C\x07\u0180\x02\x02\u024A\u024D\x05" +
        "~@\x02\u024B\u024D\x05\x80A\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024B" +
        "\x03\x02\x02\x02\u024DW\x03\x02\x02\x02\u024E\u024F\x05\xEEx\x02\u024F" +
        "Y\x03\x02\x02\x02\u0250\u0251\x05\xF4{\x02\u0251\u0252\x07\u0180\x02\x02" +
        "\u0252\u0253\x05\u0116\x8C\x02\u0253[\x03\x02\x02\x02\u0254\u0257\x05" +
        "v<\x02\u0255\u0257\x05x=\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0255\x03" +
        "\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x07\u0180\x02\x02" +
        "\u0259\u025A\x05\u0114\x8B\x02\u025A]\x03\x02\x02\x02\u025B\u025C\x05" +
        "\u0114\x8B\x02\u025C\u025F\x07\u0180\x02\x02\u025D\u0260\x05v<\x02\u025E" +
        "\u0260\x05x=\x02\u025F\u025D\x03\x02\x02\x02\u025F\u025E\x03\x02\x02\x02" +
        "\u0260_\x03\x02\x02\x02\u0261\u026E\x07\xF8\x02\x02\u0262\u0263\x07\u0186" +
        "\x02\x02\u0263\u0264\x05\u0106\x84\x02\u0264\u0265\x07\u0183\x02\x02\u0265" +
        "\u0266\x05\u0108\x85\x02\u0266\u0267\x07\u0187\x02\x02\u0267\u026F\x03" +
        "\x02\x02\x02\u0268\u0269\x07\u0186\x02\x02\u0269\u026A\x05\u010A\x86\x02" +
        "\u026A\u026B\x07\u0183\x02\x02\u026B\u026C\x05\u010C\x87\x02\u026C\u026D" +
        "\x07\u0187\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E\u0262\x03\x02\x02" +
        "\x02\u026E\u0268\x03\x02\x02\x02\u026Fa\x03\x02\x02\x02\u0270\u0271\x07" +
        "\u0186\x02\x02\u0271\u0272\x05\u0106\x84\x02\u0272\u0273\x07\u0183\x02" +
        "\x02\u0273\u0274\x05\u0108\x85\x02\u0274\u0275\x07\u0187\x02\x02\u0275" +
        "c\x03\x02\x02\x02\u0276\u0277\x07\u0186\x02\x02\u0277\u0278\x05\u010A" +
        "\x86\x02\u0278\u0279\x07\u0183\x02\x02\u0279\u027A\x05\u010C\x87\x02\u027A" +
        "\u027B\x07\u0187\x02\x02\u027Be\x03\x02\x02\x02\u027C\u027D\x07\u0186" +
        "\x02\x02\u027D\u027E\x05\u010C\x87\x02\u027E\u027F\x07\u0183\x02\x02\u027F" +
        "\u0280\x05\u010A\x86\x02\u0280\u0281\x07\u0187\x02\x02\u0281g\x03\x02" +
        "\x02\x02\u0282\u0283\x07\u0186\x02\x02\u0283\u0284\x05\u0108\x85\x02\u0284" +
        "\u0285\x07\u0183\x02\x02\u0285\u0286\x05\u0106\x84\x02\u0286\u0287\x07" +
        "\u0187\x02\x02\u0287i\x03\x02\x02\x02\u0288\u0289\x07\u0186\x02\x02\u0289" +
        "\u028A\x05\u0106\x84\x02\u028A\u028B\x07\u0183\x02\x02\u028B\u028C\x05" +
        "2\x1A\x02\u028C\u028D\x07\u0187\x02\x02\u028Dk\x03\x02\x02\x02\u028E\u028F" +
        "\x07\u0186\x02\x02\u028F\u0290\x05\u010A\x86\x02\u0290\u0291\x07\u0183" +
        "\x02\x02\u0291\u0292\x052\x1A\x02\u0292\u0293\x07\u0187\x02\x02\u0293" +
        "m\x03\x02\x02\x02\u0294\u0295\x07\u0186\x02\x02\u0295\u0296\x052\x1A\x02" +
        "\u0296\u0297\x07\u0183\x02\x02\u0297\u0298\x05\u0106\x84\x02\u0298\u0299" +
        "\x07\u0187\x02\x02\u0299o\x03\x02\x02\x02\u029A\u029B\x07\u0186\x02\x02" +
        "\u029B\u029C\x052\x1A\x02\u029C\u029D\x07\u0183\x02\x02\u029D\u029E\x05" +
        "\u010A\x86\x02\u029E\u029F\x07\u0187\x02\x02\u029Fq\x03\x02\x02\x02\u02A0" +
        "\u02A1\x03\x02\x02\x02\u02A1s\x03\x02\x02\x02\u02A2\u02A8\x05:\x1E\x02" +
        "\u02A3\u02A4\x05:\x1E\x02\u02A4\u02A5\t\x06\x02\x02\u02A5\u02A6\x05:\x1E" +
        "\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u02A2\x03\x02\x02\x02\u02A7\u02A3" +
        "\x03\x02\x02\x02\u02A8u\x03\x02\x02\x02\u02A9\u02AA\x07g\x02\x02\u02AA" +
        "\u02AB\x05b2\x02\u02ABw\x03\x02\x02\x02\u02AC\u02AD\x07\u0117\x02\x02" +
        "\u02AD\u02AE\x05d3\x02\u02AEy\x03\x02\x02\x02\u02AF\u02B0\x07g\x02\x02" +
        "\u02B0\u02B1\x05h5\x02\u02B1{\x03\x02\x02\x02\u02B2\u02B3\x07\u0117\x02" +
        "\x02\u02B3\u02B4\x05f4\x02\u02B4}\x03\x02\x02\x02\u02B5\u02B6\x07g\x02" +
        "\x02\u02B6\u02B7\x05j6\x02\u02B7\x7F\x03\x02\x02\x02\u02B8\u02B9\x07\u0117" +
        "\x02\x02\u02B9\u02BA\x05l7\x02\u02BA\x81\x03\x02\x02\x02\u02BB\u02BC\x07" +
        "g\x02\x02\u02BC\u02BD\x05n8\x02\u02BD\x83\x03\x02\x02\x02\u02BE\u02BF" +
        "\x07\u0117\x02\x02\u02BF\u02C0\x05p9\x02\u02C0\x85\x03\x02\x02\x02\u02C1" +
        "\u02C2\x07g\x02\x02\u02C2\u02C3\x05r:\x02\u02C3\x87\x03\x02\x02\x02\u02C4" +
        "\u02C5\x07\u0117\x02\x02\u02C5\u02C6\x05r:\x02\u02C6\x89\x03\x02\x02\x02" +
        "\u02C7\u02C8\x05\u0100\x81\x02\u02C8\u02C9\x07\u0180\x02\x02\u02C9\u02CA" +
        "\x05\x8CG\x02\u02CA\u02D3\x03\x02\x02\x02\u02CB\u02CC\x07^\x02\x02\u02CC" +
        "\u02CD\x07\u0186\x02\x02\u02CD\u02CE\x05\u0100\x81\x02\u02CE\u02CF\x07" +
        "\u0183\x02\x02\u02CF\u02D0\x05\u0100\x81\x02\u02D0\u02D1\x07\u0187\x02" +
        "\x02\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02C7\x03\x02\x02\x02\u02D2\u02CB" +
        "\x03\x02\x02\x02\u02D3\x8B\x03\x02\x02\x02\u02D4\u02D5\x05\u0100\x81\x02" +
        "\u02D5\u02D6\x05\xA8U\x02\u02D6\u02D7\x05\u0100\x81\x02\u02D7\u0338\x03" +
        "\x02\x02\x02\u02D8\u02D9\x05\u0100\x81\x02\u02D9\u02DA\x07\u017B\x02\x02" +
        "\u02DA\u02DB\x05\u0100\x81\x02\u02DB\u02DC\x07\u017B\x02\x02\u02DC\u02DD" +
        "\x07Y\x02\x02\u02DD\u0338\x03\x02\x02\x02\u02DE\u02DF\x05\u0100\x81\x02" +
        "\u02DF\u02E0\x07\u017B\x02\x02\u02E0\u02E1\x05\u0100\x81\x02\u02E1\u02E2" +
        "\x07\u017B\x02\x02\u02E2\u02E3\x07Y\x02\x02\u02E3\u02E4\x07\u017C\x02" +
        "\x02\u02E4\u02E5\x07\x05\x02\x02\u02E5\u0338\x03\x02\x02\x02\u02E6\u02E7" +
        "\x07\u0186\x02\x02\u02E7\u02E8\x05\u0100\x81\x02\u02E8\u02E9\x07\u017B" +
        "\x02\x02\u02E9\u02EA\x05\u0100\x81\x02\u02EA\u02EB\x07\u0187\x02\x02\u02EB" +
        "\u02EC\x07\u017E\x02\x02\u02EC\u02ED\x07\x05\x02\x02\u02ED\u0338\x03\x02" +
        "\x02\x02\u02EE\u02EF\x05\u0100\x81\x02\u02EF\u02F0\x07\u017B\x02\x02\u02F0" +
        "\u02F1\x07Y\x02\x02\u02F1\u0338\x03\x02\x02\x02\u02F2\u02F3\x05\u0100" +
        "\x81\x02\u02F3\u02F4\x07\u017B\x02\x02\u02F4\u02F5\x07Y\x02\x02\u02F5" +
        "\u02F6\x07\u017C\x02\x02\u02F6\u02F7\x07\x05\x02\x02\u02F7\u0338\x03\x02" +
        "\x02\x02\u02F8\u02F9\x05\u0100\x81\x02\u02F9\u02FA\x07\u017B\x02\x02\u02FA" +
        "\u02FB\x07\x05\x02\x02\u02FB\u0338\x03\x02\x02\x02\u02FC\u02FD\x05\u0100" +
        "\x81\x02\u02FD\u02FE\x07\u017C\x02\x02\u02FE\u02FF\x07\x05\x02\x02\u02FF" +
        "\u0338\x03\x02\x02\x02\u0300\u0301\x07\u017C\x02\x02\u0301\u0338\x05\u0100" +
        "\x81\x02\u0302\u0303\x072\x02\x02\u0303\u0338\x05\u0100\x81\x02\u0304" +
        "\u0305\x07\u0113\x02\x02\u0305\u0338\x05\u0100\x81\x02\u0306\u0307\x05" +
        "\u0100\x81\x02\u0307\u0308\x077\x02\x02\u0308\u0309\x05\u0100\x81\x02" +
        "\u0309\u0338\x03\x02\x02\x02\u030A\u030B\x05\u0100\x81\x02\u030B\u030C" +
        "\x07\u010D\x02\x02\u030C\u030D\x05\u0100\x81\x02\u030D\u0338\x03\x02\x02" +
        "\x02\u030E\u030F\x05\u0100\x81\x02\u030F\u0310\x07\u017A\x02\x02\u0310" +
        "\u0311\x05\u0100\x81\x02\u0311\u0338\x03\x02\x02\x02\u0312\u0313\x07\u0109" +
        "\x02\x02\u0313\u0338\x05\u0100\x81\x02\u0314\u0315\x07\xF4\x02\x02\u0315" +
        "\u0316\x07\u0186\x02\x02\u0316\u0317\x05\u0100\x81\x02\u0317\u0318\x07" +
        "\u0183\x02\x02\u0318\u0319\x05\u0100\x81\x02\u0319\u031A\x07\u0187\x02" +
        "\x02\u031A\u0338\x03\x02\x02\x02\u031B\u031C\x07\xF2\x02\x02\u031C\u031D" +
        "\x07\u0186\x02\x02\u031D\u031E\x05\u0100\x81\x02\u031E\u031F\x07\u0183" +
        "\x02\x02\u031F\u0320\x05\u0100\x81\x02\u0320\u0321\x07\u0187\x02\x02\u0321" +
        "\u0338\x03\x02\x02\x02\u0322\u0323\x07]\x02\x02\u0323\u0324\x05\u0100" +
        "\x81\x02\u0324\u0325\x07T\x02\x02\u0325\u0326\x05\u0100\x81\x02\u0326" +
        "\u0338\x03\x02\x02\x02\u0327\u0328\x07\xF1\x02\x02\u0328\u0338\x05\u0102" +
        "\x82\x02\u0329\u032A\x07\xDC\x02\x02\u032A\u0338\x05\u0102\x82\x02\u032B" +
        "\u032C\x07\x94\x02\x02\u032C\u032F\x05\u0102\x82\x02\u032D\u032E\x07T" +
        "\x02\x02\u032E\u0330\x05\u0100\x81\x02\u032F\u032D\x03\x02\x02\x02\u032F" +
        "\u0330\x03\x02\x02\x02\u0330\u0338\x03\x02\x02\x02\u0331\u0332\x07\u0165" +
        "\x02\x02\u0332\u0335\x05\u0102\x82\x02\u0333\u0334\x07T\x02\x02\u0334" +
        "\u0336\x05\u0100\x81\x02\u0335\u0333\x03\x02\x02\x02\u0335\u0336\x03\x02" +
        "\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337\u02D4\x03\x02\x02\x02\u0337" +
        "\u02D8\x03\x02\x02\x02\u0337\u02DE\x03\x02\x02\x02\u0337\u02E6\x03\x02" +
        "\x02\x02\u0337\u02EE\x03\x02\x02\x02\u0337\u02F2\x03\x02\x02\x02\u0337" +
        "\u02F8\x03\x02\x02\x02\u0337\u02FC\x03\x02\x02\x02\u0337\u0300\x03\x02" +
        "\x02\x02\u0337\u0302\x03\x02\x02\x02\u0337\u0304\x03\x02\x02\x02\u0337" +
        "\u0306\x03\x02\x02\x02\u0337\u030A\x03\x02\x02\x02\u0337\u030E\x03\x02" +
        "\x02\x02\u0337\u0312\x03\x02\x02\x02\u0337\u0314\x03\x02\x02\x02\u0337" +
        "\u031B\x03\x02\x02\x02\u0337\u0322\x03\x02\x02\x02\u0337\u0327\x03\x02" +
        "\x02\x02\u0337\u0329\x03\x02\x02\x02\u0337\u032B\x03\x02\x02\x02\u0337" +
        "\u0331\x03\x02\x02\x02\u0338\x8D\x03\x02\x02\x02\u0339\u033A\x05\u0102" +
        "\x82\x02\u033A\u033B\x07\u0180\x02\x02\u033B\u033C\x05\x90I\x02\u033C" +
        "\u0345\x03\x02\x02\x02\u033D\u033E\x07^\x02\x02\u033E\u033F\x07\u0186" +
        "\x02\x02\u033F\u0340\x05\u0102\x82\x02\u0340\u0341\x07\u0183\x02\x02\u0341" +
        "\u0342\x05\u0102\x82\x02\u0342\u0343\x07\u0187\x02\x02\u0343\u0345\x03" +
        "\x02\x02\x02\u0344\u0339\x03\x02\x02\x02\u0344\u033D\x03\x02\x02\x02\u0345" +
        "\x8F\x03\x02\x02\x02\u0346\u0347\x05\u0102\x82\x02\u0347\u0348\x07\u017B" +
        "\x02\x02\u0348\u0349\x05\u0102\x82\x02\u0349\u0397\x03\x02\x02\x02\u034A" +
        "\u034B\x05\u0102\x82\x02\u034B\u034C\x07\u017C\x02\x02\u034C\u034D\x05" +
        "\u0102\x82\x02\u034D\u0397\x03\x02\x02\x02\u034E\u034F\x072\x02\x02\u034F" +
        "\u0350\x07\u0186\x02\x02\u0350\u0351\x05\u0102\x82\x02\u0351\u0352\x07" +
        "\u017B\x02\x02\u0352\u0353\x05\u0102\x82\x02\u0353\u0354\x07\u0187\x02" +
        "\x02\u0354\u0397\x03\x02\x02\x02\u0355\u0356\x072\x02\x02\u0356\u0357" +
        "\x07\u0186\x02\x02\u0357\u0358\x05\u0102\x82\x02\u0358\u0359\x07\u017C" +
        "\x02\x02\u0359\u035A\x05\u0102\x82\x02\u035A\u035B\x07\u0187\x02\x02\u035B" +
        "\u0397\x03\x02\x02\x02\u035C\u035D\x07\u0186\x02\x02\u035D\u035E\x05\u0102" +
        "\x82\x02\u035E\u035F\x07\u017B\x02\x02\u035F\u0360\x05\u0102\x82\x02\u0360" +
        "\u0361\x07\u0187\x02\x02\u0361\u0362\x07\u017E\x02\x02\u0362\u0363\x07" +
        "\x05\x02\x02\u0363\u0397\x03\x02\x02\x02\u0364\u0365\x07\u017C\x02\x02" +
        "\u0365\u0397\x05\u0102\x82\x02\u0366\u0367\x072\x02\x02\u0367\u0397\x05" +
        "\u0102\x82\x02\u0368\u0369\x07\u0113\x02\x02\u0369\u0397\x05\u0102\x82" +
        "\x02\u036A\u036B\x07\u013E\x02\x02\u036B\u0397\x05\u0102\x82\x02\u036C" +
        "\u036D\x07\u0145\x02\x02\u036D\u036E\x05\u0102\x82\x02\u036E\u036F\x07" +
        "T\x02\x02\u036F\u0370\x05\u0100\x81\x02\u0370\u0397\x03\x02\x02\x02\u0371" +
        "\u0372\x07\x99\x02\x02\u0372\u0375\x05\u0100\x81\x02\u0373\u0374\x07T" +
        "\x02\x02\u0374\u0376\x05\u0100\x81\x02\u0375\u0373\x03\x02\x02\x02\u0375" +
        "\u0376\x03\x02\x02\x02\u0376\u0397\x03\x02\x02\x02\u0377\u0378\x07\u013C" +
        "\x02\x02\u0378\u0397\x05\u0102\x82\x02\u0379\u037A\x07\u0141\x02\x02\u037A" +
        "\u0397\x05\u0102\x82\x02\u037B\u037C\x05\u0102\x82\x02\u037C\u037D\x07" +
        "_\x02\x02\u037D\u037E\x05\u0102\x82\x02\u037E\u0397\x03\x02\x02\x02\u037F" +
        "\u0380\x07\xF4\x02\x02\u0380\u0381\x07\u0186\x02\x02\u0381\u0382\x05\u0102" +
        "\x82\x02\u0382\u0383\x07\u0183\x02\x02\u0383\u0384\x05\u0102\x82\x02\u0384" +
        "\u0385\x07\u0187\x02\x02\u0385\u0397\x03\x02\x02\x02\u0386\u0387\x07\xF2" +
        "\x02\x02\u0387\u0388\x07\u0186\x02\x02\u0388\u0389\x05\u0102\x82\x02\u0389" +
        "\u038A\x07\u0183\x02\x02\u038A\u038B\x05\u0102\x82\x02\u038B\u038C\x07" +
        "\u0187\x02\x02\u038C\u0397\x03\x02\x02\x02\u038D\u038E\x07]\x02\x02\u038E" +
        "\u038F\x05\u0102\x82\x02\u038F\u0390\x07T\x02\x02\u0390\u0391\x05\u0102" +
        "\x82\x02\u0391\u0397\x03\x02\x02\x02\u0392\u0393\x05\u0102\x82\x02\u0393" +
        "\u0394\x07\u017D\x02\x02\u0394\u0395\x05\u0102\x82\x02\u0395\u0397\x03" +
        "\x02\x02\x02\u0396\u0346\x03\x02\x02\x02\u0396\u034A\x03\x02\x02\x02\u0396" +
        "\u034E\x03\x02\x02\x02\u0396\u0355\x03\x02\x02\x02\u0396\u035C\x03\x02" +
        "\x02\x02\u0396\u0364\x03\x02\x02\x02\u0396\u0366\x03\x02\x02\x02\u0396" +
        "\u0368\x03\x02\x02\x02\u0396\u036A\x03\x02\x02\x02\u0396\u036C\x03\x02" +
        "\x02\x02\u0396\u0371\x03\x02\x02\x02\u0396\u0377\x03\x02\x02\x02\u0396" +
        "\u0379\x03\x02\x02\x02\u0396\u037B\x03\x02\x02\x02\u0396\u037F\x03\x02" +
        "\x02\x02\u0396\u0386\x03\x02\x02\x02\u0396\u038D\x03\x02\x02\x02\u0396" +
        "\u0392\x03\x02\x02\x02\u0397\x91\x03\x02\x02\x02\u0398\u0399\x05\u0100" +
        "\x81\x02\u0399\u039A\x07\u0180\x02\x02\u039A\u039B\x05\x96L\x02\u039B" +
        "\u03B4\x03\x02\x02\x02\u039C\u039D\x07\u0100\x02\x02\u039D\u039E\x07\u0180" +
        "\x02\x02\u039E\u03B4\x05\x98M\x02\u039F\u03A0\x07\xFF\x02\x02\u03A0\u03A1" +
        "\x07\u0180\x02\x02\u03A1\u03B4\x05\x9AN\x02\u03A2\u03A3\x05\x9CO\x02\u03A3" +
        "\u03A4\x07\u0180\x02\x02\u03A4\u03A5\x07\x05\x02\x02\u03A5\u03B4\x03\x02" +
        "\x02\x02\u03A6\u03A9\x05\u0136\x9C\x02\u03A7\u03A9\x05\u0138\x9D\x02\u03A8" +
        "\u03A6\x03\x02\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02" +
        "\x02\x02\u03AA\u03AB\x07\u0180\x02\x02\u03AB\u03AC\x05\u0100\x81\x02\u03AC" +
        "\u03B4\x03\x02\x02\x02\u03AD\u03AE\x05\u0100\x81\x02\u03AE\u03B1\x07\u0180" +
        "\x02\x02\u03AF\u03B2\x05\u0136\x9C\x02\u03B0\u03B2\x05\u0138\x9D\x02\u03B1" +
        "\u03AF\x03\x02\x02\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B4\x03\x02" +
        "\x02\x02\u03B3\u0398\x03\x02\x02\x02\u03B3\u039C\x03\x02\x02\x02\u03B3" +
        "\u039F\x03\x02\x02\x02\u03B3\u03A2\x03\x02\x02\x02\u03B3\u03A8\x03\x02" +
        "\x02\x02\u03B3\u03AD\x03\x02\x02\x02\u03B4\x93\x03\x02\x02\x02\u03B5\u03B6" +
        "\x05\u0100\x81\x02\u03B6\u03B7\x07\u017D\x02\x02\u03B7\u03B9\x05\u0100" +
        "\x81\x02\u03B8\u03BA\x05\u0120\x91\x02\u03B9\u03B8\x03\x02\x02\x02\u03B9" +
        "\u03BA\x03\x02\x02\x02\u03BA\x95\x03\x02\x02\x02\u03BB\u03CC\x05\x94K" +
        "\x02\u03BC\u03BD\x05\x9CO\x02\u03BD\u03BE\x05\xA8U\x02\u03BE\u03BF\x05" +
        "\x94K\x02\u03BF\u03CC\x03\x02\x02\x02\u03C0\u03C1\x07\u0144\x02\x02\u03C1" +
        "\u03C3\x05\x9CO\x02\u03C2\u03C4\x05\u011C\x8F\x02\u03C3\u03C2\x03\x02" +
        "\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03CC\x03\x02\x02\x02\u03C5" +
        "\u03C6\x07\u013E\x02\x02\u03C6\u03C8\x05\x9CO\x02\u03C7\u03C9\x05\u011C" +
        "\x8F\x02\u03C8\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9" +
        "\u03CC\x03\x02\x02\x02\u03CA\u03CC\x05\x9CO\x02\u03CB\u03BB\x03\x02\x02" +
        "\x02\u03CB\u03BC\x03\x02\x02\x02\u03CB\u03C0\x03\x02\x02\x02\u03CB\u03C5" +
        "\x03\x02\x02\x02\u03CB\u03CA\x03\x02\x02\x02\u03CC\x97\x03\x02\x02\x02" +
        "\u03CD\u03DD\x05\x94K\x02\u03CE\u03CF\x07\u0100\x02\x02\u03CF\u03D0\x05" +
        "\xA8U\x02\u03D0\u03D1\x05\x94K\x02\u03D1\u03DD\x03\x02\x02\x02\u03D2\u03D3" +
        "\x07\u0144\x02\x02\u03D3\u03D5\x07\u0100\x02\x02\u03D4\u03D6\x05\u011C" +
        "\x8F\x02\u03D5\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6" +
        "\u03DD\x03\x02\x02\x02\u03D7\u03D8\x07\u013E\x02\x02\u03D8\u03DA\x07\u0100" +
        "\x02\x02\u03D9\u03DB\x05\u011C\x8F\x02\u03DA\u03D9\x03\x02\x02\x02\u03DA" +
        "\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03CD\x03\x02" +
        "\x02\x02\u03DC\u03CE\x03\x02\x02\x02\u03DC\u03D2\x03\x02\x02\x02\u03DC" +
        "\u03D7\x03\x02\x02\x02\u03DD\x99\x03\x02\x02\x02\u03DE\u03EE\x05\x94K" +
        "\x02\u03DF\u03E0\x07\xFF\x02\x02\u03E0\u03E1\x05\xA8U\x02\u03E1\u03E2" +
        "\x05\x94K\x02\u03E2\u03EE\x03\x02\x02\x02\u03E3\u03E4\x07\u0144\x02\x02" +
        "\u03E4\u03E6\x07\xFF\x02\x02\u03E5\u03E7\x05\u011C\x8F\x02\u03E6\u03E5" +
        "\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03EE\x03\x02\x02\x02" +
        "\u03E8\u03E9\x07\u013E\x02\x02\u03E9\u03EB\x07\xFF\x02\x02\u03EA\u03EC" +
        "\x05\u011C\x8F\x02\u03EB\u03EA\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02" +
        "\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03DE\x03\x02\x02\x02\u03ED\u03DF" +
        "\x03\x02\x02\x02\u03ED\u03E3\x03\x02\x02\x02\u03ED\u03E8\x03\x02\x02\x02" +
        "\u03EE\x9B\x03\x02\x02\x02\u03EF\u03F0\t\x07\x02\x02\u03F0\x9D\x03\x02" +
        "\x02\x02\u03F1\u03F2\x05\u0100\x81\x02\u03F2\u03F3\x07\u0180\x02\x02\u03F3" +
        "\u03F4\x05\xA0Q\x02\u03F4\u0400\x03\x02\x02\x02\u03F5\u03F6\x07S\x02\x02" +
        "\u03F6\u03F7\x05\u0100\x81\x02\u03F7\u03F8\x07T\x02\x02\u03F8\u03F9\x05" +
        "\xA2R\x02\u03F9\u0400\x03\x02\x02\x02\u03FA\u03FB\x05\u0102\x82\x02\u03FB" +
        "\u03FC\x07\u0180\x02\x02\u03FC\u03FD\x07\xA2\x02\x02\u03FD\u03FE\x05\u0100" +
        "\x81\x02\u03FE\u0400\x03\x02\x02\x02\u03FF\u03F1\x03\x02\x02\x02\u03FF" +
        "\u03F5\x03\x02\x02\x02\u03FF\u03FA\x03\x02\x02\x02\u0400\x9F\x03\x02\x02" +
        "\x02\u0401\u0402\x07\xDF\x02\x02\u0402\u0403\x05\u0100\x81\x02\u0403\u0404" +
        "\x07T\x02\x02\u0404\u0405\x05\xA2R\x02\u0405\u0454\x03\x02\x02\x02\u0406" +
        "\u0407\x05\u0100\x81\x02\u0407\u0408\x07\u010D\x02\x02\u0408\u0409\x07" +
        "\xDF\x02\x02\u0409\u040A\x05\u0100\x81\x02\u040A\u040B\x07T\x02\x02\u040B" +
        "\u040C\x05\xA2R\x02\u040C\u0454\x03\x02\x02";
    SHARCParser._serializedATNSegment2 = "\x02\u040D\u040E\x078\x02\x02\u040E\u040F\x05\u0100\x81\x02\u040F\u0410" +
        "\x07T\x02\x02\u0410\u0411\x05\xA2R\x02\u0411\u0454\x03\x02\x02\x02\u0412" +
        "\u0413\x05\u0100\x81\x02\u0413\u0414\x07\u010D\x02\x02\u0414\u0415\x07" +
        "8\x02\x02\u0415\u0416\x05\u0100\x81\x02\u0416\u0417\x07T\x02\x02\u0417" +
        "\u0418\x05\xA2R\x02\u0418\u0454\x03\x02\x02\x02\u0419\u041A\x07\u013F" +
        "\x02\x02\u041A\u041B\x05\u0100\x81\x02\u041B\u041C\x07T\x02\x02\u041C" +
        "\u041D\x05\xA2R\x02\u041D\u0454\x03\x02\x02\x02\u041E\u041F\x07L\x02\x02" +
        "\u041F\u0420\x05\u0100\x81\x02\u0420\u0421\x07T\x02\x02\u0421\u0422\x05" +
        "\xA2R\x02\u0422\u0454\x03\x02\x02\x02\u0423\u0424\x07Q\x02\x02\u0424\u0425" +
        "\x05\u0100\x81\x02\u0425\u0426\x07T\x02\x02\u0426\u0427\x05\xA2R\x02\u0427" +
        "\u0454\x03\x02\x02\x02\u0428\u0429\x07R\x02\x02\u0429\u042A\x05\u0100" +
        "\x81\x02\u042A\u042B\x07T\x02\x02\u042B\u042C\x05\xA2R\x02\u042C\u0454" +
        "\x03\x02\x02\x02\u042D\u042E\x07\x91\x02\x02\u042E\u042F\x05\u0100\x81" +
        "\x02\u042F\u0430\x07T\x02\x02\u0430\u0434\x05\xA4S\x02\u0431\u0432\x07" +
        "\u0186\x02\x02\u0432\u0433\x07\u0147\x02\x02\u0433\u0435\x07\u0187\x02" +
        "\x02\u0434\u0431\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0454" +
        "\x03\x02\x02\x02\u0436\u0437\x07\x92\x02\x02\u0437\u0438\x05\u0100\x81" +
        "\x02\u0438\u0439\x07T\x02\x02\u0439\u043D\x05\xA4S\x02\u043A\u043B\x07" +
        "\u0186\x02\x02\u043B\u043C\x07\u0147\x02\x02\u043C\u043E\x07\u0187\x02" +
        "\x02\u043D\u043A\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\u0454" +
        "\x03\x02\x02\x02\u043F\u0440\x05\u0100\x81\x02\u0440\u0441\x07\u010D\x02" +
        "\x02\u0441\u0442\x07\x91\x02\x02\u0442\u0443\x05\u0100\x81\x02\u0443\u0444" +
        "\x07T\x02\x02\u0444\u0445\x05\xA4S\x02\u0445\u0454\x03\x02\x02\x02\u0446" +
        "\u0447\x07~\x02\x02\u0447\u044B\x05\u0100\x81\x02\u0448\u0449\x07\u0186" +
        "\x02\x02\u0449\u044A\x07}\x02\x02\u044A\u044C\x07\u0187\x02\x02\u044B" +
        "\u0448\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u0454\x03\x02" +
        "\x02\x02\u044D\u044E\x07\xD6\x02\x02\u044E\u0454\x05\u0100\x81\x02\u044F" +
        "\u0450\x07\xD5\x02\x02\u0450\u0454\x05\u0100\x81\x02\u0451\u0452\x07\x9D" +
        "\x02\x02\u0452\u0454\x05\u0102\x82\x02\u0453\u0401\x03\x02\x02\x02\u0453" +
        "\u0406\x03\x02\x02\x02\u0453\u040D\x03\x02\x02\x02\u0453\u0412\x03\x02" +
        "\x02\x02\u0453\u0419\x03\x02\x02\x02\u0453\u041E\x03\x02\x02\x02\u0453" +
        "\u0423\x03\x02\x02\x02\u0453\u0428\x03\x02\x02\x02\u0453\u042D\x03\x02" +
        "\x02\x02\u0453\u0436\x03\x02\x02\x02\u0453\u043F\x03\x02\x02\x02\u0453" +
        "\u0446\x03\x02\x02\x02\u0453\u044D\x03\x02\x02\x02\u0453\u044F\x03\x02" +
        "\x02\x02\u0453\u0451\x03\x02\x02\x02\u0454\xA1\x03\x02\x02\x02\u0455\u045A" +
        "\x05\u0100\x81\x02\u0456\u045A\x05:\x1E\x02\u0457\u0458\x07\u017C\x02" +
        "\x02\u0458\u045A\x05:\x1E\x02\u0459\u0455\x03\x02\x02\x02\u0459\u0456" +
        "\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u045A\xA3\x03\x02\x02\x02" +
        "\u045B\u045E\x05\u0100\x81\x02\u045C\u045E\x05\xA6T\x02\u045D\u045B\x03" +
        "\x02\x02\x02\u045D\u045C\x03\x02\x02\x02\u045E\xA5\x03\x02\x02\x02\u045F" +
        "\u0460\x07\x05\x02\x02\u0460\u0461\x07\u0184\x02\x02\u0461\u0462\x07\x05" +
        "\x02\x02\u0462\xA7\x03\x02\x02\x02\u0463\u0464\t\x06\x02\x02\u0464\xA9" +
        "\x03\x02\x02\x02\u0465\u0468\x05\xACW\x02\u0466\u0468\x05\xAEX\x02\u0467" +
        "\u0465\x03\x02\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468\xAB\x03\x02\x02" +
        "\x02\u0469\u046A\x05\u0100\x81\x02\u046A\u046B\x07\u0180\x02\x02\u046B" +
        "\u046C\x05\u0100\x81\x02\u046C\u046D\x07\u017B\x02\x02\u046D\u046E\x05" +
        "\u0100\x81\x02\u046E\u046F\x07\u0183\x02\x02\u046F\u0470\x05\u0100\x81" +
        "\x02\u0470\u0471\x07\u0180\x02\x02\u0471\u0472\x05\u0100\x81\x02\u0472" +
        "\u0473\x07\u017C\x02\x02\u0473\u0474\x05\u0100\x81\x02\u0474\xAD\x03\x02" +
        "\x02\x02\u0475\u0478\x05\x92J\x02\u0476\u0477\x07\u0183\x02\x02\u0477" +
        "\u0479\x05\x8AF\x02\u0478\u0476\x03\x02\x02\x02\u0479\u047A\x03\x02\x02" +
        "\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u0484" +
        "\x03\x02\x02\x02\u047C\u047F\x05\x8EH\x02\u047D\u047E\x07\u0183\x02\x02" +
        "\u047E\u0480\x05\x8EH\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0481\x03" +
        "\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482" +
        "\u0484\x03\x02\x02\x02\u0483\u0475\x03\x02\x02\x02\u0483\u047C\x03\x02" +
        "\x02\x02\u0484\xAF\x03\x02\x02\x02\u0485\u0491\x05\xB2Z\x02\u0486\u0491" +
        "\x05\xB6\\\x02\u0487\u0491\x05\xBA^\x02\u0488\u0491\x05\xC4c\x02\u0489" +
        "\u0491\x05\xC6d\x02\u048A\u0491\x05\xC8e\x02\u048B\u0491\x05\xCAf\x02" +
        "\u048C\u0491\x05\xCCg\x02\u048D\u0491\x05\xCEh\x02\u048E\u0491\x05\xBE" +
        "`\x02\u048F\u0491\x05\xC2b\x02\u0490\u0485\x03\x02\x02\x02\u0490\u0486" +
        "\x03\x02\x02\x02\u0490\u0487\x03\x02\x02\x02\u0490\u0488\x03\x02\x02\x02" +
        "\u0490\u0489\x03\x02\x02\x02\u0490\u048A\x03\x02\x02\x02\u0490\u048B\x03" +
        "\x02\x02\x02\u0490\u048C\x03\x02\x02\x02\u0490\u048D\x03\x02\x02\x02\u0490" +
        "\u048E\x03\x02\x02\x02\u0490\u048F\x03\x02\x02\x02\u0491\xB1\x03\x02\x02" +
        "\x02\u0492\u0493\x07\xBA\x02\x02\u0493\u0494\x05\u0118\x8D\x02\u0494\u0495" +
        "\x05\xB4[\x02\u0495\xB3\x03\x02\x02\x02\u0496\u0499\x05\xC4c\x02\u0497" +
        "\u0499\x05\xC6d\x02\u0498\u0496\x03\x02\x02\x02\u0498\u0497\x03\x02\x02" +
        "\x02\u0499\xB5\x03\x02\x02\x02\u049A\u049B\x07\xBA\x02\x02\u049B\u049C" +
        "\x05\u0118\x8D\x02\u049C\u049D\x05\xB8]\x02\u049D\u049E\x07\u0183\x02" +
        "\x02\u049E\u049F\x07v\x02\x02\u049F\u04A0\x05<\x1F\x02\u04A0\xB7\x03\x02" +
        "\x02\x02\u04A1\u04A6\x05\xC8e\x02\u04A2\u04A6\x05\xCAf\x02\u04A3\u04A6" +
        "\x05\xCCg\x02\u04A4\u04A6\x05\xCEh\x02\u04A5\u04A1\x03\x02\x02\x02\u04A5" +
        "\u04A2\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A5\u04A4\x03\x02" +
        "\x02\x02\u04A6\xB9\x03\x02\x02\x02\u04A7\u04A8\x07\xBA\x02\x02\u04A8\u04A9" +
        "\x05\u0118\x8D\x02\u04A9\u04AA\x07\xBF\x02\x02\u04AA\u04AB\x05\xBC_\x02" +
        "\u04AB\u04AC\x07\u0183\x02\x02\u04AC\u04B0\x07v\x02\x02\u04AD\u04AE\x05" +
        "<\x1F\x02\u04AE\u04AF\x07\u0183\x02\x02\u04AF\u04B1\x03\x02\x02\x02\u04B0" +
        "\u04AD\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x03\x02" +
        "\x02\x02\u04B2\u04B3\x05F$\x02\u04B3\xBB\x03\x02\x02\x02\u04B4\u04B7\x05" +
        "f4\x02\u04B5\u04B7\x05\xD4k\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B5" +
        "\x03\x02\x02\x02\u04B7\xBD\x03\x02\x02\x02\u04B8\u04B9\x07\xD3\x02\x02" +
        "\u04B9\u04BA\x07\u0180\x02\x02\u04BA\u04BB\x05\xC0a\x02\u04BB\u04BC\x07" +
        "\u0183\x02\x02\u04BC\u04BD\x07q\x02\x02\u04BD\u04BE\x05\xD0i\x02\u04BE" +
        "\u04BF\x07\u016C\x02\x02\u04BF\u04C0\x07\xD2\x02\x02\u04C0\xBF\x03\x02" +
        "\x02\x02\u04C1\u04C4\x052\x1A\x02\u04C2\u04C4\x05\u0116\x8C\x02\u04C3" +
        "\u04C1\x03\x02\x02\x02\u04C3\u04C2\x03\x02\x02\x02\u04C4\xC1\x03\x02\x02" +
        "\x02\u04C5\u04C6\x07q\x02\x02\u04C6\u04C7\x05\xD0i\x02\u04C7\u04C8\x07" +
        "\u016C\x02\x02\u04C8\u04C9\x05\u0118\x8D\x02\u04C9\xC3\x03\x02\x02\x02" +
        "\u04CA\u04CB\x07\xBF\x02\x02\u04CB\u04CD\x05\xD6l\x02\u04CC\u04CE\x05" +
        "\xD8m\x02\u04CD\u04CC\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE" +
        "\xC5\x03\x02\x02\x02\u04CF\u04D0\x07W\x02\x02\u04D0\u04D2\x05\xD6l\x02" +
        "\u04D1\u04D3\x05\xDEp\x02\u04D2\u04D1\x03\x02\x02\x02\u04D2\u04D3\x03" +
        "\x02\x02\x02\u04D3\xC7\x03\x02\x02\x02\u04D4\u04D5\x07\xBF\x02\x02\u04D5" +
        "\u04D7\x05\xBC_\x02\u04D6\u04D8\x05\xD8m\x02\u04D7\u04D6\x03\x02\x02\x02" +
        "\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DB\x03\x02\x02\x02\u04D9\u04DA\x07" +
        "\u0183\x02\x02\u04DA\u04DC\x05<\x1F\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB" +
        "\u04DC\x03\x02\x02\x02\u04DC\xC9\x03\x02\x02\x02\u04DD\u04DE\x07W\x02" +
        "\x02\u04DE\u04E0\x05\xBC_\x02\u04DF\u04E1\x05\xDEp\x02\u04E0\u04DF\x03" +
        "\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E4\x03\x02\x02\x02\u04E2" +
        "\u04E3\x07\u0183\x02\x02\u04E3\u04E5\x05<\x1F\x02\u04E4\u04E2\x03\x02" +
        "\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\xCB\x03\x02\x02\x02\u04E6\u04E8" +
        "\x07\u0143\x02\x02\u04E7\u04E9\x05\xE0q\x02\u04E8\u04E7\x03\x02\x02\x02" +
        "\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EC\x03\x02\x02\x02\u04EA\u04EB\x07" +
        "\u0183\x02\x02\u04EB\u04ED\x05<\x1F\x02\u04EC\u04EA\x03\x02\x02\x02\u04EC" +
        "\u04ED\x03\x02\x02\x02\u04ED\xCD\x03\x02\x02\x02\u04EE\u04F0\x07\u0142" +
        "\x02\x02\u04EF\u04F1\x05\xDEp\x02\u04F0\u04EF\x03\x02\x02\x02\u04F0\u04F1" +
        "\x03\x02\x02\x02\u04F1\u04F4\x03\x02\x02\x02\u04F2\u04F3\x07\u0183\x02" +
        "\x02\u04F3\u04F5\x05<\x1F\x02\u04F4\u04F2\x03\x02\x02\x02\u04F4\u04F5" +
        "\x03\x02\x02\x02\u04F5\xCF\x03\x02\x02\x02\u04F6\u04F9\x05\xD6l\x02\u04F7" +
        "\u04F9\x05\xD4k\x02\u04F8\u04F6\x03\x02\x02\x02\u04F8\u04F7\x03\x02\x02" +
        "\x02\u04F9\xD1\x03\x02\x02\x02\u04FA\u04FD\x05f4\x02\u04FB\u04FD\x05\xD4" +
        "k\x02\u04FC\u04FA\x03\x02\x02\x02\u04FC\u04FB\x03\x02\x02\x02\u04FD\xD3" +
        "\x03\x02\x02\x02\u04FE\u04FF\x07\u0186\x02\x02\u04FF\u0500\x07\u0114\x02" +
        "\x02\u0500\u0501\x07\u0183\x02\x02\u0501\u0502\x052\x1A\x02\u0502\u0503" +
        "\x07\u0187\x02\x02\u0503\xD5\x03\x02\x02\x02\u0504\u0505\x052\x1A\x02" +
        "\u0505\xD7\x03\x02\x02\x02\u0506\u0507\x05\xDAn\x02\u0507\xD9\x03\x02" +
        "\x02\x02\u0508\u050C\x07\u0186\x02\x02\u0509\u050D\x05\xDCo\x02\u050A" +
        "\u050D\x07\xD0\x02\x02\u050B\u050D\x07Y\x02\x02\u050C\u0509\x03\x02\x02" +
        "\x02\u050C\u050A\x03\x02\x02\x02\u050C\u050B\x03\x02\x02\x02\u050D\u050E" +
        "\x03\x02\x02\x02\u050E\u050F\x07\u0187\x02\x02\u050F\xDB\x03\x02\x02\x02" +
        "\u0510\u0513\x07c\x02\x02\u0511\u0512\x07\u0183\x02\x02\u0512\u0514\t" +
        "\b\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514" +
        "\xDD\x03\x02\x02\x02\u0515\u0516\x07\u0186\x02\x02\u0516\u0517\x07c\x02" +
        "\x02\u0517\u0518\x07\u0187\x02\x02\u0518\xDF\x03\x02\x02\x02\u0519\u051A" +
        "\x05\xE2r\x02\u051A\xE1\x03\x02\x02\x02\u051B\u051E\x07\u0186\x02\x02" +
        "\u051C\u051F\x05\xE4s\x02\u051D\u051F\x07\xDE\x02\x02\u051E\u051C\x03" +
        "\x02\x02\x02\u051E\u051D\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520" +
        "\u0521\x07\u0187\x02\x02\u0521\xE3\x03\x02\x02\x02\u0522\u0525\x07c\x02" +
        "\x02\u0523\u0524\x07\u0183\x02\x02\u0524\u0526\x07\xDE\x02\x02\u0525\u0523" +
        "\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\xE5\x03\x02\x02\x02" +
        "\u0527\u052C\x05\xE8u\x02\u0528\u052C\x05\xECw\x02\u0529\u052C\x05\xF0" +
        "y\x02\u052A\u052C\x05\xF2z\x02\u052B\u0527\x03\x02\x02\x02\u052B\u0528" +
        "\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052B\u052A\x03\x02\x02\x02" +
        "\u052C\xE7\x03\x02\x02\x02\u052D\u0530\x05\x86D\x02\u052E\u0530\x05\x88" +
        "E\x02\u052F\u052D\x03\x02\x02\x02\u052F\u052E\x03\x02\x02\x02\u0530\u0531" +
        "\x03\x02\x02\x02\u0531\u0532\x07\u0180\x02\x02\u0532\u0533\x05\u0116\x8C" +
        "\x02\u0533\xE9\x03\x02\x02\x02\u0534\u0537\x05\x82B\x02\u0535\u0537\x05" +
        "\x84C\x02\u0536\u0534\x03\x02\x02\x02\u0536\u0535\x03\x02\x02\x02\u0537" +
        "\u0538\x03\x02\x02\x02\u0538\u0539\x07\u0180\x02\x02\u0539\u053A\x05\u0116" +
        "\x8C\x02\u053A\xEB\x03\x02\x02\x02\u053B\u053C\x05\u0116\x8C\x02\u053C" +
        "\u053F\x07\u0180\x02\x02\u053D\u0540\x05\x86D\x02\u053E\u0540\x05\x88" +
        "E\x02\u053F\u053D\x03\x02\x02\x02\u053F\u053E\x03\x02\x02\x02\u0540\xED" +
        "\x03\x02\x02\x02\u0541\u0542\x05\u0116\x8C\x02\u0542\u0545\x07\u0180\x02" +
        "\x02\u0543\u0546\x05\x82B\x02\u0544\u0546\x05\x84C\x02\u0545\u0543\x03" +
        "\x02\x02\x02\u0545\u0544\x03\x02\x02\x02\u0546\xEF\x03\x02\x02\x02\u0547" +
        "\u054A\x05v<\x02\u0548\u054A\x05x=\x02\u0549\u0547\x03\x02\x02\x02\u0549" +
        "\u0548\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B\u054C\x07\u0180" +
        "\x02\x02\u054C\u054D\x052\x1A\x02\u054D\xF1\x03\x02\x02\x02\u054E\u054F" +
        "\x05\xF4{\x02\u054F\u0550\x07\u0180\x02\x02\u0550\u0551\x052\x1A\x02\u0551" +
        "\xF3\x03\x02\x02\x02\u0552\u0562\x05\u0114\x8B\x02\u0553\u0562\x07\u0114" +
        "\x02\x02\u0554\u0562\x07\u0115\x02\x02\u0555\u0562\x07\u0116\x02\x02\u0556" +
        "\u0562\x07\x90\x02\x02\u0557\u0562\x07b\x02\x02\u0558\u0562\x07\xD1\x02" +
        "\x02\u0559\u0562\x07a\x02\x02\u055A\u0562\x05\u0112\x8A\x02\u055B\u0562" +
        "\x07\u0128\x02\x02\u055C\u0562\x07\u0129\x02\x02\u055D\u0562\x07\u0127" +
        "\x02\x02\u055E\u0562\x07\u0163\x02\x02\u055F\u0562\x07\u0160\x02\x02\u0560" +
        "\u0562\x05\u0104\x83\x02\u0561\u0552\x03\x02\x02\x02\u0561\u0553\x03\x02" +
        "\x02\x02\u0561\u0554\x03\x02\x02\x02\u0561\u0555\x03\x02\x02\x02\u0561" +
        "\u0556\x03\x02\x02\x02\u0561\u0557\x03\x02\x02\x02\u0561\u0558\x03\x02" +
        "\x02\x02\u0561\u0559\x03\x02\x02\x02\u0561\u055A\x03\x02\x02\x02\u0561" +
        "\u055B\x03\x02\x02\x02\u0561\u055C\x03\x02\x02\x02\u0561\u055D\x03\x02" +
        "\x02\x02\u0561\u055E\x03\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0561" +
        "\u0560\x03\x02\x02\x02\u0562\xF5\x03\x02\x02\x02\u0563\u0564\x07N\x02" +
        "\x02\u0564\u0565\t\t\x02\x02\u0565\u0566\x05\u0104\x83\x02\u0566\u0567" +
        "\x052\x1A\x02\u0567\u058F\x03\x02\x02\x02\u0568\u056B\x07O\x02\x02\u0569" +
        "\u056C\x05j6\x02\u056A\u056C\x05l7\x02\u056B\u0569\x03\x02\x02\x02\u056B" +
        "\u056A\x03\x02\x02\x02\u056C\u058F\x03\x02\x02\x02\u056D\u056E\x07\xF8" +
        "\x02\x02\u056E\u056F\x07\u0186\x02\x02\u056F\u0570\x05\u0106\x84\x02\u0570" +
        "\u0571\x07\u0183\x02\x02\u0571\u0572\x052\x1A\x02\u0572\u0573\x07\u0187" +
        "\x02\x02\u0573\u058F\x03\x02\x02\x02\u0574\u0575\x07\xF8\x02\x02\u0575" +
        "\u0576\x07\u0186\x02\x02\u0576\u0577\x05\u010A\x86\x02\u0577\u0578\x07" +
        "\u0183\x02\x02\u0578\u0579\x052\x1A\x02\u0579\u057A\x07\u0187\x02\x02" +
        "\u057A\u058F\x03\x02\x02\x02\u057B\u0580\x05\xF8}\x02\u057C\u057D\x07" +
        "\u0183\x02\x02\u057D\u057F\x05\xF8}\x02\u057E\u057C\x03\x02\x02\x02\u057F" +
        "\u0582\x03\x02\x02\x02\u0580\u057E\x03\x02\x02\x02\u0580\u0581\x03\x02" +
        "\x02\x02\u0581\u058F\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0583" +
        "\u0584\x07\x9A\x02\x02\u0584\u058F\x07V\x02\x02\u0585\u058F\x07\u0107" +
        "\x02\x02\u0586\u058F\x07\xB6\x02\x02\u0587\u058F\x07\xB7\x02\x02\u0588" +
        "\u0589\x07Z\x02\x02\u0589\u058B\x05\xD0i\x02\u058A\u058C\x05\xDEp\x02" +
        "\u058B\u058A\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\u058F\x03" +
        "\x02\x02\x02\u058D\u058F\x07\u013D\x02\x02\u058E\u0563\x03\x02\x02\x02" +
        "\u058E\u0568\x03\x02\x02\x02\u058E\u056D\x03\x02\x02\x02\u058E\u0574\x03" +
        "\x02\x02\x02\u058E\u057B\x03\x02\x02\x02\u058E\u0583\x03\x02\x02\x02\u058E" +
        "\u0585\x03\x02\x02\x02\u058E\u0586\x03\x02\x02\x02\u058E\u0587\x03\x02" +
        "\x02\x02\u058E\u0588\x03\x02\x02\x02\u058E\u058D\x03\x02\x02\x02\u058F" +
        "\xF7\x03\x02\x02\x02\u0590\u0591\t\n\x02\x02\u0591\u0592\t\v\x02\x02\u0592" +
        "\xF9\x03\x02\x02\x02\u0593\u0594\x07\n\x02\x02\u0594\u05D6\x07\x05\x02" +
        "\x02\u0595\u05D6\x07\v\x02\x02\u0596\u0597\x07\x0F\x02\x02\u0597\u059C" +
        "\x07\u01AB\x02\x02\u0598\u0599\x07\u0183\x02\x02\u0599\u059B\x07\u01AB" +
        "\x02\x02\u059A\u0598\x03\x02\x02\x02\u059B\u059E\x03\x02\x02\x02\u059C" +
        "\u059A\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D\u05D6\x03\x02" +
        "\x02\x02\u059E\u059C\x03\x02\x02\x02\u059F\u05A0\x07\x10\x02\x02\u05A0" +
        "\u05D6\x07\x03\x02\x02\u05A1\u05A2\x07\x11\x02\x02\u05A2\u05D6\v\x02\x02" +
        "\x02\u05A3\u05D6\x07\x12\x02\x02\u05A4\u05A5\x07\x13\x02\x02\u05A5\u05AA" +
        "\x07\u01AB\x02\x02\u05A6\u05A7\x07\u0183\x02\x02\u05A7\u05A9\x07\u01AB" +
        "\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9\u05AC\x03\x02\x02\x02\u05AA" +
        "\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05D6\x03\x02" +
        "\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AD\u05AE\x07\x15\x02\x02\u05AE" +
        "\u05B3\x07\x03\x02\x02\u05AF\u05B0\x07\u0183\x02\x02\u05B0\u05B2\x07\x03" +
        "\x02\x02\u05B1\u05AF\x03\x02\x02\x02\u05B2\u05B5\x03\x02\x02\x02\u05B3" +
        "\u05B1\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05D6\x03\x02" +
        "\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B6\u05B7\x07\x17\x02\x02\u05B7" +
        "\u05D6\x052\x1A\x02\u05B8\u05D6\x07\x18\x02\x02\u05B9\u05D6\x07\x19\x02" +
        "\x02\u05BA\u05D6\x07\x1A\x02\x02\u05BB\u05BC\x07\x1B\x02\x02\u05BC\u05D6" +
        "\x052\x1A\x02\u05BD\u05BE\x07\x1C\x02\x02\u05BE\u05D6\x052\x1A\x02\u05BF" +
        "\u05D6\x07\x1D\x02\x02\u05C0\u05D6\x07\x1E\x02\x02\u05C1\u05D6\x07\x1F" +
        "\x02\x02\u05C2\u05D6\x07 \x02\x02\u05C3\u05D6\x07!\x02\x02\u05C4\u05D6" +
        "\x07\"\x02\x02\u05C5\u05C6\x07#\x02\x02\u05C6\u05D6\x052\x1A\x02\u05C7" +
        "\u05C8\x07$\x02\x02\u05C8\u05D6\x052\x1A\x02\u05C9\u05CB\x07%\x02\x02" +
        "\u05CA\u05CC\x07\u0180\x02\x02\u05CB\u05CA\x03\x02\x02\x02\u05CB\u05CC" +
        "\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05D6\x07\x05\x02\x02" +
        "\u05CE\u05D6\x07&\x02\x02\u05CF\u05D6\x07\'\x02\x02\u05D0\u05D6\x07(\x02" +
        "\x02\u05D1\u05D6\x07)\x02\x02\u05D2\u05D6\x07*\x02\x02\u05D3\u05D4\x07" +
        "1\x02\x02\u05D4\u05D6\x07\u01AB\x02\x02\u05D5\u0593\x03\x02\x02\x02\u05D5" +
        "\u0595\x03\x02\x02\x02\u05D5\u0596\x03\x02\x02\x02\u05D5\u059F\x03\x02" +
        "\x02\x02\u05D5\u05A1\x03\x02\x02\x02\u05D5\u05A3\x03\x02\x02\x02\u05D5" +
        "\u05A4\x03\x02\x02\x02\u05D5\u05AD\x03\x02\x02\x02\u05D5\u05B6\x03\x02" +
        "\x02\x02\u05D5\u05B8\x03\x02\x02\x02\u05D5\u05B9\x03\x02\x02\x02\u05D5" +
        "\u05BA\x03\x02\x02\x02\u05D5\u05BB\x03\x02\x02\x02\u05D5\u05BD\x03\x02" +
        "\x02\x02\u05D5\u05BF\x03\x02\x02\x02\u05D5\u05C0\x03\x02\x02\x02\u05D5" +
        "\u05C1\x03\x02\x02\x02\u05D5\u05C2\x03\x02\x02\x02\u05D5\u05C3\x03\x02" +
        "\x02\x02\u05D5\u05C4\x03\x02\x02\x02\u05D5\u05C5\x03\x02\x02\x02\u05D5" +
        "\u05C7\x03\x02\x02\x02\u05D5\u05C9\x03\x02\x02\x02\u05D5\u05CE\x03\x02" +
        "\x02\x02\u05D5\u05CF\x03\x02\x02\x02\u05D5\u05D0\x03\x02\x02\x02\u05D5" +
        "\u05D1\x03\x02\x02\x02\u05D5\u05D2\x03\x02\x02\x02\u05D5\u05D3\x03\x02" +
        "\x02\x02\u05D6\xFB\x03\x02\x02\x02\u05D7\u05D8\t\f\x02\x02\u05D8\xFD\x03" +
        "\x02\x02\x02\u05D9\u05DA\t\r\x02\x02\u05DA\xFF\x03\x02\x02\x02\u05DB\u05DC" +
        "\t\x0E\x02\x02\u05DC\u0101\x03\x02\x02\x02\u05DD\u05DE\t\x0F\x02\x02\u05DE" +
        "\u0103\x03\x02\x02\x02\u05DF\u05E0\t\x10\x02\x02\u05E0\u0105\x03\x02\x02" +
        "\x02\u05E1\u05E2\t\x11\x02\x02\u05E2\u0107\x03\x02\x02\x02\u05E3\u05E4" +
        "\t\x12\x02\x02\u05E4\u0109\x03\x02\x02\x02\u05E5\u05E6\t\x13\x02\x02\u05E6" +
        "\u010B\x03\x02\x02\x02\u05E7\u05E8\t\x14\x02\x02\u05E8\u010D\x03\x02\x02" +
        "\x02\u05E9\u05EC\x05\u0106\x84\x02\u05EA\u05EC\x05\u010A\x86\x02\u05EB" +
        "\u05E9\x03\x02\x02\x02\u05EB\u05EA\x03\x02\x02\x02\u05EC\u010F\x03\x02" +
        "\x02\x02\u05ED\u05F0\x05\u0108\x85\x02\u05EE\u05F0\x05\u010C\x87\x02\u05EF" +
        "\u05ED\x03\x02\x02\x02\u05EF\u05EE\x03\x02\x02\x02\u05F0\u0111\x03\x02" +
        "\x02\x02\u05F1\u05F6\x05\u010E\x88\x02\u05F2\u05F6\x05\u0110\x89\x02\u05F3" +
        "\u05F6\x05\xFC\x7F\x02\u05F4\u05F6\x05\xFE\x80\x02\u05F5\u05F1\x03\x02" +
        "\x02\x02\u05F5\u05F2\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02\u05F5" +
        "\u05F4\x03\x02\x02\x02\u05F6\u0113\x03\x02\x02\x02\u05F7\u05FA\x05\u0100" +
        "\x81\x02\u05F8\u05FA\x05\u0102\x82\x02\u05F9\u05F7\x03\x02\x02\x02\u05F9" +
        "\u05F8\x03\x02\x02\x02\u05FA\u0115\x03\x02\x02\x02\u05FB\u060C\x05\u0114" +
        "\x8B\x02\u05FC\u060C\x07\u0114\x02\x02\u05FD\u060C\x07\u0115\x02\x02\u05FE" +
        "\u060C\x07\u0116\x02\x02\u05FF\u060C\x07\x90\x02\x02\u0600\u060C\x07b" +
        "\x02\x02\u0601\u060C\x07\xD1\x02\x02\u0602\u060C\x07a\x02\x02\u0603\u060C" +
        "\x07\xD3\x02\x02\u0604\u060C\x05\u0112\x8A\x02\u0605\u060C\x07\u0128\x02" +
        "\x02\u0606\u060C\x07\u0129\x02\x02\u0607\u060C\x07\u0127\x02\x02\u0608" +
        "\u060C\x07\u0163\x02\x02\u0609\u060C\x07\u0160\x02\x02\u060A\u060C\x05" +
        "\u0104\x83\x02\u060B\u05FB\x03\x02\x02\x02\u060B\u05FC\x03\x02\x02\x02" +
        "\u060B\u05FD\x03\x02\x02\x02\u060B\u05FE\x03\x02\x02\x02\u060B\u05FF\x03" +
        "\x02\x02\x02\u060B\u0600\x03\x02\x02\x02\u060B\u0601\x03\x02\x02\x02\u060B" +
        "\u0602\x03\x02\x02\x02\u060B\u0603\x03\x02\x02\x02\u060B\u0604\x03\x02" +
        "\x02\x02\u060B\u0605\x03\x02\x02\x02\u060B\u0606\x03\x02\x02\x02\u060B" +
        "\u0607\x03\x02\x02\x02\u060B\u0608\x03\x02\x02\x02\u060B\u0609\x03\x02" +
        "\x02\x02\u060B\u060A\x03\x02\x02\x02\u060C\u0117\x03\x02\x02\x02\u060D" +
        "\u060E\x05\u011A\x8E\x02\u060E\u0119\x03\x02\x02\x02\u060F\u063E\x07|" +
        "\x02\x02\u0610\u063E\x07\xE0\x02\x02\u0611\u063E\x07\xD4\x02\x02\u0612" +
        "\u063E\x073\x02\x02\u0613\u063E\x07:\x02\x02\u0614\u063E\x07\u0102\x02" +
        "\x02\u0615\u063E\x07\u0101\x02\x02\u0616\u063E\x07\u015C\x02\x02\u0617" +
        "\u063E\x07\u015E\x02\x02\u0618\u063E\x07\x95\x02\x02\u0619\u063E\x07\x96" +
        "\x02\x02\u061A\u063E\x07\x97\x02\x02\u061B\u063E\x07\x98\x02\x02\u061C" +
        "\u063E\x07\u0161\x02\x02\u061D\u063E\x07P\x02\x02\u061E\u063E\x07\xD2" +
        "\x02\x02\u061F\u0620\x07\u0109\x02\x02\u0620\u063E\x07\xD2\x02\x02\u0621" +
        "\u063E\x07\u0104\x02\x02\u0622\u063E\x07\xA4\x02\x02\u0623\u063E\x07\xA5" +
        "\x02\x02\u0624\u0625\x07\u0109\x02\x02\u0625\u063E\x073\x02\x02\u0626" +
        "\u0627\x07\u0109\x02\x02\u0627\u063E\x07:\x02\x02\u0628\u0629\x07\u0109" +
        "\x02\x02\u0629\u063E\x07\u0102\x02\x02\u062A\u062B\x07\u0109\x02\x02\u062B" +
        "\u063E\x07\u0101\x02\x02\u062C\u062D\x07\u0109\x02\x02\u062D\u063E\x07" +
        "\u015C\x02\x02\u062E\u062F\x07\u0109\x02\x02\u062F\u063E\x07\u015E\x02" +
        "\x02\u0630\u0631\x07\u0109\x02\x02\u0631\u063E\x07\x95\x02\x02\u0632\u0633" +
        "\x07\u0109\x02\x02\u0633\u063E\x07\x96\x02\x02\u0634\u0635\x07\u0109\x02" +
        "\x02\u0635\u063E\x07\x97\x02\x02\u0636\u0637\x07\u0109\x02\x02\u0637\u063E" +
        "\x07\x98\x02\x02\u0638\u0639\x07\u0109\x02\x02\u0639\u063E\x07\u0161\x02" +
        "\x02\u063A\u063E\x07\u0103\x02\x02\u063B\u063E\x07\x9C\x02\x02\u063C\u063E" +
        "\x07\u0164\x02\x02\u063D\u060F\x03\x02\x02\x02\u063D\u0610\x03\x02\x02" +
        "\x02\u063D\u0611\x03\x02\x02\x02\u063D\u0612\x03\x02\x02\x02\u063D\u0613" +
        "\x03\x02\x02\x02\u063D\u0614\x03\x02\x02\x02\u063D\u0615\x03\x02\x02\x02" +
        "\u063D\u0616\x03\x02\x02\x02\u063D\u0617\x03\x02\x02\x02\u063D\u0618\x03" +
        "\x02\x02\x02\u063D\u0619\x03\x02\x02\x02\u063D\u061A\x03\x02\x02\x02\u063D" +
        "\u061B\x03\x02\x02\x02\u063D\u061C\x03\x02\x02\x02\u063D\u061D\x03\x02" +
        "\x02\x02\u063D\u061E\x03\x02\x02\x02\u063D\u061F\x03\x02\x02\x02\u063D" +
        "\u0621\x03\x02\x02\x02\u063D\u0622\x03\x02\x02\x02\u063D\u0623\x03\x02" +
        "\x02\x02\u063D\u0624\x03\x02\x02\x02\u063D\u0626\x03\x02\x02\x02\u063D" +
        "\u0628\x03\x02\x02\x02\u063D\u062A\x03\x02\x02\x02\u063D\u062C\x03\x02" +
        "\x02\x02\u063D\u062E\x03\x02\x02\x02\u063D\u0630\x03\x02\x02\x02\u063D" +
        "\u0632\x03\x02\x02\x02\u063D\u0634\x03\x02\x02\x02\u063D\u0636\x03\x02" +
        "\x02\x02\u063D\u0638\x03\x02\x02\x02\u063D\u063A\x03\x02\x02\x02\u063D" +
        "\u063B\x03\x02\x02\x02\u063D\u063C\x03\x02\x02\x02\u063E\u011B\x03\x02" +
        "\x02\x02\u063F\u0640\x05\u011E\x90\x02\u0640\u011D\x03\x02\x02\x02\u0641" +
        "\u0642\x07\u0186\x02\x02\u0642\u0643\t\x15\x02\x02\u0643\u0644\x07\u0187" +
        "\x02\x02\u0644\u011F\x03\x02\x02\x02\u0645\u0646\x05\u0122\x92\x02\u0646" +
        "\u0121\x03\x02\x02\x02\u0647\u0648\x07\u0186\x02\x02\u0648\u0649\t\x16" +
        "\x02\x02\u0649\u064A\x07\u0187\x02\x02\u064A\u0123\x03\x02\x02\x02\u064B" +
        "\u064C\t\x17\x02\x02\u064C\u0125\x03\x02\x02\x02\u064D\u064E\t\x18\x02" +
        "\x02\u064E\u0127\x03\x02\x02\x02\u064F\u0650\t\x19\x02\x02\u0650\u0129" +
        "\x03\x02\x02\x02\u0651\u0652\t\x1A\x02\x02\u0652\u012B\x03\x02\x02\x02" +
        "\u0653\u0654\t\x1B\x02\x02\u0654\u012D\x03\x02\x02\x02\u0655\u0656\t\x1C" +
        "\x02\x02\u0656\u012F\x03\x02\x02\x02\u0657\u0658\t\x1D\x02\x02\u0658\u0131" +
        "\x03\x02\x02\x02\u0659\u065A\t\x1E\x02\x02\u065A\u0133\x03\x02\x02\x02" +
        "\u065B\u065C\t\x1F\x02\x02\u065C\u0135\x03\x02\x02\x02\u065D\u065E\t " +
        "\x02\x02\u065E\u0137\x03\x02\x02\x02\u065F\u0660\t!\x02\x02\u0660\u0139" +
        "\x03\x02\x02\x02u\u013F\u0146\u0149\u0150\u015F\u0164\u0169\u016B\u0170" +
        "\u0185\u018D\u0194\u019D\u01A5\u01AD\u01B8\u01BC\u01C3\u01C7\u01CF\u01D8" +
        "\u01DC\u01E5\u01EA\u01F1\u01F9\u01FE\u020B\u0219\u0223\u0227\u022E\u0237" +
        "\u023D\u0241\u024C\u0256\u025F\u026E\u02A7\u02D2\u032F\u0335\u0337\u0344" +
        "\u0375\u0396\u03A8\u03B1\u03B3\u03B9\u03C3\u03C8\u03CB\u03D5\u03DA\u03DC" +
        "\u03E6\u03EB\u03ED\u03FF\u0434\u043D\u044B\u0453\u0459\u045D\u0467\u047A" +
        "\u0481\u0483\u0490\u0498\u04A5\u04B0\u04B6\u04C3\u04CD\u04D2\u04D7\u04DB" +
        "\u04E0\u04E4\u04E8\u04EC\u04F0\u04F4\u04F8\u04FC\u050C\u0513\u051E\u0525" +
        "\u052B\u052F\u0536\u053F\u0545\u0549\u0561\u056B\u0580\u058B\u058E\u059C" +
        "\u05AA\u05B3\u05CB\u05D5\u05EB\u05EF\u05F5\u05F9\u060B\u063D";
    SHARCParser._serializedATN = Utils.join([
        SHARCParser._serializedATNSegment0,
        SHARCParser._serializedATNSegment1,
        SHARCParser._serializedATNSegment2,
    ], "");
    return SHARCParser;
}(Parser_1.Parser));
exports.SHARCParser = SHARCParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    ProgContext.prototype.SEMICOLON = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.SEMICOLON);
        }
        else {
            return this.getToken(SHARCParser.SEMICOLON, i);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_prog; },
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
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.stmt_atom = function () {
        return this.getRuleContext(0, Stmt_atomContext);
    };
    StatementContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.ID);
        }
        else {
            return this.getToken(SHARCParser.ID, i);
        }
    };
    StatementContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COLON);
        }
        else {
            return this.getToken(SHARCParser.COLON, i);
        }
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_statement; },
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
var Stmt_atomContext = /** @class */ (function (_super) {
    __extends(Stmt_atomContext, _super);
    function Stmt_atomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Stmt_atomContext.prototype.stmt = function () {
        return this.tryGetRuleContext(0, StmtContext);
    };
    Stmt_atomContext.prototype.sec = function () {
        return this.tryGetRuleContext(0, SecContext);
    };
    Stmt_atomContext.prototype.seg = function () {
        return this.tryGetRuleContext(0, SegContext);
    };
    Stmt_atomContext.prototype.end_seg = function () {
        return this.tryGetRuleContext(0, End_segContext);
    };
    Stmt_atomContext.prototype.directive_exp = function () {
        return this.tryGetRuleContext(0, Directive_expContext);
    };
    Object.defineProperty(Stmt_atomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_stmt_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Stmt_atomContext.prototype.enterRule = function (listener) {
        if (listener.enterStmt_atom) {
            listener.enterStmt_atom(this);
        }
    };
    // @Override
    Stmt_atomContext.prototype.exitRule = function (listener) {
        if (listener.exitStmt_atom) {
            listener.exitStmt_atom(this);
        }
    };
    // @Override
    Stmt_atomContext.prototype.accept = function (visitor) {
        if (visitor.visitStmt_atom) {
            return visitor.visitStmt_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Stmt_atomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Stmt_atomContext = Stmt_atomContext;
var SecContext = /** @class */ (function (_super) {
    __extends(SecContext, _super);
    function SecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SecContext.prototype.DOT_SECTION = function () { return this.getToken(SHARCParser.DOT_SECTION, 0); };
    SecContext.prototype.seg_qualifier = function () {
        return this.getRuleContext(0, Seg_qualifierContext);
    };
    SecContext.prototype.ID = function () { return this.getToken(SHARCParser.ID, 0); };
    Object.defineProperty(SecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_sec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SecContext.prototype.enterRule = function (listener) {
        if (listener.enterSec) {
            listener.enterSec(this);
        }
    };
    // @Override
    SecContext.prototype.exitRule = function (listener) {
        if (listener.exitSec) {
            listener.exitSec(this);
        }
    };
    // @Override
    SecContext.prototype.accept = function (visitor) {
        if (visitor.visitSec) {
            return visitor.visitSec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SecContext = SecContext;
var SegContext = /** @class */ (function (_super) {
    __extends(SegContext, _super);
    function SegContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SegContext.prototype.DOT_SEGMENT = function () { return this.getToken(SHARCParser.DOT_SEGMENT, 0); };
    SegContext.prototype.seg_qualifier = function () {
        return this.getRuleContext(0, Seg_qualifierContext);
    };
    SegContext.prototype.ID = function () { return this.getToken(SHARCParser.ID, 0); };
    Object.defineProperty(SegContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SegContext.prototype.enterRule = function (listener) {
        if (listener.enterSeg) {
            listener.enterSeg(this);
        }
    };
    // @Override
    SegContext.prototype.exitRule = function (listener) {
        if (listener.exitSeg) {
            listener.exitSeg(this);
        }
    };
    // @Override
    SegContext.prototype.accept = function (visitor) {
        if (visitor.visitSeg) {
            return visitor.visitSeg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SegContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SegContext = SegContext;
var End_segContext = /** @class */ (function (_super) {
    __extends(End_segContext, _super);
    function End_segContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    End_segContext.prototype.DOT_ENDSEG = function () { return this.getToken(SHARCParser.DOT_ENDSEG, 0); };
    Object.defineProperty(End_segContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_end_seg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    End_segContext.prototype.enterRule = function (listener) {
        if (listener.enterEnd_seg) {
            listener.enterEnd_seg(this);
        }
    };
    // @Override
    End_segContext.prototype.exitRule = function (listener) {
        if (listener.exitEnd_seg) {
            listener.exitEnd_seg(this);
        }
    };
    // @Override
    End_segContext.prototype.accept = function (visitor) {
        if (visitor.visitEnd_seg) {
            return visitor.visitEnd_seg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return End_segContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.End_segContext = End_segContext;
var Seg_qualifierContext = /** @class */ (function (_super) {
    __extends(Seg_qualifierContext, _super);
    function Seg_qualifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Seg_qualifierContext.prototype.seg_qualifier1 = function () {
        return this.tryGetRuleContext(0, Seg_qualifier1Context);
    };
    Seg_qualifierContext.prototype.seg_qualifier2 = function () {
        return this.tryGetRuleContext(0, Seg_qualifier2Context);
    };
    Seg_qualifierContext.prototype.seg_qualifier3 = function () {
        return this.tryGetRuleContext(0, Seg_qualifier3Context);
    };
    Object.defineProperty(Seg_qualifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg_qualifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Seg_qualifierContext.prototype.enterRule = function (listener) {
        if (listener.enterSeg_qualifier) {
            listener.enterSeg_qualifier(this);
        }
    };
    // @Override
    Seg_qualifierContext.prototype.exitRule = function (listener) {
        if (listener.exitSeg_qualifier) {
            listener.exitSeg_qualifier(this);
        }
    };
    // @Override
    Seg_qualifierContext.prototype.accept = function (visitor) {
        if (visitor.visitSeg_qualifier) {
            return visitor.visitSeg_qualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Seg_qualifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Seg_qualifierContext = Seg_qualifierContext;
var Seg_qualifier1Context = /** @class */ (function (_super) {
    __extends(Seg_qualifier1Context, _super);
    function Seg_qualifier1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Seg_qualifier1Context.prototype.DIV = function () { return this.tryGetToken(SHARCParser.DIV, 0); };
    Seg_qualifier1Context.prototype.seg_qualifier_1 = function () {
        return this.tryGetRuleContext(0, Seg_qualifier_1Context);
    };
    Seg_qualifier1Context.prototype.seg_qualifier_2 = function () {
        return this.tryGetRuleContext(0, Seg_qualifier_2Context);
    };
    Object.defineProperty(Seg_qualifier1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg_qualifier1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Seg_qualifier1Context.prototype.enterRule = function (listener) {
        if (listener.enterSeg_qualifier1) {
            listener.enterSeg_qualifier1(this);
        }
    };
    // @Override
    Seg_qualifier1Context.prototype.exitRule = function (listener) {
        if (listener.exitSeg_qualifier1) {
            listener.exitSeg_qualifier1(this);
        }
    };
    // @Override
    Seg_qualifier1Context.prototype.accept = function (visitor) {
        if (visitor.visitSeg_qualifier1) {
            return visitor.visitSeg_qualifier1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Seg_qualifier1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Seg_qualifier1Context = Seg_qualifier1Context;
var Seg_qualifier2Context = /** @class */ (function (_super) {
    __extends(Seg_qualifier2Context, _super);
    function Seg_qualifier2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Seg_qualifier2Context.prototype.DIV = function () { return this.tryGetToken(SHARCParser.DIV, 0); };
    Seg_qualifier2Context.prototype.seg_qualifier_3 = function () {
        return this.tryGetRuleContext(0, Seg_qualifier_3Context);
    };
    Object.defineProperty(Seg_qualifier2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg_qualifier2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Seg_qualifier2Context.prototype.enterRule = function (listener) {
        if (listener.enterSeg_qualifier2) {
            listener.enterSeg_qualifier2(this);
        }
    };
    // @Override
    Seg_qualifier2Context.prototype.exitRule = function (listener) {
        if (listener.exitSeg_qualifier2) {
            listener.exitSeg_qualifier2(this);
        }
    };
    // @Override
    Seg_qualifier2Context.prototype.accept = function (visitor) {
        if (visitor.visitSeg_qualifier2) {
            return visitor.visitSeg_qualifier2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Seg_qualifier2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Seg_qualifier2Context = Seg_qualifier2Context;
var Seg_qualifier3Context = /** @class */ (function (_super) {
    __extends(Seg_qualifier3Context, _super);
    function Seg_qualifier3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Seg_qualifier3Context.prototype.DIV = function () { return this.tryGetToken(SHARCParser.DIV, 0); };
    Seg_qualifier3Context.prototype.DMAONLY = function () { return this.tryGetToken(SHARCParser.DMAONLY, 0); };
    Object.defineProperty(Seg_qualifier3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg_qualifier3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Seg_qualifier3Context.prototype.enterRule = function (listener) {
        if (listener.enterSeg_qualifier3) {
            listener.enterSeg_qualifier3(this);
        }
    };
    // @Override
    Seg_qualifier3Context.prototype.exitRule = function (listener) {
        if (listener.exitSeg_qualifier3) {
            listener.exitSeg_qualifier3(this);
        }
    };
    // @Override
    Seg_qualifier3Context.prototype.accept = function (visitor) {
        if (visitor.visitSeg_qualifier3) {
            return visitor.visitSeg_qualifier3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Seg_qualifier3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Seg_qualifier3Context = Seg_qualifier3Context;
var Seg_qualifier_1Context = /** @class */ (function (_super) {
    __extends(Seg_qualifier_1Context, _super);
    function Seg_qualifier_1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Seg_qualifier_1Context.prototype.PM = function () { return this.tryGetToken(SHARCParser.PM, 0); };
    Seg_qualifier_1Context.prototype.CODE = function () { return this.tryGetToken(SHARCParser.CODE, 0); };
    Object.defineProperty(Seg_qualifier_1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg_qualifier_1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Seg_qualifier_1Context.prototype.enterRule = function (listener) {
        if (listener.enterSeg_qualifier_1) {
            listener.enterSeg_qualifier_1(this);
        }
    };
    // @Override
    Seg_qualifier_1Context.prototype.exitRule = function (listener) {
        if (listener.exitSeg_qualifier_1) {
            listener.exitSeg_qualifier_1(this);
        }
    };
    // @Override
    Seg_qualifier_1Context.prototype.accept = function (visitor) {
        if (visitor.visitSeg_qualifier_1) {
            return visitor.visitSeg_qualifier_1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Seg_qualifier_1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Seg_qualifier_1Context = Seg_qualifier_1Context;
var Seg_qualifier_2Context = /** @class */ (function (_super) {
    __extends(Seg_qualifier_2Context, _super);
    function Seg_qualifier_2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Seg_qualifier_2Context.prototype.DM = function () { return this.tryGetToken(SHARCParser.DM, 0); };
    Seg_qualifier_2Context.prototype.DATA = function () { return this.tryGetToken(SHARCParser.DATA, 0); };
    Seg_qualifier_2Context.prototype.DATA64 = function () { return this.tryGetToken(SHARCParser.DATA64, 0); };
    Object.defineProperty(Seg_qualifier_2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg_qualifier_2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Seg_qualifier_2Context.prototype.enterRule = function (listener) {
        if (listener.enterSeg_qualifier_2) {
            listener.enterSeg_qualifier_2(this);
        }
    };
    // @Override
    Seg_qualifier_2Context.prototype.exitRule = function (listener) {
        if (listener.exitSeg_qualifier_2) {
            listener.exitSeg_qualifier_2(this);
        }
    };
    // @Override
    Seg_qualifier_2Context.prototype.accept = function (visitor) {
        if (visitor.visitSeg_qualifier_2) {
            return visitor.visitSeg_qualifier_2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Seg_qualifier_2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Seg_qualifier_2Context = Seg_qualifier_2Context;
var Seg_qualifier_3Context = /** @class */ (function (_super) {
    __extends(Seg_qualifier_3Context, _super);
    function Seg_qualifier_3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Seg_qualifier_3Context.prototype.NO_INIT = function () { return this.tryGetToken(SHARCParser.NO_INIT, 0); };
    Seg_qualifier_3Context.prototype.ZERO_INIT = function () { return this.tryGetToken(SHARCParser.ZERO_INIT, 0); };
    Seg_qualifier_3Context.prototype.RUNTIME_INIT = function () { return this.tryGetToken(SHARCParser.RUNTIME_INIT, 0); };
    Object.defineProperty(Seg_qualifier_3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_seg_qualifier_3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Seg_qualifier_3Context.prototype.enterRule = function (listener) {
        if (listener.enterSeg_qualifier_3) {
            listener.enterSeg_qualifier_3(this);
        }
    };
    // @Override
    Seg_qualifier_3Context.prototype.exitRule = function (listener) {
        if (listener.exitSeg_qualifier_3) {
            listener.exitSeg_qualifier_3(this);
        }
    };
    // @Override
    Seg_qualifier_3Context.prototype.accept = function (visitor) {
        if (visitor.visitSeg_qualifier_3) {
            return visitor.visitSeg_qualifier_3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Seg_qualifier_3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Seg_qualifier_3Context = Seg_qualifier_3Context;
var StmtContext = /** @class */ (function (_super) {
    __extends(StmtContext, _super);
    function StmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StmtContext.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    StmtContext.prototype.flow_control_exp = function () {
        return this.tryGetRuleContext(0, Flow_control_expContext);
    };
    StmtContext.prototype.imm_mov_exp = function () {
        return this.tryGetRuleContext(0, Imm_mov_expContext);
    };
    StmtContext.prototype.misc_exp = function () {
        return this.tryGetRuleContext(0, Misc_expContext);
    };
    StmtContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    StmtContext.prototype.if_compute_mov = function () {
        return this.tryGetRuleContext(0, If_compute_movContext);
    };
    StmtContext.prototype.compute_mov_exp = function () {
        return this.tryGetRuleContext(0, Compute_mov_expContext);
    };
    Object.defineProperty(StmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StmtContext.prototype.enterRule = function (listener) {
        if (listener.enterStmt) {
            listener.enterStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.exitRule = function (listener) {
        if (listener.exitStmt) {
            listener.exitStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.accept = function (visitor) {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StmtContext = StmtContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.DOT_VAR = function () { return this.getToken(SHARCParser.DOT_VAR, 0); };
    DeclarationContext.prototype.declaration_exp1 = function () {
        return this.tryGetRuleContext(0, Declaration_exp1Context);
    };
    DeclarationContext.prototype.declaration_exp2 = function () {
        return this.tryGetRuleContext(0, Declaration_exp2Context);
    };
    DeclarationContext.prototype.declaration_exp3 = function () {
        return this.tryGetRuleContext(0, Declaration_exp3Context);
    };
    DeclarationContext.prototype.declaration_exp4 = function () {
        return this.tryGetRuleContext(0, Declaration_exp4Context);
    };
    DeclarationContext.prototype.declaration_exp5 = function () {
        return this.tryGetRuleContext(0, Declaration_exp5Context);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration; },
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
var Declaration_exp1Context = /** @class */ (function (_super) {
    __extends(Declaration_exp1Context, _super);
    function Declaration_exp1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Declaration_exp1Context.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.ID);
        }
        else {
            return this.getToken(SHARCParser.ID, i);
        }
    };
    Declaration_exp1Context.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COMMA);
        }
        else {
            return this.getToken(SHARCParser.COMMA, i);
        }
    };
    Object.defineProperty(Declaration_exp1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration_exp1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Declaration_exp1Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration_exp1) {
            listener.enterDeclaration_exp1(this);
        }
    };
    // @Override
    Declaration_exp1Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration_exp1) {
            listener.exitDeclaration_exp1(this);
        }
    };
    // @Override
    Declaration_exp1Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration_exp1) {
            return visitor.visitDeclaration_exp1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Declaration_exp1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Declaration_exp1Context = Declaration_exp1Context;
var Declaration_exp2Context = /** @class */ (function (_super) {
    __extends(Declaration_exp2Context, _super);
    function Declaration_exp2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Declaration_exp2Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Declaration_exp2Context.prototype.initExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitExpressionContext);
        }
        else {
            return this.getRuleContext(i, InitExpressionContext);
        }
    };
    Declaration_exp2Context.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COMMA);
        }
        else {
            return this.getToken(SHARCParser.COMMA, i);
        }
    };
    Object.defineProperty(Declaration_exp2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration_exp2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Declaration_exp2Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration_exp2) {
            listener.enterDeclaration_exp2(this);
        }
    };
    // @Override
    Declaration_exp2Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration_exp2) {
            listener.exitDeclaration_exp2(this);
        }
    };
    // @Override
    Declaration_exp2Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration_exp2) {
            return visitor.visitDeclaration_exp2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Declaration_exp2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Declaration_exp2Context = Declaration_exp2Context;
var Declaration_exp3Context = /** @class */ (function (_super) {
    __extends(Declaration_exp3Context, _super);
    function Declaration_exp3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Declaration_exp3Context.prototype.ID = function () { return this.getToken(SHARCParser.ID, 0); };
    Declaration_exp3Context.prototype.LBRACKET = function () { return this.getToken(SHARCParser.LBRACKET, 0); };
    Declaration_exp3Context.prototype.RBRACKET = function () { return this.getToken(SHARCParser.RBRACKET, 0); };
    Declaration_exp3Context.prototype.EQU = function () { return this.tryGetToken(SHARCParser.EQU, 0); };
    Declaration_exp3Context.prototype.declaration_exp_f2 = function () {
        return this.tryGetRuleContext(0, Declaration_exp_f2Context);
    };
    Object.defineProperty(Declaration_exp3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration_exp3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Declaration_exp3Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration_exp3) {
            listener.enterDeclaration_exp3(this);
        }
    };
    // @Override
    Declaration_exp3Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration_exp3) {
            listener.exitDeclaration_exp3(this);
        }
    };
    // @Override
    Declaration_exp3Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration_exp3) {
            return visitor.visitDeclaration_exp3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Declaration_exp3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Declaration_exp3Context = Declaration_exp3Context;
var Declaration_exp4Context = /** @class */ (function (_super) {
    __extends(Declaration_exp4Context, _super);
    function Declaration_exp4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Declaration_exp4Context.prototype.ID = function () { return this.getToken(SHARCParser.ID, 0); };
    Declaration_exp4Context.prototype.LBRACKET = function () { return this.getToken(SHARCParser.LBRACKET, 0); };
    Declaration_exp4Context.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Declaration_exp4Context.prototype.RBRACKET = function () { return this.getToken(SHARCParser.RBRACKET, 0); };
    Declaration_exp4Context.prototype.EQU = function () { return this.tryGetToken(SHARCParser.EQU, 0); };
    Declaration_exp4Context.prototype.declaration_exp_f2 = function () {
        return this.tryGetRuleContext(0, Declaration_exp_f2Context);
    };
    Object.defineProperty(Declaration_exp4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration_exp4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Declaration_exp4Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration_exp4) {
            listener.enterDeclaration_exp4(this);
        }
    };
    // @Override
    Declaration_exp4Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration_exp4) {
            listener.exitDeclaration_exp4(this);
        }
    };
    // @Override
    Declaration_exp4Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration_exp4) {
            return visitor.visitDeclaration_exp4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Declaration_exp4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Declaration_exp4Context = Declaration_exp4Context;
var Declaration_exp5Context = /** @class */ (function (_super) {
    __extends(Declaration_exp5Context, _super);
    function Declaration_exp5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Declaration_exp5Context.prototype.ID = function () { return this.getToken(SHARCParser.ID, 0); };
    Declaration_exp5Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Declaration_exp5Context.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Object.defineProperty(Declaration_exp5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration_exp5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Declaration_exp5Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration_exp5) {
            listener.enterDeclaration_exp5(this);
        }
    };
    // @Override
    Declaration_exp5Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration_exp5) {
            listener.exitDeclaration_exp5(this);
        }
    };
    // @Override
    Declaration_exp5Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration_exp5) {
            return visitor.visitDeclaration_exp5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Declaration_exp5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Declaration_exp5Context = Declaration_exp5Context;
var Declaration_exp_f1Context = /** @class */ (function (_super) {
    __extends(Declaration_exp_f1Context, _super);
    function Declaration_exp_f1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Declaration_exp_f1Context.prototype.initExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitExpressionContext);
        }
        else {
            return this.getRuleContext(i, InitExpressionContext);
        }
    };
    Declaration_exp_f1Context.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COMMA);
        }
        else {
            return this.getToken(SHARCParser.COMMA, i);
        }
    };
    Declaration_exp_f1Context.prototype.StringLiteral = function () { return this.tryGetToken(SHARCParser.StringLiteral, 0); };
    Object.defineProperty(Declaration_exp_f1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration_exp_f1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Declaration_exp_f1Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration_exp_f1) {
            listener.enterDeclaration_exp_f1(this);
        }
    };
    // @Override
    Declaration_exp_f1Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration_exp_f1) {
            listener.exitDeclaration_exp_f1(this);
        }
    };
    // @Override
    Declaration_exp_f1Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration_exp_f1) {
            return visitor.visitDeclaration_exp_f1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Declaration_exp_f1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Declaration_exp_f1Context = Declaration_exp_f1Context;
var Declaration_exp_f2Context = /** @class */ (function (_super) {
    __extends(Declaration_exp_f2Context, _super);
    function Declaration_exp_f2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Declaration_exp_f2Context.prototype.LBRACE = function () { return this.tryGetToken(SHARCParser.LBRACE, 0); };
    Declaration_exp_f2Context.prototype.declaration_exp_f1 = function () {
        return this.getRuleContext(0, Declaration_exp_f1Context);
    };
    Declaration_exp_f2Context.prototype.RBRACE = function () { return this.tryGetToken(SHARCParser.RBRACE, 0); };
    Object.defineProperty(Declaration_exp_f2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_declaration_exp_f2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Declaration_exp_f2Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration_exp_f2) {
            listener.enterDeclaration_exp_f2(this);
        }
    };
    // @Override
    Declaration_exp_f2Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration_exp_f2) {
            listener.exitDeclaration_exp_f2(this);
        }
    };
    // @Override
    Declaration_exp_f2Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration_exp_f2) {
            return visitor.visitDeclaration_exp_f2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Declaration_exp_f2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Declaration_exp_f2Context = Declaration_exp_f2Context;
var InitExpressionContext = /** @class */ (function (_super) {
    __extends(InitExpressionContext, _super);
    function InitExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitExpressionContext.prototype.value_exp = function () {
        return this.tryGetRuleContext(0, Value_expContext);
    };
    InitExpressionContext.prototype.CharLiteral = function () { return this.tryGetToken(SHARCParser.CharLiteral, 0); };
    Object.defineProperty(InitExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_initExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInitExpression) {
            listener.enterInitExpression(this);
        }
    };
    // @Override
    InitExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInitExpression) {
            listener.exitInitExpression(this);
        }
    };
    // @Override
    InitExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInitExpression) {
            return visitor.visitInitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitExpressionContext = InitExpressionContext;
var Var_addrContext = /** @class */ (function (_super) {
    __extends(Var_addrContext, _super);
    function Var_addrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Var_addrContext.prototype.AT = function () { return this.tryGetToken(SHARCParser.AT, 0); };
    Var_addrContext.prototype.ID = function () { return this.getToken(SHARCParser.ID, 0); };
    Var_addrContext.prototype.LENGTH = function () { return this.tryGetToken(SHARCParser.LENGTH, 0); };
    Var_addrContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    Var_addrContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Var_addrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_var_addr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Var_addrContext.prototype.enterRule = function (listener) {
        if (listener.enterVar_addr) {
            listener.enterVar_addr(this);
        }
    };
    // @Override
    Var_addrContext.prototype.exitRule = function (listener) {
        if (listener.exitVar_addr) {
            listener.exitVar_addr(this);
        }
    };
    // @Override
    Var_addrContext.prototype.accept = function (visitor) {
        if (visitor.visitVar_addr) {
            return visitor.visitVar_addr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Var_addrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Var_addrContext = Var_addrContext;
var Value_expContext = /** @class */ (function (_super) {
    __extends(Value_expContext, _super);
    function Value_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_expContext.prototype.value_exp2 = function () {
        return this.getRuleContext(0, Value_exp2Context);
    };
    Object.defineProperty(Value_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_value_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_expContext.prototype.enterRule = function (listener) {
        if (listener.enterValue_exp) {
            listener.enterValue_exp(this);
        }
    };
    // @Override
    Value_expContext.prototype.exitRule = function (listener) {
        if (listener.exitValue_exp) {
            listener.exitValue_exp(this);
        }
    };
    // @Override
    Value_expContext.prototype.accept = function (visitor) {
        if (visitor.visitValue_exp) {
            return visitor.visitValue_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_expContext = Value_expContext;
var Value_exp2Context = /** @class */ (function (_super) {
    __extends(Value_exp2Context, _super);
    function Value_exp2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_exp2Context.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Value_exp2Context.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.PLUS);
        }
        else {
            return this.getToken(SHARCParser.PLUS, i);
        }
    };
    Value_exp2Context.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.MINUS);
        }
        else {
            return this.getToken(SHARCParser.MINUS, i);
        }
    };
    Value_exp2Context.prototype.MULT = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.MULT);
        }
        else {
            return this.getToken(SHARCParser.MULT, i);
        }
    };
    Value_exp2Context.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.DIV);
        }
        else {
            return this.getToken(SHARCParser.DIV, i);
        }
    };
    Value_exp2Context.prototype.DIV_MOD = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.DIV_MOD);
        }
        else {
            return this.getToken(SHARCParser.DIV_MOD, i);
        }
    };
    Value_exp2Context.prototype.I_OR = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.I_OR);
        }
        else {
            return this.getToken(SHARCParser.I_OR, i);
        }
    };
    Value_exp2Context.prototype.I_XOR = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.I_XOR);
        }
        else {
            return this.getToken(SHARCParser.I_XOR, i);
        }
    };
    Object.defineProperty(Value_exp2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_value_exp2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_exp2Context.prototype.enterRule = function (listener) {
        if (listener.enterValue_exp2) {
            listener.enterValue_exp2(this);
        }
    };
    // @Override
    Value_exp2Context.prototype.exitRule = function (listener) {
        if (listener.exitValue_exp2) {
            listener.exitValue_exp2(this);
        }
    };
    // @Override
    Value_exp2Context.prototype.accept = function (visitor) {
        if (visitor.visitValue_exp2) {
            return visitor.visitValue_exp2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_exp2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_exp2Context = Value_exp2Context;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.factor = function () {
        return this.getRuleContext(0, FactorContext);
    };
    TermContext.prototype.MINUS = function () { return this.tryGetToken(SHARCParser.MINUS, 0); };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_term; },
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
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    FactorContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    FactorContext.prototype.value_exp2 = function () {
        return this.tryGetRuleContext(0, Value_exp2Context);
    };
    FactorContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_factor; },
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
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.INT = function () { return this.tryGetToken(SHARCParser.INT, 0); };
    AtomContext.prototype.var_addr = function () {
        return this.tryGetRuleContext(0, Var_addrContext);
    };
    AtomContext.prototype.ID = function () { return this.tryGetToken(SHARCParser.ID, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_atom; },
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
var ComputeContext = /** @class */ (function (_super) {
    __extends(ComputeContext, _super);
    function ComputeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComputeContext.prototype.dual_op = function () {
        return this.tryGetRuleContext(0, Dual_opContext);
    };
    ComputeContext.prototype.fixpoint_alu_op = function () {
        return this.tryGetRuleContext(0, Fixpoint_alu_opContext);
    };
    ComputeContext.prototype.floating_point_alu_op = function () {
        return this.tryGetRuleContext(0, Floating_point_alu_opContext);
    };
    ComputeContext.prototype.multi_op = function () {
        return this.tryGetRuleContext(0, Multi_opContext);
    };
    ComputeContext.prototype.shifter_op = function () {
        return this.tryGetRuleContext(0, Shifter_opContext);
    };
    Object.defineProperty(ComputeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_compute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComputeContext.prototype.enterRule = function (listener) {
        if (listener.enterCompute) {
            listener.enterCompute(this);
        }
    };
    // @Override
    ComputeContext.prototype.exitRule = function (listener) {
        if (listener.exitCompute) {
            listener.exitCompute(this);
        }
    };
    // @Override
    ComputeContext.prototype.accept = function (visitor) {
        if (visitor.visitCompute) {
            return visitor.visitCompute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComputeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComputeContext = ComputeContext;
var If_compute_movContext = /** @class */ (function (_super) {
    __extends(If_compute_movContext, _super);
    function If_compute_movContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_compute_movContext.prototype.IF = function () { return this.getToken(SHARCParser.IF, 0); };
    If_compute_movContext.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    If_compute_movContext.prototype.if_compute_mov_exp = function () {
        return this.getRuleContext(0, If_compute_mov_expContext);
    };
    Object.defineProperty(If_compute_movContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_if_compute_mov; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_compute_movContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_compute_mov) {
            listener.enterIf_compute_mov(this);
        }
    };
    // @Override
    If_compute_movContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_compute_mov) {
            listener.exitIf_compute_mov(this);
        }
    };
    // @Override
    If_compute_movContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_compute_mov) {
            return visitor.visitIf_compute_mov(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_compute_movContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_compute_movContext = If_compute_movContext;
var If_compute_mov_expContext = /** @class */ (function (_super) {
    __extends(If_compute_mov_expContext, _super);
    function If_compute_mov_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_compute_mov_expContext.prototype.compute_mov_exp = function () {
        return this.tryGetRuleContext(0, Compute_mov_expContext);
    };
    If_compute_mov_expContext.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    Object.defineProperty(If_compute_mov_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_if_compute_mov_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_compute_mov_expContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_compute_mov_exp) {
            listener.enterIf_compute_mov_exp(this);
        }
    };
    // @Override
    If_compute_mov_expContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_compute_mov_exp) {
            listener.exitIf_compute_mov_exp(this);
        }
    };
    // @Override
    If_compute_mov_expContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_compute_mov_exp) {
            return visitor.visitIf_compute_mov_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_compute_mov_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_compute_mov_expContext = If_compute_mov_expContext;
var Compute_mov_expContext = /** @class */ (function (_super) {
    __extends(Compute_mov_expContext, _super);
    function Compute_mov_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compute_mov_expContext.prototype.mov_exp_1 = function () {
        return this.tryGetRuleContext(0, Mov_exp_1Context);
    };
    Compute_mov_expContext.prototype.mov_exp_3a = function () {
        return this.tryGetRuleContext(0, Mov_exp_3aContext);
    };
    Compute_mov_expContext.prototype.mov_exp_3b = function () {
        return this.tryGetRuleContext(0, Mov_exp_3bContext);
    };
    Compute_mov_expContext.prototype.mov_exp_3c = function () {
        return this.tryGetRuleContext(0, Mov_exp_3cContext);
    };
    Compute_mov_expContext.prototype.mov_exp_3d = function () {
        return this.tryGetRuleContext(0, Mov_exp_3dContext);
    };
    Compute_mov_expContext.prototype.mov_exp_4a = function () {
        return this.tryGetRuleContext(0, Mov_exp_4aContext);
    };
    Compute_mov_expContext.prototype.mov_exp_4b = function () {
        return this.tryGetRuleContext(0, Mov_exp_4bContext);
    };
    Compute_mov_expContext.prototype.mov_exp_4c = function () {
        return this.tryGetRuleContext(0, Mov_exp_4cContext);
    };
    Compute_mov_expContext.prototype.mov_exp_4d = function () {
        return this.tryGetRuleContext(0, Mov_exp_4dContext);
    };
    Compute_mov_expContext.prototype.mov_exp_5 = function () {
        return this.tryGetRuleContext(0, Mov_exp_5Context);
    };
    Compute_mov_expContext.prototype.mov_exp_7 = function () {
        return this.tryGetRuleContext(0, Mov_exp_7Context);
    };
    Compute_mov_expContext.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    Compute_mov_expContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Object.defineProperty(Compute_mov_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_compute_mov_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compute_mov_expContext.prototype.enterRule = function (listener) {
        if (listener.enterCompute_mov_exp) {
            listener.enterCompute_mov_exp(this);
        }
    };
    // @Override
    Compute_mov_expContext.prototype.exitRule = function (listener) {
        if (listener.exitCompute_mov_exp) {
            listener.exitCompute_mov_exp(this);
        }
    };
    // @Override
    Compute_mov_expContext.prototype.accept = function (visitor) {
        if (visitor.visitCompute_mov_exp) {
            return visitor.visitCompute_mov_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compute_mov_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compute_mov_expContext = Compute_mov_expContext;
var Mov_exp_1Context = /** @class */ (function (_super) {
    __extends(Mov_exp_1Context, _super);
    function Mov_exp_1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_1Context.prototype.mov_exp_1_1 = function () {
        return this.getRuleContext(0, Mov_exp_1_1Context);
    };
    Mov_exp_1Context.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mov_exp_1Context.prototype.mov_exp_1_2 = function () {
        return this.getRuleContext(0, Mov_exp_1_2Context);
    };
    Object.defineProperty(Mov_exp_1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_1Context.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_1) {
            listener.enterMov_exp_1(this);
        }
    };
    // @Override
    Mov_exp_1Context.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_1) {
            listener.exitMov_exp_1(this);
        }
    };
    // @Override
    Mov_exp_1Context.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_1) {
            return visitor.visitMov_exp_1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_1Context = Mov_exp_1Context;
var Mov_exp_1_1Context = /** @class */ (function (_super) {
    __extends(Mov_exp_1_1Context, _super);
    function Mov_exp_1_1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_1_1Context.prototype.mem_addr_dm_ia_mb = function () {
        return this.getRuleContext(0, Mem_addr_dm_ia_mbContext);
    };
    Mov_exp_1_1Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_1_1Context.prototype.d_reg = function () {
        return this.getRuleContext(0, D_regContext);
    };
    Object.defineProperty(Mov_exp_1_1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_1_1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_1_1Context.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_1_1) {
            listener.enterMov_exp_1_1(this);
        }
    };
    // @Override
    Mov_exp_1_1Context.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_1_1) {
            listener.exitMov_exp_1_1(this);
        }
    };
    // @Override
    Mov_exp_1_1Context.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_1_1) {
            return visitor.visitMov_exp_1_1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_1_1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_1_1Context = Mov_exp_1_1Context;
var Mov_exp_1_2Context = /** @class */ (function (_super) {
    __extends(Mov_exp_1_2Context, _super);
    function Mov_exp_1_2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_1_2Context.prototype.mem_addr_pm_ic_md = function () {
        return this.getRuleContext(0, Mem_addr_pm_ic_mdContext);
    };
    Mov_exp_1_2Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_1_2Context.prototype.d_reg = function () {
        return this.getRuleContext(0, D_regContext);
    };
    Object.defineProperty(Mov_exp_1_2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_1_2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_1_2Context.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_1_2) {
            listener.enterMov_exp_1_2(this);
        }
    };
    // @Override
    Mov_exp_1_2Context.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_1_2) {
            listener.exitMov_exp_1_2(this);
        }
    };
    // @Override
    Mov_exp_1_2Context.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_1_2) {
            return visitor.visitMov_exp_1_2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_1_2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_1_2Context = Mov_exp_1_2Context;
var Mov_exp_3aContext = /** @class */ (function (_super) {
    __extends(Mov_exp_3aContext, _super);
    function Mov_exp_3aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_3aContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_3aContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Mov_exp_3aContext.prototype.mem_addr_dm_ia_mb = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
    };
    Mov_exp_3aContext.prototype.mem_addr_pm_ic_md = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
    };
    Object.defineProperty(Mov_exp_3aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_3a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_3aContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_3a) {
            listener.enterMov_exp_3a(this);
        }
    };
    // @Override
    Mov_exp_3aContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_3a) {
            listener.exitMov_exp_3a(this);
        }
    };
    // @Override
    Mov_exp_3aContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_3a) {
            return visitor.visitMov_exp_3a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_3aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_3aContext = Mov_exp_3aContext;
var Mov_exp_3bContext = /** @class */ (function (_super) {
    __extends(Mov_exp_3bContext, _super);
    function Mov_exp_3bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_3bContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_3bContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Mov_exp_3bContext.prototype.mem_addr_dm_mb_ia = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_mb_iaContext);
    };
    Mov_exp_3bContext.prototype.mem_addr_pm_md_ic = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_md_icContext);
    };
    Object.defineProperty(Mov_exp_3bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_3b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_3bContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_3b) {
            listener.enterMov_exp_3b(this);
        }
    };
    // @Override
    Mov_exp_3bContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_3b) {
            listener.exitMov_exp_3b(this);
        }
    };
    // @Override
    Mov_exp_3bContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_3b) {
            return visitor.visitMov_exp_3b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_3bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_3bContext = Mov_exp_3bContext;
var Mov_exp_3cContext = /** @class */ (function (_super) {
    __extends(Mov_exp_3cContext, _super);
    function Mov_exp_3cContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_3cContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Mov_exp_3cContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_3cContext.prototype.mem_addr_dm_ia_mb = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
    };
    Mov_exp_3cContext.prototype.mem_addr_pm_ic_md = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
    };
    Object.defineProperty(Mov_exp_3cContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_3c; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_3cContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_3c) {
            listener.enterMov_exp_3c(this);
        }
    };
    // @Override
    Mov_exp_3cContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_3c) {
            listener.exitMov_exp_3c(this);
        }
    };
    // @Override
    Mov_exp_3cContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_3c) {
            return visitor.visitMov_exp_3c(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_3cContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_3cContext = Mov_exp_3cContext;
var Mov_exp_3dContext = /** @class */ (function (_super) {
    __extends(Mov_exp_3dContext, _super);
    function Mov_exp_3dContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_3dContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Mov_exp_3dContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_3dContext.prototype.mem_addr_dm_mb_ia = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_mb_iaContext);
    };
    Mov_exp_3dContext.prototype.mem_addr_pm_md_ic = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_md_icContext);
    };
    Object.defineProperty(Mov_exp_3dContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_3d; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_3dContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_3d) {
            listener.enterMov_exp_3d(this);
        }
    };
    // @Override
    Mov_exp_3dContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_3d) {
            listener.exitMov_exp_3d(this);
        }
    };
    // @Override
    Mov_exp_3dContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_3d) {
            return visitor.visitMov_exp_3d(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_3dContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_3dContext = Mov_exp_3dContext;
var Mov_exp_4aContext = /** @class */ (function (_super) {
    __extends(Mov_exp_4aContext, _super);
    function Mov_exp_4aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_4aContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_4aContext.prototype.d_reg = function () {
        return this.getRuleContext(0, D_regContext);
    };
    Mov_exp_4aContext.prototype.mem_addr_dm_ia_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_ia_intContext);
    };
    Mov_exp_4aContext.prototype.mem_addr_pm_ic_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_ic_intContext);
    };
    Object.defineProperty(Mov_exp_4aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_4a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_4aContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_4a) {
            listener.enterMov_exp_4a(this);
        }
    };
    // @Override
    Mov_exp_4aContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_4a) {
            listener.exitMov_exp_4a(this);
        }
    };
    // @Override
    Mov_exp_4aContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_4a) {
            return visitor.visitMov_exp_4a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_4aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_4aContext = Mov_exp_4aContext;
var Mov_exp_4bContext = /** @class */ (function (_super) {
    __extends(Mov_exp_4bContext, _super);
    function Mov_exp_4bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_4bContext.prototype.imm_mov_15a = function () {
        return this.getRuleContext(0, Imm_mov_15aContext);
    };
    Object.defineProperty(Mov_exp_4bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_4b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_4bContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_4b) {
            listener.enterMov_exp_4b(this);
        }
    };
    // @Override
    Mov_exp_4bContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_4b) {
            listener.exitMov_exp_4b(this);
        }
    };
    // @Override
    Mov_exp_4bContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_4b) {
            return visitor.visitMov_exp_4b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_4bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_4bContext = Mov_exp_4bContext;
var Mov_exp_4cContext = /** @class */ (function (_super) {
    __extends(Mov_exp_4cContext, _super);
    function Mov_exp_4cContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_4cContext.prototype.d_reg = function () {
        return this.getRuleContext(0, D_regContext);
    };
    Mov_exp_4cContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_4cContext.prototype.mem_addr_dm_ia_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_ia_intContext);
    };
    Mov_exp_4cContext.prototype.mem_addr_pm_ic_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_ic_intContext);
    };
    Object.defineProperty(Mov_exp_4cContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_4c; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_4cContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_4c) {
            listener.enterMov_exp_4c(this);
        }
    };
    // @Override
    Mov_exp_4cContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_4c) {
            listener.exitMov_exp_4c(this);
        }
    };
    // @Override
    Mov_exp_4cContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_4c) {
            return visitor.visitMov_exp_4c(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_4cContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_4cContext = Mov_exp_4cContext;
var Mov_exp_4dContext = /** @class */ (function (_super) {
    __extends(Mov_exp_4dContext, _super);
    function Mov_exp_4dContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_4dContext.prototype.imm_mov_15b = function () {
        return this.getRuleContext(0, Imm_mov_15bContext);
    };
    Object.defineProperty(Mov_exp_4dContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_4d; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_4dContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_4d) {
            listener.enterMov_exp_4d(this);
        }
    };
    // @Override
    Mov_exp_4dContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_4d) {
            listener.exitMov_exp_4d(this);
        }
    };
    // @Override
    Mov_exp_4dContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_4d) {
            return visitor.visitMov_exp_4d(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_4dContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_4dContext = Mov_exp_4dContext;
var Mov_exp_5Context = /** @class */ (function (_super) {
    __extends(Mov_exp_5Context, _super);
    function Mov_exp_5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_5Context.prototype.u_reg2 = function () {
        return this.getRuleContext(0, U_reg2Context);
    };
    Mov_exp_5Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_5Context.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Object.defineProperty(Mov_exp_5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_5Context.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_5) {
            listener.enterMov_exp_5(this);
        }
    };
    // @Override
    Mov_exp_5Context.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_5) {
            listener.exitMov_exp_5(this);
        }
    };
    // @Override
    Mov_exp_5Context.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_5) {
            return visitor.visitMov_exp_5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_5Context = Mov_exp_5Context;
var Mov_exp_6aContext = /** @class */ (function (_super) {
    __extends(Mov_exp_6aContext, _super);
    function Mov_exp_6aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_6aContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_6aContext.prototype.d_reg = function () {
        return this.getRuleContext(0, D_regContext);
    };
    Mov_exp_6aContext.prototype.mem_addr_dm_ia_mb = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
    };
    Mov_exp_6aContext.prototype.mem_addr_pm_ic_md = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
    };
    Object.defineProperty(Mov_exp_6aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_6a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_6aContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_6a) {
            listener.enterMov_exp_6a(this);
        }
    };
    // @Override
    Mov_exp_6aContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_6a) {
            listener.exitMov_exp_6a(this);
        }
    };
    // @Override
    Mov_exp_6aContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_6a) {
            return visitor.visitMov_exp_6a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_6aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_6aContext = Mov_exp_6aContext;
var Mov_exp_6bContext = /** @class */ (function (_super) {
    __extends(Mov_exp_6bContext, _super);
    function Mov_exp_6bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_6bContext.prototype.d_reg = function () {
        return this.getRuleContext(0, D_regContext);
    };
    Mov_exp_6bContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Mov_exp_6bContext.prototype.mem_addr_dm_ia_mb = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
    };
    Mov_exp_6bContext.prototype.mem_addr_pm_ic_md = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
    };
    Object.defineProperty(Mov_exp_6bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_6b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_6bContext.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_6b) {
            listener.enterMov_exp_6b(this);
        }
    };
    // @Override
    Mov_exp_6bContext.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_6b) {
            listener.exitMov_exp_6b(this);
        }
    };
    // @Override
    Mov_exp_6bContext.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_6b) {
            return visitor.visitMov_exp_6b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_6bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_6bContext = Mov_exp_6bContext;
var Mov_exp_7Context = /** @class */ (function (_super) {
    __extends(Mov_exp_7Context, _super);
    function Mov_exp_7Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mov_exp_7Context.prototype.MODIFY = function () { return this.getToken(SHARCParser.MODIFY, 0); };
    Mov_exp_7Context.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    Mov_exp_7Context.prototype.ia = function () {
        return this.tryGetRuleContext(0, IaContext);
    };
    Mov_exp_7Context.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Mov_exp_7Context.prototype.mb = function () {
        return this.tryGetRuleContext(0, MbContext);
    };
    Mov_exp_7Context.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    Mov_exp_7Context.prototype.ic = function () {
        return this.tryGetRuleContext(0, IcContext);
    };
    Mov_exp_7Context.prototype.md = function () {
        return this.tryGetRuleContext(0, MdContext);
    };
    Object.defineProperty(Mov_exp_7Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mov_exp_7; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mov_exp_7Context.prototype.enterRule = function (listener) {
        if (listener.enterMov_exp_7) {
            listener.enterMov_exp_7(this);
        }
    };
    // @Override
    Mov_exp_7Context.prototype.exitRule = function (listener) {
        if (listener.exitMov_exp_7) {
            listener.exitMov_exp_7(this);
        }
    };
    // @Override
    Mov_exp_7Context.prototype.accept = function (visitor) {
        if (visitor.visitMov_exp_7) {
            return visitor.visitMov_exp_7(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mov_exp_7Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mov_exp_7Context = Mov_exp_7Context;
var Mem_addr_ia_mbContext = /** @class */ (function (_super) {
    __extends(Mem_addr_ia_mbContext, _super);
    function Mem_addr_ia_mbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_ia_mbContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_ia_mbContext.prototype.ia = function () {
        return this.getRuleContext(0, IaContext);
    };
    Mem_addr_ia_mbContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_ia_mbContext.prototype.mb = function () {
        return this.getRuleContext(0, MbContext);
    };
    Mem_addr_ia_mbContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_ia_mbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_ia_mb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_ia_mbContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_ia_mb) {
            listener.enterMem_addr_ia_mb(this);
        }
    };
    // @Override
    Mem_addr_ia_mbContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_ia_mb) {
            listener.exitMem_addr_ia_mb(this);
        }
    };
    // @Override
    Mem_addr_ia_mbContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_ia_mb) {
            return visitor.visitMem_addr_ia_mb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_ia_mbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_ia_mbContext = Mem_addr_ia_mbContext;
var Mem_addr_ic_mdContext = /** @class */ (function (_super) {
    __extends(Mem_addr_ic_mdContext, _super);
    function Mem_addr_ic_mdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_ic_mdContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_ic_mdContext.prototype.ic = function () {
        return this.getRuleContext(0, IcContext);
    };
    Mem_addr_ic_mdContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_ic_mdContext.prototype.md = function () {
        return this.getRuleContext(0, MdContext);
    };
    Mem_addr_ic_mdContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_ic_mdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_ic_md; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_ic_mdContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_ic_md) {
            listener.enterMem_addr_ic_md(this);
        }
    };
    // @Override
    Mem_addr_ic_mdContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_ic_md) {
            listener.exitMem_addr_ic_md(this);
        }
    };
    // @Override
    Mem_addr_ic_mdContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_ic_md) {
            return visitor.visitMem_addr_ic_md(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_ic_mdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_ic_mdContext = Mem_addr_ic_mdContext;
var Mem_addr_md_icContext = /** @class */ (function (_super) {
    __extends(Mem_addr_md_icContext, _super);
    function Mem_addr_md_icContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_md_icContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_md_icContext.prototype.md = function () {
        return this.getRuleContext(0, MdContext);
    };
    Mem_addr_md_icContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_md_icContext.prototype.ic = function () {
        return this.getRuleContext(0, IcContext);
    };
    Mem_addr_md_icContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_md_icContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_md_ic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_md_icContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_md_ic) {
            listener.enterMem_addr_md_ic(this);
        }
    };
    // @Override
    Mem_addr_md_icContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_md_ic) {
            listener.exitMem_addr_md_ic(this);
        }
    };
    // @Override
    Mem_addr_md_icContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_md_ic) {
            return visitor.visitMem_addr_md_ic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_md_icContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_md_icContext = Mem_addr_md_icContext;
var Mem_addr_mb_iaContext = /** @class */ (function (_super) {
    __extends(Mem_addr_mb_iaContext, _super);
    function Mem_addr_mb_iaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_mb_iaContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_mb_iaContext.prototype.mb = function () {
        return this.getRuleContext(0, MbContext);
    };
    Mem_addr_mb_iaContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_mb_iaContext.prototype.ia = function () {
        return this.getRuleContext(0, IaContext);
    };
    Mem_addr_mb_iaContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_mb_iaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_mb_ia; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_mb_iaContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_mb_ia) {
            listener.enterMem_addr_mb_ia(this);
        }
    };
    // @Override
    Mem_addr_mb_iaContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_mb_ia) {
            listener.exitMem_addr_mb_ia(this);
        }
    };
    // @Override
    Mem_addr_mb_iaContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_mb_ia) {
            return visitor.visitMem_addr_mb_ia(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_mb_iaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_mb_iaContext = Mem_addr_mb_iaContext;
var Mem_addr_ia_intContext = /** @class */ (function (_super) {
    __extends(Mem_addr_ia_intContext, _super);
    function Mem_addr_ia_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_ia_intContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_ia_intContext.prototype.ia = function () {
        return this.getRuleContext(0, IaContext);
    };
    Mem_addr_ia_intContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_ia_intContext.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Mem_addr_ia_intContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_ia_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_ia_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_ia_intContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_ia_int) {
            listener.enterMem_addr_ia_int(this);
        }
    };
    // @Override
    Mem_addr_ia_intContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_ia_int) {
            listener.exitMem_addr_ia_int(this);
        }
    };
    // @Override
    Mem_addr_ia_intContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_ia_int) {
            return visitor.visitMem_addr_ia_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_ia_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_ia_intContext = Mem_addr_ia_intContext;
var Mem_addr_ic_intContext = /** @class */ (function (_super) {
    __extends(Mem_addr_ic_intContext, _super);
    function Mem_addr_ic_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_ic_intContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_ic_intContext.prototype.ic = function () {
        return this.getRuleContext(0, IcContext);
    };
    Mem_addr_ic_intContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_ic_intContext.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Mem_addr_ic_intContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_ic_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_ic_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_ic_intContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_ic_int) {
            listener.enterMem_addr_ic_int(this);
        }
    };
    // @Override
    Mem_addr_ic_intContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_ic_int) {
            listener.exitMem_addr_ic_int(this);
        }
    };
    // @Override
    Mem_addr_ic_intContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_ic_int) {
            return visitor.visitMem_addr_ic_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_ic_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_ic_intContext = Mem_addr_ic_intContext;
var Mem_addr_int_iaContext = /** @class */ (function (_super) {
    __extends(Mem_addr_int_iaContext, _super);
    function Mem_addr_int_iaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_int_iaContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_int_iaContext.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Mem_addr_int_iaContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_int_iaContext.prototype.ia = function () {
        return this.getRuleContext(0, IaContext);
    };
    Mem_addr_int_iaContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_int_iaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_int_ia; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_int_iaContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_int_ia) {
            listener.enterMem_addr_int_ia(this);
        }
    };
    // @Override
    Mem_addr_int_iaContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_int_ia) {
            listener.exitMem_addr_int_ia(this);
        }
    };
    // @Override
    Mem_addr_int_iaContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_int_ia) {
            return visitor.visitMem_addr_int_ia(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_int_iaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_int_iaContext = Mem_addr_int_iaContext;
var Mem_addr_int_icContext = /** @class */ (function (_super) {
    __extends(Mem_addr_int_icContext, _super);
    function Mem_addr_int_icContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_int_icContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Mem_addr_int_icContext.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Mem_addr_int_icContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Mem_addr_int_icContext.prototype.ic = function () {
        return this.getRuleContext(0, IcContext);
    };
    Mem_addr_int_icContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Mem_addr_int_icContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_int_ic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_int_icContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_int_ic) {
            listener.enterMem_addr_int_ic(this);
        }
    };
    // @Override
    Mem_addr_int_icContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_int_ic) {
            listener.exitMem_addr_int_ic(this);
        }
    };
    // @Override
    Mem_addr_int_icContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_int_ic) {
            return visitor.visitMem_addr_int_ic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_int_icContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_int_icContext = Mem_addr_int_icContext;
var Mem_addr_intContext = /** @class */ (function (_super) {
    __extends(Mem_addr_intContext, _super);
    function Mem_addr_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Mem_addr_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_intContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_int) {
            listener.enterMem_addr_int(this);
        }
    };
    // @Override
    Mem_addr_intContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_int) {
            listener.exitMem_addr_int(this);
        }
    };
    // @Override
    Mem_addr_intContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_int) {
            return visitor.visitMem_addr_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_intContext = Mem_addr_intContext;
var Mem_addr_int_Context = /** @class */ (function (_super) {
    __extends(Mem_addr_int_Context, _super);
    function Mem_addr_int_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_int_Context.prototype.atom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    };
    Mem_addr_int_Context.prototype.PLUS = function () { return this.tryGetToken(SHARCParser.PLUS, 0); };
    Mem_addr_int_Context.prototype.MINUS = function () { return this.tryGetToken(SHARCParser.MINUS, 0); };
    Object.defineProperty(Mem_addr_int_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_int_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_int_Context.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_int_) {
            listener.enterMem_addr_int_(this);
        }
    };
    // @Override
    Mem_addr_int_Context.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_int_) {
            listener.exitMem_addr_int_(this);
        }
    };
    // @Override
    Mem_addr_int_Context.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_int_) {
            return visitor.visitMem_addr_int_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_int_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_int_Context = Mem_addr_int_Context;
var Mem_addr_dm_ia_mbContext = /** @class */ (function (_super) {
    __extends(Mem_addr_dm_ia_mbContext, _super);
    function Mem_addr_dm_ia_mbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_dm_ia_mbContext.prototype.DM = function () { return this.getToken(SHARCParser.DM, 0); };
    Mem_addr_dm_ia_mbContext.prototype.mem_addr_ia_mb = function () {
        return this.getRuleContext(0, Mem_addr_ia_mbContext);
    };
    Object.defineProperty(Mem_addr_dm_ia_mbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_dm_ia_mb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_dm_ia_mbContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_dm_ia_mb) {
            listener.enterMem_addr_dm_ia_mb(this);
        }
    };
    // @Override
    Mem_addr_dm_ia_mbContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_dm_ia_mb) {
            listener.exitMem_addr_dm_ia_mb(this);
        }
    };
    // @Override
    Mem_addr_dm_ia_mbContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_dm_ia_mb) {
            return visitor.visitMem_addr_dm_ia_mb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_dm_ia_mbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_dm_ia_mbContext = Mem_addr_dm_ia_mbContext;
var Mem_addr_pm_ic_mdContext = /** @class */ (function (_super) {
    __extends(Mem_addr_pm_ic_mdContext, _super);
    function Mem_addr_pm_ic_mdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_pm_ic_mdContext.prototype.PM = function () { return this.getToken(SHARCParser.PM, 0); };
    Mem_addr_pm_ic_mdContext.prototype.mem_addr_ic_md = function () {
        return this.getRuleContext(0, Mem_addr_ic_mdContext);
    };
    Object.defineProperty(Mem_addr_pm_ic_mdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_pm_ic_md; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_pm_ic_mdContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_pm_ic_md) {
            listener.enterMem_addr_pm_ic_md(this);
        }
    };
    // @Override
    Mem_addr_pm_ic_mdContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_pm_ic_md) {
            listener.exitMem_addr_pm_ic_md(this);
        }
    };
    // @Override
    Mem_addr_pm_ic_mdContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_pm_ic_md) {
            return visitor.visitMem_addr_pm_ic_md(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_pm_ic_mdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_pm_ic_mdContext = Mem_addr_pm_ic_mdContext;
var Mem_addr_dm_mb_iaContext = /** @class */ (function (_super) {
    __extends(Mem_addr_dm_mb_iaContext, _super);
    function Mem_addr_dm_mb_iaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_dm_mb_iaContext.prototype.DM = function () { return this.getToken(SHARCParser.DM, 0); };
    Mem_addr_dm_mb_iaContext.prototype.mem_addr_mb_ia = function () {
        return this.getRuleContext(0, Mem_addr_mb_iaContext);
    };
    Object.defineProperty(Mem_addr_dm_mb_iaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_dm_mb_ia; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_dm_mb_iaContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_dm_mb_ia) {
            listener.enterMem_addr_dm_mb_ia(this);
        }
    };
    // @Override
    Mem_addr_dm_mb_iaContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_dm_mb_ia) {
            listener.exitMem_addr_dm_mb_ia(this);
        }
    };
    // @Override
    Mem_addr_dm_mb_iaContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_dm_mb_ia) {
            return visitor.visitMem_addr_dm_mb_ia(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_dm_mb_iaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_dm_mb_iaContext = Mem_addr_dm_mb_iaContext;
var Mem_addr_pm_md_icContext = /** @class */ (function (_super) {
    __extends(Mem_addr_pm_md_icContext, _super);
    function Mem_addr_pm_md_icContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_pm_md_icContext.prototype.PM = function () { return this.getToken(SHARCParser.PM, 0); };
    Mem_addr_pm_md_icContext.prototype.mem_addr_md_ic = function () {
        return this.getRuleContext(0, Mem_addr_md_icContext);
    };
    Object.defineProperty(Mem_addr_pm_md_icContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_pm_md_ic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_pm_md_icContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_pm_md_ic) {
            listener.enterMem_addr_pm_md_ic(this);
        }
    };
    // @Override
    Mem_addr_pm_md_icContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_pm_md_ic) {
            listener.exitMem_addr_pm_md_ic(this);
        }
    };
    // @Override
    Mem_addr_pm_md_icContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_pm_md_ic) {
            return visitor.visitMem_addr_pm_md_ic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_pm_md_icContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_pm_md_icContext = Mem_addr_pm_md_icContext;
var Mem_addr_dm_ia_intContext = /** @class */ (function (_super) {
    __extends(Mem_addr_dm_ia_intContext, _super);
    function Mem_addr_dm_ia_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_dm_ia_intContext.prototype.DM = function () { return this.getToken(SHARCParser.DM, 0); };
    Mem_addr_dm_ia_intContext.prototype.mem_addr_ia_int = function () {
        return this.getRuleContext(0, Mem_addr_ia_intContext);
    };
    Object.defineProperty(Mem_addr_dm_ia_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_dm_ia_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_dm_ia_intContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_dm_ia_int) {
            listener.enterMem_addr_dm_ia_int(this);
        }
    };
    // @Override
    Mem_addr_dm_ia_intContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_dm_ia_int) {
            listener.exitMem_addr_dm_ia_int(this);
        }
    };
    // @Override
    Mem_addr_dm_ia_intContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_dm_ia_int) {
            return visitor.visitMem_addr_dm_ia_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_dm_ia_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_dm_ia_intContext = Mem_addr_dm_ia_intContext;
var Mem_addr_pm_ic_intContext = /** @class */ (function (_super) {
    __extends(Mem_addr_pm_ic_intContext, _super);
    function Mem_addr_pm_ic_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_pm_ic_intContext.prototype.PM = function () { return this.getToken(SHARCParser.PM, 0); };
    Mem_addr_pm_ic_intContext.prototype.mem_addr_ic_int = function () {
        return this.getRuleContext(0, Mem_addr_ic_intContext);
    };
    Object.defineProperty(Mem_addr_pm_ic_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_pm_ic_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_pm_ic_intContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_pm_ic_int) {
            listener.enterMem_addr_pm_ic_int(this);
        }
    };
    // @Override
    Mem_addr_pm_ic_intContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_pm_ic_int) {
            listener.exitMem_addr_pm_ic_int(this);
        }
    };
    // @Override
    Mem_addr_pm_ic_intContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_pm_ic_int) {
            return visitor.visitMem_addr_pm_ic_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_pm_ic_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_pm_ic_intContext = Mem_addr_pm_ic_intContext;
var Mem_addr_dm_int_iaContext = /** @class */ (function (_super) {
    __extends(Mem_addr_dm_int_iaContext, _super);
    function Mem_addr_dm_int_iaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_dm_int_iaContext.prototype.DM = function () { return this.getToken(SHARCParser.DM, 0); };
    Mem_addr_dm_int_iaContext.prototype.mem_addr_int_ia = function () {
        return this.getRuleContext(0, Mem_addr_int_iaContext);
    };
    Object.defineProperty(Mem_addr_dm_int_iaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_dm_int_ia; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_dm_int_iaContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_dm_int_ia) {
            listener.enterMem_addr_dm_int_ia(this);
        }
    };
    // @Override
    Mem_addr_dm_int_iaContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_dm_int_ia) {
            listener.exitMem_addr_dm_int_ia(this);
        }
    };
    // @Override
    Mem_addr_dm_int_iaContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_dm_int_ia) {
            return visitor.visitMem_addr_dm_int_ia(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_dm_int_iaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_dm_int_iaContext = Mem_addr_dm_int_iaContext;
var Mem_addr_pm_int_icContext = /** @class */ (function (_super) {
    __extends(Mem_addr_pm_int_icContext, _super);
    function Mem_addr_pm_int_icContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_pm_int_icContext.prototype.PM = function () { return this.getToken(SHARCParser.PM, 0); };
    Mem_addr_pm_int_icContext.prototype.mem_addr_int_ic = function () {
        return this.getRuleContext(0, Mem_addr_int_icContext);
    };
    Object.defineProperty(Mem_addr_pm_int_icContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_pm_int_ic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_pm_int_icContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_pm_int_ic) {
            listener.enterMem_addr_pm_int_ic(this);
        }
    };
    // @Override
    Mem_addr_pm_int_icContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_pm_int_ic) {
            listener.exitMem_addr_pm_int_ic(this);
        }
    };
    // @Override
    Mem_addr_pm_int_icContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_pm_int_ic) {
            return visitor.visitMem_addr_pm_int_ic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_pm_int_icContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_pm_int_icContext = Mem_addr_pm_int_icContext;
var Mem_addr_dm_intContext = /** @class */ (function (_super) {
    __extends(Mem_addr_dm_intContext, _super);
    function Mem_addr_dm_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_dm_intContext.prototype.DM = function () { return this.getToken(SHARCParser.DM, 0); };
    Mem_addr_dm_intContext.prototype.mem_addr_int = function () {
        return this.getRuleContext(0, Mem_addr_intContext);
    };
    Object.defineProperty(Mem_addr_dm_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_dm_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_dm_intContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_dm_int) {
            listener.enterMem_addr_dm_int(this);
        }
    };
    // @Override
    Mem_addr_dm_intContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_dm_int) {
            listener.exitMem_addr_dm_int(this);
        }
    };
    // @Override
    Mem_addr_dm_intContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_dm_int) {
            return visitor.visitMem_addr_dm_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_dm_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_dm_intContext = Mem_addr_dm_intContext;
var Mem_addr_pm_intContext = /** @class */ (function (_super) {
    __extends(Mem_addr_pm_intContext, _super);
    function Mem_addr_pm_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mem_addr_pm_intContext.prototype.PM = function () { return this.getToken(SHARCParser.PM, 0); };
    Mem_addr_pm_intContext.prototype.mem_addr_int = function () {
        return this.getRuleContext(0, Mem_addr_intContext);
    };
    Object.defineProperty(Mem_addr_pm_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mem_addr_pm_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mem_addr_pm_intContext.prototype.enterRule = function (listener) {
        if (listener.enterMem_addr_pm_int) {
            listener.enterMem_addr_pm_int(this);
        }
    };
    // @Override
    Mem_addr_pm_intContext.prototype.exitRule = function (listener) {
        if (listener.exitMem_addr_pm_int) {
            listener.exitMem_addr_pm_int(this);
        }
    };
    // @Override
    Mem_addr_pm_intContext.prototype.accept = function (visitor) {
        if (visitor.visitMem_addr_pm_int) {
            return visitor.visitMem_addr_pm_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mem_addr_pm_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mem_addr_pm_intContext = Mem_addr_pm_intContext;
var Fixpoint_alu_opContext = /** @class */ (function (_super) {
    __extends(Fixpoint_alu_opContext, _super);
    function Fixpoint_alu_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fixpoint_alu_opContext.prototype.r_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(R_regContext);
        }
        else {
            return this.getRuleContext(i, R_regContext);
        }
    };
    Fixpoint_alu_opContext.prototype.EQU = function () { return this.tryGetToken(SHARCParser.EQU, 0); };
    Fixpoint_alu_opContext.prototype.r_exp = function () {
        return this.tryGetRuleContext(0, R_expContext);
    };
    Fixpoint_alu_opContext.prototype.COMP = function () { return this.tryGetToken(SHARCParser.COMP, 0); };
    Fixpoint_alu_opContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    Fixpoint_alu_opContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Fixpoint_alu_opContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Fixpoint_alu_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_fixpoint_alu_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fixpoint_alu_opContext.prototype.enterRule = function (listener) {
        if (listener.enterFixpoint_alu_op) {
            listener.enterFixpoint_alu_op(this);
        }
    };
    // @Override
    Fixpoint_alu_opContext.prototype.exitRule = function (listener) {
        if (listener.exitFixpoint_alu_op) {
            listener.exitFixpoint_alu_op(this);
        }
    };
    // @Override
    Fixpoint_alu_opContext.prototype.accept = function (visitor) {
        if (visitor.visitFixpoint_alu_op) {
            return visitor.visitFixpoint_alu_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fixpoint_alu_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fixpoint_alu_opContext = Fixpoint_alu_opContext;
var R_expContext = /** @class */ (function (_super) {
    __extends(R_expContext, _super);
    function R_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    R_expContext.prototype.r_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(R_regContext);
        }
        else {
            return this.getRuleContext(i, R_regContext);
        }
    };
    R_expContext.prototype.add_or_sub = function () {
        return this.tryGetRuleContext(0, Add_or_subContext);
    };
    R_expContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.PLUS);
        }
        else {
            return this.getToken(SHARCParser.PLUS, i);
        }
    };
    R_expContext.prototype.CI = function () { return this.tryGetToken(SHARCParser.CI, 0); };
    R_expContext.prototype.MINUS = function () { return this.tryGetToken(SHARCParser.MINUS, 0); };
    R_expContext.prototype.INT = function () { return this.tryGetToken(SHARCParser.INT, 0); };
    R_expContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    R_expContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    R_expContext.prototype.DIV = function () { return this.tryGetToken(SHARCParser.DIV, 0); };
    R_expContext.prototype.ABS = function () { return this.tryGetToken(SHARCParser.ABS, 0); };
    R_expContext.prototype.PASS = function () { return this.tryGetToken(SHARCParser.PASS, 0); };
    R_expContext.prototype.AND = function () { return this.tryGetToken(SHARCParser.AND, 0); };
    R_expContext.prototype.OR = function () { return this.tryGetToken(SHARCParser.OR, 0); };
    R_expContext.prototype.XOR = function () { return this.tryGetToken(SHARCParser.XOR, 0); };
    R_expContext.prototype.NOT = function () { return this.tryGetToken(SHARCParser.NOT, 0); };
    R_expContext.prototype.MIN = function () { return this.tryGetToken(SHARCParser.MIN, 0); };
    R_expContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    R_expContext.prototype.MAX = function () { return this.tryGetToken(SHARCParser.MAX, 0); };
    R_expContext.prototype.CLIP = function () { return this.tryGetToken(SHARCParser.CLIP, 0); };
    R_expContext.prototype.BY = function () { return this.tryGetToken(SHARCParser.BY, 0); };
    R_expContext.prototype.MANT = function () { return this.tryGetToken(SHARCParser.MANT, 0); };
    R_expContext.prototype.f_reg = function () {
        return this.tryGetRuleContext(0, F_regContext);
    };
    R_expContext.prototype.LOGB = function () { return this.tryGetToken(SHARCParser.LOGB, 0); };
    R_expContext.prototype.FIX = function () { return this.tryGetToken(SHARCParser.FIX, 0); };
    R_expContext.prototype.TRUNC = function () { return this.tryGetToken(SHARCParser.TRUNC, 0); };
    Object.defineProperty(R_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_r_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    R_expContext.prototype.enterRule = function (listener) {
        if (listener.enterR_exp) {
            listener.enterR_exp(this);
        }
    };
    // @Override
    R_expContext.prototype.exitRule = function (listener) {
        if (listener.exitR_exp) {
            listener.exitR_exp(this);
        }
    };
    // @Override
    R_expContext.prototype.accept = function (visitor) {
        if (visitor.visitR_exp) {
            return visitor.visitR_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return R_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.R_expContext = R_expContext;
var Floating_point_alu_opContext = /** @class */ (function (_super) {
    __extends(Floating_point_alu_opContext, _super);
    function Floating_point_alu_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Floating_point_alu_opContext.prototype.f_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(F_regContext);
        }
        else {
            return this.getRuleContext(i, F_regContext);
        }
    };
    Floating_point_alu_opContext.prototype.EQU = function () { return this.tryGetToken(SHARCParser.EQU, 0); };
    Floating_point_alu_opContext.prototype.f_exp = function () {
        return this.tryGetRuleContext(0, F_expContext);
    };
    Floating_point_alu_opContext.prototype.COMP = function () { return this.tryGetToken(SHARCParser.COMP, 0); };
    Floating_point_alu_opContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    Floating_point_alu_opContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Floating_point_alu_opContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Floating_point_alu_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_floating_point_alu_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Floating_point_alu_opContext.prototype.enterRule = function (listener) {
        if (listener.enterFloating_point_alu_op) {
            listener.enterFloating_point_alu_op(this);
        }
    };
    // @Override
    Floating_point_alu_opContext.prototype.exitRule = function (listener) {
        if (listener.exitFloating_point_alu_op) {
            listener.exitFloating_point_alu_op(this);
        }
    };
    // @Override
    Floating_point_alu_opContext.prototype.accept = function (visitor) {
        if (visitor.visitFloating_point_alu_op) {
            return visitor.visitFloating_point_alu_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Floating_point_alu_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Floating_point_alu_opContext = Floating_point_alu_opContext;
var F_expContext = /** @class */ (function (_super) {
    __extends(F_expContext, _super);
    function F_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    F_expContext.prototype.f_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(F_regContext);
        }
        else {
            return this.getRuleContext(i, F_regContext);
        }
    };
    F_expContext.prototype.PLUS = function () { return this.tryGetToken(SHARCParser.PLUS, 0); };
    F_expContext.prototype.MINUS = function () { return this.tryGetToken(SHARCParser.MINUS, 0); };
    F_expContext.prototype.ABS = function () { return this.tryGetToken(SHARCParser.ABS, 0); };
    F_expContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    F_expContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    F_expContext.prototype.DIV = function () { return this.tryGetToken(SHARCParser.DIV, 0); };
    F_expContext.prototype.INT = function () { return this.tryGetToken(SHARCParser.INT, 0); };
    F_expContext.prototype.PASS = function () { return this.tryGetToken(SHARCParser.PASS, 0); };
    F_expContext.prototype.RND = function () { return this.tryGetToken(SHARCParser.RND, 0); };
    F_expContext.prototype.SCALB = function () { return this.tryGetToken(SHARCParser.SCALB, 0); };
    F_expContext.prototype.BY = function () { return this.tryGetToken(SHARCParser.BY, 0); };
    F_expContext.prototype.r_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(R_regContext);
        }
        else {
            return this.getRuleContext(i, R_regContext);
        }
    };
    F_expContext.prototype.FLOAT = function () { return this.tryGetToken(SHARCParser.FLOAT, 0); };
    F_expContext.prototype.RECIPS = function () { return this.tryGetToken(SHARCParser.RECIPS, 0); };
    F_expContext.prototype.RSQRTS = function () { return this.tryGetToken(SHARCParser.RSQRTS, 0); };
    F_expContext.prototype.COPYSIGN = function () { return this.tryGetToken(SHARCParser.COPYSIGN, 0); };
    F_expContext.prototype.MIN = function () { return this.tryGetToken(SHARCParser.MIN, 0); };
    F_expContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    F_expContext.prototype.MAX = function () { return this.tryGetToken(SHARCParser.MAX, 0); };
    F_expContext.prototype.CLIP = function () { return this.tryGetToken(SHARCParser.CLIP, 0); };
    F_expContext.prototype.MULT = function () { return this.tryGetToken(SHARCParser.MULT, 0); };
    Object.defineProperty(F_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_f_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    F_expContext.prototype.enterRule = function (listener) {
        if (listener.enterF_exp) {
            listener.enterF_exp(this);
        }
    };
    // @Override
    F_expContext.prototype.exitRule = function (listener) {
        if (listener.exitF_exp) {
            listener.exitF_exp(this);
        }
    };
    // @Override
    F_expContext.prototype.accept = function (visitor) {
        if (visitor.visitF_exp) {
            return visitor.visitF_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return F_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.F_expContext = F_expContext;
var Multi_opContext = /** @class */ (function (_super) {
    __extends(Multi_opContext, _super);
    function Multi_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_opContext.prototype.r_reg = function () {
        return this.tryGetRuleContext(0, R_regContext);
    };
    Multi_opContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Multi_opContext.prototype.multi_exp_r = function () {
        return this.tryGetRuleContext(0, Multi_exp_rContext);
    };
    Multi_opContext.prototype.MRF = function () { return this.tryGetToken(SHARCParser.MRF, 0); };
    Multi_opContext.prototype.multi_exp_mrf = function () {
        return this.tryGetRuleContext(0, Multi_exp_mrfContext);
    };
    Multi_opContext.prototype.MRB = function () { return this.tryGetToken(SHARCParser.MRB, 0); };
    Multi_opContext.prototype.multi_exp_mrb = function () {
        return this.tryGetRuleContext(0, Multi_exp_mrbContext);
    };
    Multi_opContext.prototype.mr = function () {
        return this.tryGetRuleContext(0, MrContext);
    };
    Multi_opContext.prototype.INT = function () { return this.tryGetToken(SHARCParser.INT, 0); };
    Multi_opContext.prototype.mrf = function () {
        return this.tryGetRuleContext(0, MrfContext);
    };
    Multi_opContext.prototype.mrb = function () {
        return this.tryGetRuleContext(0, MrbContext);
    };
    Object.defineProperty(Multi_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_opContext.prototype.enterRule = function (listener) {
        if (listener.enterMulti_op) {
            listener.enterMulti_op(this);
        }
    };
    // @Override
    Multi_opContext.prototype.exitRule = function (listener) {
        if (listener.exitMulti_op) {
            listener.exitMulti_op(this);
        }
    };
    // @Override
    Multi_opContext.prototype.accept = function (visitor) {
        if (visitor.visitMulti_op) {
            return visitor.visitMulti_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_opContext = Multi_opContext;
var Multi_rContext = /** @class */ (function (_super) {
    __extends(Multi_rContext, _super);
    function Multi_rContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_rContext.prototype.r_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(R_regContext);
        }
        else {
            return this.getRuleContext(i, R_regContext);
        }
    };
    Multi_rContext.prototype.MULT = function () { return this.getToken(SHARCParser.MULT, 0); };
    Multi_rContext.prototype.multi_mod2 = function () {
        return this.tryGetRuleContext(0, Multi_mod2Context);
    };
    Object.defineProperty(Multi_rContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_r; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_rContext.prototype.enterRule = function (listener) {
        if (listener.enterMulti_r) {
            listener.enterMulti_r(this);
        }
    };
    // @Override
    Multi_rContext.prototype.exitRule = function (listener) {
        if (listener.exitMulti_r) {
            listener.exitMulti_r(this);
        }
    };
    // @Override
    Multi_rContext.prototype.accept = function (visitor) {
        if (visitor.visitMulti_r) {
            return visitor.visitMulti_r(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_rContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_rContext = Multi_rContext;
var Multi_exp_rContext = /** @class */ (function (_super) {
    __extends(Multi_exp_rContext, _super);
    function Multi_exp_rContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_exp_rContext.prototype.multi_r = function () {
        return this.tryGetRuleContext(0, Multi_rContext);
    };
    Multi_exp_rContext.prototype.mr = function () {
        return this.tryGetRuleContext(0, MrContext);
    };
    Multi_exp_rContext.prototype.add_or_sub = function () {
        return this.tryGetRuleContext(0, Add_or_subContext);
    };
    Multi_exp_rContext.prototype.SAT = function () { return this.tryGetToken(SHARCParser.SAT, 0); };
    Multi_exp_rContext.prototype.multi_mod1 = function () {
        return this.tryGetRuleContext(0, Multi_mod1Context);
    };
    Multi_exp_rContext.prototype.RND = function () { return this.tryGetToken(SHARCParser.RND, 0); };
    Object.defineProperty(Multi_exp_rContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_exp_r; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_exp_rContext.prototype.enterRule = function (listener) {
        if (listener.enterMulti_exp_r) {
            listener.enterMulti_exp_r(this);
        }
    };
    // @Override
    Multi_exp_rContext.prototype.exitRule = function (listener) {
        if (listener.exitMulti_exp_r) {
            listener.exitMulti_exp_r(this);
        }
    };
    // @Override
    Multi_exp_rContext.prototype.accept = function (visitor) {
        if (visitor.visitMulti_exp_r) {
            return visitor.visitMulti_exp_r(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_exp_rContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_exp_rContext = Multi_exp_rContext;
var Multi_exp_mrfContext = /** @class */ (function (_super) {
    __extends(Multi_exp_mrfContext, _super);
    function Multi_exp_mrfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_exp_mrfContext.prototype.multi_r = function () {
        return this.tryGetRuleContext(0, Multi_rContext);
    };
    Multi_exp_mrfContext.prototype.MRF = function () { return this.tryGetToken(SHARCParser.MRF, 0); };
    Multi_exp_mrfContext.prototype.add_or_sub = function () {
        return this.tryGetRuleContext(0, Add_or_subContext);
    };
    Multi_exp_mrfContext.prototype.SAT = function () { return this.tryGetToken(SHARCParser.SAT, 0); };
    Multi_exp_mrfContext.prototype.multi_mod1 = function () {
        return this.tryGetRuleContext(0, Multi_mod1Context);
    };
    Multi_exp_mrfContext.prototype.RND = function () { return this.tryGetToken(SHARCParser.RND, 0); };
    Object.defineProperty(Multi_exp_mrfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_exp_mrf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_exp_mrfContext.prototype.enterRule = function (listener) {
        if (listener.enterMulti_exp_mrf) {
            listener.enterMulti_exp_mrf(this);
        }
    };
    // @Override
    Multi_exp_mrfContext.prototype.exitRule = function (listener) {
        if (listener.exitMulti_exp_mrf) {
            listener.exitMulti_exp_mrf(this);
        }
    };
    // @Override
    Multi_exp_mrfContext.prototype.accept = function (visitor) {
        if (visitor.visitMulti_exp_mrf) {
            return visitor.visitMulti_exp_mrf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_exp_mrfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_exp_mrfContext = Multi_exp_mrfContext;
var Multi_exp_mrbContext = /** @class */ (function (_super) {
    __extends(Multi_exp_mrbContext, _super);
    function Multi_exp_mrbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_exp_mrbContext.prototype.multi_r = function () {
        return this.tryGetRuleContext(0, Multi_rContext);
    };
    Multi_exp_mrbContext.prototype.MRB = function () { return this.tryGetToken(SHARCParser.MRB, 0); };
    Multi_exp_mrbContext.prototype.add_or_sub = function () {
        return this.tryGetRuleContext(0, Add_or_subContext);
    };
    Multi_exp_mrbContext.prototype.SAT = function () { return this.tryGetToken(SHARCParser.SAT, 0); };
    Multi_exp_mrbContext.prototype.multi_mod1 = function () {
        return this.tryGetRuleContext(0, Multi_mod1Context);
    };
    Multi_exp_mrbContext.prototype.RND = function () { return this.tryGetToken(SHARCParser.RND, 0); };
    Object.defineProperty(Multi_exp_mrbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_exp_mrb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_exp_mrbContext.prototype.enterRule = function (listener) {
        if (listener.enterMulti_exp_mrb) {
            listener.enterMulti_exp_mrb(this);
        }
    };
    // @Override
    Multi_exp_mrbContext.prototype.exitRule = function (listener) {
        if (listener.exitMulti_exp_mrb) {
            listener.exitMulti_exp_mrb(this);
        }
    };
    // @Override
    Multi_exp_mrbContext.prototype.accept = function (visitor) {
        if (visitor.visitMulti_exp_mrb) {
            return visitor.visitMulti_exp_mrb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_exp_mrbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_exp_mrbContext = Multi_exp_mrbContext;
var MrContext = /** @class */ (function (_super) {
    __extends(MrContext, _super);
    function MrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MrContext.prototype.MRB = function () { return this.tryGetToken(SHARCParser.MRB, 0); };
    MrContext.prototype.MRF = function () { return this.tryGetToken(SHARCParser.MRF, 0); };
    Object.defineProperty(MrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MrContext.prototype.enterRule = function (listener) {
        if (listener.enterMr) {
            listener.enterMr(this);
        }
    };
    // @Override
    MrContext.prototype.exitRule = function (listener) {
        if (listener.exitMr) {
            listener.exitMr(this);
        }
    };
    // @Override
    MrContext.prototype.accept = function (visitor) {
        if (visitor.visitMr) {
            return visitor.visitMr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MrContext = MrContext;
var Shifter_opContext = /** @class */ (function (_super) {
    __extends(Shifter_opContext, _super);
    function Shifter_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Shifter_opContext.prototype.r_reg = function () {
        return this.getRuleContext(0, R_regContext);
    };
    Shifter_opContext.prototype.EQU = function () { return this.tryGetToken(SHARCParser.EQU, 0); };
    Shifter_opContext.prototype.shifter_exp = function () {
        return this.tryGetRuleContext(0, Shifter_expContext);
    };
    Shifter_opContext.prototype.BTST = function () { return this.tryGetToken(SHARCParser.BTST, 0); };
    Shifter_opContext.prototype.BY = function () { return this.tryGetToken(SHARCParser.BY, 0); };
    Shifter_opContext.prototype.sec_op = function () {
        return this.tryGetRuleContext(0, Sec_opContext);
    };
    Shifter_opContext.prototype.f_reg = function () {
        return this.tryGetRuleContext(0, F_regContext);
    };
    Shifter_opContext.prototype.FUNPACK = function () { return this.tryGetToken(SHARCParser.FUNPACK, 0); };
    Object.defineProperty(Shifter_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_shifter_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Shifter_opContext.prototype.enterRule = function (listener) {
        if (listener.enterShifter_op) {
            listener.enterShifter_op(this);
        }
    };
    // @Override
    Shifter_opContext.prototype.exitRule = function (listener) {
        if (listener.exitShifter_op) {
            listener.exitShifter_op(this);
        }
    };
    // @Override
    Shifter_opContext.prototype.accept = function (visitor) {
        if (visitor.visitShifter_op) {
            return visitor.visitShifter_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Shifter_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Shifter_opContext = Shifter_opContext;
var Shifter_expContext = /** @class */ (function (_super) {
    __extends(Shifter_expContext, _super);
    function Shifter_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Shifter_expContext.prototype.LSHIFT = function () { return this.tryGetToken(SHARCParser.LSHIFT, 0); };
    Shifter_expContext.prototype.r_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(R_regContext);
        }
        else {
            return this.getRuleContext(i, R_regContext);
        }
    };
    Shifter_expContext.prototype.BY = function () { return this.tryGetToken(SHARCParser.BY, 0); };
    Shifter_expContext.prototype.sec_op = function () {
        return this.tryGetRuleContext(0, Sec_opContext);
    };
    Shifter_expContext.prototype.OR = function () { return this.tryGetToken(SHARCParser.OR, 0); };
    Shifter_expContext.prototype.ASHIFT = function () { return this.tryGetToken(SHARCParser.ASHIFT, 0); };
    Shifter_expContext.prototype.ROT = function () { return this.tryGetToken(SHARCParser.ROT, 0); };
    Shifter_expContext.prototype.BCLR = function () { return this.tryGetToken(SHARCParser.BCLR, 0); };
    Shifter_expContext.prototype.BSET = function () { return this.tryGetToken(SHARCParser.BSET, 0); };
    Shifter_expContext.prototype.BTGL = function () { return this.tryGetToken(SHARCParser.BTGL, 0); };
    Shifter_expContext.prototype.FDEP = function () { return this.tryGetToken(SHARCParser.FDEP, 0); };
    Shifter_expContext.prototype.sec_op2 = function () {
        return this.tryGetRuleContext(0, Sec_op2Context);
    };
    Shifter_expContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    Shifter_expContext.prototype.SE = function () { return this.tryGetToken(SHARCParser.SE, 0); };
    Shifter_expContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    Shifter_expContext.prototype.FEXT = function () { return this.tryGetToken(SHARCParser.FEXT, 0); };
    Shifter_expContext.prototype.EXP = function () { return this.tryGetToken(SHARCParser.EXP, 0); };
    Shifter_expContext.prototype.EX = function () { return this.tryGetToken(SHARCParser.EX, 0); };
    Shifter_expContext.prototype.LEFTZ = function () { return this.tryGetToken(SHARCParser.LEFTZ, 0); };
    Shifter_expContext.prototype.LEFTO = function () { return this.tryGetToken(SHARCParser.LEFTO, 0); };
    Shifter_expContext.prototype.FPACK = function () { return this.tryGetToken(SHARCParser.FPACK, 0); };
    Shifter_expContext.prototype.f_reg = function () {
        return this.tryGetRuleContext(0, F_regContext);
    };
    Object.defineProperty(Shifter_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_shifter_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Shifter_expContext.prototype.enterRule = function (listener) {
        if (listener.enterShifter_exp) {
            listener.enterShifter_exp(this);
        }
    };
    // @Override
    Shifter_expContext.prototype.exitRule = function (listener) {
        if (listener.exitShifter_exp) {
            listener.exitShifter_exp(this);
        }
    };
    // @Override
    Shifter_expContext.prototype.accept = function (visitor) {
        if (visitor.visitShifter_exp) {
            return visitor.visitShifter_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Shifter_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Shifter_expContext = Shifter_expContext;
var Sec_opContext = /** @class */ (function (_super) {
    __extends(Sec_opContext, _super);
    function Sec_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sec_opContext.prototype.r_reg = function () {
        return this.tryGetRuleContext(0, R_regContext);
    };
    Sec_opContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Sec_opContext.prototype.MINUS = function () { return this.tryGetToken(SHARCParser.MINUS, 0); };
    Object.defineProperty(Sec_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_sec_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sec_opContext.prototype.enterRule = function (listener) {
        if (listener.enterSec_op) {
            listener.enterSec_op(this);
        }
    };
    // @Override
    Sec_opContext.prototype.exitRule = function (listener) {
        if (listener.exitSec_op) {
            listener.exitSec_op(this);
        }
    };
    // @Override
    Sec_opContext.prototype.accept = function (visitor) {
        if (visitor.visitSec_op) {
            return visitor.visitSec_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sec_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sec_opContext = Sec_opContext;
var Sec_op2Context = /** @class */ (function (_super) {
    __extends(Sec_op2Context, _super);
    function Sec_op2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sec_op2Context.prototype.r_reg = function () {
        return this.tryGetRuleContext(0, R_regContext);
    };
    Sec_op2Context.prototype.bit_data = function () {
        return this.tryGetRuleContext(0, Bit_dataContext);
    };
    Object.defineProperty(Sec_op2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_sec_op2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sec_op2Context.prototype.enterRule = function (listener) {
        if (listener.enterSec_op2) {
            listener.enterSec_op2(this);
        }
    };
    // @Override
    Sec_op2Context.prototype.exitRule = function (listener) {
        if (listener.exitSec_op2) {
            listener.exitSec_op2(this);
        }
    };
    // @Override
    Sec_op2Context.prototype.accept = function (visitor) {
        if (visitor.visitSec_op2) {
            return visitor.visitSec_op2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sec_op2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sec_op2Context = Sec_op2Context;
var Bit_dataContext = /** @class */ (function (_super) {
    __extends(Bit_dataContext, _super);
    function Bit_dataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bit_dataContext.prototype.INT = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.INT);
        }
        else {
            return this.getToken(SHARCParser.INT, i);
        }
    };
    Bit_dataContext.prototype.COLON = function () { return this.getToken(SHARCParser.COLON, 0); };
    Object.defineProperty(Bit_dataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_bit_data; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bit_dataContext.prototype.enterRule = function (listener) {
        if (listener.enterBit_data) {
            listener.enterBit_data(this);
        }
    };
    // @Override
    Bit_dataContext.prototype.exitRule = function (listener) {
        if (listener.exitBit_data) {
            listener.exitBit_data(this);
        }
    };
    // @Override
    Bit_dataContext.prototype.accept = function (visitor) {
        if (visitor.visitBit_data) {
            return visitor.visitBit_data(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bit_dataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bit_dataContext = Bit_dataContext;
var Add_or_subContext = /** @class */ (function (_super) {
    __extends(Add_or_subContext, _super);
    function Add_or_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Add_or_subContext.prototype.PLUS = function () { return this.tryGetToken(SHARCParser.PLUS, 0); };
    Add_or_subContext.prototype.MINUS = function () { return this.tryGetToken(SHARCParser.MINUS, 0); };
    Object.defineProperty(Add_or_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_add_or_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Add_or_subContext.prototype.enterRule = function (listener) {
        if (listener.enterAdd_or_sub) {
            listener.enterAdd_or_sub(this);
        }
    };
    // @Override
    Add_or_subContext.prototype.exitRule = function (listener) {
        if (listener.exitAdd_or_sub) {
            listener.exitAdd_or_sub(this);
        }
    };
    // @Override
    Add_or_subContext.prototype.accept = function (visitor) {
        if (visitor.visitAdd_or_sub) {
            return visitor.visitAdd_or_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Add_or_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Add_or_subContext = Add_or_subContext;
var Dual_opContext = /** @class */ (function (_super) {
    __extends(Dual_opContext, _super);
    function Dual_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dual_opContext.prototype.dual_add_r = function () {
        return this.tryGetRuleContext(0, Dual_add_rContext);
    };
    Dual_opContext.prototype.parallel_multi = function () {
        return this.tryGetRuleContext(0, Parallel_multiContext);
    };
    Object.defineProperty(Dual_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_dual_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dual_opContext.prototype.enterRule = function (listener) {
        if (listener.enterDual_op) {
            listener.enterDual_op(this);
        }
    };
    // @Override
    Dual_opContext.prototype.exitRule = function (listener) {
        if (listener.exitDual_op) {
            listener.exitDual_op(this);
        }
    };
    // @Override
    Dual_opContext.prototype.accept = function (visitor) {
        if (visitor.visitDual_op) {
            return visitor.visitDual_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dual_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dual_opContext = Dual_opContext;
var Dual_add_rContext = /** @class */ (function (_super) {
    __extends(Dual_add_rContext, _super);
    function Dual_add_rContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dual_add_rContext.prototype.r_reg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(R_regContext);
        }
        else {
            return this.getRuleContext(i, R_regContext);
        }
    };
    Dual_add_rContext.prototype.EQU = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.EQU);
        }
        else {
            return this.getToken(SHARCParser.EQU, i);
        }
    };
    Dual_add_rContext.prototype.PLUS = function () { return this.getToken(SHARCParser.PLUS, 0); };
    Dual_add_rContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Dual_add_rContext.prototype.MINUS = function () { return this.getToken(SHARCParser.MINUS, 0); };
    Object.defineProperty(Dual_add_rContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_dual_add_r; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dual_add_rContext.prototype.enterRule = function (listener) {
        if (listener.enterDual_add_r) {
            listener.enterDual_add_r(this);
        }
    };
    // @Override
    Dual_add_rContext.prototype.exitRule = function (listener) {
        if (listener.exitDual_add_r) {
            listener.exitDual_add_r(this);
        }
    };
    // @Override
    Dual_add_rContext.prototype.accept = function (visitor) {
        if (visitor.visitDual_add_r) {
            return visitor.visitDual_add_r(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dual_add_rContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dual_add_rContext = Dual_add_rContext;
var Parallel_multiContext = /** @class */ (function (_super) {
    __extends(Parallel_multiContext, _super);
    function Parallel_multiContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parallel_multiContext.prototype.multi_op = function () {
        return this.tryGetRuleContext(0, Multi_opContext);
    };
    Parallel_multiContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COMMA);
        }
        else {
            return this.getToken(SHARCParser.COMMA, i);
        }
    };
    Parallel_multiContext.prototype.fixpoint_alu_op = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Fixpoint_alu_opContext);
        }
        else {
            return this.getRuleContext(i, Fixpoint_alu_opContext);
        }
    };
    Parallel_multiContext.prototype.floating_point_alu_op = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Floating_point_alu_opContext);
        }
        else {
            return this.getRuleContext(i, Floating_point_alu_opContext);
        }
    };
    Object.defineProperty(Parallel_multiContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_parallel_multi; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parallel_multiContext.prototype.enterRule = function (listener) {
        if (listener.enterParallel_multi) {
            listener.enterParallel_multi(this);
        }
    };
    // @Override
    Parallel_multiContext.prototype.exitRule = function (listener) {
        if (listener.exitParallel_multi) {
            listener.exitParallel_multi(this);
        }
    };
    // @Override
    Parallel_multiContext.prototype.accept = function (visitor) {
        if (visitor.visitParallel_multi) {
            return visitor.visitParallel_multi(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parallel_multiContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parallel_multiContext = Parallel_multiContext;
var Flow_control_expContext = /** @class */ (function (_super) {
    __extends(Flow_control_expContext, _super);
    function Flow_control_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_expContext.prototype.flow_contorl_8 = function () {
        return this.tryGetRuleContext(0, Flow_contorl_8Context);
    };
    Flow_control_expContext.prototype.flow_control_9_and_11 = function () {
        return this.tryGetRuleContext(0, Flow_control_9_and_11Context);
    };
    Flow_control_expContext.prototype.flow_control_10 = function () {
        return this.tryGetRuleContext(0, Flow_control_10Context);
    };
    Flow_control_expContext.prototype.flow_control_8a = function () {
        return this.tryGetRuleContext(0, Flow_control_8aContext);
    };
    Flow_control_expContext.prototype.flow_control_8b = function () {
        return this.tryGetRuleContext(0, Flow_control_8bContext);
    };
    Flow_control_expContext.prototype.flow_control_9a = function () {
        return this.tryGetRuleContext(0, Flow_control_9aContext);
    };
    Flow_control_expContext.prototype.flow_control_9b = function () {
        return this.tryGetRuleContext(0, Flow_control_9bContext);
    };
    Flow_control_expContext.prototype.flow_control_11a = function () {
        return this.tryGetRuleContext(0, Flow_control_11aContext);
    };
    Flow_control_expContext.prototype.flow_control_11b = function () {
        return this.tryGetRuleContext(0, Flow_control_11bContext);
    };
    Flow_control_expContext.prototype.flow_control_12 = function () {
        return this.tryGetRuleContext(0, Flow_control_12Context);
    };
    Flow_control_expContext.prototype.flow_control_13 = function () {
        return this.tryGetRuleContext(0, Flow_control_13Context);
    };
    Object.defineProperty(Flow_control_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_expContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_exp) {
            listener.enterFlow_control_exp(this);
        }
    };
    // @Override
    Flow_control_expContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_exp) {
            listener.exitFlow_control_exp(this);
        }
    };
    // @Override
    Flow_control_expContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_exp) {
            return visitor.visitFlow_control_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_expContext = Flow_control_expContext;
var Flow_contorl_8Context = /** @class */ (function (_super) {
    __extends(Flow_contorl_8Context, _super);
    function Flow_contorl_8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_contorl_8Context.prototype.IF = function () { return this.getToken(SHARCParser.IF, 0); };
    Flow_contorl_8Context.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    Flow_contorl_8Context.prototype.flow_contorl_8_exp = function () {
        return this.getRuleContext(0, Flow_contorl_8_expContext);
    };
    Object.defineProperty(Flow_contorl_8Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_contorl_8; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_contorl_8Context.prototype.enterRule = function (listener) {
        if (listener.enterFlow_contorl_8) {
            listener.enterFlow_contorl_8(this);
        }
    };
    // @Override
    Flow_contorl_8Context.prototype.exitRule = function (listener) {
        if (listener.exitFlow_contorl_8) {
            listener.exitFlow_contorl_8(this);
        }
    };
    // @Override
    Flow_contorl_8Context.prototype.accept = function (visitor) {
        if (visitor.visitFlow_contorl_8) {
            return visitor.visitFlow_contorl_8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_contorl_8Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_contorl_8Context = Flow_contorl_8Context;
var Flow_contorl_8_expContext = /** @class */ (function (_super) {
    __extends(Flow_contorl_8_expContext, _super);
    function Flow_contorl_8_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_contorl_8_expContext.prototype.flow_control_8a = function () {
        return this.tryGetRuleContext(0, Flow_control_8aContext);
    };
    Flow_contorl_8_expContext.prototype.flow_control_8b = function () {
        return this.tryGetRuleContext(0, Flow_control_8bContext);
    };
    Object.defineProperty(Flow_contorl_8_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_contorl_8_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_contorl_8_expContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_contorl_8_exp) {
            listener.enterFlow_contorl_8_exp(this);
        }
    };
    // @Override
    Flow_contorl_8_expContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_contorl_8_exp) {
            listener.exitFlow_contorl_8_exp(this);
        }
    };
    // @Override
    Flow_contorl_8_expContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_contorl_8_exp) {
            return visitor.visitFlow_contorl_8_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_contorl_8_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_contorl_8_expContext = Flow_contorl_8_expContext;
var Flow_control_9_and_11Context = /** @class */ (function (_super) {
    __extends(Flow_control_9_and_11Context, _super);
    function Flow_control_9_and_11Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_9_and_11Context.prototype.IF = function () { return this.getToken(SHARCParser.IF, 0); };
    Flow_control_9_and_11Context.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    Flow_control_9_and_11Context.prototype.flow_control_9_and_11_exp = function () {
        return this.getRuleContext(0, Flow_control_9_and_11_expContext);
    };
    Flow_control_9_and_11Context.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Flow_control_9_and_11Context.prototype.ELSE = function () { return this.getToken(SHARCParser.ELSE, 0); };
    Flow_control_9_and_11Context.prototype.compute = function () {
        return this.getRuleContext(0, ComputeContext);
    };
    Object.defineProperty(Flow_control_9_and_11Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_9_and_11; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_9_and_11Context.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_9_and_11) {
            listener.enterFlow_control_9_and_11(this);
        }
    };
    // @Override
    Flow_control_9_and_11Context.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_9_and_11) {
            listener.exitFlow_control_9_and_11(this);
        }
    };
    // @Override
    Flow_control_9_and_11Context.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_9_and_11) {
            return visitor.visitFlow_control_9_and_11(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_9_and_11Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_9_and_11Context = Flow_control_9_and_11Context;
var Flow_control_9_and_11_expContext = /** @class */ (function (_super) {
    __extends(Flow_control_9_and_11_expContext, _super);
    function Flow_control_9_and_11_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_9_and_11_expContext.prototype.flow_control_9a = function () {
        return this.tryGetRuleContext(0, Flow_control_9aContext);
    };
    Flow_control_9_and_11_expContext.prototype.flow_control_9b = function () {
        return this.tryGetRuleContext(0, Flow_control_9bContext);
    };
    Flow_control_9_and_11_expContext.prototype.flow_control_11a = function () {
        return this.tryGetRuleContext(0, Flow_control_11aContext);
    };
    Flow_control_9_and_11_expContext.prototype.flow_control_11b = function () {
        return this.tryGetRuleContext(0, Flow_control_11bContext);
    };
    Object.defineProperty(Flow_control_9_and_11_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_9_and_11_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_9_and_11_expContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_9_and_11_exp) {
            listener.enterFlow_control_9_and_11_exp(this);
        }
    };
    // @Override
    Flow_control_9_and_11_expContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_9_and_11_exp) {
            listener.exitFlow_control_9_and_11_exp(this);
        }
    };
    // @Override
    Flow_control_9_and_11_expContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_9_and_11_exp) {
            return visitor.visitFlow_control_9_and_11_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_9_and_11_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_9_and_11_expContext = Flow_control_9_and_11_expContext;
var Flow_control_10Context = /** @class */ (function (_super) {
    __extends(Flow_control_10Context, _super);
    function Flow_control_10Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_10Context.prototype.IF = function () { return this.getToken(SHARCParser.IF, 0); };
    Flow_control_10Context.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    Flow_control_10Context.prototype.JUMP = function () { return this.getToken(SHARCParser.JUMP, 0); };
    Flow_control_10Context.prototype.flow_control_10_frag = function () {
        return this.getRuleContext(0, Flow_control_10_fragContext);
    };
    Flow_control_10Context.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COMMA);
        }
        else {
            return this.getToken(SHARCParser.COMMA, i);
        }
    };
    Flow_control_10Context.prototype.ELSE = function () { return this.getToken(SHARCParser.ELSE, 0); };
    Flow_control_10Context.prototype.mov_exp_1_1 = function () {
        return this.getRuleContext(0, Mov_exp_1_1Context);
    };
    Flow_control_10Context.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    Object.defineProperty(Flow_control_10Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_10; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_10Context.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_10) {
            listener.enterFlow_control_10(this);
        }
    };
    // @Override
    Flow_control_10Context.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_10) {
            listener.exitFlow_control_10(this);
        }
    };
    // @Override
    Flow_control_10Context.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_10) {
            return visitor.visitFlow_control_10(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_10Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_10Context = Flow_control_10Context;
var Flow_control_10_fragContext = /** @class */ (function (_super) {
    __extends(Flow_control_10_fragContext, _super);
    function Flow_control_10_fragContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_10_fragContext.prototype.mem_addr_md_ic = function () {
        return this.tryGetRuleContext(0, Mem_addr_md_icContext);
    };
    Flow_control_10_fragContext.prototype.jump_addr_pc = function () {
        return this.tryGetRuleContext(0, Jump_addr_pcContext);
    };
    Object.defineProperty(Flow_control_10_fragContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_10_frag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_10_fragContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_10_frag) {
            listener.enterFlow_control_10_frag(this);
        }
    };
    // @Override
    Flow_control_10_fragContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_10_frag) {
            listener.exitFlow_control_10_frag(this);
        }
    };
    // @Override
    Flow_control_10_fragContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_10_frag) {
            return visitor.visitFlow_control_10_frag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_10_fragContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_10_fragContext = Flow_control_10_fragContext;
var Flow_control_12Context = /** @class */ (function (_super) {
    __extends(Flow_control_12Context, _super);
    function Flow_control_12Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_12Context.prototype.LCNTR = function () { return this.getToken(SHARCParser.LCNTR, 0); };
    Flow_control_12Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Flow_control_12Context.prototype.lcntr_v = function () {
        return this.getRuleContext(0, Lcntr_vContext);
    };
    Flow_control_12Context.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Flow_control_12Context.prototype.DO = function () { return this.tryGetToken(SHARCParser.DO, 0); };
    Flow_control_12Context.prototype.jump_addr_int_or_pc = function () {
        return this.tryGetRuleContext(0, Jump_addr_int_or_pcContext);
    };
    Flow_control_12Context.prototype.UNTIL = function () { return this.tryGetToken(SHARCParser.UNTIL, 0); };
    Flow_control_12Context.prototype.LCE = function () { return this.tryGetToken(SHARCParser.LCE, 0); };
    Object.defineProperty(Flow_control_12Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_12; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_12Context.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_12) {
            listener.enterFlow_control_12(this);
        }
    };
    // @Override
    Flow_control_12Context.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_12) {
            listener.exitFlow_control_12(this);
        }
    };
    // @Override
    Flow_control_12Context.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_12) {
            return visitor.visitFlow_control_12(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_12Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_12Context = Flow_control_12Context;
var Lcntr_vContext = /** @class */ (function (_super) {
    __extends(Lcntr_vContext, _super);
    function Lcntr_vContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lcntr_vContext.prototype.value_exp = function () {
        return this.tryGetRuleContext(0, Value_expContext);
    };
    Lcntr_vContext.prototype.u_reg = function () {
        return this.tryGetRuleContext(0, U_regContext);
    };
    Object.defineProperty(Lcntr_vContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_lcntr_v; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lcntr_vContext.prototype.enterRule = function (listener) {
        if (listener.enterLcntr_v) {
            listener.enterLcntr_v(this);
        }
    };
    // @Override
    Lcntr_vContext.prototype.exitRule = function (listener) {
        if (listener.exitLcntr_v) {
            listener.exitLcntr_v(this);
        }
    };
    // @Override
    Lcntr_vContext.prototype.accept = function (visitor) {
        if (visitor.visitLcntr_v) {
            return visitor.visitLcntr_v(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lcntr_vContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lcntr_vContext = Lcntr_vContext;
var Flow_control_13Context = /** @class */ (function (_super) {
    __extends(Flow_control_13Context, _super);
    function Flow_control_13Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_13Context.prototype.DO = function () { return this.getToken(SHARCParser.DO, 0); };
    Flow_control_13Context.prototype.jump_addr_int_or_pc = function () {
        return this.getRuleContext(0, Jump_addr_int_or_pcContext);
    };
    Flow_control_13Context.prototype.UNTIL = function () { return this.getToken(SHARCParser.UNTIL, 0); };
    Flow_control_13Context.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    Object.defineProperty(Flow_control_13Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_13; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_13Context.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_13) {
            listener.enterFlow_control_13(this);
        }
    };
    // @Override
    Flow_control_13Context.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_13) {
            listener.exitFlow_control_13(this);
        }
    };
    // @Override
    Flow_control_13Context.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_13) {
            return visitor.visitFlow_control_13(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_13Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_13Context = Flow_control_13Context;
var Flow_control_8aContext = /** @class */ (function (_super) {
    __extends(Flow_control_8aContext, _super);
    function Flow_control_8aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_8aContext.prototype.JUMP = function () { return this.getToken(SHARCParser.JUMP, 0); };
    Flow_control_8aContext.prototype.jump_addr_int = function () {
        return this.getRuleContext(0, Jump_addr_intContext);
    };
    Flow_control_8aContext.prototype.jump_modifier = function () {
        return this.tryGetRuleContext(0, Jump_modifierContext);
    };
    Object.defineProperty(Flow_control_8aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_8a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_8aContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_8a) {
            listener.enterFlow_control_8a(this);
        }
    };
    // @Override
    Flow_control_8aContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_8a) {
            listener.exitFlow_control_8a(this);
        }
    };
    // @Override
    Flow_control_8aContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_8a) {
            return visitor.visitFlow_control_8a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_8aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_8aContext = Flow_control_8aContext;
var Flow_control_8bContext = /** @class */ (function (_super) {
    __extends(Flow_control_8bContext, _super);
    function Flow_control_8bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_8bContext.prototype.CALL = function () { return this.getToken(SHARCParser.CALL, 0); };
    Flow_control_8bContext.prototype.jump_addr_int = function () {
        return this.getRuleContext(0, Jump_addr_intContext);
    };
    Flow_control_8bContext.prototype.jump_modifier2 = function () {
        return this.tryGetRuleContext(0, Jump_modifier2Context);
    };
    Object.defineProperty(Flow_control_8bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_8b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_8bContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_8b) {
            listener.enterFlow_control_8b(this);
        }
    };
    // @Override
    Flow_control_8bContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_8b) {
            listener.exitFlow_control_8b(this);
        }
    };
    // @Override
    Flow_control_8bContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_8b) {
            return visitor.visitFlow_control_8b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_8bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_8bContext = Flow_control_8bContext;
var Flow_control_9aContext = /** @class */ (function (_super) {
    __extends(Flow_control_9aContext, _super);
    function Flow_control_9aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_9aContext.prototype.JUMP = function () { return this.getToken(SHARCParser.JUMP, 0); };
    Flow_control_9aContext.prototype.flow_control_10_frag = function () {
        return this.getRuleContext(0, Flow_control_10_fragContext);
    };
    Flow_control_9aContext.prototype.jump_modifier = function () {
        return this.tryGetRuleContext(0, Jump_modifierContext);
    };
    Flow_control_9aContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Flow_control_9aContext.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    Object.defineProperty(Flow_control_9aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_9a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_9aContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_9a) {
            listener.enterFlow_control_9a(this);
        }
    };
    // @Override
    Flow_control_9aContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_9a) {
            listener.exitFlow_control_9a(this);
        }
    };
    // @Override
    Flow_control_9aContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_9a) {
            return visitor.visitFlow_control_9a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_9aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_9aContext = Flow_control_9aContext;
var Flow_control_9bContext = /** @class */ (function (_super) {
    __extends(Flow_control_9bContext, _super);
    function Flow_control_9bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_9bContext.prototype.CALL = function () { return this.getToken(SHARCParser.CALL, 0); };
    Flow_control_9bContext.prototype.flow_control_10_frag = function () {
        return this.getRuleContext(0, Flow_control_10_fragContext);
    };
    Flow_control_9bContext.prototype.jump_modifier2 = function () {
        return this.tryGetRuleContext(0, Jump_modifier2Context);
    };
    Flow_control_9bContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Flow_control_9bContext.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    Object.defineProperty(Flow_control_9bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_9b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_9bContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_9b) {
            listener.enterFlow_control_9b(this);
        }
    };
    // @Override
    Flow_control_9bContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_9b) {
            listener.exitFlow_control_9b(this);
        }
    };
    // @Override
    Flow_control_9bContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_9b) {
            return visitor.visitFlow_control_9b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_9bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_9bContext = Flow_control_9bContext;
var Flow_control_11aContext = /** @class */ (function (_super) {
    __extends(Flow_control_11aContext, _super);
    function Flow_control_11aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_11aContext.prototype.RTS = function () { return this.getToken(SHARCParser.RTS, 0); };
    Flow_control_11aContext.prototype.jump_modifier3 = function () {
        return this.tryGetRuleContext(0, Jump_modifier3Context);
    };
    Flow_control_11aContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Flow_control_11aContext.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    Object.defineProperty(Flow_control_11aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_11a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_11aContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_11a) {
            listener.enterFlow_control_11a(this);
        }
    };
    // @Override
    Flow_control_11aContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_11a) {
            listener.exitFlow_control_11a(this);
        }
    };
    // @Override
    Flow_control_11aContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_11a) {
            return visitor.visitFlow_control_11a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_11aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_11aContext = Flow_control_11aContext;
var Flow_control_11bContext = /** @class */ (function (_super) {
    __extends(Flow_control_11bContext, _super);
    function Flow_control_11bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_control_11bContext.prototype.RTI = function () { return this.getToken(SHARCParser.RTI, 0); };
    Flow_control_11bContext.prototype.jump_modifier2 = function () {
        return this.tryGetRuleContext(0, Jump_modifier2Context);
    };
    Flow_control_11bContext.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Flow_control_11bContext.prototype.compute = function () {
        return this.tryGetRuleContext(0, ComputeContext);
    };
    Object.defineProperty(Flow_control_11bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_flow_control_11b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_control_11bContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_control_11b) {
            listener.enterFlow_control_11b(this);
        }
    };
    // @Override
    Flow_control_11bContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_control_11b) {
            listener.exitFlow_control_11b(this);
        }
    };
    // @Override
    Flow_control_11bContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_control_11b) {
            return visitor.visitFlow_control_11b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_control_11bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_control_11bContext = Flow_control_11bContext;
var Jump_addr_int_or_pcContext = /** @class */ (function (_super) {
    __extends(Jump_addr_int_or_pcContext, _super);
    function Jump_addr_int_or_pcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_addr_int_or_pcContext.prototype.jump_addr_int = function () {
        return this.tryGetRuleContext(0, Jump_addr_intContext);
    };
    Jump_addr_int_or_pcContext.prototype.jump_addr_pc = function () {
        return this.tryGetRuleContext(0, Jump_addr_pcContext);
    };
    Object.defineProperty(Jump_addr_int_or_pcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_addr_int_or_pc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_addr_int_or_pcContext.prototype.enterRule = function (listener) {
        if (listener.enterJump_addr_int_or_pc) {
            listener.enterJump_addr_int_or_pc(this);
        }
    };
    // @Override
    Jump_addr_int_or_pcContext.prototype.exitRule = function (listener) {
        if (listener.exitJump_addr_int_or_pc) {
            listener.exitJump_addr_int_or_pc(this);
        }
    };
    // @Override
    Jump_addr_int_or_pcContext.prototype.accept = function (visitor) {
        if (visitor.visitJump_addr_int_or_pc) {
            return visitor.visitJump_addr_int_or_pc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_addr_int_or_pcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_addr_int_or_pcContext = Jump_addr_int_or_pcContext;
var Jump_addr_md_or_pcContext = /** @class */ (function (_super) {
    __extends(Jump_addr_md_or_pcContext, _super);
    function Jump_addr_md_or_pcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_addr_md_or_pcContext.prototype.mem_addr_md_ic = function () {
        return this.tryGetRuleContext(0, Mem_addr_md_icContext);
    };
    Jump_addr_md_or_pcContext.prototype.jump_addr_pc = function () {
        return this.tryGetRuleContext(0, Jump_addr_pcContext);
    };
    Object.defineProperty(Jump_addr_md_or_pcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_addr_md_or_pc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_addr_md_or_pcContext.prototype.enterRule = function (listener) {
        if (listener.enterJump_addr_md_or_pc) {
            listener.enterJump_addr_md_or_pc(this);
        }
    };
    // @Override
    Jump_addr_md_or_pcContext.prototype.exitRule = function (listener) {
        if (listener.exitJump_addr_md_or_pc) {
            listener.exitJump_addr_md_or_pc(this);
        }
    };
    // @Override
    Jump_addr_md_or_pcContext.prototype.accept = function (visitor) {
        if (visitor.visitJump_addr_md_or_pc) {
            return visitor.visitJump_addr_md_or_pc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_addr_md_or_pcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_addr_md_or_pcContext = Jump_addr_md_or_pcContext;
var Jump_addr_pcContext = /** @class */ (function (_super) {
    __extends(Jump_addr_pcContext, _super);
    function Jump_addr_pcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_addr_pcContext.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Jump_addr_pcContext.prototype.PC = function () { return this.getToken(SHARCParser.PC, 0); };
    Jump_addr_pcContext.prototype.COMMA = function () { return this.getToken(SHARCParser.COMMA, 0); };
    Jump_addr_pcContext.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Jump_addr_pcContext.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Jump_addr_pcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_addr_pc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_addr_pcContext.prototype.enterRule = function (listener) {
        if (listener.enterJump_addr_pc) {
            listener.enterJump_addr_pc(this);
        }
    };
    // @Override
    Jump_addr_pcContext.prototype.exitRule = function (listener) {
        if (listener.exitJump_addr_pc) {
            listener.exitJump_addr_pc(this);
        }
    };
    // @Override
    Jump_addr_pcContext.prototype.accept = function (visitor) {
        if (visitor.visitJump_addr_pc) {
            return visitor.visitJump_addr_pc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_addr_pcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_addr_pcContext = Jump_addr_pcContext;
var Jump_addr_intContext = /** @class */ (function (_super) {
    __extends(Jump_addr_intContext, _super);
    function Jump_addr_intContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_addr_intContext.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Object.defineProperty(Jump_addr_intContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_addr_int; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_addr_intContext.prototype.enterRule = function (listener) {
        if (listener.enterJump_addr_int) {
            listener.enterJump_addr_int(this);
        }
    };
    // @Override
    Jump_addr_intContext.prototype.exitRule = function (listener) {
        if (listener.exitJump_addr_int) {
            listener.exitJump_addr_int(this);
        }
    };
    // @Override
    Jump_addr_intContext.prototype.accept = function (visitor) {
        if (visitor.visitJump_addr_int) {
            return visitor.visitJump_addr_int(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_addr_intContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_addr_intContext = Jump_addr_intContext;
var Jump_modifierContext = /** @class */ (function (_super) {
    __extends(Jump_modifierContext, _super);
    function Jump_modifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_modifierContext.prototype.jump_modifier_ = function () {
        return this.getRuleContext(0, Jump_modifier_Context);
    };
    Object.defineProperty(Jump_modifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_modifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_modifierContext.prototype.enterRule = function (listener) {
        if (listener.enterJump_modifier) {
            listener.enterJump_modifier(this);
        }
    };
    // @Override
    Jump_modifierContext.prototype.exitRule = function (listener) {
        if (listener.exitJump_modifier) {
            listener.exitJump_modifier(this);
        }
    };
    // @Override
    Jump_modifierContext.prototype.accept = function (visitor) {
        if (visitor.visitJump_modifier) {
            return visitor.visitJump_modifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_modifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_modifierContext = Jump_modifierContext;
var Jump_modifier_Context = /** @class */ (function (_super) {
    __extends(Jump_modifier_Context, _super);
    function Jump_modifier_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_modifier_Context.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Jump_modifier_Context.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Jump_modifier_Context.prototype.jump_modifier_1 = function () {
        return this.tryGetRuleContext(0, Jump_modifier_1Context);
    };
    Jump_modifier_Context.prototype.LA = function () { return this.tryGetToken(SHARCParser.LA, 0); };
    Jump_modifier_Context.prototype.CI = function () { return this.tryGetToken(SHARCParser.CI, 0); };
    Object.defineProperty(Jump_modifier_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_modifier_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_modifier_Context.prototype.enterRule = function (listener) {
        if (listener.enterJump_modifier_) {
            listener.enterJump_modifier_(this);
        }
    };
    // @Override
    Jump_modifier_Context.prototype.exitRule = function (listener) {
        if (listener.exitJump_modifier_) {
            listener.exitJump_modifier_(this);
        }
    };
    // @Override
    Jump_modifier_Context.prototype.accept = function (visitor) {
        if (visitor.visitJump_modifier_) {
            return visitor.visitJump_modifier_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_modifier_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_modifier_Context = Jump_modifier_Context;
var Jump_modifier_1Context = /** @class */ (function (_super) {
    __extends(Jump_modifier_1Context, _super);
    function Jump_modifier_1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_modifier_1Context.prototype.DB = function () { return this.getToken(SHARCParser.DB, 0); };
    Jump_modifier_1Context.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Jump_modifier_1Context.prototype.LA = function () { return this.tryGetToken(SHARCParser.LA, 0); };
    Jump_modifier_1Context.prototype.CI = function () { return this.tryGetToken(SHARCParser.CI, 0); };
    Object.defineProperty(Jump_modifier_1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_modifier_1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_modifier_1Context.prototype.enterRule = function (listener) {
        if (listener.enterJump_modifier_1) {
            listener.enterJump_modifier_1(this);
        }
    };
    // @Override
    Jump_modifier_1Context.prototype.exitRule = function (listener) {
        if (listener.exitJump_modifier_1) {
            listener.exitJump_modifier_1(this);
        }
    };
    // @Override
    Jump_modifier_1Context.prototype.accept = function (visitor) {
        if (visitor.visitJump_modifier_1) {
            return visitor.visitJump_modifier_1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_modifier_1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_modifier_1Context = Jump_modifier_1Context;
var Jump_modifier2Context = /** @class */ (function (_super) {
    __extends(Jump_modifier2Context, _super);
    function Jump_modifier2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_modifier2Context.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Jump_modifier2Context.prototype.DB = function () { return this.getToken(SHARCParser.DB, 0); };
    Jump_modifier2Context.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Object.defineProperty(Jump_modifier2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_modifier2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_modifier2Context.prototype.enterRule = function (listener) {
        if (listener.enterJump_modifier2) {
            listener.enterJump_modifier2(this);
        }
    };
    // @Override
    Jump_modifier2Context.prototype.exitRule = function (listener) {
        if (listener.exitJump_modifier2) {
            listener.exitJump_modifier2(this);
        }
    };
    // @Override
    Jump_modifier2Context.prototype.accept = function (visitor) {
        if (visitor.visitJump_modifier2) {
            return visitor.visitJump_modifier2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_modifier2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_modifier2Context = Jump_modifier2Context;
var Jump_modifier3Context = /** @class */ (function (_super) {
    __extends(Jump_modifier3Context, _super);
    function Jump_modifier3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_modifier3Context.prototype.jump_modifier3_ = function () {
        return this.getRuleContext(0, Jump_modifier3_Context);
    };
    Object.defineProperty(Jump_modifier3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_modifier3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_modifier3Context.prototype.enterRule = function (listener) {
        if (listener.enterJump_modifier3) {
            listener.enterJump_modifier3(this);
        }
    };
    // @Override
    Jump_modifier3Context.prototype.exitRule = function (listener) {
        if (listener.exitJump_modifier3) {
            listener.exitJump_modifier3(this);
        }
    };
    // @Override
    Jump_modifier3Context.prototype.accept = function (visitor) {
        if (visitor.visitJump_modifier3) {
            return visitor.visitJump_modifier3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_modifier3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_modifier3Context = Jump_modifier3Context;
var Jump_modifier3_Context = /** @class */ (function (_super) {
    __extends(Jump_modifier3_Context, _super);
    function Jump_modifier3_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_modifier3_Context.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Jump_modifier3_Context.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Jump_modifier3_Context.prototype.jump_modifier3_1 = function () {
        return this.tryGetRuleContext(0, Jump_modifier3_1Context);
    };
    Jump_modifier3_Context.prototype.LR = function () { return this.tryGetToken(SHARCParser.LR, 0); };
    Object.defineProperty(Jump_modifier3_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_modifier3_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_modifier3_Context.prototype.enterRule = function (listener) {
        if (listener.enterJump_modifier3_) {
            listener.enterJump_modifier3_(this);
        }
    };
    // @Override
    Jump_modifier3_Context.prototype.exitRule = function (listener) {
        if (listener.exitJump_modifier3_) {
            listener.exitJump_modifier3_(this);
        }
    };
    // @Override
    Jump_modifier3_Context.prototype.accept = function (visitor) {
        if (visitor.visitJump_modifier3_) {
            return visitor.visitJump_modifier3_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_modifier3_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_modifier3_Context = Jump_modifier3_Context;
var Jump_modifier3_1Context = /** @class */ (function (_super) {
    __extends(Jump_modifier3_1Context, _super);
    function Jump_modifier3_1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Jump_modifier3_1Context.prototype.DB = function () { return this.getToken(SHARCParser.DB, 0); };
    Jump_modifier3_1Context.prototype.COMMA = function () { return this.tryGetToken(SHARCParser.COMMA, 0); };
    Jump_modifier3_1Context.prototype.LR = function () { return this.tryGetToken(SHARCParser.LR, 0); };
    Object.defineProperty(Jump_modifier3_1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_jump_modifier3_1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Jump_modifier3_1Context.prototype.enterRule = function (listener) {
        if (listener.enterJump_modifier3_1) {
            listener.enterJump_modifier3_1(this);
        }
    };
    // @Override
    Jump_modifier3_1Context.prototype.exitRule = function (listener) {
        if (listener.exitJump_modifier3_1) {
            listener.exitJump_modifier3_1(this);
        }
    };
    // @Override
    Jump_modifier3_1Context.prototype.accept = function (visitor) {
        if (visitor.visitJump_modifier3_1) {
            return visitor.visitJump_modifier3_1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Jump_modifier3_1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Jump_modifier3_1Context = Jump_modifier3_1Context;
var Imm_mov_expContext = /** @class */ (function (_super) {
    __extends(Imm_mov_expContext, _super);
    function Imm_mov_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Imm_mov_expContext.prototype.imm_mov_14a = function () {
        return this.tryGetRuleContext(0, Imm_mov_14aContext);
    };
    Imm_mov_expContext.prototype.imm_mov_14b = function () {
        return this.tryGetRuleContext(0, Imm_mov_14bContext);
    };
    Imm_mov_expContext.prototype.imm_mov_16 = function () {
        return this.tryGetRuleContext(0, Imm_mov_16Context);
    };
    Imm_mov_expContext.prototype.imm_mov_17 = function () {
        return this.tryGetRuleContext(0, Imm_mov_17Context);
    };
    Object.defineProperty(Imm_mov_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_imm_mov_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Imm_mov_expContext.prototype.enterRule = function (listener) {
        if (listener.enterImm_mov_exp) {
            listener.enterImm_mov_exp(this);
        }
    };
    // @Override
    Imm_mov_expContext.prototype.exitRule = function (listener) {
        if (listener.exitImm_mov_exp) {
            listener.exitImm_mov_exp(this);
        }
    };
    // @Override
    Imm_mov_expContext.prototype.accept = function (visitor) {
        if (visitor.visitImm_mov_exp) {
            return visitor.visitImm_mov_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Imm_mov_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Imm_mov_expContext = Imm_mov_expContext;
var Imm_mov_14aContext = /** @class */ (function (_super) {
    __extends(Imm_mov_14aContext, _super);
    function Imm_mov_14aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Imm_mov_14aContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Imm_mov_14aContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Imm_mov_14aContext.prototype.mem_addr_dm_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_intContext);
    };
    Imm_mov_14aContext.prototype.mem_addr_pm_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_intContext);
    };
    Object.defineProperty(Imm_mov_14aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_imm_mov_14a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Imm_mov_14aContext.prototype.enterRule = function (listener) {
        if (listener.enterImm_mov_14a) {
            listener.enterImm_mov_14a(this);
        }
    };
    // @Override
    Imm_mov_14aContext.prototype.exitRule = function (listener) {
        if (listener.exitImm_mov_14a) {
            listener.exitImm_mov_14a(this);
        }
    };
    // @Override
    Imm_mov_14aContext.prototype.accept = function (visitor) {
        if (visitor.visitImm_mov_14a) {
            return visitor.visitImm_mov_14a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Imm_mov_14aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Imm_mov_14aContext = Imm_mov_14aContext;
var Imm_mov_15aContext = /** @class */ (function (_super) {
    __extends(Imm_mov_15aContext, _super);
    function Imm_mov_15aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Imm_mov_15aContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Imm_mov_15aContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Imm_mov_15aContext.prototype.mem_addr_dm_int_ia = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_int_iaContext);
    };
    Imm_mov_15aContext.prototype.mem_addr_pm_int_ic = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_int_icContext);
    };
    Object.defineProperty(Imm_mov_15aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_imm_mov_15a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Imm_mov_15aContext.prototype.enterRule = function (listener) {
        if (listener.enterImm_mov_15a) {
            listener.enterImm_mov_15a(this);
        }
    };
    // @Override
    Imm_mov_15aContext.prototype.exitRule = function (listener) {
        if (listener.exitImm_mov_15a) {
            listener.exitImm_mov_15a(this);
        }
    };
    // @Override
    Imm_mov_15aContext.prototype.accept = function (visitor) {
        if (visitor.visitImm_mov_15a) {
            return visitor.visitImm_mov_15a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Imm_mov_15aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Imm_mov_15aContext = Imm_mov_15aContext;
var Imm_mov_14bContext = /** @class */ (function (_super) {
    __extends(Imm_mov_14bContext, _super);
    function Imm_mov_14bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Imm_mov_14bContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Imm_mov_14bContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Imm_mov_14bContext.prototype.mem_addr_dm_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_intContext);
    };
    Imm_mov_14bContext.prototype.mem_addr_pm_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_intContext);
    };
    Object.defineProperty(Imm_mov_14bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_imm_mov_14b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Imm_mov_14bContext.prototype.enterRule = function (listener) {
        if (listener.enterImm_mov_14b) {
            listener.enterImm_mov_14b(this);
        }
    };
    // @Override
    Imm_mov_14bContext.prototype.exitRule = function (listener) {
        if (listener.exitImm_mov_14b) {
            listener.exitImm_mov_14b(this);
        }
    };
    // @Override
    Imm_mov_14bContext.prototype.accept = function (visitor) {
        if (visitor.visitImm_mov_14b) {
            return visitor.visitImm_mov_14b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Imm_mov_14bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Imm_mov_14bContext = Imm_mov_14bContext;
var Imm_mov_15bContext = /** @class */ (function (_super) {
    __extends(Imm_mov_15bContext, _super);
    function Imm_mov_15bContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Imm_mov_15bContext.prototype.u_reg = function () {
        return this.getRuleContext(0, U_regContext);
    };
    Imm_mov_15bContext.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Imm_mov_15bContext.prototype.mem_addr_dm_int_ia = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_int_iaContext);
    };
    Imm_mov_15bContext.prototype.mem_addr_pm_int_ic = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_int_icContext);
    };
    Object.defineProperty(Imm_mov_15bContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_imm_mov_15b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Imm_mov_15bContext.prototype.enterRule = function (listener) {
        if (listener.enterImm_mov_15b) {
            listener.enterImm_mov_15b(this);
        }
    };
    // @Override
    Imm_mov_15bContext.prototype.exitRule = function (listener) {
        if (listener.exitImm_mov_15b) {
            listener.exitImm_mov_15b(this);
        }
    };
    // @Override
    Imm_mov_15bContext.prototype.accept = function (visitor) {
        if (visitor.visitImm_mov_15b) {
            return visitor.visitImm_mov_15b(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Imm_mov_15bContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Imm_mov_15bContext = Imm_mov_15bContext;
var Imm_mov_16Context = /** @class */ (function (_super) {
    __extends(Imm_mov_16Context, _super);
    function Imm_mov_16Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Imm_mov_16Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Imm_mov_16Context.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Imm_mov_16Context.prototype.mem_addr_dm_ia_mb = function () {
        return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
    };
    Imm_mov_16Context.prototype.mem_addr_pm_ic_md = function () {
        return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
    };
    Object.defineProperty(Imm_mov_16Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_imm_mov_16; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Imm_mov_16Context.prototype.enterRule = function (listener) {
        if (listener.enterImm_mov_16) {
            listener.enterImm_mov_16(this);
        }
    };
    // @Override
    Imm_mov_16Context.prototype.exitRule = function (listener) {
        if (listener.exitImm_mov_16) {
            listener.exitImm_mov_16(this);
        }
    };
    // @Override
    Imm_mov_16Context.prototype.accept = function (visitor) {
        if (visitor.visitImm_mov_16) {
            return visitor.visitImm_mov_16(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Imm_mov_16Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Imm_mov_16Context = Imm_mov_16Context;
var Imm_mov_17Context = /** @class */ (function (_super) {
    __extends(Imm_mov_17Context, _super);
    function Imm_mov_17Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Imm_mov_17Context.prototype.u_reg2 = function () {
        return this.getRuleContext(0, U_reg2Context);
    };
    Imm_mov_17Context.prototype.EQU = function () { return this.getToken(SHARCParser.EQU, 0); };
    Imm_mov_17Context.prototype.value_exp = function () {
        return this.getRuleContext(0, Value_expContext);
    };
    Object.defineProperty(Imm_mov_17Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_imm_mov_17; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Imm_mov_17Context.prototype.enterRule = function (listener) {
        if (listener.enterImm_mov_17) {
            listener.enterImm_mov_17(this);
        }
    };
    // @Override
    Imm_mov_17Context.prototype.exitRule = function (listener) {
        if (listener.exitImm_mov_17) {
            listener.exitImm_mov_17(this);
        }
    };
    // @Override
    Imm_mov_17Context.prototype.accept = function (visitor) {
        if (visitor.visitImm_mov_17) {
            return visitor.visitImm_mov_17(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Imm_mov_17Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Imm_mov_17Context = Imm_mov_17Context;
var U_reg2Context = /** @class */ (function (_super) {
    __extends(U_reg2Context, _super);
    function U_reg2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    U_reg2Context.prototype.d_reg = function () {
        return this.tryGetRuleContext(0, D_regContext);
    };
    U_reg2Context.prototype.PC = function () { return this.tryGetToken(SHARCParser.PC, 0); };
    U_reg2Context.prototype.PCSTK = function () { return this.tryGetToken(SHARCParser.PCSTK, 0); };
    U_reg2Context.prototype.PCSTKP = function () { return this.tryGetToken(SHARCParser.PCSTKP, 0); };
    U_reg2Context.prototype.FADDR = function () { return this.tryGetToken(SHARCParser.FADDR, 0); };
    U_reg2Context.prototype.DADDR = function () { return this.tryGetToken(SHARCParser.DADDR, 0); };
    U_reg2Context.prototype.LADDR = function () { return this.tryGetToken(SHARCParser.LADDR, 0); };
    U_reg2Context.prototype.CURLCNTR = function () { return this.tryGetToken(SHARCParser.CURLCNTR, 0); };
    U_reg2Context.prototype.dag_reg = function () {
        return this.tryGetRuleContext(0, Dag_regContext);
    };
    U_reg2Context.prototype.PX1 = function () { return this.tryGetToken(SHARCParser.PX1, 0); };
    U_reg2Context.prototype.PX2 = function () { return this.tryGetToken(SHARCParser.PX2, 0); };
    U_reg2Context.prototype.PX = function () { return this.tryGetToken(SHARCParser.PX, 0); };
    U_reg2Context.prototype.TPERIOD = function () { return this.tryGetToken(SHARCParser.TPERIOD, 0); };
    U_reg2Context.prototype.TCOUNT = function () { return this.tryGetToken(SHARCParser.TCOUNT, 0); };
    U_reg2Context.prototype.s_reg = function () {
        return this.tryGetRuleContext(0, S_regContext);
    };
    Object.defineProperty(U_reg2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_u_reg2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    U_reg2Context.prototype.enterRule = function (listener) {
        if (listener.enterU_reg2) {
            listener.enterU_reg2(this);
        }
    };
    // @Override
    U_reg2Context.prototype.exitRule = function (listener) {
        if (listener.exitU_reg2) {
            listener.exitU_reg2(this);
        }
    };
    // @Override
    U_reg2Context.prototype.accept = function (visitor) {
        if (visitor.visitU_reg2) {
            return visitor.visitU_reg2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return U_reg2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.U_reg2Context = U_reg2Context;
var Misc_expContext = /** @class */ (function (_super) {
    __extends(Misc_expContext, _super);
    function Misc_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Misc_expContext.prototype.BIT = function () { return this.tryGetToken(SHARCParser.BIT, 0); };
    Misc_expContext.prototype.s_reg = function () {
        return this.tryGetRuleContext(0, S_regContext);
    };
    Misc_expContext.prototype.value_exp = function () {
        return this.tryGetRuleContext(0, Value_expContext);
    };
    Misc_expContext.prototype.SET = function () { return this.tryGetToken(SHARCParser.SET, 0); };
    Misc_expContext.prototype.CLR = function () { return this.tryGetToken(SHARCParser.CLR, 0); };
    Misc_expContext.prototype.TGL = function () { return this.tryGetToken(SHARCParser.TGL, 0); };
    Misc_expContext.prototype.TST = function () { return this.tryGetToken(SHARCParser.TST, 0); };
    Misc_expContext.prototype.XOR = function () { return this.tryGetToken(SHARCParser.XOR, 0); };
    Misc_expContext.prototype.BITREV = function () { return this.tryGetToken(SHARCParser.BITREV, 0); };
    Misc_expContext.prototype.mem_addr_ia_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_ia_intContext);
    };
    Misc_expContext.prototype.mem_addr_ic_int = function () {
        return this.tryGetRuleContext(0, Mem_addr_ic_intContext);
    };
    Misc_expContext.prototype.MODIFY = function () { return this.tryGetToken(SHARCParser.MODIFY, 0); };
    Misc_expContext.prototype.LPARENTHESE = function () { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); };
    Misc_expContext.prototype.ia = function () {
        return this.tryGetRuleContext(0, IaContext);
    };
    Misc_expContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COMMA);
        }
        else {
            return this.getToken(SHARCParser.COMMA, i);
        }
    };
    Misc_expContext.prototype.RPARENTHESE = function () { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); };
    Misc_expContext.prototype.ic = function () {
        return this.tryGetRuleContext(0, IcContext);
    };
    Misc_expContext.prototype.misc_20 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Misc_20Context);
        }
        else {
            return this.getRuleContext(i, Misc_20Context);
        }
    };
    Misc_expContext.prototype.FLUSH = function () { return this.tryGetToken(SHARCParser.FLUSH, 0); };
    Misc_expContext.prototype.CACHE = function () { return this.tryGetToken(SHARCParser.CACHE, 0); };
    Misc_expContext.prototype.NOP = function () { return this.tryGetToken(SHARCParser.NOP, 0); };
    Misc_expContext.prototype.IDLE = function () { return this.tryGetToken(SHARCParser.IDLE, 0); };
    Misc_expContext.prototype.IDLE16 = function () { return this.tryGetToken(SHARCParser.IDLE16, 0); };
    Misc_expContext.prototype.CJUMP = function () { return this.tryGetToken(SHARCParser.CJUMP, 0); };
    Misc_expContext.prototype.jump_addr_int_or_pc = function () {
        return this.tryGetRuleContext(0, Jump_addr_int_or_pcContext);
    };
    Misc_expContext.prototype.jump_modifier2 = function () {
        return this.tryGetRuleContext(0, Jump_modifier2Context);
    };
    Misc_expContext.prototype.RFRAME = function () { return this.tryGetToken(SHARCParser.RFRAME, 0); };
    Object.defineProperty(Misc_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_misc_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Misc_expContext.prototype.enterRule = function (listener) {
        if (listener.enterMisc_exp) {
            listener.enterMisc_exp(this);
        }
    };
    // @Override
    Misc_expContext.prototype.exitRule = function (listener) {
        if (listener.exitMisc_exp) {
            listener.exitMisc_exp(this);
        }
    };
    // @Override
    Misc_expContext.prototype.accept = function (visitor) {
        if (visitor.visitMisc_exp) {
            return visitor.visitMisc_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Misc_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Misc_expContext = Misc_expContext;
var Misc_20Context = /** @class */ (function (_super) {
    __extends(Misc_20Context, _super);
    function Misc_20Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Misc_20Context.prototype.PUSH = function () { return this.tryGetToken(SHARCParser.PUSH, 0); };
    Misc_20Context.prototype.POP = function () { return this.tryGetToken(SHARCParser.POP, 0); };
    Misc_20Context.prototype.LOOP = function () { return this.tryGetToken(SHARCParser.LOOP, 0); };
    Misc_20Context.prototype.STS = function () { return this.tryGetToken(SHARCParser.STS, 0); };
    Misc_20Context.prototype.PCSTK = function () { return this.tryGetToken(SHARCParser.PCSTK, 0); };
    Object.defineProperty(Misc_20Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_misc_20; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Misc_20Context.prototype.enterRule = function (listener) {
        if (listener.enterMisc_20) {
            listener.enterMisc_20(this);
        }
    };
    // @Override
    Misc_20Context.prototype.exitRule = function (listener) {
        if (listener.exitMisc_20) {
            listener.exitMisc_20(this);
        }
    };
    // @Override
    Misc_20Context.prototype.accept = function (visitor) {
        if (visitor.visitMisc_20) {
            return visitor.visitMisc_20(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Misc_20Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Misc_20Context = Misc_20Context;
var Directive_expContext = /** @class */ (function (_super) {
    __extends(Directive_expContext, _super);
    function Directive_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Directive_expContext.prototype.DOT_ALGIGN = function () { return this.tryGetToken(SHARCParser.DOT_ALGIGN, 0); };
    Directive_expContext.prototype.INT = function () { return this.tryGetToken(SHARCParser.INT, 0); };
    Directive_expContext.prototype.DOT_COMPRESS = function () { return this.tryGetToken(SHARCParser.DOT_COMPRESS, 0); };
    Directive_expContext.prototype.DOT_EXTERN = function () { return this.tryGetToken(SHARCParser.DOT_EXTERN, 0); };
    Directive_expContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.ID);
        }
        else {
            return this.getToken(SHARCParser.ID, i);
        }
    };
    Directive_expContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.COMMA);
        }
        else {
            return this.getToken(SHARCParser.COMMA, i);
        }
    };
    Directive_expContext.prototype.DOT_FILE = function () { return this.tryGetToken(SHARCParser.DOT_FILE, 0); };
    Directive_expContext.prototype.StringLiteral = function (i) {
        if (i === undefined) {
            return this.getTokens(SHARCParser.StringLiteral);
        }
        else {
            return this.getToken(SHARCParser.StringLiteral, i);
        }
    };
    Directive_expContext.prototype.DOT_FILE_ATTR = function () { return this.tryGetToken(SHARCParser.DOT_FILE_ATTR, 0); };
    Directive_expContext.prototype.DOT_FORCECOMPRESS = function () { return this.tryGetToken(SHARCParser.DOT_FORCECOMPRESS, 0); };
    Directive_expContext.prototype.DOT_GLOBAL = function () { return this.tryGetToken(SHARCParser.DOT_GLOBAL, 0); };
    Directive_expContext.prototype.DOT_IMPORT = function () { return this.tryGetToken(SHARCParser.DOT_IMPORT, 0); };
    Directive_expContext.prototype.DOT_LEFTMARGIN = function () { return this.tryGetToken(SHARCParser.DOT_LEFTMARGIN, 0); };
    Directive_expContext.prototype.value_exp = function () {
        return this.tryGetRuleContext(0, Value_expContext);
    };
    Directive_expContext.prototype.DOT_LIST = function () { return this.tryGetToken(SHARCParser.DOT_LIST, 0); };
    Directive_expContext.prototype.DOT_LIST_DATA = function () { return this.tryGetToken(SHARCParser.DOT_LIST_DATA, 0); };
    Directive_expContext.prototype.DOT_LIST_DATFILE = function () { return this.tryGetToken(SHARCParser.DOT_LIST_DATFILE, 0); };
    Directive_expContext.prototype.DOT_LIST_DEFTAB = function () { return this.tryGetToken(SHARCParser.DOT_LIST_DEFTAB, 0); };
    Directive_expContext.prototype.DOT_LIST_LOCTAB = function () { return this.tryGetToken(SHARCParser.DOT_LIST_LOCTAB, 0); };
    Directive_expContext.prototype.DOT_LIST_WRAPDATA = function () { return this.tryGetToken(SHARCParser.DOT_LIST_WRAPDATA, 0); };
    Directive_expContext.prototype.DOT_NEWPAGE = function () { return this.tryGetToken(SHARCParser.DOT_NEWPAGE, 0); };
    Directive_expContext.prototype.DOT_NOCOMPRESS = function () { return this.tryGetToken(SHARCParser.DOT_NOCOMPRESS, 0); };
    Directive_expContext.prototype.DOT_NOLIST_DATA = function () { return this.tryGetToken(SHARCParser.DOT_NOLIST_DATA, 0); };
    Directive_expContext.prototype.DOT_NOLIST_DATFILE = function () { return this.tryGetToken(SHARCParser.DOT_NOLIST_DATFILE, 0); };
    Directive_expContext.prototype.DOT_NOLIST_WRAPDATA = function () { return this.tryGetToken(SHARCParser.DOT_NOLIST_WRAPDATA, 0); };
    Directive_expContext.prototype.DOT_PAGELENGTH = function () { return this.tryGetToken(SHARCParser.DOT_PAGELENGTH, 0); };
    Directive_expContext.prototype.DOT_PAGEWIDTH = function () { return this.tryGetToken(SHARCParser.DOT_PAGEWIDTH, 0); };
    Directive_expContext.prototype.DOT_PRECISION = function () { return this.tryGetToken(SHARCParser.DOT_PRECISION, 0); };
    Directive_expContext.prototype.EQU = function () { return this.tryGetToken(SHARCParser.EQU, 0); };
    Directive_expContext.prototype.DOT_ROUND_MINUS = function () { return this.tryGetToken(SHARCParser.DOT_ROUND_MINUS, 0); };
    Directive_expContext.prototype.DOT_ROUND_NEAREST = function () { return this.tryGetToken(SHARCParser.DOT_ROUND_NEAREST, 0); };
    Directive_expContext.prototype.DOT_ROUND_PLUS = function () { return this.tryGetToken(SHARCParser.DOT_ROUND_PLUS, 0); };
    Directive_expContext.prototype.DOT_ROUND_ZERO = function () { return this.tryGetToken(SHARCParser.DOT_ROUND_ZERO, 0); };
    Directive_expContext.prototype.DOT_PREVIOUS = function () { return this.tryGetToken(SHARCParser.DOT_PREVIOUS, 0); };
    Directive_expContext.prototype.DOT_WEAK = function () { return this.tryGetToken(SHARCParser.DOT_WEAK, 0); };
    Object.defineProperty(Directive_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_directive_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Directive_expContext.prototype.enterRule = function (listener) {
        if (listener.enterDirective_exp) {
            listener.enterDirective_exp(this);
        }
    };
    // @Override
    Directive_expContext.prototype.exitRule = function (listener) {
        if (listener.exitDirective_exp) {
            listener.exitDirective_exp(this);
        }
    };
    // @Override
    Directive_expContext.prototype.accept = function (visitor) {
        if (visitor.visitDirective_exp) {
            return visitor.visitDirective_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Directive_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Directive_expContext = Directive_expContext;
var B_regContext = /** @class */ (function (_super) {
    __extends(B_regContext, _super);
    function B_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    B_regContext.prototype.B0 = function () { return this.tryGetToken(SHARCParser.B0, 0); };
    B_regContext.prototype.B1 = function () { return this.tryGetToken(SHARCParser.B1, 0); };
    B_regContext.prototype.B2 = function () { return this.tryGetToken(SHARCParser.B2, 0); };
    B_regContext.prototype.B3 = function () { return this.tryGetToken(SHARCParser.B3, 0); };
    B_regContext.prototype.B4 = function () { return this.tryGetToken(SHARCParser.B4, 0); };
    B_regContext.prototype.B5 = function () { return this.tryGetToken(SHARCParser.B5, 0); };
    B_regContext.prototype.B6 = function () { return this.tryGetToken(SHARCParser.B6, 0); };
    B_regContext.prototype.B7 = function () { return this.tryGetToken(SHARCParser.B7, 0); };
    B_regContext.prototype.B8 = function () { return this.tryGetToken(SHARCParser.B8, 0); };
    B_regContext.prototype.B9 = function () { return this.tryGetToken(SHARCParser.B9, 0); };
    B_regContext.prototype.B10 = function () { return this.tryGetToken(SHARCParser.B10, 0); };
    B_regContext.prototype.B11 = function () { return this.tryGetToken(SHARCParser.B11, 0); };
    B_regContext.prototype.B12 = function () { return this.tryGetToken(SHARCParser.B12, 0); };
    B_regContext.prototype.B13 = function () { return this.tryGetToken(SHARCParser.B13, 0); };
    B_regContext.prototype.B14 = function () { return this.tryGetToken(SHARCParser.B14, 0); };
    B_regContext.prototype.B15 = function () { return this.tryGetToken(SHARCParser.B15, 0); };
    Object.defineProperty(B_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_b_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    B_regContext.prototype.enterRule = function (listener) {
        if (listener.enterB_reg) {
            listener.enterB_reg(this);
        }
    };
    // @Override
    B_regContext.prototype.exitRule = function (listener) {
        if (listener.exitB_reg) {
            listener.exitB_reg(this);
        }
    };
    // @Override
    B_regContext.prototype.accept = function (visitor) {
        if (visitor.visitB_reg) {
            return visitor.visitB_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return B_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.B_regContext = B_regContext;
var L_regContext = /** @class */ (function (_super) {
    __extends(L_regContext, _super);
    function L_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    L_regContext.prototype.L0 = function () { return this.tryGetToken(SHARCParser.L0, 0); };
    L_regContext.prototype.L1 = function () { return this.tryGetToken(SHARCParser.L1, 0); };
    L_regContext.prototype.L2 = function () { return this.tryGetToken(SHARCParser.L2, 0); };
    L_regContext.prototype.L3 = function () { return this.tryGetToken(SHARCParser.L3, 0); };
    L_regContext.prototype.L4 = function () { return this.tryGetToken(SHARCParser.L4, 0); };
    L_regContext.prototype.L5 = function () { return this.tryGetToken(SHARCParser.L5, 0); };
    L_regContext.prototype.L6 = function () { return this.tryGetToken(SHARCParser.L6, 0); };
    L_regContext.prototype.L7 = function () { return this.tryGetToken(SHARCParser.L7, 0); };
    L_regContext.prototype.L8 = function () { return this.tryGetToken(SHARCParser.L8, 0); };
    L_regContext.prototype.L9 = function () { return this.tryGetToken(SHARCParser.L9, 0); };
    L_regContext.prototype.L10 = function () { return this.tryGetToken(SHARCParser.L10, 0); };
    L_regContext.prototype.L11 = function () { return this.tryGetToken(SHARCParser.L11, 0); };
    L_regContext.prototype.L12 = function () { return this.tryGetToken(SHARCParser.L12, 0); };
    L_regContext.prototype.L13 = function () { return this.tryGetToken(SHARCParser.L13, 0); };
    L_regContext.prototype.L14 = function () { return this.tryGetToken(SHARCParser.L14, 0); };
    L_regContext.prototype.L15 = function () { return this.tryGetToken(SHARCParser.L15, 0); };
    Object.defineProperty(L_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_l_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    L_regContext.prototype.enterRule = function (listener) {
        if (listener.enterL_reg) {
            listener.enterL_reg(this);
        }
    };
    // @Override
    L_regContext.prototype.exitRule = function (listener) {
        if (listener.exitL_reg) {
            listener.exitL_reg(this);
        }
    };
    // @Override
    L_regContext.prototype.accept = function (visitor) {
        if (visitor.visitL_reg) {
            return visitor.visitL_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return L_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.L_regContext = L_regContext;
var R_regContext = /** @class */ (function (_super) {
    __extends(R_regContext, _super);
    function R_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    R_regContext.prototype.R0 = function () { return this.tryGetToken(SHARCParser.R0, 0); };
    R_regContext.prototype.R1 = function () { return this.tryGetToken(SHARCParser.R1, 0); };
    R_regContext.prototype.R2 = function () { return this.tryGetToken(SHARCParser.R2, 0); };
    R_regContext.prototype.R3 = function () { return this.tryGetToken(SHARCParser.R3, 0); };
    R_regContext.prototype.R4 = function () { return this.tryGetToken(SHARCParser.R4, 0); };
    R_regContext.prototype.R5 = function () { return this.tryGetToken(SHARCParser.R5, 0); };
    R_regContext.prototype.R6 = function () { return this.tryGetToken(SHARCParser.R6, 0); };
    R_regContext.prototype.R7 = function () { return this.tryGetToken(SHARCParser.R7, 0); };
    R_regContext.prototype.R8 = function () { return this.tryGetToken(SHARCParser.R8, 0); };
    R_regContext.prototype.R9 = function () { return this.tryGetToken(SHARCParser.R9, 0); };
    R_regContext.prototype.R10 = function () { return this.tryGetToken(SHARCParser.R10, 0); };
    R_regContext.prototype.R11 = function () { return this.tryGetToken(SHARCParser.R11, 0); };
    R_regContext.prototype.R12 = function () { return this.tryGetToken(SHARCParser.R12, 0); };
    R_regContext.prototype.R13 = function () { return this.tryGetToken(SHARCParser.R13, 0); };
    R_regContext.prototype.R14 = function () { return this.tryGetToken(SHARCParser.R14, 0); };
    R_regContext.prototype.R15 = function () { return this.tryGetToken(SHARCParser.R15, 0); };
    Object.defineProperty(R_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_r_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    R_regContext.prototype.enterRule = function (listener) {
        if (listener.enterR_reg) {
            listener.enterR_reg(this);
        }
    };
    // @Override
    R_regContext.prototype.exitRule = function (listener) {
        if (listener.exitR_reg) {
            listener.exitR_reg(this);
        }
    };
    // @Override
    R_regContext.prototype.accept = function (visitor) {
        if (visitor.visitR_reg) {
            return visitor.visitR_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return R_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.R_regContext = R_regContext;
var F_regContext = /** @class */ (function (_super) {
    __extends(F_regContext, _super);
    function F_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    F_regContext.prototype.F0 = function () { return this.tryGetToken(SHARCParser.F0, 0); };
    F_regContext.prototype.F1 = function () { return this.tryGetToken(SHARCParser.F1, 0); };
    F_regContext.prototype.F2 = function () { return this.tryGetToken(SHARCParser.F2, 0); };
    F_regContext.prototype.F3 = function () { return this.tryGetToken(SHARCParser.F3, 0); };
    F_regContext.prototype.F4 = function () { return this.tryGetToken(SHARCParser.F4, 0); };
    F_regContext.prototype.F5 = function () { return this.tryGetToken(SHARCParser.F5, 0); };
    F_regContext.prototype.F6 = function () { return this.tryGetToken(SHARCParser.F6, 0); };
    F_regContext.prototype.F7 = function () { return this.tryGetToken(SHARCParser.F7, 0); };
    F_regContext.prototype.F8 = function () { return this.tryGetToken(SHARCParser.F8, 0); };
    F_regContext.prototype.F9 = function () { return this.tryGetToken(SHARCParser.F9, 0); };
    F_regContext.prototype.F10 = function () { return this.tryGetToken(SHARCParser.F10, 0); };
    F_regContext.prototype.F11 = function () { return this.tryGetToken(SHARCParser.F11, 0); };
    F_regContext.prototype.F12 = function () { return this.tryGetToken(SHARCParser.F12, 0); };
    F_regContext.prototype.F13 = function () { return this.tryGetToken(SHARCParser.F13, 0); };
    F_regContext.prototype.F14 = function () { return this.tryGetToken(SHARCParser.F14, 0); };
    F_regContext.prototype.F15 = function () { return this.tryGetToken(SHARCParser.F15, 0); };
    Object.defineProperty(F_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_f_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    F_regContext.prototype.enterRule = function (listener) {
        if (listener.enterF_reg) {
            listener.enterF_reg(this);
        }
    };
    // @Override
    F_regContext.prototype.exitRule = function (listener) {
        if (listener.exitF_reg) {
            listener.exitF_reg(this);
        }
    };
    // @Override
    F_regContext.prototype.accept = function (visitor) {
        if (visitor.visitF_reg) {
            return visitor.visitF_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return F_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.F_regContext = F_regContext;
var S_regContext = /** @class */ (function (_super) {
    __extends(S_regContext, _super);
    function S_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    S_regContext.prototype.MODE1 = function () { return this.tryGetToken(SHARCParser.MODE1, 0); };
    S_regContext.prototype.MODE2 = function () { return this.tryGetToken(SHARCParser.MODE2, 0); };
    S_regContext.prototype.IRPTL = function () { return this.tryGetToken(SHARCParser.IRPTL, 0); };
    S_regContext.prototype.IMASK = function () { return this.tryGetToken(SHARCParser.IMASK, 0); };
    S_regContext.prototype.IMASKP = function () { return this.tryGetToken(SHARCParser.IMASKP, 0); };
    S_regContext.prototype.ASTAT = function () { return this.tryGetToken(SHARCParser.ASTAT, 0); };
    S_regContext.prototype.STKY = function () { return this.tryGetToken(SHARCParser.STKY, 0); };
    S_regContext.prototype.USTAT1 = function () { return this.tryGetToken(SHARCParser.USTAT1, 0); };
    S_regContext.prototype.USTAT2 = function () { return this.tryGetToken(SHARCParser.USTAT2, 0); };
    Object.defineProperty(S_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_s_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    S_regContext.prototype.enterRule = function (listener) {
        if (listener.enterS_reg) {
            listener.enterS_reg(this);
        }
    };
    // @Override
    S_regContext.prototype.exitRule = function (listener) {
        if (listener.exitS_reg) {
            listener.exitS_reg(this);
        }
    };
    // @Override
    S_regContext.prototype.accept = function (visitor) {
        if (visitor.visitS_reg) {
            return visitor.visitS_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return S_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.S_regContext = S_regContext;
var IaContext = /** @class */ (function (_super) {
    __extends(IaContext, _super);
    function IaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IaContext.prototype.I0 = function () { return this.tryGetToken(SHARCParser.I0, 0); };
    IaContext.prototype.I1 = function () { return this.tryGetToken(SHARCParser.I1, 0); };
    IaContext.prototype.I2 = function () { return this.tryGetToken(SHARCParser.I2, 0); };
    IaContext.prototype.I3 = function () { return this.tryGetToken(SHARCParser.I3, 0); };
    IaContext.prototype.I4 = function () { return this.tryGetToken(SHARCParser.I4, 0); };
    IaContext.prototype.I5 = function () { return this.tryGetToken(SHARCParser.I5, 0); };
    IaContext.prototype.I6 = function () { return this.tryGetToken(SHARCParser.I6, 0); };
    IaContext.prototype.I7 = function () { return this.tryGetToken(SHARCParser.I7, 0); };
    Object.defineProperty(IaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_ia; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IaContext.prototype.enterRule = function (listener) {
        if (listener.enterIa) {
            listener.enterIa(this);
        }
    };
    // @Override
    IaContext.prototype.exitRule = function (listener) {
        if (listener.exitIa) {
            listener.exitIa(this);
        }
    };
    // @Override
    IaContext.prototype.accept = function (visitor) {
        if (visitor.visitIa) {
            return visitor.visitIa(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IaContext = IaContext;
var MbContext = /** @class */ (function (_super) {
    __extends(MbContext, _super);
    function MbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MbContext.prototype.M0 = function () { return this.tryGetToken(SHARCParser.M0, 0); };
    MbContext.prototype.M1 = function () { return this.tryGetToken(SHARCParser.M1, 0); };
    MbContext.prototype.M2 = function () { return this.tryGetToken(SHARCParser.M2, 0); };
    MbContext.prototype.M3 = function () { return this.tryGetToken(SHARCParser.M3, 0); };
    MbContext.prototype.M4 = function () { return this.tryGetToken(SHARCParser.M4, 0); };
    MbContext.prototype.M5 = function () { return this.tryGetToken(SHARCParser.M5, 0); };
    MbContext.prototype.M6 = function () { return this.tryGetToken(SHARCParser.M6, 0); };
    MbContext.prototype.M7 = function () { return this.tryGetToken(SHARCParser.M7, 0); };
    Object.defineProperty(MbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MbContext.prototype.enterRule = function (listener) {
        if (listener.enterMb) {
            listener.enterMb(this);
        }
    };
    // @Override
    MbContext.prototype.exitRule = function (listener) {
        if (listener.exitMb) {
            listener.exitMb(this);
        }
    };
    // @Override
    MbContext.prototype.accept = function (visitor) {
        if (visitor.visitMb) {
            return visitor.visitMb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MbContext = MbContext;
var IcContext = /** @class */ (function (_super) {
    __extends(IcContext, _super);
    function IcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IcContext.prototype.I8 = function () { return this.tryGetToken(SHARCParser.I8, 0); };
    IcContext.prototype.I9 = function () { return this.tryGetToken(SHARCParser.I9, 0); };
    IcContext.prototype.I10 = function () { return this.tryGetToken(SHARCParser.I10, 0); };
    IcContext.prototype.I11 = function () { return this.tryGetToken(SHARCParser.I11, 0); };
    IcContext.prototype.I12 = function () { return this.tryGetToken(SHARCParser.I12, 0); };
    IcContext.prototype.I13 = function () { return this.tryGetToken(SHARCParser.I13, 0); };
    IcContext.prototype.I14 = function () { return this.tryGetToken(SHARCParser.I14, 0); };
    IcContext.prototype.I15 = function () { return this.tryGetToken(SHARCParser.I15, 0); };
    Object.defineProperty(IcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_ic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IcContext.prototype.enterRule = function (listener) {
        if (listener.enterIc) {
            listener.enterIc(this);
        }
    };
    // @Override
    IcContext.prototype.exitRule = function (listener) {
        if (listener.exitIc) {
            listener.exitIc(this);
        }
    };
    // @Override
    IcContext.prototype.accept = function (visitor) {
        if (visitor.visitIc) {
            return visitor.visitIc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IcContext = IcContext;
var MdContext = /** @class */ (function (_super) {
    __extends(MdContext, _super);
    function MdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MdContext.prototype.M8 = function () { return this.tryGetToken(SHARCParser.M8, 0); };
    MdContext.prototype.M9 = function () { return this.tryGetToken(SHARCParser.M9, 0); };
    MdContext.prototype.M10 = function () { return this.tryGetToken(SHARCParser.M10, 0); };
    MdContext.prototype.M11 = function () { return this.tryGetToken(SHARCParser.M11, 0); };
    MdContext.prototype.M12 = function () { return this.tryGetToken(SHARCParser.M12, 0); };
    MdContext.prototype.M13 = function () { return this.tryGetToken(SHARCParser.M13, 0); };
    MdContext.prototype.M14 = function () { return this.tryGetToken(SHARCParser.M14, 0); };
    MdContext.prototype.M15 = function () { return this.tryGetToken(SHARCParser.M15, 0); };
    Object.defineProperty(MdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_md; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MdContext.prototype.enterRule = function (listener) {
        if (listener.enterMd) {
            listener.enterMd(this);
        }
    };
    // @Override
    MdContext.prototype.exitRule = function (listener) {
        if (listener.exitMd) {
            listener.exitMd(this);
        }
    };
    // @Override
    MdContext.prototype.accept = function (visitor) {
        if (visitor.visitMd) {
            return visitor.visitMd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MdContext = MdContext;
var I_regContext = /** @class */ (function (_super) {
    __extends(I_regContext, _super);
    function I_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    I_regContext.prototype.ia = function () {
        return this.tryGetRuleContext(0, IaContext);
    };
    I_regContext.prototype.ic = function () {
        return this.tryGetRuleContext(0, IcContext);
    };
    Object.defineProperty(I_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_i_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    I_regContext.prototype.enterRule = function (listener) {
        if (listener.enterI_reg) {
            listener.enterI_reg(this);
        }
    };
    // @Override
    I_regContext.prototype.exitRule = function (listener) {
        if (listener.exitI_reg) {
            listener.exitI_reg(this);
        }
    };
    // @Override
    I_regContext.prototype.accept = function (visitor) {
        if (visitor.visitI_reg) {
            return visitor.visitI_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return I_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.I_regContext = I_regContext;
var M_regContext = /** @class */ (function (_super) {
    __extends(M_regContext, _super);
    function M_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    M_regContext.prototype.mb = function () {
        return this.tryGetRuleContext(0, MbContext);
    };
    M_regContext.prototype.md = function () {
        return this.tryGetRuleContext(0, MdContext);
    };
    Object.defineProperty(M_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_m_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    M_regContext.prototype.enterRule = function (listener) {
        if (listener.enterM_reg) {
            listener.enterM_reg(this);
        }
    };
    // @Override
    M_regContext.prototype.exitRule = function (listener) {
        if (listener.exitM_reg) {
            listener.exitM_reg(this);
        }
    };
    // @Override
    M_regContext.prototype.accept = function (visitor) {
        if (visitor.visitM_reg) {
            return visitor.visitM_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return M_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.M_regContext = M_regContext;
var Dag_regContext = /** @class */ (function (_super) {
    __extends(Dag_regContext, _super);
    function Dag_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dag_regContext.prototype.i_reg = function () {
        return this.tryGetRuleContext(0, I_regContext);
    };
    Dag_regContext.prototype.m_reg = function () {
        return this.tryGetRuleContext(0, M_regContext);
    };
    Dag_regContext.prototype.b_reg = function () {
        return this.tryGetRuleContext(0, B_regContext);
    };
    Dag_regContext.prototype.l_reg = function () {
        return this.tryGetRuleContext(0, L_regContext);
    };
    Object.defineProperty(Dag_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_dag_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dag_regContext.prototype.enterRule = function (listener) {
        if (listener.enterDag_reg) {
            listener.enterDag_reg(this);
        }
    };
    // @Override
    Dag_regContext.prototype.exitRule = function (listener) {
        if (listener.exitDag_reg) {
            listener.exitDag_reg(this);
        }
    };
    // @Override
    Dag_regContext.prototype.accept = function (visitor) {
        if (visitor.visitDag_reg) {
            return visitor.visitDag_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dag_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dag_regContext = Dag_regContext;
var D_regContext = /** @class */ (function (_super) {
    __extends(D_regContext, _super);
    function D_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_regContext.prototype.r_reg = function () {
        return this.tryGetRuleContext(0, R_regContext);
    };
    D_regContext.prototype.f_reg = function () {
        return this.tryGetRuleContext(0, F_regContext);
    };
    Object.defineProperty(D_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_d_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_regContext.prototype.enterRule = function (listener) {
        if (listener.enterD_reg) {
            listener.enterD_reg(this);
        }
    };
    // @Override
    D_regContext.prototype.exitRule = function (listener) {
        if (listener.exitD_reg) {
            listener.exitD_reg(this);
        }
    };
    // @Override
    D_regContext.prototype.accept = function (visitor) {
        if (visitor.visitD_reg) {
            return visitor.visitD_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_regContext = D_regContext;
var U_regContext = /** @class */ (function (_super) {
    __extends(U_regContext, _super);
    function U_regContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    U_regContext.prototype.d_reg = function () {
        return this.tryGetRuleContext(0, D_regContext);
    };
    U_regContext.prototype.PC = function () { return this.tryGetToken(SHARCParser.PC, 0); };
    U_regContext.prototype.PCSTK = function () { return this.tryGetToken(SHARCParser.PCSTK, 0); };
    U_regContext.prototype.PCSTKP = function () { return this.tryGetToken(SHARCParser.PCSTKP, 0); };
    U_regContext.prototype.FADDR = function () { return this.tryGetToken(SHARCParser.FADDR, 0); };
    U_regContext.prototype.DADDR = function () { return this.tryGetToken(SHARCParser.DADDR, 0); };
    U_regContext.prototype.LADDR = function () { return this.tryGetToken(SHARCParser.LADDR, 0); };
    U_regContext.prototype.CURLCNTR = function () { return this.tryGetToken(SHARCParser.CURLCNTR, 0); };
    U_regContext.prototype.LCNTR = function () { return this.tryGetToken(SHARCParser.LCNTR, 0); };
    U_regContext.prototype.dag_reg = function () {
        return this.tryGetRuleContext(0, Dag_regContext);
    };
    U_regContext.prototype.PX1 = function () { return this.tryGetToken(SHARCParser.PX1, 0); };
    U_regContext.prototype.PX2 = function () { return this.tryGetToken(SHARCParser.PX2, 0); };
    U_regContext.prototype.PX = function () { return this.tryGetToken(SHARCParser.PX, 0); };
    U_regContext.prototype.TPERIOD = function () { return this.tryGetToken(SHARCParser.TPERIOD, 0); };
    U_regContext.prototype.TCOUNT = function () { return this.tryGetToken(SHARCParser.TCOUNT, 0); };
    U_regContext.prototype.s_reg = function () {
        return this.tryGetRuleContext(0, S_regContext);
    };
    Object.defineProperty(U_regContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_u_reg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    U_regContext.prototype.enterRule = function (listener) {
        if (listener.enterU_reg) {
            listener.enterU_reg(this);
        }
    };
    // @Override
    U_regContext.prototype.exitRule = function (listener) {
        if (listener.exitU_reg) {
            listener.exitU_reg(this);
        }
    };
    // @Override
    U_regContext.prototype.accept = function (visitor) {
        if (visitor.visitU_reg) {
            return visitor.visitU_reg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return U_regContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.U_regContext = U_regContext;
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.ccondition = function () {
        return this.getRuleContext(0, CconditionContext);
    };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_condition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionContext = ConditionContext;
var CconditionContext = /** @class */ (function (_super) {
    __extends(CconditionContext, _super);
    function CconditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CconditionContext.prototype.EQ = function () { return this.tryGetToken(SHARCParser.EQ, 0); };
    CconditionContext.prototype.LT = function () { return this.tryGetToken(SHARCParser.LT, 0); };
    CconditionContext.prototype.LE = function () { return this.tryGetToken(SHARCParser.LE, 0); };
    CconditionContext.prototype.AC = function () { return this.tryGetToken(SHARCParser.AC, 0); };
    CconditionContext.prototype.AV = function () { return this.tryGetToken(SHARCParser.AV, 0); };
    CconditionContext.prototype.MV = function () { return this.tryGetToken(SHARCParser.MV, 0); };
    CconditionContext.prototype.MS = function () { return this.tryGetToken(SHARCParser.MS, 0); };
    CconditionContext.prototype.SV = function () { return this.tryGetToken(SHARCParser.SV, 0); };
    CconditionContext.prototype.SZ = function () { return this.tryGetToken(SHARCParser.SZ, 0); };
    CconditionContext.prototype.FLAG0_IN = function () { return this.tryGetToken(SHARCParser.FLAG0_IN, 0); };
    CconditionContext.prototype.FLAG1_IN = function () { return this.tryGetToken(SHARCParser.FLAG1_IN, 0); };
    CconditionContext.prototype.FLAG2_IN = function () { return this.tryGetToken(SHARCParser.FLAG2_IN, 0); };
    CconditionContext.prototype.FLAG3_IN = function () { return this.tryGetToken(SHARCParser.FLAG3_IN, 0); };
    CconditionContext.prototype.TF = function () { return this.tryGetToken(SHARCParser.TF, 0); };
    CconditionContext.prototype.BM = function () { return this.tryGetToken(SHARCParser.BM, 0); };
    CconditionContext.prototype.LCE = function () { return this.tryGetToken(SHARCParser.LCE, 0); };
    CconditionContext.prototype.NOT = function () { return this.tryGetToken(SHARCParser.NOT, 0); };
    CconditionContext.prototype.NE = function () { return this.tryGetToken(SHARCParser.NE, 0); };
    CconditionContext.prototype.GE = function () { return this.tryGetToken(SHARCParser.GE, 0); };
    CconditionContext.prototype.GT = function () { return this.tryGetToken(SHARCParser.GT, 0); };
    CconditionContext.prototype.NBM = function () { return this.tryGetToken(SHARCParser.NBM, 0); };
    CconditionContext.prototype.FOREVER = function () { return this.tryGetToken(SHARCParser.FOREVER, 0); };
    CconditionContext.prototype.TRUE = function () { return this.tryGetToken(SHARCParser.TRUE, 0); };
    Object.defineProperty(CconditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_ccondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CconditionContext.prototype.enterRule = function (listener) {
        if (listener.enterCcondition) {
            listener.enterCcondition(this);
        }
    };
    // @Override
    CconditionContext.prototype.exitRule = function (listener) {
        if (listener.exitCcondition) {
            listener.exitCcondition(this);
        }
    };
    // @Override
    CconditionContext.prototype.accept = function (visitor) {
        if (visitor.visitCcondition) {
            return visitor.visitCcondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CconditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CconditionContext = CconditionContext;
var Multi_mod1Context = /** @class */ (function (_super) {
    __extends(Multi_mod1Context, _super);
    function Multi_mod1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_mod1Context.prototype.multi_mod1_ = function () {
        return this.getRuleContext(0, Multi_mod1_Context);
    };
    Object.defineProperty(Multi_mod1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_mod1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_mod1Context.prototype.enterRule = function (listener) {
        if (listener.enterMulti_mod1) {
            listener.enterMulti_mod1(this);
        }
    };
    // @Override
    Multi_mod1Context.prototype.exitRule = function (listener) {
        if (listener.exitMulti_mod1) {
            listener.exitMulti_mod1(this);
        }
    };
    // @Override
    Multi_mod1Context.prototype.accept = function (visitor) {
        if (visitor.visitMulti_mod1) {
            return visitor.visitMulti_mod1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_mod1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_mod1Context = Multi_mod1Context;
var Multi_mod1_Context = /** @class */ (function (_super) {
    __extends(Multi_mod1_Context, _super);
    function Multi_mod1_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_mod1_Context.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Multi_mod1_Context.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Multi_mod1_Context.prototype.SI = function () { return this.tryGetToken(SHARCParser.SI, 0); };
    Multi_mod1_Context.prototype.UI = function () { return this.tryGetToken(SHARCParser.UI, 0); };
    Multi_mod1_Context.prototype.SF = function () { return this.tryGetToken(SHARCParser.SF, 0); };
    Multi_mod1_Context.prototype.UF = function () { return this.tryGetToken(SHARCParser.UF, 0); };
    Object.defineProperty(Multi_mod1_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_mod1_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_mod1_Context.prototype.enterRule = function (listener) {
        if (listener.enterMulti_mod1_) {
            listener.enterMulti_mod1_(this);
        }
    };
    // @Override
    Multi_mod1_Context.prototype.exitRule = function (listener) {
        if (listener.exitMulti_mod1_) {
            listener.exitMulti_mod1_(this);
        }
    };
    // @Override
    Multi_mod1_Context.prototype.accept = function (visitor) {
        if (visitor.visitMulti_mod1_) {
            return visitor.visitMulti_mod1_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_mod1_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_mod1_Context = Multi_mod1_Context;
var Multi_mod2Context = /** @class */ (function (_super) {
    __extends(Multi_mod2Context, _super);
    function Multi_mod2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_mod2Context.prototype.multi_mod2_ = function () {
        return this.getRuleContext(0, Multi_mod2_Context);
    };
    Object.defineProperty(Multi_mod2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_mod2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_mod2Context.prototype.enterRule = function (listener) {
        if (listener.enterMulti_mod2) {
            listener.enterMulti_mod2(this);
        }
    };
    // @Override
    Multi_mod2Context.prototype.exitRule = function (listener) {
        if (listener.exitMulti_mod2) {
            listener.exitMulti_mod2(this);
        }
    };
    // @Override
    Multi_mod2Context.prototype.accept = function (visitor) {
        if (visitor.visitMulti_mod2) {
            return visitor.visitMulti_mod2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_mod2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_mod2Context = Multi_mod2Context;
var Multi_mod2_Context = /** @class */ (function (_super) {
    __extends(Multi_mod2_Context, _super);
    function Multi_mod2_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multi_mod2_Context.prototype.LPARENTHESE = function () { return this.getToken(SHARCParser.LPARENTHESE, 0); };
    Multi_mod2_Context.prototype.RPARENTHESE = function () { return this.getToken(SHARCParser.RPARENTHESE, 0); };
    Multi_mod2_Context.prototype.SSI = function () { return this.tryGetToken(SHARCParser.SSI, 0); };
    Multi_mod2_Context.prototype.SUI = function () { return this.tryGetToken(SHARCParser.SUI, 0); };
    Multi_mod2_Context.prototype.USI = function () { return this.tryGetToken(SHARCParser.USI, 0); };
    Multi_mod2_Context.prototype.UUI = function () { return this.tryGetToken(SHARCParser.UUI, 0); };
    Multi_mod2_Context.prototype.SSF = function () { return this.tryGetToken(SHARCParser.SSF, 0); };
    Multi_mod2_Context.prototype.SUF = function () { return this.tryGetToken(SHARCParser.SUF, 0); };
    Multi_mod2_Context.prototype.USF = function () { return this.tryGetToken(SHARCParser.USF, 0); };
    Multi_mod2_Context.prototype.UUF = function () { return this.tryGetToken(SHARCParser.UUF, 0); };
    Multi_mod2_Context.prototype.SSFR = function () { return this.tryGetToken(SHARCParser.SSFR, 0); };
    Multi_mod2_Context.prototype.SUFR = function () { return this.tryGetToken(SHARCParser.SUFR, 0); };
    Multi_mod2_Context.prototype.USFR = function () { return this.tryGetToken(SHARCParser.USFR, 0); };
    Multi_mod2_Context.prototype.UUFR = function () { return this.tryGetToken(SHARCParser.UUFR, 0); };
    Object.defineProperty(Multi_mod2_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_multi_mod2_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multi_mod2_Context.prototype.enterRule = function (listener) {
        if (listener.enterMulti_mod2_) {
            listener.enterMulti_mod2_(this);
        }
    };
    // @Override
    Multi_mod2_Context.prototype.exitRule = function (listener) {
        if (listener.exitMulti_mod2_) {
            listener.exitMulti_mod2_(this);
        }
    };
    // @Override
    Multi_mod2_Context.prototype.accept = function (visitor) {
        if (visitor.visitMulti_mod2_) {
            return visitor.visitMulti_mod2_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multi_mod2_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multi_mod2_Context = Multi_mod2_Context;
var R3_0Context = /** @class */ (function (_super) {
    __extends(R3_0Context, _super);
    function R3_0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    R3_0Context.prototype.R0 = function () { return this.tryGetToken(SHARCParser.R0, 0); };
    R3_0Context.prototype.R2 = function () { return this.tryGetToken(SHARCParser.R2, 0); };
    R3_0Context.prototype.R3 = function () { return this.tryGetToken(SHARCParser.R3, 0); };
    Object.defineProperty(R3_0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_r3_0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    R3_0Context.prototype.enterRule = function (listener) {
        if (listener.enterR3_0) {
            listener.enterR3_0(this);
        }
    };
    // @Override
    R3_0Context.prototype.exitRule = function (listener) {
        if (listener.exitR3_0) {
            listener.exitR3_0(this);
        }
    };
    // @Override
    R3_0Context.prototype.accept = function (visitor) {
        if (visitor.visitR3_0) {
            return visitor.visitR3_0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return R3_0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.R3_0Context = R3_0Context;
var R7_4Context = /** @class */ (function (_super) {
    __extends(R7_4Context, _super);
    function R7_4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    R7_4Context.prototype.R4 = function () { return this.tryGetToken(SHARCParser.R4, 0); };
    R7_4Context.prototype.R5 = function () { return this.tryGetToken(SHARCParser.R5, 0); };
    R7_4Context.prototype.R6 = function () { return this.tryGetToken(SHARCParser.R6, 0); };
    R7_4Context.prototype.R7 = function () { return this.tryGetToken(SHARCParser.R7, 0); };
    Object.defineProperty(R7_4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_r7_4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    R7_4Context.prototype.enterRule = function (listener) {
        if (listener.enterR7_4) {
            listener.enterR7_4(this);
        }
    };
    // @Override
    R7_4Context.prototype.exitRule = function (listener) {
        if (listener.exitR7_4) {
            listener.exitR7_4(this);
        }
    };
    // @Override
    R7_4Context.prototype.accept = function (visitor) {
        if (visitor.visitR7_4) {
            return visitor.visitR7_4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return R7_4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.R7_4Context = R7_4Context;
var R11_8Context = /** @class */ (function (_super) {
    __extends(R11_8Context, _super);
    function R11_8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    R11_8Context.prototype.R8 = function () { return this.tryGetToken(SHARCParser.R8, 0); };
    R11_8Context.prototype.R9 = function () { return this.tryGetToken(SHARCParser.R9, 0); };
    R11_8Context.prototype.R10 = function () { return this.tryGetToken(SHARCParser.R10, 0); };
    R11_8Context.prototype.R11 = function () { return this.tryGetToken(SHARCParser.R11, 0); };
    Object.defineProperty(R11_8Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_r11_8; },
        enumerable: true,
        configurable: true
    });
    // @Override
    R11_8Context.prototype.enterRule = function (listener) {
        if (listener.enterR11_8) {
            listener.enterR11_8(this);
        }
    };
    // @Override
    R11_8Context.prototype.exitRule = function (listener) {
        if (listener.exitR11_8) {
            listener.exitR11_8(this);
        }
    };
    // @Override
    R11_8Context.prototype.accept = function (visitor) {
        if (visitor.visitR11_8) {
            return visitor.visitR11_8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return R11_8Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.R11_8Context = R11_8Context;
var R15_12Context = /** @class */ (function (_super) {
    __extends(R15_12Context, _super);
    function R15_12Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    R15_12Context.prototype.R12 = function () { return this.tryGetToken(SHARCParser.R12, 0); };
    R15_12Context.prototype.R13 = function () { return this.tryGetToken(SHARCParser.R13, 0); };
    R15_12Context.prototype.R14 = function () { return this.tryGetToken(SHARCParser.R14, 0); };
    R15_12Context.prototype.R15 = function () { return this.tryGetToken(SHARCParser.R15, 0); };
    Object.defineProperty(R15_12Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_r15_12; },
        enumerable: true,
        configurable: true
    });
    // @Override
    R15_12Context.prototype.enterRule = function (listener) {
        if (listener.enterR15_12) {
            listener.enterR15_12(this);
        }
    };
    // @Override
    R15_12Context.prototype.exitRule = function (listener) {
        if (listener.exitR15_12) {
            listener.exitR15_12(this);
        }
    };
    // @Override
    R15_12Context.prototype.accept = function (visitor) {
        if (visitor.visitR15_12) {
            return visitor.visitR15_12(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return R15_12Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.R15_12Context = R15_12Context;
var F3_0Context = /** @class */ (function (_super) {
    __extends(F3_0Context, _super);
    function F3_0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    F3_0Context.prototype.F0 = function () { return this.tryGetToken(SHARCParser.F0, 0); };
    F3_0Context.prototype.F2 = function () { return this.tryGetToken(SHARCParser.F2, 0); };
    F3_0Context.prototype.F3 = function () { return this.tryGetToken(SHARCParser.F3, 0); };
    Object.defineProperty(F3_0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_f3_0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    F3_0Context.prototype.enterRule = function (listener) {
        if (listener.enterF3_0) {
            listener.enterF3_0(this);
        }
    };
    // @Override
    F3_0Context.prototype.exitRule = function (listener) {
        if (listener.exitF3_0) {
            listener.exitF3_0(this);
        }
    };
    // @Override
    F3_0Context.prototype.accept = function (visitor) {
        if (visitor.visitF3_0) {
            return visitor.visitF3_0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return F3_0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.F3_0Context = F3_0Context;
var F7_4Context = /** @class */ (function (_super) {
    __extends(F7_4Context, _super);
    function F7_4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    F7_4Context.prototype.F4 = function () { return this.tryGetToken(SHARCParser.F4, 0); };
    F7_4Context.prototype.F5 = function () { return this.tryGetToken(SHARCParser.F5, 0); };
    F7_4Context.prototype.F6 = function () { return this.tryGetToken(SHARCParser.F6, 0); };
    F7_4Context.prototype.F7 = function () { return this.tryGetToken(SHARCParser.F7, 0); };
    Object.defineProperty(F7_4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_f7_4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    F7_4Context.prototype.enterRule = function (listener) {
        if (listener.enterF7_4) {
            listener.enterF7_4(this);
        }
    };
    // @Override
    F7_4Context.prototype.exitRule = function (listener) {
        if (listener.exitF7_4) {
            listener.exitF7_4(this);
        }
    };
    // @Override
    F7_4Context.prototype.accept = function (visitor) {
        if (visitor.visitF7_4) {
            return visitor.visitF7_4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return F7_4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.F7_4Context = F7_4Context;
var F11_8Context = /** @class */ (function (_super) {
    __extends(F11_8Context, _super);
    function F11_8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    F11_8Context.prototype.F8 = function () { return this.tryGetToken(SHARCParser.F8, 0); };
    F11_8Context.prototype.F9 = function () { return this.tryGetToken(SHARCParser.F9, 0); };
    F11_8Context.prototype.F10 = function () { return this.tryGetToken(SHARCParser.F10, 0); };
    F11_8Context.prototype.F11 = function () { return this.tryGetToken(SHARCParser.F11, 0); };
    Object.defineProperty(F11_8Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_f11_8; },
        enumerable: true,
        configurable: true
    });
    // @Override
    F11_8Context.prototype.enterRule = function (listener) {
        if (listener.enterF11_8) {
            listener.enterF11_8(this);
        }
    };
    // @Override
    F11_8Context.prototype.exitRule = function (listener) {
        if (listener.exitF11_8) {
            listener.exitF11_8(this);
        }
    };
    // @Override
    F11_8Context.prototype.accept = function (visitor) {
        if (visitor.visitF11_8) {
            return visitor.visitF11_8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return F11_8Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.F11_8Context = F11_8Context;
var F15_12Context = /** @class */ (function (_super) {
    __extends(F15_12Context, _super);
    function F15_12Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    F15_12Context.prototype.F12 = function () { return this.tryGetToken(SHARCParser.F12, 0); };
    F15_12Context.prototype.F13 = function () { return this.tryGetToken(SHARCParser.F13, 0); };
    F15_12Context.prototype.F14 = function () { return this.tryGetToken(SHARCParser.F14, 0); };
    F15_12Context.prototype.F15 = function () { return this.tryGetToken(SHARCParser.F15, 0); };
    Object.defineProperty(F15_12Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_f15_12; },
        enumerable: true,
        configurable: true
    });
    // @Override
    F15_12Context.prototype.enterRule = function (listener) {
        if (listener.enterF15_12) {
            listener.enterF15_12(this);
        }
    };
    // @Override
    F15_12Context.prototype.exitRule = function (listener) {
        if (listener.exitF15_12) {
            listener.exitF15_12(this);
        }
    };
    // @Override
    F15_12Context.prototype.accept = function (visitor) {
        if (visitor.visitF15_12) {
            return visitor.visitF15_12(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return F15_12Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.F15_12Context = F15_12Context;
var AddrContext = /** @class */ (function (_super) {
    __extends(AddrContext, _super);
    function AddrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddrContext.prototype.ID = function () { return this.tryGetToken(SHARCParser.ID, 0); };
    AddrContext.prototype.INT = function () { return this.tryGetToken(SHARCParser.INT, 0); };
    Object.defineProperty(AddrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_addr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddrContext.prototype.enterRule = function (listener) {
        if (listener.enterAddr) {
            listener.enterAddr(this);
        }
    };
    // @Override
    AddrContext.prototype.exitRule = function (listener) {
        if (listener.exitAddr) {
            listener.exitAddr(this);
        }
    };
    // @Override
    AddrContext.prototype.accept = function (visitor) {
        if (visitor.visitAddr) {
            return visitor.visitAddr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddrContext = AddrContext;
var MrfContext = /** @class */ (function (_super) {
    __extends(MrfContext, _super);
    function MrfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MrfContext.prototype.MR0F = function () { return this.tryGetToken(SHARCParser.MR0F, 0); };
    MrfContext.prototype.MR1F = function () { return this.tryGetToken(SHARCParser.MR1F, 0); };
    MrfContext.prototype.MR2F = function () { return this.tryGetToken(SHARCParser.MR2F, 0); };
    Object.defineProperty(MrfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mrf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MrfContext.prototype.enterRule = function (listener) {
        if (listener.enterMrf) {
            listener.enterMrf(this);
        }
    };
    // @Override
    MrfContext.prototype.exitRule = function (listener) {
        if (listener.exitMrf) {
            listener.exitMrf(this);
        }
    };
    // @Override
    MrfContext.prototype.accept = function (visitor) {
        if (visitor.visitMrf) {
            return visitor.visitMrf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MrfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MrfContext = MrfContext;
var MrbContext = /** @class */ (function (_super) {
    __extends(MrbContext, _super);
    function MrbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MrbContext.prototype.MR0B = function () { return this.tryGetToken(SHARCParser.MR0B, 0); };
    MrbContext.prototype.MR1B = function () { return this.tryGetToken(SHARCParser.MR1B, 0); };
    MrbContext.prototype.MR2B = function () { return this.tryGetToken(SHARCParser.MR2B, 0); };
    Object.defineProperty(MrbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SHARCParser.RULE_mrb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MrbContext.prototype.enterRule = function (listener) {
        if (listener.enterMrb) {
            listener.enterMrb(this);
        }
    };
    // @Override
    MrbContext.prototype.exitRule = function (listener) {
        if (listener.exitMrb) {
            listener.exitMrb(this);
        }
    };
    // @Override
    MrbContext.prototype.accept = function (visitor) {
        if (visitor.visitMrb) {
            return visitor.visitMrb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MrbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MrbContext = MrbContext;
