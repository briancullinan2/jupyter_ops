"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/b/b.g4 by ANTLR 4.7.3-SNAPSHOT
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
var bParser = /** @class */ (function (_super) {
    __extends(bParser, _super);
    function bParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(bParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(bParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return bParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "b.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bParser.prototype, "ruleNames", {
        // @Override
        get: function () { return bParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bParser.prototype, "serializedATN", {
        // @Override
        get: function () { return bParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    bParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, bParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === bParser.NAME) {
                    {
                        {
                            this.state = 58;
                            this.definition();
                        }
                    }
                    this.state = 63;
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
    bParser.prototype.definition = function () {
        var _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, bParser.RULE_definition);
        var _la;
        try {
            this.state = 98;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 64;
                            this.name();
                            this.state = 66;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 65;
                                        this.constant();
                                    }
                                    break;
                            }
                            this.state = 78;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (bParser.NAME - 39)) | (1 << (bParser.INT - 39)) | (1 << (bParser.STRING1 - 39)) | (1 << (bParser.STRING2 - 39)))) !== 0)) {
                                {
                                    {
                                        this.state = 68;
                                        this.ival();
                                        this.state = 73;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bParser.T__0) {
                                            {
                                                {
                                                    this.state = 69;
                                                    this.match(bParser.T__0);
                                                    this.state = 70;
                                                    this.ival();
                                                }
                                            }
                                            this.state = 75;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 80;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 81;
                            this.match(bParser.T__1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 83;
                            this.name();
                            this.state = 84;
                            this.match(bParser.T__2);
                            this.state = 93;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bParser.NAME) {
                                {
                                    this.state = 85;
                                    this.name();
                                    this.state = 90;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bParser.T__0) {
                                        {
                                            {
                                                this.state = 86;
                                                this.match(bParser.T__0);
                                                this.state = 87;
                                                this.name();
                                            }
                                        }
                                        this.state = 92;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 95;
                            this.match(bParser.T__3);
                            this.state = 96;
                            this.statement();
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
    bParser.prototype.ival = function () {
        var _localctx = new IvalContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, bParser.RULE_ival);
        try {
            this.state = 102;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case bParser.INT:
                case bParser.STRING1:
                case bParser.STRING2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 100;
                        this.constant();
                    }
                    break;
                case bParser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 101;
                        this.name();
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
    bParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, bParser.RULE_statement);
        try {
            this.state = 119;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 104;
                        this.externsmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 105;
                        this.autosmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 106;
                            this.name();
                            this.state = 107;
                            this.match(bParser.T__4);
                            this.state = 108;
                            this.statement();
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 110;
                        this.casestmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 111;
                        this.blockstmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 112;
                        this.ifstmt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 113;
                        this.whilestmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 114;
                        this.switchstmt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 115;
                        this.gotostmt();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 116;
                        this.returnstmt();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 117;
                        this.expressionstmt();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 118;
                        this.nullstmt();
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
    bParser.prototype.nullstmt = function () {
        var _localctx = new NullstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, bParser.RULE_nullstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this.match(bParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.expressionstmt = function () {
        var _localctx = new ExpressionstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, bParser.RULE_expressionstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                this.rvalue();
                this.state = 124;
                this.match(bParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.blockstmt = function () {
        var _localctx = new BlockstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, bParser.RULE_blockstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                this.match(bParser.T__5);
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bParser.T__1) | (1 << bParser.T__2) | (1 << bParser.T__5) | (1 << bParser.T__7) | (1 << bParser.T__8) | (1 << bParser.T__9) | (1 << bParser.T__10) | (1 << bParser.T__11) | (1 << bParser.T__13) | (1 << bParser.T__14) | (1 << bParser.T__15) | (1 << bParser.T__17) | (1 << bParser.T__19) | (1 << bParser.T__20) | (1 << bParser.T__21) | (1 << bParser.T__22))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (bParser.NAME - 39)) | (1 << (bParser.INT - 39)) | (1 << (bParser.STRING1 - 39)) | (1 << (bParser.STRING2 - 39)))) !== 0)) {
                    {
                        {
                            this.state = 127;
                            this.statement();
                        }
                    }
                    this.state = 132;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 133;
                this.match(bParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.returnstmt = function () {
        var _localctx = new ReturnstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, bParser.RULE_returnstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.match(bParser.T__7);
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === bParser.T__2) {
                    {
                        this.state = 136;
                        this.match(bParser.T__2);
                        this.state = 137;
                        this.rvalue();
                        this.state = 138;
                        this.match(bParser.T__3);
                    }
                }
                this.state = 142;
                this.match(bParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.gotostmt = function () {
        var _localctx = new GotostmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, bParser.RULE_gotostmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this.match(bParser.T__8);
                this.state = 145;
                this.rvalue();
                this.state = 146;
                this.match(bParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.switchstmt = function () {
        var _localctx = new SwitchstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, bParser.RULE_switchstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 148;
                this.match(bParser.T__9);
                this.state = 149;
                this.rvalue();
                this.state = 150;
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
    bParser.prototype.whilestmt = function () {
        var _localctx = new WhilestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, bParser.RULE_whilestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.match(bParser.T__10);
                this.state = 153;
                this.match(bParser.T__2);
                this.state = 154;
                this.rvalue();
                this.state = 155;
                this.match(bParser.T__3);
                this.state = 156;
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
    bParser.prototype.ifstmt = function () {
        var _localctx = new IfstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, bParser.RULE_ifstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.match(bParser.T__11);
                this.state = 159;
                this.match(bParser.T__2);
                this.state = 160;
                this.rvalue();
                this.state = 161;
                this.match(bParser.T__3);
                this.state = 162;
                this.statement();
                this.state = 165;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 163;
                            this.match(bParser.T__12);
                            this.state = 164;
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
    bParser.prototype.casestmt = function () {
        var _localctx = new CasestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, bParser.RULE_casestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(bParser.T__13);
                this.state = 168;
                this.constant();
                this.state = 169;
                this.match(bParser.T__4);
                this.state = 170;
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
    bParser.prototype.externsmt = function () {
        var _localctx = new ExternsmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, bParser.RULE_externsmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.match(bParser.T__14);
                this.state = 173;
                this.name();
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === bParser.T__0) {
                    {
                        {
                            this.state = 174;
                            this.match(bParser.T__0);
                            this.state = 175;
                            this.name();
                        }
                    }
                    this.state = 180;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 181;
                this.match(bParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.autosmt = function () {
        var _localctx = new AutosmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, bParser.RULE_autosmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
                this.match(bParser.T__15);
                this.state = 184;
                this.name();
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (bParser.INT - 40)) | (1 << (bParser.STRING1 - 40)) | (1 << (bParser.STRING2 - 40)))) !== 0)) {
                    {
                        this.state = 185;
                        this.constant();
                    }
                }
                this.state = 195;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === bParser.T__0) {
                    {
                        {
                            this.state = 188;
                            this.match(bParser.T__0);
                            this.state = 189;
                            this.name();
                            this.state = 191;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (bParser.INT - 40)) | (1 << (bParser.STRING1 - 40)) | (1 << (bParser.STRING2 - 40)))) !== 0)) {
                                {
                                    this.state = 190;
                                    this.constant();
                                }
                            }
                        }
                    }
                    this.state = 197;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 198;
                this.match(bParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.rvalue = function () {
        var _localctx = new RvalueContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, bParser.RULE_rvalue);
        try {
            this.state = 204;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 200;
                        this.expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 201;
                        this.comparison();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 202;
                        this.ternary();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 203;
                        this.assignment();
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
    bParser.prototype.ternary = function () {
        var _localctx = new TernaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, bParser.RULE_ternary);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.expression();
                this.state = 207;
                this.match(bParser.T__16);
                this.state = 208;
                this.rvalue();
                this.state = 209;
                this.match(bParser.T__4);
                this.state = 210;
                this.rvalue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.comparison = function () {
        var _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, bParser.RULE_comparison);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.expression();
                this.state = 213;
                this.binary();
                this.state = 214;
                this.rvalue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, bParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.name();
                this.state = 217;
                this.assign();
                this.state = 218;
                this.rvalue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, bParser.RULE_expression);
        try {
            this.state = 238;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 220;
                            this.match(bParser.T__2);
                            this.state = 221;
                            this.rvalue();
                            this.state = 222;
                            this.match(bParser.T__3);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 224;
                        this.name();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 225;
                        this.constant();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        {
                            this.state = 226;
                            this.incdec();
                            this.state = 227;
                            this.name();
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        {
                            this.state = 229;
                            this.name();
                            this.state = 230;
                            this.incdec();
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        {
                            this.state = 232;
                            this.unary();
                            this.state = 233;
                            this.rvalue();
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        {
                            this.state = 235;
                            this.match(bParser.T__17);
                            this.state = 236;
                            this.name();
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 237;
                        this.functioninvocation();
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
    bParser.prototype.functioninvocation = function () {
        var _localctx = new FunctioninvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, bParser.RULE_functioninvocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.name();
                this.state = 241;
                this.match(bParser.T__2);
                this.state = 243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bParser.T__2) | (1 << bParser.T__17) | (1 << bParser.T__19) | (1 << bParser.T__20) | (1 << bParser.T__21) | (1 << bParser.T__22))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (bParser.NAME - 39)) | (1 << (bParser.INT - 39)) | (1 << (bParser.STRING1 - 39)) | (1 << (bParser.STRING2 - 39)))) !== 0)) {
                    {
                        this.state = 242;
                        this.functionparameters();
                    }
                }
                this.state = 245;
                this.match(bParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bParser.prototype.functionparameters = function () {
        var _localctx = new FunctionparametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, bParser.RULE_functionparameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 247;
                this.rvalue();
                this.state = 252;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === bParser.T__0) {
                    {
                        {
                            this.state = 248;
                            this.match(bParser.T__0);
                            this.state = 249;
                            this.rvalue();
                        }
                    }
                    this.state = 254;
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
    bParser.prototype.assign = function () {
        var _localctx = new AssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, bParser.RULE_assign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.match(bParser.T__18);
                this.state = 257;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 256;
                            this.binary();
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
    bParser.prototype.incdec = function () {
        var _localctx = new IncdecContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, bParser.RULE_incdec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                _la = this._input.LA(1);
                if (!(_la === bParser.T__19 || _la === bParser.T__20)) {
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
    bParser.prototype.unary = function () {
        var _localctx = new UnaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, bParser.RULE_unary);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                _la = this._input.LA(1);
                if (!(_la === bParser.T__21 || _la === bParser.T__22)) {
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
    bParser.prototype.binary = function () {
        var _localctx = new BinaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, bParser.RULE_binary);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                _la = this._input.LA(1);
                if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (bParser.T__17 - 18)) | (1 << (bParser.T__21 - 18)) | (1 << (bParser.T__23 - 18)) | (1 << (bParser.T__24 - 18)) | (1 << (bParser.T__25 - 18)) | (1 << (bParser.T__26 - 18)) | (1 << (bParser.T__27 - 18)) | (1 << (bParser.T__28 - 18)) | (1 << (bParser.T__29 - 18)) | (1 << (bParser.T__30 - 18)) | (1 << (bParser.T__31 - 18)) | (1 << (bParser.T__32 - 18)) | (1 << (bParser.T__33 - 18)) | (1 << (bParser.T__34 - 18)) | (1 << (bParser.T__35 - 18)))) !== 0))) {
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
    bParser.prototype.lvalue = function () {
        var _localctx = new LvalueContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, bParser.RULE_lvalue);
        try {
            this.state = 273;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 265;
                        this.name();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 266;
                            this.match(bParser.T__34);
                            this.state = 267;
                            this.rvalue();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 268;
                            this.rvalue();
                            this.state = 269;
                            this.match(bParser.T__36);
                            this.state = 270;
                            this.rvalue();
                            this.state = 271;
                            this.match(bParser.T__37);
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
    bParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, bParser.RULE_constant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (bParser.INT - 40)) | (1 << (bParser.STRING1 - 40)) | (1 << (bParser.STRING2 - 40)))) !== 0))) {
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
    bParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, bParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
                this.match(bParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(bParser, "_ATN", {
        get: function () {
            if (!bParser.__ATN) {
                bParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(bParser._serializedATN));
            }
            return bParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    bParser.T__0 = 1;
    bParser.T__1 = 2;
    bParser.T__2 = 3;
    bParser.T__3 = 4;
    bParser.T__4 = 5;
    bParser.T__5 = 6;
    bParser.T__6 = 7;
    bParser.T__7 = 8;
    bParser.T__8 = 9;
    bParser.T__9 = 10;
    bParser.T__10 = 11;
    bParser.T__11 = 12;
    bParser.T__12 = 13;
    bParser.T__13 = 14;
    bParser.T__14 = 15;
    bParser.T__15 = 16;
    bParser.T__16 = 17;
    bParser.T__17 = 18;
    bParser.T__18 = 19;
    bParser.T__19 = 20;
    bParser.T__20 = 21;
    bParser.T__21 = 22;
    bParser.T__22 = 23;
    bParser.T__23 = 24;
    bParser.T__24 = 25;
    bParser.T__25 = 26;
    bParser.T__26 = 27;
    bParser.T__27 = 28;
    bParser.T__28 = 29;
    bParser.T__29 = 30;
    bParser.T__30 = 31;
    bParser.T__31 = 32;
    bParser.T__32 = 33;
    bParser.T__33 = 34;
    bParser.T__34 = 35;
    bParser.T__35 = 36;
    bParser.T__36 = 37;
    bParser.T__37 = 38;
    bParser.NAME = 39;
    bParser.INT = 40;
    bParser.STRING1 = 41;
    bParser.STRING2 = 42;
    bParser.BLOCKCOMMENT = 43;
    bParser.WS = 44;
    bParser.RULE_program = 0;
    bParser.RULE_definition = 1;
    bParser.RULE_ival = 2;
    bParser.RULE_statement = 3;
    bParser.RULE_nullstmt = 4;
    bParser.RULE_expressionstmt = 5;
    bParser.RULE_blockstmt = 6;
    bParser.RULE_returnstmt = 7;
    bParser.RULE_gotostmt = 8;
    bParser.RULE_switchstmt = 9;
    bParser.RULE_whilestmt = 10;
    bParser.RULE_ifstmt = 11;
    bParser.RULE_casestmt = 12;
    bParser.RULE_externsmt = 13;
    bParser.RULE_autosmt = 14;
    bParser.RULE_rvalue = 15;
    bParser.RULE_ternary = 16;
    bParser.RULE_comparison = 17;
    bParser.RULE_assignment = 18;
    bParser.RULE_expression = 19;
    bParser.RULE_functioninvocation = 20;
    bParser.RULE_functionparameters = 21;
    bParser.RULE_assign = 22;
    bParser.RULE_incdec = 23;
    bParser.RULE_unary = 24;
    bParser.RULE_binary = 25;
    bParser.RULE_lvalue = 26;
    bParser.RULE_constant = 27;
    bParser.RULE_name = 28;
    // tslint:disable:no-trailing-whitespace
    bParser.ruleNames = [
        "program", "definition", "ival", "statement", "nullstmt", "expressionstmt",
        "blockstmt", "returnstmt", "gotostmt", "switchstmt", "whilestmt", "ifstmt",
        "casestmt", "externsmt", "autosmt", "rvalue", "ternary", "comparison",
        "assignment", "expression", "functioninvocation", "functionparameters",
        "assign", "incdec", "unary", "binary", "lvalue", "constant", "name",
    ];
    bParser._LITERAL_NAMES = [
        undefined, "','", "';'", "'('", "')'", "':'", "'{'", "'}'", "'return'",
        "'goto'", "'switch'", "'while'", "'if'", "'else'", "'case'", "'extrn'",
        "'auto'", "'?'", "'&'", "'='", "'++'", "'--'", "'-'", "'!'", "'|'", "'=='",
        "'!='", "'<'", "'<='", "'>'", "'>='", "'<<'", "'>>'", "'+'", "'%'", "'*'",
        "'/'", "'['", "']'",
    ];
    bParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "NAME", "INT", "STRING1",
        "STRING2", "BLOCKCOMMENT", "WS",
    ];
    bParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(bParser._LITERAL_NAMES, bParser._SYMBOLIC_NAMES, []);
    bParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\u011A\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x07\x02>\n\x02\f\x02\x0E\x02A\v\x02\x03" +
        "\x03\x03\x03\x05\x03E\n\x03\x03\x03\x03\x03\x03\x03\x07\x03J\n\x03\f\x03" +
        "\x0E\x03M\v\x03\x07\x03O\n\x03\f\x03\x0E\x03R\v\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03[\n\x03\f\x03\x0E\x03^\v\x03" +
        "\x05\x03`\n\x03\x03\x03\x03\x03\x03\x03\x05\x03e\n\x03\x03\x04\x03\x04" +
        "\x05\x04i\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "z\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b\x83" +
        "\n\b\f\b\x0E\b\x86\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t" +
        "\x8F\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x05\r\xA8\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x07\x0F\xB3\n\x0F\f\x0F\x0E\x0F\xB6\v\x0F\x03\x0F\x03" +
        "\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xBD\n\x10\x03\x10\x03\x10\x03\x10" +
        "\x05\x10\xC2\n\x10\x07\x10\xC4\n\x10\f\x10\x0E\x10\xC7\v\x10\x03\x10\x03" +
        "\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xCF\n\x11\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x15\x03\x15\x05\x15\xF1\n\x15\x03\x16\x03\x16\x03\x16\x05" +
        "\x16\xF6\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\xFD\n\x17" +
        "\f\x17\x0E\x17\u0100\v\x17\x03\x18\x03\x18\x05\x18\u0104\n\x18\x03\x19" +
        "\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0114\n\x1C\x03\x1D\x03\x1D\x03" +
        "\x1E\x03\x1E\x03\x1E\x02\x02\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
        "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
        "8\x02:\x02\x02\x06\x03\x02\x16\x17\x03\x02\x18\x19\x05\x02\x14\x14\x18" +
        "\x18\x1A&\x03\x02*,\x02\u0125\x02?\x03\x02\x02\x02\x04d\x03\x02\x02\x02" +
        "\x06h\x03\x02\x02\x02\by\x03\x02\x02\x02\n{\x03\x02\x02\x02\f}\x03\x02" +
        "\x02\x02\x0E\x80\x03\x02\x02\x02\x10\x89\x03\x02\x02\x02\x12\x92\x03\x02" +
        "\x02\x02\x14\x96\x03\x02\x02\x02\x16\x9A\x03\x02\x02\x02\x18\xA0\x03\x02" +
        "\x02\x02\x1A\xA9\x03\x02\x02\x02\x1C\xAE\x03\x02\x02\x02\x1E\xB9\x03\x02" +
        "\x02\x02 \xCE\x03\x02\x02\x02\"\xD0\x03\x02\x02\x02$\xD6\x03\x02\x02\x02" +
        "&\xDA\x03\x02\x02\x02(\xF0\x03\x02\x02\x02*\xF2\x03\x02\x02\x02,\xF9\x03" +
        "\x02\x02\x02.\u0101\x03\x02\x02\x020\u0105\x03\x02\x02\x022\u0107\x03" +
        "\x02\x02\x024\u0109\x03\x02\x02\x026\u0113\x03\x02\x02\x028\u0115\x03" +
        "\x02\x02\x02:\u0117\x03\x02\x02\x02<>\x05\x04\x03\x02=<\x03\x02\x02\x02" +
        ">A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x03\x03\x02\x02" +
        "\x02A?\x03\x02\x02\x02BD\x05:\x1E\x02CE\x058\x1D\x02DC\x03\x02\x02\x02" +
        "DE\x03\x02\x02\x02EP\x03\x02\x02\x02FK\x05\x06\x04\x02GH\x07\x03\x02\x02" +
        "HJ\x05\x06\x04\x02IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02" +
        "KL\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02NF\x03\x02\x02\x02" +
        "OR\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x03\x02\x02\x02" +
        "RP\x03\x02\x02\x02ST\x07\x04\x02\x02Te\x03\x02\x02\x02UV\x05:\x1E\x02" +
        "V_\x07\x05\x02\x02W\\\x05:\x1E\x02XY\x07\x03\x02\x02Y[\x05:\x1E\x02ZX" +
        "\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02" +
        "]`\x03\x02\x02\x02^\\\x03\x02\x02\x02_W\x03\x02\x02\x02_`\x03\x02\x02" +
        "\x02`a\x03\x02\x02\x02ab\x07\x06\x02\x02bc\x05\b\x05\x02ce\x03\x02\x02" +
        "\x02dB\x03\x02\x02\x02dU\x03\x02\x02\x02e\x05\x03\x02\x02\x02fi\x058\x1D" +
        "\x02gi\x05:\x1E\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02i\x07\x03\x02\x02" +
        "\x02jz\x05\x1C\x0F\x02kz\x05\x1E\x10\x02lm\x05:\x1E\x02mn\x07\x07\x02" +
        "\x02no\x05\b\x05\x02oz\x03\x02\x02\x02pz\x05\x1A\x0E\x02qz\x05\x0E\b\x02" +
        "rz\x05\x18\r\x02sz\x05\x16\f\x02tz\x05\x14\v\x02uz\x05\x12\n\x02vz\x05" +
        "\x10\t\x02wz\x05\f\x07\x02xz\x05\n\x06\x02yj\x03\x02\x02\x02yk\x03\x02" +
        "\x02\x02yl\x03\x02\x02\x02yp\x03\x02\x02\x02yq\x03\x02\x02\x02yr\x03\x02" +
        "\x02\x02ys\x03\x02\x02\x02yt\x03\x02\x02\x02yu\x03\x02\x02\x02yv\x03\x02" +
        "\x02\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02z\t\x03\x02\x02\x02{|\x07" +
        "\x04\x02\x02|\v\x03\x02\x02\x02}~\x05 \x11\x02~\x7F\x07\x04\x02\x02\x7F" +
        "\r\x03\x02\x02\x02\x80\x84\x07\b\x02\x02\x81\x83\x05\b\x05\x02\x82\x81" +
        "\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85" +
        "\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x88" +
        "\x07\t\x02\x02\x88\x0F\x03\x02\x02\x02\x89\x8E\x07\n\x02\x02\x8A\x8B\x07" +
        "\x05\x02\x02\x8B\x8C\x05 \x11\x02\x8C\x8D\x07\x06\x02\x02\x8D\x8F\x03" +
        "\x02\x02\x02\x8E\x8A\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03" +
        "\x02\x02\x02\x90\x91\x07\x04\x02\x02\x91\x11\x03\x02\x02\x02\x92\x93\x07" +
        "\v\x02\x02\x93\x94\x05 \x11\x02\x94\x95\x07\x04\x02\x02\x95\x13\x03\x02" +
        "\x02\x02\x96\x97\x07\f\x02\x02\x97\x98\x05 \x11\x02\x98\x99\x05\b\x05" +
        "\x02\x99\x15\x03\x02\x02\x02\x9A\x9B\x07\r\x02\x02\x9B\x9C\x07\x05\x02" +
        "\x02\x9C\x9D\x05 \x11\x02\x9D\x9E\x07\x06\x02\x02\x9E\x9F\x05\b\x05\x02" +
        "\x9F\x17\x03\x02\x02\x02\xA0\xA1\x07\x0E\x02\x02\xA1\xA2\x07\x05\x02\x02" +
        "\xA2\xA3\x05 \x11\x02\xA3\xA4\x07\x06\x02\x02\xA4\xA7\x05\b\x05\x02\xA5" +
        "\xA6\x07\x0F\x02\x02\xA6\xA8\x05\b\x05\x02\xA7\xA5\x03\x02\x02\x02\xA7" +
        "\xA8\x03\x02\x02\x02\xA8\x19\x03\x02\x02\x02\xA9\xAA\x07\x10\x02\x02\xAA" +
        "\xAB\x058\x1D\x02\xAB\xAC\x07\x07\x02\x02\xAC\xAD\x05\b\x05\x02\xAD\x1B" +
        "\x03\x02\x02\x02\xAE\xAF\x07\x11\x02\x02\xAF\xB4\x05:\x1E\x02\xB0\xB1" +
        "\x07\x03\x02\x02\xB1\xB3\x05:\x1E\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6" +
        "\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7" +
        "\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07\x04\x02\x02\xB8\x1D" +
        "\x03\x02\x02\x02\xB9\xBA\x07\x12\x02\x02\xBA\xBC\x05:\x1E\x02\xBB\xBD" +
        "\x058\x1D\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC5" +
        "\x03\x02\x02\x02\xBE\xBF\x07\x03\x02\x02\xBF\xC1\x05:\x1E\x02\xC0\xC2" +
        "\x058\x1D\x02\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4" +
        "\x03\x02\x02\x02\xC3\xBE\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3" +
        "\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC5" +
        "\x03\x02\x02\x02\xC8\xC9\x07\x04\x02\x02\xC9\x1F\x03\x02\x02\x02\xCA\xCF" +
        "\x05(\x15\x02\xCB\xCF\x05$\x13\x02\xCC\xCF\x05\"\x12\x02\xCD\xCF\x05&" +
        "\x14\x02\xCE\xCA\x03\x02\x02\x02\xCE\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02" +
        "\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF!\x03\x02\x02\x02\xD0\xD1\x05(\x15" +
        "\x02\xD1\xD2\x07\x13\x02\x02\xD2\xD3\x05 \x11\x02\xD3\xD4\x07\x07\x02" +
        "\x02\xD4\xD5\x05 \x11\x02\xD5#\x03\x02\x02\x02\xD6\xD7\x05(\x15\x02\xD7" +
        "\xD8\x054\x1B\x02\xD8\xD9\x05 \x11\x02\xD9%\x03\x02\x02\x02\xDA\xDB\x05" +
        ":\x1E\x02\xDB\xDC\x05.\x18\x02\xDC\xDD\x05 \x11\x02\xDD\'\x03\x02\x02" +
        "\x02\xDE\xDF\x07\x05\x02\x02\xDF\xE0\x05 \x11\x02\xE0\xE1\x07\x06\x02" +
        "\x02\xE1\xF1\x03\x02\x02\x02\xE2\xF1\x05:\x1E\x02\xE3\xF1\x058\x1D\x02" +
        "\xE4\xE5\x050\x19\x02\xE5\xE6\x05:\x1E\x02\xE6\xF1\x03\x02\x02\x02\xE7" +
        "\xE8\x05:\x1E\x02\xE8\xE9\x050\x19\x02\xE9\xF1\x03\x02\x02\x02\xEA\xEB" +
        "\x052\x1A\x02\xEB\xEC\x05 \x11\x02\xEC\xF1\x03\x02\x02\x02\xED\xEE\x07" +
        "\x14\x02\x02\xEE\xF1\x05:\x1E\x02\xEF\xF1\x05*\x16\x02\xF0\xDE\x03\x02" +
        "\x02\x02\xF0\xE2\x03\x02\x02\x02\xF0\xE3\x03\x02\x02\x02\xF0\xE4\x03\x02" +
        "\x02\x02\xF0\xE7\x03\x02\x02\x02\xF0\xEA\x03\x02\x02\x02\xF0\xED\x03\x02" +
        "\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1)\x03\x02\x02\x02\xF2\xF3\x05:\x1E" +
        "\x02\xF3\xF5\x07\x05\x02\x02\xF4\xF6\x05,\x17\x02\xF5\xF4\x03\x02\x02" +
        "\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x07\x06\x02" +
        "\x02\xF8+\x03\x02\x02\x02\xF9\xFE\x05 \x11\x02\xFA\xFB\x07\x03\x02\x02" +
        "\xFB\xFD\x05 \x11\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02" +
        "\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF-\x03\x02\x02\x02" +
        "\u0100\xFE\x03\x02\x02\x02\u0101\u0103\x07\x15\x02\x02\u0102\u0104\x05" +
        "4\x1B\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104" +
        "/\x03\x02\x02\x02\u0105\u0106\t\x02\x02\x02\u01061\x03\x02\x02\x02\u0107" +
        "\u0108\t\x03\x02\x02\u01083\x03\x02\x02\x02\u0109\u010A\t\x04\x02\x02" +
        "\u010A5\x03\x02\x02\x02\u010B\u0114\x05:\x1E\x02\u010C\u010D\x07%\x02" +
        "\x02\u010D\u0114\x05 \x11\x02\u010E\u010F\x05 \x11\x02\u010F\u0110\x07" +
        "\'\x02\x02\u0110\u0111\x05 \x11\x02\u0111\u0112\x07(\x02\x02\u0112\u0114" +
        "\x03\x02\x02\x02\u0113\u010B\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02" +
        "\u0113\u010E\x03\x02\x02\x02\u01147\x03\x02\x02\x02\u0115\u0116\t\x05" +
        "\x02\x02\u01169\x03\x02\x02\x02\u0117\u0118\x07)\x02\x02\u0118;\x03\x02" +
        "\x02\x02\x18?DKP\\_dhy\x84\x8E\xA7\xB4\xBC\xC1\xC5\xCE\xF0\xF5\xFE\u0103" +
        "\u0113";
    return bParser;
}(Parser_1.Parser));
exports.bParser = bParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.definition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefinitionContext);
        }
        else {
            return this.getRuleContext(i, DefinitionContext);
        }
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramContext = ProgramContext;
var DefinitionContext = /** @class */ (function (_super) {
    __extends(DefinitionContext, _super);
    function DefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    DefinitionContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    DefinitionContext.prototype.ival = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IvalContext);
        }
        else {
            return this.getRuleContext(i, IvalContext);
        }
    };
    DefinitionContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Object.defineProperty(DefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_definition; },
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
var IvalContext = /** @class */ (function (_super) {
    __extends(IvalContext, _super);
    function IvalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IvalContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    IvalContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Object.defineProperty(IvalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_ival; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IvalContext.prototype.enterRule = function (listener) {
        if (listener.enterIval) {
            listener.enterIval(this);
        }
    };
    // @Override
    IvalContext.prototype.exitRule = function (listener) {
        if (listener.exitIval) {
            listener.exitIval(this);
        }
    };
    // @Override
    IvalContext.prototype.accept = function (visitor) {
        if (visitor.visitIval) {
            return visitor.visitIval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IvalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IvalContext = IvalContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.externsmt = function () {
        return this.tryGetRuleContext(0, ExternsmtContext);
    };
    StatementContext.prototype.autosmt = function () {
        return this.tryGetRuleContext(0, AutosmtContext);
    };
    StatementContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    StatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    StatementContext.prototype.casestmt = function () {
        return this.tryGetRuleContext(0, CasestmtContext);
    };
    StatementContext.prototype.blockstmt = function () {
        return this.tryGetRuleContext(0, BlockstmtContext);
    };
    StatementContext.prototype.ifstmt = function () {
        return this.tryGetRuleContext(0, IfstmtContext);
    };
    StatementContext.prototype.whilestmt = function () {
        return this.tryGetRuleContext(0, WhilestmtContext);
    };
    StatementContext.prototype.switchstmt = function () {
        return this.tryGetRuleContext(0, SwitchstmtContext);
    };
    StatementContext.prototype.gotostmt = function () {
        return this.tryGetRuleContext(0, GotostmtContext);
    };
    StatementContext.prototype.returnstmt = function () {
        return this.tryGetRuleContext(0, ReturnstmtContext);
    };
    StatementContext.prototype.expressionstmt = function () {
        return this.tryGetRuleContext(0, ExpressionstmtContext);
    };
    StatementContext.prototype.nullstmt = function () {
        return this.tryGetRuleContext(0, NullstmtContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_statement; },
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
var NullstmtContext = /** @class */ (function (_super) {
    __extends(NullstmtContext, _super);
    function NullstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(NullstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_nullstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NullstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterNullstmt) {
            listener.enterNullstmt(this);
        }
    };
    // @Override
    NullstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitNullstmt) {
            listener.exitNullstmt(this);
        }
    };
    // @Override
    NullstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitNullstmt) {
            return visitor.visitNullstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NullstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NullstmtContext = NullstmtContext;
var ExpressionstmtContext = /** @class */ (function (_super) {
    __extends(ExpressionstmtContext, _super);
    function ExpressionstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionstmtContext.prototype.rvalue = function () {
        return this.getRuleContext(0, RvalueContext);
    };
    Object.defineProperty(ExpressionstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_expressionstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionstmt) {
            listener.enterExpressionstmt(this);
        }
    };
    // @Override
    ExpressionstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionstmt) {
            listener.exitExpressionstmt(this);
        }
    };
    // @Override
    ExpressionstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionstmt) {
            return visitor.visitExpressionstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionstmtContext = ExpressionstmtContext;
var BlockstmtContext = /** @class */ (function (_super) {
    __extends(BlockstmtContext, _super);
    function BlockstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockstmtContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(BlockstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_blockstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockstmt) {
            listener.enterBlockstmt(this);
        }
    };
    // @Override
    BlockstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockstmt) {
            listener.exitBlockstmt(this);
        }
    };
    // @Override
    BlockstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockstmt) {
            return visitor.visitBlockstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockstmtContext = BlockstmtContext;
var ReturnstmtContext = /** @class */ (function (_super) {
    __extends(ReturnstmtContext, _super);
    function ReturnstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnstmtContext.prototype.rvalue = function () {
        return this.tryGetRuleContext(0, RvalueContext);
    };
    Object.defineProperty(ReturnstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_returnstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnstmt) {
            listener.enterReturnstmt(this);
        }
    };
    // @Override
    ReturnstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnstmt) {
            listener.exitReturnstmt(this);
        }
    };
    // @Override
    ReturnstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnstmt) {
            return visitor.visitReturnstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnstmtContext = ReturnstmtContext;
var GotostmtContext = /** @class */ (function (_super) {
    __extends(GotostmtContext, _super);
    function GotostmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GotostmtContext.prototype.rvalue = function () {
        return this.getRuleContext(0, RvalueContext);
    };
    Object.defineProperty(GotostmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_gotostmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GotostmtContext.prototype.enterRule = function (listener) {
        if (listener.enterGotostmt) {
            listener.enterGotostmt(this);
        }
    };
    // @Override
    GotostmtContext.prototype.exitRule = function (listener) {
        if (listener.exitGotostmt) {
            listener.exitGotostmt(this);
        }
    };
    // @Override
    GotostmtContext.prototype.accept = function (visitor) {
        if (visitor.visitGotostmt) {
            return visitor.visitGotostmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GotostmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GotostmtContext = GotostmtContext;
var SwitchstmtContext = /** @class */ (function (_super) {
    __extends(SwitchstmtContext, _super);
    function SwitchstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchstmtContext.prototype.rvalue = function () {
        return this.getRuleContext(0, RvalueContext);
    };
    SwitchstmtContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(SwitchstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_switchstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchstmt) {
            listener.enterSwitchstmt(this);
        }
    };
    // @Override
    SwitchstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchstmt) {
            listener.exitSwitchstmt(this);
        }
    };
    // @Override
    SwitchstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchstmt) {
            return visitor.visitSwitchstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchstmtContext = SwitchstmtContext;
var WhilestmtContext = /** @class */ (function (_super) {
    __extends(WhilestmtContext, _super);
    function WhilestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhilestmtContext.prototype.rvalue = function () {
        return this.getRuleContext(0, RvalueContext);
    };
    WhilestmtContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WhilestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_whilestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhilestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterWhilestmt) {
            listener.enterWhilestmt(this);
        }
    };
    // @Override
    WhilestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitWhilestmt) {
            listener.exitWhilestmt(this);
        }
    };
    // @Override
    WhilestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitWhilestmt) {
            return visitor.visitWhilestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhilestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhilestmtContext = WhilestmtContext;
var IfstmtContext = /** @class */ (function (_super) {
    __extends(IfstmtContext, _super);
    function IfstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfstmtContext.prototype.rvalue = function () {
        return this.getRuleContext(0, RvalueContext);
    };
    IfstmtContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(IfstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_ifstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterIfstmt) {
            listener.enterIfstmt(this);
        }
    };
    // @Override
    IfstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitIfstmt) {
            listener.exitIfstmt(this);
        }
    };
    // @Override
    IfstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitIfstmt) {
            return visitor.visitIfstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfstmtContext = IfstmtContext;
var CasestmtContext = /** @class */ (function (_super) {
    __extends(CasestmtContext, _super);
    function CasestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CasestmtContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    CasestmtContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(CasestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_casestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CasestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCasestmt) {
            listener.enterCasestmt(this);
        }
    };
    // @Override
    CasestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCasestmt) {
            listener.exitCasestmt(this);
        }
    };
    // @Override
    CasestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCasestmt) {
            return visitor.visitCasestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CasestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CasestmtContext = CasestmtContext;
var ExternsmtContext = /** @class */ (function (_super) {
    __extends(ExternsmtContext, _super);
    function ExternsmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExternsmtContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Object.defineProperty(ExternsmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_externsmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExternsmtContext.prototype.enterRule = function (listener) {
        if (listener.enterExternsmt) {
            listener.enterExternsmt(this);
        }
    };
    // @Override
    ExternsmtContext.prototype.exitRule = function (listener) {
        if (listener.exitExternsmt) {
            listener.exitExternsmt(this);
        }
    };
    // @Override
    ExternsmtContext.prototype.accept = function (visitor) {
        if (visitor.visitExternsmt) {
            return visitor.visitExternsmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExternsmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExternsmtContext = ExternsmtContext;
var AutosmtContext = /** @class */ (function (_super) {
    __extends(AutosmtContext, _super);
    function AutosmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AutosmtContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    AutosmtContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    Object.defineProperty(AutosmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_autosmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AutosmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAutosmt) {
            listener.enterAutosmt(this);
        }
    };
    // @Override
    AutosmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAutosmt) {
            listener.exitAutosmt(this);
        }
    };
    // @Override
    AutosmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAutosmt) {
            return visitor.visitAutosmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AutosmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AutosmtContext = AutosmtContext;
var RvalueContext = /** @class */ (function (_super) {
    __extends(RvalueContext, _super);
    function RvalueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RvalueContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    RvalueContext.prototype.comparison = function () {
        return this.tryGetRuleContext(0, ComparisonContext);
    };
    RvalueContext.prototype.ternary = function () {
        return this.tryGetRuleContext(0, TernaryContext);
    };
    RvalueContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    Object.defineProperty(RvalueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_rvalue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RvalueContext.prototype.enterRule = function (listener) {
        if (listener.enterRvalue) {
            listener.enterRvalue(this);
        }
    };
    // @Override
    RvalueContext.prototype.exitRule = function (listener) {
        if (listener.exitRvalue) {
            listener.exitRvalue(this);
        }
    };
    // @Override
    RvalueContext.prototype.accept = function (visitor) {
        if (visitor.visitRvalue) {
            return visitor.visitRvalue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RvalueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RvalueContext = RvalueContext;
var TernaryContext = /** @class */ (function (_super) {
    __extends(TernaryContext, _super);
    function TernaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TernaryContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TernaryContext.prototype.rvalue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RvalueContext);
        }
        else {
            return this.getRuleContext(i, RvalueContext);
        }
    };
    Object.defineProperty(TernaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_ternary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TernaryContext.prototype.enterRule = function (listener) {
        if (listener.enterTernary) {
            listener.enterTernary(this);
        }
    };
    // @Override
    TernaryContext.prototype.exitRule = function (listener) {
        if (listener.exitTernary) {
            listener.exitTernary(this);
        }
    };
    // @Override
    TernaryContext.prototype.accept = function (visitor) {
        if (visitor.visitTernary) {
            return visitor.visitTernary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TernaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TernaryContext = TernaryContext;
var ComparisonContext = /** @class */ (function (_super) {
    __extends(ComparisonContext, _super);
    function ComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComparisonContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ComparisonContext.prototype.binary = function () {
        return this.getRuleContext(0, BinaryContext);
    };
    ComparisonContext.prototype.rvalue = function () {
        return this.getRuleContext(0, RvalueContext);
    };
    Object.defineProperty(ComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_comparison; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    };
    // @Override
    ComparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    };
    // @Override
    ComparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComparisonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComparisonContext = ComparisonContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    AssignmentContext.prototype.assign = function () {
        return this.getRuleContext(0, AssignContext);
    };
    AssignmentContext.prototype.rvalue = function () {
        return this.getRuleContext(0, RvalueContext);
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_assignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentContext = AssignmentContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.rvalue = function () {
        return this.tryGetRuleContext(0, RvalueContext);
    };
    ExpressionContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    ExpressionContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    ExpressionContext.prototype.incdec = function () {
        return this.tryGetRuleContext(0, IncdecContext);
    };
    ExpressionContext.prototype.unary = function () {
        return this.tryGetRuleContext(0, UnaryContext);
    };
    ExpressionContext.prototype.functioninvocation = function () {
        return this.tryGetRuleContext(0, FunctioninvocationContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_expression; },
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
var FunctioninvocationContext = /** @class */ (function (_super) {
    __extends(FunctioninvocationContext, _super);
    function FunctioninvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctioninvocationContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    FunctioninvocationContext.prototype.functionparameters = function () {
        return this.tryGetRuleContext(0, FunctionparametersContext);
    };
    Object.defineProperty(FunctioninvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_functioninvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctioninvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctioninvocation) {
            listener.enterFunctioninvocation(this);
        }
    };
    // @Override
    FunctioninvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctioninvocation) {
            listener.exitFunctioninvocation(this);
        }
    };
    // @Override
    FunctioninvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctioninvocation) {
            return visitor.visitFunctioninvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctioninvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctioninvocationContext = FunctioninvocationContext;
var FunctionparametersContext = /** @class */ (function (_super) {
    __extends(FunctionparametersContext, _super);
    function FunctionparametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionparametersContext.prototype.rvalue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RvalueContext);
        }
        else {
            return this.getRuleContext(i, RvalueContext);
        }
    };
    Object.defineProperty(FunctionparametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_functionparameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionparametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionparameters) {
            listener.enterFunctionparameters(this);
        }
    };
    // @Override
    FunctionparametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionparameters) {
            listener.exitFunctionparameters(this);
        }
    };
    // @Override
    FunctionparametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionparameters) {
            return visitor.visitFunctionparameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionparametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionparametersContext = FunctionparametersContext;
var AssignContext = /** @class */ (function (_super) {
    __extends(AssignContext, _super);
    function AssignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignContext.prototype.binary = function () {
        return this.tryGetRuleContext(0, BinaryContext);
    };
    Object.defineProperty(AssignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_assign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignContext.prototype.enterRule = function (listener) {
        if (listener.enterAssign) {
            listener.enterAssign(this);
        }
    };
    // @Override
    AssignContext.prototype.exitRule = function (listener) {
        if (listener.exitAssign) {
            listener.exitAssign(this);
        }
    };
    // @Override
    AssignContext.prototype.accept = function (visitor) {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignContext = AssignContext;
var IncdecContext = /** @class */ (function (_super) {
    __extends(IncdecContext, _super);
    function IncdecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IncdecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_incdec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IncdecContext.prototype.enterRule = function (listener) {
        if (listener.enterIncdec) {
            listener.enterIncdec(this);
        }
    };
    // @Override
    IncdecContext.prototype.exitRule = function (listener) {
        if (listener.exitIncdec) {
            listener.exitIncdec(this);
        }
    };
    // @Override
    IncdecContext.prototype.accept = function (visitor) {
        if (visitor.visitIncdec) {
            return visitor.visitIncdec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncdecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IncdecContext = IncdecContext;
var UnaryContext = /** @class */ (function (_super) {
    __extends(UnaryContext, _super);
    function UnaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(UnaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_unary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryContext.prototype.enterRule = function (listener) {
        if (listener.enterUnary) {
            listener.enterUnary(this);
        }
    };
    // @Override
    UnaryContext.prototype.exitRule = function (listener) {
        if (listener.exitUnary) {
            listener.exitUnary(this);
        }
    };
    // @Override
    UnaryContext.prototype.accept = function (visitor) {
        if (visitor.visitUnary) {
            return visitor.visitUnary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryContext = UnaryContext;
var BinaryContext = /** @class */ (function (_super) {
    __extends(BinaryContext, _super);
    function BinaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BinaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_binary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryContext.prototype.enterRule = function (listener) {
        if (listener.enterBinary) {
            listener.enterBinary(this);
        }
    };
    // @Override
    BinaryContext.prototype.exitRule = function (listener) {
        if (listener.exitBinary) {
            listener.exitBinary(this);
        }
    };
    // @Override
    BinaryContext.prototype.accept = function (visitor) {
        if (visitor.visitBinary) {
            return visitor.visitBinary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryContext = BinaryContext;
var LvalueContext = /** @class */ (function (_super) {
    __extends(LvalueContext, _super);
    function LvalueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LvalueContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    LvalueContext.prototype.rvalue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RvalueContext);
        }
        else {
            return this.getRuleContext(i, RvalueContext);
        }
    };
    Object.defineProperty(LvalueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_lvalue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LvalueContext.prototype.enterRule = function (listener) {
        if (listener.enterLvalue) {
            listener.enterLvalue(this);
        }
    };
    // @Override
    LvalueContext.prototype.exitRule = function (listener) {
        if (listener.exitLvalue) {
            listener.exitLvalue(this);
        }
    };
    // @Override
    LvalueContext.prototype.accept = function (visitor) {
        if (visitor.visitLvalue) {
            return visitor.visitLvalue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LvalueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LvalueContext = LvalueContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.INT = function () { return this.tryGetToken(bParser.INT, 0); };
    ConstantContext.prototype.STRING1 = function () { return this.tryGetToken(bParser.STRING1, 0); };
    ConstantContext.prototype.STRING2 = function () { return this.tryGetToken(bParser.STRING2, 0); };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_constant; },
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
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.NAME = function () { return this.getToken(bParser.NAME, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bParser.RULE_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameContext.prototype.enterRule = function (listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    };
    // @Override
    NameContext.prototype.exitRule = function (listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    };
    // @Override
    NameContext.prototype.accept = function (visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
