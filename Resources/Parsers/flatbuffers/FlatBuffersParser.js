"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/flatbuffers/FlatBuffers.g4 by ANTLR 4.7.3-SNAPSHOT
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
var FlatBuffersParser = /** @class */ (function (_super) {
    __extends(FlatBuffersParser, _super);
    function FlatBuffersParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(FlatBuffersParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(FlatBuffersParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return FlatBuffersParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatBuffersParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "FlatBuffers.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatBuffersParser.prototype, "ruleNames", {
        // @Override
        get: function () { return FlatBuffersParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatBuffersParser.prototype, "serializedATN", {
        // @Override
        get: function () { return FlatBuffersParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    FlatBuffersParser.prototype.schema = function () {
        var _localctx = new SchemaContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, FlatBuffersParser.RULE_schema);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlatBuffersParser.T__0) {
                    {
                        {
                            this.state = 54;
                            this.include();
                        }
                    }
                    this.state = 59;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 71;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlatBuffersParser.T__2) | (1 << FlatBuffersParser.T__4) | (1 << FlatBuffersParser.T__5) | (1 << FlatBuffersParser.T__6) | (1 << FlatBuffersParser.T__7) | (1 << FlatBuffersParser.T__9) | (1 << FlatBuffersParser.T__11) | (1 << FlatBuffersParser.T__12) | (1 << FlatBuffersParser.T__14) | (1 << FlatBuffersParser.T__20) | (1 << FlatBuffersParser.T__21))) !== 0)) {
                    {
                        this.state = 69;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case FlatBuffersParser.T__2:
                                {
                                    this.state = 60;
                                    this.namespace_decl();
                                }
                                break;
                            case FlatBuffersParser.T__5:
                            case FlatBuffersParser.T__6:
                                {
                                    this.state = 61;
                                    this.type_decl();
                                }
                                break;
                            case FlatBuffersParser.T__9:
                            case FlatBuffersParser.T__11:
                                {
                                    this.state = 62;
                                    this.enum_decl();
                                }
                                break;
                            case FlatBuffersParser.T__12:
                                {
                                    this.state = 63;
                                    this.root_decl();
                                }
                                break;
                            case FlatBuffersParser.T__20:
                                {
                                    this.state = 64;
                                    this.file_extension_decl();
                                }
                                break;
                            case FlatBuffersParser.T__21:
                                {
                                    this.state = 65;
                                    this.file_identifier_decl();
                                }
                                break;
                            case FlatBuffersParser.T__4:
                                {
                                    this.state = 66;
                                    this.attribute_decl();
                                }
                                break;
                            case FlatBuffersParser.T__14:
                                {
                                    this.state = 67;
                                    this.rpc_decl();
                                }
                                break;
                            case FlatBuffersParser.T__7:
                                {
                                    this.state = 68;
                                    this.object();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 73;
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
    FlatBuffersParser.prototype.include = function () {
        var _localctx = new IncludeContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, FlatBuffersParser.RULE_include);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.match(FlatBuffersParser.T__0);
                this.state = 75;
                this.match(FlatBuffersParser.STRING_CONSTANT);
                this.state = 76;
                this.match(FlatBuffersParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.namespace_decl = function () {
        var _localctx = new Namespace_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FlatBuffersParser.RULE_namespace_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this.match(FlatBuffersParser.T__2);
                this.state = 79;
                this.match(FlatBuffersParser.IDENT);
                this.state = 84;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlatBuffersParser.T__3) {
                    {
                        {
                            this.state = 80;
                            this.match(FlatBuffersParser.T__3);
                            this.state = 81;
                            this.match(FlatBuffersParser.IDENT);
                        }
                    }
                    this.state = 86;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 87;
                this.match(FlatBuffersParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.attribute_decl = function () {
        var _localctx = new Attribute_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, FlatBuffersParser.RULE_attribute_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this.match(FlatBuffersParser.T__4);
                this.state = 90;
                this.match(FlatBuffersParser.STRING_CONSTANT);
                this.state = 91;
                this.match(FlatBuffersParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.type_decl = function () {
        var _localctx = new Type_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FlatBuffersParser.RULE_type_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                _la = this._input.LA(1);
                if (!(_la === FlatBuffersParser.T__5 || _la === FlatBuffersParser.T__6)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 94;
                this.match(FlatBuffersParser.IDENT);
                this.state = 95;
                this.metadata();
                this.state = 96;
                this.match(FlatBuffersParser.T__7);
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlatBuffersParser.IDENT) {
                    {
                        {
                            this.state = 97;
                            this.field_decl();
                        }
                    }
                    this.state = 102;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 103;
                this.match(FlatBuffersParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.enum_decl = function () {
        var _localctx = new Enum_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, FlatBuffersParser.RULE_enum_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FlatBuffersParser.T__9:
                        {
                            this.state = 105;
                            this.match(FlatBuffersParser.T__9);
                            this.state = 106;
                            this.match(FlatBuffersParser.IDENT);
                            this.state = 109;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === FlatBuffersParser.T__10) {
                                {
                                    this.state = 107;
                                    this.match(FlatBuffersParser.T__10);
                                    this.state = 108;
                                    this.type();
                                }
                            }
                        }
                        break;
                    case FlatBuffersParser.T__11:
                        {
                            this.state = 111;
                            this.match(FlatBuffersParser.T__11);
                            this.state = 112;
                            this.match(FlatBuffersParser.IDENT);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 115;
                this.metadata();
                this.state = 116;
                this.match(FlatBuffersParser.T__7);
                this.state = 117;
                this.commasep_enumval_decl();
                this.state = 118;
                this.match(FlatBuffersParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.root_decl = function () {
        var _localctx = new Root_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, FlatBuffersParser.RULE_root_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this.match(FlatBuffersParser.T__12);
                this.state = 121;
                this.match(FlatBuffersParser.IDENT);
                this.state = 122;
                this.match(FlatBuffersParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.field_decl = function () {
        var _localctx = new Field_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FlatBuffersParser.RULE_field_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                this.match(FlatBuffersParser.IDENT);
                this.state = 125;
                this.match(FlatBuffersParser.T__10);
                this.state = 126;
                this.type();
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlatBuffersParser.T__13) {
                    {
                        this.state = 127;
                        this.match(FlatBuffersParser.T__13);
                        this.state = 128;
                        this.scalar();
                    }
                }
                this.state = 131;
                this.metadata();
                this.state = 132;
                this.match(FlatBuffersParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.rpc_decl = function () {
        var _localctx = new Rpc_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FlatBuffersParser.RULE_rpc_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this.match(FlatBuffersParser.T__14);
                this.state = 135;
                this.match(FlatBuffersParser.IDENT);
                this.state = 136;
                this.match(FlatBuffersParser.T__7);
                this.state = 138;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 137;
                            this.rpc_method();
                        }
                    }
                    this.state = 140;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === FlatBuffersParser.IDENT);
                this.state = 142;
                this.match(FlatBuffersParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.rpc_method = function () {
        var _localctx = new Rpc_methodContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, FlatBuffersParser.RULE_rpc_method);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this.match(FlatBuffersParser.IDENT);
                this.state = 145;
                this.match(FlatBuffersParser.T__15);
                this.state = 146;
                this.match(FlatBuffersParser.IDENT);
                this.state = 147;
                this.match(FlatBuffersParser.T__16);
                this.state = 148;
                this.match(FlatBuffersParser.T__10);
                this.state = 149;
                this.match(FlatBuffersParser.IDENT);
                this.state = 150;
                this.metadata();
                this.state = 151;
                this.match(FlatBuffersParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FlatBuffersParser.RULE_type);
        try {
            this.state = 159;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FlatBuffersParser.T__17:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 153;
                        this.match(FlatBuffersParser.T__17);
                        this.state = 154;
                        this.type();
                        this.state = 155;
                        this.match(FlatBuffersParser.T__18);
                    }
                    break;
                case FlatBuffersParser.BASE_TYPE_NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 157;
                        this.match(FlatBuffersParser.BASE_TYPE_NAME);
                    }
                    break;
                case FlatBuffersParser.IDENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 158;
                        this.ns_ident();
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
    FlatBuffersParser.prototype.enumval_decl = function () {
        var _localctx = new Enumval_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FlatBuffersParser.RULE_enumval_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.ns_ident();
                this.state = 164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlatBuffersParser.T__13) {
                    {
                        this.state = 162;
                        this.match(FlatBuffersParser.T__13);
                        this.state = 163;
                        this.integer_const();
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
    FlatBuffersParser.prototype.commasep_enumval_decl = function () {
        var _localctx = new Commasep_enumval_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, FlatBuffersParser.RULE_commasep_enumval_decl);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                this.enumval_decl();
                this.state = 171;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 167;
                                this.match(FlatBuffersParser.T__19);
                                this.state = 168;
                                this.enumval_decl();
                            }
                        }
                    }
                    this.state = 173;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                }
                this.state = 175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlatBuffersParser.T__19) {
                    {
                        this.state = 174;
                        this.match(FlatBuffersParser.T__19);
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
    FlatBuffersParser.prototype.ident_with_opt_single_value = function () {
        var _localctx = new Ident_with_opt_single_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, FlatBuffersParser.RULE_ident_with_opt_single_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 177;
                this.match(FlatBuffersParser.IDENT);
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlatBuffersParser.T__10) {
                    {
                        this.state = 178;
                        this.match(FlatBuffersParser.T__10);
                        this.state = 179;
                        this.single_value();
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
    FlatBuffersParser.prototype.commasep_ident_with_opt_single_value = function () {
        var _localctx = new Commasep_ident_with_opt_single_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, FlatBuffersParser.RULE_commasep_ident_with_opt_single_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this.ident_with_opt_single_value();
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlatBuffersParser.T__19) {
                    {
                        {
                            this.state = 183;
                            this.match(FlatBuffersParser.T__19);
                            this.state = 184;
                            this.ident_with_opt_single_value();
                        }
                    }
                    this.state = 189;
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
    FlatBuffersParser.prototype.metadata = function () {
        var _localctx = new MetadataContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, FlatBuffersParser.RULE_metadata);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlatBuffersParser.T__15) {
                    {
                        this.state = 190;
                        this.match(FlatBuffersParser.T__15);
                        this.state = 191;
                        this.commasep_ident_with_opt_single_value();
                        this.state = 192;
                        this.match(FlatBuffersParser.T__16);
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
    FlatBuffersParser.prototype.scalar = function () {
        var _localctx = new ScalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, FlatBuffersParser.RULE_scalar);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlatBuffersParser.IDENT) | (1 << FlatBuffersParser.HEX_INTEGER_CONSTANT) | (1 << FlatBuffersParser.INTEGER_CONSTANT) | (1 << FlatBuffersParser.FLOAT_CONSTANT))) !== 0))) {
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
    FlatBuffersParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, FlatBuffersParser.RULE_object);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(FlatBuffersParser.T__7);
                this.state = 199;
                this.commasep_ident_with_value();
                this.state = 200;
                this.match(FlatBuffersParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.ident_with_value = function () {
        var _localctx = new Ident_with_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, FlatBuffersParser.RULE_ident_with_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(FlatBuffersParser.IDENT);
                this.state = 203;
                this.match(FlatBuffersParser.T__10);
                this.state = 204;
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
    FlatBuffersParser.prototype.commasep_ident_with_value = function () {
        var _localctx = new Commasep_ident_with_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, FlatBuffersParser.RULE_commasep_ident_with_value);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.ident_with_value();
                this.state = 211;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 207;
                                this.match(FlatBuffersParser.T__19);
                                this.state = 208;
                                this.ident_with_value();
                            }
                        }
                    }
                    this.state = 213;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                }
                this.state = 215;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlatBuffersParser.T__19) {
                    {
                        this.state = 214;
                        this.match(FlatBuffersParser.T__19);
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
    FlatBuffersParser.prototype.single_value = function () {
        var _localctx = new Single_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, FlatBuffersParser.RULE_single_value);
        try {
            this.state = 219;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FlatBuffersParser.IDENT:
                case FlatBuffersParser.HEX_INTEGER_CONSTANT:
                case FlatBuffersParser.INTEGER_CONSTANT:
                case FlatBuffersParser.FLOAT_CONSTANT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 217;
                        this.scalar();
                    }
                    break;
                case FlatBuffersParser.STRING_CONSTANT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 218;
                        this.match(FlatBuffersParser.STRING_CONSTANT);
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
    FlatBuffersParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, FlatBuffersParser.RULE_value);
        try {
            this.state = 227;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FlatBuffersParser.STRING_CONSTANT:
                case FlatBuffersParser.IDENT:
                case FlatBuffersParser.HEX_INTEGER_CONSTANT:
                case FlatBuffersParser.INTEGER_CONSTANT:
                case FlatBuffersParser.FLOAT_CONSTANT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 221;
                        this.single_value();
                    }
                    break;
                case FlatBuffersParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 222;
                        this.object();
                    }
                    break;
                case FlatBuffersParser.T__17:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 223;
                        this.match(FlatBuffersParser.T__17);
                        this.state = 224;
                        this.commasep_value();
                        this.state = 225;
                        this.match(FlatBuffersParser.T__18);
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
    FlatBuffersParser.prototype.commasep_value = function () {
        var _localctx = new Commasep_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, FlatBuffersParser.RULE_commasep_value);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.value();
                this.state = 234;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 230;
                                this.match(FlatBuffersParser.T__19);
                                this.state = 231;
                                this.value();
                            }
                        }
                    }
                    this.state = 236;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlatBuffersParser.T__19) {
                    {
                        this.state = 237;
                        this.match(FlatBuffersParser.T__19);
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
    FlatBuffersParser.prototype.file_extension_decl = function () {
        var _localctx = new File_extension_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, FlatBuffersParser.RULE_file_extension_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(FlatBuffersParser.T__20);
                this.state = 241;
                this.match(FlatBuffersParser.STRING_CONSTANT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.file_identifier_decl = function () {
        var _localctx = new File_identifier_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, FlatBuffersParser.RULE_file_identifier_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                this.match(FlatBuffersParser.T__21);
                this.state = 244;
                this.match(FlatBuffersParser.STRING_CONSTANT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FlatBuffersParser.prototype.ns_ident = function () {
        var _localctx = new Ns_identContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, FlatBuffersParser.RULE_ns_ident);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.match(FlatBuffersParser.IDENT);
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlatBuffersParser.T__3) {
                    {
                        {
                            this.state = 247;
                            this.match(FlatBuffersParser.T__3);
                            this.state = 248;
                            this.match(FlatBuffersParser.IDENT);
                        }
                    }
                    this.state = 253;
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
    FlatBuffersParser.prototype.integer_const = function () {
        var _localctx = new Integer_constContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, FlatBuffersParser.RULE_integer_const);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                _la = this._input.LA(1);
                if (!(_la === FlatBuffersParser.HEX_INTEGER_CONSTANT || _la === FlatBuffersParser.INTEGER_CONSTANT)) {
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
    Object.defineProperty(FlatBuffersParser, "_ATN", {
        get: function () {
            if (!FlatBuffersParser.__ATN) {
                FlatBuffersParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(FlatBuffersParser._serializedATN));
            }
            return FlatBuffersParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    FlatBuffersParser.T__0 = 1;
    FlatBuffersParser.T__1 = 2;
    FlatBuffersParser.T__2 = 3;
    FlatBuffersParser.T__3 = 4;
    FlatBuffersParser.T__4 = 5;
    FlatBuffersParser.T__5 = 6;
    FlatBuffersParser.T__6 = 7;
    FlatBuffersParser.T__7 = 8;
    FlatBuffersParser.T__8 = 9;
    FlatBuffersParser.T__9 = 10;
    FlatBuffersParser.T__10 = 11;
    FlatBuffersParser.T__11 = 12;
    FlatBuffersParser.T__12 = 13;
    FlatBuffersParser.T__13 = 14;
    FlatBuffersParser.T__14 = 15;
    FlatBuffersParser.T__15 = 16;
    FlatBuffersParser.T__16 = 17;
    FlatBuffersParser.T__17 = 18;
    FlatBuffersParser.T__18 = 19;
    FlatBuffersParser.T__19 = 20;
    FlatBuffersParser.T__20 = 21;
    FlatBuffersParser.T__21 = 22;
    FlatBuffersParser.STRING_CONSTANT = 23;
    FlatBuffersParser.BASE_TYPE_NAME = 24;
    FlatBuffersParser.IDENT = 25;
    FlatBuffersParser.HEX_INTEGER_CONSTANT = 26;
    FlatBuffersParser.INTEGER_CONSTANT = 27;
    FlatBuffersParser.FLOAT_CONSTANT = 28;
    FlatBuffersParser.BLOCK_COMMENT = 29;
    FlatBuffersParser.COMMENT = 30;
    FlatBuffersParser.WHITESPACE = 31;
    FlatBuffersParser.RULE_schema = 0;
    FlatBuffersParser.RULE_include = 1;
    FlatBuffersParser.RULE_namespace_decl = 2;
    FlatBuffersParser.RULE_attribute_decl = 3;
    FlatBuffersParser.RULE_type_decl = 4;
    FlatBuffersParser.RULE_enum_decl = 5;
    FlatBuffersParser.RULE_root_decl = 6;
    FlatBuffersParser.RULE_field_decl = 7;
    FlatBuffersParser.RULE_rpc_decl = 8;
    FlatBuffersParser.RULE_rpc_method = 9;
    FlatBuffersParser.RULE_type = 10;
    FlatBuffersParser.RULE_enumval_decl = 11;
    FlatBuffersParser.RULE_commasep_enumval_decl = 12;
    FlatBuffersParser.RULE_ident_with_opt_single_value = 13;
    FlatBuffersParser.RULE_commasep_ident_with_opt_single_value = 14;
    FlatBuffersParser.RULE_metadata = 15;
    FlatBuffersParser.RULE_scalar = 16;
    FlatBuffersParser.RULE_object = 17;
    FlatBuffersParser.RULE_ident_with_value = 18;
    FlatBuffersParser.RULE_commasep_ident_with_value = 19;
    FlatBuffersParser.RULE_single_value = 20;
    FlatBuffersParser.RULE_value = 21;
    FlatBuffersParser.RULE_commasep_value = 22;
    FlatBuffersParser.RULE_file_extension_decl = 23;
    FlatBuffersParser.RULE_file_identifier_decl = 24;
    FlatBuffersParser.RULE_ns_ident = 25;
    FlatBuffersParser.RULE_integer_const = 26;
    // tslint:disable:no-trailing-whitespace
    FlatBuffersParser.ruleNames = [
        "schema", "include", "namespace_decl", "attribute_decl", "type_decl",
        "enum_decl", "root_decl", "field_decl", "rpc_decl", "rpc_method", "type",
        "enumval_decl", "commasep_enumval_decl", "ident_with_opt_single_value",
        "commasep_ident_with_opt_single_value", "metadata", "scalar", "object",
        "ident_with_value", "commasep_ident_with_value", "single_value", "value",
        "commasep_value", "file_extension_decl", "file_identifier_decl", "ns_ident",
        "integer_const",
    ];
    FlatBuffersParser._LITERAL_NAMES = [
        undefined, "'include'", "';'", "'namespace'", "'.'", "'attribute'", "'table'",
        "'struct'", "'{'", "'}'", "'enum'", "':'", "'union'", "'root_type'", "'='",
        "'rpc_service'", "'('", "')'", "'['", "']'", "','", "'file_extension'",
        "'file_identifier'",
    ];
    FlatBuffersParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "STRING_CONSTANT", "BASE_TYPE_NAME", "IDENT", "HEX_INTEGER_CONSTANT",
        "INTEGER_CONSTANT", "FLOAT_CONSTANT", "BLOCK_COMMENT", "COMMENT", "WHITESPACE",
    ];
    FlatBuffersParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(FlatBuffersParser._LITERAL_NAMES, FlatBuffersParser._SYMBOLIC_NAMES, []);
    FlatBuffersParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\u0103\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
        "\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02H\n\x02\f\x02\x0E\x02" +
        "K\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x07\x04U\n\x04\f\x04\x0E\x04X\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06e\n\x06\f" +
        "\x06\x0E\x06h\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
        "\x07p\n\x07\x03\x07\x03\x07\x05\x07t\n\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
        "\t\x84\n\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x06\n\x8D\n\n\r\n" +
        "\x0E\n\x8E\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
        "\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xA2\n\f\x03\r\x03\r\x03" +
        "\r\x05\r\xA7\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xAC\n\x0E\f\x0E\x0E\x0E" +
        "\xAF\v\x0E\x03\x0E\x05\x0E\xB2\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB7" +
        "\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xBC\n\x10\f\x10\x0E\x10\xBF\v\x10" +
        "\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC5\n\x11\x03\x12\x03\x12\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
        "\x15\x03\x15\x07\x15\xD4\n\x15\f\x15\x0E\x15\xD7\v\x15\x03\x15\x05\x15" +
        "\xDA\n\x15\x03\x16\x03\x16\x05\x16\xDE\n\x16\x03\x17\x03\x17\x03\x17\x03" +
        "\x17\x03\x17\x03\x17\x05\x17\xE6\n\x17\x03\x18\x03\x18\x03\x18\x07\x18" +
        "\xEB\n\x18\f\x18\x0E\x18\xEE\v\x18\x03\x18\x05\x18\xF1\n\x18\x03\x19\x03" +
        "\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xFC" +
        "\n\x1B\f\x1B\x0E\x1B\xFF\v\x1B\x03\x1C\x03\x1C\x03\x1C\x02\x02\x02\x1D" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x02\x02\x05\x03\x02\b\t\x03\x02\x1B\x1E" +
        "\x03\x02\x1C\x1D\x02\u0107\x02;\x03\x02\x02\x02\x04L\x03\x02\x02\x02\x06" +
        "P\x03\x02\x02\x02\b[\x03\x02\x02\x02\n_\x03\x02\x02\x02\fs\x03\x02\x02" +
        "\x02\x0Ez\x03\x02\x02\x02\x10~\x03\x02\x02\x02\x12\x88\x03\x02\x02\x02" +
        "\x14\x92\x03\x02\x02\x02\x16\xA1\x03\x02\x02\x02\x18\xA3\x03\x02\x02\x02" +
        "\x1A\xA8\x03\x02\x02\x02\x1C\xB3\x03\x02\x02\x02\x1E\xB8\x03\x02\x02\x02" +
        " \xC4\x03\x02\x02\x02\"\xC6\x03\x02\x02\x02$\xC8\x03\x02\x02\x02&\xCC" +
        "\x03\x02\x02\x02(\xD0\x03\x02\x02\x02*\xDD\x03\x02\x02\x02,\xE5\x03\x02" +
        "\x02\x02.\xE7\x03\x02\x02\x020\xF2\x03\x02\x02\x022\xF5\x03\x02\x02\x02" +
        "4\xF8\x03\x02\x02\x026\u0100\x03\x02\x02\x028:\x05\x04\x03\x0298\x03\x02" +
        "\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<I\x03\x02" +
        "\x02\x02=;\x03\x02\x02\x02>H\x05\x06\x04\x02?H\x05\n\x06\x02@H\x05\f\x07" +
        "\x02AH\x05\x0E\b\x02BH\x050\x19\x02CH\x052\x1A\x02DH\x05\b\x05\x02EH\x05" +
        "\x12\n\x02FH\x05$\x13\x02G>\x03\x02\x02\x02G?\x03\x02\x02\x02G@\x03\x02" +
        "\x02\x02GA\x03\x02\x02\x02GB\x03\x02\x02\x02GC\x03\x02\x02\x02GD\x03\x02" +
        "\x02\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02" +
        "\x02\x02IJ\x03\x02\x02\x02J\x03\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x07" +
        "\x03\x02\x02MN\x07\x19\x02\x02NO\x07\x04\x02\x02O\x05\x03\x02\x02\x02" +
        "PQ\x07\x05\x02\x02QV\x07\x1B\x02\x02RS\x07\x06\x02\x02SU\x07\x1B\x02\x02" +
        "TR\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
        "WY\x03\x02\x02\x02XV\x03\x02\x02\x02YZ\x07\x04\x02\x02Z\x07\x03\x02\x02" +
        "\x02[\\\x07\x07\x02\x02\\]\x07\x19\x02\x02]^\x07\x04\x02\x02^\t\x03\x02" +
        "\x02\x02_`\t\x02\x02\x02`a\x07\x1B\x02\x02ab\x05 \x11\x02bf\x07\n\x02" +
        "\x02ce\x05\x10\t\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02" +
        "\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02ij\x07\v\x02" +
        "\x02j\v\x03\x02\x02\x02kl\x07\f\x02\x02lo\x07\x1B\x02\x02mn\x07\r\x02" +
        "\x02np\x05\x16\f\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pt\x03\x02\x02" +
        "\x02qr\x07\x0E\x02\x02rt\x07\x1B\x02\x02sk\x03\x02\x02\x02sq\x03\x02\x02" +
        "\x02tu\x03\x02\x02\x02uv\x05 \x11\x02vw\x07\n\x02\x02wx\x05\x1A\x0E\x02" +
        "xy\x07\v\x02\x02y\r\x03\x02\x02\x02z{\x07\x0F\x02\x02{|\x07\x1B\x02\x02" +
        "|}\x07\x04\x02\x02}\x0F\x03\x02\x02\x02~\x7F\x07\x1B\x02\x02\x7F\x80\x07" +
        "\r\x02\x02\x80\x83\x05\x16\f\x02\x81\x82\x07\x10\x02\x02\x82\x84\x05\"" +
        "\x12\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02" +
        "\x02\x02\x85\x86\x05 \x11\x02\x86\x87\x07\x04\x02\x02\x87\x11\x03\x02" +
        "\x02\x02\x88\x89\x07\x11\x02\x02\x89\x8A\x07\x1B\x02\x02\x8A\x8C\x07\n" +
        "\x02\x02\x8B\x8D\x05\x14\v\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
        "\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02" +
        "\x02\x02\x90\x91\x07\v\x02\x02\x91\x13\x03\x02\x02\x02\x92\x93\x07\x1B" +
        "\x02\x02\x93\x94\x07\x12\x02\x02\x94\x95\x07\x1B\x02\x02\x95\x96\x07\x13" +
        "\x02\x02\x96\x97\x07\r\x02\x02\x97\x98\x07\x1B\x02\x02\x98\x99\x05 \x11" +
        "\x02\x99\x9A\x07\x04\x02\x02\x9A\x15\x03\x02\x02\x02\x9B\x9C\x07\x14\x02" +
        "\x02\x9C\x9D\x05\x16\f\x02\x9D\x9E\x07\x15\x02\x02\x9E\xA2\x03\x02\x02" +
        "\x02\x9F\xA2\x07\x1A\x02\x02\xA0\xA2\x054\x1B\x02\xA1\x9B\x03\x02\x02" +
        "\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x17\x03\x02\x02" +
        "\x02\xA3\xA6\x054\x1B\x02\xA4\xA5\x07\x10\x02\x02\xA5\xA7\x056\x1C\x02" +
        "\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\x19\x03\x02\x02\x02" +
        "\xA8\xAD\x05\x18\r\x02\xA9\xAA\x07\x16\x02\x02\xAA\xAC\x05\x18\r\x02\xAB" +
        "\xA9\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD" +
        "\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0" +
        "\xB2\x07\x16\x02\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
        "\x1B\x03\x02\x02\x02\xB3\xB6\x07\x1B\x02\x02\xB4\xB5\x07\r\x02\x02\xB5" +
        "\xB7\x05*\x16\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
        "\x1D\x03\x02\x02\x02\xB8\xBD\x05\x1C\x0F\x02\xB9\xBA\x07\x16\x02\x02\xBA" +
        "\xBC\x05\x1C\x0F\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD" +
        "\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\x1F\x03\x02\x02\x02\xBF" +
        "\xBD\x03\x02\x02\x02\xC0\xC1\x07\x12\x02\x02\xC1\xC2\x05\x1E\x10\x02\xC2" +
        "\xC3\x07\x13\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC0\x03\x02\x02\x02\xC4" +
        "\xC5\x03\x02\x02\x02\xC5!\x03\x02\x02\x02\xC6\xC7\t\x03\x02\x02\xC7#\x03" +
        "\x02\x02\x02\xC8\xC9\x07\n\x02\x02\xC9\xCA\x05(\x15\x02\xCA\xCB\x07\v" +
        "\x02\x02\xCB%\x03\x02\x02\x02\xCC\xCD\x07\x1B\x02\x02\xCD\xCE\x07\r\x02" +
        "\x02\xCE\xCF\x05,\x17\x02\xCF\'\x03\x02\x02\x02\xD0\xD5\x05&\x14\x02\xD1" +
        "\xD2\x07\x16\x02\x02\xD2\xD4\x05&\x14\x02\xD3\xD1\x03\x02\x02\x02\xD4" +
        "\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6" +
        "\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDA\x07\x16\x02\x02\xD9" +
        "\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA)\x03\x02\x02\x02\xDB" +
        "\xDE\x05\"\x12\x02\xDC\xDE\x07\x19\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD" +
        "\xDC\x03\x02\x02\x02\xDE+\x03\x02\x02\x02\xDF\xE6\x05*\x16\x02\xE0\xE6" +
        "\x05$\x13\x02\xE1\xE2\x07\x14\x02\x02\xE2\xE3\x05.\x18\x02\xE3\xE4\x07" +
        "\x15\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xDF\x03\x02\x02\x02\xE5\xE0\x03" +
        "\x02\x02\x02\xE5\xE1\x03\x02\x02\x02\xE6-\x03\x02\x02\x02\xE7\xEC\x05" +
        ",\x17\x02\xE8\xE9\x07\x16\x02\x02\xE9\xEB\x05,\x17\x02\xEA\xE8\x03\x02" +
        "\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02" +
        "\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF1\x07\x16" +
        "\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1/\x03\x02" +
        "\x02\x02\xF2\xF3\x07\x17\x02\x02\xF3\xF4\x07\x19\x02\x02\xF41\x03\x02" +
        "\x02\x02\xF5\xF6\x07\x18\x02\x02\xF6\xF7\x07\x19\x02\x02\xF73\x03\x02" +
        "\x02\x02\xF8\xFD\x07\x1B\x02\x02\xF9\xFA\x07\x06\x02\x02\xFA\xFC\x07\x1B" +
        "\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02" +
        "\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE5\x03\x02\x02\x02\xFF\xFD\x03\x02" +
        "\x02\x02\u0100\u0101\t\x04\x02\x02\u01017\x03\x02\x02\x02\x19;GIVfos\x83" +
        "\x8E\xA1\xA6\xAD\xB1\xB6\xBD\xC4\xD5\xD9\xDD\xE5\xEC\xF0\xFD";
    return FlatBuffersParser;
}(Parser_1.Parser));
exports.FlatBuffersParser = FlatBuffersParser;
var SchemaContext = /** @class */ (function (_super) {
    __extends(SchemaContext, _super);
    function SchemaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SchemaContext.prototype.include = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IncludeContext);
        }
        else {
            return this.getRuleContext(i, IncludeContext);
        }
    };
    SchemaContext.prototype.namespace_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Namespace_declContext);
        }
        else {
            return this.getRuleContext(i, Namespace_declContext);
        }
    };
    SchemaContext.prototype.type_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_declContext);
        }
        else {
            return this.getRuleContext(i, Type_declContext);
        }
    };
    SchemaContext.prototype.enum_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Enum_declContext);
        }
        else {
            return this.getRuleContext(i, Enum_declContext);
        }
    };
    SchemaContext.prototype.root_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Root_declContext);
        }
        else {
            return this.getRuleContext(i, Root_declContext);
        }
    };
    SchemaContext.prototype.file_extension_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(File_extension_declContext);
        }
        else {
            return this.getRuleContext(i, File_extension_declContext);
        }
    };
    SchemaContext.prototype.file_identifier_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(File_identifier_declContext);
        }
        else {
            return this.getRuleContext(i, File_identifier_declContext);
        }
    };
    SchemaContext.prototype.attribute_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Attribute_declContext);
        }
        else {
            return this.getRuleContext(i, Attribute_declContext);
        }
    };
    SchemaContext.prototype.rpc_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rpc_declContext);
        }
        else {
            return this.getRuleContext(i, Rpc_declContext);
        }
    };
    SchemaContext.prototype.object = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectContext);
        }
        else {
            return this.getRuleContext(i, ObjectContext);
        }
    };
    Object.defineProperty(SchemaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_schema; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SchemaContext.prototype.enterRule = function (listener) {
        if (listener.enterSchema) {
            listener.enterSchema(this);
        }
    };
    // @Override
    SchemaContext.prototype.exitRule = function (listener) {
        if (listener.exitSchema) {
            listener.exitSchema(this);
        }
    };
    // @Override
    SchemaContext.prototype.accept = function (visitor) {
        if (visitor.visitSchema) {
            return visitor.visitSchema(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SchemaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SchemaContext = SchemaContext;
var IncludeContext = /** @class */ (function (_super) {
    __extends(IncludeContext, _super);
    function IncludeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IncludeContext.prototype.STRING_CONSTANT = function () { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); };
    Object.defineProperty(IncludeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_include; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IncludeContext.prototype.enterRule = function (listener) {
        if (listener.enterInclude) {
            listener.enterInclude(this);
        }
    };
    // @Override
    IncludeContext.prototype.exitRule = function (listener) {
        if (listener.exitInclude) {
            listener.exitInclude(this);
        }
    };
    // @Override
    IncludeContext.prototype.accept = function (visitor) {
        if (visitor.visitInclude) {
            return visitor.visitInclude(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncludeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IncludeContext = IncludeContext;
var Namespace_declContext = /** @class */ (function (_super) {
    __extends(Namespace_declContext, _super);
    function Namespace_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Namespace_declContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(FlatBuffersParser.IDENT);
        }
        else {
            return this.getToken(FlatBuffersParser.IDENT, i);
        }
    };
    Object.defineProperty(Namespace_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_namespace_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Namespace_declContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespace_decl) {
            listener.enterNamespace_decl(this);
        }
    };
    // @Override
    Namespace_declContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespace_decl) {
            listener.exitNamespace_decl(this);
        }
    };
    // @Override
    Namespace_declContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespace_decl) {
            return visitor.visitNamespace_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Namespace_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Namespace_declContext = Namespace_declContext;
var Attribute_declContext = /** @class */ (function (_super) {
    __extends(Attribute_declContext, _super);
    function Attribute_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Attribute_declContext.prototype.STRING_CONSTANT = function () { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); };
    Object.defineProperty(Attribute_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_attribute_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Attribute_declContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute_decl) {
            listener.enterAttribute_decl(this);
        }
    };
    // @Override
    Attribute_declContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute_decl) {
            listener.exitAttribute_decl(this);
        }
    };
    // @Override
    Attribute_declContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute_decl) {
            return visitor.visitAttribute_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Attribute_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Attribute_declContext = Attribute_declContext;
var Type_declContext = /** @class */ (function (_super) {
    __extends(Type_declContext, _super);
    function Type_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_declContext.prototype.IDENT = function () { return this.getToken(FlatBuffersParser.IDENT, 0); };
    Type_declContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    Type_declContext.prototype.field_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Field_declContext);
        }
        else {
            return this.getRuleContext(i, Field_declContext);
        }
    };
    Object.defineProperty(Type_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_type_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_declContext.prototype.enterRule = function (listener) {
        if (listener.enterType_decl) {
            listener.enterType_decl(this);
        }
    };
    // @Override
    Type_declContext.prototype.exitRule = function (listener) {
        if (listener.exitType_decl) {
            listener.exitType_decl(this);
        }
    };
    // @Override
    Type_declContext.prototype.accept = function (visitor) {
        if (visitor.visitType_decl) {
            return visitor.visitType_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_declContext = Type_declContext;
var Enum_declContext = /** @class */ (function (_super) {
    __extends(Enum_declContext, _super);
    function Enum_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_declContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    Enum_declContext.prototype.commasep_enumval_decl = function () {
        return this.getRuleContext(0, Commasep_enumval_declContext);
    };
    Enum_declContext.prototype.IDENT = function () { return this.tryGetToken(FlatBuffersParser.IDENT, 0); };
    Enum_declContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(Enum_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_enum_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_declContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_decl) {
            listener.enterEnum_decl(this);
        }
    };
    // @Override
    Enum_declContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_decl) {
            listener.exitEnum_decl(this);
        }
    };
    // @Override
    Enum_declContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_decl) {
            return visitor.visitEnum_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_declContext = Enum_declContext;
var Root_declContext = /** @class */ (function (_super) {
    __extends(Root_declContext, _super);
    function Root_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Root_declContext.prototype.IDENT = function () { return this.getToken(FlatBuffersParser.IDENT, 0); };
    Object.defineProperty(Root_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_root_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Root_declContext.prototype.enterRule = function (listener) {
        if (listener.enterRoot_decl) {
            listener.enterRoot_decl(this);
        }
    };
    // @Override
    Root_declContext.prototype.exitRule = function (listener) {
        if (listener.exitRoot_decl) {
            listener.exitRoot_decl(this);
        }
    };
    // @Override
    Root_declContext.prototype.accept = function (visitor) {
        if (visitor.visitRoot_decl) {
            return visitor.visitRoot_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Root_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Root_declContext = Root_declContext;
var Field_declContext = /** @class */ (function (_super) {
    __extends(Field_declContext, _super);
    function Field_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_declContext.prototype.IDENT = function () { return this.getToken(FlatBuffersParser.IDENT, 0); };
    Field_declContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Field_declContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    Field_declContext.prototype.scalar = function () {
        return this.tryGetRuleContext(0, ScalarContext);
    };
    Object.defineProperty(Field_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_field_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_declContext.prototype.enterRule = function (listener) {
        if (listener.enterField_decl) {
            listener.enterField_decl(this);
        }
    };
    // @Override
    Field_declContext.prototype.exitRule = function (listener) {
        if (listener.exitField_decl) {
            listener.exitField_decl(this);
        }
    };
    // @Override
    Field_declContext.prototype.accept = function (visitor) {
        if (visitor.visitField_decl) {
            return visitor.visitField_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_declContext = Field_declContext;
var Rpc_declContext = /** @class */ (function (_super) {
    __extends(Rpc_declContext, _super);
    function Rpc_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rpc_declContext.prototype.IDENT = function () { return this.getToken(FlatBuffersParser.IDENT, 0); };
    Rpc_declContext.prototype.rpc_method = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rpc_methodContext);
        }
        else {
            return this.getRuleContext(i, Rpc_methodContext);
        }
    };
    Object.defineProperty(Rpc_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_rpc_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rpc_declContext.prototype.enterRule = function (listener) {
        if (listener.enterRpc_decl) {
            listener.enterRpc_decl(this);
        }
    };
    // @Override
    Rpc_declContext.prototype.exitRule = function (listener) {
        if (listener.exitRpc_decl) {
            listener.exitRpc_decl(this);
        }
    };
    // @Override
    Rpc_declContext.prototype.accept = function (visitor) {
        if (visitor.visitRpc_decl) {
            return visitor.visitRpc_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rpc_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rpc_declContext = Rpc_declContext;
var Rpc_methodContext = /** @class */ (function (_super) {
    __extends(Rpc_methodContext, _super);
    function Rpc_methodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rpc_methodContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(FlatBuffersParser.IDENT);
        }
        else {
            return this.getToken(FlatBuffersParser.IDENT, i);
        }
    };
    Rpc_methodContext.prototype.metadata = function () {
        return this.getRuleContext(0, MetadataContext);
    };
    Object.defineProperty(Rpc_methodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_rpc_method; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rpc_methodContext.prototype.enterRule = function (listener) {
        if (listener.enterRpc_method) {
            listener.enterRpc_method(this);
        }
    };
    // @Override
    Rpc_methodContext.prototype.exitRule = function (listener) {
        if (listener.exitRpc_method) {
            listener.exitRpc_method(this);
        }
    };
    // @Override
    Rpc_methodContext.prototype.accept = function (visitor) {
        if (visitor.visitRpc_method) {
            return visitor.visitRpc_method(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rpc_methodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rpc_methodContext = Rpc_methodContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    TypeContext.prototype.BASE_TYPE_NAME = function () { return this.tryGetToken(FlatBuffersParser.BASE_TYPE_NAME, 0); };
    TypeContext.prototype.ns_ident = function () {
        return this.tryGetRuleContext(0, Ns_identContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_type; },
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
var Enumval_declContext = /** @class */ (function (_super) {
    __extends(Enumval_declContext, _super);
    function Enumval_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enumval_declContext.prototype.ns_ident = function () {
        return this.getRuleContext(0, Ns_identContext);
    };
    Enumval_declContext.prototype.integer_const = function () {
        return this.tryGetRuleContext(0, Integer_constContext);
    };
    Object.defineProperty(Enumval_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_enumval_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enumval_declContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumval_decl) {
            listener.enterEnumval_decl(this);
        }
    };
    // @Override
    Enumval_declContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumval_decl) {
            listener.exitEnumval_decl(this);
        }
    };
    // @Override
    Enumval_declContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumval_decl) {
            return visitor.visitEnumval_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enumval_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enumval_declContext = Enumval_declContext;
var Commasep_enumval_declContext = /** @class */ (function (_super) {
    __extends(Commasep_enumval_declContext, _super);
    function Commasep_enumval_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Commasep_enumval_declContext.prototype.enumval_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Enumval_declContext);
        }
        else {
            return this.getRuleContext(i, Enumval_declContext);
        }
    };
    Object.defineProperty(Commasep_enumval_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_commasep_enumval_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Commasep_enumval_declContext.prototype.enterRule = function (listener) {
        if (listener.enterCommasep_enumval_decl) {
            listener.enterCommasep_enumval_decl(this);
        }
    };
    // @Override
    Commasep_enumval_declContext.prototype.exitRule = function (listener) {
        if (listener.exitCommasep_enumval_decl) {
            listener.exitCommasep_enumval_decl(this);
        }
    };
    // @Override
    Commasep_enumval_declContext.prototype.accept = function (visitor) {
        if (visitor.visitCommasep_enumval_decl) {
            return visitor.visitCommasep_enumval_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Commasep_enumval_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Commasep_enumval_declContext = Commasep_enumval_declContext;
var Ident_with_opt_single_valueContext = /** @class */ (function (_super) {
    __extends(Ident_with_opt_single_valueContext, _super);
    function Ident_with_opt_single_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ident_with_opt_single_valueContext.prototype.IDENT = function () { return this.getToken(FlatBuffersParser.IDENT, 0); };
    Ident_with_opt_single_valueContext.prototype.single_value = function () {
        return this.tryGetRuleContext(0, Single_valueContext);
    };
    Object.defineProperty(Ident_with_opt_single_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_ident_with_opt_single_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ident_with_opt_single_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterIdent_with_opt_single_value) {
            listener.enterIdent_with_opt_single_value(this);
        }
    };
    // @Override
    Ident_with_opt_single_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitIdent_with_opt_single_value) {
            listener.exitIdent_with_opt_single_value(this);
        }
    };
    // @Override
    Ident_with_opt_single_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitIdent_with_opt_single_value) {
            return visitor.visitIdent_with_opt_single_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ident_with_opt_single_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ident_with_opt_single_valueContext = Ident_with_opt_single_valueContext;
var Commasep_ident_with_opt_single_valueContext = /** @class */ (function (_super) {
    __extends(Commasep_ident_with_opt_single_valueContext, _super);
    function Commasep_ident_with_opt_single_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Commasep_ident_with_opt_single_valueContext.prototype.ident_with_opt_single_value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ident_with_opt_single_valueContext);
        }
        else {
            return this.getRuleContext(i, Ident_with_opt_single_valueContext);
        }
    };
    Object.defineProperty(Commasep_ident_with_opt_single_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_commasep_ident_with_opt_single_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Commasep_ident_with_opt_single_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterCommasep_ident_with_opt_single_value) {
            listener.enterCommasep_ident_with_opt_single_value(this);
        }
    };
    // @Override
    Commasep_ident_with_opt_single_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitCommasep_ident_with_opt_single_value) {
            listener.exitCommasep_ident_with_opt_single_value(this);
        }
    };
    // @Override
    Commasep_ident_with_opt_single_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitCommasep_ident_with_opt_single_value) {
            return visitor.visitCommasep_ident_with_opt_single_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Commasep_ident_with_opt_single_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Commasep_ident_with_opt_single_valueContext = Commasep_ident_with_opt_single_valueContext;
var MetadataContext = /** @class */ (function (_super) {
    __extends(MetadataContext, _super);
    function MetadataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MetadataContext.prototype.commasep_ident_with_opt_single_value = function () {
        return this.tryGetRuleContext(0, Commasep_ident_with_opt_single_valueContext);
    };
    Object.defineProperty(MetadataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_metadata; },
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
var ScalarContext = /** @class */ (function (_super) {
    __extends(ScalarContext, _super);
    function ScalarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScalarContext.prototype.INTEGER_CONSTANT = function () { return this.tryGetToken(FlatBuffersParser.INTEGER_CONSTANT, 0); };
    ScalarContext.prototype.HEX_INTEGER_CONSTANT = function () { return this.tryGetToken(FlatBuffersParser.HEX_INTEGER_CONSTANT, 0); };
    ScalarContext.prototype.FLOAT_CONSTANT = function () { return this.tryGetToken(FlatBuffersParser.FLOAT_CONSTANT, 0); };
    ScalarContext.prototype.IDENT = function () { return this.tryGetToken(FlatBuffersParser.IDENT, 0); };
    Object.defineProperty(ScalarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_scalar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScalarContext.prototype.enterRule = function (listener) {
        if (listener.enterScalar) {
            listener.enterScalar(this);
        }
    };
    // @Override
    ScalarContext.prototype.exitRule = function (listener) {
        if (listener.exitScalar) {
            listener.exitScalar(this);
        }
    };
    // @Override
    ScalarContext.prototype.accept = function (visitor) {
        if (visitor.visitScalar) {
            return visitor.visitScalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScalarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScalarContext = ScalarContext;
var ObjectContext = /** @class */ (function (_super) {
    __extends(ObjectContext, _super);
    function ObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectContext.prototype.commasep_ident_with_value = function () {
        return this.getRuleContext(0, Commasep_ident_with_valueContext);
    };
    Object.defineProperty(ObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_object; },
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
var Ident_with_valueContext = /** @class */ (function (_super) {
    __extends(Ident_with_valueContext, _super);
    function Ident_with_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ident_with_valueContext.prototype.IDENT = function () { return this.getToken(FlatBuffersParser.IDENT, 0); };
    Ident_with_valueContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(Ident_with_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_ident_with_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ident_with_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterIdent_with_value) {
            listener.enterIdent_with_value(this);
        }
    };
    // @Override
    Ident_with_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitIdent_with_value) {
            listener.exitIdent_with_value(this);
        }
    };
    // @Override
    Ident_with_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitIdent_with_value) {
            return visitor.visitIdent_with_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ident_with_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ident_with_valueContext = Ident_with_valueContext;
var Commasep_ident_with_valueContext = /** @class */ (function (_super) {
    __extends(Commasep_ident_with_valueContext, _super);
    function Commasep_ident_with_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Commasep_ident_with_valueContext.prototype.ident_with_value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ident_with_valueContext);
        }
        else {
            return this.getRuleContext(i, Ident_with_valueContext);
        }
    };
    Object.defineProperty(Commasep_ident_with_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_commasep_ident_with_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Commasep_ident_with_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterCommasep_ident_with_value) {
            listener.enterCommasep_ident_with_value(this);
        }
    };
    // @Override
    Commasep_ident_with_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitCommasep_ident_with_value) {
            listener.exitCommasep_ident_with_value(this);
        }
    };
    // @Override
    Commasep_ident_with_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitCommasep_ident_with_value) {
            return visitor.visitCommasep_ident_with_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Commasep_ident_with_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Commasep_ident_with_valueContext = Commasep_ident_with_valueContext;
var Single_valueContext = /** @class */ (function (_super) {
    __extends(Single_valueContext, _super);
    function Single_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_valueContext.prototype.scalar = function () {
        return this.tryGetRuleContext(0, ScalarContext);
    };
    Single_valueContext.prototype.STRING_CONSTANT = function () { return this.tryGetToken(FlatBuffersParser.STRING_CONSTANT, 0); };
    Object.defineProperty(Single_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_single_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_value) {
            listener.enterSingle_value(this);
        }
    };
    // @Override
    Single_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_value) {
            listener.exitSingle_value(this);
        }
    };
    // @Override
    Single_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_value) {
            return visitor.visitSingle_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_valueContext = Single_valueContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.single_value = function () {
        return this.tryGetRuleContext(0, Single_valueContext);
    };
    ValueContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    ValueContext.prototype.commasep_value = function () {
        return this.tryGetRuleContext(0, Commasep_valueContext);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_value; },
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
var Commasep_valueContext = /** @class */ (function (_super) {
    __extends(Commasep_valueContext, _super);
    function Commasep_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Commasep_valueContext.prototype.value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    };
    Object.defineProperty(Commasep_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_commasep_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Commasep_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterCommasep_value) {
            listener.enterCommasep_value(this);
        }
    };
    // @Override
    Commasep_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitCommasep_value) {
            listener.exitCommasep_value(this);
        }
    };
    // @Override
    Commasep_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitCommasep_value) {
            return visitor.visitCommasep_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Commasep_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Commasep_valueContext = Commasep_valueContext;
var File_extension_declContext = /** @class */ (function (_super) {
    __extends(File_extension_declContext, _super);
    function File_extension_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    File_extension_declContext.prototype.STRING_CONSTANT = function () { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); };
    Object.defineProperty(File_extension_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_file_extension_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    File_extension_declContext.prototype.enterRule = function (listener) {
        if (listener.enterFile_extension_decl) {
            listener.enterFile_extension_decl(this);
        }
    };
    // @Override
    File_extension_declContext.prototype.exitRule = function (listener) {
        if (listener.exitFile_extension_decl) {
            listener.exitFile_extension_decl(this);
        }
    };
    // @Override
    File_extension_declContext.prototype.accept = function (visitor) {
        if (visitor.visitFile_extension_decl) {
            return visitor.visitFile_extension_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return File_extension_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.File_extension_declContext = File_extension_declContext;
var File_identifier_declContext = /** @class */ (function (_super) {
    __extends(File_identifier_declContext, _super);
    function File_identifier_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    File_identifier_declContext.prototype.STRING_CONSTANT = function () { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); };
    Object.defineProperty(File_identifier_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_file_identifier_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    File_identifier_declContext.prototype.enterRule = function (listener) {
        if (listener.enterFile_identifier_decl) {
            listener.enterFile_identifier_decl(this);
        }
    };
    // @Override
    File_identifier_declContext.prototype.exitRule = function (listener) {
        if (listener.exitFile_identifier_decl) {
            listener.exitFile_identifier_decl(this);
        }
    };
    // @Override
    File_identifier_declContext.prototype.accept = function (visitor) {
        if (visitor.visitFile_identifier_decl) {
            return visitor.visitFile_identifier_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return File_identifier_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.File_identifier_declContext = File_identifier_declContext;
var Ns_identContext = /** @class */ (function (_super) {
    __extends(Ns_identContext, _super);
    function Ns_identContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ns_identContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(FlatBuffersParser.IDENT);
        }
        else {
            return this.getToken(FlatBuffersParser.IDENT, i);
        }
    };
    Object.defineProperty(Ns_identContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_ns_ident; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ns_identContext.prototype.enterRule = function (listener) {
        if (listener.enterNs_ident) {
            listener.enterNs_ident(this);
        }
    };
    // @Override
    Ns_identContext.prototype.exitRule = function (listener) {
        if (listener.exitNs_ident) {
            listener.exitNs_ident(this);
        }
    };
    // @Override
    Ns_identContext.prototype.accept = function (visitor) {
        if (visitor.visitNs_ident) {
            return visitor.visitNs_ident(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ns_identContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ns_identContext = Ns_identContext;
var Integer_constContext = /** @class */ (function (_super) {
    __extends(Integer_constContext, _super);
    function Integer_constContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Integer_constContext.prototype.INTEGER_CONSTANT = function () { return this.tryGetToken(FlatBuffersParser.INTEGER_CONSTANT, 0); };
    Integer_constContext.prototype.HEX_INTEGER_CONSTANT = function () { return this.tryGetToken(FlatBuffersParser.HEX_INTEGER_CONSTANT, 0); };
    Object.defineProperty(Integer_constContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FlatBuffersParser.RULE_integer_const; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Integer_constContext.prototype.enterRule = function (listener) {
        if (listener.enterInteger_const) {
            listener.enterInteger_const(this);
        }
    };
    // @Override
    Integer_constContext.prototype.exitRule = function (listener) {
        if (listener.exitInteger_const) {
            listener.exitInteger_const(this);
        }
    };
    // @Override
    Integer_constContext.prototype.accept = function (visitor) {
        if (visitor.visitInteger_const) {
            return visitor.visitInteger_const(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Integer_constContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Integer_constContext = Integer_constContext;
