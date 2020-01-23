"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/protobuf3/Protobuf3.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Protobuf3Parser = /** @class */ (function (_super) {
    __extends(Protobuf3Parser, _super);
    function Protobuf3Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(Protobuf3Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(Protobuf3Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return Protobuf3Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Protobuf3Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Protobuf3.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Protobuf3Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return Protobuf3Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Protobuf3Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return Protobuf3Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    Protobuf3Parser.prototype.proto = function () {
        var _localctx = new ProtoContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, Protobuf3Parser.RULE_proto);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 88;
                this.syntax();
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.SERVICE))) !== 0) || _la === Protobuf3Parser.SEMI) {
                    {
                        this.state = 94;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Protobuf3Parser.IMPORT:
                                {
                                    this.state = 89;
                                    this.importStatement();
                                }
                                break;
                            case Protobuf3Parser.PACKAGE:
                                {
                                    this.state = 90;
                                    this.packageStatement();
                                }
                                break;
                            case Protobuf3Parser.OPTION:
                                {
                                    this.state = 91;
                                    this.option();
                                }
                                break;
                            case Protobuf3Parser.ENUM:
                            case Protobuf3Parser.MESSAGE:
                            case Protobuf3Parser.SERVICE:
                                {
                                    this.state = 92;
                                    this.topLevelDef();
                                }
                                break;
                            case Protobuf3Parser.SEMI:
                                {
                                    this.state = 93;
                                    this.emptyStatement();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 98;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 99;
                this.match(Protobuf3Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.syntax = function () {
        var _localctx = new SyntaxContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, Protobuf3Parser.RULE_syntax);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(Protobuf3Parser.SYNTAX);
                this.state = 102;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 103;
                _la = this._input.LA(1);
                if (!(_la === Protobuf3Parser.PROTO3_DOUBLE || _la === Protobuf3Parser.PROTO3_SINGLE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 104;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.importStatement = function () {
        var _localctx = new ImportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, Protobuf3Parser.RULE_importStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                this.match(Protobuf3Parser.IMPORT);
                this.state = 108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.PUBLIC || _la === Protobuf3Parser.WEAK) {
                    {
                        this.state = 107;
                        _la = this._input.LA(1);
                        if (!(_la === Protobuf3Parser.PUBLIC || _la === Protobuf3Parser.WEAK)) {
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
                this.state = 110;
                this.match(Protobuf3Parser.StrLit);
                this.state = 111;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.packageStatement = function () {
        var _localctx = new PackageStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, Protobuf3Parser.RULE_packageStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.match(Protobuf3Parser.PACKAGE);
                this.state = 114;
                this.fullIdent();
                this.state = 115;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.option = function () {
        var _localctx = new OptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, Protobuf3Parser.RULE_option);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(Protobuf3Parser.OPTION);
                this.state = 118;
                this.optionName();
                this.state = 119;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 122;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Protobuf3Parser.Ident:
                    case Protobuf3Parser.IntLit:
                    case Protobuf3Parser.FloatLit:
                    case Protobuf3Parser.BoolLit:
                    case Protobuf3Parser.StrLit:
                    case Protobuf3Parser.MINUS:
                    case Protobuf3Parser.PLUS:
                        {
                            this.state = 120;
                            this.constant();
                        }
                        break;
                    case Protobuf3Parser.LBRACE:
                        {
                            this.state = 121;
                            this.optionBody();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 124;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.optionName = function () {
        var _localctx = new OptionNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, Protobuf3Parser.RULE_optionName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 131;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Protobuf3Parser.Ident:
                        {
                            this.state = 126;
                            this.match(Protobuf3Parser.Ident);
                        }
                        break;
                    case Protobuf3Parser.LPAREN:
                        {
                            this.state = 127;
                            this.match(Protobuf3Parser.LPAREN);
                            this.state = 128;
                            this.fullIdent();
                            this.state = 129;
                            this.match(Protobuf3Parser.RPAREN);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.DOT) {
                    {
                        {
                            this.state = 133;
                            this.match(Protobuf3Parser.DOT);
                            this.state = 136;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case Protobuf3Parser.Ident:
                                    {
                                        this.state = 134;
                                        this.match(Protobuf3Parser.Ident);
                                    }
                                    break;
                                case Protobuf3Parser.MESSAGE:
                                case Protobuf3Parser.OPTION:
                                case Protobuf3Parser.PACKAGE:
                                case Protobuf3Parser.RPC:
                                case Protobuf3Parser.SERVICE:
                                case Protobuf3Parser.STREAM:
                                case Protobuf3Parser.STRING:
                                case Protobuf3Parser.SYNTAX:
                                case Protobuf3Parser.WEAK:
                                    {
                                        this.state = 135;
                                        this.reservedWord();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 142;
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
    Protobuf3Parser.prototype.optionBody = function () {
        var _localctx = new OptionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, Protobuf3Parser.RULE_optionBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(Protobuf3Parser.LBRACE);
                this.state = 147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.Ident || _la === Protobuf3Parser.LPAREN) {
                    {
                        {
                            this.state = 144;
                            this.optionBodyVariable();
                        }
                    }
                    this.state = 149;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 150;
                this.match(Protobuf3Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.optionBodyVariable = function () {
        var _localctx = new OptionBodyVariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, Protobuf3Parser.RULE_optionBodyVariable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.optionName();
                this.state = 153;
                this.match(Protobuf3Parser.T__0);
                this.state = 154;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.topLevelDef = function () {
        var _localctx = new TopLevelDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, Protobuf3Parser.RULE_topLevelDef);
        try {
            this.state = 159;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Protobuf3Parser.MESSAGE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 156;
                        this.message();
                    }
                    break;
                case Protobuf3Parser.ENUM:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 157;
                        this.enumDefinition();
                    }
                    break;
                case Protobuf3Parser.SERVICE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 158;
                        this.service();
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
    Protobuf3Parser.prototype.message = function () {
        var _localctx = new MessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, Protobuf3Parser.RULE_message);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.match(Protobuf3Parser.MESSAGE);
                this.state = 162;
                this.messageName();
                this.state = 163;
                this.messageBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.messageBody = function () {
        var _localctx = new MessageBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, Protobuf3Parser.RULE_messageBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.match(Protobuf3Parser.LBRACE);
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.RPC) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STREAM) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.SYNTAX))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Protobuf3Parser.UINT32 - 33)) | (1 << (Protobuf3Parser.UINT64 - 33)) | (1 << (Protobuf3Parser.WEAK - 33)) | (1 << (Protobuf3Parser.Ident - 33)) | (1 << (Protobuf3Parser.SEMI - 33)) | (1 << (Protobuf3Parser.DOT - 33)))) !== 0)) {
                    {
                        this.state = 174;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                            case 1:
                                {
                                    this.state = 166;
                                    this.field();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 167;
                                    this.enumDefinition();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 168;
                                    this.message();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 169;
                                    this.option();
                                }
                                break;
                            case 5:
                                {
                                    this.state = 170;
                                    this.oneof();
                                }
                                break;
                            case 6:
                                {
                                    this.state = 171;
                                    this.mapField();
                                }
                                break;
                            case 7:
                                {
                                    this.state = 172;
                                    this.reserved();
                                }
                                break;
                            case 8:
                                {
                                    this.state = 173;
                                    this.emptyStatement();
                                }
                                break;
                        }
                    }
                    this.state = 178;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 179;
                this.match(Protobuf3Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.enumDefinition = function () {
        var _localctx = new EnumDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, Protobuf3Parser.RULE_enumDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this.match(Protobuf3Parser.ENUM);
                this.state = 182;
                this.enumName();
                this.state = 183;
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
    Protobuf3Parser.prototype.enumBody = function () {
        var _localctx = new EnumBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, Protobuf3Parser.RULE_enumBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this.match(Protobuf3Parser.LBRACE);
                this.state = 191;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.Ident || _la === Protobuf3Parser.SEMI) {
                    {
                        this.state = 189;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Protobuf3Parser.OPTION:
                                {
                                    this.state = 186;
                                    this.option();
                                }
                                break;
                            case Protobuf3Parser.Ident:
                                {
                                    this.state = 187;
                                    this.enumField();
                                }
                                break;
                            case Protobuf3Parser.SEMI:
                                {
                                    this.state = 188;
                                    this.emptyStatement();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 193;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 194;
                this.match(Protobuf3Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.enumField = function () {
        var _localctx = new EnumFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, Protobuf3Parser.RULE_enumField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.match(Protobuf3Parser.Ident);
                this.state = 197;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.MINUS) {
                    {
                        this.state = 198;
                        this.match(Protobuf3Parser.MINUS);
                    }
                }
                this.state = 201;
                this.match(Protobuf3Parser.IntLit);
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.LBRACK) {
                    {
                        this.state = 202;
                        this.match(Protobuf3Parser.LBRACK);
                        this.state = 203;
                        this.enumValueOption();
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === Protobuf3Parser.COMMA) {
                            {
                                {
                                    this.state = 204;
                                    this.match(Protobuf3Parser.COMMA);
                                    this.state = 205;
                                    this.enumValueOption();
                                }
                            }
                            this.state = 210;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 211;
                        this.match(Protobuf3Parser.RBRACK);
                    }
                }
                this.state = 215;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.enumValueOption = function () {
        var _localctx = new EnumValueOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, Protobuf3Parser.RULE_enumValueOption);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this.optionName();
                this.state = 218;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 219;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.service = function () {
        var _localctx = new ServiceContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, Protobuf3Parser.RULE_service);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.match(Protobuf3Parser.SERVICE);
                this.state = 222;
                this.serviceName();
                this.state = 223;
                this.match(Protobuf3Parser.LBRACE);
                this.state = 229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.RPC || _la === Protobuf3Parser.SEMI) {
                    {
                        this.state = 227;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Protobuf3Parser.OPTION:
                                {
                                    this.state = 224;
                                    this.option();
                                }
                                break;
                            case Protobuf3Parser.RPC:
                                {
                                    this.state = 225;
                                    this.rpc();
                                }
                                break;
                            case Protobuf3Parser.SEMI:
                                {
                                    this.state = 226;
                                    this.emptyStatement();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 231;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 232;
                this.match(Protobuf3Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.rpc = function () {
        var _localctx = new RpcContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, Protobuf3Parser.RULE_rpc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(Protobuf3Parser.RPC);
                this.state = 235;
                this.rpcName();
                this.state = 236;
                this.match(Protobuf3Parser.LPAREN);
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.STREAM) {
                    {
                        this.state = 237;
                        this.match(Protobuf3Parser.STREAM);
                    }
                }
                this.state = 240;
                this.messageType();
                this.state = 241;
                this.match(Protobuf3Parser.RPAREN);
                this.state = 242;
                this.match(Protobuf3Parser.RETURNS);
                this.state = 243;
                this.match(Protobuf3Parser.LPAREN);
                this.state = 245;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.STREAM) {
                    {
                        this.state = 244;
                        this.match(Protobuf3Parser.STREAM);
                    }
                }
                this.state = 247;
                this.messageType();
                this.state = 248;
                this.match(Protobuf3Parser.RPAREN);
                this.state = 259;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Protobuf3Parser.LBRACE:
                        {
                            {
                                this.state = 249;
                                this.match(Protobuf3Parser.LBRACE);
                                this.state = 254;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.SEMI) {
                                    {
                                        this.state = 252;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case Protobuf3Parser.OPTION:
                                                {
                                                    this.state = 250;
                                                    this.option();
                                                }
                                                break;
                                            case Protobuf3Parser.SEMI:
                                                {
                                                    this.state = 251;
                                                    this.emptyStatement();
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                    this.state = 256;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 257;
                                this.match(Protobuf3Parser.RBRACE);
                            }
                        }
                        break;
                    case Protobuf3Parser.SEMI:
                        {
                            this.state = 258;
                            this.match(Protobuf3Parser.SEMI);
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
    Protobuf3Parser.prototype.reserved = function () {
        var _localctx = new ReservedContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, Protobuf3Parser.RULE_reserved);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this.match(Protobuf3Parser.RESERVED);
                this.state = 264;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Protobuf3Parser.IntLit:
                        {
                            this.state = 262;
                            this.ranges();
                        }
                        break;
                    case Protobuf3Parser.StrLit:
                        {
                            this.state = 263;
                            this.fieldNames();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 266;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.ranges = function () {
        var _localctx = new RangesContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, Protobuf3Parser.RULE_ranges);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this.range();
                this.state = 273;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.COMMA) {
                    {
                        {
                            this.state = 269;
                            this.match(Protobuf3Parser.COMMA);
                            this.state = 270;
                            this.range();
                        }
                    }
                    this.state = 275;
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
    Protobuf3Parser.prototype.range = function () {
        var _localctx = new RangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, Protobuf3Parser.RULE_range);
        try {
            this.state = 280;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 276;
                        this.match(Protobuf3Parser.IntLit);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 277;
                        this.match(Protobuf3Parser.IntLit);
                        this.state = 278;
                        this.match(Protobuf3Parser.TO);
                        this.state = 279;
                        this.match(Protobuf3Parser.IntLit);
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
    Protobuf3Parser.prototype.fieldNames = function () {
        var _localctx = new FieldNamesContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, Protobuf3Parser.RULE_fieldNames);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.match(Protobuf3Parser.StrLit);
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.COMMA) {
                    {
                        {
                            this.state = 283;
                            this.match(Protobuf3Parser.COMMA);
                            this.state = 284;
                            this.match(Protobuf3Parser.StrLit);
                        }
                    }
                    this.state = 289;
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
    Protobuf3Parser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, Protobuf3Parser.RULE_type);
        var _la;
        try {
            this.state = 292;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 290;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STRING))) !== 0) || _la === Protobuf3Parser.UINT32 || _la === Protobuf3Parser.UINT64)) {
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
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 291;
                        this.messageOrEnumType();
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
    Protobuf3Parser.prototype.fieldNumber = function () {
        var _localctx = new FieldNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, Protobuf3Parser.RULE_fieldNumber);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 294;
                this.match(Protobuf3Parser.IntLit);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, Protobuf3Parser.RULE_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.REPEATED) {
                    {
                        this.state = 296;
                        this.match(Protobuf3Parser.REPEATED);
                    }
                }
                this.state = 299;
                this.type();
                this.state = 300;
                this.fieldName();
                this.state = 301;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 302;
                this.fieldNumber();
                this.state = 307;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.LBRACK) {
                    {
                        this.state = 303;
                        this.match(Protobuf3Parser.LBRACK);
                        this.state = 304;
                        this.fieldOptions();
                        this.state = 305;
                        this.match(Protobuf3Parser.RBRACK);
                    }
                }
                this.state = 309;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.fieldOptions = function () {
        var _localctx = new FieldOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, Protobuf3Parser.RULE_fieldOptions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 311;
                this.fieldOption();
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.COMMA) {
                    {
                        {
                            this.state = 312;
                            this.match(Protobuf3Parser.COMMA);
                            this.state = 313;
                            this.fieldOption();
                        }
                    }
                    this.state = 318;
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
    Protobuf3Parser.prototype.fieldOption = function () {
        var _localctx = new FieldOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, Protobuf3Parser.RULE_fieldOption);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 319;
                this.optionName();
                this.state = 320;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 321;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.oneof = function () {
        var _localctx = new OneofContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, Protobuf3Parser.RULE_oneof);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.match(Protobuf3Parser.ONEOF);
                this.state = 324;
                this.oneofName();
                this.state = 325;
                this.match(Protobuf3Parser.LBRACE);
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.RPC) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STREAM) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.SYNTAX))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Protobuf3Parser.UINT32 - 33)) | (1 << (Protobuf3Parser.UINT64 - 33)) | (1 << (Protobuf3Parser.WEAK - 33)) | (1 << (Protobuf3Parser.Ident - 33)) | (1 << (Protobuf3Parser.SEMI - 33)) | (1 << (Protobuf3Parser.DOT - 33)))) !== 0)) {
                    {
                        this.state = 328;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Protobuf3Parser.BOOL:
                            case Protobuf3Parser.BYTES:
                            case Protobuf3Parser.DOUBLE:
                            case Protobuf3Parser.FIXED32:
                            case Protobuf3Parser.FIXED64:
                            case Protobuf3Parser.FLOAT:
                            case Protobuf3Parser.INT32:
                            case Protobuf3Parser.INT64:
                            case Protobuf3Parser.MESSAGE:
                            case Protobuf3Parser.OPTION:
                            case Protobuf3Parser.PACKAGE:
                            case Protobuf3Parser.RPC:
                            case Protobuf3Parser.SERVICE:
                            case Protobuf3Parser.SFIXED32:
                            case Protobuf3Parser.SFIXED64:
                            case Protobuf3Parser.SINT32:
                            case Protobuf3Parser.SINT64:
                            case Protobuf3Parser.STREAM:
                            case Protobuf3Parser.STRING:
                            case Protobuf3Parser.SYNTAX:
                            case Protobuf3Parser.UINT32:
                            case Protobuf3Parser.UINT64:
                            case Protobuf3Parser.WEAK:
                            case Protobuf3Parser.Ident:
                            case Protobuf3Parser.DOT:
                                {
                                    this.state = 326;
                                    this.oneofField();
                                }
                                break;
                            case Protobuf3Parser.SEMI:
                                {
                                    this.state = 327;
                                    this.emptyStatement();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 332;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 333;
                this.match(Protobuf3Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.oneofField = function () {
        var _localctx = new OneofFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, Protobuf3Parser.RULE_oneofField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this.type();
                this.state = 336;
                this.fieldName();
                this.state = 337;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 338;
                this.fieldNumber();
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.LBRACK) {
                    {
                        this.state = 339;
                        this.match(Protobuf3Parser.LBRACK);
                        this.state = 340;
                        this.fieldOptions();
                        this.state = 341;
                        this.match(Protobuf3Parser.RBRACK);
                    }
                }
                this.state = 345;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.mapField = function () {
        var _localctx = new MapFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, Protobuf3Parser.RULE_mapField);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(Protobuf3Parser.MAP);
                this.state = 348;
                this.match(Protobuf3Parser.LCHEVR);
                this.state = 349;
                this.keyType();
                this.state = 350;
                this.match(Protobuf3Parser.COMMA);
                this.state = 351;
                this.type();
                this.state = 352;
                this.match(Protobuf3Parser.RCHEVR);
                this.state = 353;
                this.mapName();
                this.state = 354;
                this.match(Protobuf3Parser.ASSIGN);
                this.state = 355;
                this.fieldNumber();
                this.state = 360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.LBRACK) {
                    {
                        this.state = 356;
                        this.match(Protobuf3Parser.LBRACK);
                        this.state = 357;
                        this.fieldOptions();
                        this.state = 358;
                        this.match(Protobuf3Parser.RBRACK);
                    }
                }
                this.state = 362;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.keyType = function () {
        var _localctx = new KeyTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, Protobuf3Parser.RULE_keyType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STRING))) !== 0) || _la === Protobuf3Parser.UINT32 || _la === Protobuf3Parser.UINT64)) {
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
    Protobuf3Parser.prototype.reservedWord = function () {
        var _localctx = new ReservedWordContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, Protobuf3Parser.RULE_reservedWord);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                _la = this._input.LA(1);
                if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (Protobuf3Parser.MESSAGE - 13)) | (1 << (Protobuf3Parser.OPTION - 13)) | (1 << (Protobuf3Parser.PACKAGE - 13)) | (1 << (Protobuf3Parser.RPC - 13)) | (1 << (Protobuf3Parser.SERVICE - 13)) | (1 << (Protobuf3Parser.STREAM - 13)) | (1 << (Protobuf3Parser.STRING - 13)) | (1 << (Protobuf3Parser.SYNTAX - 13)) | (1 << (Protobuf3Parser.WEAK - 13)))) !== 0))) {
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
    Protobuf3Parser.prototype.fullIdent = function () {
        var _localctx = new FullIdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, Protobuf3Parser.RULE_fullIdent);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                this.match(Protobuf3Parser.Ident);
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Protobuf3Parser.DOT) {
                    {
                        {
                            this.state = 369;
                            this.match(Protobuf3Parser.DOT);
                            this.state = 370;
                            this.match(Protobuf3Parser.Ident);
                        }
                    }
                    this.state = 375;
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
    Protobuf3Parser.prototype.messageName = function () {
        var _localctx = new MessageNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, Protobuf3Parser.RULE_messageName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this.match(Protobuf3Parser.Ident);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.enumName = function () {
        var _localctx = new EnumNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, Protobuf3Parser.RULE_enumName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 378;
                this.match(Protobuf3Parser.Ident);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.messageOrEnumName = function () {
        var _localctx = new MessageOrEnumNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, Protobuf3Parser.RULE_messageOrEnumName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(Protobuf3Parser.Ident);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.fieldName = function () {
        var _localctx = new FieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, Protobuf3Parser.RULE_fieldName);
        try {
            this.state = 384;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Protobuf3Parser.Ident:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 382;
                        this.match(Protobuf3Parser.Ident);
                    }
                    break;
                case Protobuf3Parser.MESSAGE:
                case Protobuf3Parser.OPTION:
                case Protobuf3Parser.PACKAGE:
                case Protobuf3Parser.RPC:
                case Protobuf3Parser.SERVICE:
                case Protobuf3Parser.STREAM:
                case Protobuf3Parser.STRING:
                case Protobuf3Parser.SYNTAX:
                case Protobuf3Parser.WEAK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 383;
                        this.reservedWord();
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
    Protobuf3Parser.prototype.oneofName = function () {
        var _localctx = new OneofNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, Protobuf3Parser.RULE_oneofName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this.match(Protobuf3Parser.Ident);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.mapName = function () {
        var _localctx = new MapNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, Protobuf3Parser.RULE_mapName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                this.match(Protobuf3Parser.Ident);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.serviceName = function () {
        var _localctx = new ServiceNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, Protobuf3Parser.RULE_serviceName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(Protobuf3Parser.Ident);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.rpcName = function () {
        var _localctx = new RpcNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, Protobuf3Parser.RULE_rpcName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                this.match(Protobuf3Parser.Ident);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.messageType = function () {
        var _localctx = new MessageTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, Protobuf3Parser.RULE_messageType);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.DOT) {
                    {
                        this.state = 394;
                        this.match(Protobuf3Parser.DOT);
                    }
                }
                this.state = 401;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 397;
                                this.match(Protobuf3Parser.Ident);
                                this.state = 398;
                                this.match(Protobuf3Parser.DOT);
                            }
                        }
                    }
                    this.state = 403;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                }
                this.state = 404;
                this.messageName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.messageOrEnumType = function () {
        var _localctx = new MessageOrEnumTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, Protobuf3Parser.RULE_messageOrEnumType);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 407;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Protobuf3Parser.DOT) {
                    {
                        this.state = 406;
                        this.match(Protobuf3Parser.DOT);
                    }
                }
                this.state = 416;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 411;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Protobuf3Parser.Ident:
                                        {
                                            this.state = 409;
                                            this.match(Protobuf3Parser.Ident);
                                        }
                                        break;
                                    case Protobuf3Parser.MESSAGE:
                                    case Protobuf3Parser.OPTION:
                                    case Protobuf3Parser.PACKAGE:
                                    case Protobuf3Parser.RPC:
                                    case Protobuf3Parser.SERVICE:
                                    case Protobuf3Parser.STREAM:
                                    case Protobuf3Parser.STRING:
                                    case Protobuf3Parser.SYNTAX:
                                    case Protobuf3Parser.WEAK:
                                        {
                                            this.state = 410;
                                            this.reservedWord();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 413;
                                this.match(Protobuf3Parser.DOT);
                            }
                        }
                    }
                    this.state = 418;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                }
                this.state = 419;
                this.messageOrEnumName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.emptyStatement = function () {
        var _localctx = new EmptyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, Protobuf3Parser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 421;
                this.match(Protobuf3Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Protobuf3Parser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, Protobuf3Parser.RULE_constant);
        var _la;
        try {
            this.state = 433;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 423;
                        this.fullIdent();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 425;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS) {
                            {
                                this.state = 424;
                                _la = this._input.LA(1);
                                if (!(_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS)) {
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
                        this.state = 427;
                        this.match(Protobuf3Parser.IntLit);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 429;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS) {
                            {
                                this.state = 428;
                                _la = this._input.LA(1);
                                if (!(_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS)) {
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
                        this.state = 431;
                        this.match(Protobuf3Parser.FloatLit);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 432;
                        _la = this._input.LA(1);
                        if (!(_la === Protobuf3Parser.BoolLit || _la === Protobuf3Parser.StrLit)) {
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
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(Protobuf3Parser, "_ATN", {
        get: function () {
            if (!Protobuf3Parser.__ATN) {
                Protobuf3Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(Protobuf3Parser._serializedATN));
            }
            return Protobuf3Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    Protobuf3Parser.T__0 = 1;
    Protobuf3Parser.BOOL = 2;
    Protobuf3Parser.BYTES = 3;
    Protobuf3Parser.DOUBLE = 4;
    Protobuf3Parser.ENUM = 5;
    Protobuf3Parser.FIXED32 = 6;
    Protobuf3Parser.FIXED64 = 7;
    Protobuf3Parser.FLOAT = 8;
    Protobuf3Parser.IMPORT = 9;
    Protobuf3Parser.INT32 = 10;
    Protobuf3Parser.INT64 = 11;
    Protobuf3Parser.MAP = 12;
    Protobuf3Parser.MESSAGE = 13;
    Protobuf3Parser.ONEOF = 14;
    Protobuf3Parser.OPTION = 15;
    Protobuf3Parser.PACKAGE = 16;
    Protobuf3Parser.PROTO3_DOUBLE = 17;
    Protobuf3Parser.PROTO3_SINGLE = 18;
    Protobuf3Parser.PUBLIC = 19;
    Protobuf3Parser.REPEATED = 20;
    Protobuf3Parser.RESERVED = 21;
    Protobuf3Parser.RETURNS = 22;
    Protobuf3Parser.RPC = 23;
    Protobuf3Parser.SERVICE = 24;
    Protobuf3Parser.SFIXED32 = 25;
    Protobuf3Parser.SFIXED64 = 26;
    Protobuf3Parser.SINT32 = 27;
    Protobuf3Parser.SINT64 = 28;
    Protobuf3Parser.STREAM = 29;
    Protobuf3Parser.STRING = 30;
    Protobuf3Parser.SYNTAX = 31;
    Protobuf3Parser.TO = 32;
    Protobuf3Parser.UINT32 = 33;
    Protobuf3Parser.UINT64 = 34;
    Protobuf3Parser.WEAK = 35;
    Protobuf3Parser.Ident = 36;
    Protobuf3Parser.IntLit = 37;
    Protobuf3Parser.FloatLit = 38;
    Protobuf3Parser.BoolLit = 39;
    Protobuf3Parser.StrLit = 40;
    Protobuf3Parser.Quote = 41;
    Protobuf3Parser.LPAREN = 42;
    Protobuf3Parser.RPAREN = 43;
    Protobuf3Parser.LBRACE = 44;
    Protobuf3Parser.RBRACE = 45;
    Protobuf3Parser.LBRACK = 46;
    Protobuf3Parser.RBRACK = 47;
    Protobuf3Parser.LCHEVR = 48;
    Protobuf3Parser.RCHEVR = 49;
    Protobuf3Parser.SEMI = 50;
    Protobuf3Parser.COMMA = 51;
    Protobuf3Parser.DOT = 52;
    Protobuf3Parser.MINUS = 53;
    Protobuf3Parser.PLUS = 54;
    Protobuf3Parser.ASSIGN = 55;
    Protobuf3Parser.WS = 56;
    Protobuf3Parser.COMMENT = 57;
    Protobuf3Parser.LINE_COMMENT = 58;
    Protobuf3Parser.RULE_proto = 0;
    Protobuf3Parser.RULE_syntax = 1;
    Protobuf3Parser.RULE_importStatement = 2;
    Protobuf3Parser.RULE_packageStatement = 3;
    Protobuf3Parser.RULE_option = 4;
    Protobuf3Parser.RULE_optionName = 5;
    Protobuf3Parser.RULE_optionBody = 6;
    Protobuf3Parser.RULE_optionBodyVariable = 7;
    Protobuf3Parser.RULE_topLevelDef = 8;
    Protobuf3Parser.RULE_message = 9;
    Protobuf3Parser.RULE_messageBody = 10;
    Protobuf3Parser.RULE_enumDefinition = 11;
    Protobuf3Parser.RULE_enumBody = 12;
    Protobuf3Parser.RULE_enumField = 13;
    Protobuf3Parser.RULE_enumValueOption = 14;
    Protobuf3Parser.RULE_service = 15;
    Protobuf3Parser.RULE_rpc = 16;
    Protobuf3Parser.RULE_reserved = 17;
    Protobuf3Parser.RULE_ranges = 18;
    Protobuf3Parser.RULE_range = 19;
    Protobuf3Parser.RULE_fieldNames = 20;
    Protobuf3Parser.RULE_type = 21;
    Protobuf3Parser.RULE_fieldNumber = 22;
    Protobuf3Parser.RULE_field = 23;
    Protobuf3Parser.RULE_fieldOptions = 24;
    Protobuf3Parser.RULE_fieldOption = 25;
    Protobuf3Parser.RULE_oneof = 26;
    Protobuf3Parser.RULE_oneofField = 27;
    Protobuf3Parser.RULE_mapField = 28;
    Protobuf3Parser.RULE_keyType = 29;
    Protobuf3Parser.RULE_reservedWord = 30;
    Protobuf3Parser.RULE_fullIdent = 31;
    Protobuf3Parser.RULE_messageName = 32;
    Protobuf3Parser.RULE_enumName = 33;
    Protobuf3Parser.RULE_messageOrEnumName = 34;
    Protobuf3Parser.RULE_fieldName = 35;
    Protobuf3Parser.RULE_oneofName = 36;
    Protobuf3Parser.RULE_mapName = 37;
    Protobuf3Parser.RULE_serviceName = 38;
    Protobuf3Parser.RULE_rpcName = 39;
    Protobuf3Parser.RULE_messageType = 40;
    Protobuf3Parser.RULE_messageOrEnumType = 41;
    Protobuf3Parser.RULE_emptyStatement = 42;
    Protobuf3Parser.RULE_constant = 43;
    // tslint:disable:no-trailing-whitespace
    Protobuf3Parser.ruleNames = [
        "proto", "syntax", "importStatement", "packageStatement", "option", "optionName",
        "optionBody", "optionBodyVariable", "topLevelDef", "message", "messageBody",
        "enumDefinition", "enumBody", "enumField", "enumValueOption", "service",
        "rpc", "reserved", "ranges", "range", "fieldNames", "type", "fieldNumber",
        "field", "fieldOptions", "fieldOption", "oneof", "oneofField", "mapField",
        "keyType", "reservedWord", "fullIdent", "messageName", "enumName", "messageOrEnumName",
        "fieldName", "oneofName", "mapName", "serviceName", "rpcName", "messageType",
        "messageOrEnumType", "emptyStatement", "constant",
    ];
    Protobuf3Parser._LITERAL_NAMES = [
        undefined, "':'", "'bool'", "'bytes'", "'double'", "'enum'", "'fixed32'",
        "'fixed64'", "'float'", "'import'", "'int32'", "'int64'", "'map'", "'message'",
        "'oneof'", "'option'", "'package'", "'\"proto3\"'", "''roto3''", "'public'",
        "'repeated'", "'reserved'", "'returns'", "'rpc'", "'service'", "'sfixed32'",
        "'sfixed64'", "'sint32'", "'sint64'", "'stream'", "'string'", "'syntax'",
        "'to'", "'uint32'", "'uint64'", "'weak'", undefined, undefined, undefined,
        undefined, undefined, undefined, "'('", "')'", "'{'", "'}'", "'['", "']'",
        "'<'", "'>'", "';'", "','", "'.'", "'-'", "'+'", "'='",
    ];
    Protobuf3Parser._SYMBOLIC_NAMES = [
        undefined, undefined, "BOOL", "BYTES", "DOUBLE", "ENUM", "FIXED32", "FIXED64",
        "FLOAT", "IMPORT", "INT32", "INT64", "MAP", "MESSAGE", "ONEOF", "OPTION",
        "PACKAGE", "PROTO3_DOUBLE", "PROTO3_SINGLE", "PUBLIC", "REPEATED", "RESERVED",
        "RETURNS", "RPC", "SERVICE", "SFIXED32", "SFIXED64", "SINT32", "SINT64",
        "STREAM", "STRING", "SYNTAX", "TO", "UINT32", "UINT64", "WEAK", "Ident",
        "IntLit", "FloatLit", "BoolLit", "StrLit", "Quote", "LPAREN", "RPAREN",
        "LBRACE", "RBRACE", "LBRACK", "RBRACK", "LCHEVR", "RCHEVR", "SEMI", "COMMA",
        "DOT", "MINUS", "PLUS", "ASSIGN", "WS", "COMMENT", "LINE_COMMENT",
    ];
    Protobuf3Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(Protobuf3Parser._LITERAL_NAMES, Protobuf3Parser._SYMBOLIC_NAMES, []);
    Protobuf3Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\u01B6\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02" +
        "a\n\x02\f\x02\x0E\x02d\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x05\x04o\n\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
        "\x06}\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
        "\x07\x86\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8B\n\x07\x07\x07\x8D\n" +
        "\x07\f\x07\x0E\x07\x90\v\x07\x03\b\x03\b\x07\b\x94\n\b\f\b\x0E\b\x97\v" +
        "\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xA2\n\n" +
        "\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x07\f\xB1\n\f\f\f\x0E\f\xB4\v\f\x03\f\x03\f\x03\r\x03\r\x03\r" +
        "\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC0\n\x0E\f\x0E\x0E\x0E" +
        "\xC3\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xCA\n\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xD1\n\x0F\f\x0F\x0E\x0F\xD4" +
        "\v\x0F\x03\x0F\x03\x0F\x05\x0F\xD8\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
        "\xE6\n\x11\f\x11\x0E\x11\xE9\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x05\x12\xF1\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x05\x12\xF8\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xFF" +
        "\n\x12\f\x12\x0E\x12\u0102\v\x12\x03\x12\x03\x12\x05\x12\u0106\n\x12\x03" +
        "\x13\x03\x13\x03\x13\x05\x13\u010B\n\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
        "\x03\x14\x07\x14\u0112\n\x14\f\x14\x0E\x14\u0115\v\x14\x03\x15\x03\x15" +
        "\x03\x15\x03\x15\x05\x15\u011B\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\u0120" +
        "\n\x16\f\x16\x0E\x16\u0123\v\x16\x03\x17\x03\x17\x05\x17\u0127\n\x17\x03" +
        "\x18\x03\x18\x03\x19\x05\x19\u012C\n\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0136\n\x19\x03\x19\x03\x19\x03" +
        "\x1A\x03\x1A\x03\x1A\x07\x1A\u013D\n\x1A\f\x1A\x0E\x1A\u0140\v\x1A\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
        "\x1C\u014B\n\x1C\f\x1C\x0E\x1C\u014E\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u015A\n\x1D" +
        "\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u016B\n\x1E\x03" +
        "\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x07!\u0176\n!\f" +
        "!\x0E!\u0179\v!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x05%\u0183\n" +
        "%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x05*\u018E\n*\x03*\x03" +
        "*\x07*\u0192\n*\f*\x0E*\u0195\v*\x03*\x03*\x03+\x05+\u019A\n+\x03+\x03" +
        "+\x05+\u019E\n+\x03+\x07+\u01A1\n+\f+\x0E+\u01A4\v+\x03+\x03+\x03,\x03" +
        ",\x03-\x03-\x05-\u01AC\n-\x03-\x03-\x05-\u01B0\n-\x03-\x03-\x05-\u01B4" +
        "\n-\x03-\x02\x02\x02.\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
        ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
        "\x02\t\x03\x02\x13\x14\x04\x02\x15\x15%%\b\x02\x04\x06\b\n\f\r\x1B\x1E" +
        "  #$\b\x02\x04\x04\b\t\f\r\x1B\x1E  #$\x07\x02\x0F\x0F\x11\x12\x19\x1A" +
        "\x1F!%%\x03\x0278\x03\x02)*\x02\u01C4\x02Z\x03\x02\x02\x02\x04g\x03\x02" +
        "\x02\x02\x06l\x03\x02\x02\x02\bs\x03\x02\x02\x02\nw\x03\x02\x02\x02\f" +
        "\x85\x03\x02\x02\x02\x0E\x91\x03\x02\x02\x02\x10\x9A\x03\x02\x02\x02\x12" +
        "\xA1\x03\x02\x02\x02\x14\xA3\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18" +
        "\xB7\x03\x02\x02\x02\x1A\xBB\x03\x02\x02\x02\x1C\xC6\x03\x02\x02\x02\x1E" +
        "\xDB\x03\x02\x02\x02 \xDF\x03\x02\x02\x02\"\xEC\x03\x02\x02\x02$\u0107" +
        "\x03\x02\x02\x02&\u010E\x03\x02\x02\x02(\u011A\x03\x02\x02\x02*\u011C" +
        "\x03\x02\x02\x02,\u0126\x03\x02\x02\x02.\u0128\x03\x02\x02\x020\u012B" +
        "\x03\x02\x02\x022\u0139\x03\x02\x02\x024\u0141\x03\x02\x02\x026\u0145" +
        "\x03\x02\x02\x028\u0151\x03\x02\x02\x02:\u015D\x03\x02\x02\x02<\u016E" +
        "\x03\x02\x02\x02>\u0170\x03\x02\x02\x02@\u0172\x03\x02\x02\x02B\u017A" +
        "\x03\x02\x02\x02D\u017C\x03\x02\x02\x02F\u017E\x03\x02\x02\x02H\u0182" +
        "\x03\x02\x02\x02J\u0184\x03\x02\x02\x02L\u0186\x03\x02\x02\x02N\u0188" +
        "\x03\x02\x02\x02P\u018A\x03\x02\x02\x02R\u018D\x03\x02\x02\x02T\u0199" +
        "\x03\x02\x02\x02V\u01A7\x03\x02\x02\x02X\u01B3\x03\x02\x02\x02Zb\x05\x04" +
        "\x03\x02[a\x05\x06\x04\x02\\a\x05\b\x05\x02]a\x05\n\x06\x02^a\x05\x12" +
        "\n\x02_a\x05V,\x02`[\x03\x02\x02\x02`\\\x03\x02\x02\x02`]\x03\x02\x02" +
        "\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02" +
        "\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03\x02\x02\x02ef\x07\x02\x02" +
        "\x03f\x03\x03\x02\x02\x02gh\x07!\x02\x02hi\x079\x02\x02ij\t\x02\x02\x02" +
        "jk\x074\x02\x02k\x05\x03\x02\x02\x02ln\x07\v\x02\x02mo\t\x03\x02\x02n" +
        "m\x03\x02\x02\x02no\x03\x02\x02\x02op\x03\x02\x02\x02pq\x07*\x02\x02q" +
        "r\x074\x02\x02r\x07\x03\x02\x02\x02st\x07\x12\x02\x02tu\x05@!\x02uv\x07" +
        "4\x02\x02v\t\x03\x02\x02\x02wx\x07\x11\x02\x02xy\x05\f\x07\x02y|\x079" +
        "\x02\x02z}\x05X-\x02{}\x05\x0E\b\x02|z\x03\x02\x02\x02|{\x03\x02\x02\x02" +
        "}~\x03\x02\x02\x02~\x7F\x074\x02\x02\x7F\v\x03\x02\x02\x02\x80\x86\x07" +
        "&\x02\x02\x81\x82\x07,\x02\x02\x82\x83\x05@!\x02\x83\x84\x07-\x02\x02" +
        "\x84\x86\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x85\x81\x03\x02\x02\x02" +
        "\x86\x8E\x03\x02\x02\x02\x87\x8A\x076\x02\x02\x88\x8B\x07&\x02\x02\x89" +
        "\x8B\x05> \x02\x8A\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8D" +
        "\x03\x02\x02\x02\x8C\x87\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C" +
        "\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\r\x03\x02\x02\x02\x90\x8E" +
        "\x03\x02\x02\x02\x91\x95\x07.\x02\x02\x92\x94\x05\x10\t\x02\x93\x92\x03" +
        "\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03" +
        "\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07" +
        "/\x02\x02\x99\x0F\x03\x02\x02\x02\x9A\x9B\x05\f\x07\x02\x9B\x9C\x07\x03" +
        "\x02\x02\x9C\x9D\x05X-\x02\x9D\x11\x03\x02\x02\x02\x9E\xA2\x05\x14\v\x02" +
        "\x9F\xA2\x05\x18\r\x02\xA0\xA2\x05 \x11\x02\xA1\x9E\x03\x02\x02\x02\xA1" +
        "\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x13\x03\x02\x02\x02\xA3" +
        "\xA4\x07\x0F\x02\x02\xA4\xA5\x05B\"\x02\xA5\xA6\x05\x16\f\x02\xA6\x15" +
        "\x03\x02\x02\x02\xA7\xB2\x07.\x02\x02\xA8\xB1\x050\x19\x02\xA9\xB1\x05" +
        "\x18\r\x02\xAA\xB1\x05\x14\v\x02\xAB\xB1\x05\n\x06\x02\xAC\xB1\x056\x1C" +
        "\x02\xAD\xB1\x05:\x1E\x02\xAE\xB1\x05$\x13\x02\xAF\xB1\x05V,\x02\xB0\xA8" +
        "\x03\x02\x02\x02\xB0\xA9\x03\x02\x02\x02\xB0\xAA\x03\x02\x02\x02\xB0\xAB" +
        "\x03\x02\x02\x02\xB0\xAC\x03\x02\x02\x02\xB0\xAD\x03\x02\x02\x02\xB0\xAE" +
        "\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0" +
        "\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2" +
        "\x03\x02\x02\x02\xB5\xB6\x07/\x02\x02\xB6\x17\x03\x02\x02\x02\xB7\xB8" +
        "\x07\x07\x02\x02\xB8\xB9\x05D#\x02\xB9\xBA\x05\x1A\x0E\x02\xBA\x19\x03" +
        "\x02\x02\x02\xBB\xC1\x07.\x02\x02\xBC\xC0\x05\n\x06\x02\xBD\xC0\x05\x1C" +
        "\x0F\x02\xBE\xC0\x05V,\x02\xBF\xBC\x03\x02\x02\x02\xBF\xBD\x03\x02\x02" +
        "\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02" +
        "\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC1\x03\x02\x02" +
        "\x02\xC4\xC5\x07/\x02\x02\xC5\x1B\x03\x02\x02\x02\xC6\xC7\x07&\x02\x02" +
        "\xC7\xC9\x079\x02\x02\xC8\xCA\x077\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9" +
        "\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xD7\x07\'\x02\x02\xCC" +
        "\xCD\x070\x02\x02\xCD\xD2\x05\x1E\x10\x02\xCE\xCF\x075\x02\x02\xCF\xD1" +
        "\x05\x1E\x10\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0" +
        "\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD2" +
        "\x03\x02\x02\x02\xD5\xD6\x071\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xCC" +
        "\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA" +
        "\x074\x02\x02\xDA\x1D\x03\x02\x02\x02\xDB\xDC\x05\f\x07\x02\xDC\xDD\x07" +
        "9\x02\x02\xDD\xDE\x05X-\x02\xDE\x1F\x03\x02\x02\x02\xDF\xE0\x07\x1A\x02" +
        "\x02\xE0\xE1\x05N(\x02\xE1\xE7\x07.\x02\x02\xE2\xE6\x05\n\x06\x02\xE3" +
        "\xE6\x05\"\x12\x02\xE4\xE6\x05V,\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE3\x03" +
        "\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03" +
        "\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03" +
        "\x02\x02\x02\xEA\xEB\x07/\x02\x02\xEB!\x03\x02\x02\x02\xEC\xED\x07\x19" +
        "\x02\x02\xED\xEE\x05P)\x02\xEE\xF0\x07,\x02\x02\xEF\xF1\x07\x1F\x02\x02" +
        "\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02" +
        "\xF2\xF3\x05R*\x02\xF3\xF4\x07-\x02\x02\xF4\xF5\x07\x18\x02\x02\xF5\xF7" +
        "\x07,\x02\x02\xF6\xF8\x07\x1F\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8" +
        "\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x05R*\x02\xFA\u0105\x07" +
        "-\x02\x02\xFB\u0100\x07.\x02\x02\xFC\xFF\x05\n\x06\x02\xFD\xFF\x05V,\x02" +
        "\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02" +
        "\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103" +
        "\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0106\x07/\x02\x02" +
        "\u0104\u0106\x074\x02\x02\u0105\xFB\x03\x02\x02\x02\u0105\u0104\x03\x02" +
        "\x02\x02\u0106#\x03\x02\x02\x02\u0107\u010A\x07\x17\x02\x02\u0108\u010B" +
        "\x05&\x14\x02\u0109\u010B\x05*\x16\x02\u010A\u0108\x03\x02\x02\x02\u010A" +
        "\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x074\x02" +
        "\x02\u010D%\x03\x02\x02\x02\u010E\u0113\x05(\x15\x02\u010F\u0110\x075" +
        "\x02\x02\u0110\u0112\x05(\x15\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0115" +
        "\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02" +
        "\u0114\'\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u011B\x07\'" +
        "\x02\x02\u0117\u0118\x07\'\x02\x02\u0118\u0119\x07\"\x02\x02\u0119\u011B" +
        "\x07\'\x02\x02\u011A\u0116\x03\x02\x02\x02\u011A\u0117\x03\x02\x02\x02" +
        "\u011B)\x03\x02\x02\x02\u011C\u0121\x07*\x02\x02\u011D\u011E\x075\x02" +
        "\x02\u011E\u0120\x07*\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123" +
        "\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02" +
        "\u0122+\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0127\t\x04" +
        "\x02\x02\u0125\u0127\x05T+\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0125" +
        "\x03\x02\x02\x02\u0127-\x03\x02\x02\x02\u0128\u0129\x07\'\x02\x02\u0129" +
        "/\x03\x02\x02\x02\u012A\u012C\x07\x16\x02\x02\u012B\u012A\x03\x02\x02" +
        "\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E" +
        "\x05,\x17\x02\u012E\u012F\x05H%\x02\u012F\u0130\x079\x02\x02\u0130\u0135" +
        "\x05.\x18\x02\u0131\u0132\x070\x02\x02\u0132\u0133\x052\x1A\x02\u0133" +
        "\u0134\x071\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0131\x03\x02\x02" +
        "\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138" +
        "\x074\x02\x02\u01381\x03\x02\x02\x02\u0139\u013E\x054\x1B\x02\u013A\u013B" +
        "\x075\x02\x02\u013B\u013D\x054\x1B\x02\u013C\u013A\x03\x02\x02\x02\u013D" +
        "\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02" +
        "\x02\x02\u013F3\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142" +
        "\x05\f\x07\x02\u0142\u0143\x079\x02\x02\u0143\u0144\x05X-\x02\u01445\x03" +
        "\x02\x02\x02\u0145\u0146\x07\x10\x02\x02\u0146\u0147\x05J&\x02\u0147\u014C" +
        "\x07.\x02\x02\u0148\u014B\x058\x1D\x02\u0149\u014B\x05V,\x02\u014A\u0148" +
        "\x03\x02\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02" +
        "\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014F\x03" +
        "\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0150\x07/\x02\x02\u0150" +
        "7\x03\x02\x02\x02\u0151\u0152\x05,\x17\x02\u0152\u0153\x05H%\x02\u0153" +
        "\u0154\x079\x02\x02\u0154\u0159\x05.\x18\x02\u0155\u0156\x070\x02\x02" +
        "\u0156\u0157\x052\x1A\x02\u0157\u0158\x071\x02\x02\u0158\u015A\x03\x02" +
        "\x02\x02\u0159\u0155\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
        "\u015B\x03\x02\x02\x02\u015B\u015C\x074\x02\x02\u015C9\x03\x02\x02\x02" +
        "\u015D\u015E\x07\x0E\x02\x02\u015E\u015F\x072\x02\x02\u015F\u0160\x05" +
        "<\x1F\x02\u0160\u0161\x075\x02\x02\u0161\u0162\x05,\x17\x02\u0162\u0163" +
        "\x073\x02\x02\u0163\u0164\x05L\'\x02\u0164\u0165\x079\x02\x02\u0165\u016A" +
        "\x05.\x18\x02\u0166\u0167\x070\x02\x02\u0167\u0168\x052\x1A\x02\u0168" +
        "\u0169\x071\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u0166\x03\x02\x02" +
        "\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D" +
        "\x074\x02\x02\u016D;\x03\x02\x02\x02\u016E\u016F\t\x05\x02\x02\u016F=" +
        "\x03\x02\x02\x02\u0170\u0171\t\x06\x02\x02\u0171?\x03\x02\x02\x02\u0172" +
        "\u0177\x07&\x02\x02\u0173\u0174\x076\x02\x02\u0174\u0176\x07&\x02\x02" +
        "\u0175\u0173\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03" +
        "\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178A\x03\x02\x02\x02\u0179" +
        "\u0177\x03\x02\x02\x02\u017A\u017B\x07&\x02\x02\u017BC\x03\x02\x02\x02" +
        "\u017C\u017D\x07&\x02\x02\u017DE\x03\x02\x02\x02\u017E\u017F\x07&\x02" +
        "\x02\u017FG\x03\x02\x02\x02\u0180\u0183\x07&\x02\x02\u0181\u0183\x05>" +
        " \x02\u0182\u0180\x03\x02\x02\x02\u0182\u0181\x03\x02\x02\x02\u0183I\x03" +
        "\x02\x02\x02\u0184\u0185\x07&\x02\x02\u0185K\x03\x02\x02\x02\u0186\u0187" +
        "\x07&\x02\x02\u0187M\x03\x02\x02\x02\u0188\u0189\x07&\x02\x02\u0189O\x03" +
        "\x02\x02\x02\u018A\u018B\x07&\x02\x02\u018BQ\x03\x02\x02\x02\u018C\u018E" +
        "\x076\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02" +
        "\u018E\u0193\x03\x02\x02\x02\u018F\u0190\x07&\x02\x02\u0190\u0192\x07" +
        "6\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193" +
        "\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02" +
        "\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0197\x05B\"\x02\u0197S\x03" +
        "\x02\x02\x02\u0198\u019A\x076\x02\x02\u0199\u0198\x03\x02\x02\x02\u0199" +
        "\u019A\x03\x02\x02\x02\u019A\u01A2\x03\x02\x02\x02\u019B\u019E\x07&\x02" +
        "\x02\u019C\u019E\x05> \x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03" +
        "\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x076\x02\x02\u01A0" +
        "\u019D\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02" +
        "\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4" +
        "\u01A2\x03\x02\x02\x02\u01A5\u01A6\x05F$\x02\u01A6U\x03\x02\x02\x02\u01A7" +
        "\u01A8\x074\x02\x02\u01A8W\x03\x02\x02\x02\u01A9\u01B4\x05@!\x02\u01AA" +
        "\u01AC\t\x07\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02" +
        "\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B4\x07\'\x02\x02\u01AE\u01B0" +
        "\t\x07\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02" +
        "\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B4\x07(\x02\x02\u01B2\u01B4\t\b" +
        "\x02\x02\u01B3\u01A9\x03\x02\x02\x02\u01B3\u01AB\x03\x02\x02\x02\u01B3" +
        "\u01AF\x03\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4Y\x03\x02\x02" +
        "\x02/`bn|\x85\x8A\x8E\x95\xA1\xB0\xB2\xBF\xC1\xC9\xD2\xD7\xE5\xE7\xF0" +
        "\xF7\xFE\u0100\u0105\u010A\u0113\u011A\u0121\u0126\u012B\u0135\u013E\u014A" +
        "\u014C\u0159\u016A\u0177\u0182\u018D\u0193\u0199\u019D\u01A2\u01AB\u01AF" +
        "\u01B3";
    return Protobuf3Parser;
}(Parser_1.Parser));
exports.Protobuf3Parser = Protobuf3Parser;
var ProtoContext = /** @class */ (function (_super) {
    __extends(ProtoContext, _super);
    function ProtoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProtoContext.prototype.syntax = function () {
        return this.getRuleContext(0, SyntaxContext);
    };
    ProtoContext.prototype.EOF = function () { return this.getToken(Protobuf3Parser.EOF, 0); };
    ProtoContext.prototype.importStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportStatementContext);
        }
        else {
            return this.getRuleContext(i, ImportStatementContext);
        }
    };
    ProtoContext.prototype.packageStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PackageStatementContext);
        }
        else {
            return this.getRuleContext(i, PackageStatementContext);
        }
    };
    ProtoContext.prototype.option = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionContext);
        }
        else {
            return this.getRuleContext(i, OptionContext);
        }
    };
    ProtoContext.prototype.topLevelDef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelDefContext);
        }
        else {
            return this.getRuleContext(i, TopLevelDefContext);
        }
    };
    ProtoContext.prototype.emptyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyStatementContext);
        }
        else {
            return this.getRuleContext(i, EmptyStatementContext);
        }
    };
    Object.defineProperty(ProtoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_proto; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProtoContext.prototype.enterRule = function (listener) {
        if (listener.enterProto) {
            listener.enterProto(this);
        }
    };
    // @Override
    ProtoContext.prototype.exitRule = function (listener) {
        if (listener.exitProto) {
            listener.exitProto(this);
        }
    };
    // @Override
    ProtoContext.prototype.accept = function (visitor) {
        if (visitor.visitProto) {
            return visitor.visitProto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProtoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProtoContext = ProtoContext;
var SyntaxContext = /** @class */ (function (_super) {
    __extends(SyntaxContext, _super);
    function SyntaxContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxContext.prototype.SYNTAX = function () { return this.getToken(Protobuf3Parser.SYNTAX, 0); };
    SyntaxContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    SyntaxContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    SyntaxContext.prototype.PROTO3_DOUBLE = function () { return this.tryGetToken(Protobuf3Parser.PROTO3_DOUBLE, 0); };
    SyntaxContext.prototype.PROTO3_SINGLE = function () { return this.tryGetToken(Protobuf3Parser.PROTO3_SINGLE, 0); };
    Object.defineProperty(SyntaxContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_syntax; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntax) {
            listener.enterSyntax(this);
        }
    };
    // @Override
    SyntaxContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntax) {
            listener.exitSyntax(this);
        }
    };
    // @Override
    SyntaxContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntax) {
            return visitor.visitSyntax(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxContext = SyntaxContext;
var ImportStatementContext = /** @class */ (function (_super) {
    __extends(ImportStatementContext, _super);
    function ImportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportStatementContext.prototype.IMPORT = function () { return this.getToken(Protobuf3Parser.IMPORT, 0); };
    ImportStatementContext.prototype.StrLit = function () { return this.getToken(Protobuf3Parser.StrLit, 0); };
    ImportStatementContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    ImportStatementContext.prototype.WEAK = function () { return this.tryGetToken(Protobuf3Parser.WEAK, 0); };
    ImportStatementContext.prototype.PUBLIC = function () { return this.tryGetToken(Protobuf3Parser.PUBLIC, 0); };
    Object.defineProperty(ImportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_importStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterImportStatement) {
            listener.enterImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitImportStatement) {
            listener.exitImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitImportStatement) {
            return visitor.visitImportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportStatementContext = ImportStatementContext;
var PackageStatementContext = /** @class */ (function (_super) {
    __extends(PackageStatementContext, _super);
    function PackageStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PackageStatementContext.prototype.PACKAGE = function () { return this.getToken(Protobuf3Parser.PACKAGE, 0); };
    PackageStatementContext.prototype.fullIdent = function () {
        return this.getRuleContext(0, FullIdentContext);
    };
    PackageStatementContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    Object.defineProperty(PackageStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_packageStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PackageStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterPackageStatement) {
            listener.enterPackageStatement(this);
        }
    };
    // @Override
    PackageStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitPackageStatement) {
            listener.exitPackageStatement(this);
        }
    };
    // @Override
    PackageStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitPackageStatement) {
            return visitor.visitPackageStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PackageStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PackageStatementContext = PackageStatementContext;
var OptionContext = /** @class */ (function (_super) {
    __extends(OptionContext, _super);
    function OptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionContext.prototype.OPTION = function () { return this.getToken(Protobuf3Parser.OPTION, 0); };
    OptionContext.prototype.optionName = function () {
        return this.getRuleContext(0, OptionNameContext);
    };
    OptionContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    OptionContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    OptionContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    OptionContext.prototype.optionBody = function () {
        return this.tryGetRuleContext(0, OptionBodyContext);
    };
    Object.defineProperty(OptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_option; },
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
var OptionNameContext = /** @class */ (function (_super) {
    __extends(OptionNameContext, _super);
    function OptionNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionNameContext.prototype.Ident = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.Ident);
        }
        else {
            return this.getToken(Protobuf3Parser.Ident, i);
        }
    };
    OptionNameContext.prototype.LPAREN = function () { return this.tryGetToken(Protobuf3Parser.LPAREN, 0); };
    OptionNameContext.prototype.fullIdent = function () {
        return this.tryGetRuleContext(0, FullIdentContext);
    };
    OptionNameContext.prototype.RPAREN = function () { return this.tryGetToken(Protobuf3Parser.RPAREN, 0); };
    OptionNameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.DOT);
        }
        else {
            return this.getToken(Protobuf3Parser.DOT, i);
        }
    };
    OptionNameContext.prototype.reservedWord = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReservedWordContext);
        }
        else {
            return this.getRuleContext(i, ReservedWordContext);
        }
    };
    Object.defineProperty(OptionNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_optionName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionNameContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionName) {
            listener.enterOptionName(this);
        }
    };
    // @Override
    OptionNameContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionName) {
            listener.exitOptionName(this);
        }
    };
    // @Override
    OptionNameContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionName) {
            return visitor.visitOptionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionNameContext = OptionNameContext;
var OptionBodyContext = /** @class */ (function (_super) {
    __extends(OptionBodyContext, _super);
    function OptionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionBodyContext.prototype.LBRACE = function () { return this.getToken(Protobuf3Parser.LBRACE, 0); };
    OptionBodyContext.prototype.RBRACE = function () { return this.getToken(Protobuf3Parser.RBRACE, 0); };
    OptionBodyContext.prototype.optionBodyVariable = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionBodyVariableContext);
        }
        else {
            return this.getRuleContext(i, OptionBodyVariableContext);
        }
    };
    Object.defineProperty(OptionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_optionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionBody) {
            listener.enterOptionBody(this);
        }
    };
    // @Override
    OptionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionBody) {
            listener.exitOptionBody(this);
        }
    };
    // @Override
    OptionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionBody) {
            return visitor.visitOptionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionBodyContext = OptionBodyContext;
var OptionBodyVariableContext = /** @class */ (function (_super) {
    __extends(OptionBodyVariableContext, _super);
    function OptionBodyVariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionBodyVariableContext.prototype.optionName = function () {
        return this.getRuleContext(0, OptionNameContext);
    };
    OptionBodyVariableContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(OptionBodyVariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_optionBodyVariable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionBodyVariableContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionBodyVariable) {
            listener.enterOptionBodyVariable(this);
        }
    };
    // @Override
    OptionBodyVariableContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionBodyVariable) {
            listener.exitOptionBodyVariable(this);
        }
    };
    // @Override
    OptionBodyVariableContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionBodyVariable) {
            return visitor.visitOptionBodyVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionBodyVariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionBodyVariableContext = OptionBodyVariableContext;
var TopLevelDefContext = /** @class */ (function (_super) {
    __extends(TopLevelDefContext, _super);
    function TopLevelDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopLevelDefContext.prototype.message = function () {
        return this.tryGetRuleContext(0, MessageContext);
    };
    TopLevelDefContext.prototype.enumDefinition = function () {
        return this.tryGetRuleContext(0, EnumDefinitionContext);
    };
    TopLevelDefContext.prototype.service = function () {
        return this.tryGetRuleContext(0, ServiceContext);
    };
    Object.defineProperty(TopLevelDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_topLevelDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopLevelDefContext.prototype.enterRule = function (listener) {
        if (listener.enterTopLevelDef) {
            listener.enterTopLevelDef(this);
        }
    };
    // @Override
    TopLevelDefContext.prototype.exitRule = function (listener) {
        if (listener.exitTopLevelDef) {
            listener.exitTopLevelDef(this);
        }
    };
    // @Override
    TopLevelDefContext.prototype.accept = function (visitor) {
        if (visitor.visitTopLevelDef) {
            return visitor.visitTopLevelDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopLevelDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopLevelDefContext = TopLevelDefContext;
var MessageContext = /** @class */ (function (_super) {
    __extends(MessageContext, _super);
    function MessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageContext.prototype.MESSAGE = function () { return this.getToken(Protobuf3Parser.MESSAGE, 0); };
    MessageContext.prototype.messageName = function () {
        return this.getRuleContext(0, MessageNameContext);
    };
    MessageContext.prototype.messageBody = function () {
        return this.getRuleContext(0, MessageBodyContext);
    };
    Object.defineProperty(MessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageContext.prototype.enterRule = function (listener) {
        if (listener.enterMessage) {
            listener.enterMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.exitRule = function (listener) {
        if (listener.exitMessage) {
            listener.exitMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.accept = function (visitor) {
        if (visitor.visitMessage) {
            return visitor.visitMessage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageContext = MessageContext;
var MessageBodyContext = /** @class */ (function (_super) {
    __extends(MessageBodyContext, _super);
    function MessageBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageBodyContext.prototype.LBRACE = function () { return this.getToken(Protobuf3Parser.LBRACE, 0); };
    MessageBodyContext.prototype.RBRACE = function () { return this.getToken(Protobuf3Parser.RBRACE, 0); };
    MessageBodyContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    MessageBodyContext.prototype.enumDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumDefinitionContext);
        }
        else {
            return this.getRuleContext(i, EnumDefinitionContext);
        }
    };
    MessageBodyContext.prototype.message = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MessageContext);
        }
        else {
            return this.getRuleContext(i, MessageContext);
        }
    };
    MessageBodyContext.prototype.option = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionContext);
        }
        else {
            return this.getRuleContext(i, OptionContext);
        }
    };
    MessageBodyContext.prototype.oneof = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OneofContext);
        }
        else {
            return this.getRuleContext(i, OneofContext);
        }
    };
    MessageBodyContext.prototype.mapField = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MapFieldContext);
        }
        else {
            return this.getRuleContext(i, MapFieldContext);
        }
    };
    MessageBodyContext.prototype.reserved = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReservedContext);
        }
        else {
            return this.getRuleContext(i, ReservedContext);
        }
    };
    MessageBodyContext.prototype.emptyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyStatementContext);
        }
        else {
            return this.getRuleContext(i, EmptyStatementContext);
        }
    };
    Object.defineProperty(MessageBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_messageBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterMessageBody) {
            listener.enterMessageBody(this);
        }
    };
    // @Override
    MessageBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitMessageBody) {
            listener.exitMessageBody(this);
        }
    };
    // @Override
    MessageBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitMessageBody) {
            return visitor.visitMessageBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageBodyContext = MessageBodyContext;
var EnumDefinitionContext = /** @class */ (function (_super) {
    __extends(EnumDefinitionContext, _super);
    function EnumDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumDefinitionContext.prototype.ENUM = function () { return this.getToken(Protobuf3Parser.ENUM, 0); };
    EnumDefinitionContext.prototype.enumName = function () {
        return this.getRuleContext(0, EnumNameContext);
    };
    EnumDefinitionContext.prototype.enumBody = function () {
        return this.getRuleContext(0, EnumBodyContext);
    };
    Object.defineProperty(EnumDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_enumDefinition; },
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
var EnumBodyContext = /** @class */ (function (_super) {
    __extends(EnumBodyContext, _super);
    function EnumBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumBodyContext.prototype.LBRACE = function () { return this.getToken(Protobuf3Parser.LBRACE, 0); };
    EnumBodyContext.prototype.RBRACE = function () { return this.getToken(Protobuf3Parser.RBRACE, 0); };
    EnumBodyContext.prototype.option = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionContext);
        }
        else {
            return this.getRuleContext(i, OptionContext);
        }
    };
    EnumBodyContext.prototype.enumField = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumFieldContext);
        }
        else {
            return this.getRuleContext(i, EnumFieldContext);
        }
    };
    EnumBodyContext.prototype.emptyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyStatementContext);
        }
        else {
            return this.getRuleContext(i, EmptyStatementContext);
        }
    };
    Object.defineProperty(EnumBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_enumBody; },
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
var EnumFieldContext = /** @class */ (function (_super) {
    __extends(EnumFieldContext, _super);
    function EnumFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumFieldContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    EnumFieldContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    EnumFieldContext.prototype.IntLit = function () { return this.getToken(Protobuf3Parser.IntLit, 0); };
    EnumFieldContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    EnumFieldContext.prototype.MINUS = function () { return this.tryGetToken(Protobuf3Parser.MINUS, 0); };
    EnumFieldContext.prototype.LBRACK = function () { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); };
    EnumFieldContext.prototype.enumValueOption = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueOptionContext);
        }
        else {
            return this.getRuleContext(i, EnumValueOptionContext);
        }
    };
    EnumFieldContext.prototype.RBRACK = function () { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); };
    EnumFieldContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.COMMA);
        }
        else {
            return this.getToken(Protobuf3Parser.COMMA, i);
        }
    };
    Object.defineProperty(EnumFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_enumField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumField) {
            listener.enterEnumField(this);
        }
    };
    // @Override
    EnumFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumField) {
            listener.exitEnumField(this);
        }
    };
    // @Override
    EnumFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumField) {
            return visitor.visitEnumField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumFieldContext = EnumFieldContext;
var EnumValueOptionContext = /** @class */ (function (_super) {
    __extends(EnumValueOptionContext, _super);
    function EnumValueOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValueOptionContext.prototype.optionName = function () {
        return this.getRuleContext(0, OptionNameContext);
    };
    EnumValueOptionContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    EnumValueOptionContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(EnumValueOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_enumValueOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValueOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValueOption) {
            listener.enterEnumValueOption(this);
        }
    };
    // @Override
    EnumValueOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValueOption) {
            listener.exitEnumValueOption(this);
        }
    };
    // @Override
    EnumValueOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValueOption) {
            return visitor.visitEnumValueOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValueOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValueOptionContext = EnumValueOptionContext;
var ServiceContext = /** @class */ (function (_super) {
    __extends(ServiceContext, _super);
    function ServiceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ServiceContext.prototype.SERVICE = function () { return this.getToken(Protobuf3Parser.SERVICE, 0); };
    ServiceContext.prototype.serviceName = function () {
        return this.getRuleContext(0, ServiceNameContext);
    };
    ServiceContext.prototype.LBRACE = function () { return this.getToken(Protobuf3Parser.LBRACE, 0); };
    ServiceContext.prototype.RBRACE = function () { return this.getToken(Protobuf3Parser.RBRACE, 0); };
    ServiceContext.prototype.option = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionContext);
        }
        else {
            return this.getRuleContext(i, OptionContext);
        }
    };
    ServiceContext.prototype.rpc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RpcContext);
        }
        else {
            return this.getRuleContext(i, RpcContext);
        }
    };
    ServiceContext.prototype.emptyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyStatementContext);
        }
        else {
            return this.getRuleContext(i, EmptyStatementContext);
        }
    };
    Object.defineProperty(ServiceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_service; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ServiceContext.prototype.enterRule = function (listener) {
        if (listener.enterService) {
            listener.enterService(this);
        }
    };
    // @Override
    ServiceContext.prototype.exitRule = function (listener) {
        if (listener.exitService) {
            listener.exitService(this);
        }
    };
    // @Override
    ServiceContext.prototype.accept = function (visitor) {
        if (visitor.visitService) {
            return visitor.visitService(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ServiceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ServiceContext = ServiceContext;
var RpcContext = /** @class */ (function (_super) {
    __extends(RpcContext, _super);
    function RpcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RpcContext.prototype.RPC = function () { return this.getToken(Protobuf3Parser.RPC, 0); };
    RpcContext.prototype.rpcName = function () {
        return this.getRuleContext(0, RpcNameContext);
    };
    RpcContext.prototype.LPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.LPAREN);
        }
        else {
            return this.getToken(Protobuf3Parser.LPAREN, i);
        }
    };
    RpcContext.prototype.messageType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MessageTypeContext);
        }
        else {
            return this.getRuleContext(i, MessageTypeContext);
        }
    };
    RpcContext.prototype.RPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.RPAREN);
        }
        else {
            return this.getToken(Protobuf3Parser.RPAREN, i);
        }
    };
    RpcContext.prototype.RETURNS = function () { return this.getToken(Protobuf3Parser.RETURNS, 0); };
    RpcContext.prototype.SEMI = function () { return this.tryGetToken(Protobuf3Parser.SEMI, 0); };
    RpcContext.prototype.STREAM = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.STREAM);
        }
        else {
            return this.getToken(Protobuf3Parser.STREAM, i);
        }
    };
    RpcContext.prototype.LBRACE = function () { return this.tryGetToken(Protobuf3Parser.LBRACE, 0); };
    RpcContext.prototype.RBRACE = function () { return this.tryGetToken(Protobuf3Parser.RBRACE, 0); };
    RpcContext.prototype.option = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionContext);
        }
        else {
            return this.getRuleContext(i, OptionContext);
        }
    };
    RpcContext.prototype.emptyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyStatementContext);
        }
        else {
            return this.getRuleContext(i, EmptyStatementContext);
        }
    };
    Object.defineProperty(RpcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_rpc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RpcContext.prototype.enterRule = function (listener) {
        if (listener.enterRpc) {
            listener.enterRpc(this);
        }
    };
    // @Override
    RpcContext.prototype.exitRule = function (listener) {
        if (listener.exitRpc) {
            listener.exitRpc(this);
        }
    };
    // @Override
    RpcContext.prototype.accept = function (visitor) {
        if (visitor.visitRpc) {
            return visitor.visitRpc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RpcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RpcContext = RpcContext;
var ReservedContext = /** @class */ (function (_super) {
    __extends(ReservedContext, _super);
    function ReservedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReservedContext.prototype.RESERVED = function () { return this.getToken(Protobuf3Parser.RESERVED, 0); };
    ReservedContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    ReservedContext.prototype.ranges = function () {
        return this.tryGetRuleContext(0, RangesContext);
    };
    ReservedContext.prototype.fieldNames = function () {
        return this.tryGetRuleContext(0, FieldNamesContext);
    };
    Object.defineProperty(ReservedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_reserved; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReservedContext.prototype.enterRule = function (listener) {
        if (listener.enterReserved) {
            listener.enterReserved(this);
        }
    };
    // @Override
    ReservedContext.prototype.exitRule = function (listener) {
        if (listener.exitReserved) {
            listener.exitReserved(this);
        }
    };
    // @Override
    ReservedContext.prototype.accept = function (visitor) {
        if (visitor.visitReserved) {
            return visitor.visitReserved(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReservedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReservedContext = ReservedContext;
var RangesContext = /** @class */ (function (_super) {
    __extends(RangesContext, _super);
    function RangesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangesContext.prototype.range = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RangeContext);
        }
        else {
            return this.getRuleContext(i, RangeContext);
        }
    };
    RangesContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.COMMA);
        }
        else {
            return this.getToken(Protobuf3Parser.COMMA, i);
        }
    };
    Object.defineProperty(RangesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_ranges; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangesContext.prototype.enterRule = function (listener) {
        if (listener.enterRanges) {
            listener.enterRanges(this);
        }
    };
    // @Override
    RangesContext.prototype.exitRule = function (listener) {
        if (listener.exitRanges) {
            listener.exitRanges(this);
        }
    };
    // @Override
    RangesContext.prototype.accept = function (visitor) {
        if (visitor.visitRanges) {
            return visitor.visitRanges(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangesContext = RangesContext;
var RangeContext = /** @class */ (function (_super) {
    __extends(RangeContext, _super);
    function RangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangeContext.prototype.IntLit = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.IntLit);
        }
        else {
            return this.getToken(Protobuf3Parser.IntLit, i);
        }
    };
    RangeContext.prototype.TO = function () { return this.tryGetToken(Protobuf3Parser.TO, 0); };
    Object.defineProperty(RangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_range; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangeContext.prototype.enterRule = function (listener) {
        if (listener.enterRange) {
            listener.enterRange(this);
        }
    };
    // @Override
    RangeContext.prototype.exitRule = function (listener) {
        if (listener.exitRange) {
            listener.exitRange(this);
        }
    };
    // @Override
    RangeContext.prototype.accept = function (visitor) {
        if (visitor.visitRange) {
            return visitor.visitRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangeContext = RangeContext;
var FieldNamesContext = /** @class */ (function (_super) {
    __extends(FieldNamesContext, _super);
    function FieldNamesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldNamesContext.prototype.StrLit = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.StrLit);
        }
        else {
            return this.getToken(Protobuf3Parser.StrLit, i);
        }
    };
    FieldNamesContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.COMMA);
        }
        else {
            return this.getToken(Protobuf3Parser.COMMA, i);
        }
    };
    Object.defineProperty(FieldNamesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_fieldNames; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldNamesContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldNames) {
            listener.enterFieldNames(this);
        }
    };
    // @Override
    FieldNamesContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldNames) {
            listener.exitFieldNames(this);
        }
    };
    // @Override
    FieldNamesContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldNames) {
            return visitor.visitFieldNames(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldNamesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldNamesContext = FieldNamesContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.DOUBLE = function () { return this.tryGetToken(Protobuf3Parser.DOUBLE, 0); };
    TypeContext.prototype.FLOAT = function () { return this.tryGetToken(Protobuf3Parser.FLOAT, 0); };
    TypeContext.prototype.INT32 = function () { return this.tryGetToken(Protobuf3Parser.INT32, 0); };
    TypeContext.prototype.INT64 = function () { return this.tryGetToken(Protobuf3Parser.INT64, 0); };
    TypeContext.prototype.UINT32 = function () { return this.tryGetToken(Protobuf3Parser.UINT32, 0); };
    TypeContext.prototype.UINT64 = function () { return this.tryGetToken(Protobuf3Parser.UINT64, 0); };
    TypeContext.prototype.SINT32 = function () { return this.tryGetToken(Protobuf3Parser.SINT32, 0); };
    TypeContext.prototype.SINT64 = function () { return this.tryGetToken(Protobuf3Parser.SINT64, 0); };
    TypeContext.prototype.FIXED32 = function () { return this.tryGetToken(Protobuf3Parser.FIXED32, 0); };
    TypeContext.prototype.FIXED64 = function () { return this.tryGetToken(Protobuf3Parser.FIXED64, 0); };
    TypeContext.prototype.SFIXED32 = function () { return this.tryGetToken(Protobuf3Parser.SFIXED32, 0); };
    TypeContext.prototype.SFIXED64 = function () { return this.tryGetToken(Protobuf3Parser.SFIXED64, 0); };
    TypeContext.prototype.BOOL = function () { return this.tryGetToken(Protobuf3Parser.BOOL, 0); };
    TypeContext.prototype.STRING = function () { return this.tryGetToken(Protobuf3Parser.STRING, 0); };
    TypeContext.prototype.BYTES = function () { return this.tryGetToken(Protobuf3Parser.BYTES, 0); };
    TypeContext.prototype.messageOrEnumType = function () {
        return this.tryGetRuleContext(0, MessageOrEnumTypeContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_type; },
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
var FieldNumberContext = /** @class */ (function (_super) {
    __extends(FieldNumberContext, _super);
    function FieldNumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldNumberContext.prototype.IntLit = function () { return this.getToken(Protobuf3Parser.IntLit, 0); };
    Object.defineProperty(FieldNumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_fieldNumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldNumberContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldNumber) {
            listener.enterFieldNumber(this);
        }
    };
    // @Override
    FieldNumberContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldNumber) {
            listener.exitFieldNumber(this);
        }
    };
    // @Override
    FieldNumberContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldNumber) {
            return visitor.visitFieldNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldNumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldNumberContext = FieldNumberContext;
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    FieldContext.prototype.fieldName = function () {
        return this.getRuleContext(0, FieldNameContext);
    };
    FieldContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    FieldContext.prototype.fieldNumber = function () {
        return this.getRuleContext(0, FieldNumberContext);
    };
    FieldContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    FieldContext.prototype.REPEATED = function () { return this.tryGetToken(Protobuf3Parser.REPEATED, 0); };
    FieldContext.prototype.LBRACK = function () { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); };
    FieldContext.prototype.fieldOptions = function () {
        return this.tryGetRuleContext(0, FieldOptionsContext);
    };
    FieldContext.prototype.RBRACK = function () { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); };
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldContext.prototype.enterRule = function (listener) {
        if (listener.enterField) {
            listener.enterField(this);
        }
    };
    // @Override
    FieldContext.prototype.exitRule = function (listener) {
        if (listener.exitField) {
            listener.exitField(this);
        }
    };
    // @Override
    FieldContext.prototype.accept = function (visitor) {
        if (visitor.visitField) {
            return visitor.visitField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldContext = FieldContext;
var FieldOptionsContext = /** @class */ (function (_super) {
    __extends(FieldOptionsContext, _super);
    function FieldOptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldOptionsContext.prototype.fieldOption = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldOptionContext);
        }
        else {
            return this.getRuleContext(i, FieldOptionContext);
        }
    };
    FieldOptionsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.COMMA);
        }
        else {
            return this.getToken(Protobuf3Parser.COMMA, i);
        }
    };
    Object.defineProperty(FieldOptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_fieldOptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldOptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldOptions) {
            listener.enterFieldOptions(this);
        }
    };
    // @Override
    FieldOptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldOptions) {
            listener.exitFieldOptions(this);
        }
    };
    // @Override
    FieldOptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldOptions) {
            return visitor.visitFieldOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldOptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldOptionsContext = FieldOptionsContext;
var FieldOptionContext = /** @class */ (function (_super) {
    __extends(FieldOptionContext, _super);
    function FieldOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldOptionContext.prototype.optionName = function () {
        return this.getRuleContext(0, OptionNameContext);
    };
    FieldOptionContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    FieldOptionContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(FieldOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_fieldOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldOption) {
            listener.enterFieldOption(this);
        }
    };
    // @Override
    FieldOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldOption) {
            listener.exitFieldOption(this);
        }
    };
    // @Override
    FieldOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldOption) {
            return visitor.visitFieldOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldOptionContext = FieldOptionContext;
var OneofContext = /** @class */ (function (_super) {
    __extends(OneofContext, _super);
    function OneofContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OneofContext.prototype.ONEOF = function () { return this.getToken(Protobuf3Parser.ONEOF, 0); };
    OneofContext.prototype.oneofName = function () {
        return this.getRuleContext(0, OneofNameContext);
    };
    OneofContext.prototype.LBRACE = function () { return this.getToken(Protobuf3Parser.LBRACE, 0); };
    OneofContext.prototype.RBRACE = function () { return this.getToken(Protobuf3Parser.RBRACE, 0); };
    OneofContext.prototype.oneofField = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OneofFieldContext);
        }
        else {
            return this.getRuleContext(i, OneofFieldContext);
        }
    };
    OneofContext.prototype.emptyStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyStatementContext);
        }
        else {
            return this.getRuleContext(i, EmptyStatementContext);
        }
    };
    Object.defineProperty(OneofContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_oneof; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OneofContext.prototype.enterRule = function (listener) {
        if (listener.enterOneof) {
            listener.enterOneof(this);
        }
    };
    // @Override
    OneofContext.prototype.exitRule = function (listener) {
        if (listener.exitOneof) {
            listener.exitOneof(this);
        }
    };
    // @Override
    OneofContext.prototype.accept = function (visitor) {
        if (visitor.visitOneof) {
            return visitor.visitOneof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OneofContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OneofContext = OneofContext;
var OneofFieldContext = /** @class */ (function (_super) {
    __extends(OneofFieldContext, _super);
    function OneofFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OneofFieldContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    OneofFieldContext.prototype.fieldName = function () {
        return this.getRuleContext(0, FieldNameContext);
    };
    OneofFieldContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    OneofFieldContext.prototype.fieldNumber = function () {
        return this.getRuleContext(0, FieldNumberContext);
    };
    OneofFieldContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    OneofFieldContext.prototype.LBRACK = function () { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); };
    OneofFieldContext.prototype.fieldOptions = function () {
        return this.tryGetRuleContext(0, FieldOptionsContext);
    };
    OneofFieldContext.prototype.RBRACK = function () { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); };
    Object.defineProperty(OneofFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_oneofField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OneofFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterOneofField) {
            listener.enterOneofField(this);
        }
    };
    // @Override
    OneofFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitOneofField) {
            listener.exitOneofField(this);
        }
    };
    // @Override
    OneofFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitOneofField) {
            return visitor.visitOneofField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OneofFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OneofFieldContext = OneofFieldContext;
var MapFieldContext = /** @class */ (function (_super) {
    __extends(MapFieldContext, _super);
    function MapFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapFieldContext.prototype.MAP = function () { return this.getToken(Protobuf3Parser.MAP, 0); };
    MapFieldContext.prototype.LCHEVR = function () { return this.getToken(Protobuf3Parser.LCHEVR, 0); };
    MapFieldContext.prototype.keyType = function () {
        return this.getRuleContext(0, KeyTypeContext);
    };
    MapFieldContext.prototype.COMMA = function () { return this.getToken(Protobuf3Parser.COMMA, 0); };
    MapFieldContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    MapFieldContext.prototype.RCHEVR = function () { return this.getToken(Protobuf3Parser.RCHEVR, 0); };
    MapFieldContext.prototype.mapName = function () {
        return this.getRuleContext(0, MapNameContext);
    };
    MapFieldContext.prototype.ASSIGN = function () { return this.getToken(Protobuf3Parser.ASSIGN, 0); };
    MapFieldContext.prototype.fieldNumber = function () {
        return this.getRuleContext(0, FieldNumberContext);
    };
    MapFieldContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    MapFieldContext.prototype.LBRACK = function () { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); };
    MapFieldContext.prototype.fieldOptions = function () {
        return this.tryGetRuleContext(0, FieldOptionsContext);
    };
    MapFieldContext.prototype.RBRACK = function () { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); };
    Object.defineProperty(MapFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_mapField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterMapField) {
            listener.enterMapField(this);
        }
    };
    // @Override
    MapFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitMapField) {
            listener.exitMapField(this);
        }
    };
    // @Override
    MapFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitMapField) {
            return visitor.visitMapField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapFieldContext = MapFieldContext;
var KeyTypeContext = /** @class */ (function (_super) {
    __extends(KeyTypeContext, _super);
    function KeyTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyTypeContext.prototype.INT32 = function () { return this.tryGetToken(Protobuf3Parser.INT32, 0); };
    KeyTypeContext.prototype.INT64 = function () { return this.tryGetToken(Protobuf3Parser.INT64, 0); };
    KeyTypeContext.prototype.UINT32 = function () { return this.tryGetToken(Protobuf3Parser.UINT32, 0); };
    KeyTypeContext.prototype.UINT64 = function () { return this.tryGetToken(Protobuf3Parser.UINT64, 0); };
    KeyTypeContext.prototype.SINT32 = function () { return this.tryGetToken(Protobuf3Parser.SINT32, 0); };
    KeyTypeContext.prototype.SINT64 = function () { return this.tryGetToken(Protobuf3Parser.SINT64, 0); };
    KeyTypeContext.prototype.FIXED32 = function () { return this.tryGetToken(Protobuf3Parser.FIXED32, 0); };
    KeyTypeContext.prototype.FIXED64 = function () { return this.tryGetToken(Protobuf3Parser.FIXED64, 0); };
    KeyTypeContext.prototype.SFIXED32 = function () { return this.tryGetToken(Protobuf3Parser.SFIXED32, 0); };
    KeyTypeContext.prototype.SFIXED64 = function () { return this.tryGetToken(Protobuf3Parser.SFIXED64, 0); };
    KeyTypeContext.prototype.BOOL = function () { return this.tryGetToken(Protobuf3Parser.BOOL, 0); };
    KeyTypeContext.prototype.STRING = function () { return this.tryGetToken(Protobuf3Parser.STRING, 0); };
    Object.defineProperty(KeyTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_keyType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyType) {
            listener.enterKeyType(this);
        }
    };
    // @Override
    KeyTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyType) {
            listener.exitKeyType(this);
        }
    };
    // @Override
    KeyTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyType) {
            return visitor.visitKeyType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyTypeContext = KeyTypeContext;
var ReservedWordContext = /** @class */ (function (_super) {
    __extends(ReservedWordContext, _super);
    function ReservedWordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReservedWordContext.prototype.MESSAGE = function () { return this.tryGetToken(Protobuf3Parser.MESSAGE, 0); };
    ReservedWordContext.prototype.OPTION = function () { return this.tryGetToken(Protobuf3Parser.OPTION, 0); };
    ReservedWordContext.prototype.PACKAGE = function () { return this.tryGetToken(Protobuf3Parser.PACKAGE, 0); };
    ReservedWordContext.prototype.SERVICE = function () { return this.tryGetToken(Protobuf3Parser.SERVICE, 0); };
    ReservedWordContext.prototype.STREAM = function () { return this.tryGetToken(Protobuf3Parser.STREAM, 0); };
    ReservedWordContext.prototype.STRING = function () { return this.tryGetToken(Protobuf3Parser.STRING, 0); };
    ReservedWordContext.prototype.SYNTAX = function () { return this.tryGetToken(Protobuf3Parser.SYNTAX, 0); };
    ReservedWordContext.prototype.WEAK = function () { return this.tryGetToken(Protobuf3Parser.WEAK, 0); };
    ReservedWordContext.prototype.RPC = function () { return this.tryGetToken(Protobuf3Parser.RPC, 0); };
    Object.defineProperty(ReservedWordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_reservedWord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReservedWordContext.prototype.enterRule = function (listener) {
        if (listener.enterReservedWord) {
            listener.enterReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.exitRule = function (listener) {
        if (listener.exitReservedWord) {
            listener.exitReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.accept = function (visitor) {
        if (visitor.visitReservedWord) {
            return visitor.visitReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReservedWordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReservedWordContext = ReservedWordContext;
var FullIdentContext = /** @class */ (function (_super) {
    __extends(FullIdentContext, _super);
    function FullIdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FullIdentContext.prototype.Ident = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.Ident);
        }
        else {
            return this.getToken(Protobuf3Parser.Ident, i);
        }
    };
    FullIdentContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.DOT);
        }
        else {
            return this.getToken(Protobuf3Parser.DOT, i);
        }
    };
    Object.defineProperty(FullIdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_fullIdent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FullIdentContext.prototype.enterRule = function (listener) {
        if (listener.enterFullIdent) {
            listener.enterFullIdent(this);
        }
    };
    // @Override
    FullIdentContext.prototype.exitRule = function (listener) {
        if (listener.exitFullIdent) {
            listener.exitFullIdent(this);
        }
    };
    // @Override
    FullIdentContext.prototype.accept = function (visitor) {
        if (visitor.visitFullIdent) {
            return visitor.visitFullIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FullIdentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FullIdentContext = FullIdentContext;
var MessageNameContext = /** @class */ (function (_super) {
    __extends(MessageNameContext, _super);
    function MessageNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageNameContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    Object.defineProperty(MessageNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_messageName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageNameContext.prototype.enterRule = function (listener) {
        if (listener.enterMessageName) {
            listener.enterMessageName(this);
        }
    };
    // @Override
    MessageNameContext.prototype.exitRule = function (listener) {
        if (listener.exitMessageName) {
            listener.exitMessageName(this);
        }
    };
    // @Override
    MessageNameContext.prototype.accept = function (visitor) {
        if (visitor.visitMessageName) {
            return visitor.visitMessageName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageNameContext = MessageNameContext;
var EnumNameContext = /** @class */ (function (_super) {
    __extends(EnumNameContext, _super);
    function EnumNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumNameContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    Object.defineProperty(EnumNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_enumName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumNameContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumName) {
            listener.enterEnumName(this);
        }
    };
    // @Override
    EnumNameContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumName) {
            listener.exitEnumName(this);
        }
    };
    // @Override
    EnumNameContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumName) {
            return visitor.visitEnumName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumNameContext = EnumNameContext;
var MessageOrEnumNameContext = /** @class */ (function (_super) {
    __extends(MessageOrEnumNameContext, _super);
    function MessageOrEnumNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageOrEnumNameContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    Object.defineProperty(MessageOrEnumNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_messageOrEnumName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageOrEnumNameContext.prototype.enterRule = function (listener) {
        if (listener.enterMessageOrEnumName) {
            listener.enterMessageOrEnumName(this);
        }
    };
    // @Override
    MessageOrEnumNameContext.prototype.exitRule = function (listener) {
        if (listener.exitMessageOrEnumName) {
            listener.exitMessageOrEnumName(this);
        }
    };
    // @Override
    MessageOrEnumNameContext.prototype.accept = function (visitor) {
        if (visitor.visitMessageOrEnumName) {
            return visitor.visitMessageOrEnumName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageOrEnumNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageOrEnumNameContext = MessageOrEnumNameContext;
var FieldNameContext = /** @class */ (function (_super) {
    __extends(FieldNameContext, _super);
    function FieldNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldNameContext.prototype.Ident = function () { return this.tryGetToken(Protobuf3Parser.Ident, 0); };
    FieldNameContext.prototype.reservedWord = function () {
        return this.tryGetRuleContext(0, ReservedWordContext);
    };
    Object.defineProperty(FieldNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_fieldName; },
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
var OneofNameContext = /** @class */ (function (_super) {
    __extends(OneofNameContext, _super);
    function OneofNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OneofNameContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    Object.defineProperty(OneofNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_oneofName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OneofNameContext.prototype.enterRule = function (listener) {
        if (listener.enterOneofName) {
            listener.enterOneofName(this);
        }
    };
    // @Override
    OneofNameContext.prototype.exitRule = function (listener) {
        if (listener.exitOneofName) {
            listener.exitOneofName(this);
        }
    };
    // @Override
    OneofNameContext.prototype.accept = function (visitor) {
        if (visitor.visitOneofName) {
            return visitor.visitOneofName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OneofNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OneofNameContext = OneofNameContext;
var MapNameContext = /** @class */ (function (_super) {
    __extends(MapNameContext, _super);
    function MapNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapNameContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    Object.defineProperty(MapNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_mapName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapNameContext.prototype.enterRule = function (listener) {
        if (listener.enterMapName) {
            listener.enterMapName(this);
        }
    };
    // @Override
    MapNameContext.prototype.exitRule = function (listener) {
        if (listener.exitMapName) {
            listener.exitMapName(this);
        }
    };
    // @Override
    MapNameContext.prototype.accept = function (visitor) {
        if (visitor.visitMapName) {
            return visitor.visitMapName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapNameContext = MapNameContext;
var ServiceNameContext = /** @class */ (function (_super) {
    __extends(ServiceNameContext, _super);
    function ServiceNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ServiceNameContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    Object.defineProperty(ServiceNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_serviceName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ServiceNameContext.prototype.enterRule = function (listener) {
        if (listener.enterServiceName) {
            listener.enterServiceName(this);
        }
    };
    // @Override
    ServiceNameContext.prototype.exitRule = function (listener) {
        if (listener.exitServiceName) {
            listener.exitServiceName(this);
        }
    };
    // @Override
    ServiceNameContext.prototype.accept = function (visitor) {
        if (visitor.visitServiceName) {
            return visitor.visitServiceName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ServiceNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ServiceNameContext = ServiceNameContext;
var RpcNameContext = /** @class */ (function (_super) {
    __extends(RpcNameContext, _super);
    function RpcNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RpcNameContext.prototype.Ident = function () { return this.getToken(Protobuf3Parser.Ident, 0); };
    Object.defineProperty(RpcNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_rpcName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RpcNameContext.prototype.enterRule = function (listener) {
        if (listener.enterRpcName) {
            listener.enterRpcName(this);
        }
    };
    // @Override
    RpcNameContext.prototype.exitRule = function (listener) {
        if (listener.exitRpcName) {
            listener.exitRpcName(this);
        }
    };
    // @Override
    RpcNameContext.prototype.accept = function (visitor) {
        if (visitor.visitRpcName) {
            return visitor.visitRpcName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RpcNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RpcNameContext = RpcNameContext;
var MessageTypeContext = /** @class */ (function (_super) {
    __extends(MessageTypeContext, _super);
    function MessageTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageTypeContext.prototype.messageName = function () {
        return this.getRuleContext(0, MessageNameContext);
    };
    MessageTypeContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.DOT);
        }
        else {
            return this.getToken(Protobuf3Parser.DOT, i);
        }
    };
    MessageTypeContext.prototype.Ident = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.Ident);
        }
        else {
            return this.getToken(Protobuf3Parser.Ident, i);
        }
    };
    Object.defineProperty(MessageTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_messageType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterMessageType) {
            listener.enterMessageType(this);
        }
    };
    // @Override
    MessageTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitMessageType) {
            listener.exitMessageType(this);
        }
    };
    // @Override
    MessageTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitMessageType) {
            return visitor.visitMessageType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageTypeContext = MessageTypeContext;
var MessageOrEnumTypeContext = /** @class */ (function (_super) {
    __extends(MessageOrEnumTypeContext, _super);
    function MessageOrEnumTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageOrEnumTypeContext.prototype.messageOrEnumName = function () {
        return this.getRuleContext(0, MessageOrEnumNameContext);
    };
    MessageOrEnumTypeContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.DOT);
        }
        else {
            return this.getToken(Protobuf3Parser.DOT, i);
        }
    };
    MessageOrEnumTypeContext.prototype.Ident = function (i) {
        if (i === undefined) {
            return this.getTokens(Protobuf3Parser.Ident);
        }
        else {
            return this.getToken(Protobuf3Parser.Ident, i);
        }
    };
    MessageOrEnumTypeContext.prototype.reservedWord = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReservedWordContext);
        }
        else {
            return this.getRuleContext(i, ReservedWordContext);
        }
    };
    Object.defineProperty(MessageOrEnumTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_messageOrEnumType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageOrEnumTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterMessageOrEnumType) {
            listener.enterMessageOrEnumType(this);
        }
    };
    // @Override
    MessageOrEnumTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitMessageOrEnumType) {
            listener.exitMessageOrEnumType(this);
        }
    };
    // @Override
    MessageOrEnumTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitMessageOrEnumType) {
            return visitor.visitMessageOrEnumType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageOrEnumTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageOrEnumTypeContext = MessageOrEnumTypeContext;
var EmptyStatementContext = /** @class */ (function (_super) {
    __extends(EmptyStatementContext, _super);
    function EmptyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptyStatementContext.prototype.SEMI = function () { return this.getToken(Protobuf3Parser.SEMI, 0); };
    Object.defineProperty(EmptyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_emptyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyStatementContext = EmptyStatementContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.fullIdent = function () {
        return this.tryGetRuleContext(0, FullIdentContext);
    };
    ConstantContext.prototype.IntLit = function () { return this.tryGetToken(Protobuf3Parser.IntLit, 0); };
    ConstantContext.prototype.MINUS = function () { return this.tryGetToken(Protobuf3Parser.MINUS, 0); };
    ConstantContext.prototype.PLUS = function () { return this.tryGetToken(Protobuf3Parser.PLUS, 0); };
    ConstantContext.prototype.FloatLit = function () { return this.tryGetToken(Protobuf3Parser.FloatLit, 0); };
    ConstantContext.prototype.StrLit = function () { return this.tryGetToken(Protobuf3Parser.StrLit, 0); };
    ConstantContext.prototype.BoolLit = function () { return this.tryGetToken(Protobuf3Parser.BoolLit, 0); };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Protobuf3Parser.RULE_constant; },
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
