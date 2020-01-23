"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dart2/Dart2.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Dart2Parser = /** @class */ (function (_super) {
    __extends(Dart2Parser, _super);
    function Dart2Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(Dart2Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(Dart2Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return Dart2Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dart2Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Dart2.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dart2Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return Dart2Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dart2Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return Dart2Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    Dart2Parser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, Dart2Parser.RULE_compilationUnit);
        try {
            this.state = 348;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 346;
                        this.libraryDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 347;
                        this.partDeclaration();
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
    Dart2Parser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, Dart2Parser.RULE_variableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this.declaredIdentifier();
                this.state = 355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 351;
                            this.match(Dart2Parser.T__0);
                            this.state = 352;
                            this.identifier();
                        }
                    }
                    this.state = 357;
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
    Dart2Parser.prototype.declaredIdentifier = function () {
        var _localctx = new DeclaredIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, Dart2Parser.RULE_declaredIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this.metadata();
                this.state = 359;
                this.finalConstVarOrType();
                this.state = 360;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.finalConstVarOrType = function () {
        var _localctx = new FinalConstVarOrTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, Dart2Parser.RULE_finalConstVarOrType);
        try {
            this.state = 371;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 362;
                        this.match(Dart2Parser.T__1);
                        this.state = 364;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                            case 1:
                                {
                                    this.state = 363;
                                    this.dtype();
                                }
                                break;
                        }
                    }
                    break;
                case Dart2Parser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 366;
                        this.match(Dart2Parser.T__2);
                        this.state = 368;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                            case 1:
                                {
                                    this.state = 367;
                                    this.dtype();
                                }
                                break;
                        }
                    }
                    break;
                case Dart2Parser.T__3:
                case Dart2Parser.T__5:
                case Dart2Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 370;
                        this.varOrType();
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
    Dart2Parser.prototype.varOrType = function () {
        var _localctx = new VarOrTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, Dart2Parser.RULE_varOrType);
        try {
            this.state = 375;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 373;
                        this.match(Dart2Parser.T__3);
                    }
                    break;
                case Dart2Parser.T__5:
                case Dart2Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 374;
                        this.dtype();
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
    Dart2Parser.prototype.initializedVariableDeclaration = function () {
        var _localctx = new InitializedVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, Dart2Parser.RULE_initializedVariableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.declaredIdentifier();
                this.state = 380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__4) {
                    {
                        this.state = 378;
                        this.match(Dart2Parser.T__4);
                        this.state = 379;
                        this.expression();
                    }
                }
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 382;
                            this.match(Dart2Parser.T__0);
                            this.state = 383;
                            this.initializedIdentifier();
                        }
                    }
                    this.state = 388;
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
    Dart2Parser.prototype.initializedIdentifier = function () {
        var _localctx = new InitializedIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, Dart2Parser.RULE_initializedIdentifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 389;
                this.identifier();
                this.state = 392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__4) {
                    {
                        this.state = 390;
                        this.match(Dart2Parser.T__4);
                        this.state = 391;
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
    Dart2Parser.prototype.initializedIdentifierList = function () {
        var _localctx = new InitializedIdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, Dart2Parser.RULE_initializedIdentifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 394;
                this.initializedIdentifier();
                this.state = 399;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 395;
                            this.match(Dart2Parser.T__0);
                            this.state = 396;
                            this.initializedIdentifier();
                        }
                    }
                    this.state = 401;
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
    Dart2Parser.prototype.functionSignature = function () {
        var _localctx = new FunctionSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, Dart2Parser.RULE_functionSignature);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 402;
                this.metadata();
                this.state = 404;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 403;
                            this.returnType();
                        }
                        break;
                }
                this.state = 406;
                this.identifier();
                this.state = 407;
                this.formalParameterPart();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.formalParameterPart = function () {
        var _localctx = new FormalParameterPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, Dart2Parser.RULE_formalParameterPart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__38) {
                    {
                        this.state = 409;
                        this.typeParameters();
                    }
                }
                this.state = 412;
                this.formalParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.returnType = function () {
        var _localctx = new ReturnTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, Dart2Parser.RULE_returnType);
        try {
            this.state = 416;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 414;
                        this.match(Dart2Parser.T__5);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 415;
                        this.dtype();
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
    Dart2Parser.prototype.functionBody = function () {
        var _localctx = new FunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, Dart2Parser.RULE_functionBody);
        var _la;
        try {
            this.state = 429;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 419;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__6) {
                            {
                                this.state = 418;
                                this.match(Dart2Parser.T__6);
                            }
                        }
                        this.state = 421;
                        this.match(Dart2Parser.T__7);
                        this.state = 422;
                        this.expression();
                        this.state = 423;
                        this.match(Dart2Parser.T__8);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 426;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__6) | (1 << Dart2Parser.T__9) | (1 << Dart2Parser.T__10))) !== 0)) {
                            {
                                this.state = 425;
                                _la = this._input.LA(1);
                                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__6) | (1 << Dart2Parser.T__9) | (1 << Dart2Parser.T__10))) !== 0))) {
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
                        this.state = 428;
                        this.block();
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
    Dart2Parser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, Dart2Parser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.match(Dart2Parser.T__11);
                this.state = 432;
                this.statements();
                this.state = 433;
                this.match(Dart2Parser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.formalParameterList = function () {
        var _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, Dart2Parser.RULE_formalParameterList);
        var _la;
        try {
            this.state = 453;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 435;
                        this.match(Dart2Parser.T__13);
                        this.state = 436;
                        this.match(Dart2Parser.T__14);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 437;
                        this.match(Dart2Parser.T__13);
                        this.state = 438;
                        this.normalFormalParameters();
                        this.state = 439;
                        this.match(Dart2Parser.T__14);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 441;
                        this.match(Dart2Parser.T__13);
                        this.state = 442;
                        this.normalFormalParameters();
                        this.state = 445;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__0) {
                            {
                                this.state = 443;
                                this.match(Dart2Parser.T__0);
                                this.state = 444;
                                this.optionalFormalParameters();
                            }
                        }
                        this.state = 447;
                        this.match(Dart2Parser.T__14);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 449;
                        this.match(Dart2Parser.T__13);
                        this.state = 450;
                        this.optionalFormalParameters();
                        this.state = 451;
                        this.match(Dart2Parser.T__14);
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
    Dart2Parser.prototype.normalFormalParameters = function () {
        var _localctx = new NormalFormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, Dart2Parser.RULE_normalFormalParameters);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.normalFormalParameter();
                this.state = 460;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 456;
                                this.match(Dart2Parser.T__0);
                                this.state = 457;
                                this.normalFormalParameter();
                            }
                        }
                    }
                    this.state = 462;
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
    Dart2Parser.prototype.optionalFormalParameters = function () {
        var _localctx = new OptionalFormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, Dart2Parser.RULE_optionalFormalParameters);
        try {
            this.state = 465;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 463;
                        this.optionalPositionalFormalParameters();
                    }
                    break;
                case Dart2Parser.T__11:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 464;
                        this.namedFormalParameters();
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
    Dart2Parser.prototype.optionalPositionalFormalParameters = function () {
        var _localctx = new OptionalPositionalFormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, Dart2Parser.RULE_optionalPositionalFormalParameters);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 467;
                this.match(Dart2Parser.T__15);
                this.state = 468;
                this.defaultFormalParameter();
                this.state = 473;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 469;
                                this.match(Dart2Parser.T__0);
                                this.state = 470;
                                this.defaultFormalParameter();
                            }
                        }
                    }
                    this.state = 475;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
                this.state = 477;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__0) {
                    {
                        this.state = 476;
                        this.match(Dart2Parser.T__0);
                    }
                }
                this.state = 479;
                this.match(Dart2Parser.T__16);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.namedFormalParameters = function () {
        var _localctx = new NamedFormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, Dart2Parser.RULE_namedFormalParameters);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this.match(Dart2Parser.T__11);
                this.state = 482;
                this.defaultNamedParameter();
                this.state = 487;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 483;
                                this.match(Dart2Parser.T__0);
                                this.state = 484;
                                this.defaultNamedParameter();
                            }
                        }
                    }
                    this.state = 489;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                }
                this.state = 491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__0) {
                    {
                        this.state = 490;
                        this.match(Dart2Parser.T__0);
                    }
                }
                this.state = 493;
                this.match(Dart2Parser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.normalFormalParameter = function () {
        var _localctx = new NormalFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, Dart2Parser.RULE_normalFormalParameter);
        try {
            this.state = 498;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 495;
                        this.functionFormalParameter();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 496;
                        this.fieldFormalParameter();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 497;
                        this.simpleFormalParameter();
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
    Dart2Parser.prototype.functionFormalParameter = function () {
        var _localctx = new FunctionFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, Dart2Parser.RULE_functionFormalParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 500;
                this.metadata();
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__17) {
                    {
                        this.state = 501;
                        this.match(Dart2Parser.T__17);
                    }
                }
                this.state = 505;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 504;
                            this.returnType();
                        }
                        break;
                }
                this.state = 507;
                this.identifier();
                this.state = 508;
                this.formalParameterPart();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.simpleFormalParameter = function () {
        var _localctx = new SimpleFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, Dart2Parser.RULE_simpleFormalParameter);
        var _la;
        try {
            this.state = 517;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 510;
                        this.declaredIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 511;
                        this.metadata();
                        this.state = 513;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__17) {
                            {
                                this.state = 512;
                                this.match(Dart2Parser.T__17);
                            }
                        }
                        this.state = 515;
                        this.identifier();
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
    Dart2Parser.prototype.fieldFormalParameter = function () {
        var _localctx = new FieldFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, Dart2Parser.RULE_fieldFormalParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 519;
                this.metadata();
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5))) !== 0) || _la === Dart2Parser.IDENTIFIER) {
                    {
                        this.state = 520;
                        this.finalConstVarOrType();
                    }
                }
                this.state = 523;
                this.match(Dart2Parser.T__18);
                this.state = 524;
                this.match(Dart2Parser.T__19);
                this.state = 525;
                this.identifier();
                this.state = 527;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
                    {
                        this.state = 526;
                        this.formalParameterPart();
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
    Dart2Parser.prototype.defaultFormalParameter = function () {
        var _localctx = new DefaultFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, Dart2Parser.RULE_defaultFormalParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 529;
                this.normalFormalParameter();
                this.state = 532;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__4) {
                    {
                        this.state = 530;
                        this.match(Dart2Parser.T__4);
                        this.state = 531;
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
    Dart2Parser.prototype.defaultNamedParameter = function () {
        var _localctx = new DefaultNamedParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, Dart2Parser.RULE_defaultNamedParameter);
        var _la;
        try {
            this.state = 544;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 534;
                        this.normalFormalParameter();
                        this.state = 537;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__4) {
                            {
                                this.state = 535;
                                this.match(Dart2Parser.T__4);
                                this.state = 536;
                                this.expression();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 539;
                        this.normalFormalParameter();
                        this.state = 542;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__20) {
                            {
                                this.state = 540;
                                this.match(Dart2Parser.T__20);
                                this.state = 541;
                                this.expression();
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
    Dart2Parser.prototype.classDefinition = function () {
        var _localctx = new ClassDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, Dart2Parser.RULE_classDefinition);
        var _la;
        try {
            this.state = 582;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 546;
                        this.metadata();
                        this.state = 548;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__21) {
                            {
                                this.state = 547;
                                this.match(Dart2Parser.T__21);
                            }
                        }
                        this.state = 550;
                        this.match(Dart2Parser.T__22);
                        this.state = 551;
                        this.identifier();
                        this.state = 553;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__38) {
                            {
                                this.state = 552;
                                this.typeParameters();
                            }
                        }
                        this.state = 556;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__35) {
                            {
                                this.state = 555;
                                this.superclass();
                            }
                        }
                        this.state = 559;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__23) {
                            {
                                this.state = 558;
                                this.mixins();
                            }
                        }
                        this.state = 562;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__36) {
                            {
                                this.state = 561;
                                this.interfaces();
                            }
                        }
                        this.state = 564;
                        this.match(Dart2Parser.T__11);
                        this.state = 570;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__40 - 32)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Dart2Parser.T__109 - 110)) | (1 << (Dart2Parser.T__110 - 110)) | (1 << (Dart2Parser.T__113 - 110)) | (1 << (Dart2Parser.T__114 - 110)) | (1 << (Dart2Parser.T__116 - 110)) | (1 << (Dart2Parser.IDENTIFIER - 110)))) !== 0)) {
                            {
                                {
                                    this.state = 565;
                                    this.metadata();
                                    this.state = 566;
                                    this.classMemberDefinition();
                                }
                            }
                            this.state = 572;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 573;
                        this.match(Dart2Parser.T__12);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 575;
                        this.metadata();
                        this.state = 577;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__21) {
                            {
                                this.state = 576;
                                this.match(Dart2Parser.T__21);
                            }
                        }
                        this.state = 579;
                        this.match(Dart2Parser.T__22);
                        this.state = 580;
                        this.mixinApplicationClass();
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
    Dart2Parser.prototype.mixins = function () {
        var _localctx = new MixinsContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, Dart2Parser.RULE_mixins);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                this.match(Dart2Parser.T__23);
                this.state = 585;
                this.typeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.classMemberDefinition = function () {
        var _localctx = new ClassMemberDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, Dart2Parser.RULE_classMemberDefinition);
        try {
            this.state = 593;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 587;
                        this.declaration();
                        this.state = 588;
                        this.match(Dart2Parser.T__8);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 590;
                        this.methodSignature();
                        this.state = 591;
                        this.functionBody();
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
    Dart2Parser.prototype.methodSignature = function () {
        var _localctx = new MethodSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, Dart2Parser.RULE_methodSignature);
        var _la;
        try {
            this.state = 613;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 595;
                        this.constructorSignature();
                        this.state = 597;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__20) {
                            {
                                this.state = 596;
                                this.initializers();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 599;
                        this.factoryConstructorSignature();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 601;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                            case 1:
                                {
                                    this.state = 600;
                                    this.match(Dart2Parser.T__24);
                                }
                                break;
                        }
                        this.state = 603;
                        this.functionSignature();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 605;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__24) {
                            {
                                this.state = 604;
                                this.match(Dart2Parser.T__24);
                            }
                        }
                        this.state = 607;
                        this.getterSignature();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 609;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__24) {
                            {
                                this.state = 608;
                                this.match(Dart2Parser.T__24);
                            }
                        }
                        this.state = 611;
                        this.setterSignature();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 612;
                        this.operatorSignature();
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
    Dart2Parser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, Dart2Parser.RULE_declaration);
        var _la;
        try {
            this.state = 673;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 615;
                        this.constantConstructorSignature();
                        this.state = 618;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                            case 1:
                                {
                                    this.state = 616;
                                    this.redirection();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 617;
                                    this.initializers();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 620;
                        this.constructorSignature();
                        this.state = 623;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                            case 1:
                                {
                                    this.state = 621;
                                    this.redirection();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 622;
                                    this.initializers();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 625;
                        this.match(Dart2Parser.T__25);
                        this.state = 626;
                        this.constantConstructorSignature();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 627;
                        this.match(Dart2Parser.T__25);
                        this.state = 628;
                        this.constructorSignature();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 633;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__25) {
                            {
                                this.state = 629;
                                this.match(Dart2Parser.T__25);
                                this.state = 631;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Dart2Parser.T__24) {
                                    {
                                        this.state = 630;
                                        this.match(Dart2Parser.T__24);
                                    }
                                }
                            }
                        }
                        this.state = 635;
                        this.getterSignature();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 640;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__25) {
                            {
                                this.state = 636;
                                this.match(Dart2Parser.T__25);
                                this.state = 638;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Dart2Parser.T__24) {
                                    {
                                        this.state = 637;
                                        this.match(Dart2Parser.T__24);
                                    }
                                }
                            }
                        }
                        this.state = 642;
                        this.setterSignature();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 644;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__25) {
                            {
                                this.state = 643;
                                this.match(Dart2Parser.T__25);
                            }
                        }
                        this.state = 646;
                        this.operatorSignature();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 651;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                            case 1:
                                {
                                    this.state = 647;
                                    this.match(Dart2Parser.T__25);
                                    this.state = 649;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 648;
                                                this.match(Dart2Parser.T__24);
                                            }
                                            break;
                                    }
                                }
                                break;
                        }
                        this.state = 653;
                        this.functionSignature();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 654;
                        this.match(Dart2Parser.T__24);
                        this.state = 655;
                        _la = this._input.LA(1);
                        if (!(_la === Dart2Parser.T__1 || _la === Dart2Parser.T__2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 657;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                            case 1:
                                {
                                    this.state = 656;
                                    this.dtype();
                                }
                                break;
                        }
                        this.state = 659;
                        this.staticFinalDeclarationList();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 660;
                        this.match(Dart2Parser.T__1);
                        this.state = 662;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                            case 1:
                                {
                                    this.state = 661;
                                    this.dtype();
                                }
                                break;
                        }
                        this.state = 664;
                        this.initializedIdentifierList();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 666;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__17 || _la === Dart2Parser.T__24) {
                            {
                                this.state = 665;
                                _la = this._input.LA(1);
                                if (!(_la === Dart2Parser.T__17 || _la === Dart2Parser.T__24)) {
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
                        this.state = 670;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Dart2Parser.T__3:
                                {
                                    this.state = 668;
                                    this.match(Dart2Parser.T__3);
                                }
                                break;
                            case Dart2Parser.T__5:
                            case Dart2Parser.IDENTIFIER:
                                {
                                    this.state = 669;
                                    this.dtype();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 672;
                        this.initializedIdentifierList();
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
    Dart2Parser.prototype.staticFinalDeclarationList = function () {
        var _localctx = new StaticFinalDeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, Dart2Parser.RULE_staticFinalDeclarationList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 675;
                this.staticFinalDeclaration();
                this.state = 680;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 676;
                            this.match(Dart2Parser.T__0);
                            this.state = 677;
                            this.staticFinalDeclaration();
                        }
                    }
                    this.state = 682;
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
    Dart2Parser.prototype.staticFinalDeclaration = function () {
        var _localctx = new StaticFinalDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, Dart2Parser.RULE_staticFinalDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 683;
                this.identifier();
                this.state = 684;
                this.match(Dart2Parser.T__4);
                this.state = 685;
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
    Dart2Parser.prototype.operatorSignature = function () {
        var _localctx = new OperatorSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, Dart2Parser.RULE_operatorSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
                    {
                        this.state = 687;
                        this.returnType();
                    }
                }
                this.state = 690;
                this.match(Dart2Parser.T__26);
                this.state = 691;
                this.operator();
                this.state = 692;
                this.formalParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.operator = function () {
        var _localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, Dart2Parser.RULE_operator);
        try {
            this.state = 698;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__27:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 694;
                        this.match(Dart2Parser.T__27);
                    }
                    break;
                case Dart2Parser.T__30:
                case Dart2Parser.T__38:
                case Dart2Parser.T__39:
                case Dart2Parser.T__67:
                case Dart2Parser.T__68:
                case Dart2Parser.T__69:
                case Dart2Parser.T__70:
                case Dart2Parser.T__71:
                case Dart2Parser.T__72:
                case Dart2Parser.T__73:
                case Dart2Parser.T__74:
                case Dart2Parser.T__75:
                case Dart2Parser.T__76:
                case Dart2Parser.T__77:
                case Dart2Parser.T__78:
                case Dart2Parser.T__79:
                case Dart2Parser.T__80:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 695;
                        this.binaryOperator();
                    }
                    break;
                case Dart2Parser.T__28:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 696;
                        this.match(Dart2Parser.T__28);
                    }
                    break;
                case Dart2Parser.T__29:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 697;
                        this.match(Dart2Parser.T__29);
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
    Dart2Parser.prototype.binaryOperator = function () {
        var _localctx = new BinaryOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, Dart2Parser.RULE_binaryOperator);
        try {
            this.state = 706;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__77:
                case Dart2Parser.T__78:
                case Dart2Parser.T__79:
                case Dart2Parser.T__80:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 700;
                        this.multiplicativeOperator();
                    }
                    break;
                case Dart2Parser.T__75:
                case Dart2Parser.T__76:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 701;
                        this.additiveOperator();
                    }
                    break;
                case Dart2Parser.T__72:
                case Dart2Parser.T__73:
                case Dart2Parser.T__74:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 702;
                        this.shiftOperator();
                    }
                    break;
                case Dart2Parser.T__38:
                case Dart2Parser.T__39:
                case Dart2Parser.T__67:
                case Dart2Parser.T__68:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 703;
                        this.relationalOperator();
                    }
                    break;
                case Dart2Parser.T__30:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 704;
                        this.match(Dart2Parser.T__30);
                    }
                    break;
                case Dart2Parser.T__69:
                case Dart2Parser.T__70:
                case Dart2Parser.T__71:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 705;
                        this.bitwiseOperator();
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
    Dart2Parser.prototype.getterSignature = function () {
        var _localctx = new GetterSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, Dart2Parser.RULE_getterSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
                    {
                        this.state = 708;
                        this.returnType();
                    }
                }
                this.state = 711;
                this.match(Dart2Parser.T__31);
                this.state = 712;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.setterSignature = function () {
        var _localctx = new SetterSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, Dart2Parser.RULE_setterSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 715;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
                    {
                        this.state = 714;
                        this.returnType();
                    }
                }
                this.state = 717;
                this.match(Dart2Parser.T__32);
                this.state = 718;
                this.identifier();
                this.state = 719;
                this.formalParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.constructorSignature = function () {
        var _localctx = new ConstructorSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, Dart2Parser.RULE_constructorSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                this.identifier();
                this.state = 724;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__19) {
                    {
                        this.state = 722;
                        this.match(Dart2Parser.T__19);
                        this.state = 723;
                        this.identifier();
                    }
                }
                this.state = 726;
                this.formalParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.redirection = function () {
        var _localctx = new RedirectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, Dart2Parser.RULE_redirection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 728;
                this.match(Dart2Parser.T__20);
                this.state = 729;
                this.match(Dart2Parser.T__18);
                this.state = 732;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__19) {
                    {
                        this.state = 730;
                        this.match(Dart2Parser.T__19);
                        this.state = 731;
                        this.identifier();
                    }
                }
                this.state = 734;
                this.arguments();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.initializers = function () {
        var _localctx = new InitializersContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, Dart2Parser.RULE_initializers);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 736;
                this.match(Dart2Parser.T__20);
                this.state = 737;
                this.initializerListEntry();
                this.state = 742;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 738;
                            this.match(Dart2Parser.T__0);
                            this.state = 739;
                            this.initializerListEntry();
                        }
                    }
                    this.state = 744;
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
    Dart2Parser.prototype.initializerListEntry = function () {
        var _localctx = new InitializerListEntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, Dart2Parser.RULE_initializerListEntry);
        try {
            this.state = 754;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 745;
                        this.match(Dart2Parser.T__33);
                        this.state = 746;
                        this.arguments();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 747;
                        this.match(Dart2Parser.T__33);
                        this.state = 748;
                        this.match(Dart2Parser.T__19);
                        this.state = 749;
                        this.identifier();
                        this.state = 750;
                        this.arguments();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 752;
                        this.fieldInitializer();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 753;
                        this.assertion();
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
    Dart2Parser.prototype.fieldInitializer = function () {
        var _localctx = new FieldInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, Dart2Parser.RULE_fieldInitializer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 758;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__18) {
                    {
                        this.state = 756;
                        this.match(Dart2Parser.T__18);
                        this.state = 757;
                        this.match(Dart2Parser.T__19);
                    }
                }
                this.state = 760;
                this.identifier();
                this.state = 761;
                this.match(Dart2Parser.T__4);
                this.state = 762;
                this.conditionalExpression();
                this.state = 766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__49) {
                    {
                        {
                            this.state = 763;
                            this.cascadeSection();
                        }
                    }
                    this.state = 768;
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
    Dart2Parser.prototype.factoryConstructorSignature = function () {
        var _localctx = new FactoryConstructorSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, Dart2Parser.RULE_factoryConstructorSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 769;
                this.match(Dart2Parser.T__34);
                this.state = 770;
                this.identifier();
                this.state = 773;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__19) {
                    {
                        this.state = 771;
                        this.match(Dart2Parser.T__19);
                        this.state = 772;
                        this.identifier();
                    }
                }
                this.state = 775;
                this.formalParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.redirectingFactoryConstructorSignature = function () {
        var _localctx = new RedirectingFactoryConstructorSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, Dart2Parser.RULE_redirectingFactoryConstructorSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 778;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__2) {
                    {
                        this.state = 777;
                        this.match(Dart2Parser.T__2);
                    }
                }
                this.state = 780;
                this.match(Dart2Parser.T__34);
                this.state = 781;
                this.identifier();
                this.state = 784;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__19) {
                    {
                        this.state = 782;
                        this.match(Dart2Parser.T__19);
                        this.state = 783;
                        this.identifier();
                    }
                }
                this.state = 786;
                this.formalParameterList();
                this.state = 787;
                this.match(Dart2Parser.T__4);
                this.state = 788;
                this.dtype();
                this.state = 791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__19) {
                    {
                        this.state = 789;
                        this.match(Dart2Parser.T__19);
                        this.state = 790;
                        this.identifier();
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
    Dart2Parser.prototype.constantConstructorSignature = function () {
        var _localctx = new ConstantConstructorSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, Dart2Parser.RULE_constantConstructorSignature);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 793;
                this.match(Dart2Parser.T__2);
                this.state = 794;
                this.qualified();
                this.state = 795;
                this.formalParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.superclass = function () {
        var _localctx = new SuperclassContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, Dart2Parser.RULE_superclass);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 797;
                this.match(Dart2Parser.T__35);
                this.state = 798;
                this.dtype();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.interfaces = function () {
        var _localctx = new InterfacesContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, Dart2Parser.RULE_interfaces);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 800;
                this.match(Dart2Parser.T__36);
                this.state = 801;
                this.typeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.mixinApplicationClass = function () {
        var _localctx = new MixinApplicationClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, Dart2Parser.RULE_mixinApplicationClass);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 803;
                this.identifier();
                this.state = 805;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__38) {
                    {
                        this.state = 804;
                        this.typeParameters();
                    }
                }
                this.state = 807;
                this.match(Dart2Parser.T__4);
                this.state = 808;
                this.mixinApplication();
                this.state = 809;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.mixinApplication = function () {
        var _localctx = new MixinApplicationContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, Dart2Parser.RULE_mixinApplication);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 811;
                this.dtype();
                this.state = 812;
                this.mixins();
                this.state = 814;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__36) {
                    {
                        this.state = 813;
                        this.interfaces();
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
    Dart2Parser.prototype.enumType = function () {
        var _localctx = new EnumTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, Dart2Parser.RULE_enumType);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                this.metadata();
                this.state = 817;
                this.match(Dart2Parser.T__37);
                this.state = 818;
                this.identifier();
                this.state = 819;
                this.match(Dart2Parser.T__11);
                this.state = 820;
                this.enumEntry();
                this.state = 825;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 821;
                                this.match(Dart2Parser.T__0);
                                this.state = 822;
                                this.enumEntry();
                            }
                        }
                    }
                    this.state = 827;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                }
                this.state = 829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__0) {
                    {
                        this.state = 828;
                        this.match(Dart2Parser.T__0);
                    }
                }
                this.state = 831;
                this.match(Dart2Parser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.enumEntry = function () {
        var _localctx = new EnumEntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, Dart2Parser.RULE_enumEntry);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 833;
                this.metadata();
                this.state = 834;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.typeParameter = function () {
        var _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, Dart2Parser.RULE_typeParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 836;
                this.metadata();
                this.state = 837;
                this.identifier();
                this.state = 840;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__35) {
                    {
                        this.state = 838;
                        this.match(Dart2Parser.T__35);
                        this.state = 839;
                        this.dtype();
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
    Dart2Parser.prototype.typeParameters = function () {
        var _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, Dart2Parser.RULE_typeParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this.match(Dart2Parser.T__38);
                this.state = 843;
                this.typeParameter();
                this.state = 848;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 844;
                            this.match(Dart2Parser.T__0);
                            this.state = 845;
                            this.typeParameter();
                        }
                    }
                    this.state = 850;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 851;
                this.match(Dart2Parser.T__39);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.metadata = function () {
        var _localctx = new MetadataContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, Dart2Parser.RULE_metadata);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 864;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 853;
                                this.match(Dart2Parser.T__40);
                                this.state = 854;
                                this.qualified();
                                this.state = 857;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Dart2Parser.T__19) {
                                    {
                                        this.state = 855;
                                        this.match(Dart2Parser.T__19);
                                        this.state = 856;
                                        this.identifier();
                                    }
                                }
                                this.state = 860;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === Dart2Parser.T__13) {
                                    {
                                        this.state = 859;
                                        this.arguments();
                                    }
                                }
                            }
                        }
                    }
                    this.state = 866;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
    Dart2Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, Dart2Parser.RULE_expression);
        var _la;
        try {
            this.state = 879;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 867;
                        this.assignableExpression();
                        this.state = 868;
                        this.assignmentOperator();
                        this.state = 869;
                        this.expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 871;
                        this.conditionalExpression();
                        this.state = 875;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === Dart2Parser.T__49) {
                            {
                                {
                                    this.state = 872;
                                    this.cascadeSection();
                                }
                            }
                            this.state = 877;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 878;
                        this.throwExpression();
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
    Dart2Parser.prototype.expressionWithoutCascade = function () {
        var _localctx = new ExpressionWithoutCascadeContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, Dart2Parser.RULE_expressionWithoutCascade);
        try {
            this.state = 887;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 881;
                        this.assignableExpression();
                        this.state = 882;
                        this.assignmentOperator();
                        this.state = 883;
                        this.expressionWithoutCascade();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 885;
                        this.conditionalExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 886;
                        this.throwExpressionWithoutCascade();
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
    Dart2Parser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, Dart2Parser.RULE_expressionList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 889;
                this.expression();
                this.state = 894;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 890;
                                this.match(Dart2Parser.T__0);
                                this.state = 891;
                                this.expression();
                            }
                        }
                    }
                    this.state = 896;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
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
    Dart2Parser.prototype.primary = function () {
        var _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, Dart2Parser.RULE_primary);
        try {
            this.state = 909;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 897;
                        this.thisExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 898;
                        this.match(Dart2Parser.T__33);
                        this.state = 899;
                        this.unconditionalAssignableSelector();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 900;
                        this.functionExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 901;
                        this.literal();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 902;
                        this.identifier();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 903;
                        this.nayaExpression();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 904;
                        this.constObjectExpression();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 905;
                        this.match(Dart2Parser.T__13);
                        this.state = 906;
                        this.expression();
                        this.state = 907;
                        this.match(Dart2Parser.T__14);
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
    Dart2Parser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, Dart2Parser.RULE_literal);
        try {
            this.state = 918;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 911;
                        this.nullLiteral();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 912;
                        this.booleanLiteral();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 913;
                        this.numericLiteral();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 914;
                        this.stringLiteral();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 915;
                        this.symbolLiteral();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 916;
                        this.mapLiteral();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 917;
                        this.listLiteral();
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
    Dart2Parser.prototype.nullLiteral = function () {
        var _localctx = new NullLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, Dart2Parser.RULE_nullLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 920;
                this.match(Dart2Parser.T__41);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.numericLiteral = function () {
        var _localctx = new NumericLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, Dart2Parser.RULE_numericLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 922;
                _la = this._input.LA(1);
                if (!(_la === Dart2Parser.NUMBER || _la === Dart2Parser.HEX_NUMBER)) {
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
    Dart2Parser.prototype.booleanLiteral = function () {
        var _localctx = new BooleanLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, Dart2Parser.RULE_booleanLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 924;
                _la = this._input.LA(1);
                if (!(_la === Dart2Parser.T__42 || _la === Dart2Parser.T__43)) {
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
    Dart2Parser.prototype.stringLiteral = function () {
        var _localctx = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, Dart2Parser.RULE_stringLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 927;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 926;
                            _la = this._input.LA(1);
                            if (!(_la === Dart2Parser.SingleLineString || _la === Dart2Parser.MultiLineString)) {
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
                    this.state = 929;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === Dart2Parser.SingleLineString || _la === Dart2Parser.MultiLineString);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.stringInterpolation = function () {
        var _localctx = new StringInterpolationContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, Dart2Parser.RULE_stringInterpolation);
        try {
            this.state = 937;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__44:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 931;
                        this.match(Dart2Parser.T__44);
                        this.state = 932;
                        this.identifier();
                    }
                    break;
                case Dart2Parser.T__45:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 933;
                        this.match(Dart2Parser.T__45);
                        this.state = 934;
                        this.expression();
                        this.state = 935;
                        this.match(Dart2Parser.T__12);
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
    Dart2Parser.prototype.symbolLiteral = function () {
        var _localctx = new SymbolLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, Dart2Parser.RULE_symbolLiteral);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 939;
                this.match(Dart2Parser.T__46);
                this.state = 949;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Dart2Parser.T__27:
                    case Dart2Parser.T__28:
                    case Dart2Parser.T__29:
                    case Dart2Parser.T__30:
                    case Dart2Parser.T__38:
                    case Dart2Parser.T__39:
                    case Dart2Parser.T__67:
                    case Dart2Parser.T__68:
                    case Dart2Parser.T__69:
                    case Dart2Parser.T__70:
                    case Dart2Parser.T__71:
                    case Dart2Parser.T__72:
                    case Dart2Parser.T__73:
                    case Dart2Parser.T__74:
                    case Dart2Parser.T__75:
                    case Dart2Parser.T__76:
                    case Dart2Parser.T__77:
                    case Dart2Parser.T__78:
                    case Dart2Parser.T__79:
                    case Dart2Parser.T__80:
                        {
                            this.state = 940;
                            this.operator();
                        }
                        break;
                    case Dart2Parser.IDENTIFIER:
                        {
                            {
                                this.state = 941;
                                this.identifier();
                                this.state = 946;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 942;
                                                this.match(Dart2Parser.T__0);
                                                this.state = 943;
                                                this.identifier();
                                            }
                                        }
                                    }
                                    this.state = 948;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                                }
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
    Dart2Parser.prototype.listLiteral = function () {
        var _localctx = new ListLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, Dart2Parser.RULE_listLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 952;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__2) {
                    {
                        this.state = 951;
                        this.match(Dart2Parser.T__2);
                    }
                }
                this.state = 955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__38) {
                    {
                        this.state = 954;
                        this.typeArguments();
                    }
                }
                this.state = 957;
                this.match(Dart2Parser.T__15);
                this.state = 962;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                    {
                        this.state = 958;
                        this.expressionList();
                        this.state = 960;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__0) {
                            {
                                this.state = 959;
                                this.match(Dart2Parser.T__0);
                            }
                        }
                    }
                }
                this.state = 964;
                this.match(Dart2Parser.T__16);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.mapLiteral = function () {
        var _localctx = new MapLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, Dart2Parser.RULE_mapLiteral);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 967;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__2) {
                    {
                        this.state = 966;
                        this.match(Dart2Parser.T__2);
                    }
                }
                this.state = 970;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__38) {
                    {
                        this.state = 969;
                        this.typeArguments();
                    }
                }
                this.state = 972;
                this.match(Dart2Parser.T__11);
                this.state = 984;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                    {
                        this.state = 973;
                        this.mapLiteralEntry();
                        this.state = 978;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 974;
                                        this.match(Dart2Parser.T__0);
                                        this.state = 975;
                                        this.mapLiteralEntry();
                                    }
                                }
                            }
                            this.state = 980;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                        }
                        this.state = 982;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__0) {
                            {
                                this.state = 981;
                                this.match(Dart2Parser.T__0);
                            }
                        }
                    }
                }
                this.state = 986;
                this.match(Dart2Parser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.mapLiteralEntry = function () {
        var _localctx = new MapLiteralEntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, Dart2Parser.RULE_mapLiteralEntry);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 988;
                this.expression();
                this.state = 989;
                this.match(Dart2Parser.T__20);
                this.state = 990;
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
    Dart2Parser.prototype.throwExpression = function () {
        var _localctx = new ThrowExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, Dart2Parser.RULE_throwExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this.match(Dart2Parser.T__47);
                this.state = 993;
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
    Dart2Parser.prototype.throwExpressionWithoutCascade = function () {
        var _localctx = new ThrowExpressionWithoutCascadeContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, Dart2Parser.RULE_throwExpressionWithoutCascade);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                this.match(Dart2Parser.T__47);
                this.state = 996;
                this.expressionWithoutCascade();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.functionExpression = function () {
        var _localctx = new FunctionExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, Dart2Parser.RULE_functionExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 998;
                this.formalParameterPart();
                this.state = 999;
                this.functionBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.thisExpression = function () {
        var _localctx = new ThisExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, Dart2Parser.RULE_thisExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1001;
                this.match(Dart2Parser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.nayaExpression = function () {
        var _localctx = new NayaExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, Dart2Parser.RULE_nayaExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1003;
                this.match(Dart2Parser.T__48);
                this.state = 1004;
                this.dtype();
                this.state = 1007;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__19) {
                    {
                        this.state = 1005;
                        this.match(Dart2Parser.T__19);
                        this.state = 1006;
                        this.identifier();
                    }
                }
                this.state = 1009;
                this.arguments();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.constObjectExpression = function () {
        var _localctx = new ConstObjectExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, Dart2Parser.RULE_constObjectExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1011;
                this.match(Dart2Parser.T__2);
                this.state = 1012;
                this.dtype();
                this.state = 1015;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__19) {
                    {
                        this.state = 1013;
                        this.match(Dart2Parser.T__19);
                        this.state = 1014;
                        this.identifier();
                    }
                }
                this.state = 1017;
                this.arguments();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, Dart2Parser.RULE_arguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1019;
                this.match(Dart2Parser.T__13);
                this.state = 1024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                    {
                        this.state = 1020;
                        this.argumentList();
                        this.state = 1022;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__0) {
                            {
                                this.state = 1021;
                                this.match(Dart2Parser.T__0);
                            }
                        }
                    }
                }
                this.state = 1026;
                this.match(Dart2Parser.T__14);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.argumentList = function () {
        var _localctx = new ArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, Dart2Parser.RULE_argumentList);
        try {
            var _alt = void 0;
            this.state = 1044;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1028;
                        this.namedArgument();
                        this.state = 1033;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1029;
                                        this.match(Dart2Parser.T__0);
                                        this.state = 1030;
                                        this.namedArgument();
                                    }
                                }
                            }
                            this.state = 1035;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1036;
                        this.expressionList();
                        this.state = 1041;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1037;
                                        this.match(Dart2Parser.T__0);
                                        this.state = 1038;
                                        this.namedArgument();
                                    }
                                }
                            }
                            this.state = 1043;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
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
    Dart2Parser.prototype.namedArgument = function () {
        var _localctx = new NamedArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, Dart2Parser.RULE_namedArgument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1046;
                this.label();
                this.state = 1047;
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
    Dart2Parser.prototype.cascadeSection = function () {
        var _localctx = new CascadeSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, Dart2Parser.RULE_cascadeSection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1049;
                this.match(Dart2Parser.T__49);
                {
                    this.state = 1050;
                    this.cascadeSelector();
                    this.state = 1054;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
                        {
                            {
                                this.state = 1051;
                                this.argumentPart();
                            }
                        }
                        this.state = 1056;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 1066;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__15 || _la === Dart2Parser.T__19 || _la === Dart2Parser.T__85) {
                    {
                        {
                            this.state = 1057;
                            this.assignableSelector();
                            this.state = 1061;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
                                {
                                    {
                                        this.state = 1058;
                                        this.argumentPart();
                                    }
                                }
                                this.state = 1063;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 1068;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1072;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__4 || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Dart2Parser.T__50 - 51)) | (1 << (Dart2Parser.T__51 - 51)) | (1 << (Dart2Parser.T__52 - 51)) | (1 << (Dart2Parser.T__53 - 51)) | (1 << (Dart2Parser.T__54 - 51)) | (1 << (Dart2Parser.T__55 - 51)) | (1 << (Dart2Parser.T__56 - 51)) | (1 << (Dart2Parser.T__57 - 51)) | (1 << (Dart2Parser.T__58 - 51)) | (1 << (Dart2Parser.T__59 - 51)) | (1 << (Dart2Parser.T__60 - 51)) | (1 << (Dart2Parser.T__61 - 51)))) !== 0)) {
                    {
                        this.state = 1069;
                        this.assignmentOperator();
                        this.state = 1070;
                        this.expressionWithoutCascade();
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
    Dart2Parser.prototype.cascadeSelector = function () {
        var _localctx = new CascadeSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, Dart2Parser.RULE_cascadeSelector);
        try {
            this.state = 1079;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1074;
                        this.match(Dart2Parser.T__15);
                        this.state = 1075;
                        this.expression();
                        this.state = 1076;
                        this.match(Dart2Parser.T__16);
                    }
                    break;
                case Dart2Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1078;
                        this.identifier();
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
    Dart2Parser.prototype.argumentPart = function () {
        var _localctx = new ArgumentPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, Dart2Parser.RULE_argumentPart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1082;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__38) {
                    {
                        this.state = 1081;
                        this.typeArguments();
                    }
                }
                this.state = 1084;
                this.arguments();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.assignmentOperator = function () {
        var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, Dart2Parser.RULE_assignmentOperator);
        try {
            this.state = 1088;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1086;
                        this.match(Dart2Parser.T__4);
                    }
                    break;
                case Dart2Parser.T__50:
                case Dart2Parser.T__51:
                case Dart2Parser.T__52:
                case Dart2Parser.T__53:
                case Dart2Parser.T__54:
                case Dart2Parser.T__55:
                case Dart2Parser.T__56:
                case Dart2Parser.T__57:
                case Dart2Parser.T__58:
                case Dart2Parser.T__59:
                case Dart2Parser.T__60:
                case Dart2Parser.T__61:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1087;
                        this.compoundAssignmentOperator();
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
    Dart2Parser.prototype.compoundAssignmentOperator = function () {
        var _localctx = new CompoundAssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, Dart2Parser.RULE_compoundAssignmentOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1090;
                _la = this._input.LA(1);
                if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Dart2Parser.T__50 - 51)) | (1 << (Dart2Parser.T__51 - 51)) | (1 << (Dart2Parser.T__52 - 51)) | (1 << (Dart2Parser.T__53 - 51)) | (1 << (Dart2Parser.T__54 - 51)) | (1 << (Dart2Parser.T__55 - 51)) | (1 << (Dart2Parser.T__56 - 51)) | (1 << (Dart2Parser.T__57 - 51)) | (1 << (Dart2Parser.T__58 - 51)) | (1 << (Dart2Parser.T__59 - 51)) | (1 << (Dart2Parser.T__60 - 51)) | (1 << (Dart2Parser.T__61 - 51)))) !== 0))) {
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
    Dart2Parser.prototype.conditionalExpression = function () {
        var _localctx = new ConditionalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, Dart2Parser.RULE_conditionalExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1092;
                this.ifNullExpression();
                this.state = 1098;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__62) {
                    {
                        this.state = 1093;
                        this.match(Dart2Parser.T__62);
                        this.state = 1094;
                        this.expressionWithoutCascade();
                        this.state = 1095;
                        this.match(Dart2Parser.T__20);
                        this.state = 1096;
                        this.expressionWithoutCascade();
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
    Dart2Parser.prototype.ifNullExpression = function () {
        var _localctx = new IfNullExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, Dart2Parser.RULE_ifNullExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1100;
                this.logicalOrExpression();
                this.state = 1105;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__63) {
                    {
                        {
                            this.state = 1101;
                            this.match(Dart2Parser.T__63);
                            this.state = 1102;
                            this.logicalOrExpression();
                        }
                    }
                    this.state = 1107;
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
    Dart2Parser.prototype.logicalOrExpression = function () {
        var _localctx = new LogicalOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, Dart2Parser.RULE_logicalOrExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1108;
                this.logicalAndExpression();
                this.state = 1113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__64) {
                    {
                        {
                            this.state = 1109;
                            this.match(Dart2Parser.T__64);
                            this.state = 1110;
                            this.logicalAndExpression();
                        }
                    }
                    this.state = 1115;
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
    Dart2Parser.prototype.logicalAndExpression = function () {
        var _localctx = new LogicalAndExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, Dart2Parser.RULE_logicalAndExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1116;
                this.equalityExpression();
                this.state = 1121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__65) {
                    {
                        {
                            this.state = 1117;
                            this.match(Dart2Parser.T__65);
                            this.state = 1118;
                            this.equalityExpression();
                        }
                    }
                    this.state = 1123;
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
    Dart2Parser.prototype.equalityExpression = function () {
        var _localctx = new EqualityExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, Dart2Parser.RULE_equalityExpression);
        var _la;
        try {
            this.state = 1134;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1124;
                        this.relationalExpression();
                        this.state = 1128;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__30 || _la === Dart2Parser.T__66) {
                            {
                                this.state = 1125;
                                this.equalityOperator();
                                this.state = 1126;
                                this.relationalExpression();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1130;
                        this.match(Dart2Parser.T__33);
                        this.state = 1131;
                        this.equalityOperator();
                        this.state = 1132;
                        this.relationalExpression();
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
    Dart2Parser.prototype.equalityOperator = function () {
        var _localctx = new EqualityOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, Dart2Parser.RULE_equalityOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1136;
                _la = this._input.LA(1);
                if (!(_la === Dart2Parser.T__30 || _la === Dart2Parser.T__66)) {
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
    Dart2Parser.prototype.relationalExpression = function () {
        var _localctx = new RelationalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, Dart2Parser.RULE_relationalExpression);
        try {
            this.state = 1150;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1138;
                        this.bitwiseOrExpression();
                        this.state = 1144;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Dart2Parser.T__86:
                                {
                                    this.state = 1139;
                                    this.typeTest();
                                }
                                break;
                            case Dart2Parser.T__87:
                                {
                                    this.state = 1140;
                                    this.typeCast();
                                }
                                break;
                            case Dart2Parser.T__38:
                            case Dart2Parser.T__39:
                            case Dart2Parser.T__67:
                            case Dart2Parser.T__68:
                                {
                                    this.state = 1141;
                                    this.relationalOperator();
                                    this.state = 1142;
                                    this.bitwiseOrExpression();
                                }
                                break;
                            case Dart2Parser.T__0:
                            case Dart2Parser.T__6:
                            case Dart2Parser.T__7:
                            case Dart2Parser.T__8:
                            case Dart2Parser.T__9:
                            case Dart2Parser.T__10:
                            case Dart2Parser.T__11:
                            case Dart2Parser.T__12:
                            case Dart2Parser.T__14:
                            case Dart2Parser.T__16:
                            case Dart2Parser.T__20:
                            case Dart2Parser.T__30:
                            case Dart2Parser.T__49:
                            case Dart2Parser.T__62:
                            case Dart2Parser.T__63:
                            case Dart2Parser.T__64:
                            case Dart2Parser.T__65:
                            case Dart2Parser.T__66:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1146;
                        this.match(Dart2Parser.T__33);
                        this.state = 1147;
                        this.relationalOperator();
                        this.state = 1148;
                        this.bitwiseOrExpression();
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
    Dart2Parser.prototype.relationalOperator = function () {
        var _localctx = new RelationalOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, Dart2Parser.RULE_relationalOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1152;
                _la = this._input.LA(1);
                if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Dart2Parser.T__38 - 39)) | (1 << (Dart2Parser.T__39 - 39)) | (1 << (Dart2Parser.T__67 - 39)) | (1 << (Dart2Parser.T__68 - 39)))) !== 0))) {
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
    Dart2Parser.prototype.bitwiseOrExpression = function () {
        var _localctx = new BitwiseOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, Dart2Parser.RULE_bitwiseOrExpression);
        try {
            var _alt = void 0;
            this.state = 1169;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1154;
                        this.bitwiseXorExpression();
                        this.state = 1159;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1155;
                                        this.match(Dart2Parser.T__69);
                                        this.state = 1156;
                                        this.bitwiseXorExpression();
                                    }
                                }
                            }
                            this.state = 1161;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1162;
                        this.match(Dart2Parser.T__33);
                        this.state = 1165;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 1163;
                                            this.match(Dart2Parser.T__69);
                                            this.state = 1164;
                                            this.bitwiseOrExpression();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1167;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    Dart2Parser.prototype.bitwiseXorExpression = function () {
        var _localctx = new BitwiseXorExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, Dart2Parser.RULE_bitwiseXorExpression);
        var _la;
        try {
            this.state = 1186;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1171;
                        this.bitwiseAndExpression();
                        this.state = 1176;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === Dart2Parser.T__70) {
                            {
                                {
                                    this.state = 1172;
                                    this.match(Dart2Parser.T__70);
                                    this.state = 1173;
                                    this.bitwiseAndExpression();
                                }
                            }
                            this.state = 1178;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1179;
                        this.match(Dart2Parser.T__33);
                        this.state = 1182;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1180;
                                    this.match(Dart2Parser.T__70);
                                    this.state = 1181;
                                    this.bitwiseAndExpression();
                                }
                            }
                            this.state = 1184;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === Dart2Parser.T__70);
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
    Dart2Parser.prototype.bitwiseAndExpression = function () {
        var _localctx = new BitwiseAndExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, Dart2Parser.RULE_bitwiseAndExpression);
        var _la;
        try {
            this.state = 1203;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1188;
                        this.shiftExpression();
                        this.state = 1193;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === Dart2Parser.T__71) {
                            {
                                {
                                    this.state = 1189;
                                    this.match(Dart2Parser.T__71);
                                    this.state = 1190;
                                    this.shiftExpression();
                                }
                            }
                            this.state = 1195;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1196;
                        this.match(Dart2Parser.T__33);
                        this.state = 1199;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1197;
                                    this.match(Dart2Parser.T__71);
                                    this.state = 1198;
                                    this.shiftExpression();
                                }
                            }
                            this.state = 1201;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === Dart2Parser.T__71);
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
    Dart2Parser.prototype.bitwiseOperator = function () {
        var _localctx = new BitwiseOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, Dart2Parser.RULE_bitwiseOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1205;
                _la = this._input.LA(1);
                if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Dart2Parser.T__69 - 70)) | (1 << (Dart2Parser.T__70 - 70)) | (1 << (Dart2Parser.T__71 - 70)))) !== 0))) {
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
    Dart2Parser.prototype.shiftExpression = function () {
        var _localctx = new ShiftExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, Dart2Parser.RULE_shiftExpression);
        var _la;
        try {
            this.state = 1224;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1207;
                        this.additiveExpression();
                        this.state = 1213;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Dart2Parser.T__72 - 73)) | (1 << (Dart2Parser.T__73 - 73)) | (1 << (Dart2Parser.T__74 - 73)))) !== 0)) {
                            {
                                {
                                    this.state = 1208;
                                    this.shiftOperator();
                                    this.state = 1209;
                                    this.additiveExpression();
                                }
                            }
                            this.state = 1215;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1216;
                        this.match(Dart2Parser.T__33);
                        this.state = 1220;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1217;
                                    this.shiftOperator();
                                    this.state = 1218;
                                    this.additiveExpression();
                                }
                            }
                            this.state = 1222;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Dart2Parser.T__72 - 73)) | (1 << (Dart2Parser.T__73 - 73)) | (1 << (Dart2Parser.T__74 - 73)))) !== 0));
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
    Dart2Parser.prototype.shiftOperator = function () {
        var _localctx = new ShiftOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, Dart2Parser.RULE_shiftOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1226;
                _la = this._input.LA(1);
                if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Dart2Parser.T__72 - 73)) | (1 << (Dart2Parser.T__73 - 73)) | (1 << (Dart2Parser.T__74 - 73)))) !== 0))) {
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
    Dart2Parser.prototype.additiveExpression = function () {
        var _localctx = new AdditiveExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, Dart2Parser.RULE_additiveExpression);
        var _la;
        try {
            this.state = 1245;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1228;
                        this.multiplicativeExpression();
                        this.state = 1234;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === Dart2Parser.T__75 || _la === Dart2Parser.T__76) {
                            {
                                {
                                    this.state = 1229;
                                    this.additiveOperator();
                                    this.state = 1230;
                                    this.multiplicativeExpression();
                                }
                            }
                            this.state = 1236;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1237;
                        this.match(Dart2Parser.T__33);
                        this.state = 1241;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1238;
                                    this.additiveOperator();
                                    this.state = 1239;
                                    this.multiplicativeExpression();
                                }
                            }
                            this.state = 1243;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === Dart2Parser.T__75 || _la === Dart2Parser.T__76);
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
    Dart2Parser.prototype.additiveOperator = function () {
        var _localctx = new AdditiveOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, Dart2Parser.RULE_additiveOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1247;
                _la = this._input.LA(1);
                if (!(_la === Dart2Parser.T__75 || _la === Dart2Parser.T__76)) {
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
    Dart2Parser.prototype.multiplicativeExpression = function () {
        var _localctx = new MultiplicativeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, Dart2Parser.RULE_multiplicativeExpression);
        var _la;
        try {
            this.state = 1266;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1249;
                        this.unaryExpression();
                        this.state = 1255;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Dart2Parser.T__77 - 78)) | (1 << (Dart2Parser.T__78 - 78)) | (1 << (Dart2Parser.T__79 - 78)) | (1 << (Dart2Parser.T__80 - 78)))) !== 0)) {
                            {
                                {
                                    this.state = 1250;
                                    this.multiplicativeOperator();
                                    this.state = 1251;
                                    this.unaryExpression();
                                }
                            }
                            this.state = 1257;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1258;
                        this.match(Dart2Parser.T__33);
                        this.state = 1262;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1259;
                                    this.multiplicativeOperator();
                                    this.state = 1260;
                                    this.unaryExpression();
                                }
                            }
                            this.state = 1264;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Dart2Parser.T__77 - 78)) | (1 << (Dart2Parser.T__78 - 78)) | (1 << (Dart2Parser.T__79 - 78)) | (1 << (Dart2Parser.T__80 - 78)))) !== 0));
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
    Dart2Parser.prototype.multiplicativeOperator = function () {
        var _localctx = new MultiplicativeOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, Dart2Parser.RULE_multiplicativeOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1268;
                _la = this._input.LA(1);
                if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Dart2Parser.T__77 - 78)) | (1 << (Dart2Parser.T__78 - 78)) | (1 << (Dart2Parser.T__79 - 78)) | (1 << (Dart2Parser.T__80 - 78)))) !== 0))) {
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
    Dart2Parser.prototype.unaryExpression = function () {
        var _localctx = new UnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, Dart2Parser.RULE_unaryExpression);
        try {
            this.state = 1284;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1270;
                        this.prefixOperator();
                        this.state = 1271;
                        this.unaryExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1273;
                        this.awaitExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1274;
                        this.postfixExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1277;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Dart2Parser.T__76:
                                {
                                    this.state = 1275;
                                    this.minusOperator();
                                }
                                break;
                            case Dart2Parser.T__27:
                                {
                                    this.state = 1276;
                                    this.tildeOperator();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1279;
                        this.match(Dart2Parser.T__33);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1281;
                        this.incrementOperator();
                        this.state = 1282;
                        this.assignableExpression();
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
    Dart2Parser.prototype.prefixOperator = function () {
        var _localctx = new PrefixOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, Dart2Parser.RULE_prefixOperator);
        try {
            this.state = 1289;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__76:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1286;
                        this.minusOperator();
                    }
                    break;
                case Dart2Parser.T__81:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1287;
                        this.negationOperator();
                    }
                    break;
                case Dart2Parser.T__27:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1288;
                        this.tildeOperator();
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
    Dart2Parser.prototype.minusOperator = function () {
        var _localctx = new MinusOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, Dart2Parser.RULE_minusOperator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1291;
                this.match(Dart2Parser.T__76);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.negationOperator = function () {
        var _localctx = new NegationOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, Dart2Parser.RULE_negationOperator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1293;
                this.match(Dart2Parser.T__81);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.tildeOperator = function () {
        var _localctx = new TildeOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, Dart2Parser.RULE_tildeOperator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1295;
                this.match(Dart2Parser.T__27);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.awaitExpression = function () {
        var _localctx = new AwaitExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, Dart2Parser.RULE_awaitExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1297;
                this.match(Dart2Parser.T__82);
                this.state = 1298;
                this.unaryExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.postfixExpression = function () {
        var _localctx = new PostfixExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, Dart2Parser.RULE_postfixExpression);
        try {
            var _alt = void 0;
            this.state = 1310;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1300;
                        this.assignableExpression();
                        this.state = 1301;
                        this.postfixOperator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1303;
                        this.primary();
                        this.state = 1307;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1304;
                                        this.selector();
                                    }
                                }
                            }
                            this.state = 1309;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
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
    Dart2Parser.prototype.postfixOperator = function () {
        var _localctx = new PostfixOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, Dart2Parser.RULE_postfixOperator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1312;
                this.incrementOperator();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.selector = function () {
        var _localctx = new SelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, Dart2Parser.RULE_selector);
        try {
            this.state = 1316;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__15:
                case Dart2Parser.T__19:
                case Dart2Parser.T__85:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1314;
                        this.assignableSelector();
                    }
                    break;
                case Dart2Parser.T__13:
                case Dart2Parser.T__38:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1315;
                        this.argumentPart();
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
    Dart2Parser.prototype.incrementOperator = function () {
        var _localctx = new IncrementOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, Dart2Parser.RULE_incrementOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1318;
                _la = this._input.LA(1);
                if (!(_la === Dart2Parser.T__83 || _la === Dart2Parser.T__84)) {
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
    Dart2Parser.prototype.assignableExpression = function () {
        var _localctx = new AssignableExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, Dart2Parser.RULE_assignableExpression);
        var _la;
        try {
            this.state = 1334;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1320;
                        this.primary();
                        this.state = 1328;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1324;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === Dart2Parser.T__13 || _la === Dart2Parser.T__38) {
                                        {
                                            {
                                                this.state = 1321;
                                                this.argumentPart();
                                            }
                                        }
                                        this.state = 1326;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1327;
                                    this.assignableSelector();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1330;
                        this.match(Dart2Parser.T__33);
                        this.state = 1331;
                        this.unconditionalAssignableSelector();
                        this.state = 1332;
                        this.identifier();
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
    Dart2Parser.prototype.unconditionalAssignableSelector = function () {
        var _localctx = new UnconditionalAssignableSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, Dart2Parser.RULE_unconditionalAssignableSelector);
        try {
            this.state = 1342;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1336;
                        this.match(Dart2Parser.T__15);
                        this.state = 1337;
                        this.expression();
                        this.state = 1338;
                        this.match(Dart2Parser.T__16);
                    }
                    break;
                case Dart2Parser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1340;
                        this.match(Dart2Parser.T__19);
                        this.state = 1341;
                        this.identifier();
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
    Dart2Parser.prototype.assignableSelector = function () {
        var _localctx = new AssignableSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, Dart2Parser.RULE_assignableSelector);
        try {
            this.state = 1347;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__15:
                case Dart2Parser.T__19:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1344;
                        this.unconditionalAssignableSelector();
                    }
                    break;
                case Dart2Parser.T__85:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1345;
                        this.match(Dart2Parser.T__85);
                        this.state = 1346;
                        this.identifier();
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
    Dart2Parser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, Dart2Parser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1349;
                this.match(Dart2Parser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.qualified = function () {
        var _localctx = new QualifiedContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, Dart2Parser.RULE_qualified);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1351;
                this.identifier();
                this.state = 1354;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                    case 1:
                        {
                            this.state = 1352;
                            this.match(Dart2Parser.T__19);
                            this.state = 1353;
                            this.identifier();
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
    Dart2Parser.prototype.typeTest = function () {
        var _localctx = new TypeTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, Dart2Parser.RULE_typeTest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1356;
                this.isOperator();
                this.state = 1357;
                this.dtype();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.isOperator = function () {
        var _localctx = new IsOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, Dart2Parser.RULE_isOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1359;
                this.match(Dart2Parser.T__86);
                this.state = 1361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__81) {
                    {
                        this.state = 1360;
                        this.match(Dart2Parser.T__81);
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
    Dart2Parser.prototype.typeCast = function () {
        var _localctx = new TypeCastContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, Dart2Parser.RULE_typeCast);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1363;
                this.asOperator();
                this.state = 1364;
                this.dtype();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.asOperator = function () {
        var _localctx = new AsOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, Dart2Parser.RULE_asOperator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1366;
                this.match(Dart2Parser.T__87);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.statements = function () {
        var _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, Dart2Parser.RULE_statements);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1371;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1368;
                                this.statement();
                            }
                        }
                    }
                    this.state = 1373;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
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
    Dart2Parser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, Dart2Parser.RULE_statement);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1377;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1374;
                                this.label();
                            }
                        }
                    }
                    this.state = 1379;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
                }
                this.state = 1380;
                this.nonLabledStatment();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.nonLabledStatment = function () {
        var _localctx = new NonLabledStatmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, Dart2Parser.RULE_nonLabledStatment);
        try {
            this.state = 1399;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1382;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1383;
                        this.localVariableDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1384;
                        this.forStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1385;
                        this.whileStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1386;
                        this.doStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1387;
                        this.switchStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1388;
                        this.ifStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1389;
                        this.rethrowStatment();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1390;
                        this.tryStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1391;
                        this.breakStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1392;
                        this.continueStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1393;
                        this.returnStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1394;
                        this.yieldStatement();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1395;
                        this.yieldEachStatement();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1396;
                        this.expressionStatement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1397;
                        this.assertStatement();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1398;
                        this.localFunctionDeclaration();
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
    Dart2Parser.prototype.expressionStatement = function () {
        var _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, Dart2Parser.RULE_expressionStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                    {
                        this.state = 1401;
                        this.expression();
                    }
                }
                this.state = 1404;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.localVariableDeclaration = function () {
        var _localctx = new LocalVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, Dart2Parser.RULE_localVariableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1406;
                this.initializedVariableDeclaration();
                this.state = 1407;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.localFunctionDeclaration = function () {
        var _localctx = new LocalFunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, Dart2Parser.RULE_localFunctionDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1409;
                this.functionSignature();
                this.state = 1410;
                this.functionBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, Dart2Parser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1412;
                this.match(Dart2Parser.T__88);
                this.state = 1413;
                this.match(Dart2Parser.T__13);
                this.state = 1414;
                this.expression();
                this.state = 1415;
                this.match(Dart2Parser.T__14);
                this.state = 1416;
                this.statement();
                this.state = 1419;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                    case 1:
                        {
                            this.state = 1417;
                            this.match(Dart2Parser.T__89);
                            this.state = 1418;
                            this.statement();
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
    Dart2Parser.prototype.forStatement = function () {
        var _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, Dart2Parser.RULE_forStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__82) {
                    {
                        this.state = 1421;
                        this.match(Dart2Parser.T__82);
                    }
                }
                this.state = 1424;
                this.match(Dart2Parser.T__90);
                this.state = 1425;
                this.match(Dart2Parser.T__13);
                this.state = 1426;
                this.forLoopParts();
                this.state = 1427;
                this.match(Dart2Parser.T__14);
                this.state = 1428;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.forLoopParts = function () {
        var _localctx = new ForLoopPartsContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, Dart2Parser.RULE_forLoopParts);
        var _la;
        try {
            this.state = 1446;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1430;
                        this.forInitializerStatement();
                        this.state = 1432;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                            {
                                this.state = 1431;
                                this.expression();
                            }
                        }
                        this.state = 1434;
                        this.match(Dart2Parser.T__8);
                        this.state = 1436;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                            {
                                this.state = 1435;
                                this.expressionList();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1438;
                        this.declaredIdentifier();
                        this.state = 1439;
                        this.match(Dart2Parser.T__91);
                        this.state = 1440;
                        this.expression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1442;
                        this.identifier();
                        this.state = 1443;
                        this.match(Dart2Parser.T__91);
                        this.state = 1444;
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
    Dart2Parser.prototype.forInitializerStatement = function () {
        var _localctx = new ForInitializerStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, Dart2Parser.RULE_forInitializerStatement);
        var _la;
        try {
            this.state = 1453;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1448;
                        this.localVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1450;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                            {
                                this.state = 1449;
                                this.expression();
                            }
                        }
                        this.state = 1452;
                        this.match(Dart2Parser.T__8);
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
    Dart2Parser.prototype.whileStatement = function () {
        var _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, Dart2Parser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1455;
                this.match(Dart2Parser.T__92);
                this.state = 1456;
                this.match(Dart2Parser.T__13);
                this.state = 1457;
                this.expression();
                this.state = 1458;
                this.match(Dart2Parser.T__14);
                this.state = 1459;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.doStatement = function () {
        var _localctx = new DoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, Dart2Parser.RULE_doStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1461;
                this.match(Dart2Parser.T__93);
                this.state = 1462;
                this.statement();
                this.state = 1463;
                this.match(Dart2Parser.T__92);
                this.state = 1464;
                this.match(Dart2Parser.T__13);
                this.state = 1465;
                this.expression();
                this.state = 1466;
                this.match(Dart2Parser.T__14);
                this.state = 1467;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.switchStatement = function () {
        var _localctx = new SwitchStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, Dart2Parser.RULE_switchStatement);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1469;
                this.match(Dart2Parser.T__94);
                this.state = 1470;
                this.match(Dart2Parser.T__13);
                this.state = 1471;
                this.expression();
                this.state = 1472;
                this.match(Dart2Parser.T__14);
                this.state = 1473;
                this.match(Dart2Parser.T__11);
                this.state = 1477;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1474;
                                this.switchCase();
                            }
                        }
                    }
                    this.state = 1479;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                }
                this.state = 1481;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__96 || _la === Dart2Parser.IDENTIFIER) {
                    {
                        this.state = 1480;
                        this.defaultCase();
                    }
                }
                this.state = 1483;
                this.match(Dart2Parser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.switchCase = function () {
        var _localctx = new SwitchCaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, Dart2Parser.RULE_switchCase);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.IDENTIFIER) {
                    {
                        {
                            this.state = 1485;
                            this.label();
                        }
                    }
                    this.state = 1490;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1491;
                this.match(Dart2Parser.T__95);
                this.state = 1492;
                this.expression();
                this.state = 1493;
                this.match(Dart2Parser.T__20);
                this.state = 1494;
                this.statements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.defaultCase = function () {
        var _localctx = new DefaultCaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, Dart2Parser.RULE_defaultCase);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1499;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.IDENTIFIER) {
                    {
                        {
                            this.state = 1496;
                            this.label();
                        }
                    }
                    this.state = 1501;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1502;
                this.match(Dart2Parser.T__96);
                this.state = 1503;
                this.match(Dart2Parser.T__20);
                this.state = 1504;
                this.statements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.rethrowStatment = function () {
        var _localctx = new RethrowStatmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, Dart2Parser.RULE_rethrowStatment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1506;
                this.match(Dart2Parser.T__97);
                this.state = 1507;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.tryStatement = function () {
        var _localctx = new TryStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, Dart2Parser.RULE_tryStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1509;
                this.match(Dart2Parser.T__98);
                this.state = 1510;
                this.block();
                this.state = 1520;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Dart2Parser.T__99:
                    case Dart2Parser.T__100:
                        {
                            this.state = 1512;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1511;
                                        this.onPart();
                                    }
                                }
                                this.state = 1514;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === Dart2Parser.T__99 || _la === Dart2Parser.T__100);
                            this.state = 1517;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Dart2Parser.T__101) {
                                {
                                    this.state = 1516;
                                    this.finallyPart();
                                }
                            }
                        }
                        break;
                    case Dart2Parser.T__101:
                        {
                            this.state = 1519;
                            this.finallyPart();
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
    Dart2Parser.prototype.onPart = function () {
        var _localctx = new OnPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, Dart2Parser.RULE_onPart);
        var _la;
        try {
            this.state = 1532;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__100:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1522;
                        this.catchPart();
                        this.state = 1523;
                        this.block();
                    }
                    break;
                case Dart2Parser.T__99:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1525;
                        this.match(Dart2Parser.T__99);
                        this.state = 1526;
                        this.dtype();
                        this.state = 1528;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__100) {
                            {
                                this.state = 1527;
                                this.catchPart();
                            }
                        }
                        this.state = 1530;
                        this.block();
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
    Dart2Parser.prototype.catchPart = function () {
        var _localctx = new CatchPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, Dart2Parser.RULE_catchPart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1534;
                this.match(Dart2Parser.T__100);
                this.state = 1535;
                this.match(Dart2Parser.T__13);
                this.state = 1536;
                this.identifier();
                this.state = 1539;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__0) {
                    {
                        this.state = 1537;
                        this.match(Dart2Parser.T__0);
                        this.state = 1538;
                        this.identifier();
                    }
                }
                this.state = 1541;
                this.match(Dart2Parser.T__14);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.finallyPart = function () {
        var _localctx = new FinallyPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, Dart2Parser.RULE_finallyPart);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1543;
                this.match(Dart2Parser.T__101);
                this.state = 1544;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.returnStatement = function () {
        var _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, Dart2Parser.RULE_returnStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1546;
                this.match(Dart2Parser.T__102);
                this.state = 1548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__27))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Dart2Parser.T__33 - 34)) | (1 << (Dart2Parser.T__38 - 34)) | (1 << (Dart2Parser.T__41 - 34)) | (1 << (Dart2Parser.T__42 - 34)) | (1 << (Dart2Parser.T__43 - 34)) | (1 << (Dart2Parser.T__46 - 34)) | (1 << (Dart2Parser.T__47 - 34)) | (1 << (Dart2Parser.T__48 - 34)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Dart2Parser.T__76 - 77)) | (1 << (Dart2Parser.T__81 - 77)) | (1 << (Dart2Parser.T__82 - 77)) | (1 << (Dart2Parser.T__83 - 77)) | (1 << (Dart2Parser.T__84 - 77)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (Dart2Parser.NUMBER - 119)) | (1 << (Dart2Parser.HEX_NUMBER - 119)) | (1 << (Dart2Parser.SingleLineString - 119)) | (1 << (Dart2Parser.MultiLineString - 119)) | (1 << (Dart2Parser.IDENTIFIER - 119)))) !== 0)) {
                    {
                        this.state = 1547;
                        this.expression();
                    }
                }
                this.state = 1550;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, Dart2Parser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1552;
                this.identifier();
                this.state = 1553;
                this.match(Dart2Parser.T__20);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.breakStatement = function () {
        var _localctx = new BreakStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, Dart2Parser.RULE_breakStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1555;
                this.match(Dart2Parser.T__103);
                this.state = 1557;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.IDENTIFIER) {
                    {
                        this.state = 1556;
                        this.identifier();
                    }
                }
                this.state = 1559;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.continueStatement = function () {
        var _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, Dart2Parser.RULE_continueStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1561;
                this.match(Dart2Parser.T__104);
                this.state = 1563;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.IDENTIFIER) {
                    {
                        this.state = 1562;
                        this.identifier();
                    }
                }
                this.state = 1565;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.yieldStatement = function () {
        var _localctx = new YieldStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 284, Dart2Parser.RULE_yieldStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1567;
                this.match(Dart2Parser.T__105);
                this.state = 1568;
                this.expression();
                this.state = 1569;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.yieldEachStatement = function () {
        var _localctx = new YieldEachStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, Dart2Parser.RULE_yieldEachStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1571;
                this.match(Dart2Parser.T__106);
                this.state = 1572;
                this.expression();
                this.state = 1573;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.assertStatement = function () {
        var _localctx = new AssertStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, Dart2Parser.RULE_assertStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1575;
                this.assertion();
                this.state = 1576;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.assertion = function () {
        var _localctx = new AssertionContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, Dart2Parser.RULE_assertion);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1578;
                this.match(Dart2Parser.T__107);
                this.state = 1579;
                this.match(Dart2Parser.T__13);
                this.state = 1580;
                this.expression();
                this.state = 1583;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
                    case 1:
                        {
                            this.state = 1581;
                            this.match(Dart2Parser.T__0);
                            this.state = 1582;
                            this.expression();
                        }
                        break;
                }
                this.state = 1586;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__0) {
                    {
                        this.state = 1585;
                        this.match(Dart2Parser.T__0);
                    }
                }
                this.state = 1588;
                this.match(Dart2Parser.T__14);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.topLevelDefinition = function () {
        var _localctx = new TopLevelDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 292, Dart2Parser.RULE_topLevelDefinition);
        var _la;
        try {
            this.state = 1639;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1590;
                        this.classDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1591;
                        this.enumType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1592;
                        this.typeAlias();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1594;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1593;
                                    this.match(Dart2Parser.T__25);
                                }
                                break;
                        }
                        this.state = 1596;
                        this.functionSignature();
                        this.state = 1597;
                        this.match(Dart2Parser.T__8);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1600;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__25) {
                            {
                                this.state = 1599;
                                this.match(Dart2Parser.T__25);
                            }
                        }
                        this.state = 1602;
                        this.getterSignature();
                        this.state = 1603;
                        this.match(Dart2Parser.T__8);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1606;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__25) {
                            {
                                this.state = 1605;
                                this.match(Dart2Parser.T__25);
                            }
                        }
                        this.state = 1608;
                        this.setterSignature();
                        this.state = 1609;
                        this.match(Dart2Parser.T__8);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1611;
                        this.functionSignature();
                        this.state = 1612;
                        this.functionBody();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1615;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
                            {
                                this.state = 1614;
                                this.returnType();
                            }
                        }
                        this.state = 1617;
                        this.match(Dart2Parser.T__31);
                        this.state = 1618;
                        this.identifier();
                        this.state = 1619;
                        this.functionBody();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1622;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Dart2Parser.T__5 || _la === Dart2Parser.IDENTIFIER) {
                            {
                                this.state = 1621;
                                this.returnType();
                            }
                        }
                        this.state = 1624;
                        this.match(Dart2Parser.T__32);
                        this.state = 1625;
                        this.identifier();
                        this.state = 1626;
                        this.formalParameterList();
                        this.state = 1627;
                        this.functionBody();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1629;
                        _la = this._input.LA(1);
                        if (!(_la === Dart2Parser.T__1 || _la === Dart2Parser.T__2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1631;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1630;
                                    this.dtype();
                                }
                                break;
                        }
                        this.state = 1633;
                        this.staticFinalDeclarationList();
                        this.state = 1634;
                        this.match(Dart2Parser.T__8);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1636;
                        this.variableDeclaration();
                        this.state = 1637;
                        this.match(Dart2Parser.T__8);
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
    Dart2Parser.prototype.getOrSet = function () {
        var _localctx = new GetOrSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 294, Dart2Parser.RULE_getOrSet);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1641;
                _la = this._input.LA(1);
                if (!(_la === Dart2Parser.T__31 || _la === Dart2Parser.T__32)) {
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
    Dart2Parser.prototype.libraryDefinition = function () {
        var _localctx = new LibraryDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 296, Dart2Parser.RULE_libraryDefinition);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1644;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__108) {
                    {
                        this.state = 1643;
                        this.scriptTag();
                    }
                }
                this.state = 1647;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
                    case 1:
                        {
                            this.state = 1646;
                            this.libraryName();
                        }
                        break;
                }
                this.state = 1652;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1649;
                                this.importOrExport();
                            }
                        }
                    }
                    this.state = 1654;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                }
                this.state = 1658;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1655;
                                this.partDirective();
                            }
                        }
                    }
                    this.state = 1660;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
                }
                this.state = 1664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__40 - 32)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Dart2Parser.T__109 - 110)) | (1 << (Dart2Parser.T__110 - 110)) | (1 << (Dart2Parser.T__113 - 110)) | (1 << (Dart2Parser.T__114 - 110)) | (1 << (Dart2Parser.T__116 - 110)) | (1 << (Dart2Parser.IDENTIFIER - 110)))) !== 0)) {
                    {
                        {
                            this.state = 1661;
                            this.topLevelDefinition();
                        }
                    }
                    this.state = 1666;
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
    Dart2Parser.prototype.scriptTag = function () {
        var _localctx = new ScriptTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 298, Dart2Parser.RULE_scriptTag);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1667;
                this.match(Dart2Parser.T__108);
                this.state = 1671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__0) | (1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__4) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__6) | (1 << Dart2Parser.T__7) | (1 << Dart2Parser.T__8) | (1 << Dart2Parser.T__9) | (1 << Dart2Parser.T__10) | (1 << Dart2Parser.T__11) | (1 << Dart2Parser.T__12) | (1 << Dart2Parser.T__13) | (1 << Dart2Parser.T__14) | (1 << Dart2Parser.T__15) | (1 << Dart2Parser.T__16) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__19) | (1 << Dart2Parser.T__20) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__23) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26) | (1 << Dart2Parser.T__27) | (1 << Dart2Parser.T__28) | (1 << Dart2Parser.T__29) | (1 << Dart2Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__33 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__35 - 32)) | (1 << (Dart2Parser.T__36 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__38 - 32)) | (1 << (Dart2Parser.T__39 - 32)) | (1 << (Dart2Parser.T__40 - 32)) | (1 << (Dart2Parser.T__41 - 32)) | (1 << (Dart2Parser.T__42 - 32)) | (1 << (Dart2Parser.T__43 - 32)) | (1 << (Dart2Parser.T__44 - 32)) | (1 << (Dart2Parser.T__45 - 32)) | (1 << (Dart2Parser.T__46 - 32)) | (1 << (Dart2Parser.T__47 - 32)) | (1 << (Dart2Parser.T__48 - 32)) | (1 << (Dart2Parser.T__49 - 32)) | (1 << (Dart2Parser.T__50 - 32)) | (1 << (Dart2Parser.T__51 - 32)) | (1 << (Dart2Parser.T__52 - 32)) | (1 << (Dart2Parser.T__53 - 32)) | (1 << (Dart2Parser.T__54 - 32)) | (1 << (Dart2Parser.T__55 - 32)) | (1 << (Dart2Parser.T__56 - 32)) | (1 << (Dart2Parser.T__57 - 32)) | (1 << (Dart2Parser.T__58 - 32)) | (1 << (Dart2Parser.T__59 - 32)) | (1 << (Dart2Parser.T__60 - 32)) | (1 << (Dart2Parser.T__61 - 32)) | (1 << (Dart2Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Dart2Parser.T__63 - 64)) | (1 << (Dart2Parser.T__64 - 64)) | (1 << (Dart2Parser.T__65 - 64)) | (1 << (Dart2Parser.T__66 - 64)) | (1 << (Dart2Parser.T__67 - 64)) | (1 << (Dart2Parser.T__68 - 64)) | (1 << (Dart2Parser.T__69 - 64)) | (1 << (Dart2Parser.T__70 - 64)) | (1 << (Dart2Parser.T__71 - 64)) | (1 << (Dart2Parser.T__72 - 64)) | (1 << (Dart2Parser.T__73 - 64)) | (1 << (Dart2Parser.T__74 - 64)) | (1 << (Dart2Parser.T__75 - 64)) | (1 << (Dart2Parser.T__76 - 64)) | (1 << (Dart2Parser.T__77 - 64)) | (1 << (Dart2Parser.T__78 - 64)) | (1 << (Dart2Parser.T__79 - 64)) | (1 << (Dart2Parser.T__80 - 64)) | (1 << (Dart2Parser.T__81 - 64)) | (1 << (Dart2Parser.T__82 - 64)) | (1 << (Dart2Parser.T__83 - 64)) | (1 << (Dart2Parser.T__84 - 64)) | (1 << (Dart2Parser.T__85 - 64)) | (1 << (Dart2Parser.T__86 - 64)) | (1 << (Dart2Parser.T__87 - 64)) | (1 << (Dart2Parser.T__88 - 64)) | (1 << (Dart2Parser.T__89 - 64)) | (1 << (Dart2Parser.T__90 - 64)) | (1 << (Dart2Parser.T__91 - 64)) | (1 << (Dart2Parser.T__92 - 64)) | (1 << (Dart2Parser.T__93 - 64)) | (1 << (Dart2Parser.T__94 - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (Dart2Parser.T__95 - 96)) | (1 << (Dart2Parser.T__96 - 96)) | (1 << (Dart2Parser.T__97 - 96)) | (1 << (Dart2Parser.T__98 - 96)) | (1 << (Dart2Parser.T__99 - 96)) | (1 << (Dart2Parser.T__100 - 96)) | (1 << (Dart2Parser.T__101 - 96)) | (1 << (Dart2Parser.T__102 - 96)) | (1 << (Dart2Parser.T__103 - 96)) | (1 << (Dart2Parser.T__104 - 96)) | (1 << (Dart2Parser.T__105 - 96)) | (1 << (Dart2Parser.T__106 - 96)) | (1 << (Dart2Parser.T__107 - 96)) | (1 << (Dart2Parser.T__108 - 96)) | (1 << (Dart2Parser.T__109 - 96)) | (1 << (Dart2Parser.T__110 - 96)) | (1 << (Dart2Parser.T__111 - 96)) | (1 << (Dart2Parser.T__112 - 96)) | (1 << (Dart2Parser.T__113 - 96)) | (1 << (Dart2Parser.T__114 - 96)) | (1 << (Dart2Parser.T__115 - 96)) | (1 << (Dart2Parser.T__116 - 96)) | (1 << (Dart2Parser.WHITESPACE - 96)) | (1 << (Dart2Parser.NUMBER - 96)) | (1 << (Dart2Parser.HEX_NUMBER - 96)) | (1 << (Dart2Parser.SingleLineString - 96)) | (1 << (Dart2Parser.MultiLineString - 96)) | (1 << (Dart2Parser.IDENTIFIER - 96)) | (1 << (Dart2Parser.SINGLE_LINE_COMMENT - 96)) | (1 << (Dart2Parser.MULTI_LINE_COMMENT - 96)))) !== 0)) {
                    {
                        {
                            this.state = 1668;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === Dart2Parser.NEWLINE)) {
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
                    this.state = 1673;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1674;
                this.match(Dart2Parser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.libraryName = function () {
        var _localctx = new LibraryNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 300, Dart2Parser.RULE_libraryName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1676;
                this.metadata();
                this.state = 1677;
                this.match(Dart2Parser.T__109);
                this.state = 1678;
                this.dottedIdentifierList();
                this.state = 1679;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.importOrExport = function () {
        var _localctx = new ImportOrExportContext(this._ctx, this.state);
        this.enterRule(_localctx, 302, Dart2Parser.RULE_importOrExport);
        try {
            this.state = 1683;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1681;
                        this.libraryimport();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1682;
                        this.libraryExport();
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
    Dart2Parser.prototype.dottedIdentifierList = function () {
        var _localctx = new DottedIdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 304, Dart2Parser.RULE_dottedIdentifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1685;
                this.identifier();
                this.state = 1690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 1686;
                            this.match(Dart2Parser.T__0);
                            this.state = 1687;
                            this.identifier();
                        }
                    }
                    this.state = 1692;
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
    Dart2Parser.prototype.libraryimport = function () {
        var _localctx = new LibraryimportContext(this._ctx, this.state);
        this.enterRule(_localctx, 306, Dart2Parser.RULE_libraryimport);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1693;
                this.metadata();
                this.state = 1694;
                this.importSpecification();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.importSpecification = function () {
        var _localctx = new ImportSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 308, Dart2Parser.RULE_importSpecification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1696;
                this.match(Dart2Parser.T__110);
                this.state = 1697;
                this.configurableUri();
                this.state = 1700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__87) {
                    {
                        this.state = 1698;
                        this.match(Dart2Parser.T__87);
                        this.state = 1699;
                        this.identifier();
                    }
                }
                this.state = 1705;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__111 || _la === Dart2Parser.T__112) {
                    {
                        {
                            this.state = 1702;
                            this.combinator();
                        }
                    }
                    this.state = 1707;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1708;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.combinator = function () {
        var _localctx = new CombinatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 310, Dart2Parser.RULE_combinator);
        try {
            this.state = 1714;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.T__111:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1710;
                        this.match(Dart2Parser.T__111);
                        this.state = 1711;
                        this.identifierList();
                    }
                    break;
                case Dart2Parser.T__112:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1712;
                        this.match(Dart2Parser.T__112);
                        this.state = 1713;
                        this.identifierList();
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
    Dart2Parser.prototype.identifierList = function () {
        var _localctx = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 312, Dart2Parser.RULE_identifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1716;
                this.identifier();
                this.state = 1721;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 1717;
                            this.match(Dart2Parser.T__0);
                            this.state = 1718;
                            this.identifier();
                        }
                    }
                    this.state = 1723;
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
    Dart2Parser.prototype.libraryExport = function () {
        var _localctx = new LibraryExportContext(this._ctx, this.state);
        this.enterRule(_localctx, 314, Dart2Parser.RULE_libraryExport);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1724;
                this.metadata();
                this.state = 1725;
                this.match(Dart2Parser.T__113);
                this.state = 1726;
                this.configurableUri();
                this.state = 1730;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__111 || _la === Dart2Parser.T__112) {
                    {
                        {
                            this.state = 1727;
                            this.combinator();
                        }
                    }
                    this.state = 1732;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1733;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.partDirective = function () {
        var _localctx = new PartDirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 316, Dart2Parser.RULE_partDirective);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1735;
                this.metadata();
                this.state = 1736;
                this.match(Dart2Parser.T__114);
                this.state = 1737;
                this.uri();
                this.state = 1738;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.partHeader = function () {
        var _localctx = new PartHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 318, Dart2Parser.RULE_partHeader);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1740;
                this.metadata();
                this.state = 1741;
                this.match(Dart2Parser.T__114);
                this.state = 1742;
                this.match(Dart2Parser.T__115);
                this.state = 1743;
                this.identifier();
                this.state = 1748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__19) {
                    {
                        {
                            this.state = 1744;
                            this.match(Dart2Parser.T__19);
                            this.state = 1745;
                            this.identifier();
                        }
                    }
                    this.state = 1750;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1751;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.partDeclaration = function () {
        var _localctx = new PartDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 320, Dart2Parser.RULE_partDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1753;
                this.partHeader();
                this.state = 1757;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Dart2Parser.T__1) | (1 << Dart2Parser.T__2) | (1 << Dart2Parser.T__3) | (1 << Dart2Parser.T__5) | (1 << Dart2Parser.T__17) | (1 << Dart2Parser.T__18) | (1 << Dart2Parser.T__21) | (1 << Dart2Parser.T__22) | (1 << Dart2Parser.T__24) | (1 << Dart2Parser.T__25) | (1 << Dart2Parser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Dart2Parser.T__31 - 32)) | (1 << (Dart2Parser.T__32 - 32)) | (1 << (Dart2Parser.T__34 - 32)) | (1 << (Dart2Parser.T__37 - 32)) | (1 << (Dart2Parser.T__40 - 32)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Dart2Parser.T__109 - 110)) | (1 << (Dart2Parser.T__110 - 110)) | (1 << (Dart2Parser.T__113 - 110)) | (1 << (Dart2Parser.T__114 - 110)) | (1 << (Dart2Parser.T__116 - 110)) | (1 << (Dart2Parser.IDENTIFIER - 110)))) !== 0)) {
                    {
                        {
                            this.state = 1754;
                            this.topLevelDefinition();
                        }
                    }
                    this.state = 1759;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1760;
                this.match(Dart2Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.uri = function () {
        var _localctx = new UriContext(this._ctx, this.state);
        this.enterRule(_localctx, 322, Dart2Parser.RULE_uri);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1762;
                this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.configurableUri = function () {
        var _localctx = new ConfigurableUriContext(this._ctx, this.state);
        this.enterRule(_localctx, 324, Dart2Parser.RULE_configurableUri);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1764;
                this.uri();
                this.state = 1768;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__88) {
                    {
                        {
                            this.state = 1765;
                            this.configurationUri();
                        }
                    }
                    this.state = 1770;
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
    Dart2Parser.prototype.configurationUri = function () {
        var _localctx = new ConfigurationUriContext(this._ctx, this.state);
        this.enterRule(_localctx, 326, Dart2Parser.RULE_configurationUri);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1771;
                this.match(Dart2Parser.T__88);
                this.state = 1772;
                this.match(Dart2Parser.T__13);
                this.state = 1773;
                this.uriTest();
                this.state = 1774;
                this.match(Dart2Parser.T__14);
                this.state = 1775;
                this.uri();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.uriTest = function () {
        var _localctx = new UriTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 328, Dart2Parser.RULE_uriTest);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1777;
                this.dottedIdentifierList();
                this.state = 1780;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__30) {
                    {
                        this.state = 1778;
                        this.match(Dart2Parser.T__30);
                        this.state = 1779;
                        this.stringLiteral();
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
    Dart2Parser.prototype.dtype = function () {
        var _localctx = new DtypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 330, Dart2Parser.RULE_dtype);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1782;
                this.typeName();
                this.state = 1784;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__38) {
                    {
                        this.state = 1783;
                        this.typeArguments();
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
    Dart2Parser.prototype.typeName = function () {
        var _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 332, Dart2Parser.RULE_typeName);
        try {
            this.state = 1788;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Dart2Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1786;
                        this.qualified();
                    }
                    break;
                case Dart2Parser.T__5:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1787;
                        this.match(Dart2Parser.T__5);
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
    Dart2Parser.prototype.typeArguments = function () {
        var _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 334, Dart2Parser.RULE_typeArguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1790;
                this.match(Dart2Parser.T__38);
                this.state = 1791;
                this.typeList();
                this.state = 1792;
                this.match(Dart2Parser.T__39);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.typeList = function () {
        var _localctx = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 336, Dart2Parser.RULE_typeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1794;
                this.dtype();
                this.state = 1799;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Dart2Parser.T__0) {
                    {
                        {
                            this.state = 1795;
                            this.match(Dart2Parser.T__0);
                            this.state = 1796;
                            this.dtype();
                        }
                    }
                    this.state = 1801;
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
    Dart2Parser.prototype.typeAlias = function () {
        var _localctx = new TypeAliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 338, Dart2Parser.RULE_typeAlias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1802;
                this.metadata();
                this.state = 1803;
                this.match(Dart2Parser.T__116);
                this.state = 1804;
                this.typeAliasBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.typeAliasBody = function () {
        var _localctx = new TypeAliasBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 340, Dart2Parser.RULE_typeAliasBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1806;
                this.functionTypeAlias();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.functionTypeAlias = function () {
        var _localctx = new FunctionTypeAliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 342, Dart2Parser.RULE_functionTypeAlias);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1808;
                this.functionPrefix();
                this.state = 1810;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Dart2Parser.T__38) {
                    {
                        this.state = 1809;
                        this.typeParameters();
                    }
                }
                this.state = 1812;
                this.formalParameterList();
                this.state = 1813;
                this.match(Dart2Parser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Dart2Parser.prototype.functionPrefix = function () {
        var _localctx = new FunctionPrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 344, Dart2Parser.RULE_functionPrefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1816;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 214, this._ctx)) {
                    case 1:
                        {
                            this.state = 1815;
                            this.returnType();
                        }
                        break;
                }
                this.state = 1818;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(Dart2Parser, "_ATN", {
        get: function () {
            if (!Dart2Parser.__ATN) {
                Dart2Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(Dart2Parser._serializedATN));
            }
            return Dart2Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    Dart2Parser.T__0 = 1;
    Dart2Parser.T__1 = 2;
    Dart2Parser.T__2 = 3;
    Dart2Parser.T__3 = 4;
    Dart2Parser.T__4 = 5;
    Dart2Parser.T__5 = 6;
    Dart2Parser.T__6 = 7;
    Dart2Parser.T__7 = 8;
    Dart2Parser.T__8 = 9;
    Dart2Parser.T__9 = 10;
    Dart2Parser.T__10 = 11;
    Dart2Parser.T__11 = 12;
    Dart2Parser.T__12 = 13;
    Dart2Parser.T__13 = 14;
    Dart2Parser.T__14 = 15;
    Dart2Parser.T__15 = 16;
    Dart2Parser.T__16 = 17;
    Dart2Parser.T__17 = 18;
    Dart2Parser.T__18 = 19;
    Dart2Parser.T__19 = 20;
    Dart2Parser.T__20 = 21;
    Dart2Parser.T__21 = 22;
    Dart2Parser.T__22 = 23;
    Dart2Parser.T__23 = 24;
    Dart2Parser.T__24 = 25;
    Dart2Parser.T__25 = 26;
    Dart2Parser.T__26 = 27;
    Dart2Parser.T__27 = 28;
    Dart2Parser.T__28 = 29;
    Dart2Parser.T__29 = 30;
    Dart2Parser.T__30 = 31;
    Dart2Parser.T__31 = 32;
    Dart2Parser.T__32 = 33;
    Dart2Parser.T__33 = 34;
    Dart2Parser.T__34 = 35;
    Dart2Parser.T__35 = 36;
    Dart2Parser.T__36 = 37;
    Dart2Parser.T__37 = 38;
    Dart2Parser.T__38 = 39;
    Dart2Parser.T__39 = 40;
    Dart2Parser.T__40 = 41;
    Dart2Parser.T__41 = 42;
    Dart2Parser.T__42 = 43;
    Dart2Parser.T__43 = 44;
    Dart2Parser.T__44 = 45;
    Dart2Parser.T__45 = 46;
    Dart2Parser.T__46 = 47;
    Dart2Parser.T__47 = 48;
    Dart2Parser.T__48 = 49;
    Dart2Parser.T__49 = 50;
    Dart2Parser.T__50 = 51;
    Dart2Parser.T__51 = 52;
    Dart2Parser.T__52 = 53;
    Dart2Parser.T__53 = 54;
    Dart2Parser.T__54 = 55;
    Dart2Parser.T__55 = 56;
    Dart2Parser.T__56 = 57;
    Dart2Parser.T__57 = 58;
    Dart2Parser.T__58 = 59;
    Dart2Parser.T__59 = 60;
    Dart2Parser.T__60 = 61;
    Dart2Parser.T__61 = 62;
    Dart2Parser.T__62 = 63;
    Dart2Parser.T__63 = 64;
    Dart2Parser.T__64 = 65;
    Dart2Parser.T__65 = 66;
    Dart2Parser.T__66 = 67;
    Dart2Parser.T__67 = 68;
    Dart2Parser.T__68 = 69;
    Dart2Parser.T__69 = 70;
    Dart2Parser.T__70 = 71;
    Dart2Parser.T__71 = 72;
    Dart2Parser.T__72 = 73;
    Dart2Parser.T__73 = 74;
    Dart2Parser.T__74 = 75;
    Dart2Parser.T__75 = 76;
    Dart2Parser.T__76 = 77;
    Dart2Parser.T__77 = 78;
    Dart2Parser.T__78 = 79;
    Dart2Parser.T__79 = 80;
    Dart2Parser.T__80 = 81;
    Dart2Parser.T__81 = 82;
    Dart2Parser.T__82 = 83;
    Dart2Parser.T__83 = 84;
    Dart2Parser.T__84 = 85;
    Dart2Parser.T__85 = 86;
    Dart2Parser.T__86 = 87;
    Dart2Parser.T__87 = 88;
    Dart2Parser.T__88 = 89;
    Dart2Parser.T__89 = 90;
    Dart2Parser.T__90 = 91;
    Dart2Parser.T__91 = 92;
    Dart2Parser.T__92 = 93;
    Dart2Parser.T__93 = 94;
    Dart2Parser.T__94 = 95;
    Dart2Parser.T__95 = 96;
    Dart2Parser.T__96 = 97;
    Dart2Parser.T__97 = 98;
    Dart2Parser.T__98 = 99;
    Dart2Parser.T__99 = 100;
    Dart2Parser.T__100 = 101;
    Dart2Parser.T__101 = 102;
    Dart2Parser.T__102 = 103;
    Dart2Parser.T__103 = 104;
    Dart2Parser.T__104 = 105;
    Dart2Parser.T__105 = 106;
    Dart2Parser.T__106 = 107;
    Dart2Parser.T__107 = 108;
    Dart2Parser.T__108 = 109;
    Dart2Parser.T__109 = 110;
    Dart2Parser.T__110 = 111;
    Dart2Parser.T__111 = 112;
    Dart2Parser.T__112 = 113;
    Dart2Parser.T__113 = 114;
    Dart2Parser.T__114 = 115;
    Dart2Parser.T__115 = 116;
    Dart2Parser.T__116 = 117;
    Dart2Parser.WHITESPACE = 118;
    Dart2Parser.NUMBER = 119;
    Dart2Parser.HEX_NUMBER = 120;
    Dart2Parser.SingleLineString = 121;
    Dart2Parser.MultiLineString = 122;
    Dart2Parser.NEWLINE = 123;
    Dart2Parser.IDENTIFIER = 124;
    Dart2Parser.SINGLE_LINE_COMMENT = 125;
    Dart2Parser.MULTI_LINE_COMMENT = 126;
    Dart2Parser.RULE_compilationUnit = 0;
    Dart2Parser.RULE_variableDeclaration = 1;
    Dart2Parser.RULE_declaredIdentifier = 2;
    Dart2Parser.RULE_finalConstVarOrType = 3;
    Dart2Parser.RULE_varOrType = 4;
    Dart2Parser.RULE_initializedVariableDeclaration = 5;
    Dart2Parser.RULE_initializedIdentifier = 6;
    Dart2Parser.RULE_initializedIdentifierList = 7;
    Dart2Parser.RULE_functionSignature = 8;
    Dart2Parser.RULE_formalParameterPart = 9;
    Dart2Parser.RULE_returnType = 10;
    Dart2Parser.RULE_functionBody = 11;
    Dart2Parser.RULE_block = 12;
    Dart2Parser.RULE_formalParameterList = 13;
    Dart2Parser.RULE_normalFormalParameters = 14;
    Dart2Parser.RULE_optionalFormalParameters = 15;
    Dart2Parser.RULE_optionalPositionalFormalParameters = 16;
    Dart2Parser.RULE_namedFormalParameters = 17;
    Dart2Parser.RULE_normalFormalParameter = 18;
    Dart2Parser.RULE_functionFormalParameter = 19;
    Dart2Parser.RULE_simpleFormalParameter = 20;
    Dart2Parser.RULE_fieldFormalParameter = 21;
    Dart2Parser.RULE_defaultFormalParameter = 22;
    Dart2Parser.RULE_defaultNamedParameter = 23;
    Dart2Parser.RULE_classDefinition = 24;
    Dart2Parser.RULE_mixins = 25;
    Dart2Parser.RULE_classMemberDefinition = 26;
    Dart2Parser.RULE_methodSignature = 27;
    Dart2Parser.RULE_declaration = 28;
    Dart2Parser.RULE_staticFinalDeclarationList = 29;
    Dart2Parser.RULE_staticFinalDeclaration = 30;
    Dart2Parser.RULE_operatorSignature = 31;
    Dart2Parser.RULE_operator = 32;
    Dart2Parser.RULE_binaryOperator = 33;
    Dart2Parser.RULE_getterSignature = 34;
    Dart2Parser.RULE_setterSignature = 35;
    Dart2Parser.RULE_constructorSignature = 36;
    Dart2Parser.RULE_redirection = 37;
    Dart2Parser.RULE_initializers = 38;
    Dart2Parser.RULE_initializerListEntry = 39;
    Dart2Parser.RULE_fieldInitializer = 40;
    Dart2Parser.RULE_factoryConstructorSignature = 41;
    Dart2Parser.RULE_redirectingFactoryConstructorSignature = 42;
    Dart2Parser.RULE_constantConstructorSignature = 43;
    Dart2Parser.RULE_superclass = 44;
    Dart2Parser.RULE_interfaces = 45;
    Dart2Parser.RULE_mixinApplicationClass = 46;
    Dart2Parser.RULE_mixinApplication = 47;
    Dart2Parser.RULE_enumType = 48;
    Dart2Parser.RULE_enumEntry = 49;
    Dart2Parser.RULE_typeParameter = 50;
    Dart2Parser.RULE_typeParameters = 51;
    Dart2Parser.RULE_metadata = 52;
    Dart2Parser.RULE_expression = 53;
    Dart2Parser.RULE_expressionWithoutCascade = 54;
    Dart2Parser.RULE_expressionList = 55;
    Dart2Parser.RULE_primary = 56;
    Dart2Parser.RULE_literal = 57;
    Dart2Parser.RULE_nullLiteral = 58;
    Dart2Parser.RULE_numericLiteral = 59;
    Dart2Parser.RULE_booleanLiteral = 60;
    Dart2Parser.RULE_stringLiteral = 61;
    Dart2Parser.RULE_stringInterpolation = 62;
    Dart2Parser.RULE_symbolLiteral = 63;
    Dart2Parser.RULE_listLiteral = 64;
    Dart2Parser.RULE_mapLiteral = 65;
    Dart2Parser.RULE_mapLiteralEntry = 66;
    Dart2Parser.RULE_throwExpression = 67;
    Dart2Parser.RULE_throwExpressionWithoutCascade = 68;
    Dart2Parser.RULE_functionExpression = 69;
    Dart2Parser.RULE_thisExpression = 70;
    Dart2Parser.RULE_nayaExpression = 71;
    Dart2Parser.RULE_constObjectExpression = 72;
    Dart2Parser.RULE_arguments = 73;
    Dart2Parser.RULE_argumentList = 74;
    Dart2Parser.RULE_namedArgument = 75;
    Dart2Parser.RULE_cascadeSection = 76;
    Dart2Parser.RULE_cascadeSelector = 77;
    Dart2Parser.RULE_argumentPart = 78;
    Dart2Parser.RULE_assignmentOperator = 79;
    Dart2Parser.RULE_compoundAssignmentOperator = 80;
    Dart2Parser.RULE_conditionalExpression = 81;
    Dart2Parser.RULE_ifNullExpression = 82;
    Dart2Parser.RULE_logicalOrExpression = 83;
    Dart2Parser.RULE_logicalAndExpression = 84;
    Dart2Parser.RULE_equalityExpression = 85;
    Dart2Parser.RULE_equalityOperator = 86;
    Dart2Parser.RULE_relationalExpression = 87;
    Dart2Parser.RULE_relationalOperator = 88;
    Dart2Parser.RULE_bitwiseOrExpression = 89;
    Dart2Parser.RULE_bitwiseXorExpression = 90;
    Dart2Parser.RULE_bitwiseAndExpression = 91;
    Dart2Parser.RULE_bitwiseOperator = 92;
    Dart2Parser.RULE_shiftExpression = 93;
    Dart2Parser.RULE_shiftOperator = 94;
    Dart2Parser.RULE_additiveExpression = 95;
    Dart2Parser.RULE_additiveOperator = 96;
    Dart2Parser.RULE_multiplicativeExpression = 97;
    Dart2Parser.RULE_multiplicativeOperator = 98;
    Dart2Parser.RULE_unaryExpression = 99;
    Dart2Parser.RULE_prefixOperator = 100;
    Dart2Parser.RULE_minusOperator = 101;
    Dart2Parser.RULE_negationOperator = 102;
    Dart2Parser.RULE_tildeOperator = 103;
    Dart2Parser.RULE_awaitExpression = 104;
    Dart2Parser.RULE_postfixExpression = 105;
    Dart2Parser.RULE_postfixOperator = 106;
    Dart2Parser.RULE_selector = 107;
    Dart2Parser.RULE_incrementOperator = 108;
    Dart2Parser.RULE_assignableExpression = 109;
    Dart2Parser.RULE_unconditionalAssignableSelector = 110;
    Dart2Parser.RULE_assignableSelector = 111;
    Dart2Parser.RULE_identifier = 112;
    Dart2Parser.RULE_qualified = 113;
    Dart2Parser.RULE_typeTest = 114;
    Dart2Parser.RULE_isOperator = 115;
    Dart2Parser.RULE_typeCast = 116;
    Dart2Parser.RULE_asOperator = 117;
    Dart2Parser.RULE_statements = 118;
    Dart2Parser.RULE_statement = 119;
    Dart2Parser.RULE_nonLabledStatment = 120;
    Dart2Parser.RULE_expressionStatement = 121;
    Dart2Parser.RULE_localVariableDeclaration = 122;
    Dart2Parser.RULE_localFunctionDeclaration = 123;
    Dart2Parser.RULE_ifStatement = 124;
    Dart2Parser.RULE_forStatement = 125;
    Dart2Parser.RULE_forLoopParts = 126;
    Dart2Parser.RULE_forInitializerStatement = 127;
    Dart2Parser.RULE_whileStatement = 128;
    Dart2Parser.RULE_doStatement = 129;
    Dart2Parser.RULE_switchStatement = 130;
    Dart2Parser.RULE_switchCase = 131;
    Dart2Parser.RULE_defaultCase = 132;
    Dart2Parser.RULE_rethrowStatment = 133;
    Dart2Parser.RULE_tryStatement = 134;
    Dart2Parser.RULE_onPart = 135;
    Dart2Parser.RULE_catchPart = 136;
    Dart2Parser.RULE_finallyPart = 137;
    Dart2Parser.RULE_returnStatement = 138;
    Dart2Parser.RULE_label = 139;
    Dart2Parser.RULE_breakStatement = 140;
    Dart2Parser.RULE_continueStatement = 141;
    Dart2Parser.RULE_yieldStatement = 142;
    Dart2Parser.RULE_yieldEachStatement = 143;
    Dart2Parser.RULE_assertStatement = 144;
    Dart2Parser.RULE_assertion = 145;
    Dart2Parser.RULE_topLevelDefinition = 146;
    Dart2Parser.RULE_getOrSet = 147;
    Dart2Parser.RULE_libraryDefinition = 148;
    Dart2Parser.RULE_scriptTag = 149;
    Dart2Parser.RULE_libraryName = 150;
    Dart2Parser.RULE_importOrExport = 151;
    Dart2Parser.RULE_dottedIdentifierList = 152;
    Dart2Parser.RULE_libraryimport = 153;
    Dart2Parser.RULE_importSpecification = 154;
    Dart2Parser.RULE_combinator = 155;
    Dart2Parser.RULE_identifierList = 156;
    Dart2Parser.RULE_libraryExport = 157;
    Dart2Parser.RULE_partDirective = 158;
    Dart2Parser.RULE_partHeader = 159;
    Dart2Parser.RULE_partDeclaration = 160;
    Dart2Parser.RULE_uri = 161;
    Dart2Parser.RULE_configurableUri = 162;
    Dart2Parser.RULE_configurationUri = 163;
    Dart2Parser.RULE_uriTest = 164;
    Dart2Parser.RULE_dtype = 165;
    Dart2Parser.RULE_typeName = 166;
    Dart2Parser.RULE_typeArguments = 167;
    Dart2Parser.RULE_typeList = 168;
    Dart2Parser.RULE_typeAlias = 169;
    Dart2Parser.RULE_typeAliasBody = 170;
    Dart2Parser.RULE_functionTypeAlias = 171;
    Dart2Parser.RULE_functionPrefix = 172;
    // tslint:disable:no-trailing-whitespace
    Dart2Parser.ruleNames = [
        "compilationUnit", "variableDeclaration", "declaredIdentifier", "finalConstVarOrType",
        "varOrType", "initializedVariableDeclaration", "initializedIdentifier",
        "initializedIdentifierList", "functionSignature", "formalParameterPart",
        "returnType", "functionBody", "block", "formalParameterList", "normalFormalParameters",
        "optionalFormalParameters", "optionalPositionalFormalParameters", "namedFormalParameters",
        "normalFormalParameter", "functionFormalParameter", "simpleFormalParameter",
        "fieldFormalParameter", "defaultFormalParameter", "defaultNamedParameter",
        "classDefinition", "mixins", "classMemberDefinition", "methodSignature",
        "declaration", "staticFinalDeclarationList", "staticFinalDeclaration",
        "operatorSignature", "operator", "binaryOperator", "getterSignature",
        "setterSignature", "constructorSignature", "redirection", "initializers",
        "initializerListEntry", "fieldInitializer", "factoryConstructorSignature",
        "redirectingFactoryConstructorSignature", "constantConstructorSignature",
        "superclass", "interfaces", "mixinApplicationClass", "mixinApplication",
        "enumType", "enumEntry", "typeParameter", "typeParameters", "metadata",
        "expression", "expressionWithoutCascade", "expressionList", "primary",
        "literal", "nullLiteral", "numericLiteral", "booleanLiteral", "stringLiteral",
        "stringInterpolation", "symbolLiteral", "listLiteral", "mapLiteral", "mapLiteralEntry",
        "throwExpression", "throwExpressionWithoutCascade", "functionExpression",
        "thisExpression", "nayaExpression", "constObjectExpression", "arguments",
        "argumentList", "namedArgument", "cascadeSection", "cascadeSelector",
        "argumentPart", "assignmentOperator", "compoundAssignmentOperator", "conditionalExpression",
        "ifNullExpression", "logicalOrExpression", "logicalAndExpression", "equalityExpression",
        "equalityOperator", "relationalExpression", "relationalOperator", "bitwiseOrExpression",
        "bitwiseXorExpression", "bitwiseAndExpression", "bitwiseOperator", "shiftExpression",
        "shiftOperator", "additiveExpression", "additiveOperator", "multiplicativeExpression",
        "multiplicativeOperator", "unaryExpression", "prefixOperator", "minusOperator",
        "negationOperator", "tildeOperator", "awaitExpression", "postfixExpression",
        "postfixOperator", "selector", "incrementOperator", "assignableExpression",
        "unconditionalAssignableSelector", "assignableSelector", "identifier",
        "qualified", "typeTest", "isOperator", "typeCast", "asOperator", "statements",
        "statement", "nonLabledStatment", "expressionStatement", "localVariableDeclaration",
        "localFunctionDeclaration", "ifStatement", "forStatement", "forLoopParts",
        "forInitializerStatement", "whileStatement", "doStatement", "switchStatement",
        "switchCase", "defaultCase", "rethrowStatment", "tryStatement", "onPart",
        "catchPart", "finallyPart", "returnStatement", "label", "breakStatement",
        "continueStatement", "yieldStatement", "yieldEachStatement", "assertStatement",
        "assertion", "topLevelDefinition", "getOrSet", "libraryDefinition", "scriptTag",
        "libraryName", "importOrExport", "dottedIdentifierList", "libraryimport",
        "importSpecification", "combinator", "identifierList", "libraryExport",
        "partDirective", "partHeader", "partDeclaration", "uri", "configurableUri",
        "configurationUri", "uriTest", "dtype", "typeName", "typeArguments", "typeList",
        "typeAlias", "typeAliasBody", "functionTypeAlias", "functionPrefix",
    ];
    Dart2Parser._LITERAL_NAMES = [
        undefined, "','", "'final'", "'const'", "'var'", "'='", "'void'", "'async'",
        "'=>'", "';'", "'async*'", "'sync*'", "'{'", "'}'", "'('", "')'", "'['",
        "']'", "'covariant'", "'this'", "'.'", "':'", "'abstract'", "'class'",
        "'with'", "'static'", "'external'", "'operator'", "'~'", "'[]'", "'[]='",
        "'=='", "'get'", "'set'", "'super'", "'factory'", "'extends'", "'implements'",
        "'enum'", "'<'", "'>'", "'@'", "'null'", "'true'", "'false'", "'$'", "'${'",
        "'#'", "'throw'", "'new'", "'..'", "'*='", "'/='", "'~/='", "'%='", "'+='",
        "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'??='", "'?'", "'??'",
        "'||'", "'&&'", "'!='", "'>='", "'<='", "'|'", "'^'", "'&'", "'<<'", "'>>'",
        "'>>>'", "'+'", "'-'", "'*'", "'/'", "'%'", "'~/'", "'!'", "'await'",
        "'++'", "'--'", "'?.'", "'is'", "'as'", "'if'", "'else'", "'for'", "'in'",
        "'while'", "'do'", "'switch'", "'case'", "'default'", "'rethrow'", "'try'",
        "'on'", "'catch'", "'finally'", "'return'", "'break'", "'continue'", "'yield'",
        "'yield*'", "'assert'", "'#!'", "'library'", "'import'", "'show'", "'hide'",
        "'export'", "'part'", "'of'", "'typedef'",
    ];
    Dart2Parser._SYMBOLIC_NAMES = [
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
        undefined, undefined, undefined, undefined, undefined, undefined, "WHITESPACE",
        "NUMBER", "HEX_NUMBER", "SingleLineString", "MultiLineString", "NEWLINE",
        "IDENTIFIER", "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT",
    ];
    Dart2Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(Dart2Parser._LITERAL_NAMES, Dart2Parser._SYMBOLIC_NAMES, []);
    Dart2Parser._serializedATNSegments = 4;
    Dart2Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x80\u071F\x04" +
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
        "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
        "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
        "\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
        "\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
        "\x03\x02\x03\x02\x05\x02\u015F\n\x02\x03\x03\x03\x03\x03\x03\x07\x03\u0164" +
        "\n\x03\f\x03\x0E\x03\u0167\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x05\x05\u016F\n\x05\x03\x05\x03\x05\x05\x05\u0173\n\x05\x03\x05" +
        "\x05\x05\u0176\n\x05\x03\x06\x03\x06\x05\x06\u017A\n\x06\x03\x07\x03\x07" +
        "\x03\x07\x05\x07\u017F\n\x07\x03\x07\x03\x07\x07\x07\u0183\n\x07\f\x07" +
        "\x0E\x07\u0186\v\x07\x03\b\x03\b\x03\b\x05\b\u018B\n\b\x03\t\x03\t\x03" +
        "\t\x07\t\u0190\n\t\f\t\x0E\t\u0193\v\t\x03\n\x03\n\x05\n\u0197\n\n\x03" +
        "\n\x03\n\x03\n\x03\v\x05\v\u019D\n\v\x03\v\x03\v\x03\f\x03\f\x05\f\u01A3" +
        "\n\f\x03\r\x05\r\u01A6\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01AD\n" +
        "\r\x03\r\x05\r\u01B0\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
        "\u01C0\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01C8" +
        "\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u01CD\n\x10\f\x10\x0E\x10\u01D0" +
        "\v\x10\x03\x11\x03\x11\x05\x11\u01D4\n\x11\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x07\x12\u01DA\n\x12\f\x12\x0E\x12\u01DD\v\x12\x03\x12\x05\x12\u01E0" +
        "\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01E8\n" +
        "\x13\f\x13\x0E\x13\u01EB\v\x13\x03\x13\x05\x13\u01EE\n\x13\x03\x13\x03" +
        "\x13\x03\x14\x03\x14\x03\x14\x05\x14\u01F5\n\x14\x03\x15\x03\x15\x05\x15" +
        "\u01F9\n\x15\x03\x15\x05\x15\u01FC\n\x15\x03\x15\x03\x15\x03\x15\x03\x16" +
        "\x03\x16\x03\x16\x05\x16\u0204\n\x16\x03\x16\x03\x16\x05\x16\u0208\n\x16" +
        "\x03\x17\x03\x17\x05\x17\u020C\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05" +
        "\x17\u0212\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0217\n\x18\x03\x19\x03" +
        "\x19\x03\x19\x05\x19\u021C\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0221" +
        "\n\x19\x05\x19\u0223\n\x19\x03\x1A\x03\x1A\x05\x1A\u0227\n\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x05\x1A\u022C\n\x1A\x03\x1A\x05\x1A\u022F\n\x1A\x03\x1A" +
        "\x05\x1A\u0232\n\x1A\x03\x1A\x05\x1A\u0235\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1A\x07\x1A\u023B\n\x1A\f\x1A\x0E\x1A\u023E\v\x1A\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x05\x1A\u0244\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0249" +
        "\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x05\x1C\u0254\n\x1C\x03\x1D\x03\x1D\x05\x1D\u0258\n\x1D\x03\x1D" +
        "\x03\x1D\x05\x1D\u025C\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0260\n\x1D\x03\x1D" +
        "\x03\x1D\x05\x1D\u0264\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0268\n\x1D\x03\x1E" +
        "\x03\x1E\x03\x1E\x05\x1E\u026D\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0272" +
        "\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u027A\n" +
        "\x1E\x05\x1E\u027C\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0281\n\x1E\x05" +
        "\x1E\u0283\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0287\n\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u028C\n\x1E\x05\x1E\u028E\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u0294\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0299\n\x1E\x03" +
        "\x1E\x03\x1E\x05\x1E\u029D\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02A1\n\x1E\x03" +
        "\x1E\x05\x1E\u02A4\n\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u02A9\n\x1F\f" +
        "\x1F\x0E\x1F\u02AC\v\x1F\x03 \x03 \x03 \x03 \x03!\x05!\u02B3\n!\x03!\x03" +
        "!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\u02BD\n\"\x03#\x03#\x03#\x03" +
        "#\x03#\x03#\x05#\u02C5\n#\x03$\x05$\u02C8\n$\x03$\x03$\x03$\x03%\x05%" +
        "\u02CE\n%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x05&\u02D7\n&\x03&\x03&\x03" +
        "\'\x03\'\x03\'\x03\'\x05\'\u02DF\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x07" +
        "(\u02E7\n(\f(\x0E(\u02EA\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x05)\u02F5\n)\x03*\x03*\x05*\u02F9\n*\x03*\x03*\x03*\x03*\x07*\u02FF" +
        "\n*\f*\x0E*\u0302\v*\x03+\x03+\x03+\x03+\x05+\u0308\n+\x03+\x03+\x03," +
        "\x05,\u030D\n,\x03,\x03,\x03,\x03,\x05,\u0313\n,\x03,\x03,\x03,\x03,\x03" +
        ",\x05,\u031A\n,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
        "0\x030\x050\u0328\n0\x030\x030\x030\x030\x031\x031\x031\x051\u0331\n1" +
        "\x032\x032\x032\x032\x032\x032\x032\x072\u033A\n2\f2\x0E2\u033D\v2\x03" +
        "2\x052\u0340\n2\x032\x032\x033\x033\x033\x034\x034\x034\x034\x054\u034B" +
        "\n4\x035\x035\x035\x035\x075\u0351\n5\f5\x0E5\u0354\v5\x035\x035\x036" +
        "\x036\x036\x036\x056\u035C\n6\x036\x056\u035F\n6\x076\u0361\n6\f6\x0E" +
        "6\u0364\v6\x037\x037\x037\x037\x037\x037\x077\u036C\n7\f7\x0E7\u036F\v" +
        "7\x037\x057\u0372\n7\x038\x038\x038\x038\x038\x038\x058\u037A\n8\x039" +
        "\x039\x039\x079\u037F\n9\f9\x0E9\u0382\v9\x03:\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0390\n:\x03;\x03;\x03;\x03;\x03" +
        ";\x03;\x03;\x05;\u0399\n;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x06?\u03A2" +
        "\n?\r?\x0E?\u03A3\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u03AC\n@\x03A\x03" +
        "A\x03A\x03A\x03A\x07A\u03B3\nA\fA\x0EA\u03B6\vA\x05A\u03B8\nA\x03B\x05" +
        "B\u03BB\nB\x03B\x05B\u03BE\nB\x03B\x03B\x03B\x05B\u03C3\nB\x05B\u03C5" +
        "\nB\x03B\x03B\x03C\x05C\u03CA\nC\x03C\x05C\u03CD\nC\x03C\x03C\x03C\x03" +
        "C\x07C\u03D3\nC\fC\x0EC\u03D6\vC\x03C\x05C\u03D9\nC\x05C\u03DB\nC\x03" +
        "C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03" +
        "G\x03H\x03H\x03I\x03I\x03I\x03I\x05I\u03F2\nI\x03I\x03I\x03J\x03J\x03" +
        "J\x03J\x05J\u03FA\nJ\x03J\x03J\x03K\x03K\x03K\x05K\u0401\nK\x05K\u0403" +
        "\nK\x03K\x03K\x03L\x03L\x03L\x07L\u040A\nL\fL\x0EL\u040D\vL\x03L\x03L" +
        "\x03L\x07L\u0412\nL\fL\x0EL\u0415\vL\x05L\u0417\nL\x03M\x03M\x03M\x03" +
        "N\x03N\x03N\x07N\u041F\nN\fN\x0EN\u0422\vN\x03N\x03N\x07N\u0426\nN\fN" +
        "\x0EN\u0429\vN\x07N\u042B\nN\fN\x0EN\u042E\vN\x03N\x03N\x03N\x05N\u0433" +
        "\nN\x03O\x03O\x03O\x03O\x03O\x05O\u043A\nO\x03P\x05P\u043D\nP\x03P\x03" +
        "P\x03Q\x03Q\x05Q\u0443\nQ\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x05" +
        "S\u044D\nS\x03T\x03T\x03T\x07T\u0452\nT\fT\x0ET\u0455\vT\x03U\x03U\x03" +
        "U\x07U\u045A\nU\fU\x0EU\u045D\vU\x03V\x03V\x03V\x07V\u0462\nV\fV\x0EV" +
        "\u0465\vV\x03W\x03W\x03W\x03W\x05W\u046B\nW\x03W\x03W\x03W\x03W\x05W\u0471" +
        "\nW\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u047B\nY\x03Y\x03Y\x03" +
        "Y\x03Y\x05Y\u0481\nY\x03Z\x03Z\x03[\x03[\x03[\x07[\u0488\n[\f[\x0E[\u048B" +
        "\v[\x03[\x03[\x03[\x06[\u0490\n[\r[\x0E[\u0491\x05[\u0494\n[\x03\\\x03" +
        "\\\x03\\\x07\\\u0499\n\\\f\\\x0E\\\u049C\v\\\x03\\\x03\\\x03\\\x06\\\u04A1" +
        "\n\\\r\\\x0E\\\u04A2\x05\\\u04A5\n\\\x03]\x03]\x03]\x07]\u04AA\n]\f]\x0E" +
        "]\u04AD\v]\x03]\x03]\x03]\x06]\u04B2\n]\r]\x0E]\u04B3\x05]\u04B6\n]\x03" +
        "^\x03^\x03_\x03_\x03_\x03_\x07_\u04BE\n_\f_\x0E_\u04C1\v_\x03_\x03_\x03" +
        "_\x03_\x06_\u04C7\n_\r_\x0E_\u04C8\x05_\u04CB\n_\x03`\x03`\x03a\x03a\x03" +
        "a\x03a\x07a\u04D3\na\fa\x0Ea\u04D6\va\x03a\x03a\x03a\x03a\x06a\u04DC\n" +
        "a\ra\x0Ea\u04DD\x05a\u04E0\na\x03b\x03b\x03c\x03c\x03c\x03c\x07c\u04E8" +
        "\nc\fc\x0Ec\u04EB\vc\x03c\x03c\x03c\x03c\x06c\u04F1\nc\rc\x0Ec\u04F2\x05" +
        "c\u04F5\nc\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0500\ne" +
        "\x03e\x03e\x03e\x03e\x03e\x05e\u0507\ne\x03f\x03f\x03f\x05f\u050C\nf\x03" +
        "g\x03g\x03h\x03h\x03i\x03i\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x07" +
        "k\u051C\nk\fk\x0Ek\u051F\vk\x05k\u0521\nk\x03l\x03l\x03m\x03m\x05m\u0527" +
        "\nm\x03n\x03n\x03o\x03o\x07o\u052D\no\fo\x0Eo\u0530\vo\x03o\x05o\u0533" +
        "\no\x03o\x03o\x03o\x03o\x05o\u0539\no\x03p\x03p\x03p\x03p\x03p\x03p\x05" +
        "p\u0541\np\x03q\x03q\x03q\x05q\u0546\nq\x03r\x03r\x03s\x03s\x03s\x05s" +
        "\u054D\ns\x03t\x03t\x03t\x03u\x03u\x05u\u0554\nu\x03v\x03v\x03v\x03w\x03" +
        "w\x03x\x07x\u055C\nx\fx\x0Ex\u055F\vx\x03y\x07y\u0562\ny\fy\x0Ey\u0565" +
        "\vy\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03" +
        "z\x03z\x03z\x03z\x03z\x03z\x05z\u057A\nz\x03{\x05{\u057D\n{\x03{\x03{" +
        "\x03|\x03|\x03|\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05" +
        "~\u058E\n~\x03\x7F\x05\x7F\u0591\n\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x80\x03\x80\x05\x80\u059B\n\x80\x03\x80\x03\x80\x05" +
        "\x80\u059F\n\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80" +
        "\x03\x80\x05\x80\u05A9\n\x80\x03\x81\x03\x81\x05\x81\u05AD\n\x81\x03\x81" +
        "\x05\x81\u05B0\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03" +
        "\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x84\x03" +
        "\x84\x03\x84\x03\x84\x03\x84\x03\x84\x07\x84\u05C6\n\x84\f\x84\x0E\x84" +
        "\u05C9\v\x84\x03\x84\x05\x84\u05CC\n\x84\x03\x84\x03\x84\x03\x85\x07\x85" +
        "\u05D1\n\x85\f\x85\x0E\x85\u05D4\v\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
        "\x03\x85\x03\x86\x07\x86\u05DC\n\x86\f\x86\x0E\x86\u05DF\v\x86\x03\x86" +
        "\x03\x86\x03\x86\x03\x86\x03\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88" +
        "\x06\x88\u05EB\n\x88\r\x88\x0E\x88\u05EC\x03\x88\x05\x88\u05F0\n\x88\x03" +
        "\x88\x05\x88\u05F3\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89" +
        "\x05\x89\u05FB\n\x89\x03\x89\x03\x89\x05\x89\u05FF\n\x89\x03\x8A\x03\x8A" +
        "\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0606\n\x8A\x03\x8A\x03\x8A\x03\x8B\x03" +
        "\x8B\x03\x8B\x03\x8C\x03\x8C\x05\x8C\u060F\n\x8C\x03\x8C\x03\x8C\x03\x8D" +
        "\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u0618\n\x8E\x03\x8E\x03\x8E\x03" +
        "\x8F\x03\x8F\x05\x8F\u061E\n\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90" +
        "\x03\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x93" +
        "\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0632\n\x93\x03\x93\x05\x93\u0635" +
        "\n\x93\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u063D\n" +
        "\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u0643\n\x94\x03\x94\x03\x94" +
        "\x03\x94\x03\x94\x05\x94\u0649\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03" +
        "\x94\x03\x94\x03\x94\x05\x94\u0652\n\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
        "\x03\x94\x05\x94\u0659\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03" +
        "\x94\x03\x94\x05\x94\u0662\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
        "\x03\x94\x05\x94\u066A\n\x94\x03\x95\x03\x95\x03\x96\x05\x96\u066F\n\x96" +
        "\x03\x96\x05\x96\u0672\n\x96\x03\x96\x07\x96\u0675\n\x96\f\x96\x0E\x96" +
        "\u0678\v\x96\x03\x96\x07\x96\u067B\n\x96\f\x96\x0E\x96\u067E\v\x96\x03" +
        "\x96\x07\x96\u0681\n\x96\f\x96\x0E\x96\u0684\v\x96\x03\x97\x03\x97\x07" +
        "\x97\u0688\n\x97\f\x97\x0E\x97\u068B\v\x97\x03\x97\x03\x97\x03\x98\x03" +
        "\x98\x03\x98\x03\x98\x03\x98\x03\x99\x03\x99\x05\x99\u0696\n\x99\x03\x9A" +
        "\x03\x9A\x03\x9A\x07\x9A\u069B\n\x9A\f\x9A\x0E\x9A\u069E\v\x9A\x03\x9B" +
        "\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x05\x9C\u06A7\n\x9C\x03" +
        "\x9C\x07\x9C\u06AA\n\x9C\f\x9C\x0E\x9C\u06AD\v\x9C\x03\x9C\x03\x9C\x03" +
        "\x9D\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u06B5\n\x9D\x03\x9E\x03\x9E\x03\x9E" +
        "\x07\x9E\u06BA\n\x9E\f\x9E\x0E\x9E\u06BD\v\x9E\x03\x9F\x03\x9F\x03\x9F" +
        "\x03\x9F\x07\x9F\u06C3\n\x9F\f\x9F\x0E\x9F\u06C6\v\x9F\x03\x9F\x03\x9F" +
        "\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1" +
        "\x03\xA1\x03\xA1\x07\xA1\u06D5\n\xA1\f\xA1\x0E\xA1\u06D8\v\xA1\x03\xA1" +
        "\x03\xA1\x03\xA2\x03\xA2\x07\xA2\u06DE\n\xA2\f\xA2\x0E\xA2\u06E1\v\xA2" +
        "\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x07\xA4\u06E9\n\xA4\f" +
        "\xA4\x0E\xA4\u06EC\v\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5" +
        "\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u06F7\n\xA6\x03\xA7\x03\xA7\x05\xA7\u06FB" +
        "\n\xA7\x03\xA8\x03\xA8\x05\xA8\u06FF\n\xA8\x03\xA9\x03\xA9\x03\xA9\x03" +
        "\xA9\x03\xAA\x03\xAA\x03\xAA\x07\xAA\u0708\n\xAA\f\xAA\x0E\xAA\u070B\v" +
        "\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x05" +
        "\xAD\u0715\n\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x05\xAE\u071B\n\xAE\x03" +
        "\xAE\x03\xAE\x03\xAE\x02\x02\x02\xAF\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
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
        "\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
        "\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
        "\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
        "\x02\u015A\x02\x02\x12\x04\x02\t\t\f\r\x03\x02\x04\x05\x04\x02\x14\x14" +
        "\x1B\x1B\x03\x02yz\x03\x02-.\x03\x02{|\x03\x025@\x04\x02!!EE\x04\x02)" +
        "*FG\x03\x02HJ\x03\x02KM\x03\x02NO\x03\x02PS\x03\x02VW\x03\x02\"#\x03\x02" +
        "}}\x02\u078F\x02\u015E\x03\x02\x02\x02\x04\u0160\x03\x02\x02\x02\x06\u0168" +
        "\x03\x02\x02\x02\b\u0175\x03\x02\x02\x02\n\u0179\x03\x02\x02\x02\f\u017B" +
        "\x03\x02\x02\x02\x0E\u0187\x03\x02\x02\x02\x10\u018C\x03\x02\x02\x02\x12" +
        "\u0194\x03\x02\x02\x02\x14\u019C\x03\x02\x02\x02\x16\u01A2\x03\x02\x02" +
        "\x02\x18\u01AF\x03\x02\x02\x02\x1A\u01B1\x03\x02\x02\x02\x1C\u01C7\x03" +
        "\x02\x02\x02\x1E\u01C9\x03\x02\x02\x02 \u01D3\x03\x02\x02\x02\"\u01D5" +
        "\x03\x02\x02\x02$\u01E3\x03\x02\x02\x02&\u01F4\x03\x02\x02\x02(\u01F6" +
        "\x03\x02\x02\x02*\u0207\x03\x02\x02\x02,\u0209\x03\x02\x02\x02.\u0213" +
        "\x03\x02\x02\x020\u0222\x03\x02\x02\x022\u0248\x03\x02\x02\x024\u024A" +
        "\x03\x02\x02\x026\u0253\x03\x02\x02\x028\u0267\x03\x02\x02\x02:\u02A3" +
        "\x03\x02\x02\x02<\u02A5\x03\x02\x02\x02>\u02AD\x03\x02\x02\x02@\u02B2" +
        "\x03\x02\x02\x02B\u02BC\x03\x02\x02\x02D\u02C4\x03\x02\x02\x02F\u02C7" +
        "\x03\x02\x02\x02H\u02CD\x03\x02\x02\x02J\u02D3\x03\x02\x02\x02L\u02DA" +
        "\x03\x02\x02\x02N\u02E2\x03\x02\x02\x02P\u02F4\x03\x02\x02\x02R\u02F8" +
        "\x03\x02\x02\x02T\u0303\x03\x02\x02\x02V\u030C\x03\x02\x02\x02X\u031B" +
        "\x03\x02\x02\x02Z\u031F\x03\x02\x02\x02\\\u0322\x03\x02\x02\x02^\u0325" +
        "\x03\x02\x02\x02`\u032D\x03\x02\x02\x02b\u0332\x03\x02\x02\x02d\u0343" +
        "\x03\x02\x02\x02f\u0346\x03\x02\x02\x02h\u034C\x03\x02\x02\x02j\u0362" +
        "\x03\x02\x02\x02l\u0371\x03\x02\x02\x02n\u0379\x03\x02\x02\x02p\u037B" +
        "\x03\x02\x02\x02r\u038F\x03\x02\x02\x02t\u0398\x03\x02\x02\x02v\u039A" +
        "\x03\x02\x02\x02x\u039C\x03\x02\x02\x02z\u039E\x03\x02\x02\x02|\u03A1" +
        "\x03\x02\x02\x02~\u03AB\x03\x02\x02\x02\x80\u03AD\x03\x02\x02\x02\x82" +
        "\u03BA\x03\x02\x02\x02\x84\u03C9\x03\x02\x02\x02\x86\u03DE\x03\x02\x02" +
        "\x02\x88\u03E2\x03\x02\x02\x02\x8A\u03E5\x03\x02\x02\x02\x8C\u03E8\x03" +
        "\x02\x02\x02\x8E\u03EB\x03\x02\x02\x02\x90\u03ED\x03\x02\x02\x02\x92\u03F5" +
        "\x03\x02\x02\x02\x94\u03FD\x03\x02\x02\x02\x96\u0416\x03\x02\x02\x02\x98" +
        "\u0418\x03\x02\x02\x02\x9A\u041B\x03\x02\x02\x02\x9C\u0439\x03\x02\x02" +
        "\x02\x9E\u043C\x03\x02\x02\x02\xA0\u0442\x03\x02\x02\x02\xA2\u0444\x03" +
        "\x02\x02\x02\xA4\u0446\x03\x02\x02\x02\xA6\u044E\x03\x02\x02\x02\xA8\u0456" +
        "\x03\x02\x02\x02\xAA\u045E\x03\x02\x02\x02\xAC\u0470\x03\x02\x02\x02\xAE" +
        "\u0472\x03\x02\x02\x02\xB0\u0480\x03\x02\x02\x02\xB2\u0482\x03\x02\x02" +
        "\x02\xB4\u0493\x03\x02\x02\x02\xB6\u04A4\x03\x02\x02\x02\xB8\u04B5\x03" +
        "\x02\x02\x02\xBA\u04B7\x03\x02\x02\x02\xBC\u04CA\x03\x02\x02\x02\xBE\u04CC" +
        "\x03\x02\x02\x02\xC0\u04DF\x03\x02\x02\x02\xC2\u04E1\x03\x02\x02\x02\xC4" +
        "\u04F4\x03\x02\x02\x02\xC6\u04F6\x03\x02\x02\x02\xC8\u0506\x03\x02\x02" +
        "\x02\xCA\u050B\x03\x02\x02\x02\xCC\u050D\x03\x02\x02\x02\xCE\u050F\x03" +
        "\x02\x02\x02\xD0\u0511\x03\x02\x02\x02\xD2\u0513\x03\x02\x02\x02\xD4\u0520" +
        "\x03\x02\x02\x02\xD6\u0522\x03\x02\x02\x02\xD8\u0526\x03\x02\x02";
    Dart2Parser._serializedATNSegment1 = "\x02\xDA\u0528\x03\x02\x02\x02\xDC\u0538\x03\x02\x02\x02\xDE\u0540\x03" +
        "\x02\x02\x02\xE0\u0545\x03\x02\x02\x02\xE2\u0547\x03\x02\x02\x02\xE4\u0549" +
        "\x03\x02\x02\x02\xE6\u054E\x03\x02\x02\x02\xE8\u0551\x03\x02\x02\x02\xEA" +
        "\u0555\x03\x02\x02\x02\xEC\u0558\x03\x02\x02\x02\xEE\u055D\x03\x02\x02" +
        "\x02\xF0\u0563\x03\x02\x02\x02\xF2\u0579\x03\x02\x02\x02\xF4\u057C\x03" +
        "\x02\x02\x02\xF6\u0580\x03\x02\x02\x02\xF8\u0583\x03\x02\x02\x02\xFA\u0586" +
        "\x03\x02\x02\x02\xFC\u0590\x03\x02\x02\x02\xFE\u05A8\x03\x02\x02\x02\u0100" +
        "\u05AF\x03\x02\x02\x02\u0102\u05B1\x03\x02\x02\x02\u0104\u05B7\x03\x02" +
        "\x02\x02\u0106\u05BF\x03\x02\x02\x02\u0108\u05D2\x03\x02\x02\x02\u010A" +
        "\u05DD\x03\x02\x02\x02\u010C\u05E4\x03\x02\x02\x02\u010E\u05E7\x03\x02" +
        "\x02\x02\u0110\u05FE\x03\x02\x02\x02\u0112\u0600\x03\x02\x02\x02\u0114" +
        "\u0609\x03\x02\x02\x02\u0116\u060C\x03\x02\x02\x02\u0118\u0612\x03\x02" +
        "\x02\x02\u011A\u0615\x03\x02\x02\x02\u011C\u061B\x03\x02\x02\x02\u011E" +
        "\u0621\x03\x02\x02\x02\u0120\u0625\x03\x02\x02\x02\u0122\u0629\x03\x02" +
        "\x02\x02\u0124\u062C\x03\x02\x02\x02\u0126\u0669\x03\x02\x02\x02\u0128" +
        "\u066B\x03\x02\x02\x02\u012A\u066E\x03\x02\x02\x02\u012C\u0685\x03\x02" +
        "\x02\x02\u012E\u068E\x03\x02\x02\x02\u0130\u0695\x03\x02\x02\x02\u0132" +
        "\u0697\x03\x02\x02\x02\u0134\u069F\x03\x02\x02\x02\u0136\u06A2\x03\x02" +
        "\x02\x02\u0138\u06B4\x03\x02\x02\x02\u013A\u06B6\x03\x02\x02\x02\u013C" +
        "\u06BE\x03\x02\x02\x02\u013E\u06C9\x03\x02\x02\x02\u0140\u06CE\x03\x02" +
        "\x02\x02\u0142\u06DB\x03\x02\x02\x02\u0144\u06E4\x03\x02\x02\x02\u0146" +
        "\u06E6\x03\x02\x02\x02\u0148\u06ED\x03\x02\x02\x02\u014A\u06F3\x03\x02" +
        "\x02\x02\u014C\u06F8\x03\x02\x02\x02\u014E\u06FE\x03\x02\x02\x02\u0150" +
        "\u0700\x03\x02\x02\x02\u0152\u0704\x03\x02\x02\x02\u0154\u070C\x03\x02" +
        "\x02\x02\u0156\u0710\x03\x02\x02\x02\u0158\u0712\x03\x02\x02\x02\u015A" +
        "\u071A\x03\x02\x02\x02\u015C\u015F\x05\u012A\x96\x02\u015D\u015F\x05\u0142" +
        "\xA2\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F" +
        "\x03\x03\x02\x02\x02\u0160\u0165\x05\x06\x04\x02\u0161\u0162\x07\x03\x02" +
        "\x02\u0162\u0164\x05\xE2r\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0167" +
        "\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02" +
        "\u0166\x05\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0169\x05" +
        "j6\x02\u0169\u016A\x05\b\x05\x02\u016A\u016B\x05\xE2r\x02\u016B\x07\x03" +
        "\x02\x02\x02\u016C\u016E\x07\x04\x02\x02\u016D\u016F\x05\u014C\xA7\x02" +
        "\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0176\x03" +
        "\x02\x02\x02\u0170\u0172\x07\x05\x02\x02\u0171\u0173\x05\u014C\xA7\x02" +
        "\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0176\x03" +
        "\x02\x02\x02\u0174\u0176\x05\n\x06\x02\u0175\u016C\x03\x02\x02\x02\u0175" +
        "\u0170\x03\x02\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\t\x03\x02\x02" +
        "\x02\u0177\u017A\x07\x06\x02\x02\u0178\u017A\x05\u014C\xA7\x02\u0179\u0177" +
        "\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\v\x03\x02\x02\x02\u017B" +
        "\u017E\x05\x06\x04\x02\u017C\u017D\x07\x07\x02\x02\u017D\u017F\x05l7\x02" +
        "\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0184\x03" +
        "\x02\x02\x02\u0180\u0181\x07\x03\x02\x02\u0181\u0183\x05\x0E\b\x02\u0182" +
        "\u0180\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02" +
        "\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\r\x03\x02\x02\x02\u0186\u0184" +
        "\x03\x02\x02\x02\u0187\u018A\x05\xE2r\x02\u0188\u0189\x07\x07\x02\x02" +
        "\u0189\u018B\x05l7\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02" +
        "\x02\x02\u018B\x0F\x03\x02\x02\x02\u018C\u0191\x05\x0E\b\x02\u018D\u018E" +
        "\x07\x03\x02\x02\u018E\u0190\x05\x0E\b\x02\u018F\u018D\x03\x02\x02\x02" +
        "\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03" +
        "\x02\x02\x02\u0192\x11\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194" +
        "\u0196\x05j6\x02\u0195\u0197\x05\x16\f\x02\u0196\u0195\x03\x02\x02\x02" +
        "\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x05" +
        "\xE2r\x02\u0199\u019A\x05\x14\v\x02\u019A\x13\x03\x02\x02\x02\u019B\u019D" +
        "\x05h5\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D" +
        "\u019E\x03\x02\x02\x02\u019E\u019F\x05\x1C\x0F\x02\u019F\x15\x03\x02\x02" +
        "\x02\u01A0\u01A3\x07\b\x02\x02\u01A1\u01A3\x05\u014C\xA7\x02\u01A2\u01A0" +
        "\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\x17\x03\x02\x02\x02" +
        "\u01A4\u01A6\x07\t\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03" +
        "\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x07\n\x02\x02\u01A8" +
        "\u01A9\x05l7\x02\u01A9\u01AA\x07\v\x02\x02\u01AA\u01B0\x03\x02\x02\x02" +
        "\u01AB\u01AD\t\x02\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03" +
        "\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B0\x05\x1A\x0E\x02\u01AF" +
        "\u01A5\x03\x02\x02\x02\u01AF\u01AC\x03\x02\x02\x02\u01B0\x19\x03\x02\x02" +
        "\x02\u01B1\u01B2\x07\x0E\x02\x02\u01B2\u01B3\x05\xEEx\x02\u01B3\u01B4" +
        "\x07\x0F\x02\x02\u01B4\x1B\x03\x02\x02\x02\u01B5\u01B6\x07\x10\x02\x02" +
        "\u01B6\u01C8\x07\x11\x02\x02\u01B7\u01B8\x07\x10\x02\x02\u01B8\u01B9\x05" +
        "\x1E\x10\x02\u01B9\u01BA\x07\x11\x02\x02\u01BA\u01C8\x03\x02\x02\x02\u01BB" +
        "\u01BC\x07\x10\x02\x02\u01BC\u01BF\x05\x1E\x10\x02\u01BD\u01BE\x07\x03" +
        "\x02\x02\u01BE\u01C0\x05 \x11\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0" +
        "\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x07\x11\x02\x02" +
        "\u01C2\u01C8\x03\x02\x02\x02\u01C3\u01C4\x07\x10\x02\x02\u01C4\u01C5\x05" +
        " \x11\x02\u01C5\u01C6\x07\x11\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7" +
        "\u01B5\x03\x02\x02\x02\u01C7\u01B7\x03\x02\x02\x02\u01C7\u01BB\x03\x02" +
        "\x02\x02\u01C7\u01C3\x03\x02\x02\x02\u01C8\x1D\x03\x02\x02\x02\u01C9\u01CE" +
        "\x05&\x14\x02\u01CA\u01CB\x07\x03\x02\x02\u01CB\u01CD\x05&\x14\x02\u01CC" +
        "\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02" +
        "\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\x1F\x03\x02\x02\x02\u01D0\u01CE" +
        "\x03\x02\x02\x02\u01D1\u01D4\x05\"\x12\x02\u01D2\u01D4\x05$\x13\x02\u01D3" +
        "\u01D1\x03\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4!\x03\x02\x02" +
        "\x02\u01D5\u01D6\x07\x12\x02\x02\u01D6\u01DB\x05.\x18\x02\u01D7\u01D8" +
        "\x07\x03\x02\x02\u01D8\u01DA\x05.\x18\x02\u01D9\u01D7\x03\x02\x02\x02" +
        "\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03" +
        "\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE" +
        "\u01E0\x07\x03\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
        "\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x07\x13\x02\x02\u01E2" +
        "#\x03\x02\x02\x02\u01E3\u01E4\x07\x0E\x02\x02\u01E4\u01E9\x050\x19\x02" +
        "\u01E5\u01E6\x07\x03\x02\x02\u01E6\u01E8\x050\x19\x02\u01E7\u01E5\x03" +
        "\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9" +
        "\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02" +
        "\x02\x02\u01EC\u01EE\x07\x03\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED" +
        "\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07\x0F" +
        "\x02\x02\u01F0%\x03\x02\x02\x02\u01F1\u01F5\x05(\x15\x02\u01F2\u01F5\x05" +
        ",\x17\x02\u01F3\u01F5\x05*\x16\x02\u01F4\u01F1\x03\x02\x02\x02\u01F4\u01F2" +
        "\x03\x02\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5\'\x03\x02\x02\x02\u01F6" +
        "\u01F8\x05j6\x02\u01F7\u01F9\x07\x14\x02\x02\u01F8\u01F7\x03\x02\x02\x02" +
        "\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FB\x03\x02\x02\x02\u01FA\u01FC\x05" +
        "\x16\f\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC" +
        "\u01FD\x03\x02\x02\x02\u01FD\u01FE\x05\xE2r\x02\u01FE\u01FF\x05\x14\v" +
        "\x02\u01FF)\x03\x02\x02\x02\u0200\u0208\x05\x06\x04\x02\u0201\u0203\x05" +
        "j6\x02\u0202\u0204\x07\x14\x02\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204" +
        "\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x05\xE2r\x02" +
        "\u0206\u0208\x03\x02\x02\x02\u0207\u0200\x03\x02\x02\x02\u0207\u0201\x03" +
        "\x02\x02\x02\u0208+\x03\x02\x02\x02\u0209\u020B\x05j6\x02\u020A\u020C" +
        "\x05\b\x05\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02" +
        "\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x07\x15\x02\x02\u020E\u020F\x07" +
        "\x16\x02\x02\u020F\u0211\x05\xE2r\x02\u0210\u0212\x05\x14\v\x02\u0211" +
        "\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212-\x03\x02\x02" +
        "\x02\u0213\u0216\x05&\x14\x02\u0214\u0215\x07\x07\x02\x02\u0215\u0217" +
        "\x05l7\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217" +
        "/\x03\x02\x02\x02\u0218\u021B\x05&\x14\x02\u0219\u021A\x07\x07\x02\x02" +
        "\u021A\u021C\x05l7\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02" +
        "\x02\x02\u021C\u0223\x03\x02\x02\x02\u021D\u0220\x05&\x14\x02\u021E\u021F" +
        "\x07\x17\x02\x02\u021F\u0221\x05l7\x02\u0220\u021E\x03\x02\x02\x02\u0220" +
        "\u0221\x03\x02\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0218\x03\x02" +
        "\x02\x02\u0222\u021D\x03\x02\x02\x02\u02231\x03\x02\x02\x02\u0224\u0226" +
        "\x05j6\x02\u0225\u0227\x07\x18\x02\x02\u0226\u0225\x03\x02\x02\x02\u0226" +
        "\u0227\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x07\x19" +
        "\x02\x02\u0229\u022B\x05\xE2r\x02\u022A\u022C\x05h5\x02\u022B\u022A\x03" +
        "\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D" +
        "\u022F\x05Z.\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02" +
        "\u022F\u0231\x03\x02\x02\x02\u0230\u0232\x054\x1B\x02\u0231\u0230\x03" +
        "\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233" +
        "\u0235\x05\\/\x02\u0234\u0233\x03\x02\x02\x02\u0234\u0235\x03\x02\x02" +
        "\x02\u0235\u0236\x03\x02\x02\x02\u0236\u023C\x07\x0E\x02\x02\u0237\u0238" +
        "\x05j6\x02\u0238\u0239\x056\x1C\x02\u0239\u023B\x03\x02\x02\x02\u023A" +
        "\u0237\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02" +
        "\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E" +
        "\u023C\x03\x02\x02\x02\u023F\u0240\x07\x0F\x02\x02\u0240\u0249\x03\x02" +
        "\x02\x02\u0241\u0243\x05j6\x02\u0242\u0244\x07\x18\x02\x02\u0243\u0242" +
        "\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02" +
        "\u0245\u0246\x07\x19\x02\x02\u0246\u0247\x05^0\x02\u0247\u0249\x03\x02" +
        "\x02\x02\u0248\u0224\x03\x02\x02\x02\u0248\u0241\x03\x02\x02\x02\u0249" +
        "3\x03\x02\x02\x02\u024A\u024B\x07\x1A\x02\x02\u024B\u024C\x05\u0152\xAA" +
        "\x02\u024C5\x03\x02\x02\x02\u024D\u024E\x05:\x1E\x02\u024E\u024F\x07\v" +
        "\x02\x02\u024F\u0254\x03\x02\x02\x02\u0250\u0251\x058\x1D\x02\u0251\u0252" +
        "\x05\x18\r\x02\u0252\u0254\x03\x02\x02\x02\u0253\u024D\x03\x02\x02\x02" +
        "\u0253\u0250\x03\x02\x02\x02\u02547\x03\x02\x02\x02\u0255\u0257\x05J&" +
        "\x02\u0256\u0258\x05N(\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03" +
        "\x02\x02\x02\u0258\u0268\x03\x02\x02\x02\u0259\u0268\x05T+\x02\u025A\u025C" +
        "\x07\x1B\x02\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02" +
        "\u025C\u025D\x03\x02\x02\x02\u025D\u0268\x05\x12\n\x02\u025E\u0260\x07" +
        "\x1B\x02\x02\u025F\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
        "\u0261\x03\x02\x02\x02\u0261\u0268\x05F$\x02\u0262\u0264\x07\x1B\x02\x02" +
        "\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265\x03" +
        "\x02\x02\x02\u0265\u0268\x05H%\x02\u0266\u0268\x05@!\x02\u0267\u0255\x03" +
        "\x02\x02\x02\u0267\u0259\x03\x02\x02\x02\u0267\u025B\x03\x02\x02\x02\u0267" +
        "\u025F\x03\x02\x02\x02\u0267\u0263\x03\x02\x02\x02\u0267\u0266\x03\x02" +
        "\x02\x02\u02689\x03\x02\x02\x02\u0269\u026C\x05X-\x02\u026A\u026D\x05" +
        "L\'\x02\u026B\u026D\x05N(\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B" +
        "\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u02A4\x03\x02\x02\x02" +
        "\u026E\u0271\x05J&\x02\u026F\u0272\x05L\'\x02\u0270\u0272\x05N(\x02\u0271" +
        "\u026F\x03\x02\x02\x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02" +
        "\x02\x02\u0272\u02A4\x03\x02\x02\x02\u0273\u0274\x07\x1C\x02\x02\u0274" +
        "\u02A4\x05X-\x02\u0275\u0276\x07\x1C\x02\x02\u0276\u02A4\x05J&\x02\u0277" +
        "\u0279\x07\x1C\x02\x02\u0278\u027A\x07\x1B\x02\x02\u0279\u0278\x03\x02" +
        "\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B" +
        "\u0277\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027D\x03\x02" +
        "\x02\x02\u027D\u02A4\x05F$\x02\u027E\u0280\x07\x1C\x02\x02\u027F\u0281" +
        "\x07\x1B\x02\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
        "\u0281\u0283\x03\x02\x02\x02\u0282\u027E\x03\x02\x02\x02\u0282\u0283\x03" +
        "\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u02A4\x05H%\x02\u0285\u0287" +
        "\x07\x1C\x02\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02" +
        "\u0287\u0288\x03\x02\x02\x02\u0288\u02A4\x05@!\x02\u0289\u028B\x07\x1C" +
        "\x02\x02\u028A\u028C\x07\x1B\x02\x02\u028B\u028A\x03\x02\x02\x02\u028B" +
        "\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u0289\x03\x02" +
        "\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F" +
        "\u02A4\x05\x12\n\x02\u0290\u0291\x07\x1B\x02\x02\u0291\u0293\t\x03\x02" +
        "\x02\u0292\u0294\x05\u014C\xA7\x02\u0293\u0292\x03\x02\x02\x02\u0293\u0294" +
        "\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u02A4\x05<\x1F\x02" +
        "\u0296\u0298\x07\x04\x02\x02\u0297\u0299\x05\u014C\xA7\x02\u0298\u0297" +
        "\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02" +
        "\u029A\u02A4\x05\x10\t\x02\u029B\u029D\t\x04\x02\x02\u029C\u029B\x03\x02" +
        "\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E" +
        "\u02A1\x07\x06\x02\x02\u029F\u02A1\x05\u014C\xA7\x02\u02A0\u029E\x03\x02" +
        "\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
        "\u02A4\x05\x10\t\x02\u02A3\u0269\x03\x02\x02\x02\u02A3\u026E\x03\x02\x02" +
        "\x02\u02A3\u0273\x03\x02\x02\x02\u02A3\u0275\x03\x02\x02\x02\u02A3\u027B" +
        "\x03\x02\x02\x02\u02A3\u0282\x03\x02\x02\x02\u02A3\u0286\x03\x02\x02\x02" +
        "\u02A3\u028D\x03\x02\x02\x02\u02A3\u0290\x03\x02\x02\x02\u02A3\u0296\x03" +
        "\x02\x02\x02\u02A3\u029C\x03\x02\x02\x02\u02A4;\x03\x02\x02\x02\u02A5" +
        "\u02AA\x05> \x02\u02A6\u02A7\x07\x03\x02\x02\u02A7\u02A9\x05> \x02\u02A8" +
        "\u02A6\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02" +
        "\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB=\x03\x02\x02\x02\u02AC\u02AA" +
        "\x03\x02\x02\x02\u02AD\u02AE\x05\xE2r\x02\u02AE\u02AF\x07\x07\x02\x02" +
        "\u02AF\u02B0\x05l7\x02\u02B0?\x03\x02\x02\x02\u02B1\u02B3\x05\x16\f\x02" +
        "\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x03" +
        "\x02\x02\x02\u02B4\u02B5\x07\x1D\x02\x02\u02B5\u02B6\x05B\"\x02\u02B6" +
        "\u02B7\x05\x1C\x0F\x02\u02B7A\x03\x02\x02\x02\u02B8\u02BD\x07\x1E\x02" +
        "\x02\u02B9\u02BD\x05D#\x02\u02BA\u02BD\x07\x1F\x02\x02\u02BB\u02BD\x07" +
        " \x02\x02\u02BC\u02B8\x03\x02\x02\x02\u02BC\u02B9\x03\x02\x02\x02\u02BC" +
        "\u02BA\x03\x02\x02\x02\u02BC\u02BB\x03\x02\x02\x02\u02BDC\x03\x02\x02" +
        "\x02\u02BE\u02C5\x05\xC6d\x02\u02BF\u02C5\x05\xC2b\x02\u02C0\u02C5\x05" +
        "\xBE`\x02\u02C1\u02C5\x05\xB2Z\x02\u02C2\u02C5\x07!\x02\x02\u02C3\u02C5" +
        "\x05\xBA^\x02\u02C4\u02BE\x03\x02\x02\x02\u02C4\u02BF\x03\x02\x02\x02" +
        "\u02C4\u02C0\x03\x02\x02\x02\u02C4\u02C1\x03\x02\x02\x02\u02C4\u02C2\x03" +
        "\x02\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C5E\x03\x02\x02\x02\u02C6" +
        "\u02C8\x05\x16\f\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02" +
        "\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CA\x07\"\x02\x02\u02CA\u02CB" +
        "\x05\xE2r\x02\u02CBG\x03\x02\x02\x02\u02CC\u02CE\x05\x16\f\x02\u02CD\u02CC" +
        "\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02" +
        "\u02CF\u02D0\x07#\x02\x02\u02D0\u02D1\x05\xE2r\x02\u02D1\u02D2\x05\x1C" +
        "\x0F\x02\u02D2I\x03\x02\x02\x02\u02D3\u02D6\x05\xE2r\x02\u02D4\u02D5\x07" +
        "\x16\x02\x02\u02D5\u02D7\x05\xE2r\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6" +
        "\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x05\x1C" +
        "\x0F\x02\u02D9K\x03\x02\x02\x02\u02DA\u02DB\x07\x17\x02\x02\u02DB\u02DE" +
        "\x07\x15\x02\x02\u02DC\u02DD\x07\x16\x02\x02\u02DD\u02DF\x05\xE2r\x02" +
        "\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E0\x03" +
        "\x02\x02\x02\u02E0\u02E1\x05\x94K\x02\u02E1M\x03\x02\x02\x02\u02E2\u02E3" +
        "\x07\x17\x02\x02\u02E3\u02E8\x05P)\x02\u02E4\u02E5\x07\x03\x02\x02\u02E5" +
        "\u02E7\x05P)\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02" +
        "\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9O\x03\x02" +
        "\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EC\x07$\x02\x02\u02EC\u02F5" +
        "\x05\x94K\x02\u02ED\u02EE\x07$\x02\x02\u02EE\u02EF\x07\x16\x02\x02\u02EF" +
        "\u02F0\x05\xE2r\x02\u02F0\u02F1\x05\x94K\x02\u02F1\u02F5\x03\x02\x02\x02" +
        "\u02F2\u02F5\x05R*\x02\u02F3\u02F5\x05\u0124\x93\x02\u02F4\u02EB\x03\x02" +
        "\x02\x02\u02F4\u02ED\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4" +
        "\u02F3\x03\x02\x02\x02\u02F5Q\x03\x02\x02\x02\u02F6\u02F7\x07\x15\x02" +
        "\x02\u02F7\u02F9\x07\x16\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9" +
        "\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x05\xE2r\x02" +
        "\u02FB\u02FC\x07\x07\x02\x02\u02FC\u0300\x05\xA4S\x02\u02FD\u02FF\x05" +
        "\x9AN\x02\u02FE\u02FD\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300" +
        "\u02FE\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301S\x03\x02\x02" +
        "\x02\u0302\u0300\x03\x02\x02\x02\u0303\u0304\x07%\x02\x02\u0304\u0307" +
        "\x05\xE2r\x02\u0305\u0306\x07\x16\x02\x02\u0306\u0308\x05\xE2r\x02\u0307" +
        "\u0305\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02" +
        "\x02\x02\u0309\u030A\x05\x1C\x0F\x02\u030AU\x03\x02\x02\x02\u030B\u030D" +
        "\x07\x05\x02\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02" +
        "\u030D\u030E\x03\x02\x02\x02\u030E\u030F\x07%\x02\x02\u030F\u0312\x05" +
        "\xE2r\x02\u0310\u0311\x07\x16\x02\x02\u0311\u0313\x05\xE2r\x02\u0312\u0310" +
        "\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02" +
        "\u0314\u0315\x05\x1C\x0F\x02\u0315\u0316\x07\x07\x02\x02\u0316\u0319\x05" +
        "\u014C\xA7\x02\u0317\u0318\x07\x16\x02\x02\u0318\u031A\x05\xE2r\x02\u0319" +
        "\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031AW\x03\x02\x02" +
        "\x02\u031B\u031C\x07\x05\x02\x02\u031C\u031D\x05\xE4s\x02\u031D\u031E" +
        "\x05\x1C\x0F\x02\u031EY\x03\x02\x02\x02\u031F\u0320\x07&\x02\x02\u0320" +
        "\u0321\x05\u014C\xA7\x02\u0321[\x03\x02\x02\x02\u0322\u0323\x07\'\x02" +
        "\x02\u0323\u0324\x05\u0152\xAA\x02\u0324]\x03\x02\x02\x02\u0325\u0327" +
        "\x05\xE2r\x02\u0326\u0328\x05h5\x02\u0327\u0326\x03\x02\x02\x02\u0327" +
        "\u0328\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x07\x07" +
        "\x02\x02\u032A\u032B\x05`1\x02\u032B\u032C\x07\v\x02\x02\u032C_\x03\x02" +
        "\x02\x02\u032D\u032E\x05\u014C\xA7\x02\u032E\u0330\x054\x1B\x02\u032F" +
        "\u0331\x05\\/\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331\x03\x02\x02" +
        "\x02\u0331a\x03\x02\x02\x02\u0332\u0333\x05j6\x02\u0333\u0334\x07(\x02" +
        "\x02\u0334\u0335\x05\xE2r\x02\u0335\u0336\x07\x0E\x02\x02\u0336\u033B" +
        "\x05d3\x02\u0337\u0338\x07\x03\x02\x02\u0338\u033A\x05d3\x02\u0339\u0337" +
        "\x03\x02\x02\x02\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02" +
        "\u033B\u033C\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03" +
        "\x02\x02\x02\u033E\u0340\x07\x03\x02\x02\u033F\u033E\x03\x02\x02\x02\u033F" +
        "\u0340\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0342\x07\x0F" +
        "\x02\x02\u0342c\x03\x02\x02\x02\u0343\u0344\x05j6\x02\u0344\u0345\x05" +
        "\xE2r\x02\u0345e\x03\x02\x02\x02\u0346\u0347\x05j6\x02\u0347\u034A\x05" +
        "\xE2r\x02\u0348\u0349\x07&\x02\x02\u0349\u034B\x05\u014C\xA7\x02\u034A" +
        "\u0348\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034Bg\x03\x02\x02" +
        "\x02\u034C\u034D\x07)\x02\x02\u034D\u0352\x05f4\x02\u034E\u034F\x07\x03" +
        "\x02\x02\u034F\u0351\x05f4\x02\u0350\u034E\x03\x02\x02\x02\u0351\u0354" +
        "\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02" +
        "\u0353\u0355\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02\u0355\u0356\x07" +
        "*\x02\x02\u0356i\x03\x02\x02\x02\u0357\u0358\x07+\x02\x02\u0358\u035B" +
        "\x05\xE4s\x02\u0359\u035A\x07\x16\x02\x02\u035A\u035C\x05\xE2r\x02\u035B" +
        "\u0359\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035E\x03\x02" +
        "\x02\x02\u035D\u035F\x05\x94K\x02\u035E\u035D\x03\x02\x02\x02\u035E\u035F" +
        "\x03\x02\x02\x02\u035F\u0361\x03\x02\x02\x02\u0360\u0357\x03\x02\x02\x02" +
        "\u0361\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03" +
        "\x02\x02\x02\u0363k\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0365" +
        "\u0366\x05\xDCo\x02\u0366\u0367\x05\xA0Q\x02\u0367\u0368\x05l7\x02\u0368" +
        "\u0372\x03\x02\x02\x02\u0369\u036D\x05\xA4S\x02\u036A\u036C\x05\x9AN\x02" +
        "\u036B\u036A\x03\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03" +
        "\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u0372\x03\x02\x02\x02\u036F" +
        "\u036D\x03\x02\x02\x02\u0370\u0372\x05\x88E\x02\u0371\u0365\x03\x02\x02" +
        "\x02\u0371\u0369\x03\x02\x02\x02\u0371\u0370\x03\x02\x02\x02\u0372m\x03" +
        "\x02\x02\x02\u0373\u0374\x05\xDCo\x02\u0374\u0375\x05\xA0Q\x02\u0375\u0376" +
        "\x05n8\x02\u0376\u037A\x03\x02\x02\x02\u0377\u037A\x05\xA4S\x02\u0378" +
        "\u037A\x05\x8AF\x02\u0379\u0373\x03\x02\x02\x02\u0379\u0377\x03\x02\x02" +
        "\x02\u0379\u0378\x03\x02\x02\x02\u037Ao\x03\x02\x02\x02\u037B\u0380\x05" +
        "l7\x02\u037C\u037D\x07\x03\x02\x02\u037D\u037F\x05l7\x02\u037E\u037C\x03" +
        "\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380" +
        "\u0381\x03\x02\x02\x02\u0381q\x03\x02\x02\x02\u0382\u0380\x03\x02\x02" +
        "\x02\u0383\u0390\x05\x8EH\x02\u0384\u0385\x07$\x02\x02\u0385\u0390\x05" +
        "\xDEp\x02\u0386\u0390\x05\x8CG\x02\u0387\u0390\x05t;\x02\u0388\u0390\x05" +
        "\xE2r\x02\u0389\u0390\x05\x90I\x02\u038A\u0390\x05\x92J\x02\u038B\u038C" +
        "\x07\x10\x02\x02\u038C\u038D\x05l7\x02\u038D\u038E\x07\x11\x02\x02\u038E" +
        "\u0390\x03\x02\x02\x02\u038F\u0383\x03\x02\x02\x02\u038F\u0384\x03\x02" +
        "\x02\x02\u038F\u0386\x03\x02\x02\x02\u038F\u0387\x03\x02\x02\x02\u038F" +
        "\u0388\x03\x02\x02\x02\u038F\u0389\x03\x02\x02\x02\u038F\u038A\x03\x02" +
        "\x02\x02\u038F\u038B\x03\x02\x02\x02\u0390s\x03\x02\x02\x02\u0391\u0399" +
        "\x05v<\x02\u0392\u0399\x05z>\x02\u0393\u0399\x05x=\x02\u0394\u0399\x05" +
        "|?\x02\u0395\u0399\x05\x80A\x02\u0396\u0399\x05\x84C\x02\u0397\u0399\x05" +
        "\x82B\x02\u0398\u0391\x03\x02\x02\x02\u0398\u0392\x03\x02\x02\x02\u0398" +
        "\u0393\x03\x02\x02\x02\u0398\u0394\x03\x02\x02\x02\u0398\u0395\x03\x02" +
        "\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397\x03\x02\x02\x02\u0399" +
        "u\x03\x02\x02\x02\u039A\u039B\x07,\x02\x02\u039Bw\x03\x02\x02\x02\u039C" +
        "\u039D\t\x05\x02\x02\u039Dy\x03\x02\x02\x02\u039E\u039F\t\x06\x02\x02" +
        "\u039F{\x03\x02\x02\x02\u03A0\u03A2\t\x07\x02\x02\u03A1\u03A0\x03\x02" +
        "\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A3" +
        "\u03A4\x03\x02\x02\x02\u03A4}\x03\x02\x02\x02\u03A5\u03A6\x07/\x02\x02" +
        "\u03A6\u03AC\x05\xE2r\x02\u03A7\u03A8\x070\x02\x02\u03A8\u03A9\x05l7\x02" +
        "\u03A9\u03AA\x07\x0F\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB\u03A5\x03" +
        "\x02\x02\x02\u03AB\u03A7\x03\x02\x02\x02\u03AC\x7F\x03\x02\x02\x02\u03AD" +
        "\u03B7\x071\x02\x02\u03AE\u03B8\x05B\"\x02\u03AF\u03B4\x05\xE2r\x02\u03B0" +
        "\u03B1\x07\x03\x02\x02\u03B1\u03B3\x05\xE2r\x02\u03B2\u03B0\x03\x02\x02" +
        "\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4\u03B5" +
        "\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02" +
        "\u03B7\u03AE\x03\x02\x02\x02\u03B7\u03AF\x03\x02\x02\x02\u03B8\x81\x03" +
        "\x02\x02\x02\u03B9\u03BB\x07\x05\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BA" +
        "\u03BB\x03\x02\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03BE\x05\u0150" +
        "\xA9\x02\u03BD\u03BC\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
        "\u03BF\x03\x02\x02\x02\u03BF\u03C4\x07\x12\x02\x02\u03C0\u03C2\x05p9\x02" +
        "\u03C1\u03C3\x07\x03\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3\x03" +
        "\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03C0\x03\x02\x02\x02\u03C4" +
        "\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C7\x07\x13" +
        "\x02\x02\u03C7\x83\x03\x02\x02\x02\u03C8\u03CA\x07\x05\x02\x02\u03C9\u03C8" +
        "\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CC\x03\x02\x02\x02" +
        "\u03CB\u03CD\x05\u0150\xA9\x02\u03CC\u03CB\x03\x02\x02\x02\u03CC";
    Dart2Parser._serializedATNSegment2 = "\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03DA\x07\x0E" +
        "\x02\x02\u03CF\u03D4\x05\x86D\x02\u03D0\u03D1\x07\x03\x02\x02\u03D1\u03D3" +
        "\x05\x86D\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02" +
        "\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D8\x03" +
        "\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03D9\x07\x03\x02\x02\u03D8" +
        "\u03D7\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DB\x03\x02" +
        "\x02\x02\u03DA\u03CF\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB" +
        "\u03DC\x03\x02\x02\x02\u03DC\u03DD\x07\x0F\x02\x02\u03DD\x85\x03\x02\x02" +
        "\x02\u03DE\u03DF\x05l7\x02\u03DF\u03E0\x07\x17\x02\x02\u03E0\u03E1\x05" +
        "l7\x02\u03E1\x87\x03\x02\x02\x02\u03E2\u03E3\x072\x02\x02\u03E3\u03E4" +
        "\x05l7\x02\u03E4\x89\x03\x02\x02\x02\u03E5\u03E6\x072\x02\x02\u03E6\u03E7" +
        "\x05n8\x02\u03E7\x8B\x03\x02\x02\x02\u03E8\u03E9\x05\x14\v\x02\u03E9\u03EA" +
        "\x05\x18\r\x02\u03EA\x8D\x03\x02\x02\x02\u03EB\u03EC\x07\x15\x02\x02\u03EC" +
        "\x8F\x03\x02\x02\x02\u03ED\u03EE\x073\x02\x02\u03EE\u03F1\x05\u014C\xA7" +
        "\x02\u03EF\u03F0\x07\x16\x02\x02\u03F0\u03F2\x05\xE2r\x02\u03F1\u03EF" +
        "\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02" +
        "\u03F3\u03F4\x05\x94K\x02\u03F4\x91\x03\x02\x02\x02\u03F5\u03F6\x07\x05" +
        "\x02\x02\u03F6\u03F9\x05\u014C\xA7\x02\u03F7\u03F8\x07\x16\x02\x02\u03F8" +
        "\u03FA\x05\xE2r\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02" +
        "\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FC\x05\x94K\x02\u03FC\x93\x03" +
        "\x02\x02\x02\u03FD\u0402\x07\x10\x02\x02\u03FE\u0400\x05\x96L\x02\u03FF" +
        "\u0401\x07\x03\x02\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401\x03\x02" +
        "\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402\u03FE\x03\x02\x02\x02\u0402" +
        "\u0403\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u0405\x07\x11" +
        "\x02\x02\u0405\x95\x03\x02\x02\x02\u0406\u040B\x05\x98M\x02\u0407\u0408" +
        "\x07\x03\x02\x02\u0408\u040A\x05\x98M\x02\u0409\u0407\x03\x02\x02\x02" +
        "\u040A\u040D\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03" +
        "\x02\x02\x02\u040C\u0417\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E" +
        "\u0413\x05p9\x02\u040F\u0410\x07\x03\x02\x02\u0410\u0412\x05\x98M\x02" +
        "\u0411\u040F\x03\x02\x02\x02\u0412\u0415\x03\x02\x02\x02\u0413\u0411\x03" +
        "\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0417\x03\x02\x02\x02\u0415" +
        "\u0413\x03\x02\x02\x02\u0416\u0406\x03\x02\x02\x02\u0416\u040E\x03\x02" +
        "\x02\x02\u0417\x97\x03\x02\x02\x02\u0418\u0419\x05\u0118\x8D\x02\u0419" +
        "\u041A\x05l7\x02\u041A\x99\x03\x02\x02\x02\u041B\u041C\x074\x02\x02\u041C" +
        "\u0420\x05\x9CO\x02\u041D\u041F\x05\x9EP\x02\u041E\u041D\x03\x02\x02\x02" +
        "\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03" +
        "\x02\x02\x02\u0421\u042C\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0423" +
        "\u0427\x05\xE0q\x02\u0424\u0426\x05\x9EP\x02\u0425\u0424\x03\x02\x02\x02" +
        "\u0426\u0429\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03" +
        "\x02\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u042A" +
        "\u0423\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02\u042C\u042A\x03\x02" +
        "\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u0432\x03\x02\x02\x02\u042E" +
        "\u042C\x03\x02\x02\x02\u042F\u0430\x05\xA0Q\x02\u0430\u0431\x05n8\x02" +
        "\u0431\u0433\x03\x02\x02\x02\u0432\u042F\x03\x02\x02\x02\u0432\u0433\x03" +
        "\x02\x02\x02\u0433\x9B\x03\x02\x02\x02\u0434\u0435\x07\x12\x02\x02\u0435" +
        "\u0436\x05l7\x02\u0436\u0437\x07\x13\x02\x02\u0437\u043A\x03\x02\x02\x02" +
        "\u0438\u043A\x05\xE2r\x02\u0439\u0434\x03\x02\x02\x02\u0439\u0438\x03" +
        "\x02\x02\x02\u043A\x9D\x03\x02\x02\x02\u043B\u043D\x05\u0150\xA9\x02\u043C" +
        "\u043B\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03\x02" +
        "\x02\x02\u043E\u043F\x05\x94K\x02\u043F\x9F\x03\x02\x02\x02\u0440\u0443" +
        "\x07\x07\x02\x02\u0441\u0443\x05\xA2R\x02\u0442\u0440\x03\x02\x02\x02" +
        "\u0442\u0441\x03\x02\x02\x02\u0443\xA1\x03\x02\x02\x02\u0444\u0445\t\b" +
        "\x02\x02\u0445\xA3\x03\x02\x02\x02\u0446\u044C\x05\xA6T\x02\u0447\u0448" +
        "\x07A\x02\x02\u0448\u0449\x05n8\x02\u0449\u044A\x07\x17\x02\x02\u044A" +
        "\u044B\x05n8\x02\u044B\u044D\x03\x02\x02\x02\u044C\u0447\x03\x02\x02\x02" +
        "\u044C\u044D\x03\x02\x02\x02\u044D\xA5\x03\x02\x02\x02\u044E\u0453\x05" +
        "\xA8U\x02\u044F\u0450\x07B\x02\x02\u0450\u0452\x05\xA8U\x02\u0451\u044F" +
        "\x03\x02\x02\x02\u0452\u0455\x03\x02\x02\x02\u0453\u0451\x03\x02\x02\x02" +
        "\u0453\u0454\x03\x02\x02\x02\u0454\xA7\x03\x02\x02\x02\u0455\u0453\x03" +
        "\x02\x02\x02\u0456\u045B\x05\xAAV\x02\u0457\u0458\x07C\x02\x02\u0458\u045A" +
        "\x05\xAAV\x02\u0459\u0457\x03\x02\x02\x02\u045A\u045D\x03\x02\x02\x02" +
        "\u045B\u0459\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\xA9\x03" +
        "\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045E\u0463\x05\xACW\x02\u045F" +
        "\u0460\x07D\x02\x02\u0460\u0462\x05\xACW\x02\u0461\u045F\x03\x02\x02\x02" +
        "\u0462\u0465\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0463\u0464\x03" +
        "\x02\x02\x02\u0464\xAB\x03\x02\x02\x02\u0465\u0463\x03\x02\x02\x02\u0466" +
        "\u046A\x05\xB0Y\x02\u0467\u0468\x05\xAEX\x02\u0468\u0469\x05\xB0Y\x02" +
        "\u0469\u046B\x03\x02\x02\x02\u046A\u0467\x03\x02\x02\x02\u046A\u046B\x03" +
        "\x02\x02\x02\u046B\u0471\x03\x02\x02\x02\u046C\u046D\x07$\x02\x02\u046D" +
        "\u046E\x05\xAEX\x02\u046E\u046F\x05\xB0Y\x02\u046F\u0471\x03\x02\x02\x02" +
        "\u0470\u0466\x03\x02\x02\x02\u0470\u046C\x03\x02\x02\x02\u0471\xAD\x03" +
        "\x02\x02\x02\u0472\u0473\t\t\x02\x02\u0473\xAF\x03\x02\x02\x02\u0474\u047A" +
        "\x05\xB4[\x02\u0475\u047B\x05\xE6t\x02\u0476\u047B\x05\xEAv\x02\u0477" +
        "\u0478\x05\xB2Z\x02\u0478\u0479\x05\xB4[\x02\u0479\u047B\x03\x02\x02\x02" +
        "\u047A\u0475\x03\x02\x02\x02\u047A\u0476\x03\x02\x02\x02\u047A\u0477\x03" +
        "\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u0481\x03\x02\x02\x02\u047C" +
        "\u047D\x07$\x02\x02\u047D\u047E\x05\xB2Z\x02\u047E\u047F\x05\xB4[\x02" +
        "\u047F\u0481\x03\x02\x02\x02\u0480\u0474\x03\x02\x02\x02\u0480\u047C\x03" +
        "\x02\x02\x02\u0481\xB1\x03\x02\x02\x02\u0482\u0483\t\n\x02\x02\u0483\xB3" +
        "\x03\x02\x02\x02\u0484\u0489\x05\xB6\\\x02\u0485\u0486\x07H\x02\x02\u0486" +
        "\u0488\x05\xB6\\\x02\u0487\u0485\x03\x02\x02\x02\u0488\u048B\x03\x02\x02" +
        "\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u0494" +
        "\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C\u048F\x07$\x02\x02" +
        "\u048D\u048E\x07H\x02\x02\u048E\u0490\x05\xB4[\x02\u048F\u048D\x03\x02" +
        "\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491" +
        "\u0492\x03\x02\x02\x02\u0492\u0494\x03\x02\x02\x02\u0493\u0484\x03\x02" +
        "\x02\x02\u0493\u048C\x03\x02\x02\x02\u0494\xB5\x03\x02\x02\x02\u0495\u049A" +
        "\x05\xB8]\x02\u0496\u0497\x07I\x02\x02\u0497\u0499\x05\xB8]\x02\u0498" +
        "\u0496\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02\u049A\u0498\x03\x02" +
        "\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u04A5\x03\x02\x02\x02\u049C" +
        "\u049A\x03\x02\x02\x02\u049D\u04A0\x07$\x02\x02\u049E\u049F\x07I\x02\x02" +
        "\u049F\u04A1\x05\xB8]\x02\u04A0\u049E\x03\x02\x02\x02\u04A1\u04A2\x03" +
        "\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3" +
        "\u04A5\x03\x02\x02\x02\u04A4\u0495\x03\x02\x02\x02\u04A4\u049D\x03\x02" +
        "\x02\x02\u04A5\xB7\x03\x02\x02\x02\u04A6\u04AB\x05\xBC_\x02\u04A7\u04A8" +
        "\x07J\x02\x02\u04A8\u04AA\x05\xBC_\x02\u04A9\u04A7\x03\x02\x02\x02\u04AA" +
        "\u04AD\x03\x02\x02\x02\u04AB\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02" +
        "\x02\x02\u04AC\u04B6\x03\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AE" +
        "\u04B1\x07$\x02\x02\u04AF\u04B0\x07J\x02\x02\u04B0\u04B2\x05\xBC_\x02" +
        "\u04B1\u04AF\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B1\x03" +
        "\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02\u04B5" +
        "\u04A6\x03\x02\x02\x02\u04B5\u04AE\x03\x02\x02\x02\u04B6\xB9\x03\x02\x02" +
        "\x02\u04B7\u04B8\t\v\x02\x02\u04B8\xBB\x03\x02\x02\x02\u04B9\u04BF\x05" +
        "\xC0a\x02\u04BA\u04BB\x05\xBE`\x02\u04BB\u04BC\x05\xC0a\x02\u04BC\u04BE" +
        "\x03\x02\x02\x02\u04BD\u04BA\x03\x02\x02\x02\u04BE\u04C1\x03\x02\x02\x02" +
        "\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04CB\x03" +
        "\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2\u04C6\x07$\x02\x02\u04C3" +
        "\u04C4\x05\xBE`\x02\u04C4\u04C5\x05\xC0a\x02\u04C5\u04C7\x03\x02\x02\x02" +
        "\u04C6\u04C3\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C6\x03" +
        "\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CB\x03\x02\x02\x02\u04CA" +
        "\u04B9\x03\x02\x02\x02\u04CA\u04C2\x03\x02\x02\x02\u04CB\xBD\x03\x02\x02" +
        "\x02\u04CC\u04CD\t\f\x02\x02\u04CD\xBF\x03\x02\x02\x02\u04CE\u04D4\x05" +
        "\xC4c\x02\u04CF\u04D0\x05\xC2b\x02\u04D0\u04D1\x05\xC4c\x02\u04D1\u04D3" +
        "\x03\x02\x02\x02\u04D2\u04CF\x03\x02\x02\x02\u04D3\u04D6\x03\x02\x02\x02" +
        "\u04D4\u04D2\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04E0\x03" +
        "\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04DB\x07$\x02\x02\u04D8" +
        "\u04D9\x05\xC2b\x02\u04D9\u04DA\x05\xC4c\x02\u04DA\u04DC\x03\x02\x02\x02" +
        "\u04DB\u04D8\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DB\x03" +
        "\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04E0\x03\x02\x02\x02\u04DF" +
        "\u04CE\x03\x02\x02\x02\u04DF\u04D7\x03\x02\x02\x02\u04E0\xC1\x03\x02\x02" +
        "\x02\u04E1\u04E2\t\r\x02\x02\u04E2\xC3\x03\x02\x02\x02\u04E3\u04E9\x05" +
        "\xC8e\x02\u04E4\u04E5\x05\xC6d\x02\u04E5\u04E6\x05\xC8e\x02\u04E6\u04E8" +
        "\x03\x02\x02\x02\u04E7\u04E4\x03\x02\x02\x02\u04E8\u04EB\x03\x02\x02\x02" +
        "\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04F5\x03" +
        "\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EC\u04F0\x07$\x02\x02\u04ED" +
        "\u04EE\x05\xC6d\x02\u04EE\u04EF\x05\xC8e\x02\u04EF\u04F1\x03\x02\x02\x02" +
        "\u04F0\u04ED\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F0\x03" +
        "\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x03\x02\x02\x02\u04F4" +
        "\u04E3\x03\x02\x02\x02\u04F4\u04EC\x03\x02\x02\x02\u04F5\xC5\x03\x02\x02" +
        "\x02\u04F6\u04F7\t\x0E\x02\x02\u04F7\xC7\x03\x02\x02\x02\u04F8\u04F9\x05" +
        "\xCAf\x02\u04F9\u04FA\x05\xC8e\x02\u04FA\u0507\x03\x02\x02\x02\u04FB\u0507" +
        "\x05\xD2j\x02\u04FC\u0507\x05\xD4k\x02\u04FD\u0500\x05\xCCg\x02\u04FE" +
        "\u0500\x05\xD0i\x02\u04FF\u04FD\x03\x02\x02\x02\u04FF\u04FE\x03\x02\x02" +
        "\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0502\x07$\x02\x02\u0502\u0507" +
        "\x03\x02\x02\x02\u0503\u0504\x05\xDAn\x02\u0504\u0505\x05\xDCo\x02\u0505" +
        "\u0507\x03\x02\x02\x02\u0506\u04F8\x03\x02\x02\x02\u0506\u04FB\x03\x02" +
        "\x02\x02\u0506\u04FC\x03\x02\x02\x02\u0506\u04FF\x03\x02\x02\x02\u0506" +
        "\u0503\x03\x02\x02\x02\u0507\xC9\x03\x02\x02\x02\u0508\u050C\x05\xCCg" +
        "\x02\u0509\u050C\x05\xCEh\x02\u050A\u050C\x05\xD0i\x02\u050B\u0508\x03" +
        "\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050A\x03\x02\x02\x02\u050C" +
        "\xCB\x03\x02\x02\x02\u050D\u050E\x07O\x02\x02\u050E\xCD\x03\x02\x02\x02" +
        "\u050F\u0510\x07T\x02\x02\u0510\xCF\x03\x02\x02\x02\u0511\u0512\x07\x1E" +
        "\x02\x02\u0512\xD1\x03\x02\x02\x02\u0513\u0514\x07U\x02\x02\u0514\u0515" +
        "\x05\xC8e\x02\u0515\xD3\x03\x02\x02\x02\u0516\u0517\x05\xDCo\x02\u0517" +
        "\u0518\x05\xD6l\x02\u0518\u0521\x03\x02\x02\x02\u0519\u051D\x05r:\x02" +
        "\u051A\u051C\x05\xD8m\x02\u051B\u051A\x03\x02\x02\x02\u051C\u051F\x03" +
        "\x02\x02\x02\u051D\u051B\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E" +
        "\u0521\x03\x02\x02\x02\u051F\u051D\x03\x02\x02\x02\u0520\u0516\x03\x02" +
        "\x02\x02\u0520\u0519\x03\x02\x02\x02\u0521\xD5\x03\x02\x02\x02\u0522\u0523" +
        "\x05\xDAn\x02\u0523\xD7\x03\x02\x02\x02\u0524\u0527\x05\xE0q\x02\u0525" +
        "\u0527\x05\x9EP\x02\u0526\u0524\x03\x02\x02\x02\u0526\u0525\x03\x02\x02" +
        "\x02\u0527\xD9\x03\x02\x02\x02\u0528\u0529\t\x0F\x02\x02\u0529\xDB\x03" +
        "\x02\x02\x02\u052A\u0532\x05r:\x02\u052B\u052D\x05\x9EP\x02\u052C\u052B" +
        "\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E\u052C\x03\x02\x02\x02" +
        "\u052E\u052F\x03\x02\x02\x02\u052F\u0531\x03\x02\x02\x02\u0530\u052E\x03" +
        "\x02\x02\x02\u0531\u0533\x05\xE0q\x02\u0532\u052E\x03\x02\x02\x02\u0532" +
        "\u0533\x03\x02\x02\x02\u0533\u0539\x03\x02\x02\x02\u0534\u0535\x07$\x02" +
        "\x02\u0535\u0536\x05\xDEp\x02\u0536\u0537\x05\xE2r\x02\u0537\u0539\x03" +
        "\x02\x02\x02\u0538\u052A\x03\x02\x02\x02\u0538\u0534\x03\x02\x02\x02\u0539" +
        "\xDD\x03\x02\x02\x02\u053A\u053B\x07\x12\x02\x02\u053B\u053C\x05l7\x02" +
        "\u053C\u053D\x07\x13\x02\x02\u053D\u0541\x03\x02\x02\x02\u053E\u053F\x07" +
        "\x16\x02\x02\u053F\u0541\x05\xE2r\x02\u0540\u053A\x03\x02\x02\x02\u0540" +
        "\u053E\x03\x02\x02\x02\u0541\xDF\x03\x02\x02\x02\u0542\u0546\x05\xDEp" +
        "\x02\u0543\u0544\x07X\x02\x02\u0544\u0546\x05\xE2r\x02\u0545\u0542\x03" +
        "\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546\xE1\x03\x02\x02\x02\u0547" +
        "\u0548\x07~\x02\x02\u0548\xE3\x03\x02\x02\x02\u0549\u054C\x05\xE2r\x02" +
        "\u054A\u054B\x07\x16\x02\x02\u054B\u054D\x05\xE2r\x02\u054C\u054A\x03" +
        "\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\xE5\x03\x02\x02\x02\u054E" +
        "\u054F\x05\xE8u\x02\u054F\u0550\x05\u014C\xA7\x02\u0550\xE7\x03\x02\x02" +
        "\x02\u0551\u0553\x07Y\x02\x02\u0552\u0554\x07T\x02\x02\u0553\u0552\x03" +
        "\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\xE9\x03\x02\x02\x02\u0555" +
        "\u0556\x05\xECw\x02\u0556\u0557\x05\u014C\xA7\x02\u0557\xEB\x03\x02\x02" +
        "\x02\u0558\u0559\x07Z\x02\x02\u0559\xED\x03\x02\x02\x02\u055A\u055C\x05" +
        "\xF0y\x02\u055B\u055A\x03\x02\x02\x02\u055C\u055F\x03\x02\x02\x02\u055D" +
        "\u055B\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\xEF\x03\x02\x02" +
        "\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0562\x05\u0118\x8D\x02\u0561\u0560" +
        "\x03\x02\x02\x02\u0562\u0565\x03\x02\x02\x02\u0563\u0561\x03\x02\x02\x02" +
        "\u0563\u0564\x03\x02\x02\x02\u0564\u0566\x03\x02\x02\x02\u0565\u0563\x03" +
        "\x02\x02\x02\u0566\u0567\x05\xF2z\x02\u0567\xF1\x03\x02\x02\x02\u0568" +
        "\u057A\x05\x1A\x0E\x02\u0569\u057A\x05\xF6|\x02\u056A\u057A\x05\xFC\x7F" +
        "\x02\u056B\u057A\x05\u0102\x82\x02\u056C\u057A\x05\u0104\x83\x02\u056D" +
        "\u057A\x05\u0106\x84\x02\u056E\u057A\x05\xFA~\x02\u056F\u057A\x05\u010C" +
        "\x87\x02\u0570\u057A\x05\u010E\x88\x02\u0571\u057A\x05\u011A\x8E\x02\u0572" +
        "\u057A\x05\u011C\x8F\x02\u0573\u057A\x05\u0116\x8C\x02\u0574\u057A\x05" +
        "\u011E\x90\x02\u0575\u057A\x05\u0120\x91\x02\u0576\u057A\x05\xF4{\x02" +
        "\u0577\u057A\x05\u0122\x92\x02\u0578\u057A\x05\xF8}\x02\u0579\u0568\x03" +
        "\x02\x02\x02\u0579\u0569\x03\x02\x02\x02\u0579\u056A\x03\x02\x02\x02\u0579" +
        "\u056B\x03\x02\x02\x02\u0579\u056C\x03\x02\x02\x02\u0579\u056D\x03\x02" +
        "\x02\x02\u0579\u056E\x03\x02\x02\x02\u0579\u056F\x03\x02\x02\x02\u0579" +
        "\u0570\x03\x02\x02\x02\u0579\u0571\x03\x02\x02\x02\u0579\u0572\x03\x02" +
        "\x02\x02\u0579\u0573\x03\x02\x02\x02\u0579\u0574\x03\x02\x02\x02\u0579" +
        "\u0575\x03\x02\x02\x02\u0579\u0576\x03\x02\x02\x02\u0579\u0577\x03\x02" +
        "\x02\x02\u0579\u0578\x03\x02\x02\x02\u057A\xF3\x03\x02\x02\x02\u057B\u057D" +
        "\x05l7\x02\u057C\u057B\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D" +
        "\u057E\x03\x02\x02\x02\u057E\u057F\x07\v\x02\x02\u057F\xF5\x03\x02\x02" +
        "\x02\u0580\u0581\x05\f\x07\x02\u0581\u0582\x07\v\x02\x02\u0582\xF7\x03" +
        "\x02\x02\x02\u0583\u0584\x05\x12\n\x02\u0584\u0585\x05\x18\r\x02\u0585" +
        "\xF9\x03\x02\x02\x02\u0586\u0587\x07[\x02\x02\u0587\u0588\x07\x10\x02" +
        "\x02\u0588\u0589\x05l7\x02\u0589\u058A\x07\x11\x02\x02\u058A\u058D\x05" +
        "\xF0y\x02\u058B\u058C\x07\\\x02\x02\u058C\u058E\x05\xF0y\x02\u058D\u058B" +
        "\x03\x02\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\xFB\x03\x02\x02\x02" +
        "\u058F\u0591\x07U\x02\x02\u0590\u058F\x03\x02\x02\x02\u0590\u0591\x03" +
        "\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0593\x07]\x02\x02\u0593" +
        "\u0594\x07\x10\x02\x02\u0594\u0595\x05\xFE\x80\x02\u0595\u0596\x07\x11" +
        "\x02\x02\u0596\u0597\x05\xF0y\x02\u0597\xFD\x03\x02\x02\x02\u0598\u059A" +
        "\x05\u0100\x81\x02\u0599\u059B\x05l7\x02\u059A\u0599\x03\x02\x02\x02\u059A" +
        "\u059B\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059E\x07\v\x02" +
        "\x02\u059D\u059F\x05p9\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F\x03" +
        "\x02\x02\x02\u059F\u05A9\x03\x02\x02\x02\u05A0\u05A1\x05\x06\x04\x02\u05A1" +
        "\u05A2\x07^\x02\x02\u05A2\u05A3\x05l7\x02\u05A3\u05A9\x03\x02\x02\x02" +
        "\u05A4\u05A5\x05\xE2r\x02\u05A5\u05A6\x07^\x02\x02\u05A6\u05A7\x05l7\x02" +
        "\u05A7\u05A9\x03\x02\x02\x02\u05A8\u0598\x03\x02\x02\x02\u05A8\u05A0\x03" +
        "\x02\x02\x02\u05A8\u05A4\x03\x02\x02\x02\u05A9\xFF\x03\x02\x02\x02\u05AA" +
        "\u05B0\x05\xF6|\x02\u05AB\u05AD\x05l7\x02\u05AC\u05AB\x03\x02\x02\x02" +
        "\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05B0\x07" +
        "\v\x02\x02\u05AF\u05AA\x03\x02\x02\x02\u05AF\u05AC\x03\x02\x02\x02\u05B0" +
        "\u0101\x03\x02\x02\x02\u05B1\u05B2\x07_\x02\x02\u05B2\u05B3\x07\x10\x02" +
        "\x02\u05B3\u05B4\x05l7\x02\u05B4\u05B5\x07\x11\x02\x02\u05B5\u05B6\x05" +
        "\xF0y\x02\u05B6\u0103\x03\x02\x02\x02\u05B7\u05B8\x07`\x02\x02\u05B8\u05B9" +
        "\x05\xF0y\x02\u05B9\u05BA\x07_\x02\x02\u05BA\u05BB\x07\x10\x02\x02\u05BB" +
        "\u05BC\x05l7\x02\u05BC\u05BD\x07\x11\x02\x02\u05BD\u05BE\x07\v\x02\x02" +
        "\u05BE\u0105\x03\x02\x02\x02\u05BF\u05C0\x07a\x02\x02\u05C0\u05C1\x07" +
        "\x10\x02\x02\u05C1\u05C2\x05l7\x02\u05C2\u05C3\x07\x11\x02\x02\u05C3\u05C7" +
        "\x07\x0E\x02\x02\u05C4\u05C6\x05\u0108\x85\x02\u05C5\u05C4\x03\x02\x02" +
        "\x02\u05C6\u05C9\x03\x02\x02\x02\u05C7\u05C5\x03\x02\x02\x02\u05C7\u05C8" +
        "\x03\x02\x02\x02\u05C8\u05CB\x03\x02\x02\x02\u05C9\u05C7\x03\x02\x02\x02" +
        "\u05CA\u05CC\x05\u010A\x86\x02\u05CB\u05CA\x03\x02\x02\x02\u05CB\u05CC" +
        "\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CE\x07\x0F\x02\x02" +
        "\u05CE\u0107\x03\x02\x02\x02\u05CF\u05D1\x05\u0118\x8D\x02\u05D0\u05CF" +
        "\x03\x02\x02\x02\u05D1\u05D4\x03\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02" +
        "\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4\u05D2\x03" +
        "\x02\x02\x02\u05D5\u05D6\x07b\x02\x02\u05D6\u05D7\x05l7\x02\u05D7\u05D8" +
        "\x07\x17\x02\x02\u05D8\u05D9\x05\xEEx\x02\u05D9\u0109\x03\x02\x02\x02" +
        "\u05DA\u05DC\x05\u0118\x8D\x02\u05DB\u05DA\x03\x02\x02\x02\u05DC\u05DF" +
        "\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02" +
        "\u05DE\u05E0\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05E0\u05E1\x07" +
        "c\x02\x02\u05E1\u05E2\x07\x17\x02\x02\u05E2\u05E3\x05\xEEx\x02\u05E3\u010B" +
        "\x03\x02\x02\x02\u05E4\u05E5\x07d\x02\x02\u05E5\u05E6\x07\v\x02\x02\u05E6" +
        "\u010D\x03\x02\x02\x02\u05E7\u05E8\x07e\x02\x02\u05E8\u05F2\x05\x1A\x0E" +
        "\x02\u05E9\u05EB\x05\u0110\x89\x02\u05EA\u05E9\x03\x02\x02\x02\u05EB\u05EC" +
        "\x03\x02\x02\x02\u05EC\u05EA\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02" +
        "\u05ED\u05EF\x03\x02\x02\x02\u05EE\u05F0\x05\u0114\x8B\x02\u05EF\u05EE" +
        "\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F3\x03\x02\x02\x02" +
        "\u05F1\u05F3\x05\u0114\x8B\x02\u05F2\u05EA\x03\x02\x02\x02\u05F2\u05F1" +
        "\x03\x02\x02\x02\u05F3\u010F\x03\x02\x02\x02\u05F4\u05F5\x05\u0112\x8A" +
        "\x02\u05F5\u05F6\x05\x1A\x0E\x02\u05F6\u05FF\x03\x02\x02\x02\u05F7\u05F8" +
        "\x07f\x02\x02\u05F8\u05FA\x05\u014C\xA7\x02\u05F9\u05FB\x05\u0112\x8A" +
        "\x02\u05FA\u05F9\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u05FC" +
        "\x03\x02\x02\x02\u05FC\u05FD\x05\x1A\x0E\x02\u05FD\u05FF\x03\x02\x02\x02" +
        "\u05FE\u05F4\x03\x02\x02\x02\u05FE\u05F7\x03\x02\x02\x02\u05FF\u0111\x03" +
        "\x02\x02\x02\u0600\u0601\x07g\x02\x02\u0601\u0602\x07\x10\x02\x02\u0602" +
        "\u0605\x05\xE2r\x02\u0603\u0604\x07\x03\x02\x02\u0604\u0606\x05\xE2r\x02" +
        "\u0605\u0603\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606\u0607\x03" +
        "\x02\x02\x02\u0607\u0608\x07\x11\x02\x02\u0608\u0113\x03\x02\x02\x02\u0609" +
        "\u060A\x07h\x02\x02\u060A\u060B\x05\x1A\x0E\x02\u060B\u0115\x03\x02\x02" +
        "\x02\u060C\u060E\x07i\x02\x02\u060D\u060F\x05l7\x02\u060E\u060D\x03\x02" +
        "\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610" +
        "\u0611\x07\v\x02\x02\u0611\u0117\x03\x02\x02\x02\u0612\u0613\x05\xE2r" +
        "\x02\u0613\u0614\x07\x17\x02\x02\u0614\u0119\x03\x02\x02\x02\u0615\u0617" +
        "\x07j\x02\x02\u0616\u0618\x05\xE2r\x02\u0617\u0616\x03\x02\x02\x02\u0617" +
        "\u0618\x03\x02\x02\x02\u0618\u0619\x03\x02\x02\x02\u0619\u061A\x07\v\x02" +
        "\x02\u061A\u011B\x03\x02\x02\x02\u061B\u061D\x07k\x02\x02\u061C\u061E" +
        "\x05\xE2r\x02\u061D\u061C\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02" +
        "\u061E\u061F\x03\x02\x02\x02\u061F\u0620\x07\v\x02\x02\u0620\u011D\x03" +
        "\x02\x02\x02\u0621\u0622\x07l\x02\x02\u0622\u0623\x05l7\x02\u0623\u0624" +
        "\x07\v\x02\x02\u0624\u011F\x03\x02\x02\x02\u0625\u0626\x07m\x02\x02\u0626" +
        "\u0627\x05l7\x02\u0627\u0628\x07\v\x02\x02\u0628\u0121\x03\x02\x02\x02" +
        "\u0629\u062A\x05\u0124\x93\x02\u062A\u062B\x07\v\x02\x02\u062B\u0123\x03" +
        "\x02\x02\x02\u062C\u062D\x07n\x02\x02\u062D\u062E\x07\x10\x02\x02\u062E" +
        "\u0631\x05l7\x02\u062F\u0630\x07\x03\x02\x02\u0630\u0632\x05l7\x02\u0631" +
        "\u062F\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u0634\x03\x02" +
        "\x02\x02\u0633\u0635\x07\x03\x02\x02\u0634\u0633\x03\x02\x02\x02\u0634" +
        "\u0635\x03\x02\x02\x02\u0635\u0636\x03\x02\x02\x02\u0636\u0637\x07\x11" +
        "\x02\x02\u0637\u0125\x03\x02\x02\x02\u0638\u066A\x052\x1A\x02\u0639\u066A" +
        "\x05b2\x02\u063A\u066A\x05\u0154\xAB\x02\u063B\u063D\x07\x1C\x02\x02\u063C" +
        "\u063B\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063E\x03\x02" +
        "\x02\x02\u063E\u063F\x05\x12\n\x02\u063F\u0640\x07\v\x02\x02\u0640\u066A" +
        "\x03\x02\x02\x02\u0641\u0643\x07\x1C\x02\x02\u0642\u0641\x03\x02\x02\x02" +
        "\u0642\u0643\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0645\x05" +
        "F$\x02\u0645\u0646\x07\v\x02\x02\u0646\u066A\x03\x02\x02\x02\u0647\u0649" +
        "\x07\x1C\x02\x02\u0648\u0647\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02" +
        "\u0649\u064A\x03\x02\x02\x02\u064A\u064B\x05H%\x02\u064B\u064C\x07\v\x02" +
        "\x02\u064C\u066A\x03\x02\x02\x02\u064D\u064E\x05\x12\n\x02\u064E\u064F" +
        "\x05\x18\r\x02\u064F\u066A\x03\x02\x02\x02\u0650\u0652\x05\x16\f\x02\u0651" +
        "\u0650\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\u0653\x03\x02" +
        "\x02\x02\u0653\u0654\x07\"\x02\x02\u0654\u0655\x05\xE2r\x02\u0655\u0656" +
        "\x05\x18\r\x02\u0656\u066A\x03\x02\x02\x02\u0657\u0659\x05\x16\f\x02\u0658" +
        "\u0657\x03\x02\x02\x02\u0658\u0659\x03\x02\x02\x02\u0659\u065A\x03\x02" +
        "\x02\x02\u065A\u065B\x07#\x02\x02\u065B\u065C\x05\xE2r\x02\u065C\u065D" +
        "\x05\x1C\x0F\x02\u065D\u065E\x05\x18\r\x02\u065E\u066A\x03\x02\x02\x02" +
        "\u065F\u0661\t\x03\x02\x02\u0660\u0662\x05\u014C\xA7\x02\u0661\u0660\x03" +
        "\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663" +
        "\u0664\x05<\x1F\x02\u0664\u0665\x07\v\x02\x02\u0665\u066A\x03\x02\x02" +
        "\x02\u0666\u0667\x05\x04\x03\x02\u0667\u0668\x07\v\x02\x02\u0668\u066A" +
        "\x03\x02\x02\x02\u0669\u0638\x03\x02\x02\x02\u0669\u0639\x03\x02\x02\x02" +
        "\u0669\u063A\x03\x02\x02\x02\u0669\u063C\x03\x02\x02\x02\u0669\u0642\x03" +
        "\x02\x02\x02\u0669\u0648\x03\x02\x02\x02\u0669\u064D\x03\x02\x02\x02\u0669" +
        "\u0651\x03\x02\x02\x02\u0669\u0658\x03\x02\x02\x02\u0669\u065F\x03\x02" +
        "\x02\x02\u0669\u0666\x03\x02\x02\x02\u066A\u0127\x03\x02\x02\x02\u066B" +
        "\u066C\t\x10\x02\x02\u066C\u0129\x03\x02\x02\x02\u066D\u066F\x05\u012C" +
        "\x97\x02\u066E\u066D\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F" +
        "\u0671\x03\x02\x02\x02\u0670\u0672\x05\u012E\x98\x02\u0671\u0670\x03\x02" +
        "\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\u0676\x03\x02\x02\x02\u0673" +
        "\u0675\x05\u0130\x99\x02\u0674\u0673\x03\x02\x02\x02\u0675\u0678\x03\x02" +
        "\x02\x02\u0676\u0674\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02\u0677" +
        "\u067C\x03\x02\x02\x02\u0678\u0676\x03\x02\x02\x02\u0679\u067B\x05\u013E" +
        "\xA0\x02\u067A\u0679\x03\x02\x02\x02\u067B\u067E\x03\x02\x02\x02\u067C" +
        "\u067A\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u0682\x03\x02" +
        "\x02\x02\u067E\u067C\x03\x02\x02\x02\u067F\u0681\x05\u0126\x94\x02\u0680" +
        "\u067F\x03\x02\x02\x02\u0681\u0684\x03\x02\x02\x02\u0682\u0680\x03\x02" +
        "\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u012B\x03\x02\x02\x02\u0684" +
        "\u0682\x03\x02\x02\x02\u0685\u0689\x07o\x02\x02\u0686\u0688\n\x11\x02" +
        "\x02\u0687\u0686\x03\x02\x02\x02\u0688\u068B\x03\x02\x02\x02\u0689\u0687" +
        "\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068C\x03\x02\x02\x02" +
        "\u068B\u0689\x03\x02\x02\x02\u068C\u068D\x07}\x02\x02\u068D\u012D\x03" +
        "\x02\x02\x02\u068E\u068F\x05j6\x02\u068F\u0690\x07";
    Dart2Parser._serializedATNSegment3 = "p\x02\x02\u0690\u0691\x05\u0132\x9A\x02\u0691\u0692\x07\v\x02\x02\u0692" +
        "\u012F\x03\x02\x02\x02\u0693\u0696\x05\u0134\x9B\x02\u0694\u0696\x05\u013C" +
        "\x9F\x02\u0695\u0693\x03\x02\x02\x02\u0695\u0694\x03\x02\x02\x02\u0696" +
        "\u0131\x03\x02\x02\x02\u0697\u069C\x05\xE2r\x02\u0698\u0699\x07\x03\x02" +
        "\x02\u0699\u069B\x05\xE2r\x02\u069A\u0698\x03\x02\x02\x02\u069B\u069E" +
        "\x03\x02\x02\x02\u069C\u069A\x03\x02\x02\x02\u069C\u069D\x03\x02\x02\x02" +
        "\u069D\u0133\x03\x02\x02\x02\u069E\u069C\x03\x02\x02\x02\u069F\u06A0\x05" +
        "j6\x02\u06A0\u06A1\x05\u0136\x9C\x02\u06A1\u0135\x03\x02\x02\x02\u06A2" +
        "\u06A3\x07q\x02\x02\u06A3\u06A6\x05\u0146\xA4\x02\u06A4\u06A5\x07Z\x02" +
        "\x02\u06A5\u06A7\x05\xE2r\x02\u06A6\u06A4\x03\x02\x02\x02\u06A6\u06A7" +
        "\x03\x02\x02\x02\u06A7\u06AB\x03\x02\x02\x02\u06A8\u06AA\x05\u0138\x9D" +
        "\x02\u06A9\u06A8\x03\x02\x02\x02\u06AA\u06AD\x03\x02\x02\x02\u06AB\u06A9" +
        "\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AE\x03\x02\x02\x02" +
        "\u06AD\u06AB\x03\x02\x02\x02\u06AE\u06AF\x07\v\x02\x02\u06AF\u0137\x03" +
        "\x02\x02\x02\u06B0\u06B1\x07r\x02\x02\u06B1\u06B5\x05\u013A\x9E\x02\u06B2" +
        "\u06B3\x07s\x02\x02\u06B3\u06B5\x05\u013A\x9E\x02\u06B4\u06B0\x03\x02" +
        "\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B5\u0139\x03\x02\x02\x02\u06B6" +
        "\u06BB\x05\xE2r\x02\u06B7\u06B8\x07\x03\x02\x02\u06B8\u06BA\x05\xE2r\x02" +
        "\u06B9\u06B7\x03\x02\x02\x02\u06BA\u06BD\x03\x02\x02\x02\u06BB\u06B9\x03" +
        "\x02\x02\x02\u06BB\u06BC\x03\x02\x02\x02\u06BC\u013B\x03\x02\x02\x02\u06BD" +
        "\u06BB\x03\x02\x02\x02\u06BE\u06BF\x05j6\x02\u06BF\u06C0\x07t\x02\x02" +
        "\u06C0\u06C4\x05\u0146\xA4\x02\u06C1\u06C3\x05\u0138\x9D\x02\u06C2\u06C1" +
        "\x03\x02\x02\x02\u06C3\u06C6\x03\x02\x02\x02\u06C4\u06C2\x03\x02\x02\x02" +
        "\u06C4\u06C5\x03\x02\x02\x02\u06C5\u06C7\x03\x02\x02\x02\u06C6\u06C4\x03" +
        "\x02\x02\x02\u06C7\u06C8\x07\v\x02\x02\u06C8\u013D\x03\x02\x02\x02\u06C9" +
        "\u06CA\x05j6\x02\u06CA\u06CB\x07u\x02\x02\u06CB\u06CC\x05\u0144\xA3\x02" +
        "\u06CC\u06CD\x07\v\x02\x02\u06CD\u013F\x03\x02\x02\x02\u06CE\u06CF\x05" +
        "j6\x02\u06CF\u06D0\x07u\x02\x02\u06D0\u06D1\x07v\x02\x02\u06D1\u06D6\x05" +
        "\xE2r\x02\u06D2\u06D3\x07\x16\x02\x02\u06D3\u06D5\x05\xE2r\x02\u06D4\u06D2" +
        "\x03\x02\x02\x02\u06D5\u06D8\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02" +
        "\u06D6\u06D7\x03\x02\x02\x02\u06D7\u06D9\x03\x02\x02\x02\u06D8\u06D6\x03" +
        "\x02\x02\x02\u06D9\u06DA\x07\v\x02\x02\u06DA\u0141\x03\x02\x02\x02\u06DB" +
        "\u06DF\x05\u0140\xA1\x02\u06DC\u06DE\x05\u0126\x94\x02\u06DD\u06DC\x03" +
        "\x02\x02\x02\u06DE\u06E1\x03\x02\x02\x02\u06DF\u06DD\x03\x02\x02\x02\u06DF" +
        "\u06E0\x03\x02\x02\x02\u06E0\u06E2\x03\x02\x02\x02\u06E1\u06DF\x03\x02" +
        "\x02\x02\u06E2\u06E3\x07\x02\x02\x03\u06E3\u0143\x03\x02\x02\x02\u06E4" +
        "\u06E5\x05|?\x02\u06E5\u0145\x03\x02\x02\x02\u06E6\u06EA\x05\u0144\xA3" +
        "\x02\u06E7\u06E9\x05\u0148\xA5\x02\u06E8\u06E7\x03\x02\x02\x02\u06E9\u06EC" +
        "\x03\x02\x02\x02\u06EA\u06E8\x03\x02\x02\x02\u06EA\u06EB\x03\x02\x02\x02" +
        "\u06EB\u0147\x03\x02\x02\x02\u06EC\u06EA\x03\x02\x02\x02\u06ED\u06EE\x07" +
        "[\x02\x02\u06EE\u06EF\x07\x10\x02\x02\u06EF\u06F0\x05\u014A\xA6\x02\u06F0" +
        "\u06F1\x07\x11\x02\x02\u06F1\u06F2\x05\u0144\xA3\x02\u06F2\u0149\x03\x02" +
        "\x02\x02\u06F3\u06F6\x05\u0132\x9A\x02\u06F4\u06F5\x07!\x02\x02\u06F5" +
        "\u06F7\x05|?\x02\u06F6\u06F4\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02" +
        "\u06F7\u014B\x03\x02\x02\x02\u06F8\u06FA\x05\u014E\xA8\x02\u06F9\u06FB" +
        "\x05\u0150\xA9\x02\u06FA\u06F9\x03\x02\x02\x02\u06FA\u06FB\x03\x02\x02" +
        "\x02\u06FB\u014D\x03\x02\x02\x02\u06FC\u06FF\x05\xE4s\x02\u06FD\u06FF" +
        "\x07\b\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FE\u06FD\x03\x02\x02\x02" +
        "\u06FF\u014F\x03\x02\x02\x02\u0700\u0701\x07)\x02\x02\u0701\u0702\x05" +
        "\u0152\xAA\x02\u0702\u0703\x07*\x02\x02\u0703\u0151\x03\x02\x02\x02\u0704" +
        "\u0709\x05\u014C\xA7\x02\u0705\u0706\x07\x03\x02\x02\u0706\u0708\x05\u014C" +
        "\xA7\x02\u0707\u0705\x03\x02\x02\x02\u0708\u070B\x03\x02\x02\x02\u0709" +
        "\u0707\x03\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A\u0153\x03\x02" +
        "\x02\x02\u070B\u0709\x03\x02\x02\x02\u070C\u070D\x05j6\x02\u070D\u070E" +
        "\x07w\x02\x02\u070E\u070F\x05\u0156\xAC\x02\u070F\u0155\x03\x02\x02\x02" +
        "\u0710\u0711\x05\u0158\xAD\x02\u0711\u0157\x03\x02\x02\x02\u0712\u0714" +
        "\x05\u015A\xAE\x02\u0713\u0715\x05h5\x02\u0714\u0713\x03\x02\x02\x02\u0714" +
        "\u0715\x03\x02\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716\u0717\x05\x1C" +
        "\x0F\x02\u0717\u0718\x07\v\x02\x02\u0718\u0159\x03\x02\x02\x02\u0719\u071B" +
        "\x05\x16\f\x02\u071A\u0719\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02" +
        "\u071B\u071C\x03\x02\x02\x02\u071C\u071D\x05\xE2r\x02\u071D\u015B\x03" +
        "\x02\x02\x02\xD9\u015E\u0165\u016E\u0172\u0175\u0179\u017E\u0184\u018A" +
        "\u0191\u0196\u019C\u01A2\u01A5\u01AC\u01AF\u01BF\u01C7\u01CE\u01D3\u01DB" +
        "\u01DF\u01E9\u01ED\u01F4\u01F8\u01FB\u0203\u0207\u020B\u0211\u0216\u021B" +
        "\u0220\u0222\u0226\u022B\u022E\u0231\u0234\u023C\u0243\u0248\u0253\u0257" +
        "\u025B\u025F\u0263\u0267\u026C\u0271\u0279\u027B\u0280\u0282\u0286\u028B" +
        "\u028D\u0293\u0298\u029C\u02A0\u02A3\u02AA\u02B2\u02BC\u02C4\u02C7\u02CD" +
        "\u02D6\u02DE\u02E8\u02F4\u02F8\u0300\u0307\u030C\u0312\u0319\u0327\u0330" +
        "\u033B\u033F\u034A\u0352\u035B\u035E\u0362\u036D\u0371\u0379\u0380\u038F" +
        "\u0398\u03A3\u03AB\u03B4\u03B7\u03BA\u03BD\u03C2\u03C4\u03C9\u03CC\u03D4" +
        "\u03D8\u03DA\u03F1\u03F9\u0400\u0402\u040B\u0413\u0416\u0420\u0427\u042C" +
        "\u0432\u0439\u043C\u0442\u044C\u0453\u045B\u0463\u046A\u0470\u047A\u0480" +
        "\u0489\u0491\u0493\u049A\u04A2\u04A4\u04AB\u04B3\u04B5\u04BF\u04C8\u04CA" +
        "\u04D4\u04DD\u04DF\u04E9\u04F2\u04F4\u04FF\u0506\u050B\u051D\u0520\u0526" +
        "\u052E\u0532\u0538\u0540\u0545\u054C\u0553\u055D\u0563\u0579\u057C\u058D" +
        "\u0590\u059A\u059E\u05A8\u05AC\u05AF\u05C7\u05CB\u05D2\u05DD\u05EC\u05EF" +
        "\u05F2\u05FA\u05FE\u0605\u060E\u0617\u061D\u0631\u0634\u063C\u0642\u0648" +
        "\u0651\u0658\u0661\u0669\u066E\u0671\u0676\u067C\u0682\u0689\u0695\u069C" +
        "\u06A6\u06AB\u06B4\u06BB\u06C4\u06D6\u06DF\u06EA\u06F6\u06FA\u06FE\u0709" +
        "\u0714\u071A";
    Dart2Parser._serializedATN = Utils.join([
        Dart2Parser._serializedATNSegment0,
        Dart2Parser._serializedATNSegment1,
        Dart2Parser._serializedATNSegment2,
        Dart2Parser._serializedATNSegment3,
    ], "");
    return Dart2Parser;
}(Parser_1.Parser));
exports.Dart2Parser = Dart2Parser;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.libraryDefinition = function () {
        return this.tryGetRuleContext(0, LibraryDefinitionContext);
    };
    CompilationUnitContext.prototype.partDeclaration = function () {
        return this.tryGetRuleContext(0, PartDeclarationContext);
    };
    Object.defineProperty(CompilationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_compilationUnit; },
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
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.declaredIdentifier = function () {
        return this.getRuleContext(0, DeclaredIdentifierContext);
    };
    VariableDeclarationContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var DeclaredIdentifierContext = /** @class */ (function (_super) {
    __extends(DeclaredIdentifierContext, _super);
    function DeclaredIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclaredIdentifierContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    DeclaredIdentifierContext.prototype.finalConstVarOrType = function () {
        return this.getRuleContext(0, FinalConstVarOrTypeContext);
    };
    DeclaredIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(DeclaredIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_declaredIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclaredIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaredIdentifier) {
            listener.enterDeclaredIdentifier(this);
        }
    };
    // @Override
    DeclaredIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaredIdentifier) {
            listener.exitDeclaredIdentifier(this);
        }
    };
    // @Override
    DeclaredIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaredIdentifier) {
            return visitor.visitDeclaredIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclaredIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclaredIdentifierContext = DeclaredIdentifierContext;
var FinalConstVarOrTypeContext = /** @class */ (function (_super) {
    __extends(FinalConstVarOrTypeContext, _super);
    function FinalConstVarOrTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinalConstVarOrTypeContext.prototype.dtype = function () {
        return this.tryGetRuleContext(0, DtypeContext);
    };
    FinalConstVarOrTypeContext.prototype.varOrType = function () {
        return this.tryGetRuleContext(0, VarOrTypeContext);
    };
    Object.defineProperty(FinalConstVarOrTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_finalConstVarOrType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinalConstVarOrTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFinalConstVarOrType) {
            listener.enterFinalConstVarOrType(this);
        }
    };
    // @Override
    FinalConstVarOrTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFinalConstVarOrType) {
            listener.exitFinalConstVarOrType(this);
        }
    };
    // @Override
    FinalConstVarOrTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFinalConstVarOrType) {
            return visitor.visitFinalConstVarOrType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinalConstVarOrTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinalConstVarOrTypeContext = FinalConstVarOrTypeContext;
var VarOrTypeContext = /** @class */ (function (_super) {
    __extends(VarOrTypeContext, _super);
    function VarOrTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarOrTypeContext.prototype.dtype = function () {
        return this.tryGetRuleContext(0, DtypeContext);
    };
    Object.defineProperty(VarOrTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_varOrType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarOrTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterVarOrType) {
            listener.enterVarOrType(this);
        }
    };
    // @Override
    VarOrTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitVarOrType) {
            listener.exitVarOrType(this);
        }
    };
    // @Override
    VarOrTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitVarOrType) {
            return visitor.visitVarOrType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarOrTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarOrTypeContext = VarOrTypeContext;
var InitializedVariableDeclarationContext = /** @class */ (function (_super) {
    __extends(InitializedVariableDeclarationContext, _super);
    function InitializedVariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializedVariableDeclarationContext.prototype.declaredIdentifier = function () {
        return this.getRuleContext(0, DeclaredIdentifierContext);
    };
    InitializedVariableDeclarationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    InitializedVariableDeclarationContext.prototype.initializedIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitializedIdentifierContext);
        }
        else {
            return this.getRuleContext(i, InitializedIdentifierContext);
        }
    };
    Object.defineProperty(InitializedVariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_initializedVariableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitializedVariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterInitializedVariableDeclaration) {
            listener.enterInitializedVariableDeclaration(this);
        }
    };
    // @Override
    InitializedVariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitInitializedVariableDeclaration) {
            listener.exitInitializedVariableDeclaration(this);
        }
    };
    // @Override
    InitializedVariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitInitializedVariableDeclaration) {
            return visitor.visitInitializedVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitializedVariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializedVariableDeclarationContext = InitializedVariableDeclarationContext;
var InitializedIdentifierContext = /** @class */ (function (_super) {
    __extends(InitializedIdentifierContext, _super);
    function InitializedIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializedIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    InitializedIdentifierContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(InitializedIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_initializedIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitializedIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterInitializedIdentifier) {
            listener.enterInitializedIdentifier(this);
        }
    };
    // @Override
    InitializedIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitInitializedIdentifier) {
            listener.exitInitializedIdentifier(this);
        }
    };
    // @Override
    InitializedIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitInitializedIdentifier) {
            return visitor.visitInitializedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitializedIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializedIdentifierContext = InitializedIdentifierContext;
var InitializedIdentifierListContext = /** @class */ (function (_super) {
    __extends(InitializedIdentifierListContext, _super);
    function InitializedIdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializedIdentifierListContext.prototype.initializedIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitializedIdentifierContext);
        }
        else {
            return this.getRuleContext(i, InitializedIdentifierContext);
        }
    };
    Object.defineProperty(InitializedIdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_initializedIdentifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitializedIdentifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterInitializedIdentifierList) {
            listener.enterInitializedIdentifierList(this);
        }
    };
    // @Override
    InitializedIdentifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitInitializedIdentifierList) {
            listener.exitInitializedIdentifierList(this);
        }
    };
    // @Override
    InitializedIdentifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitInitializedIdentifierList) {
            return visitor.visitInitializedIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitializedIdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializedIdentifierListContext = InitializedIdentifierListContext;
var FunctionSignatureContext = /** @class */ (function (_super) {
    __extends(FunctionSignatureContext, _super);
    function FunctionSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionSignatureContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    FunctionSignatureContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionSignatureContext.prototype.formalParameterPart = function () {
        return this.getRuleContext(0, FormalParameterPartContext);
    };
    FunctionSignatureContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(FunctionSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_functionSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionSignature) {
            listener.enterFunctionSignature(this);
        }
    };
    // @Override
    FunctionSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionSignature) {
            listener.exitFunctionSignature(this);
        }
    };
    // @Override
    FunctionSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionSignature) {
            return visitor.visitFunctionSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionSignatureContext = FunctionSignatureContext;
var FormalParameterPartContext = /** @class */ (function (_super) {
    __extends(FormalParameterPartContext, _super);
    function FormalParameterPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterPartContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    FormalParameterPartContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(FormalParameterPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_formalParameterPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterPartContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterPart) {
            listener.enterFormalParameterPart(this);
        }
    };
    // @Override
    FormalParameterPartContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterPart) {
            listener.exitFormalParameterPart(this);
        }
    };
    // @Override
    FormalParameterPartContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterPart) {
            return visitor.visitFormalParameterPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterPartContext = FormalParameterPartContext;
var ReturnTypeContext = /** @class */ (function (_super) {
    __extends(ReturnTypeContext, _super);
    function ReturnTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnTypeContext.prototype.dtype = function () {
        return this.tryGetRuleContext(0, DtypeContext);
    };
    Object.defineProperty(ReturnTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_returnType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnType) {
            listener.enterReturnType(this);
        }
    };
    // @Override
    ReturnTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnType) {
            listener.exitReturnType(this);
        }
    };
    // @Override
    ReturnTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnTypeContext = ReturnTypeContext;
var FunctionBodyContext = /** @class */ (function (_super) {
    __extends(FunctionBodyContext, _super);
    function FunctionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionBodyContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    FunctionBodyContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(FunctionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_functionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionBodyContext = FunctionBodyContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.statements = function () {
        return this.getRuleContext(0, StatementsContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var FormalParameterListContext = /** @class */ (function (_super) {
    __extends(FormalParameterListContext, _super);
    function FormalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterListContext.prototype.normalFormalParameters = function () {
        return this.tryGetRuleContext(0, NormalFormalParametersContext);
    };
    FormalParameterListContext.prototype.optionalFormalParameters = function () {
        return this.tryGetRuleContext(0, OptionalFormalParametersContext);
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_formalParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterListContext = FormalParameterListContext;
var NormalFormalParametersContext = /** @class */ (function (_super) {
    __extends(NormalFormalParametersContext, _super);
    function NormalFormalParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NormalFormalParametersContext.prototype.normalFormalParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NormalFormalParameterContext);
        }
        else {
            return this.getRuleContext(i, NormalFormalParameterContext);
        }
    };
    Object.defineProperty(NormalFormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_normalFormalParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NormalFormalParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterNormalFormalParameters) {
            listener.enterNormalFormalParameters(this);
        }
    };
    // @Override
    NormalFormalParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitNormalFormalParameters) {
            listener.exitNormalFormalParameters(this);
        }
    };
    // @Override
    NormalFormalParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitNormalFormalParameters) {
            return visitor.visitNormalFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NormalFormalParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NormalFormalParametersContext = NormalFormalParametersContext;
var OptionalFormalParametersContext = /** @class */ (function (_super) {
    __extends(OptionalFormalParametersContext, _super);
    function OptionalFormalParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalFormalParametersContext.prototype.optionalPositionalFormalParameters = function () {
        return this.tryGetRuleContext(0, OptionalPositionalFormalParametersContext);
    };
    OptionalFormalParametersContext.prototype.namedFormalParameters = function () {
        return this.tryGetRuleContext(0, NamedFormalParametersContext);
    };
    Object.defineProperty(OptionalFormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_optionalFormalParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalFormalParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalFormalParameters) {
            listener.enterOptionalFormalParameters(this);
        }
    };
    // @Override
    OptionalFormalParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalFormalParameters) {
            listener.exitOptionalFormalParameters(this);
        }
    };
    // @Override
    OptionalFormalParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalFormalParameters) {
            return visitor.visitOptionalFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalFormalParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalFormalParametersContext = OptionalFormalParametersContext;
var OptionalPositionalFormalParametersContext = /** @class */ (function (_super) {
    __extends(OptionalPositionalFormalParametersContext, _super);
    function OptionalPositionalFormalParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalPositionalFormalParametersContext.prototype.defaultFormalParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefaultFormalParameterContext);
        }
        else {
            return this.getRuleContext(i, DefaultFormalParameterContext);
        }
    };
    Object.defineProperty(OptionalPositionalFormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_optionalPositionalFormalParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalPositionalFormalParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalPositionalFormalParameters) {
            listener.enterOptionalPositionalFormalParameters(this);
        }
    };
    // @Override
    OptionalPositionalFormalParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalPositionalFormalParameters) {
            listener.exitOptionalPositionalFormalParameters(this);
        }
    };
    // @Override
    OptionalPositionalFormalParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalPositionalFormalParameters) {
            return visitor.visitOptionalPositionalFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalPositionalFormalParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalPositionalFormalParametersContext = OptionalPositionalFormalParametersContext;
var NamedFormalParametersContext = /** @class */ (function (_super) {
    __extends(NamedFormalParametersContext, _super);
    function NamedFormalParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedFormalParametersContext.prototype.defaultNamedParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefaultNamedParameterContext);
        }
        else {
            return this.getRuleContext(i, DefaultNamedParameterContext);
        }
    };
    Object.defineProperty(NamedFormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_namedFormalParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedFormalParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedFormalParameters) {
            listener.enterNamedFormalParameters(this);
        }
    };
    // @Override
    NamedFormalParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedFormalParameters) {
            listener.exitNamedFormalParameters(this);
        }
    };
    // @Override
    NamedFormalParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedFormalParameters) {
            return visitor.visitNamedFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedFormalParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedFormalParametersContext = NamedFormalParametersContext;
var NormalFormalParameterContext = /** @class */ (function (_super) {
    __extends(NormalFormalParameterContext, _super);
    function NormalFormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NormalFormalParameterContext.prototype.functionFormalParameter = function () {
        return this.tryGetRuleContext(0, FunctionFormalParameterContext);
    };
    NormalFormalParameterContext.prototype.fieldFormalParameter = function () {
        return this.tryGetRuleContext(0, FieldFormalParameterContext);
    };
    NormalFormalParameterContext.prototype.simpleFormalParameter = function () {
        return this.tryGetRuleContext(0, SimpleFormalParameterContext);
    };
    Object.defineProperty(NormalFormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_normalFormalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NormalFormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterNormalFormalParameter) {
            listener.enterNormalFormalParameter(this);
        }
    };
    // @Override
    NormalFormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitNormalFormalParameter) {
            listener.exitNormalFormalParameter(this);
        }
    };
    // @Override
    NormalFormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitNormalFormalParameter) {
            return visitor.visitNormalFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NormalFormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NormalFormalParameterContext = NormalFormalParameterContext;
var FunctionFormalParameterContext = /** @class */ (function (_super) {
    __extends(FunctionFormalParameterContext, _super);
    function FunctionFormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionFormalParameterContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    FunctionFormalParameterContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionFormalParameterContext.prototype.formalParameterPart = function () {
        return this.getRuleContext(0, FormalParameterPartContext);
    };
    FunctionFormalParameterContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(FunctionFormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_functionFormalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionFormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionFormalParameter) {
            listener.enterFunctionFormalParameter(this);
        }
    };
    // @Override
    FunctionFormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionFormalParameter) {
            listener.exitFunctionFormalParameter(this);
        }
    };
    // @Override
    FunctionFormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionFormalParameter) {
            return visitor.visitFunctionFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionFormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionFormalParameterContext = FunctionFormalParameterContext;
var SimpleFormalParameterContext = /** @class */ (function (_super) {
    __extends(SimpleFormalParameterContext, _super);
    function SimpleFormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleFormalParameterContext.prototype.declaredIdentifier = function () {
        return this.tryGetRuleContext(0, DeclaredIdentifierContext);
    };
    SimpleFormalParameterContext.prototype.metadata = function () {
        return this.tryGetRuleContext(0, MetadataContext);
    };
    SimpleFormalParameterContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(SimpleFormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_simpleFormalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleFormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleFormalParameter) {
            listener.enterSimpleFormalParameter(this);
        }
    };
    // @Override
    SimpleFormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleFormalParameter) {
            listener.exitSimpleFormalParameter(this);
        }
    };
    // @Override
    SimpleFormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleFormalParameter) {
            return visitor.visitSimpleFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleFormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleFormalParameterContext = SimpleFormalParameterContext;
var FieldFormalParameterContext = /** @class */ (function (_super) {
    __extends(FieldFormalParameterContext, _super);
    function FieldFormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldFormalParameterContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    FieldFormalParameterContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FieldFormalParameterContext.prototype.finalConstVarOrType = function () {
        return this.tryGetRuleContext(0, FinalConstVarOrTypeContext);
    };
    FieldFormalParameterContext.prototype.formalParameterPart = function () {
        return this.tryGetRuleContext(0, FormalParameterPartContext);
    };
    Object.defineProperty(FieldFormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_fieldFormalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldFormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldFormalParameter) {
            listener.enterFieldFormalParameter(this);
        }
    };
    // @Override
    FieldFormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldFormalParameter) {
            listener.exitFieldFormalParameter(this);
        }
    };
    // @Override
    FieldFormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldFormalParameter) {
            return visitor.visitFieldFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldFormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldFormalParameterContext = FieldFormalParameterContext;
var DefaultFormalParameterContext = /** @class */ (function (_super) {
    __extends(DefaultFormalParameterContext, _super);
    function DefaultFormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultFormalParameterContext.prototype.normalFormalParameter = function () {
        return this.getRuleContext(0, NormalFormalParameterContext);
    };
    DefaultFormalParameterContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DefaultFormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_defaultFormalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultFormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultFormalParameter) {
            listener.enterDefaultFormalParameter(this);
        }
    };
    // @Override
    DefaultFormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultFormalParameter) {
            listener.exitDefaultFormalParameter(this);
        }
    };
    // @Override
    DefaultFormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultFormalParameter) {
            return visitor.visitDefaultFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultFormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultFormalParameterContext = DefaultFormalParameterContext;
var DefaultNamedParameterContext = /** @class */ (function (_super) {
    __extends(DefaultNamedParameterContext, _super);
    function DefaultNamedParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultNamedParameterContext.prototype.normalFormalParameter = function () {
        return this.getRuleContext(0, NormalFormalParameterContext);
    };
    DefaultNamedParameterContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DefaultNamedParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_defaultNamedParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultNamedParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultNamedParameter) {
            listener.enterDefaultNamedParameter(this);
        }
    };
    // @Override
    DefaultNamedParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultNamedParameter) {
            listener.exitDefaultNamedParameter(this);
        }
    };
    // @Override
    DefaultNamedParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultNamedParameter) {
            return visitor.visitDefaultNamedParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultNamedParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultNamedParameterContext = DefaultNamedParameterContext;
var ClassDefinitionContext = /** @class */ (function (_super) {
    __extends(ClassDefinitionContext, _super);
    function ClassDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDefinitionContext.prototype.metadata = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MetadataContext);
        }
        else {
            return this.getRuleContext(i, MetadataContext);
        }
    };
    ClassDefinitionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ClassDefinitionContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    ClassDefinitionContext.prototype.superclass = function () {
        return this.tryGetRuleContext(0, SuperclassContext);
    };
    ClassDefinitionContext.prototype.mixins = function () {
        return this.tryGetRuleContext(0, MixinsContext);
    };
    ClassDefinitionContext.prototype.interfaces = function () {
        return this.tryGetRuleContext(0, InterfacesContext);
    };
    ClassDefinitionContext.prototype.classMemberDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassMemberDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ClassMemberDefinitionContext);
        }
    };
    ClassDefinitionContext.prototype.mixinApplicationClass = function () {
        return this.tryGetRuleContext(0, MixinApplicationClassContext);
    };
    Object.defineProperty(ClassDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_classDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDefinition) {
            listener.enterClassDefinition(this);
        }
    };
    // @Override
    ClassDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDefinition) {
            listener.exitClassDefinition(this);
        }
    };
    // @Override
    ClassDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDefinition) {
            return visitor.visitClassDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDefinitionContext = ClassDefinitionContext;
var MixinsContext = /** @class */ (function (_super) {
    __extends(MixinsContext, _super);
    function MixinsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MixinsContext.prototype.typeList = function () {
        return this.getRuleContext(0, TypeListContext);
    };
    Object.defineProperty(MixinsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_mixins; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MixinsContext.prototype.enterRule = function (listener) {
        if (listener.enterMixins) {
            listener.enterMixins(this);
        }
    };
    // @Override
    MixinsContext.prototype.exitRule = function (listener) {
        if (listener.exitMixins) {
            listener.exitMixins(this);
        }
    };
    // @Override
    MixinsContext.prototype.accept = function (visitor) {
        if (visitor.visitMixins) {
            return visitor.visitMixins(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MixinsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MixinsContext = MixinsContext;
var ClassMemberDefinitionContext = /** @class */ (function (_super) {
    __extends(ClassMemberDefinitionContext, _super);
    function ClassMemberDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassMemberDefinitionContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    ClassMemberDefinitionContext.prototype.methodSignature = function () {
        return this.tryGetRuleContext(0, MethodSignatureContext);
    };
    ClassMemberDefinitionContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    Object.defineProperty(ClassMemberDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_classMemberDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassMemberDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterClassMemberDefinition) {
            listener.enterClassMemberDefinition(this);
        }
    };
    // @Override
    ClassMemberDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitClassMemberDefinition) {
            listener.exitClassMemberDefinition(this);
        }
    };
    // @Override
    ClassMemberDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitClassMemberDefinition) {
            return visitor.visitClassMemberDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassMemberDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassMemberDefinitionContext = ClassMemberDefinitionContext;
var MethodSignatureContext = /** @class */ (function (_super) {
    __extends(MethodSignatureContext, _super);
    function MethodSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodSignatureContext.prototype.constructorSignature = function () {
        return this.tryGetRuleContext(0, ConstructorSignatureContext);
    };
    MethodSignatureContext.prototype.initializers = function () {
        return this.tryGetRuleContext(0, InitializersContext);
    };
    MethodSignatureContext.prototype.factoryConstructorSignature = function () {
        return this.tryGetRuleContext(0, FactoryConstructorSignatureContext);
    };
    MethodSignatureContext.prototype.functionSignature = function () {
        return this.tryGetRuleContext(0, FunctionSignatureContext);
    };
    MethodSignatureContext.prototype.getterSignature = function () {
        return this.tryGetRuleContext(0, GetterSignatureContext);
    };
    MethodSignatureContext.prototype.setterSignature = function () {
        return this.tryGetRuleContext(0, SetterSignatureContext);
    };
    MethodSignatureContext.prototype.operatorSignature = function () {
        return this.tryGetRuleContext(0, OperatorSignatureContext);
    };
    Object.defineProperty(MethodSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_methodSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodSignature) {
            listener.enterMethodSignature(this);
        }
    };
    // @Override
    MethodSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodSignature) {
            listener.exitMethodSignature(this);
        }
    };
    // @Override
    MethodSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodSignature) {
            return visitor.visitMethodSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodSignatureContext = MethodSignatureContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.constantConstructorSignature = function () {
        return this.tryGetRuleContext(0, ConstantConstructorSignatureContext);
    };
    DeclarationContext.prototype.redirection = function () {
        return this.tryGetRuleContext(0, RedirectionContext);
    };
    DeclarationContext.prototype.initializers = function () {
        return this.tryGetRuleContext(0, InitializersContext);
    };
    DeclarationContext.prototype.constructorSignature = function () {
        return this.tryGetRuleContext(0, ConstructorSignatureContext);
    };
    DeclarationContext.prototype.getterSignature = function () {
        return this.tryGetRuleContext(0, GetterSignatureContext);
    };
    DeclarationContext.prototype.setterSignature = function () {
        return this.tryGetRuleContext(0, SetterSignatureContext);
    };
    DeclarationContext.prototype.operatorSignature = function () {
        return this.tryGetRuleContext(0, OperatorSignatureContext);
    };
    DeclarationContext.prototype.functionSignature = function () {
        return this.tryGetRuleContext(0, FunctionSignatureContext);
    };
    DeclarationContext.prototype.staticFinalDeclarationList = function () {
        return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
    };
    DeclarationContext.prototype.dtype = function () {
        return this.tryGetRuleContext(0, DtypeContext);
    };
    DeclarationContext.prototype.initializedIdentifierList = function () {
        return this.tryGetRuleContext(0, InitializedIdentifierListContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_declaration; },
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
var StaticFinalDeclarationListContext = /** @class */ (function (_super) {
    __extends(StaticFinalDeclarationListContext, _super);
    function StaticFinalDeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StaticFinalDeclarationListContext.prototype.staticFinalDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StaticFinalDeclarationContext);
        }
        else {
            return this.getRuleContext(i, StaticFinalDeclarationContext);
        }
    };
    Object.defineProperty(StaticFinalDeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_staticFinalDeclarationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StaticFinalDeclarationListContext.prototype.enterRule = function (listener) {
        if (listener.enterStaticFinalDeclarationList) {
            listener.enterStaticFinalDeclarationList(this);
        }
    };
    // @Override
    StaticFinalDeclarationListContext.prototype.exitRule = function (listener) {
        if (listener.exitStaticFinalDeclarationList) {
            listener.exitStaticFinalDeclarationList(this);
        }
    };
    // @Override
    StaticFinalDeclarationListContext.prototype.accept = function (visitor) {
        if (visitor.visitStaticFinalDeclarationList) {
            return visitor.visitStaticFinalDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StaticFinalDeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StaticFinalDeclarationListContext = StaticFinalDeclarationListContext;
var StaticFinalDeclarationContext = /** @class */ (function (_super) {
    __extends(StaticFinalDeclarationContext, _super);
    function StaticFinalDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StaticFinalDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    StaticFinalDeclarationContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(StaticFinalDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_staticFinalDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StaticFinalDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterStaticFinalDeclaration) {
            listener.enterStaticFinalDeclaration(this);
        }
    };
    // @Override
    StaticFinalDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitStaticFinalDeclaration) {
            listener.exitStaticFinalDeclaration(this);
        }
    };
    // @Override
    StaticFinalDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitStaticFinalDeclaration) {
            return visitor.visitStaticFinalDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StaticFinalDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StaticFinalDeclarationContext = StaticFinalDeclarationContext;
var OperatorSignatureContext = /** @class */ (function (_super) {
    __extends(OperatorSignatureContext, _super);
    function OperatorSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorSignatureContext.prototype.operator = function () {
        return this.getRuleContext(0, OperatorContext);
    };
    OperatorSignatureContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    OperatorSignatureContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(OperatorSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_operatorSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorSignature) {
            listener.enterOperatorSignature(this);
        }
    };
    // @Override
    OperatorSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorSignature) {
            listener.exitOperatorSignature(this);
        }
    };
    // @Override
    OperatorSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorSignature) {
            return visitor.visitOperatorSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorSignatureContext = OperatorSignatureContext;
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorContext.prototype.binaryOperator = function () {
        return this.tryGetRuleContext(0, BinaryOperatorContext);
    };
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_operator; },
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
var BinaryOperatorContext = /** @class */ (function (_super) {
    __extends(BinaryOperatorContext, _super);
    function BinaryOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryOperatorContext.prototype.multiplicativeOperator = function () {
        return this.tryGetRuleContext(0, MultiplicativeOperatorContext);
    };
    BinaryOperatorContext.prototype.additiveOperator = function () {
        return this.tryGetRuleContext(0, AdditiveOperatorContext);
    };
    BinaryOperatorContext.prototype.shiftOperator = function () {
        return this.tryGetRuleContext(0, ShiftOperatorContext);
    };
    BinaryOperatorContext.prototype.relationalOperator = function () {
        return this.tryGetRuleContext(0, RelationalOperatorContext);
    };
    BinaryOperatorContext.prototype.bitwiseOperator = function () {
        return this.tryGetRuleContext(0, BitwiseOperatorContext);
    };
    Object.defineProperty(BinaryOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_binaryOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryOperator) {
            listener.enterBinaryOperator(this);
        }
    };
    // @Override
    BinaryOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryOperator) {
            listener.exitBinaryOperator(this);
        }
    };
    // @Override
    BinaryOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryOperator) {
            return visitor.visitBinaryOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryOperatorContext = BinaryOperatorContext;
var GetterSignatureContext = /** @class */ (function (_super) {
    __extends(GetterSignatureContext, _super);
    function GetterSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetterSignatureContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    GetterSignatureContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(GetterSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_getterSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetterSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterGetterSignature) {
            listener.enterGetterSignature(this);
        }
    };
    // @Override
    GetterSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitGetterSignature) {
            listener.exitGetterSignature(this);
        }
    };
    // @Override
    GetterSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitGetterSignature) {
            return visitor.visitGetterSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetterSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetterSignatureContext = GetterSignatureContext;
var SetterSignatureContext = /** @class */ (function (_super) {
    __extends(SetterSignatureContext, _super);
    function SetterSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetterSignatureContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    SetterSignatureContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    SetterSignatureContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(SetterSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_setterSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetterSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterSetterSignature) {
            listener.enterSetterSignature(this);
        }
    };
    // @Override
    SetterSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitSetterSignature) {
            listener.exitSetterSignature(this);
        }
    };
    // @Override
    SetterSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitSetterSignature) {
            return visitor.visitSetterSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetterSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetterSignatureContext = SetterSignatureContext;
var ConstructorSignatureContext = /** @class */ (function (_super) {
    __extends(ConstructorSignatureContext, _super);
    function ConstructorSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorSignatureContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    ConstructorSignatureContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(ConstructorSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_constructorSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorSignature) {
            listener.enterConstructorSignature(this);
        }
    };
    // @Override
    ConstructorSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorSignature) {
            listener.exitConstructorSignature(this);
        }
    };
    // @Override
    ConstructorSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorSignature) {
            return visitor.visitConstructorSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorSignatureContext = ConstructorSignatureContext;
var RedirectionContext = /** @class */ (function (_super) {
    __extends(RedirectionContext, _super);
    function RedirectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RedirectionContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    RedirectionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(RedirectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_redirection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RedirectionContext.prototype.enterRule = function (listener) {
        if (listener.enterRedirection) {
            listener.enterRedirection(this);
        }
    };
    // @Override
    RedirectionContext.prototype.exitRule = function (listener) {
        if (listener.exitRedirection) {
            listener.exitRedirection(this);
        }
    };
    // @Override
    RedirectionContext.prototype.accept = function (visitor) {
        if (visitor.visitRedirection) {
            return visitor.visitRedirection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RedirectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RedirectionContext = RedirectionContext;
var InitializersContext = /** @class */ (function (_super) {
    __extends(InitializersContext, _super);
    function InitializersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializersContext.prototype.initializerListEntry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitializerListEntryContext);
        }
        else {
            return this.getRuleContext(i, InitializerListEntryContext);
        }
    };
    Object.defineProperty(InitializersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_initializers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitializersContext.prototype.enterRule = function (listener) {
        if (listener.enterInitializers) {
            listener.enterInitializers(this);
        }
    };
    // @Override
    InitializersContext.prototype.exitRule = function (listener) {
        if (listener.exitInitializers) {
            listener.exitInitializers(this);
        }
    };
    // @Override
    InitializersContext.prototype.accept = function (visitor) {
        if (visitor.visitInitializers) {
            return visitor.visitInitializers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitializersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializersContext = InitializersContext;
var InitializerListEntryContext = /** @class */ (function (_super) {
    __extends(InitializerListEntryContext, _super);
    function InitializerListEntryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerListEntryContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    InitializerListEntryContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    InitializerListEntryContext.prototype.fieldInitializer = function () {
        return this.tryGetRuleContext(0, FieldInitializerContext);
    };
    InitializerListEntryContext.prototype.assertion = function () {
        return this.tryGetRuleContext(0, AssertionContext);
    };
    Object.defineProperty(InitializerListEntryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_initializerListEntry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitializerListEntryContext.prototype.enterRule = function (listener) {
        if (listener.enterInitializerListEntry) {
            listener.enterInitializerListEntry(this);
        }
    };
    // @Override
    InitializerListEntryContext.prototype.exitRule = function (listener) {
        if (listener.exitInitializerListEntry) {
            listener.exitInitializerListEntry(this);
        }
    };
    // @Override
    InitializerListEntryContext.prototype.accept = function (visitor) {
        if (visitor.visitInitializerListEntry) {
            return visitor.visitInitializerListEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitializerListEntryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializerListEntryContext = InitializerListEntryContext;
var FieldInitializerContext = /** @class */ (function (_super) {
    __extends(FieldInitializerContext, _super);
    function FieldInitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldInitializerContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FieldInitializerContext.prototype.conditionalExpression = function () {
        return this.getRuleContext(0, ConditionalExpressionContext);
    };
    FieldInitializerContext.prototype.cascadeSection = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CascadeSectionContext);
        }
        else {
            return this.getRuleContext(i, CascadeSectionContext);
        }
    };
    Object.defineProperty(FieldInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_fieldInitializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldInitializerContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldInitializer) {
            listener.enterFieldInitializer(this);
        }
    };
    // @Override
    FieldInitializerContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldInitializer) {
            listener.exitFieldInitializer(this);
        }
    };
    // @Override
    FieldInitializerContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldInitializer) {
            return visitor.visitFieldInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldInitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldInitializerContext = FieldInitializerContext;
var FactoryConstructorSignatureContext = /** @class */ (function (_super) {
    __extends(FactoryConstructorSignatureContext, _super);
    function FactoryConstructorSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactoryConstructorSignatureContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    FactoryConstructorSignatureContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FactoryConstructorSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_factoryConstructorSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FactoryConstructorSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterFactoryConstructorSignature) {
            listener.enterFactoryConstructorSignature(this);
        }
    };
    // @Override
    FactoryConstructorSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitFactoryConstructorSignature) {
            listener.exitFactoryConstructorSignature(this);
        }
    };
    // @Override
    FactoryConstructorSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitFactoryConstructorSignature) {
            return visitor.visitFactoryConstructorSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FactoryConstructorSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FactoryConstructorSignatureContext = FactoryConstructorSignatureContext;
var RedirectingFactoryConstructorSignatureContext = /** @class */ (function (_super) {
    __extends(RedirectingFactoryConstructorSignatureContext, _super);
    function RedirectingFactoryConstructorSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RedirectingFactoryConstructorSignatureContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    RedirectingFactoryConstructorSignatureContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    RedirectingFactoryConstructorSignatureContext.prototype.dtype = function () {
        return this.getRuleContext(0, DtypeContext);
    };
    Object.defineProperty(RedirectingFactoryConstructorSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_redirectingFactoryConstructorSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RedirectingFactoryConstructorSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterRedirectingFactoryConstructorSignature) {
            listener.enterRedirectingFactoryConstructorSignature(this);
        }
    };
    // @Override
    RedirectingFactoryConstructorSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitRedirectingFactoryConstructorSignature) {
            listener.exitRedirectingFactoryConstructorSignature(this);
        }
    };
    // @Override
    RedirectingFactoryConstructorSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitRedirectingFactoryConstructorSignature) {
            return visitor.visitRedirectingFactoryConstructorSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RedirectingFactoryConstructorSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RedirectingFactoryConstructorSignatureContext = RedirectingFactoryConstructorSignatureContext;
var ConstantConstructorSignatureContext = /** @class */ (function (_super) {
    __extends(ConstantConstructorSignatureContext, _super);
    function ConstantConstructorSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantConstructorSignatureContext.prototype.qualified = function () {
        return this.getRuleContext(0, QualifiedContext);
    };
    ConstantConstructorSignatureContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(ConstantConstructorSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_constantConstructorSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantConstructorSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantConstructorSignature) {
            listener.enterConstantConstructorSignature(this);
        }
    };
    // @Override
    ConstantConstructorSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantConstructorSignature) {
            listener.exitConstantConstructorSignature(this);
        }
    };
    // @Override
    ConstantConstructorSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantConstructorSignature) {
            return visitor.visitConstantConstructorSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantConstructorSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantConstructorSignatureContext = ConstantConstructorSignatureContext;
var SuperclassContext = /** @class */ (function (_super) {
    __extends(SuperclassContext, _super);
    function SuperclassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SuperclassContext.prototype.dtype = function () {
        return this.getRuleContext(0, DtypeContext);
    };
    Object.defineProperty(SuperclassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_superclass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SuperclassContext.prototype.enterRule = function (listener) {
        if (listener.enterSuperclass) {
            listener.enterSuperclass(this);
        }
    };
    // @Override
    SuperclassContext.prototype.exitRule = function (listener) {
        if (listener.exitSuperclass) {
            listener.exitSuperclass(this);
        }
    };
    // @Override
    SuperclassContext.prototype.accept = function (visitor) {
        if (visitor.visitSuperclass) {
            return visitor.visitSuperclass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuperclassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SuperclassContext = SuperclassContext;
var InterfacesContext = /** @class */ (function (_super) {
    __extends(InterfacesContext, _super);
    function InterfacesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfacesContext.prototype.typeList = function () {
        return this.getRuleContext(0, TypeListContext);
    };
    Object.defineProperty(InterfacesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_interfaces; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfacesContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaces) {
            listener.enterInterfaces(this);
        }
    };
    // @Override
    InterfacesContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaces) {
            listener.exitInterfaces(this);
        }
    };
    // @Override
    InterfacesContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaces) {
            return visitor.visitInterfaces(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfacesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfacesContext = InterfacesContext;
var MixinApplicationClassContext = /** @class */ (function (_super) {
    __extends(MixinApplicationClassContext, _super);
    function MixinApplicationClassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MixinApplicationClassContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    MixinApplicationClassContext.prototype.mixinApplication = function () {
        return this.getRuleContext(0, MixinApplicationContext);
    };
    MixinApplicationClassContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(MixinApplicationClassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_mixinApplicationClass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MixinApplicationClassContext.prototype.enterRule = function (listener) {
        if (listener.enterMixinApplicationClass) {
            listener.enterMixinApplicationClass(this);
        }
    };
    // @Override
    MixinApplicationClassContext.prototype.exitRule = function (listener) {
        if (listener.exitMixinApplicationClass) {
            listener.exitMixinApplicationClass(this);
        }
    };
    // @Override
    MixinApplicationClassContext.prototype.accept = function (visitor) {
        if (visitor.visitMixinApplicationClass) {
            return visitor.visitMixinApplicationClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MixinApplicationClassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MixinApplicationClassContext = MixinApplicationClassContext;
var MixinApplicationContext = /** @class */ (function (_super) {
    __extends(MixinApplicationContext, _super);
    function MixinApplicationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MixinApplicationContext.prototype.dtype = function () {
        return this.getRuleContext(0, DtypeContext);
    };
    MixinApplicationContext.prototype.mixins = function () {
        return this.getRuleContext(0, MixinsContext);
    };
    MixinApplicationContext.prototype.interfaces = function () {
        return this.tryGetRuleContext(0, InterfacesContext);
    };
    Object.defineProperty(MixinApplicationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_mixinApplication; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MixinApplicationContext.prototype.enterRule = function (listener) {
        if (listener.enterMixinApplication) {
            listener.enterMixinApplication(this);
        }
    };
    // @Override
    MixinApplicationContext.prototype.exitRule = function (listener) {
        if (listener.exitMixinApplication) {
            listener.exitMixinApplication(this);
        }
    };
    // @Override
    MixinApplicationContext.prototype.accept = function (visitor) {
        if (visitor.visitMixinApplication) {
            return visitor.visitMixinApplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MixinApplicationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MixinApplicationContext = MixinApplicationContext;
var EnumTypeContext = /** @class */ (function (_super) {
    __extends(EnumTypeContext, _super);
    function EnumTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumTypeContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    EnumTypeContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    EnumTypeContext.prototype.enumEntry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumEntryContext);
        }
        else {
            return this.getRuleContext(i, EnumEntryContext);
        }
    };
    Object.defineProperty(EnumTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_enumType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumType) {
            listener.enterEnumType(this);
        }
    };
    // @Override
    EnumTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumType) {
            listener.exitEnumType(this);
        }
    };
    // @Override
    EnumTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumType) {
            return visitor.visitEnumType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumTypeContext = EnumTypeContext;
var EnumEntryContext = /** @class */ (function (_super) {
    __extends(EnumEntryContext, _super);
    function EnumEntryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumEntryContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    EnumEntryContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(EnumEntryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_enumEntry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumEntryContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumEntry) {
            listener.enterEnumEntry(this);
        }
    };
    // @Override
    EnumEntryContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumEntry) {
            listener.exitEnumEntry(this);
        }
    };
    // @Override
    EnumEntryContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumEntry) {
            return visitor.visitEnumEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumEntryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumEntryContext = EnumEntryContext;
var TypeParameterContext = /** @class */ (function (_super) {
    __extends(TypeParameterContext, _super);
    function TypeParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    TypeParameterContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    TypeParameterContext.prototype.dtype = function () {
        return this.tryGetRuleContext(0, DtypeContext);
    };
    Object.defineProperty(TypeParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameter) {
            listener.enterTypeParameter(this);
        }
    };
    // @Override
    TypeParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameter) {
            listener.exitTypeParameter(this);
        }
    };
    // @Override
    TypeParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterContext = TypeParameterContext;
var TypeParametersContext = /** @class */ (function (_super) {
    __extends(TypeParametersContext, _super);
    function TypeParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParametersContext.prototype.typeParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    };
    Object.defineProperty(TypeParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameters) {
            listener.enterTypeParameters(this);
        }
    };
    // @Override
    TypeParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameters) {
            listener.exitTypeParameters(this);
        }
    };
    // @Override
    TypeParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParametersContext = TypeParametersContext;
var MetadataContext = /** @class */ (function (_super) {
    __extends(MetadataContext, _super);
    function MetadataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MetadataContext.prototype.qualified = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedContext);
        }
        else {
            return this.getRuleContext(i, QualifiedContext);
        }
    };
    MetadataContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    MetadataContext.prototype.arguments = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentsContext);
        }
        else {
            return this.getRuleContext(i, ArgumentsContext);
        }
    };
    Object.defineProperty(MetadataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_metadata; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MetadataContext.prototype.enterRule = function (listener) {
        if (listener.enterMetadata) {
            listener.enterMetadata(this);
        }
    };
    // @Override
    MetadataContext.prototype.exitRule = function (listener) {
        if (listener.exitMetadata) {
            listener.exitMetadata(this);
        }
    };
    // @Override
    MetadataContext.prototype.accept = function (visitor) {
        if (visitor.visitMetadata) {
            return visitor.visitMetadata(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MetadataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MetadataContext = MetadataContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.assignableExpression = function () {
        return this.tryGetRuleContext(0, AssignableExpressionContext);
    };
    ExpressionContext.prototype.assignmentOperator = function () {
        return this.tryGetRuleContext(0, AssignmentOperatorContext);
    };
    ExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ExpressionContext.prototype.conditionalExpression = function () {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    };
    ExpressionContext.prototype.cascadeSection = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CascadeSectionContext);
        }
        else {
            return this.getRuleContext(i, CascadeSectionContext);
        }
    };
    ExpressionContext.prototype.throwExpression = function () {
        return this.tryGetRuleContext(0, ThrowExpressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_expression; },
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
var ExpressionWithoutCascadeContext = /** @class */ (function (_super) {
    __extends(ExpressionWithoutCascadeContext, _super);
    function ExpressionWithoutCascadeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionWithoutCascadeContext.prototype.assignableExpression = function () {
        return this.tryGetRuleContext(0, AssignableExpressionContext);
    };
    ExpressionWithoutCascadeContext.prototype.assignmentOperator = function () {
        return this.tryGetRuleContext(0, AssignmentOperatorContext);
    };
    ExpressionWithoutCascadeContext.prototype.expressionWithoutCascade = function () {
        return this.tryGetRuleContext(0, ExpressionWithoutCascadeContext);
    };
    ExpressionWithoutCascadeContext.prototype.conditionalExpression = function () {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    };
    ExpressionWithoutCascadeContext.prototype.throwExpressionWithoutCascade = function () {
        return this.tryGetRuleContext(0, ThrowExpressionWithoutCascadeContext);
    };
    Object.defineProperty(ExpressionWithoutCascadeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_expressionWithoutCascade; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionWithoutCascadeContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionWithoutCascade) {
            listener.enterExpressionWithoutCascade(this);
        }
    };
    // @Override
    ExpressionWithoutCascadeContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionWithoutCascade) {
            listener.exitExpressionWithoutCascade(this);
        }
    };
    // @Override
    ExpressionWithoutCascadeContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionWithoutCascade) {
            return visitor.visitExpressionWithoutCascade(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionWithoutCascadeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionWithoutCascadeContext = ExpressionWithoutCascadeContext;
var ExpressionListContext = /** @class */ (function (_super) {
    __extends(ExpressionListContext, _super);
    function ExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionListContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_expressionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionListContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionListContext = ExpressionListContext;
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryContext.prototype.thisExpression = function () {
        return this.tryGetRuleContext(0, ThisExpressionContext);
    };
    PrimaryContext.prototype.unconditionalAssignableSelector = function () {
        return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
    };
    PrimaryContext.prototype.functionExpression = function () {
        return this.tryGetRuleContext(0, FunctionExpressionContext);
    };
    PrimaryContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    PrimaryContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    PrimaryContext.prototype.nayaExpression = function () {
        return this.tryGetRuleContext(0, NayaExpressionContext);
    };
    PrimaryContext.prototype.constObjectExpression = function () {
        return this.tryGetRuleContext(0, ConstObjectExpressionContext);
    };
    PrimaryContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(PrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryContext = PrimaryContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.nullLiteral = function () {
        return this.tryGetRuleContext(0, NullLiteralContext);
    };
    LiteralContext.prototype.booleanLiteral = function () {
        return this.tryGetRuleContext(0, BooleanLiteralContext);
    };
    LiteralContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    LiteralContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    LiteralContext.prototype.symbolLiteral = function () {
        return this.tryGetRuleContext(0, SymbolLiteralContext);
    };
    LiteralContext.prototype.mapLiteral = function () {
        return this.tryGetRuleContext(0, MapLiteralContext);
    };
    LiteralContext.prototype.listLiteral = function () {
        return this.tryGetRuleContext(0, ListLiteralContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_literal; },
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
var NullLiteralContext = /** @class */ (function (_super) {
    __extends(NullLiteralContext, _super);
    function NullLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(NullLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_nullLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NullLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNullLiteral) {
            listener.enterNullLiteral(this);
        }
    };
    // @Override
    NullLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNullLiteral) {
            listener.exitNullLiteral(this);
        }
    };
    // @Override
    NullLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NullLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NullLiteralContext = NullLiteralContext;
var NumericLiteralContext = /** @class */ (function (_super) {
    __extends(NumericLiteralContext, _super);
    function NumericLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralContext.prototype.NUMBER = function () { return this.tryGetToken(Dart2Parser.NUMBER, 0); };
    NumericLiteralContext.prototype.HEX_NUMBER = function () { return this.tryGetToken(Dart2Parser.HEX_NUMBER, 0); };
    Object.defineProperty(NumericLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_numericLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericLiteral) {
            listener.enterNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericLiteral) {
            listener.exitNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericLiteralContext = NumericLiteralContext;
var BooleanLiteralContext = /** @class */ (function (_super) {
    __extends(BooleanLiteralContext, _super);
    function BooleanLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BooleanLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_booleanLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanLiteralContext = BooleanLiteralContext;
var StringLiteralContext = /** @class */ (function (_super) {
    __extends(StringLiteralContext, _super);
    function StringLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringLiteralContext.prototype.MultiLineString = function (i) {
        if (i === undefined) {
            return this.getTokens(Dart2Parser.MultiLineString);
        }
        else {
            return this.getToken(Dart2Parser.MultiLineString, i);
        }
    };
    StringLiteralContext.prototype.SingleLineString = function (i) {
        if (i === undefined) {
            return this.getTokens(Dart2Parser.SingleLineString);
        }
        else {
            return this.getToken(Dart2Parser.SingleLineString, i);
        }
    };
    Object.defineProperty(StringLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_stringLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    };
    // @Override
    StringLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    };
    // @Override
    StringLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringLiteralContext = StringLiteralContext;
var StringInterpolationContext = /** @class */ (function (_super) {
    __extends(StringInterpolationContext, _super);
    function StringInterpolationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringInterpolationContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    StringInterpolationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(StringInterpolationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_stringInterpolation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringInterpolationContext.prototype.enterRule = function (listener) {
        if (listener.enterStringInterpolation) {
            listener.enterStringInterpolation(this);
        }
    };
    // @Override
    StringInterpolationContext.prototype.exitRule = function (listener) {
        if (listener.exitStringInterpolation) {
            listener.exitStringInterpolation(this);
        }
    };
    // @Override
    StringInterpolationContext.prototype.accept = function (visitor) {
        if (visitor.visitStringInterpolation) {
            return visitor.visitStringInterpolation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringInterpolationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringInterpolationContext = StringInterpolationContext;
var SymbolLiteralContext = /** @class */ (function (_super) {
    __extends(SymbolLiteralContext, _super);
    function SymbolLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolLiteralContext.prototype.operator = function () {
        return this.tryGetRuleContext(0, OperatorContext);
    };
    SymbolLiteralContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(SymbolLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_symbolLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbolLiteral) {
            listener.enterSymbolLiteral(this);
        }
    };
    // @Override
    SymbolLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbolLiteral) {
            listener.exitSymbolLiteral(this);
        }
    };
    // @Override
    SymbolLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbolLiteral) {
            return visitor.visitSymbolLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolLiteralContext = SymbolLiteralContext;
var ListLiteralContext = /** @class */ (function (_super) {
    __extends(ListLiteralContext, _super);
    function ListLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListLiteralContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    ListLiteralContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ListLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_listLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterListLiteral) {
            listener.enterListLiteral(this);
        }
    };
    // @Override
    ListLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitListLiteral) {
            listener.exitListLiteral(this);
        }
    };
    // @Override
    ListLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitListLiteral) {
            return visitor.visitListLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListLiteralContext = ListLiteralContext;
var MapLiteralContext = /** @class */ (function (_super) {
    __extends(MapLiteralContext, _super);
    function MapLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapLiteralContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    MapLiteralContext.prototype.mapLiteralEntry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MapLiteralEntryContext);
        }
        else {
            return this.getRuleContext(i, MapLiteralEntryContext);
        }
    };
    Object.defineProperty(MapLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_mapLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterMapLiteral) {
            listener.enterMapLiteral(this);
        }
    };
    // @Override
    MapLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitMapLiteral) {
            listener.exitMapLiteral(this);
        }
    };
    // @Override
    MapLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitMapLiteral) {
            return visitor.visitMapLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapLiteralContext = MapLiteralContext;
var MapLiteralEntryContext = /** @class */ (function (_super) {
    __extends(MapLiteralEntryContext, _super);
    function MapLiteralEntryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapLiteralEntryContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(MapLiteralEntryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_mapLiteralEntry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapLiteralEntryContext.prototype.enterRule = function (listener) {
        if (listener.enterMapLiteralEntry) {
            listener.enterMapLiteralEntry(this);
        }
    };
    // @Override
    MapLiteralEntryContext.prototype.exitRule = function (listener) {
        if (listener.exitMapLiteralEntry) {
            listener.exitMapLiteralEntry(this);
        }
    };
    // @Override
    MapLiteralEntryContext.prototype.accept = function (visitor) {
        if (visitor.visitMapLiteralEntry) {
            return visitor.visitMapLiteralEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapLiteralEntryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapLiteralEntryContext = MapLiteralEntryContext;
var ThrowExpressionContext = /** @class */ (function (_super) {
    __extends(ThrowExpressionContext, _super);
    function ThrowExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ThrowExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_throwExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowExpression) {
            listener.enterThrowExpression(this);
        }
    };
    // @Override
    ThrowExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowExpression) {
            listener.exitThrowExpression(this);
        }
    };
    // @Override
    ThrowExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowExpression) {
            return visitor.visitThrowExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowExpressionContext = ThrowExpressionContext;
var ThrowExpressionWithoutCascadeContext = /** @class */ (function (_super) {
    __extends(ThrowExpressionWithoutCascadeContext, _super);
    function ThrowExpressionWithoutCascadeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowExpressionWithoutCascadeContext.prototype.expressionWithoutCascade = function () {
        return this.getRuleContext(0, ExpressionWithoutCascadeContext);
    };
    Object.defineProperty(ThrowExpressionWithoutCascadeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_throwExpressionWithoutCascade; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowExpressionWithoutCascadeContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowExpressionWithoutCascade) {
            listener.enterThrowExpressionWithoutCascade(this);
        }
    };
    // @Override
    ThrowExpressionWithoutCascadeContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowExpressionWithoutCascade) {
            listener.exitThrowExpressionWithoutCascade(this);
        }
    };
    // @Override
    ThrowExpressionWithoutCascadeContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowExpressionWithoutCascade) {
            return visitor.visitThrowExpressionWithoutCascade(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowExpressionWithoutCascadeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowExpressionWithoutCascadeContext = ThrowExpressionWithoutCascadeContext;
var FunctionExpressionContext = /** @class */ (function (_super) {
    __extends(FunctionExpressionContext, _super);
    function FunctionExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionExpressionContext.prototype.formalParameterPart = function () {
        return this.getRuleContext(0, FormalParameterPartContext);
    };
    FunctionExpressionContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    Object.defineProperty(FunctionExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_functionExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionExpression) {
            listener.enterFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionExpression) {
            listener.exitFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionExpression) {
            return visitor.visitFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionExpressionContext = FunctionExpressionContext;
var ThisExpressionContext = /** @class */ (function (_super) {
    __extends(ThisExpressionContext, _super);
    function ThisExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ThisExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_thisExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThisExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterThisExpression) {
            listener.enterThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitThisExpression) {
            listener.exitThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitThisExpression) {
            return visitor.visitThisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThisExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThisExpressionContext = ThisExpressionContext;
var NayaExpressionContext = /** @class */ (function (_super) {
    __extends(NayaExpressionContext, _super);
    function NayaExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NayaExpressionContext.prototype.dtype = function () {
        return this.getRuleContext(0, DtypeContext);
    };
    NayaExpressionContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    NayaExpressionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(NayaExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_nayaExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NayaExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNayaExpression) {
            listener.enterNayaExpression(this);
        }
    };
    // @Override
    NayaExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNayaExpression) {
            listener.exitNayaExpression(this);
        }
    };
    // @Override
    NayaExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNayaExpression) {
            return visitor.visitNayaExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NayaExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NayaExpressionContext = NayaExpressionContext;
var ConstObjectExpressionContext = /** @class */ (function (_super) {
    __extends(ConstObjectExpressionContext, _super);
    function ConstObjectExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstObjectExpressionContext.prototype.dtype = function () {
        return this.getRuleContext(0, DtypeContext);
    };
    ConstObjectExpressionContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    ConstObjectExpressionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(ConstObjectExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_constObjectExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstObjectExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConstObjectExpression) {
            listener.enterConstObjectExpression(this);
        }
    };
    // @Override
    ConstObjectExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConstObjectExpression) {
            listener.exitConstObjectExpression(this);
        }
    };
    // @Override
    ConstObjectExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConstObjectExpression) {
            return visitor.visitConstObjectExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstObjectExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstObjectExpressionContext = ConstObjectExpressionContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.argumentList = function () {
        return this.tryGetRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsContext = ArgumentsContext;
var ArgumentListContext = /** @class */ (function (_super) {
    __extends(ArgumentListContext, _super);
    function ArgumentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentListContext.prototype.namedArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedArgumentContext);
        }
        else {
            return this.getRuleContext(i, NamedArgumentContext);
        }
    };
    ArgumentListContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ArgumentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_argumentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentListContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentListContext = ArgumentListContext;
var NamedArgumentContext = /** @class */ (function (_super) {
    __extends(NamedArgumentContext, _super);
    function NamedArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedArgumentContext.prototype.label = function () {
        return this.getRuleContext(0, LabelContext);
    };
    NamedArgumentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(NamedArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_namedArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedArgument) {
            listener.enterNamedArgument(this);
        }
    };
    // @Override
    NamedArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedArgument) {
            listener.exitNamedArgument(this);
        }
    };
    // @Override
    NamedArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedArgument) {
            return visitor.visitNamedArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedArgumentContext = NamedArgumentContext;
var CascadeSectionContext = /** @class */ (function (_super) {
    __extends(CascadeSectionContext, _super);
    function CascadeSectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CascadeSectionContext.prototype.cascadeSelector = function () {
        return this.tryGetRuleContext(0, CascadeSelectorContext);
    };
    CascadeSectionContext.prototype.assignableSelector = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignableSelectorContext);
        }
        else {
            return this.getRuleContext(i, AssignableSelectorContext);
        }
    };
    CascadeSectionContext.prototype.assignmentOperator = function () {
        return this.tryGetRuleContext(0, AssignmentOperatorContext);
    };
    CascadeSectionContext.prototype.expressionWithoutCascade = function () {
        return this.tryGetRuleContext(0, ExpressionWithoutCascadeContext);
    };
    CascadeSectionContext.prototype.argumentPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentPartContext);
        }
        else {
            return this.getRuleContext(i, ArgumentPartContext);
        }
    };
    Object.defineProperty(CascadeSectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_cascadeSection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CascadeSectionContext.prototype.enterRule = function (listener) {
        if (listener.enterCascadeSection) {
            listener.enterCascadeSection(this);
        }
    };
    // @Override
    CascadeSectionContext.prototype.exitRule = function (listener) {
        if (listener.exitCascadeSection) {
            listener.exitCascadeSection(this);
        }
    };
    // @Override
    CascadeSectionContext.prototype.accept = function (visitor) {
        if (visitor.visitCascadeSection) {
            return visitor.visitCascadeSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CascadeSectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CascadeSectionContext = CascadeSectionContext;
var CascadeSelectorContext = /** @class */ (function (_super) {
    __extends(CascadeSelectorContext, _super);
    function CascadeSelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CascadeSelectorContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    CascadeSelectorContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(CascadeSelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_cascadeSelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CascadeSelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterCascadeSelector) {
            listener.enterCascadeSelector(this);
        }
    };
    // @Override
    CascadeSelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitCascadeSelector) {
            listener.exitCascadeSelector(this);
        }
    };
    // @Override
    CascadeSelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitCascadeSelector) {
            return visitor.visitCascadeSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CascadeSelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CascadeSelectorContext = CascadeSelectorContext;
var ArgumentPartContext = /** @class */ (function (_super) {
    __extends(ArgumentPartContext, _super);
    function ArgumentPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentPartContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    ArgumentPartContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    Object.defineProperty(ArgumentPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_argumentPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentPartContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentPart) {
            listener.enterArgumentPart(this);
        }
    };
    // @Override
    ArgumentPartContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentPart) {
            listener.exitArgumentPart(this);
        }
    };
    // @Override
    ArgumentPartContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentPart) {
            return visitor.visitArgumentPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentPartContext = ArgumentPartContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.compoundAssignmentOperator = function () {
        return this.tryGetRuleContext(0, CompoundAssignmentOperatorContext);
    };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_assignmentOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOperatorContext = AssignmentOperatorContext;
var CompoundAssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(CompoundAssignmentOperatorContext, _super);
    function CompoundAssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CompoundAssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_compoundAssignmentOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompoundAssignmentOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterCompoundAssignmentOperator) {
            listener.enterCompoundAssignmentOperator(this);
        }
    };
    // @Override
    CompoundAssignmentOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitCompoundAssignmentOperator) {
            listener.exitCompoundAssignmentOperator(this);
        }
    };
    // @Override
    CompoundAssignmentOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitCompoundAssignmentOperator) {
            return visitor.visitCompoundAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompoundAssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompoundAssignmentOperatorContext = CompoundAssignmentOperatorContext;
var ConditionalExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalExpressionContext, _super);
    function ConditionalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalExpressionContext.prototype.ifNullExpression = function () {
        return this.getRuleContext(0, IfNullExpressionContext);
    };
    ConditionalExpressionContext.prototype.expressionWithoutCascade = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionWithoutCascadeContext);
        }
        else {
            return this.getRuleContext(i, ExpressionWithoutCascadeContext);
        }
    };
    Object.defineProperty(ConditionalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_conditionalExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalExpression) {
            return visitor.visitConditionalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalExpressionContext = ConditionalExpressionContext;
var IfNullExpressionContext = /** @class */ (function (_super) {
    __extends(IfNullExpressionContext, _super);
    function IfNullExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfNullExpressionContext.prototype.logicalOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicalOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, LogicalOrExpressionContext);
        }
    };
    Object.defineProperty(IfNullExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_ifNullExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfNullExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIfNullExpression) {
            listener.enterIfNullExpression(this);
        }
    };
    // @Override
    IfNullExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIfNullExpression) {
            listener.exitIfNullExpression(this);
        }
    };
    // @Override
    IfNullExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIfNullExpression) {
            return visitor.visitIfNullExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfNullExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfNullExpressionContext = IfNullExpressionContext;
var LogicalOrExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalOrExpressionContext, _super);
    function LogicalOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalOrExpressionContext.prototype.logicalAndExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicalAndExpressionContext);
        }
        else {
            return this.getRuleContext(i, LogicalAndExpressionContext);
        }
    };
    Object.defineProperty(LogicalOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_logicalOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalOrExpression) {
            listener.enterLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalOrExpression) {
            listener.exitLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalOrExpressionContext = LogicalOrExpressionContext;
var LogicalAndExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalAndExpressionContext, _super);
    function LogicalAndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalAndExpressionContext.prototype.equalityExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EqualityExpressionContext);
        }
        else {
            return this.getRuleContext(i, EqualityExpressionContext);
        }
    };
    Object.defineProperty(LogicalAndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_logicalAndExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalAndExpression) {
            listener.enterLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalAndExpression) {
            listener.exitLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalAndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalAndExpressionContext = LogicalAndExpressionContext;
var EqualityExpressionContext = /** @class */ (function (_super) {
    __extends(EqualityExpressionContext, _super);
    function EqualityExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualityExpressionContext.prototype.relationalExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationalExpressionContext);
        }
        else {
            return this.getRuleContext(i, RelationalExpressionContext);
        }
    };
    EqualityExpressionContext.prototype.equalityOperator = function () {
        return this.tryGetRuleContext(0, EqualityOperatorContext);
    };
    Object.defineProperty(EqualityExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_equalityExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualityExpressionContext = EqualityExpressionContext;
var EqualityOperatorContext = /** @class */ (function (_super) {
    __extends(EqualityOperatorContext, _super);
    function EqualityOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EqualityOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_equalityOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualityOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityOperator) {
            listener.enterEqualityOperator(this);
        }
    };
    // @Override
    EqualityOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityOperator) {
            listener.exitEqualityOperator(this);
        }
    };
    // @Override
    EqualityOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityOperator) {
            return visitor.visitEqualityOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualityOperatorContext = EqualityOperatorContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalExpressionContext.prototype.bitwiseOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BitwiseOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, BitwiseOrExpressionContext);
        }
    };
    RelationalExpressionContext.prototype.typeTest = function () {
        return this.tryGetRuleContext(0, TypeTestContext);
    };
    RelationalExpressionContext.prototype.typeCast = function () {
        return this.tryGetRuleContext(0, TypeCastContext);
    };
    RelationalExpressionContext.prototype.relationalOperator = function () {
        return this.tryGetRuleContext(0, RelationalOperatorContext);
    };
    Object.defineProperty(RelationalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_relationalExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var RelationalOperatorContext = /** @class */ (function (_super) {
    __extends(RelationalOperatorContext, _super);
    function RelationalOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RelationalOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_relationalOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalOperator) {
            listener.enterRelationalOperator(this);
        }
    };
    // @Override
    RelationalOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalOperator) {
            listener.exitRelationalOperator(this);
        }
    };
    // @Override
    RelationalOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalOperator) {
            return visitor.visitRelationalOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalOperatorContext = RelationalOperatorContext;
var BitwiseOrExpressionContext = /** @class */ (function (_super) {
    __extends(BitwiseOrExpressionContext, _super);
    function BitwiseOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitwiseOrExpressionContext.prototype.bitwiseXorExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BitwiseXorExpressionContext);
        }
        else {
            return this.getRuleContext(i, BitwiseXorExpressionContext);
        }
    };
    BitwiseOrExpressionContext.prototype.bitwiseOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BitwiseOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, BitwiseOrExpressionContext);
        }
    };
    Object.defineProperty(BitwiseOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_bitwiseOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitwiseOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitwiseOrExpression) {
            listener.enterBitwiseOrExpression(this);
        }
    };
    // @Override
    BitwiseOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitwiseOrExpression) {
            listener.exitBitwiseOrExpression(this);
        }
    };
    // @Override
    BitwiseOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitwiseOrExpression) {
            return visitor.visitBitwiseOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitwiseOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitwiseOrExpressionContext = BitwiseOrExpressionContext;
var BitwiseXorExpressionContext = /** @class */ (function (_super) {
    __extends(BitwiseXorExpressionContext, _super);
    function BitwiseXorExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitwiseXorExpressionContext.prototype.bitwiseAndExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BitwiseAndExpressionContext);
        }
        else {
            return this.getRuleContext(i, BitwiseAndExpressionContext);
        }
    };
    Object.defineProperty(BitwiseXorExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_bitwiseXorExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitwiseXorExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitwiseXorExpression) {
            listener.enterBitwiseXorExpression(this);
        }
    };
    // @Override
    BitwiseXorExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitwiseXorExpression) {
            listener.exitBitwiseXorExpression(this);
        }
    };
    // @Override
    BitwiseXorExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitwiseXorExpression) {
            return visitor.visitBitwiseXorExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitwiseXorExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitwiseXorExpressionContext = BitwiseXorExpressionContext;
var BitwiseAndExpressionContext = /** @class */ (function (_super) {
    __extends(BitwiseAndExpressionContext, _super);
    function BitwiseAndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitwiseAndExpressionContext.prototype.shiftExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ShiftExpressionContext);
        }
        else {
            return this.getRuleContext(i, ShiftExpressionContext);
        }
    };
    Object.defineProperty(BitwiseAndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_bitwiseAndExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitwiseAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitwiseAndExpression) {
            listener.enterBitwiseAndExpression(this);
        }
    };
    // @Override
    BitwiseAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitwiseAndExpression) {
            listener.exitBitwiseAndExpression(this);
        }
    };
    // @Override
    BitwiseAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitwiseAndExpression) {
            return visitor.visitBitwiseAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitwiseAndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitwiseAndExpressionContext = BitwiseAndExpressionContext;
var BitwiseOperatorContext = /** @class */ (function (_super) {
    __extends(BitwiseOperatorContext, _super);
    function BitwiseOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BitwiseOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_bitwiseOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitwiseOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterBitwiseOperator) {
            listener.enterBitwiseOperator(this);
        }
    };
    // @Override
    BitwiseOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitBitwiseOperator) {
            listener.exitBitwiseOperator(this);
        }
    };
    // @Override
    BitwiseOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitBitwiseOperator) {
            return visitor.visitBitwiseOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitwiseOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitwiseOperatorContext = BitwiseOperatorContext;
var ShiftExpressionContext = /** @class */ (function (_super) {
    __extends(ShiftExpressionContext, _super);
    function ShiftExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ShiftExpressionContext.prototype.additiveExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExpressionContext);
        }
        else {
            return this.getRuleContext(i, AdditiveExpressionContext);
        }
    };
    ShiftExpressionContext.prototype.shiftOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ShiftOperatorContext);
        }
        else {
            return this.getRuleContext(i, ShiftOperatorContext);
        }
    };
    Object.defineProperty(ShiftExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_shiftExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ShiftExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterShiftExpression) {
            listener.enterShiftExpression(this);
        }
    };
    // @Override
    ShiftExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitShiftExpression) {
            listener.exitShiftExpression(this);
        }
    };
    // @Override
    ShiftExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitShiftExpression) {
            return visitor.visitShiftExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ShiftExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ShiftExpressionContext = ShiftExpressionContext;
var ShiftOperatorContext = /** @class */ (function (_super) {
    __extends(ShiftOperatorContext, _super);
    function ShiftOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ShiftOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_shiftOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ShiftOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterShiftOperator) {
            listener.enterShiftOperator(this);
        }
    };
    // @Override
    ShiftOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitShiftOperator) {
            listener.exitShiftOperator(this);
        }
    };
    // @Override
    ShiftOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitShiftOperator) {
            return visitor.visitShiftOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ShiftOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ShiftOperatorContext = ShiftOperatorContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveExpressionContext.prototype.multiplicativeExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExpressionContext);
        }
    };
    AdditiveExpressionContext.prototype.additiveOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveOperatorContext);
        }
        else {
            return this.getRuleContext(i, AdditiveOperatorContext);
        }
    };
    Object.defineProperty(AdditiveExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_additiveExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var AdditiveOperatorContext = /** @class */ (function (_super) {
    __extends(AdditiveOperatorContext, _super);
    function AdditiveOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AdditiveOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_additiveOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveOperator) {
            listener.enterAdditiveOperator(this);
        }
    };
    // @Override
    AdditiveOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveOperator) {
            listener.exitAdditiveOperator(this);
        }
    };
    // @Override
    AdditiveOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveOperator) {
            return visitor.visitAdditiveOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveOperatorContext = AdditiveOperatorContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeExpressionContext.prototype.unaryExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnaryExpressionContext);
        }
        else {
            return this.getRuleContext(i, UnaryExpressionContext);
        }
    };
    MultiplicativeExpressionContext.prototype.multiplicativeOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeOperatorContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeOperatorContext);
        }
    };
    Object.defineProperty(MultiplicativeExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_multiplicativeExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var MultiplicativeOperatorContext = /** @class */ (function (_super) {
    __extends(MultiplicativeOperatorContext, _super);
    function MultiplicativeOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MultiplicativeOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_multiplicativeOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeOperator) {
            listener.enterMultiplicativeOperator(this);
        }
    };
    // @Override
    MultiplicativeOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeOperator) {
            listener.exitMultiplicativeOperator(this);
        }
    };
    // @Override
    MultiplicativeOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeOperator) {
            return visitor.visitMultiplicativeOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeOperatorContext = MultiplicativeOperatorContext;
var UnaryExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryExpressionContext, _super);
    function UnaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryExpressionContext.prototype.prefixOperator = function () {
        return this.tryGetRuleContext(0, PrefixOperatorContext);
    };
    UnaryExpressionContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    UnaryExpressionContext.prototype.awaitExpression = function () {
        return this.tryGetRuleContext(0, AwaitExpressionContext);
    };
    UnaryExpressionContext.prototype.postfixExpression = function () {
        return this.tryGetRuleContext(0, PostfixExpressionContext);
    };
    UnaryExpressionContext.prototype.minusOperator = function () {
        return this.tryGetRuleContext(0, MinusOperatorContext);
    };
    UnaryExpressionContext.prototype.tildeOperator = function () {
        return this.tryGetRuleContext(0, TildeOperatorContext);
    };
    UnaryExpressionContext.prototype.incrementOperator = function () {
        return this.tryGetRuleContext(0, IncrementOperatorContext);
    };
    UnaryExpressionContext.prototype.assignableExpression = function () {
        return this.tryGetRuleContext(0, AssignableExpressionContext);
    };
    Object.defineProperty(UnaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_unaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    };
    // @Override
    UnaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    };
    // @Override
    UnaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryExpressionContext = UnaryExpressionContext;
var PrefixOperatorContext = /** @class */ (function (_super) {
    __extends(PrefixOperatorContext, _super);
    function PrefixOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixOperatorContext.prototype.minusOperator = function () {
        return this.tryGetRuleContext(0, MinusOperatorContext);
    };
    PrefixOperatorContext.prototype.negationOperator = function () {
        return this.tryGetRuleContext(0, NegationOperatorContext);
    };
    PrefixOperatorContext.prototype.tildeOperator = function () {
        return this.tryGetRuleContext(0, TildeOperatorContext);
    };
    Object.defineProperty(PrefixOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_prefixOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixOperator) {
            listener.enterPrefixOperator(this);
        }
    };
    // @Override
    PrefixOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixOperator) {
            listener.exitPrefixOperator(this);
        }
    };
    // @Override
    PrefixOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixOperator) {
            return visitor.visitPrefixOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixOperatorContext = PrefixOperatorContext;
var MinusOperatorContext = /** @class */ (function (_super) {
    __extends(MinusOperatorContext, _super);
    function MinusOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MinusOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_minusOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MinusOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMinusOperator) {
            listener.enterMinusOperator(this);
        }
    };
    // @Override
    MinusOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMinusOperator) {
            listener.exitMinusOperator(this);
        }
    };
    // @Override
    MinusOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMinusOperator) {
            return visitor.visitMinusOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MinusOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MinusOperatorContext = MinusOperatorContext;
var NegationOperatorContext = /** @class */ (function (_super) {
    __extends(NegationOperatorContext, _super);
    function NegationOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(NegationOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_negationOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NegationOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterNegationOperator) {
            listener.enterNegationOperator(this);
        }
    };
    // @Override
    NegationOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitNegationOperator) {
            listener.exitNegationOperator(this);
        }
    };
    // @Override
    NegationOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitNegationOperator) {
            return visitor.visitNegationOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NegationOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NegationOperatorContext = NegationOperatorContext;
var TildeOperatorContext = /** @class */ (function (_super) {
    __extends(TildeOperatorContext, _super);
    function TildeOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TildeOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_tildeOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TildeOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterTildeOperator) {
            listener.enterTildeOperator(this);
        }
    };
    // @Override
    TildeOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitTildeOperator) {
            listener.exitTildeOperator(this);
        }
    };
    // @Override
    TildeOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitTildeOperator) {
            return visitor.visitTildeOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TildeOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TildeOperatorContext = TildeOperatorContext;
var AwaitExpressionContext = /** @class */ (function (_super) {
    __extends(AwaitExpressionContext, _super);
    function AwaitExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AwaitExpressionContext.prototype.unaryExpression = function () {
        return this.getRuleContext(0, UnaryExpressionContext);
    };
    Object.defineProperty(AwaitExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_awaitExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AwaitExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAwaitExpression) {
            listener.enterAwaitExpression(this);
        }
    };
    // @Override
    AwaitExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAwaitExpression) {
            listener.exitAwaitExpression(this);
        }
    };
    // @Override
    AwaitExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAwaitExpression) {
            return visitor.visitAwaitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AwaitExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AwaitExpressionContext = AwaitExpressionContext;
var PostfixExpressionContext = /** @class */ (function (_super) {
    __extends(PostfixExpressionContext, _super);
    function PostfixExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixExpressionContext.prototype.assignableExpression = function () {
        return this.tryGetRuleContext(0, AssignableExpressionContext);
    };
    PostfixExpressionContext.prototype.postfixOperator = function () {
        return this.tryGetRuleContext(0, PostfixOperatorContext);
    };
    PostfixExpressionContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
    };
    PostfixExpressionContext.prototype.selector = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectorContext);
        }
        else {
            return this.getRuleContext(i, SelectorContext);
        }
    };
    Object.defineProperty(PostfixExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_postfixExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PostfixExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfixExpression) {
            listener.enterPostfixExpression(this);
        }
    };
    // @Override
    PostfixExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfixExpression) {
            listener.exitPostfixExpression(this);
        }
    };
    // @Override
    PostfixExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfixExpression) {
            return visitor.visitPostfixExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostfixExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostfixExpressionContext = PostfixExpressionContext;
var PostfixOperatorContext = /** @class */ (function (_super) {
    __extends(PostfixOperatorContext, _super);
    function PostfixOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixOperatorContext.prototype.incrementOperator = function () {
        return this.getRuleContext(0, IncrementOperatorContext);
    };
    Object.defineProperty(PostfixOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_postfixOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PostfixOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfixOperator) {
            listener.enterPostfixOperator(this);
        }
    };
    // @Override
    PostfixOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfixOperator) {
            listener.exitPostfixOperator(this);
        }
    };
    // @Override
    PostfixOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfixOperator) {
            return visitor.visitPostfixOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostfixOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostfixOperatorContext = PostfixOperatorContext;
var SelectorContext = /** @class */ (function (_super) {
    __extends(SelectorContext, _super);
    function SelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectorContext.prototype.assignableSelector = function () {
        return this.tryGetRuleContext(0, AssignableSelectorContext);
    };
    SelectorContext.prototype.argumentPart = function () {
        return this.tryGetRuleContext(0, ArgumentPartContext);
    };
    Object.defineProperty(SelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_selector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterSelector) {
            listener.enterSelector(this);
        }
    };
    // @Override
    SelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitSelector) {
            listener.exitSelector(this);
        }
    };
    // @Override
    SelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitSelector) {
            return visitor.visitSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectorContext = SelectorContext;
var IncrementOperatorContext = /** @class */ (function (_super) {
    __extends(IncrementOperatorContext, _super);
    function IncrementOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IncrementOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_incrementOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IncrementOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterIncrementOperator) {
            listener.enterIncrementOperator(this);
        }
    };
    // @Override
    IncrementOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitIncrementOperator) {
            listener.exitIncrementOperator(this);
        }
    };
    // @Override
    IncrementOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitIncrementOperator) {
            return visitor.visitIncrementOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncrementOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IncrementOperatorContext = IncrementOperatorContext;
var AssignableExpressionContext = /** @class */ (function (_super) {
    __extends(AssignableExpressionContext, _super);
    function AssignableExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignableExpressionContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
    };
    AssignableExpressionContext.prototype.assignableSelector = function () {
        return this.tryGetRuleContext(0, AssignableSelectorContext);
    };
    AssignableExpressionContext.prototype.argumentPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentPartContext);
        }
        else {
            return this.getRuleContext(i, ArgumentPartContext);
        }
    };
    AssignableExpressionContext.prototype.unconditionalAssignableSelector = function () {
        return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
    };
    AssignableExpressionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(AssignableExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_assignableExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignableExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignableExpression) {
            listener.enterAssignableExpression(this);
        }
    };
    // @Override
    AssignableExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignableExpression) {
            listener.exitAssignableExpression(this);
        }
    };
    // @Override
    AssignableExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignableExpression) {
            return visitor.visitAssignableExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignableExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignableExpressionContext = AssignableExpressionContext;
var UnconditionalAssignableSelectorContext = /** @class */ (function (_super) {
    __extends(UnconditionalAssignableSelectorContext, _super);
    function UnconditionalAssignableSelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnconditionalAssignableSelectorContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    UnconditionalAssignableSelectorContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(UnconditionalAssignableSelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_unconditionalAssignableSelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnconditionalAssignableSelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterUnconditionalAssignableSelector) {
            listener.enterUnconditionalAssignableSelector(this);
        }
    };
    // @Override
    UnconditionalAssignableSelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitUnconditionalAssignableSelector) {
            listener.exitUnconditionalAssignableSelector(this);
        }
    };
    // @Override
    UnconditionalAssignableSelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitUnconditionalAssignableSelector) {
            return visitor.visitUnconditionalAssignableSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnconditionalAssignableSelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnconditionalAssignableSelectorContext = UnconditionalAssignableSelectorContext;
var AssignableSelectorContext = /** @class */ (function (_super) {
    __extends(AssignableSelectorContext, _super);
    function AssignableSelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignableSelectorContext.prototype.unconditionalAssignableSelector = function () {
        return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
    };
    AssignableSelectorContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(AssignableSelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_assignableSelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignableSelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignableSelector) {
            listener.enterAssignableSelector(this);
        }
    };
    // @Override
    AssignableSelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignableSelector) {
            listener.exitAssignableSelector(this);
        }
    };
    // @Override
    AssignableSelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignableSelector) {
            return visitor.visitAssignableSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignableSelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignableSelectorContext = AssignableSelectorContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.IDENTIFIER = function () { return this.getToken(Dart2Parser.IDENTIFIER, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_identifier; },
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
var QualifiedContext = /** @class */ (function (_super) {
    __extends(QualifiedContext, _super);
    function QualifiedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(QualifiedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_qualified; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedContext.prototype.enterRule = function (listener) {
        if (listener.enterQualified) {
            listener.enterQualified(this);
        }
    };
    // @Override
    QualifiedContext.prototype.exitRule = function (listener) {
        if (listener.exitQualified) {
            listener.exitQualified(this);
        }
    };
    // @Override
    QualifiedContext.prototype.accept = function (visitor) {
        if (visitor.visitQualified) {
            return visitor.visitQualified(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedContext = QualifiedContext;
var TypeTestContext = /** @class */ (function (_super) {
    __extends(TypeTestContext, _super);
    function TypeTestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeTestContext.prototype.isOperator = function () {
        return this.getRuleContext(0, IsOperatorContext);
    };
    TypeTestContext.prototype.dtype = function () {
        return this.getRuleContext(0, DtypeContext);
    };
    Object.defineProperty(TypeTestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeTest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeTestContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeTest) {
            listener.enterTypeTest(this);
        }
    };
    // @Override
    TypeTestContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeTest) {
            listener.exitTypeTest(this);
        }
    };
    // @Override
    TypeTestContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeTest) {
            return visitor.visitTypeTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeTestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeTestContext = TypeTestContext;
var IsOperatorContext = /** @class */ (function (_super) {
    __extends(IsOperatorContext, _super);
    function IsOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IsOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_isOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IsOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterIsOperator) {
            listener.enterIsOperator(this);
        }
    };
    // @Override
    IsOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitIsOperator) {
            listener.exitIsOperator(this);
        }
    };
    // @Override
    IsOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitIsOperator) {
            return visitor.visitIsOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IsOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IsOperatorContext = IsOperatorContext;
var TypeCastContext = /** @class */ (function (_super) {
    __extends(TypeCastContext, _super);
    function TypeCastContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeCastContext.prototype.asOperator = function () {
        return this.getRuleContext(0, AsOperatorContext);
    };
    TypeCastContext.prototype.dtype = function () {
        return this.getRuleContext(0, DtypeContext);
    };
    Object.defineProperty(TypeCastContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeCast; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeCastContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeCast) {
            listener.enterTypeCast(this);
        }
    };
    // @Override
    TypeCastContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeCast) {
            listener.exitTypeCast(this);
        }
    };
    // @Override
    TypeCastContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeCast) {
            return visitor.visitTypeCast(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeCastContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeCastContext = TypeCastContext;
var AsOperatorContext = /** @class */ (function (_super) {
    __extends(AsOperatorContext, _super);
    function AsOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AsOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_asOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AsOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAsOperator) {
            listener.enterAsOperator(this);
        }
    };
    // @Override
    AsOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAsOperator) {
            listener.exitAsOperator(this);
        }
    };
    // @Override
    AsOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAsOperator) {
            return visitor.visitAsOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AsOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AsOperatorContext = AsOperatorContext;
var StatementsContext = /** @class */ (function (_super) {
    __extends(StatementsContext, _super);
    function StatementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementsContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StatementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_statements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementsContext.prototype.enterRule = function (listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.exitRule = function (listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.accept = function (visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementsContext = StatementsContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.nonLabledStatment = function () {
        return this.getRuleContext(0, NonLabledStatmentContext);
    };
    StatementContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_statement; },
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
var NonLabledStatmentContext = /** @class */ (function (_super) {
    __extends(NonLabledStatmentContext, _super);
    function NonLabledStatmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NonLabledStatmentContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    NonLabledStatmentContext.prototype.localVariableDeclaration = function () {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    };
    NonLabledStatmentContext.prototype.forStatement = function () {
        return this.tryGetRuleContext(0, ForStatementContext);
    };
    NonLabledStatmentContext.prototype.whileStatement = function () {
        return this.tryGetRuleContext(0, WhileStatementContext);
    };
    NonLabledStatmentContext.prototype.doStatement = function () {
        return this.tryGetRuleContext(0, DoStatementContext);
    };
    NonLabledStatmentContext.prototype.switchStatement = function () {
        return this.tryGetRuleContext(0, SwitchStatementContext);
    };
    NonLabledStatmentContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    NonLabledStatmentContext.prototype.rethrowStatment = function () {
        return this.tryGetRuleContext(0, RethrowStatmentContext);
    };
    NonLabledStatmentContext.prototype.tryStatement = function () {
        return this.tryGetRuleContext(0, TryStatementContext);
    };
    NonLabledStatmentContext.prototype.breakStatement = function () {
        return this.tryGetRuleContext(0, BreakStatementContext);
    };
    NonLabledStatmentContext.prototype.continueStatement = function () {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    };
    NonLabledStatmentContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    NonLabledStatmentContext.prototype.yieldStatement = function () {
        return this.tryGetRuleContext(0, YieldStatementContext);
    };
    NonLabledStatmentContext.prototype.yieldEachStatement = function () {
        return this.tryGetRuleContext(0, YieldEachStatementContext);
    };
    NonLabledStatmentContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    NonLabledStatmentContext.prototype.assertStatement = function () {
        return this.tryGetRuleContext(0, AssertStatementContext);
    };
    NonLabledStatmentContext.prototype.localFunctionDeclaration = function () {
        return this.tryGetRuleContext(0, LocalFunctionDeclarationContext);
    };
    Object.defineProperty(NonLabledStatmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_nonLabledStatment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NonLabledStatmentContext.prototype.enterRule = function (listener) {
        if (listener.enterNonLabledStatment) {
            listener.enterNonLabledStatment(this);
        }
    };
    // @Override
    NonLabledStatmentContext.prototype.exitRule = function (listener) {
        if (listener.exitNonLabledStatment) {
            listener.exitNonLabledStatment(this);
        }
    };
    // @Override
    NonLabledStatmentContext.prototype.accept = function (visitor) {
        if (visitor.visitNonLabledStatment) {
            return visitor.visitNonLabledStatment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NonLabledStatmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NonLabledStatmentContext = NonLabledStatmentContext;
var ExpressionStatementContext = /** @class */ (function (_super) {
    __extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_expressionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStatementContext = ExpressionStatementContext;
var LocalVariableDeclarationContext = /** @class */ (function (_super) {
    __extends(LocalVariableDeclarationContext, _super);
    function LocalVariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalVariableDeclarationContext.prototype.initializedVariableDeclaration = function () {
        return this.getRuleContext(0, InitializedVariableDeclarationContext);
    };
    Object.defineProperty(LocalVariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_localVariableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocalVariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterLocalVariableDeclaration) {
            listener.enterLocalVariableDeclaration(this);
        }
    };
    // @Override
    LocalVariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitLocalVariableDeclaration) {
            listener.exitLocalVariableDeclaration(this);
        }
    };
    // @Override
    LocalVariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitLocalVariableDeclaration) {
            return visitor.visitLocalVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocalVariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocalVariableDeclarationContext = LocalVariableDeclarationContext;
var LocalFunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(LocalFunctionDeclarationContext, _super);
    function LocalFunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalFunctionDeclarationContext.prototype.functionSignature = function () {
        return this.getRuleContext(0, FunctionSignatureContext);
    };
    LocalFunctionDeclarationContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    Object.defineProperty(LocalFunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_localFunctionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocalFunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterLocalFunctionDeclaration) {
            listener.enterLocalFunctionDeclaration(this);
        }
    };
    // @Override
    LocalFunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitLocalFunctionDeclaration) {
            listener.exitLocalFunctionDeclaration(this);
        }
    };
    // @Override
    LocalFunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitLocalFunctionDeclaration) {
            return visitor.visitLocalFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocalFunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocalFunctionDeclarationContext = LocalFunctionDeclarationContext;
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IfStatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_ifStatement; },
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
var ForStatementContext = /** @class */ (function (_super) {
    __extends(ForStatementContext, _super);
    function ForStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStatementContext.prototype.forLoopParts = function () {
        return this.getRuleContext(0, ForLoopPartsContext);
    };
    ForStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(ForStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_forStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForStatementContext = ForStatementContext;
var ForLoopPartsContext = /** @class */ (function (_super) {
    __extends(ForLoopPartsContext, _super);
    function ForLoopPartsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForLoopPartsContext.prototype.forInitializerStatement = function () {
        return this.tryGetRuleContext(0, ForInitializerStatementContext);
    };
    ForLoopPartsContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ForLoopPartsContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    ForLoopPartsContext.prototype.declaredIdentifier = function () {
        return this.tryGetRuleContext(0, DeclaredIdentifierContext);
    };
    ForLoopPartsContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(ForLoopPartsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_forLoopParts; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForLoopPartsContext.prototype.enterRule = function (listener) {
        if (listener.enterForLoopParts) {
            listener.enterForLoopParts(this);
        }
    };
    // @Override
    ForLoopPartsContext.prototype.exitRule = function (listener) {
        if (listener.exitForLoopParts) {
            listener.exitForLoopParts(this);
        }
    };
    // @Override
    ForLoopPartsContext.prototype.accept = function (visitor) {
        if (visitor.visitForLoopParts) {
            return visitor.visitForLoopParts(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForLoopPartsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForLoopPartsContext = ForLoopPartsContext;
var ForInitializerStatementContext = /** @class */ (function (_super) {
    __extends(ForInitializerStatementContext, _super);
    function ForInitializerStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForInitializerStatementContext.prototype.localVariableDeclaration = function () {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    };
    ForInitializerStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ForInitializerStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_forInitializerStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForInitializerStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForInitializerStatement) {
            listener.enterForInitializerStatement(this);
        }
    };
    // @Override
    ForInitializerStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForInitializerStatement) {
            listener.exitForInitializerStatement(this);
        }
    };
    // @Override
    ForInitializerStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForInitializerStatement) {
            return visitor.visitForInitializerStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForInitializerStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForInitializerStatementContext = ForInitializerStatementContext;
var WhileStatementContext = /** @class */ (function (_super) {
    __extends(WhileStatementContext, _super);
    function WhileStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhileStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    WhileStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WhileStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_whileStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhileStatementContext = WhileStatementContext;
var DoStatementContext = /** @class */ (function (_super) {
    __extends(DoStatementContext, _super);
    function DoStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    DoStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DoStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_doStatement; },
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
var SwitchStatementContext = /** @class */ (function (_super) {
    __extends(SwitchStatementContext, _super);
    function SwitchStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SwitchStatementContext.prototype.switchCase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchCaseContext);
        }
        else {
            return this.getRuleContext(i, SwitchCaseContext);
        }
    };
    SwitchStatementContext.prototype.defaultCase = function () {
        return this.tryGetRuleContext(0, DefaultCaseContext);
    };
    Object.defineProperty(SwitchStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_switchStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchStatementContext = SwitchStatementContext;
var SwitchCaseContext = /** @class */ (function (_super) {
    __extends(SwitchCaseContext, _super);
    function SwitchCaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchCaseContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SwitchCaseContext.prototype.statements = function () {
        return this.getRuleContext(0, StatementsContext);
    };
    SwitchCaseContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    Object.defineProperty(SwitchCaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_switchCase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchCaseContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchCase) {
            listener.enterSwitchCase(this);
        }
    };
    // @Override
    SwitchCaseContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchCase) {
            listener.exitSwitchCase(this);
        }
    };
    // @Override
    SwitchCaseContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchCase) {
            return visitor.visitSwitchCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchCaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchCaseContext = SwitchCaseContext;
var DefaultCaseContext = /** @class */ (function (_super) {
    __extends(DefaultCaseContext, _super);
    function DefaultCaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultCaseContext.prototype.statements = function () {
        return this.getRuleContext(0, StatementsContext);
    };
    DefaultCaseContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    Object.defineProperty(DefaultCaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_defaultCase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultCaseContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultCase) {
            listener.enterDefaultCase(this);
        }
    };
    // @Override
    DefaultCaseContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultCase) {
            listener.exitDefaultCase(this);
        }
    };
    // @Override
    DefaultCaseContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultCase) {
            return visitor.visitDefaultCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultCaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultCaseContext = DefaultCaseContext;
var RethrowStatmentContext = /** @class */ (function (_super) {
    __extends(RethrowStatmentContext, _super);
    function RethrowStatmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RethrowStatmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_rethrowStatment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RethrowStatmentContext.prototype.enterRule = function (listener) {
        if (listener.enterRethrowStatment) {
            listener.enterRethrowStatment(this);
        }
    };
    // @Override
    RethrowStatmentContext.prototype.exitRule = function (listener) {
        if (listener.exitRethrowStatment) {
            listener.exitRethrowStatment(this);
        }
    };
    // @Override
    RethrowStatmentContext.prototype.accept = function (visitor) {
        if (visitor.visitRethrowStatment) {
            return visitor.visitRethrowStatment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RethrowStatmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RethrowStatmentContext = RethrowStatmentContext;
var TryStatementContext = /** @class */ (function (_super) {
    __extends(TryStatementContext, _super);
    function TryStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryStatementContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    TryStatementContext.prototype.finallyPart = function () {
        return this.tryGetRuleContext(0, FinallyPartContext);
    };
    TryStatementContext.prototype.onPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OnPartContext);
        }
        else {
            return this.getRuleContext(i, OnPartContext);
        }
    };
    Object.defineProperty(TryStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_tryStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryStatementContext = TryStatementContext;
var OnPartContext = /** @class */ (function (_super) {
    __extends(OnPartContext, _super);
    function OnPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OnPartContext.prototype.catchPart = function () {
        return this.tryGetRuleContext(0, CatchPartContext);
    };
    OnPartContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    OnPartContext.prototype.dtype = function () {
        return this.tryGetRuleContext(0, DtypeContext);
    };
    Object.defineProperty(OnPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_onPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OnPartContext.prototype.enterRule = function (listener) {
        if (listener.enterOnPart) {
            listener.enterOnPart(this);
        }
    };
    // @Override
    OnPartContext.prototype.exitRule = function (listener) {
        if (listener.exitOnPart) {
            listener.exitOnPart(this);
        }
    };
    // @Override
    OnPartContext.prototype.accept = function (visitor) {
        if (visitor.visitOnPart) {
            return visitor.visitOnPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OnPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OnPartContext = OnPartContext;
var CatchPartContext = /** @class */ (function (_super) {
    __extends(CatchPartContext, _super);
    function CatchPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchPartContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(CatchPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_catchPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchPartContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchPart) {
            listener.enterCatchPart(this);
        }
    };
    // @Override
    CatchPartContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchPart) {
            listener.exitCatchPart(this);
        }
    };
    // @Override
    CatchPartContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchPart) {
            return visitor.visitCatchPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchPartContext = CatchPartContext;
var FinallyPartContext = /** @class */ (function (_super) {
    __extends(FinallyPartContext, _super);
    function FinallyPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyPartContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(FinallyPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_finallyPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyPartContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyPart) {
            listener.enterFinallyPart(this);
        }
    };
    // @Override
    FinallyPartContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyPart) {
            listener.exitFinallyPart(this);
        }
    };
    // @Override
    FinallyPartContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyPart) {
            return visitor.visitFinallyPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyPartContext = FinallyPartContext;
var ReturnStatementContext = /** @class */ (function (_super) {
    __extends(ReturnStatementContext, _super);
    function ReturnStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ReturnStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_returnStatement; },
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
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_label; },
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
var BreakStatementContext = /** @class */ (function (_super) {
    __extends(BreakStatementContext, _super);
    function BreakStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BreakStatementContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(BreakStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_breakStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BreakStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BreakStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BreakStatementContext = BreakStatementContext;
var ContinueStatementContext = /** @class */ (function (_super) {
    __extends(ContinueStatementContext, _super);
    function ContinueStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContinueStatementContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(ContinueStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_continueStatement; },
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
var YieldStatementContext = /** @class */ (function (_super) {
    __extends(YieldStatementContext, _super);
    function YieldStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YieldStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(YieldStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_yieldStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YieldStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterYieldStatement) {
            listener.enterYieldStatement(this);
        }
    };
    // @Override
    YieldStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitYieldStatement) {
            listener.exitYieldStatement(this);
        }
    };
    // @Override
    YieldStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitYieldStatement) {
            return visitor.visitYieldStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YieldStatementContext = YieldStatementContext;
var YieldEachStatementContext = /** @class */ (function (_super) {
    __extends(YieldEachStatementContext, _super);
    function YieldEachStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YieldEachStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(YieldEachStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_yieldEachStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YieldEachStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterYieldEachStatement) {
            listener.enterYieldEachStatement(this);
        }
    };
    // @Override
    YieldEachStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitYieldEachStatement) {
            listener.exitYieldEachStatement(this);
        }
    };
    // @Override
    YieldEachStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitYieldEachStatement) {
            return visitor.visitYieldEachStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldEachStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YieldEachStatementContext = YieldEachStatementContext;
var AssertStatementContext = /** @class */ (function (_super) {
    __extends(AssertStatementContext, _super);
    function AssertStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssertStatementContext.prototype.assertion = function () {
        return this.getRuleContext(0, AssertionContext);
    };
    Object.defineProperty(AssertStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_assertStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssertStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssertStatement) {
            listener.enterAssertStatement(this);
        }
    };
    // @Override
    AssertStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssertStatement) {
            listener.exitAssertStatement(this);
        }
    };
    // @Override
    AssertStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssertStatement) {
            return visitor.visitAssertStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssertStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssertStatementContext = AssertStatementContext;
var AssertionContext = /** @class */ (function (_super) {
    __extends(AssertionContext, _super);
    function AssertionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssertionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(AssertionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_assertion; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssertionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssertion) {
            listener.enterAssertion(this);
        }
    };
    // @Override
    AssertionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssertion) {
            listener.exitAssertion(this);
        }
    };
    // @Override
    AssertionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssertion) {
            return visitor.visitAssertion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssertionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssertionContext = AssertionContext;
var TopLevelDefinitionContext = /** @class */ (function (_super) {
    __extends(TopLevelDefinitionContext, _super);
    function TopLevelDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopLevelDefinitionContext.prototype.classDefinition = function () {
        return this.tryGetRuleContext(0, ClassDefinitionContext);
    };
    TopLevelDefinitionContext.prototype.enumType = function () {
        return this.tryGetRuleContext(0, EnumTypeContext);
    };
    TopLevelDefinitionContext.prototype.typeAlias = function () {
        return this.tryGetRuleContext(0, TypeAliasContext);
    };
    TopLevelDefinitionContext.prototype.functionSignature = function () {
        return this.tryGetRuleContext(0, FunctionSignatureContext);
    };
    TopLevelDefinitionContext.prototype.getterSignature = function () {
        return this.tryGetRuleContext(0, GetterSignatureContext);
    };
    TopLevelDefinitionContext.prototype.setterSignature = function () {
        return this.tryGetRuleContext(0, SetterSignatureContext);
    };
    TopLevelDefinitionContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    TopLevelDefinitionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    TopLevelDefinitionContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    TopLevelDefinitionContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    TopLevelDefinitionContext.prototype.staticFinalDeclarationList = function () {
        return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
    };
    TopLevelDefinitionContext.prototype.dtype = function () {
        return this.tryGetRuleContext(0, DtypeContext);
    };
    TopLevelDefinitionContext.prototype.variableDeclaration = function () {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    };
    Object.defineProperty(TopLevelDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_topLevelDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopLevelDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterTopLevelDefinition) {
            listener.enterTopLevelDefinition(this);
        }
    };
    // @Override
    TopLevelDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitTopLevelDefinition) {
            listener.exitTopLevelDefinition(this);
        }
    };
    // @Override
    TopLevelDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitTopLevelDefinition) {
            return visitor.visitTopLevelDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopLevelDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopLevelDefinitionContext = TopLevelDefinitionContext;
var GetOrSetContext = /** @class */ (function (_super) {
    __extends(GetOrSetContext, _super);
    function GetOrSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(GetOrSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_getOrSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetOrSetContext.prototype.enterRule = function (listener) {
        if (listener.enterGetOrSet) {
            listener.enterGetOrSet(this);
        }
    };
    // @Override
    GetOrSetContext.prototype.exitRule = function (listener) {
        if (listener.exitGetOrSet) {
            listener.exitGetOrSet(this);
        }
    };
    // @Override
    GetOrSetContext.prototype.accept = function (visitor) {
        if (visitor.visitGetOrSet) {
            return visitor.visitGetOrSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetOrSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetOrSetContext = GetOrSetContext;
var LibraryDefinitionContext = /** @class */ (function (_super) {
    __extends(LibraryDefinitionContext, _super);
    function LibraryDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LibraryDefinitionContext.prototype.scriptTag = function () {
        return this.tryGetRuleContext(0, ScriptTagContext);
    };
    LibraryDefinitionContext.prototype.libraryName = function () {
        return this.tryGetRuleContext(0, LibraryNameContext);
    };
    LibraryDefinitionContext.prototype.importOrExport = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportOrExportContext);
        }
        else {
            return this.getRuleContext(i, ImportOrExportContext);
        }
    };
    LibraryDefinitionContext.prototype.partDirective = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PartDirectiveContext);
        }
        else {
            return this.getRuleContext(i, PartDirectiveContext);
        }
    };
    LibraryDefinitionContext.prototype.topLevelDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelDefinitionContext);
        }
        else {
            return this.getRuleContext(i, TopLevelDefinitionContext);
        }
    };
    Object.defineProperty(LibraryDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_libraryDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LibraryDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterLibraryDefinition) {
            listener.enterLibraryDefinition(this);
        }
    };
    // @Override
    LibraryDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitLibraryDefinition) {
            listener.exitLibraryDefinition(this);
        }
    };
    // @Override
    LibraryDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitLibraryDefinition) {
            return visitor.visitLibraryDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LibraryDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LibraryDefinitionContext = LibraryDefinitionContext;
var ScriptTagContext = /** @class */ (function (_super) {
    __extends(ScriptTagContext, _super);
    function ScriptTagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptTagContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Dart2Parser.NEWLINE);
        }
        else {
            return this.getToken(Dart2Parser.NEWLINE, i);
        }
    };
    Object.defineProperty(ScriptTagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_scriptTag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptTagContext.prototype.enterRule = function (listener) {
        if (listener.enterScriptTag) {
            listener.enterScriptTag(this);
        }
    };
    // @Override
    ScriptTagContext.prototype.exitRule = function (listener) {
        if (listener.exitScriptTag) {
            listener.exitScriptTag(this);
        }
    };
    // @Override
    ScriptTagContext.prototype.accept = function (visitor) {
        if (visitor.visitScriptTag) {
            return visitor.visitScriptTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptTagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptTagContext = ScriptTagContext;
var LibraryNameContext = /** @class */ (function (_super) {
    __extends(LibraryNameContext, _super);
    function LibraryNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LibraryNameContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    LibraryNameContext.prototype.dottedIdentifierList = function () {
        return this.getRuleContext(0, DottedIdentifierListContext);
    };
    Object.defineProperty(LibraryNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_libraryName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LibraryNameContext.prototype.enterRule = function (listener) {
        if (listener.enterLibraryName) {
            listener.enterLibraryName(this);
        }
    };
    // @Override
    LibraryNameContext.prototype.exitRule = function (listener) {
        if (listener.exitLibraryName) {
            listener.exitLibraryName(this);
        }
    };
    // @Override
    LibraryNameContext.prototype.accept = function (visitor) {
        if (visitor.visitLibraryName) {
            return visitor.visitLibraryName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LibraryNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LibraryNameContext = LibraryNameContext;
var ImportOrExportContext = /** @class */ (function (_super) {
    __extends(ImportOrExportContext, _super);
    function ImportOrExportContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportOrExportContext.prototype.libraryimport = function () {
        return this.tryGetRuleContext(0, LibraryimportContext);
    };
    ImportOrExportContext.prototype.libraryExport = function () {
        return this.tryGetRuleContext(0, LibraryExportContext);
    };
    Object.defineProperty(ImportOrExportContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_importOrExport; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportOrExportContext.prototype.enterRule = function (listener) {
        if (listener.enterImportOrExport) {
            listener.enterImportOrExport(this);
        }
    };
    // @Override
    ImportOrExportContext.prototype.exitRule = function (listener) {
        if (listener.exitImportOrExport) {
            listener.exitImportOrExport(this);
        }
    };
    // @Override
    ImportOrExportContext.prototype.accept = function (visitor) {
        if (visitor.visitImportOrExport) {
            return visitor.visitImportOrExport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportOrExportContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportOrExportContext = ImportOrExportContext;
var DottedIdentifierListContext = /** @class */ (function (_super) {
    __extends(DottedIdentifierListContext, _super);
    function DottedIdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DottedIdentifierListContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(DottedIdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_dottedIdentifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DottedIdentifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterDottedIdentifierList) {
            listener.enterDottedIdentifierList(this);
        }
    };
    // @Override
    DottedIdentifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitDottedIdentifierList) {
            listener.exitDottedIdentifierList(this);
        }
    };
    // @Override
    DottedIdentifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitDottedIdentifierList) {
            return visitor.visitDottedIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DottedIdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DottedIdentifierListContext = DottedIdentifierListContext;
var LibraryimportContext = /** @class */ (function (_super) {
    __extends(LibraryimportContext, _super);
    function LibraryimportContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LibraryimportContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    LibraryimportContext.prototype.importSpecification = function () {
        return this.getRuleContext(0, ImportSpecificationContext);
    };
    Object.defineProperty(LibraryimportContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_libraryimport; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LibraryimportContext.prototype.enterRule = function (listener) {
        if (listener.enterLibraryimport) {
            listener.enterLibraryimport(this);
        }
    };
    // @Override
    LibraryimportContext.prototype.exitRule = function (listener) {
        if (listener.exitLibraryimport) {
            listener.exitLibraryimport(this);
        }
    };
    // @Override
    LibraryimportContext.prototype.accept = function (visitor) {
        if (visitor.visitLibraryimport) {
            return visitor.visitLibraryimport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LibraryimportContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LibraryimportContext = LibraryimportContext;
var ImportSpecificationContext = /** @class */ (function (_super) {
    __extends(ImportSpecificationContext, _super);
    function ImportSpecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportSpecificationContext.prototype.configurableUri = function () {
        return this.getRuleContext(0, ConfigurableUriContext);
    };
    ImportSpecificationContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ImportSpecificationContext.prototype.combinator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CombinatorContext);
        }
        else {
            return this.getRuleContext(i, CombinatorContext);
        }
    };
    Object.defineProperty(ImportSpecificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_importSpecification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportSpecificationContext.prototype.enterRule = function (listener) {
        if (listener.enterImportSpecification) {
            listener.enterImportSpecification(this);
        }
    };
    // @Override
    ImportSpecificationContext.prototype.exitRule = function (listener) {
        if (listener.exitImportSpecification) {
            listener.exitImportSpecification(this);
        }
    };
    // @Override
    ImportSpecificationContext.prototype.accept = function (visitor) {
        if (visitor.visitImportSpecification) {
            return visitor.visitImportSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportSpecificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportSpecificationContext = ImportSpecificationContext;
var CombinatorContext = /** @class */ (function (_super) {
    __extends(CombinatorContext, _super);
    function CombinatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CombinatorContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    Object.defineProperty(CombinatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_combinator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CombinatorContext.prototype.enterRule = function (listener) {
        if (listener.enterCombinator) {
            listener.enterCombinator(this);
        }
    };
    // @Override
    CombinatorContext.prototype.exitRule = function (listener) {
        if (listener.exitCombinator) {
            listener.exitCombinator(this);
        }
    };
    // @Override
    CombinatorContext.prototype.accept = function (visitor) {
        if (visitor.visitCombinator) {
            return visitor.visitCombinator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CombinatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CombinatorContext = CombinatorContext;
var IdentifierListContext = /** @class */ (function (_super) {
    __extends(IdentifierListContext, _super);
    function IdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierListContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(IdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_identifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierList) {
            listener.enterIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierList) {
            listener.exitIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierListContext = IdentifierListContext;
var LibraryExportContext = /** @class */ (function (_super) {
    __extends(LibraryExportContext, _super);
    function LibraryExportContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LibraryExportContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    LibraryExportContext.prototype.configurableUri = function () {
        return this.getRuleContext(0, ConfigurableUriContext);
    };
    LibraryExportContext.prototype.combinator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CombinatorContext);
        }
        else {
            return this.getRuleContext(i, CombinatorContext);
        }
    };
    Object.defineProperty(LibraryExportContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_libraryExport; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LibraryExportContext.prototype.enterRule = function (listener) {
        if (listener.enterLibraryExport) {
            listener.enterLibraryExport(this);
        }
    };
    // @Override
    LibraryExportContext.prototype.exitRule = function (listener) {
        if (listener.exitLibraryExport) {
            listener.exitLibraryExport(this);
        }
    };
    // @Override
    LibraryExportContext.prototype.accept = function (visitor) {
        if (visitor.visitLibraryExport) {
            return visitor.visitLibraryExport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LibraryExportContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LibraryExportContext = LibraryExportContext;
var PartDirectiveContext = /** @class */ (function (_super) {
    __extends(PartDirectiveContext, _super);
    function PartDirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartDirectiveContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    PartDirectiveContext.prototype.uri = function () {
        return this.getRuleContext(0, UriContext);
    };
    Object.defineProperty(PartDirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_partDirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartDirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterPartDirective) {
            listener.enterPartDirective(this);
        }
    };
    // @Override
    PartDirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitPartDirective) {
            listener.exitPartDirective(this);
        }
    };
    // @Override
    PartDirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitPartDirective) {
            return visitor.visitPartDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartDirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartDirectiveContext = PartDirectiveContext;
var PartHeaderContext = /** @class */ (function (_super) {
    __extends(PartHeaderContext, _super);
    function PartHeaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartHeaderContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    PartHeaderContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(PartHeaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_partHeader; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartHeaderContext.prototype.enterRule = function (listener) {
        if (listener.enterPartHeader) {
            listener.enterPartHeader(this);
        }
    };
    // @Override
    PartHeaderContext.prototype.exitRule = function (listener) {
        if (listener.exitPartHeader) {
            listener.exitPartHeader(this);
        }
    };
    // @Override
    PartHeaderContext.prototype.accept = function (visitor) {
        if (visitor.visitPartHeader) {
            return visitor.visitPartHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartHeaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartHeaderContext = PartHeaderContext;
var PartDeclarationContext = /** @class */ (function (_super) {
    __extends(PartDeclarationContext, _super);
    function PartDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartDeclarationContext.prototype.partHeader = function () {
        return this.getRuleContext(0, PartHeaderContext);
    };
    PartDeclarationContext.prototype.EOF = function () { return this.getToken(Dart2Parser.EOF, 0); };
    PartDeclarationContext.prototype.topLevelDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelDefinitionContext);
        }
        else {
            return this.getRuleContext(i, TopLevelDefinitionContext);
        }
    };
    Object.defineProperty(PartDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_partDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPartDeclaration) {
            listener.enterPartDeclaration(this);
        }
    };
    // @Override
    PartDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPartDeclaration) {
            listener.exitPartDeclaration(this);
        }
    };
    // @Override
    PartDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPartDeclaration) {
            return visitor.visitPartDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartDeclarationContext = PartDeclarationContext;
var UriContext = /** @class */ (function (_super) {
    __extends(UriContext, _super);
    function UriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UriContext.prototype.stringLiteral = function () {
        return this.getRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(UriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_uri; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UriContext.prototype.enterRule = function (listener) {
        if (listener.enterUri) {
            listener.enterUri(this);
        }
    };
    // @Override
    UriContext.prototype.exitRule = function (listener) {
        if (listener.exitUri) {
            listener.exitUri(this);
        }
    };
    // @Override
    UriContext.prototype.accept = function (visitor) {
        if (visitor.visitUri) {
            return visitor.visitUri(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UriContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UriContext = UriContext;
var ConfigurableUriContext = /** @class */ (function (_super) {
    __extends(ConfigurableUriContext, _super);
    function ConfigurableUriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConfigurableUriContext.prototype.uri = function () {
        return this.getRuleContext(0, UriContext);
    };
    ConfigurableUriContext.prototype.configurationUri = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConfigurationUriContext);
        }
        else {
            return this.getRuleContext(i, ConfigurationUriContext);
        }
    };
    Object.defineProperty(ConfigurableUriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_configurableUri; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConfigurableUriContext.prototype.enterRule = function (listener) {
        if (listener.enterConfigurableUri) {
            listener.enterConfigurableUri(this);
        }
    };
    // @Override
    ConfigurableUriContext.prototype.exitRule = function (listener) {
        if (listener.exitConfigurableUri) {
            listener.exitConfigurableUri(this);
        }
    };
    // @Override
    ConfigurableUriContext.prototype.accept = function (visitor) {
        if (visitor.visitConfigurableUri) {
            return visitor.visitConfigurableUri(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConfigurableUriContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConfigurableUriContext = ConfigurableUriContext;
var ConfigurationUriContext = /** @class */ (function (_super) {
    __extends(ConfigurationUriContext, _super);
    function ConfigurationUriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConfigurationUriContext.prototype.uriTest = function () {
        return this.getRuleContext(0, UriTestContext);
    };
    ConfigurationUriContext.prototype.uri = function () {
        return this.getRuleContext(0, UriContext);
    };
    Object.defineProperty(ConfigurationUriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_configurationUri; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConfigurationUriContext.prototype.enterRule = function (listener) {
        if (listener.enterConfigurationUri) {
            listener.enterConfigurationUri(this);
        }
    };
    // @Override
    ConfigurationUriContext.prototype.exitRule = function (listener) {
        if (listener.exitConfigurationUri) {
            listener.exitConfigurationUri(this);
        }
    };
    // @Override
    ConfigurationUriContext.prototype.accept = function (visitor) {
        if (visitor.visitConfigurationUri) {
            return visitor.visitConfigurationUri(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConfigurationUriContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConfigurationUriContext = ConfigurationUriContext;
var UriTestContext = /** @class */ (function (_super) {
    __extends(UriTestContext, _super);
    function UriTestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UriTestContext.prototype.dottedIdentifierList = function () {
        return this.getRuleContext(0, DottedIdentifierListContext);
    };
    UriTestContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(UriTestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_uriTest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UriTestContext.prototype.enterRule = function (listener) {
        if (listener.enterUriTest) {
            listener.enterUriTest(this);
        }
    };
    // @Override
    UriTestContext.prototype.exitRule = function (listener) {
        if (listener.exitUriTest) {
            listener.exitUriTest(this);
        }
    };
    // @Override
    UriTestContext.prototype.accept = function (visitor) {
        if (visitor.visitUriTest) {
            return visitor.visitUriTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UriTestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UriTestContext = UriTestContext;
var DtypeContext = /** @class */ (function (_super) {
    __extends(DtypeContext, _super);
    function DtypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DtypeContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    DtypeContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    Object.defineProperty(DtypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_dtype; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DtypeContext.prototype.enterRule = function (listener) {
        if (listener.enterDtype) {
            listener.enterDtype(this);
        }
    };
    // @Override
    DtypeContext.prototype.exitRule = function (listener) {
        if (listener.exitDtype) {
            listener.exitDtype(this);
        }
    };
    // @Override
    DtypeContext.prototype.accept = function (visitor) {
        if (visitor.visitDtype) {
            return visitor.visitDtype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DtypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DtypeContext = DtypeContext;
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.qualified = function () {
        return this.tryGetRuleContext(0, QualifiedContext);
    };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeNameContext = TypeNameContext;
var TypeArgumentsContext = /** @class */ (function (_super) {
    __extends(TypeArgumentsContext, _super);
    function TypeArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentsContext.prototype.typeList = function () {
        return this.getRuleContext(0, TypeListContext);
    };
    Object.defineProperty(TypeArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeArguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArguments) {
            listener.enterTypeArguments(this);
        }
    };
    // @Override
    TypeArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArguments) {
            listener.exitTypeArguments(this);
        }
    };
    // @Override
    TypeArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgumentsContext = TypeArgumentsContext;
var TypeListContext = /** @class */ (function (_super) {
    __extends(TypeListContext, _super);
    function TypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeListContext.prototype.dtype = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DtypeContext);
        }
        else {
            return this.getRuleContext(i, DtypeContext);
        }
    };
    Object.defineProperty(TypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeList) {
            listener.enterTypeList(this);
        }
    };
    // @Override
    TypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeList) {
            listener.exitTypeList(this);
        }
    };
    // @Override
    TypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeList) {
            return visitor.visitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeListContext = TypeListContext;
var TypeAliasContext = /** @class */ (function (_super) {
    __extends(TypeAliasContext, _super);
    function TypeAliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeAliasContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    TypeAliasContext.prototype.typeAliasBody = function () {
        return this.getRuleContext(0, TypeAliasBodyContext);
    };
    Object.defineProperty(TypeAliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeAlias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeAliasContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeAlias) {
            listener.enterTypeAlias(this);
        }
    };
    // @Override
    TypeAliasContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeAlias) {
            listener.exitTypeAlias(this);
        }
    };
    // @Override
    TypeAliasContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeAlias) {
            return visitor.visitTypeAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeAliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeAliasContext = TypeAliasContext;
var TypeAliasBodyContext = /** @class */ (function (_super) {
    __extends(TypeAliasBodyContext, _super);
    function TypeAliasBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeAliasBodyContext.prototype.functionTypeAlias = function () {
        return this.getRuleContext(0, FunctionTypeAliasContext);
    };
    Object.defineProperty(TypeAliasBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_typeAliasBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeAliasBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeAliasBody) {
            listener.enterTypeAliasBody(this);
        }
    };
    // @Override
    TypeAliasBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeAliasBody) {
            listener.exitTypeAliasBody(this);
        }
    };
    // @Override
    TypeAliasBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeAliasBody) {
            return visitor.visitTypeAliasBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeAliasBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeAliasBodyContext = TypeAliasBodyContext;
var FunctionTypeAliasContext = /** @class */ (function (_super) {
    __extends(FunctionTypeAliasContext, _super);
    function FunctionTypeAliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeAliasContext.prototype.functionPrefix = function () {
        return this.getRuleContext(0, FunctionPrefixContext);
    };
    FunctionTypeAliasContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    FunctionTypeAliasContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(FunctionTypeAliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_functionTypeAlias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeAliasContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionTypeAlias) {
            listener.enterFunctionTypeAlias(this);
        }
    };
    // @Override
    FunctionTypeAliasContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionTypeAlias) {
            listener.exitFunctionTypeAlias(this);
        }
    };
    // @Override
    FunctionTypeAliasContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionTypeAlias) {
            return visitor.visitFunctionTypeAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeAliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeAliasContext = FunctionTypeAliasContext;
var FunctionPrefixContext = /** @class */ (function (_super) {
    __extends(FunctionPrefixContext, _super);
    function FunctionPrefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionPrefixContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionPrefixContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(FunctionPrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Dart2Parser.RULE_functionPrefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionPrefixContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionPrefix) {
            listener.enterFunctionPrefix(this);
        }
    };
    // @Override
    FunctionPrefixContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionPrefix) {
            listener.exitFunctionPrefix(this);
        }
    };
    // @Override
    FunctionPrefixContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionPrefix) {
            return visitor.visitFunctionPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionPrefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionPrefixContext = FunctionPrefixContext;
