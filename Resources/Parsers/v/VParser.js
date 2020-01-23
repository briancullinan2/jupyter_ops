"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/v/V.g4 by ANTLR 4.7.3-SNAPSHOT
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
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var VParser = /** @class */ (function (_super) {
    __extends(VParser, _super);
    function VParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(VParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(VParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return VParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "V.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VParser.prototype, "ruleNames", {
        // @Override
        get: function () { return VParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VParser.prototype, "serializedATN", {
        // @Override
        get: function () { return VParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    VParser.prototype.lineTerminatorAhead = function () {
        // Get the token ahead of the current index.
        int;
        possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 1;
        Token_1.Token;
        ahead = _input.get(possibleIndexEosToken);
        if (ahead.getChannel() != Lexer.HIDDEN) {
            // We're only interested in tokens on the HIDDEN channel.
            return false;
        }
        if (ahead.getType() == TERMINATOR) {
            // There is definitely a line terminator ahead.
            return true;
        }
        if (ahead.getType() == WS) {
            // Get the token ahead of the current whitespaces.
            possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 2;
            ahead = _input.get(possibleIndexEosToken);
        }
        // Get the token's text and type.
        String;
        text = ahead.getText();
        int;
        type = ahead.getType();
        // Check if the token is, or contains a line terminator.
        return (type == COMMENT && (text.contains("\r") || text.contains("\n"))) ||
            (type == TERMINATOR);
    };
    VParser.prototype.noTerminatorBetween = function (int, tokenOffset) {
        BufferedTokenStream;
        stream = (BufferedTokenStream);
        _input;
        List < Token_1.Token > tokens;
        stream.getHiddenTokensToLeft(stream.LT(tokenOffset).getTokenIndex());
        if (tokens == null) {
            return true;
        }
        for (Token_1.Token; token; )
            : tokens;
        {
            if (token.getText().contains("\n"))
                return false;
        }
        return true;
    };
    VParser.prototype.noTerminatorAfterParams = function (int, tokenOffset) {
        BufferedTokenStream;
        stream = (BufferedTokenStream);
        _input;
        int;
        leftParams = 1;
        int;
        rightParams = 0;
        String;
        value;
        if (stream.LT(tokenOffset).getText().equals("(")) {
            // Scan past parameters
            while (leftParams != rightParams) {
                tokenOffset++;
                value = stream.LT(tokenOffset).getText();
                if (value.equals("(")) {
                    leftParams++;
                }
                else if (value.equals(")")) {
                    rightParams++;
                }
            }
            tokenOffset++;
            return noTerminatorBetween(tokenOffset);
        }
        return true;
    };
    // @RuleVersion(0)
    VParser.prototype.sourceFile = function () {
        var _localctx = new SourceFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, VParser.RULE_sourceFile);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === VParser.T__0) {
                    {
                        this.state = 156;
                        this.moduleClause();
                        this.state = 157;
                        this.eos();
                    }
                }
                this.state = 166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VParser.T__1) {
                    {
                        {
                            this.state = 161;
                            this.importDecl();
                            this.state = 162;
                            this.eos();
                        }
                    }
                    this.state = 168;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__3) | (1 << VParser.T__8) | (1 << VParser.T__10))) !== 0) || _la === VParser.T__41 || _la === VParser.IDENTIFIER) {
                    {
                        {
                            this.state = 169;
                            this.topLevelDecl();
                            this.state = 170;
                            this.eos();
                        }
                    }
                    this.state = 176;
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
    VParser.prototype.moduleClause = function () {
        var _localctx = new ModuleClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, VParser.RULE_moduleClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 177;
                this.match(VParser.T__0);
                this.state = 178;
                this.match(VParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.importDecl = function () {
        var _localctx = new ImportDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, VParser.RULE_importDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 180;
                this.match(VParser.T__1);
                {
                    this.state = 181;
                    this.importSpec();
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
    VParser.prototype.importSpec = function () {
        var _localctx = new ImportSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, VParser.RULE_importSpec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 183;
                            _la = this._input.LA(1);
                            if (!(_la === VParser.T__2 || _la === VParser.IDENTIFIER)) {
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
                }
                this.state = 186;
                this.importPath();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.importPath = function () {
        var _localctx = new ImportPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, VParser.RULE_importPath);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                _la = this._input.LA(1);
                if (!(_la === VParser.IDENTIFIER || _la === VParser.STRING_LIT)) {
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
    VParser.prototype.topLevelDecl = function () {
        var _localctx = new TopLevelDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, VParser.RULE_topLevelDecl);
        try {
            this.state = 193;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 190;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 191;
                        this.functionDecl();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 192;
                        this.methodDecl();
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
    VParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, VParser.RULE_declaration);
        try {
            this.state = 198;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 195;
                        this.constDecl();
                    }
                    break;
                case VParser.T__10:
                case VParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 196;
                        this.varDecl();
                    }
                    break;
                case VParser.T__41:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 197;
                        this.structDecl();
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
    VParser.prototype.constDecl = function () {
        var _localctx = new ConstDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, VParser.RULE_constDecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.match(VParser.T__3);
                this.state = 201;
                this.match(VParser.T__4);
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VParser.IDENTIFIER) {
                    {
                        {
                            this.state = 202;
                            this.constSpec();
                            this.state = 203;
                            this.eos();
                        }
                    }
                    this.state = 209;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 210;
                this.match(VParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.constSpec = function () {
        var _localctx = new ConstSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, VParser.RULE_constSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(VParser.IDENTIFIER);
                this.state = 213;
                this.match(VParser.T__6);
                this.state = 214;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.identifierList = function () {
        var _localctx = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, VParser.RULE_identifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(VParser.IDENTIFIER);
                this.state = 221;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VParser.T__7) {
                    {
                        {
                            this.state = 217;
                            this.match(VParser.T__7);
                            this.state = 218;
                            this.match(VParser.IDENTIFIER);
                        }
                    }
                    this.state = 223;
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
    VParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, VParser.RULE_expressionList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.expression(0);
                this.state = 229;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 225;
                                this.match(VParser.T__7);
                                this.state = 226;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 231;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
    VParser.prototype.functionDecl = function () {
        var _localctx = new FunctionDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, VParser.RULE_functionDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(VParser.T__8);
                this.state = 233;
                this.match(VParser.IDENTIFIER);
                this.state = 236;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 234;
                            this.function();
                        }
                        break;
                    case 2:
                        {
                            this.state = 235;
                            this.signature();
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
    VParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, VParser.RULE_function);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.signature();
                this.state = 239;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.methodDecl = function () {
        var _localctx = new MethodDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, VParser.RULE_methodDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(VParser.T__8);
                this.state = 242;
                this.receiver();
                this.state = 243;
                this.match(VParser.IDENTIFIER);
                this.state = 246;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 244;
                            this.function();
                        }
                        break;
                    case 2:
                        {
                            this.state = 245;
                            this.signature();
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
    VParser.prototype.receiver = function () {
        var _localctx = new ReceiverContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, VParser.RULE_receiver);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this.parameters();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.noMutDecl = function () {
        var _localctx = new NoMutDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, VParser.RULE_noMutDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 250;
                this.identifierList();
                {
                    this.state = 251;
                    this.match(VParser.T__9);
                    this.state = 252;
                    this.expressionList();
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
    VParser.prototype.varDecl = function () {
        var _localctx = new VarDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, VParser.RULE_varDecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === VParser.T__10) {
                    {
                        this.state = 254;
                        this.match(VParser.T__10);
                    }
                }
                {
                    this.state = 257;
                    this.noMutDecl();
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
    VParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, VParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.match(VParser.T__11);
                this.state = 260;
                this.statementList();
                this.state = 261;
                this.match(VParser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.statementList = function () {
        var _localctx = new StatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, VParser.RULE_statementList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__3) | (1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__11) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24) | (1 << VParser.T__25) | (1 << VParser.T__26) | (1 << VParser.T__27) | (1 << VParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VParser.T__31 - 32)) | (1 << (VParser.T__35 - 32)) | (1 << (VParser.T__37 - 32)) | (1 << (VParser.T__39 - 32)) | (1 << (VParser.T__40 - 32)) | (1 << (VParser.T__41 - 32)) | (1 << (VParser.T__52 - 32)) | (1 << (VParser.IDENTIFIER - 32)) | (1 << (VParser.INT_LIT - 32)) | (1 << (VParser.FLOAT_LIT - 32)) | (1 << (VParser.RUNE_LIT - 32)) | (1 << (VParser.STRING_LIT - 32)))) !== 0)) {
                    {
                        {
                            this.state = 263;
                            this.statement();
                            this.state = 264;
                            this.eos();
                        }
                    }
                    this.state = 270;
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
    VParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, VParser.RULE_statement);
        try {
            this.state = 280;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 271;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 272;
                        this.simpleStmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 273;
                        this.returnStmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 274;
                        this.breakStmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 275;
                        this.continueStmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 276;
                        this.block();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 277;
                        this.ifStmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 278;
                        this.switchStmt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 279;
                        this.forStmt();
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
    VParser.prototype.simpleStmt = function () {
        var _localctx = new SimpleStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, VParser.RULE_simpleStmt);
        try {
            this.state = 285;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 282;
                        this.expressionStmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 283;
                        this.incDecStmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 284;
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
    VParser.prototype.expressionStmt = function () {
        var _localctx = new ExpressionStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, VParser.RULE_expressionStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.incDecStmt = function () {
        var _localctx = new IncDecStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, VParser.RULE_incDecStmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 289;
                this.expression(0);
                this.state = 290;
                _la = this._input.LA(1);
                if (!(_la === VParser.T__13 || _la === VParser.T__14)) {
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
    VParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, VParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 292;
                this.expressionList();
                this.state = 293;
                this.assign_op();
                this.state = 294;
                this.expressionList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.assign_op = function () {
        var _localctx = new Assign_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, VParser.RULE_assign_op);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__17) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__20) | (1 << VParser.T__21) | (1 << VParser.T__22) | (1 << VParser.T__23) | (1 << VParser.T__24))) !== 0)) {
                    {
                        this.state = 296;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__17) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__20) | (1 << VParser.T__21) | (1 << VParser.T__22) | (1 << VParser.T__23) | (1 << VParser.T__24))) !== 0))) {
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
                this.state = 299;
                this.match(VParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.returnStmt = function () {
        var _localctx = new ReturnStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, VParser.RULE_returnStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.match(VParser.T__25);
                this.state = 303;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 302;
                            this.expressionList();
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
    VParser.prototype.breakStmt = function () {
        var _localctx = new BreakStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, VParser.RULE_breakStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.match(VParser.T__26);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.continueStmt = function () {
        var _localctx = new ContinueStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, VParser.RULE_continueStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(VParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.ifStmt = function () {
        var _localctx = new IfStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, VParser.RULE_ifStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(VParser.T__28);
                this.state = 313;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 310;
                            this.simpleStmt();
                            this.state = 311;
                            this.match(VParser.T__29);
                        }
                        break;
                }
                this.state = 315;
                this.expression(0);
                this.state = 316;
                this.block();
                this.state = 322;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                    case 1:
                        {
                            this.state = 317;
                            this.match(VParser.T__30);
                            this.state = 320;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case VParser.T__28:
                                    {
                                        this.state = 318;
                                        this.ifStmt();
                                    }
                                    break;
                                case VParser.T__11:
                                    {
                                        this.state = 319;
                                        this.block();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
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
    VParser.prototype.switchStmt = function () {
        var _localctx = new SwitchStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, VParser.RULE_switchStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this.exprSwitchStmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.exprSwitchStmt = function () {
        var _localctx = new ExprSwitchStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, VParser.RULE_exprSwitchStmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                this.match(VParser.T__31);
                this.state = 330;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 327;
                            this.simpleStmt();
                            this.state = 328;
                            this.match(VParser.T__29);
                        }
                        break;
                }
                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
                    {
                        this.state = 332;
                        this.expression(0);
                    }
                }
                this.state = 335;
                this.match(VParser.T__11);
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VParser.T__33 || _la === VParser.T__34) {
                    {
                        {
                            this.state = 336;
                            this.exprCaseClause();
                        }
                    }
                    this.state = 341;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 342;
                this.match(VParser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.exprCaseClause = function () {
        var _localctx = new ExprCaseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, VParser.RULE_exprCaseClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                this.exprSwitchCase();
                this.state = 345;
                this.match(VParser.T__32);
                this.state = 346;
                this.statementList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.exprSwitchCase = function () {
        var _localctx = new ExprSwitchCaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, VParser.RULE_exprSwitchCase);
        try {
            this.state = 351;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__33:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 348;
                        this.match(VParser.T__33);
                        this.state = 349;
                        this.expressionList();
                    }
                    break;
                case VParser.T__34:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 350;
                        this.match(VParser.T__34);
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
    VParser.prototype.forStmt = function () {
        var _localctx = new ForStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, VParser.RULE_forStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 353;
                this.match(VParser.T__35);
                this.state = 357;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 354;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 355;
                            this.forClause();
                        }
                        break;
                    case 3:
                        {
                            this.state = 356;
                            this.inClause();
                        }
                        break;
                }
                this.state = 359;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.forClause = function () {
        var _localctx = new ForClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, VParser.RULE_forClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
                    {
                        this.state = 361;
                        this.simpleStmt();
                    }
                }
                this.state = 364;
                this.match(VParser.T__29);
                this.state = 366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
                    {
                        this.state = 365;
                        this.expression(0);
                    }
                }
                this.state = 368;
                this.match(VParser.T__29);
                this.state = 370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
                    {
                        this.state = 369;
                        this.simpleStmt();
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
    VParser.prototype.inClause = function () {
        var _localctx = new InClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, VParser.RULE_inClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                this.expressionList();
                this.state = 373;
                this.match(VParser.T__36);
                this.state = 374;
                this.match(VParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, VParser.RULE_type);
        try {
            this.state = 378;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__10:
                case VParser.T__24:
                case VParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 376;
                        this.typeName();
                    }
                    break;
                case VParser.T__8:
                case VParser.T__37:
                case VParser.T__39:
                case VParser.T__40:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 377;
                        this.typeLit();
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
    VParser.prototype.typeName = function () {
        var _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, VParser.RULE_typeName);
        var _la;
        try {
            this.state = 388;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === VParser.T__24) {
                            {
                                this.state = 380;
                                this.match(VParser.T__24);
                            }
                        }
                        this.state = 384;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === VParser.T__10) {
                            {
                                this.state = 383;
                                this.match(VParser.T__10);
                            }
                        }
                        this.state = 386;
                        this.match(VParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 387;
                        this.qualifiedIdent();
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
    VParser.prototype.typeLit = function () {
        var _localctx = new TypeLitContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, VParser.RULE_typeLit);
        try {
            this.state = 394;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__37:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 390;
                        this.arrayType();
                    }
                    break;
                case VParser.T__8:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 391;
                        this.functionType();
                    }
                    break;
                case VParser.T__39:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 392;
                        this.interfaceType();
                    }
                    break;
                case VParser.T__40:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 393;
                        this.mapType();
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
    VParser.prototype.arrayType = function () {
        var _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, VParser.RULE_arrayType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(VParser.T__37);
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
                    {
                        this.state = 397;
                        this.arrayLength();
                    }
                }
                this.state = 400;
                this.match(VParser.T__38);
                this.state = 401;
                this.elementType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.arrayLength = function () {
        var _localctx = new ArrayLengthContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, VParser.RULE_arrayLength);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.elementType = function () {
        var _localctx = new ElementTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, VParser.RULE_elementType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 405;
                this.type();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.interfaceType = function () {
        var _localctx = new InterfaceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, VParser.RULE_interfaceType);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 407;
                this.match(VParser.T__39);
                this.state = 408;
                this.match(VParser.IDENTIFIER);
                this.state = 409;
                this.match(VParser.T__11);
                this.state = 415;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 410;
                                this.methodSpec();
                                this.state = 411;
                                this.eos();
                            }
                        }
                    }
                    this.state = 417;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                }
                this.state = 418;
                this.match(VParser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.mapType = function () {
        var _localctx = new MapTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, VParser.RULE_mapType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this.match(VParser.T__40);
                this.state = 421;
                this.match(VParser.T__37);
                this.state = 422;
                this.type();
                this.state = 423;
                this.match(VParser.T__38);
                this.state = 424;
                this.elementType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.methodSpec = function () {
        var _localctx = new MethodSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, VParser.RULE_methodSpec);
        try {
            this.state = 434;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 426;
                        if (!(noTerminatorAfterParams(2))) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "noTerminatorAfterParams(2)");
                        }
                        this.state = 427;
                        this.match(VParser.IDENTIFIER);
                        this.state = 428;
                        this.parameters();
                        this.state = 429;
                        this.result();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 431;
                        this.typeName();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 432;
                        this.match(VParser.IDENTIFIER);
                        this.state = 433;
                        this.parameters();
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
    VParser.prototype.functionType = function () {
        var _localctx = new FunctionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, VParser.RULE_functionType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.match(VParser.T__8);
                this.state = 437;
                this.signature();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.signature = function () {
        var _localctx = new SignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, VParser.RULE_signature);
        try {
            this.state = 444;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 439;
                        if (!(noTerminatorAfterParams(1))) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "noTerminatorAfterParams(1)");
                        }
                        this.state = 440;
                        this.parameters();
                        this.state = 441;
                        this.result();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 443;
                        this.parameters();
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
    VParser.prototype.result = function () {
        var _localctx = new ResultContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, VParser.RULE_result);
        try {
            this.state = 448;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 446;
                        this.parameters();
                    }
                    break;
                case VParser.T__8:
                case VParser.T__10:
                case VParser.T__24:
                case VParser.T__37:
                case VParser.T__39:
                case VParser.T__40:
                case VParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 447;
                        this.type();
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
    VParser.prototype.parameters = function () {
        var _localctx = new ParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, VParser.RULE_parameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                this.match(VParser.T__4);
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.IDENTIFIER - 38)))) !== 0)) {
                    {
                        this.state = 451;
                        this.parameterList();
                        this.state = 453;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === VParser.T__7) {
                            {
                                this.state = 452;
                                this.match(VParser.T__7);
                            }
                        }
                    }
                }
                this.state = 457;
                this.match(VParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.parameterList = function () {
        var _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, VParser.RULE_parameterList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 459;
                this.parameterDecl();
                this.state = 464;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 460;
                                this.match(VParser.T__7);
                                this.state = 461;
                                this.parameterDecl();
                            }
                        }
                    }
                    this.state = 466;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
    VParser.prototype.parameterDecl = function () {
        var _localctx = new ParameterDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, VParser.RULE_parameterDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 468;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 467;
                            this.identifierList();
                        }
                        break;
                }
                this.state = 470;
                this.type();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.operand = function () {
        var _localctx = new OperandContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, VParser.RULE_operand);
        try {
            this.state = 479;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 472;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 473;
                        this.operandName();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 474;
                        this.methodExpr();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 475;
                        this.match(VParser.T__4);
                        this.state = 476;
                        this.expression(0);
                        this.state = 477;
                        this.match(VParser.T__5);
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
    VParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, VParser.RULE_literal);
        try {
            this.state = 485;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 481;
                        this.basicLit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 482;
                        this.compositeLit();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 483;
                        this.functionLit();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 484;
                        this.arrayLit();
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
    VParser.prototype.arrayLit = function () {
        var _localctx = new ArrayLitContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, VParser.RULE_arrayLit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.match(VParser.T__37);
                this.state = 488;
                this.expression(0);
                this.state = 493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VParser.T__7) {
                    {
                        {
                            this.state = 489;
                            this.match(VParser.T__7);
                            this.state = 490;
                            this.expression(0);
                        }
                    }
                    this.state = 495;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 496;
                this.match(VParser.T__38);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.basicLit = function () {
        var _localctx = new BasicLitContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, VParser.RULE_basicLit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 498;
                _la = this._input.LA(1);
                if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (VParser.INT_LIT - 57)) | (1 << (VParser.FLOAT_LIT - 57)) | (1 << (VParser.RUNE_LIT - 57)) | (1 << (VParser.STRING_LIT - 57)))) !== 0))) {
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
    VParser.prototype.operandName = function () {
        var _localctx = new OperandNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, VParser.RULE_operandName);
        try {
            this.state = 502;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 500;
                        this.match(VParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 501;
                        this.qualifiedIdent();
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
    VParser.prototype.qualifiedIdent = function () {
        var _localctx = new QualifiedIdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, VParser.RULE_qualifiedIdent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                this.match(VParser.IDENTIFIER);
                this.state = 505;
                this.match(VParser.T__2);
                this.state = 506;
                this.match(VParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.compositeLit = function () {
        var _localctx = new CompositeLitContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, VParser.RULE_compositeLit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this.literalType();
                this.state = 509;
                this.literalValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.literalType = function () {
        var _localctx = new LiteralTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, VParser.RULE_literalType);
        try {
            this.state = 514;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__37:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 511;
                        this.arrayType();
                    }
                    break;
                case VParser.T__40:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 512;
                        this.mapType();
                    }
                    break;
                case VParser.T__10:
                case VParser.T__24:
                case VParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 513;
                        this.typeName();
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
    VParser.prototype.literalValue = function () {
        var _localctx = new LiteralValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, VParser.RULE_literalValue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 516;
                this.match(VParser.T__11);
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__11) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
                    {
                        this.state = 517;
                        this.elementList();
                        this.state = 519;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === VParser.T__7) {
                            {
                                this.state = 518;
                                this.match(VParser.T__7);
                            }
                        }
                    }
                }
                this.state = 523;
                this.match(VParser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.elementList = function () {
        var _localctx = new ElementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, VParser.RULE_elementList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this.keyedElement();
                this.state = 531;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 526;
                                this.eos();
                                this.state = 527;
                                this.keyedElement();
                            }
                        }
                    }
                    this.state = 533;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
    VParser.prototype.keyedElement = function () {
        var _localctx = new KeyedElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, VParser.RULE_keyedElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 537;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                    case 1:
                        {
                            this.state = 534;
                            this.key();
                            this.state = 535;
                            this.match(VParser.T__32);
                        }
                        break;
                }
                this.state = 539;
                this.element();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, VParser.RULE_key);
        try {
            this.state = 544;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 541;
                        this.match(VParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 542;
                        this.expression(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 543;
                        this.literalValue();
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
    VParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, VParser.RULE_element);
        try {
            this.state = 548;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__4:
                case VParser.T__8:
                case VParser.T__10:
                case VParser.T__15:
                case VParser.T__16:
                case VParser.T__18:
                case VParser.T__19:
                case VParser.T__24:
                case VParser.T__37:
                case VParser.T__39:
                case VParser.T__40:
                case VParser.T__52:
                case VParser.IDENTIFIER:
                case VParser.INT_LIT:
                case VParser.FLOAT_LIT:
                case VParser.RUNE_LIT:
                case VParser.STRING_LIT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 546;
                        this.expression(0);
                    }
                    break;
                case VParser.T__11:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 547;
                        this.literalValue();
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
    VParser.prototype.structDecl = function () {
        var _localctx = new StructDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, VParser.RULE_structDecl);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 550;
                this.match(VParser.T__41);
                this.state = 551;
                this.match(VParser.IDENTIFIER);
                this.state = 552;
                this.match(VParser.T__11);
                this.state = 558;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 553;
                                this.fieldDecl();
                                this.state = 554;
                                this.eos();
                            }
                        }
                    }
                    this.state = 560;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 561;
                this.match(VParser.T__12);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.fieldDecl = function () {
        var _localctx = new FieldDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, VParser.RULE_fieldDecl);
        var _la;
        try {
            this.state = 584;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 568;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                            case 1:
                                {
                                    this.state = 563;
                                    if (!(noTerminatorBetween(2))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "noTerminatorBetween(2)");
                                    }
                                    this.state = 564;
                                    this.identifierList();
                                    this.state = 565;
                                    this.type();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 567;
                                    this.anonymousField();
                                }
                                break;
                        }
                        this.state = 571;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                            case 1:
                                {
                                    this.state = 570;
                                    this.match(VParser.STRING_LIT);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 581;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case VParser.T__42:
                                {
                                    this.state = 573;
                                    this.match(VParser.T__42);
                                    this.state = 578;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === VParser.T__10) {
                                        {
                                            this.state = 574;
                                            this.match(VParser.T__10);
                                            this.state = 576;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === VParser.T__10) {
                                                {
                                                    this.state = 575;
                                                    this.match(VParser.T__10);
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            case VParser.T__10:
                                {
                                    this.state = 580;
                                    this.match(VParser.T__10);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 583;
                        this.match(VParser.T__32);
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
    VParser.prototype.anonymousField = function () {
        var _localctx = new AnonymousFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, VParser.RULE_anonymousField);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                this.typeName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.functionLit = function () {
        var _localctx = new FunctionLitContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, VParser.RULE_functionLit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.match(VParser.T__8);
                this.state = 589;
                this.function();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.primaryExpr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new PrimaryExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 136;
        this.enterRecursionRule(_localctx, 136, VParser.RULE_primaryExpr, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 594;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 592;
                            this.operand();
                        }
                        break;
                    case 2:
                        {
                            this.state = 593;
                            this.conversion();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 604;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 602;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PrimaryExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_primaryExpr);
                                        this.state = 596;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 597;
                                        this.selector();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PrimaryExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_primaryExpr);
                                        this.state = 598;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 599;
                                        this.index();
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new PrimaryExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_primaryExpr);
                                        this.state = 600;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 601;
                                        this.arguments();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 606;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.selector = function () {
        var _localctx = new SelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, VParser.RULE_selector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.match(VParser.T__2);
                this.state = 608;
                this.match(VParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.index = function () {
        var _localctx = new IndexContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, VParser.RULE_index);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
                this.match(VParser.T__37);
                this.state = 611;
                this.expression(0);
                this.state = 612;
                this.match(VParser.T__38);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, VParser.RULE_arguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                this.match(VParser.T__4);
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
                    {
                        this.state = 621;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                            case 1:
                                {
                                    this.state = 615;
                                    this.expressionList();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 616;
                                    this.type();
                                    this.state = 619;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 617;
                                                this.match(VParser.T__7);
                                                this.state = 618;
                                                this.expressionList();
                                            }
                                            break;
                                    }
                                }
                                break;
                        }
                        this.state = 624;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === VParser.T__7) {
                            {
                                this.state = 623;
                                this.match(VParser.T__7);
                            }
                        }
                    }
                }
                this.state = 628;
                this.match(VParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.methodExpr = function () {
        var _localctx = new MethodExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, VParser.RULE_methodExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 630;
                this.receiverType();
                this.state = 631;
                this.match(VParser.T__2);
                this.state = 632;
                this.match(VParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.receiverType = function () {
        var _localctx = new ReceiverTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, VParser.RULE_receiverType);
        try {
            this.state = 639;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VParser.T__10:
                case VParser.T__24:
                case VParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 634;
                        this.typeName();
                    }
                    break;
                case VParser.T__4:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 635;
                        this.match(VParser.T__4);
                        this.state = 636;
                        this.receiverType();
                        this.state = 637;
                        this.match(VParser.T__5);
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
    VParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 148;
        this.enterRecursionRule(_localctx, 148, VParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 642;
                    this.unaryExpr();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 649;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_expression);
                                this.state = 644;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 645;
                                _la = this._input.LA(1);
                                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__17) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__20) | (1 << VParser.T__21) | (1 << VParser.T__22) | (1 << VParser.T__23) | (1 << VParser.T__24))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (VParser.T__43 - 44)) | (1 << (VParser.T__44 - 44)) | (1 << (VParser.T__45 - 44)) | (1 << (VParser.T__46 - 44)) | (1 << (VParser.T__47 - 44)) | (1 << (VParser.T__48 - 44)) | (1 << (VParser.T__49 - 44)) | (1 << (VParser.T__50 - 44)) | (1 << (VParser.T__51 - 44)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 646;
                                this.expression(2);
                            }
                        }
                    }
                    this.state = 651;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.unaryExpr = function () {
        var _localctx = new UnaryExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, VParser.RULE_unaryExpr);
        var _la;
        try {
            this.state = 655;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 652;
                        this.primaryExpr(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 653;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || _la === VParser.T__52)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 654;
                        this.unaryExpr();
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
    VParser.prototype.conversion = function () {
        var _localctx = new ConversionContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, VParser.RULE_conversion);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 657;
                this.type();
                this.state = 658;
                this.match(VParser.T__4);
                this.state = 659;
                this.expression(0);
                this.state = 660;
                this.match(VParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    VParser.prototype.eos = function () {
        var _localctx = new EosContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, VParser.RULE_eos);
        try {
            this.state = 665;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 662;
                        this.match(VParser.EOF);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 663;
                        if (!(lineTerminatorAhead())) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "lineTerminatorAhead()");
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 664;
                        if (!(_input.LT(1).getText().equals("}"))) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "_input.LT(1).getText().equals(\"}\") ");
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
    VParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 44:
                return this.methodSpec_sempred(_localctx, predIndex);
            case 46:
                return this.signature_sempred(_localctx, predIndex);
            case 65:
                return this.fieldDecl_sempred(_localctx, predIndex);
            case 68:
                return this.primaryExpr_sempred(_localctx, predIndex);
            case 74:
                return this.expression_sempred(_localctx, predIndex);
            case 77:
                return this.eos_sempred(_localctx, predIndex);
        }
        return true;
    };
    VParser.prototype.methodSpec_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return noTerminatorAfterParams(2);
        }
        return true;
    };
    VParser.prototype.signature_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return noTerminatorAfterParams(1);
        }
        return true;
    };
    VParser.prototype.fieldDecl_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return noTerminatorBetween(2);
        }
        return true;
    };
    VParser.prototype.primaryExpr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 3);
            case 4:
                return this.precpred(this._ctx, 2);
            case 5:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    VParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    VParser.prototype.eos_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return lineTerminatorAhead();
            case 8:
                return _input.LT(1).getText().equals("}");
        }
        return true;
    };
    Object.defineProperty(VParser, "_ATN", {
        get: function () {
            if (!VParser.__ATN) {
                VParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(VParser._serializedATN));
            }
            return VParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    VParser.T__0 = 1;
    VParser.T__1 = 2;
    VParser.T__2 = 3;
    VParser.T__3 = 4;
    VParser.T__4 = 5;
    VParser.T__5 = 6;
    VParser.T__6 = 7;
    VParser.T__7 = 8;
    VParser.T__8 = 9;
    VParser.T__9 = 10;
    VParser.T__10 = 11;
    VParser.T__11 = 12;
    VParser.T__12 = 13;
    VParser.T__13 = 14;
    VParser.T__14 = 15;
    VParser.T__15 = 16;
    VParser.T__16 = 17;
    VParser.T__17 = 18;
    VParser.T__18 = 19;
    VParser.T__19 = 20;
    VParser.T__20 = 21;
    VParser.T__21 = 22;
    VParser.T__22 = 23;
    VParser.T__23 = 24;
    VParser.T__24 = 25;
    VParser.T__25 = 26;
    VParser.T__26 = 27;
    VParser.T__27 = 28;
    VParser.T__28 = 29;
    VParser.T__29 = 30;
    VParser.T__30 = 31;
    VParser.T__31 = 32;
    VParser.T__32 = 33;
    VParser.T__33 = 34;
    VParser.T__34 = 35;
    VParser.T__35 = 36;
    VParser.T__36 = 37;
    VParser.T__37 = 38;
    VParser.T__38 = 39;
    VParser.T__39 = 40;
    VParser.T__40 = 41;
    VParser.T__41 = 42;
    VParser.T__42 = 43;
    VParser.T__43 = 44;
    VParser.T__44 = 45;
    VParser.T__45 = 46;
    VParser.T__46 = 47;
    VParser.T__47 = 48;
    VParser.T__48 = 49;
    VParser.T__49 = 50;
    VParser.T__50 = 51;
    VParser.T__51 = 52;
    VParser.T__52 = 53;
    VParser.IDENTIFIER = 54;
    VParser.KEYWORD = 55;
    VParser.BINARY_OP = 56;
    VParser.INT_LIT = 57;
    VParser.FLOAT_LIT = 58;
    VParser.RUNE_LIT = 59;
    VParser.LITTLE_U_VALUE = 60;
    VParser.BIG_U_VALUE = 61;
    VParser.STRING_LIT = 62;
    VParser.WS = 63;
    VParser.COMMENT = 64;
    VParser.TERMINATOR = 65;
    VParser.LINE_COMMENT = 66;
    VParser.RULE_sourceFile = 0;
    VParser.RULE_moduleClause = 1;
    VParser.RULE_importDecl = 2;
    VParser.RULE_importSpec = 3;
    VParser.RULE_importPath = 4;
    VParser.RULE_topLevelDecl = 5;
    VParser.RULE_declaration = 6;
    VParser.RULE_constDecl = 7;
    VParser.RULE_constSpec = 8;
    VParser.RULE_identifierList = 9;
    VParser.RULE_expressionList = 10;
    VParser.RULE_functionDecl = 11;
    VParser.RULE_function = 12;
    VParser.RULE_methodDecl = 13;
    VParser.RULE_receiver = 14;
    VParser.RULE_noMutDecl = 15;
    VParser.RULE_varDecl = 16;
    VParser.RULE_block = 17;
    VParser.RULE_statementList = 18;
    VParser.RULE_statement = 19;
    VParser.RULE_simpleStmt = 20;
    VParser.RULE_expressionStmt = 21;
    VParser.RULE_incDecStmt = 22;
    VParser.RULE_assignment = 23;
    VParser.RULE_assign_op = 24;
    VParser.RULE_returnStmt = 25;
    VParser.RULE_breakStmt = 26;
    VParser.RULE_continueStmt = 27;
    VParser.RULE_ifStmt = 28;
    VParser.RULE_switchStmt = 29;
    VParser.RULE_exprSwitchStmt = 30;
    VParser.RULE_exprCaseClause = 31;
    VParser.RULE_exprSwitchCase = 32;
    VParser.RULE_forStmt = 33;
    VParser.RULE_forClause = 34;
    VParser.RULE_inClause = 35;
    VParser.RULE_type = 36;
    VParser.RULE_typeName = 37;
    VParser.RULE_typeLit = 38;
    VParser.RULE_arrayType = 39;
    VParser.RULE_arrayLength = 40;
    VParser.RULE_elementType = 41;
    VParser.RULE_interfaceType = 42;
    VParser.RULE_mapType = 43;
    VParser.RULE_methodSpec = 44;
    VParser.RULE_functionType = 45;
    VParser.RULE_signature = 46;
    VParser.RULE_result = 47;
    VParser.RULE_parameters = 48;
    VParser.RULE_parameterList = 49;
    VParser.RULE_parameterDecl = 50;
    VParser.RULE_operand = 51;
    VParser.RULE_literal = 52;
    VParser.RULE_arrayLit = 53;
    VParser.RULE_basicLit = 54;
    VParser.RULE_operandName = 55;
    VParser.RULE_qualifiedIdent = 56;
    VParser.RULE_compositeLit = 57;
    VParser.RULE_literalType = 58;
    VParser.RULE_literalValue = 59;
    VParser.RULE_elementList = 60;
    VParser.RULE_keyedElement = 61;
    VParser.RULE_key = 62;
    VParser.RULE_element = 63;
    VParser.RULE_structDecl = 64;
    VParser.RULE_fieldDecl = 65;
    VParser.RULE_anonymousField = 66;
    VParser.RULE_functionLit = 67;
    VParser.RULE_primaryExpr = 68;
    VParser.RULE_selector = 69;
    VParser.RULE_index = 70;
    VParser.RULE_arguments = 71;
    VParser.RULE_methodExpr = 72;
    VParser.RULE_receiverType = 73;
    VParser.RULE_expression = 74;
    VParser.RULE_unaryExpr = 75;
    VParser.RULE_conversion = 76;
    VParser.RULE_eos = 77;
    // tslint:disable:no-trailing-whitespace
    VParser.ruleNames = [
        "sourceFile", "moduleClause", "importDecl", "importSpec", "importPath",
        "topLevelDecl", "declaration", "constDecl", "constSpec", "identifierList",
        "expressionList", "functionDecl", "function", "methodDecl", "receiver",
        "noMutDecl", "varDecl", "block", "statementList", "statement", "simpleStmt",
        "expressionStmt", "incDecStmt", "assignment", "assign_op", "returnStmt",
        "breakStmt", "continueStmt", "ifStmt", "switchStmt", "exprSwitchStmt",
        "exprCaseClause", "exprSwitchCase", "forStmt", "forClause", "inClause",
        "type", "typeName", "typeLit", "arrayType", "arrayLength", "elementType",
        "interfaceType", "mapType", "methodSpec", "functionType", "signature",
        "result", "parameters", "parameterList", "parameterDecl", "operand", "literal",
        "arrayLit", "basicLit", "operandName", "qualifiedIdent", "compositeLit",
        "literalType", "literalValue", "elementList", "keyedElement", "key", "element",
        "structDecl", "fieldDecl", "anonymousField", "functionLit", "primaryExpr",
        "selector", "index", "arguments", "methodExpr", "receiverType", "expression",
        "unaryExpr", "conversion", "eos",
    ];
    VParser._LITERAL_NAMES = [
        undefined, "'module'", "'import'", "'.'", "'const'", "'('", "')'", "'='",
        "','", "'fn'", "':='", "'mut'", "'{'", "'}'", "'++'", "'--'", "'+'", "'-'",
        "'|'", "'^'", "'*'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'return'",
        "'break'", "'continue'", "'if'", "';'", "'else'", "'switch'", "':'", "'case'",
        "'default'", "'for'", "'in'", "'['", "']'", "'interface'", "'map'", "'struct'",
        "'pub'", "'||'", "'&&'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='",
        "'&^'", "'!'",
    ];
    VParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", "KEYWORD",
        "BINARY_OP", "INT_LIT", "FLOAT_LIT", "RUNE_LIT", "LITTLE_U_VALUE", "BIG_U_VALUE",
        "STRING_LIT", "WS", "COMMENT", "TERMINATOR", "LINE_COMMENT",
    ];
    VParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(VParser._LITERAL_NAMES, VParser._SYMBOLIC_NAMES, []);
    VParser._serializedATNSegments = 2;
    VParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\u029E\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x03\x02\x03\x02\x03\x02\x05\x02\xA2\n\x02\x03\x02\x03\x02\x03\x02" +
        "\x07\x02\xA7\n\x02\f\x02\x0E\x02\xAA\v\x02\x03\x02\x03\x02\x03\x02\x07" +
        "\x02\xAF\n\x02\f\x02\x0E\x02\xB2\v\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
        "\x03\x04\x03\x04\x03\x05\x05\x05\xBB\n\x05\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x07\x03\x07\x03\x07\x05\x07\xC4\n\x07\x03\b\x03\b\x03\b\x05\b" +
        "\xC9\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xD0\n\t\f\t\x0E\t\xD3\v\t" +
        "\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\xDE\n\v\f" +
        "\v\x0E\v\xE1\v\v\x03\f\x03\f\x03\f\x07\f\xE6\n\f\f\f\x0E\f\xE9\v\f\x03" +
        "\r\x03\r\x03\r\x03\r\x05\r\xEF\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xF9\n\x0F\x03\x10\x03\x10\x03\x11" +
        "\x03\x11\x03\x11\x03\x11\x03\x12\x05\x12\u0102\n\x12\x03\x12\x03\x12\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u010D\n\x14" +
        "\f\x14\x0E\x14\u0110\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x15\x05\x15\u011B\n\x15\x03\x16\x03\x16\x03\x16" +
        "\x05\x16\u0120\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x1A\x05\x1A\u012C\n\x1A\x03\x1A\x03\x1A\x03\x1B" +
        "\x03\x1B\x05\x1B\u0132\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x05\x1E\u013C\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x05\x1E\u0143\n\x1E\x05\x1E\u0145\n\x1E\x03\x1F\x03\x1F\x03 " +
        "\x03 \x03 \x03 \x05 \u014D\n \x03 \x05 \u0150\n \x03 \x03 \x07 \u0154" +
        "\n \f \x0E \u0157\v \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x05" +
        "\"\u0162\n\"\x03#\x03#\x03#\x03#\x05#\u0168\n#\x03#\x03#\x03$\x05$\u016D" +
        "\n$\x03$\x03$\x05$\u0171\n$\x03$\x03$\x05$\u0175\n$\x03%\x03%\x03%\x03" +
        "%\x03&\x03&\x05&\u017D\n&\x03\'\x05\'\u0180\n\'\x03\'\x05\'\u0183\n\'" +
        "\x03\'\x03\'\x05\'\u0187\n\'\x03(\x03(\x03(\x03(\x05(\u018D\n(\x03)\x03" +
        ")\x05)\u0191\n)\x03)\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03" +
        ",\x03,\x03,\x07,\u01A0\n,\f,\x0E,\u01A3\v,\x03,\x03,\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u01B5\n.\x03" +
        "/\x03/\x03/\x030\x030\x030\x030\x030\x050\u01BF\n0\x031\x031\x051\u01C3" +
        "\n1\x032\x032\x032\x052\u01C8\n2\x052\u01CA\n2\x032\x032\x033\x033\x03" +
        "3\x073\u01D1\n3\f3\x0E3\u01D4\v3\x034\x054\u01D7\n4\x034\x034\x035\x03" +
        "5\x035\x035\x035\x035\x035\x055\u01E2\n5\x036\x036\x036\x036\x056\u01E8" +
        "\n6\x037\x037\x037\x037\x077\u01EE\n7\f7\x0E7\u01F1\v7\x037\x037\x038" +
        "\x038\x039\x039\x059\u01F9\n9\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03<" +
        "\x03<\x03<\x05<\u0205\n<\x03=\x03=\x03=\x05=\u020A\n=\x05=\u020C\n=\x03" +
        "=\x03=\x03>\x03>\x03>\x03>\x07>\u0214\n>\f>\x0E>\u0217\v>\x03?\x03?\x03" +
        "?\x05?\u021C\n?\x03?\x03?\x03@\x03@\x03@\x05@\u0223\n@\x03A\x03A\x05A" +
        "\u0227\nA\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u022F\nB\fB\x0EB\u0232\v" +
        "B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x05C\u023B\nC\x03C\x05C\u023E\nC" +
        "\x03C\x03C\x03C\x05C\u0243\nC\x05C\u0245\nC\x03C\x05C\u0248\nC\x03C\x05" +
        "C\u024B\nC\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x05F\u0255\nF\x03F" +
        "\x03F\x03F\x03F\x03F\x03F\x07F\u025D\nF\fF\x0EF\u0260\vF\x03G\x03G\x03" +
        "G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x05I\u026E\nI\x05I\u0270" +
        "\nI\x03I\x05I\u0273\nI\x05I\u0275\nI\x03I\x03I\x03J\x03J\x03J\x03J\x03" +
        "K\x03K\x03K\x03K\x03K\x05K\u0282\nK\x03L\x03L\x03L\x03L\x03L\x03L\x07" +
        "L\u028A\nL\fL\x0EL\u028D\vL\x03M\x03M\x03M\x05M\u0292\nM\x03N\x03N\x03" +
        "N\x03N\x03N\x03O\x03O\x03O\x05O\u029C\nO\x03O\x02\x02\x04\x8A\x96P\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
        ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
        "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
        "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
        "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
        "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x02\t\x04\x02\x05\x05" +
        "88\x04\x0288@@\x03\x02\x10\x11\x03\x02\x12\x1B\x04\x02;=@@\x04\x02\x12" +
        "\x1B.6\x06\x02\x12\x13\x15\x16\x1B\x1B77\x02\u02AD\x02\xA1\x03\x02\x02" +
        "\x02\x04\xB3\x03\x02\x02\x02\x06\xB6\x03\x02\x02\x02\b\xBA\x03\x02\x02" +
        "\x02\n\xBE\x03\x02\x02\x02\f\xC3\x03\x02\x02\x02\x0E\xC8\x03\x02\x02\x02" +
        "\x10\xCA\x03\x02\x02\x02\x12\xD6\x03\x02\x02\x02\x14\xDA\x03\x02\x02\x02" +
        "\x16\xE2\x03\x02\x02\x02\x18\xEA\x03\x02\x02\x02\x1A\xF0\x03\x02\x02\x02" +
        "\x1C\xF3\x03\x02\x02\x02\x1E\xFA\x03\x02\x02\x02 \xFC\x03\x02\x02\x02" +
        "\"\u0101\x03\x02\x02\x02$\u0105\x03\x02\x02\x02&\u010E\x03\x02\x02\x02" +
        "(\u011A\x03\x02\x02\x02*\u011F\x03\x02\x02\x02,\u0121\x03\x02\x02\x02" +
        ".\u0123\x03\x02\x02\x020\u0126\x03\x02\x02\x022\u012B\x03\x02\x02\x02" +
        "4\u012F\x03\x02\x02\x026\u0133\x03\x02\x02\x028\u0135\x03\x02\x02\x02" +
        ":\u0137\x03\x02\x02\x02<\u0146\x03\x02\x02\x02>\u0148\x03\x02\x02\x02" +
        "@\u015A\x03\x02\x02\x02B\u0161\x03\x02\x02\x02D\u0163\x03\x02\x02\x02" +
        "F\u016C\x03\x02\x02\x02H\u0176\x03\x02\x02\x02J\u017C\x03\x02\x02\x02" +
        "L\u0186\x03\x02\x02\x02N\u018C\x03\x02\x02\x02P\u018E\x03\x02\x02\x02" +
        "R\u0195\x03\x02\x02\x02T\u0197\x03\x02\x02\x02V\u0199\x03\x02\x02\x02" +
        "X\u01A6\x03\x02\x02\x02Z\u01B4\x03\x02\x02\x02\\\u01B6\x03\x02\x02\x02" +
        "^\u01BE\x03\x02\x02\x02`\u01C2\x03\x02\x02\x02b\u01C4\x03\x02\x02\x02" +
        "d\u01CD\x03\x02\x02\x02f\u01D6\x03\x02\x02\x02h\u01E1\x03\x02\x02\x02" +
        "j\u01E7\x03\x02\x02\x02l\u01E9\x03\x02\x02\x02n\u01F4\x03\x02\x02\x02" +
        "p\u01F8\x03\x02\x02\x02r\u01FA\x03\x02\x02\x02t\u01FE\x03\x02\x02\x02" +
        "v\u0204\x03\x02\x02\x02x\u0206\x03\x02\x02\x02z\u020F\x03\x02\x02\x02" +
        "|\u021B\x03\x02\x02\x02~\u0222\x03\x02\x02\x02\x80\u0226\x03\x02\x02\x02" +
        "\x82\u0228\x03\x02\x02\x02\x84\u024A\x03\x02\x02\x02\x86\u024C\x03\x02" +
        "\x02\x02\x88\u024E\x03\x02\x02\x02\x8A\u0254\x03\x02\x02\x02\x8C\u0261" +
        "\x03\x02\x02\x02\x8E\u0264\x03\x02\x02\x02\x90\u0268\x03\x02\x02\x02\x92" +
        "\u0278\x03\x02\x02\x02\x94\u0281\x03\x02\x02\x02\x96\u0283\x03\x02\x02" +
        "\x02\x98\u0291\x03\x02\x02\x02\x9A\u0293\x03\x02\x02\x02\x9C\u029B\x03" +
        "\x02\x02\x02\x9E\x9F\x05\x04\x03\x02\x9F\xA0\x05\x9CO\x02\xA0\xA2\x03" +
        "\x02\x02\x02\xA1\x9E\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA8\x03" +
        "\x02\x02\x02\xA3\xA4\x05\x06\x04\x02\xA4\xA5\x05\x9CO\x02\xA5\xA7\x03" +
        "\x02\x02\x02\xA6\xA3\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03" +
        "\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xB0\x03\x02\x02\x02\xAA\xA8\x03" +
        "\x02\x02\x02\xAB\xAC\x05\f\x07\x02\xAC\xAD\x05\x9CO\x02\xAD\xAF\x03\x02" +
        "\x02\x02\xAE\xAB\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02" +
        "\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\x03\x03\x02\x02\x02\xB2\xB0\x03\x02" +
        "\x02\x02\xB3\xB4\x07\x03\x02\x02\xB4\xB5\x078\x02\x02\xB5\x05\x03\x02" +
        "\x02\x02\xB6\xB7\x07\x04\x02\x02\xB7\xB8\x05\b\x05\x02\xB8\x07\x03\x02" +
        "\x02\x02\xB9\xBB\t\x02\x02\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02" +
        "\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x05\n\x06\x02\xBD\t\x03\x02\x02" +
        "\x02\xBE\xBF\t\x03\x02\x02\xBF\v\x03\x02\x02\x02\xC0\xC4\x05\x0E\b\x02" +
        "\xC1\xC4\x05\x18\r\x02\xC2\xC4\x05\x1C\x0F\x02\xC3\xC0\x03\x02\x02\x02" +
        "\xC3\xC1\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4\r\x03\x02\x02\x02" +
        "\xC5\xC9\x05\x10\t\x02\xC6\xC9\x05\"\x12\x02\xC7\xC9\x05\x82B\x02\xC8" +
        "\xC5\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9" +
        "\x0F\x03\x02\x02\x02\xCA\xCB\x07\x06\x02\x02\xCB\xD1\x07\x07\x02\x02\xCC" +
        "\xCD\x05\x12\n\x02\xCD\xCE\x05\x9CO\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCC" +
        "\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2" +
        "\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5" +
        "\x07\b\x02\x02\xD5\x11\x03\x02\x02\x02\xD6\xD7\x078\x02\x02\xD7\xD8\x07" +
        "\t\x02\x02\xD8\xD9\x05\x96L\x02\xD9\x13\x03\x02\x02\x02\xDA\xDF\x078\x02" +
        "\x02\xDB\xDC\x07\n\x02\x02\xDC\xDE\x078\x02\x02\xDD\xDB\x03\x02\x02\x02" +
        "\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02" +
        "\xE0\x15\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE7\x05\x96L\x02" +
        "\xE3\xE4\x07\n\x02\x02\xE4\xE6\x05\x96L\x02\xE5\xE3\x03\x02\x02\x02\xE6" +
        "\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8" +
        "\x17\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\x07\v\x02\x02\xEB" +
        "\xEE\x078\x02\x02\xEC\xEF\x05\x1A\x0E\x02\xED\xEF\x05^0\x02\xEE\xEC\x03" +
        "\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\x19\x03\x02\x02\x02\xF0\xF1\x05" +
        "^0\x02\xF1\xF2\x05$\x13\x02\xF2\x1B\x03\x02\x02\x02\xF3\xF4\x07\v\x02" +
        "\x02\xF4\xF5\x05\x1E\x10\x02\xF5\xF8\x078\x02\x02\xF6\xF9\x05\x1A\x0E" +
        "\x02\xF7\xF9\x05^0\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF7\x03\x02\x02\x02" +
        "\xF9\x1D\x03\x02\x02\x02\xFA\xFB\x05b2\x02\xFB\x1F\x03\x02\x02\x02\xFC" +
        "\xFD\x05\x14\v\x02\xFD\xFE\x07\f\x02\x02\xFE\xFF\x05\x16\f\x02\xFF!\x03" +
        "\x02\x02\x02\u0100\u0102\x07\r\x02\x02\u0101\u0100\x03\x02\x02\x02\u0101" +
        "\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x05 \x11" +
        "\x02\u0104#\x03\x02\x02\x02\u0105\u0106\x07\x0E\x02\x02\u0106\u0107\x05" +
        "&\x14\x02\u0107\u0108\x07\x0F\x02\x02\u0108%\x03\x02\x02\x02\u0109\u010A" +
        "\x05(\x15\x02\u010A\u010B\x05\x9CO\x02\u010B\u010D\x03\x02\x02\x02\u010C" +
        "\u0109\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02" +
        "\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\'\x03\x02\x02\x02\u0110\u010E" +
        "\x03\x02\x02\x02\u0111\u011B\x05\x0E\b\x02\u0112\u011B\x05*\x16\x02\u0113" +
        "\u011B\x054\x1B\x02\u0114\u011B\x056\x1C\x02\u0115\u011B\x058\x1D\x02" +
        "\u0116\u011B\x05$\x13\x02\u0117\u011B\x05:\x1E\x02\u0118\u011B\x05<\x1F" +
        "\x02\u0119\u011B\x05D#\x02\u011A\u0111\x03\x02\x02\x02\u011A\u0112\x03" +
        "\x02\x02\x02\u011A\u0113\x03\x02\x02\x02\u011A\u0114\x03\x02\x02\x02\u011A" +
        "\u0115\x03\x02\x02\x02\u011A\u0116\x03\x02\x02\x02\u011A\u0117\x03\x02" +
        "\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B" +
        ")\x03\x02\x02\x02\u011C\u0120\x05,\x17\x02\u011D\u0120\x05.\x18\x02\u011E" +
        "\u0120\x050\x19\x02\u011F\u011C\x03\x02\x02\x02\u011F\u011D\x03\x02\x02" +
        "\x02\u011F\u011E\x03\x02\x02\x02\u0120+\x03\x02\x02\x02\u0121\u0122\x05" +
        "\x96L\x02\u0122-\x03\x02\x02\x02\u0123\u0124\x05\x96L\x02\u0124\u0125" +
        "\t\x04\x02\x02\u0125/\x03\x02\x02\x02\u0126\u0127\x05\x16\f\x02\u0127" +
        "\u0128\x052\x1A\x02\u0128\u0129\x05\x16\f\x02\u01291\x03\x02\x02\x02\u012A" +
        "\u012C\t\x05\x02\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02" +
        "\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07\t\x02\x02\u012E3\x03" +
        "\x02\x02\x02\u012F\u0131\x07\x1C\x02\x02\u0130\u0132\x05\x16\f\x02\u0131" +
        "\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u01325\x03\x02\x02" +
        "\x02\u0133\u0134\x07\x1D\x02\x02\u01347\x03\x02\x02\x02\u0135\u0136\x07" +
        "\x1E\x02\x02\u01369\x03\x02\x02\x02\u0137\u013B\x07\x1F\x02\x02\u0138" +
        "\u0139\x05*\x16\x02\u0139\u013A\x07 \x02\x02\u013A\u013C\x03\x02\x02\x02" +
        "\u013B\u0138\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03" +
        "\x02\x02\x02\u013D\u013E\x05\x96L\x02\u013E\u0144\x05$\x13\x02\u013F\u0142" +
        "\x07!\x02\x02\u0140\u0143\x05:\x1E\x02\u0141\u0143\x05$\x13\x02\u0142" +
        "\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0145\x03\x02" +
        "\x02\x02\u0144\u013F\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
        ";\x03\x02\x02\x02\u0146\u0147\x05> \x02\u0147=\x03\x02\x02\x02\u0148\u014C" +
        "\x07\"\x02\x02\u0149\u014A\x05*\x16\x02\u014A\u014B\x07 \x02\x02\u014B" +
        "\u014D\x03\x02\x02\x02\u014C\u0149\x03\x02\x02\x02\u014C\u014D\x03\x02" +
        "\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u0150\x05\x96L\x02\u014F\u014E" +
        "\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
        "\u0151\u0155\x07\x0E\x02\x02\u0152\u0154\x05@!\x02\u0153\u0152\x03\x02" +
        "\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155" +
        "\u0156\x03\x02\x02\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0155\x03\x02" +
        "\x02\x02\u0158\u0159\x07\x0F\x02\x02\u0159?\x03\x02\x02\x02\u015A\u015B" +
        "\x05B\"\x02\u015B\u015C\x07#\x02\x02\u015C\u015D\x05&\x14\x02\u015DA\x03" +
        "\x02\x02\x02\u015E\u015F\x07$\x02\x02\u015F\u0162\x05\x16\f\x02\u0160" +
        "\u0162\x07%\x02\x02\u0161\u015E\x03\x02\x02\x02\u0161\u0160\x03\x02\x02" +
        "\x02\u0162C\x03\x02\x02\x02\u0163\u0167\x07&\x02\x02\u0164\u0168\x05\x96" +
        "L\x02\u0165\u0168\x05F$\x02\u0166\u0168\x05H%\x02\u0167\u0164\x03\x02" +
        "\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0167" +
        "\u0168\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x05$\x13" +
        "\x02\u016AE\x03\x02\x02\x02\u016B\u016D\x05*\x16\x02\u016C\u016B\x03\x02" +
        "\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
        "\u0170\x07 \x02\x02\u016F\u0171\x05\x96L\x02\u0170\u016F\x03\x02\x02\x02" +
        "\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x07" +
        " \x02\x02\u0173\u0175\x05*\x16\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175" +
        "\x03\x02\x02\x02\u0175G\x03\x02\x02\x02\u0176\u0177\x05\x16\f\x02\u0177" +
        "\u0178\x07\'\x02\x02\u0178\u0179\x078\x02\x02\u0179I\x03\x02\x02\x02\u017A" +
        "\u017D\x05L\'\x02\u017B\u017D\x05N(\x02\u017C\u017A\x03\x02\x02\x02\u017C" +
        "\u017B\x03\x02\x02\x02\u017DK\x03\x02\x02\x02\u017E\u0180\x07\x1B\x02" +
        "\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182" +
        "\x03\x02\x02\x02\u0181\u0183\x07\r\x02\x02\u0182\u0181\x03\x02\x02\x02" +
        "\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0187\x07" +
        "8\x02\x02\u0185\u0187\x05r:\x02\u0186\u017F\x03\x02\x02\x02\u0186\u0185" +
        "\x03\x02\x02\x02\u0187M\x03\x02\x02\x02\u0188\u018D\x05P)\x02\u0189\u018D" +
        "\x05\\/\x02\u018A\u018D\x05V,\x02\u018B\u018D\x05X-\x02\u018C\u0188\x03" +
        "\x02\x02\x02\u018C\u0189\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C" +
        "\u018B\x03\x02\x02\x02\u018DO\x03\x02\x02\x02\u018E\u0190\x07(\x02\x02" +
        "\u018F\u0191\x05R*\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02" +
        "\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x07)\x02\x02\u0193\u0194" +
        "\x05T+\x02\u0194Q\x03\x02\x02\x02\u0195\u0196\x05\x96L\x02\u0196S\x03" +
        "\x02\x02\x02\u0197\u0198\x05J&\x02\u0198U\x03\x02\x02\x02\u0199\u019A" +
        "\x07*\x02\x02\u019A\u019B\x078\x02\x02\u019B\u01A1\x07\x0E\x02\x02\u019C" +
        "\u019D\x05Z.\x02\u019D\u019E\x05\x9CO\x02\u019E\u01A0\x03\x02\x02\x02" +
        "\u019F\u019C\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03" +
        "\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3" +
        "\u01A1\x03\x02\x02\x02\u01A4\u01A5\x07\x0F\x02\x02\u01A5W\x03\x02\x02" +
        "\x02\u01A6\u01A7\x07+\x02\x02\u01A7\u01A8\x07(\x02\x02\u01A8\u01A9\x05" +
        "J&\x02\u01A9\u01AA\x07)\x02\x02\u01AA\u01AB\x05T+\x02\u01ABY\x03\x02\x02" +
        "\x02\u01AC\u01AD\x06.\x02\x02\u01AD\u01AE\x078\x02\x02\u01AE\u01AF\x05" +
        "b2\x02\u01AF\u01B0\x05`1\x02\u01B0\u01B5\x03\x02\x02\x02\u01B1\u01B5\x05" +
        "L\'\x02\u01B2\u01B3\x078\x02\x02\u01B3\u01B5\x05b2\x02\u01B4\u01AC\x03" +
        "\x02\x02\x02\u01B4\u01B1\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5" +
        "[\x03\x02\x02\x02\u01B6\u01B7\x07\v\x02\x02\u01B7\u01B8\x05^0\x02\u01B8" +
        "]\x03\x02\x02\x02\u01B9\u01BA\x060\x03\x02\u01BA\u01BB\x05b2\x02\u01BB" +
        "\u01BC\x05`1\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BF\x05b2\x02\u01BE" +
        "\u01B9\x03\x02\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF_\x03\x02\x02" +
        "\x02\u01C0\u01C3\x05b2\x02\u01C1\u01C3\x05J&\x02\u01C2\u01C0\x03\x02\x02" +
        "\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3a\x03\x02\x02\x02\u01C4\u01C9\x07" +
        "\x07\x02\x02\u01C5\u01C7\x05d3\x02\u01C6\u01C8\x07\n\x02\x02\u01C7\u01C6" +
        "\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02" +
        "\u01C9\u01C5\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03" +
        "\x02\x02\x02\u01CB\u01CC\x07\b\x02\x02\u01CCc\x03\x02\x02\x02\u01CD\u01D2" +
        "\x05f4\x02\u01CE\u01CF\x07\n\x02\x02\u01CF\u01D1\x05f4\x02\u01D0\u01CE" +
        "\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02" +
        "\u01D2\u01D3\x03\x02\x02\x02\u01D3e\x03\x02\x02\x02\u01D4\u01D2\x03\x02" +
        "\x02\x02\u01D5\u01D7\x05\x14\v\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7" +
        "\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x05J&\x02\u01D9" +
        "g\x03\x02\x02\x02\u01DA\u01E2\x05j6\x02\u01DB\u01E2\x05p9\x02\u01DC\u01E2" +
        "\x05\x92J\x02\u01DD\u01DE\x07\x07\x02\x02\u01DE\u01DF\x05\x96L\x02\u01DF" +
        "\u01E0\x07\b\x02\x02\u01E0\u01E2\x03\x02\x02\x02\u01E1\u01DA\x03\x02\x02" +
        "\x02\u01E1\u01DB\x03\x02\x02\x02\u01E1\u01DC\x03\x02\x02\x02\u01E1\u01DD" +
        "\x03\x02\x02\x02\u01E2i\x03\x02\x02\x02\u01E3\u01E8\x05n8\x02\u01E4\u01E8" +
        "\x05t;\x02\u01E5\u01E8\x05\x88E\x02\u01E6\u01E8\x05l7\x02\u01E7\u01E3" +
        "\x03\x02\x02\x02\u01E7\u01E4\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02" +
        "\u01E7\u01E6\x03\x02\x02\x02\u01E8k\x03\x02\x02\x02\u01E9\u01EA\x07(\x02" +
        "\x02\u01EA\u01EF\x05\x96L\x02\u01EB\u01EC\x07\n\x02\x02\u01EC\u01EE\x05" +
        "\x96L\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF" +
        "\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02" +
        "\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x07)\x02\x02\u01F3m\x03" +
        "\x02\x02\x02\u01F4\u01F5\t\x06\x02\x02\u01F5o\x03\x02\x02\x02\u01F6\u01F9" +
        "\x078\x02\x02\u01F7\u01F9\x05r:\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8" +
        "\u01F7\x03\x02\x02\x02\u01F9q\x03\x02\x02\x02\u01FA\u01FB\x078\x02\x02" +
        "\u01FB\u01FC\x07\x05\x02\x02\u01FC\u01FD\x078\x02\x02\u01FDs\x03\x02\x02" +
        "\x02\u01FE\u01FF\x05v<\x02\u01FF\u0200\x05x=\x02\u0200u\x03\x02\x02\x02" +
        "\u0201\u0205\x05P)\x02\u0202\u0205\x05X-\x02\u0203\u0205\x05L\'\x02\u0204" +
        "\u0201\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203\x03\x02" +
        "\x02\x02\u0205w\x03\x02\x02\x02\u0206\u020B\x07\x0E\x02\x02\u0207\u0209" +
        "\x05z>\x02\u0208\u020A\x07\n\x02\x02\u0209\u0208\x03\x02\x02\x02\u0209" +
        "\u020A\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u0207\x03\x02" +
        "\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D" +
        "\u020E\x07\x0F\x02\x02\u020Ey\x03\x02\x02\x02\u020F\u0215\x05|?\x02\u0210" +
        "\u0211\x05\x9CO\x02\u0211\u0212\x05|?\x02\u0212\u0214\x03\x02\x02\x02" +
        "\u0213\u0210\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0213\x03" +
        "\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216{\x03\x02\x02\x02\u0217" +
        "\u0215\x03\x02\x02\x02\u0218\u0219\x05~@\x02\u0219\u021A\x07#\x02\x02" +
        "\u021A\u021C\x03\x02\x02\x02\u021B\u0218\x03\x02\x02\x02\u021B\u021C\x03" +
        "\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x05\x80A\x02\u021E" +
        "}\x03\x02\x02\x02\u021F\u0223\x078\x02\x02\u0220\u0223\x05\x96L\x02\u0221" +
        "\u0223\x05x=\x02\u0222\u021F\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02" +
        "\u0222\u0221\x03\x02\x02\x02\u0223\x7F\x03\x02\x02\x02\u0224\u0227\x05" +
        "\x96L\x02\u0225\u0227\x05x=\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225" +
        "\x03\x02\x02\x02\u0227\x81\x03\x02\x02\x02\u0228\u0229\x07,\x02\x02\u0229" +
        "\u022A\x078\x02\x02\u022A\u0230\x07\x0E\x02\x02\u022B\u022C\x05\x84C\x02" +
        "\u022C\u022D\x05\x9CO\x02\u022D\u022F\x03\x02\x02\x02\u022E\u022B\x03" +
        "\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230" +
        "\u0231\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0230\x03\x02" +
        "\x02\x02\u0233\u0234\x07\x0F\x02\x02\u0234\x83\x03\x02\x02\x02";
    VParser._serializedATNSegment1 = "\u0235\u0236\x06C\x04\x02\u0236\u0237\x05\x14\v\x02\u0237\u0238\x05J&" +
        "\x02\u0238\u023B\x03\x02\x02\x02\u0239\u023B\x05\x86D\x02\u023A\u0235" +
        "\x03\x02\x02\x02\u023A\u0239\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02" +
        "\u023C\u023E\x07@\x02\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03" +
        "\x02\x02\x02\u023E\u024B\x03\x02\x02\x02\u023F\u0244\x07-\x02\x02\u0240" +
        "\u0242\x07\r\x02\x02\u0241\u0243\x07\r\x02\x02\u0242\u0241\x03\x02\x02" +
        "\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244\u0240" +
        "\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02" +
        "\u0246\u0248\x07\r\x02\x02\u0247\u023F\x03\x02\x02\x02\u0247\u0246\x03" +
        "\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024B\x07#\x02\x02\u024A" +
        "\u023A\x03\x02\x02\x02\u024A\u0247\x03\x02\x02\x02\u024B\x85\x03\x02\x02" +
        "\x02\u024C\u024D\x05L\'\x02\u024D\x87\x03\x02\x02\x02\u024E\u024F\x07" +
        "\v\x02\x02\u024F\u0250\x05\x1A\x0E\x02\u0250\x89\x03\x02\x02\x02\u0251" +
        "\u0252\bF\x01\x02\u0252\u0255\x05h5\x02\u0253\u0255\x05\x9AN\x02\u0254" +
        "\u0251\x03\x02\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255\u025E\x03\x02" +
        "\x02\x02\u0256\u0257\f\x05\x02\x02\u0257\u025D\x05\x8CG\x02\u0258\u0259" +
        "\f\x04\x02\x02\u0259\u025D\x05\x8EH\x02\u025A\u025B\f\x03\x02\x02\u025B" +
        "\u025D\x05\x90I\x02\u025C\u0256\x03\x02\x02\x02\u025C\u0258\x03\x02\x02" +
        "\x02\u025C\u025A\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C" +
        "\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\x8B\x03\x02\x02\x02" +
        "\u0260\u025E\x03\x02\x02\x02\u0261\u0262\x07\x05\x02\x02\u0262\u0263\x07" +
        "8\x02\x02\u0263\x8D\x03\x02\x02\x02\u0264\u0265\x07(\x02\x02\u0265\u0266" +
        "\x05\x96L\x02\u0266\u0267\x07)\x02\x02\u0267\x8F\x03\x02\x02\x02\u0268" +
        "\u0274\x07\x07\x02\x02\u0269\u0270\x05\x16\f\x02\u026A\u026D\x05J&\x02" +
        "\u026B\u026C\x07\n\x02\x02\u026C\u026E\x05\x16\f\x02\u026D\u026B\x03\x02" +
        "\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F" +
        "\u0269\x03\x02\x02\x02\u026F\u026A\x03\x02\x02\x02\u0270\u0272\x03\x02" +
        "\x02\x02\u0271\u0273\x07\n\x02\x02\u0272\u0271\x03\x02\x02\x02\u0272\u0273" +
        "\x03\x02\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u026F\x03\x02\x02\x02" +
        "\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x07" +
        "\b\x02\x02\u0277\x91\x03\x02\x02\x02\u0278\u0279\x05\x94K\x02\u0279\u027A" +
        "\x07\x05\x02\x02\u027A\u027B\x078\x02\x02\u027B\x93\x03\x02\x02\x02\u027C" +
        "\u0282\x05L\'\x02\u027D\u027E\x07\x07\x02\x02\u027E\u027F\x05\x94K\x02" +
        "\u027F\u0280\x07\b\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u027C\x03" +
        "\x02\x02\x02\u0281\u027D\x03\x02\x02\x02\u0282\x95\x03\x02\x02\x02\u0283" +
        "\u0284\bL\x01\x02\u0284\u0285\x05\x98M\x02\u0285\u028B\x03\x02\x02\x02" +
        "\u0286\u0287\f\x03\x02\x02\u0287\u0288\t\x07\x02\x02\u0288\u028A\x05\x96" +
        "L\x04\u0289\u0286\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289" +
        "\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\x97\x03\x02\x02\x02" +
        "\u028D\u028B\x03\x02\x02\x02\u028E\u0292\x05\x8AF\x02\u028F\u0290\t\b" +
        "\x02\x02\u0290\u0292\x05\x98M\x02\u0291\u028E\x03\x02\x02\x02\u0291\u028F" +
        "\x03\x02\x02\x02\u0292\x99\x03\x02\x02\x02\u0293\u0294\x05J&\x02\u0294" +
        "\u0295\x07\x07\x02\x02\u0295\u0296\x05\x96L\x02\u0296\u0297\x07\b\x02" +
        "\x02\u0297\x9B\x03\x02\x02\x02\u0298\u029C\x07\x02\x02\x03\u0299\u029C" +
        "\x06O\t\x02\u029A\u029C\x06O\n\x02\u029B\u0298\x03\x02\x02\x02\u029B\u0299" +
        "\x03\x02\x02\x02\u029B\u029A\x03\x02\x02\x02\u029C\x9D\x03\x02\x02\x02" +
        "I\xA1\xA8\xB0\xBA\xC3\xC8\xD1\xDF\xE7\xEE\xF8\u0101\u010E\u011A\u011F" +
        "\u012B\u0131\u013B\u0142\u0144\u014C\u014F\u0155\u0161\u0167\u016C\u0170" +
        "\u0174\u017C\u017F\u0182\u0186\u018C\u0190\u01A1\u01B4\u01BE\u01C2\u01C7" +
        "\u01C9\u01D2\u01D6\u01E1\u01E7\u01EF\u01F8\u0204\u0209\u020B\u0215\u021B" +
        "\u0222\u0226\u0230\u023A\u023D\u0242\u0244\u0247\u024A\u0254\u025C\u025E" +
        "\u026D\u026F\u0272\u0274\u0281\u028B\u0291\u029B";
    VParser._serializedATN = Utils.join([
        VParser._serializedATNSegment0,
        VParser._serializedATNSegment1,
    ], "");
    return VParser;
}(Parser_1.Parser));
exports.VParser = VParser;
var SourceFileContext = /** @class */ (function (_super) {
    __extends(SourceFileContext, _super);
    function SourceFileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceFileContext.prototype.moduleClause = function () {
        return this.tryGetRuleContext(0, ModuleClauseContext);
    };
    SourceFileContext.prototype.eos = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }
        else {
            return this.getRuleContext(i, EosContext);
        }
    };
    SourceFileContext.prototype.importDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclContext);
        }
        else {
            return this.getRuleContext(i, ImportDeclContext);
        }
    };
    SourceFileContext.prototype.topLevelDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelDeclContext);
        }
        else {
            return this.getRuleContext(i, TopLevelDeclContext);
        }
    };
    Object.defineProperty(SourceFileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_sourceFile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceFileContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceFile) {
            listener.enterSourceFile(this);
        }
    };
    // @Override
    SourceFileContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceFile) {
            listener.exitSourceFile(this);
        }
    };
    // @Override
    SourceFileContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceFile) {
            return visitor.visitSourceFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceFileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceFileContext = SourceFileContext;
var ModuleClauseContext = /** @class */ (function (_super) {
    __extends(ModuleClauseContext, _super);
    function ModuleClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleClauseContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    Object.defineProperty(ModuleClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_moduleClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleClause) {
            listener.enterModuleClause(this);
        }
    };
    // @Override
    ModuleClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleClause) {
            listener.exitModuleClause(this);
        }
    };
    // @Override
    ModuleClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleClause) {
            return visitor.visitModuleClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleClauseContext = ModuleClauseContext;
var ImportDeclContext = /** @class */ (function (_super) {
    __extends(ImportDeclContext, _super);
    function ImportDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDeclContext.prototype.importSpec = function () {
        return this.tryGetRuleContext(0, ImportSpecContext);
    };
    Object.defineProperty(ImportDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_importDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterImportDecl) {
            listener.enterImportDecl(this);
        }
    };
    // @Override
    ImportDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitImportDecl) {
            listener.exitImportDecl(this);
        }
    };
    // @Override
    ImportDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitImportDecl) {
            return visitor.visitImportDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportDeclContext = ImportDeclContext;
var ImportSpecContext = /** @class */ (function (_super) {
    __extends(ImportSpecContext, _super);
    function ImportSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportSpecContext.prototype.importPath = function () {
        return this.getRuleContext(0, ImportPathContext);
    };
    ImportSpecContext.prototype.IDENTIFIER = function () { return this.tryGetToken(VParser.IDENTIFIER, 0); };
    Object.defineProperty(ImportSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_importSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterImportSpec) {
            listener.enterImportSpec(this);
        }
    };
    // @Override
    ImportSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitImportSpec) {
            listener.exitImportSpec(this);
        }
    };
    // @Override
    ImportSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitImportSpec) {
            return visitor.visitImportSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportSpecContext = ImportSpecContext;
var ImportPathContext = /** @class */ (function (_super) {
    __extends(ImportPathContext, _super);
    function ImportPathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportPathContext.prototype.IDENTIFIER = function () { return this.tryGetToken(VParser.IDENTIFIER, 0); };
    ImportPathContext.prototype.STRING_LIT = function () { return this.tryGetToken(VParser.STRING_LIT, 0); };
    Object.defineProperty(ImportPathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_importPath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportPathContext.prototype.enterRule = function (listener) {
        if (listener.enterImportPath) {
            listener.enterImportPath(this);
        }
    };
    // @Override
    ImportPathContext.prototype.exitRule = function (listener) {
        if (listener.exitImportPath) {
            listener.exitImportPath(this);
        }
    };
    // @Override
    ImportPathContext.prototype.accept = function (visitor) {
        if (visitor.visitImportPath) {
            return visitor.visitImportPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportPathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportPathContext = ImportPathContext;
var TopLevelDeclContext = /** @class */ (function (_super) {
    __extends(TopLevelDeclContext, _super);
    function TopLevelDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopLevelDeclContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    TopLevelDeclContext.prototype.functionDecl = function () {
        return this.tryGetRuleContext(0, FunctionDeclContext);
    };
    TopLevelDeclContext.prototype.methodDecl = function () {
        return this.tryGetRuleContext(0, MethodDeclContext);
    };
    Object.defineProperty(TopLevelDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_topLevelDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopLevelDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterTopLevelDecl) {
            listener.enterTopLevelDecl(this);
        }
    };
    // @Override
    TopLevelDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitTopLevelDecl) {
            listener.exitTopLevelDecl(this);
        }
    };
    // @Override
    TopLevelDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitTopLevelDecl) {
            return visitor.visitTopLevelDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopLevelDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopLevelDeclContext = TopLevelDeclContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.constDecl = function () {
        return this.tryGetRuleContext(0, ConstDeclContext);
    };
    DeclarationContext.prototype.varDecl = function () {
        return this.tryGetRuleContext(0, VarDeclContext);
    };
    DeclarationContext.prototype.structDecl = function () {
        return this.tryGetRuleContext(0, StructDeclContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var ConstDeclContext = /** @class */ (function (_super) {
    __extends(ConstDeclContext, _super);
    function ConstDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstDeclContext.prototype.constSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstSpecContext);
        }
        else {
            return this.getRuleContext(i, ConstSpecContext);
        }
    };
    ConstDeclContext.prototype.eos = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }
        else {
            return this.getRuleContext(i, EosContext);
        }
    };
    Object.defineProperty(ConstDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_constDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterConstDecl) {
            listener.enterConstDecl(this);
        }
    };
    // @Override
    ConstDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitConstDecl) {
            listener.exitConstDecl(this);
        }
    };
    // @Override
    ConstDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitConstDecl) {
            return visitor.visitConstDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstDeclContext = ConstDeclContext;
var ConstSpecContext = /** @class */ (function (_super) {
    __extends(ConstSpecContext, _super);
    function ConstSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstSpecContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    ConstSpecContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ConstSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_constSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterConstSpec) {
            listener.enterConstSpec(this);
        }
    };
    // @Override
    ConstSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitConstSpec) {
            listener.exitConstSpec(this);
        }
    };
    // @Override
    ConstSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitConstSpec) {
            return visitor.visitConstSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstSpecContext = ConstSpecContext;
var IdentifierListContext = /** @class */ (function (_super) {
    __extends(IdentifierListContext, _super);
    function IdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierListContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(VParser.IDENTIFIER);
        }
        else {
            return this.getToken(VParser.IDENTIFIER, i);
        }
    };
    Object.defineProperty(IdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_identifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierList) {
            listener.enterIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierList) {
            listener.exitIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierListContext = IdentifierListContext;
var ExpressionListContext = /** @class */ (function (_super) {
    __extends(ExpressionListContext, _super);
    function ExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionListContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_expressionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionListContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionListContext = ExpressionListContext;
var FunctionDeclContext = /** @class */ (function (_super) {
    __extends(FunctionDeclContext, _super);
    function FunctionDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDeclContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    FunctionDeclContext.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    FunctionDeclContext.prototype.signature = function () {
        return this.tryGetRuleContext(0, SignatureContext);
    };
    Object.defineProperty(FunctionDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_functionDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDecl) {
            listener.enterFunctionDecl(this);
        }
    };
    // @Override
    FunctionDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDecl) {
            listener.exitFunctionDecl(this);
        }
    };
    // @Override
    FunctionDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDeclContext = FunctionDeclContext;
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.signature = function () {
        return this.getRuleContext(0, SignatureContext);
    };
    FunctionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_function; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionContext = FunctionContext;
var MethodDeclContext = /** @class */ (function (_super) {
    __extends(MethodDeclContext, _super);
    function MethodDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodDeclContext.prototype.receiver = function () {
        return this.getRuleContext(0, ReceiverContext);
    };
    MethodDeclContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    MethodDeclContext.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    MethodDeclContext.prototype.signature = function () {
        return this.tryGetRuleContext(0, SignatureContext);
    };
    Object.defineProperty(MethodDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_methodDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodDecl) {
            listener.enterMethodDecl(this);
        }
    };
    // @Override
    MethodDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodDecl) {
            listener.exitMethodDecl(this);
        }
    };
    // @Override
    MethodDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodDecl) {
            return visitor.visitMethodDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodDeclContext = MethodDeclContext;
var ReceiverContext = /** @class */ (function (_super) {
    __extends(ReceiverContext, _super);
    function ReceiverContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReceiverContext.prototype.parameters = function () {
        return this.getRuleContext(0, ParametersContext);
    };
    Object.defineProperty(ReceiverContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_receiver; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReceiverContext.prototype.enterRule = function (listener) {
        if (listener.enterReceiver) {
            listener.enterReceiver(this);
        }
    };
    // @Override
    ReceiverContext.prototype.exitRule = function (listener) {
        if (listener.exitReceiver) {
            listener.exitReceiver(this);
        }
    };
    // @Override
    ReceiverContext.prototype.accept = function (visitor) {
        if (visitor.visitReceiver) {
            return visitor.visitReceiver(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReceiverContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReceiverContext = ReceiverContext;
var NoMutDeclContext = /** @class */ (function (_super) {
    __extends(NoMutDeclContext, _super);
    function NoMutDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoMutDeclContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    NoMutDeclContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(NoMutDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_noMutDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NoMutDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterNoMutDecl) {
            listener.enterNoMutDecl(this);
        }
    };
    // @Override
    NoMutDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitNoMutDecl) {
            listener.exitNoMutDecl(this);
        }
    };
    // @Override
    NoMutDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitNoMutDecl) {
            return visitor.visitNoMutDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NoMutDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NoMutDeclContext = NoMutDeclContext;
var VarDeclContext = /** @class */ (function (_super) {
    __extends(VarDeclContext, _super);
    function VarDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarDeclContext.prototype.noMutDecl = function () {
        return this.tryGetRuleContext(0, NoMutDeclContext);
    };
    Object.defineProperty(VarDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_varDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterVarDecl) {
            listener.enterVarDecl(this);
        }
    };
    // @Override
    VarDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitVarDecl) {
            listener.exitVarDecl(this);
        }
    };
    // @Override
    VarDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitVarDecl) {
            return visitor.visitVarDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarDeclContext = VarDeclContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.statementList = function () {
        return this.getRuleContext(0, StatementListContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_block; },
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
var StatementListContext = /** @class */ (function (_super) {
    __extends(StatementListContext, _super);
    function StatementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementListContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    StatementListContext.prototype.eos = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }
        else {
            return this.getRuleContext(i, EosContext);
        }
    };
    Object.defineProperty(StatementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_statementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementListContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementListContext = StatementListContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    StatementContext.prototype.simpleStmt = function () {
        return this.tryGetRuleContext(0, SimpleStmtContext);
    };
    StatementContext.prototype.returnStmt = function () {
        return this.tryGetRuleContext(0, ReturnStmtContext);
    };
    StatementContext.prototype.breakStmt = function () {
        return this.tryGetRuleContext(0, BreakStmtContext);
    };
    StatementContext.prototype.continueStmt = function () {
        return this.tryGetRuleContext(0, ContinueStmtContext);
    };
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.ifStmt = function () {
        return this.tryGetRuleContext(0, IfStmtContext);
    };
    StatementContext.prototype.switchStmt = function () {
        return this.tryGetRuleContext(0, SwitchStmtContext);
    };
    StatementContext.prototype.forStmt = function () {
        return this.tryGetRuleContext(0, ForStmtContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_statement; },
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
var SimpleStmtContext = /** @class */ (function (_super) {
    __extends(SimpleStmtContext, _super);
    function SimpleStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleStmtContext.prototype.expressionStmt = function () {
        return this.tryGetRuleContext(0, ExpressionStmtContext);
    };
    SimpleStmtContext.prototype.incDecStmt = function () {
        return this.tryGetRuleContext(0, IncDecStmtContext);
    };
    SimpleStmtContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    Object.defineProperty(SimpleStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_simpleStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleStmt) {
            listener.enterSimpleStmt(this);
        }
    };
    // @Override
    SimpleStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleStmt) {
            listener.exitSimpleStmt(this);
        }
    };
    // @Override
    SimpleStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleStmt) {
            return visitor.visitSimpleStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleStmtContext = SimpleStmtContext;
var ExpressionStmtContext = /** @class */ (function (_super) {
    __extends(ExpressionStmtContext, _super);
    function ExpressionStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExpressionStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_expressionStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionStmt) {
            listener.enterExpressionStmt(this);
        }
    };
    // @Override
    ExpressionStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionStmt) {
            listener.exitExpressionStmt(this);
        }
    };
    // @Override
    ExpressionStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionStmt) {
            return visitor.visitExpressionStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStmtContext = ExpressionStmtContext;
var IncDecStmtContext = /** @class */ (function (_super) {
    __extends(IncDecStmtContext, _super);
    function IncDecStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IncDecStmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(IncDecStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_incDecStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IncDecStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterIncDecStmt) {
            listener.enterIncDecStmt(this);
        }
    };
    // @Override
    IncDecStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitIncDecStmt) {
            listener.exitIncDecStmt(this);
        }
    };
    // @Override
    IncDecStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitIncDecStmt) {
            return visitor.visitIncDecStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncDecStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IncDecStmtContext = IncDecStmtContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.expressionList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionListContext);
        }
        else {
            return this.getRuleContext(i, ExpressionListContext);
        }
    };
    AssignmentContext.prototype.assign_op = function () {
        return this.getRuleContext(0, Assign_opContext);
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_assignment; },
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
var Assign_opContext = /** @class */ (function (_super) {
    __extends(Assign_opContext, _super);
    function Assign_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Assign_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_assign_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assign_opContext.prototype.enterRule = function (listener) {
        if (listener.enterAssign_op) {
            listener.enterAssign_op(this);
        }
    };
    // @Override
    Assign_opContext.prototype.exitRule = function (listener) {
        if (listener.exitAssign_op) {
            listener.exitAssign_op(this);
        }
    };
    // @Override
    Assign_opContext.prototype.accept = function (visitor) {
        if (visitor.visitAssign_op) {
            return visitor.visitAssign_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assign_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assign_opContext = Assign_opContext;
var ReturnStmtContext = /** @class */ (function (_super) {
    __extends(ReturnStmtContext, _super);
    function ReturnStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStmtContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ReturnStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_returnStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStmt) {
            listener.enterReturnStmt(this);
        }
    };
    // @Override
    ReturnStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStmt) {
            listener.exitReturnStmt(this);
        }
    };
    // @Override
    ReturnStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStmtContext = ReturnStmtContext;
var BreakStmtContext = /** @class */ (function (_super) {
    __extends(BreakStmtContext, _super);
    function BreakStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BreakStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_breakStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BreakStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterBreakStmt) {
            listener.enterBreakStmt(this);
        }
    };
    // @Override
    BreakStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitBreakStmt) {
            listener.exitBreakStmt(this);
        }
    };
    // @Override
    BreakStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitBreakStmt) {
            return visitor.visitBreakStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BreakStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BreakStmtContext = BreakStmtContext;
var ContinueStmtContext = /** @class */ (function (_super) {
    __extends(ContinueStmtContext, _super);
    function ContinueStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ContinueStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_continueStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContinueStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterContinueStmt) {
            listener.enterContinueStmt(this);
        }
    };
    // @Override
    ContinueStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitContinueStmt) {
            listener.exitContinueStmt(this);
        }
    };
    // @Override
    ContinueStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitContinueStmt) {
            return visitor.visitContinueStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContinueStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContinueStmtContext = ContinueStmtContext;
var IfStmtContext = /** @class */ (function (_super) {
    __extends(IfStmtContext, _super);
    function IfStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IfStmtContext.prototype.block = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    };
    IfStmtContext.prototype.simpleStmt = function () {
        return this.tryGetRuleContext(0, SimpleStmtContext);
    };
    IfStmtContext.prototype.ifStmt = function () {
        return this.tryGetRuleContext(0, IfStmtContext);
    };
    Object.defineProperty(IfStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_ifStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStmt) {
            listener.enterIfStmt(this);
        }
    };
    // @Override
    IfStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStmt) {
            listener.exitIfStmt(this);
        }
    };
    // @Override
    IfStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStmtContext = IfStmtContext;
var SwitchStmtContext = /** @class */ (function (_super) {
    __extends(SwitchStmtContext, _super);
    function SwitchStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchStmtContext.prototype.exprSwitchStmt = function () {
        return this.getRuleContext(0, ExprSwitchStmtContext);
    };
    Object.defineProperty(SwitchStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_switchStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchStmt) {
            listener.enterSwitchStmt(this);
        }
    };
    // @Override
    SwitchStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchStmt) {
            listener.exitSwitchStmt(this);
        }
    };
    // @Override
    SwitchStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchStmt) {
            return visitor.visitSwitchStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchStmtContext = SwitchStmtContext;
var ExprSwitchStmtContext = /** @class */ (function (_super) {
    __extends(ExprSwitchStmtContext, _super);
    function ExprSwitchStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprSwitchStmtContext.prototype.simpleStmt = function () {
        return this.tryGetRuleContext(0, SimpleStmtContext);
    };
    ExprSwitchStmtContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ExprSwitchStmtContext.prototype.exprCaseClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprCaseClauseContext);
        }
        else {
            return this.getRuleContext(i, ExprCaseClauseContext);
        }
    };
    Object.defineProperty(ExprSwitchStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_exprSwitchStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprSwitchStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterExprSwitchStmt) {
            listener.enterExprSwitchStmt(this);
        }
    };
    // @Override
    ExprSwitchStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitExprSwitchStmt) {
            listener.exitExprSwitchStmt(this);
        }
    };
    // @Override
    ExprSwitchStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitExprSwitchStmt) {
            return visitor.visitExprSwitchStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprSwitchStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprSwitchStmtContext = ExprSwitchStmtContext;
var ExprCaseClauseContext = /** @class */ (function (_super) {
    __extends(ExprCaseClauseContext, _super);
    function ExprCaseClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprCaseClauseContext.prototype.exprSwitchCase = function () {
        return this.getRuleContext(0, ExprSwitchCaseContext);
    };
    ExprCaseClauseContext.prototype.statementList = function () {
        return this.getRuleContext(0, StatementListContext);
    };
    Object.defineProperty(ExprCaseClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_exprCaseClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprCaseClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterExprCaseClause) {
            listener.enterExprCaseClause(this);
        }
    };
    // @Override
    ExprCaseClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitExprCaseClause) {
            listener.exitExprCaseClause(this);
        }
    };
    // @Override
    ExprCaseClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitExprCaseClause) {
            return visitor.visitExprCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprCaseClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprCaseClauseContext = ExprCaseClauseContext;
var ExprSwitchCaseContext = /** @class */ (function (_super) {
    __extends(ExprSwitchCaseContext, _super);
    function ExprSwitchCaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprSwitchCaseContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ExprSwitchCaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_exprSwitchCase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprSwitchCaseContext.prototype.enterRule = function (listener) {
        if (listener.enterExprSwitchCase) {
            listener.enterExprSwitchCase(this);
        }
    };
    // @Override
    ExprSwitchCaseContext.prototype.exitRule = function (listener) {
        if (listener.exitExprSwitchCase) {
            listener.exitExprSwitchCase(this);
        }
    };
    // @Override
    ExprSwitchCaseContext.prototype.accept = function (visitor) {
        if (visitor.visitExprSwitchCase) {
            return visitor.visitExprSwitchCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprSwitchCaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprSwitchCaseContext = ExprSwitchCaseContext;
var ForStmtContext = /** @class */ (function (_super) {
    __extends(ForStmtContext, _super);
    function ForStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStmtContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ForStmtContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ForStmtContext.prototype.forClause = function () {
        return this.tryGetRuleContext(0, ForClauseContext);
    };
    ForStmtContext.prototype.inClause = function () {
        return this.tryGetRuleContext(0, InClauseContext);
    };
    Object.defineProperty(ForStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_forStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterForStmt) {
            listener.enterForStmt(this);
        }
    };
    // @Override
    ForStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitForStmt) {
            listener.exitForStmt(this);
        }
    };
    // @Override
    ForStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitForStmt) {
            return visitor.visitForStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForStmtContext = ForStmtContext;
var ForClauseContext = /** @class */ (function (_super) {
    __extends(ForClauseContext, _super);
    function ForClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForClauseContext.prototype.simpleStmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleStmtContext);
        }
        else {
            return this.getRuleContext(i, SimpleStmtContext);
        }
    };
    ForClauseContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ForClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_forClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterForClause) {
            listener.enterForClause(this);
        }
    };
    // @Override
    ForClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitForClause) {
            listener.exitForClause(this);
        }
    };
    // @Override
    ForClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitForClause) {
            return visitor.visitForClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForClauseContext = ForClauseContext;
var InClauseContext = /** @class */ (function (_super) {
    __extends(InClauseContext, _super);
    function InClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InClauseContext.prototype.expressionList = function () {
        return this.getRuleContext(0, ExpressionListContext);
    };
    InClauseContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    Object.defineProperty(InClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_inClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterInClause) {
            listener.enterInClause(this);
        }
    };
    // @Override
    InClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitInClause) {
            listener.exitInClause(this);
        }
    };
    // @Override
    InClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitInClause) {
            return visitor.visitInClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InClauseContext = InClauseContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    TypeContext.prototype.typeLit = function () {
        return this.tryGetRuleContext(0, TypeLitContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_type; },
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
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.IDENTIFIER = function () { return this.tryGetToken(VParser.IDENTIFIER, 0); };
    TypeNameContext.prototype.qualifiedIdent = function () {
        return this.tryGetRuleContext(0, QualifiedIdentContext);
    };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_typeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeNameContext = TypeNameContext;
var TypeLitContext = /** @class */ (function (_super) {
    __extends(TypeLitContext, _super);
    function TypeLitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeLitContext.prototype.arrayType = function () {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    };
    TypeLitContext.prototype.functionType = function () {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    };
    TypeLitContext.prototype.interfaceType = function () {
        return this.tryGetRuleContext(0, InterfaceTypeContext);
    };
    TypeLitContext.prototype.mapType = function () {
        return this.tryGetRuleContext(0, MapTypeContext);
    };
    Object.defineProperty(TypeLitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_typeLit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeLitContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeLit) {
            listener.enterTypeLit(this);
        }
    };
    // @Override
    TypeLitContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeLit) {
            listener.exitTypeLit(this);
        }
    };
    // @Override
    TypeLitContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeLit) {
            return visitor.visitTypeLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeLitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeLitContext = TypeLitContext;
var ArrayTypeContext = /** @class */ (function (_super) {
    __extends(ArrayTypeContext, _super);
    function ArrayTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayTypeContext.prototype.elementType = function () {
        return this.getRuleContext(0, ElementTypeContext);
    };
    ArrayTypeContext.prototype.arrayLength = function () {
        return this.tryGetRuleContext(0, ArrayLengthContext);
    };
    Object.defineProperty(ArrayTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_arrayType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayType) {
            listener.enterArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayType) {
            listener.exitArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayTypeContext = ArrayTypeContext;
var ArrayLengthContext = /** @class */ (function (_super) {
    __extends(ArrayLengthContext, _super);
    function ArrayLengthContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayLengthContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ArrayLengthContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_arrayLength; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayLengthContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLength) {
            listener.enterArrayLength(this);
        }
    };
    // @Override
    ArrayLengthContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLength) {
            listener.exitArrayLength(this);
        }
    };
    // @Override
    ArrayLengthContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLength) {
            return visitor.visitArrayLength(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLengthContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayLengthContext = ArrayLengthContext;
var ElementTypeContext = /** @class */ (function (_super) {
    __extends(ElementTypeContext, _super);
    function ElementTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(ElementTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_elementType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterElementType) {
            listener.enterElementType(this);
        }
    };
    // @Override
    ElementTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitElementType) {
            listener.exitElementType(this);
        }
    };
    // @Override
    ElementTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitElementType) {
            return visitor.visitElementType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementTypeContext = ElementTypeContext;
var InterfaceTypeContext = /** @class */ (function (_super) {
    __extends(InterfaceTypeContext, _super);
    function InterfaceTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceTypeContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    InterfaceTypeContext.prototype.methodSpec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MethodSpecContext);
        }
        else {
            return this.getRuleContext(i, MethodSpecContext);
        }
    };
    InterfaceTypeContext.prototype.eos = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }
        else {
            return this.getRuleContext(i, EosContext);
        }
    };
    Object.defineProperty(InterfaceTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_interfaceType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceType) {
            listener.enterInterfaceType(this);
        }
    };
    // @Override
    InterfaceTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceType) {
            listener.exitInterfaceType(this);
        }
    };
    // @Override
    InterfaceTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceType) {
            return visitor.visitInterfaceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceTypeContext = InterfaceTypeContext;
var MapTypeContext = /** @class */ (function (_super) {
    __extends(MapTypeContext, _super);
    function MapTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    MapTypeContext.prototype.elementType = function () {
        return this.getRuleContext(0, ElementTypeContext);
    };
    Object.defineProperty(MapTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_mapType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterMapType) {
            listener.enterMapType(this);
        }
    };
    // @Override
    MapTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitMapType) {
            listener.exitMapType(this);
        }
    };
    // @Override
    MapTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitMapType) {
            return visitor.visitMapType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapTypeContext = MapTypeContext;
var MethodSpecContext = /** @class */ (function (_super) {
    __extends(MethodSpecContext, _super);
    function MethodSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodSpecContext.prototype.IDENTIFIER = function () { return this.tryGetToken(VParser.IDENTIFIER, 0); };
    MethodSpecContext.prototype.parameters = function () {
        return this.tryGetRuleContext(0, ParametersContext);
    };
    MethodSpecContext.prototype.result = function () {
        return this.tryGetRuleContext(0, ResultContext);
    };
    MethodSpecContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(MethodSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_methodSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodSpec) {
            listener.enterMethodSpec(this);
        }
    };
    // @Override
    MethodSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodSpec) {
            listener.exitMethodSpec(this);
        }
    };
    // @Override
    MethodSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodSpec) {
            return visitor.visitMethodSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodSpecContext = MethodSpecContext;
var FunctionTypeContext = /** @class */ (function (_super) {
    __extends(FunctionTypeContext, _super);
    function FunctionTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeContext.prototype.signature = function () {
        return this.getRuleContext(0, SignatureContext);
    };
    Object.defineProperty(FunctionTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_functionType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionType) {
            listener.enterFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionType) {
            listener.exitFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeContext = FunctionTypeContext;
var SignatureContext = /** @class */ (function (_super) {
    __extends(SignatureContext, _super);
    function SignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignatureContext.prototype.parameters = function () {
        return this.getRuleContext(0, ParametersContext);
    };
    SignatureContext.prototype.result = function () {
        return this.tryGetRuleContext(0, ResultContext);
    };
    Object.defineProperty(SignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_signature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterSignature) {
            listener.enterSignature(this);
        }
    };
    // @Override
    SignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitSignature) {
            listener.exitSignature(this);
        }
    };
    // @Override
    SignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitSignature) {
            return visitor.visitSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignatureContext = SignatureContext;
var ResultContext = /** @class */ (function (_super) {
    __extends(ResultContext, _super);
    function ResultContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResultContext.prototype.parameters = function () {
        return this.tryGetRuleContext(0, ParametersContext);
    };
    ResultContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(ResultContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_result; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResultContext.prototype.enterRule = function (listener) {
        if (listener.enterResult) {
            listener.enterResult(this);
        }
    };
    // @Override
    ResultContext.prototype.exitRule = function (listener) {
        if (listener.exitResult) {
            listener.exitResult(this);
        }
    };
    // @Override
    ResultContext.prototype.accept = function (visitor) {
        if (visitor.visitResult) {
            return visitor.visitResult(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResultContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResultContext = ResultContext;
var ParametersContext = /** @class */ (function (_super) {
    __extends(ParametersContext, _super);
    function ParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParametersContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(ParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_parameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterParameters) {
            listener.enterParameters(this);
        }
    };
    // @Override
    ParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitParameters) {
            listener.exitParameters(this);
        }
    };
    // @Override
    ParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitParameters) {
            return visitor.visitParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParametersContext = ParametersContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.parameterDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDeclContext);
        }
        else {
            return this.getRuleContext(i, ParameterDeclContext);
        }
    };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_parameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterList) {
            listener.enterParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterList) {
            listener.exitParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterListContext = ParameterListContext;
var ParameterDeclContext = /** @class */ (function (_super) {
    __extends(ParameterDeclContext, _super);
    function ParameterDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterDeclContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ParameterDeclContext.prototype.identifierList = function () {
        return this.tryGetRuleContext(0, IdentifierListContext);
    };
    Object.defineProperty(ParameterDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_parameterDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterDecl) {
            listener.enterParameterDecl(this);
        }
    };
    // @Override
    ParameterDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterDecl) {
            listener.exitParameterDecl(this);
        }
    };
    // @Override
    ParameterDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterDecl) {
            return visitor.visitParameterDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterDeclContext = ParameterDeclContext;
var OperandContext = /** @class */ (function (_super) {
    __extends(OperandContext, _super);
    function OperandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperandContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    OperandContext.prototype.operandName = function () {
        return this.tryGetRuleContext(0, OperandNameContext);
    };
    OperandContext.prototype.methodExpr = function () {
        return this.tryGetRuleContext(0, MethodExprContext);
    };
    OperandContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(OperandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_operand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperandContext.prototype.enterRule = function (listener) {
        if (listener.enterOperand) {
            listener.enterOperand(this);
        }
    };
    // @Override
    OperandContext.prototype.exitRule = function (listener) {
        if (listener.exitOperand) {
            listener.exitOperand(this);
        }
    };
    // @Override
    OperandContext.prototype.accept = function (visitor) {
        if (visitor.visitOperand) {
            return visitor.visitOperand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperandContext = OperandContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.basicLit = function () {
        return this.tryGetRuleContext(0, BasicLitContext);
    };
    LiteralContext.prototype.compositeLit = function () {
        return this.tryGetRuleContext(0, CompositeLitContext);
    };
    LiteralContext.prototype.functionLit = function () {
        return this.tryGetRuleContext(0, FunctionLitContext);
    };
    LiteralContext.prototype.arrayLit = function () {
        return this.tryGetRuleContext(0, ArrayLitContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_literal; },
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
var ArrayLitContext = /** @class */ (function (_super) {
    __extends(ArrayLitContext, _super);
    function ArrayLitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayLitContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ArrayLitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_arrayLit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayLitContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLit) {
            listener.enterArrayLit(this);
        }
    };
    // @Override
    ArrayLitContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLit) {
            listener.exitArrayLit(this);
        }
    };
    // @Override
    ArrayLitContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLit) {
            return visitor.visitArrayLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayLitContext = ArrayLitContext;
var BasicLitContext = /** @class */ (function (_super) {
    __extends(BasicLitContext, _super);
    function BasicLitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BasicLitContext.prototype.INT_LIT = function () { return this.tryGetToken(VParser.INT_LIT, 0); };
    BasicLitContext.prototype.FLOAT_LIT = function () { return this.tryGetToken(VParser.FLOAT_LIT, 0); };
    BasicLitContext.prototype.RUNE_LIT = function () { return this.tryGetToken(VParser.RUNE_LIT, 0); };
    BasicLitContext.prototype.STRING_LIT = function () { return this.tryGetToken(VParser.STRING_LIT, 0); };
    Object.defineProperty(BasicLitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_basicLit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BasicLitContext.prototype.enterRule = function (listener) {
        if (listener.enterBasicLit) {
            listener.enterBasicLit(this);
        }
    };
    // @Override
    BasicLitContext.prototype.exitRule = function (listener) {
        if (listener.exitBasicLit) {
            listener.exitBasicLit(this);
        }
    };
    // @Override
    BasicLitContext.prototype.accept = function (visitor) {
        if (visitor.visitBasicLit) {
            return visitor.visitBasicLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BasicLitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BasicLitContext = BasicLitContext;
var OperandNameContext = /** @class */ (function (_super) {
    __extends(OperandNameContext, _super);
    function OperandNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperandNameContext.prototype.IDENTIFIER = function () { return this.tryGetToken(VParser.IDENTIFIER, 0); };
    OperandNameContext.prototype.qualifiedIdent = function () {
        return this.tryGetRuleContext(0, QualifiedIdentContext);
    };
    Object.defineProperty(OperandNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_operandName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperandNameContext.prototype.enterRule = function (listener) {
        if (listener.enterOperandName) {
            listener.enterOperandName(this);
        }
    };
    // @Override
    OperandNameContext.prototype.exitRule = function (listener) {
        if (listener.exitOperandName) {
            listener.exitOperandName(this);
        }
    };
    // @Override
    OperandNameContext.prototype.accept = function (visitor) {
        if (visitor.visitOperandName) {
            return visitor.visitOperandName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperandNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperandNameContext = OperandNameContext;
var QualifiedIdentContext = /** @class */ (function (_super) {
    __extends(QualifiedIdentContext, _super);
    function QualifiedIdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedIdentContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(VParser.IDENTIFIER);
        }
        else {
            return this.getToken(VParser.IDENTIFIER, i);
        }
    };
    Object.defineProperty(QualifiedIdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_qualifiedIdent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedIdentContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedIdent) {
            listener.enterQualifiedIdent(this);
        }
    };
    // @Override
    QualifiedIdentContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedIdent) {
            listener.exitQualifiedIdent(this);
        }
    };
    // @Override
    QualifiedIdentContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedIdent) {
            return visitor.visitQualifiedIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedIdentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedIdentContext = QualifiedIdentContext;
var CompositeLitContext = /** @class */ (function (_super) {
    __extends(CompositeLitContext, _super);
    function CompositeLitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompositeLitContext.prototype.literalType = function () {
        return this.getRuleContext(0, LiteralTypeContext);
    };
    CompositeLitContext.prototype.literalValue = function () {
        return this.getRuleContext(0, LiteralValueContext);
    };
    Object.defineProperty(CompositeLitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_compositeLit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompositeLitContext.prototype.enterRule = function (listener) {
        if (listener.enterCompositeLit) {
            listener.enterCompositeLit(this);
        }
    };
    // @Override
    CompositeLitContext.prototype.exitRule = function (listener) {
        if (listener.exitCompositeLit) {
            listener.exitCompositeLit(this);
        }
    };
    // @Override
    CompositeLitContext.prototype.accept = function (visitor) {
        if (visitor.visitCompositeLit) {
            return visitor.visitCompositeLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompositeLitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompositeLitContext = CompositeLitContext;
var LiteralTypeContext = /** @class */ (function (_super) {
    __extends(LiteralTypeContext, _super);
    function LiteralTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralTypeContext.prototype.arrayType = function () {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    };
    LiteralTypeContext.prototype.mapType = function () {
        return this.tryGetRuleContext(0, MapTypeContext);
    };
    LiteralTypeContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(LiteralTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_literalType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralType) {
            listener.enterLiteralType(this);
        }
    };
    // @Override
    LiteralTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralType) {
            listener.exitLiteralType(this);
        }
    };
    // @Override
    LiteralTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralType) {
            return visitor.visitLiteralType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralTypeContext = LiteralTypeContext;
var LiteralValueContext = /** @class */ (function (_super) {
    __extends(LiteralValueContext, _super);
    function LiteralValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralValueContext.prototype.elementList = function () {
        return this.tryGetRuleContext(0, ElementListContext);
    };
    Object.defineProperty(LiteralValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_literalValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralValueContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralValue) {
            listener.enterLiteralValue(this);
        }
    };
    // @Override
    LiteralValueContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralValue) {
            listener.exitLiteralValue(this);
        }
    };
    // @Override
    LiteralValueContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralValue) {
            return visitor.visitLiteralValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralValueContext = LiteralValueContext;
var ElementListContext = /** @class */ (function (_super) {
    __extends(ElementListContext, _super);
    function ElementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementListContext.prototype.keyedElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyedElementContext);
        }
        else {
            return this.getRuleContext(i, KeyedElementContext);
        }
    };
    ElementListContext.prototype.eos = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }
        else {
            return this.getRuleContext(i, EosContext);
        }
    };
    Object.defineProperty(ElementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_elementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementListContext.prototype.enterRule = function (listener) {
        if (listener.enterElementList) {
            listener.enterElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.exitRule = function (listener) {
        if (listener.exitElementList) {
            listener.exitElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.accept = function (visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementListContext = ElementListContext;
var KeyedElementContext = /** @class */ (function (_super) {
    __extends(KeyedElementContext, _super);
    function KeyedElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyedElementContext.prototype.element = function () {
        return this.getRuleContext(0, ElementContext);
    };
    KeyedElementContext.prototype.key = function () {
        return this.tryGetRuleContext(0, KeyContext);
    };
    Object.defineProperty(KeyedElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_keyedElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyedElementContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyedElement) {
            listener.enterKeyedElement(this);
        }
    };
    // @Override
    KeyedElementContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyedElement) {
            listener.exitKeyedElement(this);
        }
    };
    // @Override
    KeyedElementContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyedElement) {
            return visitor.visitKeyedElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyedElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyedElementContext = KeyedElementContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyContext.prototype.IDENTIFIER = function () { return this.tryGetToken(VParser.IDENTIFIER, 0); };
    KeyContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    KeyContext.prototype.literalValue = function () {
        return this.tryGetRuleContext(0, LiteralValueContext);
    };
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_key; },
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
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ElementContext.prototype.literalValue = function () {
        return this.tryGetRuleContext(0, LiteralValueContext);
    };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_element; },
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
var StructDeclContext = /** @class */ (function (_super) {
    __extends(StructDeclContext, _super);
    function StructDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    StructDeclContext.prototype.fieldDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldDeclContext);
        }
        else {
            return this.getRuleContext(i, FieldDeclContext);
        }
    };
    StructDeclContext.prototype.eos = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }
        else {
            return this.getRuleContext(i, EosContext);
        }
    };
    Object.defineProperty(StructDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_structDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterStructDecl) {
            listener.enterStructDecl(this);
        }
    };
    // @Override
    StructDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitStructDecl) {
            listener.exitStructDecl(this);
        }
    };
    // @Override
    StructDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitStructDecl) {
            return visitor.visitStructDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclContext = StructDeclContext;
var FieldDeclContext = /** @class */ (function (_super) {
    __extends(FieldDeclContext, _super);
    function FieldDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldDeclContext.prototype.identifierList = function () {
        return this.tryGetRuleContext(0, IdentifierListContext);
    };
    FieldDeclContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    FieldDeclContext.prototype.anonymousField = function () {
        return this.tryGetRuleContext(0, AnonymousFieldContext);
    };
    FieldDeclContext.prototype.STRING_LIT = function () { return this.tryGetToken(VParser.STRING_LIT, 0); };
    Object.defineProperty(FieldDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_fieldDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldDecl) {
            listener.enterFieldDecl(this);
        }
    };
    // @Override
    FieldDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldDecl) {
            listener.exitFieldDecl(this);
        }
    };
    // @Override
    FieldDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldDecl) {
            return visitor.visitFieldDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldDeclContext = FieldDeclContext;
var AnonymousFieldContext = /** @class */ (function (_super) {
    __extends(AnonymousFieldContext, _super);
    function AnonymousFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnonymousFieldContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(AnonymousFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_anonymousField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnonymousFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterAnonymousField) {
            listener.enterAnonymousField(this);
        }
    };
    // @Override
    AnonymousFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitAnonymousField) {
            listener.exitAnonymousField(this);
        }
    };
    // @Override
    AnonymousFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitAnonymousField) {
            return visitor.visitAnonymousField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnonymousFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnonymousFieldContext = AnonymousFieldContext;
var FunctionLitContext = /** @class */ (function (_super) {
    __extends(FunctionLitContext, _super);
    function FunctionLitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionLitContext.prototype.function = function () {
        return this.getRuleContext(0, FunctionContext);
    };
    Object.defineProperty(FunctionLitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_functionLit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionLitContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionLit) {
            listener.enterFunctionLit(this);
        }
    };
    // @Override
    FunctionLitContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionLit) {
            listener.exitFunctionLit(this);
        }
    };
    // @Override
    FunctionLitContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionLit) {
            return visitor.visitFunctionLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionLitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionLitContext = FunctionLitContext;
var PrimaryExprContext = /** @class */ (function (_super) {
    __extends(PrimaryExprContext, _super);
    function PrimaryExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryExprContext.prototype.operand = function () {
        return this.tryGetRuleContext(0, OperandContext);
    };
    PrimaryExprContext.prototype.conversion = function () {
        return this.tryGetRuleContext(0, ConversionContext);
    };
    PrimaryExprContext.prototype.primaryExpr = function () {
        return this.tryGetRuleContext(0, PrimaryExprContext);
    };
    PrimaryExprContext.prototype.selector = function () {
        return this.tryGetRuleContext(0, SelectorContext);
    };
    PrimaryExprContext.prototype.index = function () {
        return this.tryGetRuleContext(0, IndexContext);
    };
    PrimaryExprContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(PrimaryExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_primaryExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryExprContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryExpr) {
            listener.enterPrimaryExpr(this);
        }
    };
    // @Override
    PrimaryExprContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryExpr) {
            listener.exitPrimaryExpr(this);
        }
    };
    // @Override
    PrimaryExprContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryExprContext = PrimaryExprContext;
var SelectorContext = /** @class */ (function (_super) {
    __extends(SelectorContext, _super);
    function SelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectorContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    Object.defineProperty(SelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_selector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterSelector) {
            listener.enterSelector(this);
        }
    };
    // @Override
    SelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitSelector) {
            listener.exitSelector(this);
        }
    };
    // @Override
    SelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitSelector) {
            return visitor.visitSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectorContext = SelectorContext;
var IndexContext = /** @class */ (function (_super) {
    __extends(IndexContext, _super);
    function IndexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(IndexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_index; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexContext.prototype.enterRule = function (listener) {
        if (listener.enterIndex) {
            listener.enterIndex(this);
        }
    };
    // @Override
    IndexContext.prototype.exitRule = function (listener) {
        if (listener.exitIndex) {
            listener.exitIndex(this);
        }
    };
    // @Override
    IndexContext.prototype.accept = function (visitor) {
        if (visitor.visitIndex) {
            return visitor.visitIndex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexContext = IndexContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    ArgumentsContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsContext = ArgumentsContext;
var MethodExprContext = /** @class */ (function (_super) {
    __extends(MethodExprContext, _super);
    function MethodExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodExprContext.prototype.receiverType = function () {
        return this.getRuleContext(0, ReceiverTypeContext);
    };
    MethodExprContext.prototype.IDENTIFIER = function () { return this.getToken(VParser.IDENTIFIER, 0); };
    Object.defineProperty(MethodExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_methodExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodExprContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodExpr) {
            listener.enterMethodExpr(this);
        }
    };
    // @Override
    MethodExprContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodExpr) {
            listener.exitMethodExpr(this);
        }
    };
    // @Override
    MethodExprContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodExpr) {
            return visitor.visitMethodExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodExprContext = MethodExprContext;
var ReceiverTypeContext = /** @class */ (function (_super) {
    __extends(ReceiverTypeContext, _super);
    function ReceiverTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReceiverTypeContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    ReceiverTypeContext.prototype.receiverType = function () {
        return this.tryGetRuleContext(0, ReceiverTypeContext);
    };
    Object.defineProperty(ReceiverTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_receiverType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReceiverTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterReceiverType) {
            listener.enterReceiverType(this);
        }
    };
    // @Override
    ReceiverTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitReceiverType) {
            listener.exitReceiverType(this);
        }
    };
    // @Override
    ReceiverTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitReceiverType) {
            return visitor.visitReceiverType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReceiverTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReceiverTypeContext = ReceiverTypeContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.unaryExpr = function () {
        return this.tryGetRuleContext(0, UnaryExprContext);
    };
    ExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_expression; },
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
var UnaryExprContext = /** @class */ (function (_super) {
    __extends(UnaryExprContext, _super);
    function UnaryExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryExprContext.prototype.primaryExpr = function () {
        return this.tryGetRuleContext(0, PrimaryExprContext);
    };
    UnaryExprContext.prototype.unaryExpr = function () {
        return this.tryGetRuleContext(0, UnaryExprContext);
    };
    Object.defineProperty(UnaryExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_unaryExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryExprContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryExpr) {
            listener.enterUnaryExpr(this);
        }
    };
    // @Override
    UnaryExprContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryExpr) {
            listener.exitUnaryExpr(this);
        }
    };
    // @Override
    UnaryExprContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryExpr) {
            return visitor.visitUnaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryExprContext = UnaryExprContext;
var ConversionContext = /** @class */ (function (_super) {
    __extends(ConversionContext, _super);
    function ConversionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConversionContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ConversionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ConversionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_conversion; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConversionContext.prototype.enterRule = function (listener) {
        if (listener.enterConversion) {
            listener.enterConversion(this);
        }
    };
    // @Override
    ConversionContext.prototype.exitRule = function (listener) {
        if (listener.exitConversion) {
            listener.exitConversion(this);
        }
    };
    // @Override
    ConversionContext.prototype.accept = function (visitor) {
        if (visitor.visitConversion) {
            return visitor.visitConversion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConversionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConversionContext = ConversionContext;
var EosContext = /** @class */ (function (_super) {
    __extends(EosContext, _super);
    function EosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EosContext.prototype.EOF = function () { return this.tryGetToken(VParser.EOF, 0); };
    Object.defineProperty(EosContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return VParser.RULE_eos; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EosContext.prototype.enterRule = function (listener) {
        if (listener.enterEos) {
            listener.enterEos(this);
        }
    };
    // @Override
    EosContext.prototype.exitRule = function (listener) {
        if (listener.exitEos) {
            listener.exitEos(this);
        }
    };
    // @Override
    EosContext.prototype.accept = function (visitor) {
        if (visitor.visitEos) {
            return visitor.visitEos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EosContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EosContext = EosContext;
