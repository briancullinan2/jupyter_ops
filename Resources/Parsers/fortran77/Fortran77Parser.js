"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fortran77/Fortran77Parser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Fortran77Parser = /** @class */ (function (_super) {
    __extends(Fortran77Parser, _super);
    function Fortran77Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(Fortran77Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(Fortran77Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return Fortran77Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fortran77Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Fortran77Parser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fortran77Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return Fortran77Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fortran77Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return Fortran77Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    Fortran77Parser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, Fortran77Parser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 388;
                            this.executableUnit();
                        }
                    }
                    this.state = 391;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.PROGRAM) | (1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.FUNCTION) | (1 << Fortran77Parser.BLOCK) | (1 << Fortran77Parser.SUBROUTINE) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
                this.state = 396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.EOL) {
                    {
                        {
                            this.state = 393;
                            this.match(Fortran77Parser.EOL);
                        }
                    }
                    this.state = 398;
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
    Fortran77Parser.prototype.executableUnit = function () {
        var _localctx = new ExecutableUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, Fortran77Parser.RULE_executableUnit);
        try {
            this.state = 403;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 399;
                        this.functionSubprogram();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 400;
                        this.mainProgram();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 401;
                        this.subroutineSubprogram();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 402;
                        this.blockdataSubprogram();
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
    Fortran77Parser.prototype.mainProgram = function () {
        var _localctx = new MainProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, Fortran77Parser.RULE_mainProgram);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.PROGRAM) {
                    {
                        this.state = 405;
                        this.programStatement();
                    }
                }
                this.state = 408;
                this.subprogramBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.functionSubprogram = function () {
        var _localctx = new FunctionSubprogramContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, Fortran77Parser.RULE_functionSubprogram);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.functionStatement();
                this.state = 411;
                this.subprogramBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.subroutineSubprogram = function () {
        var _localctx = new SubroutineSubprogramContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, Fortran77Parser.RULE_subroutineSubprogram);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 413;
                this.subroutineStatement();
                this.state = 414;
                this.subprogramBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.blockdataSubprogram = function () {
        var _localctx = new BlockdataSubprogramContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, Fortran77Parser.RULE_blockdataSubprogram);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 416;
                this.blockdataStatement();
                this.state = 417;
                this.subprogramBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.otherSpecificationStatement = function () {
        var _localctx = new OtherSpecificationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, Fortran77Parser.RULE_otherSpecificationStatement);
        try {
            this.state = 423;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.DIMENSION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 419;
                        this.dimensionStatement();
                    }
                    break;
                case Fortran77Parser.EQUIVALENCE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 420;
                        this.equivalenceStatement();
                    }
                    break;
                case Fortran77Parser.INTRINSIC:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 421;
                        this.intrinsicStatement();
                    }
                    break;
                case Fortran77Parser.SAVE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 422;
                        this.saveStatement();
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
    Fortran77Parser.prototype.executableStatement = function () {
        var _localctx = new ExecutableStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, Fortran77Parser.RULE_executableStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 443;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.REAL:
                    case Fortran77Parser.NAME:
                        {
                            this.state = 425;
                            this.assignmentStatement();
                        }
                        break;
                    case Fortran77Parser.GO:
                    case Fortran77Parser.GOTO:
                        {
                            this.state = 426;
                            this.gotoStatement();
                        }
                        break;
                    case Fortran77Parser.IF:
                        {
                            this.state = 427;
                            this.ifStatement();
                        }
                        break;
                    case Fortran77Parser.DO:
                        {
                            this.state = 428;
                            this.doStatement();
                        }
                        break;
                    case Fortran77Parser.CONTINUE:
                        {
                            this.state = 429;
                            this.continueStatement();
                        }
                        break;
                    case Fortran77Parser.STOP:
                        {
                            this.state = 430;
                            this.stopStatement();
                        }
                        break;
                    case Fortran77Parser.PAUSE:
                        {
                            this.state = 431;
                            this.pauseStatement();
                        }
                        break;
                    case Fortran77Parser.READ:
                        {
                            this.state = 432;
                            this.readStatement();
                        }
                        break;
                    case Fortran77Parser.WRITE:
                        {
                            this.state = 433;
                            this.writeStatement();
                        }
                        break;
                    case Fortran77Parser.PRINT:
                        {
                            this.state = 434;
                            this.printStatement();
                        }
                        break;
                    case Fortran77Parser.REWIND:
                        {
                            this.state = 435;
                            this.rewindStatement();
                        }
                        break;
                    case Fortran77Parser.BACKSPACE:
                        {
                            this.state = 436;
                            this.backspaceStatement();
                        }
                        break;
                    case Fortran77Parser.OPEN:
                        {
                            this.state = 437;
                            this.openStatement();
                        }
                        break;
                    case Fortran77Parser.CLOSE:
                        {
                            this.state = 438;
                            this.closeStatement();
                        }
                        break;
                    case Fortran77Parser.ENDFILE:
                        {
                            this.state = 439;
                            this.endfileStatement();
                        }
                        break;
                    case Fortran77Parser.INQUIRE:
                        {
                            this.state = 440;
                            this.inquireStatement();
                        }
                        break;
                    case Fortran77Parser.CALL:
                        {
                            this.state = 441;
                            this.callStatement();
                        }
                        break;
                    case Fortran77Parser.RETURN:
                        {
                            this.state = 442;
                            this.returnStatement();
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
    Fortran77Parser.prototype.programStatement = function () {
        var _localctx = new ProgramStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, Fortran77Parser.RULE_programStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 445;
                this.match(Fortran77Parser.PROGRAM);
                this.state = 446;
                this.match(Fortran77Parser.NAME);
                this.state = 447;
                this.match(Fortran77Parser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.entryStatement = function () {
        var _localctx = new EntryStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, Fortran77Parser.RULE_entryStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this.match(Fortran77Parser.ENTRY);
                this.state = 450;
                this.match(Fortran77Parser.NAME);
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.LPAREN) {
                    {
                        this.state = 451;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 452;
                        this.namelist();
                        this.state = 453;
                        this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.functionStatement = function () {
        var _localctx = new FunctionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, Fortran77Parser.RULE_functionStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.REAL || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Fortran77Parser.DOUBLE - 45)) | (1 << (Fortran77Parser.ICON - 45)) | (1 << (Fortran77Parser.LPAREN - 45)) | (1 << (Fortran77Parser.MINUS - 45)) | (1 << (Fortran77Parser.PLUS - 45)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)) | (1 << (Fortran77Parser.COMPLEX - 80)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (Fortran77Parser.INTEGER - 112)) | (1 << (Fortran77Parser.LOGICAL - 112)) | (1 << (Fortran77Parser.SCON - 112)) | (1 << (Fortran77Parser.RCON - 112)) | (1 << (Fortran77Parser.NAME - 112)))) !== 0)) {
                    {
                        this.state = 457;
                        this.type();
                    }
                }
                this.state = 460;
                this.match(Fortran77Parser.FUNCTION);
                this.state = 461;
                this.match(Fortran77Parser.NAME);
                this.state = 462;
                this.match(Fortran77Parser.LPAREN);
                this.state = 464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME) {
                    {
                        this.state = 463;
                        this.namelist();
                    }
                }
                this.state = 466;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.blockdataStatement = function () {
        var _localctx = new BlockdataStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, Fortran77Parser.RULE_blockdataStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 468;
                this.match(Fortran77Parser.BLOCK);
                this.state = 469;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.subroutineStatement = function () {
        var _localctx = new SubroutineStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, Fortran77Parser.RULE_subroutineStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 471;
                this.match(Fortran77Parser.SUBROUTINE);
                this.state = 472;
                this.match(Fortran77Parser.NAME);
                this.state = 478;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 473;
                            this.match(Fortran77Parser.LPAREN);
                            this.state = 475;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME) {
                                {
                                    this.state = 474;
                                    this.namelist();
                                }
                            }
                            this.state = 477;
                            this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.namelist = function () {
        var _localctx = new NamelistContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, Fortran77Parser.RULE_namelist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 480;
                this.identifier();
                this.state = 485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 481;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 482;
                            this.identifier();
                        }
                    }
                    this.state = 487;
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
    Fortran77Parser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, Fortran77Parser.RULE_statement);
        try {
            this.state = 502;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 488;
                        this.entryStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 489;
                        this.implicitStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 490;
                        this.parameterStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 491;
                        this.typeStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 492;
                        this.commonStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 493;
                        this.pointerStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 494;
                        this.externalStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 495;
                        this.otherSpecificationStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 496;
                        this.dataStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        {
                            this.state = 497;
                            this.statementFunctionStatement();
                        }
                        this.state = 498;
                        this.statementFunctionStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 500;
                        this.executableStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 501;
                        this.commentStatement();
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
    Fortran77Parser.prototype.subprogramBody = function () {
        var _localctx = new SubprogramBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, Fortran77Parser.RULE_subprogramBody);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 504;
                                    this.wholeStatement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 507;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 509;
                this.endStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.wholeStatement = function () {
        var _localctx = new WholeStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, Fortran77Parser.RULE_wholeStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.LABEL) {
                    {
                        this.state = 511;
                        this.match(Fortran77Parser.LABEL);
                    }
                }
                this.state = 514;
                this.statement();
                this.state = 515;
                this.match(Fortran77Parser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.endStatement = function () {
        var _localctx = new EndStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, Fortran77Parser.RULE_endStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.LABEL) {
                    {
                        this.state = 517;
                        this.match(Fortran77Parser.LABEL);
                    }
                }
                this.state = 520;
                this.match(Fortran77Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.dimensionStatement = function () {
        var _localctx = new DimensionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, Fortran77Parser.RULE_dimensionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 522;
                this.match(Fortran77Parser.DIMENSION);
                this.state = 523;
                this.arrayDeclarators();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.arrayDeclarator = function () {
        var _localctx = new ArrayDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, Fortran77Parser.RULE_arrayDeclarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                _la = this._input.LA(1);
                if (!(_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 526;
                this.match(Fortran77Parser.LPAREN);
                this.state = 527;
                this.arrayDeclaratorExtents();
                this.state = 528;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.arrayDeclarators = function () {
        var _localctx = new ArrayDeclaratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, Fortran77Parser.RULE_arrayDeclarators);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this.arrayDeclarator();
                this.state = 535;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 531;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 532;
                            this.arrayDeclarator();
                        }
                    }
                    this.state = 537;
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
    Fortran77Parser.prototype.arrayDeclaratorExtents = function () {
        var _localctx = new ArrayDeclaratorExtentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, Fortran77Parser.RULE_arrayDeclaratorExtents);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 538;
                this.arrayDeclaratorExtent();
                this.state = 543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 539;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 540;
                            this.arrayDeclaratorExtent();
                        }
                    }
                    this.state = 545;
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
    Fortran77Parser.prototype.arrayDeclaratorExtent = function () {
        var _localctx = new ArrayDeclaratorExtentContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, Fortran77Parser.RULE_arrayDeclaratorExtent);
        var _la;
        try {
            this.state = 555;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 546;
                        this.iexprCode();
                        this.state = 552;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Fortran77Parser.COLON) {
                            {
                                this.state = 547;
                                this.match(Fortran77Parser.COLON);
                                this.state = 550;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Fortran77Parser.ICON:
                                    case Fortran77Parser.LPAREN:
                                    case Fortran77Parser.MINUS:
                                    case Fortran77Parser.PLUS:
                                    case Fortran77Parser.NAME:
                                        {
                                            this.state = 548;
                                            this.iexprCode();
                                        }
                                        break;
                                    case Fortran77Parser.STAR:
                                        {
                                            this.state = 549;
                                            this.match(Fortran77Parser.STAR);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                    }
                    break;
                case Fortran77Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 554;
                        this.match(Fortran77Parser.STAR);
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
    Fortran77Parser.prototype.equivalenceStatement = function () {
        var _localctx = new EquivalenceStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, Fortran77Parser.RULE_equivalenceStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 557;
                this.match(Fortran77Parser.EQUIVALENCE);
                this.state = 558;
                this.equivEntityGroup();
                this.state = 563;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 559;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 560;
                            this.equivEntityGroup();
                        }
                    }
                    this.state = 565;
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
    Fortran77Parser.prototype.equivEntityGroup = function () {
        var _localctx = new EquivEntityGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, Fortran77Parser.RULE_equivEntityGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 566;
                this.match(Fortran77Parser.LPAREN);
                this.state = 567;
                this.equivEntity();
                this.state = 572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 568;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 569;
                            this.equivEntity();
                        }
                    }
                    this.state = 574;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 575;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.equivEntity = function () {
        var _localctx = new EquivEntityContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, Fortran77Parser.RULE_equivEntity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 577;
                this.varRef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.commonStatement = function () {
        var _localctx = new CommonStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, Fortran77Parser.RULE_commonStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 579;
                this.match(Fortran77Parser.COMMON);
                this.state = 589;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.DIV:
                        {
                            this.state = 580;
                            this.commonBlock();
                            this.state = 585;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === Fortran77Parser.COMMA) {
                                {
                                    {
                                        this.state = 581;
                                        this.match(Fortran77Parser.COMMA);
                                        this.state = 582;
                                        this.commonBlock();
                                    }
                                }
                                this.state = 587;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case Fortran77Parser.REAL:
                    case Fortran77Parser.NAME:
                        {
                            this.state = 588;
                            this.commonItems();
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
    Fortran77Parser.prototype.commonName = function () {
        var _localctx = new CommonNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, Fortran77Parser.RULE_commonName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.match(Fortran77Parser.DIV);
                this.state = 595;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.NAME:
                        {
                            this.state = 592;
                            this.match(Fortran77Parser.NAME);
                            this.state = 593;
                            this.match(Fortran77Parser.DIV);
                        }
                        break;
                    case Fortran77Parser.DIV:
                        {
                            this.state = 594;
                            this.match(Fortran77Parser.DIV);
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
    Fortran77Parser.prototype.commonItem = function () {
        var _localctx = new CommonItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, Fortran77Parser.RULE_commonItem);
        try {
            this.state = 599;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 597;
                        this.match(Fortran77Parser.NAME);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 598;
                        this.arrayDeclarator();
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
    Fortran77Parser.prototype.commonItems = function () {
        var _localctx = new CommonItemsContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, Fortran77Parser.RULE_commonItems);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                this.commonItem();
                this.state = 606;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 602;
                                this.match(Fortran77Parser.COMMA);
                                this.state = 603;
                                this.commonItem();
                            }
                        }
                    }
                    this.state = 608;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
    Fortran77Parser.prototype.commonBlock = function () {
        var _localctx = new CommonBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, Fortran77Parser.RULE_commonBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 609;
                this.commonName();
                this.state = 610;
                this.commonItems();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.commentStatement = function () {
        var _localctx = new CommentStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, Fortran77Parser.RULE_commentStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 612;
                this.match(Fortran77Parser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.typeStatement = function () {
        var _localctx = new TypeStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, Fortran77Parser.RULE_typeStatement);
        try {
            this.state = 620;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 614;
                        this.typename();
                        this.state = 615;
                        this.typeStatementNameList();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 617;
                        this.characterWithLen();
                        this.state = 618;
                        this.typeStatementNameCharList();
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
    Fortran77Parser.prototype.typeStatementNameList = function () {
        var _localctx = new TypeStatementNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, Fortran77Parser.RULE_typeStatementNameList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 622;
                this.typeStatementName();
                this.state = 627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 623;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 624;
                            this.typeStatementName();
                        }
                    }
                    this.state = 629;
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
    Fortran77Parser.prototype.typeStatementName = function () {
        var _localctx = new TypeStatementNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, Fortran77Parser.RULE_typeStatementName);
        try {
            this.state = 632;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 630;
                        this.match(Fortran77Parser.NAME);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 631;
                        this.arrayDeclarator();
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
    Fortran77Parser.prototype.typeStatementNameCharList = function () {
        var _localctx = new TypeStatementNameCharListContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, Fortran77Parser.RULE_typeStatementNameCharList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 634;
                this.typeStatementNameChar();
                this.state = 639;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 635;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 636;
                            this.typeStatementNameChar();
                        }
                    }
                    this.state = 641;
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
    Fortran77Parser.prototype.typeStatementNameChar = function () {
        var _localctx = new TypeStatementNameCharContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, Fortran77Parser.RULE_typeStatementNameChar);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                this.typeStatementName();
                this.state = 644;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.STAR) {
                    {
                        this.state = 643;
                        this.typeStatementLenSpec();
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
    Fortran77Parser.prototype.typeStatementLenSpec = function () {
        var _localctx = new TypeStatementLenSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, Fortran77Parser.RULE_typeStatementLenSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 646;
                this.match(Fortran77Parser.STAR);
                this.state = 647;
                this.lenSpecification();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.typename = function () {
        var _localctx = new TypenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, Fortran77Parser.RULE_typename);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 649;
                            this.match(Fortran77Parser.REAL);
                        }
                        break;
                    case 2:
                        {
                            this.state = 650;
                            this.match(Fortran77Parser.COMPLEX);
                            this.state = 655;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Fortran77Parser.STAR) {
                                {
                                    this.state = 651;
                                    this.match(Fortran77Parser.STAR);
                                    this.state = 653;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Fortran77Parser.ICON) {
                                        {
                                            this.state = 652;
                                            this.match(Fortran77Parser.ICON);
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 657;
                            this.match(Fortran77Parser.DOUBLE);
                            this.state = 658;
                            this.match(Fortran77Parser.COMPLEX);
                        }
                        break;
                    case 4:
                        {
                            this.state = 659;
                            this.match(Fortran77Parser.DOUBLE);
                            this.state = 660;
                            this.match(Fortran77Parser.PRECISION);
                        }
                        break;
                    case 5:
                        {
                            this.state = 661;
                            this.match(Fortran77Parser.INTEGER);
                        }
                        break;
                    case 6:
                        {
                            this.state = 662;
                            this.match(Fortran77Parser.LOGICAL);
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
    Fortran77Parser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, Fortran77Parser.RULE_type);
        try {
            this.state = 667;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 665;
                        this.typename();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 666;
                        this.characterWithLen();
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
    Fortran77Parser.prototype.typenameLen = function () {
        var _localctx = new TypenameLenContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, Fortran77Parser.RULE_typenameLen);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this.match(Fortran77Parser.STAR);
                this.state = 670;
                this.match(Fortran77Parser.ICON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.pointerStatement = function () {
        var _localctx = new PointerStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, Fortran77Parser.RULE_pointerStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 672;
                this.match(Fortran77Parser.POINTER);
                this.state = 673;
                this.pointerDecl();
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 674;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 675;
                            this.pointerDecl();
                        }
                    }
                    this.state = 680;
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
    Fortran77Parser.prototype.pointerDecl = function () {
        var _localctx = new PointerDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, Fortran77Parser.RULE_pointerDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 681;
                this.match(Fortran77Parser.LPAREN);
                this.state = 682;
                this.match(Fortran77Parser.NAME);
                this.state = 683;
                this.match(Fortran77Parser.COMMA);
                this.state = 684;
                this.match(Fortran77Parser.NAME);
                this.state = 685;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.implicitStatement = function () {
        var _localctx = new ImplicitStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, Fortran77Parser.RULE_implicitStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this.match(Fortran77Parser.IMPLICIT);
                this.state = 690;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.NONE:
                        {
                            this.state = 688;
                            this.implicitNone();
                        }
                        break;
                    case Fortran77Parser.REAL:
                    case Fortran77Parser.DOUBLE:
                    case Fortran77Parser.ICON:
                    case Fortran77Parser.LPAREN:
                    case Fortran77Parser.MINUS:
                    case Fortran77Parser.PLUS:
                    case Fortran77Parser.LNOT:
                    case Fortran77Parser.TRUE:
                    case Fortran77Parser.FALSE:
                    case Fortran77Parser.HOLLERITH:
                    case Fortran77Parser.COMPLEX:
                    case Fortran77Parser.INTEGER:
                    case Fortran77Parser.LOGICAL:
                    case Fortran77Parser.SCON:
                    case Fortran77Parser.RCON:
                    case Fortran77Parser.NAME:
                        {
                            this.state = 689;
                            this.implicitSpecs();
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
    Fortran77Parser.prototype.implicitSpec = function () {
        var _localctx = new ImplicitSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, Fortran77Parser.RULE_implicitSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 692;
                this.type();
                this.state = 693;
                this.match(Fortran77Parser.LPAREN);
                this.state = 694;
                this.implicitLetters();
                this.state = 695;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.implicitSpecs = function () {
        var _localctx = new ImplicitSpecsContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, Fortran77Parser.RULE_implicitSpecs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 697;
                this.implicitSpec();
                this.state = 702;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 698;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 699;
                            this.implicitSpec();
                        }
                    }
                    this.state = 704;
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
    Fortran77Parser.prototype.implicitNone = function () {
        var _localctx = new ImplicitNoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, Fortran77Parser.RULE_implicitNone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 705;
                this.match(Fortran77Parser.NONE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.implicitLetter = function () {
        var _localctx = new ImplicitLetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, Fortran77Parser.RULE_implicitLetter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 707;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.implicitRange = function () {
        var _localctx = new ImplicitRangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, Fortran77Parser.RULE_implicitRange);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this.implicitLetter();
                this.state = 712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.MINUS) {
                    {
                        this.state = 710;
                        this.match(Fortran77Parser.MINUS);
                        this.state = 711;
                        this.implicitLetter();
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
    Fortran77Parser.prototype.implicitLetters = function () {
        var _localctx = new ImplicitLettersContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, Fortran77Parser.RULE_implicitLetters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 714;
                this.implicitRange();
                this.state = 719;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 715;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 716;
                            this.implicitRange();
                        }
                    }
                    this.state = 721;
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
    Fortran77Parser.prototype.lenSpecification = function () {
        var _localctx = new LenSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, Fortran77Parser.RULE_lenSpecification);
        try {
            this.state = 734;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 722;
                            this.match(Fortran77Parser.LPAREN);
                            this.state = 723;
                            this.match(Fortran77Parser.STAR);
                            this.state = 724;
                            this.match(Fortran77Parser.RPAREN);
                        }
                        this.state = 726;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 727;
                        this.match(Fortran77Parser.STAR);
                        this.state = 728;
                        this.match(Fortran77Parser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 729;
                        this.match(Fortran77Parser.ICON);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 730;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 731;
                        this.intConstantExpr();
                        this.state = 732;
                        this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.characterWithLen = function () {
        var _localctx = new CharacterWithLenContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, Fortran77Parser.RULE_characterWithLen);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 736;
                this.characterExpression();
                this.state = 738;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.STAR) {
                    {
                        this.state = 737;
                        this.cwlLen();
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
    Fortran77Parser.prototype.cwlLen = function () {
        var _localctx = new CwlLenContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, Fortran77Parser.RULE_cwlLen);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 740;
                this.match(Fortran77Parser.STAR);
                this.state = 741;
                this.lenSpecification();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.parameterStatement = function () {
        var _localctx = new ParameterStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, Fortran77Parser.RULE_parameterStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                this.match(Fortran77Parser.PARAMETER);
                this.state = 744;
                this.match(Fortran77Parser.LPAREN);
                this.state = 745;
                this.paramlist();
                this.state = 746;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.paramlist = function () {
        var _localctx = new ParamlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, Fortran77Parser.RULE_paramlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 748;
                this.paramassign();
                this.state = 753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 749;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 750;
                            this.paramassign();
                        }
                    }
                    this.state = 755;
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
    Fortran77Parser.prototype.paramassign = function () {
        var _localctx = new ParamassignContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, Fortran77Parser.RULE_paramassign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 756;
                this.match(Fortran77Parser.NAME);
                this.state = 757;
                this.match(Fortran77Parser.ASSIGN);
                this.state = 758;
                this.constantExpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.externalStatement = function () {
        var _localctx = new ExternalStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, Fortran77Parser.RULE_externalStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 760;
                this.match(Fortran77Parser.EXTERNAL);
                this.state = 761;
                this.namelist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.intrinsicStatement = function () {
        var _localctx = new IntrinsicStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, Fortran77Parser.RULE_intrinsicStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this.match(Fortran77Parser.INTRINSIC);
                this.state = 764;
                this.namelist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.saveStatement = function () {
        var _localctx = new SaveStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, Fortran77Parser.RULE_saveStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 766;
                this.match(Fortran77Parser.SAVE);
                this.state = 775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.DIV || _la === Fortran77Parser.NAME) {
                    {
                        this.state = 767;
                        this.saveEntity();
                        this.state = 772;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === Fortran77Parser.COMMA) {
                            {
                                {
                                    this.state = 768;
                                    this.match(Fortran77Parser.COMMA);
                                    this.state = 769;
                                    this.saveEntity();
                                }
                            }
                            this.state = 774;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
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
    Fortran77Parser.prototype.saveEntity = function () {
        var _localctx = new SaveEntityContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, Fortran77Parser.RULE_saveEntity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 781;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.NAME:
                        {
                            this.state = 777;
                            this.match(Fortran77Parser.NAME);
                        }
                        break;
                    case Fortran77Parser.DIV:
                        {
                            this.state = 778;
                            this.match(Fortran77Parser.DIV);
                            this.state = 779;
                            this.match(Fortran77Parser.NAME);
                            this.state = 780;
                            this.match(Fortran77Parser.DIV);
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
    Fortran77Parser.prototype.dataStatement = function () {
        var _localctx = new DataStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, Fortran77Parser.RULE_dataStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 783;
                this.match(Fortran77Parser.DATA);
                this.state = 784;
                this.dataStatementEntity();
                this.state = 791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.REAL || _la === Fortran77Parser.COMMA || _la === Fortran77Parser.LPAREN || _la === Fortran77Parser.NAME) {
                    {
                        {
                            this.state = 786;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Fortran77Parser.COMMA) {
                                {
                                    this.state = 785;
                                    this.match(Fortran77Parser.COMMA);
                                }
                            }
                            this.state = 788;
                            this.dataStatementEntity();
                        }
                    }
                    this.state = 793;
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
    Fortran77Parser.prototype.dataStatementItem = function () {
        var _localctx = new DataStatementItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, Fortran77Parser.RULE_dataStatementItem);
        try {
            this.state = 796;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.REAL:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 794;
                        this.varRef();
                    }
                    break;
                case Fortran77Parser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 795;
                        this.dataImpliedDo();
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
    Fortran77Parser.prototype.dataStatementMultiple = function () {
        var _localctx = new DataStatementMultipleContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, Fortran77Parser.RULE_dataStatementMultiple);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 800;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1:
                        {
                            this.state = 798;
                            _la = this._input.LA(1);
                            if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.NAME)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 799;
                            this.match(Fortran77Parser.STAR);
                        }
                        break;
                }
                this.state = 804;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ICON:
                    case Fortran77Parser.LPAREN:
                    case Fortran77Parser.MINUS:
                    case Fortran77Parser.PLUS:
                    case Fortran77Parser.TRUE:
                    case Fortran77Parser.FALSE:
                    case Fortran77Parser.HOLLERITH:
                    case Fortran77Parser.SCON:
                    case Fortran77Parser.RCON:
                        {
                            this.state = 802;
                            this.constant();
                        }
                        break;
                    case Fortran77Parser.NAME:
                        {
                            this.state = 803;
                            this.match(Fortran77Parser.NAME);
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
    Fortran77Parser.prototype.dataStatementEntity = function () {
        var _localctx = new DataStatementEntityContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, Fortran77Parser.RULE_dataStatementEntity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 806;
                this.dse1();
                this.state = 807;
                this.dse2();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.dse1 = function () {
        var _localctx = new Dse1Context(this._ctx, this.state);
        this.enterRule(_localctx, 128, Fortran77Parser.RULE_dse1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 809;
                this.dataStatementItem();
                this.state = 814;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 810;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 811;
                            this.dataStatementItem();
                        }
                    }
                    this.state = 816;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 817;
                this.match(Fortran77Parser.DIV);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.dse2 = function () {
        var _localctx = new Dse2Context(this._ctx, this.state);
        this.enterRule(_localctx, 130, Fortran77Parser.RULE_dse2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 819;
                this.dataStatementMultiple();
                this.state = 824;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 820;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 821;
                            this.dataStatementMultiple();
                        }
                    }
                    this.state = 826;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 827;
                this.match(Fortran77Parser.DIV);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.dataImpliedDo = function () {
        var _localctx = new DataImpliedDoContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, Fortran77Parser.RULE_dataImpliedDo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 829;
                this.match(Fortran77Parser.LPAREN);
                this.state = 830;
                this.dataImpliedDoList();
                this.state = 831;
                this.match(Fortran77Parser.COMMA);
                this.state = 832;
                this.dataImpliedDoRange();
                this.state = 833;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.dataImpliedDoRange = function () {
        var _localctx = new DataImpliedDoRangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, Fortran77Parser.RULE_dataImpliedDoRange);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 835;
                this.match(Fortran77Parser.NAME);
                this.state = 836;
                this.match(Fortran77Parser.ASSIGN);
                this.state = 837;
                this.intConstantExpr();
                this.state = 838;
                this.match(Fortran77Parser.COMMA);
                this.state = 839;
                this.intConstantExpr();
                this.state = 842;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.COMMA) {
                    {
                        this.state = 840;
                        this.match(Fortran77Parser.COMMA);
                        this.state = 841;
                        this.intConstantExpr();
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
    Fortran77Parser.prototype.dataImpliedDoList = function () {
        var _localctx = new DataImpliedDoListContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, Fortran77Parser.RULE_dataImpliedDoList);
        try {
            this.state = 847;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.REAL:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 844;
                        this.dataImpliedDoListWhat();
                    }
                    break;
                case Fortran77Parser.COMMA:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 845;
                        this.match(Fortran77Parser.COMMA);
                        this.state = 846;
                        this.dataImpliedDoList();
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
    Fortran77Parser.prototype.dataImpliedDoListWhat = function () {
        var _localctx = new DataImpliedDoListWhatContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, Fortran77Parser.RULE_dataImpliedDoListWhat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 851;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.REAL:
                    case Fortran77Parser.NAME:
                        {
                            this.state = 849;
                            this.varRef();
                        }
                        break;
                    case Fortran77Parser.LPAREN:
                        {
                            this.state = 850;
                            this.dataImpliedDo();
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
    Fortran77Parser.prototype.gotoStatement = function () {
        var _localctx = new GotoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, Fortran77Parser.RULE_gotoStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 853;
                    _la = this._input.LA(1);
                    if (!(_la === Fortran77Parser.GO || _la === Fortran77Parser.GOTO)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 854;
                    this.to();
                }
                this.state = 859;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ICON:
                        {
                            this.state = 856;
                            this.unconditionalGoto();
                        }
                        break;
                    case Fortran77Parser.LPAREN:
                        {
                            this.state = 857;
                            this.computedGoto();
                        }
                        break;
                    case Fortran77Parser.NAME:
                        {
                            this.state = 858;
                            this.assignedGoto();
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
    Fortran77Parser.prototype.unconditionalGoto = function () {
        var _localctx = new UnconditionalGotoContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, Fortran77Parser.RULE_unconditionalGoto);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 861;
                this.lblRef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.computedGoto = function () {
        var _localctx = new ComputedGotoContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, Fortran77Parser.RULE_computedGoto);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 863;
                this.match(Fortran77Parser.LPAREN);
                this.state = 864;
                this.labelList();
                this.state = 865;
                this.match(Fortran77Parser.RPAREN);
                this.state = 867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.COMMA) {
                    {
                        this.state = 866;
                        this.match(Fortran77Parser.COMMA);
                    }
                }
                this.state = 869;
                this.integerExpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.lblRef = function () {
        var _localctx = new LblRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, Fortran77Parser.RULE_lblRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 871;
                this.match(Fortran77Parser.ICON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.labelList = function () {
        var _localctx = new LabelListContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, Fortran77Parser.RULE_labelList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                this.lblRef();
                this.state = 878;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 874;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 875;
                            this.lblRef();
                        }
                    }
                    this.state = 880;
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
    Fortran77Parser.prototype.assignedGoto = function () {
        var _localctx = new AssignedGotoContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, Fortran77Parser.RULE_assignedGoto);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 881;
                this.match(Fortran77Parser.NAME);
                this.state = 889;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.COMMA || _la === Fortran77Parser.LPAREN) {
                    {
                        this.state = 883;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Fortran77Parser.COMMA) {
                            {
                                this.state = 882;
                                this.match(Fortran77Parser.COMMA);
                            }
                        }
                        this.state = 885;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 886;
                        this.labelList();
                        this.state = 887;
                        this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, Fortran77Parser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 891;
                this.match(Fortran77Parser.IF);
                this.state = 892;
                this.match(Fortran77Parser.LPAREN);
                this.state = 893;
                this.logicalExpression();
                this.state = 894;
                this.match(Fortran77Parser.RPAREN);
                this.state = 898;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.THEN:
                        {
                            this.state = 895;
                            this.blockIfStatement();
                        }
                        break;
                    case Fortran77Parser.REAL:
                    case Fortran77Parser.GO:
                    case Fortran77Parser.GOTO:
                    case Fortran77Parser.IF:
                    case Fortran77Parser.DO:
                    case Fortran77Parser.CONTINUE:
                    case Fortran77Parser.STOP:
                    case Fortran77Parser.PAUSE:
                    case Fortran77Parser.WRITE:
                    case Fortran77Parser.READ:
                    case Fortran77Parser.PRINT:
                    case Fortran77Parser.OPEN:
                    case Fortran77Parser.CALL:
                    case Fortran77Parser.RETURN:
                    case Fortran77Parser.CLOSE:
                    case Fortran77Parser.INQUIRE:
                    case Fortran77Parser.BACKSPACE:
                    case Fortran77Parser.ENDFILE:
                    case Fortran77Parser.REWIND:
                    case Fortran77Parser.NAME:
                        {
                            this.state = 896;
                            this.logicalIfStatement();
                        }
                        break;
                    case Fortran77Parser.ICON:
                        {
                            this.state = 897;
                            this.arithmeticIfStatement();
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
    Fortran77Parser.prototype.arithmeticIfStatement = function () {
        var _localctx = new ArithmeticIfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, Fortran77Parser.RULE_arithmeticIfStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 900;
                this.lblRef();
                this.state = 901;
                this.match(Fortran77Parser.COMMA);
                this.state = 902;
                this.lblRef();
                this.state = 903;
                this.match(Fortran77Parser.COMMA);
                this.state = 904;
                this.lblRef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.logicalIfStatement = function () {
        var _localctx = new LogicalIfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, Fortran77Parser.RULE_logicalIfStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 906;
                this.executableStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.blockIfStatement = function () {
        var _localctx = new BlockIfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, Fortran77Parser.RULE_blockIfStatement);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 908;
                this.firstIfBlock();
                this.state = 912;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 909;
                                this.elseIfStatement();
                            }
                        }
                    }
                    this.state = 914;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                }
                this.state = 916;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.ELSE) {
                    {
                        this.state = 915;
                        this.elseStatement();
                    }
                }
                this.state = 918;
                this.endIfStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.firstIfBlock = function () {
        var _localctx = new FirstIfBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, Fortran77Parser.RULE_firstIfBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 920;
                this.match(Fortran77Parser.THEN);
                this.state = 922;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 921;
                            this.wholeStatement();
                        }
                    }
                    this.state = 924;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.elseIfStatement = function () {
        var _localctx = new ElseIfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, Fortran77Parser.RULE_elseIfStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 929;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ELSEIF:
                        {
                            this.state = 926;
                            this.match(Fortran77Parser.ELSEIF);
                        }
                        break;
                    case Fortran77Parser.ELSE:
                        {
                            {
                                this.state = 927;
                                this.match(Fortran77Parser.ELSE);
                                this.state = 928;
                                this.match(Fortran77Parser.IF);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 931;
                this.match(Fortran77Parser.LPAREN);
                this.state = 932;
                this.logicalExpression();
                this.state = 933;
                this.match(Fortran77Parser.RPAREN);
                this.state = 934;
                this.match(Fortran77Parser.THEN);
                this.state = 936;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 935;
                            this.wholeStatement();
                        }
                    }
                    this.state = 938;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.elseStatement = function () {
        var _localctx = new ElseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, Fortran77Parser.RULE_elseStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 940;
                this.match(Fortran77Parser.ELSE);
                this.state = 942;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 941;
                            this.wholeStatement();
                        }
                    }
                    this.state = 944;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.endIfStatement = function () {
        var _localctx = new EndIfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, Fortran77Parser.RULE_endIfStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 949;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ENDIF:
                        {
                            this.state = 946;
                            this.match(Fortran77Parser.ENDIF);
                        }
                        break;
                    case Fortran77Parser.END:
                        {
                            this.state = 947;
                            this.match(Fortran77Parser.END);
                            this.state = 948;
                            this.match(Fortran77Parser.IF);
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
    Fortran77Parser.prototype.doStatement = function () {
        var _localctx = new DoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, Fortran77Parser.RULE_doStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 951;
                this.match(Fortran77Parser.DO);
                this.state = 954;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ICON:
                        {
                            this.state = 952;
                            this.doWithLabel();
                        }
                        break;
                    case Fortran77Parser.NAME:
                        {
                            this.state = 953;
                            this.doWithEndDo();
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
    Fortran77Parser.prototype.doVarArgs = function () {
        var _localctx = new DoVarArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, Fortran77Parser.RULE_doVarArgs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 956;
                this.variableName();
                this.state = 957;
                this.match(Fortran77Parser.ASSIGN);
                this.state = 958;
                this.intRealDpExpr();
                this.state = 959;
                this.match(Fortran77Parser.COMMA);
                this.state = 960;
                this.intRealDpExpr();
                this.state = 963;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.COMMA) {
                    {
                        this.state = 961;
                        this.match(Fortran77Parser.COMMA);
                        this.state = 962;
                        this.intRealDpExpr();
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
    Fortran77Parser.prototype.doWithLabel = function () {
        var _localctx = new DoWithLabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, Fortran77Parser.RULE_doWithLabel);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 965;
                this.lblRef();
                this.state = 967;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.COMMA) {
                    {
                        this.state = 966;
                        this.match(Fortran77Parser.COMMA);
                    }
                }
                this.state = 969;
                this.doVarArgs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.doBody = function () {
        var _localctx = new DoBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, Fortran77Parser.RULE_doBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 972;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 971;
                            this.wholeStatement();
                        }
                    }
                    this.state = 974;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.doWithEndDo = function () {
        var _localctx = new DoWithEndDoContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, Fortran77Parser.RULE_doWithEndDo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 976;
                this.doVarArgs();
                this.state = 977;
                this.doBody();
                this.state = 978;
                this.enddoStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.enddoStatement = function () {
        var _localctx = new EnddoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, Fortran77Parser.RULE_enddoStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 983;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ENDDO:
                        {
                            this.state = 980;
                            this.match(Fortran77Parser.ENDDO);
                        }
                        break;
                    case Fortran77Parser.END:
                        {
                            {
                                this.state = 981;
                                this.match(Fortran77Parser.END);
                                this.state = 982;
                                this.match(Fortran77Parser.DO);
                            }
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
    Fortran77Parser.prototype.continueStatement = function () {
        var _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, Fortran77Parser.RULE_continueStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 985;
                this.match(Fortran77Parser.CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.stopStatement = function () {
        var _localctx = new StopStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, Fortran77Parser.RULE_stopStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 987;
                this.match(Fortran77Parser.STOP);
                this.state = 989;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.ICON || _la === Fortran77Parser.HOLLERITH) {
                    {
                        this.state = 988;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.HOLLERITH)) {
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
    Fortran77Parser.prototype.pauseStatement = function () {
        var _localctx = new PauseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, Fortran77Parser.RULE_pauseStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 991;
                this.match(Fortran77Parser.PAUSE);
                this.state = 992;
                _la = this._input.LA(1);
                if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.HOLLERITH)) {
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
    Fortran77Parser.prototype.writeStatement = function () {
        var _localctx = new WriteStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, Fortran77Parser.RULE_writeStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 994;
                this.match(Fortran77Parser.WRITE);
                this.state = 995;
                this.match(Fortran77Parser.LPAREN);
                this.state = 996;
                this.controlInfoList();
                this.state = 997;
                this.match(Fortran77Parser.RPAREN);
                this.state = 1006;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.COMMA - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
                    {
                        this.state = 1002;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 999;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Fortran77Parser.COMMA) {
                                        {
                                            this.state = 998;
                                            this.match(Fortran77Parser.COMMA);
                                        }
                                    }
                                    this.state = 1001;
                                    this.ioList();
                                }
                            }
                            this.state = 1004;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.COMMA - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0));
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
    Fortran77Parser.prototype.readStatement = function () {
        var _localctx = new ReadStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, Fortran77Parser.RULE_readStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1008;
                this.match(Fortran77Parser.READ);
                {
                    this.state = 1009;
                    this.formatIdentifier();
                    this.state = 1016;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === Fortran77Parser.COMMA) {
                        {
                            this.state = 1012;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1010;
                                        this.match(Fortran77Parser.COMMA);
                                        this.state = 1011;
                                        this.ioList();
                                    }
                                }
                                this.state = 1014;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === Fortran77Parser.COMMA);
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
    Fortran77Parser.prototype.printStatement = function () {
        var _localctx = new PrintStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, Fortran77Parser.RULE_printStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1018;
                this.match(Fortran77Parser.PRINT);
                {
                    this.state = 1019;
                    this.formatIdentifier();
                    this.state = 1026;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === Fortran77Parser.COMMA) {
                        {
                            this.state = 1022;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1020;
                                        this.match(Fortran77Parser.COMMA);
                                        this.state = 1021;
                                        this.ioList();
                                    }
                                }
                                this.state = 1024;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === Fortran77Parser.COMMA);
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
    Fortran77Parser.prototype.assignmentStatement = function () {
        var _localctx = new AssignmentStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, Fortran77Parser.RULE_assignmentStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1028;
                this.varRef();
                this.state = 1029;
                this.match(Fortran77Parser.ASSIGN);
                this.state = 1030;
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
    Fortran77Parser.prototype.controlInfoList = function () {
        var _localctx = new ControlInfoListContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, Fortran77Parser.RULE_controlInfoList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1032;
                this.controlInfoListItem();
                this.state = 1037;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 1033;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1034;
                            this.controlInfoListItem();
                        }
                    }
                    this.state = 1039;
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
    Fortran77Parser.prototype.controlErrSpec = function () {
        var _localctx = new ControlErrSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, Fortran77Parser.RULE_controlErrSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1040;
                this.controlErr();
                this.state = 1041;
                this.match(Fortran77Parser.ASSIGN);
                this.state = 1044;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ICON:
                        {
                            this.state = 1042;
                            this.lblRef();
                        }
                        break;
                    case Fortran77Parser.NAME:
                        {
                            this.state = 1043;
                            this.match(Fortran77Parser.NAME);
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
    Fortran77Parser.prototype.controlInfoListItem = function () {
        var _localctx = new ControlInfoListItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, Fortran77Parser.RULE_controlInfoListItem);
        var _la;
        try {
            this.state = 1069;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1046;
                        this.unitIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1047;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
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
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1048;
                        this.controlFmt();
                        this.state = 1049;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1050;
                        this.formatIdentifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1052;
                        this.controlUnit();
                        this.state = 1053;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1054;
                        this.unitIdentifier();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1056;
                        this.controlRec();
                        this.state = 1057;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1058;
                        this.integerExpr();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1060;
                        this.controlEnd();
                        this.state = 1061;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1062;
                        this.lblRef();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1064;
                        this.controlErrSpec();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1065;
                        this.controlIostat();
                        this.state = 1066;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1067;
                        this.varRef();
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
    Fortran77Parser.prototype.ioList = function () {
        var _localctx = new IoListContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, Fortran77Parser.RULE_ioList);
        try {
            this.state = 1087;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 1071;
                            this.ioListItem();
                            this.state = 1072;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1073;
                            this.match(Fortran77Parser.NAME);
                            this.state = 1074;
                            this.match(Fortran77Parser.ASSIGN);
                        }
                        this.state = 1076;
                        this.ioListItem();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 1078;
                            this.ioListItem();
                            this.state = 1079;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1080;
                            this.ioListItem();
                        }
                        this.state = 1082;
                        this.ioListItem();
                        this.state = 1083;
                        this.match(Fortran77Parser.COMMA);
                        this.state = 1084;
                        this.ioList();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1086;
                        this.ioListItem();
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
    Fortran77Parser.prototype.ioListItem = function () {
        var _localctx = new IoListItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, Fortran77Parser.RULE_ioListItem);
        try {
            this.state = 1098;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 1089;
                            this.match(Fortran77Parser.LPAREN);
                            this.state = 1090;
                            this.ioList();
                            this.state = 1091;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1092;
                            this.match(Fortran77Parser.NAME);
                            this.state = 1093;
                            this.match(Fortran77Parser.ASSIGN);
                        }
                        this.state = 1095;
                        this.ioImpliedDoList();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1097;
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
    Fortran77Parser.prototype.ioImpliedDoList = function () {
        var _localctx = new IoImpliedDoListContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, Fortran77Parser.RULE_ioImpliedDoList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1100;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1101;
                this.ioList();
                this.state = 1102;
                this.match(Fortran77Parser.COMMA);
                this.state = 1103;
                this.match(Fortran77Parser.NAME);
                this.state = 1104;
                this.match(Fortran77Parser.ASSIGN);
                this.state = 1105;
                this.intRealDpExpr();
                this.state = 1106;
                this.match(Fortran77Parser.COMMA);
                this.state = 1107;
                this.intRealDpExpr();
                this.state = 1110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.COMMA) {
                    {
                        this.state = 1108;
                        this.match(Fortran77Parser.COMMA);
                        this.state = 1109;
                        this.intRealDpExpr();
                    }
                }
                this.state = 1112;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.openStatement = function () {
        var _localctx = new OpenStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, Fortran77Parser.RULE_openStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1114;
                this.match(Fortran77Parser.OPEN);
                this.state = 1115;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1116;
                this.openControl();
                this.state = 1121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 1117;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1118;
                            this.openControl();
                        }
                    }
                    this.state = 1123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1124;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.openControl = function () {
        var _localctx = new OpenControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, Fortran77Parser.RULE_openControl);
        try {
            this.state = 1163;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.STAR:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1126;
                        this.unitIdentifier();
                    }
                    break;
                case Fortran77Parser.UNIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1127;
                        this.controlUnit();
                        this.state = 1128;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1129;
                        this.unitIdentifier();
                    }
                    break;
                case Fortran77Parser.ERR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1131;
                        this.controlErrSpec();
                    }
                    break;
                case Fortran77Parser.FILE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1132;
                        this.controlFile();
                        this.state = 1133;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1134;
                        this.characterExpression();
                    }
                    break;
                case Fortran77Parser.STATUS:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1136;
                        this.controlStatus();
                        this.state = 1137;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1138;
                        this.characterExpression();
                    }
                    break;
                case Fortran77Parser.ACCESS:
                case Fortran77Parser.POSITION:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1142;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Fortran77Parser.ACCESS:
                                {
                                    this.state = 1140;
                                    this.controlAccess();
                                }
                                break;
                            case Fortran77Parser.POSITION:
                                {
                                    this.state = 1141;
                                    this.controlPosition();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1144;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1145;
                        this.characterExpression();
                    }
                    break;
                case Fortran77Parser.FORM:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1147;
                        this.controlForm();
                        this.state = 1148;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1149;
                        this.characterExpression();
                    }
                    break;
                case Fortran77Parser.RECL:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1151;
                        this.controlRecl();
                        this.state = 1152;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1153;
                        this.integerExpr();
                    }
                    break;
                case Fortran77Parser.BLANK:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1155;
                        this.controlBlank();
                        this.state = 1156;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1157;
                        this.characterExpression();
                    }
                    break;
                case Fortran77Parser.IOSTART:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1159;
                        this.controlIostat();
                        this.state = 1160;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1161;
                        this.varRef();
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
    Fortran77Parser.prototype.controlFmt = function () {
        var _localctx = new ControlFmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, Fortran77Parser.RULE_controlFmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1165;
                this.match(Fortran77Parser.FMT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlUnit = function () {
        var _localctx = new ControlUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, Fortran77Parser.RULE_controlUnit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1167;
                this.match(Fortran77Parser.UNIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlRec = function () {
        var _localctx = new ControlRecContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, Fortran77Parser.RULE_controlRec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1169;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlEnd = function () {
        var _localctx = new ControlEndContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, Fortran77Parser.RULE_controlEnd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1171;
                this.match(Fortran77Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlErr = function () {
        var _localctx = new ControlErrContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, Fortran77Parser.RULE_controlErr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1173;
                this.match(Fortran77Parser.ERR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlIostat = function () {
        var _localctx = new ControlIostatContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, Fortran77Parser.RULE_controlIostat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1175;
                this.match(Fortran77Parser.IOSTART);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlFile = function () {
        var _localctx = new ControlFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, Fortran77Parser.RULE_controlFile);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1177;
                this.match(Fortran77Parser.FILE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlStatus = function () {
        var _localctx = new ControlStatusContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, Fortran77Parser.RULE_controlStatus);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1179;
                this.match(Fortran77Parser.STATUS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlAccess = function () {
        var _localctx = new ControlAccessContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, Fortran77Parser.RULE_controlAccess);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1181;
                this.match(Fortran77Parser.ACCESS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlPosition = function () {
        var _localctx = new ControlPositionContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, Fortran77Parser.RULE_controlPosition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1183;
                this.match(Fortran77Parser.POSITION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlForm = function () {
        var _localctx = new ControlFormContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, Fortran77Parser.RULE_controlForm);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1185;
                this.match(Fortran77Parser.FORM);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlRecl = function () {
        var _localctx = new ControlReclContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, Fortran77Parser.RULE_controlRecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1187;
                this.match(Fortran77Parser.RECL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlBlank = function () {
        var _localctx = new ControlBlankContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, Fortran77Parser.RULE_controlBlank);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1189;
                this.match(Fortran77Parser.BLANK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlExist = function () {
        var _localctx = new ControlExistContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, Fortran77Parser.RULE_controlExist);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1191;
                this.match(Fortran77Parser.EXIST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlOpened = function () {
        var _localctx = new ControlOpenedContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, Fortran77Parser.RULE_controlOpened);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1193;
                this.match(Fortran77Parser.OPENED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlNumber = function () {
        var _localctx = new ControlNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, Fortran77Parser.RULE_controlNumber);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1195;
                this.match(Fortran77Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlNamed = function () {
        var _localctx = new ControlNamedContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, Fortran77Parser.RULE_controlNamed);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1197;
                this.match(Fortran77Parser.NAMED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlName = function () {
        var _localctx = new ControlNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, Fortran77Parser.RULE_controlName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1199;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlSequential = function () {
        var _localctx = new ControlSequentialContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, Fortran77Parser.RULE_controlSequential);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1201;
                this.match(Fortran77Parser.SEQUENTIAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlDirect = function () {
        var _localctx = new ControlDirectContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, Fortran77Parser.RULE_controlDirect);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1203;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlFormatted = function () {
        var _localctx = new ControlFormattedContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, Fortran77Parser.RULE_controlFormatted);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1205;
                this.match(Fortran77Parser.FORMATTED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlUnformatted = function () {
        var _localctx = new ControlUnformattedContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, Fortran77Parser.RULE_controlUnformatted);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1207;
                this.match(Fortran77Parser.UNFORMATTED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.controlNextrec = function () {
        var _localctx = new ControlNextrecContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, Fortran77Parser.RULE_controlNextrec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1209;
                this.match(Fortran77Parser.NEXTREC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.closeStatement = function () {
        var _localctx = new CloseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, Fortran77Parser.RULE_closeStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1211;
                this.match(Fortran77Parser.CLOSE);
                this.state = 1212;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1213;
                this.closeControl();
                this.state = 1218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 1214;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1215;
                            this.closeControl();
                        }
                    }
                    this.state = 1220;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1221;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.closeControl = function () {
        var _localctx = new CloseControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, Fortran77Parser.RULE_closeControl);
        try {
            this.state = 1237;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.STAR:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1223;
                        this.unitIdentifier();
                    }
                    break;
                case Fortran77Parser.UNIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1224;
                        this.controlUnit();
                        this.state = 1225;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1226;
                        this.unitIdentifier();
                    }
                    break;
                case Fortran77Parser.ERR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1228;
                        this.controlErrSpec();
                    }
                    break;
                case Fortran77Parser.STATUS:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1229;
                        this.controlStatus();
                        this.state = 1230;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1231;
                        this.characterExpression();
                    }
                    break;
                case Fortran77Parser.IOSTART:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1233;
                        this.controlIostat();
                        this.state = 1234;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1235;
                        this.varRef();
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
    Fortran77Parser.prototype.inquireStatement = function () {
        var _localctx = new InquireStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, Fortran77Parser.RULE_inquireStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1239;
                this.match(Fortran77Parser.INQUIRE);
                this.state = 1240;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1241;
                this.inquireControl();
                this.state = 1246;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 1242;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1243;
                            this.inquireControl();
                        }
                    }
                    this.state = 1248;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1249;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.inquireControl = function () {
        var _localctx = new InquireControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, Fortran77Parser.RULE_inquireControl);
        try {
            this.state = 1281;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1251;
                        this.controlUnit();
                        this.state = 1252;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1253;
                        this.unitIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1255;
                        this.controlFile();
                        this.state = 1256;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1257;
                        this.characterExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1259;
                        this.controlErrSpec();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1275;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1260;
                                    this.controlIostat();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1261;
                                    this.controlExist();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1262;
                                    this.controlOpened();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 1263;
                                    this.controlNumber();
                                }
                                break;
                            case 5:
                                {
                                    this.state = 1264;
                                    this.controlNamed();
                                }
                                break;
                            case 6:
                                {
                                    this.state = 1265;
                                    this.controlName();
                                }
                                break;
                            case 7:
                                {
                                    this.state = 1266;
                                    this.controlAccess();
                                }
                                break;
                            case 8:
                                {
                                    this.state = 1267;
                                    this.controlSequential();
                                }
                                break;
                            case 9:
                                {
                                    this.state = 1268;
                                    this.controlDirect();
                                }
                                break;
                            case 10:
                                {
                                    this.state = 1269;
                                    this.controlForm();
                                }
                                break;
                            case 11:
                                {
                                    this.state = 1270;
                                    this.controlFormatted();
                                }
                                break;
                            case 12:
                                {
                                    this.state = 1271;
                                    this.controlUnformatted();
                                }
                                break;
                            case 13:
                                {
                                    this.state = 1272;
                                    this.controlRecl();
                                }
                                break;
                            case 14:
                                {
                                    this.state = 1273;
                                    this.controlNextrec();
                                }
                                break;
                            case 15:
                                {
                                    this.state = 1274;
                                    this.controlBlank();
                                }
                                break;
                        }
                        this.state = 1277;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1278;
                        this.varRef();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1280;
                        this.unitIdentifier();
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
    Fortran77Parser.prototype.backspaceStatement = function () {
        var _localctx = new BackspaceStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, Fortran77Parser.RULE_backspaceStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1283;
                this.match(Fortran77Parser.BACKSPACE);
                this.state = 1284;
                this.berFinish();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.endfileStatement = function () {
        var _localctx = new EndfileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, Fortran77Parser.RULE_endfileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1286;
                this.match(Fortran77Parser.ENDFILE);
                this.state = 1287;
                this.berFinish();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.rewindStatement = function () {
        var _localctx = new RewindStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, Fortran77Parser.RULE_rewindStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1289;
                this.match(Fortran77Parser.REWIND);
                this.state = 1290;
                this.berFinish();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.berFinish = function () {
        var _localctx = new BerFinishContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, Fortran77Parser.RULE_berFinish);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1306;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                    case 1:
                        {
                            this.state = 1292;
                            this.unitIdentifier();
                            {
                                this.state = 1293;
                                this.unitIdentifier();
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1295;
                            this.match(Fortran77Parser.LPAREN);
                            this.state = 1296;
                            this.berFinishItem();
                            this.state = 1301;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === Fortran77Parser.COMMA) {
                                {
                                    {
                                        this.state = 1297;
                                        this.match(Fortran77Parser.COMMA);
                                        this.state = 1298;
                                        this.berFinishItem();
                                    }
                                }
                                this.state = 1303;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1304;
                            this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.berFinishItem = function () {
        var _localctx = new BerFinishItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, Fortran77Parser.RULE_berFinishItem);
        try {
            this.state = 1318;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.STAR:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1308;
                        this.unitIdentifier();
                    }
                    break;
                case Fortran77Parser.UNIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1309;
                        this.controlUnit();
                        this.state = 1310;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1311;
                        this.unitIdentifier();
                    }
                    break;
                case Fortran77Parser.ERR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1313;
                        this.controlErrSpec();
                    }
                    break;
                case Fortran77Parser.IOSTART:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1314;
                        this.controlIostat();
                        this.state = 1315;
                        this.match(Fortran77Parser.ASSIGN);
                        this.state = 1316;
                        this.varRef();
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
    Fortran77Parser.prototype.unitIdentifier = function () {
        var _localctx = new UnitIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, Fortran77Parser.RULE_unitIdentifier);
        try {
            this.state = 1322;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1320;
                        this.iexpr();
                    }
                    break;
                case Fortran77Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1321;
                        this.match(Fortran77Parser.STAR);
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
    Fortran77Parser.prototype.formatIdentifier = function () {
        var _localctx = new FormatIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, Fortran77Parser.RULE_formatIdentifier);
        var _la;
        try {
            this.state = 1327;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.HOLLERITH:
                case Fortran77Parser.SCON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1324;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
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
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1325;
                        this.iexpr();
                    }
                    break;
                case Fortran77Parser.STAR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1326;
                        this.match(Fortran77Parser.STAR);
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
    Fortran77Parser.prototype.formatStatement = function () {
        var _localctx = new FormatStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, Fortran77Parser.RULE_formatStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1329;
                this.match(Fortran77Parser.FORMAT);
                this.state = 1330;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1331;
                this.fmtSpec();
                this.state = 1332;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.fmtSpec = function () {
        var _localctx = new FmtSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, Fortran77Parser.RULE_fmtSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1339;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Fortran77Parser.ICON:
                    case Fortran77Parser.LPAREN:
                    case Fortran77Parser.MINUS:
                    case Fortran77Parser.PLUS:
                    case Fortran77Parser.XCON:
                    case Fortran77Parser.PCON:
                    case Fortran77Parser.FCON:
                    case Fortran77Parser.HOLLERITH:
                    case Fortran77Parser.SCON:
                    case Fortran77Parser.NAME:
                        {
                            this.state = 1334;
                            this.formatedit();
                        }
                        break;
                    case Fortran77Parser.DOLLAR:
                    case Fortran77Parser.COLON:
                    case Fortran77Parser.DIV:
                        {
                            this.state = 1335;
                            this.formatsep();
                            this.state = 1337;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (Fortran77Parser.XCON - 95)) | (1 << (Fortran77Parser.PCON - 95)) | (1 << (Fortran77Parser.FCON - 95)) | (1 << (Fortran77Parser.HOLLERITH - 95)) | (1 << (Fortran77Parser.SCON - 95)) | (1 << (Fortran77Parser.NAME - 95)))) !== 0)) {
                                {
                                    this.state = 1336;
                                    this.formatedit();
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Fortran77Parser.DOLLAR - 69)) | (1 << (Fortran77Parser.COMMA - 69)) | (1 << (Fortran77Parser.COLON - 69)) | (1 << (Fortran77Parser.DIV - 69)))) !== 0)) {
                    {
                        this.state = 1353;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Fortran77Parser.DOLLAR:
                            case Fortran77Parser.COLON:
                            case Fortran77Parser.DIV:
                                {
                                    this.state = 1341;
                                    this.formatsep();
                                    this.state = 1343;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (Fortran77Parser.XCON - 95)) | (1 << (Fortran77Parser.PCON - 95)) | (1 << (Fortran77Parser.FCON - 95)) | (1 << (Fortran77Parser.HOLLERITH - 95)) | (1 << (Fortran77Parser.SCON - 95)) | (1 << (Fortran77Parser.NAME - 95)))) !== 0)) {
                                        {
                                            this.state = 1342;
                                            this.formatedit();
                                        }
                                    }
                                }
                                break;
                            case Fortran77Parser.COMMA:
                                {
                                    this.state = 1345;
                                    this.match(Fortran77Parser.COMMA);
                                    this.state = 1351;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case Fortran77Parser.ICON:
                                        case Fortran77Parser.LPAREN:
                                        case Fortran77Parser.MINUS:
                                        case Fortran77Parser.PLUS:
                                        case Fortran77Parser.XCON:
                                        case Fortran77Parser.PCON:
                                        case Fortran77Parser.FCON:
                                        case Fortran77Parser.HOLLERITH:
                                        case Fortran77Parser.SCON:
                                        case Fortran77Parser.NAME:
                                            {
                                                this.state = 1346;
                                                this.formatedit();
                                            }
                                            break;
                                        case Fortran77Parser.DOLLAR:
                                        case Fortran77Parser.COLON:
                                        case Fortran77Parser.DIV:
                                            {
                                                this.state = 1347;
                                                this.formatsep();
                                                this.state = 1349;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (Fortran77Parser.XCON - 95)) | (1 << (Fortran77Parser.PCON - 95)) | (1 << (Fortran77Parser.FCON - 95)) | (1 << (Fortran77Parser.HOLLERITH - 95)) | (1 << (Fortran77Parser.SCON - 95)) | (1 << (Fortran77Parser.NAME - 95)))) !== 0)) {
                                                    {
                                                        this.state = 1348;
                                                        this.formatedit();
                                                    }
                                                }
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
                    }
                    this.state = 1357;
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
    Fortran77Parser.prototype.formatsep = function () {
        var _localctx = new FormatsepContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, Fortran77Parser.RULE_formatsep);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1358;
                _la = this._input.LA(1);
                if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Fortran77Parser.DOLLAR - 69)) | (1 << (Fortran77Parser.COLON - 69)) | (1 << (Fortran77Parser.DIV - 69)))) !== 0))) {
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
    Fortran77Parser.prototype.formatedit = function () {
        var _localctx = new FormateditContext(this._ctx, this.state);
        this.enterRule(_localctx, 284, Fortran77Parser.RULE_formatedit);
        var _la;
        try {
            this.state = 1374;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.XCON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1360;
                        this.match(Fortran77Parser.XCON);
                    }
                    break;
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.FCON:
                case Fortran77Parser.HOLLERITH:
                case Fortran77Parser.SCON:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1361;
                        this.editElement();
                    }
                    break;
                case Fortran77Parser.ICON:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1362;
                        this.match(Fortran77Parser.ICON);
                        this.state = 1363;
                        this.editElement();
                    }
                    break;
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.PCON:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1365;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
                            {
                                this.state = 1364;
                                _la = this._input.LA(1);
                                if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
                        this.state = 1367;
                        this.match(Fortran77Parser.PCON);
                        this.state = 1372;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Fortran77Parser.ICON || _la === Fortran77Parser.LPAREN || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Fortran77Parser.FCON - 97)) | (1 << (Fortran77Parser.HOLLERITH - 97)) | (1 << (Fortran77Parser.SCON - 97)) | (1 << (Fortran77Parser.NAME - 97)))) !== 0)) {
                            {
                                this.state = 1369;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Fortran77Parser.ICON) {
                                    {
                                        this.state = 1368;
                                        this.match(Fortran77Parser.ICON);
                                    }
                                }
                                this.state = 1371;
                                this.editElement();
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
    Fortran77Parser.prototype.editElement = function () {
        var _localctx = new EditElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, Fortran77Parser.RULE_editElement);
        var _la;
        try {
            this.state = 1381;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.FCON:
                case Fortran77Parser.HOLLERITH:
                case Fortran77Parser.SCON:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1376;
                        _la = this._input.LA(1);
                        if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Fortran77Parser.FCON - 97)) | (1 << (Fortran77Parser.HOLLERITH - 97)) | (1 << (Fortran77Parser.SCON - 97)) | (1 << (Fortran77Parser.NAME - 97)))) !== 0))) {
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
                case Fortran77Parser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1377;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 1378;
                        this.fmtSpec();
                        this.state = 1379;
                        this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.statementFunctionStatement = function () {
        var _localctx = new StatementFunctionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, Fortran77Parser.RULE_statementFunctionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1383;
                this.match(Fortran77Parser.LET);
                this.state = 1384;
                this.sfArgs();
                this.state = 1385;
                this.match(Fortran77Parser.ASSIGN);
                this.state = 1386;
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
    Fortran77Parser.prototype.sfArgs = function () {
        var _localctx = new SfArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, Fortran77Parser.RULE_sfArgs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1388;
                this.match(Fortran77Parser.NAME);
                this.state = 1389;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1390;
                this.namelist();
                this.state = 1391;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.callStatement = function () {
        var _localctx = new CallStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 292, Fortran77Parser.RULE_callStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1393;
                this.match(Fortran77Parser.CALL);
                this.state = 1394;
                this.subroutineCall();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.subroutineCall = function () {
        var _localctx = new SubroutineCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 294, Fortran77Parser.RULE_subroutineCall);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1396;
                this.match(Fortran77Parser.NAME);
                this.state = 1402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.LPAREN) {
                    {
                        this.state = 1397;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 1399;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)) | (1 << (Fortran77Parser.STAR - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
                            {
                                this.state = 1398;
                                this.callArgumentList();
                            }
                        }
                        this.state = 1401;
                        this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.callArgumentList = function () {
        var _localctx = new CallArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 296, Fortran77Parser.RULE_callArgumentList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1404;
                this.callArgument();
                this.state = 1409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 1405;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1406;
                            this.callArgument();
                        }
                    }
                    this.state = 1411;
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
    Fortran77Parser.prototype.callArgument = function () {
        var _localctx = new CallArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 298, Fortran77Parser.RULE_callArgument);
        try {
            this.state = 1415;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.REAL:
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.LNOT:
                case Fortran77Parser.TRUE:
                case Fortran77Parser.FALSE:
                case Fortran77Parser.HOLLERITH:
                case Fortran77Parser.SCON:
                case Fortran77Parser.RCON:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1412;
                        this.expression();
                    }
                    break;
                case Fortran77Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1413;
                        this.match(Fortran77Parser.STAR);
                        this.state = 1414;
                        this.lblRef();
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
    Fortran77Parser.prototype.returnStatement = function () {
        var _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 300, Fortran77Parser.RULE_returnStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1417;
                this.match(Fortran77Parser.RETURN);
                this.state = 1419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || _la === Fortran77Parser.NAME) {
                    {
                        this.state = 1418;
                        this.integerExpr();
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
    Fortran77Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 302, Fortran77Parser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1421;
                this.ncExpr();
                this.state = 1424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.COLON) {
                    {
                        this.state = 1422;
                        this.match(Fortran77Parser.COLON);
                        this.state = 1423;
                        this.ncExpr();
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
    Fortran77Parser.prototype.ncExpr = function () {
        var _localctx = new NcExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 304, Fortran77Parser.RULE_ncExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1426;
                this.lexpr0();
                this.state = 1432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.DIV) {
                    {
                        {
                            this.state = 1427;
                            this.concatOp();
                            this.state = 1428;
                            this.lexpr0();
                        }
                    }
                    this.state = 1434;
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
    Fortran77Parser.prototype.lexpr0 = function () {
        var _localctx = new Lexpr0Context(this._ctx, this.state);
        this.enterRule(_localctx, 306, Fortran77Parser.RULE_lexpr0);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1435;
                this.lexpr1();
                this.state = 1440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.EQV || _la === Fortran77Parser.NEQV) {
                    {
                        {
                            this.state = 1436;
                            _la = this._input.LA(1);
                            if (!(_la === Fortran77Parser.EQV || _la === Fortran77Parser.NEQV)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1437;
                            this.lexpr1();
                        }
                    }
                    this.state = 1442;
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
    Fortran77Parser.prototype.lexpr1 = function () {
        var _localctx = new Lexpr1Context(this._ctx, this.state);
        this.enterRule(_localctx, 308, Fortran77Parser.RULE_lexpr1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1443;
                this.lexpr2();
                this.state = 1448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.LOR) {
                    {
                        {
                            this.state = 1444;
                            this.match(Fortran77Parser.LOR);
                            this.state = 1445;
                            this.lexpr2();
                        }
                    }
                    this.state = 1450;
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
    Fortran77Parser.prototype.lexpr2 = function () {
        var _localctx = new Lexpr2Context(this._ctx, this.state);
        this.enterRule(_localctx, 310, Fortran77Parser.RULE_lexpr2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1451;
                this.lexpr3();
                this.state = 1456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.LAND) {
                    {
                        {
                            this.state = 1452;
                            this.match(Fortran77Parser.LAND);
                            this.state = 1453;
                            this.lexpr3();
                        }
                    }
                    this.state = 1458;
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
    Fortran77Parser.prototype.lexpr3 = function () {
        var _localctx = new Lexpr3Context(this._ctx, this.state);
        this.enterRule(_localctx, 312, Fortran77Parser.RULE_lexpr3);
        try {
            this.state = 1462;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.LNOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1459;
                        this.match(Fortran77Parser.LNOT);
                        this.state = 1460;
                        this.lexpr3();
                    }
                    break;
                case Fortran77Parser.REAL:
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.TRUE:
                case Fortran77Parser.FALSE:
                case Fortran77Parser.HOLLERITH:
                case Fortran77Parser.SCON:
                case Fortran77Parser.RCON:
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1461;
                        this.lexpr4();
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
    Fortran77Parser.prototype.lexpr4 = function () {
        var _localctx = new Lexpr4Context(this._ctx, this.state);
        this.enterRule(_localctx, 314, Fortran77Parser.RULE_lexpr4);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1464;
                this.aexpr0();
                this.state = 1467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (Fortran77Parser.LT - 87)) | (1 << (Fortran77Parser.LE - 87)) | (1 << (Fortran77Parser.GT - 87)) | (1 << (Fortran77Parser.GE - 87)) | (1 << (Fortran77Parser.NE - 87)) | (1 << (Fortran77Parser.EQ - 87)))) !== 0)) {
                    {
                        this.state = 1465;
                        _la = this._input.LA(1);
                        if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (Fortran77Parser.LT - 87)) | (1 << (Fortran77Parser.LE - 87)) | (1 << (Fortran77Parser.GT - 87)) | (1 << (Fortran77Parser.GE - 87)) | (1 << (Fortran77Parser.NE - 87)) | (1 << (Fortran77Parser.EQ - 87)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1466;
                        this.aexpr0();
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
    Fortran77Parser.prototype.aexpr0 = function () {
        var _localctx = new Aexpr0Context(this._ctx, this.state);
        this.enterRule(_localctx, 316, Fortran77Parser.RULE_aexpr0);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1469;
                this.aexpr1();
                this.state = 1474;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1470;
                                _la = this._input.LA(1);
                                if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1471;
                                this.aexpr1();
                            }
                        }
                    }
                    this.state = 1476;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
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
    Fortran77Parser.prototype.aexpr1 = function () {
        var _localctx = new Aexpr1Context(this._ctx, this.state);
        this.enterRule(_localctx, 318, Fortran77Parser.RULE_aexpr1);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1477;
                this.aexpr2();
                this.state = 1482;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1478;
                                _la = this._input.LA(1);
                                if (!(_la === Fortran77Parser.DIV || _la === Fortran77Parser.STAR)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1479;
                                this.aexpr2();
                            }
                        }
                    }
                    this.state = 1484;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
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
    Fortran77Parser.prototype.aexpr2 = function () {
        var _localctx = new Aexpr2Context(this._ctx, this.state);
        this.enterRule(_localctx, 320, Fortran77Parser.RULE_aexpr2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
                    {
                        {
                            this.state = 1485;
                            _la = this._input.LA(1);
                            if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
                    this.state = 1490;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1491;
                this.aexpr3();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.aexpr3 = function () {
        var _localctx = new Aexpr3Context(this._ctx, this.state);
        this.enterRule(_localctx, 322, Fortran77Parser.RULE_aexpr3);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1493;
                this.aexpr4();
                this.state = 1498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.POWER) {
                    {
                        {
                            this.state = 1494;
                            this.match(Fortran77Parser.POWER);
                            this.state = 1495;
                            this.aexpr4();
                        }
                    }
                    this.state = 1500;
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
    Fortran77Parser.prototype.aexpr4 = function () {
        var _localctx = new Aexpr4Context(this._ctx, this.state);
        this.enterRule(_localctx, 324, Fortran77Parser.RULE_aexpr4);
        var _la;
        try {
            this.state = 1511;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 1501;
                            this.unsignedArithmeticConstant();
                        }
                        this.state = 1502;
                        this.unsignedArithmeticConstant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1504;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
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
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1505;
                        this.logicalConstant();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1506;
                        this.varRef();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1507;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 1508;
                        this.expression();
                        this.state = 1509;
                        this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.iexpr = function () {
        var _localctx = new IexprContext(this._ctx, this.state);
        this.enterRule(_localctx, 326, Fortran77Parser.RULE_iexpr);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1513;
                this.iexpr1();
                this.state = 1518;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1514;
                                _la = this._input.LA(1);
                                if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1515;
                                this.iexpr1();
                            }
                        }
                    }
                    this.state = 1520;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
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
    Fortran77Parser.prototype.iexprCode = function () {
        var _localctx = new IexprCodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 328, Fortran77Parser.RULE_iexprCode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1521;
                this.iexpr1();
                this.state = 1526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
                    {
                        {
                            this.state = 1522;
                            _la = this._input.LA(1);
                            if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1523;
                            this.iexpr1();
                        }
                    }
                    this.state = 1528;
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
    Fortran77Parser.prototype.iexpr1 = function () {
        var _localctx = new Iexpr1Context(this._ctx, this.state);
        this.enterRule(_localctx, 330, Fortran77Parser.RULE_iexpr1);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1529;
                this.iexpr2();
                this.state = 1534;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1530;
                                _la = this._input.LA(1);
                                if (!(_la === Fortran77Parser.DIV || _la === Fortran77Parser.STAR)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1531;
                                this.iexpr2();
                            }
                        }
                    }
                    this.state = 1536;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
    Fortran77Parser.prototype.iexpr2 = function () {
        var _localctx = new Iexpr2Context(this._ctx, this.state);
        this.enterRule(_localctx, 332, Fortran77Parser.RULE_iexpr2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
                    {
                        {
                            this.state = 1537;
                            _la = this._input.LA(1);
                            if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
                    this.state = 1542;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1543;
                this.iexpr3();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.iexpr3 = function () {
        var _localctx = new Iexpr3Context(this._ctx, this.state);
        this.enterRule(_localctx, 334, Fortran77Parser.RULE_iexpr3);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1545;
                this.iexpr4();
                this.state = 1548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.POWER) {
                    {
                        this.state = 1546;
                        this.match(Fortran77Parser.POWER);
                        this.state = 1547;
                        this.iexpr3();
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
    Fortran77Parser.prototype.iexpr4 = function () {
        var _localctx = new Iexpr4Context(this._ctx, this.state);
        this.enterRule(_localctx, 336, Fortran77Parser.RULE_iexpr4);
        try {
            this.state = 1556;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1550;
                        this.match(Fortran77Parser.ICON);
                    }
                    break;
                case Fortran77Parser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1551;
                        this.varRefCode();
                    }
                    break;
                case Fortran77Parser.LPAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1552;
                        this.match(Fortran77Parser.LPAREN);
                        this.state = 1553;
                        this.iexprCode();
                        this.state = 1554;
                        this.match(Fortran77Parser.RPAREN);
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
    Fortran77Parser.prototype.constantExpr = function () {
        var _localctx = new ConstantExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 338, Fortran77Parser.RULE_constantExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1558;
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
    Fortran77Parser.prototype.arithmeticExpression = function () {
        var _localctx = new ArithmeticExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 340, Fortran77Parser.RULE_arithmeticExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1560;
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
    Fortran77Parser.prototype.integerExpr = function () {
        var _localctx = new IntegerExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 342, Fortran77Parser.RULE_integerExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1562;
                this.iexpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.intRealDpExpr = function () {
        var _localctx = new IntRealDpExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 344, Fortran77Parser.RULE_intRealDpExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1564;
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
    Fortran77Parser.prototype.arithmeticConstExpr = function () {
        var _localctx = new ArithmeticConstExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 346, Fortran77Parser.RULE_arithmeticConstExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1566;
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
    Fortran77Parser.prototype.intConstantExpr = function () {
        var _localctx = new IntConstantExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 348, Fortran77Parser.RULE_intConstantExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1568;
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
    Fortran77Parser.prototype.characterExpression = function () {
        var _localctx = new CharacterExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 350, Fortran77Parser.RULE_characterExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1570;
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
    Fortran77Parser.prototype.concatOp = function () {
        var _localctx = new ConcatOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 352, Fortran77Parser.RULE_concatOp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1572;
                this.match(Fortran77Parser.DIV);
                this.state = 1573;
                this.match(Fortran77Parser.DIV);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.logicalExpression = function () {
        var _localctx = new LogicalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 354, Fortran77Parser.RULE_logicalExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1575;
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
    Fortran77Parser.prototype.logicalConstExpr = function () {
        var _localctx = new LogicalConstExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 356, Fortran77Parser.RULE_logicalConstExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1577;
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
    Fortran77Parser.prototype.arrayElementName = function () {
        var _localctx = new ArrayElementNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 358, Fortran77Parser.RULE_arrayElementName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1579;
                this.match(Fortran77Parser.NAME);
                this.state = 1580;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1581;
                this.integerExpr();
                this.state = 1586;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Fortran77Parser.COMMA) {
                    {
                        {
                            this.state = 1582;
                            this.match(Fortran77Parser.COMMA);
                            this.state = 1583;
                            this.integerExpr();
                        }
                    }
                    this.state = 1588;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1589;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.subscripts = function () {
        var _localctx = new SubscriptsContext(this._ctx, this.state);
        this.enterRule(_localctx, 360, Fortran77Parser.RULE_subscripts);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1591;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1600;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
                    {
                        this.state = 1592;
                        this.expression();
                        this.state = 1597;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === Fortran77Parser.COMMA) {
                            {
                                {
                                    this.state = 1593;
                                    this.match(Fortran77Parser.COMMA);
                                    this.state = 1594;
                                    this.expression();
                                }
                            }
                            this.state = 1599;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 1602;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.varRef = function () {
        var _localctx = new VarRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 362, Fortran77Parser.RULE_varRef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1604;
                _la = this._input.LA(1);
                if (!(_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1609;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                    case 1:
                        {
                            this.state = 1605;
                            this.subscripts();
                            this.state = 1607;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1606;
                                        this.substringApp();
                                    }
                                    break;
                            }
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
    Fortran77Parser.prototype.varRefCode = function () {
        var _localctx = new VarRefCodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 364, Fortran77Parser.RULE_varRefCode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1611;
                this.match(Fortran77Parser.NAME);
                this.state = 1616;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                    case 1:
                        {
                            this.state = 1612;
                            this.subscripts();
                            this.state = 1614;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1613;
                                        this.substringApp();
                                    }
                                    break;
                            }
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
    Fortran77Parser.prototype.substringApp = function () {
        var _localctx = new SubstringAppContext(this._ctx, this.state);
        this.enterRule(_localctx, 366, Fortran77Parser.RULE_substringApp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1618;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1620;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
                    {
                        this.state = 1619;
                        this.ncExpr();
                    }
                }
                this.state = 1622;
                this.match(Fortran77Parser.COLON);
                this.state = 1624;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
                    {
                        this.state = 1623;
                        this.ncExpr();
                    }
                }
                this.state = 1626;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.variableName = function () {
        var _localctx = new VariableNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 368, Fortran77Parser.RULE_variableName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1628;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.arrayName = function () {
        var _localctx = new ArrayNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 370, Fortran77Parser.RULE_arrayName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1630;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.subroutineName = function () {
        var _localctx = new SubroutineNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 372, Fortran77Parser.RULE_subroutineName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1632;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.functionName = function () {
        var _localctx = new FunctionNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 374, Fortran77Parser.RULE_functionName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1634;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 376, Fortran77Parser.RULE_constant);
        var _la;
        try {
            this.state = 1642;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                case Fortran77Parser.LPAREN:
                case Fortran77Parser.MINUS:
                case Fortran77Parser.PLUS:
                case Fortran77Parser.RCON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1637;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
                            {
                                this.state = 1636;
                                _la = this._input.LA(1);
                                if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
                        this.state = 1639;
                        this.unsignedArithmeticConstant();
                    }
                    break;
                case Fortran77Parser.HOLLERITH:
                case Fortran77Parser.SCON:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1640;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
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
                case Fortran77Parser.TRUE:
                case Fortran77Parser.FALSE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1641;
                        this.logicalConstant();
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
    Fortran77Parser.prototype.unsignedArithmeticConstant = function () {
        var _localctx = new UnsignedArithmeticConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 378, Fortran77Parser.RULE_unsignedArithmeticConstant);
        var _la;
        try {
            this.state = 1646;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Fortran77Parser.ICON:
                case Fortran77Parser.RCON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1644;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.RCON)) {
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
                case Fortran77Parser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1645;
                        this.complexConstant();
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
    Fortran77Parser.prototype.complexConstant = function () {
        var _localctx = new ComplexConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 380, Fortran77Parser.RULE_complexConstant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1648;
                this.match(Fortran77Parser.LPAREN);
                this.state = 1650;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
                    {
                        this.state = 1649;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
                this.state = 1652;
                _la = this._input.LA(1);
                if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.RCON)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1653;
                this.match(Fortran77Parser.COMMA);
                this.state = 1655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
                    {
                        this.state = 1654;
                        _la = this._input.LA(1);
                        if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
                this.state = 1657;
                _la = this._input.LA(1);
                if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.RCON)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1658;
                this.match(Fortran77Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Fortran77Parser.prototype.logicalConstant = function () {
        var _localctx = new LogicalConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 382, Fortran77Parser.RULE_logicalConstant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1660;
                _la = this._input.LA(1);
                if (!(_la === Fortran77Parser.TRUE || _la === Fortran77Parser.FALSE)) {
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
    Fortran77Parser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 384, Fortran77Parser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1662;
                _la = this._input.LA(1);
                if (!(_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME)) {
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
    Fortran77Parser.prototype.to = function () {
        var _localctx = new ToContext(this._ctx, this.state);
        this.enterRule(_localctx, 386, Fortran77Parser.RULE_to);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1664;
                this.match(Fortran77Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(Fortran77Parser, "_ATN", {
        get: function () {
            if (!Fortran77Parser.__ATN) {
                Fortran77Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(Fortran77Parser._serializedATN));
            }
            return Fortran77Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    Fortran77Parser.PROGRAM = 1;
    Fortran77Parser.ENTRY = 2;
    Fortran77Parser.FUNCTION = 3;
    Fortran77Parser.BLOCK = 4;
    Fortran77Parser.SUBROUTINE = 5;
    Fortran77Parser.END = 6;
    Fortran77Parser.DIMENSION = 7;
    Fortran77Parser.REAL = 8;
    Fortran77Parser.EQUIVALENCE = 9;
    Fortran77Parser.COMMON = 10;
    Fortran77Parser.POINTER = 11;
    Fortran77Parser.IMPLICIT = 12;
    Fortran77Parser.NONE = 13;
    Fortran77Parser.CHARACTER = 14;
    Fortran77Parser.PARAMETER = 15;
    Fortran77Parser.EXTERNAL = 16;
    Fortran77Parser.INTRINSIC = 17;
    Fortran77Parser.SAVE = 18;
    Fortran77Parser.DATA = 19;
    Fortran77Parser.GO = 20;
    Fortran77Parser.GOTO = 21;
    Fortran77Parser.IF = 22;
    Fortran77Parser.THEN = 23;
    Fortran77Parser.ELSE = 24;
    Fortran77Parser.ENDIF = 25;
    Fortran77Parser.ELSEIF = 26;
    Fortran77Parser.DO = 27;
    Fortran77Parser.CONTINUE = 28;
    Fortran77Parser.STOP = 29;
    Fortran77Parser.ENDDO = 30;
    Fortran77Parser.PAUSE = 31;
    Fortran77Parser.WRITE = 32;
    Fortran77Parser.READ = 33;
    Fortran77Parser.PRINT = 34;
    Fortran77Parser.OPEN = 35;
    Fortran77Parser.FMT = 36;
    Fortran77Parser.UNIT = 37;
    Fortran77Parser.ERR = 38;
    Fortran77Parser.IOSTAT = 39;
    Fortran77Parser.FORMAT = 40;
    Fortran77Parser.LET = 41;
    Fortran77Parser.CALL = 42;
    Fortran77Parser.RETURN = 43;
    Fortran77Parser.CLOSE = 44;
    Fortran77Parser.DOUBLE = 45;
    Fortran77Parser.IOSTART = 46;
    Fortran77Parser.SEQUENTIAL = 47;
    Fortran77Parser.ICON = 48;
    Fortran77Parser.LABEL = 49;
    Fortran77Parser.FILE = 50;
    Fortran77Parser.STATUS = 51;
    Fortran77Parser.ACCESS = 52;
    Fortran77Parser.POSITION = 53;
    Fortran77Parser.FORM = 54;
    Fortran77Parser.RECL = 55;
    Fortran77Parser.BLANK = 56;
    Fortran77Parser.EXIST = 57;
    Fortran77Parser.OPENED = 58;
    Fortran77Parser.NUMBER = 59;
    Fortran77Parser.NAMED = 60;
    Fortran77Parser.NAME_ = 61;
    Fortran77Parser.FORMATTED = 62;
    Fortran77Parser.UNFORMATTED = 63;
    Fortran77Parser.NEXTREC = 64;
    Fortran77Parser.INQUIRE = 65;
    Fortran77Parser.BACKSPACE = 66;
    Fortran77Parser.ENDFILE = 67;
    Fortran77Parser.REWIND = 68;
    Fortran77Parser.DOLLAR = 69;
    Fortran77Parser.COMMA = 70;
    Fortran77Parser.LPAREN = 71;
    Fortran77Parser.RPAREN = 72;
    Fortran77Parser.COLON = 73;
    Fortran77Parser.ASSIGN = 74;
    Fortran77Parser.MINUS = 75;
    Fortran77Parser.PLUS = 76;
    Fortran77Parser.DIV = 77;
    Fortran77Parser.STAR = 78;
    Fortran77Parser.POWER = 79;
    Fortran77Parser.LNOT = 80;
    Fortran77Parser.LAND = 81;
    Fortran77Parser.LOR = 82;
    Fortran77Parser.EQV = 83;
    Fortran77Parser.NEQV = 84;
    Fortran77Parser.XOR = 85;
    Fortran77Parser.EOR = 86;
    Fortran77Parser.LT = 87;
    Fortran77Parser.LE = 88;
    Fortran77Parser.GT = 89;
    Fortran77Parser.GE = 90;
    Fortran77Parser.NE = 91;
    Fortran77Parser.EQ = 92;
    Fortran77Parser.TRUE = 93;
    Fortran77Parser.FALSE = 94;
    Fortran77Parser.XCON = 95;
    Fortran77Parser.PCON = 96;
    Fortran77Parser.FCON = 97;
    Fortran77Parser.CCON = 98;
    Fortran77Parser.HOLLERITH = 99;
    Fortran77Parser.CONCATOP = 100;
    Fortran77Parser.CTRLDIRECT = 101;
    Fortran77Parser.CTRLREC = 102;
    Fortran77Parser.TO = 103;
    Fortran77Parser.SUBPROGRAMBLOCK = 104;
    Fortran77Parser.DOBLOCK = 105;
    Fortran77Parser.AIF = 106;
    Fortran77Parser.THENBLOCK = 107;
    Fortran77Parser.ELSEBLOCK = 108;
    Fortran77Parser.CODEROOT = 109;
    Fortran77Parser.COMPLEX = 110;
    Fortran77Parser.PRECISION = 111;
    Fortran77Parser.INTEGER = 112;
    Fortran77Parser.LOGICAL = 113;
    Fortran77Parser.SCON = 114;
    Fortran77Parser.RCON = 115;
    Fortran77Parser.NAME = 116;
    Fortran77Parser.COMMENT = 117;
    Fortran77Parser.STRINGLITERAL = 118;
    Fortran77Parser.EOL = 119;
    Fortran77Parser.WS = 120;
    Fortran77Parser.RULE_program = 0;
    Fortran77Parser.RULE_executableUnit = 1;
    Fortran77Parser.RULE_mainProgram = 2;
    Fortran77Parser.RULE_functionSubprogram = 3;
    Fortran77Parser.RULE_subroutineSubprogram = 4;
    Fortran77Parser.RULE_blockdataSubprogram = 5;
    Fortran77Parser.RULE_otherSpecificationStatement = 6;
    Fortran77Parser.RULE_executableStatement = 7;
    Fortran77Parser.RULE_programStatement = 8;
    Fortran77Parser.RULE_entryStatement = 9;
    Fortran77Parser.RULE_functionStatement = 10;
    Fortran77Parser.RULE_blockdataStatement = 11;
    Fortran77Parser.RULE_subroutineStatement = 12;
    Fortran77Parser.RULE_namelist = 13;
    Fortran77Parser.RULE_statement = 14;
    Fortran77Parser.RULE_subprogramBody = 15;
    Fortran77Parser.RULE_wholeStatement = 16;
    Fortran77Parser.RULE_endStatement = 17;
    Fortran77Parser.RULE_dimensionStatement = 18;
    Fortran77Parser.RULE_arrayDeclarator = 19;
    Fortran77Parser.RULE_arrayDeclarators = 20;
    Fortran77Parser.RULE_arrayDeclaratorExtents = 21;
    Fortran77Parser.RULE_arrayDeclaratorExtent = 22;
    Fortran77Parser.RULE_equivalenceStatement = 23;
    Fortran77Parser.RULE_equivEntityGroup = 24;
    Fortran77Parser.RULE_equivEntity = 25;
    Fortran77Parser.RULE_commonStatement = 26;
    Fortran77Parser.RULE_commonName = 27;
    Fortran77Parser.RULE_commonItem = 28;
    Fortran77Parser.RULE_commonItems = 29;
    Fortran77Parser.RULE_commonBlock = 30;
    Fortran77Parser.RULE_commentStatement = 31;
    Fortran77Parser.RULE_typeStatement = 32;
    Fortran77Parser.RULE_typeStatementNameList = 33;
    Fortran77Parser.RULE_typeStatementName = 34;
    Fortran77Parser.RULE_typeStatementNameCharList = 35;
    Fortran77Parser.RULE_typeStatementNameChar = 36;
    Fortran77Parser.RULE_typeStatementLenSpec = 37;
    Fortran77Parser.RULE_typename = 38;
    Fortran77Parser.RULE_type = 39;
    Fortran77Parser.RULE_typenameLen = 40;
    Fortran77Parser.RULE_pointerStatement = 41;
    Fortran77Parser.RULE_pointerDecl = 42;
    Fortran77Parser.RULE_implicitStatement = 43;
    Fortran77Parser.RULE_implicitSpec = 44;
    Fortran77Parser.RULE_implicitSpecs = 45;
    Fortran77Parser.RULE_implicitNone = 46;
    Fortran77Parser.RULE_implicitLetter = 47;
    Fortran77Parser.RULE_implicitRange = 48;
    Fortran77Parser.RULE_implicitLetters = 49;
    Fortran77Parser.RULE_lenSpecification = 50;
    Fortran77Parser.RULE_characterWithLen = 51;
    Fortran77Parser.RULE_cwlLen = 52;
    Fortran77Parser.RULE_parameterStatement = 53;
    Fortran77Parser.RULE_paramlist = 54;
    Fortran77Parser.RULE_paramassign = 55;
    Fortran77Parser.RULE_externalStatement = 56;
    Fortran77Parser.RULE_intrinsicStatement = 57;
    Fortran77Parser.RULE_saveStatement = 58;
    Fortran77Parser.RULE_saveEntity = 59;
    Fortran77Parser.RULE_dataStatement = 60;
    Fortran77Parser.RULE_dataStatementItem = 61;
    Fortran77Parser.RULE_dataStatementMultiple = 62;
    Fortran77Parser.RULE_dataStatementEntity = 63;
    Fortran77Parser.RULE_dse1 = 64;
    Fortran77Parser.RULE_dse2 = 65;
    Fortran77Parser.RULE_dataImpliedDo = 66;
    Fortran77Parser.RULE_dataImpliedDoRange = 67;
    Fortran77Parser.RULE_dataImpliedDoList = 68;
    Fortran77Parser.RULE_dataImpliedDoListWhat = 69;
    Fortran77Parser.RULE_gotoStatement = 70;
    Fortran77Parser.RULE_unconditionalGoto = 71;
    Fortran77Parser.RULE_computedGoto = 72;
    Fortran77Parser.RULE_lblRef = 73;
    Fortran77Parser.RULE_labelList = 74;
    Fortran77Parser.RULE_assignedGoto = 75;
    Fortran77Parser.RULE_ifStatement = 76;
    Fortran77Parser.RULE_arithmeticIfStatement = 77;
    Fortran77Parser.RULE_logicalIfStatement = 78;
    Fortran77Parser.RULE_blockIfStatement = 79;
    Fortran77Parser.RULE_firstIfBlock = 80;
    Fortran77Parser.RULE_elseIfStatement = 81;
    Fortran77Parser.RULE_elseStatement = 82;
    Fortran77Parser.RULE_endIfStatement = 83;
    Fortran77Parser.RULE_doStatement = 84;
    Fortran77Parser.RULE_doVarArgs = 85;
    Fortran77Parser.RULE_doWithLabel = 86;
    Fortran77Parser.RULE_doBody = 87;
    Fortran77Parser.RULE_doWithEndDo = 88;
    Fortran77Parser.RULE_enddoStatement = 89;
    Fortran77Parser.RULE_continueStatement = 90;
    Fortran77Parser.RULE_stopStatement = 91;
    Fortran77Parser.RULE_pauseStatement = 92;
    Fortran77Parser.RULE_writeStatement = 93;
    Fortran77Parser.RULE_readStatement = 94;
    Fortran77Parser.RULE_printStatement = 95;
    Fortran77Parser.RULE_assignmentStatement = 96;
    Fortran77Parser.RULE_controlInfoList = 97;
    Fortran77Parser.RULE_controlErrSpec = 98;
    Fortran77Parser.RULE_controlInfoListItem = 99;
    Fortran77Parser.RULE_ioList = 100;
    Fortran77Parser.RULE_ioListItem = 101;
    Fortran77Parser.RULE_ioImpliedDoList = 102;
    Fortran77Parser.RULE_openStatement = 103;
    Fortran77Parser.RULE_openControl = 104;
    Fortran77Parser.RULE_controlFmt = 105;
    Fortran77Parser.RULE_controlUnit = 106;
    Fortran77Parser.RULE_controlRec = 107;
    Fortran77Parser.RULE_controlEnd = 108;
    Fortran77Parser.RULE_controlErr = 109;
    Fortran77Parser.RULE_controlIostat = 110;
    Fortran77Parser.RULE_controlFile = 111;
    Fortran77Parser.RULE_controlStatus = 112;
    Fortran77Parser.RULE_controlAccess = 113;
    Fortran77Parser.RULE_controlPosition = 114;
    Fortran77Parser.RULE_controlForm = 115;
    Fortran77Parser.RULE_controlRecl = 116;
    Fortran77Parser.RULE_controlBlank = 117;
    Fortran77Parser.RULE_controlExist = 118;
    Fortran77Parser.RULE_controlOpened = 119;
    Fortran77Parser.RULE_controlNumber = 120;
    Fortran77Parser.RULE_controlNamed = 121;
    Fortran77Parser.RULE_controlName = 122;
    Fortran77Parser.RULE_controlSequential = 123;
    Fortran77Parser.RULE_controlDirect = 124;
    Fortran77Parser.RULE_controlFormatted = 125;
    Fortran77Parser.RULE_controlUnformatted = 126;
    Fortran77Parser.RULE_controlNextrec = 127;
    Fortran77Parser.RULE_closeStatement = 128;
    Fortran77Parser.RULE_closeControl = 129;
    Fortran77Parser.RULE_inquireStatement = 130;
    Fortran77Parser.RULE_inquireControl = 131;
    Fortran77Parser.RULE_backspaceStatement = 132;
    Fortran77Parser.RULE_endfileStatement = 133;
    Fortran77Parser.RULE_rewindStatement = 134;
    Fortran77Parser.RULE_berFinish = 135;
    Fortran77Parser.RULE_berFinishItem = 136;
    Fortran77Parser.RULE_unitIdentifier = 137;
    Fortran77Parser.RULE_formatIdentifier = 138;
    Fortran77Parser.RULE_formatStatement = 139;
    Fortran77Parser.RULE_fmtSpec = 140;
    Fortran77Parser.RULE_formatsep = 141;
    Fortran77Parser.RULE_formatedit = 142;
    Fortran77Parser.RULE_editElement = 143;
    Fortran77Parser.RULE_statementFunctionStatement = 144;
    Fortran77Parser.RULE_sfArgs = 145;
    Fortran77Parser.RULE_callStatement = 146;
    Fortran77Parser.RULE_subroutineCall = 147;
    Fortran77Parser.RULE_callArgumentList = 148;
    Fortran77Parser.RULE_callArgument = 149;
    Fortran77Parser.RULE_returnStatement = 150;
    Fortran77Parser.RULE_expression = 151;
    Fortran77Parser.RULE_ncExpr = 152;
    Fortran77Parser.RULE_lexpr0 = 153;
    Fortran77Parser.RULE_lexpr1 = 154;
    Fortran77Parser.RULE_lexpr2 = 155;
    Fortran77Parser.RULE_lexpr3 = 156;
    Fortran77Parser.RULE_lexpr4 = 157;
    Fortran77Parser.RULE_aexpr0 = 158;
    Fortran77Parser.RULE_aexpr1 = 159;
    Fortran77Parser.RULE_aexpr2 = 160;
    Fortran77Parser.RULE_aexpr3 = 161;
    Fortran77Parser.RULE_aexpr4 = 162;
    Fortran77Parser.RULE_iexpr = 163;
    Fortran77Parser.RULE_iexprCode = 164;
    Fortran77Parser.RULE_iexpr1 = 165;
    Fortran77Parser.RULE_iexpr2 = 166;
    Fortran77Parser.RULE_iexpr3 = 167;
    Fortran77Parser.RULE_iexpr4 = 168;
    Fortran77Parser.RULE_constantExpr = 169;
    Fortran77Parser.RULE_arithmeticExpression = 170;
    Fortran77Parser.RULE_integerExpr = 171;
    Fortran77Parser.RULE_intRealDpExpr = 172;
    Fortran77Parser.RULE_arithmeticConstExpr = 173;
    Fortran77Parser.RULE_intConstantExpr = 174;
    Fortran77Parser.RULE_characterExpression = 175;
    Fortran77Parser.RULE_concatOp = 176;
    Fortran77Parser.RULE_logicalExpression = 177;
    Fortran77Parser.RULE_logicalConstExpr = 178;
    Fortran77Parser.RULE_arrayElementName = 179;
    Fortran77Parser.RULE_subscripts = 180;
    Fortran77Parser.RULE_varRef = 181;
    Fortran77Parser.RULE_varRefCode = 182;
    Fortran77Parser.RULE_substringApp = 183;
    Fortran77Parser.RULE_variableName = 184;
    Fortran77Parser.RULE_arrayName = 185;
    Fortran77Parser.RULE_subroutineName = 186;
    Fortran77Parser.RULE_functionName = 187;
    Fortran77Parser.RULE_constant = 188;
    Fortran77Parser.RULE_unsignedArithmeticConstant = 189;
    Fortran77Parser.RULE_complexConstant = 190;
    Fortran77Parser.RULE_logicalConstant = 191;
    Fortran77Parser.RULE_identifier = 192;
    Fortran77Parser.RULE_to = 193;
    // tslint:disable:no-trailing-whitespace
    Fortran77Parser.ruleNames = [
        "program", "executableUnit", "mainProgram", "functionSubprogram", "subroutineSubprogram",
        "blockdataSubprogram", "otherSpecificationStatement", "executableStatement",
        "programStatement", "entryStatement", "functionStatement", "blockdataStatement",
        "subroutineStatement", "namelist", "statement", "subprogramBody", "wholeStatement",
        "endStatement", "dimensionStatement", "arrayDeclarator", "arrayDeclarators",
        "arrayDeclaratorExtents", "arrayDeclaratorExtent", "equivalenceStatement",
        "equivEntityGroup", "equivEntity", "commonStatement", "commonName", "commonItem",
        "commonItems", "commonBlock", "commentStatement", "typeStatement", "typeStatementNameList",
        "typeStatementName", "typeStatementNameCharList", "typeStatementNameChar",
        "typeStatementLenSpec", "typename", "type", "typenameLen", "pointerStatement",
        "pointerDecl", "implicitStatement", "implicitSpec", "implicitSpecs", "implicitNone",
        "implicitLetter", "implicitRange", "implicitLetters", "lenSpecification",
        "characterWithLen", "cwlLen", "parameterStatement", "paramlist", "paramassign",
        "externalStatement", "intrinsicStatement", "saveStatement", "saveEntity",
        "dataStatement", "dataStatementItem", "dataStatementMultiple", "dataStatementEntity",
        "dse1", "dse2", "dataImpliedDo", "dataImpliedDoRange", "dataImpliedDoList",
        "dataImpliedDoListWhat", "gotoStatement", "unconditionalGoto", "computedGoto",
        "lblRef", "labelList", "assignedGoto", "ifStatement", "arithmeticIfStatement",
        "logicalIfStatement", "blockIfStatement", "firstIfBlock", "elseIfStatement",
        "elseStatement", "endIfStatement", "doStatement", "doVarArgs", "doWithLabel",
        "doBody", "doWithEndDo", "enddoStatement", "continueStatement", "stopStatement",
        "pauseStatement", "writeStatement", "readStatement", "printStatement",
        "assignmentStatement", "controlInfoList", "controlErrSpec", "controlInfoListItem",
        "ioList", "ioListItem", "ioImpliedDoList", "openStatement", "openControl",
        "controlFmt", "controlUnit", "controlRec", "controlEnd", "controlErr",
        "controlIostat", "controlFile", "controlStatus", "controlAccess", "controlPosition",
        "controlForm", "controlRecl", "controlBlank", "controlExist", "controlOpened",
        "controlNumber", "controlNamed", "controlName", "controlSequential", "controlDirect",
        "controlFormatted", "controlUnformatted", "controlNextrec", "closeStatement",
        "closeControl", "inquireStatement", "inquireControl", "backspaceStatement",
        "endfileStatement", "rewindStatement", "berFinish", "berFinishItem", "unitIdentifier",
        "formatIdentifier", "formatStatement", "fmtSpec", "formatsep", "formatedit",
        "editElement", "statementFunctionStatement", "sfArgs", "callStatement",
        "subroutineCall", "callArgumentList", "callArgument", "returnStatement",
        "expression", "ncExpr", "lexpr0", "lexpr1", "lexpr2", "lexpr3", "lexpr4",
        "aexpr0", "aexpr1", "aexpr2", "aexpr3", "aexpr4", "iexpr", "iexprCode",
        "iexpr1", "iexpr2", "iexpr3", "iexpr4", "constantExpr", "arithmeticExpression",
        "integerExpr", "intRealDpExpr", "arithmeticConstExpr", "intConstantExpr",
        "characterExpression", "concatOp", "logicalExpression", "logicalConstExpr",
        "arrayElementName", "subscripts", "varRef", "varRefCode", "substringApp",
        "variableName", "arrayName", "subroutineName", "functionName", "constant",
        "unsignedArithmeticConstant", "complexConstant", "logicalConstant", "identifier",
        "to",
    ];
    Fortran77Parser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "'$'",
        "','", "'('", "')'", "':'", "'='", "'-'", "'+'", "'/'", "'*'", "'**'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'XCON'", "'PCON'", "'FCON'", "'CCON'", "'HOLLERITH'", "'CONCATOP'",
        "'CTRLDIRECT'", "'CTRLREC'", "'TO'", "'SUBPROGRAMBLOCK'", "'DOBLOCK'",
        "'AIF'", "'THENBLOCK'", "'ELSEBLOCK'", "'CODEROOT'",
    ];
    Fortran77Parser._SYMBOLIC_NAMES = [
        undefined, "PROGRAM", "ENTRY", "FUNCTION", "BLOCK", "SUBROUTINE", "END",
        "DIMENSION", "REAL", "EQUIVALENCE", "COMMON", "POINTER", "IMPLICIT", "NONE",
        "CHARACTER", "PARAMETER", "EXTERNAL", "INTRINSIC", "SAVE", "DATA", "GO",
        "GOTO", "IF", "THEN", "ELSE", "ENDIF", "ELSEIF", "DO", "CONTINUE", "STOP",
        "ENDDO", "PAUSE", "WRITE", "READ", "PRINT", "OPEN", "FMT", "UNIT", "ERR",
        "IOSTAT", "FORMAT", "LET", "CALL", "RETURN", "CLOSE", "DOUBLE", "IOSTART",
        "SEQUENTIAL", "ICON", "LABEL", "FILE", "STATUS", "ACCESS", "POSITION",
        "FORM", "RECL", "BLANK", "EXIST", "OPENED", "NUMBER", "NAMED", "NAME_",
        "FORMATTED", "UNFORMATTED", "NEXTREC", "INQUIRE", "BACKSPACE", "ENDFILE",
        "REWIND", "DOLLAR", "COMMA", "LPAREN", "RPAREN", "COLON", "ASSIGN", "MINUS",
        "PLUS", "DIV", "STAR", "POWER", "LNOT", "LAND", "LOR", "EQV", "NEQV",
        "XOR", "EOR", "LT", "LE", "GT", "GE", "NE", "EQ", "TRUE", "FALSE", "XCON",
        "PCON", "FCON", "CCON", "HOLLERITH", "CONCATOP", "CTRLDIRECT", "CTRLREC",
        "TO", "SUBPROGRAMBLOCK", "DOBLOCK", "AIF", "THENBLOCK", "ELSEBLOCK", "CODEROOT",
        "COMPLEX", "PRECISION", "INTEGER", "LOGICAL", "SCON", "RCON", "NAME",
        "COMMENT", "STRINGLITERAL", "EOL", "WS",
    ];
    Fortran77Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(Fortran77Parser._LITERAL_NAMES, Fortran77Parser._SYMBOLIC_NAMES, []);
    Fortran77Parser._serializedATNSegments = 3;
    Fortran77Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03z\u0685\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
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
        "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
        "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
        "\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
        "\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
        "\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
        "\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
        "\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
        "\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
        "\x04\xC3\t\xC3\x03\x02\x06\x02\u0188\n\x02\r\x02\x0E\x02\u0189\x03\x02" +
        "\x07\x02\u018D\n\x02\f\x02\x0E\x02\u0190\v\x02\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x05\x03\u0196\n\x03\x03\x04\x05\x04\u0199\n\x04\x03\x04\x03\x04" +
        "\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\b\x03\b\x05\b\u01AA\n\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
        "\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x05\t\u01BE\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x05\v\u01CA\n\v\x03\f\x05\f\u01CD\n\f\x03\f\x03\f\x03\f" +
        "\x03\f\x05\f\u01D3\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x05\x0E\u01DE\n\x0E\x03\x0E\x05\x0E\u01E1\n\x0E\x03\x0F\x03" +
        "\x0F\x03\x0F\x07\x0F\u01E6\n\x0F\f\x0F\x0E\x0F\u01E9\v\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01F9\n\x10\x03\x11\x06\x11\u01FC" +
        "\n\x11\r\x11\x0E\x11\u01FD\x03\x11\x03\x11\x03\x12\x05\x12\u0203\n\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x13\x05\x13\u0209\n\x13\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
        "\x16\x03\x16\x07\x16\u0218\n\x16\f\x16\x0E\x16\u021B\v\x16\x03\x17\x03" +
        "\x17\x03\x17\x07\x17\u0220\n\x17\f\x17\x0E\x17\u0223\v\x17\x03\x18\x03" +
        "\x18\x03\x18\x03\x18\x05\x18\u0229\n\x18\x05\x18\u022B\n\x18\x03\x18\x05" +
        "\x18\u022E\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0234\n\x19\f" +
        "\x19\x0E\x19\u0237\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u023D" +
        "\n\x1A\f\x1A\x0E\x1A\u0240\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u024A\n\x1C\f\x1C\x0E\x1C\u024D\v\x1C" +
        "\x03\x1C\x05\x1C\u0250\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0256" +
        "\n\x1D\x03\x1E\x03\x1E\x05\x1E\u025A\n\x1E\x03\x1F\x03\x1F\x03\x1F\x07" +
        "\x1F\u025F\n\x1F\f\x1F\x0E\x1F\u0262\v\x1F\x03 \x03 \x03 \x03!\x03!\x03" +
        "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u026F\n\"\x03#\x03#\x03#\x07#\u0274" +
        "\n#\f#\x0E#\u0277\v#\x03$\x03$\x05$\u027B\n$\x03%\x03%\x03%\x07%\u0280" +
        "\n%\f%\x0E%\u0283\v%\x03&\x03&\x05&\u0287\n&\x03\'\x03\'\x03\'\x03(\x03" +
        "(\x03(\x03(\x05(\u0290\n(\x05(\u0292\n(\x03(\x03(\x03(\x03(\x03(\x03(" +
        "\x05(\u029A\n(\x03)\x03)\x05)\u029E\n)\x03*\x03*\x03*\x03+\x03+\x03+\x03" +
        "+\x07+\u02A7\n+\f+\x0E+\u02AA\v+\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03" +
        "-\x03-\x05-\u02B5\n-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x07/\u02BF" +
        "\n/\f/\x0E/\u02C2\v/\x030\x030\x031\x031\x032\x032\x032\x052\u02CB\n2" +
        "\x033\x033\x033\x073\u02D0\n3\f3\x0E3\u02D3\v3\x034\x034\x034\x034\x03" +
        "4\x034\x034\x034\x034\x034\x034\x034\x054\u02E1\n4\x035\x035\x055\u02E5" +
        "\n5\x036\x036\x036\x037\x037\x037\x037\x037\x038\x038\x038\x078\u02F2" +
        "\n8\f8\x0E8\u02F5\v8\x039\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03" +
        ";\x03<\x03<\x03<\x03<\x07<\u0305\n<\f<\x0E<\u0308\v<\x05<\u030A\n<\x03" +
        "=\x03=\x03=\x03=\x05=\u0310\n=\x03>\x03>\x03>\x05>\u0315\n>\x03>\x07>" +
        "\u0318\n>\f>\x0E>\u031B\v>\x03?\x03?\x05?\u031F\n?\x03@\x03@\x05@\u0323" +
        "\n@\x03@\x03@\x05@\u0327\n@\x03A\x03A\x03A\x03B\x03B\x03B\x07B\u032F\n" +
        "B\fB\x0EB\u0332\vB\x03B\x03B\x03C\x03C\x03C\x07C\u0339\nC\fC\x0EC\u033C" +
        "\vC\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03" +
        "E\x03E\x05E\u034D\nE\x03F\x03F\x03F\x05F\u0352\nF\x03G\x03G\x05G\u0356" +
        "\nG\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u035E\nH\x03I\x03I\x03J\x03J\x03" +
        "J\x03J\x05J\u0366\nJ\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x07L\u036F\nL" +
        "\fL\x0EL\u0372\vL\x03M\x03M\x05M\u0376\nM\x03M\x03M\x03M\x03M\x05M\u037C" +
        "\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0385\nN\x03O\x03O\x03O\x03" +
        "O\x03O\x03O\x03P\x03P\x03Q\x03Q\x07Q\u0391\nQ\fQ\x0EQ\u0394\vQ\x03Q\x05" +
        "Q\u0397\nQ\x03Q\x03Q\x03R\x03R\x06R\u039D\nR\rR\x0ER\u039E\x03S\x03S\x03" +
        "S\x05S\u03A4\nS\x03S\x03S\x03S\x03S\x03S\x06S\u03AB\nS\rS\x0ES\u03AC\x03" +
        "T\x03T\x06T\u03B1\nT\rT\x0ET\u03B2\x03U\x03U\x03U\x05U\u03B8\nU\x03V\x03" +
        "V\x03V\x05V\u03BD\nV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u03C6\nW" +
        "\x03X\x03X\x05X\u03CA\nX\x03X\x03X\x03Y\x06Y\u03CF\nY\rY\x0EY\u03D0\x03" +
        "Z\x03Z\x03Z\x03Z\x03[\x03[\x03[\x05[\u03DA\n[\x03\\\x03\\\x03]\x03]\x05" +
        "]\u03E0\n]\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x05_\u03EA\n_\x03_" +
        "\x06_\u03ED\n_\r_\x0E_\u03EE\x05_\u03F1\n_\x03`\x03`\x03`\x03`\x06`\u03F7" +
        "\n`\r`\x0E`\u03F8\x05`\u03FB\n`\x03a\x03a\x03a\x03a\x06a\u0401\na\ra\x0E" +
        "a\u0402\x05a\u0405\na\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x07c\u040E\n" +
        "c\fc\x0Ec\u0411\vc\x03d\x03d\x03d\x03d\x05d\u0417\nd\x03e\x03e\x03e\x03" +
        "e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
        "e\x03e\x03e\x03e\x03e\x03e\x05e\u0430\ne\x03f\x03f\x03f\x03f\x03f\x03" +
        "f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u0442\nf\x03" +
        "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u044D\ng\x03h\x03h\x03" +
        "h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x05h\u0459\nh\x03h\x03h\x03i\x03" +
        "i\x03i\x03i\x03i\x07i\u0462\ni\fi\x0Ei\u0465\vi\x03i\x03i\x03j\x03j\x03" +
        "j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x05" +
        "j\u0479\nj\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03" +
        "j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x05j\u048E\nj\x03k\x03k\x03l\x03" +
        "l\x03m\x03m\x03n\x03n\x03o\x03o\x03p\x03p\x03q\x03q\x03r\x03r\x03s\x03" +
        "s\x03t\x03t\x03u\x03u\x03v\x03v\x03w\x03w\x03x\x03x\x03y\x03y\x03z\x03" +
        "z\x03{\x03{\x03|\x03|\x03}\x03}\x03~\x03~\x03\x7F\x03\x7F\x03\x80\x03" +
        "\x80\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u04C3" +
        "\n\x82\f\x82\x0E\x82\u04C6\v\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83" +
        "\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
        "\x03\x83\x03\x83\x05\x83\u04D8\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
        "\x84\x07\x84\u04DF\n\x84\f\x84\x0E\x84\u04E2\v\x84\x03\x84\x03\x84\x03" +
        "\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
        "\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
        "\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u04FE\n\x85\x03\x85" +
        "\x03\x85\x03\x85\x03\x85\x05\x85\u0504\n\x85\x03\x86\x03\x86\x03\x86\x03" +
        "\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03" +
        "\x89\x03\x89\x03\x89\x03\x89\x07\x89\u0516\n\x89\f\x89\x0E\x89\u0519\v" +
        "\x89\x03\x89\x03\x89\x05\x89\u051D\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A" +
        "\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0529\n\x8A\x03" +
        "\x8B\x03\x8B\x05\x8B\u052D\n\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0532" +
        "\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E" +
        "\x05\x8E\u053C\n\x8E\x05\x8E\u053E\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0542" +
        "\n\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0548\n\x8E\x05\x8E\u054A" +
        "\n\x8E\x07\x8E\u054C\n\x8E\f\x8E\x0E\x8E\u054F\v\x8E\x03\x8F\x03\x8F\x03" +
        "\x90\x03\x90\x03\x90\x03\x90\x03\x90\x05\x90\u0558\n\x90\x03\x90\x03\x90" +
        "\x05\x90\u055C\n\x90\x03\x90\x05\x90\u055F\n\x90\x05\x90\u0561\n\x90\x03" +
        "\x91\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u0568\n\x91\x03\x92\x03\x92" +
        "\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x94" +
        "\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95\x05\x95\u057A\n\x95\x03\x95\x05" +
        "\x95\u057D\n\x95\x03\x96\x03\x96\x03\x96\x07\x96\u0582\n\x96\f\x96\x0E" +
        "\x96\u0585\v\x96\x03\x97\x03\x97\x03\x97\x05\x97\u058A\n\x97\x03\x98\x03" +
        "\x98\x05\x98\u058E\n\x98\x03\x99\x03\x99\x03\x99\x05\x99\u0593\n\x99\x03" +
        "\x9A\x03\x9A\x03\x9A\x03\x9A\x07\x9A\u0599\n\x9A\f\x9A\x0E\x9A\u059C\v" +
        "\x9A\x03\x9B\x03\x9B\x03\x9B\x07\x9B\u05A1\n\x9B\f\x9B\x0E\x9B\u05A4\v" +
        "\x9B\x03\x9C\x03\x9C\x03\x9C\x07\x9C\u05A9\n\x9C\f\x9C\x0E\x9C\u05AC\v" +
        "\x9C\x03\x9D\x03\x9D\x03\x9D\x07\x9D\u05B1\n\x9D\f\x9D\x0E\x9D\u05B4\v" +
        "\x9D\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u05B9\n\x9E\x03\x9F\x03\x9F\x03\x9F" +
        "\x05\x9F\u05BE\n\x9F\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u05C3\n\xA0\f\xA0" +
        "\x0E\xA0\u05C6\v\xA0\x03\xA1\x03\xA1\x03\xA1\x07\xA1\u05CB\n\xA1\f\xA1" +
        "\x0E\xA1\u05CE\v\xA1\x03\xA2\x07\xA2\u05D1\n\xA2\f\xA2\x0E\xA2\u05D4\v" +
        "\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x07\xA3\u05DB\n\xA3\f\xA3" +
        "\x0E\xA3\u05DE\v\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03" +
        "\xA4\x03\xA4\x03\xA4\x03\xA4\x05\xA4\u05EA\n\xA4\x03\xA5\x03\xA5\x03\xA5" +
        "\x07\xA5\u05EF\n\xA5\f\xA5\x0E\xA5\u05F2\v\xA5\x03\xA6\x03\xA6\x03\xA6" +
        "\x07\xA6\u05F7\n\xA6\f\xA6\x0E\xA6\u05FA\v\xA6\x03\xA7\x03\xA7\x03\xA7" +
        "\x07\xA7\u05FF\n\xA7\f\xA7\x0E\xA7\u0602\v\xA7\x03\xA8\x07\xA8\u0605\n" +
        "\xA8\f\xA8\x0E\xA8\u0608\v\xA8\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xA9" +
        "\x05\xA9\u060F\n\xA9\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x05" +
        "\xAA\u0617\n\xAA\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAE" +
        "\x03\xAE\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB2\x03\xB2" +
        "\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5" +
        "\x03\xB5\x07\xB5\u0633\n\xB5\f\xB5\x0E\xB5\u0636\v\xB5\x03\xB5\x03\xB5" +
        "\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x07\xB6\u063E\n\xB6\f\xB6\x0E\xB6\u0641" +
        "\v\xB6\x05\xB6\u0643\n\xB6\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7\x05" +
        "\xB7\u064A\n\xB7\x05\xB7\u064C\n\xB7\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u0651" +
        "\n\xB8\x05\xB8\u0653\n\xB8\x03\xB9\x03\xB9\x05\xB9\u0657\n\xB9\x03\xB9" +
        "\x03\xB9\x05\xB9\u065B\n\xB9\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBB\x03" +
        "\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBE\x05\xBE\u0668\n\xBE\x03\xBE" +
        "\x03\xBE\x03\xBE\x05\xBE\u066D\n\xBE\x03\xBF\x03\xBF\x05\xBF\u0671\n\xBF" +
        "\x03\xC0\x03\xC0\x05\xC0\u0675\n\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u067A" +
        "\n\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC3" +
        "\x03\xC3\x03\xC3\x02\x02\x02\xC4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
        "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
        "\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
        ":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
        "V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02" +
        "r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88" +
        "\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A" +
        "\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC" +
        "\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE" +
        "\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0" +
        "\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2" +
        "\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4" +
        "\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
        "\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
        "\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
        "\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
        "\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
        "\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
        "\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
        "\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166" +
        "\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174" +
        "\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182" +
        "\x02\u0184\x02\x02\x0F\x04\x02\n\nvv\x04\x0222vv\x03\x02\x16\x17\x04\x02" +
        "22ee\x04\x02eett\x05\x02GGKKOO\x03\x02MN\x06\x02cceettvv\x03\x02UV\x03" +
        "\x02Y^\x03\x02OP\x04\x0222uu\x03\x02_`\x02\u06AB\x02\u0187\x03\x02\x02" +
        "\x02\x04\u0195\x03\x02\x02\x02\x06\u0198\x03\x02\x02\x02\b\u019C\x03\x02" +
        "\x02\x02\n\u019F\x03\x02\x02\x02\f\u01A2\x03\x02\x02\x02\x0E\u01A9\x03" +
        "\x02\x02\x02\x10\u01BD\x03\x02\x02\x02\x12\u01BF\x03\x02\x02\x02\x14\u01C3" +
        "\x03\x02\x02\x02\x16\u01CC\x03\x02\x02\x02\x18\u01D6\x03\x02\x02\x02\x1A" +
        "\u01D9\x03\x02\x02\x02\x1C\u01E2\x03\x02\x02\x02\x1E\u01F8\x03\x02\x02" +
        "\x02 \u01FB\x03\x02\x02\x02\"\u0202\x03\x02\x02\x02$\u0208\x03\x02\x02" +
        "\x02&\u020C\x03\x02\x02\x02(\u020F\x03\x02\x02\x02*\u0214\x03\x02\x02" +
        "\x02,\u021C\x03\x02\x02\x02.\u022D\x03\x02\x02\x020\u022F\x03\x02\x02" +
        "\x022\u0238\x03\x02\x02\x024\u0243\x03\x02\x02\x026\u0245\x03\x02\x02" +
        "\x028\u0251\x03\x02\x02\x02:\u0259\x03\x02\x02\x02<\u025B\x03\x02\x02" +
        "\x02>\u0263\x03\x02\x02\x02@\u0266\x03\x02\x02\x02B\u026E\x03\x02\x02" +
        "\x02D\u0270\x03\x02\x02\x02F\u027A\x03\x02\x02\x02H\u027C\x03\x02\x02" +
        "\x02J\u0284\x03\x02\x02\x02L\u0288\x03\x02\x02\x02N\u0299\x03\x02\x02" +
        "\x02P\u029D\x03\x02\x02\x02R\u029F\x03\x02\x02\x02T\u02A2\x03\x02\x02" +
        "\x02V\u02AB\x03\x02\x02\x02X\u02B1\x03\x02\x02\x02Z\u02B6\x03\x02\x02" +
        "\x02\\\u02BB\x03\x02\x02\x02^\u02C3\x03\x02\x02\x02`\u02C5\x03\x02\x02" +
        "\x02b\u02C7\x03\x02\x02\x02d\u02CC\x03\x02\x02\x02f\u02E0\x03\x02\x02" +
        "\x02h\u02E2\x03\x02\x02\x02j\u02E6\x03\x02\x02\x02l\u02E9\x03\x02\x02" +
        "\x02n\u02EE\x03\x02\x02\x02p\u02F6\x03\x02\x02\x02r\u02FA\x03\x02\x02" +
        "\x02t\u02FD\x03\x02\x02\x02v\u0300\x03\x02\x02\x02x\u030F\x03\x02\x02" +
        "\x02z\u0311\x03\x02\x02\x02|\u031E\x03\x02\x02\x02~\u0322\x03\x02\x02" +
        "\x02\x80\u0328\x03\x02\x02\x02\x82\u032B\x03\x02\x02\x02\x84\u0335\x03" +
        "\x02\x02\x02\x86\u033F\x03\x02\x02\x02\x88\u0345\x03\x02\x02\x02\x8A\u0351" +
        "\x03\x02\x02\x02\x8C\u0355\x03\x02\x02\x02\x8E\u0357\x03\x02\x02\x02\x90" +
        "\u035F\x03\x02\x02\x02\x92\u0361\x03\x02\x02\x02\x94\u0369\x03\x02\x02" +
        "\x02\x96\u036B\x03\x02\x02\x02\x98\u0373\x03\x02\x02\x02\x9A\u037D\x03" +
        "\x02\x02\x02\x9C\u0386\x03\x02\x02\x02\x9E\u038C\x03\x02\x02\x02\xA0\u038E" +
        "\x03\x02\x02\x02\xA2\u039A\x03\x02\x02\x02\xA4\u03A3\x03\x02\x02\x02\xA6" +
        "\u03AE\x03\x02\x02\x02\xA8\u03B7\x03\x02\x02\x02\xAA\u03B9\x03\x02\x02" +
        "\x02\xAC\u03BE\x03\x02\x02\x02\xAE\u03C7\x03\x02\x02\x02\xB0\u03CE\x03" +
        "\x02\x02\x02\xB2\u03D2\x03\x02\x02\x02\xB4\u03D9\x03\x02\x02\x02\xB6\u03DB" +
        "\x03\x02\x02\x02\xB8\u03DD\x03\x02\x02\x02\xBA\u03E1\x03\x02\x02\x02\xBC" +
        "\u03E4\x03\x02\x02\x02\xBE\u03F2\x03\x02\x02\x02\xC0\u03FC\x03\x02\x02" +
        "\x02\xC2\u0406\x03\x02\x02\x02\xC4\u040A\x03\x02\x02\x02\xC6\u0412\x03" +
        "\x02\x02\x02\xC8\u042F\x03\x02\x02\x02\xCA\u0441\x03\x02\x02\x02\xCC\u044C" +
        "\x03\x02\x02\x02\xCE\u044E\x03\x02\x02\x02\xD0\u045C\x03\x02\x02\x02\xD2" +
        "\u048D\x03\x02\x02\x02\xD4\u048F\x03\x02\x02\x02\xD6\u0491\x03\x02\x02" +
        "\x02\xD8\u0493\x03\x02\x02\x02\xDA\u0495\x03\x02\x02\x02\xDC\u0497\x03" +
        "\x02\x02\x02\xDE\u0499\x03\x02\x02\x02\xE0\u049B\x03\x02\x02\x02\xE2\u049D" +
        "\x03\x02\x02\x02\xE4\u049F\x03\x02\x02\x02\xE6\u04A1\x03\x02\x02\x02\xE8" +
        "\u04A3\x03\x02\x02\x02\xEA\u04A5\x03\x02\x02\x02\xEC\u04A7\x03\x02\x02" +
        "\x02\xEE\u04A9\x03\x02\x02\x02\xF0\u04AB\x03\x02\x02\x02\xF2\u04AD\x03" +
        "\x02\x02\x02\xF4\u04AF\x03\x02\x02\x02\xF6\u04B1\x03\x02\x02\x02\xF8\u04B3" +
        "\x03\x02\x02\x02\xFA\u04B5\x03\x02\x02\x02\xFC\u04B7\x03\x02\x02\x02\xFE" +
        "\u04B9\x03\x02\x02\x02\u0100\u04BB\x03\x02\x02\x02\u0102\u04BD\x03\x02" +
        "\x02\x02\u0104\u04D7\x03\x02\x02\x02\u0106\u04D9\x03\x02\x02\x02\u0108" +
        "\u0503\x03\x02\x02\x02\u010A\u0505\x03\x02\x02\x02\u010C\u0508\x03\x02" +
        "\x02\x02\u010E\u050B\x03\x02\x02\x02\u0110\u051C\x03\x02\x02\x02\u0112" +
        "\u0528\x03\x02\x02\x02\u0114\u052C\x03\x02\x02\x02\u0116\u0531\x03\x02" +
        "\x02\x02\u0118\u0533\x03\x02\x02\x02\u011A\u053D\x03\x02\x02\x02\u011C" +
        "\u0550\x03\x02\x02\x02\u011E\u0560\x03\x02\x02\x02\u0120\u0567\x03\x02" +
        "\x02\x02\u0122\u0569\x03\x02\x02\x02\u0124\u056E\x03\x02\x02\x02\u0126" +
        "\u0573\x03\x02\x02\x02\u0128\u0576\x03\x02\x02\x02\u012A\u057E\x03\x02" +
        "\x02\x02\u012C\u0589\x03\x02\x02\x02\u012E\u058B\x03\x02\x02\x02\u0130" +
        "\u058F\x03\x02\x02\x02\u0132\u0594\x03\x02\x02\x02\u0134\u059D\x03\x02" +
        "\x02\x02\u0136\u05A5\x03\x02\x02\x02\u0138\u05AD\x03\x02\x02\x02\u013A" +
        "\u05B8\x03\x02\x02\x02\u013C\u05BA\x03\x02\x02\x02\u013E\u05BF\x03\x02" +
        "\x02\x02\u0140\u05C7\x03\x02\x02\x02\u0142\u05D2\x03\x02\x02\x02\u0144" +
        "\u05D7\x03\x02\x02\x02\u0146\u05E9\x03\x02\x02\x02\u0148\u05EB\x03\x02" +
        "\x02\x02\u014A";
    Fortran77Parser._serializedATNSegment1 = "\u05F3\x03\x02\x02\x02\u014C\u05FB\x03\x02\x02\x02\u014E\u0606\x03\x02" +
        "\x02\x02\u0150\u060B\x03\x02\x02\x02\u0152\u0616\x03\x02\x02\x02\u0154" +
        "\u0618\x03\x02\x02\x02\u0156\u061A\x03\x02\x02\x02\u0158\u061C\x03\x02" +
        "\x02\x02\u015A\u061E\x03\x02\x02\x02\u015C\u0620\x03\x02\x02\x02\u015E" +
        "\u0622\x03\x02\x02\x02\u0160\u0624\x03\x02\x02\x02\u0162\u0626\x03\x02" +
        "\x02\x02\u0164\u0629\x03\x02\x02\x02\u0166\u062B\x03\x02\x02\x02\u0168" +
        "\u062D\x03\x02\x02\x02\u016A\u0639\x03\x02\x02\x02\u016C\u0646\x03\x02" +
        "\x02\x02\u016E\u064D\x03\x02\x02\x02\u0170\u0654\x03\x02\x02\x02\u0172" +
        "\u065E\x03\x02\x02\x02\u0174\u0660\x03\x02\x02\x02\u0176\u0662\x03\x02" +
        "\x02\x02\u0178\u0664\x03\x02\x02\x02\u017A\u066C\x03\x02\x02\x02\u017C" +
        "\u0670\x03\x02\x02\x02\u017E\u0672\x03\x02\x02\x02\u0180\u067E\x03\x02" +
        "\x02\x02\u0182\u0680\x03\x02\x02\x02\u0184\u0682\x03\x02\x02\x02\u0186" +
        "\u0188\x05\x04\x03\x02\u0187\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02" +
        "\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A" +
        "\u018E\x03\x02\x02\x02\u018B\u018D\x07y\x02\x02\u018C\u018B\x03\x02\x02" +
        "\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F" +
        "\x03\x02\x02\x02\u018F\x03\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02" +
        "\u0191\u0196\x05\b\x05\x02\u0192\u0196\x05\x06\x04\x02\u0193\u0196\x05" +
        "\n\x06\x02\u0194\u0196\x05\f\x07\x02\u0195\u0191\x03\x02\x02\x02\u0195" +
        "\u0192\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02" +
        "\x02\x02\u0196\x05\x03\x02\x02\x02\u0197\u0199\x05\x12\n\x02\u0198\u0197" +
        "\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02" +
        "\u019A\u019B\x05 \x11\x02\u019B\x07\x03\x02\x02\x02\u019C\u019D\x05\x16" +
        "\f\x02\u019D\u019E\x05 \x11\x02\u019E\t\x03\x02\x02\x02\u019F\u01A0\x05" +
        "\x1A\x0E\x02\u01A0\u01A1\x05 \x11\x02\u01A1\v\x03\x02\x02\x02\u01A2\u01A3" +
        "\x05\x18\r\x02\u01A3\u01A4\x05 \x11\x02\u01A4\r\x03\x02\x02\x02\u01A5" +
        "\u01AA\x05&\x14\x02\u01A6\u01AA\x050\x19\x02\u01A7\u01AA\x05t;\x02\u01A8" +
        "\u01AA\x05v<\x02\u01A9\u01A5\x03\x02\x02\x02\u01A9\u01A6\x03\x02\x02\x02" +
        "\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA\x0F\x03" +
        "\x02\x02\x02\u01AB\u01BE\x05\xC2b\x02\u01AC\u01BE\x05\x8EH\x02\u01AD\u01BE" +
        "\x05\x9AN\x02\u01AE\u01BE\x05\xAAV\x02\u01AF\u01BE\x05\xB6\\\x02\u01B0" +
        "\u01BE\x05\xB8]\x02\u01B1\u01BE\x05\xBA^\x02\u01B2\u01BE\x05\xBE`\x02" +
        "\u01B3\u01BE\x05\xBC_\x02\u01B4\u01BE\x05\xC0a\x02\u01B5\u01BE\x05\u010E" +
        "\x88\x02\u01B6\u01BE\x05\u010A\x86\x02\u01B7\u01BE\x05\xD0i\x02\u01B8" +
        "\u01BE\x05\u0102\x82\x02\u01B9\u01BE\x05\u010C\x87\x02\u01BA\u01BE\x05" +
        "\u0106\x84\x02\u01BB\u01BE\x05\u0126\x94\x02\u01BC\u01BE\x05\u012E\x98" +
        "\x02\u01BD\u01AB\x03\x02\x02\x02\u01BD\u01AC\x03\x02\x02\x02\u01BD\u01AD" +
        "\x03\x02\x02\x02\u01BD\u01AE\x03\x02\x02\x02\u01BD\u01AF\x03\x02\x02\x02" +
        "\u01BD\u01B0\x03\x02\x02\x02\u01BD\u01B1\x03\x02\x02\x02\u01BD\u01B2\x03" +
        "\x02\x02\x02\u01BD\u01B3\x03\x02\x02\x02\u01BD\u01B4\x03\x02\x02\x02\u01BD" +
        "\u01B5\x03\x02\x02\x02\u01BD\u01B6\x03\x02\x02\x02\u01BD\u01B7\x03\x02" +
        "\x02\x02\u01BD\u01B8\x03\x02\x02\x02\u01BD\u01B9\x03\x02\x02\x02\u01BD" +
        "\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02" +
        "\x02\x02\u01BE\x11\x03\x02\x02\x02\u01BF\u01C0\x07\x03\x02\x02\u01C0\u01C1" +
        "\x07v\x02\x02\u01C1\u01C2\x07y\x02\x02\u01C2\x13\x03\x02\x02\x02\u01C3" +
        "\u01C4\x07\x04\x02\x02\u01C4\u01C9\x07v\x02\x02\u01C5\u01C6\x07I\x02\x02" +
        "\u01C6\u01C7\x05\x1C\x0F\x02\u01C7\u01C8\x07J\x02\x02\u01C8\u01CA\x03" +
        "\x02\x02\x02\u01C9\u01C5\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA" +
        "\x15\x03\x02\x02\x02\u01CB\u01CD\x05P)\x02\u01CC\u01CB\x03\x02\x02\x02" +
        "\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x07" +
        "\x05\x02\x02\u01CF\u01D0\x07v\x02\x02\u01D0\u01D2\x07I\x02\x02\u01D1\u01D3" +
        "\x05\x1C\x0F\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
        "\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x07J\x02\x02\u01D5\x17\x03\x02" +
        "\x02\x02\u01D6\u01D7\x07\x06\x02\x02\u01D7\u01D8\x07v\x02\x02\u01D8\x19" +
        "\x03\x02\x02\x02\u01D9\u01DA\x07\x07\x02\x02\u01DA\u01E0\x07v\x02\x02" +
        "\u01DB\u01DD\x07I\x02\x02\u01DC\u01DE\x05\x1C\x0F\x02\u01DD\u01DC\x03" +
        "\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
        "\u01E1\x07J\x02\x02\u01E0\u01DB\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02" +
        "\x02\u01E1\x1B\x03\x02\x02\x02\u01E2\u01E7\x05\u0182\xC2\x02\u01E3\u01E4" +
        "\x07H\x02\x02\u01E4\u01E6\x05\u0182\xC2\x02\u01E5\u01E3\x03\x02\x02\x02" +
        "\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03" +
        "\x02\x02\x02\u01E8\x1D\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
        "\u01F9\x05\x14\v\x02\u01EB\u01F9\x05X-\x02\u01EC\u01F9\x05l7\x02\u01ED" +
        "\u01F9\x05B\"\x02\u01EE\u01F9\x056\x1C\x02\u01EF\u01F9\x05T+\x02\u01F0" +
        "\u01F9\x05r:\x02\u01F1\u01F9\x05\x0E\b\x02\u01F2\u01F9\x05z>\x02\u01F3" +
        "\u01F4\x05\u0122\x92\x02\u01F4\u01F5\x05\u0122\x92\x02\u01F5\u01F9\x03" +
        "\x02\x02\x02\u01F6\u01F9\x05\x10\t\x02\u01F7\u01F9\x05@!\x02\u01F8\u01EA" +
        "\x03\x02\x02\x02\u01F8\u01EB\x03\x02\x02\x02\u01F8\u01EC\x03\x02\x02\x02" +
        "\u01F8\u01ED\x03\x02\x02\x02\u01F8\u01EE\x03\x02\x02\x02\u01F8\u01EF\x03" +
        "\x02\x02\x02\u01F8\u01F0\x03\x02\x02\x02\u01F8\u01F1\x03\x02\x02\x02\u01F8" +
        "\u01F2\x03\x02\x02\x02\u01F8\u01F3\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
        "\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\x1F\x03\x02\x02\x02\u01FA\u01FC" +
        "\x05\"\x12\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
        "\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03" +
        "\x02\x02\x02\u01FF\u0200\x05$\x13\x02\u0200!\x03\x02\x02\x02\u0201\u0203" +
        "\x073\x02\x02\u0202\u0201\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
        "\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x05\x1E\x10\x02\u0205\u0206\x07" +
        "y\x02\x02\u0206#\x03\x02\x02\x02\u0207\u0209\x073\x02\x02\u0208\u0207" +
        "\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
        "\u020A\u020B\x07\b\x02\x02\u020B%\x03\x02\x02\x02\u020C\u020D\x07\t\x02" +
        "\x02\u020D\u020E\x05*\x16\x02\u020E\'\x03\x02\x02\x02\u020F\u0210\t\x02" +
        "\x02\x02\u0210\u0211\x07I\x02\x02\u0211\u0212\x05,\x17\x02\u0212\u0213" +
        "\x07J\x02\x02\u0213)\x03\x02\x02\x02\u0214\u0219\x05(\x15\x02\u0215\u0216" +
        "\x07H\x02\x02\u0216\u0218\x05(\x15\x02\u0217\u0215\x03\x02\x02\x02\u0218" +
        "\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02" +
        "\x02\x02\u021A+\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u0221" +
        "\x05.\x18\x02\u021D\u021E\x07H\x02\x02\u021E\u0220\x05.\x18\x02\u021F" +
        "\u021D\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02" +
        "\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222-\x03\x02\x02\x02\u0223\u0221" +
        "\x03\x02\x02\x02\u0224\u022A\x05\u014A\xA6\x02\u0225\u0228\x07K\x02\x02" +
        "\u0226\u0229\x05\u014A\xA6\x02\u0227\u0229\x07P\x02\x02\u0228\u0226\x03" +
        "\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A" +
        "\u0225\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02" +
        "\x02\x02\u022C\u022E\x07P\x02\x02\u022D\u0224\x03\x02\x02\x02\u022D\u022C" +
        "\x03\x02\x02\x02\u022E/\x03\x02\x02\x02\u022F\u0230\x07\v\x02\x02\u0230" +
        "\u0235\x052\x1A\x02\u0231\u0232\x07H\x02\x02\u0232\u0234\x052\x1A\x02" +
        "\u0233\u0231\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03" +
        "\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u02361\x03\x02\x02\x02\u0237" +
        "\u0235\x03\x02\x02\x02\u0238\u0239\x07I\x02\x02\u0239\u023E\x054\x1B\x02" +
        "\u023A\u023B\x07H\x02\x02\u023B\u023D\x054\x1B\x02\u023C\u023A\x03\x02" +
        "\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E" +
        "\u023F\x03\x02\x02\x02\u023F\u0241\x03\x02\x02\x02\u0240\u023E\x03\x02" +
        "\x02\x02\u0241\u0242\x07J\x02\x02\u02423\x03\x02\x02\x02\u0243\u0244\x05" +
        "\u016C\xB7\x02\u02445\x03\x02\x02\x02\u0245\u024F\x07\f\x02\x02\u0246" +
        "\u024B\x05> \x02\u0247\u0248\x07H\x02\x02\u0248\u024A\x05> \x02\u0249" +
        "\u0247\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02" +
        "\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u0250\x03\x02\x02\x02\u024D" +
        "\u024B\x03\x02\x02\x02\u024E\u0250\x05<\x1F\x02\u024F\u0246\x03\x02\x02" +
        "\x02\u024F\u024E\x03\x02\x02\x02\u02507\x03\x02\x02\x02\u0251\u0255\x07" +
        "O\x02\x02\u0252\u0253\x07v\x02\x02\u0253\u0256\x07O\x02\x02\u0254\u0256" +
        "\x07O\x02\x02\u0255\u0252\x03\x02\x02\x02\u0255\u0254\x03\x02\x02\x02" +
        "\u02569\x03\x02\x02\x02\u0257\u025A\x07v\x02\x02\u0258\u025A\x05(\x15" +
        "\x02\u0259\u0257\x03\x02\x02\x02\u0259\u0258\x03\x02\x02\x02\u025A;\x03" +
        "\x02\x02\x02\u025B\u0260\x05:\x1E\x02\u025C\u025D\x07H\x02\x02\u025D\u025F" +
        "\x05:\x1E\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0262\x03\x02\x02\x02" +
        "\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261=\x03\x02" +
        "\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263\u0264\x058\x1D\x02\u0264\u0265" +
        "\x05<\x1F\x02\u0265?\x03\x02\x02\x02\u0266\u0267\x07w\x02\x02\u0267A\x03" +
        "\x02\x02\x02\u0268\u0269\x05N(\x02\u0269\u026A\x05D#\x02\u026A\u026F\x03" +
        "\x02\x02\x02\u026B\u026C\x05h5\x02\u026C\u026D\x05H%\x02\u026D\u026F\x03" +
        "\x02\x02\x02\u026E\u0268\x03\x02\x02\x02\u026E\u026B\x03\x02\x02\x02\u026F" +
        "C\x03\x02\x02\x02\u0270\u0275\x05F$\x02\u0271\u0272\x07H\x02\x02\u0272" +
        "\u0274\x05F$\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0277\x03\x02\x02\x02" +
        "\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276E\x03\x02" +
        "\x02\x02\u0277\u0275\x03\x02\x02\x02\u0278\u027B\x07v\x02\x02\u0279\u027B" +
        "\x05(\x15\x02\u027A\u0278\x03\x02\x02\x02\u027A\u0279\x03\x02\x02\x02" +
        "\u027BG\x03\x02\x02\x02\u027C\u0281\x05J&\x02\u027D\u027E\x07H\x02\x02" +
        "\u027E\u0280\x05J&\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0283\x03\x02" +
        "\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282" +
        "I\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284\u0286\x05F$\x02\u0285" +
        "\u0287\x05L\'\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02" +
        "\x02\u0287K\x03\x02\x02\x02\u0288\u0289\x07P\x02\x02\u0289\u028A\x05f" +
        "4\x02\u028AM\x03\x02\x02\x02\u028B\u029A\x07\n\x02\x02\u028C\u0291\x07" +
        "p\x02\x02\u028D\u028F\x07P\x02\x02\u028E\u0290\x072\x02\x02\u028F\u028E" +
        "\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292\x03\x02\x02\x02" +
        "\u0291\u028D\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u029A\x03" +
        "\x02\x02\x02\u0293\u0294\x07/\x02\x02\u0294\u029A\x07p\x02\x02\u0295\u0296" +
        "\x07/\x02\x02\u0296\u029A\x07q\x02\x02\u0297\u029A\x07r\x02\x02\u0298" +
        "\u029A\x07s\x02\x02\u0299\u028B\x03\x02\x02\x02\u0299\u028C\x03\x02\x02" +
        "\x02\u0299\u0293\x03\x02\x02\x02\u0299\u0295\x03\x02\x02\x02\u0299\u0297" +
        "\x03\x02\x02\x02\u0299\u0298\x03\x02\x02\x02\u029AO\x03\x02\x02\x02\u029B" +
        "\u029E\x05N(\x02\u029C\u029E\x05h5\x02\u029D\u029B\x03\x02\x02\x02\u029D" +
        "\u029C\x03\x02\x02\x02\u029EQ\x03\x02\x02\x02\u029F\u02A0\x07P\x02\x02" +
        "\u02A0\u02A1\x072\x02\x02\u02A1S\x03\x02\x02\x02\u02A2\u02A3\x07\r\x02" +
        "\x02\u02A3\u02A8\x05V,\x02\u02A4\u02A5\x07H\x02\x02\u02A5\u02A7\x05V," +
        "\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6" +
        "\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9U\x03\x02\x02\x02\u02AA" +
        "\u02A8\x03\x02\x02\x02\u02AB\u02AC\x07I\x02\x02\u02AC\u02AD\x07v\x02\x02" +
        "\u02AD\u02AE\x07H\x02\x02\u02AE\u02AF\x07v\x02\x02\u02AF\u02B0\x07J\x02" +
        "\x02\u02B0W\x03\x02\x02\x02\u02B1\u02B4\x07\x0E\x02\x02\u02B2\u02B5\x05" +
        "^0\x02\u02B3\u02B5\x05\\/\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B3" +
        "\x03\x02\x02\x02\u02B5Y\x03\x02\x02\x02\u02B6\u02B7\x05P)\x02\u02B7\u02B8" +
        "\x07I\x02\x02\u02B8\u02B9\x05d3\x02\u02B9\u02BA\x07J\x02\x02\u02BA[\x03" +
        "\x02\x02\x02\u02BB\u02C0\x05Z.\x02\u02BC\u02BD\x07H\x02\x02\u02BD\u02BF" +
        "\x05Z.\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0" +
        "\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1]\x03\x02\x02" +
        "\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C4\x07\x0F\x02\x02\u02C4_\x03" +
        "\x02\x02\x02\u02C5\u02C6\x07v\x02\x02\u02C6a\x03\x02\x02\x02\u02C7\u02CA" +
        "\x05`1\x02\u02C8\u02C9\x07M\x02\x02\u02C9\u02CB\x05`1\x02\u02CA\u02C8" +
        "\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CBc\x03\x02\x02\x02\u02CC" +
        "\u02D1\x05b2\x02\u02CD\u02CE\x07H\x02\x02\u02CE\u02D0\x05b2\x02\u02CF" +
        "\u02CD\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02" +
        "\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2e\x03\x02\x02\x02\u02D3\u02D1" +
        "\x03\x02\x02\x02\u02D4\u02D5\x07I\x02\x02\u02D5\u02D6\x07P\x02\x02\u02D6" +
        "\u02D7\x07J\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07I\x02\x02" +
        "\u02D9\u02DA\x07P\x02\x02\u02DA\u02E1\x07J\x02\x02\u02DB\u02E1\x072\x02" +
        "\x02\u02DC\u02DD\x07I\x02\x02\u02DD\u02DE\x05\u015E\xB0\x02\u02DE\u02DF" +
        "\x07J\x02\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02D4\x03\x02\x02\x02" +
        "\u02E0\u02DB\x03\x02\x02\x02\u02E0\u02DC\x03\x02\x02\x02\u02E1g\x03\x02" +
        "\x02\x02\u02E2\u02E4\x05\u0160\xB1\x02\u02E3\u02E5\x05j6\x02\u02E4\u02E3" +
        "\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5i\x03\x02\x02\x02\u02E6" +
        "\u02E7\x07P\x02\x02\u02E7\u02E8\x05f4\x02\u02E8k\x03\x02\x02\x02\u02E9" +
        "\u02EA\x07\x11\x02\x02\u02EA\u02EB\x07I\x02\x02\u02EB\u02EC\x05n8\x02" +
        "\u02EC\u02ED\x07J\x02\x02\u02EDm\x03\x02\x02\x02\u02EE\u02F3\x05p9\x02" +
        "\u02EF\u02F0\x07H\x02\x02\u02F0\u02F2\x05p9\x02\u02F1\u02EF\x03\x02\x02" +
        "\x02\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4" +
        "\x03\x02\x02\x02\u02F4o\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6" +
        "\u02F7\x07v\x02\x02\u02F7\u02F8\x07L\x02\x02\u02F8\u02F9\x05\u0154\xAB" +
        "\x02\u02F9q\x03\x02\x02\x02\u02FA\u02FB\x07\x12\x02\x02\u02FB\u02FC\x05" +
        "\x1C\x0F\x02\u02FCs\x03\x02\x02\x02\u02FD\u02FE\x07\x13\x02\x02\u02FE" +
        "\u02FF\x05\x1C\x0F\x02\u02FFu\x03\x02\x02\x02\u0300\u0309\x07\x14\x02" +
        "\x02\u0301\u0306\x05x=\x02\u0302\u0303\x07H\x02\x02\u0303\u0305\x05x=" +
        "\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0308\x03\x02\x02\x02\u0306\u0304" +
        "\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02" +
        "\u0308\u0306\x03\x02\x02\x02\u0309\u0301\x03\x02\x02\x02\u0309\u030A\x03" +
        "\x02\x02\x02\u030Aw\x03\x02\x02\x02\u030B\u0310\x07v\x02\x02\u030C\u030D" +
        "\x07O\x02\x02\u030D\u030E\x07v\x02\x02\u030E\u0310\x07O\x02\x02\u030F" +
        "\u030B\x03\x02\x02\x02\u030F\u030C\x03\x02\x02\x02\u0310y\x03\x02\x02" +
        "\x02\u0311\u0312\x07\x15\x02\x02\u0312\u0319\x05\x80A\x02\u0313\u0315" +
        "\x07H\x02\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02" +
        "\u0315\u0316\x03\x02\x02\x02\u0316\u0318\x05\x80A\x02\u0317\u0314\x03" +
        "\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u0319" +
        "\u031A\x03\x02\x02\x02\u031A{\x03\x02\x02\x02\u031B\u0319\x03\x02\x02" +
        "\x02\u031C\u031F\x05\u016C\xB7\x02\u031D\u031F\x05\x86D\x02\u031E\u031C" +
        "\x03\x02\x02\x02\u031E\u031D\x03\x02\x02\x02\u031F}\x03\x02\x02\x02\u0320" +
        "\u0321\t\x03\x02\x02\u0321\u0323\x07P\x02\x02\u0322\u0320\x03\x02\x02" +
        "\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0326\x03\x02\x02\x02\u0324\u0327" +
        "\x05\u017A\xBE\x02\u0325\u0327\x07v\x02\x02\u0326\u0324\x03\x02\x02\x02" +
        "\u0326\u0325\x03\x02\x02\x02\u0327\x7F\x03\x02\x02\x02\u0328\u0329\x05" +
        "\x82B\x02\u0329\u032A\x05\x84C\x02\u032A\x81\x03\x02\x02\x02\u032B\u0330" +
        "\x05|?\x02\u032C\u032D\x07H\x02\x02\u032D\u032F\x05|?\x02\u032E\u032C" +
        "\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02" +
        "\u0330\u0331\x03\x02\x02\x02\u0331\u0333\x03\x02\x02\x02\u0332\u0330\x03" +
        "\x02\x02\x02\u0333\u0334\x07O\x02\x02\u0334\x83\x03\x02\x02\x02\u0335" +
        "\u033A\x05~@\x02\u0336\u0337\x07H\x02\x02\u0337\u0339\x05~@\x02\u0338" +
        "\u0336\x03\x02\x02\x02\u0339\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02" +
        "\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C" +
        "\u033A\x03\x02\x02\x02\u033D\u033E\x07O\x02\x02\u033E\x85\x03\x02\x02" +
        "\x02\u033F\u0340\x07I\x02\x02\u0340\u0341\x05\x8AF\x02\u0341\u0342\x07" +
        "H\x02\x02\u0342\u0343\x05\x88E\x02\u0343\u0344\x07J\x02\x02\u0344\x87" +
        "\x03\x02\x02\x02\u0345\u0346\x07v\x02\x02\u0346\u0347\x07L\x02\x02\u0347" +
        "\u0348\x05\u015E\xB0\x02\u0348\u0349\x07H\x02\x02\u0349\u034C\x05\u015E" +
        "\xB0\x02\u034A\u034B\x07H\x02\x02\u034B\u034D\x05\u015E\xB0\x02\u034C" +
        "\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\x89\x03\x02\x02" +
        "\x02\u034E\u0352\x05\x8CG\x02\u034F\u0350\x07H\x02\x02\u0350\u0352\x05" +
        "\x8AF\x02\u0351\u034E\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0352" +
        "\x8B\x03\x02\x02\x02\u0353\u0356\x05\u016C\xB7\x02\u0354\u0356\x05\x86" +
        "D\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0354\x03\x02\x02\x02\u0356\x8D" +
        "\x03\x02\x02\x02\u0357\u0358\t\x04\x02\x02\u0358\u0359\x05\u0184\xC3\x02" +
        "\u0359\u035D\x03\x02\x02\x02\u035A\u035E\x05\x90I\x02\u035B\u035E\x05" +
        "\x92J\x02\u035C\u035E\x05\x98M\x02\u035D\u035A\x03\x02\x02\x02\u035D\u035B" +
        "\x03\x02\x02\x02\u035D\u035C\x03\x02\x02\x02\u035E\x8F\x03\x02\x02\x02" +
        "\u035F\u0360\x05\x94K\x02\u0360\x91\x03\x02\x02\x02\u0361\u0362\x07I\x02" +
        "\x02\u0362\u0363\x05\x96L\x02\u0363\u0365\x07J\x02\x02\u0364\u0366\x07" +
        "H\x02\x02\u0365\u0364\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366" +
        "\u0367\x03\x02\x02\x02\u0367\u0368\x05\u0158\xAD\x02\u0368\x93\x03\x02" +
        "\x02\x02\u0369\u036A\x072\x02\x02\u036A\x95\x03\x02\x02\x02\u036B\u0370" +
        "\x05\x94K\x02\u036C\u036D\x07H\x02\x02\u036D\u036F\x05\x94K\x02\u036E" +
        "\u036C\x03\x02\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02" +
        "\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\x97\x03\x02\x02\x02\u0372\u0370" +
        "\x03\x02\x02\x02\u0373\u037B\x07v\x02\x02\u0374\u0376\x07H\x02\x02\u0375" +
        "\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x03\x02" +
        "\x02\x02\u0377\u0378\x07I\x02\x02\u0378\u0379\x05\x96L\x02\u0379\u037A" +
        "\x07J\x02\x02\u037A\u037C\x03\x02\x02\x02\u037B\u0375\x03\x02\x02\x02" +
        "\u037B\u037C\x03\x02\x02\x02\u037C\x99\x03\x02\x02\x02\u037D\u037E\x07" +
        "\x18\x02\x02\u037E\u037F\x07I\x02\x02\u037F\u0380\x05\u0164\xB3\x02\u0380" +
        "\u0384\x07J\x02\x02\u0381\u0385\x05\xA0Q\x02\u0382\u0385\x05\x9EP\x02" +
        "\u0383\u0385\x05\x9CO\x02\u0384\u0381\x03\x02\x02\x02\u0384\u0382\x03" +
        "\x02\x02\x02\u0384\u0383\x03\x02\x02\x02\u0385\x9B\x03\x02\x02\x02\u0386" +
        "\u0387\x05\x94K\x02\u0387\u0388\x07H\x02\x02\u0388\u0389\x05\x94K\x02" +
        "\u0389\u038A\x07H\x02\x02\u038A\u038B\x05\x94K\x02\u038B\x9D\x03\x02\x02" +
        "\x02\u038C\u038D\x05\x10\t\x02\u038D\x9F\x03\x02\x02\x02\u038E\u0392\x05" +
        "\xA2R\x02\u038F\u0391\x05\xA4S\x02\u0390\u038F\x03\x02\x02\x02\u0391\u0394" +
        "\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02" +
        "\u0393\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0395\u0397\x05" +
        "\xA6T\x02\u0396\u0395\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397" +
        "\u0398\x03\x02\x02\x02\u0398\u0399\x05\xA8U\x02\u0399\xA1\x03\x02\x02" +
        "\x02\u039A\u039C\x07\x19\x02\x02\u039B\u039D\x05\"\x12\x02\u039C\u039B" +
        "\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02" +
        "\u039E\u039F\x03\x02\x02\x02\u039F\xA3\x03\x02\x02\x02\u03A0\u03A4\x07" +
        "\x1C\x02\x02\u03A1\u03A2\x07\x1A\x02\x02\u03A2\u03A4\x07\x18\x02\x02\u03A3" +
        "\u03A0\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u03A5\x03\x02" +
        "\x02\x02\u03A5\u03A6\x07I\x02\x02\u03A6\u03A7\x05\u0164\xB3\x02\u03A7" +
        "\u03A8\x07J\x02\x02\u03A8\u03AA\x07\x19\x02\x02\u03A9\u03AB\x05\"\x12" +
        "\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AA" +
        "\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\xA5\x03\x02\x02\x02" +
        "\u03AE\u03B0\x07\x1A\x02\x02\u03AF\u03B1\x05\"\x12\x02\u03B0\u03AF\x03" +
        "\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2" +
        "\u03B3\x03\x02\x02\x02\u03B3\xA7\x03\x02\x02\x02\u03B4\u03B8\x07\x1B\x02" +
        "\x02\u03B5\u03B6\x07\b\x02\x02\u03B6\u03B8\x07\x18\x02\x02\u03B7\u03B4" +
        "\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\xA9\x03\x02\x02\x02" +
        "\u03B9\u03BC\x07\x1D\x02\x02\u03BA\u03BD\x05\xAEX\x02\u03BB\u03BD\x05" +
        "\xB2Z\x02\u03BC\u03BA\x03\x02\x02\x02\u03BC\u03BB\x03\x02\x02\x02\u03BD" +
        "\xAB\x03\x02\x02\x02\u03BE\u03BF\x05\u0172\xBA\x02\u03BF\u03C0\x07L\x02" +
        "\x02\u03C0\u03C1\x05\u015A\xAE\x02\u03C1\u03C2\x07H\x02\x02\u03C2\u03C5" +
        "\x05\u015A\xAE\x02\u03C3\u03C4\x07H\x02\x02\u03C4\u03C6\x05\u015A\xAE" +
        "\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\xAD" +
        "\x03\x02\x02\x02\u03C7\u03C9\x05\x94K\x02\u03C8\u03CA\x07H\x02\x02\u03C9" +
        "\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x03\x02" +
        "\x02\x02\u03CB\u03CC\x05\xACW\x02\u03CC\xAF\x03\x02\x02\x02\u03CD\u03CF" +
        "\x05\"\x12\x02\u03CE\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02" +
        "\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\xB1\x03" +
        "\x02\x02\x02\u03D2\u03D3\x05\xACW\x02\u03D3\u03D4\x05\xB0Y\x02\u03D4\u03D5" +
        "\x05\xB4[\x02\u03D5\xB3\x03\x02\x02\x02\u03D6\u03DA\x07 \x02\x02\u03D7" +
        "\u03D8\x07\b\x02\x02\u03D8\u03DA\x07\x1D\x02\x02\u03D9\u03D6\x03\x02\x02" +
        "\x02\u03D9\u03D7\x03\x02\x02\x02\u03DA\xB5\x03\x02\x02\x02\u03DB\u03DC" +
        "\x07\x1E\x02\x02\u03DC\xB7\x03\x02\x02\x02\u03DD\u03DF\x07\x1F\x02\x02" +
        "\u03DE\u03E0\t\x05\x02\x02\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0\x03" +
        "\x02\x02\x02\u03E0\xB9\x03\x02\x02\x02\u03E1\u03E2\x07!\x02\x02\u03E2" +
        "\u03E3\t\x05\x02\x02\u03E3\xBB\x03\x02\x02\x02\u03E4\u03E5\x07\"\x02\x02" +
        "\u03E5\u03E6\x07I\x02\x02\u03E6\u03E7\x05\xC4c\x02\u03E7\u03F0\x07J\x02" +
        "\x02\u03E8\u03EA\x07H\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA" +
        "\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03ED\x05\xCAf\x02" +
        "\u03EC\u03E9\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03EC\x03" +
        "\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F1\x03\x02\x02\x02\u03F0" +
        "\u03EC\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\xBD\x03\x02\x02" +
        "\x02\u03F2\u03F3\x07#\x02\x02\u03F3\u03FA\x05\u0116\x8C\x02\u03F4\u03F5" +
        "\x07H\x02\x02\u03F5\u03F7\x05\xCAf\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7" +
        "\u03F8\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02" +
        "\x02\x02\u03F9\u03FB\x03\x02\x02\x02\u03FA\u03F6\x03\x02\x02\x02\u03FA" +
        "\u03FB\x03\x02\x02\x02\u03FB\xBF\x03\x02\x02\x02\u03FC\u03FD\x07$\x02" +
        "\x02\u03FD\u0404\x05\u0116\x8C\x02\u03FE\u03FF\x07H\x02\x02\u03FF\u0401" +
        "\x05\xCAf\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02" +
        "\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0405\x03" +
        "\x02\x02\x02\u0404\u0400\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405" +
        "\xC1\x03\x02\x02\x02\u0406\u0407\x05\u016C\xB7\x02\u0407\u0408\x07L\x02" +
        "\x02\u0408\u0409\x05\u0130\x99\x02\u0409\xC3\x03\x02\x02\x02\u040A\u040F" +
        "\x05\xC8e\x02\u040B\u040C\x07H\x02\x02\u040C\u040E\x05\xC8e\x02\u040D" +
        "\u040B\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02" +
        "\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\xC5\x03\x02\x02\x02\u0411\u040F" +
        "\x03\x02\x02\x02\u0412\u0413\x05\xDCo\x02\u0413\u0416\x07L\x02\x02\u0414" +
        "\u0417\x05\x94K\x02\u0415\u0417\x07v\x02\x02\u0416\u0414\x03\x02\x02\x02" +
        "\u0416\u0415\x03\x02\x02\x02\u0417\xC7\x03\x02\x02\x02\u0418\u0430\x05" +
        "\u0114\x8B\x02\u0419\u0430\t\x06\x02\x02\u041A\u041B\x05\xD4k\x02\u041B" +
        "\u041C\x07L\x02\x02\u041C\u041D\x05\u0116\x8C\x02\u041D\u0430\x03\x02" +
        "\x02\x02\u041E\u041F\x05\xD6l\x02\u041F\u0420\x07L\x02\x02\u0420\u0421" +
        "\x05\u0114\x8B\x02\u0421\u0430\x03\x02\x02\x02\u0422\u0423\x05\xD8m\x02" +
        "\u0423\u0424\x07L\x02\x02\u0424\u0425\x05\u0158\xAD\x02\u0425\u0430\x03" +
        "\x02\x02\x02\u0426\u0427\x05\xDAn\x02\u0427\u0428\x07L\x02\x02\u0428\u0429" +
        "\x05\x94K\x02\u0429\u0430\x03\x02\x02\x02\u042A\u0430\x05\xC6d\x02\u042B" +
        "\u042C\x05\xDEp\x02\u042C\u042D\x07L\x02\x02\u042D\u042E\x05\u016C\xB7" +
        "\x02\u042E\u0430\x03";
    Fortran77Parser._serializedATNSegment2 = "\x02\x02\x02\u042F\u0418\x03\x02\x02\x02\u042F\u0419\x03\x02\x02\x02\u042F" +
        "\u041A\x03\x02\x02\x02\u042F\u041E\x03\x02\x02\x02\u042F\u0422\x03\x02" +
        "\x02\x02\u042F\u0426\x03\x02\x02\x02\u042F\u042A\x03\x02\x02\x02\u042F" +
        "\u042B\x03\x02\x02\x02\u0430\xC9\x03\x02\x02\x02\u0431\u0432\x05\xCCg" +
        "\x02\u0432\u0433\x07H\x02\x02\u0433\u0434\x07v\x02\x02\u0434\u0435\x07" +
        "L\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0437\x05\xCCg\x02\u0437\u0442" +
        "\x03\x02\x02\x02\u0438\u0439\x05\xCCg\x02\u0439\u043A\x07H\x02\x02\u043A" +
        "\u043B\x05\xCCg\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043D\x05\xCCg\x02" +
        "\u043D\u043E\x07H\x02\x02\u043E\u043F\x05\xCAf\x02\u043F\u0442\x03\x02" +
        "\x02\x02\u0440\u0442\x05\xCCg\x02\u0441\u0431\x03\x02\x02\x02\u0441\u0438" +
        "\x03\x02\x02\x02\u0441\u0440\x03\x02\x02\x02\u0442\xCB\x03\x02\x02\x02" +
        "\u0443\u0444\x07I\x02\x02\u0444\u0445\x05\xCAf\x02\u0445\u0446\x07H\x02" +
        "\x02\u0446\u0447\x07v\x02\x02\u0447\u0448\x07L\x02\x02\u0448\u0449\x03" +
        "\x02\x02\x02\u0449\u044A\x05\xCEh\x02\u044A\u044D\x03\x02\x02\x02\u044B" +
        "\u044D\x05\u0130\x99\x02\u044C\u0443\x03\x02\x02\x02\u044C\u044B\x03\x02" +
        "\x02\x02\u044D\xCD\x03\x02\x02\x02\u044E\u044F\x07I\x02\x02\u044F\u0450" +
        "\x05\xCAf\x02\u0450\u0451\x07H\x02\x02\u0451\u0452\x07v\x02\x02\u0452" +
        "\u0453\x07L\x02\x02\u0453\u0454\x05\u015A\xAE\x02\u0454\u0455\x07H\x02" +
        "\x02\u0455\u0458\x05\u015A\xAE\x02\u0456\u0457\x07H\x02\x02\u0457\u0459" +
        "\x05\u015A\xAE\x02\u0458\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02" +
        "\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045B\x07J\x02\x02\u045B\xCF\x03" +
        "\x02\x02\x02\u045C\u045D\x07%\x02\x02\u045D\u045E\x07I\x02\x02\u045E\u0463" +
        "\x05\xD2j\x02\u045F\u0460\x07H\x02\x02\u0460\u0462\x05\xD2j\x02\u0461" +
        "\u045F\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463\u0461\x03\x02" +
        "\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0466\x03\x02\x02\x02\u0465" +
        "\u0463\x03\x02\x02\x02\u0466\u0467\x07J\x02\x02\u0467\xD1\x03\x02\x02" +
        "\x02\u0468\u048E\x05\u0114\x8B\x02\u0469\u046A\x05\xD6l\x02\u046A\u046B" +
        "\x07L\x02\x02\u046B\u046C\x05\u0114\x8B\x02\u046C\u048E\x03\x02\x02\x02" +
        "\u046D\u048E\x05\xC6d\x02\u046E\u046F\x05\xE0q\x02\u046F\u0470\x07L\x02" +
        "\x02\u0470\u0471\x05\u0160\xB1\x02\u0471\u048E\x03\x02\x02\x02\u0472\u0473" +
        "\x05\xE2r\x02\u0473\u0474\x07L\x02\x02\u0474\u0475\x05\u0160\xB1\x02\u0475" +
        "\u048E\x03\x02\x02\x02\u0476\u0479\x05\xE4s\x02\u0477\u0479\x05\xE6t\x02" +
        "\u0478\u0476\x03\x02\x02\x02\u0478\u0477\x03\x02\x02\x02\u0479\u047A\x03" +
        "\x02\x02\x02\u047A\u047B\x07L\x02\x02\u047B\u047C\x05\u0160\xB1\x02\u047C" +
        "\u048E\x03\x02\x02\x02\u047D\u047E\x05\xE8u\x02\u047E\u047F\x07L\x02\x02" +
        "\u047F\u0480\x05\u0160\xB1\x02\u0480\u048E\x03\x02\x02\x02\u0481\u0482" +
        "\x05\xEAv\x02\u0482\u0483\x07L\x02\x02\u0483\u0484\x05\u0158\xAD\x02\u0484" +
        "\u048E\x03\x02\x02\x02\u0485\u0486\x05\xECw\x02\u0486\u0487\x07L\x02\x02" +
        "\u0487\u0488\x05\u0160\xB1\x02\u0488\u048E\x03\x02\x02\x02\u0489\u048A" +
        "\x05\xDEp\x02\u048A\u048B\x07L\x02\x02\u048B\u048C\x05\u016C\xB7\x02\u048C" +
        "\u048E\x03\x02\x02\x02\u048D\u0468\x03\x02\x02\x02\u048D\u0469\x03\x02" +
        "\x02\x02\u048D\u046D\x03\x02\x02\x02\u048D\u046E\x03\x02\x02\x02\u048D" +
        "\u0472\x03\x02\x02\x02\u048D\u0478\x03\x02\x02\x02\u048D\u047D\x03\x02" +
        "\x02\x02\u048D\u0481\x03\x02\x02\x02\u048D\u0485\x03\x02\x02\x02\u048D" +
        "\u0489\x03\x02\x02\x02\u048E\xD3\x03\x02\x02\x02\u048F\u0490\x07&\x02" +
        "\x02\u0490\xD5\x03\x02\x02\x02\u0491\u0492\x07\'\x02\x02\u0492\xD7\x03" +
        "\x02\x02\x02\u0493\u0494\x07v\x02\x02\u0494\xD9\x03\x02\x02\x02\u0495" +
        "\u0496\x07\b\x02\x02\u0496\xDB\x03\x02\x02\x02\u0497\u0498\x07(\x02\x02" +
        "\u0498\xDD\x03\x02\x02\x02\u0499\u049A\x070\x02\x02\u049A\xDF\x03\x02" +
        "\x02\x02\u049B\u049C\x074\x02\x02\u049C\xE1\x03\x02\x02\x02\u049D\u049E" +
        "\x075\x02\x02\u049E\xE3\x03\x02\x02\x02\u049F\u04A0\x076\x02\x02\u04A0" +
        "\xE5\x03\x02\x02\x02\u04A1\u04A2\x077\x02\x02\u04A2\xE7\x03\x02\x02\x02" +
        "\u04A3\u04A4\x078\x02\x02\u04A4\xE9\x03\x02\x02\x02\u04A5\u04A6\x079\x02" +
        "\x02\u04A6\xEB\x03\x02\x02\x02\u04A7\u04A8\x07:\x02\x02\u04A8\xED\x03" +
        "\x02\x02\x02\u04A9\u04AA\x07;\x02\x02\u04AA\xEF\x03\x02\x02\x02\u04AB" +
        "\u04AC\x07<\x02\x02\u04AC\xF1\x03\x02\x02\x02\u04AD\u04AE\x07=\x02\x02" +
        "\u04AE\xF3\x03\x02\x02\x02\u04AF\u04B0\x07>\x02\x02\u04B0\xF5\x03\x02" +
        "\x02\x02\u04B1\u04B2\x07v\x02\x02\u04B2\xF7\x03\x02\x02\x02\u04B3\u04B4" +
        "\x071\x02\x02\u04B4\xF9\x03\x02\x02\x02\u04B5\u04B6\x07v\x02\x02\u04B6" +
        "\xFB\x03\x02\x02\x02\u04B7\u04B8\x07@\x02\x02\u04B8\xFD\x03\x02\x02\x02" +
        "\u04B9\u04BA\x07A\x02\x02\u04BA\xFF\x03\x02\x02\x02\u04BB\u04BC\x07B\x02" +
        "\x02\u04BC\u0101\x03\x02\x02\x02\u04BD\u04BE\x07.\x02\x02\u04BE\u04BF" +
        "\x07I\x02\x02\u04BF\u04C4\x05\u0104\x83\x02\u04C0\u04C1\x07H\x02\x02\u04C1" +
        "\u04C3\x05\u0104\x83\x02\u04C2\u04C0\x03\x02\x02\x02\u04C3\u04C6\x03\x02" +
        "\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5" +
        "\u04C7\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7\u04C8\x07J\x02" +
        "\x02\u04C8\u0103\x03\x02\x02\x02\u04C9\u04D8\x05\u0114\x8B\x02\u04CA\u04CB" +
        "\x05\xD6l\x02\u04CB\u04CC\x07L\x02\x02\u04CC\u04CD\x05\u0114\x8B\x02\u04CD" +
        "\u04D8\x03\x02\x02\x02\u04CE\u04D8\x05\xC6d\x02\u04CF\u04D0\x05\xE2r\x02" +
        "\u04D0\u04D1\x07L\x02\x02\u04D1\u04D2\x05\u0160\xB1\x02\u04D2\u04D8\x03" +
        "\x02\x02\x02\u04D3\u04D4\x05\xDEp\x02\u04D4\u04D5\x07L\x02\x02\u04D5\u04D6" +
        "\x05\u016C\xB7\x02\u04D6\u04D8\x03\x02\x02\x02\u04D7\u04C9\x03\x02\x02" +
        "\x02\u04D7\u04CA\x03\x02\x02\x02\u04D7\u04CE\x03\x02\x02\x02\u04D7\u04CF" +
        "\x03\x02\x02\x02\u04D7\u04D3\x03\x02\x02\x02\u04D8\u0105\x03\x02\x02\x02" +
        "\u04D9\u04DA\x07C\x02\x02\u04DA\u04DB\x07I\x02\x02\u04DB\u04E0\x05\u0108" +
        "\x85\x02\u04DC\u04DD\x07H\x02\x02\u04DD\u04DF\x05\u0108\x85\x02\u04DE" +
        "\u04DC\x03\x02\x02\x02\u04DF\u04E2\x03\x02\x02\x02\u04E0\u04DE\x03\x02" +
        "\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E3\x03\x02\x02\x02\u04E2" +
        "\u04E0\x03\x02\x02\x02\u04E3\u04E4\x07J\x02\x02\u04E4\u0107\x03\x02\x02" +
        "\x02\u04E5\u04E6\x05\xD6l\x02\u04E6\u04E7\x07L\x02\x02\u04E7\u04E8\x05" +
        "\u0114\x8B\x02\u04E8\u0504\x03\x02\x02\x02\u04E9\u04EA\x05\xE0q\x02\u04EA" +
        "\u04EB\x07L\x02\x02\u04EB\u04EC\x05\u0160\xB1\x02\u04EC\u0504\x03\x02" +
        "\x02\x02\u04ED\u0504\x05\xC6d\x02\u04EE\u04FE\x05\xDEp\x02\u04EF\u04FE" +
        "\x05\xEEx\x02\u04F0\u04FE\x05\xF0y\x02\u04F1\u04FE\x05\xF2z\x02\u04F2" +
        "\u04FE\x05\xF4{\x02\u04F3\u04FE\x05\xF6|\x02\u04F4\u04FE\x05\xE4s\x02" +
        "\u04F5\u04FE\x05\xF8}\x02\u04F6\u04FE\x05\xFA~\x02\u04F7\u04FE\x05\xE8" +
        "u\x02\u04F8\u04FE\x05\xFC\x7F\x02\u04F9\u04FE\x05\xFE\x80\x02\u04FA\u04FE" +
        "\x05\xEAv\x02\u04FB\u04FE\x05\u0100\x81\x02\u04FC\u04FE\x05\xECw\x02\u04FD" +
        "\u04EE\x03\x02\x02\x02\u04FD\u04EF\x03\x02\x02\x02\u04FD\u04F0\x03\x02" +
        "\x02\x02\u04FD\u04F1\x03\x02\x02\x02\u04FD\u04F2\x03\x02\x02\x02\u04FD" +
        "\u04F3\x03\x02\x02\x02\u04FD\u04F4\x03\x02\x02\x02\u04FD\u04F5\x03\x02" +
        "\x02\x02\u04FD\u04F6\x03\x02\x02\x02\u04FD\u04F7\x03\x02\x02\x02\u04FD" +
        "\u04F8\x03\x02\x02\x02\u04FD\u04F9\x03\x02\x02\x02\u04FD\u04FA\x03\x02" +
        "\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FC\x03\x02\x02\x02\u04FE" +
        "\u04FF\x03\x02\x02\x02\u04FF\u0500\x07L\x02\x02\u0500\u0501\x05\u016C" +
        "\xB7\x02\u0501\u0504\x03\x02\x02\x02\u0502\u0504\x05\u0114\x8B\x02\u0503" +
        "\u04E5\x03\x02\x02\x02\u0503\u04E9\x03\x02\x02\x02\u0503\u04ED\x03\x02" +
        "\x02\x02\u0503\u04FD\x03\x02\x02\x02\u0503\u0502\x03\x02\x02\x02\u0504" +
        "\u0109\x03\x02\x02\x02\u0505\u0506\x07D\x02\x02\u0506\u0507\x05\u0110" +
        "\x89\x02\u0507\u010B\x03\x02\x02\x02\u0508\u0509\x07E\x02\x02\u0509\u050A" +
        "\x05\u0110\x89\x02\u050A\u010D\x03\x02\x02\x02\u050B\u050C\x07F\x02\x02" +
        "\u050C\u050D\x05\u0110\x89\x02\u050D\u010F\x03\x02\x02\x02\u050E\u050F" +
        "\x05\u0114\x8B\x02\u050F\u0510\x05\u0114\x8B\x02\u0510\u051D\x03\x02\x02" +
        "\x02\u0511\u0512\x07I\x02\x02\u0512\u0517\x05\u0112\x8A\x02\u0513\u0514" +
        "\x07H\x02\x02\u0514\u0516\x05\u0112\x8A\x02\u0515\u0513\x03\x02\x02\x02" +
        "\u0516\u0519\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0517\u0518\x03" +
        "\x02\x02\x02\u0518\u051A\x03\x02\x02\x02\u0519\u0517\x03\x02\x02\x02\u051A" +
        "\u051B\x07J\x02\x02\u051B\u051D\x03\x02\x02\x02\u051C\u050E\x03\x02\x02" +
        "\x02\u051C\u0511\x03\x02\x02\x02\u051D\u0111\x03\x02\x02\x02\u051E\u0529" +
        "\x05\u0114\x8B\x02\u051F\u0520\x05\xD6l\x02\u0520\u0521\x07L\x02\x02\u0521" +
        "\u0522\x05\u0114\x8B\x02\u0522\u0529\x03\x02\x02\x02\u0523\u0529\x05\xC6" +
        "d\x02\u0524\u0525\x05\xDEp\x02\u0525\u0526\x07L\x02\x02\u0526\u0527\x05" +
        "\u016C\xB7\x02\u0527\u0529\x03\x02\x02\x02\u0528\u051E\x03\x02\x02\x02" +
        "\u0528\u051F\x03\x02\x02\x02\u0528\u0523\x03\x02\x02\x02\u0528\u0524\x03" +
        "\x02\x02\x02\u0529\u0113\x03\x02\x02\x02\u052A\u052D\x05\u0148\xA5\x02" +
        "\u052B\u052D\x07P\x02\x02\u052C\u052A\x03\x02\x02\x02\u052C\u052B\x03" +
        "\x02\x02\x02\u052D\u0115\x03\x02\x02\x02\u052E\u0532\t\x06\x02\x02\u052F" +
        "\u0532\x05\u0148\xA5\x02\u0530\u0532\x07P\x02\x02\u0531\u052E\x03\x02" +
        "\x02\x02\u0531\u052F\x03\x02\x02\x02\u0531\u0530\x03\x02\x02\x02\u0532" +
        "\u0117\x03\x02\x02\x02\u0533\u0534\x07*\x02\x02\u0534\u0535\x07I\x02\x02" +
        "\u0535\u0536\x05\u011A\x8E\x02\u0536\u0537\x07J\x02\x02\u0537\u0119\x03" +
        "\x02\x02\x02\u0538\u053E\x05\u011E\x90\x02\u0539\u053B\x05\u011C\x8F\x02" +
        "\u053A\u053C\x05\u011E\x90\x02\u053B\u053A\x03\x02\x02\x02\u053B\u053C" +
        "\x03\x02\x02\x02\u053C\u053E\x03\x02\x02\x02\u053D\u0538\x03\x02\x02\x02" +
        "\u053D\u0539\x03\x02\x02\x02\u053E\u054D\x03\x02\x02\x02\u053F\u0541\x05" +
        "\u011C\x8F\x02\u0540\u0542\x05\u011E\x90\x02\u0541\u0540\x03\x02\x02\x02" +
        "\u0541\u0542\x03\x02\x02\x02\u0542\u054C\x03\x02\x02\x02\u0543\u0549\x07" +
        "H\x02\x02\u0544\u054A\x05\u011E\x90\x02\u0545\u0547\x05\u011C\x8F\x02" +
        "\u0546\u0548\x05\u011E\x90\x02\u0547\u0546\x03\x02\x02\x02\u0547\u0548" +
        "\x03\x02\x02\x02\u0548\u054A\x03\x02\x02\x02\u0549\u0544\x03\x02\x02\x02" +
        "\u0549\u0545\x03\x02\x02\x02\u054A\u054C\x03\x02\x02\x02\u054B\u053F\x03" +
        "\x02\x02\x02\u054B\u0543\x03\x02\x02\x02\u054C\u054F\x03\x02\x02\x02\u054D" +
        "\u054B\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u011B\x03\x02" +
        "\x02\x02\u054F\u054D\x03\x02\x02\x02\u0550\u0551\t\x07\x02\x02\u0551\u011D" +
        "\x03\x02\x02\x02\u0552\u0561\x07a\x02\x02\u0553\u0561\x05\u0120\x91\x02" +
        "\u0554\u0555\x072\x02\x02\u0555\u0561\x05\u0120\x91\x02\u0556\u0558\t" +
        "\b\x02\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558" +
        "\u0559\x03\x02\x02\x02\u0559\u055E\x07b\x02\x02\u055A\u055C\x072\x02\x02" +
        "\u055B\u055A\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\u055D\x03" +
        "\x02\x02\x02\u055D\u055F\x05\u0120\x91\x02\u055E\u055B\x03\x02\x02\x02" +
        "\u055E\u055F\x03\x02\x02\x02\u055F\u0561\x03\x02\x02\x02\u0560\u0552\x03" +
        "\x02\x02\x02\u0560\u0553\x03\x02\x02\x02\u0560\u0554\x03\x02\x02\x02\u0560" +
        "\u0557\x03\x02\x02\x02\u0561\u011F\x03\x02\x02\x02\u0562\u0568\t\t\x02" +
        "\x02\u0563\u0564\x07I\x02\x02\u0564\u0565\x05\u011A\x8E\x02\u0565\u0566" +
        "\x07J\x02\x02\u0566\u0568\x03\x02\x02\x02\u0567\u0562\x03\x02\x02\x02" +
        "\u0567\u0563\x03\x02\x02\x02\u0568\u0121\x03\x02\x02\x02\u0569\u056A\x07" +
        "+\x02\x02\u056A\u056B\x05\u0124\x93\x02\u056B\u056C\x07L\x02\x02\u056C" +
        "\u056D\x05\u0130\x99\x02\u056D\u0123\x03\x02\x02\x02\u056E\u056F\x07v" +
        "\x02\x02\u056F\u0570\x07I\x02\x02\u0570\u0571\x05\x1C\x0F\x02\u0571\u0572" +
        "\x07J\x02\x02\u0572\u0125\x03\x02\x02\x02\u0573\u0574\x07,\x02\x02\u0574" +
        "\u0575\x05\u0128\x95\x02\u0575\u0127\x03\x02\x02\x02\u0576\u057C\x07v" +
        "\x02\x02\u0577\u0579\x07I\x02\x02\u0578\u057A\x05\u012A\x96\x02\u0579" +
        "\u0578\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057B\x03\x02" +
        "\x02\x02\u057B\u057D\x07J\x02\x02\u057C\u0577\x03\x02\x02\x02\u057C\u057D" +
        "\x03\x02\x02\x02\u057D\u0129\x03\x02\x02\x02\u057E\u0583\x05\u012C\x97" +
        "\x02\u057F\u0580\x07H\x02\x02\u0580\u0582\x05\u012C\x97\x02\u0581\u057F" +
        "\x03\x02\x02\x02\u0582\u0585\x03\x02\x02\x02\u0583\u0581\x03\x02\x02\x02" +
        "\u0583\u0584\x03\x02\x02\x02\u0584\u012B\x03\x02\x02\x02\u0585\u0583\x03" +
        "\x02\x02\x02\u0586\u058A\x05\u0130\x99\x02\u0587\u0588\x07P\x02\x02\u0588" +
        "\u058A\x05\x94K\x02\u0589\u0586\x03\x02\x02\x02\u0589\u0587\x03\x02\x02" +
        "\x02\u058A\u012D\x03\x02\x02\x02\u058B\u058D\x07-\x02\x02\u058C\u058E" +
        "\x05\u0158\xAD\x02\u058D\u058C\x03\x02\x02\x02\u058D\u058E\x03\x02\x02" +
        "\x02\u058E\u012F\x03\x02\x02\x02\u058F\u0592\x05\u0132\x9A\x02\u0590\u0591" +
        "\x07K\x02\x02\u0591\u0593\x05\u0132\x9A\x02\u0592\u0590\x03\x02\x02\x02" +
        "\u0592\u0593\x03\x02\x02\x02\u0593\u0131\x03\x02\x02\x02\u0594\u059A\x05" +
        "\u0134\x9B\x02\u0595\u0596\x05\u0162\xB2\x02\u0596\u0597\x05\u0134\x9B" +
        "\x02\u0597\u0599\x03\x02\x02\x02\u0598\u0595\x03\x02\x02\x02\u0599\u059C" +
        "\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02\u059A\u059B\x03\x02\x02\x02" +
        "\u059B\u0133\x03\x02\x02\x02\u059C\u059A\x03\x02\x02\x02\u059D\u05A2\x05" +
        "\u0136\x9C\x02\u059E\u059F\t\n\x02\x02\u059F\u05A1\x05\u0136\x9C\x02\u05A0" +
        "\u059E\x03\x02\x02\x02\u05A1\u05A4\x03\x02\x02\x02\u05A2\u05A0\x03\x02" +
        "\x02\x02\u05A2\u05A3\x03\x02\x02\x02\u05A3\u0135\x03\x02\x02\x02\u05A4" +
        "\u05A2\x03\x02\x02\x02\u05A5\u05AA\x05\u0138\x9D\x02\u05A6\u05A7\x07T" +
        "\x02\x02\u05A7\u05A9\x05\u0138\x9D\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9" +
        "\u05AC\x03\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03\x02" +
        "\x02\x02\u05AB\u0137\x03\x02\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AD" +
        "\u05B2\x05\u013A\x9E\x02\u05AE\u05AF\x07S\x02\x02\u05AF\u05B1\x05\u013A" +
        "\x9E\x02\u05B0\u05AE\x03\x02\x02\x02\u05B1\u05B4\x03\x02\x02\x02\u05B2" +
        "\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\u0139\x03\x02" +
        "\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B6\x07R\x02\x02\u05B6\u05B9" +
        "\x05\u013A\x9E\x02\u05B7\u05B9\x05\u013C\x9F\x02\u05B8\u05B5\x03\x02\x02" +
        "\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9\u013B\x03\x02\x02\x02\u05BA\u05BD" +
        "\x05\u013E\xA0\x02\u05BB\u05BC\t\v\x02\x02\u05BC\u05BE\x05\u013E\xA0\x02" +
        "\u05BD\u05BB\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u013D\x03" +
        "\x02\x02\x02\u05BF\u05C4\x05\u0140\xA1\x02\u05C0\u05C1\t\b\x02\x02\u05C1" +
        "\u05C3\x05\u0140\xA1\x02\u05C2\u05C0\x03\x02\x02\x02\u05C3\u05C6\x03\x02" +
        "\x02\x02\u05C4\u05C2\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5" +
        "\u013F\x03\x02\x02\x02\u05C6\u05C4\x03\x02\x02\x02\u05C7\u05CC\x05\u0142" +
        "\xA2\x02\u05C8\u05C9\t\f\x02\x02\u05C9\u05CB\x05\u0142\xA2\x02\u05CA\u05C8" +
        "\x03\x02\x02\x02\u05CB\u05CE\x03\x02\x02\x02\u05CC\u05CA\x03\x02\x02\x02" +
        "\u05CC\u05CD\x03\x02\x02\x02\u05CD\u0141\x03\x02\x02\x02\u05CE\u05CC\x03" +
        "\x02\x02\x02\u05CF\u05D1\t\b\x02\x02\u05D0\u05CF\x03\x02\x02\x02\u05D1" +
        "\u05D4\x03\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02" +
        "\x02\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D5" +
        "\u05D6\x05\u0144\xA3\x02\u05D6\u0143\x03\x02\x02\x02\u05D7\u05DC\x05\u0146" +
        "\xA4\x02\u05D8\u05D9\x07Q\x02\x02\u05D9\u05DB\x05\u0146\xA4\x02\u05DA" +
        "\u05D8\x03\x02\x02\x02\u05DB\u05DE\x03\x02\x02\x02\u05DC\u05DA\x03\x02" +
        "\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\u0145\x03\x02\x02\x02\u05DE" +
        "\u05DC\x03\x02\x02\x02\u05DF\u05E0\x05\u017C\xBF\x02\u05E0\u05E1\x05\u017C" +
        "\xBF\x02\u05E1\u05EA\x03\x02\x02\x02\u05E2\u05EA\t\x06\x02\x02\u05E3\u05EA" +
        "\x05\u0180\xC1\x02\u05E4\u05EA\x05\u016C\xB7\x02\u05E5\u05E6\x07I\x02" +
        "\x02\u05E6\u05E7\x05\u0130\x99\x02\u05E7\u05E8\x07J\x02\x02\u05E8\u05EA" +
        "\x03\x02\x02\x02\u05E9\u05DF\x03\x02\x02\x02\u05E9\u05E2\x03\x02\x02\x02" +
        "\u05E9\u05E3\x03\x02\x02\x02\u05E9\u05E4\x03\x02\x02\x02\u05E9\u05E5\x03" +
        "\x02\x02\x02\u05EA\u0147\x03\x02\x02\x02\u05EB\u05F0\x05\u014C\xA7\x02" +
        "\u05EC\u05ED\t\b\x02\x02\u05ED\u05EF\x05\u014C\xA7\x02\u05EE\u05EC\x03" +
        "\x02\x02\x02\u05EF\u05F2\x03\x02\x02\x02\u05F0\u05EE\x03\x02\x02\x02\u05F0" +
        "\u05F1\x03\x02\x02\x02\u05F1\u0149\x03\x02\x02\x02\u05F2\u05F0\x03\x02" +
        "\x02\x02\u05F3\u05F8\x05\u014C\xA7\x02\u05F4\u05F5\t\b\x02\x02\u05F5\u05F7" +
        "\x05\u014C\xA7\x02\u05F6\u05F4\x03\x02\x02\x02\u05F7\u05FA\x03\x02\x02" +
        "\x02\u05F8\u05F6\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9\u014B" +
        "\x03\x02\x02\x02\u05FA\u05F8\x03\x02\x02\x02\u05FB\u0600\x05\u014E\xA8" +
        "\x02\u05FC\u05FD\t\f\x02\x02\u05FD\u05FF\x05\u014E\xA8\x02\u05FE\u05FC" +
        "\x03\x02\x02\x02\u05FF\u0602\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02" +
        "\u0600\u0601\x03\x02\x02\x02\u0601\u014D\x03\x02\x02\x02\u0602\u0600\x03" +
        "\x02\x02\x02\u0603\u0605\t\b\x02\x02\u0604\u0603\x03\x02\x02\x02\u0605" +
        "\u0608\x03\x02\x02\x02\u0606\u0604\x03\x02\x02\x02\u0606\u0607\x03\x02" +
        "\x02\x02\u0607\u0609\x03\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0609" +
        "\u060A\x05\u0150\xA9\x02\u060A\u014F\x03\x02\x02\x02\u060B\u060E\x05\u0152" +
        "\xAA\x02\u060C\u060D\x07Q\x02\x02\u060D\u060F\x05\u0150\xA9\x02\u060E" +
        "\u060C\x03\x02\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F\u0151\x03\x02" +
        "\x02\x02\u0610\u0617\x072\x02\x02\u0611\u0617\x05\u016E\xB8\x02\u0612" +
        "\u0613\x07I\x02\x02\u0613\u0614\x05\u014A\xA6\x02\u0614\u0615\x07J\x02" +
        "\x02\u0615\u0617\x03\x02\x02\x02\u0616\u0610\x03\x02\x02\x02\u0616\u0611" +
        "\x03\x02\x02\x02\u0616\u0612\x03\x02\x02\x02\u0617\u0153\x03\x02\x02\x02" +
        "\u0618\u0619\x05\u0130\x99\x02\u0619\u0155\x03\x02\x02\x02\u061A\u061B" +
        "\x05\u0130\x99\x02\u061B\u0157\x03\x02\x02\x02\u061C\u061D\x05\u0148\xA5" +
        "\x02\u061D\u0159\x03\x02\x02\x02\u061E\u061F\x05\u0130\x99\x02\u061F\u015B" +
        "\x03\x02\x02\x02\u0620\u0621\x05\u0130\x99\x02\u0621\u015D\x03\x02\x02" +
        "\x02\u0622\u0623\x05\u0130\x99\x02\u0623\u015F\x03\x02\x02\x02\u0624\u0625" +
        "\x05\u0130\x99\x02\u0625\u0161\x03\x02\x02\x02\u0626\u0627\x07O\x02\x02" +
        "\u0627\u0628\x07O\x02\x02\u0628\u0163\x03\x02\x02\x02\u0629\u062A\x05" +
        "\u0130\x99\x02\u062A\u0165\x03\x02\x02\x02\u062B\u062C\x05\u0130\x99\x02" +
        "\u062C\u0167\x03\x02\x02\x02\u062D\u062E\x07v\x02\x02\u062E\u062F\x07" +
        "I\x02\x02\u062F\u0634\x05\u0158\xAD\x02\u0630\u0631\x07H\x02\x02\u0631" +
        "\u0633\x05\u0158\xAD\x02\u0632\u0630\x03\x02\x02\x02\u0633\u0636\x03\x02" +
        "\x02\x02\u0634\u0632\x03\x02\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635" +
        "\u0637\x03\x02\x02\x02\u0636\u0634\x03\x02\x02\x02\u0637\u0638\x07J\x02" +
        "\x02\u0638\u0169\x03\x02\x02\x02\u0639\u0642\x07I\x02\x02\u063A\u063F" +
        "\x05\u0130\x99\x02\u063B\u063C\x07H\x02\x02\u063C\u063E\x05\u0130\x99" +
        "\x02\u063D\u063B\x03\x02\x02\x02\u063E\u0641\x03\x02\x02\x02\u063F\u063D" +
        "\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u0643\x03\x02\x02\x02" +
        "\u0641\u063F\x03\x02\x02\x02\u0642\u063A\x03\x02\x02\x02\u0642\u0643\x03" +
        "\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0645\x07J\x02\x02\u0645" +
        "\u016B\x03\x02\x02\x02\u0646\u064B\t\x02\x02\x02\u0647\u0649\x05\u016A" +
        "\xB6\x02\u0648\u064A\x05\u0170\xB9\x02\u0649\u0648\x03\x02\x02\x02\u0649" +
        "\u064A\x03\x02\x02\x02\u064A\u064C\x03\x02\x02\x02\u064B\u0647\x03\x02" +
        "\x02\x02\u064B\u064C\x03\x02\x02\x02\u064C\u016D\x03\x02\x02\x02\u064D" +
        "\u0652\x07v\x02\x02\u064E\u0650\x05\u016A\xB6\x02\u064F\u0651\x05\u0170" +
        "\xB9\x02\u0650\u064F\x03\x02\x02\x02\u0650\u0651\x03\x02\x02\x02\u0651" +
        "\u0653\x03\x02\x02\x02\u0652\u064E\x03\x02\x02\x02\u0652\u0653\x03\x02" +
        "\x02\x02\u0653\u016F\x03\x02\x02\x02\u0654\u0656\x07I\x02\x02\u0655\u0657" +
        "\x05\u0132\x9A\x02\u0656\u0655\x03\x02\x02\x02\u0656\u0657\x03\x02\x02" +
        "\x02\u0657\u0658\x03\x02\x02\x02\u0658\u065A\x07K\x02\x02\u0659\u065B" +
        "\x05\u0132\x9A\x02\u065A\u0659\x03\x02\x02\x02\u065A\u065B\x03\x02\x02" +
        "\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065D\x07J\x02\x02\u065D\u0171" +
        "\x03\x02\x02\x02\u065E\u065F\x07v\x02\x02\u065F\u0173\x03\x02\x02\x02" +
        "\u0660\u0661\x07v\x02\x02\u0661\u0175\x03\x02\x02\x02\u0662\u0663\x07" +
        "v\x02\x02\u0663\u0177\x03\x02\x02\x02\u0664\u0665\x07v\x02\x02\u0665\u0179" +
        "\x03\x02\x02\x02\u0666\u0668\t\b\x02\x02\u0667\u0666\x03\x02\x02\x02\u0667" +
        "\u0668\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669\u066D\x05\u017C" +
        "\xBF\x02\u066A\u066D\t\x06\x02\x02\u066B\u066D\x05\u0180\xC1\x02\u066C" +
        "\u0667\x03\x02\x02\x02\u066C\u066A\x03\x02\x02\x02\u066C\u066B\x03\x02" +
        "\x02\x02\u066D\u017B\x03\x02\x02\x02\u066E\u0671\t\r\x02\x02\u066F\u0671" +
        "\x05\u017E\xC0\x02\u0670\u066E\x03\x02\x02\x02\u0670\u066F\x03\x02\x02" +
        "\x02\u0671\u017D\x03\x02\x02\x02\u0672\u0674\x07I\x02\x02\u0673\u0675" +
        "\t\b\x02\x02\u0674\u0673\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675" +
        "\u0676\x03\x02\x02\x02\u0676\u0677\t\r\x02\x02\u0677\u0679\x07H\x02\x02" +
        "\u0678\u067A\t\b\x02\x02\u0679\u0678\x03\x02\x02\x02\u0679\u067A\x03\x02" +
        "\x02\x02\u067A\u067B\x03\x02\x02\x02\u067B\u067C\t\r\x02\x02\u067C\u067D" +
        "\x07J\x02\x02\u067D\u017F\x03\x02\x02\x02\u067E\u067F\t\x0E\x02\x02\u067F" +
        "\u0181\x03\x02\x02\x02\u0680\u0681\t\x02\x02\x02\u0681\u0183\x03\x02\x02" +
        "\x02\u0682\u0683\x07v\x02\x02\u0683\u0185\x03\x02\x02\x02\x9A\u0189\u018E" +
        "\u0195\u0198\u01A9\u01BD\u01C9\u01CC\u01D2\u01DD\u01E0\u01E7\u01F8\u01FD" +
        "\u0202\u0208\u0219\u0221\u0228\u022A\u022D\u0235\u023E\u024B\u024F\u0255" +
        "\u0259\u0260\u026E\u0275\u027A\u0281\u0286\u028F\u0291\u0299\u029D\u02A8" +
        "\u02B4\u02C0\u02CA\u02D1\u02E0\u02E4\u02F3\u0306\u0309\u030F\u0314\u0319" +
        "\u031E\u0322\u0326\u0330\u033A\u034C\u0351\u0355\u035D\u0365\u0370\u0375" +
        "\u037B\u0384\u0392\u0396\u039E\u03A3\u03AC\u03B2\u03B7\u03BC\u03C5\u03C9" +
        "\u03D0\u03D9\u03DF\u03E9\u03EE\u03F0\u03F8\u03FA\u0402\u0404\u040F\u0416" +
        "\u042F\u0441\u044C\u0458\u0463\u0478\u048D\u04C4\u04D7\u04E0\u04FD\u0503" +
        "\u0517\u051C\u0528\u052C\u0531\u053B\u053D\u0541\u0547\u0549\u054B\u054D" +
        "\u0557\u055B\u055E\u0560\u0567\u0579\u057C\u0583\u0589\u058D\u0592\u059A" +
        "\u05A2\u05AA\u05B2\u05B8\u05BD\u05C4\u05CC\u05D2\u05DC\u05E9\u05F0\u05F8" +
        "\u0600\u0606\u060E\u0616\u0634\u063F\u0642\u0649\u064B\u0650\u0652\u0656" +
        "\u065A\u0667\u066C\u0670\u0674\u0679";
    Fortran77Parser._serializedATN = Utils.join([
        Fortran77Parser._serializedATNSegment0,
        Fortran77Parser._serializedATNSegment1,
        Fortran77Parser._serializedATNSegment2,
    ], "");
    return Fortran77Parser;
}(Parser_1.Parser));
exports.Fortran77Parser = Fortran77Parser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.executableUnit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExecutableUnitContext);
        }
        else {
            return this.getRuleContext(i, ExecutableUnitContext);
        }
    };
    ProgramContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.EOL);
        }
        else {
            return this.getToken(Fortran77Parser.EOL, i);
        }
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_program; },
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
var ExecutableUnitContext = /** @class */ (function (_super) {
    __extends(ExecutableUnitContext, _super);
    function ExecutableUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExecutableUnitContext.prototype.functionSubprogram = function () {
        return this.tryGetRuleContext(0, FunctionSubprogramContext);
    };
    ExecutableUnitContext.prototype.mainProgram = function () {
        return this.tryGetRuleContext(0, MainProgramContext);
    };
    ExecutableUnitContext.prototype.subroutineSubprogram = function () {
        return this.tryGetRuleContext(0, SubroutineSubprogramContext);
    };
    ExecutableUnitContext.prototype.blockdataSubprogram = function () {
        return this.tryGetRuleContext(0, BlockdataSubprogramContext);
    };
    Object.defineProperty(ExecutableUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_executableUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExecutableUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterExecutableUnit) {
            listener.enterExecutableUnit(this);
        }
    };
    // @Override
    ExecutableUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitExecutableUnit) {
            listener.exitExecutableUnit(this);
        }
    };
    // @Override
    ExecutableUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitExecutableUnit) {
            return visitor.visitExecutableUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExecutableUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExecutableUnitContext = ExecutableUnitContext;
var MainProgramContext = /** @class */ (function (_super) {
    __extends(MainProgramContext, _super);
    function MainProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MainProgramContext.prototype.subprogramBody = function () {
        return this.getRuleContext(0, SubprogramBodyContext);
    };
    MainProgramContext.prototype.programStatement = function () {
        return this.tryGetRuleContext(0, ProgramStatementContext);
    };
    Object.defineProperty(MainProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_mainProgram; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MainProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterMainProgram) {
            listener.enterMainProgram(this);
        }
    };
    // @Override
    MainProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitMainProgram) {
            listener.exitMainProgram(this);
        }
    };
    // @Override
    MainProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitMainProgram) {
            return visitor.visitMainProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MainProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MainProgramContext = MainProgramContext;
var FunctionSubprogramContext = /** @class */ (function (_super) {
    __extends(FunctionSubprogramContext, _super);
    function FunctionSubprogramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionSubprogramContext.prototype.functionStatement = function () {
        return this.getRuleContext(0, FunctionStatementContext);
    };
    FunctionSubprogramContext.prototype.subprogramBody = function () {
        return this.getRuleContext(0, SubprogramBodyContext);
    };
    Object.defineProperty(FunctionSubprogramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_functionSubprogram; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionSubprogramContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionSubprogram) {
            listener.enterFunctionSubprogram(this);
        }
    };
    // @Override
    FunctionSubprogramContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionSubprogram) {
            listener.exitFunctionSubprogram(this);
        }
    };
    // @Override
    FunctionSubprogramContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionSubprogram) {
            return visitor.visitFunctionSubprogram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionSubprogramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionSubprogramContext = FunctionSubprogramContext;
var SubroutineSubprogramContext = /** @class */ (function (_super) {
    __extends(SubroutineSubprogramContext, _super);
    function SubroutineSubprogramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubroutineSubprogramContext.prototype.subroutineStatement = function () {
        return this.getRuleContext(0, SubroutineStatementContext);
    };
    SubroutineSubprogramContext.prototype.subprogramBody = function () {
        return this.getRuleContext(0, SubprogramBodyContext);
    };
    Object.defineProperty(SubroutineSubprogramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_subroutineSubprogram; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubroutineSubprogramContext.prototype.enterRule = function (listener) {
        if (listener.enterSubroutineSubprogram) {
            listener.enterSubroutineSubprogram(this);
        }
    };
    // @Override
    SubroutineSubprogramContext.prototype.exitRule = function (listener) {
        if (listener.exitSubroutineSubprogram) {
            listener.exitSubroutineSubprogram(this);
        }
    };
    // @Override
    SubroutineSubprogramContext.prototype.accept = function (visitor) {
        if (visitor.visitSubroutineSubprogram) {
            return visitor.visitSubroutineSubprogram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubroutineSubprogramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubroutineSubprogramContext = SubroutineSubprogramContext;
var BlockdataSubprogramContext = /** @class */ (function (_super) {
    __extends(BlockdataSubprogramContext, _super);
    function BlockdataSubprogramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockdataSubprogramContext.prototype.blockdataStatement = function () {
        return this.getRuleContext(0, BlockdataStatementContext);
    };
    BlockdataSubprogramContext.prototype.subprogramBody = function () {
        return this.getRuleContext(0, SubprogramBodyContext);
    };
    Object.defineProperty(BlockdataSubprogramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_blockdataSubprogram; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockdataSubprogramContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockdataSubprogram) {
            listener.enterBlockdataSubprogram(this);
        }
    };
    // @Override
    BlockdataSubprogramContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockdataSubprogram) {
            listener.exitBlockdataSubprogram(this);
        }
    };
    // @Override
    BlockdataSubprogramContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockdataSubprogram) {
            return visitor.visitBlockdataSubprogram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockdataSubprogramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockdataSubprogramContext = BlockdataSubprogramContext;
var OtherSpecificationStatementContext = /** @class */ (function (_super) {
    __extends(OtherSpecificationStatementContext, _super);
    function OtherSpecificationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OtherSpecificationStatementContext.prototype.dimensionStatement = function () {
        return this.tryGetRuleContext(0, DimensionStatementContext);
    };
    OtherSpecificationStatementContext.prototype.equivalenceStatement = function () {
        return this.tryGetRuleContext(0, EquivalenceStatementContext);
    };
    OtherSpecificationStatementContext.prototype.intrinsicStatement = function () {
        return this.tryGetRuleContext(0, IntrinsicStatementContext);
    };
    OtherSpecificationStatementContext.prototype.saveStatement = function () {
        return this.tryGetRuleContext(0, SaveStatementContext);
    };
    Object.defineProperty(OtherSpecificationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_otherSpecificationStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OtherSpecificationStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterOtherSpecificationStatement) {
            listener.enterOtherSpecificationStatement(this);
        }
    };
    // @Override
    OtherSpecificationStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitOtherSpecificationStatement) {
            listener.exitOtherSpecificationStatement(this);
        }
    };
    // @Override
    OtherSpecificationStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitOtherSpecificationStatement) {
            return visitor.visitOtherSpecificationStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OtherSpecificationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OtherSpecificationStatementContext = OtherSpecificationStatementContext;
var ExecutableStatementContext = /** @class */ (function (_super) {
    __extends(ExecutableStatementContext, _super);
    function ExecutableStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExecutableStatementContext.prototype.assignmentStatement = function () {
        return this.tryGetRuleContext(0, AssignmentStatementContext);
    };
    ExecutableStatementContext.prototype.gotoStatement = function () {
        return this.tryGetRuleContext(0, GotoStatementContext);
    };
    ExecutableStatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    ExecutableStatementContext.prototype.doStatement = function () {
        return this.tryGetRuleContext(0, DoStatementContext);
    };
    ExecutableStatementContext.prototype.continueStatement = function () {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    };
    ExecutableStatementContext.prototype.stopStatement = function () {
        return this.tryGetRuleContext(0, StopStatementContext);
    };
    ExecutableStatementContext.prototype.pauseStatement = function () {
        return this.tryGetRuleContext(0, PauseStatementContext);
    };
    ExecutableStatementContext.prototype.readStatement = function () {
        return this.tryGetRuleContext(0, ReadStatementContext);
    };
    ExecutableStatementContext.prototype.writeStatement = function () {
        return this.tryGetRuleContext(0, WriteStatementContext);
    };
    ExecutableStatementContext.prototype.printStatement = function () {
        return this.tryGetRuleContext(0, PrintStatementContext);
    };
    ExecutableStatementContext.prototype.rewindStatement = function () {
        return this.tryGetRuleContext(0, RewindStatementContext);
    };
    ExecutableStatementContext.prototype.backspaceStatement = function () {
        return this.tryGetRuleContext(0, BackspaceStatementContext);
    };
    ExecutableStatementContext.prototype.openStatement = function () {
        return this.tryGetRuleContext(0, OpenStatementContext);
    };
    ExecutableStatementContext.prototype.closeStatement = function () {
        return this.tryGetRuleContext(0, CloseStatementContext);
    };
    ExecutableStatementContext.prototype.endfileStatement = function () {
        return this.tryGetRuleContext(0, EndfileStatementContext);
    };
    ExecutableStatementContext.prototype.inquireStatement = function () {
        return this.tryGetRuleContext(0, InquireStatementContext);
    };
    ExecutableStatementContext.prototype.callStatement = function () {
        return this.tryGetRuleContext(0, CallStatementContext);
    };
    ExecutableStatementContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    Object.defineProperty(ExecutableStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_executableStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExecutableStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExecutableStatement) {
            listener.enterExecutableStatement(this);
        }
    };
    // @Override
    ExecutableStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExecutableStatement) {
            listener.exitExecutableStatement(this);
        }
    };
    // @Override
    ExecutableStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExecutableStatement) {
            return visitor.visitExecutableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExecutableStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExecutableStatementContext = ExecutableStatementContext;
var ProgramStatementContext = /** @class */ (function (_super) {
    __extends(ProgramStatementContext, _super);
    function ProgramStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramStatementContext.prototype.PROGRAM = function () { return this.getToken(Fortran77Parser.PROGRAM, 0); };
    ProgramStatementContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    ProgramStatementContext.prototype.EOL = function () { return this.getToken(Fortran77Parser.EOL, 0); };
    Object.defineProperty(ProgramStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_programStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterProgramStatement) {
            listener.enterProgramStatement(this);
        }
    };
    // @Override
    ProgramStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitProgramStatement) {
            listener.exitProgramStatement(this);
        }
    };
    // @Override
    ProgramStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitProgramStatement) {
            return visitor.visitProgramStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramStatementContext = ProgramStatementContext;
var EntryStatementContext = /** @class */ (function (_super) {
    __extends(EntryStatementContext, _super);
    function EntryStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EntryStatementContext.prototype.ENTRY = function () { return this.getToken(Fortran77Parser.ENTRY, 0); };
    EntryStatementContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    EntryStatementContext.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    EntryStatementContext.prototype.namelist = function () {
        return this.tryGetRuleContext(0, NamelistContext);
    };
    EntryStatementContext.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(EntryStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_entryStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EntryStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEntryStatement) {
            listener.enterEntryStatement(this);
        }
    };
    // @Override
    EntryStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEntryStatement) {
            listener.exitEntryStatement(this);
        }
    };
    // @Override
    EntryStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEntryStatement) {
            return visitor.visitEntryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EntryStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EntryStatementContext = EntryStatementContext;
var FunctionStatementContext = /** @class */ (function (_super) {
    __extends(FunctionStatementContext, _super);
    function FunctionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionStatementContext.prototype.FUNCTION = function () { return this.getToken(Fortran77Parser.FUNCTION, 0); };
    FunctionStatementContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    FunctionStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    FunctionStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    FunctionStatementContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    FunctionStatementContext.prototype.namelist = function () {
        return this.tryGetRuleContext(0, NamelistContext);
    };
    Object.defineProperty(FunctionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_functionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionStatement) {
            listener.enterFunctionStatement(this);
        }
    };
    // @Override
    FunctionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionStatement) {
            listener.exitFunctionStatement(this);
        }
    };
    // @Override
    FunctionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionStatement) {
            return visitor.visitFunctionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionStatementContext = FunctionStatementContext;
var BlockdataStatementContext = /** @class */ (function (_super) {
    __extends(BlockdataStatementContext, _super);
    function BlockdataStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockdataStatementContext.prototype.BLOCK = function () { return this.getToken(Fortran77Parser.BLOCK, 0); };
    BlockdataStatementContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(BlockdataStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_blockdataStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockdataStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockdataStatement) {
            listener.enterBlockdataStatement(this);
        }
    };
    // @Override
    BlockdataStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockdataStatement) {
            listener.exitBlockdataStatement(this);
        }
    };
    // @Override
    BlockdataStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockdataStatement) {
            return visitor.visitBlockdataStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockdataStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockdataStatementContext = BlockdataStatementContext;
var SubroutineStatementContext = /** @class */ (function (_super) {
    __extends(SubroutineStatementContext, _super);
    function SubroutineStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubroutineStatementContext.prototype.SUBROUTINE = function () { return this.getToken(Fortran77Parser.SUBROUTINE, 0); };
    SubroutineStatementContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    SubroutineStatementContext.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    SubroutineStatementContext.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    SubroutineStatementContext.prototype.namelist = function () {
        return this.tryGetRuleContext(0, NamelistContext);
    };
    Object.defineProperty(SubroutineStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_subroutineStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubroutineStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSubroutineStatement) {
            listener.enterSubroutineStatement(this);
        }
    };
    // @Override
    SubroutineStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSubroutineStatement) {
            listener.exitSubroutineStatement(this);
        }
    };
    // @Override
    SubroutineStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSubroutineStatement) {
            return visitor.visitSubroutineStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubroutineStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubroutineStatementContext = SubroutineStatementContext;
var NamelistContext = /** @class */ (function (_super) {
    __extends(NamelistContext, _super);
    function NamelistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamelistContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    NamelistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(NamelistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_namelist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamelistContext.prototype.enterRule = function (listener) {
        if (listener.enterNamelist) {
            listener.enterNamelist(this);
        }
    };
    // @Override
    NamelistContext.prototype.exitRule = function (listener) {
        if (listener.exitNamelist) {
            listener.exitNamelist(this);
        }
    };
    // @Override
    NamelistContext.prototype.accept = function (visitor) {
        if (visitor.visitNamelist) {
            return visitor.visitNamelist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamelistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamelistContext = NamelistContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.entryStatement = function () {
        return this.tryGetRuleContext(0, EntryStatementContext);
    };
    StatementContext.prototype.implicitStatement = function () {
        return this.tryGetRuleContext(0, ImplicitStatementContext);
    };
    StatementContext.prototype.parameterStatement = function () {
        return this.tryGetRuleContext(0, ParameterStatementContext);
    };
    StatementContext.prototype.typeStatement = function () {
        return this.tryGetRuleContext(0, TypeStatementContext);
    };
    StatementContext.prototype.commonStatement = function () {
        return this.tryGetRuleContext(0, CommonStatementContext);
    };
    StatementContext.prototype.pointerStatement = function () {
        return this.tryGetRuleContext(0, PointerStatementContext);
    };
    StatementContext.prototype.externalStatement = function () {
        return this.tryGetRuleContext(0, ExternalStatementContext);
    };
    StatementContext.prototype.otherSpecificationStatement = function () {
        return this.tryGetRuleContext(0, OtherSpecificationStatementContext);
    };
    StatementContext.prototype.dataStatement = function () {
        return this.tryGetRuleContext(0, DataStatementContext);
    };
    StatementContext.prototype.statementFunctionStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementFunctionStatementContext);
        }
        else {
            return this.getRuleContext(i, StatementFunctionStatementContext);
        }
    };
    StatementContext.prototype.executableStatement = function () {
        return this.tryGetRuleContext(0, ExecutableStatementContext);
    };
    StatementContext.prototype.commentStatement = function () {
        return this.tryGetRuleContext(0, CommentStatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_statement; },
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
var SubprogramBodyContext = /** @class */ (function (_super) {
    __extends(SubprogramBodyContext, _super);
    function SubprogramBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubprogramBodyContext.prototype.endStatement = function () {
        return this.getRuleContext(0, EndStatementContext);
    };
    SubprogramBodyContext.prototype.wholeStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WholeStatementContext);
        }
        else {
            return this.getRuleContext(i, WholeStatementContext);
        }
    };
    Object.defineProperty(SubprogramBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_subprogramBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubprogramBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterSubprogramBody) {
            listener.enterSubprogramBody(this);
        }
    };
    // @Override
    SubprogramBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitSubprogramBody) {
            listener.exitSubprogramBody(this);
        }
    };
    // @Override
    SubprogramBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitSubprogramBody) {
            return visitor.visitSubprogramBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubprogramBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubprogramBodyContext = SubprogramBodyContext;
var WholeStatementContext = /** @class */ (function (_super) {
    __extends(WholeStatementContext, _super);
    function WholeStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WholeStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    WholeStatementContext.prototype.EOL = function () { return this.getToken(Fortran77Parser.EOL, 0); };
    WholeStatementContext.prototype.LABEL = function () { return this.tryGetToken(Fortran77Parser.LABEL, 0); };
    Object.defineProperty(WholeStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_wholeStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WholeStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWholeStatement) {
            listener.enterWholeStatement(this);
        }
    };
    // @Override
    WholeStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWholeStatement) {
            listener.exitWholeStatement(this);
        }
    };
    // @Override
    WholeStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWholeStatement) {
            return visitor.visitWholeStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WholeStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WholeStatementContext = WholeStatementContext;
var EndStatementContext = /** @class */ (function (_super) {
    __extends(EndStatementContext, _super);
    function EndStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndStatementContext.prototype.END = function () { return this.getToken(Fortran77Parser.END, 0); };
    EndStatementContext.prototype.LABEL = function () { return this.tryGetToken(Fortran77Parser.LABEL, 0); };
    Object.defineProperty(EndStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_endStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEndStatement) {
            listener.enterEndStatement(this);
        }
    };
    // @Override
    EndStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEndStatement) {
            listener.exitEndStatement(this);
        }
    };
    // @Override
    EndStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEndStatement) {
            return visitor.visitEndStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndStatementContext = EndStatementContext;
var DimensionStatementContext = /** @class */ (function (_super) {
    __extends(DimensionStatementContext, _super);
    function DimensionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DimensionStatementContext.prototype.DIMENSION = function () { return this.getToken(Fortran77Parser.DIMENSION, 0); };
    DimensionStatementContext.prototype.arrayDeclarators = function () {
        return this.getRuleContext(0, ArrayDeclaratorsContext);
    };
    Object.defineProperty(DimensionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dimensionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DimensionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDimensionStatement) {
            listener.enterDimensionStatement(this);
        }
    };
    // @Override
    DimensionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDimensionStatement) {
            listener.exitDimensionStatement(this);
        }
    };
    // @Override
    DimensionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDimensionStatement) {
            return visitor.visitDimensionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DimensionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DimensionStatementContext = DimensionStatementContext;
var ArrayDeclaratorContext = /** @class */ (function (_super) {
    __extends(ArrayDeclaratorContext, _super);
    function ArrayDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayDeclaratorContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    ArrayDeclaratorContext.prototype.arrayDeclaratorExtents = function () {
        return this.getRuleContext(0, ArrayDeclaratorExtentsContext);
    };
    ArrayDeclaratorContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    ArrayDeclaratorContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    ArrayDeclaratorContext.prototype.REAL = function () { return this.tryGetToken(Fortran77Parser.REAL, 0); };
    Object.defineProperty(ArrayDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arrayDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayDeclarator) {
            listener.enterArrayDeclarator(this);
        }
    };
    // @Override
    ArrayDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayDeclarator) {
            listener.exitArrayDeclarator(this);
        }
    };
    // @Override
    ArrayDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayDeclarator) {
            return visitor.visitArrayDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayDeclaratorContext = ArrayDeclaratorContext;
var ArrayDeclaratorsContext = /** @class */ (function (_super) {
    __extends(ArrayDeclaratorsContext, _super);
    function ArrayDeclaratorsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayDeclaratorsContext.prototype.arrayDeclarator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, ArrayDeclaratorContext);
        }
    };
    ArrayDeclaratorsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ArrayDeclaratorsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arrayDeclarators; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayDeclaratorsContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayDeclarators) {
            listener.enterArrayDeclarators(this);
        }
    };
    // @Override
    ArrayDeclaratorsContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayDeclarators) {
            listener.exitArrayDeclarators(this);
        }
    };
    // @Override
    ArrayDeclaratorsContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayDeclarators) {
            return visitor.visitArrayDeclarators(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayDeclaratorsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayDeclaratorsContext = ArrayDeclaratorsContext;
var ArrayDeclaratorExtentsContext = /** @class */ (function (_super) {
    __extends(ArrayDeclaratorExtentsContext, _super);
    function ArrayDeclaratorExtentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayDeclaratorExtentsContext.prototype.arrayDeclaratorExtent = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayDeclaratorExtentContext);
        }
        else {
            return this.getRuleContext(i, ArrayDeclaratorExtentContext);
        }
    };
    ArrayDeclaratorExtentsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ArrayDeclaratorExtentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arrayDeclaratorExtents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayDeclaratorExtentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayDeclaratorExtents) {
            listener.enterArrayDeclaratorExtents(this);
        }
    };
    // @Override
    ArrayDeclaratorExtentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayDeclaratorExtents) {
            listener.exitArrayDeclaratorExtents(this);
        }
    };
    // @Override
    ArrayDeclaratorExtentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayDeclaratorExtents) {
            return visitor.visitArrayDeclaratorExtents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayDeclaratorExtentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayDeclaratorExtentsContext = ArrayDeclaratorExtentsContext;
var ArrayDeclaratorExtentContext = /** @class */ (function (_super) {
    __extends(ArrayDeclaratorExtentContext, _super);
    function ArrayDeclaratorExtentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayDeclaratorExtentContext.prototype.iexprCode = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IexprCodeContext);
        }
        else {
            return this.getRuleContext(i, IexprCodeContext);
        }
    };
    ArrayDeclaratorExtentContext.prototype.COLON = function () { return this.tryGetToken(Fortran77Parser.COLON, 0); };
    ArrayDeclaratorExtentContext.prototype.STAR = function () { return this.tryGetToken(Fortran77Parser.STAR, 0); };
    Object.defineProperty(ArrayDeclaratorExtentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arrayDeclaratorExtent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayDeclaratorExtentContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayDeclaratorExtent) {
            listener.enterArrayDeclaratorExtent(this);
        }
    };
    // @Override
    ArrayDeclaratorExtentContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayDeclaratorExtent) {
            listener.exitArrayDeclaratorExtent(this);
        }
    };
    // @Override
    ArrayDeclaratorExtentContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayDeclaratorExtent) {
            return visitor.visitArrayDeclaratorExtent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayDeclaratorExtentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayDeclaratorExtentContext = ArrayDeclaratorExtentContext;
var EquivalenceStatementContext = /** @class */ (function (_super) {
    __extends(EquivalenceStatementContext, _super);
    function EquivalenceStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquivalenceStatementContext.prototype.EQUIVALENCE = function () { return this.getToken(Fortran77Parser.EQUIVALENCE, 0); };
    EquivalenceStatementContext.prototype.equivEntityGroup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquivEntityGroupContext);
        }
        else {
            return this.getRuleContext(i, EquivEntityGroupContext);
        }
    };
    EquivalenceStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(EquivalenceStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_equivalenceStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquivalenceStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEquivalenceStatement) {
            listener.enterEquivalenceStatement(this);
        }
    };
    // @Override
    EquivalenceStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEquivalenceStatement) {
            listener.exitEquivalenceStatement(this);
        }
    };
    // @Override
    EquivalenceStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEquivalenceStatement) {
            return visitor.visitEquivalenceStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquivalenceStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquivalenceStatementContext = EquivalenceStatementContext;
var EquivEntityGroupContext = /** @class */ (function (_super) {
    __extends(EquivEntityGroupContext, _super);
    function EquivEntityGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquivEntityGroupContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    EquivEntityGroupContext.prototype.equivEntity = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquivEntityContext);
        }
        else {
            return this.getRuleContext(i, EquivEntityContext);
        }
    };
    EquivEntityGroupContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    EquivEntityGroupContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(EquivEntityGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_equivEntityGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquivEntityGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterEquivEntityGroup) {
            listener.enterEquivEntityGroup(this);
        }
    };
    // @Override
    EquivEntityGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitEquivEntityGroup) {
            listener.exitEquivEntityGroup(this);
        }
    };
    // @Override
    EquivEntityGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitEquivEntityGroup) {
            return visitor.visitEquivEntityGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquivEntityGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquivEntityGroupContext = EquivEntityGroupContext;
var EquivEntityContext = /** @class */ (function (_super) {
    __extends(EquivEntityContext, _super);
    function EquivEntityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquivEntityContext.prototype.varRef = function () {
        return this.getRuleContext(0, VarRefContext);
    };
    Object.defineProperty(EquivEntityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_equivEntity; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquivEntityContext.prototype.enterRule = function (listener) {
        if (listener.enterEquivEntity) {
            listener.enterEquivEntity(this);
        }
    };
    // @Override
    EquivEntityContext.prototype.exitRule = function (listener) {
        if (listener.exitEquivEntity) {
            listener.exitEquivEntity(this);
        }
    };
    // @Override
    EquivEntityContext.prototype.accept = function (visitor) {
        if (visitor.visitEquivEntity) {
            return visitor.visitEquivEntity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquivEntityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquivEntityContext = EquivEntityContext;
var CommonStatementContext = /** @class */ (function (_super) {
    __extends(CommonStatementContext, _super);
    function CommonStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommonStatementContext.prototype.COMMON = function () { return this.getToken(Fortran77Parser.COMMON, 0); };
    CommonStatementContext.prototype.commonBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommonBlockContext);
        }
        else {
            return this.getRuleContext(i, CommonBlockContext);
        }
    };
    CommonStatementContext.prototype.commonItems = function () {
        return this.tryGetRuleContext(0, CommonItemsContext);
    };
    CommonStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(CommonStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_commonStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommonStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCommonStatement) {
            listener.enterCommonStatement(this);
        }
    };
    // @Override
    CommonStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCommonStatement) {
            listener.exitCommonStatement(this);
        }
    };
    // @Override
    CommonStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCommonStatement) {
            return visitor.visitCommonStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommonStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommonStatementContext = CommonStatementContext;
var CommonNameContext = /** @class */ (function (_super) {
    __extends(CommonNameContext, _super);
    function CommonNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommonNameContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.DIV);
        }
        else {
            return this.getToken(Fortran77Parser.DIV, i);
        }
    };
    CommonNameContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(CommonNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_commonName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommonNameContext.prototype.enterRule = function (listener) {
        if (listener.enterCommonName) {
            listener.enterCommonName(this);
        }
    };
    // @Override
    CommonNameContext.prototype.exitRule = function (listener) {
        if (listener.exitCommonName) {
            listener.exitCommonName(this);
        }
    };
    // @Override
    CommonNameContext.prototype.accept = function (visitor) {
        if (visitor.visitCommonName) {
            return visitor.visitCommonName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommonNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommonNameContext = CommonNameContext;
var CommonItemContext = /** @class */ (function (_super) {
    __extends(CommonItemContext, _super);
    function CommonItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommonItemContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    CommonItemContext.prototype.arrayDeclarator = function () {
        return this.tryGetRuleContext(0, ArrayDeclaratorContext);
    };
    Object.defineProperty(CommonItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_commonItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommonItemContext.prototype.enterRule = function (listener) {
        if (listener.enterCommonItem) {
            listener.enterCommonItem(this);
        }
    };
    // @Override
    CommonItemContext.prototype.exitRule = function (listener) {
        if (listener.exitCommonItem) {
            listener.exitCommonItem(this);
        }
    };
    // @Override
    CommonItemContext.prototype.accept = function (visitor) {
        if (visitor.visitCommonItem) {
            return visitor.visitCommonItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommonItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommonItemContext = CommonItemContext;
var CommonItemsContext = /** @class */ (function (_super) {
    __extends(CommonItemsContext, _super);
    function CommonItemsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommonItemsContext.prototype.commonItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommonItemContext);
        }
        else {
            return this.getRuleContext(i, CommonItemContext);
        }
    };
    CommonItemsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(CommonItemsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_commonItems; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommonItemsContext.prototype.enterRule = function (listener) {
        if (listener.enterCommonItems) {
            listener.enterCommonItems(this);
        }
    };
    // @Override
    CommonItemsContext.prototype.exitRule = function (listener) {
        if (listener.exitCommonItems) {
            listener.exitCommonItems(this);
        }
    };
    // @Override
    CommonItemsContext.prototype.accept = function (visitor) {
        if (visitor.visitCommonItems) {
            return visitor.visitCommonItems(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommonItemsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommonItemsContext = CommonItemsContext;
var CommonBlockContext = /** @class */ (function (_super) {
    __extends(CommonBlockContext, _super);
    function CommonBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommonBlockContext.prototype.commonName = function () {
        return this.getRuleContext(0, CommonNameContext);
    };
    CommonBlockContext.prototype.commonItems = function () {
        return this.getRuleContext(0, CommonItemsContext);
    };
    Object.defineProperty(CommonBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_commonBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommonBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterCommonBlock) {
            listener.enterCommonBlock(this);
        }
    };
    // @Override
    CommonBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitCommonBlock) {
            listener.exitCommonBlock(this);
        }
    };
    // @Override
    CommonBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitCommonBlock) {
            return visitor.visitCommonBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommonBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommonBlockContext = CommonBlockContext;
var CommentStatementContext = /** @class */ (function (_super) {
    __extends(CommentStatementContext, _super);
    function CommentStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentStatementContext.prototype.COMMENT = function () { return this.getToken(Fortran77Parser.COMMENT, 0); };
    Object.defineProperty(CommentStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_commentStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentStatement) {
            listener.enterCommentStatement(this);
        }
    };
    // @Override
    CommentStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentStatement) {
            listener.exitCommentStatement(this);
        }
    };
    // @Override
    CommentStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentStatement) {
            return visitor.visitCommentStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentStatementContext = CommentStatementContext;
var TypeStatementContext = /** @class */ (function (_super) {
    __extends(TypeStatementContext, _super);
    function TypeStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeStatementContext.prototype.typename = function () {
        return this.tryGetRuleContext(0, TypenameContext);
    };
    TypeStatementContext.prototype.typeStatementNameList = function () {
        return this.tryGetRuleContext(0, TypeStatementNameListContext);
    };
    TypeStatementContext.prototype.characterWithLen = function () {
        return this.tryGetRuleContext(0, CharacterWithLenContext);
    };
    TypeStatementContext.prototype.typeStatementNameCharList = function () {
        return this.tryGetRuleContext(0, TypeStatementNameCharListContext);
    };
    Object.defineProperty(TypeStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typeStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeStatement) {
            listener.enterTypeStatement(this);
        }
    };
    // @Override
    TypeStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeStatement) {
            listener.exitTypeStatement(this);
        }
    };
    // @Override
    TypeStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeStatement) {
            return visitor.visitTypeStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeStatementContext = TypeStatementContext;
var TypeStatementNameListContext = /** @class */ (function (_super) {
    __extends(TypeStatementNameListContext, _super);
    function TypeStatementNameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeStatementNameListContext.prototype.typeStatementName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeStatementNameContext);
        }
        else {
            return this.getRuleContext(i, TypeStatementNameContext);
        }
    };
    TypeStatementNameListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(TypeStatementNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typeStatementNameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeStatementNameListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeStatementNameList) {
            listener.enterTypeStatementNameList(this);
        }
    };
    // @Override
    TypeStatementNameListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeStatementNameList) {
            listener.exitTypeStatementNameList(this);
        }
    };
    // @Override
    TypeStatementNameListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeStatementNameList) {
            return visitor.visitTypeStatementNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeStatementNameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeStatementNameListContext = TypeStatementNameListContext;
var TypeStatementNameContext = /** @class */ (function (_super) {
    __extends(TypeStatementNameContext, _super);
    function TypeStatementNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeStatementNameContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    TypeStatementNameContext.prototype.arrayDeclarator = function () {
        return this.tryGetRuleContext(0, ArrayDeclaratorContext);
    };
    Object.defineProperty(TypeStatementNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typeStatementName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeStatementNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeStatementName) {
            listener.enterTypeStatementName(this);
        }
    };
    // @Override
    TypeStatementNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeStatementName) {
            listener.exitTypeStatementName(this);
        }
    };
    // @Override
    TypeStatementNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeStatementName) {
            return visitor.visitTypeStatementName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeStatementNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeStatementNameContext = TypeStatementNameContext;
var TypeStatementNameCharListContext = /** @class */ (function (_super) {
    __extends(TypeStatementNameCharListContext, _super);
    function TypeStatementNameCharListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeStatementNameCharListContext.prototype.typeStatementNameChar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeStatementNameCharContext);
        }
        else {
            return this.getRuleContext(i, TypeStatementNameCharContext);
        }
    };
    TypeStatementNameCharListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(TypeStatementNameCharListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typeStatementNameCharList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeStatementNameCharListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeStatementNameCharList) {
            listener.enterTypeStatementNameCharList(this);
        }
    };
    // @Override
    TypeStatementNameCharListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeStatementNameCharList) {
            listener.exitTypeStatementNameCharList(this);
        }
    };
    // @Override
    TypeStatementNameCharListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeStatementNameCharList) {
            return visitor.visitTypeStatementNameCharList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeStatementNameCharListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeStatementNameCharListContext = TypeStatementNameCharListContext;
var TypeStatementNameCharContext = /** @class */ (function (_super) {
    __extends(TypeStatementNameCharContext, _super);
    function TypeStatementNameCharContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeStatementNameCharContext.prototype.typeStatementName = function () {
        return this.getRuleContext(0, TypeStatementNameContext);
    };
    TypeStatementNameCharContext.prototype.typeStatementLenSpec = function () {
        return this.tryGetRuleContext(0, TypeStatementLenSpecContext);
    };
    Object.defineProperty(TypeStatementNameCharContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typeStatementNameChar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeStatementNameCharContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeStatementNameChar) {
            listener.enterTypeStatementNameChar(this);
        }
    };
    // @Override
    TypeStatementNameCharContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeStatementNameChar) {
            listener.exitTypeStatementNameChar(this);
        }
    };
    // @Override
    TypeStatementNameCharContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeStatementNameChar) {
            return visitor.visitTypeStatementNameChar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeStatementNameCharContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeStatementNameCharContext = TypeStatementNameCharContext;
var TypeStatementLenSpecContext = /** @class */ (function (_super) {
    __extends(TypeStatementLenSpecContext, _super);
    function TypeStatementLenSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeStatementLenSpecContext.prototype.STAR = function () { return this.getToken(Fortran77Parser.STAR, 0); };
    TypeStatementLenSpecContext.prototype.lenSpecification = function () {
        return this.getRuleContext(0, LenSpecificationContext);
    };
    Object.defineProperty(TypeStatementLenSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typeStatementLenSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeStatementLenSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeStatementLenSpec) {
            listener.enterTypeStatementLenSpec(this);
        }
    };
    // @Override
    TypeStatementLenSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeStatementLenSpec) {
            listener.exitTypeStatementLenSpec(this);
        }
    };
    // @Override
    TypeStatementLenSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeStatementLenSpec) {
            return visitor.visitTypeStatementLenSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeStatementLenSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeStatementLenSpecContext = TypeStatementLenSpecContext;
var TypenameContext = /** @class */ (function (_super) {
    __extends(TypenameContext, _super);
    function TypenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypenameContext.prototype.REAL = function () { return this.tryGetToken(Fortran77Parser.REAL, 0); };
    TypenameContext.prototype.COMPLEX = function () { return this.tryGetToken(Fortran77Parser.COMPLEX, 0); };
    TypenameContext.prototype.DOUBLE = function () { return this.tryGetToken(Fortran77Parser.DOUBLE, 0); };
    TypenameContext.prototype.PRECISION = function () { return this.tryGetToken(Fortran77Parser.PRECISION, 0); };
    TypenameContext.prototype.INTEGER = function () { return this.tryGetToken(Fortran77Parser.INTEGER, 0); };
    TypenameContext.prototype.LOGICAL = function () { return this.tryGetToken(Fortran77Parser.LOGICAL, 0); };
    TypenameContext.prototype.STAR = function () { return this.tryGetToken(Fortran77Parser.STAR, 0); };
    TypenameContext.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    Object.defineProperty(TypenameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typename; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypenameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypename) {
            listener.enterTypename(this);
        }
    };
    // @Override
    TypenameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypename) {
            listener.exitTypename(this);
        }
    };
    // @Override
    TypenameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypename) {
            return visitor.visitTypename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypenameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypenameContext = TypenameContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.typename = function () {
        return this.tryGetRuleContext(0, TypenameContext);
    };
    TypeContext.prototype.characterWithLen = function () {
        return this.tryGetRuleContext(0, CharacterWithLenContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeContext.prototype.enterRule = function (listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    };
    // @Override
    TypeContext.prototype.exitRule = function (listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    };
    // @Override
    TypeContext.prototype.accept = function (visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeContext = TypeContext;
var TypenameLenContext = /** @class */ (function (_super) {
    __extends(TypenameLenContext, _super);
    function TypenameLenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypenameLenContext.prototype.STAR = function () { return this.getToken(Fortran77Parser.STAR, 0); };
    TypenameLenContext.prototype.ICON = function () { return this.getToken(Fortran77Parser.ICON, 0); };
    Object.defineProperty(TypenameLenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_typenameLen; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypenameLenContext.prototype.enterRule = function (listener) {
        if (listener.enterTypenameLen) {
            listener.enterTypenameLen(this);
        }
    };
    // @Override
    TypenameLenContext.prototype.exitRule = function (listener) {
        if (listener.exitTypenameLen) {
            listener.exitTypenameLen(this);
        }
    };
    // @Override
    TypenameLenContext.prototype.accept = function (visitor) {
        if (visitor.visitTypenameLen) {
            return visitor.visitTypenameLen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypenameLenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypenameLenContext = TypenameLenContext;
var PointerStatementContext = /** @class */ (function (_super) {
    __extends(PointerStatementContext, _super);
    function PointerStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointerStatementContext.prototype.POINTER = function () { return this.getToken(Fortran77Parser.POINTER, 0); };
    PointerStatementContext.prototype.pointerDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PointerDeclContext);
        }
        else {
            return this.getRuleContext(i, PointerDeclContext);
        }
    };
    PointerStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(PointerStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_pointerStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointerStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterPointerStatement) {
            listener.enterPointerStatement(this);
        }
    };
    // @Override
    PointerStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitPointerStatement) {
            listener.exitPointerStatement(this);
        }
    };
    // @Override
    PointerStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitPointerStatement) {
            return visitor.visitPointerStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointerStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointerStatementContext = PointerStatementContext;
var PointerDeclContext = /** @class */ (function (_super) {
    __extends(PointerDeclContext, _super);
    function PointerDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointerDeclContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    PointerDeclContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.NAME);
        }
        else {
            return this.getToken(Fortran77Parser.NAME, i);
        }
    };
    PointerDeclContext.prototype.COMMA = function () { return this.getToken(Fortran77Parser.COMMA, 0); };
    PointerDeclContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(PointerDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_pointerDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointerDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterPointerDecl) {
            listener.enterPointerDecl(this);
        }
    };
    // @Override
    PointerDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitPointerDecl) {
            listener.exitPointerDecl(this);
        }
    };
    // @Override
    PointerDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitPointerDecl) {
            return visitor.visitPointerDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointerDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointerDeclContext = PointerDeclContext;
var ImplicitStatementContext = /** @class */ (function (_super) {
    __extends(ImplicitStatementContext, _super);
    function ImplicitStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplicitStatementContext.prototype.IMPLICIT = function () { return this.getToken(Fortran77Parser.IMPLICIT, 0); };
    ImplicitStatementContext.prototype.implicitNone = function () {
        return this.tryGetRuleContext(0, ImplicitNoneContext);
    };
    ImplicitStatementContext.prototype.implicitSpecs = function () {
        return this.tryGetRuleContext(0, ImplicitSpecsContext);
    };
    Object.defineProperty(ImplicitStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_implicitStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplicitStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterImplicitStatement) {
            listener.enterImplicitStatement(this);
        }
    };
    // @Override
    ImplicitStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitImplicitStatement) {
            listener.exitImplicitStatement(this);
        }
    };
    // @Override
    ImplicitStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitImplicitStatement) {
            return visitor.visitImplicitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplicitStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplicitStatementContext = ImplicitStatementContext;
var ImplicitSpecContext = /** @class */ (function (_super) {
    __extends(ImplicitSpecContext, _super);
    function ImplicitSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplicitSpecContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ImplicitSpecContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    ImplicitSpecContext.prototype.implicitLetters = function () {
        return this.getRuleContext(0, ImplicitLettersContext);
    };
    ImplicitSpecContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(ImplicitSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_implicitSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplicitSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterImplicitSpec) {
            listener.enterImplicitSpec(this);
        }
    };
    // @Override
    ImplicitSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitImplicitSpec) {
            listener.exitImplicitSpec(this);
        }
    };
    // @Override
    ImplicitSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitImplicitSpec) {
            return visitor.visitImplicitSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplicitSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplicitSpecContext = ImplicitSpecContext;
var ImplicitSpecsContext = /** @class */ (function (_super) {
    __extends(ImplicitSpecsContext, _super);
    function ImplicitSpecsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplicitSpecsContext.prototype.implicitSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImplicitSpecContext);
        }
        else {
            return this.getRuleContext(i, ImplicitSpecContext);
        }
    };
    ImplicitSpecsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ImplicitSpecsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_implicitSpecs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplicitSpecsContext.prototype.enterRule = function (listener) {
        if (listener.enterImplicitSpecs) {
            listener.enterImplicitSpecs(this);
        }
    };
    // @Override
    ImplicitSpecsContext.prototype.exitRule = function (listener) {
        if (listener.exitImplicitSpecs) {
            listener.exitImplicitSpecs(this);
        }
    };
    // @Override
    ImplicitSpecsContext.prototype.accept = function (visitor) {
        if (visitor.visitImplicitSpecs) {
            return visitor.visitImplicitSpecs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplicitSpecsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplicitSpecsContext = ImplicitSpecsContext;
var ImplicitNoneContext = /** @class */ (function (_super) {
    __extends(ImplicitNoneContext, _super);
    function ImplicitNoneContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplicitNoneContext.prototype.NONE = function () { return this.getToken(Fortran77Parser.NONE, 0); };
    Object.defineProperty(ImplicitNoneContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_implicitNone; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplicitNoneContext.prototype.enterRule = function (listener) {
        if (listener.enterImplicitNone) {
            listener.enterImplicitNone(this);
        }
    };
    // @Override
    ImplicitNoneContext.prototype.exitRule = function (listener) {
        if (listener.exitImplicitNone) {
            listener.exitImplicitNone(this);
        }
    };
    // @Override
    ImplicitNoneContext.prototype.accept = function (visitor) {
        if (visitor.visitImplicitNone) {
            return visitor.visitImplicitNone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplicitNoneContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplicitNoneContext = ImplicitNoneContext;
var ImplicitLetterContext = /** @class */ (function (_super) {
    __extends(ImplicitLetterContext, _super);
    function ImplicitLetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplicitLetterContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(ImplicitLetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_implicitLetter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplicitLetterContext.prototype.enterRule = function (listener) {
        if (listener.enterImplicitLetter) {
            listener.enterImplicitLetter(this);
        }
    };
    // @Override
    ImplicitLetterContext.prototype.exitRule = function (listener) {
        if (listener.exitImplicitLetter) {
            listener.exitImplicitLetter(this);
        }
    };
    // @Override
    ImplicitLetterContext.prototype.accept = function (visitor) {
        if (visitor.visitImplicitLetter) {
            return visitor.visitImplicitLetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplicitLetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplicitLetterContext = ImplicitLetterContext;
var ImplicitRangeContext = /** @class */ (function (_super) {
    __extends(ImplicitRangeContext, _super);
    function ImplicitRangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplicitRangeContext.prototype.implicitLetter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImplicitLetterContext);
        }
        else {
            return this.getRuleContext(i, ImplicitLetterContext);
        }
    };
    ImplicitRangeContext.prototype.MINUS = function () { return this.tryGetToken(Fortran77Parser.MINUS, 0); };
    Object.defineProperty(ImplicitRangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_implicitRange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplicitRangeContext.prototype.enterRule = function (listener) {
        if (listener.enterImplicitRange) {
            listener.enterImplicitRange(this);
        }
    };
    // @Override
    ImplicitRangeContext.prototype.exitRule = function (listener) {
        if (listener.exitImplicitRange) {
            listener.exitImplicitRange(this);
        }
    };
    // @Override
    ImplicitRangeContext.prototype.accept = function (visitor) {
        if (visitor.visitImplicitRange) {
            return visitor.visitImplicitRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplicitRangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplicitRangeContext = ImplicitRangeContext;
var ImplicitLettersContext = /** @class */ (function (_super) {
    __extends(ImplicitLettersContext, _super);
    function ImplicitLettersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplicitLettersContext.prototype.implicitRange = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImplicitRangeContext);
        }
        else {
            return this.getRuleContext(i, ImplicitRangeContext);
        }
    };
    ImplicitLettersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ImplicitLettersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_implicitLetters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplicitLettersContext.prototype.enterRule = function (listener) {
        if (listener.enterImplicitLetters) {
            listener.enterImplicitLetters(this);
        }
    };
    // @Override
    ImplicitLettersContext.prototype.exitRule = function (listener) {
        if (listener.exitImplicitLetters) {
            listener.exitImplicitLetters(this);
        }
    };
    // @Override
    ImplicitLettersContext.prototype.accept = function (visitor) {
        if (visitor.visitImplicitLetters) {
            return visitor.visitImplicitLetters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplicitLettersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplicitLettersContext = ImplicitLettersContext;
var LenSpecificationContext = /** @class */ (function (_super) {
    __extends(LenSpecificationContext, _super);
    function LenSpecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LenSpecificationContext.prototype.LPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.LPAREN);
        }
        else {
            return this.getToken(Fortran77Parser.LPAREN, i);
        }
    };
    LenSpecificationContext.prototype.STAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.STAR);
        }
        else {
            return this.getToken(Fortran77Parser.STAR, i);
        }
    };
    LenSpecificationContext.prototype.RPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.RPAREN);
        }
        else {
            return this.getToken(Fortran77Parser.RPAREN, i);
        }
    };
    LenSpecificationContext.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    LenSpecificationContext.prototype.intConstantExpr = function () {
        return this.tryGetRuleContext(0, IntConstantExprContext);
    };
    Object.defineProperty(LenSpecificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_lenSpecification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LenSpecificationContext.prototype.enterRule = function (listener) {
        if (listener.enterLenSpecification) {
            listener.enterLenSpecification(this);
        }
    };
    // @Override
    LenSpecificationContext.prototype.exitRule = function (listener) {
        if (listener.exitLenSpecification) {
            listener.exitLenSpecification(this);
        }
    };
    // @Override
    LenSpecificationContext.prototype.accept = function (visitor) {
        if (visitor.visitLenSpecification) {
            return visitor.visitLenSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LenSpecificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LenSpecificationContext = LenSpecificationContext;
var CharacterWithLenContext = /** @class */ (function (_super) {
    __extends(CharacterWithLenContext, _super);
    function CharacterWithLenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharacterWithLenContext.prototype.characterExpression = function () {
        return this.getRuleContext(0, CharacterExpressionContext);
    };
    CharacterWithLenContext.prototype.cwlLen = function () {
        return this.tryGetRuleContext(0, CwlLenContext);
    };
    Object.defineProperty(CharacterWithLenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_characterWithLen; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharacterWithLenContext.prototype.enterRule = function (listener) {
        if (listener.enterCharacterWithLen) {
            listener.enterCharacterWithLen(this);
        }
    };
    // @Override
    CharacterWithLenContext.prototype.exitRule = function (listener) {
        if (listener.exitCharacterWithLen) {
            listener.exitCharacterWithLen(this);
        }
    };
    // @Override
    CharacterWithLenContext.prototype.accept = function (visitor) {
        if (visitor.visitCharacterWithLen) {
            return visitor.visitCharacterWithLen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharacterWithLenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharacterWithLenContext = CharacterWithLenContext;
var CwlLenContext = /** @class */ (function (_super) {
    __extends(CwlLenContext, _super);
    function CwlLenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CwlLenContext.prototype.STAR = function () { return this.getToken(Fortran77Parser.STAR, 0); };
    CwlLenContext.prototype.lenSpecification = function () {
        return this.getRuleContext(0, LenSpecificationContext);
    };
    Object.defineProperty(CwlLenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_cwlLen; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CwlLenContext.prototype.enterRule = function (listener) {
        if (listener.enterCwlLen) {
            listener.enterCwlLen(this);
        }
    };
    // @Override
    CwlLenContext.prototype.exitRule = function (listener) {
        if (listener.exitCwlLen) {
            listener.exitCwlLen(this);
        }
    };
    // @Override
    CwlLenContext.prototype.accept = function (visitor) {
        if (visitor.visitCwlLen) {
            return visitor.visitCwlLen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CwlLenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CwlLenContext = CwlLenContext;
var ParameterStatementContext = /** @class */ (function (_super) {
    __extends(ParameterStatementContext, _super);
    function ParameterStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterStatementContext.prototype.PARAMETER = function () { return this.getToken(Fortran77Parser.PARAMETER, 0); };
    ParameterStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    ParameterStatementContext.prototype.paramlist = function () {
        return this.getRuleContext(0, ParamlistContext);
    };
    ParameterStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(ParameterStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_parameterStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterStatement) {
            listener.enterParameterStatement(this);
        }
    };
    // @Override
    ParameterStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterStatement) {
            listener.exitParameterStatement(this);
        }
    };
    // @Override
    ParameterStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterStatement) {
            return visitor.visitParameterStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterStatementContext = ParameterStatementContext;
var ParamlistContext = /** @class */ (function (_super) {
    __extends(ParamlistContext, _super);
    function ParamlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamlistContext.prototype.paramassign = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamassignContext);
        }
        else {
            return this.getRuleContext(i, ParamassignContext);
        }
    };
    ParamlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ParamlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_paramlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamlistContext.prototype.enterRule = function (listener) {
        if (listener.enterParamlist) {
            listener.enterParamlist(this);
        }
    };
    // @Override
    ParamlistContext.prototype.exitRule = function (listener) {
        if (listener.exitParamlist) {
            listener.exitParamlist(this);
        }
    };
    // @Override
    ParamlistContext.prototype.accept = function (visitor) {
        if (visitor.visitParamlist) {
            return visitor.visitParamlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamlistContext = ParamlistContext;
var ParamassignContext = /** @class */ (function (_super) {
    __extends(ParamassignContext, _super);
    function ParamassignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamassignContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    ParamassignContext.prototype.ASSIGN = function () { return this.getToken(Fortran77Parser.ASSIGN, 0); };
    ParamassignContext.prototype.constantExpr = function () {
        return this.getRuleContext(0, ConstantExprContext);
    };
    Object.defineProperty(ParamassignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_paramassign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamassignContext.prototype.enterRule = function (listener) {
        if (listener.enterParamassign) {
            listener.enterParamassign(this);
        }
    };
    // @Override
    ParamassignContext.prototype.exitRule = function (listener) {
        if (listener.exitParamassign) {
            listener.exitParamassign(this);
        }
    };
    // @Override
    ParamassignContext.prototype.accept = function (visitor) {
        if (visitor.visitParamassign) {
            return visitor.visitParamassign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamassignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamassignContext = ParamassignContext;
var ExternalStatementContext = /** @class */ (function (_super) {
    __extends(ExternalStatementContext, _super);
    function ExternalStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExternalStatementContext.prototype.EXTERNAL = function () { return this.getToken(Fortran77Parser.EXTERNAL, 0); };
    ExternalStatementContext.prototype.namelist = function () {
        return this.getRuleContext(0, NamelistContext);
    };
    Object.defineProperty(ExternalStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_externalStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExternalStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExternalStatement) {
            listener.enterExternalStatement(this);
        }
    };
    // @Override
    ExternalStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExternalStatement) {
            listener.exitExternalStatement(this);
        }
    };
    // @Override
    ExternalStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExternalStatement) {
            return visitor.visitExternalStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExternalStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExternalStatementContext = ExternalStatementContext;
var IntrinsicStatementContext = /** @class */ (function (_super) {
    __extends(IntrinsicStatementContext, _super);
    function IntrinsicStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntrinsicStatementContext.prototype.INTRINSIC = function () { return this.getToken(Fortran77Parser.INTRINSIC, 0); };
    IntrinsicStatementContext.prototype.namelist = function () {
        return this.getRuleContext(0, NamelistContext);
    };
    Object.defineProperty(IntrinsicStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_intrinsicStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntrinsicStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIntrinsicStatement) {
            listener.enterIntrinsicStatement(this);
        }
    };
    // @Override
    IntrinsicStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIntrinsicStatement) {
            listener.exitIntrinsicStatement(this);
        }
    };
    // @Override
    IntrinsicStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIntrinsicStatement) {
            return visitor.visitIntrinsicStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntrinsicStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntrinsicStatementContext = IntrinsicStatementContext;
var SaveStatementContext = /** @class */ (function (_super) {
    __extends(SaveStatementContext, _super);
    function SaveStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SaveStatementContext.prototype.SAVE = function () { return this.getToken(Fortran77Parser.SAVE, 0); };
    SaveStatementContext.prototype.saveEntity = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SaveEntityContext);
        }
        else {
            return this.getRuleContext(i, SaveEntityContext);
        }
    };
    SaveStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(SaveStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_saveStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SaveStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSaveStatement) {
            listener.enterSaveStatement(this);
        }
    };
    // @Override
    SaveStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSaveStatement) {
            listener.exitSaveStatement(this);
        }
    };
    // @Override
    SaveStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSaveStatement) {
            return visitor.visitSaveStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SaveStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SaveStatementContext = SaveStatementContext;
var SaveEntityContext = /** @class */ (function (_super) {
    __extends(SaveEntityContext, _super);
    function SaveEntityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SaveEntityContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    SaveEntityContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.DIV);
        }
        else {
            return this.getToken(Fortran77Parser.DIV, i);
        }
    };
    Object.defineProperty(SaveEntityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_saveEntity; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SaveEntityContext.prototype.enterRule = function (listener) {
        if (listener.enterSaveEntity) {
            listener.enterSaveEntity(this);
        }
    };
    // @Override
    SaveEntityContext.prototype.exitRule = function (listener) {
        if (listener.exitSaveEntity) {
            listener.exitSaveEntity(this);
        }
    };
    // @Override
    SaveEntityContext.prototype.accept = function (visitor) {
        if (visitor.visitSaveEntity) {
            return visitor.visitSaveEntity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SaveEntityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SaveEntityContext = SaveEntityContext;
var DataStatementContext = /** @class */ (function (_super) {
    __extends(DataStatementContext, _super);
    function DataStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataStatementContext.prototype.DATA = function () { return this.getToken(Fortran77Parser.DATA, 0); };
    DataStatementContext.prototype.dataStatementEntity = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataStatementEntityContext);
        }
        else {
            return this.getRuleContext(i, DataStatementEntityContext);
        }
    };
    DataStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(DataStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDataStatement) {
            listener.enterDataStatement(this);
        }
    };
    // @Override
    DataStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDataStatement) {
            listener.exitDataStatement(this);
        }
    };
    // @Override
    DataStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDataStatement) {
            return visitor.visitDataStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataStatementContext = DataStatementContext;
var DataStatementItemContext = /** @class */ (function (_super) {
    __extends(DataStatementItemContext, _super);
    function DataStatementItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataStatementItemContext.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    DataStatementItemContext.prototype.dataImpliedDo = function () {
        return this.tryGetRuleContext(0, DataImpliedDoContext);
    };
    Object.defineProperty(DataStatementItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataStatementItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataStatementItemContext.prototype.enterRule = function (listener) {
        if (listener.enterDataStatementItem) {
            listener.enterDataStatementItem(this);
        }
    };
    // @Override
    DataStatementItemContext.prototype.exitRule = function (listener) {
        if (listener.exitDataStatementItem) {
            listener.exitDataStatementItem(this);
        }
    };
    // @Override
    DataStatementItemContext.prototype.accept = function (visitor) {
        if (visitor.visitDataStatementItem) {
            return visitor.visitDataStatementItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataStatementItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataStatementItemContext = DataStatementItemContext;
var DataStatementMultipleContext = /** @class */ (function (_super) {
    __extends(DataStatementMultipleContext, _super);
    function DataStatementMultipleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataStatementMultipleContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    DataStatementMultipleContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.NAME);
        }
        else {
            return this.getToken(Fortran77Parser.NAME, i);
        }
    };
    DataStatementMultipleContext.prototype.STAR = function () { return this.tryGetToken(Fortran77Parser.STAR, 0); };
    DataStatementMultipleContext.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    Object.defineProperty(DataStatementMultipleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataStatementMultiple; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataStatementMultipleContext.prototype.enterRule = function (listener) {
        if (listener.enterDataStatementMultiple) {
            listener.enterDataStatementMultiple(this);
        }
    };
    // @Override
    DataStatementMultipleContext.prototype.exitRule = function (listener) {
        if (listener.exitDataStatementMultiple) {
            listener.exitDataStatementMultiple(this);
        }
    };
    // @Override
    DataStatementMultipleContext.prototype.accept = function (visitor) {
        if (visitor.visitDataStatementMultiple) {
            return visitor.visitDataStatementMultiple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataStatementMultipleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataStatementMultipleContext = DataStatementMultipleContext;
var DataStatementEntityContext = /** @class */ (function (_super) {
    __extends(DataStatementEntityContext, _super);
    function DataStatementEntityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataStatementEntityContext.prototype.dse1 = function () {
        return this.getRuleContext(0, Dse1Context);
    };
    DataStatementEntityContext.prototype.dse2 = function () {
        return this.getRuleContext(0, Dse2Context);
    };
    Object.defineProperty(DataStatementEntityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataStatementEntity; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataStatementEntityContext.prototype.enterRule = function (listener) {
        if (listener.enterDataStatementEntity) {
            listener.enterDataStatementEntity(this);
        }
    };
    // @Override
    DataStatementEntityContext.prototype.exitRule = function (listener) {
        if (listener.exitDataStatementEntity) {
            listener.exitDataStatementEntity(this);
        }
    };
    // @Override
    DataStatementEntityContext.prototype.accept = function (visitor) {
        if (visitor.visitDataStatementEntity) {
            return visitor.visitDataStatementEntity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataStatementEntityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataStatementEntityContext = DataStatementEntityContext;
var Dse1Context = /** @class */ (function (_super) {
    __extends(Dse1Context, _super);
    function Dse1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dse1Context.prototype.dataStatementItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataStatementItemContext);
        }
        else {
            return this.getRuleContext(i, DataStatementItemContext);
        }
    };
    Dse1Context.prototype.DIV = function () { return this.getToken(Fortran77Parser.DIV, 0); };
    Dse1Context.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(Dse1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dse1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dse1Context.prototype.enterRule = function (listener) {
        if (listener.enterDse1) {
            listener.enterDse1(this);
        }
    };
    // @Override
    Dse1Context.prototype.exitRule = function (listener) {
        if (listener.exitDse1) {
            listener.exitDse1(this);
        }
    };
    // @Override
    Dse1Context.prototype.accept = function (visitor) {
        if (visitor.visitDse1) {
            return visitor.visitDse1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dse1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dse1Context = Dse1Context;
var Dse2Context = /** @class */ (function (_super) {
    __extends(Dse2Context, _super);
    function Dse2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dse2Context.prototype.dataStatementMultiple = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataStatementMultipleContext);
        }
        else {
            return this.getRuleContext(i, DataStatementMultipleContext);
        }
    };
    Dse2Context.prototype.DIV = function () { return this.getToken(Fortran77Parser.DIV, 0); };
    Dse2Context.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(Dse2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dse2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dse2Context.prototype.enterRule = function (listener) {
        if (listener.enterDse2) {
            listener.enterDse2(this);
        }
    };
    // @Override
    Dse2Context.prototype.exitRule = function (listener) {
        if (listener.exitDse2) {
            listener.exitDse2(this);
        }
    };
    // @Override
    Dse2Context.prototype.accept = function (visitor) {
        if (visitor.visitDse2) {
            return visitor.visitDse2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dse2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dse2Context = Dse2Context;
var DataImpliedDoContext = /** @class */ (function (_super) {
    __extends(DataImpliedDoContext, _super);
    function DataImpliedDoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataImpliedDoContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    DataImpliedDoContext.prototype.dataImpliedDoList = function () {
        return this.getRuleContext(0, DataImpliedDoListContext);
    };
    DataImpliedDoContext.prototype.COMMA = function () { return this.getToken(Fortran77Parser.COMMA, 0); };
    DataImpliedDoContext.prototype.dataImpliedDoRange = function () {
        return this.getRuleContext(0, DataImpliedDoRangeContext);
    };
    DataImpliedDoContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(DataImpliedDoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataImpliedDo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataImpliedDoContext.prototype.enterRule = function (listener) {
        if (listener.enterDataImpliedDo) {
            listener.enterDataImpliedDo(this);
        }
    };
    // @Override
    DataImpliedDoContext.prototype.exitRule = function (listener) {
        if (listener.exitDataImpliedDo) {
            listener.exitDataImpliedDo(this);
        }
    };
    // @Override
    DataImpliedDoContext.prototype.accept = function (visitor) {
        if (visitor.visitDataImpliedDo) {
            return visitor.visitDataImpliedDo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataImpliedDoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataImpliedDoContext = DataImpliedDoContext;
var DataImpliedDoRangeContext = /** @class */ (function (_super) {
    __extends(DataImpliedDoRangeContext, _super);
    function DataImpliedDoRangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataImpliedDoRangeContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    DataImpliedDoRangeContext.prototype.ASSIGN = function () { return this.getToken(Fortran77Parser.ASSIGN, 0); };
    DataImpliedDoRangeContext.prototype.intConstantExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntConstantExprContext);
        }
        else {
            return this.getRuleContext(i, IntConstantExprContext);
        }
    };
    DataImpliedDoRangeContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(DataImpliedDoRangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataImpliedDoRange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataImpliedDoRangeContext.prototype.enterRule = function (listener) {
        if (listener.enterDataImpliedDoRange) {
            listener.enterDataImpliedDoRange(this);
        }
    };
    // @Override
    DataImpliedDoRangeContext.prototype.exitRule = function (listener) {
        if (listener.exitDataImpliedDoRange) {
            listener.exitDataImpliedDoRange(this);
        }
    };
    // @Override
    DataImpliedDoRangeContext.prototype.accept = function (visitor) {
        if (visitor.visitDataImpliedDoRange) {
            return visitor.visitDataImpliedDoRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataImpliedDoRangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataImpliedDoRangeContext = DataImpliedDoRangeContext;
var DataImpliedDoListContext = /** @class */ (function (_super) {
    __extends(DataImpliedDoListContext, _super);
    function DataImpliedDoListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataImpliedDoListContext.prototype.dataImpliedDoListWhat = function () {
        return this.tryGetRuleContext(0, DataImpliedDoListWhatContext);
    };
    DataImpliedDoListContext.prototype.COMMA = function () { return this.tryGetToken(Fortran77Parser.COMMA, 0); };
    DataImpliedDoListContext.prototype.dataImpliedDoList = function () {
        return this.tryGetRuleContext(0, DataImpliedDoListContext);
    };
    Object.defineProperty(DataImpliedDoListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataImpliedDoList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataImpliedDoListContext.prototype.enterRule = function (listener) {
        if (listener.enterDataImpliedDoList) {
            listener.enterDataImpliedDoList(this);
        }
    };
    // @Override
    DataImpliedDoListContext.prototype.exitRule = function (listener) {
        if (listener.exitDataImpliedDoList) {
            listener.exitDataImpliedDoList(this);
        }
    };
    // @Override
    DataImpliedDoListContext.prototype.accept = function (visitor) {
        if (visitor.visitDataImpliedDoList) {
            return visitor.visitDataImpliedDoList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataImpliedDoListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataImpliedDoListContext = DataImpliedDoListContext;
var DataImpliedDoListWhatContext = /** @class */ (function (_super) {
    __extends(DataImpliedDoListWhatContext, _super);
    function DataImpliedDoListWhatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataImpliedDoListWhatContext.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    DataImpliedDoListWhatContext.prototype.dataImpliedDo = function () {
        return this.tryGetRuleContext(0, DataImpliedDoContext);
    };
    Object.defineProperty(DataImpliedDoListWhatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_dataImpliedDoListWhat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataImpliedDoListWhatContext.prototype.enterRule = function (listener) {
        if (listener.enterDataImpliedDoListWhat) {
            listener.enterDataImpliedDoListWhat(this);
        }
    };
    // @Override
    DataImpliedDoListWhatContext.prototype.exitRule = function (listener) {
        if (listener.exitDataImpliedDoListWhat) {
            listener.exitDataImpliedDoListWhat(this);
        }
    };
    // @Override
    DataImpliedDoListWhatContext.prototype.accept = function (visitor) {
        if (visitor.visitDataImpliedDoListWhat) {
            return visitor.visitDataImpliedDoListWhat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataImpliedDoListWhatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataImpliedDoListWhatContext = DataImpliedDoListWhatContext;
var GotoStatementContext = /** @class */ (function (_super) {
    __extends(GotoStatementContext, _super);
    function GotoStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GotoStatementContext.prototype.to = function () {
        return this.tryGetRuleContext(0, ToContext);
    };
    GotoStatementContext.prototype.unconditionalGoto = function () {
        return this.tryGetRuleContext(0, UnconditionalGotoContext);
    };
    GotoStatementContext.prototype.computedGoto = function () {
        return this.tryGetRuleContext(0, ComputedGotoContext);
    };
    GotoStatementContext.prototype.assignedGoto = function () {
        return this.tryGetRuleContext(0, AssignedGotoContext);
    };
    GotoStatementContext.prototype.GO = function () { return this.tryGetToken(Fortran77Parser.GO, 0); };
    GotoStatementContext.prototype.GOTO = function () { return this.tryGetToken(Fortran77Parser.GOTO, 0); };
    Object.defineProperty(GotoStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_gotoStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GotoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterGotoStatement) {
            listener.enterGotoStatement(this);
        }
    };
    // @Override
    GotoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitGotoStatement) {
            listener.exitGotoStatement(this);
        }
    };
    // @Override
    GotoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitGotoStatement) {
            return visitor.visitGotoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GotoStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GotoStatementContext = GotoStatementContext;
var UnconditionalGotoContext = /** @class */ (function (_super) {
    __extends(UnconditionalGotoContext, _super);
    function UnconditionalGotoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnconditionalGotoContext.prototype.lblRef = function () {
        return this.getRuleContext(0, LblRefContext);
    };
    Object.defineProperty(UnconditionalGotoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_unconditionalGoto; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnconditionalGotoContext.prototype.enterRule = function (listener) {
        if (listener.enterUnconditionalGoto) {
            listener.enterUnconditionalGoto(this);
        }
    };
    // @Override
    UnconditionalGotoContext.prototype.exitRule = function (listener) {
        if (listener.exitUnconditionalGoto) {
            listener.exitUnconditionalGoto(this);
        }
    };
    // @Override
    UnconditionalGotoContext.prototype.accept = function (visitor) {
        if (visitor.visitUnconditionalGoto) {
            return visitor.visitUnconditionalGoto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnconditionalGotoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnconditionalGotoContext = UnconditionalGotoContext;
var ComputedGotoContext = /** @class */ (function (_super) {
    __extends(ComputedGotoContext, _super);
    function ComputedGotoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComputedGotoContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    ComputedGotoContext.prototype.labelList = function () {
        return this.getRuleContext(0, LabelListContext);
    };
    ComputedGotoContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    ComputedGotoContext.prototype.integerExpr = function () {
        return this.getRuleContext(0, IntegerExprContext);
    };
    ComputedGotoContext.prototype.COMMA = function () { return this.tryGetToken(Fortran77Parser.COMMA, 0); };
    Object.defineProperty(ComputedGotoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_computedGoto; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComputedGotoContext.prototype.enterRule = function (listener) {
        if (listener.enterComputedGoto) {
            listener.enterComputedGoto(this);
        }
    };
    // @Override
    ComputedGotoContext.prototype.exitRule = function (listener) {
        if (listener.exitComputedGoto) {
            listener.exitComputedGoto(this);
        }
    };
    // @Override
    ComputedGotoContext.prototype.accept = function (visitor) {
        if (visitor.visitComputedGoto) {
            return visitor.visitComputedGoto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComputedGotoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComputedGotoContext = ComputedGotoContext;
var LblRefContext = /** @class */ (function (_super) {
    __extends(LblRefContext, _super);
    function LblRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LblRefContext.prototype.ICON = function () { return this.getToken(Fortran77Parser.ICON, 0); };
    Object.defineProperty(LblRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_lblRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LblRefContext.prototype.enterRule = function (listener) {
        if (listener.enterLblRef) {
            listener.enterLblRef(this);
        }
    };
    // @Override
    LblRefContext.prototype.exitRule = function (listener) {
        if (listener.exitLblRef) {
            listener.exitLblRef(this);
        }
    };
    // @Override
    LblRefContext.prototype.accept = function (visitor) {
        if (visitor.visitLblRef) {
            return visitor.visitLblRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LblRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LblRefContext = LblRefContext;
var LabelListContext = /** @class */ (function (_super) {
    __extends(LabelListContext, _super);
    function LabelListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelListContext.prototype.lblRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LblRefContext);
        }
        else {
            return this.getRuleContext(i, LblRefContext);
        }
    };
    LabelListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(LabelListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_labelList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelListContext.prototype.enterRule = function (listener) {
        if (listener.enterLabelList) {
            listener.enterLabelList(this);
        }
    };
    // @Override
    LabelListContext.prototype.exitRule = function (listener) {
        if (listener.exitLabelList) {
            listener.exitLabelList(this);
        }
    };
    // @Override
    LabelListContext.prototype.accept = function (visitor) {
        if (visitor.visitLabelList) {
            return visitor.visitLabelList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelListContext = LabelListContext;
var AssignedGotoContext = /** @class */ (function (_super) {
    __extends(AssignedGotoContext, _super);
    function AssignedGotoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignedGotoContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    AssignedGotoContext.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    AssignedGotoContext.prototype.labelList = function () {
        return this.tryGetRuleContext(0, LabelListContext);
    };
    AssignedGotoContext.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    AssignedGotoContext.prototype.COMMA = function () { return this.tryGetToken(Fortran77Parser.COMMA, 0); };
    Object.defineProperty(AssignedGotoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_assignedGoto; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignedGotoContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignedGoto) {
            listener.enterAssignedGoto(this);
        }
    };
    // @Override
    AssignedGotoContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignedGoto) {
            listener.exitAssignedGoto(this);
        }
    };
    // @Override
    AssignedGotoContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignedGoto) {
            return visitor.visitAssignedGoto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignedGotoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignedGotoContext = AssignedGotoContext;
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.IF = function () { return this.getToken(Fortran77Parser.IF, 0); };
    IfStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    IfStatementContext.prototype.logicalExpression = function () {
        return this.getRuleContext(0, LogicalExpressionContext);
    };
    IfStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    IfStatementContext.prototype.blockIfStatement = function () {
        return this.tryGetRuleContext(0, BlockIfStatementContext);
    };
    IfStatementContext.prototype.logicalIfStatement = function () {
        return this.tryGetRuleContext(0, LogicalIfStatementContext);
    };
    IfStatementContext.prototype.arithmeticIfStatement = function () {
        return this.tryGetRuleContext(0, ArithmeticIfStatementContext);
    };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_ifStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatementContext = IfStatementContext;
var ArithmeticIfStatementContext = /** @class */ (function (_super) {
    __extends(ArithmeticIfStatementContext, _super);
    function ArithmeticIfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArithmeticIfStatementContext.prototype.lblRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LblRefContext);
        }
        else {
            return this.getRuleContext(i, LblRefContext);
        }
    };
    ArithmeticIfStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ArithmeticIfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arithmeticIfStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArithmeticIfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmeticIfStatement) {
            listener.enterArithmeticIfStatement(this);
        }
    };
    // @Override
    ArithmeticIfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmeticIfStatement) {
            listener.exitArithmeticIfStatement(this);
        }
    };
    // @Override
    ArithmeticIfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmeticIfStatement) {
            return visitor.visitArithmeticIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArithmeticIfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArithmeticIfStatementContext = ArithmeticIfStatementContext;
var LogicalIfStatementContext = /** @class */ (function (_super) {
    __extends(LogicalIfStatementContext, _super);
    function LogicalIfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalIfStatementContext.prototype.executableStatement = function () {
        return this.getRuleContext(0, ExecutableStatementContext);
    };
    Object.defineProperty(LogicalIfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_logicalIfStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalIfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalIfStatement) {
            listener.enterLogicalIfStatement(this);
        }
    };
    // @Override
    LogicalIfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalIfStatement) {
            listener.exitLogicalIfStatement(this);
        }
    };
    // @Override
    LogicalIfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalIfStatement) {
            return visitor.visitLogicalIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalIfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalIfStatementContext = LogicalIfStatementContext;
var BlockIfStatementContext = /** @class */ (function (_super) {
    __extends(BlockIfStatementContext, _super);
    function BlockIfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockIfStatementContext.prototype.firstIfBlock = function () {
        return this.getRuleContext(0, FirstIfBlockContext);
    };
    BlockIfStatementContext.prototype.endIfStatement = function () {
        return this.getRuleContext(0, EndIfStatementContext);
    };
    BlockIfStatementContext.prototype.elseIfStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElseIfStatementContext);
        }
        else {
            return this.getRuleContext(i, ElseIfStatementContext);
        }
    };
    BlockIfStatementContext.prototype.elseStatement = function () {
        return this.tryGetRuleContext(0, ElseStatementContext);
    };
    Object.defineProperty(BlockIfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_blockIfStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockIfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockIfStatement) {
            listener.enterBlockIfStatement(this);
        }
    };
    // @Override
    BlockIfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockIfStatement) {
            listener.exitBlockIfStatement(this);
        }
    };
    // @Override
    BlockIfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockIfStatement) {
            return visitor.visitBlockIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockIfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockIfStatementContext = BlockIfStatementContext;
var FirstIfBlockContext = /** @class */ (function (_super) {
    __extends(FirstIfBlockContext, _super);
    function FirstIfBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FirstIfBlockContext.prototype.THEN = function () { return this.getToken(Fortran77Parser.THEN, 0); };
    FirstIfBlockContext.prototype.wholeStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WholeStatementContext);
        }
        else {
            return this.getRuleContext(i, WholeStatementContext);
        }
    };
    Object.defineProperty(FirstIfBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_firstIfBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FirstIfBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterFirstIfBlock) {
            listener.enterFirstIfBlock(this);
        }
    };
    // @Override
    FirstIfBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitFirstIfBlock) {
            listener.exitFirstIfBlock(this);
        }
    };
    // @Override
    FirstIfBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitFirstIfBlock) {
            return visitor.visitFirstIfBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FirstIfBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FirstIfBlockContext = FirstIfBlockContext;
var ElseIfStatementContext = /** @class */ (function (_super) {
    __extends(ElseIfStatementContext, _super);
    function ElseIfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElseIfStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    ElseIfStatementContext.prototype.logicalExpression = function () {
        return this.getRuleContext(0, LogicalExpressionContext);
    };
    ElseIfStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    ElseIfStatementContext.prototype.THEN = function () { return this.getToken(Fortran77Parser.THEN, 0); };
    ElseIfStatementContext.prototype.ELSEIF = function () { return this.tryGetToken(Fortran77Parser.ELSEIF, 0); };
    ElseIfStatementContext.prototype.wholeStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WholeStatementContext);
        }
        else {
            return this.getRuleContext(i, WholeStatementContext);
        }
    };
    ElseIfStatementContext.prototype.ELSE = function () { return this.tryGetToken(Fortran77Parser.ELSE, 0); };
    ElseIfStatementContext.prototype.IF = function () { return this.tryGetToken(Fortran77Parser.IF, 0); };
    Object.defineProperty(ElseIfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_elseIfStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElseIfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterElseIfStatement) {
            listener.enterElseIfStatement(this);
        }
    };
    // @Override
    ElseIfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitElseIfStatement) {
            listener.exitElseIfStatement(this);
        }
    };
    // @Override
    ElseIfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitElseIfStatement) {
            return visitor.visitElseIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElseIfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElseIfStatementContext = ElseIfStatementContext;
var ElseStatementContext = /** @class */ (function (_super) {
    __extends(ElseStatementContext, _super);
    function ElseStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElseStatementContext.prototype.ELSE = function () { return this.getToken(Fortran77Parser.ELSE, 0); };
    ElseStatementContext.prototype.wholeStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WholeStatementContext);
        }
        else {
            return this.getRuleContext(i, WholeStatementContext);
        }
    };
    Object.defineProperty(ElseStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_elseStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElseStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterElseStatement) {
            listener.enterElseStatement(this);
        }
    };
    // @Override
    ElseStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitElseStatement) {
            listener.exitElseStatement(this);
        }
    };
    // @Override
    ElseStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitElseStatement) {
            return visitor.visitElseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElseStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElseStatementContext = ElseStatementContext;
var EndIfStatementContext = /** @class */ (function (_super) {
    __extends(EndIfStatementContext, _super);
    function EndIfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndIfStatementContext.prototype.ENDIF = function () { return this.tryGetToken(Fortran77Parser.ENDIF, 0); };
    EndIfStatementContext.prototype.END = function () { return this.tryGetToken(Fortran77Parser.END, 0); };
    EndIfStatementContext.prototype.IF = function () { return this.tryGetToken(Fortran77Parser.IF, 0); };
    Object.defineProperty(EndIfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_endIfStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndIfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEndIfStatement) {
            listener.enterEndIfStatement(this);
        }
    };
    // @Override
    EndIfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEndIfStatement) {
            listener.exitEndIfStatement(this);
        }
    };
    // @Override
    EndIfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEndIfStatement) {
            return visitor.visitEndIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndIfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndIfStatementContext = EndIfStatementContext;
var DoStatementContext = /** @class */ (function (_super) {
    __extends(DoStatementContext, _super);
    function DoStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoStatementContext.prototype.DO = function () { return this.getToken(Fortran77Parser.DO, 0); };
    DoStatementContext.prototype.doWithLabel = function () {
        return this.tryGetRuleContext(0, DoWithLabelContext);
    };
    DoStatementContext.prototype.doWithEndDo = function () {
        return this.tryGetRuleContext(0, DoWithEndDoContext);
    };
    Object.defineProperty(DoStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_doStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDoStatement) {
            return visitor.visitDoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoStatementContext = DoStatementContext;
var DoVarArgsContext = /** @class */ (function (_super) {
    __extends(DoVarArgsContext, _super);
    function DoVarArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoVarArgsContext.prototype.variableName = function () {
        return this.getRuleContext(0, VariableNameContext);
    };
    DoVarArgsContext.prototype.ASSIGN = function () { return this.getToken(Fortran77Parser.ASSIGN, 0); };
    DoVarArgsContext.prototype.intRealDpExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntRealDpExprContext);
        }
        else {
            return this.getRuleContext(i, IntRealDpExprContext);
        }
    };
    DoVarArgsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(DoVarArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_doVarArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoVarArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterDoVarArgs) {
            listener.enterDoVarArgs(this);
        }
    };
    // @Override
    DoVarArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitDoVarArgs) {
            listener.exitDoVarArgs(this);
        }
    };
    // @Override
    DoVarArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitDoVarArgs) {
            return visitor.visitDoVarArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoVarArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoVarArgsContext = DoVarArgsContext;
var DoWithLabelContext = /** @class */ (function (_super) {
    __extends(DoWithLabelContext, _super);
    function DoWithLabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoWithLabelContext.prototype.lblRef = function () {
        return this.getRuleContext(0, LblRefContext);
    };
    DoWithLabelContext.prototype.doVarArgs = function () {
        return this.getRuleContext(0, DoVarArgsContext);
    };
    DoWithLabelContext.prototype.COMMA = function () { return this.tryGetToken(Fortran77Parser.COMMA, 0); };
    Object.defineProperty(DoWithLabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_doWithLabel; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoWithLabelContext.prototype.enterRule = function (listener) {
        if (listener.enterDoWithLabel) {
            listener.enterDoWithLabel(this);
        }
    };
    // @Override
    DoWithLabelContext.prototype.exitRule = function (listener) {
        if (listener.exitDoWithLabel) {
            listener.exitDoWithLabel(this);
        }
    };
    // @Override
    DoWithLabelContext.prototype.accept = function (visitor) {
        if (visitor.visitDoWithLabel) {
            return visitor.visitDoWithLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoWithLabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoWithLabelContext = DoWithLabelContext;
var DoBodyContext = /** @class */ (function (_super) {
    __extends(DoBodyContext, _super);
    function DoBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoBodyContext.prototype.wholeStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WholeStatementContext);
        }
        else {
            return this.getRuleContext(i, WholeStatementContext);
        }
    };
    Object.defineProperty(DoBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_doBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterDoBody) {
            listener.enterDoBody(this);
        }
    };
    // @Override
    DoBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitDoBody) {
            listener.exitDoBody(this);
        }
    };
    // @Override
    DoBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitDoBody) {
            return visitor.visitDoBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoBodyContext = DoBodyContext;
var DoWithEndDoContext = /** @class */ (function (_super) {
    __extends(DoWithEndDoContext, _super);
    function DoWithEndDoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoWithEndDoContext.prototype.doVarArgs = function () {
        return this.getRuleContext(0, DoVarArgsContext);
    };
    DoWithEndDoContext.prototype.doBody = function () {
        return this.getRuleContext(0, DoBodyContext);
    };
    DoWithEndDoContext.prototype.enddoStatement = function () {
        return this.getRuleContext(0, EnddoStatementContext);
    };
    Object.defineProperty(DoWithEndDoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_doWithEndDo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoWithEndDoContext.prototype.enterRule = function (listener) {
        if (listener.enterDoWithEndDo) {
            listener.enterDoWithEndDo(this);
        }
    };
    // @Override
    DoWithEndDoContext.prototype.exitRule = function (listener) {
        if (listener.exitDoWithEndDo) {
            listener.exitDoWithEndDo(this);
        }
    };
    // @Override
    DoWithEndDoContext.prototype.accept = function (visitor) {
        if (visitor.visitDoWithEndDo) {
            return visitor.visitDoWithEndDo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoWithEndDoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoWithEndDoContext = DoWithEndDoContext;
var EnddoStatementContext = /** @class */ (function (_super) {
    __extends(EnddoStatementContext, _super);
    function EnddoStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnddoStatementContext.prototype.ENDDO = function () { return this.tryGetToken(Fortran77Parser.ENDDO, 0); };
    EnddoStatementContext.prototype.END = function () { return this.tryGetToken(Fortran77Parser.END, 0); };
    EnddoStatementContext.prototype.DO = function () { return this.tryGetToken(Fortran77Parser.DO, 0); };
    Object.defineProperty(EnddoStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_enddoStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnddoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEnddoStatement) {
            listener.enterEnddoStatement(this);
        }
    };
    // @Override
    EnddoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEnddoStatement) {
            listener.exitEnddoStatement(this);
        }
    };
    // @Override
    EnddoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEnddoStatement) {
            return visitor.visitEnddoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnddoStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnddoStatementContext = EnddoStatementContext;
var ContinueStatementContext = /** @class */ (function (_super) {
    __extends(ContinueStatementContext, _super);
    function ContinueStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContinueStatementContext.prototype.CONTINUE = function () { return this.getToken(Fortran77Parser.CONTINUE, 0); };
    Object.defineProperty(ContinueStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_continueStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContinueStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContinueStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContinueStatementContext = ContinueStatementContext;
var StopStatementContext = /** @class */ (function (_super) {
    __extends(StopStatementContext, _super);
    function StopStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StopStatementContext.prototype.STOP = function () { return this.getToken(Fortran77Parser.STOP, 0); };
    StopStatementContext.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    StopStatementContext.prototype.HOLLERITH = function () { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); };
    Object.defineProperty(StopStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_stopStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StopStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStopStatement) {
            listener.enterStopStatement(this);
        }
    };
    // @Override
    StopStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStopStatement) {
            listener.exitStopStatement(this);
        }
    };
    // @Override
    StopStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStopStatement) {
            return visitor.visitStopStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StopStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StopStatementContext = StopStatementContext;
var PauseStatementContext = /** @class */ (function (_super) {
    __extends(PauseStatementContext, _super);
    function PauseStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PauseStatementContext.prototype.PAUSE = function () { return this.getToken(Fortran77Parser.PAUSE, 0); };
    PauseStatementContext.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    PauseStatementContext.prototype.HOLLERITH = function () { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); };
    Object.defineProperty(PauseStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_pauseStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PauseStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterPauseStatement) {
            listener.enterPauseStatement(this);
        }
    };
    // @Override
    PauseStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitPauseStatement) {
            listener.exitPauseStatement(this);
        }
    };
    // @Override
    PauseStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitPauseStatement) {
            return visitor.visitPauseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PauseStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PauseStatementContext = PauseStatementContext;
var WriteStatementContext = /** @class */ (function (_super) {
    __extends(WriteStatementContext, _super);
    function WriteStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WriteStatementContext.prototype.WRITE = function () { return this.getToken(Fortran77Parser.WRITE, 0); };
    WriteStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    WriteStatementContext.prototype.controlInfoList = function () {
        return this.getRuleContext(0, ControlInfoListContext);
    };
    WriteStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    WriteStatementContext.prototype.ioList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IoListContext);
        }
        else {
            return this.getRuleContext(i, IoListContext);
        }
    };
    WriteStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(WriteStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_writeStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WriteStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWriteStatement) {
            listener.enterWriteStatement(this);
        }
    };
    // @Override
    WriteStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWriteStatement) {
            listener.exitWriteStatement(this);
        }
    };
    // @Override
    WriteStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWriteStatement) {
            return visitor.visitWriteStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WriteStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WriteStatementContext = WriteStatementContext;
var ReadStatementContext = /** @class */ (function (_super) {
    __extends(ReadStatementContext, _super);
    function ReadStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReadStatementContext.prototype.READ = function () { return this.getToken(Fortran77Parser.READ, 0); };
    ReadStatementContext.prototype.formatIdentifier = function () {
        return this.tryGetRuleContext(0, FormatIdentifierContext);
    };
    ReadStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    ReadStatementContext.prototype.ioList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IoListContext);
        }
        else {
            return this.getRuleContext(i, IoListContext);
        }
    };
    Object.defineProperty(ReadStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_readStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReadStatement) {
            listener.enterReadStatement(this);
        }
    };
    // @Override
    ReadStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReadStatement) {
            listener.exitReadStatement(this);
        }
    };
    // @Override
    ReadStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReadStatement) {
            return visitor.visitReadStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadStatementContext = ReadStatementContext;
var PrintStatementContext = /** @class */ (function (_super) {
    __extends(PrintStatementContext, _super);
    function PrintStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrintStatementContext.prototype.PRINT = function () { return this.getToken(Fortran77Parser.PRINT, 0); };
    PrintStatementContext.prototype.formatIdentifier = function () {
        return this.tryGetRuleContext(0, FormatIdentifierContext);
    };
    PrintStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    PrintStatementContext.prototype.ioList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IoListContext);
        }
        else {
            return this.getRuleContext(i, IoListContext);
        }
    };
    Object.defineProperty(PrintStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_printStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrintStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterPrintStatement) {
            listener.enterPrintStatement(this);
        }
    };
    // @Override
    PrintStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitPrintStatement) {
            listener.exitPrintStatement(this);
        }
    };
    // @Override
    PrintStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitPrintStatement) {
            return visitor.visitPrintStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrintStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrintStatementContext = PrintStatementContext;
var AssignmentStatementContext = /** @class */ (function (_super) {
    __extends(AssignmentStatementContext, _super);
    function AssignmentStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentStatementContext.prototype.varRef = function () {
        return this.getRuleContext(0, VarRefContext);
    };
    AssignmentStatementContext.prototype.ASSIGN = function () { return this.getToken(Fortran77Parser.ASSIGN, 0); };
    AssignmentStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AssignmentStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_assignmentStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentStatement) {
            listener.enterAssignmentStatement(this);
        }
    };
    // @Override
    AssignmentStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentStatement) {
            listener.exitAssignmentStatement(this);
        }
    };
    // @Override
    AssignmentStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentStatement) {
            return visitor.visitAssignmentStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentStatementContext = AssignmentStatementContext;
var ControlInfoListContext = /** @class */ (function (_super) {
    __extends(ControlInfoListContext, _super);
    function ControlInfoListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlInfoListContext.prototype.controlInfoListItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ControlInfoListItemContext);
        }
        else {
            return this.getRuleContext(i, ControlInfoListItemContext);
        }
    };
    ControlInfoListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ControlInfoListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlInfoList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlInfoListContext.prototype.enterRule = function (listener) {
        if (listener.enterControlInfoList) {
            listener.enterControlInfoList(this);
        }
    };
    // @Override
    ControlInfoListContext.prototype.exitRule = function (listener) {
        if (listener.exitControlInfoList) {
            listener.exitControlInfoList(this);
        }
    };
    // @Override
    ControlInfoListContext.prototype.accept = function (visitor) {
        if (visitor.visitControlInfoList) {
            return visitor.visitControlInfoList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlInfoListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlInfoListContext = ControlInfoListContext;
var ControlErrSpecContext = /** @class */ (function (_super) {
    __extends(ControlErrSpecContext, _super);
    function ControlErrSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlErrSpecContext.prototype.controlErr = function () {
        return this.getRuleContext(0, ControlErrContext);
    };
    ControlErrSpecContext.prototype.ASSIGN = function () { return this.getToken(Fortran77Parser.ASSIGN, 0); };
    ControlErrSpecContext.prototype.lblRef = function () {
        return this.tryGetRuleContext(0, LblRefContext);
    };
    ControlErrSpecContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(ControlErrSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlErrSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlErrSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterControlErrSpec) {
            listener.enterControlErrSpec(this);
        }
    };
    // @Override
    ControlErrSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitControlErrSpec) {
            listener.exitControlErrSpec(this);
        }
    };
    // @Override
    ControlErrSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitControlErrSpec) {
            return visitor.visitControlErrSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlErrSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlErrSpecContext = ControlErrSpecContext;
var ControlInfoListItemContext = /** @class */ (function (_super) {
    __extends(ControlInfoListItemContext, _super);
    function ControlInfoListItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlInfoListItemContext.prototype.unitIdentifier = function () {
        return this.tryGetRuleContext(0, UnitIdentifierContext);
    };
    ControlInfoListItemContext.prototype.HOLLERITH = function () { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); };
    ControlInfoListItemContext.prototype.SCON = function () { return this.tryGetToken(Fortran77Parser.SCON, 0); };
    ControlInfoListItemContext.prototype.controlFmt = function () {
        return this.tryGetRuleContext(0, ControlFmtContext);
    };
    ControlInfoListItemContext.prototype.ASSIGN = function () { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); };
    ControlInfoListItemContext.prototype.formatIdentifier = function () {
        return this.tryGetRuleContext(0, FormatIdentifierContext);
    };
    ControlInfoListItemContext.prototype.controlUnit = function () {
        return this.tryGetRuleContext(0, ControlUnitContext);
    };
    ControlInfoListItemContext.prototype.controlRec = function () {
        return this.tryGetRuleContext(0, ControlRecContext);
    };
    ControlInfoListItemContext.prototype.integerExpr = function () {
        return this.tryGetRuleContext(0, IntegerExprContext);
    };
    ControlInfoListItemContext.prototype.controlEnd = function () {
        return this.tryGetRuleContext(0, ControlEndContext);
    };
    ControlInfoListItemContext.prototype.lblRef = function () {
        return this.tryGetRuleContext(0, LblRefContext);
    };
    ControlInfoListItemContext.prototype.controlErrSpec = function () {
        return this.tryGetRuleContext(0, ControlErrSpecContext);
    };
    ControlInfoListItemContext.prototype.controlIostat = function () {
        return this.tryGetRuleContext(0, ControlIostatContext);
    };
    ControlInfoListItemContext.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    Object.defineProperty(ControlInfoListItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlInfoListItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlInfoListItemContext.prototype.enterRule = function (listener) {
        if (listener.enterControlInfoListItem) {
            listener.enterControlInfoListItem(this);
        }
    };
    // @Override
    ControlInfoListItemContext.prototype.exitRule = function (listener) {
        if (listener.exitControlInfoListItem) {
            listener.exitControlInfoListItem(this);
        }
    };
    // @Override
    ControlInfoListItemContext.prototype.accept = function (visitor) {
        if (visitor.visitControlInfoListItem) {
            return visitor.visitControlInfoListItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlInfoListItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlInfoListItemContext = ControlInfoListItemContext;
var IoListContext = /** @class */ (function (_super) {
    __extends(IoListContext, _super);
    function IoListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IoListContext.prototype.ioListItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IoListItemContext);
        }
        else {
            return this.getRuleContext(i, IoListItemContext);
        }
    };
    IoListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    IoListContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    IoListContext.prototype.ASSIGN = function () { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); };
    IoListContext.prototype.ioList = function () {
        return this.tryGetRuleContext(0, IoListContext);
    };
    Object.defineProperty(IoListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_ioList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IoListContext.prototype.enterRule = function (listener) {
        if (listener.enterIoList) {
            listener.enterIoList(this);
        }
    };
    // @Override
    IoListContext.prototype.exitRule = function (listener) {
        if (listener.exitIoList) {
            listener.exitIoList(this);
        }
    };
    // @Override
    IoListContext.prototype.accept = function (visitor) {
        if (visitor.visitIoList) {
            return visitor.visitIoList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IoListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IoListContext = IoListContext;
var IoListItemContext = /** @class */ (function (_super) {
    __extends(IoListItemContext, _super);
    function IoListItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IoListItemContext.prototype.ioImpliedDoList = function () {
        return this.tryGetRuleContext(0, IoImpliedDoListContext);
    };
    IoListItemContext.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    IoListItemContext.prototype.ioList = function () {
        return this.tryGetRuleContext(0, IoListContext);
    };
    IoListItemContext.prototype.COMMA = function () { return this.tryGetToken(Fortran77Parser.COMMA, 0); };
    IoListItemContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    IoListItemContext.prototype.ASSIGN = function () { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); };
    IoListItemContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(IoListItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_ioListItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IoListItemContext.prototype.enterRule = function (listener) {
        if (listener.enterIoListItem) {
            listener.enterIoListItem(this);
        }
    };
    // @Override
    IoListItemContext.prototype.exitRule = function (listener) {
        if (listener.exitIoListItem) {
            listener.exitIoListItem(this);
        }
    };
    // @Override
    IoListItemContext.prototype.accept = function (visitor) {
        if (visitor.visitIoListItem) {
            return visitor.visitIoListItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IoListItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IoListItemContext = IoListItemContext;
var IoImpliedDoListContext = /** @class */ (function (_super) {
    __extends(IoImpliedDoListContext, _super);
    function IoImpliedDoListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IoImpliedDoListContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    IoImpliedDoListContext.prototype.ioList = function () {
        return this.getRuleContext(0, IoListContext);
    };
    IoImpliedDoListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    IoImpliedDoListContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    IoImpliedDoListContext.prototype.ASSIGN = function () { return this.getToken(Fortran77Parser.ASSIGN, 0); };
    IoImpliedDoListContext.prototype.intRealDpExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntRealDpExprContext);
        }
        else {
            return this.getRuleContext(i, IntRealDpExprContext);
        }
    };
    IoImpliedDoListContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(IoImpliedDoListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_ioImpliedDoList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IoImpliedDoListContext.prototype.enterRule = function (listener) {
        if (listener.enterIoImpliedDoList) {
            listener.enterIoImpliedDoList(this);
        }
    };
    // @Override
    IoImpliedDoListContext.prototype.exitRule = function (listener) {
        if (listener.exitIoImpliedDoList) {
            listener.exitIoImpliedDoList(this);
        }
    };
    // @Override
    IoImpliedDoListContext.prototype.accept = function (visitor) {
        if (visitor.visitIoImpliedDoList) {
            return visitor.visitIoImpliedDoList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IoImpliedDoListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IoImpliedDoListContext = IoImpliedDoListContext;
var OpenStatementContext = /** @class */ (function (_super) {
    __extends(OpenStatementContext, _super);
    function OpenStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpenStatementContext.prototype.OPEN = function () { return this.getToken(Fortran77Parser.OPEN, 0); };
    OpenStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    OpenStatementContext.prototype.openControl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OpenControlContext);
        }
        else {
            return this.getRuleContext(i, OpenControlContext);
        }
    };
    OpenStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    OpenStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(OpenStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_openStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpenStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterOpenStatement) {
            listener.enterOpenStatement(this);
        }
    };
    // @Override
    OpenStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitOpenStatement) {
            listener.exitOpenStatement(this);
        }
    };
    // @Override
    OpenStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitOpenStatement) {
            return visitor.visitOpenStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpenStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpenStatementContext = OpenStatementContext;
var OpenControlContext = /** @class */ (function (_super) {
    __extends(OpenControlContext, _super);
    function OpenControlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpenControlContext.prototype.unitIdentifier = function () {
        return this.tryGetRuleContext(0, UnitIdentifierContext);
    };
    OpenControlContext.prototype.controlUnit = function () {
        return this.tryGetRuleContext(0, ControlUnitContext);
    };
    OpenControlContext.prototype.ASSIGN = function () { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); };
    OpenControlContext.prototype.controlErrSpec = function () {
        return this.tryGetRuleContext(0, ControlErrSpecContext);
    };
    OpenControlContext.prototype.controlFile = function () {
        return this.tryGetRuleContext(0, ControlFileContext);
    };
    OpenControlContext.prototype.characterExpression = function () {
        return this.tryGetRuleContext(0, CharacterExpressionContext);
    };
    OpenControlContext.prototype.controlStatus = function () {
        return this.tryGetRuleContext(0, ControlStatusContext);
    };
    OpenControlContext.prototype.controlAccess = function () {
        return this.tryGetRuleContext(0, ControlAccessContext);
    };
    OpenControlContext.prototype.controlPosition = function () {
        return this.tryGetRuleContext(0, ControlPositionContext);
    };
    OpenControlContext.prototype.controlForm = function () {
        return this.tryGetRuleContext(0, ControlFormContext);
    };
    OpenControlContext.prototype.controlRecl = function () {
        return this.tryGetRuleContext(0, ControlReclContext);
    };
    OpenControlContext.prototype.integerExpr = function () {
        return this.tryGetRuleContext(0, IntegerExprContext);
    };
    OpenControlContext.prototype.controlBlank = function () {
        return this.tryGetRuleContext(0, ControlBlankContext);
    };
    OpenControlContext.prototype.controlIostat = function () {
        return this.tryGetRuleContext(0, ControlIostatContext);
    };
    OpenControlContext.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    Object.defineProperty(OpenControlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_openControl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpenControlContext.prototype.enterRule = function (listener) {
        if (listener.enterOpenControl) {
            listener.enterOpenControl(this);
        }
    };
    // @Override
    OpenControlContext.prototype.exitRule = function (listener) {
        if (listener.exitOpenControl) {
            listener.exitOpenControl(this);
        }
    };
    // @Override
    OpenControlContext.prototype.accept = function (visitor) {
        if (visitor.visitOpenControl) {
            return visitor.visitOpenControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpenControlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpenControlContext = OpenControlContext;
var ControlFmtContext = /** @class */ (function (_super) {
    __extends(ControlFmtContext, _super);
    function ControlFmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlFmtContext.prototype.FMT = function () { return this.getToken(Fortran77Parser.FMT, 0); };
    Object.defineProperty(ControlFmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlFmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlFmtContext.prototype.enterRule = function (listener) {
        if (listener.enterControlFmt) {
            listener.enterControlFmt(this);
        }
    };
    // @Override
    ControlFmtContext.prototype.exitRule = function (listener) {
        if (listener.exitControlFmt) {
            listener.exitControlFmt(this);
        }
    };
    // @Override
    ControlFmtContext.prototype.accept = function (visitor) {
        if (visitor.visitControlFmt) {
            return visitor.visitControlFmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlFmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlFmtContext = ControlFmtContext;
var ControlUnitContext = /** @class */ (function (_super) {
    __extends(ControlUnitContext, _super);
    function ControlUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlUnitContext.prototype.UNIT = function () { return this.getToken(Fortran77Parser.UNIT, 0); };
    Object.defineProperty(ControlUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterControlUnit) {
            listener.enterControlUnit(this);
        }
    };
    // @Override
    ControlUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitControlUnit) {
            listener.exitControlUnit(this);
        }
    };
    // @Override
    ControlUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitControlUnit) {
            return visitor.visitControlUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlUnitContext = ControlUnitContext;
var ControlRecContext = /** @class */ (function (_super) {
    __extends(ControlRecContext, _super);
    function ControlRecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlRecContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(ControlRecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlRec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlRecContext.prototype.enterRule = function (listener) {
        if (listener.enterControlRec) {
            listener.enterControlRec(this);
        }
    };
    // @Override
    ControlRecContext.prototype.exitRule = function (listener) {
        if (listener.exitControlRec) {
            listener.exitControlRec(this);
        }
    };
    // @Override
    ControlRecContext.prototype.accept = function (visitor) {
        if (visitor.visitControlRec) {
            return visitor.visitControlRec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlRecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlRecContext = ControlRecContext;
var ControlEndContext = /** @class */ (function (_super) {
    __extends(ControlEndContext, _super);
    function ControlEndContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlEndContext.prototype.END = function () { return this.getToken(Fortran77Parser.END, 0); };
    Object.defineProperty(ControlEndContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlEnd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlEndContext.prototype.enterRule = function (listener) {
        if (listener.enterControlEnd) {
            listener.enterControlEnd(this);
        }
    };
    // @Override
    ControlEndContext.prototype.exitRule = function (listener) {
        if (listener.exitControlEnd) {
            listener.exitControlEnd(this);
        }
    };
    // @Override
    ControlEndContext.prototype.accept = function (visitor) {
        if (visitor.visitControlEnd) {
            return visitor.visitControlEnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlEndContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlEndContext = ControlEndContext;
var ControlErrContext = /** @class */ (function (_super) {
    __extends(ControlErrContext, _super);
    function ControlErrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlErrContext.prototype.ERR = function () { return this.getToken(Fortran77Parser.ERR, 0); };
    Object.defineProperty(ControlErrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlErr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlErrContext.prototype.enterRule = function (listener) {
        if (listener.enterControlErr) {
            listener.enterControlErr(this);
        }
    };
    // @Override
    ControlErrContext.prototype.exitRule = function (listener) {
        if (listener.exitControlErr) {
            listener.exitControlErr(this);
        }
    };
    // @Override
    ControlErrContext.prototype.accept = function (visitor) {
        if (visitor.visitControlErr) {
            return visitor.visitControlErr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlErrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlErrContext = ControlErrContext;
var ControlIostatContext = /** @class */ (function (_super) {
    __extends(ControlIostatContext, _super);
    function ControlIostatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlIostatContext.prototype.IOSTART = function () { return this.getToken(Fortran77Parser.IOSTART, 0); };
    Object.defineProperty(ControlIostatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlIostat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlIostatContext.prototype.enterRule = function (listener) {
        if (listener.enterControlIostat) {
            listener.enterControlIostat(this);
        }
    };
    // @Override
    ControlIostatContext.prototype.exitRule = function (listener) {
        if (listener.exitControlIostat) {
            listener.exitControlIostat(this);
        }
    };
    // @Override
    ControlIostatContext.prototype.accept = function (visitor) {
        if (visitor.visitControlIostat) {
            return visitor.visitControlIostat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlIostatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlIostatContext = ControlIostatContext;
var ControlFileContext = /** @class */ (function (_super) {
    __extends(ControlFileContext, _super);
    function ControlFileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlFileContext.prototype.FILE = function () { return this.getToken(Fortran77Parser.FILE, 0); };
    Object.defineProperty(ControlFileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlFile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlFileContext.prototype.enterRule = function (listener) {
        if (listener.enterControlFile) {
            listener.enterControlFile(this);
        }
    };
    // @Override
    ControlFileContext.prototype.exitRule = function (listener) {
        if (listener.exitControlFile) {
            listener.exitControlFile(this);
        }
    };
    // @Override
    ControlFileContext.prototype.accept = function (visitor) {
        if (visitor.visitControlFile) {
            return visitor.visitControlFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlFileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlFileContext = ControlFileContext;
var ControlStatusContext = /** @class */ (function (_super) {
    __extends(ControlStatusContext, _super);
    function ControlStatusContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlStatusContext.prototype.STATUS = function () { return this.getToken(Fortran77Parser.STATUS, 0); };
    Object.defineProperty(ControlStatusContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlStatus; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlStatusContext.prototype.enterRule = function (listener) {
        if (listener.enterControlStatus) {
            listener.enterControlStatus(this);
        }
    };
    // @Override
    ControlStatusContext.prototype.exitRule = function (listener) {
        if (listener.exitControlStatus) {
            listener.exitControlStatus(this);
        }
    };
    // @Override
    ControlStatusContext.prototype.accept = function (visitor) {
        if (visitor.visitControlStatus) {
            return visitor.visitControlStatus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlStatusContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlStatusContext = ControlStatusContext;
var ControlAccessContext = /** @class */ (function (_super) {
    __extends(ControlAccessContext, _super);
    function ControlAccessContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlAccessContext.prototype.ACCESS = function () { return this.getToken(Fortran77Parser.ACCESS, 0); };
    Object.defineProperty(ControlAccessContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlAccess; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlAccessContext.prototype.enterRule = function (listener) {
        if (listener.enterControlAccess) {
            listener.enterControlAccess(this);
        }
    };
    // @Override
    ControlAccessContext.prototype.exitRule = function (listener) {
        if (listener.exitControlAccess) {
            listener.exitControlAccess(this);
        }
    };
    // @Override
    ControlAccessContext.prototype.accept = function (visitor) {
        if (visitor.visitControlAccess) {
            return visitor.visitControlAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlAccessContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlAccessContext = ControlAccessContext;
var ControlPositionContext = /** @class */ (function (_super) {
    __extends(ControlPositionContext, _super);
    function ControlPositionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlPositionContext.prototype.POSITION = function () { return this.getToken(Fortran77Parser.POSITION, 0); };
    Object.defineProperty(ControlPositionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlPosition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlPositionContext.prototype.enterRule = function (listener) {
        if (listener.enterControlPosition) {
            listener.enterControlPosition(this);
        }
    };
    // @Override
    ControlPositionContext.prototype.exitRule = function (listener) {
        if (listener.exitControlPosition) {
            listener.exitControlPosition(this);
        }
    };
    // @Override
    ControlPositionContext.prototype.accept = function (visitor) {
        if (visitor.visitControlPosition) {
            return visitor.visitControlPosition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlPositionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlPositionContext = ControlPositionContext;
var ControlFormContext = /** @class */ (function (_super) {
    __extends(ControlFormContext, _super);
    function ControlFormContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlFormContext.prototype.FORM = function () { return this.getToken(Fortran77Parser.FORM, 0); };
    Object.defineProperty(ControlFormContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlForm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlFormContext.prototype.enterRule = function (listener) {
        if (listener.enterControlForm) {
            listener.enterControlForm(this);
        }
    };
    // @Override
    ControlFormContext.prototype.exitRule = function (listener) {
        if (listener.exitControlForm) {
            listener.exitControlForm(this);
        }
    };
    // @Override
    ControlFormContext.prototype.accept = function (visitor) {
        if (visitor.visitControlForm) {
            return visitor.visitControlForm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlFormContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlFormContext = ControlFormContext;
var ControlReclContext = /** @class */ (function (_super) {
    __extends(ControlReclContext, _super);
    function ControlReclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlReclContext.prototype.RECL = function () { return this.getToken(Fortran77Parser.RECL, 0); };
    Object.defineProperty(ControlReclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlRecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlReclContext.prototype.enterRule = function (listener) {
        if (listener.enterControlRecl) {
            listener.enterControlRecl(this);
        }
    };
    // @Override
    ControlReclContext.prototype.exitRule = function (listener) {
        if (listener.exitControlRecl) {
            listener.exitControlRecl(this);
        }
    };
    // @Override
    ControlReclContext.prototype.accept = function (visitor) {
        if (visitor.visitControlRecl) {
            return visitor.visitControlRecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlReclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlReclContext = ControlReclContext;
var ControlBlankContext = /** @class */ (function (_super) {
    __extends(ControlBlankContext, _super);
    function ControlBlankContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlBlankContext.prototype.BLANK = function () { return this.getToken(Fortran77Parser.BLANK, 0); };
    Object.defineProperty(ControlBlankContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlBlank; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlBlankContext.prototype.enterRule = function (listener) {
        if (listener.enterControlBlank) {
            listener.enterControlBlank(this);
        }
    };
    // @Override
    ControlBlankContext.prototype.exitRule = function (listener) {
        if (listener.exitControlBlank) {
            listener.exitControlBlank(this);
        }
    };
    // @Override
    ControlBlankContext.prototype.accept = function (visitor) {
        if (visitor.visitControlBlank) {
            return visitor.visitControlBlank(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlBlankContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlBlankContext = ControlBlankContext;
var ControlExistContext = /** @class */ (function (_super) {
    __extends(ControlExistContext, _super);
    function ControlExistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlExistContext.prototype.EXIST = function () { return this.getToken(Fortran77Parser.EXIST, 0); };
    Object.defineProperty(ControlExistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlExist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlExistContext.prototype.enterRule = function (listener) {
        if (listener.enterControlExist) {
            listener.enterControlExist(this);
        }
    };
    // @Override
    ControlExistContext.prototype.exitRule = function (listener) {
        if (listener.exitControlExist) {
            listener.exitControlExist(this);
        }
    };
    // @Override
    ControlExistContext.prototype.accept = function (visitor) {
        if (visitor.visitControlExist) {
            return visitor.visitControlExist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlExistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlExistContext = ControlExistContext;
var ControlOpenedContext = /** @class */ (function (_super) {
    __extends(ControlOpenedContext, _super);
    function ControlOpenedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlOpenedContext.prototype.OPENED = function () { return this.getToken(Fortran77Parser.OPENED, 0); };
    Object.defineProperty(ControlOpenedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlOpened; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlOpenedContext.prototype.enterRule = function (listener) {
        if (listener.enterControlOpened) {
            listener.enterControlOpened(this);
        }
    };
    // @Override
    ControlOpenedContext.prototype.exitRule = function (listener) {
        if (listener.exitControlOpened) {
            listener.exitControlOpened(this);
        }
    };
    // @Override
    ControlOpenedContext.prototype.accept = function (visitor) {
        if (visitor.visitControlOpened) {
            return visitor.visitControlOpened(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlOpenedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlOpenedContext = ControlOpenedContext;
var ControlNumberContext = /** @class */ (function (_super) {
    __extends(ControlNumberContext, _super);
    function ControlNumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlNumberContext.prototype.NUMBER = function () { return this.getToken(Fortran77Parser.NUMBER, 0); };
    Object.defineProperty(ControlNumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlNumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlNumberContext.prototype.enterRule = function (listener) {
        if (listener.enterControlNumber) {
            listener.enterControlNumber(this);
        }
    };
    // @Override
    ControlNumberContext.prototype.exitRule = function (listener) {
        if (listener.exitControlNumber) {
            listener.exitControlNumber(this);
        }
    };
    // @Override
    ControlNumberContext.prototype.accept = function (visitor) {
        if (visitor.visitControlNumber) {
            return visitor.visitControlNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlNumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlNumberContext = ControlNumberContext;
var ControlNamedContext = /** @class */ (function (_super) {
    __extends(ControlNamedContext, _super);
    function ControlNamedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlNamedContext.prototype.NAMED = function () { return this.getToken(Fortran77Parser.NAMED, 0); };
    Object.defineProperty(ControlNamedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlNamed; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlNamedContext.prototype.enterRule = function (listener) {
        if (listener.enterControlNamed) {
            listener.enterControlNamed(this);
        }
    };
    // @Override
    ControlNamedContext.prototype.exitRule = function (listener) {
        if (listener.exitControlNamed) {
            listener.exitControlNamed(this);
        }
    };
    // @Override
    ControlNamedContext.prototype.accept = function (visitor) {
        if (visitor.visitControlNamed) {
            return visitor.visitControlNamed(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlNamedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlNamedContext = ControlNamedContext;
var ControlNameContext = /** @class */ (function (_super) {
    __extends(ControlNameContext, _super);
    function ControlNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlNameContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(ControlNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlNameContext.prototype.enterRule = function (listener) {
        if (listener.enterControlName) {
            listener.enterControlName(this);
        }
    };
    // @Override
    ControlNameContext.prototype.exitRule = function (listener) {
        if (listener.exitControlName) {
            listener.exitControlName(this);
        }
    };
    // @Override
    ControlNameContext.prototype.accept = function (visitor) {
        if (visitor.visitControlName) {
            return visitor.visitControlName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlNameContext = ControlNameContext;
var ControlSequentialContext = /** @class */ (function (_super) {
    __extends(ControlSequentialContext, _super);
    function ControlSequentialContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlSequentialContext.prototype.SEQUENTIAL = function () { return this.getToken(Fortran77Parser.SEQUENTIAL, 0); };
    Object.defineProperty(ControlSequentialContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlSequential; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlSequentialContext.prototype.enterRule = function (listener) {
        if (listener.enterControlSequential) {
            listener.enterControlSequential(this);
        }
    };
    // @Override
    ControlSequentialContext.prototype.exitRule = function (listener) {
        if (listener.exitControlSequential) {
            listener.exitControlSequential(this);
        }
    };
    // @Override
    ControlSequentialContext.prototype.accept = function (visitor) {
        if (visitor.visitControlSequential) {
            return visitor.visitControlSequential(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlSequentialContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlSequentialContext = ControlSequentialContext;
var ControlDirectContext = /** @class */ (function (_super) {
    __extends(ControlDirectContext, _super);
    function ControlDirectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlDirectContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(ControlDirectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlDirect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlDirectContext.prototype.enterRule = function (listener) {
        if (listener.enterControlDirect) {
            listener.enterControlDirect(this);
        }
    };
    // @Override
    ControlDirectContext.prototype.exitRule = function (listener) {
        if (listener.exitControlDirect) {
            listener.exitControlDirect(this);
        }
    };
    // @Override
    ControlDirectContext.prototype.accept = function (visitor) {
        if (visitor.visitControlDirect) {
            return visitor.visitControlDirect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlDirectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlDirectContext = ControlDirectContext;
var ControlFormattedContext = /** @class */ (function (_super) {
    __extends(ControlFormattedContext, _super);
    function ControlFormattedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlFormattedContext.prototype.FORMATTED = function () { return this.getToken(Fortran77Parser.FORMATTED, 0); };
    Object.defineProperty(ControlFormattedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlFormatted; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlFormattedContext.prototype.enterRule = function (listener) {
        if (listener.enterControlFormatted) {
            listener.enterControlFormatted(this);
        }
    };
    // @Override
    ControlFormattedContext.prototype.exitRule = function (listener) {
        if (listener.exitControlFormatted) {
            listener.exitControlFormatted(this);
        }
    };
    // @Override
    ControlFormattedContext.prototype.accept = function (visitor) {
        if (visitor.visitControlFormatted) {
            return visitor.visitControlFormatted(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlFormattedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlFormattedContext = ControlFormattedContext;
var ControlUnformattedContext = /** @class */ (function (_super) {
    __extends(ControlUnformattedContext, _super);
    function ControlUnformattedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlUnformattedContext.prototype.UNFORMATTED = function () { return this.getToken(Fortran77Parser.UNFORMATTED, 0); };
    Object.defineProperty(ControlUnformattedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlUnformatted; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlUnformattedContext.prototype.enterRule = function (listener) {
        if (listener.enterControlUnformatted) {
            listener.enterControlUnformatted(this);
        }
    };
    // @Override
    ControlUnformattedContext.prototype.exitRule = function (listener) {
        if (listener.exitControlUnformatted) {
            listener.exitControlUnformatted(this);
        }
    };
    // @Override
    ControlUnformattedContext.prototype.accept = function (visitor) {
        if (visitor.visitControlUnformatted) {
            return visitor.visitControlUnformatted(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlUnformattedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlUnformattedContext = ControlUnformattedContext;
var ControlNextrecContext = /** @class */ (function (_super) {
    __extends(ControlNextrecContext, _super);
    function ControlNextrecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlNextrecContext.prototype.NEXTREC = function () { return this.getToken(Fortran77Parser.NEXTREC, 0); };
    Object.defineProperty(ControlNextrecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_controlNextrec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlNextrecContext.prototype.enterRule = function (listener) {
        if (listener.enterControlNextrec) {
            listener.enterControlNextrec(this);
        }
    };
    // @Override
    ControlNextrecContext.prototype.exitRule = function (listener) {
        if (listener.exitControlNextrec) {
            listener.exitControlNextrec(this);
        }
    };
    // @Override
    ControlNextrecContext.prototype.accept = function (visitor) {
        if (visitor.visitControlNextrec) {
            return visitor.visitControlNextrec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlNextrecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlNextrecContext = ControlNextrecContext;
var CloseStatementContext = /** @class */ (function (_super) {
    __extends(CloseStatementContext, _super);
    function CloseStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CloseStatementContext.prototype.CLOSE = function () { return this.getToken(Fortran77Parser.CLOSE, 0); };
    CloseStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    CloseStatementContext.prototype.closeControl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CloseControlContext);
        }
        else {
            return this.getRuleContext(i, CloseControlContext);
        }
    };
    CloseStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    CloseStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(CloseStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_closeStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CloseStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCloseStatement) {
            listener.enterCloseStatement(this);
        }
    };
    // @Override
    CloseStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCloseStatement) {
            listener.exitCloseStatement(this);
        }
    };
    // @Override
    CloseStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCloseStatement) {
            return visitor.visitCloseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CloseStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CloseStatementContext = CloseStatementContext;
var CloseControlContext = /** @class */ (function (_super) {
    __extends(CloseControlContext, _super);
    function CloseControlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CloseControlContext.prototype.unitIdentifier = function () {
        return this.tryGetRuleContext(0, UnitIdentifierContext);
    };
    CloseControlContext.prototype.controlUnit = function () {
        return this.tryGetRuleContext(0, ControlUnitContext);
    };
    CloseControlContext.prototype.ASSIGN = function () { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); };
    CloseControlContext.prototype.controlErrSpec = function () {
        return this.tryGetRuleContext(0, ControlErrSpecContext);
    };
    CloseControlContext.prototype.controlStatus = function () {
        return this.tryGetRuleContext(0, ControlStatusContext);
    };
    CloseControlContext.prototype.characterExpression = function () {
        return this.tryGetRuleContext(0, CharacterExpressionContext);
    };
    CloseControlContext.prototype.controlIostat = function () {
        return this.tryGetRuleContext(0, ControlIostatContext);
    };
    CloseControlContext.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    Object.defineProperty(CloseControlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_closeControl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CloseControlContext.prototype.enterRule = function (listener) {
        if (listener.enterCloseControl) {
            listener.enterCloseControl(this);
        }
    };
    // @Override
    CloseControlContext.prototype.exitRule = function (listener) {
        if (listener.exitCloseControl) {
            listener.exitCloseControl(this);
        }
    };
    // @Override
    CloseControlContext.prototype.accept = function (visitor) {
        if (visitor.visitCloseControl) {
            return visitor.visitCloseControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CloseControlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CloseControlContext = CloseControlContext;
var InquireStatementContext = /** @class */ (function (_super) {
    __extends(InquireStatementContext, _super);
    function InquireStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InquireStatementContext.prototype.INQUIRE = function () { return this.getToken(Fortran77Parser.INQUIRE, 0); };
    InquireStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    InquireStatementContext.prototype.inquireControl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InquireControlContext);
        }
        else {
            return this.getRuleContext(i, InquireControlContext);
        }
    };
    InquireStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    InquireStatementContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(InquireStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_inquireStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InquireStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterInquireStatement) {
            listener.enterInquireStatement(this);
        }
    };
    // @Override
    InquireStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitInquireStatement) {
            listener.exitInquireStatement(this);
        }
    };
    // @Override
    InquireStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitInquireStatement) {
            return visitor.visitInquireStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InquireStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InquireStatementContext = InquireStatementContext;
var InquireControlContext = /** @class */ (function (_super) {
    __extends(InquireControlContext, _super);
    function InquireControlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InquireControlContext.prototype.controlUnit = function () {
        return this.tryGetRuleContext(0, ControlUnitContext);
    };
    InquireControlContext.prototype.ASSIGN = function () { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); };
    InquireControlContext.prototype.unitIdentifier = function () {
        return this.tryGetRuleContext(0, UnitIdentifierContext);
    };
    InquireControlContext.prototype.controlFile = function () {
        return this.tryGetRuleContext(0, ControlFileContext);
    };
    InquireControlContext.prototype.characterExpression = function () {
        return this.tryGetRuleContext(0, CharacterExpressionContext);
    };
    InquireControlContext.prototype.controlErrSpec = function () {
        return this.tryGetRuleContext(0, ControlErrSpecContext);
    };
    InquireControlContext.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    InquireControlContext.prototype.controlIostat = function () {
        return this.tryGetRuleContext(0, ControlIostatContext);
    };
    InquireControlContext.prototype.controlExist = function () {
        return this.tryGetRuleContext(0, ControlExistContext);
    };
    InquireControlContext.prototype.controlOpened = function () {
        return this.tryGetRuleContext(0, ControlOpenedContext);
    };
    InquireControlContext.prototype.controlNumber = function () {
        return this.tryGetRuleContext(0, ControlNumberContext);
    };
    InquireControlContext.prototype.controlNamed = function () {
        return this.tryGetRuleContext(0, ControlNamedContext);
    };
    InquireControlContext.prototype.controlName = function () {
        return this.tryGetRuleContext(0, ControlNameContext);
    };
    InquireControlContext.prototype.controlAccess = function () {
        return this.tryGetRuleContext(0, ControlAccessContext);
    };
    InquireControlContext.prototype.controlSequential = function () {
        return this.tryGetRuleContext(0, ControlSequentialContext);
    };
    InquireControlContext.prototype.controlDirect = function () {
        return this.tryGetRuleContext(0, ControlDirectContext);
    };
    InquireControlContext.prototype.controlForm = function () {
        return this.tryGetRuleContext(0, ControlFormContext);
    };
    InquireControlContext.prototype.controlFormatted = function () {
        return this.tryGetRuleContext(0, ControlFormattedContext);
    };
    InquireControlContext.prototype.controlUnformatted = function () {
        return this.tryGetRuleContext(0, ControlUnformattedContext);
    };
    InquireControlContext.prototype.controlRecl = function () {
        return this.tryGetRuleContext(0, ControlReclContext);
    };
    InquireControlContext.prototype.controlNextrec = function () {
        return this.tryGetRuleContext(0, ControlNextrecContext);
    };
    InquireControlContext.prototype.controlBlank = function () {
        return this.tryGetRuleContext(0, ControlBlankContext);
    };
    Object.defineProperty(InquireControlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_inquireControl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InquireControlContext.prototype.enterRule = function (listener) {
        if (listener.enterInquireControl) {
            listener.enterInquireControl(this);
        }
    };
    // @Override
    InquireControlContext.prototype.exitRule = function (listener) {
        if (listener.exitInquireControl) {
            listener.exitInquireControl(this);
        }
    };
    // @Override
    InquireControlContext.prototype.accept = function (visitor) {
        if (visitor.visitInquireControl) {
            return visitor.visitInquireControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InquireControlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InquireControlContext = InquireControlContext;
var BackspaceStatementContext = /** @class */ (function (_super) {
    __extends(BackspaceStatementContext, _super);
    function BackspaceStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BackspaceStatementContext.prototype.BACKSPACE = function () { return this.getToken(Fortran77Parser.BACKSPACE, 0); };
    BackspaceStatementContext.prototype.berFinish = function () {
        return this.getRuleContext(0, BerFinishContext);
    };
    Object.defineProperty(BackspaceStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_backspaceStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BackspaceStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBackspaceStatement) {
            listener.enterBackspaceStatement(this);
        }
    };
    // @Override
    BackspaceStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBackspaceStatement) {
            listener.exitBackspaceStatement(this);
        }
    };
    // @Override
    BackspaceStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBackspaceStatement) {
            return visitor.visitBackspaceStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BackspaceStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BackspaceStatementContext = BackspaceStatementContext;
var EndfileStatementContext = /** @class */ (function (_super) {
    __extends(EndfileStatementContext, _super);
    function EndfileStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndfileStatementContext.prototype.ENDFILE = function () { return this.getToken(Fortran77Parser.ENDFILE, 0); };
    EndfileStatementContext.prototype.berFinish = function () {
        return this.getRuleContext(0, BerFinishContext);
    };
    Object.defineProperty(EndfileStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_endfileStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndfileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEndfileStatement) {
            listener.enterEndfileStatement(this);
        }
    };
    // @Override
    EndfileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEndfileStatement) {
            listener.exitEndfileStatement(this);
        }
    };
    // @Override
    EndfileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEndfileStatement) {
            return visitor.visitEndfileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndfileStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndfileStatementContext = EndfileStatementContext;
var RewindStatementContext = /** @class */ (function (_super) {
    __extends(RewindStatementContext, _super);
    function RewindStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RewindStatementContext.prototype.REWIND = function () { return this.getToken(Fortran77Parser.REWIND, 0); };
    RewindStatementContext.prototype.berFinish = function () {
        return this.getRuleContext(0, BerFinishContext);
    };
    Object.defineProperty(RewindStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_rewindStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RewindStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterRewindStatement) {
            listener.enterRewindStatement(this);
        }
    };
    // @Override
    RewindStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitRewindStatement) {
            listener.exitRewindStatement(this);
        }
    };
    // @Override
    RewindStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitRewindStatement) {
            return visitor.visitRewindStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RewindStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RewindStatementContext = RewindStatementContext;
var BerFinishContext = /** @class */ (function (_super) {
    __extends(BerFinishContext, _super);
    function BerFinishContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BerFinishContext.prototype.unitIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnitIdentifierContext);
        }
        else {
            return this.getRuleContext(i, UnitIdentifierContext);
        }
    };
    BerFinishContext.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    BerFinishContext.prototype.berFinishItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BerFinishItemContext);
        }
        else {
            return this.getRuleContext(i, BerFinishItemContext);
        }
    };
    BerFinishContext.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    BerFinishContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(BerFinishContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_berFinish; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BerFinishContext.prototype.enterRule = function (listener) {
        if (listener.enterBerFinish) {
            listener.enterBerFinish(this);
        }
    };
    // @Override
    BerFinishContext.prototype.exitRule = function (listener) {
        if (listener.exitBerFinish) {
            listener.exitBerFinish(this);
        }
    };
    // @Override
    BerFinishContext.prototype.accept = function (visitor) {
        if (visitor.visitBerFinish) {
            return visitor.visitBerFinish(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BerFinishContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BerFinishContext = BerFinishContext;
var BerFinishItemContext = /** @class */ (function (_super) {
    __extends(BerFinishItemContext, _super);
    function BerFinishItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BerFinishItemContext.prototype.unitIdentifier = function () {
        return this.tryGetRuleContext(0, UnitIdentifierContext);
    };
    BerFinishItemContext.prototype.controlUnit = function () {
        return this.tryGetRuleContext(0, ControlUnitContext);
    };
    BerFinishItemContext.prototype.ASSIGN = function () { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); };
    BerFinishItemContext.prototype.controlErrSpec = function () {
        return this.tryGetRuleContext(0, ControlErrSpecContext);
    };
    BerFinishItemContext.prototype.controlIostat = function () {
        return this.tryGetRuleContext(0, ControlIostatContext);
    };
    BerFinishItemContext.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    Object.defineProperty(BerFinishItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_berFinishItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BerFinishItemContext.prototype.enterRule = function (listener) {
        if (listener.enterBerFinishItem) {
            listener.enterBerFinishItem(this);
        }
    };
    // @Override
    BerFinishItemContext.prototype.exitRule = function (listener) {
        if (listener.exitBerFinishItem) {
            listener.exitBerFinishItem(this);
        }
    };
    // @Override
    BerFinishItemContext.prototype.accept = function (visitor) {
        if (visitor.visitBerFinishItem) {
            return visitor.visitBerFinishItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BerFinishItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BerFinishItemContext = BerFinishItemContext;
var UnitIdentifierContext = /** @class */ (function (_super) {
    __extends(UnitIdentifierContext, _super);
    function UnitIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnitIdentifierContext.prototype.iexpr = function () {
        return this.tryGetRuleContext(0, IexprContext);
    };
    UnitIdentifierContext.prototype.STAR = function () { return this.tryGetToken(Fortran77Parser.STAR, 0); };
    Object.defineProperty(UnitIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_unitIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnitIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterUnitIdentifier) {
            listener.enterUnitIdentifier(this);
        }
    };
    // @Override
    UnitIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitUnitIdentifier) {
            listener.exitUnitIdentifier(this);
        }
    };
    // @Override
    UnitIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitUnitIdentifier) {
            return visitor.visitUnitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnitIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnitIdentifierContext = UnitIdentifierContext;
var FormatIdentifierContext = /** @class */ (function (_super) {
    __extends(FormatIdentifierContext, _super);
    function FormatIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormatIdentifierContext.prototype.SCON = function () { return this.tryGetToken(Fortran77Parser.SCON, 0); };
    FormatIdentifierContext.prototype.HOLLERITH = function () { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); };
    FormatIdentifierContext.prototype.iexpr = function () {
        return this.tryGetRuleContext(0, IexprContext);
    };
    FormatIdentifierContext.prototype.STAR = function () { return this.tryGetToken(Fortran77Parser.STAR, 0); };
    Object.defineProperty(FormatIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_formatIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormatIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterFormatIdentifier) {
            listener.enterFormatIdentifier(this);
        }
    };
    // @Override
    FormatIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitFormatIdentifier) {
            listener.exitFormatIdentifier(this);
        }
    };
    // @Override
    FormatIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitFormatIdentifier) {
            return visitor.visitFormatIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormatIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormatIdentifierContext = FormatIdentifierContext;
var FormatStatementContext = /** @class */ (function (_super) {
    __extends(FormatStatementContext, _super);
    function FormatStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormatStatementContext.prototype.FORMAT = function () { return this.getToken(Fortran77Parser.FORMAT, 0); };
    FormatStatementContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    FormatStatementContext.prototype.fmtSpec = function () {
        return this.getRuleContext(0, FmtSpecContext);
    };
    FormatStatementContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(FormatStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_formatStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormatStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterFormatStatement) {
            listener.enterFormatStatement(this);
        }
    };
    // @Override
    FormatStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitFormatStatement) {
            listener.exitFormatStatement(this);
        }
    };
    // @Override
    FormatStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitFormatStatement) {
            return visitor.visitFormatStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormatStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormatStatementContext = FormatStatementContext;
var FmtSpecContext = /** @class */ (function (_super) {
    __extends(FmtSpecContext, _super);
    function FmtSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FmtSpecContext.prototype.formatedit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormateditContext);
        }
        else {
            return this.getRuleContext(i, FormateditContext);
        }
    };
    FmtSpecContext.prototype.formatsep = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormatsepContext);
        }
        else {
            return this.getRuleContext(i, FormatsepContext);
        }
    };
    FmtSpecContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(FmtSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_fmtSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FmtSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterFmtSpec) {
            listener.enterFmtSpec(this);
        }
    };
    // @Override
    FmtSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitFmtSpec) {
            listener.exitFmtSpec(this);
        }
    };
    // @Override
    FmtSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitFmtSpec) {
            return visitor.visitFmtSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FmtSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FmtSpecContext = FmtSpecContext;
var FormatsepContext = /** @class */ (function (_super) {
    __extends(FormatsepContext, _super);
    function FormatsepContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormatsepContext.prototype.DIV = function () { return this.tryGetToken(Fortran77Parser.DIV, 0); };
    FormatsepContext.prototype.COLON = function () { return this.tryGetToken(Fortran77Parser.COLON, 0); };
    FormatsepContext.prototype.DOLLAR = function () { return this.tryGetToken(Fortran77Parser.DOLLAR, 0); };
    Object.defineProperty(FormatsepContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_formatsep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormatsepContext.prototype.enterRule = function (listener) {
        if (listener.enterFormatsep) {
            listener.enterFormatsep(this);
        }
    };
    // @Override
    FormatsepContext.prototype.exitRule = function (listener) {
        if (listener.exitFormatsep) {
            listener.exitFormatsep(this);
        }
    };
    // @Override
    FormatsepContext.prototype.accept = function (visitor) {
        if (visitor.visitFormatsep) {
            return visitor.visitFormatsep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormatsepContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormatsepContext = FormatsepContext;
var FormateditContext = /** @class */ (function (_super) {
    __extends(FormateditContext, _super);
    function FormateditContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormateditContext.prototype.XCON = function () { return this.tryGetToken(Fortran77Parser.XCON, 0); };
    FormateditContext.prototype.editElement = function () {
        return this.tryGetRuleContext(0, EditElementContext);
    };
    FormateditContext.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    FormateditContext.prototype.PCON = function () { return this.tryGetToken(Fortran77Parser.PCON, 0); };
    FormateditContext.prototype.PLUS = function () { return this.tryGetToken(Fortran77Parser.PLUS, 0); };
    FormateditContext.prototype.MINUS = function () { return this.tryGetToken(Fortran77Parser.MINUS, 0); };
    Object.defineProperty(FormateditContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_formatedit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormateditContext.prototype.enterRule = function (listener) {
        if (listener.enterFormatedit) {
            listener.enterFormatedit(this);
        }
    };
    // @Override
    FormateditContext.prototype.exitRule = function (listener) {
        if (listener.exitFormatedit) {
            listener.exitFormatedit(this);
        }
    };
    // @Override
    FormateditContext.prototype.accept = function (visitor) {
        if (visitor.visitFormatedit) {
            return visitor.visitFormatedit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormateditContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormateditContext = FormateditContext;
var EditElementContext = /** @class */ (function (_super) {
    __extends(EditElementContext, _super);
    function EditElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EditElementContext.prototype.FCON = function () { return this.tryGetToken(Fortran77Parser.FCON, 0); };
    EditElementContext.prototype.SCON = function () { return this.tryGetToken(Fortran77Parser.SCON, 0); };
    EditElementContext.prototype.HOLLERITH = function () { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); };
    EditElementContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    EditElementContext.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    EditElementContext.prototype.fmtSpec = function () {
        return this.tryGetRuleContext(0, FmtSpecContext);
    };
    EditElementContext.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(EditElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_editElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EditElementContext.prototype.enterRule = function (listener) {
        if (listener.enterEditElement) {
            listener.enterEditElement(this);
        }
    };
    // @Override
    EditElementContext.prototype.exitRule = function (listener) {
        if (listener.exitEditElement) {
            listener.exitEditElement(this);
        }
    };
    // @Override
    EditElementContext.prototype.accept = function (visitor) {
        if (visitor.visitEditElement) {
            return visitor.visitEditElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EditElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EditElementContext = EditElementContext;
var StatementFunctionStatementContext = /** @class */ (function (_super) {
    __extends(StatementFunctionStatementContext, _super);
    function StatementFunctionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementFunctionStatementContext.prototype.LET = function () { return this.getToken(Fortran77Parser.LET, 0); };
    StatementFunctionStatementContext.prototype.sfArgs = function () {
        return this.getRuleContext(0, SfArgsContext);
    };
    StatementFunctionStatementContext.prototype.ASSIGN = function () { return this.getToken(Fortran77Parser.ASSIGN, 0); };
    StatementFunctionStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(StatementFunctionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_statementFunctionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementFunctionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementFunctionStatement) {
            listener.enterStatementFunctionStatement(this);
        }
    };
    // @Override
    StatementFunctionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementFunctionStatement) {
            listener.exitStatementFunctionStatement(this);
        }
    };
    // @Override
    StatementFunctionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementFunctionStatement) {
            return visitor.visitStatementFunctionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementFunctionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementFunctionStatementContext = StatementFunctionStatementContext;
var SfArgsContext = /** @class */ (function (_super) {
    __extends(SfArgsContext, _super);
    function SfArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SfArgsContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    SfArgsContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    SfArgsContext.prototype.namelist = function () {
        return this.getRuleContext(0, NamelistContext);
    };
    SfArgsContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(SfArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_sfArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SfArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterSfArgs) {
            listener.enterSfArgs(this);
        }
    };
    // @Override
    SfArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitSfArgs) {
            listener.exitSfArgs(this);
        }
    };
    // @Override
    SfArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitSfArgs) {
            return visitor.visitSfArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SfArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SfArgsContext = SfArgsContext;
var CallStatementContext = /** @class */ (function (_super) {
    __extends(CallStatementContext, _super);
    function CallStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallStatementContext.prototype.CALL = function () { return this.getToken(Fortran77Parser.CALL, 0); };
    CallStatementContext.prototype.subroutineCall = function () {
        return this.getRuleContext(0, SubroutineCallContext);
    };
    Object.defineProperty(CallStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_callStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCallStatement) {
            listener.enterCallStatement(this);
        }
    };
    // @Override
    CallStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCallStatement) {
            listener.exitCallStatement(this);
        }
    };
    // @Override
    CallStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCallStatement) {
            return visitor.visitCallStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallStatementContext = CallStatementContext;
var SubroutineCallContext = /** @class */ (function (_super) {
    __extends(SubroutineCallContext, _super);
    function SubroutineCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubroutineCallContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    SubroutineCallContext.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    SubroutineCallContext.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    SubroutineCallContext.prototype.callArgumentList = function () {
        return this.tryGetRuleContext(0, CallArgumentListContext);
    };
    Object.defineProperty(SubroutineCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_subroutineCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubroutineCallContext.prototype.enterRule = function (listener) {
        if (listener.enterSubroutineCall) {
            listener.enterSubroutineCall(this);
        }
    };
    // @Override
    SubroutineCallContext.prototype.exitRule = function (listener) {
        if (listener.exitSubroutineCall) {
            listener.exitSubroutineCall(this);
        }
    };
    // @Override
    SubroutineCallContext.prototype.accept = function (visitor) {
        if (visitor.visitSubroutineCall) {
            return visitor.visitSubroutineCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubroutineCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubroutineCallContext = SubroutineCallContext;
var CallArgumentListContext = /** @class */ (function (_super) {
    __extends(CallArgumentListContext, _super);
    function CallArgumentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallArgumentListContext.prototype.callArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CallArgumentContext);
        }
        else {
            return this.getRuleContext(i, CallArgumentContext);
        }
    };
    CallArgumentListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(CallArgumentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_callArgumentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallArgumentListContext.prototype.enterRule = function (listener) {
        if (listener.enterCallArgumentList) {
            listener.enterCallArgumentList(this);
        }
    };
    // @Override
    CallArgumentListContext.prototype.exitRule = function (listener) {
        if (listener.exitCallArgumentList) {
            listener.exitCallArgumentList(this);
        }
    };
    // @Override
    CallArgumentListContext.prototype.accept = function (visitor) {
        if (visitor.visitCallArgumentList) {
            return visitor.visitCallArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallArgumentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallArgumentListContext = CallArgumentListContext;
var CallArgumentContext = /** @class */ (function (_super) {
    __extends(CallArgumentContext, _super);
    function CallArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallArgumentContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    CallArgumentContext.prototype.STAR = function () { return this.tryGetToken(Fortran77Parser.STAR, 0); };
    CallArgumentContext.prototype.lblRef = function () {
        return this.tryGetRuleContext(0, LblRefContext);
    };
    Object.defineProperty(CallArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_callArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterCallArgument) {
            listener.enterCallArgument(this);
        }
    };
    // @Override
    CallArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitCallArgument) {
            listener.exitCallArgument(this);
        }
    };
    // @Override
    CallArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitCallArgument) {
            return visitor.visitCallArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallArgumentContext = CallArgumentContext;
var ReturnStatementContext = /** @class */ (function (_super) {
    __extends(ReturnStatementContext, _super);
    function ReturnStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStatementContext.prototype.RETURN = function () { return this.getToken(Fortran77Parser.RETURN, 0); };
    ReturnStatementContext.prototype.integerExpr = function () {
        return this.tryGetRuleContext(0, IntegerExprContext);
    };
    Object.defineProperty(ReturnStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_returnStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStatementContext = ReturnStatementContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.ncExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NcExprContext);
        }
        else {
            return this.getRuleContext(i, NcExprContext);
        }
    };
    ExpressionContext.prototype.COLON = function () { return this.tryGetToken(Fortran77Parser.COLON, 0); };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_expression; },
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
var NcExprContext = /** @class */ (function (_super) {
    __extends(NcExprContext, _super);
    function NcExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NcExprContext.prototype.lexpr0 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Lexpr0Context);
        }
        else {
            return this.getRuleContext(i, Lexpr0Context);
        }
    };
    NcExprContext.prototype.concatOp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConcatOpContext);
        }
        else {
            return this.getRuleContext(i, ConcatOpContext);
        }
    };
    Object.defineProperty(NcExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_ncExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NcExprContext.prototype.enterRule = function (listener) {
        if (listener.enterNcExpr) {
            listener.enterNcExpr(this);
        }
    };
    // @Override
    NcExprContext.prototype.exitRule = function (listener) {
        if (listener.exitNcExpr) {
            listener.exitNcExpr(this);
        }
    };
    // @Override
    NcExprContext.prototype.accept = function (visitor) {
        if (visitor.visitNcExpr) {
            return visitor.visitNcExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NcExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NcExprContext = NcExprContext;
var Lexpr0Context = /** @class */ (function (_super) {
    __extends(Lexpr0Context, _super);
    function Lexpr0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lexpr0Context.prototype.lexpr1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Lexpr1Context);
        }
        else {
            return this.getRuleContext(i, Lexpr1Context);
        }
    };
    Lexpr0Context.prototype.NEQV = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.NEQV);
        }
        else {
            return this.getToken(Fortran77Parser.NEQV, i);
        }
    };
    Lexpr0Context.prototype.EQV = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.EQV);
        }
        else {
            return this.getToken(Fortran77Parser.EQV, i);
        }
    };
    Object.defineProperty(Lexpr0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_lexpr0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lexpr0Context.prototype.enterRule = function (listener) {
        if (listener.enterLexpr0) {
            listener.enterLexpr0(this);
        }
    };
    // @Override
    Lexpr0Context.prototype.exitRule = function (listener) {
        if (listener.exitLexpr0) {
            listener.exitLexpr0(this);
        }
    };
    // @Override
    Lexpr0Context.prototype.accept = function (visitor) {
        if (visitor.visitLexpr0) {
            return visitor.visitLexpr0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lexpr0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lexpr0Context = Lexpr0Context;
var Lexpr1Context = /** @class */ (function (_super) {
    __extends(Lexpr1Context, _super);
    function Lexpr1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lexpr1Context.prototype.lexpr2 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Lexpr2Context);
        }
        else {
            return this.getRuleContext(i, Lexpr2Context);
        }
    };
    Lexpr1Context.prototype.LOR = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.LOR);
        }
        else {
            return this.getToken(Fortran77Parser.LOR, i);
        }
    };
    Object.defineProperty(Lexpr1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_lexpr1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lexpr1Context.prototype.enterRule = function (listener) {
        if (listener.enterLexpr1) {
            listener.enterLexpr1(this);
        }
    };
    // @Override
    Lexpr1Context.prototype.exitRule = function (listener) {
        if (listener.exitLexpr1) {
            listener.exitLexpr1(this);
        }
    };
    // @Override
    Lexpr1Context.prototype.accept = function (visitor) {
        if (visitor.visitLexpr1) {
            return visitor.visitLexpr1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lexpr1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lexpr1Context = Lexpr1Context;
var Lexpr2Context = /** @class */ (function (_super) {
    __extends(Lexpr2Context, _super);
    function Lexpr2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lexpr2Context.prototype.lexpr3 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Lexpr3Context);
        }
        else {
            return this.getRuleContext(i, Lexpr3Context);
        }
    };
    Lexpr2Context.prototype.LAND = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.LAND);
        }
        else {
            return this.getToken(Fortran77Parser.LAND, i);
        }
    };
    Object.defineProperty(Lexpr2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_lexpr2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lexpr2Context.prototype.enterRule = function (listener) {
        if (listener.enterLexpr2) {
            listener.enterLexpr2(this);
        }
    };
    // @Override
    Lexpr2Context.prototype.exitRule = function (listener) {
        if (listener.exitLexpr2) {
            listener.exitLexpr2(this);
        }
    };
    // @Override
    Lexpr2Context.prototype.accept = function (visitor) {
        if (visitor.visitLexpr2) {
            return visitor.visitLexpr2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lexpr2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lexpr2Context = Lexpr2Context;
var Lexpr3Context = /** @class */ (function (_super) {
    __extends(Lexpr3Context, _super);
    function Lexpr3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lexpr3Context.prototype.LNOT = function () { return this.tryGetToken(Fortran77Parser.LNOT, 0); };
    Lexpr3Context.prototype.lexpr3 = function () {
        return this.tryGetRuleContext(0, Lexpr3Context);
    };
    Lexpr3Context.prototype.lexpr4 = function () {
        return this.tryGetRuleContext(0, Lexpr4Context);
    };
    Object.defineProperty(Lexpr3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_lexpr3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lexpr3Context.prototype.enterRule = function (listener) {
        if (listener.enterLexpr3) {
            listener.enterLexpr3(this);
        }
    };
    // @Override
    Lexpr3Context.prototype.exitRule = function (listener) {
        if (listener.exitLexpr3) {
            listener.exitLexpr3(this);
        }
    };
    // @Override
    Lexpr3Context.prototype.accept = function (visitor) {
        if (visitor.visitLexpr3) {
            return visitor.visitLexpr3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lexpr3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lexpr3Context = Lexpr3Context;
var Lexpr4Context = /** @class */ (function (_super) {
    __extends(Lexpr4Context, _super);
    function Lexpr4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lexpr4Context.prototype.aexpr0 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Aexpr0Context);
        }
        else {
            return this.getRuleContext(i, Aexpr0Context);
        }
    };
    Lexpr4Context.prototype.LT = function () { return this.tryGetToken(Fortran77Parser.LT, 0); };
    Lexpr4Context.prototype.LE = function () { return this.tryGetToken(Fortran77Parser.LE, 0); };
    Lexpr4Context.prototype.EQ = function () { return this.tryGetToken(Fortran77Parser.EQ, 0); };
    Lexpr4Context.prototype.NE = function () { return this.tryGetToken(Fortran77Parser.NE, 0); };
    Lexpr4Context.prototype.GT = function () { return this.tryGetToken(Fortran77Parser.GT, 0); };
    Lexpr4Context.prototype.GE = function () { return this.tryGetToken(Fortran77Parser.GE, 0); };
    Object.defineProperty(Lexpr4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_lexpr4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lexpr4Context.prototype.enterRule = function (listener) {
        if (listener.enterLexpr4) {
            listener.enterLexpr4(this);
        }
    };
    // @Override
    Lexpr4Context.prototype.exitRule = function (listener) {
        if (listener.exitLexpr4) {
            listener.exitLexpr4(this);
        }
    };
    // @Override
    Lexpr4Context.prototype.accept = function (visitor) {
        if (visitor.visitLexpr4) {
            return visitor.visitLexpr4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lexpr4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lexpr4Context = Lexpr4Context;
var Aexpr0Context = /** @class */ (function (_super) {
    __extends(Aexpr0Context, _super);
    function Aexpr0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Aexpr0Context.prototype.aexpr1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Aexpr1Context);
        }
        else {
            return this.getRuleContext(i, Aexpr1Context);
        }
    };
    Aexpr0Context.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.PLUS);
        }
        else {
            return this.getToken(Fortran77Parser.PLUS, i);
        }
    };
    Aexpr0Context.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.MINUS);
        }
        else {
            return this.getToken(Fortran77Parser.MINUS, i);
        }
    };
    Object.defineProperty(Aexpr0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_aexpr0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Aexpr0Context.prototype.enterRule = function (listener) {
        if (listener.enterAexpr0) {
            listener.enterAexpr0(this);
        }
    };
    // @Override
    Aexpr0Context.prototype.exitRule = function (listener) {
        if (listener.exitAexpr0) {
            listener.exitAexpr0(this);
        }
    };
    // @Override
    Aexpr0Context.prototype.accept = function (visitor) {
        if (visitor.visitAexpr0) {
            return visitor.visitAexpr0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Aexpr0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Aexpr0Context = Aexpr0Context;
var Aexpr1Context = /** @class */ (function (_super) {
    __extends(Aexpr1Context, _super);
    function Aexpr1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Aexpr1Context.prototype.aexpr2 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Aexpr2Context);
        }
        else {
            return this.getRuleContext(i, Aexpr2Context);
        }
    };
    Aexpr1Context.prototype.STAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.STAR);
        }
        else {
            return this.getToken(Fortran77Parser.STAR, i);
        }
    };
    Aexpr1Context.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.DIV);
        }
        else {
            return this.getToken(Fortran77Parser.DIV, i);
        }
    };
    Object.defineProperty(Aexpr1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_aexpr1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Aexpr1Context.prototype.enterRule = function (listener) {
        if (listener.enterAexpr1) {
            listener.enterAexpr1(this);
        }
    };
    // @Override
    Aexpr1Context.prototype.exitRule = function (listener) {
        if (listener.exitAexpr1) {
            listener.exitAexpr1(this);
        }
    };
    // @Override
    Aexpr1Context.prototype.accept = function (visitor) {
        if (visitor.visitAexpr1) {
            return visitor.visitAexpr1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Aexpr1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Aexpr1Context = Aexpr1Context;
var Aexpr2Context = /** @class */ (function (_super) {
    __extends(Aexpr2Context, _super);
    function Aexpr2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Aexpr2Context.prototype.aexpr3 = function () {
        return this.getRuleContext(0, Aexpr3Context);
    };
    Aexpr2Context.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.PLUS);
        }
        else {
            return this.getToken(Fortran77Parser.PLUS, i);
        }
    };
    Aexpr2Context.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.MINUS);
        }
        else {
            return this.getToken(Fortran77Parser.MINUS, i);
        }
    };
    Object.defineProperty(Aexpr2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_aexpr2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Aexpr2Context.prototype.enterRule = function (listener) {
        if (listener.enterAexpr2) {
            listener.enterAexpr2(this);
        }
    };
    // @Override
    Aexpr2Context.prototype.exitRule = function (listener) {
        if (listener.exitAexpr2) {
            listener.exitAexpr2(this);
        }
    };
    // @Override
    Aexpr2Context.prototype.accept = function (visitor) {
        if (visitor.visitAexpr2) {
            return visitor.visitAexpr2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Aexpr2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Aexpr2Context = Aexpr2Context;
var Aexpr3Context = /** @class */ (function (_super) {
    __extends(Aexpr3Context, _super);
    function Aexpr3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Aexpr3Context.prototype.aexpr4 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Aexpr4Context);
        }
        else {
            return this.getRuleContext(i, Aexpr4Context);
        }
    };
    Aexpr3Context.prototype.POWER = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.POWER);
        }
        else {
            return this.getToken(Fortran77Parser.POWER, i);
        }
    };
    Object.defineProperty(Aexpr3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_aexpr3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Aexpr3Context.prototype.enterRule = function (listener) {
        if (listener.enterAexpr3) {
            listener.enterAexpr3(this);
        }
    };
    // @Override
    Aexpr3Context.prototype.exitRule = function (listener) {
        if (listener.exitAexpr3) {
            listener.exitAexpr3(this);
        }
    };
    // @Override
    Aexpr3Context.prototype.accept = function (visitor) {
        if (visitor.visitAexpr3) {
            return visitor.visitAexpr3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Aexpr3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Aexpr3Context = Aexpr3Context;
var Aexpr4Context = /** @class */ (function (_super) {
    __extends(Aexpr4Context, _super);
    function Aexpr4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Aexpr4Context.prototype.unsignedArithmeticConstant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnsignedArithmeticConstantContext);
        }
        else {
            return this.getRuleContext(i, UnsignedArithmeticConstantContext);
        }
    };
    Aexpr4Context.prototype.HOLLERITH = function () { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); };
    Aexpr4Context.prototype.SCON = function () { return this.tryGetToken(Fortran77Parser.SCON, 0); };
    Aexpr4Context.prototype.logicalConstant = function () {
        return this.tryGetRuleContext(0, LogicalConstantContext);
    };
    Aexpr4Context.prototype.varRef = function () {
        return this.tryGetRuleContext(0, VarRefContext);
    };
    Aexpr4Context.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    Aexpr4Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Aexpr4Context.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(Aexpr4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_aexpr4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Aexpr4Context.prototype.enterRule = function (listener) {
        if (listener.enterAexpr4) {
            listener.enterAexpr4(this);
        }
    };
    // @Override
    Aexpr4Context.prototype.exitRule = function (listener) {
        if (listener.exitAexpr4) {
            listener.exitAexpr4(this);
        }
    };
    // @Override
    Aexpr4Context.prototype.accept = function (visitor) {
        if (visitor.visitAexpr4) {
            return visitor.visitAexpr4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Aexpr4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Aexpr4Context = Aexpr4Context;
var IexprContext = /** @class */ (function (_super) {
    __extends(IexprContext, _super);
    function IexprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IexprContext.prototype.iexpr1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Iexpr1Context);
        }
        else {
            return this.getRuleContext(i, Iexpr1Context);
        }
    };
    IexprContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.PLUS);
        }
        else {
            return this.getToken(Fortran77Parser.PLUS, i);
        }
    };
    IexprContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.MINUS);
        }
        else {
            return this.getToken(Fortran77Parser.MINUS, i);
        }
    };
    Object.defineProperty(IexprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_iexpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IexprContext.prototype.enterRule = function (listener) {
        if (listener.enterIexpr) {
            listener.enterIexpr(this);
        }
    };
    // @Override
    IexprContext.prototype.exitRule = function (listener) {
        if (listener.exitIexpr) {
            listener.exitIexpr(this);
        }
    };
    // @Override
    IexprContext.prototype.accept = function (visitor) {
        if (visitor.visitIexpr) {
            return visitor.visitIexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IexprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IexprContext = IexprContext;
var IexprCodeContext = /** @class */ (function (_super) {
    __extends(IexprCodeContext, _super);
    function IexprCodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IexprCodeContext.prototype.iexpr1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Iexpr1Context);
        }
        else {
            return this.getRuleContext(i, Iexpr1Context);
        }
    };
    IexprCodeContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.PLUS);
        }
        else {
            return this.getToken(Fortran77Parser.PLUS, i);
        }
    };
    IexprCodeContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.MINUS);
        }
        else {
            return this.getToken(Fortran77Parser.MINUS, i);
        }
    };
    Object.defineProperty(IexprCodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_iexprCode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IexprCodeContext.prototype.enterRule = function (listener) {
        if (listener.enterIexprCode) {
            listener.enterIexprCode(this);
        }
    };
    // @Override
    IexprCodeContext.prototype.exitRule = function (listener) {
        if (listener.exitIexprCode) {
            listener.exitIexprCode(this);
        }
    };
    // @Override
    IexprCodeContext.prototype.accept = function (visitor) {
        if (visitor.visitIexprCode) {
            return visitor.visitIexprCode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IexprCodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IexprCodeContext = IexprCodeContext;
var Iexpr1Context = /** @class */ (function (_super) {
    __extends(Iexpr1Context, _super);
    function Iexpr1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Iexpr1Context.prototype.iexpr2 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Iexpr2Context);
        }
        else {
            return this.getRuleContext(i, Iexpr2Context);
        }
    };
    Iexpr1Context.prototype.STAR = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.STAR);
        }
        else {
            return this.getToken(Fortran77Parser.STAR, i);
        }
    };
    Iexpr1Context.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.DIV);
        }
        else {
            return this.getToken(Fortran77Parser.DIV, i);
        }
    };
    Object.defineProperty(Iexpr1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_iexpr1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Iexpr1Context.prototype.enterRule = function (listener) {
        if (listener.enterIexpr1) {
            listener.enterIexpr1(this);
        }
    };
    // @Override
    Iexpr1Context.prototype.exitRule = function (listener) {
        if (listener.exitIexpr1) {
            listener.exitIexpr1(this);
        }
    };
    // @Override
    Iexpr1Context.prototype.accept = function (visitor) {
        if (visitor.visitIexpr1) {
            return visitor.visitIexpr1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Iexpr1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Iexpr1Context = Iexpr1Context;
var Iexpr2Context = /** @class */ (function (_super) {
    __extends(Iexpr2Context, _super);
    function Iexpr2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Iexpr2Context.prototype.iexpr3 = function () {
        return this.getRuleContext(0, Iexpr3Context);
    };
    Iexpr2Context.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.PLUS);
        }
        else {
            return this.getToken(Fortran77Parser.PLUS, i);
        }
    };
    Iexpr2Context.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.MINUS);
        }
        else {
            return this.getToken(Fortran77Parser.MINUS, i);
        }
    };
    Object.defineProperty(Iexpr2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_iexpr2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Iexpr2Context.prototype.enterRule = function (listener) {
        if (listener.enterIexpr2) {
            listener.enterIexpr2(this);
        }
    };
    // @Override
    Iexpr2Context.prototype.exitRule = function (listener) {
        if (listener.exitIexpr2) {
            listener.exitIexpr2(this);
        }
    };
    // @Override
    Iexpr2Context.prototype.accept = function (visitor) {
        if (visitor.visitIexpr2) {
            return visitor.visitIexpr2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Iexpr2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Iexpr2Context = Iexpr2Context;
var Iexpr3Context = /** @class */ (function (_super) {
    __extends(Iexpr3Context, _super);
    function Iexpr3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Iexpr3Context.prototype.iexpr4 = function () {
        return this.getRuleContext(0, Iexpr4Context);
    };
    Iexpr3Context.prototype.POWER = function () { return this.tryGetToken(Fortran77Parser.POWER, 0); };
    Iexpr3Context.prototype.iexpr3 = function () {
        return this.tryGetRuleContext(0, Iexpr3Context);
    };
    Object.defineProperty(Iexpr3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_iexpr3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Iexpr3Context.prototype.enterRule = function (listener) {
        if (listener.enterIexpr3) {
            listener.enterIexpr3(this);
        }
    };
    // @Override
    Iexpr3Context.prototype.exitRule = function (listener) {
        if (listener.exitIexpr3) {
            listener.exitIexpr3(this);
        }
    };
    // @Override
    Iexpr3Context.prototype.accept = function (visitor) {
        if (visitor.visitIexpr3) {
            return visitor.visitIexpr3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Iexpr3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Iexpr3Context = Iexpr3Context;
var Iexpr4Context = /** @class */ (function (_super) {
    __extends(Iexpr4Context, _super);
    function Iexpr4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Iexpr4Context.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    Iexpr4Context.prototype.varRefCode = function () {
        return this.tryGetRuleContext(0, VarRefCodeContext);
    };
    Iexpr4Context.prototype.LPAREN = function () { return this.tryGetToken(Fortran77Parser.LPAREN, 0); };
    Iexpr4Context.prototype.iexprCode = function () {
        return this.tryGetRuleContext(0, IexprCodeContext);
    };
    Iexpr4Context.prototype.RPAREN = function () { return this.tryGetToken(Fortran77Parser.RPAREN, 0); };
    Object.defineProperty(Iexpr4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_iexpr4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Iexpr4Context.prototype.enterRule = function (listener) {
        if (listener.enterIexpr4) {
            listener.enterIexpr4(this);
        }
    };
    // @Override
    Iexpr4Context.prototype.exitRule = function (listener) {
        if (listener.exitIexpr4) {
            listener.exitIexpr4(this);
        }
    };
    // @Override
    Iexpr4Context.prototype.accept = function (visitor) {
        if (visitor.visitIexpr4) {
            return visitor.visitIexpr4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Iexpr4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Iexpr4Context = Iexpr4Context;
var ConstantExprContext = /** @class */ (function (_super) {
    __extends(ConstantExprContext, _super);
    function ConstantExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantExprContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ConstantExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_constantExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantExprContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantExpr) {
            listener.enterConstantExpr(this);
        }
    };
    // @Override
    ConstantExprContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantExpr) {
            listener.exitConstantExpr(this);
        }
    };
    // @Override
    ConstantExprContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantExpr) {
            return visitor.visitConstantExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantExprContext = ConstantExprContext;
var ArithmeticExpressionContext = /** @class */ (function (_super) {
    __extends(ArithmeticExpressionContext, _super);
    function ArithmeticExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArithmeticExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ArithmeticExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arithmeticExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArithmeticExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmeticExpression) {
            listener.enterArithmeticExpression(this);
        }
    };
    // @Override
    ArithmeticExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmeticExpression) {
            listener.exitArithmeticExpression(this);
        }
    };
    // @Override
    ArithmeticExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmeticExpression) {
            return visitor.visitArithmeticExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArithmeticExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArithmeticExpressionContext = ArithmeticExpressionContext;
var IntegerExprContext = /** @class */ (function (_super) {
    __extends(IntegerExprContext, _super);
    function IntegerExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerExprContext.prototype.iexpr = function () {
        return this.getRuleContext(0, IexprContext);
    };
    Object.defineProperty(IntegerExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_integerExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerExprContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerExpr) {
            listener.enterIntegerExpr(this);
        }
    };
    // @Override
    IntegerExprContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerExpr) {
            listener.exitIntegerExpr(this);
        }
    };
    // @Override
    IntegerExprContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerExpr) {
            return visitor.visitIntegerExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerExprContext = IntegerExprContext;
var IntRealDpExprContext = /** @class */ (function (_super) {
    __extends(IntRealDpExprContext, _super);
    function IntRealDpExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntRealDpExprContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(IntRealDpExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_intRealDpExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntRealDpExprContext.prototype.enterRule = function (listener) {
        if (listener.enterIntRealDpExpr) {
            listener.enterIntRealDpExpr(this);
        }
    };
    // @Override
    IntRealDpExprContext.prototype.exitRule = function (listener) {
        if (listener.exitIntRealDpExpr) {
            listener.exitIntRealDpExpr(this);
        }
    };
    // @Override
    IntRealDpExprContext.prototype.accept = function (visitor) {
        if (visitor.visitIntRealDpExpr) {
            return visitor.visitIntRealDpExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntRealDpExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntRealDpExprContext = IntRealDpExprContext;
var ArithmeticConstExprContext = /** @class */ (function (_super) {
    __extends(ArithmeticConstExprContext, _super);
    function ArithmeticConstExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArithmeticConstExprContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ArithmeticConstExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arithmeticConstExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArithmeticConstExprContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmeticConstExpr) {
            listener.enterArithmeticConstExpr(this);
        }
    };
    // @Override
    ArithmeticConstExprContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmeticConstExpr) {
            listener.exitArithmeticConstExpr(this);
        }
    };
    // @Override
    ArithmeticConstExprContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmeticConstExpr) {
            return visitor.visitArithmeticConstExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArithmeticConstExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArithmeticConstExprContext = ArithmeticConstExprContext;
var IntConstantExprContext = /** @class */ (function (_super) {
    __extends(IntConstantExprContext, _super);
    function IntConstantExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntConstantExprContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(IntConstantExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_intConstantExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntConstantExprContext.prototype.enterRule = function (listener) {
        if (listener.enterIntConstantExpr) {
            listener.enterIntConstantExpr(this);
        }
    };
    // @Override
    IntConstantExprContext.prototype.exitRule = function (listener) {
        if (listener.exitIntConstantExpr) {
            listener.exitIntConstantExpr(this);
        }
    };
    // @Override
    IntConstantExprContext.prototype.accept = function (visitor) {
        if (visitor.visitIntConstantExpr) {
            return visitor.visitIntConstantExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntConstantExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntConstantExprContext = IntConstantExprContext;
var CharacterExpressionContext = /** @class */ (function (_super) {
    __extends(CharacterExpressionContext, _super);
    function CharacterExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharacterExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(CharacterExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_characterExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharacterExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCharacterExpression) {
            listener.enterCharacterExpression(this);
        }
    };
    // @Override
    CharacterExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCharacterExpression) {
            listener.exitCharacterExpression(this);
        }
    };
    // @Override
    CharacterExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCharacterExpression) {
            return visitor.visitCharacterExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharacterExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharacterExpressionContext = CharacterExpressionContext;
var ConcatOpContext = /** @class */ (function (_super) {
    __extends(ConcatOpContext, _super);
    function ConcatOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConcatOpContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.DIV);
        }
        else {
            return this.getToken(Fortran77Parser.DIV, i);
        }
    };
    Object.defineProperty(ConcatOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_concatOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConcatOpContext.prototype.enterRule = function (listener) {
        if (listener.enterConcatOp) {
            listener.enterConcatOp(this);
        }
    };
    // @Override
    ConcatOpContext.prototype.exitRule = function (listener) {
        if (listener.exitConcatOp) {
            listener.exitConcatOp(this);
        }
    };
    // @Override
    ConcatOpContext.prototype.accept = function (visitor) {
        if (visitor.visitConcatOp) {
            return visitor.visitConcatOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConcatOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConcatOpContext = ConcatOpContext;
var LogicalExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalExpressionContext, _super);
    function LogicalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(LogicalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_logicalExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalExpression) {
            listener.enterLogicalExpression(this);
        }
    };
    // @Override
    LogicalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalExpression) {
            listener.exitLogicalExpression(this);
        }
    };
    // @Override
    LogicalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalExpression) {
            return visitor.visitLogicalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalExpressionContext = LogicalExpressionContext;
var LogicalConstExprContext = /** @class */ (function (_super) {
    __extends(LogicalConstExprContext, _super);
    function LogicalConstExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalConstExprContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(LogicalConstExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_logicalConstExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalConstExprContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalConstExpr) {
            listener.enterLogicalConstExpr(this);
        }
    };
    // @Override
    LogicalConstExprContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalConstExpr) {
            listener.exitLogicalConstExpr(this);
        }
    };
    // @Override
    LogicalConstExprContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalConstExpr) {
            return visitor.visitLogicalConstExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalConstExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalConstExprContext = LogicalConstExprContext;
var ArrayElementNameContext = /** @class */ (function (_super) {
    __extends(ArrayElementNameContext, _super);
    function ArrayElementNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayElementNameContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    ArrayElementNameContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    ArrayElementNameContext.prototype.integerExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntegerExprContext);
        }
        else {
            return this.getRuleContext(i, IntegerExprContext);
        }
    };
    ArrayElementNameContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    ArrayElementNameContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(ArrayElementNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arrayElementName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayElementNameContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayElementName) {
            listener.enterArrayElementName(this);
        }
    };
    // @Override
    ArrayElementNameContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayElementName) {
            listener.exitArrayElementName(this);
        }
    };
    // @Override
    ArrayElementNameContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayElementName) {
            return visitor.visitArrayElementName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayElementNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayElementNameContext = ArrayElementNameContext;
var SubscriptsContext = /** @class */ (function (_super) {
    __extends(SubscriptsContext, _super);
    function SubscriptsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubscriptsContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    SubscriptsContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    SubscriptsContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    SubscriptsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.COMMA);
        }
        else {
            return this.getToken(Fortran77Parser.COMMA, i);
        }
    };
    Object.defineProperty(SubscriptsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_subscripts; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubscriptsContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscripts) {
            listener.enterSubscripts(this);
        }
    };
    // @Override
    SubscriptsContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscripts) {
            listener.exitSubscripts(this);
        }
    };
    // @Override
    SubscriptsContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscripts) {
            return visitor.visitSubscripts(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubscriptsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubscriptsContext = SubscriptsContext;
var VarRefContext = /** @class */ (function (_super) {
    __extends(VarRefContext, _super);
    function VarRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarRefContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    VarRefContext.prototype.REAL = function () { return this.tryGetToken(Fortran77Parser.REAL, 0); };
    VarRefContext.prototype.subscripts = function () {
        return this.tryGetRuleContext(0, SubscriptsContext);
    };
    VarRefContext.prototype.substringApp = function () {
        return this.tryGetRuleContext(0, SubstringAppContext);
    };
    Object.defineProperty(VarRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_varRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarRefContext.prototype.enterRule = function (listener) {
        if (listener.enterVarRef) {
            listener.enterVarRef(this);
        }
    };
    // @Override
    VarRefContext.prototype.exitRule = function (listener) {
        if (listener.exitVarRef) {
            listener.exitVarRef(this);
        }
    };
    // @Override
    VarRefContext.prototype.accept = function (visitor) {
        if (visitor.visitVarRef) {
            return visitor.visitVarRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarRefContext = VarRefContext;
var VarRefCodeContext = /** @class */ (function (_super) {
    __extends(VarRefCodeContext, _super);
    function VarRefCodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarRefCodeContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    VarRefCodeContext.prototype.subscripts = function () {
        return this.tryGetRuleContext(0, SubscriptsContext);
    };
    VarRefCodeContext.prototype.substringApp = function () {
        return this.tryGetRuleContext(0, SubstringAppContext);
    };
    Object.defineProperty(VarRefCodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_varRefCode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarRefCodeContext.prototype.enterRule = function (listener) {
        if (listener.enterVarRefCode) {
            listener.enterVarRefCode(this);
        }
    };
    // @Override
    VarRefCodeContext.prototype.exitRule = function (listener) {
        if (listener.exitVarRefCode) {
            listener.exitVarRefCode(this);
        }
    };
    // @Override
    VarRefCodeContext.prototype.accept = function (visitor) {
        if (visitor.visitVarRefCode) {
            return visitor.visitVarRefCode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarRefCodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarRefCodeContext = VarRefCodeContext;
var SubstringAppContext = /** @class */ (function (_super) {
    __extends(SubstringAppContext, _super);
    function SubstringAppContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubstringAppContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    SubstringAppContext.prototype.COLON = function () { return this.getToken(Fortran77Parser.COLON, 0); };
    SubstringAppContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    SubstringAppContext.prototype.ncExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NcExprContext);
        }
        else {
            return this.getRuleContext(i, NcExprContext);
        }
    };
    Object.defineProperty(SubstringAppContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_substringApp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubstringAppContext.prototype.enterRule = function (listener) {
        if (listener.enterSubstringApp) {
            listener.enterSubstringApp(this);
        }
    };
    // @Override
    SubstringAppContext.prototype.exitRule = function (listener) {
        if (listener.exitSubstringApp) {
            listener.exitSubstringApp(this);
        }
    };
    // @Override
    SubstringAppContext.prototype.accept = function (visitor) {
        if (visitor.visitSubstringApp) {
            return visitor.visitSubstringApp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubstringAppContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubstringAppContext = SubstringAppContext;
var VariableNameContext = /** @class */ (function (_super) {
    __extends(VariableNameContext, _super);
    function VariableNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableNameContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(VariableNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_variableName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableNameContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableName) {
            listener.enterVariableName(this);
        }
    };
    // @Override
    VariableNameContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableName) {
            listener.exitVariableName(this);
        }
    };
    // @Override
    VariableNameContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableName) {
            return visitor.visitVariableName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableNameContext = VariableNameContext;
var ArrayNameContext = /** @class */ (function (_super) {
    __extends(ArrayNameContext, _super);
    function ArrayNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayNameContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(ArrayNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_arrayName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayNameContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayName) {
            listener.enterArrayName(this);
        }
    };
    // @Override
    ArrayNameContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayName) {
            listener.exitArrayName(this);
        }
    };
    // @Override
    ArrayNameContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayName) {
            return visitor.visitArrayName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayNameContext = ArrayNameContext;
var SubroutineNameContext = /** @class */ (function (_super) {
    __extends(SubroutineNameContext, _super);
    function SubroutineNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubroutineNameContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(SubroutineNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_subroutineName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubroutineNameContext.prototype.enterRule = function (listener) {
        if (listener.enterSubroutineName) {
            listener.enterSubroutineName(this);
        }
    };
    // @Override
    SubroutineNameContext.prototype.exitRule = function (listener) {
        if (listener.exitSubroutineName) {
            listener.exitSubroutineName(this);
        }
    };
    // @Override
    SubroutineNameContext.prototype.accept = function (visitor) {
        if (visitor.visitSubroutineName) {
            return visitor.visitSubroutineName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubroutineNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubroutineNameContext = SubroutineNameContext;
var FunctionNameContext = /** @class */ (function (_super) {
    __extends(FunctionNameContext, _super);
    function FunctionNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionNameContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(FunctionNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_functionName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionName) {
            listener.enterFunctionName(this);
        }
    };
    // @Override
    FunctionNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionName) {
            listener.exitFunctionName(this);
        }
    };
    // @Override
    FunctionNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionNameContext = FunctionNameContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.unsignedArithmeticConstant = function () {
        return this.tryGetRuleContext(0, UnsignedArithmeticConstantContext);
    };
    ConstantContext.prototype.PLUS = function () { return this.tryGetToken(Fortran77Parser.PLUS, 0); };
    ConstantContext.prototype.MINUS = function () { return this.tryGetToken(Fortran77Parser.MINUS, 0); };
    ConstantContext.prototype.SCON = function () { return this.tryGetToken(Fortran77Parser.SCON, 0); };
    ConstantContext.prototype.HOLLERITH = function () { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); };
    ConstantContext.prototype.logicalConstant = function () {
        return this.tryGetRuleContext(0, LogicalConstantContext);
    };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_constant; },
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
var UnsignedArithmeticConstantContext = /** @class */ (function (_super) {
    __extends(UnsignedArithmeticConstantContext, _super);
    function UnsignedArithmeticConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnsignedArithmeticConstantContext.prototype.ICON = function () { return this.tryGetToken(Fortran77Parser.ICON, 0); };
    UnsignedArithmeticConstantContext.prototype.RCON = function () { return this.tryGetToken(Fortran77Parser.RCON, 0); };
    UnsignedArithmeticConstantContext.prototype.complexConstant = function () {
        return this.tryGetRuleContext(0, ComplexConstantContext);
    };
    Object.defineProperty(UnsignedArithmeticConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_unsignedArithmeticConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnsignedArithmeticConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsignedArithmeticConstant) {
            listener.enterUnsignedArithmeticConstant(this);
        }
    };
    // @Override
    UnsignedArithmeticConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsignedArithmeticConstant) {
            listener.exitUnsignedArithmeticConstant(this);
        }
    };
    // @Override
    UnsignedArithmeticConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsignedArithmeticConstant) {
            return visitor.visitUnsignedArithmeticConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnsignedArithmeticConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnsignedArithmeticConstantContext = UnsignedArithmeticConstantContext;
var ComplexConstantContext = /** @class */ (function (_super) {
    __extends(ComplexConstantContext, _super);
    function ComplexConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComplexConstantContext.prototype.LPAREN = function () { return this.getToken(Fortran77Parser.LPAREN, 0); };
    ComplexConstantContext.prototype.COMMA = function () { return this.getToken(Fortran77Parser.COMMA, 0); };
    ComplexConstantContext.prototype.RPAREN = function () { return this.getToken(Fortran77Parser.RPAREN, 0); };
    ComplexConstantContext.prototype.ICON = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.ICON);
        }
        else {
            return this.getToken(Fortran77Parser.ICON, i);
        }
    };
    ComplexConstantContext.prototype.RCON = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.RCON);
        }
        else {
            return this.getToken(Fortran77Parser.RCON, i);
        }
    };
    ComplexConstantContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.PLUS);
        }
        else {
            return this.getToken(Fortran77Parser.PLUS, i);
        }
    };
    ComplexConstantContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Fortran77Parser.MINUS);
        }
        else {
            return this.getToken(Fortran77Parser.MINUS, i);
        }
    };
    Object.defineProperty(ComplexConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_complexConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComplexConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterComplexConstant) {
            listener.enterComplexConstant(this);
        }
    };
    // @Override
    ComplexConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitComplexConstant) {
            listener.exitComplexConstant(this);
        }
    };
    // @Override
    ComplexConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitComplexConstant) {
            return visitor.visitComplexConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComplexConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComplexConstantContext = ComplexConstantContext;
var LogicalConstantContext = /** @class */ (function (_super) {
    __extends(LogicalConstantContext, _super);
    function LogicalConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalConstantContext.prototype.TRUE = function () { return this.tryGetToken(Fortran77Parser.TRUE, 0); };
    LogicalConstantContext.prototype.FALSE = function () { return this.tryGetToken(Fortran77Parser.FALSE, 0); };
    Object.defineProperty(LogicalConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_logicalConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalConstant) {
            listener.enterLogicalConstant(this);
        }
    };
    // @Override
    LogicalConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalConstant) {
            listener.exitLogicalConstant(this);
        }
    };
    // @Override
    LogicalConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalConstant) {
            return visitor.visitLogicalConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalConstantContext = LogicalConstantContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.NAME = function () { return this.tryGetToken(Fortran77Parser.NAME, 0); };
    IdentifierContext.prototype.REAL = function () { return this.tryGetToken(Fortran77Parser.REAL, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
var ToContext = /** @class */ (function (_super) {
    __extends(ToContext, _super);
    function ToContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ToContext.prototype.NAME = function () { return this.getToken(Fortran77Parser.NAME, 0); };
    Object.defineProperty(ToContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Fortran77Parser.RULE_to; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ToContext.prototype.enterRule = function (listener) {
        if (listener.enterTo) {
            listener.enterTo(this);
        }
    };
    // @Override
    ToContext.prototype.exitRule = function (listener) {
        if (listener.exitTo) {
            listener.exitTo(this);
        }
    };
    // @Override
    ToContext.prototype.accept = function (visitor) {
        if (visitor.visitTo) {
            return visitor.visitTo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ToContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ToContext = ToContext;
