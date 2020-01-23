"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/solidity/Solidity.g4 by ANTLR 4.7.3-SNAPSHOT
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
var SolidityParser = /** @class */ (function (_super) {
    __extends(SolidityParser, _super);
    function SolidityParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SolidityParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SolidityParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SolidityParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolidityParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Solidity.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolidityParser.prototype, "ruleNames", {
        // @Override
        get: function () { return SolidityParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolidityParser.prototype, "serializedATN", {
        // @Override
        get: function () { return SolidityParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SolidityParser.prototype.sourceUnit = function () {
        var _localctx = new SourceUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SolidityParser.RULE_sourceUnit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__0) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__17) | (1 << SolidityParser.T__18))) !== 0)) {
                    {
                        this.state = 171;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SolidityParser.T__0:
                                {
                                    this.state = 168;
                                    this.pragmaDirective();
                                }
                                break;
                            case SolidityParser.T__10:
                                {
                                    this.state = 169;
                                    this.importDirective();
                                }
                                break;
                            case SolidityParser.T__16:
                            case SolidityParser.T__17:
                            case SolidityParser.T__18:
                                {
                                    this.state = 170;
                                    this.contractDefinition();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 175;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 176;
                this.match(SolidityParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.pragmaDirective = function () {
        var _localctx = new PragmaDirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SolidityParser.RULE_pragmaDirective);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.match(SolidityParser.T__0);
                this.state = 179;
                this.pragmaName();
                this.state = 180;
                this.pragmaValue();
                this.state = 181;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.pragmaName = function () {
        var _localctx = new PragmaNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SolidityParser.RULE_pragmaName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
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
    SolidityParser.prototype.pragmaValue = function () {
        var _localctx = new PragmaValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SolidityParser.RULE_pragmaValue);
        try {
            this.state = 187;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 185;
                        this.version();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 186;
                        this.expression(0);
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
    SolidityParser.prototype.version = function () {
        var _localctx = new VersionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SolidityParser.RULE_version);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this.versionConstraint();
                this.state = 191;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0) || _la === SolidityParser.VersionLiteral) {
                    {
                        this.state = 190;
                        this.versionConstraint();
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
    SolidityParser.prototype.versionOperator = function () {
        var _localctx = new VersionOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SolidityParser.RULE_versionOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0))) {
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
    SolidityParser.prototype.versionConstraint = function () {
        var _localctx = new VersionConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SolidityParser.RULE_versionConstraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0)) {
                    {
                        this.state = 195;
                        this.versionOperator();
                    }
                }
                this.state = 198;
                this.match(SolidityParser.VersionLiteral);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.importDeclaration = function () {
        var _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SolidityParser.RULE_importDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.identifier();
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__9) {
                    {
                        this.state = 201;
                        this.match(SolidityParser.T__9);
                        this.state = 202;
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
    SolidityParser.prototype.importDirective = function () {
        var _localctx = new ImportDirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SolidityParser.RULE_importDirective);
        var _la;
        try {
            this.state = 239;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 205;
                        this.match(SolidityParser.T__10);
                        this.state = 206;
                        this.match(SolidityParser.StringLiteral);
                        this.state = 209;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SolidityParser.T__9) {
                            {
                                this.state = 207;
                                this.match(SolidityParser.T__9);
                                this.state = 208;
                                this.identifier();
                            }
                        }
                        this.state = 211;
                        this.match(SolidityParser.T__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 212;
                        this.match(SolidityParser.T__10);
                        this.state = 215;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SolidityParser.T__11:
                                {
                                    this.state = 213;
                                    this.match(SolidityParser.T__11);
                                }
                                break;
                            case SolidityParser.T__12:
                            case SolidityParser.Identifier:
                                {
                                    this.state = 214;
                                    this.identifier();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 219;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SolidityParser.T__9) {
                            {
                                this.state = 217;
                                this.match(SolidityParser.T__9);
                                this.state = 218;
                                this.identifier();
                            }
                        }
                        this.state = 221;
                        this.match(SolidityParser.T__12);
                        this.state = 222;
                        this.match(SolidityParser.StringLiteral);
                        this.state = 223;
                        this.match(SolidityParser.T__1);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 224;
                        this.match(SolidityParser.T__10);
                        this.state = 225;
                        this.match(SolidityParser.T__13);
                        this.state = 226;
                        this.importDeclaration();
                        this.state = 231;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SolidityParser.T__14) {
                            {
                                {
                                    this.state = 227;
                                    this.match(SolidityParser.T__14);
                                    this.state = 228;
                                    this.importDeclaration();
                                }
                            }
                            this.state = 233;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 234;
                        this.match(SolidityParser.T__15);
                        this.state = 235;
                        this.match(SolidityParser.T__12);
                        this.state = 236;
                        this.match(SolidityParser.StringLiteral);
                        this.state = 237;
                        this.match(SolidityParser.T__1);
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
    SolidityParser.prototype.contractDefinition = function () {
        var _localctx = new ContractDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SolidityParser.RULE_contractDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__16) | (1 << SolidityParser.T__17) | (1 << SolidityParser.T__18))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 242;
                this.identifier();
                this.state = 252;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__19) {
                    {
                        this.state = 243;
                        this.match(SolidityParser.T__19);
                        this.state = 244;
                        this.inheritanceSpecifier();
                        this.state = 249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SolidityParser.T__14) {
                            {
                                {
                                    this.state = 245;
                                    this.match(SolidityParser.T__14);
                                    this.state = 246;
                                    this.inheritanceSpecifier();
                                }
                            }
                            this.state = 251;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 254;
                this.match(SolidityParser.T__13);
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__12) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__27) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                    {
                        {
                            this.state = 255;
                            this.contractPart();
                        }
                    }
                    this.state = 260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 261;
                this.match(SolidityParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.inheritanceSpecifier = function () {
        var _localctx = new InheritanceSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SolidityParser.RULE_inheritanceSpecifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.userDefinedTypeName();
                this.state = 275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__20) {
                    {
                        this.state = 264;
                        this.match(SolidityParser.T__20);
                        this.state = 265;
                        this.expression(0);
                        this.state = 270;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SolidityParser.T__14) {
                            {
                                {
                                    this.state = 266;
                                    this.match(SolidityParser.T__14);
                                    this.state = 267;
                                    this.expression(0);
                                }
                            }
                            this.state = 272;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 273;
                        this.match(SolidityParser.T__21);
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
    SolidityParser.prototype.contractPart = function () {
        var _localctx = new ContractPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SolidityParser.RULE_contractPart);
        try {
            this.state = 285;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 277;
                        this.stateVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 278;
                        this.usingForDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 279;
                        this.structDefinition();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 280;
                        this.constructorDefinition();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 281;
                        this.modifierDefinition();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 282;
                        this.functionDefinition();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 283;
                        this.eventDefinition();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 284;
                        this.enumDefinition();
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
    SolidityParser.prototype.stateVariableDeclaration = function () {
        var _localctx = new StateVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SolidityParser.RULE_stateVariableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.typeName(0);
                this.state = 291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.InternalKeyword - 105)) | (1 << (SolidityParser.PrivateKeyword - 105)) | (1 << (SolidityParser.PublicKeyword - 105)))) !== 0)) {
                    {
                        {
                            this.state = 288;
                            _la = this._input.LA(1);
                            if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.InternalKeyword - 105)) | (1 << (SolidityParser.PrivateKeyword - 105)) | (1 << (SolidityParser.PublicKeyword - 105)))) !== 0))) {
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
                    this.state = 293;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 294;
                this.identifier();
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__8) {
                    {
                        this.state = 295;
                        this.match(SolidityParser.T__8);
                        this.state = 296;
                        this.expression(0);
                    }
                }
                this.state = 299;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.usingForDeclaration = function () {
        var _localctx = new UsingForDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SolidityParser.RULE_usingForDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.match(SolidityParser.T__22);
                this.state = 302;
                this.identifier();
                this.state = 303;
                this.match(SolidityParser.T__23);
                this.state = 306;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__11:
                        {
                            this.state = 304;
                            this.match(SolidityParser.T__11);
                        }
                        break;
                    case SolidityParser.T__12:
                    case SolidityParser.T__27:
                    case SolidityParser.T__34:
                    case SolidityParser.T__47:
                    case SolidityParser.T__48:
                    case SolidityParser.T__49:
                    case SolidityParser.T__50:
                    case SolidityParser.T__51:
                    case SolidityParser.Int:
                    case SolidityParser.Uint:
                    case SolidityParser.Byte:
                    case SolidityParser.Fixed:
                    case SolidityParser.Ufixed:
                    case SolidityParser.Identifier:
                        {
                            this.state = 305;
                            this.typeName(0);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 308;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.structDefinition = function () {
        var _localctx = new StructDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SolidityParser.RULE_structDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.match(SolidityParser.T__24);
                this.state = 311;
                this.identifier();
                this.state = 312;
                this.match(SolidityParser.T__13);
                this.state = 323;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                    {
                        this.state = 313;
                        this.variableDeclaration();
                        this.state = 314;
                        this.match(SolidityParser.T__1);
                        this.state = 320;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                            {
                                {
                                    this.state = 315;
                                    this.variableDeclaration();
                                    this.state = 316;
                                    this.match(SolidityParser.T__1);
                                }
                            }
                            this.state = 322;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 325;
                this.match(SolidityParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.constructorDefinition = function () {
        var _localctx = new ConstructorDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SolidityParser.RULE_constructorDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 327;
                this.match(SolidityParser.T__25);
                this.state = 328;
                this.parameterList();
                this.state = 329;
                this.modifierList();
                this.state = 330;
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
    SolidityParser.prototype.modifierDefinition = function () {
        var _localctx = new ModifierDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SolidityParser.RULE_modifierDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 332;
                this.match(SolidityParser.T__26);
                this.state = 333;
                this.identifier();
                this.state = 335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__20) {
                    {
                        this.state = 334;
                        this.parameterList();
                    }
                }
                this.state = 337;
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
    SolidityParser.prototype.modifierInvocation = function () {
        var _localctx = new ModifierInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, SolidityParser.RULE_modifierInvocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.identifier();
                this.state = 345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__20) {
                    {
                        this.state = 340;
                        this.match(SolidityParser.T__20);
                        this.state = 342;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                            {
                                this.state = 341;
                                this.expressionList();
                            }
                        }
                        this.state = 344;
                        this.match(SolidityParser.T__21);
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
    SolidityParser.prototype.functionDefinition = function () {
        var _localctx = new FunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, SolidityParser.RULE_functionDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(SolidityParser.T__27);
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    {
                        this.state = 348;
                        this.identifier();
                    }
                }
                this.state = 351;
                this.parameterList();
                this.state = 352;
                this.modifierList();
                this.state = 354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__28) {
                    {
                        this.state = 353;
                        this.returnParameters();
                    }
                }
                this.state = 358;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__1:
                        {
                            this.state = 356;
                            this.match(SolidityParser.T__1);
                        }
                        break;
                    case SolidityParser.T__13:
                        {
                            this.state = 357;
                            this.block();
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
    SolidityParser.prototype.returnParameters = function () {
        var _localctx = new ReturnParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, SolidityParser.RULE_returnParameters);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this.match(SolidityParser.T__28);
                this.state = 361;
                this.parameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.modifierList = function () {
        var _localctx = new ModifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, SolidityParser.RULE_modifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 371;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__12 || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.ExternalKeyword - 105)) | (1 << (SolidityParser.InternalKeyword - 105)) | (1 << (SolidityParser.PayableKeyword - 105)) | (1 << (SolidityParser.PrivateKeyword - 105)) | (1 << (SolidityParser.PublicKeyword - 105)) | (1 << (SolidityParser.PureKeyword - 105)) | (1 << (SolidityParser.ViewKeyword - 105)) | (1 << (SolidityParser.Identifier - 105)))) !== 0)) {
                    {
                        this.state = 369;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SolidityParser.T__12:
                            case SolidityParser.Identifier:
                                {
                                    this.state = 363;
                                    this.modifierInvocation();
                                }
                                break;
                            case SolidityParser.ConstantKeyword:
                            case SolidityParser.PayableKeyword:
                            case SolidityParser.PureKeyword:
                            case SolidityParser.ViewKeyword:
                                {
                                    this.state = 364;
                                    this.stateMutability();
                                }
                                break;
                            case SolidityParser.ExternalKeyword:
                                {
                                    this.state = 365;
                                    this.match(SolidityParser.ExternalKeyword);
                                }
                                break;
                            case SolidityParser.PublicKeyword:
                                {
                                    this.state = 366;
                                    this.match(SolidityParser.PublicKeyword);
                                }
                                break;
                            case SolidityParser.InternalKeyword:
                                {
                                    this.state = 367;
                                    this.match(SolidityParser.InternalKeyword);
                                }
                                break;
                            case SolidityParser.PrivateKeyword:
                                {
                                    this.state = 368;
                                    this.match(SolidityParser.PrivateKeyword);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 373;
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
    SolidityParser.prototype.eventDefinition = function () {
        var _localctx = new EventDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, SolidityParser.RULE_eventDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(SolidityParser.T__29);
                this.state = 375;
                this.identifier();
                this.state = 376;
                this.eventParameterList();
                this.state = 378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.AnonymousKeyword) {
                    {
                        this.state = 377;
                        this.match(SolidityParser.AnonymousKeyword);
                    }
                }
                this.state = 380;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.enumValue = function () {
        var _localctx = new EnumValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SolidityParser.RULE_enumValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
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
    SolidityParser.prototype.enumDefinition = function () {
        var _localctx = new EnumDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SolidityParser.RULE_enumDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(SolidityParser.T__30);
                this.state = 385;
                this.identifier();
                this.state = 386;
                this.match(SolidityParser.T__13);
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    {
                        this.state = 387;
                        this.enumValue();
                    }
                }
                this.state = 394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__14) {
                    {
                        {
                            this.state = 390;
                            this.match(SolidityParser.T__14);
                            this.state = 391;
                            this.enumValue();
                        }
                    }
                    this.state = 396;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 397;
                this.match(SolidityParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.parameterList = function () {
        var _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SolidityParser.RULE_parameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 399;
                this.match(SolidityParser.T__20);
                this.state = 408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                    {
                        this.state = 400;
                        this.parameter();
                        this.state = 405;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SolidityParser.T__14) {
                            {
                                {
                                    this.state = 401;
                                    this.match(SolidityParser.T__14);
                                    this.state = 402;
                                    this.parameter();
                                }
                            }
                            this.state = 407;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 410;
                this.match(SolidityParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.parameter = function () {
        var _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, SolidityParser.RULE_parameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this.typeName(0);
                this.state = 414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0)) {
                    {
                        this.state = 413;
                        this.storageLocation();
                    }
                }
                this.state = 417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    {
                        this.state = 416;
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
    SolidityParser.prototype.eventParameterList = function () {
        var _localctx = new EventParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SolidityParser.RULE_eventParameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 419;
                this.match(SolidityParser.T__20);
                this.state = 428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                    {
                        this.state = 420;
                        this.eventParameter();
                        this.state = 425;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SolidityParser.T__14) {
                            {
                                {
                                    this.state = 421;
                                    this.match(SolidityParser.T__14);
                                    this.state = 422;
                                    this.eventParameter();
                                }
                            }
                            this.state = 427;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 430;
                this.match(SolidityParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.eventParameter = function () {
        var _localctx = new EventParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SolidityParser.RULE_eventParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 432;
                this.typeName(0);
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.IndexedKeyword) {
                    {
                        this.state = 433;
                        this.match(SolidityParser.IndexedKeyword);
                    }
                }
                this.state = 437;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    {
                        this.state = 436;
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
    SolidityParser.prototype.functionTypeParameterList = function () {
        var _localctx = new FunctionTypeParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SolidityParser.RULE_functionTypeParameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 439;
                this.match(SolidityParser.T__20);
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                    {
                        this.state = 440;
                        this.functionTypeParameter();
                        this.state = 445;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SolidityParser.T__14) {
                            {
                                {
                                    this.state = 441;
                                    this.match(SolidityParser.T__14);
                                    this.state = 442;
                                    this.functionTypeParameter();
                                }
                            }
                            this.state = 447;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 450;
                this.match(SolidityParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.functionTypeParameter = function () {
        var _localctx = new FunctionTypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SolidityParser.RULE_functionTypeParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 452;
                this.typeName(0);
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0)) {
                    {
                        this.state = 453;
                        this.storageLocation();
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
    SolidityParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SolidityParser.RULE_variableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 456;
                this.typeName(0);
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0)) {
                    {
                        this.state = 457;
                        this.storageLocation();
                    }
                }
                this.state = 460;
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
    SolidityParser.prototype.typeName = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new TypeNameContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 62;
        this.enterRecursionRule(_localctx, 62, SolidityParser.RULE_typeName, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 467;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__47:
                    case SolidityParser.T__48:
                    case SolidityParser.T__49:
                    case SolidityParser.T__50:
                    case SolidityParser.T__51:
                    case SolidityParser.Int:
                    case SolidityParser.Uint:
                    case SolidityParser.Byte:
                    case SolidityParser.Fixed:
                    case SolidityParser.Ufixed:
                        {
                            this.state = 463;
                            this.elementaryTypeName();
                        }
                        break;
                    case SolidityParser.T__12:
                    case SolidityParser.Identifier:
                        {
                            this.state = 464;
                            this.userDefinedTypeName();
                        }
                        break;
                    case SolidityParser.T__34:
                        {
                            this.state = 465;
                            this.mapping();
                        }
                        break;
                    case SolidityParser.T__27:
                        {
                            this.state = 466;
                            this.functionTypeName();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 477;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeNameContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_typeName);
                                this.state = 469;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 470;
                                this.match(SolidityParser.T__31);
                                this.state = 472;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                                    {
                                        this.state = 471;
                                        this.expression(0);
                                    }
                                }
                                this.state = 474;
                                this.match(SolidityParser.T__32);
                            }
                        }
                    }
                    this.state = 479;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    SolidityParser.prototype.userDefinedTypeName = function () {
        var _localctx = new UserDefinedTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, SolidityParser.RULE_userDefinedTypeName);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 480;
                this.identifier();
                this.state = 485;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 481;
                                this.match(SolidityParser.T__33);
                                this.state = 482;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 487;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.mapping = function () {
        var _localctx = new MappingContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, SolidityParser.RULE_mapping);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 488;
                this.match(SolidityParser.T__34);
                this.state = 489;
                this.match(SolidityParser.T__20);
                this.state = 490;
                this.elementaryTypeName();
                this.state = 491;
                this.match(SolidityParser.T__35);
                this.state = 492;
                this.typeName(0);
                this.state = 493;
                this.match(SolidityParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.functionTypeName = function () {
        var _localctx = new FunctionTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, SolidityParser.RULE_functionTypeName);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this.match(SolidityParser.T__27);
                this.state = 496;
                this.functionTypeParameterList();
                this.state = 502;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 500;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SolidityParser.InternalKeyword:
                                    {
                                        this.state = 497;
                                        this.match(SolidityParser.InternalKeyword);
                                    }
                                    break;
                                case SolidityParser.ExternalKeyword:
                                    {
                                        this.state = 498;
                                        this.match(SolidityParser.ExternalKeyword);
                                    }
                                    break;
                                case SolidityParser.ConstantKeyword:
                                case SolidityParser.PayableKeyword:
                                case SolidityParser.PureKeyword:
                                case SolidityParser.ViewKeyword:
                                    {
                                        this.state = 499;
                                        this.stateMutability();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 504;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                }
                this.state = 507;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1:
                        {
                            this.state = 505;
                            this.match(SolidityParser.T__28);
                            this.state = 506;
                            this.functionTypeParameterList();
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
    SolidityParser.prototype.storageLocation = function () {
        var _localctx = new StorageLocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, SolidityParser.RULE_storageLocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 509;
                _la = this._input.LA(1);
                if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0))) {
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
    SolidityParser.prototype.stateMutability = function () {
        var _localctx = new StateMutabilityContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SolidityParser.RULE_stateMutability);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                _la = this._input.LA(1);
                if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.PayableKeyword - 105)) | (1 << (SolidityParser.PureKeyword - 105)) | (1 << (SolidityParser.ViewKeyword - 105)))) !== 0))) {
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
    SolidityParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SolidityParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this.match(SolidityParser.T__13);
                this.state = 517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__23) | (1 << SolidityParser.T__27))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__34 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__41 - 32)) | (1 << (SolidityParser.T__42 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__44 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__46 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.BreakKeyword - 91)) | (1 << (SolidityParser.ContinueKeyword - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                    {
                        {
                            this.state = 514;
                            this.statement();
                        }
                    }
                    this.state = 519;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 520;
                this.match(SolidityParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SolidityParser.RULE_statement);
        try {
            this.state = 534;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__39:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 522;
                        this.ifStatement();
                    }
                    break;
                case SolidityParser.T__41:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 523;
                        this.whileStatement();
                    }
                    break;
                case SolidityParser.T__23:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 524;
                        this.forStatement();
                    }
                    break;
                case SolidityParser.T__13:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 525;
                        this.block();
                    }
                    break;
                case SolidityParser.T__42:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 526;
                        this.inlineAssemblyStatement();
                    }
                    break;
                case SolidityParser.T__43:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 527;
                        this.doWhileStatement();
                    }
                    break;
                case SolidityParser.ContinueKeyword:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 528;
                        this.continueStatement();
                    }
                    break;
                case SolidityParser.BreakKeyword:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 529;
                        this.breakStatement();
                    }
                    break;
                case SolidityParser.T__44:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 530;
                        this.returnStatement();
                    }
                    break;
                case SolidityParser.T__45:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 531;
                        this.throwStatement();
                    }
                    break;
                case SolidityParser.T__46:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 532;
                        this.emitStatement();
                    }
                    break;
                case SolidityParser.T__3:
                case SolidityParser.T__12:
                case SolidityParser.T__20:
                case SolidityParser.T__27:
                case SolidityParser.T__31:
                case SolidityParser.T__34:
                case SolidityParser.T__47:
                case SolidityParser.T__48:
                case SolidityParser.T__49:
                case SolidityParser.T__50:
                case SolidityParser.T__51:
                case SolidityParser.T__52:
                case SolidityParser.T__53:
                case SolidityParser.T__54:
                case SolidityParser.T__55:
                case SolidityParser.T__56:
                case SolidityParser.T__57:
                case SolidityParser.T__58:
                case SolidityParser.T__59:
                case SolidityParser.Int:
                case SolidityParser.Uint:
                case SolidityParser.Byte:
                case SolidityParser.Fixed:
                case SolidityParser.Ufixed:
                case SolidityParser.BooleanLiteral:
                case SolidityParser.DecimalNumber:
                case SolidityParser.HexNumber:
                case SolidityParser.HexLiteral:
                case SolidityParser.Identifier:
                case SolidityParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 533;
                        this.simpleStatement();
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
    SolidityParser.prototype.expressionStatement = function () {
        var _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, SolidityParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 536;
                this.expression(0);
                this.state = 537;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SolidityParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 539;
                this.match(SolidityParser.T__39);
                this.state = 540;
                this.match(SolidityParser.T__20);
                this.state = 541;
                this.expression(0);
                this.state = 542;
                this.match(SolidityParser.T__21);
                this.state = 543;
                this.statement();
                this.state = 546;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                    case 1:
                        {
                            this.state = 544;
                            this.match(SolidityParser.T__40);
                            this.state = 545;
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
    SolidityParser.prototype.whileStatement = function () {
        var _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SolidityParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 548;
                this.match(SolidityParser.T__41);
                this.state = 549;
                this.match(SolidityParser.T__20);
                this.state = 550;
                this.expression(0);
                this.state = 551;
                this.match(SolidityParser.T__21);
                this.state = 552;
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
    SolidityParser.prototype.simpleStatement = function () {
        var _localctx = new SimpleStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SolidityParser.RULE_simpleStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 556;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                    case 1:
                        {
                            this.state = 554;
                            this.variableDeclarationStatement();
                        }
                        break;
                    case 2:
                        {
                            this.state = 555;
                            this.expressionStatement();
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
    SolidityParser.prototype.forStatement = function () {
        var _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SolidityParser.RULE_forStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 558;
                this.match(SolidityParser.T__23);
                this.state = 559;
                this.match(SolidityParser.T__20);
                this.state = 562;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__3:
                    case SolidityParser.T__12:
                    case SolidityParser.T__20:
                    case SolidityParser.T__27:
                    case SolidityParser.T__31:
                    case SolidityParser.T__34:
                    case SolidityParser.T__47:
                    case SolidityParser.T__48:
                    case SolidityParser.T__49:
                    case SolidityParser.T__50:
                    case SolidityParser.T__51:
                    case SolidityParser.T__52:
                    case SolidityParser.T__53:
                    case SolidityParser.T__54:
                    case SolidityParser.T__55:
                    case SolidityParser.T__56:
                    case SolidityParser.T__57:
                    case SolidityParser.T__58:
                    case SolidityParser.T__59:
                    case SolidityParser.Int:
                    case SolidityParser.Uint:
                    case SolidityParser.Byte:
                    case SolidityParser.Fixed:
                    case SolidityParser.Ufixed:
                    case SolidityParser.BooleanLiteral:
                    case SolidityParser.DecimalNumber:
                    case SolidityParser.HexNumber:
                    case SolidityParser.HexLiteral:
                    case SolidityParser.Identifier:
                    case SolidityParser.StringLiteral:
                        {
                            this.state = 560;
                            this.simpleStatement();
                        }
                        break;
                    case SolidityParser.T__1:
                        {
                            this.state = 561;
                            this.match(SolidityParser.T__1);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                    {
                        this.state = 564;
                        this.expression(0);
                    }
                }
                this.state = 567;
                this.match(SolidityParser.T__1);
                this.state = 569;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                    {
                        this.state = 568;
                        this.expression(0);
                    }
                }
                this.state = 571;
                this.match(SolidityParser.T__21);
                this.state = 572;
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
    SolidityParser.prototype.inlineAssemblyStatement = function () {
        var _localctx = new InlineAssemblyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, SolidityParser.RULE_inlineAssemblyStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 574;
                this.match(SolidityParser.T__42);
                this.state = 576;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.StringLiteral) {
                    {
                        this.state = 575;
                        this.match(SolidityParser.StringLiteral);
                    }
                }
                this.state = 578;
                this.assemblyBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.doWhileStatement = function () {
        var _localctx = new DoWhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SolidityParser.RULE_doWhileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                this.match(SolidityParser.T__43);
                this.state = 581;
                this.statement();
                this.state = 582;
                this.match(SolidityParser.T__41);
                this.state = 583;
                this.match(SolidityParser.T__20);
                this.state = 584;
                this.expression(0);
                this.state = 585;
                this.match(SolidityParser.T__21);
                this.state = 586;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.continueStatement = function () {
        var _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SolidityParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.match(SolidityParser.ContinueKeyword);
                this.state = 589;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.breakStatement = function () {
        var _localctx = new BreakStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, SolidityParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.match(SolidityParser.BreakKeyword);
                this.state = 592;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.returnStatement = function () {
        var _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, SolidityParser.RULE_returnStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 594;
                this.match(SolidityParser.T__44);
                this.state = 596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                    {
                        this.state = 595;
                        this.expression(0);
                    }
                }
                this.state = 598;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.throwStatement = function () {
        var _localctx = new ThrowStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, SolidityParser.RULE_throwStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this.match(SolidityParser.T__45);
                this.state = 601;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.emitStatement = function () {
        var _localctx = new EmitStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, SolidityParser.RULE_emitStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 603;
                this.match(SolidityParser.T__46);
                this.state = 604;
                this.functionCall();
                this.state = 605;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.variableDeclarationStatement = function () {
        var _localctx = new VariableDeclarationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, SolidityParser.RULE_variableDeclarationStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                    case 1:
                        {
                            this.state = 607;
                            this.match(SolidityParser.T__47);
                            this.state = 608;
                            this.identifierList();
                        }
                        break;
                    case 2:
                        {
                            this.state = 609;
                            this.variableDeclaration();
                        }
                        break;
                    case 3:
                        {
                            this.state = 610;
                            this.match(SolidityParser.T__20);
                            this.state = 611;
                            this.variableDeclarationList();
                            this.state = 612;
                            this.match(SolidityParser.T__21);
                        }
                        break;
                }
                this.state = 618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__8) {
                    {
                        this.state = 616;
                        this.match(SolidityParser.T__8);
                        this.state = 617;
                        this.expression(0);
                    }
                }
                this.state = 620;
                this.match(SolidityParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.variableDeclarationList = function () {
        var _localctx = new VariableDeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, SolidityParser.RULE_variableDeclarationList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 623;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                    {
                        this.state = 622;
                        this.variableDeclaration();
                    }
                }
                this.state = 631;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__14) {
                    {
                        {
                            this.state = 625;
                            this.match(SolidityParser.T__14);
                            this.state = 627;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
                                {
                                    this.state = 626;
                                    this.variableDeclaration();
                                }
                            }
                        }
                    }
                    this.state = 633;
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
    SolidityParser.prototype.identifierList = function () {
        var _localctx = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, SolidityParser.RULE_identifierList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 634;
                this.match(SolidityParser.T__20);
                this.state = 641;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 636;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                                    {
                                        this.state = 635;
                                        this.identifier();
                                    }
                                }
                                this.state = 638;
                                this.match(SolidityParser.T__14);
                            }
                        }
                    }
                    this.state = 643;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                }
                this.state = 645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    {
                        this.state = 644;
                        this.identifier();
                    }
                }
                this.state = 647;
                this.match(SolidityParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.elementaryTypeName = function () {
        var _localctx = new ElementaryTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, SolidityParser.RULE_elementaryTypeName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 649;
                _la = this._input.LA(1);
                if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__48 - 48)) | (1 << (SolidityParser.T__49 - 48)) | (1 << (SolidityParser.T__50 - 48)) | (1 << (SolidityParser.T__51 - 48)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)))) !== 0))) {
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
    SolidityParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 110;
        this.enterRecursionRule(_localctx, 110, SolidityParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                    case 1:
                        {
                            this.state = 652;
                            this.match(SolidityParser.T__54);
                            this.state = 653;
                            this.typeName(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 654;
                            this.match(SolidityParser.T__20);
                            this.state = 655;
                            this.expression(0);
                            this.state = 656;
                            this.match(SolidityParser.T__21);
                        }
                        break;
                    case 3:
                        {
                            this.state = 658;
                            _la = this._input.LA(1);
                            if (!(_la === SolidityParser.T__52 || _la === SolidityParser.T__53)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 659;
                            this.expression(19);
                        }
                        break;
                    case 4:
                        {
                            this.state = 660;
                            _la = this._input.LA(1);
                            if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 661;
                            this.expression(18);
                        }
                        break;
                    case 5:
                        {
                            this.state = 662;
                            _la = this._input.LA(1);
                            if (!(_la === SolidityParser.T__57 || _la === SolidityParser.T__58)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 663;
                            this.expression(17);
                        }
                        break;
                    case 6:
                        {
                            this.state = 664;
                            this.match(SolidityParser.T__59);
                            this.state = 665;
                            this.expression(16);
                        }
                        break;
                    case 7:
                        {
                            this.state = 666;
                            this.match(SolidityParser.T__3);
                            this.state = 667;
                            this.expression(15);
                        }
                        break;
                    case 8:
                        {
                            this.state = 668;
                            this.primaryExpression();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 730;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 728;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 671;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 672;
                                        this.match(SolidityParser.T__60);
                                        this.state = 673;
                                        this.expression(15);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 674;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 675;
                                        _la = this._input.LA(1);
                                        if (!(_la === SolidityParser.T__11 || _la === SolidityParser.T__61 || _la === SolidityParser.T__62)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 676;
                                        this.expression(14);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 677;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 678;
                                        _la = this._input.LA(1);
                                        if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 679;
                                        this.expression(13);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 680;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 681;
                                        _la = this._input.LA(1);
                                        if (!(_la === SolidityParser.T__63 || _la === SolidityParser.T__64)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 682;
                                        this.expression(12);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 683;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 684;
                                        this.match(SolidityParser.T__65);
                                        this.state = 685;
                                        this.expression(11);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 686;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 687;
                                        this.match(SolidityParser.T__2);
                                        this.state = 688;
                                        this.expression(10);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 689;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 690;
                                        this.match(SolidityParser.T__66);
                                        this.state = 691;
                                        this.expression(9);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 692;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 693;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 694;
                                        this.expression(8);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 695;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 696;
                                        _la = this._input.LA(1);
                                        if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 697;
                                        this.expression(7);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 698;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 699;
                                        this.match(SolidityParser.T__69);
                                        this.state = 700;
                                        this.expression(6);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 701;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 702;
                                        this.match(SolidityParser.T__70);
                                        this.state = 703;
                                        this.expression(5);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 704;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 705;
                                        this.match(SolidityParser.T__71);
                                        this.state = 706;
                                        this.expression(0);
                                        this.state = 707;
                                        this.match(SolidityParser.T__72);
                                        this.state = 708;
                                        this.expression(4);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 710;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 711;
                                        _la = this._input.LA(1);
                                        if (!(_la === SolidityParser.T__8 || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SolidityParser.T__73 - 74)) | (1 << (SolidityParser.T__74 - 74)) | (1 << (SolidityParser.T__75 - 74)) | (1 << (SolidityParser.T__76 - 74)) | (1 << (SolidityParser.T__77 - 74)) | (1 << (SolidityParser.T__78 - 74)) | (1 << (SolidityParser.T__79 - 74)) | (1 << (SolidityParser.T__80 - 74)) | (1 << (SolidityParser.T__81 - 74)) | (1 << (SolidityParser.T__82 - 74)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 712;
                                        this.expression(3);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 713;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 714;
                                        _la = this._input.LA(1);
                                        if (!(_la === SolidityParser.T__52 || _la === SolidityParser.T__53)) {
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
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 715;
                                        if (!(this.precpred(this._ctx, 23))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                                        }
                                        this.state = 716;
                                        this.match(SolidityParser.T__31);
                                        this.state = 717;
                                        this.expression(0);
                                        this.state = 718;
                                        this.match(SolidityParser.T__32);
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 720;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                                        }
                                        this.state = 721;
                                        this.match(SolidityParser.T__20);
                                        this.state = 722;
                                        this.functionCallArguments();
                                        this.state = 723;
                                        this.match(SolidityParser.T__21);
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
                                        this.state = 725;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 726;
                                        this.match(SolidityParser.T__33);
                                        this.state = 727;
                                        this.identifier();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 732;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.primaryExpression = function () {
        var _localctx = new PrimaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, SolidityParser.RULE_primaryExpression);
        try {
            this.state = 740;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 733;
                        this.match(SolidityParser.BooleanLiteral);
                    }
                    break;
                case SolidityParser.DecimalNumber:
                case SolidityParser.HexNumber:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 734;
                        this.numberLiteral();
                    }
                    break;
                case SolidityParser.HexLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 735;
                        this.match(SolidityParser.HexLiteral);
                    }
                    break;
                case SolidityParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 736;
                        this.match(SolidityParser.StringLiteral);
                    }
                    break;
                case SolidityParser.T__12:
                case SolidityParser.Identifier:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 737;
                        this.identifier();
                    }
                    break;
                case SolidityParser.T__20:
                case SolidityParser.T__31:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 738;
                        this.tupleExpression();
                    }
                    break;
                case SolidityParser.T__47:
                case SolidityParser.T__48:
                case SolidityParser.T__49:
                case SolidityParser.T__50:
                case SolidityParser.T__51:
                case SolidityParser.Int:
                case SolidityParser.Uint:
                case SolidityParser.Byte:
                case SolidityParser.Fixed:
                case SolidityParser.Ufixed:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 739;
                        this.elementaryTypeNameExpression();
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
    SolidityParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, SolidityParser.RULE_expressionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 742;
                this.expression(0);
                this.state = 747;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__14) {
                    {
                        {
                            this.state = 743;
                            this.match(SolidityParser.T__14);
                            this.state = 744;
                            this.expression(0);
                        }
                    }
                    this.state = 749;
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
    SolidityParser.prototype.nameValueList = function () {
        var _localctx = new NameValueListContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, SolidityParser.RULE_nameValueList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 750;
                this.nameValue();
                this.state = 755;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 751;
                                this.match(SolidityParser.T__14);
                                this.state = 752;
                                this.nameValue();
                            }
                        }
                    }
                    this.state = 757;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                }
                this.state = 759;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__14) {
                    {
                        this.state = 758;
                        this.match(SolidityParser.T__14);
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
    SolidityParser.prototype.nameValue = function () {
        var _localctx = new NameValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, SolidityParser.RULE_nameValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 761;
                this.identifier();
                this.state = 762;
                this.match(SolidityParser.T__72);
                this.state = 763;
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
    SolidityParser.prototype.functionCallArguments = function () {
        var _localctx = new FunctionCallArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, SolidityParser.RULE_functionCallArguments);
        var _la;
        try {
            this.state = 773;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__13:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 765;
                        this.match(SolidityParser.T__13);
                        this.state = 767;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                            {
                                this.state = 766;
                                this.nameValueList();
                            }
                        }
                        this.state = 769;
                        this.match(SolidityParser.T__15);
                    }
                    break;
                case SolidityParser.T__3:
                case SolidityParser.T__12:
                case SolidityParser.T__20:
                case SolidityParser.T__21:
                case SolidityParser.T__31:
                case SolidityParser.T__47:
                case SolidityParser.T__48:
                case SolidityParser.T__49:
                case SolidityParser.T__50:
                case SolidityParser.T__51:
                case SolidityParser.T__52:
                case SolidityParser.T__53:
                case SolidityParser.T__54:
                case SolidityParser.T__55:
                case SolidityParser.T__56:
                case SolidityParser.T__57:
                case SolidityParser.T__58:
                case SolidityParser.T__59:
                case SolidityParser.Int:
                case SolidityParser.Uint:
                case SolidityParser.Byte:
                case SolidityParser.Fixed:
                case SolidityParser.Ufixed:
                case SolidityParser.BooleanLiteral:
                case SolidityParser.DecimalNumber:
                case SolidityParser.HexNumber:
                case SolidityParser.HexLiteral:
                case SolidityParser.Identifier:
                case SolidityParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 771;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                            {
                                this.state = 770;
                                this.expressionList();
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
    SolidityParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, SolidityParser.RULE_functionCall);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 775;
                this.expression(0);
                this.state = 776;
                this.match(SolidityParser.T__20);
                this.state = 777;
                this.functionCallArguments();
                this.state = 778;
                this.match(SolidityParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblyBlock = function () {
        var _localctx = new AssemblyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, SolidityParser.RULE_assemblyBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 780;
                this.match(SolidityParser.T__13);
                this.state = 784;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__23) | (1 << SolidityParser.T__27))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SolidityParser.T__39 - 40)) | (1 << (SolidityParser.T__42 - 40)) | (1 << (SolidityParser.T__44 - 40)) | (1 << (SolidityParser.T__48 - 40)) | (1 << (SolidityParser.T__51 - 40)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (SolidityParser.T__83 - 84)) | (1 << (SolidityParser.T__85 - 84)) | (1 << (SolidityParser.T__86 - 84)) | (1 << (SolidityParser.DecimalNumber - 84)) | (1 << (SolidityParser.HexNumber - 84)) | (1 << (SolidityParser.HexLiteral - 84)) | (1 << (SolidityParser.BreakKeyword - 84)) | (1 << (SolidityParser.ContinueKeyword - 84)) | (1 << (SolidityParser.Identifier - 84)))) !== 0) || _la === SolidityParser.StringLiteral) {
                    {
                        {
                            this.state = 781;
                            this.assemblyItem();
                        }
                    }
                    this.state = 786;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 787;
                this.match(SolidityParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblyItem = function () {
        var _localctx = new AssemblyItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, SolidityParser.RULE_assemblyItem);
        try {
            this.state = 806;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 789;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 790;
                        this.assemblyBlock();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 791;
                        this.assemblyExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 792;
                        this.assemblyLocalDefinition();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 793;
                        this.assemblyAssignment();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 794;
                        this.assemblyStackAssignment();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 795;
                        this.labelDefinition();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 796;
                        this.assemblySwitch();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 797;
                        this.assemblyFunctionDefinition();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 798;
                        this.assemblyFor();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 799;
                        this.assemblyIf();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 800;
                        this.match(SolidityParser.BreakKeyword);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 801;
                        this.match(SolidityParser.ContinueKeyword);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 802;
                        this.subAssembly();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 803;
                        this.numberLiteral();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 804;
                        this.match(SolidityParser.StringLiteral);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 805;
                        this.match(SolidityParser.HexLiteral);
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
    SolidityParser.prototype.assemblyExpression = function () {
        var _localctx = new AssemblyExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, SolidityParser.RULE_assemblyExpression);
        try {
            this.state = 810;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__12:
                case SolidityParser.T__44:
                case SolidityParser.T__48:
                case SolidityParser.T__51:
                case SolidityParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 808;
                        this.assemblyCall();
                    }
                    break;
                case SolidityParser.DecimalNumber:
                case SolidityParser.HexNumber:
                case SolidityParser.HexLiteral:
                case SolidityParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 809;
                        this.assemblyLiteral();
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
    SolidityParser.prototype.assemblyCall = function () {
        var _localctx = new AssemblyCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, SolidityParser.RULE_assemblyCall);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__44:
                        {
                            this.state = 812;
                            this.match(SolidityParser.T__44);
                        }
                        break;
                    case SolidityParser.T__48:
                        {
                            this.state = 813;
                            this.match(SolidityParser.T__48);
                        }
                        break;
                    case SolidityParser.T__51:
                        {
                            this.state = 814;
                            this.match(SolidityParser.T__51);
                        }
                        break;
                    case SolidityParser.T__12:
                    case SolidityParser.Identifier:
                        {
                            this.state = 815;
                            this.identifier();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 830;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                    case 1:
                        {
                            this.state = 818;
                            this.match(SolidityParser.T__20);
                            this.state = 820;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SolidityParser.T__12 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (SolidityParser.T__44 - 45)) | (1 << (SolidityParser.T__48 - 45)) | (1 << (SolidityParser.T__51 - 45)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SolidityParser.DecimalNumber - 98)) | (1 << (SolidityParser.HexNumber - 98)) | (1 << (SolidityParser.HexLiteral - 98)) | (1 << (SolidityParser.Identifier - 98)) | (1 << (SolidityParser.StringLiteral - 98)))) !== 0)) {
                                {
                                    this.state = 819;
                                    this.assemblyExpression();
                                }
                            }
                            this.state = 826;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SolidityParser.T__14) {
                                {
                                    {
                                        this.state = 822;
                                        this.match(SolidityParser.T__14);
                                        this.state = 823;
                                        this.assemblyExpression();
                                    }
                                }
                                this.state = 828;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 829;
                            this.match(SolidityParser.T__21);
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
    SolidityParser.prototype.assemblyLocalDefinition = function () {
        var _localctx = new AssemblyLocalDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, SolidityParser.RULE_assemblyLocalDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 832;
                this.match(SolidityParser.T__83);
                this.state = 833;
                this.assemblyIdentifierOrList();
                this.state = 836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__84) {
                    {
                        this.state = 834;
                        this.match(SolidityParser.T__84);
                        this.state = 835;
                        this.assemblyExpression();
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
    SolidityParser.prototype.assemblyAssignment = function () {
        var _localctx = new AssemblyAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, SolidityParser.RULE_assemblyAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 838;
                this.assemblyIdentifierOrList();
                this.state = 839;
                this.match(SolidityParser.T__84);
                this.state = 840;
                this.assemblyExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblyIdentifierOrList = function () {
        var _localctx = new AssemblyIdentifierOrListContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, SolidityParser.RULE_assemblyIdentifierOrList);
        try {
            this.state = 847;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__12:
                case SolidityParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 842;
                        this.identifier();
                    }
                    break;
                case SolidityParser.T__20:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 843;
                        this.match(SolidityParser.T__20);
                        this.state = 844;
                        this.assemblyIdentifierList();
                        this.state = 845;
                        this.match(SolidityParser.T__21);
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
    SolidityParser.prototype.assemblyIdentifierList = function () {
        var _localctx = new AssemblyIdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, SolidityParser.RULE_assemblyIdentifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 849;
                this.identifier();
                this.state = 854;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__14) {
                    {
                        {
                            this.state = 850;
                            this.match(SolidityParser.T__14);
                            this.state = 851;
                            this.identifier();
                        }
                    }
                    this.state = 856;
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
    SolidityParser.prototype.assemblyStackAssignment = function () {
        var _localctx = new AssemblyStackAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, SolidityParser.RULE_assemblyStackAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 857;
                this.match(SolidityParser.T__85);
                this.state = 858;
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
    SolidityParser.prototype.labelDefinition = function () {
        var _localctx = new LabelDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, SolidityParser.RULE_labelDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 860;
                this.identifier();
                this.state = 861;
                this.match(SolidityParser.T__72);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblySwitch = function () {
        var _localctx = new AssemblySwitchContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, SolidityParser.RULE_assemblySwitch);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 863;
                this.match(SolidityParser.T__86);
                this.state = 864;
                this.assemblyExpression();
                this.state = 868;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__87 || _la === SolidityParser.T__88) {
                    {
                        {
                            this.state = 865;
                            this.assemblyCase();
                        }
                    }
                    this.state = 870;
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
    SolidityParser.prototype.assemblyCase = function () {
        var _localctx = new AssemblyCaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, SolidityParser.RULE_assemblyCase);
        try {
            this.state = 877;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__87:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 871;
                        this.match(SolidityParser.T__87);
                        this.state = 872;
                        this.assemblyLiteral();
                        this.state = 873;
                        this.assemblyBlock();
                    }
                    break;
                case SolidityParser.T__88:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 875;
                        this.match(SolidityParser.T__88);
                        this.state = 876;
                        this.assemblyBlock();
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
    SolidityParser.prototype.assemblyFunctionDefinition = function () {
        var _localctx = new AssemblyFunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, SolidityParser.RULE_assemblyFunctionDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 879;
                this.match(SolidityParser.T__27);
                this.state = 880;
                this.identifier();
                this.state = 881;
                this.match(SolidityParser.T__20);
                this.state = 883;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    {
                        this.state = 882;
                        this.assemblyIdentifierList();
                    }
                }
                this.state = 885;
                this.match(SolidityParser.T__21);
                this.state = 887;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__89) {
                    {
                        this.state = 886;
                        this.assemblyFunctionReturns();
                    }
                }
                this.state = 889;
                this.assemblyBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblyFunctionReturns = function () {
        var _localctx = new AssemblyFunctionReturnsContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, SolidityParser.RULE_assemblyFunctionReturns);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 891;
                    this.match(SolidityParser.T__89);
                    this.state = 892;
                    this.assemblyIdentifierList();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblyFor = function () {
        var _localctx = new AssemblyForContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, SolidityParser.RULE_assemblyFor);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 894;
                this.match(SolidityParser.T__23);
                this.state = 897;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__13:
                        {
                            this.state = 895;
                            this.assemblyBlock();
                        }
                        break;
                    case SolidityParser.T__12:
                    case SolidityParser.T__44:
                    case SolidityParser.T__48:
                    case SolidityParser.T__51:
                    case SolidityParser.DecimalNumber:
                    case SolidityParser.HexNumber:
                    case SolidityParser.HexLiteral:
                    case SolidityParser.Identifier:
                    case SolidityParser.StringLiteral:
                        {
                            this.state = 896;
                            this.assemblyExpression();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 899;
                this.assemblyExpression();
                this.state = 902;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__13:
                        {
                            this.state = 900;
                            this.assemblyBlock();
                        }
                        break;
                    case SolidityParser.T__12:
                    case SolidityParser.T__44:
                    case SolidityParser.T__48:
                    case SolidityParser.T__51:
                    case SolidityParser.DecimalNumber:
                    case SolidityParser.HexNumber:
                    case SolidityParser.HexLiteral:
                    case SolidityParser.Identifier:
                    case SolidityParser.StringLiteral:
                        {
                            this.state = 901;
                            this.assemblyExpression();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 904;
                this.assemblyBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblyIf = function () {
        var _localctx = new AssemblyIfContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, SolidityParser.RULE_assemblyIf);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 906;
                this.match(SolidityParser.T__39);
                this.state = 907;
                this.assemblyExpression();
                this.state = 908;
                this.assemblyBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.assemblyLiteral = function () {
        var _localctx = new AssemblyLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, SolidityParser.RULE_assemblyLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 910;
                _la = this._input.LA(1);
                if (!(((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SolidityParser.DecimalNumber - 98)) | (1 << (SolidityParser.HexNumber - 98)) | (1 << (SolidityParser.HexLiteral - 98)) | (1 << (SolidityParser.StringLiteral - 98)))) !== 0))) {
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
    SolidityParser.prototype.subAssembly = function () {
        var _localctx = new SubAssemblyContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, SolidityParser.RULE_subAssembly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 912;
                this.match(SolidityParser.T__42);
                this.state = 913;
                this.identifier();
                this.state = 914;
                this.assemblyBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.tupleExpression = function () {
        var _localctx = new TupleExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, SolidityParser.RULE_tupleExpression);
        var _la;
        try {
            this.state = 942;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__20:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 916;
                        this.match(SolidityParser.T__20);
                        {
                            this.state = 918;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                                {
                                    this.state = 917;
                                    this.expression(0);
                                }
                            }
                            this.state = 926;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SolidityParser.T__14) {
                                {
                                    {
                                        this.state = 920;
                                        this.match(SolidityParser.T__14);
                                        this.state = 922;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                                            {
                                                this.state = 921;
                                                this.expression(0);
                                            }
                                        }
                                    }
                                }
                                this.state = 928;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        this.state = 929;
                        this.match(SolidityParser.T__21);
                    }
                    break;
                case SolidityParser.T__31:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 930;
                        this.match(SolidityParser.T__31);
                        this.state = 939;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
                            {
                                this.state = 931;
                                this.expression(0);
                                this.state = 936;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === SolidityParser.T__14) {
                                    {
                                        {
                                            this.state = 932;
                                            this.match(SolidityParser.T__14);
                                            this.state = 933;
                                            this.expression(0);
                                        }
                                    }
                                    this.state = 938;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 941;
                        this.match(SolidityParser.T__32);
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
    SolidityParser.prototype.elementaryTypeNameExpression = function () {
        var _localctx = new ElementaryTypeNameExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, SolidityParser.RULE_elementaryTypeNameExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 944;
                this.elementaryTypeName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SolidityParser.prototype.numberLiteral = function () {
        var _localctx = new NumberLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, SolidityParser.RULE_numberLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 946;
                _la = this._input.LA(1);
                if (!(_la === SolidityParser.DecimalNumber || _la === SolidityParser.HexNumber)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 948;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 947;
                            this.match(SolidityParser.NumberUnit);
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
    SolidityParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, SolidityParser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 950;
                _la = this._input.LA(1);
                if (!(_la === SolidityParser.T__12 || _la === SolidityParser.Identifier)) {
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
    SolidityParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 31:
                return this.typeName_sempred(_localctx, predIndex);
            case 55:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    SolidityParser.prototype.typeName_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    SolidityParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 14);
            case 2:
                return this.precpred(this._ctx, 13);
            case 3:
                return this.precpred(this._ctx, 12);
            case 4:
                return this.precpred(this._ctx, 11);
            case 5:
                return this.precpred(this._ctx, 10);
            case 6:
                return this.precpred(this._ctx, 9);
            case 7:
                return this.precpred(this._ctx, 8);
            case 8:
                return this.precpred(this._ctx, 7);
            case 9:
                return this.precpred(this._ctx, 6);
            case 10:
                return this.precpred(this._ctx, 5);
            case 11:
                return this.precpred(this._ctx, 4);
            case 12:
                return this.precpred(this._ctx, 3);
            case 13:
                return this.precpred(this._ctx, 2);
            case 14:
                return this.precpred(this._ctx, 25);
            case 15:
                return this.precpred(this._ctx, 23);
            case 16:
                return this.precpred(this._ctx, 22);
            case 17:
                return this.precpred(this._ctx, 21);
        }
        return true;
    };
    Object.defineProperty(SolidityParser, "_ATN", {
        get: function () {
            if (!SolidityParser.__ATN) {
                SolidityParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SolidityParser._serializedATN));
            }
            return SolidityParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SolidityParser.T__0 = 1;
    SolidityParser.T__1 = 2;
    SolidityParser.T__2 = 3;
    SolidityParser.T__3 = 4;
    SolidityParser.T__4 = 5;
    SolidityParser.T__5 = 6;
    SolidityParser.T__6 = 7;
    SolidityParser.T__7 = 8;
    SolidityParser.T__8 = 9;
    SolidityParser.T__9 = 10;
    SolidityParser.T__10 = 11;
    SolidityParser.T__11 = 12;
    SolidityParser.T__12 = 13;
    SolidityParser.T__13 = 14;
    SolidityParser.T__14 = 15;
    SolidityParser.T__15 = 16;
    SolidityParser.T__16 = 17;
    SolidityParser.T__17 = 18;
    SolidityParser.T__18 = 19;
    SolidityParser.T__19 = 20;
    SolidityParser.T__20 = 21;
    SolidityParser.T__21 = 22;
    SolidityParser.T__22 = 23;
    SolidityParser.T__23 = 24;
    SolidityParser.T__24 = 25;
    SolidityParser.T__25 = 26;
    SolidityParser.T__26 = 27;
    SolidityParser.T__27 = 28;
    SolidityParser.T__28 = 29;
    SolidityParser.T__29 = 30;
    SolidityParser.T__30 = 31;
    SolidityParser.T__31 = 32;
    SolidityParser.T__32 = 33;
    SolidityParser.T__33 = 34;
    SolidityParser.T__34 = 35;
    SolidityParser.T__35 = 36;
    SolidityParser.T__36 = 37;
    SolidityParser.T__37 = 38;
    SolidityParser.T__38 = 39;
    SolidityParser.T__39 = 40;
    SolidityParser.T__40 = 41;
    SolidityParser.T__41 = 42;
    SolidityParser.T__42 = 43;
    SolidityParser.T__43 = 44;
    SolidityParser.T__44 = 45;
    SolidityParser.T__45 = 46;
    SolidityParser.T__46 = 47;
    SolidityParser.T__47 = 48;
    SolidityParser.T__48 = 49;
    SolidityParser.T__49 = 50;
    SolidityParser.T__50 = 51;
    SolidityParser.T__51 = 52;
    SolidityParser.T__52 = 53;
    SolidityParser.T__53 = 54;
    SolidityParser.T__54 = 55;
    SolidityParser.T__55 = 56;
    SolidityParser.T__56 = 57;
    SolidityParser.T__57 = 58;
    SolidityParser.T__58 = 59;
    SolidityParser.T__59 = 60;
    SolidityParser.T__60 = 61;
    SolidityParser.T__61 = 62;
    SolidityParser.T__62 = 63;
    SolidityParser.T__63 = 64;
    SolidityParser.T__64 = 65;
    SolidityParser.T__65 = 66;
    SolidityParser.T__66 = 67;
    SolidityParser.T__67 = 68;
    SolidityParser.T__68 = 69;
    SolidityParser.T__69 = 70;
    SolidityParser.T__70 = 71;
    SolidityParser.T__71 = 72;
    SolidityParser.T__72 = 73;
    SolidityParser.T__73 = 74;
    SolidityParser.T__74 = 75;
    SolidityParser.T__75 = 76;
    SolidityParser.T__76 = 77;
    SolidityParser.T__77 = 78;
    SolidityParser.T__78 = 79;
    SolidityParser.T__79 = 80;
    SolidityParser.T__80 = 81;
    SolidityParser.T__81 = 82;
    SolidityParser.T__82 = 83;
    SolidityParser.T__83 = 84;
    SolidityParser.T__84 = 85;
    SolidityParser.T__85 = 86;
    SolidityParser.T__86 = 87;
    SolidityParser.T__87 = 88;
    SolidityParser.T__88 = 89;
    SolidityParser.T__89 = 90;
    SolidityParser.Int = 91;
    SolidityParser.Uint = 92;
    SolidityParser.Byte = 93;
    SolidityParser.Fixed = 94;
    SolidityParser.Ufixed = 95;
    SolidityParser.VersionLiteral = 96;
    SolidityParser.BooleanLiteral = 97;
    SolidityParser.DecimalNumber = 98;
    SolidityParser.HexNumber = 99;
    SolidityParser.NumberUnit = 100;
    SolidityParser.HexLiteral = 101;
    SolidityParser.ReservedKeyword = 102;
    SolidityParser.AnonymousKeyword = 103;
    SolidityParser.BreakKeyword = 104;
    SolidityParser.ConstantKeyword = 105;
    SolidityParser.ContinueKeyword = 106;
    SolidityParser.ExternalKeyword = 107;
    SolidityParser.IndexedKeyword = 108;
    SolidityParser.InternalKeyword = 109;
    SolidityParser.PayableKeyword = 110;
    SolidityParser.PrivateKeyword = 111;
    SolidityParser.PublicKeyword = 112;
    SolidityParser.PureKeyword = 113;
    SolidityParser.ViewKeyword = 114;
    SolidityParser.Identifier = 115;
    SolidityParser.StringLiteral = 116;
    SolidityParser.WS = 117;
    SolidityParser.COMMENT = 118;
    SolidityParser.LINE_COMMENT = 119;
    SolidityParser.RULE_sourceUnit = 0;
    SolidityParser.RULE_pragmaDirective = 1;
    SolidityParser.RULE_pragmaName = 2;
    SolidityParser.RULE_pragmaValue = 3;
    SolidityParser.RULE_version = 4;
    SolidityParser.RULE_versionOperator = 5;
    SolidityParser.RULE_versionConstraint = 6;
    SolidityParser.RULE_importDeclaration = 7;
    SolidityParser.RULE_importDirective = 8;
    SolidityParser.RULE_contractDefinition = 9;
    SolidityParser.RULE_inheritanceSpecifier = 10;
    SolidityParser.RULE_contractPart = 11;
    SolidityParser.RULE_stateVariableDeclaration = 12;
    SolidityParser.RULE_usingForDeclaration = 13;
    SolidityParser.RULE_structDefinition = 14;
    SolidityParser.RULE_constructorDefinition = 15;
    SolidityParser.RULE_modifierDefinition = 16;
    SolidityParser.RULE_modifierInvocation = 17;
    SolidityParser.RULE_functionDefinition = 18;
    SolidityParser.RULE_returnParameters = 19;
    SolidityParser.RULE_modifierList = 20;
    SolidityParser.RULE_eventDefinition = 21;
    SolidityParser.RULE_enumValue = 22;
    SolidityParser.RULE_enumDefinition = 23;
    SolidityParser.RULE_parameterList = 24;
    SolidityParser.RULE_parameter = 25;
    SolidityParser.RULE_eventParameterList = 26;
    SolidityParser.RULE_eventParameter = 27;
    SolidityParser.RULE_functionTypeParameterList = 28;
    SolidityParser.RULE_functionTypeParameter = 29;
    SolidityParser.RULE_variableDeclaration = 30;
    SolidityParser.RULE_typeName = 31;
    SolidityParser.RULE_userDefinedTypeName = 32;
    SolidityParser.RULE_mapping = 33;
    SolidityParser.RULE_functionTypeName = 34;
    SolidityParser.RULE_storageLocation = 35;
    SolidityParser.RULE_stateMutability = 36;
    SolidityParser.RULE_block = 37;
    SolidityParser.RULE_statement = 38;
    SolidityParser.RULE_expressionStatement = 39;
    SolidityParser.RULE_ifStatement = 40;
    SolidityParser.RULE_whileStatement = 41;
    SolidityParser.RULE_simpleStatement = 42;
    SolidityParser.RULE_forStatement = 43;
    SolidityParser.RULE_inlineAssemblyStatement = 44;
    SolidityParser.RULE_doWhileStatement = 45;
    SolidityParser.RULE_continueStatement = 46;
    SolidityParser.RULE_breakStatement = 47;
    SolidityParser.RULE_returnStatement = 48;
    SolidityParser.RULE_throwStatement = 49;
    SolidityParser.RULE_emitStatement = 50;
    SolidityParser.RULE_variableDeclarationStatement = 51;
    SolidityParser.RULE_variableDeclarationList = 52;
    SolidityParser.RULE_identifierList = 53;
    SolidityParser.RULE_elementaryTypeName = 54;
    SolidityParser.RULE_expression = 55;
    SolidityParser.RULE_primaryExpression = 56;
    SolidityParser.RULE_expressionList = 57;
    SolidityParser.RULE_nameValueList = 58;
    SolidityParser.RULE_nameValue = 59;
    SolidityParser.RULE_functionCallArguments = 60;
    SolidityParser.RULE_functionCall = 61;
    SolidityParser.RULE_assemblyBlock = 62;
    SolidityParser.RULE_assemblyItem = 63;
    SolidityParser.RULE_assemblyExpression = 64;
    SolidityParser.RULE_assemblyCall = 65;
    SolidityParser.RULE_assemblyLocalDefinition = 66;
    SolidityParser.RULE_assemblyAssignment = 67;
    SolidityParser.RULE_assemblyIdentifierOrList = 68;
    SolidityParser.RULE_assemblyIdentifierList = 69;
    SolidityParser.RULE_assemblyStackAssignment = 70;
    SolidityParser.RULE_labelDefinition = 71;
    SolidityParser.RULE_assemblySwitch = 72;
    SolidityParser.RULE_assemblyCase = 73;
    SolidityParser.RULE_assemblyFunctionDefinition = 74;
    SolidityParser.RULE_assemblyFunctionReturns = 75;
    SolidityParser.RULE_assemblyFor = 76;
    SolidityParser.RULE_assemblyIf = 77;
    SolidityParser.RULE_assemblyLiteral = 78;
    SolidityParser.RULE_subAssembly = 79;
    SolidityParser.RULE_tupleExpression = 80;
    SolidityParser.RULE_elementaryTypeNameExpression = 81;
    SolidityParser.RULE_numberLiteral = 82;
    SolidityParser.RULE_identifier = 83;
    // tslint:disable:no-trailing-whitespace
    SolidityParser.ruleNames = [
        "sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version",
        "versionOperator", "versionConstraint", "importDeclaration", "importDirective",
        "contractDefinition", "inheritanceSpecifier", "contractPart", "stateVariableDeclaration",
        "usingForDeclaration", "structDefinition", "constructorDefinition", "modifierDefinition",
        "modifierInvocation", "functionDefinition", "returnParameters", "modifierList",
        "eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter",
        "eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter",
        "variableDeclaration", "typeName", "userDefinedTypeName", "mapping", "functionTypeName",
        "storageLocation", "stateMutability", "block", "statement", "expressionStatement",
        "ifStatement", "whileStatement", "simpleStatement", "forStatement", "inlineAssemblyStatement",
        "doWhileStatement", "continueStatement", "breakStatement", "returnStatement",
        "throwStatement", "emitStatement", "variableDeclarationStatement", "variableDeclarationList",
        "identifierList", "elementaryTypeName", "expression", "primaryExpression",
        "expressionList", "nameValueList", "nameValue", "functionCallArguments",
        "functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression",
        "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", "assemblyIdentifierOrList",
        "assemblyIdentifierList", "assemblyStackAssignment", "labelDefinition",
        "assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", "assemblyFunctionReturns",
        "assemblyFor", "assemblyIf", "assemblyLiteral", "subAssembly", "tupleExpression",
        "elementaryTypeNameExpression", "numberLiteral", "identifier",
    ];
    SolidityParser._LITERAL_NAMES = [
        undefined, "'pragma'", "';'", "'^'", "'~'", "'>='", "'>'", "'<'", "'<='",
        "'='", "'as'", "'import'", "'*'", "'from'", "'{'", "','", "'}'", "'contract'",
        "'interface'", "'library'", "'is'", "'('", "')'", "'using'", "'for'",
        "'struct'", "'constructor'", "'modifier'", "'function'", "'returns'",
        "'event'", "'enum'", "'['", "']'", "'.'", "'mapping'", "'=>'", "'memory'",
        "'storage'", "'calldata'", "'if'", "'else'", "'while'", "'assembly'",
        "'do'", "'return'", "'throw'", "'emit'", "'var'", "'address'", "'bool'",
        "'string'", "'byte'", "'++'", "'--'", "'new'", "'+'", "'-'", "'after'",
        "'delete'", "'!'", "'**'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'",
        "'=='", "'!='", "'&&'", "'||'", "'?'", "':'", "'|='", "'^='", "'&='",
        "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'let'", "':='",
        "'=:'", "'switch'", "'case'", "'default'", "'->'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'anonymous'", "'break'", "'constant'",
        "'continue'", "'external'", "'indexed'", "'internal'", "'payable'", "'private'",
        "'public'", "'pure'", "'view'",
    ];
    SolidityParser._SYMBOLIC_NAMES = [
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
        "Int", "Uint", "Byte", "Fixed", "Ufixed", "VersionLiteral", "BooleanLiteral",
        "DecimalNumber", "HexNumber", "NumberUnit", "HexLiteral", "ReservedKeyword",
        "AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "ContinueKeyword",
        "ExternalKeyword", "IndexedKeyword", "InternalKeyword", "PayableKeyword",
        "PrivateKeyword", "PublicKeyword", "PureKeyword", "ViewKeyword", "Identifier",
        "StringLiteral", "WS", "COMMENT", "LINE_COMMENT",
    ];
    SolidityParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SolidityParser._LITERAL_NAMES, SolidityParser._SYMBOLIC_NAMES, []);
    SolidityParser._serializedATNSegments = 2;
    SolidityParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03y\u03BB\x04\x02" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x03" +
        "\x02\x07\x02\xAE\n\x02\f\x02\x0E\x02\xB1\v\x02\x03\x02\x03\x02\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05" +
        "\xBE\n\x05\x03\x06\x03\x06\x05\x06\xC2\n\x06\x03\x07\x03\x07\x03\b\x05" +
        "\b\xC7\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xCE\n\t\x03\n\x03\n\x03" +
        "\n\x03\n\x05\n\xD4\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\xDA\n\n\x03\n\x03" +
        "\n\x05\n\xDE\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n" +
        "\xE8\n\n\f\n\x0E\n\xEB\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xF2\n\n" +
        "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xFA\n\v\f\v\x0E\v\xFD\v\v\x05" +
        "\v\xFF\n\v\x03\v\x03\v\x07\v\u0103\n\v\f\v\x0E\v\u0106\v\v\x03\v\x03\v" +
        "\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u010F\n\f\f\f\x0E\f\u0112\v\f\x03" +
        "\f\x03\f\x05\f\u0116\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x05\r\u0120\n\r\x03\x0E\x03\x0E\x07\x0E\u0124\n\x0E\f\x0E\x0E\x0E\u0127" +
        "\v\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u012C\n\x0E\x03\x0E\x03\x0E\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0135\n\x0F\x03\x0F\x03\x0F" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10" +
        "\u0141\n\x10\f\x10\x0E\x10\u0144\v\x10\x05\x10\u0146\n\x10\x03\x10\x03" +
        "\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05" +
        "\x12\u0152\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0159" +
        "\n\x13\x03\x13\x05\x13\u015C\n\x13\x03\x14\x03\x14\x05\x14\u0160\n\x14" +
        "\x03\x14\x03\x14\x03\x14\x05\x14\u0165\n\x14\x03\x14\x03\x14\x05\x14\u0169" +
        "\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x07\x16\u0174\n\x16\f\x16\x0E\x16\u0177\v\x16\x03\x17\x03\x17" +
        "\x03\x17\x03\x17\x05\x17\u017D\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0187\n\x19\x03\x19\x03\x19\x07\x19" +
        "\u018B\n\x19\f\x19\x0E\x19\u018E\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x07\x1A\u0196\n\x1A\f\x1A\x0E\x1A\u0199\v\x1A\x05\x1A" +
        "\u019B\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u01A1\n\x1B\x03\x1B" +
        "\x05\x1B\u01A4\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u01AA\n\x1C" +
        "\f\x1C\x0E\x1C\u01AD\v\x1C\x05\x1C\u01AF\n\x1C\x03\x1C\x03\x1C\x03\x1D" +
        "\x03\x1D\x05\x1D\u01B5\n\x1D\x03\x1D\x05\x1D\u01B8\n\x1D\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x07\x1E\u01BE\n\x1E\f\x1E\x0E\x1E\u01C1\v\x1E\x05\x1E" +
        "\u01C3\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u01C9\n\x1F\x03 " +
        "\x03 \x05 \u01CD\n \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x05!\u01D6\n!\x03" +
        "!\x03!\x03!\x05!\u01DB\n!\x03!\x07!\u01DE\n!\f!\x0E!\u01E1\v!\x03\"\x03" +
        "\"\x03\"\x07\"\u01E6\n\"\f\"\x0E\"\u01E9\v\"\x03#\x03#\x03#\x03#\x03#" +
        "\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x07$\u01F7\n$\f$\x0E$\u01FA\v$\x03" +
        "$\x03$\x05$\u01FE\n$\x03%\x03%\x03&\x03&\x03\'\x03\'\x07\'\u0206\n\'\f" +
        "\'\x0E\'\u0209\v\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x05(\u0219\n(\x03)\x03)\x03)\x03*\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x05*\u0225\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03" +
        ",\x05,\u022F\n,\x03-\x03-\x03-\x03-\x05-\u0235\n-\x03-\x05-\u0238\n-\x03" +
        "-\x03-\x05-\u023C\n-\x03-\x03-\x03-\x03.\x03.\x05.\u0243\n.\x03.\x03." +
        "\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x031\x031\x03" +
        "1\x032\x032\x052\u0257\n2\x032\x032\x033\x033\x033\x034\x034\x034\x03" +
        "4\x035\x035\x035\x035\x035\x035\x035\x055\u0269\n5\x035\x035\x055\u026D" +
        "\n5\x035\x035\x036\x056\u0272\n6\x036\x036\x056\u0276\n6\x076\u0278\n" +
        "6\f6\x0E6\u027B\v6\x037\x037\x057\u027F\n7\x037\x077\u0282\n7\f7\x0E7" +
        "\u0285\v7\x037\x057\u0288\n7\x037\x037\x038\x038\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x05" +
        "9\u02A0\n9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x079\u02DB\n9\f9\x0E9\u02DE\v9\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x05:\u02E7\n:\x03;\x03;\x03;\x07;\u02EC\n;\f;\x0E;\u02EF\v" +
        ";\x03<\x03<\x03<\x07<\u02F4\n<\f<\x0E<\u02F7\v<\x03<\x05<\u02FA\n<\x03" +
        "=\x03=\x03=\x03=\x03>\x03>\x05>\u0302\n>\x03>\x03>\x05>\u0306\n>\x05>" +
        "\u0308\n>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x07@\u0311\n@\f@\x0E@\u0314" +
        "\v@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
        "A\x03A\x03A\x03A\x03A\x03A\x05A\u0329\nA\x03B\x03B\x05B\u032D\nB\x03C" +
        "\x03C\x03C\x03C\x05C\u0333\nC\x03C\x03C\x05C\u0337\nC\x03C\x03C\x07C\u033B" +
        "\nC\fC\x0EC\u033E\vC\x03C\x05C\u0341\nC\x03D\x03D\x03D\x03D\x05D\u0347" +
        "\nD\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x05F\u0352\nF\x03G\x03" +
        "G\x03G\x07G\u0357\nG\fG\x0EG\u035A\vG\x03H\x03H\x03H\x03I\x03I\x03I\x03" +
        "J\x03J\x03J\x07J\u0365\nJ\fJ\x0EJ\u0368\vJ\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x05K\u0370\nK\x03L\x03L\x03L\x03L\x05L\u0376\nL\x03L\x03L\x05L\u037A" +
        "\nL\x03L\x03L\x03M\x03M\x03M\x03N\x03N\x03N\x05N\u0384\nN\x03N\x03N\x03" +
        "N\x05N\u0389\nN\x03N\x03N\x03O\x03O\x03O\x03O\x03P\x03P\x03Q\x03Q\x03" +
        "Q\x03Q\x03R\x03R\x05R\u0399\nR\x03R\x03R\x05R\u039D\nR\x07R\u039F\nR\f" +
        "R\x0ER\u03A2\vR\x03R\x03R\x03R\x03R\x03R\x07R\u03A9\nR\fR\x0ER\u03AC\v" +
        "R\x05R\u03AE\nR\x03R\x05R\u03B1\nR\x03S\x03S\x03T\x03T\x05T\u03B7\nT\x03" +
        "U\x03U\x03U\x02\x02\x04@pV\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
        "\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
        "\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\x02\x13\x03\x02" +
        "\x05\v\x03\x02\x13\x15\x05\x02kkooqr\x03\x02\')\x05\x02kkppst\x04\x02" +
        "26]a\x03\x0278\x03\x02:;\x03\x02<=\x04\x02\x0E\x0E@A\x03\x02BC\x03\x02" +
        "\x07\n\x03\x02FG\x04\x02\v\vLU\x05\x02deggvv\x03\x02de\x04\x02\x0F\x0F" +
        "uu\x02\u0411\x02\xAF\x03\x02\x02\x02\x04\xB4\x03\x02\x02\x02\x06\xB9\x03" +
        "\x02\x02\x02\b\xBD\x03\x02\x02\x02\n\xBF\x03\x02\x02\x02\f\xC3\x03\x02" +
        "\x02\x02\x0E\xC6\x03\x02\x02\x02\x10\xCA\x03\x02\x02\x02\x12\xF1\x03\x02" +
        "\x02\x02\x14\xF3\x03\x02\x02\x02\x16\u0109\x03\x02\x02\x02\x18\u011F\x03" +
        "\x02\x02\x02\x1A\u0121\x03\x02\x02\x02\x1C\u012F\x03\x02\x02\x02\x1E\u0138" +
        "\x03\x02\x02\x02 \u0149\x03\x02\x02\x02\"\u014E\x03\x02\x02\x02$\u0155" +
        "\x03\x02\x02\x02&\u015D\x03\x02\x02\x02(\u016A\x03\x02\x02\x02*\u0175" +
        "\x03\x02\x02\x02,\u0178\x03\x02\x02\x02.\u0180\x03\x02\x02\x020\u0182" +
        "\x03\x02\x02\x022\u0191\x03\x02\x02\x024\u019E\x03\x02\x02\x026\u01A5" +
        "\x03\x02\x02\x028\u01B2\x03\x02\x02\x02:\u01B9\x03\x02\x02\x02<\u01C6" +
        "\x03\x02\x02\x02>\u01CA\x03\x02\x02\x02@\u01D5\x03\x02\x02\x02B\u01E2" +
        "\x03\x02\x02\x02D\u01EA\x03\x02\x02\x02F\u01F1\x03\x02\x02\x02H\u01FF" +
        "\x03\x02\x02\x02J\u0201\x03\x02\x02\x02L\u0203\x03\x02\x02\x02N\u0218" +
        "\x03\x02\x02\x02P\u021A\x03\x02\x02\x02R\u021D\x03\x02\x02\x02T\u0226" +
        "\x03\x02\x02\x02V\u022E\x03\x02\x02\x02X\u0230\x03\x02\x02\x02Z\u0240" +
        "\x03\x02\x02\x02\\\u0246\x03\x02\x02\x02^\u024E\x03\x02\x02\x02`\u0251" +
        "\x03\x02\x02\x02b\u0254\x03\x02\x02\x02d\u025A\x03\x02\x02\x02f\u025D" +
        "\x03\x02\x02\x02h\u0268\x03\x02\x02\x02j\u0271\x03\x02\x02\x02l\u027C" +
        "\x03\x02\x02\x02n\u028B\x03\x02\x02\x02p\u029F\x03\x02\x02\x02r\u02E6" +
        "\x03\x02\x02\x02t\u02E8\x03\x02\x02\x02v\u02F0\x03\x02\x02\x02x\u02FB" +
        "\x03\x02\x02\x02z\u0307\x03\x02\x02\x02|\u0309\x03\x02\x02\x02~\u030E" +
        "\x03\x02\x02\x02\x80\u0328\x03\x02\x02\x02\x82\u032C\x03\x02\x02\x02\x84" +
        "\u0332\x03\x02\x02\x02\x86\u0342\x03\x02\x02\x02\x88\u0348\x03\x02\x02" +
        "\x02\x8A\u0351\x03\x02\x02\x02\x8C\u0353\x03\x02\x02\x02\x8E\u035B\x03" +
        "\x02\x02\x02\x90\u035E\x03\x02\x02\x02\x92\u0361\x03\x02\x02\x02\x94\u036F" +
        "\x03\x02\x02\x02\x96\u0371\x03\x02\x02\x02\x98\u037D\x03\x02\x02\x02\x9A" +
        "\u0380\x03\x02\x02\x02\x9C\u038C\x03\x02\x02\x02\x9E\u0390\x03\x02\x02" +
        "\x02\xA0\u0392\x03\x02\x02\x02\xA2\u03B0\x03\x02\x02\x02\xA4\u03B2\x03" +
        "\x02\x02\x02\xA6\u03B4\x03\x02\x02\x02\xA8\u03B8\x03\x02\x02\x02\xAA\xAE" +
        "\x05\x04\x03\x02\xAB\xAE\x05\x12\n\x02\xAC\xAE\x05\x14\v\x02\xAD\xAA\x03" +
        "\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03" +
        "\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03" +
        "\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07\x02\x02\x03\xB3\x03\x03" +
        "\x02\x02\x02\xB4\xB5\x07\x03\x02\x02\xB5\xB6\x05\x06\x04\x02\xB6\xB7\x05" +
        "\b\x05\x02\xB7\xB8\x07\x04\x02\x02\xB8\x05\x03\x02\x02\x02\xB9\xBA\x05" +
        "\xA8U\x02\xBA\x07\x03\x02\x02\x02\xBB\xBE\x05\n\x06\x02\xBC\xBE\x05p9" +
        "\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\t\x03\x02\x02" +
        "\x02\xBF\xC1\x05\x0E\b\x02\xC0\xC2\x05\x0E\b\x02\xC1\xC0\x03\x02\x02\x02" +
        "\xC1\xC2\x03\x02\x02\x02\xC2\v\x03\x02\x02\x02\xC3\xC4\t\x02\x02\x02\xC4" +
        "\r\x03\x02\x02\x02\xC5\xC7\x05\f\x07\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7" +
        "\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x07b\x02\x02\xC9\x0F" +
        "\x03\x02\x02\x02\xCA\xCD\x05\xA8U\x02\xCB\xCC\x07\f\x02\x02\xCC\xCE\x05" +
        "\xA8U\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\x11\x03" +
        "\x02\x02\x02\xCF\xD0\x07\r\x02\x02\xD0\xD3\x07v\x02\x02\xD1\xD2\x07\f" +
        "\x02\x02\xD2\xD4\x05\xA8U\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02" +
        "\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xF2\x07\x04\x02\x02\xD6\xD9\x07\r" +
        "\x02\x02\xD7\xDA\x07\x0E\x02\x02\xD8\xDA\x05\xA8U\x02\xD9\xD7\x03\x02" +
        "\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xDC\x07\f" +
        "\x02\x02\xDC\xDE\x05\xA8U\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
        "\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07\x0F\x02\x02\xE0\xE1\x07v" +
        "\x02\x02\xE1\xF2\x07\x04\x02\x02\xE2\xE3\x07\r\x02\x02\xE3\xE4\x07\x10" +
        "\x02\x02\xE4\xE9\x05\x10\t\x02\xE5\xE6\x07\x11\x02\x02\xE6\xE8\x05\x10" +
        "\t\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02" +
        "\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03\x02" +
        "\x02\x02\xEC\xED\x07\x12\x02\x02\xED\xEE\x07\x0F\x02\x02\xEE\xEF\x07v" +
        "\x02\x02\xEF\xF0\x07\x04\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xCF\x03\x02" +
        "\x02\x02\xF1\xD6\x03\x02\x02\x02\xF1\xE2\x03\x02\x02\x02\xF2\x13\x03\x02" +
        "\x02\x02\xF3\xF4\t\x03\x02\x02\xF4\xFE\x05\xA8U\x02\xF5\xF6\x07\x16\x02" +
        "\x02\xF6\xFB\x05\x16\f\x02\xF7\xF8\x07\x11\x02\x02\xF8\xFA\x05\x16\f\x02" +
        "\xF9\xF7\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02" +
        "\xFB\xFC\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02" +
        "\xFE\xF5\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
        "\x02\u0100\u0104\x07\x10\x02\x02\u0101\u0103\x05\x18\r\x02\u0102\u0101" +
        "\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02" +
        "\u0104\u0105\x03\x02\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106\u0104\x03" +
        "\x02\x02\x02\u0107\u0108\x07\x12\x02\x02\u0108\x15\x03\x02\x02\x02\u0109" +
        "\u0115\x05B\"\x02\u010A\u010B\x07\x17\x02\x02\u010B\u0110\x05p9\x02\u010C" +
        "\u010D\x07\x11\x02\x02\u010D\u010F\x05p9\x02\u010E\u010C\x03\x02\x02\x02" +
        "\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03" +
        "\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113" +
        "\u0114\x07\x18\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115\u010A\x03\x02" +
        "\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\x17\x03\x02\x02\x02\u0117\u0120" +
        "\x05\x1A\x0E\x02\u0118\u0120\x05\x1C\x0F\x02\u0119\u0120\x05\x1E\x10\x02" +
        "\u011A\u0120\x05 \x11\x02\u011B\u0120\x05\"\x12\x02\u011C\u0120\x05&\x14" +
        "\x02\u011D\u0120\x05,\x17\x02\u011E\u0120\x050\x19\x02\u011F\u0117\x03" +
        "\x02\x02\x02\u011F\u0118\x03\x02\x02\x02\u011F\u0119\x03\x02\x02\x02\u011F" +
        "\u011A\x03\x02\x02\x02\u011F\u011B\x03\x02\x02\x02\u011F\u011C\x03\x02" +
        "\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
        "\x19\x03\x02\x02\x02\u0121\u0125\x05@!\x02\u0122\u0124\t\x04\x02\x02\u0123" +
        "\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02" +
        "\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127" +
        "\u0125\x03\x02\x02\x02\u0128\u012B\x05\xA8U\x02\u0129\u012A\x07\v\x02" +
        "\x02\u012A\u012C\x05p9\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03" +
        "\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07\x04\x02\x02\u012E" +
        "\x1B\x03\x02\x02\x02\u012F\u0130\x07\x19\x02\x02\u0130\u0131\x05\xA8U" +
        "\x02\u0131\u0134\x07\x1A\x02\x02\u0132\u0135\x07\x0E\x02\x02\u0133\u0135" +
        "\x05@!\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135" +
        "\u0136\x03\x02\x02\x02\u0136\u0137\x07\x04\x02\x02\u0137\x1D\x03\x02\x02" +
        "\x02\u0138\u0139\x07\x1B\x02\x02\u0139\u013A\x05\xA8U\x02\u013A\u0145" +
        "\x07\x10\x02\x02\u013B\u013C\x05> \x02\u013C\u0142\x07\x04\x02\x02\u013D" +
        "\u013E\x05> \x02\u013E\u013F\x07\x04\x02\x02\u013F\u0141\x03\x02\x02\x02" +
        "\u0140\u013D\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03" +
        "\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144" +
        "\u0142\x03\x02\x02\x02\u0145\u013B\x03\x02\x02\x02\u0145\u0146\x03\x02" +
        "\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x07\x12\x02\x02\u0148" +
        "\x1F\x03\x02\x02\x02\u0149\u014A\x07\x1C\x02\x02\u014A\u014B\x052\x1A" +
        "\x02\u014B\u014C\x05*\x16\x02\u014C\u014D\x05L\'\x02\u014D!\x03\x02\x02" +
        "\x02\u014E\u014F\x07\x1D\x02\x02\u014F\u0151\x05\xA8U\x02\u0150\u0152" +
        "\x052\x1A\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
        "\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x05L\'\x02\u0154#\x03\x02\x02" +
        "\x02\u0155\u015B\x05\xA8U\x02\u0156\u0158\x07\x17\x02\x02\u0157\u0159" +
        "\x05t;\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
        "\u015A\x03\x02\x02\x02\u015A\u015C\x07\x18\x02\x02\u015B\u0156\x03\x02" +
        "\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C%\x03\x02\x02\x02\u015D\u015F" +
        "\x07\x1E\x02\x02\u015E\u0160\x05\xA8U\x02\u015F\u015E\x03\x02\x02\x02" +
        "\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x05" +
        "2\x1A\x02\u0162\u0164\x05*\x16\x02\u0163\u0165\x05(\x15\x02\u0164\u0163" +
        "\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02" +
        "\u0166\u0169\x07\x04\x02\x02\u0167\u0169\x05L\'\x02\u0168\u0166\x03\x02" +
        "\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169\'\x03\x02\x02\x02\u016A\u016B" +
        "\x07\x1F\x02\x02\u016B\u016C\x052\x1A\x02\u016C)\x03\x02\x02\x02\u016D" +
        "\u0174\x05$\x13\x02\u016E\u0174\x05J&\x02\u016F\u0174\x07m\x02\x02\u0170" +
        "\u0174\x07r\x02\x02\u0171\u0174\x07o\x02\x02\u0172\u0174\x07q\x02\x02" +
        "\u0173\u016D\x03\x02\x02\x02\u0173\u016E\x03\x02\x02\x02\u0173\u016F\x03" +
        "\x02\x02\x02\u0173\u0170\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173" +
        "\u0172\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02" +
        "\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176+\x03\x02\x02\x02\u0177\u0175" +
        "\x03\x02\x02\x02\u0178\u0179\x07 \x02\x02\u0179\u017A\x05\xA8U\x02\u017A" +
        "\u017C\x056\x1C\x02\u017B\u017D\x07i\x02\x02\u017C\u017B\x03\x02\x02\x02" +
        "\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x07" +
        "\x04\x02\x02\u017F-\x03\x02\x02\x02\u0180\u0181\x05\xA8U\x02\u0181/\x03" +
        "\x02\x02\x02\u0182\u0183\x07!\x02\x02\u0183\u0184\x05\xA8U\x02\u0184\u0186" +
        "\x07\x10\x02\x02\u0185\u0187\x05.\x18\x02\u0186\u0185\x03\x02\x02\x02" +
        "\u0186\u0187\x03\x02\x02\x02\u0187\u018C\x03\x02\x02\x02\u0188\u0189\x07" +
        "\x11\x02\x02\u0189\u018B\x05.\x18\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
        "\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02" +
        "\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
        "\u0190\x07\x12\x02\x02\u01901\x03\x02\x02\x02\u0191\u019A\x07\x17\x02" +
        "\x02\u0192\u0197\x054\x1B\x02\u0193\u0194\x07\x11\x02\x02\u0194\u0196" +
        "\x054\x1B\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0199\x03\x02\x02\x02" +
        "\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019B\x03" +
        "\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A\u0192\x03\x02\x02\x02\u019A" +
        "\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x07\x18" +
        "\x02\x02\u019D3\x03\x02\x02\x02\u019E\u01A0\x05@!\x02\u019F\u01A1\x05" +
        "H%\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A3" +
        "\x03\x02\x02\x02\u01A2\u01A4\x05\xA8U\x02\u01A3\u01A2\x03\x02\x02\x02" +
        "\u01A3\u01A4\x03\x02\x02\x02\u01A45\x03\x02\x02\x02\u01A5\u01AE\x07\x17" +
        "\x02\x02\u01A6\u01AB\x058\x1D\x02\u01A7\u01A8\x07\x11\x02\x02\u01A8\u01AA" +
        "\x058\x1D\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02" +
        "\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AF\x03" +
        "\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01A6\x03\x02\x02\x02\u01AE" +
        "\u01AF\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x07\x18" +
        "\x02\x02\u01B17\x03\x02\x02\x02\u01B2\u01B4\x05@!\x02\u01B3\u01B5\x07" +
        "n\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5" +
        "\u01B7\x03\x02\x02\x02\u01B6\u01B8\x05\xA8U\x02\u01B7\u01B6\x03\x02\x02" +
        "\x02\u01B7\u01B8\x03\x02\x02\x02\u01B89\x03\x02\x02\x02\u01B9\u01C2\x07" +
        "\x17\x02\x02\u01BA\u01BF\x05<\x1F\x02\u01BB\u01BC\x07\x11\x02\x02\u01BC" +
        "\u01BE\x05<\x1F\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02" +
        "\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C3" +
        "\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01BA\x03\x02\x02\x02" +
        "\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x07" +
        "\x18\x02\x02\u01C5;\x03\x02\x02\x02\u01C6\u01C8\x05@!\x02\u01C7\u01C9" +
        "\x05H%\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
        "=\x03\x02\x02\x02\u01CA\u01CC\x05@!\x02\u01CB\u01CD\x05H%\x02\u01CC\u01CB" +
        "\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02" +
        "\u01CE\u01CF\x05\xA8U\x02\u01CF?\x03\x02\x02\x02\u01D0\u01D1\b!\x01\x02" +
        "\u01D1\u01D6\x05n8\x02\u01D2\u01D6\x05B\"\x02\u01D3\u01D6\x05D#\x02\u01D4" +
        "\u01D6\x05F$\x02\u01D5\u01D0\x03\x02\x02\x02\u01D5\u01D2\x03\x02\x02\x02" +
        "\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01DF\x03" +
        "\x02\x02\x02\u01D7\u01D8\f\x04\x02\x02\u01D8\u01DA\x07\"\x02\x02\u01D9" +
        "\u01DB\x05p9\x02\u01DA\u01D9\x03";
    SolidityParser._serializedATNSegment1 = "\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
        "\u01DE\x07#\x02\x02\u01DD\u01D7\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02" +
        "\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0A\x03" +
        "\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E7\x05\xA8U\x02\u01E3" +
        "\u01E4\x07$\x02\x02\u01E4\u01E6\x05\xA8U\x02\u01E5\u01E3\x03\x02\x02\x02" +
        "\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03" +
        "\x02\x02\x02\u01E8C\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
        "\u01EB\x07%\x02\x02\u01EB\u01EC\x07\x17\x02\x02\u01EC\u01ED\x05n8\x02" +
        "\u01ED\u01EE\x07&\x02\x02\u01EE\u01EF\x05@!\x02\u01EF\u01F0\x07\x18\x02" +
        "\x02\u01F0E\x03\x02\x02\x02\u01F1\u01F2\x07\x1E\x02\x02\u01F2\u01F8\x05" +
        ":\x1E\x02\u01F3\u01F7\x07o\x02\x02\u01F4\u01F7\x07m\x02\x02\u01F5\u01F7" +
        "\x05J&\x02\u01F6\u01F3\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6" +
        "\u01F5\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
        "\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FD\x03\x02\x02\x02\u01FA" +
        "\u01F8\x03\x02\x02\x02\u01FB\u01FC\x07\x1F\x02\x02\u01FC\u01FE\x05:\x1E" +
        "\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FEG\x03" +
        "\x02\x02\x02\u01FF\u0200\t\x05\x02\x02\u0200I\x03\x02\x02\x02\u0201\u0202" +
        "\t\x06\x02\x02\u0202K\x03\x02\x02\x02\u0203\u0207\x07\x10\x02\x02\u0204" +
        "\u0206\x05N(\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0209\x03\x02\x02\x02" +
        "\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03" +
        "\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020B\x07\x12\x02\x02\u020B" +
        "M\x03\x02\x02\x02\u020C\u0219\x05R*\x02\u020D\u0219\x05T+\x02\u020E\u0219" +
        "\x05X-\x02\u020F\u0219\x05L\'\x02\u0210\u0219\x05Z.\x02\u0211\u0219\x05" +
        "\\/\x02\u0212\u0219\x05^0\x02\u0213\u0219\x05`1\x02\u0214\u0219\x05b2" +
        "\x02\u0215\u0219\x05d3\x02\u0216\u0219\x05f4\x02\u0217\u0219\x05V,\x02" +
        "\u0218\u020C\x03\x02\x02\x02\u0218\u020D\x03\x02\x02\x02\u0218\u020E\x03" +
        "\x02\x02\x02\u0218\u020F\x03\x02\x02\x02\u0218\u0210\x03\x02\x02\x02\u0218" +
        "\u0211\x03\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0218\u0213\x03\x02" +
        "\x02\x02\u0218\u0214\x03\x02\x02\x02\u0218\u0215\x03\x02\x02\x02\u0218" +
        "\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219O\x03\x02\x02" +
        "\x02\u021A\u021B\x05p9\x02\u021B\u021C\x07\x04\x02\x02\u021CQ\x03\x02" +
        "\x02\x02\u021D\u021E\x07*\x02\x02\u021E\u021F\x07\x17\x02\x02\u021F\u0220" +
        "\x05p9\x02\u0220\u0221\x07\x18\x02\x02\u0221\u0224\x05N(\x02\u0222\u0223" +
        "\x07+\x02\x02\u0223\u0225\x05N(\x02\u0224\u0222\x03\x02\x02\x02\u0224" +
        "\u0225\x03\x02\x02\x02\u0225S\x03\x02\x02\x02\u0226\u0227\x07,\x02\x02" +
        "\u0227\u0228\x07\x17\x02\x02\u0228\u0229\x05p9\x02\u0229\u022A\x07\x18" +
        "\x02\x02\u022A\u022B\x05N(\x02\u022BU\x03\x02\x02\x02\u022C\u022F\x05" +
        "h5\x02\u022D\u022F\x05P)\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D\x03" +
        "\x02\x02\x02\u022FW\x03\x02\x02\x02\u0230\u0231\x07\x1A\x02\x02\u0231" +
        "\u0234\x07\x17\x02\x02\u0232\u0235\x05V,\x02\u0233\u0235\x07\x04\x02\x02" +
        "\u0234\u0232\x03\x02\x02\x02\u0234\u0233\x03\x02\x02\x02\u0235\u0237\x03" +
        "\x02\x02\x02\u0236\u0238\x05p9\x02\u0237\u0236\x03\x02\x02\x02\u0237\u0238" +
        "\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x07\x04\x02\x02" +
        "\u023A\u023C\x05p9\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02" +
        "\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x07\x18\x02\x02\u023E" +
        "\u023F\x05N(\x02\u023FY\x03\x02\x02\x02\u0240\u0242\x07-\x02\x02\u0241" +
        "\u0243\x07v\x02\x02\u0242\u0241\x03\x02\x02\x02\u0242\u0243\x03\x02\x02" +
        "\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x05~@\x02\u0245[\x03\x02" +
        "\x02\x02\u0246\u0247\x07.\x02\x02\u0247\u0248\x05N(\x02\u0248\u0249\x07" +
        ",\x02\x02\u0249\u024A\x07\x17\x02\x02\u024A\u024B\x05p9\x02\u024B\u024C" +
        "\x07\x18\x02\x02\u024C\u024D\x07\x04\x02\x02\u024D]\x03\x02\x02\x02\u024E" +
        "\u024F\x07l\x02\x02\u024F\u0250\x07\x04\x02\x02\u0250_\x03\x02\x02\x02" +
        "\u0251\u0252\x07j\x02\x02\u0252\u0253\x07\x04\x02\x02\u0253a\x03\x02\x02" +
        "\x02\u0254\u0256\x07/\x02\x02\u0255\u0257\x05p9\x02\u0256\u0255\x03\x02" +
        "\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258" +
        "\u0259\x07\x04\x02\x02\u0259c\x03\x02\x02\x02\u025A\u025B\x070\x02\x02" +
        "\u025B\u025C\x07\x04\x02\x02\u025Ce\x03\x02\x02\x02\u025D\u025E\x071\x02" +
        "\x02\u025E\u025F\x05|?\x02\u025F\u0260\x07\x04\x02\x02\u0260g\x03\x02" +
        "\x02\x02\u0261\u0262\x072\x02\x02\u0262\u0269\x05l7\x02\u0263\u0269\x05" +
        "> \x02\u0264\u0265\x07\x17\x02\x02\u0265\u0266\x05j6\x02\u0266\u0267\x07" +
        "\x18\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0261\x03\x02\x02\x02\u0268" +
        "\u0263\x03\x02\x02\x02\u0268\u0264\x03\x02\x02\x02\u0269\u026C\x03\x02" +
        "\x02\x02\u026A\u026B\x07\v\x02\x02\u026B\u026D\x05p9\x02\u026C\u026A\x03" +
        "\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E" +
        "\u026F\x07\x04\x02\x02\u026Fi\x03\x02\x02\x02\u0270\u0272\x05> \x02\u0271" +
        "\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0279\x03\x02" +
        "\x02\x02\u0273\u0275\x07\x11\x02\x02\u0274\u0276\x05> \x02\u0275\u0274" +
        "\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02" +
        "\u0277\u0273\x03\x02\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279\u0277\x03" +
        "\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027Ak\x03\x02\x02\x02\u027B" +
        "\u0279\x03\x02\x02\x02\u027C\u0283\x07\x17\x02\x02\u027D\u027F\x05\xA8" +
        "U\x02\u027E\u027D\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0280" +
        "\x03\x02\x02\x02\u0280\u0282\x07\x11\x02\x02\u0281\u027E\x03\x02\x02\x02" +
        "\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03" +
        "\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02\u0286" +
        "\u0288\x05\xA8U\x02\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02" +
        "\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x07\x18\x02\x02\u028Am\x03" +
        "\x02\x02\x02\u028B\u028C\t\x07\x02\x02\u028Co\x03\x02\x02\x02\u028D\u028E" +
        "\b9\x01\x02\u028E\u028F\x079\x02\x02\u028F\u02A0\x05@!\x02\u0290\u0291" +
        "\x07\x17\x02\x02\u0291\u0292\x05p9\x02\u0292\u0293\x07\x18\x02\x02\u0293" +
        "\u02A0\x03\x02\x02\x02\u0294\u0295\t\b\x02\x02\u0295\u02A0\x05p9\x15\u0296" +
        "\u0297\t\t\x02\x02\u0297\u02A0\x05p9\x14\u0298\u0299\t\n\x02\x02\u0299" +
        "\u02A0\x05p9\x13\u029A\u029B\x07>\x02\x02\u029B\u02A0\x05p9\x12\u029C" +
        "\u029D\x07\x06\x02\x02\u029D\u02A0\x05p9\x11\u029E\u02A0\x05r:\x02\u029F" +
        "\u028D\x03\x02\x02\x02\u029F\u0290\x03\x02\x02\x02\u029F\u0294\x03\x02" +
        "\x02\x02\u029F\u0296\x03\x02\x02\x02\u029F\u0298\x03\x02\x02\x02\u029F" +
        "\u029A\x03\x02\x02\x02\u029F\u029C\x03\x02\x02\x02\u029F\u029E\x03\x02" +
        "\x02\x02\u02A0\u02DC\x03\x02\x02\x02\u02A1\u02A2\f\x10\x02\x02\u02A2\u02A3" +
        "\x07?\x02\x02\u02A3\u02DB\x05p9\x11\u02A4\u02A5\f\x0F\x02\x02\u02A5\u02A6" +
        "\t\v\x02\x02\u02A6\u02DB\x05p9\x10\u02A7\u02A8\f\x0E\x02\x02\u02A8\u02A9" +
        "\t\t\x02\x02\u02A9\u02DB\x05p9\x0F\u02AA\u02AB\f\r\x02\x02\u02AB\u02AC" +
        "\t\f\x02\x02\u02AC\u02DB\x05p9\x0E\u02AD\u02AE\f\f\x02\x02\u02AE\u02AF" +
        "\x07D\x02\x02\u02AF\u02DB\x05p9\r\u02B0\u02B1\f\v\x02\x02\u02B1\u02B2" +
        "\x07\x05\x02\x02\u02B2\u02DB\x05p9\f\u02B3\u02B4\f\n\x02\x02\u02B4\u02B5" +
        "\x07E\x02\x02\u02B5\u02DB\x05p9\v\u02B6\u02B7\f\t\x02\x02\u02B7\u02B8" +
        "\t\r\x02\x02\u02B8\u02DB\x05p9\n\u02B9\u02BA\f\b\x02\x02\u02BA\u02BB\t" +
        "\x0E\x02\x02\u02BB\u02DB\x05p9\t\u02BC\u02BD\f\x07\x02\x02\u02BD\u02BE" +
        "\x07H\x02\x02\u02BE\u02DB\x05p9\b\u02BF\u02C0\f\x06\x02\x02\u02C0\u02C1" +
        "\x07I\x02\x02\u02C1\u02DB\x05p9\x07\u02C2\u02C3\f\x05\x02\x02\u02C3\u02C4" +
        "\x07J\x02\x02\u02C4\u02C5\x05p9\x02\u02C5\u02C6\x07K\x02\x02\u02C6\u02C7" +
        "\x05p9\x06\u02C7\u02DB\x03\x02\x02\x02\u02C8\u02C9\f\x04\x02\x02\u02C9" +
        "\u02CA\t\x0F\x02\x02\u02CA\u02DB\x05p9\x05\u02CB\u02CC\f\x1B\x02\x02\u02CC" +
        "\u02DB\t\b\x02\x02\u02CD\u02CE\f\x19\x02\x02\u02CE\u02CF\x07\"\x02\x02" +
        "\u02CF\u02D0\x05p9\x02\u02D0\u02D1\x07#\x02\x02\u02D1\u02DB\x03\x02\x02" +
        "\x02\u02D2\u02D3\f\x18\x02\x02\u02D3\u02D4\x07\x17\x02\x02\u02D4\u02D5" +
        "\x05z>\x02\u02D5\u02D6\x07\x18\x02\x02\u02D6\u02DB\x03\x02\x02\x02\u02D7" +
        "\u02D8\f\x17\x02\x02\u02D8\u02D9\x07$\x02\x02\u02D9\u02DB\x05\xA8U\x02" +
        "\u02DA\u02A1\x03\x02\x02\x02\u02DA\u02A4\x03\x02\x02\x02\u02DA\u02A7\x03" +
        "\x02\x02\x02\u02DA\u02AA\x03\x02\x02\x02\u02DA\u02AD\x03\x02\x02\x02\u02DA" +
        "\u02B0\x03\x02\x02\x02\u02DA\u02B3\x03\x02\x02\x02\u02DA\u02B6\x03\x02" +
        "\x02\x02\u02DA\u02B9\x03\x02\x02\x02\u02DA\u02BC\x03\x02\x02\x02\u02DA" +
        "\u02BF\x03\x02\x02\x02\u02DA\u02C2\x03\x02\x02\x02\u02DA\u02C8\x03\x02" +
        "\x02\x02\u02DA\u02CB\x03\x02\x02\x02\u02DA\u02CD\x03\x02\x02\x02\u02DA" +
        "\u02D2\x03\x02\x02\x02\u02DA\u02D7\x03\x02\x02\x02\u02DB\u02DE\x03\x02" +
        "\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD" +
        "q\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E7\x07c\x02\x02" +
        "\u02E0\u02E7\x05\xA6T\x02\u02E1\u02E7\x07g\x02\x02\u02E2\u02E7\x07v\x02" +
        "\x02\u02E3\u02E7\x05\xA8U\x02\u02E4\u02E7\x05\xA2R\x02\u02E5\u02E7\x05" +
        "\xA4S\x02\u02E6\u02DF\x03\x02\x02\x02\u02E6\u02E0\x03\x02\x02\x02\u02E6" +
        "\u02E1\x03\x02\x02\x02\u02E6\u02E2\x03\x02\x02\x02\u02E6\u02E3\x03\x02" +
        "\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E7" +
        "s\x03\x02\x02\x02\u02E8\u02ED\x05p9\x02\u02E9\u02EA\x07\x11\x02\x02\u02EA" +
        "\u02EC\x05p9\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02EF\x03\x02\x02\x02" +
        "\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EEu\x03\x02" +
        "\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0\u02F5\x05x=\x02\u02F1\u02F2" +
        "\x07\x11\x02\x02\u02F2\u02F4\x05x=\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4" +
        "\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02" +
        "\x02\x02\u02F6\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F8" +
        "\u02FA\x07\x11\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02" +
        "\x02\x02\u02FAw\x03\x02\x02\x02\u02FB\u02FC\x05\xA8U\x02\u02FC\u02FD\x07" +
        "K\x02\x02\u02FD\u02FE\x05p9\x02\u02FEy\x03\x02\x02\x02\u02FF\u0301\x07" +
        "\x10\x02\x02\u0300\u0302\x05v<\x02\u0301\u0300\x03\x02\x02\x02\u0301\u0302" +
        "\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0308\x07\x12\x02\x02" +
        "\u0304\u0306\x05t;\x02\u0305\u0304\x03\x02\x02\x02\u0305\u0306\x03\x02" +
        "\x02\x02\u0306\u0308\x03\x02\x02\x02\u0307\u02FF\x03\x02\x02\x02\u0307" +
        "\u0305\x03\x02\x02\x02\u0308{\x03\x02\x02\x02\u0309\u030A\x05p9\x02\u030A" +
        "\u030B\x07\x17\x02\x02\u030B\u030C\x05z>\x02\u030C\u030D\x07\x18\x02\x02" +
        "\u030D}\x03\x02\x02\x02\u030E\u0312\x07\x10\x02\x02\u030F\u0311\x05\x80" +
        "A\x02\u0310\u030F\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310" +
        "\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315\x03\x02\x02\x02" +
        "\u0314\u0312\x03\x02\x02\x02\u0315\u0316\x07\x12\x02\x02\u0316\x7F\x03" +
        "\x02\x02\x02\u0317\u0329\x05\xA8U\x02\u0318\u0329\x05~@\x02\u0319\u0329" +
        "\x05\x82B\x02\u031A\u0329\x05\x86D\x02\u031B\u0329\x05\x88E\x02\u031C" +
        "\u0329\x05\x8EH\x02\u031D\u0329\x05\x90I\x02\u031E\u0329\x05\x92J\x02" +
        "\u031F\u0329\x05\x96L\x02\u0320\u0329\x05\x9AN\x02\u0321\u0329\x05\x9C" +
        "O\x02\u0322\u0329\x07j\x02\x02\u0323\u0329\x07l\x02\x02\u0324\u0329\x05" +
        "\xA0Q\x02\u0325\u0329\x05\xA6T\x02\u0326\u0329\x07v\x02\x02\u0327\u0329" +
        "\x07g\x02\x02\u0328\u0317\x03\x02\x02\x02\u0328\u0318\x03\x02\x02\x02" +
        "\u0328\u0319\x03\x02\x02\x02\u0328\u031A\x03\x02\x02\x02\u0328\u031B\x03" +
        "\x02\x02\x02\u0328\u031C\x03\x02\x02\x02\u0328\u031D\x03\x02\x02\x02\u0328" +
        "\u031E\x03\x02\x02\x02\u0328\u031F\x03\x02\x02\x02\u0328\u0320\x03\x02" +
        "\x02\x02\u0328\u0321\x03\x02\x02\x02\u0328\u0322\x03\x02\x02\x02\u0328" +
        "\u0323\x03\x02\x02\x02\u0328\u0324\x03\x02\x02\x02\u0328\u0325\x03\x02" +
        "\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0327\x03\x02\x02\x02\u0329" +
        "\x81\x03\x02\x02\x02\u032A\u032D\x05\x84C\x02\u032B\u032D\x05\x9EP\x02" +
        "\u032C\u032A\x03\x02\x02\x02\u032C\u032B\x03\x02\x02\x02\u032D\x83\x03" +
        "\x02\x02\x02\u032E\u0333\x07/\x02\x02\u032F\u0333\x073\x02\x02\u0330\u0333" +
        "\x076\x02\x02\u0331\u0333\x05\xA8U\x02\u0332\u032E\x03\x02\x02\x02\u0332" +
        "\u032F\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0331\x03\x02" +
        "\x02\x02\u0333\u0340\x03\x02\x02\x02\u0334\u0336\x07\x17\x02\x02\u0335" +
        "\u0337\x05\x82B\x02\u0336\u0335\x03\x02\x02\x02\u0336\u0337\x03\x02\x02" +
        "\x02\u0337\u033C\x03\x02\x02\x02\u0338\u0339\x07\x11\x02\x02\u0339\u033B" +
        "\x05\x82B\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02" +
        "\u033C\u033A\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033F\x03" +
        "\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033F\u0341\x07\x18\x02\x02\u0340" +
        "\u0334\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\x85\x03\x02\x02" +
        "\x02\u0342\u0343\x07V\x02\x02\u0343\u0346\x05\x8AF\x02\u0344\u0345\x07" +
        "W\x02\x02\u0345\u0347\x05\x82B\x02\u0346\u0344\x03\x02\x02\x02\u0346\u0347" +
        "\x03\x02\x02\x02\u0347\x87\x03\x02\x02\x02\u0348\u0349\x05\x8AF\x02\u0349" +
        "\u034A\x07W\x02\x02\u034A\u034B\x05\x82B\x02\u034B\x89\x03\x02\x02\x02" +
        "\u034C\u0352\x05\xA8U\x02\u034D\u034E\x07\x17\x02\x02\u034E\u034F\x05" +
        "\x8CG\x02\u034F\u0350\x07\x18\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351" +
        "\u034C\x03\x02\x02\x02\u0351\u034D\x03\x02\x02\x02\u0352\x8B\x03\x02\x02" +
        "\x02\u0353\u0358\x05\xA8U\x02\u0354\u0355\x07\x11\x02\x02\u0355\u0357" +
        "\x05\xA8U\x02\u0356\u0354\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02" +
        "\u0358\u0356\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\x8D\x03" +
        "\x02\x02\x02\u035A\u0358\x03\x02\x02\x02\u035B\u035C\x07X\x02\x02\u035C" +
        "\u035D\x05\xA8U\x02\u035D\x8F\x03\x02\x02\x02\u035E\u035F\x05\xA8U\x02" +
        "\u035F\u0360\x07K\x02\x02\u0360\x91\x03\x02\x02\x02\u0361\u0362\x07Y\x02" +
        "\x02\u0362\u0366\x05\x82B\x02\u0363\u0365\x05\x94K\x02\u0364\u0363\x03" +
        "\x02\x02\x02\u0365\u0368\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366" +
        "\u0367\x03\x02\x02\x02\u0367\x93\x03\x02\x02\x02\u0368\u0366\x03\x02\x02" +
        "\x02\u0369\u036A\x07Z\x02\x02\u036A\u036B\x05\x9EP\x02\u036B\u036C\x05" +
        "~@\x02\u036C\u0370\x03\x02\x02\x02\u036D\u036E\x07[\x02\x02\u036E\u0370" +
        "\x05~@\x02\u036F\u0369\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370" +
        "\x95\x03\x02\x02\x02\u0371\u0372\x07\x1E\x02\x02\u0372\u0373\x05\xA8U" +
        "\x02\u0373\u0375\x07\x17\x02\x02\u0374\u0376\x05\x8CG\x02\u0375\u0374" +
        "\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02" +
        "\u0377\u0379\x07\x18\x02\x02\u0378\u037A\x05\x98M\x02\u0379\u0378\x03" +
        "\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B" +
        "\u037C\x05~@\x02\u037C\x97\x03\x02\x02\x02\u037D\u037E\x07\\\x02\x02\u037E" +
        "\u037F\x05\x8CG\x02\u037F\x99\x03\x02\x02\x02\u0380\u0383\x07\x1A\x02" +
        "\x02\u0381\u0384\x05~@\x02\u0382\u0384\x05\x82B\x02\u0383\u0381\x03\x02" +
        "\x02\x02\u0383\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385" +
        "\u0388\x05\x82B\x02\u0386\u0389\x05~@\x02\u0387\u0389\x05\x82B\x02\u0388" +
        "\u0386\x03\x02\x02\x02\u0388\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02" +
        "\x02\x02\u038A\u038B\x05~@\x02\u038B\x9B\x03\x02\x02\x02\u038C\u038D\x07" +
        "*\x02\x02\u038D\u038E\x05\x82B\x02\u038E\u038F\x05~@\x02\u038F\x9D\x03" +
        "\x02\x02\x02\u0390\u0391\t\x10\x02\x02\u0391\x9F\x03\x02\x02\x02\u0392" +
        "\u0393\x07-\x02\x02\u0393\u0394\x05\xA8U\x02\u0394\u0395\x05~@\x02\u0395" +
        "\xA1\x03\x02\x02\x02\u0396\u0398\x07\x17\x02\x02\u0397\u0399\x05p9\x02" +
        "\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u03A0\x03" +
        "\x02\x02\x02\u039A\u039C\x07\x11\x02\x02\u039B\u039D\x05p9\x02\u039C\u039B" +
        "\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039F\x03\x02\x02\x02" +
        "\u039E\u039A\x03\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03" +
        "\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3\x03\x02\x02\x02\u03A2" +
        "\u03A0\x03\x02\x02\x02\u03A3\u03B1\x07\x18\x02\x02\u03A4\u03AD\x07\"\x02" +
        "\x02\u03A5\u03AA\x05p9\x02\u03A6\u03A7\x07\x11\x02\x02\u03A7\u03A9\x05" +
        "p9\x02\u03A8\u03A6\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8" +
        "\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02" +
        "\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03A5\x03\x02\x02\x02\u03AD\u03AE\x03" +
        "\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B1\x07#\x02\x02\u03B0" +
        "\u0396\x03\x02\x02\x02\u03B0\u03A4\x03\x02\x02\x02\u03B1\xA3\x03\x02\x02" +
        "\x02\u03B2\u03B3\x05n8\x02\u03B3\xA5\x03\x02\x02\x02\u03B4\u03B6\t\x11" +
        "\x02\x02\u03B5\u03B7\x07f\x02\x02\u03B6\u03B5\x03\x02\x02\x02\u03B6\u03B7" +
        "\x03\x02\x02\x02\u03B7\xA7\x03\x02\x02\x02\u03B8\u03B9\t\x12\x02\x02\u03B9" +
        "\xA9\x03\x02\x02\x02h\xAD\xAF\xBD\xC1\xC6\xCD\xD3\xD9\xDD\xE9\xF1\xFB" +
        "\xFE\u0104\u0110\u0115\u011F\u0125\u012B\u0134\u0142\u0145\u0151\u0158" +
        "\u015B\u015F\u0164\u0168\u0173\u0175\u017C\u0186\u018C\u0197\u019A\u01A0" +
        "\u01A3\u01AB\u01AE\u01B4\u01B7\u01BF\u01C2\u01C8\u01CC\u01D5\u01DA\u01DF" +
        "\u01E7\u01F6\u01F8\u01FD\u0207\u0218\u0224\u022E\u0234\u0237\u023B\u0242" +
        "\u0256\u0268\u026C\u0271\u0275\u0279\u027E\u0283\u0287\u029F\u02DA\u02DC" +
        "\u02E6\u02ED\u02F5\u02F9\u0301\u0305\u0307\u0312\u0328\u032C\u0332\u0336" +
        "\u033C\u0340\u0346\u0351\u0358\u0366\u036F\u0375\u0379\u0383\u0388\u0398" +
        "\u039C\u03A0\u03AA\u03AD\u03B0\u03B6";
    SolidityParser._serializedATN = Utils.join([
        SolidityParser._serializedATNSegment0,
        SolidityParser._serializedATNSegment1,
    ], "");
    return SolidityParser;
}(Parser_1.Parser));
exports.SolidityParser = SolidityParser;
var SourceUnitContext = /** @class */ (function (_super) {
    __extends(SourceUnitContext, _super);
    function SourceUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceUnitContext.prototype.EOF = function () { return this.getToken(SolidityParser.EOF, 0); };
    SourceUnitContext.prototype.pragmaDirective = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PragmaDirectiveContext);
        }
        else {
            return this.getRuleContext(i, PragmaDirectiveContext);
        }
    };
    SourceUnitContext.prototype.importDirective = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDirectiveContext);
        }
        else {
            return this.getRuleContext(i, ImportDirectiveContext);
        }
    };
    SourceUnitContext.prototype.contractDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ContractDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ContractDefinitionContext);
        }
    };
    Object.defineProperty(SourceUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_sourceUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceUnit) {
            listener.enterSourceUnit(this);
        }
    };
    // @Override
    SourceUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceUnit) {
            listener.exitSourceUnit(this);
        }
    };
    // @Override
    SourceUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceUnit) {
            return visitor.visitSourceUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceUnitContext = SourceUnitContext;
var PragmaDirectiveContext = /** @class */ (function (_super) {
    __extends(PragmaDirectiveContext, _super);
    function PragmaDirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PragmaDirectiveContext.prototype.pragmaName = function () {
        return this.getRuleContext(0, PragmaNameContext);
    };
    PragmaDirectiveContext.prototype.pragmaValue = function () {
        return this.getRuleContext(0, PragmaValueContext);
    };
    Object.defineProperty(PragmaDirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_pragmaDirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PragmaDirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterPragmaDirective) {
            listener.enterPragmaDirective(this);
        }
    };
    // @Override
    PragmaDirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitPragmaDirective) {
            listener.exitPragmaDirective(this);
        }
    };
    // @Override
    PragmaDirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitPragmaDirective) {
            return visitor.visitPragmaDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PragmaDirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PragmaDirectiveContext = PragmaDirectiveContext;
var PragmaNameContext = /** @class */ (function (_super) {
    __extends(PragmaNameContext, _super);
    function PragmaNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PragmaNameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(PragmaNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_pragmaName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PragmaNameContext.prototype.enterRule = function (listener) {
        if (listener.enterPragmaName) {
            listener.enterPragmaName(this);
        }
    };
    // @Override
    PragmaNameContext.prototype.exitRule = function (listener) {
        if (listener.exitPragmaName) {
            listener.exitPragmaName(this);
        }
    };
    // @Override
    PragmaNameContext.prototype.accept = function (visitor) {
        if (visitor.visitPragmaName) {
            return visitor.visitPragmaName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PragmaNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PragmaNameContext = PragmaNameContext;
var PragmaValueContext = /** @class */ (function (_super) {
    __extends(PragmaValueContext, _super);
    function PragmaValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PragmaValueContext.prototype.version = function () {
        return this.tryGetRuleContext(0, VersionContext);
    };
    PragmaValueContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(PragmaValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_pragmaValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PragmaValueContext.prototype.enterRule = function (listener) {
        if (listener.enterPragmaValue) {
            listener.enterPragmaValue(this);
        }
    };
    // @Override
    PragmaValueContext.prototype.exitRule = function (listener) {
        if (listener.exitPragmaValue) {
            listener.exitPragmaValue(this);
        }
    };
    // @Override
    PragmaValueContext.prototype.accept = function (visitor) {
        if (visitor.visitPragmaValue) {
            return visitor.visitPragmaValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PragmaValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PragmaValueContext = PragmaValueContext;
var VersionContext = /** @class */ (function (_super) {
    __extends(VersionContext, _super);
    function VersionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VersionContext.prototype.versionConstraint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VersionConstraintContext);
        }
        else {
            return this.getRuleContext(i, VersionConstraintContext);
        }
    };
    Object.defineProperty(VersionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_version; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VersionContext.prototype.enterRule = function (listener) {
        if (listener.enterVersion) {
            listener.enterVersion(this);
        }
    };
    // @Override
    VersionContext.prototype.exitRule = function (listener) {
        if (listener.exitVersion) {
            listener.exitVersion(this);
        }
    };
    // @Override
    VersionContext.prototype.accept = function (visitor) {
        if (visitor.visitVersion) {
            return visitor.visitVersion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VersionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VersionContext = VersionContext;
var VersionOperatorContext = /** @class */ (function (_super) {
    __extends(VersionOperatorContext, _super);
    function VersionOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(VersionOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_versionOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VersionOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterVersionOperator) {
            listener.enterVersionOperator(this);
        }
    };
    // @Override
    VersionOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitVersionOperator) {
            listener.exitVersionOperator(this);
        }
    };
    // @Override
    VersionOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitVersionOperator) {
            return visitor.visitVersionOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VersionOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VersionOperatorContext = VersionOperatorContext;
var VersionConstraintContext = /** @class */ (function (_super) {
    __extends(VersionConstraintContext, _super);
    function VersionConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VersionConstraintContext.prototype.VersionLiteral = function () { return this.getToken(SolidityParser.VersionLiteral, 0); };
    VersionConstraintContext.prototype.versionOperator = function () {
        return this.tryGetRuleContext(0, VersionOperatorContext);
    };
    Object.defineProperty(VersionConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_versionConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VersionConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterVersionConstraint) {
            listener.enterVersionConstraint(this);
        }
    };
    // @Override
    VersionConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitVersionConstraint) {
            listener.exitVersionConstraint(this);
        }
    };
    // @Override
    VersionConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitVersionConstraint) {
            return visitor.visitVersionConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VersionConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VersionConstraintContext = VersionConstraintContext;
var ImportDeclarationContext = /** @class */ (function (_super) {
    __extends(ImportDeclarationContext, _super);
    function ImportDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDeclarationContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(ImportDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_importDeclaration; },
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
var ImportDirectiveContext = /** @class */ (function (_super) {
    __extends(ImportDirectiveContext, _super);
    function ImportDirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDirectiveContext.prototype.StringLiteral = function () { return this.getToken(SolidityParser.StringLiteral, 0); };
    ImportDirectiveContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    ImportDirectiveContext.prototype.importDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ImportDeclarationContext);
        }
    };
    Object.defineProperty(ImportDirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_importDirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportDirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterImportDirective) {
            listener.enterImportDirective(this);
        }
    };
    // @Override
    ImportDirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitImportDirective) {
            listener.exitImportDirective(this);
        }
    };
    // @Override
    ImportDirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitImportDirective) {
            return visitor.visitImportDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportDirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportDirectiveContext = ImportDirectiveContext;
var ContractDefinitionContext = /** @class */ (function (_super) {
    __extends(ContractDefinitionContext, _super);
    function ContractDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContractDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ContractDefinitionContext.prototype.inheritanceSpecifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InheritanceSpecifierContext);
        }
        else {
            return this.getRuleContext(i, InheritanceSpecifierContext);
        }
    };
    ContractDefinitionContext.prototype.contractPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ContractPartContext);
        }
        else {
            return this.getRuleContext(i, ContractPartContext);
        }
    };
    Object.defineProperty(ContractDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_contractDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContractDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterContractDefinition) {
            listener.enterContractDefinition(this);
        }
    };
    // @Override
    ContractDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitContractDefinition) {
            listener.exitContractDefinition(this);
        }
    };
    // @Override
    ContractDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitContractDefinition) {
            return visitor.visitContractDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContractDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContractDefinitionContext = ContractDefinitionContext;
var InheritanceSpecifierContext = /** @class */ (function (_super) {
    __extends(InheritanceSpecifierContext, _super);
    function InheritanceSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InheritanceSpecifierContext.prototype.userDefinedTypeName = function () {
        return this.getRuleContext(0, UserDefinedTypeNameContext);
    };
    InheritanceSpecifierContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(InheritanceSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_inheritanceSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InheritanceSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterInheritanceSpecifier) {
            listener.enterInheritanceSpecifier(this);
        }
    };
    // @Override
    InheritanceSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitInheritanceSpecifier) {
            listener.exitInheritanceSpecifier(this);
        }
    };
    // @Override
    InheritanceSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitInheritanceSpecifier) {
            return visitor.visitInheritanceSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InheritanceSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InheritanceSpecifierContext = InheritanceSpecifierContext;
var ContractPartContext = /** @class */ (function (_super) {
    __extends(ContractPartContext, _super);
    function ContractPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContractPartContext.prototype.stateVariableDeclaration = function () {
        return this.tryGetRuleContext(0, StateVariableDeclarationContext);
    };
    ContractPartContext.prototype.usingForDeclaration = function () {
        return this.tryGetRuleContext(0, UsingForDeclarationContext);
    };
    ContractPartContext.prototype.structDefinition = function () {
        return this.tryGetRuleContext(0, StructDefinitionContext);
    };
    ContractPartContext.prototype.constructorDefinition = function () {
        return this.tryGetRuleContext(0, ConstructorDefinitionContext);
    };
    ContractPartContext.prototype.modifierDefinition = function () {
        return this.tryGetRuleContext(0, ModifierDefinitionContext);
    };
    ContractPartContext.prototype.functionDefinition = function () {
        return this.tryGetRuleContext(0, FunctionDefinitionContext);
    };
    ContractPartContext.prototype.eventDefinition = function () {
        return this.tryGetRuleContext(0, EventDefinitionContext);
    };
    ContractPartContext.prototype.enumDefinition = function () {
        return this.tryGetRuleContext(0, EnumDefinitionContext);
    };
    Object.defineProperty(ContractPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_contractPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContractPartContext.prototype.enterRule = function (listener) {
        if (listener.enterContractPart) {
            listener.enterContractPart(this);
        }
    };
    // @Override
    ContractPartContext.prototype.exitRule = function (listener) {
        if (listener.exitContractPart) {
            listener.exitContractPart(this);
        }
    };
    // @Override
    ContractPartContext.prototype.accept = function (visitor) {
        if (visitor.visitContractPart) {
            return visitor.visitContractPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContractPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContractPartContext = ContractPartContext;
var StateVariableDeclarationContext = /** @class */ (function (_super) {
    __extends(StateVariableDeclarationContext, _super);
    function StateVariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StateVariableDeclarationContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    StateVariableDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    StateVariableDeclarationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    StateVariableDeclarationContext.prototype.PublicKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.PublicKeyword);
        }
        else {
            return this.getToken(SolidityParser.PublicKeyword, i);
        }
    };
    StateVariableDeclarationContext.prototype.InternalKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.InternalKeyword);
        }
        else {
            return this.getToken(SolidityParser.InternalKeyword, i);
        }
    };
    StateVariableDeclarationContext.prototype.PrivateKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.PrivateKeyword);
        }
        else {
            return this.getToken(SolidityParser.PrivateKeyword, i);
        }
    };
    StateVariableDeclarationContext.prototype.ConstantKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.ConstantKeyword);
        }
        else {
            return this.getToken(SolidityParser.ConstantKeyword, i);
        }
    };
    Object.defineProperty(StateVariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_stateVariableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StateVariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterStateVariableDeclaration) {
            listener.enterStateVariableDeclaration(this);
        }
    };
    // @Override
    StateVariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitStateVariableDeclaration) {
            listener.exitStateVariableDeclaration(this);
        }
    };
    // @Override
    StateVariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitStateVariableDeclaration) {
            return visitor.visitStateVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StateVariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StateVariableDeclarationContext = StateVariableDeclarationContext;
var UsingForDeclarationContext = /** @class */ (function (_super) {
    __extends(UsingForDeclarationContext, _super);
    function UsingForDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsingForDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    UsingForDeclarationContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(UsingForDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_usingForDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsingForDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterUsingForDeclaration) {
            listener.enterUsingForDeclaration(this);
        }
    };
    // @Override
    UsingForDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitUsingForDeclaration) {
            listener.exitUsingForDeclaration(this);
        }
    };
    // @Override
    UsingForDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitUsingForDeclaration) {
            return visitor.visitUsingForDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsingForDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsingForDeclarationContext = UsingForDeclarationContext;
var StructDefinitionContext = /** @class */ (function (_super) {
    __extends(StructDefinitionContext, _super);
    function StructDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    StructDefinitionContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    Object.defineProperty(StructDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_structDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterStructDefinition) {
            listener.enterStructDefinition(this);
        }
    };
    // @Override
    StructDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitStructDefinition) {
            listener.exitStructDefinition(this);
        }
    };
    // @Override
    StructDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitStructDefinition) {
            return visitor.visitStructDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDefinitionContext = StructDefinitionContext;
var ConstructorDefinitionContext = /** @class */ (function (_super) {
    __extends(ConstructorDefinitionContext, _super);
    function ConstructorDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorDefinitionContext.prototype.parameterList = function () {
        return this.getRuleContext(0, ParameterListContext);
    };
    ConstructorDefinitionContext.prototype.modifierList = function () {
        return this.getRuleContext(0, ModifierListContext);
    };
    ConstructorDefinitionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(ConstructorDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_constructorDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorDefinition) {
            listener.enterConstructorDefinition(this);
        }
    };
    // @Override
    ConstructorDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorDefinition) {
            listener.exitConstructorDefinition(this);
        }
    };
    // @Override
    ConstructorDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorDefinition) {
            return visitor.visitConstructorDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorDefinitionContext = ConstructorDefinitionContext;
var ModifierDefinitionContext = /** @class */ (function (_super) {
    __extends(ModifierDefinitionContext, _super);
    function ModifierDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ModifierDefinitionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ModifierDefinitionContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(ModifierDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_modifierDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterModifierDefinition) {
            listener.enterModifierDefinition(this);
        }
    };
    // @Override
    ModifierDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitModifierDefinition) {
            listener.exitModifierDefinition(this);
        }
    };
    // @Override
    ModifierDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitModifierDefinition) {
            return visitor.visitModifierDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierDefinitionContext = ModifierDefinitionContext;
var ModifierInvocationContext = /** @class */ (function (_super) {
    __extends(ModifierInvocationContext, _super);
    function ModifierInvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierInvocationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ModifierInvocationContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ModifierInvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_modifierInvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterModifierInvocation) {
            listener.enterModifierInvocation(this);
        }
    };
    // @Override
    ModifierInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitModifierInvocation) {
            listener.exitModifierInvocation(this);
        }
    };
    // @Override
    ModifierInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitModifierInvocation) {
            return visitor.visitModifierInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierInvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierInvocationContext = ModifierInvocationContext;
var FunctionDefinitionContext = /** @class */ (function (_super) {
    __extends(FunctionDefinitionContext, _super);
    function FunctionDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDefinitionContext.prototype.parameterList = function () {
        return this.getRuleContext(0, ParameterListContext);
    };
    FunctionDefinitionContext.prototype.modifierList = function () {
        return this.getRuleContext(0, ModifierListContext);
    };
    FunctionDefinitionContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    FunctionDefinitionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    FunctionDefinitionContext.prototype.returnParameters = function () {
        return this.tryGetRuleContext(0, ReturnParametersContext);
    };
    Object.defineProperty(FunctionDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_functionDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDefinition) {
            listener.enterFunctionDefinition(this);
        }
    };
    // @Override
    FunctionDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDefinition) {
            listener.exitFunctionDefinition(this);
        }
    };
    // @Override
    FunctionDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDefinition) {
            return visitor.visitFunctionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDefinitionContext = FunctionDefinitionContext;
var ReturnParametersContext = /** @class */ (function (_super) {
    __extends(ReturnParametersContext, _super);
    function ReturnParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnParametersContext.prototype.parameterList = function () {
        return this.getRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(ReturnParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_returnParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnParameters) {
            listener.enterReturnParameters(this);
        }
    };
    // @Override
    ReturnParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnParameters) {
            listener.exitReturnParameters(this);
        }
    };
    // @Override
    ReturnParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnParameters) {
            return visitor.visitReturnParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnParametersContext = ReturnParametersContext;
var ModifierListContext = /** @class */ (function (_super) {
    __extends(ModifierListContext, _super);
    function ModifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierListContext.prototype.modifierInvocation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }
        else {
            return this.getRuleContext(i, ModifierInvocationContext);
        }
    };
    ModifierListContext.prototype.stateMutability = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }
        else {
            return this.getRuleContext(i, StateMutabilityContext);
        }
    };
    ModifierListContext.prototype.ExternalKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.ExternalKeyword);
        }
        else {
            return this.getToken(SolidityParser.ExternalKeyword, i);
        }
    };
    ModifierListContext.prototype.PublicKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.PublicKeyword);
        }
        else {
            return this.getToken(SolidityParser.PublicKeyword, i);
        }
    };
    ModifierListContext.prototype.InternalKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.InternalKeyword);
        }
        else {
            return this.getToken(SolidityParser.InternalKeyword, i);
        }
    };
    ModifierListContext.prototype.PrivateKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.PrivateKeyword);
        }
        else {
            return this.getToken(SolidityParser.PrivateKeyword, i);
        }
    };
    Object.defineProperty(ModifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_modifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterModifierList) {
            listener.enterModifierList(this);
        }
    };
    // @Override
    ModifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitModifierList) {
            listener.exitModifierList(this);
        }
    };
    // @Override
    ModifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitModifierList) {
            return visitor.visitModifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierListContext = ModifierListContext;
var EventDefinitionContext = /** @class */ (function (_super) {
    __extends(EventDefinitionContext, _super);
    function EventDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EventDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    EventDefinitionContext.prototype.eventParameterList = function () {
        return this.getRuleContext(0, EventParameterListContext);
    };
    EventDefinitionContext.prototype.AnonymousKeyword = function () { return this.tryGetToken(SolidityParser.AnonymousKeyword, 0); };
    Object.defineProperty(EventDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_eventDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EventDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterEventDefinition) {
            listener.enterEventDefinition(this);
        }
    };
    // @Override
    EventDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitEventDefinition) {
            listener.exitEventDefinition(this);
        }
    };
    // @Override
    EventDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitEventDefinition) {
            return visitor.visitEventDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EventDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EventDefinitionContext = EventDefinitionContext;
var EnumValueContext = /** @class */ (function (_super) {
    __extends(EnumValueContext, _super);
    function EnumValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValueContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(EnumValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_enumValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValueContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValue) {
            listener.enterEnumValue(this);
        }
    };
    // @Override
    EnumValueContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValue) {
            listener.exitEnumValue(this);
        }
    };
    // @Override
    EnumValueContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValue) {
            return visitor.visitEnumValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValueContext = EnumValueContext;
var EnumDefinitionContext = /** @class */ (function (_super) {
    __extends(EnumDefinitionContext, _super);
    function EnumDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    EnumDefinitionContext.prototype.enumValue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueContext);
        }
        else {
            return this.getRuleContext(i, EnumValueContext);
        }
    };
    Object.defineProperty(EnumDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_enumDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumDefinition) {
            listener.enterEnumDefinition(this);
        }
    };
    // @Override
    EnumDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumDefinition) {
            listener.exitEnumDefinition(this);
        }
    };
    // @Override
    EnumDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumDefinition) {
            return visitor.visitEnumDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumDefinitionContext = EnumDefinitionContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_parameterList; },
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
    ParameterContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    ParameterContext.prototype.storageLocation = function () {
        return this.tryGetRuleContext(0, StorageLocationContext);
    };
    ParameterContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(ParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_parameter; },
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
var EventParameterListContext = /** @class */ (function (_super) {
    __extends(EventParameterListContext, _super);
    function EventParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EventParameterListContext.prototype.eventParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EventParameterContext);
        }
        else {
            return this.getRuleContext(i, EventParameterContext);
        }
    };
    Object.defineProperty(EventParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_eventParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EventParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterEventParameterList) {
            listener.enterEventParameterList(this);
        }
    };
    // @Override
    EventParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitEventParameterList) {
            listener.exitEventParameterList(this);
        }
    };
    // @Override
    EventParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitEventParameterList) {
            return visitor.visitEventParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EventParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EventParameterListContext = EventParameterListContext;
var EventParameterContext = /** @class */ (function (_super) {
    __extends(EventParameterContext, _super);
    function EventParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EventParameterContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    EventParameterContext.prototype.IndexedKeyword = function () { return this.tryGetToken(SolidityParser.IndexedKeyword, 0); };
    EventParameterContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(EventParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_eventParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EventParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterEventParameter) {
            listener.enterEventParameter(this);
        }
    };
    // @Override
    EventParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitEventParameter) {
            listener.exitEventParameter(this);
        }
    };
    // @Override
    EventParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitEventParameter) {
            return visitor.visitEventParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EventParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EventParameterContext = EventParameterContext;
var FunctionTypeParameterListContext = /** @class */ (function (_super) {
    __extends(FunctionTypeParameterListContext, _super);
    function FunctionTypeParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeParameterListContext.prototype.functionTypeParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionTypeParameterContext);
        }
        else {
            return this.getRuleContext(i, FunctionTypeParameterContext);
        }
    };
    Object.defineProperty(FunctionTypeParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_functionTypeParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionTypeParameterList) {
            listener.enterFunctionTypeParameterList(this);
        }
    };
    // @Override
    FunctionTypeParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionTypeParameterList) {
            listener.exitFunctionTypeParameterList(this);
        }
    };
    // @Override
    FunctionTypeParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionTypeParameterList) {
            return visitor.visitFunctionTypeParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeParameterListContext = FunctionTypeParameterListContext;
var FunctionTypeParameterContext = /** @class */ (function (_super) {
    __extends(FunctionTypeParameterContext, _super);
    function FunctionTypeParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeParameterContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    FunctionTypeParameterContext.prototype.storageLocation = function () {
        return this.tryGetRuleContext(0, StorageLocationContext);
    };
    Object.defineProperty(FunctionTypeParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_functionTypeParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionTypeParameter) {
            listener.enterFunctionTypeParameter(this);
        }
    };
    // @Override
    FunctionTypeParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionTypeParameter) {
            listener.exitFunctionTypeParameter(this);
        }
    };
    // @Override
    FunctionTypeParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionTypeParameter) {
            return visitor.visitFunctionTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeParameterContext = FunctionTypeParameterContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    VariableDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    VariableDeclarationContext.prototype.storageLocation = function () {
        return this.tryGetRuleContext(0, StorageLocationContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_variableDeclaration; },
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
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.elementaryTypeName = function () {
        return this.tryGetRuleContext(0, ElementaryTypeNameContext);
    };
    TypeNameContext.prototype.userDefinedTypeName = function () {
        return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
    };
    TypeNameContext.prototype.mapping = function () {
        return this.tryGetRuleContext(0, MappingContext);
    };
    TypeNameContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    TypeNameContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    TypeNameContext.prototype.functionTypeName = function () {
        return this.tryGetRuleContext(0, FunctionTypeNameContext);
    };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_typeName; },
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
var UserDefinedTypeNameContext = /** @class */ (function (_super) {
    __extends(UserDefinedTypeNameContext, _super);
    function UserDefinedTypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserDefinedTypeNameContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(UserDefinedTypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_userDefinedTypeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserDefinedTypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterUserDefinedTypeName) {
            listener.enterUserDefinedTypeName(this);
        }
    };
    // @Override
    UserDefinedTypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitUserDefinedTypeName) {
            listener.exitUserDefinedTypeName(this);
        }
    };
    // @Override
    UserDefinedTypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitUserDefinedTypeName) {
            return visitor.visitUserDefinedTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserDefinedTypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserDefinedTypeNameContext = UserDefinedTypeNameContext;
var MappingContext = /** @class */ (function (_super) {
    __extends(MappingContext, _super);
    function MappingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MappingContext.prototype.elementaryTypeName = function () {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    };
    MappingContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(MappingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_mapping; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MappingContext.prototype.enterRule = function (listener) {
        if (listener.enterMapping) {
            listener.enterMapping(this);
        }
    };
    // @Override
    MappingContext.prototype.exitRule = function (listener) {
        if (listener.exitMapping) {
            listener.exitMapping(this);
        }
    };
    // @Override
    MappingContext.prototype.accept = function (visitor) {
        if (visitor.visitMapping) {
            return visitor.visitMapping(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MappingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MappingContext = MappingContext;
var FunctionTypeNameContext = /** @class */ (function (_super) {
    __extends(FunctionTypeNameContext, _super);
    function FunctionTypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeNameContext.prototype.functionTypeParameterList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionTypeParameterListContext);
        }
        else {
            return this.getRuleContext(i, FunctionTypeParameterListContext);
        }
    };
    FunctionTypeNameContext.prototype.InternalKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.InternalKeyword);
        }
        else {
            return this.getToken(SolidityParser.InternalKeyword, i);
        }
    };
    FunctionTypeNameContext.prototype.ExternalKeyword = function (i) {
        if (i === undefined) {
            return this.getTokens(SolidityParser.ExternalKeyword);
        }
        else {
            return this.getToken(SolidityParser.ExternalKeyword, i);
        }
    };
    FunctionTypeNameContext.prototype.stateMutability = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }
        else {
            return this.getRuleContext(i, StateMutabilityContext);
        }
    };
    Object.defineProperty(FunctionTypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_functionTypeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionTypeName) {
            listener.enterFunctionTypeName(this);
        }
    };
    // @Override
    FunctionTypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionTypeName) {
            listener.exitFunctionTypeName(this);
        }
    };
    // @Override
    FunctionTypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionTypeName) {
            return visitor.visitFunctionTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeNameContext = FunctionTypeNameContext;
var StorageLocationContext = /** @class */ (function (_super) {
    __extends(StorageLocationContext, _super);
    function StorageLocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StorageLocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_storageLocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StorageLocationContext.prototype.enterRule = function (listener) {
        if (listener.enterStorageLocation) {
            listener.enterStorageLocation(this);
        }
    };
    // @Override
    StorageLocationContext.prototype.exitRule = function (listener) {
        if (listener.exitStorageLocation) {
            listener.exitStorageLocation(this);
        }
    };
    // @Override
    StorageLocationContext.prototype.accept = function (visitor) {
        if (visitor.visitStorageLocation) {
            return visitor.visitStorageLocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StorageLocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StorageLocationContext = StorageLocationContext;
var StateMutabilityContext = /** @class */ (function (_super) {
    __extends(StateMutabilityContext, _super);
    function StateMutabilityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StateMutabilityContext.prototype.PureKeyword = function () { return this.tryGetToken(SolidityParser.PureKeyword, 0); };
    StateMutabilityContext.prototype.ConstantKeyword = function () { return this.tryGetToken(SolidityParser.ConstantKeyword, 0); };
    StateMutabilityContext.prototype.ViewKeyword = function () { return this.tryGetToken(SolidityParser.ViewKeyword, 0); };
    StateMutabilityContext.prototype.PayableKeyword = function () { return this.tryGetToken(SolidityParser.PayableKeyword, 0); };
    Object.defineProperty(StateMutabilityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_stateMutability; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StateMutabilityContext.prototype.enterRule = function (listener) {
        if (listener.enterStateMutability) {
            listener.enterStateMutability(this);
        }
    };
    // @Override
    StateMutabilityContext.prototype.exitRule = function (listener) {
        if (listener.exitStateMutability) {
            listener.exitStateMutability(this);
        }
    };
    // @Override
    StateMutabilityContext.prototype.accept = function (visitor) {
        if (visitor.visitStateMutability) {
            return visitor.visitStateMutability(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StateMutabilityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StateMutabilityContext = StateMutabilityContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_block; },
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
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    StatementContext.prototype.whileStatement = function () {
        return this.tryGetRuleContext(0, WhileStatementContext);
    };
    StatementContext.prototype.forStatement = function () {
        return this.tryGetRuleContext(0, ForStatementContext);
    };
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.inlineAssemblyStatement = function () {
        return this.tryGetRuleContext(0, InlineAssemblyStatementContext);
    };
    StatementContext.prototype.doWhileStatement = function () {
        return this.tryGetRuleContext(0, DoWhileStatementContext);
    };
    StatementContext.prototype.continueStatement = function () {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    };
    StatementContext.prototype.breakStatement = function () {
        return this.tryGetRuleContext(0, BreakStatementContext);
    };
    StatementContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    StatementContext.prototype.throwStatement = function () {
        return this.tryGetRuleContext(0, ThrowStatementContext);
    };
    StatementContext.prototype.emitStatement = function () {
        return this.tryGetRuleContext(0, EmitStatementContext);
    };
    StatementContext.prototype.simpleStatement = function () {
        return this.tryGetRuleContext(0, SimpleStatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_statement; },
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
var ExpressionStatementContext = /** @class */ (function (_super) {
    __extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_expressionStatement; },
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
        get: function () { return SolidityParser.RULE_ifStatement; },
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
        get: function () { return SolidityParser.RULE_whileStatement; },
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
var SimpleStatementContext = /** @class */ (function (_super) {
    __extends(SimpleStatementContext, _super);
    function SimpleStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleStatementContext.prototype.variableDeclarationStatement = function () {
        return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
    };
    SimpleStatementContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    Object.defineProperty(SimpleStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_simpleStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleStatement) {
            listener.enterSimpleStatement(this);
        }
    };
    // @Override
    SimpleStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleStatement) {
            listener.exitSimpleStatement(this);
        }
    };
    // @Override
    SimpleStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleStatement) {
            return visitor.visitSimpleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleStatementContext = SimpleStatementContext;
var ForStatementContext = /** @class */ (function (_super) {
    __extends(ForStatementContext, _super);
    function ForStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForStatementContext.prototype.simpleStatement = function () {
        return this.tryGetRuleContext(0, SimpleStatementContext);
    };
    ForStatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ForStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_forStatement; },
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
var InlineAssemblyStatementContext = /** @class */ (function (_super) {
    __extends(InlineAssemblyStatementContext, _super);
    function InlineAssemblyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InlineAssemblyStatementContext.prototype.assemblyBlock = function () {
        return this.getRuleContext(0, AssemblyBlockContext);
    };
    InlineAssemblyStatementContext.prototype.StringLiteral = function () { return this.tryGetToken(SolidityParser.StringLiteral, 0); };
    Object.defineProperty(InlineAssemblyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_inlineAssemblyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InlineAssemblyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterInlineAssemblyStatement) {
            listener.enterInlineAssemblyStatement(this);
        }
    };
    // @Override
    InlineAssemblyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitInlineAssemblyStatement) {
            listener.exitInlineAssemblyStatement(this);
        }
    };
    // @Override
    InlineAssemblyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitInlineAssemblyStatement) {
            return visitor.visitInlineAssemblyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InlineAssemblyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InlineAssemblyStatementContext = InlineAssemblyStatementContext;
var DoWhileStatementContext = /** @class */ (function (_super) {
    __extends(DoWhileStatementContext, _super);
    function DoWhileStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoWhileStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    DoWhileStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DoWhileStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_doWhileStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoWhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDoWhileStatement) {
            listener.enterDoWhileStatement(this);
        }
    };
    // @Override
    DoWhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDoWhileStatement) {
            listener.exitDoWhileStatement(this);
        }
    };
    // @Override
    DoWhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDoWhileStatement) {
            return visitor.visitDoWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoWhileStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoWhileStatementContext = DoWhileStatementContext;
var ContinueStatementContext = /** @class */ (function (_super) {
    __extends(ContinueStatementContext, _super);
    function ContinueStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContinueStatementContext.prototype.ContinueKeyword = function () { return this.getToken(SolidityParser.ContinueKeyword, 0); };
    Object.defineProperty(ContinueStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_continueStatement; },
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
var BreakStatementContext = /** @class */ (function (_super) {
    __extends(BreakStatementContext, _super);
    function BreakStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BreakStatementContext.prototype.BreakKeyword = function () { return this.getToken(SolidityParser.BreakKeyword, 0); };
    Object.defineProperty(BreakStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_breakStatement; },
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
        get: function () { return SolidityParser.RULE_returnStatement; },
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
var ThrowStatementContext = /** @class */ (function (_super) {
    __extends(ThrowStatementContext, _super);
    function ThrowStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ThrowStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_throwStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowStatement) {
            return visitor.visitThrowStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowStatementContext = ThrowStatementContext;
var EmitStatementContext = /** @class */ (function (_super) {
    __extends(EmitStatementContext, _super);
    function EmitStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmitStatementContext.prototype.functionCall = function () {
        return this.getRuleContext(0, FunctionCallContext);
    };
    Object.defineProperty(EmitStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_emitStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmitStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEmitStatement) {
            listener.enterEmitStatement(this);
        }
    };
    // @Override
    EmitStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEmitStatement) {
            listener.exitEmitStatement(this);
        }
    };
    // @Override
    EmitStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEmitStatement) {
            return visitor.visitEmitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmitStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmitStatementContext = EmitStatementContext;
var VariableDeclarationStatementContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationStatementContext, _super);
    function VariableDeclarationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationStatementContext.prototype.identifierList = function () {
        return this.tryGetRuleContext(0, IdentifierListContext);
    };
    VariableDeclarationStatementContext.prototype.variableDeclaration = function () {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    };
    VariableDeclarationStatementContext.prototype.variableDeclarationList = function () {
        return this.tryGetRuleContext(0, VariableDeclarationListContext);
    };
    VariableDeclarationStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(VariableDeclarationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_variableDeclarationStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarationStatement) {
            listener.enterVariableDeclarationStatement(this);
        }
    };
    // @Override
    VariableDeclarationStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarationStatement) {
            listener.exitVariableDeclarationStatement(this);
        }
    };
    // @Override
    VariableDeclarationStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarationStatement) {
            return visitor.visitVariableDeclarationStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationStatementContext = VariableDeclarationStatementContext;
var VariableDeclarationListContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationListContext, _super);
    function VariableDeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationListContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    Object.defineProperty(VariableDeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_variableDeclarationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationListContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarationList) {
            listener.enterVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarationList) {
            listener.exitVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarationList) {
            return visitor.visitVariableDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationListContext = VariableDeclarationListContext;
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
        get: function () { return SolidityParser.RULE_identifierList; },
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
var ElementaryTypeNameContext = /** @class */ (function (_super) {
    __extends(ElementaryTypeNameContext, _super);
    function ElementaryTypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementaryTypeNameContext.prototype.Int = function () { return this.tryGetToken(SolidityParser.Int, 0); };
    ElementaryTypeNameContext.prototype.Uint = function () { return this.tryGetToken(SolidityParser.Uint, 0); };
    ElementaryTypeNameContext.prototype.Byte = function () { return this.tryGetToken(SolidityParser.Byte, 0); };
    ElementaryTypeNameContext.prototype.Fixed = function () { return this.tryGetToken(SolidityParser.Fixed, 0); };
    ElementaryTypeNameContext.prototype.Ufixed = function () { return this.tryGetToken(SolidityParser.Ufixed, 0); };
    Object.defineProperty(ElementaryTypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_elementaryTypeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementaryTypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterElementaryTypeName) {
            listener.enterElementaryTypeName(this);
        }
    };
    // @Override
    ElementaryTypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitElementaryTypeName) {
            listener.exitElementaryTypeName(this);
        }
    };
    // @Override
    ElementaryTypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitElementaryTypeName) {
            return visitor.visitElementaryTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementaryTypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementaryTypeNameContext = ElementaryTypeNameContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ExpressionContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    ExpressionContext.prototype.functionCallArguments = function () {
        return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
    };
    ExpressionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ExpressionContext.prototype.primaryExpression = function () {
        return this.tryGetRuleContext(0, PrimaryExpressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_expression; },
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
var PrimaryExpressionContext = /** @class */ (function (_super) {
    __extends(PrimaryExpressionContext, _super);
    function PrimaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryExpressionContext.prototype.BooleanLiteral = function () { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); };
    PrimaryExpressionContext.prototype.numberLiteral = function () {
        return this.tryGetRuleContext(0, NumberLiteralContext);
    };
    PrimaryExpressionContext.prototype.HexLiteral = function () { return this.tryGetToken(SolidityParser.HexLiteral, 0); };
    PrimaryExpressionContext.prototype.StringLiteral = function () { return this.tryGetToken(SolidityParser.StringLiteral, 0); };
    PrimaryExpressionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    PrimaryExpressionContext.prototype.tupleExpression = function () {
        return this.tryGetRuleContext(0, TupleExpressionContext);
    };
    PrimaryExpressionContext.prototype.elementaryTypeNameExpression = function () {
        return this.tryGetRuleContext(0, ElementaryTypeNameExpressionContext);
    };
    Object.defineProperty(PrimaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_primaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryExpression) {
            listener.enterPrimaryExpression(this);
        }
    };
    // @Override
    PrimaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryExpression) {
            listener.exitPrimaryExpression(this);
        }
    };
    // @Override
    PrimaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryExpression) {
            return visitor.visitPrimaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryExpressionContext = PrimaryExpressionContext;
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
        get: function () { return SolidityParser.RULE_expressionList; },
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
var NameValueListContext = /** @class */ (function (_super) {
    __extends(NameValueListContext, _super);
    function NameValueListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameValueListContext.prototype.nameValue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameValueContext);
        }
        else {
            return this.getRuleContext(i, NameValueContext);
        }
    };
    Object.defineProperty(NameValueListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_nameValueList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameValueListContext.prototype.enterRule = function (listener) {
        if (listener.enterNameValueList) {
            listener.enterNameValueList(this);
        }
    };
    // @Override
    NameValueListContext.prototype.exitRule = function (listener) {
        if (listener.exitNameValueList) {
            listener.exitNameValueList(this);
        }
    };
    // @Override
    NameValueListContext.prototype.accept = function (visitor) {
        if (visitor.visitNameValueList) {
            return visitor.visitNameValueList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameValueListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameValueListContext = NameValueListContext;
var NameValueContext = /** @class */ (function (_super) {
    __extends(NameValueContext, _super);
    function NameValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameValueContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    NameValueContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(NameValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_nameValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameValueContext.prototype.enterRule = function (listener) {
        if (listener.enterNameValue) {
            listener.enterNameValue(this);
        }
    };
    // @Override
    NameValueContext.prototype.exitRule = function (listener) {
        if (listener.exitNameValue) {
            listener.exitNameValue(this);
        }
    };
    // @Override
    NameValueContext.prototype.accept = function (visitor) {
        if (visitor.visitNameValue) {
            return visitor.visitNameValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameValueContext = NameValueContext;
var FunctionCallArgumentsContext = /** @class */ (function (_super) {
    __extends(FunctionCallArgumentsContext, _super);
    function FunctionCallArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallArgumentsContext.prototype.nameValueList = function () {
        return this.tryGetRuleContext(0, NameValueListContext);
    };
    FunctionCallArgumentsContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(FunctionCallArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_functionCallArguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCallArguments) {
            listener.enterFunctionCallArguments(this);
        }
    };
    // @Override
    FunctionCallArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCallArguments) {
            listener.exitFunctionCallArguments(this);
        }
    };
    // @Override
    FunctionCallArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCallArguments) {
            return visitor.visitFunctionCallArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallArgumentsContext = FunctionCallArgumentsContext;
var FunctionCallContext = /** @class */ (function (_super) {
    __extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    FunctionCallContext.prototype.functionCallArguments = function () {
        return this.getRuleContext(0, FunctionCallArgumentsContext);
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_functionCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallContext = FunctionCallContext;
var AssemblyBlockContext = /** @class */ (function (_super) {
    __extends(AssemblyBlockContext, _super);
    function AssemblyBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyBlockContext.prototype.assemblyItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssemblyItemContext);
        }
        else {
            return this.getRuleContext(i, AssemblyItemContext);
        }
    };
    Object.defineProperty(AssemblyBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyBlock) {
            listener.enterAssemblyBlock(this);
        }
    };
    // @Override
    AssemblyBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyBlock) {
            listener.exitAssemblyBlock(this);
        }
    };
    // @Override
    AssemblyBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyBlock) {
            return visitor.visitAssemblyBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyBlockContext = AssemblyBlockContext;
var AssemblyItemContext = /** @class */ (function (_super) {
    __extends(AssemblyItemContext, _super);
    function AssemblyItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyItemContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    AssemblyItemContext.prototype.assemblyBlock = function () {
        return this.tryGetRuleContext(0, AssemblyBlockContext);
    };
    AssemblyItemContext.prototype.assemblyExpression = function () {
        return this.tryGetRuleContext(0, AssemblyExpressionContext);
    };
    AssemblyItemContext.prototype.assemblyLocalDefinition = function () {
        return this.tryGetRuleContext(0, AssemblyLocalDefinitionContext);
    };
    AssemblyItemContext.prototype.assemblyAssignment = function () {
        return this.tryGetRuleContext(0, AssemblyAssignmentContext);
    };
    AssemblyItemContext.prototype.assemblyStackAssignment = function () {
        return this.tryGetRuleContext(0, AssemblyStackAssignmentContext);
    };
    AssemblyItemContext.prototype.labelDefinition = function () {
        return this.tryGetRuleContext(0, LabelDefinitionContext);
    };
    AssemblyItemContext.prototype.assemblySwitch = function () {
        return this.tryGetRuleContext(0, AssemblySwitchContext);
    };
    AssemblyItemContext.prototype.assemblyFunctionDefinition = function () {
        return this.tryGetRuleContext(0, AssemblyFunctionDefinitionContext);
    };
    AssemblyItemContext.prototype.assemblyFor = function () {
        return this.tryGetRuleContext(0, AssemblyForContext);
    };
    AssemblyItemContext.prototype.assemblyIf = function () {
        return this.tryGetRuleContext(0, AssemblyIfContext);
    };
    AssemblyItemContext.prototype.BreakKeyword = function () { return this.tryGetToken(SolidityParser.BreakKeyword, 0); };
    AssemblyItemContext.prototype.ContinueKeyword = function () { return this.tryGetToken(SolidityParser.ContinueKeyword, 0); };
    AssemblyItemContext.prototype.subAssembly = function () {
        return this.tryGetRuleContext(0, SubAssemblyContext);
    };
    AssemblyItemContext.prototype.numberLiteral = function () {
        return this.tryGetRuleContext(0, NumberLiteralContext);
    };
    AssemblyItemContext.prototype.StringLiteral = function () { return this.tryGetToken(SolidityParser.StringLiteral, 0); };
    AssemblyItemContext.prototype.HexLiteral = function () { return this.tryGetToken(SolidityParser.HexLiteral, 0); };
    Object.defineProperty(AssemblyItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyItemContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyItem) {
            listener.enterAssemblyItem(this);
        }
    };
    // @Override
    AssemblyItemContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyItem) {
            listener.exitAssemblyItem(this);
        }
    };
    // @Override
    AssemblyItemContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyItem) {
            return visitor.visitAssemblyItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyItemContext = AssemblyItemContext;
var AssemblyExpressionContext = /** @class */ (function (_super) {
    __extends(AssemblyExpressionContext, _super);
    function AssemblyExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyExpressionContext.prototype.assemblyCall = function () {
        return this.tryGetRuleContext(0, AssemblyCallContext);
    };
    AssemblyExpressionContext.prototype.assemblyLiteral = function () {
        return this.tryGetRuleContext(0, AssemblyLiteralContext);
    };
    Object.defineProperty(AssemblyExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyExpression) {
            listener.enterAssemblyExpression(this);
        }
    };
    // @Override
    AssemblyExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyExpression) {
            listener.exitAssemblyExpression(this);
        }
    };
    // @Override
    AssemblyExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyExpression) {
            return visitor.visitAssemblyExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyExpressionContext = AssemblyExpressionContext;
var AssemblyCallContext = /** @class */ (function (_super) {
    __extends(AssemblyCallContext, _super);
    function AssemblyCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyCallContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    AssemblyCallContext.prototype.assemblyExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssemblyExpressionContext);
        }
        else {
            return this.getRuleContext(i, AssemblyExpressionContext);
        }
    };
    Object.defineProperty(AssemblyCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyCallContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyCall) {
            listener.enterAssemblyCall(this);
        }
    };
    // @Override
    AssemblyCallContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyCall) {
            listener.exitAssemblyCall(this);
        }
    };
    // @Override
    AssemblyCallContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyCall) {
            return visitor.visitAssemblyCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyCallContext = AssemblyCallContext;
var AssemblyLocalDefinitionContext = /** @class */ (function (_super) {
    __extends(AssemblyLocalDefinitionContext, _super);
    function AssemblyLocalDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyLocalDefinitionContext.prototype.assemblyIdentifierOrList = function () {
        return this.getRuleContext(0, AssemblyIdentifierOrListContext);
    };
    AssemblyLocalDefinitionContext.prototype.assemblyExpression = function () {
        return this.tryGetRuleContext(0, AssemblyExpressionContext);
    };
    Object.defineProperty(AssemblyLocalDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyLocalDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyLocalDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyLocalDefinition) {
            listener.enterAssemblyLocalDefinition(this);
        }
    };
    // @Override
    AssemblyLocalDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyLocalDefinition) {
            listener.exitAssemblyLocalDefinition(this);
        }
    };
    // @Override
    AssemblyLocalDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyLocalDefinition) {
            return visitor.visitAssemblyLocalDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyLocalDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyLocalDefinitionContext = AssemblyLocalDefinitionContext;
var AssemblyAssignmentContext = /** @class */ (function (_super) {
    __extends(AssemblyAssignmentContext, _super);
    function AssemblyAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyAssignmentContext.prototype.assemblyIdentifierOrList = function () {
        return this.getRuleContext(0, AssemblyIdentifierOrListContext);
    };
    AssemblyAssignmentContext.prototype.assemblyExpression = function () {
        return this.getRuleContext(0, AssemblyExpressionContext);
    };
    Object.defineProperty(AssemblyAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyAssignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyAssignment) {
            listener.enterAssemblyAssignment(this);
        }
    };
    // @Override
    AssemblyAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyAssignment) {
            listener.exitAssemblyAssignment(this);
        }
    };
    // @Override
    AssemblyAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyAssignment) {
            return visitor.visitAssemblyAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyAssignmentContext = AssemblyAssignmentContext;
var AssemblyIdentifierOrListContext = /** @class */ (function (_super) {
    __extends(AssemblyIdentifierOrListContext, _super);
    function AssemblyIdentifierOrListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyIdentifierOrListContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    AssemblyIdentifierOrListContext.prototype.assemblyIdentifierList = function () {
        return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
    };
    Object.defineProperty(AssemblyIdentifierOrListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyIdentifierOrList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyIdentifierOrListContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyIdentifierOrList) {
            listener.enterAssemblyIdentifierOrList(this);
        }
    };
    // @Override
    AssemblyIdentifierOrListContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyIdentifierOrList) {
            listener.exitAssemblyIdentifierOrList(this);
        }
    };
    // @Override
    AssemblyIdentifierOrListContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyIdentifierOrList) {
            return visitor.visitAssemblyIdentifierOrList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyIdentifierOrListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyIdentifierOrListContext = AssemblyIdentifierOrListContext;
var AssemblyIdentifierListContext = /** @class */ (function (_super) {
    __extends(AssemblyIdentifierListContext, _super);
    function AssemblyIdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyIdentifierListContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(AssemblyIdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyIdentifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyIdentifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyIdentifierList) {
            listener.enterAssemblyIdentifierList(this);
        }
    };
    // @Override
    AssemblyIdentifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyIdentifierList) {
            listener.exitAssemblyIdentifierList(this);
        }
    };
    // @Override
    AssemblyIdentifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyIdentifierList) {
            return visitor.visitAssemblyIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyIdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyIdentifierListContext = AssemblyIdentifierListContext;
var AssemblyStackAssignmentContext = /** @class */ (function (_super) {
    __extends(AssemblyStackAssignmentContext, _super);
    function AssemblyStackAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyStackAssignmentContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(AssemblyStackAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyStackAssignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyStackAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyStackAssignment) {
            listener.enterAssemblyStackAssignment(this);
        }
    };
    // @Override
    AssemblyStackAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyStackAssignment) {
            listener.exitAssemblyStackAssignment(this);
        }
    };
    // @Override
    AssemblyStackAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyStackAssignment) {
            return visitor.visitAssemblyStackAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyStackAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyStackAssignmentContext = AssemblyStackAssignmentContext;
var LabelDefinitionContext = /** @class */ (function (_super) {
    __extends(LabelDefinitionContext, _super);
    function LabelDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(LabelDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_labelDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterLabelDefinition) {
            listener.enterLabelDefinition(this);
        }
    };
    // @Override
    LabelDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitLabelDefinition) {
            listener.exitLabelDefinition(this);
        }
    };
    // @Override
    LabelDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitLabelDefinition) {
            return visitor.visitLabelDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelDefinitionContext = LabelDefinitionContext;
var AssemblySwitchContext = /** @class */ (function (_super) {
    __extends(AssemblySwitchContext, _super);
    function AssemblySwitchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblySwitchContext.prototype.assemblyExpression = function () {
        return this.getRuleContext(0, AssemblyExpressionContext);
    };
    AssemblySwitchContext.prototype.assemblyCase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssemblyCaseContext);
        }
        else {
            return this.getRuleContext(i, AssemblyCaseContext);
        }
    };
    Object.defineProperty(AssemblySwitchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblySwitch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblySwitchContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblySwitch) {
            listener.enterAssemblySwitch(this);
        }
    };
    // @Override
    AssemblySwitchContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblySwitch) {
            listener.exitAssemblySwitch(this);
        }
    };
    // @Override
    AssemblySwitchContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblySwitch) {
            return visitor.visitAssemblySwitch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblySwitchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblySwitchContext = AssemblySwitchContext;
var AssemblyCaseContext = /** @class */ (function (_super) {
    __extends(AssemblyCaseContext, _super);
    function AssemblyCaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyCaseContext.prototype.assemblyLiteral = function () {
        return this.tryGetRuleContext(0, AssemblyLiteralContext);
    };
    AssemblyCaseContext.prototype.assemblyBlock = function () {
        return this.getRuleContext(0, AssemblyBlockContext);
    };
    Object.defineProperty(AssemblyCaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyCase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyCaseContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyCase) {
            listener.enterAssemblyCase(this);
        }
    };
    // @Override
    AssemblyCaseContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyCase) {
            listener.exitAssemblyCase(this);
        }
    };
    // @Override
    AssemblyCaseContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyCase) {
            return visitor.visitAssemblyCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyCaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyCaseContext = AssemblyCaseContext;
var AssemblyFunctionDefinitionContext = /** @class */ (function (_super) {
    __extends(AssemblyFunctionDefinitionContext, _super);
    function AssemblyFunctionDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyFunctionDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    AssemblyFunctionDefinitionContext.prototype.assemblyBlock = function () {
        return this.getRuleContext(0, AssemblyBlockContext);
    };
    AssemblyFunctionDefinitionContext.prototype.assemblyIdentifierList = function () {
        return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
    };
    AssemblyFunctionDefinitionContext.prototype.assemblyFunctionReturns = function () {
        return this.tryGetRuleContext(0, AssemblyFunctionReturnsContext);
    };
    Object.defineProperty(AssemblyFunctionDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyFunctionDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyFunctionDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyFunctionDefinition) {
            listener.enterAssemblyFunctionDefinition(this);
        }
    };
    // @Override
    AssemblyFunctionDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyFunctionDefinition) {
            listener.exitAssemblyFunctionDefinition(this);
        }
    };
    // @Override
    AssemblyFunctionDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyFunctionDefinition) {
            return visitor.visitAssemblyFunctionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyFunctionDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyFunctionDefinitionContext = AssemblyFunctionDefinitionContext;
var AssemblyFunctionReturnsContext = /** @class */ (function (_super) {
    __extends(AssemblyFunctionReturnsContext, _super);
    function AssemblyFunctionReturnsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyFunctionReturnsContext.prototype.assemblyIdentifierList = function () {
        return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
    };
    Object.defineProperty(AssemblyFunctionReturnsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyFunctionReturns; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyFunctionReturnsContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyFunctionReturns) {
            listener.enterAssemblyFunctionReturns(this);
        }
    };
    // @Override
    AssemblyFunctionReturnsContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyFunctionReturns) {
            listener.exitAssemblyFunctionReturns(this);
        }
    };
    // @Override
    AssemblyFunctionReturnsContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyFunctionReturns) {
            return visitor.visitAssemblyFunctionReturns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyFunctionReturnsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyFunctionReturnsContext = AssemblyFunctionReturnsContext;
var AssemblyForContext = /** @class */ (function (_super) {
    __extends(AssemblyForContext, _super);
    function AssemblyForContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyForContext.prototype.assemblyExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssemblyExpressionContext);
        }
        else {
            return this.getRuleContext(i, AssemblyExpressionContext);
        }
    };
    AssemblyForContext.prototype.assemblyBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssemblyBlockContext);
        }
        else {
            return this.getRuleContext(i, AssemblyBlockContext);
        }
    };
    Object.defineProperty(AssemblyForContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyFor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyForContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyFor) {
            listener.enterAssemblyFor(this);
        }
    };
    // @Override
    AssemblyForContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyFor) {
            listener.exitAssemblyFor(this);
        }
    };
    // @Override
    AssemblyForContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyFor) {
            return visitor.visitAssemblyFor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyForContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyForContext = AssemblyForContext;
var AssemblyIfContext = /** @class */ (function (_super) {
    __extends(AssemblyIfContext, _super);
    function AssemblyIfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyIfContext.prototype.assemblyExpression = function () {
        return this.getRuleContext(0, AssemblyExpressionContext);
    };
    AssemblyIfContext.prototype.assemblyBlock = function () {
        return this.getRuleContext(0, AssemblyBlockContext);
    };
    Object.defineProperty(AssemblyIfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyIf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyIfContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyIf) {
            listener.enterAssemblyIf(this);
        }
    };
    // @Override
    AssemblyIfContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyIf) {
            listener.exitAssemblyIf(this);
        }
    };
    // @Override
    AssemblyIfContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyIf) {
            return visitor.visitAssemblyIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyIfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyIfContext = AssemblyIfContext;
var AssemblyLiteralContext = /** @class */ (function (_super) {
    __extends(AssemblyLiteralContext, _super);
    function AssemblyLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblyLiteralContext.prototype.StringLiteral = function () { return this.tryGetToken(SolidityParser.StringLiteral, 0); };
    AssemblyLiteralContext.prototype.DecimalNumber = function () { return this.tryGetToken(SolidityParser.DecimalNumber, 0); };
    AssemblyLiteralContext.prototype.HexNumber = function () { return this.tryGetToken(SolidityParser.HexNumber, 0); };
    AssemblyLiteralContext.prototype.HexLiteral = function () { return this.tryGetToken(SolidityParser.HexLiteral, 0); };
    Object.defineProperty(AssemblyLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_assemblyLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblyLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblyLiteral) {
            listener.enterAssemblyLiteral(this);
        }
    };
    // @Override
    AssemblyLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblyLiteral) {
            listener.exitAssemblyLiteral(this);
        }
    };
    // @Override
    AssemblyLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblyLiteral) {
            return visitor.visitAssemblyLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblyLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblyLiteralContext = AssemblyLiteralContext;
var SubAssemblyContext = /** @class */ (function (_super) {
    __extends(SubAssemblyContext, _super);
    function SubAssemblyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubAssemblyContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    SubAssemblyContext.prototype.assemblyBlock = function () {
        return this.getRuleContext(0, AssemblyBlockContext);
    };
    Object.defineProperty(SubAssemblyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_subAssembly; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubAssemblyContext.prototype.enterRule = function (listener) {
        if (listener.enterSubAssembly) {
            listener.enterSubAssembly(this);
        }
    };
    // @Override
    SubAssemblyContext.prototype.exitRule = function (listener) {
        if (listener.exitSubAssembly) {
            listener.exitSubAssembly(this);
        }
    };
    // @Override
    SubAssemblyContext.prototype.accept = function (visitor) {
        if (visitor.visitSubAssembly) {
            return visitor.visitSubAssembly(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubAssemblyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubAssemblyContext = SubAssemblyContext;
var TupleExpressionContext = /** @class */ (function (_super) {
    __extends(TupleExpressionContext, _super);
    function TupleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TupleExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(TupleExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_tupleExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TupleExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTupleExpression) {
            listener.enterTupleExpression(this);
        }
    };
    // @Override
    TupleExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTupleExpression) {
            listener.exitTupleExpression(this);
        }
    };
    // @Override
    TupleExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTupleExpression) {
            return visitor.visitTupleExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TupleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TupleExpressionContext = TupleExpressionContext;
var ElementaryTypeNameExpressionContext = /** @class */ (function (_super) {
    __extends(ElementaryTypeNameExpressionContext, _super);
    function ElementaryTypeNameExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementaryTypeNameExpressionContext.prototype.elementaryTypeName = function () {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    };
    Object.defineProperty(ElementaryTypeNameExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_elementaryTypeNameExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementaryTypeNameExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterElementaryTypeNameExpression) {
            listener.enterElementaryTypeNameExpression(this);
        }
    };
    // @Override
    ElementaryTypeNameExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitElementaryTypeNameExpression) {
            listener.exitElementaryTypeNameExpression(this);
        }
    };
    // @Override
    ElementaryTypeNameExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitElementaryTypeNameExpression) {
            return visitor.visitElementaryTypeNameExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementaryTypeNameExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementaryTypeNameExpressionContext = ElementaryTypeNameExpressionContext;
var NumberLiteralContext = /** @class */ (function (_super) {
    __extends(NumberLiteralContext, _super);
    function NumberLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberLiteralContext.prototype.DecimalNumber = function () { return this.tryGetToken(SolidityParser.DecimalNumber, 0); };
    NumberLiteralContext.prototype.HexNumber = function () { return this.tryGetToken(SolidityParser.HexNumber, 0); };
    NumberLiteralContext.prototype.NumberUnit = function () { return this.tryGetToken(SolidityParser.NumberUnit, 0); };
    Object.defineProperty(NumberLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_numberLiteral; },
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
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.Identifier = function () { return this.getToken(SolidityParser.Identifier, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SolidityParser.RULE_identifier; },
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
