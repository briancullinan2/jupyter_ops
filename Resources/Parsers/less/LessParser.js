"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/less/LessParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var LessParser = /** @class */ (function (_super) {
    __extends(LessParser, _super);
    function LessParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(LessParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(LessParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return LessParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "LessParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessParser.prototype, "ruleNames", {
        // @Override
        get: function () { return LessParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessParser.prototype, "serializedATN", {
        // @Override
        get: function () { return LessParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    LessParser.prototype.stylesheet = function () {
        var _localctx = new StylesheetContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, LessParser.RULE_stylesheet);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 77;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.InterpolationStart) | (1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.COLON) | (1 << LessParser.AT) | (1 << LessParser.PARENTREF) | (1 << LessParser.HASH) | (1 << LessParser.COLONCOLON) | (1 << LessParser.PLUS) | (1 << LessParser.TIMES))) !== 0) || _la === LessParser.IMPORT || _la === LessParser.Identifier) {
                    {
                        {
                            this.state = 74;
                            this.statement();
                        }
                    }
                    this.state = 79;
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
    LessParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, LessParser.RULE_statement);
        try {
            this.state = 86;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 80;
                        this.importDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 81;
                        this.ruleset();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 82;
                        this.variableDeclaration();
                        this.state = 83;
                        this.match(LessParser.SEMI);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 85;
                        this.mixinDefinition();
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
    LessParser.prototype.variableName = function () {
        var _localctx = new VariableNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, LessParser.RULE_variableName);
        try {
            this.state = 92;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 88;
                        this.match(LessParser.AT);
                        this.state = 89;
                        this.variableName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 90;
                        this.match(LessParser.AT);
                        this.state = 91;
                        this.match(LessParser.Identifier);
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
    LessParser.prototype.commandStatement = function () {
        var _localctx = new CommandStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, LessParser.RULE_commandStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 95;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 94;
                                this.expression();
                            }
                        }
                        this.state = 97;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0));
                }
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0)) {
                    {
                        this.state = 99;
                        this.mathStatement();
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
    LessParser.prototype.mathCharacter = function () {
        var _localctx = new MathCharacterContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, LessParser.RULE_mathCharacter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0))) {
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
    LessParser.prototype.mathStatement = function () {
        var _localctx = new MathStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, LessParser.RULE_mathStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.mathCharacter();
                this.state = 105;
                this.commandStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, LessParser.RULE_expression);
        var _la;
        try {
            this.state = 126;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 107;
                        this.measurement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 108;
                        this.identifier();
                        this.state = 109;
                        this.match(LessParser.IMPORTANT);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 111;
                        this.identifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 112;
                        this.identifier();
                        this.state = 113;
                        this.match(LessParser.LPAREN);
                        this.state = 115;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
                            {
                                this.state = 114;
                                this.values();
                            }
                        }
                        this.state = 117;
                        this.match(LessParser.RPAREN);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 119;
                        this.match(LessParser.Color);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 120;
                        this.match(LessParser.StringLiteral);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 121;
                        this.url();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 122;
                        this.variableName();
                        this.state = 123;
                        this.match(LessParser.IMPORTANT);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 125;
                        this.variableName();
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
    LessParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, LessParser.RULE_function);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this.match(LessParser.FUNCTION_NAME);
                this.state = 129;
                this.match(LessParser.LPAREN);
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
                    {
                        this.state = 130;
                        this.values();
                    }
                }
                this.state = 133;
                this.match(LessParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.conditions = function () {
        var _localctx = new ConditionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, LessParser.RULE_conditions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.condition();
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LessParser.COMMA || _la === LessParser.AND) {
                    {
                        {
                            this.state = 136;
                            _la = this._input.LA(1);
                            if (!(_la === LessParser.COMMA || _la === LessParser.AND)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 137;
                            this.condition();
                        }
                    }
                    this.state = 142;
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
    LessParser.prototype.condition = function () {
        var _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, LessParser.RULE_condition);
        try {
            this.state = 152;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LessParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 143;
                        this.match(LessParser.LPAREN);
                        this.state = 144;
                        this.conditionStatement();
                        this.state = 145;
                        this.match(LessParser.RPAREN);
                    }
                    break;
                case LessParser.NOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 147;
                        this.match(LessParser.NOT);
                        this.state = 148;
                        this.match(LessParser.LPAREN);
                        this.state = 149;
                        this.conditionStatement();
                        this.state = 150;
                        this.match(LessParser.RPAREN);
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
    LessParser.prototype.conditionStatement = function () {
        var _localctx = new ConditionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, LessParser.RULE_conditionStatement);
        var _la;
        try {
            this.state = 159;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 154;
                        this.commandStatement();
                        this.state = 155;
                        _la = this._input.LA(1);
                        if (!(((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (LessParser.GT - 12)) | (1 << (LessParser.LT - 12)) | (1 << (LessParser.GTEQ - 12)) | (1 << (LessParser.LTEQ - 12)) | (1 << (LessParser.EQ - 12)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 156;
                        this.commandStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 158;
                        this.commandStatement();
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
    LessParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, LessParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.variableName();
                this.state = 162;
                this.match(LessParser.COLON);
                this.state = 163;
                this.values();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.importDeclaration = function () {
        var _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, LessParser.RULE_importDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.match(LessParser.IMPORT);
                this.state = 177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.LPAREN) {
                    {
                        this.state = 166;
                        this.match(LessParser.LPAREN);
                        {
                            this.state = 167;
                            this.importOption();
                            this.state = 172;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === LessParser.COMMA) {
                                {
                                    {
                                        this.state = 168;
                                        this.match(LessParser.COMMA);
                                        this.state = 169;
                                        this.importOption();
                                    }
                                }
                                this.state = 174;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        this.state = 175;
                        this.match(LessParser.RPAREN);
                    }
                }
                this.state = 179;
                this.referenceUrl();
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.Identifier) {
                    {
                        this.state = 180;
                        this.mediaTypes();
                    }
                }
                this.state = 183;
                this.match(LessParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.importOption = function () {
        var _localctx = new ImportOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, LessParser.RULE_importOption);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                _la = this._input.LA(1);
                if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LessParser.REFERENCE - 44)) | (1 << (LessParser.INLINE - 44)) | (1 << (LessParser.LESS - 44)) | (1 << (LessParser.CSS - 44)) | (1 << (LessParser.ONCE - 44)) | (1 << (LessParser.MULTIPLE - 44)))) !== 0))) {
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
    LessParser.prototype.referenceUrl = function () {
        var _localctx = new ReferenceUrlContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, LessParser.RULE_referenceUrl);
        try {
            this.state = 191;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LessParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 187;
                        this.match(LessParser.StringLiteral);
                    }
                    break;
                case LessParser.UrlStart:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 188;
                        this.match(LessParser.UrlStart);
                        this.state = 189;
                        this.match(LessParser.Url);
                        this.state = 190;
                        this.match(LessParser.UrlEnd);
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
    LessParser.prototype.mediaTypes = function () {
        var _localctx = new MediaTypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, LessParser.RULE_mediaTypes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 193;
                    this.match(LessParser.Identifier);
                    this.state = 198;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === LessParser.COMMA) {
                        {
                            {
                                this.state = 194;
                                this.match(LessParser.COMMA);
                                this.state = 195;
                                this.match(LessParser.Identifier);
                            }
                        }
                        this.state = 200;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
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
    LessParser.prototype.ruleset = function () {
        var _localctx = new RulesetContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, LessParser.RULE_ruleset);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.selectors();
                this.state = 202;
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
    LessParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, LessParser.RULE_block);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                this.match(LessParser.BlockStart);
                this.state = 212;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 210;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 205;
                                        this.property();
                                        this.state = 206;
                                        this.match(LessParser.SEMI);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 208;
                                        this.statement();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 209;
                                        this.mixinReference();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 214;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                }
                this.state = 216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.InterpolationStart || _la === LessParser.Identifier) {
                    {
                        this.state = 215;
                        this.property();
                    }
                }
                this.state = 218;
                this.match(LessParser.BlockEnd);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.mixinDefinition = function () {
        var _localctx = new MixinDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, LessParser.RULE_mixinDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.selectors();
                this.state = 221;
                this.match(LessParser.LPAREN);
                this.state = 230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.AT) {
                    {
                        this.state = 222;
                        this.mixinDefinitionParam();
                        this.state = 227;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === LessParser.SEMI) {
                            {
                                {
                                    this.state = 223;
                                    this.match(LessParser.SEMI);
                                    this.state = 224;
                                    this.mixinDefinitionParam();
                                }
                            }
                            this.state = 229;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 233;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.Ellipsis) {
                    {
                        this.state = 232;
                        this.match(LessParser.Ellipsis);
                    }
                }
                this.state = 235;
                this.match(LessParser.RPAREN);
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.WHEN) {
                    {
                        this.state = 236;
                        this.mixinGuard();
                    }
                }
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
    LessParser.prototype.mixinGuard = function () {
        var _localctx = new MixinGuardContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, LessParser.RULE_mixinGuard);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(LessParser.WHEN);
                this.state = 242;
                this.conditions();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.mixinDefinitionParam = function () {
        var _localctx = new MixinDefinitionParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, LessParser.RULE_mixinDefinitionParam);
        try {
            this.state = 246;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 244;
                        this.variableName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 245;
                        this.variableDeclaration();
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
    LessParser.prototype.mixinReference = function () {
        var _localctx = new MixinReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, LessParser.RULE_mixinReference);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this.selector();
                this.state = 249;
                this.match(LessParser.LPAREN);
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
                    {
                        this.state = 250;
                        this.values();
                    }
                }
                this.state = 253;
                this.match(LessParser.RPAREN);
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.IMPORTANT) {
                    {
                        this.state = 254;
                        this.match(LessParser.IMPORTANT);
                    }
                }
                this.state = 257;
                this.match(LessParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.selectors = function () {
        var _localctx = new SelectorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, LessParser.RULE_selectors);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.selector();
                this.state = 264;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LessParser.COMMA) {
                    {
                        {
                            this.state = 260;
                            this.match(LessParser.COMMA);
                            this.state = 261;
                            this.selector();
                        }
                    }
                    this.state = 266;
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
    LessParser.prototype.selector = function () {
        var _localctx = new SelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, LessParser.RULE_selector);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 267;
                                    this.element();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 270;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LessParser.LBRACK) {
                    {
                        {
                            this.state = 272;
                            this.attrib();
                        }
                    }
                    this.state = 277;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.COLON || _la === LessParser.COLONCOLON) {
                    {
                        this.state = 278;
                        this.pseudo();
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
    LessParser.prototype.attrib = function () {
        var _localctx = new AttribContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, LessParser.RULE_attrib);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this.match(LessParser.LBRACK);
                this.state = 282;
                this.match(LessParser.Identifier);
                this.state = 286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0)) {
                    {
                        this.state = 283;
                        this.attribRelate();
                        this.state = 284;
                        _la = this._input.LA(1);
                        if (!(_la === LessParser.Identifier || _la === LessParser.StringLiteral)) {
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
                this.state = 288;
                this.match(LessParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.negation = function () {
        var _localctx = new NegationContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, LessParser.RULE_negation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.match(LessParser.COLON);
                this.state = 291;
                this.match(LessParser.NOT);
                this.state = 292;
                this.match(LessParser.LPAREN);
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.LBRACK) {
                    {
                        this.state = 293;
                        this.match(LessParser.LBRACK);
                    }
                }
                this.state = 296;
                this.selectors();
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.RBRACK) {
                    {
                        this.state = 297;
                        this.match(LessParser.RBRACK);
                    }
                }
                this.state = 300;
                this.match(LessParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.pseudo = function () {
        var _localctx = new PseudoContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, LessParser.RULE_pseudo);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 302;
                _la = this._input.LA(1);
                if (!(_la === LessParser.COLON || _la === LessParser.COLONCOLON)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 303;
                this.match(LessParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, LessParser.RULE_element);
        try {
            this.state = 315;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 305;
                        this.selectorPrefix();
                        this.state = 306;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 308;
                        this.identifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 309;
                        this.match(LessParser.HASH);
                        this.state = 310;
                        this.identifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 311;
                        this.pseudo();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 312;
                        this.negation();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 313;
                        this.match(LessParser.PARENTREF);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 314;
                        this.match(LessParser.TIMES);
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
    LessParser.prototype.selectorPrefix = function () {
        var _localctx = new SelectorPrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, LessParser.RULE_selectorPrefix);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 317;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.PLUS))) !== 0))) {
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
    LessParser.prototype.attribRelate = function () {
        var _localctx = new AttribRelateContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, LessParser.RULE_attribRelate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 319;
                _la = this._input.LA(1);
                if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0))) {
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
    LessParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, LessParser.RULE_identifier);
        var _la;
        try {
            this.state = 337;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LessParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 321;
                        this.match(LessParser.Identifier);
                        this.state = 325;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === LessParser.InterpolationStartAfter || _la === LessParser.IdentifierAfter) {
                            {
                                {
                                    this.state = 322;
                                    this.identifierPart();
                                }
                            }
                            this.state = 327;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case LessParser.InterpolationStart:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 328;
                        this.match(LessParser.InterpolationStart);
                        this.state = 329;
                        this.identifierVariableName();
                        this.state = 330;
                        this.match(LessParser.BlockEnd);
                        this.state = 334;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === LessParser.InterpolationStartAfter || _la === LessParser.IdentifierAfter) {
                            {
                                {
                                    this.state = 331;
                                    this.identifierPart();
                                }
                            }
                            this.state = 336;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
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
    LessParser.prototype.identifierPart = function () {
        var _localctx = new IdentifierPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, LessParser.RULE_identifierPart);
        try {
            this.state = 344;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LessParser.InterpolationStartAfter:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 339;
                        this.match(LessParser.InterpolationStartAfter);
                        this.state = 340;
                        this.identifierVariableName();
                        this.state = 341;
                        this.match(LessParser.BlockEnd);
                    }
                    break;
                case LessParser.IdentifierAfter:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 343;
                        this.match(LessParser.IdentifierAfter);
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
    LessParser.prototype.identifierVariableName = function () {
        var _localctx = new IdentifierVariableNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, LessParser.RULE_identifierVariableName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                _la = this._input.LA(1);
                if (!(_la === LessParser.Identifier || _la === LessParser.IdentifierAfter)) {
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
    LessParser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, LessParser.RULE_property);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this.identifier();
                this.state = 349;
                this.match(LessParser.COLON);
                this.state = 350;
                this.values();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.values = function () {
        var _localctx = new ValuesContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, LessParser.RULE_values);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this.commandStatement();
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LessParser.COMMA) {
                    {
                        {
                            this.state = 353;
                            this.match(LessParser.COMMA);
                            this.state = 354;
                            this.commandStatement();
                        }
                    }
                    this.state = 359;
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
    LessParser.prototype.url = function () {
        var _localctx = new UrlContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, LessParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this.match(LessParser.UrlStart);
                this.state = 361;
                this.match(LessParser.Url);
                this.state = 362;
                this.match(LessParser.UrlEnd);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LessParser.prototype.measurement = function () {
        var _localctx = new MeasurementContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, LessParser.RULE_measurement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                this.match(LessParser.Number);
                this.state = 366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LessParser.Unit) {
                    {
                        this.state = 365;
                        this.match(LessParser.Unit);
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
    Object.defineProperty(LessParser, "_ATN", {
        get: function () {
            if (!LessParser.__ATN) {
                LessParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(LessParser._serializedATN));
            }
            return LessParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    LessParser.NULL = 1;
    LessParser.IN = 2;
    LessParser.Unit = 3;
    LessParser.Ellipsis = 4;
    LessParser.InterpolationStart = 5;
    LessParser.LPAREN = 6;
    LessParser.RPAREN = 7;
    LessParser.BlockStart = 8;
    LessParser.BlockEnd = 9;
    LessParser.LBRACK = 10;
    LessParser.RBRACK = 11;
    LessParser.GT = 12;
    LessParser.TIL = 13;
    LessParser.LT = 14;
    LessParser.COLON = 15;
    LessParser.SEMI = 16;
    LessParser.COMMA = 17;
    LessParser.DOT = 18;
    LessParser.DOLLAR = 19;
    LessParser.AT = 20;
    LessParser.PARENTREF = 21;
    LessParser.HASH = 22;
    LessParser.COLONCOLON = 23;
    LessParser.PLUS = 24;
    LessParser.TIMES = 25;
    LessParser.DIV = 26;
    LessParser.MINUS = 27;
    LessParser.PERC = 28;
    LessParser.EQEQ = 29;
    LessParser.GTEQ = 30;
    LessParser.LTEQ = 31;
    LessParser.NOTEQ = 32;
    LessParser.EQ = 33;
    LessParser.PIPE_EQ = 34;
    LessParser.TILD_EQ = 35;
    LessParser.URL = 36;
    LessParser.UrlStart = 37;
    LessParser.IMPORT = 38;
    LessParser.MEDIA = 39;
    LessParser.EXTEND = 40;
    LessParser.IMPORTANT = 41;
    LessParser.ARGUMENTS = 42;
    LessParser.REST = 43;
    LessParser.REFERENCE = 44;
    LessParser.INLINE = 45;
    LessParser.LESS = 46;
    LessParser.CSS = 47;
    LessParser.ONCE = 48;
    LessParser.MULTIPLE = 49;
    LessParser.WHEN = 50;
    LessParser.NOT = 51;
    LessParser.AND = 52;
    LessParser.Identifier = 53;
    LessParser.StringLiteral = 54;
    LessParser.Number = 55;
    LessParser.Color = 56;
    LessParser.WS = 57;
    LessParser.SL_COMMENT = 58;
    LessParser.COMMENT = 59;
    LessParser.FUNCTION_NAME = 60;
    LessParser.COLOR = 61;
    LessParser.CONVERT = 62;
    LessParser.DATA_URI = 63;
    LessParser.DEFAULT = 64;
    LessParser.UNIT = 65;
    LessParser.GET_UNIT = 66;
    LessParser.SVG_GRADIENT = 67;
    LessParser.ESCAPE = 68;
    LessParser.E = 69;
    LessParser.FORMAT = 70;
    LessParser.REPLACE = 71;
    LessParser.LENGTH = 72;
    LessParser.EXTRACT = 73;
    LessParser.CEIL = 74;
    LessParser.FLOOR = 75;
    LessParser.PERCENTAGE = 76;
    LessParser.ROUND = 77;
    LessParser.SQRT = 78;
    LessParser.ABS = 79;
    LessParser.SIN = 80;
    LessParser.ASIN = 81;
    LessParser.COS = 82;
    LessParser.ACOS = 83;
    LessParser.TAN = 84;
    LessParser.ATAN = 85;
    LessParser.PI = 86;
    LessParser.POW = 87;
    LessParser.MOD = 88;
    LessParser.MIN = 89;
    LessParser.MAX = 90;
    LessParser.ISNUMBER = 91;
    LessParser.ISSTRING = 92;
    LessParser.ISCOLOR = 93;
    LessParser.ISKEYWORD = 94;
    LessParser.ISURL = 95;
    LessParser.ISPIXEL = 96;
    LessParser.ISEM = 97;
    LessParser.ISPERCENTAGE = 98;
    LessParser.ISUNIT = 99;
    LessParser.RGB = 100;
    LessParser.RGBA = 101;
    LessParser.ARGB = 102;
    LessParser.HSL = 103;
    LessParser.HSLA = 104;
    LessParser.HSV = 105;
    LessParser.HSVA = 106;
    LessParser.HUE = 107;
    LessParser.SATURATION = 108;
    LessParser.LIGHTNESS = 109;
    LessParser.HSVHUE = 110;
    LessParser.HSVSATURATION = 111;
    LessParser.HSVVALUE = 112;
    LessParser.RED = 113;
    LessParser.GREEN = 114;
    LessParser.BLUE = 115;
    LessParser.ALPHA = 116;
    LessParser.LUMA = 117;
    LessParser.LUMINANCE = 118;
    LessParser.SATURATE = 119;
    LessParser.DESATURATE = 120;
    LessParser.LIGHTEN = 121;
    LessParser.DARKEN = 122;
    LessParser.FADEIN = 123;
    LessParser.FADEOUT = 124;
    LessParser.FADE = 125;
    LessParser.SPIN = 126;
    LessParser.MIX = 127;
    LessParser.GREYSCALE = 128;
    LessParser.CONTRAST = 129;
    LessParser.MULTIPLY = 130;
    LessParser.SCREEN = 131;
    LessParser.OVERLAY = 132;
    LessParser.SOFTLIGHT = 133;
    LessParser.HARDLIGHT = 134;
    LessParser.DIFFERENCE = 135;
    LessParser.EXCLUSION = 136;
    LessParser.AVERAGE = 137;
    LessParser.NEGATION = 138;
    LessParser.UrlEnd = 139;
    LessParser.Url = 140;
    LessParser.SPACE = 141;
    LessParser.InterpolationStartAfter = 142;
    LessParser.IdentifierAfter = 143;
    LessParser.RULE_stylesheet = 0;
    LessParser.RULE_statement = 1;
    LessParser.RULE_variableName = 2;
    LessParser.RULE_commandStatement = 3;
    LessParser.RULE_mathCharacter = 4;
    LessParser.RULE_mathStatement = 5;
    LessParser.RULE_expression = 6;
    LessParser.RULE_function = 7;
    LessParser.RULE_conditions = 8;
    LessParser.RULE_condition = 9;
    LessParser.RULE_conditionStatement = 10;
    LessParser.RULE_variableDeclaration = 11;
    LessParser.RULE_importDeclaration = 12;
    LessParser.RULE_importOption = 13;
    LessParser.RULE_referenceUrl = 14;
    LessParser.RULE_mediaTypes = 15;
    LessParser.RULE_ruleset = 16;
    LessParser.RULE_block = 17;
    LessParser.RULE_mixinDefinition = 18;
    LessParser.RULE_mixinGuard = 19;
    LessParser.RULE_mixinDefinitionParam = 20;
    LessParser.RULE_mixinReference = 21;
    LessParser.RULE_selectors = 22;
    LessParser.RULE_selector = 23;
    LessParser.RULE_attrib = 24;
    LessParser.RULE_negation = 25;
    LessParser.RULE_pseudo = 26;
    LessParser.RULE_element = 27;
    LessParser.RULE_selectorPrefix = 28;
    LessParser.RULE_attribRelate = 29;
    LessParser.RULE_identifier = 30;
    LessParser.RULE_identifierPart = 31;
    LessParser.RULE_identifierVariableName = 32;
    LessParser.RULE_property = 33;
    LessParser.RULE_values = 34;
    LessParser.RULE_url = 35;
    LessParser.RULE_measurement = 36;
    // tslint:disable:no-trailing-whitespace
    LessParser.ruleNames = [
        "stylesheet", "statement", "variableName", "commandStatement", "mathCharacter",
        "mathStatement", "expression", "function", "conditions", "condition",
        "conditionStatement", "variableDeclaration", "importDeclaration", "importOption",
        "referenceUrl", "mediaTypes", "ruleset", "block", "mixinDefinition", "mixinGuard",
        "mixinDefinitionParam", "mixinReference", "selectors", "selector", "attrib",
        "negation", "pseudo", "element", "selectorPrefix", "attribRelate", "identifier",
        "identifierPart", "identifierVariableName", "property", "values", "url",
        "measurement",
    ];
    LessParser._LITERAL_NAMES = [
        undefined, "'null'", "'in'", undefined, "'...'", undefined, "'('", "')'",
        "'{'", "'}'", "'['", "']'", "'>'", "'~'", "'<'", "':'", "';'", "','",
        "'.'", "'$'", "'@'", "'&'", "'#'", "'::'", "'+'", "'*'", "'/'", "'-'",
        undefined, "'=='", "'>='", "'<='", "'!='", "'='", "'|='", "'~='", "'url'",
        undefined, "'@import'", "'@media'", "':extend'", "'!important'", "'@arguments'",
        "'@rest'", "'reference'", "'inline'", "'less'", "'css'", "'once'", "'multiple'",
        "'when'", "'not'", "'and'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'color'", "'convert'", "'data-uri'",
        "'default'", "'unit'", "'get-unit'", "'svg-gradient'", "'escape'", "'e'",
        undefined, "'replace'", "'length'", "'extract'", "'ceil'", "'floor'",
        "'percentage'", "'round'", "'sqrt'", "'abs'", "'sin'", "'asin'", "'cos'",
        "'acos'", "'tan'", "'atan'", "'pi'", "'pow'", "'mod'", "'min'", "'max'",
        "'isnumber'", "'isstring'", "'iscolor'", "'iskeyword'", "'isurl'", "'ispixel'",
        "'isem'", "'ispercentage'", "'isunit'", "'rgb'", "'rgba'", "'argb'", "'hsl'",
        "'hsla'", "'hsv'", "'hsva'", "'hue'", "'saturation'", "'lightness'", "'hsvhue'",
        "'hsvsaturation'", "'hsvvalue'", "'red'", "'green'", "'blue'", "'alpha'",
        "'luma'", "'luminance'", "'saturate'", "'desaturate'", "'lighten'", "'darken'",
        "'fadein'", "'fadeout'", "'fade'", "'spin'", "'mix'", "'greyscale'", "'contrast'",
        "'multiply'", "'screen'", "'overlay'", "'softlight'", "'hardlight'", "'difference'",
        "'exclusion'", "'average'", "'negation'",
    ];
    LessParser._SYMBOLIC_NAMES = [
        undefined, "NULL", "IN", "Unit", "Ellipsis", "InterpolationStart", "LPAREN",
        "RPAREN", "BlockStart", "BlockEnd", "LBRACK", "RBRACK", "GT", "TIL", "LT",
        "COLON", "SEMI", "COMMA", "DOT", "DOLLAR", "AT", "PARENTREF", "HASH",
        "COLONCOLON", "PLUS", "TIMES", "DIV", "MINUS", "PERC", "EQEQ", "GTEQ",
        "LTEQ", "NOTEQ", "EQ", "PIPE_EQ", "TILD_EQ", "URL", "UrlStart", "IMPORT",
        "MEDIA", "EXTEND", "IMPORTANT", "ARGUMENTS", "REST", "REFERENCE", "INLINE",
        "LESS", "CSS", "ONCE", "MULTIPLE", "WHEN", "NOT", "AND", "Identifier",
        "StringLiteral", "Number", "Color", "WS", "SL_COMMENT", "COMMENT", "FUNCTION_NAME",
        "COLOR", "CONVERT", "DATA_URI", "DEFAULT", "UNIT", "GET_UNIT", "SVG_GRADIENT",
        "ESCAPE", "E", "FORMAT", "REPLACE", "LENGTH", "EXTRACT", "CEIL", "FLOOR",
        "PERCENTAGE", "ROUND", "SQRT", "ABS", "SIN", "ASIN", "COS", "ACOS", "TAN",
        "ATAN", "PI", "POW", "MOD", "MIN", "MAX", "ISNUMBER", "ISSTRING", "ISCOLOR",
        "ISKEYWORD", "ISURL", "ISPIXEL", "ISEM", "ISPERCENTAGE", "ISUNIT", "RGB",
        "RGBA", "ARGB", "HSL", "HSLA", "HSV", "HSVA", "HUE", "SATURATION", "LIGHTNESS",
        "HSVHUE", "HSVSATURATION", "HSVVALUE", "RED", "GREEN", "BLUE", "ALPHA",
        "LUMA", "LUMINANCE", "SATURATE", "DESATURATE", "LIGHTEN", "DARKEN", "FADEIN",
        "FADEOUT", "FADE", "SPIN", "MIX", "GREYSCALE", "CONTRAST", "MULTIPLY",
        "SCREEN", "OVERLAY", "SOFTLIGHT", "HARDLIGHT", "DIFFERENCE", "EXCLUSION",
        "AVERAGE", "NEGATION", "UrlEnd", "Url", "SPACE", "InterpolationStartAfter",
        "IdentifierAfter",
    ];
    LessParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(LessParser._LITERAL_NAMES, LessParser._SYMBOLIC_NAMES, []);
    LessParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x91\u0173\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x07\x02N\n\x02\f\x02\x0E\x02Q\v\x02" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Y\n\x03\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x05\x04_\n\x04\x03\x05\x06\x05b\n\x05\r\x05\x0E" +
        "\x05c\x03\x05\x05\x05g\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bv\n\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x81\n\b\x03\t\x03\t\x03\t" +
        "\x05\t\x86\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n\x8D\n\n\f\n\x0E\n\x90" +
        "\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x9B\n" +
        "\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xA2\n\f\x03\r\x03\r\x03\r\x03\r" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xAD\n\x0E\f\x0E\x0E\x0E" +
        "\xB0\v\x0E\x03\x0E\x03\x0E\x05\x0E\xB4\n\x0E\x03\x0E\x03\x0E\x05\x0E\xB8" +
        "\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x05\x10\xC2\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\xC7\n\x11\f\x11\x0E" +
        "\x11\xCA\v\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x07\x13\xD5\n\x13\f\x13\x0E\x13\xD8\v\x13\x03\x13\x05" +
        "\x13\xDB\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
        "\x07\x14\xE4\n\x14\f\x14\x0E\x14\xE7\v\x14\x05\x14\xE9\n\x14\x03\x14\x05" +
        "\x14\xEC\n\x14\x03\x14\x03\x14\x05\x14\xF0\n\x14\x03\x14\x03\x14\x03\x15" +
        "\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\xF9\n\x16\x03\x17\x03\x17\x03" +
        "\x17\x05\x17\xFE\n\x17\x03\x17\x03\x17\x05\x17\u0102\n\x17\x03\x17\x03" +
        "\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0109\n\x18\f\x18\x0E\x18\u010C\v" +
        "\x18\x03\x19\x06\x19\u010F\n\x19\r\x19\x0E\x19\u0110\x03\x19\x07\x19\u0114" +
        "\n\x19\f\x19\x0E\x19\u0117\v\x19\x03\x19\x05\x19\u011A\n\x19\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0121\n\x1A\x03\x1A\x03\x1A\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0129\n\x1B\x03\x1B\x03\x1B\x05\x1B\u012D" +
        "\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u013E" +
        "\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x07 \u0146\n \f \x0E" +
        " \u0149\v \x03 \x03 \x03 \x03 \x07 \u014F\n \f \x0E \u0152\v \x05 \u0154" +
        "\n \x03!\x03!\x03!\x03!\x03!\x05!\u015B\n!\x03\"\x03\"\x03#\x03#\x03#" +
        "\x03#\x03$\x03$\x03$\x07$\u0166\n$\f$\x0E$\u0169\v$\x03%\x03%\x03%\x03" +
        "%\x03&\x03&\x05&\u0171\n&\x03&\x02\x02\x02\'\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
        "\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
        "6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02\x02\v\x03\x02" +
        "\x1A\x1E\x04\x02\x13\x1366\x06\x02\x0E\x0E\x10\x10 !##\x03\x02.3\x03\x02" +
        "78\x04\x02\x11\x11\x19\x19\x04\x02\x0E\x0F\x1A\x1A\x03\x02#%\x04\x027" +
        "7\x91\x91\x02\u0184\x02O\x03\x02\x02\x02\x04X\x03\x02\x02\x02\x06^\x03" +
        "\x02\x02\x02\ba\x03\x02\x02\x02\nh\x03\x02\x02\x02\fj\x03\x02\x02\x02" +
        "\x0E\x80\x03\x02\x02\x02\x10\x82\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02" +
        "\x14\x9A\x03\x02\x02\x02\x16\xA1\x03\x02\x02\x02\x18\xA3\x03\x02\x02\x02" +
        "\x1A\xA7\x03\x02\x02\x02\x1C\xBB\x03\x02\x02\x02\x1E\xC1\x03\x02\x02\x02" +
        " \xC3\x03\x02\x02\x02\"\xCB\x03\x02\x02\x02$\xCE\x03\x02\x02\x02&\xDE" +
        "\x03\x02\x02\x02(\xF3\x03\x02\x02\x02*\xF8\x03\x02\x02\x02,\xFA\x03\x02" +
        "\x02\x02.\u0105\x03\x02\x02\x020\u010E\x03\x02\x02\x022\u011B\x03\x02" +
        "\x02\x024\u0124\x03\x02\x02\x026\u0130\x03\x02\x02\x028\u013D\x03\x02" +
        "\x02\x02:\u013F\x03\x02\x02\x02<\u0141\x03\x02\x02\x02>\u0153\x03\x02" +
        "\x02\x02@\u015A\x03\x02\x02\x02B\u015C\x03\x02\x02\x02D\u015E\x03\x02" +
        "\x02\x02F\u0162\x03\x02\x02\x02H\u016A\x03\x02\x02\x02J\u016E\x03\x02" +
        "\x02\x02LN\x05\x04\x03\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02" +
        "\x02\x02OP\x03\x02\x02\x02P\x03\x03\x02\x02\x02QO\x03\x02\x02\x02RY\x05" +
        "\x1A\x0E\x02SY\x05\"\x12\x02TU\x05\x18\r\x02UV\x07\x12\x02\x02VY\x03\x02" +
        "\x02\x02WY\x05&\x14\x02XR\x03\x02\x02\x02XS\x03\x02\x02\x02XT\x03\x02" +
        "\x02\x02XW\x03\x02\x02\x02Y\x05\x03\x02\x02\x02Z[\x07\x16\x02\x02[_\x05" +
        "\x06\x04\x02\\]\x07\x16\x02\x02]_\x077\x02\x02^Z\x03\x02\x02\x02^\\\x03" +
        "\x02\x02\x02_\x07\x03\x02\x02\x02`b\x05\x0E\b\x02a`\x03\x02\x02\x02bc" +
        "\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02df\x03\x02\x02\x02" +
        "eg\x05\f\x07\x02fe\x03\x02\x02\x02fg\x03\x02\x02\x02g\t\x03\x02\x02\x02" +
        "hi\t\x02\x02\x02i\v\x03\x02\x02\x02jk\x05\n\x06\x02kl\x05\b\x05\x02l\r" +
        "\x03\x02\x02\x02m\x81\x05J&\x02no\x05> \x02op\x07+\x02\x02p\x81\x03\x02" +
        "\x02\x02q\x81\x05> \x02rs\x05> \x02su\x07\b\x02\x02tv\x05F$\x02ut\x03" +
        "\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x07\t\x02\x02x\x81" +
        "\x03\x02\x02\x02y\x81\x07:\x02\x02z\x81\x078\x02\x02{\x81\x05H%\x02|}" +
        "\x05\x06\x04\x02}~\x07+\x02\x02~\x81\x03\x02\x02\x02\x7F\x81\x05\x06\x04" +
        "\x02\x80m\x03\x02\x02\x02\x80n\x03\x02\x02\x02\x80q\x03\x02\x02\x02\x80" +
        "r\x03\x02\x02\x02\x80y\x03\x02\x02\x02\x80z\x03\x02\x02\x02\x80{\x03\x02" +
        "\x02\x02\x80|\x03\x02\x02\x02\x80\x7F\x03\x02\x02\x02\x81\x0F\x03\x02" +
        "\x02\x02\x82\x83\x07>\x02\x02\x83\x85\x07\b\x02\x02\x84\x86\x05F$\x02" +
        "\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
        "\x87\x88\x07\t\x02\x02\x88\x11\x03\x02\x02\x02\x89\x8E\x05\x14\v\x02\x8A" +
        "\x8B\t\x03\x02\x02\x8B\x8D\x05\x14\v\x02\x8C\x8A\x03\x02\x02\x02\x8D\x90" +
        "\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x13" +
        "\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x07\b\x02\x02\x92\x93" +
        "\x05\x16\f\x02\x93\x94\x07\t\x02\x02\x94\x9B\x03\x02\x02\x02\x95\x96\x07" +
        "5\x02\x02\x96\x97\x07\b\x02\x02\x97\x98\x05\x16\f\x02\x98\x99\x07\t\x02" +
        "\x02\x99\x9B\x03\x02\x02\x02\x9A\x91\x03\x02\x02\x02\x9A\x95\x03\x02\x02" +
        "\x02\x9B\x15\x03\x02\x02\x02\x9C\x9D\x05\b\x05\x02\x9D\x9E\t\x04\x02\x02" +
        "\x9E\x9F\x05\b\x05\x02\x9F\xA2\x03\x02\x02\x02\xA0\xA2\x05\b\x05\x02\xA1" +
        "\x9C\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x17\x03\x02\x02\x02\xA3" +
        "\xA4\x05\x06\x04\x02\xA4\xA5\x07\x11\x02\x02\xA5\xA6\x05F$\x02\xA6\x19" +
        "\x03\x02\x02\x02\xA7\xB3\x07(\x02\x02\xA8\xA9\x07\b\x02\x02\xA9\xAE\x05" +
        "\x1C\x0F\x02\xAA\xAB\x07\x13\x02\x02\xAB\xAD\x05\x1C\x0F\x02\xAC\xAA\x03" +
        "\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03" +
        "\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB2\x07" +
        "\t\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xA8\x03\x02\x02\x02\xB3\xB4\x03" +
        "\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x05\x1E\x10\x02\xB6\xB8\x05" +
        " \x11\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03" +
        "\x02\x02\x02\xB9\xBA\x07\x12\x02\x02\xBA\x1B\x03\x02\x02\x02\xBB\xBC\t" +
        "\x05\x02\x02\xBC\x1D\x03\x02\x02\x02\xBD\xC2\x078\x02\x02\xBE\xBF\x07" +
        "\'\x02\x02\xBF\xC0\x07\x8E\x02\x02\xC0\xC2\x07\x8D\x02\x02\xC1\xBD\x03" +
        "\x02\x02\x02\xC1\xBE\x03\x02\x02\x02\xC2\x1F\x03\x02\x02\x02\xC3\xC8\x07" +
        "7\x02\x02\xC4\xC5\x07\x13\x02\x02\xC5\xC7\x077\x02\x02\xC6\xC4\x03\x02" +
        "\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02" +
        "\x02\x02\xC9!\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x05.\x18" +
        "\x02\xCC\xCD\x05$\x13\x02\xCD#\x03\x02\x02\x02\xCE\xD6\x07\n\x02\x02\xCF" +
        "\xD0\x05D#\x02\xD0\xD1\x07\x12\x02\x02\xD1\xD5\x03\x02\x02\x02\xD2\xD5" +
        "\x05\x04\x03\x02\xD3\xD5\x05,\x17\x02\xD4\xCF\x03\x02\x02\x02\xD4\xD2" +
        "\x03\x02\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4" +
        "\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6" +
        "\x03\x02\x02\x02\xD9\xDB\x05D#\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03" +
        "\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x07\v\x02\x02\xDD%\x03\x02" +
        "\x02\x02\xDE\xDF\x05.\x18\x02\xDF\xE8\x07\b\x02\x02\xE0\xE5\x05*\x16\x02" +
        "\xE1\xE2\x07\x12\x02\x02\xE2\xE4\x05*\x16\x02\xE3\xE1\x03\x02\x02\x02" +
        "\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02" +
        "\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE0\x03\x02\x02\x02" +
        "\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02\x02\x02\xEA\xEC\x07\x06\x02\x02" +
        "\xEB\xEA\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02" +
        "\xED\xEF\x07\t\x02\x02\xEE\xF0\x05(\x15\x02\xEF\xEE\x03\x02\x02\x02\xEF" +
        "\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x05$\x13\x02\xF2" +
        "\'\x03\x02\x02\x02\xF3\xF4\x074\x02\x02\xF4\xF5\x05\x12\n\x02\xF5)\x03" +
        "\x02\x02\x02\xF6\xF9\x05\x06\x04\x02\xF7\xF9\x05\x18\r\x02\xF8\xF6\x03" +
        "\x02\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9+\x03\x02\x02\x02\xFA\xFB\x05" +
        "0\x19\x02\xFB\xFD\x07\b\x02\x02\xFC\xFE\x05F$\x02\xFD\xFC\x03\x02\x02" +
        "\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x07\t\x02" +
        "\x02\u0100\u0102\x07+\x02\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102" +
        "\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x07\x12\x02\x02" +
        "\u0104-\x03\x02\x02\x02\u0105\u010A\x050\x19\x02\u0106\u0107\x07\x13\x02" +
        "\x02\u0107\u0109\x050\x19\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010C" +
        "\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
        "\u010B/\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010F\x058\x1D" +
        "\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u010E" +
        "\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0115\x03\x02\x02\x02" +
        "\u0112\u0114\x052\x1A\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0117\x03" +
        "\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116" +
        "\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011A\x056\x1C" +
        "\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A1\x03" +
        "\x02\x02\x02\u011B\u011C\x07\f\x02\x02\u011C\u0120\x077\x02\x02\u011D" +
        "\u011E\x05<\x1F\x02\u011E\u011F\t\x06\x02\x02\u011F\u0121\x03\x02\x02" +
        "\x02\u0120\u011D\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122" +
        "\x03\x02\x02\x02\u0122\u0123\x07\r\x02\x02\u01233\x03\x02\x02\x02\u0124" +
        "\u0125\x07\x11\x02\x02\u0125\u0126\x075\x02\x02\u0126\u0128\x07\b\x02" +
        "\x02\u0127\u0129\x07\f\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129" +
        "\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x05.\x18\x02" +
        "\u012B\u012D\x07\r\x02\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03" +
        "\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x07\t\x02\x02\u012F" +
        "5\x03\x02\x02\x02\u0130\u0131\t\x07\x02\x02\u0131\u0132\x077\x02\x02\u0132" +
        "7\x03\x02\x02\x02\u0133\u0134\x05:\x1E\x02\u0134\u0135\x05> \x02\u0135" +
        "\u013E\x03\x02\x02\x02\u0136\u013E\x05> \x02\u0137\u0138\x07\x18\x02\x02" +
        "\u0138\u013E\x05> \x02\u0139\u013E\x056\x1C\x02\u013A\u013E\x054\x1B\x02" +
        "\u013B\u013E\x07\x17\x02\x02\u013C\u013E\x07\x1B\x02\x02\u013D\u0133\x03" +
        "\x02\x02\x02\u013D\u0136\x03\x02\x02\x02\u013D\u0137\x03\x02\x02\x02\u013D" +
        "\u0139\x03\x02\x02\x02\u013D\u013A\x03\x02\x02\x02\u013D\u013B\x03\x02" +
        "\x02\x02\u013D\u013C\x03\x02\x02\x02\u013E9\x03\x02\x02\x02\u013F\u0140" +
        "\t\b\x02\x02\u0140;\x03\x02\x02\x02\u0141\u0142\t\t\x02\x02\u0142=\x03" +
        "\x02\x02\x02\u0143\u0147\x077\x02\x02\u0144\u0146\x05@!\x02\u0145\u0144" +
        "\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02" +
        "\u0147\u0148\x03\x02\x02\x02\u0148\u0154\x03\x02\x02\x02\u0149\u0147\x03" +
        "\x02\x02\x02\u014A\u014B\x07\x07\x02\x02\u014B\u014C\x05B\"\x02\u014C" +
        "\u0150\x07\v\x02\x02\u014D\u014F\x05@!\x02\u014E\u014D\x03\x02\x02\x02" +
        "\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03" +
        "\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153" +
        "\u0143\x03\x02\x02\x02\u0153\u014A\x03\x02\x02\x02\u0154?\x03\x02\x02" +
        "\x02\u0155\u0156\x07\x90\x02\x02\u0156\u0157\x05B\"\x02\u0157\u0158\x07" +
        "\v\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u015B\x07\x91\x02\x02\u015A" +
        "\u0155\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015BA\x03\x02\x02" +
        "\x02\u015C\u015D\t\n\x02\x02\u015DC\x03\x02\x02\x02\u015E\u015F\x05> " +
        "\x02\u015F\u0160\x07\x11\x02\x02\u0160\u0161\x05F$\x02\u0161E\x03\x02" +
        "\x02\x02\u0162\u0167\x05\b\x05\x02\u0163\u0164\x07\x13\x02\x02\u0164\u0166" +
        "\x05\b\x05\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02" +
        "\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168G\x03\x02" +
        "\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016B\x07\'\x02\x02\u016B\u016C" +
        "\x07\x8E\x02\x02\u016C\u016D\x07\x8D\x02\x02\u016DI\x03\x02\x02\x02\u016E" +
        "\u0170\x079\x02\x02\u016F\u0171\x07\x05\x02\x02\u0170\u016F\x03\x02\x02" +
        "\x02\u0170\u0171\x03\x02\x02\x02\u0171K\x03\x02\x02\x02*OX^cfu\x80\x85" +
        "\x8E\x9A\xA1\xAE\xB3\xB7\xC1\xC8\xD4\xD6\xDA\xE5\xE8\xEB\xEF\xF8\xFD\u0101" +
        "\u010A\u0110\u0115\u0119\u0120\u0128\u012C\u013D\u0147\u0150\u0153\u015A" +
        "\u0167\u0170";
    return LessParser;
}(Parser_1.Parser));
exports.LessParser = LessParser;
var StylesheetContext = /** @class */ (function (_super) {
    __extends(StylesheetContext, _super);
    function StylesheetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StylesheetContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StylesheetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_stylesheet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StylesheetContext.prototype.enterRule = function (listener) {
        if (listener.enterStylesheet) {
            listener.enterStylesheet(this);
        }
    };
    // @Override
    StylesheetContext.prototype.exitRule = function (listener) {
        if (listener.exitStylesheet) {
            listener.exitStylesheet(this);
        }
    };
    // @Override
    StylesheetContext.prototype.accept = function (visitor) {
        if (visitor.visitStylesheet) {
            return visitor.visitStylesheet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StylesheetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StylesheetContext = StylesheetContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.importDeclaration = function () {
        return this.tryGetRuleContext(0, ImportDeclarationContext);
    };
    StatementContext.prototype.ruleset = function () {
        return this.tryGetRuleContext(0, RulesetContext);
    };
    StatementContext.prototype.variableDeclaration = function () {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    };
    StatementContext.prototype.SEMI = function () { return this.tryGetToken(LessParser.SEMI, 0); };
    StatementContext.prototype.mixinDefinition = function () {
        return this.tryGetRuleContext(0, MixinDefinitionContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_statement; },
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
var VariableNameContext = /** @class */ (function (_super) {
    __extends(VariableNameContext, _super);
    function VariableNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableNameContext.prototype.AT = function () { return this.getToken(LessParser.AT, 0); };
    VariableNameContext.prototype.variableName = function () {
        return this.tryGetRuleContext(0, VariableNameContext);
    };
    VariableNameContext.prototype.Identifier = function () { return this.tryGetToken(LessParser.Identifier, 0); };
    Object.defineProperty(VariableNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_variableName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableNameContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableName) {
            listener.enterVariableName(this);
        }
    };
    // @Override
    VariableNameContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableName) {
            listener.exitVariableName(this);
        }
    };
    // @Override
    VariableNameContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableName) {
            return visitor.visitVariableName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableNameContext = VariableNameContext;
var CommandStatementContext = /** @class */ (function (_super) {
    __extends(CommandStatementContext, _super);
    function CommandStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommandStatementContext.prototype.mathStatement = function () {
        return this.tryGetRuleContext(0, MathStatementContext);
    };
    CommandStatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(CommandStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_commandStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommandStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCommandStatement) {
            listener.enterCommandStatement(this);
        }
    };
    // @Override
    CommandStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCommandStatement) {
            listener.exitCommandStatement(this);
        }
    };
    // @Override
    CommandStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCommandStatement) {
            return visitor.visitCommandStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommandStatementContext = CommandStatementContext;
var MathCharacterContext = /** @class */ (function (_super) {
    __extends(MathCharacterContext, _super);
    function MathCharacterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MathCharacterContext.prototype.TIMES = function () { return this.tryGetToken(LessParser.TIMES, 0); };
    MathCharacterContext.prototype.PLUS = function () { return this.tryGetToken(LessParser.PLUS, 0); };
    MathCharacterContext.prototype.DIV = function () { return this.tryGetToken(LessParser.DIV, 0); };
    MathCharacterContext.prototype.MINUS = function () { return this.tryGetToken(LessParser.MINUS, 0); };
    MathCharacterContext.prototype.PERC = function () { return this.tryGetToken(LessParser.PERC, 0); };
    Object.defineProperty(MathCharacterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_mathCharacter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MathCharacterContext.prototype.enterRule = function (listener) {
        if (listener.enterMathCharacter) {
            listener.enterMathCharacter(this);
        }
    };
    // @Override
    MathCharacterContext.prototype.exitRule = function (listener) {
        if (listener.exitMathCharacter) {
            listener.exitMathCharacter(this);
        }
    };
    // @Override
    MathCharacterContext.prototype.accept = function (visitor) {
        if (visitor.visitMathCharacter) {
            return visitor.visitMathCharacter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MathCharacterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MathCharacterContext = MathCharacterContext;
var MathStatementContext = /** @class */ (function (_super) {
    __extends(MathStatementContext, _super);
    function MathStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MathStatementContext.prototype.mathCharacter = function () {
        return this.getRuleContext(0, MathCharacterContext);
    };
    MathStatementContext.prototype.commandStatement = function () {
        return this.getRuleContext(0, CommandStatementContext);
    };
    Object.defineProperty(MathStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_mathStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MathStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterMathStatement) {
            listener.enterMathStatement(this);
        }
    };
    // @Override
    MathStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitMathStatement) {
            listener.exitMathStatement(this);
        }
    };
    // @Override
    MathStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitMathStatement) {
            return visitor.visitMathStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MathStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MathStatementContext = MathStatementContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.measurement = function () {
        return this.tryGetRuleContext(0, MeasurementContext);
    };
    ExpressionContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ExpressionContext.prototype.IMPORTANT = function () { return this.tryGetToken(LessParser.IMPORTANT, 0); };
    ExpressionContext.prototype.LPAREN = function () { return this.tryGetToken(LessParser.LPAREN, 0); };
    ExpressionContext.prototype.RPAREN = function () { return this.tryGetToken(LessParser.RPAREN, 0); };
    ExpressionContext.prototype.values = function () {
        return this.tryGetRuleContext(0, ValuesContext);
    };
    ExpressionContext.prototype.Color = function () { return this.tryGetToken(LessParser.Color, 0); };
    ExpressionContext.prototype.StringLiteral = function () { return this.tryGetToken(LessParser.StringLiteral, 0); };
    ExpressionContext.prototype.url = function () {
        return this.tryGetRuleContext(0, UrlContext);
    };
    ExpressionContext.prototype.variableName = function () {
        return this.tryGetRuleContext(0, VariableNameContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_expression; },
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
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.FUNCTION_NAME = function () { return this.getToken(LessParser.FUNCTION_NAME, 0); };
    FunctionContext.prototype.LPAREN = function () { return this.getToken(LessParser.LPAREN, 0); };
    FunctionContext.prototype.RPAREN = function () { return this.getToken(LessParser.RPAREN, 0); };
    FunctionContext.prototype.values = function () {
        return this.tryGetRuleContext(0, ValuesContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_function; },
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
var ConditionsContext = /** @class */ (function (_super) {
    __extends(ConditionsContext, _super);
    function ConditionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionsContext.prototype.condition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionContext);
        }
        else {
            return this.getRuleContext(i, ConditionContext);
        }
    };
    ConditionsContext.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.AND);
        }
        else {
            return this.getToken(LessParser.AND, i);
        }
    };
    ConditionsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.COMMA);
        }
        else {
            return this.getToken(LessParser.COMMA, i);
        }
    };
    Object.defineProperty(ConditionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_conditions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionsContext.prototype.enterRule = function (listener) {
        if (listener.enterConditions) {
            listener.enterConditions(this);
        }
    };
    // @Override
    ConditionsContext.prototype.exitRule = function (listener) {
        if (listener.exitConditions) {
            listener.exitConditions(this);
        }
    };
    // @Override
    ConditionsContext.prototype.accept = function (visitor) {
        if (visitor.visitConditions) {
            return visitor.visitConditions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionsContext = ConditionsContext;
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.LPAREN = function () { return this.getToken(LessParser.LPAREN, 0); };
    ConditionContext.prototype.conditionStatement = function () {
        return this.getRuleContext(0, ConditionStatementContext);
    };
    ConditionContext.prototype.RPAREN = function () { return this.getToken(LessParser.RPAREN, 0); };
    ConditionContext.prototype.NOT = function () { return this.tryGetToken(LessParser.NOT, 0); };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_condition; },
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
var ConditionStatementContext = /** @class */ (function (_super) {
    __extends(ConditionStatementContext, _super);
    function ConditionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionStatementContext.prototype.commandStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommandStatementContext);
        }
        else {
            return this.getRuleContext(i, CommandStatementContext);
        }
    };
    ConditionStatementContext.prototype.EQ = function () { return this.tryGetToken(LessParser.EQ, 0); };
    ConditionStatementContext.prototype.LT = function () { return this.tryGetToken(LessParser.LT, 0); };
    ConditionStatementContext.prototype.GT = function () { return this.tryGetToken(LessParser.GT, 0); };
    ConditionStatementContext.prototype.GTEQ = function () { return this.tryGetToken(LessParser.GTEQ, 0); };
    ConditionStatementContext.prototype.LTEQ = function () { return this.tryGetToken(LessParser.LTEQ, 0); };
    Object.defineProperty(ConditionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_conditionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionStatement) {
            listener.enterConditionStatement(this);
        }
    };
    // @Override
    ConditionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionStatement) {
            listener.exitConditionStatement(this);
        }
    };
    // @Override
    ConditionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionStatement) {
            return visitor.visitConditionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionStatementContext = ConditionStatementContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.variableName = function () {
        return this.getRuleContext(0, VariableNameContext);
    };
    VariableDeclarationContext.prototype.COLON = function () { return this.getToken(LessParser.COLON, 0); };
    VariableDeclarationContext.prototype.values = function () {
        return this.getRuleContext(0, ValuesContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var ImportDeclarationContext = /** @class */ (function (_super) {
    __extends(ImportDeclarationContext, _super);
    function ImportDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDeclarationContext.prototype.IMPORT = function () { return this.getToken(LessParser.IMPORT, 0); };
    ImportDeclarationContext.prototype.referenceUrl = function () {
        return this.getRuleContext(0, ReferenceUrlContext);
    };
    ImportDeclarationContext.prototype.SEMI = function () { return this.getToken(LessParser.SEMI, 0); };
    ImportDeclarationContext.prototype.LPAREN = function () { return this.tryGetToken(LessParser.LPAREN, 0); };
    ImportDeclarationContext.prototype.RPAREN = function () { return this.tryGetToken(LessParser.RPAREN, 0); };
    ImportDeclarationContext.prototype.mediaTypes = function () {
        return this.tryGetRuleContext(0, MediaTypesContext);
    };
    ImportDeclarationContext.prototype.importOption = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportOptionContext);
        }
        else {
            return this.getRuleContext(i, ImportOptionContext);
        }
    };
    ImportDeclarationContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.COMMA);
        }
        else {
            return this.getToken(LessParser.COMMA, i);
        }
    };
    Object.defineProperty(ImportDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_importDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterImportDeclaration) {
            listener.enterImportDeclaration(this);
        }
    };
    // @Override
    ImportDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitImportDeclaration) {
            listener.exitImportDeclaration(this);
        }
    };
    // @Override
    ImportDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitImportDeclaration) {
            return visitor.visitImportDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportDeclarationContext = ImportDeclarationContext;
var ImportOptionContext = /** @class */ (function (_super) {
    __extends(ImportOptionContext, _super);
    function ImportOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportOptionContext.prototype.REFERENCE = function () { return this.tryGetToken(LessParser.REFERENCE, 0); };
    ImportOptionContext.prototype.INLINE = function () { return this.tryGetToken(LessParser.INLINE, 0); };
    ImportOptionContext.prototype.LESS = function () { return this.tryGetToken(LessParser.LESS, 0); };
    ImportOptionContext.prototype.CSS = function () { return this.tryGetToken(LessParser.CSS, 0); };
    ImportOptionContext.prototype.ONCE = function () { return this.tryGetToken(LessParser.ONCE, 0); };
    ImportOptionContext.prototype.MULTIPLE = function () { return this.tryGetToken(LessParser.MULTIPLE, 0); };
    Object.defineProperty(ImportOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_importOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterImportOption) {
            listener.enterImportOption(this);
        }
    };
    // @Override
    ImportOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitImportOption) {
            listener.exitImportOption(this);
        }
    };
    // @Override
    ImportOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitImportOption) {
            return visitor.visitImportOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportOptionContext = ImportOptionContext;
var ReferenceUrlContext = /** @class */ (function (_super) {
    __extends(ReferenceUrlContext, _super);
    function ReferenceUrlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReferenceUrlContext.prototype.StringLiteral = function () { return this.tryGetToken(LessParser.StringLiteral, 0); };
    ReferenceUrlContext.prototype.UrlStart = function () { return this.tryGetToken(LessParser.UrlStart, 0); };
    ReferenceUrlContext.prototype.Url = function () { return this.tryGetToken(LessParser.Url, 0); };
    ReferenceUrlContext.prototype.UrlEnd = function () { return this.tryGetToken(LessParser.UrlEnd, 0); };
    Object.defineProperty(ReferenceUrlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_referenceUrl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReferenceUrlContext.prototype.enterRule = function (listener) {
        if (listener.enterReferenceUrl) {
            listener.enterReferenceUrl(this);
        }
    };
    // @Override
    ReferenceUrlContext.prototype.exitRule = function (listener) {
        if (listener.exitReferenceUrl) {
            listener.exitReferenceUrl(this);
        }
    };
    // @Override
    ReferenceUrlContext.prototype.accept = function (visitor) {
        if (visitor.visitReferenceUrl) {
            return visitor.visitReferenceUrl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenceUrlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReferenceUrlContext = ReferenceUrlContext;
var MediaTypesContext = /** @class */ (function (_super) {
    __extends(MediaTypesContext, _super);
    function MediaTypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MediaTypesContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.Identifier);
        }
        else {
            return this.getToken(LessParser.Identifier, i);
        }
    };
    MediaTypesContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.COMMA);
        }
        else {
            return this.getToken(LessParser.COMMA, i);
        }
    };
    Object.defineProperty(MediaTypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_mediaTypes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MediaTypesContext.prototype.enterRule = function (listener) {
        if (listener.enterMediaTypes) {
            listener.enterMediaTypes(this);
        }
    };
    // @Override
    MediaTypesContext.prototype.exitRule = function (listener) {
        if (listener.exitMediaTypes) {
            listener.exitMediaTypes(this);
        }
    };
    // @Override
    MediaTypesContext.prototype.accept = function (visitor) {
        if (visitor.visitMediaTypes) {
            return visitor.visitMediaTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MediaTypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MediaTypesContext = MediaTypesContext;
var RulesetContext = /** @class */ (function (_super) {
    __extends(RulesetContext, _super);
    function RulesetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RulesetContext.prototype.selectors = function () {
        return this.getRuleContext(0, SelectorsContext);
    };
    RulesetContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(RulesetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_ruleset; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RulesetContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleset) {
            listener.enterRuleset(this);
        }
    };
    // @Override
    RulesetContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleset) {
            listener.exitRuleset(this);
        }
    };
    // @Override
    RulesetContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleset) {
            return visitor.visitRuleset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RulesetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RulesetContext = RulesetContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.BlockStart = function () { return this.getToken(LessParser.BlockStart, 0); };
    BlockContext.prototype.BlockEnd = function () { return this.getToken(LessParser.BlockEnd, 0); };
    BlockContext.prototype.property = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }
        else {
            return this.getRuleContext(i, PropertyContext);
        }
    };
    BlockContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.SEMI);
        }
        else {
            return this.getToken(LessParser.SEMI, i);
        }
    };
    BlockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    BlockContext.prototype.mixinReference = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MixinReferenceContext);
        }
        else {
            return this.getRuleContext(i, MixinReferenceContext);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_block; },
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
var MixinDefinitionContext = /** @class */ (function (_super) {
    __extends(MixinDefinitionContext, _super);
    function MixinDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MixinDefinitionContext.prototype.selectors = function () {
        return this.getRuleContext(0, SelectorsContext);
    };
    MixinDefinitionContext.prototype.LPAREN = function () { return this.getToken(LessParser.LPAREN, 0); };
    MixinDefinitionContext.prototype.RPAREN = function () { return this.getToken(LessParser.RPAREN, 0); };
    MixinDefinitionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    MixinDefinitionContext.prototype.mixinDefinitionParam = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MixinDefinitionParamContext);
        }
        else {
            return this.getRuleContext(i, MixinDefinitionParamContext);
        }
    };
    MixinDefinitionContext.prototype.Ellipsis = function () { return this.tryGetToken(LessParser.Ellipsis, 0); };
    MixinDefinitionContext.prototype.mixinGuard = function () {
        return this.tryGetRuleContext(0, MixinGuardContext);
    };
    MixinDefinitionContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.SEMI);
        }
        else {
            return this.getToken(LessParser.SEMI, i);
        }
    };
    Object.defineProperty(MixinDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_mixinDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MixinDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterMixinDefinition) {
            listener.enterMixinDefinition(this);
        }
    };
    // @Override
    MixinDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitMixinDefinition) {
            listener.exitMixinDefinition(this);
        }
    };
    // @Override
    MixinDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitMixinDefinition) {
            return visitor.visitMixinDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MixinDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MixinDefinitionContext = MixinDefinitionContext;
var MixinGuardContext = /** @class */ (function (_super) {
    __extends(MixinGuardContext, _super);
    function MixinGuardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MixinGuardContext.prototype.WHEN = function () { return this.getToken(LessParser.WHEN, 0); };
    MixinGuardContext.prototype.conditions = function () {
        return this.getRuleContext(0, ConditionsContext);
    };
    Object.defineProperty(MixinGuardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_mixinGuard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MixinGuardContext.prototype.enterRule = function (listener) {
        if (listener.enterMixinGuard) {
            listener.enterMixinGuard(this);
        }
    };
    // @Override
    MixinGuardContext.prototype.exitRule = function (listener) {
        if (listener.exitMixinGuard) {
            listener.exitMixinGuard(this);
        }
    };
    // @Override
    MixinGuardContext.prototype.accept = function (visitor) {
        if (visitor.visitMixinGuard) {
            return visitor.visitMixinGuard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MixinGuardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MixinGuardContext = MixinGuardContext;
var MixinDefinitionParamContext = /** @class */ (function (_super) {
    __extends(MixinDefinitionParamContext, _super);
    function MixinDefinitionParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MixinDefinitionParamContext.prototype.variableName = function () {
        return this.tryGetRuleContext(0, VariableNameContext);
    };
    MixinDefinitionParamContext.prototype.variableDeclaration = function () {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    };
    Object.defineProperty(MixinDefinitionParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_mixinDefinitionParam; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MixinDefinitionParamContext.prototype.enterRule = function (listener) {
        if (listener.enterMixinDefinitionParam) {
            listener.enterMixinDefinitionParam(this);
        }
    };
    // @Override
    MixinDefinitionParamContext.prototype.exitRule = function (listener) {
        if (listener.exitMixinDefinitionParam) {
            listener.exitMixinDefinitionParam(this);
        }
    };
    // @Override
    MixinDefinitionParamContext.prototype.accept = function (visitor) {
        if (visitor.visitMixinDefinitionParam) {
            return visitor.visitMixinDefinitionParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MixinDefinitionParamContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MixinDefinitionParamContext = MixinDefinitionParamContext;
var MixinReferenceContext = /** @class */ (function (_super) {
    __extends(MixinReferenceContext, _super);
    function MixinReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MixinReferenceContext.prototype.selector = function () {
        return this.getRuleContext(0, SelectorContext);
    };
    MixinReferenceContext.prototype.LPAREN = function () { return this.getToken(LessParser.LPAREN, 0); };
    MixinReferenceContext.prototype.RPAREN = function () { return this.getToken(LessParser.RPAREN, 0); };
    MixinReferenceContext.prototype.SEMI = function () { return this.getToken(LessParser.SEMI, 0); };
    MixinReferenceContext.prototype.values = function () {
        return this.tryGetRuleContext(0, ValuesContext);
    };
    MixinReferenceContext.prototype.IMPORTANT = function () { return this.tryGetToken(LessParser.IMPORTANT, 0); };
    Object.defineProperty(MixinReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_mixinReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MixinReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterMixinReference) {
            listener.enterMixinReference(this);
        }
    };
    // @Override
    MixinReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitMixinReference) {
            listener.exitMixinReference(this);
        }
    };
    // @Override
    MixinReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitMixinReference) {
            return visitor.visitMixinReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MixinReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MixinReferenceContext = MixinReferenceContext;
var SelectorsContext = /** @class */ (function (_super) {
    __extends(SelectorsContext, _super);
    function SelectorsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectorsContext.prototype.selector = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectorContext);
        }
        else {
            return this.getRuleContext(i, SelectorContext);
        }
    };
    SelectorsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.COMMA);
        }
        else {
            return this.getToken(LessParser.COMMA, i);
        }
    };
    Object.defineProperty(SelectorsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_selectors; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectorsContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectors) {
            listener.enterSelectors(this);
        }
    };
    // @Override
    SelectorsContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectors) {
            listener.exitSelectors(this);
        }
    };
    // @Override
    SelectorsContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectors) {
            return visitor.visitSelectors(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectorsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectorsContext = SelectorsContext;
var SelectorContext = /** @class */ (function (_super) {
    __extends(SelectorContext, _super);
    function SelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectorContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    SelectorContext.prototype.attrib = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttribContext);
        }
        else {
            return this.getRuleContext(i, AttribContext);
        }
    };
    SelectorContext.prototype.pseudo = function () {
        return this.tryGetRuleContext(0, PseudoContext);
    };
    Object.defineProperty(SelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_selector; },
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
var AttribContext = /** @class */ (function (_super) {
    __extends(AttribContext, _super);
    function AttribContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttribContext.prototype.LBRACK = function () { return this.getToken(LessParser.LBRACK, 0); };
    AttribContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.Identifier);
        }
        else {
            return this.getToken(LessParser.Identifier, i);
        }
    };
    AttribContext.prototype.RBRACK = function () { return this.getToken(LessParser.RBRACK, 0); };
    AttribContext.prototype.attribRelate = function () {
        return this.tryGetRuleContext(0, AttribRelateContext);
    };
    AttribContext.prototype.StringLiteral = function () { return this.tryGetToken(LessParser.StringLiteral, 0); };
    Object.defineProperty(AttribContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_attrib; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttribContext.prototype.enterRule = function (listener) {
        if (listener.enterAttrib) {
            listener.enterAttrib(this);
        }
    };
    // @Override
    AttribContext.prototype.exitRule = function (listener) {
        if (listener.exitAttrib) {
            listener.exitAttrib(this);
        }
    };
    // @Override
    AttribContext.prototype.accept = function (visitor) {
        if (visitor.visitAttrib) {
            return visitor.visitAttrib(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttribContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttribContext = AttribContext;
var NegationContext = /** @class */ (function (_super) {
    __extends(NegationContext, _super);
    function NegationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NegationContext.prototype.COLON = function () { return this.getToken(LessParser.COLON, 0); };
    NegationContext.prototype.NOT = function () { return this.getToken(LessParser.NOT, 0); };
    NegationContext.prototype.LPAREN = function () { return this.getToken(LessParser.LPAREN, 0); };
    NegationContext.prototype.selectors = function () {
        return this.getRuleContext(0, SelectorsContext);
    };
    NegationContext.prototype.RPAREN = function () { return this.getToken(LessParser.RPAREN, 0); };
    NegationContext.prototype.LBRACK = function () { return this.tryGetToken(LessParser.LBRACK, 0); };
    NegationContext.prototype.RBRACK = function () { return this.tryGetToken(LessParser.RBRACK, 0); };
    Object.defineProperty(NegationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_negation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NegationContext.prototype.enterRule = function (listener) {
        if (listener.enterNegation) {
            listener.enterNegation(this);
        }
    };
    // @Override
    NegationContext.prototype.exitRule = function (listener) {
        if (listener.exitNegation) {
            listener.exitNegation(this);
        }
    };
    // @Override
    NegationContext.prototype.accept = function (visitor) {
        if (visitor.visitNegation) {
            return visitor.visitNegation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NegationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NegationContext = NegationContext;
var PseudoContext = /** @class */ (function (_super) {
    __extends(PseudoContext, _super);
    function PseudoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PseudoContext.prototype.Identifier = function () { return this.getToken(LessParser.Identifier, 0); };
    PseudoContext.prototype.COLON = function () { return this.tryGetToken(LessParser.COLON, 0); };
    PseudoContext.prototype.COLONCOLON = function () { return this.tryGetToken(LessParser.COLONCOLON, 0); };
    Object.defineProperty(PseudoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_pseudo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PseudoContext.prototype.enterRule = function (listener) {
        if (listener.enterPseudo) {
            listener.enterPseudo(this);
        }
    };
    // @Override
    PseudoContext.prototype.exitRule = function (listener) {
        if (listener.exitPseudo) {
            listener.exitPseudo(this);
        }
    };
    // @Override
    PseudoContext.prototype.accept = function (visitor) {
        if (visitor.visitPseudo) {
            return visitor.visitPseudo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PseudoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PseudoContext = PseudoContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.selectorPrefix = function () {
        return this.tryGetRuleContext(0, SelectorPrefixContext);
    };
    ElementContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ElementContext.prototype.HASH = function () { return this.tryGetToken(LessParser.HASH, 0); };
    ElementContext.prototype.pseudo = function () {
        return this.tryGetRuleContext(0, PseudoContext);
    };
    ElementContext.prototype.negation = function () {
        return this.tryGetRuleContext(0, NegationContext);
    };
    ElementContext.prototype.PARENTREF = function () { return this.tryGetToken(LessParser.PARENTREF, 0); };
    ElementContext.prototype.TIMES = function () { return this.tryGetToken(LessParser.TIMES, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_element; },
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
var SelectorPrefixContext = /** @class */ (function (_super) {
    __extends(SelectorPrefixContext, _super);
    function SelectorPrefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectorPrefixContext.prototype.GT = function () { return this.tryGetToken(LessParser.GT, 0); };
    SelectorPrefixContext.prototype.PLUS = function () { return this.tryGetToken(LessParser.PLUS, 0); };
    SelectorPrefixContext.prototype.TIL = function () { return this.tryGetToken(LessParser.TIL, 0); };
    Object.defineProperty(SelectorPrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_selectorPrefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectorPrefixContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectorPrefix) {
            listener.enterSelectorPrefix(this);
        }
    };
    // @Override
    SelectorPrefixContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectorPrefix) {
            listener.exitSelectorPrefix(this);
        }
    };
    // @Override
    SelectorPrefixContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectorPrefix) {
            return visitor.visitSelectorPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectorPrefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectorPrefixContext = SelectorPrefixContext;
var AttribRelateContext = /** @class */ (function (_super) {
    __extends(AttribRelateContext, _super);
    function AttribRelateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttribRelateContext.prototype.EQ = function () { return this.tryGetToken(LessParser.EQ, 0); };
    AttribRelateContext.prototype.TILD_EQ = function () { return this.tryGetToken(LessParser.TILD_EQ, 0); };
    AttribRelateContext.prototype.PIPE_EQ = function () { return this.tryGetToken(LessParser.PIPE_EQ, 0); };
    Object.defineProperty(AttribRelateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_attribRelate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttribRelateContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribRelate) {
            listener.enterAttribRelate(this);
        }
    };
    // @Override
    AttribRelateContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribRelate) {
            listener.exitAttribRelate(this);
        }
    };
    // @Override
    AttribRelateContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribRelate) {
            return visitor.visitAttribRelate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttribRelateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttribRelateContext = AttribRelateContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.Identifier = function () { return this.tryGetToken(LessParser.Identifier, 0); };
    IdentifierContext.prototype.identifierPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierPartContext);
        }
        else {
            return this.getRuleContext(i, IdentifierPartContext);
        }
    };
    IdentifierContext.prototype.InterpolationStart = function () { return this.tryGetToken(LessParser.InterpolationStart, 0); };
    IdentifierContext.prototype.identifierVariableName = function () {
        return this.tryGetRuleContext(0, IdentifierVariableNameContext);
    };
    IdentifierContext.prototype.BlockEnd = function () { return this.tryGetToken(LessParser.BlockEnd, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_identifier; },
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
var IdentifierPartContext = /** @class */ (function (_super) {
    __extends(IdentifierPartContext, _super);
    function IdentifierPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierPartContext.prototype.InterpolationStartAfter = function () { return this.tryGetToken(LessParser.InterpolationStartAfter, 0); };
    IdentifierPartContext.prototype.identifierVariableName = function () {
        return this.tryGetRuleContext(0, IdentifierVariableNameContext);
    };
    IdentifierPartContext.prototype.BlockEnd = function () { return this.tryGetToken(LessParser.BlockEnd, 0); };
    IdentifierPartContext.prototype.IdentifierAfter = function () { return this.tryGetToken(LessParser.IdentifierAfter, 0); };
    Object.defineProperty(IdentifierPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_identifierPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierPartContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierPart) {
            listener.enterIdentifierPart(this);
        }
    };
    // @Override
    IdentifierPartContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierPart) {
            listener.exitIdentifierPart(this);
        }
    };
    // @Override
    IdentifierPartContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierPart) {
            return visitor.visitIdentifierPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierPartContext = IdentifierPartContext;
var IdentifierVariableNameContext = /** @class */ (function (_super) {
    __extends(IdentifierVariableNameContext, _super);
    function IdentifierVariableNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierVariableNameContext.prototype.Identifier = function () { return this.tryGetToken(LessParser.Identifier, 0); };
    IdentifierVariableNameContext.prototype.IdentifierAfter = function () { return this.tryGetToken(LessParser.IdentifierAfter, 0); };
    Object.defineProperty(IdentifierVariableNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_identifierVariableName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierVariableNameContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierVariableName) {
            listener.enterIdentifierVariableName(this);
        }
    };
    // @Override
    IdentifierVariableNameContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierVariableName) {
            listener.exitIdentifierVariableName(this);
        }
    };
    // @Override
    IdentifierVariableNameContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierVariableName) {
            return visitor.visitIdentifierVariableName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierVariableNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierVariableNameContext = IdentifierVariableNameContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    PropertyContext.prototype.COLON = function () { return this.getToken(LessParser.COLON, 0); };
    PropertyContext.prototype.values = function () {
        return this.getRuleContext(0, ValuesContext);
    };
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyContext = PropertyContext;
var ValuesContext = /** @class */ (function (_super) {
    __extends(ValuesContext, _super);
    function ValuesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValuesContext.prototype.commandStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommandStatementContext);
        }
        else {
            return this.getRuleContext(i, CommandStatementContext);
        }
    };
    ValuesContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(LessParser.COMMA);
        }
        else {
            return this.getToken(LessParser.COMMA, i);
        }
    };
    Object.defineProperty(ValuesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_values; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValuesContext.prototype.enterRule = function (listener) {
        if (listener.enterValues) {
            listener.enterValues(this);
        }
    };
    // @Override
    ValuesContext.prototype.exitRule = function (listener) {
        if (listener.exitValues) {
            listener.exitValues(this);
        }
    };
    // @Override
    ValuesContext.prototype.accept = function (visitor) {
        if (visitor.visitValues) {
            return visitor.visitValues(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValuesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValuesContext = ValuesContext;
var UrlContext = /** @class */ (function (_super) {
    __extends(UrlContext, _super);
    function UrlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UrlContext.prototype.UrlStart = function () { return this.getToken(LessParser.UrlStart, 0); };
    UrlContext.prototype.Url = function () { return this.getToken(LessParser.Url, 0); };
    UrlContext.prototype.UrlEnd = function () { return this.getToken(LessParser.UrlEnd, 0); };
    Object.defineProperty(UrlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_url; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UrlContext.prototype.enterRule = function (listener) {
        if (listener.enterUrl) {
            listener.enterUrl(this);
        }
    };
    // @Override
    UrlContext.prototype.exitRule = function (listener) {
        if (listener.exitUrl) {
            listener.exitUrl(this);
        }
    };
    // @Override
    UrlContext.prototype.accept = function (visitor) {
        if (visitor.visitUrl) {
            return visitor.visitUrl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UrlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UrlContext = UrlContext;
var MeasurementContext = /** @class */ (function (_super) {
    __extends(MeasurementContext, _super);
    function MeasurementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MeasurementContext.prototype.Number = function () { return this.getToken(LessParser.Number, 0); };
    MeasurementContext.prototype.Unit = function () { return this.tryGetToken(LessParser.Unit, 0); };
    Object.defineProperty(MeasurementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LessParser.RULE_measurement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MeasurementContext.prototype.enterRule = function (listener) {
        if (listener.enterMeasurement) {
            listener.enterMeasurement(this);
        }
    };
    // @Override
    MeasurementContext.prototype.exitRule = function (listener) {
        if (listener.exitMeasurement) {
            listener.exitMeasurement(this);
        }
    };
    // @Override
    MeasurementContext.prototype.accept = function (visitor) {
        if (visitor.visitMeasurement) {
            return visitor.visitMeasurement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MeasurementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MeasurementContext = MeasurementContext;
