"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/capnproto/CapnProto.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var CapnProtoParser = /** @class */ (function (_super) {
    __extends(CapnProtoParser, _super);
    function CapnProtoParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CapnProtoParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CapnProtoParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CapnProtoParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CapnProtoParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "CapnProto.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CapnProtoParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CapnProtoParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CapnProtoParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CapnProtoParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    CapnProtoParser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CapnProtoParser.RULE_document);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this.file_identifier();
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__1) {
                    {
                        {
                            this.state = 65;
                            this.using_import();
                        }
                    }
                    this.state = 70;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 72;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__5) {
                    {
                        this.state = 71;
                        this.namespace();
                    }
                }
                this.state = 77;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CapnProtoParser.T__9 - 10)) | (1 << (CapnProtoParser.T__12 - 10)) | (1 << (CapnProtoParser.T__16 - 10)) | (1 << (CapnProtoParser.T__24 - 10)) | (1 << (CapnProtoParser.T__25 - 10)) | (1 << (CapnProtoParser.NAME - 10)))) !== 0)) {
                    {
                        {
                            this.state = 74;
                            this.document_content();
                        }
                    }
                    this.state = 79;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 80;
                this.match(CapnProtoParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.file_identifier = function () {
        var _localctx = new File_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CapnProtoParser.RULE_file_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.match(CapnProtoParser.FILE_ID);
                this.state = 83;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.using_import = function () {
        var _localctx = new Using_importContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CapnProtoParser.RULE_using_import);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this.match(CapnProtoParser.T__1);
                this.state = 88;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.NAME) {
                    {
                        this.state = 86;
                        this.match(CapnProtoParser.NAME);
                        this.state = 87;
                        this.match(CapnProtoParser.T__2);
                    }
                }
                this.state = 90;
                this.match(CapnProtoParser.T__3);
                this.state = 91;
                this.match(CapnProtoParser.TEXT);
                this.state = 94;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__4) {
                    {
                        this.state = 92;
                        this.match(CapnProtoParser.T__4);
                        this.state = 93;
                        this.match(CapnProtoParser.NAME);
                    }
                }
                this.state = 96;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.namespace = function () {
        var _localctx = new NamespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CapnProtoParser.RULE_namespace);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.match(CapnProtoParser.T__5);
                this.state = 99;
                this.match(CapnProtoParser.NAME);
                this.state = 100;
                this.match(CapnProtoParser.T__6);
                this.state = 101;
                this.match(CapnProtoParser.T__7);
                this.state = 102;
                this.match(CapnProtoParser.TEXT);
                this.state = 103;
                this.match(CapnProtoParser.T__8);
                this.state = 104;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.document_content = function () {
        var _localctx = new Document_contentContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CapnProtoParser.RULE_document_content);
        try {
            this.state = 112;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CapnProtoParser.T__9:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 106;
                        this.struct_def();
                    }
                    break;
                case CapnProtoParser.T__12:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 107;
                        this.interface_def();
                    }
                    break;
                case CapnProtoParser.NAME:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 108;
                        this.function_def();
                    }
                    break;
                case CapnProtoParser.T__24:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 109;
                        this.annotation_def();
                    }
                    break;
                case CapnProtoParser.T__25:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 110;
                        this.const_def();
                    }
                    break;
                case CapnProtoParser.T__16:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 111;
                        this.enum_def();
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
    CapnProtoParser.prototype.struct_def = function () {
        var _localctx = new Struct_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CapnProtoParser.RULE_struct_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this.match(CapnProtoParser.T__9);
                this.state = 115;
                this.type();
                this.state = 117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__5) {
                    {
                        this.state = 116;
                        this.annotation_reference();
                    }
                }
                this.state = 119;
                this.match(CapnProtoParser.T__10);
                this.state = 123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CapnProtoParser.T__1) | (1 << CapnProtoParser.T__9) | (1 << CapnProtoParser.T__12) | (1 << CapnProtoParser.T__16) | (1 << CapnProtoParser.T__19) | (1 << CapnProtoParser.T__24) | (1 << CapnProtoParser.T__25))) !== 0) || _la === CapnProtoParser.NAME) {
                    {
                        {
                            this.state = 120;
                            this.struct_content();
                        }
                    }
                    this.state = 125;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 126;
                this.match(CapnProtoParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.struct_content = function () {
        var _localctx = new Struct_contentContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CapnProtoParser.RULE_struct_content);
        try {
            this.state = 138;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 128;
                        this.field_def();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 129;
                        this.enum_def();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 130;
                        this.named_union_def();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 131;
                        this.unnamed_union_def();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 132;
                        this.interface_def();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 133;
                        this.annotation_def();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 134;
                        this.struct_def();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 135;
                        this.group_def();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 136;
                        this.const_def();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 137;
                        this.inner_using();
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
    CapnProtoParser.prototype.interface_def = function () {
        var _localctx = new Interface_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CapnProtoParser.RULE_interface_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(CapnProtoParser.T__12);
                this.state = 141;
                this.type();
                this.state = 147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__13) {
                    {
                        this.state = 142;
                        this.match(CapnProtoParser.T__13);
                        this.state = 143;
                        this.match(CapnProtoParser.T__7);
                        this.state = 144;
                        this.type();
                        this.state = 145;
                        this.match(CapnProtoParser.T__8);
                    }
                }
                this.state = 149;
                this.match(CapnProtoParser.T__10);
                this.state = 153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CapnProtoParser.T__9 - 10)) | (1 << (CapnProtoParser.T__12 - 10)) | (1 << (CapnProtoParser.T__16 - 10)) | (1 << (CapnProtoParser.T__19 - 10)) | (1 << (CapnProtoParser.NAME - 10)))) !== 0)) {
                    {
                        {
                            this.state = 150;
                            this.interface_content();
                        }
                    }
                    this.state = 155;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 156;
                this.match(CapnProtoParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.interface_content = function () {
        var _localctx = new Interface_contentContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CapnProtoParser.RULE_interface_content);
        try {
            this.state = 165;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 158;
                        this.field_def();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 159;
                        this.enum_def();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 160;
                        this.named_union_def();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 161;
                        this.unnamed_union_def();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 162;
                        this.interface_def();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 163;
                        this.struct_def();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 164;
                        this.function_def();
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
    CapnProtoParser.prototype.field_def = function () {
        var _localctx = new Field_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CapnProtoParser.RULE_field_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(CapnProtoParser.NAME);
                this.state = 168;
                this.match(CapnProtoParser.LOCATOR);
                this.state = 169;
                this.match(CapnProtoParser.T__14);
                this.state = 170;
                this.type();
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__2) {
                    {
                        this.state = 171;
                        this.match(CapnProtoParser.T__2);
                        this.state = 172;
                        this.const_value();
                    }
                }
                this.state = 175;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CapnProtoParser.RULE_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 177;
                this.match(CapnProtoParser.NAME);
                this.state = 179;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 178;
                            this.inner_type();
                        }
                        break;
                }
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__4) {
                    {
                        this.state = 181;
                        this.match(CapnProtoParser.T__4);
                        this.state = 182;
                        this.type();
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
    CapnProtoParser.prototype.inner_type = function () {
        var _localctx = new Inner_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CapnProtoParser.RULE_inner_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this.match(CapnProtoParser.T__7);
                this.state = 186;
                this.type();
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__7) {
                    {
                        this.state = 187;
                        this.inner_type();
                    }
                }
                this.state = 197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__15) {
                    {
                        {
                            this.state = 190;
                            this.match(CapnProtoParser.T__15);
                            this.state = 191;
                            this.type();
                            this.state = 193;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CapnProtoParser.T__7) {
                                {
                                    this.state = 192;
                                    this.inner_type();
                                }
                            }
                        }
                    }
                    this.state = 199;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 200;
                this.match(CapnProtoParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.enum_def = function () {
        var _localctx = new Enum_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CapnProtoParser.RULE_enum_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(CapnProtoParser.T__16);
                this.state = 203;
                this.match(CapnProtoParser.NAME);
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__5) {
                    {
                        this.state = 204;
                        this.annotation_reference();
                    }
                }
                this.state = 207;
                this.match(CapnProtoParser.T__10);
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.NAME) {
                    {
                        {
                            this.state = 208;
                            this.enum_content();
                        }
                    }
                    this.state = 213;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 214;
                this.match(CapnProtoParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.annotation_reference = function () {
        var _localctx = new Annotation_referenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CapnProtoParser.RULE_annotation_reference);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(CapnProtoParser.T__5);
                this.state = 217;
                this.type();
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__17) {
                    {
                        this.state = 218;
                        this.match(CapnProtoParser.T__17);
                    }
                }
                this.state = 221;
                this.match(CapnProtoParser.T__7);
                this.state = 222;
                this.match(CapnProtoParser.TEXT);
                this.state = 223;
                this.match(CapnProtoParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.enum_content = function () {
        var _localctx = new Enum_contentContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CapnProtoParser.RULE_enum_content);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 225;
                this.match(CapnProtoParser.NAME);
                this.state = 226;
                this.match(CapnProtoParser.LOCATOR);
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__5) {
                    {
                        this.state = 227;
                        this.annotation_reference();
                    }
                }
                this.state = 230;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.named_union_def = function () {
        var _localctx = new Named_union_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CapnProtoParser.RULE_named_union_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(CapnProtoParser.NAME);
                this.state = 234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.LOCATOR) {
                    {
                        this.state = 233;
                        this.match(CapnProtoParser.LOCATOR);
                    }
                }
                this.state = 236;
                this.match(CapnProtoParser.T__18);
                this.state = 237;
                this.match(CapnProtoParser.T__10);
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__19 || _la === CapnProtoParser.NAME) {
                    {
                        {
                            this.state = 238;
                            this.union_content();
                        }
                    }
                    this.state = 243;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 244;
                this.match(CapnProtoParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.unnamed_union_def = function () {
        var _localctx = new Unnamed_union_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CapnProtoParser.RULE_unnamed_union_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.match(CapnProtoParser.T__19);
                this.state = 247;
                this.match(CapnProtoParser.T__10);
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__19 || _la === CapnProtoParser.NAME) {
                    {
                        {
                            this.state = 248;
                            this.union_content();
                        }
                    }
                    this.state = 253;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 254;
                this.match(CapnProtoParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.union_content = function () {
        var _localctx = new Union_contentContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CapnProtoParser.RULE_union_content);
        try {
            this.state = 260;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 256;
                        this.field_def();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 257;
                        this.group_def();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 258;
                        this.unnamed_union_def();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 259;
                        this.named_union_def();
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
    CapnProtoParser.prototype.group_def = function () {
        var _localctx = new Group_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CapnProtoParser.RULE_group_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.match(CapnProtoParser.NAME);
                this.state = 263;
                this.match(CapnProtoParser.T__20);
                this.state = 264;
                this.match(CapnProtoParser.T__10);
                this.state = 268;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__19 || _la === CapnProtoParser.NAME) {
                    {
                        {
                            this.state = 265;
                            this.group_content();
                        }
                    }
                    this.state = 270;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 271;
                this.match(CapnProtoParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.group_content = function () {
        var _localctx = new Group_contentContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CapnProtoParser.RULE_group_content);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 273;
                        this.field_def();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 274;
                        this.unnamed_union_def();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 275;
                        this.named_union_def();
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
    CapnProtoParser.prototype.function_def = function () {
        var _localctx = new Function_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CapnProtoParser.RULE_function_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.match(CapnProtoParser.NAME);
                this.state = 280;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.LOCATOR) {
                    {
                        this.state = 279;
                        this.match(CapnProtoParser.LOCATOR);
                    }
                }
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__22) {
                    {
                        this.state = 282;
                        this.generic_type_parameters();
                    }
                }
                this.state = 287;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CapnProtoParser.T__7:
                        {
                            this.state = 285;
                            this.function_parameters();
                        }
                        break;
                    case CapnProtoParser.NAME:
                        {
                            this.state = 286;
                            this.type();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__21) {
                    {
                        this.state = 289;
                        this.match(CapnProtoParser.T__21);
                        this.state = 292;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CapnProtoParser.T__7:
                                {
                                    this.state = 290;
                                    this.function_parameters();
                                }
                                break;
                            case CapnProtoParser.NAME:
                                {
                                    this.state = 291;
                                    this.type();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                }
                this.state = 296;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.generic_type_parameters = function () {
        var _localctx = new Generic_type_parametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CapnProtoParser.RULE_generic_type_parameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 298;
                this.match(CapnProtoParser.T__22);
                this.state = 299;
                this.match(CapnProtoParser.NAME);
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__15) {
                    {
                        {
                            this.state = 300;
                            this.match(CapnProtoParser.T__15);
                            this.state = 301;
                            this.match(CapnProtoParser.NAME);
                        }
                    }
                    this.state = 306;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 307;
                this.match(CapnProtoParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.function_parameters = function () {
        var _localctx = new Function_parametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CapnProtoParser.RULE_function_parameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(CapnProtoParser.T__7);
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.NAME) {
                    {
                        this.state = 310;
                        this.match(CapnProtoParser.NAME);
                        this.state = 311;
                        this.match(CapnProtoParser.T__14);
                        this.state = 312;
                        this.type();
                        this.state = 315;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CapnProtoParser.T__2) {
                            {
                                this.state = 313;
                                this.match(CapnProtoParser.T__2);
                                this.state = 314;
                                this.const_value();
                            }
                        }
                        this.state = 327;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CapnProtoParser.T__15) {
                            {
                                {
                                    this.state = 317;
                                    this.match(CapnProtoParser.T__15);
                                    this.state = 318;
                                    this.match(CapnProtoParser.NAME);
                                    this.state = 319;
                                    this.match(CapnProtoParser.T__14);
                                    this.state = 320;
                                    this.type();
                                    this.state = 323;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === CapnProtoParser.T__2) {
                                        {
                                            this.state = 321;
                                            this.match(CapnProtoParser.T__2);
                                            this.state = 322;
                                            this.const_value();
                                        }
                                    }
                                }
                            }
                            this.state = 329;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 332;
                this.match(CapnProtoParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.annotation_def = function () {
        var _localctx = new Annotation_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CapnProtoParser.RULE_annotation_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                this.match(CapnProtoParser.T__24);
                this.state = 335;
                this.type();
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__7) {
                    {
                        this.state = 336;
                        this.annotation_parameters();
                    }
                }
                this.state = 339;
                this.match(CapnProtoParser.T__14);
                this.state = 340;
                this.type();
                this.state = 341;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.annotation_parameters = function () {
        var _localctx = new Annotation_parametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CapnProtoParser.RULE_annotation_parameters);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 343;
                this.match(CapnProtoParser.T__7);
                this.state = 344;
                this.match(CapnProtoParser.T__9);
                this.state = 345;
                this.match(CapnProtoParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.const_def = function () {
        var _localctx = new Const_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CapnProtoParser.RULE_const_def);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(CapnProtoParser.T__25);
                this.state = 348;
                this.match(CapnProtoParser.NAME);
                this.state = 349;
                this.match(CapnProtoParser.T__14);
                this.state = 350;
                this.type();
                this.state = 351;
                this.match(CapnProtoParser.T__2);
                this.state = 352;
                this.const_value();
                this.state = 353;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.const_value = function () {
        var _localctx = new Const_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, CapnProtoParser.RULE_const_value);
        var _la;
        try {
            this.state = 375;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CapnProtoParser.T__4:
                case CapnProtoParser.T__26:
                case CapnProtoParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 356;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CapnProtoParser.T__26) {
                            {
                                this.state = 355;
                                this.match(CapnProtoParser.T__26);
                            }
                        }
                        this.state = 359;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CapnProtoParser.T__4) {
                            {
                                this.state = 358;
                                this.match(CapnProtoParser.T__4);
                            }
                        }
                        this.state = 361;
                        this.match(CapnProtoParser.NAME);
                        this.state = 364;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CapnProtoParser.T__4) {
                            {
                                this.state = 362;
                                this.match(CapnProtoParser.T__4);
                                this.state = 363;
                                this.match(CapnProtoParser.NAME);
                            }
                        }
                    }
                    break;
                case CapnProtoParser.INTEGER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 366;
                        this.match(CapnProtoParser.INTEGER);
                    }
                    break;
                case CapnProtoParser.FLOAT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 367;
                        this.match(CapnProtoParser.FLOAT);
                    }
                    break;
                case CapnProtoParser.TEXT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 368;
                        this.match(CapnProtoParser.TEXT);
                    }
                    break;
                case CapnProtoParser.BOOLEAN:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 369;
                        this.match(CapnProtoParser.BOOLEAN);
                    }
                    break;
                case CapnProtoParser.HEXADECIMAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 370;
                        this.match(CapnProtoParser.HEXADECIMAL);
                    }
                    break;
                case CapnProtoParser.VOID:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 371;
                        this.match(CapnProtoParser.VOID);
                    }
                    break;
                case CapnProtoParser.T__22:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 372;
                        this.literal_list();
                    }
                    break;
                case CapnProtoParser.T__7:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 373;
                        this.literal_union();
                    }
                    break;
                case CapnProtoParser.T__27:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 374;
                        this.literal_bytes();
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
    CapnProtoParser.prototype.literal_union = function () {
        var _localctx = new Literal_unionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CapnProtoParser.RULE_literal_union);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.match(CapnProtoParser.T__7);
                this.state = 378;
                this.match(CapnProtoParser.NAME);
                this.state = 379;
                this.match(CapnProtoParser.T__2);
                this.state = 380;
                this.union_mapping();
                this.state = 387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__15) {
                    {
                        {
                            this.state = 381;
                            this.match(CapnProtoParser.T__15);
                            this.state = 382;
                            this.match(CapnProtoParser.NAME);
                            this.state = 383;
                            this.match(CapnProtoParser.T__2);
                            this.state = 384;
                            this.union_mapping();
                        }
                    }
                    this.state = 389;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 390;
                this.match(CapnProtoParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.literal_list = function () {
        var _localctx = new Literal_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, CapnProtoParser.RULE_literal_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                this.match(CapnProtoParser.T__22);
                this.state = 393;
                this.const_value();
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__15) {
                    {
                        {
                            this.state = 394;
                            this.match(CapnProtoParser.T__15);
                            this.state = 395;
                            this.const_value();
                        }
                    }
                    this.state = 400;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 401;
                this.match(CapnProtoParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.literal_bytes = function () {
        var _localctx = new Literal_bytesContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, CapnProtoParser.RULE_literal_bytes);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.match(CapnProtoParser.T__27);
                this.state = 404;
                this.match(CapnProtoParser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CapnProtoParser.prototype.union_mapping = function () {
        var _localctx = new Union_mappingContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CapnProtoParser.RULE_union_mapping);
        try {
            this.state = 413;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 406;
                        this.match(CapnProtoParser.T__7);
                        this.state = 407;
                        this.match(CapnProtoParser.NAME);
                        this.state = 408;
                        this.match(CapnProtoParser.T__2);
                        this.state = 409;
                        this.const_value();
                        this.state = 410;
                        this.match(CapnProtoParser.T__8);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 412;
                        this.const_value();
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
    CapnProtoParser.prototype.inner_using = function () {
        var _localctx = new Inner_usingContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, CapnProtoParser.RULE_inner_using);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.match(CapnProtoParser.T__1);
                this.state = 416;
                this.match(CapnProtoParser.NAME);
                this.state = 421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CapnProtoParser.T__4) {
                    {
                        {
                            this.state = 417;
                            this.match(CapnProtoParser.T__4);
                            this.state = 418;
                            this.match(CapnProtoParser.NAME);
                        }
                    }
                    this.state = 423;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 426;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CapnProtoParser.T__2) {
                    {
                        this.state = 424;
                        this.match(CapnProtoParser.T__2);
                        this.state = 425;
                        this.type();
                    }
                }
                this.state = 428;
                this.match(CapnProtoParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(CapnProtoParser, "_ATN", {
        get: function () {
            if (!CapnProtoParser.__ATN) {
                CapnProtoParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CapnProtoParser._serializedATN));
            }
            return CapnProtoParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    CapnProtoParser.T__0 = 1;
    CapnProtoParser.T__1 = 2;
    CapnProtoParser.T__2 = 3;
    CapnProtoParser.T__3 = 4;
    CapnProtoParser.T__4 = 5;
    CapnProtoParser.T__5 = 6;
    CapnProtoParser.T__6 = 7;
    CapnProtoParser.T__7 = 8;
    CapnProtoParser.T__8 = 9;
    CapnProtoParser.T__9 = 10;
    CapnProtoParser.T__10 = 11;
    CapnProtoParser.T__11 = 12;
    CapnProtoParser.T__12 = 13;
    CapnProtoParser.T__13 = 14;
    CapnProtoParser.T__14 = 15;
    CapnProtoParser.T__15 = 16;
    CapnProtoParser.T__16 = 17;
    CapnProtoParser.T__17 = 18;
    CapnProtoParser.T__18 = 19;
    CapnProtoParser.T__19 = 20;
    CapnProtoParser.T__20 = 21;
    CapnProtoParser.T__21 = 22;
    CapnProtoParser.T__22 = 23;
    CapnProtoParser.T__23 = 24;
    CapnProtoParser.T__24 = 25;
    CapnProtoParser.T__25 = 26;
    CapnProtoParser.T__26 = 27;
    CapnProtoParser.T__27 = 28;
    CapnProtoParser.LOCATOR = 29;
    CapnProtoParser.TEXT = 30;
    CapnProtoParser.INTEGER = 31;
    CapnProtoParser.FLOAT = 32;
    CapnProtoParser.HEXADECIMAL = 33;
    CapnProtoParser.FILE_ID = 34;
    CapnProtoParser.BOOLEAN = 35;
    CapnProtoParser.VOID = 36;
    CapnProtoParser.NAME = 37;
    CapnProtoParser.COMMENT = 38;
    CapnProtoParser.WHITESPACE = 39;
    CapnProtoParser.RULE_document = 0;
    CapnProtoParser.RULE_file_identifier = 1;
    CapnProtoParser.RULE_using_import = 2;
    CapnProtoParser.RULE_namespace = 3;
    CapnProtoParser.RULE_document_content = 4;
    CapnProtoParser.RULE_struct_def = 5;
    CapnProtoParser.RULE_struct_content = 6;
    CapnProtoParser.RULE_interface_def = 7;
    CapnProtoParser.RULE_interface_content = 8;
    CapnProtoParser.RULE_field_def = 9;
    CapnProtoParser.RULE_type = 10;
    CapnProtoParser.RULE_inner_type = 11;
    CapnProtoParser.RULE_enum_def = 12;
    CapnProtoParser.RULE_annotation_reference = 13;
    CapnProtoParser.RULE_enum_content = 14;
    CapnProtoParser.RULE_named_union_def = 15;
    CapnProtoParser.RULE_unnamed_union_def = 16;
    CapnProtoParser.RULE_union_content = 17;
    CapnProtoParser.RULE_group_def = 18;
    CapnProtoParser.RULE_group_content = 19;
    CapnProtoParser.RULE_function_def = 20;
    CapnProtoParser.RULE_generic_type_parameters = 21;
    CapnProtoParser.RULE_function_parameters = 22;
    CapnProtoParser.RULE_annotation_def = 23;
    CapnProtoParser.RULE_annotation_parameters = 24;
    CapnProtoParser.RULE_const_def = 25;
    CapnProtoParser.RULE_const_value = 26;
    CapnProtoParser.RULE_literal_union = 27;
    CapnProtoParser.RULE_literal_list = 28;
    CapnProtoParser.RULE_literal_bytes = 29;
    CapnProtoParser.RULE_union_mapping = 30;
    CapnProtoParser.RULE_inner_using = 31;
    // tslint:disable:no-trailing-whitespace
    CapnProtoParser.ruleNames = [
        "document", "file_identifier", "using_import", "namespace", "document_content",
        "struct_def", "struct_content", "interface_def", "interface_content",
        "field_def", "type", "inner_type", "enum_def", "annotation_reference",
        "enum_content", "named_union_def", "unnamed_union_def", "union_content",
        "group_def", "group_content", "function_def", "generic_type_parameters",
        "function_parameters", "annotation_def", "annotation_parameters", "const_def",
        "const_value", "literal_union", "literal_list", "literal_bytes", "union_mapping",
        "inner_using",
    ];
    CapnProtoParser._LITERAL_NAMES = [
        undefined, "';'", "'using'", "'='", "'import'", "'.'", "'$'", "'.namespace'",
        "'('", "')'", "'struct'", "'{'", "'}'", "'interface'", "'extends'", "':'",
        "','", "'enum'", "'.ann'", "':union'", "'union'", "':group'", "'->'",
        "'['", "']'", "'annotation'", "'const'", "'-'", "'0x'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'void'",
    ];
    CapnProtoParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "LOCATOR", "TEXT", "INTEGER", "FLOAT", "HEXADECIMAL", "FILE_ID",
        "BOOLEAN", "VOID", "NAME", "COMMENT", "WHITESPACE",
    ];
    CapnProtoParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CapnProtoParser._LITERAL_NAMES, CapnProtoParser._SYMBOLIC_NAMES, []);
    CapnProtoParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\u01B1\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x03\x02" +
        "\x07\x02E\n\x02\f\x02\x0E\x02H\v\x02\x03\x02\x05\x02K\n\x02\x03\x02\x07" +
        "\x02N\n\x02\f\x02\x0E\x02Q\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
        "\x03\x04\x03\x04\x03\x04\x05\x04[\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x05\x04a\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x05\x06s\n\x06\x03\x07\x03\x07\x03\x07\x05\x07x\n\x07\x03\x07\x03\x07" +
        "\x07\x07|\n\x07\f\x07\x0E\x07\x7F\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x8D\n\b\x03\t\x03\t" +
        "\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x96\n\t\x03\t\x03\t\x07\t\x9A\n\t" +
        "\f\t\x0E\t\x9D\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x05\n\xA8\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB0\n\v\x03" +
        "\v\x03\v\x03\f\x03\f\x05\f\xB6\n\f\x03\f\x03\f\x05\f\xBA\n\f\x03\r\x03" +
        "\r\x03\r\x05\r\xBF\n\r\x03\r\x03\r\x03\r\x05\r\xC4\n\r\x07\r\xC6\n\r\f" +
        "\r\x0E\r\xC9\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD0\n\x0E" +
        "\x03\x0E\x03\x0E\x07\x0E\xD4\n\x0E\f\x0E\x0E\x0E\xD7\v\x0E\x03\x0E\x03" +
        "\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xDE\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xE7\n\x10\x03\x10\x03\x10\x03" +
        "\x11\x03\x11\x05\x11\xED\n\x11\x03\x11\x03\x11\x03\x11\x07\x11\xF2\n\x11" +
        "\f\x11\x0E\x11\xF5\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12" +
        "\xFC\n\x12\f\x12\x0E\x12\xFF\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x05\x13\u0107\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
        "\u010D\n\x14\f\x14\x0E\x14\u0110\v\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
        "\x03\x15\x05\x15\u0117\n\x15\x03\x16\x03\x16\x05\x16\u011B\n\x16\x03\x16" +
        "\x05\x16\u011E\n\x16\x03\x16\x03\x16\x05\x16\u0122\n\x16\x03\x16\x03\x16" +
        "\x03\x16\x05\x16\u0127\n\x16\x05\x16\u0129\n\x16\x03\x16\x03\x16\x03\x17" +
        "\x03\x17\x03\x17\x03\x17\x07\x17\u0131\n\x17\f\x17\x0E\x17\u0134\v\x17" +
        "\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
        "\u013E\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0146" +
        "\n\x18\x07\x18\u0148\n\x18\f\x18\x0E\x18\u014B\v\x18\x05\x18\u014D\n\x18" +
        "\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0154\n\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u0167\n\x1C" +
        "\x03\x1C\x05\x1C\u016A\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u016F\n\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x05\x1C\u017A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x07\x1D\u0184\n\x1D\f\x1D\x0E\x1D\u0187\v\x1D\x03\x1D\x03" +
        "\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u018F\n\x1E\f\x1E\x0E\x1E" +
        "\u0192\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x05 \u01A0\n \x03!\x03!\x03!\x03!\x07!\u01A6\n!\f!\x0E" +
        "!\u01A9\v!\x03!\x03!\x05!\u01AD\n!\x03!\x03!\x03!\x02\x02\x02\"\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
        "\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
        ".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02\x02\x02\x02\u01DC\x02" +
        "B\x03\x02\x02\x02\x04T\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bd\x03\x02" +
        "\x02\x02\nr\x03\x02\x02\x02\ft\x03\x02\x02\x02\x0E\x8C\x03\x02\x02\x02" +
        "\x10\x8E\x03\x02\x02\x02\x12\xA7\x03\x02\x02\x02\x14\xA9\x03\x02\x02\x02" +
        "\x16\xB3\x03\x02\x02\x02\x18\xBB\x03\x02\x02\x02\x1A\xCC\x03\x02\x02\x02" +
        "\x1C\xDA\x03\x02\x02\x02\x1E\xE3\x03\x02\x02\x02 \xEA\x03\x02\x02\x02" +
        "\"\xF8\x03\x02\x02\x02$\u0106\x03\x02\x02\x02&\u0108\x03\x02\x02\x02(" +
        "\u0116\x03\x02\x02\x02*\u0118\x03\x02\x02\x02,\u012C\x03\x02\x02\x02." +
        "\u0137\x03\x02\x02\x020\u0150\x03\x02\x02\x022\u0159\x03\x02\x02\x024" +
        "\u015D\x03\x02\x02\x026\u0179\x03\x02\x02\x028\u017B\x03\x02\x02\x02:" +
        "\u018A\x03\x02\x02\x02<\u0195\x03\x02\x02\x02>\u019F\x03\x02\x02\x02@" +
        "\u01A1\x03\x02\x02\x02BF\x05\x04\x03\x02CE\x05\x06\x04\x02DC\x03\x02\x02" +
        "\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GJ\x03\x02\x02" +
        "\x02HF\x03\x02\x02\x02IK\x05\b\x05\x02JI\x03\x02\x02\x02JK\x03\x02\x02" +
        "\x02KO\x03\x02\x02\x02LN\x05\n\x06\x02ML\x03\x02\x02\x02NQ\x03\x02\x02" +
        "\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02" +
        "\x02RS\x07\x02\x02\x03S\x03\x03\x02\x02\x02TU\x07$\x02\x02UV\x07\x03\x02" +
        "\x02V\x05\x03\x02\x02\x02WZ\x07\x04\x02\x02XY\x07\'\x02\x02Y[\x07\x05" +
        "\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07" +
        "\x06\x02\x02]`\x07 \x02\x02^_\x07\x07\x02\x02_a\x07\'\x02\x02`^\x03\x02" +
        "\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07\x03\x02\x02c\x07\x03" +
        "\x02\x02\x02de\x07\b\x02\x02ef\x07\'\x02\x02fg\x07\t\x02\x02gh\x07\n\x02" +
        "\x02hi\x07 \x02\x02ij\x07\v\x02\x02jk\x07\x03\x02\x02k\t\x03\x02\x02\x02" +
        "ls\x05\f\x07\x02ms\x05\x10\t\x02ns\x05*\x16\x02os\x050\x19\x02ps\x054" +
        "\x1B\x02qs\x05\x1A\x0E\x02rl\x03\x02\x02\x02rm\x03\x02\x02\x02rn\x03\x02" +
        "\x02\x02ro\x03\x02\x02\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\v\x03" +
        "\x02\x02\x02tu\x07\f\x02\x02uw\x05\x16\f\x02vx\x05\x1C\x0F\x02wv\x03\x02" +
        "\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x07\r\x02\x02z|\x05\x0E" +
        "\b\x02{z\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03" +
        "\x02\x02\x02~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x07\x0E" +
        "\x02\x02\x81\r\x03\x02\x02\x02\x82\x8D\x05\x14\v\x02\x83\x8D\x05\x1A\x0E" +
        "\x02\x84\x8D\x05 \x11\x02\x85\x8D\x05\"\x12\x02\x86\x8D\x05\x10\t\x02" +
        "\x87\x8D\x050\x19\x02\x88\x8D\x05\f\x07\x02\x89\x8D\x05&\x14\x02\x8A\x8D" +
        "\x054\x1B\x02\x8B\x8D\x05@!\x02\x8C\x82\x03\x02\x02\x02\x8C\x83\x03\x02" +
        "\x02\x02\x8C\x84\x03\x02\x02\x02\x8C\x85\x03\x02\x02\x02\x8C\x86\x03\x02" +
        "\x02\x02\x8C\x87\x03\x02\x02\x02\x8C\x88\x03\x02\x02\x02\x8C\x89\x03\x02" +
        "\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x0F\x03\x02" +
        "\x02\x02\x8E\x8F\x07\x0F\x02\x02\x8F\x95\x05\x16\f\x02\x90\x91\x07\x10" +
        "\x02\x02\x91\x92\x07\n\x02\x02\x92\x93\x05\x16\f\x02\x93\x94\x07\v\x02" +
        "\x02\x94\x96\x03\x02\x02\x02\x95\x90\x03\x02\x02\x02\x95\x96\x03\x02\x02" +
        "\x02\x96\x97\x03\x02\x02\x02\x97\x9B\x07\r\x02\x02\x98\x9A\x05\x12\n\x02" +
        "\x99\x98\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02" +
        "\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02" +
        "\x9E\x9F\x07\x0E\x02\x02\x9F\x11\x03\x02\x02\x02\xA0\xA8\x05\x14\v\x02" +
        "\xA1\xA8\x05\x1A\x0E\x02\xA2\xA8\x05 \x11\x02\xA3\xA8\x05\"\x12\x02\xA4" +
        "\xA8\x05\x10\t\x02\xA5\xA8\x05\f\x07\x02\xA6\xA8\x05*\x16\x02\xA7\xA0" +
        "\x03\x02\x02\x02\xA7\xA1\x03\x02\x02\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA3" +
        "\x03\x02\x02\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6" +
        "\x03\x02\x02\x02\xA8\x13\x03\x02\x02\x02\xA9\xAA\x07\'\x02\x02\xAA\xAB" +
        "\x07\x1F\x02\x02\xAB\xAC\x07\x11\x02\x02\xAC\xAF\x05\x16\f\x02\xAD\xAE" +
        "\x07\x05\x02\x02\xAE\xB0\x056\x1C\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0" +
        "\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x07\x03\x02\x02\xB2\x15" +
        "\x03\x02\x02\x02\xB3\xB5\x07\'\x02\x02\xB4\xB6\x05\x18\r\x02\xB5\xB4\x03" +
        "\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB8\x07" +
        "\x07\x02\x02\xB8\xBA\x05\x16\f\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03" +
        "\x02\x02\x02\xBA\x17\x03\x02\x02\x02\xBB\xBC\x07\n\x02\x02\xBC\xBE\x05" +
        "\x16\f\x02\xBD\xBF\x05\x18\r\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02" +
        "\x02\x02\xBF\xC7\x03\x02\x02\x02\xC0\xC1\x07\x12\x02\x02\xC1\xC3\x05\x16" +
        "\f\x02\xC2\xC4\x05\x18\r\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02" +
        "\x02\xC4\xC6\x03\x02\x02\x02\xC5\xC0\x03\x02\x02\x02\xC6\xC9\x03\x02\x02" +
        "\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x03\x02\x02" +
        "\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCB\x07\v\x02\x02\xCB\x19\x03\x02\x02" +
        "\x02\xCC\xCD\x07\x13\x02\x02\xCD\xCF\x07\'\x02\x02\xCE\xD0\x05\x1C\x0F" +
        "\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02" +
        "\x02\xD1\xD5\x07\r\x02\x02\xD2\xD4\x05\x1E\x10\x02\xD3\xD2\x03\x02\x02" +
        "\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02" +
        "\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xD9\x07\x0E\x02" +
        "\x02\xD9\x1B\x03\x02\x02\x02\xDA\xDB\x07\b\x02\x02\xDB\xDD\x05\x16\f\x02" +
        "\xDC\xDE\x07\x14\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02" +
        "\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07\n\x02\x02\xE0\xE1\x07 \x02\x02\xE1" +
        "\xE2\x07\v\x02\x02\xE2\x1D\x03\x02\x02\x02\xE3\xE4\x07\'\x02\x02\xE4\xE6" +
        "\x07\x1F\x02\x02\xE5\xE7\x05\x1C\x0F\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7" +
        "\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x07\x03\x02\x02\xE9\x1F" +
        "\x03\x02\x02\x02\xEA\xEC\x07\'\x02\x02\xEB\xED\x07\x1F\x02\x02\xEC\xEB" +
        "\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF" +
        "\x07\x15\x02\x02\xEF\xF3\x07\r\x02\x02\xF0\xF2\x05$\x13\x02\xF1\xF0\x03" +
        "\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03" +
        "\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x07" +
        "\x0E\x02\x02\xF7!\x03\x02\x02\x02\xF8\xF9\x07\x16\x02\x02\xF9\xFD\x07" +
        "\r\x02\x02\xFA\xFC\x05$\x13\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02" +
        "\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03" +
        "\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101\x07\x0E\x02\x02\u0101" +
        "#\x03\x02\x02\x02\u0102\u0107\x05\x14\v\x02\u0103\u0107\x05&\x14\x02\u0104" +
        "\u0107\x05\"\x12\x02\u0105\u0107\x05 \x11\x02\u0106\u0102\x03\x02\x02" +
        "\x02\u0106\u0103\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0105" +
        "\x03\x02\x02\x02\u0107%\x03\x02\x02\x02\u0108\u0109\x07\'\x02\x02\u0109" +
        "\u010A\x07\x17\x02\x02\u010A\u010E\x07\r\x02\x02\u010B\u010D\x05(\x15" +
        "\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C" +
        "\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02\x02\x02" +
        "\u0110\u010E\x03\x02\x02\x02\u0111\u0112\x07\x0E\x02\x02\u0112\'\x03\x02" +
        "\x02\x02\u0113\u0117\x05\x14\v\x02\u0114\u0117\x05\"\x12\x02\u0115\u0117" +
        "\x05 \x11\x02\u0116\u0113\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02" +
        "\u0116\u0115\x03\x02\x02\x02\u0117)\x03\x02\x02\x02\u0118\u011A\x07\'" +
        "\x02\x02\u0119\u011B\x07\x1F\x02\x02\u011A\u0119\x03\x02\x02\x02\u011A" +
        "\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u011E\x05,\x17" +
        "\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0121" +
        "\x03\x02\x02\x02\u011F\u0122\x05.\x18\x02\u0120\u0122\x05\x16\f\x02\u0121" +
        "\u011F\x03\x02\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0128\x03\x02" +
        "\x02\x02\u0123\u0126\x07\x18\x02\x02\u0124\u0127\x05.\x18\x02\u0125\u0127" +
        "\x05\x16\f\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0125\x03\x02\x02\x02" +
        "\u0127\u0129\x03\x02\x02\x02\u0128\u0123\x03\x02\x02\x02\u0128\u0129\x03" +
        "\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x07\x03\x02\x02\u012B" +
        "+\x03\x02\x02\x02\u012C\u012D\x07\x19\x02\x02\u012D\u0132\x07\'\x02\x02" +
        "\u012E\u012F\x07\x12\x02\x02\u012F\u0131\x07\'\x02\x02\u0130\u012E\x03" +
        "\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132" +
        "\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0132\x03\x02" +
        "\x02\x02\u0135\u0136\x07\x1A\x02\x02\u0136-\x03\x02\x02\x02\u0137\u014C" +
        "\x07\n\x02\x02\u0138\u0139\x07\'\x02\x02\u0139\u013A\x07\x11\x02\x02\u013A" +
        "\u013D\x05\x16\f\x02\u013B\u013C\x07\x05\x02\x02\u013C\u013E\x056\x1C" +
        "\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0149" +
        "\x03\x02\x02\x02\u013F\u0140\x07\x12\x02\x02\u0140\u0141\x07\'\x02\x02" +
        "\u0141\u0142\x07\x11\x02\x02\u0142\u0145\x05\x16\f\x02\u0143\u0144\x07" +
        "\x05\x02\x02\u0144\u0146\x056\x1C\x02\u0145\u0143\x03\x02\x02\x02\u0145" +
        "\u0146\x03\x02\x02\x02\u0146\u0148\x03\x02\x02\x02\u0147\u013F\x03\x02" +
        "\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149" +
        "\u014A\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02" +
        "\x02\x02\u014C\u0138\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D" +
        "\u014E\x03\x02\x02\x02\u014E\u014F\x07\v\x02\x02\u014F/\x03\x02\x02\x02" +
        "\u0150\u0151\x07\x1B\x02\x02\u0151\u0153\x05\x16\f\x02\u0152\u0154\x05" +
        "2\x1A\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
        "\u0155\x03\x02\x02\x02\u0155\u0156\x07\x11\x02\x02\u0156\u0157\x05\x16" +
        "\f\x02\u0157\u0158\x07\x03\x02\x02\u01581\x03\x02\x02\x02\u0159\u015A" +
        "\x07\n\x02\x02\u015A\u015B\x07\f\x02\x02\u015B\u015C\x07\v\x02\x02\u015C" +
        "3\x03\x02\x02\x02\u015D\u015E\x07\x1C\x02\x02\u015E\u015F\x07\'\x02\x02" +
        "\u015F\u0160\x07\x11\x02\x02\u0160\u0161\x05\x16\f\x02\u0161\u0162\x07" +
        "\x05\x02\x02\u0162\u0163\x056\x1C\x02\u0163\u0164\x07\x03\x02\x02\u0164" +
        "5\x03\x02\x02\x02\u0165\u0167\x07\x1D\x02\x02\u0166\u0165\x03\x02\x02" +
        "\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u016A" +
        "\x07\x07\x02\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02" +
        "\u016A\u016B\x03\x02\x02\x02\u016B\u016E\x07\'\x02\x02\u016C\u016D\x07" +
        "\x07\x02\x02\u016D\u016F\x07\'\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E" +
        "\u016F\x03\x02\x02\x02\u016F\u017A\x03\x02\x02\x02\u0170\u017A\x07!\x02" +
        "\x02\u0171\u017A\x07\"\x02\x02\u0172\u017A\x07 \x02\x02\u0173\u017A\x07" +
        "%\x02\x02\u0174\u017A\x07#\x02\x02\u0175\u017A\x07&\x02\x02\u0176\u017A" +
        "\x05:\x1E\x02\u0177\u017A\x058\x1D\x02\u0178\u017A\x05<\x1F\x02\u0179" +
        "\u0166\x03\x02\x02\x02\u0179\u0170\x03\x02\x02\x02\u0179\u0171\x03\x02" +
        "\x02\x02\u0179\u0172\x03\x02\x02\x02\u0179\u0173\x03\x02\x02\x02\u0179" +
        "\u0174\x03\x02\x02\x02\u0179\u0175\x03\x02\x02\x02\u0179\u0176\x03\x02" +
        "\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A" +
        "7\x03\x02\x02\x02\u017B\u017C\x07\n\x02\x02\u017C\u017D\x07\'\x02\x02" +
        "\u017D\u017E\x07\x05\x02\x02\u017E\u0185\x05> \x02\u017F\u0180\x07\x12" +
        "\x02\x02\u0180\u0181\x07\'\x02\x02\u0181\u0182\x07\x05\x02\x02\u0182\u0184" +
        "\x05> \x02\u0183\u017F\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
        "\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03\x02" +
        "\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07\v\x02\x02\u01899" +
        "\x03\x02\x02\x02\u018A\u018B\x07\x19\x02\x02\u018B\u0190\x056\x1C\x02" +
        "\u018C\u018D\x07\x12\x02\x02\u018D\u018F\x056\x1C\x02\u018E\u018C\x03" +
        "\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190" +
        "\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0190\x03\x02" +
        "\x02\x02\u0193\u0194\x07\x1A\x02\x02\u0194;\x03\x02\x02\x02\u0195\u0196" +
        "\x07\x1E\x02\x02\u0196\u0197\x07 \x02\x02\u0197=\x03\x02\x02\x02\u0198" +
        "\u0199\x07\n\x02\x02\u0199\u019A\x07\'\x02\x02\u019A\u019B\x07\x05\x02" +
        "\x02\u019B\u019C\x056\x1C\x02\u019C\u019D\x07\v\x02\x02\u019D\u01A0\x03" +
        "\x02\x02\x02\u019E\u01A0\x056\x1C\x02\u019F\u0198\x03\x02\x02\x02\u019F" +
        "\u019E\x03\x02\x02\x02\u01A0?\x03\x02\x02\x02\u01A1\u01A2\x07\x04\x02" +
        "\x02\u01A2\u01A7\x07\'\x02\x02\u01A3\u01A4\x07\x07\x02\x02\u01A4\u01A6" +
        "\x07\'\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02" +
        "\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AC\x03" +
        "\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07\x05\x02\x02\u01AB" +
        "\u01AD\x05\x16\f\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02" +
        "\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x07\x03\x02\x02\u01AFA\x03" +
        "\x02\x02\x022FJOZ`rw}\x8C\x95\x9B\xA7\xAF\xB5\xB9\xBE\xC3\xC7\xCF\xD5" +
        "\xDD\xE6\xEC\xF3\xFD\u0106\u010E\u0116\u011A\u011D\u0121\u0126\u0128\u0132" +
        "\u013D\u0145\u0149\u014C\u0153\u0166\u0169\u016E\u0179\u0185\u0190\u019F" +
        "\u01A7\u01AC";
    return CapnProtoParser;
}(Parser_1.Parser));
exports.CapnProtoParser = CapnProtoParser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.file_identifier = function () {
        return this.getRuleContext(0, File_identifierContext);
    };
    DocumentContext.prototype.EOF = function () { return this.getToken(CapnProtoParser.EOF, 0); };
    DocumentContext.prototype.using_import = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Using_importContext);
        }
        else {
            return this.getRuleContext(i, Using_importContext);
        }
    };
    DocumentContext.prototype.namespace = function () {
        return this.tryGetRuleContext(0, NamespaceContext);
    };
    DocumentContext.prototype.document_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Document_contentContext);
        }
        else {
            return this.getRuleContext(i, Document_contentContext);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_document; },
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
var File_identifierContext = /** @class */ (function (_super) {
    __extends(File_identifierContext, _super);
    function File_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    File_identifierContext.prototype.FILE_ID = function () { return this.getToken(CapnProtoParser.FILE_ID, 0); };
    Object.defineProperty(File_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_file_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    File_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterFile_identifier) {
            listener.enterFile_identifier(this);
        }
    };
    // @Override
    File_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitFile_identifier) {
            listener.exitFile_identifier(this);
        }
    };
    // @Override
    File_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitFile_identifier) {
            return visitor.visitFile_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return File_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.File_identifierContext = File_identifierContext;
var Using_importContext = /** @class */ (function (_super) {
    __extends(Using_importContext, _super);
    function Using_importContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Using_importContext.prototype.TEXT = function () { return this.getToken(CapnProtoParser.TEXT, 0); };
    Using_importContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CapnProtoParser.NAME);
        }
        else {
            return this.getToken(CapnProtoParser.NAME, i);
        }
    };
    Object.defineProperty(Using_importContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_using_import; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Using_importContext.prototype.enterRule = function (listener) {
        if (listener.enterUsing_import) {
            listener.enterUsing_import(this);
        }
    };
    // @Override
    Using_importContext.prototype.exitRule = function (listener) {
        if (listener.exitUsing_import) {
            listener.exitUsing_import(this);
        }
    };
    // @Override
    Using_importContext.prototype.accept = function (visitor) {
        if (visitor.visitUsing_import) {
            return visitor.visitUsing_import(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Using_importContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Using_importContext = Using_importContext;
var NamespaceContext = /** @class */ (function (_super) {
    __extends(NamespaceContext, _super);
    function NamespaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    NamespaceContext.prototype.TEXT = function () { return this.getToken(CapnProtoParser.TEXT, 0); };
    Object.defineProperty(NamespaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_namespace; },
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
var Document_contentContext = /** @class */ (function (_super) {
    __extends(Document_contentContext, _super);
    function Document_contentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Document_contentContext.prototype.struct_def = function () {
        return this.tryGetRuleContext(0, Struct_defContext);
    };
    Document_contentContext.prototype.interface_def = function () {
        return this.tryGetRuleContext(0, Interface_defContext);
    };
    Document_contentContext.prototype.function_def = function () {
        return this.tryGetRuleContext(0, Function_defContext);
    };
    Document_contentContext.prototype.annotation_def = function () {
        return this.tryGetRuleContext(0, Annotation_defContext);
    };
    Document_contentContext.prototype.const_def = function () {
        return this.tryGetRuleContext(0, Const_defContext);
    };
    Document_contentContext.prototype.enum_def = function () {
        return this.tryGetRuleContext(0, Enum_defContext);
    };
    Object.defineProperty(Document_contentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_document_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Document_contentContext.prototype.enterRule = function (listener) {
        if (listener.enterDocument_content) {
            listener.enterDocument_content(this);
        }
    };
    // @Override
    Document_contentContext.prototype.exitRule = function (listener) {
        if (listener.exitDocument_content) {
            listener.exitDocument_content(this);
        }
    };
    // @Override
    Document_contentContext.prototype.accept = function (visitor) {
        if (visitor.visitDocument_content) {
            return visitor.visitDocument_content(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Document_contentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Document_contentContext = Document_contentContext;
var Struct_defContext = /** @class */ (function (_super) {
    __extends(Struct_defContext, _super);
    function Struct_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Struct_defContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Struct_defContext.prototype.annotation_reference = function () {
        return this.tryGetRuleContext(0, Annotation_referenceContext);
    };
    Struct_defContext.prototype.struct_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Struct_contentContext);
        }
        else {
            return this.getRuleContext(i, Struct_contentContext);
        }
    };
    Object.defineProperty(Struct_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_struct_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Struct_defContext.prototype.enterRule = function (listener) {
        if (listener.enterStruct_def) {
            listener.enterStruct_def(this);
        }
    };
    // @Override
    Struct_defContext.prototype.exitRule = function (listener) {
        if (listener.exitStruct_def) {
            listener.exitStruct_def(this);
        }
    };
    // @Override
    Struct_defContext.prototype.accept = function (visitor) {
        if (visitor.visitStruct_def) {
            return visitor.visitStruct_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Struct_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Struct_defContext = Struct_defContext;
var Struct_contentContext = /** @class */ (function (_super) {
    __extends(Struct_contentContext, _super);
    function Struct_contentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Struct_contentContext.prototype.field_def = function () {
        return this.tryGetRuleContext(0, Field_defContext);
    };
    Struct_contentContext.prototype.enum_def = function () {
        return this.tryGetRuleContext(0, Enum_defContext);
    };
    Struct_contentContext.prototype.named_union_def = function () {
        return this.tryGetRuleContext(0, Named_union_defContext);
    };
    Struct_contentContext.prototype.unnamed_union_def = function () {
        return this.tryGetRuleContext(0, Unnamed_union_defContext);
    };
    Struct_contentContext.prototype.interface_def = function () {
        return this.tryGetRuleContext(0, Interface_defContext);
    };
    Struct_contentContext.prototype.annotation_def = function () {
        return this.tryGetRuleContext(0, Annotation_defContext);
    };
    Struct_contentContext.prototype.struct_def = function () {
        return this.tryGetRuleContext(0, Struct_defContext);
    };
    Struct_contentContext.prototype.group_def = function () {
        return this.tryGetRuleContext(0, Group_defContext);
    };
    Struct_contentContext.prototype.const_def = function () {
        return this.tryGetRuleContext(0, Const_defContext);
    };
    Struct_contentContext.prototype.inner_using = function () {
        return this.tryGetRuleContext(0, Inner_usingContext);
    };
    Object.defineProperty(Struct_contentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_struct_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Struct_contentContext.prototype.enterRule = function (listener) {
        if (listener.enterStruct_content) {
            listener.enterStruct_content(this);
        }
    };
    // @Override
    Struct_contentContext.prototype.exitRule = function (listener) {
        if (listener.exitStruct_content) {
            listener.exitStruct_content(this);
        }
    };
    // @Override
    Struct_contentContext.prototype.accept = function (visitor) {
        if (visitor.visitStruct_content) {
            return visitor.visitStruct_content(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Struct_contentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Struct_contentContext = Struct_contentContext;
var Interface_defContext = /** @class */ (function (_super) {
    __extends(Interface_defContext, _super);
    function Interface_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Interface_defContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    Interface_defContext.prototype.interface_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Interface_contentContext);
        }
        else {
            return this.getRuleContext(i, Interface_contentContext);
        }
    };
    Object.defineProperty(Interface_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_interface_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Interface_defContext.prototype.enterRule = function (listener) {
        if (listener.enterInterface_def) {
            listener.enterInterface_def(this);
        }
    };
    // @Override
    Interface_defContext.prototype.exitRule = function (listener) {
        if (listener.exitInterface_def) {
            listener.exitInterface_def(this);
        }
    };
    // @Override
    Interface_defContext.prototype.accept = function (visitor) {
        if (visitor.visitInterface_def) {
            return visitor.visitInterface_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Interface_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Interface_defContext = Interface_defContext;
var Interface_contentContext = /** @class */ (function (_super) {
    __extends(Interface_contentContext, _super);
    function Interface_contentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Interface_contentContext.prototype.field_def = function () {
        return this.tryGetRuleContext(0, Field_defContext);
    };
    Interface_contentContext.prototype.enum_def = function () {
        return this.tryGetRuleContext(0, Enum_defContext);
    };
    Interface_contentContext.prototype.named_union_def = function () {
        return this.tryGetRuleContext(0, Named_union_defContext);
    };
    Interface_contentContext.prototype.unnamed_union_def = function () {
        return this.tryGetRuleContext(0, Unnamed_union_defContext);
    };
    Interface_contentContext.prototype.interface_def = function () {
        return this.tryGetRuleContext(0, Interface_defContext);
    };
    Interface_contentContext.prototype.struct_def = function () {
        return this.tryGetRuleContext(0, Struct_defContext);
    };
    Interface_contentContext.prototype.function_def = function () {
        return this.tryGetRuleContext(0, Function_defContext);
    };
    Object.defineProperty(Interface_contentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_interface_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Interface_contentContext.prototype.enterRule = function (listener) {
        if (listener.enterInterface_content) {
            listener.enterInterface_content(this);
        }
    };
    // @Override
    Interface_contentContext.prototype.exitRule = function (listener) {
        if (listener.exitInterface_content) {
            listener.exitInterface_content(this);
        }
    };
    // @Override
    Interface_contentContext.prototype.accept = function (visitor) {
        if (visitor.visitInterface_content) {
            return visitor.visitInterface_content(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Interface_contentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Interface_contentContext = Interface_contentContext;
var Field_defContext = /** @class */ (function (_super) {
    __extends(Field_defContext, _super);
    function Field_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_defContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    Field_defContext.prototype.LOCATOR = function () { return this.getToken(CapnProtoParser.LOCATOR, 0); };
    Field_defContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Field_defContext.prototype.const_value = function () {
        return this.tryGetRuleContext(0, Const_valueContext);
    };
    Object.defineProperty(Field_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_field_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_defContext.prototype.enterRule = function (listener) {
        if (listener.enterField_def) {
            listener.enterField_def(this);
        }
    };
    // @Override
    Field_defContext.prototype.exitRule = function (listener) {
        if (listener.exitField_def) {
            listener.exitField_def(this);
        }
    };
    // @Override
    Field_defContext.prototype.accept = function (visitor) {
        if (visitor.visitField_def) {
            return visitor.visitField_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_defContext = Field_defContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    TypeContext.prototype.inner_type = function () {
        return this.tryGetRuleContext(0, Inner_typeContext);
    };
    TypeContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_type; },
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
var Inner_typeContext = /** @class */ (function (_super) {
    __extends(Inner_typeContext, _super);
    function Inner_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Inner_typeContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    Inner_typeContext.prototype.inner_type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Inner_typeContext);
        }
        else {
            return this.getRuleContext(i, Inner_typeContext);
        }
    };
    Object.defineProperty(Inner_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_inner_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Inner_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterInner_type) {
            listener.enterInner_type(this);
        }
    };
    // @Override
    Inner_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitInner_type) {
            listener.exitInner_type(this);
        }
    };
    // @Override
    Inner_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitInner_type) {
            return visitor.visitInner_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Inner_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Inner_typeContext = Inner_typeContext;
var Enum_defContext = /** @class */ (function (_super) {
    __extends(Enum_defContext, _super);
    function Enum_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_defContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    Enum_defContext.prototype.annotation_reference = function () {
        return this.tryGetRuleContext(0, Annotation_referenceContext);
    };
    Enum_defContext.prototype.enum_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Enum_contentContext);
        }
        else {
            return this.getRuleContext(i, Enum_contentContext);
        }
    };
    Object.defineProperty(Enum_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_enum_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_defContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_def) {
            listener.enterEnum_def(this);
        }
    };
    // @Override
    Enum_defContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_def) {
            listener.exitEnum_def(this);
        }
    };
    // @Override
    Enum_defContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_def) {
            return visitor.visitEnum_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_defContext = Enum_defContext;
var Annotation_referenceContext = /** @class */ (function (_super) {
    __extends(Annotation_referenceContext, _super);
    function Annotation_referenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Annotation_referenceContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Annotation_referenceContext.prototype.TEXT = function () { return this.getToken(CapnProtoParser.TEXT, 0); };
    Object.defineProperty(Annotation_referenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_annotation_reference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Annotation_referenceContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation_reference) {
            listener.enterAnnotation_reference(this);
        }
    };
    // @Override
    Annotation_referenceContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation_reference) {
            listener.exitAnnotation_reference(this);
        }
    };
    // @Override
    Annotation_referenceContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation_reference) {
            return visitor.visitAnnotation_reference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Annotation_referenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Annotation_referenceContext = Annotation_referenceContext;
var Enum_contentContext = /** @class */ (function (_super) {
    __extends(Enum_contentContext, _super);
    function Enum_contentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_contentContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    Enum_contentContext.prototype.LOCATOR = function () { return this.getToken(CapnProtoParser.LOCATOR, 0); };
    Enum_contentContext.prototype.annotation_reference = function () {
        return this.tryGetRuleContext(0, Annotation_referenceContext);
    };
    Object.defineProperty(Enum_contentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_enum_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_contentContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_content) {
            listener.enterEnum_content(this);
        }
    };
    // @Override
    Enum_contentContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_content) {
            listener.exitEnum_content(this);
        }
    };
    // @Override
    Enum_contentContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_content) {
            return visitor.visitEnum_content(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_contentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_contentContext = Enum_contentContext;
var Named_union_defContext = /** @class */ (function (_super) {
    __extends(Named_union_defContext, _super);
    function Named_union_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Named_union_defContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    Named_union_defContext.prototype.LOCATOR = function () { return this.tryGetToken(CapnProtoParser.LOCATOR, 0); };
    Named_union_defContext.prototype.union_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Union_contentContext);
        }
        else {
            return this.getRuleContext(i, Union_contentContext);
        }
    };
    Object.defineProperty(Named_union_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_named_union_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Named_union_defContext.prototype.enterRule = function (listener) {
        if (listener.enterNamed_union_def) {
            listener.enterNamed_union_def(this);
        }
    };
    // @Override
    Named_union_defContext.prototype.exitRule = function (listener) {
        if (listener.exitNamed_union_def) {
            listener.exitNamed_union_def(this);
        }
    };
    // @Override
    Named_union_defContext.prototype.accept = function (visitor) {
        if (visitor.visitNamed_union_def) {
            return visitor.visitNamed_union_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Named_union_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Named_union_defContext = Named_union_defContext;
var Unnamed_union_defContext = /** @class */ (function (_super) {
    __extends(Unnamed_union_defContext, _super);
    function Unnamed_union_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unnamed_union_defContext.prototype.union_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Union_contentContext);
        }
        else {
            return this.getRuleContext(i, Union_contentContext);
        }
    };
    Object.defineProperty(Unnamed_union_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_unnamed_union_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unnamed_union_defContext.prototype.enterRule = function (listener) {
        if (listener.enterUnnamed_union_def) {
            listener.enterUnnamed_union_def(this);
        }
    };
    // @Override
    Unnamed_union_defContext.prototype.exitRule = function (listener) {
        if (listener.exitUnnamed_union_def) {
            listener.exitUnnamed_union_def(this);
        }
    };
    // @Override
    Unnamed_union_defContext.prototype.accept = function (visitor) {
        if (visitor.visitUnnamed_union_def) {
            return visitor.visitUnnamed_union_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unnamed_union_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unnamed_union_defContext = Unnamed_union_defContext;
var Union_contentContext = /** @class */ (function (_super) {
    __extends(Union_contentContext, _super);
    function Union_contentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Union_contentContext.prototype.field_def = function () {
        return this.tryGetRuleContext(0, Field_defContext);
    };
    Union_contentContext.prototype.group_def = function () {
        return this.tryGetRuleContext(0, Group_defContext);
    };
    Union_contentContext.prototype.unnamed_union_def = function () {
        return this.tryGetRuleContext(0, Unnamed_union_defContext);
    };
    Union_contentContext.prototype.named_union_def = function () {
        return this.tryGetRuleContext(0, Named_union_defContext);
    };
    Object.defineProperty(Union_contentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_union_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Union_contentContext.prototype.enterRule = function (listener) {
        if (listener.enterUnion_content) {
            listener.enterUnion_content(this);
        }
    };
    // @Override
    Union_contentContext.prototype.exitRule = function (listener) {
        if (listener.exitUnion_content) {
            listener.exitUnion_content(this);
        }
    };
    // @Override
    Union_contentContext.prototype.accept = function (visitor) {
        if (visitor.visitUnion_content) {
            return visitor.visitUnion_content(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Union_contentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Union_contentContext = Union_contentContext;
var Group_defContext = /** @class */ (function (_super) {
    __extends(Group_defContext, _super);
    function Group_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Group_defContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    Group_defContext.prototype.group_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Group_contentContext);
        }
        else {
            return this.getRuleContext(i, Group_contentContext);
        }
    };
    Object.defineProperty(Group_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_group_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Group_defContext.prototype.enterRule = function (listener) {
        if (listener.enterGroup_def) {
            listener.enterGroup_def(this);
        }
    };
    // @Override
    Group_defContext.prototype.exitRule = function (listener) {
        if (listener.exitGroup_def) {
            listener.exitGroup_def(this);
        }
    };
    // @Override
    Group_defContext.prototype.accept = function (visitor) {
        if (visitor.visitGroup_def) {
            return visitor.visitGroup_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Group_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Group_defContext = Group_defContext;
var Group_contentContext = /** @class */ (function (_super) {
    __extends(Group_contentContext, _super);
    function Group_contentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Group_contentContext.prototype.field_def = function () {
        return this.tryGetRuleContext(0, Field_defContext);
    };
    Group_contentContext.prototype.unnamed_union_def = function () {
        return this.tryGetRuleContext(0, Unnamed_union_defContext);
    };
    Group_contentContext.prototype.named_union_def = function () {
        return this.tryGetRuleContext(0, Named_union_defContext);
    };
    Object.defineProperty(Group_contentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_group_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Group_contentContext.prototype.enterRule = function (listener) {
        if (listener.enterGroup_content) {
            listener.enterGroup_content(this);
        }
    };
    // @Override
    Group_contentContext.prototype.exitRule = function (listener) {
        if (listener.exitGroup_content) {
            listener.exitGroup_content(this);
        }
    };
    // @Override
    Group_contentContext.prototype.accept = function (visitor) {
        if (visitor.visitGroup_content) {
            return visitor.visitGroup_content(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Group_contentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Group_contentContext = Group_contentContext;
var Function_defContext = /** @class */ (function (_super) {
    __extends(Function_defContext, _super);
    function Function_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_defContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    Function_defContext.prototype.function_parameters = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Function_parametersContext);
        }
        else {
            return this.getRuleContext(i, Function_parametersContext);
        }
    };
    Function_defContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    Function_defContext.prototype.LOCATOR = function () { return this.tryGetToken(CapnProtoParser.LOCATOR, 0); };
    Function_defContext.prototype.generic_type_parameters = function () {
        return this.tryGetRuleContext(0, Generic_type_parametersContext);
    };
    Object.defineProperty(Function_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_function_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_defContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_def) {
            listener.enterFunction_def(this);
        }
    };
    // @Override
    Function_defContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_def) {
            listener.exitFunction_def(this);
        }
    };
    // @Override
    Function_defContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_def) {
            return visitor.visitFunction_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_defContext = Function_defContext;
var Generic_type_parametersContext = /** @class */ (function (_super) {
    __extends(Generic_type_parametersContext, _super);
    function Generic_type_parametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Generic_type_parametersContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CapnProtoParser.NAME);
        }
        else {
            return this.getToken(CapnProtoParser.NAME, i);
        }
    };
    Object.defineProperty(Generic_type_parametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_generic_type_parameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Generic_type_parametersContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneric_type_parameters) {
            listener.enterGeneric_type_parameters(this);
        }
    };
    // @Override
    Generic_type_parametersContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneric_type_parameters) {
            listener.exitGeneric_type_parameters(this);
        }
    };
    // @Override
    Generic_type_parametersContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneric_type_parameters) {
            return visitor.visitGeneric_type_parameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Generic_type_parametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Generic_type_parametersContext = Generic_type_parametersContext;
var Function_parametersContext = /** @class */ (function (_super) {
    __extends(Function_parametersContext, _super);
    function Function_parametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_parametersContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CapnProtoParser.NAME);
        }
        else {
            return this.getToken(CapnProtoParser.NAME, i);
        }
    };
    Function_parametersContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    Function_parametersContext.prototype.const_value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Const_valueContext);
        }
        else {
            return this.getRuleContext(i, Const_valueContext);
        }
    };
    Object.defineProperty(Function_parametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_function_parameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_parametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_parameters) {
            listener.enterFunction_parameters(this);
        }
    };
    // @Override
    Function_parametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_parameters) {
            listener.exitFunction_parameters(this);
        }
    };
    // @Override
    Function_parametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_parameters) {
            return visitor.visitFunction_parameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_parametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_parametersContext = Function_parametersContext;
var Annotation_defContext = /** @class */ (function (_super) {
    __extends(Annotation_defContext, _super);
    function Annotation_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Annotation_defContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    Annotation_defContext.prototype.annotation_parameters = function () {
        return this.tryGetRuleContext(0, Annotation_parametersContext);
    };
    Object.defineProperty(Annotation_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_annotation_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Annotation_defContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation_def) {
            listener.enterAnnotation_def(this);
        }
    };
    // @Override
    Annotation_defContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation_def) {
            listener.exitAnnotation_def(this);
        }
    };
    // @Override
    Annotation_defContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation_def) {
            return visitor.visitAnnotation_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Annotation_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Annotation_defContext = Annotation_defContext;
var Annotation_parametersContext = /** @class */ (function (_super) {
    __extends(Annotation_parametersContext, _super);
    function Annotation_parametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Annotation_parametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_annotation_parameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Annotation_parametersContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation_parameters) {
            listener.enterAnnotation_parameters(this);
        }
    };
    // @Override
    Annotation_parametersContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation_parameters) {
            listener.exitAnnotation_parameters(this);
        }
    };
    // @Override
    Annotation_parametersContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation_parameters) {
            return visitor.visitAnnotation_parameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Annotation_parametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Annotation_parametersContext = Annotation_parametersContext;
var Const_defContext = /** @class */ (function (_super) {
    __extends(Const_defContext, _super);
    function Const_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_defContext.prototype.NAME = function () { return this.getToken(CapnProtoParser.NAME, 0); };
    Const_defContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Const_defContext.prototype.const_value = function () {
        return this.getRuleContext(0, Const_valueContext);
    };
    Object.defineProperty(Const_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_const_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Const_defContext.prototype.enterRule = function (listener) {
        if (listener.enterConst_def) {
            listener.enterConst_def(this);
        }
    };
    // @Override
    Const_defContext.prototype.exitRule = function (listener) {
        if (listener.exitConst_def) {
            listener.exitConst_def(this);
        }
    };
    // @Override
    Const_defContext.prototype.accept = function (visitor) {
        if (visitor.visitConst_def) {
            return visitor.visitConst_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Const_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Const_defContext = Const_defContext;
var Const_valueContext = /** @class */ (function (_super) {
    __extends(Const_valueContext, _super);
    function Const_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_valueContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CapnProtoParser.NAME);
        }
        else {
            return this.getToken(CapnProtoParser.NAME, i);
        }
    };
    Const_valueContext.prototype.INTEGER = function () { return this.tryGetToken(CapnProtoParser.INTEGER, 0); };
    Const_valueContext.prototype.FLOAT = function () { return this.tryGetToken(CapnProtoParser.FLOAT, 0); };
    Const_valueContext.prototype.TEXT = function () { return this.tryGetToken(CapnProtoParser.TEXT, 0); };
    Const_valueContext.prototype.BOOLEAN = function () { return this.tryGetToken(CapnProtoParser.BOOLEAN, 0); };
    Const_valueContext.prototype.HEXADECIMAL = function () { return this.tryGetToken(CapnProtoParser.HEXADECIMAL, 0); };
    Const_valueContext.prototype.VOID = function () { return this.tryGetToken(CapnProtoParser.VOID, 0); };
    Const_valueContext.prototype.literal_list = function () {
        return this.tryGetRuleContext(0, Literal_listContext);
    };
    Const_valueContext.prototype.literal_union = function () {
        return this.tryGetRuleContext(0, Literal_unionContext);
    };
    Const_valueContext.prototype.literal_bytes = function () {
        return this.tryGetRuleContext(0, Literal_bytesContext);
    };
    Object.defineProperty(Const_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_const_value; },
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
var Literal_unionContext = /** @class */ (function (_super) {
    __extends(Literal_unionContext, _super);
    function Literal_unionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Literal_unionContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CapnProtoParser.NAME);
        }
        else {
            return this.getToken(CapnProtoParser.NAME, i);
        }
    };
    Literal_unionContext.prototype.union_mapping = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Union_mappingContext);
        }
        else {
            return this.getRuleContext(i, Union_mappingContext);
        }
    };
    Object.defineProperty(Literal_unionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_literal_union; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Literal_unionContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral_union) {
            listener.enterLiteral_union(this);
        }
    };
    // @Override
    Literal_unionContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral_union) {
            listener.exitLiteral_union(this);
        }
    };
    // @Override
    Literal_unionContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral_union) {
            return visitor.visitLiteral_union(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Literal_unionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Literal_unionContext = Literal_unionContext;
var Literal_listContext = /** @class */ (function (_super) {
    __extends(Literal_listContext, _super);
    function Literal_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Literal_listContext.prototype.const_value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Const_valueContext);
        }
        else {
            return this.getRuleContext(i, Const_valueContext);
        }
    };
    Object.defineProperty(Literal_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_literal_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Literal_listContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral_list) {
            listener.enterLiteral_list(this);
        }
    };
    // @Override
    Literal_listContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral_list) {
            listener.exitLiteral_list(this);
        }
    };
    // @Override
    Literal_listContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral_list) {
            return visitor.visitLiteral_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Literal_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Literal_listContext = Literal_listContext;
var Literal_bytesContext = /** @class */ (function (_super) {
    __extends(Literal_bytesContext, _super);
    function Literal_bytesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Literal_bytesContext.prototype.TEXT = function () { return this.getToken(CapnProtoParser.TEXT, 0); };
    Object.defineProperty(Literal_bytesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_literal_bytes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Literal_bytesContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral_bytes) {
            listener.enterLiteral_bytes(this);
        }
    };
    // @Override
    Literal_bytesContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral_bytes) {
            listener.exitLiteral_bytes(this);
        }
    };
    // @Override
    Literal_bytesContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral_bytes) {
            return visitor.visitLiteral_bytes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Literal_bytesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Literal_bytesContext = Literal_bytesContext;
var Union_mappingContext = /** @class */ (function (_super) {
    __extends(Union_mappingContext, _super);
    function Union_mappingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Union_mappingContext.prototype.NAME = function () { return this.tryGetToken(CapnProtoParser.NAME, 0); };
    Union_mappingContext.prototype.const_value = function () {
        return this.getRuleContext(0, Const_valueContext);
    };
    Object.defineProperty(Union_mappingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_union_mapping; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Union_mappingContext.prototype.enterRule = function (listener) {
        if (listener.enterUnion_mapping) {
            listener.enterUnion_mapping(this);
        }
    };
    // @Override
    Union_mappingContext.prototype.exitRule = function (listener) {
        if (listener.exitUnion_mapping) {
            listener.exitUnion_mapping(this);
        }
    };
    // @Override
    Union_mappingContext.prototype.accept = function (visitor) {
        if (visitor.visitUnion_mapping) {
            return visitor.visitUnion_mapping(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Union_mappingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Union_mappingContext = Union_mappingContext;
var Inner_usingContext = /** @class */ (function (_super) {
    __extends(Inner_usingContext, _super);
    function Inner_usingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Inner_usingContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CapnProtoParser.NAME);
        }
        else {
            return this.getToken(CapnProtoParser.NAME, i);
        }
    };
    Inner_usingContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(Inner_usingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CapnProtoParser.RULE_inner_using; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Inner_usingContext.prototype.enterRule = function (listener) {
        if (listener.enterInner_using) {
            listener.enterInner_using(this);
        }
    };
    // @Override
    Inner_usingContext.prototype.exitRule = function (listener) {
        if (listener.exitInner_using) {
            listener.exitInner_using(this);
        }
    };
    // @Override
    Inner_usingContext.prototype.accept = function (visitor) {
        if (visitor.visitInner_using) {
            return visitor.visitInner_using(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Inner_usingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Inner_usingContext = Inner_usingContext;
