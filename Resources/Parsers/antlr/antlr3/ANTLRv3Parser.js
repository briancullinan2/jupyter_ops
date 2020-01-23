"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr3/ANTLRv3.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ANTLRv3Parser = /** @class */ (function (_super) {
    __extends(ANTLRv3Parser, _super);
    function ANTLRv3Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ANTLRv3Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ANTLRv3Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ANTLRv3Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANTLRv3Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ANTLRv3.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANTLRv3Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return ANTLRv3Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANTLRv3Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return ANTLRv3Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.grammarDef = function () {
        var _localctx = new GrammarDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ANTLRv3Parser.RULE_grammarDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.DOC_COMMENT) {
                    {
                        this.state = 86;
                        this.match(ANTLRv3Parser.DOC_COMMENT);
                    }
                }
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__0) | (1 << ANTLRv3Parser.T__1) | (1 << ANTLRv3Parser.T__2))) !== 0)) {
                    {
                        this.state = 89;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__0) | (1 << ANTLRv3Parser.T__1) | (1 << ANTLRv3Parser.T__2))) !== 0))) {
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
                this.state = 92;
                this.match(ANTLRv3Parser.T__3);
                this.state = 93;
                this.id();
                this.state = 94;
                this.match(ANTLRv3Parser.T__4);
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.OPTIONS) {
                    {
                        this.state = 95;
                        this.optionsSpec();
                    }
                }
                this.state = 99;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.TOKENS) {
                    {
                        this.state = 98;
                        this.tokensSpec();
                    }
                }
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv3Parser.SCOPE) {
                    {
                        {
                            this.state = 101;
                            this.attrScope();
                        }
                    }
                    this.state = 106;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv3Parser.T__7) {
                    {
                        {
                            this.state = 107;
                            this.action();
                        }
                    }
                    this.state = 112;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 113;
                            this.rule_();
                        }
                    }
                    this.state = 116;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (ANTLRv3Parser.T__10 - 11)) | (1 << (ANTLRv3Parser.T__11 - 11)) | (1 << (ANTLRv3Parser.T__12 - 11)) | (1 << (ANTLRv3Parser.DOC_COMMENT - 11)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (ANTLRv3Parser.FRAGMENT - 70)) | (1 << (ANTLRv3Parser.TOKEN_REF - 70)) | (1 << (ANTLRv3Parser.RULE_REF - 70)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.tokensSpec = function () {
        var _localctx = new TokensSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ANTLRv3Parser.RULE_tokensSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.match(ANTLRv3Parser.TOKENS);
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 119;
                            this.tokenSpec();
                        }
                    }
                    this.state = 122;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ANTLRv3Parser.TOKEN_REF);
                this.state = 124;
                this.match(ANTLRv3Parser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.tokenSpec = function () {
        var _localctx = new TokenSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ANTLRv3Parser.RULE_tokenSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                this.match(ANTLRv3Parser.TOKEN_REF);
                this.state = 130;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ANTLRv3Parser.T__6:
                        {
                            this.state = 127;
                            this.match(ANTLRv3Parser.T__6);
                            this.state = 128;
                            _la = this._input.LA(1);
                            if (!(_la === ANTLRv3Parser.CHAR_LITERAL || _la === ANTLRv3Parser.STRING_LITERAL)) {
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
                    case ANTLRv3Parser.T__4:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 132;
                this.match(ANTLRv3Parser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.attrScope = function () {
        var _localctx = new AttrScopeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ANTLRv3Parser.RULE_attrScope);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this.match(ANTLRv3Parser.SCOPE);
                this.state = 135;
                this.id();
                this.state = 136;
                this.match(ANTLRv3Parser.ACTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.action = function () {
        var _localctx = new ActionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ANTLRv3Parser.RULE_action);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.match(ANTLRv3Parser.T__7);
                this.state = 142;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 139;
                            this.actionScopeName();
                            this.state = 140;
                            this.match(ANTLRv3Parser.T__8);
                        }
                        break;
                }
                this.state = 144;
                this.id();
                this.state = 145;
                this.match(ANTLRv3Parser.ACTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.actionScopeName = function () {
        var _localctx = new ActionScopeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ANTLRv3Parser.RULE_actionScopeName);
        try {
            this.state = 150;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv3Parser.TOKEN_REF:
                case ANTLRv3Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 147;
                        this.id();
                    }
                    break;
                case ANTLRv3Parser.T__0:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 148;
                        this.match(ANTLRv3Parser.T__0);
                    }
                    break;
                case ANTLRv3Parser.T__1:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 149;
                        this.match(ANTLRv3Parser.T__1);
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
    ANTLRv3Parser.prototype.optionsSpec = function () {
        var _localctx = new OptionsSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ANTLRv3Parser.RULE_optionsSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.match(ANTLRv3Parser.OPTIONS);
                this.state = 156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 153;
                            this.option();
                            this.state = 154;
                            this.match(ANTLRv3Parser.T__4);
                        }
                    }
                    this.state = 158;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ANTLRv3Parser.TOKEN_REF || _la === ANTLRv3Parser.RULE_REF);
                this.state = 160;
                this.match(ANTLRv3Parser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.option = function () {
        var _localctx = new OptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ANTLRv3Parser.RULE_option);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.id();
                this.state = 163;
                this.match(ANTLRv3Parser.T__6);
                this.state = 164;
                this.optionValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.optionValue = function () {
        var _localctx = new OptionValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ANTLRv3Parser.RULE_optionValue);
        try {
            this.state = 171;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv3Parser.TOKEN_REF:
                case ANTLRv3Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 166;
                        this.id();
                    }
                    break;
                case ANTLRv3Parser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 167;
                        this.match(ANTLRv3Parser.STRING_LITERAL);
                    }
                    break;
                case ANTLRv3Parser.CHAR_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 168;
                        this.match(ANTLRv3Parser.CHAR_LITERAL);
                    }
                    break;
                case ANTLRv3Parser.INT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 169;
                        this.match(ANTLRv3Parser.INT);
                    }
                    break;
                case ANTLRv3Parser.T__9:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 170;
                        this.match(ANTLRv3Parser.T__9);
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
    ANTLRv3Parser.prototype.rule_ = function () {
        var _localctx = new Rule_Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, ANTLRv3Parser.RULE_rule_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.DOC_COMMENT) {
                    {
                        this.state = 173;
                        this.match(ANTLRv3Parser.DOC_COMMENT);
                    }
                }
                this.state = 177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__10) | (1 << ANTLRv3Parser.T__11) | (1 << ANTLRv3Parser.T__12))) !== 0) || _la === ANTLRv3Parser.FRAGMENT) {
                    {
                        this.state = 176;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__10) | (1 << ANTLRv3Parser.T__11) | (1 << ANTLRv3Parser.T__12))) !== 0) || _la === ANTLRv3Parser.FRAGMENT)) {
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
                this.state = 179;
                this.id();
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.BANG) {
                    {
                        this.state = 180;
                        this.match(ANTLRv3Parser.BANG);
                    }
                }
                this.state = 184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.ARG_ACTION) {
                    {
                        this.state = 183;
                        this.match(ANTLRv3Parser.ARG_ACTION);
                    }
                }
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.T__13) {
                    {
                        this.state = 186;
                        this.match(ANTLRv3Parser.T__13);
                        this.state = 187;
                        this.match(ANTLRv3Parser.ARG_ACTION);
                    }
                }
                this.state = 191;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.T__15) {
                    {
                        this.state = 190;
                        this.throwsSpec();
                    }
                }
                this.state = 194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.OPTIONS) {
                    {
                        this.state = 193;
                        this.optionsSpec();
                    }
                }
                this.state = 197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.SCOPE) {
                    {
                        this.state = 196;
                        this.ruleScopeSpec();
                    }
                }
                this.state = 202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv3Parser.T__7) {
                    {
                        {
                            this.state = 199;
                            this.ruleAction();
                        }
                    }
                    this.state = 204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 205;
                this.match(ANTLRv3Parser.T__14);
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
                    {
                        this.state = 206;
                        this.altList();
                    }
                }
                this.state = 209;
                this.match(ANTLRv3Parser.T__4);
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.T__20 || _la === ANTLRv3Parser.T__21) {
                    {
                        this.state = 210;
                        this.exceptionGroup();
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
    ANTLRv3Parser.prototype.ruleAction = function () {
        var _localctx = new RuleActionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ANTLRv3Parser.RULE_ruleAction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 213;
                this.match(ANTLRv3Parser.T__7);
                this.state = 214;
                this.id();
                this.state = 215;
                this.match(ANTLRv3Parser.ACTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.throwsSpec = function () {
        var _localctx = new ThrowsSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ANTLRv3Parser.RULE_throwsSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this.match(ANTLRv3Parser.T__15);
                this.state = 218;
                this.id();
                this.state = 223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv3Parser.T__16) {
                    {
                        {
                            this.state = 219;
                            this.match(ANTLRv3Parser.T__16);
                            this.state = 220;
                            this.id();
                        }
                    }
                    this.state = 225;
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
    ANTLRv3Parser.prototype.ruleScopeSpec = function () {
        var _localctx = new RuleScopeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ANTLRv3Parser.RULE_ruleScopeSpec);
        var _la;
        try {
            this.state = 252;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 226;
                        this.match(ANTLRv3Parser.SCOPE);
                        this.state = 227;
                        this.match(ANTLRv3Parser.ACTION);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 228;
                        this.match(ANTLRv3Parser.SCOPE);
                        this.state = 229;
                        this.id();
                        this.state = 234;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ANTLRv3Parser.T__16) {
                            {
                                {
                                    this.state = 230;
                                    this.match(ANTLRv3Parser.T__16);
                                    this.state = 231;
                                    this.id();
                                }
                            }
                            this.state = 236;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 237;
                        this.match(ANTLRv3Parser.T__4);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 239;
                        this.match(ANTLRv3Parser.SCOPE);
                        this.state = 240;
                        this.match(ANTLRv3Parser.ACTION);
                        this.state = 241;
                        this.match(ANTLRv3Parser.SCOPE);
                        this.state = 242;
                        this.id();
                        this.state = 247;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ANTLRv3Parser.T__16) {
                            {
                                {
                                    this.state = 243;
                                    this.match(ANTLRv3Parser.T__16);
                                    this.state = 244;
                                    this.id();
                                }
                            }
                            this.state = 249;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 250;
                        this.match(ANTLRv3Parser.T__4);
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
    ANTLRv3Parser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ANTLRv3Parser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.match(ANTLRv3Parser.T__17);
                this.state = 259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.T__14 || _la === ANTLRv3Parser.OPTIONS) {
                    {
                        this.state = 256;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv3Parser.OPTIONS) {
                            {
                                this.state = 255;
                                this.optionsSpec();
                            }
                        }
                        this.state = 258;
                        this.match(ANTLRv3Parser.T__14);
                    }
                }
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
                    {
                        this.state = 261;
                        this.alternative();
                    }
                }
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.REWRITE) {
                    {
                        this.state = 264;
                        this.rewrite();
                    }
                }
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv3Parser.T__18) {
                    {
                        {
                            this.state = 267;
                            this.match(ANTLRv3Parser.T__18);
                            this.state = 272;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
                                {
                                    this.state = 268;
                                    this.alternative();
                                    this.state = 270;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ANTLRv3Parser.REWRITE) {
                                        {
                                            this.state = 269;
                                            this.rewrite();
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.state = 278;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 279;
                this.match(ANTLRv3Parser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.altList = function () {
        var _localctx = new AltListContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ANTLRv3Parser.RULE_altList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this.alternative();
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.REWRITE) {
                    {
                        this.state = 282;
                        this.rewrite();
                    }
                }
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv3Parser.T__18) {
                    {
                        {
                            this.state = 285;
                            this.match(ANTLRv3Parser.T__18);
                            this.state = 290;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
                                {
                                    this.state = 286;
                                    this.alternative();
                                    this.state = 288;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ANTLRv3Parser.REWRITE) {
                                        {
                                            this.state = 287;
                                            this.rewrite();
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.state = 296;
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
    ANTLRv3Parser.prototype.alternative = function () {
        var _localctx = new AlternativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ANTLRv3Parser.RULE_alternative);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 297;
                            this.element();
                        }
                    }
                    this.state = 300;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.exceptionGroup = function () {
        var _localctx = new ExceptionGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ANTLRv3Parser.RULE_exceptionGroup);
        var _la;
        try {
            this.state = 311;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv3Parser.T__20:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 303;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 302;
                                    this.exceptionHandler();
                                }
                            }
                            this.state = 305;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ANTLRv3Parser.T__20);
                        this.state = 308;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv3Parser.T__21) {
                            {
                                this.state = 307;
                                this.finallyClause();
                            }
                        }
                    }
                    break;
                case ANTLRv3Parser.T__21:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 310;
                        this.finallyClause();
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
    ANTLRv3Parser.prototype.exceptionHandler = function () {
        var _localctx = new ExceptionHandlerContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ANTLRv3Parser.RULE_exceptionHandler);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.match(ANTLRv3Parser.T__20);
                this.state = 314;
                this.match(ANTLRv3Parser.ARG_ACTION);
                this.state = 315;
                this.match(ANTLRv3Parser.ACTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.finallyClause = function () {
        var _localctx = new FinallyClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ANTLRv3Parser.RULE_finallyClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 317;
                this.match(ANTLRv3Parser.T__21);
                this.state = 318;
                this.match(ANTLRv3Parser.ACTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ANTLRv3Parser.RULE_element);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 320;
                this.elementNoOptionSpec();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.elementNoOptionSpec = function () {
        var _localctx = new ElementNoOptionSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ANTLRv3Parser.RULE_elementNoOptionSpec);
        var _la;
        try {
            this.state = 345;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 322;
                        this.id();
                        this.state = 323;
                        _la = this._input.LA(1);
                        if (!(_la === ANTLRv3Parser.T__6 || _la === ANTLRv3Parser.T__22)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 324;
                        this.atom();
                        {
                            this.state = 326;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
                                {
                                    this.state = 325;
                                    this.ebnfSuffix();
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 328;
                        this.id();
                        this.state = 329;
                        _la = this._input.LA(1);
                        if (!(_la === ANTLRv3Parser.T__6 || _la === ANTLRv3Parser.T__22)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 330;
                        this.block();
                        {
                            this.state = 332;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
                                {
                                    this.state = 331;
                                    this.ebnfSuffix();
                                }
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 334;
                        this.atom();
                        {
                            this.state = 336;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
                                {
                                    this.state = 335;
                                    this.ebnfSuffix();
                                }
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 338;
                        this.ebnf();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 339;
                        this.match(ANTLRv3Parser.ACTION);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 340;
                        this.match(ANTLRv3Parser.SEMPRED);
                        {
                            this.state = 341;
                            this.match(ANTLRv3Parser.T__23);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 342;
                        this.treeSpec();
                        {
                            this.state = 343;
                            this.ebnfSuffix();
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
    ANTLRv3Parser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ANTLRv3Parser.RULE_atom);
        var _la;
        try {
            this.state = 354;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 347;
                        this.range();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 348;
                        this.terminal_();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 349;
                        this.notSet();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 350;
                        this.match(ANTLRv3Parser.RULE_REF);
                        this.state = 352;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv3Parser.ARG_ACTION) {
                            {
                                this.state = 351;
                                this.match(ANTLRv3Parser.ARG_ACTION);
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
    ANTLRv3Parser.prototype.notSet = function () {
        var _localctx = new NotSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ANTLRv3Parser.RULE_notSet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this.match(ANTLRv3Parser.T__24);
                this.state = 359;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ANTLRv3Parser.CHAR_LITERAL:
                    case ANTLRv3Parser.STRING_LITERAL:
                    case ANTLRv3Parser.TOKEN_REF:
                        {
                            this.state = 357;
                            this.notTerminal();
                        }
                        break;
                    case ANTLRv3Parser.T__17:
                        {
                            this.state = 358;
                            this.block();
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
    ANTLRv3Parser.prototype.treeSpec = function () {
        var _localctx = new TreeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ANTLRv3Parser.RULE_treeSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 361;
                this.match(ANTLRv3Parser.TREE_BEGIN);
                this.state = 362;
                this.element();
                this.state = 364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 363;
                            this.element();
                        }
                    }
                    this.state = 366;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0));
                this.state = 368;
                this.match(ANTLRv3Parser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.ebnf = function () {
        var _localctx = new EbnfContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ANTLRv3Parser.RULE_ebnf);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 370;
                this.block();
                this.state = 372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__23) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
                    {
                        this.state = 371;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__23) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0))) {
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
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.range = function () {
        var _localctx = new RangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ANTLRv3Parser.RULE_range);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(ANTLRv3Parser.CHAR_LITERAL);
                this.state = 375;
                this.match(ANTLRv3Parser.RANGE);
                this.state = 376;
                this.match(ANTLRv3Parser.CHAR_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.terminal_ = function () {
        var _localctx = new Terminal_Context(this._ctx, this.state);
        this.enterRule(_localctx, 52, ANTLRv3Parser.RULE_terminal_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 385;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ANTLRv3Parser.CHAR_LITERAL:
                        {
                            this.state = 378;
                            this.match(ANTLRv3Parser.CHAR_LITERAL);
                        }
                        break;
                    case ANTLRv3Parser.TOKEN_REF:
                        {
                            this.state = 379;
                            this.match(ANTLRv3Parser.TOKEN_REF);
                            {
                                this.state = 381;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === ANTLRv3Parser.ARG_ACTION) {
                                    {
                                        this.state = 380;
                                        this.match(ANTLRv3Parser.ARG_ACTION);
                                    }
                                }
                            }
                        }
                        break;
                    case ANTLRv3Parser.STRING_LITERAL:
                        {
                            this.state = 383;
                            this.match(ANTLRv3Parser.STRING_LITERAL);
                        }
                        break;
                    case ANTLRv3Parser.T__27:
                        {
                            this.state = 384;
                            this.match(ANTLRv3Parser.T__27);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv3Parser.ROOT || _la === ANTLRv3Parser.BANG) {
                    {
                        this.state = 387;
                        _la = this._input.LA(1);
                        if (!(_la === ANTLRv3Parser.ROOT || _la === ANTLRv3Parser.BANG)) {
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
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.notTerminal = function () {
        var _localctx = new NotTerminalContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ANTLRv3Parser.RULE_notTerminal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                _la = this._input.LA(1);
                if (!(_la === ANTLRv3Parser.CHAR_LITERAL || _la === ANTLRv3Parser.STRING_LITERAL || _la === ANTLRv3Parser.TOKEN_REF)) {
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
    ANTLRv3Parser.prototype.ebnfSuffix = function () {
        var _localctx = new EbnfSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ANTLRv3Parser.RULE_ebnfSuffix);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0))) {
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
    ANTLRv3Parser.prototype.rewrite = function () {
        var _localctx = new RewriteContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ANTLRv3Parser.RULE_rewrite);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 399;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 394;
                                this.match(ANTLRv3Parser.REWRITE);
                                this.state = 395;
                                this.match(ANTLRv3Parser.SEMPRED);
                                this.state = 396;
                                this.rewrite_alternative();
                            }
                        }
                    }
                    this.state = 401;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                }
                this.state = 402;
                this.match(ANTLRv3Parser.REWRITE);
                this.state = 403;
                this.rewrite_alternative();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.rewrite_alternative = function () {
        var _localctx = new Rewrite_alternativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ANTLRv3Parser.RULE_rewrite_alternative);
        try {
            this.state = 407;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv3Parser.T__4:
                case ANTLRv3Parser.T__18:
                case ANTLRv3Parser.T__19:
                case ANTLRv3Parser.REWRITE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 405;
                        this.rewrite_template();
                    }
                    break;
                case ANTLRv3Parser.T__17:
                case ANTLRv3Parser.T__28:
                case ANTLRv3Parser.CHAR_LITERAL:
                case ANTLRv3Parser.STRING_LITERAL:
                case ANTLRv3Parser.ACTION:
                case ANTLRv3Parser.TREE_BEGIN:
                case ANTLRv3Parser.TOKEN_REF:
                case ANTLRv3Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 406;
                        this.rewrite_tree_alternative();
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
    ANTLRv3Parser.prototype.rewrite_tree_block = function () {
        var _localctx = new Rewrite_tree_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ANTLRv3Parser.RULE_rewrite_tree_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 409;
                this.match(ANTLRv3Parser.T__17);
                this.state = 410;
                this.rewrite_tree_alternative();
                this.state = 411;
                this.match(ANTLRv3Parser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.rewrite_tree_alternative = function () {
        var _localctx = new Rewrite_tree_alternativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ANTLRv3Parser.RULE_rewrite_tree_alternative);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 413;
                            this.rewrite_tree_element();
                        }
                    }
                    this.state = 416;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__28 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ANTLRv3Parser.TREE_BEGIN - 71)) | (1 << (ANTLRv3Parser.TOKEN_REF - 71)) | (1 << (ANTLRv3Parser.RULE_REF - 71)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.rewrite_tree_element = function () {
        var _localctx = new Rewrite_tree_elementContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ANTLRv3Parser.RULE_rewrite_tree_element);
        try {
            this.state = 426;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 418;
                        this.rewrite_tree_atom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 419;
                        this.rewrite_tree_atom();
                        this.state = 420;
                        this.ebnfSuffix();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 422;
                        this.rewrite_tree();
                        {
                            this.state = 423;
                            this.ebnfSuffix();
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 425;
                        this.rewrite_tree_ebnf();
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
    ANTLRv3Parser.prototype.rewrite_tree_atom = function () {
        var _localctx = new Rewrite_tree_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ANTLRv3Parser.RULE_rewrite_tree_atom);
        var _la;
        try {
            this.state = 438;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv3Parser.CHAR_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 428;
                        this.match(ANTLRv3Parser.CHAR_LITERAL);
                    }
                    break;
                case ANTLRv3Parser.TOKEN_REF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 429;
                        this.match(ANTLRv3Parser.TOKEN_REF);
                        this.state = 431;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv3Parser.ARG_ACTION) {
                            {
                                this.state = 430;
                                this.match(ANTLRv3Parser.ARG_ACTION);
                            }
                        }
                    }
                    break;
                case ANTLRv3Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 433;
                        this.match(ANTLRv3Parser.RULE_REF);
                    }
                    break;
                case ANTLRv3Parser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 434;
                        this.match(ANTLRv3Parser.STRING_LITERAL);
                    }
                    break;
                case ANTLRv3Parser.T__28:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 435;
                        this.match(ANTLRv3Parser.T__28);
                        this.state = 436;
                        this.id();
                    }
                    break;
                case ANTLRv3Parser.ACTION:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 437;
                        this.match(ANTLRv3Parser.ACTION);
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
    ANTLRv3Parser.prototype.rewrite_tree_ebnf = function () {
        var _localctx = new Rewrite_tree_ebnfContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ANTLRv3Parser.RULE_rewrite_tree_ebnf);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                this.rewrite_tree_block();
                this.state = 441;
                this.ebnfSuffix();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.rewrite_tree = function () {
        var _localctx = new Rewrite_treeContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ANTLRv3Parser.RULE_rewrite_tree);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 443;
                this.match(ANTLRv3Parser.TREE_BEGIN);
                this.state = 444;
                this.rewrite_tree_atom();
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__28 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ANTLRv3Parser.TREE_BEGIN - 71)) | (1 << (ANTLRv3Parser.TOKEN_REF - 71)) | (1 << (ANTLRv3Parser.RULE_REF - 71)))) !== 0)) {
                    {
                        {
                            this.state = 445;
                            this.rewrite_tree_element();
                        }
                    }
                    this.state = 450;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 451;
                this.match(ANTLRv3Parser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.rewrite_template = function () {
        var _localctx = new Rewrite_templateContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ANTLRv3Parser.RULE_rewrite_template);
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
    ANTLRv3Parser.prototype.rewrite_template_ref = function () {
        var _localctx = new Rewrite_template_refContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ANTLRv3Parser.RULE_rewrite_template_ref);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.id();
                this.state = 456;
                this.match(ANTLRv3Parser.T__17);
                this.state = 457;
                this.rewrite_template_args();
                this.state = 458;
                this.match(ANTLRv3Parser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.rewrite_indirect_template_head = function () {
        var _localctx = new Rewrite_indirect_template_headContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ANTLRv3Parser.RULE_rewrite_indirect_template_head);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 460;
                this.match(ANTLRv3Parser.T__17);
                this.state = 461;
                this.match(ANTLRv3Parser.ACTION);
                this.state = 462;
                this.match(ANTLRv3Parser.T__19);
                this.state = 463;
                this.match(ANTLRv3Parser.T__17);
                this.state = 464;
                this.rewrite_template_args();
                this.state = 465;
                this.match(ANTLRv3Parser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.rewrite_template_args = function () {
        var _localctx = new Rewrite_template_argsContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ANTLRv3Parser.RULE_rewrite_template_args);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 467;
                this.rewrite_template_arg();
                this.state = 472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv3Parser.T__16) {
                    {
                        {
                            this.state = 468;
                            this.match(ANTLRv3Parser.T__16);
                            this.state = 469;
                            this.rewrite_template_arg();
                        }
                    }
                    this.state = 474;
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
    ANTLRv3Parser.prototype.rewrite_template_arg = function () {
        var _localctx = new Rewrite_template_argContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ANTLRv3Parser.RULE_rewrite_template_arg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 475;
                this.id();
                this.state = 476;
                this.match(ANTLRv3Parser.T__6);
                this.state = 477;
                this.match(ANTLRv3Parser.ACTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv3Parser.prototype.id = function () {
        var _localctx = new IdContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ANTLRv3Parser.RULE_id);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 479;
                _la = this._input.LA(1);
                if (!(_la === ANTLRv3Parser.TOKEN_REF || _la === ANTLRv3Parser.RULE_REF)) {
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
    Object.defineProperty(ANTLRv3Parser, "_ATN", {
        get: function () {
            if (!ANTLRv3Parser.__ATN) {
                ANTLRv3Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ANTLRv3Parser._serializedATN));
            }
            return ANTLRv3Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ANTLRv3Parser.T__0 = 1;
    ANTLRv3Parser.T__1 = 2;
    ANTLRv3Parser.T__2 = 3;
    ANTLRv3Parser.T__3 = 4;
    ANTLRv3Parser.T__4 = 5;
    ANTLRv3Parser.T__5 = 6;
    ANTLRv3Parser.T__6 = 7;
    ANTLRv3Parser.T__7 = 8;
    ANTLRv3Parser.T__8 = 9;
    ANTLRv3Parser.T__9 = 10;
    ANTLRv3Parser.T__10 = 11;
    ANTLRv3Parser.T__11 = 12;
    ANTLRv3Parser.T__12 = 13;
    ANTLRv3Parser.T__13 = 14;
    ANTLRv3Parser.T__14 = 15;
    ANTLRv3Parser.T__15 = 16;
    ANTLRv3Parser.T__16 = 17;
    ANTLRv3Parser.T__17 = 18;
    ANTLRv3Parser.T__18 = 19;
    ANTLRv3Parser.T__19 = 20;
    ANTLRv3Parser.T__20 = 21;
    ANTLRv3Parser.T__21 = 22;
    ANTLRv3Parser.T__22 = 23;
    ANTLRv3Parser.T__23 = 24;
    ANTLRv3Parser.T__24 = 25;
    ANTLRv3Parser.T__25 = 26;
    ANTLRv3Parser.T__26 = 27;
    ANTLRv3Parser.T__27 = 28;
    ANTLRv3Parser.T__28 = 29;
    ANTLRv3Parser.CHAR_LITERAL = 30;
    ANTLRv3Parser.STRING_LITERAL = 31;
    ANTLRv3Parser.DOUBLE_QUOTE_STRING_LITERAL = 32;
    ANTLRv3Parser.DOUBLE_ANGLE_STRING_LITERAL = 33;
    ANTLRv3Parser.INT = 34;
    ANTLRv3Parser.ARG_ACTION = 35;
    ANTLRv3Parser.ACTION = 36;
    ANTLRv3Parser.OPTIONS = 37;
    ANTLRv3Parser.TOKENS = 38;
    ANTLRv3Parser.DOC_COMMENT = 39;
    ANTLRv3Parser.PARSER = 40;
    ANTLRv3Parser.LEXER = 41;
    ANTLRv3Parser.RULE = 42;
    ANTLRv3Parser.BLOCK = 43;
    ANTLRv3Parser.OPTIONAL = 44;
    ANTLRv3Parser.CLOSURE = 45;
    ANTLRv3Parser.POSITIVE_CLOSURE = 46;
    ANTLRv3Parser.SYNPRED = 47;
    ANTLRv3Parser.CHAR_RANGE = 48;
    ANTLRv3Parser.EPSILON = 49;
    ANTLRv3Parser.ALT = 50;
    ANTLRv3Parser.EOR = 51;
    ANTLRv3Parser.EOB = 52;
    ANTLRv3Parser.EOA = 53;
    ANTLRv3Parser.ID = 54;
    ANTLRv3Parser.ARG = 55;
    ANTLRv3Parser.ARGLIST = 56;
    ANTLRv3Parser.RET = 57;
    ANTLRv3Parser.LEXER_GRAMMAR = 58;
    ANTLRv3Parser.PARSER_GRAMMAR = 59;
    ANTLRv3Parser.TREE_GRAMMAR = 60;
    ANTLRv3Parser.COMBINED_GRAMMAR = 61;
    ANTLRv3Parser.INITACTION = 62;
    ANTLRv3Parser.LABEL = 63;
    ANTLRv3Parser.TEMPLATE = 64;
    ANTLRv3Parser.SCOPE = 65;
    ANTLRv3Parser.SEMPRED = 66;
    ANTLRv3Parser.GATED_SEMPRED = 67;
    ANTLRv3Parser.SYN_SEMPRED = 68;
    ANTLRv3Parser.BACKTRACK_SEMPRED = 69;
    ANTLRv3Parser.FRAGMENT = 70;
    ANTLRv3Parser.TREE_BEGIN = 71;
    ANTLRv3Parser.ROOT = 72;
    ANTLRv3Parser.BANG = 73;
    ANTLRv3Parser.RANGE = 74;
    ANTLRv3Parser.REWRITE = 75;
    ANTLRv3Parser.SL_COMMENT = 76;
    ANTLRv3Parser.ML_COMMENT = 77;
    ANTLRv3Parser.WS = 78;
    ANTLRv3Parser.TOKEN_REF = 79;
    ANTLRv3Parser.RULE_REF = 80;
    ANTLRv3Parser.RULE_grammarDef = 0;
    ANTLRv3Parser.RULE_tokensSpec = 1;
    ANTLRv3Parser.RULE_tokenSpec = 2;
    ANTLRv3Parser.RULE_attrScope = 3;
    ANTLRv3Parser.RULE_action = 4;
    ANTLRv3Parser.RULE_actionScopeName = 5;
    ANTLRv3Parser.RULE_optionsSpec = 6;
    ANTLRv3Parser.RULE_option = 7;
    ANTLRv3Parser.RULE_optionValue = 8;
    ANTLRv3Parser.RULE_rule_ = 9;
    ANTLRv3Parser.RULE_ruleAction = 10;
    ANTLRv3Parser.RULE_throwsSpec = 11;
    ANTLRv3Parser.RULE_ruleScopeSpec = 12;
    ANTLRv3Parser.RULE_block = 13;
    ANTLRv3Parser.RULE_altList = 14;
    ANTLRv3Parser.RULE_alternative = 15;
    ANTLRv3Parser.RULE_exceptionGroup = 16;
    ANTLRv3Parser.RULE_exceptionHandler = 17;
    ANTLRv3Parser.RULE_finallyClause = 18;
    ANTLRv3Parser.RULE_element = 19;
    ANTLRv3Parser.RULE_elementNoOptionSpec = 20;
    ANTLRv3Parser.RULE_atom = 21;
    ANTLRv3Parser.RULE_notSet = 22;
    ANTLRv3Parser.RULE_treeSpec = 23;
    ANTLRv3Parser.RULE_ebnf = 24;
    ANTLRv3Parser.RULE_range = 25;
    ANTLRv3Parser.RULE_terminal_ = 26;
    ANTLRv3Parser.RULE_notTerminal = 27;
    ANTLRv3Parser.RULE_ebnfSuffix = 28;
    ANTLRv3Parser.RULE_rewrite = 29;
    ANTLRv3Parser.RULE_rewrite_alternative = 30;
    ANTLRv3Parser.RULE_rewrite_tree_block = 31;
    ANTLRv3Parser.RULE_rewrite_tree_alternative = 32;
    ANTLRv3Parser.RULE_rewrite_tree_element = 33;
    ANTLRv3Parser.RULE_rewrite_tree_atom = 34;
    ANTLRv3Parser.RULE_rewrite_tree_ebnf = 35;
    ANTLRv3Parser.RULE_rewrite_tree = 36;
    ANTLRv3Parser.RULE_rewrite_template = 37;
    ANTLRv3Parser.RULE_rewrite_template_ref = 38;
    ANTLRv3Parser.RULE_rewrite_indirect_template_head = 39;
    ANTLRv3Parser.RULE_rewrite_template_args = 40;
    ANTLRv3Parser.RULE_rewrite_template_arg = 41;
    ANTLRv3Parser.RULE_id = 42;
    // tslint:disable:no-trailing-whitespace
    ANTLRv3Parser.ruleNames = [
        "grammarDef", "tokensSpec", "tokenSpec", "attrScope", "action", "actionScopeName",
        "optionsSpec", "option", "optionValue", "rule_", "ruleAction", "throwsSpec",
        "ruleScopeSpec", "block", "altList", "alternative", "exceptionGroup",
        "exceptionHandler", "finallyClause", "element", "elementNoOptionSpec",
        "atom", "notSet", "treeSpec", "ebnf", "range", "terminal_", "notTerminal",
        "ebnfSuffix", "rewrite", "rewrite_alternative", "rewrite_tree_block",
        "rewrite_tree_alternative", "rewrite_tree_element", "rewrite_tree_atom",
        "rewrite_tree_ebnf", "rewrite_tree", "rewrite_template", "rewrite_template_ref",
        "rewrite_indirect_template_head", "rewrite_template_args", "rewrite_template_arg",
        "id",
    ];
    ANTLRv3Parser._LITERAL_NAMES = [
        undefined, "'lexer'", "'parser'", "'tree'", "'grammar'", "';'", "'}'",
        "'='", "'@'", "'::'", "'*'", "'protected'", "'public'", "'private'", "'returns'",
        "':'", "'throws'", "','", "'('", "'|'", "')'", "'catch'", "'finally'",
        "'+='", "'=>'", "'~'", "'?'", "'+'", "'.'", "'$'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "'DOC_COMMENT'", "'PARSER'", "'LEXER'", "'RULE'", "'BLOCK'", "'OPTIONAL'",
        "'CLOSURE'", "'POSITIVE_CLOSURE'", "'SYNPRED'", "'CHAR_RANGE'", "'EPSILON'",
        "'ALT'", "'EOR'", "'EOB'", "'EOA'", "'ID'", "'ARG'", "'ARGLIST'", "'RET'",
        "'LEXER_GRAMMAR'", "'PARSER_GRAMMAR'", "'TREE_GRAMMAR'", "'COMBINED_GRAMMAR'",
        "'INITACTION'", "'LABEL'", "'TEMPLATE'", "'scope'", "'SEMPRED'", "'GATED_SEMPRED'",
        "'SYN_SEMPRED'", "'BACKTRACK_SEMPRED'", "'fragment'", "'^('", "'^'", "'!'",
        "'..'", "'->'",
    ];
    ANTLRv3Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "CHAR_LITERAL", "STRING_LITERAL", "DOUBLE_QUOTE_STRING_LITERAL",
        "DOUBLE_ANGLE_STRING_LITERAL", "INT", "ARG_ACTION", "ACTION", "OPTIONS",
        "TOKENS", "DOC_COMMENT", "PARSER", "LEXER", "RULE", "BLOCK", "OPTIONAL",
        "CLOSURE", "POSITIVE_CLOSURE", "SYNPRED", "CHAR_RANGE", "EPSILON", "ALT",
        "EOR", "EOB", "EOA", "ID", "ARG", "ARGLIST", "RET", "LEXER_GRAMMAR", "PARSER_GRAMMAR",
        "TREE_GRAMMAR", "COMBINED_GRAMMAR", "INITACTION", "LABEL", "TEMPLATE",
        "SCOPE", "SEMPRED", "GATED_SEMPRED", "SYN_SEMPRED", "BACKTRACK_SEMPRED",
        "FRAGMENT", "TREE_BEGIN", "ROOT", "BANG", "RANGE", "REWRITE", "SL_COMMENT",
        "ML_COMMENT", "WS", "TOKEN_REF", "RULE_REF",
    ];
    ANTLRv3Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ANTLRv3Parser._LITERAL_NAMES, ANTLRv3Parser._SYMBOLIC_NAMES, []);
    ANTLRv3Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u01E4\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x03\x02\x05\x02Z\n\x02\x03\x02\x05\x02]\n\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x05\x02c\n\x02\x03\x02\x05\x02f\n\x02\x03\x02\x07\x02" +
        "i\n\x02\f\x02\x0E\x02l\v\x02\x03\x02\x07\x02o\n\x02\f\x02\x0E\x02r\v\x02" +
        "\x03\x02\x06\x02u\n\x02\r\x02\x0E\x02v\x03\x03\x03\x03\x06\x03{\n\x03" +
        "\r\x03\x0E\x03|\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
        "\x85\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x05\x06\x91\n\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\x07\x05\x07\x99\n\x07\x03\b\x03\b\x03\b\x03\b\x06\b\x9F\n" +
        "\b\r\b\x0E\b\xA0\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
        "\x03\n\x03\n\x05\n\xAE\n\n\x03\v\x05\v\xB1\n\v\x03\v\x05\v\xB4\n\v\x03" +
        "\v\x03\v\x05\v\xB8\n\v\x03\v\x05\v\xBB\n\v\x03\v\x03\v\x05\v\xBF\n\v\x03" +
        "\v\x05\v\xC2\n\v\x03\v\x05\v\xC5\n\v\x03\v\x05\v\xC8\n\v\x03\v\x07\v\xCB" +
        "\n\v\f\v\x0E\v\xCE\v\v\x03\v\x03\v\x05\v\xD2\n\v\x03\v\x03\v\x05\v\xD6" +
        "\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\xE0\n\r\f\r" +
        "\x0E\r\xE3\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
        "\xEB\n\x0E\f\x0E\x0E\x0E\xEE\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xF8\n\x0E\f\x0E\x0E\x0E\xFB\v\x0E" +
        "\x03\x0E\x03\x0E\x05\x0E\xFF\n\x0E\x03\x0F\x03\x0F\x05\x0F\u0103\n\x0F" +
        "\x03\x0F\x05\x0F\u0106\n\x0F\x03\x0F\x05\x0F\u0109\n\x0F\x03\x0F\x05\x0F" +
        "\u010C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0111\n\x0F\x05\x0F\u0113" +
        "\n\x0F\x07\x0F\u0115\n\x0F\f\x0F\x0E\x0F\u0118\v\x0F\x03\x0F\x03\x0F\x03" +
        "\x10\x03\x10\x05\x10\u011E\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0123" +
        "\n\x10\x05\x10\u0125\n\x10\x07\x10\u0127\n\x10\f\x10\x0E\x10\u012A\v\x10" +
        "\x03\x11\x06\x11\u012D\n\x11\r\x11\x0E\x11\u012E\x03\x12\x06\x12\u0132" +
        "\n\x12\r\x12\x0E\x12\u0133\x03\x12\x05\x12\u0137\n\x12\x03\x12\x05\x12" +
        "\u013A\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
        "\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0149\n\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x05\x16\u014F\n\x16\x03\x16\x03\x16\x05\x16\u0153" +
        "\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
        "\u015C\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0163\n\x17" +
        "\x05\x17\u0165\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u016A\n\x18\x03\x19" +
        "\x03\x19\x03\x19\x06\x19\u016F\n\x19\r\x19\x0E\x19\u0170\x03\x19\x03\x19" +
        "\x03\x1A\x03\x1A\x05\x1A\u0177\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1C\x03\x1C\x03\x1C\x05\x1C\u0180\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0184" +
        "\n\x1C\x03\x1C\x05\x1C\u0187\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
        "\x1F\x03\x1F\x03\x1F\x07\x1F\u0190\n\x1F\f\x1F\x0E\x1F\u0193\v\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u019A\n \x03!\x03!\x03!\x03!\x03\"" +
        "\x06\"\u01A1\n\"\r\"\x0E\"\u01A2\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
        "#\x05#\u01AD\n#\x03$\x03$\x03$\x05$\u01B2\n$\x03$\x03$\x03$\x03$\x03$" +
        "\x05$\u01B9\n$\x03%\x03%\x03%\x03&\x03&\x03&\x07&\u01C1\n&\f&\x0E&\u01C4" +
        "\v&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x03*\x03*\x03*\x07*\u01D9\n*\f*\x0E*\u01DC\v*\x03+\x03" +
        "+\x03+\x03+\x03,\x03,\x03,\x02\x02\x02-\x02\x02\x04\x02\x06\x02\b\x02" +
        "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
        "\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
        "\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
        "R\x02T\x02V\x02\x02\v\x03\x02\x03\x05\x03\x02 !\x04\x02\r\x0FHH\x04\x02" +
        "\t\t\x19\x19\x05\x02\f\f\x1A\x1A\x1C\x1D\x03\x02JK\x04\x02 !QQ\x04\x02" +
        "\f\f\x1C\x1D\x03\x02QR\x02\u020B\x02Y\x03\x02\x02\x02\x04x\x03\x02\x02" +
        "\x02\x06\x80\x03\x02\x02\x02\b\x88\x03\x02\x02\x02\n\x8C\x03\x02\x02\x02" +
        "\f\x98\x03\x02\x02\x02\x0E\x9A\x03\x02\x02\x02\x10\xA4\x03\x02\x02\x02" +
        "\x12\xAD\x03\x02\x02\x02\x14\xB0\x03\x02\x02\x02\x16\xD7\x03\x02\x02\x02" +
        "\x18\xDB\x03\x02\x02\x02\x1A\xFE\x03\x02\x02\x02\x1C\u0100\x03\x02\x02" +
        "\x02\x1E\u011B\x03\x02\x02\x02 \u012C\x03\x02\x02\x02\"\u0139\x03\x02" +
        "\x02\x02$\u013B\x03\x02\x02\x02&\u013F\x03\x02\x02\x02(\u0142\x03\x02" +
        "\x02\x02*\u015B\x03\x02\x02\x02,\u0164\x03\x02\x02\x02.\u0166\x03\x02" +
        "\x02\x020\u016B\x03\x02\x02\x022\u0174\x03\x02\x02\x024\u0178\x03\x02" +
        "\x02\x026\u0183\x03\x02\x02\x028\u0188\x03\x02\x02\x02:\u018A\x03\x02" +
        "\x02\x02<\u0191\x03\x02\x02\x02>\u0199\x03\x02\x02\x02@\u019B\x03\x02" +
        "\x02\x02B\u01A0\x03\x02\x02\x02D\u01AC\x03\x02\x02\x02F\u01B8\x03\x02" +
        "\x02\x02H\u01BA\x03\x02\x02\x02J\u01BD\x03\x02\x02\x02L\u01C7\x03\x02" +
        "\x02\x02N\u01C9\x03\x02\x02\x02P\u01CE\x03\x02\x02\x02R\u01D5\x03\x02" +
        "\x02\x02T\u01DD\x03\x02\x02\x02V\u01E1\x03\x02\x02\x02XZ\x07)\x02\x02" +
        "YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[]\t\x02\x02\x02" +
        "\\[\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x07\x06\x02" +
        "\x02_`\x05V,\x02`b\x07\x07\x02\x02ac\x05\x0E\b\x02ba\x03\x02\x02\x02b" +
        "c\x03\x02\x02\x02ce\x03\x02\x02\x02df\x05\x04\x03\x02ed\x03\x02\x02\x02" +
        "ef\x03\x02\x02\x02fj\x03\x02\x02\x02gi\x05\b\x05\x02hg\x03\x02\x02\x02" +
        "il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kp\x03\x02\x02\x02" +
        "lj\x03\x02\x02\x02mo\x05\n\x06\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02" +
        "pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02" +
        "su\x05\x14\v\x02ts\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02\x02\x02" +
        "vw\x03\x02\x02\x02w\x03\x03\x02\x02\x02xz\x07(\x02\x02y{\x05\x06\x04\x02" +
        "zy\x03\x02\x02\x02{|\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02" +
        "}~\x03\x02\x02\x02~\x7F\x07\b\x02\x02\x7F\x05\x03\x02\x02\x02\x80\x84" +
        "\x07Q\x02\x02\x81\x82\x07\t\x02\x02\x82\x85\t\x03\x02\x02\x83\x85\x03" +
        "\x02\x02\x02\x84\x81\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x86\x03" +
        "\x02\x02\x02\x86\x87\x07\x07\x02\x02\x87\x07\x03\x02\x02\x02\x88\x89\x07" +
        "C\x02\x02\x89\x8A\x05V,\x02\x8A\x8B\x07&\x02\x02\x8B\t\x03\x02\x02\x02" +
        "\x8C\x90\x07\n\x02\x02\x8D\x8E\x05\f\x07\x02\x8E\x8F\x07\v\x02\x02\x8F" +
        "\x91\x03\x02\x02\x02\x90\x8D\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
        "\x92\x03\x02\x02\x02\x92\x93\x05V,\x02\x93\x94\x07&\x02\x02\x94\v\x03" +
        "\x02\x02\x02\x95\x99\x05V,\x02\x96\x99\x07\x03\x02\x02\x97\x99\x07\x04" +
        "\x02\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x97\x03\x02" +
        "\x02\x02\x99\r\x03\x02\x02\x02\x9A\x9E\x07\'\x02\x02\x9B\x9C\x05\x10\t" +
        "\x02\x9C\x9D\x07\x07\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x9B\x03\x02\x02" +
        "\x02\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02" +
        "\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x07\b\x02\x02\xA3\x0F\x03\x02\x02" +
        "\x02\xA4\xA5\x05V,\x02\xA5\xA6\x07\t\x02\x02\xA6\xA7\x05\x12\n\x02\xA7" +
        "\x11\x03\x02\x02\x02\xA8\xAE\x05V,\x02\xA9\xAE\x07!\x02\x02\xAA\xAE\x07" +
        " \x02\x02\xAB\xAE\x07$\x02\x02\xAC\xAE\x07\f\x02\x02\xAD\xA8\x03\x02\x02" +
        "\x02\xAD\xA9\x03\x02\x02\x02\xAD\xAA\x03\x02\x02\x02\xAD\xAB\x03\x02\x02" +
        "\x02\xAD\xAC\x03\x02\x02\x02\xAE\x13\x03\x02\x02\x02\xAF\xB1\x07)\x02" +
        "\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02" +
        "\x02\xB2\xB4\t\x04\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
        "\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x05V,\x02\xB6\xB8\x07K\x02\x02\xB7" +
        "\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9" +
        "\xBB\x07%\x02\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB" +
        "\xBE\x03\x02\x02\x02\xBC\xBD\x07\x10\x02\x02\xBD\xBF\x07%\x02\x02\xBE" +
        "\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0" +
        "\xC2\x05\x18\r\x02\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2" +
        "\xC4\x03\x02\x02\x02\xC3\xC5\x05\x0E\b\x02\xC4\xC3\x03\x02\x02\x02\xC4" +
        "\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC8\x05\x1A\x0E\x02\xC7" +
        "\xC6\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCC\x03\x02\x02\x02\xC9" +
        "\xCB\x05\x16\f\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC" +
        "\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE" +
        "\xCC\x03\x02\x02\x02\xCF\xD1\x07\x11\x02\x02\xD0\xD2\x05\x1E\x10\x02\xD1" +
        "\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3" +
        "\xD5\x07\x07\x02\x02\xD4\xD6\x05\"\x12\x02\xD5\xD4\x03\x02\x02\x02\xD5" +
        "\xD6\x03\x02\x02\x02\xD6\x15\x03\x02\x02\x02\xD7\xD8\x07\n\x02\x02\xD8" +
        "\xD9\x05V,\x02\xD9\xDA\x07&\x02\x02\xDA\x17\x03\x02\x02\x02\xDB\xDC\x07" +
        "\x12\x02\x02\xDC\xE1\x05V,\x02\xDD\xDE\x07\x13\x02\x02\xDE\xE0\x05V,\x02" +
        "\xDF\xDD\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02" +
        "\xE1\xE2\x03\x02\x02\x02\xE2\x19\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02" +
        "\xE4\xE5\x07C\x02\x02\xE5\xFF\x07&\x02\x02\xE6\xE7\x07C\x02\x02\xE7\xEC" +
        "\x05V,\x02\xE8\xE9\x07\x13\x02\x02\xE9\xEB\x05V,\x02\xEA\xE8\x03\x02\x02" +
        "\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02" +
        "\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07\x07\x02" +
        "\x02\xF0\xFF\x03\x02\x02\x02\xF1\xF2\x07C\x02\x02\xF2\xF3\x07&\x02\x02" +
        "\xF3\xF4\x07C\x02\x02\xF4\xF9\x05V,\x02\xF5\xF6\x07\x13\x02\x02\xF6\xF8" +
        "\x05V,\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03" +
        "\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03" +
        "\x02\x02\x02\xFC\xFD\x07\x07\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xE4\x03" +
        "\x02\x02\x02\xFE\xE6\x03\x02\x02\x02\xFE\xF1\x03\x02\x02\x02\xFF\x1B\x03" +
        "\x02\x02\x02\u0100\u0105\x07\x14\x02\x02\u0101\u0103\x05\x0E\b\x02\u0102" +
        "\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02" +
        "\x02\x02\u0104\u0106\x07\x11\x02\x02\u0105\u0102\x03\x02\x02\x02\u0105" +
        "\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0109\x05 \x11" +
        "\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B" +
        "\x03\x02\x02\x02\u010A\u010C\x05<\x1F\x02\u010B\u010A\x03\x02\x02\x02" +
        "\u010B\u010C\x03\x02\x02\x02\u010C\u0116\x03\x02\x02\x02\u010D\u0112\x07" +
        "\x15\x02\x02\u010E\u0110\x05 \x11\x02\u010F\u0111\x05<\x1F\x02\u0110\u010F" +
        "\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02" +
        "\u0112\u010E\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03" +
        "\x02\x02\x02\u0114\u010D\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116" +
        "\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02" +
        "\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x07\x16\x02\x02\u011A" +
        "\x1D\x03\x02\x02\x02\u011B\u011D\x05 \x11\x02\u011C\u011E\x05<\x1F\x02" +
        "\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0128\x03" +
        "\x02\x02\x02\u011F\u0124\x07\x15\x02\x02\u0120\u0122\x05 \x11\x02\u0121" +
        "\u0123\x05<\x1F\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02" +
        "\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0120\x03\x02\x02\x02\u0124\u0125" +
        "\x03\x02\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u011F\x03\x02\x02\x02" +
        "\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03" +
        "\x02\x02\x02\u0129\x1F\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
        "\u012D\x05(\x15\x02\u012C\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02" +
        "\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F!\x03" +
        "\x02\x02\x02\u0130\u0132\x05$\x13\x02\u0131\u0130\x03\x02\x02\x02\u0132" +
        "\u0133\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02" +
        "\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0137\x05&\x14\x02\u0136\u0135" +
        "\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02" +
        "\u0138\u013A\x05&\x14\x02\u0139\u0131\x03\x02\x02\x02\u0139\u0138\x03" +
        "\x02\x02\x02\u013A#\x03\x02\x02\x02\u013B\u013C\x07\x17\x02\x02\u013C" +
        "\u013D\x07%\x02\x02\u013D\u013E\x07&\x02\x02\u013E%\x03\x02\x02\x02\u013F" +
        "\u0140\x07\x18\x02\x02\u0140\u0141\x07&\x02\x02\u0141\'\x03\x02\x02\x02" +
        "\u0142\u0143\x05*\x16\x02\u0143)\x03\x02\x02\x02\u0144\u0145\x05V,\x02" +
        "\u0145\u0146\t\x05\x02\x02\u0146\u0148\x05,\x17\x02\u0147\u0149\x05:\x1E" +
        "\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u015C" +
        "\x03\x02\x02\x02\u014A\u014B\x05V,\x02\u014B\u014C\t\x05\x02\x02\u014C" +
        "\u014E\x05\x1C\x0F\x02\u014D\u014F\x05:\x1E\x02\u014E\u014D\x03\x02\x02" +
        "\x02\u014E\u014F\x03\x02\x02\x02\u014F\u015C\x03\x02\x02\x02\u0150\u0152" +
        "\x05,\x17\x02\u0151\u0153\x05:\x1E\x02\u0152\u0151\x03\x02\x02\x02\u0152" +
        "\u0153\x03\x02\x02\x02\u0153\u015C\x03\x02\x02\x02\u0154\u015C\x052\x1A" +
        "\x02\u0155\u015C\x07&\x02\x02\u0156\u0157\x07D\x02\x02\u0157\u015C\x07" +
        "\x1A\x02\x02\u0158\u0159\x050\x19\x02\u0159\u015A\x05:\x1E\x02\u015A\u015C" +
        "\x03\x02\x02\x02\u015B\u0144\x03\x02\x02\x02\u015B\u014A\x03\x02\x02\x02" +
        "\u015B\u0150\x03\x02\x02\x02\u015B\u0154\x03\x02\x02\x02\u015B\u0155\x03" +
        "\x02\x02\x02\u015B\u0156\x03\x02\x02\x02\u015B\u0158\x03\x02\x02\x02\u015C" +
        "+\x03\x02\x02\x02\u015D\u0165\x054\x1B\x02\u015E\u0165\x056\x1C\x02\u015F" +
        "\u0165\x05.\x18\x02\u0160\u0162\x07R\x02\x02\u0161\u0163\x07%\x02\x02" +
        "\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x03" +
        "\x02\x02\x02\u0164\u015D\x03\x02\x02\x02\u0164\u015E\x03\x02\x02\x02\u0164" +
        "\u015F\x03\x02\x02\x02\u0164\u0160\x03\x02\x02\x02\u0165-\x03\x02\x02" +
        "\x02\u0166\u0169\x07\x1B\x02\x02\u0167\u016A\x058\x1D\x02\u0168\u016A" +
        "\x05\x1C\x0F\x02\u0169\u0167\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02" +
        "\u016A/\x03\x02\x02\x02\u016B\u016C\x07I\x02\x02\u016C\u016E\x05(\x15" +
        "\x02\u016D\u016F\x05(\x15\x02\u016E\u016D\x03\x02\x02\x02\u016F\u0170" +
        "\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02" +
        "\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x07\x16\x02\x02\u01731\x03\x02" +
        "\x02\x02\u0174\u0176\x05\x1C\x0F\x02\u0175\u0177\t\x06\x02\x02\u0176\u0175" +
        "\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u01773\x03\x02\x02\x02\u0178" +
        "\u0179\x07 \x02\x02\u0179\u017A\x07L\x02\x02\u017A\u017B\x07 \x02\x02" +
        "\u017B5\x03\x02\x02\x02\u017C\u0184\x07 \x02\x02\u017D\u017F\x07Q\x02" +
        "\x02\u017E\u0180\x07%\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180" +
        "\x03\x02\x02\x02\u0180\u0184\x03\x02\x02\x02\u0181\u0184\x07!\x02\x02" +
        "\u0182\u0184\x07\x1E\x02\x02\u0183\u017C\x03\x02\x02\x02\u0183\u017D\x03" +
        "\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0182\x03\x02\x02\x02\u0184" +
        "\u0186\x03\x02\x02\x02\u0185\u0187\t\x07\x02\x02\u0186\u0185\x03\x02\x02" +
        "\x02\u0186\u0187\x03\x02\x02\x02\u01877\x03\x02\x02\x02\u0188\u0189\t" +
        "\b\x02\x02\u01899\x03\x02\x02\x02\u018A\u018B\t\t\x02\x02\u018B;\x03\x02" +
        "\x02\x02\u018C\u018D\x07M\x02\x02\u018D\u018E\x07D\x02\x02\u018E\u0190" +
        "\x05> \x02\u018F\u018C\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191" +
        "\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02" +
        "\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0195\x07M\x02\x02\u0195\u0196" +
        "\x05> \x02\u0196=\x03\x02\x02\x02\u0197\u019A\x05L\'\x02\u0198\u019A\x05" +
        "B\"\x02\u0199\u0197\x03\x02\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A" +
        "?\x03\x02\x02\x02\u019B\u019C\x07\x14\x02\x02\u019C\u019D\x05B\"\x02\u019D" +
        "\u019E\x07\x16\x02\x02\u019EA\x03\x02\x02\x02\u019F\u01A1\x05D#\x02\u01A0" +
        "\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A0\x03\x02" +
        "\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3C\x03\x02\x02\x02\u01A4\u01AD" +
        "\x05F$\x02\u01A5\u01A6\x05F$\x02\u01A6\u01A7\x05:\x1E\x02\u01A7\u01AD" +
        "\x03\x02\x02\x02\u01A8\u01A9\x05J&\x02\u01A9\u01AA\x05:\x1E\x02\u01AA" +
        "\u01AD\x03\x02\x02\x02\u01AB\u01AD\x05H%\x02\u01AC\u01A4\x03\x02\x02\x02" +
        "\u01AC\u01A5\x03\x02\x02\x02\u01AC\u01A8\x03\x02\x02\x02\u01AC\u01AB\x03" +
        "\x02\x02\x02\u01ADE\x03\x02\x02\x02\u01AE\u01B9\x07 \x02\x02\u01AF\u01B1" +
        "\x07Q\x02\x02\u01B0\u01B2\x07%\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1" +
        "\u01B2\x03\x02\x02\x02\u01B2\u01B9\x03\x02\x02\x02\u01B3\u01B9\x07R\x02" +
        "\x02\u01B4\u01B9\x07!\x02\x02\u01B5\u01B6\x07\x1F\x02\x02\u01B6\u01B9" +
        "\x05V,\x02\u01B7\u01B9\x07&\x02\x02\u01B8\u01AE\x03\x02\x02\x02\u01B8" +
        "\u01AF\x03\x02\x02\x02\u01B8\u01B3\x03\x02\x02\x02\u01B8\u01B4\x03\x02" +
        "\x02\x02\u01B8\u01B5\x03\x02\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9" +
        "G\x03\x02\x02\x02\u01BA\u01BB\x05@!\x02\u01BB\u01BC\x05:\x1E\x02\u01BC" +
        "I\x03\x02\x02\x02\u01BD\u01BE\x07I\x02\x02\u01BE\u01C2\x05F$\x02\u01BF" +
        "\u01C1\x05D#\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02" +
        "\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03" +
        "\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C6\x07\x16\x02\x02\u01C6" +
        "K\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8M\x03\x02\x02\x02\u01C9" +
        "\u01CA\x05V,\x02\u01CA\u01CB\x07\x14\x02\x02\u01CB\u01CC\x05R*\x02\u01CC" +
        "\u01CD\x07\x16\x02\x02\u01CDO\x03\x02\x02\x02\u01CE\u01CF\x07\x14\x02" +
        "\x02\u01CF\u01D0\x07&\x02\x02\u01D0\u01D1\x07\x16\x02\x02\u01D1\u01D2" +
        "\x07\x14\x02\x02\u01D2\u01D3\x05R*\x02\u01D3\u01D4\x07\x16\x02\x02\u01D4" +
        "Q\x03\x02\x02\x02\u01D5\u01DA\x05T+\x02\u01D6\u01D7\x07\x13\x02\x02\u01D7" +
        "\u01D9\x05T+\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
        "\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DBS\x03\x02" +
        "\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x05V,\x02\u01DE\u01DF" +
        "\x07\t\x02\x02\u01DF\u01E0\x07&\x02\x02\u01E0U\x03\x02\x02\x02\u01E1\u01E2" +
        "\t\n\x02\x02\u01E2W\x03\x02\x02\x02AY\\bejpv|\x84\x90\x98\xA0\xAD\xB0" +
        "\xB3\xB7\xBA\xBE\xC1\xC4\xC7\xCC\xD1\xD5\xE1\xEC\xF9\xFE\u0102\u0105\u0108" +
        "\u010B\u0110\u0112\u0116\u011D\u0122\u0124\u0128\u012E\u0133\u0136\u0139" +
        "\u0148\u014E\u0152\u015B\u0162\u0164\u0169\u0170\u0176\u017F\u0183\u0186" +
        "\u0191\u0199\u01A2\u01AC\u01B1\u01B8\u01C2\u01DA";
    return ANTLRv3Parser;
}(Parser_1.Parser));
exports.ANTLRv3Parser = ANTLRv3Parser;
var GrammarDefContext = /** @class */ (function (_super) {
    __extends(GrammarDefContext, _super);
    function GrammarDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GrammarDefContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    GrammarDefContext.prototype.DOC_COMMENT = function () { return this.tryGetToken(ANTLRv3Parser.DOC_COMMENT, 0); };
    GrammarDefContext.prototype.optionsSpec = function () {
        return this.tryGetRuleContext(0, OptionsSpecContext);
    };
    GrammarDefContext.prototype.tokensSpec = function () {
        return this.tryGetRuleContext(0, TokensSpecContext);
    };
    GrammarDefContext.prototype.attrScope = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttrScopeContext);
        }
        else {
            return this.getRuleContext(i, AttrScopeContext);
        }
    };
    GrammarDefContext.prototype.action = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ActionContext);
        }
        else {
            return this.getRuleContext(i, ActionContext);
        }
    };
    GrammarDefContext.prototype.rule_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rule_Context);
        }
        else {
            return this.getRuleContext(i, Rule_Context);
        }
    };
    Object.defineProperty(GrammarDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_grammarDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GrammarDefContext.prototype.enterRule = function (listener) {
        if (listener.enterGrammarDef) {
            listener.enterGrammarDef(this);
        }
    };
    // @Override
    GrammarDefContext.prototype.exitRule = function (listener) {
        if (listener.exitGrammarDef) {
            listener.exitGrammarDef(this);
        }
    };
    // @Override
    GrammarDefContext.prototype.accept = function (visitor) {
        if (visitor.visitGrammarDef) {
            return visitor.visitGrammarDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GrammarDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GrammarDefContext = GrammarDefContext;
var TokensSpecContext = /** @class */ (function (_super) {
    __extends(TokensSpecContext, _super);
    function TokensSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokensSpecContext.prototype.TOKENS = function () { return this.getToken(ANTLRv3Parser.TOKENS, 0); };
    TokensSpecContext.prototype.tokenSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokenSpecContext);
        }
        else {
            return this.getRuleContext(i, TokenSpecContext);
        }
    };
    Object.defineProperty(TokensSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_tokensSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokensSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTokensSpec) {
            listener.enterTokensSpec(this);
        }
    };
    // @Override
    TokensSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTokensSpec) {
            listener.exitTokensSpec(this);
        }
    };
    // @Override
    TokensSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTokensSpec) {
            return visitor.visitTokensSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokensSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokensSpecContext = TokensSpecContext;
var TokenSpecContext = /** @class */ (function (_super) {
    __extends(TokenSpecContext, _super);
    function TokenSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokenSpecContext.prototype.TOKEN_REF = function () { return this.getToken(ANTLRv3Parser.TOKEN_REF, 0); };
    TokenSpecContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); };
    TokenSpecContext.prototype.CHAR_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); };
    Object.defineProperty(TokenSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_tokenSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokenSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTokenSpec) {
            listener.enterTokenSpec(this);
        }
    };
    // @Override
    TokenSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTokenSpec) {
            listener.exitTokenSpec(this);
        }
    };
    // @Override
    TokenSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTokenSpec) {
            return visitor.visitTokenSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokenSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokenSpecContext = TokenSpecContext;
var AttrScopeContext = /** @class */ (function (_super) {
    __extends(AttrScopeContext, _super);
    function AttrScopeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttrScopeContext.prototype.SCOPE = function () { return this.getToken(ANTLRv3Parser.SCOPE, 0); };
    AttrScopeContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    AttrScopeContext.prototype.ACTION = function () { return this.getToken(ANTLRv3Parser.ACTION, 0); };
    Object.defineProperty(AttrScopeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_attrScope; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttrScopeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttrScope) {
            listener.enterAttrScope(this);
        }
    };
    // @Override
    AttrScopeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttrScope) {
            listener.exitAttrScope(this);
        }
    };
    // @Override
    AttrScopeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttrScope) {
            return visitor.visitAttrScope(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttrScopeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttrScopeContext = AttrScopeContext;
var ActionContext = /** @class */ (function (_super) {
    __extends(ActionContext, _super);
    function ActionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    ActionContext.prototype.ACTION = function () { return this.getToken(ANTLRv3Parser.ACTION, 0); };
    ActionContext.prototype.actionScopeName = function () {
        return this.tryGetRuleContext(0, ActionScopeNameContext);
    };
    Object.defineProperty(ActionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_action; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionContext.prototype.enterRule = function (listener) {
        if (listener.enterAction) {
            listener.enterAction(this);
        }
    };
    // @Override
    ActionContext.prototype.exitRule = function (listener) {
        if (listener.exitAction) {
            listener.exitAction(this);
        }
    };
    // @Override
    ActionContext.prototype.accept = function (visitor) {
        if (visitor.visitAction) {
            return visitor.visitAction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionContext = ActionContext;
var ActionScopeNameContext = /** @class */ (function (_super) {
    __extends(ActionScopeNameContext, _super);
    function ActionScopeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionScopeNameContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    Object.defineProperty(ActionScopeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_actionScopeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionScopeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterActionScopeName) {
            listener.enterActionScopeName(this);
        }
    };
    // @Override
    ActionScopeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitActionScopeName) {
            listener.exitActionScopeName(this);
        }
    };
    // @Override
    ActionScopeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitActionScopeName) {
            return visitor.visitActionScopeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionScopeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionScopeNameContext = ActionScopeNameContext;
var OptionsSpecContext = /** @class */ (function (_super) {
    __extends(OptionsSpecContext, _super);
    function OptionsSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionsSpecContext.prototype.OPTIONS = function () { return this.getToken(ANTLRv3Parser.OPTIONS, 0); };
    OptionsSpecContext.prototype.option = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionContext);
        }
        else {
            return this.getRuleContext(i, OptionContext);
        }
    };
    Object.defineProperty(OptionsSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_optionsSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionsSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionsSpec) {
            listener.enterOptionsSpec(this);
        }
    };
    // @Override
    OptionsSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionsSpec) {
            listener.exitOptionsSpec(this);
        }
    };
    // @Override
    OptionsSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionsSpec) {
            return visitor.visitOptionsSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionsSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionsSpecContext = OptionsSpecContext;
var OptionContext = /** @class */ (function (_super) {
    __extends(OptionContext, _super);
    function OptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    OptionContext.prototype.optionValue = function () {
        return this.getRuleContext(0, OptionValueContext);
    };
    Object.defineProperty(OptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_option; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionContext.prototype.enterRule = function (listener) {
        if (listener.enterOption) {
            listener.enterOption(this);
        }
    };
    // @Override
    OptionContext.prototype.exitRule = function (listener) {
        if (listener.exitOption) {
            listener.exitOption(this);
        }
    };
    // @Override
    OptionContext.prototype.accept = function (visitor) {
        if (visitor.visitOption) {
            return visitor.visitOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionContext = OptionContext;
var OptionValueContext = /** @class */ (function (_super) {
    __extends(OptionValueContext, _super);
    function OptionValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionValueContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    OptionValueContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); };
    OptionValueContext.prototype.CHAR_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); };
    OptionValueContext.prototype.INT = function () { return this.tryGetToken(ANTLRv3Parser.INT, 0); };
    Object.defineProperty(OptionValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_optionValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionValueContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionValue) {
            listener.enterOptionValue(this);
        }
    };
    // @Override
    OptionValueContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionValue) {
            listener.exitOptionValue(this);
        }
    };
    // @Override
    OptionValueContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionValue) {
            return visitor.visitOptionValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionValueContext = OptionValueContext;
var Rule_Context = /** @class */ (function (_super) {
    __extends(Rule_Context, _super);
    function Rule_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule_Context.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    Rule_Context.prototype.DOC_COMMENT = function () { return this.tryGetToken(ANTLRv3Parser.DOC_COMMENT, 0); };
    Rule_Context.prototype.BANG = function () { return this.tryGetToken(ANTLRv3Parser.BANG, 0); };
    Rule_Context.prototype.ARG_ACTION = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv3Parser.ARG_ACTION);
        }
        else {
            return this.getToken(ANTLRv3Parser.ARG_ACTION, i);
        }
    };
    Rule_Context.prototype.throwsSpec = function () {
        return this.tryGetRuleContext(0, ThrowsSpecContext);
    };
    Rule_Context.prototype.optionsSpec = function () {
        return this.tryGetRuleContext(0, OptionsSpecContext);
    };
    Rule_Context.prototype.ruleScopeSpec = function () {
        return this.tryGetRuleContext(0, RuleScopeSpecContext);
    };
    Rule_Context.prototype.ruleAction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleActionContext);
        }
        else {
            return this.getRuleContext(i, RuleActionContext);
        }
    };
    Rule_Context.prototype.altList = function () {
        return this.tryGetRuleContext(0, AltListContext);
    };
    Rule_Context.prototype.exceptionGroup = function () {
        return this.tryGetRuleContext(0, ExceptionGroupContext);
    };
    Rule_Context.prototype.FRAGMENT = function () { return this.tryGetToken(ANTLRv3Parser.FRAGMENT, 0); };
    Object.defineProperty(Rule_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rule_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rule_Context.prototype.enterRule = function (listener) {
        if (listener.enterRule_) {
            listener.enterRule_(this);
        }
    };
    // @Override
    Rule_Context.prototype.exitRule = function (listener) {
        if (listener.exitRule_) {
            listener.exitRule_(this);
        }
    };
    // @Override
    Rule_Context.prototype.accept = function (visitor) {
        if (visitor.visitRule_) {
            return visitor.visitRule_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rule_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rule_Context = Rule_Context;
var RuleActionContext = /** @class */ (function (_super) {
    __extends(RuleActionContext, _super);
    function RuleActionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleActionContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    RuleActionContext.prototype.ACTION = function () { return this.getToken(ANTLRv3Parser.ACTION, 0); };
    Object.defineProperty(RuleActionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_ruleAction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleActionContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleAction) {
            listener.enterRuleAction(this);
        }
    };
    // @Override
    RuleActionContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleAction) {
            listener.exitRuleAction(this);
        }
    };
    // @Override
    RuleActionContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleAction) {
            return visitor.visitRuleAction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleActionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleActionContext = RuleActionContext;
var ThrowsSpecContext = /** @class */ (function (_super) {
    __extends(ThrowsSpecContext, _super);
    function ThrowsSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowsSpecContext.prototype.id = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }
        else {
            return this.getRuleContext(i, IdContext);
        }
    };
    Object.defineProperty(ThrowsSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_throwsSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowsSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowsSpec) {
            listener.enterThrowsSpec(this);
        }
    };
    // @Override
    ThrowsSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowsSpec) {
            listener.exitThrowsSpec(this);
        }
    };
    // @Override
    ThrowsSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowsSpec) {
            return visitor.visitThrowsSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowsSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowsSpecContext = ThrowsSpecContext;
var RuleScopeSpecContext = /** @class */ (function (_super) {
    __extends(RuleScopeSpecContext, _super);
    function RuleScopeSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleScopeSpecContext.prototype.SCOPE = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv3Parser.SCOPE);
        }
        else {
            return this.getToken(ANTLRv3Parser.SCOPE, i);
        }
    };
    RuleScopeSpecContext.prototype.ACTION = function () { return this.tryGetToken(ANTLRv3Parser.ACTION, 0); };
    RuleScopeSpecContext.prototype.id = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }
        else {
            return this.getRuleContext(i, IdContext);
        }
    };
    Object.defineProperty(RuleScopeSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_ruleScopeSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleScopeSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleScopeSpec) {
            listener.enterRuleScopeSpec(this);
        }
    };
    // @Override
    RuleScopeSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleScopeSpec) {
            listener.exitRuleScopeSpec(this);
        }
    };
    // @Override
    RuleScopeSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleScopeSpec) {
            return visitor.visitRuleScopeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleScopeSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleScopeSpecContext = RuleScopeSpecContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.alternative = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AlternativeContext);
        }
        else {
            return this.getRuleContext(i, AlternativeContext);
        }
    };
    BlockContext.prototype.rewrite = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RewriteContext);
        }
        else {
            return this.getRuleContext(i, RewriteContext);
        }
    };
    BlockContext.prototype.optionsSpec = function () {
        return this.tryGetRuleContext(0, OptionsSpecContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_block; },
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
var AltListContext = /** @class */ (function (_super) {
    __extends(AltListContext, _super);
    function AltListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AltListContext.prototype.alternative = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AlternativeContext);
        }
        else {
            return this.getRuleContext(i, AlternativeContext);
        }
    };
    AltListContext.prototype.rewrite = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RewriteContext);
        }
        else {
            return this.getRuleContext(i, RewriteContext);
        }
    };
    Object.defineProperty(AltListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_altList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AltListContext.prototype.enterRule = function (listener) {
        if (listener.enterAltList) {
            listener.enterAltList(this);
        }
    };
    // @Override
    AltListContext.prototype.exitRule = function (listener) {
        if (listener.exitAltList) {
            listener.exitAltList(this);
        }
    };
    // @Override
    AltListContext.prototype.accept = function (visitor) {
        if (visitor.visitAltList) {
            return visitor.visitAltList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AltListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AltListContext = AltListContext;
var AlternativeContext = /** @class */ (function (_super) {
    __extends(AlternativeContext, _super);
    function AlternativeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlternativeContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    Object.defineProperty(AlternativeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_alternative; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlternativeContext.prototype.enterRule = function (listener) {
        if (listener.enterAlternative) {
            listener.enterAlternative(this);
        }
    };
    // @Override
    AlternativeContext.prototype.exitRule = function (listener) {
        if (listener.exitAlternative) {
            listener.exitAlternative(this);
        }
    };
    // @Override
    AlternativeContext.prototype.accept = function (visitor) {
        if (visitor.visitAlternative) {
            return visitor.visitAlternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlternativeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlternativeContext = AlternativeContext;
var ExceptionGroupContext = /** @class */ (function (_super) {
    __extends(ExceptionGroupContext, _super);
    function ExceptionGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptionGroupContext.prototype.exceptionHandler = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExceptionHandlerContext);
        }
        else {
            return this.getRuleContext(i, ExceptionHandlerContext);
        }
    };
    ExceptionGroupContext.prototype.finallyClause = function () {
        return this.tryGetRuleContext(0, FinallyClauseContext);
    };
    Object.defineProperty(ExceptionGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_exceptionGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExceptionGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterExceptionGroup) {
            listener.enterExceptionGroup(this);
        }
    };
    // @Override
    ExceptionGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitExceptionGroup) {
            listener.exitExceptionGroup(this);
        }
    };
    // @Override
    ExceptionGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitExceptionGroup) {
            return visitor.visitExceptionGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExceptionGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExceptionGroupContext = ExceptionGroupContext;
var ExceptionHandlerContext = /** @class */ (function (_super) {
    __extends(ExceptionHandlerContext, _super);
    function ExceptionHandlerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptionHandlerContext.prototype.ARG_ACTION = function () { return this.getToken(ANTLRv3Parser.ARG_ACTION, 0); };
    ExceptionHandlerContext.prototype.ACTION = function () { return this.getToken(ANTLRv3Parser.ACTION, 0); };
    Object.defineProperty(ExceptionHandlerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_exceptionHandler; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExceptionHandlerContext.prototype.enterRule = function (listener) {
        if (listener.enterExceptionHandler) {
            listener.enterExceptionHandler(this);
        }
    };
    // @Override
    ExceptionHandlerContext.prototype.exitRule = function (listener) {
        if (listener.exitExceptionHandler) {
            listener.exitExceptionHandler(this);
        }
    };
    // @Override
    ExceptionHandlerContext.prototype.accept = function (visitor) {
        if (visitor.visitExceptionHandler) {
            return visitor.visitExceptionHandler(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExceptionHandlerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExceptionHandlerContext = ExceptionHandlerContext;
var FinallyClauseContext = /** @class */ (function (_super) {
    __extends(FinallyClauseContext, _super);
    function FinallyClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyClauseContext.prototype.ACTION = function () { return this.getToken(ANTLRv3Parser.ACTION, 0); };
    Object.defineProperty(FinallyClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_finallyClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyClause) {
            listener.enterFinallyClause(this);
        }
    };
    // @Override
    FinallyClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyClause) {
            listener.exitFinallyClause(this);
        }
    };
    // @Override
    FinallyClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyClause) {
            return visitor.visitFinallyClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyClauseContext = FinallyClauseContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.elementNoOptionSpec = function () {
        return this.getRuleContext(0, ElementNoOptionSpecContext);
    };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var ElementNoOptionSpecContext = /** @class */ (function (_super) {
    __extends(ElementNoOptionSpecContext, _super);
    function ElementNoOptionSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementNoOptionSpecContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    ElementNoOptionSpecContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    ElementNoOptionSpecContext.prototype.ebnfSuffix = function () {
        return this.tryGetRuleContext(0, EbnfSuffixContext);
    };
    ElementNoOptionSpecContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    ElementNoOptionSpecContext.prototype.ebnf = function () {
        return this.tryGetRuleContext(0, EbnfContext);
    };
    ElementNoOptionSpecContext.prototype.ACTION = function () { return this.tryGetToken(ANTLRv3Parser.ACTION, 0); };
    ElementNoOptionSpecContext.prototype.SEMPRED = function () { return this.tryGetToken(ANTLRv3Parser.SEMPRED, 0); };
    ElementNoOptionSpecContext.prototype.treeSpec = function () {
        return this.tryGetRuleContext(0, TreeSpecContext);
    };
    Object.defineProperty(ElementNoOptionSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_elementNoOptionSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementNoOptionSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterElementNoOptionSpec) {
            listener.enterElementNoOptionSpec(this);
        }
    };
    // @Override
    ElementNoOptionSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitElementNoOptionSpec) {
            listener.exitElementNoOptionSpec(this);
        }
    };
    // @Override
    ElementNoOptionSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitElementNoOptionSpec) {
            return visitor.visitElementNoOptionSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementNoOptionSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementNoOptionSpecContext = ElementNoOptionSpecContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.range = function () {
        return this.tryGetRuleContext(0, RangeContext);
    };
    AtomContext.prototype.terminal_ = function () {
        return this.tryGetRuleContext(0, Terminal_Context);
    };
    AtomContext.prototype.notSet = function () {
        return this.tryGetRuleContext(0, NotSetContext);
    };
    AtomContext.prototype.RULE_REF = function () { return this.tryGetToken(ANTLRv3Parser.RULE_REF, 0); };
    AtomContext.prototype.ARG_ACTION = function () { return this.tryGetToken(ANTLRv3Parser.ARG_ACTION, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_atom; },
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
var NotSetContext = /** @class */ (function (_super) {
    __extends(NotSetContext, _super);
    function NotSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NotSetContext.prototype.notTerminal = function () {
        return this.tryGetRuleContext(0, NotTerminalContext);
    };
    NotSetContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(NotSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_notSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NotSetContext.prototype.enterRule = function (listener) {
        if (listener.enterNotSet) {
            listener.enterNotSet(this);
        }
    };
    // @Override
    NotSetContext.prototype.exitRule = function (listener) {
        if (listener.exitNotSet) {
            listener.exitNotSet(this);
        }
    };
    // @Override
    NotSetContext.prototype.accept = function (visitor) {
        if (visitor.visitNotSet) {
            return visitor.visitNotSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NotSetContext = NotSetContext;
var TreeSpecContext = /** @class */ (function (_super) {
    __extends(TreeSpecContext, _super);
    function TreeSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TreeSpecContext.prototype.TREE_BEGIN = function () { return this.getToken(ANTLRv3Parser.TREE_BEGIN, 0); };
    TreeSpecContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    Object.defineProperty(TreeSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_treeSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TreeSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTreeSpec) {
            listener.enterTreeSpec(this);
        }
    };
    // @Override
    TreeSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTreeSpec) {
            listener.exitTreeSpec(this);
        }
    };
    // @Override
    TreeSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTreeSpec) {
            return visitor.visitTreeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TreeSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TreeSpecContext = TreeSpecContext;
var EbnfContext = /** @class */ (function (_super) {
    __extends(EbnfContext, _super);
    function EbnfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EbnfContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(EbnfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_ebnf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EbnfContext.prototype.enterRule = function (listener) {
        if (listener.enterEbnf) {
            listener.enterEbnf(this);
        }
    };
    // @Override
    EbnfContext.prototype.exitRule = function (listener) {
        if (listener.exitEbnf) {
            listener.exitEbnf(this);
        }
    };
    // @Override
    EbnfContext.prototype.accept = function (visitor) {
        if (visitor.visitEbnf) {
            return visitor.visitEbnf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EbnfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EbnfContext = EbnfContext;
var RangeContext = /** @class */ (function (_super) {
    __extends(RangeContext, _super);
    function RangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangeContext.prototype.CHAR_LITERAL = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv3Parser.CHAR_LITERAL);
        }
        else {
            return this.getToken(ANTLRv3Parser.CHAR_LITERAL, i);
        }
    };
    RangeContext.prototype.RANGE = function () { return this.getToken(ANTLRv3Parser.RANGE, 0); };
    Object.defineProperty(RangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_range; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangeContext.prototype.enterRule = function (listener) {
        if (listener.enterRange) {
            listener.enterRange(this);
        }
    };
    // @Override
    RangeContext.prototype.exitRule = function (listener) {
        if (listener.exitRange) {
            listener.exitRange(this);
        }
    };
    // @Override
    RangeContext.prototype.accept = function (visitor) {
        if (visitor.visitRange) {
            return visitor.visitRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangeContext = RangeContext;
var Terminal_Context = /** @class */ (function (_super) {
    __extends(Terminal_Context, _super);
    function Terminal_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Terminal_Context.prototype.CHAR_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); };
    Terminal_Context.prototype.TOKEN_REF = function () { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); };
    Terminal_Context.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); };
    Terminal_Context.prototype.ROOT = function () { return this.tryGetToken(ANTLRv3Parser.ROOT, 0); };
    Terminal_Context.prototype.BANG = function () { return this.tryGetToken(ANTLRv3Parser.BANG, 0); };
    Terminal_Context.prototype.ARG_ACTION = function () { return this.tryGetToken(ANTLRv3Parser.ARG_ACTION, 0); };
    Object.defineProperty(Terminal_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_terminal_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Terminal_Context.prototype.enterRule = function (listener) {
        if (listener.enterTerminal_) {
            listener.enterTerminal_(this);
        }
    };
    // @Override
    Terminal_Context.prototype.exitRule = function (listener) {
        if (listener.exitTerminal_) {
            listener.exitTerminal_(this);
        }
    };
    // @Override
    Terminal_Context.prototype.accept = function (visitor) {
        if (visitor.visitTerminal_) {
            return visitor.visitTerminal_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Terminal_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Terminal_Context = Terminal_Context;
var NotTerminalContext = /** @class */ (function (_super) {
    __extends(NotTerminalContext, _super);
    function NotTerminalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NotTerminalContext.prototype.CHAR_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); };
    NotTerminalContext.prototype.TOKEN_REF = function () { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); };
    NotTerminalContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); };
    Object.defineProperty(NotTerminalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_notTerminal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NotTerminalContext.prototype.enterRule = function (listener) {
        if (listener.enterNotTerminal) {
            listener.enterNotTerminal(this);
        }
    };
    // @Override
    NotTerminalContext.prototype.exitRule = function (listener) {
        if (listener.exitNotTerminal) {
            listener.exitNotTerminal(this);
        }
    };
    // @Override
    NotTerminalContext.prototype.accept = function (visitor) {
        if (visitor.visitNotTerminal) {
            return visitor.visitNotTerminal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotTerminalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NotTerminalContext = NotTerminalContext;
var EbnfSuffixContext = /** @class */ (function (_super) {
    __extends(EbnfSuffixContext, _super);
    function EbnfSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EbnfSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_ebnfSuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EbnfSuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterEbnfSuffix) {
            listener.enterEbnfSuffix(this);
        }
    };
    // @Override
    EbnfSuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitEbnfSuffix) {
            listener.exitEbnfSuffix(this);
        }
    };
    // @Override
    EbnfSuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitEbnfSuffix) {
            return visitor.visitEbnfSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EbnfSuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EbnfSuffixContext = EbnfSuffixContext;
var RewriteContext = /** @class */ (function (_super) {
    __extends(RewriteContext, _super);
    function RewriteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RewriteContext.prototype.REWRITE = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv3Parser.REWRITE);
        }
        else {
            return this.getToken(ANTLRv3Parser.REWRITE, i);
        }
    };
    RewriteContext.prototype.rewrite_alternative = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rewrite_alternativeContext);
        }
        else {
            return this.getRuleContext(i, Rewrite_alternativeContext);
        }
    };
    RewriteContext.prototype.SEMPRED = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv3Parser.SEMPRED);
        }
        else {
            return this.getToken(ANTLRv3Parser.SEMPRED, i);
        }
    };
    Object.defineProperty(RewriteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RewriteContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite) {
            listener.enterRewrite(this);
        }
    };
    // @Override
    RewriteContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite) {
            listener.exitRewrite(this);
        }
    };
    // @Override
    RewriteContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite) {
            return visitor.visitRewrite(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RewriteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RewriteContext = RewriteContext;
var Rewrite_alternativeContext = /** @class */ (function (_super) {
    __extends(Rewrite_alternativeContext, _super);
    function Rewrite_alternativeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_alternativeContext.prototype.rewrite_template = function () {
        return this.tryGetRuleContext(0, Rewrite_templateContext);
    };
    Rewrite_alternativeContext.prototype.rewrite_tree_alternative = function () {
        return this.tryGetRuleContext(0, Rewrite_tree_alternativeContext);
    };
    Object.defineProperty(Rewrite_alternativeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_alternative; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_alternativeContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_alternative) {
            listener.enterRewrite_alternative(this);
        }
    };
    // @Override
    Rewrite_alternativeContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_alternative) {
            listener.exitRewrite_alternative(this);
        }
    };
    // @Override
    Rewrite_alternativeContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_alternative) {
            return visitor.visitRewrite_alternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_alternativeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_alternativeContext = Rewrite_alternativeContext;
var Rewrite_tree_blockContext = /** @class */ (function (_super) {
    __extends(Rewrite_tree_blockContext, _super);
    function Rewrite_tree_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_tree_blockContext.prototype.rewrite_tree_alternative = function () {
        return this.getRuleContext(0, Rewrite_tree_alternativeContext);
    };
    Object.defineProperty(Rewrite_tree_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_tree_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_tree_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_tree_block) {
            listener.enterRewrite_tree_block(this);
        }
    };
    // @Override
    Rewrite_tree_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_tree_block) {
            listener.exitRewrite_tree_block(this);
        }
    };
    // @Override
    Rewrite_tree_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_tree_block) {
            return visitor.visitRewrite_tree_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_tree_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_tree_blockContext = Rewrite_tree_blockContext;
var Rewrite_tree_alternativeContext = /** @class */ (function (_super) {
    __extends(Rewrite_tree_alternativeContext, _super);
    function Rewrite_tree_alternativeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_tree_alternativeContext.prototype.rewrite_tree_element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rewrite_tree_elementContext);
        }
        else {
            return this.getRuleContext(i, Rewrite_tree_elementContext);
        }
    };
    Object.defineProperty(Rewrite_tree_alternativeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_tree_alternative; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_tree_alternativeContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_tree_alternative) {
            listener.enterRewrite_tree_alternative(this);
        }
    };
    // @Override
    Rewrite_tree_alternativeContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_tree_alternative) {
            listener.exitRewrite_tree_alternative(this);
        }
    };
    // @Override
    Rewrite_tree_alternativeContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_tree_alternative) {
            return visitor.visitRewrite_tree_alternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_tree_alternativeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_tree_alternativeContext = Rewrite_tree_alternativeContext;
var Rewrite_tree_elementContext = /** @class */ (function (_super) {
    __extends(Rewrite_tree_elementContext, _super);
    function Rewrite_tree_elementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_tree_elementContext.prototype.rewrite_tree_atom = function () {
        return this.tryGetRuleContext(0, Rewrite_tree_atomContext);
    };
    Rewrite_tree_elementContext.prototype.ebnfSuffix = function () {
        return this.tryGetRuleContext(0, EbnfSuffixContext);
    };
    Rewrite_tree_elementContext.prototype.rewrite_tree = function () {
        return this.tryGetRuleContext(0, Rewrite_treeContext);
    };
    Rewrite_tree_elementContext.prototype.rewrite_tree_ebnf = function () {
        return this.tryGetRuleContext(0, Rewrite_tree_ebnfContext);
    };
    Object.defineProperty(Rewrite_tree_elementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_tree_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_tree_elementContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_tree_element) {
            listener.enterRewrite_tree_element(this);
        }
    };
    // @Override
    Rewrite_tree_elementContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_tree_element) {
            listener.exitRewrite_tree_element(this);
        }
    };
    // @Override
    Rewrite_tree_elementContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_tree_element) {
            return visitor.visitRewrite_tree_element(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_tree_elementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_tree_elementContext = Rewrite_tree_elementContext;
var Rewrite_tree_atomContext = /** @class */ (function (_super) {
    __extends(Rewrite_tree_atomContext, _super);
    function Rewrite_tree_atomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_tree_atomContext.prototype.CHAR_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); };
    Rewrite_tree_atomContext.prototype.TOKEN_REF = function () { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); };
    Rewrite_tree_atomContext.prototype.ARG_ACTION = function () { return this.tryGetToken(ANTLRv3Parser.ARG_ACTION, 0); };
    Rewrite_tree_atomContext.prototype.RULE_REF = function () { return this.tryGetToken(ANTLRv3Parser.RULE_REF, 0); };
    Rewrite_tree_atomContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); };
    Rewrite_tree_atomContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    Rewrite_tree_atomContext.prototype.ACTION = function () { return this.tryGetToken(ANTLRv3Parser.ACTION, 0); };
    Object.defineProperty(Rewrite_tree_atomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_tree_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_tree_atomContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_tree_atom) {
            listener.enterRewrite_tree_atom(this);
        }
    };
    // @Override
    Rewrite_tree_atomContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_tree_atom) {
            listener.exitRewrite_tree_atom(this);
        }
    };
    // @Override
    Rewrite_tree_atomContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_tree_atom) {
            return visitor.visitRewrite_tree_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_tree_atomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_tree_atomContext = Rewrite_tree_atomContext;
var Rewrite_tree_ebnfContext = /** @class */ (function (_super) {
    __extends(Rewrite_tree_ebnfContext, _super);
    function Rewrite_tree_ebnfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_tree_ebnfContext.prototype.rewrite_tree_block = function () {
        return this.getRuleContext(0, Rewrite_tree_blockContext);
    };
    Rewrite_tree_ebnfContext.prototype.ebnfSuffix = function () {
        return this.getRuleContext(0, EbnfSuffixContext);
    };
    Object.defineProperty(Rewrite_tree_ebnfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_tree_ebnf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_tree_ebnfContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_tree_ebnf) {
            listener.enterRewrite_tree_ebnf(this);
        }
    };
    // @Override
    Rewrite_tree_ebnfContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_tree_ebnf) {
            listener.exitRewrite_tree_ebnf(this);
        }
    };
    // @Override
    Rewrite_tree_ebnfContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_tree_ebnf) {
            return visitor.visitRewrite_tree_ebnf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_tree_ebnfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_tree_ebnfContext = Rewrite_tree_ebnfContext;
var Rewrite_treeContext = /** @class */ (function (_super) {
    __extends(Rewrite_treeContext, _super);
    function Rewrite_treeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_treeContext.prototype.TREE_BEGIN = function () { return this.getToken(ANTLRv3Parser.TREE_BEGIN, 0); };
    Rewrite_treeContext.prototype.rewrite_tree_atom = function () {
        return this.getRuleContext(0, Rewrite_tree_atomContext);
    };
    Rewrite_treeContext.prototype.rewrite_tree_element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rewrite_tree_elementContext);
        }
        else {
            return this.getRuleContext(i, Rewrite_tree_elementContext);
        }
    };
    Object.defineProperty(Rewrite_treeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_tree; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_treeContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_tree) {
            listener.enterRewrite_tree(this);
        }
    };
    // @Override
    Rewrite_treeContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_tree) {
            listener.exitRewrite_tree(this);
        }
    };
    // @Override
    Rewrite_treeContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_tree) {
            return visitor.visitRewrite_tree(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_treeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_treeContext = Rewrite_treeContext;
var Rewrite_templateContext = /** @class */ (function (_super) {
    __extends(Rewrite_templateContext, _super);
    function Rewrite_templateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Rewrite_templateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_template; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_templateContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_template) {
            listener.enterRewrite_template(this);
        }
    };
    // @Override
    Rewrite_templateContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_template) {
            listener.exitRewrite_template(this);
        }
    };
    // @Override
    Rewrite_templateContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_template) {
            return visitor.visitRewrite_template(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_templateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_templateContext = Rewrite_templateContext;
var Rewrite_template_refContext = /** @class */ (function (_super) {
    __extends(Rewrite_template_refContext, _super);
    function Rewrite_template_refContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_template_refContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    Rewrite_template_refContext.prototype.rewrite_template_args = function () {
        return this.getRuleContext(0, Rewrite_template_argsContext);
    };
    Object.defineProperty(Rewrite_template_refContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_template_ref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_template_refContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_template_ref) {
            listener.enterRewrite_template_ref(this);
        }
    };
    // @Override
    Rewrite_template_refContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_template_ref) {
            listener.exitRewrite_template_ref(this);
        }
    };
    // @Override
    Rewrite_template_refContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_template_ref) {
            return visitor.visitRewrite_template_ref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_template_refContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_template_refContext = Rewrite_template_refContext;
var Rewrite_indirect_template_headContext = /** @class */ (function (_super) {
    __extends(Rewrite_indirect_template_headContext, _super);
    function Rewrite_indirect_template_headContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_indirect_template_headContext.prototype.ACTION = function () { return this.getToken(ANTLRv3Parser.ACTION, 0); };
    Rewrite_indirect_template_headContext.prototype.rewrite_template_args = function () {
        return this.getRuleContext(0, Rewrite_template_argsContext);
    };
    Object.defineProperty(Rewrite_indirect_template_headContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_indirect_template_head; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_indirect_template_headContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_indirect_template_head) {
            listener.enterRewrite_indirect_template_head(this);
        }
    };
    // @Override
    Rewrite_indirect_template_headContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_indirect_template_head) {
            listener.exitRewrite_indirect_template_head(this);
        }
    };
    // @Override
    Rewrite_indirect_template_headContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_indirect_template_head) {
            return visitor.visitRewrite_indirect_template_head(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_indirect_template_headContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_indirect_template_headContext = Rewrite_indirect_template_headContext;
var Rewrite_template_argsContext = /** @class */ (function (_super) {
    __extends(Rewrite_template_argsContext, _super);
    function Rewrite_template_argsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_template_argsContext.prototype.rewrite_template_arg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rewrite_template_argContext);
        }
        else {
            return this.getRuleContext(i, Rewrite_template_argContext);
        }
    };
    Object.defineProperty(Rewrite_template_argsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_template_args; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_template_argsContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_template_args) {
            listener.enterRewrite_template_args(this);
        }
    };
    // @Override
    Rewrite_template_argsContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_template_args) {
            listener.exitRewrite_template_args(this);
        }
    };
    // @Override
    Rewrite_template_argsContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_template_args) {
            return visitor.visitRewrite_template_args(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_template_argsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_template_argsContext = Rewrite_template_argsContext;
var Rewrite_template_argContext = /** @class */ (function (_super) {
    __extends(Rewrite_template_argContext, _super);
    function Rewrite_template_argContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rewrite_template_argContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    Rewrite_template_argContext.prototype.ACTION = function () { return this.getToken(ANTLRv3Parser.ACTION, 0); };
    Object.defineProperty(Rewrite_template_argContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_rewrite_template_arg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rewrite_template_argContext.prototype.enterRule = function (listener) {
        if (listener.enterRewrite_template_arg) {
            listener.enterRewrite_template_arg(this);
        }
    };
    // @Override
    Rewrite_template_argContext.prototype.exitRule = function (listener) {
        if (listener.exitRewrite_template_arg) {
            listener.exitRewrite_template_arg(this);
        }
    };
    // @Override
    Rewrite_template_argContext.prototype.accept = function (visitor) {
        if (visitor.visitRewrite_template_arg) {
            return visitor.visitRewrite_template_arg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rewrite_template_argContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rewrite_template_argContext = Rewrite_template_argContext;
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdContext.prototype.TOKEN_REF = function () { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); };
    IdContext.prototype.RULE_REF = function () { return this.tryGetToken(ANTLRv3Parser.RULE_REF, 0); };
    Object.defineProperty(IdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv3Parser.RULE_id; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdContext.prototype.enterRule = function (listener) {
        if (listener.enterId) {
            listener.enterId(this);
        }
    };
    // @Override
    IdContext.prototype.exitRule = function (listener) {
        if (listener.exitId) {
            listener.exitId(this);
        }
    };
    // @Override
    IdContext.prototype.accept = function (visitor) {
        if (visitor.visitId) {
            return visitor.visitId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdContext = IdContext;
