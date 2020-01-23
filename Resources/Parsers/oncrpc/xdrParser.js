"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/xdr.g4 by ANTLR 4.7.3-SNAPSHOT
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
var xdrParser = /** @class */ (function (_super) {
    __extends(xdrParser, _super);
    function xdrParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(xdrParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(xdrParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return xdrParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xdrParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "xdr.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xdrParser.prototype, "ruleNames", {
        // @Override
        get: function () { return xdrParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xdrParser.prototype, "serializedATN", {
        // @Override
        get: function () { return xdrParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    xdrParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, xdrParser.RULE_declaration);
        var _la;
        try {
            this.state = 72;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 30;
                        this.typeSpecifier();
                        this.state = 31;
                        this.match(xdrParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 33;
                        this.typeSpecifier();
                        this.state = 34;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 35;
                        this.match(xdrParser.T__0);
                        this.state = 36;
                        this.value();
                        this.state = 37;
                        this.match(xdrParser.T__1);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 39;
                        this.typeSpecifier();
                        this.state = 40;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 41;
                        this.match(xdrParser.T__2);
                        this.state = 43;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
                            {
                                this.state = 42;
                                this.value();
                            }
                        }
                        this.state = 45;
                        this.match(xdrParser.T__3);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 47;
                        this.match(xdrParser.T__4);
                        this.state = 48;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 49;
                        this.match(xdrParser.T__0);
                        this.state = 50;
                        this.value();
                        this.state = 51;
                        this.match(xdrParser.T__1);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 53;
                        this.match(xdrParser.T__4);
                        this.state = 54;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 55;
                        this.match(xdrParser.T__2);
                        this.state = 57;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
                            {
                                this.state = 56;
                                this.value();
                            }
                        }
                        this.state = 59;
                        this.match(xdrParser.T__3);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 60;
                        this.match(xdrParser.T__5);
                        this.state = 61;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 62;
                        this.match(xdrParser.T__2);
                        this.state = 64;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
                            {
                                this.state = 63;
                                this.value();
                            }
                        }
                        this.state = 66;
                        this.match(xdrParser.T__3);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 67;
                        this.typeSpecifier();
                        this.state = 68;
                        this.match(xdrParser.T__6);
                        this.state = 69;
                        this.match(xdrParser.IDENTIFIER);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 71;
                        this.match(xdrParser.T__7);
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
    xdrParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, xdrParser.RULE_value);
        try {
            this.state = 76;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case xdrParser.OCTAL:
                case xdrParser.DECIMAL:
                case xdrParser.HEXADECIMAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 74;
                        this.constant();
                    }
                    break;
                case xdrParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 75;
                        this.match(xdrParser.IDENTIFIER);
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
    xdrParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, xdrParser.RULE_constant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                _la = this._input.LA(1);
                if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)))) !== 0))) {
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
    xdrParser.prototype.typeSpecifier = function () {
        var _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, xdrParser.RULE_typeSpecifier);
        var _la;
        try {
            this.state = 96;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 81;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === xdrParser.T__8) {
                            {
                                this.state = 80;
                                this.match(xdrParser.T__8);
                            }
                        }
                        this.state = 83;
                        this.match(xdrParser.T__9);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 85;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === xdrParser.T__8) {
                            {
                                this.state = 84;
                                this.match(xdrParser.T__8);
                            }
                        }
                        this.state = 87;
                        this.match(xdrParser.T__10);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 88;
                        this.match(xdrParser.T__11);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 89;
                        this.match(xdrParser.T__12);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 90;
                        this.match(xdrParser.T__13);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 91;
                        this.match(xdrParser.T__14);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 92;
                        this.enumTypeSpec();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 93;
                        this.structTypeSpec();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 94;
                        this.unionTypeSpec();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 95;
                        this.match(xdrParser.IDENTIFIER);
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
    xdrParser.prototype.enumTypeSpec = function () {
        var _localctx = new EnumTypeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, xdrParser.RULE_enumTypeSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.match(xdrParser.T__15);
                this.state = 99;
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
    xdrParser.prototype.enumBody = function () {
        var _localctx = new EnumBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, xdrParser.RULE_enumBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(xdrParser.T__16);
                {
                    this.state = 102;
                    this.match(xdrParser.IDENTIFIER);
                    this.state = 103;
                    this.match(xdrParser.T__17);
                    this.state = 104;
                    this.value();
                }
                this.state = 112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xdrParser.T__18) {
                    {
                        {
                            this.state = 106;
                            this.match(xdrParser.T__18);
                            this.state = 107;
                            this.match(xdrParser.IDENTIFIER);
                            this.state = 108;
                            this.match(xdrParser.T__17);
                            this.state = 109;
                            this.value();
                        }
                    }
                    this.state = 114;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 115;
                this.match(xdrParser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xdrParser.prototype.structTypeSpec = function () {
        var _localctx = new StructTypeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, xdrParser.RULE_structTypeSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(xdrParser.T__20);
                this.state = 118;
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
    xdrParser.prototype.structBody = function () {
        var _localctx = new StructBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, xdrParser.RULE_structBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this.match(xdrParser.T__16);
                {
                    this.state = 121;
                    this.declaration();
                    this.state = 122;
                    this.match(xdrParser.T__21);
                }
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (xdrParser.T__4 - 5)) | (1 << (xdrParser.T__5 - 5)) | (1 << (xdrParser.T__7 - 5)) | (1 << (xdrParser.T__8 - 5)) | (1 << (xdrParser.T__9 - 5)) | (1 << (xdrParser.T__10 - 5)) | (1 << (xdrParser.T__11 - 5)) | (1 << (xdrParser.T__12 - 5)) | (1 << (xdrParser.T__13 - 5)) | (1 << (xdrParser.T__14 - 5)) | (1 << (xdrParser.T__15 - 5)) | (1 << (xdrParser.T__20 - 5)) | (1 << (xdrParser.T__22 - 5)) | (1 << (xdrParser.IDENTIFIER - 5)))) !== 0)) {
                    {
                        {
                            this.state = 124;
                            this.declaration();
                            this.state = 125;
                            this.match(xdrParser.T__21);
                        }
                    }
                    this.state = 131;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 132;
                this.match(xdrParser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xdrParser.prototype.unionTypeSpec = function () {
        var _localctx = new UnionTypeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, xdrParser.RULE_unionTypeSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this.match(xdrParser.T__22);
                this.state = 135;
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
    xdrParser.prototype.unionBody = function () {
        var _localctx = new UnionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, xdrParser.RULE_unionBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 137;
                this.match(xdrParser.T__23);
                this.state = 138;
                this.match(xdrParser.T__24);
                this.state = 139;
                this.declaration();
                this.state = 140;
                this.match(xdrParser.T__25);
                this.state = 141;
                this.match(xdrParser.T__16);
                this.state = 142;
                this.caseSpec();
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xdrParser.T__28) {
                    {
                        {
                            this.state = 143;
                            this.caseSpec();
                        }
                    }
                    this.state = 148;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === xdrParser.T__26) {
                    {
                        this.state = 149;
                        this.match(xdrParser.T__26);
                        this.state = 150;
                        this.match(xdrParser.T__27);
                        this.state = 151;
                        this.declaration();
                        this.state = 152;
                        this.match(xdrParser.T__21);
                    }
                }
                this.state = 156;
                this.match(xdrParser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xdrParser.prototype.caseSpec = function () {
        var _localctx = new CaseSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, xdrParser.RULE_caseSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 158;
                    this.match(xdrParser.T__28);
                    this.state = 159;
                    this.value();
                    this.state = 160;
                    this.match(xdrParser.T__27);
                }
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xdrParser.T__28) {
                    {
                        {
                            this.state = 162;
                            this.match(xdrParser.T__28);
                            this.state = 163;
                            this.value();
                            this.state = 164;
                            this.match(xdrParser.T__27);
                        }
                    }
                    this.state = 170;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 171;
                this.declaration();
                this.state = 172;
                this.match(xdrParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xdrParser.prototype.constantDef = function () {
        var _localctx = new ConstantDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, xdrParser.RULE_constantDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this.match(xdrParser.T__29);
                this.state = 175;
                this.match(xdrParser.IDENTIFIER);
                this.state = 176;
                this.match(xdrParser.T__17);
                this.state = 177;
                this.constant();
                this.state = 178;
                this.match(xdrParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xdrParser.prototype.typeDef = function () {
        var _localctx = new TypeDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, xdrParser.RULE_typeDef);
        try {
            this.state = 199;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case xdrParser.T__30:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 180;
                        this.match(xdrParser.T__30);
                        this.state = 181;
                        this.declaration();
                        this.state = 182;
                        this.match(xdrParser.T__21);
                    }
                    break;
                case xdrParser.T__15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 184;
                        this.match(xdrParser.T__15);
                        this.state = 185;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 186;
                        this.enumBody();
                        this.state = 187;
                        this.match(xdrParser.T__21);
                    }
                    break;
                case xdrParser.T__20:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 189;
                        this.match(xdrParser.T__20);
                        this.state = 190;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 191;
                        this.structBody();
                        this.state = 192;
                        this.match(xdrParser.T__21);
                    }
                    break;
                case xdrParser.T__22:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 194;
                        this.match(xdrParser.T__22);
                        this.state = 195;
                        this.match(xdrParser.IDENTIFIER);
                        this.state = 196;
                        this.unionBody();
                        this.state = 197;
                        this.match(xdrParser.T__21);
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
    xdrParser.prototype.definition = function () {
        var _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, xdrParser.RULE_definition);
        try {
            this.state = 203;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case xdrParser.T__15:
                case xdrParser.T__20:
                case xdrParser.T__22:
                case xdrParser.T__30:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 201;
                        this.typeDef();
                    }
                    break;
                case xdrParser.T__29:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 202;
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
    xdrParser.prototype.xdrSpecification = function () {
        var _localctx = new XdrSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, xdrParser.RULE_xdrSpecification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 205;
                            this.definition();
                        }
                    }
                    this.state = 208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xdrParser.T__15) | (1 << xdrParser.T__20) | (1 << xdrParser.T__22) | (1 << xdrParser.T__29) | (1 << xdrParser.T__30))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(xdrParser, "_ATN", {
        get: function () {
            if (!xdrParser.__ATN) {
                xdrParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(xdrParser._serializedATN));
            }
            return xdrParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    xdrParser.T__0 = 1;
    xdrParser.T__1 = 2;
    xdrParser.T__2 = 3;
    xdrParser.T__3 = 4;
    xdrParser.T__4 = 5;
    xdrParser.T__5 = 6;
    xdrParser.T__6 = 7;
    xdrParser.T__7 = 8;
    xdrParser.T__8 = 9;
    xdrParser.T__9 = 10;
    xdrParser.T__10 = 11;
    xdrParser.T__11 = 12;
    xdrParser.T__12 = 13;
    xdrParser.T__13 = 14;
    xdrParser.T__14 = 15;
    xdrParser.T__15 = 16;
    xdrParser.T__16 = 17;
    xdrParser.T__17 = 18;
    xdrParser.T__18 = 19;
    xdrParser.T__19 = 20;
    xdrParser.T__20 = 21;
    xdrParser.T__21 = 22;
    xdrParser.T__22 = 23;
    xdrParser.T__23 = 24;
    xdrParser.T__24 = 25;
    xdrParser.T__25 = 26;
    xdrParser.T__26 = 27;
    xdrParser.T__27 = 28;
    xdrParser.T__28 = 29;
    xdrParser.T__29 = 30;
    xdrParser.T__30 = 31;
    xdrParser.COMMENT = 32;
    xdrParser.OCTAL = 33;
    xdrParser.DECIMAL = 34;
    xdrParser.HEXADECIMAL = 35;
    xdrParser.IDENTIFIER = 36;
    xdrParser.WS = 37;
    xdrParser.RULE_declaration = 0;
    xdrParser.RULE_value = 1;
    xdrParser.RULE_constant = 2;
    xdrParser.RULE_typeSpecifier = 3;
    xdrParser.RULE_enumTypeSpec = 4;
    xdrParser.RULE_enumBody = 5;
    xdrParser.RULE_structTypeSpec = 6;
    xdrParser.RULE_structBody = 7;
    xdrParser.RULE_unionTypeSpec = 8;
    xdrParser.RULE_unionBody = 9;
    xdrParser.RULE_caseSpec = 10;
    xdrParser.RULE_constantDef = 11;
    xdrParser.RULE_typeDef = 12;
    xdrParser.RULE_definition = 13;
    xdrParser.RULE_xdrSpecification = 14;
    // tslint:disable:no-trailing-whitespace
    xdrParser.ruleNames = [
        "declaration", "value", "constant", "typeSpecifier", "enumTypeSpec", "enumBody",
        "structTypeSpec", "structBody", "unionTypeSpec", "unionBody", "caseSpec",
        "constantDef", "typeDef", "definition", "xdrSpecification",
    ];
    xdrParser._LITERAL_NAMES = [
        undefined, "'['", "']'", "'<'", "'>'", "'opaque'", "'string'", "'*'",
        "'void'", "'unsigned'", "'int'", "'hyper'", "'float'", "'double'", "'quadruple'",
        "'bool'", "'enum'", "'{'", "'='", "','", "'}'", "'struct'", "';'", "'union'",
        "'switch'", "'('", "')'", "'default'", "':'", "'case'", "'const'", "'typedef'",
    ];
    xdrParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "COMMENT", "OCTAL", "DECIMAL",
        "HEXADECIMAL", "IDENTIFIER", "WS",
    ];
    xdrParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(xdrParser._LITERAL_NAMES, xdrParser._SYMBOLIC_NAMES, []);
    xdrParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xD5\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x05\x02.\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02<\n\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x05\x02C\n\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x05\x02K\n\x02\x03\x03\x03\x03\x05\x03O\n\x03\x03\x04" +
        "\x03\x04\x03\x05\x05\x05T\n\x05\x03\x05\x03\x05\x05\x05X\n\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "c\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07q\n\x07\f\x07\x0E\x07t\v\x07\x03" +
        "\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x07\t\x82\n\t\f\t\x0E\t\x85\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v" +
        "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x93\n\v\f\v\x0E\v\x96\v\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x05\v\x9D\n\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
        "\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xA9\n\f\f\f\x0E\f\xAC\v\f\x03\f\x03" +
        "\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xCA\n\x0E" +
        "\x03\x0F\x03\x0F\x05\x0F\xCE\n\x0F\x03\x10\x06\x10\xD1\n\x10\r\x10\x0E" +
        "\x10\xD2\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
        "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
        "\x02\x02\x03\x03\x02#%\x02\xE5\x02J\x03\x02\x02\x02\x04N\x03\x02\x02\x02" +
        "\x06P\x03\x02\x02\x02\bb\x03\x02\x02\x02\nd\x03\x02\x02\x02\fg\x03\x02" +
        "\x02\x02\x0Ew\x03\x02\x02\x02\x10z\x03\x02\x02\x02\x12\x88\x03\x02\x02" +
        "\x02\x14\x8B\x03\x02\x02\x02\x16\xA0\x03\x02\x02\x02\x18\xB0\x03\x02\x02" +
        "\x02\x1A\xC9\x03\x02\x02\x02\x1C\xCD\x03\x02\x02\x02\x1E\xD0\x03\x02\x02" +
        "\x02 !\x05\b\x05\x02!\"\x07&\x02\x02\"K\x03\x02\x02\x02#$\x05\b\x05\x02" +
        "$%\x07&\x02\x02%&\x07\x03\x02\x02&\'\x05\x04\x03\x02\'(\x07\x04\x02\x02" +
        "(K\x03\x02\x02\x02)*\x05\b\x05\x02*+\x07&\x02\x02+-\x07\x05\x02\x02,." +
        "\x05\x04\x03\x02-,\x03\x02\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02" +
        "/0\x07\x06\x02\x020K\x03\x02\x02\x0212\x07\x07\x02\x0223\x07&\x02\x02" +
        "34\x07\x03\x02\x0245\x05\x04\x03\x0256\x07\x04\x02\x026K\x03\x02\x02\x02" +
        "78\x07\x07\x02\x0289\x07&\x02\x029;\x07\x05\x02\x02:<\x05\x04\x03\x02" +
        ";:\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=K\x07\x06\x02\x02" +
        ">?\x07\b\x02\x02?@\x07&\x02\x02@B\x07\x05\x02\x02AC\x05\x04\x03\x02BA" +
        "\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DK\x07\x06\x02\x02" +
        "EF\x05\b\x05\x02FG\x07\t\x02\x02GH\x07&\x02\x02HK\x03\x02\x02\x02IK\x07" +
        "\n\x02\x02J \x03\x02\x02\x02J#\x03\x02\x02\x02J)\x03\x02\x02\x02J1\x03" +
        "\x02\x02\x02J7\x03\x02\x02\x02J>\x03\x02\x02\x02JE\x03\x02\x02\x02JI\x03" +
        "\x02\x02\x02K\x03\x03\x02\x02\x02LO\x05\x06\x04\x02MO\x07&\x02\x02NL\x03" +
        "\x02\x02\x02NM\x03\x02\x02\x02O\x05\x03\x02\x02\x02PQ\t\x02\x02\x02Q\x07" +
        "\x03\x02\x02\x02RT\x07\v\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02T" +
        "U\x03\x02\x02\x02Uc\x07\f\x02\x02VX\x07\v\x02\x02WV\x03\x02\x02\x02WX" +
        "\x03\x02\x02\x02XY\x03\x02\x02\x02Yc\x07\r\x02\x02Zc\x07\x0E\x02\x02[" +
        "c\x07\x0F\x02\x02\\c\x07\x10\x02\x02]c\x07\x11\x02\x02^c\x05\n\x06\x02" +
        "_c\x05\x0E\b\x02`c\x05\x12\n\x02ac\x07&\x02\x02bS\x03\x02\x02\x02bW\x03" +
        "\x02\x02\x02bZ\x03\x02\x02\x02b[\x03\x02\x02\x02b\\\x03\x02\x02\x02b]" +
        "\x03\x02\x02\x02b^\x03\x02\x02\x02b_\x03\x02\x02\x02b`\x03\x02\x02\x02" +
        "ba\x03\x02\x02\x02c\t\x03\x02\x02\x02de\x07\x12\x02\x02ef\x05\f\x07\x02" +
        "f\v\x03\x02\x02\x02gh\x07\x13\x02\x02hi\x07&\x02\x02ij\x07\x14\x02\x02" +
        "jk\x05\x04\x03\x02kr\x03\x02\x02\x02lm\x07\x15\x02\x02mn\x07&\x02\x02" +
        "no\x07\x14\x02\x02oq\x05\x04\x03\x02pl\x03\x02\x02\x02qt\x03\x02\x02\x02" +
        "rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02" +
        "uv\x07\x16\x02\x02v\r\x03\x02\x02\x02wx\x07\x17\x02\x02xy\x05\x10\t\x02" +
        "y\x0F\x03\x02\x02\x02z{\x07\x13\x02\x02{|\x05\x02\x02\x02|}\x07\x18\x02" +
        "\x02}\x83\x03\x02\x02\x02~\x7F\x05\x02\x02\x02\x7F\x80\x07\x18\x02\x02" +
        "\x80\x82\x03\x02\x02\x02\x81~\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02" +
        "\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02" +
        "\x85\x83\x03\x02\x02\x02\x86\x87\x07\x16\x02\x02\x87\x11\x03\x02\x02\x02" +
        "\x88\x89\x07\x19\x02\x02\x89\x8A\x05\x14\v\x02\x8A\x13\x03\x02\x02\x02" +
        "\x8B\x8C\x07\x1A\x02\x02\x8C\x8D\x07\x1B\x02\x02\x8D\x8E\x05\x02\x02\x02" +
        "\x8E\x8F\x07\x1C\x02\x02\x8F\x90\x07\x13\x02\x02\x90\x94\x05\x16\f\x02" +
        "\x91\x93\x05\x16\f\x02\x92\x91\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02" +
        "\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x9C\x03\x02\x02\x02" +
        "\x96\x94\x03\x02\x02\x02\x97\x98\x07\x1D\x02\x02\x98\x99\x07\x1E\x02\x02" +
        "\x99\x9A\x05\x02\x02\x02\x9A\x9B\x07\x18\x02\x02\x9B\x9D\x03\x02\x02\x02" +
        "\x9C\x97\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02" +
        "\x9E\x9F\x07\x16\x02\x02\x9F\x15\x03\x02\x02\x02\xA0\xA1\x07\x1F\x02\x02" +
        "\xA1\xA2\x05\x04\x03\x02\xA2\xA3\x07\x1E\x02\x02\xA3\xAA\x03\x02\x02\x02" +
        "\xA4\xA5\x07\x1F\x02\x02\xA5\xA6\x05\x04\x03\x02\xA6\xA7\x07\x1E\x02\x02" +
        "\xA7\xA9\x03\x02\x02\x02\xA8\xA4\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02" +
        "\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02" +
        "\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x05\x02\x02\x02\xAE\xAF\x07\x18\x02\x02" +
        "\xAF\x17\x03\x02\x02\x02\xB0\xB1\x07 \x02\x02\xB1\xB2\x07&\x02\x02\xB2" +
        "\xB3\x07\x14\x02\x02\xB3\xB4\x05\x06\x04\x02\xB4\xB5\x07\x18\x02\x02\xB5" +
        "\x19\x03\x02\x02\x02\xB6\xB7\x07!\x02\x02\xB7\xB8\x05\x02\x02\x02\xB8" +
        "\xB9\x07\x18\x02\x02\xB9\xCA\x03\x02\x02\x02\xBA\xBB\x07\x12\x02\x02\xBB" +
        "\xBC\x07&\x02\x02\xBC\xBD\x05\f\x07\x02\xBD\xBE\x07\x18\x02\x02\xBE\xCA" +
        "\x03\x02\x02\x02\xBF\xC0\x07\x17\x02\x02\xC0\xC1\x07&\x02\x02\xC1\xC2" +
        "\x05\x10\t\x02\xC2\xC3\x07\x18\x02\x02\xC3\xCA\x03\x02\x02\x02\xC4\xC5" +
        "\x07\x19\x02\x02\xC5\xC6\x07&\x02\x02\xC6\xC7\x05\x14\v\x02\xC7\xC8\x07" +
        "\x18\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xB6\x03\x02\x02\x02\xC9\xBA\x03" +
        "\x02\x02\x02\xC9\xBF\x03\x02\x02\x02\xC9\xC4\x03\x02\x02\x02\xCA\x1B\x03" +
        "\x02\x02\x02\xCB\xCE\x05\x1A\x0E\x02\xCC\xCE\x05\x18\r\x02\xCD\xCB\x03" +
        "\x02\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\x1D\x03\x02\x02\x02\xCF\xD1\x05" +
        "\x1C\x0F\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD0\x03" +
        "\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\x1F\x03\x02\x02\x02\x12-;BJN" +
        "SWbr\x83\x94\x9C\xAA\xC9\xCD\xD2";
    return xdrParser;
}(Parser_1.Parser));
exports.xdrParser = xdrParser;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    DeclarationContext.prototype.IDENTIFIER = function () { return this.tryGetToken(xdrParser.IDENTIFIER, 0); };
    DeclarationContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xdrParser.RULE_declaration; },
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
    ValueContext.prototype.IDENTIFIER = function () { return this.tryGetToken(xdrParser.IDENTIFIER, 0); };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xdrParser.RULE_value; },
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
    ConstantContext.prototype.DECIMAL = function () { return this.tryGetToken(xdrParser.DECIMAL, 0); };
    ConstantContext.prototype.HEXADECIMAL = function () { return this.tryGetToken(xdrParser.HEXADECIMAL, 0); };
    ConstantContext.prototype.OCTAL = function () { return this.tryGetToken(xdrParser.OCTAL, 0); };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xdrParser.RULE_constant; },
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
    TypeSpecifierContext.prototype.IDENTIFIER = function () { return this.tryGetToken(xdrParser.IDENTIFIER, 0); };
    Object.defineProperty(TypeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xdrParser.RULE_typeSpecifier; },
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
        get: function () { return xdrParser.RULE_enumTypeSpec; },
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
            return this.getTokens(xdrParser.IDENTIFIER);
        }
        else {
            return this.getToken(xdrParser.IDENTIFIER, i);
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
        get: function () { return xdrParser.RULE_enumBody; },
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
        get: function () { return xdrParser.RULE_structTypeSpec; },
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
        get: function () { return xdrParser.RULE_structBody; },
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
        get: function () { return xdrParser.RULE_unionTypeSpec; },
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
        get: function () { return xdrParser.RULE_unionBody; },
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
        get: function () { return xdrParser.RULE_caseSpec; },
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
    ConstantDefContext.prototype.IDENTIFIER = function () { return this.getToken(xdrParser.IDENTIFIER, 0); };
    ConstantDefContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(ConstantDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xdrParser.RULE_constantDef; },
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
    TypeDefContext.prototype.IDENTIFIER = function () { return this.tryGetToken(xdrParser.IDENTIFIER, 0); };
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
        get: function () { return xdrParser.RULE_typeDef; },
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
        get: function () { return xdrParser.RULE_definition; },
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
        get: function () { return xdrParser.RULE_xdrSpecification; },
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
