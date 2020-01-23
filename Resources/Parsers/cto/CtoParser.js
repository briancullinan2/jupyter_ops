"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cto/CtoParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var CtoParser = /** @class */ (function (_super) {
    __extends(CtoParser, _super);
    function CtoParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CtoParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CtoParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CtoParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtoParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "CtoParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtoParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CtoParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtoParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CtoParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    CtoParser.prototype.modelUnit = function () {
        var _localctx = new ModelUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CtoParser.RULE_modelUnit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.namespaceDeclaration();
                this.state = 86;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.IMPORT) {
                    {
                        {
                            this.state = 83;
                            this.importDeclaration();
                        }
                    }
                    this.state = 88;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 92;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CtoParser.ABSTRACT) | (1 << CtoParser.ASSET) | (1 << CtoParser.CONCEPT) | (1 << CtoParser.ENUM) | (1 << CtoParser.EVENT) | (1 << CtoParser.PARTICIPANT) | (1 << CtoParser.TRANSACTION))) !== 0) || _la === CtoParser.AT) {
                    {
                        {
                            this.state = 89;
                            this.typeDeclaration();
                        }
                    }
                    this.state = 94;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 95;
                this.match(CtoParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.namespaceDeclaration = function () {
        var _localctx = new NamespaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CtoParser.RULE_namespaceDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.match(CtoParser.NAMESPACE);
                this.state = 98;
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
    CtoParser.prototype.importDeclaration = function () {
        var _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CtoParser.RULE_importDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.match(CtoParser.IMPORT);
                this.state = 101;
                this.qualifiedName();
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CtoParser.DOT) {
                    {
                        this.state = 102;
                        this.match(CtoParser.DOT);
                        this.state = 103;
                        this.match(CtoParser.MUL);
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
    CtoParser.prototype.typeDeclaration = function () {
        var _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CtoParser.RULE_typeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 106;
                            this.assetDeclaration();
                        }
                        break;
                    case 2:
                        {
                            this.state = 107;
                            this.conceptDeclaration();
                        }
                        break;
                    case 3:
                        {
                            this.state = 108;
                            this.enumDeclaration();
                        }
                        break;
                    case 4:
                        {
                            this.state = 109;
                            this.participantDeclaration();
                        }
                        break;
                    case 5:
                        {
                            this.state = 110;
                            this.transactionDeclaration();
                        }
                        break;
                    case 6:
                        {
                            this.state = 111;
                            this.eventDeclaration();
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
    CtoParser.prototype.classModifier = function () {
        var _localctx = new ClassModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CtoParser.RULE_classModifier);
        try {
            this.state = 116;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CtoParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 114;
                        this.decorator();
                    }
                    break;
                case CtoParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 115;
                        this.match(CtoParser.ABSTRACT);
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
    CtoParser.prototype.assetDeclaration = function () {
        var _localctx = new AssetDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CtoParser.RULE_assetDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
                    {
                        {
                            this.state = 118;
                            this.classModifier();
                        }
                    }
                    this.state = 123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 124;
                this.match(CtoParser.ASSET);
                this.state = 125;
                this.match(CtoParser.IDENTIFIER);
                this.state = 126;
                this.extendsOrIdentified();
                this.state = 127;
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
    CtoParser.prototype.conceptDeclaration = function () {
        var _localctx = new ConceptDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CtoParser.RULE_conceptDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
                    {
                        {
                            this.state = 129;
                            this.classModifier();
                        }
                    }
                    this.state = 134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 135;
                this.match(CtoParser.CONCEPT);
                this.state = 136;
                this.match(CtoParser.IDENTIFIER);
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CtoParser.EXTENDS) {
                    {
                        this.state = 137;
                        this.match(CtoParser.EXTENDS);
                        this.state = 138;
                        this.match(CtoParser.IDENTIFIER);
                    }
                }
                this.state = 141;
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
    CtoParser.prototype.enumDeclaration = function () {
        var _localctx = new EnumDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CtoParser.RULE_enumDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(CtoParser.ENUM);
                this.state = 144;
                this.match(CtoParser.IDENTIFIER);
                this.state = 145;
                this.match(CtoParser.LBRACE);
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.VAR) {
                    {
                        {
                            this.state = 146;
                            this.enumConstant();
                        }
                    }
                    this.state = 151;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 152;
                this.match(CtoParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.enumConstant = function () {
        var _localctx = new EnumConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CtoParser.RULE_enumConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(CtoParser.VAR);
                this.state = 155;
                this.match(CtoParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.eventDeclaration = function () {
        var _localctx = new EventDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CtoParser.RULE_eventDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(CtoParser.EVENT);
                this.state = 158;
                this.match(CtoParser.IDENTIFIER);
                this.state = 159;
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
    CtoParser.prototype.participantDeclaration = function () {
        var _localctx = new ParticipantDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CtoParser.RULE_participantDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
                    {
                        {
                            this.state = 161;
                            this.classModifier();
                        }
                    }
                    this.state = 166;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 167;
                this.match(CtoParser.PARTICIPANT);
                this.state = 168;
                this.match(CtoParser.IDENTIFIER);
                this.state = 169;
                this.extendsOrIdentified();
                this.state = 170;
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
    CtoParser.prototype.transactionDeclaration = function () {
        var _localctx = new TransactionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CtoParser.RULE_transactionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
                    {
                        {
                            this.state = 172;
                            this.classModifier();
                        }
                    }
                    this.state = 177;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 178;
                this.match(CtoParser.TRANSACTION);
                this.state = 179;
                this.match(CtoParser.IDENTIFIER);
                this.state = 180;
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
    CtoParser.prototype.extendsOrIdentified = function () {
        var _localctx = new ExtendsOrIdentifiedContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CtoParser.RULE_extendsOrIdentified);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CtoParser.EXTENDS:
                        {
                            {
                                this.state = 182;
                                this.match(CtoParser.EXTENDS);
                                this.state = 183;
                                this.match(CtoParser.IDENTIFIER);
                            }
                        }
                        break;
                    case CtoParser.IDENTIFIED:
                        {
                            this.state = 184;
                            this.identified();
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
    CtoParser.prototype.identified = function () {
        var _localctx = new IdentifiedContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CtoParser.RULE_identified);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 187;
                    this.match(CtoParser.IDENTIFIED);
                    this.state = 188;
                    this.match(CtoParser.IDENTIFIER);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.classBody = function () {
        var _localctx = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CtoParser.RULE_classBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 190;
                this.match(CtoParser.LBRACE);
                this.state = 194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (CtoParser.SEMI - 28)) | (1 << (CtoParser.REF - 28)) | (1 << (CtoParser.VAR - 28)))) !== 0)) {
                    {
                        {
                            this.state = 191;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 196;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 197;
                this.match(CtoParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.classBodyDeclaration = function () {
        var _localctx = new ClassBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CtoParser.RULE_classBodyDeclaration);
        try {
            this.state = 201;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CtoParser.SEMI:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 199;
                        this.match(CtoParser.SEMI);
                    }
                    break;
                case CtoParser.REF:
                case CtoParser.VAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 200;
                        this.fieldDeclaration();
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
    CtoParser.prototype.fieldDeclaration = function () {
        var _localctx = new FieldDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CtoParser.RULE_fieldDeclaration);
        var _la;
        try {
            this.state = 247;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 203;
                        this.stringField();
                        this.state = 204;
                        this.identifier();
                        this.state = 206;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.DEFAULT) {
                            {
                                this.state = 205;
                                this.defaultString();
                            }
                        }
                        this.state = 209;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.REGEX) {
                            {
                                this.state = 208;
                                this.regexDeclaration();
                            }
                        }
                        this.state = 212;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.OPTIONAL) {
                            {
                                this.state = 211;
                                this.match(CtoParser.OPTIONAL);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 214;
                        this.booleanField();
                        this.state = 215;
                        this.identifier();
                        this.state = 217;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.DEFAULT) {
                            {
                                this.state = 216;
                                this.defaultBoolean();
                            }
                        }
                        this.state = 220;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.OPTIONAL) {
                            {
                                this.state = 219;
                                this.match(CtoParser.OPTIONAL);
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 222;
                        this.numericField();
                        this.state = 223;
                        this.identifier();
                        this.state = 225;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.DEFAULT) {
                            {
                                this.state = 224;
                                this.defaultNumber();
                            }
                        }
                        this.state = 228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.RANGE) {
                            {
                                this.state = 227;
                                this.rangeValidation();
                            }
                        }
                        this.state = 231;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.OPTIONAL) {
                            {
                                this.state = 230;
                                this.match(CtoParser.OPTIONAL);
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 233;
                        this.dateField();
                        this.state = 234;
                        this.identifier();
                        this.state = 236;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.DEFAULT) {
                            {
                                this.state = 235;
                                this.defaultDate();
                            }
                        }
                        this.state = 239;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CtoParser.OPTIONAL) {
                            {
                                this.state = 238;
                                this.match(CtoParser.OPTIONAL);
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 241;
                        this.identifierField();
                        this.state = 242;
                        this.identifier();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 244;
                        this.reference();
                        this.state = 245;
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
    CtoParser.prototype.identifierField = function () {
        var _localctx = new IdentifierFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CtoParser.RULE_identifierField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                this.match(CtoParser.VAR);
                this.state = 250;
                this.match(CtoParser.IDENTIFIER);
                this.state = 254;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.LBRACK) {
                    {
                        {
                            this.state = 251;
                            this.square();
                        }
                    }
                    this.state = 256;
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
    CtoParser.prototype.numericField = function () {
        var _localctx = new NumericFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CtoParser.RULE_numericField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(CtoParser.VAR);
                this.state = 258;
                this.numericPrimitive();
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.LBRACK) {
                    {
                        {
                            this.state = 259;
                            this.square();
                        }
                    }
                    this.state = 264;
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
    CtoParser.prototype.numericPrimitive = function () {
        var _localctx = new NumericPrimitiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CtoParser.RULE_numericPrimitive);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CtoParser.DOUBLE) | (1 << CtoParser.INTEGER) | (1 << CtoParser.LONG))) !== 0))) {
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
    CtoParser.prototype.booleanField = function () {
        var _localctx = new BooleanFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CtoParser.RULE_booleanField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 267;
                this.match(CtoParser.VAR);
                this.state = 268;
                this.match(CtoParser.BOOLEAN);
                this.state = 272;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.LBRACK) {
                    {
                        {
                            this.state = 269;
                            this.square();
                        }
                    }
                    this.state = 274;
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
    CtoParser.prototype.dateField = function () {
        var _localctx = new DateFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CtoParser.RULE_dateField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.match(CtoParser.VAR);
                this.state = 276;
                this.match(CtoParser.DATE_TIME);
                this.state = 280;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.LBRACK) {
                    {
                        {
                            this.state = 277;
                            this.square();
                        }
                    }
                    this.state = 282;
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
    CtoParser.prototype.defaultDate = function () {
        var _localctx = new DefaultDateContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CtoParser.RULE_defaultDate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.match(CtoParser.DEFAULT);
                this.state = 284;
                this.match(CtoParser.ASSIGN);
                this.state = 285;
                this.match(CtoParser.DATE_TIME_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.regexDeclaration = function () {
        var _localctx = new RegexDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CtoParser.RULE_regexDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.match(CtoParser.REGEX);
                this.state = 288;
                this.match(CtoParser.ASSIGN);
                this.state = 289;
                this.match(CtoParser.REGEX_EXPR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.stringField = function () {
        var _localctx = new StringFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CtoParser.RULE_stringField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.match(CtoParser.VAR);
                this.state = 292;
                this.match(CtoParser.STRING);
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.LBRACK) {
                    {
                        {
                            this.state = 293;
                            this.square();
                        }
                    }
                    this.state = 298;
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
    CtoParser.prototype.reference = function () {
        var _localctx = new ReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CtoParser.RULE_reference);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.match(CtoParser.REF);
                this.state = 300;
                this.match(CtoParser.IDENTIFIER);
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.LBRACK) {
                    {
                        {
                            this.state = 301;
                            this.square();
                        }
                    }
                    this.state = 306;
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
    CtoParser.prototype.qualifiedName = function () {
        var _localctx = new QualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, CtoParser.RULE_qualifiedName);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(CtoParser.IDENTIFIER);
                this.state = 312;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 308;
                                this.match(CtoParser.DOT);
                                this.state = 309;
                                this.match(CtoParser.IDENTIFIER);
                            }
                        }
                    }
                    this.state = 314;
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
    CtoParser.prototype.rangeValidation = function () {
        var _localctx = new RangeValidationContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CtoParser.RULE_rangeValidation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 315;
                this.match(CtoParser.RANGE);
                this.state = 316;
                this.match(CtoParser.ASSIGN);
                this.state = 317;
                this.rangeDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.rangeDeclaration = function () {
        var _localctx = new RangeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, CtoParser.RULE_rangeDeclaration);
        try {
            this.state = 335;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 319;
                            this.match(CtoParser.LBRACK);
                            this.state = 320;
                            this.numberLiteral();
                            this.state = 321;
                            this.match(CtoParser.COMMA);
                            this.state = 322;
                            this.match(CtoParser.RBRACK);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 324;
                            this.match(CtoParser.LBRACK);
                            this.state = 325;
                            this.match(CtoParser.COMMA);
                            this.state = 326;
                            this.numberLiteral();
                            this.state = 327;
                            this.match(CtoParser.RBRACK);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 329;
                            this.match(CtoParser.LBRACK);
                            this.state = 330;
                            this.numberLiteral();
                            this.state = 331;
                            this.match(CtoParser.COMMA);
                            this.state = 332;
                            this.numberLiteral();
                            this.state = 333;
                            this.match(CtoParser.RBRACK);
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
    CtoParser.prototype.defaultBoolean = function () {
        var _localctx = new DefaultBooleanContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, CtoParser.RULE_defaultBoolean);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 337;
                    this.match(CtoParser.DEFAULT);
                    this.state = 338;
                    this.match(CtoParser.ASSIGN);
                    this.state = 339;
                    this.match(CtoParser.BOOL_LITERAL);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.defaultString = function () {
        var _localctx = new DefaultStringContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CtoParser.RULE_defaultString);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 341;
                    this.match(CtoParser.DEFAULT);
                    this.state = 342;
                    this.match(CtoParser.ASSIGN);
                    this.state = 343;
                    this.stringLiteral();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.defaultNumber = function () {
        var _localctx = new DefaultNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, CtoParser.RULE_defaultNumber);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 345;
                    this.match(CtoParser.DEFAULT);
                    this.state = 346;
                    this.match(CtoParser.ASSIGN);
                    this.state = 347;
                    this.numberLiteral();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, CtoParser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 349;
                _la = this._input.LA(1);
                if (!(_la === CtoParser.ASSET || _la === CtoParser.PARTICIPANT || _la === CtoParser.IDENTIFIER)) {
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
    CtoParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, CtoParser.RULE_literal);
        try {
            this.state = 354;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CtoParser.DECIMAL_LITERAL:
                case CtoParser.OCT_LITERAL:
                case CtoParser.FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 351;
                        this.numberLiteral();
                    }
                    break;
                case CtoParser.CHAR_LITERAL:
                case CtoParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 352;
                        this.stringLiteral();
                    }
                    break;
                case CtoParser.BOOL_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 353;
                        this.match(CtoParser.BOOL_LITERAL);
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
    CtoParser.prototype.numberLiteral = function () {
        var _localctx = new NumberLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, CtoParser.RULE_numberLiteral);
        try {
            this.state = 358;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CtoParser.DECIMAL_LITERAL:
                case CtoParser.OCT_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 356;
                        this.integerLiteral();
                    }
                    break;
                case CtoParser.FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 357;
                        this.floatLiteral();
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
    CtoParser.prototype.stringLiteral = function () {
        var _localctx = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, CtoParser.RULE_stringLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                _la = this._input.LA(1);
                if (!(_la === CtoParser.CHAR_LITERAL || _la === CtoParser.STRING_LITERAL)) {
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
    CtoParser.prototype.integerLiteral = function () {
        var _localctx = new IntegerLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, CtoParser.RULE_integerLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                _la = this._input.LA(1);
                if (!(_la === CtoParser.DECIMAL_LITERAL || _la === CtoParser.OCT_LITERAL)) {
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
    CtoParser.prototype.floatLiteral = function () {
        var _localctx = new FloatLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, CtoParser.RULE_floatLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                this.match(CtoParser.FLOAT_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CtoParser.prototype.decorator = function () {
        var _localctx = new DecoratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, CtoParser.RULE_decorator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.match(CtoParser.AT);
                this.state = 367;
                this.qualifiedName();
                this.state = 372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CtoParser.LPAREN) {
                    {
                        this.state = 368;
                        this.match(CtoParser.LPAREN);
                        this.state = 369;
                        this.elementValuePair();
                        this.state = 370;
                        this.match(CtoParser.RPAREN);
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
    CtoParser.prototype.elementValuePair = function () {
        var _localctx = new ElementValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, CtoParser.RULE_elementValuePair);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.literal();
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CtoParser.COMMA) {
                    {
                        {
                            this.state = 375;
                            this.match(CtoParser.COMMA);
                            this.state = 376;
                            this.literal();
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
    CtoParser.prototype.square = function () {
        var _localctx = new SquareContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, CtoParser.RULE_square);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
                this.match(CtoParser.LBRACK);
                this.state = 383;
                this.match(CtoParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(CtoParser, "_ATN", {
        get: function () {
            if (!CtoParser.__ATN) {
                CtoParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CtoParser._serializedATN));
            }
            return CtoParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    CtoParser.ABSTRACT = 1;
    CtoParser.ASSET = 2;
    CtoParser.CONCEPT = 3;
    CtoParser.DEFAULT = 4;
    CtoParser.ENUM = 5;
    CtoParser.EVENT = 6;
    CtoParser.EXTENDS = 7;
    CtoParser.IDENTIFIED = 8;
    CtoParser.IMPORT = 9;
    CtoParser.NAMESPACE = 10;
    CtoParser.OPTIONAL = 11;
    CtoParser.PARTICIPANT = 12;
    CtoParser.RANGE = 13;
    CtoParser.REGEX = 14;
    CtoParser.TRANSACTION = 15;
    CtoParser.BOOLEAN = 16;
    CtoParser.DATE_TIME = 17;
    CtoParser.DOUBLE = 18;
    CtoParser.INTEGER = 19;
    CtoParser.LONG = 20;
    CtoParser.STRING = 21;
    CtoParser.LPAREN = 22;
    CtoParser.RPAREN = 23;
    CtoParser.LBRACE = 24;
    CtoParser.RBRACE = 25;
    CtoParser.LBRACK = 26;
    CtoParser.RBRACK = 27;
    CtoParser.SEMI = 28;
    CtoParser.COMMA = 29;
    CtoParser.DOT = 30;
    CtoParser.COLON = 31;
    CtoParser.ASSIGN = 32;
    CtoParser.MUL = 33;
    CtoParser.AT = 34;
    CtoParser.ELLIPSIS = 35;
    CtoParser.REF = 36;
    CtoParser.VAR = 37;
    CtoParser.DECIMAL_LITERAL = 38;
    CtoParser.OCT_LITERAL = 39;
    CtoParser.FLOAT_LITERAL = 40;
    CtoParser.BOOL_LITERAL = 41;
    CtoParser.DATE_TIME_LITERAL = 42;
    CtoParser.WS = 43;
    CtoParser.LINE_COMMENT = 44;
    CtoParser.COMMENT = 45;
    CtoParser.REGEX_EXPR = 46;
    CtoParser.IDENTIFIER = 47;
    CtoParser.CHAR_LITERAL = 48;
    CtoParser.STRING_LITERAL = 49;
    CtoParser.RULE_modelUnit = 0;
    CtoParser.RULE_namespaceDeclaration = 1;
    CtoParser.RULE_importDeclaration = 2;
    CtoParser.RULE_typeDeclaration = 3;
    CtoParser.RULE_classModifier = 4;
    CtoParser.RULE_assetDeclaration = 5;
    CtoParser.RULE_conceptDeclaration = 6;
    CtoParser.RULE_enumDeclaration = 7;
    CtoParser.RULE_enumConstant = 8;
    CtoParser.RULE_eventDeclaration = 9;
    CtoParser.RULE_participantDeclaration = 10;
    CtoParser.RULE_transactionDeclaration = 11;
    CtoParser.RULE_extendsOrIdentified = 12;
    CtoParser.RULE_identified = 13;
    CtoParser.RULE_classBody = 14;
    CtoParser.RULE_classBodyDeclaration = 15;
    CtoParser.RULE_fieldDeclaration = 16;
    CtoParser.RULE_identifierField = 17;
    CtoParser.RULE_numericField = 18;
    CtoParser.RULE_numericPrimitive = 19;
    CtoParser.RULE_booleanField = 20;
    CtoParser.RULE_dateField = 21;
    CtoParser.RULE_defaultDate = 22;
    CtoParser.RULE_regexDeclaration = 23;
    CtoParser.RULE_stringField = 24;
    CtoParser.RULE_reference = 25;
    CtoParser.RULE_qualifiedName = 26;
    CtoParser.RULE_rangeValidation = 27;
    CtoParser.RULE_rangeDeclaration = 28;
    CtoParser.RULE_defaultBoolean = 29;
    CtoParser.RULE_defaultString = 30;
    CtoParser.RULE_defaultNumber = 31;
    CtoParser.RULE_identifier = 32;
    CtoParser.RULE_literal = 33;
    CtoParser.RULE_numberLiteral = 34;
    CtoParser.RULE_stringLiteral = 35;
    CtoParser.RULE_integerLiteral = 36;
    CtoParser.RULE_floatLiteral = 37;
    CtoParser.RULE_decorator = 38;
    CtoParser.RULE_elementValuePair = 39;
    CtoParser.RULE_square = 40;
    // tslint:disable:no-trailing-whitespace
    CtoParser.ruleNames = [
        "modelUnit", "namespaceDeclaration", "importDeclaration", "typeDeclaration",
        "classModifier", "assetDeclaration", "conceptDeclaration", "enumDeclaration",
        "enumConstant", "eventDeclaration", "participantDeclaration", "transactionDeclaration",
        "extendsOrIdentified", "identified", "classBody", "classBodyDeclaration",
        "fieldDeclaration", "identifierField", "numericField", "numericPrimitive",
        "booleanField", "dateField", "defaultDate", "regexDeclaration", "stringField",
        "reference", "qualifiedName", "rangeValidation", "rangeDeclaration", "defaultBoolean",
        "defaultString", "defaultNumber", "identifier", "literal", "numberLiteral",
        "stringLiteral", "integerLiteral", "floatLiteral", "decorator", "elementValuePair",
        "square",
    ];
    CtoParser._LITERAL_NAMES = [
        undefined, "'abstract'", "'asset'", "'concept'", "'default'", "'enum'",
        "'event'", "'extends'", "'identified by'", "'import'", "'namespace'",
        "'optional'", "'participant'", "'range'", "'regex'", "'transaction'",
        "'Boolean'", "'DateTime'", "'Double'", "'Integer'", "'Long'", "'String'",
        "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "':'",
        "'='", "'*'", "'@'", "'...'", "'--> '", "'o '",
    ];
    CtoParser._SYMBOLIC_NAMES = [
        undefined, "ABSTRACT", "ASSET", "CONCEPT", "DEFAULT", "ENUM", "EVENT",
        "EXTENDS", "IDENTIFIED", "IMPORT", "NAMESPACE", "OPTIONAL", "PARTICIPANT",
        "RANGE", "REGEX", "TRANSACTION", "BOOLEAN", "DATE_TIME", "DOUBLE", "INTEGER",
        "LONG", "STRING", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK",
        "SEMI", "COMMA", "DOT", "COLON", "ASSIGN", "MUL", "AT", "ELLIPSIS", "REF",
        "VAR", "DECIMAL_LITERAL", "OCT_LITERAL", "FLOAT_LITERAL", "BOOL_LITERAL",
        "DATE_TIME_LITERAL", "WS", "LINE_COMMENT", "COMMENT", "REGEX_EXPR", "IDENTIFIER",
        "CHAR_LITERAL", "STRING_LITERAL",
    ];
    CtoParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CtoParser._LITERAL_NAMES, CtoParser._SYMBOLIC_NAMES, []);
    CtoParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\u0184\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
        "\x03\x02\x07\x02W\n\x02\f\x02\x0E\x02Z\v\x02\x03\x02\x07\x02]\n\x02\f" +
        "\x02\x0E\x02`\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x05\x04k\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x05\x05s\n\x05\x03\x06\x03\x06\x05\x06w\n\x06\x03\x07\x07" +
        "\x07z\n\x07\f\x07\x0E\x07}\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\b\x07\b\x85\n\b\f\b\x0E\b\x88\v\b\x03\b\x03\b\x03\b\x03\b\x05\b\x8E" +
        "\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x07\t\x96\n\t\f\t\x0E\t\x99\v" +
        "\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x07\f\xA5" +
        "\n\f\f\f\x0E\f\xA8\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x07\r\xB0\n" +
        "\r\f\r\x0E\r\xB3\v\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05" +
        "\x0E\xBC\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x07\x10\xC3\n\x10" +
        "\f\x10\x0E\x10\xC6\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\xCC\n" +
        "\x11\x03\x12\x03\x12\x03\x12\x05\x12\xD1\n\x12\x03\x12\x05\x12\xD4\n\x12" +
        "\x03\x12\x05\x12\xD7\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\xDC\n\x12\x03" +
        "\x12\x05\x12\xDF\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\xE4\n\x12\x03\x12" +
        "\x05\x12\xE7\n\x12\x03\x12\x05\x12\xEA\n\x12\x03\x12\x03\x12\x03\x12\x05" +
        "\x12\xEF\n\x12\x03\x12\x05\x12\xF2\n\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x05\x12\xFA\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\xFF" +
        "\n\x13\f\x13\x0E\x13\u0102\v\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0107" +
        "\n\x14\f\x14\x0E\x14\u010A\v\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
        "\x07\x16\u0111\n\x16\f\x16\x0E\x16\u0114\v\x16\x03\x17\x03\x17\x03\x17" +
        "\x07\x17\u0119\n\x17\f\x17\x0E\x17\u011C\v\x17\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
        "\u0129\n\x1A\f\x1A\x0E\x1A\u012C\v\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
        "\u0131\n\x1B\f\x1B\x0E\x1B\u0134\v\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C" +
        "\u0139\n\x1C\f\x1C\x0E\x1C\u013C\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0152" +
        "\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03" +
        "!\x03!\x03\"\x03\"\x03#\x03#\x03#\x05#\u0165\n#\x03$\x03$\x05$\u0169\n" +
        "$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0177" +
        "\n(\x03)\x03)\x03)\x07)\u017C\n)\f)\x0E)\u017F\v)\x03*\x03*\x03*\x03*" +
        "\x02\x02\x02+\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02\x02\x06\x03\x02\x14\x16" +
        "\x05\x02\x04\x04\x0E\x0E11\x03\x0223\x03\x02()\x02\u0189\x02T\x03\x02" +
        "\x02\x02\x04c\x03\x02\x02\x02\x06f\x03\x02\x02\x02\br\x03\x02\x02\x02" +
        "\nv\x03\x02\x02\x02\f{\x03\x02\x02\x02\x0E\x86\x03\x02\x02\x02\x10\x91" +
        "\x03\x02\x02\x02\x12\x9C\x03\x02\x02\x02\x14\x9F\x03\x02\x02\x02\x16\xA6" +
        "\x03\x02\x02\x02\x18\xB1\x03\x02\x02\x02\x1A\xBB\x03\x02\x02\x02\x1C\xBD" +
        "\x03\x02\x02\x02\x1E\xC0\x03\x02\x02\x02 \xCB\x03\x02\x02\x02\"\xF9\x03" +
        "\x02\x02\x02$\xFB\x03\x02\x02\x02&\u0103\x03\x02\x02\x02(\u010B\x03\x02" +
        "\x02\x02*\u010D\x03\x02\x02\x02,\u0115\x03\x02\x02\x02.\u011D\x03\x02" +
        "\x02\x020\u0121\x03\x02\x02\x022\u0125\x03\x02\x02\x024\u012D\x03\x02" +
        "\x02\x026\u0135\x03\x02\x02\x028\u013D\x03\x02\x02\x02:\u0151\x03\x02" +
        "\x02\x02<\u0153\x03\x02\x02\x02>\u0157\x03\x02\x02\x02@\u015B\x03\x02" +
        "\x02\x02B\u015F\x03\x02\x02\x02D\u0164\x03\x02\x02\x02F\u0168\x03\x02" +
        "\x02\x02H\u016A\x03\x02\x02\x02J\u016C\x03\x02\x02\x02L\u016E\x03\x02" +
        "\x02\x02N\u0170\x03\x02\x02\x02P\u0178\x03\x02\x02\x02R\u0180\x03\x02" +
        "\x02\x02TX\x05\x04\x03\x02UW\x05\x06\x04\x02VU\x03\x02\x02\x02WZ\x03\x02" +
        "\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y^\x03\x02\x02\x02ZX\x03\x02" +
        "\x02\x02[]\x05\b\x05\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02" +
        "\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07\x02" +
        "\x02\x03b\x03\x03\x02\x02\x02cd\x07\f\x02\x02de\x056\x1C\x02e\x05\x03" +
        "\x02\x02\x02fg\x07\v\x02\x02gj\x056\x1C\x02hi\x07 \x02\x02ik\x07#\x02" +
        "\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\x07\x03\x02\x02\x02ls\x05\f" +
        "\x07\x02ms\x05\x0E\b\x02ns\x05\x10\t\x02os\x05\x16\f\x02ps\x05\x18\r\x02" +
        "qs\x05\x14\v\x02rl\x03\x02\x02\x02rm\x03\x02\x02\x02rn\x03\x02\x02\x02" +
        "ro\x03\x02\x02\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\t\x03\x02\x02" +
        "\x02tw\x05N(\x02uw\x07\x03\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02\x02" +
        "w\v\x03\x02\x02\x02xz\x05\n\x06\x02yx\x03\x02\x02\x02z}\x03\x02\x02\x02" +
        "{y\x03\x02\x02\x02{|\x03\x02\x02\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02" +
        "~\x7F\x07\x04\x02\x02\x7F\x80\x071\x02\x02\x80\x81\x05\x1A\x0E\x02\x81" +
        "\x82\x05\x1E\x10\x02\x82\r\x03\x02\x02\x02\x83\x85\x05\n\x06\x02\x84\x83" +
        "\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87" +
        "\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A" +
        "\x07\x05\x02\x02\x8A\x8D\x071\x02\x02\x8B\x8C\x07\t\x02\x02\x8C\x8E\x07" +
        "1\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03" +
        "\x02\x02\x02\x8F\x90\x05\x1E\x10\x02\x90\x0F\x03\x02\x02\x02\x91\x92\x07" +
        "\x07\x02\x02\x92\x93\x071\x02\x02\x93\x97\x07\x1A\x02\x02\x94\x96\x05" +
        "\x12\n\x02\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03" +
        "\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x97\x03" +
        "\x02\x02\x02\x9A\x9B\x07\x1B\x02\x02\x9B\x11\x03\x02\x02\x02\x9C\x9D\x07" +
        "\'\x02\x02\x9D\x9E\x071\x02\x02\x9E\x13\x03\x02\x02\x02\x9F\xA0\x07\b" +
        "\x02\x02\xA0\xA1\x071\x02\x02\xA1\xA2\x05\x1E\x10\x02\xA2\x15\x03\x02" +
        "\x02\x02\xA3\xA5\x05\n\x06\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02" +
        "\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02" +
        "\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x07\x0E\x02\x02\xAA\xAB\x071" +
        "\x02\x02\xAB\xAC\x05\x1A\x0E\x02\xAC\xAD\x05\x1E\x10\x02\xAD\x17\x03\x02" +
        "\x02\x02\xAE\xB0\x05\n\x06\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02" +
        "\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02" +
        "\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x07\x11\x02\x02\xB5\xB6\x071" +
        "\x02\x02\xB6\xB7\x05\x1E\x10\x02\xB7\x19\x03\x02\x02\x02\xB8\xB9\x07\t" +
        "\x02\x02\xB9\xBC\x071\x02\x02\xBA\xBC\x05\x1C\x0F\x02\xBB\xB8\x03\x02" +
        "\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\x1B\x03\x02\x02\x02\xBD\xBE\x07\n" +
        "\x02\x02\xBE\xBF\x071\x02\x02\xBF\x1D\x03\x02\x02\x02\xC0\xC4\x07\x1A" +
        "\x02\x02\xC1\xC3\x05 \x11\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02" +
        "\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02" +
        "\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC8\x07\x1B\x02\x02\xC8\x1F\x03\x02" +
        "\x02\x02\xC9\xCC\x07\x1E\x02\x02\xCA\xCC\x05\"\x12\x02\xCB\xC9\x03\x02" +
        "\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC!\x03\x02\x02\x02\xCD\xCE\x052\x1A" +
        "\x02\xCE\xD0\x05B\"\x02\xCF\xD1\x05> \x02\xD0\xCF\x03\x02\x02\x02\xD0" +
        "\xD1\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xD4\x050\x19\x02\xD3" +
        "\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5" +
        "\xD7\x07\r\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7" +
        "\xFA\x03\x02\x02\x02\xD8\xD9\x05*\x16\x02\xD9\xDB\x05B\"\x02\xDA\xDC\x05" +
        "<\x1F\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03" +
        "\x02\x02\x02\xDD\xDF\x07\r\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03" +
        "\x02\x02\x02\xDF\xFA\x03\x02\x02\x02\xE0\xE1\x05&\x14\x02\xE1\xE3\x05" +
        "B\"\x02\xE2\xE4\x05@!\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
        "\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE7\x058\x1D\x02\xE6\xE5\x03\x02\x02" +
        "\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xEA\x07\r\x02" +
        "\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xFA\x03\x02\x02" +
        "\x02\xEB\xEC\x05,\x17\x02\xEC\xEE\x05B\"\x02\xED\xEF\x05.\x18\x02\xEE" +
        "\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0" +
        "\xF2\x07\r\x02\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2" +
        "\xFA\x03\x02\x02\x02\xF3\xF4\x05$\x13\x02\xF4\xF5\x05B\"\x02\xF5\xFA\x03" +
        "\x02\x02\x02\xF6\xF7\x054\x1B\x02\xF7\xF8\x05B\"\x02\xF8\xFA\x03\x02\x02" +
        "\x02\xF9\xCD\x03\x02\x02\x02\xF9\xD8\x03\x02\x02\x02\xF9\xE0\x03\x02\x02" +
        "\x02\xF9\xEB\x03\x02\x02\x02\xF9\xF3\x03\x02\x02\x02\xF9\xF6\x03\x02\x02" +
        "\x02\xFA#\x03\x02\x02\x02\xFB\xFC\x07\'\x02\x02\xFC\u0100\x071\x02\x02" +
        "\xFD\xFF\x05R*\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100" +
        "\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101%\x03\x02\x02\x02" +
        "\u0102\u0100\x03\x02\x02\x02\u0103\u0104\x07\'\x02\x02\u0104\u0108\x05" +
        "(\x15\x02\u0105\u0107\x05R*\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A" +
        "\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02" +
        "\u0109\'\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010C\t\x02" +
        "\x02\x02\u010C)\x03\x02\x02\x02\u010D\u010E\x07\'\x02\x02\u010E\u0112" +
        "\x07\x12\x02\x02\u010F\u0111\x05R*\x02\u0110\u010F\x03\x02\x02\x02\u0111" +
        "\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02" +
        "\x02\x02\u0113+\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0116" +
        "\x07\'\x02\x02\u0116\u011A\x07\x13\x02\x02\u0117\u0119\x05R*\x02\u0118" +
        "\u0117\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02" +
        "\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B-\x03\x02\x02\x02\u011C\u011A" +
        "\x03\x02\x02\x02\u011D\u011E\x07\x06\x02\x02\u011E\u011F\x07\"\x02\x02" +
        "\u011F\u0120\x07,\x02\x02\u0120/\x03\x02\x02\x02\u0121\u0122\x07\x10\x02" +
        "\x02\u0122\u0123\x07\"\x02\x02\u0123\u0124\x070\x02\x02\u01241\x03\x02" +
        "\x02\x02\u0125\u0126\x07\'\x02\x02\u0126\u012A\x07\x17\x02\x02\u0127\u0129" +
        "\x05R*\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A" +
        "\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B3\x03\x02\x02" +
        "\x02\u012C\u012A\x03\x02\x02\x02\u012D\u012E\x07&\x02\x02\u012E\u0132" +
        "\x071\x02\x02\u012F\u0131\x05R*\x02\u0130\u012F\x03\x02\x02\x02\u0131" +
        "\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
        "\x02\x02\u01335\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u013A" +
        "\x071\x02\x02\u0136\u0137\x07 \x02\x02\u0137\u0139\x071\x02\x02\u0138" +
        "\u0136\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02" +
        "\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B7\x03\x02\x02\x02\u013C\u013A" +
        "\x03\x02\x02\x02\u013D\u013E\x07\x0F\x02\x02\u013E\u013F\x07\"\x02\x02" +
        "\u013F\u0140\x05:\x1E\x02\u01409\x03\x02\x02\x02\u0141\u0142\x07\x1C\x02" +
        "\x02\u0142\u0143\x05F$\x02\u0143\u0144\x07\x1F\x02\x02\u0144\u0145\x07" +
        "\x1D\x02\x02\u0145\u0152\x03\x02\x02\x02\u0146\u0147\x07\x1C\x02\x02\u0147" +
        "\u0148\x07\x1F\x02\x02\u0148\u0149\x05F$\x02\u0149\u014A\x07\x1D\x02\x02" +
        "\u014A\u0152\x03\x02\x02\x02\u014B\u014C\x07\x1C\x02\x02\u014C\u014D\x05" +
        "F$\x02\u014D\u014E\x07\x1F\x02\x02\u014E\u014F\x05F$\x02\u014F\u0150\x07" +
        "\x1D\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0141\x03\x02\x02\x02\u0151" +
        "\u0146\x03\x02\x02\x02\u0151\u014B\x03\x02\x02\x02\u0152;\x03\x02\x02" +
        "\x02\u0153\u0154\x07\x06\x02\x02\u0154\u0155\x07\"\x02\x02\u0155\u0156" +
        "\x07+\x02\x02\u0156=\x03\x02\x02\x02\u0157\u0158\x07\x06\x02\x02\u0158" +
        "\u0159\x07\"\x02\x02\u0159\u015A\x05H%\x02\u015A?\x03\x02\x02\x02\u015B" +
        "\u015C\x07\x06\x02\x02\u015C\u015D\x07\"\x02\x02\u015D\u015E\x05F$\x02" +
        "\u015EA\x03\x02\x02\x02\u015F\u0160\t\x03\x02\x02\u0160C\x03\x02\x02\x02" +
        "\u0161\u0165\x05F$\x02\u0162\u0165\x05H%\x02\u0163\u0165\x07+\x02\x02" +
        "\u0164\u0161\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0163\x03" +
        "\x02\x02\x02\u0165E\x03\x02\x02\x02\u0166\u0169\x05J&\x02\u0167\u0169" +
        "\x05L\'\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169" +
        "G\x03\x02\x02\x02\u016A\u016B\t\x04\x02\x02\u016BI\x03\x02\x02\x02\u016C" +
        "\u016D\t\x05\x02\x02\u016DK\x03\x02\x02\x02\u016E\u016F\x07*\x02\x02\u016F" +
        "M\x03\x02\x02\x02\u0170\u0171\x07$\x02\x02\u0171\u0176\x056\x1C\x02\u0172" +
        "\u0173\x07\x18\x02\x02\u0173\u0174\x05P)\x02\u0174\u0175\x07\x19\x02\x02" +
        "\u0175\u0177\x03\x02\x02\x02\u0176\u0172\x03\x02\x02\x02\u0176\u0177\x03" +
        "\x02\x02\x02\u0177O\x03\x02\x02\x02\u0178\u017D\x05D#\x02\u0179\u017A" +
        "\x07\x1F\x02\x02\u017A\u017C\x05D#\x02\u017B\u0179\x03\x02\x02\x02\u017C" +
        "\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02" +
        "\x02\x02\u017EQ\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0181" +
        "\x07\x1C\x02\x02\u0181\u0182\x07\x1D\x02\x02\u0182S\x03\x02\x02\x02\'" +
        "X^jrv{\x86\x8D\x97\xA6\xB1\xBB\xC4\xCB\xD0\xD3\xD6\xDB\xDE\xE3\xE6\xE9" +
        "\xEE\xF1\xF9\u0100\u0108\u0112\u011A\u012A\u0132\u013A\u0151\u0164\u0168" +
        "\u0176\u017D";
    return CtoParser;
}(Parser_1.Parser));
exports.CtoParser = CtoParser;
var ModelUnitContext = /** @class */ (function (_super) {
    __extends(ModelUnitContext, _super);
    function ModelUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModelUnitContext.prototype.namespaceDeclaration = function () {
        return this.getRuleContext(0, NamespaceDeclarationContext);
    };
    ModelUnitContext.prototype.EOF = function () { return this.getToken(CtoParser.EOF, 0); };
    ModelUnitContext.prototype.importDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ImportDeclarationContext);
        }
    };
    ModelUnitContext.prototype.typeDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }
        else {
            return this.getRuleContext(i, TypeDeclarationContext);
        }
    };
    Object.defineProperty(ModelUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_modelUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModelUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterModelUnit) {
            listener.enterModelUnit(this);
        }
    };
    // @Override
    ModelUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitModelUnit) {
            listener.exitModelUnit(this);
        }
    };
    // @Override
    ModelUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitModelUnit) {
            return visitor.visitModelUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModelUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModelUnitContext = ModelUnitContext;
var NamespaceDeclarationContext = /** @class */ (function (_super) {
    __extends(NamespaceDeclarationContext, _super);
    function NamespaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceDeclarationContext.prototype.NAMESPACE = function () { return this.getToken(CtoParser.NAMESPACE, 0); };
    NamespaceDeclarationContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    Object.defineProperty(NamespaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_namespaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceDeclaration) {
            listener.enterNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceDeclaration) {
            listener.exitNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceDeclaration) {
            return visitor.visitNamespaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceDeclarationContext = NamespaceDeclarationContext;
var ImportDeclarationContext = /** @class */ (function (_super) {
    __extends(ImportDeclarationContext, _super);
    function ImportDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDeclarationContext.prototype.IMPORT = function () { return this.getToken(CtoParser.IMPORT, 0); };
    ImportDeclarationContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    ImportDeclarationContext.prototype.DOT = function () { return this.tryGetToken(CtoParser.DOT, 0); };
    ImportDeclarationContext.prototype.MUL = function () { return this.tryGetToken(CtoParser.MUL, 0); };
    Object.defineProperty(ImportDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_importDeclaration; },
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
    TypeDeclarationContext.prototype.assetDeclaration = function () {
        return this.tryGetRuleContext(0, AssetDeclarationContext);
    };
    TypeDeclarationContext.prototype.conceptDeclaration = function () {
        return this.tryGetRuleContext(0, ConceptDeclarationContext);
    };
    TypeDeclarationContext.prototype.enumDeclaration = function () {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    };
    TypeDeclarationContext.prototype.participantDeclaration = function () {
        return this.tryGetRuleContext(0, ParticipantDeclarationContext);
    };
    TypeDeclarationContext.prototype.transactionDeclaration = function () {
        return this.tryGetRuleContext(0, TransactionDeclarationContext);
    };
    TypeDeclarationContext.prototype.eventDeclaration = function () {
        return this.tryGetRuleContext(0, EventDeclarationContext);
    };
    Object.defineProperty(TypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_typeDeclaration; },
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
var ClassModifierContext = /** @class */ (function (_super) {
    __extends(ClassModifierContext, _super);
    function ClassModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassModifierContext.prototype.decorator = function () {
        return this.tryGetRuleContext(0, DecoratorContext);
    };
    ClassModifierContext.prototype.ABSTRACT = function () { return this.tryGetToken(CtoParser.ABSTRACT, 0); };
    Object.defineProperty(ClassModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_classModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterClassModifier) {
            listener.enterClassModifier(this);
        }
    };
    // @Override
    ClassModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitClassModifier) {
            listener.exitClassModifier(this);
        }
    };
    // @Override
    ClassModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitClassModifier) {
            return visitor.visitClassModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassModifierContext = ClassModifierContext;
var AssetDeclarationContext = /** @class */ (function (_super) {
    __extends(AssetDeclarationContext, _super);
    function AssetDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssetDeclarationContext.prototype.ASSET = function () { return this.getToken(CtoParser.ASSET, 0); };
    AssetDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    AssetDeclarationContext.prototype.extendsOrIdentified = function () {
        return this.getRuleContext(0, ExtendsOrIdentifiedContext);
    };
    AssetDeclarationContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    AssetDeclarationContext.prototype.classModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassModifierContext);
        }
    };
    Object.defineProperty(AssetDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_assetDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssetDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterAssetDeclaration) {
            listener.enterAssetDeclaration(this);
        }
    };
    // @Override
    AssetDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitAssetDeclaration) {
            listener.exitAssetDeclaration(this);
        }
    };
    // @Override
    AssetDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitAssetDeclaration) {
            return visitor.visitAssetDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssetDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssetDeclarationContext = AssetDeclarationContext;
var ConceptDeclarationContext = /** @class */ (function (_super) {
    __extends(ConceptDeclarationContext, _super);
    function ConceptDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConceptDeclarationContext.prototype.CONCEPT = function () { return this.getToken(CtoParser.CONCEPT, 0); };
    ConceptDeclarationContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(CtoParser.IDENTIFIER);
        }
        else {
            return this.getToken(CtoParser.IDENTIFIER, i);
        }
    };
    ConceptDeclarationContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    ConceptDeclarationContext.prototype.classModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassModifierContext);
        }
    };
    ConceptDeclarationContext.prototype.EXTENDS = function () { return this.tryGetToken(CtoParser.EXTENDS, 0); };
    Object.defineProperty(ConceptDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_conceptDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConceptDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterConceptDeclaration) {
            listener.enterConceptDeclaration(this);
        }
    };
    // @Override
    ConceptDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitConceptDeclaration) {
            listener.exitConceptDeclaration(this);
        }
    };
    // @Override
    ConceptDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitConceptDeclaration) {
            return visitor.visitConceptDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConceptDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConceptDeclarationContext = ConceptDeclarationContext;
var EnumDeclarationContext = /** @class */ (function (_super) {
    __extends(EnumDeclarationContext, _super);
    function EnumDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumDeclarationContext.prototype.ENUM = function () { return this.getToken(CtoParser.ENUM, 0); };
    EnumDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    EnumDeclarationContext.prototype.LBRACE = function () { return this.getToken(CtoParser.LBRACE, 0); };
    EnumDeclarationContext.prototype.RBRACE = function () { return this.getToken(CtoParser.RBRACE, 0); };
    EnumDeclarationContext.prototype.enumConstant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantContext);
        }
        else {
            return this.getRuleContext(i, EnumConstantContext);
        }
    };
    Object.defineProperty(EnumDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_enumDeclaration; },
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
var EnumConstantContext = /** @class */ (function (_super) {
    __extends(EnumConstantContext, _super);
    function EnumConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumConstantContext.prototype.VAR = function () { return this.getToken(CtoParser.VAR, 0); };
    EnumConstantContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    Object.defineProperty(EnumConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_enumConstant; },
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
var EventDeclarationContext = /** @class */ (function (_super) {
    __extends(EventDeclarationContext, _super);
    function EventDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EventDeclarationContext.prototype.EVENT = function () { return this.getToken(CtoParser.EVENT, 0); };
    EventDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    EventDeclarationContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    Object.defineProperty(EventDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_eventDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EventDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterEventDeclaration) {
            listener.enterEventDeclaration(this);
        }
    };
    // @Override
    EventDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitEventDeclaration) {
            listener.exitEventDeclaration(this);
        }
    };
    // @Override
    EventDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitEventDeclaration) {
            return visitor.visitEventDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EventDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EventDeclarationContext = EventDeclarationContext;
var ParticipantDeclarationContext = /** @class */ (function (_super) {
    __extends(ParticipantDeclarationContext, _super);
    function ParticipantDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParticipantDeclarationContext.prototype.PARTICIPANT = function () { return this.getToken(CtoParser.PARTICIPANT, 0); };
    ParticipantDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    ParticipantDeclarationContext.prototype.extendsOrIdentified = function () {
        return this.getRuleContext(0, ExtendsOrIdentifiedContext);
    };
    ParticipantDeclarationContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    ParticipantDeclarationContext.prototype.classModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassModifierContext);
        }
    };
    Object.defineProperty(ParticipantDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_participantDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParticipantDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterParticipantDeclaration) {
            listener.enterParticipantDeclaration(this);
        }
    };
    // @Override
    ParticipantDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitParticipantDeclaration) {
            listener.exitParticipantDeclaration(this);
        }
    };
    // @Override
    ParticipantDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitParticipantDeclaration) {
            return visitor.visitParticipantDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParticipantDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParticipantDeclarationContext = ParticipantDeclarationContext;
var TransactionDeclarationContext = /** @class */ (function (_super) {
    __extends(TransactionDeclarationContext, _super);
    function TransactionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TransactionDeclarationContext.prototype.TRANSACTION = function () { return this.getToken(CtoParser.TRANSACTION, 0); };
    TransactionDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    TransactionDeclarationContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    TransactionDeclarationContext.prototype.classModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassModifierContext);
        }
    };
    Object.defineProperty(TransactionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_transactionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TransactionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterTransactionDeclaration) {
            listener.enterTransactionDeclaration(this);
        }
    };
    // @Override
    TransactionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitTransactionDeclaration) {
            listener.exitTransactionDeclaration(this);
        }
    };
    // @Override
    TransactionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitTransactionDeclaration) {
            return visitor.visitTransactionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TransactionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TransactionDeclarationContext = TransactionDeclarationContext;
var ExtendsOrIdentifiedContext = /** @class */ (function (_super) {
    __extends(ExtendsOrIdentifiedContext, _super);
    function ExtendsOrIdentifiedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendsOrIdentifiedContext.prototype.identified = function () {
        return this.tryGetRuleContext(0, IdentifiedContext);
    };
    ExtendsOrIdentifiedContext.prototype.EXTENDS = function () { return this.tryGetToken(CtoParser.EXTENDS, 0); };
    ExtendsOrIdentifiedContext.prototype.IDENTIFIER = function () { return this.tryGetToken(CtoParser.IDENTIFIER, 0); };
    Object.defineProperty(ExtendsOrIdentifiedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_extendsOrIdentified; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendsOrIdentifiedContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendsOrIdentified) {
            listener.enterExtendsOrIdentified(this);
        }
    };
    // @Override
    ExtendsOrIdentifiedContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendsOrIdentified) {
            listener.exitExtendsOrIdentified(this);
        }
    };
    // @Override
    ExtendsOrIdentifiedContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendsOrIdentified) {
            return visitor.visitExtendsOrIdentified(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendsOrIdentifiedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendsOrIdentifiedContext = ExtendsOrIdentifiedContext;
var IdentifiedContext = /** @class */ (function (_super) {
    __extends(IdentifiedContext, _super);
    function IdentifiedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifiedContext.prototype.IDENTIFIED = function () { return this.tryGetToken(CtoParser.IDENTIFIED, 0); };
    IdentifiedContext.prototype.IDENTIFIER = function () { return this.tryGetToken(CtoParser.IDENTIFIER, 0); };
    Object.defineProperty(IdentifiedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_identified; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifiedContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentified) {
            listener.enterIdentified(this);
        }
    };
    // @Override
    IdentifiedContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentified) {
            listener.exitIdentified(this);
        }
    };
    // @Override
    IdentifiedContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentified) {
            return visitor.visitIdentified(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifiedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifiedContext = IdentifiedContext;
var ClassBodyContext = /** @class */ (function (_super) {
    __extends(ClassBodyContext, _super);
    function ClassBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBodyContext.prototype.LBRACE = function () { return this.getToken(CtoParser.LBRACE, 0); };
    ClassBodyContext.prototype.RBRACE = function () { return this.getToken(CtoParser.RBRACE, 0); };
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
        get: function () { return CtoParser.RULE_classBody; },
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
var ClassBodyDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassBodyDeclarationContext, _super);
    function ClassBodyDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBodyDeclarationContext.prototype.SEMI = function () { return this.tryGetToken(CtoParser.SEMI, 0); };
    ClassBodyDeclarationContext.prototype.fieldDeclaration = function () {
        return this.tryGetRuleContext(0, FieldDeclarationContext);
    };
    Object.defineProperty(ClassBodyDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_classBodyDeclaration; },
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
var FieldDeclarationContext = /** @class */ (function (_super) {
    __extends(FieldDeclarationContext, _super);
    function FieldDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldDeclarationContext.prototype.stringField = function () {
        return this.tryGetRuleContext(0, StringFieldContext);
    };
    FieldDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FieldDeclarationContext.prototype.defaultString = function () {
        return this.tryGetRuleContext(0, DefaultStringContext);
    };
    FieldDeclarationContext.prototype.regexDeclaration = function () {
        return this.tryGetRuleContext(0, RegexDeclarationContext);
    };
    FieldDeclarationContext.prototype.OPTIONAL = function () { return this.tryGetToken(CtoParser.OPTIONAL, 0); };
    FieldDeclarationContext.prototype.booleanField = function () {
        return this.tryGetRuleContext(0, BooleanFieldContext);
    };
    FieldDeclarationContext.prototype.defaultBoolean = function () {
        return this.tryGetRuleContext(0, DefaultBooleanContext);
    };
    FieldDeclarationContext.prototype.numericField = function () {
        return this.tryGetRuleContext(0, NumericFieldContext);
    };
    FieldDeclarationContext.prototype.defaultNumber = function () {
        return this.tryGetRuleContext(0, DefaultNumberContext);
    };
    FieldDeclarationContext.prototype.rangeValidation = function () {
        return this.tryGetRuleContext(0, RangeValidationContext);
    };
    FieldDeclarationContext.prototype.dateField = function () {
        return this.tryGetRuleContext(0, DateFieldContext);
    };
    FieldDeclarationContext.prototype.defaultDate = function () {
        return this.tryGetRuleContext(0, DefaultDateContext);
    };
    FieldDeclarationContext.prototype.identifierField = function () {
        return this.tryGetRuleContext(0, IdentifierFieldContext);
    };
    FieldDeclarationContext.prototype.reference = function () {
        return this.tryGetRuleContext(0, ReferenceContext);
    };
    Object.defineProperty(FieldDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_fieldDeclaration; },
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
var IdentifierFieldContext = /** @class */ (function (_super) {
    __extends(IdentifierFieldContext, _super);
    function IdentifierFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierFieldContext.prototype.VAR = function () { return this.getToken(CtoParser.VAR, 0); };
    IdentifierFieldContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    IdentifierFieldContext.prototype.square = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareContext);
        }
        else {
            return this.getRuleContext(i, SquareContext);
        }
    };
    Object.defineProperty(IdentifierFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_identifierField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierField) {
            listener.enterIdentifierField(this);
        }
    };
    // @Override
    IdentifierFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierField) {
            listener.exitIdentifierField(this);
        }
    };
    // @Override
    IdentifierFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierField) {
            return visitor.visitIdentifierField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierFieldContext = IdentifierFieldContext;
var NumericFieldContext = /** @class */ (function (_super) {
    __extends(NumericFieldContext, _super);
    function NumericFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericFieldContext.prototype.VAR = function () { return this.getToken(CtoParser.VAR, 0); };
    NumericFieldContext.prototype.numericPrimitive = function () {
        return this.getRuleContext(0, NumericPrimitiveContext);
    };
    NumericFieldContext.prototype.square = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareContext);
        }
        else {
            return this.getRuleContext(i, SquareContext);
        }
    };
    Object.defineProperty(NumericFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_numericField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericField) {
            listener.enterNumericField(this);
        }
    };
    // @Override
    NumericFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericField) {
            listener.exitNumericField(this);
        }
    };
    // @Override
    NumericFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericField) {
            return visitor.visitNumericField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericFieldContext = NumericFieldContext;
var NumericPrimitiveContext = /** @class */ (function (_super) {
    __extends(NumericPrimitiveContext, _super);
    function NumericPrimitiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericPrimitiveContext.prototype.DOUBLE = function () { return this.tryGetToken(CtoParser.DOUBLE, 0); };
    NumericPrimitiveContext.prototype.INTEGER = function () { return this.tryGetToken(CtoParser.INTEGER, 0); };
    NumericPrimitiveContext.prototype.LONG = function () { return this.tryGetToken(CtoParser.LONG, 0); };
    Object.defineProperty(NumericPrimitiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_numericPrimitive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericPrimitiveContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericPrimitive) {
            listener.enterNumericPrimitive(this);
        }
    };
    // @Override
    NumericPrimitiveContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericPrimitive) {
            listener.exitNumericPrimitive(this);
        }
    };
    // @Override
    NumericPrimitiveContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericPrimitive) {
            return visitor.visitNumericPrimitive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericPrimitiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericPrimitiveContext = NumericPrimitiveContext;
var BooleanFieldContext = /** @class */ (function (_super) {
    __extends(BooleanFieldContext, _super);
    function BooleanFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BooleanFieldContext.prototype.VAR = function () { return this.getToken(CtoParser.VAR, 0); };
    BooleanFieldContext.prototype.BOOLEAN = function () { return this.getToken(CtoParser.BOOLEAN, 0); };
    BooleanFieldContext.prototype.square = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareContext);
        }
        else {
            return this.getRuleContext(i, SquareContext);
        }
    };
    Object.defineProperty(BooleanFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_booleanField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanField) {
            listener.enterBooleanField(this);
        }
    };
    // @Override
    BooleanFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanField) {
            listener.exitBooleanField(this);
        }
    };
    // @Override
    BooleanFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanField) {
            return visitor.visitBooleanField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanFieldContext = BooleanFieldContext;
var DateFieldContext = /** @class */ (function (_super) {
    __extends(DateFieldContext, _super);
    function DateFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DateFieldContext.prototype.VAR = function () { return this.getToken(CtoParser.VAR, 0); };
    DateFieldContext.prototype.DATE_TIME = function () { return this.getToken(CtoParser.DATE_TIME, 0); };
    DateFieldContext.prototype.square = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareContext);
        }
        else {
            return this.getRuleContext(i, SquareContext);
        }
    };
    Object.defineProperty(DateFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_dateField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DateFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterDateField) {
            listener.enterDateField(this);
        }
    };
    // @Override
    DateFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitDateField) {
            listener.exitDateField(this);
        }
    };
    // @Override
    DateFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitDateField) {
            return visitor.visitDateField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DateFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DateFieldContext = DateFieldContext;
var DefaultDateContext = /** @class */ (function (_super) {
    __extends(DefaultDateContext, _super);
    function DefaultDateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultDateContext.prototype.DEFAULT = function () { return this.getToken(CtoParser.DEFAULT, 0); };
    DefaultDateContext.prototype.ASSIGN = function () { return this.getToken(CtoParser.ASSIGN, 0); };
    DefaultDateContext.prototype.DATE_TIME_LITERAL = function () { return this.getToken(CtoParser.DATE_TIME_LITERAL, 0); };
    Object.defineProperty(DefaultDateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_defaultDate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultDateContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultDate) {
            listener.enterDefaultDate(this);
        }
    };
    // @Override
    DefaultDateContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultDate) {
            listener.exitDefaultDate(this);
        }
    };
    // @Override
    DefaultDateContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultDate) {
            return visitor.visitDefaultDate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultDateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultDateContext = DefaultDateContext;
var RegexDeclarationContext = /** @class */ (function (_super) {
    __extends(RegexDeclarationContext, _super);
    function RegexDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegexDeclarationContext.prototype.REGEX = function () { return this.getToken(CtoParser.REGEX, 0); };
    RegexDeclarationContext.prototype.ASSIGN = function () { return this.getToken(CtoParser.ASSIGN, 0); };
    RegexDeclarationContext.prototype.REGEX_EXPR = function () { return this.getToken(CtoParser.REGEX_EXPR, 0); };
    Object.defineProperty(RegexDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_regexDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegexDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterRegexDeclaration) {
            listener.enterRegexDeclaration(this);
        }
    };
    // @Override
    RegexDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitRegexDeclaration) {
            listener.exitRegexDeclaration(this);
        }
    };
    // @Override
    RegexDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitRegexDeclaration) {
            return visitor.visitRegexDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegexDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegexDeclarationContext = RegexDeclarationContext;
var StringFieldContext = /** @class */ (function (_super) {
    __extends(StringFieldContext, _super);
    function StringFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringFieldContext.prototype.VAR = function () { return this.getToken(CtoParser.VAR, 0); };
    StringFieldContext.prototype.STRING = function () { return this.getToken(CtoParser.STRING, 0); };
    StringFieldContext.prototype.square = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareContext);
        }
        else {
            return this.getRuleContext(i, SquareContext);
        }
    };
    Object.defineProperty(StringFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_stringField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterStringField) {
            listener.enterStringField(this);
        }
    };
    // @Override
    StringFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitStringField) {
            listener.exitStringField(this);
        }
    };
    // @Override
    StringFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitStringField) {
            return visitor.visitStringField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringFieldContext = StringFieldContext;
var ReferenceContext = /** @class */ (function (_super) {
    __extends(ReferenceContext, _super);
    function ReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReferenceContext.prototype.REF = function () { return this.getToken(CtoParser.REF, 0); };
    ReferenceContext.prototype.IDENTIFIER = function () { return this.getToken(CtoParser.IDENTIFIER, 0); };
    ReferenceContext.prototype.square = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareContext);
        }
        else {
            return this.getRuleContext(i, SquareContext);
        }
    };
    Object.defineProperty(ReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_reference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterReference) {
            listener.enterReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitReference) {
            listener.exitReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitReference) {
            return visitor.visitReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReferenceContext = ReferenceContext;
var QualifiedNameContext = /** @class */ (function (_super) {
    __extends(QualifiedNameContext, _super);
    function QualifiedNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedNameContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(CtoParser.IDENTIFIER);
        }
        else {
            return this.getToken(CtoParser.IDENTIFIER, i);
        }
    };
    QualifiedNameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(CtoParser.DOT);
        }
        else {
            return this.getToken(CtoParser.DOT, i);
        }
    };
    Object.defineProperty(QualifiedNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_qualifiedName; },
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
var RangeValidationContext = /** @class */ (function (_super) {
    __extends(RangeValidationContext, _super);
    function RangeValidationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangeValidationContext.prototype.RANGE = function () { return this.getToken(CtoParser.RANGE, 0); };
    RangeValidationContext.prototype.ASSIGN = function () { return this.getToken(CtoParser.ASSIGN, 0); };
    RangeValidationContext.prototype.rangeDeclaration = function () {
        return this.getRuleContext(0, RangeDeclarationContext);
    };
    Object.defineProperty(RangeValidationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_rangeValidation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangeValidationContext.prototype.enterRule = function (listener) {
        if (listener.enterRangeValidation) {
            listener.enterRangeValidation(this);
        }
    };
    // @Override
    RangeValidationContext.prototype.exitRule = function (listener) {
        if (listener.exitRangeValidation) {
            listener.exitRangeValidation(this);
        }
    };
    // @Override
    RangeValidationContext.prototype.accept = function (visitor) {
        if (visitor.visitRangeValidation) {
            return visitor.visitRangeValidation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangeValidationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangeValidationContext = RangeValidationContext;
var RangeDeclarationContext = /** @class */ (function (_super) {
    __extends(RangeDeclarationContext, _super);
    function RangeDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangeDeclarationContext.prototype.LBRACK = function () { return this.tryGetToken(CtoParser.LBRACK, 0); };
    RangeDeclarationContext.prototype.numberLiteral = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberLiteralContext);
        }
        else {
            return this.getRuleContext(i, NumberLiteralContext);
        }
    };
    RangeDeclarationContext.prototype.COMMA = function () { return this.tryGetToken(CtoParser.COMMA, 0); };
    RangeDeclarationContext.prototype.RBRACK = function () { return this.tryGetToken(CtoParser.RBRACK, 0); };
    Object.defineProperty(RangeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_rangeDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangeDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterRangeDeclaration) {
            listener.enterRangeDeclaration(this);
        }
    };
    // @Override
    RangeDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitRangeDeclaration) {
            listener.exitRangeDeclaration(this);
        }
    };
    // @Override
    RangeDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitRangeDeclaration) {
            return visitor.visitRangeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangeDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangeDeclarationContext = RangeDeclarationContext;
var DefaultBooleanContext = /** @class */ (function (_super) {
    __extends(DefaultBooleanContext, _super);
    function DefaultBooleanContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultBooleanContext.prototype.DEFAULT = function () { return this.tryGetToken(CtoParser.DEFAULT, 0); };
    DefaultBooleanContext.prototype.ASSIGN = function () { return this.tryGetToken(CtoParser.ASSIGN, 0); };
    DefaultBooleanContext.prototype.BOOL_LITERAL = function () { return this.tryGetToken(CtoParser.BOOL_LITERAL, 0); };
    Object.defineProperty(DefaultBooleanContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_defaultBoolean; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultBooleanContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultBoolean) {
            listener.enterDefaultBoolean(this);
        }
    };
    // @Override
    DefaultBooleanContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultBoolean) {
            listener.exitDefaultBoolean(this);
        }
    };
    // @Override
    DefaultBooleanContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultBoolean) {
            return visitor.visitDefaultBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultBooleanContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultBooleanContext = DefaultBooleanContext;
var DefaultStringContext = /** @class */ (function (_super) {
    __extends(DefaultStringContext, _super);
    function DefaultStringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultStringContext.prototype.DEFAULT = function () { return this.tryGetToken(CtoParser.DEFAULT, 0); };
    DefaultStringContext.prototype.ASSIGN = function () { return this.tryGetToken(CtoParser.ASSIGN, 0); };
    DefaultStringContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(DefaultStringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_defaultString; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultStringContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultString) {
            listener.enterDefaultString(this);
        }
    };
    // @Override
    DefaultStringContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultString) {
            listener.exitDefaultString(this);
        }
    };
    // @Override
    DefaultStringContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultString) {
            return visitor.visitDefaultString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultStringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultStringContext = DefaultStringContext;
var DefaultNumberContext = /** @class */ (function (_super) {
    __extends(DefaultNumberContext, _super);
    function DefaultNumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultNumberContext.prototype.DEFAULT = function () { return this.tryGetToken(CtoParser.DEFAULT, 0); };
    DefaultNumberContext.prototype.ASSIGN = function () { return this.tryGetToken(CtoParser.ASSIGN, 0); };
    DefaultNumberContext.prototype.numberLiteral = function () {
        return this.tryGetRuleContext(0, NumberLiteralContext);
    };
    Object.defineProperty(DefaultNumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_defaultNumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultNumberContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultNumber) {
            listener.enterDefaultNumber(this);
        }
    };
    // @Override
    DefaultNumberContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultNumber) {
            listener.exitDefaultNumber(this);
        }
    };
    // @Override
    DefaultNumberContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultNumber) {
            return visitor.visitDefaultNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultNumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultNumberContext = DefaultNumberContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.IDENTIFIER = function () { return this.tryGetToken(CtoParser.IDENTIFIER, 0); };
    IdentifierContext.prototype.ASSET = function () { return this.tryGetToken(CtoParser.ASSET, 0); };
    IdentifierContext.prototype.PARTICIPANT = function () { return this.tryGetToken(CtoParser.PARTICIPANT, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_identifier; },
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
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.numberLiteral = function () {
        return this.tryGetRuleContext(0, NumberLiteralContext);
    };
    LiteralContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    LiteralContext.prototype.BOOL_LITERAL = function () { return this.tryGetToken(CtoParser.BOOL_LITERAL, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_literal; },
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
var NumberLiteralContext = /** @class */ (function (_super) {
    __extends(NumberLiteralContext, _super);
    function NumberLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberLiteralContext.prototype.integerLiteral = function () {
        return this.tryGetRuleContext(0, IntegerLiteralContext);
    };
    NumberLiteralContext.prototype.floatLiteral = function () {
        return this.tryGetRuleContext(0, FloatLiteralContext);
    };
    Object.defineProperty(NumberLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_numberLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNumberLiteral) {
            listener.enterNumberLiteral(this);
        }
    };
    // @Override
    NumberLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNumberLiteral) {
            listener.exitNumberLiteral(this);
        }
    };
    // @Override
    NumberLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberLiteralContext = NumberLiteralContext;
var StringLiteralContext = /** @class */ (function (_super) {
    __extends(StringLiteralContext, _super);
    function StringLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringLiteralContext.prototype.CHAR_LITERAL = function () { return this.tryGetToken(CtoParser.CHAR_LITERAL, 0); };
    StringLiteralContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(CtoParser.STRING_LITERAL, 0); };
    Object.defineProperty(StringLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_stringLiteral; },
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
var IntegerLiteralContext = /** @class */ (function (_super) {
    __extends(IntegerLiteralContext, _super);
    function IntegerLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerLiteralContext.prototype.DECIMAL_LITERAL = function () { return this.tryGetToken(CtoParser.DECIMAL_LITERAL, 0); };
    IntegerLiteralContext.prototype.OCT_LITERAL = function () { return this.tryGetToken(CtoParser.OCT_LITERAL, 0); };
    Object.defineProperty(IntegerLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_integerLiteral; },
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
    FloatLiteralContext.prototype.FLOAT_LITERAL = function () { return this.getToken(CtoParser.FLOAT_LITERAL, 0); };
    Object.defineProperty(FloatLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_floatLiteral; },
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
var DecoratorContext = /** @class */ (function (_super) {
    __extends(DecoratorContext, _super);
    function DecoratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratorContext.prototype.AT = function () { return this.getToken(CtoParser.AT, 0); };
    DecoratorContext.prototype.qualifiedName = function () {
        return this.getRuleContext(0, QualifiedNameContext);
    };
    DecoratorContext.prototype.LPAREN = function () { return this.tryGetToken(CtoParser.LPAREN, 0); };
    DecoratorContext.prototype.elementValuePair = function () {
        return this.tryGetRuleContext(0, ElementValuePairContext);
    };
    DecoratorContext.prototype.RPAREN = function () { return this.tryGetToken(CtoParser.RPAREN, 0); };
    Object.defineProperty(DecoratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_decorator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratorContext.prototype.enterRule = function (listener) {
        if (listener.enterDecorator) {
            listener.enterDecorator(this);
        }
    };
    // @Override
    DecoratorContext.prototype.exitRule = function (listener) {
        if (listener.exitDecorator) {
            listener.exitDecorator(this);
        }
    };
    // @Override
    DecoratorContext.prototype.accept = function (visitor) {
        if (visitor.visitDecorator) {
            return visitor.visitDecorator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratorContext = DecoratorContext;
var ElementValuePairContext = /** @class */ (function (_super) {
    __extends(ElementValuePairContext, _super);
    function ElementValuePairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementValuePairContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    ElementValuePairContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(CtoParser.COMMA);
        }
        else {
            return this.getToken(CtoParser.COMMA, i);
        }
    };
    Object.defineProperty(ElementValuePairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_elementValuePair; },
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
var SquareContext = /** @class */ (function (_super) {
    __extends(SquareContext, _super);
    function SquareContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SquareContext.prototype.LBRACK = function () { return this.getToken(CtoParser.LBRACK, 0); };
    SquareContext.prototype.RBRACK = function () { return this.getToken(CtoParser.RBRACK, 0); };
    Object.defineProperty(SquareContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CtoParser.RULE_square; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SquareContext.prototype.enterRule = function (listener) {
        if (listener.enterSquare) {
            listener.enterSquare(this);
        }
    };
    // @Override
    SquareContext.prototype.exitRule = function (listener) {
        if (listener.exitSquare) {
            listener.exitSquare(this);
        }
    };
    // @Override
    SquareContext.prototype.accept = function (visitor) {
        if (visitor.visitSquare) {
            return visitor.visitSquare(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SquareContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SquareContext = SquareContext;
