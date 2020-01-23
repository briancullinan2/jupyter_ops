"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pl0/pl0.g4 by ANTLR 4.7.3-SNAPSHOT
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
var pl0Parser = /** @class */ (function (_super) {
    __extends(pl0Parser, _super);
    function pl0Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(pl0Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(pl0Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return pl0Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pl0Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "pl0.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pl0Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return pl0Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pl0Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return pl0Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    pl0Parser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, pl0Parser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.block();
                this.state = 41;
                this.match(pl0Parser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, pl0Parser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pl0Parser.CONST) {
                    {
                        this.state = 43;
                        this.consts();
                    }
                }
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pl0Parser.VAR) {
                    {
                        this.state = 46;
                        this.vars();
                    }
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pl0Parser.PROCEDURE) {
                    {
                        {
                            this.state = 49;
                            this.procedure();
                        }
                    }
                    this.state = 54;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 55;
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
    pl0Parser.prototype.consts = function () {
        var _localctx = new ConstsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, pl0Parser.RULE_consts);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.match(pl0Parser.CONST);
                this.state = 58;
                this.ident();
                this.state = 59;
                this.match(pl0Parser.T__1);
                this.state = 60;
                this.number();
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pl0Parser.T__2) {
                    {
                        {
                            this.state = 61;
                            this.match(pl0Parser.T__2);
                            this.state = 62;
                            this.ident();
                            this.state = 63;
                            this.match(pl0Parser.T__1);
                            this.state = 64;
                            this.number();
                        }
                    }
                    this.state = 70;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 71;
                this.match(pl0Parser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.vars = function () {
        var _localctx = new VarsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, pl0Parser.RULE_vars);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(pl0Parser.VAR);
                this.state = 74;
                this.ident();
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pl0Parser.T__2) {
                    {
                        {
                            this.state = 75;
                            this.match(pl0Parser.T__2);
                            this.state = 76;
                            this.ident();
                        }
                    }
                    this.state = 81;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 82;
                this.match(pl0Parser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.procedure = function () {
        var _localctx = new ProcedureContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, pl0Parser.RULE_procedure);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this.match(pl0Parser.PROCEDURE);
                this.state = 85;
                this.ident();
                this.state = 86;
                this.match(pl0Parser.T__3);
                this.state = 87;
                this.block();
                this.state = 88;
                this.match(pl0Parser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, pl0Parser.RULE_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pl0Parser.STRING:
                        {
                            this.state = 90;
                            this.assignstmt();
                        }
                        break;
                    case pl0Parser.CALL:
                        {
                            this.state = 91;
                            this.callstmt();
                        }
                        break;
                    case pl0Parser.WRITE:
                        {
                            this.state = 92;
                            this.writestmt();
                        }
                        break;
                    case pl0Parser.T__5:
                        {
                            this.state = 93;
                            this.qstmt();
                        }
                        break;
                    case pl0Parser.T__6:
                        {
                            this.state = 94;
                            this.bangstmt();
                        }
                        break;
                    case pl0Parser.BEGIN:
                        {
                            this.state = 95;
                            this.beginstmt();
                        }
                        break;
                    case pl0Parser.IF:
                        {
                            this.state = 96;
                            this.ifstmt();
                        }
                        break;
                    case pl0Parser.WHILE:
                        {
                            this.state = 97;
                            this.whilestmt();
                        }
                        break;
                    case pl0Parser.T__0:
                    case pl0Parser.T__3:
                    case pl0Parser.END:
                        break;
                    default:
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
    pl0Parser.prototype.assignstmt = function () {
        var _localctx = new AssignstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, pl0Parser.RULE_assignstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.ident();
                this.state = 101;
                this.match(pl0Parser.T__4);
                this.state = 102;
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
    pl0Parser.prototype.callstmt = function () {
        var _localctx = new CallstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, pl0Parser.RULE_callstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.match(pl0Parser.CALL);
                this.state = 105;
                this.ident();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.writestmt = function () {
        var _localctx = new WritestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, pl0Parser.RULE_writestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 107;
                this.match(pl0Parser.WRITE);
                this.state = 108;
                this.ident();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.qstmt = function () {
        var _localctx = new QstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, pl0Parser.RULE_qstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.match(pl0Parser.T__5);
                this.state = 111;
                this.ident();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.bangstmt = function () {
        var _localctx = new BangstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, pl0Parser.RULE_bangstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.match(pl0Parser.T__6);
                this.state = 114;
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
    pl0Parser.prototype.beginstmt = function () {
        var _localctx = new BeginstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, pl0Parser.RULE_beginstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 116;
                this.match(pl0Parser.BEGIN);
                this.state = 117;
                this.statement();
                this.state = 122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pl0Parser.T__3) {
                    {
                        {
                            this.state = 118;
                            this.match(pl0Parser.T__3);
                            this.state = 119;
                            this.statement();
                        }
                    }
                    this.state = 124;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 125;
                this.match(pl0Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.ifstmt = function () {
        var _localctx = new IfstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, pl0Parser.RULE_ifstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.match(pl0Parser.IF);
                this.state = 128;
                this.condition();
                this.state = 129;
                this.match(pl0Parser.THEN);
                this.state = 130;
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
    pl0Parser.prototype.whilestmt = function () {
        var _localctx = new WhilestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, pl0Parser.RULE_whilestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.match(pl0Parser.WHILE);
                this.state = 133;
                this.condition();
                this.state = 134;
                this.match(pl0Parser.DO);
                this.state = 135;
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
    pl0Parser.prototype.condition = function () {
        var _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, pl0Parser.RULE_condition);
        var _la;
        try {
            this.state = 143;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pl0Parser.ODD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 137;
                        this.match(pl0Parser.ODD);
                        this.state = 138;
                        this.expression();
                    }
                    break;
                case pl0Parser.T__12:
                case pl0Parser.T__13:
                case pl0Parser.T__16:
                case pl0Parser.STRING:
                case pl0Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 139;
                        this.expression();
                        this.state = 140;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pl0Parser.T__1) | (1 << pl0Parser.T__7) | (1 << pl0Parser.T__8) | (1 << pl0Parser.T__9) | (1 << pl0Parser.T__10) | (1 << pl0Parser.T__11))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 141;
                        this.expression();
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
    pl0Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, pl0Parser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pl0Parser.T__12 || _la === pl0Parser.T__13) {
                    {
                        this.state = 145;
                        _la = this._input.LA(1);
                        if (!(_la === pl0Parser.T__12 || _la === pl0Parser.T__13)) {
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
                this.state = 148;
                this.term();
                this.state = 153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pl0Parser.T__12 || _la === pl0Parser.T__13) {
                    {
                        {
                            this.state = 149;
                            _la = this._input.LA(1);
                            if (!(_la === pl0Parser.T__12 || _la === pl0Parser.T__13)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 150;
                            this.term();
                        }
                    }
                    this.state = 155;
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
    pl0Parser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, pl0Parser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this.factor();
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pl0Parser.T__14 || _la === pl0Parser.T__15) {
                    {
                        {
                            this.state = 157;
                            _la = this._input.LA(1);
                            if (!(_la === pl0Parser.T__14 || _la === pl0Parser.T__15)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 158;
                            this.factor();
                        }
                    }
                    this.state = 163;
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
    pl0Parser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, pl0Parser.RULE_factor);
        try {
            this.state = 170;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pl0Parser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 164;
                        this.ident();
                    }
                    break;
                case pl0Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 165;
                        this.number();
                    }
                    break;
                case pl0Parser.T__16:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 166;
                        this.match(pl0Parser.T__16);
                        this.state = 167;
                        this.expression();
                        this.state = 168;
                        this.match(pl0Parser.T__17);
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
    pl0Parser.prototype.ident = function () {
        var _localctx = new IdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, pl0Parser.RULE_ident);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.match(pl0Parser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pl0Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, pl0Parser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this.match(pl0Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(pl0Parser, "_ATN", {
        get: function () {
            if (!pl0Parser.__ATN) {
                pl0Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(pl0Parser._serializedATN));
            }
            return pl0Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    pl0Parser.T__0 = 1;
    pl0Parser.T__1 = 2;
    pl0Parser.T__2 = 3;
    pl0Parser.T__3 = 4;
    pl0Parser.T__4 = 5;
    pl0Parser.T__5 = 6;
    pl0Parser.T__6 = 7;
    pl0Parser.T__7 = 8;
    pl0Parser.T__8 = 9;
    pl0Parser.T__9 = 10;
    pl0Parser.T__10 = 11;
    pl0Parser.T__11 = 12;
    pl0Parser.T__12 = 13;
    pl0Parser.T__13 = 14;
    pl0Parser.T__14 = 15;
    pl0Parser.T__15 = 16;
    pl0Parser.T__16 = 17;
    pl0Parser.T__17 = 18;
    pl0Parser.WRITE = 19;
    pl0Parser.WHILE = 20;
    pl0Parser.DO = 21;
    pl0Parser.IF = 22;
    pl0Parser.THEN = 23;
    pl0Parser.ODD = 24;
    pl0Parser.BEGIN = 25;
    pl0Parser.END = 26;
    pl0Parser.CALL = 27;
    pl0Parser.CONST = 28;
    pl0Parser.VAR = 29;
    pl0Parser.PROCEDURE = 30;
    pl0Parser.STRING = 31;
    pl0Parser.NUMBER = 32;
    pl0Parser.WS = 33;
    pl0Parser.RULE_program = 0;
    pl0Parser.RULE_block = 1;
    pl0Parser.RULE_consts = 2;
    pl0Parser.RULE_vars = 3;
    pl0Parser.RULE_procedure = 4;
    pl0Parser.RULE_statement = 5;
    pl0Parser.RULE_assignstmt = 6;
    pl0Parser.RULE_callstmt = 7;
    pl0Parser.RULE_writestmt = 8;
    pl0Parser.RULE_qstmt = 9;
    pl0Parser.RULE_bangstmt = 10;
    pl0Parser.RULE_beginstmt = 11;
    pl0Parser.RULE_ifstmt = 12;
    pl0Parser.RULE_whilestmt = 13;
    pl0Parser.RULE_condition = 14;
    pl0Parser.RULE_expression = 15;
    pl0Parser.RULE_term = 16;
    pl0Parser.RULE_factor = 17;
    pl0Parser.RULE_ident = 18;
    pl0Parser.RULE_number = 19;
    // tslint:disable:no-trailing-whitespace
    pl0Parser.ruleNames = [
        "program", "block", "consts", "vars", "procedure", "statement", "assignstmt",
        "callstmt", "writestmt", "qstmt", "bangstmt", "beginstmt", "ifstmt", "whilestmt",
        "condition", "expression", "term", "factor", "ident", "number",
    ];
    pl0Parser._LITERAL_NAMES = [
        undefined, "'.'", "'='", "','", "';'", "':='", "'?'", "'!'", "'#'", "'<'",
        "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'('", "')'",
    ];
    pl0Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "WRITE", "WHILE",
        "DO", "IF", "THEN", "ODD", "BEGIN", "END", "CALL", "CONST", "VAR", "PROCEDURE",
        "STRING", "NUMBER", "WS",
    ];
    pl0Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(pl0Parser._LITERAL_NAMES, pl0Parser._SYMBOLIC_NAMES, []);
    pl0Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xB3\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x03" +
        "\x05\x03/\n\x03\x03\x03\x05\x032\n\x03\x03\x03\x07\x035\n\x03\f\x03\x0E" +
        "\x038\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\v\x04\x03\x04" +
        "\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05P\n\x05\f\x05\x0E\x05" +
        "S\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
        "e\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
        "\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r{\n\r\f" +
        "\r\x0E\r~\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
        "\x10\x03\x10\x05\x10\x92\n\x10\x03\x11\x05\x11\x95\n\x11\x03\x11\x03\x11" +
        "\x03\x11\x07\x11\x9A\n\x11\f\x11\x0E\x11\x9D\v\x11\x03\x12\x03\x12\x03" +
        "\x12\x07\x12\xA2\n\x12\f\x12\x0E\x12\xA5\v\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x05\x13\xAD\n\x13\x03\x14\x03\x14\x03\x15\x03" +
        "\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02\x02\x05\x04\x02\x04\x04\n\x0E\x03\x02\x0F\x10" +
        "\x03\x02\x11\x12\x02\xB2\x02*\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x06" +
        ";\x03\x02\x02\x02\bK\x03\x02\x02\x02\nV\x03\x02\x02\x02\fd\x03\x02\x02" +
        "\x02\x0Ef\x03\x02\x02\x02\x10j\x03\x02\x02\x02\x12m\x03\x02\x02\x02\x14" +
        "p\x03\x02\x02\x02\x16s\x03\x02\x02\x02\x18v\x03\x02\x02\x02\x1A\x81\x03" +
        "\x02\x02\x02\x1C\x86\x03\x02\x02\x02\x1E\x91\x03\x02\x02\x02 \x94\x03" +
        "\x02\x02\x02\"\x9E\x03\x02\x02\x02$\xAC\x03\x02\x02\x02&\xAE\x03\x02\x02" +
        "\x02(\xB0\x03\x02\x02\x02*+\x05\x04\x03\x02+,\x07\x03\x02\x02,\x03\x03" +
        "\x02\x02\x02-/\x05\x06\x04\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03" +
        "\x02\x02\x0202\x05\b\x05\x0210\x03\x02\x02\x0212\x03\x02\x02\x0226\x03" +
        "\x02\x02\x0235\x05\n\x06\x0243\x03\x02\x02\x0258\x03\x02\x02\x0264\x03" +
        "\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02\x029:\x05" +
        "\f\x07\x02:\x05\x03\x02\x02\x02;<\x07\x1E\x02\x02<=\x05&\x14\x02=>\x07" +
        "\x04\x02\x02>F\x05(\x15\x02?@\x07\x05\x02\x02@A\x05&\x14\x02AB\x07\x04" +
        "\x02\x02BC\x05(\x15\x02CE\x03\x02\x02\x02D?\x03\x02\x02\x02EH\x03\x02" +
        "\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03\x02" +
        "\x02\x02IJ\x07\x06\x02\x02J\x07\x03\x02\x02\x02KL\x07\x1F\x02\x02LQ\x05" +
        "&\x14\x02MN\x07\x05\x02\x02NP\x05&\x14\x02OM\x03\x02\x02\x02PS\x03\x02" +
        "\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SQ\x03\x02" +
        "\x02\x02TU\x07\x06\x02\x02U\t\x03\x02\x02\x02VW\x07 \x02\x02WX\x05&\x14" +
        "\x02XY\x07\x06\x02\x02YZ\x05\x04\x03\x02Z[\x07\x06\x02\x02[\v\x03\x02" +
        "\x02\x02\\e\x05\x0E\b\x02]e\x05\x10\t\x02^e\x05\x12\n\x02_e\x05\x14\v" +
        "\x02`e\x05\x16\f\x02ae\x05\x18\r\x02be\x05\x1A\x0E\x02ce\x05\x1C\x0F\x02" +
        "d\\\x03\x02\x02\x02d]\x03\x02\x02\x02d^\x03\x02\x02\x02d_\x03\x02\x02" +
        "\x02d`\x03\x02\x02\x02da\x03\x02\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02" +
        "\x02de\x03\x02\x02\x02e\r\x03\x02\x02\x02fg\x05&\x14\x02gh\x07\x07\x02" +
        "\x02hi\x05 \x11\x02i\x0F\x03\x02\x02\x02jk\x07\x1D\x02\x02kl\x05&\x14" +
        "\x02l\x11\x03\x02\x02\x02mn\x07\x15\x02\x02no\x05&\x14\x02o\x13\x03\x02" +
        "\x02\x02pq\x07\b\x02\x02qr\x05&\x14\x02r\x15\x03\x02\x02\x02st\x07\t\x02" +
        "\x02tu\x05 \x11\x02u\x17\x03\x02\x02\x02vw\x07\x1B\x02\x02w|\x05\f\x07" +
        "\x02xy\x07\x06\x02\x02y{\x05\f\x07\x02zx\x03\x02\x02\x02{~\x03\x02\x02" +
        "\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F\x03\x02\x02\x02~|\x03\x02" +
        "\x02\x02\x7F\x80\x07\x1C\x02\x02\x80\x19\x03\x02\x02\x02\x81\x82\x07\x18" +
        "\x02\x02\x82\x83\x05\x1E\x10\x02\x83\x84\x07\x19\x02\x02\x84\x85\x05\f" +
        "\x07\x02\x85\x1B\x03\x02\x02\x02\x86\x87\x07\x16\x02\x02\x87\x88\x05\x1E" +
        "\x10\x02\x88\x89\x07\x17\x02\x02\x89\x8A\x05\f\x07\x02\x8A\x1D\x03\x02" +
        "\x02\x02\x8B\x8C\x07\x1A\x02\x02\x8C\x92\x05 \x11\x02\x8D\x8E\x05 \x11" +
        "\x02\x8E\x8F\t\x02\x02\x02\x8F\x90\x05 \x11\x02\x90\x92\x03\x02\x02\x02" +
        "\x91\x8B\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02\x92\x1F\x03\x02\x02\x02" +
        "\x93\x95\t\x03\x02\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02" +
        "\x95\x96\x03\x02\x02\x02\x96\x9B\x05\"\x12\x02\x97\x98\t\x03\x02\x02\x98" +
        "\x9A\x05\"\x12\x02\x99\x97\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B" +
        "\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C!\x03\x02\x02\x02\x9D" +
        "\x9B\x03\x02\x02\x02\x9E\xA3\x05$\x13\x02\x9F\xA0\t\x04\x02\x02\xA0\xA2" +
        "\x05$\x13\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1" +
        "\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4#\x03\x02\x02\x02\xA5\xA3" +
        "\x03\x02\x02\x02\xA6\xAD\x05&\x14\x02\xA7\xAD\x05(\x15\x02\xA8\xA9\x07" +
        "\x13\x02\x02\xA9\xAA\x05 \x11\x02\xAA\xAB\x07\x14\x02\x02\xAB\xAD\x03" +
        "\x02\x02\x02\xAC\xA6\x03\x02\x02\x02\xAC\xA7\x03\x02\x02\x02\xAC\xA8\x03" +
        "\x02\x02\x02\xAD%\x03\x02\x02\x02\xAE\xAF\x07!\x02\x02\xAF\'\x03\x02\x02" +
        "\x02\xB0\xB1\x07\"\x02\x02\xB1)\x03\x02\x02\x02\x0E.16FQd|\x91\x94\x9B" +
        "\xA3\xAC";
    return pl0Parser;
}(Parser_1.Parser));
exports.pl0Parser = pl0Parser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_program; },
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
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    BlockContext.prototype.consts = function () {
        return this.tryGetRuleContext(0, ConstsContext);
    };
    BlockContext.prototype.vars = function () {
        return this.tryGetRuleContext(0, VarsContext);
    };
    BlockContext.prototype.procedure = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ProcedureContext);
        }
        else {
            return this.getRuleContext(i, ProcedureContext);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var ConstsContext = /** @class */ (function (_super) {
    __extends(ConstsContext, _super);
    function ConstsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstsContext.prototype.CONST = function () { return this.getToken(pl0Parser.CONST, 0); };
    ConstsContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    ConstsContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    Object.defineProperty(ConstsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_consts; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstsContext.prototype.enterRule = function (listener) {
        if (listener.enterConsts) {
            listener.enterConsts(this);
        }
    };
    // @Override
    ConstsContext.prototype.exitRule = function (listener) {
        if (listener.exitConsts) {
            listener.exitConsts(this);
        }
    };
    // @Override
    ConstsContext.prototype.accept = function (visitor) {
        if (visitor.visitConsts) {
            return visitor.visitConsts(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstsContext = ConstsContext;
var VarsContext = /** @class */ (function (_super) {
    __extends(VarsContext, _super);
    function VarsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarsContext.prototype.VAR = function () { return this.getToken(pl0Parser.VAR, 0); };
    VarsContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    Object.defineProperty(VarsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_vars; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarsContext.prototype.enterRule = function (listener) {
        if (listener.enterVars) {
            listener.enterVars(this);
        }
    };
    // @Override
    VarsContext.prototype.exitRule = function (listener) {
        if (listener.exitVars) {
            listener.exitVars(this);
        }
    };
    // @Override
    VarsContext.prototype.accept = function (visitor) {
        if (visitor.visitVars) {
            return visitor.visitVars(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarsContext = VarsContext;
var ProcedureContext = /** @class */ (function (_super) {
    __extends(ProcedureContext, _super);
    function ProcedureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureContext.prototype.PROCEDURE = function () { return this.getToken(pl0Parser.PROCEDURE, 0); };
    ProcedureContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    ProcedureContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(ProcedureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_procedure; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure) {
            listener.enterProcedure(this);
        }
    };
    // @Override
    ProcedureContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure) {
            listener.exitProcedure(this);
        }
    };
    // @Override
    ProcedureContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure) {
            return visitor.visitProcedure(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureContext = ProcedureContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.assignstmt = function () {
        return this.tryGetRuleContext(0, AssignstmtContext);
    };
    StatementContext.prototype.callstmt = function () {
        return this.tryGetRuleContext(0, CallstmtContext);
    };
    StatementContext.prototype.writestmt = function () {
        return this.tryGetRuleContext(0, WritestmtContext);
    };
    StatementContext.prototype.qstmt = function () {
        return this.tryGetRuleContext(0, QstmtContext);
    };
    StatementContext.prototype.bangstmt = function () {
        return this.tryGetRuleContext(0, BangstmtContext);
    };
    StatementContext.prototype.beginstmt = function () {
        return this.tryGetRuleContext(0, BeginstmtContext);
    };
    StatementContext.prototype.ifstmt = function () {
        return this.tryGetRuleContext(0, IfstmtContext);
    };
    StatementContext.prototype.whilestmt = function () {
        return this.tryGetRuleContext(0, WhilestmtContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_statement; },
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
var AssignstmtContext = /** @class */ (function (_super) {
    __extends(AssignstmtContext, _super);
    function AssignstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignstmtContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    AssignstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AssignstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_assignstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignstmt) {
            listener.enterAssignstmt(this);
        }
    };
    // @Override
    AssignstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignstmt) {
            listener.exitAssignstmt(this);
        }
    };
    // @Override
    AssignstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignstmt) {
            return visitor.visitAssignstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignstmtContext = AssignstmtContext;
var CallstmtContext = /** @class */ (function (_super) {
    __extends(CallstmtContext, _super);
    function CallstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallstmtContext.prototype.CALL = function () { return this.getToken(pl0Parser.CALL, 0); };
    CallstmtContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(CallstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_callstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCallstmt) {
            listener.enterCallstmt(this);
        }
    };
    // @Override
    CallstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCallstmt) {
            listener.exitCallstmt(this);
        }
    };
    // @Override
    CallstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCallstmt) {
            return visitor.visitCallstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallstmtContext = CallstmtContext;
var WritestmtContext = /** @class */ (function (_super) {
    __extends(WritestmtContext, _super);
    function WritestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WritestmtContext.prototype.WRITE = function () { return this.getToken(pl0Parser.WRITE, 0); };
    WritestmtContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(WritestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_writestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WritestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterWritestmt) {
            listener.enterWritestmt(this);
        }
    };
    // @Override
    WritestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitWritestmt) {
            listener.exitWritestmt(this);
        }
    };
    // @Override
    WritestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitWritestmt) {
            return visitor.visitWritestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WritestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WritestmtContext = WritestmtContext;
var QstmtContext = /** @class */ (function (_super) {
    __extends(QstmtContext, _super);
    function QstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QstmtContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(QstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_qstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterQstmt) {
            listener.enterQstmt(this);
        }
    };
    // @Override
    QstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitQstmt) {
            listener.exitQstmt(this);
        }
    };
    // @Override
    QstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitQstmt) {
            return visitor.visitQstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QstmtContext = QstmtContext;
var BangstmtContext = /** @class */ (function (_super) {
    __extends(BangstmtContext, _super);
    function BangstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BangstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(BangstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_bangstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BangstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterBangstmt) {
            listener.enterBangstmt(this);
        }
    };
    // @Override
    BangstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitBangstmt) {
            listener.exitBangstmt(this);
        }
    };
    // @Override
    BangstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitBangstmt) {
            return visitor.visitBangstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BangstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BangstmtContext = BangstmtContext;
var BeginstmtContext = /** @class */ (function (_super) {
    __extends(BeginstmtContext, _super);
    function BeginstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BeginstmtContext.prototype.BEGIN = function () { return this.getToken(pl0Parser.BEGIN, 0); };
    BeginstmtContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    BeginstmtContext.prototype.END = function () { return this.getToken(pl0Parser.END, 0); };
    Object.defineProperty(BeginstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_beginstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BeginstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterBeginstmt) {
            listener.enterBeginstmt(this);
        }
    };
    // @Override
    BeginstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitBeginstmt) {
            listener.exitBeginstmt(this);
        }
    };
    // @Override
    BeginstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitBeginstmt) {
            return visitor.visitBeginstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BeginstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BeginstmtContext = BeginstmtContext;
var IfstmtContext = /** @class */ (function (_super) {
    __extends(IfstmtContext, _super);
    function IfstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfstmtContext.prototype.IF = function () { return this.getToken(pl0Parser.IF, 0); };
    IfstmtContext.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    IfstmtContext.prototype.THEN = function () { return this.getToken(pl0Parser.THEN, 0); };
    IfstmtContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(IfstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_ifstmt; },
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
var WhilestmtContext = /** @class */ (function (_super) {
    __extends(WhilestmtContext, _super);
    function WhilestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhilestmtContext.prototype.WHILE = function () { return this.getToken(pl0Parser.WHILE, 0); };
    WhilestmtContext.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    WhilestmtContext.prototype.DO = function () { return this.getToken(pl0Parser.DO, 0); };
    WhilestmtContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WhilestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_whilestmt; },
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
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.ODD = function () { return this.tryGetToken(pl0Parser.ODD, 0); };
    ConditionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_condition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionContext = ConditionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_expression; },
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
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TermContext.prototype.enterRule = function (listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    };
    // @Override
    TermContext.prototype.exitRule = function (listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    };
    // @Override
    TermContext.prototype.accept = function (visitor) {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermContext = TermContext;
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    FactorContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    FactorContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FactorContext.prototype.enterRule = function (listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.exitRule = function (listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.accept = function (visitor) {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FactorContext = FactorContext;
var IdentContext = /** @class */ (function (_super) {
    __extends(IdentContext, _super);
    function IdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentContext.prototype.STRING = function () { return this.getToken(pl0Parser.STRING, 0); };
    Object.defineProperty(IdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_ident; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentContext.prototype.enterRule = function (listener) {
        if (listener.enterIdent) {
            listener.enterIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.exitRule = function (listener) {
        if (listener.exitIdent) {
            listener.exitIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.accept = function (visitor) {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentContext = IdentContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(pl0Parser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pl0Parser.RULE_number; },
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
