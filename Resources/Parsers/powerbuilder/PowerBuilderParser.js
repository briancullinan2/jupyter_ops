"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/powerbuilder/PowerBuilderParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var PowerBuilderParser = /** @class */ (function (_super) {
    __extends(PowerBuilderParser, _super);
    function PowerBuilderParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(PowerBuilderParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(PowerBuilderParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PowerBuilderParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerBuilderParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "PowerBuilderParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerBuilderParser.prototype, "ruleNames", {
        // @Override
        get: function () { return PowerBuilderParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerBuilderParser.prototype, "serializedATN", {
        // @Override
        get: function () { return PowerBuilderParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    PowerBuilderParser.prototype.start_rule = function () {
        var _localctx = new Start_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PowerBuilderParser.RULE_start_rule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 180;
                            this.header_rule();
                        }
                        break;
                }
                this.state = 184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 183;
                            this.body_rule();
                        }
                    }
                    this.state = 186;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (PowerBuilderParser.GLOBAL - 26)) | (1 << (PowerBuilderParser.SHARED - 26)) | (1 << (PowerBuilderParser.INDIRECT - 26)) | (1 << (PowerBuilderParser.FORWARD - 26)) | (1 << (PowerBuilderParser.PUBLIC - 26)) | (1 << (PowerBuilderParser.PRIVATE - 26)) | (1 << (PowerBuilderParser.FUNCTION - 26)) | (1 << (PowerBuilderParser.SUBROUTINE - 26)) | (1 << (PowerBuilderParser.TYPE - 26)) | (1 << (PowerBuilderParser.ON - 26)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 26)) | (1 << (PowerBuilderParser.PROTECTED - 26)) | (1 << (PowerBuilderParser.PRIVATEREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 26)) | (1 << (PowerBuilderParser.LOCAL - 26)) | (1 << (PowerBuilderParser.EVENT - 26)))) !== 0) || _la === PowerBuilderParser.SEMI || _la === PowerBuilderParser.RPAREN);
                this.state = 188;
                this.match(PowerBuilderParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.header_rule = function () {
        var _localctx = new Header_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PowerBuilderParser.RULE_header_rule);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.EXPORT_HEADER) {
                    {
                        {
                            this.state = 190;
                            this.match(PowerBuilderParser.EXPORT_HEADER);
                        }
                    }
                    this.state = 195;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.RELEASE) {
                    {
                        this.state = 196;
                        this.match(PowerBuilderParser.RELEASE);
                        this.state = 197;
                        this.match(PowerBuilderParser.NUMBER);
                        this.state = 198;
                        this.match(PowerBuilderParser.SEMI);
                    }
                }
                this.state = 202;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 201;
                                    this.window_property();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 204;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
    // @RuleVersion(0)
    PowerBuilderParser.prototype.body_rule = function () {
        var _localctx = new Body_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PowerBuilderParser.RULE_body_rule);
        try {
            this.state = 218;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 206;
                        this.datatype_decl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 207;
                        this.access_modif();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 208;
                        this.forward_decl();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 209;
                        this.type_variables_decl();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 210;
                        this.global_variables_decl();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 211;
                        this.variable_decl();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 212;
                        this.constant_decl();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 213;
                        this.function_forward_decl();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 214;
                        this.functions_forward_decl();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 215;
                        this.function_body();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 216;
                        this.on_body();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 217;
                        this.event_body();
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
    PowerBuilderParser.prototype.window_property = function () {
        var _localctx = new Window_propertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PowerBuilderParser.RULE_window_property);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.attribute_name();
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.LBRACE || _la === PowerBuilderParser.BRACES) {
                    {
                        this.state = 221;
                        this.array_decl_sub();
                    }
                }
                this.state = 224;
                this.match(PowerBuilderParser.LPAREN);
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (PowerBuilderParser.TYPE - 38)) | (1 << (PowerBuilderParser.NULL - 38)) | (1 << (PowerBuilderParser.UPDATE - 38)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 225;
                            this.window_property_attribute_sub();
                        }
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 231;
                this.match(PowerBuilderParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.window_property_attribute_sub = function () {
        var _localctx = new Window_property_attribute_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PowerBuilderParser.RULE_window_property_attribute_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.NULL:
                        {
                            this.state = 233;
                            this.match(PowerBuilderParser.NULL);
                        }
                        break;
                    case PowerBuilderParser.NUMBER:
                        {
                            this.state = 234;
                            this.numeric_atom();
                        }
                        break;
                    case PowerBuilderParser.DQUOTED_STRING:
                        {
                            this.state = 235;
                            this.match(PowerBuilderParser.DQUOTED_STRING);
                        }
                        break;
                    case PowerBuilderParser.DATE:
                        {
                            this.state = 236;
                            this.match(PowerBuilderParser.DATE);
                        }
                        break;
                    case PowerBuilderParser.TIME:
                        {
                            this.state = 237;
                            this.match(PowerBuilderParser.TIME);
                        }
                        break;
                    case PowerBuilderParser.TYPE:
                    case PowerBuilderParser.UPDATE:
                    case PowerBuilderParser.ID:
                        {
                            this.state = 238;
                            this.attribute_name();
                            this.state = 239;
                            _localctx._eq = this.match(PowerBuilderParser.EQ);
                            this.state = 252;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 240;
                                        this.attribute_value();
                                        this.state = 242;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === PowerBuilderParser.LBRACE || _la === PowerBuilderParser.BRACES) {
                                            {
                                                this.state = 241;
                                                this.array_decl_sub();
                                            }
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 244;
                                        this.match(PowerBuilderParser.LPAREN);
                                        this.state = 246;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 245;
                                                    this.window_property_attribute_sub();
                                                }
                                            }
                                            this.state = 248;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (PowerBuilderParser.TYPE - 38)) | (1 << (PowerBuilderParser.NULL - 38)) | (1 << (PowerBuilderParser.UPDATE - 38)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0));
                                        this.state = 250;
                                        this.match(PowerBuilderParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.COMMA) {
                    {
                        this.state = 256;
                        this.match(PowerBuilderParser.COMMA);
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
    PowerBuilderParser.prototype.attribute_name = function () {
        var _localctx = new Attribute_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PowerBuilderParser.RULE_attribute_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.ID:
                        {
                            this.state = 259;
                            this.identifier_name();
                        }
                        break;
                    case PowerBuilderParser.TYPE:
                        {
                            this.state = 260;
                            this.match(PowerBuilderParser.TYPE);
                        }
                        break;
                    case PowerBuilderParser.UPDATE:
                        {
                            this.state = 261;
                            this.match(PowerBuilderParser.UPDATE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.NUMBER) {
                    {
                        this.state = 264;
                        this.match(PowerBuilderParser.NUMBER);
                    }
                }
                this.state = 277;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.DOT) {
                    {
                        {
                            this.state = 267;
                            this.match(PowerBuilderParser.DOT);
                            this.state = 273;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case PowerBuilderParser.ID:
                                    {
                                        this.state = 268;
                                        this.identifier_name();
                                    }
                                    break;
                                case PowerBuilderParser.CASE:
                                    {
                                        this.state = 269;
                                        this.match(PowerBuilderParser.CASE);
                                    }
                                    break;
                                case PowerBuilderParser.TYPE:
                                    {
                                        this.state = 270;
                                        this.match(PowerBuilderParser.TYPE);
                                    }
                                    break;
                                case PowerBuilderParser.ON:
                                    {
                                        this.state = 271;
                                        this.match(PowerBuilderParser.ON);
                                    }
                                    break;
                                case PowerBuilderParser.DYNAMIC:
                                    {
                                        this.state = 272;
                                        this.match(PowerBuilderParser.DYNAMIC);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 279;
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
    PowerBuilderParser.prototype.attribute_value = function () {
        var _localctx = new Attribute_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PowerBuilderParser.RULE_attribute_value);
        var _la;
        try {
            this.state = 340;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 280;
                        this.atom_sub_call1();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 281;
                        this.atom_sub_member1();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 283;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.MINUS) {
                            {
                                this.state = 282;
                                this.match(PowerBuilderParser.MINUS);
                            }
                        }
                        this.state = 285;
                        this.numeric_atom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 286;
                        this.boolean_atom();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 287;
                        this.match(PowerBuilderParser.ENUM);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 288;
                        this.match(PowerBuilderParser.DQUOTED_STRING);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 289;
                        this.match(PowerBuilderParser.QUOTED_STRING);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 290;
                        this.match(PowerBuilderParser.DATE);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 291;
                        this.match(PowerBuilderParser.TIME);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 292;
                        this.match(PowerBuilderParser.TYPE);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 293;
                        this.match(PowerBuilderParser.TO);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 294;
                        this.match(PowerBuilderParser.FROM);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 295;
                        this.match(PowerBuilderParser.REF);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 296;
                        this.match(PowerBuilderParser.NULL);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 297;
                        this.match(PowerBuilderParser.OPEN);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 298;
                        this.match(PowerBuilderParser.LPAREN);
                        this.state = 299;
                        this.match(PowerBuilderParser.LPAREN);
                        this.state = 302;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PowerBuilderParser.CLOSE:
                            case PowerBuilderParser.HALT:
                            case PowerBuilderParser.LCURLY:
                                {
                                    this.state = 300;
                                    this.expression();
                                }
                                break;
                            case PowerBuilderParser.ANY:
                            case PowerBuilderParser.BLOB:
                            case PowerBuilderParser.BOOLEAN:
                            case PowerBuilderParser.BYTE:
                            case PowerBuilderParser.CHARACTER:
                            case PowerBuilderParser.CHAR:
                            case PowerBuilderParser.DATE_TYPE:
                            case PowerBuilderParser.DATETIME:
                            case PowerBuilderParser.DECIMAL:
                            case PowerBuilderParser.DEC:
                            case PowerBuilderParser.DOUBLE:
                            case PowerBuilderParser.INTEGER:
                            case PowerBuilderParser.INT:
                            case PowerBuilderParser.LONG:
                            case PowerBuilderParser.LONGLONG:
                            case PowerBuilderParser.REAL:
                            case PowerBuilderParser.STRING:
                            case PowerBuilderParser.TIME_TYPE:
                            case PowerBuilderParser.UNSIGNEDINTEGER:
                            case PowerBuilderParser.UINT:
                            case PowerBuilderParser.UNSIGNEDLONG:
                            case PowerBuilderParser.ULONG:
                            case PowerBuilderParser.WINDOW:
                                {
                                    this.state = 301;
                                    this.dataTypeSub();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 309;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.COMMA) {
                            {
                                this.state = 304;
                                this.match(PowerBuilderParser.COMMA);
                                this.state = 307;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case PowerBuilderParser.CLOSE:
                                    case PowerBuilderParser.HALT:
                                    case PowerBuilderParser.LCURLY:
                                        {
                                            this.state = 305;
                                            this.expression();
                                        }
                                        break;
                                    case PowerBuilderParser.ANY:
                                    case PowerBuilderParser.BLOB:
                                    case PowerBuilderParser.BOOLEAN:
                                    case PowerBuilderParser.BYTE:
                                    case PowerBuilderParser.CHARACTER:
                                    case PowerBuilderParser.CHAR:
                                    case PowerBuilderParser.DATE_TYPE:
                                    case PowerBuilderParser.DATETIME:
                                    case PowerBuilderParser.DECIMAL:
                                    case PowerBuilderParser.DEC:
                                    case PowerBuilderParser.DOUBLE:
                                    case PowerBuilderParser.INTEGER:
                                    case PowerBuilderParser.INT:
                                    case PowerBuilderParser.LONG:
                                    case PowerBuilderParser.LONGLONG:
                                    case PowerBuilderParser.REAL:
                                    case PowerBuilderParser.STRING:
                                    case PowerBuilderParser.TIME_TYPE:
                                    case PowerBuilderParser.UNSIGNEDINTEGER:
                                    case PowerBuilderParser.UINT:
                                    case PowerBuilderParser.UNSIGNEDLONG:
                                    case PowerBuilderParser.ULONG:
                                    case PowerBuilderParser.WINDOW:
                                        {
                                            this.state = 306;
                                            this.dataTypeSub();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 311;
                        this.match(PowerBuilderParser.RPAREN);
                        this.state = 329;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PowerBuilderParser.COMMA) {
                            {
                                {
                                    this.state = 312;
                                    this.match(PowerBuilderParser.COMMA);
                                    this.state = 313;
                                    this.match(PowerBuilderParser.LPAREN);
                                    this.state = 316;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case PowerBuilderParser.CLOSE:
                                        case PowerBuilderParser.HALT:
                                        case PowerBuilderParser.LCURLY:
                                            {
                                                this.state = 314;
                                                this.expression();
                                            }
                                            break;
                                        case PowerBuilderParser.ANY:
                                        case PowerBuilderParser.BLOB:
                                        case PowerBuilderParser.BOOLEAN:
                                        case PowerBuilderParser.BYTE:
                                        case PowerBuilderParser.CHARACTER:
                                        case PowerBuilderParser.CHAR:
                                        case PowerBuilderParser.DATE_TYPE:
                                        case PowerBuilderParser.DATETIME:
                                        case PowerBuilderParser.DECIMAL:
                                        case PowerBuilderParser.DEC:
                                        case PowerBuilderParser.DOUBLE:
                                        case PowerBuilderParser.INTEGER:
                                        case PowerBuilderParser.INT:
                                        case PowerBuilderParser.LONG:
                                        case PowerBuilderParser.LONGLONG:
                                        case PowerBuilderParser.REAL:
                                        case PowerBuilderParser.STRING:
                                        case PowerBuilderParser.TIME_TYPE:
                                        case PowerBuilderParser.UNSIGNEDINTEGER:
                                        case PowerBuilderParser.UINT:
                                        case PowerBuilderParser.UNSIGNEDLONG:
                                        case PowerBuilderParser.ULONG:
                                        case PowerBuilderParser.WINDOW:
                                            {
                                                this.state = 315;
                                                this.dataTypeSub();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 323;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === PowerBuilderParser.COMMA) {
                                        {
                                            this.state = 318;
                                            this.match(PowerBuilderParser.COMMA);
                                            this.state = 321;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case PowerBuilderParser.CLOSE:
                                                case PowerBuilderParser.HALT:
                                                case PowerBuilderParser.LCURLY:
                                                    {
                                                        this.state = 319;
                                                        this.expression();
                                                    }
                                                    break;
                                                case PowerBuilderParser.ANY:
                                                case PowerBuilderParser.BLOB:
                                                case PowerBuilderParser.BOOLEAN:
                                                case PowerBuilderParser.BYTE:
                                                case PowerBuilderParser.CHARACTER:
                                                case PowerBuilderParser.CHAR:
                                                case PowerBuilderParser.DATE_TYPE:
                                                case PowerBuilderParser.DATETIME:
                                                case PowerBuilderParser.DECIMAL:
                                                case PowerBuilderParser.DEC:
                                                case PowerBuilderParser.DOUBLE:
                                                case PowerBuilderParser.INTEGER:
                                                case PowerBuilderParser.INT:
                                                case PowerBuilderParser.LONG:
                                                case PowerBuilderParser.LONGLONG:
                                                case PowerBuilderParser.REAL:
                                                case PowerBuilderParser.STRING:
                                                case PowerBuilderParser.TIME_TYPE:
                                                case PowerBuilderParser.UNSIGNEDINTEGER:
                                                case PowerBuilderParser.UINT:
                                                case PowerBuilderParser.UNSIGNEDLONG:
                                                case PowerBuilderParser.ULONG:
                                                case PowerBuilderParser.WINDOW:
                                                    {
                                                        this.state = 320;
                                                        this.dataTypeSub();
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
                                            }
                                        }
                                    }
                                    this.state = 325;
                                    this.match(PowerBuilderParser.RPAREN);
                                }
                            }
                            this.state = 331;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 332;
                        this.match(PowerBuilderParser.RPAREN);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 334;
                        this.dataTypeSub();
                        this.state = 338;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.LPAREN) {
                            {
                                this.state = 335;
                                this.match(PowerBuilderParser.LPAREN);
                                this.state = 336;
                                this.match(PowerBuilderParser.NUMBER);
                                this.state = 337;
                                this.match(PowerBuilderParser.RPAREN);
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
    PowerBuilderParser.prototype.forward_decl = function () {
        var _localctx = new Forward_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PowerBuilderParser.RULE_forward_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.match(PowerBuilderParser.FORWARD);
                this.state = 345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 345;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                            case 1:
                                {
                                    this.state = 343;
                                    this.datatype_decl();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 344;
                                    this.variable_decl();
                                }
                                break;
                        }
                    }
                    this.state = 347;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (PowerBuilderParser.GLOBAL - 26)) | (1 << (PowerBuilderParser.INDIRECT - 26)) | (1 << (PowerBuilderParser.PUBLIC - 26)) | (1 << (PowerBuilderParser.PRIVATE - 26)) | (1 << (PowerBuilderParser.TYPE - 26)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 26)) | (1 << (PowerBuilderParser.PROTECTED - 26)) | (1 << (PowerBuilderParser.PRIVATEREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 26)) | (1 << (PowerBuilderParser.LOCAL - 26)))) !== 0) || _la === PowerBuilderParser.SEMI || _la === PowerBuilderParser.RPAREN);
                this.state = 349;
                this.match(PowerBuilderParser.END);
                this.state = 350;
                this.match(PowerBuilderParser.FORWARD);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.datatype_decl = function () {
        var _localctx = new Datatype_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PowerBuilderParser.RULE_datatype_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.GLOBAL || _la === PowerBuilderParser.LOCAL) {
                    {
                        this.state = 352;
                        this.scope_modif();
                    }
                }
                this.state = 355;
                this.match(PowerBuilderParser.TYPE);
                this.state = 356;
                this.identifier_name();
                this.state = 357;
                this.match(PowerBuilderParser.FROM);
                this.state = 361;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 358;
                            this.identifier_name();
                            this.state = 359;
                            this.match(PowerBuilderParser.TICK);
                        }
                        break;
                }
                this.state = 363;
                this.data_type_name();
                this.state = 366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.WITHIN) {
                    {
                        this.state = 364;
                        this.match(PowerBuilderParser.WITHIN);
                        this.state = 365;
                        this.identifier_name();
                    }
                }
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.AUTOINSTANTIATE) {
                    {
                        this.state = 368;
                        this.match(PowerBuilderParser.AUTOINSTANTIATE);
                    }
                }
                this.state = 375;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.DESCRIPTOR) {
                    {
                        this.state = 371;
                        this.match(PowerBuilderParser.DESCRIPTOR);
                        this.state = 372;
                        this.match(PowerBuilderParser.DQUOTED_STRING);
                        this.state = 373;
                        this.match(PowerBuilderParser.EQ);
                        this.state = 374;
                        this.match(PowerBuilderParser.DQUOTED_STRING);
                    }
                }
                this.state = 381;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (PowerBuilderParser.GLOBAL - 26)) | (1 << (PowerBuilderParser.INDIRECT - 26)) | (1 << (PowerBuilderParser.PUBLIC - 26)) | (1 << (PowerBuilderParser.PRIVATE - 26)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 26)) | (1 << (PowerBuilderParser.PROTECTED - 26)) | (1 << (PowerBuilderParser.PRIVATEREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 26)) | (1 << (PowerBuilderParser.LOCAL - 26)) | (1 << (PowerBuilderParser.EVENT - 26)))) !== 0) || _la === PowerBuilderParser.SEMI || _la === PowerBuilderParser.RPAREN) {
                    {
                        this.state = 379;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PowerBuilderParser.GLOBAL:
                            case PowerBuilderParser.INDIRECT:
                            case PowerBuilderParser.PUBLIC:
                            case PowerBuilderParser.PRIVATE:
                            case PowerBuilderParser.PRIVATEWRITE:
                            case PowerBuilderParser.PROTECTED:
                            case PowerBuilderParser.PRIVATEREAD:
                            case PowerBuilderParser.PROTECTEDREAD:
                            case PowerBuilderParser.PROTECTEDWRITE:
                            case PowerBuilderParser.LOCAL:
                            case PowerBuilderParser.SEMI:
                            case PowerBuilderParser.RPAREN:
                                {
                                    this.state = 377;
                                    this.variable_decl();
                                }
                                break;
                            case PowerBuilderParser.EVENT:
                                {
                                    this.state = 378;
                                    this.event_forward_decl();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 383;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 384;
                this.match(PowerBuilderParser.END);
                this.state = 385;
                this.match(PowerBuilderParser.TYPE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.type_variables_decl = function () {
        var _localctx = new Type_variables_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PowerBuilderParser.RULE_type_variables_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 387;
                this.match(PowerBuilderParser.TYPE);
                this.state = 388;
                this.match(PowerBuilderParser.VARIABLES);
                this.state = 394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (PowerBuilderParser.GLOBAL - 26)) | (1 << (PowerBuilderParser.INDIRECT - 26)) | (1 << (PowerBuilderParser.PUBLIC - 26)) | (1 << (PowerBuilderParser.PRIVATE - 26)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 26)) | (1 << (PowerBuilderParser.PROTECTED - 26)) | (1 << (PowerBuilderParser.PRIVATEREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 26)) | (1 << (PowerBuilderParser.LOCAL - 26)))) !== 0) || _la === PowerBuilderParser.SEMI || _la === PowerBuilderParser.RPAREN) {
                    {
                        this.state = 392;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                            case 1:
                                {
                                    this.state = 389;
                                    this.access_modif();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 390;
                                    this.variable_decl();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 391;
                                    this.constant_decl();
                                }
                                break;
                        }
                    }
                    this.state = 396;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 397;
                this.match(PowerBuilderParser.END);
                this.state = 398;
                this.match(PowerBuilderParser.VARIABLES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.global_variables_decl = function () {
        var _localctx = new Global_variables_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PowerBuilderParser.RULE_global_variables_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 400;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.GLOBAL || _la === PowerBuilderParser.SHARED)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 401;
                this.match(PowerBuilderParser.VARIABLES);
                this.state = 406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (PowerBuilderParser.GLOBAL - 26)) | (1 << (PowerBuilderParser.INDIRECT - 26)) | (1 << (PowerBuilderParser.PUBLIC - 26)) | (1 << (PowerBuilderParser.PRIVATE - 26)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 26)) | (1 << (PowerBuilderParser.PROTECTED - 26)) | (1 << (PowerBuilderParser.PRIVATEREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 26)) | (1 << (PowerBuilderParser.LOCAL - 26)))) !== 0) || _la === PowerBuilderParser.SEMI || _la === PowerBuilderParser.RPAREN) {
                    {
                        this.state = 404;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                            case 1:
                                {
                                    this.state = 402;
                                    this.variable_decl();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 403;
                                    this.constant_decl();
                                }
                                break;
                        }
                    }
                    this.state = 408;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 409;
                this.match(PowerBuilderParser.END);
                this.state = 410;
                this.match(PowerBuilderParser.VARIABLES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.variable_decl = function () {
        var _localctx = new Variable_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PowerBuilderParser.RULE_variable_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this.variable_decl_sub();
                this.state = 413;
                this.match(PowerBuilderParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.variable_decl_sub = function () {
        var _localctx = new Variable_decl_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PowerBuilderParser.RULE_variable_decl_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 416;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.INDIRECT) {
                    {
                        this.state = 415;
                        this.match(PowerBuilderParser.INDIRECT);
                    }
                }
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)))) !== 0)) {
                    {
                        this.state = 418;
                        this.access_modif_part();
                    }
                }
                this.state = 422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.GLOBAL || _la === PowerBuilderParser.LOCAL) {
                    {
                        this.state = 421;
                        this.scope_modif();
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
    PowerBuilderParser.prototype.decimal_decl_sub = function () {
        var _localctx = new Decimal_decl_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PowerBuilderParser.RULE_decimal_decl_sub);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 424;
                this.match(PowerBuilderParser.LCURLY);
                this.state = 425;
                this.match(PowerBuilderParser.NUMBER);
                this.state = 426;
                this.match(PowerBuilderParser.RCURLY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.array_decl_sub = function () {
        var _localctx = new Array_decl_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, PowerBuilderParser.RULE_array_decl_sub);
        var _la;
        try {
            this.state = 461;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PowerBuilderParser.BRACES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 428;
                        this.match(PowerBuilderParser.BRACES);
                    }
                    break;
                case PowerBuilderParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 429;
                        this.match(PowerBuilderParser.LBRACE);
                        this.state = 458;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PowerBuilderParser.PLUS - 107)) | (1 << (PowerBuilderParser.MINUS - 107)) | (1 << (PowerBuilderParser.NUMBER - 107)))) !== 0)) {
                            {
                                this.state = 431;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS) {
                                    {
                                        this.state = 430;
                                        _la = this._input.LA(1);
                                        if (!(_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS)) {
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
                                this.state = 433;
                                this.match(PowerBuilderParser.NUMBER);
                                this.state = 439;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === PowerBuilderParser.TO) {
                                    {
                                        this.state = 434;
                                        this.match(PowerBuilderParser.TO);
                                        this.state = 436;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS) {
                                            {
                                                this.state = 435;
                                                _la = this._input.LA(1);
                                                if (!(_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS)) {
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
                                        this.state = 438;
                                        this.match(PowerBuilderParser.NUMBER);
                                    }
                                }
                                this.state = 455;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === PowerBuilderParser.COMMA) {
                                    {
                                        {
                                            this.state = 441;
                                            this.match(PowerBuilderParser.COMMA);
                                            this.state = 443;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS) {
                                                {
                                                    this.state = 442;
                                                    _la = this._input.LA(1);
                                                    if (!(_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS)) {
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
                                            this.state = 445;
                                            this.match(PowerBuilderParser.NUMBER);
                                            this.state = 451;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === PowerBuilderParser.TO) {
                                                {
                                                    this.state = 446;
                                                    this.match(PowerBuilderParser.TO);
                                                    this.state = 448;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if (_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS) {
                                                        {
                                                            this.state = 447;
                                                            _la = this._input.LA(1);
                                                            if (!(_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS)) {
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
                                                    this.state = 450;
                                                    this.match(PowerBuilderParser.NUMBER);
                                                }
                                            }
                                        }
                                    }
                                    this.state = 457;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 460;
                        this.match(PowerBuilderParser.RBRACE);
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
    PowerBuilderParser.prototype.constant_decl_sub = function () {
        var _localctx = new Constant_decl_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, PowerBuilderParser.RULE_constant_decl_sub);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.constant_decl = function () {
        var _localctx = new Constant_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, PowerBuilderParser.RULE_constant_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this.constant_decl_sub();
                this.state = 466;
                this.match(PowerBuilderParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.function_forward_decl = function () {
        var _localctx = new Function_forward_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, PowerBuilderParser.RULE_function_forward_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)))) !== 0)) {
                    {
                        this.state = 468;
                        this.access_modif_part();
                    }
                }
                this.state = 472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.GLOBAL || _la === PowerBuilderParser.LOCAL) {
                    {
                        this.state = 471;
                        this.scope_modif();
                    }
                }
                this.state = 477;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.FUNCTION:
                        {
                            this.state = 474;
                            this.match(PowerBuilderParser.FUNCTION);
                            this.state = 475;
                            this.data_type_name();
                        }
                        break;
                    case PowerBuilderParser.SUBROUTINE:
                        {
                            this.state = 476;
                            this.match(PowerBuilderParser.SUBROUTINE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 479;
                this.identifier_name();
                this.state = 480;
                this.match(PowerBuilderParser.LPAREN);
                this.state = 482;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW))) !== 0) || _la === PowerBuilderParser.READONLY || _la === PowerBuilderParser.REF || _la === PowerBuilderParser.ID) {
                    {
                        this.state = 481;
                        this.parameters_list_sub();
                    }
                }
                this.state = 484;
                this.match(PowerBuilderParser.RPAREN);
                this.state = 492;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.LIBRARY) {
                    {
                        this.state = 485;
                        this.match(PowerBuilderParser.LIBRARY);
                        this.state = 486;
                        _la = this._input.LA(1);
                        if (!(_la === PowerBuilderParser.DQUOTED_STRING || _la === PowerBuilderParser.QUOTED_STRING)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 490;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.ALIAS) {
                            {
                                this.state = 487;
                                this.match(PowerBuilderParser.ALIAS);
                                this.state = 488;
                                this.match(PowerBuilderParser.FOR);
                                this.state = 489;
                                _la = this._input.LA(1);
                                if (!(_la === PowerBuilderParser.DQUOTED_STRING || _la === PowerBuilderParser.QUOTED_STRING)) {
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
                    }
                }
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.RPCFUNC) {
                    {
                        this.state = 494;
                        this.match(PowerBuilderParser.RPCFUNC);
                        this.state = 495;
                        this.match(PowerBuilderParser.ALIAS);
                        this.state = 496;
                        this.match(PowerBuilderParser.FOR);
                        this.state = 497;
                        _la = this._input.LA(1);
                        if (!(_la === PowerBuilderParser.DQUOTED_STRING || _la === PowerBuilderParser.QUOTED_STRING)) {
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
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.THROWS) {
                    {
                        this.state = 500;
                        this.match(PowerBuilderParser.THROWS);
                        this.state = 501;
                        this.identifier_name();
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
    PowerBuilderParser.prototype.parameter_sub = function () {
        var _localctx = new Parameter_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, PowerBuilderParser.RULE_parameter_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.READONLY) {
                    {
                        this.state = 504;
                        this.match(PowerBuilderParser.READONLY);
                    }
                }
                this.state = 508;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.REF) {
                    {
                        this.state = 507;
                        this.match(PowerBuilderParser.REF);
                    }
                }
                this.state = 510;
                this.data_type_name();
                this.state = 512;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.LCURLY) {
                    {
                        this.state = 511;
                        this.decimal_decl_sub();
                    }
                }
                this.state = 514;
                this.identifier_name();
                this.state = 516;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.LBRACE || _la === PowerBuilderParser.BRACES) {
                    {
                        this.state = 515;
                        this.array_decl_sub();
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
    PowerBuilderParser.prototype.parameters_list_sub = function () {
        var _localctx = new Parameters_list_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, PowerBuilderParser.RULE_parameters_list_sub);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this.parameter_sub();
                this.state = 523;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 519;
                                this.match(PowerBuilderParser.COMMA);
                                this.state = 520;
                                this.parameter_sub();
                            }
                        }
                    }
                    this.state = 525;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                }
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.COMMA) {
                    {
                        this.state = 526;
                        this.match(PowerBuilderParser.COMMA);
                        this.state = 527;
                        this.match(PowerBuilderParser.DOTDOTDOT);
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
    PowerBuilderParser.prototype.functions_forward_decl = function () {
        var _localctx = new Functions_forward_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, PowerBuilderParser.RULE_functions_forward_decl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.FORWARD || _la === PowerBuilderParser.TYPE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 531;
                this.match(PowerBuilderParser.PROTOTYPES);
                this.state = 533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 532;
                            this.function_forward_decl();
                        }
                    }
                    this.state = 535;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (PowerBuilderParser.GLOBAL - 26)) | (1 << (PowerBuilderParser.PUBLIC - 26)) | (1 << (PowerBuilderParser.PRIVATE - 26)) | (1 << (PowerBuilderParser.FUNCTION - 26)) | (1 << (PowerBuilderParser.SUBROUTINE - 26)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 26)) | (1 << (PowerBuilderParser.PROTECTED - 26)) | (1 << (PowerBuilderParser.PRIVATEREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 26)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 26)) | (1 << (PowerBuilderParser.LOCAL - 26)))) !== 0));
                this.state = 537;
                this.match(PowerBuilderParser.END);
                this.state = 538;
                this.match(PowerBuilderParser.PROTOTYPES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.function_body = function () {
        var _localctx = new Function_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, PowerBuilderParser.RULE_function_body);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 541;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)))) !== 0)) {
                    {
                        this.state = 540;
                        this.access_type();
                    }
                }
                this.state = 544;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.GLOBAL || _la === PowerBuilderParser.LOCAL) {
                    {
                        this.state = 543;
                        this.scope_modif();
                    }
                }
                this.state = 549;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.FUNCTION:
                        {
                            this.state = 546;
                            this.match(PowerBuilderParser.FUNCTION);
                            this.state = 547;
                            this.data_type_name();
                        }
                        break;
                    case PowerBuilderParser.SUBROUTINE:
                        {
                            this.state = 548;
                            this.match(PowerBuilderParser.SUBROUTINE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 551;
                this.identifier_name();
                this.state = 552;
                this.match(PowerBuilderParser.LPAREN);
                this.state = 554;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW))) !== 0) || _la === PowerBuilderParser.READONLY || _la === PowerBuilderParser.REF || _la === PowerBuilderParser.ID) {
                    {
                        this.state = 553;
                        this.parameters_list_sub();
                    }
                }
                this.state = 556;
                this.match(PowerBuilderParser.RPAREN);
                this.state = 559;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.THROWS) {
                    {
                        this.state = 557;
                        this.match(PowerBuilderParser.THROWS);
                        this.state = 558;
                        this.identifier_name();
                    }
                }
                this.state = 565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.SEMI) {
                    {
                        {
                            this.state = 561;
                            this.match(PowerBuilderParser.SEMI);
                            this.state = 562;
                            this.statement();
                        }
                    }
                    this.state = 567;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 568;
                this.match(PowerBuilderParser.END);
                this.state = 569;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.FUNCTION || _la === PowerBuilderParser.SUBROUTINE)) {
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
    PowerBuilderParser.prototype.on_body = function () {
        var _localctx = new On_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, PowerBuilderParser.RULE_on_body);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 571;
                this.match(PowerBuilderParser.ON);
                this.state = 575;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.SUPER:
                    case PowerBuilderParser.ID:
                        {
                            this.state = 572;
                            this.identifier();
                        }
                        break;
                    case PowerBuilderParser.OPEN:
                        {
                            this.state = 573;
                            this.match(PowerBuilderParser.OPEN);
                        }
                        break;
                    case PowerBuilderParser.CLOSE:
                        {
                            this.state = 574;
                            this.match(PowerBuilderParser.CLOSE);
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
    PowerBuilderParser.prototype.event_forward_decl = function () {
        var _localctx = new Event_forward_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, PowerBuilderParser.RULE_event_forward_decl);
        var _la;
        try {
            this.state = 603;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 577;
                        this.match(PowerBuilderParser.EVENT);
                        this.state = 581;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PowerBuilderParser.ID:
                                {
                                    this.state = 578;
                                    this.identifier_name();
                                }
                                break;
                            case PowerBuilderParser.CREATE:
                                {
                                    this.state = 579;
                                    this.match(PowerBuilderParser.CREATE);
                                }
                                break;
                            case PowerBuilderParser.DESTROY:
                                {
                                    this.state = 580;
                                    this.match(PowerBuilderParser.DESTROY);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 584;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.ID) {
                            {
                                this.state = 583;
                                this.identifier_name();
                            }
                        }
                        this.state = 591;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.LPAREN) {
                            {
                                this.state = 586;
                                this.match(PowerBuilderParser.LPAREN);
                                this.state = 588;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW))) !== 0) || _la === PowerBuilderParser.READONLY || _la === PowerBuilderParser.REF || _la === PowerBuilderParser.ID) {
                                    {
                                        this.state = 587;
                                        this.parameters_list_sub();
                                    }
                                }
                                this.state = 590;
                                this.match(PowerBuilderParser.RPAREN);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 593;
                        this.match(PowerBuilderParser.EVENT);
                        this.state = 594;
                        this.match(PowerBuilderParser.TYPE);
                        this.state = 595;
                        this.data_type_name();
                        this.state = 596;
                        this.identifier_name();
                        {
                            this.state = 597;
                            this.match(PowerBuilderParser.LPAREN);
                            this.state = 599;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW))) !== 0) || _la === PowerBuilderParser.READONLY || _la === PowerBuilderParser.REF || _la === PowerBuilderParser.ID) {
                                {
                                    this.state = 598;
                                    this.parameters_list_sub();
                                }
                            }
                            this.state = 601;
                            this.match(PowerBuilderParser.RPAREN);
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
    PowerBuilderParser.prototype.event_body = function () {
        var _localctx = new Event_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, PowerBuilderParser.RULE_event_body);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 605;
                this.match(PowerBuilderParser.EVENT);
                this.state = 608;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.TYPE) {
                    {
                        this.state = 606;
                        this.match(PowerBuilderParser.TYPE);
                        this.state = 607;
                        this.data_type_name();
                    }
                }
                this.state = 613;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                    case 1:
                        {
                            this.state = 610;
                            this.identifier_name();
                            this.state = 611;
                            this.match(PowerBuilderParser.COLONCOLON);
                        }
                        break;
                }
                this.state = 618;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.ID:
                        {
                            this.state = 615;
                            this.identifier_name();
                        }
                        break;
                    case PowerBuilderParser.OPEN:
                        {
                            this.state = 616;
                            this.match(PowerBuilderParser.OPEN);
                        }
                        break;
                    case PowerBuilderParser.CLOSE:
                        {
                            this.state = 617;
                            this.match(PowerBuilderParser.CLOSE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 625;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.LPAREN) {
                    {
                        this.state = 620;
                        this.match(PowerBuilderParser.LPAREN);
                        this.state = 622;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW))) !== 0) || _la === PowerBuilderParser.READONLY || _la === PowerBuilderParser.REF || _la === PowerBuilderParser.ID) {
                            {
                                this.state = 621;
                                this.parameters_list_sub();
                            }
                        }
                        this.state = 624;
                        this.match(PowerBuilderParser.RPAREN);
                    }
                }
                this.state = 631;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.SEMI) {
                    {
                        {
                            this.state = 627;
                            this.match(PowerBuilderParser.SEMI);
                            this.state = 628;
                            this.statement();
                        }
                    }
                    this.state = 633;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 634;
                this.match(PowerBuilderParser.END);
                this.state = 635;
                this.match(PowerBuilderParser.EVENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.access_type = function () {
        var _localctx = new Access_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, PowerBuilderParser.RULE_access_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 637;
                _la = this._input.LA(1);
                if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)))) !== 0))) {
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
    PowerBuilderParser.prototype.access_modif = function () {
        var _localctx = new Access_modifContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, PowerBuilderParser.RULE_access_modif);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 639;
                this.access_type();
                this.state = 640;
                this.match(PowerBuilderParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.access_modif_part = function () {
        var _localctx = new Access_modif_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, PowerBuilderParser.RULE_access_modif_part);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                _la = this._input.LA(1);
                if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)))) !== 0))) {
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
    PowerBuilderParser.prototype.scope_modif = function () {
        var _localctx = new Scope_modifContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, PowerBuilderParser.RULE_scope_modif);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.GLOBAL || _la === PowerBuilderParser.LOCAL)) {
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
    PowerBuilderParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, PowerBuilderParser.RULE_expression);
        try {
            this.state = 648;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PowerBuilderParser.CLOSE:
                case PowerBuilderParser.HALT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 646;
                        this.close_call_sub();
                    }
                    break;
                case PowerBuilderParser.LCURLY:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 647;
                        this.match(PowerBuilderParser.LCURLY);
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
    PowerBuilderParser.prototype.expression_list = function () {
        var _localctx = new Expression_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, PowerBuilderParser.RULE_expression_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 651;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.REF) {
                    {
                        this.state = 650;
                        this.match(PowerBuilderParser.REF);
                    }
                }
                this.state = 653;
                this.expression();
                this.state = 661;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.COMMA) {
                    {
                        {
                            this.state = 654;
                            this.match(PowerBuilderParser.COMMA);
                            this.state = 656;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PowerBuilderParser.REF) {
                                {
                                    this.state = 655;
                                    this.match(PowerBuilderParser.REF);
                                }
                            }
                            this.state = 658;
                            this.expression();
                        }
                    }
                    this.state = 663;
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
    PowerBuilderParser.prototype.boolean_expression = function () {
        var _localctx = new Boolean_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, PowerBuilderParser.RULE_boolean_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 664;
                this.condition_or();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.condition_or = function () {
        var _localctx = new Condition_orContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, PowerBuilderParser.RULE_condition_or);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 666;
                this.condition_and();
                this.state = 671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.OR) {
                    {
                        {
                            this.state = 667;
                            this.match(PowerBuilderParser.OR);
                            this.state = 668;
                            this.condition_and();
                        }
                    }
                    this.state = 673;
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
    PowerBuilderParser.prototype.condition_and = function () {
        var _localctx = new Condition_andContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, PowerBuilderParser.RULE_condition_and);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 674;
                this.condition_not();
                this.state = 679;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.AND) {
                    {
                        {
                            this.state = 675;
                            this.match(PowerBuilderParser.AND);
                            this.state = 676;
                            this.condition_not();
                        }
                    }
                    this.state = 681;
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
    PowerBuilderParser.prototype.condition_not = function () {
        var _localctx = new Condition_notContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, PowerBuilderParser.RULE_condition_not);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 683;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.NOT) {
                    {
                        this.state = 682;
                        this.match(PowerBuilderParser.NOT);
                    }
                }
                this.state = 685;
                this.condition_comparison();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.condition_comparison = function () {
        var _localctx = new Condition_comparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, PowerBuilderParser.RULE_condition_comparison);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this.add_expr();
                this.state = 690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PowerBuilderParser.EQ - 101)) | (1 << (PowerBuilderParser.GT - 101)) | (1 << (PowerBuilderParser.GTE - 101)) | (1 << (PowerBuilderParser.LT - 101)) | (1 << (PowerBuilderParser.LTE - 101)) | (1 << (PowerBuilderParser.GTLT - 101)))) !== 0)) {
                    {
                        this.state = 688;
                        _la = this._input.LA(1);
                        if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PowerBuilderParser.EQ - 101)) | (1 << (PowerBuilderParser.GT - 101)) | (1 << (PowerBuilderParser.GTE - 101)) | (1 << (PowerBuilderParser.LT - 101)) | (1 << (PowerBuilderParser.LTE - 101)) | (1 << (PowerBuilderParser.GTLT - 101)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 689;
                        this.add_expr();
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
    PowerBuilderParser.prototype.add_expr = function () {
        var _localctx = new Add_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, PowerBuilderParser.RULE_add_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 692;
                this.mul_expr();
                this.state = 697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS) {
                    {
                        {
                            this.state = 693;
                            _la = this._input.LA(1);
                            if (!(_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS)) {
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
                            this.mul_expr();
                        }
                    }
                    this.state = 699;
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
    PowerBuilderParser.prototype.mul_expr = function () {
        var _localctx = new Mul_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, PowerBuilderParser.RULE_mul_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 700;
                this.unary_sign_expr();
                this.state = 705;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (PowerBuilderParser.MULT - 112)) | (1 << (PowerBuilderParser.DIV - 112)) | (1 << (PowerBuilderParser.CARAT - 112)))) !== 0)) {
                    {
                        {
                            this.state = 701;
                            _la = this._input.LA(1);
                            if (!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (PowerBuilderParser.MULT - 112)) | (1 << (PowerBuilderParser.DIV - 112)) | (1 << (PowerBuilderParser.CARAT - 112)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 702;
                            this.unary_sign_expr();
                        }
                    }
                    this.state = 707;
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
    PowerBuilderParser.prototype.unary_sign_expr = function () {
        var _localctx = new Unary_sign_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, PowerBuilderParser.RULE_unary_sign_expr);
        var _la;
        try {
            this.state = 716;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PowerBuilderParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 708;
                        this.match(PowerBuilderParser.LPAREN);
                        this.state = 709;
                        this.expression();
                        this.state = 710;
                        this.match(PowerBuilderParser.RPAREN);
                    }
                    break;
                case PowerBuilderParser.ANY:
                case PowerBuilderParser.BLOB:
                case PowerBuilderParser.BOOLEAN:
                case PowerBuilderParser.BYTE:
                case PowerBuilderParser.CHARACTER:
                case PowerBuilderParser.CHAR:
                case PowerBuilderParser.DATE_TYPE:
                case PowerBuilderParser.DATETIME:
                case PowerBuilderParser.DECIMAL:
                case PowerBuilderParser.DEC:
                case PowerBuilderParser.DOUBLE:
                case PowerBuilderParser.INTEGER:
                case PowerBuilderParser.INT:
                case PowerBuilderParser.LONG:
                case PowerBuilderParser.LONGLONG:
                case PowerBuilderParser.REAL:
                case PowerBuilderParser.STRING:
                case PowerBuilderParser.TIME_TYPE:
                case PowerBuilderParser.UNSIGNEDINTEGER:
                case PowerBuilderParser.UINT:
                case PowerBuilderParser.UNSIGNEDLONG:
                case PowerBuilderParser.ULONG:
                case PowerBuilderParser.WINDOW:
                case PowerBuilderParser.TRUE:
                case PowerBuilderParser.FALSE:
                case PowerBuilderParser.EVENT:
                case PowerBuilderParser.DESCRIBE:
                case PowerBuilderParser.SUPER:
                case PowerBuilderParser.PLUS:
                case PowerBuilderParser.MINUS:
                case PowerBuilderParser.DQUOTED_STRING:
                case PowerBuilderParser.QUOTED_STRING:
                case PowerBuilderParser.NUMBER:
                case PowerBuilderParser.DATE:
                case PowerBuilderParser.TIME:
                case PowerBuilderParser.ENUM:
                case PowerBuilderParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 713;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS) {
                            {
                                this.state = 712;
                                _la = this._input.LA(1);
                                if (!(_la === PowerBuilderParser.PLUS || _la === PowerBuilderParser.MINUS)) {
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
                        this.state = 715;
                        this.atom();
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
    PowerBuilderParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, PowerBuilderParser.RULE_statement);
        try {
            this.state = 747;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 718;
                        this.if_simple_statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 719;
                        this.match(PowerBuilderParser.DESCRIBE);
                        this.state = 720;
                        this.identifier_name();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 721;
                        this.assignment_statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 722;
                        this.statement_sub();
                        this.state = 723;
                        this.match(PowerBuilderParser.SEMI);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 725;
                        this.if_statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 726;
                        this.match(PowerBuilderParser.TRY);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 727;
                        this.post_event();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 728;
                        this.function_call_statement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 729;
                        this.event_call_statement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 730;
                        this.constant_decl();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 731;
                        this.variable_decl();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 732;
                        this.super_call_statement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 733;
                        this.do_loop_while_statement();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 734;
                        this.do_while_loop_statement();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 735;
                        this.create_call_statement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 736;
                        this.destroy_call_statement();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 737;
                        this.label_stat();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 738;
                        this.identifier();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 739;
                        this.throw_stat();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 740;
                        this.goto_stat();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 741;
                        this.choose_statement();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 742;
                        this.return_statement();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 743;
                        this.for_loop_statement();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 744;
                        this.continue_statement();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 745;
                        this.exit_statement();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 746;
                        this.atom();
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
    PowerBuilderParser.prototype.statement_sub = function () {
        var _localctx = new Statement_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, PowerBuilderParser.RULE_statement_sub);
        try {
            this.state = 761;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 749;
                        this.function_virtual_call_expression_sub();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 750;
                        this.function_call_expression_sub();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 751;
                        this.return_statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 752;
                        this.open_call_sub();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 753;
                        this.close_call_sub();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 754;
                        this.variable_decl_sub();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 755;
                        this.super_call_statement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 756;
                        this.create_call_sub();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 757;
                        this.destroy_call_sub();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 758;
                        this.continue_sub();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 759;
                        this.goto_stat();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 760;
                        this.assignment_sub();
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
    PowerBuilderParser.prototype.assignment_sub = function () {
        var _localctx = new Assignment_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, PowerBuilderParser.RULE_assignment_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this.lvalue_sub();
                this.state = 764;
                _la = this._input.LA(1);
                if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PowerBuilderParser.EQ - 101)) | (1 << (PowerBuilderParser.PLUSEQ - 101)) | (1 << (PowerBuilderParser.MINUSEQ - 101)) | (1 << (PowerBuilderParser.MULTEQ - 101)) | (1 << (PowerBuilderParser.DIVEQ - 101)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 769;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                    case 1:
                        {
                            this.state = 765;
                            this.match(PowerBuilderParser.NOT);
                        }
                        break;
                    case 2:
                        {
                            this.state = 766;
                            this.match(PowerBuilderParser.LCURLY);
                        }
                        break;
                    case 3:
                        {
                            this.state = 767;
                            this.boolean_expression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 768;
                            this.expression();
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
    PowerBuilderParser.prototype.assignment_statement = function () {
        var _localctx = new Assignment_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, PowerBuilderParser.RULE_assignment_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.assignment_sub();
                this.state = 773;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 772;
                            this.match(PowerBuilderParser.SEMI);
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
    PowerBuilderParser.prototype.lvalue_sub = function () {
        var _localctx = new Lvalue_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, PowerBuilderParser.RULE_lvalue_sub);
        try {
            this.state = 783;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 775;
                        this.atom_sub();
                        this.state = 776;
                        this.match(PowerBuilderParser.DOT);
                        this.state = 777;
                        this.identifier_name_ex();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 779;
                        this.atom_sub_call1();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 780;
                        this.atom_sub_array1();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 781;
                        this.atom_sub_ref1();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 782;
                        this.atom_sub_member1();
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
    PowerBuilderParser.prototype.return_statement = function () {
        var _localctx = new Return_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, PowerBuilderParser.RULE_return_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 785;
                this.match(PowerBuilderParser.RETURN);
                this.state = 787;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                    case 1:
                        {
                            this.state = 786;
                            this.expression();
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
    PowerBuilderParser.prototype.function_call_expression_sub = function () {
        var _localctx = new Function_call_expression_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, PowerBuilderParser.RULE_function_call_expression_sub);
        try {
            this.state = 794;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 789;
                        this.atom_sub();
                        this.state = 790;
                        this.match(PowerBuilderParser.DOT);
                        this.state = 791;
                        this.identifier_name_ex();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 793;
                        this.atom_sub_call1();
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
    PowerBuilderParser.prototype.function_virtual_call_expression_sub = function () {
        var _localctx = new Function_virtual_call_expression_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, PowerBuilderParser.RULE_function_virtual_call_expression_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 796;
                this.identifier_name();
                this.state = 797;
                this.match(PowerBuilderParser.DOT);
                this.state = 804;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.DYNAMIC:
                        {
                            this.state = 798;
                            this.match(PowerBuilderParser.DYNAMIC);
                            this.state = 800;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PowerBuilderParser.EVENT) {
                                {
                                    this.state = 799;
                                    this.match(PowerBuilderParser.EVENT);
                                }
                            }
                        }
                        break;
                    case PowerBuilderParser.EVENT:
                        {
                            this.state = 802;
                            this.match(PowerBuilderParser.EVENT);
                            this.state = 803;
                            this.match(PowerBuilderParser.DYNAMIC);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 806;
                this.function_call_expression_sub();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.open_call_sub = function () {
        var _localctx = new Open_call_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, PowerBuilderParser.RULE_open_call_sub);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 808;
                this.match(PowerBuilderParser.OPEN);
                this.state = 809;
                this.match(PowerBuilderParser.LPAREN);
                this.state = 810;
                this.expression_list();
                this.state = 811;
                this.match(PowerBuilderParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.close_call_sub = function () {
        var _localctx = new Close_call_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, PowerBuilderParser.RULE_close_call_sub);
        try {
            this.state = 820;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PowerBuilderParser.CLOSE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 813;
                        this.match(PowerBuilderParser.CLOSE);
                        this.state = 814;
                        this.match(PowerBuilderParser.LPAREN);
                        this.state = 815;
                        this.expression_list();
                        this.state = 816;
                        this.match(PowerBuilderParser.RPAREN);
                    }
                    break;
                case PowerBuilderParser.HALT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 818;
                        this.match(PowerBuilderParser.HALT);
                        this.state = 819;
                        this.match(PowerBuilderParser.CLOSE);
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
    PowerBuilderParser.prototype.function_call_statement = function () {
        var _localctx = new Function_call_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, PowerBuilderParser.RULE_function_call_statement);
        try {
            this.state = 826;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 822;
                        this.function_call_expression_sub();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 823;
                        this.function_virtual_call_expression_sub();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 824;
                        this.open_call_sub();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 825;
                        this.close_call_sub();
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
    PowerBuilderParser.prototype.super_call_statement = function () {
        var _localctx = new Super_call_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, PowerBuilderParser.RULE_super_call_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 828;
                this.match(PowerBuilderParser.CALL);
                this.state = 832;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                    case 1:
                        {
                            this.state = 829;
                            this.identifier_name();
                            this.state = 830;
                            this.match(PowerBuilderParser.TICK);
                        }
                        break;
                }
                this.state = 836;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                    case 1:
                        {
                            this.state = 834;
                            this.atom_sub_call1();
                        }
                        break;
                    case 2:
                        {
                            this.state = 835;
                            this.atom_sub_member1();
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
    PowerBuilderParser.prototype.event_call_statement_sub = function () {
        var _localctx = new Event_call_statement_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, PowerBuilderParser.RULE_event_call_statement_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 847;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.ID:
                        {
                            this.state = 838;
                            this.identifier_name();
                            this.state = 839;
                            this.match(PowerBuilderParser.DOT);
                            this.state = 843;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PowerBuilderParser.ID) {
                                {
                                    this.state = 840;
                                    this.identifier_name();
                                    this.state = 841;
                                    this.match(PowerBuilderParser.DOT);
                                }
                            }
                        }
                        break;
                    case PowerBuilderParser.SUPER:
                        {
                            this.state = 845;
                            this.match(PowerBuilderParser.SUPER);
                            this.state = 846;
                            this.match(PowerBuilderParser.COLONCOLON);
                        }
                        break;
                    case PowerBuilderParser.EVENT:
                        break;
                    default:
                        break;
                }
                this.state = 849;
                this.match(PowerBuilderParser.EVENT);
                this.state = 850;
                this.atom_sub_call1();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.event_call_statement = function () {
        var _localctx = new Event_call_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, PowerBuilderParser.RULE_event_call_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 852;
                this.event_call_statement_sub();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.create_call_sub = function () {
        var _localctx = new Create_call_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, PowerBuilderParser.RULE_create_call_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 854;
                this.match(PowerBuilderParser.CREATE);
                this.state = 856;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.USING) {
                    {
                        this.state = 855;
                        this.match(PowerBuilderParser.USING);
                    }
                }
                this.state = 861;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                    case 1:
                        {
                            this.state = 858;
                            this.identifier_name();
                            this.state = 859;
                            this.match(PowerBuilderParser.DOT);
                        }
                        break;
                }
                this.state = 863;
                this.data_type_name();
                this.state = 869;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.LPAREN) {
                    {
                        this.state = 864;
                        this.match(PowerBuilderParser.LPAREN);
                        this.state = 866;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.REF || _la === PowerBuilderParser.CLOSE || _la === PowerBuilderParser.HALT || _la === PowerBuilderParser.LCURLY) {
                            {
                                this.state = 865;
                                this.expression_list();
                            }
                        }
                        this.state = 868;
                        this.match(PowerBuilderParser.RPAREN);
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
    PowerBuilderParser.prototype.create_call_statement = function () {
        var _localctx = new Create_call_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, PowerBuilderParser.RULE_create_call_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 871;
                this.create_call_sub();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.destroy_call_sub = function () {
        var _localctx = new Destroy_call_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, PowerBuilderParser.RULE_destroy_call_sub);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                this.match(PowerBuilderParser.DESTROY);
                this.state = 874;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.destroy_call_statement = function () {
        var _localctx = new Destroy_call_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, PowerBuilderParser.RULE_destroy_call_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 876;
                this.destroy_call_sub();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.for_loop_statement = function () {
        var _localctx = new For_loop_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, PowerBuilderParser.RULE_for_loop_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 878;
                this.match(PowerBuilderParser.FOR);
                this.state = 879;
                this.lvalue_sub();
                this.state = 880;
                this.match(PowerBuilderParser.EQ);
                this.state = 881;
                this.expression();
                this.state = 882;
                this.match(PowerBuilderParser.TO);
                this.state = 883;
                this.expression();
                this.state = 886;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.STEP) {
                    {
                        this.state = 884;
                        this.match(PowerBuilderParser.STEP);
                        this.state = 885;
                        this.expression();
                    }
                }
                this.state = 888;
                this.statement();
                this.state = 889;
                this.match(PowerBuilderParser.NEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.do_while_loop_statement = function () {
        var _localctx = new Do_while_loop_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, PowerBuilderParser.RULE_do_while_loop_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 891;
                this.match(PowerBuilderParser.DO);
                this.state = 892;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.WHILE || _la === PowerBuilderParser.UNTIL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 893;
                this.boolean_expression();
                this.state = 897;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 894;
                            this.statement();
                        }
                    }
                    this.state = 899;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 900;
                this.match(PowerBuilderParser.LOOP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.do_loop_while_statement = function () {
        var _localctx = new Do_loop_while_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, PowerBuilderParser.RULE_do_loop_while_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 902;
                this.match(PowerBuilderParser.DO);
                this.state = 906;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 903;
                            this.statement();
                        }
                    }
                    this.state = 908;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 909;
                this.match(PowerBuilderParser.LOOP);
                this.state = 910;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.WHILE || _la === PowerBuilderParser.UNTIL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 911;
                this.boolean_expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.if_statement = function () {
        var _localctx = new If_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, PowerBuilderParser.RULE_if_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 913;
                this.match(PowerBuilderParser.IF);
                this.state = 914;
                this.boolean_expression();
                this.state = 915;
                this.match(PowerBuilderParser.THEN);
                this.state = 919;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 916;
                            this.statement();
                        }
                    }
                    this.state = 921;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 933;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.ELSEIF) {
                    {
                        {
                            this.state = 922;
                            this.match(PowerBuilderParser.ELSEIF);
                            this.state = 923;
                            this.boolean_expression();
                            this.state = 924;
                            this.match(PowerBuilderParser.THEN);
                            this.state = 928;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                                {
                                    {
                                        this.state = 925;
                                        this.statement();
                                    }
                                }
                                this.state = 930;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 935;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 943;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.ELSE) {
                    {
                        this.state = 936;
                        this.match(PowerBuilderParser.ELSE);
                        this.state = 940;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                            {
                                {
                                    this.state = 937;
                                    this.statement();
                                }
                            }
                            this.state = 942;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 945;
                this.match(PowerBuilderParser.END);
                this.state = 946;
                this.match(PowerBuilderParser.IF);
                this.state = 948;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                    case 1:
                        {
                            this.state = 947;
                            this.match(PowerBuilderParser.SEMI);
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
    PowerBuilderParser.prototype.if_simple_statement = function () {
        var _localctx = new If_simple_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, PowerBuilderParser.RULE_if_simple_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 950;
                this.match(PowerBuilderParser.IF);
                this.state = 951;
                this.boolean_expression();
                this.state = 952;
                this.match(PowerBuilderParser.THEN);
                this.state = 953;
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
    PowerBuilderParser.prototype.continue_statement = function () {
        var _localctx = new Continue_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, PowerBuilderParser.RULE_continue_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 955;
                this.match(PowerBuilderParser.CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.continue_sub = function () {
        var _localctx = new Continue_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, PowerBuilderParser.RULE_continue_sub);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 957;
                this.match(PowerBuilderParser.CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.post_event = function () {
        var _localctx = new Post_eventContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, PowerBuilderParser.RULE_post_event);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 962;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.SUPER || _la === PowerBuilderParser.ID) {
                    {
                        this.state = 959;
                        this.atom_sub_member1();
                        this.state = 960;
                        this.match(PowerBuilderParser.DOT);
                    }
                }
                this.state = 964;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.POST || _la === PowerBuilderParser.TRIGGER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 966;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.EVENT) {
                    {
                        this.state = 965;
                        this.match(PowerBuilderParser.EVENT);
                    }
                }
                this.state = 968;
                this.identifier_name_ex();
                this.state = 969;
                this.match(PowerBuilderParser.LPAREN);
                this.state = 971;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.REF || _la === PowerBuilderParser.CLOSE || _la === PowerBuilderParser.HALT || _la === PowerBuilderParser.LCURLY) {
                    {
                        this.state = 970;
                        this.expression_list();
                    }
                }
                this.state = 973;
                this.match(PowerBuilderParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.exit_statement = function () {
        var _localctx = new Exit_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, PowerBuilderParser.RULE_exit_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 975;
                this.match(PowerBuilderParser.EXIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.choose_statement = function () {
        var _localctx = new Choose_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, PowerBuilderParser.RULE_choose_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 977;
                this.match(PowerBuilderParser.CHOOSE);
                this.state = 978;
                this.match(PowerBuilderParser.CASE);
                this.state = 979;
                this.expression();
                this.state = 984;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 984;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                            case 1:
                                {
                                    this.state = 980;
                                    this.choose_case_range_sub();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 981;
                                    this.choose_case_cond_sub();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 982;
                                    this.choose_case_else_sub();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 983;
                                    this.choose_case_value_sub();
                                }
                                break;
                        }
                    }
                    this.state = 986;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PowerBuilderParser.CASE);
                this.state = 988;
                this.match(PowerBuilderParser.END);
                this.state = 989;
                this.match(PowerBuilderParser.CHOOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.choose_case_value_sub = function () {
        var _localctx = new Choose_case_value_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, PowerBuilderParser.RULE_choose_case_value_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 991;
                this.match(PowerBuilderParser.CASE);
                this.state = 992;
                this.expression();
                this.state = 997;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.COMMA) {
                    {
                        {
                            this.state = 993;
                            this.match(PowerBuilderParser.COMMA);
                            this.state = 994;
                            this.expression();
                        }
                    }
                    this.state = 999;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1003;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 1000;
                            this.statement();
                        }
                    }
                    this.state = 1005;
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
    PowerBuilderParser.prototype.choose_case_cond_sub = function () {
        var _localctx = new Choose_case_cond_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, PowerBuilderParser.RULE_choose_case_cond_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1006;
                this.match(PowerBuilderParser.CASE);
                this.state = 1007;
                this.match(PowerBuilderParser.IS);
                this.state = 1008;
                _la = this._input.LA(1);
                if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PowerBuilderParser.EQ - 101)) | (1 << (PowerBuilderParser.GT - 101)) | (1 << (PowerBuilderParser.GTE - 101)) | (1 << (PowerBuilderParser.LT - 101)) | (1 << (PowerBuilderParser.LTE - 101)) | (1 << (PowerBuilderParser.GTLT - 101)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1009;
                this.expression();
                this.state = 1013;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 1010;
                            this.statement();
                        }
                    }
                    this.state = 1015;
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
    PowerBuilderParser.prototype.choose_case_range_sub = function () {
        var _localctx = new Choose_case_range_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, PowerBuilderParser.RULE_choose_case_range_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1016;
                this.match(PowerBuilderParser.CASE);
                this.state = 1017;
                this.atom();
                this.state = 1018;
                this.match(PowerBuilderParser.TO);
                this.state = 1019;
                this.atom();
                this.state = 1023;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 1020;
                            this.statement();
                        }
                    }
                    this.state = 1025;
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
    PowerBuilderParser.prototype.choose_case_else_sub = function () {
        var _localctx = new Choose_case_else_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, PowerBuilderParser.RULE_choose_case_else_sub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1026;
                this.match(PowerBuilderParser.CASE);
                this.state = 1027;
                this.match(PowerBuilderParser.ELSE);
                this.state = 1031;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 1028;
                            this.statement();
                        }
                    }
                    this.state = 1033;
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
    PowerBuilderParser.prototype.goto_stat = function () {
        var _localctx = new Goto_statContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, PowerBuilderParser.RULE_goto_stat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1034;
                this.match(PowerBuilderParser.GOTO);
                this.state = 1035;
                this.identifier_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.label_stat = function () {
        var _localctx = new Label_statContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, PowerBuilderParser.RULE_label_stat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1037;
                this.identifier_name();
                this.state = 1038;
                this.match(PowerBuilderParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.try_catch_block = function () {
        var _localctx = new Try_catch_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, PowerBuilderParser.RULE_try_catch_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1040;
                this.match(PowerBuilderParser.TRY);
                this.state = 1044;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                    {
                        {
                            this.state = 1041;
                            this.statement();
                        }
                    }
                    this.state = 1046;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1059;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.CATCH) {
                    {
                        {
                            this.state = 1047;
                            this.match(PowerBuilderParser.CATCH);
                            this.state = 1048;
                            this.match(PowerBuilderParser.LPAREN);
                            this.state = 1049;
                            this.variable_decl_sub();
                            this.state = 1050;
                            this.match(PowerBuilderParser.RPAREN);
                            this.state = 1054;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                                {
                                    {
                                        this.state = 1051;
                                        this.statement();
                                    }
                                }
                                this.state = 1056;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 1061;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1069;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.FINALLY) {
                    {
                        this.state = 1062;
                        this.match(PowerBuilderParser.FINALLY);
                        this.state = 1066;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW) | (1 << PowerBuilderParser.TRUE) | (1 << PowerBuilderParser.FALSE) | (1 << PowerBuilderParser.GLOBAL) | (1 << PowerBuilderParser.INDIRECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PowerBuilderParser.PUBLIC - 32)) | (1 << (PowerBuilderParser.PRIVATE - 32)) | (1 << (PowerBuilderParser.PRIVATEWRITE - 32)) | (1 << (PowerBuilderParser.PROTECTED - 32)) | (1 << (PowerBuilderParser.PRIVATEREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDREAD - 32)) | (1 << (PowerBuilderParser.PROTECTEDWRITE - 32)) | (1 << (PowerBuilderParser.LOCAL - 32)) | (1 << (PowerBuilderParser.EVENT - 32)) | (1 << (PowerBuilderParser.OPEN - 32)) | (1 << (PowerBuilderParser.GOTO - 32)) | (1 << (PowerBuilderParser.IF - 32)) | (1 << (PowerBuilderParser.TRY - 32)) | (1 << (PowerBuilderParser.EXIT - 32)) | (1 << (PowerBuilderParser.CHOOSE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PowerBuilderParser.CONTINUE - 65)) | (1 << (PowerBuilderParser.DO - 65)) | (1 << (PowerBuilderParser.FOR - 65)) | (1 << (PowerBuilderParser.CLOSE - 65)) | (1 << (PowerBuilderParser.THROW - 65)) | (1 << (PowerBuilderParser.CREATE - 65)) | (1 << (PowerBuilderParser.DESTROY - 65)) | (1 << (PowerBuilderParser.POST - 65)) | (1 << (PowerBuilderParser.TRIGGER - 65)) | (1 << (PowerBuilderParser.DESCRIBE - 65)) | (1 << (PowerBuilderParser.RETURN - 65)) | (1 << (PowerBuilderParser.CALL - 65)) | (1 << (PowerBuilderParser.HALT - 65)) | (1 << (PowerBuilderParser.SUPER - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PowerBuilderParser.DQUOTED_STRING - 123)) | (1 << (PowerBuilderParser.QUOTED_STRING - 123)) | (1 << (PowerBuilderParser.SEMI - 123)) | (1 << (PowerBuilderParser.RPAREN - 123)) | (1 << (PowerBuilderParser.NUMBER - 123)) | (1 << (PowerBuilderParser.DATE - 123)) | (1 << (PowerBuilderParser.TIME - 123)) | (1 << (PowerBuilderParser.ENUM - 123)) | (1 << (PowerBuilderParser.ID - 123)))) !== 0)) {
                            {
                                {
                                    this.state = 1063;
                                    this.statement();
                                }
                            }
                            this.state = 1068;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 1071;
                this.match(PowerBuilderParser.END);
                this.state = 1072;
                this.match(PowerBuilderParser.TRY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.throw_stat = function () {
        var _localctx = new Throw_statContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, PowerBuilderParser.RULE_throw_stat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1074;
                this.match(PowerBuilderParser.THROW);
                this.state = 1075;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, PowerBuilderParser.RULE_identifier);
        var _la;
        try {
            this.state = 1097;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1077;
                        this.identifier_name();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1078;
                        this.match(PowerBuilderParser.SUPER);
                        this.state = 1079;
                        this.match(PowerBuilderParser.COLONCOLON);
                        this.state = 1083;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PowerBuilderParser.CREATE:
                                {
                                    this.state = 1080;
                                    this.match(PowerBuilderParser.CREATE);
                                }
                                break;
                            case PowerBuilderParser.DESTROY:
                                {
                                    this.state = 1081;
                                    this.match(PowerBuilderParser.DESTROY);
                                }
                                break;
                            case PowerBuilderParser.READONLY:
                            case PowerBuilderParser.TYPE:
                            case PowerBuilderParser.UPDATE:
                            case PowerBuilderParser.OPEN:
                            case PowerBuilderParser.GOTO:
                            case PowerBuilderParser.CLOSE:
                            case PowerBuilderParser.SELECT:
                            case PowerBuilderParser.DELETE:
                            case PowerBuilderParser.INSERT:
                            case PowerBuilderParser.DESCRIBE:
                            case PowerBuilderParser.TIME:
                            case PowerBuilderParser.ID:
                                {
                                    this.state = 1082;
                                    this.identifier_name_ex();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1085;
                        this.identifier_name();
                        this.state = 1086;
                        this.match(PowerBuilderParser.COLONCOLON);
                        this.state = 1087;
                        _la = this._input.LA(1);
                        if (!(_la === PowerBuilderParser.CREATE || _la === PowerBuilderParser.DESTROY)) {
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
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1089;
                        this.identifier_name();
                        this.state = 1090;
                        this.match(PowerBuilderParser.DOT);
                        this.state = 1091;
                        _la = this._input.LA(1);
                        if (!(_la === PowerBuilderParser.CREATE || _la === PowerBuilderParser.DESTROY)) {
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
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1093;
                        this.identifier_name();
                        this.state = 1094;
                        this.match(PowerBuilderParser.COLONCOLON);
                        this.state = 1095;
                        this.identifier_name_ex();
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
    PowerBuilderParser.prototype.identifier_name_ex = function () {
        var _localctx = new Identifier_name_exContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, PowerBuilderParser.RULE_identifier_name_ex);
        try {
            this.state = 1111;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PowerBuilderParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1099;
                        this.identifier_name();
                    }
                    break;
                case PowerBuilderParser.SELECT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1100;
                        this.match(PowerBuilderParser.SELECT);
                    }
                    break;
                case PowerBuilderParser.TYPE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1101;
                        this.match(PowerBuilderParser.TYPE);
                    }
                    break;
                case PowerBuilderParser.UPDATE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1102;
                        this.match(PowerBuilderParser.UPDATE);
                    }
                    break;
                case PowerBuilderParser.DELETE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1103;
                        this.match(PowerBuilderParser.DELETE);
                    }
                    break;
                case PowerBuilderParser.OPEN:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1104;
                        this.match(PowerBuilderParser.OPEN);
                    }
                    break;
                case PowerBuilderParser.CLOSE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1105;
                        this.match(PowerBuilderParser.CLOSE);
                    }
                    break;
                case PowerBuilderParser.GOTO:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1106;
                        this.match(PowerBuilderParser.GOTO);
                    }
                    break;
                case PowerBuilderParser.INSERT:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1107;
                        this.match(PowerBuilderParser.INSERT);
                    }
                    break;
                case PowerBuilderParser.DESCRIBE:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1108;
                        this.match(PowerBuilderParser.DESCRIBE);
                    }
                    break;
                case PowerBuilderParser.TIME:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1109;
                        this.match(PowerBuilderParser.TIME);
                    }
                    break;
                case PowerBuilderParser.READONLY:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1110;
                        this.match(PowerBuilderParser.READONLY);
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
    PowerBuilderParser.prototype.identifier_name = function () {
        var _localctx = new Identifier_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, PowerBuilderParser.RULE_identifier_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1113;
                this.match(PowerBuilderParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.atom_sub = function () {
        var _localctx = new Atom_subContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, PowerBuilderParser.RULE_atom_sub);
        var _la;
        try {
            this.state = 1124;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1115;
                        this.array_access_atom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1116;
                        this.identifier_name();
                        this.state = 1122;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PowerBuilderParser.LPAREN) {
                            {
                                this.state = 1117;
                                this.match(PowerBuilderParser.LPAREN);
                                this.state = 1119;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === PowerBuilderParser.REF || _la === PowerBuilderParser.CLOSE || _la === PowerBuilderParser.HALT || _la === PowerBuilderParser.LCURLY) {
                                    {
                                        this.state = 1118;
                                        this.expression_list();
                                    }
                                }
                                this.state = 1121;
                                this.match(PowerBuilderParser.RPAREN);
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
    PowerBuilderParser.prototype.atom_sub_call1 = function () {
        var _localctx = new Atom_sub_call1Context(this._ctx, this.state);
        this.enterRule(_localctx, 158, PowerBuilderParser.RULE_atom_sub_call1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1128;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PowerBuilderParser.SUPER:
                    case PowerBuilderParser.ID:
                        {
                            this.state = 1126;
                            this.identifier();
                        }
                        break;
                    case PowerBuilderParser.DESCRIBE:
                        {
                            this.state = 1127;
                            this.match(PowerBuilderParser.DESCRIBE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1130;
                this.match(PowerBuilderParser.LPAREN);
                this.state = 1132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PowerBuilderParser.REF || _la === PowerBuilderParser.CLOSE || _la === PowerBuilderParser.HALT || _la === PowerBuilderParser.LCURLY) {
                    {
                        this.state = 1131;
                        this.expression_list();
                    }
                }
                this.state = 1134;
                this.match(PowerBuilderParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.atom_sub_array1 = function () {
        var _localctx = new Atom_sub_array1Context(this._ctx, this.state);
        this.enterRule(_localctx, 160, PowerBuilderParser.RULE_atom_sub_array1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1136;
                this.identifier_name();
                this.state = 1137;
                this.match(PowerBuilderParser.LBRACE);
                this.state = 1138;
                this.expression_list();
                this.state = 1139;
                this.match(PowerBuilderParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.atom_sub_ref1 = function () {
        var _localctx = new Atom_sub_ref1Context(this._ctx, this.state);
        this.enterRule(_localctx, 162, PowerBuilderParser.RULE_atom_sub_ref1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1141;
                this.identifier_name();
                this.state = 1142;
                this.match(PowerBuilderParser.BRACES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.atom_sub_member1 = function () {
        var _localctx = new Atom_sub_member1Context(this._ctx, this.state);
        this.enterRule(_localctx, 164, PowerBuilderParser.RULE_atom_sub_member1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1144;
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
    PowerBuilderParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, PowerBuilderParser.RULE_atom);
        try {
            this.state = 1163;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1146;
                        this.event_call_statement_sub();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1147;
                        this.atom_sub();
                        {
                            this.state = 1148;
                            this.match(PowerBuilderParser.DOT);
                            this.state = 1149;
                            this.identifier_name_ex();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1151;
                        this.cast_expression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1152;
                        this.atom_sub_call1();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1153;
                        this.atom_sub_array1();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1154;
                        this.atom_sub_ref1();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1155;
                        this.atom_sub_member1();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1156;
                        this.numeric_atom();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1157;
                        this.boolean_atom();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1158;
                        this.match(PowerBuilderParser.ENUM);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1159;
                        this.match(PowerBuilderParser.DQUOTED_STRING);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1160;
                        this.match(PowerBuilderParser.QUOTED_STRING);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1161;
                        this.match(PowerBuilderParser.DATE);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1162;
                        this.match(PowerBuilderParser.TIME);
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
    PowerBuilderParser.prototype.array_access_atom = function () {
        var _localctx = new Array_access_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, PowerBuilderParser.RULE_array_access_atom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1165;
                this.identifier_name();
                this.state = 1166;
                this.match(PowerBuilderParser.LBRACE);
                this.state = 1167;
                this.expression_list();
                this.state = 1168;
                this.match(PowerBuilderParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.numeric_atom = function () {
        var _localctx = new Numeric_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, PowerBuilderParser.RULE_numeric_atom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1170;
                this.match(PowerBuilderParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.boolean_atom = function () {
        var _localctx = new Boolean_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, PowerBuilderParser.RULE_boolean_atom);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1172;
                _la = this._input.LA(1);
                if (!(_la === PowerBuilderParser.TRUE || _la === PowerBuilderParser.FALSE)) {
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
    PowerBuilderParser.prototype.cast_expression = function () {
        var _localctx = new Cast_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, PowerBuilderParser.RULE_cast_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1174;
                this.dataTypeSub();
                this.state = 1175;
                this.match(PowerBuilderParser.LPAREN);
                this.state = 1176;
                this.expression();
                this.state = 1181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PowerBuilderParser.COMMA) {
                    {
                        {
                            this.state = 1177;
                            this.match(PowerBuilderParser.COMMA);
                            this.state = 1178;
                            this.expression();
                        }
                    }
                    this.state = 1183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1184;
                this.match(PowerBuilderParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PowerBuilderParser.prototype.data_type_name = function () {
        var _localctx = new Data_type_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, PowerBuilderParser.RULE_data_type_name);
        try {
            this.state = 1188;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PowerBuilderParser.ANY:
                case PowerBuilderParser.BLOB:
                case PowerBuilderParser.BOOLEAN:
                case PowerBuilderParser.BYTE:
                case PowerBuilderParser.CHARACTER:
                case PowerBuilderParser.CHAR:
                case PowerBuilderParser.DATE_TYPE:
                case PowerBuilderParser.DATETIME:
                case PowerBuilderParser.DECIMAL:
                case PowerBuilderParser.DEC:
                case PowerBuilderParser.DOUBLE:
                case PowerBuilderParser.INTEGER:
                case PowerBuilderParser.INT:
                case PowerBuilderParser.LONG:
                case PowerBuilderParser.LONGLONG:
                case PowerBuilderParser.REAL:
                case PowerBuilderParser.STRING:
                case PowerBuilderParser.TIME_TYPE:
                case PowerBuilderParser.UNSIGNEDINTEGER:
                case PowerBuilderParser.UINT:
                case PowerBuilderParser.UNSIGNEDLONG:
                case PowerBuilderParser.ULONG:
                case PowerBuilderParser.WINDOW:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1186;
                        this.dataTypeSub();
                    }
                    break;
                case PowerBuilderParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1187;
                        this.identifier_name();
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
    PowerBuilderParser.prototype.dataTypeSub = function () {
        var _localctx = new DataTypeSubContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, PowerBuilderParser.RULE_dataTypeSub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1190;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PowerBuilderParser.ANY) | (1 << PowerBuilderParser.BLOB) | (1 << PowerBuilderParser.BOOLEAN) | (1 << PowerBuilderParser.BYTE) | (1 << PowerBuilderParser.CHARACTER) | (1 << PowerBuilderParser.CHAR) | (1 << PowerBuilderParser.DATE_TYPE) | (1 << PowerBuilderParser.DATETIME) | (1 << PowerBuilderParser.DECIMAL) | (1 << PowerBuilderParser.DEC) | (1 << PowerBuilderParser.DOUBLE) | (1 << PowerBuilderParser.INTEGER) | (1 << PowerBuilderParser.INT) | (1 << PowerBuilderParser.LONG) | (1 << PowerBuilderParser.LONGLONG) | (1 << PowerBuilderParser.REAL) | (1 << PowerBuilderParser.STRING) | (1 << PowerBuilderParser.TIME_TYPE) | (1 << PowerBuilderParser.UNSIGNEDINTEGER) | (1 << PowerBuilderParser.UINT) | (1 << PowerBuilderParser.UNSIGNEDLONG) | (1 << PowerBuilderParser.ULONG) | (1 << PowerBuilderParser.WINDOW))) !== 0))) {
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
    Object.defineProperty(PowerBuilderParser, "_ATN", {
        get: function () {
            if (!PowerBuilderParser.__ATN) {
                PowerBuilderParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PowerBuilderParser._serializedATN));
            }
            return PowerBuilderParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PowerBuilderParser.ANY = 1;
    PowerBuilderParser.BLOB = 2;
    PowerBuilderParser.BOOLEAN = 3;
    PowerBuilderParser.BYTE = 4;
    PowerBuilderParser.CHARACTER = 5;
    PowerBuilderParser.CHAR = 6;
    PowerBuilderParser.DATE_TYPE = 7;
    PowerBuilderParser.DATETIME = 8;
    PowerBuilderParser.DECIMAL = 9;
    PowerBuilderParser.DEC = 10;
    PowerBuilderParser.DOUBLE = 11;
    PowerBuilderParser.INTEGER = 12;
    PowerBuilderParser.INT = 13;
    PowerBuilderParser.LONG = 14;
    PowerBuilderParser.LONGLONG = 15;
    PowerBuilderParser.REAL = 16;
    PowerBuilderParser.STRING = 17;
    PowerBuilderParser.TIME_TYPE = 18;
    PowerBuilderParser.UNSIGNEDINTEGER = 19;
    PowerBuilderParser.UINT = 20;
    PowerBuilderParser.UNSIGNEDLONG = 21;
    PowerBuilderParser.ULONG = 22;
    PowerBuilderParser.WINDOW = 23;
    PowerBuilderParser.TRUE = 24;
    PowerBuilderParser.FALSE = 25;
    PowerBuilderParser.GLOBAL = 26;
    PowerBuilderParser.SHARED = 27;
    PowerBuilderParser.END = 28;
    PowerBuilderParser.INDIRECT = 29;
    PowerBuilderParser.VARIABLES = 30;
    PowerBuilderParser.FORWARD = 31;
    PowerBuilderParser.PUBLIC = 32;
    PowerBuilderParser.PRIVATE = 33;
    PowerBuilderParser.FUNCTION = 34;
    PowerBuilderParser.SUBROUTINE = 35;
    PowerBuilderParser.READONLY = 36;
    PowerBuilderParser.PROTOTYPES = 37;
    PowerBuilderParser.TYPE = 38;
    PowerBuilderParser.ON = 39;
    PowerBuilderParser.TO = 40;
    PowerBuilderParser.FROM = 41;
    PowerBuilderParser.REF = 42;
    PowerBuilderParser.NULL = 43;
    PowerBuilderParser.UPDATE = 44;
    PowerBuilderParser.CASE = 45;
    PowerBuilderParser.DYNAMIC = 46;
    PowerBuilderParser.WITHIN = 47;
    PowerBuilderParser.PRIVATEWRITE = 48;
    PowerBuilderParser.PROTECTED = 49;
    PowerBuilderParser.PRIVATEREAD = 50;
    PowerBuilderParser.PROTECTEDREAD = 51;
    PowerBuilderParser.PROTECTEDWRITE = 52;
    PowerBuilderParser.LOCAL = 53;
    PowerBuilderParser.EVENT = 54;
    PowerBuilderParser.OPEN = 55;
    PowerBuilderParser.GOTO = 56;
    PowerBuilderParser.ELSE = 57;
    PowerBuilderParser.IF = 58;
    PowerBuilderParser.THEN = 59;
    PowerBuilderParser.ELSEIF = 60;
    PowerBuilderParser.TRY = 61;
    PowerBuilderParser.EXIT = 62;
    PowerBuilderParser.CHOOSE = 63;
    PowerBuilderParser.IS = 64;
    PowerBuilderParser.CONTINUE = 65;
    PowerBuilderParser.DO = 66;
    PowerBuilderParser.WHILE = 67;
    PowerBuilderParser.FOR = 68;
    PowerBuilderParser.CLOSE = 69;
    PowerBuilderParser.NEXT = 70;
    PowerBuilderParser.LOOP = 71;
    PowerBuilderParser.UNTIL = 72;
    PowerBuilderParser.STEP = 73;
    PowerBuilderParser.CATCH = 74;
    PowerBuilderParser.FINALLY = 75;
    PowerBuilderParser.THROW = 76;
    PowerBuilderParser.RELEASE = 77;
    PowerBuilderParser.CREATE = 78;
    PowerBuilderParser.DESTROY = 79;
    PowerBuilderParser.USING = 80;
    PowerBuilderParser.POST = 81;
    PowerBuilderParser.TRIGGER = 82;
    PowerBuilderParser.SELECT = 83;
    PowerBuilderParser.DELETE = 84;
    PowerBuilderParser.INSERT = 85;
    PowerBuilderParser.DESCRIBE = 86;
    PowerBuilderParser.RETURN = 87;
    PowerBuilderParser.OR = 88;
    PowerBuilderParser.AND = 89;
    PowerBuilderParser.NOT = 90;
    PowerBuilderParser.CALL = 91;
    PowerBuilderParser.HALT = 92;
    PowerBuilderParser.SUPER = 93;
    PowerBuilderParser.LIBRARY = 94;
    PowerBuilderParser.SYSTEM = 95;
    PowerBuilderParser.RPCFUNC = 96;
    PowerBuilderParser.ALIAS = 97;
    PowerBuilderParser.THROWS = 98;
    PowerBuilderParser.AUTOINSTANTIATE = 99;
    PowerBuilderParser.DESCRIPTOR = 100;
    PowerBuilderParser.EQ = 101;
    PowerBuilderParser.GT = 102;
    PowerBuilderParser.GTE = 103;
    PowerBuilderParser.LT = 104;
    PowerBuilderParser.LTE = 105;
    PowerBuilderParser.GTLT = 106;
    PowerBuilderParser.PLUS = 107;
    PowerBuilderParser.MINUS = 108;
    PowerBuilderParser.PLUSEQ = 109;
    PowerBuilderParser.MINUSEQ = 110;
    PowerBuilderParser.COLONCOLON = 111;
    PowerBuilderParser.MULT = 112;
    PowerBuilderParser.DIV = 113;
    PowerBuilderParser.MULTEQ = 114;
    PowerBuilderParser.DIVEQ = 115;
    PowerBuilderParser.CARAT = 116;
    PowerBuilderParser.LCURLY = 117;
    PowerBuilderParser.RCURLY = 118;
    PowerBuilderParser.LBRACE = 119;
    PowerBuilderParser.RBRACE = 120;
    PowerBuilderParser.BRACES = 121;
    PowerBuilderParser.TICK = 122;
    PowerBuilderParser.DQUOTED_STRING = 123;
    PowerBuilderParser.QUOTED_STRING = 124;
    PowerBuilderParser.COMMA = 125;
    PowerBuilderParser.SEMI = 126;
    PowerBuilderParser.LPAREN = 127;
    PowerBuilderParser.RPAREN = 128;
    PowerBuilderParser.COLON = 129;
    PowerBuilderParser.DQUOTE = 130;
    PowerBuilderParser.TQ = 131;
    PowerBuilderParser.DOUBLE_PIPE = 132;
    PowerBuilderParser.DOTDOTDOT = 133;
    PowerBuilderParser.NUMBER = 134;
    PowerBuilderParser.DOT = 135;
    PowerBuilderParser.DATE = 136;
    PowerBuilderParser.TIME = 137;
    PowerBuilderParser.BINDPAR = 138;
    PowerBuilderParser.EXPORT_HEADER = 139;
    PowerBuilderParser.ENUM = 140;
    PowerBuilderParser.ID = 141;
    PowerBuilderParser.LINE_CONTINUATION = 142;
    PowerBuilderParser.SL_COMMENT = 143;
    PowerBuilderParser.ML_COMMENT = 144;
    PowerBuilderParser.WS = 145;
    PowerBuilderParser.RULE_start_rule = 0;
    PowerBuilderParser.RULE_header_rule = 1;
    PowerBuilderParser.RULE_body_rule = 2;
    PowerBuilderParser.RULE_window_property = 3;
    PowerBuilderParser.RULE_window_property_attribute_sub = 4;
    PowerBuilderParser.RULE_attribute_name = 5;
    PowerBuilderParser.RULE_attribute_value = 6;
    PowerBuilderParser.RULE_forward_decl = 7;
    PowerBuilderParser.RULE_datatype_decl = 8;
    PowerBuilderParser.RULE_type_variables_decl = 9;
    PowerBuilderParser.RULE_global_variables_decl = 10;
    PowerBuilderParser.RULE_variable_decl = 11;
    PowerBuilderParser.RULE_variable_decl_sub = 12;
    PowerBuilderParser.RULE_decimal_decl_sub = 13;
    PowerBuilderParser.RULE_array_decl_sub = 14;
    PowerBuilderParser.RULE_constant_decl_sub = 15;
    PowerBuilderParser.RULE_constant_decl = 16;
    PowerBuilderParser.RULE_function_forward_decl = 17;
    PowerBuilderParser.RULE_parameter_sub = 18;
    PowerBuilderParser.RULE_parameters_list_sub = 19;
    PowerBuilderParser.RULE_functions_forward_decl = 20;
    PowerBuilderParser.RULE_function_body = 21;
    PowerBuilderParser.RULE_on_body = 22;
    PowerBuilderParser.RULE_event_forward_decl = 23;
    PowerBuilderParser.RULE_event_body = 24;
    PowerBuilderParser.RULE_access_type = 25;
    PowerBuilderParser.RULE_access_modif = 26;
    PowerBuilderParser.RULE_access_modif_part = 27;
    PowerBuilderParser.RULE_scope_modif = 28;
    PowerBuilderParser.RULE_expression = 29;
    PowerBuilderParser.RULE_expression_list = 30;
    PowerBuilderParser.RULE_boolean_expression = 31;
    PowerBuilderParser.RULE_condition_or = 32;
    PowerBuilderParser.RULE_condition_and = 33;
    PowerBuilderParser.RULE_condition_not = 34;
    PowerBuilderParser.RULE_condition_comparison = 35;
    PowerBuilderParser.RULE_add_expr = 36;
    PowerBuilderParser.RULE_mul_expr = 37;
    PowerBuilderParser.RULE_unary_sign_expr = 38;
    PowerBuilderParser.RULE_statement = 39;
    PowerBuilderParser.RULE_statement_sub = 40;
    PowerBuilderParser.RULE_assignment_sub = 41;
    PowerBuilderParser.RULE_assignment_statement = 42;
    PowerBuilderParser.RULE_lvalue_sub = 43;
    PowerBuilderParser.RULE_return_statement = 44;
    PowerBuilderParser.RULE_function_call_expression_sub = 45;
    PowerBuilderParser.RULE_function_virtual_call_expression_sub = 46;
    PowerBuilderParser.RULE_open_call_sub = 47;
    PowerBuilderParser.RULE_close_call_sub = 48;
    PowerBuilderParser.RULE_function_call_statement = 49;
    PowerBuilderParser.RULE_super_call_statement = 50;
    PowerBuilderParser.RULE_event_call_statement_sub = 51;
    PowerBuilderParser.RULE_event_call_statement = 52;
    PowerBuilderParser.RULE_create_call_sub = 53;
    PowerBuilderParser.RULE_create_call_statement = 54;
    PowerBuilderParser.RULE_destroy_call_sub = 55;
    PowerBuilderParser.RULE_destroy_call_statement = 56;
    PowerBuilderParser.RULE_for_loop_statement = 57;
    PowerBuilderParser.RULE_do_while_loop_statement = 58;
    PowerBuilderParser.RULE_do_loop_while_statement = 59;
    PowerBuilderParser.RULE_if_statement = 60;
    PowerBuilderParser.RULE_if_simple_statement = 61;
    PowerBuilderParser.RULE_continue_statement = 62;
    PowerBuilderParser.RULE_continue_sub = 63;
    PowerBuilderParser.RULE_post_event = 64;
    PowerBuilderParser.RULE_exit_statement = 65;
    PowerBuilderParser.RULE_choose_statement = 66;
    PowerBuilderParser.RULE_choose_case_value_sub = 67;
    PowerBuilderParser.RULE_choose_case_cond_sub = 68;
    PowerBuilderParser.RULE_choose_case_range_sub = 69;
    PowerBuilderParser.RULE_choose_case_else_sub = 70;
    PowerBuilderParser.RULE_goto_stat = 71;
    PowerBuilderParser.RULE_label_stat = 72;
    PowerBuilderParser.RULE_try_catch_block = 73;
    PowerBuilderParser.RULE_throw_stat = 74;
    PowerBuilderParser.RULE_identifier = 75;
    PowerBuilderParser.RULE_identifier_name_ex = 76;
    PowerBuilderParser.RULE_identifier_name = 77;
    PowerBuilderParser.RULE_atom_sub = 78;
    PowerBuilderParser.RULE_atom_sub_call1 = 79;
    PowerBuilderParser.RULE_atom_sub_array1 = 80;
    PowerBuilderParser.RULE_atom_sub_ref1 = 81;
    PowerBuilderParser.RULE_atom_sub_member1 = 82;
    PowerBuilderParser.RULE_atom = 83;
    PowerBuilderParser.RULE_array_access_atom = 84;
    PowerBuilderParser.RULE_numeric_atom = 85;
    PowerBuilderParser.RULE_boolean_atom = 86;
    PowerBuilderParser.RULE_cast_expression = 87;
    PowerBuilderParser.RULE_data_type_name = 88;
    PowerBuilderParser.RULE_dataTypeSub = 89;
    // tslint:disable:no-trailing-whitespace
    PowerBuilderParser.ruleNames = [
        "start_rule", "header_rule", "body_rule", "window_property", "window_property_attribute_sub",
        "attribute_name", "attribute_value", "forward_decl", "datatype_decl",
        "type_variables_decl", "global_variables_decl", "variable_decl", "variable_decl_sub",
        "decimal_decl_sub", "array_decl_sub", "constant_decl_sub", "constant_decl",
        "function_forward_decl", "parameter_sub", "parameters_list_sub", "functions_forward_decl",
        "function_body", "on_body", "event_forward_decl", "event_body", "access_type",
        "access_modif", "access_modif_part", "scope_modif", "expression", "expression_list",
        "boolean_expression", "condition_or", "condition_and", "condition_not",
        "condition_comparison", "add_expr", "mul_expr", "unary_sign_expr", "statement",
        "statement_sub", "assignment_sub", "assignment_statement", "lvalue_sub",
        "return_statement", "function_call_expression_sub", "function_virtual_call_expression_sub",
        "open_call_sub", "close_call_sub", "function_call_statement", "super_call_statement",
        "event_call_statement_sub", "event_call_statement", "create_call_sub",
        "create_call_statement", "destroy_call_sub", "destroy_call_statement",
        "for_loop_statement", "do_while_loop_statement", "do_loop_while_statement",
        "if_statement", "if_simple_statement", "continue_statement", "continue_sub",
        "post_event", "exit_statement", "choose_statement", "choose_case_value_sub",
        "choose_case_cond_sub", "choose_case_range_sub", "choose_case_else_sub",
        "goto_stat", "label_stat", "try_catch_block", "throw_stat", "identifier",
        "identifier_name_ex", "identifier_name", "atom_sub", "atom_sub_call1",
        "atom_sub_array1", "atom_sub_ref1", "atom_sub_member1", "atom", "array_access_atom",
        "numeric_atom", "boolean_atom", "cast_expression", "data_type_name", "dataTypeSub",
    ];
    PowerBuilderParser._LITERAL_NAMES = [
        undefined, "'ANY'", "'BLOB'", "'BOOLEAN'", "'BYTE'", "'CHARACTER'", "'CHAR'",
        "'DATE'", "'DATETIME'", "'DECIMAL'", "'DEC'", "'DOUBLE'", "'INTEGER'",
        "'INT'", "'LONG'", "'LONGLONG'", "'REAL'", "'STRING'", "'TIME'", "'UNSIGNEDINTEGER'",
        "'UINT'", "'UNSIGNEDLONG'", "'ULONG'", "'WINDOW'", "'TRUE'", "'FALSE'",
        "'GLOBAL'", "'SHARED'", "'END'", "'INDIRECT'", "'VARIABLES'", "'FORWARD'",
        "'PUBLIC'", "'PRIVATE'", "'FUNCTION'", "'SUBROUTINE'", "'READONLY'", "'PROTOTYPES'",
        "'TYPE'", "'ON'", "'TO'", "'FROM'", "'REF'", "'NULL'", "'UPDATE'", "'CASE'",
        "'DYNAMIC'", "'WITHIN'", "'PRIVATEWRITE'", "'PROTECTED'", "'PRIVATEREAD'",
        "'PROTECTEDREAD'", "'PROTECTEDWRITE'", "'LOCAL'", "'EVENT'", "'OPEN'",
        "'GOTO'", "'ELSE'", "'IF'", "'THEN'", "'ELSEIF'", "'TRY'", "'EXIT'", "'CHOOSE'",
        "'IS'", "'CONTINUE'", "'DO'", "'WHILE'", "'FOR'", "'CLOSE'", "'NEXT'",
        "'LOOP'", "'UNTIL'", "'STEP'", "'CATCH'", "'FINALLY'", "'THROW'", "'RELEASE'",
        "'CREATE'", "'DESTROY'", "'USING'", "'POST'", "'TRIGGER'", "'SELECT'",
        "'DELETE'", "'INSERT'", "'DESCRIBE'", "'RETURN'", "'OR'", "'AND'", "'NOT'",
        "'CALL'", "'HALT'", "'SUPER'", "'LIBRARY'", "'SYSTEM'", "'RPCFUNC'", "'ALIAS'",
        "'THROWS'", "'AUTOINSTANTIATE'", "'DESCRIPTOR'", "'='", "'>'", "'>='",
        "'<'", "'<='", "'<>'", "'+'", "'-'", "'+='", "'-='", "'::'", "'*'", "'/'",
        "'*='", "'/='", "'^'", "'{'", "'}'", "'['", "']'", "'[]'", "'`'", undefined,
        undefined, "','", "';'", "'('", "')'", "':'", "'\"'", "'???'", "'||'",
        "'...'", undefined, "'.'",
    ];
    PowerBuilderParser._SYMBOLIC_NAMES = [
        undefined, "ANY", "BLOB", "BOOLEAN", "BYTE", "CHARACTER", "CHAR", "DATE_TYPE",
        "DATETIME", "DECIMAL", "DEC", "DOUBLE", "INTEGER", "INT", "LONG", "LONGLONG",
        "REAL", "STRING", "TIME_TYPE", "UNSIGNEDINTEGER", "UINT", "UNSIGNEDLONG",
        "ULONG", "WINDOW", "TRUE", "FALSE", "GLOBAL", "SHARED", "END", "INDIRECT",
        "VARIABLES", "FORWARD", "PUBLIC", "PRIVATE", "FUNCTION", "SUBROUTINE",
        "READONLY", "PROTOTYPES", "TYPE", "ON", "TO", "FROM", "REF", "NULL", "UPDATE",
        "CASE", "DYNAMIC", "WITHIN", "PRIVATEWRITE", "PROTECTED", "PRIVATEREAD",
        "PROTECTEDREAD", "PROTECTEDWRITE", "LOCAL", "EVENT", "OPEN", "GOTO", "ELSE",
        "IF", "THEN", "ELSEIF", "TRY", "EXIT", "CHOOSE", "IS", "CONTINUE", "DO",
        "WHILE", "FOR", "CLOSE", "NEXT", "LOOP", "UNTIL", "STEP", "CATCH", "FINALLY",
        "THROW", "RELEASE", "CREATE", "DESTROY", "USING", "POST", "TRIGGER", "SELECT",
        "DELETE", "INSERT", "DESCRIBE", "RETURN", "OR", "AND", "NOT", "CALL",
        "HALT", "SUPER", "LIBRARY", "SYSTEM", "RPCFUNC", "ALIAS", "THROWS", "AUTOINSTANTIATE",
        "DESCRIPTOR", "EQ", "GT", "GTE", "LT", "LTE", "GTLT", "PLUS", "MINUS",
        "PLUSEQ", "MINUSEQ", "COLONCOLON", "MULT", "DIV", "MULTEQ", "DIVEQ", "CARAT",
        "LCURLY", "RCURLY", "LBRACE", "RBRACE", "BRACES", "TICK", "DQUOTED_STRING",
        "QUOTED_STRING", "COMMA", "SEMI", "LPAREN", "RPAREN", "COLON", "DQUOTE",
        "TQ", "DOUBLE_PIPE", "DOTDOTDOT", "NUMBER", "DOT", "DATE", "TIME", "BINDPAR",
        "EXPORT_HEADER", "ENUM", "ID", "LINE_CONTINUATION", "SL_COMMENT", "ML_COMMENT",
        "WS",
    ];
    PowerBuilderParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PowerBuilderParser._LITERAL_NAMES, PowerBuilderParser._SYMBOLIC_NAMES, []);
    PowerBuilderParser._serializedATNSegments = 3;
    PowerBuilderParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x93\u04AB\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x03\x02\x05\x02\xB8\n\x02\x03\x02\x06\x02" +
        "\xBB\n\x02\r\x02\x0E\x02\xBC\x03\x02\x03\x02\x03\x03\x07\x03\xC2\n\x03" +
        "\f\x03\x0E\x03\xC5\v\x03\x03\x03\x03\x03\x03\x03\x05\x03\xCA\n\x03\x03" +
        "\x03\x06\x03\xCD\n\x03\r\x03\x0E\x03\xCE\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
        "\xDD\n\x04\x03\x05\x03\x05\x05\x05\xE1\n\x05\x03\x05\x03\x05\x07\x05\xE5" +
        "\n\x05\f\x05\x0E\x05\xE8\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF5\n\x06\x03" +
        "\x06\x03\x06\x06\x06\xF9\n\x06\r\x06\x0E\x06\xFA\x03\x06\x03\x06\x05\x06" +
        "\xFF\n\x06\x05\x06\u0101\n\x06\x03\x06\x05\x06\u0104\n\x06\x03\x07\x03" +
        "\x07\x03\x07\x05\x07\u0109\n\x07\x03\x07\x05\x07\u010C\n\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0114\n\x07\x07\x07\u0116" +
        "\n\x07\f\x07\x0E\x07\u0119\v\x07\x03\b\x03\b\x03\b\x05\b\u011E\n\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0131\n\b\x03\b\x03\b\x03\b\x05\b\u0136" +
        "\n\b\x05\b\u0138\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u013F\n\b\x03" +
        "\b\x03\b\x03\b\x05\b\u0144\n\b\x05\b\u0146\n\b\x03\b\x03\b\x07\b\u014A" +
        "\n\b\f\b\x0E\b\u014D\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0155" +
        "\n\b\x05\b\u0157\n\b\x03\t\x03\t\x03\t\x06\t\u015C\n\t\r\t\x0E\t\u015D" +
        "\x03\t\x03\t\x03\t\x03\n\x05\n\u0164\n\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
        "\x03\n\x05\n\u016C\n\n\x03\n\x03\n\x03\n\x05\n\u0171\n\n\x03\n\x05\n\u0174" +
        "\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u017A\n\n\x03\n\x03\n\x07\n\u017E\n" +
        "\n\f\n\x0E\n\u0181\v\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
        "\x07\v\u018B\n\v\f\v\x0E\v\u018E\v\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
        "\f\x03\f\x07\f\u0197\n\f\f\f\x0E\f\u019A\v\f\x03\f\x03\f\x03\f\x03\r\x03" +
        "\r\x03\r\x03\x0E\x05\x0E\u01A3\n\x0E\x03\x0E\x05\x0E\u01A6\n\x0E\x03\x0E" +
        "\x05\x0E\u01A9\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
        "\x10\x05\x10\u01B2\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01B7\n\x10\x03" +
        "\x10\x05\x10\u01BA\n\x10\x03\x10\x03\x10\x05\x10\u01BE\n\x10\x03\x10\x03" +
        "\x10\x03\x10\x05\x10\u01C3\n\x10\x03\x10\x05\x10\u01C6\n\x10\x07\x10\u01C8" +
        "\n\x10\f\x10\x0E\x10\u01CB\v\x10\x05\x10\u01CD\n\x10\x03\x10\x05\x10\u01D0" +
        "\n\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x05\x13\u01D8\n" +
        "\x13\x03\x13\x05\x13\u01DB\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01E0" +
        "\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01E5\n\x13\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01ED\n\x13\x05\x13\u01EF\n\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01F5\n\x13\x03\x13\x03\x13\x05\x13" +
        "\u01F9\n\x13\x03\x14\x05\x14\u01FC\n\x14\x03\x14\x05\x14\u01FF\n\x14\x03" +
        "\x14\x03\x14\x05\x14\u0203\n\x14\x03\x14\x03\x14\x05\x14\u0207\n\x14\x03" +
        "\x15\x03\x15\x03\x15\x07\x15\u020C\n\x15\f\x15\x0E\x15\u020F\v\x15\x03" +
        "\x15\x03\x15\x05\x15\u0213\n\x15\x03\x16\x03\x16\x03\x16\x06\x16\u0218" +
        "\n\x16\r\x16\x0E\x16\u0219\x03\x16\x03\x16\x03\x16\x03\x17\x05\x17\u0220" +
        "\n\x17\x03\x17\x05\x17\u0223\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0228" +
        "\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u022D\n\x17\x03\x17\x03\x17\x03" +
        "\x17\x05\x17\u0232\n\x17\x03\x17\x03\x17\x07\x17\u0236\n\x17\f\x17\x0E" +
        "\x17\u0239\v\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x05\x18\u0242\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0248\n\x19" +
        "\x03\x19\x05\x19\u024B\n\x19\x03\x19\x03\x19\x05\x19\u024F\n\x19\x03\x19" +
        "\x05\x19\u0252\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
        "\x19\u025A\n\x19\x03\x19\x03\x19\x05\x19\u025E\n\x19\x03\x1A\x03\x1A\x03" +
        "\x1A\x05\x1A\u0263\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0268\n\x1A\x03" +
        "\x1A\x03\x1A\x03\x1A\x05\x1A\u026D\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0271" +
        "\n\x1A\x03\x1A\x05\x1A\u0274\n\x1A\x03\x1A\x03\x1A\x07\x1A\u0278\n\x1A" +
        "\f\x1A\x0E\x1A\u027B\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05" +
        "\x1F\u028B\n\x1F\x03 \x05 \u028E\n \x03 \x03 \x03 \x05 \u0293\n \x03 " +
        "\x07 \u0296\n \f \x0E \u0299\v \x03!\x03!\x03\"\x03\"\x03\"\x07\"\u02A0" +
        "\n\"\f\"\x0E\"\u02A3\v\"\x03#\x03#\x03#\x07#\u02A8\n#\f#\x0E#\u02AB\v" +
        "#\x03$\x05$\u02AE\n$\x03$\x03$\x03%\x03%\x03%\x05%\u02B5\n%\x03&\x03&" +
        "\x03&\x07&\u02BA\n&\f&\x0E&\u02BD\v&\x03\'\x03\'\x03\'\x07\'\u02C2\n\'" +
        "\f\'\x0E\'\u02C5\v\'\x03(\x03(\x03(\x03(\x03(\x05(\u02CC\n(\x03(\x05(" +
        "\u02CF\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)" +
        "\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x05)\u02EE\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x03*\x05*\u02FC\n*\x03+\x03+\x03+\x03+\x03+\x03+\x05" +
        "+\u0304\n+\x03,\x03,\x05,\u0308\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-" +
        "\x03-\x05-\u0312\n-\x03.\x03.\x05.\u0316\n.\x03/\x03/\x03/\x03/\x03/\x05" +
        "/\u031D\n/\x030\x030\x030\x030\x050\u0323\n0\x030\x030\x050\u0327\n0\x03" +
        "0\x030\x031\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x05" +
        "2\u0337\n2\x033\x033\x033\x033\x053\u033D\n3\x034\x034\x034\x034\x054" +
        "\u0343\n4\x034\x034\x054\u0347\n4\x035\x035\x035\x035\x035\x055\u034E" +
        "\n5\x035\x035\x055\u0352\n5\x035\x035\x035\x036\x036\x037\x037\x057\u035B" +
        "\n7\x037\x037\x037\x057\u0360\n7\x037\x037\x037\x057\u0365\n7\x037\x05" +
        "7\u0368\n7\x038\x038\x039\x039\x039\x03:\x03:\x03;\x03;\x03;\x03;\x03" +
        ";\x03;\x03;\x03;\x05;\u0379\n;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x07" +
        "<\u0382\n<\f<\x0E<\u0385\v<\x03<\x03<\x03=\x03=\x07=\u038B\n=\f=\x0E=" +
        "\u038E\v=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x07>\u0398\n>\f>\x0E" +
        ">\u039B\v>\x03>\x03>\x03>\x03>\x07>\u03A1\n>\f>\x0E>\u03A4\v>\x07>\u03A6" +
        "\n>\f>\x0E>\u03A9\v>\x03>\x03>\x07>\u03AD\n>\f>\x0E>\u03B0\v>\x05>\u03B2" +
        "\n>\x03>\x03>\x03>\x05>\u03B7\n>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03" +
        "A\x03A\x03B\x03B\x03B\x05B\u03C5\nB\x03B\x03B\x05B\u03C9\nB\x03B\x03B" +
        "\x03B\x05B\u03CE\nB\x03B\x03B\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D" +
        "\x03D\x06D\u03DB\nD\rD\x0ED\u03DC\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x07" +
        "E\u03E6\nE\fE\x0EE\u03E9\vE\x03E\x07E\u03EC\nE\fE\x0EE\u03EF\vE\x03F\x03" +
        "F\x03F\x03F\x03F\x07F\u03F6\nF\fF\x0EF\u03F9\vF\x03G\x03G\x03G\x03G\x03" +
        "G\x07G\u0400\nG\fG\x0EG\u0403\vG\x03H\x03H\x03H\x07H\u0408\nH\fH\x0EH" +
        "\u040B\vH\x03I\x03I\x03I\x03J\x03J\x03J\x03K\x03K\x07K\u0415\nK\fK\x0E" +
        "K\u0418\vK\x03K\x03K\x03K\x03K\x03K\x07K\u041F\nK\fK\x0EK\u0422\vK\x07" +
        "K\u0424\nK\fK\x0EK\u0427\vK\x03K\x03K\x07K\u042B\nK\fK\x0EK\u042E\vK\x05" +
        "K\u0430\nK\x03K\x03K\x03K\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03" +
        "M\x05M\u043E\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
        "M\x03M\x05M\u044C\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
        "N\x03N\x03N\x05N\u045A\nN\x03O\x03O\x03P\x03P\x03P\x03P\x05P\u0462\nP" +
        "\x03P\x05P\u0465\nP\x05P\u0467\nP\x03Q\x03Q\x05Q\u046B\nQ\x03Q\x03Q\x05" +
        "Q\u046F\nQ\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03T\x03" +
        "T\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x05U\u048E\nU\x03V\x03V\x03V\x03V\x03V\x03W\x03W\x03" +
        "X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u049E\nY\fY\x0EY\u04A1\vY\x03Y\x03" +
        "Y\x03Z\x03Z\x05Z\u04A7\nZ\x03[\x03[\x03[\x02\x02\x02\\\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
        "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
        "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
        "L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
        "h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82" +
        "\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94" +
        "\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6" +
        "\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\x02\x12\x03" +
        "\x02\x1C\x1D\x03\x02mn\x03\x02}~\x04\x02!!((\x03\x02$%\x04\x02\"#33\x04" +
        "\x02\"#26\x04\x02\x1C\x1C77\x03\x02gl\x04\x02rsvv\x05\x02ggoptu\x04\x02" +
        "EEJJ\x03\x02ST\x03\x02PQ\x03\x02\x1A\x1B\x03\x02\x03\x19\x02\u0553\x02" +
        "\xB7\x03\x02\x02\x02\x04\xC3\x03\x02\x02\x02\x06\xDC\x03\x02\x02\x02\b" +
        "\xDE\x03\x02\x02\x02\n\u0100\x03\x02\x02\x02\f\u0108\x03\x02\x02\x02\x0E" +
        "\u0156\x03\x02\x02\x02\x10\u0158\x03\x02\x02\x02\x12\u0163\x03\x02\x02" +
        "\x02\x14\u0185\x03\x02\x02\x02\x16\u0192\x03\x02\x02\x02\x18\u019E\x03" +
        "\x02\x02\x02\x1A\u01A2\x03\x02\x02\x02\x1C\u01AA\x03\x02\x02\x02\x1E\u01CF" +
        "\x03\x02\x02\x02 \u01D1\x03\x02\x02\x02\"\u01D3\x03\x02\x02\x02$\u01D7" +
        "\x03\x02\x02\x02&\u01FB\x03\x02\x02\x02(\u0208\x03\x02\x02\x02*\u0214" +
        "\x03\x02\x02\x02,\u021F\x03\x02\x02\x02.\u023D\x03\x02\x02\x020\u025D" +
        "\x03\x02\x02\x022\u025F\x03\x02\x02\x024\u027F\x03\x02\x02\x026\u0281" +
        "\x03\x02\x02\x028\u0284\x03\x02\x02\x02:\u0286\x03\x02\x02\x02<\u028A" +
        "\x03\x02\x02\x02>\u028D\x03\x02\x02\x02@\u029A\x03\x02\x02\x02B\u029C" +
        "\x03\x02\x02\x02D\u02A4\x03\x02\x02\x02F\u02AD\x03\x02\x02\x02H\u02B1" +
        "\x03\x02\x02\x02J\u02B6\x03\x02\x02\x02L\u02BE\x03\x02\x02\x02N\u02CE" +
        "\x03\x02\x02\x02P\u02ED\x03\x02\x02\x02R\u02FB\x03\x02\x02\x02T\u02FD" +
        "\x03\x02\x02\x02V\u0305\x03\x02\x02\x02X\u0311\x03\x02\x02\x02Z\u0313" +
        "\x03\x02\x02\x02\\\u031C\x03\x02\x02\x02^\u031E\x03\x02\x02\x02`\u032A" +
        "\x03\x02\x02\x02b\u0336\x03\x02\x02\x02d\u033C\x03\x02\x02\x02f\u033E" +
        "\x03\x02\x02\x02h\u0351\x03\x02\x02\x02j\u0356\x03\x02\x02\x02l\u0358" +
        "\x03\x02\x02\x02n\u0369\x03\x02\x02\x02p\u036B\x03\x02\x02\x02r\u036E" +
        "\x03\x02\x02\x02t\u0370\x03\x02\x02\x02v\u037D\x03\x02\x02\x02x\u0388" +
        "\x03\x02\x02\x02z\u0393\x03\x02\x02\x02|\u03B8\x03\x02\x02\x02~\u03BD" +
        "\x03\x02\x02\x02\x80\u03BF\x03\x02\x02\x02\x82\u03C4\x03\x02\x02\x02\x84" +
        "\u03D1\x03\x02\x02\x02\x86\u03D3\x03\x02\x02\x02\x88\u03E1\x03\x02\x02" +
        "\x02\x8A\u03F0\x03\x02\x02\x02\x8C\u03FA\x03\x02\x02\x02\x8E\u0404\x03" +
        "\x02\x02\x02\x90\u040C\x03\x02\x02\x02\x92\u040F\x03\x02\x02\x02\x94\u0412" +
        "\x03\x02\x02\x02\x96\u0434\x03\x02\x02\x02\x98\u044B\x03\x02\x02\x02\x9A" +
        "\u0459\x03\x02\x02\x02\x9C\u045B\x03\x02\x02\x02\x9E\u0466\x03\x02\x02" +
        "\x02\xA0\u046A\x03\x02\x02\x02\xA2\u0472\x03\x02\x02\x02\xA4\u0477\x03" +
        "\x02\x02\x02\xA6\u047A\x03\x02\x02\x02\xA8\u048D\x03\x02\x02\x02\xAA\u048F" +
        "\x03\x02\x02\x02\xAC\u0494\x03\x02\x02\x02\xAE\u0496\x03\x02\x02\x02\xB0" +
        "\u0498\x03\x02\x02\x02\xB2\u04A6\x03\x02\x02\x02\xB4\u04A8\x03\x02\x02" +
        "\x02\xB6\xB8\x05\x04\x03\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
        "\x02\xB8\xBA\x03\x02\x02\x02\xB9\xBB\x05\x06\x04\x02\xBA\xB9\x03\x02\x02" +
        "\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02" +
        "\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x07\x02\x02\x03\xBF\x03\x03\x02\x02" +
        "\x02\xC0\xC2\x07\x8D\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC5\x03\x02\x02" +
        "\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC9\x03\x02\x02" +
        "\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC7\x07O\x02\x02\xC7\xC8\x07\x88\x02" +
        "\x02\xC8\xCA\x07\x80\x02\x02\xC9\xC6\x03\x02\x02\x02\xC9\xCA\x03\x02\x02" +
        "\x02\xCA\xCC\x03\x02\x02\x02\xCB\xCD\x05\b\x05\x02\xCC\xCB\x03\x02\x02" +
        "\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02" +
        "\x02\xCF\x05\x03\x02\x02\x02\xD0\xDD\x05\x12\n\x02\xD1\xDD\x056\x1C\x02" +
        "\xD2\xDD\x05\x10\t\x02\xD3\xDD\x05\x14\v\x02\xD4\xDD\x05\x16\f\x02\xD5" +
        "\xDD\x05\x18\r\x02\xD6\xDD\x05\"\x12\x02\xD7\xDD\x05$\x13\x02\xD8\xDD" +
        "\x05*\x16\x02\xD9\xDD\x05,\x17\x02\xDA\xDD\x05.\x18\x02\xDB\xDD\x052\x1A" +
        "\x02\xDC\xD0\x03\x02\x02\x02\xDC\xD1\x03\x02\x02\x02\xDC\xD2\x03\x02\x02" +
        "\x02\xDC\xD3\x03\x02\x02\x02\xDC\xD4\x03\x02\x02\x02\xDC\xD5\x03\x02\x02" +
        "\x02\xDC\xD6\x03\x02\x02\x02\xDC\xD7\x03\x02\x02\x02\xDC\xD8\x03\x02\x02" +
        "\x02\xDC\xD9\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDB\x03\x02\x02" +
        "\x02\xDD\x07\x03\x02\x02\x02\xDE\xE0\x05\f\x07\x02\xDF\xE1\x05\x1E\x10" +
        "\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02" +
        "\x02\xE2\xE6\x07\x81\x02\x02\xE3\xE5\x05\n\x06\x02\xE4\xE3\x03\x02\x02" +
        "\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
        "\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA\x07\x82\x02" +
        "\x02\xEA\t\x03\x02\x02\x02\xEB\u0101\x07-\x02\x02\xEC\u0101\x05\xACW\x02" +
        "\xED\u0101\x07}\x02\x02\xEE\u0101\x07\x8A\x02\x02\xEF\u0101\x07\x8B\x02" +
        "\x02\xF0\xF1\x05\f\x07\x02\xF1\xFE\x07g\x02\x02\xF2\xF4\x05\x0E\b\x02" +
        "\xF3\xF5\x05\x1E\x10\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02" +
        "\xF5\xFF\x03\x02\x02\x02\xF6\xF8\x07\x81\x02\x02\xF7\xF9\x05\n\x06\x02" +
        "\xF8\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02" +
        "\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x07\x82\x02\x02" +
        "\xFD\xFF\x03\x02\x02\x02\xFE\xF2\x03\x02\x02\x02\xFE\xF6\x03\x02\x02\x02" +
        "\xFF\u0101\x03\x02\x02\x02\u0100\xEB\x03\x02\x02\x02\u0100\xEC\x03\x02" +
        "\x02\x02\u0100\xED\x03\x02\x02\x02\u0100\xEE\x03\x02\x02\x02\u0100\xEF" +
        "\x03\x02\x02\x02\u0100\xF0\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02" +
        "\u0102\u0104\x07\x7F\x02\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03" +
        "\x02\x02\x02\u0104\v\x03\x02\x02\x02\u0105\u0109\x05\x9CO\x02\u0106\u0109" +
        "\x07(\x02\x02\u0107\u0109\x07.\x02\x02\u0108\u0105\x03\x02\x02\x02\u0108" +
        "\u0106\x03\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010B\x03\x02" +
        "\x02\x02\u010A\u010C\x07\x88\x02\x02\u010B\u010A\x03\x02\x02\x02\u010B" +
        "\u010C\x03\x02\x02\x02\u010C\u0117\x03\x02\x02\x02\u010D\u0113\x07\x89" +
        "\x02\x02\u010E\u0114\x05\x9CO\x02\u010F\u0114\x07/\x02\x02\u0110\u0114" +
        "\x07(\x02\x02\u0111\u0114\x07)\x02\x02\u0112\u0114\x070\x02\x02\u0113" +
        "\u010E\x03\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0113\u0110\x03\x02" +
        "\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114" +
        "\u0116\x03\x02\x02\x02\u0115\u010D\x03\x02\x02\x02\u0116\u0119\x03\x02" +
        "\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118" +
        "\r\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A\u0157\x05\xA0Q\x02" +
        "\u011B\u0157\x05\xA6T\x02\u011C\u011E\x07n\x02\x02\u011D\u011C\x03\x02" +
        "\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
        "\u0157\x05\xACW\x02\u0120\u0157\x05\xAEX\x02\u0121\u0157\x07\x8E\x02\x02" +
        "\u0122\u0157\x07}\x02\x02\u0123\u0157\x07~\x02\x02\u0124\u0157\x07\x8A" +
        "\x02\x02\u0125\u0157\x07\x8B\x02\x02\u0126\u0157\x07(\x02\x02\u0127\u0157" +
        "\x07*\x02\x02\u0128\u0157\x07+\x02\x02\u0129\u0157\x07,\x02\x02\u012A" +
        "\u0157\x07-\x02\x02\u012B\u0157\x079\x02\x02\u012C\u012D\x07\x81\x02\x02" +
        "\u012D\u0130\x07\x81\x02\x02\u012E\u0131\x05<\x1F\x02\u012F\u0131\x05" +
        "\xB4[\x02\u0130\u012E\x03\x02\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131" +
        "\u0137\x03\x02\x02\x02\u0132\u0135\x07\x7F\x02\x02\u0133\u0136\x05<\x1F" +
        "\x02\u0134\u0136\x05\xB4[\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0134" +
        "\x03\x02\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u0132\x03\x02\x02\x02" +
        "\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u014B\x07" +
        "\x82\x02\x02\u013A\u013B\x07\x7F\x02\x02\u013B\u013E\x07\x81\x02\x02\u013C" +
        "\u013F\x05<\x1F\x02\u013D\u013F\x05\xB4[\x02\u013E\u013C\x03\x02\x02\x02" +
        "\u013E\u013D\x03\x02\x02\x02\u013F\u0145\x03\x02\x02\x02\u0140\u0143\x07" +
        "\x7F\x02\x02\u0141\u0144\x05<\x1F\x02\u0142\u0144\x05\xB4[\x02\u0143\u0141" +
        "\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144\u0146\x03\x02\x02\x02" +
        "\u0145\u0140\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x03" +
        "\x02\x02\x02\u0147\u0148\x07\x82\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149" +
        "\u013A\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02" +
        "\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D" +
        "\u014B\x03\x02\x02\x02\u014E\u014F\x07\x82\x02\x02\u014F\u0157\x03\x02" +
        "\x02\x02\u0150\u0154\x05\xB4[\x02\u0151\u0152\x07\x81\x02\x02\u0152\u0153" +
        "\x07\x88\x02\x02\u0153\u0155\x07\x82\x02\x02\u0154\u0151\x03\x02\x02\x02" +
        "\u0154\u0155\x03\x02\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156\u011A\x03" +
        "\x02\x02\x02\u0156\u011B\x03\x02\x02\x02\u0156\u011D\x03\x02\x02\x02\u0156" +
        "\u0120\x03\x02\x02\x02\u0156\u0121\x03\x02\x02\x02\u0156\u0122\x03\x02" +
        "\x02\x02\u0156\u0123\x03\x02\x02\x02\u0156\u0124\x03\x02\x02\x02\u0156" +
        "\u0125\x03\x02\x02\x02\u0156\u0126\x03\x02\x02\x02\u0156\u0127\x03\x02" +
        "\x02\x02\u0156\u0128\x03\x02\x02\x02\u0156\u0129\x03\x02\x02\x02\u0156" +
        "\u012A\x03\x02\x02\x02\u0156\u012B\x03\x02\x02\x02\u0156\u012C\x03\x02" +
        "\x02\x02\u0156\u0150\x03\x02\x02\x02\u0157\x0F\x03\x02\x02\x02\u0158\u015B" +
        "\x07!\x02\x02\u0159\u015C\x05\x12\n\x02\u015A\u015C\x05\x18\r\x02\u015B" +
        "\u0159\x03\x02\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02" +
        "\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E" +
        "\u015F\x03\x02\x02\x02\u015F\u0160\x07\x1E\x02\x02\u0160\u0161\x07!\x02" +
        "\x02\u0161\x11\x03\x02\x02\x02\u0162\u0164\x05:\x1E\x02\u0163\u0162\x03" +
        "\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
        "\u0166\x07(\x02\x02\u0166\u0167\x05\x9CO\x02\u0167\u016B\x07+\x02\x02" +
        "\u0168\u0169\x05\x9CO\x02\u0169\u016A\x07|\x02\x02\u016A\u016C\x03\x02" +
        "\x02\x02\u016B\u0168\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
        "\u016D\x03\x02\x02\x02\u016D\u0170\x05\xB2Z\x02\u016E\u016F\x071\x02\x02" +
        "\u016F\u0171\x05\x9CO\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03" +
        "\x02\x02\x02\u0171\u0173\x03\x02\x02\x02\u0172\u0174\x07e\x02\x02\u0173" +
        "\u0172\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0179\x03\x02" +
        "\x02\x02\u0175\u0176\x07f\x02\x02\u0176\u0177\x07}\x02\x02\u0177\u0178" +
        "\x07g\x02\x02\u0178\u017A\x07}\x02\x02\u0179\u0175\x03\x02\x02\x02\u0179" +
        "\u017A\x03\x02\x02\x02\u017A\u017F\x03\x02\x02\x02\u017B\u017E\x05\x18" +
        "\r\x02\u017C\u017E\x050\x19\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017C" +
        "\x03\x02\x02\x02\u017E";
    PowerBuilderParser._serializedATNSegment1 = "\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02" +
        "\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182" +
        "\u0183\x07\x1E\x02\x02\u0183\u0184\x07(\x02\x02\u0184\x13\x03\x02\x02" +
        "\x02\u0185\u0186\x07(\x02\x02\u0186\u018C\x07 \x02\x02\u0187\u018B\x05" +
        "6\x1C\x02\u0188\u018B\x05\x18\r\x02\u0189\u018B\x05\"\x12\x02\u018A\u0187" +
        "\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02\x02\x02" +
        "\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03" +
        "\x02\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
        "\u0190\x07\x1E\x02\x02\u0190\u0191\x07 \x02\x02\u0191\x15\x03\x02\x02" +
        "\x02\u0192\u0193\t\x02\x02\x02\u0193\u0198\x07 \x02\x02\u0194\u0197\x05" +
        "\x18\r\x02\u0195\u0197\x05\"\x12\x02\u0196\u0194\x03\x02\x02\x02\u0196" +
        "\u0195\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02" +
        "\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A" +
        "\u0198\x03\x02\x02\x02\u019B\u019C\x07\x1E\x02\x02\u019C\u019D\x07 \x02" +
        "\x02\u019D\x17\x03\x02\x02\x02\u019E\u019F\x05\x1A\x0E\x02\u019F\u01A0" +
        "\x07\x80\x02\x02\u01A0\x19\x03\x02\x02\x02\u01A1\u01A3\x07\x1F\x02\x02" +
        "\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03" +
        "\x02\x02\x02\u01A4\u01A6\x058\x1D\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5" +
        "\u01A6\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A9\x05:\x1E" +
        "\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\x1B" +
        "\x03\x02\x02\x02\u01AA\u01AB\x07w\x02\x02\u01AB\u01AC\x07\x88\x02\x02" +
        "\u01AC\u01AD\x07x\x02\x02\u01AD\x1D\x03\x02\x02\x02\u01AE\u01D0\x07{\x02" +
        "\x02\u01AF\u01CC\x07y\x02\x02\u01B0\u01B2\t\x03\x02\x02\u01B1\u01B0\x03" +
        "\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3" +
        "\u01B9\x07\x88\x02\x02\u01B4\u01B6\x07*\x02\x02\u01B5\u01B7\t\x03\x02" +
        "\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8" +
        "\x03\x02\x02\x02\u01B8\u01BA\x07\x88\x02\x02\u01B9\u01B4\x03\x02\x02\x02" +
        "\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01C9\x03\x02\x02\x02\u01BB\u01BD\x07" +
        "\x7F\x02\x02\u01BC\u01BE\t\x03\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD" +
        "\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C5\x07\x88" +
        "\x02\x02\u01C0\u01C2\x07*\x02\x02\u01C1\u01C3\t\x03\x02\x02\u01C2\u01C1" +
        "\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02" +
        "\u01C4\u01C6\x07\x88\x02\x02\u01C5\u01C0\x03\x02\x02\x02\u01C5\u01C6\x03" +
        "\x02\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01BB\x03\x02\x02\x02\u01C8" +
        "\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02" +
        "\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
        "\u01B1\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
        "\x02\x02\u01CE\u01D0\x07z\x02\x02\u01CF\u01AE\x03\x02\x02\x02\u01CF\u01AF" +
        "\x03\x02\x02\x02\u01D0\x1F\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
        "\u01D2!\x03\x02\x02\x02\u01D3\u01D4\x05 \x11\x02\u01D4\u01D5\x07\x80\x02" +
        "\x02\u01D5#\x03\x02\x02\x02\u01D6\u01D8\x058\x1D\x02\u01D7\u01D6\x03\x02" +
        "\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9" +
        "\u01DB\x05:\x1E\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02" +
        "\x02\u01DB\u01DF\x03\x02\x02\x02\u01DC\u01DD\x07$\x02\x02\u01DD\u01E0" +
        "\x05\xB2Z\x02\u01DE\u01E0\x07%\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01DF" +
        "\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x05\x9C" +
        "O\x02\u01E2\u01E4\x07\x81\x02\x02\u01E3\u01E5\x05(\x15\x02\u01E4\u01E3" +
        "\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02" +
        "\u01E6\u01EE\x07\x82\x02\x02\u01E7\u01E8\x07`\x02\x02\u01E8\u01EC\t\x04" +
        "\x02\x02\u01E9\u01EA\x07c\x02\x02\u01EA\u01EB\x07F\x02\x02\u01EB\u01ED" +
        "\t\x04\x02\x02\u01EC\u01E9\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
        "\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01E7\x03\x02\x02\x02\u01EE\u01EF\x03" +
        "\x02\x02\x02\u01EF\u01F4\x03\x02\x02\x02\u01F0\u01F1\x07b\x02\x02\u01F1" +
        "\u01F2\x07c\x02\x02\u01F2\u01F3\x07F\x02\x02\u01F3\u01F5\t\x04\x02\x02" +
        "\u01F4\u01F0\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F8\x03" +
        "\x02\x02\x02\u01F6\u01F7\x07d\x02\x02\u01F7\u01F9\x05\x9CO\x02\u01F8\u01F6" +
        "\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9%\x03\x02\x02\x02\u01FA" +
        "\u01FC\x07&\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02" +
        "\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01FF\x07,\x02\x02\u01FE\u01FD" +
        "\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02" +
        "\u0200\u0202\x05\xB2Z\x02\u0201\u0203\x05\x1C\x0F\x02\u0202\u0201\x03" +
        "\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204" +
        "\u0206\x05\x9CO\x02\u0205\u0207\x05\x1E\x10\x02\u0206\u0205\x03\x02\x02" +
        "\x02\u0206\u0207\x03\x02\x02\x02\u0207\'\x03\x02\x02\x02\u0208\u020D\x05" +
        "&\x14\x02\u0209\u020A\x07\x7F\x02\x02\u020A\u020C\x05&\x14\x02\u020B\u0209" +
        "\x03\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02" +
        "\u020D\u020E\x03\x02\x02\x02\u020E\u0212\x03\x02\x02\x02\u020F\u020D\x03" +
        "\x02\x02\x02\u0210\u0211\x07\x7F\x02\x02\u0211\u0213\x07\x87\x02\x02\u0212" +
        "\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213)\x03\x02\x02" +
        "\x02\u0214\u0215\t\x05\x02\x02\u0215\u0217\x07\'\x02\x02\u0216\u0218\x05" +
        "$\x13\x02\u0217\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219" +
        "\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02" +
        "\x02\x02\u021B\u021C\x07\x1E\x02\x02\u021C\u021D\x07\'\x02\x02\u021D+" +
        "\x03\x02\x02\x02\u021E\u0220\x054\x1B\x02\u021F\u021E\x03\x02\x02\x02" +
        "\u021F\u0220\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u0223\x05" +
        ":\x1E\x02\u0222\u0221\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223" +
        "\u0227\x03\x02\x02\x02\u0224\u0225\x07$\x02\x02\u0225\u0228\x05\xB2Z\x02" +
        "\u0226\u0228\x07%\x02\x02\u0227\u0224\x03\x02\x02\x02\u0227\u0226\x03" +
        "\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022A\x05\x9CO\x02\u022A" +
        "\u022C\x07\x81\x02\x02\u022B\u022D\x05(\x15\x02\u022C\u022B\x03\x02\x02" +
        "\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0231" +
        "\x07\x82\x02\x02\u022F\u0230\x07d\x02\x02\u0230\u0232\x05\x9CO\x02\u0231" +
        "\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0237\x03\x02" +
        "\x02\x02\u0233\u0234\x07\x80\x02\x02\u0234\u0236\x05P)\x02\u0235\u0233" +
        "\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02" +
        "\u0237\u0238\x03\x02\x02\x02\u0238\u023A\x03\x02\x02\x02\u0239\u0237\x03" +
        "\x02\x02\x02\u023A\u023B\x07\x1E\x02\x02\u023B\u023C\t\x06\x02\x02\u023C" +
        "-\x03\x02\x02\x02\u023D\u0241\x07)\x02\x02\u023E\u0242\x05\x98M\x02\u023F" +
        "\u0242\x079\x02\x02\u0240\u0242\x07G\x02\x02\u0241\u023E\x03\x02\x02\x02" +
        "\u0241\u023F\x03\x02\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242/\x03\x02" +
        "\x02\x02\u0243\u0247\x078\x02\x02\u0244\u0248\x05\x9CO\x02\u0245\u0248" +
        "\x07P\x02\x02\u0246\u0248\x07Q\x02\x02\u0247\u0244\x03\x02\x02\x02\u0247" +
        "\u0245\x03\x02\x02\x02\u0247\u0246\x03\x02\x02\x02\u0248\u024A\x03\x02" +
        "\x02\x02\u0249\u024B\x05\x9CO\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B" +
        "\x03\x02\x02\x02\u024B\u0251\x03\x02\x02\x02\u024C\u024E\x07\x81\x02\x02" +
        "\u024D\u024F\x05(\x15\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03" +
        "\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0252\x07\x82\x02\x02\u0251" +
        "\u024C\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u025E\x03\x02" +
        "\x02\x02\u0253\u0254\x078\x02\x02\u0254\u0255\x07(\x02\x02\u0255\u0256" +
        "\x05\xB2Z\x02\u0256\u0257\x05\x9CO\x02\u0257\u0259\x07\x81\x02\x02\u0258" +
        "\u025A\x05(\x15\x02\u0259\u0258\x03\x02\x02\x02\u0259\u025A\x03\x02\x02" +
        "\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x07\x82\x02\x02\u025C\u025E" +
        "\x03\x02\x02\x02\u025D\u0243\x03\x02\x02\x02\u025D\u0253\x03\x02\x02\x02" +
        "\u025E1\x03\x02\x02\x02\u025F\u0262\x078\x02\x02\u0260\u0261\x07(\x02" +
        "\x02\u0261\u0263\x05\xB2Z\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263" +
        "\x03\x02\x02\x02\u0263\u0267\x03\x02\x02\x02\u0264\u0265\x05\x9CO\x02" +
        "\u0265\u0266\x07q\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0264\x03" +
        "\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026C\x03\x02\x02\x02\u0269" +
        "\u026D\x05\x9CO\x02\u026A\u026D\x079\x02\x02\u026B\u026D\x07G\x02\x02" +
        "\u026C\u0269\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03" +
        "\x02\x02\x02\u026D\u0273\x03\x02\x02\x02\u026E\u0270\x07\x81\x02\x02\u026F" +
        "\u0271\x05(\x15\x02\u0270\u026F\x03\x02\x02\x02\u0270\u0271\x03\x02\x02" +
        "\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274\x07\x82\x02\x02\u0273\u026E" +
        "\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0279\x03\x02\x02\x02" +
        "\u0275\u0276\x07\x80\x02\x02\u0276\u0278\x05P)\x02\u0277\u0275\x03\x02" +
        "\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279" +
        "\u027A\x03\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0279\x03\x02" +
        "\x02\x02\u027C\u027D\x07\x1E\x02\x02\u027D\u027E\x078\x02\x02\u027E3\x03" +
        "\x02\x02\x02\u027F\u0280\t\x07\x02\x02\u02805\x03\x02\x02\x02\u0281\u0282" +
        "\x054\x1B\x02\u0282\u0283\x07\x83\x02\x02\u02837\x03\x02\x02\x02\u0284" +
        "\u0285\t\b\x02\x02\u02859\x03\x02\x02\x02\u0286\u0287\t\t\x02\x02\u0287" +
        ";\x03\x02\x02\x02\u0288\u028B\x05b2\x02\u0289\u028B\x07w\x02\x02\u028A" +
        "\u0288\x03\x02\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B=\x03\x02\x02" +
        "\x02\u028C\u028E\x07,\x02\x02\u028D\u028C\x03\x02\x02\x02\u028D\u028E" +
        "\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0297\x05<\x1F\x02" +
        "\u0290\u0292\x07\x7F\x02\x02\u0291\u0293\x07,\x02\x02\u0292\u0291\x03" +
        "\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294" +
        "\u0296\x05<\x1F\x02\u0295\u0290\x03\x02\x02\x02\u0296\u0299\x03\x02\x02" +
        "\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298?\x03" +
        "\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u029A\u029B\x05B\"\x02\u029B" +
        "A\x03\x02\x02\x02\u029C\u02A1\x05D#\x02\u029D\u029E\x07Z\x02\x02\u029E" +
        "\u02A0\x05D#\x02\u029F\u029D\x03\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02" +
        "\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2C\x03\x02" +
        "\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02A9\x05F$\x02\u02A5\u02A6" +
        "\x07[\x02\x02\u02A6\u02A8\x05F$\x02\u02A7\u02A5\x03\x02\x02\x02\u02A8" +
        "\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03\x02" +
        "\x02\x02\u02AAE\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AC\u02AE" +
        "\x07\\\x02\x02\u02AD\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
        "\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0\x05H%\x02\u02B0G\x03\x02\x02" +
        "\x02\u02B1\u02B4\x05J&\x02\u02B2\u02B3\t\n\x02\x02\u02B3\u02B5\x05J&\x02" +
        "\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5I\x03\x02" +
        "\x02\x02\u02B6\u02BB\x05L\'\x02\u02B7\u02B8\t\x03\x02\x02\u02B8\u02BA" +
        "\x05L\'\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB" +
        "\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BCK\x03\x02\x02" +
        "\x02\u02BD\u02BB\x03\x02\x02\x02\u02BE\u02C3\x05N(\x02\u02BF\u02C0\t\v" +
        "\x02\x02\u02C0\u02C2\x05N(\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2\u02C5" +
        "\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02" +
        "\u02C4M\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6\u02C7\x07\x81" +
        "\x02\x02\u02C7\u02C8\x05<\x1F\x02\u02C8\u02C9\x07\x82\x02\x02\u02C9\u02CF" +
        "\x03\x02\x02\x02\u02CA\u02CC\t\x03\x02\x02\u02CB\u02CA\x03\x02\x02\x02" +
        "\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CF\x05" +
        "\xA8U\x02\u02CE\u02C6\x03\x02\x02\x02\u02CE\u02CB\x03\x02\x02\x02\u02CF" +
        "O\x03\x02\x02\x02\u02D0\u02EE\x05|?\x02\u02D1\u02D2\x07X\x02\x02\u02D2" +
        "\u02EE\x05\x9CO\x02\u02D3\u02EE\x05V,\x02\u02D4\u02D5\x05R*\x02\u02D5" +
        "\u02D6\x07\x80\x02\x02\u02D6\u02EE\x03\x02\x02\x02\u02D7\u02EE\x05z>\x02" +
        "\u02D8\u02EE\x07?\x02\x02\u02D9\u02EE\x05\x82B\x02\u02DA\u02EE\x05d3\x02" +
        "\u02DB\u02EE\x05j6\x02\u02DC\u02EE\x05\"\x12\x02\u02DD\u02EE\x05\x18\r" +
        "\x02\u02DE\u02EE\x05f4\x02\u02DF\u02EE\x05x=\x02\u02E0\u02EE\x05v<\x02" +
        "\u02E1\u02EE\x05n8\x02\u02E2\u02EE\x05r:\x02\u02E3\u02EE\x05\x92J\x02" +
        "\u02E4\u02EE\x05\x98M\x02\u02E5\u02EE\x05\x96L\x02\u02E6\u02EE\x05\x90" +
        "I\x02\u02E7\u02EE\x05\x86D\x02\u02E8\u02EE\x05Z.\x02\u02E9\u02EE\x05t" +
        ";\x02\u02EA\u02EE\x05~@\x02\u02EB\u02EE\x05\x84C\x02\u02EC\u02EE\x05\xA8" +
        "U\x02\u02ED\u02D0\x03\x02\x02\x02\u02ED\u02D1\x03\x02\x02\x02\u02ED\u02D3" +
        "\x03\x02\x02\x02\u02ED\u02D4\x03\x02\x02\x02\u02ED\u02D7\x03\x02\x02\x02" +
        "\u02ED\u02D8\x03\x02\x02\x02\u02ED\u02D9\x03\x02\x02\x02\u02ED\u02DA\x03" +
        "\x02\x02\x02\u02ED\u02DB\x03\x02\x02\x02\u02ED\u02DC\x03\x02\x02\x02\u02ED" +
        "\u02DD\x03\x02\x02\x02\u02ED\u02DE\x03\x02\x02\x02\u02ED\u02DF\x03\x02" +
        "\x02\x02\u02ED\u02E0\x03\x02\x02\x02\u02ED\u02E1\x03\x02\x02\x02\u02ED" +
        "\u02E2\x03\x02\x02\x02\u02ED\u02E3\x03\x02\x02\x02\u02ED\u02E4\x03\x02" +
        "\x02\x02\u02ED\u02E5\x03\x02\x02\x02\u02ED\u02E6\x03\x02\x02\x02\u02ED" +
        "\u02E7\x03\x02\x02\x02\u02ED\u02E8\x03\x02\x02\x02\u02ED\u02E9\x03\x02" +
        "\x02\x02\u02ED\u02EA\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED" +
        "\u02EC\x03\x02\x02\x02\u02EEQ\x03\x02\x02\x02\u02EF\u02FC\x05^0\x02\u02F0" +
        "\u02FC\x05\\/\x02\u02F1\u02FC\x05Z.\x02\u02F2\u02FC\x05`1\x02\u02F3\u02FC" +
        "\x05b2\x02\u02F4\u02FC\x05\x1A\x0E\x02\u02F5\u02FC\x05f4\x02\u02F6\u02FC" +
        "\x05l7\x02\u02F7\u02FC\x05p9\x02\u02F8\u02FC\x05\x80A\x02\u02F9\u02FC" +
        "\x05\x90I\x02\u02FA\u02FC\x05T+\x02\u02FB\u02EF\x03\x02\x02\x02\u02FB" +
        "\u02F0\x03\x02\x02\x02\u02FB\u02F1\x03\x02\x02\x02\u02FB\u02F2\x03\x02" +
        "\x02\x02\u02FB\u02F3\x03\x02\x02\x02\u02FB\u02F4\x03\x02\x02\x02\u02FB" +
        "\u02F5\x03\x02\x02\x02\u02FB\u02F6\x03\x02\x02\x02\u02FB\u02F7\x03\x02" +
        "\x02\x02\u02FB\u02F8\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB" +
        "\u02FA\x03\x02\x02\x02\u02FCS\x03\x02\x02\x02\u02FD\u02FE\x05X-\x02\u02FE" +
        "\u0303\t\f\x02\x02\u02FF\u0304\x07\\\x02\x02\u0300\u0304\x07w\x02\x02" +
        "\u0301\u0304\x05@!\x02\u0302\u0304\x05<\x1F\x02\u0303\u02FF\x03\x02\x02" +
        "\x02\u0303\u0300\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0302" +
        "\x03\x02\x02\x02\u0304U\x03\x02\x02\x02\u0305\u0307\x05T+\x02\u0306\u0308" +
        "\x07\x80\x02\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02" +
        "\u0308W\x03\x02\x02\x02\u0309\u030A\x05\x9EP\x02\u030A\u030B\x07\x89\x02" +
        "\x02\u030B\u030C\x05\x9AN\x02\u030C\u0312\x03\x02\x02\x02\u030D\u0312" +
        "\x05\xA0Q\x02\u030E\u0312\x05\xA2R\x02\u030F\u0312\x05\xA4S\x02\u0310" +
        "\u0312\x05\xA6T\x02\u0311\u0309\x03\x02\x02\x02\u0311\u030D\x03\x02\x02" +
        "\x02\u0311\u030E\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0310" +
        "\x03\x02\x02\x02\u0312Y\x03\x02\x02\x02\u0313\u0315\x07Y\x02\x02\u0314" +
        "\u0316\x05<\x1F\x02\u0315\u0314\x03\x02\x02\x02\u0315\u0316\x03\x02\x02" +
        "\x02\u0316[\x03\x02\x02\x02\u0317\u0318\x05\x9EP\x02\u0318\u0319\x07\x89" +
        "\x02\x02\u0319\u031A\x05\x9AN\x02\u031A\u031D\x03\x02\x02\x02\u031B\u031D" +
        "\x05\xA0Q\x02\u031C\u0317\x03\x02\x02\x02\u031C\u031B\x03\x02\x02\x02" +
        "\u031D]\x03\x02\x02\x02\u031E\u031F\x05\x9CO\x02\u031F\u0326\x07\x89\x02" +
        "\x02\u0320\u0322\x070\x02\x02\u0321\u0323\x078\x02\x02\u0322\u0321\x03" +
        "\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0327\x03\x02\x02\x02\u0324" +
        "\u0325\x078\x02\x02\u0325\u0327\x070\x02\x02\u0326\u0320\x03\x02\x02\x02" +
        "\u0326\u0324\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u0329\x05" +
        "\\/\x02\u0329_\x03\x02\x02\x02\u032A\u032B\x079\x02\x02\u032B\u032C\x07" +
        "\x81\x02\x02\u032C\u032D\x05> \x02\u032D\u032E\x07\x82\x02\x02\u032Ea" +
        "\x03\x02\x02\x02\u032F\u0330\x07G\x02\x02\u0330\u0331\x07\x81\x02\x02" +
        "\u0331\u0332\x05> \x02\u0332\u0333\x07\x82\x02\x02\u0333\u0337\x03\x02" +
        "\x02\x02\u0334\u0335\x07^\x02\x02\u0335\u0337\x07G\x02\x02\u0336\u032F" +
        "\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337c\x03\x02\x02\x02\u0338" +
        "\u033D\x05\\/\x02\u0339\u033D\x05^0\x02\u033A\u033D\x05`1\x02\u033B\u033D" +
        "\x05b2\x02\u033C\u0338\x03\x02\x02\x02\u033C\u0339\x03\x02\x02\x02\u033C" +
        "\u033A\x03\x02\x02\x02\u033C\u033B\x03\x02\x02\x02\u033De\x03\x02\x02" +
        "\x02\u033E\u0342\x07]\x02\x02\u033F\u0340\x05\x9CO\x02\u0340\u0341\x07" +
        "|\x02\x02\u0341\u0343\x03\x02\x02\x02\u0342\u033F\x03\x02\x02\x02\u0342" +
        "\u0343\x03\x02\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344\u0347\x05\xA0" +
        "Q\x02\u0345\u0347\x05\xA6T\x02\u0346\u0344\x03\x02\x02\x02\u0346\u0345" +
        "\x03\x02\x02\x02\u0347g\x03\x02\x02\x02\u0348\u0349\x05\x9CO\x02\u0349" +
        "\u034D\x07\x89\x02\x02\u034A\u034B\x05\x9CO\x02\u034B\u034C\x07\x89\x02" +
        "\x02\u034C\u034E\x03\x02\x02\x02\u034D\u034A\x03\x02\x02\x02\u034D\u034E" +
        "\x03\x02\x02\x02\u034E\u0352\x03\x02\x02\x02\u034F\u0350\x07_\x02\x02" +
        "\u0350\u0352\x07q\x02\x02\u0351\u0348\x03\x02\x02\x02\u0351\u034F\x03" +
        "\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353" +
        "\u0354\x078\x02\x02\u0354\u0355\x05\xA0Q\x02\u0355i\x03\x02\x02\x02\u0356" +
        "\u0357\x05h5\x02\u0357k\x03\x02\x02\x02\u0358\u035A\x07P\x02\x02\u0359" +
        "\u035B\x07R\x02\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B\x03\x02\x02" +
        "\x02\u035B\u035F\x03\x02\x02\x02\u035C\u035D\x05\x9CO\x02\u035D\u035E" +
        "\x07\x89\x02\x02\u035E\u0360\x03\x02\x02\x02\u035F\u035C\x03\x02\x02\x02" +
        "\u035F\u0360\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0367\x05" +
        "\xB2Z\x02\u0362\u0364\x07\x81\x02\x02\u0363\u0365\x05> \x02\u0364\u0363" +
        "\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02" +
        "\u0366\u0368\x07\x82\x02\x02\u0367\u0362\x03\x02\x02\x02\u0367\u0368\x03" +
        "\x02\x02\x02\u0368m\x03\x02\x02\x02\u0369\u036A\x05l7\x02\u036Ao\x03\x02" +
        "\x02\x02\u036B\u036C\x07Q\x02\x02\u036C\u036D\x05<\x1F\x02\u036Dq\x03" +
        "\x02\x02\x02\u036E\u036F\x05p9\x02\u036Fs\x03\x02\x02\x02\u0370\u0371" +
        "\x07F\x02\x02\u0371\u0372\x05X-\x02\u0372\u0373\x07g\x02\x02\u0373\u0374" +
        "\x05<\x1F\x02\u0374\u0375\x07*\x02\x02\u0375\u0378\x05<\x1F\x02\u0376" +
        "\u0377\x07K\x02\x02\u0377\u0379\x05<\x1F\x02\u0378\u0376\x03\x02\x02\x02" +
        "\u0378\u0379\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037B\x05" +
        "P)\x02\u037B\u037C\x07H\x02\x02\u037Cu\x03\x02\x02\x02\u037D\u037E\x07" +
        "D\x02\x02\u037E\u037F\t\r\x02\x02\u037F\u0383\x05@!\x02\u0380\u0382\x05" +
        "P)\x02\u0381\u0380\x03\x02\x02\x02\u0382\u0385\x03\x02\x02\x02\u0383\u0381" +
        "\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0386\x03\x02\x02\x02" +
        "\u0385\u0383\x03\x02\x02\x02\u0386\u0387\x07I\x02\x02\u0387w\x03\x02\x02" +
        "\x02\u0388\u038C\x07D\x02\x02\u0389\u038B\x05P)\x02\u038A\u0389\x03\x02" +
        "\x02\x02\u038B\u038E\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C" +
        "\u038D\x03\x02\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E\u038C\x03\x02" +
        "\x02\x02\u038F\u0390\x07I\x02\x02\u0390\u0391\t\r\x02\x02\u0391\u0392" +
        "\x05@!\x02\u0392y\x03\x02\x02\x02\u0393\u0394\x07<\x02\x02\u0394\u0395" +
        "\x05@!\x02\u0395\u0399\x07=\x02\x02\u0396\u0398\x05P)\x02\u0397\u0396" +
        "\x03\x02\x02\x02\u0398\u039B\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02" +
        "\u0399\u039A\x03\x02\x02\x02\u039A\u03A7\x03\x02\x02\x02\u039B\u0399\x03" +
        "\x02\x02\x02\u039C\u039D\x07>\x02\x02\u039D\u039E\x05@!\x02\u039E\u03A2" +
        "\x07=\x02\x02\u039F\u03A1\x05P)\x02\u03A0\u039F\x03\x02\x02\x02\u03A1" +
        "\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02" +
        "\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5" +
        "\u039C\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02\x02\u03A7\u03A5\x03\x02" +
        "\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03B1\x03\x02\x02\x02\u03A9" +
        "\u03A7\x03\x02\x02\x02\u03AA\u03AE\x07;\x02\x02\u03AB\u03AD\x05P)\x02" +
        "\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03B0\x03\x02\x02\x02\u03AE\u03AC\x03" +
        "\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0" +
        "\u03AE\x03\x02\x02\x02\u03B1\u03AA\x03\x02\x02\x02\u03B1\u03B2\x03\x02" +
        "\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B4\x07\x1E\x02\x02\u03B4" +
        "\u03B6\x07<\x02\x02\u03B5\u03B7\x07\x80\x02\x02\u03B6\u03B5\x03\x02\x02" +
        "\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7{\x03\x02\x02\x02\u03B8\u03B9\x07" +
        "<\x02\x02\u03B9\u03BA\x05@!\x02\u03BA\u03BB\x07=\x02\x02\u03BB\u03BC\x05" +
        "P)\x02\u03BC}\x03\x02\x02\x02\u03BD\u03BE\x07C\x02\x02\u03BE\x7F\x03\x02" +
        "\x02\x02\u03BF\u03C0\x07C\x02\x02\u03C0\x81\x03\x02\x02\x02\u03C1\u03C2" +
        "\x05\xA6T\x02\u03C2\u03C3\x07\x89\x02\x02\u03C3\u03C5\x03\x02\x02\x02" +
        "\u03C4\u03C1\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03" +
        "\x02\x02\x02\u03C6\u03C8\t\x0E\x02\x02\u03C7\u03C9\x078\x02\x02\u03C8" +
        "\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03\x02" +
        "\x02\x02\u03CA\u03CB\x05\x9AN\x02\u03CB\u03CD\x07\x81\x02\x02\u03CC\u03CE" +
        "\x05> \x02\u03CD\u03CC\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE" +
        "\u03CF\x03\x02\x02\x02\u03CF\u03D0\x07\x82\x02\x02\u03D0\x83\x03\x02\x02" +
        "\x02\u03D1\u03D2\x07@\x02\x02\u03D2\x85\x03\x02\x02\x02\u03D3\u03D4\x07" +
        "A\x02\x02\u03D4\u03D5\x07/\x02\x02\u03D5\u03DA\x05<\x1F\x02\u03D6\u03DB" +
        "\x05\x8CG\x02\u03D7\u03DB\x05\x8AF\x02\u03D8\u03DB\x05\x8EH\x02\u03D9" +
        "\u03DB\x05\x88E\x02\u03DA\u03D6\x03\x02\x02\x02\u03DA\u03D7\x03\x02\x02" +
        "\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DC" +
        "\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02" +
        "\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03DF\x07\x1E\x02\x02\u03DF\u03E0\x07" +
        "A\x02\x02\u03E0\x87\x03\x02\x02\x02\u03E1\u03E2\x07/\x02\x02\u03E2\u03E7" +
        "\x05<\x1F\x02\u03E3\u03E4\x07\x7F\x02\x02\u03E4\u03E6\x05<\x1F\x02\u03E5" +
        "\u03E3\x03\x02\x02\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02" +
        "\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03ED\x03\x02\x02\x02\u03E9" +
        "\u03E7\x03\x02\x02\x02\u03EA\u03EC\x05P)\x02\u03EB\u03EA\x03\x02\x02\x02" +
        "\u03EC\u03EF\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED\u03EE\x03" +
        "\x02\x02\x02\u03EE\x89\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03F0" +
        "\u03F1\x07/\x02\x02\u03F1\u03F2\x07B\x02\x02\u03F2\u03F3\t\n\x02\x02\u03F3" +
        "\u03F7\x05<\x1F\x02\u03F4\u03F6\x05P)\x02\u03F5\u03F4\x03\x02\x02\x02" +
        "\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F8\x03" +
        "\x02\x02\x02\u03F8\x8B\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03FA" +
        "\u03FB\x07/\x02\x02\u03FB\u03FC\x05\xA8U\x02\u03FC\u03FD\x07*\x02\x02" +
        "\u03FD\u0401\x05\xA8U\x02\u03FE\u0400\x05P)\x02\u03FF\u03FE\x03\x02\x02" +
        "\x02\u0400\u0403\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0401\u0402" +
        "\x03\x02\x02\x02\u0402\x8D\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02" +
        "\u0404\u0405\x07/\x02\x02\u0405\u0409\x07;\x02\x02\u0406\u0408\x05P)\x02" +
        "\u0407\u0406\x03\x02\x02\x02\u0408\u040B\x03\x02\x02\x02\u0409\u0407\x03" +
        "\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\x8F\x03\x02\x02\x02\u040B" +
        "\u0409\x03\x02\x02\x02\u040C\u040D\x07:\x02\x02\u040D\u040E\x05\x9CO\x02" +
        "\u040E\x91\x03\x02\x02\x02\u040F\u0410\x05\x9CO\x02\u0410\u0411\x07\x83" +
        "\x02\x02\u0411\x93\x03\x02\x02\x02\u0412\u0416\x07?\x02\x02\u0413\u0415" +
        "\x05P)\x02\u0414\u0413\x03\x02\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416" +
        "\u0414\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0425\x03\x02" +
        "\x02\x02\u0418\u0416\x03\x02\x02\x02\u0419\u041A\x07L\x02\x02\u041A\u041B" +
        "\x07\x81\x02\x02\u041B\u041C\x05\x1A\x0E\x02\u041C\u0420\x07\x82\x02\x02" +
        "\u041D\u041F\x05P)\x02\u041E\u041D\x03\x02\x02\x02\u041F\u0422\x03\x02" +
        "\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
        "\u0424\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0423\u0419\x03\x02" +
        "\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0425" +
        "\u0426\x03\x02\x02\x02\u0426\u042F\x03\x02\x02\x02\u0427\u0425\x03";
    PowerBuilderParser._serializedATNSegment2 = "\x02\x02\x02\u0428\u042C\x07M\x02\x02\u0429\u042B\x05P)\x02\u042A\u0429" +
        "\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02\u042C\u042A\x03\x02\x02\x02" +
        "\u042C\u042D\x03\x02\x02\x02\u042D\u0430\x03\x02\x02\x02\u042E\u042C\x03" +
        "\x02\x02\x02\u042F\u0428\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430" +
        "\u0431\x03\x02\x02\x02\u0431\u0432\x07\x1E\x02\x02\u0432\u0433\x07?\x02" +
        "\x02\u0433\x95\x03\x02\x02\x02\u0434\u0435\x07N\x02\x02\u0435\u0436\x05" +
        "<\x1F\x02\u0436\x97\x03\x02\x02\x02\u0437\u044C\x05\x9CO\x02\u0438\u0439" +
        "\x07_\x02\x02\u0439\u043D\x07q\x02\x02\u043A\u043E\x07P\x02\x02\u043B" +
        "\u043E\x07Q\x02\x02\u043C\u043E\x05\x9AN\x02\u043D\u043A\x03\x02\x02\x02" +
        "\u043D\u043B\x03\x02\x02\x02\u043D\u043C\x03\x02\x02\x02\u043E\u044C\x03" +
        "\x02\x02\x02\u043F\u0440\x05\x9CO\x02\u0440\u0441\x07q\x02\x02\u0441\u0442" +
        "\t\x0F\x02\x02\u0442\u044C\x03\x02\x02\x02\u0443\u0444\x05\x9CO\x02\u0444" +
        "\u0445\x07\x89\x02\x02\u0445\u0446\t\x0F\x02\x02\u0446\u044C\x03\x02\x02" +
        "\x02\u0447\u0448\x05\x9CO\x02\u0448\u0449\x07q\x02\x02\u0449\u044A\x05" +
        "\x9AN\x02\u044A\u044C\x03\x02\x02\x02\u044B\u0437\x03\x02\x02\x02\u044B" +
        "\u0438\x03\x02\x02\x02\u044B\u043F\x03\x02\x02\x02\u044B\u0443\x03\x02" +
        "\x02\x02\u044B\u0447\x03\x02\x02\x02\u044C\x99\x03\x02\x02\x02\u044D\u045A" +
        "\x05\x9CO\x02\u044E\u045A\x07U\x02\x02\u044F\u045A\x07(\x02\x02\u0450" +
        "\u045A\x07.\x02\x02\u0451\u045A\x07V\x02\x02\u0452\u045A\x079\x02\x02" +
        "\u0453\u045A\x07G\x02\x02\u0454\u045A\x07:\x02\x02\u0455\u045A\x07W\x02" +
        "\x02\u0456\u045A\x07X\x02\x02\u0457\u045A\x07\x8B\x02\x02\u0458\u045A" +
        "\x07&\x02\x02\u0459\u044D\x03\x02\x02\x02\u0459\u044E\x03\x02\x02\x02" +
        "\u0459\u044F\x03\x02\x02\x02\u0459\u0450\x03\x02\x02\x02\u0459\u0451\x03" +
        "\x02\x02\x02\u0459\u0452\x03\x02\x02\x02\u0459\u0453\x03\x02\x02\x02\u0459" +
        "\u0454\x03\x02\x02\x02\u0459\u0455\x03\x02\x02\x02\u0459\u0456\x03\x02" +
        "\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u0458\x03\x02\x02\x02\u045A" +
        "\x9B\x03\x02\x02\x02\u045B\u045C\x07\x8F\x02\x02\u045C\x9D\x03\x02\x02" +
        "\x02\u045D\u0467\x05\xAAV\x02\u045E\u0464\x05\x9CO\x02\u045F\u0461\x07" +
        "\x81\x02\x02\u0460\u0462\x05> \x02\u0461\u0460\x03\x02\x02\x02\u0461\u0462" +
        "\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0465\x07\x82\x02\x02" +
        "\u0464\u045F\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465\u0467\x03" +
        "\x02\x02\x02\u0466\u045D\x03\x02\x02\x02\u0466\u045E\x03\x02\x02\x02\u0467" +
        "\x9F\x03\x02\x02\x02\u0468\u046B\x05\x98M\x02\u0469\u046B\x07X\x02\x02" +
        "\u046A\u0468\x03\x02\x02\x02\u046A\u0469\x03\x02\x02\x02\u046B\u046C\x03" +
        "\x02\x02\x02\u046C\u046E\x07\x81\x02\x02\u046D\u046F\x05> \x02\u046E\u046D" +
        "\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02" +
        "\u0470\u0471\x07\x82\x02\x02\u0471\xA1\x03\x02\x02\x02\u0472\u0473\x05" +
        "\x9CO\x02\u0473\u0474\x07y\x02\x02\u0474\u0475\x05> \x02\u0475\u0476\x07" +
        "z\x02\x02\u0476\xA3\x03\x02\x02\x02\u0477\u0478\x05\x9CO\x02\u0478\u0479" +
        "\x07{\x02\x02\u0479\xA5\x03\x02\x02\x02\u047A\u047B\x05\x98M\x02\u047B" +
        "\xA7\x03\x02\x02\x02\u047C\u048E\x05h5\x02\u047D\u047E\x05\x9EP\x02\u047E" +
        "\u047F\x07\x89\x02\x02\u047F\u0480\x05\x9AN\x02\u0480\u048E\x03\x02\x02" +
        "\x02\u0481\u048E\x05\xB0Y\x02\u0482\u048E\x05\xA0Q\x02\u0483\u048E\x05" +
        "\xA2R\x02\u0484\u048E\x05\xA4S\x02\u0485\u048E\x05\xA6T\x02\u0486\u048E" +
        "\x05\xACW\x02\u0487\u048E\x05\xAEX\x02\u0488\u048E\x07\x8E\x02\x02\u0489" +
        "\u048E\x07}\x02\x02\u048A\u048E\x07~\x02\x02\u048B\u048E\x07\x8A\x02\x02" +
        "\u048C\u048E\x07\x8B\x02\x02\u048D\u047C\x03\x02\x02\x02\u048D\u047D\x03" +
        "\x02\x02\x02\u048D\u0481\x03\x02\x02\x02\u048D\u0482\x03\x02\x02\x02\u048D" +
        "\u0483\x03\x02\x02\x02\u048D\u0484\x03\x02\x02\x02\u048D\u0485\x03\x02" +
        "\x02\x02\u048D\u0486\x03\x02\x02\x02\u048D\u0487\x03\x02\x02\x02\u048D" +
        "\u0488\x03\x02\x02\x02\u048D\u0489\x03\x02\x02\x02\u048D\u048A\x03\x02" +
        "\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D\u048C\x03\x02\x02\x02\u048E" +
        "\xA9\x03\x02\x02\x02\u048F\u0490\x05\x9CO\x02\u0490\u0491\x07y\x02\x02" +
        "\u0491\u0492\x05> \x02\u0492\u0493\x07z\x02\x02\u0493\xAB\x03\x02\x02" +
        "\x02\u0494\u0495\x07\x88\x02\x02\u0495\xAD\x03\x02\x02\x02\u0496\u0497" +
        "\t\x10\x02\x02\u0497\xAF\x03\x02\x02\x02\u0498\u0499\x05\xB4[\x02\u0499" +
        "\u049A\x07\x81\x02\x02\u049A\u049F\x05<\x1F\x02\u049B\u049C\x07\x7F\x02" +
        "\x02\u049C\u049E\x05<\x1F\x02\u049D\u049B\x03\x02\x02\x02\u049E\u04A1" +
        "\x03\x02\x02\x02\u049F\u049D\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02" +
        "\u04A0\u04A2\x03\x02\x02\x02\u04A1\u049F\x03\x02\x02\x02\u04A2\u04A3\x07" +
        "\x82\x02\x02\u04A3\xB1\x03\x02\x02\x02\u04A4\u04A7\x05\xB4[\x02\u04A5" +
        "\u04A7\x05\x9CO\x02\u04A6\u04A4\x03\x02\x02\x02\u04A6\u04A5\x03\x02\x02" +
        "\x02\u04A7\xB3\x03\x02\x02\x02\u04A8\u04A9\t\x11\x02\x02\u04A9\xB5\x03" +
        "\x02\x02\x02\x9A\xB7\xBC\xC3\xC9\xCE\xDC\xE0\xE6\xF4\xFA\xFE\u0100\u0103" +
        "\u0108\u010B\u0113\u0117\u011D\u0130\u0135\u0137\u013E\u0143\u0145\u014B" +
        "\u0154\u0156\u015B\u015D\u0163\u016B\u0170\u0173\u0179\u017D\u017F\u018A" +
        "\u018C\u0196\u0198\u01A2\u01A5\u01A8\u01B1\u01B6\u01B9\u01BD\u01C2\u01C5" +
        "\u01C9\u01CC\u01CF\u01D7\u01DA\u01DF\u01E4\u01EC\u01EE\u01F4\u01F8\u01FB" +
        "\u01FE\u0202\u0206\u020D\u0212\u0219\u021F\u0222\u0227\u022C\u0231\u0237" +
        "\u0241\u0247\u024A\u024E\u0251\u0259\u025D\u0262\u0267\u026C\u0270\u0273" +
        "\u0279\u028A\u028D\u0292\u0297\u02A1\u02A9\u02AD\u02B4\u02BB\u02C3\u02CB" +
        "\u02CE\u02ED\u02FB\u0303\u0307\u0311\u0315\u031C\u0322\u0326\u0336\u033C" +
        "\u0342\u0346\u034D\u0351\u035A\u035F\u0364\u0367\u0378\u0383\u038C\u0399" +
        "\u03A2\u03A7\u03AE\u03B1\u03B6\u03C4\u03C8\u03CD\u03DA\u03DC\u03E7\u03ED" +
        "\u03F7\u0401\u0409\u0416\u0420\u0425\u042C\u042F\u043D\u044B\u0459\u0461" +
        "\u0464\u0466\u046A\u046E\u048D\u049F\u04A6";
    PowerBuilderParser._serializedATN = Utils.join([
        PowerBuilderParser._serializedATNSegment0,
        PowerBuilderParser._serializedATNSegment1,
        PowerBuilderParser._serializedATNSegment2,
    ], "");
    return PowerBuilderParser;
}(Parser_1.Parser));
exports.PowerBuilderParser = PowerBuilderParser;
var Start_ruleContext = /** @class */ (function (_super) {
    __extends(Start_ruleContext, _super);
    function Start_ruleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Start_ruleContext.prototype.EOF = function () { return this.getToken(PowerBuilderParser.EOF, 0); };
    Start_ruleContext.prototype.header_rule = function () {
        return this.tryGetRuleContext(0, Header_ruleContext);
    };
    Start_ruleContext.prototype.body_rule = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Body_ruleContext);
        }
        else {
            return this.getRuleContext(i, Body_ruleContext);
        }
    };
    Object.defineProperty(Start_ruleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_start_rule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Start_ruleContext.prototype.enterRule = function (listener) {
        if (listener.enterStart_rule) {
            listener.enterStart_rule(this);
        }
    };
    // @Override
    Start_ruleContext.prototype.exitRule = function (listener) {
        if (listener.exitStart_rule) {
            listener.exitStart_rule(this);
        }
    };
    // @Override
    Start_ruleContext.prototype.accept = function (visitor) {
        if (visitor.visitStart_rule) {
            return visitor.visitStart_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Start_ruleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Start_ruleContext = Start_ruleContext;
var Header_ruleContext = /** @class */ (function (_super) {
    __extends(Header_ruleContext, _super);
    function Header_ruleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Header_ruleContext.prototype.EXPORT_HEADER = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.EXPORT_HEADER);
        }
        else {
            return this.getToken(PowerBuilderParser.EXPORT_HEADER, i);
        }
    };
    Header_ruleContext.prototype.RELEASE = function () { return this.tryGetToken(PowerBuilderParser.RELEASE, 0); };
    Header_ruleContext.prototype.NUMBER = function () { return this.tryGetToken(PowerBuilderParser.NUMBER, 0); };
    Header_ruleContext.prototype.SEMI = function () { return this.tryGetToken(PowerBuilderParser.SEMI, 0); };
    Header_ruleContext.prototype.window_property = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Window_propertyContext);
        }
        else {
            return this.getRuleContext(i, Window_propertyContext);
        }
    };
    Object.defineProperty(Header_ruleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_header_rule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Header_ruleContext.prototype.enterRule = function (listener) {
        if (listener.enterHeader_rule) {
            listener.enterHeader_rule(this);
        }
    };
    // @Override
    Header_ruleContext.prototype.exitRule = function (listener) {
        if (listener.exitHeader_rule) {
            listener.exitHeader_rule(this);
        }
    };
    // @Override
    Header_ruleContext.prototype.accept = function (visitor) {
        if (visitor.visitHeader_rule) {
            return visitor.visitHeader_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Header_ruleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Header_ruleContext = Header_ruleContext;
var Body_ruleContext = /** @class */ (function (_super) {
    __extends(Body_ruleContext, _super);
    function Body_ruleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Body_ruleContext.prototype.datatype_decl = function () {
        return this.tryGetRuleContext(0, Datatype_declContext);
    };
    Body_ruleContext.prototype.access_modif = function () {
        return this.tryGetRuleContext(0, Access_modifContext);
    };
    Body_ruleContext.prototype.forward_decl = function () {
        return this.tryGetRuleContext(0, Forward_declContext);
    };
    Body_ruleContext.prototype.type_variables_decl = function () {
        return this.tryGetRuleContext(0, Type_variables_declContext);
    };
    Body_ruleContext.prototype.global_variables_decl = function () {
        return this.tryGetRuleContext(0, Global_variables_declContext);
    };
    Body_ruleContext.prototype.variable_decl = function () {
        return this.tryGetRuleContext(0, Variable_declContext);
    };
    Body_ruleContext.prototype.constant_decl = function () {
        return this.tryGetRuleContext(0, Constant_declContext);
    };
    Body_ruleContext.prototype.function_forward_decl = function () {
        return this.tryGetRuleContext(0, Function_forward_declContext);
    };
    Body_ruleContext.prototype.functions_forward_decl = function () {
        return this.tryGetRuleContext(0, Functions_forward_declContext);
    };
    Body_ruleContext.prototype.function_body = function () {
        return this.tryGetRuleContext(0, Function_bodyContext);
    };
    Body_ruleContext.prototype.on_body = function () {
        return this.tryGetRuleContext(0, On_bodyContext);
    };
    Body_ruleContext.prototype.event_body = function () {
        return this.tryGetRuleContext(0, Event_bodyContext);
    };
    Object.defineProperty(Body_ruleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_body_rule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Body_ruleContext.prototype.enterRule = function (listener) {
        if (listener.enterBody_rule) {
            listener.enterBody_rule(this);
        }
    };
    // @Override
    Body_ruleContext.prototype.exitRule = function (listener) {
        if (listener.exitBody_rule) {
            listener.exitBody_rule(this);
        }
    };
    // @Override
    Body_ruleContext.prototype.accept = function (visitor) {
        if (visitor.visitBody_rule) {
            return visitor.visitBody_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Body_ruleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Body_ruleContext = Body_ruleContext;
var Window_propertyContext = /** @class */ (function (_super) {
    __extends(Window_propertyContext, _super);
    function Window_propertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Window_propertyContext.prototype.attribute_name = function () {
        return this.getRuleContext(0, Attribute_nameContext);
    };
    Window_propertyContext.prototype.LPAREN = function () { return this.getToken(PowerBuilderParser.LPAREN, 0); };
    Window_propertyContext.prototype.RPAREN = function () { return this.getToken(PowerBuilderParser.RPAREN, 0); };
    Window_propertyContext.prototype.array_decl_sub = function () {
        return this.tryGetRuleContext(0, Array_decl_subContext);
    };
    Window_propertyContext.prototype.window_property_attribute_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Window_property_attribute_subContext);
        }
        else {
            return this.getRuleContext(i, Window_property_attribute_subContext);
        }
    };
    Object.defineProperty(Window_propertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_window_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Window_propertyContext.prototype.enterRule = function (listener) {
        if (listener.enterWindow_property) {
            listener.enterWindow_property(this);
        }
    };
    // @Override
    Window_propertyContext.prototype.exitRule = function (listener) {
        if (listener.exitWindow_property) {
            listener.exitWindow_property(this);
        }
    };
    // @Override
    Window_propertyContext.prototype.accept = function (visitor) {
        if (visitor.visitWindow_property) {
            return visitor.visitWindow_property(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Window_propertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Window_propertyContext = Window_propertyContext;
var Window_property_attribute_subContext = /** @class */ (function (_super) {
    __extends(Window_property_attribute_subContext, _super);
    function Window_property_attribute_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Window_property_attribute_subContext.prototype.NULL = function () { return this.tryGetToken(PowerBuilderParser.NULL, 0); };
    Window_property_attribute_subContext.prototype.numeric_atom = function () {
        return this.tryGetRuleContext(0, Numeric_atomContext);
    };
    Window_property_attribute_subContext.prototype.DQUOTED_STRING = function () { return this.tryGetToken(PowerBuilderParser.DQUOTED_STRING, 0); };
    Window_property_attribute_subContext.prototype.DATE = function () { return this.tryGetToken(PowerBuilderParser.DATE, 0); };
    Window_property_attribute_subContext.prototype.TIME = function () { return this.tryGetToken(PowerBuilderParser.TIME, 0); };
    Window_property_attribute_subContext.prototype.attribute_name = function () {
        return this.tryGetRuleContext(0, Attribute_nameContext);
    };
    Window_property_attribute_subContext.prototype.EQ = function () { return this.tryGetToken(PowerBuilderParser.EQ, 0); };
    Window_property_attribute_subContext.prototype.COMMA = function () { return this.tryGetToken(PowerBuilderParser.COMMA, 0); };
    Window_property_attribute_subContext.prototype.attribute_value = function () {
        return this.tryGetRuleContext(0, Attribute_valueContext);
    };
    Window_property_attribute_subContext.prototype.LPAREN = function () { return this.tryGetToken(PowerBuilderParser.LPAREN, 0); };
    Window_property_attribute_subContext.prototype.RPAREN = function () { return this.tryGetToken(PowerBuilderParser.RPAREN, 0); };
    Window_property_attribute_subContext.prototype.array_decl_sub = function () {
        return this.tryGetRuleContext(0, Array_decl_subContext);
    };
    Window_property_attribute_subContext.prototype.window_property_attribute_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Window_property_attribute_subContext);
        }
        else {
            return this.getRuleContext(i, Window_property_attribute_subContext);
        }
    };
    Object.defineProperty(Window_property_attribute_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_window_property_attribute_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Window_property_attribute_subContext.prototype.enterRule = function (listener) {
        if (listener.enterWindow_property_attribute_sub) {
            listener.enterWindow_property_attribute_sub(this);
        }
    };
    // @Override
    Window_property_attribute_subContext.prototype.exitRule = function (listener) {
        if (listener.exitWindow_property_attribute_sub) {
            listener.exitWindow_property_attribute_sub(this);
        }
    };
    // @Override
    Window_property_attribute_subContext.prototype.accept = function (visitor) {
        if (visitor.visitWindow_property_attribute_sub) {
            return visitor.visitWindow_property_attribute_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Window_property_attribute_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Window_property_attribute_subContext = Window_property_attribute_subContext;
var Attribute_nameContext = /** @class */ (function (_super) {
    __extends(Attribute_nameContext, _super);
    function Attribute_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Attribute_nameContext.prototype.identifier_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_nameContext);
        }
        else {
            return this.getRuleContext(i, Identifier_nameContext);
        }
    };
    Attribute_nameContext.prototype.TYPE = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.TYPE);
        }
        else {
            return this.getToken(PowerBuilderParser.TYPE, i);
        }
    };
    Attribute_nameContext.prototype.UPDATE = function () { return this.tryGetToken(PowerBuilderParser.UPDATE, 0); };
    Attribute_nameContext.prototype.NUMBER = function () { return this.tryGetToken(PowerBuilderParser.NUMBER, 0); };
    Attribute_nameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.DOT);
        }
        else {
            return this.getToken(PowerBuilderParser.DOT, i);
        }
    };
    Attribute_nameContext.prototype.CASE = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.CASE);
        }
        else {
            return this.getToken(PowerBuilderParser.CASE, i);
        }
    };
    Attribute_nameContext.prototype.ON = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.ON);
        }
        else {
            return this.getToken(PowerBuilderParser.ON, i);
        }
    };
    Attribute_nameContext.prototype.DYNAMIC = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.DYNAMIC);
        }
        else {
            return this.getToken(PowerBuilderParser.DYNAMIC, i);
        }
    };
    Object.defineProperty(Attribute_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_attribute_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Attribute_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute_name) {
            listener.enterAttribute_name(this);
        }
    };
    // @Override
    Attribute_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute_name) {
            listener.exitAttribute_name(this);
        }
    };
    // @Override
    Attribute_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute_name) {
            return visitor.visitAttribute_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Attribute_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Attribute_nameContext = Attribute_nameContext;
var Attribute_valueContext = /** @class */ (function (_super) {
    __extends(Attribute_valueContext, _super);
    function Attribute_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Attribute_valueContext.prototype.atom_sub_call1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_call1Context);
    };
    Attribute_valueContext.prototype.atom_sub_member1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_member1Context);
    };
    Attribute_valueContext.prototype.numeric_atom = function () {
        return this.tryGetRuleContext(0, Numeric_atomContext);
    };
    Attribute_valueContext.prototype.MINUS = function () { return this.tryGetToken(PowerBuilderParser.MINUS, 0); };
    Attribute_valueContext.prototype.boolean_atom = function () {
        return this.tryGetRuleContext(0, Boolean_atomContext);
    };
    Attribute_valueContext.prototype.ENUM = function () { return this.tryGetToken(PowerBuilderParser.ENUM, 0); };
    Attribute_valueContext.prototype.DQUOTED_STRING = function () { return this.tryGetToken(PowerBuilderParser.DQUOTED_STRING, 0); };
    Attribute_valueContext.prototype.QUOTED_STRING = function () { return this.tryGetToken(PowerBuilderParser.QUOTED_STRING, 0); };
    Attribute_valueContext.prototype.DATE = function () { return this.tryGetToken(PowerBuilderParser.DATE, 0); };
    Attribute_valueContext.prototype.TIME = function () { return this.tryGetToken(PowerBuilderParser.TIME, 0); };
    Attribute_valueContext.prototype.TYPE = function () { return this.tryGetToken(PowerBuilderParser.TYPE, 0); };
    Attribute_valueContext.prototype.TO = function () { return this.tryGetToken(PowerBuilderParser.TO, 0); };
    Attribute_valueContext.prototype.FROM = function () { return this.tryGetToken(PowerBuilderParser.FROM, 0); };
    Attribute_valueContext.prototype.REF = function () { return this.tryGetToken(PowerBuilderParser.REF, 0); };
    Attribute_valueContext.prototype.NULL = function () { return this.tryGetToken(PowerBuilderParser.NULL, 0); };
    Attribute_valueContext.prototype.OPEN = function () { return this.tryGetToken(PowerBuilderParser.OPEN, 0); };
    Attribute_valueContext.prototype.LPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.LPAREN);
        }
        else {
            return this.getToken(PowerBuilderParser.LPAREN, i);
        }
    };
    Attribute_valueContext.prototype.RPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.RPAREN);
        }
        else {
            return this.getToken(PowerBuilderParser.RPAREN, i);
        }
    };
    Attribute_valueContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Attribute_valueContext.prototype.dataTypeSub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeSubContext);
        }
        else {
            return this.getRuleContext(i, DataTypeSubContext);
        }
    };
    Attribute_valueContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.COMMA);
        }
        else {
            return this.getToken(PowerBuilderParser.COMMA, i);
        }
    };
    Attribute_valueContext.prototype.NUMBER = function () { return this.tryGetToken(PowerBuilderParser.NUMBER, 0); };
    Object.defineProperty(Attribute_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_attribute_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Attribute_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute_value) {
            listener.enterAttribute_value(this);
        }
    };
    // @Override
    Attribute_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute_value) {
            listener.exitAttribute_value(this);
        }
    };
    // @Override
    Attribute_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute_value) {
            return visitor.visitAttribute_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Attribute_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Attribute_valueContext = Attribute_valueContext;
var Forward_declContext = /** @class */ (function (_super) {
    __extends(Forward_declContext, _super);
    function Forward_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Forward_declContext.prototype.FORWARD = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.FORWARD);
        }
        else {
            return this.getToken(PowerBuilderParser.FORWARD, i);
        }
    };
    Forward_declContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Forward_declContext.prototype.datatype_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Datatype_declContext);
        }
        else {
            return this.getRuleContext(i, Datatype_declContext);
        }
    };
    Forward_declContext.prototype.variable_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Variable_declContext);
        }
        else {
            return this.getRuleContext(i, Variable_declContext);
        }
    };
    Object.defineProperty(Forward_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_forward_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Forward_declContext.prototype.enterRule = function (listener) {
        if (listener.enterForward_decl) {
            listener.enterForward_decl(this);
        }
    };
    // @Override
    Forward_declContext.prototype.exitRule = function (listener) {
        if (listener.exitForward_decl) {
            listener.exitForward_decl(this);
        }
    };
    // @Override
    Forward_declContext.prototype.accept = function (visitor) {
        if (visitor.visitForward_decl) {
            return visitor.visitForward_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Forward_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Forward_declContext = Forward_declContext;
var Datatype_declContext = /** @class */ (function (_super) {
    __extends(Datatype_declContext, _super);
    function Datatype_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Datatype_declContext.prototype.TYPE = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.TYPE);
        }
        else {
            return this.getToken(PowerBuilderParser.TYPE, i);
        }
    };
    Datatype_declContext.prototype.identifier_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_nameContext);
        }
        else {
            return this.getRuleContext(i, Identifier_nameContext);
        }
    };
    Datatype_declContext.prototype.FROM = function () { return this.getToken(PowerBuilderParser.FROM, 0); };
    Datatype_declContext.prototype.data_type_name = function () {
        return this.getRuleContext(0, Data_type_nameContext);
    };
    Datatype_declContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Datatype_declContext.prototype.scope_modif = function () {
        return this.tryGetRuleContext(0, Scope_modifContext);
    };
    Datatype_declContext.prototype.TICK = function () { return this.tryGetToken(PowerBuilderParser.TICK, 0); };
    Datatype_declContext.prototype.WITHIN = function () { return this.tryGetToken(PowerBuilderParser.WITHIN, 0); };
    Datatype_declContext.prototype.AUTOINSTANTIATE = function () { return this.tryGetToken(PowerBuilderParser.AUTOINSTANTIATE, 0); };
    Datatype_declContext.prototype.DESCRIPTOR = function () { return this.tryGetToken(PowerBuilderParser.DESCRIPTOR, 0); };
    Datatype_declContext.prototype.DQUOTED_STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.DQUOTED_STRING);
        }
        else {
            return this.getToken(PowerBuilderParser.DQUOTED_STRING, i);
        }
    };
    Datatype_declContext.prototype.EQ = function () { return this.tryGetToken(PowerBuilderParser.EQ, 0); };
    Datatype_declContext.prototype.variable_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Variable_declContext);
        }
        else {
            return this.getRuleContext(i, Variable_declContext);
        }
    };
    Datatype_declContext.prototype.event_forward_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Event_forward_declContext);
        }
        else {
            return this.getRuleContext(i, Event_forward_declContext);
        }
    };
    Object.defineProperty(Datatype_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_datatype_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Datatype_declContext.prototype.enterRule = function (listener) {
        if (listener.enterDatatype_decl) {
            listener.enterDatatype_decl(this);
        }
    };
    // @Override
    Datatype_declContext.prototype.exitRule = function (listener) {
        if (listener.exitDatatype_decl) {
            listener.exitDatatype_decl(this);
        }
    };
    // @Override
    Datatype_declContext.prototype.accept = function (visitor) {
        if (visitor.visitDatatype_decl) {
            return visitor.visitDatatype_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Datatype_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Datatype_declContext = Datatype_declContext;
var Type_variables_declContext = /** @class */ (function (_super) {
    __extends(Type_variables_declContext, _super);
    function Type_variables_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_variables_declContext.prototype.TYPE = function () { return this.getToken(PowerBuilderParser.TYPE, 0); };
    Type_variables_declContext.prototype.VARIABLES = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.VARIABLES);
        }
        else {
            return this.getToken(PowerBuilderParser.VARIABLES, i);
        }
    };
    Type_variables_declContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Type_variables_declContext.prototype.access_modif = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Access_modifContext);
        }
        else {
            return this.getRuleContext(i, Access_modifContext);
        }
    };
    Type_variables_declContext.prototype.variable_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Variable_declContext);
        }
        else {
            return this.getRuleContext(i, Variable_declContext);
        }
    };
    Type_variables_declContext.prototype.constant_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Constant_declContext);
        }
        else {
            return this.getRuleContext(i, Constant_declContext);
        }
    };
    Object.defineProperty(Type_variables_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_type_variables_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_variables_declContext.prototype.enterRule = function (listener) {
        if (listener.enterType_variables_decl) {
            listener.enterType_variables_decl(this);
        }
    };
    // @Override
    Type_variables_declContext.prototype.exitRule = function (listener) {
        if (listener.exitType_variables_decl) {
            listener.exitType_variables_decl(this);
        }
    };
    // @Override
    Type_variables_declContext.prototype.accept = function (visitor) {
        if (visitor.visitType_variables_decl) {
            return visitor.visitType_variables_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_variables_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_variables_declContext = Type_variables_declContext;
var Global_variables_declContext = /** @class */ (function (_super) {
    __extends(Global_variables_declContext, _super);
    function Global_variables_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Global_variables_declContext.prototype.VARIABLES = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.VARIABLES);
        }
        else {
            return this.getToken(PowerBuilderParser.VARIABLES, i);
        }
    };
    Global_variables_declContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Global_variables_declContext.prototype.GLOBAL = function () { return this.tryGetToken(PowerBuilderParser.GLOBAL, 0); };
    Global_variables_declContext.prototype.SHARED = function () { return this.tryGetToken(PowerBuilderParser.SHARED, 0); };
    Global_variables_declContext.prototype.variable_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Variable_declContext);
        }
        else {
            return this.getRuleContext(i, Variable_declContext);
        }
    };
    Global_variables_declContext.prototype.constant_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Constant_declContext);
        }
        else {
            return this.getRuleContext(i, Constant_declContext);
        }
    };
    Object.defineProperty(Global_variables_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_global_variables_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Global_variables_declContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobal_variables_decl) {
            listener.enterGlobal_variables_decl(this);
        }
    };
    // @Override
    Global_variables_declContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobal_variables_decl) {
            listener.exitGlobal_variables_decl(this);
        }
    };
    // @Override
    Global_variables_declContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobal_variables_decl) {
            return visitor.visitGlobal_variables_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Global_variables_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Global_variables_declContext = Global_variables_declContext;
var Variable_declContext = /** @class */ (function (_super) {
    __extends(Variable_declContext, _super);
    function Variable_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Variable_declContext.prototype.variable_decl_sub = function () {
        return this.getRuleContext(0, Variable_decl_subContext);
    };
    Variable_declContext.prototype.SEMI = function () { return this.getToken(PowerBuilderParser.SEMI, 0); };
    Object.defineProperty(Variable_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_variable_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Variable_declContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable_decl) {
            listener.enterVariable_decl(this);
        }
    };
    // @Override
    Variable_declContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable_decl) {
            listener.exitVariable_decl(this);
        }
    };
    // @Override
    Variable_declContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable_decl) {
            return visitor.visitVariable_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Variable_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Variable_declContext = Variable_declContext;
var Variable_decl_subContext = /** @class */ (function (_super) {
    __extends(Variable_decl_subContext, _super);
    function Variable_decl_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Variable_decl_subContext.prototype.INDIRECT = function () { return this.tryGetToken(PowerBuilderParser.INDIRECT, 0); };
    Variable_decl_subContext.prototype.access_modif_part = function () {
        return this.tryGetRuleContext(0, Access_modif_partContext);
    };
    Variable_decl_subContext.prototype.scope_modif = function () {
        return this.tryGetRuleContext(0, Scope_modifContext);
    };
    Object.defineProperty(Variable_decl_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_variable_decl_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Variable_decl_subContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable_decl_sub) {
            listener.enterVariable_decl_sub(this);
        }
    };
    // @Override
    Variable_decl_subContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable_decl_sub) {
            listener.exitVariable_decl_sub(this);
        }
    };
    // @Override
    Variable_decl_subContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable_decl_sub) {
            return visitor.visitVariable_decl_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Variable_decl_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Variable_decl_subContext = Variable_decl_subContext;
var Decimal_decl_subContext = /** @class */ (function (_super) {
    __extends(Decimal_decl_subContext, _super);
    function Decimal_decl_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Decimal_decl_subContext.prototype.LCURLY = function () { return this.getToken(PowerBuilderParser.LCURLY, 0); };
    Decimal_decl_subContext.prototype.NUMBER = function () { return this.getToken(PowerBuilderParser.NUMBER, 0); };
    Decimal_decl_subContext.prototype.RCURLY = function () { return this.getToken(PowerBuilderParser.RCURLY, 0); };
    Object.defineProperty(Decimal_decl_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_decimal_decl_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Decimal_decl_subContext.prototype.enterRule = function (listener) {
        if (listener.enterDecimal_decl_sub) {
            listener.enterDecimal_decl_sub(this);
        }
    };
    // @Override
    Decimal_decl_subContext.prototype.exitRule = function (listener) {
        if (listener.exitDecimal_decl_sub) {
            listener.exitDecimal_decl_sub(this);
        }
    };
    // @Override
    Decimal_decl_subContext.prototype.accept = function (visitor) {
        if (visitor.visitDecimal_decl_sub) {
            return visitor.visitDecimal_decl_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Decimal_decl_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Decimal_decl_subContext = Decimal_decl_subContext;
var Array_decl_subContext = /** @class */ (function (_super) {
    __extends(Array_decl_subContext, _super);
    function Array_decl_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_decl_subContext.prototype.BRACES = function () { return this.tryGetToken(PowerBuilderParser.BRACES, 0); };
    Array_decl_subContext.prototype.LBRACE = function () { return this.tryGetToken(PowerBuilderParser.LBRACE, 0); };
    Array_decl_subContext.prototype.RBRACE = function () { return this.tryGetToken(PowerBuilderParser.RBRACE, 0); };
    Array_decl_subContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.NUMBER);
        }
        else {
            return this.getToken(PowerBuilderParser.NUMBER, i);
        }
    };
    Array_decl_subContext.prototype.TO = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.TO);
        }
        else {
            return this.getToken(PowerBuilderParser.TO, i);
        }
    };
    Array_decl_subContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.COMMA);
        }
        else {
            return this.getToken(PowerBuilderParser.COMMA, i);
        }
    };
    Array_decl_subContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.PLUS);
        }
        else {
            return this.getToken(PowerBuilderParser.PLUS, i);
        }
    };
    Array_decl_subContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.MINUS);
        }
        else {
            return this.getToken(PowerBuilderParser.MINUS, i);
        }
    };
    Object.defineProperty(Array_decl_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_array_decl_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_decl_subContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_decl_sub) {
            listener.enterArray_decl_sub(this);
        }
    };
    // @Override
    Array_decl_subContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_decl_sub) {
            listener.exitArray_decl_sub(this);
        }
    };
    // @Override
    Array_decl_subContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_decl_sub) {
            return visitor.visitArray_decl_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_decl_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_decl_subContext = Array_decl_subContext;
var Constant_decl_subContext = /** @class */ (function (_super) {
    __extends(Constant_decl_subContext, _super);
    function Constant_decl_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Constant_decl_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_constant_decl_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constant_decl_subContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant_decl_sub) {
            listener.enterConstant_decl_sub(this);
        }
    };
    // @Override
    Constant_decl_subContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant_decl_sub) {
            listener.exitConstant_decl_sub(this);
        }
    };
    // @Override
    Constant_decl_subContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant_decl_sub) {
            return visitor.visitConstant_decl_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constant_decl_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constant_decl_subContext = Constant_decl_subContext;
var Constant_declContext = /** @class */ (function (_super) {
    __extends(Constant_declContext, _super);
    function Constant_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Constant_declContext.prototype.constant_decl_sub = function () {
        return this.getRuleContext(0, Constant_decl_subContext);
    };
    Constant_declContext.prototype.SEMI = function () { return this.getToken(PowerBuilderParser.SEMI, 0); };
    Object.defineProperty(Constant_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_constant_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constant_declContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant_decl) {
            listener.enterConstant_decl(this);
        }
    };
    // @Override
    Constant_declContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant_decl) {
            listener.exitConstant_decl(this);
        }
    };
    // @Override
    Constant_declContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant_decl) {
            return visitor.visitConstant_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constant_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constant_declContext = Constant_declContext;
var Function_forward_declContext = /** @class */ (function (_super) {
    __extends(Function_forward_declContext, _super);
    function Function_forward_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_forward_declContext.prototype.identifier_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_nameContext);
        }
        else {
            return this.getRuleContext(i, Identifier_nameContext);
        }
    };
    Function_forward_declContext.prototype.LPAREN = function () { return this.getToken(PowerBuilderParser.LPAREN, 0); };
    Function_forward_declContext.prototype.RPAREN = function () { return this.getToken(PowerBuilderParser.RPAREN, 0); };
    Function_forward_declContext.prototype.FUNCTION = function () { return this.tryGetToken(PowerBuilderParser.FUNCTION, 0); };
    Function_forward_declContext.prototype.data_type_name = function () {
        return this.tryGetRuleContext(0, Data_type_nameContext);
    };
    Function_forward_declContext.prototype.SUBROUTINE = function () { return this.tryGetToken(PowerBuilderParser.SUBROUTINE, 0); };
    Function_forward_declContext.prototype.access_modif_part = function () {
        return this.tryGetRuleContext(0, Access_modif_partContext);
    };
    Function_forward_declContext.prototype.scope_modif = function () {
        return this.tryGetRuleContext(0, Scope_modifContext);
    };
    Function_forward_declContext.prototype.parameters_list_sub = function () {
        return this.tryGetRuleContext(0, Parameters_list_subContext);
    };
    Function_forward_declContext.prototype.LIBRARY = function () { return this.tryGetToken(PowerBuilderParser.LIBRARY, 0); };
    Function_forward_declContext.prototype.RPCFUNC = function () { return this.tryGetToken(PowerBuilderParser.RPCFUNC, 0); };
    Function_forward_declContext.prototype.ALIAS = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.ALIAS);
        }
        else {
            return this.getToken(PowerBuilderParser.ALIAS, i);
        }
    };
    Function_forward_declContext.prototype.FOR = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.FOR);
        }
        else {
            return this.getToken(PowerBuilderParser.FOR, i);
        }
    };
    Function_forward_declContext.prototype.THROWS = function () { return this.tryGetToken(PowerBuilderParser.THROWS, 0); };
    Function_forward_declContext.prototype.DQUOTED_STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.DQUOTED_STRING);
        }
        else {
            return this.getToken(PowerBuilderParser.DQUOTED_STRING, i);
        }
    };
    Function_forward_declContext.prototype.QUOTED_STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.QUOTED_STRING);
        }
        else {
            return this.getToken(PowerBuilderParser.QUOTED_STRING, i);
        }
    };
    Object.defineProperty(Function_forward_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_function_forward_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_forward_declContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_forward_decl) {
            listener.enterFunction_forward_decl(this);
        }
    };
    // @Override
    Function_forward_declContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_forward_decl) {
            listener.exitFunction_forward_decl(this);
        }
    };
    // @Override
    Function_forward_declContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_forward_decl) {
            return visitor.visitFunction_forward_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_forward_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_forward_declContext = Function_forward_declContext;
var Parameter_subContext = /** @class */ (function (_super) {
    __extends(Parameter_subContext, _super);
    function Parameter_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parameter_subContext.prototype.data_type_name = function () {
        return this.getRuleContext(0, Data_type_nameContext);
    };
    Parameter_subContext.prototype.identifier_name = function () {
        return this.getRuleContext(0, Identifier_nameContext);
    };
    Parameter_subContext.prototype.READONLY = function () { return this.tryGetToken(PowerBuilderParser.READONLY, 0); };
    Parameter_subContext.prototype.REF = function () { return this.tryGetToken(PowerBuilderParser.REF, 0); };
    Parameter_subContext.prototype.decimal_decl_sub = function () {
        return this.tryGetRuleContext(0, Decimal_decl_subContext);
    };
    Parameter_subContext.prototype.array_decl_sub = function () {
        return this.tryGetRuleContext(0, Array_decl_subContext);
    };
    Object.defineProperty(Parameter_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_parameter_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parameter_subContext.prototype.enterRule = function (listener) {
        if (listener.enterParameter_sub) {
            listener.enterParameter_sub(this);
        }
    };
    // @Override
    Parameter_subContext.prototype.exitRule = function (listener) {
        if (listener.exitParameter_sub) {
            listener.exitParameter_sub(this);
        }
    };
    // @Override
    Parameter_subContext.prototype.accept = function (visitor) {
        if (visitor.visitParameter_sub) {
            return visitor.visitParameter_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parameter_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parameter_subContext = Parameter_subContext;
var Parameters_list_subContext = /** @class */ (function (_super) {
    __extends(Parameters_list_subContext, _super);
    function Parameters_list_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parameters_list_subContext.prototype.parameter_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Parameter_subContext);
        }
        else {
            return this.getRuleContext(i, Parameter_subContext);
        }
    };
    Parameters_list_subContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.COMMA);
        }
        else {
            return this.getToken(PowerBuilderParser.COMMA, i);
        }
    };
    Parameters_list_subContext.prototype.DOTDOTDOT = function () { return this.tryGetToken(PowerBuilderParser.DOTDOTDOT, 0); };
    Object.defineProperty(Parameters_list_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_parameters_list_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parameters_list_subContext.prototype.enterRule = function (listener) {
        if (listener.enterParameters_list_sub) {
            listener.enterParameters_list_sub(this);
        }
    };
    // @Override
    Parameters_list_subContext.prototype.exitRule = function (listener) {
        if (listener.exitParameters_list_sub) {
            listener.exitParameters_list_sub(this);
        }
    };
    // @Override
    Parameters_list_subContext.prototype.accept = function (visitor) {
        if (visitor.visitParameters_list_sub) {
            return visitor.visitParameters_list_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parameters_list_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parameters_list_subContext = Parameters_list_subContext;
var Functions_forward_declContext = /** @class */ (function (_super) {
    __extends(Functions_forward_declContext, _super);
    function Functions_forward_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Functions_forward_declContext.prototype.PROTOTYPES = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.PROTOTYPES);
        }
        else {
            return this.getToken(PowerBuilderParser.PROTOTYPES, i);
        }
    };
    Functions_forward_declContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Functions_forward_declContext.prototype.FORWARD = function () { return this.tryGetToken(PowerBuilderParser.FORWARD, 0); };
    Functions_forward_declContext.prototype.TYPE = function () { return this.tryGetToken(PowerBuilderParser.TYPE, 0); };
    Functions_forward_declContext.prototype.function_forward_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Function_forward_declContext);
        }
        else {
            return this.getRuleContext(i, Function_forward_declContext);
        }
    };
    Object.defineProperty(Functions_forward_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_functions_forward_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Functions_forward_declContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctions_forward_decl) {
            listener.enterFunctions_forward_decl(this);
        }
    };
    // @Override
    Functions_forward_declContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctions_forward_decl) {
            listener.exitFunctions_forward_decl(this);
        }
    };
    // @Override
    Functions_forward_declContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctions_forward_decl) {
            return visitor.visitFunctions_forward_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Functions_forward_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Functions_forward_declContext = Functions_forward_declContext;
var Function_bodyContext = /** @class */ (function (_super) {
    __extends(Function_bodyContext, _super);
    function Function_bodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_bodyContext.prototype.identifier_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_nameContext);
        }
        else {
            return this.getRuleContext(i, Identifier_nameContext);
        }
    };
    Function_bodyContext.prototype.LPAREN = function () { return this.getToken(PowerBuilderParser.LPAREN, 0); };
    Function_bodyContext.prototype.RPAREN = function () { return this.getToken(PowerBuilderParser.RPAREN, 0); };
    Function_bodyContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Function_bodyContext.prototype.FUNCTION = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.FUNCTION);
        }
        else {
            return this.getToken(PowerBuilderParser.FUNCTION, i);
        }
    };
    Function_bodyContext.prototype.SUBROUTINE = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.SUBROUTINE);
        }
        else {
            return this.getToken(PowerBuilderParser.SUBROUTINE, i);
        }
    };
    Function_bodyContext.prototype.data_type_name = function () {
        return this.tryGetRuleContext(0, Data_type_nameContext);
    };
    Function_bodyContext.prototype.access_type = function () {
        return this.tryGetRuleContext(0, Access_typeContext);
    };
    Function_bodyContext.prototype.scope_modif = function () {
        return this.tryGetRuleContext(0, Scope_modifContext);
    };
    Function_bodyContext.prototype.parameters_list_sub = function () {
        return this.tryGetRuleContext(0, Parameters_list_subContext);
    };
    Function_bodyContext.prototype.THROWS = function () { return this.tryGetToken(PowerBuilderParser.THROWS, 0); };
    Function_bodyContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.SEMI);
        }
        else {
            return this.getToken(PowerBuilderParser.SEMI, i);
        }
    };
    Function_bodyContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Function_bodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_function_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_bodyContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_body) {
            listener.enterFunction_body(this);
        }
    };
    // @Override
    Function_bodyContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_body) {
            listener.exitFunction_body(this);
        }
    };
    // @Override
    Function_bodyContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_body) {
            return visitor.visitFunction_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_bodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_bodyContext = Function_bodyContext;
var On_bodyContext = /** @class */ (function (_super) {
    __extends(On_bodyContext, _super);
    function On_bodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    On_bodyContext.prototype.ON = function () { return this.getToken(PowerBuilderParser.ON, 0); };
    On_bodyContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    On_bodyContext.prototype.OPEN = function () { return this.tryGetToken(PowerBuilderParser.OPEN, 0); };
    On_bodyContext.prototype.CLOSE = function () { return this.tryGetToken(PowerBuilderParser.CLOSE, 0); };
    Object.defineProperty(On_bodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_on_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    On_bodyContext.prototype.enterRule = function (listener) {
        if (listener.enterOn_body) {
            listener.enterOn_body(this);
        }
    };
    // @Override
    On_bodyContext.prototype.exitRule = function (listener) {
        if (listener.exitOn_body) {
            listener.exitOn_body(this);
        }
    };
    // @Override
    On_bodyContext.prototype.accept = function (visitor) {
        if (visitor.visitOn_body) {
            return visitor.visitOn_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return On_bodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.On_bodyContext = On_bodyContext;
var Event_forward_declContext = /** @class */ (function (_super) {
    __extends(Event_forward_declContext, _super);
    function Event_forward_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Event_forward_declContext.prototype.EVENT = function () { return this.getToken(PowerBuilderParser.EVENT, 0); };
    Event_forward_declContext.prototype.identifier_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_nameContext);
        }
        else {
            return this.getRuleContext(i, Identifier_nameContext);
        }
    };
    Event_forward_declContext.prototype.CREATE = function () { return this.tryGetToken(PowerBuilderParser.CREATE, 0); };
    Event_forward_declContext.prototype.DESTROY = function () { return this.tryGetToken(PowerBuilderParser.DESTROY, 0); };
    Event_forward_declContext.prototype.LPAREN = function () { return this.tryGetToken(PowerBuilderParser.LPAREN, 0); };
    Event_forward_declContext.prototype.RPAREN = function () { return this.tryGetToken(PowerBuilderParser.RPAREN, 0); };
    Event_forward_declContext.prototype.parameters_list_sub = function () {
        return this.tryGetRuleContext(0, Parameters_list_subContext);
    };
    Event_forward_declContext.prototype.TYPE = function () { return this.tryGetToken(PowerBuilderParser.TYPE, 0); };
    Event_forward_declContext.prototype.data_type_name = function () {
        return this.tryGetRuleContext(0, Data_type_nameContext);
    };
    Object.defineProperty(Event_forward_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_event_forward_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Event_forward_declContext.prototype.enterRule = function (listener) {
        if (listener.enterEvent_forward_decl) {
            listener.enterEvent_forward_decl(this);
        }
    };
    // @Override
    Event_forward_declContext.prototype.exitRule = function (listener) {
        if (listener.exitEvent_forward_decl) {
            listener.exitEvent_forward_decl(this);
        }
    };
    // @Override
    Event_forward_declContext.prototype.accept = function (visitor) {
        if (visitor.visitEvent_forward_decl) {
            return visitor.visitEvent_forward_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Event_forward_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Event_forward_declContext = Event_forward_declContext;
var Event_bodyContext = /** @class */ (function (_super) {
    __extends(Event_bodyContext, _super);
    function Event_bodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Event_bodyContext.prototype.EVENT = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.EVENT);
        }
        else {
            return this.getToken(PowerBuilderParser.EVENT, i);
        }
    };
    Event_bodyContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Event_bodyContext.prototype.identifier_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_nameContext);
        }
        else {
            return this.getRuleContext(i, Identifier_nameContext);
        }
    };
    Event_bodyContext.prototype.OPEN = function () { return this.tryGetToken(PowerBuilderParser.OPEN, 0); };
    Event_bodyContext.prototype.CLOSE = function () { return this.tryGetToken(PowerBuilderParser.CLOSE, 0); };
    Event_bodyContext.prototype.TYPE = function () { return this.tryGetToken(PowerBuilderParser.TYPE, 0); };
    Event_bodyContext.prototype.data_type_name = function () {
        return this.tryGetRuleContext(0, Data_type_nameContext);
    };
    Event_bodyContext.prototype.COLONCOLON = function () { return this.tryGetToken(PowerBuilderParser.COLONCOLON, 0); };
    Event_bodyContext.prototype.LPAREN = function () { return this.tryGetToken(PowerBuilderParser.LPAREN, 0); };
    Event_bodyContext.prototype.RPAREN = function () { return this.tryGetToken(PowerBuilderParser.RPAREN, 0); };
    Event_bodyContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.SEMI);
        }
        else {
            return this.getToken(PowerBuilderParser.SEMI, i);
        }
    };
    Event_bodyContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Event_bodyContext.prototype.parameters_list_sub = function () {
        return this.tryGetRuleContext(0, Parameters_list_subContext);
    };
    Object.defineProperty(Event_bodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_event_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Event_bodyContext.prototype.enterRule = function (listener) {
        if (listener.enterEvent_body) {
            listener.enterEvent_body(this);
        }
    };
    // @Override
    Event_bodyContext.prototype.exitRule = function (listener) {
        if (listener.exitEvent_body) {
            listener.exitEvent_body(this);
        }
    };
    // @Override
    Event_bodyContext.prototype.accept = function (visitor) {
        if (visitor.visitEvent_body) {
            return visitor.visitEvent_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Event_bodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Event_bodyContext = Event_bodyContext;
var Access_typeContext = /** @class */ (function (_super) {
    __extends(Access_typeContext, _super);
    function Access_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Access_typeContext.prototype.PUBLIC = function () { return this.tryGetToken(PowerBuilderParser.PUBLIC, 0); };
    Access_typeContext.prototype.PRIVATE = function () { return this.tryGetToken(PowerBuilderParser.PRIVATE, 0); };
    Access_typeContext.prototype.PROTECTED = function () { return this.tryGetToken(PowerBuilderParser.PROTECTED, 0); };
    Object.defineProperty(Access_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_access_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Access_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterAccess_type) {
            listener.enterAccess_type(this);
        }
    };
    // @Override
    Access_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitAccess_type) {
            listener.exitAccess_type(this);
        }
    };
    // @Override
    Access_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitAccess_type) {
            return visitor.visitAccess_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Access_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Access_typeContext = Access_typeContext;
var Access_modifContext = /** @class */ (function (_super) {
    __extends(Access_modifContext, _super);
    function Access_modifContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Access_modifContext.prototype.access_type = function () {
        return this.getRuleContext(0, Access_typeContext);
    };
    Access_modifContext.prototype.COLON = function () { return this.getToken(PowerBuilderParser.COLON, 0); };
    Object.defineProperty(Access_modifContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_access_modif; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Access_modifContext.prototype.enterRule = function (listener) {
        if (listener.enterAccess_modif) {
            listener.enterAccess_modif(this);
        }
    };
    // @Override
    Access_modifContext.prototype.exitRule = function (listener) {
        if (listener.exitAccess_modif) {
            listener.exitAccess_modif(this);
        }
    };
    // @Override
    Access_modifContext.prototype.accept = function (visitor) {
        if (visitor.visitAccess_modif) {
            return visitor.visitAccess_modif(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Access_modifContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Access_modifContext = Access_modifContext;
var Access_modif_partContext = /** @class */ (function (_super) {
    __extends(Access_modif_partContext, _super);
    function Access_modif_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Access_modif_partContext.prototype.PUBLIC = function () { return this.tryGetToken(PowerBuilderParser.PUBLIC, 0); };
    Access_modif_partContext.prototype.PRIVATE = function () { return this.tryGetToken(PowerBuilderParser.PRIVATE, 0); };
    Access_modif_partContext.prototype.PRIVATEREAD = function () { return this.tryGetToken(PowerBuilderParser.PRIVATEREAD, 0); };
    Access_modif_partContext.prototype.PRIVATEWRITE = function () { return this.tryGetToken(PowerBuilderParser.PRIVATEWRITE, 0); };
    Access_modif_partContext.prototype.PROTECTED = function () { return this.tryGetToken(PowerBuilderParser.PROTECTED, 0); };
    Access_modif_partContext.prototype.PROTECTEDREAD = function () { return this.tryGetToken(PowerBuilderParser.PROTECTEDREAD, 0); };
    Access_modif_partContext.prototype.PROTECTEDWRITE = function () { return this.tryGetToken(PowerBuilderParser.PROTECTEDWRITE, 0); };
    Object.defineProperty(Access_modif_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_access_modif_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Access_modif_partContext.prototype.enterRule = function (listener) {
        if (listener.enterAccess_modif_part) {
            listener.enterAccess_modif_part(this);
        }
    };
    // @Override
    Access_modif_partContext.prototype.exitRule = function (listener) {
        if (listener.exitAccess_modif_part) {
            listener.exitAccess_modif_part(this);
        }
    };
    // @Override
    Access_modif_partContext.prototype.accept = function (visitor) {
        if (visitor.visitAccess_modif_part) {
            return visitor.visitAccess_modif_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Access_modif_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Access_modif_partContext = Access_modif_partContext;
var Scope_modifContext = /** @class */ (function (_super) {
    __extends(Scope_modifContext, _super);
    function Scope_modifContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Scope_modifContext.prototype.GLOBAL = function () { return this.tryGetToken(PowerBuilderParser.GLOBAL, 0); };
    Scope_modifContext.prototype.LOCAL = function () { return this.tryGetToken(PowerBuilderParser.LOCAL, 0); };
    Object.defineProperty(Scope_modifContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_scope_modif; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Scope_modifContext.prototype.enterRule = function (listener) {
        if (listener.enterScope_modif) {
            listener.enterScope_modif(this);
        }
    };
    // @Override
    Scope_modifContext.prototype.exitRule = function (listener) {
        if (listener.exitScope_modif) {
            listener.exitScope_modif(this);
        }
    };
    // @Override
    Scope_modifContext.prototype.accept = function (visitor) {
        if (visitor.visitScope_modif) {
            return visitor.visitScope_modif(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Scope_modifContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Scope_modifContext = Scope_modifContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.close_call_sub = function () {
        return this.tryGetRuleContext(0, Close_call_subContext);
    };
    ExpressionContext.prototype.LCURLY = function () { return this.tryGetToken(PowerBuilderParser.LCURLY, 0); };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_expression; },
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
var Expression_listContext = /** @class */ (function (_super) {
    __extends(Expression_listContext, _super);
    function Expression_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expression_listContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Expression_listContext.prototype.REF = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.REF);
        }
        else {
            return this.getToken(PowerBuilderParser.REF, i);
        }
    };
    Expression_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.COMMA);
        }
        else {
            return this.getToken(PowerBuilderParser.COMMA, i);
        }
    };
    Object.defineProperty(Expression_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_expression_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expression_listContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression_list) {
            listener.enterExpression_list(this);
        }
    };
    // @Override
    Expression_listContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression_list) {
            listener.exitExpression_list(this);
        }
    };
    // @Override
    Expression_listContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression_list) {
            return visitor.visitExpression_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expression_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expression_listContext = Expression_listContext;
var Boolean_expressionContext = /** @class */ (function (_super) {
    __extends(Boolean_expressionContext, _super);
    function Boolean_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Boolean_expressionContext.prototype.condition_or = function () {
        return this.getRuleContext(0, Condition_orContext);
    };
    Object.defineProperty(Boolean_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_boolean_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Boolean_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolean_expression) {
            listener.enterBoolean_expression(this);
        }
    };
    // @Override
    Boolean_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolean_expression) {
            listener.exitBoolean_expression(this);
        }
    };
    // @Override
    Boolean_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolean_expression) {
            return visitor.visitBoolean_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Boolean_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Boolean_expressionContext = Boolean_expressionContext;
var Condition_orContext = /** @class */ (function (_super) {
    __extends(Condition_orContext, _super);
    function Condition_orContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Condition_orContext.prototype.condition_and = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Condition_andContext);
        }
        else {
            return this.getRuleContext(i, Condition_andContext);
        }
    };
    Condition_orContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.OR);
        }
        else {
            return this.getToken(PowerBuilderParser.OR, i);
        }
    };
    Object.defineProperty(Condition_orContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_condition_or; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Condition_orContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition_or) {
            listener.enterCondition_or(this);
        }
    };
    // @Override
    Condition_orContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition_or) {
            listener.exitCondition_or(this);
        }
    };
    // @Override
    Condition_orContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition_or) {
            return visitor.visitCondition_or(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Condition_orContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Condition_orContext = Condition_orContext;
var Condition_andContext = /** @class */ (function (_super) {
    __extends(Condition_andContext, _super);
    function Condition_andContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Condition_andContext.prototype.condition_not = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Condition_notContext);
        }
        else {
            return this.getRuleContext(i, Condition_notContext);
        }
    };
    Condition_andContext.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.AND);
        }
        else {
            return this.getToken(PowerBuilderParser.AND, i);
        }
    };
    Object.defineProperty(Condition_andContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_condition_and; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Condition_andContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition_and) {
            listener.enterCondition_and(this);
        }
    };
    // @Override
    Condition_andContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition_and) {
            listener.exitCondition_and(this);
        }
    };
    // @Override
    Condition_andContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition_and) {
            return visitor.visitCondition_and(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Condition_andContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Condition_andContext = Condition_andContext;
var Condition_notContext = /** @class */ (function (_super) {
    __extends(Condition_notContext, _super);
    function Condition_notContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Condition_notContext.prototype.condition_comparison = function () {
        return this.getRuleContext(0, Condition_comparisonContext);
    };
    Condition_notContext.prototype.NOT = function () { return this.tryGetToken(PowerBuilderParser.NOT, 0); };
    Object.defineProperty(Condition_notContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_condition_not; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Condition_notContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition_not) {
            listener.enterCondition_not(this);
        }
    };
    // @Override
    Condition_notContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition_not) {
            listener.exitCondition_not(this);
        }
    };
    // @Override
    Condition_notContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition_not) {
            return visitor.visitCondition_not(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Condition_notContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Condition_notContext = Condition_notContext;
var Condition_comparisonContext = /** @class */ (function (_super) {
    __extends(Condition_comparisonContext, _super);
    function Condition_comparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Condition_comparisonContext.prototype.add_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Add_exprContext);
        }
        else {
            return this.getRuleContext(i, Add_exprContext);
        }
    };
    Condition_comparisonContext.prototype.EQ = function () { return this.tryGetToken(PowerBuilderParser.EQ, 0); };
    Condition_comparisonContext.prototype.GT = function () { return this.tryGetToken(PowerBuilderParser.GT, 0); };
    Condition_comparisonContext.prototype.LT = function () { return this.tryGetToken(PowerBuilderParser.LT, 0); };
    Condition_comparisonContext.prototype.GTLT = function () { return this.tryGetToken(PowerBuilderParser.GTLT, 0); };
    Condition_comparisonContext.prototype.GTE = function () { return this.tryGetToken(PowerBuilderParser.GTE, 0); };
    Condition_comparisonContext.prototype.LTE = function () { return this.tryGetToken(PowerBuilderParser.LTE, 0); };
    Object.defineProperty(Condition_comparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_condition_comparison; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Condition_comparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition_comparison) {
            listener.enterCondition_comparison(this);
        }
    };
    // @Override
    Condition_comparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition_comparison) {
            listener.exitCondition_comparison(this);
        }
    };
    // @Override
    Condition_comparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition_comparison) {
            return visitor.visitCondition_comparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Condition_comparisonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Condition_comparisonContext = Condition_comparisonContext;
var Add_exprContext = /** @class */ (function (_super) {
    __extends(Add_exprContext, _super);
    function Add_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Add_exprContext.prototype.mul_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Mul_exprContext);
        }
        else {
            return this.getRuleContext(i, Mul_exprContext);
        }
    };
    Add_exprContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.MINUS);
        }
        else {
            return this.getToken(PowerBuilderParser.MINUS, i);
        }
    };
    Add_exprContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.PLUS);
        }
        else {
            return this.getToken(PowerBuilderParser.PLUS, i);
        }
    };
    Object.defineProperty(Add_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_add_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Add_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterAdd_expr) {
            listener.enterAdd_expr(this);
        }
    };
    // @Override
    Add_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitAdd_expr) {
            listener.exitAdd_expr(this);
        }
    };
    // @Override
    Add_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitAdd_expr) {
            return visitor.visitAdd_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Add_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Add_exprContext = Add_exprContext;
var Mul_exprContext = /** @class */ (function (_super) {
    __extends(Mul_exprContext, _super);
    function Mul_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mul_exprContext.prototype.unary_sign_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Unary_sign_exprContext);
        }
        else {
            return this.getRuleContext(i, Unary_sign_exprContext);
        }
    };
    Mul_exprContext.prototype.MULT = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.MULT);
        }
        else {
            return this.getToken(PowerBuilderParser.MULT, i);
        }
    };
    Mul_exprContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.DIV);
        }
        else {
            return this.getToken(PowerBuilderParser.DIV, i);
        }
    };
    Mul_exprContext.prototype.CARAT = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.CARAT);
        }
        else {
            return this.getToken(PowerBuilderParser.CARAT, i);
        }
    };
    Object.defineProperty(Mul_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_mul_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mul_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterMul_expr) {
            listener.enterMul_expr(this);
        }
    };
    // @Override
    Mul_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitMul_expr) {
            listener.exitMul_expr(this);
        }
    };
    // @Override
    Mul_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitMul_expr) {
            return visitor.visitMul_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mul_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mul_exprContext = Mul_exprContext;
var Unary_sign_exprContext = /** @class */ (function (_super) {
    __extends(Unary_sign_exprContext, _super);
    function Unary_sign_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unary_sign_exprContext.prototype.LPAREN = function () { return this.tryGetToken(PowerBuilderParser.LPAREN, 0); };
    Unary_sign_exprContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Unary_sign_exprContext.prototype.RPAREN = function () { return this.tryGetToken(PowerBuilderParser.RPAREN, 0); };
    Unary_sign_exprContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Unary_sign_exprContext.prototype.MINUS = function () { return this.tryGetToken(PowerBuilderParser.MINUS, 0); };
    Unary_sign_exprContext.prototype.PLUS = function () { return this.tryGetToken(PowerBuilderParser.PLUS, 0); };
    Object.defineProperty(Unary_sign_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_unary_sign_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unary_sign_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterUnary_sign_expr) {
            listener.enterUnary_sign_expr(this);
        }
    };
    // @Override
    Unary_sign_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitUnary_sign_expr) {
            listener.exitUnary_sign_expr(this);
        }
    };
    // @Override
    Unary_sign_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitUnary_sign_expr) {
            return visitor.visitUnary_sign_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unary_sign_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unary_sign_exprContext = Unary_sign_exprContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.if_simple_statement = function () {
        return this.tryGetRuleContext(0, If_simple_statementContext);
    };
    StatementContext.prototype.DESCRIBE = function () { return this.tryGetToken(PowerBuilderParser.DESCRIBE, 0); };
    StatementContext.prototype.identifier_name = function () {
        return this.tryGetRuleContext(0, Identifier_nameContext);
    };
    StatementContext.prototype.assignment_statement = function () {
        return this.tryGetRuleContext(0, Assignment_statementContext);
    };
    StatementContext.prototype.statement_sub = function () {
        return this.tryGetRuleContext(0, Statement_subContext);
    };
    StatementContext.prototype.SEMI = function () { return this.tryGetToken(PowerBuilderParser.SEMI, 0); };
    StatementContext.prototype.if_statement = function () {
        return this.tryGetRuleContext(0, If_statementContext);
    };
    StatementContext.prototype.TRY = function () { return this.tryGetToken(PowerBuilderParser.TRY, 0); };
    StatementContext.prototype.post_event = function () {
        return this.tryGetRuleContext(0, Post_eventContext);
    };
    StatementContext.prototype.function_call_statement = function () {
        return this.tryGetRuleContext(0, Function_call_statementContext);
    };
    StatementContext.prototype.event_call_statement = function () {
        return this.tryGetRuleContext(0, Event_call_statementContext);
    };
    StatementContext.prototype.constant_decl = function () {
        return this.tryGetRuleContext(0, Constant_declContext);
    };
    StatementContext.prototype.variable_decl = function () {
        return this.tryGetRuleContext(0, Variable_declContext);
    };
    StatementContext.prototype.super_call_statement = function () {
        return this.tryGetRuleContext(0, Super_call_statementContext);
    };
    StatementContext.prototype.do_loop_while_statement = function () {
        return this.tryGetRuleContext(0, Do_loop_while_statementContext);
    };
    StatementContext.prototype.do_while_loop_statement = function () {
        return this.tryGetRuleContext(0, Do_while_loop_statementContext);
    };
    StatementContext.prototype.create_call_statement = function () {
        return this.tryGetRuleContext(0, Create_call_statementContext);
    };
    StatementContext.prototype.destroy_call_statement = function () {
        return this.tryGetRuleContext(0, Destroy_call_statementContext);
    };
    StatementContext.prototype.label_stat = function () {
        return this.tryGetRuleContext(0, Label_statContext);
    };
    StatementContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    StatementContext.prototype.throw_stat = function () {
        return this.tryGetRuleContext(0, Throw_statContext);
    };
    StatementContext.prototype.goto_stat = function () {
        return this.tryGetRuleContext(0, Goto_statContext);
    };
    StatementContext.prototype.choose_statement = function () {
        return this.tryGetRuleContext(0, Choose_statementContext);
    };
    StatementContext.prototype.return_statement = function () {
        return this.tryGetRuleContext(0, Return_statementContext);
    };
    StatementContext.prototype.for_loop_statement = function () {
        return this.tryGetRuleContext(0, For_loop_statementContext);
    };
    StatementContext.prototype.continue_statement = function () {
        return this.tryGetRuleContext(0, Continue_statementContext);
    };
    StatementContext.prototype.exit_statement = function () {
        return this.tryGetRuleContext(0, Exit_statementContext);
    };
    StatementContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_statement; },
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
var Statement_subContext = /** @class */ (function (_super) {
    __extends(Statement_subContext, _super);
    function Statement_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Statement_subContext.prototype.function_virtual_call_expression_sub = function () {
        return this.tryGetRuleContext(0, Function_virtual_call_expression_subContext);
    };
    Statement_subContext.prototype.function_call_expression_sub = function () {
        return this.tryGetRuleContext(0, Function_call_expression_subContext);
    };
    Statement_subContext.prototype.return_statement = function () {
        return this.tryGetRuleContext(0, Return_statementContext);
    };
    Statement_subContext.prototype.open_call_sub = function () {
        return this.tryGetRuleContext(0, Open_call_subContext);
    };
    Statement_subContext.prototype.close_call_sub = function () {
        return this.tryGetRuleContext(0, Close_call_subContext);
    };
    Statement_subContext.prototype.variable_decl_sub = function () {
        return this.tryGetRuleContext(0, Variable_decl_subContext);
    };
    Statement_subContext.prototype.super_call_statement = function () {
        return this.tryGetRuleContext(0, Super_call_statementContext);
    };
    Statement_subContext.prototype.create_call_sub = function () {
        return this.tryGetRuleContext(0, Create_call_subContext);
    };
    Statement_subContext.prototype.destroy_call_sub = function () {
        return this.tryGetRuleContext(0, Destroy_call_subContext);
    };
    Statement_subContext.prototype.continue_sub = function () {
        return this.tryGetRuleContext(0, Continue_subContext);
    };
    Statement_subContext.prototype.goto_stat = function () {
        return this.tryGetRuleContext(0, Goto_statContext);
    };
    Statement_subContext.prototype.assignment_sub = function () {
        return this.tryGetRuleContext(0, Assignment_subContext);
    };
    Object.defineProperty(Statement_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_statement_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Statement_subContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement_sub) {
            listener.enterStatement_sub(this);
        }
    };
    // @Override
    Statement_subContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement_sub) {
            listener.exitStatement_sub(this);
        }
    };
    // @Override
    Statement_subContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement_sub) {
            return visitor.visitStatement_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Statement_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Statement_subContext = Statement_subContext;
var Assignment_subContext = /** @class */ (function (_super) {
    __extends(Assignment_subContext, _super);
    function Assignment_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assignment_subContext.prototype.lvalue_sub = function () {
        return this.getRuleContext(0, Lvalue_subContext);
    };
    Assignment_subContext.prototype.EQ = function () { return this.tryGetToken(PowerBuilderParser.EQ, 0); };
    Assignment_subContext.prototype.PLUSEQ = function () { return this.tryGetToken(PowerBuilderParser.PLUSEQ, 0); };
    Assignment_subContext.prototype.MINUSEQ = function () { return this.tryGetToken(PowerBuilderParser.MINUSEQ, 0); };
    Assignment_subContext.prototype.MULTEQ = function () { return this.tryGetToken(PowerBuilderParser.MULTEQ, 0); };
    Assignment_subContext.prototype.DIVEQ = function () { return this.tryGetToken(PowerBuilderParser.DIVEQ, 0); };
    Assignment_subContext.prototype.NOT = function () { return this.tryGetToken(PowerBuilderParser.NOT, 0); };
    Assignment_subContext.prototype.LCURLY = function () { return this.tryGetToken(PowerBuilderParser.LCURLY, 0); };
    Assignment_subContext.prototype.boolean_expression = function () {
        return this.tryGetRuleContext(0, Boolean_expressionContext);
    };
    Assignment_subContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Assignment_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_assignment_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assignment_subContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment_sub) {
            listener.enterAssignment_sub(this);
        }
    };
    // @Override
    Assignment_subContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment_sub) {
            listener.exitAssignment_sub(this);
        }
    };
    // @Override
    Assignment_subContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment_sub) {
            return visitor.visitAssignment_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assignment_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assignment_subContext = Assignment_subContext;
var Assignment_statementContext = /** @class */ (function (_super) {
    __extends(Assignment_statementContext, _super);
    function Assignment_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assignment_statementContext.prototype.assignment_sub = function () {
        return this.getRuleContext(0, Assignment_subContext);
    };
    Assignment_statementContext.prototype.SEMI = function () { return this.tryGetToken(PowerBuilderParser.SEMI, 0); };
    Object.defineProperty(Assignment_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_assignment_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assignment_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment_statement) {
            listener.enterAssignment_statement(this);
        }
    };
    // @Override
    Assignment_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment_statement) {
            listener.exitAssignment_statement(this);
        }
    };
    // @Override
    Assignment_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment_statement) {
            return visitor.visitAssignment_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assignment_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assignment_statementContext = Assignment_statementContext;
var Lvalue_subContext = /** @class */ (function (_super) {
    __extends(Lvalue_subContext, _super);
    function Lvalue_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lvalue_subContext.prototype.atom_sub = function () {
        return this.tryGetRuleContext(0, Atom_subContext);
    };
    Lvalue_subContext.prototype.DOT = function () { return this.tryGetToken(PowerBuilderParser.DOT, 0); };
    Lvalue_subContext.prototype.identifier_name_ex = function () {
        return this.tryGetRuleContext(0, Identifier_name_exContext);
    };
    Lvalue_subContext.prototype.atom_sub_call1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_call1Context);
    };
    Lvalue_subContext.prototype.atom_sub_array1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_array1Context);
    };
    Lvalue_subContext.prototype.atom_sub_ref1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_ref1Context);
    };
    Lvalue_subContext.prototype.atom_sub_member1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_member1Context);
    };
    Object.defineProperty(Lvalue_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_lvalue_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lvalue_subContext.prototype.enterRule = function (listener) {
        if (listener.enterLvalue_sub) {
            listener.enterLvalue_sub(this);
        }
    };
    // @Override
    Lvalue_subContext.prototype.exitRule = function (listener) {
        if (listener.exitLvalue_sub) {
            listener.exitLvalue_sub(this);
        }
    };
    // @Override
    Lvalue_subContext.prototype.accept = function (visitor) {
        if (visitor.visitLvalue_sub) {
            return visitor.visitLvalue_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lvalue_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lvalue_subContext = Lvalue_subContext;
var Return_statementContext = /** @class */ (function (_super) {
    __extends(Return_statementContext, _super);
    function Return_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Return_statementContext.prototype.RETURN = function () { return this.getToken(PowerBuilderParser.RETURN, 0); };
    Return_statementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Return_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_return_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Return_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterReturn_statement) {
            listener.enterReturn_statement(this);
        }
    };
    // @Override
    Return_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitReturn_statement) {
            listener.exitReturn_statement(this);
        }
    };
    // @Override
    Return_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitReturn_statement) {
            return visitor.visitReturn_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Return_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Return_statementContext = Return_statementContext;
var Function_call_expression_subContext = /** @class */ (function (_super) {
    __extends(Function_call_expression_subContext, _super);
    function Function_call_expression_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_call_expression_subContext.prototype.atom_sub = function () {
        return this.tryGetRuleContext(0, Atom_subContext);
    };
    Function_call_expression_subContext.prototype.DOT = function () { return this.tryGetToken(PowerBuilderParser.DOT, 0); };
    Function_call_expression_subContext.prototype.identifier_name_ex = function () {
        return this.tryGetRuleContext(0, Identifier_name_exContext);
    };
    Function_call_expression_subContext.prototype.atom_sub_call1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_call1Context);
    };
    Object.defineProperty(Function_call_expression_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_function_call_expression_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_call_expression_subContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_call_expression_sub) {
            listener.enterFunction_call_expression_sub(this);
        }
    };
    // @Override
    Function_call_expression_subContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_call_expression_sub) {
            listener.exitFunction_call_expression_sub(this);
        }
    };
    // @Override
    Function_call_expression_subContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_call_expression_sub) {
            return visitor.visitFunction_call_expression_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_call_expression_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_call_expression_subContext = Function_call_expression_subContext;
var Function_virtual_call_expression_subContext = /** @class */ (function (_super) {
    __extends(Function_virtual_call_expression_subContext, _super);
    function Function_virtual_call_expression_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_virtual_call_expression_subContext.prototype.identifier_name = function () {
        return this.getRuleContext(0, Identifier_nameContext);
    };
    Function_virtual_call_expression_subContext.prototype.DOT = function () { return this.getToken(PowerBuilderParser.DOT, 0); };
    Function_virtual_call_expression_subContext.prototype.function_call_expression_sub = function () {
        return this.getRuleContext(0, Function_call_expression_subContext);
    };
    Function_virtual_call_expression_subContext.prototype.DYNAMIC = function () { return this.tryGetToken(PowerBuilderParser.DYNAMIC, 0); };
    Function_virtual_call_expression_subContext.prototype.EVENT = function () { return this.tryGetToken(PowerBuilderParser.EVENT, 0); };
    Object.defineProperty(Function_virtual_call_expression_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_function_virtual_call_expression_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_virtual_call_expression_subContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_virtual_call_expression_sub) {
            listener.enterFunction_virtual_call_expression_sub(this);
        }
    };
    // @Override
    Function_virtual_call_expression_subContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_virtual_call_expression_sub) {
            listener.exitFunction_virtual_call_expression_sub(this);
        }
    };
    // @Override
    Function_virtual_call_expression_subContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_virtual_call_expression_sub) {
            return visitor.visitFunction_virtual_call_expression_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_virtual_call_expression_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_virtual_call_expression_subContext = Function_virtual_call_expression_subContext;
var Open_call_subContext = /** @class */ (function (_super) {
    __extends(Open_call_subContext, _super);
    function Open_call_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Open_call_subContext.prototype.OPEN = function () { return this.getToken(PowerBuilderParser.OPEN, 0); };
    Open_call_subContext.prototype.LPAREN = function () { return this.getToken(PowerBuilderParser.LPAREN, 0); };
    Open_call_subContext.prototype.expression_list = function () {
        return this.getRuleContext(0, Expression_listContext);
    };
    Open_call_subContext.prototype.RPAREN = function () { return this.getToken(PowerBuilderParser.RPAREN, 0); };
    Object.defineProperty(Open_call_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_open_call_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Open_call_subContext.prototype.enterRule = function (listener) {
        if (listener.enterOpen_call_sub) {
            listener.enterOpen_call_sub(this);
        }
    };
    // @Override
    Open_call_subContext.prototype.exitRule = function (listener) {
        if (listener.exitOpen_call_sub) {
            listener.exitOpen_call_sub(this);
        }
    };
    // @Override
    Open_call_subContext.prototype.accept = function (visitor) {
        if (visitor.visitOpen_call_sub) {
            return visitor.visitOpen_call_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Open_call_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Open_call_subContext = Open_call_subContext;
var Close_call_subContext = /** @class */ (function (_super) {
    __extends(Close_call_subContext, _super);
    function Close_call_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Close_call_subContext.prototype.CLOSE = function () { return this.getToken(PowerBuilderParser.CLOSE, 0); };
    Close_call_subContext.prototype.LPAREN = function () { return this.tryGetToken(PowerBuilderParser.LPAREN, 0); };
    Close_call_subContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Close_call_subContext.prototype.RPAREN = function () { return this.tryGetToken(PowerBuilderParser.RPAREN, 0); };
    Close_call_subContext.prototype.HALT = function () { return this.tryGetToken(PowerBuilderParser.HALT, 0); };
    Object.defineProperty(Close_call_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_close_call_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Close_call_subContext.prototype.enterRule = function (listener) {
        if (listener.enterClose_call_sub) {
            listener.enterClose_call_sub(this);
        }
    };
    // @Override
    Close_call_subContext.prototype.exitRule = function (listener) {
        if (listener.exitClose_call_sub) {
            listener.exitClose_call_sub(this);
        }
    };
    // @Override
    Close_call_subContext.prototype.accept = function (visitor) {
        if (visitor.visitClose_call_sub) {
            return visitor.visitClose_call_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Close_call_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Close_call_subContext = Close_call_subContext;
var Function_call_statementContext = /** @class */ (function (_super) {
    __extends(Function_call_statementContext, _super);
    function Function_call_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_call_statementContext.prototype.function_call_expression_sub = function () {
        return this.tryGetRuleContext(0, Function_call_expression_subContext);
    };
    Function_call_statementContext.prototype.function_virtual_call_expression_sub = function () {
        return this.tryGetRuleContext(0, Function_virtual_call_expression_subContext);
    };
    Function_call_statementContext.prototype.open_call_sub = function () {
        return this.tryGetRuleContext(0, Open_call_subContext);
    };
    Function_call_statementContext.prototype.close_call_sub = function () {
        return this.tryGetRuleContext(0, Close_call_subContext);
    };
    Object.defineProperty(Function_call_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_function_call_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_call_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_call_statement) {
            listener.enterFunction_call_statement(this);
        }
    };
    // @Override
    Function_call_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_call_statement) {
            listener.exitFunction_call_statement(this);
        }
    };
    // @Override
    Function_call_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_call_statement) {
            return visitor.visitFunction_call_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_call_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_call_statementContext = Function_call_statementContext;
var Super_call_statementContext = /** @class */ (function (_super) {
    __extends(Super_call_statementContext, _super);
    function Super_call_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Super_call_statementContext.prototype.CALL = function () { return this.getToken(PowerBuilderParser.CALL, 0); };
    Super_call_statementContext.prototype.atom_sub_call1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_call1Context);
    };
    Super_call_statementContext.prototype.atom_sub_member1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_member1Context);
    };
    Super_call_statementContext.prototype.identifier_name = function () {
        return this.tryGetRuleContext(0, Identifier_nameContext);
    };
    Super_call_statementContext.prototype.TICK = function () { return this.tryGetToken(PowerBuilderParser.TICK, 0); };
    Object.defineProperty(Super_call_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_super_call_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Super_call_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterSuper_call_statement) {
            listener.enterSuper_call_statement(this);
        }
    };
    // @Override
    Super_call_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitSuper_call_statement) {
            listener.exitSuper_call_statement(this);
        }
    };
    // @Override
    Super_call_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitSuper_call_statement) {
            return visitor.visitSuper_call_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Super_call_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Super_call_statementContext = Super_call_statementContext;
var Event_call_statement_subContext = /** @class */ (function (_super) {
    __extends(Event_call_statement_subContext, _super);
    function Event_call_statement_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Event_call_statement_subContext.prototype.EVENT = function () { return this.getToken(PowerBuilderParser.EVENT, 0); };
    Event_call_statement_subContext.prototype.atom_sub_call1 = function () {
        return this.getRuleContext(0, Atom_sub_call1Context);
    };
    Event_call_statement_subContext.prototype.identifier_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_nameContext);
        }
        else {
            return this.getRuleContext(i, Identifier_nameContext);
        }
    };
    Event_call_statement_subContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.DOT);
        }
        else {
            return this.getToken(PowerBuilderParser.DOT, i);
        }
    };
    Event_call_statement_subContext.prototype.SUPER = function () { return this.tryGetToken(PowerBuilderParser.SUPER, 0); };
    Event_call_statement_subContext.prototype.COLONCOLON = function () { return this.tryGetToken(PowerBuilderParser.COLONCOLON, 0); };
    Object.defineProperty(Event_call_statement_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_event_call_statement_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Event_call_statement_subContext.prototype.enterRule = function (listener) {
        if (listener.enterEvent_call_statement_sub) {
            listener.enterEvent_call_statement_sub(this);
        }
    };
    // @Override
    Event_call_statement_subContext.prototype.exitRule = function (listener) {
        if (listener.exitEvent_call_statement_sub) {
            listener.exitEvent_call_statement_sub(this);
        }
    };
    // @Override
    Event_call_statement_subContext.prototype.accept = function (visitor) {
        if (visitor.visitEvent_call_statement_sub) {
            return visitor.visitEvent_call_statement_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Event_call_statement_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Event_call_statement_subContext = Event_call_statement_subContext;
var Event_call_statementContext = /** @class */ (function (_super) {
    __extends(Event_call_statementContext, _super);
    function Event_call_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Event_call_statementContext.prototype.event_call_statement_sub = function () {
        return this.getRuleContext(0, Event_call_statement_subContext);
    };
    Object.defineProperty(Event_call_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_event_call_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Event_call_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterEvent_call_statement) {
            listener.enterEvent_call_statement(this);
        }
    };
    // @Override
    Event_call_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitEvent_call_statement) {
            listener.exitEvent_call_statement(this);
        }
    };
    // @Override
    Event_call_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitEvent_call_statement) {
            return visitor.visitEvent_call_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Event_call_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Event_call_statementContext = Event_call_statementContext;
var Create_call_subContext = /** @class */ (function (_super) {
    __extends(Create_call_subContext, _super);
    function Create_call_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_call_subContext.prototype.CREATE = function () { return this.getToken(PowerBuilderParser.CREATE, 0); };
    Create_call_subContext.prototype.data_type_name = function () {
        return this.getRuleContext(0, Data_type_nameContext);
    };
    Create_call_subContext.prototype.USING = function () { return this.tryGetToken(PowerBuilderParser.USING, 0); };
    Create_call_subContext.prototype.identifier_name = function () {
        return this.tryGetRuleContext(0, Identifier_nameContext);
    };
    Create_call_subContext.prototype.DOT = function () { return this.tryGetToken(PowerBuilderParser.DOT, 0); };
    Create_call_subContext.prototype.LPAREN = function () { return this.tryGetToken(PowerBuilderParser.LPAREN, 0); };
    Create_call_subContext.prototype.RPAREN = function () { return this.tryGetToken(PowerBuilderParser.RPAREN, 0); };
    Create_call_subContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(Create_call_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_create_call_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_call_subContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_call_sub) {
            listener.enterCreate_call_sub(this);
        }
    };
    // @Override
    Create_call_subContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_call_sub) {
            listener.exitCreate_call_sub(this);
        }
    };
    // @Override
    Create_call_subContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_call_sub) {
            return visitor.visitCreate_call_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_call_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_call_subContext = Create_call_subContext;
var Create_call_statementContext = /** @class */ (function (_super) {
    __extends(Create_call_statementContext, _super);
    function Create_call_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_call_statementContext.prototype.create_call_sub = function () {
        return this.getRuleContext(0, Create_call_subContext);
    };
    Object.defineProperty(Create_call_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_create_call_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_call_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_call_statement) {
            listener.enterCreate_call_statement(this);
        }
    };
    // @Override
    Create_call_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_call_statement) {
            listener.exitCreate_call_statement(this);
        }
    };
    // @Override
    Create_call_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_call_statement) {
            return visitor.visitCreate_call_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_call_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_call_statementContext = Create_call_statementContext;
var Destroy_call_subContext = /** @class */ (function (_super) {
    __extends(Destroy_call_subContext, _super);
    function Destroy_call_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Destroy_call_subContext.prototype.DESTROY = function () { return this.getToken(PowerBuilderParser.DESTROY, 0); };
    Destroy_call_subContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Destroy_call_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_destroy_call_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Destroy_call_subContext.prototype.enterRule = function (listener) {
        if (listener.enterDestroy_call_sub) {
            listener.enterDestroy_call_sub(this);
        }
    };
    // @Override
    Destroy_call_subContext.prototype.exitRule = function (listener) {
        if (listener.exitDestroy_call_sub) {
            listener.exitDestroy_call_sub(this);
        }
    };
    // @Override
    Destroy_call_subContext.prototype.accept = function (visitor) {
        if (visitor.visitDestroy_call_sub) {
            return visitor.visitDestroy_call_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Destroy_call_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Destroy_call_subContext = Destroy_call_subContext;
var Destroy_call_statementContext = /** @class */ (function (_super) {
    __extends(Destroy_call_statementContext, _super);
    function Destroy_call_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Destroy_call_statementContext.prototype.destroy_call_sub = function () {
        return this.getRuleContext(0, Destroy_call_subContext);
    };
    Object.defineProperty(Destroy_call_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_destroy_call_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Destroy_call_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterDestroy_call_statement) {
            listener.enterDestroy_call_statement(this);
        }
    };
    // @Override
    Destroy_call_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitDestroy_call_statement) {
            listener.exitDestroy_call_statement(this);
        }
    };
    // @Override
    Destroy_call_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitDestroy_call_statement) {
            return visitor.visitDestroy_call_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Destroy_call_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Destroy_call_statementContext = Destroy_call_statementContext;
var For_loop_statementContext = /** @class */ (function (_super) {
    __extends(For_loop_statementContext, _super);
    function For_loop_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_loop_statementContext.prototype.FOR = function () { return this.getToken(PowerBuilderParser.FOR, 0); };
    For_loop_statementContext.prototype.lvalue_sub = function () {
        return this.getRuleContext(0, Lvalue_subContext);
    };
    For_loop_statementContext.prototype.EQ = function () { return this.getToken(PowerBuilderParser.EQ, 0); };
    For_loop_statementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    For_loop_statementContext.prototype.TO = function () { return this.getToken(PowerBuilderParser.TO, 0); };
    For_loop_statementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    For_loop_statementContext.prototype.NEXT = function () { return this.getToken(PowerBuilderParser.NEXT, 0); };
    For_loop_statementContext.prototype.STEP = function () { return this.tryGetToken(PowerBuilderParser.STEP, 0); };
    Object.defineProperty(For_loop_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_for_loop_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_loop_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_loop_statement) {
            listener.enterFor_loop_statement(this);
        }
    };
    // @Override
    For_loop_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_loop_statement) {
            listener.exitFor_loop_statement(this);
        }
    };
    // @Override
    For_loop_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_loop_statement) {
            return visitor.visitFor_loop_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_loop_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_loop_statementContext = For_loop_statementContext;
var Do_while_loop_statementContext = /** @class */ (function (_super) {
    __extends(Do_while_loop_statementContext, _super);
    function Do_while_loop_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Do_while_loop_statementContext.prototype.DO = function () { return this.getToken(PowerBuilderParser.DO, 0); };
    Do_while_loop_statementContext.prototype.boolean_expression = function () {
        return this.getRuleContext(0, Boolean_expressionContext);
    };
    Do_while_loop_statementContext.prototype.LOOP = function () { return this.getToken(PowerBuilderParser.LOOP, 0); };
    Do_while_loop_statementContext.prototype.WHILE = function () { return this.tryGetToken(PowerBuilderParser.WHILE, 0); };
    Do_while_loop_statementContext.prototype.UNTIL = function () { return this.tryGetToken(PowerBuilderParser.UNTIL, 0); };
    Do_while_loop_statementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Do_while_loop_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_do_while_loop_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Do_while_loop_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterDo_while_loop_statement) {
            listener.enterDo_while_loop_statement(this);
        }
    };
    // @Override
    Do_while_loop_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitDo_while_loop_statement) {
            listener.exitDo_while_loop_statement(this);
        }
    };
    // @Override
    Do_while_loop_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitDo_while_loop_statement) {
            return visitor.visitDo_while_loop_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Do_while_loop_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Do_while_loop_statementContext = Do_while_loop_statementContext;
var Do_loop_while_statementContext = /** @class */ (function (_super) {
    __extends(Do_loop_while_statementContext, _super);
    function Do_loop_while_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Do_loop_while_statementContext.prototype.DO = function () { return this.getToken(PowerBuilderParser.DO, 0); };
    Do_loop_while_statementContext.prototype.LOOP = function () { return this.getToken(PowerBuilderParser.LOOP, 0); };
    Do_loop_while_statementContext.prototype.boolean_expression = function () {
        return this.getRuleContext(0, Boolean_expressionContext);
    };
    Do_loop_while_statementContext.prototype.WHILE = function () { return this.tryGetToken(PowerBuilderParser.WHILE, 0); };
    Do_loop_while_statementContext.prototype.UNTIL = function () { return this.tryGetToken(PowerBuilderParser.UNTIL, 0); };
    Do_loop_while_statementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Do_loop_while_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_do_loop_while_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Do_loop_while_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterDo_loop_while_statement) {
            listener.enterDo_loop_while_statement(this);
        }
    };
    // @Override
    Do_loop_while_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitDo_loop_while_statement) {
            listener.exitDo_loop_while_statement(this);
        }
    };
    // @Override
    Do_loop_while_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitDo_loop_while_statement) {
            return visitor.visitDo_loop_while_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Do_loop_while_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Do_loop_while_statementContext = Do_loop_while_statementContext;
var If_statementContext = /** @class */ (function (_super) {
    __extends(If_statementContext, _super);
    function If_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_statementContext.prototype.IF = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.IF);
        }
        else {
            return this.getToken(PowerBuilderParser.IF, i);
        }
    };
    If_statementContext.prototype.boolean_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Boolean_expressionContext);
        }
        else {
            return this.getRuleContext(i, Boolean_expressionContext);
        }
    };
    If_statementContext.prototype.THEN = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.THEN);
        }
        else {
            return this.getToken(PowerBuilderParser.THEN, i);
        }
    };
    If_statementContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    If_statementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    If_statementContext.prototype.ELSEIF = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.ELSEIF);
        }
        else {
            return this.getToken(PowerBuilderParser.ELSEIF, i);
        }
    };
    If_statementContext.prototype.ELSE = function () { return this.tryGetToken(PowerBuilderParser.ELSE, 0); };
    If_statementContext.prototype.SEMI = function () { return this.tryGetToken(PowerBuilderParser.SEMI, 0); };
    Object.defineProperty(If_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_if_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_statement) {
            listener.enterIf_statement(this);
        }
    };
    // @Override
    If_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_statement) {
            listener.exitIf_statement(this);
        }
    };
    // @Override
    If_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_statement) {
            return visitor.visitIf_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_statementContext = If_statementContext;
var If_simple_statementContext = /** @class */ (function (_super) {
    __extends(If_simple_statementContext, _super);
    function If_simple_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_simple_statementContext.prototype.IF = function () { return this.getToken(PowerBuilderParser.IF, 0); };
    If_simple_statementContext.prototype.boolean_expression = function () {
        return this.getRuleContext(0, Boolean_expressionContext);
    };
    If_simple_statementContext.prototype.THEN = function () { return this.getToken(PowerBuilderParser.THEN, 0); };
    If_simple_statementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(If_simple_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_if_simple_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_simple_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_simple_statement) {
            listener.enterIf_simple_statement(this);
        }
    };
    // @Override
    If_simple_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_simple_statement) {
            listener.exitIf_simple_statement(this);
        }
    };
    // @Override
    If_simple_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_simple_statement) {
            return visitor.visitIf_simple_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_simple_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_simple_statementContext = If_simple_statementContext;
var Continue_statementContext = /** @class */ (function (_super) {
    __extends(Continue_statementContext, _super);
    function Continue_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Continue_statementContext.prototype.CONTINUE = function () { return this.getToken(PowerBuilderParser.CONTINUE, 0); };
    Object.defineProperty(Continue_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_continue_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Continue_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterContinue_statement) {
            listener.enterContinue_statement(this);
        }
    };
    // @Override
    Continue_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitContinue_statement) {
            listener.exitContinue_statement(this);
        }
    };
    // @Override
    Continue_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitContinue_statement) {
            return visitor.visitContinue_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Continue_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Continue_statementContext = Continue_statementContext;
var Continue_subContext = /** @class */ (function (_super) {
    __extends(Continue_subContext, _super);
    function Continue_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Continue_subContext.prototype.CONTINUE = function () { return this.getToken(PowerBuilderParser.CONTINUE, 0); };
    Object.defineProperty(Continue_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_continue_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Continue_subContext.prototype.enterRule = function (listener) {
        if (listener.enterContinue_sub) {
            listener.enterContinue_sub(this);
        }
    };
    // @Override
    Continue_subContext.prototype.exitRule = function (listener) {
        if (listener.exitContinue_sub) {
            listener.exitContinue_sub(this);
        }
    };
    // @Override
    Continue_subContext.prototype.accept = function (visitor) {
        if (visitor.visitContinue_sub) {
            return visitor.visitContinue_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Continue_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Continue_subContext = Continue_subContext;
var Post_eventContext = /** @class */ (function (_super) {
    __extends(Post_eventContext, _super);
    function Post_eventContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Post_eventContext.prototype.identifier_name_ex = function () {
        return this.getRuleContext(0, Identifier_name_exContext);
    };
    Post_eventContext.prototype.LPAREN = function () { return this.getToken(PowerBuilderParser.LPAREN, 0); };
    Post_eventContext.prototype.RPAREN = function () { return this.getToken(PowerBuilderParser.RPAREN, 0); };
    Post_eventContext.prototype.POST = function () { return this.tryGetToken(PowerBuilderParser.POST, 0); };
    Post_eventContext.prototype.TRIGGER = function () { return this.tryGetToken(PowerBuilderParser.TRIGGER, 0); };
    Post_eventContext.prototype.atom_sub_member1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_member1Context);
    };
    Post_eventContext.prototype.DOT = function () { return this.tryGetToken(PowerBuilderParser.DOT, 0); };
    Post_eventContext.prototype.EVENT = function () { return this.tryGetToken(PowerBuilderParser.EVENT, 0); };
    Post_eventContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(Post_eventContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_post_event; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Post_eventContext.prototype.enterRule = function (listener) {
        if (listener.enterPost_event) {
            listener.enterPost_event(this);
        }
    };
    // @Override
    Post_eventContext.prototype.exitRule = function (listener) {
        if (listener.exitPost_event) {
            listener.exitPost_event(this);
        }
    };
    // @Override
    Post_eventContext.prototype.accept = function (visitor) {
        if (visitor.visitPost_event) {
            return visitor.visitPost_event(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Post_eventContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Post_eventContext = Post_eventContext;
var Exit_statementContext = /** @class */ (function (_super) {
    __extends(Exit_statementContext, _super);
    function Exit_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Exit_statementContext.prototype.EXIT = function () { return this.getToken(PowerBuilderParser.EXIT, 0); };
    Object.defineProperty(Exit_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_exit_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Exit_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterExit_statement) {
            listener.enterExit_statement(this);
        }
    };
    // @Override
    Exit_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitExit_statement) {
            listener.exitExit_statement(this);
        }
    };
    // @Override
    Exit_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitExit_statement) {
            return visitor.visitExit_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Exit_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Exit_statementContext = Exit_statementContext;
var Choose_statementContext = /** @class */ (function (_super) {
    __extends(Choose_statementContext, _super);
    function Choose_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Choose_statementContext.prototype.CHOOSE = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.CHOOSE);
        }
        else {
            return this.getToken(PowerBuilderParser.CHOOSE, i);
        }
    };
    Choose_statementContext.prototype.CASE = function () { return this.getToken(PowerBuilderParser.CASE, 0); };
    Choose_statementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Choose_statementContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Choose_statementContext.prototype.choose_case_range_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Choose_case_range_subContext);
        }
        else {
            return this.getRuleContext(i, Choose_case_range_subContext);
        }
    };
    Choose_statementContext.prototype.choose_case_cond_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Choose_case_cond_subContext);
        }
        else {
            return this.getRuleContext(i, Choose_case_cond_subContext);
        }
    };
    Choose_statementContext.prototype.choose_case_else_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Choose_case_else_subContext);
        }
        else {
            return this.getRuleContext(i, Choose_case_else_subContext);
        }
    };
    Choose_statementContext.prototype.choose_case_value_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Choose_case_value_subContext);
        }
        else {
            return this.getRuleContext(i, Choose_case_value_subContext);
        }
    };
    Object.defineProperty(Choose_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_choose_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Choose_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterChoose_statement) {
            listener.enterChoose_statement(this);
        }
    };
    // @Override
    Choose_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitChoose_statement) {
            listener.exitChoose_statement(this);
        }
    };
    // @Override
    Choose_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitChoose_statement) {
            return visitor.visitChoose_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Choose_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Choose_statementContext = Choose_statementContext;
var Choose_case_value_subContext = /** @class */ (function (_super) {
    __extends(Choose_case_value_subContext, _super);
    function Choose_case_value_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Choose_case_value_subContext.prototype.CASE = function () { return this.getToken(PowerBuilderParser.CASE, 0); };
    Choose_case_value_subContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Choose_case_value_subContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.COMMA);
        }
        else {
            return this.getToken(PowerBuilderParser.COMMA, i);
        }
    };
    Choose_case_value_subContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Choose_case_value_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_choose_case_value_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Choose_case_value_subContext.prototype.enterRule = function (listener) {
        if (listener.enterChoose_case_value_sub) {
            listener.enterChoose_case_value_sub(this);
        }
    };
    // @Override
    Choose_case_value_subContext.prototype.exitRule = function (listener) {
        if (listener.exitChoose_case_value_sub) {
            listener.exitChoose_case_value_sub(this);
        }
    };
    // @Override
    Choose_case_value_subContext.prototype.accept = function (visitor) {
        if (visitor.visitChoose_case_value_sub) {
            return visitor.visitChoose_case_value_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Choose_case_value_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Choose_case_value_subContext = Choose_case_value_subContext;
var Choose_case_cond_subContext = /** @class */ (function (_super) {
    __extends(Choose_case_cond_subContext, _super);
    function Choose_case_cond_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Choose_case_cond_subContext.prototype.CASE = function () { return this.getToken(PowerBuilderParser.CASE, 0); };
    Choose_case_cond_subContext.prototype.IS = function () { return this.getToken(PowerBuilderParser.IS, 0); };
    Choose_case_cond_subContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Choose_case_cond_subContext.prototype.EQ = function () { return this.tryGetToken(PowerBuilderParser.EQ, 0); };
    Choose_case_cond_subContext.prototype.GT = function () { return this.tryGetToken(PowerBuilderParser.GT, 0); };
    Choose_case_cond_subContext.prototype.LT = function () { return this.tryGetToken(PowerBuilderParser.LT, 0); };
    Choose_case_cond_subContext.prototype.GTLT = function () { return this.tryGetToken(PowerBuilderParser.GTLT, 0); };
    Choose_case_cond_subContext.prototype.GTE = function () { return this.tryGetToken(PowerBuilderParser.GTE, 0); };
    Choose_case_cond_subContext.prototype.LTE = function () { return this.tryGetToken(PowerBuilderParser.LTE, 0); };
    Choose_case_cond_subContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Choose_case_cond_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_choose_case_cond_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Choose_case_cond_subContext.prototype.enterRule = function (listener) {
        if (listener.enterChoose_case_cond_sub) {
            listener.enterChoose_case_cond_sub(this);
        }
    };
    // @Override
    Choose_case_cond_subContext.prototype.exitRule = function (listener) {
        if (listener.exitChoose_case_cond_sub) {
            listener.exitChoose_case_cond_sub(this);
        }
    };
    // @Override
    Choose_case_cond_subContext.prototype.accept = function (visitor) {
        if (visitor.visitChoose_case_cond_sub) {
            return visitor.visitChoose_case_cond_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Choose_case_cond_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Choose_case_cond_subContext = Choose_case_cond_subContext;
var Choose_case_range_subContext = /** @class */ (function (_super) {
    __extends(Choose_case_range_subContext, _super);
    function Choose_case_range_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Choose_case_range_subContext.prototype.CASE = function () { return this.getToken(PowerBuilderParser.CASE, 0); };
    Choose_case_range_subContext.prototype.atom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    };
    Choose_case_range_subContext.prototype.TO = function () { return this.getToken(PowerBuilderParser.TO, 0); };
    Choose_case_range_subContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Choose_case_range_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_choose_case_range_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Choose_case_range_subContext.prototype.enterRule = function (listener) {
        if (listener.enterChoose_case_range_sub) {
            listener.enterChoose_case_range_sub(this);
        }
    };
    // @Override
    Choose_case_range_subContext.prototype.exitRule = function (listener) {
        if (listener.exitChoose_case_range_sub) {
            listener.exitChoose_case_range_sub(this);
        }
    };
    // @Override
    Choose_case_range_subContext.prototype.accept = function (visitor) {
        if (visitor.visitChoose_case_range_sub) {
            return visitor.visitChoose_case_range_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Choose_case_range_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Choose_case_range_subContext = Choose_case_range_subContext;
var Choose_case_else_subContext = /** @class */ (function (_super) {
    __extends(Choose_case_else_subContext, _super);
    function Choose_case_else_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Choose_case_else_subContext.prototype.CASE = function () { return this.getToken(PowerBuilderParser.CASE, 0); };
    Choose_case_else_subContext.prototype.ELSE = function () { return this.getToken(PowerBuilderParser.ELSE, 0); };
    Choose_case_else_subContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Choose_case_else_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_choose_case_else_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Choose_case_else_subContext.prototype.enterRule = function (listener) {
        if (listener.enterChoose_case_else_sub) {
            listener.enterChoose_case_else_sub(this);
        }
    };
    // @Override
    Choose_case_else_subContext.prototype.exitRule = function (listener) {
        if (listener.exitChoose_case_else_sub) {
            listener.exitChoose_case_else_sub(this);
        }
    };
    // @Override
    Choose_case_else_subContext.prototype.accept = function (visitor) {
        if (visitor.visitChoose_case_else_sub) {
            return visitor.visitChoose_case_else_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Choose_case_else_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Choose_case_else_subContext = Choose_case_else_subContext;
var Goto_statContext = /** @class */ (function (_super) {
    __extends(Goto_statContext, _super);
    function Goto_statContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Goto_statContext.prototype.GOTO = function () { return this.getToken(PowerBuilderParser.GOTO, 0); };
    Goto_statContext.prototype.identifier_name = function () {
        return this.getRuleContext(0, Identifier_nameContext);
    };
    Object.defineProperty(Goto_statContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_goto_stat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Goto_statContext.prototype.enterRule = function (listener) {
        if (listener.enterGoto_stat) {
            listener.enterGoto_stat(this);
        }
    };
    // @Override
    Goto_statContext.prototype.exitRule = function (listener) {
        if (listener.exitGoto_stat) {
            listener.exitGoto_stat(this);
        }
    };
    // @Override
    Goto_statContext.prototype.accept = function (visitor) {
        if (visitor.visitGoto_stat) {
            return visitor.visitGoto_stat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Goto_statContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Goto_statContext = Goto_statContext;
var Label_statContext = /** @class */ (function (_super) {
    __extends(Label_statContext, _super);
    function Label_statContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Label_statContext.prototype.identifier_name = function () {
        return this.getRuleContext(0, Identifier_nameContext);
    };
    Label_statContext.prototype.COLON = function () { return this.getToken(PowerBuilderParser.COLON, 0); };
    Object.defineProperty(Label_statContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_label_stat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Label_statContext.prototype.enterRule = function (listener) {
        if (listener.enterLabel_stat) {
            listener.enterLabel_stat(this);
        }
    };
    // @Override
    Label_statContext.prototype.exitRule = function (listener) {
        if (listener.exitLabel_stat) {
            listener.exitLabel_stat(this);
        }
    };
    // @Override
    Label_statContext.prototype.accept = function (visitor) {
        if (visitor.visitLabel_stat) {
            return visitor.visitLabel_stat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Label_statContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Label_statContext = Label_statContext;
var Try_catch_blockContext = /** @class */ (function (_super) {
    __extends(Try_catch_blockContext, _super);
    function Try_catch_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Try_catch_blockContext.prototype.TRY = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.TRY);
        }
        else {
            return this.getToken(PowerBuilderParser.TRY, i);
        }
    };
    Try_catch_blockContext.prototype.END = function () { return this.getToken(PowerBuilderParser.END, 0); };
    Try_catch_blockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Try_catch_blockContext.prototype.CATCH = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.CATCH);
        }
        else {
            return this.getToken(PowerBuilderParser.CATCH, i);
        }
    };
    Try_catch_blockContext.prototype.LPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.LPAREN);
        }
        else {
            return this.getToken(PowerBuilderParser.LPAREN, i);
        }
    };
    Try_catch_blockContext.prototype.variable_decl_sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Variable_decl_subContext);
        }
        else {
            return this.getRuleContext(i, Variable_decl_subContext);
        }
    };
    Try_catch_blockContext.prototype.RPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.RPAREN);
        }
        else {
            return this.getToken(PowerBuilderParser.RPAREN, i);
        }
    };
    Try_catch_blockContext.prototype.FINALLY = function () { return this.tryGetToken(PowerBuilderParser.FINALLY, 0); };
    Object.defineProperty(Try_catch_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_try_catch_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Try_catch_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterTry_catch_block) {
            listener.enterTry_catch_block(this);
        }
    };
    // @Override
    Try_catch_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitTry_catch_block) {
            listener.exitTry_catch_block(this);
        }
    };
    // @Override
    Try_catch_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitTry_catch_block) {
            return visitor.visitTry_catch_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Try_catch_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Try_catch_blockContext = Try_catch_blockContext;
var Throw_statContext = /** @class */ (function (_super) {
    __extends(Throw_statContext, _super);
    function Throw_statContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Throw_statContext.prototype.THROW = function () { return this.getToken(PowerBuilderParser.THROW, 0); };
    Throw_statContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Throw_statContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_throw_stat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Throw_statContext.prototype.enterRule = function (listener) {
        if (listener.enterThrow_stat) {
            listener.enterThrow_stat(this);
        }
    };
    // @Override
    Throw_statContext.prototype.exitRule = function (listener) {
        if (listener.exitThrow_stat) {
            listener.exitThrow_stat(this);
        }
    };
    // @Override
    Throw_statContext.prototype.accept = function (visitor) {
        if (visitor.visitThrow_stat) {
            return visitor.visitThrow_stat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Throw_statContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Throw_statContext = Throw_statContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.identifier_name = function () {
        return this.tryGetRuleContext(0, Identifier_nameContext);
    };
    IdentifierContext.prototype.SUPER = function () { return this.tryGetToken(PowerBuilderParser.SUPER, 0); };
    IdentifierContext.prototype.COLONCOLON = function () { return this.tryGetToken(PowerBuilderParser.COLONCOLON, 0); };
    IdentifierContext.prototype.CREATE = function () { return this.tryGetToken(PowerBuilderParser.CREATE, 0); };
    IdentifierContext.prototype.DESTROY = function () { return this.tryGetToken(PowerBuilderParser.DESTROY, 0); };
    IdentifierContext.prototype.identifier_name_ex = function () {
        return this.tryGetRuleContext(0, Identifier_name_exContext);
    };
    IdentifierContext.prototype.DOT = function () { return this.tryGetToken(PowerBuilderParser.DOT, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_identifier; },
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
var Identifier_name_exContext = /** @class */ (function (_super) {
    __extends(Identifier_name_exContext, _super);
    function Identifier_name_exContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Identifier_name_exContext.prototype.identifier_name = function () {
        return this.tryGetRuleContext(0, Identifier_nameContext);
    };
    Identifier_name_exContext.prototype.SELECT = function () { return this.tryGetToken(PowerBuilderParser.SELECT, 0); };
    Identifier_name_exContext.prototype.TYPE = function () { return this.tryGetToken(PowerBuilderParser.TYPE, 0); };
    Identifier_name_exContext.prototype.UPDATE = function () { return this.tryGetToken(PowerBuilderParser.UPDATE, 0); };
    Identifier_name_exContext.prototype.DELETE = function () { return this.tryGetToken(PowerBuilderParser.DELETE, 0); };
    Identifier_name_exContext.prototype.OPEN = function () { return this.tryGetToken(PowerBuilderParser.OPEN, 0); };
    Identifier_name_exContext.prototype.CLOSE = function () { return this.tryGetToken(PowerBuilderParser.CLOSE, 0); };
    Identifier_name_exContext.prototype.GOTO = function () { return this.tryGetToken(PowerBuilderParser.GOTO, 0); };
    Identifier_name_exContext.prototype.INSERT = function () { return this.tryGetToken(PowerBuilderParser.INSERT, 0); };
    Identifier_name_exContext.prototype.DESCRIBE = function () { return this.tryGetToken(PowerBuilderParser.DESCRIBE, 0); };
    Identifier_name_exContext.prototype.TIME = function () { return this.tryGetToken(PowerBuilderParser.TIME, 0); };
    Identifier_name_exContext.prototype.READONLY = function () { return this.tryGetToken(PowerBuilderParser.READONLY, 0); };
    Object.defineProperty(Identifier_name_exContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_identifier_name_ex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Identifier_name_exContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier_name_ex) {
            listener.enterIdentifier_name_ex(this);
        }
    };
    // @Override
    Identifier_name_exContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier_name_ex) {
            listener.exitIdentifier_name_ex(this);
        }
    };
    // @Override
    Identifier_name_exContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier_name_ex) {
            return visitor.visitIdentifier_name_ex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Identifier_name_exContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Identifier_name_exContext = Identifier_name_exContext;
var Identifier_nameContext = /** @class */ (function (_super) {
    __extends(Identifier_nameContext, _super);
    function Identifier_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Identifier_nameContext.prototype.ID = function () { return this.getToken(PowerBuilderParser.ID, 0); };
    Object.defineProperty(Identifier_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_identifier_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Identifier_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier_name) {
            listener.enterIdentifier_name(this);
        }
    };
    // @Override
    Identifier_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier_name) {
            listener.exitIdentifier_name(this);
        }
    };
    // @Override
    Identifier_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier_name) {
            return visitor.visitIdentifier_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Identifier_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Identifier_nameContext = Identifier_nameContext;
var Atom_subContext = /** @class */ (function (_super) {
    __extends(Atom_subContext, _super);
    function Atom_subContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Atom_subContext.prototype.array_access_atom = function () {
        return this.tryGetRuleContext(0, Array_access_atomContext);
    };
    Atom_subContext.prototype.identifier_name = function () {
        return this.tryGetRuleContext(0, Identifier_nameContext);
    };
    Atom_subContext.prototype.LPAREN = function () { return this.tryGetToken(PowerBuilderParser.LPAREN, 0); };
    Atom_subContext.prototype.RPAREN = function () { return this.tryGetToken(PowerBuilderParser.RPAREN, 0); };
    Atom_subContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(Atom_subContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_atom_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Atom_subContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom_sub) {
            listener.enterAtom_sub(this);
        }
    };
    // @Override
    Atom_subContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom_sub) {
            listener.exitAtom_sub(this);
        }
    };
    // @Override
    Atom_subContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom_sub) {
            return visitor.visitAtom_sub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Atom_subContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Atom_subContext = Atom_subContext;
var Atom_sub_call1Context = /** @class */ (function (_super) {
    __extends(Atom_sub_call1Context, _super);
    function Atom_sub_call1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Atom_sub_call1Context.prototype.LPAREN = function () { return this.getToken(PowerBuilderParser.LPAREN, 0); };
    Atom_sub_call1Context.prototype.RPAREN = function () { return this.getToken(PowerBuilderParser.RPAREN, 0); };
    Atom_sub_call1Context.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Atom_sub_call1Context.prototype.DESCRIBE = function () { return this.tryGetToken(PowerBuilderParser.DESCRIBE, 0); };
    Atom_sub_call1Context.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(Atom_sub_call1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_atom_sub_call1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Atom_sub_call1Context.prototype.enterRule = function (listener) {
        if (listener.enterAtom_sub_call1) {
            listener.enterAtom_sub_call1(this);
        }
    };
    // @Override
    Atom_sub_call1Context.prototype.exitRule = function (listener) {
        if (listener.exitAtom_sub_call1) {
            listener.exitAtom_sub_call1(this);
        }
    };
    // @Override
    Atom_sub_call1Context.prototype.accept = function (visitor) {
        if (visitor.visitAtom_sub_call1) {
            return visitor.visitAtom_sub_call1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Atom_sub_call1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Atom_sub_call1Context = Atom_sub_call1Context;
var Atom_sub_array1Context = /** @class */ (function (_super) {
    __extends(Atom_sub_array1Context, _super);
    function Atom_sub_array1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Atom_sub_array1Context.prototype.identifier_name = function () {
        return this.getRuleContext(0, Identifier_nameContext);
    };
    Atom_sub_array1Context.prototype.LBRACE = function () { return this.getToken(PowerBuilderParser.LBRACE, 0); };
    Atom_sub_array1Context.prototype.expression_list = function () {
        return this.getRuleContext(0, Expression_listContext);
    };
    Atom_sub_array1Context.prototype.RBRACE = function () { return this.getToken(PowerBuilderParser.RBRACE, 0); };
    Object.defineProperty(Atom_sub_array1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_atom_sub_array1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Atom_sub_array1Context.prototype.enterRule = function (listener) {
        if (listener.enterAtom_sub_array1) {
            listener.enterAtom_sub_array1(this);
        }
    };
    // @Override
    Atom_sub_array1Context.prototype.exitRule = function (listener) {
        if (listener.exitAtom_sub_array1) {
            listener.exitAtom_sub_array1(this);
        }
    };
    // @Override
    Atom_sub_array1Context.prototype.accept = function (visitor) {
        if (visitor.visitAtom_sub_array1) {
            return visitor.visitAtom_sub_array1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Atom_sub_array1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Atom_sub_array1Context = Atom_sub_array1Context;
var Atom_sub_ref1Context = /** @class */ (function (_super) {
    __extends(Atom_sub_ref1Context, _super);
    function Atom_sub_ref1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Atom_sub_ref1Context.prototype.identifier_name = function () {
        return this.getRuleContext(0, Identifier_nameContext);
    };
    Atom_sub_ref1Context.prototype.BRACES = function () { return this.getToken(PowerBuilderParser.BRACES, 0); };
    Object.defineProperty(Atom_sub_ref1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_atom_sub_ref1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Atom_sub_ref1Context.prototype.enterRule = function (listener) {
        if (listener.enterAtom_sub_ref1) {
            listener.enterAtom_sub_ref1(this);
        }
    };
    // @Override
    Atom_sub_ref1Context.prototype.exitRule = function (listener) {
        if (listener.exitAtom_sub_ref1) {
            listener.exitAtom_sub_ref1(this);
        }
    };
    // @Override
    Atom_sub_ref1Context.prototype.accept = function (visitor) {
        if (visitor.visitAtom_sub_ref1) {
            return visitor.visitAtom_sub_ref1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Atom_sub_ref1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Atom_sub_ref1Context = Atom_sub_ref1Context;
var Atom_sub_member1Context = /** @class */ (function (_super) {
    __extends(Atom_sub_member1Context, _super);
    function Atom_sub_member1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Atom_sub_member1Context.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Atom_sub_member1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_atom_sub_member1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Atom_sub_member1Context.prototype.enterRule = function (listener) {
        if (listener.enterAtom_sub_member1) {
            listener.enterAtom_sub_member1(this);
        }
    };
    // @Override
    Atom_sub_member1Context.prototype.exitRule = function (listener) {
        if (listener.exitAtom_sub_member1) {
            listener.exitAtom_sub_member1(this);
        }
    };
    // @Override
    Atom_sub_member1Context.prototype.accept = function (visitor) {
        if (visitor.visitAtom_sub_member1) {
            return visitor.visitAtom_sub_member1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Atom_sub_member1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Atom_sub_member1Context = Atom_sub_member1Context;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.event_call_statement_sub = function () {
        return this.tryGetRuleContext(0, Event_call_statement_subContext);
    };
    AtomContext.prototype.atom_sub = function () {
        return this.tryGetRuleContext(0, Atom_subContext);
    };
    AtomContext.prototype.DOT = function () { return this.tryGetToken(PowerBuilderParser.DOT, 0); };
    AtomContext.prototype.identifier_name_ex = function () {
        return this.tryGetRuleContext(0, Identifier_name_exContext);
    };
    AtomContext.prototype.cast_expression = function () {
        return this.tryGetRuleContext(0, Cast_expressionContext);
    };
    AtomContext.prototype.atom_sub_call1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_call1Context);
    };
    AtomContext.prototype.atom_sub_array1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_array1Context);
    };
    AtomContext.prototype.atom_sub_ref1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_ref1Context);
    };
    AtomContext.prototype.atom_sub_member1 = function () {
        return this.tryGetRuleContext(0, Atom_sub_member1Context);
    };
    AtomContext.prototype.numeric_atom = function () {
        return this.tryGetRuleContext(0, Numeric_atomContext);
    };
    AtomContext.prototype.boolean_atom = function () {
        return this.tryGetRuleContext(0, Boolean_atomContext);
    };
    AtomContext.prototype.ENUM = function () { return this.tryGetToken(PowerBuilderParser.ENUM, 0); };
    AtomContext.prototype.DQUOTED_STRING = function () { return this.tryGetToken(PowerBuilderParser.DQUOTED_STRING, 0); };
    AtomContext.prototype.QUOTED_STRING = function () { return this.tryGetToken(PowerBuilderParser.QUOTED_STRING, 0); };
    AtomContext.prototype.DATE = function () { return this.tryGetToken(PowerBuilderParser.DATE, 0); };
    AtomContext.prototype.TIME = function () { return this.tryGetToken(PowerBuilderParser.TIME, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var Array_access_atomContext = /** @class */ (function (_super) {
    __extends(Array_access_atomContext, _super);
    function Array_access_atomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_access_atomContext.prototype.identifier_name = function () {
        return this.getRuleContext(0, Identifier_nameContext);
    };
    Array_access_atomContext.prototype.LBRACE = function () { return this.getToken(PowerBuilderParser.LBRACE, 0); };
    Array_access_atomContext.prototype.expression_list = function () {
        return this.getRuleContext(0, Expression_listContext);
    };
    Array_access_atomContext.prototype.RBRACE = function () { return this.getToken(PowerBuilderParser.RBRACE, 0); };
    Object.defineProperty(Array_access_atomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_array_access_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_access_atomContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_access_atom) {
            listener.enterArray_access_atom(this);
        }
    };
    // @Override
    Array_access_atomContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_access_atom) {
            listener.exitArray_access_atom(this);
        }
    };
    // @Override
    Array_access_atomContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_access_atom) {
            return visitor.visitArray_access_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_access_atomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_access_atomContext = Array_access_atomContext;
var Numeric_atomContext = /** @class */ (function (_super) {
    __extends(Numeric_atomContext, _super);
    function Numeric_atomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Numeric_atomContext.prototype.NUMBER = function () { return this.getToken(PowerBuilderParser.NUMBER, 0); };
    Object.defineProperty(Numeric_atomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_numeric_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Numeric_atomContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeric_atom) {
            listener.enterNumeric_atom(this);
        }
    };
    // @Override
    Numeric_atomContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeric_atom) {
            listener.exitNumeric_atom(this);
        }
    };
    // @Override
    Numeric_atomContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeric_atom) {
            return visitor.visitNumeric_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Numeric_atomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Numeric_atomContext = Numeric_atomContext;
var Boolean_atomContext = /** @class */ (function (_super) {
    __extends(Boolean_atomContext, _super);
    function Boolean_atomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Boolean_atomContext.prototype.TRUE = function () { return this.tryGetToken(PowerBuilderParser.TRUE, 0); };
    Boolean_atomContext.prototype.FALSE = function () { return this.tryGetToken(PowerBuilderParser.FALSE, 0); };
    Object.defineProperty(Boolean_atomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_boolean_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Boolean_atomContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolean_atom) {
            listener.enterBoolean_atom(this);
        }
    };
    // @Override
    Boolean_atomContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolean_atom) {
            listener.exitBoolean_atom(this);
        }
    };
    // @Override
    Boolean_atomContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolean_atom) {
            return visitor.visitBoolean_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Boolean_atomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Boolean_atomContext = Boolean_atomContext;
var Cast_expressionContext = /** @class */ (function (_super) {
    __extends(Cast_expressionContext, _super);
    function Cast_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cast_expressionContext.prototype.dataTypeSub = function () {
        return this.getRuleContext(0, DataTypeSubContext);
    };
    Cast_expressionContext.prototype.LPAREN = function () { return this.getToken(PowerBuilderParser.LPAREN, 0); };
    Cast_expressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Cast_expressionContext.prototype.RPAREN = function () { return this.getToken(PowerBuilderParser.RPAREN, 0); };
    Cast_expressionContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(PowerBuilderParser.COMMA);
        }
        else {
            return this.getToken(PowerBuilderParser.COMMA, i);
        }
    };
    Object.defineProperty(Cast_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_cast_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cast_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCast_expression) {
            listener.enterCast_expression(this);
        }
    };
    // @Override
    Cast_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCast_expression) {
            listener.exitCast_expression(this);
        }
    };
    // @Override
    Cast_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCast_expression) {
            return visitor.visitCast_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cast_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cast_expressionContext = Cast_expressionContext;
var Data_type_nameContext = /** @class */ (function (_super) {
    __extends(Data_type_nameContext, _super);
    function Data_type_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Data_type_nameContext.prototype.dataTypeSub = function () {
        return this.tryGetRuleContext(0, DataTypeSubContext);
    };
    Data_type_nameContext.prototype.identifier_name = function () {
        return this.tryGetRuleContext(0, Identifier_nameContext);
    };
    Object.defineProperty(Data_type_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_data_type_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Data_type_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterData_type_name) {
            listener.enterData_type_name(this);
        }
    };
    // @Override
    Data_type_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitData_type_name) {
            listener.exitData_type_name(this);
        }
    };
    // @Override
    Data_type_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitData_type_name) {
            return visitor.visitData_type_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Data_type_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Data_type_nameContext = Data_type_nameContext;
var DataTypeSubContext = /** @class */ (function (_super) {
    __extends(DataTypeSubContext, _super);
    function DataTypeSubContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataTypeSubContext.prototype.ANY = function () { return this.tryGetToken(PowerBuilderParser.ANY, 0); };
    DataTypeSubContext.prototype.BLOB = function () { return this.tryGetToken(PowerBuilderParser.BLOB, 0); };
    DataTypeSubContext.prototype.BOOLEAN = function () { return this.tryGetToken(PowerBuilderParser.BOOLEAN, 0); };
    DataTypeSubContext.prototype.BYTE = function () { return this.tryGetToken(PowerBuilderParser.BYTE, 0); };
    DataTypeSubContext.prototype.CHARACTER = function () { return this.tryGetToken(PowerBuilderParser.CHARACTER, 0); };
    DataTypeSubContext.prototype.CHAR = function () { return this.tryGetToken(PowerBuilderParser.CHAR, 0); };
    DataTypeSubContext.prototype.DATE_TYPE = function () { return this.tryGetToken(PowerBuilderParser.DATE_TYPE, 0); };
    DataTypeSubContext.prototype.DATETIME = function () { return this.tryGetToken(PowerBuilderParser.DATETIME, 0); };
    DataTypeSubContext.prototype.DECIMAL = function () { return this.tryGetToken(PowerBuilderParser.DECIMAL, 0); };
    DataTypeSubContext.prototype.DEC = function () { return this.tryGetToken(PowerBuilderParser.DEC, 0); };
    DataTypeSubContext.prototype.DOUBLE = function () { return this.tryGetToken(PowerBuilderParser.DOUBLE, 0); };
    DataTypeSubContext.prototype.INTEGER = function () { return this.tryGetToken(PowerBuilderParser.INTEGER, 0); };
    DataTypeSubContext.prototype.INT = function () { return this.tryGetToken(PowerBuilderParser.INT, 0); };
    DataTypeSubContext.prototype.LONG = function () { return this.tryGetToken(PowerBuilderParser.LONG, 0); };
    DataTypeSubContext.prototype.LONGLONG = function () { return this.tryGetToken(PowerBuilderParser.LONGLONG, 0); };
    DataTypeSubContext.prototype.REAL = function () { return this.tryGetToken(PowerBuilderParser.REAL, 0); };
    DataTypeSubContext.prototype.STRING = function () { return this.tryGetToken(PowerBuilderParser.STRING, 0); };
    DataTypeSubContext.prototype.TIME_TYPE = function () { return this.tryGetToken(PowerBuilderParser.TIME_TYPE, 0); };
    DataTypeSubContext.prototype.UNSIGNEDINTEGER = function () { return this.tryGetToken(PowerBuilderParser.UNSIGNEDINTEGER, 0); };
    DataTypeSubContext.prototype.UINT = function () { return this.tryGetToken(PowerBuilderParser.UINT, 0); };
    DataTypeSubContext.prototype.UNSIGNEDLONG = function () { return this.tryGetToken(PowerBuilderParser.UNSIGNEDLONG, 0); };
    DataTypeSubContext.prototype.ULONG = function () { return this.tryGetToken(PowerBuilderParser.ULONG, 0); };
    DataTypeSubContext.prototype.WINDOW = function () { return this.tryGetToken(PowerBuilderParser.WINDOW, 0); };
    Object.defineProperty(DataTypeSubContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PowerBuilderParser.RULE_dataTypeSub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataTypeSubContext.prototype.enterRule = function (listener) {
        if (listener.enterDataTypeSub) {
            listener.enterDataTypeSub(this);
        }
    };
    // @Override
    DataTypeSubContext.prototype.exitRule = function (listener) {
        if (listener.exitDataTypeSub) {
            listener.exitDataTypeSub(this);
        }
    };
    // @Override
    DataTypeSubContext.prototype.accept = function (visitor) {
        if (visitor.visitDataTypeSub) {
            return visitor.visitDataTypeSub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataTypeSubContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataTypeSubContext = DataTypeSubContext;
