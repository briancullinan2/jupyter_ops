"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/apex/apex.g4 by ANTLR 4.7.3-SNAPSHOT
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
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var apexParser = /** @class */ (function (_super) {
    __extends(apexParser, _super);
    function apexParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(apexParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(apexParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return apexParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apexParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "apex.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apexParser.prototype, "ruleNames", {
        // @Override
        get: function () { return apexParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(apexParser.prototype, "serializedATN", {
        // @Override
        get: function () { return apexParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    apexParser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, apexParser.RULE_compilationUnit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 216;
                            this.packageDeclaration();
                        }
                        break;
                }
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.IMPORT) {
                    {
                        {
                            this.state = 219;
                            this.importDeclaration();
                        }
                    }
                    this.state = 224;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.INTERFACE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.SEMI || _la === apexParser.AT) {
                    {
                        {
                            this.state = 225;
                            this.typeDeclaration();
                        }
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 231;
                this.match(apexParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.packageDeclaration = function () {
        var _localctx = new PackageDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, apexParser.RULE_packageDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.AT) {
                    {
                        {
                            this.state = 233;
                            this.annotation();
                        }
                    }
                    this.state = 238;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 239;
                this.match(apexParser.PACKAGE);
                this.state = 240;
                this.qualifiedName();
                this.state = 241;
                this.match(apexParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.importDeclaration = function () {
        var _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, apexParser.RULE_importDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                this.match(apexParser.IMPORT);
                this.state = 245;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.STATIC) {
                    {
                        this.state = 244;
                        this.match(apexParser.STATIC);
                    }
                }
                this.state = 247;
                this.qualifiedName();
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.DOT) {
                    {
                        this.state = 248;
                        this.match(apexParser.DOT);
                        this.state = 249;
                        this.match(apexParser.MUL);
                    }
                }
                this.state = 252;
                this.match(apexParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.typeDeclaration = function () {
        var _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, apexParser.RULE_typeDeclaration);
        var _la;
        try {
            var _alt = void 0;
            this.state = 283;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 257;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
                            {
                                {
                                    this.state = 254;
                                    this.classOrInterfaceModifier();
                                }
                            }
                            this.state = 259;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 260;
                        this.classDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 264;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
                            {
                                {
                                    this.state = 261;
                                    this.classOrInterfaceModifier();
                                }
                            }
                            this.state = 266;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 267;
                        this.enumDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 271;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
                            {
                                {
                                    this.state = 268;
                                    this.classOrInterfaceModifier();
                                }
                            }
                            this.state = 273;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 274;
                        this.interfaceDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 278;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 275;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 280;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                        }
                        this.state = 281;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 282;
                        this.match(apexParser.SEMI);
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
    apexParser.prototype.modifier = function () {
        var _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, apexParser.RULE_modifier);
        var _la;
        try {
            this.state = 287;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.OVERRIDE:
                case apexParser.VIRTUAL:
                case apexParser.ABSTRACT:
                case apexParser.FINAL:
                case apexParser.PRIVATE:
                case apexParser.PROTECTED:
                case apexParser.PUBLIC:
                case apexParser.STATIC:
                case apexParser.GLOBAL:
                case apexParser.WEBSERVICE:
                case apexParser.APEX_WITH_SHARING:
                case apexParser.APEX_WITHOUT_SHARING:
                case apexParser.TESTMETHOD:
                case apexParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 285;
                        this.classOrInterfaceModifier();
                    }
                    break;
                case apexParser.NATIVE:
                case apexParser.SYNCHRONIZED:
                case apexParser.TRANSIENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 286;
                        _la = this._input.LA(1);
                        if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (apexParser.NATIVE - 31)) | (1 << (apexParser.SYNCHRONIZED - 31)) | (1 << (apexParser.TRANSIENT - 31)))) !== 0))) {
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
    apexParser.prototype.classOrInterfaceModifier = function () {
        var _localctx = new ClassOrInterfaceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, apexParser.RULE_classOrInterfaceModifier);
        var _la;
        try {
            this.state = 291;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 289;
                        this.annotation();
                    }
                    break;
                case apexParser.OVERRIDE:
                case apexParser.VIRTUAL:
                case apexParser.ABSTRACT:
                case apexParser.FINAL:
                case apexParser.PRIVATE:
                case apexParser.PROTECTED:
                case apexParser.PUBLIC:
                case apexParser.STATIC:
                case apexParser.GLOBAL:
                case apexParser.WEBSERVICE:
                case apexParser.APEX_WITH_SHARING:
                case apexParser.APEX_WITHOUT_SHARING:
                case apexParser.TESTMETHOD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 290;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0))) {
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
    apexParser.prototype.variableModifier = function () {
        var _localctx = new VariableModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, apexParser.RULE_variableModifier);
        try {
            this.state = 295;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.FINAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 293;
                        this.match(apexParser.FINAL);
                    }
                    break;
                case apexParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 294;
                        this.annotation();
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
    apexParser.prototype.classDeclaration = function () {
        var _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, apexParser.RULE_classDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this.match(apexParser.CLASS);
                this.state = 298;
                this.match(apexParser.Identifier);
                this.state = 300;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.LT) {
                    {
                        this.state = 299;
                        this.typeParameters();
                    }
                }
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.EXTENDS) {
                    {
                        this.state = 302;
                        this.match(apexParser.EXTENDS);
                        this.state = 303;
                        this.type();
                    }
                }
                this.state = 308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.IMPLEMENTS) {
                    {
                        this.state = 306;
                        this.match(apexParser.IMPLEMENTS);
                        this.state = 307;
                        this.typeList();
                    }
                }
                this.state = 310;
                this.classBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.typeParameters = function () {
        var _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, apexParser.RULE_typeParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.match(apexParser.LT);
                this.state = 313;
                this.typeParameter();
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 314;
                            this.match(apexParser.COMMA);
                            this.state = 315;
                            this.typeParameter();
                        }
                    }
                    this.state = 320;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 321;
                this.match(apexParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.typeParameter = function () {
        var _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, apexParser.RULE_typeParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.match(apexParser.Identifier);
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.EXTENDS) {
                    {
                        this.state = 324;
                        this.match(apexParser.EXTENDS);
                        this.state = 325;
                        this.typeBound();
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
    apexParser.prototype.typeBound = function () {
        var _localctx = new TypeBoundContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, apexParser.RULE_typeBound);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                this.type();
                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.BITAND) {
                    {
                        {
                            this.state = 329;
                            this.match(apexParser.BITAND);
                            this.state = 330;
                            this.type();
                        }
                    }
                    this.state = 335;
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
    apexParser.prototype.enumDeclaration = function () {
        var _localctx = new EnumDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, apexParser.RULE_enumDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.match(apexParser.ENUM);
                this.state = 337;
                this.match(apexParser.Identifier);
                this.state = 340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.IMPLEMENTS) {
                    {
                        this.state = 338;
                        this.match(apexParser.IMPLEMENTS);
                        this.state = 339;
                        this.typeList();
                    }
                }
                this.state = 342;
                this.match(apexParser.LBRACE);
                this.state = 344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        this.state = 343;
                        this.enumConstants();
                    }
                }
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.COMMA) {
                    {
                        this.state = 346;
                        this.match(apexParser.COMMA);
                    }
                }
                this.state = 350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.SEMI) {
                    {
                        this.state = 349;
                        this.enumBodyDeclarations();
                    }
                }
                this.state = 352;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.enumConstants = function () {
        var _localctx = new EnumConstantsContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, apexParser.RULE_enumConstants);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                this.enumConstant();
                this.state = 359;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 355;
                                this.match(apexParser.COMMA);
                                this.state = 356;
                                this.enumConstant();
                            }
                        }
                    }
                    this.state = 361;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.enumConstant = function () {
        var _localctx = new EnumConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, apexParser.RULE_enumConstant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.AT) {
                    {
                        {
                            this.state = 362;
                            this.annotation();
                        }
                    }
                    this.state = 367;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 368;
                this.match(apexParser.Identifier);
                this.state = 370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.LPAREN) {
                    {
                        this.state = 369;
                        this.arguments();
                    }
                }
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.LBRACE) {
                    {
                        this.state = 372;
                        this.classBody();
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
    apexParser.prototype.enumBodyDeclarations = function () {
        var _localctx = new EnumBodyDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, apexParser.RULE_enumBodyDeclarations);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 375;
                this.match(apexParser.SEMI);
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.VOID - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (apexParser.LBRACE - 70)) | (1 << (apexParser.SEMI - 70)) | (1 << (apexParser.LT - 70)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        {
                            this.state = 376;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 381;
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
    apexParser.prototype.interfaceDeclaration = function () {
        var _localctx = new InterfaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, apexParser.RULE_interfaceDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
                this.match(apexParser.INTERFACE);
                this.state = 383;
                this.match(apexParser.Identifier);
                this.state = 385;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.LT) {
                    {
                        this.state = 384;
                        this.typeParameters();
                    }
                }
                this.state = 389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.EXTENDS) {
                    {
                        this.state = 387;
                        this.match(apexParser.EXTENDS);
                        this.state = 388;
                        this.typeList();
                    }
                }
                this.state = 391;
                this.interfaceBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.typeList = function () {
        var _localctx = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, apexParser.RULE_typeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 393;
                this.type();
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 394;
                            this.match(apexParser.COMMA);
                            this.state = 395;
                            this.type();
                        }
                    }
                    this.state = 400;
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
    apexParser.prototype.classBody = function () {
        var _localctx = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, apexParser.RULE_classBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 401;
                this.match(apexParser.LBRACE);
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.VOID - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (apexParser.LBRACE - 70)) | (1 << (apexParser.SEMI - 70)) | (1 << (apexParser.LT - 70)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        {
                            this.state = 402;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 407;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 408;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.interfaceBody = function () {
        var _localctx = new InterfaceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, apexParser.RULE_interfaceBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.match(apexParser.LBRACE);
                this.state = 414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.VOID - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.SEMI || _la === apexParser.LT || _la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        {
                            this.state = 411;
                            this.interfaceBodyDeclaration();
                        }
                    }
                    this.state = 416;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 417;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.classBodyDeclaration = function () {
        var _localctx = new ClassBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, apexParser.RULE_classBodyDeclaration);
        var _la;
        try {
            var _alt = void 0;
            this.state = 431;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 419;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 421;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.STATIC) {
                            {
                                this.state = 420;
                                this.match(apexParser.STATIC);
                            }
                        }
                        this.state = 423;
                        this.block();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 427;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 424;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 429;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                        }
                        this.state = 430;
                        this.memberDeclaration();
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
    apexParser.prototype.memberDeclaration = function () {
        var _localctx = new MemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, apexParser.RULE_memberDeclaration);
        try {
            this.state = 443;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 433;
                        this.methodDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 434;
                        this.genericMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 435;
                        this.fieldDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 436;
                        this.constructorDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 437;
                        this.genericConstructorDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 438;
                        this.interfaceDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 439;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 440;
                        this.classDeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 441;
                        this.enumDeclaration();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 442;
                        this.propertyDeclaration();
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
    apexParser.prototype.methodDeclaration = function () {
        var _localctx = new MethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, apexParser.RULE_methodDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.OVERRIDE) {
                    {
                        this.state = 445;
                        this.match(apexParser.OVERRIDE);
                    }
                }
                this.state = 450;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.SET:
                    case apexParser.BYTE:
                    case apexParser.CHAR:
                    case apexParser.FLOAT:
                    case apexParser.INT:
                    case apexParser.SHORT:
                    case apexParser.Identifier:
                        {
                            this.state = 448;
                            this.type();
                        }
                        break;
                    case apexParser.VOID:
                        {
                            this.state = 449;
                            this.match(apexParser.VOID);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 452;
                this.match(apexParser.Identifier);
                this.state = 453;
                this.formalParameters();
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.LBRACK) {
                    {
                        {
                            this.state = 454;
                            this.match(apexParser.LBRACK);
                            this.state = 455;
                            this.match(apexParser.RBRACK);
                        }
                    }
                    this.state = 460;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.THROWS) {
                    {
                        this.state = 461;
                        this.match(apexParser.THROWS);
                        this.state = 462;
                        this.qualifiedNameList();
                    }
                }
                this.state = 467;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.LBRACE:
                        {
                            this.state = 465;
                            this.methodBody();
                        }
                        break;
                    case apexParser.SEMI:
                        {
                            this.state = 466;
                            this.match(apexParser.SEMI);
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
    apexParser.prototype.genericMethodDeclaration = function () {
        var _localctx = new GenericMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, apexParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 469;
                this.typeParameters();
                this.state = 470;
                this.methodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.constructorDeclaration = function () {
        var _localctx = new ConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, apexParser.RULE_constructorDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 472;
                this.match(apexParser.Identifier);
                this.state = 473;
                this.formalParameters();
                this.state = 476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.THROWS) {
                    {
                        this.state = 474;
                        this.match(apexParser.THROWS);
                        this.state = 475;
                        this.qualifiedNameList();
                    }
                }
                this.state = 478;
                this.constructorBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.genericConstructorDeclaration = function () {
        var _localctx = new GenericConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, apexParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 480;
                this.typeParameters();
                this.state = 481;
                this.constructorDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.fieldDeclaration = function () {
        var _localctx = new FieldDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, apexParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 483;
                this.type();
                this.state = 484;
                this.variableDeclarators();
                this.state = 485;
                this.match(apexParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.propertyDeclaration = function () {
        var _localctx = new PropertyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, apexParser.RULE_propertyDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.type();
                this.state = 488;
                this.variableDeclarators();
                this.state = 489;
                this.propertyBodyDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.propertyBodyDeclaration = function () {
        var _localctx = new PropertyBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, apexParser.RULE_propertyBodyDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 491;
                this.match(apexParser.LBRACE);
                this.state = 492;
                this.propertyBlock();
                this.state = 494;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.GET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
                    {
                        this.state = 493;
                        this.propertyBlock();
                    }
                }
                this.state = 496;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.interfaceBodyDeclaration = function () {
        var _localctx = new InterfaceBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, apexParser.RULE_interfaceBodyDeclaration);
        try {
            var _alt = void 0;
            this.state = 506;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.OVERRIDE:
                case apexParser.VIRTUAL:
                case apexParser.SET:
                case apexParser.ABSTRACT:
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.CLASS:
                case apexParser.ENUM:
                case apexParser.FINAL:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.INTERFACE:
                case apexParser.NATIVE:
                case apexParser.PRIVATE:
                case apexParser.PROTECTED:
                case apexParser.PUBLIC:
                case apexParser.SHORT:
                case apexParser.STATIC:
                case apexParser.SYNCHRONIZED:
                case apexParser.TRANSIENT:
                case apexParser.VOID:
                case apexParser.GLOBAL:
                case apexParser.WEBSERVICE:
                case apexParser.APEX_WITH_SHARING:
                case apexParser.APEX_WITHOUT_SHARING:
                case apexParser.TESTMETHOD:
                case apexParser.LT:
                case apexParser.Identifier:
                case apexParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 501;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 498;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 503;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        }
                        this.state = 504;
                        this.interfaceMemberDeclaration();
                    }
                    break;
                case apexParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 505;
                        this.match(apexParser.SEMI);
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
    apexParser.prototype.interfaceMemberDeclaration = function () {
        var _localctx = new InterfaceMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, apexParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 515;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 508;
                        this.constDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 509;
                        this.interfaceMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 510;
                        this.genericInterfaceMethodDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 511;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 512;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 513;
                        this.classDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 514;
                        this.enumDeclaration();
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
    apexParser.prototype.constDeclaration = function () {
        var _localctx = new ConstDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, apexParser.RULE_constDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this.type();
                this.state = 518;
                this.constantDeclarator();
                this.state = 523;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 519;
                            this.match(apexParser.COMMA);
                            this.state = 520;
                            this.constantDeclarator();
                        }
                    }
                    this.state = 525;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 526;
                this.match(apexParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.constantDeclarator = function () {
        var _localctx = new ConstantDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, apexParser.RULE_constantDeclarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 528;
                this.match(apexParser.Identifier);
                this.state = 533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.LBRACK) {
                    {
                        {
                            this.state = 529;
                            this.match(apexParser.LBRACK);
                            this.state = 530;
                            this.match(apexParser.RBRACK);
                        }
                    }
                    this.state = 535;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 536;
                this.match(apexParser.ASSIGN);
                this.state = 537;
                this.variableInitializer();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.interfaceMethodDeclaration = function () {
        var _localctx = new InterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, apexParser.RULE_interfaceMethodDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 541;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.SET:
                    case apexParser.BYTE:
                    case apexParser.CHAR:
                    case apexParser.FLOAT:
                    case apexParser.INT:
                    case apexParser.SHORT:
                    case apexParser.Identifier:
                        {
                            this.state = 539;
                            this.type();
                        }
                        break;
                    case apexParser.VOID:
                        {
                            this.state = 540;
                            this.match(apexParser.VOID);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 543;
                this.match(apexParser.Identifier);
                this.state = 544;
                this.formalParameters();
                this.state = 549;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.LBRACK) {
                    {
                        {
                            this.state = 545;
                            this.match(apexParser.LBRACK);
                            this.state = 546;
                            this.match(apexParser.RBRACK);
                        }
                    }
                    this.state = 551;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 554;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.THROWS) {
                    {
                        this.state = 552;
                        this.match(apexParser.THROWS);
                        this.state = 553;
                        this.qualifiedNameList();
                    }
                }
                this.state = 556;
                this.match(apexParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.genericInterfaceMethodDeclaration = function () {
        var _localctx = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, apexParser.RULE_genericInterfaceMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 558;
                this.typeParameters();
                this.state = 559;
                this.interfaceMethodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.variableDeclarators = function () {
        var _localctx = new VariableDeclaratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, apexParser.RULE_variableDeclarators);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this.variableDeclarator();
                this.state = 566;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 562;
                            this.match(apexParser.COMMA);
                            this.state = 563;
                            this.variableDeclarator();
                        }
                    }
                    this.state = 568;
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
    apexParser.prototype.variableDeclarator = function () {
        var _localctx = new VariableDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, apexParser.RULE_variableDeclarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 569;
                this.variableDeclaratorId();
                this.state = 572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.ASSIGN) {
                    {
                        this.state = 570;
                        this.match(apexParser.ASSIGN);
                        this.state = 571;
                        this.variableInitializer();
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
    apexParser.prototype.variableDeclaratorId = function () {
        var _localctx = new VariableDeclaratorIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, apexParser.RULE_variableDeclaratorId);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 574;
                this.match(apexParser.Identifier);
                this.state = 579;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.LBRACK) {
                    {
                        {
                            this.state = 575;
                            this.match(apexParser.LBRACK);
                            this.state = 576;
                            this.match(apexParser.RBRACK);
                        }
                    }
                    this.state = 581;
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
    apexParser.prototype.variableInitializer = function () {
        var _localctx = new VariableInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, apexParser.RULE_variableInitializer);
        try {
            this.state = 584;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 582;
                        this.arrayInitializer();
                    }
                    break;
                case apexParser.SoqlLiteral:
                case apexParser.SET:
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.NEW:
                case apexParser.SHORT:
                case apexParser.SUPER:
                case apexParser.THIS:
                case apexParser.VOID:
                case apexParser.IntegerLiteral:
                case apexParser.FloatingPointLiteral:
                case apexParser.BooleanLiteral:
                case apexParser.CharacterLiteral:
                case apexParser.StringLiteral:
                case apexParser.NullLiteral:
                case apexParser.LPAREN:
                case apexParser.LT:
                case apexParser.BANG:
                case apexParser.TILDE:
                case apexParser.INC:
                case apexParser.DEC:
                case apexParser.ADD:
                case apexParser.SUB:
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 583;
                        this.expression(0);
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
    apexParser.prototype.arrayInitializer = function () {
        var _localctx = new ArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, apexParser.RULE_arrayInitializer);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                this.match(apexParser.LBRACE);
                this.state = 598;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LBRACE - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                    {
                        this.state = 587;
                        this.variableInitializer();
                        this.state = 592;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 588;
                                        this.match(apexParser.COMMA);
                                        this.state = 589;
                                        this.variableInitializer();
                                    }
                                }
                            }
                            this.state = 594;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                        }
                        this.state = 596;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.COMMA) {
                            {
                                this.state = 595;
                                this.match(apexParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 600;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.enumConstantName = function () {
        var _localctx = new EnumConstantNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, apexParser.RULE_enumConstantName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 602;
                this.match(apexParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, apexParser.RULE_type);
        try {
            var _alt = void 0;
            this.state = 620;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.SET:
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 604;
                        this.classOrInterfaceType();
                        this.state = 609;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 605;
                                        this.match(apexParser.LBRACK);
                                        this.state = 606;
                                        this.match(apexParser.RBRACK);
                                    }
                                }
                            }
                            this.state = 611;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        }
                    }
                    break;
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.SHORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 612;
                        this.primitiveType();
                        this.state = 617;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 613;
                                        this.match(apexParser.LBRACK);
                                        this.state = 614;
                                        this.match(apexParser.RBRACK);
                                    }
                                }
                            }
                            this.state = 619;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
    apexParser.prototype.classOrInterfaceType = function () {
        var _localctx = new ClassOrInterfaceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, apexParser.RULE_classOrInterfaceType);
        try {
            var _alt = void 0;
            this.state = 638;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 622;
                        this.match(apexParser.Identifier);
                        this.state = 624;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                            case 1:
                                {
                                    this.state = 623;
                                    this.typeArguments();
                                }
                                break;
                        }
                        this.state = 633;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 626;
                                        this.match(apexParser.DOT);
                                        this.state = 627;
                                        this.match(apexParser.Identifier);
                                        this.state = 629;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 628;
                                                    this.typeArguments();
                                                }
                                                break;
                                        }
                                    }
                                }
                            }
                            this.state = 635;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                        }
                    }
                    break;
                case apexParser.SET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 636;
                        this.match(apexParser.SET);
                        this.state = 637;
                        this.typeArguments();
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
    apexParser.prototype.primitiveType = function () {
        var _localctx = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, apexParser.RULE_primitiveType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 640;
                _la = this._input.LA(1);
                if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (apexParser.BYTE - 9)) | (1 << (apexParser.CHAR - 9)) | (1 << (apexParser.FLOAT - 9)) | (1 << (apexParser.INT - 9)) | (1 << (apexParser.SHORT - 9)))) !== 0))) {
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
    apexParser.prototype.typeArguments = function () {
        var _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, apexParser.RULE_typeArguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                this.match(apexParser.LT);
                this.state = 643;
                this.typeArgument();
                this.state = 648;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 644;
                            this.match(apexParser.COMMA);
                            this.state = 645;
                            this.typeArgument();
                        }
                    }
                    this.state = 650;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 651;
                this.match(apexParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.typeArgument = function () {
        var _localctx = new TypeArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, apexParser.RULE_typeArgument);
        var _la;
        try {
            this.state = 659;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.SET:
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.SHORT:
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 653;
                        this.type();
                    }
                    break;
                case apexParser.QUESTION:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 654;
                        this.match(apexParser.QUESTION);
                        this.state = 657;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.EXTENDS || _la === apexParser.SUPER) {
                            {
                                this.state = 655;
                                _la = this._input.LA(1);
                                if (!(_la === apexParser.EXTENDS || _la === apexParser.SUPER)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 656;
                                this.type();
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
    apexParser.prototype.qualifiedNameList = function () {
        var _localctx = new QualifiedNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, apexParser.RULE_qualifiedNameList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 661;
                this.qualifiedName();
                this.state = 666;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 662;
                            this.match(apexParser.COMMA);
                            this.state = 663;
                            this.qualifiedName();
                        }
                    }
                    this.state = 668;
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
    apexParser.prototype.formalParameters = function () {
        var _localctx = new FormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, apexParser.RULE_formalParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this.match(apexParser.LPAREN);
                this.state = 671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || _la === apexParser.SHORT || _la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        this.state = 670;
                        this.formalParameterList();
                    }
                }
                this.state = 673;
                this.match(apexParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.formalParameterList = function () {
        var _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, apexParser.RULE_formalParameterList);
        var _la;
        try {
            var _alt = void 0;
            this.state = 688;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 675;
                        this.formalParameter();
                        this.state = 680;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 676;
                                        this.match(apexParser.COMMA);
                                        this.state = 677;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 682;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                        }
                        this.state = 685;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.COMMA) {
                            {
                                this.state = 683;
                                this.match(apexParser.COMMA);
                                this.state = 684;
                                this.lastFormalParameter();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 687;
                        this.lastFormalParameter();
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
    apexParser.prototype.formalParameter = function () {
        var _localctx = new FormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, apexParser.RULE_formalParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.FINAL || _la === apexParser.AT) {
                    {
                        {
                            this.state = 690;
                            this.variableModifier();
                        }
                    }
                    this.state = 695;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 696;
                this.type();
                this.state = 697;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.lastFormalParameter = function () {
        var _localctx = new LastFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, apexParser.RULE_lastFormalParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.FINAL || _la === apexParser.AT) {
                    {
                        {
                            this.state = 699;
                            this.variableModifier();
                        }
                    }
                    this.state = 704;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 705;
                this.type();
                this.state = 706;
                this.match(apexParser.ELLIPSIS);
                this.state = 707;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.methodBody = function () {
        var _localctx = new MethodBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, apexParser.RULE_methodBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
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
    apexParser.prototype.constructorBody = function () {
        var _localctx = new ConstructorBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, apexParser.RULE_constructorBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 711;
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
    apexParser.prototype.qualifiedName = function () {
        var _localctx = new QualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, apexParser.RULE_qualifiedName);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 713;
                this.match(apexParser.Identifier);
                this.state = 718;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 714;
                                this.match(apexParser.DOT);
                                this.state = 715;
                                this.match(apexParser.Identifier);
                            }
                        }
                    }
                    this.state = 720;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, apexParser.RULE_literal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                _la = this._input.LA(1);
                if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (apexParser.IntegerLiteral - 62)) | (1 << (apexParser.FloatingPointLiteral - 62)) | (1 << (apexParser.BooleanLiteral - 62)) | (1 << (apexParser.CharacterLiteral - 62)) | (1 << (apexParser.StringLiteral - 62)) | (1 << (apexParser.NullLiteral - 62)))) !== 0))) {
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
    apexParser.prototype.annotation = function () {
        var _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, apexParser.RULE_annotation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 723;
                this.match(apexParser.AT);
                this.state = 724;
                this.annotationName();
                this.state = 731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.LPAREN) {
                    {
                        this.state = 725;
                        this.match(apexParser.LPAREN);
                        this.state = 728;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                            case 1:
                                {
                                    this.state = 726;
                                    this.elementValuePairs();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 727;
                                    this.elementValue();
                                }
                                break;
                        }
                        this.state = 730;
                        this.match(apexParser.RPAREN);
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
    apexParser.prototype.annotationName = function () {
        var _localctx = new AnnotationNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, apexParser.RULE_annotationName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.elementValuePairs = function () {
        var _localctx = new ElementValuePairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, apexParser.RULE_elementValuePairs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 735;
                this.elementValuePair();
                this.state = 740;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 736;
                            this.match(apexParser.COMMA);
                            this.state = 737;
                            this.elementValuePair();
                        }
                    }
                    this.state = 742;
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
    apexParser.prototype.elementValuePair = function () {
        var _localctx = new ElementValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, apexParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                this.match(apexParser.Identifier);
                this.state = 744;
                this.match(apexParser.ASSIGN);
                this.state = 745;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.elementValue = function () {
        var _localctx = new ElementValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, apexParser.RULE_elementValue);
        try {
            this.state = 750;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.SoqlLiteral:
                case apexParser.SET:
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.NEW:
                case apexParser.SHORT:
                case apexParser.SUPER:
                case apexParser.THIS:
                case apexParser.VOID:
                case apexParser.IntegerLiteral:
                case apexParser.FloatingPointLiteral:
                case apexParser.BooleanLiteral:
                case apexParser.CharacterLiteral:
                case apexParser.StringLiteral:
                case apexParser.NullLiteral:
                case apexParser.LPAREN:
                case apexParser.LT:
                case apexParser.BANG:
                case apexParser.TILDE:
                case apexParser.INC:
                case apexParser.DEC:
                case apexParser.ADD:
                case apexParser.SUB:
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 747;
                        this.expression(0);
                    }
                    break;
                case apexParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 748;
                        this.annotation();
                    }
                    break;
                case apexParser.LBRACE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 749;
                        this.elementValueArrayInitializer();
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
    apexParser.prototype.elementValueArrayInitializer = function () {
        var _localctx = new ElementValueArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, apexParser.RULE_elementValueArrayInitializer);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 752;
                this.match(apexParser.LBRACE);
                this.state = 761;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LBRACE - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        this.state = 753;
                        this.elementValue();
                        this.state = 758;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 754;
                                        this.match(apexParser.COMMA);
                                        this.state = 755;
                                        this.elementValue();
                                    }
                                }
                            }
                            this.state = 760;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                        }
                    }
                }
                this.state = 764;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.COMMA) {
                    {
                        this.state = 763;
                        this.match(apexParser.COMMA);
                    }
                }
                this.state = 766;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.annotationTypeDeclaration = function () {
        var _localctx = new AnnotationTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, apexParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 768;
                this.match(apexParser.AT);
                this.state = 769;
                this.match(apexParser.INTERFACE);
                this.state = 770;
                this.match(apexParser.Identifier);
                this.state = 771;
                this.annotationTypeBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.annotationTypeBody = function () {
        var _localctx = new AnnotationTypeBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, apexParser.RULE_annotationTypeBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 773;
                this.match(apexParser.LBRACE);
                this.state = 777;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.SEMI || _la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        {
                            this.state = 774;
                            this.annotationTypeElementDeclaration();
                        }
                    }
                    this.state = 779;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 780;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.annotationTypeElementDeclaration = function () {
        var _localctx = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, apexParser.RULE_annotationTypeElementDeclaration);
        try {
            var _alt = void 0;
            this.state = 790;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.OVERRIDE:
                case apexParser.VIRTUAL:
                case apexParser.SET:
                case apexParser.ABSTRACT:
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.CLASS:
                case apexParser.ENUM:
                case apexParser.FINAL:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.INTERFACE:
                case apexParser.NATIVE:
                case apexParser.PRIVATE:
                case apexParser.PROTECTED:
                case apexParser.PUBLIC:
                case apexParser.SHORT:
                case apexParser.STATIC:
                case apexParser.SYNCHRONIZED:
                case apexParser.TRANSIENT:
                case apexParser.GLOBAL:
                case apexParser.WEBSERVICE:
                case apexParser.APEX_WITH_SHARING:
                case apexParser.APEX_WITHOUT_SHARING:
                case apexParser.TESTMETHOD:
                case apexParser.Identifier:
                case apexParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 785;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 782;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 787;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                        }
                        this.state = 788;
                        this.annotationTypeElementRest();
                    }
                    break;
                case apexParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 789;
                        this.match(apexParser.SEMI);
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
    apexParser.prototype.annotationTypeElementRest = function () {
        var _localctx = new AnnotationTypeElementRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, apexParser.RULE_annotationTypeElementRest);
        try {
            this.state = 812;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.SET:
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.SHORT:
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 792;
                        this.type();
                        this.state = 793;
                        this.annotationMethodOrConstantRest();
                        this.state = 794;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case apexParser.CLASS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 796;
                        this.classDeclaration();
                        this.state = 798;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                            case 1:
                                {
                                    this.state = 797;
                                    this.match(apexParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case apexParser.INTERFACE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 800;
                        this.interfaceDeclaration();
                        this.state = 802;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                            case 1:
                                {
                                    this.state = 801;
                                    this.match(apexParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case apexParser.ENUM:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 804;
                        this.enumDeclaration();
                        this.state = 806;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                            case 1:
                                {
                                    this.state = 805;
                                    this.match(apexParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case apexParser.AT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 808;
                        this.annotationTypeDeclaration();
                        this.state = 810;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                            case 1:
                                {
                                    this.state = 809;
                                    this.match(apexParser.SEMI);
                                }
                                break;
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
    apexParser.prototype.annotationMethodOrConstantRest = function () {
        var _localctx = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, apexParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 816;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 814;
                        this.annotationMethodRest();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 815;
                        this.annotationConstantRest();
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
    apexParser.prototype.annotationMethodRest = function () {
        var _localctx = new AnnotationMethodRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, apexParser.RULE_annotationMethodRest);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 818;
                this.match(apexParser.Identifier);
                this.state = 819;
                this.match(apexParser.LPAREN);
                this.state = 820;
                this.match(apexParser.RPAREN);
                this.state = 822;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.DEFAULT) {
                    {
                        this.state = 821;
                        this.defaultValue();
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
    apexParser.prototype.annotationConstantRest = function () {
        var _localctx = new AnnotationConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, apexParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 824;
                this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.defaultValue = function () {
        var _localctx = new DefaultValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, apexParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 826;
                this.match(apexParser.DEFAULT);
                this.state = 827;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, apexParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 829;
                this.match(apexParser.LBRACE);
                this.state = 833;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BREAK) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.CONTINUE) | (1 << apexParser.DO) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.FOR) | (1 << apexParser.IF) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.PRIVATE - 32)) | (1 << (apexParser.PROTECTED - 32)) | (1 << (apexParser.PUBLIC - 32)) | (1 << (apexParser.RETURN - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.STATIC - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.THROW - 32)) | (1 << (apexParser.TRY - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.WHILE - 32)) | (1 << (apexParser.GLOBAL - 32)) | (1 << (apexParser.WEBSERVICE - 32)) | (1 << (apexParser.APEX_WITH_SHARING - 32)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 32)) | (1 << (apexParser.DB_INSERT - 32)) | (1 << (apexParser.DB_UPSERT - 32)) | (1 << (apexParser.DB_UPDATE - 32)) | (1 << (apexParser.DB_DELETE - 32)) | (1 << (apexParser.DB_UNDELETE - 32)) | (1 << (apexParser.TESTMETHOD - 32)) | (1 << (apexParser.RUNAS - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LBRACE - 64)) | (1 << (apexParser.SEMI - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
                    {
                        {
                            this.state = 830;
                            this.blockStatement();
                        }
                    }
                    this.state = 835;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 836;
                this.match(apexParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.blockStatement = function () {
        var _localctx = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, apexParser.RULE_blockStatement);
        try {
            this.state = 841;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 838;
                        this.localVariableDeclarationStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 839;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 840;
                        this.typeDeclaration();
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
    apexParser.prototype.localVariableDeclarationStatement = function () {
        var _localctx = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, apexParser.RULE_localVariableDeclarationStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 843;
                this.localVariableDeclaration();
                this.state = 844;
                this.match(apexParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.localVariableDeclaration = function () {
        var _localctx = new LocalVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, apexParser.RULE_localVariableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 849;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.FINAL || _la === apexParser.AT) {
                    {
                        {
                            this.state = 846;
                            this.variableModifier();
                        }
                    }
                    this.state = 851;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 852;
                this.type();
                this.state = 853;
                this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, apexParser.RULE_statement);
        var _la;
        try {
            this.state = 939;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 855;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 856;
                        this.match(apexParser.IF);
                        this.state = 857;
                        this.parExpression();
                        this.state = 858;
                        this.statement();
                        this.state = 861;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                            case 1:
                                {
                                    this.state = 859;
                                    this.match(apexParser.ELSE);
                                    this.state = 860;
                                    this.statement();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 863;
                        this.match(apexParser.FOR);
                        this.state = 864;
                        this.match(apexParser.LPAREN);
                        this.state = 865;
                        this.forControl();
                        this.state = 866;
                        this.match(apexParser.RPAREN);
                        this.state = 867;
                        this.statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 869;
                        this.match(apexParser.WHILE);
                        this.state = 870;
                        this.parExpression();
                        this.state = 871;
                        this.statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 873;
                        this.match(apexParser.DO);
                        this.state = 874;
                        this.statement();
                        this.state = 875;
                        this.match(apexParser.WHILE);
                        this.state = 876;
                        this.parExpression();
                        this.state = 877;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 879;
                        this.match(apexParser.RUNAS);
                        this.state = 880;
                        this.match(apexParser.LPAREN);
                        this.state = 881;
                        this.expression(0);
                        this.state = 882;
                        this.match(apexParser.RPAREN);
                        this.state = 883;
                        this.statement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 885;
                        this.match(apexParser.TRY);
                        this.state = 886;
                        this.block();
                        this.state = 896;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case apexParser.CATCH:
                                {
                                    this.state = 888;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 887;
                                                this.catchClause();
                                            }
                                        }
                                        this.state = 890;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === apexParser.CATCH);
                                    this.state = 893;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === apexParser.FINALLY) {
                                        {
                                            this.state = 892;
                                            this.finallyBlock();
                                        }
                                    }
                                }
                                break;
                            case apexParser.FINALLY:
                                {
                                    this.state = 895;
                                    this.finallyBlock();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 898;
                        this.match(apexParser.TRY);
                        this.state = 899;
                        this.resourceSpecification();
                        this.state = 900;
                        this.block();
                        this.state = 904;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === apexParser.CATCH) {
                            {
                                {
                                    this.state = 901;
                                    this.catchClause();
                                }
                            }
                            this.state = 906;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 908;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.FINALLY) {
                            {
                                this.state = 907;
                                this.finallyBlock();
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 910;
                        this.match(apexParser.RETURN);
                        this.state = 912;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                            {
                                this.state = 911;
                                this.expression(0);
                            }
                        }
                        this.state = 914;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 915;
                        this.match(apexParser.THROW);
                        this.state = 916;
                        this.expression(0);
                        this.state = 917;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 919;
                        this.match(apexParser.BREAK);
                        this.state = 921;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.Identifier) {
                            {
                                this.state = 920;
                                this.match(apexParser.Identifier);
                            }
                        }
                        this.state = 923;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 924;
                        this.match(apexParser.CONTINUE);
                        this.state = 926;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.Identifier) {
                            {
                                this.state = 925;
                                this.match(apexParser.Identifier);
                            }
                        }
                        this.state = 928;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 929;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 930;
                        this.statementExpression();
                        this.state = 931;
                        this.match(apexParser.SEMI);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 933;
                        this.match(apexParser.Identifier);
                        this.state = 934;
                        this.match(apexParser.COLON);
                        this.state = 935;
                        this.statement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 936;
                        this.apexDbExpression();
                        this.state = 937;
                        this.match(apexParser.SEMI);
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
    apexParser.prototype.propertyBlock = function () {
        var _localctx = new PropertyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, apexParser.RULE_propertyBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 944;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
                    {
                        {
                            this.state = 941;
                            this.modifier();
                        }
                    }
                    this.state = 946;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 949;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.GET:
                        {
                            this.state = 947;
                            this.getter();
                        }
                        break;
                    case apexParser.SET:
                        {
                            this.state = 948;
                            this.setter();
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
    apexParser.prototype.getter = function () {
        var _localctx = new GetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, apexParser.RULE_getter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 951;
                this.match(apexParser.GET);
                this.state = 954;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.SEMI:
                        {
                            this.state = 952;
                            this.match(apexParser.SEMI);
                        }
                        break;
                    case apexParser.LBRACE:
                        {
                            this.state = 953;
                            this.methodBody();
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
    apexParser.prototype.setter = function () {
        var _localctx = new SetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, apexParser.RULE_setter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 956;
                this.match(apexParser.SET);
                this.state = 959;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.SEMI:
                        {
                            this.state = 957;
                            this.match(apexParser.SEMI);
                        }
                        break;
                    case apexParser.LBRACE:
                        {
                            this.state = 958;
                            this.methodBody();
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
    apexParser.prototype.catchClause = function () {
        var _localctx = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, apexParser.RULE_catchClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 961;
                this.match(apexParser.CATCH);
                this.state = 962;
                this.match(apexParser.LPAREN);
                this.state = 966;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.FINAL || _la === apexParser.AT) {
                    {
                        {
                            this.state = 963;
                            this.variableModifier();
                        }
                    }
                    this.state = 968;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 969;
                this.catchType();
                this.state = 970;
                this.match(apexParser.Identifier);
                this.state = 971;
                this.match(apexParser.RPAREN);
                this.state = 972;
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
    apexParser.prototype.catchType = function () {
        var _localctx = new CatchTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, apexParser.RULE_catchType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 974;
                this.qualifiedName();
                this.state = 979;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.BITOR) {
                    {
                        {
                            this.state = 975;
                            this.match(apexParser.BITOR);
                            this.state = 976;
                            this.qualifiedName();
                        }
                    }
                    this.state = 981;
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
    apexParser.prototype.finallyBlock = function () {
        var _localctx = new FinallyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, apexParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 982;
                this.match(apexParser.FINALLY);
                this.state = 983;
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
    apexParser.prototype.resourceSpecification = function () {
        var _localctx = new ResourceSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, apexParser.RULE_resourceSpecification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 985;
                this.match(apexParser.LPAREN);
                this.state = 986;
                this.resources();
                this.state = 988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.SEMI) {
                    {
                        this.state = 987;
                        this.match(apexParser.SEMI);
                    }
                }
                this.state = 990;
                this.match(apexParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.resources = function () {
        var _localctx = new ResourcesContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, apexParser.RULE_resources);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this.resource();
                this.state = 997;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 993;
                                this.match(apexParser.SEMI);
                                this.state = 994;
                                this.resource();
                            }
                        }
                    }
                    this.state = 999;
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
    apexParser.prototype.resource = function () {
        var _localctx = new ResourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, apexParser.RULE_resource);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1003;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.FINAL || _la === apexParser.AT) {
                    {
                        {
                            this.state = 1000;
                            this.variableModifier();
                        }
                    }
                    this.state = 1005;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1006;
                this.classOrInterfaceType();
                this.state = 1007;
                this.variableDeclaratorId();
                this.state = 1008;
                this.match(apexParser.ASSIGN);
                this.state = 1009;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.forControl = function () {
        var _localctx = new ForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, apexParser.RULE_forControl);
        var _la;
        try {
            this.state = 1023;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1011;
                        this.enhancedForControl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1013;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
                            {
                                this.state = 1012;
                                this.forInit();
                            }
                        }
                        this.state = 1015;
                        this.match(apexParser.SEMI);
                        this.state = 1017;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                            {
                                this.state = 1016;
                                this.expression(0);
                            }
                        }
                        this.state = 1019;
                        this.match(apexParser.SEMI);
                        this.state = 1021;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                            {
                                this.state = 1020;
                                this.forUpdate();
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
    apexParser.prototype.forInit = function () {
        var _localctx = new ForInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, apexParser.RULE_forInit);
        try {
            this.state = 1027;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1025;
                        this.localVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1026;
                        this.expressionList();
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
    apexParser.prototype.enhancedForControl = function () {
        var _localctx = new EnhancedForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, apexParser.RULE_enhancedForControl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1032;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.FINAL || _la === apexParser.AT) {
                    {
                        {
                            this.state = 1029;
                            this.variableModifier();
                        }
                    }
                    this.state = 1034;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1035;
                this.type();
                this.state = 1036;
                this.variableDeclaratorId();
                this.state = 1037;
                this.match(apexParser.COLON);
                this.state = 1038;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.forUpdate = function () {
        var _localctx = new ForUpdateContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, apexParser.RULE_forUpdate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1040;
                this.expressionList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.parExpression = function () {
        var _localctx = new ParExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, apexParser.RULE_parExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1042;
                this.match(apexParser.LPAREN);
                this.state = 1043;
                this.expression(0);
                this.state = 1044;
                this.match(apexParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, apexParser.RULE_expressionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1046;
                this.expression(0);
                this.state = 1051;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === apexParser.COMMA) {
                    {
                        {
                            this.state = 1047;
                            this.match(apexParser.COMMA);
                            this.state = 1048;
                            this.expression(0);
                        }
                    }
                    this.state = 1053;
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
    apexParser.prototype.statementExpression = function () {
        var _localctx = new StatementExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, apexParser.RULE_statementExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1054;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.constantExpression = function () {
        var _localctx = new ConstantExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, apexParser.RULE_constantExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1056;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.apexDbUpsertExpression = function () {
        var _localctx = new ApexDbUpsertExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, apexParser.RULE_apexDbUpsertExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1058;
                this.match(apexParser.DB_UPSERT);
                this.state = 1059;
                this.expression(0);
                this.state = 1063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                    {
                        {
                            this.state = 1060;
                            this.expression(0);
                        }
                    }
                    this.state = 1065;
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
    apexParser.prototype.apexDbExpression = function () {
        var _localctx = new ApexDbExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, apexParser.RULE_apexDbExpression);
        var _la;
        try {
            this.state = 1069;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.DB_INSERT:
                case apexParser.DB_UPDATE:
                case apexParser.DB_DELETE:
                case apexParser.DB_UNDELETE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1066;
                        _la = this._input.LA(1);
                        if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (apexParser.DB_INSERT - 55)) | (1 << (apexParser.DB_UPDATE - 55)) | (1 << (apexParser.DB_DELETE - 55)) | (1 << (apexParser.DB_UNDELETE - 55)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1067;
                        this.expression(0);
                    }
                    break;
                case apexParser.DB_UPSERT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1068;
                        this.apexDbUpsertExpression();
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
    apexParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 184;
        this.enterRecursionRule(_localctx, 184, apexParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1084;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                    case 1:
                        {
                            this.state = 1072;
                            this.primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1073;
                            this.match(apexParser.NEW);
                            this.state = 1074;
                            this.creator();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1075;
                            this.match(apexParser.LPAREN);
                            this.state = 1076;
                            this.type();
                            this.state = 1077;
                            this.match(apexParser.RPAREN);
                            this.state = 1078;
                            this.expression(17);
                        }
                        break;
                    case 4:
                        {
                            this.state = 1080;
                            _la = this._input.LA(1);
                            if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (apexParser.INC - 90)) | (1 << (apexParser.DEC - 90)) | (1 << (apexParser.ADD - 90)) | (1 << (apexParser.SUB - 90)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1081;
                            this.expression(15);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1082;
                            _la = this._input.LA(1);
                            if (!(_la === apexParser.BANG || _la === apexParser.TILDE)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1083;
                            this.expression(14);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1186;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1184;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1086;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1087;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (apexParser.MUL - 94)) | (1 << (apexParser.DIV - 94)) | (1 << (apexParser.MOD - 94)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1088;
                                        this.expression(14);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1089;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 1090;
                                        _la = this._input.LA(1);
                                        if (!(_la === apexParser.ADD || _la === apexParser.SUB)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1091;
                                        this.expression(13);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1092;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 1100;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1093;
                                                    this.match(apexParser.LT);
                                                    this.state = 1094;
                                                    this.match(apexParser.LT);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1095;
                                                    this.match(apexParser.GT);
                                                    this.state = 1096;
                                                    this.match(apexParser.GT);
                                                    this.state = 1097;
                                                    this.match(apexParser.GT);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1098;
                                                    this.match(apexParser.GT);
                                                    this.state = 1099;
                                                    this.match(apexParser.GT);
                                                }
                                                break;
                                        }
                                        this.state = 1102;
                                        this.expression(12);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1103;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 1104;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (apexParser.GT - 78)) | (1 << (apexParser.LT - 78)) | (1 << (apexParser.LE - 78)) | (1 << (apexParser.GE - 78)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1105;
                                        this.expression(11);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1106;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1107;
                                        _la = this._input.LA(1);
                                        if (!(_la === apexParser.T__0 || _la === apexParser.EQUAL || _la === apexParser.NOTEQUAL)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1108;
                                        this.expression(9);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1109;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1110;
                                        this.match(apexParser.BITAND);
                                        this.state = 1111;
                                        this.expression(8);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1112;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1113;
                                        this.match(apexParser.CARET);
                                        this.state = 1114;
                                        this.expression(7);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1115;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 1116;
                                        this.match(apexParser.BITOR);
                                        this.state = 1117;
                                        this.expression(6);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1118;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 1119;
                                        this.match(apexParser.AND);
                                        this.state = 1120;
                                        this.expression(5);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1121;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1122;
                                        this.match(apexParser.OR);
                                        this.state = 1123;
                                        this.expression(4);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1124;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 1125;
                                        this.match(apexParser.QUESTION);
                                        this.state = 1126;
                                        this.expression(0);
                                        this.state = 1127;
                                        this.match(apexParser.COLON);
                                        this.state = 1128;
                                        this.expression(3);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1130;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 1131;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (apexParser.ASSIGN - 77)) | (1 << (apexParser.ADD_ASSIGN - 77)) | (1 << (apexParser.SUB_ASSIGN - 77)) | (1 << (apexParser.MUL_ASSIGN - 77)) | (1 << (apexParser.DIV_ASSIGN - 77)) | (1 << (apexParser.AND_ASSIGN - 77)) | (1 << (apexParser.OR_ASSIGN - 77)) | (1 << (apexParser.XOR_ASSIGN - 77)) | (1 << (apexParser.MOD_ASSIGN - 77)) | (1 << (apexParser.LSHIFT_ASSIGN - 77)))) !== 0) || _la === apexParser.RSHIFT_ASSIGN || _la === apexParser.URSHIFT_ASSIGN)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1132;
                                        this.expression(1);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1133;
                                        if (!(this.precpred(this._ctx, 28))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                                        }
                                        this.state = 1134;
                                        this.match(apexParser.DOT);
                                        this.state = 1135;
                                        this.match(apexParser.GET);
                                        this.state = 1136;
                                        this.match(apexParser.LPAREN);
                                        this.state = 1138;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                                            {
                                                this.state = 1137;
                                                this.expressionList();
                                            }
                                        }
                                        this.state = 1140;
                                        this.match(apexParser.RPAREN);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1141;
                                        if (!(this.precpred(this._ctx, 27))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                                        }
                                        this.state = 1142;
                                        this.match(apexParser.DOT);
                                        this.state = 1143;
                                        this.match(apexParser.SET);
                                        this.state = 1144;
                                        this.match(apexParser.LPAREN);
                                        this.state = 1146;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                                            {
                                                this.state = 1145;
                                                this.expressionList();
                                            }
                                        }
                                        this.state = 1148;
                                        this.match(apexParser.RPAREN);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1149;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 1150;
                                        this.match(apexParser.DOT);
                                        this.state = 1151;
                                        this.match(apexParser.Identifier);
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1152;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 1153;
                                        this.match(apexParser.DOT);
                                        this.state = 1154;
                                        this.match(apexParser.THIS);
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1155;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 1156;
                                        this.match(apexParser.DOT);
                                        this.state = 1157;
                                        this.match(apexParser.NEW);
                                    }
                                    break;
                                case 18:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1158;
                                        if (!(this.precpred(this._ctx, 23))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                                        }
                                        this.state = 1159;
                                        this.match(apexParser.DOT);
                                        this.state = 1160;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (apexParser.DB_INSERT - 55)) | (1 << (apexParser.DB_UPSERT - 55)) | (1 << (apexParser.DB_UPDATE - 55)) | (1 << (apexParser.DB_DELETE - 55)) | (1 << (apexParser.DB_UNDELETE - 55)))) !== 0))) {
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
                                case 19:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1161;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                                        }
                                        this.state = 1162;
                                        this.match(apexParser.DOT);
                                        this.state = 1163;
                                        this.match(apexParser.SUPER);
                                        this.state = 1164;
                                        this.superSuffix();
                                    }
                                    break;
                                case 20:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1165;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 1166;
                                        this.match(apexParser.DOT);
                                        this.state = 1167;
                                        this.explicitGenericInvocation();
                                    }
                                    break;
                                case 21:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1168;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 1169;
                                        this.match(apexParser.LBRACK);
                                        this.state = 1170;
                                        this.expression(0);
                                        this.state = 1171;
                                        this.match(apexParser.RBRACK);
                                    }
                                    break;
                                case 22:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1173;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 1174;
                                        this.match(apexParser.LPAREN);
                                        this.state = 1176;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                                            {
                                                this.state = 1175;
                                                this.expressionList();
                                            }
                                        }
                                        this.state = 1178;
                                        this.match(apexParser.RPAREN);
                                    }
                                    break;
                                case 23:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1179;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1180;
                                        _la = this._input.LA(1);
                                        if (!(_la === apexParser.INC || _la === apexParser.DEC)) {
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
                                case 24:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
                                        this.state = 1181;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1182;
                                        this.match(apexParser.INSTANCEOF);
                                        this.state = 1183;
                                        this.type();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1188;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.primary = function () {
        var _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, apexParser.RULE_primary);
        try {
            this.state = 1211;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1189;
                        this.match(apexParser.LPAREN);
                        this.state = 1190;
                        this.expression(0);
                        this.state = 1191;
                        this.match(apexParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1193;
                        this.match(apexParser.THIS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1194;
                        this.match(apexParser.SUPER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1195;
                        this.literal();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1196;
                        this.match(apexParser.Identifier);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1197;
                        this.type();
                        this.state = 1198;
                        this.match(apexParser.DOT);
                        this.state = 1199;
                        this.match(apexParser.CLASS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1201;
                        this.match(apexParser.VOID);
                        this.state = 1202;
                        this.match(apexParser.DOT);
                        this.state = 1203;
                        this.match(apexParser.CLASS);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1204;
                        this.nonWildcardTypeArguments();
                        this.state = 1208;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case apexParser.SUPER:
                            case apexParser.Identifier:
                                {
                                    this.state = 1205;
                                    this.explicitGenericInvocationSuffix();
                                }
                                break;
                            case apexParser.THIS:
                                {
                                    this.state = 1206;
                                    this.match(apexParser.THIS);
                                    this.state = 1207;
                                    this.arguments();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1210;
                        this.match(apexParser.SoqlLiteral);
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
    apexParser.prototype.creator = function () {
        var _localctx = new CreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, apexParser.RULE_creator);
        try {
            this.state = 1224;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.LT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1213;
                        this.nonWildcardTypeArguments();
                        this.state = 1214;
                        this.createdName();
                        this.state = 1215;
                        this.classCreatorRest();
                    }
                    break;
                case apexParser.SET:
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.SHORT:
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1217;
                        this.createdName();
                        this.state = 1222;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1218;
                                    this.arrayCreatorRest();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1219;
                                    this.classCreatorRest();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1220;
                                    this.mapCreatorRest();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 1221;
                                    this.setCreatorRest();
                                }
                                break;
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
    apexParser.prototype.createdName = function () {
        var _localctx = new CreatedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, apexParser.RULE_createdName);
        var _la;
        try {
            this.state = 1243;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1226;
                        this.match(apexParser.Identifier);
                        this.state = 1228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === apexParser.LT) {
                            {
                                this.state = 1227;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 1237;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === apexParser.DOT) {
                            {
                                {
                                    this.state = 1230;
                                    this.match(apexParser.DOT);
                                    this.state = 1231;
                                    this.match(apexParser.Identifier);
                                    this.state = 1233;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === apexParser.LT) {
                                        {
                                            this.state = 1232;
                                            this.typeArgumentsOrDiamond();
                                        }
                                    }
                                }
                            }
                            this.state = 1239;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case apexParser.BYTE:
                case apexParser.CHAR:
                case apexParser.FLOAT:
                case apexParser.INT:
                case apexParser.SHORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1240;
                        this.primitiveType();
                    }
                    break;
                case apexParser.SET:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1241;
                        this.match(apexParser.SET);
                        this.state = 1242;
                        this.typeArgumentsOrDiamond();
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
    apexParser.prototype.innerCreator = function () {
        var _localctx = new InnerCreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, apexParser.RULE_innerCreator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1245;
                this.match(apexParser.Identifier);
                this.state = 1247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === apexParser.LT) {
                    {
                        this.state = 1246;
                        this.nonWildcardTypeArgumentsOrDiamond();
                    }
                }
                this.state = 1249;
                this.classCreatorRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.arrayCreatorRest = function () {
        var _localctx = new ArrayCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, apexParser.RULE_arrayCreatorRest);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1251;
                this.match(apexParser.LBRACK);
                this.state = 1279;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.RBRACK:
                        {
                            this.state = 1252;
                            this.match(apexParser.RBRACK);
                            this.state = 1257;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === apexParser.LBRACK) {
                                {
                                    {
                                        this.state = 1253;
                                        this.match(apexParser.LBRACK);
                                        this.state = 1254;
                                        this.match(apexParser.RBRACK);
                                    }
                                }
                                this.state = 1259;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1260;
                            this.arrayInitializer();
                        }
                        break;
                    case apexParser.SoqlLiteral:
                    case apexParser.SET:
                    case apexParser.BYTE:
                    case apexParser.CHAR:
                    case apexParser.FLOAT:
                    case apexParser.INT:
                    case apexParser.NEW:
                    case apexParser.SHORT:
                    case apexParser.SUPER:
                    case apexParser.THIS:
                    case apexParser.VOID:
                    case apexParser.IntegerLiteral:
                    case apexParser.FloatingPointLiteral:
                    case apexParser.BooleanLiteral:
                    case apexParser.CharacterLiteral:
                    case apexParser.StringLiteral:
                    case apexParser.NullLiteral:
                    case apexParser.LPAREN:
                    case apexParser.LT:
                    case apexParser.BANG:
                    case apexParser.TILDE:
                    case apexParser.INC:
                    case apexParser.DEC:
                    case apexParser.ADD:
                    case apexParser.SUB:
                    case apexParser.Identifier:
                        {
                            this.state = 1261;
                            this.expression(0);
                            this.state = 1262;
                            this.match(apexParser.RBRACK);
                            this.state = 1269;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1263;
                                            this.match(apexParser.LBRACK);
                                            this.state = 1264;
                                            this.expression(0);
                                            this.state = 1265;
                                            this.match(apexParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1271;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                            }
                            this.state = 1276;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1272;
                                            this.match(apexParser.LBRACK);
                                            this.state = 1273;
                                            this.match(apexParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1278;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
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
    apexParser.prototype.mapCreatorRest = function () {
        var _localctx = new MapCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, apexParser.RULE_mapCreatorRest);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1281;
                this.match(apexParser.LBRACE);
                this.state = 1309;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.RBRACE:
                        {
                            this.state = 1282;
                            this.match(apexParser.RBRACE);
                        }
                        break;
                    case apexParser.SoqlLiteral:
                    case apexParser.SET:
                    case apexParser.BYTE:
                    case apexParser.CHAR:
                    case apexParser.FLOAT:
                    case apexParser.INT:
                    case apexParser.NEW:
                    case apexParser.SHORT:
                    case apexParser.SUPER:
                    case apexParser.THIS:
                    case apexParser.VOID:
                    case apexParser.IntegerLiteral:
                    case apexParser.FloatingPointLiteral:
                    case apexParser.BooleanLiteral:
                    case apexParser.CharacterLiteral:
                    case apexParser.StringLiteral:
                    case apexParser.NullLiteral:
                    case apexParser.LPAREN:
                    case apexParser.LT:
                    case apexParser.BANG:
                    case apexParser.TILDE:
                    case apexParser.INC:
                    case apexParser.DEC:
                    case apexParser.ADD:
                    case apexParser.SUB:
                    case apexParser.Identifier:
                        {
                            this.state = 1285;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1283;
                                        this.match(apexParser.Identifier);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1284;
                                        this.expression(0);
                                    }
                                    break;
                            }
                            this.state = 1287;
                            this.match(apexParser.LAMBDA_LIKE);
                            this.state = 1290;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1288;
                                        this.literal();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1289;
                                        this.expression(0);
                                    }
                                    break;
                            }
                            this.state = 1304;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === apexParser.COMMA) {
                                {
                                    {
                                        this.state = 1292;
                                        this.match(apexParser.COMMA);
                                        this.state = 1295;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1293;
                                                    this.match(apexParser.Identifier);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1294;
                                                    this.expression(0);
                                                }
                                                break;
                                        }
                                        this.state = 1297;
                                        this.match(apexParser.LAMBDA_LIKE);
                                        this.state = 1300;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1298;
                                                    this.literal();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1299;
                                                    this.expression(0);
                                                }
                                                break;
                                        }
                                    }
                                }
                                this.state = 1306;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1307;
                            this.match(apexParser.RBRACE);
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
    apexParser.prototype.setCreatorRest = function () {
        var _localctx = new SetCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, apexParser.RULE_setCreatorRest);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1311;
                this.match(apexParser.LBRACE);
                this.state = 1329;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case apexParser.RBRACE:
                        {
                            this.state = 1312;
                            this.match(apexParser.RBRACE);
                        }
                        break;
                    case apexParser.SoqlLiteral:
                    case apexParser.SET:
                    case apexParser.BYTE:
                    case apexParser.CHAR:
                    case apexParser.FLOAT:
                    case apexParser.INT:
                    case apexParser.NEW:
                    case apexParser.SHORT:
                    case apexParser.SUPER:
                    case apexParser.THIS:
                    case apexParser.VOID:
                    case apexParser.IntegerLiteral:
                    case apexParser.FloatingPointLiteral:
                    case apexParser.BooleanLiteral:
                    case apexParser.CharacterLiteral:
                    case apexParser.StringLiteral:
                    case apexParser.NullLiteral:
                    case apexParser.LPAREN:
                    case apexParser.LT:
                    case apexParser.BANG:
                    case apexParser.TILDE:
                    case apexParser.INC:
                    case apexParser.DEC:
                    case apexParser.ADD:
                    case apexParser.SUB:
                    case apexParser.Identifier:
                        {
                            this.state = 1315;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1313;
                                        this.literal();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1314;
                                        this.expression(0);
                                    }
                                    break;
                            }
                            this.state = 1324;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === apexParser.COMMA) {
                                {
                                    {
                                        this.state = 1317;
                                        this.match(apexParser.COMMA);
                                        this.state = 1320;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1318;
                                                    this.literal();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1319;
                                                    this.expression(0);
                                                }
                                                break;
                                        }
                                    }
                                }
                                this.state = 1326;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1327;
                            this.match(apexParser.RBRACE);
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
    apexParser.prototype.classCreatorRest = function () {
        var _localctx = new ClassCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, apexParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1331;
                this.arguments();
                this.state = 1333;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                    case 1:
                        {
                            this.state = 1332;
                            this.classBody();
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
    apexParser.prototype.explicitGenericInvocation = function () {
        var _localctx = new ExplicitGenericInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, apexParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1335;
                this.nonWildcardTypeArguments();
                this.state = 1336;
                this.explicitGenericInvocationSuffix();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.nonWildcardTypeArguments = function () {
        var _localctx = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, apexParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1338;
                this.match(apexParser.LT);
                this.state = 1339;
                this.typeList();
                this.state = 1340;
                this.match(apexParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    apexParser.prototype.typeArgumentsOrDiamond = function () {
        var _localctx = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, apexParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1345;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1342;
                        this.match(apexParser.LT);
                        this.state = 1343;
                        this.match(apexParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1344;
                        this.typeArguments();
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
    apexParser.prototype.nonWildcardTypeArgumentsOrDiamond = function () {
        var _localctx = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, apexParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1350;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1347;
                        this.match(apexParser.LT);
                        this.state = 1348;
                        this.match(apexParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1349;
                        this.nonWildcardTypeArguments();
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
    apexParser.prototype.superSuffix = function () {
        var _localctx = new SuperSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, apexParser.RULE_superSuffix);
        try {
            this.state = 1358;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1352;
                        this.arguments();
                    }
                    break;
                case apexParser.DOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1353;
                        this.match(apexParser.DOT);
                        this.state = 1354;
                        this.match(apexParser.Identifier);
                        this.state = 1356;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1355;
                                    this.arguments();
                                }
                                break;
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
    apexParser.prototype.explicitGenericInvocationSuffix = function () {
        var _localctx = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, apexParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1364;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case apexParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1360;
                        this.match(apexParser.SUPER);
                        this.state = 1361;
                        this.superSuffix();
                    }
                    break;
                case apexParser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1362;
                        this.match(apexParser.Identifier);
                        this.state = 1363;
                        this.arguments();
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
    apexParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, apexParser.RULE_arguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1366;
                this.match(apexParser.LPAREN);
                this.state = 1368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
                    {
                        this.state = 1367;
                        this.expressionList();
                    }
                }
                this.state = 1370;
                this.match(apexParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    apexParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 92:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    apexParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 13);
            case 1:
                return this.precpred(this._ctx, 12);
            case 2:
                return this.precpred(this._ctx, 11);
            case 3:
                return this.precpred(this._ctx, 10);
            case 4:
                return this.precpred(this._ctx, 8);
            case 5:
                return this.precpred(this._ctx, 7);
            case 6:
                return this.precpred(this._ctx, 6);
            case 7:
                return this.precpred(this._ctx, 5);
            case 8:
                return this.precpred(this._ctx, 4);
            case 9:
                return this.precpred(this._ctx, 3);
            case 10:
                return this.precpred(this._ctx, 2);
            case 11:
                return this.precpred(this._ctx, 1);
            case 12:
                return this.precpred(this._ctx, 28);
            case 13:
                return this.precpred(this._ctx, 27);
            case 14:
                return this.precpred(this._ctx, 26);
            case 15:
                return this.precpred(this._ctx, 25);
            case 16:
                return this.precpred(this._ctx, 24);
            case 17:
                return this.precpred(this._ctx, 23);
            case 18:
                return this.precpred(this._ctx, 22);
            case 19:
                return this.precpred(this._ctx, 21);
            case 20:
                return this.precpred(this._ctx, 20);
            case 21:
                return this.precpred(this._ctx, 19);
            case 22:
                return this.precpred(this._ctx, 16);
            case 23:
                return this.precpred(this._ctx, 9);
        }
        return true;
    };
    Object.defineProperty(apexParser, "_ATN", {
        get: function () {
            if (!apexParser.__ATN) {
                apexParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(apexParser._serializedATN));
            }
            return apexParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    apexParser.T__0 = 1;
    apexParser.SoqlLiteral = 2;
    apexParser.OVERRIDE = 3;
    apexParser.VIRTUAL = 4;
    apexParser.SET = 5;
    apexParser.GET = 6;
    apexParser.ABSTRACT = 7;
    apexParser.BREAK = 8;
    apexParser.BYTE = 9;
    apexParser.CATCH = 10;
    apexParser.CHAR = 11;
    apexParser.CLASS = 12;
    apexParser.CONST = 13;
    apexParser.CONTINUE = 14;
    apexParser.DEFAULT = 15;
    apexParser.DO = 16;
    apexParser.ELSE = 17;
    apexParser.ENUM = 18;
    apexParser.EXTENDS = 19;
    apexParser.FINAL = 20;
    apexParser.FINALLY = 21;
    apexParser.FLOAT = 22;
    apexParser.FOR = 23;
    apexParser.IF = 24;
    apexParser.GOTO = 25;
    apexParser.IMPLEMENTS = 26;
    apexParser.IMPORT = 27;
    apexParser.INSTANCEOF = 28;
    apexParser.INT = 29;
    apexParser.INTERFACE = 30;
    apexParser.NATIVE = 31;
    apexParser.NEW = 32;
    apexParser.PACKAGE = 33;
    apexParser.PRIVATE = 34;
    apexParser.PROTECTED = 35;
    apexParser.PUBLIC = 36;
    apexParser.RETURN = 37;
    apexParser.SHORT = 38;
    apexParser.STATIC = 39;
    apexParser.SUPER = 40;
    apexParser.SYNCHRONIZED = 41;
    apexParser.THIS = 42;
    apexParser.THROW = 43;
    apexParser.THROWS = 44;
    apexParser.TRANSIENT = 45;
    apexParser.TRY = 46;
    apexParser.VOID = 47;
    apexParser.VOLATILE = 48;
    apexParser.WHILE = 49;
    apexParser.GLOBAL = 50;
    apexParser.WEBSERVICE = 51;
    apexParser.APEX_WITH_SHARING = 52;
    apexParser.APEX_WITHOUT_SHARING = 53;
    apexParser.SELECT = 54;
    apexParser.DB_INSERT = 55;
    apexParser.DB_UPSERT = 56;
    apexParser.DB_UPDATE = 57;
    apexParser.DB_DELETE = 58;
    apexParser.DB_UNDELETE = 59;
    apexParser.TESTMETHOD = 60;
    apexParser.RUNAS = 61;
    apexParser.IntegerLiteral = 62;
    apexParser.FloatingPointLiteral = 63;
    apexParser.BooleanLiteral = 64;
    apexParser.CharacterLiteral = 65;
    apexParser.StringLiteral = 66;
    apexParser.NullLiteral = 67;
    apexParser.LPAREN = 68;
    apexParser.RPAREN = 69;
    apexParser.LBRACE = 70;
    apexParser.RBRACE = 71;
    apexParser.LBRACK = 72;
    apexParser.RBRACK = 73;
    apexParser.SEMI = 74;
    apexParser.COMMA = 75;
    apexParser.DOT = 76;
    apexParser.ASSIGN = 77;
    apexParser.GT = 78;
    apexParser.LT = 79;
    apexParser.BANG = 80;
    apexParser.TILDE = 81;
    apexParser.QUESTION = 82;
    apexParser.COLON = 83;
    apexParser.EQUAL = 84;
    apexParser.LE = 85;
    apexParser.GE = 86;
    apexParser.NOTEQUAL = 87;
    apexParser.AND = 88;
    apexParser.OR = 89;
    apexParser.INC = 90;
    apexParser.DEC = 91;
    apexParser.ADD = 92;
    apexParser.SUB = 93;
    apexParser.MUL = 94;
    apexParser.DIV = 95;
    apexParser.BITAND = 96;
    apexParser.BITOR = 97;
    apexParser.CARET = 98;
    apexParser.MOD = 99;
    apexParser.ADD_ASSIGN = 100;
    apexParser.SUB_ASSIGN = 101;
    apexParser.MUL_ASSIGN = 102;
    apexParser.DIV_ASSIGN = 103;
    apexParser.AND_ASSIGN = 104;
    apexParser.OR_ASSIGN = 105;
    apexParser.XOR_ASSIGN = 106;
    apexParser.MOD_ASSIGN = 107;
    apexParser.LSHIFT_ASSIGN = 108;
    apexParser.RSHIFT_ASSIGN = 109;
    apexParser.URSHIFT_ASSIGN = 110;
    apexParser.LAMBDA_LIKE = 111;
    apexParser.Identifier = 112;
    apexParser.AT = 113;
    apexParser.ELLIPSIS = 114;
    apexParser.WS = 115;
    apexParser.APEXDOC_COMMENT = 116;
    apexParser.APEXDOC_COMMENT_START = 117;
    apexParser.COMMENT = 118;
    apexParser.COMMENT_START = 119;
    apexParser.LINE_COMMENT = 120;
    apexParser.QUOTE = 121;
    apexParser.RULE_compilationUnit = 0;
    apexParser.RULE_packageDeclaration = 1;
    apexParser.RULE_importDeclaration = 2;
    apexParser.RULE_typeDeclaration = 3;
    apexParser.RULE_modifier = 4;
    apexParser.RULE_classOrInterfaceModifier = 5;
    apexParser.RULE_variableModifier = 6;
    apexParser.RULE_classDeclaration = 7;
    apexParser.RULE_typeParameters = 8;
    apexParser.RULE_typeParameter = 9;
    apexParser.RULE_typeBound = 10;
    apexParser.RULE_enumDeclaration = 11;
    apexParser.RULE_enumConstants = 12;
    apexParser.RULE_enumConstant = 13;
    apexParser.RULE_enumBodyDeclarations = 14;
    apexParser.RULE_interfaceDeclaration = 15;
    apexParser.RULE_typeList = 16;
    apexParser.RULE_classBody = 17;
    apexParser.RULE_interfaceBody = 18;
    apexParser.RULE_classBodyDeclaration = 19;
    apexParser.RULE_memberDeclaration = 20;
    apexParser.RULE_methodDeclaration = 21;
    apexParser.RULE_genericMethodDeclaration = 22;
    apexParser.RULE_constructorDeclaration = 23;
    apexParser.RULE_genericConstructorDeclaration = 24;
    apexParser.RULE_fieldDeclaration = 25;
    apexParser.RULE_propertyDeclaration = 26;
    apexParser.RULE_propertyBodyDeclaration = 27;
    apexParser.RULE_interfaceBodyDeclaration = 28;
    apexParser.RULE_interfaceMemberDeclaration = 29;
    apexParser.RULE_constDeclaration = 30;
    apexParser.RULE_constantDeclarator = 31;
    apexParser.RULE_interfaceMethodDeclaration = 32;
    apexParser.RULE_genericInterfaceMethodDeclaration = 33;
    apexParser.RULE_variableDeclarators = 34;
    apexParser.RULE_variableDeclarator = 35;
    apexParser.RULE_variableDeclaratorId = 36;
    apexParser.RULE_variableInitializer = 37;
    apexParser.RULE_arrayInitializer = 38;
    apexParser.RULE_enumConstantName = 39;
    apexParser.RULE_type = 40;
    apexParser.RULE_classOrInterfaceType = 41;
    apexParser.RULE_primitiveType = 42;
    apexParser.RULE_typeArguments = 43;
    apexParser.RULE_typeArgument = 44;
    apexParser.RULE_qualifiedNameList = 45;
    apexParser.RULE_formalParameters = 46;
    apexParser.RULE_formalParameterList = 47;
    apexParser.RULE_formalParameter = 48;
    apexParser.RULE_lastFormalParameter = 49;
    apexParser.RULE_methodBody = 50;
    apexParser.RULE_constructorBody = 51;
    apexParser.RULE_qualifiedName = 52;
    apexParser.RULE_literal = 53;
    apexParser.RULE_annotation = 54;
    apexParser.RULE_annotationName = 55;
    apexParser.RULE_elementValuePairs = 56;
    apexParser.RULE_elementValuePair = 57;
    apexParser.RULE_elementValue = 58;
    apexParser.RULE_elementValueArrayInitializer = 59;
    apexParser.RULE_annotationTypeDeclaration = 60;
    apexParser.RULE_annotationTypeBody = 61;
    apexParser.RULE_annotationTypeElementDeclaration = 62;
    apexParser.RULE_annotationTypeElementRest = 63;
    apexParser.RULE_annotationMethodOrConstantRest = 64;
    apexParser.RULE_annotationMethodRest = 65;
    apexParser.RULE_annotationConstantRest = 66;
    apexParser.RULE_defaultValue = 67;
    apexParser.RULE_block = 68;
    apexParser.RULE_blockStatement = 69;
    apexParser.RULE_localVariableDeclarationStatement = 70;
    apexParser.RULE_localVariableDeclaration = 71;
    apexParser.RULE_statement = 72;
    apexParser.RULE_propertyBlock = 73;
    apexParser.RULE_getter = 74;
    apexParser.RULE_setter = 75;
    apexParser.RULE_catchClause = 76;
    apexParser.RULE_catchType = 77;
    apexParser.RULE_finallyBlock = 78;
    apexParser.RULE_resourceSpecification = 79;
    apexParser.RULE_resources = 80;
    apexParser.RULE_resource = 81;
    apexParser.RULE_forControl = 82;
    apexParser.RULE_forInit = 83;
    apexParser.RULE_enhancedForControl = 84;
    apexParser.RULE_forUpdate = 85;
    apexParser.RULE_parExpression = 86;
    apexParser.RULE_expressionList = 87;
    apexParser.RULE_statementExpression = 88;
    apexParser.RULE_constantExpression = 89;
    apexParser.RULE_apexDbUpsertExpression = 90;
    apexParser.RULE_apexDbExpression = 91;
    apexParser.RULE_expression = 92;
    apexParser.RULE_primary = 93;
    apexParser.RULE_creator = 94;
    apexParser.RULE_createdName = 95;
    apexParser.RULE_innerCreator = 96;
    apexParser.RULE_arrayCreatorRest = 97;
    apexParser.RULE_mapCreatorRest = 98;
    apexParser.RULE_setCreatorRest = 99;
    apexParser.RULE_classCreatorRest = 100;
    apexParser.RULE_explicitGenericInvocation = 101;
    apexParser.RULE_nonWildcardTypeArguments = 102;
    apexParser.RULE_typeArgumentsOrDiamond = 103;
    apexParser.RULE_nonWildcardTypeArgumentsOrDiamond = 104;
    apexParser.RULE_superSuffix = 105;
    apexParser.RULE_explicitGenericInvocationSuffix = 106;
    apexParser.RULE_arguments = 107;
    // tslint:disable:no-trailing-whitespace
    apexParser.ruleNames = [
        "compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration",
        "modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration",
        "typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants",
        "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "typeList",
        "classBody", "interfaceBody", "classBodyDeclaration", "memberDeclaration",
        "methodDeclaration", "genericMethodDeclaration", "constructorDeclaration",
        "genericConstructorDeclaration", "fieldDeclaration", "propertyDeclaration",
        "propertyBodyDeclaration", "interfaceBodyDeclaration", "interfaceMemberDeclaration",
        "constDeclaration", "constantDeclarator", "interfaceMethodDeclaration",
        "genericInterfaceMethodDeclaration", "variableDeclarators", "variableDeclarator",
        "variableDeclaratorId", "variableInitializer", "arrayInitializer", "enumConstantName",
        "type", "classOrInterfaceType", "primitiveType", "typeArguments", "typeArgument",
        "qualifiedNameList", "formalParameters", "formalParameterList", "formalParameter",
        "lastFormalParameter", "methodBody", "constructorBody", "qualifiedName",
        "literal", "annotation", "annotationName", "elementValuePairs", "elementValuePair",
        "elementValue", "elementValueArrayInitializer", "annotationTypeDeclaration",
        "annotationTypeBody", "annotationTypeElementDeclaration", "annotationTypeElementRest",
        "annotationMethodOrConstantRest", "annotationMethodRest", "annotationConstantRest",
        "defaultValue", "block", "blockStatement", "localVariableDeclarationStatement",
        "localVariableDeclaration", "statement", "propertyBlock", "getter", "setter",
        "catchClause", "catchType", "finallyBlock", "resourceSpecification", "resources",
        "resource", "forControl", "forInit", "enhancedForControl", "forUpdate",
        "parExpression", "expressionList", "statementExpression", "constantExpression",
        "apexDbUpsertExpression", "apexDbExpression", "expression", "primary",
        "creator", "createdName", "innerCreator", "arrayCreatorRest", "mapCreatorRest",
        "setCreatorRest", "classCreatorRest", "explicitGenericInvocation", "nonWildcardTypeArguments",
        "typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "superSuffix",
        "explicitGenericInvocationSuffix", "arguments",
    ];
    apexParser._LITERAL_NAMES = [
        undefined, "'<>'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'{'",
        "'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'",
        "'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'",
        "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='",
        "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='",
        "'>>>='", "'=>'", undefined, "'@'", "'...'", undefined, undefined, "'/**'",
        undefined, "'/*'", undefined, "'''",
    ];
    apexParser._SYMBOLIC_NAMES = [
        undefined, undefined, "SoqlLiteral", "OVERRIDE", "VIRTUAL", "SET", "GET",
        "ABSTRACT", "BREAK", "BYTE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE",
        "DEFAULT", "DO", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT",
        "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE",
        "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", "RETURN",
        "SHORT", "STATIC", "SUPER", "SYNCHRONIZED", "THIS", "THROW", "THROWS",
        "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", "GLOBAL", "WEBSERVICE",
        "APEX_WITH_SHARING", "APEX_WITHOUT_SHARING", "SELECT", "DB_INSERT", "DB_UPSERT",
        "DB_UPDATE", "DB_DELETE", "DB_UNDELETE", "TESTMETHOD", "RUNAS", "IntegerLiteral",
        "FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", "StringLiteral",
        "NullLiteral", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK",
        "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION",
        "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD",
        "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN",
        "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN",
        "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "LAMBDA_LIKE",
        "Identifier", "AT", "ELLIPSIS", "WS", "APEXDOC_COMMENT", "APEXDOC_COMMENT_START",
        "COMMENT", "COMMENT_START", "LINE_COMMENT", "QUOTE",
    ];
    apexParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(apexParser._LITERAL_NAMES, apexParser._SYMBOLIC_NAMES, []);
    apexParser._serializedATNSegments = 3;
    apexParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03{\u055F\x04\x02" +
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
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x03\x02\x05\x02\xDC\n\x02\x03\x02" +
        "\x07\x02\xDF\n\x02\f\x02\x0E\x02\xE2\v\x02\x03\x02\x07\x02\xE5\n\x02\f" +
        "\x02\x0E\x02\xE8\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\xED\n\x03\f\x03" +
        "\x0E\x03\xF0\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05" +
        "\x04\xF8\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFD\n\x04\x03\x04\x03\x04" +
        "\x03\x05\x07\x05\u0102\n\x05\f\x05\x0E\x05\u0105\v\x05\x03\x05\x03\x05" +
        "\x07\x05\u0109\n\x05\f\x05\x0E\x05\u010C\v\x05\x03\x05\x03\x05\x07\x05" +
        "\u0110\n\x05\f\x05\x0E\x05\u0113\v\x05\x03\x05\x03\x05\x07\x05\u0117\n" +
        "\x05\f\x05\x0E\x05\u011A\v\x05\x03\x05\x03\x05\x05\x05\u011E\n\x05\x03" +
        "\x06\x03\x06\x05\x06\u0122\n\x06\x03\x07\x03\x07\x05\x07\u0126\n\x07\x03" +
        "\b\x03\b\x05\b\u012A\n\b\x03\t\x03\t\x03\t\x05\t\u012F\n\t\x03\t\x03\t" +
        "\x05\t\u0133\n\t\x03\t\x03\t\x05\t\u0137\n\t\x03\t\x03\t\x03\n\x03\n\x03" +
        "\n\x03\n\x07\n\u013F\n\n\f\n\x0E\n\u0142\v\n\x03\n\x03\n\x03\v\x03\v\x03" +
        "\v\x05\v\u0149\n\v\x03\f\x03\f\x03\f\x07\f\u014E\n\f\f\f\x0E\f\u0151\v" +
        "\f\x03\r\x03\r\x03\r\x03\r\x05\r\u0157\n\r\x03\r\x03\r\x05\r\u015B\n\r" +
        "\x03\r\x05\r\u015E\n\r\x03\r\x05\r\u0161\n\r\x03\r\x03\r\x03\x0E\x03\x0E" +
        "\x03\x0E\x07\x0E\u0168\n\x0E\f\x0E\x0E\x0E\u016B\v\x0E\x03\x0F\x07\x0F" +
        "\u016E\n\x0F\f\x0F\x0E\x0F\u0171\v\x0F\x03\x0F\x03\x0F\x05\x0F\u0175\n" +
        "\x0F\x03\x0F\x05\x0F\u0178\n\x0F\x03\x10\x03\x10\x07\x10\u017C\n\x10\f" +
        "\x10\x0E\x10\u017F\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0184\n\x11\x03" +
        "\x11\x03\x11\x05\x11\u0188\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
        "\x07\x12\u018F\n\x12\f\x12\x0E\x12\u0192\v\x12\x03\x13\x03\x13\x07\x13" +
        "\u0196\n\x13\f\x13\x0E\x13\u0199\v\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
        "\x07\x14\u019F\n\x14\f\x14\x0E\x14\u01A2\v\x14\x03\x14\x03\x14\x03\x15" +
        "\x03\x15\x05\x15\u01A8\n\x15\x03\x15\x03\x15\x07\x15\u01AC\n\x15\f\x15" +
        "\x0E\x15\u01AF\v\x15\x03\x15\x05\x15\u01B2\n\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01BE" +
        "\n\x16\x03\x17\x05\x17\u01C1\n\x17\x03\x17\x03\x17\x05\x17\u01C5\n\x17" +
        "\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u01CB\n\x17\f\x17\x0E\x17\u01CE" +
        "\v\x17\x03\x17\x03\x17\x05\x17\u01D2\n\x17\x03\x17\x03\x17\x05\x17\u01D6" +
        "\n\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
        "\u01DF\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05" +
        "\x1D\u01F1\n\x1D\x03\x1D\x03\x1D\x03\x1E\x07\x1E\u01F6\n\x1E\f\x1E\x0E" +
        "\x1E\u01F9\v\x1E\x03\x1E\x03\x1E\x05\x1E\u01FD\n\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0206\n\x1F\x03 \x03 \x03" +
        " \x03 \x07 \u020C\n \f \x0E \u020F\v \x03 \x03 \x03!\x03!\x03!\x07!\u0216" +
        "\n!\f!\x0E!\u0219\v!\x03!\x03!\x03!\x03\"\x03\"\x05\"\u0220\n\"\x03\"" +
        "\x03\"\x03\"\x03\"\x07\"\u0226\n\"\f\"\x0E\"\u0229\v\"\x03\"\x03\"\x05" +
        "\"\u022D\n\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x07$\u0237\n$\f" +
        "$\x0E$\u023A\v$\x03%\x03%\x03%\x05%\u023F\n%\x03&\x03&\x03&\x07&\u0244" +
        "\n&\f&\x0E&\u0247\v&\x03\'\x03\'\x05\'\u024B\n\'\x03(\x03(\x03(\x03(\x07" +
        "(\u0251\n(\f(\x0E(\u0254\v(\x03(\x05(\u0257\n(\x05(\u0259\n(\x03(\x03" +
        "(\x03)\x03)\x03*\x03*\x03*\x07*\u0262\n*\f*\x0E*\u0265\v*\x03*\x03*\x03" +
        "*\x07*\u026A\n*\f*\x0E*\u026D\v*\x05*\u026F\n*\x03+\x03+\x05+\u0273\n" +
        "+\x03+\x03+\x03+\x05+\u0278\n+\x07+\u027A\n+\f+\x0E+\u027D\v+\x03+\x03" +
        "+\x05+\u0281\n+\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u0289\n-\f-\x0E-\u028C" +
        "\v-\x03-\x03-\x03.\x03.\x03.\x03.\x05.\u0294\n.\x05.\u0296\n.\x03/\x03" +
        "/\x03/\x07/\u029B\n/\f/\x0E/\u029E\v/\x030\x030\x050\u02A2\n0\x030\x03" +
        "0\x031\x031\x031\x071\u02A9\n1\f1\x0E1\u02AC\v1\x031\x031\x051\u02B0\n" +
        "1\x031\x051\u02B3\n1\x032\x072\u02B6\n2\f2\x0E2\u02B9\v2\x032\x032\x03" +
        "2\x033\x073\u02BF\n3\f3\x0E3\u02C2\v3\x033\x033\x033\x033\x034\x034\x03" +
        "5\x035\x036\x036\x036\x076\u02CF\n6\f6\x0E6\u02D2\v6\x037\x037\x038\x03" +
        "8\x038\x038\x038\x058\u02DB\n8\x038\x058\u02DE\n8\x039\x039\x03:\x03:" +
        "\x03:\x07:\u02E5\n:\f:\x0E:\u02E8\v:\x03;\x03;\x03;\x03;\x03<\x03<\x03" +
        "<\x05<\u02F1\n<\x03=\x03=\x03=\x03=\x07=\u02F7\n=\f=\x0E=\u02FA\v=\x05" +
        "=\u02FC\n=\x03=\x05=\u02FF\n=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03?" +
        "\x03?\x07?\u030A\n?\f?\x0E?\u030D\v?\x03?\x03?\x03@\x07@\u0312\n@\f@\x0E" +
        "@\u0315\v@\x03@\x03@\x05@\u0319\n@\x03A\x03A\x03A\x03A\x03A\x03A\x05A" +
        "\u0321\nA\x03A\x03A\x05A\u0325\nA\x03A\x03A\x05A\u0329\nA\x03A\x03A\x05" +
        "A\u032D\nA\x05A\u032F\nA\x03B\x03B\x05B\u0333\nB\x03C\x03C\x03C\x03C\x05" +
        "C\u0339\nC\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x07F\u0342\nF\fF\x0EF\u0345" +
        "\vF\x03F\x03F\x03G\x03G\x03G\x05G\u034C\nG\x03H\x03H\x03H\x03I\x07I\u0352" +
        "\nI\fI\x0EI\u0355\vI\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x05" +
        "J\u0360\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x06" +
        "J\u037B\nJ\rJ\x0EJ\u037C\x03J\x05J\u0380\nJ\x03J\x05J\u0383\nJ\x03J\x03" +
        "J\x03J\x03J\x07J\u0389\nJ\fJ\x0EJ\u038C\vJ\x03J\x05J\u038F\nJ\x03J\x03" +
        "J\x05J\u0393\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u039C\nJ\x03J" +
        "\x03J\x03J\x05J\u03A1\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J" +
        "\x03J\x03J\x05J\u03AE\nJ\x03K\x07K\u03B1\nK\fK\x0EK\u03B4\vK\x03K\x03" +
        "K\x05K\u03B8\nK\x03L\x03L\x03L\x05L\u03BD\nL\x03M\x03M\x03M\x05M\u03C2" +
        "\nM\x03N\x03N\x03N\x07N\u03C7\nN\fN\x0EN\u03CA\vN\x03N\x03N\x03N\x03N" +
        "\x03N\x03O\x03O\x03O\x07O\u03D4\nO\fO\x0EO\u03D7\vO\x03P\x03P\x03P\x03" +
        "Q\x03Q\x03Q\x05Q\u03DF\nQ\x03Q\x03Q\x03R\x03R\x03R\x07R\u03E6\nR\fR\x0E" +
        "R\u03E9\vR\x03S\x07S\u03EC\nS\fS\x0ES\u03EF\vS\x03S\x03S\x03S\x03S\x03" +
        "S\x03T\x03T\x05T\u03F8\nT\x03T\x03T\x05T\u03FC\nT\x03T\x03T\x05T\u0400" +
        "\nT\x05T\u0402\nT\x03U\x03U\x05U\u0406\nU\x03V\x07V\u0409\nV\fV\x0EV\u040C" +
        "\vV\x03V\x03V\x03V\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x03X\x03Y\x03Y\x03" +
        "Y\x07Y\u041C\nY\fY\x0EY\u041F\vY\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03\\" +
        "\x07\\\u0428\n\\\f\\\x0E\\\u042B\v\\\x03]\x03]\x03]\x05]\u0430\n]\x03" +
        "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u043F" +
        "\n^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
        "^\x05^\u044F\n^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
        "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
        "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0475\n" +
        "^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u047D\n^\x03^\x03^\x03^\x03^\x03" +
        "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
        "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u049B\n^\x03^\x03" +
        "^\x03^\x03^\x03^\x03^\x07^\u04A3\n^\f^\x0E^\u04A6\v^\x03_\x03_\x03_\x03" +
        "_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
        "_\x03_\x05_\u04BB\n_\x03_\x05_\u04BE\n_\x03`\x03`\x03`\x03`\x03`\x03`" +
        "\x03`\x03`\x03`\x05`\u04C9\n`\x05`\u04CB\n`\x03a\x03a\x05a\u04CF\na\x03" +
        "a\x03a\x03a\x05a\u04D4\na\x07a\u04D6\na\fa\x0Ea\u04D9\va\x03a\x03a\x03" +
        "a\x05a\u04DE\na\x03b\x03b\x05b\u04E2\nb\x03b\x03b\x03c\x03c\x03c\x03c" +
        "\x07c\u04EA\nc\fc\x0Ec\u04ED\vc\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x07" +
        "c\u04F6\nc\fc\x0Ec\u04F9\vc\x03c\x03c\x07c\u04FD\nc\fc\x0Ec\u0500\vc\x05" +
        "c\u0502\nc\x03d\x03d\x03d\x03d\x05d\u0508\nd\x03d\x03d\x03d\x05d\u050D" +
        "\nd\x03d\x03d\x03d\x05d\u0512\nd\x03d\x03d\x03d\x05d\u0517\nd\x07d\u0519" +
        "\nd\fd\x0Ed\u051C\vd\x03d\x03d\x05d\u0520\nd\x03e\x03e\x03e\x03e\x05e" +
        "\u0526\ne\x03e\x03e\x03e\x05e\u052B\ne\x07e\u052D\ne\fe\x0Ee\u0530\ve" +
        "\x03e\x03e\x05e\u0534\ne\x03f\x03f\x05f\u0538\nf\x03g\x03g\x03g\x03h\x03" +
        "h\x03h\x03h\x03i\x03i\x03i\x05i\u0544\ni\x03j\x03j\x03j\x05j\u0549\nj" +
        "\x03k\x03k\x03k\x03k\x05k\u054F\nk\x05k\u0551\nk\x03l\x03l\x03l\x03l\x05" +
        "l\u0557\nl\x03m\x03m\x05m\u055B\nm\x03m\x03m\x03m\x02\x02\x03\xBAn\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
        ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
        "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
        "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
        "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
        "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
        "\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
        "\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
        "\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02" +
        "\x02\x11\x05\x02!!++//\t\x02\x05\x06\t\t\x16\x16$&))47>>\x07\x02\v\v\r" +
        "\r\x18\x18\x1F\x1F((\x04\x02\x15\x15**\x03\x02@E\x04\x0299;=\x03\x02\\" +
        "_\x03\x02RS\x04\x02`aee\x03\x02^_\x04\x02PQWX\x05\x02\x03\x03VVYY\x04" +
        "\x02OOfp\x03\x029=\x03\x02\\]\x02\u05DE\x02\xDB\x03\x02\x02\x02\x04\xEE" +
        "\x03\x02\x02\x02\x06\xF5\x03\x02\x02\x02\b\u011D\x03\x02\x02\x02\n\u0121" +
        "\x03\x02\x02\x02\f\u0125\x03\x02\x02\x02\x0E\u0129\x03\x02\x02\x02\x10" +
        "\u012B\x03\x02\x02\x02\x12\u013A\x03\x02\x02\x02\x14\u0145\x03\x02\x02" +
        "\x02\x16\u014A\x03\x02\x02\x02\x18\u0152\x03\x02\x02\x02\x1A\u0164\x03" +
        "\x02\x02\x02\x1C\u016F\x03\x02\x02\x02\x1E\u0179\x03\x02\x02\x02 \u0180" +
        "\x03\x02\x02\x02\"\u018B\x03\x02\x02\x02$\u0193\x03\x02\x02\x02&\u019C" +
        "\x03\x02\x02\x02(\u01B1\x03\x02\x02\x02*\u01BD\x03\x02\x02\x02,\u01C0" +
        "\x03\x02\x02\x02.\u01D7\x03\x02\x02\x020\u01DA\x03\x02\x02\x022\u01E2" +
        "\x03\x02\x02\x024\u01E5\x03\x02\x02\x026\u01E9\x03\x02\x02\x028\u01ED" +
        "\x03\x02\x02\x02:\u01FC\x03\x02\x02\x02<\u0205\x03\x02\x02\x02>\u0207" +
        "\x03\x02\x02\x02@\u0212\x03\x02\x02\x02B\u021F\x03\x02\x02\x02D\u0230" +
        "\x03\x02\x02\x02F\u0233\x03\x02\x02\x02H\u023B\x03\x02\x02\x02J\u0240" +
        "\x03\x02\x02\x02L\u024A\x03\x02\x02\x02N\u024C\x03\x02\x02\x02P\u025C" +
        "\x03\x02\x02\x02R\u026E\x03\x02\x02\x02T\u0280\x03\x02\x02\x02V\u0282" +
        "\x03\x02\x02\x02X\u0284\x03\x02\x02\x02Z\u0295\x03\x02\x02\x02\\\u0297" +
        "\x03\x02\x02\x02^\u029F\x03\x02\x02\x02`\u02B2\x03\x02\x02\x02b\u02B7" +
        "\x03\x02\x02\x02d\u02C0\x03\x02\x02\x02f\u02C7\x03\x02\x02\x02h\u02C9" +
        "\x03\x02\x02\x02j\u02CB\x03\x02\x02\x02l\u02D3\x03\x02\x02\x02n\u02D5" +
        "\x03\x02\x02\x02p\u02DF\x03\x02\x02\x02r\u02E1\x03\x02\x02\x02t\u02E9" +
        "\x03\x02\x02\x02v\u02F0\x03\x02\x02\x02x\u02F2\x03\x02\x02\x02z\u0302" +
        "\x03\x02\x02\x02|\u0307\x03\x02\x02\x02~\u0318\x03\x02\x02\x02\x80\u032E" +
        "\x03\x02\x02\x02\x82\u0332\x03\x02\x02\x02\x84\u0334\x03\x02\x02\x02\x86" +
        "\u033A\x03\x02\x02\x02\x88\u033C\x03\x02\x02\x02\x8A\u033F\x03\x02\x02" +
        "\x02\x8C\u034B\x03\x02\x02\x02\x8E\u034D\x03\x02\x02\x02\x90\u0353\x03" +
        "\x02\x02\x02\x92\u03AD\x03\x02\x02\x02\x94\u03B2\x03\x02\x02\x02\x96\u03B9" +
        "\x03\x02\x02\x02\x98\u03BE\x03\x02\x02\x02\x9A\u03C3\x03\x02\x02\x02\x9C" +
        "\u03D0\x03\x02\x02\x02\x9E\u03D8\x03\x02\x02\x02\xA0\u03DB\x03\x02\x02" +
        "\x02\xA2\u03E2\x03\x02\x02\x02\xA4\u03ED\x03\x02\x02\x02\xA6\u0401\x03" +
        "\x02\x02\x02\xA8\u0405\x03\x02\x02\x02\xAA\u040A\x03\x02\x02\x02\xAC\u0412" +
        "\x03\x02\x02\x02\xAE\u0414\x03\x02\x02\x02\xB0\u0418\x03\x02\x02\x02\xB2" +
        "\u0420\x03\x02\x02\x02\xB4\u0422\x03\x02\x02\x02\xB6\u0424\x03\x02\x02" +
        "\x02\xB8\u042F\x03\x02\x02\x02\xBA\u043E\x03\x02\x02\x02\xBC\u04BD\x03" +
        "\x02\x02\x02\xBE\u04CA\x03\x02\x02\x02\xC0\u04DD\x03\x02\x02\x02\xC2\u04DF" +
        "\x03\x02\x02\x02\xC4\u04E5\x03\x02\x02\x02\xC6\u0503\x03\x02\x02\x02\xC8" +
        "\u0521\x03\x02\x02\x02\xCA\u0535\x03\x02\x02\x02\xCC\u0539\x03\x02\x02" +
        "\x02\xCE\u053C\x03\x02\x02\x02\xD0\u0543\x03\x02\x02\x02\xD2\u0548\x03" +
        "\x02\x02\x02\xD4\u0550\x03\x02\x02\x02\xD6\u0556\x03\x02\x02\x02\xD8\u0558" +
        "\x03\x02\x02\x02\xDA\xDC\x05\x04\x03\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC" +
        "\x03\x02\x02\x02\xDC\xE0\x03\x02\x02\x02\xDD\xDF\x05\x06\x04\x02\xDE\xDD" +
        "\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1" +
        "\x03\x02\x02\x02\xE1\xE6\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE5" +
        "\x05\b\x05\x02\xE4\xE3\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4" +
        "\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6" +
        "\x03\x02\x02\x02\xE9\xEA\x07\x02\x02\x03\xEA\x03\x03\x02\x02\x02\xEB\xED" +
        "\x05n8\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03" +
        "\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03" +
        "\x02\x02\x02\xF1\xF2\x07#\x02\x02\xF2\xF3\x05j6\x02\xF3\xF4\x07L\x02\x02" +
        "\xF4\x05\x03\x02\x02\x02\xF5\xF7\x07\x1D\x02\x02\xF6\xF8\x07)\x02\x02" +
        "\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02" +
        "\xF9\xFC\x05j6\x02\xFA\xFB\x07N\x02\x02\xFB\xFD\x07`\x02\x02\xFC\xFA\x03" +
        "\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x07" +
        "L\x02\x02\xFF\x07\x03\x02\x02\x02\u0100\u0102\x05\f\x07\x02\u0101\u0100" +
        "\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02" +
        "\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03" +
        "\x02\x02\x02\u0106\u011E\x05\x10\t\x02\u0107\u0109\x05\f\x07\x02\u0108" +
        "\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02" +
        "\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C" +
        "\u010A\x03\x02\x02\x02\u010D\u011E\x05\x18\r\x02\u010E\u0110\x05\f\x07" +
        "\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F" +
        "\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02\x02\x02" +
        "\u0113\u0111\x03\x02\x02\x02\u0114\u011E\x05 \x11\x02\u0115\u0117\x05" +
        "\f\x07\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118" +
        "\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02" +
        "\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011E\x05z>\x02\u011C\u011E" +
        "\x07L\x02\x02\u011D\u0103\x03\x02\x02\x02\u011D\u010A\x03\x02\x02\x02" +
        "\u011D\u0111\x03\x02\x02\x02\u011D\u0118\x03\x02\x02\x02\u011D\u011C\x03" +
        "\x02\x02\x02\u011E\t\x03\x02\x02\x02\u011F\u0122\x05\f\x07\x02\u0120\u0122" +
        "\t\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0120\x03\x02\x02\x02" +
        "\u0122\v\x03\x02\x02\x02\u0123\u0126\x05n8\x02\u0124\u0126\t\x03\x02\x02" +
        "\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126\r\x03\x02" +
        "\x02\x02\u0127\u012A\x07\x16\x02\x02\u0128\u012A\x05n8\x02\u0129\u0127" +
        "\x03\x02\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A\x0F\x03\x02\x02\x02" +
        "\u012B\u012C\x07\x0E\x02\x02\u012C\u012E\x07r\x02\x02\u012D\u012F\x05" +
        "\x12\n\x02\u012E\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F" +
        "\u0132\x03\x02\x02\x02\u0130\u0131\x07\x15\x02\x02\u0131\u0133\x05R*\x02" +
        "\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0136\x03" +
        "\x02\x02\x02\u0134\u0135\x07\x1C\x02\x02\u0135\u0137\x05\"\x12\x02\u0136" +
        "\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02" +
        "\x02\x02\u0138\u0139\x05$\x13\x02\u0139\x11\x03\x02\x02\x02\u013A\u013B" +
        "\x07Q\x02\x02\u013B\u0140\x05\x14\v\x02\u013C\u013D\x07M\x02\x02\u013D" +
        "\u013F\x05\x14\v\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0142\x03\x02\x02" +
        "\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0143" +
        "\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0144\x07P\x02\x02" +
        "\u0144\x13\x03\x02\x02\x02\u0145\u0148\x07r\x02\x02\u0146\u0147\x07\x15" +
        "\x02\x02\u0147\u0149\x05\x16\f\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149" +
        "\x03\x02\x02\x02\u0149\x15\x03\x02\x02\x02\u014A\u014F\x05R*\x02\u014B" +
        "\u014C\x07b\x02\x02\u014C\u014E\x05R*\x02\u014D\u014B\x03\x02\x02\x02" +
        "\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03" +
        "\x02\x02\x02\u0150\x17\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152" +
        "\u0153\x07\x14\x02\x02\u0153\u0156\x07r\x02\x02\u0154\u0155\x07\x1C\x02" +
        "\x02\u0155\u0157\x05\"\x12\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157" +
        "\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x07H\x02\x02" +
        "\u0159\u015B\x05\x1A\x0E\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B\x03" +
        "\x02\x02\x02\u015B\u015D\x03\x02\x02\x02\u015C\u015E\x07M\x02\x02\u015D" +
        "\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02" +
        "\x02\x02\u015F\u0161\x05\x1E\x10\x02\u0160\u015F\x03\x02\x02\x02\u0160" +
        "\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x07I\x02" +
        "\x02\u0163\x19\x03\x02\x02\x02\u0164\u0169\x05\x1C\x0F\x02\u0165\u0166" +
        "\x07M\x02\x02\u0166\u0168\x05\x1C\x0F\x02\u0167\u0165\x03\x02\x02\x02" +
        "\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03" +
        "\x02\x02\x02\u016A\x1B\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C" +
        "\u016E\x05n8\x02\u016D\u016C\x03";
    apexParser._serializedATNSegment1 = "\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F" +
        "\u0170\x03\x02\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171\u016F\x03\x02" +
        "\x02\x02\u0172\u0174\x07r\x02\x02\u0173\u0175\x05\xD8m\x02\u0174\u0173" +
        "\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0177\x03\x02\x02\x02" +
        "\u0176\u0178\x05$\x13\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03" +
        "\x02\x02\x02\u0178\x1D\x03\x02\x02\x02\u0179\u017D\x07L\x02\x02\u017A" +
        "\u017C\x05(\x15\x02\u017B\u017A\x03\x02\x02\x02\u017C\u017F\x03\x02\x02" +
        "\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\x1F" +
        "\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0181\x07 \x02\x02" +
        "\u0181\u0183\x07r\x02\x02\u0182\u0184\x05\x12\n\x02\u0183\u0182\x03\x02" +
        "\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
        "\u0186\x07\x15\x02\x02\u0186\u0188\x05\"\x12\x02\u0187\u0185\x03\x02\x02" +
        "\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A" +
        "\x05&\x14\x02\u018A!\x03\x02\x02\x02\u018B\u0190\x05R*\x02\u018C\u018D" +
        "\x07M\x02\x02\u018D\u018F\x05R*\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
        "\u0192\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02" +
        "\x02\x02\u0191#\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0197" +
        "\x07H\x02\x02\u0194\u0196\x05(\x15\x02\u0195\u0194\x03\x02\x02\x02\u0196" +
        "\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02" +
        "\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A" +
        "\u019B\x07I\x02\x02\u019B%\x03\x02\x02\x02\u019C\u01A0\x07H\x02\x02\u019D" +
        "\u019F\x05:\x1E\x02\u019E\u019D\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02" +
        "\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A3" +
        "\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A4\x07I\x02\x02" +
        "\u01A4\'\x03\x02\x02\x02\u01A5\u01B2\x07L\x02\x02\u01A6\u01A8\x07)\x02" +
        "\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9" +
        "\x03\x02\x02\x02\u01A9\u01B2\x05\x8AF\x02\u01AA\u01AC\x05\n\x06\x02\u01AB" +
        "\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02" +
        "\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF" +
        "\u01AD\x03\x02\x02\x02\u01B0\u01B2\x05*\x16\x02\u01B1\u01A5\x03\x02\x02" +
        "\x02\u01B1\u01A7\x03\x02\x02\x02\u01B1\u01AD\x03\x02\x02\x02\u01B2)\x03" +
        "\x02\x02\x02\u01B3\u01BE\x05,\x17\x02\u01B4\u01BE\x05.\x18\x02\u01B5\u01BE" +
        "\x054\x1B\x02\u01B6\u01BE\x050\x19\x02\u01B7\u01BE\x052\x1A\x02\u01B8" +
        "\u01BE\x05 \x11\x02\u01B9\u01BE\x05z>\x02\u01BA\u01BE\x05\x10\t\x02\u01BB" +
        "\u01BE\x05\x18\r\x02\u01BC\u01BE\x056\x1C\x02\u01BD\u01B3\x03\x02\x02" +
        "\x02\u01BD\u01B4\x03\x02\x02\x02\u01BD\u01B5\x03\x02\x02\x02\u01BD\u01B6" +
        "\x03\x02\x02\x02\u01BD\u01B7\x03\x02\x02\x02\u01BD\u01B8\x03\x02\x02\x02" +
        "\u01BD\u01B9\x03\x02\x02\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03" +
        "\x02\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE+\x03\x02\x02\x02\u01BF" +
        "\u01C1\x07\x05\x02\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02" +
        "\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C5\x05R*\x02\u01C3\u01C5" +
        "\x071\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C3\x03\x02\x02\x02" +
        "\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x07r\x02\x02\u01C7\u01CC\x05" +
        "^0\x02\u01C8\u01C9\x07J\x02\x02\u01C9\u01CB\x07K\x02\x02\u01CA\u01C8\x03" +
        "\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC" +
        "\u01CD\x03\x02\x02\x02\u01CD\u01D1\x03\x02\x02\x02\u01CE\u01CC\x03\x02" +
        "\x02\x02\u01CF\u01D0\x07.\x02\x02\u01D0\u01D2\x05\\/\x02\u01D1\u01CF\x03" +
        "\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3" +
        "\u01D6\x05f4\x02\u01D4\u01D6\x07L\x02\x02\u01D5\u01D3\x03\x02\x02\x02" +
        "\u01D5\u01D4\x03\x02\x02\x02\u01D6-\x03\x02\x02\x02\u01D7\u01D8\x05\x12" +
        "\n\x02\u01D8\u01D9\x05,\x17\x02\u01D9/\x03\x02\x02\x02\u01DA\u01DB\x07" +
        "r\x02\x02\u01DB\u01DE\x05^0\x02\u01DC\u01DD\x07.\x02\x02\u01DD\u01DF\x05" +
        "\\/\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
        "\u01E0\x03\x02\x02\x02\u01E0\u01E1\x05h5\x02\u01E11\x03\x02\x02\x02\u01E2" +
        "\u01E3\x05\x12\n\x02\u01E3\u01E4\x050\x19\x02\u01E43\x03\x02\x02\x02\u01E5" +
        "\u01E6\x05R*\x02\u01E6\u01E7\x05F$\x02\u01E7\u01E8\x07L\x02\x02\u01E8" +
        "5\x03\x02\x02\x02\u01E9\u01EA\x05R*\x02\u01EA\u01EB\x05F$\x02\u01EB\u01EC" +
        "\x058\x1D\x02\u01EC7\x03\x02\x02\x02\u01ED\u01EE\x07H\x02\x02\u01EE\u01F0" +
        "\x05\x94K\x02\u01EF\u01F1\x05\x94K\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0" +
        "\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x07I\x02" +
        "\x02\u01F39\x03\x02\x02\x02\u01F4\u01F6\x05\n\x06\x02\u01F5\u01F4\x03" +
        "\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7" +
        "\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F7\x03\x02" +
        "\x02\x02\u01FA\u01FD\x05<\x1F\x02\u01FB\u01FD\x07L\x02\x02\u01FC\u01F7" +
        "\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD;\x03\x02\x02\x02\u01FE" +
        "\u0206\x05> \x02\u01FF\u0206\x05B\"\x02\u0200\u0206\x05D#\x02\u0201\u0206" +
        "\x05 \x11\x02\u0202\u0206\x05z>\x02\u0203\u0206\x05\x10\t\x02\u0204\u0206" +
        "\x05\x18\r\x02\u0205\u01FE\x03\x02\x02\x02\u0205\u01FF\x03\x02\x02\x02" +
        "\u0205\u0200\x03\x02\x02\x02\u0205\u0201\x03\x02\x02\x02\u0205\u0202\x03" +
        "\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206" +
        "=\x03\x02\x02\x02\u0207\u0208\x05R*\x02\u0208\u020D\x05@!\x02\u0209\u020A" +
        "\x07M\x02\x02\u020A\u020C\x05@!\x02\u020B\u0209\x03\x02\x02\x02\u020C" +
        "\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02" +
        "\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u0210" +
        "\u0211\x07L\x02\x02\u0211?\x03\x02\x02\x02\u0212\u0217\x07r\x02\x02\u0213" +
        "\u0214\x07J\x02\x02\u0214\u0216\x07K\x02\x02\u0215\u0213\x03\x02\x02\x02" +
        "\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03" +
        "\x02\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A" +
        "\u021B\x07O\x02\x02\u021B\u021C\x05L\'\x02\u021CA\x03\x02\x02\x02\u021D" +
        "\u0220\x05R*\x02\u021E\u0220\x071\x02\x02\u021F\u021D\x03\x02\x02\x02" +
        "\u021F\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x07" +
        "r\x02\x02\u0222\u0227\x05^0\x02\u0223\u0224\x07J\x02\x02\u0224\u0226\x07" +
        "K\x02\x02\u0225\u0223\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227" +
        "\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u022C\x03\x02" +
        "\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A\u022B\x07.\x02\x02\u022B\u022D" +
        "\x05\\/\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D" +
        "\u022E\x03\x02\x02\x02\u022E\u022F\x07L\x02\x02\u022FC\x03\x02\x02\x02" +
        "\u0230\u0231\x05\x12\n\x02\u0231\u0232\x05B\"\x02\u0232E\x03\x02\x02\x02" +
        "\u0233\u0238\x05H%\x02\u0234\u0235\x07M\x02\x02\u0235\u0237\x05H%\x02" +
        "\u0236\u0234\x03\x02\x02\x02\u0237\u023A\x03\x02\x02\x02\u0238\u0236\x03" +
        "\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239G\x03\x02\x02\x02\u023A" +
        "\u0238\x03\x02\x02\x02\u023B\u023E\x05J&\x02\u023C\u023D\x07O\x02\x02" +
        "\u023D\u023F\x05L\'\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02" +
        "\x02\x02\u023FI\x03\x02\x02\x02\u0240\u0245\x07r\x02\x02\u0241\u0242\x07" +
        "J\x02\x02\u0242\u0244\x07K\x02\x02\u0243\u0241\x03\x02\x02\x02\u0244\u0247" +
        "\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02" +
        "\u0246K\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024B\x05N(" +
        "\x02\u0249\u024B\x05\xBA^\x02\u024A\u0248\x03\x02\x02\x02\u024A\u0249" +
        "\x03\x02\x02\x02\u024BM\x03\x02\x02\x02\u024C\u0258\x07H\x02\x02\u024D" +
        "\u0252\x05L\'\x02\u024E\u024F\x07M\x02\x02\u024F\u0251\x05L\'\x02\u0250" +
        "\u024E\x03\x02\x02\x02\u0251\u0254\x03\x02\x02\x02\u0252\u0250\x03\x02" +
        "\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0256\x03\x02\x02\x02\u0254" +
        "\u0252\x03\x02\x02\x02\u0255\u0257\x07M\x02\x02\u0256\u0255\x03\x02\x02" +
        "\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0259\x03\x02\x02\x02\u0258\u024D" +
        "\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02" +
        "\u025A\u025B\x07I\x02\x02\u025BO\x03\x02\x02\x02\u025C\u025D\x07r\x02" +
        "\x02\u025DQ\x03\x02\x02\x02\u025E\u0263\x05T+\x02\u025F\u0260\x07J\x02" +
        "\x02\u0260\u0262\x07K\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0265" +
        "\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02" +
        "\u0264\u026F\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u026B\x05" +
        "V,\x02\u0267\u0268\x07J\x02\x02\u0268\u026A\x07K\x02\x02\u0269\u0267\x03" +
        "\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B" +
        "\u026C\x03\x02\x02\x02\u026C\u026F\x03\x02\x02\x02\u026D\u026B\x03\x02" +
        "\x02\x02\u026E\u025E\x03\x02\x02\x02\u026E\u0266\x03\x02\x02\x02\u026F" +
        "S\x03\x02\x02\x02\u0270\u0272\x07r\x02\x02\u0271\u0273\x05X-\x02\u0272" +
        "\u0271\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u027B\x03\x02" +
        "\x02\x02\u0274\u0275\x07N\x02\x02\u0275\u0277\x07r\x02\x02\u0276\u0278" +
        "\x05X-\x02\u0277\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278" +
        "\u027A\x03\x02\x02\x02\u0279\u0274\x03\x02\x02\x02\u027A\u027D\x03\x02" +
        "\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C" +
        "\u0281\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u027F\x07\x07" +
        "\x02\x02\u027F\u0281\x05X-\x02\u0280\u0270\x03\x02\x02\x02\u0280\u027E" +
        "\x03\x02\x02\x02\u0281U\x03\x02\x02\x02\u0282\u0283\t\x04\x02\x02\u0283" +
        "W\x03\x02\x02\x02\u0284\u0285\x07Q\x02\x02\u0285\u028A\x05Z.\x02\u0286" +
        "\u0287\x07M\x02\x02\u0287\u0289\x05Z.\x02\u0288\u0286\x03\x02\x02\x02" +
        "\u0289\u028C\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028A\u028B\x03" +
        "\x02\x02\x02\u028B\u028D\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D" +
        "\u028E\x07P\x02\x02\u028EY\x03\x02\x02\x02\u028F\u0296\x05R*\x02\u0290" +
        "\u0293\x07T\x02\x02\u0291\u0292\t\x05\x02\x02\u0292\u0294\x05R*\x02\u0293" +
        "\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0296\x03\x02" +
        "\x02\x02\u0295\u028F\x03\x02\x02\x02\u0295\u0290\x03\x02\x02\x02\u0296" +
        "[\x03\x02\x02\x02\u0297\u029C\x05j6\x02\u0298\u0299\x07M\x02\x02\u0299" +
        "\u029B\x05j6\x02\u029A\u0298\x03\x02\x02\x02\u029B\u029E\x03\x02\x02\x02" +
        "\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D]\x03\x02" +
        "\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A1\x07F\x02\x02\u02A0\u02A2" +
        "\x05`1\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
        "\u02A3\x03\x02\x02\x02\u02A3\u02A4\x07G\x02\x02\u02A4_\x03\x02\x02\x02" +
        "\u02A5\u02AA\x05b2\x02\u02A6\u02A7\x07M\x02\x02\u02A7\u02A9\x05b2\x02" +
        "\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03" +
        "\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AF\x03\x02\x02\x02\u02AC" +
        "\u02AA\x03\x02\x02\x02\u02AD\u02AE\x07M\x02\x02\u02AE\u02B0\x05d3\x02" +
        "\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B3\x03" +
        "\x02\x02\x02\u02B1\u02B3\x05d3\x02\u02B2\u02A5\x03\x02\x02\x02\u02B2\u02B1" +
        "\x03\x02\x02\x02\u02B3a\x03\x02\x02\x02\u02B4\u02B6\x05\x0E\b\x02\u02B5" +
        "\u02B4\x03\x02\x02\x02\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5\x03\x02" +
        "\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BA\x03\x02\x02\x02\u02B9" +
        "\u02B7\x03\x02\x02\x02\u02BA\u02BB\x05R*\x02\u02BB\u02BC\x05J&\x02\u02BC" +
        "c\x03\x02\x02\x02\u02BD\u02BF\x05\x0E\b\x02\u02BE\u02BD\x03\x02\x02\x02" +
        "\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03" +
        "\x02\x02\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3" +
        "\u02C4\x05R*\x02\u02C4\u02C5\x07t\x02\x02\u02C5\u02C6\x05J&\x02\u02C6" +
        "e\x03\x02\x02\x02\u02C7\u02C8\x05\x8AF\x02\u02C8g\x03\x02\x02\x02\u02C9" +
        "\u02CA\x05\x8AF\x02\u02CAi\x03\x02\x02\x02\u02CB\u02D0\x07r\x02\x02\u02CC" +
        "\u02CD\x07N\x02\x02\u02CD\u02CF\x07r\x02\x02\u02CE\u02CC\x03\x02\x02\x02" +
        "\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03" +
        "\x02\x02\x02\u02D1k\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3" +
        "\u02D4\t\x06\x02\x02\u02D4m\x03\x02\x02\x02\u02D5\u02D6\x07s\x02\x02\u02D6" +
        "\u02DD\x05p9\x02\u02D7\u02DA\x07F\x02\x02\u02D8\u02DB\x05r:\x02\u02D9" +
        "\u02DB\x05v<\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02D9\x03\x02\x02\x02" +
        "\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x07" +
        "G\x02\x02\u02DD\u02D7\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
        "o\x03\x02\x02\x02\u02DF\u02E0\x05j6\x02\u02E0q\x03\x02\x02\x02\u02E1\u02E6" +
        "\x05t;\x02\u02E2\u02E3\x07M\x02\x02\u02E3\u02E5\x05t;\x02\u02E4\u02E2" +
        "\x03\x02\x02\x02\u02E5\u02E8\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02" +
        "\u02E6\u02E7\x03\x02\x02\x02\u02E7s\x03\x02\x02\x02\u02E8\u02E6\x03\x02" +
        "\x02\x02\u02E9\u02EA\x07r\x02\x02\u02EA\u02EB\x07O\x02\x02\u02EB\u02EC" +
        "\x05v<\x02\u02ECu\x03\x02\x02\x02\u02ED\u02F1\x05\xBA^\x02\u02EE\u02F1" +
        "\x05n8\x02\u02EF\u02F1\x05x=\x02\u02F0\u02ED\x03\x02\x02\x02\u02F0\u02EE" +
        "\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1w\x03\x02\x02\x02\u02F2" +
        "\u02FB\x07H\x02\x02\u02F3\u02F8\x05v<\x02\u02F4\u02F5\x07M\x02\x02\u02F5" +
        "\u02F7\x05v<\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02" +
        "\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FC\x03" +
        "\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02F3\x03\x02\x02\x02\u02FB" +
        "\u02FC\x03\x02\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02FF\x07M\x02" +
        "\x02\u02FE\u02FD\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300" +
        "\x03\x02\x02\x02\u0300\u0301\x07I\x02\x02\u0301y\x03\x02\x02\x02\u0302" +
        "\u0303\x07s\x02\x02\u0303\u0304\x07 \x02\x02\u0304\u0305\x07r\x02\x02" +
        "\u0305\u0306\x05|?\x02\u0306{\x03\x02\x02\x02\u0307\u030B\x07H\x02\x02" +
        "\u0308\u030A\x05~@\x02\u0309\u0308\x03\x02\x02\x02\u030A\u030D\x03\x02" +
        "\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C" +
        "\u030E\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030E\u030F\x07I\x02" +
        "\x02\u030F}\x03\x02\x02\x02\u0310\u0312\x05\n\x06\x02\u0311\u0310\x03" +
        "\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313" +
        "\u0314\x03\x02\x02\x02\u0314\u0316\x03\x02\x02\x02\u0315\u0313\x03\x02" +
        "\x02\x02\u0316\u0319\x05\x80A\x02\u0317\u0319\x07L\x02\x02\u0318\u0313" +
        "\x03\x02\x02\x02\u0318\u0317\x03\x02\x02\x02\u0319\x7F\x03\x02\x02\x02" +
        "\u031A\u031B\x05R*\x02\u031B\u031C\x05\x82B\x02\u031C\u031D\x07L\x02\x02" +
        "\u031D\u032F\x03\x02\x02\x02\u031E\u0320\x05\x10\t\x02\u031F\u0321\x07" +
        "L\x02\x02\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321" +
        "\u032F\x03\x02\x02\x02\u0322\u0324\x05 \x11\x02\u0323\u0325\x07L\x02\x02" +
        "\u0324\u0323\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u032F\x03" +
        "\x02\x02\x02\u0326\u0328\x05\x18\r\x02\u0327\u0329\x07L\x02\x02\u0328" +
        "\u0327\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032F\x03\x02" +
        "\x02\x02\u032A\u032C\x05z>\x02\u032B\u032D\x07L\x02\x02\u032C\u032B\x03" +
        "\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032F\x03\x02\x02\x02\u032E" +
        "\u031A\x03\x02\x02\x02\u032E\u031E\x03\x02\x02\x02\u032E\u0322\x03\x02" +
        "\x02\x02\u032E\u0326\x03\x02\x02\x02\u032E\u032A\x03\x02\x02\x02\u032F" +
        "\x81\x03\x02\x02\x02\u0330\u0333\x05\x84C\x02\u0331\u0333\x05\x86D\x02" +
        "\u0332\u0330\x03\x02\x02\x02\u0332\u0331\x03\x02\x02\x02\u0333\x83\x03" +
        "\x02\x02\x02\u0334\u0335\x07r\x02\x02\u0335\u0336\x07F\x02\x02\u0336\u0338" +
        "\x07G\x02\x02\u0337\u0339\x05\x88E\x02\u0338\u0337\x03\x02\x02\x02\u0338" +
        "\u0339\x03\x02\x02\x02\u0339\x85\x03\x02\x02\x02\u033A\u033B\x05F$\x02" +
        "\u033B\x87\x03\x02\x02\x02\u033C\u033D\x07\x11\x02\x02\u033D\u033E\x05" +
        "v<\x02\u033E\x89\x03\x02\x02\x02\u033F\u0343\x07H\x02\x02\u0340\u0342" +
        "\x05\x8CG\x02\u0341\u0340\x03\x02\x02\x02\u0342\u0345\x03\x02\x02\x02" +
        "\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0346\x03" +
        "\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0346\u0347\x07I\x02\x02\u0347" +
        "\x8B\x03\x02\x02\x02\u0348\u034C\x05\x8EH\x02\u0349\u034C\x05\x92J\x02" +
        "\u034A\u034C\x05\b\x05\x02\u034B\u0348\x03\x02\x02\x02\u034B\u0349\x03" +
        "\x02\x02\x02\u034B\u034A\x03\x02\x02\x02\u034C\x8D\x03\x02\x02\x02\u034D" +
        "\u034E\x05\x90I\x02\u034E\u034F\x07L\x02\x02\u034F\x8F\x03\x02\x02\x02" +
        "\u0350\u0352\x05\x0E\b\x02\u0351\u0350\x03\x02\x02\x02\u0352\u0355\x03" +
        "\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354" +
        "\u0356\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0356\u0357\x05R*\x02" +
        "\u0357\u0358\x05F$\x02\u0358\x91\x03\x02\x02\x02\u0359\u03AE\x05\x8AF" +
        "\x02\u035A\u035B\x07\x1A\x02\x02\u035B\u035C\x05\xAEX\x02\u035C\u035F" +
        "\x05\x92J\x02\u035D\u035E\x07\x13\x02\x02\u035E\u0360\x05\x92J\x02\u035F" +
        "\u035D\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u03AE\x03\x02" +
        "\x02\x02\u0361\u0362\x07\x19\x02\x02\u0362\u0363\x07F\x02\x02\u0363\u0364" +
        "\x05\xA6T\x02\u0364\u0365\x07G\x02\x02\u0365\u0366\x05\x92J\x02\u0366" +
        "\u03AE\x03\x02\x02\x02\u0367\u0368\x073\x02\x02\u0368\u0369\x05\xAEX\x02" +
        "\u0369\u036A\x05\x92J\x02\u036A\u03AE\x03\x02\x02\x02\u036B\u036C\x07" +
        "\x12\x02\x02\u036C\u036D\x05\x92J\x02\u036D\u036E\x073\x02\x02\u036E\u036F" +
        "\x05\xAEX\x02\u036F\u0370\x07L\x02\x02\u0370\u03AE\x03\x02\x02\x02\u0371" +
        "\u0372\x07?\x02\x02\u0372\u0373\x07F\x02\x02\u0373\u0374\x05\xBA^\x02" +
        "\u0374\u0375\x07G\x02\x02\u0375\u0376\x05\x92J\x02\u0376\u03AE\x03\x02" +
        "\x02\x02\u0377\u0378\x070\x02\x02\u0378\u0382\x05\x8AF\x02\u0379\u037B" +
        "\x05\x9AN\x02\u037A\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02" +
        "\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037F\x03" +
        "\x02\x02\x02\u037E\u0380\x05\x9EP\x02\u037F\u037E\x03\x02\x02\x02\u037F" +
        "\u0380\x03\x02\x02\x02\u0380\u0383\x03\x02\x02\x02\u0381\u0383\x05\x9E" +
        "P\x02\u0382\u037A\x03\x02\x02\x02\u0382\u0381\x03\x02\x02\x02\u0383\u03AE" +
        "\x03\x02\x02\x02\u0384\u0385\x070\x02\x02\u0385\u0386\x05\xA0Q\x02\u0386" +
        "\u038A\x05\x8AF\x02\u0387\u0389\x05\x9AN\x02\u0388\u0387\x03\x02\x02\x02" +
        "\u0389\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u038B\x03" +
        "\x02\x02\x02\u038B\u038E\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038D" +
        "\u038F\x05\x9EP\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02" +
        "\x02\u038F\u03AE\x03\x02\x02\x02\u0390\u0392\x07\'\x02\x02\u0391\u0393" +
        "\x05\xBA^\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02" +
        "\u0393\u0394\x03\x02\x02\x02\u0394\u03AE\x07L\x02\x02\u0395\u0396\x07" +
        "-\x02\x02\u0396\u0397\x05\xBA^\x02\u0397\u0398\x07L\x02\x02\u0398\u03AE" +
        "\x03\x02\x02\x02\u0399\u039B\x07\n\x02\x02\u039A\u039C\x07r\x02\x02\u039B" +
        "\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x03\x02" +
        "\x02\x02\u039D\u03AE\x07L\x02\x02\u039E\u03A0\x07\x10\x02\x02\u039F\u03A1" +
        "\x07r\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02" +
        "\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03AE\x07L\x02\x02\u03A3\u03AE\x07" +
        "L\x02\x02\u03A4\u03A5\x05\xB2Z\x02\u03A5\u03A6\x07L\x02\x02\u03A6\u03AE" +
        "\x03\x02\x02\x02\u03A7\u03A8\x07r\x02\x02\u03A8\u03A9\x07U\x02\x02\u03A9" +
        "\u03AE\x05\x92J\x02\u03AA\u03AB\x05\xB8]\x02\u03AB\u03AC\x07L\x02\x02" +
        "\u03AC\u03AE\x03\x02\x02\x02\u03AD\u0359\x03\x02\x02\x02\u03AD\u035A\x03" +
        "\x02\x02\x02\u03AD\u0361\x03\x02\x02\x02\u03AD\u0367\x03\x02\x02\x02\u03AD" +
        "\u036B\x03\x02\x02\x02\u03AD\u0371\x03\x02\x02\x02\u03AD\u0377\x03\x02" +
        "\x02\x02\u03AD\u0384\x03\x02\x02\x02\u03AD\u0390\x03\x02\x02\x02\u03AD" +
        "\u0395\x03\x02\x02\x02\u03AD\u0399\x03\x02\x02\x02\u03AD\u039E\x03\x02" +
        "\x02\x02\u03AD\u03A3\x03\x02\x02\x02\u03AD\u03A4\x03\x02\x02\x02\u03AD" +
        "\u03A7\x03\x02\x02\x02\u03AD\u03AA\x03\x02\x02\x02\u03AE\x93\x03\x02\x02" +
        "\x02\u03AF\u03B1\x05\n\x06\x02\u03B0\u03AF\x03\x02\x02\x02\u03B1\u03B4" +
        "\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02" +
        "\u03B3\u03B7\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B5\u03B8\x05" +
        "\x96L\x02\u03B6\u03B8\x05\x98M\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B6" +
        "\x03\x02\x02\x02\u03B8\x95\x03\x02\x02\x02\u03B9\u03BC\x07\b\x02\x02\u03BA" +
        "\u03BD\x07L\x02\x02\u03BB\u03BD\x05f4\x02\u03BC\u03BA\x03\x02\x02\x02" +
        "\u03BC\u03BB\x03\x02\x02\x02\u03BD\x97\x03\x02\x02\x02\u03BE\u03C1\x07" +
        "\x07\x02\x02\u03BF\u03C2\x07L\x02\x02\u03C0\u03C2\x05f4\x02\u03C1\u03BF" +
        "\x03\x02\x02\x02\u03C1\u03C0\x03\x02\x02\x02\u03C2\x99\x03\x02\x02\x02" +
        "\u03C3\u03C4\x07\f\x02\x02\u03C4\u03C8\x07F\x02\x02\u03C5\u03C7\x05\x0E" +
        "\b\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03CA\x03\x02\x02\x02\u03C8\u03C6" +
        "\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CB\x03\x02\x02\x02" +
        "\u03CA\u03C8\x03\x02\x02\x02\u03CB\u03CC\x05\x9CO\x02\u03CC\u03CD\x07" +
        "r\x02\x02\u03CD\u03CE\x07G\x02\x02\u03CE\u03CF\x05\x8AF\x02\u03CF\x9B" +
        "\x03\x02\x02\x02\u03D0\u03D5\x05j6\x02\u03D1\u03D2\x07c\x02\x02\u03D2" +
        "\u03D4\x05j6\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03D7\x03\x02\x02\x02" +
        "\u03D5\u03D3\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\x9D\x03" +
        "\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02\u03D8\u03D9\x07\x17\x02\x02\u03D9" +
        "\u03DA\x05\x8AF\x02\u03DA\x9F\x03\x02\x02\x02\u03DB\u03DC\x07F\x02\x02" +
        "\u03DC\u03DE\x05\xA2R\x02\u03DD\u03DF\x07L\x02\x02\u03DE\u03DD\x03\x02" +
        "\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0" +
        "\u03E1\x07G\x02\x02\u03E1\xA1\x03\x02\x02\x02\u03E2\u03E7\x05\xA4S\x02" +
        "\u03E3\u03E4\x07L\x02\x02\u03E4\u03E6\x05\xA4S\x02\u03E5\u03E3\x03\x02" +
        "\x02\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7" +
        "\u03E8\x03\x02\x02\x02\u03E8\xA3\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02" +
        "\x02\u03EA\u03EC\x05\x0E\b\x02\u03EB\u03EA\x03\x02\x02\x02\u03EC\u03EF" +
        "\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02" +
        "\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03F0\u03F1\x05" +
        "T+\x02\u03F1\u03F2\x05J&\x02\u03F2\u03F3\x07O\x02\x02\u03F3\u03F4\x05" +
        "\xBA^\x02\u03F4\xA5\x03\x02\x02\x02\u03F5\u0402\x05\xAAV\x02\u03F6\u03F8" +
        "\x05\xA8U\x02\u03F7\u03F6\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02" +
        "\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FB\x07L\x02\x02\u03FA\u03FC\x05" +
        "\xBA^\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC" +
        "\u03FD\x03\x02\x02\x02\u03FD\u03FF\x07L\x02\x02\u03FE\u0400\x05\xACW\x02" +
        "\u03FF\u03FE\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402\x03" +
        "\x02\x02\x02\u0401\u03F5\x03\x02\x02\x02\u0401\u03F7\x03\x02\x02\x02\u0402" +
        "\xA7\x03\x02\x02\x02\u0403\u0406\x05\x90I\x02\u0404\u0406\x05\xB0Y\x02" +
        "\u0405\u0403\x03\x02\x02\x02\u0405\u0404\x03\x02\x02\x02\u0406\xA9\x03" +
        "\x02\x02\x02\u0407\u0409\x05\x0E\b\x02\u0408\u0407\x03\x02\x02\x02\u0409" +
        "\u040C\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B\x03\x02" +
        "\x02\x02\u040B\u040D\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040D" +
        "\u040E\x05R*\x02\u040E\u040F\x05J&\x02\u040F\u0410\x07U\x02\x02\u0410" +
        "\u0411\x05\xBA^\x02\u0411\xAB\x03\x02\x02\x02\u0412\u0413\x05\xB0Y\x02" +
        "\u0413\xAD\x03\x02\x02\x02\u0414\u0415\x07F\x02\x02\u0415\u0416\x05\xBA" +
        "^\x02\u0416\u0417\x07G\x02\x02\u0417\xAF\x03\x02\x02\x02\u0418\u041D\x05" +
        "\xBA^\x02\u0419\u041A\x07M\x02\x02\u041A\u041C\x05\xBA^\x02\u041B\u0419" +
        "\x03\x02\x02\x02\u041C\u041F\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02" +
        "\u041D\u041E\x03\x02\x02\x02\u041E\xB1\x03\x02\x02\x02\u041F\u041D\x03" +
        "\x02\x02\x02\u0420\u0421\x05\xBA^\x02\u0421\xB3\x03\x02\x02\x02\u0422" +
        "\u0423\x05\xBA^\x02\u0423\xB5\x03\x02\x02\x02\u0424\u0425\x07:\x02\x02" +
        "\u0425\u0429\x05\xBA^\x02\u0426\u0428\x05\xBA^\x02\u0427\u0426\x03\x02" +
        "\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03\x02\x02";
    apexParser._serializedATNSegment2 = "\x02\u0429\u042A\x03\x02\x02\x02\u042A\xB7\x03\x02\x02\x02\u042B\u0429" +
        "\x03\x02\x02\x02\u042C\u042D\t\x07\x02\x02\u042D\u0430\x05\xBA^\x02\u042E" +
        "\u0430\x05\xB6\\\x02\u042F\u042C\x03\x02\x02\x02\u042F\u042E\x03\x02\x02" +
        "\x02\u0430\xB9\x03\x02\x02\x02\u0431\u0432\b^\x01\x02\u0432\u043F\x05" +
        "\xBC_\x02\u0433\u0434\x07\"\x02\x02\u0434\u043F\x05\xBE`\x02\u0435\u0436" +
        "\x07F\x02\x02\u0436\u0437\x05R*\x02\u0437\u0438\x07G\x02\x02\u0438\u0439" +
        "\x05\xBA^\x13\u0439\u043F\x03\x02\x02\x02\u043A\u043B\t\b\x02\x02\u043B" +
        "\u043F\x05\xBA^\x11\u043C\u043D\t\t\x02\x02\u043D\u043F\x05\xBA^\x10\u043E" +
        "\u0431\x03\x02\x02\x02\u043E\u0433\x03\x02\x02\x02\u043E\u0435\x03\x02" +
        "\x02\x02\u043E\u043A\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F" +
        "\u04A4\x03\x02\x02\x02\u0440\u0441\f\x0F\x02\x02\u0441\u0442\t\n\x02\x02" +
        "\u0442\u04A3\x05\xBA^\x10\u0443\u0444\f\x0E\x02\x02\u0444\u0445\t\v\x02" +
        "\x02\u0445\u04A3\x05\xBA^\x0F\u0446\u044E\f\r\x02\x02\u0447\u0448\x07" +
        "Q\x02\x02\u0448\u044F\x07Q\x02\x02\u0449\u044A\x07P\x02\x02\u044A\u044B" +
        "\x07P\x02\x02\u044B\u044F\x07P\x02\x02\u044C\u044D\x07P\x02\x02\u044D" +
        "\u044F\x07P\x02\x02\u044E\u0447\x03\x02\x02\x02\u044E\u0449\x03\x02\x02" +
        "\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u04A3" +
        "\x05\xBA^\x0E\u0451\u0452\f\f\x02\x02\u0452\u0453\t\f\x02\x02\u0453\u04A3" +
        "\x05\xBA^\r\u0454\u0455\f\n\x02\x02\u0455\u0456\t\r\x02\x02\u0456\u04A3" +
        "\x05\xBA^\v\u0457\u0458\f\t\x02\x02\u0458\u0459\x07b\x02\x02\u0459\u04A3" +
        "\x05\xBA^\n\u045A\u045B\f\b\x02\x02\u045B\u045C\x07d\x02\x02\u045C\u04A3" +
        "\x05\xBA^\t\u045D\u045E\f\x07\x02\x02\u045E\u045F\x07c\x02\x02\u045F\u04A3" +
        "\x05\xBA^\b\u0460\u0461\f\x06\x02\x02\u0461\u0462\x07Z\x02\x02\u0462\u04A3" +
        "\x05\xBA^\x07\u0463\u0464\f\x05\x02\x02\u0464\u0465\x07[\x02\x02\u0465" +
        "\u04A3\x05\xBA^\x06\u0466\u0467\f\x04\x02\x02\u0467\u0468\x07T\x02\x02" +
        "\u0468\u0469\x05\xBA^\x02\u0469\u046A\x07U\x02\x02\u046A\u046B\x05\xBA" +
        "^\x05\u046B\u04A3\x03\x02\x02\x02\u046C\u046D\f\x03\x02\x02\u046D\u046E" +
        "\t\x0E\x02\x02\u046E\u04A3\x05\xBA^\x03\u046F\u0470\f\x1E\x02\x02\u0470" +
        "\u0471\x07N\x02\x02\u0471\u0472\x07\b\x02\x02\u0472\u0474\x07F\x02\x02" +
        "\u0473\u0475\x05\xB0Y\x02\u0474\u0473\x03\x02\x02\x02\u0474\u0475\x03" +
        "\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u04A3\x07G\x02\x02\u0477" +
        "\u0478\f\x1D\x02\x02\u0478\u0479\x07N\x02\x02\u0479\u047A\x07\x07\x02" +
        "\x02\u047A\u047C\x07F\x02\x02\u047B\u047D\x05\xB0Y\x02\u047C\u047B\x03" +
        "\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E" +
        "\u04A3\x07G\x02\x02\u047F\u0480\f\x1C\x02\x02\u0480\u0481\x07N\x02\x02" +
        "\u0481\u04A3\x07r\x02\x02\u0482\u0483\f\x1B\x02\x02\u0483\u0484\x07N\x02" +
        "\x02\u0484\u04A3\x07,\x02\x02\u0485\u0486\f\x1A\x02\x02\u0486\u0487\x07" +
        "N\x02\x02\u0487\u04A3\x07\"\x02\x02\u0488\u0489\f\x19\x02\x02\u0489\u048A" +
        "\x07N\x02\x02\u048A\u04A3\t\x0F\x02\x02\u048B\u048C\f\x18\x02\x02\u048C" +
        "\u048D\x07N\x02\x02\u048D\u048E\x07*\x02\x02\u048E\u04A3\x05\xD4k\x02" +
        "\u048F\u0490\f\x17\x02\x02\u0490\u0491\x07N\x02\x02\u0491\u04A3\x05\xCC" +
        "g\x02\u0492\u0493\f\x16\x02\x02\u0493\u0494\x07J\x02\x02\u0494\u0495\x05" +
        "\xBA^\x02\u0495\u0496\x07K\x02\x02\u0496\u04A3\x03\x02\x02\x02\u0497\u0498" +
        "\f\x15\x02\x02\u0498\u049A\x07F\x02\x02\u0499\u049B\x05\xB0Y\x02\u049A" +
        "\u0499\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049C\x03\x02" +
        "\x02\x02\u049C\u04A3\x07G\x02\x02\u049D\u049E\f\x12\x02\x02\u049E\u04A3" +
        "\t\x10\x02\x02\u049F\u04A0\f\v\x02\x02\u04A0\u04A1\x07\x1E\x02\x02\u04A1" +
        "\u04A3\x05R*\x02\u04A2\u0440\x03\x02\x02\x02\u04A2\u0443\x03\x02\x02\x02" +
        "\u04A2\u0446\x03\x02\x02\x02\u04A2\u0451\x03\x02\x02\x02\u04A2\u0454\x03" +
        "\x02\x02\x02\u04A2\u0457\x03\x02\x02\x02\u04A2\u045A\x03\x02\x02\x02\u04A2" +
        "\u045D\x03\x02\x02\x02\u04A2\u0460\x03\x02\x02\x02\u04A2\u0463\x03\x02" +
        "\x02\x02\u04A2\u0466\x03\x02\x02\x02\u04A2\u046C\x03\x02\x02\x02\u04A2" +
        "\u046F\x03\x02\x02\x02\u04A2\u0477\x03\x02\x02\x02\u04A2\u047F\x03\x02" +
        "\x02\x02\u04A2\u0482\x03\x02\x02\x02\u04A2\u0485\x03\x02\x02\x02\u04A2" +
        "\u0488\x03\x02\x02\x02\u04A2\u048B\x03\x02\x02\x02\u04A2\u048F\x03\x02" +
        "\x02\x02\u04A2\u0492\x03\x02\x02\x02\u04A2\u0497\x03\x02\x02\x02\u04A2" +
        "\u049D\x03\x02\x02\x02\u04A2\u049F\x03\x02\x02\x02\u04A3\u04A6\x03\x02" +
        "\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5" +
        "\xBB\x03\x02\x02\x02\u04A6\u04A4\x03\x02\x02\x02\u04A7\u04A8\x07F\x02" +
        "\x02\u04A8\u04A9\x05\xBA^\x02\u04A9\u04AA\x07G\x02\x02\u04AA\u04BE\x03" +
        "\x02\x02\x02\u04AB\u04BE\x07,\x02\x02\u04AC\u04BE\x07*\x02\x02\u04AD\u04BE" +
        "\x05l7\x02\u04AE\u04BE\x07r\x02\x02\u04AF\u04B0\x05R*\x02\u04B0\u04B1" +
        "\x07N\x02\x02\u04B1\u04B2\x07\x0E\x02\x02\u04B2\u04BE\x03\x02\x02\x02" +
        "\u04B3\u04B4\x071\x02\x02\u04B4\u04B5\x07N\x02\x02\u04B5\u04BE\x07\x0E" +
        "\x02\x02\u04B6\u04BA\x05\xCEh\x02\u04B7\u04BB\x05\xD6l\x02\u04B8\u04B9" +
        "\x07,\x02\x02\u04B9\u04BB\x05\xD8m\x02\u04BA\u04B7\x03\x02\x02\x02\u04BA" +
        "\u04B8\x03\x02\x02\x02\u04BB\u04BE\x03\x02\x02\x02\u04BC\u04BE\x07\x04" +
        "\x02\x02\u04BD\u04A7\x03\x02\x02\x02\u04BD\u04AB\x03\x02\x02\x02\u04BD" +
        "\u04AC\x03\x02\x02\x02\u04BD\u04AD\x03\x02\x02\x02\u04BD\u04AE\x03\x02" +
        "\x02\x02\u04BD\u04AF\x03\x02\x02\x02\u04BD\u04B3\x03\x02\x02\x02\u04BD" +
        "\u04B6\x03\x02\x02\x02\u04BD\u04BC\x03\x02\x02\x02\u04BE\xBD\x03\x02\x02" +
        "\x02\u04BF\u04C0\x05\xCEh\x02\u04C0\u04C1\x05\xC0a\x02\u04C1\u04C2\x05" +
        "\xCAf\x02\u04C2\u04CB\x03\x02\x02\x02\u04C3\u04C8\x05\xC0a\x02\u04C4\u04C9" +
        "\x05\xC4c\x02\u04C5\u04C9\x05\xCAf\x02\u04C6\u04C9\x05\xC6d\x02\u04C7" +
        "\u04C9\x05\xC8e\x02\u04C8\u04C4\x03\x02\x02\x02\u04C8\u04C5\x03\x02\x02" +
        "\x02\u04C8\u04C6\x03\x02\x02\x02\u04C8\u04C7\x03\x02\x02\x02\u04C9\u04CB" +
        "\x03\x02\x02\x02\u04CA\u04BF\x03\x02\x02\x02\u04CA\u04C3\x03\x02\x02\x02" +
        "\u04CB\xBF\x03\x02\x02\x02\u04CC\u04CE\x07r\x02\x02\u04CD\u04CF\x05\xD0" +
        "i\x02\u04CE\u04CD\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D7" +
        "\x03\x02\x02\x02\u04D0\u04D1\x07N\x02\x02\u04D1\u04D3\x07r\x02\x02\u04D2" +
        "\u04D4\x05\xD0i\x02\u04D3\u04D2\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02" +
        "\x02\u04D4\u04D6\x03\x02\x02\x02\u04D5\u04D0\x03\x02\x02\x02\u04D6\u04D9" +
        "\x03\x02\x02\x02\u04D7\u04D5\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02" +
        "\u04D8\u04DE\x03\x02\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DE\x05" +
        "V,\x02\u04DB\u04DC\x07\x07\x02\x02\u04DC\u04DE\x05\xD0i\x02\u04DD\u04CC" +
        "\x03\x02\x02\x02\u04DD\u04DA\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02" +
        "\u04DE\xC1\x03\x02\x02\x02\u04DF\u04E1\x07r\x02\x02\u04E0\u04E2\x05\xD2" +
        "j\x02\u04E1\u04E0\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u04E3" +
        "\x03\x02\x02\x02\u04E3\u04E4\x05\xCAf\x02\u04E4\xC3\x03\x02\x02\x02\u04E5" +
        "\u0501\x07J\x02\x02\u04E6\u04EB\x07K\x02\x02\u04E7\u04E8\x07J\x02\x02" +
        "\u04E8\u04EA\x07K\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04EA\u04ED\x03" +
        "\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC" +
        "\u04EE\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02\u04EE\u0502\x05N(\x02" +
        "\u04EF\u04F0\x05\xBA^\x02\u04F0\u04F7\x07K\x02\x02\u04F1\u04F2\x07J\x02" +
        "\x02\u04F2\u04F3\x05\xBA^\x02\u04F3\u04F4\x07K\x02\x02\u04F4\u04F6\x03" +
        "\x02\x02\x02\u04F5\u04F1\x03\x02\x02\x02\u04F6\u04F9\x03\x02\x02\x02\u04F7" +
        "\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04FE\x03\x02" +
        "\x02\x02\u04F9\u04F7\x03\x02\x02\x02\u04FA\u04FB\x07J\x02\x02\u04FB\u04FD" +
        "\x07K\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0500\x03\x02\x02\x02" +
        "\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0502\x03" +
        "\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0501\u04E6\x03\x02\x02\x02\u0501" +
        "\u04EF\x03\x02\x02\x02\u0502\xC5\x03\x02\x02\x02\u0503\u051F\x07H\x02" +
        "\x02\u0504\u0520\x07I\x02\x02\u0505\u0508\x07r\x02\x02\u0506\u0508\x05" +
        "\xBA^\x02\u0507\u0505\x03\x02\x02\x02\u0507\u0506\x03\x02\x02\x02\u0508" +
        "\u0509\x03\x02\x02\x02\u0509\u050C\x07q\x02\x02\u050A\u050D\x05l7\x02" +
        "\u050B\u050D\x05\xBA^\x02\u050C\u050A\x03\x02\x02\x02\u050C\u050B\x03" +
        "\x02\x02\x02\u050D\u051A\x03\x02\x02\x02\u050E\u0511\x07M\x02\x02\u050F" +
        "\u0512\x07r\x02\x02\u0510\u0512\x05\xBA^\x02\u0511\u050F\x03\x02\x02\x02" +
        "\u0511\u0510\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0516\x07" +
        "q\x02\x02\u0514\u0517\x05l7\x02\u0515\u0517\x05\xBA^\x02\u0516\u0514\x03" +
        "\x02\x02\x02\u0516\u0515\x03\x02\x02\x02\u0517\u0519\x03\x02\x02\x02\u0518" +
        "\u050E\x03\x02\x02\x02\u0519\u051C\x03\x02\x02\x02\u051A\u0518\x03\x02" +
        "\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u051D\x03\x02\x02\x02\u051C" +
        "\u051A\x03\x02\x02\x02\u051D\u051E\x07I\x02\x02\u051E\u0520\x03\x02\x02" +
        "\x02\u051F\u0504\x03\x02\x02\x02\u051F\u0507\x03\x02\x02\x02\u0520\xC7" +
        "\x03\x02\x02\x02\u0521\u0533\x07H\x02\x02\u0522\u0534\x07I\x02\x02\u0523" +
        "\u0526\x05l7\x02\u0524\u0526\x05\xBA^\x02\u0525\u0523\x03\x02\x02\x02" +
        "\u0525\u0524\x03\x02\x02\x02\u0526\u052E\x03\x02\x02\x02\u0527\u052A\x07" +
        "M\x02\x02\u0528\u052B\x05l7\x02\u0529\u052B\x05\xBA^\x02\u052A\u0528\x03" +
        "\x02\x02\x02\u052A\u0529\x03\x02\x02\x02\u052B\u052D\x03\x02\x02\x02\u052C" +
        "\u0527\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E\u052C\x03\x02" +
        "\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0531\x03\x02\x02\x02\u0530" +
        "\u052E\x03\x02\x02\x02\u0531\u0532\x07I\x02\x02\u0532\u0534\x03\x02\x02" +
        "\x02\u0533\u0522\x03\x02\x02\x02\u0533\u0525\x03\x02\x02\x02\u0534\xC9" +
        "\x03\x02\x02\x02\u0535\u0537\x05\xD8m\x02\u0536\u0538\x05$\x13\x02\u0537" +
        "\u0536\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538\xCB\x03\x02\x02" +
        "\x02\u0539\u053A\x05\xCEh\x02\u053A\u053B\x05\xD6l\x02\u053B\xCD\x03\x02" +
        "\x02\x02\u053C\u053D\x07Q\x02\x02\u053D\u053E\x05\"\x12\x02\u053E\u053F" +
        "\x07P\x02\x02\u053F\xCF\x03\x02\x02\x02\u0540\u0541\x07Q\x02\x02\u0541" +
        "\u0544\x07P\x02\x02\u0542\u0544\x05X-\x02\u0543\u0540\x03\x02\x02\x02" +
        "\u0543\u0542\x03\x02\x02\x02\u0544\xD1\x03\x02\x02\x02\u0545\u0546\x07" +
        "Q\x02\x02\u0546\u0549\x07P\x02\x02\u0547\u0549\x05\xCEh\x02\u0548\u0545" +
        "\x03\x02\x02\x02\u0548\u0547\x03\x02\x02\x02\u0549\xD3\x03\x02\x02\x02" +
        "\u054A\u0551\x05\xD8m\x02\u054B\u054C\x07N\x02\x02\u054C\u054E\x07r\x02" +
        "\x02\u054D\u054F\x05\xD8m\x02\u054E\u054D\x03\x02\x02\x02\u054E\u054F" +
        "\x03\x02\x02\x02\u054F\u0551\x03\x02\x02\x02\u0550\u054A\x03\x02\x02\x02" +
        "\u0550\u054B\x03\x02\x02\x02\u0551\xD5\x03\x02\x02\x02\u0552\u0553\x07" +
        "*\x02\x02\u0553\u0557\x05\xD4k\x02\u0554\u0555\x07r\x02\x02\u0555\u0557" +
        "\x05\xD8m\x02\u0556\u0552\x03\x02\x02\x02\u0556\u0554\x03\x02\x02\x02" +
        "\u0557\xD7\x03\x02\x02\x02\u0558\u055A\x07F\x02\x02\u0559\u055B\x05\xB0" +
        "Y\x02\u055A\u0559\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u055C" +
        "\x03\x02\x02\x02\u055C\u055D\x07G\x02\x02\u055D\xD9\x03\x02\x02\x02\xA5" +
        "\xDB\xE0\xE6\xEE\xF7\xFC\u0103\u010A\u0111\u0118\u011D\u0121\u0125\u0129" +
        "\u012E\u0132\u0136\u0140\u0148\u014F\u0156\u015A\u015D\u0160\u0169\u016F" +
        "\u0174\u0177\u017D\u0183\u0187\u0190\u0197\u01A0\u01A7\u01AD\u01B1\u01BD" +
        "\u01C0\u01C4\u01CC\u01D1\u01D5\u01DE\u01F0\u01F7\u01FC\u0205\u020D\u0217" +
        "\u021F\u0227\u022C\u0238\u023E\u0245\u024A\u0252\u0256\u0258\u0263\u026B" +
        "\u026E\u0272\u0277\u027B\u0280\u028A\u0293\u0295\u029C\u02A1\u02AA\u02AF" +
        "\u02B2\u02B7\u02C0\u02D0\u02DA\u02DD\u02E6\u02F0\u02F8\u02FB\u02FE\u030B" +
        "\u0313\u0318\u0320\u0324\u0328\u032C\u032E\u0332\u0338\u0343\u034B\u0353" +
        "\u035F\u037C\u037F\u0382\u038A\u038E\u0392\u039B\u03A0\u03AD\u03B2\u03B7" +
        "\u03BC\u03C1\u03C8\u03D5\u03DE\u03E7\u03ED\u03F7\u03FB\u03FF\u0401\u0405" +
        "\u040A\u041D\u0429\u042F\u043E\u044E\u0474\u047C\u049A\u04A2\u04A4\u04BA" +
        "\u04BD\u04C8\u04CA\u04CE\u04D3\u04D7\u04DD\u04E1\u04EB\u04F7\u04FE\u0501" +
        "\u0507\u050C\u0511\u0516\u051A\u051F\u0525\u052A\u052E\u0533\u0537\u0543" +
        "\u0548\u054E\u0550\u0556\u055A";
    apexParser._serializedATN = Utils.join([
        apexParser._serializedATNSegment0,
        apexParser._serializedATNSegment1,
        apexParser._serializedATNSegment2,
    ], "");
    return apexParser;
}(Parser_1.Parser));
exports.apexParser = apexParser;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.EOF = function () { return this.getToken(apexParser.EOF, 0); };
    CompilationUnitContext.prototype.packageDeclaration = function () {
        return this.tryGetRuleContext(0, PackageDeclarationContext);
    };
    CompilationUnitContext.prototype.importDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ImportDeclarationContext);
        }
    };
    CompilationUnitContext.prototype.typeDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }
        else {
            return this.getRuleContext(i, TypeDeclarationContext);
        }
    };
    Object.defineProperty(CompilationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_compilationUnit; },
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
var PackageDeclarationContext = /** @class */ (function (_super) {
    __extends(PackageDeclarationContext, _super);
    function PackageDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PackageDeclarationContext.prototype.PACKAGE = function () { return this.getToken(apexParser.PACKAGE, 0); };
    PackageDeclarationContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    PackageDeclarationContext.prototype.SEMI = function () { return this.getToken(apexParser.SEMI, 0); };
    PackageDeclarationContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    Object.defineProperty(PackageDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_packageDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PackageDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPackageDeclaration) {
            listener.enterPackageDeclaration(this);
        }
    };
    // @Override
    PackageDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPackageDeclaration) {
            listener.exitPackageDeclaration(this);
        }
    };
    // @Override
    PackageDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPackageDeclaration) {
            return visitor.visitPackageDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PackageDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PackageDeclarationContext = PackageDeclarationContext;
var ImportDeclarationContext = /** @class */ (function (_super) {
    __extends(ImportDeclarationContext, _super);
    function ImportDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDeclarationContext.prototype.IMPORT = function () { return this.getToken(apexParser.IMPORT, 0); };
    ImportDeclarationContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    ImportDeclarationContext.prototype.SEMI = function () { return this.getToken(apexParser.SEMI, 0); };
    ImportDeclarationContext.prototype.STATIC = function () { return this.tryGetToken(apexParser.STATIC, 0); };
    ImportDeclarationContext.prototype.DOT = function () { return this.tryGetToken(apexParser.DOT, 0); };
    ImportDeclarationContext.prototype.MUL = function () { return this.tryGetToken(apexParser.MUL, 0); };
    Object.defineProperty(ImportDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_importDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterImportDeclaration) {
            listener.enterImportDeclaration(this);
        }
    };
    // @Override
    ImportDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitImportDeclaration) {
            listener.exitImportDeclaration(this);
        }
    };
    // @Override
    ImportDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitImportDeclaration) {
            return visitor.visitImportDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportDeclarationContext = ImportDeclarationContext;
var TypeDeclarationContext = /** @class */ (function (_super) {
    __extends(TypeDeclarationContext, _super);
    function TypeDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDeclarationContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    TypeDeclarationContext.prototype.classOrInterfaceModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassOrInterfaceModifierContext);
        }
    };
    TypeDeclarationContext.prototype.enumDeclaration = function () {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    };
    TypeDeclarationContext.prototype.interfaceDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    };
    TypeDeclarationContext.prototype.annotationTypeDeclaration = function () {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    };
    TypeDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    Object.defineProperty(TypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDeclaration) {
            listener.enterTypeDeclaration(this);
        }
    };
    // @Override
    TypeDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDeclaration) {
            listener.exitTypeDeclaration(this);
        }
    };
    // @Override
    TypeDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDeclaration) {
            return visitor.visitTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDeclarationContext = TypeDeclarationContext;
var ModifierContext = /** @class */ (function (_super) {
    __extends(ModifierContext, _super);
    function ModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierContext.prototype.classOrInterfaceModifier = function () {
        return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
    };
    ModifierContext.prototype.NATIVE = function () { return this.tryGetToken(apexParser.NATIVE, 0); };
    ModifierContext.prototype.SYNCHRONIZED = function () { return this.tryGetToken(apexParser.SYNCHRONIZED, 0); };
    ModifierContext.prototype.TRANSIENT = function () { return this.tryGetToken(apexParser.TRANSIENT, 0); };
    Object.defineProperty(ModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_modifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierContext = ModifierContext;
var ClassOrInterfaceModifierContext = /** @class */ (function (_super) {
    __extends(ClassOrInterfaceModifierContext, _super);
    function ClassOrInterfaceModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassOrInterfaceModifierContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    ClassOrInterfaceModifierContext.prototype.PUBLIC = function () { return this.tryGetToken(apexParser.PUBLIC, 0); };
    ClassOrInterfaceModifierContext.prototype.PROTECTED = function () { return this.tryGetToken(apexParser.PROTECTED, 0); };
    ClassOrInterfaceModifierContext.prototype.PRIVATE = function () { return this.tryGetToken(apexParser.PRIVATE, 0); };
    ClassOrInterfaceModifierContext.prototype.STATIC = function () { return this.tryGetToken(apexParser.STATIC, 0); };
    ClassOrInterfaceModifierContext.prototype.ABSTRACT = function () { return this.tryGetToken(apexParser.ABSTRACT, 0); };
    ClassOrInterfaceModifierContext.prototype.FINAL = function () { return this.tryGetToken(apexParser.FINAL, 0); };
    ClassOrInterfaceModifierContext.prototype.GLOBAL = function () { return this.tryGetToken(apexParser.GLOBAL, 0); };
    ClassOrInterfaceModifierContext.prototype.WEBSERVICE = function () { return this.tryGetToken(apexParser.WEBSERVICE, 0); };
    ClassOrInterfaceModifierContext.prototype.OVERRIDE = function () { return this.tryGetToken(apexParser.OVERRIDE, 0); };
    ClassOrInterfaceModifierContext.prototype.VIRTUAL = function () { return this.tryGetToken(apexParser.VIRTUAL, 0); };
    ClassOrInterfaceModifierContext.prototype.TESTMETHOD = function () { return this.tryGetToken(apexParser.TESTMETHOD, 0); };
    ClassOrInterfaceModifierContext.prototype.APEX_WITH_SHARING = function () { return this.tryGetToken(apexParser.APEX_WITH_SHARING, 0); };
    ClassOrInterfaceModifierContext.prototype.APEX_WITHOUT_SHARING = function () { return this.tryGetToken(apexParser.APEX_WITHOUT_SHARING, 0); };
    Object.defineProperty(ClassOrInterfaceModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_classOrInterfaceModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassOrInterfaceModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterClassOrInterfaceModifier) {
            listener.enterClassOrInterfaceModifier(this);
        }
    };
    // @Override
    ClassOrInterfaceModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitClassOrInterfaceModifier) {
            listener.exitClassOrInterfaceModifier(this);
        }
    };
    // @Override
    ClassOrInterfaceModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitClassOrInterfaceModifier) {
            return visitor.visitClassOrInterfaceModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassOrInterfaceModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassOrInterfaceModifierContext = ClassOrInterfaceModifierContext;
var VariableModifierContext = /** @class */ (function (_super) {
    __extends(VariableModifierContext, _super);
    function VariableModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableModifierContext.prototype.FINAL = function () { return this.tryGetToken(apexParser.FINAL, 0); };
    VariableModifierContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    Object.defineProperty(VariableModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_variableModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableModifier) {
            listener.enterVariableModifier(this);
        }
    };
    // @Override
    VariableModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableModifier) {
            listener.exitVariableModifier(this);
        }
    };
    // @Override
    VariableModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableModifier) {
            return visitor.visitVariableModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableModifierContext = VariableModifierContext;
var ClassDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassDeclarationContext, _super);
    function ClassDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDeclarationContext.prototype.CLASS = function () { return this.getToken(apexParser.CLASS, 0); };
    ClassDeclarationContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    ClassDeclarationContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    ClassDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    ClassDeclarationContext.prototype.EXTENDS = function () { return this.tryGetToken(apexParser.EXTENDS, 0); };
    ClassDeclarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    ClassDeclarationContext.prototype.IMPLEMENTS = function () { return this.tryGetToken(apexParser.IMPLEMENTS, 0); };
    ClassDeclarationContext.prototype.typeList = function () {
        return this.tryGetRuleContext(0, TypeListContext);
    };
    Object.defineProperty(ClassDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_classDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDeclarationContext = ClassDeclarationContext;
var TypeParametersContext = /** @class */ (function (_super) {
    __extends(TypeParametersContext, _super);
    function TypeParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParametersContext.prototype.LT = function () { return this.getToken(apexParser.LT, 0); };
    TypeParametersContext.prototype.typeParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    };
    TypeParametersContext.prototype.GT = function () { return this.getToken(apexParser.GT, 0); };
    TypeParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeParameters; },
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
var TypeParameterContext = /** @class */ (function (_super) {
    __extends(TypeParameterContext, _super);
    function TypeParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    TypeParameterContext.prototype.EXTENDS = function () { return this.tryGetToken(apexParser.EXTENDS, 0); };
    TypeParameterContext.prototype.typeBound = function () {
        return this.tryGetRuleContext(0, TypeBoundContext);
    };
    Object.defineProperty(TypeParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeParameter; },
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
var TypeBoundContext = /** @class */ (function (_super) {
    __extends(TypeBoundContext, _super);
    function TypeBoundContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeBoundContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    TypeBoundContext.prototype.BITAND = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.BITAND);
        }
        else {
            return this.getToken(apexParser.BITAND, i);
        }
    };
    Object.defineProperty(TypeBoundContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeBound; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeBoundContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeBound) {
            listener.enterTypeBound(this);
        }
    };
    // @Override
    TypeBoundContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeBound) {
            listener.exitTypeBound(this);
        }
    };
    // @Override
    TypeBoundContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeBound) {
            return visitor.visitTypeBound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeBoundContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeBoundContext = TypeBoundContext;
var EnumDeclarationContext = /** @class */ (function (_super) {
    __extends(EnumDeclarationContext, _super);
    function EnumDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumDeclarationContext.prototype.ENUM = function () { return this.getToken(apexParser.ENUM, 0); };
    EnumDeclarationContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    EnumDeclarationContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    EnumDeclarationContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    EnumDeclarationContext.prototype.IMPLEMENTS = function () { return this.tryGetToken(apexParser.IMPLEMENTS, 0); };
    EnumDeclarationContext.prototype.typeList = function () {
        return this.tryGetRuleContext(0, TypeListContext);
    };
    EnumDeclarationContext.prototype.enumConstants = function () {
        return this.tryGetRuleContext(0, EnumConstantsContext);
    };
    EnumDeclarationContext.prototype.COMMA = function () { return this.tryGetToken(apexParser.COMMA, 0); };
    EnumDeclarationContext.prototype.enumBodyDeclarations = function () {
        return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
    };
    Object.defineProperty(EnumDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_enumDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumDeclaration) {
            listener.enterEnumDeclaration(this);
        }
    };
    // @Override
    EnumDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumDeclaration) {
            listener.exitEnumDeclaration(this);
        }
    };
    // @Override
    EnumDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumDeclaration) {
            return visitor.visitEnumDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumDeclarationContext = EnumDeclarationContext;
var EnumConstantsContext = /** @class */ (function (_super) {
    __extends(EnumConstantsContext, _super);
    function EnumConstantsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumConstantsContext.prototype.enumConstant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantContext);
        }
        else {
            return this.getRuleContext(i, EnumConstantContext);
        }
    };
    EnumConstantsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(EnumConstantsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_enumConstants; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumConstantsContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumConstants) {
            listener.enterEnumConstants(this);
        }
    };
    // @Override
    EnumConstantsContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumConstants) {
            listener.exitEnumConstants(this);
        }
    };
    // @Override
    EnumConstantsContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumConstants) {
            return visitor.visitEnumConstants(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumConstantsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumConstantsContext = EnumConstantsContext;
var EnumConstantContext = /** @class */ (function (_super) {
    __extends(EnumConstantContext, _super);
    function EnumConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumConstantContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    EnumConstantContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    EnumConstantContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    EnumConstantContext.prototype.classBody = function () {
        return this.tryGetRuleContext(0, ClassBodyContext);
    };
    Object.defineProperty(EnumConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_enumConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumConstant) {
            listener.enterEnumConstant(this);
        }
    };
    // @Override
    EnumConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumConstant) {
            listener.exitEnumConstant(this);
        }
    };
    // @Override
    EnumConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumConstant) {
            return visitor.visitEnumConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumConstantContext = EnumConstantContext;
var EnumBodyDeclarationsContext = /** @class */ (function (_super) {
    __extends(EnumBodyDeclarationsContext, _super);
    function EnumBodyDeclarationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumBodyDeclarationsContext.prototype.SEMI = function () { return this.getToken(apexParser.SEMI, 0); };
    EnumBodyDeclarationsContext.prototype.classBodyDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassBodyDeclarationContext);
        }
    };
    Object.defineProperty(EnumBodyDeclarationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_enumBodyDeclarations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumBodyDeclarationsContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumBodyDeclarations) {
            listener.enterEnumBodyDeclarations(this);
        }
    };
    // @Override
    EnumBodyDeclarationsContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumBodyDeclarations) {
            listener.exitEnumBodyDeclarations(this);
        }
    };
    // @Override
    EnumBodyDeclarationsContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumBodyDeclarations) {
            return visitor.visitEnumBodyDeclarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumBodyDeclarationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumBodyDeclarationsContext = EnumBodyDeclarationsContext;
var InterfaceDeclarationContext = /** @class */ (function (_super) {
    __extends(InterfaceDeclarationContext, _super);
    function InterfaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceDeclarationContext.prototype.INTERFACE = function () { return this.getToken(apexParser.INTERFACE, 0); };
    InterfaceDeclarationContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    InterfaceDeclarationContext.prototype.interfaceBody = function () {
        return this.getRuleContext(0, InterfaceBodyContext);
    };
    InterfaceDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    InterfaceDeclarationContext.prototype.EXTENDS = function () { return this.tryGetToken(apexParser.EXTENDS, 0); };
    InterfaceDeclarationContext.prototype.typeList = function () {
        return this.tryGetRuleContext(0, TypeListContext);
    };
    Object.defineProperty(InterfaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_interfaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceDeclaration) {
            listener.enterInterfaceDeclaration(this);
        }
    };
    // @Override
    InterfaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceDeclaration) {
            listener.exitInterfaceDeclaration(this);
        }
    };
    // @Override
    InterfaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceDeclaration) {
            return visitor.visitInterfaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceDeclarationContext = InterfaceDeclarationContext;
var TypeListContext = /** @class */ (function (_super) {
    __extends(TypeListContext, _super);
    function TypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeListContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    TypeListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeList; },
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
var ClassBodyContext = /** @class */ (function (_super) {
    __extends(ClassBodyContext, _super);
    function ClassBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBodyContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    ClassBodyContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    ClassBodyContext.prototype.classBodyDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassBodyDeclarationContext);
        }
    };
    Object.defineProperty(ClassBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_classBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterClassBody) {
            listener.enterClassBody(this);
        }
    };
    // @Override
    ClassBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitClassBody) {
            listener.exitClassBody(this);
        }
    };
    // @Override
    ClassBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitClassBody) {
            return visitor.visitClassBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassBodyContext = ClassBodyContext;
var InterfaceBodyContext = /** @class */ (function (_super) {
    __extends(InterfaceBodyContext, _super);
    function InterfaceBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceBodyContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    InterfaceBodyContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    InterfaceBodyContext.prototype.interfaceBodyDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, InterfaceBodyDeclarationContext);
        }
    };
    Object.defineProperty(InterfaceBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_interfaceBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceBody) {
            listener.enterInterfaceBody(this);
        }
    };
    // @Override
    InterfaceBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceBody) {
            listener.exitInterfaceBody(this);
        }
    };
    // @Override
    InterfaceBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceBody) {
            return visitor.visitInterfaceBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceBodyContext = InterfaceBodyContext;
var ClassBodyDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassBodyDeclarationContext, _super);
    function ClassBodyDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBodyDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    ClassBodyDeclarationContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    ClassBodyDeclarationContext.prototype.STATIC = function () { return this.tryGetToken(apexParser.STATIC, 0); };
    ClassBodyDeclarationContext.prototype.memberDeclaration = function () {
        return this.tryGetRuleContext(0, MemberDeclarationContext);
    };
    ClassBodyDeclarationContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    Object.defineProperty(ClassBodyDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_classBodyDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassBodyDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassBodyDeclaration) {
            listener.enterClassBodyDeclaration(this);
        }
    };
    // @Override
    ClassBodyDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassBodyDeclaration) {
            listener.exitClassBodyDeclaration(this);
        }
    };
    // @Override
    ClassBodyDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassBodyDeclaration) {
            return visitor.visitClassBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassBodyDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassBodyDeclarationContext = ClassBodyDeclarationContext;
var MemberDeclarationContext = /** @class */ (function (_super) {
    __extends(MemberDeclarationContext, _super);
    function MemberDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberDeclarationContext.prototype.methodDeclaration = function () {
        return this.tryGetRuleContext(0, MethodDeclarationContext);
    };
    MemberDeclarationContext.prototype.genericMethodDeclaration = function () {
        return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
    };
    MemberDeclarationContext.prototype.fieldDeclaration = function () {
        return this.tryGetRuleContext(0, FieldDeclarationContext);
    };
    MemberDeclarationContext.prototype.constructorDeclaration = function () {
        return this.tryGetRuleContext(0, ConstructorDeclarationContext);
    };
    MemberDeclarationContext.prototype.genericConstructorDeclaration = function () {
        return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
    };
    MemberDeclarationContext.prototype.interfaceDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    };
    MemberDeclarationContext.prototype.annotationTypeDeclaration = function () {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    };
    MemberDeclarationContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    MemberDeclarationContext.prototype.enumDeclaration = function () {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    };
    MemberDeclarationContext.prototype.propertyDeclaration = function () {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    };
    Object.defineProperty(MemberDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_memberDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MemberDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberDeclaration) {
            listener.enterMemberDeclaration(this);
        }
    };
    // @Override
    MemberDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberDeclaration) {
            listener.exitMemberDeclaration(this);
        }
    };
    // @Override
    MemberDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberDeclaration) {
            return visitor.visitMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MemberDeclarationContext = MemberDeclarationContext;
var MethodDeclarationContext = /** @class */ (function (_super) {
    __extends(MethodDeclarationContext, _super);
    function MethodDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodDeclarationContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    MethodDeclarationContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    MethodDeclarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    MethodDeclarationContext.prototype.VOID = function () { return this.tryGetToken(apexParser.VOID, 0); };
    MethodDeclarationContext.prototype.methodBody = function () {
        return this.tryGetRuleContext(0, MethodBodyContext);
    };
    MethodDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    MethodDeclarationContext.prototype.OVERRIDE = function () { return this.tryGetToken(apexParser.OVERRIDE, 0); };
    MethodDeclarationContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LBRACK);
        }
        else {
            return this.getToken(apexParser.LBRACK, i);
        }
    };
    MethodDeclarationContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.RBRACK);
        }
        else {
            return this.getToken(apexParser.RBRACK, i);
        }
    };
    MethodDeclarationContext.prototype.THROWS = function () { return this.tryGetToken(apexParser.THROWS, 0); };
    MethodDeclarationContext.prototype.qualifiedNameList = function () {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    };
    Object.defineProperty(MethodDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_methodDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodDeclaration) {
            listener.enterMethodDeclaration(this);
        }
    };
    // @Override
    MethodDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodDeclaration) {
            listener.exitMethodDeclaration(this);
        }
    };
    // @Override
    MethodDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodDeclaration) {
            return visitor.visitMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodDeclarationContext = MethodDeclarationContext;
var GenericMethodDeclarationContext = /** @class */ (function (_super) {
    __extends(GenericMethodDeclarationContext, _super);
    function GenericMethodDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenericMethodDeclarationContext.prototype.typeParameters = function () {
        return this.getRuleContext(0, TypeParametersContext);
    };
    GenericMethodDeclarationContext.prototype.methodDeclaration = function () {
        return this.getRuleContext(0, MethodDeclarationContext);
    };
    Object.defineProperty(GenericMethodDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_genericMethodDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenericMethodDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericMethodDeclaration) {
            listener.enterGenericMethodDeclaration(this);
        }
    };
    // @Override
    GenericMethodDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericMethodDeclaration) {
            listener.exitGenericMethodDeclaration(this);
        }
    };
    // @Override
    GenericMethodDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericMethodDeclaration) {
            return visitor.visitGenericMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericMethodDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenericMethodDeclarationContext = GenericMethodDeclarationContext;
var ConstructorDeclarationContext = /** @class */ (function (_super) {
    __extends(ConstructorDeclarationContext, _super);
    function ConstructorDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorDeclarationContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    ConstructorDeclarationContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    ConstructorDeclarationContext.prototype.constructorBody = function () {
        return this.getRuleContext(0, ConstructorBodyContext);
    };
    ConstructorDeclarationContext.prototype.THROWS = function () { return this.tryGetToken(apexParser.THROWS, 0); };
    ConstructorDeclarationContext.prototype.qualifiedNameList = function () {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    };
    Object.defineProperty(ConstructorDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_constructorDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorDeclaration) {
            listener.enterConstructorDeclaration(this);
        }
    };
    // @Override
    ConstructorDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorDeclaration) {
            listener.exitConstructorDeclaration(this);
        }
    };
    // @Override
    ConstructorDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorDeclaration) {
            return visitor.visitConstructorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorDeclarationContext = ConstructorDeclarationContext;
var GenericConstructorDeclarationContext = /** @class */ (function (_super) {
    __extends(GenericConstructorDeclarationContext, _super);
    function GenericConstructorDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenericConstructorDeclarationContext.prototype.typeParameters = function () {
        return this.getRuleContext(0, TypeParametersContext);
    };
    GenericConstructorDeclarationContext.prototype.constructorDeclaration = function () {
        return this.getRuleContext(0, ConstructorDeclarationContext);
    };
    Object.defineProperty(GenericConstructorDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_genericConstructorDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenericConstructorDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericConstructorDeclaration) {
            listener.enterGenericConstructorDeclaration(this);
        }
    };
    // @Override
    GenericConstructorDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericConstructorDeclaration) {
            listener.exitGenericConstructorDeclaration(this);
        }
    };
    // @Override
    GenericConstructorDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericConstructorDeclaration) {
            return visitor.visitGenericConstructorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericConstructorDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenericConstructorDeclarationContext = GenericConstructorDeclarationContext;
var FieldDeclarationContext = /** @class */ (function (_super) {
    __extends(FieldDeclarationContext, _super);
    function FieldDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldDeclarationContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    FieldDeclarationContext.prototype.variableDeclarators = function () {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    };
    FieldDeclarationContext.prototype.SEMI = function () { return this.getToken(apexParser.SEMI, 0); };
    Object.defineProperty(FieldDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_fieldDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldDeclaration) {
            listener.enterFieldDeclaration(this);
        }
    };
    // @Override
    FieldDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldDeclaration) {
            listener.exitFieldDeclaration(this);
        }
    };
    // @Override
    FieldDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldDeclaration) {
            return visitor.visitFieldDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldDeclarationContext = FieldDeclarationContext;
var PropertyDeclarationContext = /** @class */ (function (_super) {
    __extends(PropertyDeclarationContext, _super);
    function PropertyDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyDeclarationContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    PropertyDeclarationContext.prototype.variableDeclarators = function () {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    };
    PropertyDeclarationContext.prototype.propertyBodyDeclaration = function () {
        return this.getRuleContext(0, PropertyBodyDeclarationContext);
    };
    Object.defineProperty(PropertyDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_propertyDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyDeclaration) {
            listener.enterPropertyDeclaration(this);
        }
    };
    // @Override
    PropertyDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyDeclaration) {
            listener.exitPropertyDeclaration(this);
        }
    };
    // @Override
    PropertyDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyDeclaration) {
            return visitor.visitPropertyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyDeclarationContext = PropertyDeclarationContext;
var PropertyBodyDeclarationContext = /** @class */ (function (_super) {
    __extends(PropertyBodyDeclarationContext, _super);
    function PropertyBodyDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyBodyDeclarationContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    PropertyBodyDeclarationContext.prototype.propertyBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyBlockContext);
        }
        else {
            return this.getRuleContext(i, PropertyBlockContext);
        }
    };
    PropertyBodyDeclarationContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    Object.defineProperty(PropertyBodyDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_propertyBodyDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyBodyDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyBodyDeclaration) {
            listener.enterPropertyBodyDeclaration(this);
        }
    };
    // @Override
    PropertyBodyDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyBodyDeclaration) {
            listener.exitPropertyBodyDeclaration(this);
        }
    };
    // @Override
    PropertyBodyDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyBodyDeclaration) {
            return visitor.visitPropertyBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyBodyDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyBodyDeclarationContext = PropertyBodyDeclarationContext;
var InterfaceBodyDeclarationContext = /** @class */ (function (_super) {
    __extends(InterfaceBodyDeclarationContext, _super);
    function InterfaceBodyDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceBodyDeclarationContext.prototype.interfaceMemberDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
    };
    InterfaceBodyDeclarationContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    InterfaceBodyDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    Object.defineProperty(InterfaceBodyDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_interfaceBodyDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceBodyDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceBodyDeclaration) {
            listener.enterInterfaceBodyDeclaration(this);
        }
    };
    // @Override
    InterfaceBodyDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceBodyDeclaration) {
            listener.exitInterfaceBodyDeclaration(this);
        }
    };
    // @Override
    InterfaceBodyDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceBodyDeclaration) {
            return visitor.visitInterfaceBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceBodyDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceBodyDeclarationContext = InterfaceBodyDeclarationContext;
var InterfaceMemberDeclarationContext = /** @class */ (function (_super) {
    __extends(InterfaceMemberDeclarationContext, _super);
    function InterfaceMemberDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceMemberDeclarationContext.prototype.constDeclaration = function () {
        return this.tryGetRuleContext(0, ConstDeclarationContext);
    };
    InterfaceMemberDeclarationContext.prototype.interfaceMethodDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
    };
    InterfaceMemberDeclarationContext.prototype.genericInterfaceMethodDeclaration = function () {
        return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
    };
    InterfaceMemberDeclarationContext.prototype.interfaceDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    };
    InterfaceMemberDeclarationContext.prototype.annotationTypeDeclaration = function () {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    };
    InterfaceMemberDeclarationContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    InterfaceMemberDeclarationContext.prototype.enumDeclaration = function () {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    };
    Object.defineProperty(InterfaceMemberDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_interfaceMemberDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceMemberDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceMemberDeclaration) {
            listener.enterInterfaceMemberDeclaration(this);
        }
    };
    // @Override
    InterfaceMemberDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceMemberDeclaration) {
            listener.exitInterfaceMemberDeclaration(this);
        }
    };
    // @Override
    InterfaceMemberDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceMemberDeclaration) {
            return visitor.visitInterfaceMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceMemberDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceMemberDeclarationContext = InterfaceMemberDeclarationContext;
var ConstDeclarationContext = /** @class */ (function (_super) {
    __extends(ConstDeclarationContext, _super);
    function ConstDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstDeclarationContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ConstDeclarationContext.prototype.constantDeclarator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, ConstantDeclaratorContext);
        }
    };
    ConstDeclarationContext.prototype.SEMI = function () { return this.getToken(apexParser.SEMI, 0); };
    ConstDeclarationContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(ConstDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_constDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterConstDeclaration) {
            listener.enterConstDeclaration(this);
        }
    };
    // @Override
    ConstDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitConstDeclaration) {
            listener.exitConstDeclaration(this);
        }
    };
    // @Override
    ConstDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitConstDeclaration) {
            return visitor.visitConstDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstDeclarationContext = ConstDeclarationContext;
var ConstantDeclaratorContext = /** @class */ (function (_super) {
    __extends(ConstantDeclaratorContext, _super);
    function ConstantDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantDeclaratorContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    ConstantDeclaratorContext.prototype.ASSIGN = function () { return this.getToken(apexParser.ASSIGN, 0); };
    ConstantDeclaratorContext.prototype.variableInitializer = function () {
        return this.getRuleContext(0, VariableInitializerContext);
    };
    ConstantDeclaratorContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LBRACK);
        }
        else {
            return this.getToken(apexParser.LBRACK, i);
        }
    };
    ConstantDeclaratorContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.RBRACK);
        }
        else {
            return this.getToken(apexParser.RBRACK, i);
        }
    };
    Object.defineProperty(ConstantDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_constantDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantDeclarator) {
            listener.enterConstantDeclarator(this);
        }
    };
    // @Override
    ConstantDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantDeclarator) {
            listener.exitConstantDeclarator(this);
        }
    };
    // @Override
    ConstantDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantDeclarator) {
            return visitor.visitConstantDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantDeclaratorContext = ConstantDeclaratorContext;
var InterfaceMethodDeclarationContext = /** @class */ (function (_super) {
    __extends(InterfaceMethodDeclarationContext, _super);
    function InterfaceMethodDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceMethodDeclarationContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    InterfaceMethodDeclarationContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    InterfaceMethodDeclarationContext.prototype.SEMI = function () { return this.getToken(apexParser.SEMI, 0); };
    InterfaceMethodDeclarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    InterfaceMethodDeclarationContext.prototype.VOID = function () { return this.tryGetToken(apexParser.VOID, 0); };
    InterfaceMethodDeclarationContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LBRACK);
        }
        else {
            return this.getToken(apexParser.LBRACK, i);
        }
    };
    InterfaceMethodDeclarationContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.RBRACK);
        }
        else {
            return this.getToken(apexParser.RBRACK, i);
        }
    };
    InterfaceMethodDeclarationContext.prototype.THROWS = function () { return this.tryGetToken(apexParser.THROWS, 0); };
    InterfaceMethodDeclarationContext.prototype.qualifiedNameList = function () {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    };
    Object.defineProperty(InterfaceMethodDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_interfaceMethodDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceMethodDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceMethodDeclaration) {
            listener.enterInterfaceMethodDeclaration(this);
        }
    };
    // @Override
    InterfaceMethodDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceMethodDeclaration) {
            listener.exitInterfaceMethodDeclaration(this);
        }
    };
    // @Override
    InterfaceMethodDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceMethodDeclaration) {
            return visitor.visitInterfaceMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceMethodDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceMethodDeclarationContext = InterfaceMethodDeclarationContext;
var GenericInterfaceMethodDeclarationContext = /** @class */ (function (_super) {
    __extends(GenericInterfaceMethodDeclarationContext, _super);
    function GenericInterfaceMethodDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenericInterfaceMethodDeclarationContext.prototype.typeParameters = function () {
        return this.getRuleContext(0, TypeParametersContext);
    };
    GenericInterfaceMethodDeclarationContext.prototype.interfaceMethodDeclaration = function () {
        return this.getRuleContext(0, InterfaceMethodDeclarationContext);
    };
    Object.defineProperty(GenericInterfaceMethodDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_genericInterfaceMethodDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenericInterfaceMethodDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericInterfaceMethodDeclaration) {
            listener.enterGenericInterfaceMethodDeclaration(this);
        }
    };
    // @Override
    GenericInterfaceMethodDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericInterfaceMethodDeclaration) {
            listener.exitGenericInterfaceMethodDeclaration(this);
        }
    };
    // @Override
    GenericInterfaceMethodDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericInterfaceMethodDeclaration) {
            return visitor.visitGenericInterfaceMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericInterfaceMethodDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenericInterfaceMethodDeclarationContext = GenericInterfaceMethodDeclarationContext;
var VariableDeclaratorsContext = /** @class */ (function (_super) {
    __extends(VariableDeclaratorsContext, _super);
    function VariableDeclaratorsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclaratorsContext.prototype.variableDeclarator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclaratorContext);
        }
    };
    VariableDeclaratorsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(VariableDeclaratorsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_variableDeclarators; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclaratorsContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarators) {
            listener.enterVariableDeclarators(this);
        }
    };
    // @Override
    VariableDeclaratorsContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarators) {
            listener.exitVariableDeclarators(this);
        }
    };
    // @Override
    VariableDeclaratorsContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarators) {
            return visitor.visitVariableDeclarators(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclaratorsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclaratorsContext = VariableDeclaratorsContext;
var VariableDeclaratorContext = /** @class */ (function (_super) {
    __extends(VariableDeclaratorContext, _super);
    function VariableDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclaratorContext.prototype.variableDeclaratorId = function () {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    };
    VariableDeclaratorContext.prototype.ASSIGN = function () { return this.tryGetToken(apexParser.ASSIGN, 0); };
    VariableDeclaratorContext.prototype.variableInitializer = function () {
        return this.tryGetRuleContext(0, VariableInitializerContext);
    };
    Object.defineProperty(VariableDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_variableDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarator) {
            listener.enterVariableDeclarator(this);
        }
    };
    // @Override
    VariableDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarator) {
            listener.exitVariableDeclarator(this);
        }
    };
    // @Override
    VariableDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarator) {
            return visitor.visitVariableDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclaratorContext = VariableDeclaratorContext;
var VariableDeclaratorIdContext = /** @class */ (function (_super) {
    __extends(VariableDeclaratorIdContext, _super);
    function VariableDeclaratorIdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclaratorIdContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    VariableDeclaratorIdContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LBRACK);
        }
        else {
            return this.getToken(apexParser.LBRACK, i);
        }
    };
    VariableDeclaratorIdContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.RBRACK);
        }
        else {
            return this.getToken(apexParser.RBRACK, i);
        }
    };
    Object.defineProperty(VariableDeclaratorIdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_variableDeclaratorId; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclaratorIdContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaratorId) {
            listener.enterVariableDeclaratorId(this);
        }
    };
    // @Override
    VariableDeclaratorIdContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaratorId) {
            listener.exitVariableDeclaratorId(this);
        }
    };
    // @Override
    VariableDeclaratorIdContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaratorId) {
            return visitor.visitVariableDeclaratorId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclaratorIdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclaratorIdContext = VariableDeclaratorIdContext;
var VariableInitializerContext = /** @class */ (function (_super) {
    __extends(VariableInitializerContext, _super);
    function VariableInitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableInitializerContext.prototype.arrayInitializer = function () {
        return this.tryGetRuleContext(0, ArrayInitializerContext);
    };
    VariableInitializerContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(VariableInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_variableInitializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableInitializerContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableInitializer) {
            listener.enterVariableInitializer(this);
        }
    };
    // @Override
    VariableInitializerContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableInitializer) {
            listener.exitVariableInitializer(this);
        }
    };
    // @Override
    VariableInitializerContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableInitializer) {
            return visitor.visitVariableInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableInitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableInitializerContext = VariableInitializerContext;
var ArrayInitializerContext = /** @class */ (function (_super) {
    __extends(ArrayInitializerContext, _super);
    function ArrayInitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayInitializerContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    ArrayInitializerContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    ArrayInitializerContext.prototype.variableInitializer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }
        else {
            return this.getRuleContext(i, VariableInitializerContext);
        }
    };
    ArrayInitializerContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(ArrayInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_arrayInitializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayInitializerContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayInitializer) {
            listener.enterArrayInitializer(this);
        }
    };
    // @Override
    ArrayInitializerContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayInitializer) {
            listener.exitArrayInitializer(this);
        }
    };
    // @Override
    ArrayInitializerContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayInitializer) {
            return visitor.visitArrayInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayInitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayInitializerContext = ArrayInitializerContext;
var EnumConstantNameContext = /** @class */ (function (_super) {
    __extends(EnumConstantNameContext, _super);
    function EnumConstantNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumConstantNameContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    Object.defineProperty(EnumConstantNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_enumConstantName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumConstantNameContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumConstantName) {
            listener.enterEnumConstantName(this);
        }
    };
    // @Override
    EnumConstantNameContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumConstantName) {
            listener.exitEnumConstantName(this);
        }
    };
    // @Override
    EnumConstantNameContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumConstantName) {
            return visitor.visitEnumConstantName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumConstantNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumConstantNameContext = EnumConstantNameContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.classOrInterfaceType = function () {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    };
    TypeContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LBRACK);
        }
        else {
            return this.getToken(apexParser.LBRACK, i);
        }
    };
    TypeContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.RBRACK);
        }
        else {
            return this.getToken(apexParser.RBRACK, i);
        }
    };
    TypeContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_type; },
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
var ClassOrInterfaceTypeContext = /** @class */ (function (_super) {
    __extends(ClassOrInterfaceTypeContext, _super);
    function ClassOrInterfaceTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassOrInterfaceTypeContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.Identifier);
        }
        else {
            return this.getToken(apexParser.Identifier, i);
        }
    };
    ClassOrInterfaceTypeContext.prototype.typeArguments = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentsContext);
        }
    };
    ClassOrInterfaceTypeContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.DOT);
        }
        else {
            return this.getToken(apexParser.DOT, i);
        }
    };
    ClassOrInterfaceTypeContext.prototype.SET = function () { return this.tryGetToken(apexParser.SET, 0); };
    Object.defineProperty(ClassOrInterfaceTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_classOrInterfaceType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassOrInterfaceTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterClassOrInterfaceType) {
            listener.enterClassOrInterfaceType(this);
        }
    };
    // @Override
    ClassOrInterfaceTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitClassOrInterfaceType) {
            listener.exitClassOrInterfaceType(this);
        }
    };
    // @Override
    ClassOrInterfaceTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitClassOrInterfaceType) {
            return visitor.visitClassOrInterfaceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassOrInterfaceTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassOrInterfaceTypeContext = ClassOrInterfaceTypeContext;
var PrimitiveTypeContext = /** @class */ (function (_super) {
    __extends(PrimitiveTypeContext, _super);
    function PrimitiveTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveTypeContext.prototype.CHAR = function () { return this.tryGetToken(apexParser.CHAR, 0); };
    PrimitiveTypeContext.prototype.BYTE = function () { return this.tryGetToken(apexParser.BYTE, 0); };
    PrimitiveTypeContext.prototype.SHORT = function () { return this.tryGetToken(apexParser.SHORT, 0); };
    PrimitiveTypeContext.prototype.INT = function () { return this.tryGetToken(apexParser.INT, 0); };
    PrimitiveTypeContext.prototype.FLOAT = function () { return this.tryGetToken(apexParser.FLOAT, 0); };
    Object.defineProperty(PrimitiveTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_primitiveType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimitiveTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimitiveType) {
            listener.enterPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimitiveType) {
            listener.exitPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimitiveType) {
            return visitor.visitPrimitiveType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimitiveTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimitiveTypeContext = PrimitiveTypeContext;
var TypeArgumentsContext = /** @class */ (function (_super) {
    __extends(TypeArgumentsContext, _super);
    function TypeArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentsContext.prototype.LT = function () { return this.getToken(apexParser.LT, 0); };
    TypeArgumentsContext.prototype.typeArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentContext);
        }
    };
    TypeArgumentsContext.prototype.GT = function () { return this.getToken(apexParser.GT, 0); };
    TypeArgumentsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeArguments; },
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
var TypeArgumentContext = /** @class */ (function (_super) {
    __extends(TypeArgumentContext, _super);
    function TypeArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    TypeArgumentContext.prototype.QUESTION = function () { return this.tryGetToken(apexParser.QUESTION, 0); };
    TypeArgumentContext.prototype.EXTENDS = function () { return this.tryGetToken(apexParser.EXTENDS, 0); };
    TypeArgumentContext.prototype.SUPER = function () { return this.tryGetToken(apexParser.SUPER, 0); };
    Object.defineProperty(TypeArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArgument) {
            listener.enterTypeArgument(this);
        }
    };
    // @Override
    TypeArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArgument) {
            listener.exitTypeArgument(this);
        }
    };
    // @Override
    TypeArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArgument) {
            return visitor.visitTypeArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgumentContext = TypeArgumentContext;
var QualifiedNameListContext = /** @class */ (function (_super) {
    __extends(QualifiedNameListContext, _super);
    function QualifiedNameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedNameListContext.prototype.qualifiedName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNameContext);
        }
    };
    QualifiedNameListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(QualifiedNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_qualifiedNameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedNameListContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedNameList) {
            listener.enterQualifiedNameList(this);
        }
    };
    // @Override
    QualifiedNameListContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedNameList) {
            listener.exitQualifiedNameList(this);
        }
    };
    // @Override
    QualifiedNameListContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedNameList) {
            return visitor.visitQualifiedNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedNameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedNameListContext = QualifiedNameListContext;
var FormalParametersContext = /** @class */ (function (_super) {
    __extends(FormalParametersContext, _super);
    function FormalParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParametersContext.prototype.LPAREN = function () { return this.getToken(apexParser.LPAREN, 0); };
    FormalParametersContext.prototype.RPAREN = function () { return this.getToken(apexParser.RPAREN, 0); };
    FormalParametersContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_formalParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameters) {
            listener.enterFormalParameters(this);
        }
    };
    // @Override
    FormalParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameters) {
            listener.exitFormalParameters(this);
        }
    };
    // @Override
    FormalParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameters) {
            return visitor.visitFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParametersContext = FormalParametersContext;
var FormalParameterListContext = /** @class */ (function (_super) {
    __extends(FormalParameterListContext, _super);
    function FormalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterListContext.prototype.formalParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterContext);
        }
    };
    FormalParameterListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    FormalParameterListContext.prototype.lastFormalParameter = function () {
        return this.tryGetRuleContext(0, LastFormalParameterContext);
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_formalParameterList; },
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
var FormalParameterContext = /** @class */ (function (_super) {
    __extends(FormalParameterContext, _super);
    function FormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    FormalParameterContext.prototype.variableDeclaratorId = function () {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    };
    FormalParameterContext.prototype.variableModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    };
    Object.defineProperty(FormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_formalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameter) {
            listener.enterFormalParameter(this);
        }
    };
    // @Override
    FormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameter) {
            listener.exitFormalParameter(this);
        }
    };
    // @Override
    FormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameter) {
            return visitor.visitFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterContext = FormalParameterContext;
var LastFormalParameterContext = /** @class */ (function (_super) {
    __extends(LastFormalParameterContext, _super);
    function LastFormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LastFormalParameterContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    LastFormalParameterContext.prototype.ELLIPSIS = function () { return this.getToken(apexParser.ELLIPSIS, 0); };
    LastFormalParameterContext.prototype.variableDeclaratorId = function () {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    };
    LastFormalParameterContext.prototype.variableModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    };
    Object.defineProperty(LastFormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_lastFormalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LastFormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterLastFormalParameter) {
            listener.enterLastFormalParameter(this);
        }
    };
    // @Override
    LastFormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitLastFormalParameter) {
            listener.exitLastFormalParameter(this);
        }
    };
    // @Override
    LastFormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitLastFormalParameter) {
            return visitor.visitLastFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LastFormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LastFormalParameterContext = LastFormalParameterContext;
var MethodBodyContext = /** @class */ (function (_super) {
    __extends(MethodBodyContext, _super);
    function MethodBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodBodyContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(MethodBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_methodBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodBody) {
            listener.enterMethodBody(this);
        }
    };
    // @Override
    MethodBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodBody) {
            listener.exitMethodBody(this);
        }
    };
    // @Override
    MethodBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodBody) {
            return visitor.visitMethodBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodBodyContext = MethodBodyContext;
var ConstructorBodyContext = /** @class */ (function (_super) {
    __extends(ConstructorBodyContext, _super);
    function ConstructorBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorBodyContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(ConstructorBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_constructorBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorBody) {
            listener.enterConstructorBody(this);
        }
    };
    // @Override
    ConstructorBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorBody) {
            listener.exitConstructorBody(this);
        }
    };
    // @Override
    ConstructorBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorBody) {
            return visitor.visitConstructorBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorBodyContext = ConstructorBodyContext;
var QualifiedNameContext = /** @class */ (function (_super) {
    __extends(QualifiedNameContext, _super);
    function QualifiedNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedNameContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.Identifier);
        }
        else {
            return this.getToken(apexParser.Identifier, i);
        }
    };
    QualifiedNameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.DOT);
        }
        else {
            return this.getToken(apexParser.DOT, i);
        }
    };
    Object.defineProperty(QualifiedNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_qualifiedName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedNameContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedName) {
            listener.enterQualifiedName(this);
        }
    };
    // @Override
    QualifiedNameContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedName) {
            listener.exitQualifiedName(this);
        }
    };
    // @Override
    QualifiedNameContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedNameContext = QualifiedNameContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.IntegerLiteral = function () { return this.tryGetToken(apexParser.IntegerLiteral, 0); };
    LiteralContext.prototype.FloatingPointLiteral = function () { return this.tryGetToken(apexParser.FloatingPointLiteral, 0); };
    LiteralContext.prototype.CharacterLiteral = function () { return this.tryGetToken(apexParser.CharacterLiteral, 0); };
    LiteralContext.prototype.StringLiteral = function () { return this.tryGetToken(apexParser.StringLiteral, 0); };
    LiteralContext.prototype.BooleanLiteral = function () { return this.tryGetToken(apexParser.BooleanLiteral, 0); };
    LiteralContext.prototype.NullLiteral = function () { return this.tryGetToken(apexParser.NullLiteral, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_literal; },
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
var AnnotationContext = /** @class */ (function (_super) {
    __extends(AnnotationContext, _super);
    function AnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationContext.prototype.AT = function () { return this.getToken(apexParser.AT, 0); };
    AnnotationContext.prototype.annotationName = function () {
        return this.getRuleContext(0, AnnotationNameContext);
    };
    AnnotationContext.prototype.LPAREN = function () { return this.tryGetToken(apexParser.LPAREN, 0); };
    AnnotationContext.prototype.RPAREN = function () { return this.tryGetToken(apexParser.RPAREN, 0); };
    AnnotationContext.prototype.elementValuePairs = function () {
        return this.tryGetRuleContext(0, ElementValuePairsContext);
    };
    AnnotationContext.prototype.elementValue = function () {
        return this.tryGetRuleContext(0, ElementValueContext);
    };
    Object.defineProperty(AnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationContext = AnnotationContext;
var AnnotationNameContext = /** @class */ (function (_super) {
    __extends(AnnotationNameContext, _super);
    function AnnotationNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationNameContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    Object.defineProperty(AnnotationNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationNameContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationName) {
            listener.enterAnnotationName(this);
        }
    };
    // @Override
    AnnotationNameContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationName) {
            listener.exitAnnotationName(this);
        }
    };
    // @Override
    AnnotationNameContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationName) {
            return visitor.visitAnnotationName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationNameContext = AnnotationNameContext;
var ElementValuePairsContext = /** @class */ (function (_super) {
    __extends(ElementValuePairsContext, _super);
    function ElementValuePairsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementValuePairsContext.prototype.elementValuePair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValuePairContext);
        }
        else {
            return this.getRuleContext(i, ElementValuePairContext);
        }
    };
    ElementValuePairsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(ElementValuePairsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_elementValuePairs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementValuePairsContext.prototype.enterRule = function (listener) {
        if (listener.enterElementValuePairs) {
            listener.enterElementValuePairs(this);
        }
    };
    // @Override
    ElementValuePairsContext.prototype.exitRule = function (listener) {
        if (listener.exitElementValuePairs) {
            listener.exitElementValuePairs(this);
        }
    };
    // @Override
    ElementValuePairsContext.prototype.accept = function (visitor) {
        if (visitor.visitElementValuePairs) {
            return visitor.visitElementValuePairs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementValuePairsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementValuePairsContext = ElementValuePairsContext;
var ElementValuePairContext = /** @class */ (function (_super) {
    __extends(ElementValuePairContext, _super);
    function ElementValuePairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementValuePairContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    ElementValuePairContext.prototype.ASSIGN = function () { return this.getToken(apexParser.ASSIGN, 0); };
    ElementValuePairContext.prototype.elementValue = function () {
        return this.getRuleContext(0, ElementValueContext);
    };
    Object.defineProperty(ElementValuePairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_elementValuePair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementValuePairContext.prototype.enterRule = function (listener) {
        if (listener.enterElementValuePair) {
            listener.enterElementValuePair(this);
        }
    };
    // @Override
    ElementValuePairContext.prototype.exitRule = function (listener) {
        if (listener.exitElementValuePair) {
            listener.exitElementValuePair(this);
        }
    };
    // @Override
    ElementValuePairContext.prototype.accept = function (visitor) {
        if (visitor.visitElementValuePair) {
            return visitor.visitElementValuePair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementValuePairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementValuePairContext = ElementValuePairContext;
var ElementValueContext = /** @class */ (function (_super) {
    __extends(ElementValueContext, _super);
    function ElementValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementValueContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ElementValueContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    ElementValueContext.prototype.elementValueArrayInitializer = function () {
        return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
    };
    Object.defineProperty(ElementValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_elementValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementValueContext.prototype.enterRule = function (listener) {
        if (listener.enterElementValue) {
            listener.enterElementValue(this);
        }
    };
    // @Override
    ElementValueContext.prototype.exitRule = function (listener) {
        if (listener.exitElementValue) {
            listener.exitElementValue(this);
        }
    };
    // @Override
    ElementValueContext.prototype.accept = function (visitor) {
        if (visitor.visitElementValue) {
            return visitor.visitElementValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementValueContext = ElementValueContext;
var ElementValueArrayInitializerContext = /** @class */ (function (_super) {
    __extends(ElementValueArrayInitializerContext, _super);
    function ElementValueArrayInitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementValueArrayInitializerContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    ElementValueArrayInitializerContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    ElementValueArrayInitializerContext.prototype.elementValue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValueContext);
        }
        else {
            return this.getRuleContext(i, ElementValueContext);
        }
    };
    ElementValueArrayInitializerContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(ElementValueArrayInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_elementValueArrayInitializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementValueArrayInitializerContext.prototype.enterRule = function (listener) {
        if (listener.enterElementValueArrayInitializer) {
            listener.enterElementValueArrayInitializer(this);
        }
    };
    // @Override
    ElementValueArrayInitializerContext.prototype.exitRule = function (listener) {
        if (listener.exitElementValueArrayInitializer) {
            listener.exitElementValueArrayInitializer(this);
        }
    };
    // @Override
    ElementValueArrayInitializerContext.prototype.accept = function (visitor) {
        if (visitor.visitElementValueArrayInitializer) {
            return visitor.visitElementValueArrayInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementValueArrayInitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementValueArrayInitializerContext = ElementValueArrayInitializerContext;
var AnnotationTypeDeclarationContext = /** @class */ (function (_super) {
    __extends(AnnotationTypeDeclarationContext, _super);
    function AnnotationTypeDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationTypeDeclarationContext.prototype.AT = function () { return this.getToken(apexParser.AT, 0); };
    AnnotationTypeDeclarationContext.prototype.INTERFACE = function () { return this.getToken(apexParser.INTERFACE, 0); };
    AnnotationTypeDeclarationContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    AnnotationTypeDeclarationContext.prototype.annotationTypeBody = function () {
        return this.getRuleContext(0, AnnotationTypeBodyContext);
    };
    Object.defineProperty(AnnotationTypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationTypeDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationTypeDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationTypeDeclaration) {
            listener.enterAnnotationTypeDeclaration(this);
        }
    };
    // @Override
    AnnotationTypeDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationTypeDeclaration) {
            listener.exitAnnotationTypeDeclaration(this);
        }
    };
    // @Override
    AnnotationTypeDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationTypeDeclaration) {
            return visitor.visitAnnotationTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationTypeDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationTypeDeclarationContext = AnnotationTypeDeclarationContext;
var AnnotationTypeBodyContext = /** @class */ (function (_super) {
    __extends(AnnotationTypeBodyContext, _super);
    function AnnotationTypeBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationTypeBodyContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    AnnotationTypeBodyContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    AnnotationTypeBodyContext.prototype.annotationTypeElementDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
        }
    };
    Object.defineProperty(AnnotationTypeBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationTypeBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationTypeBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationTypeBody) {
            listener.enterAnnotationTypeBody(this);
        }
    };
    // @Override
    AnnotationTypeBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationTypeBody) {
            listener.exitAnnotationTypeBody(this);
        }
    };
    // @Override
    AnnotationTypeBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationTypeBody) {
            return visitor.visitAnnotationTypeBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationTypeBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationTypeBodyContext = AnnotationTypeBodyContext;
var AnnotationTypeElementDeclarationContext = /** @class */ (function (_super) {
    __extends(AnnotationTypeElementDeclarationContext, _super);
    function AnnotationTypeElementDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationTypeElementDeclarationContext.prototype.annotationTypeElementRest = function () {
        return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
    };
    AnnotationTypeElementDeclarationContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    AnnotationTypeElementDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    Object.defineProperty(AnnotationTypeElementDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationTypeElementDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationTypeElementDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationTypeElementDeclaration) {
            listener.enterAnnotationTypeElementDeclaration(this);
        }
    };
    // @Override
    AnnotationTypeElementDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationTypeElementDeclaration) {
            listener.exitAnnotationTypeElementDeclaration(this);
        }
    };
    // @Override
    AnnotationTypeElementDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationTypeElementDeclaration) {
            return visitor.visitAnnotationTypeElementDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationTypeElementDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationTypeElementDeclarationContext = AnnotationTypeElementDeclarationContext;
var AnnotationTypeElementRestContext = /** @class */ (function (_super) {
    __extends(AnnotationTypeElementRestContext, _super);
    function AnnotationTypeElementRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationTypeElementRestContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    AnnotationTypeElementRestContext.prototype.annotationMethodOrConstantRest = function () {
        return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
    };
    AnnotationTypeElementRestContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    AnnotationTypeElementRestContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    AnnotationTypeElementRestContext.prototype.interfaceDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    };
    AnnotationTypeElementRestContext.prototype.enumDeclaration = function () {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    };
    AnnotationTypeElementRestContext.prototype.annotationTypeDeclaration = function () {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    };
    Object.defineProperty(AnnotationTypeElementRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationTypeElementRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationTypeElementRestContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationTypeElementRest) {
            listener.enterAnnotationTypeElementRest(this);
        }
    };
    // @Override
    AnnotationTypeElementRestContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationTypeElementRest) {
            listener.exitAnnotationTypeElementRest(this);
        }
    };
    // @Override
    AnnotationTypeElementRestContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationTypeElementRest) {
            return visitor.visitAnnotationTypeElementRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationTypeElementRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationTypeElementRestContext = AnnotationTypeElementRestContext;
var AnnotationMethodOrConstantRestContext = /** @class */ (function (_super) {
    __extends(AnnotationMethodOrConstantRestContext, _super);
    function AnnotationMethodOrConstantRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationMethodOrConstantRestContext.prototype.annotationMethodRest = function () {
        return this.tryGetRuleContext(0, AnnotationMethodRestContext);
    };
    AnnotationMethodOrConstantRestContext.prototype.annotationConstantRest = function () {
        return this.tryGetRuleContext(0, AnnotationConstantRestContext);
    };
    Object.defineProperty(AnnotationMethodOrConstantRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationMethodOrConstantRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationMethodOrConstantRestContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationMethodOrConstantRest) {
            listener.enterAnnotationMethodOrConstantRest(this);
        }
    };
    // @Override
    AnnotationMethodOrConstantRestContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationMethodOrConstantRest) {
            listener.exitAnnotationMethodOrConstantRest(this);
        }
    };
    // @Override
    AnnotationMethodOrConstantRestContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationMethodOrConstantRest) {
            return visitor.visitAnnotationMethodOrConstantRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationMethodOrConstantRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationMethodOrConstantRestContext = AnnotationMethodOrConstantRestContext;
var AnnotationMethodRestContext = /** @class */ (function (_super) {
    __extends(AnnotationMethodRestContext, _super);
    function AnnotationMethodRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationMethodRestContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    AnnotationMethodRestContext.prototype.LPAREN = function () { return this.getToken(apexParser.LPAREN, 0); };
    AnnotationMethodRestContext.prototype.RPAREN = function () { return this.getToken(apexParser.RPAREN, 0); };
    AnnotationMethodRestContext.prototype.defaultValue = function () {
        return this.tryGetRuleContext(0, DefaultValueContext);
    };
    Object.defineProperty(AnnotationMethodRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationMethodRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationMethodRestContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationMethodRest) {
            listener.enterAnnotationMethodRest(this);
        }
    };
    // @Override
    AnnotationMethodRestContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationMethodRest) {
            listener.exitAnnotationMethodRest(this);
        }
    };
    // @Override
    AnnotationMethodRestContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationMethodRest) {
            return visitor.visitAnnotationMethodRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationMethodRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationMethodRestContext = AnnotationMethodRestContext;
var AnnotationConstantRestContext = /** @class */ (function (_super) {
    __extends(AnnotationConstantRestContext, _super);
    function AnnotationConstantRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationConstantRestContext.prototype.variableDeclarators = function () {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    };
    Object.defineProperty(AnnotationConstantRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_annotationConstantRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationConstantRestContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationConstantRest) {
            listener.enterAnnotationConstantRest(this);
        }
    };
    // @Override
    AnnotationConstantRestContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationConstantRest) {
            listener.exitAnnotationConstantRest(this);
        }
    };
    // @Override
    AnnotationConstantRestContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationConstantRest) {
            return visitor.visitAnnotationConstantRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationConstantRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationConstantRestContext = AnnotationConstantRestContext;
var DefaultValueContext = /** @class */ (function (_super) {
    __extends(DefaultValueContext, _super);
    function DefaultValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultValueContext.prototype.DEFAULT = function () { return this.getToken(apexParser.DEFAULT, 0); };
    DefaultValueContext.prototype.elementValue = function () {
        return this.getRuleContext(0, ElementValueContext);
    };
    Object.defineProperty(DefaultValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_defaultValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultValueContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultValue) {
            listener.enterDefaultValue(this);
        }
    };
    // @Override
    DefaultValueContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultValue) {
            listener.exitDefaultValue(this);
        }
    };
    // @Override
    DefaultValueContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultValue) {
            return visitor.visitDefaultValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultValueContext = DefaultValueContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    BlockContext.prototype.RBRACE = function () { return this.getToken(apexParser.RBRACE, 0); };
    BlockContext.prototype.blockStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        else {
            return this.getRuleContext(i, BlockStatementContext);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_block; },
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
var BlockStatementContext = /** @class */ (function (_super) {
    __extends(BlockStatementContext, _super);
    function BlockStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockStatementContext.prototype.localVariableDeclarationStatement = function () {
        return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
    };
    BlockStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    BlockStatementContext.prototype.typeDeclaration = function () {
        return this.tryGetRuleContext(0, TypeDeclarationContext);
    };
    Object.defineProperty(BlockStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_blockStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockStatement) {
            listener.enterBlockStatement(this);
        }
    };
    // @Override
    BlockStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockStatement) {
            listener.exitBlockStatement(this);
        }
    };
    // @Override
    BlockStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockStatementContext = BlockStatementContext;
var LocalVariableDeclarationStatementContext = /** @class */ (function (_super) {
    __extends(LocalVariableDeclarationStatementContext, _super);
    function LocalVariableDeclarationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalVariableDeclarationStatementContext.prototype.localVariableDeclaration = function () {
        return this.getRuleContext(0, LocalVariableDeclarationContext);
    };
    LocalVariableDeclarationStatementContext.prototype.SEMI = function () { return this.getToken(apexParser.SEMI, 0); };
    Object.defineProperty(LocalVariableDeclarationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_localVariableDeclarationStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocalVariableDeclarationStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterLocalVariableDeclarationStatement) {
            listener.enterLocalVariableDeclarationStatement(this);
        }
    };
    // @Override
    LocalVariableDeclarationStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitLocalVariableDeclarationStatement) {
            listener.exitLocalVariableDeclarationStatement(this);
        }
    };
    // @Override
    LocalVariableDeclarationStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitLocalVariableDeclarationStatement) {
            return visitor.visitLocalVariableDeclarationStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocalVariableDeclarationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocalVariableDeclarationStatementContext = LocalVariableDeclarationStatementContext;
var LocalVariableDeclarationContext = /** @class */ (function (_super) {
    __extends(LocalVariableDeclarationContext, _super);
    function LocalVariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalVariableDeclarationContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    LocalVariableDeclarationContext.prototype.variableDeclarators = function () {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    };
    LocalVariableDeclarationContext.prototype.variableModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    };
    Object.defineProperty(LocalVariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_localVariableDeclaration; },
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
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.IF = function () { return this.tryGetToken(apexParser.IF, 0); };
    StatementContext.prototype.parExpression = function () {
        return this.tryGetRuleContext(0, ParExpressionContext);
    };
    StatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    StatementContext.prototype.ELSE = function () { return this.tryGetToken(apexParser.ELSE, 0); };
    StatementContext.prototype.FOR = function () { return this.tryGetToken(apexParser.FOR, 0); };
    StatementContext.prototype.LPAREN = function () { return this.tryGetToken(apexParser.LPAREN, 0); };
    StatementContext.prototype.forControl = function () {
        return this.tryGetRuleContext(0, ForControlContext);
    };
    StatementContext.prototype.RPAREN = function () { return this.tryGetToken(apexParser.RPAREN, 0); };
    StatementContext.prototype.WHILE = function () { return this.tryGetToken(apexParser.WHILE, 0); };
    StatementContext.prototype.DO = function () { return this.tryGetToken(apexParser.DO, 0); };
    StatementContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    StatementContext.prototype.RUNAS = function () { return this.tryGetToken(apexParser.RUNAS, 0); };
    StatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    StatementContext.prototype.TRY = function () { return this.tryGetToken(apexParser.TRY, 0); };
    StatementContext.prototype.finallyBlock = function () {
        return this.tryGetRuleContext(0, FinallyBlockContext);
    };
    StatementContext.prototype.catchClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }
        else {
            return this.getRuleContext(i, CatchClauseContext);
        }
    };
    StatementContext.prototype.resourceSpecification = function () {
        return this.tryGetRuleContext(0, ResourceSpecificationContext);
    };
    StatementContext.prototype.RETURN = function () { return this.tryGetToken(apexParser.RETURN, 0); };
    StatementContext.prototype.THROW = function () { return this.tryGetToken(apexParser.THROW, 0); };
    StatementContext.prototype.BREAK = function () { return this.tryGetToken(apexParser.BREAK, 0); };
    StatementContext.prototype.Identifier = function () { return this.tryGetToken(apexParser.Identifier, 0); };
    StatementContext.prototype.CONTINUE = function () { return this.tryGetToken(apexParser.CONTINUE, 0); };
    StatementContext.prototype.statementExpression = function () {
        return this.tryGetRuleContext(0, StatementExpressionContext);
    };
    StatementContext.prototype.COLON = function () { return this.tryGetToken(apexParser.COLON, 0); };
    StatementContext.prototype.apexDbExpression = function () {
        return this.tryGetRuleContext(0, ApexDbExpressionContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_statement; },
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
var PropertyBlockContext = /** @class */ (function (_super) {
    __extends(PropertyBlockContext, _super);
    function PropertyBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyBlockContext.prototype.getter = function () {
        return this.tryGetRuleContext(0, GetterContext);
    };
    PropertyBlockContext.prototype.setter = function () {
        return this.tryGetRuleContext(0, SetterContext);
    };
    PropertyBlockContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    Object.defineProperty(PropertyBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_propertyBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyBlock) {
            listener.enterPropertyBlock(this);
        }
    };
    // @Override
    PropertyBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyBlock) {
            listener.exitPropertyBlock(this);
        }
    };
    // @Override
    PropertyBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyBlock) {
            return visitor.visitPropertyBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyBlockContext = PropertyBlockContext;
var GetterContext = /** @class */ (function (_super) {
    __extends(GetterContext, _super);
    function GetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetterContext.prototype.GET = function () { return this.getToken(apexParser.GET, 0); };
    GetterContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    GetterContext.prototype.methodBody = function () {
        return this.tryGetRuleContext(0, MethodBodyContext);
    };
    Object.defineProperty(GetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_getter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetterContext.prototype.enterRule = function (listener) {
        if (listener.enterGetter) {
            listener.enterGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.exitRule = function (listener) {
        if (listener.exitGetter) {
            listener.exitGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.accept = function (visitor) {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetterContext = GetterContext;
var SetterContext = /** @class */ (function (_super) {
    __extends(SetterContext, _super);
    function SetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetterContext.prototype.SET = function () { return this.getToken(apexParser.SET, 0); };
    SetterContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    SetterContext.prototype.methodBody = function () {
        return this.tryGetRuleContext(0, MethodBodyContext);
    };
    Object.defineProperty(SetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_setter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetterContext.prototype.enterRule = function (listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.exitRule = function (listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.accept = function (visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetterContext = SetterContext;
var CatchClauseContext = /** @class */ (function (_super) {
    __extends(CatchClauseContext, _super);
    function CatchClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchClauseContext.prototype.CATCH = function () { return this.getToken(apexParser.CATCH, 0); };
    CatchClauseContext.prototype.LPAREN = function () { return this.getToken(apexParser.LPAREN, 0); };
    CatchClauseContext.prototype.catchType = function () {
        return this.getRuleContext(0, CatchTypeContext);
    };
    CatchClauseContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    CatchClauseContext.prototype.RPAREN = function () { return this.getToken(apexParser.RPAREN, 0); };
    CatchClauseContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    CatchClauseContext.prototype.variableModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    };
    Object.defineProperty(CatchClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_catchClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchClause) {
            listener.enterCatchClause(this);
        }
    };
    // @Override
    CatchClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchClause) {
            listener.exitCatchClause(this);
        }
    };
    // @Override
    CatchClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchClauseContext = CatchClauseContext;
var CatchTypeContext = /** @class */ (function (_super) {
    __extends(CatchTypeContext, _super);
    function CatchTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchTypeContext.prototype.qualifiedName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNameContext);
        }
    };
    CatchTypeContext.prototype.BITOR = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.BITOR);
        }
        else {
            return this.getToken(apexParser.BITOR, i);
        }
    };
    Object.defineProperty(CatchTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_catchType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchType) {
            listener.enterCatchType(this);
        }
    };
    // @Override
    CatchTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchType) {
            listener.exitCatchType(this);
        }
    };
    // @Override
    CatchTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchType) {
            return visitor.visitCatchType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchTypeContext = CatchTypeContext;
var FinallyBlockContext = /** @class */ (function (_super) {
    __extends(FinallyBlockContext, _super);
    function FinallyBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyBlockContext.prototype.FINALLY = function () { return this.getToken(apexParser.FINALLY, 0); };
    FinallyBlockContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(FinallyBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_finallyBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyBlock) {
            listener.enterFinallyBlock(this);
        }
    };
    // @Override
    FinallyBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyBlock) {
            listener.exitFinallyBlock(this);
        }
    };
    // @Override
    FinallyBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyBlock) {
            return visitor.visitFinallyBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyBlockContext = FinallyBlockContext;
var ResourceSpecificationContext = /** @class */ (function (_super) {
    __extends(ResourceSpecificationContext, _super);
    function ResourceSpecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResourceSpecificationContext.prototype.LPAREN = function () { return this.getToken(apexParser.LPAREN, 0); };
    ResourceSpecificationContext.prototype.resources = function () {
        return this.getRuleContext(0, ResourcesContext);
    };
    ResourceSpecificationContext.prototype.RPAREN = function () { return this.getToken(apexParser.RPAREN, 0); };
    ResourceSpecificationContext.prototype.SEMI = function () { return this.tryGetToken(apexParser.SEMI, 0); };
    Object.defineProperty(ResourceSpecificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_resourceSpecification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResourceSpecificationContext.prototype.enterRule = function (listener) {
        if (listener.enterResourceSpecification) {
            listener.enterResourceSpecification(this);
        }
    };
    // @Override
    ResourceSpecificationContext.prototype.exitRule = function (listener) {
        if (listener.exitResourceSpecification) {
            listener.exitResourceSpecification(this);
        }
    };
    // @Override
    ResourceSpecificationContext.prototype.accept = function (visitor) {
        if (visitor.visitResourceSpecification) {
            return visitor.visitResourceSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResourceSpecificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResourceSpecificationContext = ResourceSpecificationContext;
var ResourcesContext = /** @class */ (function (_super) {
    __extends(ResourcesContext, _super);
    function ResourcesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResourcesContext.prototype.resource = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    };
    ResourcesContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.SEMI);
        }
        else {
            return this.getToken(apexParser.SEMI, i);
        }
    };
    Object.defineProperty(ResourcesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_resources; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResourcesContext.prototype.enterRule = function (listener) {
        if (listener.enterResources) {
            listener.enterResources(this);
        }
    };
    // @Override
    ResourcesContext.prototype.exitRule = function (listener) {
        if (listener.exitResources) {
            listener.exitResources(this);
        }
    };
    // @Override
    ResourcesContext.prototype.accept = function (visitor) {
        if (visitor.visitResources) {
            return visitor.visitResources(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResourcesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResourcesContext = ResourcesContext;
var ResourceContext = /** @class */ (function (_super) {
    __extends(ResourceContext, _super);
    function ResourceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResourceContext.prototype.classOrInterfaceType = function () {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    };
    ResourceContext.prototype.variableDeclaratorId = function () {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    };
    ResourceContext.prototype.ASSIGN = function () { return this.getToken(apexParser.ASSIGN, 0); };
    ResourceContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ResourceContext.prototype.variableModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    };
    Object.defineProperty(ResourceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_resource; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResourceContext.prototype.enterRule = function (listener) {
        if (listener.enterResource) {
            listener.enterResource(this);
        }
    };
    // @Override
    ResourceContext.prototype.exitRule = function (listener) {
        if (listener.exitResource) {
            listener.exitResource(this);
        }
    };
    // @Override
    ResourceContext.prototype.accept = function (visitor) {
        if (visitor.visitResource) {
            return visitor.visitResource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResourceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResourceContext = ResourceContext;
var ForControlContext = /** @class */ (function (_super) {
    __extends(ForControlContext, _super);
    function ForControlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForControlContext.prototype.enhancedForControl = function () {
        return this.tryGetRuleContext(0, EnhancedForControlContext);
    };
    ForControlContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.SEMI);
        }
        else {
            return this.getToken(apexParser.SEMI, i);
        }
    };
    ForControlContext.prototype.forInit = function () {
        return this.tryGetRuleContext(0, ForInitContext);
    };
    ForControlContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ForControlContext.prototype.forUpdate = function () {
        return this.tryGetRuleContext(0, ForUpdateContext);
    };
    Object.defineProperty(ForControlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_forControl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForControlContext.prototype.enterRule = function (listener) {
        if (listener.enterForControl) {
            listener.enterForControl(this);
        }
    };
    // @Override
    ForControlContext.prototype.exitRule = function (listener) {
        if (listener.exitForControl) {
            listener.exitForControl(this);
        }
    };
    // @Override
    ForControlContext.prototype.accept = function (visitor) {
        if (visitor.visitForControl) {
            return visitor.visitForControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForControlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForControlContext = ForControlContext;
var ForInitContext = /** @class */ (function (_super) {
    __extends(ForInitContext, _super);
    function ForInitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForInitContext.prototype.localVariableDeclaration = function () {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    };
    ForInitContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ForInitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_forInit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForInitContext.prototype.enterRule = function (listener) {
        if (listener.enterForInit) {
            listener.enterForInit(this);
        }
    };
    // @Override
    ForInitContext.prototype.exitRule = function (listener) {
        if (listener.exitForInit) {
            listener.exitForInit(this);
        }
    };
    // @Override
    ForInitContext.prototype.accept = function (visitor) {
        if (visitor.visitForInit) {
            return visitor.visitForInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForInitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForInitContext = ForInitContext;
var EnhancedForControlContext = /** @class */ (function (_super) {
    __extends(EnhancedForControlContext, _super);
    function EnhancedForControlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnhancedForControlContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    EnhancedForControlContext.prototype.variableDeclaratorId = function () {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    };
    EnhancedForControlContext.prototype.COLON = function () { return this.getToken(apexParser.COLON, 0); };
    EnhancedForControlContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    EnhancedForControlContext.prototype.variableModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    };
    Object.defineProperty(EnhancedForControlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_enhancedForControl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnhancedForControlContext.prototype.enterRule = function (listener) {
        if (listener.enterEnhancedForControl) {
            listener.enterEnhancedForControl(this);
        }
    };
    // @Override
    EnhancedForControlContext.prototype.exitRule = function (listener) {
        if (listener.exitEnhancedForControl) {
            listener.exitEnhancedForControl(this);
        }
    };
    // @Override
    EnhancedForControlContext.prototype.accept = function (visitor) {
        if (visitor.visitEnhancedForControl) {
            return visitor.visitEnhancedForControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnhancedForControlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnhancedForControlContext = EnhancedForControlContext;
var ForUpdateContext = /** @class */ (function (_super) {
    __extends(ForUpdateContext, _super);
    function ForUpdateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForUpdateContext.prototype.expressionList = function () {
        return this.getRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ForUpdateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_forUpdate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForUpdateContext.prototype.enterRule = function (listener) {
        if (listener.enterForUpdate) {
            listener.enterForUpdate(this);
        }
    };
    // @Override
    ForUpdateContext.prototype.exitRule = function (listener) {
        if (listener.exitForUpdate) {
            listener.exitForUpdate(this);
        }
    };
    // @Override
    ForUpdateContext.prototype.accept = function (visitor) {
        if (visitor.visitForUpdate) {
            return visitor.visitForUpdate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForUpdateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForUpdateContext = ForUpdateContext;
var ParExpressionContext = /** @class */ (function (_super) {
    __extends(ParExpressionContext, _super);
    function ParExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParExpressionContext.prototype.LPAREN = function () { return this.getToken(apexParser.LPAREN, 0); };
    ParExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ParExpressionContext.prototype.RPAREN = function () { return this.getToken(apexParser.RPAREN, 0); };
    Object.defineProperty(ParExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_parExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParExpression) {
            listener.enterParExpression(this);
        }
    };
    // @Override
    ParExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParExpression) {
            listener.exitParExpression(this);
        }
    };
    // @Override
    ParExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParExpression) {
            return visitor.visitParExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParExpressionContext = ParExpressionContext;
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
    ExpressionListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_expressionList; },
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
var StatementExpressionContext = /** @class */ (function (_super) {
    __extends(StatementExpressionContext, _super);
    function StatementExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(StatementExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_statementExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementExpression) {
            listener.enterStatementExpression(this);
        }
    };
    // @Override
    StatementExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementExpression) {
            listener.exitStatementExpression(this);
        }
    };
    // @Override
    StatementExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementExpression) {
            return visitor.visitStatementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementExpressionContext = StatementExpressionContext;
var ConstantExpressionContext = /** @class */ (function (_super) {
    __extends(ConstantExpressionContext, _super);
    function ConstantExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ConstantExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_constantExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantExpression) {
            listener.enterConstantExpression(this);
        }
    };
    // @Override
    ConstantExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantExpression) {
            listener.exitConstantExpression(this);
        }
    };
    // @Override
    ConstantExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantExpression) {
            return visitor.visitConstantExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantExpressionContext = ConstantExpressionContext;
var ApexDbUpsertExpressionContext = /** @class */ (function (_super) {
    __extends(ApexDbUpsertExpressionContext, _super);
    function ApexDbUpsertExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ApexDbUpsertExpressionContext.prototype.DB_UPSERT = function () { return this.getToken(apexParser.DB_UPSERT, 0); };
    ApexDbUpsertExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ApexDbUpsertExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_apexDbUpsertExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ApexDbUpsertExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterApexDbUpsertExpression) {
            listener.enterApexDbUpsertExpression(this);
        }
    };
    // @Override
    ApexDbUpsertExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitApexDbUpsertExpression) {
            listener.exitApexDbUpsertExpression(this);
        }
    };
    // @Override
    ApexDbUpsertExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitApexDbUpsertExpression) {
            return visitor.visitApexDbUpsertExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ApexDbUpsertExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ApexDbUpsertExpressionContext = ApexDbUpsertExpressionContext;
var ApexDbExpressionContext = /** @class */ (function (_super) {
    __extends(ApexDbExpressionContext, _super);
    function ApexDbExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ApexDbExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ApexDbExpressionContext.prototype.DB_INSERT = function () { return this.tryGetToken(apexParser.DB_INSERT, 0); };
    ApexDbExpressionContext.prototype.DB_UPDATE = function () { return this.tryGetToken(apexParser.DB_UPDATE, 0); };
    ApexDbExpressionContext.prototype.DB_DELETE = function () { return this.tryGetToken(apexParser.DB_DELETE, 0); };
    ApexDbExpressionContext.prototype.DB_UNDELETE = function () { return this.tryGetToken(apexParser.DB_UNDELETE, 0); };
    ApexDbExpressionContext.prototype.apexDbUpsertExpression = function () {
        return this.tryGetRuleContext(0, ApexDbUpsertExpressionContext);
    };
    Object.defineProperty(ApexDbExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_apexDbExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ApexDbExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterApexDbExpression) {
            listener.enterApexDbExpression(this);
        }
    };
    // @Override
    ApexDbExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitApexDbExpression) {
            listener.exitApexDbExpression(this);
        }
    };
    // @Override
    ApexDbExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitApexDbExpression) {
            return visitor.visitApexDbExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ApexDbExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ApexDbExpressionContext = ApexDbExpressionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
    };
    ExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ExpressionContext.prototype.DOT = function () { return this.tryGetToken(apexParser.DOT, 0); };
    ExpressionContext.prototype.GET = function () { return this.tryGetToken(apexParser.GET, 0); };
    ExpressionContext.prototype.LPAREN = function () { return this.tryGetToken(apexParser.LPAREN, 0); };
    ExpressionContext.prototype.RPAREN = function () { return this.tryGetToken(apexParser.RPAREN, 0); };
    ExpressionContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    ExpressionContext.prototype.SET = function () { return this.tryGetToken(apexParser.SET, 0); };
    ExpressionContext.prototype.Identifier = function () { return this.tryGetToken(apexParser.Identifier, 0); };
    ExpressionContext.prototype.THIS = function () { return this.tryGetToken(apexParser.THIS, 0); };
    ExpressionContext.prototype.NEW = function () { return this.tryGetToken(apexParser.NEW, 0); };
    ExpressionContext.prototype.DB_INSERT = function () { return this.tryGetToken(apexParser.DB_INSERT, 0); };
    ExpressionContext.prototype.DB_UPSERT = function () { return this.tryGetToken(apexParser.DB_UPSERT, 0); };
    ExpressionContext.prototype.DB_UPDATE = function () { return this.tryGetToken(apexParser.DB_UPDATE, 0); };
    ExpressionContext.prototype.DB_DELETE = function () { return this.tryGetToken(apexParser.DB_DELETE, 0); };
    ExpressionContext.prototype.DB_UNDELETE = function () { return this.tryGetToken(apexParser.DB_UNDELETE, 0); };
    ExpressionContext.prototype.SUPER = function () { return this.tryGetToken(apexParser.SUPER, 0); };
    ExpressionContext.prototype.superSuffix = function () {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    };
    ExpressionContext.prototype.explicitGenericInvocation = function () {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
    };
    ExpressionContext.prototype.LBRACK = function () { return this.tryGetToken(apexParser.LBRACK, 0); };
    ExpressionContext.prototype.RBRACK = function () { return this.tryGetToken(apexParser.RBRACK, 0); };
    ExpressionContext.prototype.creator = function () {
        return this.tryGetRuleContext(0, CreatorContext);
    };
    ExpressionContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    ExpressionContext.prototype.INC = function () { return this.tryGetToken(apexParser.INC, 0); };
    ExpressionContext.prototype.DEC = function () { return this.tryGetToken(apexParser.DEC, 0); };
    ExpressionContext.prototype.ADD = function () { return this.tryGetToken(apexParser.ADD, 0); };
    ExpressionContext.prototype.SUB = function () { return this.tryGetToken(apexParser.SUB, 0); };
    ExpressionContext.prototype.TILDE = function () { return this.tryGetToken(apexParser.TILDE, 0); };
    ExpressionContext.prototype.BANG = function () { return this.tryGetToken(apexParser.BANG, 0); };
    ExpressionContext.prototype.MUL = function () { return this.tryGetToken(apexParser.MUL, 0); };
    ExpressionContext.prototype.DIV = function () { return this.tryGetToken(apexParser.DIV, 0); };
    ExpressionContext.prototype.MOD = function () { return this.tryGetToken(apexParser.MOD, 0); };
    ExpressionContext.prototype.LT = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LT);
        }
        else {
            return this.getToken(apexParser.LT, i);
        }
    };
    ExpressionContext.prototype.GT = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.GT);
        }
        else {
            return this.getToken(apexParser.GT, i);
        }
    };
    ExpressionContext.prototype.LE = function () { return this.tryGetToken(apexParser.LE, 0); };
    ExpressionContext.prototype.GE = function () { return this.tryGetToken(apexParser.GE, 0); };
    ExpressionContext.prototype.INSTANCEOF = function () { return this.tryGetToken(apexParser.INSTANCEOF, 0); };
    ExpressionContext.prototype.EQUAL = function () { return this.tryGetToken(apexParser.EQUAL, 0); };
    ExpressionContext.prototype.NOTEQUAL = function () { return this.tryGetToken(apexParser.NOTEQUAL, 0); };
    ExpressionContext.prototype.BITAND = function () { return this.tryGetToken(apexParser.BITAND, 0); };
    ExpressionContext.prototype.CARET = function () { return this.tryGetToken(apexParser.CARET, 0); };
    ExpressionContext.prototype.BITOR = function () { return this.tryGetToken(apexParser.BITOR, 0); };
    ExpressionContext.prototype.AND = function () { return this.tryGetToken(apexParser.AND, 0); };
    ExpressionContext.prototype.OR = function () { return this.tryGetToken(apexParser.OR, 0); };
    ExpressionContext.prototype.QUESTION = function () { return this.tryGetToken(apexParser.QUESTION, 0); };
    ExpressionContext.prototype.COLON = function () { return this.tryGetToken(apexParser.COLON, 0); };
    ExpressionContext.prototype.ASSIGN = function () { return this.tryGetToken(apexParser.ASSIGN, 0); };
    ExpressionContext.prototype.ADD_ASSIGN = function () { return this.tryGetToken(apexParser.ADD_ASSIGN, 0); };
    ExpressionContext.prototype.SUB_ASSIGN = function () { return this.tryGetToken(apexParser.SUB_ASSIGN, 0); };
    ExpressionContext.prototype.MUL_ASSIGN = function () { return this.tryGetToken(apexParser.MUL_ASSIGN, 0); };
    ExpressionContext.prototype.DIV_ASSIGN = function () { return this.tryGetToken(apexParser.DIV_ASSIGN, 0); };
    ExpressionContext.prototype.AND_ASSIGN = function () { return this.tryGetToken(apexParser.AND_ASSIGN, 0); };
    ExpressionContext.prototype.OR_ASSIGN = function () { return this.tryGetToken(apexParser.OR_ASSIGN, 0); };
    ExpressionContext.prototype.XOR_ASSIGN = function () { return this.tryGetToken(apexParser.XOR_ASSIGN, 0); };
    ExpressionContext.prototype.RSHIFT_ASSIGN = function () { return this.tryGetToken(apexParser.RSHIFT_ASSIGN, 0); };
    ExpressionContext.prototype.URSHIFT_ASSIGN = function () { return this.tryGetToken(apexParser.URSHIFT_ASSIGN, 0); };
    ExpressionContext.prototype.LSHIFT_ASSIGN = function () { return this.tryGetToken(apexParser.LSHIFT_ASSIGN, 0); };
    ExpressionContext.prototype.MOD_ASSIGN = function () { return this.tryGetToken(apexParser.MOD_ASSIGN, 0); };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_expression; },
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
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryContext.prototype.LPAREN = function () { return this.tryGetToken(apexParser.LPAREN, 0); };
    PrimaryContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PrimaryContext.prototype.RPAREN = function () { return this.tryGetToken(apexParser.RPAREN, 0); };
    PrimaryContext.prototype.THIS = function () { return this.tryGetToken(apexParser.THIS, 0); };
    PrimaryContext.prototype.SUPER = function () { return this.tryGetToken(apexParser.SUPER, 0); };
    PrimaryContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    PrimaryContext.prototype.Identifier = function () { return this.tryGetToken(apexParser.Identifier, 0); };
    PrimaryContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    PrimaryContext.prototype.DOT = function () { return this.tryGetToken(apexParser.DOT, 0); };
    PrimaryContext.prototype.CLASS = function () { return this.tryGetToken(apexParser.CLASS, 0); };
    PrimaryContext.prototype.VOID = function () { return this.tryGetToken(apexParser.VOID, 0); };
    PrimaryContext.prototype.nonWildcardTypeArguments = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    };
    PrimaryContext.prototype.explicitGenericInvocationSuffix = function () {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
    };
    PrimaryContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    PrimaryContext.prototype.SoqlLiteral = function () { return this.tryGetToken(apexParser.SoqlLiteral, 0); };
    Object.defineProperty(PrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_primary; },
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
var CreatorContext = /** @class */ (function (_super) {
    __extends(CreatorContext, _super);
    function CreatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreatorContext.prototype.nonWildcardTypeArguments = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    };
    CreatorContext.prototype.createdName = function () {
        return this.getRuleContext(0, CreatedNameContext);
    };
    CreatorContext.prototype.classCreatorRest = function () {
        return this.tryGetRuleContext(0, ClassCreatorRestContext);
    };
    CreatorContext.prototype.arrayCreatorRest = function () {
        return this.tryGetRuleContext(0, ArrayCreatorRestContext);
    };
    CreatorContext.prototype.mapCreatorRest = function () {
        return this.tryGetRuleContext(0, MapCreatorRestContext);
    };
    CreatorContext.prototype.setCreatorRest = function () {
        return this.tryGetRuleContext(0, SetCreatorRestContext);
    };
    Object.defineProperty(CreatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_creator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreatorContext.prototype.enterRule = function (listener) {
        if (listener.enterCreator) {
            listener.enterCreator(this);
        }
    };
    // @Override
    CreatorContext.prototype.exitRule = function (listener) {
        if (listener.exitCreator) {
            listener.exitCreator(this);
        }
    };
    // @Override
    CreatorContext.prototype.accept = function (visitor) {
        if (visitor.visitCreator) {
            return visitor.visitCreator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreatorContext = CreatorContext;
var CreatedNameContext = /** @class */ (function (_super) {
    __extends(CreatedNameContext, _super);
    function CreatedNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreatedNameContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.Identifier);
        }
        else {
            return this.getToken(apexParser.Identifier, i);
        }
    };
    CreatedNameContext.prototype.typeArgumentsOrDiamond = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsOrDiamondContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
        }
    };
    CreatedNameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.DOT);
        }
        else {
            return this.getToken(apexParser.DOT, i);
        }
    };
    CreatedNameContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    CreatedNameContext.prototype.SET = function () { return this.tryGetToken(apexParser.SET, 0); };
    Object.defineProperty(CreatedNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_createdName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreatedNameContext.prototype.enterRule = function (listener) {
        if (listener.enterCreatedName) {
            listener.enterCreatedName(this);
        }
    };
    // @Override
    CreatedNameContext.prototype.exitRule = function (listener) {
        if (listener.exitCreatedName) {
            listener.exitCreatedName(this);
        }
    };
    // @Override
    CreatedNameContext.prototype.accept = function (visitor) {
        if (visitor.visitCreatedName) {
            return visitor.visitCreatedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreatedNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreatedNameContext = CreatedNameContext;
var InnerCreatorContext = /** @class */ (function (_super) {
    __extends(InnerCreatorContext, _super);
    function InnerCreatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InnerCreatorContext.prototype.Identifier = function () { return this.getToken(apexParser.Identifier, 0); };
    InnerCreatorContext.prototype.classCreatorRest = function () {
        return this.getRuleContext(0, ClassCreatorRestContext);
    };
    InnerCreatorContext.prototype.nonWildcardTypeArgumentsOrDiamond = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
    };
    Object.defineProperty(InnerCreatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_innerCreator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InnerCreatorContext.prototype.enterRule = function (listener) {
        if (listener.enterInnerCreator) {
            listener.enterInnerCreator(this);
        }
    };
    // @Override
    InnerCreatorContext.prototype.exitRule = function (listener) {
        if (listener.exitInnerCreator) {
            listener.exitInnerCreator(this);
        }
    };
    // @Override
    InnerCreatorContext.prototype.accept = function (visitor) {
        if (visitor.visitInnerCreator) {
            return visitor.visitInnerCreator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InnerCreatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InnerCreatorContext = InnerCreatorContext;
var ArrayCreatorRestContext = /** @class */ (function (_super) {
    __extends(ArrayCreatorRestContext, _super);
    function ArrayCreatorRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayCreatorRestContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LBRACK);
        }
        else {
            return this.getToken(apexParser.LBRACK, i);
        }
    };
    ArrayCreatorRestContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.RBRACK);
        }
        else {
            return this.getToken(apexParser.RBRACK, i);
        }
    };
    ArrayCreatorRestContext.prototype.arrayInitializer = function () {
        return this.tryGetRuleContext(0, ArrayInitializerContext);
    };
    ArrayCreatorRestContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ArrayCreatorRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_arrayCreatorRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayCreatorRestContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayCreatorRest) {
            listener.enterArrayCreatorRest(this);
        }
    };
    // @Override
    ArrayCreatorRestContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayCreatorRest) {
            listener.exitArrayCreatorRest(this);
        }
    };
    // @Override
    ArrayCreatorRestContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayCreatorRest) {
            return visitor.visitArrayCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayCreatorRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayCreatorRestContext = ArrayCreatorRestContext;
var MapCreatorRestContext = /** @class */ (function (_super) {
    __extends(MapCreatorRestContext, _super);
    function MapCreatorRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapCreatorRestContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    MapCreatorRestContext.prototype.RBRACE = function () { return this.tryGetToken(apexParser.RBRACE, 0); };
    MapCreatorRestContext.prototype.LAMBDA_LIKE = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.LAMBDA_LIKE);
        }
        else {
            return this.getToken(apexParser.LAMBDA_LIKE, i);
        }
    };
    MapCreatorRestContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.Identifier);
        }
        else {
            return this.getToken(apexParser.Identifier, i);
        }
    };
    MapCreatorRestContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    MapCreatorRestContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    MapCreatorRestContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(MapCreatorRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_mapCreatorRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapCreatorRestContext.prototype.enterRule = function (listener) {
        if (listener.enterMapCreatorRest) {
            listener.enterMapCreatorRest(this);
        }
    };
    // @Override
    MapCreatorRestContext.prototype.exitRule = function (listener) {
        if (listener.exitMapCreatorRest) {
            listener.exitMapCreatorRest(this);
        }
    };
    // @Override
    MapCreatorRestContext.prototype.accept = function (visitor) {
        if (visitor.visitMapCreatorRest) {
            return visitor.visitMapCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapCreatorRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapCreatorRestContext = MapCreatorRestContext;
var SetCreatorRestContext = /** @class */ (function (_super) {
    __extends(SetCreatorRestContext, _super);
    function SetCreatorRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetCreatorRestContext.prototype.LBRACE = function () { return this.getToken(apexParser.LBRACE, 0); };
    SetCreatorRestContext.prototype.RBRACE = function () { return this.tryGetToken(apexParser.RBRACE, 0); };
    SetCreatorRestContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    SetCreatorRestContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    SetCreatorRestContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(apexParser.COMMA);
        }
        else {
            return this.getToken(apexParser.COMMA, i);
        }
    };
    Object.defineProperty(SetCreatorRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_setCreatorRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetCreatorRestContext.prototype.enterRule = function (listener) {
        if (listener.enterSetCreatorRest) {
            listener.enterSetCreatorRest(this);
        }
    };
    // @Override
    SetCreatorRestContext.prototype.exitRule = function (listener) {
        if (listener.exitSetCreatorRest) {
            listener.exitSetCreatorRest(this);
        }
    };
    // @Override
    SetCreatorRestContext.prototype.accept = function (visitor) {
        if (visitor.visitSetCreatorRest) {
            return visitor.visitSetCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetCreatorRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetCreatorRestContext = SetCreatorRestContext;
var ClassCreatorRestContext = /** @class */ (function (_super) {
    __extends(ClassCreatorRestContext, _super);
    function ClassCreatorRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassCreatorRestContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    ClassCreatorRestContext.prototype.classBody = function () {
        return this.tryGetRuleContext(0, ClassBodyContext);
    };
    Object.defineProperty(ClassCreatorRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_classCreatorRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassCreatorRestContext.prototype.enterRule = function (listener) {
        if (listener.enterClassCreatorRest) {
            listener.enterClassCreatorRest(this);
        }
    };
    // @Override
    ClassCreatorRestContext.prototype.exitRule = function (listener) {
        if (listener.exitClassCreatorRest) {
            listener.exitClassCreatorRest(this);
        }
    };
    // @Override
    ClassCreatorRestContext.prototype.accept = function (visitor) {
        if (visitor.visitClassCreatorRest) {
            return visitor.visitClassCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassCreatorRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassCreatorRestContext = ClassCreatorRestContext;
var ExplicitGenericInvocationContext = /** @class */ (function (_super) {
    __extends(ExplicitGenericInvocationContext, _super);
    function ExplicitGenericInvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExplicitGenericInvocationContext.prototype.nonWildcardTypeArguments = function () {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    };
    ExplicitGenericInvocationContext.prototype.explicitGenericInvocationSuffix = function () {
        return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
    };
    Object.defineProperty(ExplicitGenericInvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_explicitGenericInvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExplicitGenericInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterExplicitGenericInvocation) {
            listener.enterExplicitGenericInvocation(this);
        }
    };
    // @Override
    ExplicitGenericInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitExplicitGenericInvocation) {
            listener.exitExplicitGenericInvocation(this);
        }
    };
    // @Override
    ExplicitGenericInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitExplicitGenericInvocation) {
            return visitor.visitExplicitGenericInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExplicitGenericInvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExplicitGenericInvocationContext = ExplicitGenericInvocationContext;
var NonWildcardTypeArgumentsContext = /** @class */ (function (_super) {
    __extends(NonWildcardTypeArgumentsContext, _super);
    function NonWildcardTypeArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NonWildcardTypeArgumentsContext.prototype.LT = function () { return this.getToken(apexParser.LT, 0); };
    NonWildcardTypeArgumentsContext.prototype.typeList = function () {
        return this.getRuleContext(0, TypeListContext);
    };
    NonWildcardTypeArgumentsContext.prototype.GT = function () { return this.getToken(apexParser.GT, 0); };
    Object.defineProperty(NonWildcardTypeArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_nonWildcardTypeArguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NonWildcardTypeArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterNonWildcardTypeArguments) {
            listener.enterNonWildcardTypeArguments(this);
        }
    };
    // @Override
    NonWildcardTypeArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitNonWildcardTypeArguments) {
            listener.exitNonWildcardTypeArguments(this);
        }
    };
    // @Override
    NonWildcardTypeArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitNonWildcardTypeArguments) {
            return visitor.visitNonWildcardTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NonWildcardTypeArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NonWildcardTypeArgumentsContext = NonWildcardTypeArgumentsContext;
var TypeArgumentsOrDiamondContext = /** @class */ (function (_super) {
    __extends(TypeArgumentsOrDiamondContext, _super);
    function TypeArgumentsOrDiamondContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentsOrDiamondContext.prototype.LT = function () { return this.tryGetToken(apexParser.LT, 0); };
    TypeArgumentsOrDiamondContext.prototype.GT = function () { return this.tryGetToken(apexParser.GT, 0); };
    TypeArgumentsOrDiamondContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    Object.defineProperty(TypeArgumentsOrDiamondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_typeArgumentsOrDiamond; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgumentsOrDiamondContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArgumentsOrDiamond) {
            listener.enterTypeArgumentsOrDiamond(this);
        }
    };
    // @Override
    TypeArgumentsOrDiamondContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArgumentsOrDiamond) {
            listener.exitTypeArgumentsOrDiamond(this);
        }
    };
    // @Override
    TypeArgumentsOrDiamondContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArgumentsOrDiamond) {
            return visitor.visitTypeArgumentsOrDiamond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgumentsOrDiamondContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgumentsOrDiamondContext = TypeArgumentsOrDiamondContext;
var NonWildcardTypeArgumentsOrDiamondContext = /** @class */ (function (_super) {
    __extends(NonWildcardTypeArgumentsOrDiamondContext, _super);
    function NonWildcardTypeArgumentsOrDiamondContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NonWildcardTypeArgumentsOrDiamondContext.prototype.LT = function () { return this.tryGetToken(apexParser.LT, 0); };
    NonWildcardTypeArgumentsOrDiamondContext.prototype.GT = function () { return this.tryGetToken(apexParser.GT, 0); };
    NonWildcardTypeArgumentsOrDiamondContext.prototype.nonWildcardTypeArguments = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    };
    Object.defineProperty(NonWildcardTypeArgumentsOrDiamondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_nonWildcardTypeArgumentsOrDiamond; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NonWildcardTypeArgumentsOrDiamondContext.prototype.enterRule = function (listener) {
        if (listener.enterNonWildcardTypeArgumentsOrDiamond) {
            listener.enterNonWildcardTypeArgumentsOrDiamond(this);
        }
    };
    // @Override
    NonWildcardTypeArgumentsOrDiamondContext.prototype.exitRule = function (listener) {
        if (listener.exitNonWildcardTypeArgumentsOrDiamond) {
            listener.exitNonWildcardTypeArgumentsOrDiamond(this);
        }
    };
    // @Override
    NonWildcardTypeArgumentsOrDiamondContext.prototype.accept = function (visitor) {
        if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
            return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NonWildcardTypeArgumentsOrDiamondContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NonWildcardTypeArgumentsOrDiamondContext = NonWildcardTypeArgumentsOrDiamondContext;
var SuperSuffixContext = /** @class */ (function (_super) {
    __extends(SuperSuffixContext, _super);
    function SuperSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SuperSuffixContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    SuperSuffixContext.prototype.DOT = function () { return this.tryGetToken(apexParser.DOT, 0); };
    SuperSuffixContext.prototype.Identifier = function () { return this.tryGetToken(apexParser.Identifier, 0); };
    Object.defineProperty(SuperSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_superSuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SuperSuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterSuperSuffix) {
            listener.enterSuperSuffix(this);
        }
    };
    // @Override
    SuperSuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitSuperSuffix) {
            listener.exitSuperSuffix(this);
        }
    };
    // @Override
    SuperSuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitSuperSuffix) {
            return visitor.visitSuperSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuperSuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SuperSuffixContext = SuperSuffixContext;
var ExplicitGenericInvocationSuffixContext = /** @class */ (function (_super) {
    __extends(ExplicitGenericInvocationSuffixContext, _super);
    function ExplicitGenericInvocationSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExplicitGenericInvocationSuffixContext.prototype.SUPER = function () { return this.tryGetToken(apexParser.SUPER, 0); };
    ExplicitGenericInvocationSuffixContext.prototype.superSuffix = function () {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    };
    ExplicitGenericInvocationSuffixContext.prototype.Identifier = function () { return this.tryGetToken(apexParser.Identifier, 0); };
    ExplicitGenericInvocationSuffixContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(ExplicitGenericInvocationSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_explicitGenericInvocationSuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExplicitGenericInvocationSuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterExplicitGenericInvocationSuffix) {
            listener.enterExplicitGenericInvocationSuffix(this);
        }
    };
    // @Override
    ExplicitGenericInvocationSuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitExplicitGenericInvocationSuffix) {
            listener.exitExplicitGenericInvocationSuffix(this);
        }
    };
    // @Override
    ExplicitGenericInvocationSuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitExplicitGenericInvocationSuffix) {
            return visitor.visitExplicitGenericInvocationSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExplicitGenericInvocationSuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExplicitGenericInvocationSuffixContext = ExplicitGenericInvocationSuffixContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.LPAREN = function () { return this.getToken(apexParser.LPAREN, 0); };
    ArgumentsContext.prototype.RPAREN = function () { return this.getToken(apexParser.RPAREN, 0); };
    ArgumentsContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return apexParser.RULE_arguments; },
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
