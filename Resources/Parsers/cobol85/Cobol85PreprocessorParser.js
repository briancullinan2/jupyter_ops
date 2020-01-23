"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cobol85/Cobol85Preprocessor.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Cobol85PreprocessorParser = /** @class */ (function (_super) {
    __extends(Cobol85PreprocessorParser, _super);
    function Cobol85PreprocessorParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(Cobol85PreprocessorParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(Cobol85PreprocessorParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return Cobol85PreprocessorParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cobol85PreprocessorParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Cobol85Preprocessor.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cobol85PreprocessorParser.prototype, "ruleNames", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cobol85PreprocessorParser.prototype, "serializedATN", {
        // @Override
        get: function () { return Cobol85PreprocessorParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.startRule = function () {
        var _localctx = new StartRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, Cobol85PreprocessorParser.RULE_startRule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Cobol85PreprocessorParser.ADATA) | (1 << Cobol85PreprocessorParser.ADV) | (1 << Cobol85PreprocessorParser.ALIAS) | (1 << Cobol85PreprocessorParser.ANSI) | (1 << Cobol85PreprocessorParser.ANY) | (1 << Cobol85PreprocessorParser.APOST) | (1 << Cobol85PreprocessorParser.AR) | (1 << Cobol85PreprocessorParser.ARITH) | (1 << Cobol85PreprocessorParser.AUTO) | (1 << Cobol85PreprocessorParser.AWO) | (1 << Cobol85PreprocessorParser.BIN) | (1 << Cobol85PreprocessorParser.BLOCK0) | (1 << Cobol85PreprocessorParser.BUF) | (1 << Cobol85PreprocessorParser.BUFSIZE) | (1 << Cobol85PreprocessorParser.BY) | (1 << Cobol85PreprocessorParser.CBL) | (1 << Cobol85PreprocessorParser.CBLCARD) | (1 << Cobol85PreprocessorParser.CO) | (1 << Cobol85PreprocessorParser.COBOL2) | (1 << Cobol85PreprocessorParser.COBOL3) | (1 << Cobol85PreprocessorParser.CODEPAGE) | (1 << Cobol85PreprocessorParser.COMPAT) | (1 << Cobol85PreprocessorParser.COMPILE) | (1 << Cobol85PreprocessorParser.COPY) | (1 << Cobol85PreprocessorParser.CP) | (1 << Cobol85PreprocessorParser.CPP) | (1 << Cobol85PreprocessorParser.CPSM) | (1 << Cobol85PreprocessorParser.CS) | (1 << Cobol85PreprocessorParser.CURR) | (1 << Cobol85PreprocessorParser.CURRENCY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Cobol85PreprocessorParser.DATA - 32)) | (1 << (Cobol85PreprocessorParser.DATEPROC - 32)) | (1 << (Cobol85PreprocessorParser.DBCS - 32)) | (1 << (Cobol85PreprocessorParser.DD - 32)) | (1 << (Cobol85PreprocessorParser.DEBUG - 32)) | (1 << (Cobol85PreprocessorParser.DECK - 32)) | (1 << (Cobol85PreprocessorParser.DIAGTRUNC - 32)) | (1 << (Cobol85PreprocessorParser.DLI - 32)) | (1 << (Cobol85PreprocessorParser.DLL - 32)) | (1 << (Cobol85PreprocessorParser.DP - 32)) | (1 << (Cobol85PreprocessorParser.DTR - 32)) | (1 << (Cobol85PreprocessorParser.DU - 32)) | (1 << (Cobol85PreprocessorParser.DUMP - 32)) | (1 << (Cobol85PreprocessorParser.DYN - 32)) | (1 << (Cobol85PreprocessorParser.DYNAM - 32)) | (1 << (Cobol85PreprocessorParser.EDF - 32)) | (1 << (Cobol85PreprocessorParser.EJECT - 32)) | (1 << (Cobol85PreprocessorParser.EJPD - 32)) | (1 << (Cobol85PreprocessorParser.EN - 32)) | (1 << (Cobol85PreprocessorParser.ENGLISH - 32)) | (1 << (Cobol85PreprocessorParser.EPILOG - 32)) | (1 << (Cobol85PreprocessorParser.EXCI - 32)) | (1 << (Cobol85PreprocessorParser.EXEC - 32)) | (1 << (Cobol85PreprocessorParser.EXIT - 32)) | (1 << (Cobol85PreprocessorParser.EXP - 32)) | (1 << (Cobol85PreprocessorParser.EXPORTALL - 32)) | (1 << (Cobol85PreprocessorParser.EXTEND - 32)) | (1 << (Cobol85PreprocessorParser.FASTSRT - 32)) | (1 << (Cobol85PreprocessorParser.FLAG - 32)) | (1 << (Cobol85PreprocessorParser.FLAGSTD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Cobol85PreprocessorParser.FSRT - 64)) | (1 << (Cobol85PreprocessorParser.FULL - 64)) | (1 << (Cobol85PreprocessorParser.GDS - 64)) | (1 << (Cobol85PreprocessorParser.GRAPHIC - 64)) | (1 << (Cobol85PreprocessorParser.HOOK - 64)) | (1 << (Cobol85PreprocessorParser.IN - 64)) | (1 << (Cobol85PreprocessorParser.INTDATE - 64)) | (1 << (Cobol85PreprocessorParser.JA - 64)) | (1 << (Cobol85PreprocessorParser.JP - 64)) | (1 << (Cobol85PreprocessorParser.KA - 64)) | (1 << (Cobol85PreprocessorParser.LANG - 64)) | (1 << (Cobol85PreprocessorParser.LANGUAGE - 64)) | (1 << (Cobol85PreprocessorParser.LC - 64)) | (1 << (Cobol85PreprocessorParser.LENGTH - 64)) | (1 << (Cobol85PreprocessorParser.LIB - 64)) | (1 << (Cobol85PreprocessorParser.LILIAN - 64)) | (1 << (Cobol85PreprocessorParser.LIN - 64)) | (1 << (Cobol85PreprocessorParser.LINECOUNT - 64)) | (1 << (Cobol85PreprocessorParser.LINKAGE - 64)) | (1 << (Cobol85PreprocessorParser.LIST - 64)) | (1 << (Cobol85PreprocessorParser.LM - 64)) | (1 << (Cobol85PreprocessorParser.LONGMIXED - 64)) | (1 << (Cobol85PreprocessorParser.LONGUPPER - 64)) | (1 << (Cobol85PreprocessorParser.LPARENCHAR - 64)) | (1 << (Cobol85PreprocessorParser.LU - 64)) | (1 << (Cobol85PreprocessorParser.MAP - 64)) | (1 << (Cobol85PreprocessorParser.MARGINS - 64)) | (1 << (Cobol85PreprocessorParser.MAX - 64)) | (1 << (Cobol85PreprocessorParser.MD - 64)) | (1 << (Cobol85PreprocessorParser.MDECK - 64)) | (1 << (Cobol85PreprocessorParser.MIG - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (Cobol85PreprocessorParser.MIXED - 96)) | (1 << (Cobol85PreprocessorParser.NAME - 96)) | (1 << (Cobol85PreprocessorParser.NAT - 96)) | (1 << (Cobol85PreprocessorParser.NATIONAL - 96)) | (1 << (Cobol85PreprocessorParser.NATLANG - 96)) | (1 << (Cobol85PreprocessorParser.NN - 96)) | (1 << (Cobol85PreprocessorParser.NO - 96)) | (1 << (Cobol85PreprocessorParser.NOADATA - 96)) | (1 << (Cobol85PreprocessorParser.NOADV - 96)) | (1 << (Cobol85PreprocessorParser.NOALIAS - 96)) | (1 << (Cobol85PreprocessorParser.NOAWO - 96)) | (1 << (Cobol85PreprocessorParser.NOBLOCK0 - 96)) | (1 << (Cobol85PreprocessorParser.NOC - 96)) | (1 << (Cobol85PreprocessorParser.NOCBLCARD - 96)) | (1 << (Cobol85PreprocessorParser.NOCICS - 96)) | (1 << (Cobol85PreprocessorParser.NOCMPR2 - 96)) | (1 << (Cobol85PreprocessorParser.NOCOMPILE - 96)) | (1 << (Cobol85PreprocessorParser.NOCPSM - 96)) | (1 << (Cobol85PreprocessorParser.NOCURR - 96)) | (1 << (Cobol85PreprocessorParser.NOCURRENCY - 96)) | (1 << (Cobol85PreprocessorParser.NOD - 96)) | (1 << (Cobol85PreprocessorParser.NODATEPROC - 96)) | (1 << (Cobol85PreprocessorParser.NODBCS - 96)) | (1 << (Cobol85PreprocessorParser.NODE - 96)) | (1 << (Cobol85PreprocessorParser.NODEBUG - 96)) | (1 << (Cobol85PreprocessorParser.NODECK - 96)) | (1 << (Cobol85PreprocessorParser.NODIAGTRUNC - 96)) | (1 << (Cobol85PreprocessorParser.NODLL - 96)) | (1 << (Cobol85PreprocessorParser.NODU - 96)) | (1 << (Cobol85PreprocessorParser.NODUMP - 96)) | (1 << (Cobol85PreprocessorParser.NODP - 96)) | (1 << (Cobol85PreprocessorParser.NODTR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (Cobol85PreprocessorParser.NODYN - 128)) | (1 << (Cobol85PreprocessorParser.NODYNAM - 128)) | (1 << (Cobol85PreprocessorParser.NOEDF - 128)) | (1 << (Cobol85PreprocessorParser.NOEJPD - 128)) | (1 << (Cobol85PreprocessorParser.NOEPILOG - 128)) | (1 << (Cobol85PreprocessorParser.NOEXIT - 128)) | (1 << (Cobol85PreprocessorParser.NOEXP - 128)) | (1 << (Cobol85PreprocessorParser.NOEXPORTALL - 128)) | (1 << (Cobol85PreprocessorParser.NOF - 128)) | (1 << (Cobol85PreprocessorParser.NOFASTSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOFEPI - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGMIG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGSTD - 128)) | (1 << (Cobol85PreprocessorParser.NOFSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOGRAPHIC - 128)) | (1 << (Cobol85PreprocessorParser.NOHOOK - 128)) | (1 << (Cobol85PreprocessorParser.NOLENGTH - 128)) | (1 << (Cobol85PreprocessorParser.NOLIB - 128)) | (1 << (Cobol85PreprocessorParser.NOLINKAGE - 128)) | (1 << (Cobol85PreprocessorParser.NOLIST - 128)) | (1 << (Cobol85PreprocessorParser.NOMAP - 128)) | (1 << (Cobol85PreprocessorParser.NOMD - 128)) | (1 << (Cobol85PreprocessorParser.NOMDECK - 128)) | (1 << (Cobol85PreprocessorParser.NONAME - 128)) | (1 << (Cobol85PreprocessorParser.NONUM - 128)) | (1 << (Cobol85PreprocessorParser.NONUMBER - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJ - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJECT - 128)) | (1 << (Cobol85PreprocessorParser.NOOFF - 128)) | (1 << (Cobol85PreprocessorParser.NOOFFSET - 128)) | (1 << (Cobol85PreprocessorParser.NOOPSEQUENCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (Cobol85PreprocessorParser.NOOPT - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIMIZE - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIONS - 160)) | (1 << (Cobol85PreprocessorParser.NOP - 160)) | (1 << (Cobol85PreprocessorParser.NOPFD - 160)) | (1 << (Cobol85PreprocessorParser.NOPROLOG - 160)) | (1 << (Cobol85PreprocessorParser.NORENT - 160)) | (1 << (Cobol85PreprocessorParser.NOS - 160)) | (1 << (Cobol85PreprocessorParser.NOSEP - 160)) | (1 << (Cobol85PreprocessorParser.NOSEPARATE - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQ - 160)) | (1 << (Cobol85PreprocessorParser.NOSOURCE - 160)) | (1 << (Cobol85PreprocessorParser.NOSPIE - 160)) | (1 << (Cobol85PreprocessorParser.NOSQL - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLC - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLCCSID - 160)) | (1 << (Cobol85PreprocessorParser.NOSSR - 160)) | (1 << (Cobol85PreprocessorParser.NOSSRANGE - 160)) | (1 << (Cobol85PreprocessorParser.NOSTDTRUNC - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQUENCE - 160)) | (1 << (Cobol85PreprocessorParser.NOTERM - 160)) | (1 << (Cobol85PreprocessorParser.NOTERMINAL - 160)) | (1 << (Cobol85PreprocessorParser.NOTEST - 160)) | (1 << (Cobol85PreprocessorParser.NOTHREAD - 160)) | (1 << (Cobol85PreprocessorParser.NOTRIG - 160)) | (1 << (Cobol85PreprocessorParser.NOVBREF - 160)) | (1 << (Cobol85PreprocessorParser.NOWORD - 160)) | (1 << (Cobol85PreprocessorParser.NOX - 160)) | (1 << (Cobol85PreprocessorParser.NOXREF - 160)) | (1 << (Cobol85PreprocessorParser.NOZWB - 160)) | (1 << (Cobol85PreprocessorParser.NS - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (Cobol85PreprocessorParser.NSEQ - 192)) | (1 << (Cobol85PreprocessorParser.NSYMBOL - 192)) | (1 << (Cobol85PreprocessorParser.NUM - 192)) | (1 << (Cobol85PreprocessorParser.NUMBER - 192)) | (1 << (Cobol85PreprocessorParser.NUMPROC - 192)) | (1 << (Cobol85PreprocessorParser.OBJ - 192)) | (1 << (Cobol85PreprocessorParser.OBJECT - 192)) | (1 << (Cobol85PreprocessorParser.OF - 192)) | (1 << (Cobol85PreprocessorParser.OFF - 192)) | (1 << (Cobol85PreprocessorParser.OFFSET - 192)) | (1 << (Cobol85PreprocessorParser.ON - 192)) | (1 << (Cobol85PreprocessorParser.OP - 192)) | (1 << (Cobol85PreprocessorParser.OPMARGINS - 192)) | (1 << (Cobol85PreprocessorParser.OPSEQUENCE - 192)) | (1 << (Cobol85PreprocessorParser.OPT - 192)) | (1 << (Cobol85PreprocessorParser.OPTFILE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIMIZE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIONS - 192)) | (1 << (Cobol85PreprocessorParser.OUT - 192)) | (1 << (Cobol85PreprocessorParser.OUTDD - 192)) | (1 << (Cobol85PreprocessorParser.PFD - 192)) | (1 << (Cobol85PreprocessorParser.PPTDBG - 192)) | (1 << (Cobol85PreprocessorParser.PGMN - 192)) | (1 << (Cobol85PreprocessorParser.PGMNAME - 192)) | (1 << (Cobol85PreprocessorParser.PROCESS - 192)) | (1 << (Cobol85PreprocessorParser.PROLOG - 192)) | (1 << (Cobol85PreprocessorParser.QUOTE - 192)) | (1 << (Cobol85PreprocessorParser.RENT - 192)) | (1 << (Cobol85PreprocessorParser.REPLACE - 192)) | (1 << (Cobol85PreprocessorParser.REPLACING - 192)) | (1 << (Cobol85PreprocessorParser.RMODE - 192)) | (1 << (Cobol85PreprocessorParser.RPARENCHAR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (Cobol85PreprocessorParser.SEP - 224)) | (1 << (Cobol85PreprocessorParser.SEPARATE - 224)) | (1 << (Cobol85PreprocessorParser.SEQ - 224)) | (1 << (Cobol85PreprocessorParser.SEQUENCE - 224)) | (1 << (Cobol85PreprocessorParser.SHORT - 224)) | (1 << (Cobol85PreprocessorParser.SIZE - 224)) | (1 << (Cobol85PreprocessorParser.SOURCE - 224)) | (1 << (Cobol85PreprocessorParser.SP - 224)) | (1 << (Cobol85PreprocessorParser.SPACE - 224)) | (1 << (Cobol85PreprocessorParser.SPIE - 224)) | (1 << (Cobol85PreprocessorParser.SQL - 224)) | (1 << (Cobol85PreprocessorParser.SQLC - 224)) | (1 << (Cobol85PreprocessorParser.SQLCCSID - 224)) | (1 << (Cobol85PreprocessorParser.SKIP1 - 224)) | (1 << (Cobol85PreprocessorParser.SKIP2 - 224)) | (1 << (Cobol85PreprocessorParser.SKIP3 - 224)) | (1 << (Cobol85PreprocessorParser.SS - 224)) | (1 << (Cobol85PreprocessorParser.SSR - 224)) | (1 << (Cobol85PreprocessorParser.SSRANGE - 224)) | (1 << (Cobol85PreprocessorParser.STD - 224)) | (1 << (Cobol85PreprocessorParser.SYSEIB - 224)) | (1 << (Cobol85PreprocessorParser.SZ - 224)) | (1 << (Cobol85PreprocessorParser.TERM - 224)) | (1 << (Cobol85PreprocessorParser.TERMINAL - 224)) | (1 << (Cobol85PreprocessorParser.TEST - 224)) | (1 << (Cobol85PreprocessorParser.THREAD - 224)) | (1 << (Cobol85PreprocessorParser.TITLE - 224)) | (1 << (Cobol85PreprocessorParser.TRIG - 224)) | (1 << (Cobol85PreprocessorParser.TRUNC - 224)) | (1 << (Cobol85PreprocessorParser.UE - 224)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (Cobol85PreprocessorParser.UPPER - 256)) | (1 << (Cobol85PreprocessorParser.VBREF - 256)) | (1 << (Cobol85PreprocessorParser.WD - 256)) | (1 << (Cobol85PreprocessorParser.XMLPARSE - 256)) | (1 << (Cobol85PreprocessorParser.XMLSS - 256)) | (1 << (Cobol85PreprocessorParser.XOPTS - 256)) | (1 << (Cobol85PreprocessorParser.XREF - 256)) | (1 << (Cobol85PreprocessorParser.YEARWINDOW - 256)) | (1 << (Cobol85PreprocessorParser.YW - 256)) | (1 << (Cobol85PreprocessorParser.ZWB - 256)) | (1 << (Cobol85PreprocessorParser.C_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.D_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.E_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.F_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.H_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.I_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.M_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.N_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.Q_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.U_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.W_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.X_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.COMMACHAR - 256)) | (1 << (Cobol85PreprocessorParser.DOT - 256)) | (1 << (Cobol85PreprocessorParser.NONNUMERICLITERAL - 256)) | (1 << (Cobol85PreprocessorParser.NUMERICLITERAL - 256)) | (1 << (Cobol85PreprocessorParser.IDENTIFIER - 256)))) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & ((1 << (Cobol85PreprocessorParser.FILENAME - 288)) | (1 << (Cobol85PreprocessorParser.NEWLINE - 288)) | (1 << (Cobol85PreprocessorParser.TEXT - 288)))) !== 0)) {
                    {
                        this.state = 72;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                            case 1:
                                {
                                    this.state = 60;
                                    this.compilerOptions();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 61;
                                    this.copyStatement();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 62;
                                    this.execCicsStatement();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 63;
                                    this.execSqlStatement();
                                }
                                break;
                            case 5:
                                {
                                    this.state = 64;
                                    this.execSqlImsStatement();
                                }
                                break;
                            case 6:
                                {
                                    this.state = 65;
                                    this.replaceOffStatement();
                                }
                                break;
                            case 7:
                                {
                                    this.state = 66;
                                    this.replaceArea();
                                }
                                break;
                            case 8:
                                {
                                    this.state = 67;
                                    this.ejectStatement();
                                }
                                break;
                            case 9:
                                {
                                    this.state = 68;
                                    this.skipStatement();
                                }
                                break;
                            case 10:
                                {
                                    this.state = 69;
                                    this.titleStatement();
                                }
                                break;
                            case 11:
                                {
                                    this.state = 70;
                                    this.charDataLine();
                                }
                                break;
                            case 12:
                                {
                                    this.state = 71;
                                    this.match(Cobol85PreprocessorParser.NEWLINE);
                                }
                                break;
                        }
                    }
                    this.state = 76;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 77;
                this.match(Cobol85PreprocessorParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.compilerOptions = function () {
        var _localctx = new CompilerOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, Cobol85PreprocessorParser.RULE_compilerOptions);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                _la = this._input.LA(1);
                if (!(_la === Cobol85PreprocessorParser.CBL || _la === Cobol85PreprocessorParser.PROCESS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 85;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 85;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Cobol85PreprocessorParser.ADATA:
                                    case Cobol85PreprocessorParser.ADV:
                                    case Cobol85PreprocessorParser.APOST:
                                    case Cobol85PreprocessorParser.AR:
                                    case Cobol85PreprocessorParser.ARITH:
                                    case Cobol85PreprocessorParser.AWO:
                                    case Cobol85PreprocessorParser.BLOCK0:
                                    case Cobol85PreprocessorParser.BUF:
                                    case Cobol85PreprocessorParser.BUFSIZE:
                                    case Cobol85PreprocessorParser.CBLCARD:
                                    case Cobol85PreprocessorParser.CICS:
                                    case Cobol85PreprocessorParser.COBOL2:
                                    case Cobol85PreprocessorParser.COBOL3:
                                    case Cobol85PreprocessorParser.CODEPAGE:
                                    case Cobol85PreprocessorParser.COMPILE:
                                    case Cobol85PreprocessorParser.CP:
                                    case Cobol85PreprocessorParser.CPP:
                                    case Cobol85PreprocessorParser.CPSM:
                                    case Cobol85PreprocessorParser.CURR:
                                    case Cobol85PreprocessorParser.CURRENCY:
                                    case Cobol85PreprocessorParser.DATA:
                                    case Cobol85PreprocessorParser.DATEPROC:
                                    case Cobol85PreprocessorParser.DBCS:
                                    case Cobol85PreprocessorParser.DEBUG:
                                    case Cobol85PreprocessorParser.DECK:
                                    case Cobol85PreprocessorParser.DIAGTRUNC:
                                    case Cobol85PreprocessorParser.DLL:
                                    case Cobol85PreprocessorParser.DP:
                                    case Cobol85PreprocessorParser.DTR:
                                    case Cobol85PreprocessorParser.DU:
                                    case Cobol85PreprocessorParser.DUMP:
                                    case Cobol85PreprocessorParser.DYN:
                                    case Cobol85PreprocessorParser.DYNAM:
                                    case Cobol85PreprocessorParser.EDF:
                                    case Cobol85PreprocessorParser.EPILOG:
                                    case Cobol85PreprocessorParser.EXIT:
                                    case Cobol85PreprocessorParser.EXP:
                                    case Cobol85PreprocessorParser.EXPORTALL:
                                    case Cobol85PreprocessorParser.FASTSRT:
                                    case Cobol85PreprocessorParser.FEPI:
                                    case Cobol85PreprocessorParser.FLAG:
                                    case Cobol85PreprocessorParser.FLAGSTD:
                                    case Cobol85PreprocessorParser.FSRT:
                                    case Cobol85PreprocessorParser.GDS:
                                    case Cobol85PreprocessorParser.GRAPHIC:
                                    case Cobol85PreprocessorParser.INTDATE:
                                    case Cobol85PreprocessorParser.LANG:
                                    case Cobol85PreprocessorParser.LANGUAGE:
                                    case Cobol85PreprocessorParser.LC:
                                    case Cobol85PreprocessorParser.LEASM:
                                    case Cobol85PreprocessorParser.LENGTH:
                                    case Cobol85PreprocessorParser.LIB:
                                    case Cobol85PreprocessorParser.LIN:
                                    case Cobol85PreprocessorParser.LINECOUNT:
                                    case Cobol85PreprocessorParser.LINKAGE:
                                    case Cobol85PreprocessorParser.LIST:
                                    case Cobol85PreprocessorParser.MAP:
                                    case Cobol85PreprocessorParser.MARGINS:
                                    case Cobol85PreprocessorParser.MD:
                                    case Cobol85PreprocessorParser.MDECK:
                                    case Cobol85PreprocessorParser.NAME:
                                    case Cobol85PreprocessorParser.NATLANG:
                                    case Cobol85PreprocessorParser.NOADATA:
                                    case Cobol85PreprocessorParser.NOADV:
                                    case Cobol85PreprocessorParser.NOAWO:
                                    case Cobol85PreprocessorParser.NOBLOCK0:
                                    case Cobol85PreprocessorParser.NOC:
                                    case Cobol85PreprocessorParser.NOCBLCARD:
                                    case Cobol85PreprocessorParser.NOCICS:
                                    case Cobol85PreprocessorParser.NOCMPR2:
                                    case Cobol85PreprocessorParser.NOCOMPILE:
                                    case Cobol85PreprocessorParser.NOCPSM:
                                    case Cobol85PreprocessorParser.NOCURR:
                                    case Cobol85PreprocessorParser.NOCURRENCY:
                                    case Cobol85PreprocessorParser.NOD:
                                    case Cobol85PreprocessorParser.NODATEPROC:
                                    case Cobol85PreprocessorParser.NODBCS:
                                    case Cobol85PreprocessorParser.NODE:
                                    case Cobol85PreprocessorParser.NODEBUG:
                                    case Cobol85PreprocessorParser.NODECK:
                                    case Cobol85PreprocessorParser.NODIAGTRUNC:
                                    case Cobol85PreprocessorParser.NODLL:
                                    case Cobol85PreprocessorParser.NODU:
                                    case Cobol85PreprocessorParser.NODUMP:
                                    case Cobol85PreprocessorParser.NODP:
                                    case Cobol85PreprocessorParser.NODTR:
                                    case Cobol85PreprocessorParser.NODYN:
                                    case Cobol85PreprocessorParser.NODYNAM:
                                    case Cobol85PreprocessorParser.NOEDF:
                                    case Cobol85PreprocessorParser.NOEPILOG:
                                    case Cobol85PreprocessorParser.NOEXIT:
                                    case Cobol85PreprocessorParser.NOEXP:
                                    case Cobol85PreprocessorParser.NOEXPORTALL:
                                    case Cobol85PreprocessorParser.NOF:
                                    case Cobol85PreprocessorParser.NOFASTSRT:
                                    case Cobol85PreprocessorParser.NOFEPI:
                                    case Cobol85PreprocessorParser.NOFLAG:
                                    case Cobol85PreprocessorParser.NOFLAGMIG:
                                    case Cobol85PreprocessorParser.NOFLAGSTD:
                                    case Cobol85PreprocessorParser.NOFSRT:
                                    case Cobol85PreprocessorParser.NOGRAPHIC:
                                    case Cobol85PreprocessorParser.NOLENGTH:
                                    case Cobol85PreprocessorParser.NOLIB:
                                    case Cobol85PreprocessorParser.NOLINKAGE:
                                    case Cobol85PreprocessorParser.NOLIST:
                                    case Cobol85PreprocessorParser.NOMAP:
                                    case Cobol85PreprocessorParser.NOMD:
                                    case Cobol85PreprocessorParser.NOMDECK:
                                    case Cobol85PreprocessorParser.NONAME:
                                    case Cobol85PreprocessorParser.NONUM:
                                    case Cobol85PreprocessorParser.NONUMBER:
                                    case Cobol85PreprocessorParser.NOOBJ:
                                    case Cobol85PreprocessorParser.NOOBJECT:
                                    case Cobol85PreprocessorParser.NOOFF:
                                    case Cobol85PreprocessorParser.NOOFFSET:
                                    case Cobol85PreprocessorParser.NOOPSEQUENCE:
                                    case Cobol85PreprocessorParser.NOOPT:
                                    case Cobol85PreprocessorParser.NOOPTIMIZE:
                                    case Cobol85PreprocessorParser.NOOPTIONS:
                                    case Cobol85PreprocessorParser.NOP:
                                    case Cobol85PreprocessorParser.NOPROLOG:
                                    case Cobol85PreprocessorParser.NORENT:
                                    case Cobol85PreprocessorParser.NOS:
                                    case Cobol85PreprocessorParser.NOSEQ:
                                    case Cobol85PreprocessorParser.NOSOURCE:
                                    case Cobol85PreprocessorParser.NOSPIE:
                                    case Cobol85PreprocessorParser.NOSQL:
                                    case Cobol85PreprocessorParser.NOSQLC:
                                    case Cobol85PreprocessorParser.NOSQLCCSID:
                                    case Cobol85PreprocessorParser.NOSSR:
                                    case Cobol85PreprocessorParser.NOSSRANGE:
                                    case Cobol85PreprocessorParser.NOSTDTRUNC:
                                    case Cobol85PreprocessorParser.NOSEQUENCE:
                                    case Cobol85PreprocessorParser.NOTERM:
                                    case Cobol85PreprocessorParser.NOTERMINAL:
                                    case Cobol85PreprocessorParser.NOTEST:
                                    case Cobol85PreprocessorParser.NOTHREAD:
                                    case Cobol85PreprocessorParser.NOVBREF:
                                    case Cobol85PreprocessorParser.NOWD:
                                    case Cobol85PreprocessorParser.NOWORD:
                                    case Cobol85PreprocessorParser.NOX:
                                    case Cobol85PreprocessorParser.NOXREF:
                                    case Cobol85PreprocessorParser.NOZWB:
                                    case Cobol85PreprocessorParser.NS:
                                    case Cobol85PreprocessorParser.NSEQ:
                                    case Cobol85PreprocessorParser.NSYMBOL:
                                    case Cobol85PreprocessorParser.NUM:
                                    case Cobol85PreprocessorParser.NUMBER:
                                    case Cobol85PreprocessorParser.NUMPROC:
                                    case Cobol85PreprocessorParser.OBJ:
                                    case Cobol85PreprocessorParser.OBJECT:
                                    case Cobol85PreprocessorParser.OFF:
                                    case Cobol85PreprocessorParser.OFFSET:
                                    case Cobol85PreprocessorParser.OP:
                                    case Cobol85PreprocessorParser.OPMARGINS:
                                    case Cobol85PreprocessorParser.OPSEQUENCE:
                                    case Cobol85PreprocessorParser.OPT:
                                    case Cobol85PreprocessorParser.OPTFILE:
                                    case Cobol85PreprocessorParser.OPTIMIZE:
                                    case Cobol85PreprocessorParser.OPTIONS:
                                    case Cobol85PreprocessorParser.OUT:
                                    case Cobol85PreprocessorParser.OUTDD:
                                    case Cobol85PreprocessorParser.PGMN:
                                    case Cobol85PreprocessorParser.PGMNAME:
                                    case Cobol85PreprocessorParser.PROLOG:
                                    case Cobol85PreprocessorParser.QUOTE:
                                    case Cobol85PreprocessorParser.RENT:
                                    case Cobol85PreprocessorParser.RMODE:
                                    case Cobol85PreprocessorParser.SEQ:
                                    case Cobol85PreprocessorParser.SEQUENCE:
                                    case Cobol85PreprocessorParser.SIZE:
                                    case Cobol85PreprocessorParser.SOURCE:
                                    case Cobol85PreprocessorParser.SP:
                                    case Cobol85PreprocessorParser.SPACE:
                                    case Cobol85PreprocessorParser.SPIE:
                                    case Cobol85PreprocessorParser.SQL:
                                    case Cobol85PreprocessorParser.SQLC:
                                    case Cobol85PreprocessorParser.SQLCCSID:
                                    case Cobol85PreprocessorParser.SSR:
                                    case Cobol85PreprocessorParser.SSRANGE:
                                    case Cobol85PreprocessorParser.SYSEIB:
                                    case Cobol85PreprocessorParser.SZ:
                                    case Cobol85PreprocessorParser.TERM:
                                    case Cobol85PreprocessorParser.TERMINAL:
                                    case Cobol85PreprocessorParser.TEST:
                                    case Cobol85PreprocessorParser.THREAD:
                                    case Cobol85PreprocessorParser.TRUNC:
                                    case Cobol85PreprocessorParser.VBREF:
                                    case Cobol85PreprocessorParser.WD:
                                    case Cobol85PreprocessorParser.WORD:
                                    case Cobol85PreprocessorParser.XMLPARSE:
                                    case Cobol85PreprocessorParser.XP:
                                    case Cobol85PreprocessorParser.XREF:
                                    case Cobol85PreprocessorParser.YEARWINDOW:
                                    case Cobol85PreprocessorParser.YW:
                                    case Cobol85PreprocessorParser.ZWB:
                                    case Cobol85PreprocessorParser.C_CHAR:
                                    case Cobol85PreprocessorParser.D_CHAR:
                                    case Cobol85PreprocessorParser.F_CHAR:
                                    case Cobol85PreprocessorParser.Q_CHAR:
                                    case Cobol85PreprocessorParser.S_CHAR:
                                    case Cobol85PreprocessorParser.X_CHAR:
                                    case Cobol85PreprocessorParser.COMMACHAR:
                                        {
                                            this.state = 81;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                                                {
                                                    this.state = 80;
                                                    this.match(Cobol85PreprocessorParser.COMMACHAR);
                                                }
                                            }
                                            this.state = 83;
                                            this.compilerOption();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.XOPTS:
                                        {
                                            this.state = 84;
                                            this.compilerXOpts();
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
                    this.state = 87;
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
    Cobol85PreprocessorParser.prototype.compilerXOpts = function () {
        var _localctx = new CompilerXOptsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, Cobol85PreprocessorParser.RULE_compilerXOpts);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this.match(Cobol85PreprocessorParser.XOPTS);
                this.state = 90;
                this.match(Cobol85PreprocessorParser.LPARENCHAR);
                this.state = 91;
                this.compilerOption();
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Cobol85PreprocessorParser.ADATA) | (1 << Cobol85PreprocessorParser.ADV) | (1 << Cobol85PreprocessorParser.APOST) | (1 << Cobol85PreprocessorParser.AR) | (1 << Cobol85PreprocessorParser.ARITH) | (1 << Cobol85PreprocessorParser.AWO) | (1 << Cobol85PreprocessorParser.BLOCK0) | (1 << Cobol85PreprocessorParser.BUF) | (1 << Cobol85PreprocessorParser.BUFSIZE) | (1 << Cobol85PreprocessorParser.CBLCARD) | (1 << Cobol85PreprocessorParser.CICS) | (1 << Cobol85PreprocessorParser.COBOL2) | (1 << Cobol85PreprocessorParser.COBOL3) | (1 << Cobol85PreprocessorParser.CODEPAGE) | (1 << Cobol85PreprocessorParser.COMPILE) | (1 << Cobol85PreprocessorParser.CP) | (1 << Cobol85PreprocessorParser.CPP) | (1 << Cobol85PreprocessorParser.CPSM) | (1 << Cobol85PreprocessorParser.CURR) | (1 << Cobol85PreprocessorParser.CURRENCY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Cobol85PreprocessorParser.DATA - 32)) | (1 << (Cobol85PreprocessorParser.DATEPROC - 32)) | (1 << (Cobol85PreprocessorParser.DBCS - 32)) | (1 << (Cobol85PreprocessorParser.DEBUG - 32)) | (1 << (Cobol85PreprocessorParser.DECK - 32)) | (1 << (Cobol85PreprocessorParser.DIAGTRUNC - 32)) | (1 << (Cobol85PreprocessorParser.DLL - 32)) | (1 << (Cobol85PreprocessorParser.DP - 32)) | (1 << (Cobol85PreprocessorParser.DTR - 32)) | (1 << (Cobol85PreprocessorParser.DU - 32)) | (1 << (Cobol85PreprocessorParser.DUMP - 32)) | (1 << (Cobol85PreprocessorParser.DYN - 32)) | (1 << (Cobol85PreprocessorParser.DYNAM - 32)) | (1 << (Cobol85PreprocessorParser.EDF - 32)) | (1 << (Cobol85PreprocessorParser.EPILOG - 32)) | (1 << (Cobol85PreprocessorParser.EXIT - 32)) | (1 << (Cobol85PreprocessorParser.EXP - 32)) | (1 << (Cobol85PreprocessorParser.EXPORTALL - 32)) | (1 << (Cobol85PreprocessorParser.FASTSRT - 32)) | (1 << (Cobol85PreprocessorParser.FEPI - 32)) | (1 << (Cobol85PreprocessorParser.FLAG - 32)) | (1 << (Cobol85PreprocessorParser.FLAGSTD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Cobol85PreprocessorParser.FSRT - 64)) | (1 << (Cobol85PreprocessorParser.GDS - 64)) | (1 << (Cobol85PreprocessorParser.GRAPHIC - 64)) | (1 << (Cobol85PreprocessorParser.INTDATE - 64)) | (1 << (Cobol85PreprocessorParser.LANG - 64)) | (1 << (Cobol85PreprocessorParser.LANGUAGE - 64)) | (1 << (Cobol85PreprocessorParser.LC - 64)) | (1 << (Cobol85PreprocessorParser.LEASM - 64)) | (1 << (Cobol85PreprocessorParser.LENGTH - 64)) | (1 << (Cobol85PreprocessorParser.LIB - 64)) | (1 << (Cobol85PreprocessorParser.LIN - 64)) | (1 << (Cobol85PreprocessorParser.LINECOUNT - 64)) | (1 << (Cobol85PreprocessorParser.LINKAGE - 64)) | (1 << (Cobol85PreprocessorParser.LIST - 64)) | (1 << (Cobol85PreprocessorParser.MAP - 64)) | (1 << (Cobol85PreprocessorParser.MARGINS - 64)) | (1 << (Cobol85PreprocessorParser.MD - 64)) | (1 << (Cobol85PreprocessorParser.MDECK - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Cobol85PreprocessorParser.NAME - 97)) | (1 << (Cobol85PreprocessorParser.NATLANG - 97)) | (1 << (Cobol85PreprocessorParser.NOADATA - 97)) | (1 << (Cobol85PreprocessorParser.NOADV - 97)) | (1 << (Cobol85PreprocessorParser.NOAWO - 97)) | (1 << (Cobol85PreprocessorParser.NOBLOCK0 - 97)) | (1 << (Cobol85PreprocessorParser.NOC - 97)) | (1 << (Cobol85PreprocessorParser.NOCBLCARD - 97)) | (1 << (Cobol85PreprocessorParser.NOCICS - 97)) | (1 << (Cobol85PreprocessorParser.NOCMPR2 - 97)) | (1 << (Cobol85PreprocessorParser.NOCOMPILE - 97)) | (1 << (Cobol85PreprocessorParser.NOCPSM - 97)) | (1 << (Cobol85PreprocessorParser.NOCURR - 97)) | (1 << (Cobol85PreprocessorParser.NOCURRENCY - 97)) | (1 << (Cobol85PreprocessorParser.NOD - 97)) | (1 << (Cobol85PreprocessorParser.NODATEPROC - 97)) | (1 << (Cobol85PreprocessorParser.NODBCS - 97)) | (1 << (Cobol85PreprocessorParser.NODE - 97)) | (1 << (Cobol85PreprocessorParser.NODEBUG - 97)) | (1 << (Cobol85PreprocessorParser.NODECK - 97)) | (1 << (Cobol85PreprocessorParser.NODIAGTRUNC - 97)) | (1 << (Cobol85PreprocessorParser.NODLL - 97)) | (1 << (Cobol85PreprocessorParser.NODU - 97)) | (1 << (Cobol85PreprocessorParser.NODUMP - 97)) | (1 << (Cobol85PreprocessorParser.NODP - 97)) | (1 << (Cobol85PreprocessorParser.NODTR - 97)) | (1 << (Cobol85PreprocessorParser.NODYN - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (Cobol85PreprocessorParser.NODYNAM - 129)) | (1 << (Cobol85PreprocessorParser.NOEDF - 129)) | (1 << (Cobol85PreprocessorParser.NOEPILOG - 129)) | (1 << (Cobol85PreprocessorParser.NOEXIT - 129)) | (1 << (Cobol85PreprocessorParser.NOEXP - 129)) | (1 << (Cobol85PreprocessorParser.NOEXPORTALL - 129)) | (1 << (Cobol85PreprocessorParser.NOF - 129)) | (1 << (Cobol85PreprocessorParser.NOFASTSRT - 129)) | (1 << (Cobol85PreprocessorParser.NOFEPI - 129)) | (1 << (Cobol85PreprocessorParser.NOFLAG - 129)) | (1 << (Cobol85PreprocessorParser.NOFLAGMIG - 129)) | (1 << (Cobol85PreprocessorParser.NOFLAGSTD - 129)) | (1 << (Cobol85PreprocessorParser.NOFSRT - 129)) | (1 << (Cobol85PreprocessorParser.NOGRAPHIC - 129)) | (1 << (Cobol85PreprocessorParser.NOLENGTH - 129)) | (1 << (Cobol85PreprocessorParser.NOLIB - 129)) | (1 << (Cobol85PreprocessorParser.NOLINKAGE - 129)) | (1 << (Cobol85PreprocessorParser.NOLIST - 129)) | (1 << (Cobol85PreprocessorParser.NOMAP - 129)) | (1 << (Cobol85PreprocessorParser.NOMD - 129)) | (1 << (Cobol85PreprocessorParser.NOMDECK - 129)) | (1 << (Cobol85PreprocessorParser.NONAME - 129)) | (1 << (Cobol85PreprocessorParser.NONUM - 129)) | (1 << (Cobol85PreprocessorParser.NONUMBER - 129)) | (1 << (Cobol85PreprocessorParser.NOOBJ - 129)) | (1 << (Cobol85PreprocessorParser.NOOBJECT - 129)) | (1 << (Cobol85PreprocessorParser.NOOFF - 129)) | (1 << (Cobol85PreprocessorParser.NOOFFSET - 129)) | (1 << (Cobol85PreprocessorParser.NOOPSEQUENCE - 129)) | (1 << (Cobol85PreprocessorParser.NOOPT - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (Cobol85PreprocessorParser.NOOPTIMIZE - 161)) | (1 << (Cobol85PreprocessorParser.NOOPTIONS - 161)) | (1 << (Cobol85PreprocessorParser.NOP - 161)) | (1 << (Cobol85PreprocessorParser.NOPROLOG - 161)) | (1 << (Cobol85PreprocessorParser.NORENT - 161)) | (1 << (Cobol85PreprocessorParser.NOS - 161)) | (1 << (Cobol85PreprocessorParser.NOSEQ - 161)) | (1 << (Cobol85PreprocessorParser.NOSOURCE - 161)) | (1 << (Cobol85PreprocessorParser.NOSPIE - 161)) | (1 << (Cobol85PreprocessorParser.NOSQL - 161)) | (1 << (Cobol85PreprocessorParser.NOSQLC - 161)) | (1 << (Cobol85PreprocessorParser.NOSQLCCSID - 161)) | (1 << (Cobol85PreprocessorParser.NOSSR - 161)) | (1 << (Cobol85PreprocessorParser.NOSSRANGE - 161)) | (1 << (Cobol85PreprocessorParser.NOSTDTRUNC - 161)) | (1 << (Cobol85PreprocessorParser.NOSEQUENCE - 161)) | (1 << (Cobol85PreprocessorParser.NOTERM - 161)) | (1 << (Cobol85PreprocessorParser.NOTERMINAL - 161)) | (1 << (Cobol85PreprocessorParser.NOTEST - 161)) | (1 << (Cobol85PreprocessorParser.NOTHREAD - 161)) | (1 << (Cobol85PreprocessorParser.NOVBREF - 161)) | (1 << (Cobol85PreprocessorParser.NOWD - 161)) | (1 << (Cobol85PreprocessorParser.NOWORD - 161)) | (1 << (Cobol85PreprocessorParser.NOX - 161)) | (1 << (Cobol85PreprocessorParser.NOXREF - 161)) | (1 << (Cobol85PreprocessorParser.NOZWB - 161)) | (1 << (Cobol85PreprocessorParser.NS - 161)) | (1 << (Cobol85PreprocessorParser.NSEQ - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (Cobol85PreprocessorParser.NSYMBOL - 193)) | (1 << (Cobol85PreprocessorParser.NUM - 193)) | (1 << (Cobol85PreprocessorParser.NUMBER - 193)) | (1 << (Cobol85PreprocessorParser.NUMPROC - 193)) | (1 << (Cobol85PreprocessorParser.OBJ - 193)) | (1 << (Cobol85PreprocessorParser.OBJECT - 193)) | (1 << (Cobol85PreprocessorParser.OFF - 193)) | (1 << (Cobol85PreprocessorParser.OFFSET - 193)) | (1 << (Cobol85PreprocessorParser.OP - 193)) | (1 << (Cobol85PreprocessorParser.OPMARGINS - 193)) | (1 << (Cobol85PreprocessorParser.OPSEQUENCE - 193)) | (1 << (Cobol85PreprocessorParser.OPT - 193)) | (1 << (Cobol85PreprocessorParser.OPTFILE - 193)) | (1 << (Cobol85PreprocessorParser.OPTIMIZE - 193)) | (1 << (Cobol85PreprocessorParser.OPTIONS - 193)) | (1 << (Cobol85PreprocessorParser.OUT - 193)) | (1 << (Cobol85PreprocessorParser.OUTDD - 193)) | (1 << (Cobol85PreprocessorParser.PGMN - 193)) | (1 << (Cobol85PreprocessorParser.PGMNAME - 193)) | (1 << (Cobol85PreprocessorParser.PROLOG - 193)) | (1 << (Cobol85PreprocessorParser.QUOTE - 193)) | (1 << (Cobol85PreprocessorParser.RENT - 193)) | (1 << (Cobol85PreprocessorParser.RMODE - 193)))) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (Cobol85PreprocessorParser.SEQ - 226)) | (1 << (Cobol85PreprocessorParser.SEQUENCE - 226)) | (1 << (Cobol85PreprocessorParser.SIZE - 226)) | (1 << (Cobol85PreprocessorParser.SOURCE - 226)) | (1 << (Cobol85PreprocessorParser.SP - 226)) | (1 << (Cobol85PreprocessorParser.SPACE - 226)) | (1 << (Cobol85PreprocessorParser.SPIE - 226)) | (1 << (Cobol85PreprocessorParser.SQL - 226)) | (1 << (Cobol85PreprocessorParser.SQLC - 226)) | (1 << (Cobol85PreprocessorParser.SQLCCSID - 226)) | (1 << (Cobol85PreprocessorParser.SSR - 226)) | (1 << (Cobol85PreprocessorParser.SSRANGE - 226)) | (1 << (Cobol85PreprocessorParser.SYSEIB - 226)) | (1 << (Cobol85PreprocessorParser.SZ - 226)) | (1 << (Cobol85PreprocessorParser.TERM - 226)) | (1 << (Cobol85PreprocessorParser.TERMINAL - 226)) | (1 << (Cobol85PreprocessorParser.TEST - 226)) | (1 << (Cobol85PreprocessorParser.THREAD - 226)) | (1 << (Cobol85PreprocessorParser.TRUNC - 226)) | (1 << (Cobol85PreprocessorParser.VBREF - 226)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (Cobol85PreprocessorParser.WD - 258)) | (1 << (Cobol85PreprocessorParser.WORD - 258)) | (1 << (Cobol85PreprocessorParser.XMLPARSE - 258)) | (1 << (Cobol85PreprocessorParser.XP - 258)) | (1 << (Cobol85PreprocessorParser.XREF - 258)) | (1 << (Cobol85PreprocessorParser.YEARWINDOW - 258)) | (1 << (Cobol85PreprocessorParser.YW - 258)) | (1 << (Cobol85PreprocessorParser.ZWB - 258)) | (1 << (Cobol85PreprocessorParser.C_CHAR - 258)) | (1 << (Cobol85PreprocessorParser.D_CHAR - 258)) | (1 << (Cobol85PreprocessorParser.F_CHAR - 258)) | (1 << (Cobol85PreprocessorParser.Q_CHAR - 258)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 258)) | (1 << (Cobol85PreprocessorParser.X_CHAR - 258)) | (1 << (Cobol85PreprocessorParser.COMMACHAR - 258)))) !== 0)) {
                    {
                        {
                            this.state = 93;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                                {
                                    this.state = 92;
                                    this.match(Cobol85PreprocessorParser.COMMACHAR);
                                }
                            }
                            this.state = 95;
                            this.compilerOption();
                        }
                    }
                    this.state = 100;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 101;
                this.match(Cobol85PreprocessorParser.RPARENCHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.compilerOption = function () {
        var _localctx = new CompilerOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, Cobol85PreprocessorParser.RULE_compilerOption);
        var _la;
        try {
            this.state = 445;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 103;
                        this.match(Cobol85PreprocessorParser.ADATA);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 104;
                        this.match(Cobol85PreprocessorParser.ADV);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 105;
                        this.match(Cobol85PreprocessorParser.APOST);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 106;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.AR || _la === Cobol85PreprocessorParser.ARITH)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 107;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 108;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.COMPAT || _la === Cobol85PreprocessorParser.EXTEND || _la === Cobol85PreprocessorParser.C_CHAR || _la === Cobol85PreprocessorParser.E_CHAR)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 109;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 110;
                        this.match(Cobol85PreprocessorParser.AWO);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 111;
                        this.match(Cobol85PreprocessorParser.BLOCK0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 112;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.BUF || _la === Cobol85PreprocessorParser.BUFSIZE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 113;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 114;
                        this.literal();
                        this.state = 115;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 117;
                        this.match(Cobol85PreprocessorParser.CBLCARD);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 118;
                        this.match(Cobol85PreprocessorParser.CICS);
                        this.state = 123;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                            case 1:
                                {
                                    this.state = 119;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 120;
                                    this.literal();
                                    this.state = 121;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 125;
                        this.match(Cobol85PreprocessorParser.COBOL2);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 126;
                        this.match(Cobol85PreprocessorParser.COBOL3);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 127;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.CODEPAGE || _la === Cobol85PreprocessorParser.CP)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 128;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 129;
                        this.literal();
                        this.state = 130;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 132;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.COMPILE || _la === Cobol85PreprocessorParser.C_CHAR)) {
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
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 133;
                        this.match(Cobol85PreprocessorParser.CPP);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 134;
                        this.match(Cobol85PreprocessorParser.CPSM);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 135;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.CURR || _la === Cobol85PreprocessorParser.CURRENCY)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 136;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 137;
                        this.literal();
                        this.state = 138;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 140;
                        this.match(Cobol85PreprocessorParser.DATA);
                        this.state = 141;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 142;
                        this.literal();
                        this.state = 143;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 145;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.DATEPROC || _la === Cobol85PreprocessorParser.DP)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 157;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                            case 1:
                                {
                                    this.state = 146;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 148;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.FLAG || _la === Cobol85PreprocessorParser.NOFLAG) {
                                        {
                                            this.state = 147;
                                            _la = this._input.LA(1);
                                            if (!(_la === Cobol85PreprocessorParser.FLAG || _la === Cobol85PreprocessorParser.NOFLAG)) {
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
                                    this.state = 151;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                                        {
                                            this.state = 150;
                                            this.match(Cobol85PreprocessorParser.COMMACHAR);
                                        }
                                    }
                                    this.state = 154;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.NOTRIG || _la === Cobol85PreprocessorParser.TRIG) {
                                        {
                                            this.state = 153;
                                            _la = this._input.LA(1);
                                            if (!(_la === Cobol85PreprocessorParser.NOTRIG || _la === Cobol85PreprocessorParser.TRIG)) {
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
                                    this.state = 156;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 159;
                        this.match(Cobol85PreprocessorParser.DBCS);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 160;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.DECK || _la === Cobol85PreprocessorParser.D_CHAR)) {
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
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 161;
                        this.match(Cobol85PreprocessorParser.DEBUG);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 162;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.DIAGTRUNC || _la === Cobol85PreprocessorParser.DTR)) {
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
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 163;
                        this.match(Cobol85PreprocessorParser.DLL);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 164;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.DU || _la === Cobol85PreprocessorParser.DUMP)) {
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
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 165;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.DYN || _la === Cobol85PreprocessorParser.DYNAM)) {
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
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 166;
                        this.match(Cobol85PreprocessorParser.EDF);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 167;
                        this.match(Cobol85PreprocessorParser.EPILOG);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 168;
                        this.match(Cobol85PreprocessorParser.EXIT);
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 169;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.EXP || _la === Cobol85PreprocessorParser.EXPORTALL)) {
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
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 170;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.FASTSRT || _la === Cobol85PreprocessorParser.FSRT)) {
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
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 171;
                        this.match(Cobol85PreprocessorParser.FEPI);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 172;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.FLAG || _la === Cobol85PreprocessorParser.F_CHAR)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 173;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 174;
                        _la = this._input.LA(1);
                        if (!(((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & ((1 << (Cobol85PreprocessorParser.E_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.I_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.U_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.W_CHAR - 270)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 177;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                            {
                                this.state = 175;
                                this.match(Cobol85PreprocessorParser.COMMACHAR);
                                this.state = 176;
                                _la = this._input.LA(1);
                                if (!(((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & ((1 << (Cobol85PreprocessorParser.E_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.I_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.U_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.W_CHAR - 270)))) !== 0))) {
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
                        this.state = 179;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 180;
                        this.match(Cobol85PreprocessorParser.FLAGSTD);
                        this.state = 181;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 182;
                        _la = this._input.LA(1);
                        if (!(((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & ((1 << (Cobol85PreprocessorParser.H_CHAR - 272)) | (1 << (Cobol85PreprocessorParser.I_CHAR - 272)) | (1 << (Cobol85PreprocessorParser.M_CHAR - 272)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 185;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                            {
                                this.state = 183;
                                this.match(Cobol85PreprocessorParser.COMMACHAR);
                                this.state = 184;
                                _la = this._input.LA(1);
                                if (!(_la === Cobol85PreprocessorParser.DD || _la === Cobol85PreprocessorParser.NN || _la === Cobol85PreprocessorParser.SS || _la === Cobol85PreprocessorParser.D_CHAR || _la === Cobol85PreprocessorParser.N_CHAR || _la === Cobol85PreprocessorParser.S_CHAR)) {
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
                        this.state = 187;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 188;
                        this.match(Cobol85PreprocessorParser.GDS);
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 189;
                        this.match(Cobol85PreprocessorParser.GRAPHIC);
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 190;
                        this.match(Cobol85PreprocessorParser.INTDATE);
                        this.state = 191;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 192;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.ANSI || _la === Cobol85PreprocessorParser.LILIAN)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 193;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 37:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 194;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.LANG || _la === Cobol85PreprocessorParser.LANGUAGE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 195;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 196;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.CS || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (Cobol85PreprocessorParser.EN - 50)) | (1 << (Cobol85PreprocessorParser.ENGLISH - 50)) | (1 << (Cobol85PreprocessorParser.JA - 50)) | (1 << (Cobol85PreprocessorParser.JP - 50)) | (1 << (Cobol85PreprocessorParser.KA - 50)))) !== 0) || _la === Cobol85PreprocessorParser.UE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 197;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 38:
                    this.enterOuterAlt(_localctx, 38);
                    {
                        this.state = 198;
                        this.match(Cobol85PreprocessorParser.LEASM);
                    }
                    break;
                case 39:
                    this.enterOuterAlt(_localctx, 39);
                    {
                        this.state = 199;
                        this.match(Cobol85PreprocessorParser.LENGTH);
                    }
                    break;
                case 40:
                    this.enterOuterAlt(_localctx, 40);
                    {
                        this.state = 200;
                        this.match(Cobol85PreprocessorParser.LIB);
                    }
                    break;
                case 41:
                    this.enterOuterAlt(_localctx, 41);
                    {
                        this.state = 201;
                        this.match(Cobol85PreprocessorParser.LIN);
                    }
                    break;
                case 42:
                    this.enterOuterAlt(_localctx, 42);
                    {
                        this.state = 202;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.LC || _la === Cobol85PreprocessorParser.LINECOUNT)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 203;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 204;
                        this.literal();
                        this.state = 205;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 43:
                    this.enterOuterAlt(_localctx, 43);
                    {
                        this.state = 207;
                        this.match(Cobol85PreprocessorParser.LINKAGE);
                    }
                    break;
                case 44:
                    this.enterOuterAlt(_localctx, 44);
                    {
                        this.state = 208;
                        this.match(Cobol85PreprocessorParser.LIST);
                    }
                    break;
                case 45:
                    this.enterOuterAlt(_localctx, 45);
                    {
                        this.state = 209;
                        this.match(Cobol85PreprocessorParser.MAP);
                    }
                    break;
                case 46:
                    this.enterOuterAlt(_localctx, 46);
                    {
                        this.state = 210;
                        this.match(Cobol85PreprocessorParser.MARGINS);
                        this.state = 211;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 212;
                        this.literal();
                        this.state = 213;
                        this.match(Cobol85PreprocessorParser.COMMACHAR);
                        this.state = 214;
                        this.literal();
                        this.state = 217;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                            {
                                this.state = 215;
                                this.match(Cobol85PreprocessorParser.COMMACHAR);
                                this.state = 216;
                                this.literal();
                            }
                        }
                        this.state = 219;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 47:
                    this.enterOuterAlt(_localctx, 47);
                    {
                        this.state = 221;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.MD || _la === Cobol85PreprocessorParser.MDECK)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 225;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                            case 1:
                                {
                                    this.state = 222;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 223;
                                    _la = this._input.LA(1);
                                    if (!(_la === Cobol85PreprocessorParser.COMPILE || _la === Cobol85PreprocessorParser.NOC || _la === Cobol85PreprocessorParser.NOCOMPILE || _la === Cobol85PreprocessorParser.C_CHAR)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 224;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 48:
                    this.enterOuterAlt(_localctx, 48);
                    {
                        this.state = 227;
                        this.match(Cobol85PreprocessorParser.NAME);
                        this.state = 231;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                            case 1:
                                {
                                    this.state = 228;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 229;
                                    _la = this._input.LA(1);
                                    if (!(_la === Cobol85PreprocessorParser.ALIAS || _la === Cobol85PreprocessorParser.NOALIAS)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 230;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 49:
                    this.enterOuterAlt(_localctx, 49);
                    {
                        this.state = 233;
                        this.match(Cobol85PreprocessorParser.NATLANG);
                        this.state = 234;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 235;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.CS || _la === Cobol85PreprocessorParser.EN || _la === Cobol85PreprocessorParser.KA)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 236;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 50:
                    this.enterOuterAlt(_localctx, 50);
                    {
                        this.state = 237;
                        this.match(Cobol85PreprocessorParser.NOADATA);
                    }
                    break;
                case 51:
                    this.enterOuterAlt(_localctx, 51);
                    {
                        this.state = 238;
                        this.match(Cobol85PreprocessorParser.NOADV);
                    }
                    break;
                case 52:
                    this.enterOuterAlt(_localctx, 52);
                    {
                        this.state = 239;
                        this.match(Cobol85PreprocessorParser.NOAWO);
                    }
                    break;
                case 53:
                    this.enterOuterAlt(_localctx, 53);
                    {
                        this.state = 240;
                        this.match(Cobol85PreprocessorParser.NOBLOCK0);
                    }
                    break;
                case 54:
                    this.enterOuterAlt(_localctx, 54);
                    {
                        this.state = 241;
                        this.match(Cobol85PreprocessorParser.NOCBLCARD);
                    }
                    break;
                case 55:
                    this.enterOuterAlt(_localctx, 55);
                    {
                        this.state = 242;
                        this.match(Cobol85PreprocessorParser.NOCICS);
                    }
                    break;
                case 56:
                    this.enterOuterAlt(_localctx, 56);
                    {
                        this.state = 243;
                        this.match(Cobol85PreprocessorParser.NOCMPR2);
                    }
                    break;
                case 57:
                    this.enterOuterAlt(_localctx, 57);
                    {
                        this.state = 244;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOC || _la === Cobol85PreprocessorParser.NOCOMPILE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 248;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                            case 1:
                                {
                                    this.state = 245;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 246;
                                    _la = this._input.LA(1);
                                    if (!(((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & ((1 << (Cobol85PreprocessorParser.E_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 270)) | (1 << (Cobol85PreprocessorParser.W_CHAR - 270)))) !== 0))) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 247;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 58:
                    this.enterOuterAlt(_localctx, 58);
                    {
                        this.state = 250;
                        this.match(Cobol85PreprocessorParser.NOCPSM);
                    }
                    break;
                case 59:
                    this.enterOuterAlt(_localctx, 59);
                    {
                        this.state = 251;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOCURR || _la === Cobol85PreprocessorParser.NOCURRENCY)) {
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
                case 60:
                    this.enterOuterAlt(_localctx, 60);
                    {
                        this.state = 252;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NODATEPROC || _la === Cobol85PreprocessorParser.NODP)) {
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
                case 61:
                    this.enterOuterAlt(_localctx, 61);
                    {
                        this.state = 253;
                        this.match(Cobol85PreprocessorParser.NODBCS);
                    }
                    break;
                case 62:
                    this.enterOuterAlt(_localctx, 62);
                    {
                        this.state = 254;
                        this.match(Cobol85PreprocessorParser.NODEBUG);
                    }
                    break;
                case 63:
                    this.enterOuterAlt(_localctx, 63);
                    {
                        this.state = 255;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOD || _la === Cobol85PreprocessorParser.NODECK)) {
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
                case 64:
                    this.enterOuterAlt(_localctx, 64);
                    {
                        this.state = 256;
                        this.match(Cobol85PreprocessorParser.NODLL);
                    }
                    break;
                case 65:
                    this.enterOuterAlt(_localctx, 65);
                    {
                        this.state = 257;
                        this.match(Cobol85PreprocessorParser.NODE);
                    }
                    break;
                case 66:
                    this.enterOuterAlt(_localctx, 66);
                    {
                        this.state = 258;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NODU || _la === Cobol85PreprocessorParser.NODUMP)) {
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
                case 67:
                    this.enterOuterAlt(_localctx, 67);
                    {
                        this.state = 259;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NODIAGTRUNC || _la === Cobol85PreprocessorParser.NODTR)) {
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
                case 68:
                    this.enterOuterAlt(_localctx, 68);
                    {
                        this.state = 260;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NODYN || _la === Cobol85PreprocessorParser.NODYNAM)) {
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
                case 69:
                    this.enterOuterAlt(_localctx, 69);
                    {
                        this.state = 261;
                        this.match(Cobol85PreprocessorParser.NOEDF);
                    }
                    break;
                case 70:
                    this.enterOuterAlt(_localctx, 70);
                    {
                        this.state = 262;
                        this.match(Cobol85PreprocessorParser.NOEPILOG);
                    }
                    break;
                case 71:
                    this.enterOuterAlt(_localctx, 71);
                    {
                        this.state = 263;
                        this.match(Cobol85PreprocessorParser.NOEXIT);
                    }
                    break;
                case 72:
                    this.enterOuterAlt(_localctx, 72);
                    {
                        this.state = 264;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOEXP || _la === Cobol85PreprocessorParser.NOEXPORTALL)) {
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
                case 73:
                    this.enterOuterAlt(_localctx, 73);
                    {
                        this.state = 265;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOFASTSRT || _la === Cobol85PreprocessorParser.NOFSRT)) {
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
                case 74:
                    this.enterOuterAlt(_localctx, 74);
                    {
                        this.state = 266;
                        this.match(Cobol85PreprocessorParser.NOFEPI);
                    }
                    break;
                case 75:
                    this.enterOuterAlt(_localctx, 75);
                    {
                        this.state = 267;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOF || _la === Cobol85PreprocessorParser.NOFLAG)) {
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
                case 76:
                    this.enterOuterAlt(_localctx, 76);
                    {
                        this.state = 268;
                        this.match(Cobol85PreprocessorParser.NOFLAGMIG);
                    }
                    break;
                case 77:
                    this.enterOuterAlt(_localctx, 77);
                    {
                        this.state = 269;
                        this.match(Cobol85PreprocessorParser.NOFLAGSTD);
                    }
                    break;
                case 78:
                    this.enterOuterAlt(_localctx, 78);
                    {
                        this.state = 270;
                        this.match(Cobol85PreprocessorParser.NOGRAPHIC);
                    }
                    break;
                case 79:
                    this.enterOuterAlt(_localctx, 79);
                    {
                        this.state = 271;
                        this.match(Cobol85PreprocessorParser.NOLENGTH);
                    }
                    break;
                case 80:
                    this.enterOuterAlt(_localctx, 80);
                    {
                        this.state = 272;
                        this.match(Cobol85PreprocessorParser.NOLIB);
                    }
                    break;
                case 81:
                    this.enterOuterAlt(_localctx, 81);
                    {
                        this.state = 273;
                        this.match(Cobol85PreprocessorParser.NOLINKAGE);
                    }
                    break;
                case 82:
                    this.enterOuterAlt(_localctx, 82);
                    {
                        this.state = 274;
                        this.match(Cobol85PreprocessorParser.NOLIST);
                    }
                    break;
                case 83:
                    this.enterOuterAlt(_localctx, 83);
                    {
                        this.state = 275;
                        this.match(Cobol85PreprocessorParser.NOMAP);
                    }
                    break;
                case 84:
                    this.enterOuterAlt(_localctx, 84);
                    {
                        this.state = 276;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOMD || _la === Cobol85PreprocessorParser.NOMDECK)) {
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
                case 85:
                    this.enterOuterAlt(_localctx, 85);
                    {
                        this.state = 277;
                        this.match(Cobol85PreprocessorParser.NONAME);
                    }
                    break;
                case 86:
                    this.enterOuterAlt(_localctx, 86);
                    {
                        this.state = 278;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NONUM || _la === Cobol85PreprocessorParser.NONUMBER)) {
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
                case 87:
                    this.enterOuterAlt(_localctx, 87);
                    {
                        this.state = 279;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOOBJ || _la === Cobol85PreprocessorParser.NOOBJECT)) {
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
                case 88:
                    this.enterOuterAlt(_localctx, 88);
                    {
                        this.state = 280;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOOFF || _la === Cobol85PreprocessorParser.NOOFFSET)) {
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
                case 89:
                    this.enterOuterAlt(_localctx, 89);
                    {
                        this.state = 281;
                        this.match(Cobol85PreprocessorParser.NOOPSEQUENCE);
                    }
                    break;
                case 90:
                    this.enterOuterAlt(_localctx, 90);
                    {
                        this.state = 282;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOOPT || _la === Cobol85PreprocessorParser.NOOPTIMIZE)) {
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
                case 91:
                    this.enterOuterAlt(_localctx, 91);
                    {
                        this.state = 283;
                        this.match(Cobol85PreprocessorParser.NOOPTIONS);
                    }
                    break;
                case 92:
                    this.enterOuterAlt(_localctx, 92);
                    {
                        this.state = 284;
                        this.match(Cobol85PreprocessorParser.NOP);
                    }
                    break;
                case 93:
                    this.enterOuterAlt(_localctx, 93);
                    {
                        this.state = 285;
                        this.match(Cobol85PreprocessorParser.NOPROLOG);
                    }
                    break;
                case 94:
                    this.enterOuterAlt(_localctx, 94);
                    {
                        this.state = 286;
                        this.match(Cobol85PreprocessorParser.NORENT);
                    }
                    break;
                case 95:
                    this.enterOuterAlt(_localctx, 95);
                    {
                        this.state = 287;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOSEQ || _la === Cobol85PreprocessorParser.NOSEQUENCE)) {
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
                case 96:
                    this.enterOuterAlt(_localctx, 96);
                    {
                        this.state = 288;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOS || _la === Cobol85PreprocessorParser.NOSOURCE)) {
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
                case 97:
                    this.enterOuterAlt(_localctx, 97);
                    {
                        this.state = 289;
                        this.match(Cobol85PreprocessorParser.NOSPIE);
                    }
                    break;
                case 98:
                    this.enterOuterAlt(_localctx, 98);
                    {
                        this.state = 290;
                        this.match(Cobol85PreprocessorParser.NOSQL);
                    }
                    break;
                case 99:
                    this.enterOuterAlt(_localctx, 99);
                    {
                        this.state = 291;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOSQLC || _la === Cobol85PreprocessorParser.NOSQLCCSID)) {
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
                case 100:
                    this.enterOuterAlt(_localctx, 100);
                    {
                        this.state = 292;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOSSR || _la === Cobol85PreprocessorParser.NOSSRANGE)) {
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
                case 101:
                    this.enterOuterAlt(_localctx, 101);
                    {
                        this.state = 293;
                        this.match(Cobol85PreprocessorParser.NOSTDTRUNC);
                    }
                    break;
                case 102:
                    this.enterOuterAlt(_localctx, 102);
                    {
                        this.state = 294;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOTERM || _la === Cobol85PreprocessorParser.NOTERMINAL)) {
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
                case 103:
                    this.enterOuterAlt(_localctx, 103);
                    {
                        this.state = 295;
                        this.match(Cobol85PreprocessorParser.NOTEST);
                    }
                    break;
                case 104:
                    this.enterOuterAlt(_localctx, 104);
                    {
                        this.state = 296;
                        this.match(Cobol85PreprocessorParser.NOTHREAD);
                    }
                    break;
                case 105:
                    this.enterOuterAlt(_localctx, 105);
                    {
                        this.state = 297;
                        this.match(Cobol85PreprocessorParser.NOVBREF);
                    }
                    break;
                case 106:
                    this.enterOuterAlt(_localctx, 106);
                    {
                        this.state = 298;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOWD || _la === Cobol85PreprocessorParser.NOWORD)) {
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
                case 107:
                    this.enterOuterAlt(_localctx, 107);
                    {
                        this.state = 299;
                        this.match(Cobol85PreprocessorParser.NSEQ);
                    }
                    break;
                case 108:
                    this.enterOuterAlt(_localctx, 108);
                    {
                        this.state = 300;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NS || _la === Cobol85PreprocessorParser.NSYMBOL)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 301;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 302;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.DBCS || _la === Cobol85PreprocessorParser.NAT || _la === Cobol85PreprocessorParser.NATIONAL)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 303;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 109:
                    this.enterOuterAlt(_localctx, 109);
                    {
                        this.state = 304;
                        this.match(Cobol85PreprocessorParser.NOVBREF);
                    }
                    break;
                case 110:
                    this.enterOuterAlt(_localctx, 110);
                    {
                        this.state = 305;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NOX || _la === Cobol85PreprocessorParser.NOXREF)) {
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
                case 111:
                    this.enterOuterAlt(_localctx, 111);
                    {
                        this.state = 306;
                        this.match(Cobol85PreprocessorParser.NOZWB);
                    }
                    break;
                case 112:
                    this.enterOuterAlt(_localctx, 112);
                    {
                        this.state = 307;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.NUM || _la === Cobol85PreprocessorParser.NUMBER)) {
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
                case 113:
                    this.enterOuterAlt(_localctx, 113);
                    {
                        this.state = 308;
                        this.match(Cobol85PreprocessorParser.NUMPROC);
                        this.state = 309;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 310;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.MIG || _la === Cobol85PreprocessorParser.NOPFD || _la === Cobol85PreprocessorParser.PFD)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 311;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 114:
                    this.enterOuterAlt(_localctx, 114);
                    {
                        this.state = 312;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.OBJ || _la === Cobol85PreprocessorParser.OBJECT)) {
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
                case 115:
                    this.enterOuterAlt(_localctx, 115);
                    {
                        this.state = 313;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.OFF || _la === Cobol85PreprocessorParser.OFFSET)) {
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
                case 116:
                    this.enterOuterAlt(_localctx, 116);
                    {
                        this.state = 314;
                        this.match(Cobol85PreprocessorParser.OPMARGINS);
                        this.state = 315;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 316;
                        this.literal();
                        this.state = 317;
                        this.match(Cobol85PreprocessorParser.COMMACHAR);
                        this.state = 318;
                        this.literal();
                        this.state = 321;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                            {
                                this.state = 319;
                                this.match(Cobol85PreprocessorParser.COMMACHAR);
                                this.state = 320;
                                this.literal();
                            }
                        }
                        this.state = 323;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 117:
                    this.enterOuterAlt(_localctx, 117);
                    {
                        this.state = 325;
                        this.match(Cobol85PreprocessorParser.OPSEQUENCE);
                        this.state = 326;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 327;
                        this.literal();
                        this.state = 328;
                        this.match(Cobol85PreprocessorParser.COMMACHAR);
                        this.state = 329;
                        this.literal();
                        this.state = 330;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 118:
                    this.enterOuterAlt(_localctx, 118);
                    {
                        this.state = 332;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.OPT || _la === Cobol85PreprocessorParser.OPTIMIZE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 336;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                            case 1:
                                {
                                    this.state = 333;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 334;
                                    _la = this._input.LA(1);
                                    if (!(_la === Cobol85PreprocessorParser.FULL || _la === Cobol85PreprocessorParser.STD)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 335;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 119:
                    this.enterOuterAlt(_localctx, 119);
                    {
                        this.state = 338;
                        this.match(Cobol85PreprocessorParser.OPTFILE);
                    }
                    break;
                case 120:
                    this.enterOuterAlt(_localctx, 120);
                    {
                        this.state = 339;
                        this.match(Cobol85PreprocessorParser.OPTIONS);
                    }
                    break;
                case 121:
                    this.enterOuterAlt(_localctx, 121);
                    {
                        this.state = 340;
                        this.match(Cobol85PreprocessorParser.OP);
                    }
                    break;
                case 122:
                    this.enterOuterAlt(_localctx, 122);
                    {
                        this.state = 341;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.OUT || _la === Cobol85PreprocessorParser.OUTDD)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 342;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 343;
                        this.cobolWord();
                        this.state = 344;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 123:
                    this.enterOuterAlt(_localctx, 123);
                    {
                        this.state = 346;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.PGMN || _la === Cobol85PreprocessorParser.PGMNAME)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 347;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 348;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.CO || _la === Cobol85PreprocessorParser.COMPAT || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (Cobol85PreprocessorParser.LM - 85)) | (1 << (Cobol85PreprocessorParser.LONGMIXED - 85)) | (1 << (Cobol85PreprocessorParser.LONGUPPER - 85)) | (1 << (Cobol85PreprocessorParser.LU - 85)) | (1 << (Cobol85PreprocessorParser.MIXED - 85)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (Cobol85PreprocessorParser.UPPER - 256)) | (1 << (Cobol85PreprocessorParser.M_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.U_CHAR - 256)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 349;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 124:
                    this.enterOuterAlt(_localctx, 124);
                    {
                        this.state = 350;
                        this.match(Cobol85PreprocessorParser.PROLOG);
                    }
                    break;
                case 125:
                    this.enterOuterAlt(_localctx, 125);
                    {
                        this.state = 351;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.QUOTE || _la === Cobol85PreprocessorParser.Q_CHAR)) {
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
                case 126:
                    this.enterOuterAlt(_localctx, 126);
                    {
                        this.state = 352;
                        this.match(Cobol85PreprocessorParser.RENT);
                    }
                    break;
                case 127:
                    this.enterOuterAlt(_localctx, 127);
                    {
                        this.state = 353;
                        this.match(Cobol85PreprocessorParser.RMODE);
                        this.state = 354;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 358;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Cobol85PreprocessorParser.ANY:
                                {
                                    this.state = 355;
                                    this.match(Cobol85PreprocessorParser.ANY);
                                }
                                break;
                            case Cobol85PreprocessorParser.AUTO:
                                {
                                    this.state = 356;
                                    this.match(Cobol85PreprocessorParser.AUTO);
                                }
                                break;
                            case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                            case Cobol85PreprocessorParser.NUMERICLITERAL:
                                {
                                    this.state = 357;
                                    this.literal();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 360;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 128:
                    this.enterOuterAlt(_localctx, 128);
                    {
                        this.state = 361;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.SEQ || _la === Cobol85PreprocessorParser.SEQUENCE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 368;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                            case 1:
                                {
                                    this.state = 362;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 363;
                                    this.literal();
                                    this.state = 364;
                                    this.match(Cobol85PreprocessorParser.COMMACHAR);
                                    this.state = 365;
                                    this.literal();
                                    this.state = 366;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 129:
                    this.enterOuterAlt(_localctx, 129);
                    {
                        this.state = 370;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.SIZE || _la === Cobol85PreprocessorParser.SZ)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 371;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 374;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Cobol85PreprocessorParser.MAX:
                                {
                                    this.state = 372;
                                    this.match(Cobol85PreprocessorParser.MAX);
                                }
                                break;
                            case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                            case Cobol85PreprocessorParser.NUMERICLITERAL:
                                {
                                    this.state = 373;
                                    this.literal();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 376;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 130:
                    this.enterOuterAlt(_localctx, 130);
                    {
                        this.state = 377;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.SOURCE || _la === Cobol85PreprocessorParser.S_CHAR)) {
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
                case 131:
                    this.enterOuterAlt(_localctx, 131);
                    {
                        this.state = 378;
                        this.match(Cobol85PreprocessorParser.SP);
                    }
                    break;
                case 132:
                    this.enterOuterAlt(_localctx, 132);
                    {
                        this.state = 379;
                        this.match(Cobol85PreprocessorParser.SPACE);
                        this.state = 380;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 381;
                        this.literal();
                        this.state = 382;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 133:
                    this.enterOuterAlt(_localctx, 133);
                    {
                        this.state = 384;
                        this.match(Cobol85PreprocessorParser.SPIE);
                    }
                    break;
                case 134:
                    this.enterOuterAlt(_localctx, 134);
                    {
                        this.state = 385;
                        this.match(Cobol85PreprocessorParser.SQL);
                        this.state = 390;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                            case 1:
                                {
                                    this.state = 386;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 387;
                                    this.literal();
                                    this.state = 388;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 135:
                    this.enterOuterAlt(_localctx, 135);
                    {
                        this.state = 392;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.SQLC || _la === Cobol85PreprocessorParser.SQLCCSID)) {
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
                case 136:
                    this.enterOuterAlt(_localctx, 136);
                    {
                        this.state = 393;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.SSR || _la === Cobol85PreprocessorParser.SSRANGE)) {
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
                case 137:
                    this.enterOuterAlt(_localctx, 137);
                    {
                        this.state = 394;
                        this.match(Cobol85PreprocessorParser.SYSEIB);
                    }
                    break;
                case 138:
                    this.enterOuterAlt(_localctx, 138);
                    {
                        this.state = 395;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.TERM || _la === Cobol85PreprocessorParser.TERMINAL)) {
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
                case 139:
                    this.enterOuterAlt(_localctx, 139);
                    {
                        this.state = 396;
                        this.match(Cobol85PreprocessorParser.TEST);
                        this.state = 414;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                            case 1:
                                {
                                    this.state = 397;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 399;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.HOOK || _la === Cobol85PreprocessorParser.NOHOOK) {
                                        {
                                            this.state = 398;
                                            _la = this._input.LA(1);
                                            if (!(_la === Cobol85PreprocessorParser.HOOK || _la === Cobol85PreprocessorParser.NOHOOK)) {
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
                                    this.state = 402;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 401;
                                                this.match(Cobol85PreprocessorParser.COMMACHAR);
                                            }
                                            break;
                                    }
                                    this.state = 405;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.NOSEP || _la === Cobol85PreprocessorParser.NOSEPARATE || _la === Cobol85PreprocessorParser.SEP || _la === Cobol85PreprocessorParser.SEPARATE) {
                                        {
                                            this.state = 404;
                                            _la = this._input.LA(1);
                                            if (!(_la === Cobol85PreprocessorParser.NOSEP || _la === Cobol85PreprocessorParser.NOSEPARATE || _la === Cobol85PreprocessorParser.SEP || _la === Cobol85PreprocessorParser.SEPARATE)) {
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
                                    this.state = 408;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.COMMACHAR) {
                                        {
                                            this.state = 407;
                                            this.match(Cobol85PreprocessorParser.COMMACHAR);
                                        }
                                    }
                                    this.state = 411;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.EJPD || _la === Cobol85PreprocessorParser.NOEJPD) {
                                        {
                                            this.state = 410;
                                            _la = this._input.LA(1);
                                            if (!(_la === Cobol85PreprocessorParser.EJPD || _la === Cobol85PreprocessorParser.NOEJPD)) {
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
                                    this.state = 413;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 140:
                    this.enterOuterAlt(_localctx, 140);
                    {
                        this.state = 416;
                        this.match(Cobol85PreprocessorParser.THREAD);
                    }
                    break;
                case 141:
                    this.enterOuterAlt(_localctx, 141);
                    {
                        this.state = 417;
                        this.match(Cobol85PreprocessorParser.TRUNC);
                        this.state = 418;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 419;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.BIN || _la === Cobol85PreprocessorParser.OPT || _la === Cobol85PreprocessorParser.STD)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 420;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 142:
                    this.enterOuterAlt(_localctx, 142);
                    {
                        this.state = 421;
                        this.match(Cobol85PreprocessorParser.VBREF);
                    }
                    break;
                case 143:
                    this.enterOuterAlt(_localctx, 143);
                    {
                        this.state = 422;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.WD || _la === Cobol85PreprocessorParser.WORD)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 423;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 424;
                        this.cobolWord();
                        this.state = 425;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 144:
                    this.enterOuterAlt(_localctx, 144);
                    {
                        this.state = 427;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.XMLPARSE || _la === Cobol85PreprocessorParser.XP)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 428;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 429;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.COMPAT || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (Cobol85PreprocessorParser.XMLSS - 261)) | (1 << (Cobol85PreprocessorParser.C_CHAR - 261)) | (1 << (Cobol85PreprocessorParser.X_CHAR - 261)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 430;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 145:
                    this.enterOuterAlt(_localctx, 145);
                    {
                        this.state = 431;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.XREF || _la === Cobol85PreprocessorParser.X_CHAR)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 437;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                            case 1:
                                {
                                    this.state = 432;
                                    this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                    this.state = 434;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Cobol85PreprocessorParser.FULL || _la === Cobol85PreprocessorParser.SHORT) {
                                        {
                                            this.state = 433;
                                            _la = this._input.LA(1);
                                            if (!(_la === Cobol85PreprocessorParser.FULL || _la === Cobol85PreprocessorParser.SHORT)) {
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
                                    this.state = 436;
                                    this.match(Cobol85PreprocessorParser.RPARENCHAR);
                                }
                                break;
                        }
                    }
                    break;
                case 146:
                    this.enterOuterAlt(_localctx, 146);
                    {
                        this.state = 439;
                        _la = this._input.LA(1);
                        if (!(_la === Cobol85PreprocessorParser.YEARWINDOW || _la === Cobol85PreprocessorParser.YW)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 440;
                        this.match(Cobol85PreprocessorParser.LPARENCHAR);
                        this.state = 441;
                        this.literal();
                        this.state = 442;
                        this.match(Cobol85PreprocessorParser.RPARENCHAR);
                    }
                    break;
                case 147:
                    this.enterOuterAlt(_localctx, 147);
                    {
                        this.state = 444;
                        this.match(Cobol85PreprocessorParser.ZWB);
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
    Cobol85PreprocessorParser.prototype.execCicsStatement = function () {
        var _localctx = new ExecCicsStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, Cobol85PreprocessorParser.RULE_execCicsStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 447;
                this.match(Cobol85PreprocessorParser.EXEC);
                this.state = 448;
                this.match(Cobol85PreprocessorParser.CICS);
                this.state = 449;
                this.charData();
                this.state = 450;
                this.match(Cobol85PreprocessorParser.END_EXEC);
                this.state = 452;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                    case 1:
                        {
                            this.state = 451;
                            this.match(Cobol85PreprocessorParser.DOT);
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
    Cobol85PreprocessorParser.prototype.execSqlStatement = function () {
        var _localctx = new ExecSqlStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, Cobol85PreprocessorParser.RULE_execSqlStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this.match(Cobol85PreprocessorParser.EXEC);
                this.state = 455;
                this.match(Cobol85PreprocessorParser.SQL);
                this.state = 456;
                this.charDataSql();
                this.state = 457;
                this.match(Cobol85PreprocessorParser.END_EXEC);
                this.state = 459;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                    case 1:
                        {
                            this.state = 458;
                            this.match(Cobol85PreprocessorParser.DOT);
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
    Cobol85PreprocessorParser.prototype.execSqlImsStatement = function () {
        var _localctx = new ExecSqlImsStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, Cobol85PreprocessorParser.RULE_execSqlImsStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                this.match(Cobol85PreprocessorParser.EXEC);
                this.state = 462;
                this.match(Cobol85PreprocessorParser.SQLIMS);
                this.state = 463;
                this.charData();
                this.state = 464;
                this.match(Cobol85PreprocessorParser.END_EXEC);
                this.state = 466;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 465;
                            this.match(Cobol85PreprocessorParser.DOT);
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
    Cobol85PreprocessorParser.prototype.copyStatement = function () {
        var _localctx = new CopyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, Cobol85PreprocessorParser.RULE_copyStatement);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 468;
                this.match(Cobol85PreprocessorParser.COPY);
                this.state = 469;
                this.copySource();
                this.state = 484;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 473;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === Cobol85PreprocessorParser.NEWLINE) {
                                    {
                                        {
                                            this.state = 470;
                                            this.match(Cobol85PreprocessorParser.NEWLINE);
                                        }
                                    }
                                    this.state = 475;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 480;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Cobol85PreprocessorParser.IN:
                                    case Cobol85PreprocessorParser.OF:
                                        {
                                            this.state = 476;
                                            this.directoryPhrase();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.ON:
                                        {
                                            this.state = 477;
                                            this.familyPhrase();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.REPLACING:
                                        {
                                            this.state = 478;
                                            this.replacingPhrase();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.SUPPRESS:
                                        {
                                            this.state = 479;
                                            this.match(Cobol85PreprocessorParser.SUPPRESS);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                    }
                    this.state = 486;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                }
                this.state = 490;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Cobol85PreprocessorParser.NEWLINE) {
                    {
                        {
                            this.state = 487;
                            this.match(Cobol85PreprocessorParser.NEWLINE);
                        }
                    }
                    this.state = 492;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 493;
                this.match(Cobol85PreprocessorParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.copySource = function () {
        var _localctx = new CopySourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, Cobol85PreprocessorParser.RULE_copySource);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 498;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                    case Cobol85PreprocessorParser.NUMERICLITERAL:
                        {
                            this.state = 495;
                            this.literal();
                        }
                        break;
                    case Cobol85PreprocessorParser.ADATA:
                    case Cobol85PreprocessorParser.ADV:
                    case Cobol85PreprocessorParser.ALIAS:
                    case Cobol85PreprocessorParser.ANSI:
                    case Cobol85PreprocessorParser.ANY:
                    case Cobol85PreprocessorParser.APOST:
                    case Cobol85PreprocessorParser.AR:
                    case Cobol85PreprocessorParser.ARITH:
                    case Cobol85PreprocessorParser.AUTO:
                    case Cobol85PreprocessorParser.AWO:
                    case Cobol85PreprocessorParser.BIN:
                    case Cobol85PreprocessorParser.BLOCK0:
                    case Cobol85PreprocessorParser.BUF:
                    case Cobol85PreprocessorParser.BUFSIZE:
                    case Cobol85PreprocessorParser.BY:
                    case Cobol85PreprocessorParser.CBL:
                    case Cobol85PreprocessorParser.CBLCARD:
                    case Cobol85PreprocessorParser.CO:
                    case Cobol85PreprocessorParser.COBOL2:
                    case Cobol85PreprocessorParser.COBOL3:
                    case Cobol85PreprocessorParser.CODEPAGE:
                    case Cobol85PreprocessorParser.COMPAT:
                    case Cobol85PreprocessorParser.COMPILE:
                    case Cobol85PreprocessorParser.CP:
                    case Cobol85PreprocessorParser.CPP:
                    case Cobol85PreprocessorParser.CPSM:
                    case Cobol85PreprocessorParser.CS:
                    case Cobol85PreprocessorParser.CURR:
                    case Cobol85PreprocessorParser.CURRENCY:
                    case Cobol85PreprocessorParser.DATA:
                    case Cobol85PreprocessorParser.DATEPROC:
                    case Cobol85PreprocessorParser.DBCS:
                    case Cobol85PreprocessorParser.DD:
                    case Cobol85PreprocessorParser.DEBUG:
                    case Cobol85PreprocessorParser.DECK:
                    case Cobol85PreprocessorParser.DIAGTRUNC:
                    case Cobol85PreprocessorParser.DLI:
                    case Cobol85PreprocessorParser.DLL:
                    case Cobol85PreprocessorParser.DP:
                    case Cobol85PreprocessorParser.DTR:
                    case Cobol85PreprocessorParser.DU:
                    case Cobol85PreprocessorParser.DUMP:
                    case Cobol85PreprocessorParser.DYN:
                    case Cobol85PreprocessorParser.DYNAM:
                    case Cobol85PreprocessorParser.EDF:
                    case Cobol85PreprocessorParser.EJECT:
                    case Cobol85PreprocessorParser.EJPD:
                    case Cobol85PreprocessorParser.EN:
                    case Cobol85PreprocessorParser.ENGLISH:
                    case Cobol85PreprocessorParser.EPILOG:
                    case Cobol85PreprocessorParser.EXCI:
                    case Cobol85PreprocessorParser.EXIT:
                    case Cobol85PreprocessorParser.EXP:
                    case Cobol85PreprocessorParser.EXPORTALL:
                    case Cobol85PreprocessorParser.EXTEND:
                    case Cobol85PreprocessorParser.FASTSRT:
                    case Cobol85PreprocessorParser.FLAG:
                    case Cobol85PreprocessorParser.FLAGSTD:
                    case Cobol85PreprocessorParser.FSRT:
                    case Cobol85PreprocessorParser.FULL:
                    case Cobol85PreprocessorParser.GDS:
                    case Cobol85PreprocessorParser.GRAPHIC:
                    case Cobol85PreprocessorParser.HOOK:
                    case Cobol85PreprocessorParser.IN:
                    case Cobol85PreprocessorParser.INTDATE:
                    case Cobol85PreprocessorParser.JA:
                    case Cobol85PreprocessorParser.JP:
                    case Cobol85PreprocessorParser.KA:
                    case Cobol85PreprocessorParser.LANG:
                    case Cobol85PreprocessorParser.LANGUAGE:
                    case Cobol85PreprocessorParser.LC:
                    case Cobol85PreprocessorParser.LENGTH:
                    case Cobol85PreprocessorParser.LIB:
                    case Cobol85PreprocessorParser.LILIAN:
                    case Cobol85PreprocessorParser.LIN:
                    case Cobol85PreprocessorParser.LINECOUNT:
                    case Cobol85PreprocessorParser.LINKAGE:
                    case Cobol85PreprocessorParser.LIST:
                    case Cobol85PreprocessorParser.LM:
                    case Cobol85PreprocessorParser.LONGMIXED:
                    case Cobol85PreprocessorParser.LONGUPPER:
                    case Cobol85PreprocessorParser.LU:
                    case Cobol85PreprocessorParser.MAP:
                    case Cobol85PreprocessorParser.MARGINS:
                    case Cobol85PreprocessorParser.MAX:
                    case Cobol85PreprocessorParser.MD:
                    case Cobol85PreprocessorParser.MDECK:
                    case Cobol85PreprocessorParser.MIG:
                    case Cobol85PreprocessorParser.MIXED:
                    case Cobol85PreprocessorParser.NAME:
                    case Cobol85PreprocessorParser.NAT:
                    case Cobol85PreprocessorParser.NATIONAL:
                    case Cobol85PreprocessorParser.NATLANG:
                    case Cobol85PreprocessorParser.NN:
                    case Cobol85PreprocessorParser.NO:
                    case Cobol85PreprocessorParser.NOADATA:
                    case Cobol85PreprocessorParser.NOADV:
                    case Cobol85PreprocessorParser.NOALIAS:
                    case Cobol85PreprocessorParser.NOAWO:
                    case Cobol85PreprocessorParser.NOBLOCK0:
                    case Cobol85PreprocessorParser.NOC:
                    case Cobol85PreprocessorParser.NOCBLCARD:
                    case Cobol85PreprocessorParser.NOCICS:
                    case Cobol85PreprocessorParser.NOCMPR2:
                    case Cobol85PreprocessorParser.NOCOMPILE:
                    case Cobol85PreprocessorParser.NOCPSM:
                    case Cobol85PreprocessorParser.NOCURR:
                    case Cobol85PreprocessorParser.NOCURRENCY:
                    case Cobol85PreprocessorParser.NOD:
                    case Cobol85PreprocessorParser.NODATEPROC:
                    case Cobol85PreprocessorParser.NODBCS:
                    case Cobol85PreprocessorParser.NODE:
                    case Cobol85PreprocessorParser.NODEBUG:
                    case Cobol85PreprocessorParser.NODECK:
                    case Cobol85PreprocessorParser.NODIAGTRUNC:
                    case Cobol85PreprocessorParser.NODLL:
                    case Cobol85PreprocessorParser.NODU:
                    case Cobol85PreprocessorParser.NODUMP:
                    case Cobol85PreprocessorParser.NODP:
                    case Cobol85PreprocessorParser.NODTR:
                    case Cobol85PreprocessorParser.NODYN:
                    case Cobol85PreprocessorParser.NODYNAM:
                    case Cobol85PreprocessorParser.NOEDF:
                    case Cobol85PreprocessorParser.NOEJPD:
                    case Cobol85PreprocessorParser.NOEPILOG:
                    case Cobol85PreprocessorParser.NOEXIT:
                    case Cobol85PreprocessorParser.NOEXP:
                    case Cobol85PreprocessorParser.NOEXPORTALL:
                    case Cobol85PreprocessorParser.NOF:
                    case Cobol85PreprocessorParser.NOFASTSRT:
                    case Cobol85PreprocessorParser.NOFEPI:
                    case Cobol85PreprocessorParser.NOFLAG:
                    case Cobol85PreprocessorParser.NOFLAGMIG:
                    case Cobol85PreprocessorParser.NOFLAGSTD:
                    case Cobol85PreprocessorParser.NOFSRT:
                    case Cobol85PreprocessorParser.NOGRAPHIC:
                    case Cobol85PreprocessorParser.NOHOOK:
                    case Cobol85PreprocessorParser.NOLENGTH:
                    case Cobol85PreprocessorParser.NOLIB:
                    case Cobol85PreprocessorParser.NOLINKAGE:
                    case Cobol85PreprocessorParser.NOLIST:
                    case Cobol85PreprocessorParser.NOMAP:
                    case Cobol85PreprocessorParser.NOMD:
                    case Cobol85PreprocessorParser.NOMDECK:
                    case Cobol85PreprocessorParser.NONAME:
                    case Cobol85PreprocessorParser.NONUM:
                    case Cobol85PreprocessorParser.NONUMBER:
                    case Cobol85PreprocessorParser.NOOBJ:
                    case Cobol85PreprocessorParser.NOOBJECT:
                    case Cobol85PreprocessorParser.NOOFF:
                    case Cobol85PreprocessorParser.NOOFFSET:
                    case Cobol85PreprocessorParser.NOOPSEQUENCE:
                    case Cobol85PreprocessorParser.NOOPT:
                    case Cobol85PreprocessorParser.NOOPTIMIZE:
                    case Cobol85PreprocessorParser.NOOPTIONS:
                    case Cobol85PreprocessorParser.NOP:
                    case Cobol85PreprocessorParser.NOPFD:
                    case Cobol85PreprocessorParser.NOPROLOG:
                    case Cobol85PreprocessorParser.NORENT:
                    case Cobol85PreprocessorParser.NOS:
                    case Cobol85PreprocessorParser.NOSEP:
                    case Cobol85PreprocessorParser.NOSEPARATE:
                    case Cobol85PreprocessorParser.NOSEQ:
                    case Cobol85PreprocessorParser.NOSOURCE:
                    case Cobol85PreprocessorParser.NOSPIE:
                    case Cobol85PreprocessorParser.NOSQL:
                    case Cobol85PreprocessorParser.NOSQLC:
                    case Cobol85PreprocessorParser.NOSQLCCSID:
                    case Cobol85PreprocessorParser.NOSSR:
                    case Cobol85PreprocessorParser.NOSSRANGE:
                    case Cobol85PreprocessorParser.NOSTDTRUNC:
                    case Cobol85PreprocessorParser.NOSEQUENCE:
                    case Cobol85PreprocessorParser.NOTERM:
                    case Cobol85PreprocessorParser.NOTERMINAL:
                    case Cobol85PreprocessorParser.NOTEST:
                    case Cobol85PreprocessorParser.NOTHREAD:
                    case Cobol85PreprocessorParser.NOTRIG:
                    case Cobol85PreprocessorParser.NOVBREF:
                    case Cobol85PreprocessorParser.NOWORD:
                    case Cobol85PreprocessorParser.NOX:
                    case Cobol85PreprocessorParser.NOXREF:
                    case Cobol85PreprocessorParser.NOZWB:
                    case Cobol85PreprocessorParser.NS:
                    case Cobol85PreprocessorParser.NSEQ:
                    case Cobol85PreprocessorParser.NSYMBOL:
                    case Cobol85PreprocessorParser.NUM:
                    case Cobol85PreprocessorParser.NUMBER:
                    case Cobol85PreprocessorParser.NUMPROC:
                    case Cobol85PreprocessorParser.OBJ:
                    case Cobol85PreprocessorParser.OBJECT:
                    case Cobol85PreprocessorParser.OF:
                    case Cobol85PreprocessorParser.OFF:
                    case Cobol85PreprocessorParser.OFFSET:
                    case Cobol85PreprocessorParser.ON:
                    case Cobol85PreprocessorParser.OP:
                    case Cobol85PreprocessorParser.OPMARGINS:
                    case Cobol85PreprocessorParser.OPSEQUENCE:
                    case Cobol85PreprocessorParser.OPT:
                    case Cobol85PreprocessorParser.OPTFILE:
                    case Cobol85PreprocessorParser.OPTIMIZE:
                    case Cobol85PreprocessorParser.OPTIONS:
                    case Cobol85PreprocessorParser.OUT:
                    case Cobol85PreprocessorParser.OUTDD:
                    case Cobol85PreprocessorParser.PFD:
                    case Cobol85PreprocessorParser.PPTDBG:
                    case Cobol85PreprocessorParser.PGMN:
                    case Cobol85PreprocessorParser.PGMNAME:
                    case Cobol85PreprocessorParser.PROCESS:
                    case Cobol85PreprocessorParser.PROLOG:
                    case Cobol85PreprocessorParser.QUOTE:
                    case Cobol85PreprocessorParser.RENT:
                    case Cobol85PreprocessorParser.REPLACING:
                    case Cobol85PreprocessorParser.RMODE:
                    case Cobol85PreprocessorParser.SEP:
                    case Cobol85PreprocessorParser.SEPARATE:
                    case Cobol85PreprocessorParser.SEQ:
                    case Cobol85PreprocessorParser.SEQUENCE:
                    case Cobol85PreprocessorParser.SHORT:
                    case Cobol85PreprocessorParser.SIZE:
                    case Cobol85PreprocessorParser.SOURCE:
                    case Cobol85PreprocessorParser.SP:
                    case Cobol85PreprocessorParser.SPACE:
                    case Cobol85PreprocessorParser.SPIE:
                    case Cobol85PreprocessorParser.SQL:
                    case Cobol85PreprocessorParser.SQLC:
                    case Cobol85PreprocessorParser.SQLCCSID:
                    case Cobol85PreprocessorParser.SS:
                    case Cobol85PreprocessorParser.SSR:
                    case Cobol85PreprocessorParser.SSRANGE:
                    case Cobol85PreprocessorParser.STD:
                    case Cobol85PreprocessorParser.SYSEIB:
                    case Cobol85PreprocessorParser.SZ:
                    case Cobol85PreprocessorParser.TERM:
                    case Cobol85PreprocessorParser.TERMINAL:
                    case Cobol85PreprocessorParser.TEST:
                    case Cobol85PreprocessorParser.THREAD:
                    case Cobol85PreprocessorParser.TITLE:
                    case Cobol85PreprocessorParser.TRIG:
                    case Cobol85PreprocessorParser.TRUNC:
                    case Cobol85PreprocessorParser.UE:
                    case Cobol85PreprocessorParser.UPPER:
                    case Cobol85PreprocessorParser.VBREF:
                    case Cobol85PreprocessorParser.WD:
                    case Cobol85PreprocessorParser.XMLPARSE:
                    case Cobol85PreprocessorParser.XMLSS:
                    case Cobol85PreprocessorParser.XOPTS:
                    case Cobol85PreprocessorParser.XREF:
                    case Cobol85PreprocessorParser.YEARWINDOW:
                    case Cobol85PreprocessorParser.YW:
                    case Cobol85PreprocessorParser.ZWB:
                    case Cobol85PreprocessorParser.C_CHAR:
                    case Cobol85PreprocessorParser.D_CHAR:
                    case Cobol85PreprocessorParser.E_CHAR:
                    case Cobol85PreprocessorParser.F_CHAR:
                    case Cobol85PreprocessorParser.H_CHAR:
                    case Cobol85PreprocessorParser.I_CHAR:
                    case Cobol85PreprocessorParser.M_CHAR:
                    case Cobol85PreprocessorParser.N_CHAR:
                    case Cobol85PreprocessorParser.Q_CHAR:
                    case Cobol85PreprocessorParser.S_CHAR:
                    case Cobol85PreprocessorParser.U_CHAR:
                    case Cobol85PreprocessorParser.W_CHAR:
                    case Cobol85PreprocessorParser.X_CHAR:
                    case Cobol85PreprocessorParser.COMMACHAR:
                    case Cobol85PreprocessorParser.IDENTIFIER:
                        {
                            this.state = 496;
                            this.cobolWord();
                        }
                        break;
                    case Cobol85PreprocessorParser.FILENAME:
                        {
                            this.state = 497;
                            this.filename();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 502;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 500;
                            _la = this._input.LA(1);
                            if (!(_la === Cobol85PreprocessorParser.IN || _la === Cobol85PreprocessorParser.OF)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 501;
                            this.copyLibrary();
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
    Cobol85PreprocessorParser.prototype.copyLibrary = function () {
        var _localctx = new CopyLibraryContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, Cobol85PreprocessorParser.RULE_copyLibrary);
        try {
            this.state = 506;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                case Cobol85PreprocessorParser.NUMERICLITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 504;
                        this.literal();
                    }
                    break;
                case Cobol85PreprocessorParser.ADATA:
                case Cobol85PreprocessorParser.ADV:
                case Cobol85PreprocessorParser.ALIAS:
                case Cobol85PreprocessorParser.ANSI:
                case Cobol85PreprocessorParser.ANY:
                case Cobol85PreprocessorParser.APOST:
                case Cobol85PreprocessorParser.AR:
                case Cobol85PreprocessorParser.ARITH:
                case Cobol85PreprocessorParser.AUTO:
                case Cobol85PreprocessorParser.AWO:
                case Cobol85PreprocessorParser.BIN:
                case Cobol85PreprocessorParser.BLOCK0:
                case Cobol85PreprocessorParser.BUF:
                case Cobol85PreprocessorParser.BUFSIZE:
                case Cobol85PreprocessorParser.BY:
                case Cobol85PreprocessorParser.CBL:
                case Cobol85PreprocessorParser.CBLCARD:
                case Cobol85PreprocessorParser.CO:
                case Cobol85PreprocessorParser.COBOL2:
                case Cobol85PreprocessorParser.COBOL3:
                case Cobol85PreprocessorParser.CODEPAGE:
                case Cobol85PreprocessorParser.COMPAT:
                case Cobol85PreprocessorParser.COMPILE:
                case Cobol85PreprocessorParser.CP:
                case Cobol85PreprocessorParser.CPP:
                case Cobol85PreprocessorParser.CPSM:
                case Cobol85PreprocessorParser.CS:
                case Cobol85PreprocessorParser.CURR:
                case Cobol85PreprocessorParser.CURRENCY:
                case Cobol85PreprocessorParser.DATA:
                case Cobol85PreprocessorParser.DATEPROC:
                case Cobol85PreprocessorParser.DBCS:
                case Cobol85PreprocessorParser.DD:
                case Cobol85PreprocessorParser.DEBUG:
                case Cobol85PreprocessorParser.DECK:
                case Cobol85PreprocessorParser.DIAGTRUNC:
                case Cobol85PreprocessorParser.DLI:
                case Cobol85PreprocessorParser.DLL:
                case Cobol85PreprocessorParser.DP:
                case Cobol85PreprocessorParser.DTR:
                case Cobol85PreprocessorParser.DU:
                case Cobol85PreprocessorParser.DUMP:
                case Cobol85PreprocessorParser.DYN:
                case Cobol85PreprocessorParser.DYNAM:
                case Cobol85PreprocessorParser.EDF:
                case Cobol85PreprocessorParser.EJECT:
                case Cobol85PreprocessorParser.EJPD:
                case Cobol85PreprocessorParser.EN:
                case Cobol85PreprocessorParser.ENGLISH:
                case Cobol85PreprocessorParser.EPILOG:
                case Cobol85PreprocessorParser.EXCI:
                case Cobol85PreprocessorParser.EXIT:
                case Cobol85PreprocessorParser.EXP:
                case Cobol85PreprocessorParser.EXPORTALL:
                case Cobol85PreprocessorParser.EXTEND:
                case Cobol85PreprocessorParser.FASTSRT:
                case Cobol85PreprocessorParser.FLAG:
                case Cobol85PreprocessorParser.FLAGSTD:
                case Cobol85PreprocessorParser.FSRT:
                case Cobol85PreprocessorParser.FULL:
                case Cobol85PreprocessorParser.GDS:
                case Cobol85PreprocessorParser.GRAPHIC:
                case Cobol85PreprocessorParser.HOOK:
                case Cobol85PreprocessorParser.IN:
                case Cobol85PreprocessorParser.INTDATE:
                case Cobol85PreprocessorParser.JA:
                case Cobol85PreprocessorParser.JP:
                case Cobol85PreprocessorParser.KA:
                case Cobol85PreprocessorParser.LANG:
                case Cobol85PreprocessorParser.LANGUAGE:
                case Cobol85PreprocessorParser.LC:
                case Cobol85PreprocessorParser.LENGTH:
                case Cobol85PreprocessorParser.LIB:
                case Cobol85PreprocessorParser.LILIAN:
                case Cobol85PreprocessorParser.LIN:
                case Cobol85PreprocessorParser.LINECOUNT:
                case Cobol85PreprocessorParser.LINKAGE:
                case Cobol85PreprocessorParser.LIST:
                case Cobol85PreprocessorParser.LM:
                case Cobol85PreprocessorParser.LONGMIXED:
                case Cobol85PreprocessorParser.LONGUPPER:
                case Cobol85PreprocessorParser.LU:
                case Cobol85PreprocessorParser.MAP:
                case Cobol85PreprocessorParser.MARGINS:
                case Cobol85PreprocessorParser.MAX:
                case Cobol85PreprocessorParser.MD:
                case Cobol85PreprocessorParser.MDECK:
                case Cobol85PreprocessorParser.MIG:
                case Cobol85PreprocessorParser.MIXED:
                case Cobol85PreprocessorParser.NAME:
                case Cobol85PreprocessorParser.NAT:
                case Cobol85PreprocessorParser.NATIONAL:
                case Cobol85PreprocessorParser.NATLANG:
                case Cobol85PreprocessorParser.NN:
                case Cobol85PreprocessorParser.NO:
                case Cobol85PreprocessorParser.NOADATA:
                case Cobol85PreprocessorParser.NOADV:
                case Cobol85PreprocessorParser.NOALIAS:
                case Cobol85PreprocessorParser.NOAWO:
                case Cobol85PreprocessorParser.NOBLOCK0:
                case Cobol85PreprocessorParser.NOC:
                case Cobol85PreprocessorParser.NOCBLCARD:
                case Cobol85PreprocessorParser.NOCICS:
                case Cobol85PreprocessorParser.NOCMPR2:
                case Cobol85PreprocessorParser.NOCOMPILE:
                case Cobol85PreprocessorParser.NOCPSM:
                case Cobol85PreprocessorParser.NOCURR:
                case Cobol85PreprocessorParser.NOCURRENCY:
                case Cobol85PreprocessorParser.NOD:
                case Cobol85PreprocessorParser.NODATEPROC:
                case Cobol85PreprocessorParser.NODBCS:
                case Cobol85PreprocessorParser.NODE:
                case Cobol85PreprocessorParser.NODEBUG:
                case Cobol85PreprocessorParser.NODECK:
                case Cobol85PreprocessorParser.NODIAGTRUNC:
                case Cobol85PreprocessorParser.NODLL:
                case Cobol85PreprocessorParser.NODU:
                case Cobol85PreprocessorParser.NODUMP:
                case Cobol85PreprocessorParser.NODP:
                case Cobol85PreprocessorParser.NODTR:
                case Cobol85PreprocessorParser.NODYN:
                case Cobol85PreprocessorParser.NODYNAM:
                case Cobol85PreprocessorParser.NOEDF:
                case Cobol85PreprocessorParser.NOEJPD:
                case Cobol85PreprocessorParser.NOEPILOG:
                case Cobol85PreprocessorParser.NOEXIT:
                case Cobol85PreprocessorParser.NOEXP:
                case Cobol85PreprocessorParser.NOEXPORTALL:
                case Cobol85PreprocessorParser.NOF:
                case Cobol85PreprocessorParser.NOFASTSRT:
                case Cobol85PreprocessorParser.NOFEPI:
                case Cobol85PreprocessorParser.NOFLAG:
                case Cobol85PreprocessorParser.NOFLAGMIG:
                case Cobol85PreprocessorParser.NOFLAGSTD:
                case Cobol85PreprocessorParser.NOFSRT:
                case Cobol85PreprocessorParser.NOGRAPHIC:
                case Cobol85PreprocessorParser.NOHOOK:
                case Cobol85PreprocessorParser.NOLENGTH:
                case Cobol85PreprocessorParser.NOLIB:
                case Cobol85PreprocessorParser.NOLINKAGE:
                case Cobol85PreprocessorParser.NOLIST:
                case Cobol85PreprocessorParser.NOMAP:
                case Cobol85PreprocessorParser.NOMD:
                case Cobol85PreprocessorParser.NOMDECK:
                case Cobol85PreprocessorParser.NONAME:
                case Cobol85PreprocessorParser.NONUM:
                case Cobol85PreprocessorParser.NONUMBER:
                case Cobol85PreprocessorParser.NOOBJ:
                case Cobol85PreprocessorParser.NOOBJECT:
                case Cobol85PreprocessorParser.NOOFF:
                case Cobol85PreprocessorParser.NOOFFSET:
                case Cobol85PreprocessorParser.NOOPSEQUENCE:
                case Cobol85PreprocessorParser.NOOPT:
                case Cobol85PreprocessorParser.NOOPTIMIZE:
                case Cobol85PreprocessorParser.NOOPTIONS:
                case Cobol85PreprocessorParser.NOP:
                case Cobol85PreprocessorParser.NOPFD:
                case Cobol85PreprocessorParser.NOPROLOG:
                case Cobol85PreprocessorParser.NORENT:
                case Cobol85PreprocessorParser.NOS:
                case Cobol85PreprocessorParser.NOSEP:
                case Cobol85PreprocessorParser.NOSEPARATE:
                case Cobol85PreprocessorParser.NOSEQ:
                case Cobol85PreprocessorParser.NOSOURCE:
                case Cobol85PreprocessorParser.NOSPIE:
                case Cobol85PreprocessorParser.NOSQL:
                case Cobol85PreprocessorParser.NOSQLC:
                case Cobol85PreprocessorParser.NOSQLCCSID:
                case Cobol85PreprocessorParser.NOSSR:
                case Cobol85PreprocessorParser.NOSSRANGE:
                case Cobol85PreprocessorParser.NOSTDTRUNC:
                case Cobol85PreprocessorParser.NOSEQUENCE:
                case Cobol85PreprocessorParser.NOTERM:
                case Cobol85PreprocessorParser.NOTERMINAL:
                case Cobol85PreprocessorParser.NOTEST:
                case Cobol85PreprocessorParser.NOTHREAD:
                case Cobol85PreprocessorParser.NOTRIG:
                case Cobol85PreprocessorParser.NOVBREF:
                case Cobol85PreprocessorParser.NOWORD:
                case Cobol85PreprocessorParser.NOX:
                case Cobol85PreprocessorParser.NOXREF:
                case Cobol85PreprocessorParser.NOZWB:
                case Cobol85PreprocessorParser.NS:
                case Cobol85PreprocessorParser.NSEQ:
                case Cobol85PreprocessorParser.NSYMBOL:
                case Cobol85PreprocessorParser.NUM:
                case Cobol85PreprocessorParser.NUMBER:
                case Cobol85PreprocessorParser.NUMPROC:
                case Cobol85PreprocessorParser.OBJ:
                case Cobol85PreprocessorParser.OBJECT:
                case Cobol85PreprocessorParser.OF:
                case Cobol85PreprocessorParser.OFF:
                case Cobol85PreprocessorParser.OFFSET:
                case Cobol85PreprocessorParser.ON:
                case Cobol85PreprocessorParser.OP:
                case Cobol85PreprocessorParser.OPMARGINS:
                case Cobol85PreprocessorParser.OPSEQUENCE:
                case Cobol85PreprocessorParser.OPT:
                case Cobol85PreprocessorParser.OPTFILE:
                case Cobol85PreprocessorParser.OPTIMIZE:
                case Cobol85PreprocessorParser.OPTIONS:
                case Cobol85PreprocessorParser.OUT:
                case Cobol85PreprocessorParser.OUTDD:
                case Cobol85PreprocessorParser.PFD:
                case Cobol85PreprocessorParser.PPTDBG:
                case Cobol85PreprocessorParser.PGMN:
                case Cobol85PreprocessorParser.PGMNAME:
                case Cobol85PreprocessorParser.PROCESS:
                case Cobol85PreprocessorParser.PROLOG:
                case Cobol85PreprocessorParser.QUOTE:
                case Cobol85PreprocessorParser.RENT:
                case Cobol85PreprocessorParser.REPLACING:
                case Cobol85PreprocessorParser.RMODE:
                case Cobol85PreprocessorParser.SEP:
                case Cobol85PreprocessorParser.SEPARATE:
                case Cobol85PreprocessorParser.SEQ:
                case Cobol85PreprocessorParser.SEQUENCE:
                case Cobol85PreprocessorParser.SHORT:
                case Cobol85PreprocessorParser.SIZE:
                case Cobol85PreprocessorParser.SOURCE:
                case Cobol85PreprocessorParser.SP:
                case Cobol85PreprocessorParser.SPACE:
                case Cobol85PreprocessorParser.SPIE:
                case Cobol85PreprocessorParser.SQL:
                case Cobol85PreprocessorParser.SQLC:
                case Cobol85PreprocessorParser.SQLCCSID:
                case Cobol85PreprocessorParser.SS:
                case Cobol85PreprocessorParser.SSR:
                case Cobol85PreprocessorParser.SSRANGE:
                case Cobol85PreprocessorParser.STD:
                case Cobol85PreprocessorParser.SYSEIB:
                case Cobol85PreprocessorParser.SZ:
                case Cobol85PreprocessorParser.TERM:
                case Cobol85PreprocessorParser.TERMINAL:
                case Cobol85PreprocessorParser.TEST:
                case Cobol85PreprocessorParser.THREAD:
                case Cobol85PreprocessorParser.TITLE:
                case Cobol85PreprocessorParser.TRIG:
                case Cobol85PreprocessorParser.TRUNC:
                case Cobol85PreprocessorParser.UE:
                case Cobol85PreprocessorParser.UPPER:
                case Cobol85PreprocessorParser.VBREF:
                case Cobol85PreprocessorParser.WD:
                case Cobol85PreprocessorParser.XMLPARSE:
                case Cobol85PreprocessorParser.XMLSS:
                case Cobol85PreprocessorParser.XOPTS:
                case Cobol85PreprocessorParser.XREF:
                case Cobol85PreprocessorParser.YEARWINDOW:
                case Cobol85PreprocessorParser.YW:
                case Cobol85PreprocessorParser.ZWB:
                case Cobol85PreprocessorParser.C_CHAR:
                case Cobol85PreprocessorParser.D_CHAR:
                case Cobol85PreprocessorParser.E_CHAR:
                case Cobol85PreprocessorParser.F_CHAR:
                case Cobol85PreprocessorParser.H_CHAR:
                case Cobol85PreprocessorParser.I_CHAR:
                case Cobol85PreprocessorParser.M_CHAR:
                case Cobol85PreprocessorParser.N_CHAR:
                case Cobol85PreprocessorParser.Q_CHAR:
                case Cobol85PreprocessorParser.S_CHAR:
                case Cobol85PreprocessorParser.U_CHAR:
                case Cobol85PreprocessorParser.W_CHAR:
                case Cobol85PreprocessorParser.X_CHAR:
                case Cobol85PreprocessorParser.COMMACHAR:
                case Cobol85PreprocessorParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 505;
                        this.cobolWord();
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
    Cobol85PreprocessorParser.prototype.replacingPhrase = function () {
        var _localctx = new ReplacingPhraseContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, Cobol85PreprocessorParser.RULE_replacingPhrase);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this.match(Cobol85PreprocessorParser.REPLACING);
                this.state = 512;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Cobol85PreprocessorParser.NEWLINE) {
                    {
                        {
                            this.state = 509;
                            this.match(Cobol85PreprocessorParser.NEWLINE);
                        }
                    }
                    this.state = 514;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 515;
                this.replaceClause();
                this.state = 524;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 517;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 516;
                                            this.match(Cobol85PreprocessorParser.NEWLINE);
                                        }
                                    }
                                    this.state = 519;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === Cobol85PreprocessorParser.NEWLINE);
                                this.state = 521;
                                this.replaceClause();
                            }
                        }
                    }
                    this.state = 526;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
    Cobol85PreprocessorParser.prototype.replaceArea = function () {
        var _localctx = new ReplaceAreaContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, Cobol85PreprocessorParser.RULE_replaceArea);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 527;
                this.replaceByStatement();
                this.state = 532;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 530;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case Cobol85PreprocessorParser.COPY:
                                    {
                                        this.state = 528;
                                        this.copyStatement();
                                    }
                                    break;
                                case Cobol85PreprocessorParser.ADATA:
                                case Cobol85PreprocessorParser.ADV:
                                case Cobol85PreprocessorParser.ALIAS:
                                case Cobol85PreprocessorParser.ANSI:
                                case Cobol85PreprocessorParser.ANY:
                                case Cobol85PreprocessorParser.APOST:
                                case Cobol85PreprocessorParser.AR:
                                case Cobol85PreprocessorParser.ARITH:
                                case Cobol85PreprocessorParser.AUTO:
                                case Cobol85PreprocessorParser.AWO:
                                case Cobol85PreprocessorParser.BIN:
                                case Cobol85PreprocessorParser.BLOCK0:
                                case Cobol85PreprocessorParser.BUF:
                                case Cobol85PreprocessorParser.BUFSIZE:
                                case Cobol85PreprocessorParser.BY:
                                case Cobol85PreprocessorParser.CBL:
                                case Cobol85PreprocessorParser.CBLCARD:
                                case Cobol85PreprocessorParser.CO:
                                case Cobol85PreprocessorParser.COBOL2:
                                case Cobol85PreprocessorParser.COBOL3:
                                case Cobol85PreprocessorParser.CODEPAGE:
                                case Cobol85PreprocessorParser.COMPAT:
                                case Cobol85PreprocessorParser.COMPILE:
                                case Cobol85PreprocessorParser.CP:
                                case Cobol85PreprocessorParser.CPP:
                                case Cobol85PreprocessorParser.CPSM:
                                case Cobol85PreprocessorParser.CS:
                                case Cobol85PreprocessorParser.CURR:
                                case Cobol85PreprocessorParser.CURRENCY:
                                case Cobol85PreprocessorParser.DATA:
                                case Cobol85PreprocessorParser.DATEPROC:
                                case Cobol85PreprocessorParser.DBCS:
                                case Cobol85PreprocessorParser.DD:
                                case Cobol85PreprocessorParser.DEBUG:
                                case Cobol85PreprocessorParser.DECK:
                                case Cobol85PreprocessorParser.DIAGTRUNC:
                                case Cobol85PreprocessorParser.DLI:
                                case Cobol85PreprocessorParser.DLL:
                                case Cobol85PreprocessorParser.DP:
                                case Cobol85PreprocessorParser.DTR:
                                case Cobol85PreprocessorParser.DU:
                                case Cobol85PreprocessorParser.DUMP:
                                case Cobol85PreprocessorParser.DYN:
                                case Cobol85PreprocessorParser.DYNAM:
                                case Cobol85PreprocessorParser.EDF:
                                case Cobol85PreprocessorParser.EJECT:
                                case Cobol85PreprocessorParser.EJPD:
                                case Cobol85PreprocessorParser.EN:
                                case Cobol85PreprocessorParser.ENGLISH:
                                case Cobol85PreprocessorParser.EPILOG:
                                case Cobol85PreprocessorParser.EXCI:
                                case Cobol85PreprocessorParser.EXIT:
                                case Cobol85PreprocessorParser.EXP:
                                case Cobol85PreprocessorParser.EXPORTALL:
                                case Cobol85PreprocessorParser.EXTEND:
                                case Cobol85PreprocessorParser.FASTSRT:
                                case Cobol85PreprocessorParser.FLAG:
                                case Cobol85PreprocessorParser.FLAGSTD:
                                case Cobol85PreprocessorParser.FSRT:
                                case Cobol85PreprocessorParser.FULL:
                                case Cobol85PreprocessorParser.GDS:
                                case Cobol85PreprocessorParser.GRAPHIC:
                                case Cobol85PreprocessorParser.HOOK:
                                case Cobol85PreprocessorParser.IN:
                                case Cobol85PreprocessorParser.INTDATE:
                                case Cobol85PreprocessorParser.JA:
                                case Cobol85PreprocessorParser.JP:
                                case Cobol85PreprocessorParser.KA:
                                case Cobol85PreprocessorParser.LANG:
                                case Cobol85PreprocessorParser.LANGUAGE:
                                case Cobol85PreprocessorParser.LC:
                                case Cobol85PreprocessorParser.LENGTH:
                                case Cobol85PreprocessorParser.LIB:
                                case Cobol85PreprocessorParser.LILIAN:
                                case Cobol85PreprocessorParser.LIN:
                                case Cobol85PreprocessorParser.LINECOUNT:
                                case Cobol85PreprocessorParser.LINKAGE:
                                case Cobol85PreprocessorParser.LIST:
                                case Cobol85PreprocessorParser.LM:
                                case Cobol85PreprocessorParser.LONGMIXED:
                                case Cobol85PreprocessorParser.LONGUPPER:
                                case Cobol85PreprocessorParser.LPARENCHAR:
                                case Cobol85PreprocessorParser.LU:
                                case Cobol85PreprocessorParser.MAP:
                                case Cobol85PreprocessorParser.MARGINS:
                                case Cobol85PreprocessorParser.MAX:
                                case Cobol85PreprocessorParser.MD:
                                case Cobol85PreprocessorParser.MDECK:
                                case Cobol85PreprocessorParser.MIG:
                                case Cobol85PreprocessorParser.MIXED:
                                case Cobol85PreprocessorParser.NAME:
                                case Cobol85PreprocessorParser.NAT:
                                case Cobol85PreprocessorParser.NATIONAL:
                                case Cobol85PreprocessorParser.NATLANG:
                                case Cobol85PreprocessorParser.NN:
                                case Cobol85PreprocessorParser.NO:
                                case Cobol85PreprocessorParser.NOADATA:
                                case Cobol85PreprocessorParser.NOADV:
                                case Cobol85PreprocessorParser.NOALIAS:
                                case Cobol85PreprocessorParser.NOAWO:
                                case Cobol85PreprocessorParser.NOBLOCK0:
                                case Cobol85PreprocessorParser.NOC:
                                case Cobol85PreprocessorParser.NOCBLCARD:
                                case Cobol85PreprocessorParser.NOCICS:
                                case Cobol85PreprocessorParser.NOCMPR2:
                                case Cobol85PreprocessorParser.NOCOMPILE:
                                case Cobol85PreprocessorParser.NOCPSM:
                                case Cobol85PreprocessorParser.NOCURR:
                                case Cobol85PreprocessorParser.NOCURRENCY:
                                case Cobol85PreprocessorParser.NOD:
                                case Cobol85PreprocessorParser.NODATEPROC:
                                case Cobol85PreprocessorParser.NODBCS:
                                case Cobol85PreprocessorParser.NODE:
                                case Cobol85PreprocessorParser.NODEBUG:
                                case Cobol85PreprocessorParser.NODECK:
                                case Cobol85PreprocessorParser.NODIAGTRUNC:
                                case Cobol85PreprocessorParser.NODLL:
                                case Cobol85PreprocessorParser.NODU:
                                case Cobol85PreprocessorParser.NODUMP:
                                case Cobol85PreprocessorParser.NODP:
                                case Cobol85PreprocessorParser.NODTR:
                                case Cobol85PreprocessorParser.NODYN:
                                case Cobol85PreprocessorParser.NODYNAM:
                                case Cobol85PreprocessorParser.NOEDF:
                                case Cobol85PreprocessorParser.NOEJPD:
                                case Cobol85PreprocessorParser.NOEPILOG:
                                case Cobol85PreprocessorParser.NOEXIT:
                                case Cobol85PreprocessorParser.NOEXP:
                                case Cobol85PreprocessorParser.NOEXPORTALL:
                                case Cobol85PreprocessorParser.NOF:
                                case Cobol85PreprocessorParser.NOFASTSRT:
                                case Cobol85PreprocessorParser.NOFEPI:
                                case Cobol85PreprocessorParser.NOFLAG:
                                case Cobol85PreprocessorParser.NOFLAGMIG:
                                case Cobol85PreprocessorParser.NOFLAGSTD:
                                case Cobol85PreprocessorParser.NOFSRT:
                                case Cobol85PreprocessorParser.NOGRAPHIC:
                                case Cobol85PreprocessorParser.NOHOOK:
                                case Cobol85PreprocessorParser.NOLENGTH:
                                case Cobol85PreprocessorParser.NOLIB:
                                case Cobol85PreprocessorParser.NOLINKAGE:
                                case Cobol85PreprocessorParser.NOLIST:
                                case Cobol85PreprocessorParser.NOMAP:
                                case Cobol85PreprocessorParser.NOMD:
                                case Cobol85PreprocessorParser.NOMDECK:
                                case Cobol85PreprocessorParser.NONAME:
                                case Cobol85PreprocessorParser.NONUM:
                                case Cobol85PreprocessorParser.NONUMBER:
                                case Cobol85PreprocessorParser.NOOBJ:
                                case Cobol85PreprocessorParser.NOOBJECT:
                                case Cobol85PreprocessorParser.NOOFF:
                                case Cobol85PreprocessorParser.NOOFFSET:
                                case Cobol85PreprocessorParser.NOOPSEQUENCE:
                                case Cobol85PreprocessorParser.NOOPT:
                                case Cobol85PreprocessorParser.NOOPTIMIZE:
                                case Cobol85PreprocessorParser.NOOPTIONS:
                                case Cobol85PreprocessorParser.NOP:
                                case Cobol85PreprocessorParser.NOPFD:
                                case Cobol85PreprocessorParser.NOPROLOG:
                                case Cobol85PreprocessorParser.NORENT:
                                case Cobol85PreprocessorParser.NOS:
                                case Cobol85PreprocessorParser.NOSEP:
                                case Cobol85PreprocessorParser.NOSEPARATE:
                                case Cobol85PreprocessorParser.NOSEQ:
                                case Cobol85PreprocessorParser.NOSOURCE:
                                case Cobol85PreprocessorParser.NOSPIE:
                                case Cobol85PreprocessorParser.NOSQL:
                                case Cobol85PreprocessorParser.NOSQLC:
                                case Cobol85PreprocessorParser.NOSQLCCSID:
                                case Cobol85PreprocessorParser.NOSSR:
                                case Cobol85PreprocessorParser.NOSSRANGE:
                                case Cobol85PreprocessorParser.NOSTDTRUNC:
                                case Cobol85PreprocessorParser.NOSEQUENCE:
                                case Cobol85PreprocessorParser.NOTERM:
                                case Cobol85PreprocessorParser.NOTERMINAL:
                                case Cobol85PreprocessorParser.NOTEST:
                                case Cobol85PreprocessorParser.NOTHREAD:
                                case Cobol85PreprocessorParser.NOTRIG:
                                case Cobol85PreprocessorParser.NOVBREF:
                                case Cobol85PreprocessorParser.NOWORD:
                                case Cobol85PreprocessorParser.NOX:
                                case Cobol85PreprocessorParser.NOXREF:
                                case Cobol85PreprocessorParser.NOZWB:
                                case Cobol85PreprocessorParser.NS:
                                case Cobol85PreprocessorParser.NSEQ:
                                case Cobol85PreprocessorParser.NSYMBOL:
                                case Cobol85PreprocessorParser.NUM:
                                case Cobol85PreprocessorParser.NUMBER:
                                case Cobol85PreprocessorParser.NUMPROC:
                                case Cobol85PreprocessorParser.OBJ:
                                case Cobol85PreprocessorParser.OBJECT:
                                case Cobol85PreprocessorParser.OF:
                                case Cobol85PreprocessorParser.OFF:
                                case Cobol85PreprocessorParser.OFFSET:
                                case Cobol85PreprocessorParser.ON:
                                case Cobol85PreprocessorParser.OP:
                                case Cobol85PreprocessorParser.OPMARGINS:
                                case Cobol85PreprocessorParser.OPSEQUENCE:
                                case Cobol85PreprocessorParser.OPT:
                                case Cobol85PreprocessorParser.OPTFILE:
                                case Cobol85PreprocessorParser.OPTIMIZE:
                                case Cobol85PreprocessorParser.OPTIONS:
                                case Cobol85PreprocessorParser.OUT:
                                case Cobol85PreprocessorParser.OUTDD:
                                case Cobol85PreprocessorParser.PFD:
                                case Cobol85PreprocessorParser.PPTDBG:
                                case Cobol85PreprocessorParser.PGMN:
                                case Cobol85PreprocessorParser.PGMNAME:
                                case Cobol85PreprocessorParser.PROCESS:
                                case Cobol85PreprocessorParser.PROLOG:
                                case Cobol85PreprocessorParser.QUOTE:
                                case Cobol85PreprocessorParser.RENT:
                                case Cobol85PreprocessorParser.REPLACING:
                                case Cobol85PreprocessorParser.RMODE:
                                case Cobol85PreprocessorParser.RPARENCHAR:
                                case Cobol85PreprocessorParser.SEP:
                                case Cobol85PreprocessorParser.SEPARATE:
                                case Cobol85PreprocessorParser.SEQ:
                                case Cobol85PreprocessorParser.SEQUENCE:
                                case Cobol85PreprocessorParser.SHORT:
                                case Cobol85PreprocessorParser.SIZE:
                                case Cobol85PreprocessorParser.SOURCE:
                                case Cobol85PreprocessorParser.SP:
                                case Cobol85PreprocessorParser.SPACE:
                                case Cobol85PreprocessorParser.SPIE:
                                case Cobol85PreprocessorParser.SQL:
                                case Cobol85PreprocessorParser.SQLC:
                                case Cobol85PreprocessorParser.SQLCCSID:
                                case Cobol85PreprocessorParser.SS:
                                case Cobol85PreprocessorParser.SSR:
                                case Cobol85PreprocessorParser.SSRANGE:
                                case Cobol85PreprocessorParser.STD:
                                case Cobol85PreprocessorParser.SYSEIB:
                                case Cobol85PreprocessorParser.SZ:
                                case Cobol85PreprocessorParser.TERM:
                                case Cobol85PreprocessorParser.TERMINAL:
                                case Cobol85PreprocessorParser.TEST:
                                case Cobol85PreprocessorParser.THREAD:
                                case Cobol85PreprocessorParser.TITLE:
                                case Cobol85PreprocessorParser.TRIG:
                                case Cobol85PreprocessorParser.TRUNC:
                                case Cobol85PreprocessorParser.UE:
                                case Cobol85PreprocessorParser.UPPER:
                                case Cobol85PreprocessorParser.VBREF:
                                case Cobol85PreprocessorParser.WD:
                                case Cobol85PreprocessorParser.XMLPARSE:
                                case Cobol85PreprocessorParser.XMLSS:
                                case Cobol85PreprocessorParser.XOPTS:
                                case Cobol85PreprocessorParser.XREF:
                                case Cobol85PreprocessorParser.YEARWINDOW:
                                case Cobol85PreprocessorParser.YW:
                                case Cobol85PreprocessorParser.ZWB:
                                case Cobol85PreprocessorParser.C_CHAR:
                                case Cobol85PreprocessorParser.D_CHAR:
                                case Cobol85PreprocessorParser.E_CHAR:
                                case Cobol85PreprocessorParser.F_CHAR:
                                case Cobol85PreprocessorParser.H_CHAR:
                                case Cobol85PreprocessorParser.I_CHAR:
                                case Cobol85PreprocessorParser.M_CHAR:
                                case Cobol85PreprocessorParser.N_CHAR:
                                case Cobol85PreprocessorParser.Q_CHAR:
                                case Cobol85PreprocessorParser.S_CHAR:
                                case Cobol85PreprocessorParser.U_CHAR:
                                case Cobol85PreprocessorParser.W_CHAR:
                                case Cobol85PreprocessorParser.X_CHAR:
                                case Cobol85PreprocessorParser.COMMACHAR:
                                case Cobol85PreprocessorParser.DOT:
                                case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                                case Cobol85PreprocessorParser.NUMERICLITERAL:
                                case Cobol85PreprocessorParser.IDENTIFIER:
                                case Cobol85PreprocessorParser.FILENAME:
                                case Cobol85PreprocessorParser.NEWLINE:
                                case Cobol85PreprocessorParser.TEXT:
                                    {
                                        this.state = 529;
                                        this.charData();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 534;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                }
                this.state = 536;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 535;
                            this.replaceOffStatement();
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
    Cobol85PreprocessorParser.prototype.replaceByStatement = function () {
        var _localctx = new ReplaceByStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, Cobol85PreprocessorParser.RULE_replaceByStatement);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 538;
                this.match(Cobol85PreprocessorParser.REPLACE);
                this.state = 546;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 542;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === Cobol85PreprocessorParser.NEWLINE) {
                                        {
                                            {
                                                this.state = 539;
                                                this.match(Cobol85PreprocessorParser.NEWLINE);
                                            }
                                        }
                                        this.state = 544;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 545;
                                    this.replaceClause();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 548;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 550;
                this.match(Cobol85PreprocessorParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.replaceOffStatement = function () {
        var _localctx = new ReplaceOffStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, Cobol85PreprocessorParser.RULE_replaceOffStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 552;
                this.match(Cobol85PreprocessorParser.REPLACE);
                this.state = 553;
                this.match(Cobol85PreprocessorParser.OFF);
                this.state = 554;
                this.match(Cobol85PreprocessorParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.replaceClause = function () {
        var _localctx = new ReplaceClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, Cobol85PreprocessorParser.RULE_replaceClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 556;
                this.replaceable();
                this.state = 560;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Cobol85PreprocessorParser.NEWLINE) {
                    {
                        {
                            this.state = 557;
                            this.match(Cobol85PreprocessorParser.NEWLINE);
                        }
                    }
                    this.state = 562;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 563;
                this.match(Cobol85PreprocessorParser.BY);
                this.state = 567;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Cobol85PreprocessorParser.NEWLINE) {
                    {
                        {
                            this.state = 564;
                            this.match(Cobol85PreprocessorParser.NEWLINE);
                        }
                    }
                    this.state = 569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 570;
                this.replacement();
                this.state = 578;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                    case 1:
                        {
                            this.state = 574;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === Cobol85PreprocessorParser.NEWLINE) {
                                {
                                    {
                                        this.state = 571;
                                        this.match(Cobol85PreprocessorParser.NEWLINE);
                                    }
                                }
                                this.state = 576;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 577;
                            this.directoryPhrase();
                        }
                        break;
                }
                this.state = 587;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                    case 1:
                        {
                            this.state = 583;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === Cobol85PreprocessorParser.NEWLINE) {
                                {
                                    {
                                        this.state = 580;
                                        this.match(Cobol85PreprocessorParser.NEWLINE);
                                    }
                                }
                                this.state = 585;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 586;
                            this.familyPhrase();
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
    Cobol85PreprocessorParser.prototype.directoryPhrase = function () {
        var _localctx = new DirectoryPhraseContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, Cobol85PreprocessorParser.RULE_directoryPhrase);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                _la = this._input.LA(1);
                if (!(_la === Cobol85PreprocessorParser.IN || _la === Cobol85PreprocessorParser.OF)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 593;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Cobol85PreprocessorParser.NEWLINE) {
                    {
                        {
                            this.state = 590;
                            this.match(Cobol85PreprocessorParser.NEWLINE);
                        }
                    }
                    this.state = 595;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 598;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                    case Cobol85PreprocessorParser.NUMERICLITERAL:
                        {
                            this.state = 596;
                            this.literal();
                        }
                        break;
                    case Cobol85PreprocessorParser.ADATA:
                    case Cobol85PreprocessorParser.ADV:
                    case Cobol85PreprocessorParser.ALIAS:
                    case Cobol85PreprocessorParser.ANSI:
                    case Cobol85PreprocessorParser.ANY:
                    case Cobol85PreprocessorParser.APOST:
                    case Cobol85PreprocessorParser.AR:
                    case Cobol85PreprocessorParser.ARITH:
                    case Cobol85PreprocessorParser.AUTO:
                    case Cobol85PreprocessorParser.AWO:
                    case Cobol85PreprocessorParser.BIN:
                    case Cobol85PreprocessorParser.BLOCK0:
                    case Cobol85PreprocessorParser.BUF:
                    case Cobol85PreprocessorParser.BUFSIZE:
                    case Cobol85PreprocessorParser.BY:
                    case Cobol85PreprocessorParser.CBL:
                    case Cobol85PreprocessorParser.CBLCARD:
                    case Cobol85PreprocessorParser.CO:
                    case Cobol85PreprocessorParser.COBOL2:
                    case Cobol85PreprocessorParser.COBOL3:
                    case Cobol85PreprocessorParser.CODEPAGE:
                    case Cobol85PreprocessorParser.COMPAT:
                    case Cobol85PreprocessorParser.COMPILE:
                    case Cobol85PreprocessorParser.CP:
                    case Cobol85PreprocessorParser.CPP:
                    case Cobol85PreprocessorParser.CPSM:
                    case Cobol85PreprocessorParser.CS:
                    case Cobol85PreprocessorParser.CURR:
                    case Cobol85PreprocessorParser.CURRENCY:
                    case Cobol85PreprocessorParser.DATA:
                    case Cobol85PreprocessorParser.DATEPROC:
                    case Cobol85PreprocessorParser.DBCS:
                    case Cobol85PreprocessorParser.DD:
                    case Cobol85PreprocessorParser.DEBUG:
                    case Cobol85PreprocessorParser.DECK:
                    case Cobol85PreprocessorParser.DIAGTRUNC:
                    case Cobol85PreprocessorParser.DLI:
                    case Cobol85PreprocessorParser.DLL:
                    case Cobol85PreprocessorParser.DP:
                    case Cobol85PreprocessorParser.DTR:
                    case Cobol85PreprocessorParser.DU:
                    case Cobol85PreprocessorParser.DUMP:
                    case Cobol85PreprocessorParser.DYN:
                    case Cobol85PreprocessorParser.DYNAM:
                    case Cobol85PreprocessorParser.EDF:
                    case Cobol85PreprocessorParser.EJECT:
                    case Cobol85PreprocessorParser.EJPD:
                    case Cobol85PreprocessorParser.EN:
                    case Cobol85PreprocessorParser.ENGLISH:
                    case Cobol85PreprocessorParser.EPILOG:
                    case Cobol85PreprocessorParser.EXCI:
                    case Cobol85PreprocessorParser.EXIT:
                    case Cobol85PreprocessorParser.EXP:
                    case Cobol85PreprocessorParser.EXPORTALL:
                    case Cobol85PreprocessorParser.EXTEND:
                    case Cobol85PreprocessorParser.FASTSRT:
                    case Cobol85PreprocessorParser.FLAG:
                    case Cobol85PreprocessorParser.FLAGSTD:
                    case Cobol85PreprocessorParser.FSRT:
                    case Cobol85PreprocessorParser.FULL:
                    case Cobol85PreprocessorParser.GDS:
                    case Cobol85PreprocessorParser.GRAPHIC:
                    case Cobol85PreprocessorParser.HOOK:
                    case Cobol85PreprocessorParser.IN:
                    case Cobol85PreprocessorParser.INTDATE:
                    case Cobol85PreprocessorParser.JA:
                    case Cobol85PreprocessorParser.JP:
                    case Cobol85PreprocessorParser.KA:
                    case Cobol85PreprocessorParser.LANG:
                    case Cobol85PreprocessorParser.LANGUAGE:
                    case Cobol85PreprocessorParser.LC:
                    case Cobol85PreprocessorParser.LENGTH:
                    case Cobol85PreprocessorParser.LIB:
                    case Cobol85PreprocessorParser.LILIAN:
                    case Cobol85PreprocessorParser.LIN:
                    case Cobol85PreprocessorParser.LINECOUNT:
                    case Cobol85PreprocessorParser.LINKAGE:
                    case Cobol85PreprocessorParser.LIST:
                    case Cobol85PreprocessorParser.LM:
                    case Cobol85PreprocessorParser.LONGMIXED:
                    case Cobol85PreprocessorParser.LONGUPPER:
                    case Cobol85PreprocessorParser.LU:
                    case Cobol85PreprocessorParser.MAP:
                    case Cobol85PreprocessorParser.MARGINS:
                    case Cobol85PreprocessorParser.MAX:
                    case Cobol85PreprocessorParser.MD:
                    case Cobol85PreprocessorParser.MDECK:
                    case Cobol85PreprocessorParser.MIG:
                    case Cobol85PreprocessorParser.MIXED:
                    case Cobol85PreprocessorParser.NAME:
                    case Cobol85PreprocessorParser.NAT:
                    case Cobol85PreprocessorParser.NATIONAL:
                    case Cobol85PreprocessorParser.NATLANG:
                    case Cobol85PreprocessorParser.NN:
                    case Cobol85PreprocessorParser.NO:
                    case Cobol85PreprocessorParser.NOADATA:
                    case Cobol85PreprocessorParser.NOADV:
                    case Cobol85PreprocessorParser.NOALIAS:
                    case Cobol85PreprocessorParser.NOAWO:
                    case Cobol85PreprocessorParser.NOBLOCK0:
                    case Cobol85PreprocessorParser.NOC:
                    case Cobol85PreprocessorParser.NOCBLCARD:
                    case Cobol85PreprocessorParser.NOCICS:
                    case Cobol85PreprocessorParser.NOCMPR2:
                    case Cobol85PreprocessorParser.NOCOMPILE:
                    case Cobol85PreprocessorParser.NOCPSM:
                    case Cobol85PreprocessorParser.NOCURR:
                    case Cobol85PreprocessorParser.NOCURRENCY:
                    case Cobol85PreprocessorParser.NOD:
                    case Cobol85PreprocessorParser.NODATEPROC:
                    case Cobol85PreprocessorParser.NODBCS:
                    case Cobol85PreprocessorParser.NODE:
                    case Cobol85PreprocessorParser.NODEBUG:
                    case Cobol85PreprocessorParser.NODECK:
                    case Cobol85PreprocessorParser.NODIAGTRUNC:
                    case Cobol85PreprocessorParser.NODLL:
                    case Cobol85PreprocessorParser.NODU:
                    case Cobol85PreprocessorParser.NODUMP:
                    case Cobol85PreprocessorParser.NODP:
                    case Cobol85PreprocessorParser.NODTR:
                    case Cobol85PreprocessorParser.NODYN:
                    case Cobol85PreprocessorParser.NODYNAM:
                    case Cobol85PreprocessorParser.NOEDF:
                    case Cobol85PreprocessorParser.NOEJPD:
                    case Cobol85PreprocessorParser.NOEPILOG:
                    case Cobol85PreprocessorParser.NOEXIT:
                    case Cobol85PreprocessorParser.NOEXP:
                    case Cobol85PreprocessorParser.NOEXPORTALL:
                    case Cobol85PreprocessorParser.NOF:
                    case Cobol85PreprocessorParser.NOFASTSRT:
                    case Cobol85PreprocessorParser.NOFEPI:
                    case Cobol85PreprocessorParser.NOFLAG:
                    case Cobol85PreprocessorParser.NOFLAGMIG:
                    case Cobol85PreprocessorParser.NOFLAGSTD:
                    case Cobol85PreprocessorParser.NOFSRT:
                    case Cobol85PreprocessorParser.NOGRAPHIC:
                    case Cobol85PreprocessorParser.NOHOOK:
                    case Cobol85PreprocessorParser.NOLENGTH:
                    case Cobol85PreprocessorParser.NOLIB:
                    case Cobol85PreprocessorParser.NOLINKAGE:
                    case Cobol85PreprocessorParser.NOLIST:
                    case Cobol85PreprocessorParser.NOMAP:
                    case Cobol85PreprocessorParser.NOMD:
                    case Cobol85PreprocessorParser.NOMDECK:
                    case Cobol85PreprocessorParser.NONAME:
                    case Cobol85PreprocessorParser.NONUM:
                    case Cobol85PreprocessorParser.NONUMBER:
                    case Cobol85PreprocessorParser.NOOBJ:
                    case Cobol85PreprocessorParser.NOOBJECT:
                    case Cobol85PreprocessorParser.NOOFF:
                    case Cobol85PreprocessorParser.NOOFFSET:
                    case Cobol85PreprocessorParser.NOOPSEQUENCE:
                    case Cobol85PreprocessorParser.NOOPT:
                    case Cobol85PreprocessorParser.NOOPTIMIZE:
                    case Cobol85PreprocessorParser.NOOPTIONS:
                    case Cobol85PreprocessorParser.NOP:
                    case Cobol85PreprocessorParser.NOPFD:
                    case Cobol85PreprocessorParser.NOPROLOG:
                    case Cobol85PreprocessorParser.NORENT:
                    case Cobol85PreprocessorParser.NOS:
                    case Cobol85PreprocessorParser.NOSEP:
                    case Cobol85PreprocessorParser.NOSEPARATE:
                    case Cobol85PreprocessorParser.NOSEQ:
                    case Cobol85PreprocessorParser.NOSOURCE:
                    case Cobol85PreprocessorParser.NOSPIE:
                    case Cobol85PreprocessorParser.NOSQL:
                    case Cobol85PreprocessorParser.NOSQLC:
                    case Cobol85PreprocessorParser.NOSQLCCSID:
                    case Cobol85PreprocessorParser.NOSSR:
                    case Cobol85PreprocessorParser.NOSSRANGE:
                    case Cobol85PreprocessorParser.NOSTDTRUNC:
                    case Cobol85PreprocessorParser.NOSEQUENCE:
                    case Cobol85PreprocessorParser.NOTERM:
                    case Cobol85PreprocessorParser.NOTERMINAL:
                    case Cobol85PreprocessorParser.NOTEST:
                    case Cobol85PreprocessorParser.NOTHREAD:
                    case Cobol85PreprocessorParser.NOTRIG:
                    case Cobol85PreprocessorParser.NOVBREF:
                    case Cobol85PreprocessorParser.NOWORD:
                    case Cobol85PreprocessorParser.NOX:
                    case Cobol85PreprocessorParser.NOXREF:
                    case Cobol85PreprocessorParser.NOZWB:
                    case Cobol85PreprocessorParser.NS:
                    case Cobol85PreprocessorParser.NSEQ:
                    case Cobol85PreprocessorParser.NSYMBOL:
                    case Cobol85PreprocessorParser.NUM:
                    case Cobol85PreprocessorParser.NUMBER:
                    case Cobol85PreprocessorParser.NUMPROC:
                    case Cobol85PreprocessorParser.OBJ:
                    case Cobol85PreprocessorParser.OBJECT:
                    case Cobol85PreprocessorParser.OF:
                    case Cobol85PreprocessorParser.OFF:
                    case Cobol85PreprocessorParser.OFFSET:
                    case Cobol85PreprocessorParser.ON:
                    case Cobol85PreprocessorParser.OP:
                    case Cobol85PreprocessorParser.OPMARGINS:
                    case Cobol85PreprocessorParser.OPSEQUENCE:
                    case Cobol85PreprocessorParser.OPT:
                    case Cobol85PreprocessorParser.OPTFILE:
                    case Cobol85PreprocessorParser.OPTIMIZE:
                    case Cobol85PreprocessorParser.OPTIONS:
                    case Cobol85PreprocessorParser.OUT:
                    case Cobol85PreprocessorParser.OUTDD:
                    case Cobol85PreprocessorParser.PFD:
                    case Cobol85PreprocessorParser.PPTDBG:
                    case Cobol85PreprocessorParser.PGMN:
                    case Cobol85PreprocessorParser.PGMNAME:
                    case Cobol85PreprocessorParser.PROCESS:
                    case Cobol85PreprocessorParser.PROLOG:
                    case Cobol85PreprocessorParser.QUOTE:
                    case Cobol85PreprocessorParser.RENT:
                    case Cobol85PreprocessorParser.REPLACING:
                    case Cobol85PreprocessorParser.RMODE:
                    case Cobol85PreprocessorParser.SEP:
                    case Cobol85PreprocessorParser.SEPARATE:
                    case Cobol85PreprocessorParser.SEQ:
                    case Cobol85PreprocessorParser.SEQUENCE:
                    case Cobol85PreprocessorParser.SHORT:
                    case Cobol85PreprocessorParser.SIZE:
                    case Cobol85PreprocessorParser.SOURCE:
                    case Cobol85PreprocessorParser.SP:
                    case Cobol85PreprocessorParser.SPACE:
                    case Cobol85PreprocessorParser.SPIE:
                    case Cobol85PreprocessorParser.SQL:
                    case Cobol85PreprocessorParser.SQLC:
                    case Cobol85PreprocessorParser.SQLCCSID:
                    case Cobol85PreprocessorParser.SS:
                    case Cobol85PreprocessorParser.SSR:
                    case Cobol85PreprocessorParser.SSRANGE:
                    case Cobol85PreprocessorParser.STD:
                    case Cobol85PreprocessorParser.SYSEIB:
                    case Cobol85PreprocessorParser.SZ:
                    case Cobol85PreprocessorParser.TERM:
                    case Cobol85PreprocessorParser.TERMINAL:
                    case Cobol85PreprocessorParser.TEST:
                    case Cobol85PreprocessorParser.THREAD:
                    case Cobol85PreprocessorParser.TITLE:
                    case Cobol85PreprocessorParser.TRIG:
                    case Cobol85PreprocessorParser.TRUNC:
                    case Cobol85PreprocessorParser.UE:
                    case Cobol85PreprocessorParser.UPPER:
                    case Cobol85PreprocessorParser.VBREF:
                    case Cobol85PreprocessorParser.WD:
                    case Cobol85PreprocessorParser.XMLPARSE:
                    case Cobol85PreprocessorParser.XMLSS:
                    case Cobol85PreprocessorParser.XOPTS:
                    case Cobol85PreprocessorParser.XREF:
                    case Cobol85PreprocessorParser.YEARWINDOW:
                    case Cobol85PreprocessorParser.YW:
                    case Cobol85PreprocessorParser.ZWB:
                    case Cobol85PreprocessorParser.C_CHAR:
                    case Cobol85PreprocessorParser.D_CHAR:
                    case Cobol85PreprocessorParser.E_CHAR:
                    case Cobol85PreprocessorParser.F_CHAR:
                    case Cobol85PreprocessorParser.H_CHAR:
                    case Cobol85PreprocessorParser.I_CHAR:
                    case Cobol85PreprocessorParser.M_CHAR:
                    case Cobol85PreprocessorParser.N_CHAR:
                    case Cobol85PreprocessorParser.Q_CHAR:
                    case Cobol85PreprocessorParser.S_CHAR:
                    case Cobol85PreprocessorParser.U_CHAR:
                    case Cobol85PreprocessorParser.W_CHAR:
                    case Cobol85PreprocessorParser.X_CHAR:
                    case Cobol85PreprocessorParser.COMMACHAR:
                    case Cobol85PreprocessorParser.IDENTIFIER:
                        {
                            this.state = 597;
                            this.cobolWord();
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
    Cobol85PreprocessorParser.prototype.familyPhrase = function () {
        var _localctx = new FamilyPhraseContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, Cobol85PreprocessorParser.RULE_familyPhrase);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this.match(Cobol85PreprocessorParser.ON);
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Cobol85PreprocessorParser.NEWLINE) {
                    {
                        {
                            this.state = 601;
                            this.match(Cobol85PreprocessorParser.NEWLINE);
                        }
                    }
                    this.state = 606;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 609;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                    case Cobol85PreprocessorParser.NUMERICLITERAL:
                        {
                            this.state = 607;
                            this.literal();
                        }
                        break;
                    case Cobol85PreprocessorParser.ADATA:
                    case Cobol85PreprocessorParser.ADV:
                    case Cobol85PreprocessorParser.ALIAS:
                    case Cobol85PreprocessorParser.ANSI:
                    case Cobol85PreprocessorParser.ANY:
                    case Cobol85PreprocessorParser.APOST:
                    case Cobol85PreprocessorParser.AR:
                    case Cobol85PreprocessorParser.ARITH:
                    case Cobol85PreprocessorParser.AUTO:
                    case Cobol85PreprocessorParser.AWO:
                    case Cobol85PreprocessorParser.BIN:
                    case Cobol85PreprocessorParser.BLOCK0:
                    case Cobol85PreprocessorParser.BUF:
                    case Cobol85PreprocessorParser.BUFSIZE:
                    case Cobol85PreprocessorParser.BY:
                    case Cobol85PreprocessorParser.CBL:
                    case Cobol85PreprocessorParser.CBLCARD:
                    case Cobol85PreprocessorParser.CO:
                    case Cobol85PreprocessorParser.COBOL2:
                    case Cobol85PreprocessorParser.COBOL3:
                    case Cobol85PreprocessorParser.CODEPAGE:
                    case Cobol85PreprocessorParser.COMPAT:
                    case Cobol85PreprocessorParser.COMPILE:
                    case Cobol85PreprocessorParser.CP:
                    case Cobol85PreprocessorParser.CPP:
                    case Cobol85PreprocessorParser.CPSM:
                    case Cobol85PreprocessorParser.CS:
                    case Cobol85PreprocessorParser.CURR:
                    case Cobol85PreprocessorParser.CURRENCY:
                    case Cobol85PreprocessorParser.DATA:
                    case Cobol85PreprocessorParser.DATEPROC:
                    case Cobol85PreprocessorParser.DBCS:
                    case Cobol85PreprocessorParser.DD:
                    case Cobol85PreprocessorParser.DEBUG:
                    case Cobol85PreprocessorParser.DECK:
                    case Cobol85PreprocessorParser.DIAGTRUNC:
                    case Cobol85PreprocessorParser.DLI:
                    case Cobol85PreprocessorParser.DLL:
                    case Cobol85PreprocessorParser.DP:
                    case Cobol85PreprocessorParser.DTR:
                    case Cobol85PreprocessorParser.DU:
                    case Cobol85PreprocessorParser.DUMP:
                    case Cobol85PreprocessorParser.DYN:
                    case Cobol85PreprocessorParser.DYNAM:
                    case Cobol85PreprocessorParser.EDF:
                    case Cobol85PreprocessorParser.EJECT:
                    case Cobol85PreprocessorParser.EJPD:
                    case Cobol85PreprocessorParser.EN:
                    case Cobol85PreprocessorParser.ENGLISH:
                    case Cobol85PreprocessorParser.EPILOG:
                    case Cobol85PreprocessorParser.EXCI:
                    case Cobol85PreprocessorParser.EXIT:
                    case Cobol85PreprocessorParser.EXP:
                    case Cobol85PreprocessorParser.EXPORTALL:
                    case Cobol85PreprocessorParser.EXTEND:
                    case Cobol85PreprocessorParser.FASTSRT:
                    case Cobol85PreprocessorParser.FLAG:
                    case Cobol85PreprocessorParser.FLAGSTD:
                    case Cobol85PreprocessorParser.FSRT:
                    case Cobol85PreprocessorParser.FULL:
                    case Cobol85PreprocessorParser.GDS:
                    case Cobol85PreprocessorParser.GRAPHIC:
                    case Cobol85PreprocessorParser.HOOK:
                    case Cobol85PreprocessorParser.IN:
                    case Cobol85PreprocessorParser.INTDATE:
                    case Cobol85PreprocessorParser.JA:
                    case Cobol85PreprocessorParser.JP:
                    case Cobol85PreprocessorParser.KA:
                    case Cobol85PreprocessorParser.LANG:
                    case Cobol85PreprocessorParser.LANGUAGE:
                    case Cobol85PreprocessorParser.LC:
                    case Cobol85PreprocessorParser.LENGTH:
                    case Cobol85PreprocessorParser.LIB:
                    case Cobol85PreprocessorParser.LILIAN:
                    case Cobol85PreprocessorParser.LIN:
                    case Cobol85PreprocessorParser.LINECOUNT:
                    case Cobol85PreprocessorParser.LINKAGE:
                    case Cobol85PreprocessorParser.LIST:
                    case Cobol85PreprocessorParser.LM:
                    case Cobol85PreprocessorParser.LONGMIXED:
                    case Cobol85PreprocessorParser.LONGUPPER:
                    case Cobol85PreprocessorParser.LU:
                    case Cobol85PreprocessorParser.MAP:
                    case Cobol85PreprocessorParser.MARGINS:
                    case Cobol85PreprocessorParser.MAX:
                    case Cobol85PreprocessorParser.MD:
                    case Cobol85PreprocessorParser.MDECK:
                    case Cobol85PreprocessorParser.MIG:
                    case Cobol85PreprocessorParser.MIXED:
                    case Cobol85PreprocessorParser.NAME:
                    case Cobol85PreprocessorParser.NAT:
                    case Cobol85PreprocessorParser.NATIONAL:
                    case Cobol85PreprocessorParser.NATLANG:
                    case Cobol85PreprocessorParser.NN:
                    case Cobol85PreprocessorParser.NO:
                    case Cobol85PreprocessorParser.NOADATA:
                    case Cobol85PreprocessorParser.NOADV:
                    case Cobol85PreprocessorParser.NOALIAS:
                    case Cobol85PreprocessorParser.NOAWO:
                    case Cobol85PreprocessorParser.NOBLOCK0:
                    case Cobol85PreprocessorParser.NOC:
                    case Cobol85PreprocessorParser.NOCBLCARD:
                    case Cobol85PreprocessorParser.NOCICS:
                    case Cobol85PreprocessorParser.NOCMPR2:
                    case Cobol85PreprocessorParser.NOCOMPILE:
                    case Cobol85PreprocessorParser.NOCPSM:
                    case Cobol85PreprocessorParser.NOCURR:
                    case Cobol85PreprocessorParser.NOCURRENCY:
                    case Cobol85PreprocessorParser.NOD:
                    case Cobol85PreprocessorParser.NODATEPROC:
                    case Cobol85PreprocessorParser.NODBCS:
                    case Cobol85PreprocessorParser.NODE:
                    case Cobol85PreprocessorParser.NODEBUG:
                    case Cobol85PreprocessorParser.NODECK:
                    case Cobol85PreprocessorParser.NODIAGTRUNC:
                    case Cobol85PreprocessorParser.NODLL:
                    case Cobol85PreprocessorParser.NODU:
                    case Cobol85PreprocessorParser.NODUMP:
                    case Cobol85PreprocessorParser.NODP:
                    case Cobol85PreprocessorParser.NODTR:
                    case Cobol85PreprocessorParser.NODYN:
                    case Cobol85PreprocessorParser.NODYNAM:
                    case Cobol85PreprocessorParser.NOEDF:
                    case Cobol85PreprocessorParser.NOEJPD:
                    case Cobol85PreprocessorParser.NOEPILOG:
                    case Cobol85PreprocessorParser.NOEXIT:
                    case Cobol85PreprocessorParser.NOEXP:
                    case Cobol85PreprocessorParser.NOEXPORTALL:
                    case Cobol85PreprocessorParser.NOF:
                    case Cobol85PreprocessorParser.NOFASTSRT:
                    case Cobol85PreprocessorParser.NOFEPI:
                    case Cobol85PreprocessorParser.NOFLAG:
                    case Cobol85PreprocessorParser.NOFLAGMIG:
                    case Cobol85PreprocessorParser.NOFLAGSTD:
                    case Cobol85PreprocessorParser.NOFSRT:
                    case Cobol85PreprocessorParser.NOGRAPHIC:
                    case Cobol85PreprocessorParser.NOHOOK:
                    case Cobol85PreprocessorParser.NOLENGTH:
                    case Cobol85PreprocessorParser.NOLIB:
                    case Cobol85PreprocessorParser.NOLINKAGE:
                    case Cobol85PreprocessorParser.NOLIST:
                    case Cobol85PreprocessorParser.NOMAP:
                    case Cobol85PreprocessorParser.NOMD:
                    case Cobol85PreprocessorParser.NOMDECK:
                    case Cobol85PreprocessorParser.NONAME:
                    case Cobol85PreprocessorParser.NONUM:
                    case Cobol85PreprocessorParser.NONUMBER:
                    case Cobol85PreprocessorParser.NOOBJ:
                    case Cobol85PreprocessorParser.NOOBJECT:
                    case Cobol85PreprocessorParser.NOOFF:
                    case Cobol85PreprocessorParser.NOOFFSET:
                    case Cobol85PreprocessorParser.NOOPSEQUENCE:
                    case Cobol85PreprocessorParser.NOOPT:
                    case Cobol85PreprocessorParser.NOOPTIMIZE:
                    case Cobol85PreprocessorParser.NOOPTIONS:
                    case Cobol85PreprocessorParser.NOP:
                    case Cobol85PreprocessorParser.NOPFD:
                    case Cobol85PreprocessorParser.NOPROLOG:
                    case Cobol85PreprocessorParser.NORENT:
                    case Cobol85PreprocessorParser.NOS:
                    case Cobol85PreprocessorParser.NOSEP:
                    case Cobol85PreprocessorParser.NOSEPARATE:
                    case Cobol85PreprocessorParser.NOSEQ:
                    case Cobol85PreprocessorParser.NOSOURCE:
                    case Cobol85PreprocessorParser.NOSPIE:
                    case Cobol85PreprocessorParser.NOSQL:
                    case Cobol85PreprocessorParser.NOSQLC:
                    case Cobol85PreprocessorParser.NOSQLCCSID:
                    case Cobol85PreprocessorParser.NOSSR:
                    case Cobol85PreprocessorParser.NOSSRANGE:
                    case Cobol85PreprocessorParser.NOSTDTRUNC:
                    case Cobol85PreprocessorParser.NOSEQUENCE:
                    case Cobol85PreprocessorParser.NOTERM:
                    case Cobol85PreprocessorParser.NOTERMINAL:
                    case Cobol85PreprocessorParser.NOTEST:
                    case Cobol85PreprocessorParser.NOTHREAD:
                    case Cobol85PreprocessorParser.NOTRIG:
                    case Cobol85PreprocessorParser.NOVBREF:
                    case Cobol85PreprocessorParser.NOWORD:
                    case Cobol85PreprocessorParser.NOX:
                    case Cobol85PreprocessorParser.NOXREF:
                    case Cobol85PreprocessorParser.NOZWB:
                    case Cobol85PreprocessorParser.NS:
                    case Cobol85PreprocessorParser.NSEQ:
                    case Cobol85PreprocessorParser.NSYMBOL:
                    case Cobol85PreprocessorParser.NUM:
                    case Cobol85PreprocessorParser.NUMBER:
                    case Cobol85PreprocessorParser.NUMPROC:
                    case Cobol85PreprocessorParser.OBJ:
                    case Cobol85PreprocessorParser.OBJECT:
                    case Cobol85PreprocessorParser.OF:
                    case Cobol85PreprocessorParser.OFF:
                    case Cobol85PreprocessorParser.OFFSET:
                    case Cobol85PreprocessorParser.ON:
                    case Cobol85PreprocessorParser.OP:
                    case Cobol85PreprocessorParser.OPMARGINS:
                    case Cobol85PreprocessorParser.OPSEQUENCE:
                    case Cobol85PreprocessorParser.OPT:
                    case Cobol85PreprocessorParser.OPTFILE:
                    case Cobol85PreprocessorParser.OPTIMIZE:
                    case Cobol85PreprocessorParser.OPTIONS:
                    case Cobol85PreprocessorParser.OUT:
                    case Cobol85PreprocessorParser.OUTDD:
                    case Cobol85PreprocessorParser.PFD:
                    case Cobol85PreprocessorParser.PPTDBG:
                    case Cobol85PreprocessorParser.PGMN:
                    case Cobol85PreprocessorParser.PGMNAME:
                    case Cobol85PreprocessorParser.PROCESS:
                    case Cobol85PreprocessorParser.PROLOG:
                    case Cobol85PreprocessorParser.QUOTE:
                    case Cobol85PreprocessorParser.RENT:
                    case Cobol85PreprocessorParser.REPLACING:
                    case Cobol85PreprocessorParser.RMODE:
                    case Cobol85PreprocessorParser.SEP:
                    case Cobol85PreprocessorParser.SEPARATE:
                    case Cobol85PreprocessorParser.SEQ:
                    case Cobol85PreprocessorParser.SEQUENCE:
                    case Cobol85PreprocessorParser.SHORT:
                    case Cobol85PreprocessorParser.SIZE:
                    case Cobol85PreprocessorParser.SOURCE:
                    case Cobol85PreprocessorParser.SP:
                    case Cobol85PreprocessorParser.SPACE:
                    case Cobol85PreprocessorParser.SPIE:
                    case Cobol85PreprocessorParser.SQL:
                    case Cobol85PreprocessorParser.SQLC:
                    case Cobol85PreprocessorParser.SQLCCSID:
                    case Cobol85PreprocessorParser.SS:
                    case Cobol85PreprocessorParser.SSR:
                    case Cobol85PreprocessorParser.SSRANGE:
                    case Cobol85PreprocessorParser.STD:
                    case Cobol85PreprocessorParser.SYSEIB:
                    case Cobol85PreprocessorParser.SZ:
                    case Cobol85PreprocessorParser.TERM:
                    case Cobol85PreprocessorParser.TERMINAL:
                    case Cobol85PreprocessorParser.TEST:
                    case Cobol85PreprocessorParser.THREAD:
                    case Cobol85PreprocessorParser.TITLE:
                    case Cobol85PreprocessorParser.TRIG:
                    case Cobol85PreprocessorParser.TRUNC:
                    case Cobol85PreprocessorParser.UE:
                    case Cobol85PreprocessorParser.UPPER:
                    case Cobol85PreprocessorParser.VBREF:
                    case Cobol85PreprocessorParser.WD:
                    case Cobol85PreprocessorParser.XMLPARSE:
                    case Cobol85PreprocessorParser.XMLSS:
                    case Cobol85PreprocessorParser.XOPTS:
                    case Cobol85PreprocessorParser.XREF:
                    case Cobol85PreprocessorParser.YEARWINDOW:
                    case Cobol85PreprocessorParser.YW:
                    case Cobol85PreprocessorParser.ZWB:
                    case Cobol85PreprocessorParser.C_CHAR:
                    case Cobol85PreprocessorParser.D_CHAR:
                    case Cobol85PreprocessorParser.E_CHAR:
                    case Cobol85PreprocessorParser.F_CHAR:
                    case Cobol85PreprocessorParser.H_CHAR:
                    case Cobol85PreprocessorParser.I_CHAR:
                    case Cobol85PreprocessorParser.M_CHAR:
                    case Cobol85PreprocessorParser.N_CHAR:
                    case Cobol85PreprocessorParser.Q_CHAR:
                    case Cobol85PreprocessorParser.S_CHAR:
                    case Cobol85PreprocessorParser.U_CHAR:
                    case Cobol85PreprocessorParser.W_CHAR:
                    case Cobol85PreprocessorParser.X_CHAR:
                    case Cobol85PreprocessorParser.COMMACHAR:
                    case Cobol85PreprocessorParser.IDENTIFIER:
                        {
                            this.state = 608;
                            this.cobolWord();
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
    Cobol85PreprocessorParser.prototype.replaceable = function () {
        var _localctx = new ReplaceableContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, Cobol85PreprocessorParser.RULE_replaceable);
        try {
            this.state = 615;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 611;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 612;
                        this.cobolWord();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 613;
                        this.pseudoText();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 614;
                        this.charDataLine();
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
    Cobol85PreprocessorParser.prototype.replacement = function () {
        var _localctx = new ReplacementContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, Cobol85PreprocessorParser.RULE_replacement);
        try {
            this.state = 621;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 617;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 618;
                        this.cobolWord();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 619;
                        this.pseudoText();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 620;
                        this.charDataLine();
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
    Cobol85PreprocessorParser.prototype.ejectStatement = function () {
        var _localctx = new EjectStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, Cobol85PreprocessorParser.RULE_ejectStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 623;
                this.match(Cobol85PreprocessorParser.EJECT);
                this.state = 625;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        {
                            this.state = 624;
                            this.match(Cobol85PreprocessorParser.DOT);
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
    Cobol85PreprocessorParser.prototype.skipStatement = function () {
        var _localctx = new SkipStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, Cobol85PreprocessorParser.RULE_skipStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 627;
                _la = this._input.LA(1);
                if (!(((((_la - 238)) & ~0x1F) === 0 && ((1 << (_la - 238)) & ((1 << (Cobol85PreprocessorParser.SKIP1 - 238)) | (1 << (Cobol85PreprocessorParser.SKIP2 - 238)) | (1 << (Cobol85PreprocessorParser.SKIP3 - 238)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 629;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 628;
                            this.match(Cobol85PreprocessorParser.DOT);
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
    Cobol85PreprocessorParser.prototype.titleStatement = function () {
        var _localctx = new TitleStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, Cobol85PreprocessorParser.RULE_titleStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 631;
                this.match(Cobol85PreprocessorParser.TITLE);
                this.state = 632;
                this.literal();
                this.state = 634;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                    case 1:
                        {
                            this.state = 633;
                            this.match(Cobol85PreprocessorParser.DOT);
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
    Cobol85PreprocessorParser.prototype.pseudoText = function () {
        var _localctx = new PseudoTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, Cobol85PreprocessorParser.RULE_pseudoText);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 636;
                this.match(Cobol85PreprocessorParser.DOUBLEEQUALCHAR);
                this.state = 638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Cobol85PreprocessorParser.ADATA) | (1 << Cobol85PreprocessorParser.ADV) | (1 << Cobol85PreprocessorParser.ALIAS) | (1 << Cobol85PreprocessorParser.ANSI) | (1 << Cobol85PreprocessorParser.ANY) | (1 << Cobol85PreprocessorParser.APOST) | (1 << Cobol85PreprocessorParser.AR) | (1 << Cobol85PreprocessorParser.ARITH) | (1 << Cobol85PreprocessorParser.AUTO) | (1 << Cobol85PreprocessorParser.AWO) | (1 << Cobol85PreprocessorParser.BIN) | (1 << Cobol85PreprocessorParser.BLOCK0) | (1 << Cobol85PreprocessorParser.BUF) | (1 << Cobol85PreprocessorParser.BUFSIZE) | (1 << Cobol85PreprocessorParser.BY) | (1 << Cobol85PreprocessorParser.CBL) | (1 << Cobol85PreprocessorParser.CBLCARD) | (1 << Cobol85PreprocessorParser.CO) | (1 << Cobol85PreprocessorParser.COBOL2) | (1 << Cobol85PreprocessorParser.COBOL3) | (1 << Cobol85PreprocessorParser.CODEPAGE) | (1 << Cobol85PreprocessorParser.COMPAT) | (1 << Cobol85PreprocessorParser.COMPILE) | (1 << Cobol85PreprocessorParser.CP) | (1 << Cobol85PreprocessorParser.CPP) | (1 << Cobol85PreprocessorParser.CPSM) | (1 << Cobol85PreprocessorParser.CS) | (1 << Cobol85PreprocessorParser.CURR) | (1 << Cobol85PreprocessorParser.CURRENCY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Cobol85PreprocessorParser.DATA - 32)) | (1 << (Cobol85PreprocessorParser.DATEPROC - 32)) | (1 << (Cobol85PreprocessorParser.DBCS - 32)) | (1 << (Cobol85PreprocessorParser.DD - 32)) | (1 << (Cobol85PreprocessorParser.DEBUG - 32)) | (1 << (Cobol85PreprocessorParser.DECK - 32)) | (1 << (Cobol85PreprocessorParser.DIAGTRUNC - 32)) | (1 << (Cobol85PreprocessorParser.DLI - 32)) | (1 << (Cobol85PreprocessorParser.DLL - 32)) | (1 << (Cobol85PreprocessorParser.DP - 32)) | (1 << (Cobol85PreprocessorParser.DTR - 32)) | (1 << (Cobol85PreprocessorParser.DU - 32)) | (1 << (Cobol85PreprocessorParser.DUMP - 32)) | (1 << (Cobol85PreprocessorParser.DYN - 32)) | (1 << (Cobol85PreprocessorParser.DYNAM - 32)) | (1 << (Cobol85PreprocessorParser.EDF - 32)) | (1 << (Cobol85PreprocessorParser.EJECT - 32)) | (1 << (Cobol85PreprocessorParser.EJPD - 32)) | (1 << (Cobol85PreprocessorParser.EN - 32)) | (1 << (Cobol85PreprocessorParser.ENGLISH - 32)) | (1 << (Cobol85PreprocessorParser.EPILOG - 32)) | (1 << (Cobol85PreprocessorParser.EXCI - 32)) | (1 << (Cobol85PreprocessorParser.EXIT - 32)) | (1 << (Cobol85PreprocessorParser.EXP - 32)) | (1 << (Cobol85PreprocessorParser.EXPORTALL - 32)) | (1 << (Cobol85PreprocessorParser.EXTEND - 32)) | (1 << (Cobol85PreprocessorParser.FASTSRT - 32)) | (1 << (Cobol85PreprocessorParser.FLAG - 32)) | (1 << (Cobol85PreprocessorParser.FLAGSTD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Cobol85PreprocessorParser.FSRT - 64)) | (1 << (Cobol85PreprocessorParser.FULL - 64)) | (1 << (Cobol85PreprocessorParser.GDS - 64)) | (1 << (Cobol85PreprocessorParser.GRAPHIC - 64)) | (1 << (Cobol85PreprocessorParser.HOOK - 64)) | (1 << (Cobol85PreprocessorParser.IN - 64)) | (1 << (Cobol85PreprocessorParser.INTDATE - 64)) | (1 << (Cobol85PreprocessorParser.JA - 64)) | (1 << (Cobol85PreprocessorParser.JP - 64)) | (1 << (Cobol85PreprocessorParser.KA - 64)) | (1 << (Cobol85PreprocessorParser.LANG - 64)) | (1 << (Cobol85PreprocessorParser.LANGUAGE - 64)) | (1 << (Cobol85PreprocessorParser.LC - 64)) | (1 << (Cobol85PreprocessorParser.LENGTH - 64)) | (1 << (Cobol85PreprocessorParser.LIB - 64)) | (1 << (Cobol85PreprocessorParser.LILIAN - 64)) | (1 << (Cobol85PreprocessorParser.LIN - 64)) | (1 << (Cobol85PreprocessorParser.LINECOUNT - 64)) | (1 << (Cobol85PreprocessorParser.LINKAGE - 64)) | (1 << (Cobol85PreprocessorParser.LIST - 64)) | (1 << (Cobol85PreprocessorParser.LM - 64)) | (1 << (Cobol85PreprocessorParser.LONGMIXED - 64)) | (1 << (Cobol85PreprocessorParser.LONGUPPER - 64)) | (1 << (Cobol85PreprocessorParser.LPARENCHAR - 64)) | (1 << (Cobol85PreprocessorParser.LU - 64)) | (1 << (Cobol85PreprocessorParser.MAP - 64)) | (1 << (Cobol85PreprocessorParser.MARGINS - 64)) | (1 << (Cobol85PreprocessorParser.MAX - 64)) | (1 << (Cobol85PreprocessorParser.MD - 64)) | (1 << (Cobol85PreprocessorParser.MDECK - 64)) | (1 << (Cobol85PreprocessorParser.MIG - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (Cobol85PreprocessorParser.MIXED - 96)) | (1 << (Cobol85PreprocessorParser.NAME - 96)) | (1 << (Cobol85PreprocessorParser.NAT - 96)) | (1 << (Cobol85PreprocessorParser.NATIONAL - 96)) | (1 << (Cobol85PreprocessorParser.NATLANG - 96)) | (1 << (Cobol85PreprocessorParser.NN - 96)) | (1 << (Cobol85PreprocessorParser.NO - 96)) | (1 << (Cobol85PreprocessorParser.NOADATA - 96)) | (1 << (Cobol85PreprocessorParser.NOADV - 96)) | (1 << (Cobol85PreprocessorParser.NOALIAS - 96)) | (1 << (Cobol85PreprocessorParser.NOAWO - 96)) | (1 << (Cobol85PreprocessorParser.NOBLOCK0 - 96)) | (1 << (Cobol85PreprocessorParser.NOC - 96)) | (1 << (Cobol85PreprocessorParser.NOCBLCARD - 96)) | (1 << (Cobol85PreprocessorParser.NOCICS - 96)) | (1 << (Cobol85PreprocessorParser.NOCMPR2 - 96)) | (1 << (Cobol85PreprocessorParser.NOCOMPILE - 96)) | (1 << (Cobol85PreprocessorParser.NOCPSM - 96)) | (1 << (Cobol85PreprocessorParser.NOCURR - 96)) | (1 << (Cobol85PreprocessorParser.NOCURRENCY - 96)) | (1 << (Cobol85PreprocessorParser.NOD - 96)) | (1 << (Cobol85PreprocessorParser.NODATEPROC - 96)) | (1 << (Cobol85PreprocessorParser.NODBCS - 96)) | (1 << (Cobol85PreprocessorParser.NODE - 96)) | (1 << (Cobol85PreprocessorParser.NODEBUG - 96)) | (1 << (Cobol85PreprocessorParser.NODECK - 96)) | (1 << (Cobol85PreprocessorParser.NODIAGTRUNC - 96)) | (1 << (Cobol85PreprocessorParser.NODLL - 96)) | (1 << (Cobol85PreprocessorParser.NODU - 96)) | (1 << (Cobol85PreprocessorParser.NODUMP - 96)) | (1 << (Cobol85PreprocessorParser.NODP - 96)) | (1 << (Cobol85PreprocessorParser.NODTR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (Cobol85PreprocessorParser.NODYN - 128)) | (1 << (Cobol85PreprocessorParser.NODYNAM - 128)) | (1 << (Cobol85PreprocessorParser.NOEDF - 128)) | (1 << (Cobol85PreprocessorParser.NOEJPD - 128)) | (1 << (Cobol85PreprocessorParser.NOEPILOG - 128)) | (1 << (Cobol85PreprocessorParser.NOEXIT - 128)) | (1 << (Cobol85PreprocessorParser.NOEXP - 128)) | (1 << (Cobol85PreprocessorParser.NOEXPORTALL - 128)) | (1 << (Cobol85PreprocessorParser.NOF - 128)) | (1 << (Cobol85PreprocessorParser.NOFASTSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOFEPI - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGMIG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGSTD - 128)) | (1 << (Cobol85PreprocessorParser.NOFSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOGRAPHIC - 128)) | (1 << (Cobol85PreprocessorParser.NOHOOK - 128)) | (1 << (Cobol85PreprocessorParser.NOLENGTH - 128)) | (1 << (Cobol85PreprocessorParser.NOLIB - 128)) | (1 << (Cobol85PreprocessorParser.NOLINKAGE - 128)) | (1 << (Cobol85PreprocessorParser.NOLIST - 128)) | (1 << (Cobol85PreprocessorParser.NOMAP - 128)) | (1 << (Cobol85PreprocessorParser.NOMD - 128)) | (1 << (Cobol85PreprocessorParser.NOMDECK - 128)) | (1 << (Cobol85PreprocessorParser.NONAME - 128)) | (1 << (Cobol85PreprocessorParser.NONUM - 128)) | (1 << (Cobol85PreprocessorParser.NONUMBER - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJ - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJECT - 128)) | (1 << (Cobol85PreprocessorParser.NOOFF - 128)) | (1 << (Cobol85PreprocessorParser.NOOFFSET - 128)) | (1 << (Cobol85PreprocessorParser.NOOPSEQUENCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (Cobol85PreprocessorParser.NOOPT - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIMIZE - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIONS - 160)) | (1 << (Cobol85PreprocessorParser.NOP - 160)) | (1 << (Cobol85PreprocessorParser.NOPFD - 160)) | (1 << (Cobol85PreprocessorParser.NOPROLOG - 160)) | (1 << (Cobol85PreprocessorParser.NORENT - 160)) | (1 << (Cobol85PreprocessorParser.NOS - 160)) | (1 << (Cobol85PreprocessorParser.NOSEP - 160)) | (1 << (Cobol85PreprocessorParser.NOSEPARATE - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQ - 160)) | (1 << (Cobol85PreprocessorParser.NOSOURCE - 160)) | (1 << (Cobol85PreprocessorParser.NOSPIE - 160)) | (1 << (Cobol85PreprocessorParser.NOSQL - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLC - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLCCSID - 160)) | (1 << (Cobol85PreprocessorParser.NOSSR - 160)) | (1 << (Cobol85PreprocessorParser.NOSSRANGE - 160)) | (1 << (Cobol85PreprocessorParser.NOSTDTRUNC - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQUENCE - 160)) | (1 << (Cobol85PreprocessorParser.NOTERM - 160)) | (1 << (Cobol85PreprocessorParser.NOTERMINAL - 160)) | (1 << (Cobol85PreprocessorParser.NOTEST - 160)) | (1 << (Cobol85PreprocessorParser.NOTHREAD - 160)) | (1 << (Cobol85PreprocessorParser.NOTRIG - 160)) | (1 << (Cobol85PreprocessorParser.NOVBREF - 160)) | (1 << (Cobol85PreprocessorParser.NOWORD - 160)) | (1 << (Cobol85PreprocessorParser.NOX - 160)) | (1 << (Cobol85PreprocessorParser.NOXREF - 160)) | (1 << (Cobol85PreprocessorParser.NOZWB - 160)) | (1 << (Cobol85PreprocessorParser.NS - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (Cobol85PreprocessorParser.NSEQ - 192)) | (1 << (Cobol85PreprocessorParser.NSYMBOL - 192)) | (1 << (Cobol85PreprocessorParser.NUM - 192)) | (1 << (Cobol85PreprocessorParser.NUMBER - 192)) | (1 << (Cobol85PreprocessorParser.NUMPROC - 192)) | (1 << (Cobol85PreprocessorParser.OBJ - 192)) | (1 << (Cobol85PreprocessorParser.OBJECT - 192)) | (1 << (Cobol85PreprocessorParser.OF - 192)) | (1 << (Cobol85PreprocessorParser.OFF - 192)) | (1 << (Cobol85PreprocessorParser.OFFSET - 192)) | (1 << (Cobol85PreprocessorParser.ON - 192)) | (1 << (Cobol85PreprocessorParser.OP - 192)) | (1 << (Cobol85PreprocessorParser.OPMARGINS - 192)) | (1 << (Cobol85PreprocessorParser.OPSEQUENCE - 192)) | (1 << (Cobol85PreprocessorParser.OPT - 192)) | (1 << (Cobol85PreprocessorParser.OPTFILE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIMIZE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIONS - 192)) | (1 << (Cobol85PreprocessorParser.OUT - 192)) | (1 << (Cobol85PreprocessorParser.OUTDD - 192)) | (1 << (Cobol85PreprocessorParser.PFD - 192)) | (1 << (Cobol85PreprocessorParser.PPTDBG - 192)) | (1 << (Cobol85PreprocessorParser.PGMN - 192)) | (1 << (Cobol85PreprocessorParser.PGMNAME - 192)) | (1 << (Cobol85PreprocessorParser.PROCESS - 192)) | (1 << (Cobol85PreprocessorParser.PROLOG - 192)) | (1 << (Cobol85PreprocessorParser.QUOTE - 192)) | (1 << (Cobol85PreprocessorParser.RENT - 192)) | (1 << (Cobol85PreprocessorParser.REPLACING - 192)) | (1 << (Cobol85PreprocessorParser.RMODE - 192)) | (1 << (Cobol85PreprocessorParser.RPARENCHAR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (Cobol85PreprocessorParser.SEP - 224)) | (1 << (Cobol85PreprocessorParser.SEPARATE - 224)) | (1 << (Cobol85PreprocessorParser.SEQ - 224)) | (1 << (Cobol85PreprocessorParser.SEQUENCE - 224)) | (1 << (Cobol85PreprocessorParser.SHORT - 224)) | (1 << (Cobol85PreprocessorParser.SIZE - 224)) | (1 << (Cobol85PreprocessorParser.SOURCE - 224)) | (1 << (Cobol85PreprocessorParser.SP - 224)) | (1 << (Cobol85PreprocessorParser.SPACE - 224)) | (1 << (Cobol85PreprocessorParser.SPIE - 224)) | (1 << (Cobol85PreprocessorParser.SQL - 224)) | (1 << (Cobol85PreprocessorParser.SQLC - 224)) | (1 << (Cobol85PreprocessorParser.SQLCCSID - 224)) | (1 << (Cobol85PreprocessorParser.SS - 224)) | (1 << (Cobol85PreprocessorParser.SSR - 224)) | (1 << (Cobol85PreprocessorParser.SSRANGE - 224)) | (1 << (Cobol85PreprocessorParser.STD - 224)) | (1 << (Cobol85PreprocessorParser.SYSEIB - 224)) | (1 << (Cobol85PreprocessorParser.SZ - 224)) | (1 << (Cobol85PreprocessorParser.TERM - 224)) | (1 << (Cobol85PreprocessorParser.TERMINAL - 224)) | (1 << (Cobol85PreprocessorParser.TEST - 224)) | (1 << (Cobol85PreprocessorParser.THREAD - 224)) | (1 << (Cobol85PreprocessorParser.TITLE - 224)) | (1 << (Cobol85PreprocessorParser.TRIG - 224)) | (1 << (Cobol85PreprocessorParser.TRUNC - 224)) | (1 << (Cobol85PreprocessorParser.UE - 224)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (Cobol85PreprocessorParser.UPPER - 256)) | (1 << (Cobol85PreprocessorParser.VBREF - 256)) | (1 << (Cobol85PreprocessorParser.WD - 256)) | (1 << (Cobol85PreprocessorParser.XMLPARSE - 256)) | (1 << (Cobol85PreprocessorParser.XMLSS - 256)) | (1 << (Cobol85PreprocessorParser.XOPTS - 256)) | (1 << (Cobol85PreprocessorParser.XREF - 256)) | (1 << (Cobol85PreprocessorParser.YEARWINDOW - 256)) | (1 << (Cobol85PreprocessorParser.YW - 256)) | (1 << (Cobol85PreprocessorParser.ZWB - 256)) | (1 << (Cobol85PreprocessorParser.C_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.D_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.E_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.F_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.H_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.I_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.M_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.N_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.Q_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.U_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.W_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.X_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.COMMACHAR - 256)) | (1 << (Cobol85PreprocessorParser.DOT - 256)) | (1 << (Cobol85PreprocessorParser.NONNUMERICLITERAL - 256)) | (1 << (Cobol85PreprocessorParser.NUMERICLITERAL - 256)) | (1 << (Cobol85PreprocessorParser.IDENTIFIER - 256)))) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & ((1 << (Cobol85PreprocessorParser.FILENAME - 288)) | (1 << (Cobol85PreprocessorParser.NEWLINE - 288)) | (1 << (Cobol85PreprocessorParser.TEXT - 288)))) !== 0)) {
                    {
                        this.state = 637;
                        this.charData();
                    }
                }
                this.state = 640;
                this.match(Cobol85PreprocessorParser.DOUBLEEQUALCHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.charData = function () {
        var _localctx = new CharDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, Cobol85PreprocessorParser.RULE_charData);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 644;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Cobol85PreprocessorParser.ADATA:
                                    case Cobol85PreprocessorParser.ADV:
                                    case Cobol85PreprocessorParser.ALIAS:
                                    case Cobol85PreprocessorParser.ANSI:
                                    case Cobol85PreprocessorParser.ANY:
                                    case Cobol85PreprocessorParser.APOST:
                                    case Cobol85PreprocessorParser.AR:
                                    case Cobol85PreprocessorParser.ARITH:
                                    case Cobol85PreprocessorParser.AUTO:
                                    case Cobol85PreprocessorParser.AWO:
                                    case Cobol85PreprocessorParser.BIN:
                                    case Cobol85PreprocessorParser.BLOCK0:
                                    case Cobol85PreprocessorParser.BUF:
                                    case Cobol85PreprocessorParser.BUFSIZE:
                                    case Cobol85PreprocessorParser.BY:
                                    case Cobol85PreprocessorParser.CBL:
                                    case Cobol85PreprocessorParser.CBLCARD:
                                    case Cobol85PreprocessorParser.CO:
                                    case Cobol85PreprocessorParser.COBOL2:
                                    case Cobol85PreprocessorParser.COBOL3:
                                    case Cobol85PreprocessorParser.CODEPAGE:
                                    case Cobol85PreprocessorParser.COMPAT:
                                    case Cobol85PreprocessorParser.COMPILE:
                                    case Cobol85PreprocessorParser.CP:
                                    case Cobol85PreprocessorParser.CPP:
                                    case Cobol85PreprocessorParser.CPSM:
                                    case Cobol85PreprocessorParser.CS:
                                    case Cobol85PreprocessorParser.CURR:
                                    case Cobol85PreprocessorParser.CURRENCY:
                                    case Cobol85PreprocessorParser.DATA:
                                    case Cobol85PreprocessorParser.DATEPROC:
                                    case Cobol85PreprocessorParser.DBCS:
                                    case Cobol85PreprocessorParser.DD:
                                    case Cobol85PreprocessorParser.DEBUG:
                                    case Cobol85PreprocessorParser.DECK:
                                    case Cobol85PreprocessorParser.DIAGTRUNC:
                                    case Cobol85PreprocessorParser.DLI:
                                    case Cobol85PreprocessorParser.DLL:
                                    case Cobol85PreprocessorParser.DP:
                                    case Cobol85PreprocessorParser.DTR:
                                    case Cobol85PreprocessorParser.DU:
                                    case Cobol85PreprocessorParser.DUMP:
                                    case Cobol85PreprocessorParser.DYN:
                                    case Cobol85PreprocessorParser.DYNAM:
                                    case Cobol85PreprocessorParser.EDF:
                                    case Cobol85PreprocessorParser.EJECT:
                                    case Cobol85PreprocessorParser.EJPD:
                                    case Cobol85PreprocessorParser.EN:
                                    case Cobol85PreprocessorParser.ENGLISH:
                                    case Cobol85PreprocessorParser.EPILOG:
                                    case Cobol85PreprocessorParser.EXCI:
                                    case Cobol85PreprocessorParser.EXIT:
                                    case Cobol85PreprocessorParser.EXP:
                                    case Cobol85PreprocessorParser.EXPORTALL:
                                    case Cobol85PreprocessorParser.EXTEND:
                                    case Cobol85PreprocessorParser.FASTSRT:
                                    case Cobol85PreprocessorParser.FLAG:
                                    case Cobol85PreprocessorParser.FLAGSTD:
                                    case Cobol85PreprocessorParser.FSRT:
                                    case Cobol85PreprocessorParser.FULL:
                                    case Cobol85PreprocessorParser.GDS:
                                    case Cobol85PreprocessorParser.GRAPHIC:
                                    case Cobol85PreprocessorParser.HOOK:
                                    case Cobol85PreprocessorParser.IN:
                                    case Cobol85PreprocessorParser.INTDATE:
                                    case Cobol85PreprocessorParser.JA:
                                    case Cobol85PreprocessorParser.JP:
                                    case Cobol85PreprocessorParser.KA:
                                    case Cobol85PreprocessorParser.LANG:
                                    case Cobol85PreprocessorParser.LANGUAGE:
                                    case Cobol85PreprocessorParser.LC:
                                    case Cobol85PreprocessorParser.LENGTH:
                                    case Cobol85PreprocessorParser.LIB:
                                    case Cobol85PreprocessorParser.LILIAN:
                                    case Cobol85PreprocessorParser.LIN:
                                    case Cobol85PreprocessorParser.LINECOUNT:
                                    case Cobol85PreprocessorParser.LINKAGE:
                                    case Cobol85PreprocessorParser.LIST:
                                    case Cobol85PreprocessorParser.LM:
                                    case Cobol85PreprocessorParser.LONGMIXED:
                                    case Cobol85PreprocessorParser.LONGUPPER:
                                    case Cobol85PreprocessorParser.LPARENCHAR:
                                    case Cobol85PreprocessorParser.LU:
                                    case Cobol85PreprocessorParser.MAP:
                                    case Cobol85PreprocessorParser.MARGINS:
                                    case Cobol85PreprocessorParser.MAX:
                                    case Cobol85PreprocessorParser.MD:
                                    case Cobol85PreprocessorParser.MDECK:
                                    case Cobol85PreprocessorParser.MIG:
                                    case Cobol85PreprocessorParser.MIXED:
                                    case Cobol85PreprocessorParser.NAME:
                                    case Cobol85PreprocessorParser.NAT:
                                    case Cobol85PreprocessorParser.NATIONAL:
                                    case Cobol85PreprocessorParser.NATLANG:
                                    case Cobol85PreprocessorParser.NN:
                                    case Cobol85PreprocessorParser.NO:
                                    case Cobol85PreprocessorParser.NOADATA:
                                    case Cobol85PreprocessorParser.NOADV:
                                    case Cobol85PreprocessorParser.NOALIAS:
                                    case Cobol85PreprocessorParser.NOAWO:
                                    case Cobol85PreprocessorParser.NOBLOCK0:
                                    case Cobol85PreprocessorParser.NOC:
                                    case Cobol85PreprocessorParser.NOCBLCARD:
                                    case Cobol85PreprocessorParser.NOCICS:
                                    case Cobol85PreprocessorParser.NOCMPR2:
                                    case Cobol85PreprocessorParser.NOCOMPILE:
                                    case Cobol85PreprocessorParser.NOCPSM:
                                    case Cobol85PreprocessorParser.NOCURR:
                                    case Cobol85PreprocessorParser.NOCURRENCY:
                                    case Cobol85PreprocessorParser.NOD:
                                    case Cobol85PreprocessorParser.NODATEPROC:
                                    case Cobol85PreprocessorParser.NODBCS:
                                    case Cobol85PreprocessorParser.NODE:
                                    case Cobol85PreprocessorParser.NODEBUG:
                                    case Cobol85PreprocessorParser.NODECK:
                                    case Cobol85PreprocessorParser.NODIAGTRUNC:
                                    case Cobol85PreprocessorParser.NODLL:
                                    case Cobol85PreprocessorParser.NODU:
                                    case Cobol85PreprocessorParser.NODUMP:
                                    case Cobol85PreprocessorParser.NODP:
                                    case Cobol85PreprocessorParser.NODTR:
                                    case Cobol85PreprocessorParser.NODYN:
                                    case Cobol85PreprocessorParser.NODYNAM:
                                    case Cobol85PreprocessorParser.NOEDF:
                                    case Cobol85PreprocessorParser.NOEJPD:
                                    case Cobol85PreprocessorParser.NOEPILOG:
                                    case Cobol85PreprocessorParser.NOEXIT:
                                    case Cobol85PreprocessorParser.NOEXP:
                                    case Cobol85PreprocessorParser.NOEXPORTALL:
                                    case Cobol85PreprocessorParser.NOF:
                                    case Cobol85PreprocessorParser.NOFASTSRT:
                                    case Cobol85PreprocessorParser.NOFEPI:
                                    case Cobol85PreprocessorParser.NOFLAG:
                                    case Cobol85PreprocessorParser.NOFLAGMIG:
                                    case Cobol85PreprocessorParser.NOFLAGSTD:
                                    case Cobol85PreprocessorParser.NOFSRT:
                                    case Cobol85PreprocessorParser.NOGRAPHIC:
                                    case Cobol85PreprocessorParser.NOHOOK:
                                    case Cobol85PreprocessorParser.NOLENGTH:
                                    case Cobol85PreprocessorParser.NOLIB:
                                    case Cobol85PreprocessorParser.NOLINKAGE:
                                    case Cobol85PreprocessorParser.NOLIST:
                                    case Cobol85PreprocessorParser.NOMAP:
                                    case Cobol85PreprocessorParser.NOMD:
                                    case Cobol85PreprocessorParser.NOMDECK:
                                    case Cobol85PreprocessorParser.NONAME:
                                    case Cobol85PreprocessorParser.NONUM:
                                    case Cobol85PreprocessorParser.NONUMBER:
                                    case Cobol85PreprocessorParser.NOOBJ:
                                    case Cobol85PreprocessorParser.NOOBJECT:
                                    case Cobol85PreprocessorParser.NOOFF:
                                    case Cobol85PreprocessorParser.NOOFFSET:
                                    case Cobol85PreprocessorParser.NOOPSEQUENCE:
                                    case Cobol85PreprocessorParser.NOOPT:
                                    case Cobol85PreprocessorParser.NOOPTIMIZE:
                                    case Cobol85PreprocessorParser.NOOPTIONS:
                                    case Cobol85PreprocessorParser.NOP:
                                    case Cobol85PreprocessorParser.NOPFD:
                                    case Cobol85PreprocessorParser.NOPROLOG:
                                    case Cobol85PreprocessorParser.NORENT:
                                    case Cobol85PreprocessorParser.NOS:
                                    case Cobol85PreprocessorParser.NOSEP:
                                    case Cobol85PreprocessorParser.NOSEPARATE:
                                    case Cobol85PreprocessorParser.NOSEQ:
                                    case Cobol85PreprocessorParser.NOSOURCE:
                                    case Cobol85PreprocessorParser.NOSPIE:
                                    case Cobol85PreprocessorParser.NOSQL:
                                    case Cobol85PreprocessorParser.NOSQLC:
                                    case Cobol85PreprocessorParser.NOSQLCCSID:
                                    case Cobol85PreprocessorParser.NOSSR:
                                    case Cobol85PreprocessorParser.NOSSRANGE:
                                    case Cobol85PreprocessorParser.NOSTDTRUNC:
                                    case Cobol85PreprocessorParser.NOSEQUENCE:
                                    case Cobol85PreprocessorParser.NOTERM:
                                    case Cobol85PreprocessorParser.NOTERMINAL:
                                    case Cobol85PreprocessorParser.NOTEST:
                                    case Cobol85PreprocessorParser.NOTHREAD:
                                    case Cobol85PreprocessorParser.NOTRIG:
                                    case Cobol85PreprocessorParser.NOVBREF:
                                    case Cobol85PreprocessorParser.NOWORD:
                                    case Cobol85PreprocessorParser.NOX:
                                    case Cobol85PreprocessorParser.NOXREF:
                                    case Cobol85PreprocessorParser.NOZWB:
                                    case Cobol85PreprocessorParser.NS:
                                    case Cobol85PreprocessorParser.NSEQ:
                                    case Cobol85PreprocessorParser.NSYMBOL:
                                    case Cobol85PreprocessorParser.NUM:
                                    case Cobol85PreprocessorParser.NUMBER:
                                    case Cobol85PreprocessorParser.NUMPROC:
                                    case Cobol85PreprocessorParser.OBJ:
                                    case Cobol85PreprocessorParser.OBJECT:
                                    case Cobol85PreprocessorParser.OF:
                                    case Cobol85PreprocessorParser.OFF:
                                    case Cobol85PreprocessorParser.OFFSET:
                                    case Cobol85PreprocessorParser.ON:
                                    case Cobol85PreprocessorParser.OP:
                                    case Cobol85PreprocessorParser.OPMARGINS:
                                    case Cobol85PreprocessorParser.OPSEQUENCE:
                                    case Cobol85PreprocessorParser.OPT:
                                    case Cobol85PreprocessorParser.OPTFILE:
                                    case Cobol85PreprocessorParser.OPTIMIZE:
                                    case Cobol85PreprocessorParser.OPTIONS:
                                    case Cobol85PreprocessorParser.OUT:
                                    case Cobol85PreprocessorParser.OUTDD:
                                    case Cobol85PreprocessorParser.PFD:
                                    case Cobol85PreprocessorParser.PPTDBG:
                                    case Cobol85PreprocessorParser.PGMN:
                                    case Cobol85PreprocessorParser.PGMNAME:
                                    case Cobol85PreprocessorParser.PROCESS:
                                    case Cobol85PreprocessorParser.PROLOG:
                                    case Cobol85PreprocessorParser.QUOTE:
                                    case Cobol85PreprocessorParser.RENT:
                                    case Cobol85PreprocessorParser.REPLACING:
                                    case Cobol85PreprocessorParser.RMODE:
                                    case Cobol85PreprocessorParser.RPARENCHAR:
                                    case Cobol85PreprocessorParser.SEP:
                                    case Cobol85PreprocessorParser.SEPARATE:
                                    case Cobol85PreprocessorParser.SEQ:
                                    case Cobol85PreprocessorParser.SEQUENCE:
                                    case Cobol85PreprocessorParser.SHORT:
                                    case Cobol85PreprocessorParser.SIZE:
                                    case Cobol85PreprocessorParser.SOURCE:
                                    case Cobol85PreprocessorParser.SP:
                                    case Cobol85PreprocessorParser.SPACE:
                                    case Cobol85PreprocessorParser.SPIE:
                                    case Cobol85PreprocessorParser.SQL:
                                    case Cobol85PreprocessorParser.SQLC:
                                    case Cobol85PreprocessorParser.SQLCCSID:
                                    case Cobol85PreprocessorParser.SS:
                                    case Cobol85PreprocessorParser.SSR:
                                    case Cobol85PreprocessorParser.SSRANGE:
                                    case Cobol85PreprocessorParser.STD:
                                    case Cobol85PreprocessorParser.SYSEIB:
                                    case Cobol85PreprocessorParser.SZ:
                                    case Cobol85PreprocessorParser.TERM:
                                    case Cobol85PreprocessorParser.TERMINAL:
                                    case Cobol85PreprocessorParser.TEST:
                                    case Cobol85PreprocessorParser.THREAD:
                                    case Cobol85PreprocessorParser.TITLE:
                                    case Cobol85PreprocessorParser.TRIG:
                                    case Cobol85PreprocessorParser.TRUNC:
                                    case Cobol85PreprocessorParser.UE:
                                    case Cobol85PreprocessorParser.UPPER:
                                    case Cobol85PreprocessorParser.VBREF:
                                    case Cobol85PreprocessorParser.WD:
                                    case Cobol85PreprocessorParser.XMLPARSE:
                                    case Cobol85PreprocessorParser.XMLSS:
                                    case Cobol85PreprocessorParser.XOPTS:
                                    case Cobol85PreprocessorParser.XREF:
                                    case Cobol85PreprocessorParser.YEARWINDOW:
                                    case Cobol85PreprocessorParser.YW:
                                    case Cobol85PreprocessorParser.ZWB:
                                    case Cobol85PreprocessorParser.C_CHAR:
                                    case Cobol85PreprocessorParser.D_CHAR:
                                    case Cobol85PreprocessorParser.E_CHAR:
                                    case Cobol85PreprocessorParser.F_CHAR:
                                    case Cobol85PreprocessorParser.H_CHAR:
                                    case Cobol85PreprocessorParser.I_CHAR:
                                    case Cobol85PreprocessorParser.M_CHAR:
                                    case Cobol85PreprocessorParser.N_CHAR:
                                    case Cobol85PreprocessorParser.Q_CHAR:
                                    case Cobol85PreprocessorParser.S_CHAR:
                                    case Cobol85PreprocessorParser.U_CHAR:
                                    case Cobol85PreprocessorParser.W_CHAR:
                                    case Cobol85PreprocessorParser.X_CHAR:
                                    case Cobol85PreprocessorParser.COMMACHAR:
                                    case Cobol85PreprocessorParser.DOT:
                                    case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                                    case Cobol85PreprocessorParser.NUMERICLITERAL:
                                    case Cobol85PreprocessorParser.IDENTIFIER:
                                    case Cobol85PreprocessorParser.FILENAME:
                                    case Cobol85PreprocessorParser.TEXT:
                                        {
                                            this.state = 642;
                                            this.charDataLine();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.NEWLINE:
                                        {
                                            this.state = 643;
                                            this.match(Cobol85PreprocessorParser.NEWLINE);
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
                    this.state = 646;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
    Cobol85PreprocessorParser.prototype.charDataSql = function () {
        var _localctx = new CharDataSqlContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, Cobol85PreprocessorParser.RULE_charDataSql);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 652;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Cobol85PreprocessorParser.ADATA:
                            case Cobol85PreprocessorParser.ADV:
                            case Cobol85PreprocessorParser.ALIAS:
                            case Cobol85PreprocessorParser.ANSI:
                            case Cobol85PreprocessorParser.ANY:
                            case Cobol85PreprocessorParser.APOST:
                            case Cobol85PreprocessorParser.AR:
                            case Cobol85PreprocessorParser.ARITH:
                            case Cobol85PreprocessorParser.AUTO:
                            case Cobol85PreprocessorParser.AWO:
                            case Cobol85PreprocessorParser.BIN:
                            case Cobol85PreprocessorParser.BLOCK0:
                            case Cobol85PreprocessorParser.BUF:
                            case Cobol85PreprocessorParser.BUFSIZE:
                            case Cobol85PreprocessorParser.BY:
                            case Cobol85PreprocessorParser.CBL:
                            case Cobol85PreprocessorParser.CBLCARD:
                            case Cobol85PreprocessorParser.CO:
                            case Cobol85PreprocessorParser.COBOL2:
                            case Cobol85PreprocessorParser.COBOL3:
                            case Cobol85PreprocessorParser.CODEPAGE:
                            case Cobol85PreprocessorParser.COMPAT:
                            case Cobol85PreprocessorParser.COMPILE:
                            case Cobol85PreprocessorParser.CP:
                            case Cobol85PreprocessorParser.CPP:
                            case Cobol85PreprocessorParser.CPSM:
                            case Cobol85PreprocessorParser.CS:
                            case Cobol85PreprocessorParser.CURR:
                            case Cobol85PreprocessorParser.CURRENCY:
                            case Cobol85PreprocessorParser.DATA:
                            case Cobol85PreprocessorParser.DATEPROC:
                            case Cobol85PreprocessorParser.DBCS:
                            case Cobol85PreprocessorParser.DD:
                            case Cobol85PreprocessorParser.DEBUG:
                            case Cobol85PreprocessorParser.DECK:
                            case Cobol85PreprocessorParser.DIAGTRUNC:
                            case Cobol85PreprocessorParser.DLI:
                            case Cobol85PreprocessorParser.DLL:
                            case Cobol85PreprocessorParser.DP:
                            case Cobol85PreprocessorParser.DTR:
                            case Cobol85PreprocessorParser.DU:
                            case Cobol85PreprocessorParser.DUMP:
                            case Cobol85PreprocessorParser.DYN:
                            case Cobol85PreprocessorParser.DYNAM:
                            case Cobol85PreprocessorParser.EDF:
                            case Cobol85PreprocessorParser.EJECT:
                            case Cobol85PreprocessorParser.EJPD:
                            case Cobol85PreprocessorParser.EN:
                            case Cobol85PreprocessorParser.ENGLISH:
                            case Cobol85PreprocessorParser.EPILOG:
                            case Cobol85PreprocessorParser.EXCI:
                            case Cobol85PreprocessorParser.EXIT:
                            case Cobol85PreprocessorParser.EXP:
                            case Cobol85PreprocessorParser.EXPORTALL:
                            case Cobol85PreprocessorParser.EXTEND:
                            case Cobol85PreprocessorParser.FASTSRT:
                            case Cobol85PreprocessorParser.FLAG:
                            case Cobol85PreprocessorParser.FLAGSTD:
                            case Cobol85PreprocessorParser.FSRT:
                            case Cobol85PreprocessorParser.FULL:
                            case Cobol85PreprocessorParser.GDS:
                            case Cobol85PreprocessorParser.GRAPHIC:
                            case Cobol85PreprocessorParser.HOOK:
                            case Cobol85PreprocessorParser.IN:
                            case Cobol85PreprocessorParser.INTDATE:
                            case Cobol85PreprocessorParser.JA:
                            case Cobol85PreprocessorParser.JP:
                            case Cobol85PreprocessorParser.KA:
                            case Cobol85PreprocessorParser.LANG:
                            case Cobol85PreprocessorParser.LANGUAGE:
                            case Cobol85PreprocessorParser.LC:
                            case Cobol85PreprocessorParser.LENGTH:
                            case Cobol85PreprocessorParser.LIB:
                            case Cobol85PreprocessorParser.LILIAN:
                            case Cobol85PreprocessorParser.LIN:
                            case Cobol85PreprocessorParser.LINECOUNT:
                            case Cobol85PreprocessorParser.LINKAGE:
                            case Cobol85PreprocessorParser.LIST:
                            case Cobol85PreprocessorParser.LM:
                            case Cobol85PreprocessorParser.LONGMIXED:
                            case Cobol85PreprocessorParser.LONGUPPER:
                            case Cobol85PreprocessorParser.LPARENCHAR:
                            case Cobol85PreprocessorParser.LU:
                            case Cobol85PreprocessorParser.MAP:
                            case Cobol85PreprocessorParser.MARGINS:
                            case Cobol85PreprocessorParser.MAX:
                            case Cobol85PreprocessorParser.MD:
                            case Cobol85PreprocessorParser.MDECK:
                            case Cobol85PreprocessorParser.MIG:
                            case Cobol85PreprocessorParser.MIXED:
                            case Cobol85PreprocessorParser.NAME:
                            case Cobol85PreprocessorParser.NAT:
                            case Cobol85PreprocessorParser.NATIONAL:
                            case Cobol85PreprocessorParser.NATLANG:
                            case Cobol85PreprocessorParser.NN:
                            case Cobol85PreprocessorParser.NO:
                            case Cobol85PreprocessorParser.NOADATA:
                            case Cobol85PreprocessorParser.NOADV:
                            case Cobol85PreprocessorParser.NOALIAS:
                            case Cobol85PreprocessorParser.NOAWO:
                            case Cobol85PreprocessorParser.NOBLOCK0:
                            case Cobol85PreprocessorParser.NOC:
                            case Cobol85PreprocessorParser.NOCBLCARD:
                            case Cobol85PreprocessorParser.NOCICS:
                            case Cobol85PreprocessorParser.NOCMPR2:
                            case Cobol85PreprocessorParser.NOCOMPILE:
                            case Cobol85PreprocessorParser.NOCPSM:
                            case Cobol85PreprocessorParser.NOCURR:
                            case Cobol85PreprocessorParser.NOCURRENCY:
                            case Cobol85PreprocessorParser.NOD:
                            case Cobol85PreprocessorParser.NODATEPROC:
                            case Cobol85PreprocessorParser.NODBCS:
                            case Cobol85PreprocessorParser.NODE:
                            case Cobol85PreprocessorParser.NODEBUG:
                            case Cobol85PreprocessorParser.NODECK:
                            case Cobol85PreprocessorParser.NODIAGTRUNC:
                            case Cobol85PreprocessorParser.NODLL:
                            case Cobol85PreprocessorParser.NODU:
                            case Cobol85PreprocessorParser.NODUMP:
                            case Cobol85PreprocessorParser.NODP:
                            case Cobol85PreprocessorParser.NODTR:
                            case Cobol85PreprocessorParser.NODYN:
                            case Cobol85PreprocessorParser.NODYNAM:
                            case Cobol85PreprocessorParser.NOEDF:
                            case Cobol85PreprocessorParser.NOEJPD:
                            case Cobol85PreprocessorParser.NOEPILOG:
                            case Cobol85PreprocessorParser.NOEXIT:
                            case Cobol85PreprocessorParser.NOEXP:
                            case Cobol85PreprocessorParser.NOEXPORTALL:
                            case Cobol85PreprocessorParser.NOF:
                            case Cobol85PreprocessorParser.NOFASTSRT:
                            case Cobol85PreprocessorParser.NOFEPI:
                            case Cobol85PreprocessorParser.NOFLAG:
                            case Cobol85PreprocessorParser.NOFLAGMIG:
                            case Cobol85PreprocessorParser.NOFLAGSTD:
                            case Cobol85PreprocessorParser.NOFSRT:
                            case Cobol85PreprocessorParser.NOGRAPHIC:
                            case Cobol85PreprocessorParser.NOHOOK:
                            case Cobol85PreprocessorParser.NOLENGTH:
                            case Cobol85PreprocessorParser.NOLIB:
                            case Cobol85PreprocessorParser.NOLINKAGE:
                            case Cobol85PreprocessorParser.NOLIST:
                            case Cobol85PreprocessorParser.NOMAP:
                            case Cobol85PreprocessorParser.NOMD:
                            case Cobol85PreprocessorParser.NOMDECK:
                            case Cobol85PreprocessorParser.NONAME:
                            case Cobol85PreprocessorParser.NONUM:
                            case Cobol85PreprocessorParser.NONUMBER:
                            case Cobol85PreprocessorParser.NOOBJ:
                            case Cobol85PreprocessorParser.NOOBJECT:
                            case Cobol85PreprocessorParser.NOOFF:
                            case Cobol85PreprocessorParser.NOOFFSET:
                            case Cobol85PreprocessorParser.NOOPSEQUENCE:
                            case Cobol85PreprocessorParser.NOOPT:
                            case Cobol85PreprocessorParser.NOOPTIMIZE:
                            case Cobol85PreprocessorParser.NOOPTIONS:
                            case Cobol85PreprocessorParser.NOP:
                            case Cobol85PreprocessorParser.NOPFD:
                            case Cobol85PreprocessorParser.NOPROLOG:
                            case Cobol85PreprocessorParser.NORENT:
                            case Cobol85PreprocessorParser.NOS:
                            case Cobol85PreprocessorParser.NOSEP:
                            case Cobol85PreprocessorParser.NOSEPARATE:
                            case Cobol85PreprocessorParser.NOSEQ:
                            case Cobol85PreprocessorParser.NOSOURCE:
                            case Cobol85PreprocessorParser.NOSPIE:
                            case Cobol85PreprocessorParser.NOSQL:
                            case Cobol85PreprocessorParser.NOSQLC:
                            case Cobol85PreprocessorParser.NOSQLCCSID:
                            case Cobol85PreprocessorParser.NOSSR:
                            case Cobol85PreprocessorParser.NOSSRANGE:
                            case Cobol85PreprocessorParser.NOSTDTRUNC:
                            case Cobol85PreprocessorParser.NOSEQUENCE:
                            case Cobol85PreprocessorParser.NOTERM:
                            case Cobol85PreprocessorParser.NOTERMINAL:
                            case Cobol85PreprocessorParser.NOTEST:
                            case Cobol85PreprocessorParser.NOTHREAD:
                            case Cobol85PreprocessorParser.NOTRIG:
                            case Cobol85PreprocessorParser.NOVBREF:
                            case Cobol85PreprocessorParser.NOWORD:
                            case Cobol85PreprocessorParser.NOX:
                            case Cobol85PreprocessorParser.NOXREF:
                            case Cobol85PreprocessorParser.NOZWB:
                            case Cobol85PreprocessorParser.NS:
                            case Cobol85PreprocessorParser.NSEQ:
                            case Cobol85PreprocessorParser.NSYMBOL:
                            case Cobol85PreprocessorParser.NUM:
                            case Cobol85PreprocessorParser.NUMBER:
                            case Cobol85PreprocessorParser.NUMPROC:
                            case Cobol85PreprocessorParser.OBJ:
                            case Cobol85PreprocessorParser.OBJECT:
                            case Cobol85PreprocessorParser.OF:
                            case Cobol85PreprocessorParser.OFF:
                            case Cobol85PreprocessorParser.OFFSET:
                            case Cobol85PreprocessorParser.ON:
                            case Cobol85PreprocessorParser.OP:
                            case Cobol85PreprocessorParser.OPMARGINS:
                            case Cobol85PreprocessorParser.OPSEQUENCE:
                            case Cobol85PreprocessorParser.OPT:
                            case Cobol85PreprocessorParser.OPTFILE:
                            case Cobol85PreprocessorParser.OPTIMIZE:
                            case Cobol85PreprocessorParser.OPTIONS:
                            case Cobol85PreprocessorParser.OUT:
                            case Cobol85PreprocessorParser.OUTDD:
                            case Cobol85PreprocessorParser.PFD:
                            case Cobol85PreprocessorParser.PPTDBG:
                            case Cobol85PreprocessorParser.PGMN:
                            case Cobol85PreprocessorParser.PGMNAME:
                            case Cobol85PreprocessorParser.PROCESS:
                            case Cobol85PreprocessorParser.PROLOG:
                            case Cobol85PreprocessorParser.QUOTE:
                            case Cobol85PreprocessorParser.RENT:
                            case Cobol85PreprocessorParser.REPLACING:
                            case Cobol85PreprocessorParser.RMODE:
                            case Cobol85PreprocessorParser.RPARENCHAR:
                            case Cobol85PreprocessorParser.SEP:
                            case Cobol85PreprocessorParser.SEPARATE:
                            case Cobol85PreprocessorParser.SEQ:
                            case Cobol85PreprocessorParser.SEQUENCE:
                            case Cobol85PreprocessorParser.SHORT:
                            case Cobol85PreprocessorParser.SIZE:
                            case Cobol85PreprocessorParser.SOURCE:
                            case Cobol85PreprocessorParser.SP:
                            case Cobol85PreprocessorParser.SPACE:
                            case Cobol85PreprocessorParser.SPIE:
                            case Cobol85PreprocessorParser.SQL:
                            case Cobol85PreprocessorParser.SQLC:
                            case Cobol85PreprocessorParser.SQLCCSID:
                            case Cobol85PreprocessorParser.SS:
                            case Cobol85PreprocessorParser.SSR:
                            case Cobol85PreprocessorParser.SSRANGE:
                            case Cobol85PreprocessorParser.STD:
                            case Cobol85PreprocessorParser.SYSEIB:
                            case Cobol85PreprocessorParser.SZ:
                            case Cobol85PreprocessorParser.TERM:
                            case Cobol85PreprocessorParser.TERMINAL:
                            case Cobol85PreprocessorParser.TEST:
                            case Cobol85PreprocessorParser.THREAD:
                            case Cobol85PreprocessorParser.TITLE:
                            case Cobol85PreprocessorParser.TRIG:
                            case Cobol85PreprocessorParser.TRUNC:
                            case Cobol85PreprocessorParser.UE:
                            case Cobol85PreprocessorParser.UPPER:
                            case Cobol85PreprocessorParser.VBREF:
                            case Cobol85PreprocessorParser.WD:
                            case Cobol85PreprocessorParser.XMLPARSE:
                            case Cobol85PreprocessorParser.XMLSS:
                            case Cobol85PreprocessorParser.XOPTS:
                            case Cobol85PreprocessorParser.XREF:
                            case Cobol85PreprocessorParser.YEARWINDOW:
                            case Cobol85PreprocessorParser.YW:
                            case Cobol85PreprocessorParser.ZWB:
                            case Cobol85PreprocessorParser.C_CHAR:
                            case Cobol85PreprocessorParser.D_CHAR:
                            case Cobol85PreprocessorParser.E_CHAR:
                            case Cobol85PreprocessorParser.F_CHAR:
                            case Cobol85PreprocessorParser.H_CHAR:
                            case Cobol85PreprocessorParser.I_CHAR:
                            case Cobol85PreprocessorParser.M_CHAR:
                            case Cobol85PreprocessorParser.N_CHAR:
                            case Cobol85PreprocessorParser.Q_CHAR:
                            case Cobol85PreprocessorParser.S_CHAR:
                            case Cobol85PreprocessorParser.U_CHAR:
                            case Cobol85PreprocessorParser.W_CHAR:
                            case Cobol85PreprocessorParser.X_CHAR:
                            case Cobol85PreprocessorParser.COMMACHAR:
                            case Cobol85PreprocessorParser.DOT:
                            case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                            case Cobol85PreprocessorParser.NUMERICLITERAL:
                            case Cobol85PreprocessorParser.IDENTIFIER:
                            case Cobol85PreprocessorParser.FILENAME:
                            case Cobol85PreprocessorParser.TEXT:
                                {
                                    this.state = 648;
                                    this.charDataLine();
                                }
                                break;
                            case Cobol85PreprocessorParser.COPY:
                                {
                                    this.state = 649;
                                    this.match(Cobol85PreprocessorParser.COPY);
                                }
                                break;
                            case Cobol85PreprocessorParser.REPLACE:
                                {
                                    this.state = 650;
                                    this.match(Cobol85PreprocessorParser.REPLACE);
                                }
                                break;
                            case Cobol85PreprocessorParser.NEWLINE:
                                {
                                    this.state = 651;
                                    this.match(Cobol85PreprocessorParser.NEWLINE);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 654;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Cobol85PreprocessorParser.ADATA) | (1 << Cobol85PreprocessorParser.ADV) | (1 << Cobol85PreprocessorParser.ALIAS) | (1 << Cobol85PreprocessorParser.ANSI) | (1 << Cobol85PreprocessorParser.ANY) | (1 << Cobol85PreprocessorParser.APOST) | (1 << Cobol85PreprocessorParser.AR) | (1 << Cobol85PreprocessorParser.ARITH) | (1 << Cobol85PreprocessorParser.AUTO) | (1 << Cobol85PreprocessorParser.AWO) | (1 << Cobol85PreprocessorParser.BIN) | (1 << Cobol85PreprocessorParser.BLOCK0) | (1 << Cobol85PreprocessorParser.BUF) | (1 << Cobol85PreprocessorParser.BUFSIZE) | (1 << Cobol85PreprocessorParser.BY) | (1 << Cobol85PreprocessorParser.CBL) | (1 << Cobol85PreprocessorParser.CBLCARD) | (1 << Cobol85PreprocessorParser.CO) | (1 << Cobol85PreprocessorParser.COBOL2) | (1 << Cobol85PreprocessorParser.COBOL3) | (1 << Cobol85PreprocessorParser.CODEPAGE) | (1 << Cobol85PreprocessorParser.COMPAT) | (1 << Cobol85PreprocessorParser.COMPILE) | (1 << Cobol85PreprocessorParser.COPY) | (1 << Cobol85PreprocessorParser.CP) | (1 << Cobol85PreprocessorParser.CPP) | (1 << Cobol85PreprocessorParser.CPSM) | (1 << Cobol85PreprocessorParser.CS) | (1 << Cobol85PreprocessorParser.CURR) | (1 << Cobol85PreprocessorParser.CURRENCY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Cobol85PreprocessorParser.DATA - 32)) | (1 << (Cobol85PreprocessorParser.DATEPROC - 32)) | (1 << (Cobol85PreprocessorParser.DBCS - 32)) | (1 << (Cobol85PreprocessorParser.DD - 32)) | (1 << (Cobol85PreprocessorParser.DEBUG - 32)) | (1 << (Cobol85PreprocessorParser.DECK - 32)) | (1 << (Cobol85PreprocessorParser.DIAGTRUNC - 32)) | (1 << (Cobol85PreprocessorParser.DLI - 32)) | (1 << (Cobol85PreprocessorParser.DLL - 32)) | (1 << (Cobol85PreprocessorParser.DP - 32)) | (1 << (Cobol85PreprocessorParser.DTR - 32)) | (1 << (Cobol85PreprocessorParser.DU - 32)) | (1 << (Cobol85PreprocessorParser.DUMP - 32)) | (1 << (Cobol85PreprocessorParser.DYN - 32)) | (1 << (Cobol85PreprocessorParser.DYNAM - 32)) | (1 << (Cobol85PreprocessorParser.EDF - 32)) | (1 << (Cobol85PreprocessorParser.EJECT - 32)) | (1 << (Cobol85PreprocessorParser.EJPD - 32)) | (1 << (Cobol85PreprocessorParser.EN - 32)) | (1 << (Cobol85PreprocessorParser.ENGLISH - 32)) | (1 << (Cobol85PreprocessorParser.EPILOG - 32)) | (1 << (Cobol85PreprocessorParser.EXCI - 32)) | (1 << (Cobol85PreprocessorParser.EXIT - 32)) | (1 << (Cobol85PreprocessorParser.EXP - 32)) | (1 << (Cobol85PreprocessorParser.EXPORTALL - 32)) | (1 << (Cobol85PreprocessorParser.EXTEND - 32)) | (1 << (Cobol85PreprocessorParser.FASTSRT - 32)) | (1 << (Cobol85PreprocessorParser.FLAG - 32)) | (1 << (Cobol85PreprocessorParser.FLAGSTD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Cobol85PreprocessorParser.FSRT - 64)) | (1 << (Cobol85PreprocessorParser.FULL - 64)) | (1 << (Cobol85PreprocessorParser.GDS - 64)) | (1 << (Cobol85PreprocessorParser.GRAPHIC - 64)) | (1 << (Cobol85PreprocessorParser.HOOK - 64)) | (1 << (Cobol85PreprocessorParser.IN - 64)) | (1 << (Cobol85PreprocessorParser.INTDATE - 64)) | (1 << (Cobol85PreprocessorParser.JA - 64)) | (1 << (Cobol85PreprocessorParser.JP - 64)) | (1 << (Cobol85PreprocessorParser.KA - 64)) | (1 << (Cobol85PreprocessorParser.LANG - 64)) | (1 << (Cobol85PreprocessorParser.LANGUAGE - 64)) | (1 << (Cobol85PreprocessorParser.LC - 64)) | (1 << (Cobol85PreprocessorParser.LENGTH - 64)) | (1 << (Cobol85PreprocessorParser.LIB - 64)) | (1 << (Cobol85PreprocessorParser.LILIAN - 64)) | (1 << (Cobol85PreprocessorParser.LIN - 64)) | (1 << (Cobol85PreprocessorParser.LINECOUNT - 64)) | (1 << (Cobol85PreprocessorParser.LINKAGE - 64)) | (1 << (Cobol85PreprocessorParser.LIST - 64)) | (1 << (Cobol85PreprocessorParser.LM - 64)) | (1 << (Cobol85PreprocessorParser.LONGMIXED - 64)) | (1 << (Cobol85PreprocessorParser.LONGUPPER - 64)) | (1 << (Cobol85PreprocessorParser.LPARENCHAR - 64)) | (1 << (Cobol85PreprocessorParser.LU - 64)) | (1 << (Cobol85PreprocessorParser.MAP - 64)) | (1 << (Cobol85PreprocessorParser.MARGINS - 64)) | (1 << (Cobol85PreprocessorParser.MAX - 64)) | (1 << (Cobol85PreprocessorParser.MD - 64)) | (1 << (Cobol85PreprocessorParser.MDECK - 64)) | (1 << (Cobol85PreprocessorParser.MIG - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (Cobol85PreprocessorParser.MIXED - 96)) | (1 << (Cobol85PreprocessorParser.NAME - 96)) | (1 << (Cobol85PreprocessorParser.NAT - 96)) | (1 << (Cobol85PreprocessorParser.NATIONAL - 96)) | (1 << (Cobol85PreprocessorParser.NATLANG - 96)) | (1 << (Cobol85PreprocessorParser.NN - 96)) | (1 << (Cobol85PreprocessorParser.NO - 96)) | (1 << (Cobol85PreprocessorParser.NOADATA - 96)) | (1 << (Cobol85PreprocessorParser.NOADV - 96)) | (1 << (Cobol85PreprocessorParser.NOALIAS - 96)) | (1 << (Cobol85PreprocessorParser.NOAWO - 96)) | (1 << (Cobol85PreprocessorParser.NOBLOCK0 - 96)) | (1 << (Cobol85PreprocessorParser.NOC - 96)) | (1 << (Cobol85PreprocessorParser.NOCBLCARD - 96)) | (1 << (Cobol85PreprocessorParser.NOCICS - 96)) | (1 << (Cobol85PreprocessorParser.NOCMPR2 - 96)) | (1 << (Cobol85PreprocessorParser.NOCOMPILE - 96)) | (1 << (Cobol85PreprocessorParser.NOCPSM - 96)) | (1 << (Cobol85PreprocessorParser.NOCURR - 96)) | (1 << (Cobol85PreprocessorParser.NOCURRENCY - 96)) | (1 << (Cobol85PreprocessorParser.NOD - 96)) | (1 << (Cobol85PreprocessorParser.NODATEPROC - 96)) | (1 << (Cobol85PreprocessorParser.NODBCS - 96)) | (1 << (Cobol85PreprocessorParser.NODE - 96)) | (1 << (Cobol85PreprocessorParser.NODEBUG - 96)) | (1 << (Cobol85PreprocessorParser.NODECK - 96)) | (1 << (Cobol85PreprocessorParser.NODIAGTRUNC - 96)) | (1 << (Cobol85PreprocessorParser.NODLL - 96)) | (1 << (Cobol85PreprocessorParser.NODU - 96)) | (1 << (Cobol85PreprocessorParser.NODUMP - 96)) | (1 << (Cobol85PreprocessorParser.NODP - 96)) | (1 << (Cobol85PreprocessorParser.NODTR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (Cobol85PreprocessorParser.NODYN - 128)) | (1 << (Cobol85PreprocessorParser.NODYNAM - 128)) | (1 << (Cobol85PreprocessorParser.NOEDF - 128)) | (1 << (Cobol85PreprocessorParser.NOEJPD - 128)) | (1 << (Cobol85PreprocessorParser.NOEPILOG - 128)) | (1 << (Cobol85PreprocessorParser.NOEXIT - 128)) | (1 << (Cobol85PreprocessorParser.NOEXP - 128)) | (1 << (Cobol85PreprocessorParser.NOEXPORTALL - 128)) | (1 << (Cobol85PreprocessorParser.NOF - 128)) | (1 << (Cobol85PreprocessorParser.NOFASTSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOFEPI - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGMIG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGSTD - 128)) | (1 << (Cobol85PreprocessorParser.NOFSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOGRAPHIC - 128)) | (1 << (Cobol85PreprocessorParser.NOHOOK - 128)) | (1 << (Cobol85PreprocessorParser.NOLENGTH - 128)) | (1 << (Cobol85PreprocessorParser.NOLIB - 128)) | (1 << (Cobol85PreprocessorParser.NOLINKAGE - 128)) | (1 << (Cobol85PreprocessorParser.NOLIST - 128)) | (1 << (Cobol85PreprocessorParser.NOMAP - 128)) | (1 << (Cobol85PreprocessorParser.NOMD - 128)) | (1 << (Cobol85PreprocessorParser.NOMDECK - 128)) | (1 << (Cobol85PreprocessorParser.NONAME - 128)) | (1 << (Cobol85PreprocessorParser.NONUM - 128)) | (1 << (Cobol85PreprocessorParser.NONUMBER - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJ - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJECT - 128)) | (1 << (Cobol85PreprocessorParser.NOOFF - 128)) | (1 << (Cobol85PreprocessorParser.NOOFFSET - 128)) | (1 << (Cobol85PreprocessorParser.NOOPSEQUENCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (Cobol85PreprocessorParser.NOOPT - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIMIZE - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIONS - 160)) | (1 << (Cobol85PreprocessorParser.NOP - 160)) | (1 << (Cobol85PreprocessorParser.NOPFD - 160)) | (1 << (Cobol85PreprocessorParser.NOPROLOG - 160)) | (1 << (Cobol85PreprocessorParser.NORENT - 160)) | (1 << (Cobol85PreprocessorParser.NOS - 160)) | (1 << (Cobol85PreprocessorParser.NOSEP - 160)) | (1 << (Cobol85PreprocessorParser.NOSEPARATE - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQ - 160)) | (1 << (Cobol85PreprocessorParser.NOSOURCE - 160)) | (1 << (Cobol85PreprocessorParser.NOSPIE - 160)) | (1 << (Cobol85PreprocessorParser.NOSQL - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLC - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLCCSID - 160)) | (1 << (Cobol85PreprocessorParser.NOSSR - 160)) | (1 << (Cobol85PreprocessorParser.NOSSRANGE - 160)) | (1 << (Cobol85PreprocessorParser.NOSTDTRUNC - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQUENCE - 160)) | (1 << (Cobol85PreprocessorParser.NOTERM - 160)) | (1 << (Cobol85PreprocessorParser.NOTERMINAL - 160)) | (1 << (Cobol85PreprocessorParser.NOTEST - 160)) | (1 << (Cobol85PreprocessorParser.NOTHREAD - 160)) | (1 << (Cobol85PreprocessorParser.NOTRIG - 160)) | (1 << (Cobol85PreprocessorParser.NOVBREF - 160)) | (1 << (Cobol85PreprocessorParser.NOWORD - 160)) | (1 << (Cobol85PreprocessorParser.NOX - 160)) | (1 << (Cobol85PreprocessorParser.NOXREF - 160)) | (1 << (Cobol85PreprocessorParser.NOZWB - 160)) | (1 << (Cobol85PreprocessorParser.NS - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (Cobol85PreprocessorParser.NSEQ - 192)) | (1 << (Cobol85PreprocessorParser.NSYMBOL - 192)) | (1 << (Cobol85PreprocessorParser.NUM - 192)) | (1 << (Cobol85PreprocessorParser.NUMBER - 192)) | (1 << (Cobol85PreprocessorParser.NUMPROC - 192)) | (1 << (Cobol85PreprocessorParser.OBJ - 192)) | (1 << (Cobol85PreprocessorParser.OBJECT - 192)) | (1 << (Cobol85PreprocessorParser.OF - 192)) | (1 << (Cobol85PreprocessorParser.OFF - 192)) | (1 << (Cobol85PreprocessorParser.OFFSET - 192)) | (1 << (Cobol85PreprocessorParser.ON - 192)) | (1 << (Cobol85PreprocessorParser.OP - 192)) | (1 << (Cobol85PreprocessorParser.OPMARGINS - 192)) | (1 << (Cobol85PreprocessorParser.OPSEQUENCE - 192)) | (1 << (Cobol85PreprocessorParser.OPT - 192)) | (1 << (Cobol85PreprocessorParser.OPTFILE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIMIZE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIONS - 192)) | (1 << (Cobol85PreprocessorParser.OUT - 192)) | (1 << (Cobol85PreprocessorParser.OUTDD - 192)) | (1 << (Cobol85PreprocessorParser.PFD - 192)) | (1 << (Cobol85PreprocessorParser.PPTDBG - 192)) | (1 << (Cobol85PreprocessorParser.PGMN - 192)) | (1 << (Cobol85PreprocessorParser.PGMNAME - 192)) | (1 << (Cobol85PreprocessorParser.PROCESS - 192)) | (1 << (Cobol85PreprocessorParser.PROLOG - 192)) | (1 << (Cobol85PreprocessorParser.QUOTE - 192)) | (1 << (Cobol85PreprocessorParser.RENT - 192)) | (1 << (Cobol85PreprocessorParser.REPLACE - 192)) | (1 << (Cobol85PreprocessorParser.REPLACING - 192)) | (1 << (Cobol85PreprocessorParser.RMODE - 192)) | (1 << (Cobol85PreprocessorParser.RPARENCHAR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (Cobol85PreprocessorParser.SEP - 224)) | (1 << (Cobol85PreprocessorParser.SEPARATE - 224)) | (1 << (Cobol85PreprocessorParser.SEQ - 224)) | (1 << (Cobol85PreprocessorParser.SEQUENCE - 224)) | (1 << (Cobol85PreprocessorParser.SHORT - 224)) | (1 << (Cobol85PreprocessorParser.SIZE - 224)) | (1 << (Cobol85PreprocessorParser.SOURCE - 224)) | (1 << (Cobol85PreprocessorParser.SP - 224)) | (1 << (Cobol85PreprocessorParser.SPACE - 224)) | (1 << (Cobol85PreprocessorParser.SPIE - 224)) | (1 << (Cobol85PreprocessorParser.SQL - 224)) | (1 << (Cobol85PreprocessorParser.SQLC - 224)) | (1 << (Cobol85PreprocessorParser.SQLCCSID - 224)) | (1 << (Cobol85PreprocessorParser.SS - 224)) | (1 << (Cobol85PreprocessorParser.SSR - 224)) | (1 << (Cobol85PreprocessorParser.SSRANGE - 224)) | (1 << (Cobol85PreprocessorParser.STD - 224)) | (1 << (Cobol85PreprocessorParser.SYSEIB - 224)) | (1 << (Cobol85PreprocessorParser.SZ - 224)) | (1 << (Cobol85PreprocessorParser.TERM - 224)) | (1 << (Cobol85PreprocessorParser.TERMINAL - 224)) | (1 << (Cobol85PreprocessorParser.TEST - 224)) | (1 << (Cobol85PreprocessorParser.THREAD - 224)) | (1 << (Cobol85PreprocessorParser.TITLE - 224)) | (1 << (Cobol85PreprocessorParser.TRIG - 224)) | (1 << (Cobol85PreprocessorParser.TRUNC - 224)) | (1 << (Cobol85PreprocessorParser.UE - 224)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (Cobol85PreprocessorParser.UPPER - 256)) | (1 << (Cobol85PreprocessorParser.VBREF - 256)) | (1 << (Cobol85PreprocessorParser.WD - 256)) | (1 << (Cobol85PreprocessorParser.XMLPARSE - 256)) | (1 << (Cobol85PreprocessorParser.XMLSS - 256)) | (1 << (Cobol85PreprocessorParser.XOPTS - 256)) | (1 << (Cobol85PreprocessorParser.XREF - 256)) | (1 << (Cobol85PreprocessorParser.YEARWINDOW - 256)) | (1 << (Cobol85PreprocessorParser.YW - 256)) | (1 << (Cobol85PreprocessorParser.ZWB - 256)) | (1 << (Cobol85PreprocessorParser.C_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.D_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.E_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.F_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.H_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.I_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.M_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.N_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.Q_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.U_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.W_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.X_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.COMMACHAR - 256)) | (1 << (Cobol85PreprocessorParser.DOT - 256)) | (1 << (Cobol85PreprocessorParser.NONNUMERICLITERAL - 256)) | (1 << (Cobol85PreprocessorParser.NUMERICLITERAL - 256)) | (1 << (Cobol85PreprocessorParser.IDENTIFIER - 256)))) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & ((1 << (Cobol85PreprocessorParser.FILENAME - 288)) | (1 << (Cobol85PreprocessorParser.NEWLINE - 288)) | (1 << (Cobol85PreprocessorParser.TEXT - 288)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.charDataLine = function () {
        var _localctx = new CharDataLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, Cobol85PreprocessorParser.RULE_charDataLine);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 663;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Cobol85PreprocessorParser.ADATA:
                                    case Cobol85PreprocessorParser.ADV:
                                    case Cobol85PreprocessorParser.ALIAS:
                                    case Cobol85PreprocessorParser.ANSI:
                                    case Cobol85PreprocessorParser.ANY:
                                    case Cobol85PreprocessorParser.APOST:
                                    case Cobol85PreprocessorParser.AR:
                                    case Cobol85PreprocessorParser.ARITH:
                                    case Cobol85PreprocessorParser.AUTO:
                                    case Cobol85PreprocessorParser.AWO:
                                    case Cobol85PreprocessorParser.BIN:
                                    case Cobol85PreprocessorParser.BLOCK0:
                                    case Cobol85PreprocessorParser.BUF:
                                    case Cobol85PreprocessorParser.BUFSIZE:
                                    case Cobol85PreprocessorParser.BY:
                                    case Cobol85PreprocessorParser.CBL:
                                    case Cobol85PreprocessorParser.CBLCARD:
                                    case Cobol85PreprocessorParser.CO:
                                    case Cobol85PreprocessorParser.COBOL2:
                                    case Cobol85PreprocessorParser.COBOL3:
                                    case Cobol85PreprocessorParser.CODEPAGE:
                                    case Cobol85PreprocessorParser.COMPAT:
                                    case Cobol85PreprocessorParser.COMPILE:
                                    case Cobol85PreprocessorParser.CP:
                                    case Cobol85PreprocessorParser.CPP:
                                    case Cobol85PreprocessorParser.CPSM:
                                    case Cobol85PreprocessorParser.CS:
                                    case Cobol85PreprocessorParser.CURR:
                                    case Cobol85PreprocessorParser.CURRENCY:
                                    case Cobol85PreprocessorParser.DATA:
                                    case Cobol85PreprocessorParser.DATEPROC:
                                    case Cobol85PreprocessorParser.DBCS:
                                    case Cobol85PreprocessorParser.DD:
                                    case Cobol85PreprocessorParser.DEBUG:
                                    case Cobol85PreprocessorParser.DECK:
                                    case Cobol85PreprocessorParser.DIAGTRUNC:
                                    case Cobol85PreprocessorParser.DLI:
                                    case Cobol85PreprocessorParser.DLL:
                                    case Cobol85PreprocessorParser.DP:
                                    case Cobol85PreprocessorParser.DTR:
                                    case Cobol85PreprocessorParser.DU:
                                    case Cobol85PreprocessorParser.DUMP:
                                    case Cobol85PreprocessorParser.DYN:
                                    case Cobol85PreprocessorParser.DYNAM:
                                    case Cobol85PreprocessorParser.EDF:
                                    case Cobol85PreprocessorParser.EJECT:
                                    case Cobol85PreprocessorParser.EJPD:
                                    case Cobol85PreprocessorParser.EN:
                                    case Cobol85PreprocessorParser.ENGLISH:
                                    case Cobol85PreprocessorParser.EPILOG:
                                    case Cobol85PreprocessorParser.EXCI:
                                    case Cobol85PreprocessorParser.EXIT:
                                    case Cobol85PreprocessorParser.EXP:
                                    case Cobol85PreprocessorParser.EXPORTALL:
                                    case Cobol85PreprocessorParser.EXTEND:
                                    case Cobol85PreprocessorParser.FASTSRT:
                                    case Cobol85PreprocessorParser.FLAG:
                                    case Cobol85PreprocessorParser.FLAGSTD:
                                    case Cobol85PreprocessorParser.FSRT:
                                    case Cobol85PreprocessorParser.FULL:
                                    case Cobol85PreprocessorParser.GDS:
                                    case Cobol85PreprocessorParser.GRAPHIC:
                                    case Cobol85PreprocessorParser.HOOK:
                                    case Cobol85PreprocessorParser.IN:
                                    case Cobol85PreprocessorParser.INTDATE:
                                    case Cobol85PreprocessorParser.JA:
                                    case Cobol85PreprocessorParser.JP:
                                    case Cobol85PreprocessorParser.KA:
                                    case Cobol85PreprocessorParser.LANG:
                                    case Cobol85PreprocessorParser.LANGUAGE:
                                    case Cobol85PreprocessorParser.LC:
                                    case Cobol85PreprocessorParser.LENGTH:
                                    case Cobol85PreprocessorParser.LIB:
                                    case Cobol85PreprocessorParser.LILIAN:
                                    case Cobol85PreprocessorParser.LIN:
                                    case Cobol85PreprocessorParser.LINECOUNT:
                                    case Cobol85PreprocessorParser.LINKAGE:
                                    case Cobol85PreprocessorParser.LIST:
                                    case Cobol85PreprocessorParser.LM:
                                    case Cobol85PreprocessorParser.LONGMIXED:
                                    case Cobol85PreprocessorParser.LONGUPPER:
                                    case Cobol85PreprocessorParser.LU:
                                    case Cobol85PreprocessorParser.MAP:
                                    case Cobol85PreprocessorParser.MARGINS:
                                    case Cobol85PreprocessorParser.MAX:
                                    case Cobol85PreprocessorParser.MD:
                                    case Cobol85PreprocessorParser.MDECK:
                                    case Cobol85PreprocessorParser.MIG:
                                    case Cobol85PreprocessorParser.MIXED:
                                    case Cobol85PreprocessorParser.NAME:
                                    case Cobol85PreprocessorParser.NAT:
                                    case Cobol85PreprocessorParser.NATIONAL:
                                    case Cobol85PreprocessorParser.NATLANG:
                                    case Cobol85PreprocessorParser.NN:
                                    case Cobol85PreprocessorParser.NO:
                                    case Cobol85PreprocessorParser.NOADATA:
                                    case Cobol85PreprocessorParser.NOADV:
                                    case Cobol85PreprocessorParser.NOALIAS:
                                    case Cobol85PreprocessorParser.NOAWO:
                                    case Cobol85PreprocessorParser.NOBLOCK0:
                                    case Cobol85PreprocessorParser.NOC:
                                    case Cobol85PreprocessorParser.NOCBLCARD:
                                    case Cobol85PreprocessorParser.NOCICS:
                                    case Cobol85PreprocessorParser.NOCMPR2:
                                    case Cobol85PreprocessorParser.NOCOMPILE:
                                    case Cobol85PreprocessorParser.NOCPSM:
                                    case Cobol85PreprocessorParser.NOCURR:
                                    case Cobol85PreprocessorParser.NOCURRENCY:
                                    case Cobol85PreprocessorParser.NOD:
                                    case Cobol85PreprocessorParser.NODATEPROC:
                                    case Cobol85PreprocessorParser.NODBCS:
                                    case Cobol85PreprocessorParser.NODE:
                                    case Cobol85PreprocessorParser.NODEBUG:
                                    case Cobol85PreprocessorParser.NODECK:
                                    case Cobol85PreprocessorParser.NODIAGTRUNC:
                                    case Cobol85PreprocessorParser.NODLL:
                                    case Cobol85PreprocessorParser.NODU:
                                    case Cobol85PreprocessorParser.NODUMP:
                                    case Cobol85PreprocessorParser.NODP:
                                    case Cobol85PreprocessorParser.NODTR:
                                    case Cobol85PreprocessorParser.NODYN:
                                    case Cobol85PreprocessorParser.NODYNAM:
                                    case Cobol85PreprocessorParser.NOEDF:
                                    case Cobol85PreprocessorParser.NOEJPD:
                                    case Cobol85PreprocessorParser.NOEPILOG:
                                    case Cobol85PreprocessorParser.NOEXIT:
                                    case Cobol85PreprocessorParser.NOEXP:
                                    case Cobol85PreprocessorParser.NOEXPORTALL:
                                    case Cobol85PreprocessorParser.NOF:
                                    case Cobol85PreprocessorParser.NOFASTSRT:
                                    case Cobol85PreprocessorParser.NOFEPI:
                                    case Cobol85PreprocessorParser.NOFLAG:
                                    case Cobol85PreprocessorParser.NOFLAGMIG:
                                    case Cobol85PreprocessorParser.NOFLAGSTD:
                                    case Cobol85PreprocessorParser.NOFSRT:
                                    case Cobol85PreprocessorParser.NOGRAPHIC:
                                    case Cobol85PreprocessorParser.NOHOOK:
                                    case Cobol85PreprocessorParser.NOLENGTH:
                                    case Cobol85PreprocessorParser.NOLIB:
                                    case Cobol85PreprocessorParser.NOLINKAGE:
                                    case Cobol85PreprocessorParser.NOLIST:
                                    case Cobol85PreprocessorParser.NOMAP:
                                    case Cobol85PreprocessorParser.NOMD:
                                    case Cobol85PreprocessorParser.NOMDECK:
                                    case Cobol85PreprocessorParser.NONAME:
                                    case Cobol85PreprocessorParser.NONUM:
                                    case Cobol85PreprocessorParser.NONUMBER:
                                    case Cobol85PreprocessorParser.NOOBJ:
                                    case Cobol85PreprocessorParser.NOOBJECT:
                                    case Cobol85PreprocessorParser.NOOFF:
                                    case Cobol85PreprocessorParser.NOOFFSET:
                                    case Cobol85PreprocessorParser.NOOPSEQUENCE:
                                    case Cobol85PreprocessorParser.NOOPT:
                                    case Cobol85PreprocessorParser.NOOPTIMIZE:
                                    case Cobol85PreprocessorParser.NOOPTIONS:
                                    case Cobol85PreprocessorParser.NOP:
                                    case Cobol85PreprocessorParser.NOPFD:
                                    case Cobol85PreprocessorParser.NOPROLOG:
                                    case Cobol85PreprocessorParser.NORENT:
                                    case Cobol85PreprocessorParser.NOS:
                                    case Cobol85PreprocessorParser.NOSEP:
                                    case Cobol85PreprocessorParser.NOSEPARATE:
                                    case Cobol85PreprocessorParser.NOSEQ:
                                    case Cobol85PreprocessorParser.NOSOURCE:
                                    case Cobol85PreprocessorParser.NOSPIE:
                                    case Cobol85PreprocessorParser.NOSQL:
                                    case Cobol85PreprocessorParser.NOSQLC:
                                    case Cobol85PreprocessorParser.NOSQLCCSID:
                                    case Cobol85PreprocessorParser.NOSSR:
                                    case Cobol85PreprocessorParser.NOSSRANGE:
                                    case Cobol85PreprocessorParser.NOSTDTRUNC:
                                    case Cobol85PreprocessorParser.NOSEQUENCE:
                                    case Cobol85PreprocessorParser.NOTERM:
                                    case Cobol85PreprocessorParser.NOTERMINAL:
                                    case Cobol85PreprocessorParser.NOTEST:
                                    case Cobol85PreprocessorParser.NOTHREAD:
                                    case Cobol85PreprocessorParser.NOTRIG:
                                    case Cobol85PreprocessorParser.NOVBREF:
                                    case Cobol85PreprocessorParser.NOWORD:
                                    case Cobol85PreprocessorParser.NOX:
                                    case Cobol85PreprocessorParser.NOXREF:
                                    case Cobol85PreprocessorParser.NOZWB:
                                    case Cobol85PreprocessorParser.NS:
                                    case Cobol85PreprocessorParser.NSEQ:
                                    case Cobol85PreprocessorParser.NSYMBOL:
                                    case Cobol85PreprocessorParser.NUM:
                                    case Cobol85PreprocessorParser.NUMBER:
                                    case Cobol85PreprocessorParser.NUMPROC:
                                    case Cobol85PreprocessorParser.OBJ:
                                    case Cobol85PreprocessorParser.OBJECT:
                                    case Cobol85PreprocessorParser.OF:
                                    case Cobol85PreprocessorParser.OFF:
                                    case Cobol85PreprocessorParser.OFFSET:
                                    case Cobol85PreprocessorParser.ON:
                                    case Cobol85PreprocessorParser.OP:
                                    case Cobol85PreprocessorParser.OPMARGINS:
                                    case Cobol85PreprocessorParser.OPSEQUENCE:
                                    case Cobol85PreprocessorParser.OPT:
                                    case Cobol85PreprocessorParser.OPTFILE:
                                    case Cobol85PreprocessorParser.OPTIMIZE:
                                    case Cobol85PreprocessorParser.OPTIONS:
                                    case Cobol85PreprocessorParser.OUT:
                                    case Cobol85PreprocessorParser.OUTDD:
                                    case Cobol85PreprocessorParser.PFD:
                                    case Cobol85PreprocessorParser.PPTDBG:
                                    case Cobol85PreprocessorParser.PGMN:
                                    case Cobol85PreprocessorParser.PGMNAME:
                                    case Cobol85PreprocessorParser.PROCESS:
                                    case Cobol85PreprocessorParser.PROLOG:
                                    case Cobol85PreprocessorParser.QUOTE:
                                    case Cobol85PreprocessorParser.RENT:
                                    case Cobol85PreprocessorParser.REPLACING:
                                    case Cobol85PreprocessorParser.RMODE:
                                    case Cobol85PreprocessorParser.SEP:
                                    case Cobol85PreprocessorParser.SEPARATE:
                                    case Cobol85PreprocessorParser.SEQ:
                                    case Cobol85PreprocessorParser.SEQUENCE:
                                    case Cobol85PreprocessorParser.SHORT:
                                    case Cobol85PreprocessorParser.SIZE:
                                    case Cobol85PreprocessorParser.SOURCE:
                                    case Cobol85PreprocessorParser.SP:
                                    case Cobol85PreprocessorParser.SPACE:
                                    case Cobol85PreprocessorParser.SPIE:
                                    case Cobol85PreprocessorParser.SQL:
                                    case Cobol85PreprocessorParser.SQLC:
                                    case Cobol85PreprocessorParser.SQLCCSID:
                                    case Cobol85PreprocessorParser.SS:
                                    case Cobol85PreprocessorParser.SSR:
                                    case Cobol85PreprocessorParser.SSRANGE:
                                    case Cobol85PreprocessorParser.STD:
                                    case Cobol85PreprocessorParser.SYSEIB:
                                    case Cobol85PreprocessorParser.SZ:
                                    case Cobol85PreprocessorParser.TERM:
                                    case Cobol85PreprocessorParser.TERMINAL:
                                    case Cobol85PreprocessorParser.TEST:
                                    case Cobol85PreprocessorParser.THREAD:
                                    case Cobol85PreprocessorParser.TITLE:
                                    case Cobol85PreprocessorParser.TRIG:
                                    case Cobol85PreprocessorParser.TRUNC:
                                    case Cobol85PreprocessorParser.UE:
                                    case Cobol85PreprocessorParser.UPPER:
                                    case Cobol85PreprocessorParser.VBREF:
                                    case Cobol85PreprocessorParser.WD:
                                    case Cobol85PreprocessorParser.XMLPARSE:
                                    case Cobol85PreprocessorParser.XMLSS:
                                    case Cobol85PreprocessorParser.XOPTS:
                                    case Cobol85PreprocessorParser.XREF:
                                    case Cobol85PreprocessorParser.YEARWINDOW:
                                    case Cobol85PreprocessorParser.YW:
                                    case Cobol85PreprocessorParser.ZWB:
                                    case Cobol85PreprocessorParser.C_CHAR:
                                    case Cobol85PreprocessorParser.D_CHAR:
                                    case Cobol85PreprocessorParser.E_CHAR:
                                    case Cobol85PreprocessorParser.F_CHAR:
                                    case Cobol85PreprocessorParser.H_CHAR:
                                    case Cobol85PreprocessorParser.I_CHAR:
                                    case Cobol85PreprocessorParser.M_CHAR:
                                    case Cobol85PreprocessorParser.N_CHAR:
                                    case Cobol85PreprocessorParser.Q_CHAR:
                                    case Cobol85PreprocessorParser.S_CHAR:
                                    case Cobol85PreprocessorParser.U_CHAR:
                                    case Cobol85PreprocessorParser.W_CHAR:
                                    case Cobol85PreprocessorParser.X_CHAR:
                                    case Cobol85PreprocessorParser.COMMACHAR:
                                    case Cobol85PreprocessorParser.IDENTIFIER:
                                        {
                                            this.state = 656;
                                            this.cobolWord();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.NONNUMERICLITERAL:
                                    case Cobol85PreprocessorParser.NUMERICLITERAL:
                                        {
                                            this.state = 657;
                                            this.literal();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.FILENAME:
                                        {
                                            this.state = 658;
                                            this.filename();
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.TEXT:
                                        {
                                            this.state = 659;
                                            this.match(Cobol85PreprocessorParser.TEXT);
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.DOT:
                                        {
                                            this.state = 660;
                                            this.match(Cobol85PreprocessorParser.DOT);
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.LPARENCHAR:
                                        {
                                            this.state = 661;
                                            this.match(Cobol85PreprocessorParser.LPARENCHAR);
                                        }
                                        break;
                                    case Cobol85PreprocessorParser.RPARENCHAR:
                                        {
                                            this.state = 662;
                                            this.match(Cobol85PreprocessorParser.RPARENCHAR);
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
                    this.state = 665;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
    Cobol85PreprocessorParser.prototype.cobolWord = function () {
        var _localctx = new CobolWordContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, Cobol85PreprocessorParser.RULE_cobolWord);
        try {
            this.state = 669;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Cobol85PreprocessorParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 667;
                        this.match(Cobol85PreprocessorParser.IDENTIFIER);
                    }
                    break;
                case Cobol85PreprocessorParser.ADATA:
                case Cobol85PreprocessorParser.ADV:
                case Cobol85PreprocessorParser.ALIAS:
                case Cobol85PreprocessorParser.ANSI:
                case Cobol85PreprocessorParser.ANY:
                case Cobol85PreprocessorParser.APOST:
                case Cobol85PreprocessorParser.AR:
                case Cobol85PreprocessorParser.ARITH:
                case Cobol85PreprocessorParser.AUTO:
                case Cobol85PreprocessorParser.AWO:
                case Cobol85PreprocessorParser.BIN:
                case Cobol85PreprocessorParser.BLOCK0:
                case Cobol85PreprocessorParser.BUF:
                case Cobol85PreprocessorParser.BUFSIZE:
                case Cobol85PreprocessorParser.BY:
                case Cobol85PreprocessorParser.CBL:
                case Cobol85PreprocessorParser.CBLCARD:
                case Cobol85PreprocessorParser.CO:
                case Cobol85PreprocessorParser.COBOL2:
                case Cobol85PreprocessorParser.COBOL3:
                case Cobol85PreprocessorParser.CODEPAGE:
                case Cobol85PreprocessorParser.COMPAT:
                case Cobol85PreprocessorParser.COMPILE:
                case Cobol85PreprocessorParser.CP:
                case Cobol85PreprocessorParser.CPP:
                case Cobol85PreprocessorParser.CPSM:
                case Cobol85PreprocessorParser.CS:
                case Cobol85PreprocessorParser.CURR:
                case Cobol85PreprocessorParser.CURRENCY:
                case Cobol85PreprocessorParser.DATA:
                case Cobol85PreprocessorParser.DATEPROC:
                case Cobol85PreprocessorParser.DBCS:
                case Cobol85PreprocessorParser.DD:
                case Cobol85PreprocessorParser.DEBUG:
                case Cobol85PreprocessorParser.DECK:
                case Cobol85PreprocessorParser.DIAGTRUNC:
                case Cobol85PreprocessorParser.DLI:
                case Cobol85PreprocessorParser.DLL:
                case Cobol85PreprocessorParser.DP:
                case Cobol85PreprocessorParser.DTR:
                case Cobol85PreprocessorParser.DU:
                case Cobol85PreprocessorParser.DUMP:
                case Cobol85PreprocessorParser.DYN:
                case Cobol85PreprocessorParser.DYNAM:
                case Cobol85PreprocessorParser.EDF:
                case Cobol85PreprocessorParser.EJECT:
                case Cobol85PreprocessorParser.EJPD:
                case Cobol85PreprocessorParser.EN:
                case Cobol85PreprocessorParser.ENGLISH:
                case Cobol85PreprocessorParser.EPILOG:
                case Cobol85PreprocessorParser.EXCI:
                case Cobol85PreprocessorParser.EXIT:
                case Cobol85PreprocessorParser.EXP:
                case Cobol85PreprocessorParser.EXPORTALL:
                case Cobol85PreprocessorParser.EXTEND:
                case Cobol85PreprocessorParser.FASTSRT:
                case Cobol85PreprocessorParser.FLAG:
                case Cobol85PreprocessorParser.FLAGSTD:
                case Cobol85PreprocessorParser.FSRT:
                case Cobol85PreprocessorParser.FULL:
                case Cobol85PreprocessorParser.GDS:
                case Cobol85PreprocessorParser.GRAPHIC:
                case Cobol85PreprocessorParser.HOOK:
                case Cobol85PreprocessorParser.IN:
                case Cobol85PreprocessorParser.INTDATE:
                case Cobol85PreprocessorParser.JA:
                case Cobol85PreprocessorParser.JP:
                case Cobol85PreprocessorParser.KA:
                case Cobol85PreprocessorParser.LANG:
                case Cobol85PreprocessorParser.LANGUAGE:
                case Cobol85PreprocessorParser.LC:
                case Cobol85PreprocessorParser.LENGTH:
                case Cobol85PreprocessorParser.LIB:
                case Cobol85PreprocessorParser.LILIAN:
                case Cobol85PreprocessorParser.LIN:
                case Cobol85PreprocessorParser.LINECOUNT:
                case Cobol85PreprocessorParser.LINKAGE:
                case Cobol85PreprocessorParser.LIST:
                case Cobol85PreprocessorParser.LM:
                case Cobol85PreprocessorParser.LONGMIXED:
                case Cobol85PreprocessorParser.LONGUPPER:
                case Cobol85PreprocessorParser.LU:
                case Cobol85PreprocessorParser.MAP:
                case Cobol85PreprocessorParser.MARGINS:
                case Cobol85PreprocessorParser.MAX:
                case Cobol85PreprocessorParser.MD:
                case Cobol85PreprocessorParser.MDECK:
                case Cobol85PreprocessorParser.MIG:
                case Cobol85PreprocessorParser.MIXED:
                case Cobol85PreprocessorParser.NAME:
                case Cobol85PreprocessorParser.NAT:
                case Cobol85PreprocessorParser.NATIONAL:
                case Cobol85PreprocessorParser.NATLANG:
                case Cobol85PreprocessorParser.NN:
                case Cobol85PreprocessorParser.NO:
                case Cobol85PreprocessorParser.NOADATA:
                case Cobol85PreprocessorParser.NOADV:
                case Cobol85PreprocessorParser.NOALIAS:
                case Cobol85PreprocessorParser.NOAWO:
                case Cobol85PreprocessorParser.NOBLOCK0:
                case Cobol85PreprocessorParser.NOC:
                case Cobol85PreprocessorParser.NOCBLCARD:
                case Cobol85PreprocessorParser.NOCICS:
                case Cobol85PreprocessorParser.NOCMPR2:
                case Cobol85PreprocessorParser.NOCOMPILE:
                case Cobol85PreprocessorParser.NOCPSM:
                case Cobol85PreprocessorParser.NOCURR:
                case Cobol85PreprocessorParser.NOCURRENCY:
                case Cobol85PreprocessorParser.NOD:
                case Cobol85PreprocessorParser.NODATEPROC:
                case Cobol85PreprocessorParser.NODBCS:
                case Cobol85PreprocessorParser.NODE:
                case Cobol85PreprocessorParser.NODEBUG:
                case Cobol85PreprocessorParser.NODECK:
                case Cobol85PreprocessorParser.NODIAGTRUNC:
                case Cobol85PreprocessorParser.NODLL:
                case Cobol85PreprocessorParser.NODU:
                case Cobol85PreprocessorParser.NODUMP:
                case Cobol85PreprocessorParser.NODP:
                case Cobol85PreprocessorParser.NODTR:
                case Cobol85PreprocessorParser.NODYN:
                case Cobol85PreprocessorParser.NODYNAM:
                case Cobol85PreprocessorParser.NOEDF:
                case Cobol85PreprocessorParser.NOEJPD:
                case Cobol85PreprocessorParser.NOEPILOG:
                case Cobol85PreprocessorParser.NOEXIT:
                case Cobol85PreprocessorParser.NOEXP:
                case Cobol85PreprocessorParser.NOEXPORTALL:
                case Cobol85PreprocessorParser.NOF:
                case Cobol85PreprocessorParser.NOFASTSRT:
                case Cobol85PreprocessorParser.NOFEPI:
                case Cobol85PreprocessorParser.NOFLAG:
                case Cobol85PreprocessorParser.NOFLAGMIG:
                case Cobol85PreprocessorParser.NOFLAGSTD:
                case Cobol85PreprocessorParser.NOFSRT:
                case Cobol85PreprocessorParser.NOGRAPHIC:
                case Cobol85PreprocessorParser.NOHOOK:
                case Cobol85PreprocessorParser.NOLENGTH:
                case Cobol85PreprocessorParser.NOLIB:
                case Cobol85PreprocessorParser.NOLINKAGE:
                case Cobol85PreprocessorParser.NOLIST:
                case Cobol85PreprocessorParser.NOMAP:
                case Cobol85PreprocessorParser.NOMD:
                case Cobol85PreprocessorParser.NOMDECK:
                case Cobol85PreprocessorParser.NONAME:
                case Cobol85PreprocessorParser.NONUM:
                case Cobol85PreprocessorParser.NONUMBER:
                case Cobol85PreprocessorParser.NOOBJ:
                case Cobol85PreprocessorParser.NOOBJECT:
                case Cobol85PreprocessorParser.NOOFF:
                case Cobol85PreprocessorParser.NOOFFSET:
                case Cobol85PreprocessorParser.NOOPSEQUENCE:
                case Cobol85PreprocessorParser.NOOPT:
                case Cobol85PreprocessorParser.NOOPTIMIZE:
                case Cobol85PreprocessorParser.NOOPTIONS:
                case Cobol85PreprocessorParser.NOP:
                case Cobol85PreprocessorParser.NOPFD:
                case Cobol85PreprocessorParser.NOPROLOG:
                case Cobol85PreprocessorParser.NORENT:
                case Cobol85PreprocessorParser.NOS:
                case Cobol85PreprocessorParser.NOSEP:
                case Cobol85PreprocessorParser.NOSEPARATE:
                case Cobol85PreprocessorParser.NOSEQ:
                case Cobol85PreprocessorParser.NOSOURCE:
                case Cobol85PreprocessorParser.NOSPIE:
                case Cobol85PreprocessorParser.NOSQL:
                case Cobol85PreprocessorParser.NOSQLC:
                case Cobol85PreprocessorParser.NOSQLCCSID:
                case Cobol85PreprocessorParser.NOSSR:
                case Cobol85PreprocessorParser.NOSSRANGE:
                case Cobol85PreprocessorParser.NOSTDTRUNC:
                case Cobol85PreprocessorParser.NOSEQUENCE:
                case Cobol85PreprocessorParser.NOTERM:
                case Cobol85PreprocessorParser.NOTERMINAL:
                case Cobol85PreprocessorParser.NOTEST:
                case Cobol85PreprocessorParser.NOTHREAD:
                case Cobol85PreprocessorParser.NOTRIG:
                case Cobol85PreprocessorParser.NOVBREF:
                case Cobol85PreprocessorParser.NOWORD:
                case Cobol85PreprocessorParser.NOX:
                case Cobol85PreprocessorParser.NOXREF:
                case Cobol85PreprocessorParser.NOZWB:
                case Cobol85PreprocessorParser.NS:
                case Cobol85PreprocessorParser.NSEQ:
                case Cobol85PreprocessorParser.NSYMBOL:
                case Cobol85PreprocessorParser.NUM:
                case Cobol85PreprocessorParser.NUMBER:
                case Cobol85PreprocessorParser.NUMPROC:
                case Cobol85PreprocessorParser.OBJ:
                case Cobol85PreprocessorParser.OBJECT:
                case Cobol85PreprocessorParser.OF:
                case Cobol85PreprocessorParser.OFF:
                case Cobol85PreprocessorParser.OFFSET:
                case Cobol85PreprocessorParser.ON:
                case Cobol85PreprocessorParser.OP:
                case Cobol85PreprocessorParser.OPMARGINS:
                case Cobol85PreprocessorParser.OPSEQUENCE:
                case Cobol85PreprocessorParser.OPT:
                case Cobol85PreprocessorParser.OPTFILE:
                case Cobol85PreprocessorParser.OPTIMIZE:
                case Cobol85PreprocessorParser.OPTIONS:
                case Cobol85PreprocessorParser.OUT:
                case Cobol85PreprocessorParser.OUTDD:
                case Cobol85PreprocessorParser.PFD:
                case Cobol85PreprocessorParser.PPTDBG:
                case Cobol85PreprocessorParser.PGMN:
                case Cobol85PreprocessorParser.PGMNAME:
                case Cobol85PreprocessorParser.PROCESS:
                case Cobol85PreprocessorParser.PROLOG:
                case Cobol85PreprocessorParser.QUOTE:
                case Cobol85PreprocessorParser.RENT:
                case Cobol85PreprocessorParser.REPLACING:
                case Cobol85PreprocessorParser.RMODE:
                case Cobol85PreprocessorParser.SEP:
                case Cobol85PreprocessorParser.SEPARATE:
                case Cobol85PreprocessorParser.SEQ:
                case Cobol85PreprocessorParser.SEQUENCE:
                case Cobol85PreprocessorParser.SHORT:
                case Cobol85PreprocessorParser.SIZE:
                case Cobol85PreprocessorParser.SOURCE:
                case Cobol85PreprocessorParser.SP:
                case Cobol85PreprocessorParser.SPACE:
                case Cobol85PreprocessorParser.SPIE:
                case Cobol85PreprocessorParser.SQL:
                case Cobol85PreprocessorParser.SQLC:
                case Cobol85PreprocessorParser.SQLCCSID:
                case Cobol85PreprocessorParser.SS:
                case Cobol85PreprocessorParser.SSR:
                case Cobol85PreprocessorParser.SSRANGE:
                case Cobol85PreprocessorParser.STD:
                case Cobol85PreprocessorParser.SYSEIB:
                case Cobol85PreprocessorParser.SZ:
                case Cobol85PreprocessorParser.TERM:
                case Cobol85PreprocessorParser.TERMINAL:
                case Cobol85PreprocessorParser.TEST:
                case Cobol85PreprocessorParser.THREAD:
                case Cobol85PreprocessorParser.TITLE:
                case Cobol85PreprocessorParser.TRIG:
                case Cobol85PreprocessorParser.TRUNC:
                case Cobol85PreprocessorParser.UE:
                case Cobol85PreprocessorParser.UPPER:
                case Cobol85PreprocessorParser.VBREF:
                case Cobol85PreprocessorParser.WD:
                case Cobol85PreprocessorParser.XMLPARSE:
                case Cobol85PreprocessorParser.XMLSS:
                case Cobol85PreprocessorParser.XOPTS:
                case Cobol85PreprocessorParser.XREF:
                case Cobol85PreprocessorParser.YEARWINDOW:
                case Cobol85PreprocessorParser.YW:
                case Cobol85PreprocessorParser.ZWB:
                case Cobol85PreprocessorParser.C_CHAR:
                case Cobol85PreprocessorParser.D_CHAR:
                case Cobol85PreprocessorParser.E_CHAR:
                case Cobol85PreprocessorParser.F_CHAR:
                case Cobol85PreprocessorParser.H_CHAR:
                case Cobol85PreprocessorParser.I_CHAR:
                case Cobol85PreprocessorParser.M_CHAR:
                case Cobol85PreprocessorParser.N_CHAR:
                case Cobol85PreprocessorParser.Q_CHAR:
                case Cobol85PreprocessorParser.S_CHAR:
                case Cobol85PreprocessorParser.U_CHAR:
                case Cobol85PreprocessorParser.W_CHAR:
                case Cobol85PreprocessorParser.X_CHAR:
                case Cobol85PreprocessorParser.COMMACHAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 668;
                        this.charDataKeyword();
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
    Cobol85PreprocessorParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, Cobol85PreprocessorParser.RULE_literal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 671;
                _la = this._input.LA(1);
                if (!(_la === Cobol85PreprocessorParser.NONNUMERICLITERAL || _la === Cobol85PreprocessorParser.NUMERICLITERAL)) {
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
    Cobol85PreprocessorParser.prototype.filename = function () {
        var _localctx = new FilenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, Cobol85PreprocessorParser.RULE_filename);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 673;
                this.match(Cobol85PreprocessorParser.FILENAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Cobol85PreprocessorParser.prototype.charDataKeyword = function () {
        var _localctx = new CharDataKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, Cobol85PreprocessorParser.RULE_charDataKeyword);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 675;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Cobol85PreprocessorParser.ADATA) | (1 << Cobol85PreprocessorParser.ADV) | (1 << Cobol85PreprocessorParser.ALIAS) | (1 << Cobol85PreprocessorParser.ANSI) | (1 << Cobol85PreprocessorParser.ANY) | (1 << Cobol85PreprocessorParser.APOST) | (1 << Cobol85PreprocessorParser.AR) | (1 << Cobol85PreprocessorParser.ARITH) | (1 << Cobol85PreprocessorParser.AUTO) | (1 << Cobol85PreprocessorParser.AWO) | (1 << Cobol85PreprocessorParser.BIN) | (1 << Cobol85PreprocessorParser.BLOCK0) | (1 << Cobol85PreprocessorParser.BUF) | (1 << Cobol85PreprocessorParser.BUFSIZE) | (1 << Cobol85PreprocessorParser.BY) | (1 << Cobol85PreprocessorParser.CBL) | (1 << Cobol85PreprocessorParser.CBLCARD) | (1 << Cobol85PreprocessorParser.CO) | (1 << Cobol85PreprocessorParser.COBOL2) | (1 << Cobol85PreprocessorParser.COBOL3) | (1 << Cobol85PreprocessorParser.CODEPAGE) | (1 << Cobol85PreprocessorParser.COMPAT) | (1 << Cobol85PreprocessorParser.COMPILE) | (1 << Cobol85PreprocessorParser.CP) | (1 << Cobol85PreprocessorParser.CPP) | (1 << Cobol85PreprocessorParser.CPSM) | (1 << Cobol85PreprocessorParser.CS) | (1 << Cobol85PreprocessorParser.CURR) | (1 << Cobol85PreprocessorParser.CURRENCY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Cobol85PreprocessorParser.DATA - 32)) | (1 << (Cobol85PreprocessorParser.DATEPROC - 32)) | (1 << (Cobol85PreprocessorParser.DBCS - 32)) | (1 << (Cobol85PreprocessorParser.DD - 32)) | (1 << (Cobol85PreprocessorParser.DEBUG - 32)) | (1 << (Cobol85PreprocessorParser.DECK - 32)) | (1 << (Cobol85PreprocessorParser.DIAGTRUNC - 32)) | (1 << (Cobol85PreprocessorParser.DLI - 32)) | (1 << (Cobol85PreprocessorParser.DLL - 32)) | (1 << (Cobol85PreprocessorParser.DP - 32)) | (1 << (Cobol85PreprocessorParser.DTR - 32)) | (1 << (Cobol85PreprocessorParser.DU - 32)) | (1 << (Cobol85PreprocessorParser.DUMP - 32)) | (1 << (Cobol85PreprocessorParser.DYN - 32)) | (1 << (Cobol85PreprocessorParser.DYNAM - 32)) | (1 << (Cobol85PreprocessorParser.EDF - 32)) | (1 << (Cobol85PreprocessorParser.EJECT - 32)) | (1 << (Cobol85PreprocessorParser.EJPD - 32)) | (1 << (Cobol85PreprocessorParser.EN - 32)) | (1 << (Cobol85PreprocessorParser.ENGLISH - 32)) | (1 << (Cobol85PreprocessorParser.EPILOG - 32)) | (1 << (Cobol85PreprocessorParser.EXCI - 32)) | (1 << (Cobol85PreprocessorParser.EXIT - 32)) | (1 << (Cobol85PreprocessorParser.EXP - 32)) | (1 << (Cobol85PreprocessorParser.EXPORTALL - 32)) | (1 << (Cobol85PreprocessorParser.EXTEND - 32)) | (1 << (Cobol85PreprocessorParser.FASTSRT - 32)) | (1 << (Cobol85PreprocessorParser.FLAG - 32)) | (1 << (Cobol85PreprocessorParser.FLAGSTD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Cobol85PreprocessorParser.FSRT - 64)) | (1 << (Cobol85PreprocessorParser.FULL - 64)) | (1 << (Cobol85PreprocessorParser.GDS - 64)) | (1 << (Cobol85PreprocessorParser.GRAPHIC - 64)) | (1 << (Cobol85PreprocessorParser.HOOK - 64)) | (1 << (Cobol85PreprocessorParser.IN - 64)) | (1 << (Cobol85PreprocessorParser.INTDATE - 64)) | (1 << (Cobol85PreprocessorParser.JA - 64)) | (1 << (Cobol85PreprocessorParser.JP - 64)) | (1 << (Cobol85PreprocessorParser.KA - 64)) | (1 << (Cobol85PreprocessorParser.LANG - 64)) | (1 << (Cobol85PreprocessorParser.LANGUAGE - 64)) | (1 << (Cobol85PreprocessorParser.LC - 64)) | (1 << (Cobol85PreprocessorParser.LENGTH - 64)) | (1 << (Cobol85PreprocessorParser.LIB - 64)) | (1 << (Cobol85PreprocessorParser.LILIAN - 64)) | (1 << (Cobol85PreprocessorParser.LIN - 64)) | (1 << (Cobol85PreprocessorParser.LINECOUNT - 64)) | (1 << (Cobol85PreprocessorParser.LINKAGE - 64)) | (1 << (Cobol85PreprocessorParser.LIST - 64)) | (1 << (Cobol85PreprocessorParser.LM - 64)) | (1 << (Cobol85PreprocessorParser.LONGMIXED - 64)) | (1 << (Cobol85PreprocessorParser.LONGUPPER - 64)) | (1 << (Cobol85PreprocessorParser.LU - 64)) | (1 << (Cobol85PreprocessorParser.MAP - 64)) | (1 << (Cobol85PreprocessorParser.MARGINS - 64)) | (1 << (Cobol85PreprocessorParser.MAX - 64)) | (1 << (Cobol85PreprocessorParser.MD - 64)) | (1 << (Cobol85PreprocessorParser.MDECK - 64)) | (1 << (Cobol85PreprocessorParser.MIG - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (Cobol85PreprocessorParser.MIXED - 96)) | (1 << (Cobol85PreprocessorParser.NAME - 96)) | (1 << (Cobol85PreprocessorParser.NAT - 96)) | (1 << (Cobol85PreprocessorParser.NATIONAL - 96)) | (1 << (Cobol85PreprocessorParser.NATLANG - 96)) | (1 << (Cobol85PreprocessorParser.NN - 96)) | (1 << (Cobol85PreprocessorParser.NO - 96)) | (1 << (Cobol85PreprocessorParser.NOADATA - 96)) | (1 << (Cobol85PreprocessorParser.NOADV - 96)) | (1 << (Cobol85PreprocessorParser.NOALIAS - 96)) | (1 << (Cobol85PreprocessorParser.NOAWO - 96)) | (1 << (Cobol85PreprocessorParser.NOBLOCK0 - 96)) | (1 << (Cobol85PreprocessorParser.NOC - 96)) | (1 << (Cobol85PreprocessorParser.NOCBLCARD - 96)) | (1 << (Cobol85PreprocessorParser.NOCICS - 96)) | (1 << (Cobol85PreprocessorParser.NOCMPR2 - 96)) | (1 << (Cobol85PreprocessorParser.NOCOMPILE - 96)) | (1 << (Cobol85PreprocessorParser.NOCPSM - 96)) | (1 << (Cobol85PreprocessorParser.NOCURR - 96)) | (1 << (Cobol85PreprocessorParser.NOCURRENCY - 96)) | (1 << (Cobol85PreprocessorParser.NOD - 96)) | (1 << (Cobol85PreprocessorParser.NODATEPROC - 96)) | (1 << (Cobol85PreprocessorParser.NODBCS - 96)) | (1 << (Cobol85PreprocessorParser.NODE - 96)) | (1 << (Cobol85PreprocessorParser.NODEBUG - 96)) | (1 << (Cobol85PreprocessorParser.NODECK - 96)) | (1 << (Cobol85PreprocessorParser.NODIAGTRUNC - 96)) | (1 << (Cobol85PreprocessorParser.NODLL - 96)) | (1 << (Cobol85PreprocessorParser.NODU - 96)) | (1 << (Cobol85PreprocessorParser.NODUMP - 96)) | (1 << (Cobol85PreprocessorParser.NODP - 96)) | (1 << (Cobol85PreprocessorParser.NODTR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (Cobol85PreprocessorParser.NODYN - 128)) | (1 << (Cobol85PreprocessorParser.NODYNAM - 128)) | (1 << (Cobol85PreprocessorParser.NOEDF - 128)) | (1 << (Cobol85PreprocessorParser.NOEJPD - 128)) | (1 << (Cobol85PreprocessorParser.NOEPILOG - 128)) | (1 << (Cobol85PreprocessorParser.NOEXIT - 128)) | (1 << (Cobol85PreprocessorParser.NOEXP - 128)) | (1 << (Cobol85PreprocessorParser.NOEXPORTALL - 128)) | (1 << (Cobol85PreprocessorParser.NOF - 128)) | (1 << (Cobol85PreprocessorParser.NOFASTSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOFEPI - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGMIG - 128)) | (1 << (Cobol85PreprocessorParser.NOFLAGSTD - 128)) | (1 << (Cobol85PreprocessorParser.NOFSRT - 128)) | (1 << (Cobol85PreprocessorParser.NOGRAPHIC - 128)) | (1 << (Cobol85PreprocessorParser.NOHOOK - 128)) | (1 << (Cobol85PreprocessorParser.NOLENGTH - 128)) | (1 << (Cobol85PreprocessorParser.NOLIB - 128)) | (1 << (Cobol85PreprocessorParser.NOLINKAGE - 128)) | (1 << (Cobol85PreprocessorParser.NOLIST - 128)) | (1 << (Cobol85PreprocessorParser.NOMAP - 128)) | (1 << (Cobol85PreprocessorParser.NOMD - 128)) | (1 << (Cobol85PreprocessorParser.NOMDECK - 128)) | (1 << (Cobol85PreprocessorParser.NONAME - 128)) | (1 << (Cobol85PreprocessorParser.NONUM - 128)) | (1 << (Cobol85PreprocessorParser.NONUMBER - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJ - 128)) | (1 << (Cobol85PreprocessorParser.NOOBJECT - 128)) | (1 << (Cobol85PreprocessorParser.NOOFF - 128)) | (1 << (Cobol85PreprocessorParser.NOOFFSET - 128)) | (1 << (Cobol85PreprocessorParser.NOOPSEQUENCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (Cobol85PreprocessorParser.NOOPT - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIMIZE - 160)) | (1 << (Cobol85PreprocessorParser.NOOPTIONS - 160)) | (1 << (Cobol85PreprocessorParser.NOP - 160)) | (1 << (Cobol85PreprocessorParser.NOPFD - 160)) | (1 << (Cobol85PreprocessorParser.NOPROLOG - 160)) | (1 << (Cobol85PreprocessorParser.NORENT - 160)) | (1 << (Cobol85PreprocessorParser.NOS - 160)) | (1 << (Cobol85PreprocessorParser.NOSEP - 160)) | (1 << (Cobol85PreprocessorParser.NOSEPARATE - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQ - 160)) | (1 << (Cobol85PreprocessorParser.NOSOURCE - 160)) | (1 << (Cobol85PreprocessorParser.NOSPIE - 160)) | (1 << (Cobol85PreprocessorParser.NOSQL - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLC - 160)) | (1 << (Cobol85PreprocessorParser.NOSQLCCSID - 160)) | (1 << (Cobol85PreprocessorParser.NOSSR - 160)) | (1 << (Cobol85PreprocessorParser.NOSSRANGE - 160)) | (1 << (Cobol85PreprocessorParser.NOSTDTRUNC - 160)) | (1 << (Cobol85PreprocessorParser.NOSEQUENCE - 160)) | (1 << (Cobol85PreprocessorParser.NOTERM - 160)) | (1 << (Cobol85PreprocessorParser.NOTERMINAL - 160)) | (1 << (Cobol85PreprocessorParser.NOTEST - 160)) | (1 << (Cobol85PreprocessorParser.NOTHREAD - 160)) | (1 << (Cobol85PreprocessorParser.NOTRIG - 160)) | (1 << (Cobol85PreprocessorParser.NOVBREF - 160)) | (1 << (Cobol85PreprocessorParser.NOWORD - 160)) | (1 << (Cobol85PreprocessorParser.NOX - 160)) | (1 << (Cobol85PreprocessorParser.NOXREF - 160)) | (1 << (Cobol85PreprocessorParser.NOZWB - 160)) | (1 << (Cobol85PreprocessorParser.NS - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (Cobol85PreprocessorParser.NSEQ - 192)) | (1 << (Cobol85PreprocessorParser.NSYMBOL - 192)) | (1 << (Cobol85PreprocessorParser.NUM - 192)) | (1 << (Cobol85PreprocessorParser.NUMBER - 192)) | (1 << (Cobol85PreprocessorParser.NUMPROC - 192)) | (1 << (Cobol85PreprocessorParser.OBJ - 192)) | (1 << (Cobol85PreprocessorParser.OBJECT - 192)) | (1 << (Cobol85PreprocessorParser.OF - 192)) | (1 << (Cobol85PreprocessorParser.OFF - 192)) | (1 << (Cobol85PreprocessorParser.OFFSET - 192)) | (1 << (Cobol85PreprocessorParser.ON - 192)) | (1 << (Cobol85PreprocessorParser.OP - 192)) | (1 << (Cobol85PreprocessorParser.OPMARGINS - 192)) | (1 << (Cobol85PreprocessorParser.OPSEQUENCE - 192)) | (1 << (Cobol85PreprocessorParser.OPT - 192)) | (1 << (Cobol85PreprocessorParser.OPTFILE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIMIZE - 192)) | (1 << (Cobol85PreprocessorParser.OPTIONS - 192)) | (1 << (Cobol85PreprocessorParser.OUT - 192)) | (1 << (Cobol85PreprocessorParser.OUTDD - 192)) | (1 << (Cobol85PreprocessorParser.PFD - 192)) | (1 << (Cobol85PreprocessorParser.PPTDBG - 192)) | (1 << (Cobol85PreprocessorParser.PGMN - 192)) | (1 << (Cobol85PreprocessorParser.PGMNAME - 192)) | (1 << (Cobol85PreprocessorParser.PROCESS - 192)) | (1 << (Cobol85PreprocessorParser.PROLOG - 192)) | (1 << (Cobol85PreprocessorParser.QUOTE - 192)) | (1 << (Cobol85PreprocessorParser.RENT - 192)) | (1 << (Cobol85PreprocessorParser.REPLACING - 192)) | (1 << (Cobol85PreprocessorParser.RMODE - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (Cobol85PreprocessorParser.SEP - 224)) | (1 << (Cobol85PreprocessorParser.SEPARATE - 224)) | (1 << (Cobol85PreprocessorParser.SEQ - 224)) | (1 << (Cobol85PreprocessorParser.SEQUENCE - 224)) | (1 << (Cobol85PreprocessorParser.SHORT - 224)) | (1 << (Cobol85PreprocessorParser.SIZE - 224)) | (1 << (Cobol85PreprocessorParser.SOURCE - 224)) | (1 << (Cobol85PreprocessorParser.SP - 224)) | (1 << (Cobol85PreprocessorParser.SPACE - 224)) | (1 << (Cobol85PreprocessorParser.SPIE - 224)) | (1 << (Cobol85PreprocessorParser.SQL - 224)) | (1 << (Cobol85PreprocessorParser.SQLC - 224)) | (1 << (Cobol85PreprocessorParser.SQLCCSID - 224)) | (1 << (Cobol85PreprocessorParser.SS - 224)) | (1 << (Cobol85PreprocessorParser.SSR - 224)) | (1 << (Cobol85PreprocessorParser.SSRANGE - 224)) | (1 << (Cobol85PreprocessorParser.STD - 224)) | (1 << (Cobol85PreprocessorParser.SYSEIB - 224)) | (1 << (Cobol85PreprocessorParser.SZ - 224)) | (1 << (Cobol85PreprocessorParser.TERM - 224)) | (1 << (Cobol85PreprocessorParser.TERMINAL - 224)) | (1 << (Cobol85PreprocessorParser.TEST - 224)) | (1 << (Cobol85PreprocessorParser.THREAD - 224)) | (1 << (Cobol85PreprocessorParser.TITLE - 224)) | (1 << (Cobol85PreprocessorParser.TRIG - 224)) | (1 << (Cobol85PreprocessorParser.TRUNC - 224)) | (1 << (Cobol85PreprocessorParser.UE - 224)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (Cobol85PreprocessorParser.UPPER - 256)) | (1 << (Cobol85PreprocessorParser.VBREF - 256)) | (1 << (Cobol85PreprocessorParser.WD - 256)) | (1 << (Cobol85PreprocessorParser.XMLPARSE - 256)) | (1 << (Cobol85PreprocessorParser.XMLSS - 256)) | (1 << (Cobol85PreprocessorParser.XOPTS - 256)) | (1 << (Cobol85PreprocessorParser.XREF - 256)) | (1 << (Cobol85PreprocessorParser.YEARWINDOW - 256)) | (1 << (Cobol85PreprocessorParser.YW - 256)) | (1 << (Cobol85PreprocessorParser.ZWB - 256)) | (1 << (Cobol85PreprocessorParser.C_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.D_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.E_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.F_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.H_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.I_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.M_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.N_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.Q_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.S_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.U_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.W_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.X_CHAR - 256)) | (1 << (Cobol85PreprocessorParser.COMMACHAR - 256)))) !== 0))) {
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
    Object.defineProperty(Cobol85PreprocessorParser, "_ATN", {
        get: function () {
            if (!Cobol85PreprocessorParser.__ATN) {
                Cobol85PreprocessorParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(Cobol85PreprocessorParser._serializedATN));
            }
            return Cobol85PreprocessorParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    Cobol85PreprocessorParser.ADATA = 1;
    Cobol85PreprocessorParser.ADV = 2;
    Cobol85PreprocessorParser.ALIAS = 3;
    Cobol85PreprocessorParser.ANSI = 4;
    Cobol85PreprocessorParser.ANY = 5;
    Cobol85PreprocessorParser.APOST = 6;
    Cobol85PreprocessorParser.AR = 7;
    Cobol85PreprocessorParser.ARITH = 8;
    Cobol85PreprocessorParser.AUTO = 9;
    Cobol85PreprocessorParser.AWO = 10;
    Cobol85PreprocessorParser.BIN = 11;
    Cobol85PreprocessorParser.BLOCK0 = 12;
    Cobol85PreprocessorParser.BUF = 13;
    Cobol85PreprocessorParser.BUFSIZE = 14;
    Cobol85PreprocessorParser.BY = 15;
    Cobol85PreprocessorParser.CBL = 16;
    Cobol85PreprocessorParser.CBLCARD = 17;
    Cobol85PreprocessorParser.CICS = 18;
    Cobol85PreprocessorParser.CO = 19;
    Cobol85PreprocessorParser.COBOL2 = 20;
    Cobol85PreprocessorParser.COBOL3 = 21;
    Cobol85PreprocessorParser.CODEPAGE = 22;
    Cobol85PreprocessorParser.COMPAT = 23;
    Cobol85PreprocessorParser.COMPILE = 24;
    Cobol85PreprocessorParser.COPY = 25;
    Cobol85PreprocessorParser.CP = 26;
    Cobol85PreprocessorParser.CPP = 27;
    Cobol85PreprocessorParser.CPSM = 28;
    Cobol85PreprocessorParser.CS = 29;
    Cobol85PreprocessorParser.CURR = 30;
    Cobol85PreprocessorParser.CURRENCY = 31;
    Cobol85PreprocessorParser.DATA = 32;
    Cobol85PreprocessorParser.DATEPROC = 33;
    Cobol85PreprocessorParser.DBCS = 34;
    Cobol85PreprocessorParser.DD = 35;
    Cobol85PreprocessorParser.DEBUG = 36;
    Cobol85PreprocessorParser.DECK = 37;
    Cobol85PreprocessorParser.DIAGTRUNC = 38;
    Cobol85PreprocessorParser.DLI = 39;
    Cobol85PreprocessorParser.DLL = 40;
    Cobol85PreprocessorParser.DP = 41;
    Cobol85PreprocessorParser.DTR = 42;
    Cobol85PreprocessorParser.DU = 43;
    Cobol85PreprocessorParser.DUMP = 44;
    Cobol85PreprocessorParser.DYN = 45;
    Cobol85PreprocessorParser.DYNAM = 46;
    Cobol85PreprocessorParser.EDF = 47;
    Cobol85PreprocessorParser.EJECT = 48;
    Cobol85PreprocessorParser.EJPD = 49;
    Cobol85PreprocessorParser.EN = 50;
    Cobol85PreprocessorParser.ENGLISH = 51;
    Cobol85PreprocessorParser.END_EXEC = 52;
    Cobol85PreprocessorParser.EPILOG = 53;
    Cobol85PreprocessorParser.EXCI = 54;
    Cobol85PreprocessorParser.EXEC = 55;
    Cobol85PreprocessorParser.EXIT = 56;
    Cobol85PreprocessorParser.EXP = 57;
    Cobol85PreprocessorParser.EXPORTALL = 58;
    Cobol85PreprocessorParser.EXTEND = 59;
    Cobol85PreprocessorParser.FASTSRT = 60;
    Cobol85PreprocessorParser.FEPI = 61;
    Cobol85PreprocessorParser.FLAG = 62;
    Cobol85PreprocessorParser.FLAGSTD = 63;
    Cobol85PreprocessorParser.FSRT = 64;
    Cobol85PreprocessorParser.FULL = 65;
    Cobol85PreprocessorParser.GDS = 66;
    Cobol85PreprocessorParser.GRAPHIC = 67;
    Cobol85PreprocessorParser.HOOK = 68;
    Cobol85PreprocessorParser.IN = 69;
    Cobol85PreprocessorParser.INTDATE = 70;
    Cobol85PreprocessorParser.JA = 71;
    Cobol85PreprocessorParser.JP = 72;
    Cobol85PreprocessorParser.KA = 73;
    Cobol85PreprocessorParser.LANG = 74;
    Cobol85PreprocessorParser.LANGUAGE = 75;
    Cobol85PreprocessorParser.LC = 76;
    Cobol85PreprocessorParser.LEASM = 77;
    Cobol85PreprocessorParser.LENGTH = 78;
    Cobol85PreprocessorParser.LIB = 79;
    Cobol85PreprocessorParser.LILIAN = 80;
    Cobol85PreprocessorParser.LIN = 81;
    Cobol85PreprocessorParser.LINECOUNT = 82;
    Cobol85PreprocessorParser.LINKAGE = 83;
    Cobol85PreprocessorParser.LIST = 84;
    Cobol85PreprocessorParser.LM = 85;
    Cobol85PreprocessorParser.LONGMIXED = 86;
    Cobol85PreprocessorParser.LONGUPPER = 87;
    Cobol85PreprocessorParser.LPARENCHAR = 88;
    Cobol85PreprocessorParser.LU = 89;
    Cobol85PreprocessorParser.MAP = 90;
    Cobol85PreprocessorParser.MARGINS = 91;
    Cobol85PreprocessorParser.MAX = 92;
    Cobol85PreprocessorParser.MD = 93;
    Cobol85PreprocessorParser.MDECK = 94;
    Cobol85PreprocessorParser.MIG = 95;
    Cobol85PreprocessorParser.MIXED = 96;
    Cobol85PreprocessorParser.NAME = 97;
    Cobol85PreprocessorParser.NAT = 98;
    Cobol85PreprocessorParser.NATIONAL = 99;
    Cobol85PreprocessorParser.NATLANG = 100;
    Cobol85PreprocessorParser.NN = 101;
    Cobol85PreprocessorParser.NO = 102;
    Cobol85PreprocessorParser.NOADATA = 103;
    Cobol85PreprocessorParser.NOADV = 104;
    Cobol85PreprocessorParser.NOALIAS = 105;
    Cobol85PreprocessorParser.NOAWO = 106;
    Cobol85PreprocessorParser.NOBLOCK0 = 107;
    Cobol85PreprocessorParser.NOC = 108;
    Cobol85PreprocessorParser.NOCBLCARD = 109;
    Cobol85PreprocessorParser.NOCICS = 110;
    Cobol85PreprocessorParser.NOCMPR2 = 111;
    Cobol85PreprocessorParser.NOCOMPILE = 112;
    Cobol85PreprocessorParser.NOCPSM = 113;
    Cobol85PreprocessorParser.NOCURR = 114;
    Cobol85PreprocessorParser.NOCURRENCY = 115;
    Cobol85PreprocessorParser.NOD = 116;
    Cobol85PreprocessorParser.NODATEPROC = 117;
    Cobol85PreprocessorParser.NODBCS = 118;
    Cobol85PreprocessorParser.NODE = 119;
    Cobol85PreprocessorParser.NODEBUG = 120;
    Cobol85PreprocessorParser.NODECK = 121;
    Cobol85PreprocessorParser.NODIAGTRUNC = 122;
    Cobol85PreprocessorParser.NODLL = 123;
    Cobol85PreprocessorParser.NODU = 124;
    Cobol85PreprocessorParser.NODUMP = 125;
    Cobol85PreprocessorParser.NODP = 126;
    Cobol85PreprocessorParser.NODTR = 127;
    Cobol85PreprocessorParser.NODYN = 128;
    Cobol85PreprocessorParser.NODYNAM = 129;
    Cobol85PreprocessorParser.NOEDF = 130;
    Cobol85PreprocessorParser.NOEJPD = 131;
    Cobol85PreprocessorParser.NOEPILOG = 132;
    Cobol85PreprocessorParser.NOEXIT = 133;
    Cobol85PreprocessorParser.NOEXP = 134;
    Cobol85PreprocessorParser.NOEXPORTALL = 135;
    Cobol85PreprocessorParser.NOF = 136;
    Cobol85PreprocessorParser.NOFASTSRT = 137;
    Cobol85PreprocessorParser.NOFEPI = 138;
    Cobol85PreprocessorParser.NOFLAG = 139;
    Cobol85PreprocessorParser.NOFLAGMIG = 140;
    Cobol85PreprocessorParser.NOFLAGSTD = 141;
    Cobol85PreprocessorParser.NOFSRT = 142;
    Cobol85PreprocessorParser.NOGRAPHIC = 143;
    Cobol85PreprocessorParser.NOHOOK = 144;
    Cobol85PreprocessorParser.NOLENGTH = 145;
    Cobol85PreprocessorParser.NOLIB = 146;
    Cobol85PreprocessorParser.NOLINKAGE = 147;
    Cobol85PreprocessorParser.NOLIST = 148;
    Cobol85PreprocessorParser.NOMAP = 149;
    Cobol85PreprocessorParser.NOMD = 150;
    Cobol85PreprocessorParser.NOMDECK = 151;
    Cobol85PreprocessorParser.NONAME = 152;
    Cobol85PreprocessorParser.NONUM = 153;
    Cobol85PreprocessorParser.NONUMBER = 154;
    Cobol85PreprocessorParser.NOOBJ = 155;
    Cobol85PreprocessorParser.NOOBJECT = 156;
    Cobol85PreprocessorParser.NOOFF = 157;
    Cobol85PreprocessorParser.NOOFFSET = 158;
    Cobol85PreprocessorParser.NOOPSEQUENCE = 159;
    Cobol85PreprocessorParser.NOOPT = 160;
    Cobol85PreprocessorParser.NOOPTIMIZE = 161;
    Cobol85PreprocessorParser.NOOPTIONS = 162;
    Cobol85PreprocessorParser.NOP = 163;
    Cobol85PreprocessorParser.NOPFD = 164;
    Cobol85PreprocessorParser.NOPROLOG = 165;
    Cobol85PreprocessorParser.NORENT = 166;
    Cobol85PreprocessorParser.NOS = 167;
    Cobol85PreprocessorParser.NOSEP = 168;
    Cobol85PreprocessorParser.NOSEPARATE = 169;
    Cobol85PreprocessorParser.NOSEQ = 170;
    Cobol85PreprocessorParser.NOSOURCE = 171;
    Cobol85PreprocessorParser.NOSPIE = 172;
    Cobol85PreprocessorParser.NOSQL = 173;
    Cobol85PreprocessorParser.NOSQLC = 174;
    Cobol85PreprocessorParser.NOSQLCCSID = 175;
    Cobol85PreprocessorParser.NOSSR = 176;
    Cobol85PreprocessorParser.NOSSRANGE = 177;
    Cobol85PreprocessorParser.NOSTDTRUNC = 178;
    Cobol85PreprocessorParser.NOSEQUENCE = 179;
    Cobol85PreprocessorParser.NOTERM = 180;
    Cobol85PreprocessorParser.NOTERMINAL = 181;
    Cobol85PreprocessorParser.NOTEST = 182;
    Cobol85PreprocessorParser.NOTHREAD = 183;
    Cobol85PreprocessorParser.NOTRIG = 184;
    Cobol85PreprocessorParser.NOVBREF = 185;
    Cobol85PreprocessorParser.NOWD = 186;
    Cobol85PreprocessorParser.NOWORD = 187;
    Cobol85PreprocessorParser.NOX = 188;
    Cobol85PreprocessorParser.NOXREF = 189;
    Cobol85PreprocessorParser.NOZWB = 190;
    Cobol85PreprocessorParser.NS = 191;
    Cobol85PreprocessorParser.NSEQ = 192;
    Cobol85PreprocessorParser.NSYMBOL = 193;
    Cobol85PreprocessorParser.NUM = 194;
    Cobol85PreprocessorParser.NUMBER = 195;
    Cobol85PreprocessorParser.NUMPROC = 196;
    Cobol85PreprocessorParser.OBJ = 197;
    Cobol85PreprocessorParser.OBJECT = 198;
    Cobol85PreprocessorParser.OF = 199;
    Cobol85PreprocessorParser.OFF = 200;
    Cobol85PreprocessorParser.OFFSET = 201;
    Cobol85PreprocessorParser.ON = 202;
    Cobol85PreprocessorParser.OP = 203;
    Cobol85PreprocessorParser.OPMARGINS = 204;
    Cobol85PreprocessorParser.OPSEQUENCE = 205;
    Cobol85PreprocessorParser.OPT = 206;
    Cobol85PreprocessorParser.OPTFILE = 207;
    Cobol85PreprocessorParser.OPTIMIZE = 208;
    Cobol85PreprocessorParser.OPTIONS = 209;
    Cobol85PreprocessorParser.OUT = 210;
    Cobol85PreprocessorParser.OUTDD = 211;
    Cobol85PreprocessorParser.PFD = 212;
    Cobol85PreprocessorParser.PPTDBG = 213;
    Cobol85PreprocessorParser.PGMN = 214;
    Cobol85PreprocessorParser.PGMNAME = 215;
    Cobol85PreprocessorParser.PROCESS = 216;
    Cobol85PreprocessorParser.PROLOG = 217;
    Cobol85PreprocessorParser.QUOTE = 218;
    Cobol85PreprocessorParser.RENT = 219;
    Cobol85PreprocessorParser.REPLACE = 220;
    Cobol85PreprocessorParser.REPLACING = 221;
    Cobol85PreprocessorParser.RMODE = 222;
    Cobol85PreprocessorParser.RPARENCHAR = 223;
    Cobol85PreprocessorParser.SEP = 224;
    Cobol85PreprocessorParser.SEPARATE = 225;
    Cobol85PreprocessorParser.SEQ = 226;
    Cobol85PreprocessorParser.SEQUENCE = 227;
    Cobol85PreprocessorParser.SHORT = 228;
    Cobol85PreprocessorParser.SIZE = 229;
    Cobol85PreprocessorParser.SOURCE = 230;
    Cobol85PreprocessorParser.SP = 231;
    Cobol85PreprocessorParser.SPACE = 232;
    Cobol85PreprocessorParser.SPIE = 233;
    Cobol85PreprocessorParser.SQL = 234;
    Cobol85PreprocessorParser.SQLC = 235;
    Cobol85PreprocessorParser.SQLCCSID = 236;
    Cobol85PreprocessorParser.SQLIMS = 237;
    Cobol85PreprocessorParser.SKIP1 = 238;
    Cobol85PreprocessorParser.SKIP2 = 239;
    Cobol85PreprocessorParser.SKIP3 = 240;
    Cobol85PreprocessorParser.SS = 241;
    Cobol85PreprocessorParser.SSR = 242;
    Cobol85PreprocessorParser.SSRANGE = 243;
    Cobol85PreprocessorParser.STD = 244;
    Cobol85PreprocessorParser.SUPPRESS = 245;
    Cobol85PreprocessorParser.SYSEIB = 246;
    Cobol85PreprocessorParser.SZ = 247;
    Cobol85PreprocessorParser.TERM = 248;
    Cobol85PreprocessorParser.TERMINAL = 249;
    Cobol85PreprocessorParser.TEST = 250;
    Cobol85PreprocessorParser.THREAD = 251;
    Cobol85PreprocessorParser.TITLE = 252;
    Cobol85PreprocessorParser.TRIG = 253;
    Cobol85PreprocessorParser.TRUNC = 254;
    Cobol85PreprocessorParser.UE = 255;
    Cobol85PreprocessorParser.UPPER = 256;
    Cobol85PreprocessorParser.VBREF = 257;
    Cobol85PreprocessorParser.WD = 258;
    Cobol85PreprocessorParser.WORD = 259;
    Cobol85PreprocessorParser.XMLPARSE = 260;
    Cobol85PreprocessorParser.XMLSS = 261;
    Cobol85PreprocessorParser.XOPTS = 262;
    Cobol85PreprocessorParser.XP = 263;
    Cobol85PreprocessorParser.XREF = 264;
    Cobol85PreprocessorParser.YEARWINDOW = 265;
    Cobol85PreprocessorParser.YW = 266;
    Cobol85PreprocessorParser.ZWB = 267;
    Cobol85PreprocessorParser.C_CHAR = 268;
    Cobol85PreprocessorParser.D_CHAR = 269;
    Cobol85PreprocessorParser.E_CHAR = 270;
    Cobol85PreprocessorParser.F_CHAR = 271;
    Cobol85PreprocessorParser.H_CHAR = 272;
    Cobol85PreprocessorParser.I_CHAR = 273;
    Cobol85PreprocessorParser.M_CHAR = 274;
    Cobol85PreprocessorParser.N_CHAR = 275;
    Cobol85PreprocessorParser.Q_CHAR = 276;
    Cobol85PreprocessorParser.S_CHAR = 277;
    Cobol85PreprocessorParser.U_CHAR = 278;
    Cobol85PreprocessorParser.W_CHAR = 279;
    Cobol85PreprocessorParser.X_CHAR = 280;
    Cobol85PreprocessorParser.COMMENTTAG = 281;
    Cobol85PreprocessorParser.COMMACHAR = 282;
    Cobol85PreprocessorParser.DOT = 283;
    Cobol85PreprocessorParser.DOUBLEEQUALCHAR = 284;
    Cobol85PreprocessorParser.NONNUMERICLITERAL = 285;
    Cobol85PreprocessorParser.NUMERICLITERAL = 286;
    Cobol85PreprocessorParser.IDENTIFIER = 287;
    Cobol85PreprocessorParser.FILENAME = 288;
    Cobol85PreprocessorParser.NEWLINE = 289;
    Cobol85PreprocessorParser.COMMENTLINE = 290;
    Cobol85PreprocessorParser.WS = 291;
    Cobol85PreprocessorParser.TEXT = 292;
    Cobol85PreprocessorParser.RULE_startRule = 0;
    Cobol85PreprocessorParser.RULE_compilerOptions = 1;
    Cobol85PreprocessorParser.RULE_compilerXOpts = 2;
    Cobol85PreprocessorParser.RULE_compilerOption = 3;
    Cobol85PreprocessorParser.RULE_execCicsStatement = 4;
    Cobol85PreprocessorParser.RULE_execSqlStatement = 5;
    Cobol85PreprocessorParser.RULE_execSqlImsStatement = 6;
    Cobol85PreprocessorParser.RULE_copyStatement = 7;
    Cobol85PreprocessorParser.RULE_copySource = 8;
    Cobol85PreprocessorParser.RULE_copyLibrary = 9;
    Cobol85PreprocessorParser.RULE_replacingPhrase = 10;
    Cobol85PreprocessorParser.RULE_replaceArea = 11;
    Cobol85PreprocessorParser.RULE_replaceByStatement = 12;
    Cobol85PreprocessorParser.RULE_replaceOffStatement = 13;
    Cobol85PreprocessorParser.RULE_replaceClause = 14;
    Cobol85PreprocessorParser.RULE_directoryPhrase = 15;
    Cobol85PreprocessorParser.RULE_familyPhrase = 16;
    Cobol85PreprocessorParser.RULE_replaceable = 17;
    Cobol85PreprocessorParser.RULE_replacement = 18;
    Cobol85PreprocessorParser.RULE_ejectStatement = 19;
    Cobol85PreprocessorParser.RULE_skipStatement = 20;
    Cobol85PreprocessorParser.RULE_titleStatement = 21;
    Cobol85PreprocessorParser.RULE_pseudoText = 22;
    Cobol85PreprocessorParser.RULE_charData = 23;
    Cobol85PreprocessorParser.RULE_charDataSql = 24;
    Cobol85PreprocessorParser.RULE_charDataLine = 25;
    Cobol85PreprocessorParser.RULE_cobolWord = 26;
    Cobol85PreprocessorParser.RULE_literal = 27;
    Cobol85PreprocessorParser.RULE_filename = 28;
    Cobol85PreprocessorParser.RULE_charDataKeyword = 29;
    // tslint:disable:no-trailing-whitespace
    Cobol85PreprocessorParser.ruleNames = [
        "startRule", "compilerOptions", "compilerXOpts", "compilerOption", "execCicsStatement",
        "execSqlStatement", "execSqlImsStatement", "copyStatement", "copySource",
        "copyLibrary", "replacingPhrase", "replaceArea", "replaceByStatement",
        "replaceOffStatement", "replaceClause", "directoryPhrase", "familyPhrase",
        "replaceable", "replacement", "ejectStatement", "skipStatement", "titleStatement",
        "pseudoText", "charData", "charDataSql", "charDataLine", "cobolWord",
        "literal", "filename", "charDataKeyword",
    ];
    Cobol85PreprocessorParser._LITERAL_NAMES = [
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
        undefined, undefined, undefined, undefined, "'('", undefined, undefined,
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
        undefined, undefined, undefined, undefined, undefined, undefined, "')'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'*>'", "','", "'.'", "'=='",
    ];
    Cobol85PreprocessorParser._SYMBOLIC_NAMES = [
        undefined, "ADATA", "ADV", "ALIAS", "ANSI", "ANY", "APOST", "AR", "ARITH",
        "AUTO", "AWO", "BIN", "BLOCK0", "BUF", "BUFSIZE", "BY", "CBL", "CBLCARD",
        "CICS", "CO", "COBOL2", "COBOL3", "CODEPAGE", "COMPAT", "COMPILE", "COPY",
        "CP", "CPP", "CPSM", "CS", "CURR", "CURRENCY", "DATA", "DATEPROC", "DBCS",
        "DD", "DEBUG", "DECK", "DIAGTRUNC", "DLI", "DLL", "DP", "DTR", "DU", "DUMP",
        "DYN", "DYNAM", "EDF", "EJECT", "EJPD", "EN", "ENGLISH", "END_EXEC", "EPILOG",
        "EXCI", "EXEC", "EXIT", "EXP", "EXPORTALL", "EXTEND", "FASTSRT", "FEPI",
        "FLAG", "FLAGSTD", "FSRT", "FULL", "GDS", "GRAPHIC", "HOOK", "IN", "INTDATE",
        "JA", "JP", "KA", "LANG", "LANGUAGE", "LC", "LEASM", "LENGTH", "LIB",
        "LILIAN", "LIN", "LINECOUNT", "LINKAGE", "LIST", "LM", "LONGMIXED", "LONGUPPER",
        "LPARENCHAR", "LU", "MAP", "MARGINS", "MAX", "MD", "MDECK", "MIG", "MIXED",
        "NAME", "NAT", "NATIONAL", "NATLANG", "NN", "NO", "NOADATA", "NOADV",
        "NOALIAS", "NOAWO", "NOBLOCK0", "NOC", "NOCBLCARD", "NOCICS", "NOCMPR2",
        "NOCOMPILE", "NOCPSM", "NOCURR", "NOCURRENCY", "NOD", "NODATEPROC", "NODBCS",
        "NODE", "NODEBUG", "NODECK", "NODIAGTRUNC", "NODLL", "NODU", "NODUMP",
        "NODP", "NODTR", "NODYN", "NODYNAM", "NOEDF", "NOEJPD", "NOEPILOG", "NOEXIT",
        "NOEXP", "NOEXPORTALL", "NOF", "NOFASTSRT", "NOFEPI", "NOFLAG", "NOFLAGMIG",
        "NOFLAGSTD", "NOFSRT", "NOGRAPHIC", "NOHOOK", "NOLENGTH", "NOLIB", "NOLINKAGE",
        "NOLIST", "NOMAP", "NOMD", "NOMDECK", "NONAME", "NONUM", "NONUMBER", "NOOBJ",
        "NOOBJECT", "NOOFF", "NOOFFSET", "NOOPSEQUENCE", "NOOPT", "NOOPTIMIZE",
        "NOOPTIONS", "NOP", "NOPFD", "NOPROLOG", "NORENT", "NOS", "NOSEP", "NOSEPARATE",
        "NOSEQ", "NOSOURCE", "NOSPIE", "NOSQL", "NOSQLC", "NOSQLCCSID", "NOSSR",
        "NOSSRANGE", "NOSTDTRUNC", "NOSEQUENCE", "NOTERM", "NOTERMINAL", "NOTEST",
        "NOTHREAD", "NOTRIG", "NOVBREF", "NOWD", "NOWORD", "NOX", "NOXREF", "NOZWB",
        "NS", "NSEQ", "NSYMBOL", "NUM", "NUMBER", "NUMPROC", "OBJ", "OBJECT",
        "OF", "OFF", "OFFSET", "ON", "OP", "OPMARGINS", "OPSEQUENCE", "OPT", "OPTFILE",
        "OPTIMIZE", "OPTIONS", "OUT", "OUTDD", "PFD", "PPTDBG", "PGMN", "PGMNAME",
        "PROCESS", "PROLOG", "QUOTE", "RENT", "REPLACE", "REPLACING", "RMODE",
        "RPARENCHAR", "SEP", "SEPARATE", "SEQ", "SEQUENCE", "SHORT", "SIZE", "SOURCE",
        "SP", "SPACE", "SPIE", "SQL", "SQLC", "SQLCCSID", "SQLIMS", "SKIP1", "SKIP2",
        "SKIP3", "SS", "SSR", "SSRANGE", "STD", "SUPPRESS", "SYSEIB", "SZ", "TERM",
        "TERMINAL", "TEST", "THREAD", "TITLE", "TRIG", "TRUNC", "UE", "UPPER",
        "VBREF", "WD", "WORD", "XMLPARSE", "XMLSS", "XOPTS", "XP", "XREF", "YEARWINDOW",
        "YW", "ZWB", "C_CHAR", "D_CHAR", "E_CHAR", "F_CHAR", "H_CHAR", "I_CHAR",
        "M_CHAR", "N_CHAR", "Q_CHAR", "S_CHAR", "U_CHAR", "W_CHAR", "X_CHAR",
        "COMMENTTAG", "COMMACHAR", "DOT", "DOUBLEEQUALCHAR", "NONNUMERICLITERAL",
        "NUMERICLITERAL", "IDENTIFIER", "FILENAME", "NEWLINE", "COMMENTLINE",
        "WS", "TEXT",
    ];
    Cobol85PreprocessorParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(Cobol85PreprocessorParser._LITERAL_NAMES, Cobol85PreprocessorParser._SYMBOLIC_NAMES, []);
    Cobol85PreprocessorParser._serializedATNSegments = 2;
    Cobol85PreprocessorParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0126\u02A8\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07" +
        "\x02K\n\x02\f\x02\x0E\x02N\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03" +
        "T\n\x03\x03\x03\x03\x03\x06\x03X\n\x03\r\x03\x0E\x03Y\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x05\x04`\n\x04\x03\x04\x07\x04c\n\x04\f\x04\x0E\x04f" +
        "\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05~\n\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x05\x05\x97\n\x05\x03\x05\x05\x05\x9A\n\x05\x03" +
        "\x05\x05\x05\x9D\n\x05\x03\x05\x05\x05\xA0\n\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xB4\n\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xBC\n\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x05\x05\xDC\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x05\x05\xE4\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "\xEA\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xFB" +
        "\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x05\x05\u0144\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0153\n\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x05\x05\u0169\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0173\n\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x05\x05\u0179\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
        "\x05\u0189\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x05\x05\u0192\n\x05\x03\x05\x05\x05\u0195\n\x05\x03\x05\x05\x05\u0198" +
        "\n\x05\x03\x05\x05\x05\u019B\n\x05\x03\x05\x05\x05\u019E\n\x05\x03\x05" +
        "\x05\x05\u01A1\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x05\x05\u01B5\n\x05\x03\x05\x05\x05\u01B8\n\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u01C0\n\x05\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01C7\n\x06\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x05\x07\u01CE\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
        "\x05\b\u01D5\n\b\x03\t\x03\t\x03\t\x07\t\u01DA\n\t\f\t\x0E\t\u01DD\v\t" +
        "\x03\t\x03\t\x03\t\x03\t\x05\t\u01E3\n\t\x07\t\u01E5\n\t\f\t\x0E\t\u01E8" +
        "\v\t\x03\t\x07\t\u01EB\n\t\f\t\x0E\t\u01EE\v\t\x03\t\x03\t\x03\n\x03\n" +
        "\x03\n\x05\n\u01F5\n\n\x03\n\x03\n\x05\n\u01F9\n\n\x03\v\x03\v\x05\v\u01FD" +
        "\n\v\x03\f\x03\f\x07\f\u0201\n\f\f\f\x0E\f\u0204\v\f\x03\f\x03\f\x06\f" +
        "\u0208\n\f\r\f\x0E\f\u0209\x03\f\x07\f\u020D\n\f\f\f\x0E\f\u0210\v\f\x03" +
        "\r\x03\r\x03\r\x07\r\u0215\n\r\f\r\x0E\r\u0218\v\r\x03\r\x05\r\u021B\n" +
        "\r\x03\x0E\x03\x0E\x07\x0E\u021F\n\x0E\f\x0E\x0E\x0E\u0222\v\x0E\x03\x0E" +
        "\x06\x0E\u0225\n\x0E\r\x0E\x0E\x0E\u0226\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x10\x03\x10\x07\x10\u0231\n\x10\f\x10\x0E\x10\u0234" +
        "\v\x10\x03\x10\x03\x10\x07\x10\u0238\n\x10\f\x10\x0E\x10\u023B\v\x10\x03" +
        "\x10\x03\x10\x07\x10\u023F\n\x10\f\x10\x0E\x10\u0242\v\x10\x03\x10\x05" +
        "\x10\u0245\n\x10\x03\x10\x07\x10\u0248\n\x10\f\x10\x0E\x10\u024B\v\x10" +
        "\x03\x10\x05\x10\u024E\n\x10\x03\x11\x03\x11\x07\x11\u0252\n\x11\f\x11" +
        "\x0E\x11\u0255\v\x11\x03\x11\x03\x11\x05\x11\u0259\n\x11\x03\x12\x03\x12" +
        "\x07\x12\u025D\n\x12\f\x12\x0E\x12\u0260\v\x12\x03\x12\x03\x12\x05\x12" +
        "\u0264\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u026A\n\x13\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x05\x14\u0270\n\x14\x03\x15\x03\x15\x05\x15\u0274" +
        "\n\x15\x03\x16\x03\x16\x05\x16\u0278\n\x16\x03\x17\x03\x17\x03\x17\x05" +
        "\x17\u027D\n\x17\x03\x18\x03\x18\x05\x18\u0281\n\x18\x03\x18\x03\x18\x03" +
        "\x19\x03\x19\x06\x19\u0287\n\x19\r\x19\x0E\x19\u0288\x03\x1A\x03\x1A\x03" +
        "\x1A\x03\x1A\x06\x1A\u028F\n\x1A\r\x1A\x0E\x1A\u0290\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x06\x1B\u029A\n\x1B\r\x1B\x0E\x1B" +
        "\u029B\x03\x1C\x03\x1C\x05\x1C\u02A0\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
        "\x1E\x03\x1F\x03\x1F\x03\x1F\x02\x02\x02 \x02\x02\x04\x02\x06\x02\b\x02" +
        "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
        "\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
        "\x028\x02:\x02<\x02\x02U\x04\x02\x12\x12\xDA\xDA\x03\x02\t\n\x06\x02\x19" +
        "\x19==\u010E\u010E\u0110\u0110\x03\x02\x0F\x10\x04\x02\x18\x18\x1C\x1C" +
        "\x04\x02\x1A\x1A\u010E\u010E\x03\x02 !\x04\x02##++\x04\x02@@\x8D\x8D\x04" +
        "\x02\xBA\xBA\xFF\xFF\x04\x02\'\'\u010F\u010F\x04\x02((,,\x03\x02-.\x03" +
        "\x02/0\x03\x02;<\x04\x02>>BB\x04\x02@@\u0111\u0111\x05\x02\u0110\u0110" +
        "\u0113\u0113\u0117\u0119\x03\x02\u0112\u0114\b\x02%%gg\xF3\xF3\u010F\u010F" +
        "\u0115\u0115\u0117\u0117\x04\x02\x06\x06RR\x03\x02LM\x06\x02\x1F\x1F4" +
        "5IK\u0101\u0101\x04\x02NNTT\x03\x02_`\x06\x02\x1A\x1Annrr\u010E\u010E" +
        "\x04\x02\x05\x05kk\x05\x02\x1F\x1F44KK\x04\x02nnrr\x05\x02\u0110\u0110" +
        "\u0117\u0117\u0119\u0119\x03\x02tu\x04\x02ww\x80\x80\x04\x02vv{{\x03\x02" +
        "~\x7F\x04\x02||\x81\x81\x03\x02\x82\x83\x03\x02\x88\x89\x04\x02\x8B\x8B" +
        "\x90\x90\x04\x02\x8A\x8A\x8D\x8D\x03\x02\x98\x99\x03\x02\x9B\x9C\x03\x02" +
        "\x9D\x9E\x03\x02\x9F\xA0\x03\x02\xA2\xA3\x04\x02\xAC\xAC\xB5\xB5\x04\x02" +
        "\xA9\xA9\xAD\xAD\x03\x02\xB0\xB1\x03\x02\xB2\xB3\x03\x02\xB6\xB7\x03\x02" +
        "\xBC\xBD\x04\x02\xC1\xC1\xC3\xC3\x04\x02$$de\x03\x02\xBE\xBF\x03\x02\xC4" +
        "\xC5\x05\x02aa\xA6\xA6\xD6\xD6\x03\x02\xC7\xC8\x03\x02\xCA\xCB\x04\x02" +
        "\xD0\xD0\xD2\xD2\x04\x02CC\xF6\xF6\x03\x02\xD4\xD5\x03\x02\xD8\xD9\n\x02" +
        "\x15\x15\x19\x19WY[[bb\u0102\u0102\u0114\u0114\u0118\u0118\x04\x02\xDC" +
        "\xDC\u0116\u0116\x03\x02\xE4\xE5\x04\x02\xE7\xE7\xF9\xF9\x04\x02\xE8\xE8" +
        "\u0117\u0117\x03\x02\xED\xEE\x03\x02\xF4\xF5\x03\x02\xFA\xFB\x04\x02F" +
        "F\x92\x92\x04\x02\xAA\xAB\xE2\xE3\x04\x0233\x85\x85\x05\x02\r\r\xD0\xD0" +
        "\xF6\xF6\x03\x02\u0104\u0105\x04\x02\u0106\u0106\u0109\u0109\x06\x02\x19" +
        "\x19\u0107\u0107\u010E\u010E\u011A\u011A\x04\x02\u010A\u010A\u011A\u011A" +
        "\x04\x02CC\xE6\xE6\x03\x02\u010B\u010C\x04\x02GG\xC9\xC9\x03\x02\xF0\xF2" +
        "\x03\x02\u011F\u0120\x12\x02\x03\x13\x15\x1A\x1C578:>@NPY[\xBB\xBD\xDD" +
        "\xDF\xE0\xE2\xEE\xF3\xF6\xF8\u0104\u0106\u0108\u010A\u011A\u011C\u011C" +
        "\x02\u037D\x02L\x03\x02\x02\x02\x04Q\x03\x02\x02\x02\x06[\x03\x02\x02" +
        "\x02\b\u01BF\x03\x02\x02\x02\n\u01C1\x03\x02\x02\x02\f\u01C8\x03\x02\x02" +
        "\x02\x0E\u01CF\x03\x02\x02\x02\x10\u01D6\x03\x02\x02\x02\x12\u01F4\x03" +
        "\x02\x02\x02\x14\u01FC\x03\x02\x02\x02\x16\u01FE\x03\x02\x02\x02\x18\u0211" +
        "\x03\x02\x02\x02\x1A\u021C\x03\x02\x02\x02\x1C\u022A\x03\x02\x02\x02\x1E" +
        "\u022E\x03\x02\x02\x02 \u024F\x03\x02\x02\x02\"\u025A\x03\x02\x02\x02" +
        "$\u0269\x03\x02\x02\x02&\u026F\x03\x02\x02\x02(\u0271\x03\x02\x02\x02" +
        "*\u0275\x03\x02\x02\x02,\u0279\x03\x02\x02\x02.\u027E\x03\x02\x02\x02" +
        "0\u0286\x03\x02\x02\x022\u028E\x03\x02\x02\x024\u0299\x03\x02\x02\x02" +
        "6\u029F\x03\x02\x02\x028\u02A1\x03\x02\x02\x02:\u02A3\x03\x02\x02\x02" +
        "<\u02A5\x03\x02\x02\x02>K\x05\x04\x03\x02?K\x05\x10\t\x02@K\x05\n\x06" +
        "\x02AK\x05\f\x07\x02BK\x05\x0E\b\x02CK\x05\x1C\x0F\x02DK\x05\x18\r\x02" +
        "EK\x05(\x15\x02FK\x05*\x16\x02GK\x05,\x17\x02HK\x054\x1B\x02IK\x07\u0123" +
        "\x02\x02J>\x03\x02\x02\x02J?\x03\x02\x02\x02J@\x03\x02\x02\x02JA\x03\x02" +
        "\x02\x02JB\x03\x02\x02\x02JC\x03\x02\x02\x02JD\x03\x02\x02\x02JE\x03\x02" +
        "\x02\x02JF\x03\x02\x02\x02JG\x03\x02\x02\x02JH\x03\x02\x02\x02JI\x03\x02" +
        "\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02" +
        "\x02\x02NL\x03\x02\x02\x02OP\x07\x02\x02\x03P\x03\x03\x02\x02\x02QW\t" +
        "\x02\x02\x02RT\x07\u011C\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02T" +
        "U\x03\x02\x02\x02UX\x05\b\x05\x02VX\x05\x06\x04\x02WS\x03\x02\x02\x02" +
        "WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
        "Z\x05\x03\x02\x02\x02[\\\x07\u0108\x02\x02\\]\x07Z\x02\x02]d\x05\b\x05" +
        "\x02^`\x07\u011C\x02\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02" +
        "\x02\x02ac\x05\b\x05\x02b_\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02" +
        "\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x07\xE1" +
        "\x02\x02h\x07\x03\x02\x02\x02i\u01C0\x07\x03\x02\x02j\u01C0\x07\x04\x02" +
        "\x02k\u01C0\x07\b\x02\x02lm\t\x03\x02\x02mn\x07Z\x02\x02no\t\x04\x02\x02" +
        "o\u01C0\x07\xE1\x02\x02p\u01C0\x07\f\x02\x02q\u01C0\x07\x0E\x02\x02rs" +
        "\t\x05\x02\x02st\x07Z\x02\x02tu\x058\x1D\x02uv\x07\xE1\x02\x02v\u01C0" +
        "\x03\x02\x02\x02w\u01C0\x07\x13\x02\x02x}\x07\x14\x02\x02yz\x07Z\x02\x02" +
        "z{\x058\x1D\x02{|\x07\xE1\x02\x02|~\x03\x02\x02\x02}y\x03\x02\x02\x02" +
        "}~\x03\x02\x02\x02~\u01C0\x03\x02\x02\x02\x7F\u01C0\x07\x16\x02\x02\x80" +
        "\u01C0\x07\x17\x02\x02\x81\x82\t\x06\x02\x02\x82\x83\x07Z\x02\x02\x83" +
        "\x84\x058\x1D\x02\x84\x85\x07\xE1\x02\x02\x85\u01C0\x03\x02\x02\x02\x86" +
        "\u01C0\t\x07\x02\x02\x87\u01C0\x07\x1D\x02\x02\x88\u01C0\x07\x1E\x02\x02" +
        "\x89\x8A\t\b\x02\x02\x8A\x8B\x07Z\x02\x02\x8B\x8C\x058\x1D\x02\x8C\x8D" +
        "\x07\xE1\x02\x02\x8D\u01C0\x03\x02\x02\x02\x8E\x8F\x07\"\x02\x02\x8F\x90" +
        "\x07Z\x02\x02\x90\x91\x058\x1D\x02\x91\x92\x07\xE1\x02\x02\x92\u01C0\x03" +
        "\x02\x02\x02\x93\x9F\t\t\x02\x02\x94\x96\x07Z\x02\x02\x95\x97\t\n\x02" +
        "\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02" +
        "\x02\x98\x9A\x07\u011C\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02" +
        "\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x9D\t\v\x02\x02\x9C\x9B\x03\x02\x02" +
        "\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x07\xE1\x02" +
        "\x02\x9F\x94\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\u01C0\x03\x02" +
        "\x02\x02\xA1\u01C0\x07$\x02\x02\xA2\u01C0\t\f\x02\x02\xA3\u01C0\x07&\x02" +
        "\x02\xA4\u01C0\t\r\x02\x02\xA5\u01C0\x07*\x02\x02\xA6\u01C0\t\x0E\x02" +
        "\x02\xA7\u01C0\t\x0F\x02\x02\xA8\u01C0\x071\x02\x02\xA9\u01C0\x077\x02" +
        "\x02\xAA\u01C0\x07:\x02\x02\xAB\u01C0\t\x10\x02\x02\xAC\u01C0\t\x11\x02" +
        "\x02\xAD\u01C0\x07?\x02\x02\xAE\xAF\t\x12\x02\x02\xAF\xB0\x07Z\x02\x02" +
        "\xB0\xB3\t\x13\x02\x02\xB1\xB2\x07\u011C\x02\x02\xB2\xB4\t\x13\x02\x02" +
        "\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02" +
        "\xB5\u01C0\x07\xE1\x02\x02\xB6\xB7\x07A\x02\x02\xB7\xB8\x07Z\x02\x02\xB8" +
        "\xBB\t\x14\x02\x02\xB9\xBA\x07\u011C\x02\x02\xBA\xBC\t\x15\x02\x02\xBB" +
        "\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD" +
        "\u01C0\x07\xE1\x02\x02\xBE\u01C0\x07D\x02\x02\xBF\u01C0\x07E\x02\x02\xC0" +
        "\xC1\x07H\x02\x02\xC1\xC2\x07Z\x02\x02\xC2\xC3\t\x16\x02\x02\xC3\u01C0" +
        "\x07\xE1\x02\x02\xC4\xC5\t\x17\x02\x02\xC5\xC6\x07Z\x02\x02\xC6\xC7\t" +
        "\x18\x02\x02\xC7\u01C0\x07\xE1\x02\x02\xC8\u01C0\x07O\x02\x02\xC9\u01C0" +
        "\x07P\x02\x02\xCA\u01C0\x07Q\x02\x02\xCB\u01C0\x07S\x02\x02\xCC\xCD\t" +
        "\x19\x02\x02\xCD\xCE\x07Z\x02\x02\xCE\xCF\x058\x1D\x02\xCF\xD0\x07\xE1" +
        "\x02\x02\xD0\u01C0\x03\x02\x02\x02\xD1\u01C0\x07U\x02\x02\xD2\u01C0\x07" +
        "V\x02\x02\xD3\u01C0\x07\\\x02\x02\xD4\xD5\x07]\x02\x02\xD5\xD6\x07Z\x02" +
        "\x02\xD6\xD7\x058\x1D\x02\xD7\xD8\x07\u011C\x02\x02\xD8\xDB\x058\x1D\x02" +
        "\xD9\xDA\x07\u011C\x02\x02\xDA\xDC\x058\x1D\x02\xDB\xD9\x03\x02\x02\x02" +
        "\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x07\xE1\x02\x02" +
        "\xDE\u01C0\x03\x02\x02\x02\xDF\xE3\t\x1A\x02\x02\xE0\xE1\x07Z\x02\x02" +
        "\xE1\xE2\t\x1B\x02\x02\xE2\xE4\x07\xE1\x02\x02\xE3\xE0\x03\x02\x02\x02" +
        "\xE3\xE4\x03\x02\x02\x02\xE4\u01C0\x03\x02\x02\x02\xE5\xE9\x07c\x02\x02" +
        "\xE6\xE7\x07Z\x02\x02\xE7\xE8\t\x1C\x02\x02\xE8\xEA\x07\xE1\x02\x02\xE9" +
        "\xE6\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\u01C0\x03\x02\x02\x02" +
        "\xEB\xEC\x07f\x02\x02\xEC\xED\x07Z\x02\x02\xED\xEE\t\x1D\x02\x02\xEE\u01C0" +
        "\x07\xE1\x02\x02\xEF\u01C0\x07i\x02\x02\xF0\u01C0\x07j\x02\x02\xF1\u01C0" +
        "\x07l\x02\x02\xF2\u01C0\x07m\x02\x02\xF3\u01C0\x07o\x02\x02\xF4\u01C0" +
        "\x07p\x02\x02\xF5\u01C0\x07q\x02\x02\xF6\xFA\t\x1E\x02\x02\xF7\xF8\x07" +
        "Z\x02\x02\xF8\xF9\t\x1F\x02\x02\xF9\xFB\x07\xE1\x02\x02\xFA\xF7\x03\x02" +
        "\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\u01C0\x03\x02\x02\x02\xFC\u01C0\x07" +
        "s\x02\x02\xFD\u01C0\t \x02\x02\xFE\u01C0\t!\x02\x02\xFF\u01C0\x07x\x02" +
        "\x02\u0100\u01C0\x07z\x02\x02\u0101\u01C0\t\"\x02\x02\u0102\u01C0\x07" +
        "}\x02\x02\u0103\u01C0\x07y\x02\x02\u0104\u01C0\t#\x02\x02\u0105\u01C0" +
        "\t$\x02\x02\u0106\u01C0\t%\x02\x02\u0107\u01C0\x07\x84\x02\x02\u0108\u01C0" +
        "\x07\x86\x02\x02\u0109\u01C0\x07\x87\x02\x02\u010A\u01C0\t&\x02\x02\u010B" +
        "\u01C0\t\'\x02\x02\u010C\u01C0\x07\x8C\x02\x02\u010D\u01C0\t(\x02\x02" +
        "\u010E\u01C0\x07\x8E\x02\x02\u010F\u01C0\x07\x8F\x02\x02\u0110\u01C0\x07" +
        "\x91\x02\x02\u0111\u01C0\x07\x93\x02\x02\u0112\u01C0\x07\x94\x02\x02\u0113" +
        "\u01C0\x07\x95\x02\x02\u0114\u01C0\x07\x96\x02\x02\u0115\u01C0\x07\x97" +
        "\x02\x02\u0116\u01C0\t)\x02\x02\u0117\u01C0\x07\x9A\x02\x02\u0118\u01C0" +
        "\t*\x02\x02\u0119\u01C0\t+\x02\x02\u011A\u01C0\t,\x02\x02\u011B\u01C0" +
        "\x07\xA1\x02\x02\u011C\u01C0\t-\x02\x02\u011D\u01C0\x07\xA4\x02\x02\u011E" +
        "\u01C0\x07\xA5\x02\x02\u011F\u01C0\x07\xA7\x02\x02\u0120\u01C0\x07\xA8" +
        "\x02\x02\u0121\u01C0\t.\x02\x02\u0122\u01C0\t/\x02\x02\u0123\u01C0\x07" +
        "\xAE\x02\x02\u0124\u01C0\x07\xAF\x02\x02\u0125\u01C0\t0\x02\x02\u0126" +
        "\u01C0\t1\x02\x02\u0127\u01C0\x07\xB4\x02\x02\u0128\u01C0\t2\x02\x02\u0129" +
        "\u01C0\x07\xB8\x02\x02\u012A\u01C0\x07\xB9\x02\x02\u012B\u01C0\x07\xBB" +
        "\x02\x02\u012C\u01C0\t3\x02\x02\u012D\u01C0\x07\xC2\x02\x02\u012E\u012F" +
        "\t4\x02\x02\u012F\u0130\x07Z\x02\x02\u0130\u0131\t5\x02\x02\u0131\u01C0" +
        "\x07\xE1\x02\x02\u0132\u01C0\x07\xBB\x02\x02\u0133\u01C0\t6\x02\x02\u0134" +
        "\u01C0\x07\xC0\x02\x02\u0135\u01C0\t7\x02\x02\u0136\u0137\x07\xC6\x02" +
        "\x02\u0137\u0138\x07Z\x02\x02\u0138\u0139\t8\x02\x02\u0139\u01C0\x07\xE1" +
        "\x02\x02\u013A\u01C0\t9\x02\x02\u013B\u01C0\t:\x02\x02\u013C\u013D\x07" +
        "\xCE\x02\x02\u013D\u013E\x07Z\x02\x02\u013E\u013F\x058\x1D\x02\u013F\u0140" +
        "\x07\u011C\x02\x02\u0140\u0143\x058\x1D\x02\u0141\u0142\x07\u011C\x02" +
        "\x02\u0142\u0144\x058\x1D\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144" +
        "\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x07\xE1\x02\x02" +
        "\u0146\u01C0\x03\x02\x02\x02\u0147\u0148\x07\xCF\x02\x02\u0148\u0149\x07" +
        "Z\x02\x02\u0149\u014A\x058\x1D\x02\u014A\u014B\x07\u011C\x02\x02\u014B" +
        "\u014C\x058\x1D\x02\u014C\u014D\x07\xE1\x02\x02\u014D\u01C0\x03\x02\x02" +
        "\x02\u014E\u0152\t;\x02\x02\u014F\u0150\x07Z\x02\x02\u0150\u0151\t<\x02" +
        "\x02\u0151\u0153\x07\xE1\x02\x02\u0152\u014F\x03\x02\x02\x02\u0152\u0153" +
        "\x03\x02\x02\x02\u0153\u01C0\x03\x02\x02\x02\u0154\u01C0\x07\xD1\x02\x02" +
        "\u0155\u01C0\x07\xD3\x02\x02\u0156\u01C0\x07\xCD\x02\x02\u0157\u0158\t" +
        "=\x02\x02\u0158\u0159\x07Z\x02\x02\u0159\u015A\x056\x1C\x02\u015A\u015B" +
        "\x07\xE1\x02\x02\u015B\u01C0\x03\x02\x02\x02\u015C\u015D\t>\x02\x02\u015D" +
        "\u015E\x07Z\x02\x02\u015E\u015F\t?\x02\x02\u015F\u01C0\x07\xE1\x02\x02" +
        "\u0160\u01C0\x07\xDB\x02\x02\u0161\u01C0\t@\x02\x02\u0162\u01C0\x07\xDD" +
        "\x02\x02\u0163\u0164\x07\xE0\x02\x02\u0164\u0168\x07Z\x02\x02\u0165\u0169" +
        "\x07\x07\x02\x02\u0166\u0169\x07\v\x02\x02\u0167\u0169\x058\x1D\x02\u0168" +
        "\u0165\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0167\x03\x02" +
        "\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u01C0\x07\xE1\x02\x02\u016B" +
        "\u0172\tA\x02\x02\u016C\u016D\x07Z\x02\x02\u016D\u016E\x058\x1D\x02\u016E" +
        "\u016F\x07\u011C\x02\x02\u016F\u0170\x058\x1D\x02\u0170\u0171\x07\xE1" +
        "\x02\x02\u0171\u0173\x03\x02\x02\x02\u0172\u016C\x03\x02\x02\x02\u0172" +
        "\u0173\x03\x02\x02\x02\u0173\u01C0\x03\x02\x02\x02\u0174\u0175\tB\x02" +
        "\x02\u0175\u0178\x07Z\x02\x02\u0176\u0179\x07^\x02\x02\u0177\u0179\x05" +
        "8\x1D\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179" +
        "\u017A\x03\x02\x02\x02\u017A\u01C0\x07\xE1\x02\x02\u017B\u01C0\tC\x02" +
        "\x02\u017C\u01C0\x07\xE9\x02\x02\u017D\u017E\x07\xEA\x02\x02\u017E\u017F" +
        "\x07Z\x02\x02\u017F\u0180\x058\x1D\x02\u0180\u0181\x07\xE1\x02\x02\u0181" +
        "\u01C0\x03\x02\x02\x02\u0182\u01C0\x07\xEB\x02\x02\u0183\u0188\x07\xEC" +
        "\x02\x02\u0184\u0185\x07Z\x02\x02\u0185\u0186\x058\x1D\x02\u0186\u0187" +
        "\x07\xE1\x02\x02\u0187\u0189\x03\x02\x02\x02\u0188\u0184\x03\x02\x02\x02" +
        "\u0188\u0189\x03\x02\x02\x02\u0189\u01C0\x03\x02\x02\x02\u018A\u01C0\t" +
        "D\x02\x02\u018B\u01C0\tE\x02\x02\u018C\u01C0\x07\xF8\x02\x02\u018D\u01C0" +
        "\tF\x02\x02\u018E\u01A0\x07\xFC\x02\x02\u018F\u0191\x07Z\x02\x02\u0190" +
        "\u0192\tG\x02\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02" +
        "\x02\u0192\u0194\x03\x02\x02\x02\u0193\u0195\x07\u011C\x02\x02\u0194\u0193" +
        "\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02" +
        "\u0196\u0198\tH\x02\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02" +
        "\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u019B\x07\u011C\x02\x02\u019A" +
        "\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02" +
        "\x02\x02\u019C\u019E\tI\x02\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E" +
        "\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x07\xE1\x02\x02" +
        "\u01A0\u018F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01C0\x03" +
        "\x02\x02\x02\u01A2\u01C0\x07\xFD\x02\x02\u01A3\u01A4\x07\u0100\x02\x02" +
        "\u01A4\u01A5\x07Z\x02\x02\u01A5\u01A6\tJ\x02\x02\u01A6\u01C0\x07\xE1\x02" +
        "\x02\u01A7\u01C0\x07\u0103\x02\x02\u01A8\u01A9\tK\x02\x02\u01A9\u01AA" +
        "\x07Z\x02\x02\u01AA\u01AB\x056\x1C\x02\u01AB\u01AC\x07\xE1\x02\x02\u01AC" +
        "\u01C0\x03\x02\x02\x02\u01AD\u01AE\tL\x02\x02\u01AE\u01AF\x07Z\x02\x02" +
        "\u01AF\u01B0\tM\x02\x02\u01B0\u01C0\x07\xE1\x02\x02\u01B1\u01B7\tN\x02" +
        "\x02\u01B2\u01B4\x07Z\x02\x02\u01B3\u01B5\tO\x02\x02\u01B4\u01B3\x03\x02" +
        "\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
        "\u01B8\x07\xE1\x02\x02\u01B7\u01B2\x03\x02\x02\x02\u01B7\u01B8\x03\x02" +
        "\x02\x02\u01B8\u01C0\x03\x02\x02\x02\u01B9\u01BA\tP\x02\x02\u01BA\u01BB" +
        "\x07Z\x02\x02\u01BB\u01BC\x058\x1D\x02\u01BC\u01BD\x07\xE1\x02\x02\u01BD" +
        "\u01C0\x03\x02\x02\x02\u01BE\u01C0\x07\u010D\x02\x02\u01BFi\x03\x02\x02" +
        "\x02\u01BFj\x03\x02\x02\x02\u01BFk\x03\x02\x02\x02\u01BFl\x03\x02\x02" +
        "\x02\u01BFp\x03\x02\x02\x02\u01BFq\x03\x02\x02\x02\u01BFr\x03\x02\x02" +
        "\x02\u01BFw\x03\x02\x02\x02\u01BFx\x03\x02\x02\x02\u01BF\x7F\x03\x02\x02" +
        "\x02\u01BF\x80\x03\x02\x02\x02\u01BF\x81\x03\x02\x02\x02\u01BF\x86\x03" +
        "\x02\x02\x02\u01BF\x87\x03\x02\x02\x02\u01BF\x88\x03\x02\x02\x02\u01BF" +
        "\x89\x03\x02\x02\x02\u01BF\x8E\x03\x02\x02\x02\u01BF\x93\x03\x02\x02\x02" +
        "\u01BF\xA1\x03\x02\x02\x02\u01BF\xA2\x03\x02\x02\x02\u01BF\xA3\x03\x02" +
        "\x02\x02\u01BF\xA4\x03\x02\x02\x02\u01BF\xA5\x03\x02\x02\x02\u01BF\xA6" +
        "\x03\x02\x02\x02\u01BF\xA7\x03\x02\x02\x02\u01BF\xA8\x03\x02\x02\x02\u01BF" +
        "\xA9\x03\x02\x02\x02\u01BF\xAA\x03\x02\x02\x02\u01BF\xAB\x03\x02\x02\x02" +
        "\u01BF\xAC\x03\x02\x02\x02\u01BF\xAD\x03\x02\x02\x02\u01BF\xAE\x03\x02" +
        "\x02\x02\u01BF\xB6\x03\x02\x02\x02\u01BF\xBE\x03\x02\x02\x02\u01BF\xBF" +
        "\x03\x02\x02\x02\u01BF\xC0\x03\x02\x02\x02\u01BF\xC4\x03\x02\x02\x02\u01BF" +
        "\xC8\x03\x02\x02";
    Cobol85PreprocessorParser._serializedATNSegment1 = "\x02\u01BF\xC9\x03\x02\x02\x02\u01BF\xCA\x03\x02\x02\x02\u01BF\xCB\x03" +
        "\x02\x02\x02\u01BF\xCC\x03\x02\x02\x02\u01BF\xD1\x03\x02\x02\x02\u01BF" +
        "\xD2\x03\x02\x02\x02\u01BF\xD3\x03\x02\x02\x02\u01BF\xD4\x03\x02\x02\x02" +
        "\u01BF\xDF\x03\x02\x02\x02\u01BF\xE5\x03\x02\x02\x02\u01BF\xEB\x03\x02" +
        "\x02\x02\u01BF\xEF\x03\x02\x02\x02\u01BF\xF0\x03\x02\x02\x02\u01BF\xF1" +
        "\x03\x02\x02\x02\u01BF\xF2\x03\x02\x02\x02\u01BF\xF3\x03\x02\x02\x02\u01BF" +
        "\xF4\x03\x02\x02\x02\u01BF\xF5\x03\x02\x02\x02\u01BF\xF6\x03\x02\x02\x02" +
        "\u01BF\xFC\x03\x02\x02\x02\u01BF\xFD\x03\x02\x02\x02\u01BF\xFE\x03\x02" +
        "\x02\x02\u01BF\xFF\x03\x02\x02\x02\u01BF\u0100\x03\x02\x02\x02\u01BF\u0101" +
        "\x03\x02\x02\x02\u01BF\u0102\x03\x02\x02\x02\u01BF\u0103\x03\x02\x02\x02" +
        "\u01BF\u0104\x03\x02\x02\x02\u01BF\u0105\x03\x02\x02\x02\u01BF\u0106\x03" +
        "\x02\x02\x02\u01BF\u0107\x03\x02\x02\x02\u01BF\u0108\x03\x02\x02\x02\u01BF" +
        "\u0109\x03\x02\x02\x02\u01BF\u010A\x03\x02\x02\x02\u01BF\u010B\x03\x02" +
        "\x02\x02\u01BF\u010C\x03\x02\x02\x02\u01BF\u010D\x03\x02\x02\x02\u01BF" +
        "\u010E\x03\x02\x02\x02\u01BF\u010F\x03\x02\x02\x02\u01BF\u0110\x03\x02" +
        "\x02\x02\u01BF\u0111\x03\x02\x02\x02\u01BF\u0112\x03\x02\x02\x02\u01BF" +
        "\u0113\x03\x02\x02\x02\u01BF\u0114\x03\x02\x02\x02\u01BF\u0115\x03\x02" +
        "\x02\x02\u01BF\u0116\x03\x02\x02\x02\u01BF\u0117\x03\x02\x02\x02\u01BF" +
        "\u0118\x03\x02\x02\x02\u01BF\u0119\x03\x02\x02\x02\u01BF\u011A\x03\x02" +
        "\x02\x02\u01BF\u011B\x03\x02\x02\x02\u01BF\u011C\x03\x02\x02\x02\u01BF" +
        "\u011D\x03\x02\x02\x02\u01BF\u011E\x03\x02\x02\x02\u01BF\u011F\x03\x02" +
        "\x02\x02\u01BF\u0120\x03\x02\x02\x02\u01BF\u0121\x03\x02\x02\x02\u01BF" +
        "\u0122\x03\x02\x02\x02\u01BF\u0123\x03\x02\x02\x02\u01BF\u0124\x03\x02" +
        "\x02\x02\u01BF\u0125\x03\x02\x02\x02\u01BF\u0126\x03\x02\x02\x02\u01BF" +
        "\u0127\x03\x02\x02\x02\u01BF\u0128\x03\x02\x02\x02\u01BF\u0129\x03\x02" +
        "\x02\x02\u01BF\u012A\x03\x02\x02\x02\u01BF\u012B\x03\x02\x02\x02\u01BF" +
        "\u012C\x03\x02\x02\x02\u01BF\u012D\x03\x02\x02\x02\u01BF\u012E\x03\x02" +
        "\x02\x02\u01BF\u0132\x03\x02\x02\x02\u01BF\u0133\x03\x02\x02\x02\u01BF" +
        "\u0134\x03\x02\x02\x02\u01BF\u0135\x03\x02\x02\x02\u01BF\u0136\x03\x02" +
        "\x02\x02\u01BF\u013A\x03\x02\x02\x02\u01BF\u013B\x03\x02\x02\x02\u01BF" +
        "\u013C\x03\x02\x02\x02\u01BF\u0147\x03\x02\x02\x02\u01BF\u014E\x03\x02" +
        "\x02\x02\u01BF\u0154\x03\x02\x02\x02\u01BF\u0155\x03\x02\x02\x02\u01BF" +
        "\u0156\x03\x02\x02\x02\u01BF\u0157\x03\x02\x02\x02\u01BF\u015C\x03\x02" +
        "\x02\x02\u01BF\u0160\x03\x02\x02\x02\u01BF\u0161\x03\x02\x02\x02\u01BF" +
        "\u0162\x03\x02\x02\x02\u01BF\u0163\x03\x02\x02\x02\u01BF\u016B\x03\x02" +
        "\x02\x02\u01BF\u0174\x03\x02\x02\x02\u01BF\u017B\x03\x02\x02\x02\u01BF" +
        "\u017C\x03\x02\x02\x02\u01BF\u017D\x03\x02\x02\x02\u01BF\u0182\x03\x02" +
        "\x02\x02\u01BF\u0183\x03\x02\x02\x02\u01BF\u018A\x03\x02\x02\x02\u01BF" +
        "\u018B\x03\x02\x02\x02\u01BF\u018C\x03\x02\x02\x02\u01BF\u018D\x03\x02" +
        "\x02\x02\u01BF\u018E\x03\x02\x02\x02\u01BF\u01A2\x03\x02\x02\x02\u01BF" +
        "\u01A3\x03\x02\x02\x02\u01BF\u01A7\x03\x02\x02\x02\u01BF\u01A8\x03\x02" +
        "\x02\x02\u01BF\u01AD\x03\x02\x02\x02\u01BF\u01B1\x03\x02\x02\x02\u01BF" +
        "\u01B9\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\t\x03\x02\x02" +
        "\x02\u01C1\u01C2\x079\x02\x02\u01C2\u01C3\x07\x14\x02\x02\u01C3\u01C4" +
        "\x050\x19\x02\u01C4\u01C6\x076\x02\x02\u01C5\u01C7\x07\u011D\x02\x02\u01C6" +
        "\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\v\x03\x02\x02" +
        "\x02\u01C8\u01C9\x079\x02\x02\u01C9\u01CA\x07\xEC\x02\x02\u01CA\u01CB" +
        "\x052\x1A\x02\u01CB\u01CD\x076\x02\x02\u01CC\u01CE\x07\u011D\x02\x02\u01CD" +
        "\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\r\x03\x02\x02" +
        "\x02\u01CF\u01D0\x079\x02\x02\u01D0\u01D1\x07\xEF\x02\x02\u01D1\u01D2" +
        "\x050\x19\x02\u01D2\u01D4\x076\x02\x02\u01D3\u01D5\x07\u011D\x02\x02\u01D4" +
        "\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\x0F\x03\x02\x02" +
        "\x02\u01D6\u01D7\x07\x1B\x02\x02\u01D7\u01E6\x05\x12\n\x02\u01D8\u01DA" +
        "\x07\u0123\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02" +
        "\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01E2" +
        "\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE\u01E3\x05 \x11\x02" +
        "\u01DF\u01E3\x05\"\x12\x02\u01E0\u01E3\x05\x16\f\x02\u01E1\u01E3\x07\xF7" +
        "\x02\x02\u01E2\u01DE\x03\x02\x02\x02\u01E2\u01DF\x03\x02\x02\x02\u01E2" +
        "\u01E0\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E5\x03\x02" +
        "\x02\x02\u01E4\u01DB\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6" +
        "\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01EC\x03\x02" +
        "\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EB\x07\u0123\x02\x02\u01EA" +
        "\u01E9\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02" +
        "\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE" +
        "\u01EC\x03\x02\x02\x02\u01EF\u01F0\x07\u011D\x02\x02\u01F0\x11\x03\x02" +
        "\x02\x02\u01F1\u01F5\x058\x1D\x02\u01F2\u01F5\x056\x1C\x02\u01F3\u01F5" +
        "\x05:\x1E\x02\u01F4\u01F1\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02" +
        "\u01F4\u01F3\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F7\t" +
        "Q\x02\x02\u01F7\u01F9\x05\x14\v\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8" +
        "\u01F9\x03\x02\x02\x02\u01F9\x13\x03\x02\x02\x02\u01FA\u01FD\x058\x1D" +
        "\x02\u01FB\u01FD\x056\x1C\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FB" +
        "\x03\x02\x02\x02\u01FD\x15\x03\x02\x02\x02\u01FE\u0202\x07\xDF\x02\x02" +
        "\u01FF\u0201\x07\u0123\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201\u0204" +
        "\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
        "\u0203\u0205\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205\u020E\x05" +
        "\x1E\x10\x02\u0206\u0208\x07\u0123\x02\x02\u0207\u0206\x03\x02\x02\x02" +
        "\u0208\u0209\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03" +
        "\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020D\x05\x1E\x10\x02\u020C" +
        "\u0207\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03\x02" +
        "\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\x17\x03\x02\x02\x02\u0210\u020E" +
        "\x03\x02\x02\x02\u0211\u0216\x05\x1A\x0E\x02\u0212\u0215\x05\x10\t\x02" +
        "\u0213\u0215\x050\x19\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0213\x03" +
        "\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216" +
        "\u0217\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02" +
        "\x02\x02\u0219\u021B\x05\x1C\x0F\x02\u021A\u0219\x03\x02\x02\x02\u021A" +
        "\u021B\x03\x02\x02\x02\u021B\x19\x03\x02\x02\x02\u021C\u0224\x07\xDE\x02" +
        "\x02\u021D\u021F\x07\u0123\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F\u0222" +
        "\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02" +
        "\u0221\u0223\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0225\x05" +
        "\x1E\x10\x02\u0224\u0220\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
        "\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228\x03\x02" +
        "\x02\x02\u0228\u0229\x07\u011D\x02\x02\u0229\x1B\x03\x02\x02\x02\u022A" +
        "\u022B\x07\xDE\x02\x02\u022B\u022C\x07\xCA\x02\x02\u022C\u022D\x07\u011D" +
        "\x02\x02\u022D\x1D\x03\x02\x02\x02\u022E\u0232\x05$\x13\x02\u022F\u0231" +
        "\x07\u0123\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231\u0234\x03\x02\x02" +
        "\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0235" +
        "\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0239\x07\x11\x02\x02" +
        "\u0236\u0238\x07\u0123\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238\u023B" +
        "\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02" +
        "\u023A\u023C\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u0244\x05" +
        "&\x14\x02\u023D\u023F\x07\u0123\x02\x02\u023E\u023D\x03\x02\x02\x02\u023F" +
        "\u0242\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02" +
        "\x02\x02\u0241\u0243\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243" +
        "\u0245\x05 \x11\x02\u0244\u0240\x03\x02\x02\x02\u0244\u0245\x03\x02\x02" +
        "\x02\u0245\u024D\x03\x02\x02\x02\u0246\u0248\x07\u0123\x02\x02\u0247\u0246" +
        "\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02" +
        "\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u0249\x03" +
        "\x02\x02\x02\u024C\u024E\x05\"\x12\x02\u024D\u0249\x03\x02\x02\x02\u024D" +
        "\u024E\x03\x02\x02\x02\u024E\x1F\x03\x02\x02\x02\u024F\u0253\tQ\x02\x02" +
        "\u0250\u0252\x07\u0123\x02\x02\u0251\u0250\x03\x02\x02\x02\u0252\u0255" +
        "\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02" +
        "\u0254\u0258\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0256\u0259\x05" +
        "8\x1D\x02\u0257\u0259\x056\x1C\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0257" +
        "\x03\x02\x02\x02\u0259!\x03\x02\x02\x02\u025A\u025E\x07\xCC\x02\x02\u025B" +
        "\u025D\x07\u0123\x02\x02\u025C\u025B\x03\x02\x02\x02\u025D\u0260\x03\x02" +
        "\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F" +
        "\u0263\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0264\x058\x1D" +
        "\x02\u0262\u0264\x056\x1C\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0262" +
        "\x03\x02\x02\x02\u0264#\x03\x02\x02\x02\u0265\u026A\x058\x1D\x02\u0266" +
        "\u026A\x056\x1C\x02\u0267\u026A\x05.\x18\x02\u0268\u026A\x054\x1B\x02" +
        "\u0269\u0265\x03\x02\x02\x02\u0269\u0266\x03\x02\x02\x02\u0269\u0267\x03" +
        "\x02\x02\x02\u0269\u0268\x03\x02\x02\x02\u026A%\x03\x02\x02\x02\u026B" +
        "\u0270\x058\x1D\x02\u026C\u0270\x056\x1C\x02\u026D\u0270\x05.\x18\x02" +
        "\u026E\u0270\x054\x1B\x02\u026F\u026B\x03\x02\x02\x02\u026F\u026C\x03" +
        "\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270" +
        "\'\x03\x02\x02\x02\u0271\u0273\x072\x02\x02\u0272\u0274\x07\u011D\x02" +
        "\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274)\x03" +
        "\x02\x02\x02\u0275\u0277\tR\x02\x02\u0276\u0278\x07\u011D\x02\x02\u0277" +
        "\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278+\x03\x02\x02" +
        "\x02\u0279\u027A\x07\xFE\x02\x02\u027A\u027C\x058\x1D\x02\u027B\u027D" +
        "\x07\u011D\x02\x02\u027C\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02" +
        "\x02\u027D-\x03\x02\x02\x02\u027E\u0280\x07\u011E\x02\x02\u027F\u0281" +
        "\x050\x19\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
        "\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x07\u011E\x02\x02\u0283/\x03" +
        "\x02\x02\x02\u0284\u0287\x054\x1B\x02\u0285\u0287\x07\u0123\x02\x02\u0286" +
        "\u0284\x03\x02\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02" +
        "\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289" +
        "1\x03\x02\x02\x02\u028A\u028F\x054\x1B\x02\u028B\u028F\x07\x1B\x02\x02" +
        "\u028C\u028F\x07\xDE\x02\x02\u028D\u028F\x07\u0123\x02\x02\u028E\u028A" +
        "\x03\x02\x02\x02\u028E\u028B\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02" +
        "\u028E\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u028E\x03" +
        "\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u02913\x03\x02\x02\x02\u0292" +
        "\u029A\x056\x1C\x02\u0293\u029A\x058\x1D\x02\u0294\u029A\x05:\x1E\x02" +
        "\u0295\u029A\x07\u0126\x02\x02\u0296\u029A\x07\u011D\x02\x02\u0297\u029A" +
        "\x07Z\x02\x02\u0298\u029A\x07\xE1\x02\x02\u0299\u0292\x03\x02\x02\x02" +
        "\u0299\u0293\x03\x02\x02\x02\u0299\u0294\x03\x02\x02\x02\u0299\u0295\x03" +
        "\x02\x02\x02\u0299\u0296\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299" +
        "\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u0299\x03\x02" +
        "\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C5\x03\x02\x02\x02\u029D\u02A0" +
        "\x07\u0121\x02\x02\u029E\u02A0\x05<\x1F\x02\u029F\u029D\x03\x02\x02\x02" +
        "\u029F\u029E\x03\x02\x02\x02\u02A07\x03\x02\x02\x02\u02A1\u02A2\tS\x02" +
        "\x02\u02A29\x03\x02\x02\x02\u02A3\u02A4\x07\u0122\x02\x02\u02A4;\x03\x02" +
        "\x02\x02\u02A5\u02A6\tT\x02\x02\u02A6=\x03\x02\x02\x02LJLSWY_d}\x96\x99" +
        "\x9C\x9F\xB3\xBB\xDB\xE3\xE9\xFA\u0143\u0152\u0168\u0172\u0178\u0188\u0191" +
        "\u0194\u0197\u019A\u019D\u01A0\u01B4\u01B7\u01BF\u01C6\u01CD\u01D4\u01DB" +
        "\u01E2\u01E6\u01EC\u01F4\u01F8\u01FC\u0202\u0209\u020E\u0214\u0216\u021A" +
        "\u0220\u0226\u0232\u0239\u0240\u0244\u0249\u024D\u0253\u0258\u025E\u0263" +
        "\u0269\u026F\u0273\u0277\u027C\u0280\u0286\u0288\u028E\u0290\u0299\u029B" +
        "\u029F";
    Cobol85PreprocessorParser._serializedATN = Utils.join([
        Cobol85PreprocessorParser._serializedATNSegment0,
        Cobol85PreprocessorParser._serializedATNSegment1,
    ], "");
    return Cobol85PreprocessorParser;
}(Parser_1.Parser));
exports.Cobol85PreprocessorParser = Cobol85PreprocessorParser;
var StartRuleContext = /** @class */ (function (_super) {
    __extends(StartRuleContext, _super);
    function StartRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StartRuleContext.prototype.EOF = function () { return this.getToken(Cobol85PreprocessorParser.EOF, 0); };
    StartRuleContext.prototype.compilerOptions = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CompilerOptionsContext);
        }
        else {
            return this.getRuleContext(i, CompilerOptionsContext);
        }
    };
    StartRuleContext.prototype.copyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CopyStatementContext);
        }
        else {
            return this.getRuleContext(i, CopyStatementContext);
        }
    };
    StartRuleContext.prototype.execCicsStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExecCicsStatementContext);
        }
        else {
            return this.getRuleContext(i, ExecCicsStatementContext);
        }
    };
    StartRuleContext.prototype.execSqlStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExecSqlStatementContext);
        }
        else {
            return this.getRuleContext(i, ExecSqlStatementContext);
        }
    };
    StartRuleContext.prototype.execSqlImsStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExecSqlImsStatementContext);
        }
        else {
            return this.getRuleContext(i, ExecSqlImsStatementContext);
        }
    };
    StartRuleContext.prototype.replaceOffStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReplaceOffStatementContext);
        }
        else {
            return this.getRuleContext(i, ReplaceOffStatementContext);
        }
    };
    StartRuleContext.prototype.replaceArea = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReplaceAreaContext);
        }
        else {
            return this.getRuleContext(i, ReplaceAreaContext);
        }
    };
    StartRuleContext.prototype.ejectStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EjectStatementContext);
        }
        else {
            return this.getRuleContext(i, EjectStatementContext);
        }
    };
    StartRuleContext.prototype.skipStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SkipStatementContext);
        }
        else {
            return this.getRuleContext(i, SkipStatementContext);
        }
    };
    StartRuleContext.prototype.titleStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TitleStatementContext);
        }
        else {
            return this.getRuleContext(i, TitleStatementContext);
        }
    };
    StartRuleContext.prototype.charDataLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharDataLineContext);
        }
        else {
            return this.getRuleContext(i, CharDataLineContext);
        }
    };
    StartRuleContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    Object.defineProperty(StartRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_startRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StartRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterStartRule) {
            listener.enterStartRule(this);
        }
    };
    // @Override
    StartRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitStartRule) {
            listener.exitStartRule(this);
        }
    };
    // @Override
    StartRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitStartRule) {
            return visitor.visitStartRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StartRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StartRuleContext = StartRuleContext;
var CompilerOptionsContext = /** @class */ (function (_super) {
    __extends(CompilerOptionsContext, _super);
    function CompilerOptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilerOptionsContext.prototype.PROCESS = function () { return this.tryGetToken(Cobol85PreprocessorParser.PROCESS, 0); };
    CompilerOptionsContext.prototype.CBL = function () { return this.tryGetToken(Cobol85PreprocessorParser.CBL, 0); };
    CompilerOptionsContext.prototype.compilerOption = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CompilerOptionContext);
        }
        else {
            return this.getRuleContext(i, CompilerOptionContext);
        }
    };
    CompilerOptionsContext.prototype.compilerXOpts = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CompilerXOptsContext);
        }
        else {
            return this.getRuleContext(i, CompilerXOptsContext);
        }
    };
    CompilerOptionsContext.prototype.COMMACHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.COMMACHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.COMMACHAR, i);
        }
    };
    Object.defineProperty(CompilerOptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_compilerOptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompilerOptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterCompilerOptions) {
            listener.enterCompilerOptions(this);
        }
    };
    // @Override
    CompilerOptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitCompilerOptions) {
            listener.exitCompilerOptions(this);
        }
    };
    // @Override
    CompilerOptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitCompilerOptions) {
            return visitor.visitCompilerOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompilerOptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilerOptionsContext = CompilerOptionsContext;
var CompilerXOptsContext = /** @class */ (function (_super) {
    __extends(CompilerXOptsContext, _super);
    function CompilerXOptsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilerXOptsContext.prototype.XOPTS = function () { return this.getToken(Cobol85PreprocessorParser.XOPTS, 0); };
    CompilerXOptsContext.prototype.LPARENCHAR = function () { return this.getToken(Cobol85PreprocessorParser.LPARENCHAR, 0); };
    CompilerXOptsContext.prototype.compilerOption = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CompilerOptionContext);
        }
        else {
            return this.getRuleContext(i, CompilerOptionContext);
        }
    };
    CompilerXOptsContext.prototype.RPARENCHAR = function () { return this.getToken(Cobol85PreprocessorParser.RPARENCHAR, 0); };
    CompilerXOptsContext.prototype.COMMACHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.COMMACHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.COMMACHAR, i);
        }
    };
    Object.defineProperty(CompilerXOptsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_compilerXOpts; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompilerXOptsContext.prototype.enterRule = function (listener) {
        if (listener.enterCompilerXOpts) {
            listener.enterCompilerXOpts(this);
        }
    };
    // @Override
    CompilerXOptsContext.prototype.exitRule = function (listener) {
        if (listener.exitCompilerXOpts) {
            listener.exitCompilerXOpts(this);
        }
    };
    // @Override
    CompilerXOptsContext.prototype.accept = function (visitor) {
        if (visitor.visitCompilerXOpts) {
            return visitor.visitCompilerXOpts(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompilerXOptsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilerXOptsContext = CompilerXOptsContext;
var CompilerOptionContext = /** @class */ (function (_super) {
    __extends(CompilerOptionContext, _super);
    function CompilerOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilerOptionContext.prototype.ADATA = function () { return this.tryGetToken(Cobol85PreprocessorParser.ADATA, 0); };
    CompilerOptionContext.prototype.ADV = function () { return this.tryGetToken(Cobol85PreprocessorParser.ADV, 0); };
    CompilerOptionContext.prototype.APOST = function () { return this.tryGetToken(Cobol85PreprocessorParser.APOST, 0); };
    CompilerOptionContext.prototype.LPARENCHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.LPARENCHAR, 0); };
    CompilerOptionContext.prototype.RPARENCHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.RPARENCHAR, 0); };
    CompilerOptionContext.prototype.ARITH = function () { return this.tryGetToken(Cobol85PreprocessorParser.ARITH, 0); };
    CompilerOptionContext.prototype.AR = function () { return this.tryGetToken(Cobol85PreprocessorParser.AR, 0); };
    CompilerOptionContext.prototype.EXTEND = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXTEND, 0); };
    CompilerOptionContext.prototype.E_CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.E_CHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.E_CHAR, i);
        }
    };
    CompilerOptionContext.prototype.COMPAT = function () { return this.tryGetToken(Cobol85PreprocessorParser.COMPAT, 0); };
    CompilerOptionContext.prototype.C_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.C_CHAR, 0); };
    CompilerOptionContext.prototype.AWO = function () { return this.tryGetToken(Cobol85PreprocessorParser.AWO, 0); };
    CompilerOptionContext.prototype.BLOCK0 = function () { return this.tryGetToken(Cobol85PreprocessorParser.BLOCK0, 0); };
    CompilerOptionContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    CompilerOptionContext.prototype.BUFSIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.BUFSIZE, 0); };
    CompilerOptionContext.prototype.BUF = function () { return this.tryGetToken(Cobol85PreprocessorParser.BUF, 0); };
    CompilerOptionContext.prototype.CBLCARD = function () { return this.tryGetToken(Cobol85PreprocessorParser.CBLCARD, 0); };
    CompilerOptionContext.prototype.CICS = function () { return this.tryGetToken(Cobol85PreprocessorParser.CICS, 0); };
    CompilerOptionContext.prototype.COBOL2 = function () { return this.tryGetToken(Cobol85PreprocessorParser.COBOL2, 0); };
    CompilerOptionContext.prototype.COBOL3 = function () { return this.tryGetToken(Cobol85PreprocessorParser.COBOL3, 0); };
    CompilerOptionContext.prototype.CODEPAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.CODEPAGE, 0); };
    CompilerOptionContext.prototype.CP = function () { return this.tryGetToken(Cobol85PreprocessorParser.CP, 0); };
    CompilerOptionContext.prototype.COMPILE = function () { return this.tryGetToken(Cobol85PreprocessorParser.COMPILE, 0); };
    CompilerOptionContext.prototype.CPP = function () { return this.tryGetToken(Cobol85PreprocessorParser.CPP, 0); };
    CompilerOptionContext.prototype.CPSM = function () { return this.tryGetToken(Cobol85PreprocessorParser.CPSM, 0); };
    CompilerOptionContext.prototype.CURRENCY = function () { return this.tryGetToken(Cobol85PreprocessorParser.CURRENCY, 0); };
    CompilerOptionContext.prototype.CURR = function () { return this.tryGetToken(Cobol85PreprocessorParser.CURR, 0); };
    CompilerOptionContext.prototype.DATA = function () { return this.tryGetToken(Cobol85PreprocessorParser.DATA, 0); };
    CompilerOptionContext.prototype.DATEPROC = function () { return this.tryGetToken(Cobol85PreprocessorParser.DATEPROC, 0); };
    CompilerOptionContext.prototype.DP = function () { return this.tryGetToken(Cobol85PreprocessorParser.DP, 0); };
    CompilerOptionContext.prototype.COMMACHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.COMMACHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.COMMACHAR, i);
        }
    };
    CompilerOptionContext.prototype.FLAG = function () { return this.tryGetToken(Cobol85PreprocessorParser.FLAG, 0); };
    CompilerOptionContext.prototype.NOFLAG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFLAG, 0); };
    CompilerOptionContext.prototype.TRIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.TRIG, 0); };
    CompilerOptionContext.prototype.NOTRIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTRIG, 0); };
    CompilerOptionContext.prototype.DBCS = function () { return this.tryGetToken(Cobol85PreprocessorParser.DBCS, 0); };
    CompilerOptionContext.prototype.DECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.DECK, 0); };
    CompilerOptionContext.prototype.D_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.D_CHAR, 0); };
    CompilerOptionContext.prototype.DEBUG = function () { return this.tryGetToken(Cobol85PreprocessorParser.DEBUG, 0); };
    CompilerOptionContext.prototype.DIAGTRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.DIAGTRUNC, 0); };
    CompilerOptionContext.prototype.DTR = function () { return this.tryGetToken(Cobol85PreprocessorParser.DTR, 0); };
    CompilerOptionContext.prototype.DLL = function () { return this.tryGetToken(Cobol85PreprocessorParser.DLL, 0); };
    CompilerOptionContext.prototype.DUMP = function () { return this.tryGetToken(Cobol85PreprocessorParser.DUMP, 0); };
    CompilerOptionContext.prototype.DU = function () { return this.tryGetToken(Cobol85PreprocessorParser.DU, 0); };
    CompilerOptionContext.prototype.DYNAM = function () { return this.tryGetToken(Cobol85PreprocessorParser.DYNAM, 0); };
    CompilerOptionContext.prototype.DYN = function () { return this.tryGetToken(Cobol85PreprocessorParser.DYN, 0); };
    CompilerOptionContext.prototype.EDF = function () { return this.tryGetToken(Cobol85PreprocessorParser.EDF, 0); };
    CompilerOptionContext.prototype.EPILOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.EPILOG, 0); };
    CompilerOptionContext.prototype.EXIT = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXIT, 0); };
    CompilerOptionContext.prototype.EXPORTALL = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXPORTALL, 0); };
    CompilerOptionContext.prototype.EXP = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXP, 0); };
    CompilerOptionContext.prototype.FASTSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.FASTSRT, 0); };
    CompilerOptionContext.prototype.FSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.FSRT, 0); };
    CompilerOptionContext.prototype.FEPI = function () { return this.tryGetToken(Cobol85PreprocessorParser.FEPI, 0); };
    CompilerOptionContext.prototype.F_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.F_CHAR, 0); };
    CompilerOptionContext.prototype.I_CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.I_CHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.I_CHAR, i);
        }
    };
    CompilerOptionContext.prototype.S_CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.S_CHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.S_CHAR, i);
        }
    };
    CompilerOptionContext.prototype.U_CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.U_CHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.U_CHAR, i);
        }
    };
    CompilerOptionContext.prototype.W_CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.W_CHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.W_CHAR, i);
        }
    };
    CompilerOptionContext.prototype.FLAGSTD = function () { return this.tryGetToken(Cobol85PreprocessorParser.FLAGSTD, 0); };
    CompilerOptionContext.prototype.M_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.M_CHAR, 0); };
    CompilerOptionContext.prototype.H_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.H_CHAR, 0); };
    CompilerOptionContext.prototype.DD = function () { return this.tryGetToken(Cobol85PreprocessorParser.DD, 0); };
    CompilerOptionContext.prototype.N_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.N_CHAR, 0); };
    CompilerOptionContext.prototype.NN = function () { return this.tryGetToken(Cobol85PreprocessorParser.NN, 0); };
    CompilerOptionContext.prototype.SS = function () { return this.tryGetToken(Cobol85PreprocessorParser.SS, 0); };
    CompilerOptionContext.prototype.GDS = function () { return this.tryGetToken(Cobol85PreprocessorParser.GDS, 0); };
    CompilerOptionContext.prototype.GRAPHIC = function () { return this.tryGetToken(Cobol85PreprocessorParser.GRAPHIC, 0); };
    CompilerOptionContext.prototype.INTDATE = function () { return this.tryGetToken(Cobol85PreprocessorParser.INTDATE, 0); };
    CompilerOptionContext.prototype.ANSI = function () { return this.tryGetToken(Cobol85PreprocessorParser.ANSI, 0); };
    CompilerOptionContext.prototype.LILIAN = function () { return this.tryGetToken(Cobol85PreprocessorParser.LILIAN, 0); };
    CompilerOptionContext.prototype.LANGUAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.LANGUAGE, 0); };
    CompilerOptionContext.prototype.LANG = function () { return this.tryGetToken(Cobol85PreprocessorParser.LANG, 0); };
    CompilerOptionContext.prototype.ENGLISH = function () { return this.tryGetToken(Cobol85PreprocessorParser.ENGLISH, 0); };
    CompilerOptionContext.prototype.CS = function () { return this.tryGetToken(Cobol85PreprocessorParser.CS, 0); };
    CompilerOptionContext.prototype.EN = function () { return this.tryGetToken(Cobol85PreprocessorParser.EN, 0); };
    CompilerOptionContext.prototype.JA = function () { return this.tryGetToken(Cobol85PreprocessorParser.JA, 0); };
    CompilerOptionContext.prototype.JP = function () { return this.tryGetToken(Cobol85PreprocessorParser.JP, 0); };
    CompilerOptionContext.prototype.KA = function () { return this.tryGetToken(Cobol85PreprocessorParser.KA, 0); };
    CompilerOptionContext.prototype.UE = function () { return this.tryGetToken(Cobol85PreprocessorParser.UE, 0); };
    CompilerOptionContext.prototype.LEASM = function () { return this.tryGetToken(Cobol85PreprocessorParser.LEASM, 0); };
    CompilerOptionContext.prototype.LENGTH = function () { return this.tryGetToken(Cobol85PreprocessorParser.LENGTH, 0); };
    CompilerOptionContext.prototype.LIB = function () { return this.tryGetToken(Cobol85PreprocessorParser.LIB, 0); };
    CompilerOptionContext.prototype.LIN = function () { return this.tryGetToken(Cobol85PreprocessorParser.LIN, 0); };
    CompilerOptionContext.prototype.LINECOUNT = function () { return this.tryGetToken(Cobol85PreprocessorParser.LINECOUNT, 0); };
    CompilerOptionContext.prototype.LC = function () { return this.tryGetToken(Cobol85PreprocessorParser.LC, 0); };
    CompilerOptionContext.prototype.LINKAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.LINKAGE, 0); };
    CompilerOptionContext.prototype.LIST = function () { return this.tryGetToken(Cobol85PreprocessorParser.LIST, 0); };
    CompilerOptionContext.prototype.MAP = function () { return this.tryGetToken(Cobol85PreprocessorParser.MAP, 0); };
    CompilerOptionContext.prototype.MARGINS = function () { return this.tryGetToken(Cobol85PreprocessorParser.MARGINS, 0); };
    CompilerOptionContext.prototype.MDECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.MDECK, 0); };
    CompilerOptionContext.prototype.MD = function () { return this.tryGetToken(Cobol85PreprocessorParser.MD, 0); };
    CompilerOptionContext.prototype.NOC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOC, 0); };
    CompilerOptionContext.prototype.NOCOMPILE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCOMPILE, 0); };
    CompilerOptionContext.prototype.NAME = function () { return this.tryGetToken(Cobol85PreprocessorParser.NAME, 0); };
    CompilerOptionContext.prototype.ALIAS = function () { return this.tryGetToken(Cobol85PreprocessorParser.ALIAS, 0); };
    CompilerOptionContext.prototype.NOALIAS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOALIAS, 0); };
    CompilerOptionContext.prototype.NATLANG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NATLANG, 0); };
    CompilerOptionContext.prototype.NOADATA = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOADATA, 0); };
    CompilerOptionContext.prototype.NOADV = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOADV, 0); };
    CompilerOptionContext.prototype.NOAWO = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOAWO, 0); };
    CompilerOptionContext.prototype.NOBLOCK0 = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOBLOCK0, 0); };
    CompilerOptionContext.prototype.NOCBLCARD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCBLCARD, 0); };
    CompilerOptionContext.prototype.NOCICS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCICS, 0); };
    CompilerOptionContext.prototype.NOCMPR2 = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCMPR2, 0); };
    CompilerOptionContext.prototype.NOCPSM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCPSM, 0); };
    CompilerOptionContext.prototype.NOCURRENCY = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCURRENCY, 0); };
    CompilerOptionContext.prototype.NOCURR = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCURR, 0); };
    CompilerOptionContext.prototype.NODATEPROC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODATEPROC, 0); };
    CompilerOptionContext.prototype.NODP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODP, 0); };
    CompilerOptionContext.prototype.NODBCS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODBCS, 0); };
    CompilerOptionContext.prototype.NODEBUG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODEBUG, 0); };
    CompilerOptionContext.prototype.NODECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODECK, 0); };
    CompilerOptionContext.prototype.NOD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOD, 0); };
    CompilerOptionContext.prototype.NODLL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODLL, 0); };
    CompilerOptionContext.prototype.NODE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODE, 0); };
    CompilerOptionContext.prototype.NODUMP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODUMP, 0); };
    CompilerOptionContext.prototype.NODU = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODU, 0); };
    CompilerOptionContext.prototype.NODIAGTRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODIAGTRUNC, 0); };
    CompilerOptionContext.prototype.NODTR = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODTR, 0); };
    CompilerOptionContext.prototype.NODYNAM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODYNAM, 0); };
    CompilerOptionContext.prototype.NODYN = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODYN, 0); };
    CompilerOptionContext.prototype.NOEDF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEDF, 0); };
    CompilerOptionContext.prototype.NOEPILOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEPILOG, 0); };
    CompilerOptionContext.prototype.NOEXIT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEXIT, 0); };
    CompilerOptionContext.prototype.NOEXPORTALL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEXPORTALL, 0); };
    CompilerOptionContext.prototype.NOEXP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEXP, 0); };
    CompilerOptionContext.prototype.NOFASTSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFASTSRT, 0); };
    CompilerOptionContext.prototype.NOFSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFSRT, 0); };
    CompilerOptionContext.prototype.NOFEPI = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFEPI, 0); };
    CompilerOptionContext.prototype.NOF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOF, 0); };
    CompilerOptionContext.prototype.NOFLAGMIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFLAGMIG, 0); };
    CompilerOptionContext.prototype.NOFLAGSTD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFLAGSTD, 0); };
    CompilerOptionContext.prototype.NOGRAPHIC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOGRAPHIC, 0); };
    CompilerOptionContext.prototype.NOLENGTH = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLENGTH, 0); };
    CompilerOptionContext.prototype.NOLIB = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLIB, 0); };
    CompilerOptionContext.prototype.NOLINKAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLINKAGE, 0); };
    CompilerOptionContext.prototype.NOLIST = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLIST, 0); };
    CompilerOptionContext.prototype.NOMAP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOMAP, 0); };
    CompilerOptionContext.prototype.NOMDECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOMDECK, 0); };
    CompilerOptionContext.prototype.NOMD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOMD, 0); };
    CompilerOptionContext.prototype.NONAME = function () { return this.tryGetToken(Cobol85PreprocessorParser.NONAME, 0); };
    CompilerOptionContext.prototype.NONUMBER = function () { return this.tryGetToken(Cobol85PreprocessorParser.NONUMBER, 0); };
    CompilerOptionContext.prototype.NONUM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NONUM, 0); };
    CompilerOptionContext.prototype.NOOBJECT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOBJECT, 0); };
    CompilerOptionContext.prototype.NOOBJ = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOBJ, 0); };
    CompilerOptionContext.prototype.NOOFFSET = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOFFSET, 0); };
    CompilerOptionContext.prototype.NOOFF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOFF, 0); };
    CompilerOptionContext.prototype.NOOPSEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPSEQUENCE, 0); };
    CompilerOptionContext.prototype.NOOPTIMIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPTIMIZE, 0); };
    CompilerOptionContext.prototype.NOOPT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPT, 0); };
    CompilerOptionContext.prototype.NOOPTIONS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPTIONS, 0); };
    CompilerOptionContext.prototype.NOP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOP, 0); };
    CompilerOptionContext.prototype.NOPROLOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOPROLOG, 0); };
    CompilerOptionContext.prototype.NORENT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NORENT, 0); };
    CompilerOptionContext.prototype.NOSEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEQUENCE, 0); };
    CompilerOptionContext.prototype.NOSEQ = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEQ, 0); };
    CompilerOptionContext.prototype.NOSOURCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSOURCE, 0); };
    CompilerOptionContext.prototype.NOS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOS, 0); };
    CompilerOptionContext.prototype.NOSPIE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSPIE, 0); };
    CompilerOptionContext.prototype.NOSQL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSQL, 0); };
    CompilerOptionContext.prototype.NOSQLCCSID = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSQLCCSID, 0); };
    CompilerOptionContext.prototype.NOSQLC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSQLC, 0); };
    CompilerOptionContext.prototype.NOSSRANGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSSRANGE, 0); };
    CompilerOptionContext.prototype.NOSSR = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSSR, 0); };
    CompilerOptionContext.prototype.NOSTDTRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSTDTRUNC, 0); };
    CompilerOptionContext.prototype.NOTERMINAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTERMINAL, 0); };
    CompilerOptionContext.prototype.NOTERM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTERM, 0); };
    CompilerOptionContext.prototype.NOTEST = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTEST, 0); };
    CompilerOptionContext.prototype.NOTHREAD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTHREAD, 0); };
    CompilerOptionContext.prototype.NOVBREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOVBREF, 0); };
    CompilerOptionContext.prototype.NOWORD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOWORD, 0); };
    CompilerOptionContext.prototype.NOWD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOWD, 0); };
    CompilerOptionContext.prototype.NSEQ = function () { return this.tryGetToken(Cobol85PreprocessorParser.NSEQ, 0); };
    CompilerOptionContext.prototype.NSYMBOL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NSYMBOL, 0); };
    CompilerOptionContext.prototype.NS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NS, 0); };
    CompilerOptionContext.prototype.NATIONAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NATIONAL, 0); };
    CompilerOptionContext.prototype.NAT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NAT, 0); };
    CompilerOptionContext.prototype.NOXREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOXREF, 0); };
    CompilerOptionContext.prototype.NOX = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOX, 0); };
    CompilerOptionContext.prototype.NOZWB = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOZWB, 0); };
    CompilerOptionContext.prototype.NUMBER = function () { return this.tryGetToken(Cobol85PreprocessorParser.NUMBER, 0); };
    CompilerOptionContext.prototype.NUM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NUM, 0); };
    CompilerOptionContext.prototype.NUMPROC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NUMPROC, 0); };
    CompilerOptionContext.prototype.MIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.MIG, 0); };
    CompilerOptionContext.prototype.NOPFD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOPFD, 0); };
    CompilerOptionContext.prototype.PFD = function () { return this.tryGetToken(Cobol85PreprocessorParser.PFD, 0); };
    CompilerOptionContext.prototype.OBJECT = function () { return this.tryGetToken(Cobol85PreprocessorParser.OBJECT, 0); };
    CompilerOptionContext.prototype.OBJ = function () { return this.tryGetToken(Cobol85PreprocessorParser.OBJ, 0); };
    CompilerOptionContext.prototype.OFFSET = function () { return this.tryGetToken(Cobol85PreprocessorParser.OFFSET, 0); };
    CompilerOptionContext.prototype.OFF = function () { return this.tryGetToken(Cobol85PreprocessorParser.OFF, 0); };
    CompilerOptionContext.prototype.OPMARGINS = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPMARGINS, 0); };
    CompilerOptionContext.prototype.OPSEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPSEQUENCE, 0); };
    CompilerOptionContext.prototype.OPTIMIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPTIMIZE, 0); };
    CompilerOptionContext.prototype.OPT = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPT, 0); };
    CompilerOptionContext.prototype.FULL = function () { return this.tryGetToken(Cobol85PreprocessorParser.FULL, 0); };
    CompilerOptionContext.prototype.STD = function () { return this.tryGetToken(Cobol85PreprocessorParser.STD, 0); };
    CompilerOptionContext.prototype.OPTFILE = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPTFILE, 0); };
    CompilerOptionContext.prototype.OPTIONS = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPTIONS, 0); };
    CompilerOptionContext.prototype.OP = function () { return this.tryGetToken(Cobol85PreprocessorParser.OP, 0); };
    CompilerOptionContext.prototype.cobolWord = function () {
        return this.tryGetRuleContext(0, CobolWordContext);
    };
    CompilerOptionContext.prototype.OUTDD = function () { return this.tryGetToken(Cobol85PreprocessorParser.OUTDD, 0); };
    CompilerOptionContext.prototype.OUT = function () { return this.tryGetToken(Cobol85PreprocessorParser.OUT, 0); };
    CompilerOptionContext.prototype.PGMNAME = function () { return this.tryGetToken(Cobol85PreprocessorParser.PGMNAME, 0); };
    CompilerOptionContext.prototype.PGMN = function () { return this.tryGetToken(Cobol85PreprocessorParser.PGMN, 0); };
    CompilerOptionContext.prototype.CO = function () { return this.tryGetToken(Cobol85PreprocessorParser.CO, 0); };
    CompilerOptionContext.prototype.LM = function () { return this.tryGetToken(Cobol85PreprocessorParser.LM, 0); };
    CompilerOptionContext.prototype.LONGMIXED = function () { return this.tryGetToken(Cobol85PreprocessorParser.LONGMIXED, 0); };
    CompilerOptionContext.prototype.LONGUPPER = function () { return this.tryGetToken(Cobol85PreprocessorParser.LONGUPPER, 0); };
    CompilerOptionContext.prototype.LU = function () { return this.tryGetToken(Cobol85PreprocessorParser.LU, 0); };
    CompilerOptionContext.prototype.MIXED = function () { return this.tryGetToken(Cobol85PreprocessorParser.MIXED, 0); };
    CompilerOptionContext.prototype.UPPER = function () { return this.tryGetToken(Cobol85PreprocessorParser.UPPER, 0); };
    CompilerOptionContext.prototype.PROLOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.PROLOG, 0); };
    CompilerOptionContext.prototype.QUOTE = function () { return this.tryGetToken(Cobol85PreprocessorParser.QUOTE, 0); };
    CompilerOptionContext.prototype.Q_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.Q_CHAR, 0); };
    CompilerOptionContext.prototype.RENT = function () { return this.tryGetToken(Cobol85PreprocessorParser.RENT, 0); };
    CompilerOptionContext.prototype.RMODE = function () { return this.tryGetToken(Cobol85PreprocessorParser.RMODE, 0); };
    CompilerOptionContext.prototype.ANY = function () { return this.tryGetToken(Cobol85PreprocessorParser.ANY, 0); };
    CompilerOptionContext.prototype.AUTO = function () { return this.tryGetToken(Cobol85PreprocessorParser.AUTO, 0); };
    CompilerOptionContext.prototype.SEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEQUENCE, 0); };
    CompilerOptionContext.prototype.SEQ = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEQ, 0); };
    CompilerOptionContext.prototype.SIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SIZE, 0); };
    CompilerOptionContext.prototype.SZ = function () { return this.tryGetToken(Cobol85PreprocessorParser.SZ, 0); };
    CompilerOptionContext.prototype.MAX = function () { return this.tryGetToken(Cobol85PreprocessorParser.MAX, 0); };
    CompilerOptionContext.prototype.SOURCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SOURCE, 0); };
    CompilerOptionContext.prototype.SP = function () { return this.tryGetToken(Cobol85PreprocessorParser.SP, 0); };
    CompilerOptionContext.prototype.SPACE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SPACE, 0); };
    CompilerOptionContext.prototype.SPIE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SPIE, 0); };
    CompilerOptionContext.prototype.SQL = function () { return this.tryGetToken(Cobol85PreprocessorParser.SQL, 0); };
    CompilerOptionContext.prototype.SQLCCSID = function () { return this.tryGetToken(Cobol85PreprocessorParser.SQLCCSID, 0); };
    CompilerOptionContext.prototype.SQLC = function () { return this.tryGetToken(Cobol85PreprocessorParser.SQLC, 0); };
    CompilerOptionContext.prototype.SSRANGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SSRANGE, 0); };
    CompilerOptionContext.prototype.SSR = function () { return this.tryGetToken(Cobol85PreprocessorParser.SSR, 0); };
    CompilerOptionContext.prototype.SYSEIB = function () { return this.tryGetToken(Cobol85PreprocessorParser.SYSEIB, 0); };
    CompilerOptionContext.prototype.TERMINAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.TERMINAL, 0); };
    CompilerOptionContext.prototype.TERM = function () { return this.tryGetToken(Cobol85PreprocessorParser.TERM, 0); };
    CompilerOptionContext.prototype.TEST = function () { return this.tryGetToken(Cobol85PreprocessorParser.TEST, 0); };
    CompilerOptionContext.prototype.HOOK = function () { return this.tryGetToken(Cobol85PreprocessorParser.HOOK, 0); };
    CompilerOptionContext.prototype.NOHOOK = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOHOOK, 0); };
    CompilerOptionContext.prototype.SEP = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEP, 0); };
    CompilerOptionContext.prototype.SEPARATE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEPARATE, 0); };
    CompilerOptionContext.prototype.NOSEP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEP, 0); };
    CompilerOptionContext.prototype.NOSEPARATE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEPARATE, 0); };
    CompilerOptionContext.prototype.EJPD = function () { return this.tryGetToken(Cobol85PreprocessorParser.EJPD, 0); };
    CompilerOptionContext.prototype.NOEJPD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEJPD, 0); };
    CompilerOptionContext.prototype.THREAD = function () { return this.tryGetToken(Cobol85PreprocessorParser.THREAD, 0); };
    CompilerOptionContext.prototype.TRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.TRUNC, 0); };
    CompilerOptionContext.prototype.BIN = function () { return this.tryGetToken(Cobol85PreprocessorParser.BIN, 0); };
    CompilerOptionContext.prototype.VBREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.VBREF, 0); };
    CompilerOptionContext.prototype.WORD = function () { return this.tryGetToken(Cobol85PreprocessorParser.WORD, 0); };
    CompilerOptionContext.prototype.WD = function () { return this.tryGetToken(Cobol85PreprocessorParser.WD, 0); };
    CompilerOptionContext.prototype.XMLPARSE = function () { return this.tryGetToken(Cobol85PreprocessorParser.XMLPARSE, 0); };
    CompilerOptionContext.prototype.XP = function () { return this.tryGetToken(Cobol85PreprocessorParser.XP, 0); };
    CompilerOptionContext.prototype.XMLSS = function () { return this.tryGetToken(Cobol85PreprocessorParser.XMLSS, 0); };
    CompilerOptionContext.prototype.X_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.X_CHAR, 0); };
    CompilerOptionContext.prototype.XREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.XREF, 0); };
    CompilerOptionContext.prototype.SHORT = function () { return this.tryGetToken(Cobol85PreprocessorParser.SHORT, 0); };
    CompilerOptionContext.prototype.YEARWINDOW = function () { return this.tryGetToken(Cobol85PreprocessorParser.YEARWINDOW, 0); };
    CompilerOptionContext.prototype.YW = function () { return this.tryGetToken(Cobol85PreprocessorParser.YW, 0); };
    CompilerOptionContext.prototype.ZWB = function () { return this.tryGetToken(Cobol85PreprocessorParser.ZWB, 0); };
    Object.defineProperty(CompilerOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_compilerOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompilerOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterCompilerOption) {
            listener.enterCompilerOption(this);
        }
    };
    // @Override
    CompilerOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitCompilerOption) {
            listener.exitCompilerOption(this);
        }
    };
    // @Override
    CompilerOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitCompilerOption) {
            return visitor.visitCompilerOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompilerOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilerOptionContext = CompilerOptionContext;
var ExecCicsStatementContext = /** @class */ (function (_super) {
    __extends(ExecCicsStatementContext, _super);
    function ExecCicsStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExecCicsStatementContext.prototype.EXEC = function () { return this.getToken(Cobol85PreprocessorParser.EXEC, 0); };
    ExecCicsStatementContext.prototype.CICS = function () { return this.getToken(Cobol85PreprocessorParser.CICS, 0); };
    ExecCicsStatementContext.prototype.charData = function () {
        return this.getRuleContext(0, CharDataContext);
    };
    ExecCicsStatementContext.prototype.END_EXEC = function () { return this.getToken(Cobol85PreprocessorParser.END_EXEC, 0); };
    ExecCicsStatementContext.prototype.DOT = function () { return this.tryGetToken(Cobol85PreprocessorParser.DOT, 0); };
    Object.defineProperty(ExecCicsStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_execCicsStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExecCicsStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExecCicsStatement) {
            listener.enterExecCicsStatement(this);
        }
    };
    // @Override
    ExecCicsStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExecCicsStatement) {
            listener.exitExecCicsStatement(this);
        }
    };
    // @Override
    ExecCicsStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExecCicsStatement) {
            return visitor.visitExecCicsStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExecCicsStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExecCicsStatementContext = ExecCicsStatementContext;
var ExecSqlStatementContext = /** @class */ (function (_super) {
    __extends(ExecSqlStatementContext, _super);
    function ExecSqlStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExecSqlStatementContext.prototype.EXEC = function () { return this.getToken(Cobol85PreprocessorParser.EXEC, 0); };
    ExecSqlStatementContext.prototype.SQL = function () { return this.getToken(Cobol85PreprocessorParser.SQL, 0); };
    ExecSqlStatementContext.prototype.charDataSql = function () {
        return this.getRuleContext(0, CharDataSqlContext);
    };
    ExecSqlStatementContext.prototype.END_EXEC = function () { return this.getToken(Cobol85PreprocessorParser.END_EXEC, 0); };
    ExecSqlStatementContext.prototype.DOT = function () { return this.tryGetToken(Cobol85PreprocessorParser.DOT, 0); };
    Object.defineProperty(ExecSqlStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_execSqlStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExecSqlStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExecSqlStatement) {
            listener.enterExecSqlStatement(this);
        }
    };
    // @Override
    ExecSqlStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExecSqlStatement) {
            listener.exitExecSqlStatement(this);
        }
    };
    // @Override
    ExecSqlStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExecSqlStatement) {
            return visitor.visitExecSqlStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExecSqlStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExecSqlStatementContext = ExecSqlStatementContext;
var ExecSqlImsStatementContext = /** @class */ (function (_super) {
    __extends(ExecSqlImsStatementContext, _super);
    function ExecSqlImsStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExecSqlImsStatementContext.prototype.EXEC = function () { return this.getToken(Cobol85PreprocessorParser.EXEC, 0); };
    ExecSqlImsStatementContext.prototype.SQLIMS = function () { return this.getToken(Cobol85PreprocessorParser.SQLIMS, 0); };
    ExecSqlImsStatementContext.prototype.charData = function () {
        return this.getRuleContext(0, CharDataContext);
    };
    ExecSqlImsStatementContext.prototype.END_EXEC = function () { return this.getToken(Cobol85PreprocessorParser.END_EXEC, 0); };
    ExecSqlImsStatementContext.prototype.DOT = function () { return this.tryGetToken(Cobol85PreprocessorParser.DOT, 0); };
    Object.defineProperty(ExecSqlImsStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_execSqlImsStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExecSqlImsStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExecSqlImsStatement) {
            listener.enterExecSqlImsStatement(this);
        }
    };
    // @Override
    ExecSqlImsStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExecSqlImsStatement) {
            listener.exitExecSqlImsStatement(this);
        }
    };
    // @Override
    ExecSqlImsStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExecSqlImsStatement) {
            return visitor.visitExecSqlImsStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExecSqlImsStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExecSqlImsStatementContext = ExecSqlImsStatementContext;
var CopyStatementContext = /** @class */ (function (_super) {
    __extends(CopyStatementContext, _super);
    function CopyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CopyStatementContext.prototype.COPY = function () { return this.getToken(Cobol85PreprocessorParser.COPY, 0); };
    CopyStatementContext.prototype.copySource = function () {
        return this.getRuleContext(0, CopySourceContext);
    };
    CopyStatementContext.prototype.DOT = function () { return this.getToken(Cobol85PreprocessorParser.DOT, 0); };
    CopyStatementContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    CopyStatementContext.prototype.directoryPhrase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DirectoryPhraseContext);
        }
        else {
            return this.getRuleContext(i, DirectoryPhraseContext);
        }
    };
    CopyStatementContext.prototype.familyPhrase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FamilyPhraseContext);
        }
        else {
            return this.getRuleContext(i, FamilyPhraseContext);
        }
    };
    CopyStatementContext.prototype.replacingPhrase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReplacingPhraseContext);
        }
        else {
            return this.getRuleContext(i, ReplacingPhraseContext);
        }
    };
    CopyStatementContext.prototype.SUPPRESS = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.SUPPRESS);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.SUPPRESS, i);
        }
    };
    Object.defineProperty(CopyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_copyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CopyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCopyStatement) {
            listener.enterCopyStatement(this);
        }
    };
    // @Override
    CopyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCopyStatement) {
            listener.exitCopyStatement(this);
        }
    };
    // @Override
    CopyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCopyStatement) {
            return visitor.visitCopyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CopyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CopyStatementContext = CopyStatementContext;
var CopySourceContext = /** @class */ (function (_super) {
    __extends(CopySourceContext, _super);
    function CopySourceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CopySourceContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    CopySourceContext.prototype.cobolWord = function () {
        return this.tryGetRuleContext(0, CobolWordContext);
    };
    CopySourceContext.prototype.filename = function () {
        return this.tryGetRuleContext(0, FilenameContext);
    };
    CopySourceContext.prototype.copyLibrary = function () {
        return this.tryGetRuleContext(0, CopyLibraryContext);
    };
    CopySourceContext.prototype.OF = function () { return this.tryGetToken(Cobol85PreprocessorParser.OF, 0); };
    CopySourceContext.prototype.IN = function () { return this.tryGetToken(Cobol85PreprocessorParser.IN, 0); };
    Object.defineProperty(CopySourceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_copySource; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CopySourceContext.prototype.enterRule = function (listener) {
        if (listener.enterCopySource) {
            listener.enterCopySource(this);
        }
    };
    // @Override
    CopySourceContext.prototype.exitRule = function (listener) {
        if (listener.exitCopySource) {
            listener.exitCopySource(this);
        }
    };
    // @Override
    CopySourceContext.prototype.accept = function (visitor) {
        if (visitor.visitCopySource) {
            return visitor.visitCopySource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CopySourceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CopySourceContext = CopySourceContext;
var CopyLibraryContext = /** @class */ (function (_super) {
    __extends(CopyLibraryContext, _super);
    function CopyLibraryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CopyLibraryContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    CopyLibraryContext.prototype.cobolWord = function () {
        return this.tryGetRuleContext(0, CobolWordContext);
    };
    Object.defineProperty(CopyLibraryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_copyLibrary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CopyLibraryContext.prototype.enterRule = function (listener) {
        if (listener.enterCopyLibrary) {
            listener.enterCopyLibrary(this);
        }
    };
    // @Override
    CopyLibraryContext.prototype.exitRule = function (listener) {
        if (listener.exitCopyLibrary) {
            listener.exitCopyLibrary(this);
        }
    };
    // @Override
    CopyLibraryContext.prototype.accept = function (visitor) {
        if (visitor.visitCopyLibrary) {
            return visitor.visitCopyLibrary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CopyLibraryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CopyLibraryContext = CopyLibraryContext;
var ReplacingPhraseContext = /** @class */ (function (_super) {
    __extends(ReplacingPhraseContext, _super);
    function ReplacingPhraseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplacingPhraseContext.prototype.REPLACING = function () { return this.getToken(Cobol85PreprocessorParser.REPLACING, 0); };
    ReplacingPhraseContext.prototype.replaceClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReplaceClauseContext);
        }
        else {
            return this.getRuleContext(i, ReplaceClauseContext);
        }
    };
    ReplacingPhraseContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    Object.defineProperty(ReplacingPhraseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_replacingPhrase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplacingPhraseContext.prototype.enterRule = function (listener) {
        if (listener.enterReplacingPhrase) {
            listener.enterReplacingPhrase(this);
        }
    };
    // @Override
    ReplacingPhraseContext.prototype.exitRule = function (listener) {
        if (listener.exitReplacingPhrase) {
            listener.exitReplacingPhrase(this);
        }
    };
    // @Override
    ReplacingPhraseContext.prototype.accept = function (visitor) {
        if (visitor.visitReplacingPhrase) {
            return visitor.visitReplacingPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplacingPhraseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplacingPhraseContext = ReplacingPhraseContext;
var ReplaceAreaContext = /** @class */ (function (_super) {
    __extends(ReplaceAreaContext, _super);
    function ReplaceAreaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplaceAreaContext.prototype.replaceByStatement = function () {
        return this.getRuleContext(0, ReplaceByStatementContext);
    };
    ReplaceAreaContext.prototype.copyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CopyStatementContext);
        }
        else {
            return this.getRuleContext(i, CopyStatementContext);
        }
    };
    ReplaceAreaContext.prototype.charData = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharDataContext);
        }
        else {
            return this.getRuleContext(i, CharDataContext);
        }
    };
    ReplaceAreaContext.prototype.replaceOffStatement = function () {
        return this.tryGetRuleContext(0, ReplaceOffStatementContext);
    };
    Object.defineProperty(ReplaceAreaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_replaceArea; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplaceAreaContext.prototype.enterRule = function (listener) {
        if (listener.enterReplaceArea) {
            listener.enterReplaceArea(this);
        }
    };
    // @Override
    ReplaceAreaContext.prototype.exitRule = function (listener) {
        if (listener.exitReplaceArea) {
            listener.exitReplaceArea(this);
        }
    };
    // @Override
    ReplaceAreaContext.prototype.accept = function (visitor) {
        if (visitor.visitReplaceArea) {
            return visitor.visitReplaceArea(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplaceAreaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplaceAreaContext = ReplaceAreaContext;
var ReplaceByStatementContext = /** @class */ (function (_super) {
    __extends(ReplaceByStatementContext, _super);
    function ReplaceByStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplaceByStatementContext.prototype.REPLACE = function () { return this.getToken(Cobol85PreprocessorParser.REPLACE, 0); };
    ReplaceByStatementContext.prototype.DOT = function () { return this.getToken(Cobol85PreprocessorParser.DOT, 0); };
    ReplaceByStatementContext.prototype.replaceClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReplaceClauseContext);
        }
        else {
            return this.getRuleContext(i, ReplaceClauseContext);
        }
    };
    ReplaceByStatementContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    Object.defineProperty(ReplaceByStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_replaceByStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplaceByStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReplaceByStatement) {
            listener.enterReplaceByStatement(this);
        }
    };
    // @Override
    ReplaceByStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReplaceByStatement) {
            listener.exitReplaceByStatement(this);
        }
    };
    // @Override
    ReplaceByStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReplaceByStatement) {
            return visitor.visitReplaceByStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplaceByStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplaceByStatementContext = ReplaceByStatementContext;
var ReplaceOffStatementContext = /** @class */ (function (_super) {
    __extends(ReplaceOffStatementContext, _super);
    function ReplaceOffStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplaceOffStatementContext.prototype.REPLACE = function () { return this.getToken(Cobol85PreprocessorParser.REPLACE, 0); };
    ReplaceOffStatementContext.prototype.OFF = function () { return this.getToken(Cobol85PreprocessorParser.OFF, 0); };
    ReplaceOffStatementContext.prototype.DOT = function () { return this.getToken(Cobol85PreprocessorParser.DOT, 0); };
    Object.defineProperty(ReplaceOffStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_replaceOffStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplaceOffStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReplaceOffStatement) {
            listener.enterReplaceOffStatement(this);
        }
    };
    // @Override
    ReplaceOffStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReplaceOffStatement) {
            listener.exitReplaceOffStatement(this);
        }
    };
    // @Override
    ReplaceOffStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReplaceOffStatement) {
            return visitor.visitReplaceOffStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplaceOffStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplaceOffStatementContext = ReplaceOffStatementContext;
var ReplaceClauseContext = /** @class */ (function (_super) {
    __extends(ReplaceClauseContext, _super);
    function ReplaceClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplaceClauseContext.prototype.replaceable = function () {
        return this.getRuleContext(0, ReplaceableContext);
    };
    ReplaceClauseContext.prototype.BY = function () { return this.getToken(Cobol85PreprocessorParser.BY, 0); };
    ReplaceClauseContext.prototype.replacement = function () {
        return this.getRuleContext(0, ReplacementContext);
    };
    ReplaceClauseContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    ReplaceClauseContext.prototype.directoryPhrase = function () {
        return this.tryGetRuleContext(0, DirectoryPhraseContext);
    };
    ReplaceClauseContext.prototype.familyPhrase = function () {
        return this.tryGetRuleContext(0, FamilyPhraseContext);
    };
    Object.defineProperty(ReplaceClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_replaceClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplaceClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterReplaceClause) {
            listener.enterReplaceClause(this);
        }
    };
    // @Override
    ReplaceClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitReplaceClause) {
            listener.exitReplaceClause(this);
        }
    };
    // @Override
    ReplaceClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitReplaceClause) {
            return visitor.visitReplaceClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplaceClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplaceClauseContext = ReplaceClauseContext;
var DirectoryPhraseContext = /** @class */ (function (_super) {
    __extends(DirectoryPhraseContext, _super);
    function DirectoryPhraseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectoryPhraseContext.prototype.OF = function () { return this.tryGetToken(Cobol85PreprocessorParser.OF, 0); };
    DirectoryPhraseContext.prototype.IN = function () { return this.tryGetToken(Cobol85PreprocessorParser.IN, 0); };
    DirectoryPhraseContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    DirectoryPhraseContext.prototype.cobolWord = function () {
        return this.tryGetRuleContext(0, CobolWordContext);
    };
    DirectoryPhraseContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    Object.defineProperty(DirectoryPhraseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_directoryPhrase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectoryPhraseContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectoryPhrase) {
            listener.enterDirectoryPhrase(this);
        }
    };
    // @Override
    DirectoryPhraseContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectoryPhrase) {
            listener.exitDirectoryPhrase(this);
        }
    };
    // @Override
    DirectoryPhraseContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectoryPhrase) {
            return visitor.visitDirectoryPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectoryPhraseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectoryPhraseContext = DirectoryPhraseContext;
var FamilyPhraseContext = /** @class */ (function (_super) {
    __extends(FamilyPhraseContext, _super);
    function FamilyPhraseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FamilyPhraseContext.prototype.ON = function () { return this.getToken(Cobol85PreprocessorParser.ON, 0); };
    FamilyPhraseContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    FamilyPhraseContext.prototype.cobolWord = function () {
        return this.tryGetRuleContext(0, CobolWordContext);
    };
    FamilyPhraseContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    Object.defineProperty(FamilyPhraseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_familyPhrase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FamilyPhraseContext.prototype.enterRule = function (listener) {
        if (listener.enterFamilyPhrase) {
            listener.enterFamilyPhrase(this);
        }
    };
    // @Override
    FamilyPhraseContext.prototype.exitRule = function (listener) {
        if (listener.exitFamilyPhrase) {
            listener.exitFamilyPhrase(this);
        }
    };
    // @Override
    FamilyPhraseContext.prototype.accept = function (visitor) {
        if (visitor.visitFamilyPhrase) {
            return visitor.visitFamilyPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FamilyPhraseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FamilyPhraseContext = FamilyPhraseContext;
var ReplaceableContext = /** @class */ (function (_super) {
    __extends(ReplaceableContext, _super);
    function ReplaceableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplaceableContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    ReplaceableContext.prototype.cobolWord = function () {
        return this.tryGetRuleContext(0, CobolWordContext);
    };
    ReplaceableContext.prototype.pseudoText = function () {
        return this.tryGetRuleContext(0, PseudoTextContext);
    };
    ReplaceableContext.prototype.charDataLine = function () {
        return this.tryGetRuleContext(0, CharDataLineContext);
    };
    Object.defineProperty(ReplaceableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_replaceable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplaceableContext.prototype.enterRule = function (listener) {
        if (listener.enterReplaceable) {
            listener.enterReplaceable(this);
        }
    };
    // @Override
    ReplaceableContext.prototype.exitRule = function (listener) {
        if (listener.exitReplaceable) {
            listener.exitReplaceable(this);
        }
    };
    // @Override
    ReplaceableContext.prototype.accept = function (visitor) {
        if (visitor.visitReplaceable) {
            return visitor.visitReplaceable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplaceableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplaceableContext = ReplaceableContext;
var ReplacementContext = /** @class */ (function (_super) {
    __extends(ReplacementContext, _super);
    function ReplacementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplacementContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    ReplacementContext.prototype.cobolWord = function () {
        return this.tryGetRuleContext(0, CobolWordContext);
    };
    ReplacementContext.prototype.pseudoText = function () {
        return this.tryGetRuleContext(0, PseudoTextContext);
    };
    ReplacementContext.prototype.charDataLine = function () {
        return this.tryGetRuleContext(0, CharDataLineContext);
    };
    Object.defineProperty(ReplacementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_replacement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplacementContext.prototype.enterRule = function (listener) {
        if (listener.enterReplacement) {
            listener.enterReplacement(this);
        }
    };
    // @Override
    ReplacementContext.prototype.exitRule = function (listener) {
        if (listener.exitReplacement) {
            listener.exitReplacement(this);
        }
    };
    // @Override
    ReplacementContext.prototype.accept = function (visitor) {
        if (visitor.visitReplacement) {
            return visitor.visitReplacement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplacementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplacementContext = ReplacementContext;
var EjectStatementContext = /** @class */ (function (_super) {
    __extends(EjectStatementContext, _super);
    function EjectStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EjectStatementContext.prototype.EJECT = function () { return this.getToken(Cobol85PreprocessorParser.EJECT, 0); };
    EjectStatementContext.prototype.DOT = function () { return this.tryGetToken(Cobol85PreprocessorParser.DOT, 0); };
    Object.defineProperty(EjectStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_ejectStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EjectStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEjectStatement) {
            listener.enterEjectStatement(this);
        }
    };
    // @Override
    EjectStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEjectStatement) {
            listener.exitEjectStatement(this);
        }
    };
    // @Override
    EjectStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEjectStatement) {
            return visitor.visitEjectStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EjectStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EjectStatementContext = EjectStatementContext;
var SkipStatementContext = /** @class */ (function (_super) {
    __extends(SkipStatementContext, _super);
    function SkipStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SkipStatementContext.prototype.SKIP1 = function () { return this.tryGetToken(Cobol85PreprocessorParser.SKIP1, 0); };
    SkipStatementContext.prototype.SKIP2 = function () { return this.tryGetToken(Cobol85PreprocessorParser.SKIP2, 0); };
    SkipStatementContext.prototype.SKIP3 = function () { return this.tryGetToken(Cobol85PreprocessorParser.SKIP3, 0); };
    SkipStatementContext.prototype.DOT = function () { return this.tryGetToken(Cobol85PreprocessorParser.DOT, 0); };
    Object.defineProperty(SkipStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_skipStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SkipStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSkipStatement) {
            listener.enterSkipStatement(this);
        }
    };
    // @Override
    SkipStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSkipStatement) {
            listener.exitSkipStatement(this);
        }
    };
    // @Override
    SkipStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSkipStatement) {
            return visitor.visitSkipStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SkipStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SkipStatementContext = SkipStatementContext;
var TitleStatementContext = /** @class */ (function (_super) {
    __extends(TitleStatementContext, _super);
    function TitleStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TitleStatementContext.prototype.TITLE = function () { return this.getToken(Cobol85PreprocessorParser.TITLE, 0); };
    TitleStatementContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    TitleStatementContext.prototype.DOT = function () { return this.tryGetToken(Cobol85PreprocessorParser.DOT, 0); };
    Object.defineProperty(TitleStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_titleStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TitleStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTitleStatement) {
            listener.enterTitleStatement(this);
        }
    };
    // @Override
    TitleStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTitleStatement) {
            listener.exitTitleStatement(this);
        }
    };
    // @Override
    TitleStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTitleStatement) {
            return visitor.visitTitleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TitleStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TitleStatementContext = TitleStatementContext;
var PseudoTextContext = /** @class */ (function (_super) {
    __extends(PseudoTextContext, _super);
    function PseudoTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PseudoTextContext.prototype.DOUBLEEQUALCHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.DOUBLEEQUALCHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.DOUBLEEQUALCHAR, i);
        }
    };
    PseudoTextContext.prototype.charData = function () {
        return this.tryGetRuleContext(0, CharDataContext);
    };
    Object.defineProperty(PseudoTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_pseudoText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PseudoTextContext.prototype.enterRule = function (listener) {
        if (listener.enterPseudoText) {
            listener.enterPseudoText(this);
        }
    };
    // @Override
    PseudoTextContext.prototype.exitRule = function (listener) {
        if (listener.exitPseudoText) {
            listener.exitPseudoText(this);
        }
    };
    // @Override
    PseudoTextContext.prototype.accept = function (visitor) {
        if (visitor.visitPseudoText) {
            return visitor.visitPseudoText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PseudoTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PseudoTextContext = PseudoTextContext;
var CharDataContext = /** @class */ (function (_super) {
    __extends(CharDataContext, _super);
    function CharDataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharDataContext.prototype.charDataLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharDataLineContext);
        }
        else {
            return this.getRuleContext(i, CharDataLineContext);
        }
    };
    CharDataContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    Object.defineProperty(CharDataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_charData; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharDataContext.prototype.enterRule = function (listener) {
        if (listener.enterCharData) {
            listener.enterCharData(this);
        }
    };
    // @Override
    CharDataContext.prototype.exitRule = function (listener) {
        if (listener.exitCharData) {
            listener.exitCharData(this);
        }
    };
    // @Override
    CharDataContext.prototype.accept = function (visitor) {
        if (visitor.visitCharData) {
            return visitor.visitCharData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharDataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharDataContext = CharDataContext;
var CharDataSqlContext = /** @class */ (function (_super) {
    __extends(CharDataSqlContext, _super);
    function CharDataSqlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharDataSqlContext.prototype.charDataLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharDataLineContext);
        }
        else {
            return this.getRuleContext(i, CharDataLineContext);
        }
    };
    CharDataSqlContext.prototype.COPY = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.COPY);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.COPY, i);
        }
    };
    CharDataSqlContext.prototype.REPLACE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.REPLACE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.REPLACE, i);
        }
    };
    CharDataSqlContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.NEWLINE);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.NEWLINE, i);
        }
    };
    Object.defineProperty(CharDataSqlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_charDataSql; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharDataSqlContext.prototype.enterRule = function (listener) {
        if (listener.enterCharDataSql) {
            listener.enterCharDataSql(this);
        }
    };
    // @Override
    CharDataSqlContext.prototype.exitRule = function (listener) {
        if (listener.exitCharDataSql) {
            listener.exitCharDataSql(this);
        }
    };
    // @Override
    CharDataSqlContext.prototype.accept = function (visitor) {
        if (visitor.visitCharDataSql) {
            return visitor.visitCharDataSql(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharDataSqlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharDataSqlContext = CharDataSqlContext;
var CharDataLineContext = /** @class */ (function (_super) {
    __extends(CharDataLineContext, _super);
    function CharDataLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharDataLineContext.prototype.cobolWord = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CobolWordContext);
        }
        else {
            return this.getRuleContext(i, CobolWordContext);
        }
    };
    CharDataLineContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    CharDataLineContext.prototype.filename = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FilenameContext);
        }
        else {
            return this.getRuleContext(i, FilenameContext);
        }
    };
    CharDataLineContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.TEXT);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.TEXT, i);
        }
    };
    CharDataLineContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.DOT);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.DOT, i);
        }
    };
    CharDataLineContext.prototype.LPARENCHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.LPARENCHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.LPARENCHAR, i);
        }
    };
    CharDataLineContext.prototype.RPARENCHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Cobol85PreprocessorParser.RPARENCHAR);
        }
        else {
            return this.getToken(Cobol85PreprocessorParser.RPARENCHAR, i);
        }
    };
    Object.defineProperty(CharDataLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_charDataLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharDataLineContext.prototype.enterRule = function (listener) {
        if (listener.enterCharDataLine) {
            listener.enterCharDataLine(this);
        }
    };
    // @Override
    CharDataLineContext.prototype.exitRule = function (listener) {
        if (listener.exitCharDataLine) {
            listener.exitCharDataLine(this);
        }
    };
    // @Override
    CharDataLineContext.prototype.accept = function (visitor) {
        if (visitor.visitCharDataLine) {
            return visitor.visitCharDataLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharDataLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharDataLineContext = CharDataLineContext;
var CobolWordContext = /** @class */ (function (_super) {
    __extends(CobolWordContext, _super);
    function CobolWordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CobolWordContext.prototype.IDENTIFIER = function () { return this.tryGetToken(Cobol85PreprocessorParser.IDENTIFIER, 0); };
    CobolWordContext.prototype.charDataKeyword = function () {
        return this.tryGetRuleContext(0, CharDataKeywordContext);
    };
    Object.defineProperty(CobolWordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_cobolWord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CobolWordContext.prototype.enterRule = function (listener) {
        if (listener.enterCobolWord) {
            listener.enterCobolWord(this);
        }
    };
    // @Override
    CobolWordContext.prototype.exitRule = function (listener) {
        if (listener.exitCobolWord) {
            listener.exitCobolWord(this);
        }
    };
    // @Override
    CobolWordContext.prototype.accept = function (visitor) {
        if (visitor.visitCobolWord) {
            return visitor.visitCobolWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CobolWordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CobolWordContext = CobolWordContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.NONNUMERICLITERAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NONNUMERICLITERAL, 0); };
    LiteralContext.prototype.NUMERICLITERAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NUMERICLITERAL, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_literal; },
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
var FilenameContext = /** @class */ (function (_super) {
    __extends(FilenameContext, _super);
    function FilenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FilenameContext.prototype.FILENAME = function () { return this.getToken(Cobol85PreprocessorParser.FILENAME, 0); };
    Object.defineProperty(FilenameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_filename; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FilenameContext.prototype.enterRule = function (listener) {
        if (listener.enterFilename) {
            listener.enterFilename(this);
        }
    };
    // @Override
    FilenameContext.prototype.exitRule = function (listener) {
        if (listener.exitFilename) {
            listener.exitFilename(this);
        }
    };
    // @Override
    FilenameContext.prototype.accept = function (visitor) {
        if (visitor.visitFilename) {
            return visitor.visitFilename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FilenameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FilenameContext = FilenameContext;
var CharDataKeywordContext = /** @class */ (function (_super) {
    __extends(CharDataKeywordContext, _super);
    function CharDataKeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharDataKeywordContext.prototype.ADATA = function () { return this.tryGetToken(Cobol85PreprocessorParser.ADATA, 0); };
    CharDataKeywordContext.prototype.ADV = function () { return this.tryGetToken(Cobol85PreprocessorParser.ADV, 0); };
    CharDataKeywordContext.prototype.ALIAS = function () { return this.tryGetToken(Cobol85PreprocessorParser.ALIAS, 0); };
    CharDataKeywordContext.prototype.ANSI = function () { return this.tryGetToken(Cobol85PreprocessorParser.ANSI, 0); };
    CharDataKeywordContext.prototype.ANY = function () { return this.tryGetToken(Cobol85PreprocessorParser.ANY, 0); };
    CharDataKeywordContext.prototype.APOST = function () { return this.tryGetToken(Cobol85PreprocessorParser.APOST, 0); };
    CharDataKeywordContext.prototype.AR = function () { return this.tryGetToken(Cobol85PreprocessorParser.AR, 0); };
    CharDataKeywordContext.prototype.ARITH = function () { return this.tryGetToken(Cobol85PreprocessorParser.ARITH, 0); };
    CharDataKeywordContext.prototype.AUTO = function () { return this.tryGetToken(Cobol85PreprocessorParser.AUTO, 0); };
    CharDataKeywordContext.prototype.AWO = function () { return this.tryGetToken(Cobol85PreprocessorParser.AWO, 0); };
    CharDataKeywordContext.prototype.BIN = function () { return this.tryGetToken(Cobol85PreprocessorParser.BIN, 0); };
    CharDataKeywordContext.prototype.BLOCK0 = function () { return this.tryGetToken(Cobol85PreprocessorParser.BLOCK0, 0); };
    CharDataKeywordContext.prototype.BUF = function () { return this.tryGetToken(Cobol85PreprocessorParser.BUF, 0); };
    CharDataKeywordContext.prototype.BUFSIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.BUFSIZE, 0); };
    CharDataKeywordContext.prototype.BY = function () { return this.tryGetToken(Cobol85PreprocessorParser.BY, 0); };
    CharDataKeywordContext.prototype.CBL = function () { return this.tryGetToken(Cobol85PreprocessorParser.CBL, 0); };
    CharDataKeywordContext.prototype.CBLCARD = function () { return this.tryGetToken(Cobol85PreprocessorParser.CBLCARD, 0); };
    CharDataKeywordContext.prototype.CO = function () { return this.tryGetToken(Cobol85PreprocessorParser.CO, 0); };
    CharDataKeywordContext.prototype.COBOL2 = function () { return this.tryGetToken(Cobol85PreprocessorParser.COBOL2, 0); };
    CharDataKeywordContext.prototype.COBOL3 = function () { return this.tryGetToken(Cobol85PreprocessorParser.COBOL3, 0); };
    CharDataKeywordContext.prototype.CODEPAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.CODEPAGE, 0); };
    CharDataKeywordContext.prototype.COMMACHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.COMMACHAR, 0); };
    CharDataKeywordContext.prototype.COMPAT = function () { return this.tryGetToken(Cobol85PreprocessorParser.COMPAT, 0); };
    CharDataKeywordContext.prototype.COMPILE = function () { return this.tryGetToken(Cobol85PreprocessorParser.COMPILE, 0); };
    CharDataKeywordContext.prototype.CP = function () { return this.tryGetToken(Cobol85PreprocessorParser.CP, 0); };
    CharDataKeywordContext.prototype.CPP = function () { return this.tryGetToken(Cobol85PreprocessorParser.CPP, 0); };
    CharDataKeywordContext.prototype.CPSM = function () { return this.tryGetToken(Cobol85PreprocessorParser.CPSM, 0); };
    CharDataKeywordContext.prototype.CS = function () { return this.tryGetToken(Cobol85PreprocessorParser.CS, 0); };
    CharDataKeywordContext.prototype.CURR = function () { return this.tryGetToken(Cobol85PreprocessorParser.CURR, 0); };
    CharDataKeywordContext.prototype.CURRENCY = function () { return this.tryGetToken(Cobol85PreprocessorParser.CURRENCY, 0); };
    CharDataKeywordContext.prototype.DATA = function () { return this.tryGetToken(Cobol85PreprocessorParser.DATA, 0); };
    CharDataKeywordContext.prototype.DATEPROC = function () { return this.tryGetToken(Cobol85PreprocessorParser.DATEPROC, 0); };
    CharDataKeywordContext.prototype.DBCS = function () { return this.tryGetToken(Cobol85PreprocessorParser.DBCS, 0); };
    CharDataKeywordContext.prototype.DD = function () { return this.tryGetToken(Cobol85PreprocessorParser.DD, 0); };
    CharDataKeywordContext.prototype.DEBUG = function () { return this.tryGetToken(Cobol85PreprocessorParser.DEBUG, 0); };
    CharDataKeywordContext.prototype.DECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.DECK, 0); };
    CharDataKeywordContext.prototype.DIAGTRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.DIAGTRUNC, 0); };
    CharDataKeywordContext.prototype.DLI = function () { return this.tryGetToken(Cobol85PreprocessorParser.DLI, 0); };
    CharDataKeywordContext.prototype.DLL = function () { return this.tryGetToken(Cobol85PreprocessorParser.DLL, 0); };
    CharDataKeywordContext.prototype.DP = function () { return this.tryGetToken(Cobol85PreprocessorParser.DP, 0); };
    CharDataKeywordContext.prototype.DTR = function () { return this.tryGetToken(Cobol85PreprocessorParser.DTR, 0); };
    CharDataKeywordContext.prototype.DU = function () { return this.tryGetToken(Cobol85PreprocessorParser.DU, 0); };
    CharDataKeywordContext.prototype.DUMP = function () { return this.tryGetToken(Cobol85PreprocessorParser.DUMP, 0); };
    CharDataKeywordContext.prototype.DYN = function () { return this.tryGetToken(Cobol85PreprocessorParser.DYN, 0); };
    CharDataKeywordContext.prototype.DYNAM = function () { return this.tryGetToken(Cobol85PreprocessorParser.DYNAM, 0); };
    CharDataKeywordContext.prototype.EDF = function () { return this.tryGetToken(Cobol85PreprocessorParser.EDF, 0); };
    CharDataKeywordContext.prototype.EJECT = function () { return this.tryGetToken(Cobol85PreprocessorParser.EJECT, 0); };
    CharDataKeywordContext.prototype.EJPD = function () { return this.tryGetToken(Cobol85PreprocessorParser.EJPD, 0); };
    CharDataKeywordContext.prototype.EN = function () { return this.tryGetToken(Cobol85PreprocessorParser.EN, 0); };
    CharDataKeywordContext.prototype.ENGLISH = function () { return this.tryGetToken(Cobol85PreprocessorParser.ENGLISH, 0); };
    CharDataKeywordContext.prototype.EPILOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.EPILOG, 0); };
    CharDataKeywordContext.prototype.EXCI = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXCI, 0); };
    CharDataKeywordContext.prototype.EXIT = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXIT, 0); };
    CharDataKeywordContext.prototype.EXP = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXP, 0); };
    CharDataKeywordContext.prototype.EXPORTALL = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXPORTALL, 0); };
    CharDataKeywordContext.prototype.EXTEND = function () { return this.tryGetToken(Cobol85PreprocessorParser.EXTEND, 0); };
    CharDataKeywordContext.prototype.FASTSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.FASTSRT, 0); };
    CharDataKeywordContext.prototype.FLAG = function () { return this.tryGetToken(Cobol85PreprocessorParser.FLAG, 0); };
    CharDataKeywordContext.prototype.FLAGSTD = function () { return this.tryGetToken(Cobol85PreprocessorParser.FLAGSTD, 0); };
    CharDataKeywordContext.prototype.FULL = function () { return this.tryGetToken(Cobol85PreprocessorParser.FULL, 0); };
    CharDataKeywordContext.prototype.FSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.FSRT, 0); };
    CharDataKeywordContext.prototype.GDS = function () { return this.tryGetToken(Cobol85PreprocessorParser.GDS, 0); };
    CharDataKeywordContext.prototype.GRAPHIC = function () { return this.tryGetToken(Cobol85PreprocessorParser.GRAPHIC, 0); };
    CharDataKeywordContext.prototype.HOOK = function () { return this.tryGetToken(Cobol85PreprocessorParser.HOOK, 0); };
    CharDataKeywordContext.prototype.IN = function () { return this.tryGetToken(Cobol85PreprocessorParser.IN, 0); };
    CharDataKeywordContext.prototype.INTDATE = function () { return this.tryGetToken(Cobol85PreprocessorParser.INTDATE, 0); };
    CharDataKeywordContext.prototype.JA = function () { return this.tryGetToken(Cobol85PreprocessorParser.JA, 0); };
    CharDataKeywordContext.prototype.JP = function () { return this.tryGetToken(Cobol85PreprocessorParser.JP, 0); };
    CharDataKeywordContext.prototype.KA = function () { return this.tryGetToken(Cobol85PreprocessorParser.KA, 0); };
    CharDataKeywordContext.prototype.LANG = function () { return this.tryGetToken(Cobol85PreprocessorParser.LANG, 0); };
    CharDataKeywordContext.prototype.LANGUAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.LANGUAGE, 0); };
    CharDataKeywordContext.prototype.LC = function () { return this.tryGetToken(Cobol85PreprocessorParser.LC, 0); };
    CharDataKeywordContext.prototype.LENGTH = function () { return this.tryGetToken(Cobol85PreprocessorParser.LENGTH, 0); };
    CharDataKeywordContext.prototype.LIB = function () { return this.tryGetToken(Cobol85PreprocessorParser.LIB, 0); };
    CharDataKeywordContext.prototype.LILIAN = function () { return this.tryGetToken(Cobol85PreprocessorParser.LILIAN, 0); };
    CharDataKeywordContext.prototype.LIN = function () { return this.tryGetToken(Cobol85PreprocessorParser.LIN, 0); };
    CharDataKeywordContext.prototype.LINECOUNT = function () { return this.tryGetToken(Cobol85PreprocessorParser.LINECOUNT, 0); };
    CharDataKeywordContext.prototype.LINKAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.LINKAGE, 0); };
    CharDataKeywordContext.prototype.LIST = function () { return this.tryGetToken(Cobol85PreprocessorParser.LIST, 0); };
    CharDataKeywordContext.prototype.LM = function () { return this.tryGetToken(Cobol85PreprocessorParser.LM, 0); };
    CharDataKeywordContext.prototype.LONGMIXED = function () { return this.tryGetToken(Cobol85PreprocessorParser.LONGMIXED, 0); };
    CharDataKeywordContext.prototype.LONGUPPER = function () { return this.tryGetToken(Cobol85PreprocessorParser.LONGUPPER, 0); };
    CharDataKeywordContext.prototype.LU = function () { return this.tryGetToken(Cobol85PreprocessorParser.LU, 0); };
    CharDataKeywordContext.prototype.MAP = function () { return this.tryGetToken(Cobol85PreprocessorParser.MAP, 0); };
    CharDataKeywordContext.prototype.MARGINS = function () { return this.tryGetToken(Cobol85PreprocessorParser.MARGINS, 0); };
    CharDataKeywordContext.prototype.MAX = function () { return this.tryGetToken(Cobol85PreprocessorParser.MAX, 0); };
    CharDataKeywordContext.prototype.MD = function () { return this.tryGetToken(Cobol85PreprocessorParser.MD, 0); };
    CharDataKeywordContext.prototype.MDECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.MDECK, 0); };
    CharDataKeywordContext.prototype.MIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.MIG, 0); };
    CharDataKeywordContext.prototype.MIXED = function () { return this.tryGetToken(Cobol85PreprocessorParser.MIXED, 0); };
    CharDataKeywordContext.prototype.NAME = function () { return this.tryGetToken(Cobol85PreprocessorParser.NAME, 0); };
    CharDataKeywordContext.prototype.NAT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NAT, 0); };
    CharDataKeywordContext.prototype.NATIONAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NATIONAL, 0); };
    CharDataKeywordContext.prototype.NATLANG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NATLANG, 0); };
    CharDataKeywordContext.prototype.NN = function () { return this.tryGetToken(Cobol85PreprocessorParser.NN, 0); };
    CharDataKeywordContext.prototype.NO = function () { return this.tryGetToken(Cobol85PreprocessorParser.NO, 0); };
    CharDataKeywordContext.prototype.NOADATA = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOADATA, 0); };
    CharDataKeywordContext.prototype.NOADV = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOADV, 0); };
    CharDataKeywordContext.prototype.NOALIAS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOALIAS, 0); };
    CharDataKeywordContext.prototype.NOAWO = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOAWO, 0); };
    CharDataKeywordContext.prototype.NOBLOCK0 = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOBLOCK0, 0); };
    CharDataKeywordContext.prototype.NOC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOC, 0); };
    CharDataKeywordContext.prototype.NOCBLCARD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCBLCARD, 0); };
    CharDataKeywordContext.prototype.NOCICS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCICS, 0); };
    CharDataKeywordContext.prototype.NOCMPR2 = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCMPR2, 0); };
    CharDataKeywordContext.prototype.NOCOMPILE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCOMPILE, 0); };
    CharDataKeywordContext.prototype.NOCPSM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCPSM, 0); };
    CharDataKeywordContext.prototype.NOCURR = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCURR, 0); };
    CharDataKeywordContext.prototype.NOCURRENCY = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOCURRENCY, 0); };
    CharDataKeywordContext.prototype.NOD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOD, 0); };
    CharDataKeywordContext.prototype.NODATEPROC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODATEPROC, 0); };
    CharDataKeywordContext.prototype.NODBCS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODBCS, 0); };
    CharDataKeywordContext.prototype.NODE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODE, 0); };
    CharDataKeywordContext.prototype.NODEBUG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODEBUG, 0); };
    CharDataKeywordContext.prototype.NODECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODECK, 0); };
    CharDataKeywordContext.prototype.NODIAGTRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODIAGTRUNC, 0); };
    CharDataKeywordContext.prototype.NODLL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODLL, 0); };
    CharDataKeywordContext.prototype.NODU = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODU, 0); };
    CharDataKeywordContext.prototype.NODUMP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODUMP, 0); };
    CharDataKeywordContext.prototype.NODP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODP, 0); };
    CharDataKeywordContext.prototype.NODTR = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODTR, 0); };
    CharDataKeywordContext.prototype.NODYN = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODYN, 0); };
    CharDataKeywordContext.prototype.NODYNAM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NODYNAM, 0); };
    CharDataKeywordContext.prototype.NOEDF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEDF, 0); };
    CharDataKeywordContext.prototype.NOEJPD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEJPD, 0); };
    CharDataKeywordContext.prototype.NOEPILOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEPILOG, 0); };
    CharDataKeywordContext.prototype.NOEXIT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEXIT, 0); };
    CharDataKeywordContext.prototype.NOEXP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEXP, 0); };
    CharDataKeywordContext.prototype.NOEXPORTALL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOEXPORTALL, 0); };
    CharDataKeywordContext.prototype.NOF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOF, 0); };
    CharDataKeywordContext.prototype.NOFASTSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFASTSRT, 0); };
    CharDataKeywordContext.prototype.NOFEPI = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFEPI, 0); };
    CharDataKeywordContext.prototype.NOFLAG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFLAG, 0); };
    CharDataKeywordContext.prototype.NOFLAGMIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFLAGMIG, 0); };
    CharDataKeywordContext.prototype.NOFLAGSTD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFLAGSTD, 0); };
    CharDataKeywordContext.prototype.NOFSRT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOFSRT, 0); };
    CharDataKeywordContext.prototype.NOGRAPHIC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOGRAPHIC, 0); };
    CharDataKeywordContext.prototype.NOHOOK = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOHOOK, 0); };
    CharDataKeywordContext.prototype.NOLENGTH = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLENGTH, 0); };
    CharDataKeywordContext.prototype.NOLIB = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLIB, 0); };
    CharDataKeywordContext.prototype.NOLINKAGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLINKAGE, 0); };
    CharDataKeywordContext.prototype.NOLIST = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOLIST, 0); };
    CharDataKeywordContext.prototype.NOMAP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOMAP, 0); };
    CharDataKeywordContext.prototype.NOMD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOMD, 0); };
    CharDataKeywordContext.prototype.NOMDECK = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOMDECK, 0); };
    CharDataKeywordContext.prototype.NONAME = function () { return this.tryGetToken(Cobol85PreprocessorParser.NONAME, 0); };
    CharDataKeywordContext.prototype.NONUM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NONUM, 0); };
    CharDataKeywordContext.prototype.NONUMBER = function () { return this.tryGetToken(Cobol85PreprocessorParser.NONUMBER, 0); };
    CharDataKeywordContext.prototype.NOOBJ = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOBJ, 0); };
    CharDataKeywordContext.prototype.NOOBJECT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOBJECT, 0); };
    CharDataKeywordContext.prototype.NOOFF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOFF, 0); };
    CharDataKeywordContext.prototype.NOOFFSET = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOFFSET, 0); };
    CharDataKeywordContext.prototype.NOOPSEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPSEQUENCE, 0); };
    CharDataKeywordContext.prototype.NOOPT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPT, 0); };
    CharDataKeywordContext.prototype.NOOPTIMIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPTIMIZE, 0); };
    CharDataKeywordContext.prototype.NOOPTIONS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOOPTIONS, 0); };
    CharDataKeywordContext.prototype.NOP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOP, 0); };
    CharDataKeywordContext.prototype.NOPFD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOPFD, 0); };
    CharDataKeywordContext.prototype.NOPROLOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOPROLOG, 0); };
    CharDataKeywordContext.prototype.NORENT = function () { return this.tryGetToken(Cobol85PreprocessorParser.NORENT, 0); };
    CharDataKeywordContext.prototype.NOS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOS, 0); };
    CharDataKeywordContext.prototype.NOSEP = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEP, 0); };
    CharDataKeywordContext.prototype.NOSEPARATE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEPARATE, 0); };
    CharDataKeywordContext.prototype.NOSEQ = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEQ, 0); };
    CharDataKeywordContext.prototype.NOSEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSEQUENCE, 0); };
    CharDataKeywordContext.prototype.NOSOURCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSOURCE, 0); };
    CharDataKeywordContext.prototype.NOSPIE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSPIE, 0); };
    CharDataKeywordContext.prototype.NOSQL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSQL, 0); };
    CharDataKeywordContext.prototype.NOSQLC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSQLC, 0); };
    CharDataKeywordContext.prototype.NOSQLCCSID = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSQLCCSID, 0); };
    CharDataKeywordContext.prototype.NOSSR = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSSR, 0); };
    CharDataKeywordContext.prototype.NOSSRANGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSSRANGE, 0); };
    CharDataKeywordContext.prototype.NOSTDTRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOSTDTRUNC, 0); };
    CharDataKeywordContext.prototype.NOTERM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTERM, 0); };
    CharDataKeywordContext.prototype.NOTERMINAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTERMINAL, 0); };
    CharDataKeywordContext.prototype.NOTEST = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTEST, 0); };
    CharDataKeywordContext.prototype.NOTHREAD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTHREAD, 0); };
    CharDataKeywordContext.prototype.NOTRIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOTRIG, 0); };
    CharDataKeywordContext.prototype.NOVBREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOVBREF, 0); };
    CharDataKeywordContext.prototype.NOWORD = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOWORD, 0); };
    CharDataKeywordContext.prototype.NOX = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOX, 0); };
    CharDataKeywordContext.prototype.NOXREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOXREF, 0); };
    CharDataKeywordContext.prototype.NOZWB = function () { return this.tryGetToken(Cobol85PreprocessorParser.NOZWB, 0); };
    CharDataKeywordContext.prototype.NSEQ = function () { return this.tryGetToken(Cobol85PreprocessorParser.NSEQ, 0); };
    CharDataKeywordContext.prototype.NSYMBOL = function () { return this.tryGetToken(Cobol85PreprocessorParser.NSYMBOL, 0); };
    CharDataKeywordContext.prototype.NS = function () { return this.tryGetToken(Cobol85PreprocessorParser.NS, 0); };
    CharDataKeywordContext.prototype.NUM = function () { return this.tryGetToken(Cobol85PreprocessorParser.NUM, 0); };
    CharDataKeywordContext.prototype.NUMBER = function () { return this.tryGetToken(Cobol85PreprocessorParser.NUMBER, 0); };
    CharDataKeywordContext.prototype.NUMPROC = function () { return this.tryGetToken(Cobol85PreprocessorParser.NUMPROC, 0); };
    CharDataKeywordContext.prototype.OBJ = function () { return this.tryGetToken(Cobol85PreprocessorParser.OBJ, 0); };
    CharDataKeywordContext.prototype.OBJECT = function () { return this.tryGetToken(Cobol85PreprocessorParser.OBJECT, 0); };
    CharDataKeywordContext.prototype.ON = function () { return this.tryGetToken(Cobol85PreprocessorParser.ON, 0); };
    CharDataKeywordContext.prototype.OF = function () { return this.tryGetToken(Cobol85PreprocessorParser.OF, 0); };
    CharDataKeywordContext.prototype.OFF = function () { return this.tryGetToken(Cobol85PreprocessorParser.OFF, 0); };
    CharDataKeywordContext.prototype.OFFSET = function () { return this.tryGetToken(Cobol85PreprocessorParser.OFFSET, 0); };
    CharDataKeywordContext.prototype.OPMARGINS = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPMARGINS, 0); };
    CharDataKeywordContext.prototype.OPSEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPSEQUENCE, 0); };
    CharDataKeywordContext.prototype.OPTIMIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPTIMIZE, 0); };
    CharDataKeywordContext.prototype.OP = function () { return this.tryGetToken(Cobol85PreprocessorParser.OP, 0); };
    CharDataKeywordContext.prototype.OPT = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPT, 0); };
    CharDataKeywordContext.prototype.OPTFILE = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPTFILE, 0); };
    CharDataKeywordContext.prototype.OPTIONS = function () { return this.tryGetToken(Cobol85PreprocessorParser.OPTIONS, 0); };
    CharDataKeywordContext.prototype.OUT = function () { return this.tryGetToken(Cobol85PreprocessorParser.OUT, 0); };
    CharDataKeywordContext.prototype.OUTDD = function () { return this.tryGetToken(Cobol85PreprocessorParser.OUTDD, 0); };
    CharDataKeywordContext.prototype.PFD = function () { return this.tryGetToken(Cobol85PreprocessorParser.PFD, 0); };
    CharDataKeywordContext.prototype.PGMN = function () { return this.tryGetToken(Cobol85PreprocessorParser.PGMN, 0); };
    CharDataKeywordContext.prototype.PGMNAME = function () { return this.tryGetToken(Cobol85PreprocessorParser.PGMNAME, 0); };
    CharDataKeywordContext.prototype.PPTDBG = function () { return this.tryGetToken(Cobol85PreprocessorParser.PPTDBG, 0); };
    CharDataKeywordContext.prototype.PROCESS = function () { return this.tryGetToken(Cobol85PreprocessorParser.PROCESS, 0); };
    CharDataKeywordContext.prototype.PROLOG = function () { return this.tryGetToken(Cobol85PreprocessorParser.PROLOG, 0); };
    CharDataKeywordContext.prototype.QUOTE = function () { return this.tryGetToken(Cobol85PreprocessorParser.QUOTE, 0); };
    CharDataKeywordContext.prototype.RENT = function () { return this.tryGetToken(Cobol85PreprocessorParser.RENT, 0); };
    CharDataKeywordContext.prototype.REPLACING = function () { return this.tryGetToken(Cobol85PreprocessorParser.REPLACING, 0); };
    CharDataKeywordContext.prototype.RMODE = function () { return this.tryGetToken(Cobol85PreprocessorParser.RMODE, 0); };
    CharDataKeywordContext.prototype.SEQ = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEQ, 0); };
    CharDataKeywordContext.prototype.SEQUENCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEQUENCE, 0); };
    CharDataKeywordContext.prototype.SEP = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEP, 0); };
    CharDataKeywordContext.prototype.SEPARATE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SEPARATE, 0); };
    CharDataKeywordContext.prototype.SHORT = function () { return this.tryGetToken(Cobol85PreprocessorParser.SHORT, 0); };
    CharDataKeywordContext.prototype.SIZE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SIZE, 0); };
    CharDataKeywordContext.prototype.SOURCE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SOURCE, 0); };
    CharDataKeywordContext.prototype.SP = function () { return this.tryGetToken(Cobol85PreprocessorParser.SP, 0); };
    CharDataKeywordContext.prototype.SPACE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SPACE, 0); };
    CharDataKeywordContext.prototype.SPIE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SPIE, 0); };
    CharDataKeywordContext.prototype.SQL = function () { return this.tryGetToken(Cobol85PreprocessorParser.SQL, 0); };
    CharDataKeywordContext.prototype.SQLC = function () { return this.tryGetToken(Cobol85PreprocessorParser.SQLC, 0); };
    CharDataKeywordContext.prototype.SQLCCSID = function () { return this.tryGetToken(Cobol85PreprocessorParser.SQLCCSID, 0); };
    CharDataKeywordContext.prototype.SS = function () { return this.tryGetToken(Cobol85PreprocessorParser.SS, 0); };
    CharDataKeywordContext.prototype.SSR = function () { return this.tryGetToken(Cobol85PreprocessorParser.SSR, 0); };
    CharDataKeywordContext.prototype.SSRANGE = function () { return this.tryGetToken(Cobol85PreprocessorParser.SSRANGE, 0); };
    CharDataKeywordContext.prototype.STD = function () { return this.tryGetToken(Cobol85PreprocessorParser.STD, 0); };
    CharDataKeywordContext.prototype.SYSEIB = function () { return this.tryGetToken(Cobol85PreprocessorParser.SYSEIB, 0); };
    CharDataKeywordContext.prototype.SZ = function () { return this.tryGetToken(Cobol85PreprocessorParser.SZ, 0); };
    CharDataKeywordContext.prototype.TERM = function () { return this.tryGetToken(Cobol85PreprocessorParser.TERM, 0); };
    CharDataKeywordContext.prototype.TERMINAL = function () { return this.tryGetToken(Cobol85PreprocessorParser.TERMINAL, 0); };
    CharDataKeywordContext.prototype.TEST = function () { return this.tryGetToken(Cobol85PreprocessorParser.TEST, 0); };
    CharDataKeywordContext.prototype.THREAD = function () { return this.tryGetToken(Cobol85PreprocessorParser.THREAD, 0); };
    CharDataKeywordContext.prototype.TITLE = function () { return this.tryGetToken(Cobol85PreprocessorParser.TITLE, 0); };
    CharDataKeywordContext.prototype.TRIG = function () { return this.tryGetToken(Cobol85PreprocessorParser.TRIG, 0); };
    CharDataKeywordContext.prototype.TRUNC = function () { return this.tryGetToken(Cobol85PreprocessorParser.TRUNC, 0); };
    CharDataKeywordContext.prototype.UE = function () { return this.tryGetToken(Cobol85PreprocessorParser.UE, 0); };
    CharDataKeywordContext.prototype.UPPER = function () { return this.tryGetToken(Cobol85PreprocessorParser.UPPER, 0); };
    CharDataKeywordContext.prototype.VBREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.VBREF, 0); };
    CharDataKeywordContext.prototype.WD = function () { return this.tryGetToken(Cobol85PreprocessorParser.WD, 0); };
    CharDataKeywordContext.prototype.XMLPARSE = function () { return this.tryGetToken(Cobol85PreprocessorParser.XMLPARSE, 0); };
    CharDataKeywordContext.prototype.XMLSS = function () { return this.tryGetToken(Cobol85PreprocessorParser.XMLSS, 0); };
    CharDataKeywordContext.prototype.XOPTS = function () { return this.tryGetToken(Cobol85PreprocessorParser.XOPTS, 0); };
    CharDataKeywordContext.prototype.XREF = function () { return this.tryGetToken(Cobol85PreprocessorParser.XREF, 0); };
    CharDataKeywordContext.prototype.YEARWINDOW = function () { return this.tryGetToken(Cobol85PreprocessorParser.YEARWINDOW, 0); };
    CharDataKeywordContext.prototype.YW = function () { return this.tryGetToken(Cobol85PreprocessorParser.YW, 0); };
    CharDataKeywordContext.prototype.ZWB = function () { return this.tryGetToken(Cobol85PreprocessorParser.ZWB, 0); };
    CharDataKeywordContext.prototype.C_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.C_CHAR, 0); };
    CharDataKeywordContext.prototype.D_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.D_CHAR, 0); };
    CharDataKeywordContext.prototype.E_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.E_CHAR, 0); };
    CharDataKeywordContext.prototype.F_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.F_CHAR, 0); };
    CharDataKeywordContext.prototype.H_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.H_CHAR, 0); };
    CharDataKeywordContext.prototype.I_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.I_CHAR, 0); };
    CharDataKeywordContext.prototype.M_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.M_CHAR, 0); };
    CharDataKeywordContext.prototype.N_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.N_CHAR, 0); };
    CharDataKeywordContext.prototype.Q_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.Q_CHAR, 0); };
    CharDataKeywordContext.prototype.S_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.S_CHAR, 0); };
    CharDataKeywordContext.prototype.U_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.U_CHAR, 0); };
    CharDataKeywordContext.prototype.W_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.W_CHAR, 0); };
    CharDataKeywordContext.prototype.X_CHAR = function () { return this.tryGetToken(Cobol85PreprocessorParser.X_CHAR, 0); };
    Object.defineProperty(CharDataKeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Cobol85PreprocessorParser.RULE_charDataKeyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharDataKeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterCharDataKeyword) {
            listener.enterCharDataKeyword(this);
        }
    };
    // @Override
    CharDataKeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitCharDataKeyword) {
            listener.exitCharDataKeyword(this);
        }
    };
    // @Override
    CharDataKeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitCharDataKeyword) {
            return visitor.visitCharDataKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharDataKeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharDataKeywordContext = CharDataKeywordContext;
