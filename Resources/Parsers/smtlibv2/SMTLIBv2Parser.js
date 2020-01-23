"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smtlibv2/SMTLIBv2.g4 by ANTLR 4.7.3-SNAPSHOT
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
var SMTLIBv2Parser = /** @class */ (function (_super) {
    __extends(SMTLIBv2Parser, _super);
    function SMTLIBv2Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SMTLIBv2Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SMTLIBv2Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SMTLIBv2Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SMTLIBv2Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "SMTLIBv2.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SMTLIBv2Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return SMTLIBv2Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SMTLIBv2Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return SMTLIBv2Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.start = function () {
        var _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SMTLIBv2Parser.RULE_start);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.script();
                this.state = 193;
                this.match(SMTLIBv2Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.response = function () {
        var _localctx = new ResponseContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SMTLIBv2Parser.RULE_response);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.general_response();
                this.state = 196;
                this.match(SMTLIBv2Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.generalReservedWord = function () {
        var _localctx = new GeneralReservedWordContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SMTLIBv2Parser.RULE_generalReservedWord);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                _la = this._input.LA(1);
                if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (SMTLIBv2Parser.GRW_Exclamation - 53)) | (1 << (SMTLIBv2Parser.GRW_Underscore - 53)) | (1 << (SMTLIBv2Parser.GRW_As - 53)) | (1 << (SMTLIBv2Parser.GRW_Binary - 53)) | (1 << (SMTLIBv2Parser.GRW_Decimal - 53)) | (1 << (SMTLIBv2Parser.GRW_Exists - 53)) | (1 << (SMTLIBv2Parser.GRW_Hexadecimal - 53)) | (1 << (SMTLIBv2Parser.GRW_Forall - 53)) | (1 << (SMTLIBv2Parser.GRW_Let - 53)) | (1 << (SMTLIBv2Parser.GRW_Match - 53)) | (1 << (SMTLIBv2Parser.GRW_Numeral - 53)) | (1 << (SMTLIBv2Parser.GRW_Par - 53)) | (1 << (SMTLIBv2Parser.GRW_String - 53)))) !== 0))) {
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
    SMTLIBv2Parser.prototype.simpleSymbol = function () {
        var _localctx = new SimpleSymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SMTLIBv2Parser.RULE_simpleSymbol);
        try {
            this.state = 202;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 200;
                        this.predefSymbol();
                    }
                    break;
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 201;
                        this.match(SMTLIBv2Parser.UndefinedSymbol);
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
    SMTLIBv2Parser.prototype.quotedSymbol = function () {
        var _localctx = new QuotedSymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SMTLIBv2Parser.RULE_quotedSymbol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                this.match(SMTLIBv2Parser.QuotedSymbol);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.predefSymbol = function () {
        var _localctx = new PredefSymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SMTLIBv2Parser.RULE_predefSymbol);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0))) {
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
    SMTLIBv2Parser.prototype.predefKeyword = function () {
        var _localctx = new PredefKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SMTLIBv2Parser.RULE_predefKeyword);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                _la = this._input.LA(1);
                if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SMTLIBv2Parser.PK_AllStatistics - 71)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 71)) | (1 << (SMTLIBv2Parser.PK_Authors - 71)) | (1 << (SMTLIBv2Parser.PK_Category - 71)) | (1 << (SMTLIBv2Parser.PK_Chainable - 71)) | (1 << (SMTLIBv2Parser.PK_Definition - 71)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 71)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 71)) | (1 << (SMTLIBv2Parser.PK_Extension - 71)) | (1 << (SMTLIBv2Parser.PK_Funs - 71)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 71)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 71)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 71)) | (1 << (SMTLIBv2Parser.PK_Language - 71)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 71)) | (1 << (SMTLIBv2Parser.PK_License - 71)) | (1 << (SMTLIBv2Parser.PK_Named - 71)) | (1 << (SMTLIBv2Parser.PK_Name - 71)) | (1 << (SMTLIBv2Parser.PK_Notes - 71)) | (1 << (SMTLIBv2Parser.PK_Pattern - 71)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 71)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 71)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 71)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 71)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 71)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 71)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 71)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 71)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 71)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 71)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 71)) | (1 << (SMTLIBv2Parser.PK_RightAssoc - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SMTLIBv2Parser.PK_SmtLibVersion - 103)) | (1 << (SMTLIBv2Parser.PK_Sorts - 103)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 103)) | (1 << (SMTLIBv2Parser.PK_Source - 103)) | (1 << (SMTLIBv2Parser.PK_Status - 103)) | (1 << (SMTLIBv2Parser.PK_Theories - 103)) | (1 << (SMTLIBv2Parser.PK_Values - 103)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 103)) | (1 << (SMTLIBv2Parser.PK_Version - 103)))) !== 0))) {
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
    SMTLIBv2Parser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SMTLIBv2Parser.RULE_symbol);
        try {
            this.state = 212;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 210;
                        this.simpleSymbol();
                    }
                    break;
                case SMTLIBv2Parser.QuotedSymbol:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 211;
                        this.quotedSymbol();
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
    SMTLIBv2Parser.prototype.numeral = function () {
        var _localctx = new NumeralContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SMTLIBv2Parser.RULE_numeral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.match(SMTLIBv2Parser.Numeral);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.decimal = function () {
        var _localctx = new DecimalContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SMTLIBv2Parser.RULE_decimal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(SMTLIBv2Parser.Decimal);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.hexadecimal = function () {
        var _localctx = new HexadecimalContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SMTLIBv2Parser.RULE_hexadecimal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(SMTLIBv2Parser.HexDecimal);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.binary = function () {
        var _localctx = new BinaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SMTLIBv2Parser.RULE_binary);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.match(SMTLIBv2Parser.Binary);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SMTLIBv2Parser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.match(SMTLIBv2Parser.String);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.keyword = function () {
        var _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SMTLIBv2Parser.RULE_keyword);
        try {
            this.state = 227;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.PK_AllStatistics:
                case SMTLIBv2Parser.PK_AssertionStackLevels:
                case SMTLIBv2Parser.PK_Authors:
                case SMTLIBv2Parser.PK_Category:
                case SMTLIBv2Parser.PK_Chainable:
                case SMTLIBv2Parser.PK_Definition:
                case SMTLIBv2Parser.PK_DiagnosticOutputChannel:
                case SMTLIBv2Parser.PK_ErrorBehaviour:
                case SMTLIBv2Parser.PK_Extension:
                case SMTLIBv2Parser.PK_Funs:
                case SMTLIBv2Parser.PK_FunsDescription:
                case SMTLIBv2Parser.PK_GlobalDeclarations:
                case SMTLIBv2Parser.PK_InteractiveMode:
                case SMTLIBv2Parser.PK_Language:
                case SMTLIBv2Parser.PK_LeftAssoc:
                case SMTLIBv2Parser.PK_License:
                case SMTLIBv2Parser.PK_Named:
                case SMTLIBv2Parser.PK_Name:
                case SMTLIBv2Parser.PK_Notes:
                case SMTLIBv2Parser.PK_Pattern:
                case SMTLIBv2Parser.PK_PrintSuccess:
                case SMTLIBv2Parser.PK_ProduceAssertions:
                case SMTLIBv2Parser.PK_ProduceAssignments:
                case SMTLIBv2Parser.PK_ProduceModels:
                case SMTLIBv2Parser.PK_ProduceProofs:
                case SMTLIBv2Parser.PK_ProduceUnsatAssumptions:
                case SMTLIBv2Parser.PK_ProduceUnsatCores:
                case SMTLIBv2Parser.PK_RandomSeed:
                case SMTLIBv2Parser.PK_ReasonUnknown:
                case SMTLIBv2Parser.PK_RegularOutputChannel:
                case SMTLIBv2Parser.PK_ReproducibleResourceLimit:
                case SMTLIBv2Parser.PK_RightAssoc:
                case SMTLIBv2Parser.PK_SmtLibVersion:
                case SMTLIBv2Parser.PK_Sorts:
                case SMTLIBv2Parser.PK_SortsDescription:
                case SMTLIBv2Parser.PK_Source:
                case SMTLIBv2Parser.PK_Status:
                case SMTLIBv2Parser.PK_Theories:
                case SMTLIBv2Parser.PK_Values:
                case SMTLIBv2Parser.PK_Verbosity:
                case SMTLIBv2Parser.PK_Version:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 224;
                        this.predefKeyword();
                    }
                    break;
                case SMTLIBv2Parser.Colon:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 225;
                        this.match(SMTLIBv2Parser.Colon);
                        this.state = 226;
                        this.simpleSymbol();
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
    SMTLIBv2Parser.prototype.spec_constant = function () {
        var _localctx = new Spec_constantContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SMTLIBv2Parser.RULE_spec_constant);
        try {
            this.state = 234;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.Numeral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 229;
                        this.numeral();
                    }
                    break;
                case SMTLIBv2Parser.Decimal:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 230;
                        this.decimal();
                    }
                    break;
                case SMTLIBv2Parser.HexDecimal:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 231;
                        this.hexadecimal();
                    }
                    break;
                case SMTLIBv2Parser.Binary:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 232;
                        this.binary();
                    }
                    break;
                case SMTLIBv2Parser.String:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 233;
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
    SMTLIBv2Parser.prototype.s_expr = function () {
        var _localctx = new S_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SMTLIBv2Parser.RULE_s_expr);
        var _la;
        try {
            this.state = 247;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.String:
                case SMTLIBv2Parser.Numeral:
                case SMTLIBv2Parser.Binary:
                case SMTLIBv2Parser.HexDecimal:
                case SMTLIBv2Parser.Decimal:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 236;
                        this.spec_constant();
                    }
                    break;
                case SMTLIBv2Parser.QuotedSymbol:
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 237;
                        this.symbol();
                    }
                    break;
                case SMTLIBv2Parser.Colon:
                case SMTLIBv2Parser.PK_AllStatistics:
                case SMTLIBv2Parser.PK_AssertionStackLevels:
                case SMTLIBv2Parser.PK_Authors:
                case SMTLIBv2Parser.PK_Category:
                case SMTLIBv2Parser.PK_Chainable:
                case SMTLIBv2Parser.PK_Definition:
                case SMTLIBv2Parser.PK_DiagnosticOutputChannel:
                case SMTLIBv2Parser.PK_ErrorBehaviour:
                case SMTLIBv2Parser.PK_Extension:
                case SMTLIBv2Parser.PK_Funs:
                case SMTLIBv2Parser.PK_FunsDescription:
                case SMTLIBv2Parser.PK_GlobalDeclarations:
                case SMTLIBv2Parser.PK_InteractiveMode:
                case SMTLIBv2Parser.PK_Language:
                case SMTLIBv2Parser.PK_LeftAssoc:
                case SMTLIBv2Parser.PK_License:
                case SMTLIBv2Parser.PK_Named:
                case SMTLIBv2Parser.PK_Name:
                case SMTLIBv2Parser.PK_Notes:
                case SMTLIBv2Parser.PK_Pattern:
                case SMTLIBv2Parser.PK_PrintSuccess:
                case SMTLIBv2Parser.PK_ProduceAssertions:
                case SMTLIBv2Parser.PK_ProduceAssignments:
                case SMTLIBv2Parser.PK_ProduceModels:
                case SMTLIBv2Parser.PK_ProduceProofs:
                case SMTLIBv2Parser.PK_ProduceUnsatAssumptions:
                case SMTLIBv2Parser.PK_ProduceUnsatCores:
                case SMTLIBv2Parser.PK_RandomSeed:
                case SMTLIBv2Parser.PK_ReasonUnknown:
                case SMTLIBv2Parser.PK_RegularOutputChannel:
                case SMTLIBv2Parser.PK_ReproducibleResourceLimit:
                case SMTLIBv2Parser.PK_RightAssoc:
                case SMTLIBv2Parser.PK_SmtLibVersion:
                case SMTLIBv2Parser.PK_Sorts:
                case SMTLIBv2Parser.PK_SortsDescription:
                case SMTLIBv2Parser.PK_Source:
                case SMTLIBv2Parser.PK_Status:
                case SMTLIBv2Parser.PK_Theories:
                case SMTLIBv2Parser.PK_Values:
                case SMTLIBv2Parser.PK_Verbosity:
                case SMTLIBv2Parser.PK_Version:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 238;
                        this.keyword();
                    }
                    break;
                case SMTLIBv2Parser.ParOpen:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 239;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 243;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.String) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SMTLIBv2Parser.Numeral - 66)) | (1 << (SMTLIBv2Parser.Binary - 66)) | (1 << (SMTLIBv2Parser.HexDecimal - 66)) | (1 << (SMTLIBv2Parser.Decimal - 66)) | (1 << (SMTLIBv2Parser.Colon - 66)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 66)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 66)) | (1 << (SMTLIBv2Parser.PK_Authors - 66)) | (1 << (SMTLIBv2Parser.PK_Category - 66)) | (1 << (SMTLIBv2Parser.PK_Chainable - 66)) | (1 << (SMTLIBv2Parser.PK_Definition - 66)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 66)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 66)) | (1 << (SMTLIBv2Parser.PK_Extension - 66)) | (1 << (SMTLIBv2Parser.PK_Funs - 66)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 66)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 66)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 66)) | (1 << (SMTLIBv2Parser.PK_Language - 66)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 66)) | (1 << (SMTLIBv2Parser.PK_License - 66)) | (1 << (SMTLIBv2Parser.PK_Named - 66)) | (1 << (SMTLIBv2Parser.PK_Name - 66)) | (1 << (SMTLIBv2Parser.PK_Notes - 66)) | (1 << (SMTLIBv2Parser.PK_Pattern - 66)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SMTLIBv2Parser.PK_RandomSeed - 98)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 98)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 98)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 98)) | (1 << (SMTLIBv2Parser.PK_RightAssoc - 98)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 98)) | (1 << (SMTLIBv2Parser.PK_Sorts - 98)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 98)) | (1 << (SMTLIBv2Parser.PK_Source - 98)) | (1 << (SMTLIBv2Parser.PK_Status - 98)) | (1 << (SMTLIBv2Parser.PK_Theories - 98)) | (1 << (SMTLIBv2Parser.PK_Values - 98)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 98)) | (1 << (SMTLIBv2Parser.PK_Version - 98)) | (1 << (SMTLIBv2Parser.UndefinedSymbol - 98)))) !== 0)) {
                            {
                                {
                                    this.state = 240;
                                    this.s_expr();
                                }
                            }
                            this.state = 245;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 246;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.index = function () {
        var _localctx = new IndexContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SMTLIBv2Parser.RULE_index);
        try {
            this.state = 251;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.Numeral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 249;
                        this.numeral();
                    }
                    break;
                case SMTLIBv2Parser.QuotedSymbol:
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 250;
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
    SMTLIBv2Parser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, SMTLIBv2Parser.RULE_identifier);
        var _la;
        try {
            this.state = 264;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.QuotedSymbol:
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 253;
                        this.symbol();
                    }
                    break;
                case SMTLIBv2Parser.ParOpen:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 254;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 255;
                        this.match(SMTLIBv2Parser.GRW_Underscore);
                        this.state = 256;
                        this.symbol();
                        this.state = 258;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 257;
                                    this.index();
                                }
                            }
                            this.state = 260;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.Numeral || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 262;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.attribute_value = function () {
        var _localctx = new Attribute_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, SMTLIBv2Parser.RULE_attribute_value);
        var _la;
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.String:
                case SMTLIBv2Parser.Numeral:
                case SMTLIBv2Parser.Binary:
                case SMTLIBv2Parser.HexDecimal:
                case SMTLIBv2Parser.Decimal:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 266;
                        this.spec_constant();
                    }
                    break;
                case SMTLIBv2Parser.QuotedSymbol:
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 267;
                        this.symbol();
                    }
                    break;
                case SMTLIBv2Parser.ParOpen:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 268;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 272;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.String) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SMTLIBv2Parser.Numeral - 66)) | (1 << (SMTLIBv2Parser.Binary - 66)) | (1 << (SMTLIBv2Parser.HexDecimal - 66)) | (1 << (SMTLIBv2Parser.Decimal - 66)) | (1 << (SMTLIBv2Parser.Colon - 66)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 66)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 66)) | (1 << (SMTLIBv2Parser.PK_Authors - 66)) | (1 << (SMTLIBv2Parser.PK_Category - 66)) | (1 << (SMTLIBv2Parser.PK_Chainable - 66)) | (1 << (SMTLIBv2Parser.PK_Definition - 66)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 66)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 66)) | (1 << (SMTLIBv2Parser.PK_Extension - 66)) | (1 << (SMTLIBv2Parser.PK_Funs - 66)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 66)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 66)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 66)) | (1 << (SMTLIBv2Parser.PK_Language - 66)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 66)) | (1 << (SMTLIBv2Parser.PK_License - 66)) | (1 << (SMTLIBv2Parser.PK_Named - 66)) | (1 << (SMTLIBv2Parser.PK_Name - 66)) | (1 << (SMTLIBv2Parser.PK_Notes - 66)) | (1 << (SMTLIBv2Parser.PK_Pattern - 66)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 66)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SMTLIBv2Parser.PK_RandomSeed - 98)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 98)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 98)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 98)) | (1 << (SMTLIBv2Parser.PK_RightAssoc - 98)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 98)) | (1 << (SMTLIBv2Parser.PK_Sorts - 98)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 98)) | (1 << (SMTLIBv2Parser.PK_Source - 98)) | (1 << (SMTLIBv2Parser.PK_Status - 98)) | (1 << (SMTLIBv2Parser.PK_Theories - 98)) | (1 << (SMTLIBv2Parser.PK_Values - 98)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 98)) | (1 << (SMTLIBv2Parser.PK_Version - 98)) | (1 << (SMTLIBv2Parser.UndefinedSymbol - 98)))) !== 0)) {
                            {
                                {
                                    this.state = 269;
                                    this.s_expr();
                                }
                            }
                            this.state = 274;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 275;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, SMTLIBv2Parser.RULE_attribute);
        try {
            this.state = 282;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 278;
                        this.keyword();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 279;
                        this.keyword();
                        this.state = 280;
                        this.attribute_value();
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
    SMTLIBv2Parser.prototype.sort = function () {
        var _localctx = new SortContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, SMTLIBv2Parser.RULE_sort);
        var _la;
        try {
            this.state = 294;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 284;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 285;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 286;
                        this.identifier();
                        this.state = 288;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 287;
                                    this.sort();
                                }
                            }
                            this.state = 290;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 292;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.qual_identifer = function () {
        var _localctx = new Qual_identiferContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, SMTLIBv2Parser.RULE_qual_identifer);
        try {
            this.state = 303;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 296;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 297;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 298;
                        this.match(SMTLIBv2Parser.GRW_As);
                        this.state = 299;
                        this.identifier();
                        this.state = 300;
                        this.sort();
                        this.state = 301;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.var_binding = function () {
        var _localctx = new Var_bindingContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SMTLIBv2Parser.RULE_var_binding);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 306;
                this.symbol();
                this.state = 307;
                this.term();
                this.state = 308;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.sorted_var = function () {
        var _localctx = new Sorted_varContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SMTLIBv2Parser.RULE_sorted_var);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 311;
                this.symbol();
                this.state = 312;
                this.sort();
                this.state = 313;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.pattern = function () {
        var _localctx = new PatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SMTLIBv2Parser.RULE_pattern);
        var _la;
        try {
            this.state = 325;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.QuotedSymbol:
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 315;
                        this.symbol();
                    }
                    break;
                case SMTLIBv2Parser.ParOpen:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 316;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 317;
                        this.symbol();
                        this.state = 319;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 318;
                                    this.symbol();
                                }
                            }
                            this.state = 321;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 323;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.match_case = function () {
        var _localctx = new Match_caseContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, SMTLIBv2Parser.RULE_match_case);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 327;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 328;
                this.pattern();
                this.state = 329;
                this.term();
                this.state = 330;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SMTLIBv2Parser.RULE_term);
        var _la;
        try {
            this.state = 401;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 332;
                        this.spec_constant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 333;
                        this.qual_identifer();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 334;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 335;
                        this.qual_identifer();
                        this.state = 337;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 336;
                                    this.term();
                                }
                            }
                            this.state = 339;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.String) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SMTLIBv2Parser.Numeral - 66)) | (1 << (SMTLIBv2Parser.Binary - 66)) | (1 << (SMTLIBv2Parser.HexDecimal - 66)) | (1 << (SMTLIBv2Parser.Decimal - 66)))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 341;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 343;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 344;
                        this.match(SMTLIBv2Parser.GRW_Let);
                        this.state = 345;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 347;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 346;
                                    this.var_binding();
                                }
                            }
                            this.state = 349;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 351;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 352;
                        this.term();
                        this.state = 353;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 355;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 356;
                        this.match(SMTLIBv2Parser.GRW_Forall);
                        this.state = 357;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 359;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 358;
                                    this.sorted_var();
                                }
                            }
                            this.state = 361;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 363;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 364;
                        this.term();
                        this.state = 365;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 367;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 368;
                        this.match(SMTLIBv2Parser.GRW_Exists);
                        this.state = 369;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 370;
                                    this.sorted_var();
                                }
                            }
                            this.state = 373;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 375;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 376;
                        this.term();
                        this.state = 377;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 379;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 380;
                        this.match(SMTLIBv2Parser.GRW_Match);
                        this.state = 381;
                        this.term();
                        this.state = 382;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 384;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 383;
                                    this.match_case();
                                }
                            }
                            this.state = 386;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 388;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 389;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 391;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 392;
                        this.match(SMTLIBv2Parser.GRW_Exclamation);
                        this.state = 393;
                        this.term();
                        this.state = 395;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 394;
                                    this.attribute();
                                }
                            }
                            this.state = 397;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0));
                        this.state = 399;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.sort_symbol_decl = function () {
        var _localctx = new Sort_symbol_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SMTLIBv2Parser.RULE_sort_symbol_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 404;
                this.identifier();
                this.state = 405;
                this.numeral();
                this.state = 409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0)) {
                    {
                        {
                            this.state = 406;
                            this.attribute();
                        }
                    }
                    this.state = 411;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 412;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.meta_spec_constant = function () {
        var _localctx = new Meta_spec_constantContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SMTLIBv2Parser.RULE_meta_spec_constant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                _la = this._input.LA(1);
                if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SMTLIBv2Parser.GRW_Decimal - 57)) | (1 << (SMTLIBv2Parser.GRW_Numeral - 57)) | (1 << (SMTLIBv2Parser.GRW_String - 57)))) !== 0))) {
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
    SMTLIBv2Parser.prototype.fun_symbol_decl = function () {
        var _localctx = new Fun_symbol_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SMTLIBv2Parser.RULE_fun_symbol_decl);
        var _la;
        try {
            this.state = 453;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 416;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 417;
                        this.spec_constant();
                        this.state = 418;
                        this.sort();
                        this.state = 422;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0)) {
                            {
                                {
                                    this.state = 419;
                                    this.attribute();
                                }
                            }
                            this.state = 424;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 425;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 427;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 428;
                        this.meta_spec_constant();
                        this.state = 429;
                        this.sort();
                        this.state = 433;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0)) {
                            {
                                {
                                    this.state = 430;
                                    this.attribute();
                                }
                            }
                            this.state = 435;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 436;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 438;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 439;
                        this.identifier();
                        this.state = 441;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 440;
                                    this.sort();
                                }
                            }
                            this.state = 443;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 448;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0)) {
                            {
                                {
                                    this.state = 445;
                                    this.attribute();
                                }
                            }
                            this.state = 450;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 451;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.par_fun_symbol_decl = function () {
        var _localctx = new Par_fun_symbol_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SMTLIBv2Parser.RULE_par_fun_symbol_decl);
        var _la;
        try {
            this.state = 481;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 455;
                        this.fun_symbol_decl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 456;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 457;
                        this.match(SMTLIBv2Parser.GRW_Par);
                        this.state = 458;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 460;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 459;
                                    this.symbol();
                                }
                            }
                            this.state = 462;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 464;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 465;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 466;
                        this.identifier();
                        this.state = 468;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 467;
                                    this.sort();
                                }
                            }
                            this.state = 470;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 475;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0)) {
                            {
                                {
                                    this.state = 472;
                                    this.attribute();
                                }
                            }
                            this.state = 477;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 478;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 479;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.theory_attribute = function () {
        var _localctx = new Theory_attributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, SMTLIBv2Parser.RULE_theory_attribute);
        var _la;
        try {
            this.state = 512;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 483;
                        this.match(SMTLIBv2Parser.PK_Sorts);
                        this.state = 484;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 486;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 485;
                                    this.sort_symbol_decl();
                                }
                            }
                            this.state = 488;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 490;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 492;
                        this.match(SMTLIBv2Parser.PK_Funs);
                        this.state = 493;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 495;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 494;
                                    this.par_fun_symbol_decl();
                                }
                            }
                            this.state = 497;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 499;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 501;
                        this.match(SMTLIBv2Parser.PK_SortsDescription);
                        this.state = 502;
                        this.string();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 503;
                        this.match(SMTLIBv2Parser.PK_FunsDescription);
                        this.state = 504;
                        this.string();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 505;
                        this.match(SMTLIBv2Parser.PK_Definition);
                        this.state = 506;
                        this.string();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 507;
                        this.match(SMTLIBv2Parser.PK_Values);
                        this.state = 508;
                        this.string();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 509;
                        this.match(SMTLIBv2Parser.PK_Notes);
                        this.state = 510;
                        this.string();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 511;
                        this.attribute();
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
    SMTLIBv2Parser.prototype.theory_decl = function () {
        var _localctx = new Theory_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, SMTLIBv2Parser.RULE_theory_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 514;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 515;
                this.match(SMTLIBv2Parser.PS_Theory);
                this.state = 516;
                this.symbol();
                this.state = 518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 517;
                            this.theory_attribute();
                        }
                    }
                    this.state = 520;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0));
                this.state = 522;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.logic_attribue = function () {
        var _localctx = new Logic_attribueContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, SMTLIBv2Parser.RULE_logic_attribue);
        var _la;
        try {
            this.state = 542;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 524;
                        this.match(SMTLIBv2Parser.PK_Theories);
                        this.state = 525;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 527;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 526;
                                    this.symbol();
                                }
                            }
                            this.state = 529;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 531;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 533;
                        this.match(SMTLIBv2Parser.PK_Language);
                        this.state = 534;
                        this.string();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 535;
                        this.match(SMTLIBv2Parser.PK_Extension);
                        this.state = 536;
                        this.string();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 537;
                        this.match(SMTLIBv2Parser.PK_Values);
                        this.state = 538;
                        this.string();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 539;
                        this.match(SMTLIBv2Parser.PK_Notes);
                        this.state = 540;
                        this.string();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 541;
                        this.attribute();
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
    SMTLIBv2Parser.prototype.logic = function () {
        var _localctx = new LogicContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, SMTLIBv2Parser.RULE_logic);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 544;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 545;
                this.match(SMTLIBv2Parser.PS_Logic);
                this.state = 546;
                this.symbol();
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 547;
                            this.logic_attribue();
                        }
                    }
                    this.state = 550;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0));
                this.state = 552;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.sort_dec = function () {
        var _localctx = new Sort_decContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, SMTLIBv2Parser.RULE_sort_dec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 554;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 555;
                this.symbol();
                this.state = 556;
                this.numeral();
                this.state = 557;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.selector_dec = function () {
        var _localctx = new Selector_decContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SMTLIBv2Parser.RULE_selector_dec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 559;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 560;
                this.symbol();
                this.state = 561;
                this.sort();
                this.state = 562;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.constructor_dec = function () {
        var _localctx = new Constructor_decContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SMTLIBv2Parser.RULE_constructor_dec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 564;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 565;
                this.symbol();
                this.state = 569;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SMTLIBv2Parser.ParOpen) {
                    {
                        {
                            this.state = 566;
                            this.selector_dec();
                        }
                    }
                    this.state = 571;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 572;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.datatype_dec = function () {
        var _localctx = new Datatype_decContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SMTLIBv2Parser.RULE_datatype_dec);
        var _la;
        try {
            this.state = 600;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 574;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 576;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 575;
                                    this.constructor_dec();
                                }
                            }
                            this.state = 578;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 580;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 582;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 583;
                        this.match(SMTLIBv2Parser.GRW_Par);
                        this.state = 584;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 586;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 585;
                                    this.symbol();
                                }
                            }
                            this.state = 588;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 590;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 591;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 593;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 592;
                                    this.constructor_dec();
                                }
                            }
                            this.state = 595;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 597;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 598;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.function_dec = function () {
        var _localctx = new Function_decContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, SMTLIBv2Parser.RULE_function_dec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 602;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 603;
                this.symbol();
                this.state = 604;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 608;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SMTLIBv2Parser.ParOpen) {
                    {
                        {
                            this.state = 605;
                            this.sorted_var();
                        }
                    }
                    this.state = 610;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 611;
                this.match(SMTLIBv2Parser.ParClose);
                this.state = 612;
                this.sort();
                this.state = 613;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.function_def = function () {
        var _localctx = new Function_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SMTLIBv2Parser.RULE_function_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 615;
                this.symbol();
                this.state = 616;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 620;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SMTLIBv2Parser.ParOpen) {
                    {
                        {
                            this.state = 617;
                            this.sorted_var();
                        }
                    }
                    this.state = 622;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 623;
                this.match(SMTLIBv2Parser.ParClose);
                this.state = 624;
                this.sort();
                this.state = 625;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.prop_literal = function () {
        var _localctx = new Prop_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SMTLIBv2Parser.RULE_prop_literal);
        try {
            this.state = 633;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SMTLIBv2Parser.QuotedSymbol:
                case SMTLIBv2Parser.PS_Not:
                case SMTLIBv2Parser.PS_Bool:
                case SMTLIBv2Parser.PS_ContinuedExecution:
                case SMTLIBv2Parser.PS_Error:
                case SMTLIBv2Parser.PS_False:
                case SMTLIBv2Parser.PS_ImmediateExit:
                case SMTLIBv2Parser.PS_Incomplete:
                case SMTLIBv2Parser.PS_Logic:
                case SMTLIBv2Parser.PS_Memout:
                case SMTLIBv2Parser.PS_Sat:
                case SMTLIBv2Parser.PS_Success:
                case SMTLIBv2Parser.PS_Theory:
                case SMTLIBv2Parser.PS_True:
                case SMTLIBv2Parser.PS_Unknown:
                case SMTLIBv2Parser.PS_Unsupported:
                case SMTLIBv2Parser.PS_Unsat:
                case SMTLIBv2Parser.UndefinedSymbol:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 627;
                        this.symbol();
                    }
                    break;
                case SMTLIBv2Parser.ParOpen:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 628;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 629;
                        this.match(SMTLIBv2Parser.PS_Not);
                        this.state = 630;
                        this.symbol();
                        this.state = 631;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.script = function () {
        var _localctx = new ScriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SMTLIBv2Parser.RULE_script);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SMTLIBv2Parser.ParOpen) {
                    {
                        {
                            this.state = 635;
                            this.command();
                        }
                    }
                    this.state = 640;
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
    SMTLIBv2Parser.prototype.cmd_assert = function () {
        var _localctx = new Cmd_assertContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SMTLIBv2Parser.RULE_cmd_assert);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 641;
                this.match(SMTLIBv2Parser.CMD_Assert);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_checkSat = function () {
        var _localctx = new Cmd_checkSatContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, SMTLIBv2Parser.RULE_cmd_checkSat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 643;
                this.match(SMTLIBv2Parser.CMD_CheckSat);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_checkSatAssuming = function () {
        var _localctx = new Cmd_checkSatAssumingContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SMTLIBv2Parser.RULE_cmd_checkSatAssuming);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 645;
                this.match(SMTLIBv2Parser.CMD_CheckSatAssuming);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_declareConst = function () {
        var _localctx = new Cmd_declareConstContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SMTLIBv2Parser.RULE_cmd_declareConst);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 647;
                this.match(SMTLIBv2Parser.CMD_DeclareConst);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_declareDatatype = function () {
        var _localctx = new Cmd_declareDatatypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, SMTLIBv2Parser.RULE_cmd_declareDatatype);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 649;
                this.match(SMTLIBv2Parser.CMD_DeclareDatatype);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_declareDatatypes = function () {
        var _localctx = new Cmd_declareDatatypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, SMTLIBv2Parser.RULE_cmd_declareDatatypes);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 651;
                this.match(SMTLIBv2Parser.CMD_DeclareDatatypes);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_declareFun = function () {
        var _localctx = new Cmd_declareFunContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, SMTLIBv2Parser.RULE_cmd_declareFun);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 653;
                this.match(SMTLIBv2Parser.CMD_DeclareFun);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_declareSort = function () {
        var _localctx = new Cmd_declareSortContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, SMTLIBv2Parser.RULE_cmd_declareSort);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 655;
                this.match(SMTLIBv2Parser.CMD_DeclareSort);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_defineFun = function () {
        var _localctx = new Cmd_defineFunContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, SMTLIBv2Parser.RULE_cmd_defineFun);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 657;
                this.match(SMTLIBv2Parser.CMD_DefineFun);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_defineFunRec = function () {
        var _localctx = new Cmd_defineFunRecContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, SMTLIBv2Parser.RULE_cmd_defineFunRec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 659;
                this.match(SMTLIBv2Parser.CMD_DefineFunRec);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_defineFunsRec = function () {
        var _localctx = new Cmd_defineFunsRecContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, SMTLIBv2Parser.RULE_cmd_defineFunsRec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 661;
                this.match(SMTLIBv2Parser.CMD_DefineFunsRec);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_defineSort = function () {
        var _localctx = new Cmd_defineSortContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, SMTLIBv2Parser.RULE_cmd_defineSort);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this.match(SMTLIBv2Parser.CMD_DefineSort);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_echo = function () {
        var _localctx = new Cmd_echoContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, SMTLIBv2Parser.RULE_cmd_echo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 665;
                this.match(SMTLIBv2Parser.CMD_Echo);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_exit = function () {
        var _localctx = new Cmd_exitContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, SMTLIBv2Parser.RULE_cmd_exit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 667;
                this.match(SMTLIBv2Parser.CMD_Exit);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getAssertions = function () {
        var _localctx = new Cmd_getAssertionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, SMTLIBv2Parser.RULE_cmd_getAssertions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this.match(SMTLIBv2Parser.CMD_GetAssertions);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getAssignment = function () {
        var _localctx = new Cmd_getAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, SMTLIBv2Parser.RULE_cmd_getAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 671;
                this.match(SMTLIBv2Parser.CMD_GetAssignment);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getInfo = function () {
        var _localctx = new Cmd_getInfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, SMTLIBv2Parser.RULE_cmd_getInfo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 673;
                this.match(SMTLIBv2Parser.CMD_GetInfo);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getModel = function () {
        var _localctx = new Cmd_getModelContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, SMTLIBv2Parser.RULE_cmd_getModel);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 675;
                this.match(SMTLIBv2Parser.CMD_GetModel);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getOption = function () {
        var _localctx = new Cmd_getOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, SMTLIBv2Parser.RULE_cmd_getOption);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 677;
                this.match(SMTLIBv2Parser.CMD_GetOption);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getProof = function () {
        var _localctx = new Cmd_getProofContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, SMTLIBv2Parser.RULE_cmd_getProof);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 679;
                this.match(SMTLIBv2Parser.CMD_GetProof);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getUnsatAssumptions = function () {
        var _localctx = new Cmd_getUnsatAssumptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, SMTLIBv2Parser.RULE_cmd_getUnsatAssumptions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 681;
                this.match(SMTLIBv2Parser.CMD_GetUnsatAssumptions);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getUnsatCore = function () {
        var _localctx = new Cmd_getUnsatCoreContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, SMTLIBv2Parser.RULE_cmd_getUnsatCore);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 683;
                this.match(SMTLIBv2Parser.CMD_GetUnsatCore);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_getValue = function () {
        var _localctx = new Cmd_getValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, SMTLIBv2Parser.RULE_cmd_getValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 685;
                this.match(SMTLIBv2Parser.CMD_GetValue);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_pop = function () {
        var _localctx = new Cmd_popContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, SMTLIBv2Parser.RULE_cmd_pop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this.match(SMTLIBv2Parser.CMD_Pop);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_push = function () {
        var _localctx = new Cmd_pushContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, SMTLIBv2Parser.RULE_cmd_push);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 689;
                this.match(SMTLIBv2Parser.CMD_Push);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_reset = function () {
        var _localctx = new Cmd_resetContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, SMTLIBv2Parser.RULE_cmd_reset);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 691;
                this.match(SMTLIBv2Parser.CMD_Reset);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_resetAssertions = function () {
        var _localctx = new Cmd_resetAssertionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, SMTLIBv2Parser.RULE_cmd_resetAssertions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.match(SMTLIBv2Parser.CMD_ResetAssertions);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_setInfo = function () {
        var _localctx = new Cmd_setInfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, SMTLIBv2Parser.RULE_cmd_setInfo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 695;
                this.match(SMTLIBv2Parser.CMD_SetInfo);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_setLogic = function () {
        var _localctx = new Cmd_setLogicContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, SMTLIBv2Parser.RULE_cmd_setLogic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 697;
                this.match(SMTLIBv2Parser.CMD_SetLogic);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.cmd_setOption = function () {
        var _localctx = new Cmd_setOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, SMTLIBv2Parser.RULE_cmd_setOption);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 699;
                this.match(SMTLIBv2Parser.CMD_SetOption);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.command = function () {
        var _localctx = new CommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, SMTLIBv2Parser.RULE_command);
        var _la;
        try {
            this.state = 893;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 701;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 702;
                        this.cmd_assert();
                        this.state = 703;
                        this.term();
                        this.state = 704;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 706;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 707;
                        this.cmd_checkSat();
                        this.state = 708;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 710;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 711;
                        this.cmd_checkSatAssuming();
                        this.state = 712;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 714;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 715;
                        this.cmd_declareConst();
                        this.state = 716;
                        this.symbol();
                        this.state = 717;
                        this.sort();
                        this.state = 718;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 720;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 721;
                        this.cmd_declareDatatype();
                        this.state = 722;
                        this.symbol();
                        this.state = 723;
                        this.datatype_dec();
                        this.state = 724;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 726;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 727;
                        this.cmd_declareDatatypes();
                        this.state = 728;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 730;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 729;
                                    this.sort_dec();
                                }
                            }
                            this.state = 732;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 734;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 735;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 737;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 736;
                                    this.datatype_dec();
                                }
                            }
                            this.state = 739;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 741;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 742;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 744;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 745;
                        this.cmd_declareFun();
                        this.state = 746;
                        this.symbol();
                        this.state = 747;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 751;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol) {
                            {
                                {
                                    this.state = 748;
                                    this.sort();
                                }
                            }
                            this.state = 753;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 754;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 755;
                        this.sort();
                        this.state = 756;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 758;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 759;
                        this.cmd_declareSort();
                        this.state = 760;
                        this.symbol();
                        this.state = 761;
                        this.numeral();
                        this.state = 762;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 764;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 765;
                        this.cmd_defineFun();
                        this.state = 766;
                        this.function_def();
                        this.state = 767;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 769;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 770;
                        this.cmd_defineFunRec();
                        this.state = 771;
                        this.function_def();
                        this.state = 772;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 774;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 775;
                        this.cmd_defineFunsRec();
                        this.state = 776;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 778;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 777;
                                    this.function_dec();
                                }
                            }
                            this.state = 780;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 782;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 783;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 785;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 784;
                                    this.term();
                                }
                            }
                            this.state = 787;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.String) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SMTLIBv2Parser.Numeral - 66)) | (1 << (SMTLIBv2Parser.Binary - 66)) | (1 << (SMTLIBv2Parser.HexDecimal - 66)) | (1 << (SMTLIBv2Parser.Decimal - 66)))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 789;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 790;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 792;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 793;
                        this.cmd_defineSort();
                        this.state = 794;
                        this.symbol();
                        this.state = 795;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 799;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol) {
                            {
                                {
                                    this.state = 796;
                                    this.symbol();
                                }
                            }
                            this.state = 801;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 802;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 803;
                        this.sort();
                        this.state = 804;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 806;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 807;
                        this.cmd_echo();
                        this.state = 808;
                        this.string();
                        this.state = 809;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 811;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 812;
                        this.cmd_exit();
                        this.state = 813;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 815;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 816;
                        this.cmd_getAssertions();
                        this.state = 817;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 819;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 820;
                        this.cmd_getAssignment();
                        this.state = 821;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 823;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 824;
                        this.cmd_getInfo();
                        this.state = 825;
                        this.info_flag();
                        this.state = 826;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 828;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 829;
                        this.cmd_getModel();
                        this.state = 830;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 832;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 833;
                        this.cmd_getOption();
                        this.state = 834;
                        this.keyword();
                        this.state = 835;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 837;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 838;
                        this.cmd_getProof();
                        this.state = 839;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 841;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 842;
                        this.cmd_getUnsatAssumptions();
                        this.state = 843;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 845;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 846;
                        this.cmd_getUnsatCore();
                        this.state = 847;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 849;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 850;
                        this.cmd_getValue();
                        this.state = 851;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 853;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 852;
                                    this.term();
                                }
                            }
                            this.state = 855;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.String) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SMTLIBv2Parser.Numeral - 66)) | (1 << (SMTLIBv2Parser.Binary - 66)) | (1 << (SMTLIBv2Parser.HexDecimal - 66)) | (1 << (SMTLIBv2Parser.Decimal - 66)))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 857;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 858;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 860;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 861;
                        this.cmd_pop();
                        this.state = 862;
                        this.numeral();
                        this.state = 863;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 865;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 866;
                        this.cmd_push();
                        this.state = 867;
                        this.numeral();
                        this.state = 868;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 870;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 871;
                        this.cmd_reset();
                        this.state = 872;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 874;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 875;
                        this.cmd_resetAssertions();
                        this.state = 876;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 878;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 879;
                        this.cmd_setInfo();
                        this.state = 880;
                        this.attribute();
                        this.state = 881;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 883;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 884;
                        this.cmd_setLogic();
                        this.state = 885;
                        this.symbol();
                        this.state = 886;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 888;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 889;
                        this.cmd_setOption();
                        this.state = 890;
                        this.option();
                        this.state = 891;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.b_value = function () {
        var _localctx = new B_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, SMTLIBv2Parser.RULE_b_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 895;
                _la = this._input.LA(1);
                if (!(_la === SMTLIBv2Parser.PS_False || _la === SMTLIBv2Parser.PS_True)) {
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
    SMTLIBv2Parser.prototype.option = function () {
        var _localctx = new OptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, SMTLIBv2Parser.RULE_option);
        try {
            this.state = 926;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 897;
                        this.match(SMTLIBv2Parser.PK_DiagnosticOutputChannel);
                        this.state = 898;
                        this.string();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 899;
                        this.match(SMTLIBv2Parser.PK_GlobalDeclarations);
                        this.state = 900;
                        this.b_value();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 901;
                        this.match(SMTLIBv2Parser.PK_InteractiveMode);
                        this.state = 902;
                        this.b_value();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 903;
                        this.match(SMTLIBv2Parser.PK_PrintSuccess);
                        this.state = 904;
                        this.b_value();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 905;
                        this.match(SMTLIBv2Parser.PK_ProduceAssertions);
                        this.state = 906;
                        this.b_value();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 907;
                        this.match(SMTLIBv2Parser.PK_ProduceAssignments);
                        this.state = 908;
                        this.b_value();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 909;
                        this.match(SMTLIBv2Parser.PK_ProduceModels);
                        this.state = 910;
                        this.b_value();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 911;
                        this.match(SMTLIBv2Parser.PK_ProduceProofs);
                        this.state = 912;
                        this.b_value();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 913;
                        this.match(SMTLIBv2Parser.PK_ProduceUnsatAssumptions);
                        this.state = 914;
                        this.b_value();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 915;
                        this.match(SMTLIBv2Parser.PK_ProduceUnsatCores);
                        this.state = 916;
                        this.b_value();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 917;
                        this.match(SMTLIBv2Parser.PK_RandomSeed);
                        this.state = 918;
                        this.numeral();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 919;
                        this.match(SMTLIBv2Parser.PK_RegularOutputChannel);
                        this.state = 920;
                        this.string();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 921;
                        this.match(SMTLIBv2Parser.PK_ReproducibleResourceLimit);
                        this.state = 922;
                        this.numeral();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 923;
                        this.match(SMTLIBv2Parser.PK_Verbosity);
                        this.state = 924;
                        this.numeral();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 925;
                        this.attribute();
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
    SMTLIBv2Parser.prototype.info_flag = function () {
        var _localctx = new Info_flagContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, SMTLIBv2Parser.RULE_info_flag);
        try {
            this.state = 936;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 928;
                        this.match(SMTLIBv2Parser.PK_AllStatistics);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 929;
                        this.match(SMTLIBv2Parser.PK_AssertionStackLevels);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 930;
                        this.match(SMTLIBv2Parser.PK_Authors);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 931;
                        this.match(SMTLIBv2Parser.PK_ErrorBehaviour);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 932;
                        this.match(SMTLIBv2Parser.PK_Name);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 933;
                        this.match(SMTLIBv2Parser.PK_ReasonUnknown);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 934;
                        this.match(SMTLIBv2Parser.PK_Version);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 935;
                        this.keyword();
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
    SMTLIBv2Parser.prototype.error_behaviour = function () {
        var _localctx = new Error_behaviourContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, SMTLIBv2Parser.RULE_error_behaviour);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 938;
                _la = this._input.LA(1);
                if (!(_la === SMTLIBv2Parser.PS_ContinuedExecution || _la === SMTLIBv2Parser.PS_ImmediateExit)) {
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
    SMTLIBv2Parser.prototype.reason_unknown = function () {
        var _localctx = new Reason_unknownContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, SMTLIBv2Parser.RULE_reason_unknown);
        try {
            this.state = 943;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 940;
                        this.match(SMTLIBv2Parser.PS_Memout);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 941;
                        this.match(SMTLIBv2Parser.PS_Incomplete);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 942;
                        this.s_expr();
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
    SMTLIBv2Parser.prototype.model_response = function () {
        var _localctx = new Model_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, SMTLIBv2Parser.RULE_model_response);
        var _la;
        try {
            this.state = 973;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 945;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 946;
                        this.match(SMTLIBv2Parser.CMD_DefineFun);
                        this.state = 947;
                        this.function_def();
                        this.state = 948;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 950;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 951;
                        this.match(SMTLIBv2Parser.CMD_DefineFunRec);
                        this.state = 952;
                        this.function_def();
                        this.state = 953;
                        this.match(SMTLIBv2Parser.ParClose);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 955;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 956;
                        this.match(SMTLIBv2Parser.CMD_DefineFunsRec);
                        this.state = 957;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 959;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 958;
                                    this.function_dec();
                                }
                            }
                            this.state = 961;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SMTLIBv2Parser.ParOpen);
                        this.state = 963;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 964;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 966;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 965;
                                    this.term();
                                }
                            }
                            this.state = 968;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.String) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SMTLIBv2Parser.Numeral - 66)) | (1 << (SMTLIBv2Parser.Binary - 66)) | (1 << (SMTLIBv2Parser.HexDecimal - 66)) | (1 << (SMTLIBv2Parser.Decimal - 66)))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol);
                        this.state = 970;
                        this.match(SMTLIBv2Parser.ParClose);
                        this.state = 971;
                        this.match(SMTLIBv2Parser.ParClose);
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
    SMTLIBv2Parser.prototype.info_response = function () {
        var _localctx = new Info_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, SMTLIBv2Parser.RULE_info_response);
        try {
            this.state = 988;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 975;
                        this.match(SMTLIBv2Parser.PK_AssertionStackLevels);
                        this.state = 976;
                        this.numeral();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 977;
                        this.match(SMTLIBv2Parser.PK_Authors);
                        this.state = 978;
                        this.string();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 979;
                        this.match(SMTLIBv2Parser.PK_ErrorBehaviour);
                        this.state = 980;
                        this.error_behaviour();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 981;
                        this.match(SMTLIBv2Parser.PK_Name);
                        this.state = 982;
                        this.string();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 983;
                        this.match(SMTLIBv2Parser.PK_ReasonUnknown);
                        this.state = 984;
                        this.reason_unknown();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 985;
                        this.match(SMTLIBv2Parser.PK_Version);
                        this.state = 986;
                        this.string();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 987;
                        this.attribute();
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
    SMTLIBv2Parser.prototype.valuation_pair = function () {
        var _localctx = new Valuation_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, SMTLIBv2Parser.RULE_valuation_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 990;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 991;
                this.term();
                this.state = 992;
                this.term();
                this.state = 993;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.t_valuation_pair = function () {
        var _localctx = new T_valuation_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, SMTLIBv2Parser.RULE_t_valuation_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 996;
                this.symbol();
                this.state = 997;
                this.b_value();
                this.state = 998;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.check_sat_response = function () {
        var _localctx = new Check_sat_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, SMTLIBv2Parser.RULE_check_sat_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1000;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0))) {
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
    SMTLIBv2Parser.prototype.echo_response = function () {
        var _localctx = new Echo_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, SMTLIBv2Parser.RULE_echo_response);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1002;
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
    SMTLIBv2Parser.prototype.get_assertions_response = function () {
        var _localctx = new Get_assertions_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, SMTLIBv2Parser.RULE_get_assertions_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1004;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 1008;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.ParOpen) | (1 << SMTLIBv2Parser.String) | (1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SMTLIBv2Parser.Numeral - 66)) | (1 << (SMTLIBv2Parser.Binary - 66)) | (1 << (SMTLIBv2Parser.HexDecimal - 66)) | (1 << (SMTLIBv2Parser.Decimal - 66)))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol) {
                    {
                        {
                            this.state = 1005;
                            this.term();
                        }
                    }
                    this.state = 1010;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1011;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_assignment_response = function () {
        var _localctx = new Get_assignment_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, SMTLIBv2Parser.RULE_get_assignment_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1013;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 1017;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SMTLIBv2Parser.ParOpen) {
                    {
                        {
                            this.state = 1014;
                            this.t_valuation_pair();
                        }
                    }
                    this.state = 1019;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1020;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_info_response = function () {
        var _localctx = new Get_info_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, SMTLIBv2Parser.RULE_get_info_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1022;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 1024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1023;
                            this.info_response();
                        }
                    }
                    this.state = 1026;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SMTLIBv2Parser.Colon - 70)) | (1 << (SMTLIBv2Parser.PK_AllStatistics - 70)) | (1 << (SMTLIBv2Parser.PK_AssertionStackLevels - 70)) | (1 << (SMTLIBv2Parser.PK_Authors - 70)) | (1 << (SMTLIBv2Parser.PK_Category - 70)) | (1 << (SMTLIBv2Parser.PK_Chainable - 70)) | (1 << (SMTLIBv2Parser.PK_Definition - 70)) | (1 << (SMTLIBv2Parser.PK_DiagnosticOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ErrorBehaviour - 70)) | (1 << (SMTLIBv2Parser.PK_Extension - 70)) | (1 << (SMTLIBv2Parser.PK_Funs - 70)) | (1 << (SMTLIBv2Parser.PK_FunsDescription - 70)) | (1 << (SMTLIBv2Parser.PK_GlobalDeclarations - 70)) | (1 << (SMTLIBv2Parser.PK_InteractiveMode - 70)) | (1 << (SMTLIBv2Parser.PK_Language - 70)) | (1 << (SMTLIBv2Parser.PK_LeftAssoc - 70)) | (1 << (SMTLIBv2Parser.PK_License - 70)) | (1 << (SMTLIBv2Parser.PK_Named - 70)) | (1 << (SMTLIBv2Parser.PK_Name - 70)) | (1 << (SMTLIBv2Parser.PK_Notes - 70)) | (1 << (SMTLIBv2Parser.PK_Pattern - 70)) | (1 << (SMTLIBv2Parser.PK_PrintSuccess - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssertions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceAssignments - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceModels - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceProofs - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatAssumptions - 70)) | (1 << (SMTLIBv2Parser.PK_ProduceUnsatCores - 70)) | (1 << (SMTLIBv2Parser.PK_RandomSeed - 70)) | (1 << (SMTLIBv2Parser.PK_ReasonUnknown - 70)) | (1 << (SMTLIBv2Parser.PK_RegularOutputChannel - 70)) | (1 << (SMTLIBv2Parser.PK_ReproducibleResourceLimit - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SMTLIBv2Parser.PK_RightAssoc - 102)) | (1 << (SMTLIBv2Parser.PK_SmtLibVersion - 102)) | (1 << (SMTLIBv2Parser.PK_Sorts - 102)) | (1 << (SMTLIBv2Parser.PK_SortsDescription - 102)) | (1 << (SMTLIBv2Parser.PK_Source - 102)) | (1 << (SMTLIBv2Parser.PK_Status - 102)) | (1 << (SMTLIBv2Parser.PK_Theories - 102)) | (1 << (SMTLIBv2Parser.PK_Values - 102)) | (1 << (SMTLIBv2Parser.PK_Verbosity - 102)) | (1 << (SMTLIBv2Parser.PK_Version - 102)))) !== 0));
                this.state = 1028;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_model_response = function () {
        var _localctx = new Get_model_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, SMTLIBv2Parser.RULE_get_model_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1030;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 1034;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SMTLIBv2Parser.ParOpen) {
                    {
                        {
                            this.state = 1031;
                            this.model_response();
                        }
                    }
                    this.state = 1036;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1037;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_option_response = function () {
        var _localctx = new Get_option_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, SMTLIBv2Parser.RULE_get_option_response);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1039;
                this.attribute_value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_proof_response = function () {
        var _localctx = new Get_proof_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, SMTLIBv2Parser.RULE_get_proof_response);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1041;
                this.s_expr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_unsat_assump_response = function () {
        var _localctx = new Get_unsat_assump_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, SMTLIBv2Parser.RULE_get_unsat_assump_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1043;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 1047;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol) {
                    {
                        {
                            this.state = 1044;
                            this.symbol();
                        }
                    }
                    this.state = 1049;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1050;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_unsat_core_response = function () {
        var _localctx = new Get_unsat_core_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, SMTLIBv2Parser.RULE_get_unsat_core_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1052;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 1056;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SMTLIBv2Parser.QuotedSymbol) | (1 << SMTLIBv2Parser.PS_Not) | (1 << SMTLIBv2Parser.PS_Bool) | (1 << SMTLIBv2Parser.PS_ContinuedExecution) | (1 << SMTLIBv2Parser.PS_Error) | (1 << SMTLIBv2Parser.PS_False) | (1 << SMTLIBv2Parser.PS_ImmediateExit) | (1 << SMTLIBv2Parser.PS_Incomplete) | (1 << SMTLIBv2Parser.PS_Logic) | (1 << SMTLIBv2Parser.PS_Memout) | (1 << SMTLIBv2Parser.PS_Sat) | (1 << SMTLIBv2Parser.PS_Success) | (1 << SMTLIBv2Parser.PS_Theory) | (1 << SMTLIBv2Parser.PS_True) | (1 << SMTLIBv2Parser.PS_Unknown) | (1 << SMTLIBv2Parser.PS_Unsupported) | (1 << SMTLIBv2Parser.PS_Unsat))) !== 0) || _la === SMTLIBv2Parser.UndefinedSymbol) {
                    {
                        {
                            this.state = 1053;
                            this.symbol();
                        }
                    }
                    this.state = 1058;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1059;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.get_value_response = function () {
        var _localctx = new Get_value_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, SMTLIBv2Parser.RULE_get_value_response);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1061;
                this.match(SMTLIBv2Parser.ParOpen);
                this.state = 1063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1062;
                            this.valuation_pair();
                        }
                    }
                    this.state = 1065;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SMTLIBv2Parser.ParOpen);
                this.state = 1067;
                this.match(SMTLIBv2Parser.ParClose);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SMTLIBv2Parser.prototype.specific_success_response = function () {
        var _localctx = new Specific_success_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, SMTLIBv2Parser.RULE_specific_success_response);
        try {
            this.state = 1080;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1069;
                        this.check_sat_response();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1070;
                        this.echo_response();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1071;
                        this.get_assertions_response();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1072;
                        this.get_assignment_response();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1073;
                        this.get_info_response();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1074;
                        this.get_model_response();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1075;
                        this.get_option_response();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1076;
                        this.get_proof_response();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1077;
                        this.get_unsat_assump_response();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1078;
                        this.get_unsat_core_response();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1079;
                        this.get_value_response();
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
    SMTLIBv2Parser.prototype.general_response = function () {
        var _localctx = new General_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, SMTLIBv2Parser.RULE_general_response);
        try {
            this.state = 1090;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1082;
                        this.match(SMTLIBv2Parser.PS_Success);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1083;
                        this.specific_success_response();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1084;
                        this.match(SMTLIBv2Parser.PS_Unsupported);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1085;
                        this.match(SMTLIBv2Parser.ParOpen);
                        this.state = 1086;
                        this.match(SMTLIBv2Parser.PS_Error);
                        this.state = 1087;
                        this.string();
                        this.state = 1088;
                        this.match(SMTLIBv2Parser.ParClose);
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
    Object.defineProperty(SMTLIBv2Parser, "_ATN", {
        get: function () {
            if (!SMTLIBv2Parser.__ATN) {
                SMTLIBv2Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SMTLIBv2Parser._serializedATN));
            }
            return SMTLIBv2Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SMTLIBv2Parser.Comment = 1;
    SMTLIBv2Parser.ParOpen = 2;
    SMTLIBv2Parser.ParClose = 3;
    SMTLIBv2Parser.Semicolon = 4;
    SMTLIBv2Parser.String = 5;
    SMTLIBv2Parser.QuotedSymbol = 6;
    SMTLIBv2Parser.PS_Not = 7;
    SMTLIBv2Parser.PS_Bool = 8;
    SMTLIBv2Parser.PS_ContinuedExecution = 9;
    SMTLIBv2Parser.PS_Error = 10;
    SMTLIBv2Parser.PS_False = 11;
    SMTLIBv2Parser.PS_ImmediateExit = 12;
    SMTLIBv2Parser.PS_Incomplete = 13;
    SMTLIBv2Parser.PS_Logic = 14;
    SMTLIBv2Parser.PS_Memout = 15;
    SMTLIBv2Parser.PS_Sat = 16;
    SMTLIBv2Parser.PS_Success = 17;
    SMTLIBv2Parser.PS_Theory = 18;
    SMTLIBv2Parser.PS_True = 19;
    SMTLIBv2Parser.PS_Unknown = 20;
    SMTLIBv2Parser.PS_Unsupported = 21;
    SMTLIBv2Parser.PS_Unsat = 22;
    SMTLIBv2Parser.CMD_Assert = 23;
    SMTLIBv2Parser.CMD_CheckSat = 24;
    SMTLIBv2Parser.CMD_CheckSatAssuming = 25;
    SMTLIBv2Parser.CMD_DeclareConst = 26;
    SMTLIBv2Parser.CMD_DeclareDatatype = 27;
    SMTLIBv2Parser.CMD_DeclareDatatypes = 28;
    SMTLIBv2Parser.CMD_DeclareFun = 29;
    SMTLIBv2Parser.CMD_DeclareSort = 30;
    SMTLIBv2Parser.CMD_DefineFun = 31;
    SMTLIBv2Parser.CMD_DefineFunRec = 32;
    SMTLIBv2Parser.CMD_DefineFunsRec = 33;
    SMTLIBv2Parser.CMD_DefineSort = 34;
    SMTLIBv2Parser.CMD_Echo = 35;
    SMTLIBv2Parser.CMD_Exit = 36;
    SMTLIBv2Parser.CMD_GetAssertions = 37;
    SMTLIBv2Parser.CMD_GetAssignment = 38;
    SMTLIBv2Parser.CMD_GetInfo = 39;
    SMTLIBv2Parser.CMD_GetModel = 40;
    SMTLIBv2Parser.CMD_GetOption = 41;
    SMTLIBv2Parser.CMD_GetProof = 42;
    SMTLIBv2Parser.CMD_GetUnsatAssumptions = 43;
    SMTLIBv2Parser.CMD_GetUnsatCore = 44;
    SMTLIBv2Parser.CMD_GetValue = 45;
    SMTLIBv2Parser.CMD_Pop = 46;
    SMTLIBv2Parser.CMD_Push = 47;
    SMTLIBv2Parser.CMD_Reset = 48;
    SMTLIBv2Parser.CMD_ResetAssertions = 49;
    SMTLIBv2Parser.CMD_SetInfo = 50;
    SMTLIBv2Parser.CMD_SetLogic = 51;
    SMTLIBv2Parser.CMD_SetOption = 52;
    SMTLIBv2Parser.GRW_Exclamation = 53;
    SMTLIBv2Parser.GRW_Underscore = 54;
    SMTLIBv2Parser.GRW_As = 55;
    SMTLIBv2Parser.GRW_Binary = 56;
    SMTLIBv2Parser.GRW_Decimal = 57;
    SMTLIBv2Parser.GRW_Exists = 58;
    SMTLIBv2Parser.GRW_Hexadecimal = 59;
    SMTLIBv2Parser.GRW_Forall = 60;
    SMTLIBv2Parser.GRW_Let = 61;
    SMTLIBv2Parser.GRW_Match = 62;
    SMTLIBv2Parser.GRW_Numeral = 63;
    SMTLIBv2Parser.GRW_Par = 64;
    SMTLIBv2Parser.GRW_String = 65;
    SMTLIBv2Parser.Numeral = 66;
    SMTLIBv2Parser.Binary = 67;
    SMTLIBv2Parser.HexDecimal = 68;
    SMTLIBv2Parser.Decimal = 69;
    SMTLIBv2Parser.Colon = 70;
    SMTLIBv2Parser.PK_AllStatistics = 71;
    SMTLIBv2Parser.PK_AssertionStackLevels = 72;
    SMTLIBv2Parser.PK_Authors = 73;
    SMTLIBv2Parser.PK_Category = 74;
    SMTLIBv2Parser.PK_Chainable = 75;
    SMTLIBv2Parser.PK_Definition = 76;
    SMTLIBv2Parser.PK_DiagnosticOutputChannel = 77;
    SMTLIBv2Parser.PK_ErrorBehaviour = 78;
    SMTLIBv2Parser.PK_Extension = 79;
    SMTLIBv2Parser.PK_Funs = 80;
    SMTLIBv2Parser.PK_FunsDescription = 81;
    SMTLIBv2Parser.PK_GlobalDeclarations = 82;
    SMTLIBv2Parser.PK_InteractiveMode = 83;
    SMTLIBv2Parser.PK_Language = 84;
    SMTLIBv2Parser.PK_LeftAssoc = 85;
    SMTLIBv2Parser.PK_License = 86;
    SMTLIBv2Parser.PK_Named = 87;
    SMTLIBv2Parser.PK_Name = 88;
    SMTLIBv2Parser.PK_Notes = 89;
    SMTLIBv2Parser.PK_Pattern = 90;
    SMTLIBv2Parser.PK_PrintSuccess = 91;
    SMTLIBv2Parser.PK_ProduceAssertions = 92;
    SMTLIBv2Parser.PK_ProduceAssignments = 93;
    SMTLIBv2Parser.PK_ProduceModels = 94;
    SMTLIBv2Parser.PK_ProduceProofs = 95;
    SMTLIBv2Parser.PK_ProduceUnsatAssumptions = 96;
    SMTLIBv2Parser.PK_ProduceUnsatCores = 97;
    SMTLIBv2Parser.PK_RandomSeed = 98;
    SMTLIBv2Parser.PK_ReasonUnknown = 99;
    SMTLIBv2Parser.PK_RegularOutputChannel = 100;
    SMTLIBv2Parser.PK_ReproducibleResourceLimit = 101;
    SMTLIBv2Parser.PK_RightAssoc = 102;
    SMTLIBv2Parser.PK_SmtLibVersion = 103;
    SMTLIBv2Parser.PK_Sorts = 104;
    SMTLIBv2Parser.PK_SortsDescription = 105;
    SMTLIBv2Parser.PK_Source = 106;
    SMTLIBv2Parser.PK_Status = 107;
    SMTLIBv2Parser.PK_Theories = 108;
    SMTLIBv2Parser.PK_Values = 109;
    SMTLIBv2Parser.PK_Verbosity = 110;
    SMTLIBv2Parser.PK_Version = 111;
    SMTLIBv2Parser.UndefinedSymbol = 112;
    SMTLIBv2Parser.WS = 113;
    SMTLIBv2Parser.RULE_start = 0;
    SMTLIBv2Parser.RULE_response = 1;
    SMTLIBv2Parser.RULE_generalReservedWord = 2;
    SMTLIBv2Parser.RULE_simpleSymbol = 3;
    SMTLIBv2Parser.RULE_quotedSymbol = 4;
    SMTLIBv2Parser.RULE_predefSymbol = 5;
    SMTLIBv2Parser.RULE_predefKeyword = 6;
    SMTLIBv2Parser.RULE_symbol = 7;
    SMTLIBv2Parser.RULE_numeral = 8;
    SMTLIBv2Parser.RULE_decimal = 9;
    SMTLIBv2Parser.RULE_hexadecimal = 10;
    SMTLIBv2Parser.RULE_binary = 11;
    SMTLIBv2Parser.RULE_string = 12;
    SMTLIBv2Parser.RULE_keyword = 13;
    SMTLIBv2Parser.RULE_spec_constant = 14;
    SMTLIBv2Parser.RULE_s_expr = 15;
    SMTLIBv2Parser.RULE_index = 16;
    SMTLIBv2Parser.RULE_identifier = 17;
    SMTLIBv2Parser.RULE_attribute_value = 18;
    SMTLIBv2Parser.RULE_attribute = 19;
    SMTLIBv2Parser.RULE_sort = 20;
    SMTLIBv2Parser.RULE_qual_identifer = 21;
    SMTLIBv2Parser.RULE_var_binding = 22;
    SMTLIBv2Parser.RULE_sorted_var = 23;
    SMTLIBv2Parser.RULE_pattern = 24;
    SMTLIBv2Parser.RULE_match_case = 25;
    SMTLIBv2Parser.RULE_term = 26;
    SMTLIBv2Parser.RULE_sort_symbol_decl = 27;
    SMTLIBv2Parser.RULE_meta_spec_constant = 28;
    SMTLIBv2Parser.RULE_fun_symbol_decl = 29;
    SMTLIBv2Parser.RULE_par_fun_symbol_decl = 30;
    SMTLIBv2Parser.RULE_theory_attribute = 31;
    SMTLIBv2Parser.RULE_theory_decl = 32;
    SMTLIBv2Parser.RULE_logic_attribue = 33;
    SMTLIBv2Parser.RULE_logic = 34;
    SMTLIBv2Parser.RULE_sort_dec = 35;
    SMTLIBv2Parser.RULE_selector_dec = 36;
    SMTLIBv2Parser.RULE_constructor_dec = 37;
    SMTLIBv2Parser.RULE_datatype_dec = 38;
    SMTLIBv2Parser.RULE_function_dec = 39;
    SMTLIBv2Parser.RULE_function_def = 40;
    SMTLIBv2Parser.RULE_prop_literal = 41;
    SMTLIBv2Parser.RULE_script = 42;
    SMTLIBv2Parser.RULE_cmd_assert = 43;
    SMTLIBv2Parser.RULE_cmd_checkSat = 44;
    SMTLIBv2Parser.RULE_cmd_checkSatAssuming = 45;
    SMTLIBv2Parser.RULE_cmd_declareConst = 46;
    SMTLIBv2Parser.RULE_cmd_declareDatatype = 47;
    SMTLIBv2Parser.RULE_cmd_declareDatatypes = 48;
    SMTLIBv2Parser.RULE_cmd_declareFun = 49;
    SMTLIBv2Parser.RULE_cmd_declareSort = 50;
    SMTLIBv2Parser.RULE_cmd_defineFun = 51;
    SMTLIBv2Parser.RULE_cmd_defineFunRec = 52;
    SMTLIBv2Parser.RULE_cmd_defineFunsRec = 53;
    SMTLIBv2Parser.RULE_cmd_defineSort = 54;
    SMTLIBv2Parser.RULE_cmd_echo = 55;
    SMTLIBv2Parser.RULE_cmd_exit = 56;
    SMTLIBv2Parser.RULE_cmd_getAssertions = 57;
    SMTLIBv2Parser.RULE_cmd_getAssignment = 58;
    SMTLIBv2Parser.RULE_cmd_getInfo = 59;
    SMTLIBv2Parser.RULE_cmd_getModel = 60;
    SMTLIBv2Parser.RULE_cmd_getOption = 61;
    SMTLIBv2Parser.RULE_cmd_getProof = 62;
    SMTLIBv2Parser.RULE_cmd_getUnsatAssumptions = 63;
    SMTLIBv2Parser.RULE_cmd_getUnsatCore = 64;
    SMTLIBv2Parser.RULE_cmd_getValue = 65;
    SMTLIBv2Parser.RULE_cmd_pop = 66;
    SMTLIBv2Parser.RULE_cmd_push = 67;
    SMTLIBv2Parser.RULE_cmd_reset = 68;
    SMTLIBv2Parser.RULE_cmd_resetAssertions = 69;
    SMTLIBv2Parser.RULE_cmd_setInfo = 70;
    SMTLIBv2Parser.RULE_cmd_setLogic = 71;
    SMTLIBv2Parser.RULE_cmd_setOption = 72;
    SMTLIBv2Parser.RULE_command = 73;
    SMTLIBv2Parser.RULE_b_value = 74;
    SMTLIBv2Parser.RULE_option = 75;
    SMTLIBv2Parser.RULE_info_flag = 76;
    SMTLIBv2Parser.RULE_error_behaviour = 77;
    SMTLIBv2Parser.RULE_reason_unknown = 78;
    SMTLIBv2Parser.RULE_model_response = 79;
    SMTLIBv2Parser.RULE_info_response = 80;
    SMTLIBv2Parser.RULE_valuation_pair = 81;
    SMTLIBv2Parser.RULE_t_valuation_pair = 82;
    SMTLIBv2Parser.RULE_check_sat_response = 83;
    SMTLIBv2Parser.RULE_echo_response = 84;
    SMTLIBv2Parser.RULE_get_assertions_response = 85;
    SMTLIBv2Parser.RULE_get_assignment_response = 86;
    SMTLIBv2Parser.RULE_get_info_response = 87;
    SMTLIBv2Parser.RULE_get_model_response = 88;
    SMTLIBv2Parser.RULE_get_option_response = 89;
    SMTLIBv2Parser.RULE_get_proof_response = 90;
    SMTLIBv2Parser.RULE_get_unsat_assump_response = 91;
    SMTLIBv2Parser.RULE_get_unsat_core_response = 92;
    SMTLIBv2Parser.RULE_get_value_response = 93;
    SMTLIBv2Parser.RULE_specific_success_response = 94;
    SMTLIBv2Parser.RULE_general_response = 95;
    // tslint:disable:no-trailing-whitespace
    SMTLIBv2Parser.ruleNames = [
        "start", "response", "generalReservedWord", "simpleSymbol", "quotedSymbol",
        "predefSymbol", "predefKeyword", "symbol", "numeral", "decimal", "hexadecimal",
        "binary", "string", "keyword", "spec_constant", "s_expr", "index", "identifier",
        "attribute_value", "attribute", "sort", "qual_identifer", "var_binding",
        "sorted_var", "pattern", "match_case", "term", "sort_symbol_decl", "meta_spec_constant",
        "fun_symbol_decl", "par_fun_symbol_decl", "theory_attribute", "theory_decl",
        "logic_attribue", "logic", "sort_dec", "selector_dec", "constructor_dec",
        "datatype_dec", "function_dec", "function_def", "prop_literal", "script",
        "cmd_assert", "cmd_checkSat", "cmd_checkSatAssuming", "cmd_declareConst",
        "cmd_declareDatatype", "cmd_declareDatatypes", "cmd_declareFun", "cmd_declareSort",
        "cmd_defineFun", "cmd_defineFunRec", "cmd_defineFunsRec", "cmd_defineSort",
        "cmd_echo", "cmd_exit", "cmd_getAssertions", "cmd_getAssignment", "cmd_getInfo",
        "cmd_getModel", "cmd_getOption", "cmd_getProof", "cmd_getUnsatAssumptions",
        "cmd_getUnsatCore", "cmd_getValue", "cmd_pop", "cmd_push", "cmd_reset",
        "cmd_resetAssertions", "cmd_setInfo", "cmd_setLogic", "cmd_setOption",
        "command", "b_value", "option", "info_flag", "error_behaviour", "reason_unknown",
        "model_response", "info_response", "valuation_pair", "t_valuation_pair",
        "check_sat_response", "echo_response", "get_assertions_response", "get_assignment_response",
        "get_info_response", "get_model_response", "get_option_response", "get_proof_response",
        "get_unsat_assump_response", "get_unsat_core_response", "get_value_response",
        "specific_success_response", "general_response",
    ];
    SMTLIBv2Parser._LITERAL_NAMES = [
        undefined, undefined, "'('", "')'", "';'", undefined, undefined, "'not'",
        "'Bool'", "'continued-execution'", "'error'", "'false'", "'immediate-exit'",
        "'incomplete'", "'logic'", "'memout'", "'sat'", "'success'", "'theory'",
        "'true'", "'unknown'", "'unsupported'", "'unsat'", "'assert'", "'check-sat'",
        "'check-sat-assuming'", "'declare-const'", "'declare-datatype'", "'declare-datatypes'",
        "'declare-fun'", "'declare-sort'", "'define-fun'", "'define-fun-rec'",
        "'define-funs-rec'", "'define-sort'", "'echo'", "'exit'", "'get-assertions'",
        "'get-assignment'", "'get-info'", "'get-model'", "'get-option'", "'get-proof'",
        "'get-unsat-assumptions'", "'get-unsat-core'", "'get-value'", "'pop'",
        "'push'", "'reset'", "'reset-assertions'", "'set-info'", "'set-logic'",
        "'set-option'", "'!'", "'_'", "'as'", "'BINARY'", "'DECIMAL'", "'exists'",
        "'HEXADECIMAL'", "'forall'", "'let'", "'match'", "'NUMERAL'", "'par'",
        "'string'", undefined, undefined, undefined, undefined, "':'", "':all-statistics'",
        "':assertion-stack-levels'", "':authors'", "':category'", "':chainable'",
        "':definition'", "':diagnostic-output-channel'", "':error-behavior'",
        "':extensions'", "':funs'", "':funs-description'", "':global-declarations'",
        "':interactive-mode'", "':language'", "':left-assoc'", "':license'", "':named'",
        "':name'", "':notes'", "':pattern'", "':print-success'", "':produce-assertions'",
        "':produce-assignments'", "':produce-models'", "':produce-proofs'", "':produce-unsat-assumptions'",
        "':produce-unsat-cores'", "':random-seed'", "':reason-unknown'", "':regular-output-channel'",
        "':reproducible-resource-limit'", "':right-assoc'", "':smt-lib-version'",
        "':sorts'", "':sorts-description'", "':source'", "':status'", "':theories'",
        "':values'", "':verbosity'", "':version'",
    ];
    SMTLIBv2Parser._SYMBOLIC_NAMES = [
        undefined, "Comment", "ParOpen", "ParClose", "Semicolon", "String", "QuotedSymbol",
        "PS_Not", "PS_Bool", "PS_ContinuedExecution", "PS_Error", "PS_False",
        "PS_ImmediateExit", "PS_Incomplete", "PS_Logic", "PS_Memout", "PS_Sat",
        "PS_Success", "PS_Theory", "PS_True", "PS_Unknown", "PS_Unsupported",
        "PS_Unsat", "CMD_Assert", "CMD_CheckSat", "CMD_CheckSatAssuming", "CMD_DeclareConst",
        "CMD_DeclareDatatype", "CMD_DeclareDatatypes", "CMD_DeclareFun", "CMD_DeclareSort",
        "CMD_DefineFun", "CMD_DefineFunRec", "CMD_DefineFunsRec", "CMD_DefineSort",
        "CMD_Echo", "CMD_Exit", "CMD_GetAssertions", "CMD_GetAssignment", "CMD_GetInfo",
        "CMD_GetModel", "CMD_GetOption", "CMD_GetProof", "CMD_GetUnsatAssumptions",
        "CMD_GetUnsatCore", "CMD_GetValue", "CMD_Pop", "CMD_Push", "CMD_Reset",
        "CMD_ResetAssertions", "CMD_SetInfo", "CMD_SetLogic", "CMD_SetOption",
        "GRW_Exclamation", "GRW_Underscore", "GRW_As", "GRW_Binary", "GRW_Decimal",
        "GRW_Exists", "GRW_Hexadecimal", "GRW_Forall", "GRW_Let", "GRW_Match",
        "GRW_Numeral", "GRW_Par", "GRW_String", "Numeral", "Binary", "HexDecimal",
        "Decimal", "Colon", "PK_AllStatistics", "PK_AssertionStackLevels", "PK_Authors",
        "PK_Category", "PK_Chainable", "PK_Definition", "PK_DiagnosticOutputChannel",
        "PK_ErrorBehaviour", "PK_Extension", "PK_Funs", "PK_FunsDescription",
        "PK_GlobalDeclarations", "PK_InteractiveMode", "PK_Language", "PK_LeftAssoc",
        "PK_License", "PK_Named", "PK_Name", "PK_Notes", "PK_Pattern", "PK_PrintSuccess",
        "PK_ProduceAssertions", "PK_ProduceAssignments", "PK_ProduceModels", "PK_ProduceProofs",
        "PK_ProduceUnsatAssumptions", "PK_ProduceUnsatCores", "PK_RandomSeed",
        "PK_ReasonUnknown", "PK_RegularOutputChannel", "PK_ReproducibleResourceLimit",
        "PK_RightAssoc", "PK_SmtLibVersion", "PK_Sorts", "PK_SortsDescription",
        "PK_Source", "PK_Status", "PK_Theories", "PK_Values", "PK_Verbosity",
        "PK_Version", "UndefinedSymbol", "WS",
    ];
    SMTLIBv2Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SMTLIBv2Parser._LITERAL_NAMES, SMTLIBv2Parser._SYMBOLIC_NAMES, []);
    SMTLIBv2Parser._serializedATNSegments = 2;
    SMTLIBv2Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03s\u0447\x04\x02" +
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
        "`\x04a\ta\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x05\x05\xCD\n\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\t\x03\t\x05\t\xD7\n\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
        "\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE6\n\x0F" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xED\n\x10\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x03\x11\x07\x11\xF4\n\x11\f\x11\x0E\x11\xF7\v\x11" +
        "\x03\x11\x05\x11\xFA\n\x11\x03\x12\x03\x12\x05\x12\xFE\n\x12\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x06\x13\u0105\n\x13\r\x13\x0E\x13\u0106\x03" +
        "\x13\x03\x13\x05\x13\u010B\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
        "\u0111\n\x14\f\x14\x0E\x14\u0114\v\x14\x03\x14\x05\x14\u0117\n\x14\x03" +
        "\x15\x03\x15\x03\x15\x03\x15\x05\x15\u011D\n\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x06\x16\u0123\n\x16\r\x16\x0E\x16\u0124\x03\x16\x03\x16\x05\x16" +
        "\u0129\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05" +
        "\x17\u0132\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x06\x1A\u0142" +
        "\n\x1A\r\x1A\x0E\x1A\u0143\x03\x1A\x03\x1A\x05\x1A\u0148\n\x1A\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x06\x1C\u0154\n\x1C\r\x1C\x0E\x1C\u0155\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x06\x1C\u015E\n\x1C\r\x1C\x0E\x1C\u015F\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C\u016A\n\x1C\r" +
        "\x1C\x0E\x1C\u016B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x06\x1C\u0176\n\x1C\r\x1C\x0E\x1C\u0177\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C\u0183\n\x1C" +
        "\r\x1C\x0E\x1C\u0184\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x06\x1C\u018E\n\x1C\r\x1C\x0E\x1C\u018F\x03\x1C\x03\x1C\x05\x1C\u0194" +
        "\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u019A\n\x1D\f\x1D\x0E\x1D" +
        "\u019D\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x07\x1F\u01A7\n\x1F\f\x1F\x0E\x1F\u01AA\v\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01B2\n\x1F\f\x1F\x0E\x1F\u01B5\v" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u01BC\n\x1F\r\x1F" +
        "\x0E\x1F\u01BD\x03\x1F\x07\x1F\u01C1\n\x1F\f\x1F\x0E\x1F\u01C4\v\x1F\x03" +
        "\x1F\x03\x1F\x05\x1F\u01C8\n\x1F\x03 \x03 \x03 \x03 \x03 \x06 \u01CF\n" +
        " \r \x0E \u01D0\x03 \x03 \x03 \x03 \x06 \u01D7\n \r \x0E \u01D8\x03 \x07" +
        " \u01DC\n \f \x0E \u01DF\v \x03 \x03 \x03 \x05 \u01E4\n \x03!\x03!\x03" +
        "!\x06!\u01E9\n!\r!\x0E!\u01EA\x03!\x03!\x03!\x03!\x03!\x06!\u01F2\n!\r" +
        "!\x0E!\u01F3\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x05!\u0203\n!\x03\"\x03\"\x03\"\x03\"\x06\"\u0209\n\"\r\"\x0E\"" +
        "\u020A\x03\"\x03\"\x03#\x03#\x03#\x06#\u0212\n#\r#\x0E#\u0213\x03#\x03" +
        "#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0221\n#\x03$\x03" +
        "$\x03$\x03$\x06$\u0227\n$\r$\x0E$\u0228\x03$\x03$\x03%\x03%\x03%\x03%" +
        "\x03%\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x07\'\u023A\n\'\f\'\x0E" +
        "\'\u023D\v\'\x03\'\x03\'\x03(\x03(\x06(\u0243\n(\r(\x0E(\u0244\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x06(\u024D\n(\r(\x0E(\u024E\x03(\x03(\x03(\x06(" +
        "\u0254\n(\r(\x0E(\u0255\x03(\x03(\x03(\x05(\u025B\n(\x03)\x03)\x03)\x03" +
        ")\x07)\u0261\n)\f)\x0E)\u0264\v)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x07" +
        "*\u026D\n*\f*\x0E*\u0270\v*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
        "+\x03+\x05+\u027C\n+\x03,\x07,\u027F\n,\f,\x0E,\u0282\v,\x03-\x03-\x03" +
        ".\x03.\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x034\x03" +
        "5\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03" +
        "<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03" +
        "C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03" +
        "J\x03J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x06K\u02DD\nK\rK\x0EK\u02DE\x03K\x03K\x03K\x06K\u02E4\nK\r" +
        "K\x0EK\u02E5\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u02F0\nK\fK" +
        "\x0EK\u02F3\vK\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K" +
        "\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x06" +
        "K\u030D\nK\rK\x0EK\u030E\x03K\x03K\x03K\x06K\u0314\nK\rK\x0EK\u0315\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u0320\nK\fK\x0EK\u0323\vK\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x06K\u0358\nK\rK\x0EK\u0359" +
        "\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0380\nK\x03L\x03L\x03" +
        "M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
        "M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
        "M\x05M\u03A1\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u03AB\nN" +
        "\x03O\x03O\x03P\x03P\x03P\x05P\u03B2\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q" +
        "\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x06Q\u03C2\nQ\rQ\x0EQ\u03C3\x03" +
        "Q\x03Q\x03Q\x06Q\u03C9\nQ\rQ\x0EQ\u03CA\x03Q\x03Q\x03Q\x05Q\u03D0\nQ\x03" +
        "R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u03DF" +
        "\nR\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03U\x03U\x03V\x03" +
        "V\x03W\x03W\x07W\u03F1\nW\fW\x0EW\u03F4\vW\x03W\x03W\x03X\x03X\x07X\u03FA" +
        "\nX\fX\x0EX\u03FD\vX\x03X\x03X\x03Y\x03Y\x06Y\u0403\nY\rY\x0EY\u0404\x03" +
        "Y\x03Y\x03Z\x03Z\x07Z\u040B\nZ\fZ\x0EZ\u040E\vZ\x03Z\x03Z\x03[\x03[\x03" +
        "\\\x03\\\x03]\x03]\x07]\u0418\n]\f]\x0E]\u041B\v]\x03]\x03]\x03^\x03^" +
        "\x07^\u0421\n^\f^\x0E^\u0424\v^\x03^\x03^\x03_\x03_\x06_\u042A\n_\r_\x0E" +
        "_\u042B\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
        "`\x05`\u043B\n`\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x05a\u0445\na" +
        "\x03a\x02\x02\x02b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
        "\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
        "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
        "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
        "\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
        "x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
        "\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
        "\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
        "\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\x02" +
        "\t\x03\x027C\x03\x02\t\x18\x03\x02Iq\x05\x02;;AACC\x04\x02\r\r\x15\x15" +
        "\x04\x02\v\v\x0E\x0E\x05\x02\x12\x12\x16\x16\x18\x18\x02\u0488\x02\xC2" +
        "\x03\x02\x02\x02\x04\xC5\x03\x02\x02\x02\x06\xC8\x03\x02\x02\x02\b\xCC" +
        "\x03\x02\x02\x02\n\xCE\x03\x02\x02\x02\f\xD0\x03\x02\x02\x02\x0E\xD2\x03" +
        "\x02\x02\x02\x10\xD6\x03\x02\x02\x02\x12\xD8\x03\x02\x02\x02\x14\xDA\x03" +
        "\x02\x02\x02\x16\xDC\x03\x02\x02\x02\x18\xDE\x03\x02\x02\x02\x1A\xE0\x03" +
        "\x02\x02\x02\x1C\xE5\x03\x02\x02\x02\x1E\xEC\x03\x02\x02\x02 \xF9\x03" +
        "\x02\x02\x02\"\xFD\x03\x02\x02\x02$\u010A\x03\x02\x02\x02&\u0116\x03\x02" +
        "\x02\x02(\u011C\x03\x02\x02\x02*\u0128\x03\x02\x02\x02,\u0131\x03\x02" +
        "\x02\x02.\u0133\x03\x02\x02\x020\u0138\x03\x02\x02\x022\u0147\x03\x02" +
        "\x02\x024\u0149\x03\x02\x02\x026\u0193\x03\x02\x02\x028\u0195\x03\x02" +
        "\x02\x02:\u01A0\x03\x02\x02\x02<\u01C7\x03\x02\x02\x02>\u01E3\x03\x02" +
        "\x02\x02@\u0202\x03\x02\x02\x02B\u0204\x03\x02\x02\x02D\u0220\x03\x02" +
        "\x02\x02F\u0222\x03\x02\x02\x02H\u022C\x03\x02\x02\x02J\u0231\x03\x02" +
        "\x02\x02L\u0236\x03\x02\x02\x02N\u025A\x03\x02\x02\x02P\u025C\x03\x02" +
        "\x02\x02R\u0269\x03\x02\x02\x02T\u027B\x03\x02\x02\x02V\u0280\x03\x02" +
        "\x02\x02X\u0283\x03\x02\x02\x02Z\u0285\x03\x02\x02\x02\\\u0287\x03\x02" +
        "\x02\x02^\u0289\x03\x02\x02\x02`\u028B\x03\x02\x02\x02b\u028D\x03\x02" +
        "\x02\x02d\u028F\x03\x02\x02\x02f\u0291\x03\x02\x02\x02h\u0293\x03\x02" +
        "\x02\x02j\u0295\x03\x02\x02\x02l\u0297\x03\x02\x02\x02n\u0299\x03\x02" +
        "\x02\x02p\u029B\x03\x02\x02\x02r\u029D\x03\x02\x02\x02t\u029F\x03\x02" +
        "\x02\x02v\u02A1\x03\x02\x02\x02x\u02A3\x03\x02\x02\x02z\u02A5\x03\x02" +
        "\x02\x02|\u02A7\x03\x02\x02\x02~\u02A9\x03\x02\x02\x02\x80\u02AB\x03\x02" +
        "\x02\x02\x82\u02AD\x03\x02\x02\x02\x84\u02AF\x03\x02\x02\x02\x86\u02B1" +
        "\x03\x02\x02\x02\x88\u02B3\x03\x02\x02\x02\x8A\u02B5\x03\x02\x02\x02\x8C" +
        "\u02B7\x03\x02\x02\x02\x8E\u02B9\x03\x02\x02\x02\x90\u02BB\x03\x02\x02" +
        "\x02\x92\u02BD\x03\x02\x02\x02\x94\u037F\x03\x02\x02\x02\x96\u0381\x03" +
        "\x02\x02\x02\x98\u03A0\x03\x02\x02\x02\x9A\u03AA\x03\x02\x02\x02\x9C\u03AC" +
        "\x03\x02\x02\x02\x9E\u03B1\x03\x02\x02\x02\xA0\u03CF\x03\x02\x02\x02\xA2" +
        "\u03DE\x03\x02\x02\x02\xA4\u03E0\x03\x02\x02\x02\xA6\u03E5\x03\x02\x02" +
        "\x02\xA8\u03EA\x03\x02\x02\x02\xAA\u03EC\x03\x02\x02\x02\xAC\u03EE\x03" +
        "\x02\x02\x02\xAE\u03F7\x03\x02\x02\x02\xB0\u0400\x03\x02\x02\x02\xB2\u0408" +
        "\x03\x02\x02\x02\xB4\u0411\x03\x02\x02\x02\xB6\u0413\x03\x02\x02\x02\xB8" +
        "\u0415\x03\x02\x02\x02\xBA\u041E\x03\x02\x02\x02\xBC\u0427\x03\x02\x02" +
        "\x02\xBE\u043A\x03\x02\x02\x02\xC0\u0444\x03\x02\x02\x02\xC2\xC3\x05V" +
        ",\x02\xC3\xC4\x07\x02\x02\x03\xC4\x03\x03\x02\x02\x02\xC5\xC6\x05\xC0" +
        "a\x02\xC6\xC7\x07\x02\x02\x03\xC7\x05\x03\x02\x02\x02\xC8\xC9\t\x02\x02" +
        "\x02\xC9\x07\x03\x02\x02\x02\xCA\xCD\x05\f\x07\x02\xCB\xCD\x07r\x02\x02" +
        "\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\t\x03\x02\x02\x02" +
        "\xCE\xCF\x07\b\x02\x02\xCF\v\x03\x02\x02\x02\xD0\xD1\t\x03\x02\x02\xD1" +
        "\r\x03\x02\x02\x02\xD2\xD3\t\x04\x02\x02\xD3\x0F\x03\x02\x02\x02\xD4\xD7" +
        "\x05\b\x05\x02\xD5\xD7\x05\n\x06\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5\x03" +
        "\x02\x02\x02\xD7\x11\x03\x02\x02\x02\xD8\xD9\x07D\x02\x02\xD9\x13\x03" +
        "\x02\x02\x02\xDA\xDB\x07G\x02\x02\xDB\x15\x03\x02\x02\x02\xDC\xDD\x07" +
        "F\x02\x02\xDD\x17\x03\x02\x02\x02\xDE\xDF\x07E\x02\x02\xDF\x19\x03\x02" +
        "\x02\x02\xE0\xE1\x07\x07\x02\x02\xE1\x1B\x03\x02\x02\x02\xE2\xE6\x05\x0E" +
        "\b\x02\xE3\xE4\x07H\x02\x02\xE4\xE6\x05\b\x05\x02\xE5\xE2\x03\x02\x02" +
        "\x02\xE5\xE3\x03\x02\x02\x02\xE6\x1D\x03\x02\x02\x02\xE7\xED\x05\x12\n" +
        "\x02\xE8\xED\x05\x14\v\x02\xE9\xED\x05\x16\f\x02\xEA\xED\x05\x18\r\x02" +
        "\xEB\xED\x05\x1A\x0E\x02\xEC\xE7\x03\x02\x02\x02\xEC\xE8\x03\x02\x02\x02" +
        "\xEC\xE9\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02" +
        "\xED\x1F\x03\x02\x02\x02\xEE\xFA\x05\x1E\x10\x02\xEF\xFA\x05\x10\t\x02" +
        "\xF0\xFA\x05\x1C\x0F\x02\xF1\xF5\x07\x04\x02\x02\xF2\xF4\x05 \x11\x02" +
        "\xF3\xF2\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02" +
        "\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02" +
        "\xF8\xFA\x07\x05\x02\x02\xF9\xEE\x03\x02\x02\x02\xF9\xEF\x03\x02\x02\x02" +
        "\xF9\xF0\x03\x02\x02\x02\xF9\xF1\x03\x02\x02\x02\xFA!\x03\x02\x02\x02" +
        "\xFB\xFE\x05\x12\n\x02\xFC\xFE\x05\x10\t\x02\xFD\xFB\x03\x02\x02\x02\xFD" +
        "\xFC\x03\x02\x02\x02\xFE#\x03\x02\x02\x02\xFF\u010B\x05\x10\t\x02\u0100" +
        "\u0101\x07\x04\x02\x02\u0101\u0102\x078\x02\x02\u0102\u0104\x05\x10\t" +
        "\x02\u0103\u0105\x05\"\x12\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0106" +
        "\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02" +
        "\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x07\x05\x02\x02\u0109\u010B\x03" +
        "\x02\x02\x02\u010A\xFF\x03\x02\x02\x02\u010A\u0100\x03\x02\x02\x02\u010B" +
        "%\x03\x02\x02\x02\u010C\u0117\x05\x1E\x10\x02\u010D\u0117\x05\x10\t\x02" +
        "\u010E\u0112\x07\x04\x02\x02\u010F\u0111\x05 \x11\x02\u0110\u010F\x03" +
        "\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112" +
        "\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0112\x03\x02" +
        "\x02\x02\u0115\u0117\x07\x05\x02\x02\u0116\u010C\x03\x02\x02\x02\u0116" +
        "\u010D\x03\x02\x02\x02\u0116\u010E\x03\x02\x02\x02\u0117\'\x03\x02\x02" +
        "\x02\u0118\u011D\x05\x1C\x0F\x02\u0119\u011A\x05\x1C\x0F\x02\u011A\u011B" +
        "\x05&\x14\x02\u011B\u011D\x03\x02\x02\x02\u011C\u0118\x03\x02\x02\x02" +
        "\u011C\u0119\x03\x02\x02\x02\u011D)\x03\x02\x02\x02\u011E\u0129\x05$\x13" +
        "\x02\u011F\u0120\x07\x04\x02\x02\u0120\u0122\x05$\x13\x02\u0121\u0123" +
        "\x05*\x16\x02\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
        "\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03" +
        "\x02\x02\x02\u0126\u0127\x07\x05\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128" +
        "\u011E\x03\x02\x02\x02\u0128\u011F\x03\x02\x02\x02\u0129+\x03\x02\x02" +
        "\x02\u012A\u0132\x05$\x13\x02\u012B\u012C\x07\x04\x02\x02\u012C\u012D" +
        "\x079\x02\x02\u012D\u012E\x05$\x13\x02\u012E\u012F\x05*\x16\x02\u012F" +
        "\u0130\x07\x05\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131\u012A\x03\x02" +
        "\x02\x02\u0131\u012B\x03\x02\x02\x02\u0132-\x03\x02\x02\x02\u0133\u0134" +
        "\x07\x04\x02\x02\u0134\u0135\x05\x10\t\x02\u0135\u0136\x056\x1C\x02\u0136" +
        "\u0137\x07\x05\x02\x02\u0137/\x03\x02\x02\x02\u0138\u0139\x07\x04\x02" +
        "\x02\u0139\u013A\x05\x10\t\x02\u013A\u013B\x05*\x16\x02\u013B\u013C\x07" +
        "\x05\x02\x02\u013C1\x03\x02\x02\x02\u013D\u0148\x05\x10\t\x02\u013E\u013F" +
        "\x07\x04\x02\x02\u013F\u0141\x05\x10\t\x02\u0140\u0142\x05\x10\t\x02\u0141" +
        "\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0141\x03\x02" +
        "\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
        "\u0146\x07\x05\x02\x02\u0146\u0148\x03\x02\x02\x02\u0147\u013D\x03\x02" +
        "\x02\x02\u0147\u013E\x03\x02\x02\x02\u01483\x03\x02\x02\x02\u0149\u014A" +
        "\x07\x04\x02\x02\u014A\u014B\x052\x1A\x02\u014B\u014C\x056\x1C\x02\u014C" +
        "\u014D\x07\x05\x02\x02\u014D5\x03\x02\x02\x02\u014E\u0194\x05\x1E\x10" +
        "\x02\u014F\u0194\x05,\x17\x02\u0150\u0151\x07\x04\x02\x02\u0151\u0153" +
        "\x05,\x17\x02\u0152\u0154\x056\x1C\x02\u0153\u0152\x03\x02\x02\x02\u0154" +
        "\u0155\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02" +
        "\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x07\x05\x02\x02\u0158" +
        "\u0194\x03\x02\x02\x02\u0159\u015A\x07\x04\x02\x02\u015A\u015B\x07?\x02" +
        "\x02\u015B\u015D\x07\x04\x02\x02\u015C\u015E\x05.\x18\x02\u015D\u015C" +
        "\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02" +
        "\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x07" +
        "\x05\x02\x02\u0162\u0163\x056\x1C\x02\u0163\u0164\x07\x05\x02\x02\u0164" +
        "\u0194\x03\x02\x02\x02\u0165\u0166\x07\x04\x02\x02\u0166\u0167\x07>\x02" +
        "\x02\u0167\u0169\x07\x04\x02\x02\u0168\u016A\x050\x19\x02\u0169\u0168" +
        "\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02" +
        "\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07" +
        "\x05\x02\x02\u016E\u016F\x056\x1C\x02\u016F\u0170\x07\x05\x02\x02\u0170" +
        "\u0194\x03\x02\x02\x02\u0171\u0172\x07\x04\x02\x02\u0172\u0173\x07<\x02" +
        "\x02\u0173\u0175\x07\x04\x02\x02\u0174\u0176\x050\x19\x02\u0175\u0174" +
        "\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02" +
        "\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x07" +
        "\x05\x02\x02\u017A\u017B\x056\x1C\x02\u017B\u017C\x07\x05\x02\x02\u017C" +
        "\u0194\x03\x02\x02\x02\u017D\u017E\x07\x04\x02\x02\u017E\u017F\x07@\x02" +
        "\x02\u017F\u0180\x056\x1C\x02\u0180\u0182\x07\x04\x02\x02\u0181\u0183" +
        "\x054\x1B\x02\u0182\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02" +
        "\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03" +
        "\x02\x02\x02\u0186\u0187\x07\x05\x02\x02\u0187\u0188\x07\x05\x02\x02\u0188" +
        "\u0194\x03\x02\x02\x02\u0189\u018A\x07\x04\x02\x02\u018A\u018B\x077\x02" +
        "\x02\u018B\u018D\x056\x1C\x02\u018C\u018E\x05(\x15\x02\u018D\u018C\x03" +
        "\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F" +
        "\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x07\x05" +
        "\x02\x02\u0192\u0194\x03\x02\x02\x02\u0193\u014E\x03\x02\x02\x02\u0193" +
        "\u014F\x03\x02\x02\x02\u0193\u0150\x03\x02\x02\x02\u0193\u0159\x03\x02" +
        "\x02\x02\u0193\u0165\x03\x02\x02\x02\u0193\u0171\x03\x02\x02\x02\u0193" +
        "\u017D\x03\x02\x02\x02\u0193\u0189\x03\x02\x02\x02\u01947\x03\x02\x02" +
        "\x02\u0195\u0196\x07\x04\x02\x02\u0196\u0197\x05$\x13\x02\u0197\u019B" +
        "\x05\x12\n\x02\u0198\u019A\x05(\x15\x02\u0199\u0198\x03\x02\x02\x02\u019A" +
        "\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02" +
        "\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E" +
        "\u019F\x07\x05\x02\x02\u019F9\x03\x02\x02\x02\u01A0\u01A1\t\x05\x02\x02" +
        "\u01A1;\x03\x02\x02\x02\u01A2\u01A3\x07\x04\x02\x02\u01A3\u01A4\x05\x1E" +
        "\x10\x02\u01A4\u01A8\x05*\x16\x02\u01A5\u01A7\x05(\x15\x02\u01A6\u01A5" +
        "\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02" +
        "\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01A8\x03" +
        "\x02\x02\x02\u01AB\u01AC\x07\x05\x02\x02\u01AC\u01C8\x03\x02\x02\x02\u01AD" +
        "\u01AE\x07\x04\x02\x02\u01AE\u01AF\x05:\x1E\x02\u01AF\u01B3\x05*\x16\x02" +
        "\u01B0\u01B2\x05(\x15\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B5\x03" +
        "\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4" +
        "\u01B6\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01B7\x07\x05" +
        "\x02\x02\u01B7\u01C8\x03\x02\x02\x02\u01B8\u01B9\x07\x04\x02\x02\u01B9" +
        "\u01BB\x05$\x13\x02\u01BA\u01BC\x05*\x16\x02\u01BB\u01BA\x03\x02\x02\x02" +
        "\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03" +
        "\x02\x02\x02\u01BE\u01C2\x03\x02\x02\x02\u01BF\u01C1\x05(\x15\x02\u01C0" +
        "\u01BF\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02" +
        "\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4" +
        "\u01C2\x03\x02\x02\x02\u01C5\u01C6\x07\x05\x02\x02\u01C6\u01C8\x03\x02" +
        "\x02\x02\u01C7\u01A2\x03\x02\x02\x02\u01C7\u01AD\x03\x02\x02\x02\u01C7" +
        "\u01B8\x03\x02\x02\x02\u01C8=\x03\x02\x02\x02\u01C9\u01E4\x05<\x1F\x02" +
        "\u01CA\u01CB\x07\x04\x02\x02\u01CB\u01CC\x07B\x02\x02\u01CC\u01CE\x07" +
        "\x04\x02\x02\u01CD\u01CF\x05\x10\t";
    SMTLIBv2Parser._serializedATNSegment1 = "\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01CE" +
        "\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
        "\u01D2\u01D3\x07\x05\x02\x02\u01D3\u01D4\x07\x04\x02\x02\u01D4\u01D6\x05" +
        "$\x13\x02\u01D5\u01D7\x05*\x16\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01D8" +
        "\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
        "\u01D9\u01DD\x03\x02\x02\x02\u01DA\u01DC\x05(\x15\x02\u01DB\u01DA\x03" +
        "\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD" +
        "\u01DE\x03\x02\x02\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
        "\x02\x02\u01E0\u01E1\x07\x05\x02\x02\u01E1\u01E2\x07\x05\x02\x02\u01E2" +
        "\u01E4\x03\x02\x02\x02\u01E3\u01C9\x03\x02\x02\x02\u01E3\u01CA\x03\x02" +
        "\x02\x02\u01E4?\x03\x02\x02\x02\u01E5\u01E6\x07j\x02\x02\u01E6\u01E8\x07" +
        "\x04\x02\x02\u01E7\u01E9\x058\x1D\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9" +
        "\u01EA\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02" +
        "\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x07\x05\x02\x02\u01ED" +
        "\u0203\x03\x02\x02\x02\u01EE\u01EF\x07R\x02\x02\u01EF\u01F1\x07\x04\x02" +
        "\x02\u01F0\u01F2\x05> \x02\u01F1\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03" +
        "\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
        "\u01F5\x03\x02\x02\x02\u01F5\u01F6\x07\x05\x02\x02\u01F6\u0203\x03\x02" +
        "\x02\x02\u01F7\u01F8\x07k\x02\x02\u01F8\u0203\x05\x1A\x0E\x02\u01F9\u01FA" +
        "\x07S\x02\x02\u01FA\u0203\x05\x1A\x0E\x02\u01FB\u01FC\x07N\x02\x02\u01FC" +
        "\u0203\x05\x1A\x0E\x02\u01FD\u01FE\x07o\x02\x02\u01FE\u0203\x05\x1A\x0E" +
        "\x02\u01FF\u0200\x07[\x02\x02\u0200\u0203\x05\x1A\x0E\x02\u0201\u0203" +
        "\x05(\x15\x02\u0202\u01E5\x03\x02\x02\x02\u0202\u01EE\x03\x02\x02\x02" +
        "\u0202\u01F7\x03\x02\x02\x02\u0202\u01F9\x03\x02\x02\x02\u0202\u01FB\x03" +
        "\x02\x02\x02\u0202\u01FD\x03\x02\x02\x02\u0202\u01FF\x03\x02\x02\x02\u0202" +
        "\u0201\x03\x02\x02\x02\u0203A\x03\x02\x02\x02\u0204\u0205\x07\x04\x02" +
        "\x02\u0205\u0206\x07\x14\x02\x02\u0206\u0208\x05\x10\t\x02\u0207\u0209" +
        "\x05@!\x02\u0208\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
        "\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02" +
        "\x02\x02\u020C\u020D\x07\x05\x02\x02\u020DC\x03\x02\x02\x02\u020E\u020F" +
        "\x07n\x02\x02\u020F\u0211\x07\x04\x02\x02\u0210\u0212\x05\x10\t\x02\u0211" +
        "\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0211\x03\x02" +
        "\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215" +
        "\u0216\x07\x05\x02\x02\u0216\u0221\x03\x02\x02\x02\u0217\u0218\x07V\x02" +
        "\x02\u0218\u0221\x05\x1A\x0E\x02\u0219\u021A\x07Q\x02\x02\u021A\u0221" +
        "\x05\x1A\x0E\x02\u021B\u021C\x07o\x02\x02\u021C\u0221\x05\x1A\x0E\x02" +
        "\u021D\u021E\x07[\x02\x02\u021E\u0221\x05\x1A\x0E\x02\u021F\u0221\x05" +
        "(\x15\x02\u0220\u020E\x03\x02\x02\x02\u0220\u0217\x03\x02\x02\x02\u0220" +
        "\u0219\x03\x02\x02\x02\u0220\u021B\x03\x02\x02\x02\u0220\u021D\x03\x02" +
        "\x02\x02\u0220\u021F\x03\x02\x02\x02\u0221E\x03\x02\x02\x02\u0222\u0223" +
        "\x07\x04\x02\x02\u0223\u0224\x07\x10\x02\x02\u0224\u0226\x05\x10\t\x02" +
        "\u0225\u0227\x05D#\x02\u0226\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02" +
        "\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229" +
        "\u022A\x03\x02\x02\x02\u022A\u022B\x07\x05\x02\x02\u022BG\x03\x02\x02" +
        "\x02\u022C\u022D\x07\x04\x02\x02\u022D\u022E\x05\x10\t\x02\u022E\u022F" +
        "\x05\x12\n\x02\u022F\u0230\x07\x05\x02\x02\u0230I\x03\x02\x02\x02\u0231" +
        "\u0232\x07\x04\x02\x02\u0232\u0233\x05\x10\t\x02\u0233\u0234\x05*\x16" +
        "\x02\u0234\u0235\x07\x05\x02\x02\u0235K\x03\x02\x02\x02\u0236\u0237\x07" +
        "\x04\x02\x02\u0237\u023B\x05\x10\t\x02\u0238\u023A\x05J&\x02\u0239\u0238" +
        "\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02" +
        "\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02\x02\x02\u023D\u023B\x03" +
        "\x02\x02\x02\u023E\u023F\x07\x05\x02\x02\u023FM\x03\x02\x02\x02\u0240" +
        "\u0242\x07\x04\x02\x02\u0241\u0243\x05L\'\x02\u0242\u0241\x03\x02\x02" +
        "\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0245" +
        "\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x07\x05\x02\x02" +
        "\u0247\u025B\x03\x02\x02\x02\u0248\u0249\x07\x04\x02\x02\u0249\u024A\x07" +
        "B\x02\x02\u024A\u024C\x07\x04\x02\x02\u024B\u024D\x05\x10\t\x02\u024C" +
        "\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u024C\x03\x02" +
        "\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
        "\u0251\x07\x05\x02\x02\u0251\u0253\x07\x04\x02\x02\u0252\u0254\x05L\'" +
        "\x02\u0253\u0252\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0253" +
        "\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02" +
        "\u0257\u0258\x07\x05\x02\x02\u0258\u0259\x07\x05\x02\x02\u0259\u025B\x03" +
        "\x02\x02\x02\u025A\u0240\x03\x02\x02\x02\u025A\u0248\x03\x02\x02\x02\u025B" +
        "O\x03\x02\x02\x02\u025C\u025D\x07\x04\x02\x02\u025D\u025E\x05\x10\t\x02" +
        "\u025E\u0262\x07\x04\x02\x02\u025F\u0261\x050\x19\x02\u0260\u025F\x03" +
        "\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262" +
        "\u0263\x03\x02\x02\x02\u0263\u0265\x03\x02\x02\x02\u0264\u0262\x03\x02" +
        "\x02\x02\u0265\u0266\x07\x05\x02\x02\u0266\u0267\x05*\x16\x02\u0267\u0268" +
        "\x07\x05\x02\x02\u0268Q\x03\x02\x02\x02\u0269\u026A\x05\x10\t\x02\u026A" +
        "\u026E\x07\x04\x02\x02\u026B\u026D\x050\x19\x02\u026C\u026B\x03\x02\x02" +
        "\x02\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F" +
        "\x03\x02\x02\x02\u026F\u0271\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02" +
        "\u0271\u0272\x07\x05\x02\x02\u0272\u0273\x05*\x16\x02\u0273\u0274\x05" +
        "6\x1C\x02\u0274S\x03\x02\x02\x02\u0275\u027C\x05\x10\t\x02\u0276\u0277" +
        "\x07\x04\x02\x02\u0277\u0278\x07\t\x02\x02\u0278\u0279\x05\x10\t\x02\u0279" +
        "\u027A\x07\x05\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0275\x03\x02" +
        "\x02\x02\u027B\u0276\x03\x02\x02\x02\u027CU\x03\x02\x02\x02\u027D\u027F" +
        "\x05\x94K\x02\u027E\u027D\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02" +
        "\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281W\x03\x02" +
        "\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u0284\x07\x19\x02\x02\u0284" +
        "Y\x03\x02\x02\x02\u0285\u0286\x07\x1A\x02\x02\u0286[\x03\x02\x02\x02\u0287" +
        "\u0288\x07\x1B\x02\x02\u0288]\x03\x02\x02\x02\u0289\u028A\x07\x1C\x02" +
        "\x02\u028A_\x03\x02\x02\x02\u028B\u028C\x07\x1D\x02\x02\u028Ca\x03\x02" +
        "\x02\x02\u028D\u028E\x07\x1E\x02\x02\u028Ec\x03\x02\x02\x02\u028F\u0290" +
        "\x07\x1F\x02\x02\u0290e\x03\x02\x02\x02\u0291\u0292\x07 \x02\x02\u0292" +
        "g\x03\x02\x02\x02\u0293\u0294\x07!\x02\x02\u0294i\x03\x02\x02\x02\u0295" +
        "\u0296\x07\"\x02\x02\u0296k\x03\x02\x02\x02\u0297\u0298\x07#\x02\x02\u0298" +
        "m\x03\x02\x02\x02\u0299\u029A\x07$\x02\x02\u029Ao\x03\x02\x02\x02\u029B" +
        "\u029C\x07%\x02\x02\u029Cq\x03\x02\x02\x02\u029D\u029E\x07&\x02\x02\u029E" +
        "s\x03\x02\x02\x02\u029F\u02A0\x07\'\x02\x02\u02A0u\x03\x02\x02\x02\u02A1" +
        "\u02A2\x07(\x02\x02\u02A2w\x03\x02\x02\x02\u02A3\u02A4\x07)\x02\x02\u02A4" +
        "y\x03\x02\x02\x02\u02A5\u02A6\x07*\x02\x02\u02A6{\x03\x02\x02\x02\u02A7" +
        "\u02A8\x07+\x02\x02\u02A8}\x03\x02\x02\x02\u02A9\u02AA\x07,\x02\x02\u02AA" +
        "\x7F\x03\x02\x02\x02\u02AB\u02AC\x07-\x02\x02\u02AC\x81\x03\x02\x02\x02" +
        "\u02AD\u02AE\x07.\x02\x02\u02AE\x83\x03\x02\x02\x02\u02AF\u02B0\x07/\x02" +
        "\x02\u02B0\x85\x03\x02\x02\x02\u02B1\u02B2\x070\x02\x02\u02B2\x87\x03" +
        "\x02\x02\x02\u02B3\u02B4\x071\x02\x02\u02B4\x89\x03\x02\x02\x02\u02B5" +
        "\u02B6\x072\x02\x02\u02B6\x8B\x03\x02\x02\x02\u02B7\u02B8\x073\x02\x02" +
        "\u02B8\x8D\x03\x02\x02\x02\u02B9\u02BA\x074\x02\x02\u02BA\x8F\x03\x02" +
        "\x02\x02\u02BB\u02BC\x075\x02\x02\u02BC\x91\x03\x02\x02\x02\u02BD\u02BE" +
        "\x076\x02\x02\u02BE\x93\x03\x02\x02\x02\u02BF\u02C0\x07\x04\x02\x02\u02C0" +
        "\u02C1\x05X-\x02\u02C1\u02C2\x056\x1C\x02\u02C2\u02C3\x07\x05\x02\x02" +
        "\u02C3\u0380\x03\x02\x02\x02\u02C4\u02C5\x07\x04\x02\x02\u02C5\u02C6\x05" +
        "Z.\x02\u02C6\u02C7\x07\x05\x02\x02\u02C7\u0380\x03\x02\x02\x02\u02C8\u02C9" +
        "\x07\x04\x02\x02\u02C9\u02CA\x05\\/\x02\u02CA\u02CB\x07\x05\x02\x02\u02CB" +
        "\u0380\x03\x02\x02\x02\u02CC\u02CD\x07\x04\x02\x02\u02CD\u02CE\x05^0\x02" +
        "\u02CE\u02CF\x05\x10\t\x02\u02CF\u02D0\x05*\x16\x02\u02D0\u02D1\x07\x05" +
        "\x02\x02\u02D1\u0380\x03\x02\x02\x02\u02D2\u02D3\x07\x04\x02\x02\u02D3" +
        "\u02D4\x05`1\x02\u02D4\u02D5\x05\x10\t\x02\u02D5\u02D6\x05N(\x02\u02D6" +
        "\u02D7\x07\x05\x02\x02\u02D7\u0380\x03\x02\x02\x02\u02D8\u02D9\x07\x04" +
        "\x02\x02\u02D9\u02DA\x05b2\x02\u02DA\u02DC\x07\x04\x02\x02\u02DB\u02DD" +
        "\x05H%\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
        "\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E0\x03\x02" +
        "\x02\x02\u02E0\u02E1\x07\x05\x02\x02\u02E1\u02E3\x07\x04\x02\x02\u02E2" +
        "\u02E4\x05N(\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02" +
        "\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7\x03" +
        "\x02\x02\x02\u02E7\u02E8\x07\x05\x02\x02\u02E8\u02E9\x07\x05\x02\x02\u02E9" +
        "\u0380\x03\x02\x02\x02\u02EA\u02EB\x07\x04\x02\x02\u02EB\u02EC\x05d3\x02" +
        "\u02EC\u02ED\x05\x10\t\x02\u02ED\u02F1\x07\x04\x02\x02\u02EE\u02F0\x05" +
        "*\x16\x02\u02EF\u02EE\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1" +
        "\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F4\x03\x02" +
        "\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\u02F5\x07\x05\x02\x02\u02F5" +
        "\u02F6\x05*\x16\x02\u02F6\u02F7\x07\x05\x02\x02\u02F7\u0380\x03\x02\x02" +
        "\x02\u02F8\u02F9\x07\x04\x02\x02\u02F9\u02FA\x05f4\x02\u02FA\u02FB\x05" +
        "\x10\t\x02\u02FB\u02FC\x05\x12\n\x02\u02FC\u02FD\x07\x05\x02\x02\u02FD" +
        "\u0380\x03\x02\x02\x02\u02FE\u02FF\x07\x04\x02\x02\u02FF\u0300\x05h5\x02" +
        "\u0300\u0301\x05R*\x02\u0301\u0302\x07\x05\x02\x02\u0302\u0380\x03\x02" +
        "\x02\x02\u0303\u0304\x07\x04\x02\x02\u0304\u0305\x05j6\x02\u0305\u0306" +
        "\x05R*\x02\u0306\u0307\x07\x05\x02\x02\u0307\u0380\x03\x02\x02\x02\u0308" +
        "\u0309\x07\x04\x02\x02\u0309\u030A\x05l7\x02\u030A\u030C\x07\x04\x02\x02" +
        "\u030B\u030D\x05P)\x02\u030C\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02" +
        "\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F" +
        "\u0310\x03\x02\x02\x02\u0310\u0311\x07\x05\x02\x02\u0311\u0313\x07\x04" +
        "\x02\x02\u0312\u0314\x056\x1C\x02\u0313\u0312\x03\x02\x02\x02\u0314\u0315" +
        "\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02" +
        "\u0316\u0317\x03\x02\x02\x02\u0317\u0318\x07\x05\x02\x02\u0318\u0319\x07" +
        "\x05\x02\x02\u0319\u0380\x03\x02\x02\x02\u031A\u031B\x07\x04\x02\x02\u031B" +
        "\u031C\x05n8\x02\u031C\u031D\x05\x10\t\x02\u031D\u0321\x07\x04\x02\x02" +
        "\u031E\u0320\x05\x10\t\x02\u031F\u031E\x03\x02\x02\x02\u0320\u0323\x03" +
        "\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322" +
        "\u0324\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0324\u0325\x07\x05" +
        "\x02\x02\u0325\u0326\x05*\x16\x02\u0326\u0327\x07\x05\x02\x02\u0327\u0380" +
        "\x03\x02\x02\x02\u0328\u0329\x07\x04\x02\x02\u0329\u032A\x05p9\x02\u032A" +
        "\u032B\x05\x1A\x0E\x02\u032B\u032C\x07\x05\x02\x02\u032C\u0380\x03\x02" +
        "\x02\x02\u032D\u032E\x07\x04\x02\x02\u032E\u032F\x05r:\x02\u032F\u0330" +
        "\x07\x05\x02\x02\u0330\u0380\x03\x02\x02\x02\u0331\u0332\x07\x04\x02\x02" +
        "\u0332\u0333\x05t;\x02\u0333\u0334\x07\x05\x02\x02\u0334\u0380\x03\x02" +
        "\x02\x02\u0335\u0336\x07\x04\x02\x02\u0336\u0337\x05v<\x02\u0337\u0338" +
        "\x07\x05\x02\x02\u0338\u0380\x03\x02\x02\x02\u0339\u033A\x07\x04\x02\x02" +
        "\u033A\u033B\x05x=\x02\u033B\u033C\x05\x9AN\x02\u033C\u033D\x07\x05\x02" +
        "\x02\u033D\u0380\x03\x02\x02\x02\u033E\u033F\x07\x04\x02\x02\u033F\u0340" +
        "\x05z>\x02\u0340\u0341\x07\x05\x02\x02\u0341\u0380\x03\x02\x02\x02\u0342" +
        "\u0343\x07\x04\x02\x02\u0343\u0344\x05|?\x02\u0344\u0345\x05\x1C\x0F\x02" +
        "\u0345\u0346\x07\x05\x02\x02\u0346\u0380\x03\x02\x02\x02\u0347\u0348\x07" +
        "\x04\x02\x02\u0348\u0349\x05~@\x02\u0349\u034A\x07\x05\x02\x02\u034A\u0380" +
        "\x03\x02\x02\x02\u034B\u034C\x07\x04\x02\x02\u034C\u034D\x05\x80A\x02" +
        "\u034D\u034E\x07\x05\x02\x02\u034E\u0380\x03\x02\x02\x02\u034F\u0350\x07" +
        "\x04\x02\x02\u0350\u0351\x05\x82B\x02\u0351\u0352\x07\x05\x02\x02\u0352" +
        "\u0380\x03\x02\x02\x02\u0353\u0354\x07\x04\x02\x02\u0354\u0355\x05\x84" +
        "C\x02\u0355\u0357\x07\x04\x02\x02\u0356\u0358\x056\x1C\x02\u0357\u0356" +
        "\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u0357\x03\x02\x02\x02" +
        "\u0359\u035A\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u035C\x07" +
        "\x05\x02\x02\u035C\u035D\x07\x05\x02\x02\u035D\u0380\x03\x02\x02\x02\u035E" +
        "\u035F\x07\x04\x02\x02\u035F\u0360\x05\x86D\x02\u0360\u0361\x05\x12\n" +
        "\x02\u0361\u0362\x07\x05\x02\x02\u0362\u0380\x03\x02\x02\x02\u0363\u0364" +
        "\x07\x04\x02\x02\u0364\u0365\x05\x88E\x02\u0365\u0366\x05\x12\n\x02\u0366" +
        "\u0367\x07\x05\x02\x02\u0367\u0380\x03\x02\x02\x02\u0368\u0369\x07\x04" +
        "\x02\x02\u0369\u036A\x05\x8AF\x02\u036A\u036B\x07\x05\x02\x02\u036B\u0380" +
        "\x03\x02\x02\x02\u036C\u036D\x07\x04\x02\x02\u036D\u036E\x05\x8CG\x02" +
        "\u036E\u036F\x07\x05\x02\x02\u036F\u0380\x03\x02\x02\x02\u0370\u0371\x07" +
        "\x04\x02\x02\u0371\u0372\x05\x8EH\x02\u0372\u0373\x05(\x15\x02\u0373\u0374" +
        "\x07\x05\x02\x02\u0374\u0380\x03\x02\x02\x02\u0375\u0376\x07\x04\x02\x02" +
        "\u0376\u0377\x05\x90I\x02\u0377\u0378\x05\x10\t\x02\u0378\u0379\x07\x05" +
        "\x02\x02\u0379\u0380\x03\x02\x02\x02\u037A\u037B\x07\x04\x02\x02\u037B" +
        "\u037C\x05\x92J\x02\u037C\u037D\x05\x98M\x02\u037D\u037E\x07\x05\x02\x02" +
        "\u037E\u0380\x03\x02\x02\x02\u037F\u02BF\x03\x02\x02\x02\u037F\u02C4\x03" +
        "\x02\x02\x02\u037F\u02C8\x03\x02\x02\x02\u037F\u02CC\x03\x02\x02\x02\u037F" +
        "\u02D2\x03\x02\x02\x02\u037F\u02D8\x03\x02\x02\x02\u037F\u02EA\x03\x02" +
        "\x02\x02\u037F\u02F8\x03\x02\x02\x02\u037F\u02FE\x03\x02\x02\x02\u037F" +
        "\u0303\x03\x02\x02\x02\u037F\u0308\x03\x02\x02\x02\u037F\u031A\x03\x02" +
        "\x02\x02\u037F\u0328\x03\x02\x02\x02\u037F\u032D\x03\x02\x02\x02\u037F" +
        "\u0331\x03\x02\x02\x02\u037F\u0335\x03\x02\x02\x02\u037F\u0339\x03\x02" +
        "\x02\x02\u037F\u033E\x03\x02\x02\x02\u037F\u0342\x03\x02\x02\x02\u037F" +
        "\u0347\x03\x02\x02\x02\u037F\u034B\x03\x02\x02\x02\u037F\u034F\x03\x02" +
        "\x02\x02\u037F\u0353\x03\x02\x02\x02\u037F\u035E\x03\x02\x02\x02\u037F" +
        "\u0363\x03\x02\x02\x02\u037F\u0368\x03\x02\x02\x02\u037F\u036C\x03\x02" +
        "\x02\x02\u037F\u0370\x03\x02\x02\x02\u037F\u0375\x03\x02\x02\x02\u037F" +
        "\u037A\x03\x02\x02\x02\u0380\x95\x03\x02\x02\x02\u0381\u0382\t\x06\x02" +
        "\x02\u0382\x97\x03\x02\x02\x02\u0383\u0384\x07O\x02\x02\u0384\u03A1\x05" +
        "\x1A\x0E\x02\u0385\u0386\x07T\x02\x02\u0386\u03A1\x05\x96L\x02\u0387\u0388" +
        "\x07U\x02\x02\u0388\u03A1\x05\x96L\x02\u0389\u038A\x07]\x02\x02\u038A" +
        "\u03A1\x05\x96L\x02\u038B\u038C\x07^\x02\x02\u038C\u03A1\x05\x96L\x02" +
        "\u038D\u038E\x07_\x02\x02\u038E\u03A1\x05\x96L\x02\u038F\u0390\x07`\x02" +
        "\x02\u0390\u03A1\x05\x96L\x02\u0391\u0392\x07a\x02\x02\u0392\u03A1\x05" +
        "\x96L\x02\u0393\u0394\x07b\x02\x02\u0394\u03A1\x05\x96L\x02\u0395\u0396" +
        "\x07c\x02\x02\u0396\u03A1\x05\x96L\x02\u0397\u0398\x07d\x02\x02\u0398" +
        "\u03A1\x05\x12\n\x02\u0399\u039A\x07f\x02\x02\u039A\u03A1\x05\x1A\x0E" +
        "\x02\u039B\u039C\x07g\x02\x02\u039C\u03A1\x05\x12\n\x02\u039D\u039E\x07" +
        "p\x02\x02\u039E\u03A1\x05\x12\n\x02\u039F\u03A1\x05(\x15\x02\u03A0\u0383" +
        "\x03\x02\x02\x02\u03A0\u0385\x03\x02\x02\x02\u03A0\u0387\x03\x02\x02\x02" +
        "\u03A0\u0389\x03\x02\x02\x02\u03A0\u038B\x03\x02\x02\x02\u03A0\u038D\x03" +
        "\x02\x02\x02\u03A0\u038F\x03\x02\x02\x02\u03A0\u0391\x03\x02\x02\x02\u03A0" +
        "\u0393\x03\x02\x02\x02\u03A0\u0395\x03\x02\x02\x02\u03A0\u0397\x03\x02" +
        "\x02\x02\u03A0\u0399\x03\x02\x02\x02\u03A0\u039B\x03\x02\x02\x02\u03A0" +
        "\u039D\x03\x02\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A1\x99\x03\x02\x02" +
        "\x02\u03A2\u03AB\x07I\x02\x02\u03A3\u03AB\x07J\x02\x02\u03A4\u03AB\x07" +
        "K\x02\x02\u03A5\u03AB\x07P\x02\x02\u03A6\u03AB\x07Z\x02\x02\u03A7\u03AB" +
        "\x07e\x02\x02\u03A8\u03AB\x07q\x02\x02\u03A9\u03AB\x05\x1C\x0F\x02\u03AA" +
        "\u03A2\x03\x02\x02\x02\u03AA\u03A3\x03\x02\x02\x02\u03AA\u03A4\x03\x02" +
        "\x02\x02\u03AA\u03A5\x03\x02\x02\x02\u03AA\u03A6\x03\x02\x02\x02\u03AA" +
        "\u03A7\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03A9\x03\x02" +
        "\x02\x02\u03AB\x9B\x03\x02\x02\x02\u03AC\u03AD\t\x07\x02\x02\u03AD\x9D" +
        "\x03\x02\x02\x02\u03AE\u03B2\x07\x11\x02\x02\u03AF\u03B2\x07\x0F\x02\x02" +
        "\u03B0\u03B2\x05 \x11\x02\u03B1\u03AE\x03\x02\x02\x02\u03B1\u03AF\x03" +
        "\x02\x02\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\x9F\x03\x02\x02\x02\u03B3" +
        "\u03B4\x07\x04\x02\x02\u03B4\u03B5\x07!\x02\x02\u03B5\u03B6\x05R*\x02" +
        "\u03B6\u03B7\x07\x05\x02\x02\u03B7\u03D0\x03\x02\x02\x02\u03B8\u03B9\x07" +
        "\x04\x02\x02\u03B9\u03BA\x07\"\x02\x02\u03BA\u03BB\x05R*\x02\u03BB\u03BC" +
        "\x07\x05\x02\x02\u03BC\u03D0\x03\x02\x02\x02\u03BD\u03BE\x07\x04\x02\x02" +
        "\u03BE\u03BF\x07#\x02\x02\u03BF\u03C1\x07\x04\x02\x02\u03C0\u03C2\x05" +
        "P)\x02\u03C1\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C1" +
        "\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02" +
        "\u03C5\u03C6\x07\x05\x02\x02\u03C6\u03C8\x07\x04\x02\x02\u03C7\u03C9\x05" +
        "6\x1C\x02\u03C8\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA" +
        "\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CC\x03\x02" +
        "\x02\x02\u03CC\u03CD\x07\x05\x02\x02\u03CD\u03CE\x07\x05\x02\x02\u03CE" +
        "\u03D0\x03\x02\x02\x02\u03CF\u03B3\x03\x02\x02\x02\u03CF\u03B8\x03\x02" +
        "\x02\x02\u03CF\u03BD\x03\x02\x02\x02\u03D0\xA1\x03\x02\x02\x02\u03D1\u03D2" +
        "\x07J\x02\x02\u03D2\u03DF\x05\x12\n\x02\u03D3\u03D4\x07K\x02\x02\u03D4" +
        "\u03DF\x05\x1A\x0E\x02\u03D5\u03D6\x07P\x02\x02\u03D6\u03DF\x05\x9CO\x02" +
        "\u03D7\u03D8\x07Z\x02\x02\u03D8\u03DF\x05\x1A\x0E\x02\u03D9\u03DA\x07" +
        "e\x02\x02\u03DA\u03DF\x05\x9EP\x02\u03DB\u03DC\x07q\x02\x02\u03DC\u03DF" +
        "\x05\x1A\x0E\x02\u03DD\u03DF\x05(\x15\x02\u03DE\u03D1\x03\x02\x02\x02" +
        "\u03DE\u03D3\x03\x02\x02\x02\u03DE\u03D5\x03\x02\x02\x02\u03DE\u03D7\x03" +
        "\x02\x02\x02\u03DE\u03D9\x03\x02\x02\x02\u03DE\u03DB\x03\x02\x02\x02\u03DE" +
        "\u03DD\x03\x02\x02\x02\u03DF\xA3\x03\x02\x02\x02\u03E0\u03E1\x07\x04\x02" +
        "\x02\u03E1\u03E2\x056\x1C\x02\u03E2\u03E3\x056\x1C\x02\u03E3\u03E4\x07" +
        "\x05\x02\x02\u03E4\xA5\x03\x02\x02\x02\u03E5\u03E6\x07\x04\x02\x02\u03E6" +
        "\u03E7\x05\x10\t\x02\u03E7\u03E8\x05\x96L\x02\u03E8\u03E9\x07\x05\x02" +
        "\x02\u03E9\xA7\x03\x02\x02\x02\u03EA\u03EB\t\b\x02\x02\u03EB\xA9\x03\x02" +
        "\x02\x02\u03EC\u03ED\x05\x1A\x0E\x02\u03ED\xAB\x03\x02\x02\x02\u03EE\u03F2" +
        "\x07\x04\x02\x02\u03EF\u03F1\x056\x1C\x02\u03F0\u03EF\x03\x02\x02\x02" +
        "\u03F1\u03F4\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03" +
        "\x02\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5" +
        "\u03F6\x07\x05\x02\x02\u03F6\xAD\x03\x02\x02\x02\u03F7\u03FB\x07\x04\x02" +
        "\x02\u03F8\u03FA\x05\xA6T\x02\u03F9\u03F8\x03\x02\x02\x02\u03FA\u03FD" +
        "\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02" +
        "\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE\u03FF\x07" +
        "\x05\x02\x02\u03FF\xAF\x03\x02\x02\x02\u0400\u0402\x07\x04\x02\x02\u0401" +
        "\u0403\x05\xA2R\x02\u0402\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02\x02" +
        "\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u0406" +
        "\x03\x02\x02\x02\u0406\u0407\x07\x05\x02\x02\u0407\xB1\x03\x02\x02\x02" +
        "\u0408\u040C\x07\x04\x02\x02\u0409\u040B\x05\xA0Q\x02\u040A\u0409\x03" +
        "\x02\x02\x02\u040B\u040E\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C" +
        "\u040D\x03\x02\x02\x02\u040D\u040F\x03\x02\x02\x02\u040E\u040C\x03\x02" +
        "\x02\x02\u040F\u0410\x07\x05\x02\x02\u0410\xB3\x03\x02\x02\x02\u0411\u0412" +
        "\x05&\x14\x02\u0412\xB5\x03\x02\x02\x02\u0413\u0414\x05 \x11\x02\u0414" +
        "\xB7\x03\x02\x02\x02\u0415\u0419\x07\x04\x02\x02\u0416\u0418\x05\x10\t" +
        "\x02\u0417\u0416\x03\x02\x02\x02\u0418\u041B\x03\x02\x02\x02\u0419\u0417" +
        "\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041C\x03\x02\x02\x02" +
        "\u041B\u0419\x03\x02\x02\x02\u041C\u041D\x07\x05\x02\x02\u041D\xB9\x03" +
        "\x02\x02\x02\u041E\u0422\x07\x04\x02\x02\u041F\u0421\x05\x10\t\x02\u0420" +
        "\u041F\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02\u0422\u0420\x03\x02" +
        "\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0425\x03\x02\x02\x02\u0424" +
        "\u0422\x03\x02\x02\x02\u0425\u0426\x07\x05\x02\x02\u0426\xBB\x03\x02\x02" +
        "\x02\u0427\u0429\x07\x04\x02\x02\u0428\u042A\x05\xA4S\x02\u0429\u0428" +
        "\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02" +
        "\u042B\u042C\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x07" +
        "\x05\x02\x02\u042E\xBD\x03\x02\x02\x02\u042F\u043B\x05\xA8U\x02\u0430" +
        "\u043B\x05\xAAV\x02\u0431\u043B\x05\xACW\x02\u0432\u043B\x05\xAEX\x02" +
        "\u0433\u043B\x05\xB0Y\x02\u0434\u043B\x05\xB2Z\x02\u0435\u043B\x05\xB4" +
        "[\x02\u0436\u043B\x05\xB6\\\x02\u0437\u043B\x05\xB8]\x02\u0438\u043B\x05" +
        "\xBA^\x02\u0439\u043B\x05\xBC_\x02\u043A\u042F\x03\x02\x02\x02\u043A\u0430" +
        "\x03\x02\x02\x02\u043A\u0431\x03\x02\x02\x02\u043A\u0432\x03\x02\x02\x02" +
        "\u043A\u0433\x03\x02\x02\x02\u043A\u0434\x03\x02\x02\x02\u043A\u0435\x03" +
        "\x02\x02\x02\u043A\u0436\x03\x02\x02\x02\u043A\u0437\x03\x02\x02\x02\u043A" +
        "\u0438\x03\x02\x02\x02\u043A\u0439\x03\x02\x02\x02\u043B\xBF\x03\x02\x02" +
        "\x02\u043C\u0445\x07\x13\x02\x02\u043D\u0445\x05\xBE`\x02\u043E\u0445" +
        "\x07\x17\x02\x02\u043F\u0440\x07\x04\x02\x02\u0440\u0441\x07\f\x02\x02" +
        "\u0441\u0442\x05\x1A\x0E\x02\u0442\u0443\x07\x05\x02\x02\u0443\u0445\x03" +
        "\x02\x02\x02\u0444\u043C\x03\x02\x02\x02\u0444\u043D\x03\x02\x02\x02\u0444" +
        "\u043E\x03\x02\x02\x02\u0444\u043F\x03\x02\x02\x02\u0445\xC1\x03\x02\x02" +
        "\x02L\xCC\xD6\xE5\xEC\xF5\xF9\xFD\u0106\u010A\u0112\u0116\u011C\u0124" +
        "\u0128\u0131\u0143\u0147\u0155\u015F\u016B\u0177\u0184\u018F\u0193\u019B" +
        "\u01A8\u01B3\u01BD\u01C2\u01C7\u01D0\u01D8\u01DD\u01E3\u01EA\u01F3\u0202" +
        "\u020A\u0213\u0220\u0228\u023B\u0244\u024E\u0255\u025A\u0262\u026E\u027B" +
        "\u0280\u02DE\u02E5\u02F1\u030E\u0315\u0321\u0359\u037F\u03A0\u03AA\u03B1" +
        "\u03C3\u03CA\u03CF\u03DE\u03F2\u03FB\u0404\u040C\u0419\u0422\u042B\u043A" +
        "\u0444";
    SMTLIBv2Parser._serializedATN = Utils.join([
        SMTLIBv2Parser._serializedATNSegment0,
        SMTLIBv2Parser._serializedATNSegment1,
    ], "");
    return SMTLIBv2Parser;
}(Parser_1.Parser));
exports.SMTLIBv2Parser = SMTLIBv2Parser;
var StartContext = /** @class */ (function (_super) {
    __extends(StartContext, _super);
    function StartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StartContext.prototype.script = function () {
        return this.getRuleContext(0, ScriptContext);
    };
    StartContext.prototype.EOF = function () { return this.getToken(SMTLIBv2Parser.EOF, 0); };
    Object.defineProperty(StartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_start; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StartContext.prototype.enterRule = function (listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    };
    // @Override
    StartContext.prototype.exitRule = function (listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    };
    // @Override
    StartContext.prototype.accept = function (visitor) {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StartContext = StartContext;
var ResponseContext = /** @class */ (function (_super) {
    __extends(ResponseContext, _super);
    function ResponseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResponseContext.prototype.general_response = function () {
        return this.getRuleContext(0, General_responseContext);
    };
    ResponseContext.prototype.EOF = function () { return this.getToken(SMTLIBv2Parser.EOF, 0); };
    Object.defineProperty(ResponseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResponseContext.prototype.enterRule = function (listener) {
        if (listener.enterResponse) {
            listener.enterResponse(this);
        }
    };
    // @Override
    ResponseContext.prototype.exitRule = function (listener) {
        if (listener.exitResponse) {
            listener.exitResponse(this);
        }
    };
    // @Override
    ResponseContext.prototype.accept = function (visitor) {
        if (visitor.visitResponse) {
            return visitor.visitResponse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResponseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResponseContext = ResponseContext;
var GeneralReservedWordContext = /** @class */ (function (_super) {
    __extends(GeneralReservedWordContext, _super);
    function GeneralReservedWordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneralReservedWordContext.prototype.GRW_Exclamation = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Exclamation, 0); };
    GeneralReservedWordContext.prototype.GRW_Underscore = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Underscore, 0); };
    GeneralReservedWordContext.prototype.GRW_As = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_As, 0); };
    GeneralReservedWordContext.prototype.GRW_Binary = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Binary, 0); };
    GeneralReservedWordContext.prototype.GRW_Decimal = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Decimal, 0); };
    GeneralReservedWordContext.prototype.GRW_Exists = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Exists, 0); };
    GeneralReservedWordContext.prototype.GRW_Hexadecimal = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Hexadecimal, 0); };
    GeneralReservedWordContext.prototype.GRW_Forall = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Forall, 0); };
    GeneralReservedWordContext.prototype.GRW_Let = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Let, 0); };
    GeneralReservedWordContext.prototype.GRW_Match = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Match, 0); };
    GeneralReservedWordContext.prototype.GRW_Numeral = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Numeral, 0); };
    GeneralReservedWordContext.prototype.GRW_Par = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Par, 0); };
    GeneralReservedWordContext.prototype.GRW_String = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_String, 0); };
    Object.defineProperty(GeneralReservedWordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_generalReservedWord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneralReservedWordContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneralReservedWord) {
            listener.enterGeneralReservedWord(this);
        }
    };
    // @Override
    GeneralReservedWordContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneralReservedWord) {
            listener.exitGeneralReservedWord(this);
        }
    };
    // @Override
    GeneralReservedWordContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneralReservedWord) {
            return visitor.visitGeneralReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneralReservedWordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneralReservedWordContext = GeneralReservedWordContext;
var SimpleSymbolContext = /** @class */ (function (_super) {
    __extends(SimpleSymbolContext, _super);
    function SimpleSymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleSymbolContext.prototype.predefSymbol = function () {
        return this.tryGetRuleContext(0, PredefSymbolContext);
    };
    SimpleSymbolContext.prototype.UndefinedSymbol = function () { return this.tryGetToken(SMTLIBv2Parser.UndefinedSymbol, 0); };
    Object.defineProperty(SimpleSymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_simpleSymbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleSymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleSymbol) {
            listener.enterSimpleSymbol(this);
        }
    };
    // @Override
    SimpleSymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleSymbol) {
            listener.exitSimpleSymbol(this);
        }
    };
    // @Override
    SimpleSymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleSymbol) {
            return visitor.visitSimpleSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleSymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleSymbolContext = SimpleSymbolContext;
var QuotedSymbolContext = /** @class */ (function (_super) {
    __extends(QuotedSymbolContext, _super);
    function QuotedSymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuotedSymbolContext.prototype.QuotedSymbol = function () { return this.getToken(SMTLIBv2Parser.QuotedSymbol, 0); };
    Object.defineProperty(QuotedSymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_quotedSymbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuotedSymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterQuotedSymbol) {
            listener.enterQuotedSymbol(this);
        }
    };
    // @Override
    QuotedSymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitQuotedSymbol) {
            listener.exitQuotedSymbol(this);
        }
    };
    // @Override
    QuotedSymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitQuotedSymbol) {
            return visitor.visitQuotedSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuotedSymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuotedSymbolContext = QuotedSymbolContext;
var PredefSymbolContext = /** @class */ (function (_super) {
    __extends(PredefSymbolContext, _super);
    function PredefSymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredefSymbolContext.prototype.PS_Not = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Not, 0); };
    PredefSymbolContext.prototype.PS_Bool = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Bool, 0); };
    PredefSymbolContext.prototype.PS_ContinuedExecution = function () { return this.tryGetToken(SMTLIBv2Parser.PS_ContinuedExecution, 0); };
    PredefSymbolContext.prototype.PS_Error = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Error, 0); };
    PredefSymbolContext.prototype.PS_False = function () { return this.tryGetToken(SMTLIBv2Parser.PS_False, 0); };
    PredefSymbolContext.prototype.PS_ImmediateExit = function () { return this.tryGetToken(SMTLIBv2Parser.PS_ImmediateExit, 0); };
    PredefSymbolContext.prototype.PS_Incomplete = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Incomplete, 0); };
    PredefSymbolContext.prototype.PS_Logic = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Logic, 0); };
    PredefSymbolContext.prototype.PS_Memout = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Memout, 0); };
    PredefSymbolContext.prototype.PS_Sat = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Sat, 0); };
    PredefSymbolContext.prototype.PS_Success = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Success, 0); };
    PredefSymbolContext.prototype.PS_Theory = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Theory, 0); };
    PredefSymbolContext.prototype.PS_True = function () { return this.tryGetToken(SMTLIBv2Parser.PS_True, 0); };
    PredefSymbolContext.prototype.PS_Unknown = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Unknown, 0); };
    PredefSymbolContext.prototype.PS_Unsupported = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Unsupported, 0); };
    PredefSymbolContext.prototype.PS_Unsat = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Unsat, 0); };
    Object.defineProperty(PredefSymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_predefSymbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredefSymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterPredefSymbol) {
            listener.enterPredefSymbol(this);
        }
    };
    // @Override
    PredefSymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitPredefSymbol) {
            listener.exitPredefSymbol(this);
        }
    };
    // @Override
    PredefSymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitPredefSymbol) {
            return visitor.visitPredefSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredefSymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredefSymbolContext = PredefSymbolContext;
var PredefKeywordContext = /** @class */ (function (_super) {
    __extends(PredefKeywordContext, _super);
    function PredefKeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredefKeywordContext.prototype.PK_AllStatistics = function () { return this.tryGetToken(SMTLIBv2Parser.PK_AllStatistics, 0); };
    PredefKeywordContext.prototype.PK_AssertionStackLevels = function () { return this.tryGetToken(SMTLIBv2Parser.PK_AssertionStackLevels, 0); };
    PredefKeywordContext.prototype.PK_Authors = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Authors, 0); };
    PredefKeywordContext.prototype.PK_Category = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Category, 0); };
    PredefKeywordContext.prototype.PK_Chainable = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Chainable, 0); };
    PredefKeywordContext.prototype.PK_Definition = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Definition, 0); };
    PredefKeywordContext.prototype.PK_DiagnosticOutputChannel = function () { return this.tryGetToken(SMTLIBv2Parser.PK_DiagnosticOutputChannel, 0); };
    PredefKeywordContext.prototype.PK_ErrorBehaviour = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ErrorBehaviour, 0); };
    PredefKeywordContext.prototype.PK_Extension = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Extension, 0); };
    PredefKeywordContext.prototype.PK_Funs = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Funs, 0); };
    PredefKeywordContext.prototype.PK_FunsDescription = function () { return this.tryGetToken(SMTLIBv2Parser.PK_FunsDescription, 0); };
    PredefKeywordContext.prototype.PK_GlobalDeclarations = function () { return this.tryGetToken(SMTLIBv2Parser.PK_GlobalDeclarations, 0); };
    PredefKeywordContext.prototype.PK_InteractiveMode = function () { return this.tryGetToken(SMTLIBv2Parser.PK_InteractiveMode, 0); };
    PredefKeywordContext.prototype.PK_Language = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Language, 0); };
    PredefKeywordContext.prototype.PK_LeftAssoc = function () { return this.tryGetToken(SMTLIBv2Parser.PK_LeftAssoc, 0); };
    PredefKeywordContext.prototype.PK_License = function () { return this.tryGetToken(SMTLIBv2Parser.PK_License, 0); };
    PredefKeywordContext.prototype.PK_Named = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Named, 0); };
    PredefKeywordContext.prototype.PK_Name = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Name, 0); };
    PredefKeywordContext.prototype.PK_Notes = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Notes, 0); };
    PredefKeywordContext.prototype.PK_Pattern = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Pattern, 0); };
    PredefKeywordContext.prototype.PK_PrintSuccess = function () { return this.tryGetToken(SMTLIBv2Parser.PK_PrintSuccess, 0); };
    PredefKeywordContext.prototype.PK_ProduceAssertions = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceAssertions, 0); };
    PredefKeywordContext.prototype.PK_ProduceAssignments = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceAssignments, 0); };
    PredefKeywordContext.prototype.PK_ProduceModels = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceModels, 0); };
    PredefKeywordContext.prototype.PK_ProduceProofs = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceProofs, 0); };
    PredefKeywordContext.prototype.PK_ProduceUnsatAssumptions = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceUnsatAssumptions, 0); };
    PredefKeywordContext.prototype.PK_ProduceUnsatCores = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceUnsatCores, 0); };
    PredefKeywordContext.prototype.PK_RandomSeed = function () { return this.tryGetToken(SMTLIBv2Parser.PK_RandomSeed, 0); };
    PredefKeywordContext.prototype.PK_ReasonUnknown = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ReasonUnknown, 0); };
    PredefKeywordContext.prototype.PK_RegularOutputChannel = function () { return this.tryGetToken(SMTLIBv2Parser.PK_RegularOutputChannel, 0); };
    PredefKeywordContext.prototype.PK_ReproducibleResourceLimit = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ReproducibleResourceLimit, 0); };
    PredefKeywordContext.prototype.PK_RightAssoc = function () { return this.tryGetToken(SMTLIBv2Parser.PK_RightAssoc, 0); };
    PredefKeywordContext.prototype.PK_SmtLibVersion = function () { return this.tryGetToken(SMTLIBv2Parser.PK_SmtLibVersion, 0); };
    PredefKeywordContext.prototype.PK_Sorts = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Sorts, 0); };
    PredefKeywordContext.prototype.PK_SortsDescription = function () { return this.tryGetToken(SMTLIBv2Parser.PK_SortsDescription, 0); };
    PredefKeywordContext.prototype.PK_Source = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Source, 0); };
    PredefKeywordContext.prototype.PK_Status = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Status, 0); };
    PredefKeywordContext.prototype.PK_Theories = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Theories, 0); };
    PredefKeywordContext.prototype.PK_Values = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Values, 0); };
    PredefKeywordContext.prototype.PK_Verbosity = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Verbosity, 0); };
    PredefKeywordContext.prototype.PK_Version = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Version, 0); };
    Object.defineProperty(PredefKeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_predefKeyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredefKeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterPredefKeyword) {
            listener.enterPredefKeyword(this);
        }
    };
    // @Override
    PredefKeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitPredefKeyword) {
            listener.exitPredefKeyword(this);
        }
    };
    // @Override
    PredefKeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitPredefKeyword) {
            return visitor.visitPredefKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredefKeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredefKeywordContext = PredefKeywordContext;
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.simpleSymbol = function () {
        return this.tryGetRuleContext(0, SimpleSymbolContext);
    };
    SymbolContext.prototype.quotedSymbol = function () {
        return this.tryGetRuleContext(0, QuotedSymbolContext);
    };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_symbol; },
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
var NumeralContext = /** @class */ (function (_super) {
    __extends(NumeralContext, _super);
    function NumeralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumeralContext.prototype.Numeral = function () { return this.getToken(SMTLIBv2Parser.Numeral, 0); };
    Object.defineProperty(NumeralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_numeral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumeralContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeral) {
            listener.enterNumeral(this);
        }
    };
    // @Override
    NumeralContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeral) {
            listener.exitNumeral(this);
        }
    };
    // @Override
    NumeralContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeral) {
            return visitor.visitNumeral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumeralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumeralContext = NumeralContext;
var DecimalContext = /** @class */ (function (_super) {
    __extends(DecimalContext, _super);
    function DecimalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecimalContext.prototype.Decimal = function () { return this.getToken(SMTLIBv2Parser.Decimal, 0); };
    Object.defineProperty(DecimalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_decimal; },
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
var HexadecimalContext = /** @class */ (function (_super) {
    __extends(HexadecimalContext, _super);
    function HexadecimalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HexadecimalContext.prototype.HexDecimal = function () { return this.getToken(SMTLIBv2Parser.HexDecimal, 0); };
    Object.defineProperty(HexadecimalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_hexadecimal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HexadecimalContext.prototype.enterRule = function (listener) {
        if (listener.enterHexadecimal) {
            listener.enterHexadecimal(this);
        }
    };
    // @Override
    HexadecimalContext.prototype.exitRule = function (listener) {
        if (listener.exitHexadecimal) {
            listener.exitHexadecimal(this);
        }
    };
    // @Override
    HexadecimalContext.prototype.accept = function (visitor) {
        if (visitor.visitHexadecimal) {
            return visitor.visitHexadecimal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HexadecimalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HexadecimalContext = HexadecimalContext;
var BinaryContext = /** @class */ (function (_super) {
    __extends(BinaryContext, _super);
    function BinaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryContext.prototype.Binary = function () { return this.getToken(SMTLIBv2Parser.Binary, 0); };
    Object.defineProperty(BinaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_binary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryContext.prototype.enterRule = function (listener) {
        if (listener.enterBinary) {
            listener.enterBinary(this);
        }
    };
    // @Override
    BinaryContext.prototype.exitRule = function (listener) {
        if (listener.exitBinary) {
            listener.exitBinary(this);
        }
    };
    // @Override
    BinaryContext.prototype.accept = function (visitor) {
        if (visitor.visitBinary) {
            return visitor.visitBinary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryContext = BinaryContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.String = function () { return this.getToken(SMTLIBv2Parser.String, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_string; },
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
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.predefKeyword = function () {
        return this.tryGetRuleContext(0, PredefKeywordContext);
    };
    KeywordContext.prototype.Colon = function () { return this.tryGetToken(SMTLIBv2Parser.Colon, 0); };
    KeywordContext.prototype.simpleSymbol = function () {
        return this.tryGetRuleContext(0, SimpleSymbolContext);
    };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordContext = KeywordContext;
var Spec_constantContext = /** @class */ (function (_super) {
    __extends(Spec_constantContext, _super);
    function Spec_constantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Spec_constantContext.prototype.numeral = function () {
        return this.tryGetRuleContext(0, NumeralContext);
    };
    Spec_constantContext.prototype.decimal = function () {
        return this.tryGetRuleContext(0, DecimalContext);
    };
    Spec_constantContext.prototype.hexadecimal = function () {
        return this.tryGetRuleContext(0, HexadecimalContext);
    };
    Spec_constantContext.prototype.binary = function () {
        return this.tryGetRuleContext(0, BinaryContext);
    };
    Spec_constantContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Object.defineProperty(Spec_constantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_spec_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Spec_constantContext.prototype.enterRule = function (listener) {
        if (listener.enterSpec_constant) {
            listener.enterSpec_constant(this);
        }
    };
    // @Override
    Spec_constantContext.prototype.exitRule = function (listener) {
        if (listener.exitSpec_constant) {
            listener.exitSpec_constant(this);
        }
    };
    // @Override
    Spec_constantContext.prototype.accept = function (visitor) {
        if (visitor.visitSpec_constant) {
            return visitor.visitSpec_constant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Spec_constantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Spec_constantContext = Spec_constantContext;
var S_exprContext = /** @class */ (function (_super) {
    __extends(S_exprContext, _super);
    function S_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    S_exprContext.prototype.spec_constant = function () {
        return this.tryGetRuleContext(0, Spec_constantContext);
    };
    S_exprContext.prototype.symbol = function () {
        return this.tryGetRuleContext(0, SymbolContext);
    };
    S_exprContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    S_exprContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    S_exprContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    S_exprContext.prototype.s_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(S_exprContext);
        }
        else {
            return this.getRuleContext(i, S_exprContext);
        }
    };
    Object.defineProperty(S_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_s_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    S_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterS_expr) {
            listener.enterS_expr(this);
        }
    };
    // @Override
    S_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitS_expr) {
            listener.exitS_expr(this);
        }
    };
    // @Override
    S_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitS_expr) {
            return visitor.visitS_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return S_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.S_exprContext = S_exprContext;
var IndexContext = /** @class */ (function (_super) {
    __extends(IndexContext, _super);
    function IndexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexContext.prototype.numeral = function () {
        return this.tryGetRuleContext(0, NumeralContext);
    };
    IndexContext.prototype.symbol = function () {
        return this.tryGetRuleContext(0, SymbolContext);
    };
    Object.defineProperty(IndexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_index; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexContext.prototype.enterRule = function (listener) {
        if (listener.enterIndex) {
            listener.enterIndex(this);
        }
    };
    // @Override
    IndexContext.prototype.exitRule = function (listener) {
        if (listener.exitIndex) {
            listener.exitIndex(this);
        }
    };
    // @Override
    IndexContext.prototype.accept = function (visitor) {
        if (visitor.visitIndex) {
            return visitor.visitIndex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexContext = IndexContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    IdentifierContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    IdentifierContext.prototype.GRW_Underscore = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Underscore, 0); };
    IdentifierContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    IdentifierContext.prototype.index = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IndexContext);
        }
        else {
            return this.getRuleContext(i, IndexContext);
        }
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_identifier; },
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
var Attribute_valueContext = /** @class */ (function (_super) {
    __extends(Attribute_valueContext, _super);
    function Attribute_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Attribute_valueContext.prototype.spec_constant = function () {
        return this.tryGetRuleContext(0, Spec_constantContext);
    };
    Attribute_valueContext.prototype.symbol = function () {
        return this.tryGetRuleContext(0, SymbolContext);
    };
    Attribute_valueContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    Attribute_valueContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    Attribute_valueContext.prototype.s_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(S_exprContext);
        }
        else {
            return this.getRuleContext(i, S_exprContext);
        }
    };
    Object.defineProperty(Attribute_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_attribute_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Attribute_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute_value) {
            listener.enterAttribute_value(this);
        }
    };
    // @Override
    Attribute_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute_value) {
            listener.exitAttribute_value(this);
        }
    };
    // @Override
    Attribute_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute_value) {
            return visitor.visitAttribute_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Attribute_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Attribute_valueContext = Attribute_valueContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.keyword = function () {
        return this.getRuleContext(0, KeywordContext);
    };
    AttributeContext.prototype.attribute_value = function () {
        return this.tryGetRuleContext(0, Attribute_valueContext);
    };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var SortContext = /** @class */ (function (_super) {
    __extends(SortContext, _super);
    function SortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SortContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    SortContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    SortContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    SortContext.prototype.sort = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SortContext);
        }
        else {
            return this.getRuleContext(i, SortContext);
        }
    };
    Object.defineProperty(SortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_sort; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SortContext.prototype.enterRule = function (listener) {
        if (listener.enterSort) {
            listener.enterSort(this);
        }
    };
    // @Override
    SortContext.prototype.exitRule = function (listener) {
        if (listener.exitSort) {
            listener.exitSort(this);
        }
    };
    // @Override
    SortContext.prototype.accept = function (visitor) {
        if (visitor.visitSort) {
            return visitor.visitSort(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SortContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SortContext = SortContext;
var Qual_identiferContext = /** @class */ (function (_super) {
    __extends(Qual_identiferContext, _super);
    function Qual_identiferContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Qual_identiferContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Qual_identiferContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    Qual_identiferContext.prototype.GRW_As = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_As, 0); };
    Qual_identiferContext.prototype.sort = function () {
        return this.tryGetRuleContext(0, SortContext);
    };
    Qual_identiferContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Qual_identiferContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_qual_identifer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Qual_identiferContext.prototype.enterRule = function (listener) {
        if (listener.enterQual_identifer) {
            listener.enterQual_identifer(this);
        }
    };
    // @Override
    Qual_identiferContext.prototype.exitRule = function (listener) {
        if (listener.exitQual_identifer) {
            listener.exitQual_identifer(this);
        }
    };
    // @Override
    Qual_identiferContext.prototype.accept = function (visitor) {
        if (visitor.visitQual_identifer) {
            return visitor.visitQual_identifer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Qual_identiferContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Qual_identiferContext = Qual_identiferContext;
var Var_bindingContext = /** @class */ (function (_super) {
    __extends(Var_bindingContext, _super);
    function Var_bindingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Var_bindingContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Var_bindingContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Var_bindingContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Var_bindingContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Var_bindingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_var_binding; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Var_bindingContext.prototype.enterRule = function (listener) {
        if (listener.enterVar_binding) {
            listener.enterVar_binding(this);
        }
    };
    // @Override
    Var_bindingContext.prototype.exitRule = function (listener) {
        if (listener.exitVar_binding) {
            listener.exitVar_binding(this);
        }
    };
    // @Override
    Var_bindingContext.prototype.accept = function (visitor) {
        if (visitor.visitVar_binding) {
            return visitor.visitVar_binding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Var_bindingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Var_bindingContext = Var_bindingContext;
var Sorted_varContext = /** @class */ (function (_super) {
    __extends(Sorted_varContext, _super);
    function Sorted_varContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sorted_varContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Sorted_varContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Sorted_varContext.prototype.sort = function () {
        return this.getRuleContext(0, SortContext);
    };
    Sorted_varContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Sorted_varContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_sorted_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sorted_varContext.prototype.enterRule = function (listener) {
        if (listener.enterSorted_var) {
            listener.enterSorted_var(this);
        }
    };
    // @Override
    Sorted_varContext.prototype.exitRule = function (listener) {
        if (listener.exitSorted_var) {
            listener.exitSorted_var(this);
        }
    };
    // @Override
    Sorted_varContext.prototype.accept = function (visitor) {
        if (visitor.visitSorted_var) {
            return visitor.visitSorted_var(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sorted_varContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sorted_varContext = Sorted_varContext;
var PatternContext = /** @class */ (function (_super) {
    __extends(PatternContext, _super);
    function PatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PatternContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    PatternContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    PatternContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(PatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_pattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PatternContext.prototype.enterRule = function (listener) {
        if (listener.enterPattern) {
            listener.enterPattern(this);
        }
    };
    // @Override
    PatternContext.prototype.exitRule = function (listener) {
        if (listener.exitPattern) {
            listener.exitPattern(this);
        }
    };
    // @Override
    PatternContext.prototype.accept = function (visitor) {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PatternContext = PatternContext;
var Match_caseContext = /** @class */ (function (_super) {
    __extends(Match_caseContext, _super);
    function Match_caseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Match_caseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Match_caseContext.prototype.pattern = function () {
        return this.getRuleContext(0, PatternContext);
    };
    Match_caseContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Match_caseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Match_caseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_match_case; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Match_caseContext.prototype.enterRule = function (listener) {
        if (listener.enterMatch_case) {
            listener.enterMatch_case(this);
        }
    };
    // @Override
    Match_caseContext.prototype.exitRule = function (listener) {
        if (listener.exitMatch_case) {
            listener.exitMatch_case(this);
        }
    };
    // @Override
    Match_caseContext.prototype.accept = function (visitor) {
        if (visitor.visitMatch_case) {
            return visitor.visitMatch_case(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Match_caseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Match_caseContext = Match_caseContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.spec_constant = function () {
        return this.tryGetRuleContext(0, Spec_constantContext);
    };
    TermContext.prototype.qual_identifer = function () {
        return this.tryGetRuleContext(0, Qual_identiferContext);
    };
    TermContext.prototype.ParOpen = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParOpen);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParOpen, i);
        }
    };
    TermContext.prototype.ParClose = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParClose);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParClose, i);
        }
    };
    TermContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    TermContext.prototype.GRW_Let = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Let, 0); };
    TermContext.prototype.var_binding = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Var_bindingContext);
        }
        else {
            return this.getRuleContext(i, Var_bindingContext);
        }
    };
    TermContext.prototype.GRW_Forall = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Forall, 0); };
    TermContext.prototype.sorted_var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sorted_varContext);
        }
        else {
            return this.getRuleContext(i, Sorted_varContext);
        }
    };
    TermContext.prototype.GRW_Exists = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Exists, 0); };
    TermContext.prototype.GRW_Match = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Match, 0); };
    TermContext.prototype.match_case = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Match_caseContext);
        }
        else {
            return this.getRuleContext(i, Match_caseContext);
        }
    };
    TermContext.prototype.GRW_Exclamation = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Exclamation, 0); };
    TermContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_term; },
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
var Sort_symbol_declContext = /** @class */ (function (_super) {
    __extends(Sort_symbol_declContext, _super);
    function Sort_symbol_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sort_symbol_declContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Sort_symbol_declContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Sort_symbol_declContext.prototype.numeral = function () {
        return this.getRuleContext(0, NumeralContext);
    };
    Sort_symbol_declContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Sort_symbol_declContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    Object.defineProperty(Sort_symbol_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_sort_symbol_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sort_symbol_declContext.prototype.enterRule = function (listener) {
        if (listener.enterSort_symbol_decl) {
            listener.enterSort_symbol_decl(this);
        }
    };
    // @Override
    Sort_symbol_declContext.prototype.exitRule = function (listener) {
        if (listener.exitSort_symbol_decl) {
            listener.exitSort_symbol_decl(this);
        }
    };
    // @Override
    Sort_symbol_declContext.prototype.accept = function (visitor) {
        if (visitor.visitSort_symbol_decl) {
            return visitor.visitSort_symbol_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sort_symbol_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sort_symbol_declContext = Sort_symbol_declContext;
var Meta_spec_constantContext = /** @class */ (function (_super) {
    __extends(Meta_spec_constantContext, _super);
    function Meta_spec_constantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Meta_spec_constantContext.prototype.GRW_Numeral = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Numeral, 0); };
    Meta_spec_constantContext.prototype.GRW_Decimal = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Decimal, 0); };
    Meta_spec_constantContext.prototype.GRW_String = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_String, 0); };
    Object.defineProperty(Meta_spec_constantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_meta_spec_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Meta_spec_constantContext.prototype.enterRule = function (listener) {
        if (listener.enterMeta_spec_constant) {
            listener.enterMeta_spec_constant(this);
        }
    };
    // @Override
    Meta_spec_constantContext.prototype.exitRule = function (listener) {
        if (listener.exitMeta_spec_constant) {
            listener.exitMeta_spec_constant(this);
        }
    };
    // @Override
    Meta_spec_constantContext.prototype.accept = function (visitor) {
        if (visitor.visitMeta_spec_constant) {
            return visitor.visitMeta_spec_constant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Meta_spec_constantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Meta_spec_constantContext = Meta_spec_constantContext;
var Fun_symbol_declContext = /** @class */ (function (_super) {
    __extends(Fun_symbol_declContext, _super);
    function Fun_symbol_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fun_symbol_declContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Fun_symbol_declContext.prototype.spec_constant = function () {
        return this.tryGetRuleContext(0, Spec_constantContext);
    };
    Fun_symbol_declContext.prototype.sort = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SortContext);
        }
        else {
            return this.getRuleContext(i, SortContext);
        }
    };
    Fun_symbol_declContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Fun_symbol_declContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    Fun_symbol_declContext.prototype.meta_spec_constant = function () {
        return this.tryGetRuleContext(0, Meta_spec_constantContext);
    };
    Fun_symbol_declContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Fun_symbol_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_fun_symbol_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fun_symbol_declContext.prototype.enterRule = function (listener) {
        if (listener.enterFun_symbol_decl) {
            listener.enterFun_symbol_decl(this);
        }
    };
    // @Override
    Fun_symbol_declContext.prototype.exitRule = function (listener) {
        if (listener.exitFun_symbol_decl) {
            listener.exitFun_symbol_decl(this);
        }
    };
    // @Override
    Fun_symbol_declContext.prototype.accept = function (visitor) {
        if (visitor.visitFun_symbol_decl) {
            return visitor.visitFun_symbol_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fun_symbol_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fun_symbol_declContext = Fun_symbol_declContext;
var Par_fun_symbol_declContext = /** @class */ (function (_super) {
    __extends(Par_fun_symbol_declContext, _super);
    function Par_fun_symbol_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Par_fun_symbol_declContext.prototype.fun_symbol_decl = function () {
        return this.tryGetRuleContext(0, Fun_symbol_declContext);
    };
    Par_fun_symbol_declContext.prototype.ParOpen = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParOpen);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParOpen, i);
        }
    };
    Par_fun_symbol_declContext.prototype.GRW_Par = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Par, 0); };
    Par_fun_symbol_declContext.prototype.ParClose = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParClose);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParClose, i);
        }
    };
    Par_fun_symbol_declContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Par_fun_symbol_declContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    Par_fun_symbol_declContext.prototype.sort = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SortContext);
        }
        else {
            return this.getRuleContext(i, SortContext);
        }
    };
    Par_fun_symbol_declContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    Object.defineProperty(Par_fun_symbol_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_par_fun_symbol_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Par_fun_symbol_declContext.prototype.enterRule = function (listener) {
        if (listener.enterPar_fun_symbol_decl) {
            listener.enterPar_fun_symbol_decl(this);
        }
    };
    // @Override
    Par_fun_symbol_declContext.prototype.exitRule = function (listener) {
        if (listener.exitPar_fun_symbol_decl) {
            listener.exitPar_fun_symbol_decl(this);
        }
    };
    // @Override
    Par_fun_symbol_declContext.prototype.accept = function (visitor) {
        if (visitor.visitPar_fun_symbol_decl) {
            return visitor.visitPar_fun_symbol_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Par_fun_symbol_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Par_fun_symbol_declContext = Par_fun_symbol_declContext;
var Theory_attributeContext = /** @class */ (function (_super) {
    __extends(Theory_attributeContext, _super);
    function Theory_attributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Theory_attributeContext.prototype.PK_Sorts = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Sorts, 0); };
    Theory_attributeContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    Theory_attributeContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    Theory_attributeContext.prototype.sort_symbol_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sort_symbol_declContext);
        }
        else {
            return this.getRuleContext(i, Sort_symbol_declContext);
        }
    };
    Theory_attributeContext.prototype.PK_Funs = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Funs, 0); };
    Theory_attributeContext.prototype.par_fun_symbol_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Par_fun_symbol_declContext);
        }
        else {
            return this.getRuleContext(i, Par_fun_symbol_declContext);
        }
    };
    Theory_attributeContext.prototype.PK_SortsDescription = function () { return this.tryGetToken(SMTLIBv2Parser.PK_SortsDescription, 0); };
    Theory_attributeContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Theory_attributeContext.prototype.PK_FunsDescription = function () { return this.tryGetToken(SMTLIBv2Parser.PK_FunsDescription, 0); };
    Theory_attributeContext.prototype.PK_Definition = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Definition, 0); };
    Theory_attributeContext.prototype.PK_Values = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Values, 0); };
    Theory_attributeContext.prototype.PK_Notes = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Notes, 0); };
    Theory_attributeContext.prototype.attribute = function () {
        return this.tryGetRuleContext(0, AttributeContext);
    };
    Object.defineProperty(Theory_attributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_theory_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Theory_attributeContext.prototype.enterRule = function (listener) {
        if (listener.enterTheory_attribute) {
            listener.enterTheory_attribute(this);
        }
    };
    // @Override
    Theory_attributeContext.prototype.exitRule = function (listener) {
        if (listener.exitTheory_attribute) {
            listener.exitTheory_attribute(this);
        }
    };
    // @Override
    Theory_attributeContext.prototype.accept = function (visitor) {
        if (visitor.visitTheory_attribute) {
            return visitor.visitTheory_attribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Theory_attributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Theory_attributeContext = Theory_attributeContext;
var Theory_declContext = /** @class */ (function (_super) {
    __extends(Theory_declContext, _super);
    function Theory_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Theory_declContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Theory_declContext.prototype.PS_Theory = function () { return this.getToken(SMTLIBv2Parser.PS_Theory, 0); };
    Theory_declContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Theory_declContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Theory_declContext.prototype.theory_attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Theory_attributeContext);
        }
        else {
            return this.getRuleContext(i, Theory_attributeContext);
        }
    };
    Object.defineProperty(Theory_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_theory_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Theory_declContext.prototype.enterRule = function (listener) {
        if (listener.enterTheory_decl) {
            listener.enterTheory_decl(this);
        }
    };
    // @Override
    Theory_declContext.prototype.exitRule = function (listener) {
        if (listener.exitTheory_decl) {
            listener.exitTheory_decl(this);
        }
    };
    // @Override
    Theory_declContext.prototype.accept = function (visitor) {
        if (visitor.visitTheory_decl) {
            return visitor.visitTheory_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Theory_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Theory_declContext = Theory_declContext;
var Logic_attribueContext = /** @class */ (function (_super) {
    __extends(Logic_attribueContext, _super);
    function Logic_attribueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Logic_attribueContext.prototype.PK_Theories = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Theories, 0); };
    Logic_attribueContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    Logic_attribueContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    Logic_attribueContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    Logic_attribueContext.prototype.PK_Language = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Language, 0); };
    Logic_attribueContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Logic_attribueContext.prototype.PK_Extension = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Extension, 0); };
    Logic_attribueContext.prototype.PK_Values = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Values, 0); };
    Logic_attribueContext.prototype.PK_Notes = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Notes, 0); };
    Logic_attribueContext.prototype.attribute = function () {
        return this.tryGetRuleContext(0, AttributeContext);
    };
    Object.defineProperty(Logic_attribueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_logic_attribue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Logic_attribueContext.prototype.enterRule = function (listener) {
        if (listener.enterLogic_attribue) {
            listener.enterLogic_attribue(this);
        }
    };
    // @Override
    Logic_attribueContext.prototype.exitRule = function (listener) {
        if (listener.exitLogic_attribue) {
            listener.exitLogic_attribue(this);
        }
    };
    // @Override
    Logic_attribueContext.prototype.accept = function (visitor) {
        if (visitor.visitLogic_attribue) {
            return visitor.visitLogic_attribue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Logic_attribueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Logic_attribueContext = Logic_attribueContext;
var LogicContext = /** @class */ (function (_super) {
    __extends(LogicContext, _super);
    function LogicContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    LogicContext.prototype.PS_Logic = function () { return this.getToken(SMTLIBv2Parser.PS_Logic, 0); };
    LogicContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    LogicContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    LogicContext.prototype.logic_attribue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Logic_attribueContext);
        }
        else {
            return this.getRuleContext(i, Logic_attribueContext);
        }
    };
    Object.defineProperty(LogicContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_logic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicContext.prototype.enterRule = function (listener) {
        if (listener.enterLogic) {
            listener.enterLogic(this);
        }
    };
    // @Override
    LogicContext.prototype.exitRule = function (listener) {
        if (listener.exitLogic) {
            listener.exitLogic(this);
        }
    };
    // @Override
    LogicContext.prototype.accept = function (visitor) {
        if (visitor.visitLogic) {
            return visitor.visitLogic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicContext = LogicContext;
var Sort_decContext = /** @class */ (function (_super) {
    __extends(Sort_decContext, _super);
    function Sort_decContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sort_decContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Sort_decContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Sort_decContext.prototype.numeral = function () {
        return this.getRuleContext(0, NumeralContext);
    };
    Sort_decContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Sort_decContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_sort_dec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sort_decContext.prototype.enterRule = function (listener) {
        if (listener.enterSort_dec) {
            listener.enterSort_dec(this);
        }
    };
    // @Override
    Sort_decContext.prototype.exitRule = function (listener) {
        if (listener.exitSort_dec) {
            listener.exitSort_dec(this);
        }
    };
    // @Override
    Sort_decContext.prototype.accept = function (visitor) {
        if (visitor.visitSort_dec) {
            return visitor.visitSort_dec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sort_decContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sort_decContext = Sort_decContext;
var Selector_decContext = /** @class */ (function (_super) {
    __extends(Selector_decContext, _super);
    function Selector_decContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Selector_decContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Selector_decContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Selector_decContext.prototype.sort = function () {
        return this.getRuleContext(0, SortContext);
    };
    Selector_decContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Selector_decContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_selector_dec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Selector_decContext.prototype.enterRule = function (listener) {
        if (listener.enterSelector_dec) {
            listener.enterSelector_dec(this);
        }
    };
    // @Override
    Selector_decContext.prototype.exitRule = function (listener) {
        if (listener.exitSelector_dec) {
            listener.exitSelector_dec(this);
        }
    };
    // @Override
    Selector_decContext.prototype.accept = function (visitor) {
        if (visitor.visitSelector_dec) {
            return visitor.visitSelector_dec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Selector_decContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Selector_decContext = Selector_decContext;
var Constructor_decContext = /** @class */ (function (_super) {
    __extends(Constructor_decContext, _super);
    function Constructor_decContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Constructor_decContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Constructor_decContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Constructor_decContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Constructor_decContext.prototype.selector_dec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Selector_decContext);
        }
        else {
            return this.getRuleContext(i, Selector_decContext);
        }
    };
    Object.defineProperty(Constructor_decContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_constructor_dec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constructor_decContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructor_dec) {
            listener.enterConstructor_dec(this);
        }
    };
    // @Override
    Constructor_decContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructor_dec) {
            listener.exitConstructor_dec(this);
        }
    };
    // @Override
    Constructor_decContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructor_dec) {
            return visitor.visitConstructor_dec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constructor_decContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constructor_decContext = Constructor_decContext;
var Datatype_decContext = /** @class */ (function (_super) {
    __extends(Datatype_decContext, _super);
    function Datatype_decContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Datatype_decContext.prototype.ParOpen = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParOpen);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParOpen, i);
        }
    };
    Datatype_decContext.prototype.ParClose = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParClose);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParClose, i);
        }
    };
    Datatype_decContext.prototype.constructor_dec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Constructor_decContext);
        }
        else {
            return this.getRuleContext(i, Constructor_decContext);
        }
    };
    Datatype_decContext.prototype.GRW_Par = function () { return this.tryGetToken(SMTLIBv2Parser.GRW_Par, 0); };
    Datatype_decContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    Object.defineProperty(Datatype_decContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_datatype_dec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Datatype_decContext.prototype.enterRule = function (listener) {
        if (listener.enterDatatype_dec) {
            listener.enterDatatype_dec(this);
        }
    };
    // @Override
    Datatype_decContext.prototype.exitRule = function (listener) {
        if (listener.exitDatatype_dec) {
            listener.exitDatatype_dec(this);
        }
    };
    // @Override
    Datatype_decContext.prototype.accept = function (visitor) {
        if (visitor.visitDatatype_dec) {
            return visitor.visitDatatype_dec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Datatype_decContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Datatype_decContext = Datatype_decContext;
var Function_decContext = /** @class */ (function (_super) {
    __extends(Function_decContext, _super);
    function Function_decContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_decContext.prototype.ParOpen = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParOpen);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParOpen, i);
        }
    };
    Function_decContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Function_decContext.prototype.ParClose = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParClose);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParClose, i);
        }
    };
    Function_decContext.prototype.sort = function () {
        return this.getRuleContext(0, SortContext);
    };
    Function_decContext.prototype.sorted_var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sorted_varContext);
        }
        else {
            return this.getRuleContext(i, Sorted_varContext);
        }
    };
    Object.defineProperty(Function_decContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_function_dec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_decContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_dec) {
            listener.enterFunction_dec(this);
        }
    };
    // @Override
    Function_decContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_dec) {
            listener.exitFunction_dec(this);
        }
    };
    // @Override
    Function_decContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_dec) {
            return visitor.visitFunction_dec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_decContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_decContext = Function_decContext;
var Function_defContext = /** @class */ (function (_super) {
    __extends(Function_defContext, _super);
    function Function_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_defContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Function_defContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Function_defContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Function_defContext.prototype.sort = function () {
        return this.getRuleContext(0, SortContext);
    };
    Function_defContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Function_defContext.prototype.sorted_var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sorted_varContext);
        }
        else {
            return this.getRuleContext(i, Sorted_varContext);
        }
    };
    Object.defineProperty(Function_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_function_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_defContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_def) {
            listener.enterFunction_def(this);
        }
    };
    // @Override
    Function_defContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_def) {
            listener.exitFunction_def(this);
        }
    };
    // @Override
    Function_defContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_def) {
            return visitor.visitFunction_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_defContext = Function_defContext;
var Prop_literalContext = /** @class */ (function (_super) {
    __extends(Prop_literalContext, _super);
    function Prop_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Prop_literalContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Prop_literalContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    Prop_literalContext.prototype.PS_Not = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Not, 0); };
    Prop_literalContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Prop_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_prop_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Prop_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterProp_literal) {
            listener.enterProp_literal(this);
        }
    };
    // @Override
    Prop_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitProp_literal) {
            listener.exitProp_literal(this);
        }
    };
    // @Override
    Prop_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitProp_literal) {
            return visitor.visitProp_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Prop_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Prop_literalContext = Prop_literalContext;
var ScriptContext = /** @class */ (function (_super) {
    __extends(ScriptContext, _super);
    function ScriptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptContext.prototype.command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommandContext);
        }
        else {
            return this.getRuleContext(i, CommandContext);
        }
    };
    Object.defineProperty(ScriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_script; },
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
var Cmd_assertContext = /** @class */ (function (_super) {
    __extends(Cmd_assertContext, _super);
    function Cmd_assertContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_assertContext.prototype.CMD_Assert = function () { return this.getToken(SMTLIBv2Parser.CMD_Assert, 0); };
    Object.defineProperty(Cmd_assertContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_assert; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_assertContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_assert) {
            listener.enterCmd_assert(this);
        }
    };
    // @Override
    Cmd_assertContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_assert) {
            listener.exitCmd_assert(this);
        }
    };
    // @Override
    Cmd_assertContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_assert) {
            return visitor.visitCmd_assert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_assertContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_assertContext = Cmd_assertContext;
var Cmd_checkSatContext = /** @class */ (function (_super) {
    __extends(Cmd_checkSatContext, _super);
    function Cmd_checkSatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_checkSatContext.prototype.CMD_CheckSat = function () { return this.getToken(SMTLIBv2Parser.CMD_CheckSat, 0); };
    Object.defineProperty(Cmd_checkSatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_checkSat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_checkSatContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_checkSat) {
            listener.enterCmd_checkSat(this);
        }
    };
    // @Override
    Cmd_checkSatContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_checkSat) {
            listener.exitCmd_checkSat(this);
        }
    };
    // @Override
    Cmd_checkSatContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_checkSat) {
            return visitor.visitCmd_checkSat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_checkSatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_checkSatContext = Cmd_checkSatContext;
var Cmd_checkSatAssumingContext = /** @class */ (function (_super) {
    __extends(Cmd_checkSatAssumingContext, _super);
    function Cmd_checkSatAssumingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_checkSatAssumingContext.prototype.CMD_CheckSatAssuming = function () { return this.getToken(SMTLIBv2Parser.CMD_CheckSatAssuming, 0); };
    Object.defineProperty(Cmd_checkSatAssumingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_checkSatAssuming; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_checkSatAssumingContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_checkSatAssuming) {
            listener.enterCmd_checkSatAssuming(this);
        }
    };
    // @Override
    Cmd_checkSatAssumingContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_checkSatAssuming) {
            listener.exitCmd_checkSatAssuming(this);
        }
    };
    // @Override
    Cmd_checkSatAssumingContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_checkSatAssuming) {
            return visitor.visitCmd_checkSatAssuming(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_checkSatAssumingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_checkSatAssumingContext = Cmd_checkSatAssumingContext;
var Cmd_declareConstContext = /** @class */ (function (_super) {
    __extends(Cmd_declareConstContext, _super);
    function Cmd_declareConstContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_declareConstContext.prototype.CMD_DeclareConst = function () { return this.getToken(SMTLIBv2Parser.CMD_DeclareConst, 0); };
    Object.defineProperty(Cmd_declareConstContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_declareConst; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_declareConstContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_declareConst) {
            listener.enterCmd_declareConst(this);
        }
    };
    // @Override
    Cmd_declareConstContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_declareConst) {
            listener.exitCmd_declareConst(this);
        }
    };
    // @Override
    Cmd_declareConstContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_declareConst) {
            return visitor.visitCmd_declareConst(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_declareConstContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_declareConstContext = Cmd_declareConstContext;
var Cmd_declareDatatypeContext = /** @class */ (function (_super) {
    __extends(Cmd_declareDatatypeContext, _super);
    function Cmd_declareDatatypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_declareDatatypeContext.prototype.CMD_DeclareDatatype = function () { return this.getToken(SMTLIBv2Parser.CMD_DeclareDatatype, 0); };
    Object.defineProperty(Cmd_declareDatatypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_declareDatatype; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_declareDatatypeContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_declareDatatype) {
            listener.enterCmd_declareDatatype(this);
        }
    };
    // @Override
    Cmd_declareDatatypeContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_declareDatatype) {
            listener.exitCmd_declareDatatype(this);
        }
    };
    // @Override
    Cmd_declareDatatypeContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_declareDatatype) {
            return visitor.visitCmd_declareDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_declareDatatypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_declareDatatypeContext = Cmd_declareDatatypeContext;
var Cmd_declareDatatypesContext = /** @class */ (function (_super) {
    __extends(Cmd_declareDatatypesContext, _super);
    function Cmd_declareDatatypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_declareDatatypesContext.prototype.CMD_DeclareDatatypes = function () { return this.getToken(SMTLIBv2Parser.CMD_DeclareDatatypes, 0); };
    Object.defineProperty(Cmd_declareDatatypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_declareDatatypes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_declareDatatypesContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_declareDatatypes) {
            listener.enterCmd_declareDatatypes(this);
        }
    };
    // @Override
    Cmd_declareDatatypesContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_declareDatatypes) {
            listener.exitCmd_declareDatatypes(this);
        }
    };
    // @Override
    Cmd_declareDatatypesContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_declareDatatypes) {
            return visitor.visitCmd_declareDatatypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_declareDatatypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_declareDatatypesContext = Cmd_declareDatatypesContext;
var Cmd_declareFunContext = /** @class */ (function (_super) {
    __extends(Cmd_declareFunContext, _super);
    function Cmd_declareFunContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_declareFunContext.prototype.CMD_DeclareFun = function () { return this.getToken(SMTLIBv2Parser.CMD_DeclareFun, 0); };
    Object.defineProperty(Cmd_declareFunContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_declareFun; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_declareFunContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_declareFun) {
            listener.enterCmd_declareFun(this);
        }
    };
    // @Override
    Cmd_declareFunContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_declareFun) {
            listener.exitCmd_declareFun(this);
        }
    };
    // @Override
    Cmd_declareFunContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_declareFun) {
            return visitor.visitCmd_declareFun(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_declareFunContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_declareFunContext = Cmd_declareFunContext;
var Cmd_declareSortContext = /** @class */ (function (_super) {
    __extends(Cmd_declareSortContext, _super);
    function Cmd_declareSortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_declareSortContext.prototype.CMD_DeclareSort = function () { return this.getToken(SMTLIBv2Parser.CMD_DeclareSort, 0); };
    Object.defineProperty(Cmd_declareSortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_declareSort; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_declareSortContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_declareSort) {
            listener.enterCmd_declareSort(this);
        }
    };
    // @Override
    Cmd_declareSortContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_declareSort) {
            listener.exitCmd_declareSort(this);
        }
    };
    // @Override
    Cmd_declareSortContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_declareSort) {
            return visitor.visitCmd_declareSort(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_declareSortContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_declareSortContext = Cmd_declareSortContext;
var Cmd_defineFunContext = /** @class */ (function (_super) {
    __extends(Cmd_defineFunContext, _super);
    function Cmd_defineFunContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_defineFunContext.prototype.CMD_DefineFun = function () { return this.getToken(SMTLIBv2Parser.CMD_DefineFun, 0); };
    Object.defineProperty(Cmd_defineFunContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_defineFun; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_defineFunContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_defineFun) {
            listener.enterCmd_defineFun(this);
        }
    };
    // @Override
    Cmd_defineFunContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_defineFun) {
            listener.exitCmd_defineFun(this);
        }
    };
    // @Override
    Cmd_defineFunContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_defineFun) {
            return visitor.visitCmd_defineFun(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_defineFunContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_defineFunContext = Cmd_defineFunContext;
var Cmd_defineFunRecContext = /** @class */ (function (_super) {
    __extends(Cmd_defineFunRecContext, _super);
    function Cmd_defineFunRecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_defineFunRecContext.prototype.CMD_DefineFunRec = function () { return this.getToken(SMTLIBv2Parser.CMD_DefineFunRec, 0); };
    Object.defineProperty(Cmd_defineFunRecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_defineFunRec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_defineFunRecContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_defineFunRec) {
            listener.enterCmd_defineFunRec(this);
        }
    };
    // @Override
    Cmd_defineFunRecContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_defineFunRec) {
            listener.exitCmd_defineFunRec(this);
        }
    };
    // @Override
    Cmd_defineFunRecContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_defineFunRec) {
            return visitor.visitCmd_defineFunRec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_defineFunRecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_defineFunRecContext = Cmd_defineFunRecContext;
var Cmd_defineFunsRecContext = /** @class */ (function (_super) {
    __extends(Cmd_defineFunsRecContext, _super);
    function Cmd_defineFunsRecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_defineFunsRecContext.prototype.CMD_DefineFunsRec = function () { return this.getToken(SMTLIBv2Parser.CMD_DefineFunsRec, 0); };
    Object.defineProperty(Cmd_defineFunsRecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_defineFunsRec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_defineFunsRecContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_defineFunsRec) {
            listener.enterCmd_defineFunsRec(this);
        }
    };
    // @Override
    Cmd_defineFunsRecContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_defineFunsRec) {
            listener.exitCmd_defineFunsRec(this);
        }
    };
    // @Override
    Cmd_defineFunsRecContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_defineFunsRec) {
            return visitor.visitCmd_defineFunsRec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_defineFunsRecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_defineFunsRecContext = Cmd_defineFunsRecContext;
var Cmd_defineSortContext = /** @class */ (function (_super) {
    __extends(Cmd_defineSortContext, _super);
    function Cmd_defineSortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_defineSortContext.prototype.CMD_DefineSort = function () { return this.getToken(SMTLIBv2Parser.CMD_DefineSort, 0); };
    Object.defineProperty(Cmd_defineSortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_defineSort; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_defineSortContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_defineSort) {
            listener.enterCmd_defineSort(this);
        }
    };
    // @Override
    Cmd_defineSortContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_defineSort) {
            listener.exitCmd_defineSort(this);
        }
    };
    // @Override
    Cmd_defineSortContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_defineSort) {
            return visitor.visitCmd_defineSort(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_defineSortContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_defineSortContext = Cmd_defineSortContext;
var Cmd_echoContext = /** @class */ (function (_super) {
    __extends(Cmd_echoContext, _super);
    function Cmd_echoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_echoContext.prototype.CMD_Echo = function () { return this.getToken(SMTLIBv2Parser.CMD_Echo, 0); };
    Object.defineProperty(Cmd_echoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_echo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_echoContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_echo) {
            listener.enterCmd_echo(this);
        }
    };
    // @Override
    Cmd_echoContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_echo) {
            listener.exitCmd_echo(this);
        }
    };
    // @Override
    Cmd_echoContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_echo) {
            return visitor.visitCmd_echo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_echoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_echoContext = Cmd_echoContext;
var Cmd_exitContext = /** @class */ (function (_super) {
    __extends(Cmd_exitContext, _super);
    function Cmd_exitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_exitContext.prototype.CMD_Exit = function () { return this.getToken(SMTLIBv2Parser.CMD_Exit, 0); };
    Object.defineProperty(Cmd_exitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_exit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_exitContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_exit) {
            listener.enterCmd_exit(this);
        }
    };
    // @Override
    Cmd_exitContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_exit) {
            listener.exitCmd_exit(this);
        }
    };
    // @Override
    Cmd_exitContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_exit) {
            return visitor.visitCmd_exit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_exitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_exitContext = Cmd_exitContext;
var Cmd_getAssertionsContext = /** @class */ (function (_super) {
    __extends(Cmd_getAssertionsContext, _super);
    function Cmd_getAssertionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getAssertionsContext.prototype.CMD_GetAssertions = function () { return this.getToken(SMTLIBv2Parser.CMD_GetAssertions, 0); };
    Object.defineProperty(Cmd_getAssertionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getAssertions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getAssertionsContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getAssertions) {
            listener.enterCmd_getAssertions(this);
        }
    };
    // @Override
    Cmd_getAssertionsContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getAssertions) {
            listener.exitCmd_getAssertions(this);
        }
    };
    // @Override
    Cmd_getAssertionsContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getAssertions) {
            return visitor.visitCmd_getAssertions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getAssertionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getAssertionsContext = Cmd_getAssertionsContext;
var Cmd_getAssignmentContext = /** @class */ (function (_super) {
    __extends(Cmd_getAssignmentContext, _super);
    function Cmd_getAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getAssignmentContext.prototype.CMD_GetAssignment = function () { return this.getToken(SMTLIBv2Parser.CMD_GetAssignment, 0); };
    Object.defineProperty(Cmd_getAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getAssignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getAssignment) {
            listener.enterCmd_getAssignment(this);
        }
    };
    // @Override
    Cmd_getAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getAssignment) {
            listener.exitCmd_getAssignment(this);
        }
    };
    // @Override
    Cmd_getAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getAssignment) {
            return visitor.visitCmd_getAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getAssignmentContext = Cmd_getAssignmentContext;
var Cmd_getInfoContext = /** @class */ (function (_super) {
    __extends(Cmd_getInfoContext, _super);
    function Cmd_getInfoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getInfoContext.prototype.CMD_GetInfo = function () { return this.getToken(SMTLIBv2Parser.CMD_GetInfo, 0); };
    Object.defineProperty(Cmd_getInfoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getInfo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getInfoContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getInfo) {
            listener.enterCmd_getInfo(this);
        }
    };
    // @Override
    Cmd_getInfoContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getInfo) {
            listener.exitCmd_getInfo(this);
        }
    };
    // @Override
    Cmd_getInfoContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getInfo) {
            return visitor.visitCmd_getInfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getInfoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getInfoContext = Cmd_getInfoContext;
var Cmd_getModelContext = /** @class */ (function (_super) {
    __extends(Cmd_getModelContext, _super);
    function Cmd_getModelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getModelContext.prototype.CMD_GetModel = function () { return this.getToken(SMTLIBv2Parser.CMD_GetModel, 0); };
    Object.defineProperty(Cmd_getModelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getModel; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getModelContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getModel) {
            listener.enterCmd_getModel(this);
        }
    };
    // @Override
    Cmd_getModelContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getModel) {
            listener.exitCmd_getModel(this);
        }
    };
    // @Override
    Cmd_getModelContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getModel) {
            return visitor.visitCmd_getModel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getModelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getModelContext = Cmd_getModelContext;
var Cmd_getOptionContext = /** @class */ (function (_super) {
    __extends(Cmd_getOptionContext, _super);
    function Cmd_getOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getOptionContext.prototype.CMD_GetOption = function () { return this.getToken(SMTLIBv2Parser.CMD_GetOption, 0); };
    Object.defineProperty(Cmd_getOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getOption) {
            listener.enterCmd_getOption(this);
        }
    };
    // @Override
    Cmd_getOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getOption) {
            listener.exitCmd_getOption(this);
        }
    };
    // @Override
    Cmd_getOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getOption) {
            return visitor.visitCmd_getOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getOptionContext = Cmd_getOptionContext;
var Cmd_getProofContext = /** @class */ (function (_super) {
    __extends(Cmd_getProofContext, _super);
    function Cmd_getProofContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getProofContext.prototype.CMD_GetProof = function () { return this.getToken(SMTLIBv2Parser.CMD_GetProof, 0); };
    Object.defineProperty(Cmd_getProofContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getProof; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getProofContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getProof) {
            listener.enterCmd_getProof(this);
        }
    };
    // @Override
    Cmd_getProofContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getProof) {
            listener.exitCmd_getProof(this);
        }
    };
    // @Override
    Cmd_getProofContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getProof) {
            return visitor.visitCmd_getProof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getProofContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getProofContext = Cmd_getProofContext;
var Cmd_getUnsatAssumptionsContext = /** @class */ (function (_super) {
    __extends(Cmd_getUnsatAssumptionsContext, _super);
    function Cmd_getUnsatAssumptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getUnsatAssumptionsContext.prototype.CMD_GetUnsatAssumptions = function () { return this.getToken(SMTLIBv2Parser.CMD_GetUnsatAssumptions, 0); };
    Object.defineProperty(Cmd_getUnsatAssumptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getUnsatAssumptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getUnsatAssumptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getUnsatAssumptions) {
            listener.enterCmd_getUnsatAssumptions(this);
        }
    };
    // @Override
    Cmd_getUnsatAssumptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getUnsatAssumptions) {
            listener.exitCmd_getUnsatAssumptions(this);
        }
    };
    // @Override
    Cmd_getUnsatAssumptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getUnsatAssumptions) {
            return visitor.visitCmd_getUnsatAssumptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getUnsatAssumptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getUnsatAssumptionsContext = Cmd_getUnsatAssumptionsContext;
var Cmd_getUnsatCoreContext = /** @class */ (function (_super) {
    __extends(Cmd_getUnsatCoreContext, _super);
    function Cmd_getUnsatCoreContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getUnsatCoreContext.prototype.CMD_GetUnsatCore = function () { return this.getToken(SMTLIBv2Parser.CMD_GetUnsatCore, 0); };
    Object.defineProperty(Cmd_getUnsatCoreContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getUnsatCore; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getUnsatCoreContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getUnsatCore) {
            listener.enterCmd_getUnsatCore(this);
        }
    };
    // @Override
    Cmd_getUnsatCoreContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getUnsatCore) {
            listener.exitCmd_getUnsatCore(this);
        }
    };
    // @Override
    Cmd_getUnsatCoreContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getUnsatCore) {
            return visitor.visitCmd_getUnsatCore(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getUnsatCoreContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getUnsatCoreContext = Cmd_getUnsatCoreContext;
var Cmd_getValueContext = /** @class */ (function (_super) {
    __extends(Cmd_getValueContext, _super);
    function Cmd_getValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_getValueContext.prototype.CMD_GetValue = function () { return this.getToken(SMTLIBv2Parser.CMD_GetValue, 0); };
    Object.defineProperty(Cmd_getValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_getValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_getValueContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_getValue) {
            listener.enterCmd_getValue(this);
        }
    };
    // @Override
    Cmd_getValueContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_getValue) {
            listener.exitCmd_getValue(this);
        }
    };
    // @Override
    Cmd_getValueContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_getValue) {
            return visitor.visitCmd_getValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_getValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_getValueContext = Cmd_getValueContext;
var Cmd_popContext = /** @class */ (function (_super) {
    __extends(Cmd_popContext, _super);
    function Cmd_popContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_popContext.prototype.CMD_Pop = function () { return this.getToken(SMTLIBv2Parser.CMD_Pop, 0); };
    Object.defineProperty(Cmd_popContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_pop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_popContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_pop) {
            listener.enterCmd_pop(this);
        }
    };
    // @Override
    Cmd_popContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_pop) {
            listener.exitCmd_pop(this);
        }
    };
    // @Override
    Cmd_popContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_pop) {
            return visitor.visitCmd_pop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_popContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_popContext = Cmd_popContext;
var Cmd_pushContext = /** @class */ (function (_super) {
    __extends(Cmd_pushContext, _super);
    function Cmd_pushContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_pushContext.prototype.CMD_Push = function () { return this.getToken(SMTLIBv2Parser.CMD_Push, 0); };
    Object.defineProperty(Cmd_pushContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_push; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_pushContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_push) {
            listener.enterCmd_push(this);
        }
    };
    // @Override
    Cmd_pushContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_push) {
            listener.exitCmd_push(this);
        }
    };
    // @Override
    Cmd_pushContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_push) {
            return visitor.visitCmd_push(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_pushContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_pushContext = Cmd_pushContext;
var Cmd_resetContext = /** @class */ (function (_super) {
    __extends(Cmd_resetContext, _super);
    function Cmd_resetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_resetContext.prototype.CMD_Reset = function () { return this.getToken(SMTLIBv2Parser.CMD_Reset, 0); };
    Object.defineProperty(Cmd_resetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_reset; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_resetContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_reset) {
            listener.enterCmd_reset(this);
        }
    };
    // @Override
    Cmd_resetContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_reset) {
            listener.exitCmd_reset(this);
        }
    };
    // @Override
    Cmd_resetContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_reset) {
            return visitor.visitCmd_reset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_resetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_resetContext = Cmd_resetContext;
var Cmd_resetAssertionsContext = /** @class */ (function (_super) {
    __extends(Cmd_resetAssertionsContext, _super);
    function Cmd_resetAssertionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_resetAssertionsContext.prototype.CMD_ResetAssertions = function () { return this.getToken(SMTLIBv2Parser.CMD_ResetAssertions, 0); };
    Object.defineProperty(Cmd_resetAssertionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_resetAssertions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_resetAssertionsContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_resetAssertions) {
            listener.enterCmd_resetAssertions(this);
        }
    };
    // @Override
    Cmd_resetAssertionsContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_resetAssertions) {
            listener.exitCmd_resetAssertions(this);
        }
    };
    // @Override
    Cmd_resetAssertionsContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_resetAssertions) {
            return visitor.visitCmd_resetAssertions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_resetAssertionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_resetAssertionsContext = Cmd_resetAssertionsContext;
var Cmd_setInfoContext = /** @class */ (function (_super) {
    __extends(Cmd_setInfoContext, _super);
    function Cmd_setInfoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_setInfoContext.prototype.CMD_SetInfo = function () { return this.getToken(SMTLIBv2Parser.CMD_SetInfo, 0); };
    Object.defineProperty(Cmd_setInfoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_setInfo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_setInfoContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_setInfo) {
            listener.enterCmd_setInfo(this);
        }
    };
    // @Override
    Cmd_setInfoContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_setInfo) {
            listener.exitCmd_setInfo(this);
        }
    };
    // @Override
    Cmd_setInfoContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_setInfo) {
            return visitor.visitCmd_setInfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_setInfoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_setInfoContext = Cmd_setInfoContext;
var Cmd_setLogicContext = /** @class */ (function (_super) {
    __extends(Cmd_setLogicContext, _super);
    function Cmd_setLogicContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_setLogicContext.prototype.CMD_SetLogic = function () { return this.getToken(SMTLIBv2Parser.CMD_SetLogic, 0); };
    Object.defineProperty(Cmd_setLogicContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_setLogic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_setLogicContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_setLogic) {
            listener.enterCmd_setLogic(this);
        }
    };
    // @Override
    Cmd_setLogicContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_setLogic) {
            listener.exitCmd_setLogic(this);
        }
    };
    // @Override
    Cmd_setLogicContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_setLogic) {
            return visitor.visitCmd_setLogic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_setLogicContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_setLogicContext = Cmd_setLogicContext;
var Cmd_setOptionContext = /** @class */ (function (_super) {
    __extends(Cmd_setOptionContext, _super);
    function Cmd_setOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cmd_setOptionContext.prototype.CMD_SetOption = function () { return this.getToken(SMTLIBv2Parser.CMD_SetOption, 0); };
    Object.defineProperty(Cmd_setOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_cmd_setOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cmd_setOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd_setOption) {
            listener.enterCmd_setOption(this);
        }
    };
    // @Override
    Cmd_setOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd_setOption) {
            listener.exitCmd_setOption(this);
        }
    };
    // @Override
    Cmd_setOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd_setOption) {
            return visitor.visitCmd_setOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cmd_setOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cmd_setOptionContext = Cmd_setOptionContext;
var CommandContext = /** @class */ (function (_super) {
    __extends(CommandContext, _super);
    function CommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommandContext.prototype.ParOpen = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParOpen);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParOpen, i);
        }
    };
    CommandContext.prototype.cmd_assert = function () {
        return this.tryGetRuleContext(0, Cmd_assertContext);
    };
    CommandContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    CommandContext.prototype.ParClose = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParClose);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParClose, i);
        }
    };
    CommandContext.prototype.cmd_checkSat = function () {
        return this.tryGetRuleContext(0, Cmd_checkSatContext);
    };
    CommandContext.prototype.cmd_checkSatAssuming = function () {
        return this.tryGetRuleContext(0, Cmd_checkSatAssumingContext);
    };
    CommandContext.prototype.cmd_declareConst = function () {
        return this.tryGetRuleContext(0, Cmd_declareConstContext);
    };
    CommandContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    CommandContext.prototype.sort = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SortContext);
        }
        else {
            return this.getRuleContext(i, SortContext);
        }
    };
    CommandContext.prototype.cmd_declareDatatype = function () {
        return this.tryGetRuleContext(0, Cmd_declareDatatypeContext);
    };
    CommandContext.prototype.datatype_dec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Datatype_decContext);
        }
        else {
            return this.getRuleContext(i, Datatype_decContext);
        }
    };
    CommandContext.prototype.cmd_declareDatatypes = function () {
        return this.tryGetRuleContext(0, Cmd_declareDatatypesContext);
    };
    CommandContext.prototype.sort_dec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sort_decContext);
        }
        else {
            return this.getRuleContext(i, Sort_decContext);
        }
    };
    CommandContext.prototype.cmd_declareFun = function () {
        return this.tryGetRuleContext(0, Cmd_declareFunContext);
    };
    CommandContext.prototype.cmd_declareSort = function () {
        return this.tryGetRuleContext(0, Cmd_declareSortContext);
    };
    CommandContext.prototype.numeral = function () {
        return this.tryGetRuleContext(0, NumeralContext);
    };
    CommandContext.prototype.cmd_defineFun = function () {
        return this.tryGetRuleContext(0, Cmd_defineFunContext);
    };
    CommandContext.prototype.function_def = function () {
        return this.tryGetRuleContext(0, Function_defContext);
    };
    CommandContext.prototype.cmd_defineFunRec = function () {
        return this.tryGetRuleContext(0, Cmd_defineFunRecContext);
    };
    CommandContext.prototype.cmd_defineFunsRec = function () {
        return this.tryGetRuleContext(0, Cmd_defineFunsRecContext);
    };
    CommandContext.prototype.function_dec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Function_decContext);
        }
        else {
            return this.getRuleContext(i, Function_decContext);
        }
    };
    CommandContext.prototype.cmd_defineSort = function () {
        return this.tryGetRuleContext(0, Cmd_defineSortContext);
    };
    CommandContext.prototype.cmd_echo = function () {
        return this.tryGetRuleContext(0, Cmd_echoContext);
    };
    CommandContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    CommandContext.prototype.cmd_exit = function () {
        return this.tryGetRuleContext(0, Cmd_exitContext);
    };
    CommandContext.prototype.cmd_getAssertions = function () {
        return this.tryGetRuleContext(0, Cmd_getAssertionsContext);
    };
    CommandContext.prototype.cmd_getAssignment = function () {
        return this.tryGetRuleContext(0, Cmd_getAssignmentContext);
    };
    CommandContext.prototype.cmd_getInfo = function () {
        return this.tryGetRuleContext(0, Cmd_getInfoContext);
    };
    CommandContext.prototype.info_flag = function () {
        return this.tryGetRuleContext(0, Info_flagContext);
    };
    CommandContext.prototype.cmd_getModel = function () {
        return this.tryGetRuleContext(0, Cmd_getModelContext);
    };
    CommandContext.prototype.cmd_getOption = function () {
        return this.tryGetRuleContext(0, Cmd_getOptionContext);
    };
    CommandContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    CommandContext.prototype.cmd_getProof = function () {
        return this.tryGetRuleContext(0, Cmd_getProofContext);
    };
    CommandContext.prototype.cmd_getUnsatAssumptions = function () {
        return this.tryGetRuleContext(0, Cmd_getUnsatAssumptionsContext);
    };
    CommandContext.prototype.cmd_getUnsatCore = function () {
        return this.tryGetRuleContext(0, Cmd_getUnsatCoreContext);
    };
    CommandContext.prototype.cmd_getValue = function () {
        return this.tryGetRuleContext(0, Cmd_getValueContext);
    };
    CommandContext.prototype.cmd_pop = function () {
        return this.tryGetRuleContext(0, Cmd_popContext);
    };
    CommandContext.prototype.cmd_push = function () {
        return this.tryGetRuleContext(0, Cmd_pushContext);
    };
    CommandContext.prototype.cmd_reset = function () {
        return this.tryGetRuleContext(0, Cmd_resetContext);
    };
    CommandContext.prototype.cmd_resetAssertions = function () {
        return this.tryGetRuleContext(0, Cmd_resetAssertionsContext);
    };
    CommandContext.prototype.cmd_setInfo = function () {
        return this.tryGetRuleContext(0, Cmd_setInfoContext);
    };
    CommandContext.prototype.attribute = function () {
        return this.tryGetRuleContext(0, AttributeContext);
    };
    CommandContext.prototype.cmd_setLogic = function () {
        return this.tryGetRuleContext(0, Cmd_setLogicContext);
    };
    CommandContext.prototype.cmd_setOption = function () {
        return this.tryGetRuleContext(0, Cmd_setOptionContext);
    };
    CommandContext.prototype.option = function () {
        return this.tryGetRuleContext(0, OptionContext);
    };
    Object.defineProperty(CommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommandContext.prototype.enterRule = function (listener) {
        if (listener.enterCommand) {
            listener.enterCommand(this);
        }
    };
    // @Override
    CommandContext.prototype.exitRule = function (listener) {
        if (listener.exitCommand) {
            listener.exitCommand(this);
        }
    };
    // @Override
    CommandContext.prototype.accept = function (visitor) {
        if (visitor.visitCommand) {
            return visitor.visitCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommandContext = CommandContext;
var B_valueContext = /** @class */ (function (_super) {
    __extends(B_valueContext, _super);
    function B_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    B_valueContext.prototype.PS_True = function () { return this.tryGetToken(SMTLIBv2Parser.PS_True, 0); };
    B_valueContext.prototype.PS_False = function () { return this.tryGetToken(SMTLIBv2Parser.PS_False, 0); };
    Object.defineProperty(B_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_b_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    B_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterB_value) {
            listener.enterB_value(this);
        }
    };
    // @Override
    B_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitB_value) {
            listener.exitB_value(this);
        }
    };
    // @Override
    B_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitB_value) {
            return visitor.visitB_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return B_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.B_valueContext = B_valueContext;
var OptionContext = /** @class */ (function (_super) {
    __extends(OptionContext, _super);
    function OptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionContext.prototype.PK_DiagnosticOutputChannel = function () { return this.tryGetToken(SMTLIBv2Parser.PK_DiagnosticOutputChannel, 0); };
    OptionContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    OptionContext.prototype.PK_GlobalDeclarations = function () { return this.tryGetToken(SMTLIBv2Parser.PK_GlobalDeclarations, 0); };
    OptionContext.prototype.b_value = function () {
        return this.tryGetRuleContext(0, B_valueContext);
    };
    OptionContext.prototype.PK_InteractiveMode = function () { return this.tryGetToken(SMTLIBv2Parser.PK_InteractiveMode, 0); };
    OptionContext.prototype.PK_PrintSuccess = function () { return this.tryGetToken(SMTLIBv2Parser.PK_PrintSuccess, 0); };
    OptionContext.prototype.PK_ProduceAssertions = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceAssertions, 0); };
    OptionContext.prototype.PK_ProduceAssignments = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceAssignments, 0); };
    OptionContext.prototype.PK_ProduceModels = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceModels, 0); };
    OptionContext.prototype.PK_ProduceProofs = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceProofs, 0); };
    OptionContext.prototype.PK_ProduceUnsatAssumptions = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceUnsatAssumptions, 0); };
    OptionContext.prototype.PK_ProduceUnsatCores = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ProduceUnsatCores, 0); };
    OptionContext.prototype.PK_RandomSeed = function () { return this.tryGetToken(SMTLIBv2Parser.PK_RandomSeed, 0); };
    OptionContext.prototype.numeral = function () {
        return this.tryGetRuleContext(0, NumeralContext);
    };
    OptionContext.prototype.PK_RegularOutputChannel = function () { return this.tryGetToken(SMTLIBv2Parser.PK_RegularOutputChannel, 0); };
    OptionContext.prototype.PK_ReproducibleResourceLimit = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ReproducibleResourceLimit, 0); };
    OptionContext.prototype.PK_Verbosity = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Verbosity, 0); };
    OptionContext.prototype.attribute = function () {
        return this.tryGetRuleContext(0, AttributeContext);
    };
    Object.defineProperty(OptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_option; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionContext.prototype.enterRule = function (listener) {
        if (listener.enterOption) {
            listener.enterOption(this);
        }
    };
    // @Override
    OptionContext.prototype.exitRule = function (listener) {
        if (listener.exitOption) {
            listener.exitOption(this);
        }
    };
    // @Override
    OptionContext.prototype.accept = function (visitor) {
        if (visitor.visitOption) {
            return visitor.visitOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionContext = OptionContext;
var Info_flagContext = /** @class */ (function (_super) {
    __extends(Info_flagContext, _super);
    function Info_flagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Info_flagContext.prototype.PK_AllStatistics = function () { return this.tryGetToken(SMTLIBv2Parser.PK_AllStatistics, 0); };
    Info_flagContext.prototype.PK_AssertionStackLevels = function () { return this.tryGetToken(SMTLIBv2Parser.PK_AssertionStackLevels, 0); };
    Info_flagContext.prototype.PK_Authors = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Authors, 0); };
    Info_flagContext.prototype.PK_ErrorBehaviour = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ErrorBehaviour, 0); };
    Info_flagContext.prototype.PK_Name = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Name, 0); };
    Info_flagContext.prototype.PK_ReasonUnknown = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ReasonUnknown, 0); };
    Info_flagContext.prototype.PK_Version = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Version, 0); };
    Info_flagContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    Object.defineProperty(Info_flagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_info_flag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Info_flagContext.prototype.enterRule = function (listener) {
        if (listener.enterInfo_flag) {
            listener.enterInfo_flag(this);
        }
    };
    // @Override
    Info_flagContext.prototype.exitRule = function (listener) {
        if (listener.exitInfo_flag) {
            listener.exitInfo_flag(this);
        }
    };
    // @Override
    Info_flagContext.prototype.accept = function (visitor) {
        if (visitor.visitInfo_flag) {
            return visitor.visitInfo_flag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Info_flagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Info_flagContext = Info_flagContext;
var Error_behaviourContext = /** @class */ (function (_super) {
    __extends(Error_behaviourContext, _super);
    function Error_behaviourContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Error_behaviourContext.prototype.PS_ImmediateExit = function () { return this.tryGetToken(SMTLIBv2Parser.PS_ImmediateExit, 0); };
    Error_behaviourContext.prototype.PS_ContinuedExecution = function () { return this.tryGetToken(SMTLIBv2Parser.PS_ContinuedExecution, 0); };
    Object.defineProperty(Error_behaviourContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_error_behaviour; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Error_behaviourContext.prototype.enterRule = function (listener) {
        if (listener.enterError_behaviour) {
            listener.enterError_behaviour(this);
        }
    };
    // @Override
    Error_behaviourContext.prototype.exitRule = function (listener) {
        if (listener.exitError_behaviour) {
            listener.exitError_behaviour(this);
        }
    };
    // @Override
    Error_behaviourContext.prototype.accept = function (visitor) {
        if (visitor.visitError_behaviour) {
            return visitor.visitError_behaviour(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Error_behaviourContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Error_behaviourContext = Error_behaviourContext;
var Reason_unknownContext = /** @class */ (function (_super) {
    __extends(Reason_unknownContext, _super);
    function Reason_unknownContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Reason_unknownContext.prototype.PS_Memout = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Memout, 0); };
    Reason_unknownContext.prototype.PS_Incomplete = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Incomplete, 0); };
    Reason_unknownContext.prototype.s_expr = function () {
        return this.tryGetRuleContext(0, S_exprContext);
    };
    Object.defineProperty(Reason_unknownContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_reason_unknown; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Reason_unknownContext.prototype.enterRule = function (listener) {
        if (listener.enterReason_unknown) {
            listener.enterReason_unknown(this);
        }
    };
    // @Override
    Reason_unknownContext.prototype.exitRule = function (listener) {
        if (listener.exitReason_unknown) {
            listener.exitReason_unknown(this);
        }
    };
    // @Override
    Reason_unknownContext.prototype.accept = function (visitor) {
        if (visitor.visitReason_unknown) {
            return visitor.visitReason_unknown(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Reason_unknownContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Reason_unknownContext = Reason_unknownContext;
var Model_responseContext = /** @class */ (function (_super) {
    __extends(Model_responseContext, _super);
    function Model_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Model_responseContext.prototype.ParOpen = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParOpen);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParOpen, i);
        }
    };
    Model_responseContext.prototype.CMD_DefineFun = function () { return this.tryGetToken(SMTLIBv2Parser.CMD_DefineFun, 0); };
    Model_responseContext.prototype.function_def = function () {
        return this.tryGetRuleContext(0, Function_defContext);
    };
    Model_responseContext.prototype.ParClose = function (i) {
        if (i === undefined) {
            return this.getTokens(SMTLIBv2Parser.ParClose);
        }
        else {
            return this.getToken(SMTLIBv2Parser.ParClose, i);
        }
    };
    Model_responseContext.prototype.CMD_DefineFunRec = function () { return this.tryGetToken(SMTLIBv2Parser.CMD_DefineFunRec, 0); };
    Model_responseContext.prototype.CMD_DefineFunsRec = function () { return this.tryGetToken(SMTLIBv2Parser.CMD_DefineFunsRec, 0); };
    Model_responseContext.prototype.function_dec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Function_decContext);
        }
        else {
            return this.getRuleContext(i, Function_decContext);
        }
    };
    Model_responseContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(Model_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_model_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Model_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterModel_response) {
            listener.enterModel_response(this);
        }
    };
    // @Override
    Model_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitModel_response) {
            listener.exitModel_response(this);
        }
    };
    // @Override
    Model_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitModel_response) {
            return visitor.visitModel_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Model_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Model_responseContext = Model_responseContext;
var Info_responseContext = /** @class */ (function (_super) {
    __extends(Info_responseContext, _super);
    function Info_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Info_responseContext.prototype.PK_AssertionStackLevels = function () { return this.tryGetToken(SMTLIBv2Parser.PK_AssertionStackLevels, 0); };
    Info_responseContext.prototype.numeral = function () {
        return this.tryGetRuleContext(0, NumeralContext);
    };
    Info_responseContext.prototype.PK_Authors = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Authors, 0); };
    Info_responseContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Info_responseContext.prototype.PK_ErrorBehaviour = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ErrorBehaviour, 0); };
    Info_responseContext.prototype.error_behaviour = function () {
        return this.tryGetRuleContext(0, Error_behaviourContext);
    };
    Info_responseContext.prototype.PK_Name = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Name, 0); };
    Info_responseContext.prototype.PK_ReasonUnknown = function () { return this.tryGetToken(SMTLIBv2Parser.PK_ReasonUnknown, 0); };
    Info_responseContext.prototype.reason_unknown = function () {
        return this.tryGetRuleContext(0, Reason_unknownContext);
    };
    Info_responseContext.prototype.PK_Version = function () { return this.tryGetToken(SMTLIBv2Parser.PK_Version, 0); };
    Info_responseContext.prototype.attribute = function () {
        return this.tryGetRuleContext(0, AttributeContext);
    };
    Object.defineProperty(Info_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_info_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Info_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterInfo_response) {
            listener.enterInfo_response(this);
        }
    };
    // @Override
    Info_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitInfo_response) {
            listener.exitInfo_response(this);
        }
    };
    // @Override
    Info_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitInfo_response) {
            return visitor.visitInfo_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Info_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Info_responseContext = Info_responseContext;
var Valuation_pairContext = /** @class */ (function (_super) {
    __extends(Valuation_pairContext, _super);
    function Valuation_pairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Valuation_pairContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Valuation_pairContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Valuation_pairContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(Valuation_pairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_valuation_pair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Valuation_pairContext.prototype.enterRule = function (listener) {
        if (listener.enterValuation_pair) {
            listener.enterValuation_pair(this);
        }
    };
    // @Override
    Valuation_pairContext.prototype.exitRule = function (listener) {
        if (listener.exitValuation_pair) {
            listener.exitValuation_pair(this);
        }
    };
    // @Override
    Valuation_pairContext.prototype.accept = function (visitor) {
        if (visitor.visitValuation_pair) {
            return visitor.visitValuation_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Valuation_pairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Valuation_pairContext = Valuation_pairContext;
var T_valuation_pairContext = /** @class */ (function (_super) {
    __extends(T_valuation_pairContext, _super);
    function T_valuation_pairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    T_valuation_pairContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    T_valuation_pairContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    T_valuation_pairContext.prototype.b_value = function () {
        return this.getRuleContext(0, B_valueContext);
    };
    T_valuation_pairContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(T_valuation_pairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_t_valuation_pair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    T_valuation_pairContext.prototype.enterRule = function (listener) {
        if (listener.enterT_valuation_pair) {
            listener.enterT_valuation_pair(this);
        }
    };
    // @Override
    T_valuation_pairContext.prototype.exitRule = function (listener) {
        if (listener.exitT_valuation_pair) {
            listener.exitT_valuation_pair(this);
        }
    };
    // @Override
    T_valuation_pairContext.prototype.accept = function (visitor) {
        if (visitor.visitT_valuation_pair) {
            return visitor.visitT_valuation_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return T_valuation_pairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.T_valuation_pairContext = T_valuation_pairContext;
var Check_sat_responseContext = /** @class */ (function (_super) {
    __extends(Check_sat_responseContext, _super);
    function Check_sat_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Check_sat_responseContext.prototype.PS_Sat = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Sat, 0); };
    Check_sat_responseContext.prototype.PS_Unsat = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Unsat, 0); };
    Check_sat_responseContext.prototype.PS_Unknown = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Unknown, 0); };
    Object.defineProperty(Check_sat_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_check_sat_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Check_sat_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterCheck_sat_response) {
            listener.enterCheck_sat_response(this);
        }
    };
    // @Override
    Check_sat_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitCheck_sat_response) {
            listener.exitCheck_sat_response(this);
        }
    };
    // @Override
    Check_sat_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitCheck_sat_response) {
            return visitor.visitCheck_sat_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Check_sat_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Check_sat_responseContext = Check_sat_responseContext;
var Echo_responseContext = /** @class */ (function (_super) {
    __extends(Echo_responseContext, _super);
    function Echo_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Echo_responseContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(Echo_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_echo_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Echo_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterEcho_response) {
            listener.enterEcho_response(this);
        }
    };
    // @Override
    Echo_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitEcho_response) {
            listener.exitEcho_response(this);
        }
    };
    // @Override
    Echo_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitEcho_response) {
            return visitor.visitEcho_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Echo_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Echo_responseContext = Echo_responseContext;
var Get_assertions_responseContext = /** @class */ (function (_super) {
    __extends(Get_assertions_responseContext, _super);
    function Get_assertions_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_assertions_responseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Get_assertions_responseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Get_assertions_responseContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(Get_assertions_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_assertions_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_assertions_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_assertions_response) {
            listener.enterGet_assertions_response(this);
        }
    };
    // @Override
    Get_assertions_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_assertions_response) {
            listener.exitGet_assertions_response(this);
        }
    };
    // @Override
    Get_assertions_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_assertions_response) {
            return visitor.visitGet_assertions_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_assertions_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_assertions_responseContext = Get_assertions_responseContext;
var Get_assignment_responseContext = /** @class */ (function (_super) {
    __extends(Get_assignment_responseContext, _super);
    function Get_assignment_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_assignment_responseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Get_assignment_responseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Get_assignment_responseContext.prototype.t_valuation_pair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(T_valuation_pairContext);
        }
        else {
            return this.getRuleContext(i, T_valuation_pairContext);
        }
    };
    Object.defineProperty(Get_assignment_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_assignment_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_assignment_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_assignment_response) {
            listener.enterGet_assignment_response(this);
        }
    };
    // @Override
    Get_assignment_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_assignment_response) {
            listener.exitGet_assignment_response(this);
        }
    };
    // @Override
    Get_assignment_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_assignment_response) {
            return visitor.visitGet_assignment_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_assignment_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_assignment_responseContext = Get_assignment_responseContext;
var Get_info_responseContext = /** @class */ (function (_super) {
    __extends(Get_info_responseContext, _super);
    function Get_info_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_info_responseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Get_info_responseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Get_info_responseContext.prototype.info_response = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Info_responseContext);
        }
        else {
            return this.getRuleContext(i, Info_responseContext);
        }
    };
    Object.defineProperty(Get_info_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_info_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_info_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_info_response) {
            listener.enterGet_info_response(this);
        }
    };
    // @Override
    Get_info_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_info_response) {
            listener.exitGet_info_response(this);
        }
    };
    // @Override
    Get_info_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_info_response) {
            return visitor.visitGet_info_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_info_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_info_responseContext = Get_info_responseContext;
var Get_model_responseContext = /** @class */ (function (_super) {
    __extends(Get_model_responseContext, _super);
    function Get_model_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_model_responseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Get_model_responseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Get_model_responseContext.prototype.model_response = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Model_responseContext);
        }
        else {
            return this.getRuleContext(i, Model_responseContext);
        }
    };
    Object.defineProperty(Get_model_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_model_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_model_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_model_response) {
            listener.enterGet_model_response(this);
        }
    };
    // @Override
    Get_model_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_model_response) {
            listener.exitGet_model_response(this);
        }
    };
    // @Override
    Get_model_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_model_response) {
            return visitor.visitGet_model_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_model_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_model_responseContext = Get_model_responseContext;
var Get_option_responseContext = /** @class */ (function (_super) {
    __extends(Get_option_responseContext, _super);
    function Get_option_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_option_responseContext.prototype.attribute_value = function () {
        return this.getRuleContext(0, Attribute_valueContext);
    };
    Object.defineProperty(Get_option_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_option_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_option_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_option_response) {
            listener.enterGet_option_response(this);
        }
    };
    // @Override
    Get_option_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_option_response) {
            listener.exitGet_option_response(this);
        }
    };
    // @Override
    Get_option_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_option_response) {
            return visitor.visitGet_option_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_option_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_option_responseContext = Get_option_responseContext;
var Get_proof_responseContext = /** @class */ (function (_super) {
    __extends(Get_proof_responseContext, _super);
    function Get_proof_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_proof_responseContext.prototype.s_expr = function () {
        return this.getRuleContext(0, S_exprContext);
    };
    Object.defineProperty(Get_proof_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_proof_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_proof_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_proof_response) {
            listener.enterGet_proof_response(this);
        }
    };
    // @Override
    Get_proof_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_proof_response) {
            listener.exitGet_proof_response(this);
        }
    };
    // @Override
    Get_proof_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_proof_response) {
            return visitor.visitGet_proof_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_proof_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_proof_responseContext = Get_proof_responseContext;
var Get_unsat_assump_responseContext = /** @class */ (function (_super) {
    __extends(Get_unsat_assump_responseContext, _super);
    function Get_unsat_assump_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_unsat_assump_responseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Get_unsat_assump_responseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Get_unsat_assump_responseContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    Object.defineProperty(Get_unsat_assump_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_unsat_assump_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_unsat_assump_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_unsat_assump_response) {
            listener.enterGet_unsat_assump_response(this);
        }
    };
    // @Override
    Get_unsat_assump_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_unsat_assump_response) {
            listener.exitGet_unsat_assump_response(this);
        }
    };
    // @Override
    Get_unsat_assump_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_unsat_assump_response) {
            return visitor.visitGet_unsat_assump_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_unsat_assump_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_unsat_assump_responseContext = Get_unsat_assump_responseContext;
var Get_unsat_core_responseContext = /** @class */ (function (_super) {
    __extends(Get_unsat_core_responseContext, _super);
    function Get_unsat_core_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_unsat_core_responseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Get_unsat_core_responseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Get_unsat_core_responseContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    Object.defineProperty(Get_unsat_core_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_unsat_core_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_unsat_core_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_unsat_core_response) {
            listener.enterGet_unsat_core_response(this);
        }
    };
    // @Override
    Get_unsat_core_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_unsat_core_response) {
            listener.exitGet_unsat_core_response(this);
        }
    };
    // @Override
    Get_unsat_core_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_unsat_core_response) {
            return visitor.visitGet_unsat_core_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_unsat_core_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_unsat_core_responseContext = Get_unsat_core_responseContext;
var Get_value_responseContext = /** @class */ (function (_super) {
    __extends(Get_value_responseContext, _super);
    function Get_value_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Get_value_responseContext.prototype.ParOpen = function () { return this.getToken(SMTLIBv2Parser.ParOpen, 0); };
    Get_value_responseContext.prototype.ParClose = function () { return this.getToken(SMTLIBv2Parser.ParClose, 0); };
    Get_value_responseContext.prototype.valuation_pair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Valuation_pairContext);
        }
        else {
            return this.getRuleContext(i, Valuation_pairContext);
        }
    };
    Object.defineProperty(Get_value_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_get_value_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Get_value_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGet_value_response) {
            listener.enterGet_value_response(this);
        }
    };
    // @Override
    Get_value_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGet_value_response) {
            listener.exitGet_value_response(this);
        }
    };
    // @Override
    Get_value_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGet_value_response) {
            return visitor.visitGet_value_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Get_value_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Get_value_responseContext = Get_value_responseContext;
var Specific_success_responseContext = /** @class */ (function (_super) {
    __extends(Specific_success_responseContext, _super);
    function Specific_success_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Specific_success_responseContext.prototype.check_sat_response = function () {
        return this.tryGetRuleContext(0, Check_sat_responseContext);
    };
    Specific_success_responseContext.prototype.echo_response = function () {
        return this.tryGetRuleContext(0, Echo_responseContext);
    };
    Specific_success_responseContext.prototype.get_assertions_response = function () {
        return this.tryGetRuleContext(0, Get_assertions_responseContext);
    };
    Specific_success_responseContext.prototype.get_assignment_response = function () {
        return this.tryGetRuleContext(0, Get_assignment_responseContext);
    };
    Specific_success_responseContext.prototype.get_info_response = function () {
        return this.tryGetRuleContext(0, Get_info_responseContext);
    };
    Specific_success_responseContext.prototype.get_model_response = function () {
        return this.tryGetRuleContext(0, Get_model_responseContext);
    };
    Specific_success_responseContext.prototype.get_option_response = function () {
        return this.tryGetRuleContext(0, Get_option_responseContext);
    };
    Specific_success_responseContext.prototype.get_proof_response = function () {
        return this.tryGetRuleContext(0, Get_proof_responseContext);
    };
    Specific_success_responseContext.prototype.get_unsat_assump_response = function () {
        return this.tryGetRuleContext(0, Get_unsat_assump_responseContext);
    };
    Specific_success_responseContext.prototype.get_unsat_core_response = function () {
        return this.tryGetRuleContext(0, Get_unsat_core_responseContext);
    };
    Specific_success_responseContext.prototype.get_value_response = function () {
        return this.tryGetRuleContext(0, Get_value_responseContext);
    };
    Object.defineProperty(Specific_success_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_specific_success_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Specific_success_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecific_success_response) {
            listener.enterSpecific_success_response(this);
        }
    };
    // @Override
    Specific_success_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecific_success_response) {
            listener.exitSpecific_success_response(this);
        }
    };
    // @Override
    Specific_success_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecific_success_response) {
            return visitor.visitSpecific_success_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Specific_success_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Specific_success_responseContext = Specific_success_responseContext;
var General_responseContext = /** @class */ (function (_super) {
    __extends(General_responseContext, _super);
    function General_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    General_responseContext.prototype.PS_Success = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Success, 0); };
    General_responseContext.prototype.specific_success_response = function () {
        return this.tryGetRuleContext(0, Specific_success_responseContext);
    };
    General_responseContext.prototype.PS_Unsupported = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Unsupported, 0); };
    General_responseContext.prototype.ParOpen = function () { return this.tryGetToken(SMTLIBv2Parser.ParOpen, 0); };
    General_responseContext.prototype.PS_Error = function () { return this.tryGetToken(SMTLIBv2Parser.PS_Error, 0); };
    General_responseContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    General_responseContext.prototype.ParClose = function () { return this.tryGetToken(SMTLIBv2Parser.ParClose, 0); };
    Object.defineProperty(General_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SMTLIBv2Parser.RULE_general_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    General_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneral_response) {
            listener.enterGeneral_response(this);
        }
    };
    // @Override
    General_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneral_response) {
            listener.exitGeneral_response(this);
        }
    };
    // @Override
    General_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneral_response) {
            return visitor.visitGeneral_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return General_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.General_responseContext = General_responseContext;
