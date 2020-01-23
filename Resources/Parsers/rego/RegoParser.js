"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rego/RegoParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var RegoParser = /** @class */ (function (_super) {
    __extends(RegoParser, _super);
    function RegoParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(RegoParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(RegoParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return RegoParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegoParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "RegoParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegoParser.prototype, "ruleNames", {
        // @Override
        get: function () { return RegoParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegoParser.prototype, "serializedATN", {
        // @Override
        get: function () { return RegoParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    RegoParser.prototype.root = function () {
        var _localctx = new RootContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, RegoParser.RULE_root);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Default - 2)) | (1 << (RegoParser.Import - 2)) | (1 << (RegoParser.Package - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
                    {
                        {
                            this.state = 82;
                            this.stmt();
                        }
                    }
                    this.state = 87;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 88;
                this.match(RegoParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, RegoParser.RULE_stmt);
        try {
            this.state = 94;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 90;
                        this.regoPackage();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 91;
                        this.importDirective();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 92;
                        this.regoRules();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 93;
                        this.regoBody();
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
    RegoParser.prototype.regoPackage = function () {
        var _localctx = new RegoPackageContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, RegoParser.RULE_regoPackage);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.match(RegoParser.Package);
                this.state = 97;
                this.ref();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.importDirective = function () {
        var _localctx = new ImportDirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, RegoParser.RULE_importDirective);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.match(RegoParser.Import);
                this.state = 100;
                _localctx._import_target = this.ref();
                this.state = 103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RegoParser.As) {
                    {
                        this.state = 101;
                        this.match(RegoParser.As);
                        this.state = 102;
                        _localctx._import_target_rename_as = this.ref();
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
    RegoParser.prototype.regoRules = function () {
        var _localctx = new RegoRulesContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, RegoParser.RULE_regoRules);
        try {
            var _alt = void 0;
            this.state = 116;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RegoParser.Default:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 105;
                        this.match(RegoParser.Default);
                        this.state = 106;
                        this.match(RegoParser.Name);
                        this.state = 107;
                        this.match(RegoParser.EqOper);
                        this.state = 108;
                        this.term();
                    }
                    break;
                case RegoParser.Name:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 109;
                        this.ruleHead();
                        this.state = 113;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 110;
                                        this.ruleBody();
                                    }
                                }
                            }
                            this.state = 115;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
    RegoParser.prototype.ruleHead = function () {
        var _localctx = new RuleHeadContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, RegoParser.RULE_ruleHead);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.match(RegoParser.Name);
                this.state = 124;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 119;
                            this.match(RegoParser.LParan);
                            this.state = 121;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
                                {
                                    this.state = 120;
                                    this.exprTermList();
                                }
                            }
                            this.state = 123;
                            this.match(RegoParser.RParan);
                        }
                        break;
                }
                this.state = 130;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 126;
                            this.match(RegoParser.LSBrace);
                            this.state = 127;
                            this.exprTerm();
                            this.state = 128;
                            this.match(RegoParser.RSBrace);
                        }
                        break;
                }
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RegoParser.EqOper) {
                    {
                        this.state = 132;
                        this.match(RegoParser.EqOper);
                        this.state = 133;
                        this.exprTerm();
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
    RegoParser.prototype.ruleBody = function () {
        var _localctx = new RuleBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, RegoParser.RULE_ruleBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RegoParser.Else) {
                    {
                        this.state = 136;
                        this.match(RegoParser.Else);
                        this.state = 139;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RegoParser.EqOper) {
                            {
                                this.state = 137;
                                this.match(RegoParser.EqOper);
                                this.state = 138;
                                this.exprTerm();
                            }
                        }
                    }
                }
                this.state = 143;
                this.nonEmptyBraceEnclosedBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.ruleExt = function () {
        var _localctx = new RuleExtContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, RegoParser.RULE_ruleExt);
        try {
            this.state = 147;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RegoParser.Else:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 145;
                        this.regoElse();
                    }
                    break;
                case RegoParser.LCBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 146;
                        this.nonEmptyBraceEnclosedBody();
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
    RegoParser.prototype.regoElse = function () {
        var _localctx = new RegoElseContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, RegoParser.RULE_regoElse);
        try {
            this.state = 156;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 149;
                        this.match(RegoParser.Else);
                        this.state = 150;
                        this.match(RegoParser.EqOper);
                        this.state = 151;
                        this.term();
                        this.state = 152;
                        this.nonEmptyBraceEnclosedBody();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 154;
                        this.match(RegoParser.Else);
                        this.state = 155;
                        this.nonEmptyBraceEnclosedBody();
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
    RegoParser.prototype.regoBody = function () {
        var _localctx = new RegoBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, RegoParser.RULE_regoBody);
        try {
            this.state = 160;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 158;
                        this.query();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 159;
                        this.nonEmptyBraceEnclosedBody();
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
    RegoParser.prototype.nonEmptyBraceEnclosedBody = function () {
        var _localctx = new NonEmptyBraceEnclosedBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, RegoParser.RULE_nonEmptyBraceEnclosedBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.match(RegoParser.LCBrace);
                this.state = 163;
                this.query();
                this.state = 164;
                this.match(RegoParser.RCBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.query = function () {
        var _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, RegoParser.RULE_query);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                this.literal();
                this.state = 173;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 168;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === RegoParser.Semicolon) {
                                    {
                                        this.state = 167;
                                        this.match(RegoParser.Semicolon);
                                    }
                                }
                                this.state = 170;
                                this.literal();
                            }
                        }
                    }
                    this.state = 175;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
    RegoParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, RegoParser.RULE_literal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 177;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 176;
                            this.match(RegoParser.Not);
                        }
                        break;
                }
                this.state = 179;
                this.literalExpr();
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.With) {
                    {
                        {
                            this.state = 180;
                            this.withKeyword();
                        }
                    }
                    this.state = 185;
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
    RegoParser.prototype.literalExpr = function () {
        var _localctx = new LiteralExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, RegoParser.RULE_literalExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.exprTerm();
                this.state = 191;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.EqOper) {
                    {
                        {
                            this.state = 187;
                            this.match(RegoParser.EqOper);
                            this.state = 188;
                            this.exprTerm();
                        }
                    }
                    this.state = 193;
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
    RegoParser.prototype.withKeyword = function () {
        var _localctx = new WithKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, RegoParser.RULE_withKeyword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.match(RegoParser.With);
                this.state = 195;
                this.exprTerm();
                this.state = 196;
                this.match(RegoParser.As);
                this.state = 197;
                this.exprTerm();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, RegoParser.RULE_functionCall);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this.ref();
                this.state = 200;
                this.match(RegoParser.LParan);
                this.state = 202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
                    {
                        this.state = 201;
                        this.exprTermList();
                    }
                }
                this.state = 204;
                this.match(RegoParser.RParan);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.exprTermPair = function () {
        var _localctx = new ExprTermPairContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, RegoParser.RULE_exprTermPair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.exprTerm();
                this.state = 207;
                this.match(RegoParser.Colon);
                this.state = 208;
                this.exprTerm();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.termPair = function () {
        var _localctx = new TermPairContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, RegoParser.RULE_termPair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.term();
                this.state = 211;
                this.match(RegoParser.Colon);
                this.state = 212;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.exprTermPairList = function () {
        var _localctx = new ExprTermPairListContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, RegoParser.RULE_exprTermPairList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.exprTermPair();
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.Comma) {
                    {
                        {
                            this.state = 215;
                            this.match(RegoParser.Comma);
                            this.state = 216;
                            this.exprTermPair();
                        }
                    }
                    this.state = 221;
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
    RegoParser.prototype.exprTerm = function () {
        var _localctx = new ExprTermContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, RegoParser.RULE_exprTerm);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.relationExpr();
                this.state = 227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.RelationOperator) {
                    {
                        {
                            this.state = 223;
                            this.match(RegoParser.RelationOperator);
                            this.state = 224;
                            this.relationExpr();
                        }
                    }
                    this.state = 229;
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
    RegoParser.prototype.exprTermList = function () {
        var _localctx = new ExprTermListContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, RegoParser.RULE_exprTermList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 230;
                this.exprTerm();
                this.state = 235;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.Comma) {
                    {
                        {
                            this.state = 231;
                            this.match(RegoParser.Comma);
                            this.state = 232;
                            this.exprTerm();
                        }
                    }
                    this.state = 237;
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
    RegoParser.prototype.relationExpr = function () {
        var _localctx = new RelationExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, RegoParser.RULE_relationExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.bitwiseOrExpr();
                this.state = 243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.Mid) {
                    {
                        {
                            this.state = 239;
                            this.match(RegoParser.Mid);
                            this.state = 240;
                            this.bitwiseOrExpr();
                        }
                    }
                    this.state = 245;
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
    RegoParser.prototype.bitwiseOrExpr = function () {
        var _localctx = new BitwiseOrExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, RegoParser.RULE_bitwiseOrExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.bitwiseAndExpr();
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.Ampersand) {
                    {
                        {
                            this.state = 247;
                            this.match(RegoParser.Ampersand);
                            this.state = 248;
                            this.bitwiseAndExpr();
                        }
                    }
                    this.state = 253;
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
    RegoParser.prototype.bitwiseAndExpr = function () {
        var _localctx = new BitwiseAndExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, RegoParser.RULE_bitwiseAndExpr);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.arithExpr();
                this.state = 259;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 255;
                                this.match(RegoParser.ArithOperator);
                                this.state = 256;
                                this.arithExpr();
                            }
                        }
                    }
                    this.state = 261;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
    RegoParser.prototype.arithExpr = function () {
        var _localctx = new ArithExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, RegoParser.RULE_arithExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.factorExpr();
                this.state = 267;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegoParser.FactorOperator) {
                    {
                        {
                            this.state = 263;
                            this.match(RegoParser.FactorOperator);
                            this.state = 264;
                            this.factorExpr();
                        }
                    }
                    this.state = 269;
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
    RegoParser.prototype.factorExpr = function () {
        var _localctx = new FactorExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, RegoParser.RULE_factorExpr);
        try {
            this.state = 275;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RegoParser.LParan:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 270;
                        this.match(RegoParser.LParan);
                        this.state = 271;
                        this.exprTerm();
                        this.state = 272;
                        this.match(RegoParser.RParan);
                    }
                    break;
                case RegoParser.String:
                case RegoParser.Bool:
                case RegoParser.Null:
                case RegoParser.Not:
                case RegoParser.Set:
                case RegoParser.LSBrace:
                case RegoParser.LCBrace:
                case RegoParser.ArithOperator:
                case RegoParser.UnsignedNumber:
                case RegoParser.Name:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 274;
                        this.term();
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
    RegoParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, RegoParser.RULE_term);
        var _la;
        try {
            this.state = 292;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 277;
                        this.arrayComprehension();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 278;
                        this.objectComprehension();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 279;
                        this.setComprehension();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 280;
                        this.object();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 281;
                        this.array();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 282;
                        this.set();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 284;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RegoParser.ArithOperator) {
                            {
                                this.state = 283;
                                this.match(RegoParser.ArithOperator);
                            }
                        }
                        this.state = 286;
                        this.scalar();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 287;
                        this.functionCall();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 289;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RegoParser.Not) {
                            {
                                this.state = 288;
                                this.match(RegoParser.Not);
                            }
                        }
                        this.state = 291;
                        this.ref();
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
    RegoParser.prototype.arrayComprehension = function () {
        var _localctx = new ArrayComprehensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, RegoParser.RULE_arrayComprehension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 294;
                this.match(RegoParser.LSBrace);
                this.state = 295;
                this.term();
                this.state = 296;
                this.match(RegoParser.Mid);
                this.state = 297;
                this.query();
                this.state = 298;
                this.match(RegoParser.RSBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.setComprehension = function () {
        var _localctx = new SetComprehensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, RegoParser.RULE_setComprehension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 300;
                this.match(RegoParser.LCBrace);
                this.state = 301;
                this.term();
                this.state = 302;
                this.match(RegoParser.Mid);
                this.state = 303;
                this.query();
                this.state = 304;
                this.match(RegoParser.RCBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.objectComprehension = function () {
        var _localctx = new ObjectComprehensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, RegoParser.RULE_objectComprehension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.match(RegoParser.LCBrace);
                this.state = 307;
                this.termPair();
                this.state = 308;
                this.match(RegoParser.Mid);
                this.state = 309;
                this.query();
                this.state = 310;
                this.match(RegoParser.RCBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, RegoParser.RULE_object);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.match(RegoParser.LCBrace);
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
                    {
                        this.state = 313;
                        this.objectItem();
                        this.state = 318;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 314;
                                        this.match(RegoParser.Comma);
                                        this.state = 315;
                                        this.objectItem();
                                    }
                                }
                            }
                            this.state = 320;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                        }
                        this.state = 322;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RegoParser.Comma) {
                            {
                                this.state = 321;
                                this.match(RegoParser.Comma);
                            }
                        }
                    }
                }
                this.state = 326;
                this.match(RegoParser.RCBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.objectItem = function () {
        var _localctx = new ObjectItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, RegoParser.RULE_objectItem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case RegoParser.String:
                    case RegoParser.Bool:
                    case RegoParser.Null:
                    case RegoParser.UnsignedNumber:
                        {
                            this.state = 328;
                            this.scalar();
                        }
                        break;
                    case RegoParser.Name:
                        {
                            this.state = 329;
                            this.ref();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 332;
                this.match(RegoParser.Colon);
                this.state = 333;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.array = function () {
        var _localctx = new ArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, RegoParser.RULE_array);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this.match(RegoParser.LSBrace);
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
                    {
                        this.state = 336;
                        this.exprTermList();
                    }
                }
                this.state = 339;
                this.match(RegoParser.RSBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.set = function () {
        var _localctx = new SetContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, RegoParser.RULE_set);
        try {
            this.state = 343;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RegoParser.Set:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 341;
                        this.emptySet();
                    }
                    break;
                case RegoParser.LCBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 342;
                        this.nonEmptySet();
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
    RegoParser.prototype.emptySet = function () {
        var _localctx = new EmptySetContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, RegoParser.RULE_emptySet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 345;
                this.match(RegoParser.Set);
                this.state = 346;
                this.match(RegoParser.RParan);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.nonEmptySet = function () {
        var _localctx = new NonEmptySetContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, RegoParser.RULE_nonEmptySet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this.match(RegoParser.LCBrace);
                this.state = 349;
                this.exprTermList();
                this.state = 350;
                this.match(RegoParser.RCBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.ref = function () {
        var _localctx = new RefContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, RegoParser.RULE_ref);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this.match(RegoParser.Name);
                this.state = 356;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 353;
                                this.refOperand();
                            }
                        }
                    }
                    this.state = 358;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
    RegoParser.prototype.refOperand = function () {
        var _localctx = new RefOperandContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, RegoParser.RULE_refOperand);
        try {
            this.state = 361;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RegoParser.Dot:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 359;
                        this.refOperandDot();
                    }
                    break;
                case RegoParser.LSBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 360;
                        this.refOperandCanonical();
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
    RegoParser.prototype.refOperandDot = function () {
        var _localctx = new RefOperandDotContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, RegoParser.RULE_refOperandDot);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.match(RegoParser.Dot);
                this.state = 364;
                this.match(RegoParser.Name);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.refOperandCanonical = function () {
        var _localctx = new RefOperandCanonicalContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, RegoParser.RULE_refOperandCanonical);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.match(RegoParser.LSBrace);
                this.state = 367;
                this.exprTerm();
                this.state = 368;
                this.match(RegoParser.RSBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RegoParser.prototype.scalar = function () {
        var _localctx = new ScalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, RegoParser.RULE_scalar);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 370;
                _la = this._input.LA(1);
                if (!(((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.UnsignedNumber - 2)))) !== 0))) {
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
    Object.defineProperty(RegoParser, "_ATN", {
        get: function () {
            if (!RegoParser.__ATN) {
                RegoParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(RegoParser._serializedATN));
            }
            return RegoParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    RegoParser.Comment = 1;
    RegoParser.String = 2;
    RegoParser.Bool = 3;
    RegoParser.Null = 4;
    RegoParser.As = 5;
    RegoParser.Default = 6;
    RegoParser.Else = 7;
    RegoParser.Import = 8;
    RegoParser.Package = 9;
    RegoParser.Not = 10;
    RegoParser.With = 11;
    RegoParser.Set = 12;
    RegoParser.LSBrace = 13;
    RegoParser.LCBrace = 14;
    RegoParser.LParan = 15;
    RegoParser.RSBrace = 16;
    RegoParser.RCBrace = 17;
    RegoParser.RParan = 18;
    RegoParser.Mid = 19;
    RegoParser.FactorOperator = 20;
    RegoParser.ArithOperator = 21;
    RegoParser.RelationOperator = 22;
    RegoParser.EqOper = 23;
    RegoParser.Comma = 24;
    RegoParser.Semicolon = 25;
    RegoParser.Colon = 26;
    RegoParser.Ampersand = 27;
    RegoParser.Dot = 28;
    RegoParser.WhiteSpace = 29;
    RegoParser.LineEnd = 30;
    RegoParser.WindowsLineEnd = 31;
    RegoParser.UnsignedNumber = 32;
    RegoParser.Name = 33;
    RegoParser.RULE_root = 0;
    RegoParser.RULE_stmt = 1;
    RegoParser.RULE_regoPackage = 2;
    RegoParser.RULE_importDirective = 3;
    RegoParser.RULE_regoRules = 4;
    RegoParser.RULE_ruleHead = 5;
    RegoParser.RULE_ruleBody = 6;
    RegoParser.RULE_ruleExt = 7;
    RegoParser.RULE_regoElse = 8;
    RegoParser.RULE_regoBody = 9;
    RegoParser.RULE_nonEmptyBraceEnclosedBody = 10;
    RegoParser.RULE_query = 11;
    RegoParser.RULE_literal = 12;
    RegoParser.RULE_literalExpr = 13;
    RegoParser.RULE_withKeyword = 14;
    RegoParser.RULE_functionCall = 15;
    RegoParser.RULE_exprTermPair = 16;
    RegoParser.RULE_termPair = 17;
    RegoParser.RULE_exprTermPairList = 18;
    RegoParser.RULE_exprTerm = 19;
    RegoParser.RULE_exprTermList = 20;
    RegoParser.RULE_relationExpr = 21;
    RegoParser.RULE_bitwiseOrExpr = 22;
    RegoParser.RULE_bitwiseAndExpr = 23;
    RegoParser.RULE_arithExpr = 24;
    RegoParser.RULE_factorExpr = 25;
    RegoParser.RULE_term = 26;
    RegoParser.RULE_arrayComprehension = 27;
    RegoParser.RULE_setComprehension = 28;
    RegoParser.RULE_objectComprehension = 29;
    RegoParser.RULE_object = 30;
    RegoParser.RULE_objectItem = 31;
    RegoParser.RULE_array = 32;
    RegoParser.RULE_set = 33;
    RegoParser.RULE_emptySet = 34;
    RegoParser.RULE_nonEmptySet = 35;
    RegoParser.RULE_ref = 36;
    RegoParser.RULE_refOperand = 37;
    RegoParser.RULE_refOperandDot = 38;
    RegoParser.RULE_refOperandCanonical = 39;
    RegoParser.RULE_scalar = 40;
    // tslint:disable:no-trailing-whitespace
    RegoParser.ruleNames = [
        "root", "stmt", "regoPackage", "importDirective", "regoRules", "ruleHead",
        "ruleBody", "ruleExt", "regoElse", "regoBody", "nonEmptyBraceEnclosedBody",
        "query", "literal", "literalExpr", "withKeyword", "functionCall", "exprTermPair",
        "termPair", "exprTermPairList", "exprTerm", "exprTermList", "relationExpr",
        "bitwiseOrExpr", "bitwiseAndExpr", "arithExpr", "factorExpr", "term",
        "arrayComprehension", "setComprehension", "objectComprehension", "object",
        "objectItem", "array", "set", "emptySet", "nonEmptySet", "ref", "refOperand",
        "refOperandDot", "refOperandCanonical", "scalar",
    ];
    RegoParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, "'null'", "'as'", "'default'",
        "'else'", "'import'", "'package'", "'not'", "'with'", "'set('", "'['",
        "'{'", "'('", "']'", "'}'", "')'", "'|'", undefined, undefined, undefined,
        undefined, "','", "';'", "':'", "'&'", "'.'",
    ];
    RegoParser._SYMBOLIC_NAMES = [
        undefined, "Comment", "String", "Bool", "Null", "As", "Default", "Else",
        "Import", "Package", "Not", "With", "Set", "LSBrace", "LCBrace", "LParan",
        "RSBrace", "RCBrace", "RParan", "Mid", "FactorOperator", "ArithOperator",
        "RelationOperator", "EqOper", "Comma", "Semicolon", "Colon", "Ampersand",
        "Dot", "WhiteSpace", "LineEnd", "WindowsLineEnd", "UnsignedNumber", "Name",
    ];
    RegoParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(RegoParser._LITERAL_NAMES, RegoParser._SYMBOLIC_NAMES, []);
    RegoParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\u0177\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
        "\x07\x02V\n\x02\f\x02\x0E\x02Y\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x05\x03a\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x05\x05j\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x07\x06r\n\x06\f\x06\x0E\x06u\v\x06\x05\x06w\n\x06\x03\x07\x03\x07" +
        "\x03\x07\x05\x07|\n\x07\x03\x07\x05\x07\x7F\n\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x05\x07\x85\n\x07\x03\x07\x03\x07\x05\x07\x89\n\x07\x03\b" +
        "\x03\b\x03\b\x05\b\x8E\n\b\x05\b\x90\n\b\x03\b\x03\b\x03\t\x03\t\x05\t" +
        "\x96\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9F\n\n\x03\v" +
        "\x03\v\x05\v\xA3\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r\xAB\n\r" +
        "\x03\r\x07\r\xAE\n\r\f\r\x0E\r\xB1\v\r\x03\x0E\x05\x0E\xB4\n\x0E\x03\x0E" +
        "\x03\x0E\x07\x0E\xB8\n\x0E\f\x0E\x0E\x0E\xBB\v\x0E\x03\x0F\x03\x0F\x03" +
        "\x0F\x07\x0F\xC0\n\x0F\f\x0F\x0E\x0F\xC3\v\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xCD\n\x11\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x03\x14\x07\x14\xDC\n\x14\f\x14\x0E\x14\xDF\v\x14\x03\x15" +
        "\x03\x15\x03\x15\x07\x15\xE4\n\x15\f\x15\x0E\x15\xE7\v\x15\x03\x16\x03" +
        "\x16\x03\x16\x07\x16\xEC\n\x16\f\x16\x0E\x16\xEF\v\x16\x03\x17\x03\x17" +
        "\x03\x17\x07\x17\xF4\n\x17\f\x17\x0E\x17\xF7\v\x17\x03\x18\x03\x18\x03" +
        "\x18\x07\x18\xFC\n\x18\f\x18\x0E\x18\xFF\v\x18\x03\x19\x03\x19\x03\x19" +
        "\x07\x19\u0104\n\x19\f\x19\x0E\x19\u0107\v\x19\x03\x1A\x03\x1A\x03\x1A" +
        "\x07\x1A\u010C\n\x1A\f\x1A\x0E\x1A\u010F\v\x1A\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x05\x1B\u0116\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x05\x1C\u011F\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
        "\u0124\n\x1C\x03\x1C\x05\x1C\u0127\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
        "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x07 \u013F" +
        "\n \f \x0E \u0142\v \x03 \x05 \u0145\n \x05 \u0147\n \x03 \x03 \x03!\x03" +
        "!\x05!\u014D\n!\x03!\x03!\x03!\x03\"\x03\"\x05\"\u0154\n\"\x03\"\x03\"" +
        "\x03#\x03#\x05#\u015A\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&" +
        "\x07&\u0165\n&\f&\x0E&\u0168\v&\x03\'\x03\'\x05\'\u016C\n\'\x03(\x03(" +
        "\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x02\x02\x02+\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
        "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
        "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
        "L\x02N\x02P\x02R\x02\x02\x03\x04\x02\x04\x06\"\"\x02\u017D\x02W\x03\x02" +
        "\x02\x02\x04`\x03\x02\x02\x02\x06b\x03\x02\x02\x02\be\x03\x02\x02\x02" +
        "\nv\x03\x02\x02\x02\fx\x03\x02\x02\x02\x0E\x8F\x03\x02\x02\x02\x10\x95" +
        "\x03\x02\x02\x02\x12\x9E\x03\x02\x02\x02\x14\xA2\x03\x02\x02\x02\x16\xA4" +
        "\x03\x02\x02\x02\x18\xA8\x03\x02\x02\x02\x1A\xB3\x03\x02\x02\x02\x1C\xBC" +
        "\x03\x02\x02\x02\x1E\xC4\x03\x02\x02\x02 \xC9\x03\x02\x02\x02\"\xD0\x03" +
        "\x02\x02\x02$\xD4\x03\x02\x02\x02&\xD8\x03\x02\x02\x02(\xE0\x03\x02\x02" +
        "\x02*\xE8\x03\x02\x02\x02,\xF0\x03\x02\x02\x02.\xF8\x03\x02\x02\x020\u0100" +
        "\x03\x02\x02\x022\u0108\x03\x02\x02\x024\u0115\x03\x02\x02\x026\u0126" +
        "\x03\x02\x02\x028\u0128\x03\x02\x02\x02:\u012E\x03\x02\x02\x02<\u0134" +
        "\x03\x02\x02\x02>\u013A\x03\x02\x02\x02@\u014C\x03\x02\x02\x02B\u0151" +
        "\x03\x02\x02\x02D\u0159\x03\x02\x02\x02F\u015B\x03\x02\x02\x02H\u015E" +
        "\x03\x02\x02\x02J\u0162\x03\x02\x02\x02L\u016B\x03\x02\x02\x02N\u016D" +
        "\x03\x02\x02\x02P\u0170\x03\x02\x02\x02R\u0174\x03\x02\x02\x02TV\x05\x04" +
        "\x03\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02" +
        "\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02\x02Z[\x07\x02\x02\x03[\x03\x03" +
        "\x02\x02\x02\\a\x05\x06\x04\x02]a\x05\b\x05\x02^a\x05\n\x06\x02_a\x05" +
        "\x14\v\x02`\\\x03\x02\x02\x02`]\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03" +
        "\x02\x02\x02a\x05\x03\x02\x02\x02bc\x07\v\x02\x02cd\x05J&\x02d\x07\x03" +
        "\x02\x02\x02ef\x07\n\x02\x02fi\x05J&\x02gh\x07\x07\x02\x02hj\x05J&\x02" +
        "ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\t\x03\x02\x02\x02kl\x07\b\x02\x02" +
        "lm\x07#\x02\x02mn\x07\x19\x02\x02nw\x056\x1C\x02os\x05\f\x07\x02pr\x05" +
        "\x0E\b\x02qp\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03" +
        "\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02vk\x03\x02\x02\x02vo\x03" +
        "\x02\x02\x02w\v\x03\x02\x02\x02x~\x07#\x02\x02y{\x07\x11\x02\x02z|\x05" +
        "*\x16\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F\x07" +
        "\x14\x02\x02~y\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x84\x03\x02\x02" +
        "\x02\x80\x81\x07\x0F\x02\x02\x81\x82\x05(\x15\x02\x82\x83\x07\x12\x02" +
        "\x02\x83\x85\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x84\x85\x03\x02\x02" +
        "\x02\x85\x88\x03\x02\x02\x02\x86\x87\x07\x19\x02\x02\x87\x89\x05(\x15" +
        "\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\r\x03\x02\x02" +
        "\x02\x8A\x8D\x07\t\x02\x02\x8B\x8C\x07\x19\x02\x02\x8C\x8E\x05(\x15\x02" +
        "\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02" +
        "\x8F\x8A\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02" +
        "\x91\x92\x05\x16\f\x02\x92\x0F\x03\x02\x02\x02\x93\x96\x05\x12\n\x02\x94" +
        "\x96\x05\x16\f\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96" +
        "\x11\x03\x02\x02\x02\x97\x98\x07\t\x02\x02\x98\x99\x07\x19\x02\x02\x99" +
        "\x9A\x056\x1C\x02\x9A\x9B\x05\x16\f\x02\x9B\x9F\x03\x02\x02\x02\x9C\x9D" +
        "\x07\t\x02\x02\x9D\x9F\x05\x16\f\x02\x9E\x97\x03\x02\x02\x02\x9E\x9C\x03" +
        "\x02\x02\x02\x9F\x13\x03\x02\x02\x02\xA0\xA3\x05\x18\r\x02\xA1\xA3\x05" +
        "\x16\f\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\x15\x03" +
        "\x02\x02\x02\xA4\xA5\x07\x10\x02\x02\xA5\xA6\x05\x18\r\x02\xA6\xA7\x07" +
        "\x13\x02\x02\xA7\x17\x03\x02\x02\x02\xA8\xAF\x05\x1A\x0E\x02\xA9\xAB\x07" +
        "\x1B\x02\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03" +
        "\x02\x02\x02\xAC\xAE\x05\x1A\x0E\x02\xAD\xAA\x03\x02\x02\x02\xAE\xB1\x03" +
        "\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\x19\x03" +
        "\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB4\x07\f\x02\x02\xB3\xB2\x03" +
        "\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB9\x05" +
        "\x1C\x0F\x02\xB6\xB8\x05\x1E\x10\x02\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03" +
        "\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\x1B\x03" +
        "\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xC1\x05(\x15\x02\xBD\xBE\x07" +
        "\x19\x02\x02\xBE\xC0\x05(\x15\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC3\x03" +
        "\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\x1D\x03" +
        "\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC5\x07\r\x02\x02\xC5\xC6\x05" +
        "(\x15\x02\xC6\xC7\x07\x07\x02\x02\xC7\xC8\x05(\x15\x02\xC8\x1F\x03\x02" +
        "\x02\x02\xC9\xCA\x05J&\x02\xCA\xCC\x07\x11\x02\x02\xCB\xCD\x05*\x16\x02" +
        "\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02" +
        "\xCE\xCF\x07\x14\x02\x02\xCF!\x03\x02\x02\x02\xD0\xD1\x05(\x15\x02\xD1" +
        "\xD2\x07\x1C\x02\x02\xD2\xD3\x05(\x15\x02\xD3#\x03\x02\x02\x02\xD4\xD5" +
        "\x056\x1C\x02\xD5\xD6\x07\x1C\x02\x02\xD6\xD7\x056\x1C\x02\xD7%\x03\x02" +
        "\x02\x02\xD8\xDD\x05\"\x12\x02\xD9\xDA\x07\x1A\x02\x02\xDA\xDC\x05\"\x12" +
        "\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02" +
        "\x02\xDD\xDE\x03\x02\x02\x02\xDE\'\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
        "\x02\xE0\xE5\x05,\x17\x02\xE1\xE2\x07\x18\x02\x02\xE2\xE4\x05,\x17\x02" +
        "\xE3\xE1\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02" +
        "\xE5\xE6\x03\x02\x02\x02\xE6)\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02" +
        "\xE8\xED\x05(\x15\x02\xE9\xEA\x07\x1A\x02\x02\xEA\xEC\x05(\x15\x02\xEB" +
        "\xE9\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED" +
        "\xEE\x03\x02\x02\x02\xEE+\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0" +
        "\xF5\x05.\x18\x02\xF1\xF2\x07\x15\x02\x02\xF2\xF4\x05.\x18\x02\xF3\xF1" +
        "\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6" +
        "\x03\x02\x02\x02\xF6-\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFD" +
        "\x050\x19\x02\xF9\xFA\x07\x1D\x02\x02\xFA\xFC\x050\x19\x02\xFB\xF9\x03" +
        "\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03" +
        "\x02\x02\x02\xFE/\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0105" +
        "\x052\x1A\x02\u0101\u0102\x07\x17\x02\x02\u0102\u0104\x052\x1A\x02\u0103" +
        "\u0101\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02" +
        "\x02\x02\u0105\u0106\x03\x02\x02\x02\u01061\x03\x02\x02\x02\u0107\u0105" +
        "\x03\x02\x02\x02\u0108\u010D\x054\x1B\x02\u0109\u010A\x07\x16\x02\x02" +
        "\u010A\u010C\x054\x1B\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010F\x03" +
        "\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
        "3\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0111\x07\x11\x02" +
        "\x02\u0111\u0112\x05(\x15\x02\u0112\u0113\x07\x14\x02\x02\u0113\u0116" +
        "\x03\x02\x02\x02\u0114\u0116\x056\x1C\x02\u0115\u0110\x03\x02\x02\x02" +
        "\u0115\u0114\x03\x02\x02\x02\u01165\x03\x02\x02\x02\u0117\u0127\x058\x1D" +
        "\x02\u0118\u0127\x05<\x1F\x02\u0119\u0127\x05:\x1E\x02\u011A\u0127\x05" +
        "> \x02\u011B\u0127\x05B\"\x02\u011C\u0127\x05D#\x02\u011D\u011F\x07\x17" +
        "\x02\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
        "\u0120\x03\x02\x02\x02\u0120\u0127\x05R*\x02\u0121\u0127\x05 \x11\x02" +
        "\u0122\u0124\x07\f\x02\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03" +
        "\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0127\x05J&\x02\u0126\u0117" +
        "\x03\x02\x02\x02\u0126\u0118\x03\x02\x02\x02\u0126\u0119\x03\x02\x02\x02" +
        "\u0126\u011A\x03\x02\x02\x02\u0126\u011B\x03\x02\x02\x02\u0126\u011C\x03" +
        "\x02\x02\x02\u0126\u011E\x03\x02\x02\x02\u0126\u0121\x03\x02\x02\x02\u0126" +
        "\u0123\x03\x02\x02\x02\u01277\x03\x02\x02\x02\u0128\u0129\x07\x0F\x02" +
        "\x02\u0129\u012A\x056\x1C\x02\u012A\u012B\x07\x15\x02\x02\u012B\u012C" +
        "\x05\x18\r\x02\u012C\u012D\x07\x12\x02\x02\u012D9\x03\x02\x02\x02\u012E" +
        "\u012F\x07\x10\x02\x02\u012F\u0130\x056\x1C\x02\u0130\u0131\x07\x15\x02" +
        "\x02\u0131\u0132\x05\x18\r\x02\u0132\u0133\x07\x13\x02\x02\u0133;\x03" +
        "\x02\x02\x02\u0134\u0135\x07\x10\x02\x02\u0135\u0136\x05$\x13\x02\u0136" +
        "\u0137\x07\x15\x02\x02\u0137\u0138\x05\x18\r\x02\u0138\u0139\x07\x13\x02" +
        "\x02\u0139=\x03\x02\x02\x02\u013A\u0146\x07\x10\x02\x02\u013B\u0140\x05" +
        "@!\x02\u013C\u013D\x07\x1A\x02\x02\u013D\u013F\x05@!\x02\u013E\u013C\x03" +
        "\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
        "\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02" +
        "\x02\x02\u0143\u0145\x07\x1A\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144" +
        "\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u013B\x03\x02" +
        "\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
        "\u0149\x07\x13\x02\x02\u0149?\x03\x02\x02\x02\u014A\u014D\x05R*\x02\u014B" +
        "\u014D\x05J&\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014B\x03\x02\x02\x02" +
        "\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x07\x1C\x02\x02\u014F\u0150\x05" +
        "6\x1C\x02\u0150A\x03\x02\x02\x02\u0151\u0153\x07\x0F\x02\x02\u0152\u0154" +
        "\x05*\x16\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02" +
        "\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x07\x12\x02\x02\u0156C\x03\x02" +
        "\x02\x02\u0157\u015A\x05F$\x02\u0158\u015A\x05H%\x02\u0159\u0157\x03\x02" +
        "\x02\x02\u0159\u0158\x03\x02\x02\x02\u015AE\x03\x02\x02\x02\u015B\u015C" +
        "\x07\x0E\x02\x02\u015C\u015D\x07\x14\x02\x02\u015DG\x03\x02\x02\x02\u015E" +
        "\u015F\x07\x10\x02\x02\u015F\u0160\x05*\x16\x02\u0160\u0161\x07\x13\x02" +
        "\x02\u0161I\x03\x02\x02\x02\u0162\u0166\x07#\x02\x02\u0163\u0165\x05L" +
        "\'\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164" +
        "\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167K\x03\x02\x02\x02\u0168" +
        "\u0166\x03\x02\x02\x02\u0169\u016C\x05N(\x02\u016A\u016C\x05P)\x02\u016B" +
        "\u0169\x03\x02\x02\x02\u016B\u016A\x03\x02\x02\x02\u016CM\x03\x02\x02" +
        "\x02\u016D\u016E\x07\x1E\x02\x02\u016E\u016F\x07#\x02\x02\u016FO\x03\x02" +
        "\x02\x02\u0170\u0171\x07\x0F\x02\x02\u0171\u0172\x05(\x15\x02\u0172\u0173" +
        "\x07\x12\x02\x02\u0173Q\x03\x02\x02\x02\u0174\u0175\t\x02\x02\x02\u0175" +
        "S\x03\x02\x02\x02)W`isv{~\x84\x88\x8D\x8F\x95\x9E\xA2\xAA\xAF\xB3\xB9" +
        "\xC1\xCC\xDD\xE5\xED\xF5\xFD\u0105\u010D\u0115\u011E\u0123\u0126\u0140" +
        "\u0144\u0146\u014C\u0153\u0159\u0166\u016B";
    return RegoParser;
}(Parser_1.Parser));
exports.RegoParser = RegoParser;
var RootContext = /** @class */ (function (_super) {
    __extends(RootContext, _super);
    function RootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootContext.prototype.EOF = function () { return this.getToken(RegoParser.EOF, 0); };
    RootContext.prototype.stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    };
    Object.defineProperty(RootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_root; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootContext.prototype.enterRule = function (listener) {
        if (listener.enterRoot) {
            listener.enterRoot(this);
        }
    };
    // @Override
    RootContext.prototype.exitRule = function (listener) {
        if (listener.exitRoot) {
            listener.exitRoot(this);
        }
    };
    // @Override
    RootContext.prototype.accept = function (visitor) {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootContext = RootContext;
var StmtContext = /** @class */ (function (_super) {
    __extends(StmtContext, _super);
    function StmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StmtContext.prototype.regoPackage = function () {
        return this.tryGetRuleContext(0, RegoPackageContext);
    };
    StmtContext.prototype.importDirective = function () {
        return this.tryGetRuleContext(0, ImportDirectiveContext);
    };
    StmtContext.prototype.regoRules = function () {
        return this.tryGetRuleContext(0, RegoRulesContext);
    };
    StmtContext.prototype.regoBody = function () {
        return this.tryGetRuleContext(0, RegoBodyContext);
    };
    Object.defineProperty(StmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StmtContext.prototype.enterRule = function (listener) {
        if (listener.enterStmt) {
            listener.enterStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.exitRule = function (listener) {
        if (listener.exitStmt) {
            listener.exitStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.accept = function (visitor) {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StmtContext = StmtContext;
var RegoPackageContext = /** @class */ (function (_super) {
    __extends(RegoPackageContext, _super);
    function RegoPackageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegoPackageContext.prototype.Package = function () { return this.getToken(RegoParser.Package, 0); };
    RegoPackageContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(RegoPackageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_regoPackage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegoPackageContext.prototype.enterRule = function (listener) {
        if (listener.enterRegoPackage) {
            listener.enterRegoPackage(this);
        }
    };
    // @Override
    RegoPackageContext.prototype.exitRule = function (listener) {
        if (listener.exitRegoPackage) {
            listener.exitRegoPackage(this);
        }
    };
    // @Override
    RegoPackageContext.prototype.accept = function (visitor) {
        if (visitor.visitRegoPackage) {
            return visitor.visitRegoPackage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegoPackageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegoPackageContext = RegoPackageContext;
var ImportDirectiveContext = /** @class */ (function (_super) {
    __extends(ImportDirectiveContext, _super);
    function ImportDirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDirectiveContext.prototype.Import = function () { return this.getToken(RegoParser.Import, 0); };
    ImportDirectiveContext.prototype.ref = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RefContext);
        }
        else {
            return this.getRuleContext(i, RefContext);
        }
    };
    ImportDirectiveContext.prototype.As = function () { return this.tryGetToken(RegoParser.As, 0); };
    Object.defineProperty(ImportDirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_importDirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportDirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterImportDirective) {
            listener.enterImportDirective(this);
        }
    };
    // @Override
    ImportDirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitImportDirective) {
            listener.exitImportDirective(this);
        }
    };
    // @Override
    ImportDirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitImportDirective) {
            return visitor.visitImportDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportDirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportDirectiveContext = ImportDirectiveContext;
var RegoRulesContext = /** @class */ (function (_super) {
    __extends(RegoRulesContext, _super);
    function RegoRulesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegoRulesContext.prototype.Default = function () { return this.tryGetToken(RegoParser.Default, 0); };
    RegoRulesContext.prototype.Name = function () { return this.tryGetToken(RegoParser.Name, 0); };
    RegoRulesContext.prototype.EqOper = function () { return this.tryGetToken(RegoParser.EqOper, 0); };
    RegoRulesContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    RegoRulesContext.prototype.ruleHead = function () {
        return this.tryGetRuleContext(0, RuleHeadContext);
    };
    RegoRulesContext.prototype.ruleBody = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleBodyContext);
        }
        else {
            return this.getRuleContext(i, RuleBodyContext);
        }
    };
    Object.defineProperty(RegoRulesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_regoRules; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegoRulesContext.prototype.enterRule = function (listener) {
        if (listener.enterRegoRules) {
            listener.enterRegoRules(this);
        }
    };
    // @Override
    RegoRulesContext.prototype.exitRule = function (listener) {
        if (listener.exitRegoRules) {
            listener.exitRegoRules(this);
        }
    };
    // @Override
    RegoRulesContext.prototype.accept = function (visitor) {
        if (visitor.visitRegoRules) {
            return visitor.visitRegoRules(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegoRulesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegoRulesContext = RegoRulesContext;
var RuleHeadContext = /** @class */ (function (_super) {
    __extends(RuleHeadContext, _super);
    function RuleHeadContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleHeadContext.prototype.Name = function () { return this.getToken(RegoParser.Name, 0); };
    RuleHeadContext.prototype.LParan = function () { return this.tryGetToken(RegoParser.LParan, 0); };
    RuleHeadContext.prototype.RParan = function () { return this.tryGetToken(RegoParser.RParan, 0); };
    RuleHeadContext.prototype.LSBrace = function () { return this.tryGetToken(RegoParser.LSBrace, 0); };
    RuleHeadContext.prototype.exprTerm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprTermContext);
        }
        else {
            return this.getRuleContext(i, ExprTermContext);
        }
    };
    RuleHeadContext.prototype.RSBrace = function () { return this.tryGetToken(RegoParser.RSBrace, 0); };
    RuleHeadContext.prototype.EqOper = function () { return this.tryGetToken(RegoParser.EqOper, 0); };
    RuleHeadContext.prototype.exprTermList = function () {
        return this.tryGetRuleContext(0, ExprTermListContext);
    };
    Object.defineProperty(RuleHeadContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_ruleHead; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleHeadContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleHead) {
            listener.enterRuleHead(this);
        }
    };
    // @Override
    RuleHeadContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleHead) {
            listener.exitRuleHead(this);
        }
    };
    // @Override
    RuleHeadContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleHead) {
            return visitor.visitRuleHead(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleHeadContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleHeadContext = RuleHeadContext;
var RuleBodyContext = /** @class */ (function (_super) {
    __extends(RuleBodyContext, _super);
    function RuleBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleBodyContext.prototype.nonEmptyBraceEnclosedBody = function () {
        return this.getRuleContext(0, NonEmptyBraceEnclosedBodyContext);
    };
    RuleBodyContext.prototype.Else = function () { return this.tryGetToken(RegoParser.Else, 0); };
    RuleBodyContext.prototype.EqOper = function () { return this.tryGetToken(RegoParser.EqOper, 0); };
    RuleBodyContext.prototype.exprTerm = function () {
        return this.tryGetRuleContext(0, ExprTermContext);
    };
    Object.defineProperty(RuleBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_ruleBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleBody) {
            listener.enterRuleBody(this);
        }
    };
    // @Override
    RuleBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleBody) {
            listener.exitRuleBody(this);
        }
    };
    // @Override
    RuleBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleBody) {
            return visitor.visitRuleBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleBodyContext = RuleBodyContext;
var RuleExtContext = /** @class */ (function (_super) {
    __extends(RuleExtContext, _super);
    function RuleExtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleExtContext.prototype.regoElse = function () {
        return this.tryGetRuleContext(0, RegoElseContext);
    };
    RuleExtContext.prototype.nonEmptyBraceEnclosedBody = function () {
        return this.tryGetRuleContext(0, NonEmptyBraceEnclosedBodyContext);
    };
    Object.defineProperty(RuleExtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_ruleExt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleExtContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleExt) {
            listener.enterRuleExt(this);
        }
    };
    // @Override
    RuleExtContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleExt) {
            listener.exitRuleExt(this);
        }
    };
    // @Override
    RuleExtContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleExt) {
            return visitor.visitRuleExt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleExtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleExtContext = RuleExtContext;
var RegoElseContext = /** @class */ (function (_super) {
    __extends(RegoElseContext, _super);
    function RegoElseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegoElseContext.prototype.Else = function () { return this.getToken(RegoParser.Else, 0); };
    RegoElseContext.prototype.EqOper = function () { return this.tryGetToken(RegoParser.EqOper, 0); };
    RegoElseContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    RegoElseContext.prototype.nonEmptyBraceEnclosedBody = function () {
        return this.getRuleContext(0, NonEmptyBraceEnclosedBodyContext);
    };
    Object.defineProperty(RegoElseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_regoElse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegoElseContext.prototype.enterRule = function (listener) {
        if (listener.enterRegoElse) {
            listener.enterRegoElse(this);
        }
    };
    // @Override
    RegoElseContext.prototype.exitRule = function (listener) {
        if (listener.exitRegoElse) {
            listener.exitRegoElse(this);
        }
    };
    // @Override
    RegoElseContext.prototype.accept = function (visitor) {
        if (visitor.visitRegoElse) {
            return visitor.visitRegoElse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegoElseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegoElseContext = RegoElseContext;
var RegoBodyContext = /** @class */ (function (_super) {
    __extends(RegoBodyContext, _super);
    function RegoBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegoBodyContext.prototype.query = function () {
        return this.tryGetRuleContext(0, QueryContext);
    };
    RegoBodyContext.prototype.nonEmptyBraceEnclosedBody = function () {
        return this.tryGetRuleContext(0, NonEmptyBraceEnclosedBodyContext);
    };
    Object.defineProperty(RegoBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_regoBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegoBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterRegoBody) {
            listener.enterRegoBody(this);
        }
    };
    // @Override
    RegoBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitRegoBody) {
            listener.exitRegoBody(this);
        }
    };
    // @Override
    RegoBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitRegoBody) {
            return visitor.visitRegoBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegoBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegoBodyContext = RegoBodyContext;
var NonEmptyBraceEnclosedBodyContext = /** @class */ (function (_super) {
    __extends(NonEmptyBraceEnclosedBodyContext, _super);
    function NonEmptyBraceEnclosedBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NonEmptyBraceEnclosedBodyContext.prototype.LCBrace = function () { return this.getToken(RegoParser.LCBrace, 0); };
    NonEmptyBraceEnclosedBodyContext.prototype.query = function () {
        return this.getRuleContext(0, QueryContext);
    };
    NonEmptyBraceEnclosedBodyContext.prototype.RCBrace = function () { return this.getToken(RegoParser.RCBrace, 0); };
    Object.defineProperty(NonEmptyBraceEnclosedBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_nonEmptyBraceEnclosedBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NonEmptyBraceEnclosedBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterNonEmptyBraceEnclosedBody) {
            listener.enterNonEmptyBraceEnclosedBody(this);
        }
    };
    // @Override
    NonEmptyBraceEnclosedBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitNonEmptyBraceEnclosedBody) {
            listener.exitNonEmptyBraceEnclosedBody(this);
        }
    };
    // @Override
    NonEmptyBraceEnclosedBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitNonEmptyBraceEnclosedBody) {
            return visitor.visitNonEmptyBraceEnclosedBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NonEmptyBraceEnclosedBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NonEmptyBraceEnclosedBodyContext = NonEmptyBraceEnclosedBodyContext;
var QueryContext = /** @class */ (function (_super) {
    __extends(QueryContext, _super);
    function QueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QueryContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    QueryContext.prototype.Semicolon = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.Semicolon);
        }
        else {
            return this.getToken(RegoParser.Semicolon, i);
        }
    };
    Object.defineProperty(QueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_query; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QueryContext.prototype.enterRule = function (listener) {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    };
    // @Override
    QueryContext.prototype.exitRule = function (listener) {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    };
    // @Override
    QueryContext.prototype.accept = function (visitor) {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QueryContext = QueryContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.literalExpr = function () {
        return this.getRuleContext(0, LiteralExprContext);
    };
    LiteralContext.prototype.Not = function () { return this.tryGetToken(RegoParser.Not, 0); };
    LiteralContext.prototype.withKeyword = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WithKeywordContext);
        }
        else {
            return this.getRuleContext(i, WithKeywordContext);
        }
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_literal; },
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
var LiteralExprContext = /** @class */ (function (_super) {
    __extends(LiteralExprContext, _super);
    function LiteralExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralExprContext.prototype.exprTerm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprTermContext);
        }
        else {
            return this.getRuleContext(i, ExprTermContext);
        }
    };
    LiteralExprContext.prototype.EqOper = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.EqOper);
        }
        else {
            return this.getToken(RegoParser.EqOper, i);
        }
    };
    Object.defineProperty(LiteralExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_literalExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralExprContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralExpr) {
            listener.enterLiteralExpr(this);
        }
    };
    // @Override
    LiteralExprContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralExpr) {
            listener.exitLiteralExpr(this);
        }
    };
    // @Override
    LiteralExprContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralExpr) {
            return visitor.visitLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralExprContext = LiteralExprContext;
var WithKeywordContext = /** @class */ (function (_super) {
    __extends(WithKeywordContext, _super);
    function WithKeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithKeywordContext.prototype.With = function () { return this.getToken(RegoParser.With, 0); };
    WithKeywordContext.prototype.exprTerm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprTermContext);
        }
        else {
            return this.getRuleContext(i, ExprTermContext);
        }
    };
    WithKeywordContext.prototype.As = function () { return this.getToken(RegoParser.As, 0); };
    Object.defineProperty(WithKeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_withKeyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithKeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterWithKeyword) {
            listener.enterWithKeyword(this);
        }
    };
    // @Override
    WithKeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitWithKeyword) {
            listener.exitWithKeyword(this);
        }
    };
    // @Override
    WithKeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitWithKeyword) {
            return visitor.visitWithKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithKeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithKeywordContext = WithKeywordContext;
var FunctionCallContext = /** @class */ (function (_super) {
    __extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    FunctionCallContext.prototype.LParan = function () { return this.getToken(RegoParser.LParan, 0); };
    FunctionCallContext.prototype.RParan = function () { return this.getToken(RegoParser.RParan, 0); };
    FunctionCallContext.prototype.exprTermList = function () {
        return this.tryGetRuleContext(0, ExprTermListContext);
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_functionCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallContext = FunctionCallContext;
var ExprTermPairContext = /** @class */ (function (_super) {
    __extends(ExprTermPairContext, _super);
    function ExprTermPairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprTermPairContext.prototype.exprTerm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprTermContext);
        }
        else {
            return this.getRuleContext(i, ExprTermContext);
        }
    };
    ExprTermPairContext.prototype.Colon = function () { return this.getToken(RegoParser.Colon, 0); };
    Object.defineProperty(ExprTermPairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_exprTermPair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprTermPairContext.prototype.enterRule = function (listener) {
        if (listener.enterExprTermPair) {
            listener.enterExprTermPair(this);
        }
    };
    // @Override
    ExprTermPairContext.prototype.exitRule = function (listener) {
        if (listener.exitExprTermPair) {
            listener.exitExprTermPair(this);
        }
    };
    // @Override
    ExprTermPairContext.prototype.accept = function (visitor) {
        if (visitor.visitExprTermPair) {
            return visitor.visitExprTermPair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprTermPairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprTermPairContext = ExprTermPairContext;
var TermPairContext = /** @class */ (function (_super) {
    __extends(TermPairContext, _super);
    function TermPairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermPairContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    TermPairContext.prototype.Colon = function () { return this.getToken(RegoParser.Colon, 0); };
    Object.defineProperty(TermPairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_termPair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TermPairContext.prototype.enterRule = function (listener) {
        if (listener.enterTermPair) {
            listener.enterTermPair(this);
        }
    };
    // @Override
    TermPairContext.prototype.exitRule = function (listener) {
        if (listener.exitTermPair) {
            listener.exitTermPair(this);
        }
    };
    // @Override
    TermPairContext.prototype.accept = function (visitor) {
        if (visitor.visitTermPair) {
            return visitor.visitTermPair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermPairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermPairContext = TermPairContext;
var ExprTermPairListContext = /** @class */ (function (_super) {
    __extends(ExprTermPairListContext, _super);
    function ExprTermPairListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprTermPairListContext.prototype.exprTermPair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprTermPairContext);
        }
        else {
            return this.getRuleContext(i, ExprTermPairContext);
        }
    };
    ExprTermPairListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.Comma);
        }
        else {
            return this.getToken(RegoParser.Comma, i);
        }
    };
    Object.defineProperty(ExprTermPairListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_exprTermPairList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprTermPairListContext.prototype.enterRule = function (listener) {
        if (listener.enterExprTermPairList) {
            listener.enterExprTermPairList(this);
        }
    };
    // @Override
    ExprTermPairListContext.prototype.exitRule = function (listener) {
        if (listener.exitExprTermPairList) {
            listener.exitExprTermPairList(this);
        }
    };
    // @Override
    ExprTermPairListContext.prototype.accept = function (visitor) {
        if (visitor.visitExprTermPairList) {
            return visitor.visitExprTermPairList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprTermPairListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprTermPairListContext = ExprTermPairListContext;
var ExprTermContext = /** @class */ (function (_super) {
    __extends(ExprTermContext, _super);
    function ExprTermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprTermContext.prototype.relationExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationExprContext);
        }
        else {
            return this.getRuleContext(i, RelationExprContext);
        }
    };
    ExprTermContext.prototype.RelationOperator = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.RelationOperator);
        }
        else {
            return this.getToken(RegoParser.RelationOperator, i);
        }
    };
    Object.defineProperty(ExprTermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_exprTerm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprTermContext.prototype.enterRule = function (listener) {
        if (listener.enterExprTerm) {
            listener.enterExprTerm(this);
        }
    };
    // @Override
    ExprTermContext.prototype.exitRule = function (listener) {
        if (listener.exitExprTerm) {
            listener.exitExprTerm(this);
        }
    };
    // @Override
    ExprTermContext.prototype.accept = function (visitor) {
        if (visitor.visitExprTerm) {
            return visitor.visitExprTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprTermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprTermContext = ExprTermContext;
var ExprTermListContext = /** @class */ (function (_super) {
    __extends(ExprTermListContext, _super);
    function ExprTermListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprTermListContext.prototype.exprTerm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprTermContext);
        }
        else {
            return this.getRuleContext(i, ExprTermContext);
        }
    };
    ExprTermListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.Comma);
        }
        else {
            return this.getToken(RegoParser.Comma, i);
        }
    };
    Object.defineProperty(ExprTermListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_exprTermList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprTermListContext.prototype.enterRule = function (listener) {
        if (listener.enterExprTermList) {
            listener.enterExprTermList(this);
        }
    };
    // @Override
    ExprTermListContext.prototype.exitRule = function (listener) {
        if (listener.exitExprTermList) {
            listener.exitExprTermList(this);
        }
    };
    // @Override
    ExprTermListContext.prototype.accept = function (visitor) {
        if (visitor.visitExprTermList) {
            return visitor.visitExprTermList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprTermListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprTermListContext = ExprTermListContext;
var RelationExprContext = /** @class */ (function (_super) {
    __extends(RelationExprContext, _super);
    function RelationExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationExprContext.prototype.bitwiseOrExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BitwiseOrExprContext);
        }
        else {
            return this.getRuleContext(i, BitwiseOrExprContext);
        }
    };
    RelationExprContext.prototype.Mid = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.Mid);
        }
        else {
            return this.getToken(RegoParser.Mid, i);
        }
    };
    Object.defineProperty(RelationExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_relationExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationExprContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationExpr) {
            listener.enterRelationExpr(this);
        }
    };
    // @Override
    RelationExprContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationExpr) {
            listener.exitRelationExpr(this);
        }
    };
    // @Override
    RelationExprContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationExpr) {
            return visitor.visitRelationExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationExprContext = RelationExprContext;
var BitwiseOrExprContext = /** @class */ (function (_super) {
    __extends(BitwiseOrExprContext, _super);
    function BitwiseOrExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitwiseOrExprContext.prototype.bitwiseAndExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BitwiseAndExprContext);
        }
        else {
            return this.getRuleContext(i, BitwiseAndExprContext);
        }
    };
    BitwiseOrExprContext.prototype.Ampersand = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.Ampersand);
        }
        else {
            return this.getToken(RegoParser.Ampersand, i);
        }
    };
    Object.defineProperty(BitwiseOrExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_bitwiseOrExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitwiseOrExprContext.prototype.enterRule = function (listener) {
        if (listener.enterBitwiseOrExpr) {
            listener.enterBitwiseOrExpr(this);
        }
    };
    // @Override
    BitwiseOrExprContext.prototype.exitRule = function (listener) {
        if (listener.exitBitwiseOrExpr) {
            listener.exitBitwiseOrExpr(this);
        }
    };
    // @Override
    BitwiseOrExprContext.prototype.accept = function (visitor) {
        if (visitor.visitBitwiseOrExpr) {
            return visitor.visitBitwiseOrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitwiseOrExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitwiseOrExprContext = BitwiseOrExprContext;
var BitwiseAndExprContext = /** @class */ (function (_super) {
    __extends(BitwiseAndExprContext, _super);
    function BitwiseAndExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitwiseAndExprContext.prototype.arithExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }
        else {
            return this.getRuleContext(i, ArithExprContext);
        }
    };
    BitwiseAndExprContext.prototype.ArithOperator = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.ArithOperator);
        }
        else {
            return this.getToken(RegoParser.ArithOperator, i);
        }
    };
    Object.defineProperty(BitwiseAndExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_bitwiseAndExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitwiseAndExprContext.prototype.enterRule = function (listener) {
        if (listener.enterBitwiseAndExpr) {
            listener.enterBitwiseAndExpr(this);
        }
    };
    // @Override
    BitwiseAndExprContext.prototype.exitRule = function (listener) {
        if (listener.exitBitwiseAndExpr) {
            listener.exitBitwiseAndExpr(this);
        }
    };
    // @Override
    BitwiseAndExprContext.prototype.accept = function (visitor) {
        if (visitor.visitBitwiseAndExpr) {
            return visitor.visitBitwiseAndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitwiseAndExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitwiseAndExprContext = BitwiseAndExprContext;
var ArithExprContext = /** @class */ (function (_super) {
    __extends(ArithExprContext, _super);
    function ArithExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArithExprContext.prototype.factorExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorExprContext);
        }
        else {
            return this.getRuleContext(i, FactorExprContext);
        }
    };
    ArithExprContext.prototype.FactorOperator = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.FactorOperator);
        }
        else {
            return this.getToken(RegoParser.FactorOperator, i);
        }
    };
    Object.defineProperty(ArithExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_arithExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArithExprContext.prototype.enterRule = function (listener) {
        if (listener.enterArithExpr) {
            listener.enterArithExpr(this);
        }
    };
    // @Override
    ArithExprContext.prototype.exitRule = function (listener) {
        if (listener.exitArithExpr) {
            listener.exitArithExpr(this);
        }
    };
    // @Override
    ArithExprContext.prototype.accept = function (visitor) {
        if (visitor.visitArithExpr) {
            return visitor.visitArithExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArithExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArithExprContext = ArithExprContext;
var FactorExprContext = /** @class */ (function (_super) {
    __extends(FactorExprContext, _super);
    function FactorExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorExprContext.prototype.LParan = function () { return this.tryGetToken(RegoParser.LParan, 0); };
    FactorExprContext.prototype.exprTerm = function () {
        return this.tryGetRuleContext(0, ExprTermContext);
    };
    FactorExprContext.prototype.RParan = function () { return this.tryGetToken(RegoParser.RParan, 0); };
    FactorExprContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    Object.defineProperty(FactorExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_factorExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FactorExprContext.prototype.enterRule = function (listener) {
        if (listener.enterFactorExpr) {
            listener.enterFactorExpr(this);
        }
    };
    // @Override
    FactorExprContext.prototype.exitRule = function (listener) {
        if (listener.exitFactorExpr) {
            listener.exitFactorExpr(this);
        }
    };
    // @Override
    FactorExprContext.prototype.accept = function (visitor) {
        if (visitor.visitFactorExpr) {
            return visitor.visitFactorExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FactorExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FactorExprContext = FactorExprContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.arrayComprehension = function () {
        return this.tryGetRuleContext(0, ArrayComprehensionContext);
    };
    TermContext.prototype.objectComprehension = function () {
        return this.tryGetRuleContext(0, ObjectComprehensionContext);
    };
    TermContext.prototype.setComprehension = function () {
        return this.tryGetRuleContext(0, SetComprehensionContext);
    };
    TermContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    TermContext.prototype.array = function () {
        return this.tryGetRuleContext(0, ArrayContext);
    };
    TermContext.prototype.set = function () {
        return this.tryGetRuleContext(0, SetContext);
    };
    TermContext.prototype.scalar = function () {
        return this.tryGetRuleContext(0, ScalarContext);
    };
    TermContext.prototype.ArithOperator = function () { return this.tryGetToken(RegoParser.ArithOperator, 0); };
    TermContext.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    TermContext.prototype.ref = function () {
        return this.tryGetRuleContext(0, RefContext);
    };
    TermContext.prototype.Not = function () { return this.tryGetToken(RegoParser.Not, 0); };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_term; },
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
var ArrayComprehensionContext = /** @class */ (function (_super) {
    __extends(ArrayComprehensionContext, _super);
    function ArrayComprehensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayComprehensionContext.prototype.LSBrace = function () { return this.getToken(RegoParser.LSBrace, 0); };
    ArrayComprehensionContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    ArrayComprehensionContext.prototype.Mid = function () { return this.getToken(RegoParser.Mid, 0); };
    ArrayComprehensionContext.prototype.query = function () {
        return this.getRuleContext(0, QueryContext);
    };
    ArrayComprehensionContext.prototype.RSBrace = function () { return this.getToken(RegoParser.RSBrace, 0); };
    Object.defineProperty(ArrayComprehensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_arrayComprehension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayComprehensionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayComprehension) {
            listener.enterArrayComprehension(this);
        }
    };
    // @Override
    ArrayComprehensionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayComprehension) {
            listener.exitArrayComprehension(this);
        }
    };
    // @Override
    ArrayComprehensionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayComprehension) {
            return visitor.visitArrayComprehension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayComprehensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayComprehensionContext = ArrayComprehensionContext;
var SetComprehensionContext = /** @class */ (function (_super) {
    __extends(SetComprehensionContext, _super);
    function SetComprehensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetComprehensionContext.prototype.LCBrace = function () { return this.getToken(RegoParser.LCBrace, 0); };
    SetComprehensionContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    SetComprehensionContext.prototype.Mid = function () { return this.getToken(RegoParser.Mid, 0); };
    SetComprehensionContext.prototype.query = function () {
        return this.getRuleContext(0, QueryContext);
    };
    SetComprehensionContext.prototype.RCBrace = function () { return this.getToken(RegoParser.RCBrace, 0); };
    Object.defineProperty(SetComprehensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_setComprehension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetComprehensionContext.prototype.enterRule = function (listener) {
        if (listener.enterSetComprehension) {
            listener.enterSetComprehension(this);
        }
    };
    // @Override
    SetComprehensionContext.prototype.exitRule = function (listener) {
        if (listener.exitSetComprehension) {
            listener.exitSetComprehension(this);
        }
    };
    // @Override
    SetComprehensionContext.prototype.accept = function (visitor) {
        if (visitor.visitSetComprehension) {
            return visitor.visitSetComprehension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetComprehensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetComprehensionContext = SetComprehensionContext;
var ObjectComprehensionContext = /** @class */ (function (_super) {
    __extends(ObjectComprehensionContext, _super);
    function ObjectComprehensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectComprehensionContext.prototype.LCBrace = function () { return this.getToken(RegoParser.LCBrace, 0); };
    ObjectComprehensionContext.prototype.termPair = function () {
        return this.getRuleContext(0, TermPairContext);
    };
    ObjectComprehensionContext.prototype.Mid = function () { return this.getToken(RegoParser.Mid, 0); };
    ObjectComprehensionContext.prototype.query = function () {
        return this.getRuleContext(0, QueryContext);
    };
    ObjectComprehensionContext.prototype.RCBrace = function () { return this.getToken(RegoParser.RCBrace, 0); };
    Object.defineProperty(ObjectComprehensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_objectComprehension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectComprehensionContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectComprehension) {
            listener.enterObjectComprehension(this);
        }
    };
    // @Override
    ObjectComprehensionContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectComprehension) {
            listener.exitObjectComprehension(this);
        }
    };
    // @Override
    ObjectComprehensionContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectComprehension) {
            return visitor.visitObjectComprehension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectComprehensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectComprehensionContext = ObjectComprehensionContext;
var ObjectContext = /** @class */ (function (_super) {
    __extends(ObjectContext, _super);
    function ObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectContext.prototype.LCBrace = function () { return this.getToken(RegoParser.LCBrace, 0); };
    ObjectContext.prototype.RCBrace = function () { return this.getToken(RegoParser.RCBrace, 0); };
    ObjectContext.prototype.objectItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectItemContext);
        }
        else {
            return this.getRuleContext(i, ObjectItemContext);
        }
    };
    ObjectContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(RegoParser.Comma);
        }
        else {
            return this.getToken(RegoParser.Comma, i);
        }
    };
    Object.defineProperty(ObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_object; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterObject) {
            listener.enterObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitObject) {
            listener.exitObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitObject) {
            return visitor.visitObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectContext = ObjectContext;
var ObjectItemContext = /** @class */ (function (_super) {
    __extends(ObjectItemContext, _super);
    function ObjectItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectItemContext.prototype.Colon = function () { return this.getToken(RegoParser.Colon, 0); };
    ObjectItemContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    ObjectItemContext.prototype.scalar = function () {
        return this.tryGetRuleContext(0, ScalarContext);
    };
    ObjectItemContext.prototype.ref = function () {
        return this.tryGetRuleContext(0, RefContext);
    };
    Object.defineProperty(ObjectItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_objectItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectItemContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectItem) {
            listener.enterObjectItem(this);
        }
    };
    // @Override
    ObjectItemContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectItem) {
            listener.exitObjectItem(this);
        }
    };
    // @Override
    ObjectItemContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectItem) {
            return visitor.visitObjectItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectItemContext = ObjectItemContext;
var ArrayContext = /** @class */ (function (_super) {
    __extends(ArrayContext, _super);
    function ArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayContext.prototype.LSBrace = function () { return this.getToken(RegoParser.LSBrace, 0); };
    ArrayContext.prototype.RSBrace = function () { return this.getToken(RegoParser.RSBrace, 0); };
    ArrayContext.prototype.exprTermList = function () {
        return this.tryGetRuleContext(0, ExprTermListContext);
    };
    Object.defineProperty(ArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_array; },
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
var SetContext = /** @class */ (function (_super) {
    __extends(SetContext, _super);
    function SetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetContext.prototype.emptySet = function () {
        return this.tryGetRuleContext(0, EmptySetContext);
    };
    SetContext.prototype.nonEmptySet = function () {
        return this.tryGetRuleContext(0, NonEmptySetContext);
    };
    Object.defineProperty(SetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_set; },
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
var EmptySetContext = /** @class */ (function (_super) {
    __extends(EmptySetContext, _super);
    function EmptySetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptySetContext.prototype.Set = function () { return this.getToken(RegoParser.Set, 0); };
    EmptySetContext.prototype.RParan = function () { return this.getToken(RegoParser.RParan, 0); };
    Object.defineProperty(EmptySetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_emptySet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptySetContext.prototype.enterRule = function (listener) {
        if (listener.enterEmptySet) {
            listener.enterEmptySet(this);
        }
    };
    // @Override
    EmptySetContext.prototype.exitRule = function (listener) {
        if (listener.exitEmptySet) {
            listener.exitEmptySet(this);
        }
    };
    // @Override
    EmptySetContext.prototype.accept = function (visitor) {
        if (visitor.visitEmptySet) {
            return visitor.visitEmptySet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptySetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptySetContext = EmptySetContext;
var NonEmptySetContext = /** @class */ (function (_super) {
    __extends(NonEmptySetContext, _super);
    function NonEmptySetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NonEmptySetContext.prototype.LCBrace = function () { return this.getToken(RegoParser.LCBrace, 0); };
    NonEmptySetContext.prototype.exprTermList = function () {
        return this.getRuleContext(0, ExprTermListContext);
    };
    NonEmptySetContext.prototype.RCBrace = function () { return this.getToken(RegoParser.RCBrace, 0); };
    Object.defineProperty(NonEmptySetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_nonEmptySet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NonEmptySetContext.prototype.enterRule = function (listener) {
        if (listener.enterNonEmptySet) {
            listener.enterNonEmptySet(this);
        }
    };
    // @Override
    NonEmptySetContext.prototype.exitRule = function (listener) {
        if (listener.exitNonEmptySet) {
            listener.exitNonEmptySet(this);
        }
    };
    // @Override
    NonEmptySetContext.prototype.accept = function (visitor) {
        if (visitor.visitNonEmptySet) {
            return visitor.visitNonEmptySet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NonEmptySetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NonEmptySetContext = NonEmptySetContext;
var RefContext = /** @class */ (function (_super) {
    __extends(RefContext, _super);
    function RefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefContext.prototype.Name = function () { return this.getToken(RegoParser.Name, 0); };
    RefContext.prototype.refOperand = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RefOperandContext);
        }
        else {
            return this.getRuleContext(i, RefOperandContext);
        }
    };
    Object.defineProperty(RefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_ref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefContext.prototype.enterRule = function (listener) {
        if (listener.enterRef) {
            listener.enterRef(this);
        }
    };
    // @Override
    RefContext.prototype.exitRule = function (listener) {
        if (listener.exitRef) {
            listener.exitRef(this);
        }
    };
    // @Override
    RefContext.prototype.accept = function (visitor) {
        if (visitor.visitRef) {
            return visitor.visitRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefContext = RefContext;
var RefOperandContext = /** @class */ (function (_super) {
    __extends(RefOperandContext, _super);
    function RefOperandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefOperandContext.prototype.refOperandDot = function () {
        return this.tryGetRuleContext(0, RefOperandDotContext);
    };
    RefOperandContext.prototype.refOperandCanonical = function () {
        return this.tryGetRuleContext(0, RefOperandCanonicalContext);
    };
    Object.defineProperty(RefOperandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_refOperand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefOperandContext.prototype.enterRule = function (listener) {
        if (listener.enterRefOperand) {
            listener.enterRefOperand(this);
        }
    };
    // @Override
    RefOperandContext.prototype.exitRule = function (listener) {
        if (listener.exitRefOperand) {
            listener.exitRefOperand(this);
        }
    };
    // @Override
    RefOperandContext.prototype.accept = function (visitor) {
        if (visitor.visitRefOperand) {
            return visitor.visitRefOperand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefOperandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefOperandContext = RefOperandContext;
var RefOperandDotContext = /** @class */ (function (_super) {
    __extends(RefOperandDotContext, _super);
    function RefOperandDotContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefOperandDotContext.prototype.Dot = function () { return this.getToken(RegoParser.Dot, 0); };
    RefOperandDotContext.prototype.Name = function () { return this.getToken(RegoParser.Name, 0); };
    Object.defineProperty(RefOperandDotContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_refOperandDot; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefOperandDotContext.prototype.enterRule = function (listener) {
        if (listener.enterRefOperandDot) {
            listener.enterRefOperandDot(this);
        }
    };
    // @Override
    RefOperandDotContext.prototype.exitRule = function (listener) {
        if (listener.exitRefOperandDot) {
            listener.exitRefOperandDot(this);
        }
    };
    // @Override
    RefOperandDotContext.prototype.accept = function (visitor) {
        if (visitor.visitRefOperandDot) {
            return visitor.visitRefOperandDot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefOperandDotContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefOperandDotContext = RefOperandDotContext;
var RefOperandCanonicalContext = /** @class */ (function (_super) {
    __extends(RefOperandCanonicalContext, _super);
    function RefOperandCanonicalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefOperandCanonicalContext.prototype.LSBrace = function () { return this.getToken(RegoParser.LSBrace, 0); };
    RefOperandCanonicalContext.prototype.exprTerm = function () {
        return this.getRuleContext(0, ExprTermContext);
    };
    RefOperandCanonicalContext.prototype.RSBrace = function () { return this.getToken(RegoParser.RSBrace, 0); };
    Object.defineProperty(RefOperandCanonicalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_refOperandCanonical; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefOperandCanonicalContext.prototype.enterRule = function (listener) {
        if (listener.enterRefOperandCanonical) {
            listener.enterRefOperandCanonical(this);
        }
    };
    // @Override
    RefOperandCanonicalContext.prototype.exitRule = function (listener) {
        if (listener.exitRefOperandCanonical) {
            listener.exitRefOperandCanonical(this);
        }
    };
    // @Override
    RefOperandCanonicalContext.prototype.accept = function (visitor) {
        if (visitor.visitRefOperandCanonical) {
            return visitor.visitRefOperandCanonical(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefOperandCanonicalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefOperandCanonicalContext = RefOperandCanonicalContext;
var ScalarContext = /** @class */ (function (_super) {
    __extends(ScalarContext, _super);
    function ScalarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScalarContext.prototype.UnsignedNumber = function () { return this.tryGetToken(RegoParser.UnsignedNumber, 0); };
    ScalarContext.prototype.String = function () { return this.tryGetToken(RegoParser.String, 0); };
    ScalarContext.prototype.Bool = function () { return this.tryGetToken(RegoParser.Bool, 0); };
    ScalarContext.prototype.Null = function () { return this.tryGetToken(RegoParser.Null, 0); };
    Object.defineProperty(ScalarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RegoParser.RULE_scalar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScalarContext.prototype.enterRule = function (listener) {
        if (listener.enterScalar) {
            listener.enterScalar(this);
        }
    };
    // @Override
    ScalarContext.prototype.exitRule = function (listener) {
        if (listener.exitScalar) {
            listener.exitScalar(this);
        }
    };
    // @Override
    ScalarContext.prototype.accept = function (visitor) {
        if (visitor.visitScalar) {
            return visitor.visitScalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScalarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScalarContext = ScalarContext;
