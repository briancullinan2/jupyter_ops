"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clojure/Clojure.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ClojureParser = /** @class */ (function (_super) {
    __extends(ClojureParser, _super);
    function ClojureParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ClojureParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ClojureParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ClojureParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClojureParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Clojure.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClojureParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ClojureParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClojureParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ClojureParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ClojureParser.prototype.file = function () {
        var _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ClojureParser.RULE_file);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
                    {
                        {
                            this.state = 80;
                            this.form();
                        }
                    }
                    this.state = 85;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 86;
                this.match(ClojureParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.form = function () {
        var _localctx = new FormContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ClojureParser.RULE_form);
        try {
            this.state = 93;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 88;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 89;
                        this.list();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 90;
                        this.vector();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 91;
                        this.map();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 92;
                        this.reader_macro();
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
    ClojureParser.prototype.forms = function () {
        var _localctx = new FormsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ClojureParser.RULE_forms);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
                    {
                        {
                            this.state = 95;
                            this.form();
                        }
                    }
                    this.state = 100;
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
    ClojureParser.prototype.list = function () {
        var _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ClojureParser.RULE_list);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(ClojureParser.T__0);
                this.state = 102;
                this.forms();
                this.state = 103;
                this.match(ClojureParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.vector = function () {
        var _localctx = new VectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ClojureParser.RULE_vector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 105;
                this.match(ClojureParser.T__2);
                this.state = 106;
                this.forms();
                this.state = 107;
                this.match(ClojureParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.map = function () {
        var _localctx = new MapContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ClojureParser.RULE_map);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this.match(ClojureParser.T__4);
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
                    {
                        {
                            this.state = 110;
                            this.form();
                            this.state = 111;
                            this.form();
                        }
                    }
                    this.state = 117;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 118;
                this.match(ClojureParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.set = function () {
        var _localctx = new SetContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ClojureParser.RULE_set);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this.match(ClojureParser.T__6);
                this.state = 121;
                this.forms();
                this.state = 122;
                this.match(ClojureParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.reader_macro = function () {
        var _localctx = new Reader_macroContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ClojureParser.RULE_reader_macro);
        try {
            this.state = 139;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 124;
                        this.lambda();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 125;
                        this.meta_data();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 126;
                        this.regex();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 127;
                        this.var_quote();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 128;
                        this.host_expr();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 129;
                        this.set();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 130;
                        this.tag();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 131;
                        this.discard();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 132;
                        this.dispatch();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 133;
                        this.deref();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 134;
                        this.quote();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 135;
                        this.backtick();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 136;
                        this.unquote();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 137;
                        this.unquote_splicing();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 138;
                        this.gensym();
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
    ClojureParser.prototype.quote = function () {
        var _localctx = new QuoteContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ClojureParser.RULE_quote);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                this.match(ClojureParser.T__7);
                this.state = 142;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.backtick = function () {
        var _localctx = new BacktickContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ClojureParser.RULE_backtick);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this.match(ClojureParser.T__8);
                this.state = 145;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.unquote = function () {
        var _localctx = new UnquoteContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ClojureParser.RULE_unquote);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(ClojureParser.T__9);
                this.state = 148;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.unquote_splicing = function () {
        var _localctx = new Unquote_splicingContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ClojureParser.RULE_unquote_splicing);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 150;
                this.match(ClojureParser.T__10);
                this.state = 151;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.tag = function () {
        var _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ClojureParser.RULE_tag);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.match(ClojureParser.T__11);
                this.state = 154;
                this.form();
                this.state = 155;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.deref = function () {
        var _localctx = new DerefContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ClojureParser.RULE_deref);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(ClojureParser.T__12);
                this.state = 158;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.gensym = function () {
        var _localctx = new GensymContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ClojureParser.RULE_gensym);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(ClojureParser.SYMBOL);
                this.state = 161;
                this.match(ClojureParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.lambda = function () {
        var _localctx = new LambdaContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ClojureParser.RULE_lambda);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.match(ClojureParser.T__14);
                this.state = 167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
                    {
                        {
                            this.state = 164;
                            this.form();
                        }
                    }
                    this.state = 169;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 170;
                this.match(ClojureParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.meta_data = function () {
        var _localctx = new Meta_dataContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ClojureParser.RULE_meta_data);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.match(ClojureParser.T__15);
                this.state = 177;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 173;
                            this.map();
                            this.state = 174;
                            this.form();
                        }
                        break;
                    case 2:
                        {
                            this.state = 176;
                            this.form();
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
    ClojureParser.prototype.var_quote = function () {
        var _localctx = new Var_quoteContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ClojureParser.RULE_var_quote);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.match(ClojureParser.T__16);
                this.state = 180;
                this.symbol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.host_expr = function () {
        var _localctx = new Host_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ClojureParser.RULE_host_expr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this.match(ClojureParser.T__17);
                this.state = 183;
                this.form();
                this.state = 184;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.discard = function () {
        var _localctx = new DiscardContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ClojureParser.RULE_discard);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.match(ClojureParser.T__18);
                this.state = 187;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.dispatch = function () {
        var _localctx = new DispatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ClojureParser.RULE_dispatch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this.match(ClojureParser.T__13);
                this.state = 190;
                this.symbol();
                this.state = 191;
                this.form();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.regex = function () {
        var _localctx = new RegexContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ClojureParser.RULE_regex);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(ClojureParser.T__13);
                this.state = 194;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ClojureParser.RULE_literal);
        try {
            this.state = 204;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ClojureParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 196;
                        this.string();
                    }
                    break;
                case ClojureParser.FLOAT:
                case ClojureParser.HEX:
                case ClojureParser.BIN:
                case ClojureParser.LONG:
                case ClojureParser.BIGN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 197;
                        this.number();
                    }
                    break;
                case ClojureParser.CHAR_U:
                case ClojureParser.CHAR_NAMED:
                case ClojureParser.CHAR_ANY:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 198;
                        this.character();
                    }
                    break;
                case ClojureParser.NIL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 199;
                        this.nil();
                    }
                    break;
                case ClojureParser.BOOLEAN:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 200;
                        this.match(ClojureParser.BOOLEAN);
                    }
                    break;
                case ClojureParser.T__19:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 201;
                        this.keyword();
                    }
                    break;
                case ClojureParser.SYMBOL:
                case ClojureParser.NS_SYMBOL:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 202;
                        this.symbol();
                    }
                    break;
                case ClojureParser.PARAM_NAME:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 203;
                        this.param_name();
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
    ClojureParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ClojureParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(ClojureParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.hex = function () {
        var _localctx = new HexContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ClojureParser.RULE_hex);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(ClojureParser.HEX);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.bin = function () {
        var _localctx = new BinContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ClojureParser.RULE_bin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.match(ClojureParser.BIN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.bign = function () {
        var _localctx = new BignContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ClojureParser.RULE_bign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(ClojureParser.BIGN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ClojureParser.RULE_number);
        try {
            this.state = 219;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ClojureParser.FLOAT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 214;
                        this.match(ClojureParser.FLOAT);
                    }
                    break;
                case ClojureParser.HEX:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 215;
                        this.hex();
                    }
                    break;
                case ClojureParser.BIN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 216;
                        this.bin();
                    }
                    break;
                case ClojureParser.BIGN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 217;
                        this.bign();
                    }
                    break;
                case ClojureParser.LONG:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 218;
                        this.match(ClojureParser.LONG);
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
    ClojureParser.prototype.character = function () {
        var _localctx = new CharacterContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ClojureParser.RULE_character);
        try {
            this.state = 224;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ClojureParser.CHAR_NAMED:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 221;
                        this.named_char();
                    }
                    break;
                case ClojureParser.CHAR_U:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 222;
                        this.u_hex_quad();
                    }
                    break;
                case ClojureParser.CHAR_ANY:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 223;
                        this.any_char();
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
    ClojureParser.prototype.named_char = function () {
        var _localctx = new Named_charContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ClojureParser.RULE_named_char);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(ClojureParser.CHAR_NAMED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.any_char = function () {
        var _localctx = new Any_charContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ClojureParser.RULE_any_char);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this.match(ClojureParser.CHAR_ANY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.u_hex_quad = function () {
        var _localctx = new U_hex_quadContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ClojureParser.RULE_u_hex_quad);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 230;
                this.match(ClojureParser.CHAR_U);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.nil = function () {
        var _localctx = new NilContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ClojureParser.RULE_nil);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(ClojureParser.NIL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.keyword = function () {
        var _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ClojureParser.RULE_keyword);
        try {
            this.state = 236;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 234;
                        this.macro_keyword();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 235;
                        this.simple_keyword();
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
    ClojureParser.prototype.simple_keyword = function () {
        var _localctx = new Simple_keywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ClojureParser.RULE_simple_keyword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(ClojureParser.T__19);
                this.state = 239;
                this.symbol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.macro_keyword = function () {
        var _localctx = new Macro_keywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ClojureParser.RULE_macro_keyword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(ClojureParser.T__19);
                this.state = 242;
                this.match(ClojureParser.T__19);
                this.state = 243;
                this.symbol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ClojureParser.RULE_symbol);
        try {
            this.state = 247;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ClojureParser.NS_SYMBOL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 245;
                        this.ns_symbol();
                    }
                    break;
                case ClojureParser.SYMBOL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 246;
                        this.simple_sym();
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
    ClojureParser.prototype.simple_sym = function () {
        var _localctx = new Simple_symContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ClojureParser.RULE_simple_sym);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                this.match(ClojureParser.SYMBOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.ns_symbol = function () {
        var _localctx = new Ns_symbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ClojureParser.RULE_ns_symbol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.match(ClojureParser.NS_SYMBOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ClojureParser.prototype.param_name = function () {
        var _localctx = new Param_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ClojureParser.RULE_param_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                this.match(ClojureParser.PARAM_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(ClojureParser, "_ATN", {
        get: function () {
            if (!ClojureParser.__ATN) {
                ClojureParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ClojureParser._serializedATN));
            }
            return ClojureParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ClojureParser.T__0 = 1;
    ClojureParser.T__1 = 2;
    ClojureParser.T__2 = 3;
    ClojureParser.T__3 = 4;
    ClojureParser.T__4 = 5;
    ClojureParser.T__5 = 6;
    ClojureParser.T__6 = 7;
    ClojureParser.T__7 = 8;
    ClojureParser.T__8 = 9;
    ClojureParser.T__9 = 10;
    ClojureParser.T__10 = 11;
    ClojureParser.T__11 = 12;
    ClojureParser.T__12 = 13;
    ClojureParser.T__13 = 14;
    ClojureParser.T__14 = 15;
    ClojureParser.T__15 = 16;
    ClojureParser.T__16 = 17;
    ClojureParser.T__17 = 18;
    ClojureParser.T__18 = 19;
    ClojureParser.T__19 = 20;
    ClojureParser.STRING = 21;
    ClojureParser.FLOAT = 22;
    ClojureParser.HEX = 23;
    ClojureParser.BIN = 24;
    ClojureParser.LONG = 25;
    ClojureParser.BIGN = 26;
    ClojureParser.CHAR_U = 27;
    ClojureParser.CHAR_NAMED = 28;
    ClojureParser.CHAR_ANY = 29;
    ClojureParser.NIL = 30;
    ClojureParser.BOOLEAN = 31;
    ClojureParser.SYMBOL = 32;
    ClojureParser.NS_SYMBOL = 33;
    ClojureParser.PARAM_NAME = 34;
    ClojureParser.TRASH = 35;
    ClojureParser.RULE_file = 0;
    ClojureParser.RULE_form = 1;
    ClojureParser.RULE_forms = 2;
    ClojureParser.RULE_list = 3;
    ClojureParser.RULE_vector = 4;
    ClojureParser.RULE_map = 5;
    ClojureParser.RULE_set = 6;
    ClojureParser.RULE_reader_macro = 7;
    ClojureParser.RULE_quote = 8;
    ClojureParser.RULE_backtick = 9;
    ClojureParser.RULE_unquote = 10;
    ClojureParser.RULE_unquote_splicing = 11;
    ClojureParser.RULE_tag = 12;
    ClojureParser.RULE_deref = 13;
    ClojureParser.RULE_gensym = 14;
    ClojureParser.RULE_lambda = 15;
    ClojureParser.RULE_meta_data = 16;
    ClojureParser.RULE_var_quote = 17;
    ClojureParser.RULE_host_expr = 18;
    ClojureParser.RULE_discard = 19;
    ClojureParser.RULE_dispatch = 20;
    ClojureParser.RULE_regex = 21;
    ClojureParser.RULE_literal = 22;
    ClojureParser.RULE_string = 23;
    ClojureParser.RULE_hex = 24;
    ClojureParser.RULE_bin = 25;
    ClojureParser.RULE_bign = 26;
    ClojureParser.RULE_number = 27;
    ClojureParser.RULE_character = 28;
    ClojureParser.RULE_named_char = 29;
    ClojureParser.RULE_any_char = 30;
    ClojureParser.RULE_u_hex_quad = 31;
    ClojureParser.RULE_nil = 32;
    ClojureParser.RULE_keyword = 33;
    ClojureParser.RULE_simple_keyword = 34;
    ClojureParser.RULE_macro_keyword = 35;
    ClojureParser.RULE_symbol = 36;
    ClojureParser.RULE_simple_sym = 37;
    ClojureParser.RULE_ns_symbol = 38;
    ClojureParser.RULE_param_name = 39;
    // tslint:disable:no-trailing-whitespace
    ClojureParser.ruleNames = [
        "file", "form", "forms", "list", "vector", "map", "set", "reader_macro",
        "quote", "backtick", "unquote", "unquote_splicing", "tag", "deref", "gensym",
        "lambda", "meta_data", "var_quote", "host_expr", "discard", "dispatch",
        "regex", "literal", "string", "hex", "bin", "bign", "number", "character",
        "named_char", "any_char", "u_hex_quad", "nil", "keyword", "simple_keyword",
        "macro_keyword", "symbol", "simple_sym", "ns_symbol", "param_name",
    ];
    ClojureParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'['", "']'", "'{'", "'}'", "'#{'", "'''", "'`'",
        "'~'", "'~@'", "'^'", "'@'", "'#'", "'#('", "'#^'", "'#''", "'#+'", "'#_'",
        "':'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'nil'",
    ];
    ClojureParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "STRING", "FLOAT", "HEX", "BIN", "LONG", "BIGN", "CHAR_U", "CHAR_NAMED",
        "CHAR_ANY", "NIL", "BOOLEAN", "SYMBOL", "NS_SYMBOL", "PARAM_NAME", "TRASH",
    ];
    ClojureParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ClojureParser._LITERAL_NAMES, ClojureParser._SYMBOLIC_NAMES, []);
    ClojureParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\u0102\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x07\x02" +
        "T\n\x02\f\x02\x0E\x02W\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x05\x03`\n\x03\x03\x04\x07\x04c\n\x04\f\x04\x0E\x04f\v\x04" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x07\x07t\n\x07\f\x07\x0E\x07w\v\x07\x03\x07\x03" +
        "\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
        "\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8E\n\t\x03\n\x03" +
        "\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x11\x03\x11\x07\x11\xA8\n\x11\f\x11\x0E\x11\xAB\v\x11\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB4\n\x12\x03\x13" +
        "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xCF\n\x18\x03" +
        "\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xDE\n\x1D\x03\x1E\x03\x1E\x03\x1E" +
        "\x05\x1E\xE3\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
        "#\x03#\x05#\xEF\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x05&\xFA" +
        "\n&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x02\x02\x02*\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
        "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
        "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
        "L\x02N\x02P\x02\x02\x02\x02\xFF\x02U\x03\x02\x02\x02\x04_\x03\x02\x02" +
        "\x02\x06d\x03\x02\x02\x02\bg\x03\x02\x02\x02\nk\x03\x02\x02\x02\fo\x03" +
        "\x02\x02\x02\x0Ez\x03\x02\x02\x02\x10\x8D\x03\x02\x02\x02\x12\x8F\x03" +
        "\x02\x02\x02\x14\x92\x03\x02\x02\x02\x16\x95\x03\x02\x02\x02\x18\x98\x03" +
        "\x02\x02\x02\x1A\x9B\x03\x02\x02\x02\x1C\x9F\x03\x02\x02\x02\x1E\xA2\x03" +
        "\x02\x02\x02 \xA5\x03\x02\x02\x02\"\xAE\x03\x02\x02\x02$\xB5\x03\x02\x02" +
        "\x02&\xB8\x03\x02\x02\x02(\xBC\x03\x02\x02\x02*\xBF\x03\x02\x02\x02,\xC3" +
        "\x03\x02\x02\x02.\xCE\x03\x02\x02\x020\xD0\x03\x02\x02\x022\xD2\x03\x02" +
        "\x02\x024\xD4\x03\x02\x02\x026\xD6\x03\x02\x02\x028\xDD\x03\x02\x02\x02" +
        ":\xE2\x03\x02\x02\x02<\xE4\x03\x02\x02\x02>\xE6\x03\x02\x02\x02@\xE8\x03" +
        "\x02\x02\x02B\xEA\x03\x02\x02\x02D\xEE\x03\x02\x02\x02F\xF0\x03\x02\x02" +
        "\x02H\xF3\x03\x02\x02\x02J\xF9\x03\x02\x02\x02L\xFB\x03\x02\x02\x02N\xFD" +
        "\x03\x02\x02\x02P\xFF\x03\x02\x02\x02RT\x05\x04\x03\x02SR\x03\x02\x02" +
        "\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02" +
        "\x02WU\x03\x02\x02\x02XY\x07\x02\x02\x03Y\x03\x03\x02\x02\x02Z`\x05.\x18" +
        "\x02[`\x05\b\x05\x02\\`\x05\n\x06\x02]`\x05\f\x07\x02^`\x05\x10\t\x02" +
        "_Z\x03\x02\x02\x02_[\x03\x02\x02\x02_\\\x03\x02\x02\x02_]\x03\x02\x02" +
        "\x02_^\x03\x02\x02\x02`\x05\x03\x02\x02\x02ac\x05\x04\x03\x02ba\x03\x02" +
        "\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\x07\x03" +
        "\x02\x02\x02fd\x03\x02\x02\x02gh\x07\x03\x02\x02hi\x05\x06\x04\x02ij\x07" +
        "\x04\x02\x02j\t\x03\x02\x02\x02kl\x07\x05\x02\x02lm\x05\x06\x04\x02mn" +
        "\x07\x06\x02\x02n\v\x03\x02\x02\x02ou\x07\x07\x02\x02pq\x05\x04\x03\x02" +
        "qr\x05\x04\x03\x02rt\x03\x02\x02\x02sp\x03\x02\x02\x02tw\x03\x02\x02\x02" +
        "us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02\x02\x02" +
        "xy\x07\b\x02\x02y\r\x03\x02\x02\x02z{\x07\t\x02\x02{|\x05\x06\x04\x02" +
        "|}\x07\b\x02\x02}\x0F\x03\x02\x02\x02~\x8E\x05 \x11\x02\x7F\x8E\x05\"" +
        "\x12\x02\x80\x8E\x05,\x17\x02\x81\x8E\x05$\x13\x02\x82\x8E\x05&\x14\x02" +
        "\x83\x8E\x05\x0E\b\x02\x84\x8E\x05\x1A\x0E\x02\x85\x8E\x05(\x15\x02\x86" +
        "\x8E\x05*\x16\x02\x87\x8E\x05\x1C\x0F\x02\x88\x8E\x05\x12\n\x02\x89\x8E" +
        "\x05\x14\v\x02\x8A\x8E\x05\x16\f\x02\x8B\x8E\x05\x18\r\x02\x8C\x8E\x05" +
        "\x1E\x10\x02\x8D~\x03\x02\x02\x02\x8D\x7F\x03\x02\x02\x02\x8D\x80\x03" +
        "\x02\x02\x02\x8D\x81\x03\x02\x02\x02\x8D\x82\x03\x02\x02\x02\x8D\x83\x03" +
        "\x02\x02\x02\x8D\x84\x03\x02\x02\x02\x8D\x85\x03\x02\x02\x02\x8D\x86\x03" +
        "\x02\x02\x02\x8D\x87\x03\x02\x02\x02\x8D\x88\x03\x02\x02\x02\x8D\x89\x03" +
        "\x02\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03" +
        "\x02\x02\x02\x8E\x11\x03\x02\x02\x02\x8F\x90\x07\n\x02\x02\x90\x91\x05" +
        "\x04\x03\x02\x91\x13\x03\x02\x02\x02\x92\x93\x07\v\x02\x02\x93\x94\x05" +
        "\x04\x03\x02\x94\x15\x03\x02\x02\x02\x95\x96\x07\f\x02\x02\x96\x97\x05" +
        "\x04\x03\x02\x97\x17\x03\x02\x02\x02\x98\x99\x07\r\x02\x02\x99\x9A\x05" +
        "\x04\x03\x02\x9A\x19\x03\x02\x02\x02\x9B\x9C\x07\x0E\x02\x02\x9C\x9D\x05" +
        "\x04\x03\x02\x9D\x9E\x05\x04\x03\x02\x9E\x1B\x03\x02\x02\x02\x9F\xA0\x07" +
        "\x0F\x02\x02\xA0\xA1\x05\x04\x03\x02\xA1\x1D\x03\x02\x02\x02\xA2\xA3\x07" +
        "\"\x02\x02\xA3\xA4\x07\x10\x02\x02\xA4\x1F\x03\x02\x02\x02\xA5\xA9\x07" +
        "\x11\x02\x02\xA6\xA8\x05\x04\x03\x02\xA7\xA6\x03\x02\x02\x02\xA8\xAB\x03" +
        "\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03" +
        "\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD\x07\x04\x02\x02\xAD!\x03" +
        "\x02\x02\x02\xAE\xB3\x07\x12\x02\x02\xAF\xB0\x05\f\x07\x02\xB0\xB1\x05" +
        "\x04\x03\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB4\x05\x04\x03\x02\xB3\xAF\x03" +
        "\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4#\x03\x02\x02\x02\xB5\xB6\x07" +
        "\x13\x02\x02\xB6\xB7\x05J&\x02\xB7%\x03\x02\x02\x02\xB8\xB9\x07\x14\x02" +
        "\x02\xB9\xBA\x05\x04\x03\x02\xBA\xBB\x05\x04\x03\x02\xBB\'\x03\x02\x02" +
        "\x02\xBC\xBD\x07\x15\x02\x02\xBD\xBE\x05\x04\x03\x02\xBE)\x03\x02\x02" +
        "\x02\xBF\xC0\x07\x10\x02\x02\xC0\xC1\x05J&\x02\xC1\xC2\x05\x04\x03\x02" +
        "\xC2+\x03\x02\x02\x02\xC3\xC4\x07\x10\x02\x02\xC4\xC5\x050\x19\x02\xC5" +
        "-\x03\x02\x02\x02\xC6\xCF\x050\x19\x02\xC7\xCF\x058\x1D\x02\xC8\xCF\x05" +
        ":\x1E\x02\xC9\xCF\x05B\"\x02\xCA\xCF\x07!\x02\x02\xCB\xCF\x05D#\x02\xCC" +
        "\xCF\x05J&\x02\xCD\xCF\x05P)\x02\xCE\xC6\x03\x02\x02\x02\xCE\xC7\x03\x02" +
        "\x02\x02\xCE\xC8\x03\x02\x02\x02\xCE\xC9\x03\x02\x02\x02\xCE\xCA\x03\x02" +
        "\x02\x02\xCE\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02" +
        "\x02\x02\xCF/\x03\x02\x02\x02\xD0\xD1\x07\x17\x02\x02\xD11\x03\x02\x02" +
        "\x02\xD2\xD3\x07\x19\x02\x02\xD33\x03\x02\x02\x02\xD4\xD5\x07\x1A\x02" +
        "\x02\xD55\x03\x02\x02\x02\xD6\xD7\x07\x1C\x02\x02\xD77\x03\x02\x02\x02" +
        "\xD8\xDE\x07\x18\x02\x02\xD9\xDE\x052\x1A\x02\xDA\xDE\x054\x1B\x02\xDB" +
        "\xDE\x056\x1C\x02\xDC\xDE\x07\x1B\x02\x02\xDD\xD8\x03\x02\x02\x02\xDD" +
        "\xD9\x03\x02\x02\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD" +
        "\xDC\x03\x02\x02\x02\xDE9\x03\x02\x02\x02\xDF\xE3\x05<\x1F\x02\xE0\xE3" +
        "\x05@!\x02\xE1\xE3\x05> \x02\xE2\xDF\x03\x02\x02\x02\xE2\xE0\x03\x02\x02" +
        "\x02\xE2\xE1\x03\x02\x02\x02\xE3;\x03\x02\x02\x02\xE4\xE5\x07\x1E\x02" +
        "\x02\xE5=\x03\x02\x02\x02\xE6\xE7\x07\x1F\x02\x02\xE7?\x03\x02\x02\x02" +
        "\xE8\xE9\x07\x1D\x02\x02\xE9A\x03\x02\x02\x02\xEA\xEB\x07 \x02\x02\xEB" +
        "C\x03\x02\x02\x02\xEC\xEF\x05H%\x02\xED\xEF\x05F$\x02\xEE\xEC\x03\x02" +
        "\x02\x02\xEE\xED\x03\x02\x02\x02\xEFE\x03\x02\x02\x02\xF0\xF1\x07\x16" +
        "\x02\x02\xF1\xF2\x05J&\x02\xF2G\x03\x02\x02\x02\xF3\xF4\x07\x16\x02\x02" +
        "\xF4\xF5\x07\x16\x02\x02\xF5\xF6\x05J&\x02\xF6I\x03\x02\x02\x02\xF7\xFA" +
        "\x05N(\x02\xF8\xFA\x05L\'\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02" +
        "\x02\x02\xFAK\x03\x02\x02\x02\xFB\xFC\x07\"\x02\x02\xFCM\x03\x02\x02\x02" +
        "\xFD\xFE\x07#\x02\x02\xFEO\x03\x02\x02\x02\xFF\u0100\x07$\x02\x02\u0100" +
        "Q\x03\x02\x02\x02\x0EU_du\x8D\xA9\xB3\xCE\xDD\xE2\xEE\xF9";
    return ClojureParser;
}(Parser_1.Parser));
exports.ClojureParser = ClojureParser;
var FileContext = /** @class */ (function (_super) {
    __extends(FileContext, _super);
    function FileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileContext.prototype.EOF = function () { return this.getToken(ClojureParser.EOF, 0); };
    FileContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(FileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_file; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileContext.prototype.enterRule = function (listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    };
    // @Override
    FileContext.prototype.exitRule = function (listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    };
    // @Override
    FileContext.prototype.accept = function (visitor) {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileContext = FileContext;
var FormContext = /** @class */ (function (_super) {
    __extends(FormContext, _super);
    function FormContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    FormContext.prototype.list = function () {
        return this.tryGetRuleContext(0, ListContext);
    };
    FormContext.prototype.vector = function () {
        return this.tryGetRuleContext(0, VectorContext);
    };
    FormContext.prototype.map = function () {
        return this.tryGetRuleContext(0, MapContext);
    };
    FormContext.prototype.reader_macro = function () {
        return this.tryGetRuleContext(0, Reader_macroContext);
    };
    Object.defineProperty(FormContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_form; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormContext.prototype.enterRule = function (listener) {
        if (listener.enterForm) {
            listener.enterForm(this);
        }
    };
    // @Override
    FormContext.prototype.exitRule = function (listener) {
        if (listener.exitForm) {
            listener.exitForm(this);
        }
    };
    // @Override
    FormContext.prototype.accept = function (visitor) {
        if (visitor.visitForm) {
            return visitor.visitForm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormContext = FormContext;
var FormsContext = /** @class */ (function (_super) {
    __extends(FormsContext, _super);
    function FormsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormsContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(FormsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_forms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormsContext.prototype.enterRule = function (listener) {
        if (listener.enterForms) {
            listener.enterForms(this);
        }
    };
    // @Override
    FormsContext.prototype.exitRule = function (listener) {
        if (listener.exitForms) {
            listener.exitForms(this);
        }
    };
    // @Override
    FormsContext.prototype.accept = function (visitor) {
        if (visitor.visitForms) {
            return visitor.visitForms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormsContext = FormsContext;
var ListContext = /** @class */ (function (_super) {
    __extends(ListContext, _super);
    function ListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListContext.prototype.forms = function () {
        return this.getRuleContext(0, FormsContext);
    };
    Object.defineProperty(ListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListContext.prototype.enterRule = function (listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    };
    // @Override
    ListContext.prototype.exitRule = function (listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    };
    // @Override
    ListContext.prototype.accept = function (visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListContext = ListContext;
var VectorContext = /** @class */ (function (_super) {
    __extends(VectorContext, _super);
    function VectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VectorContext.prototype.forms = function () {
        return this.getRuleContext(0, FormsContext);
    };
    Object.defineProperty(VectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_vector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VectorContext.prototype.enterRule = function (listener) {
        if (listener.enterVector) {
            listener.enterVector(this);
        }
    };
    // @Override
    VectorContext.prototype.exitRule = function (listener) {
        if (listener.exitVector) {
            listener.exitVector(this);
        }
    };
    // @Override
    VectorContext.prototype.accept = function (visitor) {
        if (visitor.visitVector) {
            return visitor.visitVector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VectorContext = VectorContext;
var MapContext = /** @class */ (function (_super) {
    __extends(MapContext, _super);
    function MapContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(MapContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_map; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapContext.prototype.enterRule = function (listener) {
        if (listener.enterMap) {
            listener.enterMap(this);
        }
    };
    // @Override
    MapContext.prototype.exitRule = function (listener) {
        if (listener.exitMap) {
            listener.exitMap(this);
        }
    };
    // @Override
    MapContext.prototype.accept = function (visitor) {
        if (visitor.visitMap) {
            return visitor.visitMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapContext = MapContext;
var SetContext = /** @class */ (function (_super) {
    __extends(SetContext, _super);
    function SetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetContext.prototype.forms = function () {
        return this.getRuleContext(0, FormsContext);
    };
    Object.defineProperty(SetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_set; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetContext.prototype.enterRule = function (listener) {
        if (listener.enterSet) {
            listener.enterSet(this);
        }
    };
    // @Override
    SetContext.prototype.exitRule = function (listener) {
        if (listener.exitSet) {
            listener.exitSet(this);
        }
    };
    // @Override
    SetContext.prototype.accept = function (visitor) {
        if (visitor.visitSet) {
            return visitor.visitSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetContext = SetContext;
var Reader_macroContext = /** @class */ (function (_super) {
    __extends(Reader_macroContext, _super);
    function Reader_macroContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Reader_macroContext.prototype.lambda = function () {
        return this.tryGetRuleContext(0, LambdaContext);
    };
    Reader_macroContext.prototype.meta_data = function () {
        return this.tryGetRuleContext(0, Meta_dataContext);
    };
    Reader_macroContext.prototype.regex = function () {
        return this.tryGetRuleContext(0, RegexContext);
    };
    Reader_macroContext.prototype.var_quote = function () {
        return this.tryGetRuleContext(0, Var_quoteContext);
    };
    Reader_macroContext.prototype.host_expr = function () {
        return this.tryGetRuleContext(0, Host_exprContext);
    };
    Reader_macroContext.prototype.set = function () {
        return this.tryGetRuleContext(0, SetContext);
    };
    Reader_macroContext.prototype.tag = function () {
        return this.tryGetRuleContext(0, TagContext);
    };
    Reader_macroContext.prototype.discard = function () {
        return this.tryGetRuleContext(0, DiscardContext);
    };
    Reader_macroContext.prototype.dispatch = function () {
        return this.tryGetRuleContext(0, DispatchContext);
    };
    Reader_macroContext.prototype.deref = function () {
        return this.tryGetRuleContext(0, DerefContext);
    };
    Reader_macroContext.prototype.quote = function () {
        return this.tryGetRuleContext(0, QuoteContext);
    };
    Reader_macroContext.prototype.backtick = function () {
        return this.tryGetRuleContext(0, BacktickContext);
    };
    Reader_macroContext.prototype.unquote = function () {
        return this.tryGetRuleContext(0, UnquoteContext);
    };
    Reader_macroContext.prototype.unquote_splicing = function () {
        return this.tryGetRuleContext(0, Unquote_splicingContext);
    };
    Reader_macroContext.prototype.gensym = function () {
        return this.tryGetRuleContext(0, GensymContext);
    };
    Object.defineProperty(Reader_macroContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_reader_macro; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Reader_macroContext.prototype.enterRule = function (listener) {
        if (listener.enterReader_macro) {
            listener.enterReader_macro(this);
        }
    };
    // @Override
    Reader_macroContext.prototype.exitRule = function (listener) {
        if (listener.exitReader_macro) {
            listener.exitReader_macro(this);
        }
    };
    // @Override
    Reader_macroContext.prototype.accept = function (visitor) {
        if (visitor.visitReader_macro) {
            return visitor.visitReader_macro(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Reader_macroContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Reader_macroContext = Reader_macroContext;
var QuoteContext = /** @class */ (function (_super) {
    __extends(QuoteContext, _super);
    function QuoteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuoteContext.prototype.form = function () {
        return this.getRuleContext(0, FormContext);
    };
    Object.defineProperty(QuoteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_quote; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuoteContext.prototype.enterRule = function (listener) {
        if (listener.enterQuote) {
            listener.enterQuote(this);
        }
    };
    // @Override
    QuoteContext.prototype.exitRule = function (listener) {
        if (listener.exitQuote) {
            listener.exitQuote(this);
        }
    };
    // @Override
    QuoteContext.prototype.accept = function (visitor) {
        if (visitor.visitQuote) {
            return visitor.visitQuote(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuoteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuoteContext = QuoteContext;
var BacktickContext = /** @class */ (function (_super) {
    __extends(BacktickContext, _super);
    function BacktickContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BacktickContext.prototype.form = function () {
        return this.getRuleContext(0, FormContext);
    };
    Object.defineProperty(BacktickContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_backtick; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BacktickContext.prototype.enterRule = function (listener) {
        if (listener.enterBacktick) {
            listener.enterBacktick(this);
        }
    };
    // @Override
    BacktickContext.prototype.exitRule = function (listener) {
        if (listener.exitBacktick) {
            listener.exitBacktick(this);
        }
    };
    // @Override
    BacktickContext.prototype.accept = function (visitor) {
        if (visitor.visitBacktick) {
            return visitor.visitBacktick(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BacktickContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BacktickContext = BacktickContext;
var UnquoteContext = /** @class */ (function (_super) {
    __extends(UnquoteContext, _super);
    function UnquoteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnquoteContext.prototype.form = function () {
        return this.getRuleContext(0, FormContext);
    };
    Object.defineProperty(UnquoteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_unquote; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnquoteContext.prototype.enterRule = function (listener) {
        if (listener.enterUnquote) {
            listener.enterUnquote(this);
        }
    };
    // @Override
    UnquoteContext.prototype.exitRule = function (listener) {
        if (listener.exitUnquote) {
            listener.exitUnquote(this);
        }
    };
    // @Override
    UnquoteContext.prototype.accept = function (visitor) {
        if (visitor.visitUnquote) {
            return visitor.visitUnquote(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnquoteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnquoteContext = UnquoteContext;
var Unquote_splicingContext = /** @class */ (function (_super) {
    __extends(Unquote_splicingContext, _super);
    function Unquote_splicingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unquote_splicingContext.prototype.form = function () {
        return this.getRuleContext(0, FormContext);
    };
    Object.defineProperty(Unquote_splicingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_unquote_splicing; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unquote_splicingContext.prototype.enterRule = function (listener) {
        if (listener.enterUnquote_splicing) {
            listener.enterUnquote_splicing(this);
        }
    };
    // @Override
    Unquote_splicingContext.prototype.exitRule = function (listener) {
        if (listener.exitUnquote_splicing) {
            listener.exitUnquote_splicing(this);
        }
    };
    // @Override
    Unquote_splicingContext.prototype.accept = function (visitor) {
        if (visitor.visitUnquote_splicing) {
            return visitor.visitUnquote_splicing(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unquote_splicingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unquote_splicingContext = Unquote_splicingContext;
var TagContext = /** @class */ (function (_super) {
    __extends(TagContext, _super);
    function TagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(TagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_tag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagContext.prototype.enterRule = function (listener) {
        if (listener.enterTag) {
            listener.enterTag(this);
        }
    };
    // @Override
    TagContext.prototype.exitRule = function (listener) {
        if (listener.exitTag) {
            listener.exitTag(this);
        }
    };
    // @Override
    TagContext.prototype.accept = function (visitor) {
        if (visitor.visitTag) {
            return visitor.visitTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagContext = TagContext;
var DerefContext = /** @class */ (function (_super) {
    __extends(DerefContext, _super);
    function DerefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DerefContext.prototype.form = function () {
        return this.getRuleContext(0, FormContext);
    };
    Object.defineProperty(DerefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_deref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DerefContext.prototype.enterRule = function (listener) {
        if (listener.enterDeref) {
            listener.enterDeref(this);
        }
    };
    // @Override
    DerefContext.prototype.exitRule = function (listener) {
        if (listener.exitDeref) {
            listener.exitDeref(this);
        }
    };
    // @Override
    DerefContext.prototype.accept = function (visitor) {
        if (visitor.visitDeref) {
            return visitor.visitDeref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DerefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DerefContext = DerefContext;
var GensymContext = /** @class */ (function (_super) {
    __extends(GensymContext, _super);
    function GensymContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GensymContext.prototype.SYMBOL = function () { return this.getToken(ClojureParser.SYMBOL, 0); };
    Object.defineProperty(GensymContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_gensym; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GensymContext.prototype.enterRule = function (listener) {
        if (listener.enterGensym) {
            listener.enterGensym(this);
        }
    };
    // @Override
    GensymContext.prototype.exitRule = function (listener) {
        if (listener.exitGensym) {
            listener.exitGensym(this);
        }
    };
    // @Override
    GensymContext.prototype.accept = function (visitor) {
        if (visitor.visitGensym) {
            return visitor.visitGensym(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GensymContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GensymContext = GensymContext;
var LambdaContext = /** @class */ (function (_super) {
    __extends(LambdaContext, _super);
    function LambdaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(LambdaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_lambda; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaContext.prototype.enterRule = function (listener) {
        if (listener.enterLambda) {
            listener.enterLambda(this);
        }
    };
    // @Override
    LambdaContext.prototype.exitRule = function (listener) {
        if (listener.exitLambda) {
            listener.exitLambda(this);
        }
    };
    // @Override
    LambdaContext.prototype.accept = function (visitor) {
        if (visitor.visitLambda) {
            return visitor.visitLambda(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaContext = LambdaContext;
var Meta_dataContext = /** @class */ (function (_super) {
    __extends(Meta_dataContext, _super);
    function Meta_dataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Meta_dataContext.prototype.map = function () {
        return this.tryGetRuleContext(0, MapContext);
    };
    Meta_dataContext.prototype.form = function () {
        return this.tryGetRuleContext(0, FormContext);
    };
    Object.defineProperty(Meta_dataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_meta_data; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Meta_dataContext.prototype.enterRule = function (listener) {
        if (listener.enterMeta_data) {
            listener.enterMeta_data(this);
        }
    };
    // @Override
    Meta_dataContext.prototype.exitRule = function (listener) {
        if (listener.exitMeta_data) {
            listener.exitMeta_data(this);
        }
    };
    // @Override
    Meta_dataContext.prototype.accept = function (visitor) {
        if (visitor.visitMeta_data) {
            return visitor.visitMeta_data(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Meta_dataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Meta_dataContext = Meta_dataContext;
var Var_quoteContext = /** @class */ (function (_super) {
    __extends(Var_quoteContext, _super);
    function Var_quoteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Var_quoteContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Object.defineProperty(Var_quoteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_var_quote; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Var_quoteContext.prototype.enterRule = function (listener) {
        if (listener.enterVar_quote) {
            listener.enterVar_quote(this);
        }
    };
    // @Override
    Var_quoteContext.prototype.exitRule = function (listener) {
        if (listener.exitVar_quote) {
            listener.exitVar_quote(this);
        }
    };
    // @Override
    Var_quoteContext.prototype.accept = function (visitor) {
        if (visitor.visitVar_quote) {
            return visitor.visitVar_quote(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Var_quoteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Var_quoteContext = Var_quoteContext;
var Host_exprContext = /** @class */ (function (_super) {
    __extends(Host_exprContext, _super);
    function Host_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Host_exprContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(Host_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_host_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Host_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterHost_expr) {
            listener.enterHost_expr(this);
        }
    };
    // @Override
    Host_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitHost_expr) {
            listener.exitHost_expr(this);
        }
    };
    // @Override
    Host_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitHost_expr) {
            return visitor.visitHost_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Host_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Host_exprContext = Host_exprContext;
var DiscardContext = /** @class */ (function (_super) {
    __extends(DiscardContext, _super);
    function DiscardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DiscardContext.prototype.form = function () {
        return this.getRuleContext(0, FormContext);
    };
    Object.defineProperty(DiscardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_discard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DiscardContext.prototype.enterRule = function (listener) {
        if (listener.enterDiscard) {
            listener.enterDiscard(this);
        }
    };
    // @Override
    DiscardContext.prototype.exitRule = function (listener) {
        if (listener.exitDiscard) {
            listener.exitDiscard(this);
        }
    };
    // @Override
    DiscardContext.prototype.accept = function (visitor) {
        if (visitor.visitDiscard) {
            return visitor.visitDiscard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DiscardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DiscardContext = DiscardContext;
var DispatchContext = /** @class */ (function (_super) {
    __extends(DispatchContext, _super);
    function DispatchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DispatchContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    DispatchContext.prototype.form = function () {
        return this.getRuleContext(0, FormContext);
    };
    Object.defineProperty(DispatchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_dispatch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DispatchContext.prototype.enterRule = function (listener) {
        if (listener.enterDispatch) {
            listener.enterDispatch(this);
        }
    };
    // @Override
    DispatchContext.prototype.exitRule = function (listener) {
        if (listener.exitDispatch) {
            listener.exitDispatch(this);
        }
    };
    // @Override
    DispatchContext.prototype.accept = function (visitor) {
        if (visitor.visitDispatch) {
            return visitor.visitDispatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DispatchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DispatchContext = DispatchContext;
var RegexContext = /** @class */ (function (_super) {
    __extends(RegexContext, _super);
    function RegexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegexContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(RegexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_regex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegexContext.prototype.enterRule = function (listener) {
        if (listener.enterRegex) {
            listener.enterRegex(this);
        }
    };
    // @Override
    RegexContext.prototype.exitRule = function (listener) {
        if (listener.exitRegex) {
            listener.exitRegex(this);
        }
    };
    // @Override
    RegexContext.prototype.accept = function (visitor) {
        if (visitor.visitRegex) {
            return visitor.visitRegex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegexContext = RegexContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    LiteralContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    LiteralContext.prototype.character = function () {
        return this.tryGetRuleContext(0, CharacterContext);
    };
    LiteralContext.prototype.nil = function () {
        return this.tryGetRuleContext(0, NilContext);
    };
    LiteralContext.prototype.BOOLEAN = function () { return this.tryGetToken(ClojureParser.BOOLEAN, 0); };
    LiteralContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    LiteralContext.prototype.symbol = function () {
        return this.tryGetRuleContext(0, SymbolContext);
    };
    LiteralContext.prototype.param_name = function () {
        return this.tryGetRuleContext(0, Param_nameContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_literal; },
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
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(ClojureParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_string; },
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
var HexContext = /** @class */ (function (_super) {
    __extends(HexContext, _super);
    function HexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HexContext.prototype.HEX = function () { return this.getToken(ClojureParser.HEX, 0); };
    Object.defineProperty(HexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_hex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HexContext.prototype.enterRule = function (listener) {
        if (listener.enterHex) {
            listener.enterHex(this);
        }
    };
    // @Override
    HexContext.prototype.exitRule = function (listener) {
        if (listener.exitHex) {
            listener.exitHex(this);
        }
    };
    // @Override
    HexContext.prototype.accept = function (visitor) {
        if (visitor.visitHex) {
            return visitor.visitHex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HexContext = HexContext;
var BinContext = /** @class */ (function (_super) {
    __extends(BinContext, _super);
    function BinContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinContext.prototype.BIN = function () { return this.getToken(ClojureParser.BIN, 0); };
    Object.defineProperty(BinContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_bin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinContext.prototype.enterRule = function (listener) {
        if (listener.enterBin) {
            listener.enterBin(this);
        }
    };
    // @Override
    BinContext.prototype.exitRule = function (listener) {
        if (listener.exitBin) {
            listener.exitBin(this);
        }
    };
    // @Override
    BinContext.prototype.accept = function (visitor) {
        if (visitor.visitBin) {
            return visitor.visitBin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinContext = BinContext;
var BignContext = /** @class */ (function (_super) {
    __extends(BignContext, _super);
    function BignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BignContext.prototype.BIGN = function () { return this.getToken(ClojureParser.BIGN, 0); };
    Object.defineProperty(BignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_bign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BignContext.prototype.enterRule = function (listener) {
        if (listener.enterBign) {
            listener.enterBign(this);
        }
    };
    // @Override
    BignContext.prototype.exitRule = function (listener) {
        if (listener.exitBign) {
            listener.exitBign(this);
        }
    };
    // @Override
    BignContext.prototype.accept = function (visitor) {
        if (visitor.visitBign) {
            return visitor.visitBign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BignContext = BignContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.FLOAT = function () { return this.tryGetToken(ClojureParser.FLOAT, 0); };
    NumberContext.prototype.hex = function () {
        return this.tryGetRuleContext(0, HexContext);
    };
    NumberContext.prototype.bin = function () {
        return this.tryGetRuleContext(0, BinContext);
    };
    NumberContext.prototype.bign = function () {
        return this.tryGetRuleContext(0, BignContext);
    };
    NumberContext.prototype.LONG = function () { return this.tryGetToken(ClojureParser.LONG, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberContext = NumberContext;
var CharacterContext = /** @class */ (function (_super) {
    __extends(CharacterContext, _super);
    function CharacterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharacterContext.prototype.named_char = function () {
        return this.tryGetRuleContext(0, Named_charContext);
    };
    CharacterContext.prototype.u_hex_quad = function () {
        return this.tryGetRuleContext(0, U_hex_quadContext);
    };
    CharacterContext.prototype.any_char = function () {
        return this.tryGetRuleContext(0, Any_charContext);
    };
    Object.defineProperty(CharacterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_character; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharacterContext.prototype.enterRule = function (listener) {
        if (listener.enterCharacter) {
            listener.enterCharacter(this);
        }
    };
    // @Override
    CharacterContext.prototype.exitRule = function (listener) {
        if (listener.exitCharacter) {
            listener.exitCharacter(this);
        }
    };
    // @Override
    CharacterContext.prototype.accept = function (visitor) {
        if (visitor.visitCharacter) {
            return visitor.visitCharacter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharacterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharacterContext = CharacterContext;
var Named_charContext = /** @class */ (function (_super) {
    __extends(Named_charContext, _super);
    function Named_charContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Named_charContext.prototype.CHAR_NAMED = function () { return this.getToken(ClojureParser.CHAR_NAMED, 0); };
    Object.defineProperty(Named_charContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_named_char; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Named_charContext.prototype.enterRule = function (listener) {
        if (listener.enterNamed_char) {
            listener.enterNamed_char(this);
        }
    };
    // @Override
    Named_charContext.prototype.exitRule = function (listener) {
        if (listener.exitNamed_char) {
            listener.exitNamed_char(this);
        }
    };
    // @Override
    Named_charContext.prototype.accept = function (visitor) {
        if (visitor.visitNamed_char) {
            return visitor.visitNamed_char(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Named_charContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Named_charContext = Named_charContext;
var Any_charContext = /** @class */ (function (_super) {
    __extends(Any_charContext, _super);
    function Any_charContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Any_charContext.prototype.CHAR_ANY = function () { return this.getToken(ClojureParser.CHAR_ANY, 0); };
    Object.defineProperty(Any_charContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_any_char; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Any_charContext.prototype.enterRule = function (listener) {
        if (listener.enterAny_char) {
            listener.enterAny_char(this);
        }
    };
    // @Override
    Any_charContext.prototype.exitRule = function (listener) {
        if (listener.exitAny_char) {
            listener.exitAny_char(this);
        }
    };
    // @Override
    Any_charContext.prototype.accept = function (visitor) {
        if (visitor.visitAny_char) {
            return visitor.visitAny_char(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Any_charContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Any_charContext = Any_charContext;
var U_hex_quadContext = /** @class */ (function (_super) {
    __extends(U_hex_quadContext, _super);
    function U_hex_quadContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    U_hex_quadContext.prototype.CHAR_U = function () { return this.getToken(ClojureParser.CHAR_U, 0); };
    Object.defineProperty(U_hex_quadContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_u_hex_quad; },
        enumerable: true,
        configurable: true
    });
    // @Override
    U_hex_quadContext.prototype.enterRule = function (listener) {
        if (listener.enterU_hex_quad) {
            listener.enterU_hex_quad(this);
        }
    };
    // @Override
    U_hex_quadContext.prototype.exitRule = function (listener) {
        if (listener.exitU_hex_quad) {
            listener.exitU_hex_quad(this);
        }
    };
    // @Override
    U_hex_quadContext.prototype.accept = function (visitor) {
        if (visitor.visitU_hex_quad) {
            return visitor.visitU_hex_quad(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return U_hex_quadContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.U_hex_quadContext = U_hex_quadContext;
var NilContext = /** @class */ (function (_super) {
    __extends(NilContext, _super);
    function NilContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NilContext.prototype.NIL = function () { return this.getToken(ClojureParser.NIL, 0); };
    Object.defineProperty(NilContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_nil; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NilContext.prototype.enterRule = function (listener) {
        if (listener.enterNil) {
            listener.enterNil(this);
        }
    };
    // @Override
    NilContext.prototype.exitRule = function (listener) {
        if (listener.exitNil) {
            listener.exitNil(this);
        }
    };
    // @Override
    NilContext.prototype.accept = function (visitor) {
        if (visitor.visitNil) {
            return visitor.visitNil(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NilContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NilContext = NilContext;
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.macro_keyword = function () {
        return this.tryGetRuleContext(0, Macro_keywordContext);
    };
    KeywordContext.prototype.simple_keyword = function () {
        return this.tryGetRuleContext(0, Simple_keywordContext);
    };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordContext = KeywordContext;
var Simple_keywordContext = /** @class */ (function (_super) {
    __extends(Simple_keywordContext, _super);
    function Simple_keywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_keywordContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Object.defineProperty(Simple_keywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_simple_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_keywordContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_keyword) {
            listener.enterSimple_keyword(this);
        }
    };
    // @Override
    Simple_keywordContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_keyword) {
            listener.exitSimple_keyword(this);
        }
    };
    // @Override
    Simple_keywordContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_keyword) {
            return visitor.visitSimple_keyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_keywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_keywordContext = Simple_keywordContext;
var Macro_keywordContext = /** @class */ (function (_super) {
    __extends(Macro_keywordContext, _super);
    function Macro_keywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Macro_keywordContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    Object.defineProperty(Macro_keywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_macro_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Macro_keywordContext.prototype.enterRule = function (listener) {
        if (listener.enterMacro_keyword) {
            listener.enterMacro_keyword(this);
        }
    };
    // @Override
    Macro_keywordContext.prototype.exitRule = function (listener) {
        if (listener.exitMacro_keyword) {
            listener.exitMacro_keyword(this);
        }
    };
    // @Override
    Macro_keywordContext.prototype.accept = function (visitor) {
        if (visitor.visitMacro_keyword) {
            return visitor.visitMacro_keyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Macro_keywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Macro_keywordContext = Macro_keywordContext;
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.ns_symbol = function () {
        return this.tryGetRuleContext(0, Ns_symbolContext);
    };
    SymbolContext.prototype.simple_sym = function () {
        return this.tryGetRuleContext(0, Simple_symContext);
    };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_symbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbol) {
            listener.enterSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbol) {
            listener.exitSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbol) {
            return visitor.visitSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolContext = SymbolContext;
var Simple_symContext = /** @class */ (function (_super) {
    __extends(Simple_symContext, _super);
    function Simple_symContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_symContext.prototype.SYMBOL = function () { return this.getToken(ClojureParser.SYMBOL, 0); };
    Object.defineProperty(Simple_symContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_simple_sym; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_symContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_sym) {
            listener.enterSimple_sym(this);
        }
    };
    // @Override
    Simple_symContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_sym) {
            listener.exitSimple_sym(this);
        }
    };
    // @Override
    Simple_symContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_sym) {
            return visitor.visitSimple_sym(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_symContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_symContext = Simple_symContext;
var Ns_symbolContext = /** @class */ (function (_super) {
    __extends(Ns_symbolContext, _super);
    function Ns_symbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ns_symbolContext.prototype.NS_SYMBOL = function () { return this.getToken(ClojureParser.NS_SYMBOL, 0); };
    Object.defineProperty(Ns_symbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_ns_symbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ns_symbolContext.prototype.enterRule = function (listener) {
        if (listener.enterNs_symbol) {
            listener.enterNs_symbol(this);
        }
    };
    // @Override
    Ns_symbolContext.prototype.exitRule = function (listener) {
        if (listener.exitNs_symbol) {
            listener.exitNs_symbol(this);
        }
    };
    // @Override
    Ns_symbolContext.prototype.accept = function (visitor) {
        if (visitor.visitNs_symbol) {
            return visitor.visitNs_symbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ns_symbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ns_symbolContext = Ns_symbolContext;
var Param_nameContext = /** @class */ (function (_super) {
    __extends(Param_nameContext, _super);
    function Param_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Param_nameContext.prototype.PARAM_NAME = function () { return this.getToken(ClojureParser.PARAM_NAME, 0); };
    Object.defineProperty(Param_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ClojureParser.RULE_param_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Param_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterParam_name) {
            listener.enterParam_name(this);
        }
    };
    // @Override
    Param_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitParam_name) {
            listener.exitParam_name(this);
        }
    };
    // @Override
    Param_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitParam_name) {
            return visitor.visitParam_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Param_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Param_nameContext = Param_nameContext;
