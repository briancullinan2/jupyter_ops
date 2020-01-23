"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/toml/toml.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tomlParser = /** @class */ (function (_super) {
    __extends(tomlParser, _super);
    function tomlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tomlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tomlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tomlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tomlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "toml.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tomlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tomlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tomlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tomlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tomlParser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tomlParser.RULE_document);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 48;
                this.expression();
                this.state = 53;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tomlParser.NL) {
                    {
                        {
                            this.state = 49;
                            this.match(tomlParser.NL);
                            this.state = 50;
                            this.expression();
                        }
                    }
                    this.state = 55;
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
    tomlParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tomlParser.RULE_expression);
        try {
            this.state = 63;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tomlParser.BASIC_STRING:
                case tomlParser.LITERAL_STRING:
                case tomlParser.UNQUOTED_KEY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 56;
                        this.key_value();
                        this.state = 57;
                        this.comment();
                    }
                    break;
                case tomlParser.T__2:
                case tomlParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 59;
                        this.table();
                        this.state = 60;
                        this.comment();
                    }
                    break;
                case tomlParser.EOF:
                case tomlParser.NL:
                case tomlParser.COMMENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 62;
                        this.comment();
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
    tomlParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tomlParser.RULE_comment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tomlParser.COMMENT) {
                    {
                        this.state = 65;
                        this.match(tomlParser.COMMENT);
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
    tomlParser.prototype.key_value = function () {
        var _localctx = new Key_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tomlParser.RULE_key_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.key();
                this.state = 69;
                this.match(tomlParser.T__0);
                this.state = 70;
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
    tomlParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, tomlParser.RULE_key);
        try {
            this.state = 74;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 72;
                        this.simple_key();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 73;
                        this.dotted_key();
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
    tomlParser.prototype.simple_key = function () {
        var _localctx = new Simple_keyContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, tomlParser.RULE_simple_key);
        try {
            this.state = 78;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tomlParser.BASIC_STRING:
                case tomlParser.LITERAL_STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 76;
                        this.quoted_key();
                    }
                    break;
                case tomlParser.UNQUOTED_KEY:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 77;
                        this.unquoted_key();
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
    tomlParser.prototype.unquoted_key = function () {
        var _localctx = new Unquoted_keyContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, tomlParser.RULE_unquoted_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                this.match(tomlParser.UNQUOTED_KEY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tomlParser.prototype.quoted_key = function () {
        var _localctx = new Quoted_keyContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, tomlParser.RULE_quoted_key);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                _la = this._input.LA(1);
                if (!(_la === tomlParser.BASIC_STRING || _la === tomlParser.LITERAL_STRING)) {
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
    tomlParser.prototype.dotted_key = function () {
        var _localctx = new Dotted_keyContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, tomlParser.RULE_dotted_key);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this.simple_key();
                this.state = 87;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 85;
                            this.match(tomlParser.T__1);
                            this.state = 86;
                            this.simple_key();
                        }
                    }
                    this.state = 89;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === tomlParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tomlParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, tomlParser.RULE_value);
        try {
            this.state = 98;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tomlParser.BASIC_STRING:
                case tomlParser.ML_BASIC_STRING:
                case tomlParser.LITERAL_STRING:
                case tomlParser.ML_LITERAL_STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 91;
                        this.string();
                    }
                    break;
                case tomlParser.DEC_INT:
                case tomlParser.HEX_INT:
                case tomlParser.OCT_INT:
                case tomlParser.BIN_INT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 92;
                        this.integer();
                    }
                    break;
                case tomlParser.FLOAT:
                case tomlParser.INF:
                case tomlParser.NAN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 93;
                        this.floating_point();
                    }
                    break;
                case tomlParser.BOOLEAN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 94;
                        this.bool();
                    }
                    break;
                case tomlParser.OFFSET_DATE_TIME:
                case tomlParser.LOCAL_DATE_TIME:
                case tomlParser.LOCAL_DATE:
                case tomlParser.LOCAL_TIME:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 95;
                        this.date_time();
                    }
                    break;
                case tomlParser.T__2:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 96;
                        this.array();
                    }
                    break;
                case tomlParser.T__5:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 97;
                        this.inline_table();
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
    tomlParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, tomlParser.RULE_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.BASIC_STRING) | (1 << tomlParser.ML_BASIC_STRING) | (1 << tomlParser.LITERAL_STRING) | (1 << tomlParser.ML_LITERAL_STRING))) !== 0))) {
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
    tomlParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, tomlParser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.DEC_INT) | (1 << tomlParser.HEX_INT) | (1 << tomlParser.OCT_INT) | (1 << tomlParser.BIN_INT))) !== 0))) {
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
    tomlParser.prototype.floating_point = function () {
        var _localctx = new Floating_pointContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, tomlParser.RULE_floating_point);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.FLOAT) | (1 << tomlParser.INF) | (1 << tomlParser.NAN))) !== 0))) {
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
    tomlParser.prototype.bool = function () {
        var _localctx = new BoolContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, tomlParser.RULE_bool);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                this.match(tomlParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tomlParser.prototype.date_time = function () {
        var _localctx = new Date_timeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, tomlParser.RULE_date_time);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.OFFSET_DATE_TIME) | (1 << tomlParser.LOCAL_DATE_TIME) | (1 << tomlParser.LOCAL_DATE) | (1 << tomlParser.LOCAL_TIME))) !== 0))) {
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
    tomlParser.prototype.array = function () {
        var _localctx = new ArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, tomlParser.RULE_array);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.match(tomlParser.T__2);
                this.state = 112;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 111;
                            this.array_values();
                        }
                        break;
                }
                this.state = 114;
                this.comment_or_nl();
                this.state = 115;
                this.match(tomlParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tomlParser.prototype.array_values = function () {
        var _localctx = new Array_valuesContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, tomlParser.RULE_array_values);
        var _la;
        try {
            this.state = 128;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 117;
                            this.comment_or_nl();
                            this.state = 118;
                            this.value();
                            this.state = 119;
                            this.match(tomlParser.T__4);
                            this.state = 120;
                            this.array_values();
                            this.state = 121;
                            this.comment_or_nl();
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 123;
                        this.comment_or_nl();
                        this.state = 124;
                        this.value();
                        this.state = 126;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === tomlParser.T__4) {
                            {
                                this.state = 125;
                                this.match(tomlParser.T__4);
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
    tomlParser.prototype.comment_or_nl = function () {
        var _localctx = new Comment_or_nlContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, tomlParser.RULE_comment_or_nl);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 131;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === tomlParser.COMMENT) {
                                    {
                                        this.state = 130;
                                        this.match(tomlParser.COMMENT);
                                    }
                                }
                                this.state = 133;
                                this.match(tomlParser.NL);
                            }
                        }
                    }
                    this.state = 138;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
    tomlParser.prototype.table = function () {
        var _localctx = new TableContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, tomlParser.RULE_table);
        try {
            this.state = 141;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tomlParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 139;
                        this.standard_table();
                    }
                    break;
                case tomlParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 140;
                        this.array_table();
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
    tomlParser.prototype.standard_table = function () {
        var _localctx = new Standard_tableContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, tomlParser.RULE_standard_table);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(tomlParser.T__2);
                this.state = 144;
                this.key();
                this.state = 145;
                this.match(tomlParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tomlParser.prototype.inline_table = function () {
        var _localctx = new Inline_tableContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, tomlParser.RULE_inline_table);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(tomlParser.T__5);
                this.state = 148;
                this.inline_table_keyvals();
                this.state = 149;
                this.match(tomlParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tomlParser.prototype.inline_table_keyvals = function () {
        var _localctx = new Inline_table_keyvalsContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, tomlParser.RULE_inline_table_keyvals);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.BASIC_STRING) | (1 << tomlParser.LITERAL_STRING) | (1 << tomlParser.UNQUOTED_KEY))) !== 0)) {
                    {
                        this.state = 151;
                        this.inline_table_keyvals_non_empty();
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
    tomlParser.prototype.inline_table_keyvals_non_empty = function () {
        var _localctx = new Inline_table_keyvals_non_emptyContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, tomlParser.RULE_inline_table_keyvals_non_empty);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.key();
                this.state = 155;
                this.match(tomlParser.T__0);
                this.state = 156;
                this.value();
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tomlParser.T__4) {
                    {
                        this.state = 157;
                        this.match(tomlParser.T__4);
                        this.state = 158;
                        this.inline_table_keyvals_non_empty();
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
    tomlParser.prototype.array_table = function () {
        var _localctx = new Array_tableContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, tomlParser.RULE_array_table);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.match(tomlParser.T__7);
                this.state = 162;
                this.key();
                this.state = 163;
                this.match(tomlParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(tomlParser, "_ATN", {
        get: function () {
            if (!tomlParser.__ATN) {
                tomlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tomlParser._serializedATN));
            }
            return tomlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tomlParser.T__0 = 1;
    tomlParser.T__1 = 2;
    tomlParser.T__2 = 3;
    tomlParser.T__3 = 4;
    tomlParser.T__4 = 5;
    tomlParser.T__5 = 6;
    tomlParser.T__6 = 7;
    tomlParser.T__7 = 8;
    tomlParser.T__8 = 9;
    tomlParser.WS = 10;
    tomlParser.NL = 11;
    tomlParser.COMMENT = 12;
    tomlParser.BOOLEAN = 13;
    tomlParser.BASIC_STRING = 14;
    tomlParser.ML_BASIC_STRING = 15;
    tomlParser.LITERAL_STRING = 16;
    tomlParser.ML_LITERAL_STRING = 17;
    tomlParser.FLOAT = 18;
    tomlParser.INF = 19;
    tomlParser.NAN = 20;
    tomlParser.DEC_INT = 21;
    tomlParser.HEX_INT = 22;
    tomlParser.OCT_INT = 23;
    tomlParser.BIN_INT = 24;
    tomlParser.OFFSET_DATE_TIME = 25;
    tomlParser.LOCAL_DATE_TIME = 26;
    tomlParser.LOCAL_DATE = 27;
    tomlParser.LOCAL_TIME = 28;
    tomlParser.UNQUOTED_KEY = 29;
    tomlParser.RULE_document = 0;
    tomlParser.RULE_expression = 1;
    tomlParser.RULE_comment = 2;
    tomlParser.RULE_key_value = 3;
    tomlParser.RULE_key = 4;
    tomlParser.RULE_simple_key = 5;
    tomlParser.RULE_unquoted_key = 6;
    tomlParser.RULE_quoted_key = 7;
    tomlParser.RULE_dotted_key = 8;
    tomlParser.RULE_value = 9;
    tomlParser.RULE_string = 10;
    tomlParser.RULE_integer = 11;
    tomlParser.RULE_floating_point = 12;
    tomlParser.RULE_bool = 13;
    tomlParser.RULE_date_time = 14;
    tomlParser.RULE_array = 15;
    tomlParser.RULE_array_values = 16;
    tomlParser.RULE_comment_or_nl = 17;
    tomlParser.RULE_table = 18;
    tomlParser.RULE_standard_table = 19;
    tomlParser.RULE_inline_table = 20;
    tomlParser.RULE_inline_table_keyvals = 21;
    tomlParser.RULE_inline_table_keyvals_non_empty = 22;
    tomlParser.RULE_array_table = 23;
    // tslint:disable:no-trailing-whitespace
    tomlParser.ruleNames = [
        "document", "expression", "comment", "key_value", "key", "simple_key",
        "unquoted_key", "quoted_key", "dotted_key", "value", "string", "integer",
        "floating_point", "bool", "date_time", "array", "array_values", "comment_or_nl",
        "table", "standard_table", "inline_table", "inline_table_keyvals", "inline_table_keyvals_non_empty",
        "array_table",
    ];
    tomlParser._LITERAL_NAMES = [
        undefined, "'='", "'.'", "'['", "']'", "','", "'{'", "'}'", "'[['", "']]'",
    ];
    tomlParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "WS", "NL", "COMMENT", "BOOLEAN", "BASIC_STRING",
        "ML_BASIC_STRING", "LITERAL_STRING", "ML_LITERAL_STRING", "FLOAT", "INF",
        "NAN", "DEC_INT", "HEX_INT", "OCT_INT", "BIN_INT", "OFFSET_DATE_TIME",
        "LOCAL_DATE_TIME", "LOCAL_DATE", "LOCAL_TIME", "UNQUOTED_KEY",
    ];
    tomlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tomlParser._LITERAL_NAMES, tomlParser._SYMBOLIC_NAMES, []);
    tomlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\xA8\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x07\x026\n\x02\f\x02" +
        "\x0E\x029\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x05\x03B\n\x03\x03\x04\x05\x04E\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x06\x03\x06\x05\x06M\n\x06\x03\x07\x03\x07\x05\x07Q\n\x07\x03\b\x03" +
        "\b\x03\t\x03\t\x03\n\x03\n\x03\n\x06\nZ\n\n\r\n\x0E\n[\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x05\ve\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E" +
        "\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11s\n\x11" +
        "\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x05\x12\x81\n\x12\x05\x12\x83\n\x12\x03\x13\x05" +
        "\x13\x86\n\x13\x03\x13\x07\x13\x89\n\x13\f\x13\x0E\x13\x8C\v\x13\x03\x14" +
        "\x03\x14\x05\x14\x90\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
        "\x16\x03\x16\x03\x16\x03\x17\x05\x17\x9B\n\x17\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x05\x18\xA2\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x02\x02\x02\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\x07\x04\x02\x10\x10\x12" +
        "\x12\x03\x02\x10\x13\x03\x02\x17\x1A\x03\x02\x14\x16\x03\x02\x1B\x1E\x02" +
        "\xA4\x022\x03\x02\x02\x02\x04A\x03\x02\x02\x02\x06D\x03\x02\x02\x02\b" +
        "F\x03\x02\x02\x02\nL\x03\x02\x02\x02\fP\x03\x02\x02\x02\x0ER\x03\x02\x02" +
        "\x02\x10T\x03\x02\x02\x02\x12V\x03\x02\x02\x02\x14d\x03\x02\x02\x02\x16" +
        "f\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1Aj\x03\x02\x02\x02\x1Cl\x03\x02" +
        "\x02\x02\x1En\x03\x02\x02\x02 p\x03\x02\x02\x02\"\x82\x03\x02\x02\x02" +
        "$\x8A\x03\x02\x02\x02&\x8F\x03\x02\x02\x02(\x91\x03\x02\x02\x02*\x95\x03" +
        "\x02\x02\x02,\x9A\x03\x02\x02\x02.\x9C\x03\x02\x02\x020\xA3\x03\x02\x02" +
        "\x0227\x05\x04\x03\x0234\x07\r\x02\x0246\x05\x04\x03\x0253\x03\x02\x02" +
        "\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\x03\x03\x02" +
        "\x02\x0297\x03\x02\x02\x02:;\x05\b\x05\x02;<\x05\x06\x04\x02<B\x03\x02" +
        "\x02\x02=>\x05&\x14\x02>?\x05\x06\x04\x02?B\x03\x02\x02\x02@B\x05\x06" +
        "\x04\x02A:\x03\x02\x02\x02A=\x03\x02\x02\x02A@\x03\x02\x02\x02B\x05\x03" +
        "\x02\x02\x02CE\x07\x0E\x02\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02E\x07" +
        "\x03\x02\x02\x02FG\x05\n\x06\x02GH\x07\x03\x02\x02HI\x05\x14\v\x02I\t" +
        "\x03\x02\x02\x02JM\x05\f\x07\x02KM\x05\x12\n\x02LJ\x03\x02\x02\x02LK\x03" +
        "\x02\x02\x02M\v\x03\x02\x02\x02NQ\x05\x10\t\x02OQ\x05\x0E\b\x02PN\x03" +
        "\x02\x02\x02PO\x03\x02\x02\x02Q\r\x03\x02\x02\x02RS\x07\x1F\x02\x02S\x0F" +
        "\x03\x02\x02\x02TU\t\x02\x02\x02U\x11\x03\x02\x02\x02VY\x05\f\x07\x02" +
        "WX\x07\x04\x02\x02XZ\x05\f\x07\x02YW\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
        "[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\x13\x03\x02\x02\x02]e\x05\x16" +
        "\f\x02^e\x05\x18\r\x02_e\x05\x1A\x0E\x02`e\x05\x1C\x0F\x02ae\x05\x1E\x10" +
        "\x02be\x05 \x11\x02ce\x05*\x16\x02d]\x03\x02\x02\x02d^\x03\x02\x02\x02" +
        "d_\x03\x02\x02\x02d`\x03\x02\x02\x02da\x03\x02\x02\x02db\x03\x02\x02\x02" +
        "dc\x03\x02\x02\x02e\x15\x03\x02\x02\x02fg\t\x03\x02\x02g\x17\x03\x02\x02" +
        "\x02hi\t\x04\x02\x02i\x19\x03\x02\x02\x02jk\t\x05\x02\x02k\x1B\x03\x02" +
        "\x02\x02lm\x07\x0F\x02\x02m\x1D\x03\x02\x02\x02no\t\x06\x02\x02o\x1F\x03" +
        "\x02\x02\x02pr\x07\x05\x02\x02qs\x05\"\x12\x02rq\x03\x02\x02\x02rs\x03" +
        "\x02\x02\x02st\x03\x02\x02\x02tu\x05$\x13\x02uv\x07\x06\x02\x02v!\x03" +
        "\x02\x02\x02wx\x05$\x13\x02xy\x05\x14\v\x02yz\x07\x07\x02\x02z{\x05\"" +
        "\x12\x02{|\x05$\x13\x02|\x83\x03\x02\x02\x02}~\x05$\x13\x02~\x80\x05\x14" +
        "\v\x02\x7F\x81\x07\x07\x02\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02" +
        "\x02\x02\x81\x83\x03\x02\x02\x02\x82w\x03\x02\x02\x02\x82}\x03\x02\x02" +
        "\x02\x83#\x03\x02\x02\x02\x84\x86\x07\x0E\x02\x02\x85\x84\x03\x02\x02" +
        "\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x07\r\x02" +
        "\x02\x88\x85\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02" +
        "\x02\x8A\x8B\x03\x02\x02\x02\x8B%\x03\x02\x02\x02\x8C\x8A\x03\x02\x02" +
        "\x02\x8D\x90\x05(\x15\x02\x8E\x90\x050\x19\x02\x8F\x8D\x03\x02\x02\x02" +
        "\x8F\x8E\x03\x02\x02\x02\x90\'\x03\x02\x02\x02\x91\x92\x07\x05\x02\x02" +
        "\x92\x93\x05\n\x06\x02\x93\x94\x07\x06\x02\x02\x94)\x03\x02\x02\x02\x95" +
        "\x96\x07\b\x02\x02\x96\x97\x05,\x17\x02\x97\x98\x07\t\x02\x02\x98+\x03" +
        "\x02\x02\x02\x99\x9B\x05.\x18\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03" +
        "\x02\x02\x02\x9B-\x03\x02\x02\x02\x9C\x9D\x05\n\x06\x02\x9D\x9E\x07\x03" +
        "\x02\x02\x9E\xA1\x05\x14\v\x02\x9F\xA0\x07\x07\x02\x02\xA0\xA2\x05.\x18" +
        "\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2/\x03\x02\x02" +
        "\x02\xA3\xA4\x07\n\x02\x02\xA4\xA5\x05\n\x06\x02\xA5\xA6\x07\v\x02\x02" +
        "\xA61\x03\x02\x02\x02\x117ADLP[dr\x80\x82\x85\x8A\x8F\x9A\xA1";
    return tomlParser;
}(Parser_1.Parser));
exports.tomlParser = tomlParser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    DocumentContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(tomlParser.NL);
        }
        else {
            return this.getToken(tomlParser.NL, i);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_document; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.key_value = function () {
        return this.tryGetRuleContext(0, Key_valueContext);
    };
    ExpressionContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    ExpressionContext.prototype.table = function () {
        return this.tryGetRuleContext(0, TableContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_expression; },
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
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.tryGetToken(tomlParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentContext.prototype.enterRule = function (listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    };
    // @Override
    CommentContext.prototype.exitRule = function (listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    };
    // @Override
    CommentContext.prototype.accept = function (visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentContext = CommentContext;
var Key_valueContext = /** @class */ (function (_super) {
    __extends(Key_valueContext, _super);
    function Key_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Key_valueContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Key_valueContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(Key_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_key_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Key_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterKey_value) {
            listener.enterKey_value(this);
        }
    };
    // @Override
    Key_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitKey_value) {
            listener.exitKey_value(this);
        }
    };
    // @Override
    Key_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitKey_value) {
            return visitor.visitKey_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Key_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Key_valueContext = Key_valueContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyContext.prototype.simple_key = function () {
        return this.tryGetRuleContext(0, Simple_keyContext);
    };
    KeyContext.prototype.dotted_key = function () {
        return this.tryGetRuleContext(0, Dotted_keyContext);
    };
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyContext.prototype.enterRule = function (listener) {
        if (listener.enterKey) {
            listener.enterKey(this);
        }
    };
    // @Override
    KeyContext.prototype.exitRule = function (listener) {
        if (listener.exitKey) {
            listener.exitKey(this);
        }
    };
    // @Override
    KeyContext.prototype.accept = function (visitor) {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyContext = KeyContext;
var Simple_keyContext = /** @class */ (function (_super) {
    __extends(Simple_keyContext, _super);
    function Simple_keyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_keyContext.prototype.quoted_key = function () {
        return this.tryGetRuleContext(0, Quoted_keyContext);
    };
    Simple_keyContext.prototype.unquoted_key = function () {
        return this.tryGetRuleContext(0, Unquoted_keyContext);
    };
    Object.defineProperty(Simple_keyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_simple_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_keyContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_key) {
            listener.enterSimple_key(this);
        }
    };
    // @Override
    Simple_keyContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_key) {
            listener.exitSimple_key(this);
        }
    };
    // @Override
    Simple_keyContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_key) {
            return visitor.visitSimple_key(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_keyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_keyContext = Simple_keyContext;
var Unquoted_keyContext = /** @class */ (function (_super) {
    __extends(Unquoted_keyContext, _super);
    function Unquoted_keyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unquoted_keyContext.prototype.UNQUOTED_KEY = function () { return this.getToken(tomlParser.UNQUOTED_KEY, 0); };
    Object.defineProperty(Unquoted_keyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_unquoted_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unquoted_keyContext.prototype.enterRule = function (listener) {
        if (listener.enterUnquoted_key) {
            listener.enterUnquoted_key(this);
        }
    };
    // @Override
    Unquoted_keyContext.prototype.exitRule = function (listener) {
        if (listener.exitUnquoted_key) {
            listener.exitUnquoted_key(this);
        }
    };
    // @Override
    Unquoted_keyContext.prototype.accept = function (visitor) {
        if (visitor.visitUnquoted_key) {
            return visitor.visitUnquoted_key(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unquoted_keyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unquoted_keyContext = Unquoted_keyContext;
var Quoted_keyContext = /** @class */ (function (_super) {
    __extends(Quoted_keyContext, _super);
    function Quoted_keyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Quoted_keyContext.prototype.BASIC_STRING = function () { return this.tryGetToken(tomlParser.BASIC_STRING, 0); };
    Quoted_keyContext.prototype.LITERAL_STRING = function () { return this.tryGetToken(tomlParser.LITERAL_STRING, 0); };
    Object.defineProperty(Quoted_keyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_quoted_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Quoted_keyContext.prototype.enterRule = function (listener) {
        if (listener.enterQuoted_key) {
            listener.enterQuoted_key(this);
        }
    };
    // @Override
    Quoted_keyContext.prototype.exitRule = function (listener) {
        if (listener.exitQuoted_key) {
            listener.exitQuoted_key(this);
        }
    };
    // @Override
    Quoted_keyContext.prototype.accept = function (visitor) {
        if (visitor.visitQuoted_key) {
            return visitor.visitQuoted_key(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Quoted_keyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Quoted_keyContext = Quoted_keyContext;
var Dotted_keyContext = /** @class */ (function (_super) {
    __extends(Dotted_keyContext, _super);
    function Dotted_keyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dotted_keyContext.prototype.simple_key = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Simple_keyContext);
        }
        else {
            return this.getRuleContext(i, Simple_keyContext);
        }
    };
    Object.defineProperty(Dotted_keyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_dotted_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dotted_keyContext.prototype.enterRule = function (listener) {
        if (listener.enterDotted_key) {
            listener.enterDotted_key(this);
        }
    };
    // @Override
    Dotted_keyContext.prototype.exitRule = function (listener) {
        if (listener.exitDotted_key) {
            listener.exitDotted_key(this);
        }
    };
    // @Override
    Dotted_keyContext.prototype.accept = function (visitor) {
        if (visitor.visitDotted_key) {
            return visitor.visitDotted_key(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dotted_keyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dotted_keyContext = Dotted_keyContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ValueContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    ValueContext.prototype.floating_point = function () {
        return this.tryGetRuleContext(0, Floating_pointContext);
    };
    ValueContext.prototype.bool = function () {
        return this.tryGetRuleContext(0, BoolContext);
    };
    ValueContext.prototype.date_time = function () {
        return this.tryGetRuleContext(0, Date_timeContext);
    };
    ValueContext.prototype.array = function () {
        return this.tryGetRuleContext(0, ArrayContext);
    };
    ValueContext.prototype.inline_table = function () {
        return this.tryGetRuleContext(0, Inline_tableContext);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_value; },
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
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.BASIC_STRING = function () { return this.tryGetToken(tomlParser.BASIC_STRING, 0); };
    StringContext.prototype.ML_BASIC_STRING = function () { return this.tryGetToken(tomlParser.ML_BASIC_STRING, 0); };
    StringContext.prototype.LITERAL_STRING = function () { return this.tryGetToken(tomlParser.LITERAL_STRING, 0); };
    StringContext.prototype.ML_LITERAL_STRING = function () { return this.tryGetToken(tomlParser.ML_LITERAL_STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.DEC_INT = function () { return this.tryGetToken(tomlParser.DEC_INT, 0); };
    IntegerContext.prototype.HEX_INT = function () { return this.tryGetToken(tomlParser.HEX_INT, 0); };
    IntegerContext.prototype.OCT_INT = function () { return this.tryGetToken(tomlParser.OCT_INT, 0); };
    IntegerContext.prototype.BIN_INT = function () { return this.tryGetToken(tomlParser.BIN_INT, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_integer; },
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
var Floating_pointContext = /** @class */ (function (_super) {
    __extends(Floating_pointContext, _super);
    function Floating_pointContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Floating_pointContext.prototype.FLOAT = function () { return this.tryGetToken(tomlParser.FLOAT, 0); };
    Floating_pointContext.prototype.INF = function () { return this.tryGetToken(tomlParser.INF, 0); };
    Floating_pointContext.prototype.NAN = function () { return this.tryGetToken(tomlParser.NAN, 0); };
    Object.defineProperty(Floating_pointContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_floating_point; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Floating_pointContext.prototype.enterRule = function (listener) {
        if (listener.enterFloating_point) {
            listener.enterFloating_point(this);
        }
    };
    // @Override
    Floating_pointContext.prototype.exitRule = function (listener) {
        if (listener.exitFloating_point) {
            listener.exitFloating_point(this);
        }
    };
    // @Override
    Floating_pointContext.prototype.accept = function (visitor) {
        if (visitor.visitFloating_point) {
            return visitor.visitFloating_point(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Floating_pointContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Floating_pointContext = Floating_pointContext;
var BoolContext = /** @class */ (function (_super) {
    __extends(BoolContext, _super);
    function BoolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoolContext.prototype.BOOLEAN = function () { return this.getToken(tomlParser.BOOLEAN, 0); };
    Object.defineProperty(BoolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_bool; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoolContext.prototype.enterRule = function (listener) {
        if (listener.enterBool) {
            listener.enterBool(this);
        }
    };
    // @Override
    BoolContext.prototype.exitRule = function (listener) {
        if (listener.exitBool) {
            listener.exitBool(this);
        }
    };
    // @Override
    BoolContext.prototype.accept = function (visitor) {
        if (visitor.visitBool) {
            return visitor.visitBool(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoolContext = BoolContext;
var Date_timeContext = /** @class */ (function (_super) {
    __extends(Date_timeContext, _super);
    function Date_timeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Date_timeContext.prototype.OFFSET_DATE_TIME = function () { return this.tryGetToken(tomlParser.OFFSET_DATE_TIME, 0); };
    Date_timeContext.prototype.LOCAL_DATE_TIME = function () { return this.tryGetToken(tomlParser.LOCAL_DATE_TIME, 0); };
    Date_timeContext.prototype.LOCAL_DATE = function () { return this.tryGetToken(tomlParser.LOCAL_DATE, 0); };
    Date_timeContext.prototype.LOCAL_TIME = function () { return this.tryGetToken(tomlParser.LOCAL_TIME, 0); };
    Object.defineProperty(Date_timeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_date_time; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Date_timeContext.prototype.enterRule = function (listener) {
        if (listener.enterDate_time) {
            listener.enterDate_time(this);
        }
    };
    // @Override
    Date_timeContext.prototype.exitRule = function (listener) {
        if (listener.exitDate_time) {
            listener.exitDate_time(this);
        }
    };
    // @Override
    Date_timeContext.prototype.accept = function (visitor) {
        if (visitor.visitDate_time) {
            return visitor.visitDate_time(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Date_timeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Date_timeContext = Date_timeContext;
var ArrayContext = /** @class */ (function (_super) {
    __extends(ArrayContext, _super);
    function ArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayContext.prototype.comment_or_nl = function () {
        return this.getRuleContext(0, Comment_or_nlContext);
    };
    ArrayContext.prototype.array_values = function () {
        return this.tryGetRuleContext(0, Array_valuesContext);
    };
    Object.defineProperty(ArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_array; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterArray) {
            listener.enterArray(this);
        }
    };
    // @Override
    ArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitArray) {
            listener.exitArray(this);
        }
    };
    // @Override
    ArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitArray) {
            return visitor.visitArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayContext = ArrayContext;
var Array_valuesContext = /** @class */ (function (_super) {
    __extends(Array_valuesContext, _super);
    function Array_valuesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_valuesContext.prototype.comment_or_nl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Comment_or_nlContext);
        }
        else {
            return this.getRuleContext(i, Comment_or_nlContext);
        }
    };
    Array_valuesContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Array_valuesContext.prototype.array_values = function () {
        return this.tryGetRuleContext(0, Array_valuesContext);
    };
    Object.defineProperty(Array_valuesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_array_values; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_valuesContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_values) {
            listener.enterArray_values(this);
        }
    };
    // @Override
    Array_valuesContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_values) {
            listener.exitArray_values(this);
        }
    };
    // @Override
    Array_valuesContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_values) {
            return visitor.visitArray_values(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_valuesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_valuesContext = Array_valuesContext;
var Comment_or_nlContext = /** @class */ (function (_super) {
    __extends(Comment_or_nlContext, _super);
    function Comment_or_nlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comment_or_nlContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(tomlParser.NL);
        }
        else {
            return this.getToken(tomlParser.NL, i);
        }
    };
    Comment_or_nlContext.prototype.COMMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(tomlParser.COMMENT);
        }
        else {
            return this.getToken(tomlParser.COMMENT, i);
        }
    };
    Object.defineProperty(Comment_or_nlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_comment_or_nl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comment_or_nlContext.prototype.enterRule = function (listener) {
        if (listener.enterComment_or_nl) {
            listener.enterComment_or_nl(this);
        }
    };
    // @Override
    Comment_or_nlContext.prototype.exitRule = function (listener) {
        if (listener.exitComment_or_nl) {
            listener.exitComment_or_nl(this);
        }
    };
    // @Override
    Comment_or_nlContext.prototype.accept = function (visitor) {
        if (visitor.visitComment_or_nl) {
            return visitor.visitComment_or_nl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comment_or_nlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comment_or_nlContext = Comment_or_nlContext;
var TableContext = /** @class */ (function (_super) {
    __extends(TableContext, _super);
    function TableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableContext.prototype.standard_table = function () {
        return this.tryGetRuleContext(0, Standard_tableContext);
    };
    TableContext.prototype.array_table = function () {
        return this.tryGetRuleContext(0, Array_tableContext);
    };
    Object.defineProperty(TableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_table; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableContext.prototype.enterRule = function (listener) {
        if (listener.enterTable) {
            listener.enterTable(this);
        }
    };
    // @Override
    TableContext.prototype.exitRule = function (listener) {
        if (listener.exitTable) {
            listener.exitTable(this);
        }
    };
    // @Override
    TableContext.prototype.accept = function (visitor) {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableContext = TableContext;
var Standard_tableContext = /** @class */ (function (_super) {
    __extends(Standard_tableContext, _super);
    function Standard_tableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Standard_tableContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Object.defineProperty(Standard_tableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_standard_table; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Standard_tableContext.prototype.enterRule = function (listener) {
        if (listener.enterStandard_table) {
            listener.enterStandard_table(this);
        }
    };
    // @Override
    Standard_tableContext.prototype.exitRule = function (listener) {
        if (listener.exitStandard_table) {
            listener.exitStandard_table(this);
        }
    };
    // @Override
    Standard_tableContext.prototype.accept = function (visitor) {
        if (visitor.visitStandard_table) {
            return visitor.visitStandard_table(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Standard_tableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Standard_tableContext = Standard_tableContext;
var Inline_tableContext = /** @class */ (function (_super) {
    __extends(Inline_tableContext, _super);
    function Inline_tableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Inline_tableContext.prototype.inline_table_keyvals = function () {
        return this.getRuleContext(0, Inline_table_keyvalsContext);
    };
    Object.defineProperty(Inline_tableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_inline_table; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Inline_tableContext.prototype.enterRule = function (listener) {
        if (listener.enterInline_table) {
            listener.enterInline_table(this);
        }
    };
    // @Override
    Inline_tableContext.prototype.exitRule = function (listener) {
        if (listener.exitInline_table) {
            listener.exitInline_table(this);
        }
    };
    // @Override
    Inline_tableContext.prototype.accept = function (visitor) {
        if (visitor.visitInline_table) {
            return visitor.visitInline_table(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Inline_tableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Inline_tableContext = Inline_tableContext;
var Inline_table_keyvalsContext = /** @class */ (function (_super) {
    __extends(Inline_table_keyvalsContext, _super);
    function Inline_table_keyvalsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Inline_table_keyvalsContext.prototype.inline_table_keyvals_non_empty = function () {
        return this.tryGetRuleContext(0, Inline_table_keyvals_non_emptyContext);
    };
    Object.defineProperty(Inline_table_keyvalsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_inline_table_keyvals; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Inline_table_keyvalsContext.prototype.enterRule = function (listener) {
        if (listener.enterInline_table_keyvals) {
            listener.enterInline_table_keyvals(this);
        }
    };
    // @Override
    Inline_table_keyvalsContext.prototype.exitRule = function (listener) {
        if (listener.exitInline_table_keyvals) {
            listener.exitInline_table_keyvals(this);
        }
    };
    // @Override
    Inline_table_keyvalsContext.prototype.accept = function (visitor) {
        if (visitor.visitInline_table_keyvals) {
            return visitor.visitInline_table_keyvals(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Inline_table_keyvalsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Inline_table_keyvalsContext = Inline_table_keyvalsContext;
var Inline_table_keyvals_non_emptyContext = /** @class */ (function (_super) {
    __extends(Inline_table_keyvals_non_emptyContext, _super);
    function Inline_table_keyvals_non_emptyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Inline_table_keyvals_non_emptyContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Inline_table_keyvals_non_emptyContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Inline_table_keyvals_non_emptyContext.prototype.inline_table_keyvals_non_empty = function () {
        return this.tryGetRuleContext(0, Inline_table_keyvals_non_emptyContext);
    };
    Object.defineProperty(Inline_table_keyvals_non_emptyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_inline_table_keyvals_non_empty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Inline_table_keyvals_non_emptyContext.prototype.enterRule = function (listener) {
        if (listener.enterInline_table_keyvals_non_empty) {
            listener.enterInline_table_keyvals_non_empty(this);
        }
    };
    // @Override
    Inline_table_keyvals_non_emptyContext.prototype.exitRule = function (listener) {
        if (listener.exitInline_table_keyvals_non_empty) {
            listener.exitInline_table_keyvals_non_empty(this);
        }
    };
    // @Override
    Inline_table_keyvals_non_emptyContext.prototype.accept = function (visitor) {
        if (visitor.visitInline_table_keyvals_non_empty) {
            return visitor.visitInline_table_keyvals_non_empty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Inline_table_keyvals_non_emptyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Inline_table_keyvals_non_emptyContext = Inline_table_keyvals_non_emptyContext;
var Array_tableContext = /** @class */ (function (_super) {
    __extends(Array_tableContext, _super);
    function Array_tableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_tableContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Object.defineProperty(Array_tableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tomlParser.RULE_array_table; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_tableContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_table) {
            listener.enterArray_table(this);
        }
    };
    // @Override
    Array_tableContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_table) {
            listener.exitArray_table(this);
        }
    };
    // @Override
    Array_tableContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_table) {
            return visitor.visitArray_table(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_tableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_tableContext = Array_tableContext;
