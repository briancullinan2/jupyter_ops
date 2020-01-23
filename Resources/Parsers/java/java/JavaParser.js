"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/java/java/JavaParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var JavaParser = /** @class */ (function (_super) {
    __extends(JavaParser, _super);
    function JavaParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(JavaParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(JavaParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return JavaParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "JavaParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaParser.prototype, "ruleNames", {
        // @Override
        get: function () { return JavaParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaParser.prototype, "serializedATN", {
        // @Override
        get: function () { return JavaParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    JavaParser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 208;
                            this.packageDeclaration();
                        }
                        break;
                }
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.IMPORT) {
                    {
                        {
                            this.state = 211;
                            this.importDeclaration();
                        }
                    }
                    this.state = 216;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 217;
                            this.typeDeclaration();
                        }
                    }
                    this.state = 222;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 223;
                this.match(JavaParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.packageDeclaration = function () {
        var _localctx = new PackageDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT) {
                    {
                        {
                            this.state = 225;
                            this.annotation();
                        }
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 231;
                this.match(JavaParser.PACKAGE);
                this.state = 232;
                this.qualifiedName();
                this.state = 233;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.importDeclaration = function () {
        var _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                this.match(JavaParser.IMPORT);
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.STATIC) {
                    {
                        this.state = 236;
                        this.match(JavaParser.STATIC);
                    }
                }
                this.state = 239;
                this.qualifiedName();
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DOT) {
                    {
                        this.state = 240;
                        this.match(JavaParser.DOT);
                        this.state = 241;
                        this.match(JavaParser.MUL);
                    }
                }
                this.state = 244;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.typeDeclaration = function () {
        var _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
        try {
            var _alt = void 0;
            this.state = 259;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.CLASS:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.INTERFACE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 249;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 246;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 251;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        }
                        this.state = 256;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 252;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.ENUM:
                                {
                                    this.state = 253;
                                    this.enumDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 254;
                                    this.interfaceDeclaration();
                                }
                                break;
                            case JavaParser.AT:
                                {
                                    this.state = 255;
                                    this.annotationTypeDeclaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 258;
                        this.match(JavaParser.SEMI);
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
    JavaParser.prototype.modifier = function () {
        var _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JavaParser.RULE_modifier);
        try {
            this.state = 266;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.FINAL:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 261;
                        this.classOrInterfaceModifier();
                    }
                    break;
                case JavaParser.NATIVE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 262;
                        this.match(JavaParser.NATIVE);
                    }
                    break;
                case JavaParser.SYNCHRONIZED:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 263;
                        this.match(JavaParser.SYNCHRONIZED);
                    }
                    break;
                case JavaParser.TRANSIENT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 264;
                        this.match(JavaParser.TRANSIENT);
                    }
                    break;
                case JavaParser.VOLATILE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 265;
                        this.match(JavaParser.VOLATILE);
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
    JavaParser.prototype.classOrInterfaceModifier = function () {
        var _localctx = new ClassOrInterfaceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 268;
                        this.annotation();
                    }
                    break;
                case JavaParser.PUBLIC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 269;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case JavaParser.PROTECTED:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 270;
                        this.match(JavaParser.PROTECTED);
                    }
                    break;
                case JavaParser.PRIVATE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 271;
                        this.match(JavaParser.PRIVATE);
                    }
                    break;
                case JavaParser.STATIC:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 272;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case JavaParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 273;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case JavaParser.FINAL:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 274;
                        this.match(JavaParser.FINAL);
                    }
                    break;
                case JavaParser.STRICTFP:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 275;
                        this.match(JavaParser.STRICTFP);
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
    JavaParser.prototype.variableModifier = function () {
        var _localctx = new VariableModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JavaParser.RULE_variableModifier);
        try {
            this.state = 280;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.FINAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 278;
                        this.match(JavaParser.FINAL);
                    }
                    break;
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 279;
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
    JavaParser.prototype.classDeclaration = function () {
        var _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavaParser.RULE_classDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.match(JavaParser.CLASS);
                this.state = 283;
                this.match(JavaParser.IDENTIFIER);
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 284;
                        this.typeParameters();
                    }
                }
                this.state = 289;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 287;
                        this.match(JavaParser.EXTENDS);
                        this.state = 288;
                        this.typeType();
                    }
                }
                this.state = 293;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 291;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 292;
                        this.typeList();
                    }
                }
                this.state = 295;
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
    JavaParser.prototype.typeParameters = function () {
        var _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JavaParser.RULE_typeParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this.match(JavaParser.LT);
                this.state = 298;
                this.typeParameter();
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 299;
                            this.match(JavaParser.COMMA);
                            this.state = 300;
                            this.typeParameter();
                        }
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 306;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.typeParameter = function () {
        var _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JavaParser.RULE_typeParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT) {
                    {
                        {
                            this.state = 308;
                            this.annotation();
                        }
                    }
                    this.state = 313;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 314;
                this.match(JavaParser.IDENTIFIER);
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 315;
                        this.match(JavaParser.EXTENDS);
                        this.state = 316;
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
    JavaParser.prototype.typeBound = function () {
        var _localctx = new TypeBoundContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JavaParser.RULE_typeBound);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 319;
                this.typeType();
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITAND) {
                    {
                        {
                            this.state = 320;
                            this.match(JavaParser.BITAND);
                            this.state = 321;
                            this.typeType();
                        }
                    }
                    this.state = 326;
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
    JavaParser.prototype.enumDeclaration = function () {
        var _localctx = new EnumDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JavaParser.RULE_enumDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 327;
                this.match(JavaParser.ENUM);
                this.state = 328;
                this.match(JavaParser.IDENTIFIER);
                this.state = 331;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 329;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 330;
                        this.typeList();
                    }
                }
                this.state = 333;
                this.match(JavaParser.LBRACE);
                this.state = 335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 334;
                        this.enumConstants();
                    }
                }
                this.state = 338;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 337;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 340;
                        this.enumBodyDeclarations();
                    }
                }
                this.state = 343;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.enumConstants = function () {
        var _localctx = new EnumConstantsContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JavaParser.RULE_enumConstants);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 345;
                this.enumConstant();
                this.state = 350;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 346;
                                this.match(JavaParser.COMMA);
                                this.state = 347;
                                this.enumConstant();
                            }
                        }
                    }
                    this.state = 352;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.enumConstant = function () {
        var _localctx = new EnumConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JavaParser.RULE_enumConstant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT) {
                    {
                        {
                            this.state = 353;
                            this.annotation();
                        }
                    }
                    this.state = 358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 359;
                this.match(JavaParser.IDENTIFIER);
                this.state = 361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 360;
                        this.arguments();
                    }
                }
                this.state = 364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LBRACE) {
                    {
                        this.state = 363;
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
    JavaParser.prototype.enumBodyDeclarations = function () {
        var _localctx = new EnumBodyDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JavaParser.RULE_enumBodyDeclarations);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.match(JavaParser.SEMI);
                this.state = 370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 367;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 372;
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
    JavaParser.prototype.interfaceDeclaration = function () {
        var _localctx = new InterfaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JavaParser.RULE_interfaceDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this.match(JavaParser.INTERFACE);
                this.state = 374;
                this.match(JavaParser.IDENTIFIER);
                this.state = 376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 375;
                        this.typeParameters();
                    }
                }
                this.state = 380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 378;
                        this.match(JavaParser.EXTENDS);
                        this.state = 379;
                        this.typeList();
                    }
                }
                this.state = 382;
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
    JavaParser.prototype.classBody = function () {
        var _localctx = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JavaParser.RULE_classBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(JavaParser.LBRACE);
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 385;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 390;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 391;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.interfaceBody = function () {
        var _localctx = new InterfaceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JavaParser.RULE_interfaceBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 393;
                this.match(JavaParser.LBRACE);
                this.state = 397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 394;
                            this.interfaceBodyDeclaration();
                        }
                    }
                    this.state = 399;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 400;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.classBodyDeclaration = function () {
        var _localctx = new ClassBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JavaParser.RULE_classBodyDeclaration);
        var _la;
        try {
            var _alt = void 0;
            this.state = 414;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 402;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 404;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.STATIC) {
                            {
                                this.state = 403;
                                this.match(JavaParser.STATIC);
                            }
                        }
                        this.state = 406;
                        this.block();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 410;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 407;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 412;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                        }
                        this.state = 413;
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
    JavaParser.prototype.memberDeclaration = function () {
        var _localctx = new MemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JavaParser.RULE_memberDeclaration);
        try {
            this.state = 425;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 416;
                        this.methodDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 417;
                        this.genericMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 418;
                        this.fieldDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 419;
                        this.constructorDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 420;
                        this.genericConstructorDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 421;
                        this.interfaceDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 422;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 423;
                        this.classDeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 424;
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
    JavaParser.prototype.methodDeclaration = function () {
        var _localctx = new MethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JavaParser.RULE_methodDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 427;
                this.typeTypeOrVoid();
                this.state = 428;
                this.match(JavaParser.IDENTIFIER);
                this.state = 429;
                this.formalParameters();
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 430;
                            this.match(JavaParser.LBRACK);
                            this.state = 431;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 436;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 437;
                        this.match(JavaParser.THROWS);
                        this.state = 438;
                        this.qualifiedNameList();
                    }
                }
                this.state = 441;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.methodBody = function () {
        var _localctx = new MethodBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JavaParser.RULE_methodBody);
        try {
            this.state = 445;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 443;
                        this.block();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 444;
                        this.match(JavaParser.SEMI);
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
    JavaParser.prototype.typeTypeOrVoid = function () {
        var _localctx = new TypeTypeOrVoidContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, JavaParser.RULE_typeTypeOrVoid);
        try {
            this.state = 449;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 447;
                        this.typeType();
                    }
                    break;
                case JavaParser.VOID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 448;
                        this.match(JavaParser.VOID);
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
    JavaParser.prototype.genericMethodDeclaration = function () {
        var _localctx = new GenericMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, JavaParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 451;
                this.typeParameters();
                this.state = 452;
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
    JavaParser.prototype.genericConstructorDeclaration = function () {
        var _localctx = new GenericConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, JavaParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this.typeParameters();
                this.state = 455;
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
    JavaParser.prototype.constructorDeclaration = function () {
        var _localctx = new ConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, JavaParser.RULE_constructorDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 457;
                this.match(JavaParser.IDENTIFIER);
                this.state = 458;
                this.formalParameters();
                this.state = 461;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 459;
                        this.match(JavaParser.THROWS);
                        this.state = 460;
                        this.qualifiedNameList();
                    }
                }
                this.state = 463;
                _localctx._constructorBody = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.fieldDeclaration = function () {
        var _localctx = new FieldDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, JavaParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this.typeType();
                this.state = 466;
                this.variableDeclarators();
                this.state = 467;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.interfaceBodyDeclaration = function () {
        var _localctx = new InterfaceBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, JavaParser.RULE_interfaceBodyDeclaration);
        try {
            var _alt = void 0;
            this.state = 477;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.CLASS:
                case JavaParser.DEFAULT:
                case JavaParser.DOUBLE:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.INTERFACE:
                case JavaParser.LONG:
                case JavaParser.NATIVE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.SHORT:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.SYNCHRONIZED:
                case JavaParser.TRANSIENT:
                case JavaParser.VOID:
                case JavaParser.VOLATILE:
                case JavaParser.LT:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 472;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 469;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 474;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                        }
                        this.state = 475;
                        this.interfaceMemberDeclaration();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 476;
                        this.match(JavaParser.SEMI);
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
    JavaParser.prototype.interfaceMemberDeclaration = function () {
        var _localctx = new InterfaceMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, JavaParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 486;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 479;
                        this.constDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 480;
                        this.interfaceMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 481;
                        this.genericInterfaceMethodDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 482;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 483;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 484;
                        this.classDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 485;
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
    JavaParser.prototype.constDeclaration = function () {
        var _localctx = new ConstDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, JavaParser.RULE_constDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 488;
                this.typeType();
                this.state = 489;
                this.constantDeclarator();
                this.state = 494;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 490;
                            this.match(JavaParser.COMMA);
                            this.state = 491;
                            this.constantDeclarator();
                        }
                    }
                    this.state = 496;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 497;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.constantDeclarator = function () {
        var _localctx = new ConstantDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, JavaParser.RULE_constantDeclarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 499;
                this.match(JavaParser.IDENTIFIER);
                this.state = 504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 500;
                            this.match(JavaParser.LBRACK);
                            this.state = 501;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 506;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 507;
                this.match(JavaParser.ASSIGN);
                this.state = 508;
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
    JavaParser.prototype.interfaceMethodDeclaration = function () {
        var _localctx = new InterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, JavaParser.RULE_interfaceMethodDeclaration);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 510;
                                this.interfaceMethodModifier();
                            }
                        }
                    }
                    this.state = 515;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                }
                this.state = 526;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.SHORT:
                    case JavaParser.VOID:
                    case JavaParser.AT:
                    case JavaParser.IDENTIFIER:
                        {
                            this.state = 516;
                            this.typeTypeOrVoid();
                        }
                        break;
                    case JavaParser.LT:
                        {
                            this.state = 517;
                            this.typeParameters();
                            this.state = 521;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 518;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 523;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                            }
                            this.state = 524;
                            this.typeTypeOrVoid();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 528;
                this.match(JavaParser.IDENTIFIER);
                this.state = 529;
                this.formalParameters();
                this.state = 534;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 530;
                            this.match(JavaParser.LBRACK);
                            this.state = 531;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 536;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 539;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 537;
                        this.match(JavaParser.THROWS);
                        this.state = 538;
                        this.qualifiedNameList();
                    }
                }
                this.state = 541;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.interfaceMethodModifier = function () {
        var _localctx = new InterfaceMethodModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, JavaParser.RULE_interfaceMethodModifier);
        try {
            this.state = 549;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 543;
                        this.annotation();
                    }
                    break;
                case JavaParser.PUBLIC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 544;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case JavaParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 545;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 546;
                        this.match(JavaParser.DEFAULT);
                    }
                    break;
                case JavaParser.STATIC:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 547;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case JavaParser.STRICTFP:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 548;
                        this.match(JavaParser.STRICTFP);
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
    JavaParser.prototype.genericInterfaceMethodDeclaration = function () {
        var _localctx = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, JavaParser.RULE_genericInterfaceMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 551;
                this.typeParameters();
                this.state = 552;
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
    JavaParser.prototype.variableDeclarators = function () {
        var _localctx = new VariableDeclaratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, JavaParser.RULE_variableDeclarators);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 554;
                this.variableDeclarator();
                this.state = 559;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 555;
                            this.match(JavaParser.COMMA);
                            this.state = 556;
                            this.variableDeclarator();
                        }
                    }
                    this.state = 561;
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
    JavaParser.prototype.variableDeclarator = function () {
        var _localctx = new VariableDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, JavaParser.RULE_variableDeclarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this.variableDeclaratorId();
                this.state = 565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.ASSIGN) {
                    {
                        this.state = 563;
                        this.match(JavaParser.ASSIGN);
                        this.state = 564;
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
    JavaParser.prototype.variableDeclaratorId = function () {
        var _localctx = new VariableDeclaratorIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, JavaParser.RULE_variableDeclaratorId);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 567;
                this.match(JavaParser.IDENTIFIER);
                this.state = 572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 568;
                            this.match(JavaParser.LBRACK);
                            this.state = 569;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 574;
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
    JavaParser.prototype.variableInitializer = function () {
        var _localctx = new VariableInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, JavaParser.RULE_variableInitializer);
        try {
            this.state = 577;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 575;
                        this.arrayInitializer();
                    }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.NEW:
                case JavaParser.SHORT:
                case JavaParser.SUPER:
                case JavaParser.THIS:
                case JavaParser.VOID:
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                case JavaParser.BOOL_LITERAL:
                case JavaParser.CHAR_LITERAL:
                case JavaParser.STRING_LITERAL:
                case JavaParser.NULL_LITERAL:
                case JavaParser.LPAREN:
                case JavaParser.LT:
                case JavaParser.BANG:
                case JavaParser.TILDE:
                case JavaParser.INC:
                case JavaParser.DEC:
                case JavaParser.ADD:
                case JavaParser.SUB:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 576;
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
    JavaParser.prototype.arrayInitializer = function () {
        var _localctx = new ArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, JavaParser.RULE_arrayInitializer);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 579;
                this.match(JavaParser.LBRACE);
                this.state = 591;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 580;
                        this.variableInitializer();
                        this.state = 585;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 581;
                                        this.match(JavaParser.COMMA);
                                        this.state = 582;
                                        this.variableInitializer();
                                    }
                                }
                            }
                            this.state = 587;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                        }
                        this.state = 589;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 588;
                                this.match(JavaParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 593;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.classOrInterfaceType = function () {
        var _localctx = new ClassOrInterfaceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, JavaParser.RULE_classOrInterfaceType);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 595;
                this.match(JavaParser.IDENTIFIER);
                this.state = 597;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                    case 1:
                        {
                            this.state = 596;
                            this.typeArguments();
                        }
                        break;
                }
                this.state = 606;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 599;
                                this.match(JavaParser.DOT);
                                this.state = 600;
                                this.match(JavaParser.IDENTIFIER);
                                this.state = 602;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 601;
                                            this.typeArguments();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 608;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.typeArgument = function () {
        var _localctx = new TypeArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, JavaParser.RULE_typeArgument);
        var _la;
        try {
            this.state = 615;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 609;
                        this.typeType();
                    }
                    break;
                case JavaParser.QUESTION:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 610;
                        this.match(JavaParser.QUESTION);
                        this.state = 613;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
                            {
                                this.state = 611;
                                _la = this._input.LA(1);
                                if (!(_la === JavaParser.EXTENDS || _la === JavaParser.SUPER)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 612;
                                this.typeType();
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
    JavaParser.prototype.qualifiedNameList = function () {
        var _localctx = new QualifiedNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, JavaParser.RULE_qualifiedNameList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 617;
                this.qualifiedName();
                this.state = 622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 618;
                            this.match(JavaParser.COMMA);
                            this.state = 619;
                            this.qualifiedName();
                        }
                    }
                    this.state = 624;
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
    JavaParser.prototype.formalParameters = function () {
        var _localctx = new FormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, JavaParser.RULE_formalParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 625;
                this.match(JavaParser.LPAREN);
                this.state = 627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 626;
                        this.formalParameterList();
                    }
                }
                this.state = 629;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.formalParameterList = function () {
        var _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, JavaParser.RULE_formalParameterList);
        var _la;
        try {
            var _alt = void 0;
            this.state = 644;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 631;
                        this.formalParameter();
                        this.state = 636;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 632;
                                        this.match(JavaParser.COMMA);
                                        this.state = 633;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 638;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                        }
                        this.state = 641;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 639;
                                this.match(JavaParser.COMMA);
                                this.state = 640;
                                this.lastFormalParameter();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 643;
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
    JavaParser.prototype.formalParameter = function () {
        var _localctx = new FormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, JavaParser.RULE_formalParameter);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 649;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 646;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 651;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                }
                this.state = 652;
                this.typeType();
                this.state = 653;
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
    JavaParser.prototype.lastFormalParameter = function () {
        var _localctx = new LastFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, JavaParser.RULE_lastFormalParameter);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 658;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 655;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 660;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
                }
                this.state = 661;
                this.typeType();
                this.state = 662;
                this.match(JavaParser.ELLIPSIS);
                this.state = 663;
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
    JavaParser.prototype.qualifiedName = function () {
        var _localctx = new QualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, JavaParser.RULE_qualifiedName);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 665;
                this.match(JavaParser.IDENTIFIER);
                this.state = 670;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 666;
                                this.match(JavaParser.DOT);
                                this.state = 667;
                                this.match(JavaParser.IDENTIFIER);
                            }
                        }
                    }
                    this.state = 672;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, JavaParser.RULE_literal);
        try {
            this.state = 679;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 673;
                        this.integerLiteral();
                    }
                    break;
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 674;
                        this.floatLiteral();
                    }
                    break;
                case JavaParser.CHAR_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 675;
                        this.match(JavaParser.CHAR_LITERAL);
                    }
                    break;
                case JavaParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 676;
                        this.match(JavaParser.STRING_LITERAL);
                    }
                    break;
                case JavaParser.BOOL_LITERAL:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 677;
                        this.match(JavaParser.BOOL_LITERAL);
                    }
                    break;
                case JavaParser.NULL_LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 678;
                        this.match(JavaParser.NULL_LITERAL);
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
    JavaParser.prototype.integerLiteral = function () {
        var _localctx = new IntegerLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, JavaParser.RULE_integerLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 681;
                _la = this._input.LA(1);
                if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.DECIMAL_LITERAL - 51)) | (1 << (JavaParser.HEX_LITERAL - 51)) | (1 << (JavaParser.OCT_LITERAL - 51)) | (1 << (JavaParser.BINARY_LITERAL - 51)))) !== 0))) {
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
    JavaParser.prototype.floatLiteral = function () {
        var _localctx = new FloatLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, JavaParser.RULE_floatLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 683;
                _la = this._input.LA(1);
                if (!(_la === JavaParser.FLOAT_LITERAL || _la === JavaParser.HEX_FLOAT_LITERAL)) {
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
    JavaParser.prototype.annotation = function () {
        var _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, JavaParser.RULE_annotation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 685;
                this.match(JavaParser.AT);
                this.state = 686;
                this.qualifiedName();
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 687;
                        this.match(JavaParser.LPAREN);
                        this.state = 690;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                            case 1:
                                {
                                    this.state = 688;
                                    this.elementValuePairs();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 689;
                                    this.elementValue();
                                }
                                break;
                        }
                        this.state = 692;
                        this.match(JavaParser.RPAREN);
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
    JavaParser.prototype.elementValuePairs = function () {
        var _localctx = new ElementValuePairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, JavaParser.RULE_elementValuePairs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 695;
                this.elementValuePair();
                this.state = 700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 696;
                            this.match(JavaParser.COMMA);
                            this.state = 697;
                            this.elementValuePair();
                        }
                    }
                    this.state = 702;
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
    JavaParser.prototype.elementValuePair = function () {
        var _localctx = new ElementValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 703;
                this.match(JavaParser.IDENTIFIER);
                this.state = 704;
                this.match(JavaParser.ASSIGN);
                this.state = 705;
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
    JavaParser.prototype.elementValue = function () {
        var _localctx = new ElementValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, JavaParser.RULE_elementValue);
        try {
            this.state = 710;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 707;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 708;
                        this.annotation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 709;
                        this.elementValueArrayInitializer();
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
    JavaParser.prototype.elementValueArrayInitializer = function () {
        var _localctx = new ElementValueArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, JavaParser.RULE_elementValueArrayInitializer);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 712;
                this.match(JavaParser.LBRACE);
                this.state = 721;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 713;
                        this.elementValue();
                        this.state = 718;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 714;
                                        this.match(JavaParser.COMMA);
                                        this.state = 715;
                                        this.elementValue();
                                    }
                                }
                            }
                            this.state = 720;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                        }
                    }
                }
                this.state = 724;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 723;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 726;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.annotationTypeDeclaration = function () {
        var _localctx = new AnnotationTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 728;
                this.match(JavaParser.AT);
                this.state = 729;
                this.match(JavaParser.INTERFACE);
                this.state = 730;
                this.match(JavaParser.IDENTIFIER);
                this.state = 731;
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
    JavaParser.prototype.annotationTypeBody = function () {
        var _localctx = new AnnotationTypeBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, JavaParser.RULE_annotationTypeBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this.match(JavaParser.LBRACE);
                this.state = 737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 734;
                            this.annotationTypeElementDeclaration();
                        }
                    }
                    this.state = 739;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 740;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.annotationTypeElementDeclaration = function () {
        var _localctx = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            var _alt = void 0;
            this.state = 750;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.CLASS:
                case JavaParser.DOUBLE:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.INTERFACE:
                case JavaParser.LONG:
                case JavaParser.NATIVE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.SHORT:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.SYNCHRONIZED:
                case JavaParser.TRANSIENT:
                case JavaParser.VOLATILE:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 745;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 742;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 747;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                        }
                        this.state = 748;
                        this.annotationTypeElementRest();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 749;
                        this.match(JavaParser.SEMI);
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
    JavaParser.prototype.annotationTypeElementRest = function () {
        var _localctx = new AnnotationTypeElementRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 772;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 752;
                        this.typeType();
                        this.state = 753;
                        this.annotationMethodOrConstantRest();
                        this.state = 754;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 756;
                        this.classDeclaration();
                        this.state = 758;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                            case 1:
                                {
                                    this.state = 757;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 760;
                        this.interfaceDeclaration();
                        this.state = 762;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                            case 1:
                                {
                                    this.state = 761;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 764;
                        this.enumDeclaration();
                        this.state = 766;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                            case 1:
                                {
                                    this.state = 765;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 768;
                        this.annotationTypeDeclaration();
                        this.state = 770;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                            case 1:
                                {
                                    this.state = 769;
                                    this.match(JavaParser.SEMI);
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
    JavaParser.prototype.annotationMethodOrConstantRest = function () {
        var _localctx = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 776;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 774;
                        this.annotationMethodRest();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 775;
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
    JavaParser.prototype.annotationMethodRest = function () {
        var _localctx = new AnnotationMethodRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, JavaParser.RULE_annotationMethodRest);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 778;
                this.match(JavaParser.IDENTIFIER);
                this.state = 779;
                this.match(JavaParser.LPAREN);
                this.state = 780;
                this.match(JavaParser.RPAREN);
                this.state = 782;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DEFAULT) {
                    {
                        this.state = 781;
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
    JavaParser.prototype.annotationConstantRest = function () {
        var _localctx = new AnnotationConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 784;
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
    JavaParser.prototype.defaultValue = function () {
        var _localctx = new DefaultValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 786;
                this.match(JavaParser.DEFAULT);
                this.state = 787;
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
    JavaParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, JavaParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 789;
                this.match(JavaParser.LBRACE);
                this.state = 793;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 790;
                            this.blockStatement();
                        }
                    }
                    this.state = 795;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 796;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.blockStatement = function () {
        var _localctx = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, JavaParser.RULE_blockStatement);
        try {
            this.state = 803;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 798;
                        this.localVariableDeclaration();
                        this.state = 799;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 801;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 802;
                        this.localTypeDeclaration();
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
    JavaParser.prototype.localVariableDeclaration = function () {
        var _localctx = new LocalVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, JavaParser.RULE_localVariableDeclaration);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 808;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 805;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 810;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                }
                this.state = 811;
                this.typeType();
                this.state = 812;
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
    JavaParser.prototype.localTypeDeclaration = function () {
        var _localctx = new LocalTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, JavaParser.RULE_localTypeDeclaration);
        var _la;
        try {
            this.state = 825;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.CLASS:
                case JavaParser.FINAL:
                case JavaParser.INTERFACE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 817;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.AT) {
                            {
                                {
                                    this.state = 814;
                                    this.classOrInterfaceModifier();
                                }
                            }
                            this.state = 819;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 822;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 820;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 821;
                                    this.interfaceDeclaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 824;
                        this.match(JavaParser.SEMI);
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
    JavaParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, JavaParser.RULE_statement);
        var _la;
        try {
            var _alt = void 0;
            this.state = 931;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 827;
                        _localctx._blockLabel = this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 828;
                        this.match(JavaParser.ASSERT);
                        this.state = 829;
                        this.expression(0);
                        this.state = 832;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COLON) {
                            {
                                this.state = 830;
                                this.match(JavaParser.COLON);
                                this.state = 831;
                                this.expression(0);
                            }
                        }
                        this.state = 834;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 836;
                        this.match(JavaParser.IF);
                        this.state = 837;
                        this.parExpression();
                        this.state = 838;
                        this.statement();
                        this.state = 841;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                            case 1:
                                {
                                    this.state = 839;
                                    this.match(JavaParser.ELSE);
                                    this.state = 840;
                                    this.statement();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 843;
                        this.match(JavaParser.FOR);
                        this.state = 844;
                        this.match(JavaParser.LPAREN);
                        this.state = 845;
                        this.forControl();
                        this.state = 846;
                        this.match(JavaParser.RPAREN);
                        this.state = 847;
                        this.statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 849;
                        this.match(JavaParser.WHILE);
                        this.state = 850;
                        this.parExpression();
                        this.state = 851;
                        this.statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 853;
                        this.match(JavaParser.DO);
                        this.state = 854;
                        this.statement();
                        this.state = 855;
                        this.match(JavaParser.WHILE);
                        this.state = 856;
                        this.parExpression();
                        this.state = 857;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 859;
                        this.match(JavaParser.TRY);
                        this.state = 860;
                        this.block();
                        this.state = 870;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CATCH:
                                {
                                    this.state = 862;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 861;
                                                this.catchClause();
                                            }
                                        }
                                        this.state = 864;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === JavaParser.CATCH);
                                    this.state = 867;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.FINALLY) {
                                        {
                                            this.state = 866;
                                            this.finallyBlock();
                                        }
                                    }
                                }
                                break;
                            case JavaParser.FINALLY:
                                {
                                    this.state = 869;
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
                        this.state = 872;
                        this.match(JavaParser.TRY);
                        this.state = 873;
                        this.resourceSpecification();
                        this.state = 874;
                        this.block();
                        this.state = 878;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CATCH) {
                            {
                                {
                                    this.state = 875;
                                    this.catchClause();
                                }
                            }
                            this.state = 880;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 882;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINALLY) {
                            {
                                this.state = 881;
                                this.finallyBlock();
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 884;
                        this.match(JavaParser.SWITCH);
                        this.state = 885;
                        this.parExpression();
                        this.state = 886;
                        this.match(JavaParser.LBRACE);
                        this.state = 890;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 887;
                                        this.switchBlockStatementGroup();
                                    }
                                }
                            }
                            this.state = 892;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                        }
                        this.state = 896;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                            {
                                {
                                    this.state = 893;
                                    this.switchLabel();
                                }
                            }
                            this.state = 898;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 899;
                        this.match(JavaParser.RBRACE);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 901;
                        this.match(JavaParser.SYNCHRONIZED);
                        this.state = 902;
                        this.parExpression();
                        this.state = 903;
                        this.block();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 905;
                        this.match(JavaParser.RETURN);
                        this.state = 907;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 906;
                                this.expression(0);
                            }
                        }
                        this.state = 909;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 910;
                        this.match(JavaParser.THROW);
                        this.state = 911;
                        this.expression(0);
                        this.state = 912;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 914;
                        this.match(JavaParser.BREAK);
                        this.state = 916;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 915;
                                this.match(JavaParser.IDENTIFIER);
                            }
                        }
                        this.state = 918;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 919;
                        this.match(JavaParser.CONTINUE);
                        this.state = 921;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 920;
                                this.match(JavaParser.IDENTIFIER);
                            }
                        }
                        this.state = 923;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 924;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 925;
                        _localctx._statementExpression = this.expression(0);
                        this.state = 926;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 928;
                        _localctx._identifierLabel = this.match(JavaParser.IDENTIFIER);
                        this.state = 929;
                        this.match(JavaParser.COLON);
                        this.state = 930;
                        this.statement();
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
    JavaParser.prototype.catchClause = function () {
        var _localctx = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, JavaParser.RULE_catchClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 933;
                this.match(JavaParser.CATCH);
                this.state = 934;
                this.match(JavaParser.LPAREN);
                this.state = 938;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 935;
                            this.variableModifier();
                        }
                    }
                    this.state = 940;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 941;
                this.catchType();
                this.state = 942;
                this.match(JavaParser.IDENTIFIER);
                this.state = 943;
                this.match(JavaParser.RPAREN);
                this.state = 944;
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
    JavaParser.prototype.catchType = function () {
        var _localctx = new CatchTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, JavaParser.RULE_catchType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 946;
                this.qualifiedName();
                this.state = 951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITOR) {
                    {
                        {
                            this.state = 947;
                            this.match(JavaParser.BITOR);
                            this.state = 948;
                            this.qualifiedName();
                        }
                    }
                    this.state = 953;
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
    JavaParser.prototype.finallyBlock = function () {
        var _localctx = new FinallyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, JavaParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 954;
                this.match(JavaParser.FINALLY);
                this.state = 955;
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
    JavaParser.prototype.resourceSpecification = function () {
        var _localctx = new ResourceSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, JavaParser.RULE_resourceSpecification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 957;
                this.match(JavaParser.LPAREN);
                this.state = 958;
                this.resources();
                this.state = 960;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 959;
                        this.match(JavaParser.SEMI);
                    }
                }
                this.state = 962;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.resources = function () {
        var _localctx = new ResourcesContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, JavaParser.RULE_resources);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 964;
                this.resource();
                this.state = 969;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 965;
                                this.match(JavaParser.SEMI);
                                this.state = 966;
                                this.resource();
                            }
                        }
                    }
                    this.state = 971;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.resource = function () {
        var _localctx = new ResourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, JavaParser.RULE_resource);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 975;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 972;
                            this.variableModifier();
                        }
                    }
                    this.state = 977;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 978;
                this.classOrInterfaceType();
                this.state = 979;
                this.variableDeclaratorId();
                this.state = 980;
                this.match(JavaParser.ASSIGN);
                this.state = 981;
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
    JavaParser.prototype.switchBlockStatementGroup = function () {
        var _localctx = new SwitchBlockStatementGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, JavaParser.RULE_switchBlockStatementGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 984;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 983;
                            this.switchLabel();
                        }
                    }
                    this.state = 986;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
                this.state = 989;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 988;
                            this.blockStatement();
                        }
                    }
                    this.state = 991;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.switchLabel = function () {
        var _localctx = new SwitchLabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, JavaParser.RULE_switchLabel);
        try {
            this.state = 1001;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 993;
                        this.match(JavaParser.CASE);
                        this.state = 996;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                            case 1:
                                {
                                    this.state = 994;
                                    _localctx._constantExpression = this.expression(0);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 995;
                                    _localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
                                }
                                break;
                        }
                        this.state = 998;
                        this.match(JavaParser.COLON);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 999;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1000;
                        this.match(JavaParser.COLON);
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
    JavaParser.prototype.forControl = function () {
        var _localctx = new ForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, JavaParser.RULE_forControl);
        var _la;
        try {
            this.state = 1015;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1003;
                        this.enhancedForControl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1005;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1004;
                                this.forInit();
                            }
                        }
                        this.state = 1007;
                        this.match(JavaParser.SEMI);
                        this.state = 1009;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1008;
                                this.expression(0);
                            }
                        }
                        this.state = 1011;
                        this.match(JavaParser.SEMI);
                        this.state = 1013;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1012;
                                _localctx._forUpdate = this.expressionList();
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
    JavaParser.prototype.forInit = function () {
        var _localctx = new ForInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, JavaParser.RULE_forInit);
        try {
            this.state = 1019;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1017;
                        this.localVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1018;
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
    JavaParser.prototype.enhancedForControl = function () {
        var _localctx = new EnhancedForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, JavaParser.RULE_enhancedForControl);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1024;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1021;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1026;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                }
                this.state = 1027;
                this.typeType();
                this.state = 1028;
                this.variableDeclaratorId();
                this.state = 1029;
                this.match(JavaParser.COLON);
                this.state = 1030;
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
    JavaParser.prototype.parExpression = function () {
        var _localctx = new ParExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, JavaParser.RULE_parExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1032;
                this.match(JavaParser.LPAREN);
                this.state = 1033;
                this.expression(0);
                this.state = 1034;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, JavaParser.RULE_expressionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1036;
                this.expression(0);
                this.state = 1041;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1037;
                            this.match(JavaParser.COMMA);
                            this.state = 1038;
                            this.expression(0);
                        }
                    }
                    this.state = 1043;
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
    JavaParser.prototype.methodCall = function () {
        var _localctx = new MethodCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, JavaParser.RULE_methodCall);
        var _la;
        try {
            this.state = 1062;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1044;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1045;
                        this.match(JavaParser.LPAREN);
                        this.state = 1047;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1046;
                                this.expressionList();
                            }
                        }
                        this.state = 1049;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.THIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1050;
                        this.match(JavaParser.THIS);
                        this.state = 1051;
                        this.match(JavaParser.LPAREN);
                        this.state = 1053;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1052;
                                this.expressionList();
                            }
                        }
                        this.state = 1055;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1056;
                        this.match(JavaParser.SUPER);
                        this.state = 1057;
                        this.match(JavaParser.LPAREN);
                        this.state = 1059;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1058;
                                this.expressionList();
                            }
                        }
                        this.state = 1061;
                        this.match(JavaParser.RPAREN);
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
    JavaParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 164;
        this.enterRecursionRule(_localctx, 164, JavaParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1095;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                    case 1:
                        {
                            this.state = 1065;
                            this.primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1066;
                            this.methodCall();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1067;
                            this.match(JavaParser.NEW);
                            this.state = 1068;
                            this.creator();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1069;
                            this.match(JavaParser.LPAREN);
                            this.state = 1070;
                            this.typeType();
                            this.state = 1071;
                            this.match(JavaParser.RPAREN);
                            this.state = 1072;
                            this.expression(21);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1074;
                            _localctx._prefix = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (JavaParser.INC - 83)) | (1 << (JavaParser.DEC - 83)) | (1 << (JavaParser.ADD - 83)) | (1 << (JavaParser.SUB - 83)))) !== 0))) {
                                _localctx._prefix = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1075;
                            this.expression(19);
                        }
                        break;
                    case 6:
                        {
                            this.state = 1076;
                            _localctx._prefix = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === JavaParser.BANG || _la === JavaParser.TILDE)) {
                                _localctx._prefix = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1077;
                            this.expression(18);
                        }
                        break;
                    case 7:
                        {
                            this.state = 1078;
                            this.lambdaExpression();
                        }
                        break;
                    case 8:
                        {
                            this.state = 1079;
                            this.typeType();
                            this.state = 1080;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1086;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case JavaParser.LT:
                                case JavaParser.IDENTIFIER:
                                    {
                                        this.state = 1082;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1081;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1084;
                                        this.match(JavaParser.IDENTIFIER);
                                    }
                                    break;
                                case JavaParser.NEW:
                                    {
                                        this.state = 1085;
                                        this.match(JavaParser.NEW);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case 9:
                        {
                            this.state = 1088;
                            this.classType();
                            this.state = 1089;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1091;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.LT) {
                                {
                                    this.state = 1090;
                                    this.typeArguments();
                                }
                            }
                            this.state = 1093;
                            this.match(JavaParser.NEW);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1177;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1175;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1097;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1098;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (JavaParser.MUL - 87)) | (1 << (JavaParser.DIV - 87)) | (1 << (JavaParser.MOD - 87)))) !== 0))) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1099;
                                        this.expression(18);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1100;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1101;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.ADD || _la === JavaParser.SUB)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1102;
                                        this.expression(17);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1103;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1111;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1104;
                                                    this.match(JavaParser.LT);
                                                    this.state = 1105;
                                                    this.match(JavaParser.LT);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1106;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1107;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1108;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1109;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1110;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                        }
                                        this.state = 1113;
                                        this.expression(16);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1114;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1115;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (JavaParser.GT - 71)) | (1 << (JavaParser.LT - 71)) | (1 << (JavaParser.LE - 71)) | (1 << (JavaParser.GE - 71)))) !== 0))) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1116;
                                        this.expression(15);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1117;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 1118;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.EQUAL || _la === JavaParser.NOTEQUAL)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1119;
                                        this.expression(13);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1120;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 1121;
                                        _localctx._bop = this.match(JavaParser.BITAND);
                                        this.state = 1122;
                                        this.expression(12);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1123;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 1124;
                                        _localctx._bop = this.match(JavaParser.CARET);
                                        this.state = 1125;
                                        this.expression(11);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1126;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1127;
                                        _localctx._bop = this.match(JavaParser.BITOR);
                                        this.state = 1128;
                                        this.expression(10);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1129;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1130;
                                        _localctx._bop = this.match(JavaParser.AND);
                                        this.state = 1131;
                                        this.expression(9);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1132;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1133;
                                        _localctx._bop = this.match(JavaParser.OR);
                                        this.state = 1134;
                                        this.expression(8);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1135;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1136;
                                        _localctx._bop = this.match(JavaParser.QUESTION);
                                        this.state = 1137;
                                        this.expression(0);
                                        this.state = 1138;
                                        this.match(JavaParser.COLON);
                                        this.state = 1139;
                                        this.expression(6);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1141;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 1142;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JavaParser.ASSIGN - 70)) | (1 << (JavaParser.ADD_ASSIGN - 70)) | (1 << (JavaParser.SUB_ASSIGN - 70)) | (1 << (JavaParser.MUL_ASSIGN - 70)) | (1 << (JavaParser.DIV_ASSIGN - 70)) | (1 << (JavaParser.AND_ASSIGN - 70)) | (1 << (JavaParser.OR_ASSIGN - 70)) | (1 << (JavaParser.XOR_ASSIGN - 70)) | (1 << (JavaParser.MOD_ASSIGN - 70)) | (1 << (JavaParser.LSHIFT_ASSIGN - 70)))) !== 0) || _la === JavaParser.RSHIFT_ASSIGN || _la === JavaParser.URSHIFT_ASSIGN)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1143;
                                        this.expression(5);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1144;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 1145;
                                        _localctx._bop = this.match(JavaParser.DOT);
                                        this.state = 1157;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1146;
                                                    this.match(JavaParser.IDENTIFIER);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1147;
                                                    this.methodCall();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1148;
                                                    this.match(JavaParser.THIS);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1149;
                                                    this.match(JavaParser.NEW);
                                                    this.state = 1151;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if (_la === JavaParser.LT) {
                                                        {
                                                            this.state = 1150;
                                                            this.nonWildcardTypeArguments();
                                                        }
                                                    }
                                                    this.state = 1153;
                                                    this.innerCreator();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1154;
                                                    this.match(JavaParser.SUPER);
                                                    this.state = 1155;
                                                    this.superSuffix();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 1156;
                                                    this.explicitGenericInvocation();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1159;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 1160;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1161;
                                        this.expression(0);
                                        this.state = 1162;
                                        this.match(JavaParser.RBRACK);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1164;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 1165;
                                        _localctx._postfix = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.INC || _la === JavaParser.DEC)) {
                                            _localctx._postfix = this._errHandler.recoverInline(this);
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
                                case 16:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1166;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1167;
                                        _localctx._bop = this.match(JavaParser.INSTANCEOF);
                                        this.state = 1168;
                                        this.typeType();
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1169;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1170;
                                        this.match(JavaParser.COLONCOLON);
                                        this.state = 1172;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1171;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1174;
                                        this.match(JavaParser.IDENTIFIER);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1179;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    JavaParser.prototype.lambdaExpression = function () {
        var _localctx = new LambdaExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, JavaParser.RULE_lambdaExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1180;
                this.lambdaParameters();
                this.state = 1181;
                this.match(JavaParser.ARROW);
                this.state = 1182;
                this.lambdaBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.lambdaParameters = function () {
        var _localctx = new LambdaParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, JavaParser.RULE_lambdaParameters);
        var _la;
        try {
            this.state = 1200;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1184;
                        this.match(JavaParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1185;
                        this.match(JavaParser.LPAREN);
                        this.state = 1187;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1186;
                                this.formalParameterList();
                            }
                        }
                        this.state = 1189;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1190;
                        this.match(JavaParser.LPAREN);
                        this.state = 1191;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.COMMA) {
                            {
                                {
                                    this.state = 1192;
                                    this.match(JavaParser.COMMA);
                                    this.state = 1193;
                                    this.match(JavaParser.IDENTIFIER);
                                }
                            }
                            this.state = 1198;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1199;
                        this.match(JavaParser.RPAREN);
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
    JavaParser.prototype.lambdaBody = function () {
        var _localctx = new LambdaBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, JavaParser.RULE_lambdaBody);
        try {
            this.state = 1204;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.NEW:
                case JavaParser.SHORT:
                case JavaParser.SUPER:
                case JavaParser.THIS:
                case JavaParser.VOID:
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                case JavaParser.BOOL_LITERAL:
                case JavaParser.CHAR_LITERAL:
                case JavaParser.STRING_LITERAL:
                case JavaParser.NULL_LITERAL:
                case JavaParser.LPAREN:
                case JavaParser.LT:
                case JavaParser.BANG:
                case JavaParser.TILDE:
                case JavaParser.INC:
                case JavaParser.DEC:
                case JavaParser.ADD:
                case JavaParser.SUB:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1202;
                        this.expression(0);
                    }
                    break;
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1203;
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
    JavaParser.prototype.primary = function () {
        var _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, JavaParser.RULE_primary);
        try {
            this.state = 1224;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1206;
                        this.match(JavaParser.LPAREN);
                        this.state = 1207;
                        this.expression(0);
                        this.state = 1208;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1210;
                        this.match(JavaParser.THIS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1211;
                        this.match(JavaParser.SUPER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1212;
                        this.literal();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1213;
                        this.match(JavaParser.IDENTIFIER);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1214;
                        this.typeTypeOrVoid();
                        this.state = 1215;
                        this.match(JavaParser.DOT);
                        this.state = 1216;
                        this.match(JavaParser.CLASS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1218;
                        this.nonWildcardTypeArguments();
                        this.state = 1222;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.SUPER:
                            case JavaParser.IDENTIFIER:
                                {
                                    this.state = 1219;
                                    this.explicitGenericInvocationSuffix();
                                }
                                break;
                            case JavaParser.THIS:
                                {
                                    this.state = 1220;
                                    this.match(JavaParser.THIS);
                                    this.state = 1221;
                                    this.arguments();
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
    JavaParser.prototype.classType = function () {
        var _localctx = new ClassTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, JavaParser.RULE_classType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1229;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                    case 1:
                        {
                            this.state = 1226;
                            this.classOrInterfaceType();
                            this.state = 1227;
                            this.match(JavaParser.DOT);
                        }
                        break;
                }
                this.state = 1234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT) {
                    {
                        {
                            this.state = 1231;
                            this.annotation();
                        }
                    }
                    this.state = 1236;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1237;
                this.match(JavaParser.IDENTIFIER);
                this.state = 1239;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1238;
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
    JavaParser.prototype.creator = function () {
        var _localctx = new CreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, JavaParser.RULE_creator);
        try {
            this.state = 1250;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1241;
                        this.nonWildcardTypeArguments();
                        this.state = 1242;
                        this.createdName();
                        this.state = 1243;
                        this.classCreatorRest();
                    }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1245;
                        this.createdName();
                        this.state = 1248;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.LBRACK:
                                {
                                    this.state = 1246;
                                    this.arrayCreatorRest();
                                }
                                break;
                            case JavaParser.LPAREN:
                                {
                                    this.state = 1247;
                                    this.classCreatorRest();
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
    JavaParser.prototype.createdName = function () {
        var _localctx = new CreatedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, JavaParser.RULE_createdName);
        var _la;
        try {
            this.state = 1267;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1252;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1254;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1253;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 1263;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.DOT) {
                            {
                                {
                                    this.state = 1256;
                                    this.match(JavaParser.DOT);
                                    this.state = 1257;
                                    this.match(JavaParser.IDENTIFIER);
                                    this.state = 1259;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.LT) {
                                        {
                                            this.state = 1258;
                                            this.typeArgumentsOrDiamond();
                                        }
                                    }
                                }
                            }
                            this.state = 1265;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1266;
                        this.primitiveType();
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
    JavaParser.prototype.innerCreator = function () {
        var _localctx = new InnerCreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, JavaParser.RULE_innerCreator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1269;
                this.match(JavaParser.IDENTIFIER);
                this.state = 1271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1270;
                        this.nonWildcardTypeArgumentsOrDiamond();
                    }
                }
                this.state = 1273;
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
    JavaParser.prototype.arrayCreatorRest = function () {
        var _localctx = new ArrayCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, JavaParser.RULE_arrayCreatorRest);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1275;
                this.match(JavaParser.LBRACK);
                this.state = 1303;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.RBRACK:
                        {
                            this.state = 1276;
                            this.match(JavaParser.RBRACK);
                            this.state = 1281;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.LBRACK) {
                                {
                                    {
                                        this.state = 1277;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1278;
                                        this.match(JavaParser.RBRACK);
                                    }
                                }
                                this.state = 1283;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1284;
                            this.arrayInitializer();
                        }
                        break;
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.NEW:
                    case JavaParser.SHORT:
                    case JavaParser.SUPER:
                    case JavaParser.THIS:
                    case JavaParser.VOID:
                    case JavaParser.DECIMAL_LITERAL:
                    case JavaParser.HEX_LITERAL:
                    case JavaParser.OCT_LITERAL:
                    case JavaParser.BINARY_LITERAL:
                    case JavaParser.FLOAT_LITERAL:
                    case JavaParser.HEX_FLOAT_LITERAL:
                    case JavaParser.BOOL_LITERAL:
                    case JavaParser.CHAR_LITERAL:
                    case JavaParser.STRING_LITERAL:
                    case JavaParser.NULL_LITERAL:
                    case JavaParser.LPAREN:
                    case JavaParser.LT:
                    case JavaParser.BANG:
                    case JavaParser.TILDE:
                    case JavaParser.INC:
                    case JavaParser.DEC:
                    case JavaParser.ADD:
                    case JavaParser.SUB:
                    case JavaParser.AT:
                    case JavaParser.IDENTIFIER:
                        {
                            this.state = 1285;
                            this.expression(0);
                            this.state = 1286;
                            this.match(JavaParser.RBRACK);
                            this.state = 1293;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1287;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1288;
                                            this.expression(0);
                                            this.state = 1289;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1295;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                            }
                            this.state = 1300;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1296;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1297;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1302;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
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
    JavaParser.prototype.classCreatorRest = function () {
        var _localctx = new ClassCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, JavaParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1305;
                this.arguments();
                this.state = 1307;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                    case 1:
                        {
                            this.state = 1306;
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
    JavaParser.prototype.explicitGenericInvocation = function () {
        var _localctx = new ExplicitGenericInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, JavaParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1309;
                this.nonWildcardTypeArguments();
                this.state = 1310;
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
    JavaParser.prototype.typeArgumentsOrDiamond = function () {
        var _localctx = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, JavaParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1315;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1312;
                        this.match(JavaParser.LT);
                        this.state = 1313;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1314;
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
    JavaParser.prototype.nonWildcardTypeArgumentsOrDiamond = function () {
        var _localctx = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1320;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1317;
                        this.match(JavaParser.LT);
                        this.state = 1318;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1319;
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
    JavaParser.prototype.nonWildcardTypeArguments = function () {
        var _localctx = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, JavaParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1322;
                this.match(JavaParser.LT);
                this.state = 1323;
                this.typeList();
                this.state = 1324;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.typeList = function () {
        var _localctx = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, JavaParser.RULE_typeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1326;
                this.typeType();
                this.state = 1331;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1327;
                            this.match(JavaParser.COMMA);
                            this.state = 1328;
                            this.typeType();
                        }
                    }
                    this.state = 1333;
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
    JavaParser.prototype.typeType = function () {
        var _localctx = new TypeTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, JavaParser.RULE_typeType);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.AT) {
                    {
                        this.state = 1334;
                        this.annotation();
                    }
                }
                this.state = 1339;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.IDENTIFIER:
                        {
                            this.state = 1337;
                            this.classOrInterfaceType();
                        }
                        break;
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.SHORT:
                        {
                            this.state = 1338;
                            this.primitiveType();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1345;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1341;
                                this.match(JavaParser.LBRACK);
                                this.state = 1342;
                                this.match(JavaParser.RBRACK);
                            }
                        }
                    }
                    this.state = 1347;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.primitiveType = function () {
        var _localctx = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, JavaParser.RULE_primitiveType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1348;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT)) {
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
    JavaParser.prototype.typeArguments = function () {
        var _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, JavaParser.RULE_typeArguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1350;
                this.match(JavaParser.LT);
                this.state = 1351;
                this.typeArgument();
                this.state = 1356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1352;
                            this.match(JavaParser.COMMA);
                            this.state = 1353;
                            this.typeArgument();
                        }
                    }
                    this.state = 1358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1359;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaParser.prototype.superSuffix = function () {
        var _localctx = new SuperSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, JavaParser.RULE_superSuffix);
        try {
            this.state = 1367;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1361;
                        this.arguments();
                    }
                    break;
                case JavaParser.DOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1362;
                        this.match(JavaParser.DOT);
                        this.state = 1363;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1365;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1364;
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
    JavaParser.prototype.explicitGenericInvocationSuffix = function () {
        var _localctx = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, JavaParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1373;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1369;
                        this.match(JavaParser.SUPER);
                        this.state = 1370;
                        this.superSuffix();
                    }
                    break;
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1371;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1372;
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
    JavaParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, JavaParser.RULE_arguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1375;
                this.match(JavaParser.LPAREN);
                this.state = 1377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 1376;
                        this.expressionList();
                    }
                }
                this.state = 1379;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    JavaParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 82:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    JavaParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 17);
            case 1:
                return this.precpred(this._ctx, 16);
            case 2:
                return this.precpred(this._ctx, 15);
            case 3:
                return this.precpred(this._ctx, 14);
            case 4:
                return this.precpred(this._ctx, 12);
            case 5:
                return this.precpred(this._ctx, 11);
            case 6:
                return this.precpred(this._ctx, 10);
            case 7:
                return this.precpred(this._ctx, 9);
            case 8:
                return this.precpred(this._ctx, 8);
            case 9:
                return this.precpred(this._ctx, 7);
            case 10:
                return this.precpred(this._ctx, 6);
            case 11:
                return this.precpred(this._ctx, 5);
            case 12:
                return this.precpred(this._ctx, 25);
            case 13:
                return this.precpred(this._ctx, 24);
            case 14:
                return this.precpred(this._ctx, 20);
            case 15:
                return this.precpred(this._ctx, 13);
            case 16:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    Object.defineProperty(JavaParser, "_ATN", {
        get: function () {
            if (!JavaParser.__ATN) {
                JavaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
            }
            return JavaParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    JavaParser.ABSTRACT = 1;
    JavaParser.ASSERT = 2;
    JavaParser.BOOLEAN = 3;
    JavaParser.BREAK = 4;
    JavaParser.BYTE = 5;
    JavaParser.CASE = 6;
    JavaParser.CATCH = 7;
    JavaParser.CHAR = 8;
    JavaParser.CLASS = 9;
    JavaParser.CONST = 10;
    JavaParser.CONTINUE = 11;
    JavaParser.DEFAULT = 12;
    JavaParser.DO = 13;
    JavaParser.DOUBLE = 14;
    JavaParser.ELSE = 15;
    JavaParser.ENUM = 16;
    JavaParser.EXTENDS = 17;
    JavaParser.FINAL = 18;
    JavaParser.FINALLY = 19;
    JavaParser.FLOAT = 20;
    JavaParser.FOR = 21;
    JavaParser.IF = 22;
    JavaParser.GOTO = 23;
    JavaParser.IMPLEMENTS = 24;
    JavaParser.IMPORT = 25;
    JavaParser.INSTANCEOF = 26;
    JavaParser.INT = 27;
    JavaParser.INTERFACE = 28;
    JavaParser.LONG = 29;
    JavaParser.NATIVE = 30;
    JavaParser.NEW = 31;
    JavaParser.PACKAGE = 32;
    JavaParser.PRIVATE = 33;
    JavaParser.PROTECTED = 34;
    JavaParser.PUBLIC = 35;
    JavaParser.RETURN = 36;
    JavaParser.SHORT = 37;
    JavaParser.STATIC = 38;
    JavaParser.STRICTFP = 39;
    JavaParser.SUPER = 40;
    JavaParser.SWITCH = 41;
    JavaParser.SYNCHRONIZED = 42;
    JavaParser.THIS = 43;
    JavaParser.THROW = 44;
    JavaParser.THROWS = 45;
    JavaParser.TRANSIENT = 46;
    JavaParser.TRY = 47;
    JavaParser.VOID = 48;
    JavaParser.VOLATILE = 49;
    JavaParser.WHILE = 50;
    JavaParser.DECIMAL_LITERAL = 51;
    JavaParser.HEX_LITERAL = 52;
    JavaParser.OCT_LITERAL = 53;
    JavaParser.BINARY_LITERAL = 54;
    JavaParser.FLOAT_LITERAL = 55;
    JavaParser.HEX_FLOAT_LITERAL = 56;
    JavaParser.BOOL_LITERAL = 57;
    JavaParser.CHAR_LITERAL = 58;
    JavaParser.STRING_LITERAL = 59;
    JavaParser.NULL_LITERAL = 60;
    JavaParser.LPAREN = 61;
    JavaParser.RPAREN = 62;
    JavaParser.LBRACE = 63;
    JavaParser.RBRACE = 64;
    JavaParser.LBRACK = 65;
    JavaParser.RBRACK = 66;
    JavaParser.SEMI = 67;
    JavaParser.COMMA = 68;
    JavaParser.DOT = 69;
    JavaParser.ASSIGN = 70;
    JavaParser.GT = 71;
    JavaParser.LT = 72;
    JavaParser.BANG = 73;
    JavaParser.TILDE = 74;
    JavaParser.QUESTION = 75;
    JavaParser.COLON = 76;
    JavaParser.EQUAL = 77;
    JavaParser.LE = 78;
    JavaParser.GE = 79;
    JavaParser.NOTEQUAL = 80;
    JavaParser.AND = 81;
    JavaParser.OR = 82;
    JavaParser.INC = 83;
    JavaParser.DEC = 84;
    JavaParser.ADD = 85;
    JavaParser.SUB = 86;
    JavaParser.MUL = 87;
    JavaParser.DIV = 88;
    JavaParser.BITAND = 89;
    JavaParser.BITOR = 90;
    JavaParser.CARET = 91;
    JavaParser.MOD = 92;
    JavaParser.ADD_ASSIGN = 93;
    JavaParser.SUB_ASSIGN = 94;
    JavaParser.MUL_ASSIGN = 95;
    JavaParser.DIV_ASSIGN = 96;
    JavaParser.AND_ASSIGN = 97;
    JavaParser.OR_ASSIGN = 98;
    JavaParser.XOR_ASSIGN = 99;
    JavaParser.MOD_ASSIGN = 100;
    JavaParser.LSHIFT_ASSIGN = 101;
    JavaParser.RSHIFT_ASSIGN = 102;
    JavaParser.URSHIFT_ASSIGN = 103;
    JavaParser.ARROW = 104;
    JavaParser.COLONCOLON = 105;
    JavaParser.AT = 106;
    JavaParser.ELLIPSIS = 107;
    JavaParser.WS = 108;
    JavaParser.COMMENT = 109;
    JavaParser.LINE_COMMENT = 110;
    JavaParser.IDENTIFIER = 111;
    JavaParser.RULE_compilationUnit = 0;
    JavaParser.RULE_packageDeclaration = 1;
    JavaParser.RULE_importDeclaration = 2;
    JavaParser.RULE_typeDeclaration = 3;
    JavaParser.RULE_modifier = 4;
    JavaParser.RULE_classOrInterfaceModifier = 5;
    JavaParser.RULE_variableModifier = 6;
    JavaParser.RULE_classDeclaration = 7;
    JavaParser.RULE_typeParameters = 8;
    JavaParser.RULE_typeParameter = 9;
    JavaParser.RULE_typeBound = 10;
    JavaParser.RULE_enumDeclaration = 11;
    JavaParser.RULE_enumConstants = 12;
    JavaParser.RULE_enumConstant = 13;
    JavaParser.RULE_enumBodyDeclarations = 14;
    JavaParser.RULE_interfaceDeclaration = 15;
    JavaParser.RULE_classBody = 16;
    JavaParser.RULE_interfaceBody = 17;
    JavaParser.RULE_classBodyDeclaration = 18;
    JavaParser.RULE_memberDeclaration = 19;
    JavaParser.RULE_methodDeclaration = 20;
    JavaParser.RULE_methodBody = 21;
    JavaParser.RULE_typeTypeOrVoid = 22;
    JavaParser.RULE_genericMethodDeclaration = 23;
    JavaParser.RULE_genericConstructorDeclaration = 24;
    JavaParser.RULE_constructorDeclaration = 25;
    JavaParser.RULE_fieldDeclaration = 26;
    JavaParser.RULE_interfaceBodyDeclaration = 27;
    JavaParser.RULE_interfaceMemberDeclaration = 28;
    JavaParser.RULE_constDeclaration = 29;
    JavaParser.RULE_constantDeclarator = 30;
    JavaParser.RULE_interfaceMethodDeclaration = 31;
    JavaParser.RULE_interfaceMethodModifier = 32;
    JavaParser.RULE_genericInterfaceMethodDeclaration = 33;
    JavaParser.RULE_variableDeclarators = 34;
    JavaParser.RULE_variableDeclarator = 35;
    JavaParser.RULE_variableDeclaratorId = 36;
    JavaParser.RULE_variableInitializer = 37;
    JavaParser.RULE_arrayInitializer = 38;
    JavaParser.RULE_classOrInterfaceType = 39;
    JavaParser.RULE_typeArgument = 40;
    JavaParser.RULE_qualifiedNameList = 41;
    JavaParser.RULE_formalParameters = 42;
    JavaParser.RULE_formalParameterList = 43;
    JavaParser.RULE_formalParameter = 44;
    JavaParser.RULE_lastFormalParameter = 45;
    JavaParser.RULE_qualifiedName = 46;
    JavaParser.RULE_literal = 47;
    JavaParser.RULE_integerLiteral = 48;
    JavaParser.RULE_floatLiteral = 49;
    JavaParser.RULE_annotation = 50;
    JavaParser.RULE_elementValuePairs = 51;
    JavaParser.RULE_elementValuePair = 52;
    JavaParser.RULE_elementValue = 53;
    JavaParser.RULE_elementValueArrayInitializer = 54;
    JavaParser.RULE_annotationTypeDeclaration = 55;
    JavaParser.RULE_annotationTypeBody = 56;
    JavaParser.RULE_annotationTypeElementDeclaration = 57;
    JavaParser.RULE_annotationTypeElementRest = 58;
    JavaParser.RULE_annotationMethodOrConstantRest = 59;
    JavaParser.RULE_annotationMethodRest = 60;
    JavaParser.RULE_annotationConstantRest = 61;
    JavaParser.RULE_defaultValue = 62;
    JavaParser.RULE_block = 63;
    JavaParser.RULE_blockStatement = 64;
    JavaParser.RULE_localVariableDeclaration = 65;
    JavaParser.RULE_localTypeDeclaration = 66;
    JavaParser.RULE_statement = 67;
    JavaParser.RULE_catchClause = 68;
    JavaParser.RULE_catchType = 69;
    JavaParser.RULE_finallyBlock = 70;
    JavaParser.RULE_resourceSpecification = 71;
    JavaParser.RULE_resources = 72;
    JavaParser.RULE_resource = 73;
    JavaParser.RULE_switchBlockStatementGroup = 74;
    JavaParser.RULE_switchLabel = 75;
    JavaParser.RULE_forControl = 76;
    JavaParser.RULE_forInit = 77;
    JavaParser.RULE_enhancedForControl = 78;
    JavaParser.RULE_parExpression = 79;
    JavaParser.RULE_expressionList = 80;
    JavaParser.RULE_methodCall = 81;
    JavaParser.RULE_expression = 82;
    JavaParser.RULE_lambdaExpression = 83;
    JavaParser.RULE_lambdaParameters = 84;
    JavaParser.RULE_lambdaBody = 85;
    JavaParser.RULE_primary = 86;
    JavaParser.RULE_classType = 87;
    JavaParser.RULE_creator = 88;
    JavaParser.RULE_createdName = 89;
    JavaParser.RULE_innerCreator = 90;
    JavaParser.RULE_arrayCreatorRest = 91;
    JavaParser.RULE_classCreatorRest = 92;
    JavaParser.RULE_explicitGenericInvocation = 93;
    JavaParser.RULE_typeArgumentsOrDiamond = 94;
    JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond = 95;
    JavaParser.RULE_nonWildcardTypeArguments = 96;
    JavaParser.RULE_typeList = 97;
    JavaParser.RULE_typeType = 98;
    JavaParser.RULE_primitiveType = 99;
    JavaParser.RULE_typeArguments = 100;
    JavaParser.RULE_superSuffix = 101;
    JavaParser.RULE_explicitGenericInvocationSuffix = 102;
    JavaParser.RULE_arguments = 103;
    // tslint:disable:no-trailing-whitespace
    JavaParser.ruleNames = [
        "compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration",
        "modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration",
        "typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants",
        "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "classBody",
        "interfaceBody", "classBodyDeclaration", "memberDeclaration", "methodDeclaration",
        "methodBody", "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration",
        "constructorDeclaration", "fieldDeclaration", "interfaceBodyDeclaration",
        "interfaceMemberDeclaration", "constDeclaration", "constantDeclarator",
        "interfaceMethodDeclaration", "interfaceMethodModifier", "genericInterfaceMethodDeclaration",
        "variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer",
        "arrayInitializer", "classOrInterfaceType", "typeArgument", "qualifiedNameList",
        "formalParameters", "formalParameterList", "formalParameter", "lastFormalParameter",
        "qualifiedName", "literal", "integerLiteral", "floatLiteral", "annotation",
        "elementValuePairs", "elementValuePair", "elementValue", "elementValueArrayInitializer",
        "annotationTypeDeclaration", "annotationTypeBody", "annotationTypeElementDeclaration",
        "annotationTypeElementRest", "annotationMethodOrConstantRest", "annotationMethodRest",
        "annotationConstantRest", "defaultValue", "block", "blockStatement", "localVariableDeclaration",
        "localTypeDeclaration", "statement", "catchClause", "catchType", "finallyBlock",
        "resourceSpecification", "resources", "resource", "switchBlockStatementGroup",
        "switchLabel", "forControl", "forInit", "enhancedForControl", "parExpression",
        "expressionList", "methodCall", "expression", "lambdaExpression", "lambdaParameters",
        "lambdaBody", "primary", "classType", "creator", "createdName", "innerCreator",
        "arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", "typeArgumentsOrDiamond",
        "nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", "typeList",
        "typeType", "primitiveType", "typeArguments", "superSuffix", "explicitGenericInvocationSuffix",
        "arguments",
    ];
    JavaParser._LITERAL_NAMES = [
        undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'",
        "'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'",
        "'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'",
        "'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'",
        "'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'",
        "'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'",
        "'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'",
        "'transient'", "'try'", "'void'", "'volatile'", "'while'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'",
        "','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='",
        "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'",
        "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='",
        "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'",
        "'@'", "'...'",
    ];
    JavaParser._SYMBOLIC_NAMES = [
        undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH",
        "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE",
        "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS",
        "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE",
        "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP",
        "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT",
        "TRY", "VOID", "VOLATILE", "WHILE", "DECIMAL_LITERAL", "HEX_LITERAL",
        "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL",
        "BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "LPAREN",
        "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT",
        "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE",
        "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV",
        "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN",
        "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN",
        "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", "AT", "ELLIPSIS",
        "WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
    ];
    JavaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);
    JavaParser._serializedATNSegments = 3;
    JavaParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u0568\x04\x02" +
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
        "i\ti\x03\x02\x05\x02\xD4\n\x02\x03\x02\x07\x02\xD7\n\x02\f\x02\x0E\x02" +
        "\xDA\v\x02\x03\x02\x07\x02\xDD\n\x02\f\x02\x0E\x02\xE0\v\x02\x03\x02\x03" +
        "\x02\x03\x03\x07\x03\xE5\n\x03\f\x03\x0E\x03\xE8\v\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\xF0\n\x04\x03\x04\x03\x04\x03" +
        "\x04\x05\x04\xF5\n\x04\x03\x04\x03\x04\x03\x05\x07\x05\xFA\n\x05\f\x05" +
        "\x0E\x05\xFD\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0103\n\x05" +
        "\x03\x05\x05\x05\u0106\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
        "\x06\u010D\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x05\x07\u0117\n\x07\x03\b\x03\b\x05\b\u011B\n\b\x03\t\x03\t\x03" +
        "\t\x05\t\u0120\n\t\x03\t\x03\t\x05\t\u0124\n\t\x03\t\x03\t\x05\t\u0128" +
        "\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\u0130\n\n\f\n\x0E\n\u0133" +
        "\v\n\x03\n\x03\n\x03\v\x07\v\u0138\n\v\f\v\x0E\v\u013B\v\v\x03\v\x03\v" +
        "\x03\v\x05\v\u0140\n\v\x03\f\x03\f\x03\f\x07\f\u0145\n\f\f\f\x0E\f\u0148" +
        "\v\f\x03\r\x03\r\x03\r\x03\r\x05\r\u014E\n\r\x03\r\x03\r\x05\r\u0152\n" +
        "\r\x03\r\x05\r\u0155\n\r\x03\r\x05\r\u0158\n\r\x03\r\x03\r\x03\x0E\x03" +
        "\x0E\x03\x0E\x07\x0E\u015F\n\x0E\f\x0E\x0E\x0E\u0162\v\x0E\x03\x0F\x07" +
        "\x0F\u0165\n\x0F\f\x0F\x0E\x0F\u0168\v\x0F\x03\x0F\x03\x0F\x05\x0F\u016C" +
        "\n\x0F\x03\x0F\x05\x0F\u016F\n\x0F\x03\x10\x03\x10\x07\x10\u0173\n\x10" +
        "\f\x10\x0E\x10\u0176\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u017B\n\x11" +
        "\x03\x11\x03\x11\x05\x11\u017F\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x07" +
        "\x12\u0185\n\x12\f\x12\x0E\x12\u0188\v\x12\x03\x12\x03\x12\x03\x13\x03" +
        "\x13\x07\x13\u018E\n\x13\f\x13\x0E\x13\u0191\v\x13\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x05\x14\u0197\n\x14\x03\x14\x03\x14\x07\x14\u019B\n\x14\f" +
        "\x14\x0E\x14\u019E\v\x14\x03\x14\x05\x14\u01A1\n\x14\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01AC\n\x15" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01B3\n\x16\f\x16\x0E" +
        "\x16\u01B6\v\x16\x03\x16\x03\x16\x05\x16\u01BA\n\x16\x03\x16\x03\x16\x03" +
        "\x17\x03\x17\x05\x17\u01C0\n\x17\x03\x18\x03\x18\x05\x18\u01C4\n\x18\x03" +
        "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1B\x05\x1B\u01D0\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1D\x07\x1D\u01D9\n\x1D\f\x1D\x0E\x1D\u01DC\v\x1D\x03\x1D\x03\x1D" +
        "\x05\x1D\u01E0\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u01E9\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01EF" +
        "\n\x1F\f\x1F\x0E\x1F\u01F2\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u01F9" +
        "\n \f \x0E \u01FC\v \x03 \x03 \x03 \x03!\x07!\u0202\n!\f!\x0E!\u0205\v" +
        "!\x03!\x03!\x03!\x07!\u020A\n!\f!\x0E!\u020D\v!\x03!\x03!\x05!\u0211\n" +
        "!\x03!\x03!\x03!\x03!\x07!\u0217\n!\f!\x0E!\u021A\v!\x03!\x03!\x05!\u021E" +
        "\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0228\n\"\x03" +
        "#\x03#\x03#\x03$\x03$\x03$\x07$\u0230\n$\f$\x0E$\u0233\v$\x03%\x03%\x03" +
        "%\x05%\u0238\n%\x03&\x03&\x03&\x07&\u023D\n&\f&\x0E&\u0240\v&\x03\'\x03" +
        "\'\x05\'\u0244\n\'\x03(\x03(\x03(\x03(\x07(\u024A\n(\f(\x0E(\u024D\v(" +
        "\x03(\x05(\u0250\n(\x05(\u0252\n(\x03(\x03(\x03)\x03)\x05)\u0258\n)\x03" +
        ")\x03)\x03)\x05)\u025D\n)\x07)\u025F\n)\f)\x0E)\u0262\v)\x03*\x03*\x03" +
        "*\x03*\x05*\u0268\n*\x05*\u026A\n*\x03+\x03+\x03+\x07+\u026F\n+\f+\x0E" +
        "+\u0272\v+\x03,\x03,\x05,\u0276\n,\x03,\x03,\x03-\x03-\x03-\x07-\u027D" +
        "\n-\f-\x0E-\u0280\v-\x03-\x03-\x05-\u0284\n-\x03-\x05-\u0287\n-\x03.\x07" +
        ".\u028A\n.\f.\x0E.\u028D\v.\x03.\x03.\x03.\x03/\x07/\u0293\n/\f/\x0E/" +
        "\u0296\v/\x03/\x03/\x03/\x03/\x030\x030\x030\x070\u029F\n0\f0\x0E0\u02A2" +
        "\v0\x031\x031\x031\x031\x031\x031\x051\u02AA\n1\x032\x032\x033\x033\x03" +
        "4\x034\x034\x034\x034\x054\u02B5\n4\x034\x054\u02B8\n4\x035\x035\x035" +
        "\x075\u02BD\n5\f5\x0E5\u02C0\v5\x036\x036\x036\x036\x037\x037\x037\x05" +
        "7\u02C9\n7\x038\x038\x038\x038\x078\u02CF\n8\f8\x0E8\u02D2\v8\x058\u02D4" +
        "\n8\x038\x058\u02D7\n8\x038\x038\x039\x039\x039\x039\x039\x03:\x03:\x07" +
        ":\u02E2\n:\f:\x0E:\u02E5\v:\x03:\x03:\x03;\x07;\u02EA\n;\f;\x0E;\u02ED" +
        "\v;\x03;\x03;\x05;\u02F1\n;\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02F9\n" +
        "<\x03<\x03<\x05<\u02FD\n<\x03<\x03<\x05<\u0301\n<\x03<\x03<\x05<\u0305" +
        "\n<\x05<\u0307\n<\x03=\x03=\x05=\u030B\n=\x03>\x03>\x03>\x03>\x05>\u0311" +
        "\n>\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x07A\u031A\nA\fA\x0EA\u031D\vA" +
        "\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x05B\u0326\nB\x03C\x07C\u0329\nC\f" +
        "C\x0EC\u032C\vC\x03C\x03C\x03C\x03D\x07D\u0332\nD\fD\x0ED\u0335\vD\x03" +
        "D\x03D\x05D\u0339\nD\x03D\x05D\u033C\nD\x03E\x03E\x03E\x03E\x03E\x05E" +
        "\u0343\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u034C\nE\x03E\x03E\x03" +
        "E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
        "E\x03E\x03E\x06E\u0361\nE\rE\x0EE\u0362\x03E\x05E\u0366\nE\x03E\x05E\u0369" +
        "\nE\x03E\x03E\x03E\x03E\x07E\u036F\nE\fE\x0EE\u0372\vE\x03E\x05E\u0375" +
        "\nE\x03E\x03E\x03E\x03E\x07E\u037B\nE\fE\x0EE\u037E\vE\x03E\x07E\u0381" +
        "\nE\fE\x0EE\u0384\vE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u038E" +
        "\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0397\nE\x03E\x03E\x03E\x05" +
        "E\u039C\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u03A6\nE\x03F" +
        "\x03F\x03F\x07F\u03AB\nF\fF\x0EF\u03AE\vF\x03F\x03F\x03F\x03F\x03F\x03" +
        "G\x03G\x03G\x07G\u03B8\nG\fG\x0EG\u03BB\vG\x03H\x03H\x03H\x03I\x03I\x03" +
        "I\x05I\u03C3\nI\x03I\x03I\x03J\x03J\x03J\x07J\u03CA\nJ\fJ\x0EJ\u03CD\v" +
        "J\x03K\x07K\u03D0\nK\fK\x0EK\u03D3\vK\x03K\x03K\x03K\x03K\x03K\x03L\x06" +
        "L\u03DB\nL\rL\x0EL\u03DC\x03L\x06L\u03E0\nL\rL\x0EL\u03E1\x03M\x03M\x03" +
        "M\x05M\u03E7\nM\x03M\x03M\x03M\x05M\u03EC\nM\x03N\x03N\x05N\u03F0\nN\x03" +
        "N\x03N\x05N\u03F4\nN\x03N\x03N\x05N\u03F8\nN\x05N\u03FA\nN\x03O\x03O\x05" +
        "O\u03FE\nO\x03P\x07P\u0401\nP\fP\x0EP\u0404\vP\x03P\x03P\x03P\x03P\x03" +
        "P\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x07R\u0412\nR\fR\x0ER\u0415\vR\x03" +
        "S\x03S\x03S\x05S\u041A\nS\x03S\x03S\x03S\x03S\x05S\u0420\nS\x03S\x03S" +
        "\x03S\x03S\x05S\u0426\nS\x03S\x05S\u0429\nS\x03T\x03T\x03T\x03T\x03T\x03" +
        "T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u043D" +
        "\nT\x03T\x03T\x05T\u0441\nT\x03T\x03T\x03T\x05T\u0446\nT\x03T\x03T\x05" +
        "T\u044A\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
        "T\x03T\x03T\x05T\u045A\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
        "T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
        "T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
        "T\x03T\x05T\u0482\nT\x03T\x03T\x03T\x03T\x05T\u0488\nT\x03T\x03T\x03T" +
        "\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0497\nT\x03T" +
        "\x07T\u049A\nT\fT\x0ET\u049D\vT\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x05" +
        "V\u04A6\nV\x03V\x03V\x03V\x03V\x03V\x07V\u04AD\nV\fV\x0EV\u04B0\vV\x03" +
        "V\x05V\u04B3\nV\x03W\x03W\x05W\u04B7\nW\x03X\x03X\x03X\x03X\x03X\x03X" +
        "\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u04C9\nX\x05X" +
        "\u04CB\nX\x03Y\x03Y\x03Y\x05Y\u04D0\nY\x03Y\x07Y\u04D3\nY\fY\x0EY\u04D6" +
        "\vY\x03Y\x03Y\x05Y\u04DA\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04E3" +
        "\nZ\x05Z\u04E5\nZ\x03[\x03[\x05[\u04E9\n[\x03[\x03[\x03[\x05[\u04EE\n" +
        "[\x07[\u04F0\n[\f[\x0E[\u04F3\v[\x03[\x05[\u04F6\n[\x03\\\x03\\\x05\\" +
        "\u04FA\n\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x07]\u0502\n]\f]\x0E]\u0505" +
        "\v]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x07]\u050E\n]\f]\x0E]\u0511\v]" +
        "\x03]\x03]\x07]\u0515\n]\f]\x0E]\u0518\v]\x05]\u051A\n]\x03^\x03^\x05" +
        "^\u051E\n^\x03_\x03_\x03_\x03`\x03`\x03`\x05`\u0526\n`\x03a\x03a\x03a" +
        "\x05a\u052B\na\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x07c\u0534\nc\fc\x0E" +
        "c\u0537\vc\x03d\x05d\u053A\nd\x03d\x03d\x05d\u053E\nd\x03d\x03d\x07d\u0542" +
        "\nd\fd\x0Ed\u0545\vd\x03e\x03e\x03f\x03f\x03f\x03f\x07f\u054D\nf\ff\x0E" +
        "f\u0550\vf\x03f\x03f\x03g\x03g\x03g\x03g\x05g\u0558\ng\x05g\u055A\ng\x03" +
        "h\x03h\x03h\x03h\x05h\u0560\nh\x03i\x03i\x05i\u0564\ni\x03i\x03i\x03i" +
        "\x02\x02\x03\xA6j\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
        "\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
        "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
        "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
        "\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
        "x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
        "\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
        "\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
        "\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
        "\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\x02\x0E\x04" +
        "\x02\x13\x13**\x03\x0258\x03\x029:\x03\x02UX\x03\x02KL\x04\x02YZ^^\x03" +
        "\x02WX\x04\x02IJPQ\x04\x02OORR\x04\x02HH_i\x03\x02UV\n\x02\x05\x05\x07" +
        "\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F\'\'\x02\u0601\x02\xD3\x03\x02" +
        "\x02\x02\x04\xE6\x03\x02\x02\x02\x06\xED\x03\x02\x02\x02\b\u0105\x03\x02" +
        "\x02\x02\n\u010C\x03\x02\x02\x02\f\u0116\x03\x02\x02\x02\x0E\u011A\x03" +
        "\x02\x02\x02\x10\u011C\x03\x02\x02\x02\x12\u012B\x03\x02\x02\x02\x14\u0139" +
        "\x03\x02\x02\x02\x16\u0141\x03\x02\x02\x02\x18\u0149\x03\x02\x02\x02\x1A" +
        "\u015B\x03\x02\x02\x02\x1C\u0166\x03\x02\x02\x02\x1E\u0170\x03\x02\x02" +
        "\x02 \u0177\x03\x02\x02\x02\"\u0182\x03\x02\x02\x02$\u018B\x03\x02\x02" +
        "\x02&\u01A0\x03\x02\x02\x02(\u01AB\x03\x02\x02\x02*\u01AD\x03\x02\x02" +
        "\x02,\u01BF\x03\x02\x02\x02.\u01C3\x03\x02\x02\x020\u01C5\x03\x02\x02" +
        "\x022\u01C8\x03\x02\x02\x024\u01CB\x03\x02\x02\x026\u01D3\x03\x02\x02" +
        "\x028\u01DF\x03\x02\x02\x02:\u01E8\x03\x02\x02\x02<\u01EA\x03\x02\x02" +
        "\x02>\u01F5\x03\x02\x02\x02@\u0203\x03\x02\x02\x02B\u0227\x03\x02\x02" +
        "\x02D\u0229\x03\x02\x02\x02F\u022C\x03\x02\x02\x02H\u0234\x03\x02\x02" +
        "\x02J\u0239\x03\x02\x02\x02L\u0243\x03\x02\x02\x02N\u0245\x03\x02\x02" +
        "\x02P\u0255\x03\x02\x02\x02R\u0269\x03\x02\x02\x02T\u026B\x03\x02\x02" +
        "\x02V\u0273\x03\x02\x02\x02X\u0286\x03\x02\x02\x02Z\u028B\x03\x02\x02" +
        "\x02\\\u0294\x03\x02\x02\x02^\u029B\x03\x02\x02\x02`\u02A9\x03\x02\x02" +
        "\x02b\u02AB\x03\x02\x02\x02d\u02AD\x03\x02\x02\x02f\u02AF\x03\x02\x02" +
        "\x02h\u02B9\x03\x02\x02\x02j\u02C1\x03\x02\x02\x02l\u02C8\x03\x02\x02" +
        "\x02n\u02CA\x03\x02\x02\x02p\u02DA\x03\x02\x02\x02r\u02DF\x03\x02\x02" +
        "\x02t\u02F0\x03\x02\x02\x02v\u0306\x03\x02\x02\x02x\u030A\x03\x02\x02" +
        "\x02z\u030C\x03\x02\x02\x02|\u0312\x03\x02\x02\x02~\u0314\x03\x02\x02" +
        "\x02\x80\u0317\x03\x02\x02\x02\x82\u0325\x03\x02\x02\x02\x84\u032A\x03" +
        "\x02\x02\x02\x86\u033B\x03\x02\x02\x02\x88\u03A5\x03\x02\x02\x02\x8A\u03A7" +
        "\x03\x02\x02\x02\x8C\u03B4\x03\x02\x02\x02\x8E\u03BC\x03\x02\x02\x02\x90" +
        "\u03BF\x03\x02\x02\x02\x92\u03C6\x03\x02\x02\x02\x94\u03D1\x03\x02\x02" +
        "\x02\x96\u03DA\x03\x02\x02\x02\x98\u03EB\x03\x02\x02\x02\x9A\u03F9\x03" +
        "\x02\x02\x02\x9C\u03FD\x03\x02\x02\x02\x9E\u0402\x03\x02\x02\x02\xA0\u040A" +
        "\x03\x02\x02\x02\xA2\u040E\x03\x02\x02\x02\xA4\u0428\x03\x02\x02\x02\xA6" +
        "\u0449\x03\x02\x02\x02\xA8\u049E\x03\x02\x02\x02\xAA\u04B2\x03\x02\x02" +
        "\x02\xAC\u04B6\x03\x02\x02\x02\xAE\u04CA\x03\x02\x02\x02\xB0\u04CF\x03" +
        "\x02\x02\x02\xB2\u04E4\x03\x02\x02\x02\xB4\u04F5\x03\x02\x02\x02\xB6\u04F7" +
        "\x03\x02\x02\x02\xB8\u04FD\x03\x02\x02\x02\xBA\u051B\x03\x02\x02\x02\xBC" +
        "\u051F\x03\x02\x02\x02\xBE\u0525\x03\x02\x02\x02\xC0\u052A\x03\x02\x02" +
        "\x02\xC2\u052C\x03\x02\x02\x02\xC4\u0530\x03\x02\x02\x02\xC6\u0539\x03" +
        "\x02\x02\x02\xC8\u0546\x03\x02\x02\x02\xCA\u0548\x03\x02\x02\x02\xCC\u0559" +
        "\x03\x02\x02\x02\xCE\u055F\x03\x02\x02\x02\xD0\u0561\x03\x02\x02\x02\xD2" +
        "\xD4\x05\x04\x03\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4" +
        "\xD8\x03\x02\x02\x02\xD5\xD7\x05\x06\x04\x02\xD6\xD5\x03\x02\x02\x02\xD7" +
        "\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9" +
        "\xDE\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05\b\x05\x02\xDC" +
        "\xDB\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE" +
        "\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1" +
        "\xE2\x07\x02\x02\x03\xE2\x03\x03\x02\x02\x02\xE3\xE5\x05f4\x02\xE4\xE3" +
        "\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7" +
        "\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA" +
        "\x07\"\x02\x02\xEA\xEB\x05^0\x02\xEB\xEC\x07E\x02\x02\xEC\x05\x03\x02" +
        "\x02\x02\xED\xEF\x07\x1B\x02\x02\xEE\xF0\x07(\x02\x02\xEF\xEE\x03\x02" +
        "\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x05^" +
        "0\x02\xF2\xF3\x07G\x02\x02\xF3\xF5\x07Y\x02\x02\xF4\xF2\x03\x02\x02\x02" +
        "\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x07E\x02\x02" +
        "\xF7\x07\x03\x02\x02\x02\xF8\xFA\x05\f\x07\x02\xF9\xF8\x03\x02\x02\x02" +
        "\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02" +
        "\xFC\u0102\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0103\x05\x10\t" +
        "\x02\xFF\u0103\x05\x18\r\x02\u0100\u0103\x05 \x11\x02\u0101\u0103\x05" +
        "p9\x02\u0102\xFE\x03\x02\x02\x02\u0102\xFF\x03\x02\x02\x02\u0102\u0100" +
        "\x03\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02" +
        "\u0104\u0106\x07E\x02\x02\u0105\xFB\x03\x02\x02\x02\u0105\u0104\x03\x02" +
        "\x02\x02\u0106\t\x03\x02\x02\x02\u0107\u010D\x05\f\x07\x02\u0108\u010D" +
        "\x07 \x02\x02\u0109\u010D\x07,\x02\x02\u010A\u010D\x070\x02\x02\u010B" +
        "\u010D\x073\x02\x02\u010C\u0107\x03\x02\x02\x02\u010C\u0108\x03\x02\x02" +
        "\x02\u010C\u0109\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010B" +
        "\x03\x02\x02\x02\u010D\v\x03\x02\x02\x02\u010E\u0117\x05f4\x02\u010F\u0117" +
        "\x07%\x02\x02\u0110\u0117\x07$\x02\x02\u0111\u0117\x07#\x02\x02\u0112" +
        "\u0117\x07(\x02\x02\u0113\u0117\x07\x03\x02\x02\u0114\u0117\x07\x14\x02" +
        "\x02\u0115\u0117\x07)\x02\x02\u0116\u010E\x03\x02\x02\x02\u0116\u010F" +
        "\x03\x02\x02\x02\u0116\u0110\x03\x02\x02\x02\u0116\u0111\x03\x02\x02\x02" +
        "\u0116\u0112\x03\x02\x02\x02\u0116\u0113\x03\x02\x02\x02\u0116\u0114\x03" +
        "\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117\r\x03\x02\x02\x02\u0118" +
        "\u011B\x07\x14\x02\x02\u0119\u011B\x05f4\x02\u011A\u0118\x03\x02\x02\x02" +
        "\u011A\u0119\x03\x02\x02\x02\u011B\x0F\x03\x02\x02\x02\u011C\u011D\x07" +
        "\v\x02\x02\u011D\u011F\x07q\x02\x02\u011E\u0120\x05\x12\n\x02\u011F\u011E" +
        "\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02" +
        "\u0121\u0122\x07\x13\x02\x02\u0122\u0124\x05\xC6d\x02\u0123\u0121\x03" +
        "\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125" +
        "\u0126\x07\x1A\x02\x02\u0126\u0128\x05\xC4c\x02\u0127\u0125\x03\x02\x02" +
        "\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A" +
        "\x05\"\x12\x02\u012A\x11\x03\x02\x02\x02\u012B\u012C\x07J\x02\x02\u012C" +
        "\u0131\x05\x14\v\x02\u012D\u012E\x07F\x02\x02\u012E\u0130\x05\x14\v\x02" +
        "\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03" +
        "\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133" +
        "\u0131\x03\x02\x02\x02\u0134\u0135\x07I\x02\x02\u0135\x13\x03\x02\x02" +
        "\x02\u0136\u0138\x05f4\x02\u0137\u0136\x03\x02\x02\x02\u0138\u013B\x03" +
        "\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A" +
        "\u013C\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013F\x07q\x02" +
        "\x02\u013D\u013E\x07\x13\x02\x02\u013E\u0140\x05\x16\f\x02\u013F\u013D" +
        "\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\x15\x03\x02\x02\x02" +
        "\u0141\u0146\x05\xC6d\x02\u0142\u0143\x07[\x02\x02\u0143\u0145\x05\xC6" +
        "d\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144" +
        "\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\x17\x03\x02\x02\x02" +
        "\u0148\u0146\x03\x02\x02\x02\u0149\u014A\x07\x12\x02\x02\u014A\u014D\x07" +
        "q\x02\x02\u014B\u014C\x07\x1A\x02\x02\u014C\u014E\x05\xC4c\x02\u014D\u014B" +
        "\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02" +
        "\u014F\u0151\x07A\x02\x02\u0150\u0152\x05\x1A\x0E\x02\u0151\u0150\x03" +
        "\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0154\x03\x02\x02\x02\u0153" +
        "\u0155\x07F\x02\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02" +
        "\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0158\x05\x1E\x10\x02\u0157\u0156" +
        "\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02" +
        "\u0159\u015A\x07B\x02\x02\u015A\x19\x03\x02\x02\x02\u015B\u0160\x05\x1C" +
        "\x0F\x02\u015C\u015D\x07F\x02\x02\u015D\u015F\x05\x1C\x0F\x02\u015E\u015C" +
        "\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02" +
        "\u0160\u0161\x03\x02\x02\x02\u0161\x1B\x03\x02\x02\x02\u0162\u0160\x03" +
        "\x02\x02\x02\u0163\u0165\x05";
    JavaParser._serializedATNSegment1 = "f4\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164" +
        "\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02" +
        "\u0168\u0166\x03\x02\x02\x02\u0169\u016B\x07q\x02\x02\u016A\u016C\x05" +
        "\xD0i\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
        "\u016E\x03\x02\x02\x02\u016D\u016F\x05\"\x12\x02\u016E\u016D\x03\x02\x02" +
        "\x02\u016E\u016F\x03\x02\x02\x02\u016F\x1D\x03\x02\x02\x02\u0170\u0174" +
        "\x07E\x02\x02\u0171\u0173\x05&\x14\x02\u0172\u0171\x03\x02\x02\x02\u0173" +
        "\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02" +
        "\x02\x02\u0175\x1F\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u0178" +
        "\x07\x1E\x02\x02\u0178\u017A\x07q\x02\x02\u0179\u017B\x05\x12\n\x02\u017A" +
        "\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017E\x03\x02" +
        "\x02\x02\u017C\u017D\x07\x13\x02\x02\u017D\u017F\x05\xC4c\x02\u017E\u017C" +
        "\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
        "\u0180\u0181\x05$\x13\x02\u0181!\x03\x02\x02\x02\u0182\u0186\x07A\x02" +
        "\x02\u0183\u0185\x05&\x14\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188" +
        "\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
        "\u0187\u0189\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x07" +
        "B\x02\x02\u018A#\x03\x02\x02\x02\u018B\u018F\x07A\x02\x02\u018C\u018E" +
        "\x058\x1D\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02" +
        "\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03" +
        "\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0193\x07B\x02\x02\u0193" +
        "%\x03\x02\x02\x02\u0194\u01A1\x07E\x02\x02\u0195\u0197\x07(\x02\x02\u0196" +
        "\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02" +
        "\x02\x02\u0198\u01A1\x05\x80A\x02\u0199\u019B\x05\n\x06\x02\u019A\u0199" +
        "\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02" +
        "\u019C\u019D\x03\x02\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E\u019C\x03" +
        "\x02\x02\x02\u019F\u01A1\x05(\x15\x02\u01A0\u0194\x03\x02\x02\x02\u01A0" +
        "\u0196\x03\x02\x02\x02\u01A0\u019C\x03\x02\x02\x02\u01A1\'\x03\x02\x02" +
        "\x02\u01A2\u01AC\x05*\x16\x02\u01A3\u01AC\x050\x19\x02\u01A4\u01AC\x05" +
        "6\x1C\x02\u01A5\u01AC\x054\x1B\x02\u01A6\u01AC\x052\x1A\x02\u01A7\u01AC" +
        "\x05 \x11\x02\u01A8\u01AC\x05p9\x02\u01A9\u01AC\x05\x10\t\x02\u01AA\u01AC" +
        "\x05\x18\r\x02\u01AB\u01A2\x03\x02\x02\x02\u01AB\u01A3\x03\x02\x02\x02" +
        "\u01AB\u01A4\x03\x02\x02\x02\u01AB\u01A5\x03\x02\x02\x02\u01AB\u01A6\x03" +
        "\x02\x02\x02\u01AB\u01A7\x03\x02\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB" +
        "\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC)\x03\x02\x02" +
        "\x02\u01AD\u01AE\x05.\x18\x02\u01AE\u01AF\x07q\x02\x02\u01AF\u01B4\x05" +
        "V,\x02\u01B0\u01B1\x07C\x02\x02\u01B1\u01B3\x07D\x02\x02\u01B2\u01B0\x03" +
        "\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4" +
        "\u01B5\x03\x02\x02\x02\u01B5\u01B9\x03\x02\x02\x02\u01B6\u01B4\x03\x02" +
        "\x02\x02\u01B7\u01B8\x07/\x02\x02\u01B8\u01BA\x05T+\x02\u01B9\u01B7\x03" +
        "\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
        "\u01BC\x05,\x17\x02\u01BC+\x03\x02\x02\x02\u01BD\u01C0\x05\x80A\x02\u01BE" +
        "\u01C0\x07E\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02" +
        "\x02\u01C0-\x03\x02\x02\x02\u01C1\u01C4\x05\xC6d\x02\u01C2\u01C4\x072" +
        "\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
        "/\x03\x02\x02\x02\u01C5\u01C6\x05\x12\n\x02\u01C6\u01C7\x05*\x16\x02\u01C7" +
        "1\x03\x02\x02\x02\u01C8\u01C9\x05\x12\n\x02\u01C9\u01CA\x054\x1B\x02\u01CA" +
        "3\x03\x02\x02\x02\u01CB\u01CC\x07q\x02\x02\u01CC\u01CF\x05V,\x02\u01CD" +
        "\u01CE\x07/\x02\x02\u01CE\u01D0\x05T+\x02\u01CF\u01CD\x03\x02\x02\x02" +
        "\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x05" +
        "\x80A\x02\u01D25\x03\x02\x02\x02\u01D3\u01D4\x05\xC6d\x02\u01D4\u01D5" +
        "\x05F$\x02\u01D5\u01D6\x07E\x02\x02\u01D67\x03\x02\x02\x02\u01D7\u01D9" +
        "\x05\n\x06\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
        "\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03" +
        "\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E0\x05:\x1E\x02\u01DE" +
        "\u01E0\x07E\x02\x02\u01DF\u01DA\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02" +
        "\x02\u01E09\x03\x02\x02\x02\u01E1\u01E9\x05<\x1F\x02\u01E2\u01E9\x05@" +
        "!\x02\u01E3\u01E9\x05D#\x02\u01E4\u01E9\x05 \x11\x02\u01E5\u01E9\x05p" +
        "9\x02\u01E6\u01E9\x05\x10\t\x02\u01E7\u01E9\x05\x18\r\x02\u01E8\u01E1" +
        "\x03\x02\x02\x02\u01E8\u01E2\x03\x02\x02\x02\u01E8\u01E3\x03\x02\x02\x02" +
        "\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E5\x03\x02\x02\x02\u01E8\u01E6\x03" +
        "\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9;\x03\x02\x02\x02\u01EA" +
        "\u01EB\x05\xC6d\x02\u01EB\u01F0\x05> \x02\u01EC\u01ED\x07F\x02\x02\u01ED" +
        "\u01EF\x05> \x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02" +
        "\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x03" +
        "\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07E\x02\x02\u01F4" +
        "=\x03\x02\x02\x02\u01F5\u01FA\x07q\x02\x02\u01F6\u01F7\x07C\x02\x02\u01F7" +
        "\u01F9\x07D\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02" +
        "\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD" +
        "\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07H\x02\x02" +
        "\u01FE\u01FF\x05L\'\x02\u01FF?\x03\x02\x02\x02\u0200\u0202\x05B\"\x02" +
        "\u0201\u0200\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03" +
        "\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0210\x03\x02\x02\x02\u0205" +
        "\u0203\x03\x02\x02\x02\u0206\u0211\x05.\x18\x02\u0207\u020B\x05\x12\n" +
        "\x02\u0208\u020A\x05f4\x02\u0209\u0208\x03\x02\x02\x02\u020A\u020D\x03" +
        "\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C" +
        "\u020E\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u020F\x05.\x18" +
        "\x02\u020F\u0211\x03\x02\x02\x02\u0210\u0206\x03\x02\x02\x02\u0210\u0207" +
        "\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x07q\x02\x02" +
        "\u0213\u0218\x05V,\x02\u0214\u0215\x07C\x02\x02\u0215\u0217\x07D\x02\x02" +
        "\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03" +
        "\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021D\x03\x02\x02\x02\u021A" +
        "\u0218\x03\x02\x02\x02\u021B\u021C\x07/\x02\x02\u021C\u021E\x05T+\x02" +
        "\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x03" +
        "\x02\x02\x02\u021F\u0220\x05,\x17\x02\u0220A\x03\x02\x02\x02\u0221\u0228" +
        "\x05f4\x02\u0222\u0228\x07%\x02\x02\u0223\u0228\x07\x03\x02\x02\u0224" +
        "\u0228\x07\x0E\x02\x02\u0225\u0228\x07(\x02\x02\u0226\u0228\x07)\x02\x02" +
        "\u0227\u0221\x03\x02\x02\x02\u0227\u0222\x03\x02\x02\x02\u0227\u0223\x03" +
        "\x02\x02\x02\u0227\u0224\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227" +
        "\u0226\x03\x02\x02\x02\u0228C\x03\x02\x02\x02\u0229\u022A\x05\x12\n\x02" +
        "\u022A\u022B\x05@!\x02\u022BE\x03\x02\x02\x02\u022C\u0231\x05H%\x02\u022D" +
        "\u022E\x07F\x02\x02\u022E\u0230\x05H%\x02\u022F\u022D\x03\x02\x02\x02" +
        "\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03" +
        "\x02\x02\x02\u0232G\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
        "\u0237\x05J&\x02\u0235\u0236\x07H\x02\x02\u0236\u0238\x05L\'\x02\u0237" +
        "\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238I\x03\x02\x02" +
        "\x02\u0239\u023E\x07q\x02\x02\u023A\u023B\x07C\x02\x02\u023B\u023D\x07" +
        "D\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E" +
        "\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023FK\x03\x02\x02" +
        "\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x05N(\x02\u0242\u0244\x05" +
        "\xA6T\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0242\x03\x02\x02\x02\u0244" +
        "M\x03\x02\x02\x02\u0245\u0251\x07A\x02\x02\u0246\u024B\x05L\'\x02\u0247" +
        "\u0248\x07F\x02\x02\u0248\u024A\x05L\'\x02\u0249\u0247\x03\x02\x02\x02" +
        "\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03" +
        "\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E" +
        "\u0250\x07F\x02\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02" +
        "\x02\u0250\u0252\x03\x02\x02\x02\u0251\u0246\x03\x02\x02\x02\u0251\u0252" +
        "\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x07B\x02\x02" +
        "\u0254O\x03\x02\x02\x02\u0255\u0257\x07q\x02\x02\u0256\u0258\x05\xCAf" +
        "\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0260" +
        "\x03\x02\x02\x02\u0259\u025A\x07G\x02\x02\u025A\u025C\x07q\x02\x02\u025B" +
        "\u025D\x05\xCAf\x02\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02" +
        "\x02\u025D\u025F\x03\x02\x02\x02\u025E\u0259\x03\x02\x02\x02\u025F\u0262" +
        "\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02" +
        "\u0261Q\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263\u026A\x05\xC6" +
        "d\x02\u0264\u0267\x07M\x02\x02\u0265\u0266\t\x02\x02\x02\u0266\u0268\x05" +
        "\xC6d\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268" +
        "\u026A\x03\x02\x02\x02\u0269\u0263\x03\x02\x02\x02\u0269\u0264\x03\x02" +
        "\x02\x02\u026AS\x03\x02\x02\x02\u026B\u0270\x05^0\x02\u026C\u026D\x07" +
        "F\x02\x02\u026D\u026F\x05^0\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0272" +
        "\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
        "\u0271U\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0275\x07?\x02" +
        "\x02\u0274\u0276\x05X-\x02\u0275\u0274\x03\x02\x02\x02\u0275\u0276\x03" +
        "\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x07@\x02\x02\u0278" +
        "W\x03\x02\x02\x02\u0279\u027E\x05Z.\x02\u027A\u027B\x07F\x02\x02\u027B" +
        "\u027D\x05Z.\x02\u027C\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02" +
        "\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0283\x03" +
        "\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0282\x07F\x02\x02\u0282" +
        "\u0284\x05\\/\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03\x02\x02" +
        "\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0287\x05\\/\x02\u0286\u0279\x03" +
        "\x02\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287Y\x03\x02\x02\x02\u0288" +
        "\u028A\x05\x0E\b\x02\u0289\u0288\x03\x02\x02\x02\u028A\u028D\x03\x02\x02" +
        "\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E" +
        "\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u028F\x05\xC6d\x02" +
        "\u028F\u0290\x05J&\x02\u0290[\x03\x02\x02\x02\u0291\u0293\x05\x0E\b\x02" +
        "\u0292\u0291\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03" +
        "\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296" +
        "\u0294\x03\x02\x02\x02\u0297\u0298\x05\xC6d\x02\u0298\u0299\x07m\x02\x02" +
        "\u0299\u029A\x05J&\x02\u029A]\x03\x02\x02\x02\u029B\u02A0\x07q\x02\x02" +
        "\u029C\u029D\x07G\x02\x02\u029D\u029F\x07q\x02\x02\u029E\u029C\x03\x02" +
        "\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0" +
        "\u02A1\x03\x02\x02\x02\u02A1_\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02" +
        "\x02\u02A3\u02AA\x05b2\x02\u02A4\u02AA\x05d3\x02\u02A5\u02AA\x07<\x02" +
        "\x02\u02A6\u02AA\x07=\x02\x02\u02A7\u02AA\x07;\x02\x02\u02A8\u02AA\x07" +
        ">\x02\x02\u02A9\u02A3\x03\x02\x02\x02\u02A9\u02A4\x03\x02\x02\x02\u02A9" +
        "\u02A5\x03\x02\x02\x02\u02A9\u02A6\x03\x02\x02\x02\u02A9\u02A7\x03\x02" +
        "\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02AAa\x03\x02\x02\x02\u02AB\u02AC" +
        "\t\x03\x02\x02\u02ACc\x03\x02\x02\x02\u02AD\u02AE\t\x04\x02\x02\u02AE" +
        "e\x03\x02\x02\x02\u02AF\u02B0\x07l\x02\x02\u02B0\u02B7\x05^0\x02\u02B1" +
        "\u02B4\x07?\x02\x02\u02B2\u02B5\x05h5\x02\u02B3\u02B5\x05l7\x02\u02B4" +
        "\u02B2\x03\x02\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02" +
        "\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x07@\x02\x02\u02B7\u02B1" +
        "\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8g\x03\x02\x02\x02\u02B9" +
        "\u02BE\x05j6\x02\u02BA\u02BB\x07F\x02\x02\u02BB\u02BD\x05j6\x02\u02BC" +
        "\u02BA\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02" +
        "\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BFi\x03\x02\x02\x02\u02C0\u02BE" +
        "\x03\x02\x02\x02\u02C1\u02C2\x07q\x02\x02\u02C2\u02C3\x07H\x02\x02\u02C3" +
        "\u02C4\x05l7\x02\u02C4k\x03\x02\x02\x02\u02C5\u02C9\x05\xA6T\x02\u02C6" +
        "\u02C9\x05f4\x02\u02C7\u02C9\x05n8\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8" +
        "\u02C6\x03\x02\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9m\x03\x02\x02" +
        "\x02\u02CA\u02D3\x07A\x02\x02\u02CB\u02D0\x05l7\x02\u02CC\u02CD\x07F\x02" +
        "\x02\u02CD\u02CF\x05l7\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2\x03" +
        "\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1" +
        "\u02D4\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02CB\x03\x02" +
        "\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5" +
        "\u02D7\x07F\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02" +
        "\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07B\x02\x02\u02D9o\x03\x02" +
        "\x02\x02\u02DA\u02DB\x07l\x02\x02\u02DB\u02DC\x07\x1E\x02\x02\u02DC\u02DD" +
        "\x07q\x02\x02\u02DD\u02DE\x05r:\x02\u02DEq\x03\x02\x02\x02\u02DF\u02E3" +
        "\x07A\x02\x02\u02E0\u02E2\x05t;\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2" +
        "\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02" +
        "\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6" +
        "\u02E7\x07B\x02\x02\u02E7s\x03\x02\x02\x02\u02E8\u02EA\x05\n\x06\x02\u02E9" +
        "\u02E8\x03\x02\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB\u02E9\x03\x02" +
        "\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02\x02\x02\u02ED" +
        "\u02EB\x03\x02\x02\x02\u02EE\u02F1\x05v<\x02\u02EF\u02F1\x07E\x02\x02" +
        "\u02F0\u02EB\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1u\x03\x02" +
        "\x02\x02\u02F2\u02F3\x05\xC6d\x02\u02F3\u02F4\x05x=\x02\u02F4\u02F5\x07" +
        "E\x02\x02\u02F5\u0307\x03\x02\x02\x02\u02F6\u02F8\x05\x10\t\x02\u02F7" +
        "\u02F9\x07E\x02\x02\u02F8\u02F7\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02" +
        "\x02\u02F9\u0307\x03\x02\x02\x02\u02FA\u02FC\x05 \x11\x02\u02FB\u02FD" +
        "\x07E\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02" +
        "\u02FD\u0307\x03\x02\x02\x02\u02FE\u0300\x05\x18\r\x02\u02FF\u0301\x07" +
        "E\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301" +
        "\u0307\x03\x02\x02\x02\u0302\u0304\x05p9\x02\u0303\u0305\x07E\x02\x02" +
        "\u0304\u0303\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03" +
        "\x02\x02\x02\u0306\u02F2\x03\x02\x02\x02\u0306\u02F6\x03\x02\x02\x02\u0306" +
        "\u02FA\x03\x02\x02\x02\u0306\u02FE\x03\x02\x02\x02\u0306\u0302\x03\x02" +
        "\x02\x02\u0307w\x03\x02\x02\x02\u0308\u030B\x05z>\x02\u0309\u030B\x05" +
        "|?\x02\u030A\u0308\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030By" +
        "\x03\x02\x02\x02\u030C\u030D\x07q\x02\x02\u030D\u030E\x07?\x02\x02\u030E" +
        "\u0310\x07@\x02\x02\u030F\u0311\x05~@\x02\u0310\u030F\x03\x02\x02\x02" +
        "\u0310\u0311\x03\x02\x02\x02\u0311{\x03\x02\x02\x02\u0312\u0313\x05F$" +
        "\x02\u0313}\x03\x02\x02\x02\u0314\u0315\x07\x0E\x02\x02\u0315\u0316\x05" +
        "l7\x02\u0316\x7F\x03\x02\x02\x02\u0317\u031B\x07A\x02\x02\u0318\u031A" +
        "\x05\x82B\x02\u0319\u0318\x03\x02\x02\x02\u031A\u031D\x03\x02\x02\x02" +
        "\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031E\x03" +
        "\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E\u031F\x07B\x02\x02\u031F" +
        "\x81\x03\x02\x02\x02\u0320\u0321\x05\x84C\x02\u0321\u0322\x07E\x02\x02" +
        "\u0322\u0326\x03\x02\x02\x02\u0323\u0326\x05\x88E\x02\u0324\u0326\x05" +
        "\x86D\x02\u0325\u0320\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325" +
        "\u0324\x03\x02\x02\x02\u0326\x83\x03\x02\x02\x02\u0327\u0329\x05\x0E\b" +
        "\x02\u0328\u0327\x03\x02\x02\x02\u0329\u032C\x03\x02\x02\x02\u032A\u0328" +
        "\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032D\x03\x02\x02\x02" +
        "\u032C\u032A\x03\x02\x02\x02\u032D\u032E\x05\xC6d\x02\u032E\u032F\x05" +
        "F$\x02\u032F\x85\x03\x02\x02\x02\u0330\u0332\x05\f\x07\x02\u0331\u0330" +
        "\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02" +
        "\u0333\u0334\x03\x02\x02\x02\u0334\u0338\x03\x02\x02\x02\u0335\u0333\x03" +
        "\x02\x02\x02\u0336\u0339\x05\x10\t\x02\u0337\u0339\x05 \x11\x02\u0338" +
        "\u0336\x03\x02\x02\x02\u0338\u0337\x03\x02\x02\x02\u0339\u033C\x03\x02" +
        "\x02\x02\u033A\u033C\x07E\x02\x02\u033B\u0333\x03\x02\x02\x02\u033B\u033A" +
        "\x03\x02\x02\x02\u033C\x87\x03\x02\x02\x02\u033D\u03A6\x05\x80A\x02\u033E" +
        "\u033F\x07\x04\x02\x02\u033F\u0342\x05\xA6T\x02\u0340\u0341\x07N\x02\x02" +
        "\u0341\u0343\x05\xA6T\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03" +
        "\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x07E\x02\x02\u0345" +
        "\u03A6\x03\x02\x02\x02\u0346\u0347\x07\x18\x02\x02\u0347\u0348\x05\xA0" +
        "Q\x02\u0348\u034B\x05\x88E\x02\u0349\u034A\x07\x11\x02\x02\u034A\u034C" +
        "\x05\x88E\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
        "\u034C\u03A6\x03\x02\x02\x02\u034D\u034E\x07\x17\x02\x02\u034E\u034F\x07" +
        "?\x02\x02\u034F\u0350\x05\x9AN\x02\u0350\u0351\x07@\x02\x02\u0351\u0352" +
        "\x05\x88E\x02\u0352\u03A6\x03\x02\x02\x02\u0353\u0354\x074\x02\x02\u0354" +
        "\u0355\x05\xA0Q\x02\u0355\u0356\x05\x88E\x02\u0356\u03A6\x03\x02\x02\x02" +
        "\u0357\u0358\x07\x0F\x02\x02\u0358\u0359\x05\x88E\x02\u0359\u035A\x07" +
        "4\x02\x02\u035A\u035B\x05\xA0Q\x02\u035B\u035C\x07E\x02\x02\u035C\u03A6" +
        "\x03\x02\x02\x02\u035D\u035E\x071\x02\x02\u035E\u0368\x05\x80A\x02\u035F" +
        "\u0361\x05\x8AF\x02\u0360\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02" +
        "\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0365" +
        "\x03\x02\x02\x02\u0364\u0366\x05\x8EH\x02\u0365\u0364\x03\x02\x02\x02" +
        "\u0365\u0366\x03\x02\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0369\x05" +
        "\x8EH\x02\u0368\u0360\x03\x02\x02\x02\u0368\u0367\x03\x02\x02\x02\u0369" +
        "\u03A6\x03\x02\x02\x02\u036A\u036B\x071\x02\x02\u036B\u036C\x05\x90I\x02" +
        "\u036C\u0370\x05\x80A\x02\u036D\u036F\x05\x8AF\x02\u036E\u036D\x03\x02" +
        "\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370" +
        "\u0371\x03\x02\x02\x02\u0371\u0374\x03\x02\x02\x02\u0372\u0370\x03\x02" +
        "\x02\x02\u0373\u0375\x05\x8EH\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375" +
        "\x03\x02\x02\x02\u0375\u03A6\x03\x02\x02\x02\u0376\u0377\x07+\x02\x02" +
        "\u0377\u0378\x05\xA0Q\x02\u0378\u037C\x07A\x02\x02\u0379\u037B\x05\x96" +
        "L\x02\u037A\u0379\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A" +
        "\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u0382\x03\x02\x02\x02" +
        "\u037E\u037C\x03\x02\x02\x02\u037F\u0381\x05\x98M\x02\u0380\u037F\x03" +
        "\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382" +
        "\u0383\x03\x02\x02\x02\u0383\u0385\x03\x02\x02\x02\u0384\u0382\x03\x02" +
        "\x02\x02\u0385\u0386\x07B\x02\x02\u0386\u03A6\x03\x02\x02\x02\u0387\u0388" +
        "\x07,\x02\x02\u0388\u0389\x05\xA0Q\x02\u0389\u038A\x05\x80A\x02\u038A" +
        "\u03A6\x03\x02\x02\x02\u038B\u038D\x07&\x02\x02\u038C\u038E\x05\xA6T\x02" +
        "\u038D\u038C\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u038F\x03" +
        "\x02\x02\x02\u038F\u03A6\x07E\x02\x02\u0390\u0391\x07.\x02\x02\u0391\u0392" +
        "\x05\xA6T\x02\u0392\u0393\x07E\x02\x02\u0393\u03A6\x03\x02\x02\x02\u0394" +
        "\u0396\x07\x06\x02\x02\u0395\u0397\x07q\x02\x02\u0396\u0395\x03\x02\x02" +
        "\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u03A6" +
        "\x07E\x02\x02\u0399\u039B\x07\r\x02\x02\u039A\u039C\x07q\x02\x02\u039B" +
        "\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x03\x02" +
        "\x02\x02\u039D\u03A6\x07E\x02\x02\u039E\u03A6\x07E\x02\x02\u039F\u03A0" +
        "\x05\xA6T\x02\u03A0\u03A1\x07E\x02\x02\u03A1\u03A6\x03\x02\x02\x02\u03A2" +
        "\u03A3\x07q\x02\x02\u03A3\u03A4\x07N\x02\x02\u03A4\u03A6\x05\x88E\x02" +
        "\u03A5\u033D\x03\x02\x02\x02\u03A5\u033E\x03\x02\x02\x02\u03A5\u0346\x03" +
        "\x02\x02\x02\u03A5\u034D\x03\x02\x02\x02\u03A5\u0353\x03\x02\x02\x02\u03A5" +
        "\u0357\x03\x02\x02\x02\u03A5\u035D\x03\x02\x02\x02\u03A5\u036A\x03\x02" +
        "\x02\x02\u03A5\u0376\x03\x02\x02\x02\u03A5\u0387\x03\x02\x02\x02\u03A5" +
        "\u038B\x03\x02\x02\x02\u03A5\u0390\x03\x02\x02\x02\u03A5\u0394\x03\x02" +
        "\x02\x02\u03A5\u0399\x03\x02\x02\x02\u03A5\u039E\x03\x02\x02\x02\u03A5" +
        "\u039F\x03\x02\x02\x02\u03A5\u03A2\x03\x02\x02\x02\u03A6\x89\x03\x02\x02" +
        "\x02\u03A7\u03A8\x07\t\x02\x02\u03A8\u03AC\x07?\x02\x02\u03A9\u03AB\x05" +
        "\x0E\b\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC" +
        "\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AF\x03\x02" +
        "\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B0\x05\x8CG\x02\u03B0\u03B1" +
        "\x07q\x02\x02\u03B1\u03B2\x07@\x02\x02\u03B2\u03B3\x05\x80A\x02\u03B3" +
        "\x8B\x03\x02\x02\x02\u03B4\u03B9\x05^0\x02\u03B5\u03B6\x07\\\x02\x02\u03B6" +
        "\u03B8\x05^0\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02" +
        "\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\x8D\x03" +
        "\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03BD\x07\x15\x02\x02\u03BD" +
        "\u03BE\x05\x80A\x02\u03BE\x8F\x03\x02\x02\x02\u03BF\u03C0\x07?\x02\x02" +
        "\u03C0\u03C2\x05\x92J\x02\u03C1\u03C3\x07E\x02\x02\u03C2\u03C1\x03\x02" +
        "\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
        "\u03C5\x07@\x02\x02\u03C5\x91\x03\x02\x02\x02\u03C6\u03CB\x05\x94K\x02" +
        "\u03C7\u03C8\x07E\x02\x02\u03C8\u03CA\x05\x94K\x02\u03C9\u03C7\x03\x02" +
        "\x02\x02\u03CA\u03CD\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB" +
        "\u03CC\x03\x02\x02\x02\u03CC\x93\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02" +
        "\x02\u03CE\u03D0\x05\x0E\b\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D3" +
        "\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02" +
        "\u03D2\u03D4\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03D5\x05" +
        "P)\x02\u03D5\u03D6\x05J&\x02\u03D6\u03D7\x07H\x02\x02\u03D7\u03D8\x05" +
        "\xA6T\x02\u03D8\x95\x03\x02\x02\x02\u03D9\u03DB\x05\x98M\x02\u03DA\u03D9" +
        "\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02" +
        "\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE\u03E0\x05" +
        "\x82B\x02\u03DF\u03DE\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1" +
        "\u03DF\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\x97\x03\x02\x02" +
        "\x02\u03E3\u03E6\x07\b\x02\x02\u03E4\u03E7\x05\xA6T\x02\u03E5\u03E7\x07" +
        "q\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7" +
        "\u03E8\x03\x02\x02\x02\u03E8\u03EC\x07N\x02\x02\u03E9\u03EA\x07\x0E\x02" +
        "\x02\u03EA\u03EC\x07N\x02\x02\u03EB\u03E3\x03\x02\x02\x02\u03EB\u03E9" +
        "\x03\x02\x02\x02\u03EC\x99\x03\x02\x02\x02\u03ED\u03FA\x05\x9EP\x02\u03EE" +
        "\u03F0\x05\x9CO\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02" +
        "\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F3\x07E\x02\x02\u03F2\u03F4" +
        "\x05\xA6T\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02" +
        "\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F7\x07E\x02\x02\u03F6\u03F8\x05" +
        "\xA2R\x02\u03F7\u03F6\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8" +
        "\u03FA\x03\x02\x02\x02\u03F9\u03ED\x03\x02\x02\x02\u03F9\u03EF\x03\x02" +
        "\x02\x02\u03FA\x9B\x03\x02\x02\x02\u03FB\u03FE\x05\x84C\x02\u03FC\u03FE" +
        "\x05\xA2R\x02\u03FD\u03FB\x03\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02" +
        "\u03FE\x9D\x03\x02\x02\x02\u03FF\u0401\x05\x0E\b\x02\u0400\u03FF\x03\x02" +
        "\x02\x02\u0401\u0404\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402" +
        "\u0403\x03\x02\x02\x02\u0403\u0405\x03\x02\x02\x02\u0404\u0402\x03\x02" +
        "\x02\x02\u0405\u0406\x05\xC6d\x02\u0406\u0407\x05J&\x02\u0407\u0408\x07" +
        "N\x02\x02\u0408\u0409\x05\xA6T\x02\u0409\x9F\x03\x02\x02\x02\u040A\u040B" +
        "\x07?\x02\x02\u040B\u040C\x05\xA6T\x02\u040C\u040D\x07@\x02\x02\u040D" +
        "\xA1\x03\x02\x02\x02\u040E\u0413\x05\xA6T\x02\u040F\u0410\x07F\x02\x02" +
        "\u0410\u0412\x05\xA6T\x02\u0411\u040F\x03\x02\x02\x02\u0412\u0415\x03" +
        "\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414" +
        "\xA3\x03\x02\x02\x02\u0415\u0413\x03\x02\x02";
    JavaParser._serializedATNSegment2 = "\x02\u0416\u0417\x07q\x02\x02\u0417\u0419\x07?\x02\x02\u0418\u041A\x05" +
        "\xA2R\x02\u0419\u0418\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A" +
        "\u041B\x03\x02\x02\x02\u041B\u0429\x07@\x02\x02\u041C\u041D\x07-\x02\x02" +
        "\u041D\u041F\x07?\x02\x02\u041E\u0420\x05\xA2R\x02\u041F\u041E\x03\x02" +
        "\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
        "\u0429\x07@\x02\x02\u0422\u0423\x07*\x02\x02\u0423\u0425\x07?\x02\x02" +
        "\u0424\u0426\x05\xA2R\x02\u0425\u0424\x03\x02\x02\x02\u0425\u0426\x03" +
        "\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0429\x07@\x02\x02\u0428" +
        "\u0416\x03\x02\x02\x02\u0428\u041C\x03\x02\x02\x02\u0428\u0422\x03\x02" +
        "\x02\x02\u0429\xA5\x03\x02\x02\x02\u042A\u042B\bT\x01\x02\u042B\u044A" +
        "\x05\xAEX\x02\u042C\u044A\x05\xA4S\x02\u042D\u042E\x07!\x02\x02\u042E" +
        "\u044A\x05\xB2Z\x02\u042F\u0430\x07?\x02\x02\u0430\u0431\x05\xC6d\x02" +
        "\u0431\u0432\x07@\x02\x02\u0432\u0433\x05\xA6T\x17\u0433\u044A\x03\x02" +
        "\x02\x02\u0434\u0435\t\x05\x02\x02\u0435\u044A\x05\xA6T\x15\u0436\u0437" +
        "\t\x06\x02\x02\u0437\u044A\x05\xA6T\x14\u0438\u044A\x05\xA8U\x02\u0439" +
        "\u043A\x05\xC6d\x02\u043A\u0440\x07k\x02\x02\u043B\u043D\x05\xCAf\x02" +
        "\u043C\u043B\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03" +
        "\x02\x02\x02\u043E\u0441\x07q\x02\x02\u043F\u0441\x07!\x02\x02\u0440\u043C" +
        "\x03\x02\x02\x02\u0440\u043F\x03\x02\x02\x02\u0441\u044A\x03\x02\x02\x02" +
        "\u0442\u0443\x05\xB0Y\x02\u0443\u0445\x07k\x02\x02\u0444\u0446\x05\xCA" +
        "f\x02\u0445\u0444\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0447" +
        "\x03\x02\x02\x02\u0447\u0448\x07!\x02\x02\u0448\u044A\x03\x02\x02\x02" +
        "\u0449\u042A\x03\x02\x02\x02\u0449\u042C\x03\x02\x02\x02\u0449\u042D\x03" +
        "\x02\x02\x02\u0449\u042F\x03\x02\x02\x02\u0449\u0434\x03\x02\x02\x02\u0449" +
        "\u0436\x03\x02\x02\x02\u0449\u0438\x03\x02\x02\x02\u0449\u0439\x03\x02" +
        "\x02\x02\u0449\u0442\x03\x02\x02\x02\u044A\u049B\x03\x02\x02\x02\u044B" +
        "\u044C\f\x13\x02\x02\u044C\u044D\t\x07\x02\x02\u044D\u049A\x05\xA6T\x14" +
        "\u044E\u044F\f\x12\x02\x02\u044F\u0450\t\b\x02\x02\u0450\u049A\x05\xA6" +
        "T\x13\u0451\u0459\f\x11\x02\x02\u0452\u0453\x07J\x02\x02\u0453\u045A\x07" +
        "J\x02\x02\u0454\u0455\x07I\x02\x02\u0455\u0456\x07I\x02\x02\u0456\u045A" +
        "\x07I\x02\x02\u0457\u0458\x07I\x02\x02\u0458\u045A\x07I\x02\x02\u0459" +
        "\u0452\x03\x02\x02\x02\u0459\u0454\x03\x02\x02\x02\u0459\u0457\x03\x02" +
        "\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u049A\x05\xA6T\x12\u045C\u045D" +
        "\f\x10\x02\x02\u045D\u045E\t\t\x02\x02\u045E\u049A\x05\xA6T\x11\u045F" +
        "\u0460\f\x0E\x02\x02\u0460\u0461\t\n\x02\x02\u0461\u049A\x05\xA6T\x0F" +
        "\u0462\u0463\f\r\x02\x02\u0463\u0464\x07[\x02\x02\u0464\u049A\x05\xA6" +
        "T\x0E\u0465\u0466\f\f\x02\x02\u0466\u0467\x07]\x02\x02\u0467\u049A\x05" +
        "\xA6T\r\u0468\u0469\f\v\x02\x02\u0469\u046A\x07\\\x02\x02\u046A\u049A" +
        "\x05\xA6T\f\u046B\u046C\f\n\x02\x02\u046C\u046D\x07S\x02\x02\u046D\u049A" +
        "\x05\xA6T\v\u046E\u046F\f\t\x02\x02\u046F\u0470\x07T\x02\x02\u0470\u049A" +
        "\x05\xA6T\n\u0471\u0472\f\b\x02\x02\u0472\u0473\x07M\x02\x02\u0473\u0474" +
        "\x05\xA6T\x02\u0474\u0475\x07N\x02\x02\u0475\u0476\x05\xA6T\b\u0476\u049A" +
        "\x03\x02\x02\x02\u0477\u0478\f\x07\x02\x02\u0478\u0479\t\v\x02\x02\u0479" +
        "\u049A\x05\xA6T\x07\u047A\u047B\f\x1B\x02\x02\u047B\u0487\x07G\x02\x02" +
        "\u047C\u0488\x07q\x02\x02\u047D\u0488\x05\xA4S\x02\u047E\u0488\x07-\x02" +
        "\x02\u047F\u0481\x07!\x02\x02\u0480\u0482\x05\xC2b\x02\u0481\u0480\x03" +
        "\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483" +
        "\u0488\x05\xB6\\\x02\u0484\u0485\x07*\x02\x02\u0485\u0488\x05\xCCg\x02" +
        "\u0486\u0488\x05\xBC_\x02\u0487\u047C\x03\x02\x02\x02\u0487\u047D\x03" +
        "\x02\x02\x02\u0487\u047E\x03\x02\x02\x02\u0487\u047F\x03\x02\x02\x02\u0487" +
        "\u0484\x03\x02\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\u049A\x03\x02" +
        "\x02\x02\u0489\u048A\f\x1A\x02\x02\u048A\u048B\x07C\x02\x02\u048B\u048C" +
        "\x05\xA6T\x02\u048C\u048D\x07D\x02\x02\u048D\u049A\x03\x02\x02\x02\u048E" +
        "\u048F\f\x16\x02\x02\u048F\u049A\t\f\x02\x02\u0490\u0491\f\x0F\x02\x02" +
        "\u0491\u0492\x07\x1C\x02\x02\u0492\u049A\x05\xC6d\x02\u0493\u0494\f\x05" +
        "\x02\x02\u0494\u0496\x07k\x02\x02\u0495\u0497\x05\xCAf\x02\u0496\u0495" +
        "\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02" +
        "\u0498\u049A\x07q\x02\x02\u0499\u044B\x03\x02\x02\x02\u0499\u044E\x03" +
        "\x02\x02\x02\u0499\u0451\x03\x02\x02\x02\u0499\u045C\x03\x02\x02\x02\u0499" +
        "\u045F\x03\x02\x02\x02\u0499\u0462\x03\x02\x02\x02\u0499\u0465\x03\x02" +
        "\x02\x02\u0499\u0468\x03\x02\x02\x02\u0499\u046B\x03\x02\x02\x02\u0499" +
        "\u046E\x03\x02\x02\x02\u0499\u0471\x03\x02\x02\x02\u0499\u0477\x03\x02" +
        "\x02\x02\u0499\u047A\x03\x02\x02\x02\u0499\u0489\x03\x02\x02\x02\u0499" +
        "\u048E\x03\x02\x02\x02\u0499\u0490\x03\x02\x02\x02\u0499\u0493\x03\x02" +
        "\x02\x02\u049A\u049D\x03\x02\x02\x02\u049B\u0499\x03\x02\x02\x02\u049B" +
        "\u049C\x03\x02\x02\x02\u049C\xA7\x03\x02\x02\x02\u049D\u049B\x03\x02\x02" +
        "\x02\u049E\u049F\x05\xAAV\x02\u049F\u04A0\x07j\x02\x02\u04A0\u04A1\x05" +
        "\xACW\x02\u04A1\xA9\x03\x02\x02\x02\u04A2\u04B3\x07q\x02\x02\u04A3\u04A5" +
        "\x07?\x02\x02\u04A4\u04A6\x05X-\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5" +
        "\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04B3\x07@\x02" +
        "\x02\u04A8\u04A9\x07?\x02\x02\u04A9\u04AE\x07q\x02\x02\u04AA\u04AB\x07" +
        "F\x02\x02\u04AB\u04AD\x07q\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AD\u04B0" +
        "\x03\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02" +
        "\u04AF\u04B1\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B1\u04B3\x07" +
        "@\x02\x02\u04B2\u04A2\x03\x02\x02\x02\u04B2\u04A3\x03\x02\x02\x02\u04B2" +
        "\u04A8\x03\x02\x02\x02\u04B3\xAB\x03\x02\x02\x02\u04B4\u04B7\x05\xA6T" +
        "\x02\u04B5\u04B7\x05\x80A\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B5" +
        "\x03\x02\x02\x02\u04B7\xAD\x03\x02\x02\x02\u04B8\u04B9\x07?\x02\x02\u04B9" +
        "\u04BA\x05\xA6T\x02\u04BA\u04BB\x07@\x02\x02\u04BB\u04CB\x03\x02\x02\x02" +
        "\u04BC\u04CB\x07-\x02\x02\u04BD\u04CB\x07*\x02\x02\u04BE\u04CB\x05`1\x02" +
        "\u04BF\u04CB\x07q\x02\x02\u04C0\u04C1\x05.\x18\x02\u04C1\u04C2\x07G\x02" +
        "\x02\u04C2\u04C3\x07\v\x02\x02\u04C3\u04CB\x03\x02\x02\x02\u04C4\u04C8" +
        "\x05\xC2b\x02\u04C5\u04C9\x05\xCEh\x02\u04C6\u04C7\x07-\x02\x02\u04C7" +
        "\u04C9\x05\xD0i\x02\u04C8\u04C5\x03\x02\x02\x02\u04C8\u04C6\x03\x02\x02" +
        "\x02\u04C9\u04CB\x03\x02\x02\x02\u04CA\u04B8\x03\x02\x02\x02\u04CA\u04BC" +
        "\x03\x02\x02\x02\u04CA\u04BD\x03\x02\x02\x02\u04CA\u04BE\x03\x02\x02\x02" +
        "\u04CA\u04BF\x03\x02\x02\x02\u04CA\u04C0\x03\x02\x02\x02\u04CA\u04C4\x03" +
        "\x02\x02\x02\u04CB\xAF\x03\x02\x02\x02\u04CC\u04CD\x05P)\x02\u04CD\u04CE" +
        "\x07G\x02\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF\u04CC\x03\x02\x02\x02" +
        "\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D4\x03\x02\x02\x02\u04D1\u04D3\x05" +
        "f4\x02\u04D2\u04D1\x03\x02\x02\x02\u04D3\u04D6\x03\x02\x02\x02\u04D4\u04D2" +
        "\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D7\x03\x02\x02\x02" +
        "\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04D9\x07q\x02\x02\u04D8\u04DA\x05" +
        "\xCAf\x02\u04D9\u04D8\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA" +
        "\xB1\x03\x02\x02\x02\u04DB\u04DC\x05\xC2b\x02\u04DC\u04DD\x05\xB4[\x02" +
        "\u04DD\u04DE\x05\xBA^\x02\u04DE\u04E5\x03\x02\x02\x02\u04DF\u04E2\x05" +
        "\xB4[\x02\u04E0\u04E3\x05\xB8]\x02\u04E1\u04E3\x05\xBA^\x02\u04E2\u04E0" +
        "\x03\x02\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E3\u04E5\x03\x02\x02\x02" +
        "\u04E4\u04DB\x03\x02\x02\x02\u04E4\u04DF\x03\x02\x02\x02\u04E5\xB3\x03" +
        "\x02\x02\x02\u04E6\u04E8\x07q\x02\x02\u04E7\u04E9\x05\xBE`\x02\u04E8\u04E7" +
        "\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04F1\x03\x02\x02\x02" +
        "\u04EA\u04EB\x07G\x02\x02\u04EB\u04ED\x07q\x02\x02\u04EC\u04EE\x05\xBE" +
        "`\x02\u04ED\u04EC\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04F0" +
        "\x03\x02\x02\x02\u04EF\u04EA\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02" +
        "\u04F1\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F6\x03" +
        "\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F6\x05\xC8e\x02\u04F5" +
        "\u04E6\x03\x02\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\xB5\x03\x02\x02" +
        "\x02\u04F7\u04F9\x07q\x02\x02\u04F8\u04FA\x05\xC0a\x02\u04F9\u04F8\x03" +
        "\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB" +
        "\u04FC\x05\xBA^\x02\u04FC\xB7\x03\x02\x02\x02\u04FD\u0519\x07C\x02\x02" +
        "\u04FE\u0503\x07D\x02\x02\u04FF\u0500\x07C\x02\x02\u0500\u0502\x07D\x02" +
        "\x02\u0501\u04FF\x03\x02\x02\x02\u0502\u0505\x03\x02\x02\x02\u0503\u0501" +
        "\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0506\x03\x02\x02\x02" +
        "\u0505\u0503\x03\x02\x02\x02\u0506\u051A\x05N(\x02\u0507\u0508\x05\xA6" +
        "T\x02\u0508\u050F\x07D\x02\x02\u0509\u050A\x07C\x02\x02\u050A\u050B\x05" +
        "\xA6T\x02\u050B\u050C\x07D\x02\x02\u050C\u050E\x03\x02\x02\x02\u050D\u0509" +
        "\x03\x02\x02\x02\u050E\u0511\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02" +
        "\u050F\u0510\x03\x02\x02\x02\u0510\u0516\x03\x02\x02\x02\u0511\u050F\x03" +
        "\x02\x02\x02\u0512\u0513\x07C\x02\x02\u0513\u0515\x07D\x02\x02\u0514\u0512" +
        "\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02" +
        "\u0516\u0517\x03\x02\x02\x02\u0517\u051A\x03\x02\x02\x02\u0518\u0516\x03" +
        "\x02\x02\x02\u0519\u04FE\x03\x02\x02\x02\u0519\u0507\x03\x02\x02\x02\u051A" +
        "\xB9\x03\x02\x02\x02\u051B\u051D\x05\xD0i\x02\u051C\u051E\x05\"\x12\x02" +
        "\u051D\u051C\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E\xBB\x03" +
        "\x02\x02\x02\u051F\u0520\x05\xC2b\x02\u0520\u0521\x05\xCEh\x02\u0521\xBD" +
        "\x03\x02\x02\x02\u0522\u0523\x07J\x02\x02\u0523\u0526\x07I\x02\x02\u0524" +
        "\u0526\x05\xCAf\x02\u0525\u0522\x03\x02\x02\x02\u0525\u0524\x03\x02\x02" +
        "\x02\u0526\xBF\x03\x02\x02\x02\u0527\u0528\x07J\x02\x02\u0528\u052B\x07" +
        "I\x02\x02\u0529\u052B\x05\xC2b\x02\u052A\u0527\x03\x02\x02\x02\u052A\u0529" +
        "\x03\x02\x02\x02\u052B\xC1\x03\x02\x02\x02\u052C\u052D\x07J\x02\x02\u052D" +
        "\u052E\x05\xC4c\x02\u052E\u052F\x07I\x02\x02\u052F\xC3\x03\x02\x02\x02" +
        "\u0530\u0535\x05\xC6d\x02\u0531\u0532\x07F\x02\x02\u0532\u0534\x05\xC6" +
        "d\x02\u0533\u0531\x03\x02\x02\x02\u0534\u0537\x03\x02\x02\x02\u0535\u0533" +
        "\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\xC5\x03\x02\x02\x02" +
        "\u0537\u0535\x03\x02\x02\x02\u0538\u053A\x05f4\x02\u0539\u0538\x03\x02" +
        "\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053D\x03\x02\x02\x02\u053B" +
        "\u053E\x05P)\x02\u053C\u053E\x05\xC8e\x02\u053D\u053B\x03\x02\x02\x02" +
        "\u053D\u053C\x03\x02\x02\x02\u053E\u0543\x03\x02\x02\x02\u053F\u0540\x07" +
        "C\x02\x02\u0540\u0542\x07D\x02\x02\u0541\u053F\x03\x02\x02\x02\u0542\u0545" +
        "\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02" +
        "\u0544\xC7\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546\u0547\t\r" +
        "\x02\x02\u0547\xC9\x03\x02\x02\x02\u0548\u0549\x07J\x02\x02\u0549\u054E" +
        "\x05R*\x02\u054A\u054B\x07F\x02\x02\u054B\u054D\x05R*\x02\u054C\u054A" +
        "\x03\x02\x02\x02\u054D\u0550\x03\x02\x02\x02\u054E\u054C\x03\x02\x02\x02" +
        "\u054E\u054F\x03\x02\x02\x02\u054F\u0551\x03\x02\x02\x02\u0550\u054E\x03" +
        "\x02\x02\x02\u0551\u0552\x07I\x02\x02\u0552\xCB\x03\x02\x02\x02\u0553" +
        "\u055A\x05\xD0i\x02\u0554\u0555\x07G\x02\x02\u0555\u0557\x07q\x02\x02" +
        "\u0556\u0558\x05\xD0i\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03" +
        "\x02\x02\x02\u0558\u055A\x03\x02\x02\x02\u0559\u0553\x03\x02\x02\x02\u0559" +
        "\u0554\x03\x02\x02\x02\u055A\xCD\x03\x02\x02\x02\u055B\u055C\x07*\x02" +
        "\x02\u055C\u0560\x05\xCCg\x02\u055D\u055E\x07q\x02\x02\u055E\u0560\x05" +
        "\xD0i\x02\u055F\u055B\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u0560" +
        "\xCF\x03\x02\x02\x02\u0561\u0563\x07?\x02\x02\u0562\u0564\x05\xA2R\x02" +
        "\u0563\u0562\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0565\x03" +
        "\x02\x02\x02\u0565\u0566\x07@\x02\x02\u0566\xD1\x03\x02\x02\x02\xAD\xD3" +
        "\xD8\xDE\xE6\xEF\xF4\xFB\u0102\u0105\u010C\u0116\u011A\u011F\u0123\u0127" +
        "\u0131\u0139\u013F\u0146\u014D\u0151\u0154\u0157\u0160\u0166\u016B\u016E" +
        "\u0174\u017A\u017E\u0186\u018F\u0196\u019C\u01A0\u01AB\u01B4\u01B9\u01BF" +
        "\u01C3\u01CF\u01DA\u01DF\u01E8\u01F0\u01FA\u0203\u020B\u0210\u0218\u021D" +
        "\u0227\u0231\u0237\u023E\u0243\u024B\u024F\u0251\u0257\u025C\u0260\u0267" +
        "\u0269\u0270\u0275\u027E\u0283\u0286\u028B\u0294\u02A0\u02A9\u02B4\u02B7" +
        "\u02BE\u02C8\u02D0\u02D3\u02D6\u02E3\u02EB\u02F0\u02F8\u02FC\u0300\u0304" +
        "\u0306\u030A\u0310\u031B\u0325\u032A\u0333\u0338\u033B\u0342\u034B\u0362" +
        "\u0365\u0368\u0370\u0374\u037C\u0382\u038D\u0396\u039B\u03A5\u03AC\u03B9" +
        "\u03C2\u03CB\u03D1\u03DC\u03E1\u03E6\u03EB\u03EF\u03F3\u03F7\u03F9\u03FD" +
        "\u0402\u0413\u0419\u041F\u0425\u0428\u043C\u0440\u0445\u0449\u0459\u0481" +
        "\u0487\u0496\u0499\u049B\u04A5\u04AE\u04B2\u04B6\u04C8\u04CA\u04CF\u04D4" +
        "\u04D9\u04E2\u04E4\u04E8\u04ED\u04F1\u04F5\u04F9\u0503\u050F\u0516\u0519" +
        "\u051D\u0525\u052A\u0535\u0539\u053D\u0543\u054E\u0557\u0559\u055F\u0563";
    JavaParser._serializedATN = Utils.join([
        JavaParser._serializedATNSegment0,
        JavaParser._serializedATNSegment1,
        JavaParser._serializedATNSegment2,
    ], "");
    return JavaParser;
}(Parser_1.Parser));
exports.JavaParser = JavaParser;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.EOF = function () { return this.getToken(JavaParser.EOF, 0); };
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
        get: function () { return JavaParser.RULE_compilationUnit; },
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
    PackageDeclarationContext.prototype.PACKAGE = function () { return this.getToken(JavaParser.PACKAGE, 0); };
    PackageDeclarationContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    PackageDeclarationContext.prototype.SEMI = function () { return this.getToken(JavaParser.SEMI, 0); };
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
        get: function () { return JavaParser.RULE_packageDeclaration; },
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
    ImportDeclarationContext.prototype.IMPORT = function () { return this.getToken(JavaParser.IMPORT, 0); };
    ImportDeclarationContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    ImportDeclarationContext.prototype.SEMI = function () { return this.getToken(JavaParser.SEMI, 0); };
    ImportDeclarationContext.prototype.STATIC = function () { return this.tryGetToken(JavaParser.STATIC, 0); };
    ImportDeclarationContext.prototype.DOT = function () { return this.tryGetToken(JavaParser.DOT, 0); };
    ImportDeclarationContext.prototype.MUL = function () { return this.tryGetToken(JavaParser.MUL, 0); };
    Object.defineProperty(ImportDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_importDeclaration; },
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
    TypeDeclarationContext.prototype.enumDeclaration = function () {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    };
    TypeDeclarationContext.prototype.interfaceDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    };
    TypeDeclarationContext.prototype.annotationTypeDeclaration = function () {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    };
    TypeDeclarationContext.prototype.classOrInterfaceModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassOrInterfaceModifierContext);
        }
    };
    TypeDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    Object.defineProperty(TypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeDeclaration; },
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
    ModifierContext.prototype.NATIVE = function () { return this.tryGetToken(JavaParser.NATIVE, 0); };
    ModifierContext.prototype.SYNCHRONIZED = function () { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); };
    ModifierContext.prototype.TRANSIENT = function () { return this.tryGetToken(JavaParser.TRANSIENT, 0); };
    ModifierContext.prototype.VOLATILE = function () { return this.tryGetToken(JavaParser.VOLATILE, 0); };
    Object.defineProperty(ModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_modifier; },
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
    ClassOrInterfaceModifierContext.prototype.PUBLIC = function () { return this.tryGetToken(JavaParser.PUBLIC, 0); };
    ClassOrInterfaceModifierContext.prototype.PROTECTED = function () { return this.tryGetToken(JavaParser.PROTECTED, 0); };
    ClassOrInterfaceModifierContext.prototype.PRIVATE = function () { return this.tryGetToken(JavaParser.PRIVATE, 0); };
    ClassOrInterfaceModifierContext.prototype.STATIC = function () { return this.tryGetToken(JavaParser.STATIC, 0); };
    ClassOrInterfaceModifierContext.prototype.ABSTRACT = function () { return this.tryGetToken(JavaParser.ABSTRACT, 0); };
    ClassOrInterfaceModifierContext.prototype.FINAL = function () { return this.tryGetToken(JavaParser.FINAL, 0); };
    ClassOrInterfaceModifierContext.prototype.STRICTFP = function () { return this.tryGetToken(JavaParser.STRICTFP, 0); };
    Object.defineProperty(ClassOrInterfaceModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_classOrInterfaceModifier; },
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
    VariableModifierContext.prototype.FINAL = function () { return this.tryGetToken(JavaParser.FINAL, 0); };
    VariableModifierContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    Object.defineProperty(VariableModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_variableModifier; },
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
    ClassDeclarationContext.prototype.CLASS = function () { return this.getToken(JavaParser.CLASS, 0); };
    ClassDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    ClassDeclarationContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    ClassDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    ClassDeclarationContext.prototype.EXTENDS = function () { return this.tryGetToken(JavaParser.EXTENDS, 0); };
    ClassDeclarationContext.prototype.typeType = function () {
        return this.tryGetRuleContext(0, TypeTypeContext);
    };
    ClassDeclarationContext.prototype.IMPLEMENTS = function () { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); };
    ClassDeclarationContext.prototype.typeList = function () {
        return this.tryGetRuleContext(0, TypeListContext);
    };
    Object.defineProperty(ClassDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_classDeclaration; },
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
    TypeParametersContext.prototype.LT = function () { return this.getToken(JavaParser.LT, 0); };
    TypeParametersContext.prototype.typeParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    };
    TypeParametersContext.prototype.GT = function () { return this.getToken(JavaParser.GT, 0); };
    TypeParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeParameters; },
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
    TypeParameterContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    TypeParameterContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    TypeParameterContext.prototype.EXTENDS = function () { return this.tryGetToken(JavaParser.EXTENDS, 0); };
    TypeParameterContext.prototype.typeBound = function () {
        return this.tryGetRuleContext(0, TypeBoundContext);
    };
    Object.defineProperty(TypeParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeParameter; },
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
    TypeBoundContext.prototype.typeType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    };
    TypeBoundContext.prototype.BITAND = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.BITAND);
        }
        else {
            return this.getToken(JavaParser.BITAND, i);
        }
    };
    Object.defineProperty(TypeBoundContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeBound; },
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
    EnumDeclarationContext.prototype.ENUM = function () { return this.getToken(JavaParser.ENUM, 0); };
    EnumDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    EnumDeclarationContext.prototype.LBRACE = function () { return this.getToken(JavaParser.LBRACE, 0); };
    EnumDeclarationContext.prototype.RBRACE = function () { return this.getToken(JavaParser.RBRACE, 0); };
    EnumDeclarationContext.prototype.IMPLEMENTS = function () { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); };
    EnumDeclarationContext.prototype.typeList = function () {
        return this.tryGetRuleContext(0, TypeListContext);
    };
    EnumDeclarationContext.prototype.enumConstants = function () {
        return this.tryGetRuleContext(0, EnumConstantsContext);
    };
    EnumDeclarationContext.prototype.COMMA = function () { return this.tryGetToken(JavaParser.COMMA, 0); };
    EnumDeclarationContext.prototype.enumBodyDeclarations = function () {
        return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
    };
    Object.defineProperty(EnumDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_enumDeclaration; },
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(EnumConstantsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_enumConstants; },
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
    EnumConstantContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
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
        get: function () { return JavaParser.RULE_enumConstant; },
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
    EnumBodyDeclarationsContext.prototype.SEMI = function () { return this.getToken(JavaParser.SEMI, 0); };
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
        get: function () { return JavaParser.RULE_enumBodyDeclarations; },
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
    InterfaceDeclarationContext.prototype.INTERFACE = function () { return this.getToken(JavaParser.INTERFACE, 0); };
    InterfaceDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    InterfaceDeclarationContext.prototype.interfaceBody = function () {
        return this.getRuleContext(0, InterfaceBodyContext);
    };
    InterfaceDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    InterfaceDeclarationContext.prototype.EXTENDS = function () { return this.tryGetToken(JavaParser.EXTENDS, 0); };
    InterfaceDeclarationContext.prototype.typeList = function () {
        return this.tryGetRuleContext(0, TypeListContext);
    };
    Object.defineProperty(InterfaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_interfaceDeclaration; },
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
var ClassBodyContext = /** @class */ (function (_super) {
    __extends(ClassBodyContext, _super);
    function ClassBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBodyContext.prototype.LBRACE = function () { return this.getToken(JavaParser.LBRACE, 0); };
    ClassBodyContext.prototype.RBRACE = function () { return this.getToken(JavaParser.RBRACE, 0); };
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
        get: function () { return JavaParser.RULE_classBody; },
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
    InterfaceBodyContext.prototype.LBRACE = function () { return this.getToken(JavaParser.LBRACE, 0); };
    InterfaceBodyContext.prototype.RBRACE = function () { return this.getToken(JavaParser.RBRACE, 0); };
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
        get: function () { return JavaParser.RULE_interfaceBody; },
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
    ClassBodyDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    ClassBodyDeclarationContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    ClassBodyDeclarationContext.prototype.STATIC = function () { return this.tryGetToken(JavaParser.STATIC, 0); };
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
        get: function () { return JavaParser.RULE_classBodyDeclaration; },
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
    Object.defineProperty(MemberDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_memberDeclaration; },
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
    MethodDeclarationContext.prototype.typeTypeOrVoid = function () {
        return this.getRuleContext(0, TypeTypeOrVoidContext);
    };
    MethodDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    MethodDeclarationContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    MethodDeclarationContext.prototype.methodBody = function () {
        return this.getRuleContext(0, MethodBodyContext);
    };
    MethodDeclarationContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    };
    MethodDeclarationContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    };
    MethodDeclarationContext.prototype.THROWS = function () { return this.tryGetToken(JavaParser.THROWS, 0); };
    MethodDeclarationContext.prototype.qualifiedNameList = function () {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    };
    Object.defineProperty(MethodDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_methodDeclaration; },
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
var MethodBodyContext = /** @class */ (function (_super) {
    __extends(MethodBodyContext, _super);
    function MethodBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodBodyContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    MethodBodyContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    Object.defineProperty(MethodBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_methodBody; },
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
var TypeTypeOrVoidContext = /** @class */ (function (_super) {
    __extends(TypeTypeOrVoidContext, _super);
    function TypeTypeOrVoidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeTypeOrVoidContext.prototype.typeType = function () {
        return this.tryGetRuleContext(0, TypeTypeContext);
    };
    TypeTypeOrVoidContext.prototype.VOID = function () { return this.tryGetToken(JavaParser.VOID, 0); };
    Object.defineProperty(TypeTypeOrVoidContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeTypeOrVoid; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeTypeOrVoidContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeTypeOrVoid) {
            listener.enterTypeTypeOrVoid(this);
        }
    };
    // @Override
    TypeTypeOrVoidContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeTypeOrVoid) {
            listener.exitTypeTypeOrVoid(this);
        }
    };
    // @Override
    TypeTypeOrVoidContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeTypeOrVoid) {
            return visitor.visitTypeTypeOrVoid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeTypeOrVoidContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeTypeOrVoidContext = TypeTypeOrVoidContext;
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
        get: function () { return JavaParser.RULE_genericMethodDeclaration; },
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
        get: function () { return JavaParser.RULE_genericConstructorDeclaration; },
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
var ConstructorDeclarationContext = /** @class */ (function (_super) {
    __extends(ConstructorDeclarationContext, _super);
    function ConstructorDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    ConstructorDeclarationContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    ConstructorDeclarationContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ConstructorDeclarationContext.prototype.THROWS = function () { return this.tryGetToken(JavaParser.THROWS, 0); };
    ConstructorDeclarationContext.prototype.qualifiedNameList = function () {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    };
    Object.defineProperty(ConstructorDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_constructorDeclaration; },
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
var FieldDeclarationContext = /** @class */ (function (_super) {
    __extends(FieldDeclarationContext, _super);
    function FieldDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldDeclarationContext.prototype.typeType = function () {
        return this.getRuleContext(0, TypeTypeContext);
    };
    FieldDeclarationContext.prototype.variableDeclarators = function () {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    };
    FieldDeclarationContext.prototype.SEMI = function () { return this.getToken(JavaParser.SEMI, 0); };
    Object.defineProperty(FieldDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_fieldDeclaration; },
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
    InterfaceBodyDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    Object.defineProperty(InterfaceBodyDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_interfaceBodyDeclaration; },
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
        get: function () { return JavaParser.RULE_interfaceMemberDeclaration; },
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
    ConstDeclarationContext.prototype.typeType = function () {
        return this.getRuleContext(0, TypeTypeContext);
    };
    ConstDeclarationContext.prototype.constantDeclarator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, ConstantDeclaratorContext);
        }
    };
    ConstDeclarationContext.prototype.SEMI = function () { return this.getToken(JavaParser.SEMI, 0); };
    ConstDeclarationContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(ConstDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_constDeclaration; },
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
    ConstantDeclaratorContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    ConstantDeclaratorContext.prototype.ASSIGN = function () { return this.getToken(JavaParser.ASSIGN, 0); };
    ConstantDeclaratorContext.prototype.variableInitializer = function () {
        return this.getRuleContext(0, VariableInitializerContext);
    };
    ConstantDeclaratorContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    };
    ConstantDeclaratorContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    };
    Object.defineProperty(ConstantDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_constantDeclarator; },
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
    InterfaceMethodDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    InterfaceMethodDeclarationContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    InterfaceMethodDeclarationContext.prototype.methodBody = function () {
        return this.getRuleContext(0, MethodBodyContext);
    };
    InterfaceMethodDeclarationContext.prototype.typeTypeOrVoid = function () {
        return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
    };
    InterfaceMethodDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    InterfaceMethodDeclarationContext.prototype.interfaceMethodModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMethodModifierContext);
        }
        else {
            return this.getRuleContext(i, InterfaceMethodModifierContext);
        }
    };
    InterfaceMethodDeclarationContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    };
    InterfaceMethodDeclarationContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    };
    InterfaceMethodDeclarationContext.prototype.THROWS = function () { return this.tryGetToken(JavaParser.THROWS, 0); };
    InterfaceMethodDeclarationContext.prototype.qualifiedNameList = function () {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    };
    InterfaceMethodDeclarationContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    Object.defineProperty(InterfaceMethodDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_interfaceMethodDeclaration; },
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
var InterfaceMethodModifierContext = /** @class */ (function (_super) {
    __extends(InterfaceMethodModifierContext, _super);
    function InterfaceMethodModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceMethodModifierContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    InterfaceMethodModifierContext.prototype.PUBLIC = function () { return this.tryGetToken(JavaParser.PUBLIC, 0); };
    InterfaceMethodModifierContext.prototype.ABSTRACT = function () { return this.tryGetToken(JavaParser.ABSTRACT, 0); };
    InterfaceMethodModifierContext.prototype.DEFAULT = function () { return this.tryGetToken(JavaParser.DEFAULT, 0); };
    InterfaceMethodModifierContext.prototype.STATIC = function () { return this.tryGetToken(JavaParser.STATIC, 0); };
    InterfaceMethodModifierContext.prototype.STRICTFP = function () { return this.tryGetToken(JavaParser.STRICTFP, 0); };
    Object.defineProperty(InterfaceMethodModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_interfaceMethodModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceMethodModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceMethodModifier) {
            listener.enterInterfaceMethodModifier(this);
        }
    };
    // @Override
    InterfaceMethodModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceMethodModifier) {
            listener.exitInterfaceMethodModifier(this);
        }
    };
    // @Override
    InterfaceMethodModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceMethodModifier) {
            return visitor.visitInterfaceMethodModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceMethodModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceMethodModifierContext = InterfaceMethodModifierContext;
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
        get: function () { return JavaParser.RULE_genericInterfaceMethodDeclaration; },
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(VariableDeclaratorsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_variableDeclarators; },
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
    VariableDeclaratorContext.prototype.ASSIGN = function () { return this.tryGetToken(JavaParser.ASSIGN, 0); };
    VariableDeclaratorContext.prototype.variableInitializer = function () {
        return this.tryGetRuleContext(0, VariableInitializerContext);
    };
    Object.defineProperty(VariableDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_variableDeclarator; },
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
    VariableDeclaratorIdContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    VariableDeclaratorIdContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    };
    VariableDeclaratorIdContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    };
    Object.defineProperty(VariableDeclaratorIdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_variableDeclaratorId; },
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
        get: function () { return JavaParser.RULE_variableInitializer; },
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
    ArrayInitializerContext.prototype.LBRACE = function () { return this.getToken(JavaParser.LBRACE, 0); };
    ArrayInitializerContext.prototype.RBRACE = function () { return this.getToken(JavaParser.RBRACE, 0); };
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(ArrayInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_arrayInitializer; },
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
var ClassOrInterfaceTypeContext = /** @class */ (function (_super) {
    __extends(ClassOrInterfaceTypeContext, _super);
    function ClassOrInterfaceTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassOrInterfaceTypeContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
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
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    };
    Object.defineProperty(ClassOrInterfaceTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_classOrInterfaceType; },
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
var TypeArgumentContext = /** @class */ (function (_super) {
    __extends(TypeArgumentContext, _super);
    function TypeArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentContext.prototype.typeType = function () {
        return this.tryGetRuleContext(0, TypeTypeContext);
    };
    TypeArgumentContext.prototype.QUESTION = function () { return this.tryGetToken(JavaParser.QUESTION, 0); };
    TypeArgumentContext.prototype.EXTENDS = function () { return this.tryGetToken(JavaParser.EXTENDS, 0); };
    TypeArgumentContext.prototype.SUPER = function () { return this.tryGetToken(JavaParser.SUPER, 0); };
    Object.defineProperty(TypeArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeArgument; },
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(QualifiedNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_qualifiedNameList; },
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
    FormalParametersContext.prototype.LPAREN = function () { return this.getToken(JavaParser.LPAREN, 0); };
    FormalParametersContext.prototype.RPAREN = function () { return this.getToken(JavaParser.RPAREN, 0); };
    FormalParametersContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_formalParameters; },
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    FormalParameterListContext.prototype.lastFormalParameter = function () {
        return this.tryGetRuleContext(0, LastFormalParameterContext);
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_formalParameterList; },
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
    FormalParameterContext.prototype.typeType = function () {
        return this.getRuleContext(0, TypeTypeContext);
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
        get: function () { return JavaParser.RULE_formalParameter; },
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
    LastFormalParameterContext.prototype.typeType = function () {
        return this.getRuleContext(0, TypeTypeContext);
    };
    LastFormalParameterContext.prototype.ELLIPSIS = function () { return this.getToken(JavaParser.ELLIPSIS, 0); };
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
        get: function () { return JavaParser.RULE_lastFormalParameter; },
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
var QualifiedNameContext = /** @class */ (function (_super) {
    __extends(QualifiedNameContext, _super);
    function QualifiedNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedNameContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
        }
    };
    QualifiedNameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    };
    Object.defineProperty(QualifiedNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_qualifiedName; },
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
    LiteralContext.prototype.integerLiteral = function () {
        return this.tryGetRuleContext(0, IntegerLiteralContext);
    };
    LiteralContext.prototype.floatLiteral = function () {
        return this.tryGetRuleContext(0, FloatLiteralContext);
    };
    LiteralContext.prototype.CHAR_LITERAL = function () { return this.tryGetToken(JavaParser.CHAR_LITERAL, 0); };
    LiteralContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(JavaParser.STRING_LITERAL, 0); };
    LiteralContext.prototype.BOOL_LITERAL = function () { return this.tryGetToken(JavaParser.BOOL_LITERAL, 0); };
    LiteralContext.prototype.NULL_LITERAL = function () { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_literal; },
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
var IntegerLiteralContext = /** @class */ (function (_super) {
    __extends(IntegerLiteralContext, _super);
    function IntegerLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerLiteralContext.prototype.DECIMAL_LITERAL = function () { return this.tryGetToken(JavaParser.DECIMAL_LITERAL, 0); };
    IntegerLiteralContext.prototype.HEX_LITERAL = function () { return this.tryGetToken(JavaParser.HEX_LITERAL, 0); };
    IntegerLiteralContext.prototype.OCT_LITERAL = function () { return this.tryGetToken(JavaParser.OCT_LITERAL, 0); };
    IntegerLiteralContext.prototype.BINARY_LITERAL = function () { return this.tryGetToken(JavaParser.BINARY_LITERAL, 0); };
    Object.defineProperty(IntegerLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_integerLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerLiteral) {
            listener.enterIntegerLiteral(this);
        }
    };
    // @Override
    IntegerLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerLiteral) {
            listener.exitIntegerLiteral(this);
        }
    };
    // @Override
    IntegerLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerLiteralContext = IntegerLiteralContext;
var FloatLiteralContext = /** @class */ (function (_super) {
    __extends(FloatLiteralContext, _super);
    function FloatLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FloatLiteralContext.prototype.FLOAT_LITERAL = function () { return this.tryGetToken(JavaParser.FLOAT_LITERAL, 0); };
    FloatLiteralContext.prototype.HEX_FLOAT_LITERAL = function () { return this.tryGetToken(JavaParser.HEX_FLOAT_LITERAL, 0); };
    Object.defineProperty(FloatLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_floatLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FloatLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterFloatLiteral) {
            listener.enterFloatLiteral(this);
        }
    };
    // @Override
    FloatLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitFloatLiteral) {
            listener.exitFloatLiteral(this);
        }
    };
    // @Override
    FloatLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FloatLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FloatLiteralContext = FloatLiteralContext;
var AnnotationContext = /** @class */ (function (_super) {
    __extends(AnnotationContext, _super);
    function AnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationContext.prototype.AT = function () { return this.getToken(JavaParser.AT, 0); };
    AnnotationContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    AnnotationContext.prototype.LPAREN = function () { return this.tryGetToken(JavaParser.LPAREN, 0); };
    AnnotationContext.prototype.RPAREN = function () { return this.tryGetToken(JavaParser.RPAREN, 0); };
    AnnotationContext.prototype.elementValuePairs = function () {
        return this.tryGetRuleContext(0, ElementValuePairsContext);
    };
    AnnotationContext.prototype.elementValue = function () {
        return this.tryGetRuleContext(0, ElementValueContext);
    };
    Object.defineProperty(AnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_annotation; },
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(ElementValuePairsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_elementValuePairs; },
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
    ElementValuePairContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    ElementValuePairContext.prototype.ASSIGN = function () { return this.getToken(JavaParser.ASSIGN, 0); };
    ElementValuePairContext.prototype.elementValue = function () {
        return this.getRuleContext(0, ElementValueContext);
    };
    Object.defineProperty(ElementValuePairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_elementValuePair; },
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
        get: function () { return JavaParser.RULE_elementValue; },
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
    ElementValueArrayInitializerContext.prototype.LBRACE = function () { return this.getToken(JavaParser.LBRACE, 0); };
    ElementValueArrayInitializerContext.prototype.RBRACE = function () { return this.getToken(JavaParser.RBRACE, 0); };
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(ElementValueArrayInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_elementValueArrayInitializer; },
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
    AnnotationTypeDeclarationContext.prototype.AT = function () { return this.getToken(JavaParser.AT, 0); };
    AnnotationTypeDeclarationContext.prototype.INTERFACE = function () { return this.getToken(JavaParser.INTERFACE, 0); };
    AnnotationTypeDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    AnnotationTypeDeclarationContext.prototype.annotationTypeBody = function () {
        return this.getRuleContext(0, AnnotationTypeBodyContext);
    };
    Object.defineProperty(AnnotationTypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_annotationTypeDeclaration; },
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
    AnnotationTypeBodyContext.prototype.LBRACE = function () { return this.getToken(JavaParser.LBRACE, 0); };
    AnnotationTypeBodyContext.prototype.RBRACE = function () { return this.getToken(JavaParser.RBRACE, 0); };
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
        get: function () { return JavaParser.RULE_annotationTypeBody; },
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
    AnnotationTypeElementDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    Object.defineProperty(AnnotationTypeElementDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_annotationTypeElementDeclaration; },
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
    AnnotationTypeElementRestContext.prototype.typeType = function () {
        return this.tryGetRuleContext(0, TypeTypeContext);
    };
    AnnotationTypeElementRestContext.prototype.annotationMethodOrConstantRest = function () {
        return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
    };
    AnnotationTypeElementRestContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
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
        get: function () { return JavaParser.RULE_annotationTypeElementRest; },
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
        get: function () { return JavaParser.RULE_annotationMethodOrConstantRest; },
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
    AnnotationMethodRestContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    AnnotationMethodRestContext.prototype.LPAREN = function () { return this.getToken(JavaParser.LPAREN, 0); };
    AnnotationMethodRestContext.prototype.RPAREN = function () { return this.getToken(JavaParser.RPAREN, 0); };
    AnnotationMethodRestContext.prototype.defaultValue = function () {
        return this.tryGetRuleContext(0, DefaultValueContext);
    };
    Object.defineProperty(AnnotationMethodRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_annotationMethodRest; },
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
        get: function () { return JavaParser.RULE_annotationConstantRest; },
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
    DefaultValueContext.prototype.DEFAULT = function () { return this.getToken(JavaParser.DEFAULT, 0); };
    DefaultValueContext.prototype.elementValue = function () {
        return this.getRuleContext(0, ElementValueContext);
    };
    Object.defineProperty(DefaultValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_defaultValue; },
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
    BlockContext.prototype.LBRACE = function () { return this.getToken(JavaParser.LBRACE, 0); };
    BlockContext.prototype.RBRACE = function () { return this.getToken(JavaParser.RBRACE, 0); };
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
        get: function () { return JavaParser.RULE_block; },
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
    BlockStatementContext.prototype.localVariableDeclaration = function () {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    };
    BlockStatementContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    BlockStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    BlockStatementContext.prototype.localTypeDeclaration = function () {
        return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
    };
    Object.defineProperty(BlockStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_blockStatement; },
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
var LocalVariableDeclarationContext = /** @class */ (function (_super) {
    __extends(LocalVariableDeclarationContext, _super);
    function LocalVariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalVariableDeclarationContext.prototype.typeType = function () {
        return this.getRuleContext(0, TypeTypeContext);
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
        get: function () { return JavaParser.RULE_localVariableDeclaration; },
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
var LocalTypeDeclarationContext = /** @class */ (function (_super) {
    __extends(LocalTypeDeclarationContext, _super);
    function LocalTypeDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalTypeDeclarationContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    LocalTypeDeclarationContext.prototype.interfaceDeclaration = function () {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    };
    LocalTypeDeclarationContext.prototype.classOrInterfaceModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassOrInterfaceModifierContext);
        }
    };
    LocalTypeDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    Object.defineProperty(LocalTypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_localTypeDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocalTypeDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterLocalTypeDeclaration) {
            listener.enterLocalTypeDeclaration(this);
        }
    };
    // @Override
    LocalTypeDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitLocalTypeDeclaration) {
            listener.exitLocalTypeDeclaration(this);
        }
    };
    // @Override
    LocalTypeDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitLocalTypeDeclaration) {
            return visitor.visitLocalTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocalTypeDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocalTypeDeclarationContext = LocalTypeDeclarationContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.ASSERT = function () { return this.tryGetToken(JavaParser.ASSERT, 0); };
    StatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    StatementContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    StatementContext.prototype.COLON = function () { return this.tryGetToken(JavaParser.COLON, 0); };
    StatementContext.prototype.IF = function () { return this.tryGetToken(JavaParser.IF, 0); };
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
    StatementContext.prototype.ELSE = function () { return this.tryGetToken(JavaParser.ELSE, 0); };
    StatementContext.prototype.FOR = function () { return this.tryGetToken(JavaParser.FOR, 0); };
    StatementContext.prototype.LPAREN = function () { return this.tryGetToken(JavaParser.LPAREN, 0); };
    StatementContext.prototype.forControl = function () {
        return this.tryGetRuleContext(0, ForControlContext);
    };
    StatementContext.prototype.RPAREN = function () { return this.tryGetToken(JavaParser.RPAREN, 0); };
    StatementContext.prototype.WHILE = function () { return this.tryGetToken(JavaParser.WHILE, 0); };
    StatementContext.prototype.DO = function () { return this.tryGetToken(JavaParser.DO, 0); };
    StatementContext.prototype.TRY = function () { return this.tryGetToken(JavaParser.TRY, 0); };
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
    StatementContext.prototype.SWITCH = function () { return this.tryGetToken(JavaParser.SWITCH, 0); };
    StatementContext.prototype.LBRACE = function () { return this.tryGetToken(JavaParser.LBRACE, 0); };
    StatementContext.prototype.RBRACE = function () { return this.tryGetToken(JavaParser.RBRACE, 0); };
    StatementContext.prototype.switchBlockStatementGroup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchBlockStatementGroupContext);
        }
        else {
            return this.getRuleContext(i, SwitchBlockStatementGroupContext);
        }
    };
    StatementContext.prototype.switchLabel = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        else {
            return this.getRuleContext(i, SwitchLabelContext);
        }
    };
    StatementContext.prototype.SYNCHRONIZED = function () { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); };
    StatementContext.prototype.RETURN = function () { return this.tryGetToken(JavaParser.RETURN, 0); };
    StatementContext.prototype.THROW = function () { return this.tryGetToken(JavaParser.THROW, 0); };
    StatementContext.prototype.BREAK = function () { return this.tryGetToken(JavaParser.BREAK, 0); };
    StatementContext.prototype.IDENTIFIER = function () { return this.tryGetToken(JavaParser.IDENTIFIER, 0); };
    StatementContext.prototype.CONTINUE = function () { return this.tryGetToken(JavaParser.CONTINUE, 0); };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_statement; },
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
var CatchClauseContext = /** @class */ (function (_super) {
    __extends(CatchClauseContext, _super);
    function CatchClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchClauseContext.prototype.CATCH = function () { return this.getToken(JavaParser.CATCH, 0); };
    CatchClauseContext.prototype.LPAREN = function () { return this.getToken(JavaParser.LPAREN, 0); };
    CatchClauseContext.prototype.catchType = function () {
        return this.getRuleContext(0, CatchTypeContext);
    };
    CatchClauseContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    CatchClauseContext.prototype.RPAREN = function () { return this.getToken(JavaParser.RPAREN, 0); };
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
        get: function () { return JavaParser.RULE_catchClause; },
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
            return this.getTokens(JavaParser.BITOR);
        }
        else {
            return this.getToken(JavaParser.BITOR, i);
        }
    };
    Object.defineProperty(CatchTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_catchType; },
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
    FinallyBlockContext.prototype.FINALLY = function () { return this.getToken(JavaParser.FINALLY, 0); };
    FinallyBlockContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(FinallyBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_finallyBlock; },
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
    ResourceSpecificationContext.prototype.LPAREN = function () { return this.getToken(JavaParser.LPAREN, 0); };
    ResourceSpecificationContext.prototype.resources = function () {
        return this.getRuleContext(0, ResourcesContext);
    };
    ResourceSpecificationContext.prototype.RPAREN = function () { return this.getToken(JavaParser.RPAREN, 0); };
    ResourceSpecificationContext.prototype.SEMI = function () { return this.tryGetToken(JavaParser.SEMI, 0); };
    Object.defineProperty(ResourceSpecificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_resourceSpecification; },
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
            return this.getTokens(JavaParser.SEMI);
        }
        else {
            return this.getToken(JavaParser.SEMI, i);
        }
    };
    Object.defineProperty(ResourcesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_resources; },
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
    ResourceContext.prototype.ASSIGN = function () { return this.getToken(JavaParser.ASSIGN, 0); };
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
        get: function () { return JavaParser.RULE_resource; },
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
var SwitchBlockStatementGroupContext = /** @class */ (function (_super) {
    __extends(SwitchBlockStatementGroupContext, _super);
    function SwitchBlockStatementGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchBlockStatementGroupContext.prototype.switchLabel = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        else {
            return this.getRuleContext(i, SwitchLabelContext);
        }
    };
    SwitchBlockStatementGroupContext.prototype.blockStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        else {
            return this.getRuleContext(i, BlockStatementContext);
        }
    };
    Object.defineProperty(SwitchBlockStatementGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_switchBlockStatementGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchBlockStatementGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchBlockStatementGroup) {
            listener.enterSwitchBlockStatementGroup(this);
        }
    };
    // @Override
    SwitchBlockStatementGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchBlockStatementGroup) {
            listener.exitSwitchBlockStatementGroup(this);
        }
    };
    // @Override
    SwitchBlockStatementGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchBlockStatementGroup) {
            return visitor.visitSwitchBlockStatementGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchBlockStatementGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchBlockStatementGroupContext = SwitchBlockStatementGroupContext;
var SwitchLabelContext = /** @class */ (function (_super) {
    __extends(SwitchLabelContext, _super);
    function SwitchLabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchLabelContext.prototype.CASE = function () { return this.tryGetToken(JavaParser.CASE, 0); };
    SwitchLabelContext.prototype.COLON = function () { return this.getToken(JavaParser.COLON, 0); };
    SwitchLabelContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    SwitchLabelContext.prototype.IDENTIFIER = function () { return this.tryGetToken(JavaParser.IDENTIFIER, 0); };
    SwitchLabelContext.prototype.DEFAULT = function () { return this.tryGetToken(JavaParser.DEFAULT, 0); };
    Object.defineProperty(SwitchLabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_switchLabel; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchLabelContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchLabel) {
            listener.enterSwitchLabel(this);
        }
    };
    // @Override
    SwitchLabelContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchLabel) {
            listener.exitSwitchLabel(this);
        }
    };
    // @Override
    SwitchLabelContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchLabel) {
            return visitor.visitSwitchLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchLabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchLabelContext = SwitchLabelContext;
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
            return this.getTokens(JavaParser.SEMI);
        }
        else {
            return this.getToken(JavaParser.SEMI, i);
        }
    };
    ForControlContext.prototype.forInit = function () {
        return this.tryGetRuleContext(0, ForInitContext);
    };
    ForControlContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ForControlContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ForControlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_forControl; },
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
        get: function () { return JavaParser.RULE_forInit; },
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
    EnhancedForControlContext.prototype.typeType = function () {
        return this.getRuleContext(0, TypeTypeContext);
    };
    EnhancedForControlContext.prototype.variableDeclaratorId = function () {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    };
    EnhancedForControlContext.prototype.COLON = function () { return this.getToken(JavaParser.COLON, 0); };
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
        get: function () { return JavaParser.RULE_enhancedForControl; },
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
var ParExpressionContext = /** @class */ (function (_super) {
    __extends(ParExpressionContext, _super);
    function ParExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParExpressionContext.prototype.LPAREN = function () { return this.getToken(JavaParser.LPAREN, 0); };
    ParExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ParExpressionContext.prototype.RPAREN = function () { return this.getToken(JavaParser.RPAREN, 0); };
    Object.defineProperty(ParExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_parExpression; },
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
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_expressionList; },
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
var MethodCallContext = /** @class */ (function (_super) {
    __extends(MethodCallContext, _super);
    function MethodCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodCallContext.prototype.IDENTIFIER = function () { return this.tryGetToken(JavaParser.IDENTIFIER, 0); };
    MethodCallContext.prototype.LPAREN = function () { return this.getToken(JavaParser.LPAREN, 0); };
    MethodCallContext.prototype.RPAREN = function () { return this.getToken(JavaParser.RPAREN, 0); };
    MethodCallContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    MethodCallContext.prototype.THIS = function () { return this.tryGetToken(JavaParser.THIS, 0); };
    MethodCallContext.prototype.SUPER = function () { return this.tryGetToken(JavaParser.SUPER, 0); };
    Object.defineProperty(MethodCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_methodCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodCallContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodCall) {
            listener.enterMethodCall(this);
        }
    };
    // @Override
    MethodCallContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodCall) {
            listener.exitMethodCall(this);
        }
    };
    // @Override
    MethodCallContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodCall) {
            return visitor.visitMethodCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodCallContext = MethodCallContext;
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
    ExpressionContext.prototype.DOT = function () { return this.tryGetToken(JavaParser.DOT, 0); };
    ExpressionContext.prototype.IDENTIFIER = function () { return this.tryGetToken(JavaParser.IDENTIFIER, 0); };
    ExpressionContext.prototype.methodCall = function () {
        return this.tryGetRuleContext(0, MethodCallContext);
    };
    ExpressionContext.prototype.THIS = function () { return this.tryGetToken(JavaParser.THIS, 0); };
    ExpressionContext.prototype.NEW = function () { return this.tryGetToken(JavaParser.NEW, 0); };
    ExpressionContext.prototype.innerCreator = function () {
        return this.tryGetRuleContext(0, InnerCreatorContext);
    };
    ExpressionContext.prototype.SUPER = function () { return this.tryGetToken(JavaParser.SUPER, 0); };
    ExpressionContext.prototype.superSuffix = function () {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    };
    ExpressionContext.prototype.explicitGenericInvocation = function () {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
    };
    ExpressionContext.prototype.nonWildcardTypeArguments = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    };
    ExpressionContext.prototype.LBRACK = function () { return this.tryGetToken(JavaParser.LBRACK, 0); };
    ExpressionContext.prototype.RBRACK = function () { return this.tryGetToken(JavaParser.RBRACK, 0); };
    ExpressionContext.prototype.creator = function () {
        return this.tryGetRuleContext(0, CreatorContext);
    };
    ExpressionContext.prototype.LPAREN = function () { return this.tryGetToken(JavaParser.LPAREN, 0); };
    ExpressionContext.prototype.typeType = function () {
        return this.tryGetRuleContext(0, TypeTypeContext);
    };
    ExpressionContext.prototype.RPAREN = function () { return this.tryGetToken(JavaParser.RPAREN, 0); };
    ExpressionContext.prototype.INC = function () { return this.tryGetToken(JavaParser.INC, 0); };
    ExpressionContext.prototype.DEC = function () { return this.tryGetToken(JavaParser.DEC, 0); };
    ExpressionContext.prototype.ADD = function () { return this.tryGetToken(JavaParser.ADD, 0); };
    ExpressionContext.prototype.SUB = function () { return this.tryGetToken(JavaParser.SUB, 0); };
    ExpressionContext.prototype.TILDE = function () { return this.tryGetToken(JavaParser.TILDE, 0); };
    ExpressionContext.prototype.BANG = function () { return this.tryGetToken(JavaParser.BANG, 0); };
    ExpressionContext.prototype.MUL = function () { return this.tryGetToken(JavaParser.MUL, 0); };
    ExpressionContext.prototype.DIV = function () { return this.tryGetToken(JavaParser.DIV, 0); };
    ExpressionContext.prototype.MOD = function () { return this.tryGetToken(JavaParser.MOD, 0); };
    ExpressionContext.prototype.LT = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LT);
        }
        else {
            return this.getToken(JavaParser.LT, i);
        }
    };
    ExpressionContext.prototype.GT = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.GT);
        }
        else {
            return this.getToken(JavaParser.GT, i);
        }
    };
    ExpressionContext.prototype.LE = function () { return this.tryGetToken(JavaParser.LE, 0); };
    ExpressionContext.prototype.GE = function () { return this.tryGetToken(JavaParser.GE, 0); };
    ExpressionContext.prototype.INSTANCEOF = function () { return this.tryGetToken(JavaParser.INSTANCEOF, 0); };
    ExpressionContext.prototype.EQUAL = function () { return this.tryGetToken(JavaParser.EQUAL, 0); };
    ExpressionContext.prototype.NOTEQUAL = function () { return this.tryGetToken(JavaParser.NOTEQUAL, 0); };
    ExpressionContext.prototype.BITAND = function () { return this.tryGetToken(JavaParser.BITAND, 0); };
    ExpressionContext.prototype.CARET = function () { return this.tryGetToken(JavaParser.CARET, 0); };
    ExpressionContext.prototype.BITOR = function () { return this.tryGetToken(JavaParser.BITOR, 0); };
    ExpressionContext.prototype.AND = function () { return this.tryGetToken(JavaParser.AND, 0); };
    ExpressionContext.prototype.OR = function () { return this.tryGetToken(JavaParser.OR, 0); };
    ExpressionContext.prototype.COLON = function () { return this.tryGetToken(JavaParser.COLON, 0); };
    ExpressionContext.prototype.QUESTION = function () { return this.tryGetToken(JavaParser.QUESTION, 0); };
    ExpressionContext.prototype.ASSIGN = function () { return this.tryGetToken(JavaParser.ASSIGN, 0); };
    ExpressionContext.prototype.ADD_ASSIGN = function () { return this.tryGetToken(JavaParser.ADD_ASSIGN, 0); };
    ExpressionContext.prototype.SUB_ASSIGN = function () { return this.tryGetToken(JavaParser.SUB_ASSIGN, 0); };
    ExpressionContext.prototype.MUL_ASSIGN = function () { return this.tryGetToken(JavaParser.MUL_ASSIGN, 0); };
    ExpressionContext.prototype.DIV_ASSIGN = function () { return this.tryGetToken(JavaParser.DIV_ASSIGN, 0); };
    ExpressionContext.prototype.AND_ASSIGN = function () { return this.tryGetToken(JavaParser.AND_ASSIGN, 0); };
    ExpressionContext.prototype.OR_ASSIGN = function () { return this.tryGetToken(JavaParser.OR_ASSIGN, 0); };
    ExpressionContext.prototype.XOR_ASSIGN = function () { return this.tryGetToken(JavaParser.XOR_ASSIGN, 0); };
    ExpressionContext.prototype.RSHIFT_ASSIGN = function () { return this.tryGetToken(JavaParser.RSHIFT_ASSIGN, 0); };
    ExpressionContext.prototype.URSHIFT_ASSIGN = function () { return this.tryGetToken(JavaParser.URSHIFT_ASSIGN, 0); };
    ExpressionContext.prototype.LSHIFT_ASSIGN = function () { return this.tryGetToken(JavaParser.LSHIFT_ASSIGN, 0); };
    ExpressionContext.prototype.MOD_ASSIGN = function () { return this.tryGetToken(JavaParser.MOD_ASSIGN, 0); };
    ExpressionContext.prototype.lambdaExpression = function () {
        return this.tryGetRuleContext(0, LambdaExpressionContext);
    };
    ExpressionContext.prototype.COLONCOLON = function () { return this.tryGetToken(JavaParser.COLONCOLON, 0); };
    ExpressionContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    ExpressionContext.prototype.classType = function () {
        return this.tryGetRuleContext(0, ClassTypeContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_expression; },
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
var LambdaExpressionContext = /** @class */ (function (_super) {
    __extends(LambdaExpressionContext, _super);
    function LambdaExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaExpressionContext.prototype.lambdaParameters = function () {
        return this.getRuleContext(0, LambdaParametersContext);
    };
    LambdaExpressionContext.prototype.ARROW = function () { return this.getToken(JavaParser.ARROW, 0); };
    LambdaExpressionContext.prototype.lambdaBody = function () {
        return this.getRuleContext(0, LambdaBodyContext);
    };
    Object.defineProperty(LambdaExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_lambdaExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaExpression) {
            listener.enterLambdaExpression(this);
        }
    };
    // @Override
    LambdaExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaExpression) {
            listener.exitLambdaExpression(this);
        }
    };
    // @Override
    LambdaExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaExpression) {
            return visitor.visitLambdaExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaExpressionContext = LambdaExpressionContext;
var LambdaParametersContext = /** @class */ (function (_super) {
    __extends(LambdaParametersContext, _super);
    function LambdaParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaParametersContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
        }
    };
    LambdaParametersContext.prototype.LPAREN = function () { return this.tryGetToken(JavaParser.LPAREN, 0); };
    LambdaParametersContext.prototype.RPAREN = function () { return this.tryGetToken(JavaParser.RPAREN, 0); };
    LambdaParametersContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    LambdaParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(LambdaParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_lambdaParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaParameters) {
            listener.enterLambdaParameters(this);
        }
    };
    // @Override
    LambdaParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaParameters) {
            listener.exitLambdaParameters(this);
        }
    };
    // @Override
    LambdaParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaParameters) {
            return visitor.visitLambdaParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaParametersContext = LambdaParametersContext;
var LambdaBodyContext = /** @class */ (function (_super) {
    __extends(LambdaBodyContext, _super);
    function LambdaBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaBodyContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    LambdaBodyContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(LambdaBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_lambdaBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaBody) {
            listener.enterLambdaBody(this);
        }
    };
    // @Override
    LambdaBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaBody) {
            listener.exitLambdaBody(this);
        }
    };
    // @Override
    LambdaBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaBody) {
            return visitor.visitLambdaBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaBodyContext = LambdaBodyContext;
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryContext.prototype.LPAREN = function () { return this.tryGetToken(JavaParser.LPAREN, 0); };
    PrimaryContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PrimaryContext.prototype.RPAREN = function () { return this.tryGetToken(JavaParser.RPAREN, 0); };
    PrimaryContext.prototype.THIS = function () { return this.tryGetToken(JavaParser.THIS, 0); };
    PrimaryContext.prototype.SUPER = function () { return this.tryGetToken(JavaParser.SUPER, 0); };
    PrimaryContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    PrimaryContext.prototype.IDENTIFIER = function () { return this.tryGetToken(JavaParser.IDENTIFIER, 0); };
    PrimaryContext.prototype.typeTypeOrVoid = function () {
        return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
    };
    PrimaryContext.prototype.DOT = function () { return this.tryGetToken(JavaParser.DOT, 0); };
    PrimaryContext.prototype.CLASS = function () { return this.tryGetToken(JavaParser.CLASS, 0); };
    PrimaryContext.prototype.nonWildcardTypeArguments = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    };
    PrimaryContext.prototype.explicitGenericInvocationSuffix = function () {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
    };
    PrimaryContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(PrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_primary; },
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
var ClassTypeContext = /** @class */ (function (_super) {
    __extends(ClassTypeContext, _super);
    function ClassTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassTypeContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    ClassTypeContext.prototype.classOrInterfaceType = function () {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    };
    ClassTypeContext.prototype.DOT = function () { return this.tryGetToken(JavaParser.DOT, 0); };
    ClassTypeContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    ClassTypeContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    Object.defineProperty(ClassTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_classType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterClassType) {
            listener.enterClassType(this);
        }
    };
    // @Override
    ClassTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitClassType) {
            listener.exitClassType(this);
        }
    };
    // @Override
    ClassTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitClassType) {
            return visitor.visitClassType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassTypeContext = ClassTypeContext;
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
    Object.defineProperty(CreatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_creator; },
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
    CreatedNameContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
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
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    };
    CreatedNameContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    Object.defineProperty(CreatedNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_createdName; },
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
    InnerCreatorContext.prototype.IDENTIFIER = function () { return this.getToken(JavaParser.IDENTIFIER, 0); };
    InnerCreatorContext.prototype.classCreatorRest = function () {
        return this.getRuleContext(0, ClassCreatorRestContext);
    };
    InnerCreatorContext.prototype.nonWildcardTypeArgumentsOrDiamond = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
    };
    Object.defineProperty(InnerCreatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_innerCreator; },
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
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    };
    ArrayCreatorRestContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
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
        get: function () { return JavaParser.RULE_arrayCreatorRest; },
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
        get: function () { return JavaParser.RULE_classCreatorRest; },
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
        get: function () { return JavaParser.RULE_explicitGenericInvocation; },
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
var TypeArgumentsOrDiamondContext = /** @class */ (function (_super) {
    __extends(TypeArgumentsOrDiamondContext, _super);
    function TypeArgumentsOrDiamondContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentsOrDiamondContext.prototype.LT = function () { return this.tryGetToken(JavaParser.LT, 0); };
    TypeArgumentsOrDiamondContext.prototype.GT = function () { return this.tryGetToken(JavaParser.GT, 0); };
    TypeArgumentsOrDiamondContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    Object.defineProperty(TypeArgumentsOrDiamondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeArgumentsOrDiamond; },
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
    NonWildcardTypeArgumentsOrDiamondContext.prototype.LT = function () { return this.tryGetToken(JavaParser.LT, 0); };
    NonWildcardTypeArgumentsOrDiamondContext.prototype.GT = function () { return this.tryGetToken(JavaParser.GT, 0); };
    NonWildcardTypeArgumentsOrDiamondContext.prototype.nonWildcardTypeArguments = function () {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    };
    Object.defineProperty(NonWildcardTypeArgumentsOrDiamondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; },
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
var NonWildcardTypeArgumentsContext = /** @class */ (function (_super) {
    __extends(NonWildcardTypeArgumentsContext, _super);
    function NonWildcardTypeArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NonWildcardTypeArgumentsContext.prototype.LT = function () { return this.getToken(JavaParser.LT, 0); };
    NonWildcardTypeArgumentsContext.prototype.typeList = function () {
        return this.getRuleContext(0, TypeListContext);
    };
    NonWildcardTypeArgumentsContext.prototype.GT = function () { return this.getToken(JavaParser.GT, 0); };
    Object.defineProperty(NonWildcardTypeArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_nonWildcardTypeArguments; },
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
var TypeListContext = /** @class */ (function (_super) {
    __extends(TypeListContext, _super);
    function TypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeListContext.prototype.typeType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    };
    TypeListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeList; },
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
var TypeTypeContext = /** @class */ (function (_super) {
    __extends(TypeTypeContext, _super);
    function TypeTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeTypeContext.prototype.classOrInterfaceType = function () {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    };
    TypeTypeContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    TypeTypeContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    TypeTypeContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    };
    TypeTypeContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    };
    Object.defineProperty(TypeTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeType) {
            listener.enterTypeType(this);
        }
    };
    // @Override
    TypeTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeType) {
            listener.exitTypeType(this);
        }
    };
    // @Override
    TypeTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeType) {
            return visitor.visitTypeType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeTypeContext = TypeTypeContext;
var PrimitiveTypeContext = /** @class */ (function (_super) {
    __extends(PrimitiveTypeContext, _super);
    function PrimitiveTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveTypeContext.prototype.BOOLEAN = function () { return this.tryGetToken(JavaParser.BOOLEAN, 0); };
    PrimitiveTypeContext.prototype.CHAR = function () { return this.tryGetToken(JavaParser.CHAR, 0); };
    PrimitiveTypeContext.prototype.BYTE = function () { return this.tryGetToken(JavaParser.BYTE, 0); };
    PrimitiveTypeContext.prototype.SHORT = function () { return this.tryGetToken(JavaParser.SHORT, 0); };
    PrimitiveTypeContext.prototype.INT = function () { return this.tryGetToken(JavaParser.INT, 0); };
    PrimitiveTypeContext.prototype.LONG = function () { return this.tryGetToken(JavaParser.LONG, 0); };
    PrimitiveTypeContext.prototype.FLOAT = function () { return this.tryGetToken(JavaParser.FLOAT, 0); };
    PrimitiveTypeContext.prototype.DOUBLE = function () { return this.tryGetToken(JavaParser.DOUBLE, 0); };
    Object.defineProperty(PrimitiveTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_primitiveType; },
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
    TypeArgumentsContext.prototype.LT = function () { return this.getToken(JavaParser.LT, 0); };
    TypeArgumentsContext.prototype.typeArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentContext);
        }
    };
    TypeArgumentsContext.prototype.GT = function () { return this.getToken(JavaParser.GT, 0); };
    TypeArgumentsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_typeArguments; },
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
var SuperSuffixContext = /** @class */ (function (_super) {
    __extends(SuperSuffixContext, _super);
    function SuperSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SuperSuffixContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    SuperSuffixContext.prototype.DOT = function () { return this.tryGetToken(JavaParser.DOT, 0); };
    SuperSuffixContext.prototype.IDENTIFIER = function () { return this.tryGetToken(JavaParser.IDENTIFIER, 0); };
    Object.defineProperty(SuperSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_superSuffix; },
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
    ExplicitGenericInvocationSuffixContext.prototype.SUPER = function () { return this.tryGetToken(JavaParser.SUPER, 0); };
    ExplicitGenericInvocationSuffixContext.prototype.superSuffix = function () {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    };
    ExplicitGenericInvocationSuffixContext.prototype.IDENTIFIER = function () { return this.tryGetToken(JavaParser.IDENTIFIER, 0); };
    ExplicitGenericInvocationSuffixContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(ExplicitGenericInvocationSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_explicitGenericInvocationSuffix; },
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
    ArgumentsContext.prototype.LPAREN = function () { return this.getToken(JavaParser.LPAREN, 0); };
    ArgumentsContext.prototype.RPAREN = function () { return this.getToken(JavaParser.RPAREN, 0); };
    ArgumentsContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaParser.RULE_arguments; },
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
