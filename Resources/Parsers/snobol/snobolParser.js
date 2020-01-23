"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/snobol/snobol.g4 by ANTLR 4.7.3-SNAPSHOT
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
var snobolParser = /** @class */ (function (_super) {
    __extends(snobolParser, _super);
    function snobolParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(snobolParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(snobolParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return snobolParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(snobolParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "snobol.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(snobolParser.prototype, "ruleNames", {
        // @Override
        get: function () { return snobolParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(snobolParser.prototype, "serializedATN", {
        // @Override
        get: function () { return snobolParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    snobolParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, snobolParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 84;
                            this.lin();
                        }
                    }
                    this.state = 87;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (snobolParser.AMP - 39)) | (1 << (snobolParser.COLON - 39)) | (1 << (snobolParser.END - 39)) | (1 << (snobolParser.STRING - 39)) | (1 << (snobolParser.COMMENT - 39)) | (1 << (snobolParser.EOL - 39)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.lin = function () {
        var _localctx = new LinContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, snobolParser.RULE_lin);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (snobolParser.AMP - 39)) | (1 << (snobolParser.COLON - 39)) | (1 << (snobolParser.END - 39)) | (1 << (snobolParser.STRING - 39)) | (1 << (snobolParser.COMMENT - 39)))) !== 0)) {
                    {
                        this.state = 89;
                        this.line();
                    }
                }
                this.state = 92;
                this.match(snobolParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, snobolParser.RULE_line);
        var _la;
        try {
            this.state = 116;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case snobolParser.AMP:
                case snobolParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 95;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 94;
                                        this.label();
                                    }
                                    break;
                            }
                            this.state = 97;
                            this.subject();
                            this.state = 99;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === snobolParser.STRINGLITERAL1 || _la === snobolParser.STRINGLITERAL2) {
                                {
                                    this.state = 98;
                                    this.pattern();
                                }
                            }
                            this.state = 107;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === snobolParser.EQ) {
                                {
                                    this.state = 101;
                                    this.match(snobolParser.EQ);
                                    this.state = 103;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 102;
                                                this.expression();
                                            }
                                        }
                                        this.state = 105;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << snobolParser.T__0) | (1 << snobolParser.T__2) | (1 << snobolParser.T__3) | (1 << snobolParser.T__4) | (1 << snobolParser.T__5) | (1 << snobolParser.T__6) | (1 << snobolParser.T__8) | (1 << snobolParser.T__9) | (1 << snobolParser.T__10) | (1 << snobolParser.T__11) | (1 << snobolParser.T__12) | (1 << snobolParser.T__13) | (1 << snobolParser.T__14) | (1 << snobolParser.T__15) | (1 << snobolParser.T__16) | (1 << snobolParser.T__17) | (1 << snobolParser.T__18) | (1 << snobolParser.T__19) | (1 << snobolParser.T__20) | (1 << snobolParser.T__21) | (1 << snobolParser.T__22) | (1 << snobolParser.T__23) | (1 << snobolParser.T__24) | (1 << snobolParser.T__25) | (1 << snobolParser.T__26) | (1 << snobolParser.T__28) | (1 << snobolParser.T__29) | (1 << snobolParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (snobolParser.LPAREN - 37)) | (1 << (snobolParser.AMP - 37)) | (1 << (snobolParser.STRINGLITERAL1 - 37)) | (1 << (snobolParser.STRINGLITERAL2 - 37)) | (1 << (snobolParser.STRING - 37)) | (1 << (snobolParser.INTEGER - 37)))) !== 0));
                                }
                            }
                            this.state = 111;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === snobolParser.COLON) {
                                {
                                    this.state = 109;
                                    this.match(snobolParser.COLON);
                                    this.state = 110;
                                    this.transfer();
                                }
                            }
                        }
                    }
                    break;
                case snobolParser.COLON:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 113;
                            this.match(snobolParser.COLON);
                            this.state = 114;
                            this.transfer();
                        }
                    }
                    break;
                case snobolParser.END:
                case snobolParser.COMMENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 115;
                        _la = this._input.LA(1);
                        if (!(_la === snobolParser.END || _la === snobolParser.COMMENT)) {
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
    snobolParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, snobolParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.match(snobolParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.subject = function () {
        var _localctx = new SubjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, snobolParser.RULE_subject);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 121;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === snobolParser.AMP) {
                        {
                            this.state = 120;
                            this.match(snobolParser.AMP);
                        }
                    }
                    this.state = 123;
                    this.match(snobolParser.STRING);
                    this.state = 134;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                        case 1:
                            {
                                this.state = 124;
                                this.match(snobolParser.T__0);
                                this.state = 125;
                                this.match(snobolParser.STRING);
                                this.state = 130;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === snobolParser.COMMA) {
                                    {
                                        {
                                            this.state = 126;
                                            this.match(snobolParser.COMMA);
                                            this.state = 127;
                                            this.match(snobolParser.STRING);
                                        }
                                    }
                                    this.state = 132;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 133;
                                this.match(snobolParser.T__1);
                            }
                            break;
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
    snobolParser.prototype.pattern = function () {
        var _localctx = new PatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, snobolParser.RULE_pattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                _la = this._input.LA(1);
                if (!(_la === snobolParser.STRINGLITERAL1 || _la === snobolParser.STRINGLITERAL2)) {
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
    snobolParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, snobolParser.RULE_expression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.multiplyingExpression();
                this.state = 143;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 139;
                                _la = this._input.LA(1);
                                if (!(_la === snobolParser.PLUS || _la === snobolParser.MINUS)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 140;
                                this.multiplyingExpression();
                            }
                        }
                    }
                    this.state = 145;
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
    snobolParser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, snobolParser.RULE_multiplyingExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 146;
                this.powExpression();
                this.state = 151;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 147;
                                _la = this._input.LA(1);
                                if (!(_la === snobolParser.TIMES || _la === snobolParser.DIV)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 148;
                                this.powExpression();
                            }
                        }
                    }
                    this.state = 153;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
    snobolParser.prototype.powExpression = function () {
        var _localctx = new PowExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, snobolParser.RULE_powExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.atom();
                this.state = 157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === snobolParser.POW) {
                    {
                        this.state = 155;
                        this.match(snobolParser.POW);
                        this.state = 156;
                        this.expression();
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
    snobolParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, snobolParser.RULE_atom);
        var _la;
        try {
            this.state = 177;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case snobolParser.STRINGLITERAL1:
                case snobolParser.STRINGLITERAL2:
                case snobolParser.INTEGER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 159;
                        _la = this._input.LA(1);
                        if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (snobolParser.STRINGLITERAL1 - 48)) | (1 << (snobolParser.STRINGLITERAL2 - 48)) | (1 << (snobolParser.INTEGER - 48)))) !== 0))) {
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
                case snobolParser.AMP:
                case snobolParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 160;
                        this.subject();
                    }
                    break;
                case snobolParser.T__2:
                case snobolParser.T__3:
                case snobolParser.T__4:
                case snobolParser.T__5:
                case snobolParser.T__6:
                case snobolParser.T__8:
                case snobolParser.T__9:
                case snobolParser.T__10:
                case snobolParser.T__11:
                case snobolParser.T__12:
                case snobolParser.T__13:
                case snobolParser.T__14:
                case snobolParser.T__15:
                case snobolParser.T__16:
                case snobolParser.T__17:
                case snobolParser.T__18:
                case snobolParser.T__19:
                case snobolParser.T__20:
                case snobolParser.T__21:
                case snobolParser.T__22:
                case snobolParser.T__23:
                case snobolParser.T__24:
                case snobolParser.T__25:
                case snobolParser.T__26:
                case snobolParser.T__28:
                case snobolParser.T__29:
                case snobolParser.T__30:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 161;
                        this.command();
                    }
                    break;
                case snobolParser.T__0:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 162;
                        this.match(snobolParser.T__0);
                        this.state = 163;
                        this.expression();
                        this.state = 168;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === snobolParser.COMMA) {
                            {
                                {
                                    this.state = 164;
                                    this.match(snobolParser.COMMA);
                                    this.state = 165;
                                    this.expression();
                                }
                            }
                            this.state = 170;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 171;
                        this.match(snobolParser.T__1);
                    }
                    break;
                case snobolParser.LPAREN:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 173;
                        this.match(snobolParser.LPAREN);
                        this.state = 174;
                        this.expression();
                        this.state = 175;
                        this.match(snobolParser.RPAREN);
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
    snobolParser.prototype.command = function () {
        var _localctx = new CommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, snobolParser.RULE_command);
        try {
            this.state = 206;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case snobolParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 179;
                        this.ident();
                    }
                    break;
                case snobolParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 180;
                        this.differ();
                    }
                    break;
                case snobolParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 181;
                        this.eq();
                    }
                    break;
                case snobolParser.T__5:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 182;
                        this.ne();
                    }
                    break;
                case snobolParser.T__6:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 183;
                        this.ge();
                    }
                    break;
                case snobolParser.T__8:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 184;
                        this.le();
                    }
                    break;
                case snobolParser.T__9:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 185;
                        this.lt();
                    }
                    break;
                case snobolParser.T__10:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 186;
                        this.integer();
                    }
                    break;
                case snobolParser.T__11:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 187;
                        this.lgt();
                    }
                    break;
                case snobolParser.T__12:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 188;
                        this.atan();
                    }
                    break;
                case snobolParser.T__13:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 189;
                        this.chop();
                    }
                    break;
                case snobolParser.T__14:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 190;
                        this.cos();
                    }
                    break;
                case snobolParser.T__15:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 191;
                        this.exp();
                    }
                    break;
                case snobolParser.T__16:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 192;
                        this.ln();
                    }
                    break;
                case snobolParser.T__17:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 193;
                        this.remdr();
                    }
                    break;
                case snobolParser.T__18:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 194;
                        this.sin();
                    }
                    break;
                case snobolParser.T__19:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 195;
                        this.tan();
                    }
                    break;
                case snobolParser.T__22:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 196;
                        this.date();
                    }
                    break;
                case snobolParser.T__20:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 197;
                        this.dupl();
                    }
                    break;
                case snobolParser.T__21:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 198;
                        this.reverse();
                    }
                    break;
                case snobolParser.T__23:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 199;
                        this.replace();
                    }
                    break;
                case snobolParser.T__24:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 200;
                        this.size();
                    }
                    break;
                case snobolParser.T__25:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 201;
                        this.trim();
                    }
                    break;
                case snobolParser.T__26:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 202;
                        this.array();
                    }
                    break;
                case snobolParser.T__29:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 203;
                        this.sort();
                    }
                    break;
                case snobolParser.T__28:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 204;
                        this.table();
                    }
                    break;
                case snobolParser.T__30:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 205;
                        this.break_();
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
    snobolParser.prototype.ident = function () {
        var _localctx = new IdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, snobolParser.RULE_ident);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(snobolParser.T__2);
                this.state = 209;
                this.match(snobolParser.LPAREN);
                this.state = 210;
                this.expression();
                this.state = 211;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.differ = function () {
        var _localctx = new DifferContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, snobolParser.RULE_differ);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 213;
                this.match(snobolParser.T__3);
                this.state = 214;
                this.match(snobolParser.LPAREN);
                this.state = 215;
                this.expression();
                this.state = 216;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.eq = function () {
        var _localctx = new EqContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, snobolParser.RULE_eq);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(snobolParser.T__4);
                this.state = 219;
                this.match(snobolParser.LPAREN);
                this.state = 220;
                this.expression();
                this.state = 221;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.ne = function () {
        var _localctx = new NeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, snobolParser.RULE_ne);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 223;
                this.match(snobolParser.T__5);
                this.state = 224;
                this.match(snobolParser.LPAREN);
                this.state = 225;
                this.expression();
                this.state = 226;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.ge = function () {
        var _localctx = new GeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, snobolParser.RULE_ge);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this.match(snobolParser.T__6);
                this.state = 229;
                this.match(snobolParser.LPAREN);
                this.state = 230;
                this.expression();
                this.state = 231;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.gt = function () {
        var _localctx = new GtContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, snobolParser.RULE_gt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 233;
                this.match(snobolParser.T__7);
                this.state = 234;
                this.match(snobolParser.LPAREN);
                this.state = 235;
                this.expression();
                this.state = 236;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.le = function () {
        var _localctx = new LeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, snobolParser.RULE_le);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(snobolParser.T__8);
                this.state = 239;
                this.match(snobolParser.LPAREN);
                this.state = 240;
                this.expression();
                this.state = 241;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.lt = function () {
        var _localctx = new LtContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, snobolParser.RULE_lt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                this.match(snobolParser.T__9);
                this.state = 244;
                this.match(snobolParser.LPAREN);
                this.state = 245;
                this.expression();
                this.state = 246;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, snobolParser.RULE_integer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this.match(snobolParser.T__10);
                this.state = 249;
                this.match(snobolParser.LPAREN);
                this.state = 250;
                this.expression();
                this.state = 251;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.lgt = function () {
        var _localctx = new LgtContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, snobolParser.RULE_lgt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                this.match(snobolParser.T__11);
                this.state = 254;
                this.match(snobolParser.LPAREN);
                this.state = 255;
                this.expression();
                this.state = 256;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.atan = function () {
        var _localctx = new AtanContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, snobolParser.RULE_atan);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(snobolParser.T__12);
                this.state = 259;
                this.match(snobolParser.LPAREN);
                this.state = 260;
                this.expression();
                this.state = 261;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.chop = function () {
        var _localctx = new ChopContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, snobolParser.RULE_chop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.match(snobolParser.T__13);
                this.state = 264;
                this.match(snobolParser.LPAREN);
                this.state = 265;
                this.expression();
                this.state = 266;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.cos = function () {
        var _localctx = new CosContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, snobolParser.RULE_cos);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this.match(snobolParser.T__14);
                this.state = 269;
                this.match(snobolParser.LPAREN);
                this.state = 270;
                this.expression();
                this.state = 271;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.exp = function () {
        var _localctx = new ExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, snobolParser.RULE_exp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
                this.match(snobolParser.T__15);
                this.state = 274;
                this.match(snobolParser.LPAREN);
                this.state = 275;
                this.expression();
                this.state = 276;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.ln = function () {
        var _localctx = new LnContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, snobolParser.RULE_ln);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.match(snobolParser.T__16);
                this.state = 279;
                this.match(snobolParser.LPAREN);
                this.state = 280;
                this.expression();
                this.state = 281;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.remdr = function () {
        var _localctx = new RemdrContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, snobolParser.RULE_remdr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.match(snobolParser.T__17);
                this.state = 284;
                this.match(snobolParser.LPAREN);
                this.state = 285;
                this.expression();
                this.state = 286;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.sin = function () {
        var _localctx = new SinContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, snobolParser.RULE_sin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this.match(snobolParser.T__18);
                this.state = 289;
                this.match(snobolParser.LPAREN);
                this.state = 290;
                this.expression();
                this.state = 291;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.tan = function () {
        var _localctx = new TanContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, snobolParser.RULE_tan);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 293;
                this.match(snobolParser.T__19);
                this.state = 294;
                this.match(snobolParser.LPAREN);
                this.state = 295;
                this.expression();
                this.state = 296;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.dupl = function () {
        var _localctx = new DuplContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, snobolParser.RULE_dupl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 298;
                this.match(snobolParser.T__20);
                this.state = 299;
                this.match(snobolParser.LPAREN);
                this.state = 300;
                this.expression();
                this.state = 301;
                this.match(snobolParser.COMMA);
                this.state = 302;
                this.expression();
                this.state = 303;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.reverse = function () {
        var _localctx = new ReverseContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, snobolParser.RULE_reverse);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.match(snobolParser.T__21);
                this.state = 306;
                this.match(snobolParser.LPAREN);
                this.state = 307;
                this.expression();
                this.state = 308;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.date = function () {
        var _localctx = new DateContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, snobolParser.RULE_date);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.match(snobolParser.T__22);
                this.state = 311;
                this.match(snobolParser.LPAREN);
                this.state = 312;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.replace = function () {
        var _localctx = new ReplaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, snobolParser.RULE_replace);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this.match(snobolParser.T__23);
                this.state = 315;
                this.match(snobolParser.LPAREN);
                this.state = 316;
                this.expression();
                this.state = 317;
                this.match(snobolParser.COMMA);
                this.state = 318;
                this.expression();
                this.state = 319;
                this.match(snobolParser.COMMA);
                this.state = 320;
                this.expression();
                this.state = 321;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.size = function () {
        var _localctx = new SizeContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, snobolParser.RULE_size);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.match(snobolParser.T__24);
                this.state = 324;
                this.match(snobolParser.LPAREN);
                this.state = 325;
                this.expression();
                this.state = 326;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.trim = function () {
        var _localctx = new TrimContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, snobolParser.RULE_trim);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                this.match(snobolParser.T__25);
                this.state = 329;
                this.match(snobolParser.LPAREN);
                this.state = 330;
                this.expression();
                this.state = 331;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.array = function () {
        var _localctx = new ArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, snobolParser.RULE_array);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this.match(snobolParser.T__26);
                this.state = 334;
                this.match(snobolParser.LPAREN);
                this.state = 335;
                this.expression();
                this.state = 336;
                this.match(snobolParser.COMMA);
                this.state = 337;
                this.expression();
                this.state = 338;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.convert = function () {
        var _localctx = new ConvertContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, snobolParser.RULE_convert);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this.match(snobolParser.T__27);
                this.state = 341;
                this.match(snobolParser.LPAREN);
                this.state = 342;
                this.expression();
                this.state = 343;
                this.match(snobolParser.COMMA);
                this.state = 344;
                this.expression();
                this.state = 345;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.table = function () {
        var _localctx = new TableContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, snobolParser.RULE_table);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(snobolParser.T__28);
                this.state = 348;
                this.match(snobolParser.LPAREN);
                this.state = 349;
                this.expression();
                this.state = 350;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.sort = function () {
        var _localctx = new SortContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, snobolParser.RULE_sort);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this.match(snobolParser.T__29);
                this.state = 353;
                this.match(snobolParser.LPAREN);
                this.state = 354;
                this.expression();
                this.state = 355;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.break_ = function () {
        var _localctx = new Break_Context(this._ctx, this.state);
        this.enterRule(_localctx, 78, snobolParser.RULE_break_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 357;
                this.match(snobolParser.T__30);
                this.state = 358;
                this.match(snobolParser.LPAREN);
                this.state = 359;
                this.expression();
                this.state = 360;
                this.match(snobolParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    snobolParser.prototype.transfer = function () {
        var _localctx = new TransferContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, snobolParser.RULE_transfer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 371;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)) | (1 << (snobolParser.LPAREN - 32)))) !== 0)) {
                    {
                        this.state = 363;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)))) !== 0)) {
                            {
                                this.state = 362;
                                this.transferpre();
                            }
                        }
                        this.state = 365;
                        this.match(snobolParser.LPAREN);
                        this.state = 368;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case snobolParser.STRING:
                                {
                                    this.state = 366;
                                    this.label();
                                }
                                break;
                            case snobolParser.END:
                                {
                                    this.state = 367;
                                    this.match(snobolParser.END);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 370;
                        this.match(snobolParser.RPAREN);
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
    snobolParser.prototype.transferpre = function () {
        var _localctx = new TransferpreContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, snobolParser.RULE_transferpre);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                _la = this._input.LA(1);
                if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)))) !== 0))) {
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
    Object.defineProperty(snobolParser, "_ATN", {
        get: function () {
            if (!snobolParser.__ATN) {
                snobolParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(snobolParser._serializedATN));
            }
            return snobolParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    snobolParser.T__0 = 1;
    snobolParser.T__1 = 2;
    snobolParser.T__2 = 3;
    snobolParser.T__3 = 4;
    snobolParser.T__4 = 5;
    snobolParser.T__5 = 6;
    snobolParser.T__6 = 7;
    snobolParser.T__7 = 8;
    snobolParser.T__8 = 9;
    snobolParser.T__9 = 10;
    snobolParser.T__10 = 11;
    snobolParser.T__11 = 12;
    snobolParser.T__12 = 13;
    snobolParser.T__13 = 14;
    snobolParser.T__14 = 15;
    snobolParser.T__15 = 16;
    snobolParser.T__16 = 17;
    snobolParser.T__17 = 18;
    snobolParser.T__18 = 19;
    snobolParser.T__19 = 20;
    snobolParser.T__20 = 21;
    snobolParser.T__21 = 22;
    snobolParser.T__22 = 23;
    snobolParser.T__23 = 24;
    snobolParser.T__24 = 25;
    snobolParser.T__25 = 26;
    snobolParser.T__26 = 27;
    snobolParser.T__27 = 28;
    snobolParser.T__28 = 29;
    snobolParser.T__29 = 30;
    snobolParser.T__30 = 31;
    snobolParser.T__31 = 32;
    snobolParser.T__32 = 33;
    snobolParser.T__33 = 34;
    snobolParser.T__34 = 35;
    snobolParser.COMMA = 36;
    snobolParser.LPAREN = 37;
    snobolParser.RPAREN = 38;
    snobolParser.AMP = 39;
    snobolParser.PLUS = 40;
    snobolParser.MINUS = 41;
    snobolParser.TIMES = 42;
    snobolParser.DIV = 43;
    snobolParser.POW = 44;
    snobolParser.EQ = 45;
    snobolParser.COLON = 46;
    snobolParser.END = 47;
    snobolParser.STRINGLITERAL1 = 48;
    snobolParser.STRINGLITERAL2 = 49;
    snobolParser.STRING = 50;
    snobolParser.INTEGER = 51;
    snobolParser.REAL = 52;
    snobolParser.COMMENT = 53;
    snobolParser.EOL = 54;
    snobolParser.WS = 55;
    snobolParser.RULE_prog = 0;
    snobolParser.RULE_lin = 1;
    snobolParser.RULE_line = 2;
    snobolParser.RULE_label = 3;
    snobolParser.RULE_subject = 4;
    snobolParser.RULE_pattern = 5;
    snobolParser.RULE_expression = 6;
    snobolParser.RULE_multiplyingExpression = 7;
    snobolParser.RULE_powExpression = 8;
    snobolParser.RULE_atom = 9;
    snobolParser.RULE_command = 10;
    snobolParser.RULE_ident = 11;
    snobolParser.RULE_differ = 12;
    snobolParser.RULE_eq = 13;
    snobolParser.RULE_ne = 14;
    snobolParser.RULE_ge = 15;
    snobolParser.RULE_gt = 16;
    snobolParser.RULE_le = 17;
    snobolParser.RULE_lt = 18;
    snobolParser.RULE_integer = 19;
    snobolParser.RULE_lgt = 20;
    snobolParser.RULE_atan = 21;
    snobolParser.RULE_chop = 22;
    snobolParser.RULE_cos = 23;
    snobolParser.RULE_exp = 24;
    snobolParser.RULE_ln = 25;
    snobolParser.RULE_remdr = 26;
    snobolParser.RULE_sin = 27;
    snobolParser.RULE_tan = 28;
    snobolParser.RULE_dupl = 29;
    snobolParser.RULE_reverse = 30;
    snobolParser.RULE_date = 31;
    snobolParser.RULE_replace = 32;
    snobolParser.RULE_size = 33;
    snobolParser.RULE_trim = 34;
    snobolParser.RULE_array = 35;
    snobolParser.RULE_convert = 36;
    snobolParser.RULE_table = 37;
    snobolParser.RULE_sort = 38;
    snobolParser.RULE_break_ = 39;
    snobolParser.RULE_transfer = 40;
    snobolParser.RULE_transferpre = 41;
    // tslint:disable:no-trailing-whitespace
    snobolParser.ruleNames = [
        "prog", "lin", "line", "label", "subject", "pattern", "expression", "multiplyingExpression",
        "powExpression", "atom", "command", "ident", "differ", "eq", "ne", "ge",
        "gt", "le", "lt", "integer", "lgt", "atan", "chop", "cos", "exp", "ln",
        "remdr", "sin", "tan", "dupl", "reverse", "date", "replace", "size", "trim",
        "array", "convert", "table", "sort", "break_", "transfer", "transferpre",
    ];
    snobolParser._LITERAL_NAMES = [
        undefined, "'['", "']'", "'ident'", "'differ'", "'eq'", "'ne'", "'ge'",
        "'gt'", "'le'", "'lt'", "'integer'", "'lgt'", "'atan'", "'chop'", "'cos'",
        "'exp'", "'ln'", "'remdr'", "'sin'", "'tan'", "'dupl'", "'reverse'", "'date'",
        "'replace'", "'size'", "'trim'", "'array'", "'convert'", "'table'", "'sort'",
        "'break'", "'f'", "'F'", "'s'", "'S'", "','", "'('", "')'", "'&'", "'+'",
        "'-'", "'*'", "'/'", "'^'", "'='", "':'", "'END'",
    ];
    snobolParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "COMMA", "LPAREN", "RPAREN", "AMP", "PLUS", "MINUS", "TIMES",
        "DIV", "POW", "EQ", "COLON", "END", "STRINGLITERAL1", "STRINGLITERAL2",
        "STRING", "INTEGER", "REAL", "COMMENT", "EOL", "WS",
    ];
    snobolParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(snobolParser._LITERAL_NAMES, snobolParser._SYMBOLIC_NAMES, []);
    snobolParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\u017A\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x03\x02\x06\x02X\n\x02\r\x02\x0E\x02Y\x03\x03\x05\x03]\n\x03\x03\x03" +
        "\x03\x03\x03\x04\x05\x04b\n\x04\x03\x04\x03\x04\x05\x04f\n\x04\x03\x04" +
        "\x03\x04\x06\x04j\n\x04\r\x04\x0E\x04k\x05\x04n\n\x04\x03\x04\x03\x04" +
        "\x05\x04r\n\x04\x03\x04\x03\x04\x03\x04\x05\x04w\n\x04\x03\x05\x03\x05" +
        "\x03\x06\x05\x06|\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
        "\x83\n\x06\f\x06\x0E\x06\x86\v\x06\x03\x06\x05\x06\x89\n\x06\x03\x07\x03" +
        "\x07\x03\b\x03\b\x03\b\x07\b\x90\n\b\f\b\x0E\b\x93\v\b\x03\t\x03\t\x03" +
        "\t\x07\t\x98\n\t\f\t\x0E\t\x9B\v\t\x03\n\x03\n\x03\n\x05\n\xA0\n\n\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xA9\n\v\f\v\x0E\v\xAC\v\v" +
        "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB4\n\v\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
        "\f\xD1\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
        "\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
        " \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%" +
        "\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03" +
        ")\x03)\x03*\x05*\u016E\n*\x03*\x03*\x03*\x05*\u0173\n*\x03*\x05*\u0176" +
        "\n*\x03+\x03+\x03+\x02\x02\x02,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
        "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
        "\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
        ":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
        "\x02\b\x04\x021177\x03\x0223\x03\x02*+\x03\x02,-\x04\x022355\x03\x02\"" +
        "%\x02\u0180\x02W\x03\x02\x02\x02\x04\\\x03\x02\x02\x02\x06v\x03\x02\x02" +
        "\x02\bx\x03\x02\x02\x02\n{\x03\x02\x02\x02\f\x8A\x03\x02\x02\x02\x0E\x8C" +
        "\x03\x02\x02\x02\x10\x94\x03\x02\x02\x02\x12\x9C\x03\x02\x02\x02\x14\xB3" +
        "\x03\x02\x02\x02\x16\xD0\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A\xD7" +
        "\x03\x02\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xE1\x03\x02\x02\x02 \xE6" +
        "\x03\x02\x02\x02\"\xEB\x03\x02\x02\x02$\xF0\x03\x02\x02\x02&\xF5\x03\x02" +
        "\x02\x02(\xFA\x03\x02\x02\x02*\xFF\x03\x02\x02\x02,\u0104\x03\x02\x02" +
        "\x02.\u0109\x03\x02\x02\x020\u010E\x03\x02\x02\x022\u0113\x03\x02\x02" +
        "\x024\u0118\x03\x02\x02\x026\u011D\x03\x02\x02\x028\u0122\x03\x02\x02" +
        "\x02:\u0127\x03\x02\x02\x02<\u012C\x03\x02\x02\x02>\u0133\x03\x02\x02" +
        "\x02@\u0138\x03\x02\x02\x02B\u013C\x03\x02\x02\x02D\u0145\x03\x02\x02" +
        "\x02F\u014A\x03\x02\x02\x02H\u014F\x03\x02\x02\x02J\u0156\x03\x02\x02" +
        "\x02L\u015D\x03\x02\x02\x02N\u0162\x03\x02\x02\x02P\u0167\x03\x02\x02" +
        "\x02R\u0175\x03\x02\x02\x02T\u0177\x03\x02\x02\x02VX\x05\x04\x03\x02W" +
        "V\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
        "Z\x03\x03\x02\x02\x02[]\x05\x06\x04\x02\\[\x03\x02\x02\x02\\]\x03\x02" +
        "\x02\x02]^\x03\x02\x02\x02^_\x078\x02\x02_\x05\x03\x02\x02\x02`b\x05\b" +
        "\x05\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x05\n" +
        "\x06\x02df\x05\f\x07\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fm\x03\x02" +
        "\x02\x02gi\x07/\x02\x02hj\x05\x0E\b\x02ih\x03\x02\x02\x02jk\x03\x02\x02" +
        "\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mg\x03\x02\x02" +
        "\x02mn\x03\x02\x02\x02nq\x03\x02\x02\x02op\x070\x02\x02pr\x05R*\x02qo" +
        "\x03\x02\x02\x02qr\x03\x02\x02\x02rw\x03\x02\x02\x02st\x070\x02\x02tw" +
        "\x05R*\x02uw\t\x02\x02\x02va\x03\x02\x02\x02vs\x03\x02\x02\x02vu\x03\x02" +
        "\x02\x02w\x07\x03\x02\x02\x02xy\x074\x02\x02y\t\x03\x02\x02\x02z|\x07" +
        ")\x02\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\x88\x07" +
        "4\x02\x02~\x7F\x07\x03\x02\x02\x7F\x84\x074\x02\x02\x80\x81\x07&\x02\x02" +
        "\x81\x83\x074\x02\x02\x82\x80\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02" +
        "\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02" +
        "\x86\x84\x03\x02\x02\x02\x87\x89\x07\x04\x02\x02\x88~\x03\x02\x02\x02" +
        "\x88\x89\x03\x02\x02\x02\x89\v\x03\x02\x02\x02\x8A\x8B\t\x03\x02\x02\x8B" +
        "\r\x03\x02\x02\x02\x8C\x91\x05\x10\t\x02\x8D\x8E\t\x04\x02\x02\x8E\x90" +
        "\x05\x10\t\x02\x8F\x8D\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F" +
        "\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x0F\x03\x02\x02\x02\x93\x91" +
        "\x03\x02\x02\x02\x94\x99\x05\x12\n\x02\x95\x96\t\x05\x02\x02\x96\x98\x05" +
        "\x12\n\x02\x97\x95\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03" +
        "\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x11\x03\x02\x02\x02\x9B\x99\x03" +
        "\x02\x02\x02\x9C\x9F\x05\x14\v\x02\x9D\x9E\x07.\x02\x02\x9E\xA0\x05\x0E" +
        "\b\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x13\x03\x02" +
        "\x02\x02\xA1\xB4\t\x06\x02\x02\xA2\xB4\x05\n\x06\x02\xA3\xB4\x05\x16\f" +
        "\x02\xA4\xA5\x07\x03\x02\x02\xA5\xAA\x05\x0E\b\x02\xA6\xA7\x07&\x02\x02" +
        "\xA7\xA9\x05\x0E\b\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02" +
        "\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02" +
        "\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x07\x04\x02\x02\xAE\xB4\x03\x02\x02\x02" +
        "\xAF\xB0\x07\'\x02\x02\xB0\xB1\x05\x0E\b\x02\xB1\xB2\x07(\x02\x02\xB2" +
        "\xB4\x03\x02\x02\x02\xB3\xA1\x03\x02\x02\x02\xB3\xA2\x03\x02\x02\x02\xB3" +
        "\xA3\x03\x02\x02\x02\xB3\xA4\x03\x02\x02\x02\xB3\xAF\x03\x02\x02\x02\xB4" +
        "\x15\x03\x02\x02\x02\xB5\xD1\x05\x18\r\x02\xB6\xD1\x05\x1A\x0E\x02\xB7" +
        "\xD1\x05\x1C\x0F\x02\xB8\xD1\x05\x1E\x10\x02\xB9\xD1\x05 \x11\x02\xBA" +
        "\xD1\x05$\x13\x02\xBB\xD1\x05&\x14\x02\xBC\xD1\x05(\x15\x02\xBD\xD1\x05" +
        "*\x16\x02\xBE\xD1\x05,\x17\x02\xBF\xD1\x05.\x18\x02\xC0\xD1\x050\x19\x02" +
        "\xC1\xD1\x052\x1A\x02\xC2\xD1\x054\x1B\x02\xC3\xD1\x056\x1C\x02\xC4\xD1" +
        "\x058\x1D\x02\xC5\xD1\x05:\x1E\x02\xC6\xD1\x05@!\x02\xC7\xD1\x05<\x1F" +
        "\x02\xC8\xD1\x05> \x02\xC9\xD1\x05B\"\x02\xCA\xD1\x05D#\x02\xCB\xD1\x05" +
        "F$\x02\xCC\xD1\x05H%\x02\xCD\xD1\x05N(\x02\xCE\xD1\x05L\'\x02\xCF\xD1" +
        "\x05P)\x02\xD0\xB5\x03\x02\x02\x02\xD0\xB6\x03\x02\x02\x02\xD0\xB7\x03" +
        "\x02\x02\x02\xD0\xB8\x03\x02\x02\x02\xD0\xB9\x03\x02\x02\x02\xD0\xBA\x03" +
        "\x02\x02\x02\xD0\xBB\x03\x02\x02\x02\xD0\xBC\x03\x02\x02\x02\xD0\xBD\x03" +
        "\x02\x02\x02\xD0\xBE\x03\x02\x02\x02\xD0\xBF\x03\x02\x02\x02\xD0\xC0\x03" +
        "\x02\x02\x02\xD0\xC1\x03\x02\x02\x02\xD0\xC2\x03\x02\x02\x02\xD0\xC3\x03" +
        "\x02\x02\x02\xD0\xC4\x03\x02\x02\x02\xD0\xC5\x03\x02\x02\x02\xD0\xC6\x03" +
        "\x02\x02\x02\xD0\xC7\x03\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD0\xC9\x03" +
        "\x02\x02\x02\xD0\xCA\x03\x02\x02\x02\xD0\xCB\x03\x02\x02\x02\xD0\xCC\x03" +
        "\x02\x02\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xCF\x03" +
        "\x02\x02\x02\xD1\x17\x03\x02\x02\x02\xD2\xD3\x07\x05\x02\x02\xD3\xD4\x07" +
        "\'\x02\x02\xD4\xD5\x05\x0E\b\x02\xD5\xD6\x07(\x02\x02\xD6\x19\x03\x02" +
        "\x02\x02\xD7\xD8\x07\x06\x02\x02\xD8\xD9\x07\'\x02\x02\xD9\xDA\x05\x0E" +
        "\b\x02\xDA\xDB\x07(\x02\x02\xDB\x1B\x03\x02\x02\x02\xDC\xDD\x07\x07\x02" +
        "\x02\xDD\xDE\x07\'\x02\x02\xDE\xDF\x05\x0E\b\x02\xDF\xE0\x07(\x02\x02" +
        "\xE0\x1D\x03\x02\x02\x02\xE1\xE2\x07\b\x02\x02\xE2\xE3\x07\'\x02\x02\xE3" +
        "\xE4\x05\x0E\b\x02\xE4\xE5\x07(\x02\x02\xE5\x1F\x03\x02\x02\x02\xE6\xE7" +
        "\x07\t\x02\x02\xE7\xE8\x07\'\x02\x02\xE8\xE9\x05\x0E\b\x02\xE9\xEA\x07" +
        "(\x02\x02\xEA!\x03\x02\x02\x02\xEB\xEC\x07\n\x02\x02\xEC\xED\x07\'\x02" +
        "\x02\xED\xEE\x05\x0E\b\x02\xEE\xEF\x07(\x02\x02\xEF#\x03\x02\x02\x02\xF0" +
        "\xF1\x07\v\x02\x02\xF1\xF2\x07\'\x02\x02\xF2\xF3\x05\x0E\b\x02\xF3\xF4" +
        "\x07(\x02\x02\xF4%\x03\x02\x02\x02\xF5\xF6\x07\f\x02\x02\xF6\xF7\x07\'" +
        "\x02\x02\xF7\xF8\x05\x0E\b\x02\xF8\xF9\x07(\x02\x02\xF9\'\x03\x02\x02" +
        "\x02\xFA\xFB\x07\r\x02\x02\xFB\xFC\x07\'\x02\x02\xFC\xFD\x05\x0E\b\x02" +
        "\xFD\xFE\x07(\x02\x02\xFE)\x03\x02\x02\x02\xFF\u0100\x07\x0E\x02\x02\u0100" +
        "\u0101\x07\'\x02\x02\u0101\u0102\x05\x0E\b\x02\u0102\u0103\x07(\x02\x02" +
        "\u0103+\x03\x02\x02\x02\u0104\u0105\x07\x0F\x02\x02\u0105\u0106\x07\'" +
        "\x02\x02\u0106\u0107\x05\x0E\b\x02\u0107\u0108\x07(\x02\x02\u0108-\x03" +
        "\x02\x02\x02\u0109\u010A\x07\x10\x02\x02\u010A\u010B\x07\'\x02\x02\u010B" +
        "\u010C\x05\x0E\b\x02\u010C\u010D\x07(\x02\x02\u010D/\x03\x02\x02\x02\u010E" +
        "\u010F\x07\x11\x02\x02\u010F\u0110\x07\'\x02\x02\u0110\u0111\x05\x0E\b" +
        "\x02\u0111\u0112\x07(\x02\x02\u01121\x03\x02\x02\x02\u0113\u0114\x07\x12" +
        "\x02\x02\u0114\u0115\x07\'\x02\x02\u0115\u0116\x05\x0E\b\x02\u0116\u0117" +
        "\x07(\x02\x02\u01173\x03\x02\x02\x02\u0118\u0119\x07\x13\x02\x02\u0119" +
        "\u011A\x07\'\x02\x02\u011A\u011B\x05\x0E\b\x02\u011B\u011C\x07(\x02\x02" +
        "\u011C5\x03\x02\x02\x02\u011D\u011E\x07\x14\x02\x02\u011E\u011F\x07\'" +
        "\x02\x02\u011F\u0120\x05\x0E\b\x02\u0120\u0121\x07(\x02\x02\u01217\x03" +
        "\x02\x02\x02\u0122\u0123\x07\x15\x02\x02\u0123\u0124\x07\'\x02\x02\u0124" +
        "\u0125\x05\x0E\b\x02\u0125\u0126\x07(\x02\x02\u01269\x03\x02\x02\x02\u0127" +
        "\u0128\x07\x16\x02\x02\u0128\u0129\x07\'\x02\x02\u0129\u012A\x05\x0E\b" +
        "\x02\u012A\u012B\x07(\x02\x02\u012B;\x03\x02\x02\x02\u012C\u012D\x07\x17" +
        "\x02\x02\u012D\u012E\x07\'\x02\x02\u012E\u012F\x05\x0E\b\x02\u012F\u0130" +
        "\x07&\x02\x02\u0130\u0131\x05\x0E\b\x02\u0131\u0132\x07(\x02\x02\u0132" +
        "=\x03\x02\x02\x02\u0133\u0134\x07\x18\x02\x02\u0134\u0135\x07\'\x02\x02" +
        "\u0135\u0136\x05\x0E\b\x02\u0136\u0137\x07(\x02\x02\u0137?\x03\x02\x02" +
        "\x02\u0138\u0139\x07\x19\x02\x02\u0139\u013A\x07\'\x02\x02\u013A\u013B" +
        "\x07(\x02\x02\u013BA\x03\x02\x02\x02\u013C\u013D\x07\x1A\x02\x02\u013D" +
        "\u013E\x07\'\x02\x02\u013E\u013F\x05\x0E\b\x02\u013F\u0140\x07&\x02\x02" +
        "\u0140\u0141\x05\x0E\b\x02\u0141\u0142\x07&\x02\x02\u0142\u0143\x05\x0E" +
        "\b\x02\u0143\u0144\x07(\x02\x02\u0144C\x03\x02\x02\x02\u0145\u0146\x07" +
        "\x1B\x02\x02\u0146\u0147\x07\'\x02\x02\u0147\u0148\x05\x0E\b\x02\u0148" +
        "\u0149\x07(\x02\x02\u0149E\x03\x02\x02\x02\u014A\u014B\x07\x1C\x02\x02" +
        "\u014B\u014C\x07\'\x02\x02\u014C\u014D\x05\x0E\b\x02\u014D\u014E\x07(" +
        "\x02\x02\u014EG\x03\x02\x02\x02\u014F\u0150\x07\x1D\x02\x02\u0150\u0151" +
        "\x07\'\x02\x02\u0151\u0152\x05\x0E\b\x02\u0152\u0153\x07&\x02\x02\u0153" +
        "\u0154\x05\x0E\b\x02\u0154\u0155\x07(\x02\x02\u0155I\x03\x02\x02\x02\u0156" +
        "\u0157\x07\x1E\x02\x02\u0157\u0158\x07\'\x02\x02\u0158\u0159\x05\x0E\b" +
        "\x02\u0159\u015A\x07&\x02\x02\u015A\u015B\x05\x0E\b\x02\u015B\u015C\x07" +
        "(\x02\x02\u015CK\x03\x02\x02\x02\u015D\u015E\x07\x1F\x02\x02\u015E\u015F" +
        "\x07\'\x02\x02\u015F\u0160\x05\x0E\b\x02\u0160\u0161\x07(\x02\x02\u0161" +
        "M\x03\x02\x02\x02\u0162\u0163\x07 \x02\x02\u0163\u0164\x07\'\x02\x02\u0164" +
        "\u0165\x05\x0E\b\x02\u0165\u0166\x07(\x02\x02\u0166O\x03\x02\x02\x02\u0167" +
        "\u0168\x07!\x02\x02\u0168\u0169\x07\'\x02\x02\u0169\u016A\x05\x0E\b\x02" +
        "\u016A\u016B\x07(\x02\x02\u016BQ\x03\x02\x02\x02\u016C\u016E\x05T+\x02" +
        "\u016D\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x03" +
        "\x02\x02\x02\u016F\u0172\x07\'\x02\x02\u0170\u0173\x05\b\x05\x02\u0171" +
        "\u0173\x071\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0171\x03\x02\x02" +
        "\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x07(\x02\x02\u0175\u016D" +
        "\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176S\x03\x02\x02\x02\u0177" +
        "\u0178\t\x07\x02\x02\u0178U\x03\x02\x02\x02\x16Y\\aekmqv{\x84\x88\x91" +
        "\x99\x9F\xAA\xB3\xD0\u016D\u0172\u0175";
    return snobolParser;
}(Parser_1.Parser));
exports.snobolParser = snobolParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.lin = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LinContext);
        }
        else {
            return this.getRuleContext(i, LinContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_prog; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgContext.prototype.enterRule = function (listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    };
    // @Override
    ProgContext.prototype.exitRule = function (listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    };
    // @Override
    ProgContext.prototype.accept = function (visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgContext = ProgContext;
var LinContext = /** @class */ (function (_super) {
    __extends(LinContext, _super);
    function LinContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LinContext.prototype.EOL = function () { return this.getToken(snobolParser.EOL, 0); };
    LinContext.prototype.line = function () {
        return this.tryGetRuleContext(0, LineContext);
    };
    Object.defineProperty(LinContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_lin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LinContext.prototype.enterRule = function (listener) {
        if (listener.enterLin) {
            listener.enterLin(this);
        }
    };
    // @Override
    LinContext.prototype.exitRule = function (listener) {
        if (listener.exitLin) {
            listener.exitLin(this);
        }
    };
    // @Override
    LinContext.prototype.accept = function (visitor) {
        if (visitor.visitLin) {
            return visitor.visitLin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LinContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LinContext = LinContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.subject = function () {
        return this.tryGetRuleContext(0, SubjectContext);
    };
    LineContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    LineContext.prototype.pattern = function () {
        return this.tryGetRuleContext(0, PatternContext);
    };
    LineContext.prototype.EQ = function () { return this.tryGetToken(snobolParser.EQ, 0); };
    LineContext.prototype.COLON = function () { return this.tryGetToken(snobolParser.COLON, 0); };
    LineContext.prototype.transfer = function () {
        return this.tryGetRuleContext(0, TransferContext);
    };
    LineContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LineContext.prototype.COMMENT = function () { return this.tryGetToken(snobolParser.COMMENT, 0); };
    LineContext.prototype.END = function () { return this.tryGetToken(snobolParser.END, 0); };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_line; },
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
    LabelContext.prototype.STRING = function () { return this.getToken(snobolParser.STRING, 0); };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_label; },
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
var SubjectContext = /** @class */ (function (_super) {
    __extends(SubjectContext, _super);
    function SubjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubjectContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.STRING);
        }
        else {
            return this.getToken(snobolParser.STRING, i);
        }
    };
    SubjectContext.prototype.AMP = function () { return this.tryGetToken(snobolParser.AMP, 0); };
    SubjectContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.COMMA);
        }
        else {
            return this.getToken(snobolParser.COMMA, i);
        }
    };
    Object.defineProperty(SubjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_subject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubjectContext.prototype.enterRule = function (listener) {
        if (listener.enterSubject) {
            listener.enterSubject(this);
        }
    };
    // @Override
    SubjectContext.prototype.exitRule = function (listener) {
        if (listener.exitSubject) {
            listener.exitSubject(this);
        }
    };
    // @Override
    SubjectContext.prototype.accept = function (visitor) {
        if (visitor.visitSubject) {
            return visitor.visitSubject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubjectContext = SubjectContext;
var PatternContext = /** @class */ (function (_super) {
    __extends(PatternContext, _super);
    function PatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PatternContext.prototype.STRINGLITERAL1 = function () { return this.tryGetToken(snobolParser.STRINGLITERAL1, 0); };
    PatternContext.prototype.STRINGLITERAL2 = function () { return this.tryGetToken(snobolParser.STRINGLITERAL2, 0); };
    Object.defineProperty(PatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_pattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PatternContext.prototype.enterRule = function (listener) {
        if (listener.enterPattern) {
            listener.enterPattern(this);
        }
    };
    // @Override
    PatternContext.prototype.exitRule = function (listener) {
        if (listener.exitPattern) {
            listener.exitPattern(this);
        }
    };
    // @Override
    PatternContext.prototype.accept = function (visitor) {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PatternContext = PatternContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.multiplyingExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplyingExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplyingExpressionContext);
        }
    };
    ExpressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.PLUS);
        }
        else {
            return this.getToken(snobolParser.PLUS, i);
        }
    };
    ExpressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.MINUS);
        }
        else {
            return this.getToken(snobolParser.MINUS, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_expression; },
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
var MultiplyingExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyingExpressionContext, _super);
    function MultiplyingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingExpressionContext.prototype.powExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PowExpressionContext);
        }
        else {
            return this.getRuleContext(i, PowExpressionContext);
        }
    };
    MultiplyingExpressionContext.prototype.TIMES = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.TIMES);
        }
        else {
            return this.getToken(snobolParser.TIMES, i);
        }
    };
    MultiplyingExpressionContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.DIV);
        }
        else {
            return this.getToken(snobolParser.DIV, i);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_multiplyingExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplyingExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplyingExpression) {
            listener.enterMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplyingExpression) {
            listener.exitMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplyingExpression) {
            return visitor.visitMultiplyingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyingExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplyingExpressionContext = MultiplyingExpressionContext;
var PowExpressionContext = /** @class */ (function (_super) {
    __extends(PowExpressionContext, _super);
    function PowExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PowExpressionContext.prototype.atom = function () {
        return this.getRuleContext(0, AtomContext);
    };
    PowExpressionContext.prototype.POW = function () { return this.tryGetToken(snobolParser.POW, 0); };
    PowExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(PowExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_powExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PowExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPowExpression) {
            listener.enterPowExpression(this);
        }
    };
    // @Override
    PowExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPowExpression) {
            listener.exitPowExpression(this);
        }
    };
    // @Override
    PowExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPowExpression) {
            return visitor.visitPowExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PowExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PowExpressionContext = PowExpressionContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.STRINGLITERAL1 = function () { return this.tryGetToken(snobolParser.STRINGLITERAL1, 0); };
    AtomContext.prototype.STRINGLITERAL2 = function () { return this.tryGetToken(snobolParser.STRINGLITERAL2, 0); };
    AtomContext.prototype.INTEGER = function () { return this.tryGetToken(snobolParser.INTEGER, 0); };
    AtomContext.prototype.subject = function () {
        return this.tryGetRuleContext(0, SubjectContext);
    };
    AtomContext.prototype.command = function () {
        return this.tryGetRuleContext(0, CommandContext);
    };
    AtomContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    AtomContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.COMMA);
        }
        else {
            return this.getToken(snobolParser.COMMA, i);
        }
    };
    AtomContext.prototype.LPAREN = function () { return this.tryGetToken(snobolParser.LPAREN, 0); };
    AtomContext.prototype.RPAREN = function () { return this.tryGetToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_atom; },
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
var CommandContext = /** @class */ (function (_super) {
    __extends(CommandContext, _super);
    function CommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommandContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    CommandContext.prototype.differ = function () {
        return this.tryGetRuleContext(0, DifferContext);
    };
    CommandContext.prototype.eq = function () {
        return this.tryGetRuleContext(0, EqContext);
    };
    CommandContext.prototype.ne = function () {
        return this.tryGetRuleContext(0, NeContext);
    };
    CommandContext.prototype.ge = function () {
        return this.tryGetRuleContext(0, GeContext);
    };
    CommandContext.prototype.le = function () {
        return this.tryGetRuleContext(0, LeContext);
    };
    CommandContext.prototype.lt = function () {
        return this.tryGetRuleContext(0, LtContext);
    };
    CommandContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    CommandContext.prototype.lgt = function () {
        return this.tryGetRuleContext(0, LgtContext);
    };
    CommandContext.prototype.atan = function () {
        return this.tryGetRuleContext(0, AtanContext);
    };
    CommandContext.prototype.chop = function () {
        return this.tryGetRuleContext(0, ChopContext);
    };
    CommandContext.prototype.cos = function () {
        return this.tryGetRuleContext(0, CosContext);
    };
    CommandContext.prototype.exp = function () {
        return this.tryGetRuleContext(0, ExpContext);
    };
    CommandContext.prototype.ln = function () {
        return this.tryGetRuleContext(0, LnContext);
    };
    CommandContext.prototype.remdr = function () {
        return this.tryGetRuleContext(0, RemdrContext);
    };
    CommandContext.prototype.sin = function () {
        return this.tryGetRuleContext(0, SinContext);
    };
    CommandContext.prototype.tan = function () {
        return this.tryGetRuleContext(0, TanContext);
    };
    CommandContext.prototype.date = function () {
        return this.tryGetRuleContext(0, DateContext);
    };
    CommandContext.prototype.dupl = function () {
        return this.tryGetRuleContext(0, DuplContext);
    };
    CommandContext.prototype.reverse = function () {
        return this.tryGetRuleContext(0, ReverseContext);
    };
    CommandContext.prototype.replace = function () {
        return this.tryGetRuleContext(0, ReplaceContext);
    };
    CommandContext.prototype.size = function () {
        return this.tryGetRuleContext(0, SizeContext);
    };
    CommandContext.prototype.trim = function () {
        return this.tryGetRuleContext(0, TrimContext);
    };
    CommandContext.prototype.array = function () {
        return this.tryGetRuleContext(0, ArrayContext);
    };
    CommandContext.prototype.sort = function () {
        return this.tryGetRuleContext(0, SortContext);
    };
    CommandContext.prototype.table = function () {
        return this.tryGetRuleContext(0, TableContext);
    };
    CommandContext.prototype.break_ = function () {
        return this.tryGetRuleContext(0, Break_Context);
    };
    Object.defineProperty(CommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommandContext.prototype.enterRule = function (listener) {
        if (listener.enterCommand) {
            listener.enterCommand(this);
        }
    };
    // @Override
    CommandContext.prototype.exitRule = function (listener) {
        if (listener.exitCommand) {
            listener.exitCommand(this);
        }
    };
    // @Override
    CommandContext.prototype.accept = function (visitor) {
        if (visitor.visitCommand) {
            return visitor.visitCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommandContext = CommandContext;
var IdentContext = /** @class */ (function (_super) {
    __extends(IdentContext, _super);
    function IdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    IdentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IdentContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(IdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_ident; },
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
var DifferContext = /** @class */ (function (_super) {
    __extends(DifferContext, _super);
    function DifferContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DifferContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    DifferContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    DifferContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(DifferContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_differ; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DifferContext.prototype.enterRule = function (listener) {
        if (listener.enterDiffer) {
            listener.enterDiffer(this);
        }
    };
    // @Override
    DifferContext.prototype.exitRule = function (listener) {
        if (listener.exitDiffer) {
            listener.exitDiffer(this);
        }
    };
    // @Override
    DifferContext.prototype.accept = function (visitor) {
        if (visitor.visitDiffer) {
            return visitor.visitDiffer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DifferContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DifferContext = DifferContext;
var EqContext = /** @class */ (function (_super) {
    __extends(EqContext, _super);
    function EqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    EqContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    EqContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(EqContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_eq; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqContext.prototype.enterRule = function (listener) {
        if (listener.enterEq) {
            listener.enterEq(this);
        }
    };
    // @Override
    EqContext.prototype.exitRule = function (listener) {
        if (listener.exitEq) {
            listener.exitEq(this);
        }
    };
    // @Override
    EqContext.prototype.accept = function (visitor) {
        if (visitor.visitEq) {
            return visitor.visitEq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqContext = EqContext;
var NeContext = /** @class */ (function (_super) {
    __extends(NeContext, _super);
    function NeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NeContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    NeContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    NeContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(NeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_ne; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NeContext.prototype.enterRule = function (listener) {
        if (listener.enterNe) {
            listener.enterNe(this);
        }
    };
    // @Override
    NeContext.prototype.exitRule = function (listener) {
        if (listener.exitNe) {
            listener.exitNe(this);
        }
    };
    // @Override
    NeContext.prototype.accept = function (visitor) {
        if (visitor.visitNe) {
            return visitor.visitNe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NeContext = NeContext;
var GeContext = /** @class */ (function (_super) {
    __extends(GeContext, _super);
    function GeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    GeContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    GeContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(GeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_ge; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeContext.prototype.enterRule = function (listener) {
        if (listener.enterGe) {
            listener.enterGe(this);
        }
    };
    // @Override
    GeContext.prototype.exitRule = function (listener) {
        if (listener.exitGe) {
            listener.exitGe(this);
        }
    };
    // @Override
    GeContext.prototype.accept = function (visitor) {
        if (visitor.visitGe) {
            return visitor.visitGe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeContext = GeContext;
var GtContext = /** @class */ (function (_super) {
    __extends(GtContext, _super);
    function GtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GtContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    GtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    GtContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(GtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_gt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GtContext.prototype.enterRule = function (listener) {
        if (listener.enterGt) {
            listener.enterGt(this);
        }
    };
    // @Override
    GtContext.prototype.exitRule = function (listener) {
        if (listener.exitGt) {
            listener.exitGt(this);
        }
    };
    // @Override
    GtContext.prototype.accept = function (visitor) {
        if (visitor.visitGt) {
            return visitor.visitGt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GtContext = GtContext;
var LeContext = /** @class */ (function (_super) {
    __extends(LeContext, _super);
    function LeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LeContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    LeContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LeContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(LeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_le; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LeContext.prototype.enterRule = function (listener) {
        if (listener.enterLe) {
            listener.enterLe(this);
        }
    };
    // @Override
    LeContext.prototype.exitRule = function (listener) {
        if (listener.exitLe) {
            listener.exitLe(this);
        }
    };
    // @Override
    LeContext.prototype.accept = function (visitor) {
        if (visitor.visitLe) {
            return visitor.visitLe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LeContext = LeContext;
var LtContext = /** @class */ (function (_super) {
    __extends(LtContext, _super);
    function LtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LtContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    LtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LtContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(LtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_lt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LtContext.prototype.enterRule = function (listener) {
        if (listener.enterLt) {
            listener.enterLt(this);
        }
    };
    // @Override
    LtContext.prototype.exitRule = function (listener) {
        if (listener.exitLt) {
            listener.exitLt(this);
        }
    };
    // @Override
    LtContext.prototype.accept = function (visitor) {
        if (visitor.visitLt) {
            return visitor.visitLt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LtContext = LtContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    IntegerContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IntegerContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_integer; },
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
var LgtContext = /** @class */ (function (_super) {
    __extends(LgtContext, _super);
    function LgtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LgtContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    LgtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LgtContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(LgtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_lgt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LgtContext.prototype.enterRule = function (listener) {
        if (listener.enterLgt) {
            listener.enterLgt(this);
        }
    };
    // @Override
    LgtContext.prototype.exitRule = function (listener) {
        if (listener.exitLgt) {
            listener.exitLgt(this);
        }
    };
    // @Override
    LgtContext.prototype.accept = function (visitor) {
        if (visitor.visitLgt) {
            return visitor.visitLgt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LgtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LgtContext = LgtContext;
var AtanContext = /** @class */ (function (_super) {
    __extends(AtanContext, _super);
    function AtanContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtanContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    AtanContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AtanContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(AtanContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_atan; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtanContext.prototype.enterRule = function (listener) {
        if (listener.enterAtan) {
            listener.enterAtan(this);
        }
    };
    // @Override
    AtanContext.prototype.exitRule = function (listener) {
        if (listener.exitAtan) {
            listener.exitAtan(this);
        }
    };
    // @Override
    AtanContext.prototype.accept = function (visitor) {
        if (visitor.visitAtan) {
            return visitor.visitAtan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtanContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtanContext = AtanContext;
var ChopContext = /** @class */ (function (_super) {
    __extends(ChopContext, _super);
    function ChopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChopContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    ChopContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ChopContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(ChopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_chop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChopContext.prototype.enterRule = function (listener) {
        if (listener.enterChop) {
            listener.enterChop(this);
        }
    };
    // @Override
    ChopContext.prototype.exitRule = function (listener) {
        if (listener.exitChop) {
            listener.exitChop(this);
        }
    };
    // @Override
    ChopContext.prototype.accept = function (visitor) {
        if (visitor.visitChop) {
            return visitor.visitChop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChopContext = ChopContext;
var CosContext = /** @class */ (function (_super) {
    __extends(CosContext, _super);
    function CosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CosContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    CosContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    CosContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(CosContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_cos; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CosContext.prototype.enterRule = function (listener) {
        if (listener.enterCos) {
            listener.enterCos(this);
        }
    };
    // @Override
    CosContext.prototype.exitRule = function (listener) {
        if (listener.exitCos) {
            listener.exitCos(this);
        }
    };
    // @Override
    CosContext.prototype.accept = function (visitor) {
        if (visitor.visitCos) {
            return visitor.visitCos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CosContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CosContext = CosContext;
var ExpContext = /** @class */ (function (_super) {
    __extends(ExpContext, _super);
    function ExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    ExpContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ExpContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(ExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpContext.prototype.enterRule = function (listener) {
        if (listener.enterExp) {
            listener.enterExp(this);
        }
    };
    // @Override
    ExpContext.prototype.exitRule = function (listener) {
        if (listener.exitExp) {
            listener.exitExp(this);
        }
    };
    // @Override
    ExpContext.prototype.accept = function (visitor) {
        if (visitor.visitExp) {
            return visitor.visitExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpContext = ExpContext;
var LnContext = /** @class */ (function (_super) {
    __extends(LnContext, _super);
    function LnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LnContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    LnContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LnContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(LnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_ln; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LnContext.prototype.enterRule = function (listener) {
        if (listener.enterLn) {
            listener.enterLn(this);
        }
    };
    // @Override
    LnContext.prototype.exitRule = function (listener) {
        if (listener.exitLn) {
            listener.exitLn(this);
        }
    };
    // @Override
    LnContext.prototype.accept = function (visitor) {
        if (visitor.visitLn) {
            return visitor.visitLn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LnContext = LnContext;
var RemdrContext = /** @class */ (function (_super) {
    __extends(RemdrContext, _super);
    function RemdrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RemdrContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    RemdrContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    RemdrContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(RemdrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_remdr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RemdrContext.prototype.enterRule = function (listener) {
        if (listener.enterRemdr) {
            listener.enterRemdr(this);
        }
    };
    // @Override
    RemdrContext.prototype.exitRule = function (listener) {
        if (listener.exitRemdr) {
            listener.exitRemdr(this);
        }
    };
    // @Override
    RemdrContext.prototype.accept = function (visitor) {
        if (visitor.visitRemdr) {
            return visitor.visitRemdr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RemdrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RemdrContext = RemdrContext;
var SinContext = /** @class */ (function (_super) {
    __extends(SinContext, _super);
    function SinContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SinContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    SinContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SinContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(SinContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_sin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SinContext.prototype.enterRule = function (listener) {
        if (listener.enterSin) {
            listener.enterSin(this);
        }
    };
    // @Override
    SinContext.prototype.exitRule = function (listener) {
        if (listener.exitSin) {
            listener.exitSin(this);
        }
    };
    // @Override
    SinContext.prototype.accept = function (visitor) {
        if (visitor.visitSin) {
            return visitor.visitSin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SinContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SinContext = SinContext;
var TanContext = /** @class */ (function (_super) {
    __extends(TanContext, _super);
    function TanContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TanContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    TanContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TanContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(TanContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_tan; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TanContext.prototype.enterRule = function (listener) {
        if (listener.enterTan) {
            listener.enterTan(this);
        }
    };
    // @Override
    TanContext.prototype.exitRule = function (listener) {
        if (listener.exitTan) {
            listener.exitTan(this);
        }
    };
    // @Override
    TanContext.prototype.accept = function (visitor) {
        if (visitor.visitTan) {
            return visitor.visitTan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TanContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TanContext = TanContext;
var DuplContext = /** @class */ (function (_super) {
    __extends(DuplContext, _super);
    function DuplContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DuplContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    DuplContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    DuplContext.prototype.COMMA = function () { return this.getToken(snobolParser.COMMA, 0); };
    DuplContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(DuplContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_dupl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DuplContext.prototype.enterRule = function (listener) {
        if (listener.enterDupl) {
            listener.enterDupl(this);
        }
    };
    // @Override
    DuplContext.prototype.exitRule = function (listener) {
        if (listener.exitDupl) {
            listener.exitDupl(this);
        }
    };
    // @Override
    DuplContext.prototype.accept = function (visitor) {
        if (visitor.visitDupl) {
            return visitor.visitDupl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DuplContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DuplContext = DuplContext;
var ReverseContext = /** @class */ (function (_super) {
    __extends(ReverseContext, _super);
    function ReverseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReverseContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    ReverseContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ReverseContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(ReverseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_reverse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReverseContext.prototype.enterRule = function (listener) {
        if (listener.enterReverse) {
            listener.enterReverse(this);
        }
    };
    // @Override
    ReverseContext.prototype.exitRule = function (listener) {
        if (listener.exitReverse) {
            listener.exitReverse(this);
        }
    };
    // @Override
    ReverseContext.prototype.accept = function (visitor) {
        if (visitor.visitReverse) {
            return visitor.visitReverse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReverseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReverseContext = ReverseContext;
var DateContext = /** @class */ (function (_super) {
    __extends(DateContext, _super);
    function DateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DateContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    DateContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(DateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_date; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DateContext.prototype.enterRule = function (listener) {
        if (listener.enterDate) {
            listener.enterDate(this);
        }
    };
    // @Override
    DateContext.prototype.exitRule = function (listener) {
        if (listener.exitDate) {
            listener.exitDate(this);
        }
    };
    // @Override
    DateContext.prototype.accept = function (visitor) {
        if (visitor.visitDate) {
            return visitor.visitDate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DateContext = DateContext;
var ReplaceContext = /** @class */ (function (_super) {
    __extends(ReplaceContext, _super);
    function ReplaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplaceContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    ReplaceContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ReplaceContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(snobolParser.COMMA);
        }
        else {
            return this.getToken(snobolParser.COMMA, i);
        }
    };
    ReplaceContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(ReplaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_replace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplaceContext.prototype.enterRule = function (listener) {
        if (listener.enterReplace) {
            listener.enterReplace(this);
        }
    };
    // @Override
    ReplaceContext.prototype.exitRule = function (listener) {
        if (listener.exitReplace) {
            listener.exitReplace(this);
        }
    };
    // @Override
    ReplaceContext.prototype.accept = function (visitor) {
        if (visitor.visitReplace) {
            return visitor.visitReplace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplaceContext = ReplaceContext;
var SizeContext = /** @class */ (function (_super) {
    __extends(SizeContext, _super);
    function SizeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SizeContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    SizeContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SizeContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(SizeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_size; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SizeContext.prototype.enterRule = function (listener) {
        if (listener.enterSize) {
            listener.enterSize(this);
        }
    };
    // @Override
    SizeContext.prototype.exitRule = function (listener) {
        if (listener.exitSize) {
            listener.exitSize(this);
        }
    };
    // @Override
    SizeContext.prototype.accept = function (visitor) {
        if (visitor.visitSize) {
            return visitor.visitSize(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SizeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SizeContext = SizeContext;
var TrimContext = /** @class */ (function (_super) {
    __extends(TrimContext, _super);
    function TrimContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TrimContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    TrimContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TrimContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(TrimContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_trim; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TrimContext.prototype.enterRule = function (listener) {
        if (listener.enterTrim) {
            listener.enterTrim(this);
        }
    };
    // @Override
    TrimContext.prototype.exitRule = function (listener) {
        if (listener.exitTrim) {
            listener.exitTrim(this);
        }
    };
    // @Override
    TrimContext.prototype.accept = function (visitor) {
        if (visitor.visitTrim) {
            return visitor.visitTrim(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TrimContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TrimContext = TrimContext;
var ArrayContext = /** @class */ (function (_super) {
    __extends(ArrayContext, _super);
    function ArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    ArrayContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ArrayContext.prototype.COMMA = function () { return this.getToken(snobolParser.COMMA, 0); };
    ArrayContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(ArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_array; },
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
var ConvertContext = /** @class */ (function (_super) {
    __extends(ConvertContext, _super);
    function ConvertContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConvertContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    ConvertContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ConvertContext.prototype.COMMA = function () { return this.getToken(snobolParser.COMMA, 0); };
    ConvertContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(ConvertContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_convert; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConvertContext.prototype.enterRule = function (listener) {
        if (listener.enterConvert) {
            listener.enterConvert(this);
        }
    };
    // @Override
    ConvertContext.prototype.exitRule = function (listener) {
        if (listener.exitConvert) {
            listener.exitConvert(this);
        }
    };
    // @Override
    ConvertContext.prototype.accept = function (visitor) {
        if (visitor.visitConvert) {
            return visitor.visitConvert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConvertContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConvertContext = ConvertContext;
var TableContext = /** @class */ (function (_super) {
    __extends(TableContext, _super);
    function TableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    TableContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TableContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(TableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_table; },
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
var SortContext = /** @class */ (function (_super) {
    __extends(SortContext, _super);
    function SortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SortContext.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    SortContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SortContext.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(SortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_sort; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SortContext.prototype.enterRule = function (listener) {
        if (listener.enterSort) {
            listener.enterSort(this);
        }
    };
    // @Override
    SortContext.prototype.exitRule = function (listener) {
        if (listener.exitSort) {
            listener.exitSort(this);
        }
    };
    // @Override
    SortContext.prototype.accept = function (visitor) {
        if (visitor.visitSort) {
            return visitor.visitSort(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SortContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SortContext = SortContext;
var Break_Context = /** @class */ (function (_super) {
    __extends(Break_Context, _super);
    function Break_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Break_Context.prototype.LPAREN = function () { return this.getToken(snobolParser.LPAREN, 0); };
    Break_Context.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Break_Context.prototype.RPAREN = function () { return this.getToken(snobolParser.RPAREN, 0); };
    Object.defineProperty(Break_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_break_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Break_Context.prototype.enterRule = function (listener) {
        if (listener.enterBreak_) {
            listener.enterBreak_(this);
        }
    };
    // @Override
    Break_Context.prototype.exitRule = function (listener) {
        if (listener.exitBreak_) {
            listener.exitBreak_(this);
        }
    };
    // @Override
    Break_Context.prototype.accept = function (visitor) {
        if (visitor.visitBreak_) {
            return visitor.visitBreak_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Break_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Break_Context = Break_Context;
var TransferContext = /** @class */ (function (_super) {
    __extends(TransferContext, _super);
    function TransferContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TransferContext.prototype.LPAREN = function () { return this.tryGetToken(snobolParser.LPAREN, 0); };
    TransferContext.prototype.RPAREN = function () { return this.tryGetToken(snobolParser.RPAREN, 0); };
    TransferContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    TransferContext.prototype.END = function () { return this.tryGetToken(snobolParser.END, 0); };
    TransferContext.prototype.transferpre = function () {
        return this.tryGetRuleContext(0, TransferpreContext);
    };
    Object.defineProperty(TransferContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_transfer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TransferContext.prototype.enterRule = function (listener) {
        if (listener.enterTransfer) {
            listener.enterTransfer(this);
        }
    };
    // @Override
    TransferContext.prototype.exitRule = function (listener) {
        if (listener.exitTransfer) {
            listener.exitTransfer(this);
        }
    };
    // @Override
    TransferContext.prototype.accept = function (visitor) {
        if (visitor.visitTransfer) {
            return visitor.visitTransfer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TransferContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TransferContext = TransferContext;
var TransferpreContext = /** @class */ (function (_super) {
    __extends(TransferpreContext, _super);
    function TransferpreContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TransferpreContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return snobolParser.RULE_transferpre; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TransferpreContext.prototype.enterRule = function (listener) {
        if (listener.enterTransferpre) {
            listener.enterTransferpre(this);
        }
    };
    // @Override
    TransferpreContext.prototype.exitRule = function (listener) {
        if (listener.exitTransferpre) {
            listener.exitTransferpre(this);
        }
    };
    // @Override
    TransferpreContext.prototype.accept = function (visitor) {
        if (visitor.visitTransferpre) {
            return visitor.visitTransferpre(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TransferpreContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TransferpreContext = TransferpreContext;
