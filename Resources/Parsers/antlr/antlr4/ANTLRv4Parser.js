"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr4/ANTLRv4Parser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ANTLRv4Parser = /** @class */ (function (_super) {
    __extends(ANTLRv4Parser, _super);
    function ANTLRv4Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ANTLRv4Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ANTLRv4Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ANTLRv4Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANTLRv4Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ANTLRv4Parser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANTLRv4Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return ANTLRv4Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANTLRv4Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return ANTLRv4Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.grammarSpec = function () {
        var _localctx = new GrammarSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ANTLRv4Parser.RULE_grammarSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.DOC_COMMENT) {
                    {
                        {
                            this.state = 128;
                            this.match(ANTLRv4Parser.DOC_COMMENT);
                        }
                    }
                    this.state = 133;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 134;
                this.grammarDecl();
                this.state = 138;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.OPTIONS) | (1 << ANTLRv4Parser.TOKENS) | (1 << ANTLRv4Parser.CHANNELS) | (1 << ANTLRv4Parser.IMPORT))) !== 0) || _la === ANTLRv4Parser.AT) {
                    {
                        {
                            this.state = 135;
                            this.prequelConstruct();
                        }
                    }
                    this.state = 140;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 141;
                this.rules();
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.MODE) {
                    {
                        {
                            this.state = 142;
                            this.modeSpec();
                        }
                    }
                    this.state = 147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 148;
                this.match(ANTLRv4Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.grammarDecl = function () {
        var _localctx = new GrammarDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ANTLRv4Parser.RULE_grammarDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 150;
                this.grammarType();
                this.state = 151;
                this.identifier();
                this.state = 152;
                this.match(ANTLRv4Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.grammarType = function () {
        var _localctx = new GrammarTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ANTLRv4Parser.RULE_grammarType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ANTLRv4Parser.LEXER:
                        {
                            this.state = 154;
                            this.match(ANTLRv4Parser.LEXER);
                            this.state = 155;
                            this.match(ANTLRv4Parser.GRAMMAR);
                        }
                        break;
                    case ANTLRv4Parser.PARSER:
                        {
                            this.state = 156;
                            this.match(ANTLRv4Parser.PARSER);
                            this.state = 157;
                            this.match(ANTLRv4Parser.GRAMMAR);
                        }
                        break;
                    case ANTLRv4Parser.GRAMMAR:
                        {
                            this.state = 158;
                            this.match(ANTLRv4Parser.GRAMMAR);
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
    ANTLRv4Parser.prototype.prequelConstruct = function () {
        var _localctx = new PrequelConstructContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ANTLRv4Parser.RULE_prequelConstruct);
        try {
            this.state = 166;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.OPTIONS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 161;
                        this.optionsSpec();
                    }
                    break;
                case ANTLRv4Parser.IMPORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 162;
                        this.delegateGrammars();
                    }
                    break;
                case ANTLRv4Parser.TOKENS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 163;
                        this.tokensSpec();
                    }
                    break;
                case ANTLRv4Parser.CHANNELS:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 164;
                        this.channelsSpec();
                    }
                    break;
                case ANTLRv4Parser.AT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 165;
                        this.action_();
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
    ANTLRv4Parser.prototype.optionsSpec = function () {
        var _localctx = new OptionsSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ANTLRv4Parser.RULE_optionsSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                this.match(ANTLRv4Parser.OPTIONS);
                this.state = 169;
                this.match(ANTLRv4Parser.LBRACE);
                this.state = 175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF) {
                    {
                        {
                            this.state = 170;
                            this.option();
                            this.state = 171;
                            this.match(ANTLRv4Parser.SEMI);
                        }
                    }
                    this.state = 177;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 178;
                this.match(ANTLRv4Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.option = function () {
        var _localctx = new OptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ANTLRv4Parser.RULE_option);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 180;
                this.identifier();
                this.state = 181;
                this.match(ANTLRv4Parser.ASSIGN);
                this.state = 182;
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
    ANTLRv4Parser.prototype.optionValue = function () {
        var _localctx = new OptionValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ANTLRv4Parser.RULE_optionValue);
        var _la;
        try {
            this.state = 195;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                case ANTLRv4Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 184;
                        this.identifier();
                        this.state = 189;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ANTLRv4Parser.DOT) {
                            {
                                {
                                    this.state = 185;
                                    this.match(ANTLRv4Parser.DOT);
                                    this.state = 186;
                                    this.identifier();
                                }
                            }
                            this.state = 191;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case ANTLRv4Parser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 192;
                        this.match(ANTLRv4Parser.STRING_LITERAL);
                    }
                    break;
                case ANTLRv4Parser.BEGIN_ACTION:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 193;
                        this.actionBlock();
                    }
                    break;
                case ANTLRv4Parser.INT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 194;
                        this.match(ANTLRv4Parser.INT);
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
    ANTLRv4Parser.prototype.delegateGrammars = function () {
        var _localctx = new DelegateGrammarsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ANTLRv4Parser.RULE_delegateGrammars);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                this.match(ANTLRv4Parser.IMPORT);
                this.state = 198;
                this.delegateGrammar();
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.COMMA) {
                    {
                        {
                            this.state = 199;
                            this.match(ANTLRv4Parser.COMMA);
                            this.state = 200;
                            this.delegateGrammar();
                        }
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 206;
                this.match(ANTLRv4Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.delegateGrammar = function () {
        var _localctx = new DelegateGrammarContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ANTLRv4Parser.RULE_delegateGrammar);
        try {
            this.state = 213;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 208;
                        this.identifier();
                        this.state = 209;
                        this.match(ANTLRv4Parser.ASSIGN);
                        this.state = 210;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 212;
                        this.identifier();
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
    ANTLRv4Parser.prototype.tokensSpec = function () {
        var _localctx = new TokensSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ANTLRv4Parser.RULE_tokensSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 215;
                this.match(ANTLRv4Parser.TOKENS);
                this.state = 216;
                this.match(ANTLRv4Parser.LBRACE);
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF) {
                    {
                        this.state = 217;
                        this.idList();
                    }
                }
                this.state = 220;
                this.match(ANTLRv4Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.channelsSpec = function () {
        var _localctx = new ChannelsSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ANTLRv4Parser.RULE_channelsSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.match(ANTLRv4Parser.CHANNELS);
                this.state = 223;
                this.match(ANTLRv4Parser.LBRACE);
                this.state = 225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF) {
                    {
                        this.state = 224;
                        this.idList();
                    }
                }
                this.state = 227;
                this.match(ANTLRv4Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.idList = function () {
        var _localctx = new IdListContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ANTLRv4Parser.RULE_idList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.identifier();
                this.state = 234;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 230;
                                this.match(ANTLRv4Parser.COMMA);
                                this.state = 231;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 236;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.COMMA) {
                    {
                        this.state = 237;
                        this.match(ANTLRv4Parser.COMMA);
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
    ANTLRv4Parser.prototype.action_ = function () {
        var _localctx = new Action_Context(this._ctx, this.state);
        this.enterRule(_localctx, 24, ANTLRv4Parser.RULE_action_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(ANTLRv4Parser.AT);
                this.state = 244;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 241;
                            this.actionScopeName();
                            this.state = 242;
                            this.match(ANTLRv4Parser.COLONCOLON);
                        }
                        break;
                }
                this.state = 246;
                this.identifier();
                this.state = 247;
                this.actionBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.actionScopeName = function () {
        var _localctx = new ActionScopeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ANTLRv4Parser.RULE_actionScopeName);
        try {
            this.state = 252;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                case ANTLRv4Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 249;
                        this.identifier();
                    }
                    break;
                case ANTLRv4Parser.LEXER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 250;
                        this.match(ANTLRv4Parser.LEXER);
                    }
                    break;
                case ANTLRv4Parser.PARSER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 251;
                        this.match(ANTLRv4Parser.PARSER);
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
    ANTLRv4Parser.prototype.actionBlock = function () {
        var _localctx = new ActionBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ANTLRv4Parser.RULE_actionBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.match(ANTLRv4Parser.BEGIN_ACTION);
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.ACTION_CONTENT) {
                    {
                        {
                            this.state = 255;
                            this.match(ANTLRv4Parser.ACTION_CONTENT);
                        }
                    }
                    this.state = 260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 261;
                this.match(ANTLRv4Parser.END_ACTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.argActionBlock = function () {
        var _localctx = new ArgActionBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ANTLRv4Parser.RULE_argActionBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.match(ANTLRv4Parser.BEGIN_ARGUMENT);
                this.state = 267;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.ARGUMENT_CONTENT) {
                    {
                        {
                            this.state = 264;
                            this.match(ANTLRv4Parser.ARGUMENT_CONTENT);
                        }
                    }
                    this.state = 269;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 270;
                this.match(ANTLRv4Parser.END_ARGUMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.modeSpec = function () {
        var _localctx = new ModeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ANTLRv4Parser.RULE_modeSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.match(ANTLRv4Parser.MODE);
                this.state = 273;
                this.identifier();
                this.state = 274;
                this.match(ANTLRv4Parser.SEMI);
                this.state = 278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.TOKEN_REF) | (1 << ANTLRv4Parser.DOC_COMMENT) | (1 << ANTLRv4Parser.FRAGMENT))) !== 0)) {
                    {
                        {
                            this.state = 275;
                            this.lexerRuleSpec();
                        }
                    }
                    this.state = 280;
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
    ANTLRv4Parser.prototype.rules = function () {
        var _localctx = new RulesContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ANTLRv4Parser.RULE_rules);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.TOKEN_REF) | (1 << ANTLRv4Parser.RULE_REF) | (1 << ANTLRv4Parser.DOC_COMMENT) | (1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0)) {
                    {
                        {
                            this.state = 281;
                            this.ruleSpec();
                        }
                    }
                    this.state = 286;
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
    ANTLRv4Parser.prototype.ruleSpec = function () {
        var _localctx = new RuleSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ANTLRv4Parser.RULE_ruleSpec);
        try {
            this.state = 289;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 287;
                        this.parserRuleSpec();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 288;
                        this.lexerRuleSpec();
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
    ANTLRv4Parser.prototype.parserRuleSpec = function () {
        var _localctx = new ParserRuleSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ANTLRv4Parser.RULE_parserRuleSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.DOC_COMMENT) {
                    {
                        {
                            this.state = 291;
                            this.match(ANTLRv4Parser.DOC_COMMENT);
                        }
                    }
                    this.state = 296;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0)) {
                    {
                        this.state = 297;
                        this.ruleModifiers();
                    }
                }
                this.state = 300;
                this.match(ANTLRv4Parser.RULE_REF);
                this.state = 302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.BEGIN_ARGUMENT) {
                    {
                        this.state = 301;
                        this.argActionBlock();
                    }
                }
                this.state = 305;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.RETURNS) {
                    {
                        this.state = 304;
                        this.ruleReturns();
                    }
                }
                this.state = 308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.THROWS) {
                    {
                        this.state = 307;
                        this.throwsSpec();
                    }
                }
                this.state = 311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.LOCALS) {
                    {
                        this.state = 310;
                        this.localsSpec();
                    }
                }
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.OPTIONS || _la === ANTLRv4Parser.AT) {
                    {
                        {
                            this.state = 313;
                            this.rulePrequel();
                        }
                    }
                    this.state = 318;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 319;
                this.match(ANTLRv4Parser.COLON);
                this.state = 320;
                this.ruleBlock();
                this.state = 321;
                this.match(ANTLRv4Parser.SEMI);
                this.state = 322;
                this.exceptionGroup();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.exceptionGroup = function () {
        var _localctx = new ExceptionGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ANTLRv4Parser.RULE_exceptionGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.CATCH) {
                    {
                        {
                            this.state = 324;
                            this.exceptionHandler();
                        }
                    }
                    this.state = 329;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 331;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.FINALLY) {
                    {
                        this.state = 330;
                        this.finallyClause();
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
    ANTLRv4Parser.prototype.exceptionHandler = function () {
        var _localctx = new ExceptionHandlerContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ANTLRv4Parser.RULE_exceptionHandler);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this.match(ANTLRv4Parser.CATCH);
                this.state = 334;
                this.argActionBlock();
                this.state = 335;
                this.actionBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.finallyClause = function () {
        var _localctx = new FinallyClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ANTLRv4Parser.RULE_finallyClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this.match(ANTLRv4Parser.FINALLY);
                this.state = 338;
                this.actionBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.rulePrequel = function () {
        var _localctx = new RulePrequelContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ANTLRv4Parser.RULE_rulePrequel);
        try {
            this.state = 342;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.OPTIONS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 340;
                        this.optionsSpec();
                    }
                    break;
                case ANTLRv4Parser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 341;
                        this.ruleAction();
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
    ANTLRv4Parser.prototype.ruleReturns = function () {
        var _localctx = new RuleReturnsContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ANTLRv4Parser.RULE_ruleReturns);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                this.match(ANTLRv4Parser.RETURNS);
                this.state = 345;
                this.argActionBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.throwsSpec = function () {
        var _localctx = new ThrowsSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ANTLRv4Parser.RULE_throwsSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(ANTLRv4Parser.THROWS);
                this.state = 348;
                this.identifier();
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.COMMA) {
                    {
                        {
                            this.state = 349;
                            this.match(ANTLRv4Parser.COMMA);
                            this.state = 350;
                            this.identifier();
                        }
                    }
                    this.state = 355;
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
    ANTLRv4Parser.prototype.localsSpec = function () {
        var _localctx = new LocalsSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ANTLRv4Parser.RULE_localsSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this.match(ANTLRv4Parser.LOCALS);
                this.state = 357;
                this.argActionBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.ruleAction = function () {
        var _localctx = new RuleActionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ANTLRv4Parser.RULE_ruleAction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 359;
                this.match(ANTLRv4Parser.AT);
                this.state = 360;
                this.identifier();
                this.state = 361;
                this.actionBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.ruleModifiers = function () {
        var _localctx = new RuleModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ANTLRv4Parser.RULE_ruleModifiers);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 363;
                            this.ruleModifier();
                        }
                    }
                    this.state = 366;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.ruleModifier = function () {
        var _localctx = new RuleModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ANTLRv4Parser.RULE_ruleModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0))) {
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
    ANTLRv4Parser.prototype.ruleBlock = function () {
        var _localctx = new RuleBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ANTLRv4Parser.RULE_ruleBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 370;
                this.ruleAltList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.ruleAltList = function () {
        var _localctx = new RuleAltListContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ANTLRv4Parser.RULE_ruleAltList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                this.labeledAlt();
                this.state = 377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.OR) {
                    {
                        {
                            this.state = 373;
                            this.match(ANTLRv4Parser.OR);
                            this.state = 374;
                            this.labeledAlt();
                        }
                    }
                    this.state = 379;
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
    ANTLRv4Parser.prototype.labeledAlt = function () {
        var _localctx = new LabeledAltContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ANTLRv4Parser.RULE_labeledAlt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.alternative();
                this.state = 383;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.POUND) {
                    {
                        this.state = 381;
                        this.match(ANTLRv4Parser.POUND);
                        this.state = 382;
                        this.identifier();
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
    ANTLRv4Parser.prototype.lexerRuleSpec = function () {
        var _localctx = new LexerRuleSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ANTLRv4Parser.RULE_lexerRuleSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.DOC_COMMENT) {
                    {
                        {
                            this.state = 385;
                            this.match(ANTLRv4Parser.DOC_COMMENT);
                        }
                    }
                    this.state = 390;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.FRAGMENT) {
                    {
                        this.state = 391;
                        this.match(ANTLRv4Parser.FRAGMENT);
                    }
                }
                this.state = 394;
                this.match(ANTLRv4Parser.TOKEN_REF);
                this.state = 395;
                this.match(ANTLRv4Parser.COLON);
                this.state = 396;
                this.lexerRuleBlock();
                this.state = 397;
                this.match(ANTLRv4Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.lexerRuleBlock = function () {
        var _localctx = new LexerRuleBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ANTLRv4Parser.RULE_lexerRuleBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 399;
                this.lexerAltList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.lexerAltList = function () {
        var _localctx = new LexerAltListContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ANTLRv4Parser.RULE_lexerAltList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 401;
                this.lexerAlt();
                this.state = 406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.OR) {
                    {
                        {
                            this.state = 402;
                            this.match(ANTLRv4Parser.OR);
                            this.state = 403;
                            this.lexerAlt();
                        }
                    }
                    this.state = 408;
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
    ANTLRv4Parser.prototype.lexerAlt = function () {
        var _localctx = new LexerAltContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ANTLRv4Parser.RULE_lexerAlt);
        var _la;
        try {
            this.state = 414;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                case ANTLRv4Parser.RULE_REF:
                case ANTLRv4Parser.LEXER_CHAR_SET:
                case ANTLRv4Parser.STRING_LITERAL:
                case ANTLRv4Parser.BEGIN_ACTION:
                case ANTLRv4Parser.LPAREN:
                case ANTLRv4Parser.DOT:
                case ANTLRv4Parser.NOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 409;
                        this.lexerElements();
                        this.state = 411;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.RARROW) {
                            {
                                this.state = 410;
                                this.lexerCommands();
                            }
                        }
                    }
                    break;
                case ANTLRv4Parser.SEMI:
                case ANTLRv4Parser.RPAREN:
                case ANTLRv4Parser.OR:
                    this.enterOuterAlt(_localctx, 2);
                    // tslint:disable-next-line:no-empty
                    {
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
    ANTLRv4Parser.prototype.lexerElements = function () {
        var _localctx = new LexerElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ANTLRv4Parser.RULE_lexerElements);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 416;
                            this.lexerElement();
                        }
                    }
                    this.state = 419;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.TOKEN_REF) | (1 << ANTLRv4Parser.RULE_REF) | (1 << ANTLRv4Parser.LEXER_CHAR_SET) | (1 << ANTLRv4Parser.STRING_LITERAL) | (1 << ANTLRv4Parser.BEGIN_ACTION))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ANTLRv4Parser.LPAREN - 33)) | (1 << (ANTLRv4Parser.DOT - 33)) | (1 << (ANTLRv4Parser.NOT - 33)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.lexerElement = function () {
        var _localctx = new LexerElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ANTLRv4Parser.RULE_lexerElement);
        var _la;
        try {
            this.state = 437;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 421;
                        this.labeledLexerElement();
                        this.state = 423;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
                            {
                                this.state = 422;
                                this.ebnfSuffix();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 425;
                        this.lexerAtom();
                        this.state = 427;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
                            {
                                this.state = 426;
                                this.ebnfSuffix();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 429;
                        this.lexerBlock();
                        this.state = 431;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
                            {
                                this.state = 430;
                                this.ebnfSuffix();
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 433;
                        this.actionBlock();
                        this.state = 435;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.QUESTION) {
                            {
                                this.state = 434;
                                this.match(ANTLRv4Parser.QUESTION);
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
    ANTLRv4Parser.prototype.labeledLexerElement = function () {
        var _localctx = new LabeledLexerElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ANTLRv4Parser.RULE_labeledLexerElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 439;
                this.identifier();
                this.state = 440;
                _la = this._input.LA(1);
                if (!(_la === ANTLRv4Parser.ASSIGN || _la === ANTLRv4Parser.PLUS_ASSIGN)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 443;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ANTLRv4Parser.TOKEN_REF:
                    case ANTLRv4Parser.LEXER_CHAR_SET:
                    case ANTLRv4Parser.STRING_LITERAL:
                    case ANTLRv4Parser.DOT:
                    case ANTLRv4Parser.NOT:
                        {
                            this.state = 441;
                            this.lexerAtom();
                        }
                        break;
                    case ANTLRv4Parser.LPAREN:
                        {
                            this.state = 442;
                            this.lexerBlock();
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
    ANTLRv4Parser.prototype.lexerBlock = function () {
        var _localctx = new LexerBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ANTLRv4Parser.RULE_lexerBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 445;
                this.match(ANTLRv4Parser.LPAREN);
                this.state = 446;
                this.lexerAltList();
                this.state = 447;
                this.match(ANTLRv4Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.lexerCommands = function () {
        var _localctx = new LexerCommandsContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ANTLRv4Parser.RULE_lexerCommands);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this.match(ANTLRv4Parser.RARROW);
                this.state = 450;
                this.lexerCommand();
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.COMMA) {
                    {
                        {
                            this.state = 451;
                            this.match(ANTLRv4Parser.COMMA);
                            this.state = 452;
                            this.lexerCommand();
                        }
                    }
                    this.state = 457;
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
    ANTLRv4Parser.prototype.lexerCommand = function () {
        var _localctx = new LexerCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ANTLRv4Parser.RULE_lexerCommand);
        try {
            this.state = 464;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 458;
                        this.lexerCommandName();
                        this.state = 459;
                        this.match(ANTLRv4Parser.LPAREN);
                        this.state = 460;
                        this.lexerCommandExpr();
                        this.state = 461;
                        this.match(ANTLRv4Parser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 463;
                        this.lexerCommandName();
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
    ANTLRv4Parser.prototype.lexerCommandName = function () {
        var _localctx = new LexerCommandNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, ANTLRv4Parser.RULE_lexerCommandName);
        try {
            this.state = 468;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                case ANTLRv4Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 466;
                        this.identifier();
                    }
                    break;
                case ANTLRv4Parser.MODE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 467;
                        this.match(ANTLRv4Parser.MODE);
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
    ANTLRv4Parser.prototype.lexerCommandExpr = function () {
        var _localctx = new LexerCommandExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, ANTLRv4Parser.RULE_lexerCommandExpr);
        try {
            this.state = 472;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                case ANTLRv4Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 470;
                        this.identifier();
                    }
                    break;
                case ANTLRv4Parser.INT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 471;
                        this.match(ANTLRv4Parser.INT);
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
    ANTLRv4Parser.prototype.altList = function () {
        var _localctx = new AltListContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, ANTLRv4Parser.RULE_altList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 474;
                this.alternative();
                this.state = 479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.OR) {
                    {
                        {
                            this.state = 475;
                            this.match(ANTLRv4Parser.OR);
                            this.state = 476;
                            this.alternative();
                        }
                    }
                    this.state = 481;
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
    ANTLRv4Parser.prototype.alternative = function () {
        var _localctx = new AlternativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, ANTLRv4Parser.RULE_alternative);
        var _la;
        try {
            this.state = 491;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                case ANTLRv4Parser.RULE_REF:
                case ANTLRv4Parser.STRING_LITERAL:
                case ANTLRv4Parser.BEGIN_ACTION:
                case ANTLRv4Parser.LPAREN:
                case ANTLRv4Parser.LT:
                case ANTLRv4Parser.DOT:
                case ANTLRv4Parser.NOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 483;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.LT) {
                            {
                                this.state = 482;
                                this.elementOptions();
                            }
                        }
                        this.state = 486;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 485;
                                    this.element();
                                }
                            }
                            this.state = 488;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.TOKEN_REF) | (1 << ANTLRv4Parser.RULE_REF) | (1 << ANTLRv4Parser.STRING_LITERAL) | (1 << ANTLRv4Parser.BEGIN_ACTION))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ANTLRv4Parser.LPAREN - 33)) | (1 << (ANTLRv4Parser.DOT - 33)) | (1 << (ANTLRv4Parser.NOT - 33)))) !== 0));
                    }
                    break;
                case ANTLRv4Parser.SEMI:
                case ANTLRv4Parser.RPAREN:
                case ANTLRv4Parser.OR:
                case ANTLRv4Parser.POUND:
                    this.enterOuterAlt(_localctx, 2);
                    // tslint:disable-next-line:no-empty
                    {
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
    ANTLRv4Parser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, ANTLRv4Parser.RULE_element);
        var _la;
        try {
            this.state = 508;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 493;
                        this.labeledElement();
                        this.state = 496;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ANTLRv4Parser.QUESTION:
                            case ANTLRv4Parser.STAR:
                            case ANTLRv4Parser.PLUS:
                                {
                                    this.state = 494;
                                    this.ebnfSuffix();
                                }
                                break;
                            case ANTLRv4Parser.TOKEN_REF:
                            case ANTLRv4Parser.RULE_REF:
                            case ANTLRv4Parser.STRING_LITERAL:
                            case ANTLRv4Parser.BEGIN_ACTION:
                            case ANTLRv4Parser.SEMI:
                            case ANTLRv4Parser.LPAREN:
                            case ANTLRv4Parser.RPAREN:
                            case ANTLRv4Parser.OR:
                            case ANTLRv4Parser.DOT:
                            case ANTLRv4Parser.POUND:
                            case ANTLRv4Parser.NOT:
                                // tslint:disable-next-line:no-empty
                                {
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 498;
                        this.atom();
                        this.state = 501;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ANTLRv4Parser.QUESTION:
                            case ANTLRv4Parser.STAR:
                            case ANTLRv4Parser.PLUS:
                                {
                                    this.state = 499;
                                    this.ebnfSuffix();
                                }
                                break;
                            case ANTLRv4Parser.TOKEN_REF:
                            case ANTLRv4Parser.RULE_REF:
                            case ANTLRv4Parser.STRING_LITERAL:
                            case ANTLRv4Parser.BEGIN_ACTION:
                            case ANTLRv4Parser.SEMI:
                            case ANTLRv4Parser.LPAREN:
                            case ANTLRv4Parser.RPAREN:
                            case ANTLRv4Parser.OR:
                            case ANTLRv4Parser.DOT:
                            case ANTLRv4Parser.POUND:
                            case ANTLRv4Parser.NOT:
                                // tslint:disable-next-line:no-empty
                                {
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
                        this.state = 503;
                        this.ebnf();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 504;
                        this.actionBlock();
                        this.state = 506;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.QUESTION) {
                            {
                                this.state = 505;
                                this.match(ANTLRv4Parser.QUESTION);
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
    ANTLRv4Parser.prototype.labeledElement = function () {
        var _localctx = new LabeledElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, ANTLRv4Parser.RULE_labeledElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 510;
                this.identifier();
                this.state = 511;
                _la = this._input.LA(1);
                if (!(_la === ANTLRv4Parser.ASSIGN || _la === ANTLRv4Parser.PLUS_ASSIGN)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 514;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ANTLRv4Parser.TOKEN_REF:
                    case ANTLRv4Parser.RULE_REF:
                    case ANTLRv4Parser.STRING_LITERAL:
                    case ANTLRv4Parser.DOT:
                    case ANTLRv4Parser.NOT:
                        {
                            this.state = 512;
                            this.atom();
                        }
                        break;
                    case ANTLRv4Parser.LPAREN:
                        {
                            this.state = 513;
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
    ANTLRv4Parser.prototype.ebnf = function () {
        var _localctx = new EbnfContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, ANTLRv4Parser.RULE_ebnf);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 516;
                this.block();
                this.state = 518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
                    {
                        this.state = 517;
                        this.blockSuffix();
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
    ANTLRv4Parser.prototype.blockSuffix = function () {
        var _localctx = new BlockSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, ANTLRv4Parser.RULE_blockSuffix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 520;
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
    ANTLRv4Parser.prototype.ebnfSuffix = function () {
        var _localctx = new EbnfSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ANTLRv4Parser.RULE_ebnfSuffix);
        var _la;
        try {
            this.state = 534;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.QUESTION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 522;
                        this.match(ANTLRv4Parser.QUESTION);
                        this.state = 524;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.QUESTION) {
                            {
                                this.state = 523;
                                this.match(ANTLRv4Parser.QUESTION);
                            }
                        }
                    }
                    break;
                case ANTLRv4Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 526;
                        this.match(ANTLRv4Parser.STAR);
                        this.state = 528;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.QUESTION) {
                            {
                                this.state = 527;
                                this.match(ANTLRv4Parser.QUESTION);
                            }
                        }
                    }
                    break;
                case ANTLRv4Parser.PLUS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 530;
                        this.match(ANTLRv4Parser.PLUS);
                        this.state = 532;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.QUESTION) {
                            {
                                this.state = 531;
                                this.match(ANTLRv4Parser.QUESTION);
                            }
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
    ANTLRv4Parser.prototype.lexerAtom = function () {
        var _localctx = new LexerAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ANTLRv4Parser.RULE_lexerAtom);
        var _la;
        try {
            this.state = 544;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 536;
                        this.characterRange();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 537;
                        this.terminal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 538;
                        this.notSet();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 539;
                        this.match(ANTLRv4Parser.LEXER_CHAR_SET);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 540;
                        this.match(ANTLRv4Parser.DOT);
                        this.state = 542;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.LT) {
                            {
                                this.state = 541;
                                this.elementOptions();
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
    ANTLRv4Parser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ANTLRv4Parser.RULE_atom);
        var _la;
        try {
            this.state = 553;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                case ANTLRv4Parser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 546;
                        this.terminal();
                    }
                    break;
                case ANTLRv4Parser.RULE_REF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 547;
                        this.ruleref();
                    }
                    break;
                case ANTLRv4Parser.NOT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 548;
                        this.notSet();
                    }
                    break;
                case ANTLRv4Parser.DOT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 549;
                        this.match(ANTLRv4Parser.DOT);
                        this.state = 551;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.LT) {
                            {
                                this.state = 550;
                                this.elementOptions();
                            }
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
    ANTLRv4Parser.prototype.notSet = function () {
        var _localctx = new NotSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ANTLRv4Parser.RULE_notSet);
        try {
            this.state = 559;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 555;
                        this.match(ANTLRv4Parser.NOT);
                        this.state = 556;
                        this.setElement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 557;
                        this.match(ANTLRv4Parser.NOT);
                        this.state = 558;
                        this.blockSet();
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
    ANTLRv4Parser.prototype.blockSet = function () {
        var _localctx = new BlockSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ANTLRv4Parser.RULE_blockSet);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this.match(ANTLRv4Parser.LPAREN);
                this.state = 562;
                this.setElement();
                this.state = 567;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.OR) {
                    {
                        {
                            this.state = 563;
                            this.match(ANTLRv4Parser.OR);
                            this.state = 564;
                            this.setElement();
                        }
                    }
                    this.state = 569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 570;
                this.match(ANTLRv4Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.setElement = function () {
        var _localctx = new SetElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ANTLRv4Parser.RULE_setElement);
        var _la;
        try {
            this.state = 582;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 572;
                        this.match(ANTLRv4Parser.TOKEN_REF);
                        this.state = 574;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.LT) {
                            {
                                this.state = 573;
                                this.elementOptions();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 576;
                        this.match(ANTLRv4Parser.STRING_LITERAL);
                        this.state = 578;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.LT) {
                            {
                                this.state = 577;
                                this.elementOptions();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 580;
                        this.characterRange();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 581;
                        this.match(ANTLRv4Parser.LEXER_CHAR_SET);
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
    ANTLRv4Parser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ANTLRv4Parser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                this.match(ANTLRv4Parser.LPAREN);
                this.state = 595;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.OPTIONS || _la === ANTLRv4Parser.COLON || _la === ANTLRv4Parser.AT) {
                    {
                        this.state = 586;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.OPTIONS) {
                            {
                                this.state = 585;
                                this.optionsSpec();
                            }
                        }
                        this.state = 591;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ANTLRv4Parser.AT) {
                            {
                                {
                                    this.state = 588;
                                    this.ruleAction();
                                }
                            }
                            this.state = 593;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 594;
                        this.match(ANTLRv4Parser.COLON);
                    }
                }
                this.state = 597;
                this.altList();
                this.state = 598;
                this.match(ANTLRv4Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.ruleref = function () {
        var _localctx = new RulerefContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ANTLRv4Parser.RULE_ruleref);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this.match(ANTLRv4Parser.RULE_REF);
                this.state = 602;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.BEGIN_ARGUMENT) {
                    {
                        this.state = 601;
                        this.argActionBlock();
                    }
                }
                this.state = 605;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ANTLRv4Parser.LT) {
                    {
                        this.state = 604;
                        this.elementOptions();
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
    ANTLRv4Parser.prototype.characterRange = function () {
        var _localctx = new CharacterRangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, ANTLRv4Parser.RULE_characterRange);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.match(ANTLRv4Parser.STRING_LITERAL);
                this.state = 608;
                this.match(ANTLRv4Parser.RANGE);
                this.state = 609;
                this.match(ANTLRv4Parser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.terminal = function () {
        var _localctx = new TerminalContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, ANTLRv4Parser.RULE_terminal);
        var _la;
        try {
            this.state = 619;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ANTLRv4Parser.TOKEN_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 611;
                        this.match(ANTLRv4Parser.TOKEN_REF);
                        this.state = 613;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.LT) {
                            {
                                this.state = 612;
                                this.elementOptions();
                            }
                        }
                    }
                    break;
                case ANTLRv4Parser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 615;
                        this.match(ANTLRv4Parser.STRING_LITERAL);
                        this.state = 617;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ANTLRv4Parser.LT) {
                            {
                                this.state = 616;
                                this.elementOptions();
                            }
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
    ANTLRv4Parser.prototype.elementOptions = function () {
        var _localctx = new ElementOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, ANTLRv4Parser.RULE_elementOptions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 621;
                this.match(ANTLRv4Parser.LT);
                this.state = 622;
                this.elementOption();
                this.state = 627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ANTLRv4Parser.COMMA) {
                    {
                        {
                            this.state = 623;
                            this.match(ANTLRv4Parser.COMMA);
                            this.state = 624;
                            this.elementOption();
                        }
                    }
                    this.state = 629;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 630;
                this.match(ANTLRv4Parser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ANTLRv4Parser.prototype.elementOption = function () {
        var _localctx = new ElementOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, ANTLRv4Parser.RULE_elementOption);
        try {
            this.state = 639;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 632;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 633;
                        this.identifier();
                        this.state = 634;
                        this.match(ANTLRv4Parser.ASSIGN);
                        this.state = 637;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ANTLRv4Parser.TOKEN_REF:
                            case ANTLRv4Parser.RULE_REF:
                                {
                                    this.state = 635;
                                    this.identifier();
                                }
                                break;
                            case ANTLRv4Parser.STRING_LITERAL:
                                {
                                    this.state = 636;
                                    this.match(ANTLRv4Parser.STRING_LITERAL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
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
    ANTLRv4Parser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, ANTLRv4Parser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 641;
                _la = this._input.LA(1);
                if (!(_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF)) {
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
    Object.defineProperty(ANTLRv4Parser, "_ATN", {
        get: function () {
            if (!ANTLRv4Parser.__ATN) {
                ANTLRv4Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ANTLRv4Parser._serializedATN));
            }
            return ANTLRv4Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ANTLRv4Parser.TOKEN_REF = 1;
    ANTLRv4Parser.RULE_REF = 2;
    ANTLRv4Parser.LEXER_CHAR_SET = 3;
    ANTLRv4Parser.DOC_COMMENT = 4;
    ANTLRv4Parser.BLOCK_COMMENT = 5;
    ANTLRv4Parser.LINE_COMMENT = 6;
    ANTLRv4Parser.INT = 7;
    ANTLRv4Parser.STRING_LITERAL = 8;
    ANTLRv4Parser.UNTERMINATED_STRING_LITERAL = 9;
    ANTLRv4Parser.BEGIN_ARGUMENT = 10;
    ANTLRv4Parser.BEGIN_ACTION = 11;
    ANTLRv4Parser.OPTIONS = 12;
    ANTLRv4Parser.TOKENS = 13;
    ANTLRv4Parser.CHANNELS = 14;
    ANTLRv4Parser.IMPORT = 15;
    ANTLRv4Parser.FRAGMENT = 16;
    ANTLRv4Parser.LEXER = 17;
    ANTLRv4Parser.PARSER = 18;
    ANTLRv4Parser.GRAMMAR = 19;
    ANTLRv4Parser.PROTECTED = 20;
    ANTLRv4Parser.PUBLIC = 21;
    ANTLRv4Parser.PRIVATE = 22;
    ANTLRv4Parser.RETURNS = 23;
    ANTLRv4Parser.LOCALS = 24;
    ANTLRv4Parser.THROWS = 25;
    ANTLRv4Parser.CATCH = 26;
    ANTLRv4Parser.FINALLY = 27;
    ANTLRv4Parser.MODE = 28;
    ANTLRv4Parser.COLON = 29;
    ANTLRv4Parser.COLONCOLON = 30;
    ANTLRv4Parser.COMMA = 31;
    ANTLRv4Parser.SEMI = 32;
    ANTLRv4Parser.LPAREN = 33;
    ANTLRv4Parser.RPAREN = 34;
    ANTLRv4Parser.LBRACE = 35;
    ANTLRv4Parser.RBRACE = 36;
    ANTLRv4Parser.RARROW = 37;
    ANTLRv4Parser.LT = 38;
    ANTLRv4Parser.GT = 39;
    ANTLRv4Parser.ASSIGN = 40;
    ANTLRv4Parser.QUESTION = 41;
    ANTLRv4Parser.STAR = 42;
    ANTLRv4Parser.PLUS_ASSIGN = 43;
    ANTLRv4Parser.PLUS = 44;
    ANTLRv4Parser.OR = 45;
    ANTLRv4Parser.DOLLAR = 46;
    ANTLRv4Parser.RANGE = 47;
    ANTLRv4Parser.DOT = 48;
    ANTLRv4Parser.AT = 49;
    ANTLRv4Parser.POUND = 50;
    ANTLRv4Parser.NOT = 51;
    ANTLRv4Parser.ID = 52;
    ANTLRv4Parser.WS = 53;
    ANTLRv4Parser.ERRCHAR = 54;
    ANTLRv4Parser.END_ARGUMENT = 55;
    ANTLRv4Parser.UNTERMINATED_ARGUMENT = 56;
    ANTLRv4Parser.ARGUMENT_CONTENT = 57;
    ANTLRv4Parser.END_ACTION = 58;
    ANTLRv4Parser.UNTERMINATED_ACTION = 59;
    ANTLRv4Parser.ACTION_CONTENT = 60;
    ANTLRv4Parser.OPT_LBRACE = 61;
    ANTLRv4Parser.UNTERMINATED_CHAR_SET = 62;
    ANTLRv4Parser.RULE_grammarSpec = 0;
    ANTLRv4Parser.RULE_grammarDecl = 1;
    ANTLRv4Parser.RULE_grammarType = 2;
    ANTLRv4Parser.RULE_prequelConstruct = 3;
    ANTLRv4Parser.RULE_optionsSpec = 4;
    ANTLRv4Parser.RULE_option = 5;
    ANTLRv4Parser.RULE_optionValue = 6;
    ANTLRv4Parser.RULE_delegateGrammars = 7;
    ANTLRv4Parser.RULE_delegateGrammar = 8;
    ANTLRv4Parser.RULE_tokensSpec = 9;
    ANTLRv4Parser.RULE_channelsSpec = 10;
    ANTLRv4Parser.RULE_idList = 11;
    ANTLRv4Parser.RULE_action_ = 12;
    ANTLRv4Parser.RULE_actionScopeName = 13;
    ANTLRv4Parser.RULE_actionBlock = 14;
    ANTLRv4Parser.RULE_argActionBlock = 15;
    ANTLRv4Parser.RULE_modeSpec = 16;
    ANTLRv4Parser.RULE_rules = 17;
    ANTLRv4Parser.RULE_ruleSpec = 18;
    ANTLRv4Parser.RULE_parserRuleSpec = 19;
    ANTLRv4Parser.RULE_exceptionGroup = 20;
    ANTLRv4Parser.RULE_exceptionHandler = 21;
    ANTLRv4Parser.RULE_finallyClause = 22;
    ANTLRv4Parser.RULE_rulePrequel = 23;
    ANTLRv4Parser.RULE_ruleReturns = 24;
    ANTLRv4Parser.RULE_throwsSpec = 25;
    ANTLRv4Parser.RULE_localsSpec = 26;
    ANTLRv4Parser.RULE_ruleAction = 27;
    ANTLRv4Parser.RULE_ruleModifiers = 28;
    ANTLRv4Parser.RULE_ruleModifier = 29;
    ANTLRv4Parser.RULE_ruleBlock = 30;
    ANTLRv4Parser.RULE_ruleAltList = 31;
    ANTLRv4Parser.RULE_labeledAlt = 32;
    ANTLRv4Parser.RULE_lexerRuleSpec = 33;
    ANTLRv4Parser.RULE_lexerRuleBlock = 34;
    ANTLRv4Parser.RULE_lexerAltList = 35;
    ANTLRv4Parser.RULE_lexerAlt = 36;
    ANTLRv4Parser.RULE_lexerElements = 37;
    ANTLRv4Parser.RULE_lexerElement = 38;
    ANTLRv4Parser.RULE_labeledLexerElement = 39;
    ANTLRv4Parser.RULE_lexerBlock = 40;
    ANTLRv4Parser.RULE_lexerCommands = 41;
    ANTLRv4Parser.RULE_lexerCommand = 42;
    ANTLRv4Parser.RULE_lexerCommandName = 43;
    ANTLRv4Parser.RULE_lexerCommandExpr = 44;
    ANTLRv4Parser.RULE_altList = 45;
    ANTLRv4Parser.RULE_alternative = 46;
    ANTLRv4Parser.RULE_element = 47;
    ANTLRv4Parser.RULE_labeledElement = 48;
    ANTLRv4Parser.RULE_ebnf = 49;
    ANTLRv4Parser.RULE_blockSuffix = 50;
    ANTLRv4Parser.RULE_ebnfSuffix = 51;
    ANTLRv4Parser.RULE_lexerAtom = 52;
    ANTLRv4Parser.RULE_atom = 53;
    ANTLRv4Parser.RULE_notSet = 54;
    ANTLRv4Parser.RULE_blockSet = 55;
    ANTLRv4Parser.RULE_setElement = 56;
    ANTLRv4Parser.RULE_block = 57;
    ANTLRv4Parser.RULE_ruleref = 58;
    ANTLRv4Parser.RULE_characterRange = 59;
    ANTLRv4Parser.RULE_terminal = 60;
    ANTLRv4Parser.RULE_elementOptions = 61;
    ANTLRv4Parser.RULE_elementOption = 62;
    ANTLRv4Parser.RULE_identifier = 63;
    // tslint:disable:no-trailing-whitespace
    ANTLRv4Parser.ruleNames = [
        "grammarSpec", "grammarDecl", "grammarType", "prequelConstruct", "optionsSpec",
        "option", "optionValue", "delegateGrammars", "delegateGrammar", "tokensSpec",
        "channelsSpec", "idList", "action_", "actionScopeName", "actionBlock",
        "argActionBlock", "modeSpec", "rules", "ruleSpec", "parserRuleSpec", "exceptionGroup",
        "exceptionHandler", "finallyClause", "rulePrequel", "ruleReturns", "throwsSpec",
        "localsSpec", "ruleAction", "ruleModifiers", "ruleModifier", "ruleBlock",
        "ruleAltList", "labeledAlt", "lexerRuleSpec", "lexerRuleBlock", "lexerAltList",
        "lexerAlt", "lexerElements", "lexerElement", "labeledLexerElement", "lexerBlock",
        "lexerCommands", "lexerCommand", "lexerCommandName", "lexerCommandExpr",
        "altList", "alternative", "element", "labeledElement", "ebnf", "blockSuffix",
        "ebnfSuffix", "lexerAtom", "atom", "notSet", "blockSet", "setElement",
        "block", "ruleref", "characterRange", "terminal", "elementOptions", "elementOption",
        "identifier",
    ];
    ANTLRv4Parser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'options'", "'tokens'",
        "'channels'", "'import'", "'fragment'", "'lexer'", "'parser'", "'grammar'",
        "'protected'", "'public'", "'private'", "'returns'", "'locals'", "'throws'",
        "'catch'", "'finally'", "'mode'",
    ];
    ANTLRv4Parser._SYMBOLIC_NAMES = [
        undefined, "TOKEN_REF", "RULE_REF", "LEXER_CHAR_SET", "DOC_COMMENT", "BLOCK_COMMENT",
        "LINE_COMMENT", "INT", "STRING_LITERAL", "UNTERMINATED_STRING_LITERAL",
        "BEGIN_ARGUMENT", "BEGIN_ACTION", "OPTIONS", "TOKENS", "CHANNELS", "IMPORT",
        "FRAGMENT", "LEXER", "PARSER", "GRAMMAR", "PROTECTED", "PUBLIC", "PRIVATE",
        "RETURNS", "LOCALS", "THROWS", "CATCH", "FINALLY", "MODE", "COLON", "COLONCOLON",
        "COMMA", "SEMI", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "RARROW", "LT",
        "GT", "ASSIGN", "QUESTION", "STAR", "PLUS_ASSIGN", "PLUS", "OR", "DOLLAR",
        "RANGE", "DOT", "AT", "POUND", "NOT", "ID", "WS", "ERRCHAR", "END_ARGUMENT",
        "UNTERMINATED_ARGUMENT", "ARGUMENT_CONTENT", "END_ACTION", "UNTERMINATED_ACTION",
        "ACTION_CONTENT", "OPT_LBRACE", "UNTERMINATED_CHAR_SET",
    ];
    ANTLRv4Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ANTLRv4Parser._LITERAL_NAMES, ANTLRv4Parser._SYMBOLIC_NAMES, []);
    ANTLRv4Parser._serializedATNSegments = 2;
    ANTLRv4Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u0286\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x03\x02\x07\x02\x84\n\x02\f\x02\x0E" +
        "\x02\x87\v\x02\x03\x02\x03\x02\x07\x02\x8B\n\x02\f\x02\x0E\x02\x8E\v\x02" +
        "\x03\x02\x03\x02\x07\x02\x92\n\x02\f\x02\x0E\x02\x95\v\x02\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x05\x04\xA2\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "\xA9\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xB0\n\x06\f" +
        "\x06\x0E\x06\xB3\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\b\x07\b\xBE\n\b\f\b\x0E\b\xC1\v\b\x03\b\x03\b\x03\b\x05" +
        "\b\xC6\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\xCC\n\t\f\t\x0E\t\xCF\v\t\x03" +
        "\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xD8\n\n\x03\v\x03\v\x03\v" +
        "\x05\v\xDD\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\xE4\n\f\x03\f\x03\f" +
        "\x03\r\x03\r\x03\r\x07\r\xEB\n\r\f\r\x0E\r\xEE\v\r\x03\r\x05\r\xF1\n\r" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF7\n\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xFF\n\x0F\x03\x10\x03\x10\x07\x10" +
        "\u0103\n\x10\f\x10\x0E\x10\u0106\v\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x07\x11\u010C\n\x11\f\x11\x0E\x11\u010F\v\x11\x03\x11\x03\x11\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x07\x12\u0117\n\x12\f\x12\x0E\x12\u011A\v\x12" +
        "\x03\x13\x07\x13\u011D\n\x13\f\x13\x0E\x13\u0120\v\x13\x03\x14\x03\x14" +
        "\x05\x14\u0124\n\x14\x03\x15\x07\x15\u0127\n\x15\f\x15\x0E\x15\u012A\v" +
        "\x15\x03\x15\x05\x15\u012D\n\x15\x03\x15\x03\x15\x05\x15\u0131\n\x15\x03" +
        "\x15\x05\x15\u0134\n\x15\x03\x15\x05\x15\u0137\n\x15\x03\x15\x05\x15\u013A" +
        "\n\x15\x03\x15\x07\x15\u013D\n\x15\f\x15\x0E\x15\u0140\v\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x15\x03\x16\x07\x16\u0148\n\x16\f\x16\x0E\x16" +
        "\u014B\v\x16\x03\x16\x05\x16\u014E\n\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
        "\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0159\n\x19\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0162\n\x1B\f\x1B" +
        "\x0E\x1B\u0165\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1E\x06\x1E\u016F\n\x1E\r\x1E\x0E\x1E\u0170\x03\x1F\x03\x1F\x03" +
        " \x03 \x03!\x03!\x03!\x07!\u017A\n!\f!\x0E!\u017D\v!\x03\"\x03\"\x03\"" +
        "\x05\"\u0182\n\"\x03#\x07#\u0185\n#\f#\x0E#\u0188\v#\x03#\x05#\u018B\n" +
        "#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x07%\u0197\n%\f%\x0E" +
        "%\u019A\v%\x03&\x03&\x05&\u019E\n&\x03&\x05&\u01A1\n&\x03\'\x06\'\u01A4" +
        "\n\'\r\'\x0E\'\u01A5\x03(\x03(\x05(\u01AA\n(\x03(\x03(\x05(\u01AE\n(\x03" +
        "(\x03(\x05(\u01B2\n(\x03(\x03(\x05(\u01B6\n(\x05(\u01B8\n(\x03)\x03)\x03" +
        ")\x03)\x05)\u01BE\n)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x07+\u01C8" +
        "\n+\f+\x0E+\u01CB\v+\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u01D3\n,\x03-" +
        "\x03-\x05-\u01D7\n-\x03.\x03.\x05.\u01DB\n.\x03/\x03/\x03/\x07/\u01E0" +
        "\n/\f/\x0E/\u01E3\v/\x030\x050\u01E6\n0\x030\x060\u01E9\n0\r0\x0E0\u01EA" +
        "\x030\x050\u01EE\n0\x031\x031\x031\x051\u01F3\n1\x031\x031\x031\x051\u01F8" +
        "\n1\x031\x031\x031\x051\u01FD\n1\x051\u01FF\n1\x032\x032\x032\x032\x05" +
        "2\u0205\n2\x033\x033\x053\u0209\n3\x034\x034\x035\x035\x055\u020F\n5\x03" +
        "5\x035\x055\u0213\n5\x035\x035\x055\u0217\n5\x055\u0219\n5\x036\x036\x03" +
        "6\x036\x036\x036\x056\u0221\n6\x056\u0223\n6\x037\x037\x037\x037\x037" +
        "\x057\u022A\n7\x057\u022C\n7\x038\x038\x038\x038\x058\u0232\n8\x039\x03" +
        "9\x039\x039\x079\u0238\n9\f9\x0E9\u023B\v9\x039\x039\x03:\x03:\x05:\u0241" +
        "\n:\x03:\x03:\x05:\u0245\n:\x03:\x03:\x05:\u0249\n:\x03;\x03;\x05;\u024D" +
        "\n;\x03;\x07;\u0250\n;\f;\x0E;\u0253\v;\x03;\x05;\u0256\n;\x03;\x03;\x03" +
        ";\x03<\x03<\x05<\u025D\n<\x03<\x05<\u0260\n<\x03=\x03=\x03=\x03=\x03>" +
        "\x03>\x05>\u0268\n>\x03>\x03>\x05>\u026C\n>\x05>\u026E\n>\x03?\x03?\x03" +
        "?\x03?\x07?\u0274\n?\f?\x0E?\u0277\v?\x03?\x03?\x03@\x03@\x03@\x03@\x03" +
        "@\x05@\u0280\n@\x05@\u0282\n@\x03A\x03A\x03A\x02\x02\x02B\x02\x02\x04" +
        "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
        "\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
        "\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
        "J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
        "f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
        "\x02\x02\x05\x04\x02\x12\x12\x16\x18\x04\x02**--\x03\x02\x03\x04\x02\u02AD" +
        "\x02\x85\x03\x02\x02\x02\x04\x98\x03\x02\x02\x02\x06\xA1\x03\x02\x02\x02" +
        "\b\xA8\x03\x02\x02\x02\n\xAA\x03\x02\x02\x02\f\xB6\x03\x02\x02\x02\x0E" +
        "\xC5\x03\x02\x02\x02\x10\xC7\x03\x02\x02\x02\x12\xD7\x03\x02\x02\x02\x14" +
        "\xD9\x03\x02\x02\x02\x16\xE0\x03\x02\x02\x02\x18\xE7\x03\x02\x02\x02\x1A" +
        "\xF2\x03\x02\x02\x02\x1C\xFE\x03\x02\x02\x02\x1E\u0100\x03\x02\x02\x02" +
        " \u0109\x03\x02\x02\x02\"\u0112\x03\x02\x02\x02$\u011E\x03\x02\x02\x02" +
        "&\u0123\x03\x02\x02\x02(\u0128\x03\x02\x02\x02*\u0149\x03\x02\x02\x02" +
        ",\u014F\x03\x02\x02\x02.\u0153\x03\x02\x02\x020\u0158\x03\x02\x02\x02" +
        "2\u015A\x03\x02\x02\x024\u015D\x03\x02\x02\x026\u0166\x03\x02\x02\x02" +
        "8\u0169\x03\x02\x02\x02:\u016E\x03\x02\x02\x02<\u0172\x03\x02\x02\x02" +
        ">\u0174\x03\x02\x02\x02@\u0176\x03\x02\x02\x02B\u017E\x03\x02\x02\x02" +
        "D\u0186\x03\x02\x02\x02F\u0191\x03\x02\x02\x02H\u0193\x03\x02\x02\x02" +
        "J\u01A0\x03\x02\x02\x02L\u01A3\x03\x02\x02\x02N\u01B7\x03\x02\x02\x02" +
        "P\u01B9\x03\x02\x02\x02R\u01BF\x03\x02\x02\x02T\u01C3\x03\x02\x02\x02" +
        "V\u01D2\x03\x02\x02\x02X\u01D6\x03\x02\x02\x02Z\u01DA\x03\x02\x02\x02" +
        "\\\u01DC\x03\x02\x02\x02^\u01ED\x03\x02\x02\x02`\u01FE\x03\x02\x02\x02" +
        "b\u0200\x03\x02\x02\x02d\u0206\x03\x02\x02\x02f\u020A\x03\x02\x02\x02" +
        "h\u0218\x03\x02\x02\x02j\u0222\x03\x02\x02\x02l\u022B\x03\x02\x02\x02" +
        "n\u0231\x03\x02\x02\x02p\u0233\x03\x02\x02\x02r\u0248\x03\x02\x02\x02" +
        "t\u024A\x03\x02\x02\x02v\u025A\x03\x02\x02\x02x\u0261\x03\x02\x02\x02" +
        "z\u026D\x03\x02\x02\x02|\u026F\x03\x02\x02\x02~\u0281\x03\x02\x02\x02" +
        "\x80\u0283\x03\x02\x02\x02\x82\x84\x07\x06\x02\x02\x83\x82\x03\x02\x02" +
        "\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02" +
        "\x02\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8C\x05\x04\x03" +
        "\x02\x89\x8B\x05\b\x05\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02" +
        "\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02" +
        "\x02\x8E\x8C\x03\x02\x02\x02\x8F\x93\x05$\x13\x02\x90\x92\x05\"\x12\x02" +
        "\x91\x90\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02" +
        "\x93\x94\x03\x02\x02\x02\x94\x96\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02" +
        "\x96\x97\x07\x02\x02\x03\x97\x03\x03\x02\x02\x02\x98\x99\x05\x06\x04\x02" +
        "\x99\x9A\x05\x80A\x02\x9A\x9B\x07\"\x02\x02\x9B\x05\x03\x02\x02\x02\x9C" +
        "\x9D\x07\x13\x02\x02\x9D\xA2\x07\x15\x02\x02\x9E\x9F\x07\x14\x02\x02\x9F" +
        "\xA2\x07\x15\x02\x02\xA0\xA2\x07\x15\x02\x02\xA1\x9C\x03\x02\x02\x02\xA1" +
        "\x9E\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x07\x03\x02\x02\x02\xA3" +
        "\xA9\x05\n\x06\x02\xA4\xA9\x05\x10\t\x02\xA5\xA9\x05\x14\v\x02\xA6\xA9" +
        "\x05\x16\f\x02\xA7\xA9\x05\x1A\x0E\x02\xA8\xA3\x03\x02\x02\x02\xA8\xA4" +
        "\x03\x02\x02\x02\xA8\xA5\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA7" +
        "\x03\x02\x02\x02\xA9\t\x03\x02\x02\x02\xAA\xAB\x07\x0E\x02\x02\xAB\xB1" +
        "\x07%\x02\x02\xAC\xAD\x05\f\x07\x02\xAD\xAE\x07\"\x02\x02\xAE\xB0\x03" +
        "\x02\x02\x02\xAF\xAC\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03" +
        "\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB1\x03" +
        "\x02\x02\x02\xB4\xB5\x07&\x02\x02\xB5\v\x03\x02\x02\x02\xB6\xB7\x05\x80" +
        "A\x02\xB7\xB8\x07*\x02\x02\xB8\xB9\x05\x0E\b\x02\xB9\r\x03\x02\x02\x02" +
        "\xBA\xBF\x05\x80A\x02\xBB\xBC\x072\x02\x02\xBC\xBE\x05\x80A\x02\xBD\xBB" +
        "\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0" +
        "\x03\x02\x02\x02\xC0\xC6\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC6" +
        "\x07\n\x02\x02\xC3\xC6\x05\x1E\x10\x02\xC4\xC6\x07\t\x02\x02\xC5\xBA\x03" +
        "\x02\x02\x02\xC5\xC2\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC4\x03" +
        "\x02\x02\x02\xC6\x0F\x03\x02\x02\x02\xC7\xC8\x07\x11\x02\x02\xC8\xCD\x05" +
        "\x12\n\x02\xC9\xCA\x07!\x02\x02\xCA\xCC\x05\x12\n\x02\xCB\xC9\x03\x02" +
        "\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02" +
        "\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x07\"" +
        "\x02\x02\xD1\x11\x03\x02\x02\x02\xD2\xD3\x05\x80A\x02\xD3\xD4\x07*\x02" +
        "\x02\xD4\xD5\x05\x80A\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD8\x05\x80A\x02" +
        "\xD7\xD2\x03\x02\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\x13\x03\x02\x02\x02" +
        "\xD9\xDA\x07\x0F\x02\x02\xDA\xDC\x07%\x02\x02\xDB\xDD\x05\x18\r\x02\xDC" +
        "\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE" +
        "\xDF\x07&\x02\x02\xDF\x15\x03\x02\x02\x02\xE0\xE1\x07\x10\x02\x02\xE1" +
        "\xE3\x07%\x02\x02\xE2\xE4\x05\x18\r\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4" +
        "\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07&\x02\x02\xE6\x17" +
        "\x03\x02\x02\x02\xE7\xEC\x05\x80A\x02\xE8\xE9\x07!\x02\x02\xE9\xEB\x05" +
        "\x80A\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03" +
        "\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03" +
        "\x02\x02\x02\xEF\xF1\x07!\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03" +
        "\x02\x02\x02\xF1\x19\x03\x02\x02\x02\xF2\xF6\x073\x02\x02\xF3\xF4\x05" +
        "\x1C\x0F\x02\xF4\xF5\x07 \x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF3\x03" +
        "\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x05" +
        "\x80A\x02\xF9\xFA\x05\x1E\x10\x02\xFA\x1B\x03\x02\x02\x02\xFB\xFF\x05" +
        "\x80A\x02\xFC\xFF\x07\x13\x02\x02\xFD\xFF\x07\x14\x02\x02\xFE\xFB\x03" +
        "\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\x1D\x03" +
        "\x02\x02\x02\u0100\u0104\x07\r\x02\x02\u0101\u0103\x07>\x02\x02\u0102" +
        "\u0101\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02" +
        "\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106" +
        "\u0104\x03\x02\x02\x02\u0107\u0108\x07<\x02\x02\u0108\x1F\x03\x02\x02" +
        "\x02\u0109\u010D\x07\f\x02\x02\u010A\u010C\x07;\x02\x02\u010B\u010A\x03" +
        "\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D" +
        "\u010E\x03\x02\x02\x02\u010E\u0110\x03\x02\x02\x02\u010F\u010D\x03\x02" +
        "\x02\x02\u0110\u0111\x079\x02\x02\u0111!\x03\x02\x02\x02\u0112\u0113\x07" +
        "\x1E\x02\x02\u0113\u0114\x05\x80A\x02\u0114\u0118\x07\"\x02\x02\u0115" +
        "\u0117\x05D#\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02" +
        "\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119#\x03\x02" +
        "\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011D\x05&\x14\x02\u011C\u011B" +
        "\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02" +
        "\u011E\u011F\x03\x02\x02\x02\u011F%\x03\x02\x02\x02\u0120\u011E\x03\x02" +
        "\x02\x02\u0121\u0124\x05(\x15\x02\u0122\u0124\x05D#\x02\u0123\u0121\x03" +
        "\x02\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\'\x03\x02\x02\x02\u0125" +
        "\u0127\x07\x06\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02" +
        "\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129" +
        "\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012D\x05:\x1E" +
        "\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E" +
        "\x03\x02\x02\x02\u012E\u0130\x07\x04\x02\x02\u012F\u0131\x05 \x11\x02" +
        "\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03" +
        "\x02\x02\x02\u0132\u0134\x052\x1A\x02\u0133\u0132\x03\x02\x02\x02\u0133" +
        "\u0134\x03\x02\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0137\x054\x1B" +
        "\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139" +
        "\x03\x02\x02\x02\u0138\u013A\x056\x1C\x02\u0139\u0138\x03\x02\x02\x02" +
        "\u0139\u013A\x03\x02\x02\x02\u013A\u013E\x03\x02\x02\x02\u013B\u013D\x05" +
        "0\x19\x02\u013C\u013B\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E" +
        "\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02" +
        "\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142\x07\x1F\x02\x02\u0142" +
        "\u0143\x05> \x02\u0143\u0144\x07\"\x02\x02\u0144\u0145\x05*\x16\x02\u0145" +
        ")\x03\x02\x02\x02\u0146\u0148\x05,\x17\x02\u0147\u0146\x03\x02\x02\x02" +
        "\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03" +
        "\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C" +
        "\u014E\x05.\x18\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02" +
        "\x02\u014E+\x03\x02\x02\x02\u014F\u0150\x07\x1C\x02\x02\u0150\u0151\x05" +
        " \x11\x02\u0151\u0152\x05\x1E\x10\x02\u0152-\x03\x02\x02\x02\u0153\u0154" +
        "\x07\x1D\x02\x02\u0154\u0155\x05\x1E\x10\x02\u0155/\x03\x02\x02\x02\u0156" +
        "\u0159\x05\n\x06\x02\u0157\u0159\x058\x1D\x02\u0158\u0156\x03\x02\x02" +
        "\x02\u0158\u0157\x03\x02\x02\x02\u01591\x03\x02\x02\x02\u015A\u015B\x07" +
        "\x19\x02\x02\u015B\u015C\x05 \x11\x02\u015C3\x03\x02\x02\x02\u015D\u015E" +
        "\x07\x1B\x02\x02\u015E\u0163\x05\x80A\x02\u015F\u0160\x07!\x02\x02\u0160" +
        "\u0162\x05\x80A\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0165\x03\x02\x02" +
        "\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u01645\x03" +
        "\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0167\x07\x1A\x02\x02\u0167" +
        "\u0168\x05 \x11\x02\u01687\x03\x02\x02\x02\u0169\u016A\x073\x02\x02\u016A" +
        "\u016B\x05\x80A\x02\u016B\u016C\x05\x1E\x10\x02\u016C9\x03\x02\x02\x02" +
        "\u016D\u016F\x05<\x1F\x02\u016E\u016D\x03\x02\x02\x02\u016F\u0170\x03" +
        "\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
        ";\x03\x02\x02\x02\u0172\u0173\t\x02\x02\x02\u0173=\x03\x02\x02\x02\u0174" +
        "\u0175\x05@!\x02\u0175?\x03\x02\x02\x02\u0176\u017B\x05B\"\x02\u0177\u0178" +
        "\x07/\x02\x02\u0178\u017A\x05B\"\x02\u0179\u0177\x03\x02\x02\x02\u017A" +
        "\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02" +
        "\x02\x02\u017CA\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0181" +
        "\x05^0\x02\u017F\u0180\x074\x02\x02\u0180\u0182\x05\x80A\x02\u0181\u017F" +
        "\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182C\x03\x02\x02\x02\u0183" +
        "\u0185\x07\x06\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188\x03\x02" +
        "\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187" +
        "\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018B\x07\x12" +
        "\x02\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
        "\u018C\x03\x02\x02\x02\u018C\u018D\x07\x03\x02\x02\u018D\u018E\x07\x1F" +
        "\x02\x02\u018E\u018F\x05F$\x02\u018F\u0190\x07\"\x02\x02\u0190E\x03\x02" +
        "\x02\x02\u0191\u0192\x05H%\x02\u0192G\x03\x02\x02\x02\u0193\u0198\x05" +
        "J&\x02\u0194\u0195\x07/\x02\x02\u0195\u0197\x05J&\x02\u0196\u0194\x03" +
        "\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198" +
        "\u0199\x03\x02\x02\x02\u0199I\x03\x02\x02\x02\u019A\u0198\x03\x02\x02" +
        "\x02\u019B\u019D\x05L\'\x02\u019C\u019E\x05T+\x02\u019D\u019C\x03\x02" +
        "\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F" +
        "\u01A1\x03\x02\x02\x02\u01A0\u019B\x03\x02\x02\x02\u01A0\u019F\x03\x02" +
        "\x02\x02\u01A1K\x03\x02\x02\x02\u01A2\u01A4\x05N(\x02\u01A3\u01A2\x03" +
        "\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5" +
        "\u01A6\x03\x02\x02\x02\u01A6M\x03\x02\x02\x02\u01A7\u01A9\x05P)\x02\u01A8" +
        "\u01AA\x05h5\x02\u01A9\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02" +
        "\u01AA\u01B8\x03\x02\x02\x02\u01AB\u01AD\x05j6\x02\u01AC\u01AE\x05h5\x02" +
        "\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B8\x03" +
        "\x02\x02\x02\u01AF\u01B1\x05R*\x02\u01B0\u01B2\x05h5\x02\u01B1\u01B0\x03" +
        "\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B8\x03\x02\x02\x02\u01B3" +
        "\u01B5\x05\x1E\x10\x02\u01B4\u01B6\x07+\x02\x02\u01B5\u01B4\x03\x02\x02" +
        "\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01A7" +
        "\x03\x02\x02\x02\u01B7\u01AB\x03\x02\x02\x02\u01B7\u01AF\x03\x02\x02\x02" +
        "\u01B7\u01B3\x03\x02\x02\x02\u01B8O\x03\x02\x02\x02\u01B9\u01BA\x05\x80" +
        "A\x02\u01BA\u01BD\t\x03\x02\x02\u01BB\u01BE\x05j6\x02\u01BC\u01BE\x05" +
        "R*\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BEQ" +
        "\x03\x02\x02\x02\u01BF\u01C0\x07#\x02\x02\u01C0\u01C1\x05H%\x02\u01C1" +
        "\u01C2\x07$\x02\x02\u01C2S\x03\x02\x02\x02\u01C3\u01C4\x07\'\x02\x02\u01C4" +
        "\u01C9\x05V,\x02\u01C5\u01C6\x07!\x02\x02\u01C6\u01C8\x05V,\x02\u01C7" +
        "\u01C5\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02" +
        "\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CAU\x03\x02\x02\x02\u01CB\u01C9" +
        "\x03\x02\x02\x02\u01CC\u01CD\x05X-\x02\u01CD\u01CE\x07#\x02\x02\u01CE" +
        "\u01CF\x05Z.\x02\u01CF\u01D0\x07$\x02\x02\u01D0\u01D3\x03\x02\x02\x02" +
        "\u01D1\u01D3\x05X-\x02\u01D2\u01CC\x03\x02\x02\x02\u01D2\u01D1\x03\x02" +
        "\x02\x02\u01D3W\x03\x02\x02\x02\u01D4\u01D7\x05\x80A\x02\u01D5\u01D7\x07" +
        "\x1E\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7" +
        "Y\x03\x02\x02\x02\u01D8\u01DB\x05\x80A\x02\u01D9\u01DB\x07\t\x02\x02\u01DA" +
        "\u01D8\x03\x02\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB[\x03\x02\x02" +
        "\x02\u01DC\u01E1\x05^0\x02\u01DD\u01DE\x07/\x02\x02\u01DE\u01E0\x05^0" +
        "\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF" +
        "\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2]\x03\x02\x02\x02\u01E3" +
        "\u01E1\x03\x02\x02\x02\u01E4\u01E6\x05|?\x02\u01E5\u01E4\x03\x02\x02\x02" +
        "\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E8\x03\x02\x02\x02\u01E7\u01E9\x05" +
        "`1\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01E8" +
        "\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02" +
        "\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E5\x03\x02\x02\x02\u01ED\u01EC\x03" +
        "\x02\x02\x02\u01EE_\x03\x02\x02\x02\u01EF\u01F2\x05b2\x02\u01F0\u01F3" +
        "\x05h5\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2" +
        "\u01F1\x03\x02\x02\x02\u01F3\u01FF\x03\x02\x02\x02\u01F4\u01F7\x05l7\x02" +
        "\u01F5\u01F8\x05h5\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01F5\x03\x02" +
        "\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01FF\x03\x02\x02\x02\u01F9" +
        "\u01FF\x05d3\x02\u01FA\u01FC\x05\x1E\x10\x02\u01FB\u01FD\x07+\x02\x02" +
        "\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FF\x03" +
        "\x02\x02\x02\u01FE\u01EF\x03\x02\x02\x02\u01FE\u01F4\x03\x02\x02\x02\u01FE" +
        "\u01F9\x03\x02\x02\x02\u01FE\u01FA\x03\x02\x02\x02\u01FFa\x03\x02\x02" +
        "\x02\u0200\u0201\x05\x80A\x02\u0201\u0204\t\x03\x02\x02\u0202\u0205\x05" +
        "l7\x02\u0203\u0205\x05t;\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203\x03" +
        "\x02\x02\x02\u0205c\x03\x02\x02\x02\u0206\u0208\x05t;\x02\u0207\u0209" +
        "\x05f4\x02\u0208\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209" +
        "e\x03\x02\x02\x02\u020A\u020B\x05h5\x02\u020Bg\x03\x02\x02\x02\u020C\u020E" +
        "\x07+\x02\x02\u020D\u020F\x07+\x02\x02\u020E\u020D\x03\x02\x02\x02\u020E" +
        "\u020F\x03\x02\x02\x02\u020F\u0219\x03\x02\x02\x02\u0210\u0212\x07,\x02" +
        "\x02\u0211\u0213\x07+\x02\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213" +
        "\x03\x02\x02\x02\u0213\u0219\x03\x02\x02\x02\u0214\u0216\x07.\x02\x02" +
        "\u0215\u0217\x07+\x02\x02\u0216\u0215\x03\x02\x02\x02\u0216\u0217\x03" +
        "\x02\x02\x02\u0217\u0219\x03\x02\x02\x02\u0218\u020C\x03\x02\x02\x02\u0218" +
        "\u0210\x03\x02\x02\x02\u0218\u0214\x03\x02\x02\x02\u0219i\x03\x02\x02" +
        "\x02\u021A\u0223\x05x=\x02\u021B\u0223\x05z>\x02\u021C\u0223\x05n8\x02" +
        "\u021D\u0223\x07\x05\x02\x02\u021E\u0220\x072\x02\x02\u021F\u0221\x05" +
        "|?\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0223" +
        "\x03\x02\x02\x02\u0222\u021A\x03\x02\x02\x02\u0222\u021B\x03\x02\x02\x02" +
        "\u0222\u021C\x03\x02\x02\x02\u0222\u021D\x03\x02\x02\x02\u0222\u021E\x03" +
        "\x02\x02\x02\u0223k\x03\x02\x02\x02\u0224\u022C\x05z>\x02\u0225\u022C" +
        "\x05v<\x02\u0226\u022C\x05n8\x02\u0227\u0229\x072\x02\x02\u0228\u022A" +
        "\x05|?\x02\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A" +
        "\u022C\x03\x02\x02\x02\u022B\u0224\x03\x02\x02";
    ANTLRv4Parser._serializedATNSegment1 = "\x02\u022B\u0225\x03\x02\x02\x02\u022B\u0226\x03\x02\x02\x02\u022B\u0227" +
        "\x03\x02\x02\x02\u022Cm\x03\x02\x02\x02\u022D\u022E\x075\x02\x02\u022E" +
        "\u0232\x05r:\x02\u022F\u0230\x075\x02\x02\u0230\u0232\x05p9\x02\u0231" +
        "\u022D\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0232o\x03\x02\x02" +
        "\x02\u0233\u0234\x07#\x02\x02\u0234\u0239\x05r:\x02\u0235\u0236\x07/\x02" +
        "\x02\u0236\u0238\x05r:\x02\u0237\u0235\x03\x02\x02\x02\u0238\u023B\x03" +
        "\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A" +
        "\u023C\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023D\x07$\x02" +
        "\x02\u023Dq\x03\x02\x02\x02\u023E\u0240\x07\x03\x02\x02\u023F\u0241\x05" +
        "|?\x02\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0249" +
        "\x03\x02\x02\x02\u0242\u0244\x07\n\x02\x02\u0243\u0245\x05|?\x02\u0244" +
        "\u0243\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0249\x03\x02" +
        "\x02\x02\u0246\u0249\x05x=\x02\u0247\u0249\x07\x05\x02\x02\u0248\u023E" +
        "\x03\x02\x02\x02\u0248\u0242\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02" +
        "\u0248\u0247\x03\x02\x02\x02\u0249s\x03\x02\x02\x02\u024A\u0255\x07#\x02" +
        "\x02\u024B\u024D\x05\n\x06\x02\u024C\u024B\x03\x02\x02\x02\u024C\u024D" +
        "\x03\x02\x02\x02\u024D\u0251\x03\x02\x02\x02\u024E\u0250\x058\x1D\x02" +
        "\u024F\u024E\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03" +
        "\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253" +
        "\u0251\x03\x02\x02\x02\u0254\u0256\x07\x1F\x02\x02\u0255\u024C\x03\x02" +
        "\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257" +
        "\u0258\x05\\/\x02\u0258\u0259\x07$\x02\x02\u0259u\x03\x02\x02\x02\u025A" +
        "\u025C\x07\x04\x02\x02\u025B\u025D\x05 \x11\x02\u025C\u025B\x03\x02\x02" +
        "\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E\u0260" +
        "\x05|?\x02\u025F\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
        "w\x03\x02\x02\x02\u0261\u0262\x07\n\x02\x02\u0262\u0263\x071\x02\x02\u0263" +
        "\u0264\x07\n\x02\x02\u0264y\x03\x02\x02\x02\u0265\u0267\x07\x03\x02\x02" +
        "\u0266\u0268\x05|?\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02" +
        "\x02\x02\u0268\u026E\x03\x02\x02\x02\u0269\u026B\x07\n\x02\x02\u026A\u026C" +
        "\x05|?\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C" +
        "\u026E\x03\x02\x02\x02\u026D\u0265\x03\x02\x02\x02\u026D\u0269\x03\x02" +
        "\x02\x02\u026E{\x03\x02\x02\x02\u026F\u0270\x07(\x02\x02\u0270\u0275\x05" +
        "~@\x02\u0271\u0272\x07!\x02\x02\u0272\u0274\x05~@\x02\u0273\u0271\x03" +
        "\x02\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275" +
        "\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277\u0275\x03\x02" +
        "\x02\x02\u0278\u0279\x07)\x02\x02\u0279}\x03\x02\x02\x02\u027A\u0282\x05" +
        "\x80A\x02\u027B\u027C\x05\x80A\x02\u027C\u027F\x07*\x02\x02\u027D\u0280" +
        "\x05\x80A\x02\u027E\u0280\x07\n\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F" +
        "\u027E\x03\x02\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u027A\x03\x02" +
        "\x02\x02\u0281\u027B\x03\x02\x02\x02\u0282\x7F\x03\x02\x02\x02\u0283\u0284" +
        "\t\x04\x02\x02\u0284\x81\x03\x02\x02\x02W\x85\x8C\x93\xA1\xA8\xB1\xBF" +
        "\xC5\xCD\xD7\xDC\xE3\xEC\xF0\xF6\xFE\u0104\u010D\u0118\u011E\u0123\u0128" +
        "\u012C\u0130\u0133\u0136\u0139\u013E\u0149\u014D\u0158\u0163\u0170\u017B" +
        "\u0181\u0186\u018A\u0198\u019D\u01A0\u01A5\u01A9\u01AD\u01B1\u01B5\u01B7" +
        "\u01BD\u01C9\u01D2\u01D6\u01DA\u01E1\u01E5\u01EA\u01ED\u01F2\u01F7\u01FC" +
        "\u01FE\u0204\u0208\u020E\u0212\u0216\u0218\u0220\u0222\u0229\u022B\u0231" +
        "\u0239\u0240\u0244\u0248\u024C\u0251\u0255\u025C\u025F\u0267\u026B\u026D" +
        "\u0275\u027F\u0281";
    ANTLRv4Parser._serializedATN = Utils.join([
        ANTLRv4Parser._serializedATNSegment0,
        ANTLRv4Parser._serializedATNSegment1,
    ], "");
    return ANTLRv4Parser;
}(Parser_1.Parser));
exports.ANTLRv4Parser = ANTLRv4Parser;
var GrammarSpecContext = /** @class */ (function (_super) {
    __extends(GrammarSpecContext, _super);
    function GrammarSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GrammarSpecContext.prototype.grammarDecl = function () {
        return this.getRuleContext(0, GrammarDeclContext);
    };
    GrammarSpecContext.prototype.rules = function () {
        return this.getRuleContext(0, RulesContext);
    };
    GrammarSpecContext.prototype.EOF = function () { return this.getToken(ANTLRv4Parser.EOF, 0); };
    GrammarSpecContext.prototype.DOC_COMMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.DOC_COMMENT);
        }
        else {
            return this.getToken(ANTLRv4Parser.DOC_COMMENT, i);
        }
    };
    GrammarSpecContext.prototype.prequelConstruct = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrequelConstructContext);
        }
        else {
            return this.getRuleContext(i, PrequelConstructContext);
        }
    };
    GrammarSpecContext.prototype.modeSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModeSpecContext);
        }
        else {
            return this.getRuleContext(i, ModeSpecContext);
        }
    };
    Object.defineProperty(GrammarSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_grammarSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GrammarSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterGrammarSpec) {
            listener.enterGrammarSpec(this);
        }
    };
    // @Override
    GrammarSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitGrammarSpec) {
            listener.exitGrammarSpec(this);
        }
    };
    // @Override
    GrammarSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitGrammarSpec) {
            return visitor.visitGrammarSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GrammarSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GrammarSpecContext = GrammarSpecContext;
var GrammarDeclContext = /** @class */ (function (_super) {
    __extends(GrammarDeclContext, _super);
    function GrammarDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GrammarDeclContext.prototype.grammarType = function () {
        return this.getRuleContext(0, GrammarTypeContext);
    };
    GrammarDeclContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    GrammarDeclContext.prototype.SEMI = function () { return this.getToken(ANTLRv4Parser.SEMI, 0); };
    Object.defineProperty(GrammarDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_grammarDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GrammarDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterGrammarDecl) {
            listener.enterGrammarDecl(this);
        }
    };
    // @Override
    GrammarDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitGrammarDecl) {
            listener.exitGrammarDecl(this);
        }
    };
    // @Override
    GrammarDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitGrammarDecl) {
            return visitor.visitGrammarDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GrammarDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GrammarDeclContext = GrammarDeclContext;
var GrammarTypeContext = /** @class */ (function (_super) {
    __extends(GrammarTypeContext, _super);
    function GrammarTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GrammarTypeContext.prototype.LEXER = function () { return this.tryGetToken(ANTLRv4Parser.LEXER, 0); };
    GrammarTypeContext.prototype.GRAMMAR = function () { return this.tryGetToken(ANTLRv4Parser.GRAMMAR, 0); };
    GrammarTypeContext.prototype.PARSER = function () { return this.tryGetToken(ANTLRv4Parser.PARSER, 0); };
    Object.defineProperty(GrammarTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_grammarType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GrammarTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterGrammarType) {
            listener.enterGrammarType(this);
        }
    };
    // @Override
    GrammarTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitGrammarType) {
            listener.exitGrammarType(this);
        }
    };
    // @Override
    GrammarTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitGrammarType) {
            return visitor.visitGrammarType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GrammarTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GrammarTypeContext = GrammarTypeContext;
var PrequelConstructContext = /** @class */ (function (_super) {
    __extends(PrequelConstructContext, _super);
    function PrequelConstructContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrequelConstructContext.prototype.optionsSpec = function () {
        return this.tryGetRuleContext(0, OptionsSpecContext);
    };
    PrequelConstructContext.prototype.delegateGrammars = function () {
        return this.tryGetRuleContext(0, DelegateGrammarsContext);
    };
    PrequelConstructContext.prototype.tokensSpec = function () {
        return this.tryGetRuleContext(0, TokensSpecContext);
    };
    PrequelConstructContext.prototype.channelsSpec = function () {
        return this.tryGetRuleContext(0, ChannelsSpecContext);
    };
    PrequelConstructContext.prototype.action_ = function () {
        return this.tryGetRuleContext(0, Action_Context);
    };
    Object.defineProperty(PrequelConstructContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_prequelConstruct; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrequelConstructContext.prototype.enterRule = function (listener) {
        if (listener.enterPrequelConstruct) {
            listener.enterPrequelConstruct(this);
        }
    };
    // @Override
    PrequelConstructContext.prototype.exitRule = function (listener) {
        if (listener.exitPrequelConstruct) {
            listener.exitPrequelConstruct(this);
        }
    };
    // @Override
    PrequelConstructContext.prototype.accept = function (visitor) {
        if (visitor.visitPrequelConstruct) {
            return visitor.visitPrequelConstruct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrequelConstructContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrequelConstructContext = PrequelConstructContext;
var OptionsSpecContext = /** @class */ (function (_super) {
    __extends(OptionsSpecContext, _super);
    function OptionsSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionsSpecContext.prototype.OPTIONS = function () { return this.getToken(ANTLRv4Parser.OPTIONS, 0); };
    OptionsSpecContext.prototype.LBRACE = function () { return this.getToken(ANTLRv4Parser.LBRACE, 0); };
    OptionsSpecContext.prototype.RBRACE = function () { return this.getToken(ANTLRv4Parser.RBRACE, 0); };
    OptionsSpecContext.prototype.option = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionContext);
        }
        else {
            return this.getRuleContext(i, OptionContext);
        }
    };
    OptionsSpecContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.SEMI);
        }
        else {
            return this.getToken(ANTLRv4Parser.SEMI, i);
        }
    };
    Object.defineProperty(OptionsSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_optionsSpec; },
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
    OptionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    OptionContext.prototype.ASSIGN = function () { return this.getToken(ANTLRv4Parser.ASSIGN, 0); };
    OptionContext.prototype.optionValue = function () {
        return this.getRuleContext(0, OptionValueContext);
    };
    Object.defineProperty(OptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_option; },
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
    OptionValueContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    OptionValueContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.DOT);
        }
        else {
            return this.getToken(ANTLRv4Parser.DOT, i);
        }
    };
    OptionValueContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); };
    OptionValueContext.prototype.actionBlock = function () {
        return this.tryGetRuleContext(0, ActionBlockContext);
    };
    OptionValueContext.prototype.INT = function () { return this.tryGetToken(ANTLRv4Parser.INT, 0); };
    Object.defineProperty(OptionValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_optionValue; },
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
var DelegateGrammarsContext = /** @class */ (function (_super) {
    __extends(DelegateGrammarsContext, _super);
    function DelegateGrammarsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelegateGrammarsContext.prototype.IMPORT = function () { return this.getToken(ANTLRv4Parser.IMPORT, 0); };
    DelegateGrammarsContext.prototype.delegateGrammar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelegateGrammarContext);
        }
        else {
            return this.getRuleContext(i, DelegateGrammarContext);
        }
    };
    DelegateGrammarsContext.prototype.SEMI = function () { return this.getToken(ANTLRv4Parser.SEMI, 0); };
    DelegateGrammarsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.COMMA);
        }
        else {
            return this.getToken(ANTLRv4Parser.COMMA, i);
        }
    };
    Object.defineProperty(DelegateGrammarsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_delegateGrammars; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelegateGrammarsContext.prototype.enterRule = function (listener) {
        if (listener.enterDelegateGrammars) {
            listener.enterDelegateGrammars(this);
        }
    };
    // @Override
    DelegateGrammarsContext.prototype.exitRule = function (listener) {
        if (listener.exitDelegateGrammars) {
            listener.exitDelegateGrammars(this);
        }
    };
    // @Override
    DelegateGrammarsContext.prototype.accept = function (visitor) {
        if (visitor.visitDelegateGrammars) {
            return visitor.visitDelegateGrammars(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelegateGrammarsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelegateGrammarsContext = DelegateGrammarsContext;
var DelegateGrammarContext = /** @class */ (function (_super) {
    __extends(DelegateGrammarContext, _super);
    function DelegateGrammarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelegateGrammarContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    DelegateGrammarContext.prototype.ASSIGN = function () { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); };
    Object.defineProperty(DelegateGrammarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_delegateGrammar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelegateGrammarContext.prototype.enterRule = function (listener) {
        if (listener.enterDelegateGrammar) {
            listener.enterDelegateGrammar(this);
        }
    };
    // @Override
    DelegateGrammarContext.prototype.exitRule = function (listener) {
        if (listener.exitDelegateGrammar) {
            listener.exitDelegateGrammar(this);
        }
    };
    // @Override
    DelegateGrammarContext.prototype.accept = function (visitor) {
        if (visitor.visitDelegateGrammar) {
            return visitor.visitDelegateGrammar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelegateGrammarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelegateGrammarContext = DelegateGrammarContext;
var TokensSpecContext = /** @class */ (function (_super) {
    __extends(TokensSpecContext, _super);
    function TokensSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokensSpecContext.prototype.TOKENS = function () { return this.getToken(ANTLRv4Parser.TOKENS, 0); };
    TokensSpecContext.prototype.LBRACE = function () { return this.getToken(ANTLRv4Parser.LBRACE, 0); };
    TokensSpecContext.prototype.RBRACE = function () { return this.getToken(ANTLRv4Parser.RBRACE, 0); };
    TokensSpecContext.prototype.idList = function () {
        return this.tryGetRuleContext(0, IdListContext);
    };
    Object.defineProperty(TokensSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_tokensSpec; },
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
var ChannelsSpecContext = /** @class */ (function (_super) {
    __extends(ChannelsSpecContext, _super);
    function ChannelsSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChannelsSpecContext.prototype.CHANNELS = function () { return this.getToken(ANTLRv4Parser.CHANNELS, 0); };
    ChannelsSpecContext.prototype.LBRACE = function () { return this.getToken(ANTLRv4Parser.LBRACE, 0); };
    ChannelsSpecContext.prototype.RBRACE = function () { return this.getToken(ANTLRv4Parser.RBRACE, 0); };
    ChannelsSpecContext.prototype.idList = function () {
        return this.tryGetRuleContext(0, IdListContext);
    };
    Object.defineProperty(ChannelsSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_channelsSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChannelsSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterChannelsSpec) {
            listener.enterChannelsSpec(this);
        }
    };
    // @Override
    ChannelsSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitChannelsSpec) {
            listener.exitChannelsSpec(this);
        }
    };
    // @Override
    ChannelsSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitChannelsSpec) {
            return visitor.visitChannelsSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChannelsSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChannelsSpecContext = ChannelsSpecContext;
var IdListContext = /** @class */ (function (_super) {
    __extends(IdListContext, _super);
    function IdListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdListContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    IdListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.COMMA);
        }
        else {
            return this.getToken(ANTLRv4Parser.COMMA, i);
        }
    };
    Object.defineProperty(IdListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_idList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdListContext.prototype.enterRule = function (listener) {
        if (listener.enterIdList) {
            listener.enterIdList(this);
        }
    };
    // @Override
    IdListContext.prototype.exitRule = function (listener) {
        if (listener.exitIdList) {
            listener.exitIdList(this);
        }
    };
    // @Override
    IdListContext.prototype.accept = function (visitor) {
        if (visitor.visitIdList) {
            return visitor.visitIdList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdListContext = IdListContext;
var Action_Context = /** @class */ (function (_super) {
    __extends(Action_Context, _super);
    function Action_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Action_Context.prototype.AT = function () { return this.getToken(ANTLRv4Parser.AT, 0); };
    Action_Context.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Action_Context.prototype.actionBlock = function () {
        return this.getRuleContext(0, ActionBlockContext);
    };
    Action_Context.prototype.actionScopeName = function () {
        return this.tryGetRuleContext(0, ActionScopeNameContext);
    };
    Action_Context.prototype.COLONCOLON = function () { return this.tryGetToken(ANTLRv4Parser.COLONCOLON, 0); };
    Object.defineProperty(Action_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_action_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Action_Context.prototype.enterRule = function (listener) {
        if (listener.enterAction_) {
            listener.enterAction_(this);
        }
    };
    // @Override
    Action_Context.prototype.exitRule = function (listener) {
        if (listener.exitAction_) {
            listener.exitAction_(this);
        }
    };
    // @Override
    Action_Context.prototype.accept = function (visitor) {
        if (visitor.visitAction_) {
            return visitor.visitAction_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Action_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Action_Context = Action_Context;
var ActionScopeNameContext = /** @class */ (function (_super) {
    __extends(ActionScopeNameContext, _super);
    function ActionScopeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionScopeNameContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ActionScopeNameContext.prototype.LEXER = function () { return this.tryGetToken(ANTLRv4Parser.LEXER, 0); };
    ActionScopeNameContext.prototype.PARSER = function () { return this.tryGetToken(ANTLRv4Parser.PARSER, 0); };
    Object.defineProperty(ActionScopeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_actionScopeName; },
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
var ActionBlockContext = /** @class */ (function (_super) {
    __extends(ActionBlockContext, _super);
    function ActionBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionBlockContext.prototype.BEGIN_ACTION = function () { return this.getToken(ANTLRv4Parser.BEGIN_ACTION, 0); };
    ActionBlockContext.prototype.END_ACTION = function () { return this.getToken(ANTLRv4Parser.END_ACTION, 0); };
    ActionBlockContext.prototype.ACTION_CONTENT = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.ACTION_CONTENT);
        }
        else {
            return this.getToken(ANTLRv4Parser.ACTION_CONTENT, i);
        }
    };
    Object.defineProperty(ActionBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_actionBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterActionBlock) {
            listener.enterActionBlock(this);
        }
    };
    // @Override
    ActionBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitActionBlock) {
            listener.exitActionBlock(this);
        }
    };
    // @Override
    ActionBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitActionBlock) {
            return visitor.visitActionBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionBlockContext = ActionBlockContext;
var ArgActionBlockContext = /** @class */ (function (_super) {
    __extends(ArgActionBlockContext, _super);
    function ArgActionBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgActionBlockContext.prototype.BEGIN_ARGUMENT = function () { return this.getToken(ANTLRv4Parser.BEGIN_ARGUMENT, 0); };
    ArgActionBlockContext.prototype.END_ARGUMENT = function () { return this.getToken(ANTLRv4Parser.END_ARGUMENT, 0); };
    ArgActionBlockContext.prototype.ARGUMENT_CONTENT = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.ARGUMENT_CONTENT);
        }
        else {
            return this.getToken(ANTLRv4Parser.ARGUMENT_CONTENT, i);
        }
    };
    Object.defineProperty(ArgActionBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_argActionBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgActionBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterArgActionBlock) {
            listener.enterArgActionBlock(this);
        }
    };
    // @Override
    ArgActionBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitArgActionBlock) {
            listener.exitArgActionBlock(this);
        }
    };
    // @Override
    ArgActionBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitArgActionBlock) {
            return visitor.visitArgActionBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgActionBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgActionBlockContext = ArgActionBlockContext;
var ModeSpecContext = /** @class */ (function (_super) {
    __extends(ModeSpecContext, _super);
    function ModeSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModeSpecContext.prototype.MODE = function () { return this.getToken(ANTLRv4Parser.MODE, 0); };
    ModeSpecContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ModeSpecContext.prototype.SEMI = function () { return this.getToken(ANTLRv4Parser.SEMI, 0); };
    ModeSpecContext.prototype.lexerRuleSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LexerRuleSpecContext);
        }
        else {
            return this.getRuleContext(i, LexerRuleSpecContext);
        }
    };
    Object.defineProperty(ModeSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_modeSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModeSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterModeSpec) {
            listener.enterModeSpec(this);
        }
    };
    // @Override
    ModeSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitModeSpec) {
            listener.exitModeSpec(this);
        }
    };
    // @Override
    ModeSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitModeSpec) {
            return visitor.visitModeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModeSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModeSpecContext = ModeSpecContext;
var RulesContext = /** @class */ (function (_super) {
    __extends(RulesContext, _super);
    function RulesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RulesContext.prototype.ruleSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleSpecContext);
        }
        else {
            return this.getRuleContext(i, RuleSpecContext);
        }
    };
    Object.defineProperty(RulesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_rules; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RulesContext.prototype.enterRule = function (listener) {
        if (listener.enterRules) {
            listener.enterRules(this);
        }
    };
    // @Override
    RulesContext.prototype.exitRule = function (listener) {
        if (listener.exitRules) {
            listener.exitRules(this);
        }
    };
    // @Override
    RulesContext.prototype.accept = function (visitor) {
        if (visitor.visitRules) {
            return visitor.visitRules(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RulesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RulesContext = RulesContext;
var RuleSpecContext = /** @class */ (function (_super) {
    __extends(RuleSpecContext, _super);
    function RuleSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleSpecContext.prototype.parserRuleSpec = function () {
        return this.tryGetRuleContext(0, ParserRuleSpecContext);
    };
    RuleSpecContext.prototype.lexerRuleSpec = function () {
        return this.tryGetRuleContext(0, LexerRuleSpecContext);
    };
    Object.defineProperty(RuleSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleSpec) {
            listener.enterRuleSpec(this);
        }
    };
    // @Override
    RuleSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleSpec) {
            listener.exitRuleSpec(this);
        }
    };
    // @Override
    RuleSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleSpec) {
            return visitor.visitRuleSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleSpecContext = RuleSpecContext;
var ParserRuleSpecContext = /** @class */ (function (_super) {
    __extends(ParserRuleSpecContext, _super);
    function ParserRuleSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParserRuleSpecContext.prototype.RULE_REF = function () { return this.getToken(ANTLRv4Parser.RULE_REF, 0); };
    ParserRuleSpecContext.prototype.COLON = function () { return this.getToken(ANTLRv4Parser.COLON, 0); };
    ParserRuleSpecContext.prototype.ruleBlock = function () {
        return this.getRuleContext(0, RuleBlockContext);
    };
    ParserRuleSpecContext.prototype.SEMI = function () { return this.getToken(ANTLRv4Parser.SEMI, 0); };
    ParserRuleSpecContext.prototype.exceptionGroup = function () {
        return this.getRuleContext(0, ExceptionGroupContext);
    };
    ParserRuleSpecContext.prototype.DOC_COMMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.DOC_COMMENT);
        }
        else {
            return this.getToken(ANTLRv4Parser.DOC_COMMENT, i);
        }
    };
    ParserRuleSpecContext.prototype.ruleModifiers = function () {
        return this.tryGetRuleContext(0, RuleModifiersContext);
    };
    ParserRuleSpecContext.prototype.argActionBlock = function () {
        return this.tryGetRuleContext(0, ArgActionBlockContext);
    };
    ParserRuleSpecContext.prototype.ruleReturns = function () {
        return this.tryGetRuleContext(0, RuleReturnsContext);
    };
    ParserRuleSpecContext.prototype.throwsSpec = function () {
        return this.tryGetRuleContext(0, ThrowsSpecContext);
    };
    ParserRuleSpecContext.prototype.localsSpec = function () {
        return this.tryGetRuleContext(0, LocalsSpecContext);
    };
    ParserRuleSpecContext.prototype.rulePrequel = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RulePrequelContext);
        }
        else {
            return this.getRuleContext(i, RulePrequelContext);
        }
    };
    Object.defineProperty(ParserRuleSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_parserRuleSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParserRuleSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterParserRuleSpec) {
            listener.enterParserRuleSpec(this);
        }
    };
    // @Override
    ParserRuleSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitParserRuleSpec) {
            listener.exitParserRuleSpec(this);
        }
    };
    // @Override
    ParserRuleSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitParserRuleSpec) {
            return visitor.visitParserRuleSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParserRuleSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParserRuleSpecContext = ParserRuleSpecContext;
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
        get: function () { return ANTLRv4Parser.RULE_exceptionGroup; },
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
    ExceptionHandlerContext.prototype.CATCH = function () { return this.getToken(ANTLRv4Parser.CATCH, 0); };
    ExceptionHandlerContext.prototype.argActionBlock = function () {
        return this.getRuleContext(0, ArgActionBlockContext);
    };
    ExceptionHandlerContext.prototype.actionBlock = function () {
        return this.getRuleContext(0, ActionBlockContext);
    };
    Object.defineProperty(ExceptionHandlerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_exceptionHandler; },
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
    FinallyClauseContext.prototype.FINALLY = function () { return this.getToken(ANTLRv4Parser.FINALLY, 0); };
    FinallyClauseContext.prototype.actionBlock = function () {
        return this.getRuleContext(0, ActionBlockContext);
    };
    Object.defineProperty(FinallyClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_finallyClause; },
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
var RulePrequelContext = /** @class */ (function (_super) {
    __extends(RulePrequelContext, _super);
    function RulePrequelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RulePrequelContext.prototype.optionsSpec = function () {
        return this.tryGetRuleContext(0, OptionsSpecContext);
    };
    RulePrequelContext.prototype.ruleAction = function () {
        return this.tryGetRuleContext(0, RuleActionContext);
    };
    Object.defineProperty(RulePrequelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_rulePrequel; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RulePrequelContext.prototype.enterRule = function (listener) {
        if (listener.enterRulePrequel) {
            listener.enterRulePrequel(this);
        }
    };
    // @Override
    RulePrequelContext.prototype.exitRule = function (listener) {
        if (listener.exitRulePrequel) {
            listener.exitRulePrequel(this);
        }
    };
    // @Override
    RulePrequelContext.prototype.accept = function (visitor) {
        if (visitor.visitRulePrequel) {
            return visitor.visitRulePrequel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RulePrequelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RulePrequelContext = RulePrequelContext;
var RuleReturnsContext = /** @class */ (function (_super) {
    __extends(RuleReturnsContext, _super);
    function RuleReturnsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleReturnsContext.prototype.RETURNS = function () { return this.getToken(ANTLRv4Parser.RETURNS, 0); };
    RuleReturnsContext.prototype.argActionBlock = function () {
        return this.getRuleContext(0, ArgActionBlockContext);
    };
    Object.defineProperty(RuleReturnsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleReturns; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleReturnsContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleReturns) {
            listener.enterRuleReturns(this);
        }
    };
    // @Override
    RuleReturnsContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleReturns) {
            listener.exitRuleReturns(this);
        }
    };
    // @Override
    RuleReturnsContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleReturns) {
            return visitor.visitRuleReturns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleReturnsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleReturnsContext = RuleReturnsContext;
var ThrowsSpecContext = /** @class */ (function (_super) {
    __extends(ThrowsSpecContext, _super);
    function ThrowsSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowsSpecContext.prototype.THROWS = function () { return this.getToken(ANTLRv4Parser.THROWS, 0); };
    ThrowsSpecContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    ThrowsSpecContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.COMMA);
        }
        else {
            return this.getToken(ANTLRv4Parser.COMMA, i);
        }
    };
    Object.defineProperty(ThrowsSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_throwsSpec; },
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
var LocalsSpecContext = /** @class */ (function (_super) {
    __extends(LocalsSpecContext, _super);
    function LocalsSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalsSpecContext.prototype.LOCALS = function () { return this.getToken(ANTLRv4Parser.LOCALS, 0); };
    LocalsSpecContext.prototype.argActionBlock = function () {
        return this.getRuleContext(0, ArgActionBlockContext);
    };
    Object.defineProperty(LocalsSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_localsSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocalsSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterLocalsSpec) {
            listener.enterLocalsSpec(this);
        }
    };
    // @Override
    LocalsSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitLocalsSpec) {
            listener.exitLocalsSpec(this);
        }
    };
    // @Override
    LocalsSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitLocalsSpec) {
            return visitor.visitLocalsSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocalsSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocalsSpecContext = LocalsSpecContext;
var RuleActionContext = /** @class */ (function (_super) {
    __extends(RuleActionContext, _super);
    function RuleActionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleActionContext.prototype.AT = function () { return this.getToken(ANTLRv4Parser.AT, 0); };
    RuleActionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    RuleActionContext.prototype.actionBlock = function () {
        return this.getRuleContext(0, ActionBlockContext);
    };
    Object.defineProperty(RuleActionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleAction; },
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
var RuleModifiersContext = /** @class */ (function (_super) {
    __extends(RuleModifiersContext, _super);
    function RuleModifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleModifiersContext.prototype.ruleModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleModifierContext);
        }
        else {
            return this.getRuleContext(i, RuleModifierContext);
        }
    };
    Object.defineProperty(RuleModifiersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleModifiers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleModifiersContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleModifiers) {
            listener.enterRuleModifiers(this);
        }
    };
    // @Override
    RuleModifiersContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleModifiers) {
            listener.exitRuleModifiers(this);
        }
    };
    // @Override
    RuleModifiersContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleModifiers) {
            return visitor.visitRuleModifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleModifiersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleModifiersContext = RuleModifiersContext;
var RuleModifierContext = /** @class */ (function (_super) {
    __extends(RuleModifierContext, _super);
    function RuleModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleModifierContext.prototype.PUBLIC = function () { return this.tryGetToken(ANTLRv4Parser.PUBLIC, 0); };
    RuleModifierContext.prototype.PRIVATE = function () { return this.tryGetToken(ANTLRv4Parser.PRIVATE, 0); };
    RuleModifierContext.prototype.PROTECTED = function () { return this.tryGetToken(ANTLRv4Parser.PROTECTED, 0); };
    RuleModifierContext.prototype.FRAGMENT = function () { return this.tryGetToken(ANTLRv4Parser.FRAGMENT, 0); };
    Object.defineProperty(RuleModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleModifier) {
            listener.enterRuleModifier(this);
        }
    };
    // @Override
    RuleModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleModifier) {
            listener.exitRuleModifier(this);
        }
    };
    // @Override
    RuleModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleModifier) {
            return visitor.visitRuleModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleModifierContext = RuleModifierContext;
var RuleBlockContext = /** @class */ (function (_super) {
    __extends(RuleBlockContext, _super);
    function RuleBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleBlockContext.prototype.ruleAltList = function () {
        return this.getRuleContext(0, RuleAltListContext);
    };
    Object.defineProperty(RuleBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleBlock) {
            listener.enterRuleBlock(this);
        }
    };
    // @Override
    RuleBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleBlock) {
            listener.exitRuleBlock(this);
        }
    };
    // @Override
    RuleBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleBlock) {
            return visitor.visitRuleBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleBlockContext = RuleBlockContext;
var RuleAltListContext = /** @class */ (function (_super) {
    __extends(RuleAltListContext, _super);
    function RuleAltListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleAltListContext.prototype.labeledAlt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabeledAltContext);
        }
        else {
            return this.getRuleContext(i, LabeledAltContext);
        }
    };
    RuleAltListContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.OR);
        }
        else {
            return this.getToken(ANTLRv4Parser.OR, i);
        }
    };
    Object.defineProperty(RuleAltListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleAltList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleAltListContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleAltList) {
            listener.enterRuleAltList(this);
        }
    };
    // @Override
    RuleAltListContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleAltList) {
            listener.exitRuleAltList(this);
        }
    };
    // @Override
    RuleAltListContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleAltList) {
            return visitor.visitRuleAltList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleAltListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleAltListContext = RuleAltListContext;
var LabeledAltContext = /** @class */ (function (_super) {
    __extends(LabeledAltContext, _super);
    function LabeledAltContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabeledAltContext.prototype.alternative = function () {
        return this.getRuleContext(0, AlternativeContext);
    };
    LabeledAltContext.prototype.POUND = function () { return this.tryGetToken(ANTLRv4Parser.POUND, 0); };
    LabeledAltContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(LabeledAltContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_labeledAlt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabeledAltContext.prototype.enterRule = function (listener) {
        if (listener.enterLabeledAlt) {
            listener.enterLabeledAlt(this);
        }
    };
    // @Override
    LabeledAltContext.prototype.exitRule = function (listener) {
        if (listener.exitLabeledAlt) {
            listener.exitLabeledAlt(this);
        }
    };
    // @Override
    LabeledAltContext.prototype.accept = function (visitor) {
        if (visitor.visitLabeledAlt) {
            return visitor.visitLabeledAlt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabeledAltContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabeledAltContext = LabeledAltContext;
var LexerRuleSpecContext = /** @class */ (function (_super) {
    __extends(LexerRuleSpecContext, _super);
    function LexerRuleSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerRuleSpecContext.prototype.TOKEN_REF = function () { return this.getToken(ANTLRv4Parser.TOKEN_REF, 0); };
    LexerRuleSpecContext.prototype.COLON = function () { return this.getToken(ANTLRv4Parser.COLON, 0); };
    LexerRuleSpecContext.prototype.lexerRuleBlock = function () {
        return this.getRuleContext(0, LexerRuleBlockContext);
    };
    LexerRuleSpecContext.prototype.SEMI = function () { return this.getToken(ANTLRv4Parser.SEMI, 0); };
    LexerRuleSpecContext.prototype.DOC_COMMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.DOC_COMMENT);
        }
        else {
            return this.getToken(ANTLRv4Parser.DOC_COMMENT, i);
        }
    };
    LexerRuleSpecContext.prototype.FRAGMENT = function () { return this.tryGetToken(ANTLRv4Parser.FRAGMENT, 0); };
    Object.defineProperty(LexerRuleSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerRuleSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerRuleSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerRuleSpec) {
            listener.enterLexerRuleSpec(this);
        }
    };
    // @Override
    LexerRuleSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerRuleSpec) {
            listener.exitLexerRuleSpec(this);
        }
    };
    // @Override
    LexerRuleSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerRuleSpec) {
            return visitor.visitLexerRuleSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerRuleSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerRuleSpecContext = LexerRuleSpecContext;
var LexerRuleBlockContext = /** @class */ (function (_super) {
    __extends(LexerRuleBlockContext, _super);
    function LexerRuleBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerRuleBlockContext.prototype.lexerAltList = function () {
        return this.getRuleContext(0, LexerAltListContext);
    };
    Object.defineProperty(LexerRuleBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerRuleBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerRuleBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerRuleBlock) {
            listener.enterLexerRuleBlock(this);
        }
    };
    // @Override
    LexerRuleBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerRuleBlock) {
            listener.exitLexerRuleBlock(this);
        }
    };
    // @Override
    LexerRuleBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerRuleBlock) {
            return visitor.visitLexerRuleBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerRuleBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerRuleBlockContext = LexerRuleBlockContext;
var LexerAltListContext = /** @class */ (function (_super) {
    __extends(LexerAltListContext, _super);
    function LexerAltListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerAltListContext.prototype.lexerAlt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LexerAltContext);
        }
        else {
            return this.getRuleContext(i, LexerAltContext);
        }
    };
    LexerAltListContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.OR);
        }
        else {
            return this.getToken(ANTLRv4Parser.OR, i);
        }
    };
    Object.defineProperty(LexerAltListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerAltList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerAltListContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerAltList) {
            listener.enterLexerAltList(this);
        }
    };
    // @Override
    LexerAltListContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerAltList) {
            listener.exitLexerAltList(this);
        }
    };
    // @Override
    LexerAltListContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerAltList) {
            return visitor.visitLexerAltList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerAltListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerAltListContext = LexerAltListContext;
var LexerAltContext = /** @class */ (function (_super) {
    __extends(LexerAltContext, _super);
    function LexerAltContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerAltContext.prototype.lexerElements = function () {
        return this.tryGetRuleContext(0, LexerElementsContext);
    };
    LexerAltContext.prototype.lexerCommands = function () {
        return this.tryGetRuleContext(0, LexerCommandsContext);
    };
    Object.defineProperty(LexerAltContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerAlt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerAltContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerAlt) {
            listener.enterLexerAlt(this);
        }
    };
    // @Override
    LexerAltContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerAlt) {
            listener.exitLexerAlt(this);
        }
    };
    // @Override
    LexerAltContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerAlt) {
            return visitor.visitLexerAlt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerAltContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerAltContext = LexerAltContext;
var LexerElementsContext = /** @class */ (function (_super) {
    __extends(LexerElementsContext, _super);
    function LexerElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerElementsContext.prototype.lexerElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LexerElementContext);
        }
        else {
            return this.getRuleContext(i, LexerElementContext);
        }
    };
    Object.defineProperty(LexerElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerElements) {
            listener.enterLexerElements(this);
        }
    };
    // @Override
    LexerElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerElements) {
            listener.exitLexerElements(this);
        }
    };
    // @Override
    LexerElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerElements) {
            return visitor.visitLexerElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerElementsContext = LexerElementsContext;
var LexerElementContext = /** @class */ (function (_super) {
    __extends(LexerElementContext, _super);
    function LexerElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerElementContext.prototype.labeledLexerElement = function () {
        return this.tryGetRuleContext(0, LabeledLexerElementContext);
    };
    LexerElementContext.prototype.ebnfSuffix = function () {
        return this.tryGetRuleContext(0, EbnfSuffixContext);
    };
    LexerElementContext.prototype.lexerAtom = function () {
        return this.tryGetRuleContext(0, LexerAtomContext);
    };
    LexerElementContext.prototype.lexerBlock = function () {
        return this.tryGetRuleContext(0, LexerBlockContext);
    };
    LexerElementContext.prototype.actionBlock = function () {
        return this.tryGetRuleContext(0, ActionBlockContext);
    };
    LexerElementContext.prototype.QUESTION = function () { return this.tryGetToken(ANTLRv4Parser.QUESTION, 0); };
    Object.defineProperty(LexerElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerElementContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerElement) {
            listener.enterLexerElement(this);
        }
    };
    // @Override
    LexerElementContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerElement) {
            listener.exitLexerElement(this);
        }
    };
    // @Override
    LexerElementContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerElement) {
            return visitor.visitLexerElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerElementContext = LexerElementContext;
var LabeledLexerElementContext = /** @class */ (function (_super) {
    __extends(LabeledLexerElementContext, _super);
    function LabeledLexerElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabeledLexerElementContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    LabeledLexerElementContext.prototype.ASSIGN = function () { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); };
    LabeledLexerElementContext.prototype.PLUS_ASSIGN = function () { return this.tryGetToken(ANTLRv4Parser.PLUS_ASSIGN, 0); };
    LabeledLexerElementContext.prototype.lexerAtom = function () {
        return this.tryGetRuleContext(0, LexerAtomContext);
    };
    LabeledLexerElementContext.prototype.lexerBlock = function () {
        return this.tryGetRuleContext(0, LexerBlockContext);
    };
    Object.defineProperty(LabeledLexerElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_labeledLexerElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabeledLexerElementContext.prototype.enterRule = function (listener) {
        if (listener.enterLabeledLexerElement) {
            listener.enterLabeledLexerElement(this);
        }
    };
    // @Override
    LabeledLexerElementContext.prototype.exitRule = function (listener) {
        if (listener.exitLabeledLexerElement) {
            listener.exitLabeledLexerElement(this);
        }
    };
    // @Override
    LabeledLexerElementContext.prototype.accept = function (visitor) {
        if (visitor.visitLabeledLexerElement) {
            return visitor.visitLabeledLexerElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabeledLexerElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabeledLexerElementContext = LabeledLexerElementContext;
var LexerBlockContext = /** @class */ (function (_super) {
    __extends(LexerBlockContext, _super);
    function LexerBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerBlockContext.prototype.LPAREN = function () { return this.getToken(ANTLRv4Parser.LPAREN, 0); };
    LexerBlockContext.prototype.lexerAltList = function () {
        return this.getRuleContext(0, LexerAltListContext);
    };
    LexerBlockContext.prototype.RPAREN = function () { return this.getToken(ANTLRv4Parser.RPAREN, 0); };
    Object.defineProperty(LexerBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerBlock) {
            listener.enterLexerBlock(this);
        }
    };
    // @Override
    LexerBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerBlock) {
            listener.exitLexerBlock(this);
        }
    };
    // @Override
    LexerBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerBlock) {
            return visitor.visitLexerBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerBlockContext = LexerBlockContext;
var LexerCommandsContext = /** @class */ (function (_super) {
    __extends(LexerCommandsContext, _super);
    function LexerCommandsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerCommandsContext.prototype.RARROW = function () { return this.getToken(ANTLRv4Parser.RARROW, 0); };
    LexerCommandsContext.prototype.lexerCommand = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LexerCommandContext);
        }
        else {
            return this.getRuleContext(i, LexerCommandContext);
        }
    };
    LexerCommandsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.COMMA);
        }
        else {
            return this.getToken(ANTLRv4Parser.COMMA, i);
        }
    };
    Object.defineProperty(LexerCommandsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerCommands; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerCommandsContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerCommands) {
            listener.enterLexerCommands(this);
        }
    };
    // @Override
    LexerCommandsContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerCommands) {
            listener.exitLexerCommands(this);
        }
    };
    // @Override
    LexerCommandsContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerCommands) {
            return visitor.visitLexerCommands(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerCommandsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerCommandsContext = LexerCommandsContext;
var LexerCommandContext = /** @class */ (function (_super) {
    __extends(LexerCommandContext, _super);
    function LexerCommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerCommandContext.prototype.lexerCommandName = function () {
        return this.getRuleContext(0, LexerCommandNameContext);
    };
    LexerCommandContext.prototype.LPAREN = function () { return this.tryGetToken(ANTLRv4Parser.LPAREN, 0); };
    LexerCommandContext.prototype.lexerCommandExpr = function () {
        return this.tryGetRuleContext(0, LexerCommandExprContext);
    };
    LexerCommandContext.prototype.RPAREN = function () { return this.tryGetToken(ANTLRv4Parser.RPAREN, 0); };
    Object.defineProperty(LexerCommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerCommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerCommandContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerCommand) {
            listener.enterLexerCommand(this);
        }
    };
    // @Override
    LexerCommandContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerCommand) {
            listener.exitLexerCommand(this);
        }
    };
    // @Override
    LexerCommandContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerCommand) {
            return visitor.visitLexerCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerCommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerCommandContext = LexerCommandContext;
var LexerCommandNameContext = /** @class */ (function (_super) {
    __extends(LexerCommandNameContext, _super);
    function LexerCommandNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerCommandNameContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    LexerCommandNameContext.prototype.MODE = function () { return this.tryGetToken(ANTLRv4Parser.MODE, 0); };
    Object.defineProperty(LexerCommandNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerCommandName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerCommandNameContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerCommandName) {
            listener.enterLexerCommandName(this);
        }
    };
    // @Override
    LexerCommandNameContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerCommandName) {
            listener.exitLexerCommandName(this);
        }
    };
    // @Override
    LexerCommandNameContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerCommandName) {
            return visitor.visitLexerCommandName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerCommandNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerCommandNameContext = LexerCommandNameContext;
var LexerCommandExprContext = /** @class */ (function (_super) {
    __extends(LexerCommandExprContext, _super);
    function LexerCommandExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerCommandExprContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    LexerCommandExprContext.prototype.INT = function () { return this.tryGetToken(ANTLRv4Parser.INT, 0); };
    Object.defineProperty(LexerCommandExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerCommandExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerCommandExprContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerCommandExpr) {
            listener.enterLexerCommandExpr(this);
        }
    };
    // @Override
    LexerCommandExprContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerCommandExpr) {
            listener.exitLexerCommandExpr(this);
        }
    };
    // @Override
    LexerCommandExprContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerCommandExpr) {
            return visitor.visitLexerCommandExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerCommandExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerCommandExprContext = LexerCommandExprContext;
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
    AltListContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.OR);
        }
        else {
            return this.getToken(ANTLRv4Parser.OR, i);
        }
    };
    Object.defineProperty(AltListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_altList; },
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
    AlternativeContext.prototype.elementOptions = function () {
        return this.tryGetRuleContext(0, ElementOptionsContext);
    };
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
        get: function () { return ANTLRv4Parser.RULE_alternative; },
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
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.labeledElement = function () {
        return this.tryGetRuleContext(0, LabeledElementContext);
    };
    ElementContext.prototype.ebnfSuffix = function () {
        return this.tryGetRuleContext(0, EbnfSuffixContext);
    };
    ElementContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    ElementContext.prototype.ebnf = function () {
        return this.tryGetRuleContext(0, EbnfContext);
    };
    ElementContext.prototype.actionBlock = function () {
        return this.tryGetRuleContext(0, ActionBlockContext);
    };
    ElementContext.prototype.QUESTION = function () { return this.tryGetToken(ANTLRv4Parser.QUESTION, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_element; },
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
var LabeledElementContext = /** @class */ (function (_super) {
    __extends(LabeledElementContext, _super);
    function LabeledElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabeledElementContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    LabeledElementContext.prototype.ASSIGN = function () { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); };
    LabeledElementContext.prototype.PLUS_ASSIGN = function () { return this.tryGetToken(ANTLRv4Parser.PLUS_ASSIGN, 0); };
    LabeledElementContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    LabeledElementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(LabeledElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_labeledElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabeledElementContext.prototype.enterRule = function (listener) {
        if (listener.enterLabeledElement) {
            listener.enterLabeledElement(this);
        }
    };
    // @Override
    LabeledElementContext.prototype.exitRule = function (listener) {
        if (listener.exitLabeledElement) {
            listener.exitLabeledElement(this);
        }
    };
    // @Override
    LabeledElementContext.prototype.accept = function (visitor) {
        if (visitor.visitLabeledElement) {
            return visitor.visitLabeledElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabeledElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabeledElementContext = LabeledElementContext;
var EbnfContext = /** @class */ (function (_super) {
    __extends(EbnfContext, _super);
    function EbnfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EbnfContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    EbnfContext.prototype.blockSuffix = function () {
        return this.tryGetRuleContext(0, BlockSuffixContext);
    };
    Object.defineProperty(EbnfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ebnf; },
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
var BlockSuffixContext = /** @class */ (function (_super) {
    __extends(BlockSuffixContext, _super);
    function BlockSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockSuffixContext.prototype.ebnfSuffix = function () {
        return this.getRuleContext(0, EbnfSuffixContext);
    };
    Object.defineProperty(BlockSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_blockSuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockSuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockSuffix) {
            listener.enterBlockSuffix(this);
        }
    };
    // @Override
    BlockSuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockSuffix) {
            listener.exitBlockSuffix(this);
        }
    };
    // @Override
    BlockSuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockSuffix) {
            return visitor.visitBlockSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockSuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockSuffixContext = BlockSuffixContext;
var EbnfSuffixContext = /** @class */ (function (_super) {
    __extends(EbnfSuffixContext, _super);
    function EbnfSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EbnfSuffixContext.prototype.QUESTION = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.QUESTION);
        }
        else {
            return this.getToken(ANTLRv4Parser.QUESTION, i);
        }
    };
    EbnfSuffixContext.prototype.STAR = function () { return this.tryGetToken(ANTLRv4Parser.STAR, 0); };
    EbnfSuffixContext.prototype.PLUS = function () { return this.tryGetToken(ANTLRv4Parser.PLUS, 0); };
    Object.defineProperty(EbnfSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ebnfSuffix; },
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
var LexerAtomContext = /** @class */ (function (_super) {
    __extends(LexerAtomContext, _super);
    function LexerAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LexerAtomContext.prototype.characterRange = function () {
        return this.tryGetRuleContext(0, CharacterRangeContext);
    };
    LexerAtomContext.prototype.terminal = function () {
        return this.tryGetRuleContext(0, TerminalContext);
    };
    LexerAtomContext.prototype.notSet = function () {
        return this.tryGetRuleContext(0, NotSetContext);
    };
    LexerAtomContext.prototype.LEXER_CHAR_SET = function () { return this.tryGetToken(ANTLRv4Parser.LEXER_CHAR_SET, 0); };
    LexerAtomContext.prototype.DOT = function () { return this.tryGetToken(ANTLRv4Parser.DOT, 0); };
    LexerAtomContext.prototype.elementOptions = function () {
        return this.tryGetRuleContext(0, ElementOptionsContext);
    };
    Object.defineProperty(LexerAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_lexerAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexerAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterLexerAtom) {
            listener.enterLexerAtom(this);
        }
    };
    // @Override
    LexerAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitLexerAtom) {
            listener.exitLexerAtom(this);
        }
    };
    // @Override
    LexerAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitLexerAtom) {
            return visitor.visitLexerAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LexerAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LexerAtomContext = LexerAtomContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.terminal = function () {
        return this.tryGetRuleContext(0, TerminalContext);
    };
    AtomContext.prototype.ruleref = function () {
        return this.tryGetRuleContext(0, RulerefContext);
    };
    AtomContext.prototype.notSet = function () {
        return this.tryGetRuleContext(0, NotSetContext);
    };
    AtomContext.prototype.DOT = function () { return this.tryGetToken(ANTLRv4Parser.DOT, 0); };
    AtomContext.prototype.elementOptions = function () {
        return this.tryGetRuleContext(0, ElementOptionsContext);
    };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_atom; },
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
    NotSetContext.prototype.NOT = function () { return this.getToken(ANTLRv4Parser.NOT, 0); };
    NotSetContext.prototype.setElement = function () {
        return this.tryGetRuleContext(0, SetElementContext);
    };
    NotSetContext.prototype.blockSet = function () {
        return this.tryGetRuleContext(0, BlockSetContext);
    };
    Object.defineProperty(NotSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_notSet; },
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
var BlockSetContext = /** @class */ (function (_super) {
    __extends(BlockSetContext, _super);
    function BlockSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockSetContext.prototype.LPAREN = function () { return this.getToken(ANTLRv4Parser.LPAREN, 0); };
    BlockSetContext.prototype.setElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SetElementContext);
        }
        else {
            return this.getRuleContext(i, SetElementContext);
        }
    };
    BlockSetContext.prototype.RPAREN = function () { return this.getToken(ANTLRv4Parser.RPAREN, 0); };
    BlockSetContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.OR);
        }
        else {
            return this.getToken(ANTLRv4Parser.OR, i);
        }
    };
    Object.defineProperty(BlockSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_blockSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockSetContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockSet) {
            listener.enterBlockSet(this);
        }
    };
    // @Override
    BlockSetContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockSet) {
            listener.exitBlockSet(this);
        }
    };
    // @Override
    BlockSetContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockSet) {
            return visitor.visitBlockSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockSetContext = BlockSetContext;
var SetElementContext = /** @class */ (function (_super) {
    __extends(SetElementContext, _super);
    function SetElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetElementContext.prototype.TOKEN_REF = function () { return this.tryGetToken(ANTLRv4Parser.TOKEN_REF, 0); };
    SetElementContext.prototype.elementOptions = function () {
        return this.tryGetRuleContext(0, ElementOptionsContext);
    };
    SetElementContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); };
    SetElementContext.prototype.characterRange = function () {
        return this.tryGetRuleContext(0, CharacterRangeContext);
    };
    SetElementContext.prototype.LEXER_CHAR_SET = function () { return this.tryGetToken(ANTLRv4Parser.LEXER_CHAR_SET, 0); };
    Object.defineProperty(SetElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_setElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSetElement) {
            listener.enterSetElement(this);
        }
    };
    // @Override
    SetElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSetElement) {
            listener.exitSetElement(this);
        }
    };
    // @Override
    SetElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSetElement) {
            return visitor.visitSetElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetElementContext = SetElementContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.LPAREN = function () { return this.getToken(ANTLRv4Parser.LPAREN, 0); };
    BlockContext.prototype.altList = function () {
        return this.getRuleContext(0, AltListContext);
    };
    BlockContext.prototype.RPAREN = function () { return this.getToken(ANTLRv4Parser.RPAREN, 0); };
    BlockContext.prototype.COLON = function () { return this.tryGetToken(ANTLRv4Parser.COLON, 0); };
    BlockContext.prototype.optionsSpec = function () {
        return this.tryGetRuleContext(0, OptionsSpecContext);
    };
    BlockContext.prototype.ruleAction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleActionContext);
        }
        else {
            return this.getRuleContext(i, RuleActionContext);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_block; },
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
var RulerefContext = /** @class */ (function (_super) {
    __extends(RulerefContext, _super);
    function RulerefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RulerefContext.prototype.RULE_REF = function () { return this.getToken(ANTLRv4Parser.RULE_REF, 0); };
    RulerefContext.prototype.argActionBlock = function () {
        return this.tryGetRuleContext(0, ArgActionBlockContext);
    };
    RulerefContext.prototype.elementOptions = function () {
        return this.tryGetRuleContext(0, ElementOptionsContext);
    };
    Object.defineProperty(RulerefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_ruleref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RulerefContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleref) {
            listener.enterRuleref(this);
        }
    };
    // @Override
    RulerefContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleref) {
            listener.exitRuleref(this);
        }
    };
    // @Override
    RulerefContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleref) {
            return visitor.visitRuleref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RulerefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RulerefContext = RulerefContext;
var CharacterRangeContext = /** @class */ (function (_super) {
    __extends(CharacterRangeContext, _super);
    function CharacterRangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharacterRangeContext.prototype.STRING_LITERAL = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.STRING_LITERAL);
        }
        else {
            return this.getToken(ANTLRv4Parser.STRING_LITERAL, i);
        }
    };
    CharacterRangeContext.prototype.RANGE = function () { return this.getToken(ANTLRv4Parser.RANGE, 0); };
    Object.defineProperty(CharacterRangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_characterRange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharacterRangeContext.prototype.enterRule = function (listener) {
        if (listener.enterCharacterRange) {
            listener.enterCharacterRange(this);
        }
    };
    // @Override
    CharacterRangeContext.prototype.exitRule = function (listener) {
        if (listener.exitCharacterRange) {
            listener.exitCharacterRange(this);
        }
    };
    // @Override
    CharacterRangeContext.prototype.accept = function (visitor) {
        if (visitor.visitCharacterRange) {
            return visitor.visitCharacterRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharacterRangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharacterRangeContext = CharacterRangeContext;
var TerminalContext = /** @class */ (function (_super) {
    __extends(TerminalContext, _super);
    function TerminalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TerminalContext.prototype.TOKEN_REF = function () { return this.tryGetToken(ANTLRv4Parser.TOKEN_REF, 0); };
    TerminalContext.prototype.elementOptions = function () {
        return this.tryGetRuleContext(0, ElementOptionsContext);
    };
    TerminalContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); };
    Object.defineProperty(TerminalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_terminal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TerminalContext.prototype.enterRule = function (listener) {
        if (listener.enterTerminal) {
            listener.enterTerminal(this);
        }
    };
    // @Override
    TerminalContext.prototype.exitRule = function (listener) {
        if (listener.exitTerminal) {
            listener.exitTerminal(this);
        }
    };
    // @Override
    TerminalContext.prototype.accept = function (visitor) {
        if (visitor.visitTerminal) {
            return visitor.visitTerminal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TerminalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TerminalContext = TerminalContext;
var ElementOptionsContext = /** @class */ (function (_super) {
    __extends(ElementOptionsContext, _super);
    function ElementOptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementOptionsContext.prototype.LT = function () { return this.getToken(ANTLRv4Parser.LT, 0); };
    ElementOptionsContext.prototype.elementOption = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementOptionContext);
        }
        else {
            return this.getRuleContext(i, ElementOptionContext);
        }
    };
    ElementOptionsContext.prototype.GT = function () { return this.getToken(ANTLRv4Parser.GT, 0); };
    ElementOptionsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(ANTLRv4Parser.COMMA);
        }
        else {
            return this.getToken(ANTLRv4Parser.COMMA, i);
        }
    };
    Object.defineProperty(ElementOptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_elementOptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementOptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterElementOptions) {
            listener.enterElementOptions(this);
        }
    };
    // @Override
    ElementOptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitElementOptions) {
            listener.exitElementOptions(this);
        }
    };
    // @Override
    ElementOptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitElementOptions) {
            return visitor.visitElementOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementOptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementOptionsContext = ElementOptionsContext;
var ElementOptionContext = /** @class */ (function (_super) {
    __extends(ElementOptionContext, _super);
    function ElementOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementOptionContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    ElementOptionContext.prototype.ASSIGN = function () { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); };
    ElementOptionContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); };
    Object.defineProperty(ElementOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_elementOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterElementOption) {
            listener.enterElementOption(this);
        }
    };
    // @Override
    ElementOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitElementOption) {
            listener.exitElementOption(this);
        }
    };
    // @Override
    ElementOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitElementOption) {
            return visitor.visitElementOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementOptionContext = ElementOptionContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.RULE_REF = function () { return this.tryGetToken(ANTLRv4Parser.RULE_REF, 0); };
    IdentifierContext.prototype.TOKEN_REF = function () { return this.tryGetToken(ANTLRv4Parser.TOKEN_REF, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ANTLRv4Parser.RULE_identifier; },
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
