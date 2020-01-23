"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/thrift/Thrift.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ThriftParser = /** @class */ (function (_super) {
    __extends(ThriftParser, _super);
    function ThriftParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ThriftParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ThriftParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ThriftParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThriftParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Thrift.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThriftParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ThriftParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThriftParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ThriftParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ThriftParser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ThriftParser.RULE_document);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ThriftParser.T__0) | (1 << ThriftParser.T__1) | (1 << ThriftParser.T__3) | (1 << ThriftParser.T__4) | (1 << ThriftParser.T__5))) !== 0)) {
                    {
                        {
                            this.state = 78;
                            this.header();
                        }
                    }
                    this.state = 83;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 87;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ThriftParser.T__6) | (1 << ThriftParser.T__8) | (1 << ThriftParser.T__9) | (1 << ThriftParser.T__12) | (1 << ThriftParser.T__13) | (1 << ThriftParser.T__14) | (1 << ThriftParser.T__15) | (1 << ThriftParser.T__16))) !== 0)) {
                    {
                        {
                            this.state = 84;
                            this.definition();
                        }
                    }
                    this.state = 89;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 90;
                this.match(ThriftParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.header = function () {
        var _localctx = new HeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ThriftParser.RULE_header);
        try {
            this.state = 95;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ThriftParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 92;
                        this.include();
                    }
                    break;
                case ThriftParser.T__1:
                case ThriftParser.T__3:
                case ThriftParser.T__4:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 93;
                        this.namespace();
                    }
                    break;
                case ThriftParser.T__5:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 94;
                        this.cpp_include();
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
    ThriftParser.prototype.include = function () {
        var _localctx = new IncludeContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ThriftParser.RULE_include);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.match(ThriftParser.T__0);
                this.state = 98;
                this.match(ThriftParser.LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.namespace = function () {
        var _localctx = new NamespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ThriftParser.RULE_namespace);
        var _la;
        try {
            this.state = 110;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 100;
                        this.match(ThriftParser.T__1);
                        this.state = 101;
                        this.match(ThriftParser.T__2);
                        this.state = 102;
                        _la = this._input.LA(1);
                        if (!(_la === ThriftParser.LITERAL || _la === ThriftParser.IDENTIFIER)) {
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
                        this.state = 103;
                        this.match(ThriftParser.T__1);
                        this.state = 104;
                        this.match(ThriftParser.IDENTIFIER);
                        this.state = 105;
                        _la = this._input.LA(1);
                        if (!(_la === ThriftParser.LITERAL || _la === ThriftParser.IDENTIFIER)) {
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
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 106;
                        this.match(ThriftParser.T__3);
                        this.state = 107;
                        this.match(ThriftParser.IDENTIFIER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 108;
                        this.match(ThriftParser.T__4);
                        this.state = 109;
                        this.match(ThriftParser.IDENTIFIER);
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
    ThriftParser.prototype.cpp_include = function () {
        var _localctx = new Cpp_includeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ThriftParser.RULE_cpp_include);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this.match(ThriftParser.T__5);
                this.state = 113;
                this.match(ThriftParser.LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.definition = function () {
        var _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ThriftParser.RULE_definition);
        try {
            this.state = 123;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ThriftParser.T__6:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 115;
                        this.const_rule();
                    }
                    break;
                case ThriftParser.T__8:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 116;
                        this.typedef();
                    }
                    break;
                case ThriftParser.T__9:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 117;
                        this.enum_rule();
                    }
                    break;
                case ThriftParser.T__12:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 118;
                        this.senum();
                    }
                    break;
                case ThriftParser.T__13:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 119;
                        this.struct();
                    }
                    break;
                case ThriftParser.T__14:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 120;
                        this.union();
                    }
                    break;
                case ThriftParser.T__15:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 121;
                        this.exception();
                    }
                    break;
                case ThriftParser.T__16:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 122;
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
    ThriftParser.prototype.const_rule = function () {
        var _localctx = new Const_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ThriftParser.RULE_const_rule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this.match(ThriftParser.T__6);
                this.state = 126;
                this.field_type();
                this.state = 127;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__7) {
                    {
                        this.state = 128;
                        this.match(ThriftParser.T__7);
                        this.state = 129;
                        this.const_value();
                    }
                }
                this.state = 133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                    {
                        this.state = 132;
                        this.list_separator();
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
    ThriftParser.prototype.typedef = function () {
        var _localctx = new TypedefContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ThriftParser.RULE_typedef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.match(ThriftParser.T__8);
                this.state = 136;
                this.field_type();
                this.state = 137;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 138;
                        this.type_annotations();
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
    ThriftParser.prototype.enum_rule = function () {
        var _localctx = new Enum_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ThriftParser.RULE_enum_rule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                this.match(ThriftParser.T__9);
                this.state = 142;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 143;
                this.match(ThriftParser.T__10);
                this.state = 147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ThriftParser.IDENTIFIER) {
                    {
                        {
                            this.state = 144;
                            this.enum_field();
                        }
                    }
                    this.state = 149;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 150;
                this.match(ThriftParser.T__11);
                this.state = 152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 151;
                        this.type_annotations();
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
    ThriftParser.prototype.enum_field = function () {
        var _localctx = new Enum_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ThriftParser.RULE_enum_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__7) {
                    {
                        this.state = 155;
                        this.match(ThriftParser.T__7);
                        this.state = 156;
                        this.integer();
                    }
                }
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 159;
                        this.type_annotations();
                    }
                }
                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                    {
                        this.state = 162;
                        this.list_separator();
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
    ThriftParser.prototype.senum = function () {
        var _localctx = new SenumContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ThriftParser.RULE_senum);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.match(ThriftParser.T__12);
                this.state = 166;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 167;
                this.match(ThriftParser.T__10);
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ThriftParser.LITERAL) {
                    {
                        {
                            this.state = 168;
                            this.match(ThriftParser.LITERAL);
                            this.state = 170;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                                {
                                    this.state = 169;
                                    this.list_separator();
                                }
                            }
                        }
                    }
                    this.state = 176;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 177;
                this.match(ThriftParser.T__11);
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 178;
                        this.type_annotations();
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
    ThriftParser.prototype.struct = function () {
        var _localctx = new StructContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ThriftParser.RULE_struct);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this.match(ThriftParser.T__13);
                this.state = 182;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 183;
                this.match(ThriftParser.T__10);
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
                    {
                        {
                            this.state = 184;
                            this.field();
                        }
                    }
                    this.state = 189;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 190;
                this.match(ThriftParser.T__11);
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 191;
                        this.type_annotations();
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
    ThriftParser.prototype.union = function () {
        var _localctx = new UnionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ThriftParser.RULE_union);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.match(ThriftParser.T__14);
                this.state = 195;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 196;
                this.match(ThriftParser.T__10);
                this.state = 200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
                    {
                        {
                            this.state = 197;
                            this.field();
                        }
                    }
                    this.state = 202;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 203;
                this.match(ThriftParser.T__11);
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 204;
                        this.type_annotations();
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
    ThriftParser.prototype.exception = function () {
        var _localctx = new ExceptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ThriftParser.RULE_exception);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this.match(ThriftParser.T__15);
                this.state = 208;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 209;
                this.match(ThriftParser.T__10);
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
                    {
                        {
                            this.state = 210;
                            this.field();
                        }
                    }
                    this.state = 215;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 216;
                this.match(ThriftParser.T__11);
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 217;
                        this.type_annotations();
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
    ThriftParser.prototype.service = function () {
        var _localctx = new ServiceContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ThriftParser.RULE_service);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.match(ThriftParser.T__16);
                this.state = 221;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__17) {
                    {
                        this.state = 222;
                        this.match(ThriftParser.T__17);
                        this.state = 223;
                        this.match(ThriftParser.IDENTIFIER);
                    }
                }
                this.state = 226;
                this.match(ThriftParser.T__10);
                this.state = 230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (ThriftParser.T__23 - 24)) | (1 << (ThriftParser.T__24 - 24)) | (1 << (ThriftParser.T__25 - 24)) | (1 << (ThriftParser.T__27 - 24)) | (1 << (ThriftParser.T__30 - 24)) | (1 << (ThriftParser.T__31 - 24)) | (1 << (ThriftParser.TYPE_BOOL - 24)) | (1 << (ThriftParser.TYPE_BYTE - 24)) | (1 << (ThriftParser.TYPE_I16 - 24)) | (1 << (ThriftParser.TYPE_I32 - 24)) | (1 << (ThriftParser.TYPE_I64 - 24)) | (1 << (ThriftParser.TYPE_DOUBLE - 24)) | (1 << (ThriftParser.TYPE_STRING - 24)) | (1 << (ThriftParser.TYPE_BINARY - 24)) | (1 << (ThriftParser.IDENTIFIER - 24)))) !== 0)) {
                    {
                        {
                            this.state = 227;
                            this.function();
                        }
                    }
                    this.state = 232;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 233;
                this.match(ThriftParser.T__11);
                this.state = 235;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 234;
                        this.type_annotations();
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
    ThriftParser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ThriftParser.RULE_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.INTEGER || _la === ThriftParser.HEX_INTEGER) {
                    {
                        this.state = 237;
                        this.field_id();
                    }
                }
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__19 || _la === ThriftParser.T__20) {
                    {
                        this.state = 240;
                        this.field_req();
                    }
                }
                this.state = 243;
                this.field_type();
                this.state = 244;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__7) {
                    {
                        this.state = 245;
                        this.match(ThriftParser.T__7);
                        this.state = 246;
                        this.const_value();
                    }
                }
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 249;
                        this.type_annotations();
                    }
                }
                this.state = 253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                    {
                        this.state = 252;
                        this.list_separator();
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
    ThriftParser.prototype.field_id = function () {
        var _localctx = new Field_idContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ThriftParser.RULE_field_id);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.integer();
                this.state = 256;
                this.match(ThriftParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.field_req = function () {
        var _localctx = new Field_reqContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ThriftParser.RULE_field_req);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                _la = this._input.LA(1);
                if (!(_la === ThriftParser.T__19 || _la === ThriftParser.T__20)) {
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
    ThriftParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ThriftParser.RULE_function);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__23 || _la === ThriftParser.T__24) {
                    {
                        this.state = 260;
                        this.oneway();
                    }
                }
                this.state = 263;
                this.function_type();
                this.state = 264;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 265;
                this.match(ThriftParser.T__21);
                this.state = 269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
                    {
                        {
                            this.state = 266;
                            this.field();
                        }
                    }
                    this.state = 271;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 272;
                this.match(ThriftParser.T__22);
                this.state = 274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__26) {
                    {
                        this.state = 273;
                        this.throws_list();
                    }
                }
                this.state = 277;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 276;
                        this.type_annotations();
                    }
                }
                this.state = 280;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                    {
                        this.state = 279;
                        this.list_separator();
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
    ThriftParser.prototype.oneway = function () {
        var _localctx = new OnewayContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ThriftParser.RULE_oneway);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                _la = this._input.LA(1);
                if (!(_la === ThriftParser.T__23 || _la === ThriftParser.T__24)) {
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
    ThriftParser.prototype.function_type = function () {
        var _localctx = new Function_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ThriftParser.RULE_function_type);
        try {
            this.state = 286;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ThriftParser.T__27:
                case ThriftParser.T__30:
                case ThriftParser.T__31:
                case ThriftParser.TYPE_BOOL:
                case ThriftParser.TYPE_BYTE:
                case ThriftParser.TYPE_I16:
                case ThriftParser.TYPE_I32:
                case ThriftParser.TYPE_I64:
                case ThriftParser.TYPE_DOUBLE:
                case ThriftParser.TYPE_STRING:
                case ThriftParser.TYPE_BINARY:
                case ThriftParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 284;
                        this.field_type();
                    }
                    break;
                case ThriftParser.T__25:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 285;
                        this.match(ThriftParser.T__25);
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
    ThriftParser.prototype.throws_list = function () {
        var _localctx = new Throws_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ThriftParser.RULE_throws_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this.match(ThriftParser.T__26);
                this.state = 289;
                this.match(ThriftParser.T__21);
                this.state = 293;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
                    {
                        {
                            this.state = 290;
                            this.field();
                        }
                    }
                    this.state = 295;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 296;
                this.match(ThriftParser.T__22);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.type_annotations = function () {
        var _localctx = new Type_annotationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ThriftParser.RULE_type_annotations);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 298;
                this.match(ThriftParser.T__21);
                this.state = 302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ThriftParser.IDENTIFIER) {
                    {
                        {
                            this.state = 299;
                            this.type_annotation();
                        }
                    }
                    this.state = 304;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 305;
                this.match(ThriftParser.T__22);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.type_annotation = function () {
        var _localctx = new Type_annotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ThriftParser.RULE_type_annotation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(ThriftParser.IDENTIFIER);
                this.state = 310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__7) {
                    {
                        this.state = 308;
                        this.match(ThriftParser.T__7);
                        this.state = 309;
                        this.annotation_value();
                    }
                }
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                    {
                        this.state = 312;
                        this.list_separator();
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
    ThriftParser.prototype.annotation_value = function () {
        var _localctx = new Annotation_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ThriftParser.RULE_annotation_value);
        try {
            this.state = 317;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ThriftParser.INTEGER:
                case ThriftParser.HEX_INTEGER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 315;
                        this.integer();
                    }
                    break;
                case ThriftParser.LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 316;
                        this.match(ThriftParser.LITERAL);
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
    ThriftParser.prototype.field_type = function () {
        var _localctx = new Field_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ThriftParser.RULE_field_type);
        try {
            this.state = 322;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ThriftParser.TYPE_BOOL:
                case ThriftParser.TYPE_BYTE:
                case ThriftParser.TYPE_I16:
                case ThriftParser.TYPE_I32:
                case ThriftParser.TYPE_I64:
                case ThriftParser.TYPE_DOUBLE:
                case ThriftParser.TYPE_STRING:
                case ThriftParser.TYPE_BINARY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 319;
                        this.base_type();
                    }
                    break;
                case ThriftParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 320;
                        this.match(ThriftParser.IDENTIFIER);
                    }
                    break;
                case ThriftParser.T__27:
                case ThriftParser.T__30:
                case ThriftParser.T__31:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 321;
                        this.container_type();
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
    ThriftParser.prototype.base_type = function () {
        var _localctx = new Base_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ThriftParser.RULE_base_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this.real_base_type();
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 325;
                        this.type_annotations();
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
    ThriftParser.prototype.container_type = function () {
        var _localctx = new Container_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ThriftParser.RULE_container_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 331;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ThriftParser.T__27:
                        {
                            this.state = 328;
                            this.map_type();
                        }
                        break;
                    case ThriftParser.T__30:
                        {
                            this.state = 329;
                            this.set_type();
                        }
                        break;
                    case ThriftParser.T__31:
                        {
                            this.state = 330;
                            this.list_type();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 334;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__21) {
                    {
                        this.state = 333;
                        this.type_annotations();
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
    ThriftParser.prototype.map_type = function () {
        var _localctx = new Map_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ThriftParser.RULE_map_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.match(ThriftParser.T__27);
                this.state = 338;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__32) {
                    {
                        this.state = 337;
                        this.cpp_type();
                    }
                }
                this.state = 340;
                this.match(ThriftParser.T__28);
                this.state = 341;
                this.field_type();
                this.state = 342;
                this.match(ThriftParser.COMMA);
                this.state = 343;
                this.field_type();
                this.state = 344;
                this.match(ThriftParser.T__29);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.set_type = function () {
        var _localctx = new Set_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ThriftParser.RULE_set_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                this.match(ThriftParser.T__30);
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__32) {
                    {
                        this.state = 347;
                        this.cpp_type();
                    }
                }
                this.state = 350;
                this.match(ThriftParser.T__28);
                this.state = 351;
                this.field_type();
                this.state = 352;
                this.match(ThriftParser.T__29);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.list_type = function () {
        var _localctx = new List_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ThriftParser.RULE_list_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                this.match(ThriftParser.T__31);
                this.state = 355;
                this.match(ThriftParser.T__28);
                this.state = 356;
                this.field_type();
                this.state = 357;
                this.match(ThriftParser.T__29);
                this.state = 359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__32) {
                    {
                        this.state = 358;
                        this.cpp_type();
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
    ThriftParser.prototype.cpp_type = function () {
        var _localctx = new Cpp_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ThriftParser.RULE_cpp_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 361;
                this.match(ThriftParser.T__32);
                this.state = 362;
                this.match(ThriftParser.LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.const_value = function () {
        var _localctx = new Const_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ThriftParser.RULE_const_value);
        try {
            this.state = 370;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ThriftParser.INTEGER:
                case ThriftParser.HEX_INTEGER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 364;
                        this.integer();
                    }
                    break;
                case ThriftParser.DOUBLE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 365;
                        this.match(ThriftParser.DOUBLE);
                    }
                    break;
                case ThriftParser.LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 366;
                        this.match(ThriftParser.LITERAL);
                    }
                    break;
                case ThriftParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 367;
                        this.match(ThriftParser.IDENTIFIER);
                    }
                    break;
                case ThriftParser.T__33:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 368;
                        this.const_list();
                    }
                    break;
                case ThriftParser.T__10:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 369;
                        this.const_map();
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
    ThriftParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ThriftParser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                _la = this._input.LA(1);
                if (!(_la === ThriftParser.INTEGER || _la === ThriftParser.HEX_INTEGER)) {
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
    ThriftParser.prototype.const_list = function () {
        var _localctx = new Const_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ThriftParser.RULE_const_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(ThriftParser.T__33);
                this.state = 381;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ThriftParser.T__10 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ThriftParser.T__33 - 34)) | (1 << (ThriftParser.INTEGER - 34)) | (1 << (ThriftParser.HEX_INTEGER - 34)) | (1 << (ThriftParser.DOUBLE - 34)) | (1 << (ThriftParser.LITERAL - 34)) | (1 << (ThriftParser.IDENTIFIER - 34)))) !== 0)) {
                    {
                        {
                            this.state = 375;
                            this.const_value();
                            this.state = 377;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                                {
                                    this.state = 376;
                                    this.list_separator();
                                }
                            }
                        }
                    }
                    this.state = 383;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 384;
                this.match(ThriftParser.T__34);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.const_map_entry = function () {
        var _localctx = new Const_map_entryContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ThriftParser.RULE_const_map_entry);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this.const_value();
                this.state = 387;
                this.match(ThriftParser.T__18);
                this.state = 388;
                this.const_value();
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
                    {
                        this.state = 389;
                        this.list_separator();
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
    ThriftParser.prototype.const_map = function () {
        var _localctx = new Const_mapContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ThriftParser.RULE_const_map);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                this.match(ThriftParser.T__10);
                this.state = 396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ThriftParser.T__10 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ThriftParser.T__33 - 34)) | (1 << (ThriftParser.INTEGER - 34)) | (1 << (ThriftParser.HEX_INTEGER - 34)) | (1 << (ThriftParser.DOUBLE - 34)) | (1 << (ThriftParser.LITERAL - 34)) | (1 << (ThriftParser.IDENTIFIER - 34)))) !== 0)) {
                    {
                        {
                            this.state = 393;
                            this.const_map_entry();
                        }
                    }
                    this.state = 398;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 399;
                this.match(ThriftParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ThriftParser.prototype.list_separator = function () {
        var _localctx = new List_separatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ThriftParser.RULE_list_separator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 401;
                _la = this._input.LA(1);
                if (!(_la === ThriftParser.T__35 || _la === ThriftParser.COMMA)) {
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
    ThriftParser.prototype.real_base_type = function () {
        var _localctx = new Real_base_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ThriftParser.RULE_real_base_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ThriftParser.TYPE_BOOL - 40)) | (1 << (ThriftParser.TYPE_BYTE - 40)) | (1 << (ThriftParser.TYPE_I16 - 40)) | (1 << (ThriftParser.TYPE_I32 - 40)) | (1 << (ThriftParser.TYPE_I64 - 40)) | (1 << (ThriftParser.TYPE_DOUBLE - 40)) | (1 << (ThriftParser.TYPE_STRING - 40)) | (1 << (ThriftParser.TYPE_BINARY - 40)))) !== 0))) {
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
    Object.defineProperty(ThriftParser, "_ATN", {
        get: function () {
            if (!ThriftParser.__ATN) {
                ThriftParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ThriftParser._serializedATN));
            }
            return ThriftParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ThriftParser.T__0 = 1;
    ThriftParser.T__1 = 2;
    ThriftParser.T__2 = 3;
    ThriftParser.T__3 = 4;
    ThriftParser.T__4 = 5;
    ThriftParser.T__5 = 6;
    ThriftParser.T__6 = 7;
    ThriftParser.T__7 = 8;
    ThriftParser.T__8 = 9;
    ThriftParser.T__9 = 10;
    ThriftParser.T__10 = 11;
    ThriftParser.T__11 = 12;
    ThriftParser.T__12 = 13;
    ThriftParser.T__13 = 14;
    ThriftParser.T__14 = 15;
    ThriftParser.T__15 = 16;
    ThriftParser.T__16 = 17;
    ThriftParser.T__17 = 18;
    ThriftParser.T__18 = 19;
    ThriftParser.T__19 = 20;
    ThriftParser.T__20 = 21;
    ThriftParser.T__21 = 22;
    ThriftParser.T__22 = 23;
    ThriftParser.T__23 = 24;
    ThriftParser.T__24 = 25;
    ThriftParser.T__25 = 26;
    ThriftParser.T__26 = 27;
    ThriftParser.T__27 = 28;
    ThriftParser.T__28 = 29;
    ThriftParser.T__29 = 30;
    ThriftParser.T__30 = 31;
    ThriftParser.T__31 = 32;
    ThriftParser.T__32 = 33;
    ThriftParser.T__33 = 34;
    ThriftParser.T__34 = 35;
    ThriftParser.T__35 = 36;
    ThriftParser.INTEGER = 37;
    ThriftParser.HEX_INTEGER = 38;
    ThriftParser.DOUBLE = 39;
    ThriftParser.TYPE_BOOL = 40;
    ThriftParser.TYPE_BYTE = 41;
    ThriftParser.TYPE_I16 = 42;
    ThriftParser.TYPE_I32 = 43;
    ThriftParser.TYPE_I64 = 44;
    ThriftParser.TYPE_DOUBLE = 45;
    ThriftParser.TYPE_STRING = 46;
    ThriftParser.TYPE_BINARY = 47;
    ThriftParser.LITERAL = 48;
    ThriftParser.IDENTIFIER = 49;
    ThriftParser.COMMA = 50;
    ThriftParser.WS = 51;
    ThriftParser.SL_COMMENT = 52;
    ThriftParser.ML_COMMENT = 53;
    ThriftParser.RULE_document = 0;
    ThriftParser.RULE_header = 1;
    ThriftParser.RULE_include = 2;
    ThriftParser.RULE_namespace = 3;
    ThriftParser.RULE_cpp_include = 4;
    ThriftParser.RULE_definition = 5;
    ThriftParser.RULE_const_rule = 6;
    ThriftParser.RULE_typedef = 7;
    ThriftParser.RULE_enum_rule = 8;
    ThriftParser.RULE_enum_field = 9;
    ThriftParser.RULE_senum = 10;
    ThriftParser.RULE_struct = 11;
    ThriftParser.RULE_union = 12;
    ThriftParser.RULE_exception = 13;
    ThriftParser.RULE_service = 14;
    ThriftParser.RULE_field = 15;
    ThriftParser.RULE_field_id = 16;
    ThriftParser.RULE_field_req = 17;
    ThriftParser.RULE_function = 18;
    ThriftParser.RULE_oneway = 19;
    ThriftParser.RULE_function_type = 20;
    ThriftParser.RULE_throws_list = 21;
    ThriftParser.RULE_type_annotations = 22;
    ThriftParser.RULE_type_annotation = 23;
    ThriftParser.RULE_annotation_value = 24;
    ThriftParser.RULE_field_type = 25;
    ThriftParser.RULE_base_type = 26;
    ThriftParser.RULE_container_type = 27;
    ThriftParser.RULE_map_type = 28;
    ThriftParser.RULE_set_type = 29;
    ThriftParser.RULE_list_type = 30;
    ThriftParser.RULE_cpp_type = 31;
    ThriftParser.RULE_const_value = 32;
    ThriftParser.RULE_integer = 33;
    ThriftParser.RULE_const_list = 34;
    ThriftParser.RULE_const_map_entry = 35;
    ThriftParser.RULE_const_map = 36;
    ThriftParser.RULE_list_separator = 37;
    ThriftParser.RULE_real_base_type = 38;
    // tslint:disable:no-trailing-whitespace
    ThriftParser.ruleNames = [
        "document", "header", "include", "namespace", "cpp_include", "definition",
        "const_rule", "typedef", "enum_rule", "enum_field", "senum", "struct",
        "union", "exception", "service", "field", "field_id", "field_req", "function",
        "oneway", "function_type", "throws_list", "type_annotations", "type_annotation",
        "annotation_value", "field_type", "base_type", "container_type", "map_type",
        "set_type", "list_type", "cpp_type", "const_value", "integer", "const_list",
        "const_map_entry", "const_map", "list_separator", "real_base_type",
    ];
    ThriftParser._LITERAL_NAMES = [
        undefined, "'include'", "'namespace'", "'*'", "'cpp_namespace'", "'php_namespace'",
        "'cpp_include'", "'const'", "'='", "'typedef'", "'enum'", "'{'", "'}'",
        "'senum'", "'struct'", "'union'", "'exception'", "'service'", "'extends'",
        "':'", "'required'", "'optional'", "'('", "')'", "'oneway'", "'async'",
        "'void'", "'throws'", "'map'", "'<'", "'>'", "'set'", "'list'", "'cpp_type'",
        "'['", "']'", "';'", undefined, undefined, undefined, "'bool'", "'byte'",
        "'i16'", "'i32'", "'i64'", "'double'", "'string'", "'binary'", undefined,
        undefined, "','",
    ];
    ThriftParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "INTEGER", "HEX_INTEGER", "DOUBLE", "TYPE_BOOL",
        "TYPE_BYTE", "TYPE_I16", "TYPE_I32", "TYPE_I64", "TYPE_DOUBLE", "TYPE_STRING",
        "TYPE_BINARY", "LITERAL", "IDENTIFIER", "COMMA", "WS", "SL_COMMENT", "ML_COMMENT",
    ];
    ThriftParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ThriftParser._LITERAL_NAMES, ThriftParser._SYMBOLIC_NAMES, []);
    ThriftParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\u0198\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
        "\x02\x0E\x02U\v\x02\x03\x02\x07\x02X\n\x02\f\x02\x0E\x02[\v\x02\x03\x02" +
        "\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03b\n\x03\x03\x04\x03\x04\x03\x04" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x05\x05q\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07~\n\x07\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x05\b\x85\n\b\x03\b\x05\b\x88\n\b\x03\t\x03\t\x03\t\x03" +
        "\t\x05\t\x8E\n\t\x03\n\x03\n\x03\n\x03\n\x07\n\x94\n\n\f\n\x0E\n\x97\v" +
        "\n\x03\n\x03\n\x05\n\x9B\n\n\x03\v\x03\v\x03\v\x05\v\xA0\n\v\x03\v\x05" +
        "\v\xA3\n\v\x03\v\x05\v\xA6\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xAD" +
        "\n\f\x07\f\xAF\n\f\f\f\x0E\f\xB2\v\f\x03\f\x03\f\x05\f\xB6\n\f\x03\r\x03" +
        "\r\x03\r\x03\r\x07\r\xBC\n\r\f\r\x0E\r\xBF\v\r\x03\r\x03\r\x05\r\xC3\n" +
        "\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC9\n\x0E\f\x0E\x0E\x0E\xCC" +
        "\v\x0E\x03\x0E\x03\x0E\x05\x0E\xD0\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x07\x0F\xD6\n\x0F\f\x0F\x0E\x0F\xD9\v\x0F\x03\x0F\x03\x0F\x05\x0F\xDD" +
        "\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xE3\n\x10\x03\x10\x03\x10" +
        "\x07\x10\xE7\n\x10\f\x10\x0E\x10\xEA\v\x10\x03\x10\x03\x10\x05\x10\xEE" +
        "\n\x10\x03\x11\x05\x11\xF1\n\x11\x03\x11\x05\x11\xF4\n\x11\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x05\x11\xFA\n\x11\x03\x11\x05\x11\xFD\n\x11\x03\x11" +
        "\x05\x11\u0100\n\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x05" +
        "\x14\u0108\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u010E\n\x14\f" +
        "\x14\x0E\x14\u0111\v\x14\x03\x14\x03\x14\x05\x14\u0115\n\x14\x03\x14\x05" +
        "\x14\u0118\n\x14\x03\x14\x05\x14\u011B\n\x14\x03\x15\x03\x15\x03\x16\x03" +
        "\x16\x05\x16\u0121\n\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0126\n\x17\f" +
        "\x17\x0E\x17\u0129\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x07\x18\u012F" +
        "\n\x18\f\x18\x0E\x18\u0132\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
        "\x05\x19\u0139\n\x19\x03\x19\x05\x19\u013C\n\x19\x03\x1A\x03\x1A\x05\x1A" +
        "\u0140\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0145\n\x1B\x03\x1C\x03\x1C" +
        "\x05\x1C\u0149\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u014E\n\x1D\x03\x1D" +
        "\x05\x1D\u0151\n\x1D\x03\x1E\x03\x1E\x05\x1E\u0155\n\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u015F\n\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u016A\n \x03" +
        "!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0175\n\"\x03#\x03" +
        "#\x03$\x03$\x03$\x05$\u017C\n$\x07$\u017E\n$\f$\x0E$\u0181\v$\x03$\x03" +
        "$\x03%\x03%\x03%\x03%\x05%\u0189\n%\x03&\x03&\x07&\u018D\n&\f&\x0E&\u0190" +
        "\v&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x02\x02\x02)\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
        "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
        "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
        "L\x02N\x02\x02\b\x03\x0223\x03\x02\x16\x17\x03\x02\x1A\x1B\x03\x02\'(" +
        "\x04\x02&&44\x03\x02*1\x02\u01B4\x02S\x03\x02\x02\x02\x04a\x03\x02\x02" +
        "\x02\x06c\x03\x02\x02\x02\bp\x03\x02\x02\x02\nr\x03\x02\x02\x02\f}\x03" +
        "\x02\x02\x02\x0E\x7F\x03\x02\x02\x02\x10\x89\x03\x02\x02\x02\x12\x8F\x03" +
        "\x02\x02\x02\x14\x9C\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18\xB7\x03" +
        "\x02\x02\x02\x1A\xC4\x03\x02\x02\x02\x1C\xD1\x03\x02\x02\x02\x1E\xDE\x03" +
        "\x02\x02\x02 \xF0\x03\x02\x02\x02\"\u0101\x03\x02\x02\x02$\u0104\x03\x02" +
        "\x02\x02&\u0107\x03\x02\x02\x02(\u011C\x03\x02\x02\x02*\u0120\x03\x02" +
        "\x02\x02,\u0122\x03\x02\x02\x02.\u012C\x03\x02\x02\x020\u0135\x03\x02" +
        "\x02\x022\u013F\x03\x02\x02\x024\u0144\x03\x02\x02\x026\u0146\x03\x02" +
        "\x02\x028\u014D\x03\x02\x02\x02:\u0152\x03\x02\x02\x02<\u015C\x03\x02" +
        "\x02\x02>\u0164\x03\x02\x02\x02@\u016B\x03\x02\x02\x02B\u0174\x03\x02" +
        "\x02\x02D\u0176\x03\x02\x02\x02F\u0178\x03\x02\x02\x02H\u0184\x03\x02" +
        "\x02\x02J\u018A\x03\x02\x02\x02L\u0193\x03\x02\x02\x02N\u0195\x03\x02" +
        "\x02\x02PR\x05\x04\x03\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02" +
        "\x02\x02ST\x03\x02\x02\x02TY\x03\x02\x02\x02US\x03\x02\x02\x02VX\x05\f" +
        "\x07\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02" +
        "\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\x07\x02\x02\x03]\x03" +
        "\x03\x02\x02\x02^b\x05\x06\x04\x02_b\x05\b\x05\x02`b\x05\n\x06\x02a^\x03" +
        "\x02\x02\x02a_\x03\x02\x02\x02a`\x03\x02\x02\x02b\x05\x03\x02\x02\x02" +
        "cd\x07\x03\x02\x02de\x072\x02\x02e\x07\x03\x02\x02\x02fg\x07\x04\x02\x02" +
        "gh\x07\x05\x02\x02hq\t\x02\x02\x02ij\x07\x04\x02\x02jk\x073\x02\x02kq" +
        "\t\x02\x02\x02lm\x07\x06\x02\x02mq\x073\x02\x02no\x07\x07\x02\x02oq\x07" +
        "3\x02\x02pf\x03\x02\x02\x02pi\x03\x02\x02\x02pl\x03\x02\x02\x02pn\x03" +
        "\x02\x02\x02q\t\x03\x02\x02\x02rs\x07\b\x02\x02st\x072\x02\x02t\v\x03" +
        "\x02\x02\x02u~\x05\x0E\b\x02v~\x05\x10\t\x02w~\x05\x12\n\x02x~\x05\x16" +
        "\f\x02y~\x05\x18\r\x02z~\x05\x1A\x0E\x02{~\x05\x1C\x0F\x02|~\x05\x1E\x10" +
        "\x02}u\x03\x02\x02\x02}v\x03\x02\x02\x02}w\x03\x02\x02\x02}x\x03\x02\x02" +
        "\x02}y\x03\x02\x02\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03\x02\x02" +
        "\x02~\r\x03\x02\x02\x02\x7F\x80\x07\t\x02\x02\x80\x81\x054\x1B\x02\x81" +
        "\x84\x073\x02\x02\x82\x83\x07\n\x02\x02\x83\x85\x05B\"\x02\x84\x82\x03" +
        "\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86\x88\x05" +
        "L\'\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x0F\x03\x02" +
        "\x02\x02\x89\x8A\x07\v\x02\x02\x8A\x8B\x054\x1B\x02\x8B\x8D\x073\x02\x02" +
        "\x8C\x8E\x05.\x18\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02" +
        "\x8E\x11\x03\x02\x02\x02\x8F\x90\x07\f\x02\x02\x90\x91\x073\x02\x02\x91" +
        "\x95\x07\r\x02\x02\x92\x94\x05\x14\v\x02\x93\x92\x03\x02\x02\x02\x94\x97" +
        "\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98" +
        "\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x9A\x07\x0E\x02\x02\x99\x9B" +
        "\x05.\x18\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x13" +
        "\x03\x02\x02\x02\x9C\x9F\x073\x02\x02\x9D\x9E\x07\n\x02\x02\x9E\xA0\x05" +
        "D#\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02" +
        "\x02\x02\xA1\xA3\x05.\x18\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02" +
        "\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA6\x05L\'\x02\xA5\xA4\x03\x02\x02" +
        "\x02\xA5\xA6\x03\x02\x02\x02\xA6\x15\x03\x02\x02\x02\xA7\xA8\x07\x0F\x02" +
        "\x02\xA8\xA9\x073\x02\x02\xA9\xB0\x07\r\x02\x02\xAA\xAC\x072\x02\x02\xAB" +
        "\xAD\x05L\'\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF" +
        "\x03\x02\x02\x02\xAE\xAA\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE" +
        "\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0" +
        "\x03\x02\x02\x02\xB3\xB5\x07\x0E\x02\x02\xB4\xB6\x05.\x18\x02\xB5\xB4" +
        "\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\x17\x03\x02\x02\x02\xB7\xB8" +
        "\x07\x10\x02\x02\xB8\xB9\x073\x02\x02\xB9\xBD\x07\r\x02\x02\xBA\xBC\x05" +
        " \x11\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03" +
        "\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBD\x03" +
        "\x02\x02\x02\xC0\xC2\x07\x0E\x02\x02\xC1\xC3\x05.\x18\x02\xC2\xC1\x03" +
        "\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\x19\x03\x02\x02\x02\xC4\xC5\x07" +
        "\x11\x02\x02\xC5\xC6\x073\x02\x02\xC6\xCA\x07\r\x02\x02\xC7\xC9\x05 \x11" +
        "\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02" +
        "\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xCA\x03\x02\x02" +
        "\x02\xCD\xCF\x07\x0E\x02\x02\xCE\xD0\x05.\x18\x02\xCF\xCE\x03\x02\x02" +
        "\x02\xCF\xD0\x03\x02\x02\x02\xD0\x1B\x03\x02\x02\x02\xD1\xD2\x07\x12\x02" +
        "\x02\xD2\xD3\x073\x02\x02\xD3\xD7\x07\r\x02\x02\xD4\xD6\x05 \x11\x02\xD5" +
        "\xD4\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7" +
        "\xD8\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA" +
        "\xDC\x07\x0E\x02\x02\xDB\xDD\x05.\x18\x02\xDC\xDB\x03\x02\x02\x02\xDC" +
        "\xDD\x03\x02\x02\x02\xDD\x1D\x03\x02\x02\x02\xDE\xDF\x07\x13\x02\x02\xDF" +
        "\xE2\x073\x02\x02\xE0\xE1\x07\x14\x02\x02\xE1\xE3\x073\x02\x02\xE2\xE0" +
        "\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE8" +
        "\x07\r\x02\x02\xE5\xE7\x05&\x14\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA\x03" +
        "\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03" +
        "\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xED\x07\x0E\x02\x02\xEC\xEE\x05" +
        ".\x18\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x1F\x03" +
        "\x02\x02\x02\xEF\xF1\x05\"\x12\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03" +
        "\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF4\x05$\x13\x02\xF3\xF2\x03" +
        "\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x05" +
        "4\x1B\x02\xF6\xF9\x073\x02\x02\xF7\xF8\x07\n\x02\x02\xF8\xFA\x05B\"\x02" +
        "\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02" +
        "\xFB\xFD\x05.\x18\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02" +
        "\xFD\xFF\x03\x02\x02\x02\xFE\u0100\x05L\'\x02\xFF\xFE\x03\x02\x02\x02" +
        "\xFF\u0100\x03\x02\x02\x02\u0100!\x03\x02\x02\x02\u0101\u0102\x05D#\x02" +
        "\u0102\u0103\x07\x15\x02\x02\u0103#\x03\x02\x02\x02\u0104\u0105\t\x03" +
        "\x02\x02\u0105%\x03\x02\x02\x02\u0106\u0108\x05(\x15\x02\u0107\u0106\x03" +
        "\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109" +
        "\u010A\x05*\x16\x02\u010A\u010B\x073\x02\x02\u010B\u010F\x07\x18\x02\x02" +
        "\u010C\u010E\x05 \x11\x02\u010D\u010C\x03\x02\x02\x02\u010E\u0111\x03" +
        "\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
        "\u0112\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0114\x07\x19" +
        "\x02\x02\u0113\u0115\x05,\x17\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115" +
        "\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0118\x05.\x18\x02" +
        "\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011A\x03" +
        "\x02\x02\x02\u0119\u011B\x05L\'\x02\u011A\u0119\x03\x02\x02\x02\u011A" +
        "\u011B\x03\x02\x02\x02\u011B\'\x03\x02\x02\x02\u011C\u011D\t\x04\x02\x02" +
        "\u011D)\x03\x02\x02\x02\u011E\u0121\x054\x1B\x02\u011F\u0121\x07\x1C\x02" +
        "\x02\u0120\u011E\x03\x02\x02\x02\u0120\u011F\x03\x02\x02\x02\u0121+\x03" +
        "\x02\x02\x02\u0122\u0123\x07\x1D\x02\x02\u0123\u0127\x07\x18\x02\x02\u0124" +
        "\u0126\x05 \x11\x02\u0125\u0124\x03\x02\x02\x02\u0126\u0129\x03\x02\x02" +
        "\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A" +
        "\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u012B\x07\x19\x02\x02" +
        "\u012B-\x03\x02\x02\x02\u012C\u0130\x07\x18\x02\x02\u012D\u012F\x050\x19" +
        "\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E" +
        "\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02" +
        "\u0132\u0130\x03\x02\x02\x02\u0133\u0134\x07\x19\x02\x02\u0134/\x03\x02" +
        "\x02\x02\u0135\u0138\x073\x02\x02\u0136\u0137\x07\n\x02\x02\u0137\u0139" +
        "\x052\x1A\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
        "\u0139\u013B\x03\x02\x02\x02\u013A\u013C\x05L\'\x02\u013B\u013A\x03\x02" +
        "\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C1\x03\x02\x02\x02\u013D\u0140" +
        "\x05D#\x02\u013E\u0140\x072\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
        "\u013E\x03\x02\x02\x02\u01403\x03\x02\x02\x02\u0141\u0145\x056\x1C\x02" +
        "\u0142\u0145\x073\x02\x02\u0143\u0145\x058\x1D\x02\u0144\u0141\x03\x02" +
        "\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0143\x03\x02\x02\x02\u0145" +
        "5\x03\x02\x02\x02\u0146\u0148\x05N(\x02\u0147\u0149\x05.\x18\x02\u0148" +
        "\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u01497\x03\x02\x02" +
        "\x02\u014A\u014E\x05:\x1E\x02\u014B\u014E\x05<\x1F\x02\u014C\u014E\x05" +
        "> \x02\u014D\u014A\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014C" +
        "\x03\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u0151\x05.\x18\x02" +
        "\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u01519\x03\x02" +
        "\x02\x02\u0152\u0154\x07\x1E\x02\x02\u0153\u0155\x05@!\x02\u0154\u0153" +
        "\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02" +
        "\u0156\u0157\x07\x1F\x02\x02\u0157\u0158\x054\x1B\x02\u0158\u0159\x07" +
        "4\x02\x02\u0159\u015A\x054\x1B\x02\u015A\u015B\x07 \x02\x02\u015B;\x03" +
        "\x02\x02\x02\u015C\u015E\x07!\x02\x02\u015D\u015F\x05@!\x02\u015E\u015D" +
        "\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
        "\u0160\u0161\x07\x1F\x02\x02\u0161\u0162\x054\x1B\x02\u0162\u0163\x07" +
        " \x02\x02\u0163=\x03\x02\x02\x02\u0164\u0165\x07\"\x02\x02\u0165\u0166" +
        "\x07\x1F\x02\x02\u0166\u0167\x054\x1B\x02\u0167\u0169\x07 \x02\x02\u0168" +
        "\u016A\x05@!\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02" +
        "\u016A?\x03\x02\x02\x02\u016B\u016C\x07#\x02\x02\u016C\u016D\x072\x02" +
        "\x02\u016DA\x03\x02\x02\x02\u016E\u0175\x05D#\x02\u016F\u0175\x07)\x02" +
        "\x02\u0170\u0175\x072\x02\x02\u0171\u0175\x073\x02\x02\u0172\u0175\x05" +
        "F$\x02\u0173\u0175\x05J&\x02\u0174\u016E\x03\x02\x02\x02\u0174\u016F\x03" +
        "\x02\x02\x02\u0174\u0170\x03\x02\x02\x02\u0174\u0171\x03\x02\x02\x02\u0174" +
        "\u0172\x03\x02\x02\x02\u0174\u0173\x03\x02\x02\x02\u0175C\x03\x02\x02" +
        "\x02\u0176\u0177\t\x05\x02\x02\u0177E\x03\x02\x02\x02\u0178\u017F\x07" +
        "$\x02\x02\u0179\u017B\x05B\"\x02\u017A\u017C\x05L\'\x02\u017B\u017A\x03" +
        "\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D" +
        "\u0179\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02" +
        "\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181" +
        "\u017F\x03\x02\x02\x02\u0182\u0183\x07%\x02\x02\u0183G\x03\x02\x02\x02" +
        "\u0184\u0185\x05B\"\x02\u0185\u0186\x07\x15\x02\x02\u0186\u0188\x05B\"" +
        "\x02\u0187\u0189\x05L\'\x02\u0188\u0187\x03\x02\x02\x02\u0188\u0189\x03" +
        "\x02\x02\x02\u0189I\x03\x02\x02\x02\u018A\u018E\x07\r\x02\x02\u018B\u018D" +
        "\x05H%\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E" +
        "\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191\x03\x02" +
        "\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0192\x07\x0E\x02\x02\u0192" +
        "K\x03\x02\x02\x02\u0193\u0194\t\x06\x02\x02\u0194M\x03\x02\x02\x02\u0195" +
        "\u0196\t\x07\x02\x02\u0196O\x03\x02\x02\x027SYap}\x84\x87\x8D\x95\x9A" +
        "\x9F\xA2\xA5\xAC\xB0\xB5\xBD\xC2\xCA\xCF\xD7\xDC\xE2\xE8\xED\xF0\xF3\xF9" +
        "\xFC\xFF\u0107\u010F\u0114\u0117\u011A\u0120\u0127\u0130\u0138\u013B\u013F" +
        "\u0144\u0148\u014D\u0150\u0154\u015E\u0169\u0174\u017B\u017F\u0188\u018E";
    return ThriftParser;
}(Parser_1.Parser));
exports.ThriftParser = ThriftParser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.EOF = function () { return this.getToken(ThriftParser.EOF, 0); };
    DocumentContext.prototype.header = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HeaderContext);
        }
        else {
            return this.getRuleContext(i, HeaderContext);
        }
    };
    DocumentContext.prototype.definition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefinitionContext);
        }
        else {
            return this.getRuleContext(i, DefinitionContext);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_document; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DocumentContext.prototype.enterRule = function (listener) {
        if (listener.enterDocument) {
            listener.enterDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.exitRule = function (listener) {
        if (listener.exitDocument) {
            listener.exitDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.accept = function (visitor) {
        if (visitor.visitDocument) {
            return visitor.visitDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DocumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DocumentContext = DocumentContext;
var HeaderContext = /** @class */ (function (_super) {
    __extends(HeaderContext, _super);
    function HeaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HeaderContext.prototype.include = function () {
        return this.tryGetRuleContext(0, IncludeContext);
    };
    HeaderContext.prototype.namespace = function () {
        return this.tryGetRuleContext(0, NamespaceContext);
    };
    HeaderContext.prototype.cpp_include = function () {
        return this.tryGetRuleContext(0, Cpp_includeContext);
    };
    Object.defineProperty(HeaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_header; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HeaderContext.prototype.enterRule = function (listener) {
        if (listener.enterHeader) {
            listener.enterHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.exitRule = function (listener) {
        if (listener.exitHeader) {
            listener.exitHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.accept = function (visitor) {
        if (visitor.visitHeader) {
            return visitor.visitHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HeaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HeaderContext = HeaderContext;
var IncludeContext = /** @class */ (function (_super) {
    __extends(IncludeContext, _super);
    function IncludeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IncludeContext.prototype.LITERAL = function () { return this.getToken(ThriftParser.LITERAL, 0); };
    Object.defineProperty(IncludeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_include; },
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
var NamespaceContext = /** @class */ (function (_super) {
    __extends(NamespaceContext, _super);
    function NamespaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ThriftParser.IDENTIFIER);
        }
        else {
            return this.getToken(ThriftParser.IDENTIFIER, i);
        }
    };
    NamespaceContext.prototype.LITERAL = function () { return this.tryGetToken(ThriftParser.LITERAL, 0); };
    Object.defineProperty(NamespaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_namespace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespace) {
            listener.enterNamespace(this);
        }
    };
    // @Override
    NamespaceContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespace) {
            listener.exitNamespace(this);
        }
    };
    // @Override
    NamespaceContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespace) {
            return visitor.visitNamespace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceContext = NamespaceContext;
var Cpp_includeContext = /** @class */ (function (_super) {
    __extends(Cpp_includeContext, _super);
    function Cpp_includeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cpp_includeContext.prototype.LITERAL = function () { return this.getToken(ThriftParser.LITERAL, 0); };
    Object.defineProperty(Cpp_includeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_cpp_include; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cpp_includeContext.prototype.enterRule = function (listener) {
        if (listener.enterCpp_include) {
            listener.enterCpp_include(this);
        }
    };
    // @Override
    Cpp_includeContext.prototype.exitRule = function (listener) {
        if (listener.exitCpp_include) {
            listener.exitCpp_include(this);
        }
    };
    // @Override
    Cpp_includeContext.prototype.accept = function (visitor) {
        if (visitor.visitCpp_include) {
            return visitor.visitCpp_include(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cpp_includeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cpp_includeContext = Cpp_includeContext;
var DefinitionContext = /** @class */ (function (_super) {
    __extends(DefinitionContext, _super);
    function DefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionContext.prototype.const_rule = function () {
        return this.tryGetRuleContext(0, Const_ruleContext);
    };
    DefinitionContext.prototype.typedef = function () {
        return this.tryGetRuleContext(0, TypedefContext);
    };
    DefinitionContext.prototype.enum_rule = function () {
        return this.tryGetRuleContext(0, Enum_ruleContext);
    };
    DefinitionContext.prototype.senum = function () {
        return this.tryGetRuleContext(0, SenumContext);
    };
    DefinitionContext.prototype.struct = function () {
        return this.tryGetRuleContext(0, StructContext);
    };
    DefinitionContext.prototype.union = function () {
        return this.tryGetRuleContext(0, UnionContext);
    };
    DefinitionContext.prototype.exception = function () {
        return this.tryGetRuleContext(0, ExceptionContext);
    };
    DefinitionContext.prototype.service = function () {
        return this.tryGetRuleContext(0, ServiceContext);
    };
    Object.defineProperty(DefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_definition; },
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
var Const_ruleContext = /** @class */ (function (_super) {
    __extends(Const_ruleContext, _super);
    function Const_ruleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_ruleContext.prototype.field_type = function () {
        return this.getRuleContext(0, Field_typeContext);
    };
    Const_ruleContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    Const_ruleContext.prototype.const_value = function () {
        return this.tryGetRuleContext(0, Const_valueContext);
    };
    Const_ruleContext.prototype.list_separator = function () {
        return this.tryGetRuleContext(0, List_separatorContext);
    };
    Object.defineProperty(Const_ruleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_const_rule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Const_ruleContext.prototype.enterRule = function (listener) {
        if (listener.enterConst_rule) {
            listener.enterConst_rule(this);
        }
    };
    // @Override
    Const_ruleContext.prototype.exitRule = function (listener) {
        if (listener.exitConst_rule) {
            listener.exitConst_rule(this);
        }
    };
    // @Override
    Const_ruleContext.prototype.accept = function (visitor) {
        if (visitor.visitConst_rule) {
            return visitor.visitConst_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Const_ruleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Const_ruleContext = Const_ruleContext;
var TypedefContext = /** @class */ (function (_super) {
    __extends(TypedefContext, _super);
    function TypedefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedefContext.prototype.field_type = function () {
        return this.getRuleContext(0, Field_typeContext);
    };
    TypedefContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    TypedefContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(TypedefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_typedef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedefContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedef) {
            listener.enterTypedef(this);
        }
    };
    // @Override
    TypedefContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedef) {
            listener.exitTypedef(this);
        }
    };
    // @Override
    TypedefContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedef) {
            return visitor.visitTypedef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedefContext = TypedefContext;
var Enum_ruleContext = /** @class */ (function (_super) {
    __extends(Enum_ruleContext, _super);
    function Enum_ruleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_ruleContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    Enum_ruleContext.prototype.enum_field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Enum_fieldContext);
        }
        else {
            return this.getRuleContext(i, Enum_fieldContext);
        }
    };
    Enum_ruleContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(Enum_ruleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_enum_rule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_ruleContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_rule) {
            listener.enterEnum_rule(this);
        }
    };
    // @Override
    Enum_ruleContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_rule) {
            listener.exitEnum_rule(this);
        }
    };
    // @Override
    Enum_ruleContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_rule) {
            return visitor.visitEnum_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_ruleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_ruleContext = Enum_ruleContext;
var Enum_fieldContext = /** @class */ (function (_super) {
    __extends(Enum_fieldContext, _super);
    function Enum_fieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_fieldContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    Enum_fieldContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    Enum_fieldContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Enum_fieldContext.prototype.list_separator = function () {
        return this.tryGetRuleContext(0, List_separatorContext);
    };
    Object.defineProperty(Enum_fieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_enum_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_fieldContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_field) {
            listener.enterEnum_field(this);
        }
    };
    // @Override
    Enum_fieldContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_field) {
            listener.exitEnum_field(this);
        }
    };
    // @Override
    Enum_fieldContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_field) {
            return visitor.visitEnum_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_fieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_fieldContext = Enum_fieldContext;
var SenumContext = /** @class */ (function (_super) {
    __extends(SenumContext, _super);
    function SenumContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SenumContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    SenumContext.prototype.LITERAL = function (i) {
        if (i === undefined) {
            return this.getTokens(ThriftParser.LITERAL);
        }
        else {
            return this.getToken(ThriftParser.LITERAL, i);
        }
    };
    SenumContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    SenumContext.prototype.list_separator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(List_separatorContext);
        }
        else {
            return this.getRuleContext(i, List_separatorContext);
        }
    };
    Object.defineProperty(SenumContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_senum; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SenumContext.prototype.enterRule = function (listener) {
        if (listener.enterSenum) {
            listener.enterSenum(this);
        }
    };
    // @Override
    SenumContext.prototype.exitRule = function (listener) {
        if (listener.exitSenum) {
            listener.exitSenum(this);
        }
    };
    // @Override
    SenumContext.prototype.accept = function (visitor) {
        if (visitor.visitSenum) {
            return visitor.visitSenum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SenumContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SenumContext = SenumContext;
var StructContext = /** @class */ (function (_super) {
    __extends(StructContext, _super);
    function StructContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    StructContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    StructContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(StructContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_struct; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructContext.prototype.enterRule = function (listener) {
        if (listener.enterStruct) {
            listener.enterStruct(this);
        }
    };
    // @Override
    StructContext.prototype.exitRule = function (listener) {
        if (listener.exitStruct) {
            listener.exitStruct(this);
        }
    };
    // @Override
    StructContext.prototype.accept = function (visitor) {
        if (visitor.visitStruct) {
            return visitor.visitStruct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructContext = StructContext;
var UnionContext = /** @class */ (function (_super) {
    __extends(UnionContext, _super);
    function UnionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    UnionContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    UnionContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(UnionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_union; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnion) {
            listener.enterUnion(this);
        }
    };
    // @Override
    UnionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnion) {
            listener.exitUnion(this);
        }
    };
    // @Override
    UnionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnion) {
            return visitor.visitUnion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionContext = UnionContext;
var ExceptionContext = /** @class */ (function (_super) {
    __extends(ExceptionContext, _super);
    function ExceptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptionContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    ExceptionContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    ExceptionContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(ExceptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_exception; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExceptionContext.prototype.enterRule = function (listener) {
        if (listener.enterException) {
            listener.enterException(this);
        }
    };
    // @Override
    ExceptionContext.prototype.exitRule = function (listener) {
        if (listener.exitException) {
            listener.exitException(this);
        }
    };
    // @Override
    ExceptionContext.prototype.accept = function (visitor) {
        if (visitor.visitException) {
            return visitor.visitException(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExceptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExceptionContext = ExceptionContext;
var ServiceContext = /** @class */ (function (_super) {
    __extends(ServiceContext, _super);
    function ServiceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ServiceContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ThriftParser.IDENTIFIER);
        }
        else {
            return this.getToken(ThriftParser.IDENTIFIER, i);
        }
    };
    ServiceContext.prototype.function = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionContext);
        }
        else {
            return this.getRuleContext(i, FunctionContext);
        }
    };
    ServiceContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(ServiceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_service; },
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
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldContext.prototype.field_type = function () {
        return this.getRuleContext(0, Field_typeContext);
    };
    FieldContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    FieldContext.prototype.field_id = function () {
        return this.tryGetRuleContext(0, Field_idContext);
    };
    FieldContext.prototype.field_req = function () {
        return this.tryGetRuleContext(0, Field_reqContext);
    };
    FieldContext.prototype.const_value = function () {
        return this.tryGetRuleContext(0, Const_valueContext);
    };
    FieldContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    FieldContext.prototype.list_separator = function () {
        return this.tryGetRuleContext(0, List_separatorContext);
    };
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_field; },
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
var Field_idContext = /** @class */ (function (_super) {
    __extends(Field_idContext, _super);
    function Field_idContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_idContext.prototype.integer = function () {
        return this.getRuleContext(0, IntegerContext);
    };
    Object.defineProperty(Field_idContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_field_id; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_idContext.prototype.enterRule = function (listener) {
        if (listener.enterField_id) {
            listener.enterField_id(this);
        }
    };
    // @Override
    Field_idContext.prototype.exitRule = function (listener) {
        if (listener.exitField_id) {
            listener.exitField_id(this);
        }
    };
    // @Override
    Field_idContext.prototype.accept = function (visitor) {
        if (visitor.visitField_id) {
            return visitor.visitField_id(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_idContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_idContext = Field_idContext;
var Field_reqContext = /** @class */ (function (_super) {
    __extends(Field_reqContext, _super);
    function Field_reqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Field_reqContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_field_req; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_reqContext.prototype.enterRule = function (listener) {
        if (listener.enterField_req) {
            listener.enterField_req(this);
        }
    };
    // @Override
    Field_reqContext.prototype.exitRule = function (listener) {
        if (listener.exitField_req) {
            listener.exitField_req(this);
        }
    };
    // @Override
    Field_reqContext.prototype.accept = function (visitor) {
        if (visitor.visitField_req) {
            return visitor.visitField_req(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_reqContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_reqContext = Field_reqContext;
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.function_type = function () {
        return this.getRuleContext(0, Function_typeContext);
    };
    FunctionContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    FunctionContext.prototype.oneway = function () {
        return this.tryGetRuleContext(0, OnewayContext);
    };
    FunctionContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    FunctionContext.prototype.throws_list = function () {
        return this.tryGetRuleContext(0, Throws_listContext);
    };
    FunctionContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    FunctionContext.prototype.list_separator = function () {
        return this.tryGetRuleContext(0, List_separatorContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_function; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionContext = FunctionContext;
var OnewayContext = /** @class */ (function (_super) {
    __extends(OnewayContext, _super);
    function OnewayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OnewayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_oneway; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OnewayContext.prototype.enterRule = function (listener) {
        if (listener.enterOneway) {
            listener.enterOneway(this);
        }
    };
    // @Override
    OnewayContext.prototype.exitRule = function (listener) {
        if (listener.exitOneway) {
            listener.exitOneway(this);
        }
    };
    // @Override
    OnewayContext.prototype.accept = function (visitor) {
        if (visitor.visitOneway) {
            return visitor.visitOneway(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OnewayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OnewayContext = OnewayContext;
var Function_typeContext = /** @class */ (function (_super) {
    __extends(Function_typeContext, _super);
    function Function_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_typeContext.prototype.field_type = function () {
        return this.tryGetRuleContext(0, Field_typeContext);
    };
    Object.defineProperty(Function_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_function_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_type) {
            listener.enterFunction_type(this);
        }
    };
    // @Override
    Function_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_type) {
            listener.exitFunction_type(this);
        }
    };
    // @Override
    Function_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_type) {
            return visitor.visitFunction_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_typeContext = Function_typeContext;
var Throws_listContext = /** @class */ (function (_super) {
    __extends(Throws_listContext, _super);
    function Throws_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Throws_listContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    Object.defineProperty(Throws_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_throws_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Throws_listContext.prototype.enterRule = function (listener) {
        if (listener.enterThrows_list) {
            listener.enterThrows_list(this);
        }
    };
    // @Override
    Throws_listContext.prototype.exitRule = function (listener) {
        if (listener.exitThrows_list) {
            listener.exitThrows_list(this);
        }
    };
    // @Override
    Throws_listContext.prototype.accept = function (visitor) {
        if (visitor.visitThrows_list) {
            return visitor.visitThrows_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Throws_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Throws_listContext = Throws_listContext;
var Type_annotationsContext = /** @class */ (function (_super) {
    __extends(Type_annotationsContext, _super);
    function Type_annotationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_annotationsContext.prototype.type_annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_annotationContext);
        }
        else {
            return this.getRuleContext(i, Type_annotationContext);
        }
    };
    Object.defineProperty(Type_annotationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_type_annotations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_annotationsContext.prototype.enterRule = function (listener) {
        if (listener.enterType_annotations) {
            listener.enterType_annotations(this);
        }
    };
    // @Override
    Type_annotationsContext.prototype.exitRule = function (listener) {
        if (listener.exitType_annotations) {
            listener.exitType_annotations(this);
        }
    };
    // @Override
    Type_annotationsContext.prototype.accept = function (visitor) {
        if (visitor.visitType_annotations) {
            return visitor.visitType_annotations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_annotationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_annotationsContext = Type_annotationsContext;
var Type_annotationContext = /** @class */ (function (_super) {
    __extends(Type_annotationContext, _super);
    function Type_annotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_annotationContext.prototype.IDENTIFIER = function () { return this.getToken(ThriftParser.IDENTIFIER, 0); };
    Type_annotationContext.prototype.annotation_value = function () {
        return this.tryGetRuleContext(0, Annotation_valueContext);
    };
    Type_annotationContext.prototype.list_separator = function () {
        return this.tryGetRuleContext(0, List_separatorContext);
    };
    Object.defineProperty(Type_annotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_type_annotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_annotationContext.prototype.enterRule = function (listener) {
        if (listener.enterType_annotation) {
            listener.enterType_annotation(this);
        }
    };
    // @Override
    Type_annotationContext.prototype.exitRule = function (listener) {
        if (listener.exitType_annotation) {
            listener.exitType_annotation(this);
        }
    };
    // @Override
    Type_annotationContext.prototype.accept = function (visitor) {
        if (visitor.visitType_annotation) {
            return visitor.visitType_annotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_annotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_annotationContext = Type_annotationContext;
var Annotation_valueContext = /** @class */ (function (_super) {
    __extends(Annotation_valueContext, _super);
    function Annotation_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Annotation_valueContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    Annotation_valueContext.prototype.LITERAL = function () { return this.tryGetToken(ThriftParser.LITERAL, 0); };
    Object.defineProperty(Annotation_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_annotation_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Annotation_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation_value) {
            listener.enterAnnotation_value(this);
        }
    };
    // @Override
    Annotation_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation_value) {
            listener.exitAnnotation_value(this);
        }
    };
    // @Override
    Annotation_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation_value) {
            return visitor.visitAnnotation_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Annotation_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Annotation_valueContext = Annotation_valueContext;
var Field_typeContext = /** @class */ (function (_super) {
    __extends(Field_typeContext, _super);
    function Field_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_typeContext.prototype.base_type = function () {
        return this.tryGetRuleContext(0, Base_typeContext);
    };
    Field_typeContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ThriftParser.IDENTIFIER, 0); };
    Field_typeContext.prototype.container_type = function () {
        return this.tryGetRuleContext(0, Container_typeContext);
    };
    Object.defineProperty(Field_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_field_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterField_type) {
            listener.enterField_type(this);
        }
    };
    // @Override
    Field_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitField_type) {
            listener.exitField_type(this);
        }
    };
    // @Override
    Field_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitField_type) {
            return visitor.visitField_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_typeContext = Field_typeContext;
var Base_typeContext = /** @class */ (function (_super) {
    __extends(Base_typeContext, _super);
    function Base_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Base_typeContext.prototype.real_base_type = function () {
        return this.getRuleContext(0, Real_base_typeContext);
    };
    Base_typeContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(Base_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_base_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Base_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterBase_type) {
            listener.enterBase_type(this);
        }
    };
    // @Override
    Base_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitBase_type) {
            listener.exitBase_type(this);
        }
    };
    // @Override
    Base_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitBase_type) {
            return visitor.visitBase_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Base_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Base_typeContext = Base_typeContext;
var Container_typeContext = /** @class */ (function (_super) {
    __extends(Container_typeContext, _super);
    function Container_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Container_typeContext.prototype.map_type = function () {
        return this.tryGetRuleContext(0, Map_typeContext);
    };
    Container_typeContext.prototype.set_type = function () {
        return this.tryGetRuleContext(0, Set_typeContext);
    };
    Container_typeContext.prototype.list_type = function () {
        return this.tryGetRuleContext(0, List_typeContext);
    };
    Container_typeContext.prototype.type_annotations = function () {
        return this.tryGetRuleContext(0, Type_annotationsContext);
    };
    Object.defineProperty(Container_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_container_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Container_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterContainer_type) {
            listener.enterContainer_type(this);
        }
    };
    // @Override
    Container_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitContainer_type) {
            listener.exitContainer_type(this);
        }
    };
    // @Override
    Container_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitContainer_type) {
            return visitor.visitContainer_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Container_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Container_typeContext = Container_typeContext;
var Map_typeContext = /** @class */ (function (_super) {
    __extends(Map_typeContext, _super);
    function Map_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Map_typeContext.prototype.field_type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Field_typeContext);
        }
        else {
            return this.getRuleContext(i, Field_typeContext);
        }
    };
    Map_typeContext.prototype.COMMA = function () { return this.getToken(ThriftParser.COMMA, 0); };
    Map_typeContext.prototype.cpp_type = function () {
        return this.tryGetRuleContext(0, Cpp_typeContext);
    };
    Object.defineProperty(Map_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_map_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Map_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterMap_type) {
            listener.enterMap_type(this);
        }
    };
    // @Override
    Map_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitMap_type) {
            listener.exitMap_type(this);
        }
    };
    // @Override
    Map_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitMap_type) {
            return visitor.visitMap_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Map_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Map_typeContext = Map_typeContext;
var Set_typeContext = /** @class */ (function (_super) {
    __extends(Set_typeContext, _super);
    function Set_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Set_typeContext.prototype.field_type = function () {
        return this.getRuleContext(0, Field_typeContext);
    };
    Set_typeContext.prototype.cpp_type = function () {
        return this.tryGetRuleContext(0, Cpp_typeContext);
    };
    Object.defineProperty(Set_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_set_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Set_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterSet_type) {
            listener.enterSet_type(this);
        }
    };
    // @Override
    Set_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitSet_type) {
            listener.exitSet_type(this);
        }
    };
    // @Override
    Set_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitSet_type) {
            return visitor.visitSet_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Set_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Set_typeContext = Set_typeContext;
var List_typeContext = /** @class */ (function (_super) {
    __extends(List_typeContext, _super);
    function List_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    List_typeContext.prototype.field_type = function () {
        return this.getRuleContext(0, Field_typeContext);
    };
    List_typeContext.prototype.cpp_type = function () {
        return this.tryGetRuleContext(0, Cpp_typeContext);
    };
    Object.defineProperty(List_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_list_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    List_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterList_type) {
            listener.enterList_type(this);
        }
    };
    // @Override
    List_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitList_type) {
            listener.exitList_type(this);
        }
    };
    // @Override
    List_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitList_type) {
            return visitor.visitList_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return List_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.List_typeContext = List_typeContext;
var Cpp_typeContext = /** @class */ (function (_super) {
    __extends(Cpp_typeContext, _super);
    function Cpp_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cpp_typeContext.prototype.LITERAL = function () { return this.getToken(ThriftParser.LITERAL, 0); };
    Object.defineProperty(Cpp_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_cpp_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cpp_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterCpp_type) {
            listener.enterCpp_type(this);
        }
    };
    // @Override
    Cpp_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitCpp_type) {
            listener.exitCpp_type(this);
        }
    };
    // @Override
    Cpp_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitCpp_type) {
            return visitor.visitCpp_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cpp_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cpp_typeContext = Cpp_typeContext;
var Const_valueContext = /** @class */ (function (_super) {
    __extends(Const_valueContext, _super);
    function Const_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_valueContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    Const_valueContext.prototype.DOUBLE = function () { return this.tryGetToken(ThriftParser.DOUBLE, 0); };
    Const_valueContext.prototype.LITERAL = function () { return this.tryGetToken(ThriftParser.LITERAL, 0); };
    Const_valueContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ThriftParser.IDENTIFIER, 0); };
    Const_valueContext.prototype.const_list = function () {
        return this.tryGetRuleContext(0, Const_listContext);
    };
    Const_valueContext.prototype.const_map = function () {
        return this.tryGetRuleContext(0, Const_mapContext);
    };
    Object.defineProperty(Const_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_const_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Const_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterConst_value) {
            listener.enterConst_value(this);
        }
    };
    // @Override
    Const_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitConst_value) {
            listener.exitConst_value(this);
        }
    };
    // @Override
    Const_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitConst_value) {
            return visitor.visitConst_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Const_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Const_valueContext = Const_valueContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.INTEGER = function () { return this.tryGetToken(ThriftParser.INTEGER, 0); };
    IntegerContext.prototype.HEX_INTEGER = function () { return this.tryGetToken(ThriftParser.HEX_INTEGER, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_integer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerContext.prototype.enterRule = function (listener) {
        if (listener.enterInteger) {
            listener.enterInteger(this);
        }
    };
    // @Override
    IntegerContext.prototype.exitRule = function (listener) {
        if (listener.exitInteger) {
            listener.exitInteger(this);
        }
    };
    // @Override
    IntegerContext.prototype.accept = function (visitor) {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerContext = IntegerContext;
var Const_listContext = /** @class */ (function (_super) {
    __extends(Const_listContext, _super);
    function Const_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_listContext.prototype.const_value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Const_valueContext);
        }
        else {
            return this.getRuleContext(i, Const_valueContext);
        }
    };
    Const_listContext.prototype.list_separator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(List_separatorContext);
        }
        else {
            return this.getRuleContext(i, List_separatorContext);
        }
    };
    Object.defineProperty(Const_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_const_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Const_listContext.prototype.enterRule = function (listener) {
        if (listener.enterConst_list) {
            listener.enterConst_list(this);
        }
    };
    // @Override
    Const_listContext.prototype.exitRule = function (listener) {
        if (listener.exitConst_list) {
            listener.exitConst_list(this);
        }
    };
    // @Override
    Const_listContext.prototype.accept = function (visitor) {
        if (visitor.visitConst_list) {
            return visitor.visitConst_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Const_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Const_listContext = Const_listContext;
var Const_map_entryContext = /** @class */ (function (_super) {
    __extends(Const_map_entryContext, _super);
    function Const_map_entryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_map_entryContext.prototype.const_value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Const_valueContext);
        }
        else {
            return this.getRuleContext(i, Const_valueContext);
        }
    };
    Const_map_entryContext.prototype.list_separator = function () {
        return this.tryGetRuleContext(0, List_separatorContext);
    };
    Object.defineProperty(Const_map_entryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_const_map_entry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Const_map_entryContext.prototype.enterRule = function (listener) {
        if (listener.enterConst_map_entry) {
            listener.enterConst_map_entry(this);
        }
    };
    // @Override
    Const_map_entryContext.prototype.exitRule = function (listener) {
        if (listener.exitConst_map_entry) {
            listener.exitConst_map_entry(this);
        }
    };
    // @Override
    Const_map_entryContext.prototype.accept = function (visitor) {
        if (visitor.visitConst_map_entry) {
            return visitor.visitConst_map_entry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Const_map_entryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Const_map_entryContext = Const_map_entryContext;
var Const_mapContext = /** @class */ (function (_super) {
    __extends(Const_mapContext, _super);
    function Const_mapContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_mapContext.prototype.const_map_entry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Const_map_entryContext);
        }
        else {
            return this.getRuleContext(i, Const_map_entryContext);
        }
    };
    Object.defineProperty(Const_mapContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_const_map; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Const_mapContext.prototype.enterRule = function (listener) {
        if (listener.enterConst_map) {
            listener.enterConst_map(this);
        }
    };
    // @Override
    Const_mapContext.prototype.exitRule = function (listener) {
        if (listener.exitConst_map) {
            listener.exitConst_map(this);
        }
    };
    // @Override
    Const_mapContext.prototype.accept = function (visitor) {
        if (visitor.visitConst_map) {
            return visitor.visitConst_map(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Const_mapContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Const_mapContext = Const_mapContext;
var List_separatorContext = /** @class */ (function (_super) {
    __extends(List_separatorContext, _super);
    function List_separatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    List_separatorContext.prototype.COMMA = function () { return this.getToken(ThriftParser.COMMA, 0); };
    Object.defineProperty(List_separatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_list_separator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    List_separatorContext.prototype.enterRule = function (listener) {
        if (listener.enterList_separator) {
            listener.enterList_separator(this);
        }
    };
    // @Override
    List_separatorContext.prototype.exitRule = function (listener) {
        if (listener.exitList_separator) {
            listener.exitList_separator(this);
        }
    };
    // @Override
    List_separatorContext.prototype.accept = function (visitor) {
        if (visitor.visitList_separator) {
            return visitor.visitList_separator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return List_separatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.List_separatorContext = List_separatorContext;
var Real_base_typeContext = /** @class */ (function (_super) {
    __extends(Real_base_typeContext, _super);
    function Real_base_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Real_base_typeContext.prototype.TYPE_BOOL = function () { return this.tryGetToken(ThriftParser.TYPE_BOOL, 0); };
    Real_base_typeContext.prototype.TYPE_BYTE = function () { return this.tryGetToken(ThriftParser.TYPE_BYTE, 0); };
    Real_base_typeContext.prototype.TYPE_I16 = function () { return this.tryGetToken(ThriftParser.TYPE_I16, 0); };
    Real_base_typeContext.prototype.TYPE_I32 = function () { return this.tryGetToken(ThriftParser.TYPE_I32, 0); };
    Real_base_typeContext.prototype.TYPE_I64 = function () { return this.tryGetToken(ThriftParser.TYPE_I64, 0); };
    Real_base_typeContext.prototype.TYPE_DOUBLE = function () { return this.tryGetToken(ThriftParser.TYPE_DOUBLE, 0); };
    Real_base_typeContext.prototype.TYPE_STRING = function () { return this.tryGetToken(ThriftParser.TYPE_STRING, 0); };
    Real_base_typeContext.prototype.TYPE_BINARY = function () { return this.tryGetToken(ThriftParser.TYPE_BINARY, 0); };
    Object.defineProperty(Real_base_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ThriftParser.RULE_real_base_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Real_base_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterReal_base_type) {
            listener.enterReal_base_type(this);
        }
    };
    // @Override
    Real_base_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitReal_base_type) {
            listener.exitReal_base_type(this);
        }
    };
    // @Override
    Real_base_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitReal_base_type) {
            return visitor.visitReal_base_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Real_base_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Real_base_typeContext = Real_base_typeContext;
