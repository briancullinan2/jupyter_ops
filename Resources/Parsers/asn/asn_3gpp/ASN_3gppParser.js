"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asn/asn_3gpp/ASN_3gpp.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ASN_3gppParser = /** @class */ (function (_super) {
    __extends(ASN_3gppParser, _super);
    function ASN_3gppParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ASN_3gppParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ASN_3gppParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ASN_3gppParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASN_3gppParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ASN_3gpp.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASN_3gppParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ASN_3gppParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASN_3gppParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ASN_3gppParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ASN_3gppParser.prototype.modules = function () {
        var _localctx = new ModulesContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ASN_3gppParser.RULE_modules);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 300;
                            this.moduleDefinition();
                        }
                    }
                    this.state = 303;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.moduleDefinition = function () {
        var _localctx = new ModuleDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ASN_3gppParser.RULE_moduleDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        this.state = 306;
                        this.match(ASN_3gppParser.L_BRACE);
                        this.state = 313;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ASN_3gppParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 307;
                                    this.match(ASN_3gppParser.IDENTIFIER);
                                    this.state = 308;
                                    this.match(ASN_3gppParser.L_PARAN);
                                    this.state = 309;
                                    this.match(ASN_3gppParser.NUMBER);
                                    this.state = 310;
                                    this.match(ASN_3gppParser.R_PARAN);
                                }
                            }
                            this.state = 315;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 316;
                        this.match(ASN_3gppParser.R_BRACE);
                    }
                }
                this.state = 319;
                this.match(ASN_3gppParser.DEFINITIONS_LITERAL);
                this.state = 320;
                this.tagDefault();
                this.state = 321;
                this.extensionDefault();
                this.state = 322;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 323;
                this.match(ASN_3gppParser.BEGIN_LITERAL);
                this.state = 324;
                this.moduleBody();
                this.state = 325;
                this.match(ASN_3gppParser.END_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.tagDefault = function () {
        var _localctx = new TagDefaultContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ASN_3gppParser.RULE_tagDefault);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 73)))) !== 0)) {
                    {
                        this.state = 327;
                        _la = this._input.LA(1);
                        if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 73)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 328;
                        this.match(ASN_3gppParser.TAGS_LITERAL);
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
    ASN_3gppParser.prototype.extensionDefault = function () {
        var _localctx = new ExtensionDefaultContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ASN_3gppParser.RULE_extensionDefault);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXTENSIBILITY_LITERAL) {
                    {
                        this.state = 331;
                        this.match(ASN_3gppParser.EXTENSIBILITY_LITERAL);
                        this.state = 332;
                        this.match(ASN_3gppParser.IMPLIED_LITERAL);
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
    ASN_3gppParser.prototype.moduleBody = function () {
        var _localctx = new ModuleBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ASN_3gppParser.RULE_moduleBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IMPORTS_LITERAL || _la === ASN_3gppParser.EXPORTS_LITERAL || _la === ASN_3gppParser.IDENTIFIER) {
                    {
                        this.state = 335;
                        this.exports();
                        this.state = 336;
                        this.imports();
                        this.state = 337;
                        this.assignmentList();
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
    ASN_3gppParser.prototype.exports = function () {
        var _localctx = new ExportsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ASN_3gppParser.RULE_exports);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 341;
                            this.match(ASN_3gppParser.EXPORTS_LITERAL);
                            this.state = 342;
                            this.symbolsExported();
                            this.state = 343;
                            this.match(ASN_3gppParser.SEMI_COLON);
                        }
                        break;
                    case 2:
                        {
                            this.state = 345;
                            this.match(ASN_3gppParser.EXPORTS_LITERAL);
                            this.state = 346;
                            this.match(ASN_3gppParser.ALL_LITERAL);
                            this.state = 347;
                            this.match(ASN_3gppParser.SEMI_COLON);
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
    ASN_3gppParser.prototype.symbolsExported = function () {
        var _localctx = new SymbolsExportedContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ASN_3gppParser.RULE_symbolsExported);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        this.state = 350;
                        this.symbolList();
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
    ASN_3gppParser.prototype.imports = function () {
        var _localctx = new ImportsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ASN_3gppParser.RULE_imports);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IMPORTS_LITERAL) {
                    {
                        this.state = 353;
                        this.match(ASN_3gppParser.IMPORTS_LITERAL);
                        this.state = 354;
                        this.symbolsImported();
                        this.state = 355;
                        this.match(ASN_3gppParser.SEMI_COLON);
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
    ASN_3gppParser.prototype.symbolsImported = function () {
        var _localctx = new SymbolsImportedContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ASN_3gppParser.RULE_symbolsImported);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        this.state = 359;
                        this.symbolsFromModuleList();
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
    ASN_3gppParser.prototype.symbolsFromModuleList = function () {
        var _localctx = new SymbolsFromModuleListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ASN_3gppParser.RULE_symbolsFromModuleList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 362;
                    this.symbolsFromModule();
                }
                this.state = 366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        {
                            this.state = 363;
                            this.symbolsFromModule();
                        }
                    }
                    this.state = 368;
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
    ASN_3gppParser.prototype.symbolsFromModule = function () {
        var _localctx = new SymbolsFromModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ASN_3gppParser.RULE_symbolsFromModule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.symbolList();
                this.state = 370;
                this.match(ASN_3gppParser.FROM_LITERAL);
                this.state = 371;
                this.globalModuleReference();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.globalModuleReference = function () {
        var _localctx = new GlobalModuleReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ASN_3gppParser.RULE_globalModuleReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 374;
                this.assignedIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.assignedIdentifier = function () {
        var _localctx = new AssignedIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ASN_3gppParser.RULE_assignedIdentifier);
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
    ASN_3gppParser.prototype.symbolList = function () {
        var _localctx = new SymbolListContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ASN_3gppParser.RULE_symbolList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 378;
                    this.symbol();
                }
                this.state = 383;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 379;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 380;
                            this.symbol();
                        }
                    }
                    this.state = 385;
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
    ASN_3gppParser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ASN_3gppParser.RULE_symbol);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        {
                            this.state = 387;
                            this.match(ASN_3gppParser.L_BRACE);
                            this.state = 388;
                            this.match(ASN_3gppParser.R_BRACE);
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
    ASN_3gppParser.prototype.assignmentList = function () {
        var _localctx = new AssignmentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ASN_3gppParser.RULE_assignmentList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 391;
                    this.assignment();
                }
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        {
                            this.state = 392;
                            this.assignment();
                        }
                    }
                    this.state = 397;
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
    ASN_3gppParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ASN_3gppParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 398;
                    this.match(ASN_3gppParser.IDENTIFIER);
                    this.state = 403;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                        case 1:
                            {
                                this.state = 399;
                                this.valueAssignment();
                            }
                            break;
                        case 2:
                            {
                                this.state = 400;
                                this.typeAssignment();
                            }
                            break;
                        case 3:
                            {
                                this.state = 401;
                                this.parameterizedAssignment();
                            }
                            break;
                        case 4:
                            {
                                this.state = 402;
                                this.objectClassAssignment();
                            }
                            break;
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
    ASN_3gppParser.prototype.sequenceType = function () {
        var _localctx = new SequenceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ASN_3gppParser.RULE_sequenceType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 405;
                this.match(ASN_3gppParser.SEQUENCE_LITERAL);
                this.state = 406;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 411;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 407;
                            this.extensionAndException();
                            this.state = 408;
                            this.optionalExtensionMarker();
                        }
                        break;
                    case 2:
                        {
                            this.state = 410;
                            this.componentTypeLists();
                        }
                        break;
                }
                this.state = 413;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.extensionAndException = function () {
        var _localctx = new ExtensionAndExceptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ASN_3gppParser.RULE_extensionAndException);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.match(ASN_3gppParser.ELLIPSIS);
                this.state = 417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXCLAM) {
                    {
                        this.state = 416;
                        this.exceptionSpec();
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
    ASN_3gppParser.prototype.optionalExtensionMarker = function () {
        var _localctx = new OptionalExtensionMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ASN_3gppParser.RULE_optionalExtensionMarker);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 419;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 420;
                        this.match(ASN_3gppParser.ELLIPSIS);
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
    ASN_3gppParser.prototype.componentTypeLists = function () {
        var _localctx = new ComponentTypeListsContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ASN_3gppParser.RULE_componentTypeLists);
        var _la;
        try {
            this.state = 453;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.COMPONENTS_LITERAL:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 423;
                        this.rootComponentTypeList();
                        this.state = 440;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.NEED_LITERAL:
                            case ASN_3gppParser.COND_LITERAL:
                            case ASN_3gppParser.INVALID_TAG:
                                {
                                    this.state = 424;
                                    this.tag();
                                }
                                break;
                            case ASN_3gppParser.COMMA:
                                {
                                    {
                                        this.state = 425;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 427;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
                                            {
                                                this.state = 426;
                                                this.tag();
                                            }
                                        }
                                        this.state = 429;
                                        this.extensionAndException();
                                        this.state = 430;
                                        this.extensionAdditions();
                                        this.state = 438;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case ASN_3gppParser.R_BRACE:
                                            case ASN_3gppParser.COMMA:
                                                {
                                                    this.state = 431;
                                                    this.optionalExtensionMarker();
                                                }
                                                break;
                                            case ASN_3gppParser.EXTENSTIONENDMARKER:
                                                {
                                                    {
                                                        this.state = 432;
                                                        this.match(ASN_3gppParser.EXTENSTIONENDMARKER);
                                                        this.state = 433;
                                                        this.match(ASN_3gppParser.COMMA);
                                                        this.state = 434;
                                                        this.rootComponentTypeList();
                                                        this.state = 436;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
                                                            {
                                                                this.state = 435;
                                                                this.tag();
                                                            }
                                                        }
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                }
                                break;
                            case ASN_3gppParser.R_BRACE:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case ASN_3gppParser.ELLIPSIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 442;
                        this.extensionAndException();
                        this.state = 443;
                        this.extensionAdditions();
                        this.state = 451;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.R_BRACE:
                            case ASN_3gppParser.COMMA:
                                {
                                    this.state = 444;
                                    this.optionalExtensionMarker();
                                }
                                break;
                            case ASN_3gppParser.EXTENSTIONENDMARKER:
                                {
                                    {
                                        this.state = 445;
                                        this.match(ASN_3gppParser.EXTENSTIONENDMARKER);
                                        this.state = 446;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 447;
                                        this.rootComponentTypeList();
                                        this.state = 449;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
                                            {
                                                this.state = 448;
                                                this.tag();
                                            }
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
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.rootComponentTypeList = function () {
        var _localctx = new RootComponentTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ASN_3gppParser.RULE_rootComponentTypeList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.componentTypeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.componentTypeList = function () {
        var _localctx = new ComponentTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ASN_3gppParser.RULE_componentTypeList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 457;
                    this.componentType();
                }
                this.state = 465;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 458;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 460;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
                                    {
                                        this.state = 459;
                                        this.tag();
                                    }
                                }
                                this.state = 462;
                                this.componentType();
                            }
                        }
                    }
                    this.state = 467;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
    ASN_3gppParser.prototype.componentType = function () {
        var _localctx = new ComponentTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ASN_3gppParser.RULE_componentType);
        try {
            this.state = 477;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 468;
                        this.namedType();
                        this.state = 472;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.OPTIONAL_LITERAL:
                                {
                                    this.state = 469;
                                    this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                                }
                                break;
                            case ASN_3gppParser.DEFAULT_LITERAL:
                                {
                                    this.state = 470;
                                    this.match(ASN_3gppParser.DEFAULT_LITERAL);
                                    this.state = 471;
                                    this.value();
                                }
                                break;
                            case ASN_3gppParser.NEED_LITERAL:
                            case ASN_3gppParser.COND_LITERAL:
                            case ASN_3gppParser.INVALID_TAG:
                            case ASN_3gppParser.R_BRACE:
                            case ASN_3gppParser.COMMA:
                            case ASN_3gppParser.DOUBLE_R_BRACKET:
                            case ASN_3gppParser.EXTENSTIONENDMARKER:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case ASN_3gppParser.COMPONENTS_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 474;
                        this.match(ASN_3gppParser.COMPONENTS_LITERAL);
                        this.state = 475;
                        this.match(ASN_3gppParser.OF_LITERAL);
                        this.state = 476;
                        this.asnType();
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
    ASN_3gppParser.prototype.tag = function () {
        var _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ASN_3gppParser.RULE_tag);
        try {
            this.state = 482;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.NEED_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 479;
                        this.needTag();
                    }
                    break;
                case ASN_3gppParser.COND_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 480;
                        this.condTag();
                    }
                    break;
                case ASN_3gppParser.INVALID_TAG:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 481;
                        this.match(ASN_3gppParser.INVALID_TAG);
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
    ASN_3gppParser.prototype.needTag = function () {
        var _localctx = new NeedTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ASN_3gppParser.RULE_needTag);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 484;
                this.match(ASN_3gppParser.NEED_LITERAL);
                this.state = 485;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.condTag = function () {
        var _localctx = new CondTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ASN_3gppParser.RULE_condTag);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.match(ASN_3gppParser.COND_LITERAL);
                this.state = 488;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.extensionAdditions = function () {
        var _localctx = new ExtensionAdditionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ASN_3gppParser.RULE_extensionAdditions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 492;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 490;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 491;
                            this.extensionAdditionList();
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
    ASN_3gppParser.prototype.extensionAdditionList = function () {
        var _localctx = new ExtensionAdditionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ASN_3gppParser.RULE_extensionAdditionList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 494;
                    this.extensionAddition();
                }
                this.state = 499;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 495;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 496;
                                this.extensionAddition();
                            }
                        }
                    }
                    this.state = 501;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
    ASN_3gppParser.prototype.extensionAddition = function () {
        var _localctx = new ExtensionAdditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ASN_3gppParser.RULE_extensionAddition);
        try {
            this.state = 504;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.COMPONENTS_LITERAL:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 502;
                        this.componentType();
                    }
                    break;
                case ASN_3gppParser.DOUBLE_L_BRACKET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 503;
                        this.extensionAdditionGroup();
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
    ASN_3gppParser.prototype.extensionAdditionGroup = function () {
        var _localctx = new ExtensionAdditionGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ASN_3gppParser.RULE_extensionAdditionGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
                this.state = 507;
                this.versionNumber();
                this.state = 508;
                this.componentTypeList();
                this.state = 510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
                    {
                        this.state = 509;
                        this.tag();
                    }
                }
                this.state = 512;
                this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.versionNumber = function () {
        var _localctx = new VersionNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ASN_3gppParser.RULE_versionNumber);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 516;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.NUMBER) {
                    {
                        this.state = 514;
                        this.match(ASN_3gppParser.NUMBER);
                        this.state = 515;
                        this.match(ASN_3gppParser.COLON);
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
    ASN_3gppParser.prototype.sequenceOfType = function () {
        var _localctx = new SequenceOfTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ASN_3gppParser.RULE_sequenceOfType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this.match(ASN_3gppParser.SEQUENCE_LITERAL);
                this.state = 526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_PARAN) {
                    {
                        this.state = 519;
                        this.match(ASN_3gppParser.L_PARAN);
                        this.state = 522;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.L_PARAN:
                                {
                                    this.state = 520;
                                    this.constraint();
                                }
                                break;
                            case ASN_3gppParser.SIZE_LITERAL:
                                {
                                    this.state = 521;
                                    this.sizeConstraint();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 524;
                        this.match(ASN_3gppParser.R_PARAN);
                    }
                }
                this.state = 528;
                this.match(ASN_3gppParser.OF_LITERAL);
                this.state = 531;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 529;
                            this.asnType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 530;
                            this.namedType();
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
    ASN_3gppParser.prototype.sizeConstraint = function () {
        var _localctx = new SizeConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ASN_3gppParser.RULE_sizeConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 533;
                this.match(ASN_3gppParser.SIZE_LITERAL);
                this.state = 534;
                this.constraint();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.parameterizedAssignment = function () {
        var _localctx = new ParameterizedAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ASN_3gppParser.RULE_parameterizedAssignment);
        try {
            this.state = 550;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.L_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 536;
                        this.parameterList();
                        {
                            this.state = 537;
                            this.match(ASN_3gppParser.ASSIGN_OP);
                            this.state = 541;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 538;
                                        this.asnType();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 539;
                                        this.value();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 540;
                                        this.valueSet();
                                    }
                                    break;
                            }
                        }
                    }
                    break;
                case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
                case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 543;
                            this.definedObjectClass();
                            this.state = 544;
                            this.match(ASN_3gppParser.ASSIGN_OP);
                            this.state = 548;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 545;
                                        this.object();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 546;
                                        this.objectClass();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 547;
                                        this.objectSet();
                                    }
                                    break;
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
    ASN_3gppParser.prototype.parameterList = function () {
        var _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ASN_3gppParser.RULE_parameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 552;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 553;
                this.parameter();
                this.state = 558;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 554;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 555;
                            this.parameter();
                        }
                    }
                    this.state = 560;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 561;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.parameter = function () {
        var _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ASN_3gppParser.RULE_parameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 566;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 563;
                            this.paramGovernor();
                            this.state = 564;
                            this.match(ASN_3gppParser.COLON);
                        }
                        break;
                }
                this.state = 568;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.paramGovernor = function () {
        var _localctx = new ParamGovernorContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ASN_3gppParser.RULE_paramGovernor);
        try {
            this.state = 572;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 570;
                        this.governor();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 571;
                        this.match(ASN_3gppParser.IDENTIFIER);
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
    ASN_3gppParser.prototype.governor = function () {
        var _localctx = new GovernorContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ASN_3gppParser.RULE_governor);
        try {
            this.state = 576;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 574;
                        this.asnType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 575;
                        this.definedObjectClass();
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
    ASN_3gppParser.prototype.objectClassAssignment = function () {
        var _localctx = new ObjectClassAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ASN_3gppParser.RULE_objectClassAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 578;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 579;
                this.objectClass();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.objectClass = function () {
        var _localctx = new ObjectClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ASN_3gppParser.RULE_objectClass);
        try {
            this.state = 583;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
                case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 581;
                        this.definedObjectClass();
                    }
                    break;
                case ASN_3gppParser.CLASS_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 582;
                        this.objectClassDefn();
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
    ASN_3gppParser.prototype.definedObjectClass = function () {
        var _localctx = new DefinedObjectClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ASN_3gppParser.RULE_definedObjectClass);
        try {
            this.state = 592;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 587;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                            case 1:
                                {
                                    this.state = 585;
                                    this.match(ASN_3gppParser.IDENTIFIER);
                                    this.state = 586;
                                    this.match(ASN_3gppParser.DOT);
                                }
                                break;
                        }
                        this.state = 589;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                    break;
                case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 590;
                        this.match(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL);
                    }
                    break;
                case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 591;
                        this.match(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL);
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
    ASN_3gppParser.prototype.usefulObjectClassReference = function () {
        var _localctx = new UsefulObjectClassReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ASN_3gppParser.RULE_usefulObjectClassReference);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 594;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.TYPE_IDENTIFIER_LITERAL || _la === ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL)) {
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
    ASN_3gppParser.prototype.externalObjectClassReference = function () {
        var _localctx = new ExternalObjectClassReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, ASN_3gppParser.RULE_externalObjectClassReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 596;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 597;
                this.match(ASN_3gppParser.DOT);
                this.state = 598;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.objectClassDefn = function () {
        var _localctx = new ObjectClassDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, ASN_3gppParser.RULE_objectClassDefn);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this.match(ASN_3gppParser.CLASS_LITERAL);
                this.state = 601;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 602;
                this.fieldSpec();
                this.state = 607;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 603;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 604;
                            this.fieldSpec();
                        }
                    }
                    this.state = 609;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 610;
                this.match(ASN_3gppParser.R_BRACE);
                this.state = 612;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.WITH_LITERAL) {
                    {
                        this.state = 611;
                        this.withSyntaxSpec();
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
    ASN_3gppParser.prototype.withSyntaxSpec = function () {
        var _localctx = new WithSyntaxSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, ASN_3gppParser.RULE_withSyntaxSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                this.match(ASN_3gppParser.WITH_LITERAL);
                this.state = 615;
                this.match(ASN_3gppParser.SYNTAX_LITERAL);
                this.state = 616;
                this.syntaxList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.syntaxList = function () {
        var _localctx = new SyntaxListContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, ASN_3gppParser.RULE_syntaxList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 618;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 620;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 619;
                            this.tokenOrGroupSpec();
                        }
                    }
                    this.state = 622;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
                this.state = 624;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.tokenOrGroupSpec = function () {
        var _localctx = new TokenOrGroupSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, ASN_3gppParser.RULE_tokenOrGroupSpec);
        try {
            this.state = 628;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.AMPERSAND:
                case ASN_3gppParser.COMMA:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 626;
                        this.requiredToken();
                    }
                    break;
                case ASN_3gppParser.L_BRACKET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 627;
                        this.optionalGroup();
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
    ASN_3gppParser.prototype.optionalGroup = function () {
        var _localctx = new OptionalGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, ASN_3gppParser.RULE_optionalGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 630;
                this.match(ASN_3gppParser.L_BRACKET);
                this.state = 632;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 631;
                            this.tokenOrGroupSpec();
                        }
                    }
                    this.state = 634;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
                this.state = 636;
                this.match(ASN_3gppParser.R_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.requiredToken = function () {
        var _localctx = new RequiredTokenContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, ASN_3gppParser.RULE_requiredToken);
        try {
            this.state = 640;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.COMMA:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 638;
                        this.literal();
                    }
                    break;
                case ASN_3gppParser.AMPERSAND:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 639;
                        this.primitiveFieldName();
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
    ASN_3gppParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, ASN_3gppParser.RULE_literal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.IDENTIFIER)) {
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
    ASN_3gppParser.prototype.primitiveFieldName = function () {
        var _localctx = new PrimitiveFieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ASN_3gppParser.RULE_primitiveFieldName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 645;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.fieldSpec = function () {
        var _localctx = new FieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ASN_3gppParser.RULE_fieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 647;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 648;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 682;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        {
                            this.state = 650;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                                {
                                    this.state = 649;
                                    this.typeOptionalitySpec();
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 652;
                            this.asnType();
                            this.state = 662;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 654;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                                            {
                                                this.state = 653;
                                                this.valueSetOptionalitySpec();
                                            }
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 657;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
                                            {
                                                this.state = 656;
                                                this.match(ASN_3gppParser.UNIQUE_LITERAL);
                                            }
                                        }
                                        this.state = 660;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                                            {
                                                this.state = 659;
                                                this.valueOptionalitySpec();
                                            }
                                        }
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 664;
                            this.fieldName();
                            this.state = 671;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ASN_3gppParser.OPTIONAL_LITERAL:
                                    {
                                        this.state = 665;
                                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                                    }
                                    break;
                                case ASN_3gppParser.DEFAULT_LITERAL:
                                    {
                                        {
                                            this.state = 666;
                                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                                            this.state = 669;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 667;
                                                        this.valueSet();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 668;
                                                        this.value();
                                                    }
                                                    break;
                                            }
                                        }
                                    }
                                    break;
                                case ASN_3gppParser.R_BRACE:
                                case ASN_3gppParser.COMMA:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case 4:
                        {
                            this.state = 673;
                            this.definedObjectClass();
                            this.state = 680;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ASN_3gppParser.OPTIONAL_LITERAL:
                                    {
                                        this.state = 674;
                                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                                    }
                                    break;
                                case ASN_3gppParser.DEFAULT_LITERAL:
                                    {
                                        {
                                            this.state = 675;
                                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                                            this.state = 678;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case ASN_3gppParser.L_BRACE:
                                                    {
                                                        this.state = 676;
                                                        this.objectSet();
                                                    }
                                                    break;
                                                case ASN_3gppParser.IDENTIFIER:
                                                    {
                                                        this.state = 677;
                                                        this.object();
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
                                            }
                                        }
                                    }
                                    break;
                                case ASN_3gppParser.R_BRACE:
                                case ASN_3gppParser.COMMA:
                                    break;
                                default:
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
    ASN_3gppParser.prototype.typeFieldSpec = function () {
        var _localctx = new TypeFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ASN_3gppParser.RULE_typeFieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 684;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 685;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 687;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 686;
                        this.typeOptionalitySpec();
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
    ASN_3gppParser.prototype.typeOptionalitySpec = function () {
        var _localctx = new TypeOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ASN_3gppParser.RULE_typeOptionalitySpec);
        try {
            this.state = 692;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 689;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 690;
                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                            this.state = 691;
                            this.asnType();
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
    ASN_3gppParser.prototype.fixedTypeValueFieldSpec = function () {
        var _localctx = new FixedTypeValueFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ASN_3gppParser.RULE_fixedTypeValueFieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 695;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 696;
                this.asnType();
                this.state = 698;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
                    {
                        this.state = 697;
                        this.match(ASN_3gppParser.UNIQUE_LITERAL);
                    }
                }
                this.state = 701;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 700;
                        this.valueOptionalitySpec();
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
    ASN_3gppParser.prototype.valueOptionalitySpec = function () {
        var _localctx = new ValueOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ASN_3gppParser.RULE_valueOptionalitySpec);
        try {
            this.state = 706;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 703;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 704;
                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                            this.state = 705;
                            this.value();
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
    ASN_3gppParser.prototype.variableTypeValueFieldSpec = function () {
        var _localctx = new VariableTypeValueFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ASN_3gppParser.RULE_variableTypeValueFieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 708;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 709;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 710;
                this.fieldName();
                this.state = 712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 711;
                        this.valueOptionalitySpec();
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
    ASN_3gppParser.prototype.fixedTypeValueSetFieldSpec = function () {
        var _localctx = new FixedTypeValueSetFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 714;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 715;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 716;
                this.asnType();
                this.state = 718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 717;
                        this.valueSetOptionalitySpec();
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
    ASN_3gppParser.prototype.valueSetOptionalitySpec = function () {
        var _localctx = new ValueSetOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, ASN_3gppParser.RULE_valueSetOptionalitySpec);
        try {
            this.state = 723;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 720;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 721;
                        this.match(ASN_3gppParser.DEFAULT_LITERAL);
                        this.state = 722;
                        this.valueSet();
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
    ASN_3gppParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, ASN_3gppParser.RULE_object);
        try {
            this.state = 727;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 725;
                        this.definedObject();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 726;
                        this.parameterizedObject();
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
    ASN_3gppParser.prototype.parameterizedObject = function () {
        var _localctx = new ParameterizedObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, ASN_3gppParser.RULE_parameterizedObject);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 729;
                this.definedObject();
                this.state = 730;
                this.actualParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.definedObject = function () {
        var _localctx = new DefinedObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, ASN_3gppParser.RULE_definedObject);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 732;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 734;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 733;
                        this.match(ASN_3gppParser.DOT);
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
    ASN_3gppParser.prototype.objectSet = function () {
        var _localctx = new ObjectSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, ASN_3gppParser.RULE_objectSet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 736;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 737;
                this.objectSetSpec();
                this.state = 738;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.objectSetSpec = function () {
        var _localctx = new ObjectSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, ASN_3gppParser.RULE_objectSetSpec);
        var _la;
        try {
            this.state = 754;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.TRUE_LITERAL:
                case ASN_3gppParser.FALSE_LITERAL:
                case ASN_3gppParser.TRUE_SMALL_LITERAL:
                case ASN_3gppParser.FALSE_SMALL_LITERAL:
                case ASN_3gppParser.L_BRACE:
                case ASN_3gppParser.MINUS:
                case ASN_3gppParser.ALL_LITERAL:
                case ASN_3gppParser.MIN_LITERAL:
                case ASN_3gppParser.SIZE_LITERAL:
                case ASN_3gppParser.PATTERN_LITERAL:
                case ASN_3gppParser.NUMBER:
                case ASN_3gppParser.BSTRING:
                case ASN_3gppParser.CSTRING:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 740;
                        this.rootElementSetSpec();
                        this.state = 747;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 741;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 742;
                                this.match(ASN_3gppParser.ELLIPSIS);
                                this.state = 745;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === ASN_3gppParser.COMMA) {
                                    {
                                        this.state = 743;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 744;
                                        this.additionalElementSetSpec();
                                    }
                                }
                            }
                        }
                    }
                    break;
                case ASN_3gppParser.ELLIPSIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 749;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 752;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 750;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 751;
                                this.additionalElementSetSpec();
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
    ASN_3gppParser.prototype.fieldName = function () {
        var _localctx = new FieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, ASN_3gppParser.RULE_fieldName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 756;
                    this.match(ASN_3gppParser.AMPERSAND);
                    this.state = 757;
                    this.match(ASN_3gppParser.IDENTIFIER);
                }
                this.state = 764;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.AMPERSAND) {
                    {
                        {
                            this.state = 759;
                            this.match(ASN_3gppParser.AMPERSAND);
                            this.state = 760;
                            this.match(ASN_3gppParser.IDENTIFIER);
                            this.state = 761;
                            this.match(ASN_3gppParser.DOT);
                        }
                    }
                    this.state = 766;
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
    ASN_3gppParser.prototype.valueSet = function () {
        var _localctx = new ValueSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, ASN_3gppParser.RULE_valueSet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 767;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 768;
                this.elementSetSpecs();
                this.state = 769;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.elementSetSpecs = function () {
        var _localctx = new ElementSetSpecsContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, ASN_3gppParser.RULE_elementSetSpecs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.rootElementSetSpec();
                this.state = 778;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 772;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 773;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 776;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 774;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 775;
                                this.additionalElementSetSpec();
                            }
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
    ASN_3gppParser.prototype.rootElementSetSpec = function () {
        var _localctx = new RootElementSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, ASN_3gppParser.RULE_rootElementSetSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 780;
                this.elementSetSpec();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.additionalElementSetSpec = function () {
        var _localctx = new AdditionalElementSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, ASN_3gppParser.RULE_additionalElementSetSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 782;
                this.elementSetSpec();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.elementSetSpec = function () {
        var _localctx = new ElementSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, ASN_3gppParser.RULE_elementSetSpec);
        try {
            this.state = 787;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.TRUE_LITERAL:
                case ASN_3gppParser.FALSE_LITERAL:
                case ASN_3gppParser.TRUE_SMALL_LITERAL:
                case ASN_3gppParser.FALSE_SMALL_LITERAL:
                case ASN_3gppParser.L_BRACE:
                case ASN_3gppParser.MINUS:
                case ASN_3gppParser.MIN_LITERAL:
                case ASN_3gppParser.SIZE_LITERAL:
                case ASN_3gppParser.PATTERN_LITERAL:
                case ASN_3gppParser.NUMBER:
                case ASN_3gppParser.BSTRING:
                case ASN_3gppParser.CSTRING:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 784;
                        this.unions();
                    }
                    break;
                case ASN_3gppParser.ALL_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 785;
                        this.match(ASN_3gppParser.ALL_LITERAL);
                        this.state = 786;
                        this.exclusions();
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
    ASN_3gppParser.prototype.unions = function () {
        var _localctx = new UnionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, ASN_3gppParser.RULE_unions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 789;
                    this.intersections();
                }
                this.state = 795;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL) {
                    {
                        {
                            this.state = 790;
                            this.unionMark();
                            this.state = 791;
                            this.intersections();
                        }
                    }
                    this.state = 797;
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
    ASN_3gppParser.prototype.exclusions = function () {
        var _localctx = new ExclusionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, ASN_3gppParser.RULE_exclusions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 798;
                this.match(ASN_3gppParser.EXCEPT_LITERAL);
                this.state = 799;
                this.elements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.intersections = function () {
        var _localctx = new IntersectionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, ASN_3gppParser.RULE_intersections);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 801;
                    this.intersectionElements();
                }
                this.state = 807;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL) {
                    {
                        {
                            this.state = 802;
                            this.intersectionMark();
                            this.state = 803;
                            this.intersectionElements();
                        }
                    }
                    this.state = 809;
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
    ASN_3gppParser.prototype.unionMark = function () {
        var _localctx = new UnionMarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, ASN_3gppParser.RULE_unionMark);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL)) {
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
    ASN_3gppParser.prototype.intersectionMark = function () {
        var _localctx = new IntersectionMarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, ASN_3gppParser.RULE_intersectionMark);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 812;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL)) {
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
    ASN_3gppParser.prototype.elements = function () {
        var _localctx = new ElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, ASN_3gppParser.RULE_elements);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 814;
                this.subtypeElements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.objectSetElements = function () {
        var _localctx = new ObjectSetElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, ASN_3gppParser.RULE_objectSetElements);
        try {
            this.state = 818;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 816;
                        this.object();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 817;
                        this.definedObject();
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
    ASN_3gppParser.prototype.intersectionElements = function () {
        var _localctx = new IntersectionElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, ASN_3gppParser.RULE_intersectionElements);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 820;
                this.elements();
                this.state = 822;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXCEPT_LITERAL) {
                    {
                        this.state = 821;
                        this.exclusions();
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
    ASN_3gppParser.prototype.subtypeElements = function () {
        var _localctx = new SubtypeElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, ASN_3gppParser.RULE_subtypeElements);
        var _la;
        try {
            this.state = 843;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 826;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ASN_3gppParser.TRUE_LITERAL:
                                case ASN_3gppParser.FALSE_LITERAL:
                                case ASN_3gppParser.TRUE_SMALL_LITERAL:
                                case ASN_3gppParser.FALSE_SMALL_LITERAL:
                                case ASN_3gppParser.L_BRACE:
                                case ASN_3gppParser.MINUS:
                                case ASN_3gppParser.NUMBER:
                                case ASN_3gppParser.BSTRING:
                                case ASN_3gppParser.CSTRING:
                                case ASN_3gppParser.IDENTIFIER:
                                    {
                                        this.state = 824;
                                        this.value();
                                    }
                                    break;
                                case ASN_3gppParser.MIN_LITERAL:
                                    {
                                        this.state = 825;
                                        this.match(ASN_3gppParser.MIN_LITERAL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 829;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ASN_3gppParser.LESS_THAN) {
                                {
                                    this.state = 828;
                                    this.match(ASN_3gppParser.LESS_THAN);
                                }
                            }
                            this.state = 831;
                            this.match(ASN_3gppParser.DOUBLE_DOT);
                            this.state = 833;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ASN_3gppParser.LESS_THAN) {
                                {
                                    this.state = 832;
                                    this.match(ASN_3gppParser.LESS_THAN);
                                }
                            }
                            this.state = 837;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ASN_3gppParser.TRUE_LITERAL:
                                case ASN_3gppParser.FALSE_LITERAL:
                                case ASN_3gppParser.TRUE_SMALL_LITERAL:
                                case ASN_3gppParser.FALSE_SMALL_LITERAL:
                                case ASN_3gppParser.L_BRACE:
                                case ASN_3gppParser.MINUS:
                                case ASN_3gppParser.NUMBER:
                                case ASN_3gppParser.BSTRING:
                                case ASN_3gppParser.CSTRING:
                                case ASN_3gppParser.IDENTIFIER:
                                    {
                                        this.state = 835;
                                        this.value();
                                    }
                                    break;
                                case ASN_3gppParser.MAX_LITERAL:
                                    {
                                        this.state = 836;
                                        this.match(ASN_3gppParser.MAX_LITERAL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 839;
                        this.sizeConstraint();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 840;
                            this.match(ASN_3gppParser.PATTERN_LITERAL);
                            this.state = 841;
                            this.value();
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 842;
                        this.value();
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
    ASN_3gppParser.prototype.variableTypeValueSetFieldSpec = function () {
        var _localctx = new VariableTypeValueSetFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, ASN_3gppParser.RULE_variableTypeValueSetFieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 845;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 846;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 847;
                this.fieldName();
                this.state = 849;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 848;
                        this.valueSetOptionalitySpec();
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
    ASN_3gppParser.prototype.objectFieldSpec = function () {
        var _localctx = new ObjectFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, ASN_3gppParser.RULE_objectFieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 851;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 852;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 853;
                this.definedObjectClass();
                this.state = 855;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 854;
                        this.objectOptionalitySpec();
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
    ASN_3gppParser.prototype.objectOptionalitySpec = function () {
        var _localctx = new ObjectOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, ASN_3gppParser.RULE_objectOptionalitySpec);
        try {
            this.state = 860;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 857;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 858;
                        this.match(ASN_3gppParser.DEFAULT_LITERAL);
                        this.state = 859;
                        this.object();
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
    ASN_3gppParser.prototype.objectSetFieldSpec = function () {
        var _localctx = new ObjectSetFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, ASN_3gppParser.RULE_objectSetFieldSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 862;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 863;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 864;
                this.definedObjectClass();
                this.state = 866;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 865;
                        this.objectSetOptionalitySpec();
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
    ASN_3gppParser.prototype.objectSetOptionalitySpec = function () {
        var _localctx = new ObjectSetOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, ASN_3gppParser.RULE_objectSetOptionalitySpec);
        try {
            this.state = 871;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 868;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 869;
                        this.match(ASN_3gppParser.DEFAULT_LITERAL);
                        this.state = 870;
                        this.objectSet();
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
    ASN_3gppParser.prototype.typeAssignment = function () {
        var _localctx = new TypeAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, ASN_3gppParser.RULE_typeAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 874;
                this.asnType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.valueAssignment = function () {
        var _localctx = new ValueAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, ASN_3gppParser.RULE_valueAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 876;
                this.asnType();
                this.state = 877;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 878;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.asnType = function () {
        var _localctx = new AsnTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, ASN_3gppParser.RULE_asnType);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 882;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 880;
                            this.builtinType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 881;
                            this.referencedType();
                        }
                        break;
                }
                this.state = 887;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 884;
                                this.constraint();
                            }
                        }
                    }
                    this.state = 889;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
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
    ASN_3gppParser.prototype.builtinType = function () {
        var _localctx = new BuiltinTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, ASN_3gppParser.RULE_builtinType);
        try {
            this.state = 903;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 890;
                        this.octetStringType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 891;
                        this.bitStringType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 892;
                        this.choiceType();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 893;
                        this.enumeratedType();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 894;
                        this.integerType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 895;
                        this.sequenceType();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 896;
                        this.sequenceOfType();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 897;
                        this.setType();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 898;
                        this.setOfType();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 899;
                        this.objectidentifiertype();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 900;
                        this.objectClassFieldType();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 901;
                        this.match(ASN_3gppParser.BOOLEAN_LITERAL);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 902;
                        this.match(ASN_3gppParser.NULL_LITERAL);
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
    ASN_3gppParser.prototype.objectClassFieldType = function () {
        var _localctx = new ObjectClassFieldTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, ASN_3gppParser.RULE_objectClassFieldType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 905;
                this.definedObjectClass();
                this.state = 906;
                this.match(ASN_3gppParser.DOT);
                this.state = 907;
                this.fieldName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.setType = function () {
        var _localctx = new SetTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, ASN_3gppParser.RULE_setType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 909;
                this.match(ASN_3gppParser.SET_LITERAL);
                this.state = 910;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 915;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                    case 1:
                        {
                            this.state = 911;
                            this.extensionAndException();
                            this.state = 912;
                            this.optionalExtensionMarker();
                        }
                        break;
                    case 2:
                        {
                            this.state = 914;
                            this.componentTypeLists();
                        }
                        break;
                }
                this.state = 917;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.setOfType = function () {
        var _localctx = new SetOfTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, ASN_3gppParser.RULE_setOfType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 919;
                this.match(ASN_3gppParser.SET_LITERAL);
                this.state = 922;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.L_PARAN:
                        {
                            this.state = 920;
                            this.constraint();
                        }
                        break;
                    case ASN_3gppParser.SIZE_LITERAL:
                        {
                            this.state = 921;
                            this.sizeConstraint();
                        }
                        break;
                    case ASN_3gppParser.OF_LITERAL:
                        break;
                    default:
                        break;
                }
                this.state = 924;
                this.match(ASN_3gppParser.OF_LITERAL);
                this.state = 927;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 925;
                            this.asnType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 926;
                            this.namedType();
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
    ASN_3gppParser.prototype.referencedType = function () {
        var _localctx = new ReferencedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, ASN_3gppParser.RULE_referencedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 929;
                this.definedType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.definedType = function () {
        var _localctx = new DefinedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, ASN_3gppParser.RULE_definedType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 931;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 934;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 932;
                        this.match(ASN_3gppParser.DOT);
                        this.state = 933;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                }
                this.state = 937;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                    case 1:
                        {
                            this.state = 936;
                            this.actualParameterList();
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
    ASN_3gppParser.prototype.constraint = function () {
        var _localctx = new ConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, ASN_3gppParser.RULE_constraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 939;
                this.match(ASN_3gppParser.L_PARAN);
                this.state = 940;
                this.constraintSpec();
                this.state = 942;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXCLAM) {
                    {
                        this.state = 941;
                        this.exceptionSpec();
                    }
                }
                this.state = 944;
                this.match(ASN_3gppParser.R_PARAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.constraintSpec = function () {
        var _localctx = new ConstraintSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, ASN_3gppParser.RULE_constraintSpec);
        try {
            this.state = 948;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 946;
                        this.generalConstraint();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 947;
                        this.subtypeConstraint();
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
    ASN_3gppParser.prototype.userDefinedConstraint = function () {
        var _localctx = new UserDefinedConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, ASN_3gppParser.RULE_userDefinedConstraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 950;
                this.match(ASN_3gppParser.CONSTRAINED_LITERAL);
                this.state = 951;
                this.match(ASN_3gppParser.BY_LITERAL);
                this.state = 952;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 953;
                this.userDefinedConstraintParameter();
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 954;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 955;
                            this.userDefinedConstraintParameter();
                        }
                    }
                    this.state = 960;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 961;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.generalConstraint = function () {
        var _localctx = new GeneralConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, ASN_3gppParser.RULE_generalConstraint);
        try {
            this.state = 966;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.CONSTRAINED_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 963;
                        this.userDefinedConstraint();
                    }
                    break;
                case ASN_3gppParser.L_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 964;
                        this.tableConstraint();
                    }
                    break;
                case ASN_3gppParser.CONTAINING_LITERAL:
                case ASN_3gppParser.WITH_LITERAL:
                case ASN_3gppParser.ENCODED_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 965;
                        this.contentsConstraint();
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
    ASN_3gppParser.prototype.userDefinedConstraintParameter = function () {
        var _localctx = new UserDefinedConstraintParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, ASN_3gppParser.RULE_userDefinedConstraintParameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 968;
                this.governor();
                this.state = 974;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                    case 1:
                        {
                            this.state = 969;
                            this.match(ASN_3gppParser.COLON);
                            this.state = 970;
                            this.value();
                        }
                        break;
                    case 2:
                        {
                            this.state = 971;
                            this.valueSet();
                        }
                        break;
                    case 3:
                        {
                            this.state = 972;
                            this.object();
                        }
                        break;
                    case 4:
                        {
                            this.state = 973;
                            this.objectSet();
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
    ASN_3gppParser.prototype.tableConstraint = function () {
        var _localctx = new TableConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, ASN_3gppParser.RULE_tableConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 976;
                this.componentRelationConstraint();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.simpleTableConstraint = function () {
        var _localctx = new SimpleTableConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, ASN_3gppParser.RULE_simpleTableConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 978;
                this.objectSet();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.contentsConstraint = function () {
        var _localctx = new ContentsConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, ASN_3gppParser.RULE_contentsConstraint);
        try {
            this.state = 997;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 980;
                        this.match(ASN_3gppParser.CONTAINING_LITERAL);
                        this.state = 981;
                        this.asnType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 982;
                        this.match(ASN_3gppParser.ENCODED_LITERAL);
                        this.state = 983;
                        this.match(ASN_3gppParser.BY_LITERAL);
                        this.state = 984;
                        this.value();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 985;
                        this.match(ASN_3gppParser.CONTAINING_LITERAL);
                        this.state = 986;
                        this.asnType();
                        this.state = 987;
                        this.match(ASN_3gppParser.ENCODED_LITERAL);
                        this.state = 988;
                        this.match(ASN_3gppParser.BY_LITERAL);
                        this.state = 989;
                        this.value();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 991;
                        this.match(ASN_3gppParser.WITH_LITERAL);
                        this.state = 992;
                        this.match(ASN_3gppParser.COMPONENTS_LITERAL);
                        this.state = 993;
                        this.match(ASN_3gppParser.L_BRACE);
                        this.state = 994;
                        this.componentPresenceLists();
                        this.state = 995;
                        this.match(ASN_3gppParser.R_BRACE);
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
    ASN_3gppParser.prototype.componentPresenceLists = function () {
        var _localctx = new ComponentPresenceListsContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, ASN_3gppParser.RULE_componentPresenceLists);
        var _la;
        try {
            this.state = 1015;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.R_BRACE:
                case ASN_3gppParser.COMMA:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1000;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.IDENTIFIER) {
                            {
                                this.state = 999;
                                this.componentPresenceList();
                            }
                        }
                        this.state = 1008;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 1002;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1003;
                                this.match(ASN_3gppParser.ELLIPSIS);
                                this.state = 1006;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === ASN_3gppParser.COMMA) {
                                    {
                                        this.state = 1004;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 1005;
                                        this.componentPresenceList();
                                    }
                                }
                            }
                        }
                    }
                    break;
                case ASN_3gppParser.ELLIPSIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1010;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 1013;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 1011;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1012;
                                this.componentPresenceList();
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
    ASN_3gppParser.prototype.componentPresenceList = function () {
        var _localctx = new ComponentPresenceListContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, ASN_3gppParser.RULE_componentPresenceList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1017;
                    this.componentPresence();
                }
                this.state = 1022;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1018;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1019;
                                this.componentPresence();
                            }
                        }
                    }
                    this.state = 1024;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
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
    ASN_3gppParser.prototype.componentPresence = function () {
        var _localctx = new ComponentPresenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, ASN_3gppParser.RULE_componentPresence);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1025;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1026;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.PRESENT_LITERAL || _la === ASN_3gppParser.ABSENT_LITERAL)) {
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
    ASN_3gppParser.prototype.subtypeConstraint = function () {
        var _localctx = new SubtypeConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, ASN_3gppParser.RULE_subtypeConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1028;
                this.elementSetSpecs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, ASN_3gppParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1030;
                this.builtinValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.builtinValue = function () {
        var _localctx = new BuiltinValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, ASN_3gppParser.RULE_builtinValue);
        try {
            this.state = 1039;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1032;
                        this.enumeratedValue();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1033;
                        this.integerValue();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1034;
                        this.choiceValue();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1035;
                        this.objectIdentifierValue();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1036;
                        this.booleanValue();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1037;
                        this.match(ASN_3gppParser.CSTRING);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1038;
                        this.match(ASN_3gppParser.BSTRING);
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
    ASN_3gppParser.prototype.objectIdentifierValue = function () {
        var _localctx = new ObjectIdentifierValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, ASN_3gppParser.RULE_objectIdentifierValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1041;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1042;
                this.objIdComponentsList();
                this.state = 1043;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.objIdComponentsList = function () {
        var _localctx = new ObjIdComponentsListContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, ASN_3gppParser.RULE_objIdComponentsList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1045;
                    this.objIdComponents();
                }
                this.state = 1049;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.NUMBER || _la === ASN_3gppParser.IDENTIFIER) {
                    {
                        {
                            this.state = 1046;
                            this.objIdComponents();
                        }
                    }
                    this.state = 1051;
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
    ASN_3gppParser.prototype.objIdComponents = function () {
        var _localctx = new ObjIdComponentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, ASN_3gppParser.RULE_objIdComponents);
        var _la;
        try {
            this.state = 1063;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1052;
                        this.match(ASN_3gppParser.NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1053;
                        this.match(ASN_3gppParser.IDENTIFIER);
                        this.state = 1060;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.L_PARAN) {
                            {
                                this.state = 1054;
                                this.match(ASN_3gppParser.L_PARAN);
                                this.state = 1057;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case ASN_3gppParser.NUMBER:
                                        {
                                            this.state = 1055;
                                            this.match(ASN_3gppParser.NUMBER);
                                        }
                                        break;
                                    case ASN_3gppParser.IDENTIFIER:
                                        {
                                            this.state = 1056;
                                            this.definedValue();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 1059;
                                this.match(ASN_3gppParser.R_PARAN);
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1062;
                        this.definedValue();
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
    ASN_3gppParser.prototype.integerValue = function () {
        var _localctx = new IntegerValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, ASN_3gppParser.RULE_integerValue);
        try {
            this.state = 1067;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.MINUS:
                case ASN_3gppParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1065;
                        this.signedNumber();
                    }
                    break;
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1066;
                        this.match(ASN_3gppParser.IDENTIFIER);
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
    ASN_3gppParser.prototype.choiceValue = function () {
        var _localctx = new ChoiceValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, ASN_3gppParser.RULE_choiceValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1069;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1070;
                this.match(ASN_3gppParser.COLON);
                this.state = 1071;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.enumeratedValue = function () {
        var _localctx = new EnumeratedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, ASN_3gppParser.RULE_enumeratedValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1073;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.signedNumber = function () {
        var _localctx = new SignedNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, ASN_3gppParser.RULE_signedNumber);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1076;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.MINUS) {
                    {
                        this.state = 1075;
                        this.match(ASN_3gppParser.MINUS);
                    }
                }
                this.state = 1078;
                this.match(ASN_3gppParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.choiceType = function () {
        var _localctx = new ChoiceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, ASN_3gppParser.RULE_choiceType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1080;
                this.match(ASN_3gppParser.CHOICE_LITERAL);
                this.state = 1081;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1082;
                this.alternativeTypeLists();
                this.state = 1083;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.alternativeTypeLists = function () {
        var _localctx = new AlternativeTypeListsContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, ASN_3gppParser.RULE_alternativeTypeLists);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1085;
                this.rootAlternativeTypeList();
                this.state = 1091;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 1086;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 1087;
                        this.extensionAndException();
                        this.state = 1088;
                        this.extensionAdditionAlternatives();
                        this.state = 1089;
                        this.optionalExtensionMarker();
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
    ASN_3gppParser.prototype.extensionAdditionAlternatives = function () {
        var _localctx = new ExtensionAdditionAlternativesContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, ASN_3gppParser.RULE_extensionAdditionAlternatives);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1095;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                    case 1:
                        {
                            this.state = 1093;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1094;
                            this.extensionAdditionAlternativesList();
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
    ASN_3gppParser.prototype.extensionAdditionAlternativesList = function () {
        var _localctx = new ExtensionAdditionAlternativesListContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, ASN_3gppParser.RULE_extensionAdditionAlternativesList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1097;
                    this.extensionAdditionAlternative();
                }
                this.state = 1102;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1098;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1099;
                                this.extensionAdditionAlternative();
                            }
                        }
                    }
                    this.state = 1104;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
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
    ASN_3gppParser.prototype.extensionAdditionAlternative = function () {
        var _localctx = new ExtensionAdditionAlternativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, ASN_3gppParser.RULE_extensionAdditionAlternative);
        try {
            this.state = 1107;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.DOUBLE_L_BRACKET:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1105;
                        this.extensionAdditionAlternativesGroup();
                    }
                    break;
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1106;
                        this.namedType();
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
    ASN_3gppParser.prototype.extensionAdditionAlternativesGroup = function () {
        var _localctx = new ExtensionAdditionAlternativesGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, ASN_3gppParser.RULE_extensionAdditionAlternativesGroup);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1109;
                this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
                this.state = 1110;
                this.versionNumber();
                this.state = 1111;
                this.alternativeTypeList();
                this.state = 1112;
                this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.rootAlternativeTypeList = function () {
        var _localctx = new RootAlternativeTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, ASN_3gppParser.RULE_rootAlternativeTypeList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1114;
                this.alternativeTypeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.alternativeTypeList = function () {
        var _localctx = new AlternativeTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, ASN_3gppParser.RULE_alternativeTypeList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1116;
                    this.namedType();
                }
                this.state = 1121;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1117;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1118;
                                this.namedType();
                            }
                        }
                    }
                    this.state = 1123;
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
    ASN_3gppParser.prototype.namedType = function () {
        var _localctx = new NamedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, ASN_3gppParser.RULE_namedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1124;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1125;
                this.asnType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.enumeratedType = function () {
        var _localctx = new EnumeratedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, ASN_3gppParser.RULE_enumeratedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1127;
                this.match(ASN_3gppParser.ENUMERATED_LITERAL);
                this.state = 1128;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1129;
                this.enumerations();
                this.state = 1130;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.enumerations = function () {
        var _localctx = new EnumerationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, ASN_3gppParser.RULE_enumerations);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1132;
                this.rootEnumeration();
                this.state = 1142;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 1133;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 1134;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 1136;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.EXCLAM) {
                            {
                                this.state = 1135;
                                this.exceptionSpec();
                            }
                        }
                        this.state = 1140;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 1138;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1139;
                                this.additionalEnumeration();
                            }
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
    ASN_3gppParser.prototype.rootEnumeration = function () {
        var _localctx = new RootEnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, ASN_3gppParser.RULE_rootEnumeration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1144;
                this.enumeration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.enumeration = function () {
        var _localctx = new EnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, ASN_3gppParser.RULE_enumeration);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1146;
                this.enumerationItem();
                this.state = 1151;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1147;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1148;
                                this.enumerationItem();
                            }
                        }
                    }
                    this.state = 1153;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
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
    ASN_3gppParser.prototype.enumerationItem = function () {
        var _localctx = new EnumerationItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, ASN_3gppParser.RULE_enumerationItem);
        try {
            this.state = 1157;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1154;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1155;
                        this.namedNumber();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1156;
                        this.value();
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
    ASN_3gppParser.prototype.namedNumber = function () {
        var _localctx = new NamedNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, ASN_3gppParser.RULE_namedNumber);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1159;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1160;
                this.match(ASN_3gppParser.L_PARAN);
                this.state = 1163;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.MINUS:
                    case ASN_3gppParser.NUMBER:
                        {
                            this.state = 1161;
                            this.signedNumber();
                        }
                        break;
                    case ASN_3gppParser.IDENTIFIER:
                        {
                            this.state = 1162;
                            this.definedValue();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1165;
                this.match(ASN_3gppParser.R_PARAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.definedValue = function () {
        var _localctx = new DefinedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, ASN_3gppParser.RULE_definedValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1167;
                this.parameterizedValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.parameterizedValue = function () {
        var _localctx = new ParameterizedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, ASN_3gppParser.RULE_parameterizedValue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1169;
                this.simpleDefinedValue();
                this.state = 1171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        this.state = 1170;
                        this.actualParameterList();
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
    ASN_3gppParser.prototype.simpleDefinedValue = function () {
        var _localctx = new SimpleDefinedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, ASN_3gppParser.RULE_simpleDefinedValue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1173;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 1174;
                        this.match(ASN_3gppParser.DOT);
                        this.state = 1175;
                        this.match(ASN_3gppParser.IDENTIFIER);
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
    ASN_3gppParser.prototype.actualParameterList = function () {
        var _localctx = new ActualParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, ASN_3gppParser.RULE_actualParameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1178;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1179;
                this.actualParameter();
                this.state = 1184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 1180;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1181;
                            this.actualParameter();
                        }
                    }
                    this.state = 1186;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1187;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.actualParameter = function () {
        var _localctx = new ActualParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, ASN_3gppParser.RULE_actualParameter);
        try {
            this.state = 1191;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1189;
                        this.asnType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1190;
                        this.value();
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
    ASN_3gppParser.prototype.exceptionSpec = function () {
        var _localctx = new ExceptionSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, ASN_3gppParser.RULE_exceptionSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1193;
                this.match(ASN_3gppParser.EXCLAM);
                this.state = 1194;
                this.exceptionIdentification();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.exceptionIdentification = function () {
        var _localctx = new ExceptionIdentificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, ASN_3gppParser.RULE_exceptionIdentification);
        try {
            this.state = 1202;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1196;
                        this.signedNumber();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1197;
                        this.definedValue();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1198;
                        this.asnType();
                        this.state = 1199;
                        this.match(ASN_3gppParser.COLON);
                        this.state = 1200;
                        this.value();
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
    ASN_3gppParser.prototype.additionalEnumeration = function () {
        var _localctx = new AdditionalEnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, ASN_3gppParser.RULE_additionalEnumeration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1204;
                this.enumeration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.integerType = function () {
        var _localctx = new IntegerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, ASN_3gppParser.RULE_integerType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1206;
                this.match(ASN_3gppParser.INTEGER_LITERAL);
                this.state = 1211;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                    case 1:
                        {
                            this.state = 1207;
                            this.match(ASN_3gppParser.L_BRACE);
                            this.state = 1208;
                            this.namedNumberList();
                            this.state = 1209;
                            this.match(ASN_3gppParser.R_BRACE);
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
    ASN_3gppParser.prototype.namedNumberList = function () {
        var _localctx = new NamedNumberListContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, ASN_3gppParser.RULE_namedNumberList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1213;
                    this.namedNumber();
                }
                this.state = 1218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 1214;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1215;
                            this.namedNumber();
                        }
                    }
                    this.state = 1220;
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
    ASN_3gppParser.prototype.objectidentifiertype = function () {
        var _localctx = new ObjectidentifiertypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, ASN_3gppParser.RULE_objectidentifiertype);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1221;
                this.match(ASN_3gppParser.OBJECT_LITERAL);
                this.state = 1222;
                this.match(ASN_3gppParser.IDENTIFIER_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.componentRelationConstraint = function () {
        var _localctx = new ComponentRelationConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, ASN_3gppParser.RULE_componentRelationConstraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1224;
                this.match(ASN_3gppParser.L_BRACE);
                {
                    this.state = 1225;
                    this.match(ASN_3gppParser.IDENTIFIER);
                    this.state = 1228;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === ASN_3gppParser.DOT) {
                        {
                            this.state = 1226;
                            this.match(ASN_3gppParser.DOT);
                            this.state = 1227;
                            this.match(ASN_3gppParser.IDENTIFIER);
                        }
                    }
                }
                this.state = 1230;
                this.match(ASN_3gppParser.R_BRACE);
                this.state = 1242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        this.state = 1231;
                        this.match(ASN_3gppParser.L_BRACE);
                        this.state = 1232;
                        this.atNotation();
                        this.state = 1237;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ASN_3gppParser.COMMA) {
                            {
                                {
                                    this.state = 1233;
                                    this.match(ASN_3gppParser.COMMA);
                                    this.state = 1234;
                                    this.atNotation();
                                }
                            }
                            this.state = 1239;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1240;
                        this.match(ASN_3gppParser.R_BRACE);
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
    ASN_3gppParser.prototype.atNotation = function () {
        var _localctx = new AtNotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 284, ASN_3gppParser.RULE_atNotation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1247;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.A_ROND:
                        {
                            this.state = 1244;
                            this.match(ASN_3gppParser.A_ROND);
                        }
                        break;
                    case ASN_3gppParser.A_ROND_DOT:
                        {
                            {
                                this.state = 1245;
                                this.match(ASN_3gppParser.A_ROND_DOT);
                                this.state = 1246;
                                this.level();
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1249;
                this.componentIdList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.level = function () {
        var _localctx = new LevelContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, ASN_3gppParser.RULE_level);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 1251;
                        this.match(ASN_3gppParser.DOT);
                        this.state = 1252;
                        this.level();
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
    ASN_3gppParser.prototype.componentIdList = function () {
        var _localctx = new ComponentIdListContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, ASN_3gppParser.RULE_componentIdList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1255;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.DOT) {
                    {
                        {
                            this.state = 1256;
                            this.match(ASN_3gppParser.DOT);
                            this.state = 1257;
                            this.match(ASN_3gppParser.IDENTIFIER);
                        }
                    }
                    this.state = 1262;
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
    ASN_3gppParser.prototype.octetStringType = function () {
        var _localctx = new OctetStringTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, ASN_3gppParser.RULE_octetStringType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1263;
                this.match(ASN_3gppParser.OCTET_LITERAL);
                this.state = 1264;
                this.match(ASN_3gppParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.bitStringType = function () {
        var _localctx = new BitStringTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 292, ASN_3gppParser.RULE_bitStringType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1266;
                    this.match(ASN_3gppParser.BIT_LITERAL);
                    this.state = 1267;
                    this.match(ASN_3gppParser.STRING_LITERAL);
                }
                this.state = 1273;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                    case 1:
                        {
                            this.state = 1269;
                            this.match(ASN_3gppParser.L_BRACE);
                            this.state = 1270;
                            this.namedBitList();
                            this.state = 1271;
                            this.match(ASN_3gppParser.R_BRACE);
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
    ASN_3gppParser.prototype.namedBitList = function () {
        var _localctx = new NamedBitListContext(this._ctx, this.state);
        this.enterRule(_localctx, 294, ASN_3gppParser.RULE_namedBitList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1275;
                    this.namedBit();
                }
                this.state = 1280;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 1276;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1277;
                            this.namedBit();
                        }
                    }
                    this.state = 1282;
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
    ASN_3gppParser.prototype.namedBit = function () {
        var _localctx = new NamedBitContext(this._ctx, this.state);
        this.enterRule(_localctx, 296, ASN_3gppParser.RULE_namedBit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1283;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1284;
                this.match(ASN_3gppParser.L_PARAN);
                this.state = 1287;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.NUMBER:
                        {
                            this.state = 1285;
                            this.match(ASN_3gppParser.NUMBER);
                        }
                        break;
                    case ASN_3gppParser.IDENTIFIER:
                        {
                            this.state = 1286;
                            this.definedValue();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1289;
                this.match(ASN_3gppParser.R_PARAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ASN_3gppParser.prototype.booleanValue = function () {
        var _localctx = new BooleanValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 298, ASN_3gppParser.RULE_booleanValue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1291;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.TRUE_LITERAL) | (1 << ASN_3gppParser.FALSE_LITERAL) | (1 << ASN_3gppParser.TRUE_SMALL_LITERAL) | (1 << ASN_3gppParser.FALSE_SMALL_LITERAL))) !== 0))) {
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
    Object.defineProperty(ASN_3gppParser, "_ATN", {
        get: function () {
            if (!ASN_3gppParser.__ATN) {
                ASN_3gppParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ASN_3gppParser._serializedATN));
            }
            return ASN_3gppParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ASN_3gppParser.NEED_LITERAL = 1;
    ASN_3gppParser.COND_LITERAL = 2;
    ASN_3gppParser.INVALID_TAG = 3;
    ASN_3gppParser.A_ROND = 4;
    ASN_3gppParser.STAR = 5;
    ASN_3gppParser.ASSIGN_OP = 6;
    ASN_3gppParser.BOOLEAN_LITERAL = 7;
    ASN_3gppParser.TRUE_LITERAL = 8;
    ASN_3gppParser.FALSE_LITERAL = 9;
    ASN_3gppParser.DOT = 10;
    ASN_3gppParser.DOUBLE_DOT = 11;
    ASN_3gppParser.ELLIPSIS = 12;
    ASN_3gppParser.APOSTROPHE = 13;
    ASN_3gppParser.AMPERSAND = 14;
    ASN_3gppParser.LESS_THAN = 15;
    ASN_3gppParser.GREATER_THAN = 16;
    ASN_3gppParser.LESS_THAN_SLASH = 17;
    ASN_3gppParser.SLASH_GREATER_THAN = 18;
    ASN_3gppParser.TRUE_SMALL_LITERAL = 19;
    ASN_3gppParser.FALSE_SMALL_LITERAL = 20;
    ASN_3gppParser.INTEGER_LITERAL = 21;
    ASN_3gppParser.L_BRACE = 22;
    ASN_3gppParser.R_BRACE = 23;
    ASN_3gppParser.COMMA = 24;
    ASN_3gppParser.L_PARAN = 25;
    ASN_3gppParser.R_PARAN = 26;
    ASN_3gppParser.MINUS = 27;
    ASN_3gppParser.ENUMERATED_LITERAL = 28;
    ASN_3gppParser.REAL_LITERAL = 29;
    ASN_3gppParser.PLUS_INFINITY_LITERAL = 30;
    ASN_3gppParser.MINUS_INFINITY_LITERAL = 31;
    ASN_3gppParser.BIT_LITERAL = 32;
    ASN_3gppParser.STRING_LITERAL = 33;
    ASN_3gppParser.CONTAINING_LITERAL = 34;
    ASN_3gppParser.OCTET_LITERAL = 35;
    ASN_3gppParser.NULL_LITERAL = 36;
    ASN_3gppParser.SEQUENCE_LITERAL = 37;
    ASN_3gppParser.OPTIONAL_LITERAL = 38;
    ASN_3gppParser.DEFAULT_LITERAL = 39;
    ASN_3gppParser.COMPONENTS_LITERAL = 40;
    ASN_3gppParser.OF_LITERAL = 41;
    ASN_3gppParser.SET_LITERAL = 42;
    ASN_3gppParser.EXCLAM = 43;
    ASN_3gppParser.ALL_LITERAL = 44;
    ASN_3gppParser.EXCEPT_LITERAL = 45;
    ASN_3gppParser.POWER = 46;
    ASN_3gppParser.PIPE = 47;
    ASN_3gppParser.UNION_LITERAL = 48;
    ASN_3gppParser.INTERSECTION_LITERAL = 49;
    ASN_3gppParser.INCLUDES_LITERAL = 50;
    ASN_3gppParser.MIN_LITERAL = 51;
    ASN_3gppParser.MAX_LITERAL = 52;
    ASN_3gppParser.SIZE_LITERAL = 53;
    ASN_3gppParser.FROM_LITERAL = 54;
    ASN_3gppParser.WITH_LITERAL = 55;
    ASN_3gppParser.COMPONENT_LITERAL = 56;
    ASN_3gppParser.PRESENT_LITERAL = 57;
    ASN_3gppParser.ABSENT_LITERAL = 58;
    ASN_3gppParser.PATTERN_LITERAL = 59;
    ASN_3gppParser.TYPE_IDENTIFIER_LITERAL = 60;
    ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL = 61;
    ASN_3gppParser.CLASS_LITERAL = 62;
    ASN_3gppParser.UNIQUE_LITERAL = 63;
    ASN_3gppParser.SYNTAX_LITERAL = 64;
    ASN_3gppParser.L_BRACKET = 65;
    ASN_3gppParser.R_BRACKET = 66;
    ASN_3gppParser.INSTANCE_LITERAL = 67;
    ASN_3gppParser.SEMI_COLON = 68;
    ASN_3gppParser.IMPORTS_LITERAL = 69;
    ASN_3gppParser.EXPORTS_LITERAL = 70;
    ASN_3gppParser.EXTENSIBILITY_LITERAL = 71;
    ASN_3gppParser.IMPLIED_LITERAL = 72;
    ASN_3gppParser.EXPLICIT_LITERAL = 73;
    ASN_3gppParser.TAGS_LITERAL = 74;
    ASN_3gppParser.IMPLICIT_LITERAL = 75;
    ASN_3gppParser.AUTOMATIC_LITERAL = 76;
    ASN_3gppParser.DEFINITIONS_LITERAL = 77;
    ASN_3gppParser.BEGIN_LITERAL = 78;
    ASN_3gppParser.END_LITERAL = 79;
    ASN_3gppParser.DOUBLE_L_BRACKET = 80;
    ASN_3gppParser.DOUBLE_R_BRACKET = 81;
    ASN_3gppParser.COLON = 82;
    ASN_3gppParser.CHOICE_LITERAL = 83;
    ASN_3gppParser.UNIVERSAL_LITERAL = 84;
    ASN_3gppParser.APPLICATION_LITERAL = 85;
    ASN_3gppParser.PRIVATE_LITERAL = 86;
    ASN_3gppParser.EMBEDDED_LITERAL = 87;
    ASN_3gppParser.PDV_LITERAL = 88;
    ASN_3gppParser.EXTERNAL_LITERAL = 89;
    ASN_3gppParser.OBJECT_LITERAL = 90;
    ASN_3gppParser.IDENTIFIER_LITERAL = 91;
    ASN_3gppParser.RELATIVE_OID_LITERAL = 92;
    ASN_3gppParser.CHARACTER_LITERAL = 93;
    ASN_3gppParser.CONSTRAINED_LITERAL = 94;
    ASN_3gppParser.BY_LITERAL = 95;
    ASN_3gppParser.A_ROND_DOT = 96;
    ASN_3gppParser.ENCODED_LITERAL = 97;
    ASN_3gppParser.COMMENT = 98;
    ASN_3gppParser.UNRESTRICTEDCHARACTERSTRINGTYPE = 99;
    ASN_3gppParser.EXTENSTIONENDMARKER = 100;
    ASN_3gppParser.NUMBER = 101;
    ASN_3gppParser.WS = 102;
    ASN_3gppParser.LINE_COMMENT = 103;
    ASN_3gppParser.BSTRING = 104;
    ASN_3gppParser.HSTRING = 105;
    ASN_3gppParser.CSTRING = 106;
    ASN_3gppParser.IDENTIFIER = 107;
    ASN_3gppParser.RULE_modules = 0;
    ASN_3gppParser.RULE_moduleDefinition = 1;
    ASN_3gppParser.RULE_tagDefault = 2;
    ASN_3gppParser.RULE_extensionDefault = 3;
    ASN_3gppParser.RULE_moduleBody = 4;
    ASN_3gppParser.RULE_exports = 5;
    ASN_3gppParser.RULE_symbolsExported = 6;
    ASN_3gppParser.RULE_imports = 7;
    ASN_3gppParser.RULE_symbolsImported = 8;
    ASN_3gppParser.RULE_symbolsFromModuleList = 9;
    ASN_3gppParser.RULE_symbolsFromModule = 10;
    ASN_3gppParser.RULE_globalModuleReference = 11;
    ASN_3gppParser.RULE_assignedIdentifier = 12;
    ASN_3gppParser.RULE_symbolList = 13;
    ASN_3gppParser.RULE_symbol = 14;
    ASN_3gppParser.RULE_assignmentList = 15;
    ASN_3gppParser.RULE_assignment = 16;
    ASN_3gppParser.RULE_sequenceType = 17;
    ASN_3gppParser.RULE_extensionAndException = 18;
    ASN_3gppParser.RULE_optionalExtensionMarker = 19;
    ASN_3gppParser.RULE_componentTypeLists = 20;
    ASN_3gppParser.RULE_rootComponentTypeList = 21;
    ASN_3gppParser.RULE_componentTypeList = 22;
    ASN_3gppParser.RULE_componentType = 23;
    ASN_3gppParser.RULE_tag = 24;
    ASN_3gppParser.RULE_needTag = 25;
    ASN_3gppParser.RULE_condTag = 26;
    ASN_3gppParser.RULE_extensionAdditions = 27;
    ASN_3gppParser.RULE_extensionAdditionList = 28;
    ASN_3gppParser.RULE_extensionAddition = 29;
    ASN_3gppParser.RULE_extensionAdditionGroup = 30;
    ASN_3gppParser.RULE_versionNumber = 31;
    ASN_3gppParser.RULE_sequenceOfType = 32;
    ASN_3gppParser.RULE_sizeConstraint = 33;
    ASN_3gppParser.RULE_parameterizedAssignment = 34;
    ASN_3gppParser.RULE_parameterList = 35;
    ASN_3gppParser.RULE_parameter = 36;
    ASN_3gppParser.RULE_paramGovernor = 37;
    ASN_3gppParser.RULE_governor = 38;
    ASN_3gppParser.RULE_objectClassAssignment = 39;
    ASN_3gppParser.RULE_objectClass = 40;
    ASN_3gppParser.RULE_definedObjectClass = 41;
    ASN_3gppParser.RULE_usefulObjectClassReference = 42;
    ASN_3gppParser.RULE_externalObjectClassReference = 43;
    ASN_3gppParser.RULE_objectClassDefn = 44;
    ASN_3gppParser.RULE_withSyntaxSpec = 45;
    ASN_3gppParser.RULE_syntaxList = 46;
    ASN_3gppParser.RULE_tokenOrGroupSpec = 47;
    ASN_3gppParser.RULE_optionalGroup = 48;
    ASN_3gppParser.RULE_requiredToken = 49;
    ASN_3gppParser.RULE_literal = 50;
    ASN_3gppParser.RULE_primitiveFieldName = 51;
    ASN_3gppParser.RULE_fieldSpec = 52;
    ASN_3gppParser.RULE_typeFieldSpec = 53;
    ASN_3gppParser.RULE_typeOptionalitySpec = 54;
    ASN_3gppParser.RULE_fixedTypeValueFieldSpec = 55;
    ASN_3gppParser.RULE_valueOptionalitySpec = 56;
    ASN_3gppParser.RULE_variableTypeValueFieldSpec = 57;
    ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec = 58;
    ASN_3gppParser.RULE_valueSetOptionalitySpec = 59;
    ASN_3gppParser.RULE_object = 60;
    ASN_3gppParser.RULE_parameterizedObject = 61;
    ASN_3gppParser.RULE_definedObject = 62;
    ASN_3gppParser.RULE_objectSet = 63;
    ASN_3gppParser.RULE_objectSetSpec = 64;
    ASN_3gppParser.RULE_fieldName = 65;
    ASN_3gppParser.RULE_valueSet = 66;
    ASN_3gppParser.RULE_elementSetSpecs = 67;
    ASN_3gppParser.RULE_rootElementSetSpec = 68;
    ASN_3gppParser.RULE_additionalElementSetSpec = 69;
    ASN_3gppParser.RULE_elementSetSpec = 70;
    ASN_3gppParser.RULE_unions = 71;
    ASN_3gppParser.RULE_exclusions = 72;
    ASN_3gppParser.RULE_intersections = 73;
    ASN_3gppParser.RULE_unionMark = 74;
    ASN_3gppParser.RULE_intersectionMark = 75;
    ASN_3gppParser.RULE_elements = 76;
    ASN_3gppParser.RULE_objectSetElements = 77;
    ASN_3gppParser.RULE_intersectionElements = 78;
    ASN_3gppParser.RULE_subtypeElements = 79;
    ASN_3gppParser.RULE_variableTypeValueSetFieldSpec = 80;
    ASN_3gppParser.RULE_objectFieldSpec = 81;
    ASN_3gppParser.RULE_objectOptionalitySpec = 82;
    ASN_3gppParser.RULE_objectSetFieldSpec = 83;
    ASN_3gppParser.RULE_objectSetOptionalitySpec = 84;
    ASN_3gppParser.RULE_typeAssignment = 85;
    ASN_3gppParser.RULE_valueAssignment = 86;
    ASN_3gppParser.RULE_asnType = 87;
    ASN_3gppParser.RULE_builtinType = 88;
    ASN_3gppParser.RULE_objectClassFieldType = 89;
    ASN_3gppParser.RULE_setType = 90;
    ASN_3gppParser.RULE_setOfType = 91;
    ASN_3gppParser.RULE_referencedType = 92;
    ASN_3gppParser.RULE_definedType = 93;
    ASN_3gppParser.RULE_constraint = 94;
    ASN_3gppParser.RULE_constraintSpec = 95;
    ASN_3gppParser.RULE_userDefinedConstraint = 96;
    ASN_3gppParser.RULE_generalConstraint = 97;
    ASN_3gppParser.RULE_userDefinedConstraintParameter = 98;
    ASN_3gppParser.RULE_tableConstraint = 99;
    ASN_3gppParser.RULE_simpleTableConstraint = 100;
    ASN_3gppParser.RULE_contentsConstraint = 101;
    ASN_3gppParser.RULE_componentPresenceLists = 102;
    ASN_3gppParser.RULE_componentPresenceList = 103;
    ASN_3gppParser.RULE_componentPresence = 104;
    ASN_3gppParser.RULE_subtypeConstraint = 105;
    ASN_3gppParser.RULE_value = 106;
    ASN_3gppParser.RULE_builtinValue = 107;
    ASN_3gppParser.RULE_objectIdentifierValue = 108;
    ASN_3gppParser.RULE_objIdComponentsList = 109;
    ASN_3gppParser.RULE_objIdComponents = 110;
    ASN_3gppParser.RULE_integerValue = 111;
    ASN_3gppParser.RULE_choiceValue = 112;
    ASN_3gppParser.RULE_enumeratedValue = 113;
    ASN_3gppParser.RULE_signedNumber = 114;
    ASN_3gppParser.RULE_choiceType = 115;
    ASN_3gppParser.RULE_alternativeTypeLists = 116;
    ASN_3gppParser.RULE_extensionAdditionAlternatives = 117;
    ASN_3gppParser.RULE_extensionAdditionAlternativesList = 118;
    ASN_3gppParser.RULE_extensionAdditionAlternative = 119;
    ASN_3gppParser.RULE_extensionAdditionAlternativesGroup = 120;
    ASN_3gppParser.RULE_rootAlternativeTypeList = 121;
    ASN_3gppParser.RULE_alternativeTypeList = 122;
    ASN_3gppParser.RULE_namedType = 123;
    ASN_3gppParser.RULE_enumeratedType = 124;
    ASN_3gppParser.RULE_enumerations = 125;
    ASN_3gppParser.RULE_rootEnumeration = 126;
    ASN_3gppParser.RULE_enumeration = 127;
    ASN_3gppParser.RULE_enumerationItem = 128;
    ASN_3gppParser.RULE_namedNumber = 129;
    ASN_3gppParser.RULE_definedValue = 130;
    ASN_3gppParser.RULE_parameterizedValue = 131;
    ASN_3gppParser.RULE_simpleDefinedValue = 132;
    ASN_3gppParser.RULE_actualParameterList = 133;
    ASN_3gppParser.RULE_actualParameter = 134;
    ASN_3gppParser.RULE_exceptionSpec = 135;
    ASN_3gppParser.RULE_exceptionIdentification = 136;
    ASN_3gppParser.RULE_additionalEnumeration = 137;
    ASN_3gppParser.RULE_integerType = 138;
    ASN_3gppParser.RULE_namedNumberList = 139;
    ASN_3gppParser.RULE_objectidentifiertype = 140;
    ASN_3gppParser.RULE_componentRelationConstraint = 141;
    ASN_3gppParser.RULE_atNotation = 142;
    ASN_3gppParser.RULE_level = 143;
    ASN_3gppParser.RULE_componentIdList = 144;
    ASN_3gppParser.RULE_octetStringType = 145;
    ASN_3gppParser.RULE_bitStringType = 146;
    ASN_3gppParser.RULE_namedBitList = 147;
    ASN_3gppParser.RULE_namedBit = 148;
    ASN_3gppParser.RULE_booleanValue = 149;
    // tslint:disable:no-trailing-whitespace
    ASN_3gppParser.ruleNames = [
        "modules", "moduleDefinition", "tagDefault", "extensionDefault", "moduleBody",
        "exports", "symbolsExported", "imports", "symbolsImported", "symbolsFromModuleList",
        "symbolsFromModule", "globalModuleReference", "assignedIdentifier", "symbolList",
        "symbol", "assignmentList", "assignment", "sequenceType", "extensionAndException",
        "optionalExtensionMarker", "componentTypeLists", "rootComponentTypeList",
        "componentTypeList", "componentType", "tag", "needTag", "condTag", "extensionAdditions",
        "extensionAdditionList", "extensionAddition", "extensionAdditionGroup",
        "versionNumber", "sequenceOfType", "sizeConstraint", "parameterizedAssignment",
        "parameterList", "parameter", "paramGovernor", "governor", "objectClassAssignment",
        "objectClass", "definedObjectClass", "usefulObjectClassReference", "externalObjectClassReference",
        "objectClassDefn", "withSyntaxSpec", "syntaxList", "tokenOrGroupSpec",
        "optionalGroup", "requiredToken", "literal", "primitiveFieldName", "fieldSpec",
        "typeFieldSpec", "typeOptionalitySpec", "fixedTypeValueFieldSpec", "valueOptionalitySpec",
        "variableTypeValueFieldSpec", "fixedTypeValueSetFieldSpec", "valueSetOptionalitySpec",
        "object", "parameterizedObject", "definedObject", "objectSet", "objectSetSpec",
        "fieldName", "valueSet", "elementSetSpecs", "rootElementSetSpec", "additionalElementSetSpec",
        "elementSetSpec", "unions", "exclusions", "intersections", "unionMark",
        "intersectionMark", "elements", "objectSetElements", "intersectionElements",
        "subtypeElements", "variableTypeValueSetFieldSpec", "objectFieldSpec",
        "objectOptionalitySpec", "objectSetFieldSpec", "objectSetOptionalitySpec",
        "typeAssignment", "valueAssignment", "asnType", "builtinType", "objectClassFieldType",
        "setType", "setOfType", "referencedType", "definedType", "constraint",
        "constraintSpec", "userDefinedConstraint", "generalConstraint", "userDefinedConstraintParameter",
        "tableConstraint", "simpleTableConstraint", "contentsConstraint", "componentPresenceLists",
        "componentPresenceList", "componentPresence", "subtypeConstraint", "value",
        "builtinValue", "objectIdentifierValue", "objIdComponentsList", "objIdComponents",
        "integerValue", "choiceValue", "enumeratedValue", "signedNumber", "choiceType",
        "alternativeTypeLists", "extensionAdditionAlternatives", "extensionAdditionAlternativesList",
        "extensionAdditionAlternative", "extensionAdditionAlternativesGroup",
        "rootAlternativeTypeList", "alternativeTypeList", "namedType", "enumeratedType",
        "enumerations", "rootEnumeration", "enumeration", "enumerationItem", "namedNumber",
        "definedValue", "parameterizedValue", "simpleDefinedValue", "actualParameterList",
        "actualParameter", "exceptionSpec", "exceptionIdentification", "additionalEnumeration",
        "integerType", "namedNumberList", "objectidentifiertype", "componentRelationConstraint",
        "atNotation", "level", "componentIdList", "octetStringType", "bitStringType",
        "namedBitList", "namedBit", "booleanValue",
    ];
    ASN_3gppParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, "'@'", "'*'", "'::='", "'BOOLEAN'",
        "'TRUE'", "'FALSE'", "'.'", "'..'", "'...'", "'''", "'&'", "'<'", "'>'",
        "'</'", "'/>'", "'true'", "'false'", "'INTEGER'", "'{'", "'}'", "','",
        "'('", "')'", "'-'", "'ENUMERATED'", "'REAL'", "'PLUS-INFINITY'", "'MINUS-INFINITY'",
        "'BIT'", "'STRING'", "'CONTAINING'", "'OCTET'", "'NULL'", "'SEQUENCE'",
        "'OPTIONAL'", "'DEFAULT'", "'COMPONENTS'", "'OF'", "'SET'", "'!'", "'ALL'",
        "'EXCEPT'", "'^'", "'|'", "'UNION'", "'INTERSECTION'", "'INCLUDES'", "'MIN'",
        "'MAX'", "'SIZE'", "'FROM'", "'WITH'", "'COMPONENT'", "'PRESENT'", "'ABSENT'",
        "'PATTERN'", "'TYPE-Identifier'", "'ABSTRACT-SYNTAX'", "'CLASS'", "'UNIQUE'",
        "'SYNTAX'", "'['", "']'", "'INSTANCE'", "';'", "'IMPORTS'", "'EXPORTS'",
        "'EXTENSIBILITY'", "'IMPLIED'", "'EXPLICIT'", "'TAGS'", "'IMPLICIT'",
        "'AUTOMATIC'", "'DEFINITIONS'", "'BEGIN'", "'END'", "'[['", "']]'", "':'",
        "'CHOICE'", "'UNIVERSAL'", "'APPLICATION'", "'PRIVATE'", "'EMBEDDED'",
        "'PDV'", "'EXTERNAL'", "'OBJECT'", "'IDENTIFIER'", "'RELATIVE-OID'", "'CHARACTER'",
        "'CONSTRAINED'", "'BY'", "'@.'", "'ENCODED'", "'--'",
    ];
    ASN_3gppParser._SYMBOLIC_NAMES = [
        undefined, "NEED_LITERAL", "COND_LITERAL", "INVALID_TAG", "A_ROND", "STAR",
        "ASSIGN_OP", "BOOLEAN_LITERAL", "TRUE_LITERAL", "FALSE_LITERAL", "DOT",
        "DOUBLE_DOT", "ELLIPSIS", "APOSTROPHE", "AMPERSAND", "LESS_THAN", "GREATER_THAN",
        "LESS_THAN_SLASH", "SLASH_GREATER_THAN", "TRUE_SMALL_LITERAL", "FALSE_SMALL_LITERAL",
        "INTEGER_LITERAL", "L_BRACE", "R_BRACE", "COMMA", "L_PARAN", "R_PARAN",
        "MINUS", "ENUMERATED_LITERAL", "REAL_LITERAL", "PLUS_INFINITY_LITERAL",
        "MINUS_INFINITY_LITERAL", "BIT_LITERAL", "STRING_LITERAL", "CONTAINING_LITERAL",
        "OCTET_LITERAL", "NULL_LITERAL", "SEQUENCE_LITERAL", "OPTIONAL_LITERAL",
        "DEFAULT_LITERAL", "COMPONENTS_LITERAL", "OF_LITERAL", "SET_LITERAL",
        "EXCLAM", "ALL_LITERAL", "EXCEPT_LITERAL", "POWER", "PIPE", "UNION_LITERAL",
        "INTERSECTION_LITERAL", "INCLUDES_LITERAL", "MIN_LITERAL", "MAX_LITERAL",
        "SIZE_LITERAL", "FROM_LITERAL", "WITH_LITERAL", "COMPONENT_LITERAL", "PRESENT_LITERAL",
        "ABSENT_LITERAL", "PATTERN_LITERAL", "TYPE_IDENTIFIER_LITERAL", "ABSTRACT_SYNTAX_LITERAL",
        "CLASS_LITERAL", "UNIQUE_LITERAL", "SYNTAX_LITERAL", "L_BRACKET", "R_BRACKET",
        "INSTANCE_LITERAL", "SEMI_COLON", "IMPORTS_LITERAL", "EXPORTS_LITERAL",
        "EXTENSIBILITY_LITERAL", "IMPLIED_LITERAL", "EXPLICIT_LITERAL", "TAGS_LITERAL",
        "IMPLICIT_LITERAL", "AUTOMATIC_LITERAL", "DEFINITIONS_LITERAL", "BEGIN_LITERAL",
        "END_LITERAL", "DOUBLE_L_BRACKET", "DOUBLE_R_BRACKET", "COLON", "CHOICE_LITERAL",
        "UNIVERSAL_LITERAL", "APPLICATION_LITERAL", "PRIVATE_LITERAL", "EMBEDDED_LITERAL",
        "PDV_LITERAL", "EXTERNAL_LITERAL", "OBJECT_LITERAL", "IDENTIFIER_LITERAL",
        "RELATIVE_OID_LITERAL", "CHARACTER_LITERAL", "CONSTRAINED_LITERAL", "BY_LITERAL",
        "A_ROND_DOT", "ENCODED_LITERAL", "COMMENT", "UNRESTRICTEDCHARACTERSTRINGTYPE",
        "EXTENSTIONENDMARKER", "NUMBER", "WS", "LINE_COMMENT", "BSTRING", "HSTRING",
        "CSTRING", "IDENTIFIER",
    ];
    ASN_3gppParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ASN_3gppParser._LITERAL_NAMES, ASN_3gppParser._SYMBOLIC_NAMES, []);
    ASN_3gppParser._serializedATNSegments = 3;
    ASN_3gppParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03m\u0510\x04\x02" +
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
        "\x04\x96\t\x96\x04\x97\t\x97\x03\x02\x06\x02\u0130\n\x02\r\x02\x0E\x02" +
        "\u0131\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u013A\n" +
        "\x03\f\x03\x0E\x03\u013D\v\x03\x03\x03\x05\x03\u0140\n\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05" +
        "\x04\u014C\n\x04\x03\x05\x03\x05\x05\x05\u0150\n\x05\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x05\x06\u0156\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x05\x07\u015F\n\x07\x03\b\x05\b\u0162\n\b\x03\t\x03\t" +
        "\x03\t\x03\t\x05\t\u0168\n\t\x03\n\x05\n\u016B\n\n\x03\v\x03\v\x07\v\u016F" +
        "\n\v\f\v\x0E\v\u0172\v\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
        "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0180\n\x0F\f\x0F\x0E\x0F" +
        "\u0183\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0188\n\x10\x03\x11\x03\x11" +
        "\x07\x11\u018C\n\x11\f\x11\x0E\x11\u018F\v\x11\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x05\x12\u0196\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x05\x13\u019E\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14" +
        "\u01A4\n\x14\x03\x15\x03\x15\x05\x15\u01A8\n\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x05\x16\u01AE\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x16\x05\x16\u01B7\n\x16\x05\x16\u01B9\n\x16\x05\x16\u01BB\n\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01C4" +
        "\n\x16\x05\x16\u01C6\n\x16\x05\x16\u01C8\n\x16\x03\x17\x03\x17\x03\x18" +
        "\x03\x18\x03\x18\x05\x18\u01CF\n\x18\x03\x18\x07\x18\u01D2\n\x18\f\x18" +
        "\x0E\x18\u01D5\v\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01DB\n\x19" +
        "\x03\x19\x03\x19\x03\x19\x05\x19\u01E0\n\x19\x03\x1A\x03\x1A\x03\x1A\x05" +
        "\x1A\u01E5\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
        "\x03\x1D\x05\x1D\u01EF\n\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01F4\n\x1E" +
        "\f\x1E\x0E\x1E\u01F7\v\x1E\x03\x1F\x03\x1F\x05\x1F\u01FB\n\x1F\x03 \x03" +
        " \x03 \x03 \x05 \u0201\n \x03 \x03 \x03!\x03!\x05!\u0207\n!\x03\"\x03" +
        "\"\x03\"\x03\"\x05\"\u020D\n\"\x03\"\x03\"\x05\"\u0211\n\"\x03\"\x03\"" +
        "\x03\"\x05\"\u0216\n\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x05$\u0220" +
        "\n$\x03$\x03$\x03$\x03$\x03$\x05$\u0227\n$\x05$\u0229\n$\x03%\x03%\x03" +
        "%\x03%\x07%\u022F\n%\f%\x0E%\u0232\v%\x03%\x03%\x03&\x03&\x03&\x05&\u0239" +
        "\n&\x03&\x03&\x03\'\x03\'\x05\'\u023F\n\'\x03(\x03(\x05(\u0243\n(\x03" +
        ")\x03)\x03)\x03*\x03*\x05*\u024A\n*\x03+\x03+\x05+\u024E\n+\x03+\x03+" +
        "\x03+\x05+\u0253\n+\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03." +
        "\x03.\x07.\u0260\n.\f.\x0E.\u0263\v.\x03.\x03.\x05.\u0267\n.\x03/\x03" +
        "/\x03/\x03/\x030\x030\x060\u026F\n0\r0\x0E0\u0270\x030\x030\x031\x031" +
        "\x051\u0277\n1\x032\x032\x062\u027B\n2\r2\x0E2\u027C\x032\x032\x033\x03" +
        "3\x053\u0283\n3\x034\x034\x035\x035\x035\x036\x036\x036\x056\u028D\n6" +
        "\x036\x036\x056\u0291\n6\x036\x056\u0294\n6\x036\x056\u0297\n6\x056\u0299" +
        "\n6\x036\x036\x036\x036\x036\x056\u02A0\n6\x056\u02A2\n6\x036\x036\x03" +
        "6\x036\x036\x056\u02A9\n6\x056\u02AB\n6\x056\u02AD\n6\x037\x037\x037\x05" +
        "7\u02B2\n7\x038\x038\x038\x058\u02B7\n8\x039\x039\x039\x039\x059\u02BD" +
        "\n9\x039\x059\u02C0\n9\x03:\x03:\x03:\x05:\u02C5\n:\x03;\x03;\x03;\x03" +
        ";\x05;\u02CB\n;\x03<\x03<\x03<\x03<\x05<\u02D1\n<\x03=\x03=\x03=\x05=" +
        "\u02D6\n=\x03>\x03>\x05>\u02DA\n>\x03?\x03?\x03?\x03@\x03@\x05@\u02E1" +
        "\n@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x05B\u02EC\nB\x05B\u02EE" +
        "\nB\x03B\x03B\x03B\x05B\u02F3\nB\x05B\u02F5\nB\x03C\x03C\x03C\x03C\x03" +
        "C\x03C\x07C\u02FD\nC\fC\x0EC\u0300\vC\x03D\x03D\x03D\x03D\x03E\x03E\x03" +
        "E\x03E\x03E\x05E\u030B\nE\x05E\u030D\nE\x03F\x03F\x03G\x03G\x03H\x03H" +
        "\x03H\x05H\u0316\nH\x03I\x03I\x03I\x03I\x07I\u031C\nI\fI\x0EI\u031F\v" +
        "I\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x07K\u0328\nK\fK\x0EK\u032B\vK\x03" +
        "L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x05O\u0335\nO\x03P\x03P\x05P\u0339" +
        "\nP\x03Q\x03Q\x05Q\u033D\nQ\x03Q\x05Q\u0340\nQ\x03Q\x03Q\x05Q\u0344\n" +
        "Q\x03Q\x03Q\x05Q\u0348\nQ\x03Q\x03Q\x03Q\x03Q\x05Q\u034E\nQ\x03R\x03R" +
        "\x03R\x03R\x05R\u0354\nR\x03S\x03S\x03S\x03S\x05S\u035A\nS\x03T\x03T\x03" +
        "T\x05T\u035F\nT\x03U\x03U\x03U\x03U\x05U\u0365\nU\x03V\x03V\x03V\x05V" +
        "\u036A\nV\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x03Y\x03Y\x05Y\u0375\nY\x03" +
        "Y\x07Y\u0378\nY\fY\x0EY\u037B\vY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
        "Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u038A\nZ\x03[\x03[\x03[\x03[\x03\\\x03" +
        "\\\x03\\\x03\\\x03\\\x03\\\x05\\\u0396\n\\\x03\\\x03\\\x03]\x03]\x03]" +
        "\x05]\u039D\n]\x03]\x03]\x03]\x05]\u03A2\n]\x03^\x03^\x03_\x03_\x03_\x05" +
        "_\u03A9\n_\x03_\x05_\u03AC\n_\x03`\x03`\x03`\x05`\u03B1\n`\x03`\x03`\x03" +
        "a\x03a\x05a\u03B7\na\x03b\x03b\x03b\x03b\x03b\x03b\x07b\u03BF\nb\fb\x0E" +
        "b\u03C2\vb\x03b\x03b\x03c\x03c\x03c\x05c\u03C9\nc\x03d\x03d\x03d\x03d" +
        "\x03d\x03d\x05d\u03D1\nd\x03e\x03e\x03f\x03f\x03g\x03g\x03g\x03g\x03g" +
        "\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u03E8" +
        "\ng\x03h\x05h\u03EB\nh\x03h\x03h\x03h\x03h\x05h\u03F1\nh\x05h\u03F3\n" +
        "h\x03h\x03h\x03h\x05h\u03F8\nh\x05h\u03FA\nh\x03i\x03i\x03i\x07i\u03FF" +
        "\ni\fi\x0Ei\u0402\vi\x03j\x03j\x03j\x03k\x03k\x03l\x03l\x03m\x03m\x03" +
        "m\x03m\x03m\x03m\x03m\x05m\u0412\nm\x03n\x03n\x03n\x03n\x03o\x03o\x07" +
        "o\u041A\no\fo\x0Eo\u041D\vo\x03p\x03p\x03p\x03p\x03p\x05p\u0424\np\x03" +
        "p\x05p\u0427\np\x03p\x05p\u042A\np\x03q\x03q\x05q\u042E\nq\x03r\x03r\x03" +
        "r\x03r\x03s\x03s\x03t\x05t\u0437\nt\x03t\x03t\x03u\x03u\x03u\x03u\x03" +
        "u\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u0446\nv\x03w\x03w\x05w\u044A\nw" +
        "\x03x\x03x\x03x\x07x\u044F\nx\fx\x0Ex\u0452\vx\x03y\x03y\x05y\u0456\n" +
        "y\x03z\x03z\x03z\x03z\x03z\x03{\x03{\x03|\x03|\x03|\x07|\u0462\n|\f|\x0E" +
        "|\u0465\v|\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03" +
        "\x7F\x03\x7F\x05\x7F\u0473\n\x7F\x03\x7F\x03\x7F\x05\x7F\u0477\n\x7F\x05" +
        "\x7F\u0479\n\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x07\x81\u0480" +
        "\n\x81\f\x81\x0E\x81\u0483\v\x81\x03\x82\x03\x82\x03\x82\x05\x82\u0488" +
        "\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u048E\n\x83\x03\x83\x03" +
        "\x83\x03\x84\x03\x84\x03\x85\x03\x85\x05\x85\u0496\n\x85\x03\x86\x03\x86" +
        "\x03\x86\x05\x86\u049B\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x07\x87\u04A1" +
        "\n\x87\f\x87\x0E\x87\u04A4\v\x87\x03\x87\x03\x87\x03\x88\x03\x88\x05\x88" +
        "\u04AA\n\x88\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
        "\x8A\x03\x8A\x05\x8A\u04B5\n\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C" +
        "\x03\x8C\x03\x8C\x05\x8C\u04BE\n\x8C\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u04C3" +
        "\n\x8D\f\x8D\x0E\x8D\u04C6\v\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F" +
        "\x03\x8F\x03\x8F\x05\x8F\u04CF\n\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03" +
        "\x8F\x07\x8F\u04D6\n\x8F\f\x8F\x0E\x8F\u04D9\v\x8F\x03\x8F\x03\x8F\x05" +
        "\x8F\u04DD\n\x8F\x03\x90\x03\x90\x03\x90\x05\x90\u04E2\n\x90\x03\x90\x03" +
        "\x90\x03\x91\x03\x91\x05\x91\u04E8\n\x91\x03\x92\x03\x92\x03\x92\x07\x92" +
        "\u04ED\n\x92\f\x92\x0E\x92\u04F0\v\x92\x03\x93\x03\x93\x03\x93\x03\x94" +
        "\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u04FC\n\x94\x03" +
        "\x95\x03\x95\x03\x95\x07\x95\u0501\n\x95\f\x95\x0E\x95\u0504\v\x95\x03" +
        "\x96\x03\x96\x03\x96\x03\x96\x05\x96\u050A\n\x96\x03\x96\x03\x96\x03\x97" +
        "\x03\x97\x03\x97\x02\x02\x02\x98\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
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
        "\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\x02\t" +
        "\x04\x02KKMN\x03\x02>?\x04\x02\x1A\x1Amm\x03\x0212\x04\x020033\x03\x02" +
        ";<\x04\x02\n\v\x15\x16\x02\u053A\x02\u012F\x03\x02\x02\x02\x04\u0133\x03" +
        "\x02\x02\x02\x06\u014B\x03\x02\x02\x02\b\u014F\x03\x02\x02\x02\n\u0155" +
        "\x03\x02\x02\x02\f\u015E\x03\x02\x02\x02\x0E\u0161\x03\x02\x02\x02\x10" +
        "\u0167\x03\x02\x02\x02\x12\u016A\x03\x02\x02\x02\x14\u016C\x03\x02\x02" +
        "\x02\x16\u0173\x03\x02\x02\x02\x18\u0177\x03\x02\x02\x02\x1A\u017A\x03" +
        "\x02\x02\x02\x1C\u017C\x03\x02\x02\x02\x1E\u0184\x03\x02\x02\x02 \u0189" +
        "\x03\x02\x02\x02\"\u0190\x03\x02\x02\x02$\u0197\x03\x02\x02\x02&\u01A1" +
        "\x03\x02\x02\x02(\u01A7\x03\x02\x02\x02*\u01C7\x03\x02\x02\x02,\u01C9" +
        "\x03\x02\x02\x02.\u01CB\x03\x02\x02\x020\u01DF\x03\x02\x02\x022\u01E4" +
        "\x03\x02\x02\x024\u01E6\x03\x02\x02\x026\u01E9\x03\x02\x02\x028\u01EE" +
        "\x03\x02\x02\x02:\u01F0\x03\x02\x02\x02<\u01FA\x03\x02\x02\x02>\u01FC" +
        "\x03\x02\x02\x02@\u0206\x03\x02\x02\x02B\u0208\x03\x02\x02\x02D\u0217" +
        "\x03\x02\x02\x02F\u0228\x03\x02\x02\x02H\u022A\x03\x02\x02\x02J\u0238" +
        "\x03\x02\x02\x02L\u023E\x03\x02\x02\x02N\u0242\x03\x02\x02\x02P\u0244" +
        "\x03\x02\x02\x02R\u0249\x03\x02\x02\x02T\u0252\x03\x02\x02\x02V\u0254" +
        "\x03\x02\x02\x02X\u0256\x03\x02\x02\x02Z\u025A\x03\x02\x02\x02\\\u0268" +
        "\x03\x02\x02\x02^\u026C\x03\x02\x02\x02`\u0276\x03\x02\x02\x02b\u0278" +
        "\x03\x02\x02\x02d\u0282\x03\x02\x02\x02f\u0284\x03\x02\x02\x02h\u0286" +
        "\x03\x02\x02\x02j\u0289\x03\x02\x02\x02l\u02AE\x03\x02\x02\x02n\u02B6" +
        "\x03\x02\x02\x02p\u02B8\x03\x02\x02\x02r\u02C4\x03\x02\x02\x02t\u02C6" +
        "\x03\x02\x02\x02v\u02CC\x03\x02\x02\x02x\u02D5\x03\x02\x02\x02z\u02D9" +
        "\x03\x02\x02\x02|\u02DB\x03\x02\x02\x02~\u02DE\x03\x02\x02\x02\x80\u02E2" +
        "\x03\x02\x02\x02\x82\u02F4\x03\x02\x02\x02\x84\u02F6\x03\x02\x02\x02\x86" +
        "\u0301\x03\x02\x02\x02\x88\u0305\x03\x02\x02\x02\x8A\u030E\x03\x02\x02" +
        "\x02\x8C\u0310\x03\x02\x02\x02\x8E\u0315\x03\x02\x02\x02\x90\u0317\x03" +
        "\x02\x02\x02\x92\u0320\x03\x02\x02\x02\x94\u0323\x03\x02\x02\x02\x96\u032C" +
        "\x03\x02\x02\x02\x98\u032E\x03\x02\x02\x02\x9A\u0330\x03\x02\x02\x02\x9C" +
        "\u0334\x03\x02\x02\x02\x9E\u0336\x03\x02\x02\x02\xA0\u034D\x03\x02\x02" +
        "\x02\xA2\u034F\x03\x02\x02\x02\xA4\u0355\x03\x02\x02\x02\xA6\u035E\x03" +
        "\x02\x02\x02\xA8\u0360\x03\x02\x02\x02\xAA\u0369\x03\x02\x02\x02\xAC\u036B" +
        "\x03\x02\x02\x02\xAE\u036E\x03\x02\x02\x02\xB0\u0374\x03\x02\x02\x02\xB2" +
        "\u0389\x03\x02\x02\x02\xB4\u038B\x03\x02\x02\x02\xB6\u038F\x03\x02\x02" +
        "\x02\xB8\u0399\x03\x02\x02\x02\xBA\u03A3\x03\x02\x02\x02\xBC\u03A5\x03" +
        "\x02\x02\x02\xBE\u03AD\x03\x02\x02\x02\xC0\u03B6\x03\x02\x02\x02\xC2\u03B8" +
        "\x03\x02\x02\x02\xC4\u03C8\x03\x02\x02\x02\xC6\u03CA\x03\x02\x02\x02\xC8" +
        "\u03D2\x03\x02\x02\x02\xCA\u03D4\x03\x02\x02\x02\xCC\u03E7\x03\x02\x02" +
        "\x02\xCE\u03F9\x03\x02\x02\x02\xD0\u03FB\x03\x02\x02\x02\xD2\u0403\x03" +
        "\x02\x02\x02\xD4\u0406\x03\x02\x02\x02\xD6\u0408\x03\x02\x02\x02\xD8\u0411" +
        "\x03\x02\x02\x02\xDA\u0413\x03\x02\x02\x02\xDC\u0417\x03\x02\x02\x02\xDE" +
        "\u0429\x03\x02\x02\x02\xE0\u042D\x03\x02\x02\x02\xE2\u042F\x03\x02\x02" +
        "\x02\xE4\u0433\x03\x02\x02\x02\xE6\u0436\x03\x02\x02\x02\xE8\u043A\x03" +
        "\x02\x02\x02\xEA\u043F\x03\x02\x02\x02\xEC\u0449\x03\x02\x02\x02\xEE\u044B" +
        "\x03\x02\x02\x02\xF0\u0455\x03\x02\x02\x02\xF2\u0457\x03\x02\x02\x02\xF4" +
        "\u045C\x03\x02\x02\x02\xF6\u045E\x03\x02\x02\x02\xF8\u0466\x03\x02\x02" +
        "\x02\xFA\u0469\x03\x02\x02\x02\xFC\u046E\x03\x02\x02\x02\xFE\u047A\x03" +
        "\x02\x02\x02\u0100\u047C\x03\x02\x02\x02\u0102\u0487\x03\x02\x02\x02\u0104" +
        "\u0489\x03\x02\x02\x02\u0106\u0491\x03\x02\x02\x02\u0108\u0493\x03\x02" +
        "\x02\x02\u010A\u0497\x03\x02\x02\x02\u010C\u049C\x03\x02\x02\x02\u010E" +
        "\u04A9\x03\x02\x02\x02\u0110\u04AB\x03\x02\x02\x02\u0112\u04B4\x03\x02" +
        "\x02\x02\u0114\u04B6\x03\x02\x02\x02\u0116\u04B8\x03\x02\x02\x02\u0118" +
        "\u04BF\x03\x02\x02\x02\u011A\u04C7\x03\x02\x02\x02\u011C\u04CA\x03\x02" +
        "\x02\x02\u011E\u04E1\x03\x02\x02\x02\u0120\u04E7\x03\x02\x02\x02\u0122" +
        "\u04E9\x03\x02\x02\x02\u0124\u04F1\x03\x02\x02\x02\u0126\u04F4\x03\x02" +
        "\x02\x02\u0128\u04FD\x03\x02\x02\x02\u012A\u0505\x03\x02\x02\x02\u012C" +
        "\u050D\x03\x02\x02\x02\u012E\u0130\x05\x04\x03\x02\u012F\u012E\x03\x02" +
        "\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131" +
        "\u0132\x03\x02\x02\x02\u0132\x03\x03\x02\x02\x02\u0133\u013F\x07m\x02" +
        "\x02\u0134\u013B\x07\x18\x02\x02\u0135\u0136\x07m\x02\x02\u0136\u0137" +
        "\x07\x1B\x02\x02\u0137\u0138\x07g\x02\x02\u0138\u013A\x07\x1C\x02\x02" +
        "\u0139\u0135\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03" +
        "\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D" +
        "\u013B\x03\x02\x02\x02\u013E\u0140\x07\x19\x02\x02\u013F\u0134\x03\x02" +
        "\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
        "\u0142\x07O\x02\x02\u0142\u0143\x05\x06\x04\x02\u0143\u0144\x05\b\x05" +
        "\x02\u0144\u0145\x07\b\x02\x02\u0145\u0146\x07P\x02\x02\u0146\u0147\x05" +
        "\n\x06\x02\u0147\u0148\x07Q\x02\x02\u0148\x05\x03\x02\x02\x02\u0149\u014A" +
        "\t\x02\x02\x02\u014A\u014C\x07L\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B" +
        "\u014C\x03\x02\x02\x02\u014C\x07\x03\x02\x02\x02\u014D\u014E\x07I\x02" +
        "\x02\u014E\u0150\x07J\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150" +
        "\x03\x02\x02\x02\u0150\t\x03\x02\x02\x02\u0151\u0152\x05\f\x07\x02\u0152" +
        "\u0153\x05\x10\t\x02\u0153\u0154\x05 \x11\x02\u0154\u0156\x03\x02\x02" +
        "\x02\u0155\u0151\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\v\x03" +
        "\x02\x02\x02\u0157\u0158\x07H\x02\x02\u0158\u0159\x05\x0E\b\x02\u0159" +
        "\u015A\x07F\x02\x02\u015A\u015F\x03\x02\x02\x02\u015B\u015C\x07H\x02\x02" +
        "\u015C\u015D\x07.\x02\x02\u015D\u015F\x07F\x02\x02\u015E\u0157\x03\x02" +
        "\x02\x02\u015E\u015B\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F" +
        "\r\x03\x02\x02\x02\u0160\u0162\x05\x1C\x0F\x02\u0161\u0160\x03\x02\x02" +
        "\x02\u0161\u0162\x03\x02\x02\x02\u0162\x0F\x03\x02\x02\x02\u0163\u0164" +
        "\x07G\x02\x02\u0164\u0165\x05\x12\n\x02\u0165\u0166\x07F\x02\x02\u0166" +
        "\u0168\x03\x02\x02\x02\u0167\u0163\x03\x02\x02\x02\u0167\u0168\x03\x02" +
        "\x02\x02\u0168\x11\x03\x02\x02\x02\u0169\u016B\x05\x14\v\x02\u016A\u0169" +
        "\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\x13\x03\x02\x02\x02" +
        "\u016C\u0170\x05\x16\f\x02\u016D\u016F\x05\x16\f\x02\u016E\u016D\x03\x02" +
        "\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170" +
        "\u0171\x03\x02\x02\x02\u0171\x15\x03\x02\x02\x02\u0172\u0170\x03\x02\x02" +
        "\x02\u0173\u0174\x05\x1C\x0F\x02\u0174\u0175\x078\x02\x02\u0175\u0176" +
        "\x05\x18\r\x02\u0176\x17\x03\x02\x02\x02\u0177\u0178\x07m\x02\x02\u0178" +
        "\u0179\x05\x1A\x0E\x02\u0179\x19\x03\x02\x02\x02\u017A\u017B\x03\x02\x02" +
        "\x02\u017B\x1B\x03\x02\x02\x02\u017C\u0181\x05\x1E\x10\x02\u017D\u017E" +
        "\x07\x1A\x02\x02\u017E\u0180\x05\x1E\x10\x02\u017F\u017D\x03\x02\x02\x02" +
        "\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03" +
        "\x02\x02\x02\u0182\x1D\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0184" +
        "\u0187\x07m\x02\x02\u0185\u0186\x07\x18\x02\x02\u0186\u0188\x07\x19\x02" +
        "\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\x1F" +
        "\x03\x02\x02\x02\u0189\u018D\x05\"\x12\x02\u018A\u018C\x05\"\x12\x02\u018B" +
        "\u018A\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02" +
        "\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E!\x03\x02\x02\x02\u018F\u018D" +
        "\x03\x02\x02\x02\u0190\u0195\x07m\x02\x02\u0191\u0196\x05\xAEX\x02\u0192" +
        "\u0196\x05\xACW\x02\u0193\u0196\x05F$\x02\u0194\u0196\x05P)\x02\u0195" +
        "\u0191\x03\x02\x02\x02\u0195\u0192\x03\x02\x02\x02\u0195\u0193\x03\x02" +
        "\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196#\x03\x02\x02\x02\u0197\u0198" +
        "\x07\'\x02\x02\u0198\u019D\x07\x18\x02\x02\u0199\u019A\x05&\x14\x02\u019A" +
        "\u019B\x05(\x15\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019E\x05*\x16\x02" +
        "\u019D\u0199\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03" +
        "\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x07\x19\x02\x02\u01A0" +
        "%\x03\x02\x02\x02\u01A1\u01A3\x07\x0E\x02\x02\u01A2\u01A4\x05\u0110\x89" +
        "\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\'\x03" +
        "\x02\x02\x02\u01A5\u01A6\x07\x1A\x02\x02\u01A6\u01A8\x07\x0E\x02\x02\u01A7" +
        "\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8)\x03\x02\x02" +
        "\x02\u01A9\u01BA\x05,\x17\x02\u01AA\u01BB\x052\x1A\x02\u01AB\u01AD\x07" +
        "\x1A\x02\x02\u01AC\u01AE\x052\x1A\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD" +
        "\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x05&\x14" +
        "\x02\u01B0\u01B8\x058\x1D\x02\u01B1\u01B9\x05(\x15\x02\u01B2\u01B3\x07" +
        "f\x02\x02\u01B3\u01B4\x07\x1A\x02\x02\u01B4\u01B6\x05,\x17\x02\u01B5\u01B7" +
        "\x052\x1A\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02" +
        "\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01B1\x03\x02\x02\x02\u01B8\u01B2";
    ASN_3gppParser._serializedATNSegment1 = "\x03\x02\x02\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01AA\x03\x02\x02\x02" +
        "\u01BA\u01AB\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01C8\x03" +
        "\x02\x02\x02\u01BC\u01BD\x05&\x14\x02\u01BD\u01C5\x058\x1D\x02\u01BE\u01C6" +
        "\x05(\x15\x02\u01BF\u01C0\x07f\x02\x02\u01C0\u01C1\x07\x1A\x02\x02\u01C1" +
        "\u01C3\x05,\x17\x02\u01C2\u01C4\x052\x1A\x02\u01C3\u01C2\x03\x02\x02\x02" +
        "\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01BE\x03" +
        "\x02\x02\x02\u01C5\u01BF\x03\x02\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7" +
        "\u01A9\x03\x02\x02\x02\u01C7\u01BC\x03\x02\x02\x02\u01C8+\x03\x02\x02" +
        "\x02\u01C9\u01CA\x05.\x18\x02\u01CA-\x03\x02\x02\x02\u01CB\u01D3\x050" +
        "\x19\x02\u01CC\u01CE\x07\x1A\x02\x02\u01CD\u01CF\x052\x1A\x02\u01CE\u01CD" +
        "\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02" +
        "\u01D0\u01D2\x050\x19\x02\u01D1\u01CC\x03\x02\x02\x02\u01D2\u01D5\x03" +
        "\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
        "/\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01DA\x05\xF8}\x02" +
        "\u01D7\u01DB\x07(\x02\x02\u01D8\u01D9\x07)\x02\x02\u01D9\u01DB\x05\xD6" +
        "l\x02\u01DA\u01D7\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB" +
        "\x03\x02\x02\x02\u01DB\u01E0\x03\x02\x02\x02\u01DC\u01DD\x07*\x02\x02" +
        "\u01DD\u01DE\x07+\x02\x02\u01DE\u01E0\x05\xB0Y\x02\u01DF\u01D6\x03\x02" +
        "\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01E01\x03\x02\x02\x02\u01E1\u01E5" +
        "\x054\x1B\x02\u01E2\u01E5\x056\x1C\x02\u01E3\u01E5\x07\x05\x02\x02\u01E4" +
        "\u01E1\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E3\x03\x02" +
        "\x02\x02\u01E53\x03\x02\x02\x02\u01E6\u01E7\x07\x03\x02\x02\u01E7\u01E8" +
        "\x07m\x02\x02\u01E85\x03\x02\x02\x02\u01E9\u01EA\x07\x04\x02\x02\u01EA" +
        "\u01EB\x07m\x02\x02\u01EB7\x03\x02\x02\x02\u01EC\u01ED\x07\x1A\x02\x02" +
        "\u01ED\u01EF\x05:\x1E\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03" +
        "\x02\x02\x02\u01EF9\x03\x02\x02\x02\u01F0\u01F5\x05<\x1F\x02\u01F1\u01F2" +
        "\x07\x1A\x02\x02\u01F2\u01F4\x05<\x1F\x02\u01F3\u01F1\x03\x02\x02\x02" +
        "\u01F4\u01F7\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03" +
        "\x02\x02\x02\u01F6;\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8" +
        "\u01FB\x050\x19\x02\u01F9\u01FB\x05> \x02\u01FA\u01F8\x03\x02\x02\x02" +
        "\u01FA\u01F9\x03\x02\x02\x02\u01FB=\x03\x02\x02\x02\u01FC\u01FD\x07R\x02" +
        "\x02\u01FD\u01FE\x05@!\x02\u01FE\u0200\x05.\x18\x02\u01FF\u0201\x052\x1A" +
        "\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202" +
        "\x03\x02\x02\x02\u0202\u0203\x07S\x02\x02\u0203?\x03\x02\x02\x02\u0204" +
        "\u0205\x07g\x02\x02\u0205\u0207\x07T\x02\x02\u0206\u0204\x03\x02\x02\x02" +
        "\u0206\u0207\x03\x02\x02\x02\u0207A\x03\x02\x02\x02\u0208\u0210\x07\'" +
        "\x02\x02\u0209\u020C\x07\x1B\x02\x02\u020A\u020D\x05\xBE`\x02\u020B\u020D" +
        "\x05D#\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D" +
        "\u020E\x03\x02\x02\x02\u020E\u020F\x07\x1C\x02\x02\u020F\u0211\x03\x02" +
        "\x02\x02\u0210\u0209\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211" +
        "\u0212\x03\x02\x02\x02\u0212\u0215\x07+\x02\x02\u0213\u0216\x05\xB0Y\x02" +
        "\u0214\u0216\x05\xF8}\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0214\x03" +
        "\x02\x02\x02\u0216C\x03\x02\x02\x02\u0217\u0218\x077\x02\x02\u0218\u0219" +
        "\x05\xBE`\x02\u0219E\x03\x02\x02\x02\u021A\u021B\x05H%\x02\u021B\u021F" +
        "\x07\b\x02\x02\u021C\u0220\x05\xB0Y\x02\u021D\u0220\x05\xD6l\x02\u021E" +
        "\u0220\x05\x86D\x02\u021F\u021C\x03\x02\x02\x02\u021F\u021D\x03\x02\x02" +
        "\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0229\x03\x02\x02\x02\u0221\u0222" +
        "\x05T+\x02\u0222\u0226\x07\b\x02\x02\u0223\u0227\x05z>\x02\u0224\u0227" +
        "\x05R*\x02\u0225\u0227\x05\x80A\x02\u0226\u0223\x03\x02\x02\x02\u0226" +
        "\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227\u0229\x03\x02" +
        "\x02\x02\u0228\u021A\x03\x02\x02\x02\u0228\u0221\x03\x02\x02\x02\u0229" +
        "G\x03\x02\x02\x02\u022A\u022B\x07\x18\x02\x02\u022B\u0230\x05J&\x02\u022C" +
        "\u022D\x07\x1A\x02\x02\u022D\u022F\x05J&\x02\u022E\u022C\x03\x02\x02\x02" +
        "\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230\u0231\x03" +
        "\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0233" +
        "\u0234\x07\x19\x02\x02\u0234I\x03\x02\x02\x02\u0235\u0236\x05L\'\x02\u0236" +
        "\u0237\x07T\x02\x02\u0237\u0239\x03\x02\x02\x02\u0238\u0235\x03\x02\x02" +
        "\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B" +
        "\x07m\x02\x02\u023BK\x03\x02\x02\x02\u023C\u023F\x05N(\x02\u023D\u023F" +
        "\x07m\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023D\x03\x02\x02\x02" +
        "\u023FM\x03\x02\x02\x02\u0240\u0243\x05\xB0Y\x02\u0241\u0243\x05T+\x02" +
        "\u0242\u0240\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243O\x03\x02" +
        "\x02\x02\u0244\u0245\x07\b\x02\x02\u0245\u0246\x05R*\x02\u0246Q\x03\x02" +
        "\x02\x02\u0247\u024A\x05T+\x02\u0248\u024A\x05Z.\x02\u0249\u0247\x03\x02" +
        "\x02\x02\u0249\u0248\x03\x02\x02\x02\u024AS\x03\x02\x02\x02\u024B\u024C" +
        "\x07m\x02\x02\u024C\u024E\x07\f\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D" +
        "\u024E\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0253\x07m\x02" +
        "\x02\u0250\u0253\x07>\x02\x02\u0251\u0253\x07?\x02\x02\u0252\u024D\x03" +
        "\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0251\x03\x02\x02\x02\u0253" +
        "U\x03\x02\x02\x02\u0254\u0255\t\x03\x02\x02\u0255W\x03\x02\x02\x02\u0256" +
        "\u0257\x07m\x02\x02\u0257\u0258\x07\f\x02\x02\u0258\u0259\x07m\x02\x02" +
        "\u0259Y\x03\x02\x02\x02\u025A\u025B\x07@\x02\x02\u025B\u025C\x07\x18\x02" +
        "\x02\u025C\u0261\x05j6\x02\u025D\u025E\x07\x1A\x02\x02\u025E\u0260\x05" +
        "j6\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0263\x03\x02\x02\x02\u0261\u025F" +
        "\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0264\x03\x02\x02\x02" +
        "\u0263\u0261\x03\x02\x02\x02\u0264\u0266\x07\x19\x02\x02\u0265\u0267\x05" +
        "\\/\x02\u0266\u0265\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267" +
        "[\x03\x02\x02\x02\u0268\u0269\x079\x02\x02\u0269\u026A\x07B\x02\x02\u026A" +
        "\u026B\x05^0\x02\u026B]\x03\x02\x02\x02\u026C\u026E\x07\x18\x02\x02\u026D" +
        "\u026F\x05`1\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02" +
        "\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x03" +
        "\x02\x02\x02\u0272\u0273\x07\x19\x02\x02\u0273_\x03\x02\x02\x02\u0274" +
        "\u0277\x05d3\x02\u0275\u0277\x05b2\x02\u0276\u0274\x03\x02\x02\x02\u0276" +
        "\u0275\x03\x02\x02\x02\u0277a\x03\x02\x02\x02\u0278\u027A\x07C\x02\x02" +
        "\u0279\u027B\x05`1\x02\u027A\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02" +
        "\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
        "\u027E\x03\x02\x02\x02\u027E\u027F\x07D\x02\x02\u027Fc\x03\x02\x02\x02" +
        "\u0280\u0283\x05f4\x02\u0281\u0283\x05h5\x02\u0282\u0280\x03\x02\x02\x02" +
        "\u0282\u0281\x03\x02\x02\x02\u0283e\x03\x02\x02\x02\u0284\u0285\t\x04" +
        "\x02\x02\u0285g\x03\x02\x02\x02\u0286\u0287\x07\x10\x02\x02\u0287\u0288" +
        "\x07m\x02\x02\u0288i\x03\x02\x02\x02\u0289\u028A\x07\x10\x02\x02\u028A" +
        "\u02AC\x07m\x02\x02\u028B\u028D\x05n8\x02\u028C\u028B\x03\x02\x02\x02" +
        "\u028C\u028D\x03\x02\x02\x02\u028D\u02AD\x03\x02\x02\x02\u028E\u0298\x05" +
        "\xB0Y\x02\u028F\u0291\x05x=\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291" +
        "\x03\x02\x02\x02\u0291\u0299\x03\x02\x02\x02\u0292\u0294\x07A\x02\x02" +
        "\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0296\x03" +
        "\x02\x02\x02\u0295\u0297\x05r:\x02\u0296\u0295\x03\x02\x02\x02\u0296\u0297" +
        "\x03\x02\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0290\x03\x02\x02\x02" +
        "\u0298\u0293\x03\x02\x02\x02\u0299\u02AD\x03\x02\x02\x02\u029A\u02A1\x05" +
        "\x84C\x02\u029B\u02A2\x07(\x02\x02\u029C\u029F\x07)\x02\x02\u029D\u02A0" +
        "\x05\x86D\x02\u029E\u02A0\x05\xD6l\x02\u029F\u029D\x03\x02\x02\x02\u029F" +
        "\u029E\x03\x02\x02\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1\u029B\x03\x02" +
        "\x02\x02\u02A1\u029C\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
        "\u02AD\x03\x02\x02\x02\u02A3\u02AA\x05T+\x02\u02A4\u02AB\x07(\x02\x02" +
        "\u02A5\u02A8\x07)\x02\x02\u02A6\u02A9\x05\x80A\x02\u02A7\u02A9\x05z>\x02" +
        "\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AB\x03" +
        "\x02\x02\x02\u02AA\u02A4\x03\x02\x02\x02\u02AA\u02A5\x03\x02\x02\x02\u02AA" +
        "\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u028C\x03\x02" +
        "\x02\x02\u02AC\u028E\x03\x02\x02\x02\u02AC\u029A\x03\x02\x02\x02\u02AC" +
        "\u02A3\x03\x02\x02\x02\u02ADk\x03\x02\x02\x02\u02AE\u02AF\x07\x10\x02" +
        "\x02\u02AF\u02B1\x07m\x02\x02\u02B0\u02B2\x05n8\x02\u02B1\u02B0\x03\x02" +
        "\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2m\x03\x02\x02\x02\u02B3\u02B7" +
        "\x07(\x02\x02\u02B4\u02B5\x07)\x02\x02\u02B5\u02B7\x05\xB0Y\x02\u02B6" +
        "\u02B3\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7o\x03\x02\x02" +
        "\x02\u02B8\u02B9\x07\x10\x02\x02\u02B9\u02BA\x07m\x02\x02\u02BA\u02BC" +
        "\x05\xB0Y\x02\u02BB\u02BD\x07A\x02\x02\u02BC\u02BB\x03\x02\x02\x02\u02BC" +
        "\u02BD\x03\x02\x02\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02C0\x05r:\x02" +
        "\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0q\x03\x02" +
        "\x02\x02\u02C1\u02C5\x07(\x02\x02\u02C2\u02C3\x07)\x02\x02\u02C3\u02C5" +
        "\x05\xD6l\x02\u02C4\u02C1\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02" +
        "\u02C5s\x03\x02\x02\x02\u02C6\u02C7\x07\x10\x02\x02\u02C7\u02C8\x07m\x02" +
        "\x02\u02C8\u02CA\x05\x84C\x02\u02C9\u02CB\x05r:\x02\u02CA\u02C9\x03\x02" +
        "\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CBu\x03\x02\x02\x02\u02CC\u02CD" +
        "\x07\x10\x02\x02\u02CD\u02CE\x07m\x02\x02\u02CE\u02D0\x05\xB0Y\x02\u02CF" +
        "\u02D1\x05x=\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02" +
        "\u02D1w\x03\x02\x02\x02\u02D2\u02D6\x07(\x02\x02\u02D3\u02D4\x07)\x02" +
        "\x02\u02D4\u02D6\x05\x86D\x02\u02D5\u02D2\x03\x02\x02\x02\u02D5\u02D3" +
        "\x03\x02\x02\x02\u02D6y\x03\x02\x02\x02\u02D7\u02DA\x05~@\x02\u02D8\u02DA" +
        "\x05|?\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA" +
        "{\x03\x02\x02\x02\u02DB\u02DC\x05~@\x02\u02DC\u02DD\x05\u010C\x87\x02" +
        "\u02DD}\x03\x02\x02\x02\u02DE\u02E0\x07m\x02\x02\u02DF\u02E1\x07\f\x02" +
        "\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\x7F" +
        "\x03\x02\x02\x02\u02E2\u02E3\x07\x18\x02\x02\u02E3\u02E4\x05\x82B\x02" +
        "\u02E4\u02E5\x07\x19\x02\x02\u02E5\x81\x03\x02\x02\x02\u02E6\u02ED\x05" +
        "\x8AF\x02\u02E7\u02E8\x07\x1A\x02\x02\u02E8\u02EB\x07\x0E\x02\x02\u02E9" +
        "\u02EA\x07\x1A\x02\x02\u02EA\u02EC\x05\x8CG\x02\u02EB\u02E9\x03\x02\x02" +
        "\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02\x02\x02\u02ED\u02E7" +
        "\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F5\x03\x02\x02\x02" +
        "\u02EF\u02F2\x07\x0E\x02\x02\u02F0\u02F1\x07\x1A\x02\x02\u02F1\u02F3\x05" +
        "\x8CG\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3" +
        "\u02F5\x03\x02\x02\x02\u02F4\u02E6\x03\x02\x02\x02\u02F4\u02EF\x03\x02" +
        "\x02\x02\u02F5\x83\x03\x02\x02\x02\u02F6\u02F7\x07\x10\x02\x02\u02F7\u02F8" +
        "\x07m\x02\x02\u02F8\u02FE\x03\x02\x02\x02\u02F9\u02FA\x07\x10\x02\x02" +
        "\u02FA\u02FB\x07m\x02\x02\u02FB\u02FD\x07\f\x02\x02\u02FC\u02F9\x03\x02" +
        "\x02\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE" +
        "\u02FF\x03\x02\x02\x02\u02FF\x85\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02" +
        "\x02\u0301\u0302\x07\x18\x02\x02\u0302\u0303\x05\x88E\x02\u0303\u0304" +
        "\x07\x19\x02\x02\u0304\x87\x03\x02\x02\x02\u0305\u030C\x05\x8AF\x02\u0306" +
        "\u0307\x07\x1A\x02\x02\u0307\u030A\x07\x0E\x02\x02\u0308\u0309\x07\x1A" +
        "\x02\x02\u0309\u030B\x05\x8CG\x02\u030A\u0308\x03\x02\x02\x02\u030A\u030B" +
        "\x03\x02\x02\x02\u030B\u030D\x03\x02\x02\x02\u030C\u0306\x03\x02\x02\x02" +
        "\u030C\u030D\x03\x02\x02\x02\u030D\x89\x03\x02\x02\x02\u030E\u030F\x05" +
        "\x8EH\x02\u030F\x8B\x03\x02\x02\x02\u0310\u0311\x05\x8EH\x02\u0311\x8D" +
        "\x03\x02\x02\x02\u0312\u0316\x05\x90I\x02\u0313\u0314\x07.\x02\x02\u0314" +
        "\u0316\x05\x92J\x02\u0315\u0312\x03\x02\x02\x02\u0315\u0313\x03\x02\x02" +
        "\x02\u0316\x8F\x03\x02\x02\x02\u0317\u031D\x05\x94K\x02\u0318\u0319\x05" +
        "\x96L\x02\u0319\u031A\x05\x94K\x02\u031A\u031C\x03\x02\x02\x02\u031B\u0318" +
        "\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02" +
        "\u031D\u031E\x03\x02\x02\x02\u031E\x91\x03\x02\x02\x02\u031F\u031D\x03" +
        "\x02\x02\x02\u0320\u0321\x07/\x02\x02\u0321\u0322\x05\x9AN\x02\u0322\x93" +
        "\x03\x02\x02\x02\u0323\u0329\x05\x9EP\x02\u0324\u0325\x05\x98M\x02\u0325" +
        "\u0326\x05\x9EP\x02\u0326\u0328\x03\x02\x02\x02\u0327\u0324\x03\x02\x02" +
        "\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A" +
        "\x03\x02\x02\x02\u032A\x95\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02" +
        "\u032C\u032D\t\x05\x02\x02\u032D\x97\x03\x02\x02\x02\u032E\u032F\t\x06" +
        "\x02\x02\u032F\x99\x03\x02\x02\x02\u0330\u0331\x05\xA0Q\x02\u0331\x9B" +
        "\x03\x02\x02\x02\u0332\u0335\x05z>\x02\u0333\u0335\x05~@\x02\u0334\u0332" +
        "\x03\x02\x02\x02\u0334\u0333\x03\x02\x02\x02\u0335\x9D\x03\x02\x02\x02" +
        "\u0336\u0338\x05\x9AN\x02\u0337\u0339\x05\x92J\x02\u0338\u0337\x03\x02" +
        "\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\x9F\x03\x02\x02\x02\u033A\u033D" +
        "\x05\xD6l\x02\u033B\u033D\x075\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C" +
        "\u033B\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u0340\x07\x11" +
        "\x02\x02\u033F\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340" +
        "\u0341\x03\x02\x02\x02\u0341\u0343\x07\r\x02\x02\u0342\u0344\x07\x11\x02" +
        "\x02\u0343\u0342\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0347" +
        "\x03\x02\x02\x02\u0345\u0348\x05\xD6l\x02\u0346\u0348\x076\x02\x02\u0347" +
        "\u0345\x03\x02\x02\x02\u0347\u0346\x03\x02\x02\x02\u0348\u034E\x03\x02" +
        "\x02\x02\u0349\u034E\x05D#\x02\u034A\u034B\x07=\x02\x02\u034B\u034E\x05" +
        "\xD6l\x02\u034C\u034E\x05\xD6l\x02\u034D\u033C\x03\x02\x02\x02\u034D\u0349" +
        "\x03\x02\x02\x02\u034D\u034A\x03\x02\x02\x02\u034D\u034C\x03\x02\x02\x02" +
        "\u034E\xA1\x03\x02\x02\x02\u034F\u0350\x07\x10\x02\x02\u0350\u0351\x07" +
        "m\x02\x02\u0351\u0353\x05\x84C\x02\u0352\u0354\x05x=\x02\u0353\u0352\x03" +
        "\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\xA3\x03\x02\x02\x02\u0355" +
        "\u0356\x07\x10\x02\x02\u0356\u0357\x07m\x02\x02\u0357\u0359\x05T+\x02" +
        "\u0358\u035A\x05\xA6T\x02\u0359\u0358\x03\x02\x02\x02\u0359\u035A\x03" +
        "\x02\x02\x02\u035A\xA5\x03\x02\x02\x02\u035B\u035F\x07(\x02\x02\u035C" +
        "\u035D\x07)\x02\x02\u035D\u035F\x05z>\x02\u035E\u035B\x03\x02\x02\x02" +
        "\u035E\u035C\x03\x02\x02\x02\u035F\xA7\x03\x02\x02\x02\u0360\u0361\x07" +
        "\x10\x02\x02\u0361\u0362\x07m\x02\x02\u0362\u0364\x05T+\x02\u0363\u0365" +
        "\x05\xAAV\x02\u0364\u0363\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02" +
        "\u0365\xA9\x03\x02\x02\x02\u0366\u036A\x07(\x02\x02\u0367\u0368\x07)\x02" +
        "\x02\u0368\u036A\x05\x80A\x02\u0369\u0366\x03\x02\x02\x02\u0369\u0367" +
        "\x03\x02\x02\x02\u036A\xAB\x03\x02\x02\x02\u036B\u036C\x07\b\x02\x02\u036C" +
        "\u036D\x05\xB0Y\x02\u036D\xAD\x03\x02\x02\x02\u036E\u036F\x05\xB0Y\x02" +
        "\u036F\u0370\x07\b\x02\x02\u0370\u0371\x05\xD6l\x02\u0371\xAF\x03\x02" +
        "\x02\x02\u0372\u0375\x05\xB2Z\x02\u0373\u0375\x05\xBA^\x02\u0374\u0372" +
        "\x03\x02\x02\x02\u0374\u0373\x03\x02\x02\x02\u0375\u0379\x03\x02\x02\x02" +
        "\u0376\u0378\x05\xBE`\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B\x03" +
        "\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A" +
        "\xB1\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C\u038A\x05\u0124" +
        "\x93\x02\u037D\u038A\x05\u0126\x94\x02\u037E\u038A\x05\xE8u\x02\u037F" +
        "\u038A\x05\xFA~\x02\u0380\u038A\x05\u0116\x8C\x02\u0381\u038A\x05$\x13" +
        "\x02\u0382\u038A\x05B\"\x02\u0383\u038A\x05\xB6\\\x02\u0384\u038A\x05" +
        "\xB8]\x02\u0385\u038A\x05\u011A\x8E\x02\u0386\u038A\x05\xB4[\x02\u0387" +
        "\u038A\x07\t\x02\x02\u0388\u038A\x07&\x02\x02\u0389\u037C\x03\x02\x02" +
        "\x02\u0389\u037D\x03\x02\x02\x02\u0389\u037E\x03\x02\x02\x02\u0389\u037F" +
        "\x03\x02\x02\x02\u0389\u0380\x03\x02\x02\x02\u0389\u0381\x03\x02\x02\x02" +
        "\u0389\u0382\x03\x02\x02\x02\u0389\u0383\x03\x02\x02\x02\u0389\u0384\x03" +
        "\x02\x02\x02\u0389\u0385\x03\x02\x02\x02\u0389\u0386\x03\x02\x02\x02\u0389" +
        "\u0387\x03\x02\x02\x02\u0389\u0388\x03\x02\x02\x02\u038A\xB3\x03\x02\x02" +
        "\x02\u038B\u038C\x05T+\x02\u038C\u038D\x07\f\x02\x02\u038D\u038E\x05\x84" +
        "C\x02\u038E\xB5\x03\x02\x02\x02\u038F\u0390\x07,\x02\x02\u0390\u0395\x07" +
        "\x18\x02\x02\u0391\u0392\x05&\x14\x02\u0392\u0393\x05(\x15\x02\u0393\u0396" +
        "\x03\x02\x02\x02\u0394\u0396\x05*\x16\x02\u0395\u0391\x03\x02\x02\x02" +
        "\u0395\u0394\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u0397\x03" +
        "\x02\x02\x02\u0397\u0398\x07\x19\x02\x02\u0398\xB7\x03\x02\x02\x02\u0399" +
        "\u039C\x07,\x02\x02\u039A\u039D\x05\xBE`\x02\u039B\u039D\x05D#\x02\u039C" +
        "\u039A\x03\x02\x02\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02" +
        "\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A1\x07+\x02\x02\u039F\u03A2" +
        "\x05\xB0Y\x02\u03A0\u03A2\x05\xF8}\x02\u03A1\u039F\x03\x02\x02\x02\u03A1" +
        "\u03A0\x03\x02\x02\x02\u03A2\xB9\x03\x02\x02\x02\u03A3\u03A4\x05\xBC_" +
        "\x02\u03A4\xBB\x03\x02\x02\x02\u03A5\u03A8\x07m\x02\x02\u03A6\u03A7\x07" +
        "\f\x02\x02\u03A7\u03A9\x07m\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8" +
        "\u03A9\x03\x02\x02\x02\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03AC\x05\u010C" +
        "\x87\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC" +
        "\xBD\x03\x02\x02\x02\u03AD\u03AE\x07\x1B\x02\x02\u03AE\u03B0\x05\xC0a" +
        "\x02\u03AF\u03B1\x05\u0110\x89\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1" +
        "\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B3\x07\x1C\x02\x02" +
        "\u03B3\xBF\x03\x02\x02\x02\u03B4\u03B7\x05\xC4c\x02\u03B5\u03B7\x05\xD4" +
        "k\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B5\x03\x02\x02\x02\u03B7\xC1" +
        "\x03\x02\x02\x02\u03B8\u03B9\x07`\x02\x02\u03B9\u03BA\x07a\x02\x02\u03BA" +
        "\u03BB\x07\x18\x02\x02\u03BB\u03C0\x05\xC6d\x02\u03BC\u03BD\x07\x1A\x02" +
        "\x02\u03BD\u03BF\x05\xC6d\x02\u03BE\u03BC\x03\x02\x02\x02\u03BF\u03C2" +
        "\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02" +
        "\u03C1\u03C3\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3\u03C4\x07" +
        "\x19\x02\x02\u03C4\xC3\x03\x02\x02\x02\u03C5\u03C9\x05\xC2b\x02\u03C6" +
        "\u03C9\x05\xC8e\x02\u03C7\u03C9\x05\xCCg\x02\u03C8\u03C5\x03\x02\x02\x02" +
        "\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C7\x03\x02\x02\x02\u03C9\xC5\x03" +
        "\x02\x02\x02\u03CA\u03D0\x05N(\x02\u03CB\u03CC\x07T\x02\x02\u03CC\u03D1" +
        "\x05\xD6l\x02\u03CD\u03D1\x05\x86D\x02\u03CE\u03D1\x05z>\x02\u03CF\u03D1" +
        "\x05\x80A\x02\u03D0\u03CB\x03\x02\x02\x02\u03D0\u03CD\x03\x02\x02\x02" +
        "\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D0\u03D1\x03" +
        "\x02\x02\x02\u03D1\xC7\x03\x02\x02\x02\u03D2\u03D3\x05\u011C\x8F\x02\u03D3" +
        "\xC9\x03\x02\x02\x02\u03D4\u03D5\x05\x80A\x02\u03D5\xCB\x03\x02\x02\x02" +
        "\u03D6\u03D7\x07$\x02\x02\u03D7\u03E8\x05\xB0Y\x02\u03D8\u03D9\x07c\x02" +
        "\x02\u03D9\u03DA\x07a\x02\x02\u03DA\u03E8\x05\xD6l\x02\u03DB\u03DC\x07" +
        "$\x02\x02\u03DC\u03DD\x05\xB0Y\x02\u03DD\u03DE\x07c\x02\x02\u03DE\u03DF" +
        "\x07a\x02\x02\u03DF\u03E0\x05\xD6l\x02\u03E0\u03E8\x03\x02\x02\x02\u03E1" +
        "\u03E2\x079\x02\x02\u03E2\u03E3\x07*\x02\x02\u03E3\u03E4\x07\x18\x02\x02" +
        "\u03E4\u03E5\x05\xCEh\x02\u03E5\u03E6\x07\x19\x02\x02\u03E6\u03E8\x03" +
        "\x02\x02\x02\u03E7\u03D6\x03\x02\x02\x02\u03E7\u03D8\x03\x02\x02\x02\u03E7" +
        "\u03DB\x03\x02\x02\x02\u03E7\u03E1\x03\x02\x02\x02\u03E8\xCD\x03\x02\x02" +
        "\x02\u03E9\u03EB\x05\xD0i\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB" +
        "\x03\x02\x02\x02\u03EB\u03F2\x03\x02\x02\x02\u03EC\u03ED\x07\x1A\x02\x02" +
        "\u03ED\u03F0\x07\x0E\x02\x02\u03EE\u03EF\x07\x1A\x02\x02\u03EF\u03F1\x05" +
        "\xD0i\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1" +
        "\u03F3\x03\x02\x02\x02\u03F2\u03EC\x03\x02\x02\x02\u03F2\u03F3\x03\x02" +
        "\x02\x02\u03F3\u03FA\x03\x02\x02\x02\u03F4\u03F7\x07\x0E\x02\x02\u03F5" +
        "\u03F6\x07\x1A\x02\x02\u03F6\u03F8\x05\xD0i\x02\u03F7\u03F5\x03\x02\x02" +
        "\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FA\x03\x02\x02\x02\u03F9\u03EA" +
        "\x03\x02\x02\x02\u03F9\u03F4\x03\x02\x02\x02\u03FA\xCF\x03\x02\x02\x02" +
        "\u03FB\u0400\x05\xD2j\x02\u03FC\u03FD\x07\x1A\x02\x02\u03FD\u03FF\x05" +
        "\xD2j\x02\u03FE\u03FC\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400" +
        "\u03FE\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\xD1\x03\x02\x02" +
        "\x02\u0402\u0400\x03\x02\x02\x02\u0403\u0404\x07m\x02\x02\u0404\u0405" +
        "\t\x07\x02\x02\u0405\xD3\x03\x02\x02\x02\u0406\u0407\x05\x88E\x02\u0407" +
        "\xD5\x03\x02\x02\x02\u0408\u0409\x05\xD8m\x02\u0409\xD7\x03\x02\x02\x02" +
        "\u040A\u0412\x05\xE4s\x02\u040B\u0412\x05\xE0q\x02\u040C\u0412\x05\xE2" +
        "r\x02\u040D\u0412\x05\xDAn\x02\u040E\u0412\x05\u012C\x97\x02\u040F\u0412" +
        "\x07l\x02\x02\u0410\u0412\x07j\x02\x02\u0411\u040A\x03\x02\x02\x02\u0411" +
        "\u040B\x03\x02\x02\x02\u0411\u040C\x03\x02\x02\x02\u0411\u040D\x03\x02" +
        "\x02\x02\u0411\u040E\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411" +
        "\u0410\x03\x02\x02\x02\u0412\xD9\x03\x02\x02\x02\u0413\u0414\x07\x18\x02" +
        "\x02\u0414\u0415\x05\xDCo\x02\u0415\u0416\x07\x19\x02\x02\u0416\xDB\x03" +
        "\x02\x02\x02\u0417\u041B\x05\xDEp\x02\u0418\u041A\x05\xDEp\x02\u0419\u0418" +
        "\x03\x02\x02\x02\u041A\u041D\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02" +
        "\u041B\u041C\x03\x02\x02\x02\u041C\xDD\x03\x02\x02\x02\u041D\u041B\x03" +
        "\x02\x02\x02\u041E\u042A\x07g\x02\x02\u041F\u0426\x07m\x02\x02\u0420\u0423" +
        "\x07\x1B\x02\x02\u0421\u0424\x07g\x02\x02\u0422\u0424\x05\u0106\x84\x02" +
        "\u0423\u0421\x03\x02\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424\u0425\x03" +
        "\x02\x02\x02\u0425\u0427\x07\x1C\x02\x02\u0426\u0420\x03\x02\x02\x02\u0426" +
        "\u0427\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u042A\x05\u0106" +
        "\x84\x02\u0429\u041E\x03\x02\x02\x02\u0429\u041F\x03\x02\x02\x02\u0429" +
        "\u0428\x03\x02\x02\x02\u042A\xDF\x03\x02\x02\x02\u042B\u042E\x05\xE6t" +
        "\x02\u042C\u042E\x07m\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042C" +
        "\x03\x02\x02\x02\u042E\xE1\x03\x02\x02\x02\u042F\u0430\x07m\x02\x02\u0430" +
        "\u0431\x07T\x02\x02\u0431\u0432\x05\xD6l\x02\u0432\xE3\x03\x02\x02\x02" +
        "\u0433\u0434\x07m\x02\x02\u0434\xE5\x03\x02\x02\x02\u0435\u0437\x07\x1D" +
        "\x02\x02\u0436\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437" +
        "\u0438\x03\x02\x02\x02\u0438\u0439\x07g\x02\x02\u0439\xE7\x03\x02\x02" +
        "\x02\u043A\u043B\x07U\x02\x02\u043B\u043C\x07\x18\x02\x02\u043C\u043D" +
        "\x05\xEAv\x02\u043D\u043E\x07\x19\x02\x02\u043E\xE9\x03\x02\x02\x02\u043F" +
        "\u0445\x05\xF4{\x02\u0440\u0441\x07\x1A\x02\x02\u0441\u0442\x05&\x14\x02" +
        "\u0442\u0443\x05\xECw\x02\u0443\u0444\x05(\x15\x02\u0444\u0446\x03\x02" +
        "\x02\x02\u0445\u0440\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446" +
        "\xEB\x03\x02\x02\x02\u0447\u0448\x07\x1A\x02\x02\u0448\u044A\x05\xEEx" +
        "\x02\u0449\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\xED" +
        "\x03\x02\x02\x02\u044B\u0450\x05\xF0y\x02\u044C\u044D\x07\x1A\x02\x02" +
        "\u044D\u044F\x05\xF0y\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0452\x03" +
        "\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451" +
        "\xEF\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0453\u0456\x05\xF2z" +
        "\x02\u0454\u0456\x05\xF8}\x02\u0455\u0453\x03\x02\x02\x02\u0455\u0454" +
        "\x03\x02\x02\x02\u0456\xF1\x03\x02\x02\x02\u0457\u0458\x07R\x02\x02\u0458" +
        "\u0459\x05@!\x02\u0459\u045A\x05\xF6|\x02\u045A\u045B\x07S\x02\x02\u045B" +
        "\xF3\x03\x02\x02\x02\u045C\u045D\x05\xF6|\x02\u045D\xF5\x03\x02\x02\x02" +
        "\u045E\u0463\x05\xF8}\x02\u045F\u0460\x07\x1A\x02\x02\u0460\u0462\x05" +
        "\xF8}\x02\u0461\u045F\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463" +
        "\u0461\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\xF7\x03\x02\x02" +
        "\x02\u0465\u0463\x03\x02\x02\x02\u0466\u0467\x07m\x02\x02\u0467\u0468" +
        "\x05\xB0Y\x02\u0468\xF9\x03\x02\x02\x02\u0469\u046A\x07\x1E";
    ASN_3gppParser._serializedATNSegment2 = "\x02\x02\u046A\u046B\x07\x18\x02\x02\u046B\u046C\x05\xFC\x7F\x02\u046C" +
        "\u046D\x07\x19\x02\x02\u046D\xFB\x03\x02\x02\x02\u046E\u0478\x05\xFE\x80" +
        "\x02\u046F\u0470\x07\x1A\x02\x02\u0470\u0472\x07\x0E\x02\x02\u0471\u0473" +
        "\x05\u0110\x89\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473\x03\x02\x02" +
        "\x02\u0473\u0476\x03\x02\x02\x02\u0474\u0475\x07\x1A\x02\x02\u0475\u0477" +
        "\x05\u0114\x8B\x02\u0476\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02" +
        "\x02\u0477\u0479\x03\x02\x02\x02\u0478\u046F\x03\x02\x02\x02\u0478\u0479" +
        "\x03\x02\x02\x02\u0479\xFD\x03\x02\x02\x02\u047A\u047B\x05\u0100\x81\x02" +
        "\u047B\xFF\x03\x02\x02\x02\u047C\u0481\x05\u0102\x82\x02\u047D\u047E\x07" +
        "\x1A\x02\x02\u047E\u0480\x05\u0102\x82\x02\u047F\u047D\x03\x02\x02\x02" +
        "\u0480\u0483\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03" +
        "\x02\x02\x02\u0482\u0101\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0484" +
        "\u0488\x07m\x02\x02\u0485\u0488\x05\u0104\x83\x02\u0486\u0488\x05\xD6" +
        "l\x02\u0487\u0484\x03\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0487\u0486" +
        "\x03\x02\x02\x02\u0488\u0103\x03\x02\x02\x02\u0489\u048A\x07m\x02\x02" +
        "\u048A\u048D\x07\x1B\x02\x02\u048B\u048E\x05\xE6t\x02\u048C\u048E\x05" +
        "\u0106\x84\x02\u048D\u048B\x03\x02\x02\x02\u048D\u048C\x03\x02\x02\x02" +
        "\u048E\u048F\x03\x02\x02\x02\u048F\u0490\x07\x1C\x02\x02\u0490\u0105\x03" +
        "\x02\x02\x02\u0491\u0492\x05\u0108\x85\x02\u0492\u0107\x03\x02\x02\x02" +
        "\u0493\u0495\x05\u010A\x86\x02\u0494\u0496\x05\u010C\x87\x02\u0495\u0494" +
        "\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0109\x03\x02\x02\x02" +
        "\u0497\u049A\x07m\x02\x02\u0498\u0499\x07\f\x02\x02\u0499\u049B\x07m\x02" +
        "\x02\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u010B" +
        "\x03\x02\x02\x02\u049C\u049D\x07\x18\x02\x02\u049D\u04A2\x05\u010E\x88" +
        "\x02\u049E\u049F\x07\x1A\x02\x02\u049F\u04A1\x05\u010E\x88\x02\u04A0\u049E" +
        "\x03\x02\x02\x02\u04A1\u04A4\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02" +
        "\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A5\x03\x02\x02\x02\u04A4\u04A2\x03" +
        "\x02\x02\x02\u04A5\u04A6\x07\x19\x02\x02\u04A6\u010D\x03\x02\x02\x02\u04A7" +
        "\u04AA\x05\xB0Y\x02\u04A8\u04AA\x05\xD6l\x02\u04A9\u04A7\x03\x02\x02\x02" +
        "\u04A9\u04A8\x03\x02\x02\x02\u04AA\u010F\x03\x02\x02\x02\u04AB\u04AC\x07" +
        "-\x02\x02\u04AC\u04AD\x05\u0112\x8A\x02\u04AD\u0111\x03\x02\x02\x02\u04AE" +
        "\u04B5\x05\xE6t\x02\u04AF\u04B5\x05\u0106\x84\x02\u04B0\u04B1\x05\xB0" +
        "Y\x02\u04B1\u04B2\x07T\x02\x02\u04B2\u04B3\x05\xD6l\x02\u04B3\u04B5\x03" +
        "\x02\x02\x02\u04B4\u04AE\x03\x02\x02\x02\u04B4\u04AF\x03\x02\x02\x02\u04B4" +
        "\u04B0\x03\x02\x02\x02\u04B5\u0113\x03\x02\x02\x02\u04B6\u04B7\x05\u0100" +
        "\x81\x02\u04B7\u0115\x03\x02\x02\x02\u04B8\u04BD\x07\x17\x02\x02\u04B9" +
        "\u04BA\x07\x18\x02\x02\u04BA\u04BB\x05\u0118\x8D\x02\u04BB\u04BC\x07\x19" +
        "\x02\x02\u04BC\u04BE\x03\x02\x02\x02\u04BD\u04B9\x03\x02\x02\x02\u04BD" +
        "\u04BE\x03\x02\x02\x02\u04BE\u0117\x03\x02\x02\x02\u04BF\u04C4\x05\u0104" +
        "\x83\x02\u04C0\u04C1\x07\x1A\x02\x02\u04C1\u04C3\x05\u0104\x83\x02\u04C2" +
        "\u04C0\x03\x02\x02\x02\u04C3\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02" +
        "\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u0119\x03\x02\x02\x02\u04C6" +
        "\u04C4\x03\x02\x02\x02\u04C7\u04C8\x07\\\x02\x02\u04C8\u04C9\x07]\x02" +
        "\x02\u04C9\u011B\x03\x02\x02\x02\u04CA\u04CB\x07\x18\x02\x02\u04CB\u04CE" +
        "\x07m\x02\x02\u04CC\u04CD\x07\f\x02\x02\u04CD\u04CF\x07m\x02\x02\u04CE" +
        "\u04CC\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D0\x03\x02" +
        "\x02\x02\u04D0\u04DC\x07\x19\x02\x02\u04D1\u04D2\x07\x18\x02\x02\u04D2" +
        "\u04D7\x05\u011E\x90\x02\u04D3\u04D4\x07\x1A\x02\x02\u04D4\u04D6\x05\u011E" +
        "\x90\x02\u04D5\u04D3\x03\x02\x02\x02\u04D6\u04D9\x03\x02\x02\x02\u04D7" +
        "\u04D5\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DA\x03\x02" +
        "\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DB\x07\x19\x02\x02\u04DB" +
        "\u04DD\x03\x02\x02\x02\u04DC\u04D1\x03\x02\x02\x02\u04DC\u04DD\x03\x02" +
        "\x02\x02\u04DD\u011D\x03\x02\x02\x02\u04DE\u04E2\x07\x06\x02\x02\u04DF" +
        "\u04E0\x07b\x02\x02\u04E0\u04E2\x05\u0120\x91\x02\u04E1\u04DE\x03\x02" +
        "\x02\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3" +
        "\u04E4\x05\u0122\x92\x02\u04E4\u011F\x03\x02\x02\x02\u04E5\u04E6\x07\f" +
        "\x02\x02\u04E6\u04E8\x05\u0120\x91\x02\u04E7\u04E5\x03\x02\x02\x02\u04E7" +
        "\u04E8\x03\x02\x02\x02\u04E8\u0121\x03\x02\x02\x02\u04E9\u04EE\x07m\x02" +
        "\x02\u04EA\u04EB\x07\f\x02\x02\u04EB\u04ED\x07m\x02\x02\u04EC\u04EA\x03" +
        "\x02\x02\x02\u04ED\u04F0\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE" +
        "\u04EF\x03\x02\x02\x02\u04EF\u0123\x03\x02\x02\x02\u04F0\u04EE\x03\x02" +
        "\x02\x02\u04F1\u04F2\x07%\x02\x02\u04F2\u04F3\x07#\x02\x02\u04F3\u0125" +
        "\x03\x02\x02\x02\u04F4\u04F5\x07\"\x02\x02\u04F5\u04F6\x07#\x02\x02\u04F6" +
        "\u04FB\x03\x02\x02\x02\u04F7\u04F8\x07\x18\x02\x02\u04F8\u04F9\x05\u0128" +
        "\x95\x02\u04F9\u04FA\x07\x19\x02\x02\u04FA\u04FC\x03\x02\x02\x02\u04FB" +
        "\u04F7\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u0127\x03\x02" +
        "\x02\x02\u04FD\u0502\x05\u012A\x96\x02\u04FE\u04FF\x07\x1A\x02\x02\u04FF" +
        "\u0501\x05\u012A\x96\x02\u0500\u04FE\x03\x02\x02\x02\u0501\u0504\x03\x02" +
        "\x02\x02\u0502\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503" +
        "\u0129\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0505\u0506\x07m\x02" +
        "\x02\u0506\u0509\x07\x1B\x02\x02\u0507\u050A\x07g\x02\x02\u0508\u050A" +
        "\x05\u0106\x84\x02\u0509\u0507\x03\x02\x02\x02\u0509\u0508\x03\x02\x02" +
        "\x02\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x07\x1C\x02\x02\u050C\u012B" +
        "\x03\x02\x02\x02\u050D\u050E\t\b\x02\x02\u050E\u012D\x03\x02\x02\x02\x98" +
        "\u0131\u013B\u013F\u014B\u014F\u0155\u015E\u0161\u0167\u016A\u0170\u0181" +
        "\u0187\u018D\u0195\u019D\u01A3\u01A7\u01AD\u01B6\u01B8\u01BA\u01C3\u01C5" +
        "\u01C7\u01CE\u01D3\u01DA\u01DF\u01E4\u01EE\u01F5\u01FA\u0200\u0206\u020C" +
        "\u0210\u0215\u021F\u0226\u0228\u0230\u0238\u023E\u0242\u0249\u024D\u0252" +
        "\u0261\u0266\u0270\u0276\u027C\u0282\u028C\u0290\u0293\u0296\u0298\u029F" +
        "\u02A1\u02A8\u02AA\u02AC\u02B1\u02B6\u02BC\u02BF\u02C4\u02CA\u02D0\u02D5" +
        "\u02D9\u02E0\u02EB\u02ED\u02F2\u02F4\u02FE\u030A\u030C\u0315\u031D\u0329" +
        "\u0334\u0338\u033C\u033F\u0343\u0347\u034D\u0353\u0359\u035E\u0364\u0369" +
        "\u0374\u0379\u0389\u0395\u039C\u03A1\u03A8\u03AB\u03B0\u03B6\u03C0\u03C8" +
        "\u03D0\u03E7\u03EA\u03F0\u03F2\u03F7\u03F9\u0400\u0411\u041B\u0423\u0426" +
        "\u0429\u042D\u0436\u0445\u0449\u0450\u0455\u0463\u0472\u0476\u0478\u0481" +
        "\u0487\u048D\u0495\u049A\u04A2\u04A9\u04B4\u04BD\u04C4\u04CE\u04D7\u04DC" +
        "\u04E1\u04E7\u04EE\u04FB\u0502\u0509";
    ASN_3gppParser._serializedATN = Utils.join([
        ASN_3gppParser._serializedATNSegment0,
        ASN_3gppParser._serializedATNSegment1,
        ASN_3gppParser._serializedATNSegment2,
    ], "");
    return ASN_3gppParser;
}(Parser_1.Parser));
exports.ASN_3gppParser = ASN_3gppParser;
var ModulesContext = /** @class */ (function (_super) {
    __extends(ModulesContext, _super);
    function ModulesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModulesContext.prototype.moduleDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModuleDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ModuleDefinitionContext);
        }
    };
    Object.defineProperty(ModulesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_modules; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModulesContext.prototype.enterRule = function (listener) {
        if (listener.enterModules) {
            listener.enterModules(this);
        }
    };
    // @Override
    ModulesContext.prototype.exitRule = function (listener) {
        if (listener.exitModules) {
            listener.exitModules(this);
        }
    };
    // @Override
    ModulesContext.prototype.accept = function (visitor) {
        if (visitor.visitModules) {
            return visitor.visitModules(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModulesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModulesContext = ModulesContext;
var ModuleDefinitionContext = /** @class */ (function (_super) {
    __extends(ModuleDefinitionContext, _super);
    function ModuleDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleDefinitionContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    ModuleDefinitionContext.prototype.DEFINITIONS_LITERAL = function () { return this.getToken(ASN_3gppParser.DEFINITIONS_LITERAL, 0); };
    ModuleDefinitionContext.prototype.tagDefault = function () {
        return this.getRuleContext(0, TagDefaultContext);
    };
    ModuleDefinitionContext.prototype.extensionDefault = function () {
        return this.getRuleContext(0, ExtensionDefaultContext);
    };
    ModuleDefinitionContext.prototype.ASSIGN_OP = function () { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); };
    ModuleDefinitionContext.prototype.BEGIN_LITERAL = function () { return this.getToken(ASN_3gppParser.BEGIN_LITERAL, 0); };
    ModuleDefinitionContext.prototype.moduleBody = function () {
        return this.getRuleContext(0, ModuleBodyContext);
    };
    ModuleDefinitionContext.prototype.END_LITERAL = function () { return this.getToken(ASN_3gppParser.END_LITERAL, 0); };
    ModuleDefinitionContext.prototype.L_BRACE = function () { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); };
    ModuleDefinitionContext.prototype.R_BRACE = function () { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); };
    ModuleDefinitionContext.prototype.L_PARAN = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.L_PARAN);
        }
        else {
            return this.getToken(ASN_3gppParser.L_PARAN, i);
        }
    };
    ModuleDefinitionContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.NUMBER);
        }
        else {
            return this.getToken(ASN_3gppParser.NUMBER, i);
        }
    };
    ModuleDefinitionContext.prototype.R_PARAN = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.R_PARAN);
        }
        else {
            return this.getToken(ASN_3gppParser.R_PARAN, i);
        }
    };
    Object.defineProperty(ModuleDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_moduleDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleDefinition) {
            listener.enterModuleDefinition(this);
        }
    };
    // @Override
    ModuleDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleDefinition) {
            listener.exitModuleDefinition(this);
        }
    };
    // @Override
    ModuleDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleDefinition) {
            return visitor.visitModuleDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleDefinitionContext = ModuleDefinitionContext;
var TagDefaultContext = /** @class */ (function (_super) {
    __extends(TagDefaultContext, _super);
    function TagDefaultContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagDefaultContext.prototype.TAGS_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.TAGS_LITERAL, 0); };
    TagDefaultContext.prototype.EXPLICIT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.EXPLICIT_LITERAL, 0); };
    TagDefaultContext.prototype.IMPLICIT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.IMPLICIT_LITERAL, 0); };
    TagDefaultContext.prototype.AUTOMATIC_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.AUTOMATIC_LITERAL, 0); };
    Object.defineProperty(TagDefaultContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_tagDefault; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagDefaultContext.prototype.enterRule = function (listener) {
        if (listener.enterTagDefault) {
            listener.enterTagDefault(this);
        }
    };
    // @Override
    TagDefaultContext.prototype.exitRule = function (listener) {
        if (listener.exitTagDefault) {
            listener.exitTagDefault(this);
        }
    };
    // @Override
    TagDefaultContext.prototype.accept = function (visitor) {
        if (visitor.visitTagDefault) {
            return visitor.visitTagDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagDefaultContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagDefaultContext = TagDefaultContext;
var ExtensionDefaultContext = /** @class */ (function (_super) {
    __extends(ExtensionDefaultContext, _super);
    function ExtensionDefaultContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionDefaultContext.prototype.EXTENSIBILITY_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.EXTENSIBILITY_LITERAL, 0); };
    ExtensionDefaultContext.prototype.IMPLIED_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.IMPLIED_LITERAL, 0); };
    Object.defineProperty(ExtensionDefaultContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionDefault; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionDefaultContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionDefault) {
            listener.enterExtensionDefault(this);
        }
    };
    // @Override
    ExtensionDefaultContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionDefault) {
            listener.exitExtensionDefault(this);
        }
    };
    // @Override
    ExtensionDefaultContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionDefault) {
            return visitor.visitExtensionDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionDefaultContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionDefaultContext = ExtensionDefaultContext;
var ModuleBodyContext = /** @class */ (function (_super) {
    __extends(ModuleBodyContext, _super);
    function ModuleBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleBodyContext.prototype.exports = function () {
        return this.tryGetRuleContext(0, ExportsContext);
    };
    ModuleBodyContext.prototype.imports = function () {
        return this.tryGetRuleContext(0, ImportsContext);
    };
    ModuleBodyContext.prototype.assignmentList = function () {
        return this.tryGetRuleContext(0, AssignmentListContext);
    };
    Object.defineProperty(ModuleBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_moduleBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleBody) {
            listener.enterModuleBody(this);
        }
    };
    // @Override
    ModuleBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleBody) {
            listener.exitModuleBody(this);
        }
    };
    // @Override
    ModuleBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleBody) {
            return visitor.visitModuleBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleBodyContext = ModuleBodyContext;
var ExportsContext = /** @class */ (function (_super) {
    __extends(ExportsContext, _super);
    function ExportsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExportsContext.prototype.EXPORTS_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.EXPORTS_LITERAL, 0); };
    ExportsContext.prototype.symbolsExported = function () {
        return this.tryGetRuleContext(0, SymbolsExportedContext);
    };
    ExportsContext.prototype.SEMI_COLON = function () { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); };
    ExportsContext.prototype.ALL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); };
    Object.defineProperty(ExportsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_exports; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExportsContext.prototype.enterRule = function (listener) {
        if (listener.enterExports) {
            listener.enterExports(this);
        }
    };
    // @Override
    ExportsContext.prototype.exitRule = function (listener) {
        if (listener.exitExports) {
            listener.exitExports(this);
        }
    };
    // @Override
    ExportsContext.prototype.accept = function (visitor) {
        if (visitor.visitExports) {
            return visitor.visitExports(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExportsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExportsContext = ExportsContext;
var SymbolsExportedContext = /** @class */ (function (_super) {
    __extends(SymbolsExportedContext, _super);
    function SymbolsExportedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolsExportedContext.prototype.symbolList = function () {
        return this.tryGetRuleContext(0, SymbolListContext);
    };
    Object.defineProperty(SymbolsExportedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_symbolsExported; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolsExportedContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbolsExported) {
            listener.enterSymbolsExported(this);
        }
    };
    // @Override
    SymbolsExportedContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbolsExported) {
            listener.exitSymbolsExported(this);
        }
    };
    // @Override
    SymbolsExportedContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbolsExported) {
            return visitor.visitSymbolsExported(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolsExportedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolsExportedContext = SymbolsExportedContext;
var ImportsContext = /** @class */ (function (_super) {
    __extends(ImportsContext, _super);
    function ImportsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportsContext.prototype.IMPORTS_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.IMPORTS_LITERAL, 0); };
    ImportsContext.prototype.symbolsImported = function () {
        return this.tryGetRuleContext(0, SymbolsImportedContext);
    };
    ImportsContext.prototype.SEMI_COLON = function () { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); };
    Object.defineProperty(ImportsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_imports; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportsContext.prototype.enterRule = function (listener) {
        if (listener.enterImports) {
            listener.enterImports(this);
        }
    };
    // @Override
    ImportsContext.prototype.exitRule = function (listener) {
        if (listener.exitImports) {
            listener.exitImports(this);
        }
    };
    // @Override
    ImportsContext.prototype.accept = function (visitor) {
        if (visitor.visitImports) {
            return visitor.visitImports(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportsContext = ImportsContext;
var SymbolsImportedContext = /** @class */ (function (_super) {
    __extends(SymbolsImportedContext, _super);
    function SymbolsImportedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolsImportedContext.prototype.symbolsFromModuleList = function () {
        return this.tryGetRuleContext(0, SymbolsFromModuleListContext);
    };
    Object.defineProperty(SymbolsImportedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_symbolsImported; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolsImportedContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbolsImported) {
            listener.enterSymbolsImported(this);
        }
    };
    // @Override
    SymbolsImportedContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbolsImported) {
            listener.exitSymbolsImported(this);
        }
    };
    // @Override
    SymbolsImportedContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbolsImported) {
            return visitor.visitSymbolsImported(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolsImportedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolsImportedContext = SymbolsImportedContext;
var SymbolsFromModuleListContext = /** @class */ (function (_super) {
    __extends(SymbolsFromModuleListContext, _super);
    function SymbolsFromModuleListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolsFromModuleListContext.prototype.symbolsFromModule = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolsFromModuleContext);
        }
        else {
            return this.getRuleContext(i, SymbolsFromModuleContext);
        }
    };
    Object.defineProperty(SymbolsFromModuleListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_symbolsFromModuleList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolsFromModuleListContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbolsFromModuleList) {
            listener.enterSymbolsFromModuleList(this);
        }
    };
    // @Override
    SymbolsFromModuleListContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbolsFromModuleList) {
            listener.exitSymbolsFromModuleList(this);
        }
    };
    // @Override
    SymbolsFromModuleListContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbolsFromModuleList) {
            return visitor.visitSymbolsFromModuleList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolsFromModuleListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolsFromModuleListContext = SymbolsFromModuleListContext;
var SymbolsFromModuleContext = /** @class */ (function (_super) {
    __extends(SymbolsFromModuleContext, _super);
    function SymbolsFromModuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolsFromModuleContext.prototype.symbolList = function () {
        return this.getRuleContext(0, SymbolListContext);
    };
    SymbolsFromModuleContext.prototype.FROM_LITERAL = function () { return this.getToken(ASN_3gppParser.FROM_LITERAL, 0); };
    SymbolsFromModuleContext.prototype.globalModuleReference = function () {
        return this.getRuleContext(0, GlobalModuleReferenceContext);
    };
    Object.defineProperty(SymbolsFromModuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_symbolsFromModule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolsFromModuleContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbolsFromModule) {
            listener.enterSymbolsFromModule(this);
        }
    };
    // @Override
    SymbolsFromModuleContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbolsFromModule) {
            listener.exitSymbolsFromModule(this);
        }
    };
    // @Override
    SymbolsFromModuleContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbolsFromModule) {
            return visitor.visitSymbolsFromModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolsFromModuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolsFromModuleContext = SymbolsFromModuleContext;
var GlobalModuleReferenceContext = /** @class */ (function (_super) {
    __extends(GlobalModuleReferenceContext, _super);
    function GlobalModuleReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GlobalModuleReferenceContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    GlobalModuleReferenceContext.prototype.assignedIdentifier = function () {
        return this.getRuleContext(0, AssignedIdentifierContext);
    };
    Object.defineProperty(GlobalModuleReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_globalModuleReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GlobalModuleReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobalModuleReference) {
            listener.enterGlobalModuleReference(this);
        }
    };
    // @Override
    GlobalModuleReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobalModuleReference) {
            listener.exitGlobalModuleReference(this);
        }
    };
    // @Override
    GlobalModuleReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobalModuleReference) {
            return visitor.visitGlobalModuleReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GlobalModuleReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GlobalModuleReferenceContext = GlobalModuleReferenceContext;
var AssignedIdentifierContext = /** @class */ (function (_super) {
    __extends(AssignedIdentifierContext, _super);
    function AssignedIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AssignedIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_assignedIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignedIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignedIdentifier) {
            listener.enterAssignedIdentifier(this);
        }
    };
    // @Override
    AssignedIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignedIdentifier) {
            listener.exitAssignedIdentifier(this);
        }
    };
    // @Override
    AssignedIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignedIdentifier) {
            return visitor.visitAssignedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignedIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignedIdentifierContext = AssignedIdentifierContext;
var SymbolListContext = /** @class */ (function (_super) {
    __extends(SymbolListContext, _super);
    function SymbolListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolListContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    SymbolListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(SymbolListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_symbolList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolListContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbolList) {
            listener.enterSymbolList(this);
        }
    };
    // @Override
    SymbolListContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbolList) {
            listener.exitSymbolList(this);
        }
    };
    // @Override
    SymbolListContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbolList) {
            return visitor.visitSymbolList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolListContext = SymbolListContext;
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    SymbolContext.prototype.L_BRACE = function () { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); };
    SymbolContext.prototype.R_BRACE = function () { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_symbol; },
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
var AssignmentListContext = /** @class */ (function (_super) {
    __extends(AssignmentListContext, _super);
    function AssignmentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentListContext.prototype.assignment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentContext);
        }
        else {
            return this.getRuleContext(i, AssignmentContext);
        }
    };
    Object.defineProperty(AssignmentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_assignmentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentListContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentList) {
            listener.enterAssignmentList(this);
        }
    };
    // @Override
    AssignmentListContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentList) {
            listener.exitAssignmentList(this);
        }
    };
    // @Override
    AssignmentListContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentList) {
            return visitor.visitAssignmentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentListContext = AssignmentListContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); };
    AssignmentContext.prototype.valueAssignment = function () {
        return this.tryGetRuleContext(0, ValueAssignmentContext);
    };
    AssignmentContext.prototype.typeAssignment = function () {
        return this.tryGetRuleContext(0, TypeAssignmentContext);
    };
    AssignmentContext.prototype.parameterizedAssignment = function () {
        return this.tryGetRuleContext(0, ParameterizedAssignmentContext);
    };
    AssignmentContext.prototype.objectClassAssignment = function () {
        return this.tryGetRuleContext(0, ObjectClassAssignmentContext);
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_assignment; },
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
var SequenceTypeContext = /** @class */ (function (_super) {
    __extends(SequenceTypeContext, _super);
    function SequenceTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceTypeContext.prototype.SEQUENCE_LITERAL = function () { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); };
    SequenceTypeContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    SequenceTypeContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    SequenceTypeContext.prototype.extensionAndException = function () {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    };
    SequenceTypeContext.prototype.optionalExtensionMarker = function () {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    };
    SequenceTypeContext.prototype.componentTypeLists = function () {
        return this.tryGetRuleContext(0, ComponentTypeListsContext);
    };
    Object.defineProperty(SequenceTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_sequenceType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequenceTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSequenceType) {
            listener.enterSequenceType(this);
        }
    };
    // @Override
    SequenceTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSequenceType) {
            listener.exitSequenceType(this);
        }
    };
    // @Override
    SequenceTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSequenceType) {
            return visitor.visitSequenceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequenceTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequenceTypeContext = SequenceTypeContext;
var ExtensionAndExceptionContext = /** @class */ (function (_super) {
    __extends(ExtensionAndExceptionContext, _super);
    function ExtensionAndExceptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAndExceptionContext.prototype.ELLIPSIS = function () { return this.getToken(ASN_3gppParser.ELLIPSIS, 0); };
    ExtensionAndExceptionContext.prototype.exceptionSpec = function () {
        return this.tryGetRuleContext(0, ExceptionSpecContext);
    };
    Object.defineProperty(ExtensionAndExceptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAndException; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAndExceptionContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAndException) {
            listener.enterExtensionAndException(this);
        }
    };
    // @Override
    ExtensionAndExceptionContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAndException) {
            listener.exitExtensionAndException(this);
        }
    };
    // @Override
    ExtensionAndExceptionContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAndException) {
            return visitor.visitExtensionAndException(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAndExceptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAndExceptionContext = ExtensionAndExceptionContext;
var OptionalExtensionMarkerContext = /** @class */ (function (_super) {
    __extends(OptionalExtensionMarkerContext, _super);
    function OptionalExtensionMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalExtensionMarkerContext.prototype.COMMA = function () { return this.tryGetToken(ASN_3gppParser.COMMA, 0); };
    OptionalExtensionMarkerContext.prototype.ELLIPSIS = function () { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); };
    Object.defineProperty(OptionalExtensionMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_optionalExtensionMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalExtensionMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalExtensionMarker) {
            listener.enterOptionalExtensionMarker(this);
        }
    };
    // @Override
    OptionalExtensionMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalExtensionMarker) {
            listener.exitOptionalExtensionMarker(this);
        }
    };
    // @Override
    OptionalExtensionMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalExtensionMarker) {
            return visitor.visitOptionalExtensionMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalExtensionMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalExtensionMarkerContext = OptionalExtensionMarkerContext;
var ComponentTypeListsContext = /** @class */ (function (_super) {
    __extends(ComponentTypeListsContext, _super);
    function ComponentTypeListsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentTypeListsContext.prototype.rootComponentTypeList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RootComponentTypeListContext);
        }
        else {
            return this.getRuleContext(i, RootComponentTypeListContext);
        }
    };
    ComponentTypeListsContext.prototype.tag = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    };
    ComponentTypeListsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    ComponentTypeListsContext.prototype.extensionAndException = function () {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    };
    ComponentTypeListsContext.prototype.extensionAdditions = function () {
        return this.tryGetRuleContext(0, ExtensionAdditionsContext);
    };
    ComponentTypeListsContext.prototype.optionalExtensionMarker = function () {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    };
    ComponentTypeListsContext.prototype.EXTENSTIONENDMARKER = function () { return this.tryGetToken(ASN_3gppParser.EXTENSTIONENDMARKER, 0); };
    Object.defineProperty(ComponentTypeListsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentTypeLists; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentTypeListsContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentTypeLists) {
            listener.enterComponentTypeLists(this);
        }
    };
    // @Override
    ComponentTypeListsContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentTypeLists) {
            listener.exitComponentTypeLists(this);
        }
    };
    // @Override
    ComponentTypeListsContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentTypeLists) {
            return visitor.visitComponentTypeLists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentTypeListsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentTypeListsContext = ComponentTypeListsContext;
var RootComponentTypeListContext = /** @class */ (function (_super) {
    __extends(RootComponentTypeListContext, _super);
    function RootComponentTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootComponentTypeListContext.prototype.componentTypeList = function () {
        return this.getRuleContext(0, ComponentTypeListContext);
    };
    Object.defineProperty(RootComponentTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_rootComponentTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootComponentTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterRootComponentTypeList) {
            listener.enterRootComponentTypeList(this);
        }
    };
    // @Override
    RootComponentTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitRootComponentTypeList) {
            listener.exitRootComponentTypeList(this);
        }
    };
    // @Override
    RootComponentTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitRootComponentTypeList) {
            return visitor.visitRootComponentTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootComponentTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootComponentTypeListContext = RootComponentTypeListContext;
var ComponentTypeListContext = /** @class */ (function (_super) {
    __extends(ComponentTypeListContext, _super);
    function ComponentTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentTypeListContext.prototype.componentType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ComponentTypeContext);
        }
        else {
            return this.getRuleContext(i, ComponentTypeContext);
        }
    };
    ComponentTypeListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    ComponentTypeListContext.prototype.tag = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    };
    Object.defineProperty(ComponentTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentTypeList) {
            listener.enterComponentTypeList(this);
        }
    };
    // @Override
    ComponentTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentTypeList) {
            listener.exitComponentTypeList(this);
        }
    };
    // @Override
    ComponentTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentTypeList) {
            return visitor.visitComponentTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentTypeListContext = ComponentTypeListContext;
var ComponentTypeContext = /** @class */ (function (_super) {
    __extends(ComponentTypeContext, _super);
    function ComponentTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentTypeContext.prototype.namedType = function () {
        return this.tryGetRuleContext(0, NamedTypeContext);
    };
    ComponentTypeContext.prototype.OPTIONAL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); };
    ComponentTypeContext.prototype.DEFAULT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); };
    ComponentTypeContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    ComponentTypeContext.prototype.COMPONENTS_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); };
    ComponentTypeContext.prototype.OF_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OF_LITERAL, 0); };
    ComponentTypeContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    Object.defineProperty(ComponentTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentType) {
            listener.enterComponentType(this);
        }
    };
    // @Override
    ComponentTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentType) {
            listener.exitComponentType(this);
        }
    };
    // @Override
    ComponentTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentType) {
            return visitor.visitComponentType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentTypeContext = ComponentTypeContext;
var TagContext = /** @class */ (function (_super) {
    __extends(TagContext, _super);
    function TagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagContext.prototype.needTag = function () {
        return this.tryGetRuleContext(0, NeedTagContext);
    };
    TagContext.prototype.condTag = function () {
        return this.tryGetRuleContext(0, CondTagContext);
    };
    TagContext.prototype.INVALID_TAG = function () { return this.tryGetToken(ASN_3gppParser.INVALID_TAG, 0); };
    Object.defineProperty(TagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_tag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagContext.prototype.enterRule = function (listener) {
        if (listener.enterTag) {
            listener.enterTag(this);
        }
    };
    // @Override
    TagContext.prototype.exitRule = function (listener) {
        if (listener.exitTag) {
            listener.exitTag(this);
        }
    };
    // @Override
    TagContext.prototype.accept = function (visitor) {
        if (visitor.visitTag) {
            return visitor.visitTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagContext = TagContext;
var NeedTagContext = /** @class */ (function (_super) {
    __extends(NeedTagContext, _super);
    function NeedTagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NeedTagContext.prototype.NEED_LITERAL = function () { return this.getToken(ASN_3gppParser.NEED_LITERAL, 0); };
    NeedTagContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    Object.defineProperty(NeedTagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_needTag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NeedTagContext.prototype.enterRule = function (listener) {
        if (listener.enterNeedTag) {
            listener.enterNeedTag(this);
        }
    };
    // @Override
    NeedTagContext.prototype.exitRule = function (listener) {
        if (listener.exitNeedTag) {
            listener.exitNeedTag(this);
        }
    };
    // @Override
    NeedTagContext.prototype.accept = function (visitor) {
        if (visitor.visitNeedTag) {
            return visitor.visitNeedTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NeedTagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NeedTagContext = NeedTagContext;
var CondTagContext = /** @class */ (function (_super) {
    __extends(CondTagContext, _super);
    function CondTagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CondTagContext.prototype.COND_LITERAL = function () { return this.getToken(ASN_3gppParser.COND_LITERAL, 0); };
    CondTagContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    Object.defineProperty(CondTagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_condTag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CondTagContext.prototype.enterRule = function (listener) {
        if (listener.enterCondTag) {
            listener.enterCondTag(this);
        }
    };
    // @Override
    CondTagContext.prototype.exitRule = function (listener) {
        if (listener.exitCondTag) {
            listener.exitCondTag(this);
        }
    };
    // @Override
    CondTagContext.prototype.accept = function (visitor) {
        if (visitor.visitCondTag) {
            return visitor.visitCondTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CondTagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CondTagContext = CondTagContext;
var ExtensionAdditionsContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionsContext, _super);
    function ExtensionAdditionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionsContext.prototype.COMMA = function () { return this.tryGetToken(ASN_3gppParser.COMMA, 0); };
    ExtensionAdditionsContext.prototype.extensionAdditionList = function () {
        return this.tryGetRuleContext(0, ExtensionAdditionListContext);
    };
    Object.defineProperty(ExtensionAdditionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAdditions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionsContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAdditions) {
            listener.enterExtensionAdditions(this);
        }
    };
    // @Override
    ExtensionAdditionsContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAdditions) {
            listener.exitExtensionAdditions(this);
        }
    };
    // @Override
    ExtensionAdditionsContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAdditions) {
            return visitor.visitExtensionAdditions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionsContext = ExtensionAdditionsContext;
var ExtensionAdditionListContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionListContext, _super);
    function ExtensionAdditionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionListContext.prototype.extensionAddition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExtensionAdditionContext);
        }
        else {
            return this.getRuleContext(i, ExtensionAdditionContext);
        }
    };
    ExtensionAdditionListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(ExtensionAdditionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAdditionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionListContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAdditionList) {
            listener.enterExtensionAdditionList(this);
        }
    };
    // @Override
    ExtensionAdditionListContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAdditionList) {
            listener.exitExtensionAdditionList(this);
        }
    };
    // @Override
    ExtensionAdditionListContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAdditionList) {
            return visitor.visitExtensionAdditionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionListContext = ExtensionAdditionListContext;
var ExtensionAdditionContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionContext, _super);
    function ExtensionAdditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionContext.prototype.componentType = function () {
        return this.tryGetRuleContext(0, ComponentTypeContext);
    };
    ExtensionAdditionContext.prototype.extensionAdditionGroup = function () {
        return this.tryGetRuleContext(0, ExtensionAdditionGroupContext);
    };
    Object.defineProperty(ExtensionAdditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAddition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAddition) {
            listener.enterExtensionAddition(this);
        }
    };
    // @Override
    ExtensionAdditionContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAddition) {
            listener.exitExtensionAddition(this);
        }
    };
    // @Override
    ExtensionAdditionContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAddition) {
            return visitor.visitExtensionAddition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionContext = ExtensionAdditionContext;
var ExtensionAdditionGroupContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionGroupContext, _super);
    function ExtensionAdditionGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionGroupContext.prototype.DOUBLE_L_BRACKET = function () { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); };
    ExtensionAdditionGroupContext.prototype.versionNumber = function () {
        return this.getRuleContext(0, VersionNumberContext);
    };
    ExtensionAdditionGroupContext.prototype.componentTypeList = function () {
        return this.getRuleContext(0, ComponentTypeListContext);
    };
    ExtensionAdditionGroupContext.prototype.DOUBLE_R_BRACKET = function () { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); };
    ExtensionAdditionGroupContext.prototype.tag = function () {
        return this.tryGetRuleContext(0, TagContext);
    };
    Object.defineProperty(ExtensionAdditionGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAdditionGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAdditionGroup) {
            listener.enterExtensionAdditionGroup(this);
        }
    };
    // @Override
    ExtensionAdditionGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAdditionGroup) {
            listener.exitExtensionAdditionGroup(this);
        }
    };
    // @Override
    ExtensionAdditionGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAdditionGroup) {
            return visitor.visitExtensionAdditionGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionGroupContext = ExtensionAdditionGroupContext;
var VersionNumberContext = /** @class */ (function (_super) {
    __extends(VersionNumberContext, _super);
    function VersionNumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VersionNumberContext.prototype.NUMBER = function () { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); };
    VersionNumberContext.prototype.COLON = function () { return this.tryGetToken(ASN_3gppParser.COLON, 0); };
    Object.defineProperty(VersionNumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_versionNumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VersionNumberContext.prototype.enterRule = function (listener) {
        if (listener.enterVersionNumber) {
            listener.enterVersionNumber(this);
        }
    };
    // @Override
    VersionNumberContext.prototype.exitRule = function (listener) {
        if (listener.exitVersionNumber) {
            listener.exitVersionNumber(this);
        }
    };
    // @Override
    VersionNumberContext.prototype.accept = function (visitor) {
        if (visitor.visitVersionNumber) {
            return visitor.visitVersionNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VersionNumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VersionNumberContext = VersionNumberContext;
var SequenceOfTypeContext = /** @class */ (function (_super) {
    __extends(SequenceOfTypeContext, _super);
    function SequenceOfTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceOfTypeContext.prototype.SEQUENCE_LITERAL = function () { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); };
    SequenceOfTypeContext.prototype.OF_LITERAL = function () { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); };
    SequenceOfTypeContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    SequenceOfTypeContext.prototype.namedType = function () {
        return this.tryGetRuleContext(0, NamedTypeContext);
    };
    SequenceOfTypeContext.prototype.L_PARAN = function () { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); };
    SequenceOfTypeContext.prototype.R_PARAN = function () { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); };
    SequenceOfTypeContext.prototype.constraint = function () {
        return this.tryGetRuleContext(0, ConstraintContext);
    };
    SequenceOfTypeContext.prototype.sizeConstraint = function () {
        return this.tryGetRuleContext(0, SizeConstraintContext);
    };
    Object.defineProperty(SequenceOfTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_sequenceOfType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequenceOfTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSequenceOfType) {
            listener.enterSequenceOfType(this);
        }
    };
    // @Override
    SequenceOfTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSequenceOfType) {
            listener.exitSequenceOfType(this);
        }
    };
    // @Override
    SequenceOfTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSequenceOfType) {
            return visitor.visitSequenceOfType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequenceOfTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequenceOfTypeContext = SequenceOfTypeContext;
var SizeConstraintContext = /** @class */ (function (_super) {
    __extends(SizeConstraintContext, _super);
    function SizeConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SizeConstraintContext.prototype.SIZE_LITERAL = function () { return this.getToken(ASN_3gppParser.SIZE_LITERAL, 0); };
    SizeConstraintContext.prototype.constraint = function () {
        return this.getRuleContext(0, ConstraintContext);
    };
    Object.defineProperty(SizeConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_sizeConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SizeConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterSizeConstraint) {
            listener.enterSizeConstraint(this);
        }
    };
    // @Override
    SizeConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitSizeConstraint) {
            listener.exitSizeConstraint(this);
        }
    };
    // @Override
    SizeConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitSizeConstraint) {
            return visitor.visitSizeConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SizeConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SizeConstraintContext = SizeConstraintContext;
var ParameterizedAssignmentContext = /** @class */ (function (_super) {
    __extends(ParameterizedAssignmentContext, _super);
    function ParameterizedAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterizedAssignmentContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    ParameterizedAssignmentContext.prototype.ASSIGN_OP = function () { return this.tryGetToken(ASN_3gppParser.ASSIGN_OP, 0); };
    ParameterizedAssignmentContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    ParameterizedAssignmentContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    ParameterizedAssignmentContext.prototype.valueSet = function () {
        return this.tryGetRuleContext(0, ValueSetContext);
    };
    ParameterizedAssignmentContext.prototype.definedObjectClass = function () {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    };
    ParameterizedAssignmentContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    ParameterizedAssignmentContext.prototype.objectClass = function () {
        return this.tryGetRuleContext(0, ObjectClassContext);
    };
    ParameterizedAssignmentContext.prototype.objectSet = function () {
        return this.tryGetRuleContext(0, ObjectSetContext);
    };
    Object.defineProperty(ParameterizedAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_parameterizedAssignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterizedAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterizedAssignment) {
            listener.enterParameterizedAssignment(this);
        }
    };
    // @Override
    ParameterizedAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterizedAssignment) {
            listener.exitParameterizedAssignment(this);
        }
    };
    // @Override
    ParameterizedAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterizedAssignment) {
            return visitor.visitParameterizedAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterizedAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterizedAssignmentContext = ParameterizedAssignmentContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    ParameterListContext.prototype.parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    };
    ParameterListContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    ParameterListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_parameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterList) {
            listener.enterParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterList) {
            listener.exitParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterListContext = ParameterListContext;
var ParameterContext = /** @class */ (function (_super) {
    __extends(ParameterContext, _super);
    function ParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    ParameterContext.prototype.paramGovernor = function () {
        return this.tryGetRuleContext(0, ParamGovernorContext);
    };
    ParameterContext.prototype.COLON = function () { return this.tryGetToken(ASN_3gppParser.COLON, 0); };
    Object.defineProperty(ParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterContext = ParameterContext;
var ParamGovernorContext = /** @class */ (function (_super) {
    __extends(ParamGovernorContext, _super);
    function ParamGovernorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamGovernorContext.prototype.governor = function () {
        return this.tryGetRuleContext(0, GovernorContext);
    };
    ParamGovernorContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); };
    Object.defineProperty(ParamGovernorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_paramGovernor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamGovernorContext.prototype.enterRule = function (listener) {
        if (listener.enterParamGovernor) {
            listener.enterParamGovernor(this);
        }
    };
    // @Override
    ParamGovernorContext.prototype.exitRule = function (listener) {
        if (listener.exitParamGovernor) {
            listener.exitParamGovernor(this);
        }
    };
    // @Override
    ParamGovernorContext.prototype.accept = function (visitor) {
        if (visitor.visitParamGovernor) {
            return visitor.visitParamGovernor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamGovernorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamGovernorContext = ParamGovernorContext;
var GovernorContext = /** @class */ (function (_super) {
    __extends(GovernorContext, _super);
    function GovernorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GovernorContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    GovernorContext.prototype.definedObjectClass = function () {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    };
    Object.defineProperty(GovernorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_governor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GovernorContext.prototype.enterRule = function (listener) {
        if (listener.enterGovernor) {
            listener.enterGovernor(this);
        }
    };
    // @Override
    GovernorContext.prototype.exitRule = function (listener) {
        if (listener.exitGovernor) {
            listener.exitGovernor(this);
        }
    };
    // @Override
    GovernorContext.prototype.accept = function (visitor) {
        if (visitor.visitGovernor) {
            return visitor.visitGovernor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GovernorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GovernorContext = GovernorContext;
var ObjectClassAssignmentContext = /** @class */ (function (_super) {
    __extends(ObjectClassAssignmentContext, _super);
    function ObjectClassAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectClassAssignmentContext.prototype.ASSIGN_OP = function () { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); };
    ObjectClassAssignmentContext.prototype.objectClass = function () {
        return this.getRuleContext(0, ObjectClassContext);
    };
    Object.defineProperty(ObjectClassAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectClassAssignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectClassAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectClassAssignment) {
            listener.enterObjectClassAssignment(this);
        }
    };
    // @Override
    ObjectClassAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectClassAssignment) {
            listener.exitObjectClassAssignment(this);
        }
    };
    // @Override
    ObjectClassAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectClassAssignment) {
            return visitor.visitObjectClassAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectClassAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectClassAssignmentContext = ObjectClassAssignmentContext;
var ObjectClassContext = /** @class */ (function (_super) {
    __extends(ObjectClassContext, _super);
    function ObjectClassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectClassContext.prototype.definedObjectClass = function () {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    };
    ObjectClassContext.prototype.objectClassDefn = function () {
        return this.tryGetRuleContext(0, ObjectClassDefnContext);
    };
    Object.defineProperty(ObjectClassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectClass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectClassContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectClass) {
            listener.enterObjectClass(this);
        }
    };
    // @Override
    ObjectClassContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectClass) {
            listener.exitObjectClass(this);
        }
    };
    // @Override
    ObjectClassContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectClass) {
            return visitor.visitObjectClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectClassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectClassContext = ObjectClassContext;
var DefinedObjectClassContext = /** @class */ (function (_super) {
    __extends(DefinedObjectClassContext, _super);
    function DefinedObjectClassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinedObjectClassContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    DefinedObjectClassContext.prototype.DOT = function () { return this.tryGetToken(ASN_3gppParser.DOT, 0); };
    DefinedObjectClassContext.prototype.TYPE_IDENTIFIER_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); };
    DefinedObjectClassContext.prototype.ABSTRACT_SYNTAX_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); };
    Object.defineProperty(DefinedObjectClassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_definedObjectClass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinedObjectClassContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinedObjectClass) {
            listener.enterDefinedObjectClass(this);
        }
    };
    // @Override
    DefinedObjectClassContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinedObjectClass) {
            listener.exitDefinedObjectClass(this);
        }
    };
    // @Override
    DefinedObjectClassContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinedObjectClass) {
            return visitor.visitDefinedObjectClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinedObjectClassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinedObjectClassContext = DefinedObjectClassContext;
var UsefulObjectClassReferenceContext = /** @class */ (function (_super) {
    __extends(UsefulObjectClassReferenceContext, _super);
    function UsefulObjectClassReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsefulObjectClassReferenceContext.prototype.TYPE_IDENTIFIER_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); };
    UsefulObjectClassReferenceContext.prototype.ABSTRACT_SYNTAX_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); };
    Object.defineProperty(UsefulObjectClassReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_usefulObjectClassReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsefulObjectClassReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterUsefulObjectClassReference) {
            listener.enterUsefulObjectClassReference(this);
        }
    };
    // @Override
    UsefulObjectClassReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitUsefulObjectClassReference) {
            listener.exitUsefulObjectClassReference(this);
        }
    };
    // @Override
    UsefulObjectClassReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitUsefulObjectClassReference) {
            return visitor.visitUsefulObjectClassReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsefulObjectClassReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsefulObjectClassReferenceContext = UsefulObjectClassReferenceContext;
var ExternalObjectClassReferenceContext = /** @class */ (function (_super) {
    __extends(ExternalObjectClassReferenceContext, _super);
    function ExternalObjectClassReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExternalObjectClassReferenceContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    ExternalObjectClassReferenceContext.prototype.DOT = function () { return this.getToken(ASN_3gppParser.DOT, 0); };
    Object.defineProperty(ExternalObjectClassReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_externalObjectClassReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExternalObjectClassReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterExternalObjectClassReference) {
            listener.enterExternalObjectClassReference(this);
        }
    };
    // @Override
    ExternalObjectClassReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitExternalObjectClassReference) {
            listener.exitExternalObjectClassReference(this);
        }
    };
    // @Override
    ExternalObjectClassReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitExternalObjectClassReference) {
            return visitor.visitExternalObjectClassReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExternalObjectClassReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExternalObjectClassReferenceContext = ExternalObjectClassReferenceContext;
var ObjectClassDefnContext = /** @class */ (function (_super) {
    __extends(ObjectClassDefnContext, _super);
    function ObjectClassDefnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectClassDefnContext.prototype.CLASS_LITERAL = function () { return this.getToken(ASN_3gppParser.CLASS_LITERAL, 0); };
    ObjectClassDefnContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    ObjectClassDefnContext.prototype.fieldSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldSpecContext);
        }
        else {
            return this.getRuleContext(i, FieldSpecContext);
        }
    };
    ObjectClassDefnContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    ObjectClassDefnContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    ObjectClassDefnContext.prototype.withSyntaxSpec = function () {
        return this.tryGetRuleContext(0, WithSyntaxSpecContext);
    };
    Object.defineProperty(ObjectClassDefnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectClassDefn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectClassDefnContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectClassDefn) {
            listener.enterObjectClassDefn(this);
        }
    };
    // @Override
    ObjectClassDefnContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectClassDefn) {
            listener.exitObjectClassDefn(this);
        }
    };
    // @Override
    ObjectClassDefnContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectClassDefn) {
            return visitor.visitObjectClassDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectClassDefnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectClassDefnContext = ObjectClassDefnContext;
var WithSyntaxSpecContext = /** @class */ (function (_super) {
    __extends(WithSyntaxSpecContext, _super);
    function WithSyntaxSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithSyntaxSpecContext.prototype.WITH_LITERAL = function () { return this.getToken(ASN_3gppParser.WITH_LITERAL, 0); };
    WithSyntaxSpecContext.prototype.SYNTAX_LITERAL = function () { return this.getToken(ASN_3gppParser.SYNTAX_LITERAL, 0); };
    WithSyntaxSpecContext.prototype.syntaxList = function () {
        return this.getRuleContext(0, SyntaxListContext);
    };
    Object.defineProperty(WithSyntaxSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_withSyntaxSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithSyntaxSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterWithSyntaxSpec) {
            listener.enterWithSyntaxSpec(this);
        }
    };
    // @Override
    WithSyntaxSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitWithSyntaxSpec) {
            listener.exitWithSyntaxSpec(this);
        }
    };
    // @Override
    WithSyntaxSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitWithSyntaxSpec) {
            return visitor.visitWithSyntaxSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithSyntaxSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithSyntaxSpecContext = WithSyntaxSpecContext;
var SyntaxListContext = /** @class */ (function (_super) {
    __extends(SyntaxListContext, _super);
    function SyntaxListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxListContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    SyntaxListContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    SyntaxListContext.prototype.tokenOrGroupSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokenOrGroupSpecContext);
        }
        else {
            return this.getRuleContext(i, TokenOrGroupSpecContext);
        }
    };
    Object.defineProperty(SyntaxListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_syntaxList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxListContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxList) {
            listener.enterSyntaxList(this);
        }
    };
    // @Override
    SyntaxListContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxList) {
            listener.exitSyntaxList(this);
        }
    };
    // @Override
    SyntaxListContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxList) {
            return visitor.visitSyntaxList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxListContext = SyntaxListContext;
var TokenOrGroupSpecContext = /** @class */ (function (_super) {
    __extends(TokenOrGroupSpecContext, _super);
    function TokenOrGroupSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokenOrGroupSpecContext.prototype.requiredToken = function () {
        return this.tryGetRuleContext(0, RequiredTokenContext);
    };
    TokenOrGroupSpecContext.prototype.optionalGroup = function () {
        return this.tryGetRuleContext(0, OptionalGroupContext);
    };
    Object.defineProperty(TokenOrGroupSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_tokenOrGroupSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokenOrGroupSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTokenOrGroupSpec) {
            listener.enterTokenOrGroupSpec(this);
        }
    };
    // @Override
    TokenOrGroupSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTokenOrGroupSpec) {
            listener.exitTokenOrGroupSpec(this);
        }
    };
    // @Override
    TokenOrGroupSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTokenOrGroupSpec) {
            return visitor.visitTokenOrGroupSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokenOrGroupSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokenOrGroupSpecContext = TokenOrGroupSpecContext;
var OptionalGroupContext = /** @class */ (function (_super) {
    __extends(OptionalGroupContext, _super);
    function OptionalGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalGroupContext.prototype.L_BRACKET = function () { return this.getToken(ASN_3gppParser.L_BRACKET, 0); };
    OptionalGroupContext.prototype.R_BRACKET = function () { return this.getToken(ASN_3gppParser.R_BRACKET, 0); };
    OptionalGroupContext.prototype.tokenOrGroupSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokenOrGroupSpecContext);
        }
        else {
            return this.getRuleContext(i, TokenOrGroupSpecContext);
        }
    };
    Object.defineProperty(OptionalGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_optionalGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalGroup) {
            listener.enterOptionalGroup(this);
        }
    };
    // @Override
    OptionalGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalGroup) {
            listener.exitOptionalGroup(this);
        }
    };
    // @Override
    OptionalGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalGroup) {
            return visitor.visitOptionalGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalGroupContext = OptionalGroupContext;
var RequiredTokenContext = /** @class */ (function (_super) {
    __extends(RequiredTokenContext, _super);
    function RequiredTokenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RequiredTokenContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    RequiredTokenContext.prototype.primitiveFieldName = function () {
        return this.tryGetRuleContext(0, PrimitiveFieldNameContext);
    };
    Object.defineProperty(RequiredTokenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_requiredToken; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RequiredTokenContext.prototype.enterRule = function (listener) {
        if (listener.enterRequiredToken) {
            listener.enterRequiredToken(this);
        }
    };
    // @Override
    RequiredTokenContext.prototype.exitRule = function (listener) {
        if (listener.exitRequiredToken) {
            listener.exitRequiredToken(this);
        }
    };
    // @Override
    RequiredTokenContext.prototype.accept = function (visitor) {
        if (visitor.visitRequiredToken) {
            return visitor.visitRequiredToken(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RequiredTokenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RequiredTokenContext = RequiredTokenContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); };
    LiteralContext.prototype.COMMA = function () { return this.tryGetToken(ASN_3gppParser.COMMA, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_literal; },
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
var PrimitiveFieldNameContext = /** @class */ (function (_super) {
    __extends(PrimitiveFieldNameContext, _super);
    function PrimitiveFieldNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveFieldNameContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    PrimitiveFieldNameContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    Object.defineProperty(PrimitiveFieldNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_primitiveFieldName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimitiveFieldNameContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimitiveFieldName) {
            listener.enterPrimitiveFieldName(this);
        }
    };
    // @Override
    PrimitiveFieldNameContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimitiveFieldName) {
            listener.exitPrimitiveFieldName(this);
        }
    };
    // @Override
    PrimitiveFieldNameContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimitiveFieldName) {
            return visitor.visitPrimitiveFieldName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimitiveFieldNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimitiveFieldNameContext = PrimitiveFieldNameContext;
var FieldSpecContext = /** @class */ (function (_super) {
    __extends(FieldSpecContext, _super);
    function FieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    FieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    FieldSpecContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    FieldSpecContext.prototype.fieldName = function () {
        return this.tryGetRuleContext(0, FieldNameContext);
    };
    FieldSpecContext.prototype.definedObjectClass = function () {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    };
    FieldSpecContext.prototype.typeOptionalitySpec = function () {
        return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
    };
    FieldSpecContext.prototype.OPTIONAL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); };
    FieldSpecContext.prototype.valueSetOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
    };
    FieldSpecContext.prototype.UNIQUE_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); };
    FieldSpecContext.prototype.valueOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
    };
    FieldSpecContext.prototype.DEFAULT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); };
    FieldSpecContext.prototype.valueSet = function () {
        return this.tryGetRuleContext(0, ValueSetContext);
    };
    FieldSpecContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    FieldSpecContext.prototype.objectSet = function () {
        return this.tryGetRuleContext(0, ObjectSetContext);
    };
    FieldSpecContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    Object.defineProperty(FieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_fieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldSpec) {
            listener.enterFieldSpec(this);
        }
    };
    // @Override
    FieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldSpec) {
            listener.exitFieldSpec(this);
        }
    };
    // @Override
    FieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldSpec) {
            return visitor.visitFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldSpecContext = FieldSpecContext;
var TypeFieldSpecContext = /** @class */ (function (_super) {
    __extends(TypeFieldSpecContext, _super);
    function TypeFieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeFieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    TypeFieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    TypeFieldSpecContext.prototype.typeOptionalitySpec = function () {
        return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
    };
    Object.defineProperty(TypeFieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_typeFieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeFieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeFieldSpec) {
            listener.enterTypeFieldSpec(this);
        }
    };
    // @Override
    TypeFieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeFieldSpec) {
            listener.exitTypeFieldSpec(this);
        }
    };
    // @Override
    TypeFieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeFieldSpec) {
            return visitor.visitTypeFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeFieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeFieldSpecContext = TypeFieldSpecContext;
var TypeOptionalitySpecContext = /** @class */ (function (_super) {
    __extends(TypeOptionalitySpecContext, _super);
    function TypeOptionalitySpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeOptionalitySpecContext.prototype.OPTIONAL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); };
    TypeOptionalitySpecContext.prototype.DEFAULT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); };
    TypeOptionalitySpecContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    Object.defineProperty(TypeOptionalitySpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_typeOptionalitySpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeOptionalitySpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeOptionalitySpec) {
            listener.enterTypeOptionalitySpec(this);
        }
    };
    // @Override
    TypeOptionalitySpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeOptionalitySpec) {
            listener.exitTypeOptionalitySpec(this);
        }
    };
    // @Override
    TypeOptionalitySpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeOptionalitySpec) {
            return visitor.visitTypeOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeOptionalitySpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeOptionalitySpecContext = TypeOptionalitySpecContext;
var FixedTypeValueFieldSpecContext = /** @class */ (function (_super) {
    __extends(FixedTypeValueFieldSpecContext, _super);
    function FixedTypeValueFieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FixedTypeValueFieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    FixedTypeValueFieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    FixedTypeValueFieldSpecContext.prototype.asnType = function () {
        return this.getRuleContext(0, AsnTypeContext);
    };
    FixedTypeValueFieldSpecContext.prototype.UNIQUE_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); };
    FixedTypeValueFieldSpecContext.prototype.valueOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
    };
    Object.defineProperty(FixedTypeValueFieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_fixedTypeValueFieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FixedTypeValueFieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterFixedTypeValueFieldSpec) {
            listener.enterFixedTypeValueFieldSpec(this);
        }
    };
    // @Override
    FixedTypeValueFieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitFixedTypeValueFieldSpec) {
            listener.exitFixedTypeValueFieldSpec(this);
        }
    };
    // @Override
    FixedTypeValueFieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitFixedTypeValueFieldSpec) {
            return visitor.visitFixedTypeValueFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FixedTypeValueFieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FixedTypeValueFieldSpecContext = FixedTypeValueFieldSpecContext;
var ValueOptionalitySpecContext = /** @class */ (function (_super) {
    __extends(ValueOptionalitySpecContext, _super);
    function ValueOptionalitySpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueOptionalitySpecContext.prototype.OPTIONAL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); };
    ValueOptionalitySpecContext.prototype.DEFAULT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); };
    ValueOptionalitySpecContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(ValueOptionalitySpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_valueOptionalitySpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueOptionalitySpecContext.prototype.enterRule = function (listener) {
        if (listener.enterValueOptionalitySpec) {
            listener.enterValueOptionalitySpec(this);
        }
    };
    // @Override
    ValueOptionalitySpecContext.prototype.exitRule = function (listener) {
        if (listener.exitValueOptionalitySpec) {
            listener.exitValueOptionalitySpec(this);
        }
    };
    // @Override
    ValueOptionalitySpecContext.prototype.accept = function (visitor) {
        if (visitor.visitValueOptionalitySpec) {
            return visitor.visitValueOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueOptionalitySpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueOptionalitySpecContext = ValueOptionalitySpecContext;
var VariableTypeValueFieldSpecContext = /** @class */ (function (_super) {
    __extends(VariableTypeValueFieldSpecContext, _super);
    function VariableTypeValueFieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableTypeValueFieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    VariableTypeValueFieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    VariableTypeValueFieldSpecContext.prototype.fieldName = function () {
        return this.getRuleContext(0, FieldNameContext);
    };
    VariableTypeValueFieldSpecContext.prototype.valueOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
    };
    Object.defineProperty(VariableTypeValueFieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_variableTypeValueFieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableTypeValueFieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableTypeValueFieldSpec) {
            listener.enterVariableTypeValueFieldSpec(this);
        }
    };
    // @Override
    VariableTypeValueFieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableTypeValueFieldSpec) {
            listener.exitVariableTypeValueFieldSpec(this);
        }
    };
    // @Override
    VariableTypeValueFieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableTypeValueFieldSpec) {
            return visitor.visitVariableTypeValueFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableTypeValueFieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableTypeValueFieldSpecContext = VariableTypeValueFieldSpecContext;
var FixedTypeValueSetFieldSpecContext = /** @class */ (function (_super) {
    __extends(FixedTypeValueSetFieldSpecContext, _super);
    function FixedTypeValueSetFieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FixedTypeValueSetFieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    FixedTypeValueSetFieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    FixedTypeValueSetFieldSpecContext.prototype.asnType = function () {
        return this.getRuleContext(0, AsnTypeContext);
    };
    FixedTypeValueSetFieldSpecContext.prototype.valueSetOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
    };
    Object.defineProperty(FixedTypeValueSetFieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FixedTypeValueSetFieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterFixedTypeValueSetFieldSpec) {
            listener.enterFixedTypeValueSetFieldSpec(this);
        }
    };
    // @Override
    FixedTypeValueSetFieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitFixedTypeValueSetFieldSpec) {
            listener.exitFixedTypeValueSetFieldSpec(this);
        }
    };
    // @Override
    FixedTypeValueSetFieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitFixedTypeValueSetFieldSpec) {
            return visitor.visitFixedTypeValueSetFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FixedTypeValueSetFieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FixedTypeValueSetFieldSpecContext = FixedTypeValueSetFieldSpecContext;
var ValueSetOptionalitySpecContext = /** @class */ (function (_super) {
    __extends(ValueSetOptionalitySpecContext, _super);
    function ValueSetOptionalitySpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueSetOptionalitySpecContext.prototype.OPTIONAL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); };
    ValueSetOptionalitySpecContext.prototype.DEFAULT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); };
    ValueSetOptionalitySpecContext.prototype.valueSet = function () {
        return this.tryGetRuleContext(0, ValueSetContext);
    };
    Object.defineProperty(ValueSetOptionalitySpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_valueSetOptionalitySpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueSetOptionalitySpecContext.prototype.enterRule = function (listener) {
        if (listener.enterValueSetOptionalitySpec) {
            listener.enterValueSetOptionalitySpec(this);
        }
    };
    // @Override
    ValueSetOptionalitySpecContext.prototype.exitRule = function (listener) {
        if (listener.exitValueSetOptionalitySpec) {
            listener.exitValueSetOptionalitySpec(this);
        }
    };
    // @Override
    ValueSetOptionalitySpecContext.prototype.accept = function (visitor) {
        if (visitor.visitValueSetOptionalitySpec) {
            return visitor.visitValueSetOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueSetOptionalitySpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueSetOptionalitySpecContext = ValueSetOptionalitySpecContext;
var ObjectContext = /** @class */ (function (_super) {
    __extends(ObjectContext, _super);
    function ObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectContext.prototype.definedObject = function () {
        return this.tryGetRuleContext(0, DefinedObjectContext);
    };
    ObjectContext.prototype.parameterizedObject = function () {
        return this.tryGetRuleContext(0, ParameterizedObjectContext);
    };
    Object.defineProperty(ObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_object; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterObject) {
            listener.enterObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitObject) {
            listener.exitObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitObject) {
            return visitor.visitObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectContext = ObjectContext;
var ParameterizedObjectContext = /** @class */ (function (_super) {
    __extends(ParameterizedObjectContext, _super);
    function ParameterizedObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterizedObjectContext.prototype.definedObject = function () {
        return this.getRuleContext(0, DefinedObjectContext);
    };
    ParameterizedObjectContext.prototype.actualParameterList = function () {
        return this.getRuleContext(0, ActualParameterListContext);
    };
    Object.defineProperty(ParameterizedObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_parameterizedObject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterizedObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterizedObject) {
            listener.enterParameterizedObject(this);
        }
    };
    // @Override
    ParameterizedObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterizedObject) {
            listener.exitParameterizedObject(this);
        }
    };
    // @Override
    ParameterizedObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterizedObject) {
            return visitor.visitParameterizedObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterizedObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterizedObjectContext = ParameterizedObjectContext;
var DefinedObjectContext = /** @class */ (function (_super) {
    __extends(DefinedObjectContext, _super);
    function DefinedObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinedObjectContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    DefinedObjectContext.prototype.DOT = function () { return this.tryGetToken(ASN_3gppParser.DOT, 0); };
    Object.defineProperty(DefinedObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_definedObject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinedObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinedObject) {
            listener.enterDefinedObject(this);
        }
    };
    // @Override
    DefinedObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinedObject) {
            listener.exitDefinedObject(this);
        }
    };
    // @Override
    DefinedObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinedObject) {
            return visitor.visitDefinedObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinedObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinedObjectContext = DefinedObjectContext;
var ObjectSetContext = /** @class */ (function (_super) {
    __extends(ObjectSetContext, _super);
    function ObjectSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectSetContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    ObjectSetContext.prototype.objectSetSpec = function () {
        return this.getRuleContext(0, ObjectSetSpecContext);
    };
    ObjectSetContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(ObjectSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectSetContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectSet) {
            listener.enterObjectSet(this);
        }
    };
    // @Override
    ObjectSetContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectSet) {
            listener.exitObjectSet(this);
        }
    };
    // @Override
    ObjectSetContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectSet) {
            return visitor.visitObjectSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectSetContext = ObjectSetContext;
var ObjectSetSpecContext = /** @class */ (function (_super) {
    __extends(ObjectSetSpecContext, _super);
    function ObjectSetSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectSetSpecContext.prototype.rootElementSetSpec = function () {
        return this.tryGetRuleContext(0, RootElementSetSpecContext);
    };
    ObjectSetSpecContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    ObjectSetSpecContext.prototype.ELLIPSIS = function () { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); };
    ObjectSetSpecContext.prototype.additionalElementSetSpec = function () {
        return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
    };
    Object.defineProperty(ObjectSetSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectSetSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectSetSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectSetSpec) {
            listener.enterObjectSetSpec(this);
        }
    };
    // @Override
    ObjectSetSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectSetSpec) {
            listener.exitObjectSetSpec(this);
        }
    };
    // @Override
    ObjectSetSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectSetSpec) {
            return visitor.visitObjectSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectSetSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectSetSpecContext = ObjectSetSpecContext;
var FieldNameContext = /** @class */ (function (_super) {
    __extends(FieldNameContext, _super);
    function FieldNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldNameContext.prototype.AMPERSAND = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.AMPERSAND);
        }
        else {
            return this.getToken(ASN_3gppParser.AMPERSAND, i);
        }
    };
    FieldNameContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    FieldNameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.DOT);
        }
        else {
            return this.getToken(ASN_3gppParser.DOT, i);
        }
    };
    Object.defineProperty(FieldNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_fieldName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldName) {
            listener.enterFieldName(this);
        }
    };
    // @Override
    FieldNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldName) {
            listener.exitFieldName(this);
        }
    };
    // @Override
    FieldNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldName) {
            return visitor.visitFieldName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldNameContext = FieldNameContext;
var ValueSetContext = /** @class */ (function (_super) {
    __extends(ValueSetContext, _super);
    function ValueSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueSetContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    ValueSetContext.prototype.elementSetSpecs = function () {
        return this.getRuleContext(0, ElementSetSpecsContext);
    };
    ValueSetContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(ValueSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_valueSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueSetContext.prototype.enterRule = function (listener) {
        if (listener.enterValueSet) {
            listener.enterValueSet(this);
        }
    };
    // @Override
    ValueSetContext.prototype.exitRule = function (listener) {
        if (listener.exitValueSet) {
            listener.exitValueSet(this);
        }
    };
    // @Override
    ValueSetContext.prototype.accept = function (visitor) {
        if (visitor.visitValueSet) {
            return visitor.visitValueSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueSetContext = ValueSetContext;
var ElementSetSpecsContext = /** @class */ (function (_super) {
    __extends(ElementSetSpecsContext, _super);
    function ElementSetSpecsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementSetSpecsContext.prototype.rootElementSetSpec = function () {
        return this.getRuleContext(0, RootElementSetSpecContext);
    };
    ElementSetSpecsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    ElementSetSpecsContext.prototype.ELLIPSIS = function () { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); };
    ElementSetSpecsContext.prototype.additionalElementSetSpec = function () {
        return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
    };
    Object.defineProperty(ElementSetSpecsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_elementSetSpecs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementSetSpecsContext.prototype.enterRule = function (listener) {
        if (listener.enterElementSetSpecs) {
            listener.enterElementSetSpecs(this);
        }
    };
    // @Override
    ElementSetSpecsContext.prototype.exitRule = function (listener) {
        if (listener.exitElementSetSpecs) {
            listener.exitElementSetSpecs(this);
        }
    };
    // @Override
    ElementSetSpecsContext.prototype.accept = function (visitor) {
        if (visitor.visitElementSetSpecs) {
            return visitor.visitElementSetSpecs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementSetSpecsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementSetSpecsContext = ElementSetSpecsContext;
var RootElementSetSpecContext = /** @class */ (function (_super) {
    __extends(RootElementSetSpecContext, _super);
    function RootElementSetSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootElementSetSpecContext.prototype.elementSetSpec = function () {
        return this.getRuleContext(0, ElementSetSpecContext);
    };
    Object.defineProperty(RootElementSetSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_rootElementSetSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootElementSetSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterRootElementSetSpec) {
            listener.enterRootElementSetSpec(this);
        }
    };
    // @Override
    RootElementSetSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitRootElementSetSpec) {
            listener.exitRootElementSetSpec(this);
        }
    };
    // @Override
    RootElementSetSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitRootElementSetSpec) {
            return visitor.visitRootElementSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootElementSetSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootElementSetSpecContext = RootElementSetSpecContext;
var AdditionalElementSetSpecContext = /** @class */ (function (_super) {
    __extends(AdditionalElementSetSpecContext, _super);
    function AdditionalElementSetSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditionalElementSetSpecContext.prototype.elementSetSpec = function () {
        return this.getRuleContext(0, ElementSetSpecContext);
    };
    Object.defineProperty(AdditionalElementSetSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_additionalElementSetSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditionalElementSetSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditionalElementSetSpec) {
            listener.enterAdditionalElementSetSpec(this);
        }
    };
    // @Override
    AdditionalElementSetSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditionalElementSetSpec) {
            listener.exitAdditionalElementSetSpec(this);
        }
    };
    // @Override
    AdditionalElementSetSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditionalElementSetSpec) {
            return visitor.visitAdditionalElementSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditionalElementSetSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditionalElementSetSpecContext = AdditionalElementSetSpecContext;
var ElementSetSpecContext = /** @class */ (function (_super) {
    __extends(ElementSetSpecContext, _super);
    function ElementSetSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementSetSpecContext.prototype.unions = function () {
        return this.tryGetRuleContext(0, UnionsContext);
    };
    ElementSetSpecContext.prototype.ALL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); };
    ElementSetSpecContext.prototype.exclusions = function () {
        return this.tryGetRuleContext(0, ExclusionsContext);
    };
    Object.defineProperty(ElementSetSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_elementSetSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementSetSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterElementSetSpec) {
            listener.enterElementSetSpec(this);
        }
    };
    // @Override
    ElementSetSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitElementSetSpec) {
            listener.exitElementSetSpec(this);
        }
    };
    // @Override
    ElementSetSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitElementSetSpec) {
            return visitor.visitElementSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementSetSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementSetSpecContext = ElementSetSpecContext;
var UnionsContext = /** @class */ (function (_super) {
    __extends(UnionsContext, _super);
    function UnionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionsContext.prototype.intersections = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntersectionsContext);
        }
        else {
            return this.getRuleContext(i, IntersectionsContext);
        }
    };
    UnionsContext.prototype.unionMark = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnionMarkContext);
        }
        else {
            return this.getRuleContext(i, UnionMarkContext);
        }
    };
    Object.defineProperty(UnionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_unions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionsContext.prototype.enterRule = function (listener) {
        if (listener.enterUnions) {
            listener.enterUnions(this);
        }
    };
    // @Override
    UnionsContext.prototype.exitRule = function (listener) {
        if (listener.exitUnions) {
            listener.exitUnions(this);
        }
    };
    // @Override
    UnionsContext.prototype.accept = function (visitor) {
        if (visitor.visitUnions) {
            return visitor.visitUnions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionsContext = UnionsContext;
var ExclusionsContext = /** @class */ (function (_super) {
    __extends(ExclusionsContext, _super);
    function ExclusionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExclusionsContext.prototype.EXCEPT_LITERAL = function () { return this.getToken(ASN_3gppParser.EXCEPT_LITERAL, 0); };
    ExclusionsContext.prototype.elements = function () {
        return this.getRuleContext(0, ElementsContext);
    };
    Object.defineProperty(ExclusionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_exclusions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExclusionsContext.prototype.enterRule = function (listener) {
        if (listener.enterExclusions) {
            listener.enterExclusions(this);
        }
    };
    // @Override
    ExclusionsContext.prototype.exitRule = function (listener) {
        if (listener.exitExclusions) {
            listener.exitExclusions(this);
        }
    };
    // @Override
    ExclusionsContext.prototype.accept = function (visitor) {
        if (visitor.visitExclusions) {
            return visitor.visitExclusions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExclusionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExclusionsContext = ExclusionsContext;
var IntersectionsContext = /** @class */ (function (_super) {
    __extends(IntersectionsContext, _super);
    function IntersectionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntersectionsContext.prototype.intersectionElements = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntersectionElementsContext);
        }
        else {
            return this.getRuleContext(i, IntersectionElementsContext);
        }
    };
    IntersectionsContext.prototype.intersectionMark = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntersectionMarkContext);
        }
        else {
            return this.getRuleContext(i, IntersectionMarkContext);
        }
    };
    Object.defineProperty(IntersectionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_intersections; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntersectionsContext.prototype.enterRule = function (listener) {
        if (listener.enterIntersections) {
            listener.enterIntersections(this);
        }
    };
    // @Override
    IntersectionsContext.prototype.exitRule = function (listener) {
        if (listener.exitIntersections) {
            listener.exitIntersections(this);
        }
    };
    // @Override
    IntersectionsContext.prototype.accept = function (visitor) {
        if (visitor.visitIntersections) {
            return visitor.visitIntersections(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntersectionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntersectionsContext = IntersectionsContext;
var UnionMarkContext = /** @class */ (function (_super) {
    __extends(UnionMarkContext, _super);
    function UnionMarkContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionMarkContext.prototype.PIPE = function () { return this.tryGetToken(ASN_3gppParser.PIPE, 0); };
    UnionMarkContext.prototype.UNION_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.UNION_LITERAL, 0); };
    Object.defineProperty(UnionMarkContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_unionMark; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionMarkContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionMark) {
            listener.enterUnionMark(this);
        }
    };
    // @Override
    UnionMarkContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionMark) {
            listener.exitUnionMark(this);
        }
    };
    // @Override
    UnionMarkContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionMark) {
            return visitor.visitUnionMark(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionMarkContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionMarkContext = UnionMarkContext;
var IntersectionMarkContext = /** @class */ (function (_super) {
    __extends(IntersectionMarkContext, _super);
    function IntersectionMarkContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntersectionMarkContext.prototype.POWER = function () { return this.tryGetToken(ASN_3gppParser.POWER, 0); };
    IntersectionMarkContext.prototype.INTERSECTION_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.INTERSECTION_LITERAL, 0); };
    Object.defineProperty(IntersectionMarkContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_intersectionMark; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntersectionMarkContext.prototype.enterRule = function (listener) {
        if (listener.enterIntersectionMark) {
            listener.enterIntersectionMark(this);
        }
    };
    // @Override
    IntersectionMarkContext.prototype.exitRule = function (listener) {
        if (listener.exitIntersectionMark) {
            listener.exitIntersectionMark(this);
        }
    };
    // @Override
    IntersectionMarkContext.prototype.accept = function (visitor) {
        if (visitor.visitIntersectionMark) {
            return visitor.visitIntersectionMark(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntersectionMarkContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntersectionMarkContext = IntersectionMarkContext;
var ElementsContext = /** @class */ (function (_super) {
    __extends(ElementsContext, _super);
    function ElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementsContext.prototype.subtypeElements = function () {
        return this.getRuleContext(0, SubtypeElementsContext);
    };
    Object.defineProperty(ElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_elements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterElements) {
            listener.enterElements(this);
        }
    };
    // @Override
    ElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitElements) {
            listener.exitElements(this);
        }
    };
    // @Override
    ElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitElements) {
            return visitor.visitElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementsContext = ElementsContext;
var ObjectSetElementsContext = /** @class */ (function (_super) {
    __extends(ObjectSetElementsContext, _super);
    function ObjectSetElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectSetElementsContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    ObjectSetElementsContext.prototype.definedObject = function () {
        return this.tryGetRuleContext(0, DefinedObjectContext);
    };
    Object.defineProperty(ObjectSetElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectSetElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectSetElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectSetElements) {
            listener.enterObjectSetElements(this);
        }
    };
    // @Override
    ObjectSetElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectSetElements) {
            listener.exitObjectSetElements(this);
        }
    };
    // @Override
    ObjectSetElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectSetElements) {
            return visitor.visitObjectSetElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectSetElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectSetElementsContext = ObjectSetElementsContext;
var IntersectionElementsContext = /** @class */ (function (_super) {
    __extends(IntersectionElementsContext, _super);
    function IntersectionElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntersectionElementsContext.prototype.elements = function () {
        return this.getRuleContext(0, ElementsContext);
    };
    IntersectionElementsContext.prototype.exclusions = function () {
        return this.tryGetRuleContext(0, ExclusionsContext);
    };
    Object.defineProperty(IntersectionElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_intersectionElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntersectionElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterIntersectionElements) {
            listener.enterIntersectionElements(this);
        }
    };
    // @Override
    IntersectionElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitIntersectionElements) {
            listener.exitIntersectionElements(this);
        }
    };
    // @Override
    IntersectionElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitIntersectionElements) {
            return visitor.visitIntersectionElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntersectionElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntersectionElementsContext = IntersectionElementsContext;
var SubtypeElementsContext = /** @class */ (function (_super) {
    __extends(SubtypeElementsContext, _super);
    function SubtypeElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubtypeElementsContext.prototype.DOUBLE_DOT = function () { return this.tryGetToken(ASN_3gppParser.DOUBLE_DOT, 0); };
    SubtypeElementsContext.prototype.value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    };
    SubtypeElementsContext.prototype.MIN_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.MIN_LITERAL, 0); };
    SubtypeElementsContext.prototype.MAX_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.MAX_LITERAL, 0); };
    SubtypeElementsContext.prototype.LESS_THAN = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.LESS_THAN);
        }
        else {
            return this.getToken(ASN_3gppParser.LESS_THAN, i);
        }
    };
    SubtypeElementsContext.prototype.sizeConstraint = function () {
        return this.tryGetRuleContext(0, SizeConstraintContext);
    };
    SubtypeElementsContext.prototype.PATTERN_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.PATTERN_LITERAL, 0); };
    Object.defineProperty(SubtypeElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_subtypeElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubtypeElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterSubtypeElements) {
            listener.enterSubtypeElements(this);
        }
    };
    // @Override
    SubtypeElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitSubtypeElements) {
            listener.exitSubtypeElements(this);
        }
    };
    // @Override
    SubtypeElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitSubtypeElements) {
            return visitor.visitSubtypeElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubtypeElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubtypeElementsContext = SubtypeElementsContext;
var VariableTypeValueSetFieldSpecContext = /** @class */ (function (_super) {
    __extends(VariableTypeValueSetFieldSpecContext, _super);
    function VariableTypeValueSetFieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableTypeValueSetFieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    VariableTypeValueSetFieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    VariableTypeValueSetFieldSpecContext.prototype.fieldName = function () {
        return this.getRuleContext(0, FieldNameContext);
    };
    VariableTypeValueSetFieldSpecContext.prototype.valueSetOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
    };
    Object.defineProperty(VariableTypeValueSetFieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_variableTypeValueSetFieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableTypeValueSetFieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableTypeValueSetFieldSpec) {
            listener.enterVariableTypeValueSetFieldSpec(this);
        }
    };
    // @Override
    VariableTypeValueSetFieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableTypeValueSetFieldSpec) {
            listener.exitVariableTypeValueSetFieldSpec(this);
        }
    };
    // @Override
    VariableTypeValueSetFieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableTypeValueSetFieldSpec) {
            return visitor.visitVariableTypeValueSetFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableTypeValueSetFieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableTypeValueSetFieldSpecContext = VariableTypeValueSetFieldSpecContext;
var ObjectFieldSpecContext = /** @class */ (function (_super) {
    __extends(ObjectFieldSpecContext, _super);
    function ObjectFieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectFieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    ObjectFieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    ObjectFieldSpecContext.prototype.definedObjectClass = function () {
        return this.getRuleContext(0, DefinedObjectClassContext);
    };
    ObjectFieldSpecContext.prototype.objectOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ObjectOptionalitySpecContext);
    };
    Object.defineProperty(ObjectFieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectFieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectFieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectFieldSpec) {
            listener.enterObjectFieldSpec(this);
        }
    };
    // @Override
    ObjectFieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectFieldSpec) {
            listener.exitObjectFieldSpec(this);
        }
    };
    // @Override
    ObjectFieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectFieldSpec) {
            return visitor.visitObjectFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectFieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectFieldSpecContext = ObjectFieldSpecContext;
var ObjectOptionalitySpecContext = /** @class */ (function (_super) {
    __extends(ObjectOptionalitySpecContext, _super);
    function ObjectOptionalitySpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectOptionalitySpecContext.prototype.OPTIONAL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); };
    ObjectOptionalitySpecContext.prototype.DEFAULT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); };
    ObjectOptionalitySpecContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    Object.defineProperty(ObjectOptionalitySpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectOptionalitySpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectOptionalitySpecContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectOptionalitySpec) {
            listener.enterObjectOptionalitySpec(this);
        }
    };
    // @Override
    ObjectOptionalitySpecContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectOptionalitySpec) {
            listener.exitObjectOptionalitySpec(this);
        }
    };
    // @Override
    ObjectOptionalitySpecContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectOptionalitySpec) {
            return visitor.visitObjectOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectOptionalitySpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectOptionalitySpecContext = ObjectOptionalitySpecContext;
var ObjectSetFieldSpecContext = /** @class */ (function (_super) {
    __extends(ObjectSetFieldSpecContext, _super);
    function ObjectSetFieldSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectSetFieldSpecContext.prototype.AMPERSAND = function () { return this.getToken(ASN_3gppParser.AMPERSAND, 0); };
    ObjectSetFieldSpecContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    ObjectSetFieldSpecContext.prototype.definedObjectClass = function () {
        return this.getRuleContext(0, DefinedObjectClassContext);
    };
    ObjectSetFieldSpecContext.prototype.objectSetOptionalitySpec = function () {
        return this.tryGetRuleContext(0, ObjectSetOptionalitySpecContext);
    };
    Object.defineProperty(ObjectSetFieldSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectSetFieldSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectSetFieldSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectSetFieldSpec) {
            listener.enterObjectSetFieldSpec(this);
        }
    };
    // @Override
    ObjectSetFieldSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectSetFieldSpec) {
            listener.exitObjectSetFieldSpec(this);
        }
    };
    // @Override
    ObjectSetFieldSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectSetFieldSpec) {
            return visitor.visitObjectSetFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectSetFieldSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectSetFieldSpecContext = ObjectSetFieldSpecContext;
var ObjectSetOptionalitySpecContext = /** @class */ (function (_super) {
    __extends(ObjectSetOptionalitySpecContext, _super);
    function ObjectSetOptionalitySpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectSetOptionalitySpecContext.prototype.OPTIONAL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); };
    ObjectSetOptionalitySpecContext.prototype.DEFAULT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); };
    ObjectSetOptionalitySpecContext.prototype.objectSet = function () {
        return this.tryGetRuleContext(0, ObjectSetContext);
    };
    Object.defineProperty(ObjectSetOptionalitySpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectSetOptionalitySpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectSetOptionalitySpecContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectSetOptionalitySpec) {
            listener.enterObjectSetOptionalitySpec(this);
        }
    };
    // @Override
    ObjectSetOptionalitySpecContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectSetOptionalitySpec) {
            listener.exitObjectSetOptionalitySpec(this);
        }
    };
    // @Override
    ObjectSetOptionalitySpecContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectSetOptionalitySpec) {
            return visitor.visitObjectSetOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectSetOptionalitySpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectSetOptionalitySpecContext = ObjectSetOptionalitySpecContext;
var TypeAssignmentContext = /** @class */ (function (_super) {
    __extends(TypeAssignmentContext, _super);
    function TypeAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeAssignmentContext.prototype.ASSIGN_OP = function () { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); };
    TypeAssignmentContext.prototype.asnType = function () {
        return this.getRuleContext(0, AsnTypeContext);
    };
    Object.defineProperty(TypeAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_typeAssignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeAssignment) {
            listener.enterTypeAssignment(this);
        }
    };
    // @Override
    TypeAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeAssignment) {
            listener.exitTypeAssignment(this);
        }
    };
    // @Override
    TypeAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeAssignment) {
            return visitor.visitTypeAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeAssignmentContext = TypeAssignmentContext;
var ValueAssignmentContext = /** @class */ (function (_super) {
    __extends(ValueAssignmentContext, _super);
    function ValueAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueAssignmentContext.prototype.asnType = function () {
        return this.getRuleContext(0, AsnTypeContext);
    };
    ValueAssignmentContext.prototype.ASSIGN_OP = function () { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); };
    ValueAssignmentContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(ValueAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_valueAssignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterValueAssignment) {
            listener.enterValueAssignment(this);
        }
    };
    // @Override
    ValueAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitValueAssignment) {
            listener.exitValueAssignment(this);
        }
    };
    // @Override
    ValueAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitValueAssignment) {
            return visitor.visitValueAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueAssignmentContext = ValueAssignmentContext;
var AsnTypeContext = /** @class */ (function (_super) {
    __extends(AsnTypeContext, _super);
    function AsnTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AsnTypeContext.prototype.builtinType = function () {
        return this.tryGetRuleContext(0, BuiltinTypeContext);
    };
    AsnTypeContext.prototype.referencedType = function () {
        return this.tryGetRuleContext(0, ReferencedTypeContext);
    };
    AsnTypeContext.prototype.constraint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstraintContext);
        }
        else {
            return this.getRuleContext(i, ConstraintContext);
        }
    };
    Object.defineProperty(AsnTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_asnType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AsnTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterAsnType) {
            listener.enterAsnType(this);
        }
    };
    // @Override
    AsnTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitAsnType) {
            listener.exitAsnType(this);
        }
    };
    // @Override
    AsnTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitAsnType) {
            return visitor.visitAsnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AsnTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AsnTypeContext = AsnTypeContext;
var BuiltinTypeContext = /** @class */ (function (_super) {
    __extends(BuiltinTypeContext, _super);
    function BuiltinTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BuiltinTypeContext.prototype.octetStringType = function () {
        return this.tryGetRuleContext(0, OctetStringTypeContext);
    };
    BuiltinTypeContext.prototype.bitStringType = function () {
        return this.tryGetRuleContext(0, BitStringTypeContext);
    };
    BuiltinTypeContext.prototype.choiceType = function () {
        return this.tryGetRuleContext(0, ChoiceTypeContext);
    };
    BuiltinTypeContext.prototype.enumeratedType = function () {
        return this.tryGetRuleContext(0, EnumeratedTypeContext);
    };
    BuiltinTypeContext.prototype.integerType = function () {
        return this.tryGetRuleContext(0, IntegerTypeContext);
    };
    BuiltinTypeContext.prototype.sequenceType = function () {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    };
    BuiltinTypeContext.prototype.sequenceOfType = function () {
        return this.tryGetRuleContext(0, SequenceOfTypeContext);
    };
    BuiltinTypeContext.prototype.setType = function () {
        return this.tryGetRuleContext(0, SetTypeContext);
    };
    BuiltinTypeContext.prototype.setOfType = function () {
        return this.tryGetRuleContext(0, SetOfTypeContext);
    };
    BuiltinTypeContext.prototype.objectidentifiertype = function () {
        return this.tryGetRuleContext(0, ObjectidentifiertypeContext);
    };
    BuiltinTypeContext.prototype.objectClassFieldType = function () {
        return this.tryGetRuleContext(0, ObjectClassFieldTypeContext);
    };
    BuiltinTypeContext.prototype.BOOLEAN_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.BOOLEAN_LITERAL, 0); };
    BuiltinTypeContext.prototype.NULL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.NULL_LITERAL, 0); };
    Object.defineProperty(BuiltinTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_builtinType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BuiltinTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBuiltinType) {
            listener.enterBuiltinType(this);
        }
    };
    // @Override
    BuiltinTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBuiltinType) {
            listener.exitBuiltinType(this);
        }
    };
    // @Override
    BuiltinTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBuiltinType) {
            return visitor.visitBuiltinType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BuiltinTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BuiltinTypeContext = BuiltinTypeContext;
var ObjectClassFieldTypeContext = /** @class */ (function (_super) {
    __extends(ObjectClassFieldTypeContext, _super);
    function ObjectClassFieldTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectClassFieldTypeContext.prototype.definedObjectClass = function () {
        return this.getRuleContext(0, DefinedObjectClassContext);
    };
    ObjectClassFieldTypeContext.prototype.DOT = function () { return this.getToken(ASN_3gppParser.DOT, 0); };
    ObjectClassFieldTypeContext.prototype.fieldName = function () {
        return this.getRuleContext(0, FieldNameContext);
    };
    Object.defineProperty(ObjectClassFieldTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectClassFieldType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectClassFieldTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectClassFieldType) {
            listener.enterObjectClassFieldType(this);
        }
    };
    // @Override
    ObjectClassFieldTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectClassFieldType) {
            listener.exitObjectClassFieldType(this);
        }
    };
    // @Override
    ObjectClassFieldTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectClassFieldType) {
            return visitor.visitObjectClassFieldType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectClassFieldTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectClassFieldTypeContext = ObjectClassFieldTypeContext;
var SetTypeContext = /** @class */ (function (_super) {
    __extends(SetTypeContext, _super);
    function SetTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetTypeContext.prototype.SET_LITERAL = function () { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); };
    SetTypeContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    SetTypeContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    SetTypeContext.prototype.extensionAndException = function () {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    };
    SetTypeContext.prototype.optionalExtensionMarker = function () {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    };
    SetTypeContext.prototype.componentTypeLists = function () {
        return this.tryGetRuleContext(0, ComponentTypeListsContext);
    };
    Object.defineProperty(SetTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_setType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSetType) {
            listener.enterSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSetType) {
            listener.exitSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSetType) {
            return visitor.visitSetType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetTypeContext = SetTypeContext;
var SetOfTypeContext = /** @class */ (function (_super) {
    __extends(SetOfTypeContext, _super);
    function SetOfTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetOfTypeContext.prototype.SET_LITERAL = function () { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); };
    SetOfTypeContext.prototype.OF_LITERAL = function () { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); };
    SetOfTypeContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    SetOfTypeContext.prototype.namedType = function () {
        return this.tryGetRuleContext(0, NamedTypeContext);
    };
    SetOfTypeContext.prototype.constraint = function () {
        return this.tryGetRuleContext(0, ConstraintContext);
    };
    SetOfTypeContext.prototype.sizeConstraint = function () {
        return this.tryGetRuleContext(0, SizeConstraintContext);
    };
    Object.defineProperty(SetOfTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_setOfType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetOfTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSetOfType) {
            listener.enterSetOfType(this);
        }
    };
    // @Override
    SetOfTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSetOfType) {
            listener.exitSetOfType(this);
        }
    };
    // @Override
    SetOfTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSetOfType) {
            return visitor.visitSetOfType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetOfTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetOfTypeContext = SetOfTypeContext;
var ReferencedTypeContext = /** @class */ (function (_super) {
    __extends(ReferencedTypeContext, _super);
    function ReferencedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReferencedTypeContext.prototype.definedType = function () {
        return this.getRuleContext(0, DefinedTypeContext);
    };
    Object.defineProperty(ReferencedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_referencedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReferencedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterReferencedType) {
            listener.enterReferencedType(this);
        }
    };
    // @Override
    ReferencedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitReferencedType) {
            listener.exitReferencedType(this);
        }
    };
    // @Override
    ReferencedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitReferencedType) {
            return visitor.visitReferencedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferencedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReferencedTypeContext = ReferencedTypeContext;
var DefinedTypeContext = /** @class */ (function (_super) {
    __extends(DefinedTypeContext, _super);
    function DefinedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinedTypeContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    DefinedTypeContext.prototype.DOT = function () { return this.tryGetToken(ASN_3gppParser.DOT, 0); };
    DefinedTypeContext.prototype.actualParameterList = function () {
        return this.tryGetRuleContext(0, ActualParameterListContext);
    };
    Object.defineProperty(DefinedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_definedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinedType) {
            listener.enterDefinedType(this);
        }
    };
    // @Override
    DefinedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinedType) {
            listener.exitDefinedType(this);
        }
    };
    // @Override
    DefinedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinedType) {
            return visitor.visitDefinedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinedTypeContext = DefinedTypeContext;
var ConstraintContext = /** @class */ (function (_super) {
    __extends(ConstraintContext, _super);
    function ConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstraintContext.prototype.L_PARAN = function () { return this.getToken(ASN_3gppParser.L_PARAN, 0); };
    ConstraintContext.prototype.constraintSpec = function () {
        return this.getRuleContext(0, ConstraintSpecContext);
    };
    ConstraintContext.prototype.R_PARAN = function () { return this.getToken(ASN_3gppParser.R_PARAN, 0); };
    ConstraintContext.prototype.exceptionSpec = function () {
        return this.tryGetRuleContext(0, ExceptionSpecContext);
    };
    Object.defineProperty(ConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_constraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterConstraint) {
            listener.enterConstraint(this);
        }
    };
    // @Override
    ConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitConstraint) {
            listener.exitConstraint(this);
        }
    };
    // @Override
    ConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitConstraint) {
            return visitor.visitConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstraintContext = ConstraintContext;
var ConstraintSpecContext = /** @class */ (function (_super) {
    __extends(ConstraintSpecContext, _super);
    function ConstraintSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstraintSpecContext.prototype.generalConstraint = function () {
        return this.tryGetRuleContext(0, GeneralConstraintContext);
    };
    ConstraintSpecContext.prototype.subtypeConstraint = function () {
        return this.tryGetRuleContext(0, SubtypeConstraintContext);
    };
    Object.defineProperty(ConstraintSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_constraintSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstraintSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterConstraintSpec) {
            listener.enterConstraintSpec(this);
        }
    };
    // @Override
    ConstraintSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitConstraintSpec) {
            listener.exitConstraintSpec(this);
        }
    };
    // @Override
    ConstraintSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitConstraintSpec) {
            return visitor.visitConstraintSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstraintSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstraintSpecContext = ConstraintSpecContext;
var UserDefinedConstraintContext = /** @class */ (function (_super) {
    __extends(UserDefinedConstraintContext, _super);
    function UserDefinedConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserDefinedConstraintContext.prototype.CONSTRAINED_LITERAL = function () { return this.getToken(ASN_3gppParser.CONSTRAINED_LITERAL, 0); };
    UserDefinedConstraintContext.prototype.BY_LITERAL = function () { return this.getToken(ASN_3gppParser.BY_LITERAL, 0); };
    UserDefinedConstraintContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    UserDefinedConstraintContext.prototype.userDefinedConstraintParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UserDefinedConstraintParameterContext);
        }
        else {
            return this.getRuleContext(i, UserDefinedConstraintParameterContext);
        }
    };
    UserDefinedConstraintContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    UserDefinedConstraintContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(UserDefinedConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_userDefinedConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserDefinedConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterUserDefinedConstraint) {
            listener.enterUserDefinedConstraint(this);
        }
    };
    // @Override
    UserDefinedConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitUserDefinedConstraint) {
            listener.exitUserDefinedConstraint(this);
        }
    };
    // @Override
    UserDefinedConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitUserDefinedConstraint) {
            return visitor.visitUserDefinedConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserDefinedConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserDefinedConstraintContext = UserDefinedConstraintContext;
var GeneralConstraintContext = /** @class */ (function (_super) {
    __extends(GeneralConstraintContext, _super);
    function GeneralConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneralConstraintContext.prototype.userDefinedConstraint = function () {
        return this.tryGetRuleContext(0, UserDefinedConstraintContext);
    };
    GeneralConstraintContext.prototype.tableConstraint = function () {
        return this.tryGetRuleContext(0, TableConstraintContext);
    };
    GeneralConstraintContext.prototype.contentsConstraint = function () {
        return this.tryGetRuleContext(0, ContentsConstraintContext);
    };
    Object.defineProperty(GeneralConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_generalConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneralConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneralConstraint) {
            listener.enterGeneralConstraint(this);
        }
    };
    // @Override
    GeneralConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneralConstraint) {
            listener.exitGeneralConstraint(this);
        }
    };
    // @Override
    GeneralConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneralConstraint) {
            return visitor.visitGeneralConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneralConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneralConstraintContext = GeneralConstraintContext;
var UserDefinedConstraintParameterContext = /** @class */ (function (_super) {
    __extends(UserDefinedConstraintParameterContext, _super);
    function UserDefinedConstraintParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserDefinedConstraintParameterContext.prototype.governor = function () {
        return this.getRuleContext(0, GovernorContext);
    };
    UserDefinedConstraintParameterContext.prototype.COLON = function () { return this.tryGetToken(ASN_3gppParser.COLON, 0); };
    UserDefinedConstraintParameterContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    UserDefinedConstraintParameterContext.prototype.valueSet = function () {
        return this.tryGetRuleContext(0, ValueSetContext);
    };
    UserDefinedConstraintParameterContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    UserDefinedConstraintParameterContext.prototype.objectSet = function () {
        return this.tryGetRuleContext(0, ObjectSetContext);
    };
    Object.defineProperty(UserDefinedConstraintParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_userDefinedConstraintParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserDefinedConstraintParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterUserDefinedConstraintParameter) {
            listener.enterUserDefinedConstraintParameter(this);
        }
    };
    // @Override
    UserDefinedConstraintParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitUserDefinedConstraintParameter) {
            listener.exitUserDefinedConstraintParameter(this);
        }
    };
    // @Override
    UserDefinedConstraintParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitUserDefinedConstraintParameter) {
            return visitor.visitUserDefinedConstraintParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserDefinedConstraintParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserDefinedConstraintParameterContext = UserDefinedConstraintParameterContext;
var TableConstraintContext = /** @class */ (function (_super) {
    __extends(TableConstraintContext, _super);
    function TableConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableConstraintContext.prototype.componentRelationConstraint = function () {
        return this.getRuleContext(0, ComponentRelationConstraintContext);
    };
    Object.defineProperty(TableConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_tableConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterTableConstraint) {
            listener.enterTableConstraint(this);
        }
    };
    // @Override
    TableConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitTableConstraint) {
            listener.exitTableConstraint(this);
        }
    };
    // @Override
    TableConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitTableConstraint) {
            return visitor.visitTableConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableConstraintContext = TableConstraintContext;
var SimpleTableConstraintContext = /** @class */ (function (_super) {
    __extends(SimpleTableConstraintContext, _super);
    function SimpleTableConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleTableConstraintContext.prototype.objectSet = function () {
        return this.getRuleContext(0, ObjectSetContext);
    };
    Object.defineProperty(SimpleTableConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_simpleTableConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleTableConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleTableConstraint) {
            listener.enterSimpleTableConstraint(this);
        }
    };
    // @Override
    SimpleTableConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleTableConstraint) {
            listener.exitSimpleTableConstraint(this);
        }
    };
    // @Override
    SimpleTableConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleTableConstraint) {
            return visitor.visitSimpleTableConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleTableConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleTableConstraintContext = SimpleTableConstraintContext;
var ContentsConstraintContext = /** @class */ (function (_super) {
    __extends(ContentsConstraintContext, _super);
    function ContentsConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContentsConstraintContext.prototype.CONTAINING_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.CONTAINING_LITERAL, 0); };
    ContentsConstraintContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    ContentsConstraintContext.prototype.ENCODED_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.ENCODED_LITERAL, 0); };
    ContentsConstraintContext.prototype.BY_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.BY_LITERAL, 0); };
    ContentsConstraintContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    ContentsConstraintContext.prototype.WITH_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.WITH_LITERAL, 0); };
    ContentsConstraintContext.prototype.COMPONENTS_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); };
    ContentsConstraintContext.prototype.L_BRACE = function () { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); };
    ContentsConstraintContext.prototype.componentPresenceLists = function () {
        return this.tryGetRuleContext(0, ComponentPresenceListsContext);
    };
    ContentsConstraintContext.prototype.R_BRACE = function () { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(ContentsConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_contentsConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContentsConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterContentsConstraint) {
            listener.enterContentsConstraint(this);
        }
    };
    // @Override
    ContentsConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitContentsConstraint) {
            listener.exitContentsConstraint(this);
        }
    };
    // @Override
    ContentsConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitContentsConstraint) {
            return visitor.visitContentsConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContentsConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContentsConstraintContext = ContentsConstraintContext;
var ComponentPresenceListsContext = /** @class */ (function (_super) {
    __extends(ComponentPresenceListsContext, _super);
    function ComponentPresenceListsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentPresenceListsContext.prototype.componentPresenceList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ComponentPresenceListContext);
        }
        else {
            return this.getRuleContext(i, ComponentPresenceListContext);
        }
    };
    ComponentPresenceListsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    ComponentPresenceListsContext.prototype.ELLIPSIS = function () { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); };
    Object.defineProperty(ComponentPresenceListsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentPresenceLists; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentPresenceListsContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentPresenceLists) {
            listener.enterComponentPresenceLists(this);
        }
    };
    // @Override
    ComponentPresenceListsContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentPresenceLists) {
            listener.exitComponentPresenceLists(this);
        }
    };
    // @Override
    ComponentPresenceListsContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentPresenceLists) {
            return visitor.visitComponentPresenceLists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentPresenceListsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentPresenceListsContext = ComponentPresenceListsContext;
var ComponentPresenceListContext = /** @class */ (function (_super) {
    __extends(ComponentPresenceListContext, _super);
    function ComponentPresenceListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentPresenceListContext.prototype.componentPresence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ComponentPresenceContext);
        }
        else {
            return this.getRuleContext(i, ComponentPresenceContext);
        }
    };
    ComponentPresenceListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(ComponentPresenceListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentPresenceList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentPresenceListContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentPresenceList) {
            listener.enterComponentPresenceList(this);
        }
    };
    // @Override
    ComponentPresenceListContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentPresenceList) {
            listener.exitComponentPresenceList(this);
        }
    };
    // @Override
    ComponentPresenceListContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentPresenceList) {
            return visitor.visitComponentPresenceList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentPresenceListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentPresenceListContext = ComponentPresenceListContext;
var ComponentPresenceContext = /** @class */ (function (_super) {
    __extends(ComponentPresenceContext, _super);
    function ComponentPresenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentPresenceContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    ComponentPresenceContext.prototype.ABSENT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.ABSENT_LITERAL, 0); };
    ComponentPresenceContext.prototype.PRESENT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.PRESENT_LITERAL, 0); };
    Object.defineProperty(ComponentPresenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentPresence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentPresenceContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentPresence) {
            listener.enterComponentPresence(this);
        }
    };
    // @Override
    ComponentPresenceContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentPresence) {
            listener.exitComponentPresence(this);
        }
    };
    // @Override
    ComponentPresenceContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentPresence) {
            return visitor.visitComponentPresence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentPresenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentPresenceContext = ComponentPresenceContext;
var SubtypeConstraintContext = /** @class */ (function (_super) {
    __extends(SubtypeConstraintContext, _super);
    function SubtypeConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubtypeConstraintContext.prototype.elementSetSpecs = function () {
        return this.getRuleContext(0, ElementSetSpecsContext);
    };
    Object.defineProperty(SubtypeConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_subtypeConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubtypeConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterSubtypeConstraint) {
            listener.enterSubtypeConstraint(this);
        }
    };
    // @Override
    SubtypeConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitSubtypeConstraint) {
            listener.exitSubtypeConstraint(this);
        }
    };
    // @Override
    SubtypeConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitSubtypeConstraint) {
            return visitor.visitSubtypeConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubtypeConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubtypeConstraintContext = SubtypeConstraintContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.builtinValue = function () {
        return this.getRuleContext(0, BuiltinValueContext);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var BuiltinValueContext = /** @class */ (function (_super) {
    __extends(BuiltinValueContext, _super);
    function BuiltinValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BuiltinValueContext.prototype.enumeratedValue = function () {
        return this.tryGetRuleContext(0, EnumeratedValueContext);
    };
    BuiltinValueContext.prototype.integerValue = function () {
        return this.tryGetRuleContext(0, IntegerValueContext);
    };
    BuiltinValueContext.prototype.choiceValue = function () {
        return this.tryGetRuleContext(0, ChoiceValueContext);
    };
    BuiltinValueContext.prototype.objectIdentifierValue = function () {
        return this.tryGetRuleContext(0, ObjectIdentifierValueContext);
    };
    BuiltinValueContext.prototype.booleanValue = function () {
        return this.tryGetRuleContext(0, BooleanValueContext);
    };
    BuiltinValueContext.prototype.CSTRING = function () { return this.tryGetToken(ASN_3gppParser.CSTRING, 0); };
    BuiltinValueContext.prototype.BSTRING = function () { return this.tryGetToken(ASN_3gppParser.BSTRING, 0); };
    Object.defineProperty(BuiltinValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_builtinValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BuiltinValueContext.prototype.enterRule = function (listener) {
        if (listener.enterBuiltinValue) {
            listener.enterBuiltinValue(this);
        }
    };
    // @Override
    BuiltinValueContext.prototype.exitRule = function (listener) {
        if (listener.exitBuiltinValue) {
            listener.exitBuiltinValue(this);
        }
    };
    // @Override
    BuiltinValueContext.prototype.accept = function (visitor) {
        if (visitor.visitBuiltinValue) {
            return visitor.visitBuiltinValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BuiltinValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BuiltinValueContext = BuiltinValueContext;
var ObjectIdentifierValueContext = /** @class */ (function (_super) {
    __extends(ObjectIdentifierValueContext, _super);
    function ObjectIdentifierValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectIdentifierValueContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    ObjectIdentifierValueContext.prototype.objIdComponentsList = function () {
        return this.getRuleContext(0, ObjIdComponentsListContext);
    };
    ObjectIdentifierValueContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(ObjectIdentifierValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectIdentifierValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectIdentifierValueContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectIdentifierValue) {
            listener.enterObjectIdentifierValue(this);
        }
    };
    // @Override
    ObjectIdentifierValueContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectIdentifierValue) {
            listener.exitObjectIdentifierValue(this);
        }
    };
    // @Override
    ObjectIdentifierValueContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectIdentifierValue) {
            return visitor.visitObjectIdentifierValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectIdentifierValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectIdentifierValueContext = ObjectIdentifierValueContext;
var ObjIdComponentsListContext = /** @class */ (function (_super) {
    __extends(ObjIdComponentsListContext, _super);
    function ObjIdComponentsListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjIdComponentsListContext.prototype.objIdComponents = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjIdComponentsContext);
        }
        else {
            return this.getRuleContext(i, ObjIdComponentsContext);
        }
    };
    Object.defineProperty(ObjIdComponentsListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objIdComponentsList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjIdComponentsListContext.prototype.enterRule = function (listener) {
        if (listener.enterObjIdComponentsList) {
            listener.enterObjIdComponentsList(this);
        }
    };
    // @Override
    ObjIdComponentsListContext.prototype.exitRule = function (listener) {
        if (listener.exitObjIdComponentsList) {
            listener.exitObjIdComponentsList(this);
        }
    };
    // @Override
    ObjIdComponentsListContext.prototype.accept = function (visitor) {
        if (visitor.visitObjIdComponentsList) {
            return visitor.visitObjIdComponentsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjIdComponentsListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjIdComponentsListContext = ObjIdComponentsListContext;
var ObjIdComponentsContext = /** @class */ (function (_super) {
    __extends(ObjIdComponentsContext, _super);
    function ObjIdComponentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjIdComponentsContext.prototype.NUMBER = function () { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); };
    ObjIdComponentsContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); };
    ObjIdComponentsContext.prototype.L_PARAN = function () { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); };
    ObjIdComponentsContext.prototype.R_PARAN = function () { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); };
    ObjIdComponentsContext.prototype.definedValue = function () {
        return this.tryGetRuleContext(0, DefinedValueContext);
    };
    Object.defineProperty(ObjIdComponentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objIdComponents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjIdComponentsContext.prototype.enterRule = function (listener) {
        if (listener.enterObjIdComponents) {
            listener.enterObjIdComponents(this);
        }
    };
    // @Override
    ObjIdComponentsContext.prototype.exitRule = function (listener) {
        if (listener.exitObjIdComponents) {
            listener.exitObjIdComponents(this);
        }
    };
    // @Override
    ObjIdComponentsContext.prototype.accept = function (visitor) {
        if (visitor.visitObjIdComponents) {
            return visitor.visitObjIdComponents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjIdComponentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjIdComponentsContext = ObjIdComponentsContext;
var IntegerValueContext = /** @class */ (function (_super) {
    __extends(IntegerValueContext, _super);
    function IntegerValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerValueContext.prototype.signedNumber = function () {
        return this.tryGetRuleContext(0, SignedNumberContext);
    };
    IntegerValueContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); };
    Object.defineProperty(IntegerValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_integerValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerValueContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerValue) {
            listener.enterIntegerValue(this);
        }
    };
    // @Override
    IntegerValueContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerValue) {
            listener.exitIntegerValue(this);
        }
    };
    // @Override
    IntegerValueContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerValue) {
            return visitor.visitIntegerValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerValueContext = IntegerValueContext;
var ChoiceValueContext = /** @class */ (function (_super) {
    __extends(ChoiceValueContext, _super);
    function ChoiceValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChoiceValueContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    ChoiceValueContext.prototype.COLON = function () { return this.getToken(ASN_3gppParser.COLON, 0); };
    ChoiceValueContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(ChoiceValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_choiceValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChoiceValueContext.prototype.enterRule = function (listener) {
        if (listener.enterChoiceValue) {
            listener.enterChoiceValue(this);
        }
    };
    // @Override
    ChoiceValueContext.prototype.exitRule = function (listener) {
        if (listener.exitChoiceValue) {
            listener.exitChoiceValue(this);
        }
    };
    // @Override
    ChoiceValueContext.prototype.accept = function (visitor) {
        if (visitor.visitChoiceValue) {
            return visitor.visitChoiceValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChoiceValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChoiceValueContext = ChoiceValueContext;
var EnumeratedValueContext = /** @class */ (function (_super) {
    __extends(EnumeratedValueContext, _super);
    function EnumeratedValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratedValueContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    Object.defineProperty(EnumeratedValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_enumeratedValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumeratedValueContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumeratedValue) {
            listener.enterEnumeratedValue(this);
        }
    };
    // @Override
    EnumeratedValueContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumeratedValue) {
            listener.exitEnumeratedValue(this);
        }
    };
    // @Override
    EnumeratedValueContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumeratedValue) {
            return visitor.visitEnumeratedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumeratedValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumeratedValueContext = EnumeratedValueContext;
var SignedNumberContext = /** @class */ (function (_super) {
    __extends(SignedNumberContext, _super);
    function SignedNumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignedNumberContext.prototype.NUMBER = function () { return this.getToken(ASN_3gppParser.NUMBER, 0); };
    SignedNumberContext.prototype.MINUS = function () { return this.tryGetToken(ASN_3gppParser.MINUS, 0); };
    Object.defineProperty(SignedNumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_signedNumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignedNumberContext.prototype.enterRule = function (listener) {
        if (listener.enterSignedNumber) {
            listener.enterSignedNumber(this);
        }
    };
    // @Override
    SignedNumberContext.prototype.exitRule = function (listener) {
        if (listener.exitSignedNumber) {
            listener.exitSignedNumber(this);
        }
    };
    // @Override
    SignedNumberContext.prototype.accept = function (visitor) {
        if (visitor.visitSignedNumber) {
            return visitor.visitSignedNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignedNumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignedNumberContext = SignedNumberContext;
var ChoiceTypeContext = /** @class */ (function (_super) {
    __extends(ChoiceTypeContext, _super);
    function ChoiceTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChoiceTypeContext.prototype.CHOICE_LITERAL = function () { return this.getToken(ASN_3gppParser.CHOICE_LITERAL, 0); };
    ChoiceTypeContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    ChoiceTypeContext.prototype.alternativeTypeLists = function () {
        return this.getRuleContext(0, AlternativeTypeListsContext);
    };
    ChoiceTypeContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(ChoiceTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_choiceType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChoiceTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterChoiceType) {
            listener.enterChoiceType(this);
        }
    };
    // @Override
    ChoiceTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitChoiceType) {
            listener.exitChoiceType(this);
        }
    };
    // @Override
    ChoiceTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitChoiceType) {
            return visitor.visitChoiceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChoiceTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChoiceTypeContext = ChoiceTypeContext;
var AlternativeTypeListsContext = /** @class */ (function (_super) {
    __extends(AlternativeTypeListsContext, _super);
    function AlternativeTypeListsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlternativeTypeListsContext.prototype.rootAlternativeTypeList = function () {
        return this.getRuleContext(0, RootAlternativeTypeListContext);
    };
    AlternativeTypeListsContext.prototype.COMMA = function () { return this.tryGetToken(ASN_3gppParser.COMMA, 0); };
    AlternativeTypeListsContext.prototype.extensionAndException = function () {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    };
    AlternativeTypeListsContext.prototype.extensionAdditionAlternatives = function () {
        return this.tryGetRuleContext(0, ExtensionAdditionAlternativesContext);
    };
    AlternativeTypeListsContext.prototype.optionalExtensionMarker = function () {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    };
    Object.defineProperty(AlternativeTypeListsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_alternativeTypeLists; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlternativeTypeListsContext.prototype.enterRule = function (listener) {
        if (listener.enterAlternativeTypeLists) {
            listener.enterAlternativeTypeLists(this);
        }
    };
    // @Override
    AlternativeTypeListsContext.prototype.exitRule = function (listener) {
        if (listener.exitAlternativeTypeLists) {
            listener.exitAlternativeTypeLists(this);
        }
    };
    // @Override
    AlternativeTypeListsContext.prototype.accept = function (visitor) {
        if (visitor.visitAlternativeTypeLists) {
            return visitor.visitAlternativeTypeLists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlternativeTypeListsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlternativeTypeListsContext = AlternativeTypeListsContext;
var ExtensionAdditionAlternativesContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativesContext, _super);
    function ExtensionAdditionAlternativesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionAlternativesContext.prototype.COMMA = function () { return this.tryGetToken(ASN_3gppParser.COMMA, 0); };
    ExtensionAdditionAlternativesContext.prototype.extensionAdditionAlternativesList = function () {
        return this.tryGetRuleContext(0, ExtensionAdditionAlternativesListContext);
    };
    Object.defineProperty(ExtensionAdditionAlternativesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAdditionAlternatives; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionAlternativesContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAdditionAlternatives) {
            listener.enterExtensionAdditionAlternatives(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativesContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAdditionAlternatives) {
            listener.exitExtensionAdditionAlternatives(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativesContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAdditionAlternatives) {
            return visitor.visitExtensionAdditionAlternatives(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionAlternativesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionAlternativesContext = ExtensionAdditionAlternativesContext;
var ExtensionAdditionAlternativesListContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativesListContext, _super);
    function ExtensionAdditionAlternativesListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionAlternativesListContext.prototype.extensionAdditionAlternative = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExtensionAdditionAlternativeContext);
        }
        else {
            return this.getRuleContext(i, ExtensionAdditionAlternativeContext);
        }
    };
    ExtensionAdditionAlternativesListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(ExtensionAdditionAlternativesListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAdditionAlternativesList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionAlternativesListContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAdditionAlternativesList) {
            listener.enterExtensionAdditionAlternativesList(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativesListContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAdditionAlternativesList) {
            listener.exitExtensionAdditionAlternativesList(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativesListContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAdditionAlternativesList) {
            return visitor.visitExtensionAdditionAlternativesList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionAlternativesListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionAlternativesListContext = ExtensionAdditionAlternativesListContext;
var ExtensionAdditionAlternativeContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativeContext, _super);
    function ExtensionAdditionAlternativeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionAlternativeContext.prototype.extensionAdditionAlternativesGroup = function () {
        return this.tryGetRuleContext(0, ExtensionAdditionAlternativesGroupContext);
    };
    ExtensionAdditionAlternativeContext.prototype.namedType = function () {
        return this.tryGetRuleContext(0, NamedTypeContext);
    };
    Object.defineProperty(ExtensionAdditionAlternativeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAdditionAlternative; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionAlternativeContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAdditionAlternative) {
            listener.enterExtensionAdditionAlternative(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativeContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAdditionAlternative) {
            listener.exitExtensionAdditionAlternative(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativeContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAdditionAlternative) {
            return visitor.visitExtensionAdditionAlternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionAlternativeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionAlternativeContext = ExtensionAdditionAlternativeContext;
var ExtensionAdditionAlternativesGroupContext = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativesGroupContext, _super);
    function ExtensionAdditionAlternativesGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionAdditionAlternativesGroupContext.prototype.DOUBLE_L_BRACKET = function () { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); };
    ExtensionAdditionAlternativesGroupContext.prototype.versionNumber = function () {
        return this.getRuleContext(0, VersionNumberContext);
    };
    ExtensionAdditionAlternativesGroupContext.prototype.alternativeTypeList = function () {
        return this.getRuleContext(0, AlternativeTypeListContext);
    };
    ExtensionAdditionAlternativesGroupContext.prototype.DOUBLE_R_BRACKET = function () { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); };
    Object.defineProperty(ExtensionAdditionAlternativesGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_extensionAdditionAlternativesGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionAdditionAlternativesGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensionAdditionAlternativesGroup) {
            listener.enterExtensionAdditionAlternativesGroup(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativesGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensionAdditionAlternativesGroup) {
            listener.exitExtensionAdditionAlternativesGroup(this);
        }
    };
    // @Override
    ExtensionAdditionAlternativesGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensionAdditionAlternativesGroup) {
            return visitor.visitExtensionAdditionAlternativesGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionAdditionAlternativesGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionAdditionAlternativesGroupContext = ExtensionAdditionAlternativesGroupContext;
var RootAlternativeTypeListContext = /** @class */ (function (_super) {
    __extends(RootAlternativeTypeListContext, _super);
    function RootAlternativeTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootAlternativeTypeListContext.prototype.alternativeTypeList = function () {
        return this.getRuleContext(0, AlternativeTypeListContext);
    };
    Object.defineProperty(RootAlternativeTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_rootAlternativeTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootAlternativeTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterRootAlternativeTypeList) {
            listener.enterRootAlternativeTypeList(this);
        }
    };
    // @Override
    RootAlternativeTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitRootAlternativeTypeList) {
            listener.exitRootAlternativeTypeList(this);
        }
    };
    // @Override
    RootAlternativeTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitRootAlternativeTypeList) {
            return visitor.visitRootAlternativeTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootAlternativeTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootAlternativeTypeListContext = RootAlternativeTypeListContext;
var AlternativeTypeListContext = /** @class */ (function (_super) {
    __extends(AlternativeTypeListContext, _super);
    function AlternativeTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlternativeTypeListContext.prototype.namedType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedTypeContext);
        }
        else {
            return this.getRuleContext(i, NamedTypeContext);
        }
    };
    AlternativeTypeListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(AlternativeTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_alternativeTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlternativeTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterAlternativeTypeList) {
            listener.enterAlternativeTypeList(this);
        }
    };
    // @Override
    AlternativeTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitAlternativeTypeList) {
            listener.exitAlternativeTypeList(this);
        }
    };
    // @Override
    AlternativeTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitAlternativeTypeList) {
            return visitor.visitAlternativeTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlternativeTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlternativeTypeListContext = AlternativeTypeListContext;
var NamedTypeContext = /** @class */ (function (_super) {
    __extends(NamedTypeContext, _super);
    function NamedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedTypeContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    NamedTypeContext.prototype.asnType = function () {
        return this.getRuleContext(0, AsnTypeContext);
    };
    Object.defineProperty(NamedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_namedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedType) {
            listener.enterNamedType(this);
        }
    };
    // @Override
    NamedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedType) {
            listener.exitNamedType(this);
        }
    };
    // @Override
    NamedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedType) {
            return visitor.visitNamedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedTypeContext = NamedTypeContext;
var EnumeratedTypeContext = /** @class */ (function (_super) {
    __extends(EnumeratedTypeContext, _super);
    function EnumeratedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratedTypeContext.prototype.ENUMERATED_LITERAL = function () { return this.getToken(ASN_3gppParser.ENUMERATED_LITERAL, 0); };
    EnumeratedTypeContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    EnumeratedTypeContext.prototype.enumerations = function () {
        return this.getRuleContext(0, EnumerationsContext);
    };
    EnumeratedTypeContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(EnumeratedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_enumeratedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumeratedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumeratedType) {
            listener.enterEnumeratedType(this);
        }
    };
    // @Override
    EnumeratedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumeratedType) {
            listener.exitEnumeratedType(this);
        }
    };
    // @Override
    EnumeratedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumeratedType) {
            return visitor.visitEnumeratedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumeratedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumeratedTypeContext = EnumeratedTypeContext;
var EnumerationsContext = /** @class */ (function (_super) {
    __extends(EnumerationsContext, _super);
    function EnumerationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumerationsContext.prototype.rootEnumeration = function () {
        return this.getRuleContext(0, RootEnumerationContext);
    };
    EnumerationsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    EnumerationsContext.prototype.ELLIPSIS = function () { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); };
    EnumerationsContext.prototype.exceptionSpec = function () {
        return this.tryGetRuleContext(0, ExceptionSpecContext);
    };
    EnumerationsContext.prototype.additionalEnumeration = function () {
        return this.tryGetRuleContext(0, AdditionalEnumerationContext);
    };
    Object.defineProperty(EnumerationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_enumerations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumerationsContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumerations) {
            listener.enterEnumerations(this);
        }
    };
    // @Override
    EnumerationsContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumerations) {
            listener.exitEnumerations(this);
        }
    };
    // @Override
    EnumerationsContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumerations) {
            return visitor.visitEnumerations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumerationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumerationsContext = EnumerationsContext;
var RootEnumerationContext = /** @class */ (function (_super) {
    __extends(RootEnumerationContext, _super);
    function RootEnumerationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootEnumerationContext.prototype.enumeration = function () {
        return this.getRuleContext(0, EnumerationContext);
    };
    Object.defineProperty(RootEnumerationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_rootEnumeration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootEnumerationContext.prototype.enterRule = function (listener) {
        if (listener.enterRootEnumeration) {
            listener.enterRootEnumeration(this);
        }
    };
    // @Override
    RootEnumerationContext.prototype.exitRule = function (listener) {
        if (listener.exitRootEnumeration) {
            listener.exitRootEnumeration(this);
        }
    };
    // @Override
    RootEnumerationContext.prototype.accept = function (visitor) {
        if (visitor.visitRootEnumeration) {
            return visitor.visitRootEnumeration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootEnumerationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootEnumerationContext = RootEnumerationContext;
var EnumerationContext = /** @class */ (function (_super) {
    __extends(EnumerationContext, _super);
    function EnumerationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumerationContext.prototype.enumerationItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumerationItemContext);
        }
        else {
            return this.getRuleContext(i, EnumerationItemContext);
        }
    };
    EnumerationContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(EnumerationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_enumeration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumerationContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumeration) {
            listener.enterEnumeration(this);
        }
    };
    // @Override
    EnumerationContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumeration) {
            listener.exitEnumeration(this);
        }
    };
    // @Override
    EnumerationContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumeration) {
            return visitor.visitEnumeration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumerationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumerationContext = EnumerationContext;
var EnumerationItemContext = /** @class */ (function (_super) {
    __extends(EnumerationItemContext, _super);
    function EnumerationItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumerationItemContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); };
    EnumerationItemContext.prototype.namedNumber = function () {
        return this.tryGetRuleContext(0, NamedNumberContext);
    };
    EnumerationItemContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(EnumerationItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_enumerationItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumerationItemContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumerationItem) {
            listener.enterEnumerationItem(this);
        }
    };
    // @Override
    EnumerationItemContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumerationItem) {
            listener.exitEnumerationItem(this);
        }
    };
    // @Override
    EnumerationItemContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumerationItem) {
            return visitor.visitEnumerationItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumerationItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumerationItemContext = EnumerationItemContext;
var NamedNumberContext = /** @class */ (function (_super) {
    __extends(NamedNumberContext, _super);
    function NamedNumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedNumberContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    NamedNumberContext.prototype.L_PARAN = function () { return this.getToken(ASN_3gppParser.L_PARAN, 0); };
    NamedNumberContext.prototype.R_PARAN = function () { return this.getToken(ASN_3gppParser.R_PARAN, 0); };
    NamedNumberContext.prototype.signedNumber = function () {
        return this.tryGetRuleContext(0, SignedNumberContext);
    };
    NamedNumberContext.prototype.definedValue = function () {
        return this.tryGetRuleContext(0, DefinedValueContext);
    };
    Object.defineProperty(NamedNumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_namedNumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedNumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedNumber) {
            listener.enterNamedNumber(this);
        }
    };
    // @Override
    NamedNumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedNumber) {
            listener.exitNamedNumber(this);
        }
    };
    // @Override
    NamedNumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedNumber) {
            return visitor.visitNamedNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedNumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedNumberContext = NamedNumberContext;
var DefinedValueContext = /** @class */ (function (_super) {
    __extends(DefinedValueContext, _super);
    function DefinedValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinedValueContext.prototype.parameterizedValue = function () {
        return this.getRuleContext(0, ParameterizedValueContext);
    };
    Object.defineProperty(DefinedValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_definedValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinedValueContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinedValue) {
            listener.enterDefinedValue(this);
        }
    };
    // @Override
    DefinedValueContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinedValue) {
            listener.exitDefinedValue(this);
        }
    };
    // @Override
    DefinedValueContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinedValue) {
            return visitor.visitDefinedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinedValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinedValueContext = DefinedValueContext;
var ParameterizedValueContext = /** @class */ (function (_super) {
    __extends(ParameterizedValueContext, _super);
    function ParameterizedValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterizedValueContext.prototype.simpleDefinedValue = function () {
        return this.getRuleContext(0, SimpleDefinedValueContext);
    };
    ParameterizedValueContext.prototype.actualParameterList = function () {
        return this.tryGetRuleContext(0, ActualParameterListContext);
    };
    Object.defineProperty(ParameterizedValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_parameterizedValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterizedValueContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterizedValue) {
            listener.enterParameterizedValue(this);
        }
    };
    // @Override
    ParameterizedValueContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterizedValue) {
            listener.exitParameterizedValue(this);
        }
    };
    // @Override
    ParameterizedValueContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterizedValue) {
            return visitor.visitParameterizedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterizedValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterizedValueContext = ParameterizedValueContext;
var SimpleDefinedValueContext = /** @class */ (function (_super) {
    __extends(SimpleDefinedValueContext, _super);
    function SimpleDefinedValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleDefinedValueContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    SimpleDefinedValueContext.prototype.DOT = function () { return this.tryGetToken(ASN_3gppParser.DOT, 0); };
    Object.defineProperty(SimpleDefinedValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_simpleDefinedValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleDefinedValueContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleDefinedValue) {
            listener.enterSimpleDefinedValue(this);
        }
    };
    // @Override
    SimpleDefinedValueContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleDefinedValue) {
            listener.exitSimpleDefinedValue(this);
        }
    };
    // @Override
    SimpleDefinedValueContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleDefinedValue) {
            return visitor.visitSimpleDefinedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleDefinedValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleDefinedValueContext = SimpleDefinedValueContext;
var ActualParameterListContext = /** @class */ (function (_super) {
    __extends(ActualParameterListContext, _super);
    function ActualParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActualParameterListContext.prototype.L_BRACE = function () { return this.getToken(ASN_3gppParser.L_BRACE, 0); };
    ActualParameterListContext.prototype.actualParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ActualParameterContext);
        }
        else {
            return this.getRuleContext(i, ActualParameterContext);
        }
    };
    ActualParameterListContext.prototype.R_BRACE = function () { return this.getToken(ASN_3gppParser.R_BRACE, 0); };
    ActualParameterListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(ActualParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_actualParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActualParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterActualParameterList) {
            listener.enterActualParameterList(this);
        }
    };
    // @Override
    ActualParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitActualParameterList) {
            listener.exitActualParameterList(this);
        }
    };
    // @Override
    ActualParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitActualParameterList) {
            return visitor.visitActualParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActualParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActualParameterListContext = ActualParameterListContext;
var ActualParameterContext = /** @class */ (function (_super) {
    __extends(ActualParameterContext, _super);
    function ActualParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActualParameterContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    ActualParameterContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(ActualParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_actualParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActualParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterActualParameter) {
            listener.enterActualParameter(this);
        }
    };
    // @Override
    ActualParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitActualParameter) {
            listener.exitActualParameter(this);
        }
    };
    // @Override
    ActualParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitActualParameter) {
            return visitor.visitActualParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActualParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActualParameterContext = ActualParameterContext;
var ExceptionSpecContext = /** @class */ (function (_super) {
    __extends(ExceptionSpecContext, _super);
    function ExceptionSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptionSpecContext.prototype.EXCLAM = function () { return this.getToken(ASN_3gppParser.EXCLAM, 0); };
    ExceptionSpecContext.prototype.exceptionIdentification = function () {
        return this.getRuleContext(0, ExceptionIdentificationContext);
    };
    Object.defineProperty(ExceptionSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_exceptionSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExceptionSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterExceptionSpec) {
            listener.enterExceptionSpec(this);
        }
    };
    // @Override
    ExceptionSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitExceptionSpec) {
            listener.exitExceptionSpec(this);
        }
    };
    // @Override
    ExceptionSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitExceptionSpec) {
            return visitor.visitExceptionSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExceptionSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExceptionSpecContext = ExceptionSpecContext;
var ExceptionIdentificationContext = /** @class */ (function (_super) {
    __extends(ExceptionIdentificationContext, _super);
    function ExceptionIdentificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptionIdentificationContext.prototype.signedNumber = function () {
        return this.tryGetRuleContext(0, SignedNumberContext);
    };
    ExceptionIdentificationContext.prototype.definedValue = function () {
        return this.tryGetRuleContext(0, DefinedValueContext);
    };
    ExceptionIdentificationContext.prototype.asnType = function () {
        return this.tryGetRuleContext(0, AsnTypeContext);
    };
    ExceptionIdentificationContext.prototype.COLON = function () { return this.tryGetToken(ASN_3gppParser.COLON, 0); };
    ExceptionIdentificationContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(ExceptionIdentificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_exceptionIdentification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExceptionIdentificationContext.prototype.enterRule = function (listener) {
        if (listener.enterExceptionIdentification) {
            listener.enterExceptionIdentification(this);
        }
    };
    // @Override
    ExceptionIdentificationContext.prototype.exitRule = function (listener) {
        if (listener.exitExceptionIdentification) {
            listener.exitExceptionIdentification(this);
        }
    };
    // @Override
    ExceptionIdentificationContext.prototype.accept = function (visitor) {
        if (visitor.visitExceptionIdentification) {
            return visitor.visitExceptionIdentification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExceptionIdentificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExceptionIdentificationContext = ExceptionIdentificationContext;
var AdditionalEnumerationContext = /** @class */ (function (_super) {
    __extends(AdditionalEnumerationContext, _super);
    function AdditionalEnumerationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditionalEnumerationContext.prototype.enumeration = function () {
        return this.getRuleContext(0, EnumerationContext);
    };
    Object.defineProperty(AdditionalEnumerationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_additionalEnumeration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditionalEnumerationContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditionalEnumeration) {
            listener.enterAdditionalEnumeration(this);
        }
    };
    // @Override
    AdditionalEnumerationContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditionalEnumeration) {
            listener.exitAdditionalEnumeration(this);
        }
    };
    // @Override
    AdditionalEnumerationContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditionalEnumeration) {
            return visitor.visitAdditionalEnumeration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditionalEnumerationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditionalEnumerationContext = AdditionalEnumerationContext;
var IntegerTypeContext = /** @class */ (function (_super) {
    __extends(IntegerTypeContext, _super);
    function IntegerTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerTypeContext.prototype.INTEGER_LITERAL = function () { return this.getToken(ASN_3gppParser.INTEGER_LITERAL, 0); };
    IntegerTypeContext.prototype.L_BRACE = function () { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); };
    IntegerTypeContext.prototype.namedNumberList = function () {
        return this.tryGetRuleContext(0, NamedNumberListContext);
    };
    IntegerTypeContext.prototype.R_BRACE = function () { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(IntegerTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_integerType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerType) {
            listener.enterIntegerType(this);
        }
    };
    // @Override
    IntegerTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerType) {
            listener.exitIntegerType(this);
        }
    };
    // @Override
    IntegerTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerType) {
            return visitor.visitIntegerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerTypeContext = IntegerTypeContext;
var NamedNumberListContext = /** @class */ (function (_super) {
    __extends(NamedNumberListContext, _super);
    function NamedNumberListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedNumberListContext.prototype.namedNumber = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedNumberContext);
        }
        else {
            return this.getRuleContext(i, NamedNumberContext);
        }
    };
    NamedNumberListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(NamedNumberListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_namedNumberList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedNumberListContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedNumberList) {
            listener.enterNamedNumberList(this);
        }
    };
    // @Override
    NamedNumberListContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedNumberList) {
            listener.exitNamedNumberList(this);
        }
    };
    // @Override
    NamedNumberListContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedNumberList) {
            return visitor.visitNamedNumberList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedNumberListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedNumberListContext = NamedNumberListContext;
var ObjectidentifiertypeContext = /** @class */ (function (_super) {
    __extends(ObjectidentifiertypeContext, _super);
    function ObjectidentifiertypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectidentifiertypeContext.prototype.OBJECT_LITERAL = function () { return this.getToken(ASN_3gppParser.OBJECT_LITERAL, 0); };
    ObjectidentifiertypeContext.prototype.IDENTIFIER_LITERAL = function () { return this.getToken(ASN_3gppParser.IDENTIFIER_LITERAL, 0); };
    Object.defineProperty(ObjectidentifiertypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_objectidentifiertype; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectidentifiertypeContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectidentifiertype) {
            listener.enterObjectidentifiertype(this);
        }
    };
    // @Override
    ObjectidentifiertypeContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectidentifiertype) {
            listener.exitObjectidentifiertype(this);
        }
    };
    // @Override
    ObjectidentifiertypeContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectidentifiertype) {
            return visitor.visitObjectidentifiertype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectidentifiertypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectidentifiertypeContext = ObjectidentifiertypeContext;
var ComponentRelationConstraintContext = /** @class */ (function (_super) {
    __extends(ComponentRelationConstraintContext, _super);
    function ComponentRelationConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentRelationConstraintContext.prototype.L_BRACE = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.L_BRACE);
        }
        else {
            return this.getToken(ASN_3gppParser.L_BRACE, i);
        }
    };
    ComponentRelationConstraintContext.prototype.R_BRACE = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.R_BRACE);
        }
        else {
            return this.getToken(ASN_3gppParser.R_BRACE, i);
        }
    };
    ComponentRelationConstraintContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    ComponentRelationConstraintContext.prototype.atNotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtNotationContext);
        }
        else {
            return this.getRuleContext(i, AtNotationContext);
        }
    };
    ComponentRelationConstraintContext.prototype.DOT = function () { return this.tryGetToken(ASN_3gppParser.DOT, 0); };
    ComponentRelationConstraintContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(ComponentRelationConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentRelationConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentRelationConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentRelationConstraint) {
            listener.enterComponentRelationConstraint(this);
        }
    };
    // @Override
    ComponentRelationConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentRelationConstraint) {
            listener.exitComponentRelationConstraint(this);
        }
    };
    // @Override
    ComponentRelationConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentRelationConstraint) {
            return visitor.visitComponentRelationConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentRelationConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentRelationConstraintContext = ComponentRelationConstraintContext;
var AtNotationContext = /** @class */ (function (_super) {
    __extends(AtNotationContext, _super);
    function AtNotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtNotationContext.prototype.componentIdList = function () {
        return this.getRuleContext(0, ComponentIdListContext);
    };
    AtNotationContext.prototype.A_ROND = function () { return this.tryGetToken(ASN_3gppParser.A_ROND, 0); };
    AtNotationContext.prototype.A_ROND_DOT = function () { return this.tryGetToken(ASN_3gppParser.A_ROND_DOT, 0); };
    AtNotationContext.prototype.level = function () {
        return this.tryGetRuleContext(0, LevelContext);
    };
    Object.defineProperty(AtNotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_atNotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtNotationContext.prototype.enterRule = function (listener) {
        if (listener.enterAtNotation) {
            listener.enterAtNotation(this);
        }
    };
    // @Override
    AtNotationContext.prototype.exitRule = function (listener) {
        if (listener.exitAtNotation) {
            listener.exitAtNotation(this);
        }
    };
    // @Override
    AtNotationContext.prototype.accept = function (visitor) {
        if (visitor.visitAtNotation) {
            return visitor.visitAtNotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtNotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtNotationContext = AtNotationContext;
var LevelContext = /** @class */ (function (_super) {
    __extends(LevelContext, _super);
    function LevelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LevelContext.prototype.DOT = function () { return this.tryGetToken(ASN_3gppParser.DOT, 0); };
    LevelContext.prototype.level = function () {
        return this.tryGetRuleContext(0, LevelContext);
    };
    Object.defineProperty(LevelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_level; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LevelContext.prototype.enterRule = function (listener) {
        if (listener.enterLevel) {
            listener.enterLevel(this);
        }
    };
    // @Override
    LevelContext.prototype.exitRule = function (listener) {
        if (listener.exitLevel) {
            listener.exitLevel(this);
        }
    };
    // @Override
    LevelContext.prototype.accept = function (visitor) {
        if (visitor.visitLevel) {
            return visitor.visitLevel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LevelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LevelContext = LevelContext;
var ComponentIdListContext = /** @class */ (function (_super) {
    __extends(ComponentIdListContext, _super);
    function ComponentIdListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentIdListContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    };
    ComponentIdListContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.DOT);
        }
        else {
            return this.getToken(ASN_3gppParser.DOT, i);
        }
    };
    Object.defineProperty(ComponentIdListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_componentIdList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentIdListContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentIdList) {
            listener.enterComponentIdList(this);
        }
    };
    // @Override
    ComponentIdListContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentIdList) {
            listener.exitComponentIdList(this);
        }
    };
    // @Override
    ComponentIdListContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentIdList) {
            return visitor.visitComponentIdList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentIdListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentIdListContext = ComponentIdListContext;
var OctetStringTypeContext = /** @class */ (function (_super) {
    __extends(OctetStringTypeContext, _super);
    function OctetStringTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OctetStringTypeContext.prototype.OCTET_LITERAL = function () { return this.getToken(ASN_3gppParser.OCTET_LITERAL, 0); };
    OctetStringTypeContext.prototype.STRING_LITERAL = function () { return this.getToken(ASN_3gppParser.STRING_LITERAL, 0); };
    Object.defineProperty(OctetStringTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_octetStringType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OctetStringTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterOctetStringType) {
            listener.enterOctetStringType(this);
        }
    };
    // @Override
    OctetStringTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitOctetStringType) {
            listener.exitOctetStringType(this);
        }
    };
    // @Override
    OctetStringTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitOctetStringType) {
            return visitor.visitOctetStringType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OctetStringTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OctetStringTypeContext = OctetStringTypeContext;
var BitStringTypeContext = /** @class */ (function (_super) {
    __extends(BitStringTypeContext, _super);
    function BitStringTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitStringTypeContext.prototype.BIT_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.BIT_LITERAL, 0); };
    BitStringTypeContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.STRING_LITERAL, 0); };
    BitStringTypeContext.prototype.L_BRACE = function () { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); };
    BitStringTypeContext.prototype.namedBitList = function () {
        return this.tryGetRuleContext(0, NamedBitListContext);
    };
    BitStringTypeContext.prototype.R_BRACE = function () { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); };
    Object.defineProperty(BitStringTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_bitStringType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitStringTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBitStringType) {
            listener.enterBitStringType(this);
        }
    };
    // @Override
    BitStringTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBitStringType) {
            listener.exitBitStringType(this);
        }
    };
    // @Override
    BitStringTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBitStringType) {
            return visitor.visitBitStringType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitStringTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitStringTypeContext = BitStringTypeContext;
var NamedBitListContext = /** @class */ (function (_super) {
    __extends(NamedBitListContext, _super);
    function NamedBitListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedBitListContext.prototype.namedBit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedBitContext);
        }
        else {
            return this.getRuleContext(i, NamedBitContext);
        }
    };
    NamedBitListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    };
    Object.defineProperty(NamedBitListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_namedBitList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedBitListContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedBitList) {
            listener.enterNamedBitList(this);
        }
    };
    // @Override
    NamedBitListContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedBitList) {
            listener.exitNamedBitList(this);
        }
    };
    // @Override
    NamedBitListContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedBitList) {
            return visitor.visitNamedBitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedBitListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedBitListContext = NamedBitListContext;
var NamedBitContext = /** @class */ (function (_super) {
    __extends(NamedBitContext, _super);
    function NamedBitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedBitContext.prototype.IDENTIFIER = function () { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); };
    NamedBitContext.prototype.L_PARAN = function () { return this.getToken(ASN_3gppParser.L_PARAN, 0); };
    NamedBitContext.prototype.R_PARAN = function () { return this.getToken(ASN_3gppParser.R_PARAN, 0); };
    NamedBitContext.prototype.NUMBER = function () { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); };
    NamedBitContext.prototype.definedValue = function () {
        return this.tryGetRuleContext(0, DefinedValueContext);
    };
    Object.defineProperty(NamedBitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_namedBit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedBitContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedBit) {
            listener.enterNamedBit(this);
        }
    };
    // @Override
    NamedBitContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedBit) {
            listener.exitNamedBit(this);
        }
    };
    // @Override
    NamedBitContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedBit) {
            return visitor.visitNamedBit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedBitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedBitContext = NamedBitContext;
var BooleanValueContext = /** @class */ (function (_super) {
    __extends(BooleanValueContext, _super);
    function BooleanValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BooleanValueContext.prototype.TRUE_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.TRUE_LITERAL, 0); };
    BooleanValueContext.prototype.FALSE_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.FALSE_LITERAL, 0); };
    BooleanValueContext.prototype.TRUE_SMALL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.TRUE_SMALL_LITERAL, 0); };
    BooleanValueContext.prototype.FALSE_SMALL_LITERAL = function () { return this.tryGetToken(ASN_3gppParser.FALSE_SMALL_LITERAL, 0); };
    Object.defineProperty(BooleanValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ASN_3gppParser.RULE_booleanValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanValueContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanValue) {
            listener.enterBooleanValue(this);
        }
    };
    // @Override
    BooleanValueContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanValue) {
            listener.exitBooleanValue(this);
        }
    };
    // @Override
    BooleanValueContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanValue) {
            return visitor.visitBooleanValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanValueContext = BooleanValueContext;
