"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/oncrpcv2.g4 by ANTLR 4.7.3-SNAPSHOT
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
var oncrpcv2Parser = /** @class */ (function (_super) {
    __extends(oncrpcv2Parser, _super);
    function oncrpcv2Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(oncrpcv2Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(oncrpcv2Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return oncrpcv2Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(oncrpcv2Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "oncrpcv2.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(oncrpcv2Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return oncrpcv2Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(oncrpcv2Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return oncrpcv2Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.programDef = function () {
        var _localctx = new ProgramDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, oncrpcv2Parser.RULE_programDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this.match(oncrpcv2Parser.T__0);
                this.state = 43;
                this.match(oncrpcv2Parser.IDENTIFIER);
                this.state = 44;
                this.match(oncrpcv2Parser.T__1);
                this.state = 45;
                this.versionDef();
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === oncrpcv2Parser.T__5) {
                    {
                        {
                            this.state = 46;
                            this.versionDef();
                        }
                    }
                    this.state = 51;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 52;
                this.match(oncrpcv2Parser.T__2);
                this.state = 53;
                this.match(oncrpcv2Parser.T__3);
                this.state = 54;
                this.constant();
                this.state = 55;
                this.match(oncrpcv2Parser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.versionDef = function () {
        var _localctx = new VersionDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, oncrpcv2Parser.RULE_versionDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.match(oncrpcv2Parser.T__5);
                this.state = 58;
                this.match(oncrpcv2Parser.IDENTIFIER);
                this.state = 59;
                this.match(oncrpcv2Parser.T__1);
                this.state = 60;
                this.procedureDef();
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (oncrpcv2Parser.T__9 - 10)) | (1 << (oncrpcv2Parser.T__17 - 10)) | (1 << (oncrpcv2Parser.T__18 - 10)) | (1 << (oncrpcv2Parser.T__19 - 10)) | (1 << (oncrpcv2Parser.T__20 - 10)) | (1 << (oncrpcv2Parser.T__21 - 10)) | (1 << (oncrpcv2Parser.T__22 - 10)) | (1 << (oncrpcv2Parser.T__23 - 10)) | (1 << (oncrpcv2Parser.T__24 - 10)) | (1 << (oncrpcv2Parser.T__25 - 10)) | (1 << (oncrpcv2Parser.T__26 - 10)) | (1 << (oncrpcv2Parser.IDENTIFIER - 10)))) !== 0)) {
                    {
                        {
                            this.state = 61;
                            this.procedureDef();
                        }
                    }
                    this.state = 66;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 67;
                this.match(oncrpcv2Parser.T__2);
                this.state = 68;
                this.match(oncrpcv2Parser.T__3);
                this.state = 69;
                this.constant();
                this.state = 70;
                this.match(oncrpcv2Parser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.procedureDef = function () {
        var _localctx = new ProcedureDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, oncrpcv2Parser.RULE_procedureDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.procReturn();
                this.state = 73;
                this.match(oncrpcv2Parser.IDENTIFIER);
                this.state = 74;
                this.match(oncrpcv2Parser.T__6);
                this.state = 75;
                this.procFirstArg();
                this.state = 80;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === oncrpcv2Parser.T__7) {
                    {
                        {
                            this.state = 76;
                            this.match(oncrpcv2Parser.T__7);
                            this.state = 77;
                            this.typeSpecifier();
                        }
                    }
                    this.state = 82;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 83;
                this.match(oncrpcv2Parser.T__8);
                this.state = 84;
                this.match(oncrpcv2Parser.T__3);
                this.state = 85;
                this.constant();
                this.state = 86;
                this.match(oncrpcv2Parser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.procReturn = function () {
        var _localctx = new ProcReturnContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, oncrpcv2Parser.RULE_procReturn);
        try {
            this.state = 90;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case oncrpcv2Parser.T__9:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 88;
                        this.match(oncrpcv2Parser.T__9);
                    }
                    break;
                case oncrpcv2Parser.T__17:
                case oncrpcv2Parser.T__18:
                case oncrpcv2Parser.T__19:
                case oncrpcv2Parser.T__20:
                case oncrpcv2Parser.T__21:
                case oncrpcv2Parser.T__22:
                case oncrpcv2Parser.T__23:
                case oncrpcv2Parser.T__24:
                case oncrpcv2Parser.T__25:
                case oncrpcv2Parser.T__26:
                case oncrpcv2Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 89;
                        this.typeSpecifier();
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
    oncrpcv2Parser.prototype.procFirstArg = function () {
        var _localctx = new ProcFirstArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, oncrpcv2Parser.RULE_procFirstArg);
        try {
            this.state = 94;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case oncrpcv2Parser.T__9:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 92;
                        this.match(oncrpcv2Parser.T__9);
                    }
                    break;
                case oncrpcv2Parser.T__17:
                case oncrpcv2Parser.T__18:
                case oncrpcv2Parser.T__19:
                case oncrpcv2Parser.T__20:
                case oncrpcv2Parser.T__21:
                case oncrpcv2Parser.T__22:
                case oncrpcv2Parser.T__23:
                case oncrpcv2Parser.T__24:
                case oncrpcv2Parser.T__25:
                case oncrpcv2Parser.T__26:
                case oncrpcv2Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 93;
                        this.typeSpecifier();
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
    oncrpcv2Parser.prototype.oncrpcv2Specification = function () {
        var _localctx = new Oncrpcv2SpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, oncrpcv2Parser.RULE_oncrpcv2Specification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << oncrpcv2Parser.T__0) | (1 << oncrpcv2Parser.T__24) | (1 << oncrpcv2Parser.T__25) | (1 << oncrpcv2Parser.T__26))) !== 0) || _la === oncrpcv2Parser.T__31 || _la === oncrpcv2Parser.T__32) {
                    {
                        this.state = 98;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case oncrpcv2Parser.T__24:
                            case oncrpcv2Parser.T__25:
                            case oncrpcv2Parser.T__26:
                            case oncrpcv2Parser.T__31:
                            case oncrpcv2Parser.T__32:
                                {
                                    this.state = 96;
                                    this.xdrSpecification();
                                }
                                break;
                            case oncrpcv2Parser.T__0:
                                {
                                    this.state = 97;
                                    this.programDef();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 102;
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
    oncrpcv2Parser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, oncrpcv2Parser.RULE_declaration);
        var _la;
        try {
            this.state = 145;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 103;
                        this.typeSpecifier();
                        this.state = 104;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 106;
                        this.typeSpecifier();
                        this.state = 107;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 108;
                        this.match(oncrpcv2Parser.T__10);
                        this.state = 109;
                        this.value();
                        this.state = 110;
                        this.match(oncrpcv2Parser.T__11);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 112;
                        this.typeSpecifier();
                        this.state = 113;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 114;
                        this.match(oncrpcv2Parser.T__12);
                        this.state = 116;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)) | (1 << (oncrpcv2Parser.IDENTIFIER - 35)))) !== 0)) {
                            {
                                this.state = 115;
                                this.value();
                            }
                        }
                        this.state = 118;
                        this.match(oncrpcv2Parser.T__13);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 120;
                        this.match(oncrpcv2Parser.T__14);
                        this.state = 121;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 122;
                        this.match(oncrpcv2Parser.T__10);
                        this.state = 123;
                        this.value();
                        this.state = 124;
                        this.match(oncrpcv2Parser.T__11);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 126;
                        this.match(oncrpcv2Parser.T__14);
                        this.state = 127;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 128;
                        this.match(oncrpcv2Parser.T__12);
                        this.state = 130;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)) | (1 << (oncrpcv2Parser.IDENTIFIER - 35)))) !== 0)) {
                            {
                                this.state = 129;
                                this.value();
                            }
                        }
                        this.state = 132;
                        this.match(oncrpcv2Parser.T__13);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 133;
                        this.match(oncrpcv2Parser.T__15);
                        this.state = 134;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 135;
                        this.match(oncrpcv2Parser.T__12);
                        this.state = 137;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)) | (1 << (oncrpcv2Parser.IDENTIFIER - 35)))) !== 0)) {
                            {
                                this.state = 136;
                                this.value();
                            }
                        }
                        this.state = 139;
                        this.match(oncrpcv2Parser.T__13);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 140;
                        this.typeSpecifier();
                        this.state = 141;
                        this.match(oncrpcv2Parser.T__16);
                        this.state = 142;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 144;
                        this.match(oncrpcv2Parser.T__9);
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
    oncrpcv2Parser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, oncrpcv2Parser.RULE_value);
        try {
            this.state = 149;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case oncrpcv2Parser.OCTAL:
                case oncrpcv2Parser.DECIMAL:
                case oncrpcv2Parser.HEXADECIMAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 147;
                        this.constant();
                    }
                    break;
                case oncrpcv2Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 148;
                        this.match(oncrpcv2Parser.IDENTIFIER);
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
    oncrpcv2Parser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, oncrpcv2Parser.RULE_constant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                _la = this._input.LA(1);
                if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)))) !== 0))) {
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
    oncrpcv2Parser.prototype.typeSpecifier = function () {
        var _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, oncrpcv2Parser.RULE_typeSpecifier);
        var _la;
        try {
            this.state = 169;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === oncrpcv2Parser.T__17) {
                            {
                                this.state = 153;
                                this.match(oncrpcv2Parser.T__17);
                            }
                        }
                        this.state = 156;
                        this.match(oncrpcv2Parser.T__18);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 158;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === oncrpcv2Parser.T__17) {
                            {
                                this.state = 157;
                                this.match(oncrpcv2Parser.T__17);
                            }
                        }
                        this.state = 160;
                        this.match(oncrpcv2Parser.T__19);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 161;
                        this.match(oncrpcv2Parser.T__20);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 162;
                        this.match(oncrpcv2Parser.T__21);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 163;
                        this.match(oncrpcv2Parser.T__22);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 164;
                        this.match(oncrpcv2Parser.T__23);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 165;
                        this.enumTypeSpec();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 166;
                        this.structTypeSpec();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 167;
                        this.unionTypeSpec();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 168;
                        this.match(oncrpcv2Parser.IDENTIFIER);
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
    oncrpcv2Parser.prototype.enumTypeSpec = function () {
        var _localctx = new EnumTypeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, oncrpcv2Parser.RULE_enumTypeSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(oncrpcv2Parser.T__24);
                this.state = 172;
                this.enumBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.enumBody = function () {
        var _localctx = new EnumBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, oncrpcv2Parser.RULE_enumBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this.match(oncrpcv2Parser.T__1);
                {
                    this.state = 175;
                    this.match(oncrpcv2Parser.IDENTIFIER);
                    this.state = 176;
                    this.match(oncrpcv2Parser.T__3);
                    this.state = 177;
                    this.value();
                }
                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === oncrpcv2Parser.T__7) {
                    {
                        {
                            this.state = 179;
                            this.match(oncrpcv2Parser.T__7);
                            this.state = 180;
                            this.match(oncrpcv2Parser.IDENTIFIER);
                            this.state = 181;
                            this.match(oncrpcv2Parser.T__3);
                            this.state = 182;
                            this.value();
                        }
                    }
                    this.state = 187;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 188;
                this.match(oncrpcv2Parser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.structTypeSpec = function () {
        var _localctx = new StructTypeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, oncrpcv2Parser.RULE_structTypeSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 190;
                this.match(oncrpcv2Parser.T__25);
                this.state = 191;
                this.structBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.structBody = function () {
        var _localctx = new StructBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, oncrpcv2Parser.RULE_structBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(oncrpcv2Parser.T__1);
                {
                    this.state = 194;
                    this.declaration();
                    this.state = 195;
                    this.match(oncrpcv2Parser.T__4);
                }
                this.state = 202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (oncrpcv2Parser.T__9 - 10)) | (1 << (oncrpcv2Parser.T__14 - 10)) | (1 << (oncrpcv2Parser.T__15 - 10)) | (1 << (oncrpcv2Parser.T__17 - 10)) | (1 << (oncrpcv2Parser.T__18 - 10)) | (1 << (oncrpcv2Parser.T__19 - 10)) | (1 << (oncrpcv2Parser.T__20 - 10)) | (1 << (oncrpcv2Parser.T__21 - 10)) | (1 << (oncrpcv2Parser.T__22 - 10)) | (1 << (oncrpcv2Parser.T__23 - 10)) | (1 << (oncrpcv2Parser.T__24 - 10)) | (1 << (oncrpcv2Parser.T__25 - 10)) | (1 << (oncrpcv2Parser.T__26 - 10)) | (1 << (oncrpcv2Parser.IDENTIFIER - 10)))) !== 0)) {
                    {
                        {
                            this.state = 197;
                            this.declaration();
                            this.state = 198;
                            this.match(oncrpcv2Parser.T__4);
                        }
                    }
                    this.state = 204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 205;
                this.match(oncrpcv2Parser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.unionTypeSpec = function () {
        var _localctx = new UnionTypeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, oncrpcv2Parser.RULE_unionTypeSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this.match(oncrpcv2Parser.T__26);
                this.state = 208;
                this.unionBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.unionBody = function () {
        var _localctx = new UnionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, oncrpcv2Parser.RULE_unionBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.match(oncrpcv2Parser.T__27);
                this.state = 211;
                this.match(oncrpcv2Parser.T__6);
                this.state = 212;
                this.declaration();
                this.state = 213;
                this.match(oncrpcv2Parser.T__8);
                this.state = 214;
                this.match(oncrpcv2Parser.T__1);
                this.state = 215;
                this.caseSpec();
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === oncrpcv2Parser.T__30) {
                    {
                        {
                            this.state = 216;
                            this.caseSpec();
                        }
                    }
                    this.state = 221;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === oncrpcv2Parser.T__28) {
                    {
                        this.state = 222;
                        this.match(oncrpcv2Parser.T__28);
                        this.state = 223;
                        this.match(oncrpcv2Parser.T__29);
                        this.state = 224;
                        this.declaration();
                        this.state = 225;
                        this.match(oncrpcv2Parser.T__4);
                    }
                }
                this.state = 229;
                this.match(oncrpcv2Parser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.caseSpec = function () {
        var _localctx = new CaseSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, oncrpcv2Parser.RULE_caseSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 231;
                    this.match(oncrpcv2Parser.T__30);
                    this.state = 232;
                    this.value();
                    this.state = 233;
                    this.match(oncrpcv2Parser.T__29);
                }
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === oncrpcv2Parser.T__30) {
                    {
                        {
                            this.state = 235;
                            this.match(oncrpcv2Parser.T__30);
                            this.state = 236;
                            this.value();
                            this.state = 237;
                            this.match(oncrpcv2Parser.T__29);
                        }
                    }
                    this.state = 243;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 244;
                this.declaration();
                this.state = 245;
                this.match(oncrpcv2Parser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.constantDef = function () {
        var _localctx = new ConstantDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, oncrpcv2Parser.RULE_constantDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 247;
                this.match(oncrpcv2Parser.T__31);
                this.state = 248;
                this.match(oncrpcv2Parser.IDENTIFIER);
                this.state = 249;
                this.match(oncrpcv2Parser.T__3);
                this.state = 250;
                this.constant();
                this.state = 251;
                this.match(oncrpcv2Parser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    oncrpcv2Parser.prototype.typeDef = function () {
        var _localctx = new TypeDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, oncrpcv2Parser.RULE_typeDef);
        try {
            this.state = 272;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case oncrpcv2Parser.T__32:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 253;
                        this.match(oncrpcv2Parser.T__32);
                        this.state = 254;
                        this.declaration();
                        this.state = 255;
                        this.match(oncrpcv2Parser.T__4);
                    }
                    break;
                case oncrpcv2Parser.T__24:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 257;
                        this.match(oncrpcv2Parser.T__24);
                        this.state = 258;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 259;
                        this.enumBody();
                        this.state = 260;
                        this.match(oncrpcv2Parser.T__4);
                    }
                    break;
                case oncrpcv2Parser.T__25:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 262;
                        this.match(oncrpcv2Parser.T__25);
                        this.state = 263;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 264;
                        this.structBody();
                        this.state = 265;
                        this.match(oncrpcv2Parser.T__4);
                    }
                    break;
                case oncrpcv2Parser.T__26:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 267;
                        this.match(oncrpcv2Parser.T__26);
                        this.state = 268;
                        this.match(oncrpcv2Parser.IDENTIFIER);
                        this.state = 269;
                        this.unionBody();
                        this.state = 270;
                        this.match(oncrpcv2Parser.T__4);
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
    oncrpcv2Parser.prototype.definition = function () {
        var _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, oncrpcv2Parser.RULE_definition);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case oncrpcv2Parser.T__24:
                case oncrpcv2Parser.T__25:
                case oncrpcv2Parser.T__26:
                case oncrpcv2Parser.T__32:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 274;
                        this.typeDef();
                    }
                    break;
                case oncrpcv2Parser.T__31:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 275;
                        this.constantDef();
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
    oncrpcv2Parser.prototype.xdrSpecification = function () {
        var _localctx = new XdrSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, oncrpcv2Parser.RULE_xdrSpecification);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 278;
                                    this.definition();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 281;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
    Object.defineProperty(oncrpcv2Parser, "_ATN", {
        get: function () {
            if (!oncrpcv2Parser.__ATN) {
                oncrpcv2Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(oncrpcv2Parser._serializedATN));
            }
            return oncrpcv2Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    oncrpcv2Parser.T__0 = 1;
    oncrpcv2Parser.T__1 = 2;
    oncrpcv2Parser.T__2 = 3;
    oncrpcv2Parser.T__3 = 4;
    oncrpcv2Parser.T__4 = 5;
    oncrpcv2Parser.T__5 = 6;
    oncrpcv2Parser.T__6 = 7;
    oncrpcv2Parser.T__7 = 8;
    oncrpcv2Parser.T__8 = 9;
    oncrpcv2Parser.T__9 = 10;
    oncrpcv2Parser.T__10 = 11;
    oncrpcv2Parser.T__11 = 12;
    oncrpcv2Parser.T__12 = 13;
    oncrpcv2Parser.T__13 = 14;
    oncrpcv2Parser.T__14 = 15;
    oncrpcv2Parser.T__15 = 16;
    oncrpcv2Parser.T__16 = 17;
    oncrpcv2Parser.T__17 = 18;
    oncrpcv2Parser.T__18 = 19;
    oncrpcv2Parser.T__19 = 20;
    oncrpcv2Parser.T__20 = 21;
    oncrpcv2Parser.T__21 = 22;
    oncrpcv2Parser.T__22 = 23;
    oncrpcv2Parser.T__23 = 24;
    oncrpcv2Parser.T__24 = 25;
    oncrpcv2Parser.T__25 = 26;
    oncrpcv2Parser.T__26 = 27;
    oncrpcv2Parser.T__27 = 28;
    oncrpcv2Parser.T__28 = 29;
    oncrpcv2Parser.T__29 = 30;
    oncrpcv2Parser.T__30 = 31;
    oncrpcv2Parser.T__31 = 32;
    oncrpcv2Parser.T__32 = 33;
    oncrpcv2Parser.COMMENT = 34;
    oncrpcv2Parser.OCTAL = 35;
    oncrpcv2Parser.DECIMAL = 36;
    oncrpcv2Parser.HEXADECIMAL = 37;
    oncrpcv2Parser.IDENTIFIER = 38;
    oncrpcv2Parser.WS = 39;
    oncrpcv2Parser.RULE_programDef = 0;
    oncrpcv2Parser.RULE_versionDef = 1;
    oncrpcv2Parser.RULE_procedureDef = 2;
    oncrpcv2Parser.RULE_procReturn = 3;
    oncrpcv2Parser.RULE_procFirstArg = 4;
    oncrpcv2Parser.RULE_oncrpcv2Specification = 5;
    oncrpcv2Parser.RULE_declaration = 6;
    oncrpcv2Parser.RULE_value = 7;
    oncrpcv2Parser.RULE_constant = 8;
    oncrpcv2Parser.RULE_typeSpecifier = 9;
    oncrpcv2Parser.RULE_enumTypeSpec = 10;
    oncrpcv2Parser.RULE_enumBody = 11;
    oncrpcv2Parser.RULE_structTypeSpec = 12;
    oncrpcv2Parser.RULE_structBody = 13;
    oncrpcv2Parser.RULE_unionTypeSpec = 14;
    oncrpcv2Parser.RULE_unionBody = 15;
    oncrpcv2Parser.RULE_caseSpec = 16;
    oncrpcv2Parser.RULE_constantDef = 17;
    oncrpcv2Parser.RULE_typeDef = 18;
    oncrpcv2Parser.RULE_definition = 19;
    oncrpcv2Parser.RULE_xdrSpecification = 20;
    // tslint:disable:no-trailing-whitespace
    oncrpcv2Parser.ruleNames = [
        "programDef", "versionDef", "procedureDef", "procReturn", "procFirstArg",
        "oncrpcv2Specification", "declaration", "value", "constant", "typeSpecifier",
        "enumTypeSpec", "enumBody", "structTypeSpec", "structBody", "unionTypeSpec",
        "unionBody", "caseSpec", "constantDef", "typeDef", "definition", "xdrSpecification",
    ];
    oncrpcv2Parser._LITERAL_NAMES = [
        undefined, "'program'", "'{'", "'}'", "'='", "';'", "'version'", "'('",
        "','", "')'", "'void'", "'['", "']'", "'<'", "'>'", "'opaque'", "'string'",
        "'*'", "'unsigned'", "'int'", "'hyper'", "'float'", "'double'", "'quadruple'",
        "'bool'", "'enum'", "'struct'", "'union'", "'switch'", "'default'", "':'",
        "'case'", "'const'", "'typedef'",
    ];
    oncrpcv2Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "COMMENT",
        "OCTAL", "DECIMAL", "HEXADECIMAL", "IDENTIFIER", "WS",
    ];
    oncrpcv2Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(oncrpcv2Parser._LITERAL_NAMES, oncrpcv2Parser._SYMBOLIC_NAMES, []);
    oncrpcv2Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\u011E\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
        "A\n\x03\f\x03\x0E\x03D\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04Q\n\x04\f\x04\x0E" +
        "\x04T\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05" +
        "\x05]\n\x05\x03\x06\x03\x06\x05\x06a\n\x06\x03\x07\x03\x07\x07\x07e\n" +
        "\x07\f\x07\x0E\x07h\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bw\n\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x85\n\b\x03\b\x03\b" +
        "\x03\b\x03\b\x03\b\x05\b\x8C\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
        "\b\x94\n\b\x03\t\x03\t\x05\t\x98\n\t\x03\n\x03\n\x03\v\x05\v\x9D\n\v\x03" +
        "\v\x03\v\x05\v\xA1\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
        "\x03\v\x05\v\xAC\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x07\r\xBA\n\r\f\r\x0E\r\xBD\v\r\x03\r\x03\r\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x07\x0F\xCB\n\x0F\f\x0F\x0E\x0F\xCE\v\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
        "\x11\xDC\n\x11\f\x11\x0E\x11\xDF\v\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x05\x11\xE6\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xF2\n\x12\f\x12\x0E\x12\xF5" +
        "\v\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x03\x14\x05\x14\u0113\n\x14\x03\x15\x03\x15\x05\x15\u0117\n\x15" +
        "\x03\x16\x06\x16\u011A\n\x16\r\x16\x0E\x16\u011B\x03\x16\x02\x02\x02\x17" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02\x02\x03\x03\x02%\'\x02\u012F\x02,\x03\x02\x02\x02\x04;\x03\x02\x02" +
        "\x02\x06J\x03\x02\x02\x02\b\\\x03\x02\x02\x02\n`\x03\x02\x02\x02\ff\x03" +
        "\x02\x02\x02\x0E\x93\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12\x99\x03" +
        "\x02\x02\x02\x14\xAB\x03\x02\x02\x02\x16\xAD\x03\x02\x02\x02\x18\xB0\x03" +
        "\x02\x02\x02\x1A\xC0\x03\x02\x02\x02\x1C\xC3\x03\x02\x02\x02\x1E\xD1\x03" +
        "\x02\x02\x02 \xD4\x03\x02\x02\x02\"\xE9\x03\x02\x02\x02$\xF9\x03\x02\x02" +
        "\x02&\u0112\x03\x02\x02\x02(\u0116\x03\x02\x02\x02*\u0119\x03\x02\x02" +
        "\x02,-\x07\x03\x02\x02-.\x07(\x02\x02./\x07\x04\x02\x02/3\x05\x04\x03" +
        "\x0202\x05\x04\x03\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02" +
        "\x0234\x03\x02\x02\x0246\x03\x02\x02\x0253\x03\x02\x02\x0267\x07\x05\x02" +
        "\x0278\x07\x06\x02\x0289\x05\x12\n\x029:\x07\x07\x02\x02:\x03\x03\x02" +
        "\x02\x02;<\x07\b\x02\x02<=\x07(\x02\x02=>\x07\x04\x02\x02>B\x05\x06\x04" +
        "\x02?A\x05\x06\x04\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02" +
        "\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x07\x05\x02" +
        "\x02FG\x07\x06\x02\x02GH\x05\x12\n\x02HI\x07\x07\x02\x02I\x05\x03\x02" +
        "\x02\x02JK\x05\b\x05\x02KL\x07(\x02\x02LM\x07\t\x02\x02MR\x05\n\x06\x02" +
        "NO\x07\n\x02\x02OQ\x05\x14\v\x02PN\x03\x02\x02\x02QT\x03\x02\x02\x02R" +
        "P\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02" +
        "UV\x07\v\x02\x02VW\x07\x06\x02\x02WX\x05\x12\n\x02XY\x07\x07\x02\x02Y" +
        "\x07\x03\x02\x02\x02Z]\x07\f\x02\x02[]\x05\x14\v\x02\\Z\x03\x02\x02\x02" +
        "\\[\x03\x02\x02\x02]\t\x03\x02\x02\x02^a\x07\f\x02\x02_a\x05\x14\v\x02" +
        "`^\x03\x02\x02\x02`_\x03\x02\x02\x02a\v\x03\x02\x02\x02be\x05*\x16\x02" +
        "ce\x05\x02\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02" +
        "fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\r\x03\x02\x02\x02hf\x03\x02\x02" +
        "\x02ij\x05\x14\v\x02jk\x07(\x02\x02k\x94\x03\x02\x02\x02lm\x05\x14\v\x02" +
        "mn\x07(\x02\x02no\x07\r\x02\x02op\x05\x10\t\x02pq\x07\x0E\x02\x02q\x94" +
        "\x03\x02\x02\x02rs\x05\x14\v\x02st\x07(\x02\x02tv\x07\x0F\x02\x02uw\x05" +
        "\x10\t\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x07" +
        "\x10\x02\x02y\x94\x03\x02\x02\x02z{\x07\x11\x02\x02{|\x07(\x02\x02|}\x07" +
        "\r\x02\x02}~\x05\x10\t\x02~\x7F\x07\x0E\x02\x02\x7F\x94\x03\x02\x02\x02" +
        "\x80\x81\x07\x11\x02\x02\x81\x82\x07(\x02\x02\x82\x84\x07\x0F\x02\x02" +
        "\x83\x85\x05\x10\t\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02" +
        "\x85\x86\x03\x02\x02\x02\x86\x94\x07\x10\x02\x02\x87\x88\x07\x12\x02\x02" +
        "\x88\x89\x07(\x02\x02\x89\x8B\x07\x0F\x02\x02\x8A\x8C\x05\x10\t\x02\x8B" +
        "\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D" +
        "\x94\x07\x10\x02\x02\x8E\x8F\x05\x14\v\x02\x8F\x90\x07\x13\x02\x02\x90" +
        "\x91\x07(\x02\x02\x91\x94\x03\x02\x02\x02\x92\x94\x07\f\x02\x02\x93i\x03" +
        "\x02\x02\x02\x93l\x03\x02\x02\x02\x93r\x03\x02\x02\x02\x93z\x03\x02\x02" +
        "\x02\x93\x80\x03\x02\x02\x02\x93\x87\x03\x02\x02\x02\x93\x8E\x03\x02\x02" +
        "\x02\x93\x92\x03\x02\x02\x02\x94\x0F\x03\x02\x02\x02\x95\x98\x05\x12\n" +
        "\x02\x96\x98\x07(\x02\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02" +
        "\x02\x98\x11\x03\x02\x02\x02\x99\x9A\t\x02\x02\x02\x9A\x13\x03\x02\x02" +
        "\x02\x9B\x9D\x07\x14\x02\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02\x02" +
        "\x02\x9D\x9E\x03\x02\x02\x02\x9E\xAC\x07\x15\x02\x02\x9F\xA1\x07\x14\x02" +
        "\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02" +
        "\x02\xA2\xAC\x07\x16\x02\x02\xA3\xAC\x07\x17\x02\x02\xA4\xAC\x07\x18\x02" +
        "\x02\xA5\xAC\x07\x19\x02\x02\xA6\xAC\x07\x1A\x02\x02\xA7\xAC\x05\x16\f" +
        "\x02\xA8\xAC\x05\x1A\x0E\x02\xA9\xAC\x05\x1E\x10\x02\xAA\xAC\x07(\x02" +
        "\x02\xAB\x9C\x03\x02\x02\x02\xAB\xA0\x03\x02\x02\x02\xAB\xA3\x03\x02\x02" +
        "\x02\xAB\xA4\x03\x02\x02\x02\xAB\xA5\x03\x02\x02\x02\xAB\xA6\x03\x02\x02" +
        "\x02\xAB\xA7\x03\x02\x02\x02\xAB\xA8\x03\x02\x02\x02\xAB\xA9\x03\x02\x02" +
        "\x02\xAB\xAA\x03\x02\x02\x02\xAC\x15\x03\x02\x02\x02\xAD\xAE\x07\x1B\x02" +
        "\x02\xAE\xAF\x05\x18\r\x02\xAF\x17\x03\x02\x02\x02\xB0\xB1\x07\x04\x02" +
        "\x02\xB1\xB2\x07(\x02\x02\xB2\xB3\x07\x06\x02\x02\xB3\xB4\x05\x10\t\x02" +
        "\xB4\xBB\x03\x02\x02\x02\xB5\xB6\x07\n\x02\x02\xB6\xB7\x07(\x02\x02\xB7" +
        "\xB8\x07\x06\x02\x02\xB8\xBA\x05\x10\t\x02\xB9\xB5\x03\x02\x02\x02\xBA" +
        "\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC" +
        "\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xBF\x07\x05\x02\x02\xBF" +
        "\x19\x03\x02\x02\x02\xC0\xC1\x07\x1C\x02\x02\xC1\xC2\x05\x1C\x0F\x02\xC2" +
        "\x1B\x03\x02\x02\x02\xC3\xC4\x07\x04\x02\x02\xC4\xC5\x05\x0E\b\x02\xC5" +
        "\xC6\x07\x07\x02\x02\xC6\xCC\x03\x02\x02\x02\xC7\xC8\x05\x0E\b\x02\xC8" +
        "\xC9\x07\x07\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC7\x03\x02\x02\x02\xCB" +
        "\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD" +
        "\xCF\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD0\x07\x05\x02\x02\xD0" +
        "\x1D\x03\x02\x02\x02\xD1\xD2\x07\x1D\x02\x02\xD2\xD3\x05 \x11\x02\xD3" +
        "\x1F\x03\x02\x02\x02\xD4\xD5\x07\x1E\x02\x02\xD5\xD6\x07\t\x02\x02\xD6" +
        "\xD7\x05\x0E\b\x02\xD7\xD8\x07\v\x02\x02\xD8\xD9\x07\x04\x02\x02\xD9\xDD" +
        "\x05\"\x12\x02\xDA\xDC\x05\"\x12\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03" +
        "\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE5\x03" +
        "\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x07\x1F\x02\x02\xE1\xE2\x07" +
        " \x02\x02\xE2\xE3\x05\x0E\b\x02\xE3\xE4\x07\x07\x02\x02\xE4\xE6\x03\x02" +
        "\x02\x02\xE5\xE0\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02" +
        "\x02\x02\xE7\xE8\x07\x05\x02\x02\xE8!\x03\x02\x02\x02\xE9\xEA\x07!\x02" +
        "\x02\xEA\xEB\x05\x10\t\x02\xEB\xEC\x07 \x02\x02\xEC\xF3\x03\x02\x02\x02" +
        "\xED\xEE\x07!\x02\x02\xEE\xEF\x05\x10\t\x02\xEF\xF0\x07 \x02\x02\xF0\xF2" +
        "\x03\x02\x02\x02\xF1\xED\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1" +
        "\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF3" +
        "\x03\x02\x02\x02\xF6\xF7\x05\x0E\b\x02\xF7\xF8\x07\x07\x02\x02\xF8#\x03" +
        "\x02\x02\x02\xF9\xFA\x07\"\x02\x02\xFA\xFB\x07(\x02\x02\xFB\xFC\x07\x06" +
        "\x02\x02\xFC\xFD\x05\x12\n\x02\xFD\xFE\x07\x07\x02\x02\xFE%\x03\x02\x02" +
        "\x02\xFF\u0100\x07#\x02\x02\u0100\u0101\x05\x0E\b\x02\u0101\u0102\x07" +
        "\x07\x02\x02\u0102\u0113\x03\x02\x02\x02\u0103\u0104\x07\x1B\x02\x02\u0104" +
        "\u0105\x07(\x02\x02\u0105\u0106\x05\x18\r\x02\u0106\u0107\x07\x07\x02" +
        "\x02\u0107\u0113\x03\x02\x02\x02\u0108\u0109\x07\x1C\x02\x02\u0109\u010A" +
        "\x07(\x02\x02\u010A\u010B\x05\x1C\x0F\x02\u010B\u010C\x07\x07\x02\x02" +
        "\u010C\u0113\x03\x02\x02\x02\u010D\u010E\x07\x1D\x02\x02\u010E\u010F\x07" +
        "(\x02\x02\u010F\u0110\x05 \x11\x02\u0110\u0111\x07\x07\x02\x02\u0111\u0113" +
        "\x03\x02\x02\x02\u0112\xFF\x03\x02\x02\x02\u0112\u0103\x03\x02\x02\x02" +
        "\u0112\u0108\x03\x02\x02\x02\u0112\u010D\x03\x02\x02\x02\u0113\'\x03\x02" +
        "\x02\x02\u0114\u0117\x05&\x14\x02\u0115\u0117\x05$\x13\x02\u0116\u0114" +
        "\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117)\x03\x02\x02\x02\u0118" +
        "\u011A\x05(\x15\x02\u0119\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02" +
        "\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C+\x03" +
        "\x02\x02\x02\x193BR\\`dfv\x84\x8B\x93\x97\x9C\xA0\xAB\xBB\xCC\xDD\xE5" +
        "\xF3\u0112\u0116\u011B";
    return oncrpcv2Parser;
}(Parser_1.Parser));
exports.oncrpcv2Parser = oncrpcv2Parser;
var ProgramDefContext = /** @class */ (function (_super) {
    __extends(ProgramDefContext, _super);
    function ProgramDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramDefContext.prototype.IDENTIFIER = function () { return this.getToken(oncrpcv2Parser.IDENTIFIER, 0); };
    ProgramDefContext.prototype.versionDef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VersionDefContext);
        }
        else {
            return this.getRuleContext(i, VersionDefContext);
        }
    };
    ProgramDefContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(ProgramDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_programDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramDefContext.prototype.enterRule = function (listener) {
        if (listener.enterProgramDef) {
            listener.enterProgramDef(this);
        }
    };
    // @Override
    ProgramDefContext.prototype.exitRule = function (listener) {
        if (listener.exitProgramDef) {
            listener.exitProgramDef(this);
        }
    };
    // @Override
    ProgramDefContext.prototype.accept = function (visitor) {
        if (visitor.visitProgramDef) {
            return visitor.visitProgramDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramDefContext = ProgramDefContext;
var VersionDefContext = /** @class */ (function (_super) {
    __extends(VersionDefContext, _super);
    function VersionDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VersionDefContext.prototype.IDENTIFIER = function () { return this.getToken(oncrpcv2Parser.IDENTIFIER, 0); };
    VersionDefContext.prototype.procedureDef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ProcedureDefContext);
        }
        else {
            return this.getRuleContext(i, ProcedureDefContext);
        }
    };
    VersionDefContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(VersionDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_versionDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VersionDefContext.prototype.enterRule = function (listener) {
        if (listener.enterVersionDef) {
            listener.enterVersionDef(this);
        }
    };
    // @Override
    VersionDefContext.prototype.exitRule = function (listener) {
        if (listener.exitVersionDef) {
            listener.exitVersionDef(this);
        }
    };
    // @Override
    VersionDefContext.prototype.accept = function (visitor) {
        if (visitor.visitVersionDef) {
            return visitor.visitVersionDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VersionDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VersionDefContext = VersionDefContext;
var ProcedureDefContext = /** @class */ (function (_super) {
    __extends(ProcedureDefContext, _super);
    function ProcedureDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureDefContext.prototype.procReturn = function () {
        return this.getRuleContext(0, ProcReturnContext);
    };
    ProcedureDefContext.prototype.IDENTIFIER = function () { return this.getToken(oncrpcv2Parser.IDENTIFIER, 0); };
    ProcedureDefContext.prototype.procFirstArg = function () {
        return this.getRuleContext(0, ProcFirstArgContext);
    };
    ProcedureDefContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    ProcedureDefContext.prototype.typeSpecifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeSpecifierContext);
        }
        else {
            return this.getRuleContext(i, TypeSpecifierContext);
        }
    };
    Object.defineProperty(ProcedureDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_procedureDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureDefContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureDef) {
            listener.enterProcedureDef(this);
        }
    };
    // @Override
    ProcedureDefContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureDef) {
            listener.exitProcedureDef(this);
        }
    };
    // @Override
    ProcedureDefContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureDef) {
            return visitor.visitProcedureDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureDefContext = ProcedureDefContext;
var ProcReturnContext = /** @class */ (function (_super) {
    __extends(ProcReturnContext, _super);
    function ProcReturnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcReturnContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    Object.defineProperty(ProcReturnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_procReturn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcReturnContext.prototype.enterRule = function (listener) {
        if (listener.enterProcReturn) {
            listener.enterProcReturn(this);
        }
    };
    // @Override
    ProcReturnContext.prototype.exitRule = function (listener) {
        if (listener.exitProcReturn) {
            listener.exitProcReturn(this);
        }
    };
    // @Override
    ProcReturnContext.prototype.accept = function (visitor) {
        if (visitor.visitProcReturn) {
            return visitor.visitProcReturn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcReturnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcReturnContext = ProcReturnContext;
var ProcFirstArgContext = /** @class */ (function (_super) {
    __extends(ProcFirstArgContext, _super);
    function ProcFirstArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcFirstArgContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    Object.defineProperty(ProcFirstArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_procFirstArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcFirstArgContext.prototype.enterRule = function (listener) {
        if (listener.enterProcFirstArg) {
            listener.enterProcFirstArg(this);
        }
    };
    // @Override
    ProcFirstArgContext.prototype.exitRule = function (listener) {
        if (listener.exitProcFirstArg) {
            listener.exitProcFirstArg(this);
        }
    };
    // @Override
    ProcFirstArgContext.prototype.accept = function (visitor) {
        if (visitor.visitProcFirstArg) {
            return visitor.visitProcFirstArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcFirstArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcFirstArgContext = ProcFirstArgContext;
var Oncrpcv2SpecificationContext = /** @class */ (function (_super) {
    __extends(Oncrpcv2SpecificationContext, _super);
    function Oncrpcv2SpecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Oncrpcv2SpecificationContext.prototype.xdrSpecification = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(XdrSpecificationContext);
        }
        else {
            return this.getRuleContext(i, XdrSpecificationContext);
        }
    };
    Oncrpcv2SpecificationContext.prototype.programDef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ProgramDefContext);
        }
        else {
            return this.getRuleContext(i, ProgramDefContext);
        }
    };
    Object.defineProperty(Oncrpcv2SpecificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_oncrpcv2Specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Oncrpcv2SpecificationContext.prototype.enterRule = function (listener) {
        if (listener.enterOncrpcv2Specification) {
            listener.enterOncrpcv2Specification(this);
        }
    };
    // @Override
    Oncrpcv2SpecificationContext.prototype.exitRule = function (listener) {
        if (listener.exitOncrpcv2Specification) {
            listener.exitOncrpcv2Specification(this);
        }
    };
    // @Override
    Oncrpcv2SpecificationContext.prototype.accept = function (visitor) {
        if (visitor.visitOncrpcv2Specification) {
            return visitor.visitOncrpcv2Specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Oncrpcv2SpecificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Oncrpcv2SpecificationContext = Oncrpcv2SpecificationContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    DeclarationContext.prototype.IDENTIFIER = function () { return this.tryGetToken(oncrpcv2Parser.IDENTIFIER, 0); };
    DeclarationContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_declaration; },
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
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    ValueContext.prototype.IDENTIFIER = function () { return this.tryGetToken(oncrpcv2Parser.IDENTIFIER, 0); };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_value; },
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
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.DECIMAL = function () { return this.tryGetToken(oncrpcv2Parser.DECIMAL, 0); };
    ConstantContext.prototype.HEXADECIMAL = function () { return this.tryGetToken(oncrpcv2Parser.HEXADECIMAL, 0); };
    ConstantContext.prototype.OCTAL = function () { return this.tryGetToken(oncrpcv2Parser.OCTAL, 0); };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_constant; },
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
var TypeSpecifierContext = /** @class */ (function (_super) {
    __extends(TypeSpecifierContext, _super);
    function TypeSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSpecifierContext.prototype.enumTypeSpec = function () {
        return this.tryGetRuleContext(0, EnumTypeSpecContext);
    };
    TypeSpecifierContext.prototype.structTypeSpec = function () {
        return this.tryGetRuleContext(0, StructTypeSpecContext);
    };
    TypeSpecifierContext.prototype.unionTypeSpec = function () {
        return this.tryGetRuleContext(0, UnionTypeSpecContext);
    };
    TypeSpecifierContext.prototype.IDENTIFIER = function () { return this.tryGetToken(oncrpcv2Parser.IDENTIFIER, 0); };
    Object.defineProperty(TypeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_typeSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    };
    // @Override
    TypeSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    };
    // @Override
    TypeSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSpecifierContext = TypeSpecifierContext;
var EnumTypeSpecContext = /** @class */ (function (_super) {
    __extends(EnumTypeSpecContext, _super);
    function EnumTypeSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumTypeSpecContext.prototype.enumBody = function () {
        return this.getRuleContext(0, EnumBodyContext);
    };
    Object.defineProperty(EnumTypeSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_enumTypeSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumTypeSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumTypeSpec) {
            listener.enterEnumTypeSpec(this);
        }
    };
    // @Override
    EnumTypeSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumTypeSpec) {
            listener.exitEnumTypeSpec(this);
        }
    };
    // @Override
    EnumTypeSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumTypeSpec) {
            return visitor.visitEnumTypeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumTypeSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumTypeSpecContext = EnumTypeSpecContext;
var EnumBodyContext = /** @class */ (function (_super) {
    __extends(EnumBodyContext, _super);
    function EnumBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumBodyContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(oncrpcv2Parser.IDENTIFIER);
        }
        else {
            return this.getToken(oncrpcv2Parser.IDENTIFIER, i);
        }
    };
    EnumBodyContext.prototype.value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    };
    Object.defineProperty(EnumBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_enumBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumBody) {
            listener.enterEnumBody(this);
        }
    };
    // @Override
    EnumBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumBody) {
            listener.exitEnumBody(this);
        }
    };
    // @Override
    EnumBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumBody) {
            return visitor.visitEnumBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumBodyContext = EnumBodyContext;
var StructTypeSpecContext = /** @class */ (function (_super) {
    __extends(StructTypeSpecContext, _super);
    function StructTypeSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructTypeSpecContext.prototype.structBody = function () {
        return this.getRuleContext(0, StructBodyContext);
    };
    Object.defineProperty(StructTypeSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_structTypeSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructTypeSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterStructTypeSpec) {
            listener.enterStructTypeSpec(this);
        }
    };
    // @Override
    StructTypeSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitStructTypeSpec) {
            listener.exitStructTypeSpec(this);
        }
    };
    // @Override
    StructTypeSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitStructTypeSpec) {
            return visitor.visitStructTypeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructTypeSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructTypeSpecContext = StructTypeSpecContext;
var StructBodyContext = /** @class */ (function (_super) {
    __extends(StructBodyContext, _super);
    function StructBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructBodyContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    Object.defineProperty(StructBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_structBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterStructBody) {
            listener.enterStructBody(this);
        }
    };
    // @Override
    StructBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitStructBody) {
            listener.exitStructBody(this);
        }
    };
    // @Override
    StructBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitStructBody) {
            return visitor.visitStructBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructBodyContext = StructBodyContext;
var UnionTypeSpecContext = /** @class */ (function (_super) {
    __extends(UnionTypeSpecContext, _super);
    function UnionTypeSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionTypeSpecContext.prototype.unionBody = function () {
        return this.getRuleContext(0, UnionBodyContext);
    };
    Object.defineProperty(UnionTypeSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_unionTypeSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionTypeSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionTypeSpec) {
            listener.enterUnionTypeSpec(this);
        }
    };
    // @Override
    UnionTypeSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionTypeSpec) {
            listener.exitUnionTypeSpec(this);
        }
    };
    // @Override
    UnionTypeSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionTypeSpec) {
            return visitor.visitUnionTypeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionTypeSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionTypeSpecContext = UnionTypeSpecContext;
var UnionBodyContext = /** @class */ (function (_super) {
    __extends(UnionBodyContext, _super);
    function UnionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionBodyContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    UnionBodyContext.prototype.caseSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseSpecContext);
        }
        else {
            return this.getRuleContext(i, CaseSpecContext);
        }
    };
    Object.defineProperty(UnionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_unionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionBody) {
            listener.enterUnionBody(this);
        }
    };
    // @Override
    UnionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionBody) {
            listener.exitUnionBody(this);
        }
    };
    // @Override
    UnionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionBody) {
            return visitor.visitUnionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionBodyContext = UnionBodyContext;
var CaseSpecContext = /** @class */ (function (_super) {
    __extends(CaseSpecContext, _super);
    function CaseSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseSpecContext.prototype.declaration = function () {
        return this.getRuleContext(0, DeclarationContext);
    };
    CaseSpecContext.prototype.value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    };
    Object.defineProperty(CaseSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_caseSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseSpec) {
            listener.enterCaseSpec(this);
        }
    };
    // @Override
    CaseSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseSpec) {
            listener.exitCaseSpec(this);
        }
    };
    // @Override
    CaseSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseSpec) {
            return visitor.visitCaseSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseSpecContext = CaseSpecContext;
var ConstantDefContext = /** @class */ (function (_super) {
    __extends(ConstantDefContext, _super);
    function ConstantDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantDefContext.prototype.IDENTIFIER = function () { return this.getToken(oncrpcv2Parser.IDENTIFIER, 0); };
    ConstantDefContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(ConstantDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_constantDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantDefContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantDef) {
            listener.enterConstantDef(this);
        }
    };
    // @Override
    ConstantDefContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantDef) {
            listener.exitConstantDef(this);
        }
    };
    // @Override
    ConstantDefContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantDef) {
            return visitor.visitConstantDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantDefContext = ConstantDefContext;
var TypeDefContext = /** @class */ (function (_super) {
    __extends(TypeDefContext, _super);
    function TypeDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDefContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    TypeDefContext.prototype.IDENTIFIER = function () { return this.tryGetToken(oncrpcv2Parser.IDENTIFIER, 0); };
    TypeDefContext.prototype.enumBody = function () {
        return this.tryGetRuleContext(0, EnumBodyContext);
    };
    TypeDefContext.prototype.structBody = function () {
        return this.tryGetRuleContext(0, StructBodyContext);
    };
    TypeDefContext.prototype.unionBody = function () {
        return this.tryGetRuleContext(0, UnionBodyContext);
    };
    Object.defineProperty(TypeDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_typeDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDefContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDef) {
            listener.enterTypeDef(this);
        }
    };
    // @Override
    TypeDefContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDef) {
            listener.exitTypeDef(this);
        }
    };
    // @Override
    TypeDefContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDef) {
            return visitor.visitTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDefContext = TypeDefContext;
var DefinitionContext = /** @class */ (function (_super) {
    __extends(DefinitionContext, _super);
    function DefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionContext.prototype.typeDef = function () {
        return this.tryGetRuleContext(0, TypeDefContext);
    };
    DefinitionContext.prototype.constantDef = function () {
        return this.tryGetRuleContext(0, ConstantDefContext);
    };
    Object.defineProperty(DefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_definition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinition) {
            listener.enterDefinition(this);
        }
    };
    // @Override
    DefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinition) {
            listener.exitDefinition(this);
        }
    };
    // @Override
    DefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinition) {
            return visitor.visitDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinitionContext = DefinitionContext;
var XdrSpecificationContext = /** @class */ (function (_super) {
    __extends(XdrSpecificationContext, _super);
    function XdrSpecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    XdrSpecificationContext.prototype.definition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefinitionContext);
        }
        else {
            return this.getRuleContext(i, DefinitionContext);
        }
    };
    Object.defineProperty(XdrSpecificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return oncrpcv2Parser.RULE_xdrSpecification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    XdrSpecificationContext.prototype.enterRule = function (listener) {
        if (listener.enterXdrSpecification) {
            listener.enterXdrSpecification(this);
        }
    };
    // @Override
    XdrSpecificationContext.prototype.exitRule = function (listener) {
        if (listener.exitXdrSpecification) {
            listener.exitXdrSpecification(this);
        }
    };
    // @Override
    XdrSpecificationContext.prototype.accept = function (visitor) {
        if (visitor.visitXdrSpecification) {
            return visitor.visitXdrSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return XdrSpecificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.XdrSpecificationContext = XdrSpecificationContext;
