"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/robotwars/robotwar.g4 by ANTLR 4.7.3-SNAPSHOT
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
var robotwarParser = /** @class */ (function (_super) {
    __extends(robotwarParser, _super);
    function robotwarParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(robotwarParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(robotwarParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return robotwarParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(robotwarParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "robotwar.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(robotwarParser.prototype, "ruleNames", {
        // @Override
        get: function () { return robotwarParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(robotwarParser.prototype, "serializedATN", {
        // @Override
        get: function () { return robotwarParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    robotwarParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, robotwarParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 38;
                            this.line();
                        }
                    }
                    this.state = 41;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__0) | (1 << robotwarParser.T__1) | (1 << robotwarParser.T__2) | (1 << robotwarParser.T__3) | (1 << robotwarParser.T__4) | (1 << robotwarParser.T__5) | (1 << robotwarParser.T__6) | (1 << robotwarParser.T__7) | (1 << robotwarParser.T__8) | (1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12) | (1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)) | (1 << (robotwarParser.ID - 32)) | (1 << (robotwarParser.NUMBER - 32)) | (1 << (robotwarParser.COMMENT - 32)) | (1 << (robotwarParser.EOL - 32)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, robotwarParser.RULE_line);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case robotwarParser.ID:
                        {
                            this.state = 43;
                            this.label();
                        }
                        break;
                    case robotwarParser.COMMENT:
                        {
                            this.state = 44;
                            this.comment();
                        }
                        break;
                    case robotwarParser.T__0:
                    case robotwarParser.T__1:
                    case robotwarParser.T__2:
                    case robotwarParser.T__3:
                    case robotwarParser.T__4:
                    case robotwarParser.T__5:
                    case robotwarParser.T__6:
                    case robotwarParser.T__7:
                    case robotwarParser.T__8:
                    case robotwarParser.T__9:
                    case robotwarParser.T__10:
                    case robotwarParser.T__11:
                    case robotwarParser.T__12:
                    case robotwarParser.A:
                    case robotwarParser.B:
                    case robotwarParser.C:
                    case robotwarParser.D:
                    case robotwarParser.E:
                    case robotwarParser.F:
                    case robotwarParser.G:
                    case robotwarParser.H:
                    case robotwarParser.I:
                    case robotwarParser.J:
                    case robotwarParser.K:
                    case robotwarParser.L:
                    case robotwarParser.M:
                    case robotwarParser.N:
                    case robotwarParser.O:
                    case robotwarParser.P:
                    case robotwarParser.Q:
                    case robotwarParser.R:
                    case robotwarParser.S:
                    case robotwarParser.T:
                    case robotwarParser.U:
                    case robotwarParser.V:
                    case robotwarParser.W:
                    case robotwarParser.X:
                    case robotwarParser.Y:
                    case robotwarParser.Z:
                    case robotwarParser.AIM:
                    case robotwarParser.SHOT:
                    case robotwarParser.RADAR:
                    case robotwarParser.DAMAGE:
                    case robotwarParser.SPEEDX:
                    case robotwarParser.SPEEDY:
                    case robotwarParser.RANDOM:
                    case robotwarParser.INDEX:
                    case robotwarParser.DATA:
                    case robotwarParser.NUMBER:
                        {
                            this.state = 45;
                            this.statement();
                        }
                        break;
                    case robotwarParser.EOL:
                        break;
                    default:
                        break;
                }
                this.state = 48;
                this.match(robotwarParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, robotwarParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this.match(robotwarParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, robotwarParser.RULE_statement);
        try {
            this.state = 58;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 52;
                        this.ifstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 53;
                        this.tostatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 54;
                        this.gosubstatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 55;
                        this.gotostatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 56;
                        this.endsubstatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 57;
                        this.accumstatement();
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
    robotwarParser.prototype.accumstatement = function () {
        var _localctx = new AccumstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, robotwarParser.RULE_accumstatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.accumexpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.accumexpression = function () {
        var _localctx = new AccumexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, robotwarParser.RULE_accumexpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case robotwarParser.T__0:
                        {
                            this.state = 62;
                            this.match(robotwarParser.T__0);
                        }
                        break;
                    case robotwarParser.T__1:
                        {
                            this.state = 63;
                            this.match(robotwarParser.T__1);
                        }
                        break;
                    case robotwarParser.T__2:
                        {
                            {
                                this.state = 64;
                                this.match(robotwarParser.T__2);
                                this.state = 65;
                                this.expression();
                            }
                        }
                        break;
                    case robotwarParser.T__3:
                        {
                            {
                                this.state = 66;
                                this.match(robotwarParser.T__3);
                                this.state = 67;
                                this.expression();
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 70;
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
    robotwarParser.prototype.gosubstatement = function () {
        var _localctx = new GosubstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, robotwarParser.RULE_gosubstatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.match(robotwarParser.T__4);
                this.state = 73;
                this.label();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.gotostatement = function () {
        var _localctx = new GotostatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, robotwarParser.RULE_gotostatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.match(robotwarParser.T__5);
                this.state = 76;
                this.label();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.tostatement = function () {
        var _localctx = new TostatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, robotwarParser.RULE_tostatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12) | (1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)) | (1 << (robotwarParser.NUMBER - 32)))) !== 0)) {
                    {
                        this.state = 78;
                        this.expression();
                    }
                }
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 81;
                            this.match(robotwarParser.T__6);
                            this.state = 82;
                            this.register();
                        }
                    }
                    this.state = 85;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === robotwarParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.endsubstatement = function () {
        var _localctx = new EndsubstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, robotwarParser.RULE_endsubstatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this.match(robotwarParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.ifstatement = function () {
        var _localctx = new IfstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, robotwarParser.RULE_ifstatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === robotwarParser.T__8) {
                    {
                        this.state = 89;
                        this.match(robotwarParser.T__8);
                    }
                }
                this.state = 92;
                this.condition();
                this.state = 94;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (robotwarParser.DOT - 49)) | (1 << (robotwarParser.COMMA - 49)) | (1 << (robotwarParser.EOL - 49)))) !== 0)) {
                    {
                        this.state = 93;
                        _la = this._input.LA(1);
                        if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (robotwarParser.DOT - 49)) | (1 << (robotwarParser.COMMA - 49)) | (1 << (robotwarParser.EOL - 49)))) !== 0))) {
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
                this.state = 96;
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
    robotwarParser.prototype.condition = function () {
        var _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, robotwarParser.RULE_condition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.expression();
                this.state = 99;
                this.comparison();
                this.state = 100;
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
    robotwarParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, robotwarParser.RULE_expression);
        try {
            var _alt = void 0;
            this.state = 115;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 102;
                            this.argument();
                            this.state = 108;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 103;
                                            this.operation();
                                            this.state = 104;
                                            this.argument();
                                        }
                                    }
                                }
                                this.state = 110;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 111;
                            this.operation();
                            this.state = 112;
                            this.argument();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 114;
                        this.argument();
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
    robotwarParser.prototype.operation = function () {
        var _localctx = new OperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, robotwarParser.RULE_operation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12))) !== 0))) {
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
    robotwarParser.prototype.comparison = function () {
        var _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, robotwarParser.RULE_comparison);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__0) | (1 << robotwarParser.T__1) | (1 << robotwarParser.T__2) | (1 << robotwarParser.T__3))) !== 0))) {
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
    robotwarParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, robotwarParser.RULE_argument);
        try {
            this.state = 124;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 121;
                        this.number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 122;
                        this.register();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 123;
                        this.match(robotwarParser.DATA);
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
    robotwarParser.prototype.register = function () {
        var _localctx = new RegisterContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, robotwarParser.RULE_register);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)))) !== 0))) {
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
    robotwarParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, robotwarParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === robotwarParser.T__9 || _la === robotwarParser.T__10) {
                    {
                        this.state = 128;
                        _la = this._input.LA(1);
                        if (!(_la === robotwarParser.T__9 || _la === robotwarParser.T__10)) {
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
                this.state = 131;
                this.match(robotwarParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    robotwarParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, robotwarParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(robotwarParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(robotwarParser, "_ATN", {
        get: function () {
            if (!robotwarParser.__ATN) {
                robotwarParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(robotwarParser._serializedATN));
            }
            return robotwarParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    robotwarParser.T__0 = 1;
    robotwarParser.T__1 = 2;
    robotwarParser.T__2 = 3;
    robotwarParser.T__3 = 4;
    robotwarParser.T__4 = 5;
    robotwarParser.T__5 = 6;
    robotwarParser.T__6 = 7;
    robotwarParser.T__7 = 8;
    robotwarParser.T__8 = 9;
    robotwarParser.T__9 = 10;
    robotwarParser.T__10 = 11;
    robotwarParser.T__11 = 12;
    robotwarParser.T__12 = 13;
    robotwarParser.A = 14;
    robotwarParser.B = 15;
    robotwarParser.C = 16;
    robotwarParser.D = 17;
    robotwarParser.E = 18;
    robotwarParser.F = 19;
    robotwarParser.G = 20;
    robotwarParser.H = 21;
    robotwarParser.I = 22;
    robotwarParser.J = 23;
    robotwarParser.K = 24;
    robotwarParser.L = 25;
    robotwarParser.M = 26;
    robotwarParser.N = 27;
    robotwarParser.O = 28;
    robotwarParser.P = 29;
    robotwarParser.Q = 30;
    robotwarParser.R = 31;
    robotwarParser.S = 32;
    robotwarParser.T = 33;
    robotwarParser.U = 34;
    robotwarParser.V = 35;
    robotwarParser.W = 36;
    robotwarParser.X = 37;
    robotwarParser.Y = 38;
    robotwarParser.Z = 39;
    robotwarParser.AIM = 40;
    robotwarParser.SHOT = 41;
    robotwarParser.RADAR = 42;
    robotwarParser.DAMAGE = 43;
    robotwarParser.SPEEDX = 44;
    robotwarParser.SPEEDY = 45;
    robotwarParser.RANDOM = 46;
    robotwarParser.INDEX = 47;
    robotwarParser.DATA = 48;
    robotwarParser.DOT = 49;
    robotwarParser.COMMA = 50;
    robotwarParser.ID = 51;
    robotwarParser.NUMBER = 52;
    robotwarParser.COMMENT = 53;
    robotwarParser.EOL = 54;
    robotwarParser.WS = 55;
    robotwarParser.RULE_program = 0;
    robotwarParser.RULE_line = 1;
    robotwarParser.RULE_label = 2;
    robotwarParser.RULE_statement = 3;
    robotwarParser.RULE_accumstatement = 4;
    robotwarParser.RULE_accumexpression = 5;
    robotwarParser.RULE_gosubstatement = 6;
    robotwarParser.RULE_gotostatement = 7;
    robotwarParser.RULE_tostatement = 8;
    robotwarParser.RULE_endsubstatement = 9;
    robotwarParser.RULE_ifstatement = 10;
    robotwarParser.RULE_condition = 11;
    robotwarParser.RULE_expression = 12;
    robotwarParser.RULE_operation = 13;
    robotwarParser.RULE_comparison = 14;
    robotwarParser.RULE_argument = 15;
    robotwarParser.RULE_register = 16;
    robotwarParser.RULE_number = 17;
    robotwarParser.RULE_comment = 18;
    // tslint:disable:no-trailing-whitespace
    robotwarParser.ruleNames = [
        "program", "line", "label", "statement", "accumstatement", "accumexpression",
        "gosubstatement", "gotostatement", "tostatement", "endsubstatement", "ifstatement",
        "condition", "expression", "operation", "comparison", "argument", "register",
        "number", "comment",
    ];
    robotwarParser._LITERAL_NAMES = [
        undefined, "'='", "'#'", "'<'", "'>'", "'GOSUB'", "'GOTO'", "'TO'", "'ENDSUB'",
        "'IF'", "'+'", "'-'", "'*'", "'/'", "'A'", "'B'", "'C'", "'D'", "'E'",
        "'F'", "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", "'N'", "'O'",
        "'P'", "'Q'", "'R'", "'S'", "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'",
        "'Z'", "'AIM'", "'SHOT'", "'RADAR'", "'DAMAGE'", "'SPEEDX'", "'SPEEDY'",
        "'RANDOM'", "'INDEX'", "'DATA'", "'.'", "','",
    ];
    robotwarParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AIM", "SHOT",
        "RADAR", "DAMAGE", "SPEEDX", "SPEEDY", "RANDOM", "INDEX", "DATA", "DOT",
        "COMMA", "ID", "NUMBER", "COMMENT", "EOL", "WS",
    ];
    robotwarParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(robotwarParser._LITERAL_NAMES, robotwarParser._SYMBOLIC_NAMES, []);
    robotwarParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\x8A\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x03\x02\x06\x02*\n\x02\r\x02\x0E\x02+\x03\x03" +
        "\x03\x03\x03\x03\x05\x031\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05=\n\x05\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07G\n\x07\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x05\nR\n\n\x03\n\x03" +
        "\n\x06\nV\n\n\r\n\x0E\nW\x03\v\x03\v\x03\f\x05\f]\n\f\x03\f\x03\f\x05" +
        "\fa\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x07\x0Em\n\x0E\f\x0E\x0E\x0Ep\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x05\x0Ev\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
        "\x05\x11\x7F\n\x11\x03\x12\x03\x12\x03\x13\x05\x13\x84\n\x13\x03\x13\x03" +
        "\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
        "\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x07\x04\x023488\x03\x02\f\x0F" +
        "\x03\x02\x03\x06\x03\x02\x102\x03\x02\f\r\x02\x8C\x02)\x03\x02\x02\x02" +
        "\x040\x03\x02\x02\x02\x064\x03\x02\x02\x02\b<\x03\x02\x02\x02\n>\x03\x02" +
        "\x02\x02\fF\x03\x02\x02\x02\x0EJ\x03\x02\x02\x02\x10M\x03\x02\x02\x02" +
        "\x12Q\x03\x02\x02\x02\x14Y\x03\x02\x02\x02\x16\\\x03\x02\x02\x02\x18d" +
        "\x03\x02\x02\x02\x1Au\x03\x02\x02\x02\x1Cw\x03\x02\x02\x02\x1Ey\x03\x02" +
        "\x02\x02 ~\x03\x02\x02\x02\"\x80\x03\x02\x02\x02$\x83\x03\x02\x02\x02" +
        "&\x87\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02\x02*+\x03\x02\x02" +
        "\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x03\x03\x02\x02\x02-1\x05\x06" +
        "\x04\x02.1\x05&\x14\x02/1\x05\b\x05\x020-\x03\x02\x02\x020.\x03\x02\x02" +
        "\x020/\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x0223\x078\x02" +
        "\x023\x05\x03\x02\x02\x0245\x075\x02\x025\x07\x03\x02\x02\x026=\x05\x16" +
        "\f\x027=\x05\x12\n\x028=\x05\x0E\b\x029=\x05\x10\t\x02:=\x05\x14\v\x02" +
        ";=\x05\n\x06\x02<6\x03\x02\x02\x02<7\x03\x02\x02\x02<8\x03\x02\x02\x02" +
        "<9\x03\x02\x02\x02<:\x03\x02\x02\x02<;\x03\x02\x02\x02=\t\x03\x02\x02" +
        "\x02>?\x05\f\x07\x02?\v\x03\x02\x02\x02@G\x07\x03\x02\x02AG\x07\x04\x02" +
        "\x02BC\x07\x05\x02\x02CG\x05\x1A\x0E\x02DE\x07\x06\x02\x02EG\x05\x1A\x0E" +
        "\x02F@\x03\x02\x02\x02FA\x03\x02\x02\x02FB\x03\x02\x02\x02FD\x03\x02\x02" +
        "\x02GH\x03\x02\x02\x02HI\x05\b\x05\x02I\r\x03\x02\x02\x02JK\x07\x07\x02" +
        "\x02KL\x05\x06\x04\x02L\x0F\x03\x02\x02\x02MN\x07\b\x02\x02NO\x05\x06" +
        "\x04\x02O\x11\x03\x02\x02\x02PR\x05\x1A\x0E\x02QP\x03\x02\x02\x02QR\x03" +
        "\x02\x02\x02RU\x03\x02\x02\x02ST\x07\t\x02\x02TV\x05\"\x12\x02US\x03\x02" +
        "\x02\x02VW\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\x13\x03" +
        "\x02\x02\x02YZ\x07\n\x02\x02Z\x15\x03\x02\x02\x02[]\x07\v\x02\x02\\[\x03" +
        "\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x05\x18\r\x02_a\t" +
        "\x02\x02\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x05" +
        "\b\x05\x02c\x17\x03\x02\x02\x02de\x05\x1A\x0E\x02ef\x05\x1E\x10\x02fg" +
        "\x05\x1A\x0E\x02g\x19\x03\x02\x02\x02hn\x05 \x11\x02ij\x05\x1C\x0F\x02" +
        "jk\x05 \x11\x02km\x03\x02\x02\x02li\x03\x02\x02\x02mp\x03\x02\x02\x02" +
        "nl\x03\x02\x02\x02no\x03\x02\x02\x02ov\x03\x02\x02\x02pn\x03\x02\x02\x02" +
        "qr\x05\x1C\x0F\x02rs\x05 \x11\x02sv\x03\x02\x02\x02tv\x05 \x11\x02uh\x03" +
        "\x02\x02\x02uq\x03\x02\x02\x02ut\x03\x02\x02\x02v\x1B\x03\x02\x02\x02" +
        "wx\t\x03\x02\x02x\x1D\x03\x02\x02\x02yz\t\x04\x02\x02z\x1F\x03\x02\x02" +
        "\x02{\x7F\x05$\x13\x02|\x7F\x05\"\x12\x02}\x7F\x072\x02\x02~{\x03\x02" +
        "\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F!\x03\x02\x02\x02\x80" +
        "\x81\t\x05\x02\x02\x81#\x03\x02\x02\x02\x82\x84\t\x06\x02\x02\x83\x82" +
        "\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86" +
        "\x076\x02\x02\x86%\x03\x02\x02\x02\x87\x88\x077\x02\x02\x88\'\x03\x02" +
        "\x02\x02\x0E+0<FQW\\`nu~\x83";
    return robotwarParser;
}(Parser_1.Parser));
exports.robotwarParser = robotwarParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_program; },
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
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.EOL = function () { return this.getToken(robotwarParser.EOL, 0); };
    LineContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    LineContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.ID = function () { return this.getToken(robotwarParser.ID, 0); };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_label; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelContext.prototype.enterRule = function (listener) {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.exitRule = function (listener) {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.accept = function (visitor) {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelContext = LabelContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.ifstatement = function () {
        return this.tryGetRuleContext(0, IfstatementContext);
    };
    StatementContext.prototype.tostatement = function () {
        return this.tryGetRuleContext(0, TostatementContext);
    };
    StatementContext.prototype.gosubstatement = function () {
        return this.tryGetRuleContext(0, GosubstatementContext);
    };
    StatementContext.prototype.gotostatement = function () {
        return this.tryGetRuleContext(0, GotostatementContext);
    };
    StatementContext.prototype.endsubstatement = function () {
        return this.tryGetRuleContext(0, EndsubstatementContext);
    };
    StatementContext.prototype.accumstatement = function () {
        return this.tryGetRuleContext(0, AccumstatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_statement; },
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
var AccumstatementContext = /** @class */ (function (_super) {
    __extends(AccumstatementContext, _super);
    function AccumstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AccumstatementContext.prototype.accumexpression = function () {
        return this.getRuleContext(0, AccumexpressionContext);
    };
    Object.defineProperty(AccumstatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_accumstatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccumstatementContext.prototype.enterRule = function (listener) {
        if (listener.enterAccumstatement) {
            listener.enterAccumstatement(this);
        }
    };
    // @Override
    AccumstatementContext.prototype.exitRule = function (listener) {
        if (listener.exitAccumstatement) {
            listener.exitAccumstatement(this);
        }
    };
    // @Override
    AccumstatementContext.prototype.accept = function (visitor) {
        if (visitor.visitAccumstatement) {
            return visitor.visitAccumstatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccumstatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccumstatementContext = AccumstatementContext;
var AccumexpressionContext = /** @class */ (function (_super) {
    __extends(AccumexpressionContext, _super);
    function AccumexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AccumexpressionContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    AccumexpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AccumexpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_accumexpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccumexpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAccumexpression) {
            listener.enterAccumexpression(this);
        }
    };
    // @Override
    AccumexpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAccumexpression) {
            listener.exitAccumexpression(this);
        }
    };
    // @Override
    AccumexpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAccumexpression) {
            return visitor.visitAccumexpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccumexpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccumexpressionContext = AccumexpressionContext;
var GosubstatementContext = /** @class */ (function (_super) {
    __extends(GosubstatementContext, _super);
    function GosubstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GosubstatementContext.prototype.label = function () {
        return this.getRuleContext(0, LabelContext);
    };
    Object.defineProperty(GosubstatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_gosubstatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GosubstatementContext.prototype.enterRule = function (listener) {
        if (listener.enterGosubstatement) {
            listener.enterGosubstatement(this);
        }
    };
    // @Override
    GosubstatementContext.prototype.exitRule = function (listener) {
        if (listener.exitGosubstatement) {
            listener.exitGosubstatement(this);
        }
    };
    // @Override
    GosubstatementContext.prototype.accept = function (visitor) {
        if (visitor.visitGosubstatement) {
            return visitor.visitGosubstatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GosubstatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GosubstatementContext = GosubstatementContext;
var GotostatementContext = /** @class */ (function (_super) {
    __extends(GotostatementContext, _super);
    function GotostatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GotostatementContext.prototype.label = function () {
        return this.getRuleContext(0, LabelContext);
    };
    Object.defineProperty(GotostatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_gotostatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GotostatementContext.prototype.enterRule = function (listener) {
        if (listener.enterGotostatement) {
            listener.enterGotostatement(this);
        }
    };
    // @Override
    GotostatementContext.prototype.exitRule = function (listener) {
        if (listener.exitGotostatement) {
            listener.exitGotostatement(this);
        }
    };
    // @Override
    GotostatementContext.prototype.accept = function (visitor) {
        if (visitor.visitGotostatement) {
            return visitor.visitGotostatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GotostatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GotostatementContext = GotostatementContext;
var TostatementContext = /** @class */ (function (_super) {
    __extends(TostatementContext, _super);
    function TostatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TostatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    TostatementContext.prototype.register = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RegisterContext);
        }
        else {
            return this.getRuleContext(i, RegisterContext);
        }
    };
    Object.defineProperty(TostatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_tostatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TostatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTostatement) {
            listener.enterTostatement(this);
        }
    };
    // @Override
    TostatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTostatement) {
            listener.exitTostatement(this);
        }
    };
    // @Override
    TostatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTostatement) {
            return visitor.visitTostatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TostatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TostatementContext = TostatementContext;
var EndsubstatementContext = /** @class */ (function (_super) {
    __extends(EndsubstatementContext, _super);
    function EndsubstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EndsubstatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_endsubstatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndsubstatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEndsubstatement) {
            listener.enterEndsubstatement(this);
        }
    };
    // @Override
    EndsubstatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEndsubstatement) {
            listener.exitEndsubstatement(this);
        }
    };
    // @Override
    EndsubstatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEndsubstatement) {
            return visitor.visitEndsubstatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndsubstatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndsubstatementContext = EndsubstatementContext;
var IfstatementContext = /** @class */ (function (_super) {
    __extends(IfstatementContext, _super);
    function IfstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfstatementContext.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    IfstatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    IfstatementContext.prototype.EOL = function () { return this.tryGetToken(robotwarParser.EOL, 0); };
    IfstatementContext.prototype.COMMA = function () { return this.tryGetToken(robotwarParser.COMMA, 0); };
    IfstatementContext.prototype.DOT = function () { return this.tryGetToken(robotwarParser.DOT, 0); };
    Object.defineProperty(IfstatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_ifstatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfstatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfstatement) {
            listener.enterIfstatement(this);
        }
    };
    // @Override
    IfstatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfstatement) {
            listener.exitIfstatement(this);
        }
    };
    // @Override
    IfstatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfstatement) {
            return visitor.visitIfstatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfstatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfstatementContext = IfstatementContext;
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ConditionContext.prototype.comparison = function () {
        return this.getRuleContext(0, ComparisonContext);
    };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_condition; },
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
    ExpressionContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    ExpressionContext.prototype.operation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OperationContext);
        }
        else {
            return this.getRuleContext(i, OperationContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_expression; },
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
var OperationContext = /** @class */ (function (_super) {
    __extends(OperationContext, _super);
    function OperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_operation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperationContext.prototype.enterRule = function (listener) {
        if (listener.enterOperation) {
            listener.enterOperation(this);
        }
    };
    // @Override
    OperationContext.prototype.exitRule = function (listener) {
        if (listener.exitOperation) {
            listener.exitOperation(this);
        }
    };
    // @Override
    OperationContext.prototype.accept = function (visitor) {
        if (visitor.visitOperation) {
            return visitor.visitOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperationContext = OperationContext;
var ComparisonContext = /** @class */ (function (_super) {
    __extends(ComparisonContext, _super);
    function ComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_comparison; },
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
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    ArgumentContext.prototype.register = function () {
        return this.tryGetRuleContext(0, RegisterContext);
    };
    ArgumentContext.prototype.DATA = function () { return this.tryGetToken(robotwarParser.DATA, 0); };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentContext = ArgumentContext;
var RegisterContext = /** @class */ (function (_super) {
    __extends(RegisterContext, _super);
    function RegisterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegisterContext.prototype.A = function () { return this.tryGetToken(robotwarParser.A, 0); };
    RegisterContext.prototype.B = function () { return this.tryGetToken(robotwarParser.B, 0); };
    RegisterContext.prototype.C = function () { return this.tryGetToken(robotwarParser.C, 0); };
    RegisterContext.prototype.D = function () { return this.tryGetToken(robotwarParser.D, 0); };
    RegisterContext.prototype.E = function () { return this.tryGetToken(robotwarParser.E, 0); };
    RegisterContext.prototype.F = function () { return this.tryGetToken(robotwarParser.F, 0); };
    RegisterContext.prototype.G = function () { return this.tryGetToken(robotwarParser.G, 0); };
    RegisterContext.prototype.H = function () { return this.tryGetToken(robotwarParser.H, 0); };
    RegisterContext.prototype.I = function () { return this.tryGetToken(robotwarParser.I, 0); };
    RegisterContext.prototype.J = function () { return this.tryGetToken(robotwarParser.J, 0); };
    RegisterContext.prototype.K = function () { return this.tryGetToken(robotwarParser.K, 0); };
    RegisterContext.prototype.L = function () { return this.tryGetToken(robotwarParser.L, 0); };
    RegisterContext.prototype.M = function () { return this.tryGetToken(robotwarParser.M, 0); };
    RegisterContext.prototype.N = function () { return this.tryGetToken(robotwarParser.N, 0); };
    RegisterContext.prototype.O = function () { return this.tryGetToken(robotwarParser.O, 0); };
    RegisterContext.prototype.P = function () { return this.tryGetToken(robotwarParser.P, 0); };
    RegisterContext.prototype.Q = function () { return this.tryGetToken(robotwarParser.Q, 0); };
    RegisterContext.prototype.R = function () { return this.tryGetToken(robotwarParser.R, 0); };
    RegisterContext.prototype.S = function () { return this.tryGetToken(robotwarParser.S, 0); };
    RegisterContext.prototype.T = function () { return this.tryGetToken(robotwarParser.T, 0); };
    RegisterContext.prototype.U = function () { return this.tryGetToken(robotwarParser.U, 0); };
    RegisterContext.prototype.V = function () { return this.tryGetToken(robotwarParser.V, 0); };
    RegisterContext.prototype.W = function () { return this.tryGetToken(robotwarParser.W, 0); };
    RegisterContext.prototype.X = function () { return this.tryGetToken(robotwarParser.X, 0); };
    RegisterContext.prototype.Y = function () { return this.tryGetToken(robotwarParser.Y, 0); };
    RegisterContext.prototype.Z = function () { return this.tryGetToken(robotwarParser.Z, 0); };
    RegisterContext.prototype.AIM = function () { return this.tryGetToken(robotwarParser.AIM, 0); };
    RegisterContext.prototype.SHOT = function () { return this.tryGetToken(robotwarParser.SHOT, 0); };
    RegisterContext.prototype.RADAR = function () { return this.tryGetToken(robotwarParser.RADAR, 0); };
    RegisterContext.prototype.SPEEDX = function () { return this.tryGetToken(robotwarParser.SPEEDX, 0); };
    RegisterContext.prototype.SPEEDY = function () { return this.tryGetToken(robotwarParser.SPEEDY, 0); };
    RegisterContext.prototype.RANDOM = function () { return this.tryGetToken(robotwarParser.RANDOM, 0); };
    RegisterContext.prototype.INDEX = function () { return this.tryGetToken(robotwarParser.INDEX, 0); };
    RegisterContext.prototype.DATA = function () { return this.tryGetToken(robotwarParser.DATA, 0); };
    RegisterContext.prototype.DAMAGE = function () { return this.tryGetToken(robotwarParser.DAMAGE, 0); };
    Object.defineProperty(RegisterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_register; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegisterContext.prototype.enterRule = function (listener) {
        if (listener.enterRegister) {
            listener.enterRegister(this);
        }
    };
    // @Override
    RegisterContext.prototype.exitRule = function (listener) {
        if (listener.exitRegister) {
            listener.exitRegister(this);
        }
    };
    // @Override
    RegisterContext.prototype.accept = function (visitor) {
        if (visitor.visitRegister) {
            return visitor.visitRegister(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegisterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegisterContext = RegisterContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(robotwarParser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_number; },
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
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(robotwarParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return robotwarParser.RULE_comment; },
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
